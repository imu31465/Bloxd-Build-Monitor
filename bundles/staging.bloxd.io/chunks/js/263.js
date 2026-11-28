export const id = 263;
export const ids = [263, 268];
export const modules = {
  54067: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb
    });
    var eb = Mb(53988),
      Hb = Mb(41671);
    let pb = !1;

    function Vb() {
      pb || (pb = !0, Hb.b.prototype._sphericalPolynomialTargetSize = 0, Hb.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Hb.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = eb.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((bb => {
              this._texture._sphericalPolynomial = bb, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(bb) {
          this._texture && (this._texture._sphericalPolynomial = bb)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  38401: (bb, wb, Mb) => {
    Mb.d(wb, {
      Color3: () => eb.e,
      c: () => eb.f
    });
    var eb = Mb(38406);
    (0, eb.h)()
  },
  38994: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    var eb = Mb(39001);
    class Hb {
      static GetPlanes(bb) {
        const wb = [];
        for (let Mb = 0; Mb < 6; Mb++) wb.push(new eb.d(0, 0, 0, 0));
        return Hb.GetPlanesToRef(bb, wb), wb
      }
      static GetNearPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[2], wb.normal.y = Mb[7] + Mb[6], wb.normal.z = Mb[11] + Mb[10], wb.d = Mb[15] + Mb[14], wb.normalize()
      }
      static GetFarPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[2], wb.normal.y = Mb[7] - Mb[6], wb.normal.z = Mb[11] - Mb[10], wb.d = Mb[15] - Mb[14], wb.normalize()
      }
      static GetLeftPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[0], wb.normal.y = Mb[7] + Mb[4], wb.normal.z = Mb[11] + Mb[8], wb.d = Mb[15] + Mb[12], wb.normalize()
      }
      static GetRightPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[0], wb.normal.y = Mb[7] - Mb[4], wb.normal.z = Mb[11] - Mb[8], wb.d = Mb[15] - Mb[12], wb.normalize()
      }
      static GetTopPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[1], wb.normal.y = Mb[7] - Mb[5], wb.normal.z = Mb[11] - Mb[9], wb.d = Mb[15] - Mb[13], wb.normalize()
      }
      static GetBottomPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[1], wb.normal.y = Mb[7] + Mb[5], wb.normal.z = Mb[11] + Mb[9], wb.d = Mb[15] + Mb[13], wb.normalize()
      }
      static GetPlanesToRef(bb, wb) {
        Hb.GetNearPlaneToRef(bb, wb[0]), Hb.GetFarPlaneToRef(bb, wb[1]), Hb.GetLeftPlaneToRef(bb, wb[2]), Hb.GetRightPlaneToRef(bb, wb[3]), Hb.GetTopPlaneToRef(bb, wb[4]), Hb.GetBottomPlaneToRef(bb, wb[5])
      }
      static IsPointInFrustum(bb, wb) {
        for (let Mb = 0; Mb < 6; Mb++)
          if (wb[Mb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  39001: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb
    });
    var eb = Mb(38285);
    class Hb {
      constructor(bb, wb, Mb, Hb) {
        this.normal = new eb.o(bb, wb, Mb), this.d = Hb
      }
      ppb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Hb(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let bb = this.normal.getHashCode();
        return bb = 397 * bb ^ this.d, bb
      }
      normalize() {
        const bb = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let wb = 0;
        return 0 !== bb && (wb = 1 / bb), this.normal.x *= wb, this.normal.y *= wb, this.normal.z *= wb, this.d *= wb, this
      }
      transform(bb) {
        const wb = Hb._TmpMatrix;
        bb.invertToRef(wb);
        const Mb = wb.m,
          eb = this.normal.x,
          pb = this.normal.y,
          Vb = this.normal.z,
          gb = this.d,
          lb = eb * Mb[0] + pb * Mb[1] + Vb * Mb[2] + gb * Mb[3],
          Lb = eb * Mb[4] + pb * Mb[5] + Vb * Mb[6] + gb * Mb[7],
          Ib = eb * Mb[8] + pb * Mb[9] + Vb * Mb[10] + gb * Mb[11],
          Ob = eb * Mb[12] + pb * Mb[13] + Vb * Mb[14] + gb * Mb[15];
        return new Hb(lb, Lb, Ib, Ob)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, wb, Mb) {
        const eb = wb.x - bb.x,
          Hb = wb.y - bb.y,
          pb = wb.z - bb.z,
          Vb = Mb.x - bb.x,
          gb = Mb.y - bb.y,
          lb = Mb.z - bb.z,
          Lb = Hb * lb - pb * gb,
          Ib = pb * Vb - eb * lb,
          Ob = eb * gb - Hb * Vb,
          Ub = Math.sqrt(Lb * Lb + Ib * Ib + Ob * Ob);
        let tb;
        return tb = 0 !== Ub ? 1 / Ub : 0, this.normal.x = Lb * tb, this.normal.y = Ib * tb, this.normal.z = Ob * tb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, wb) {
        return eb.o.Dot(this.normal, bb) <= wb
      }
      signedDistanceTo(bb) {
        return eb.o.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Hb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, wb, Mb) {
        const eb = new Hb(0, 0, 0, 0);
        return eb.copyFromPoints(bb, wb, Mb), eb
      }
      static FromPositionAndNormal(bb, wb) {
        const Mb = new Hb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, wb, Mb)
      }
      static FromPositionAndNormalToRef(bb, wb, Mb) {
        return Mb.normal.eZ(wb), Mb.normal.normalize(), Mb.d = -bb.dot(Mb.normal), Mb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, wb, Mb) {
        const Hb = -(wb.x * bb.x + wb.y * bb.y + wb.z * bb.z);
        return eb.o.Dot(Mb, wb) + Hb
      }
    }
    Hb._TmpMatrix = eb.b.Identity()
  },
  38281: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      Matrix: () => eb.b,
      Quaternion: () => eb.e,
      RegisterMathVector: () => eb.g,
      TmpVectors: () => eb.j,
      Vector2: () => eb.m,
      YC: () => eb.o,
      Vector4: () => eb.q
    });
    var eb = Mb(38285);
    (0, eb.g)()
  },
  39323: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb
    });
    class eb {
      constructor(bb, wb, Mb, eb) {
        this.x = bb, this.y = wb, this.width = Mb, this.height = eb
      }
      toGlobal(bb, wb) {
        return new eb(this.x * bb, this.y * wb, this.width * bb, this.height * wb)
      }
      toGlobalToRef(bb, wb, Mb) {
        return Mb.x = this.x * bb, Mb.y = this.y * wb, Mb.width = this.width * bb, Mb.height = this.height * wb, this
      }
      clone() {
        return new eb(this.x, this.y, this.width, this.height)
      }
    }
  },
  53988: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb
    });
    var eb = Mb(38285),
      Hb = Mb(38322),
      pb = Mb(41662),
      Vb = Mb(38294),
      gb = Mb(38406);
    class lb {
      constructor(bb, wb, Mb, eb) {
        this.name = bb, this.worldAxisForNormal = wb, this.worldAxisForFileX = Mb, this.worldAxisForFileY = eb
      }
    }
    class Lb {
      static _NearestPow2Floor(bb) {
        return bb <= 1 ? 1 : 1 << Math.floor(Math.log2(bb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(bb) {
        if (!bb.isCube) return null;
        bb.RJ()?.DC().flushFramebuffer();
        const wb = bb.getSize().width,
          Mb = bb._sphericalPolynomialTargetSize,
          eb = Mb > 0 ? this._NearestPow2Floor(Mb) : 0,
          Hb = !bb.noMipmap && !0 === bb._texture?.generateMipMaps,
          pb = eb > 0 && eb < wb && Hb,
          Vb = pb ? Math.max(0, Math.round(Math.log2(wb / eb))) : 0,
          gb = pb ? Math.max(1, Math.floor(wb / Math.pow(2, Vb))) : wb,
          lb = bb.readPixels(0, Vb, void 0, !1),
          Lb = bb.readPixels(1, Vb, void 0, !1);
        let Ib, Ob;
        bb.isRenderTarget ? (Ib = bb.readPixels(3, Vb, void 0, !1), Ob = bb.readPixels(2, Vb, void 0, !1)) : (Ib = bb.readPixels(2, Vb, void 0, !1), Ob = bb.readPixels(3, Vb, void 0, !1));
        const Ub = bb.readPixels(4, Vb, void 0, !1),
          tb = bb.readPixels(5, Vb, void 0, !1),
          Cb = bb.gammaSpace,
          Eb = eb > 0 && eb < wb && !pb;
        return new Promise((bb => {
          Promise.all([Lb, lb, Ib, Ob, Ub, tb]).then((Mb => {
            let [Hb, pb, Vb, lb, Lb, Ib] = Mb, Ob = gb;
            if (Eb) {
              const bb = 4;
              Hb = this._DownsampleFace(Hb, wb, eb, bb), pb = this._DownsampleFace(pb, wb, eb, bb), Vb = this._DownsampleFace(Vb, wb, eb, bb), lb = this._DownsampleFace(lb, wb, eb, bb), Lb = this._DownsampleFace(Lb, wb, eb, bb), Ib = this._DownsampleFace(Ib, wb, eb, bb), Ob = eb
            }
            const Ub = {
              size: Ob,
              right: pb,
              left: Hb,
              up: Vb,
              down: lb,
              front: Lb,
              back: Ib,
              format: 5,
              type: Hb instanceof Float32Array ? 1 : 0,
              gammaSpace: Cb
            };
            bb(this.ConvertCubeMapToSphericalPolynomial(Ub))
          }))
        }))
      }
      static _AreaElement(bb, wb) {
        return Math.atan2(bb * wb, Math.sqrt(bb * bb + wb * wb + 1))
      }
      static _DownsampleFace(bb, wb, Mb, eb) {
        const Hb = bb instanceof Float32Array ? bb : Float32Array.from(bb),
          pb = Mb * Mb * eb,
          Vb = new Float32Array(pb),
          gb = wb / Mb,
          lb = 1 / (gb * gb);
        for (let Ib = 0; Ib < Mb; Ib++) {
          const bb = Math.floor(Ib * gb),
            pb = Math.floor((Ib + 1) * gb);
          for (let Lb = 0; Lb < Mb; Lb++) {
            const Ob = Math.floor(Lb * gb),
              Ub = Math.floor((Lb + 1) * gb),
              tb = (Ib * Mb + Lb) * eb;
            for (let Mb = 0; Mb < eb; Mb++) {
              let gb = 0;
              for (let Vb = bb; Vb < pb; Vb++)
                for (let bb = Ob; bb < Ub; bb++) gb += Hb[(Vb * wb + bb) * eb + Mb];
              Vb[tb + Mb] = gb * lb
            }
          }
        }
        if (bb instanceof Float32Array) return Vb;
        const Lb = new(0, bb.constructor)(pb);
        for (let Ib = 0; Ib < pb; Ib++) Lb[Ib] = Vb[Ib] + .5 | 0;
        return Lb
      }
      static ConvertCubeMapToSphericalPolynomial(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Mb = wb > 0 ? this._NearestPow2Floor(wb) : 0;
        if (Mb > 0 && bb.size > Mb) {
          const wb = 5 === bb.format ? 4 : 3,
            eb = ["right", "left", "up", "down", "front", "back"],
            Hb = {};
          for (const pb of eb) Hb[pb] = this._DownsampleFace(bb[pb], bb.size, Mb, wb);
          bb = {
            ...bb,
            ...Hb,
            size: Mb
          }
        }
        const eb = new pb.e;
        let lb = 0;
        const Lb = 2 / bb.size,
          Ib = Lb,
          Ob = .5 * Lb,
          Ub = Ob - 1;
        for (let pb = 0; pb < 6; pb++) {
          const wb = this._FileFaces[pb],
            Mb = bb[wb.name];
          let tb = Ub;
          const Cb = 5 === bb.format ? 4 : 3;
          for (let pb = 0; pb < bb.size; pb++) {
            let Eb = Ub;
            for (let Ib = 0; Ib < bb.size; Ib++) {
              const Ub = wb.worldAxisForFileX.scale(Eb).add(wb.worldAxisForFileY.scale(tb)).add(wb.worldAxisForNormal);
              Ub.normalize();
              const Fb = this._AreaElement(Eb - Ob, tb - Ob) - this._AreaElement(Eb - Ob, tb + Ob) - this._AreaElement(Eb + Ob, tb - Ob) + this._AreaElement(Eb + Ob, tb + Ob);
              let Bb = Mb[pb * bb.size * Cb + Ib * Cb + 0],
                sb = Mb[pb * bb.size * Cb + Ib * Cb + 1],
                mb = Mb[pb * bb.size * Cb + Ib * Cb + 2];
              isNaN(Bb) && (Bb = 0), isNaN(sb) && (sb = 0), isNaN(mb) && (mb = 0), 0 === bb.type && (Bb /= 255, sb /= 255, mb /= 255), bb.gammaSpace && (Bb = Math.pow((0, Hb.Clamp)(Bb), Vb.h), sb = Math.pow((0, Hb.Clamp)(sb), Vb.h), mb = Math.pow((0, Hb.Clamp)(mb), Vb.h));
              const hb = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const bb = Math.max(Bb, sb, mb);
                if (bb > hb) {
                  const wb = hb / bb;
                  Bb *= wb, sb *= wb, mb *= wb
                }
              } else Bb = (0, Hb.Clamp)(Bb, 0, hb), sb = (0, Hb.Clamp)(sb, 0, hb), mb = (0, Hb.Clamp)(mb, 0, hb);
              const zb = new gb.e(Bb, sb, mb);
              eb.addLight(Ub, zb, Fb), lb += Fb, Eb += Lb
            }
            tb += Ib
          }
        }
        const tb = 6 * (4 * Math.PI) / 6 / lb;
        return eb.scaleInPlace(tb), eb.convertIncidentRadianceToIrradiance(), eb.convertIrradianceToLambertianRadiance(), pb.i.FromHarmonics(eb)
      }
    }
    Lb._FileFaces = [new lb("right", new eb.o(1, 0, 0), new eb.o(0, 0, -1), new eb.o(0, -1, 0)), new lb("left", new eb.o(-1, 0, 0), new eb.o(0, 0, 1), new eb.o(0, -1, 0)), new lb("up", new eb.o(0, 1, 0), new eb.o(1, 0, 0), new eb.o(0, 0, 1)), new lb("down", new eb.o(0, -1, 0), new eb.o(1, 0, 0), new eb.o(0, 0, -1)), new lb("front", new eb.o(0, 0, 1), new eb.o(1, 0, 0), new eb.o(0, -1, 0)), new lb("back", new eb.o(0, 0, -1), new eb.o(-1, 0, 0), new eb.o(0, -1, 0))], Lb.MAX_HDRI_VALUE = 4096, Lb.PRESERVE_CLAMPED_COLORS = !1
  },
  53845: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb.d,
      i: () => eb.o
    });
    var eb = Mb(41722);
    (0, eb.t)()
  },
  39148: (bb, wb, Mb) => {
    function eb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const wb = 16 * Math.random() | 0;
        return ("x" === bb ? wb : 3 & wb | 8).toString(16)
      }))
    }
    Mb.d(wb, {
      c: () => eb
    })
  },
  54033: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb
    });
    var eb = Mb(54022),
      Hb = Mb(54042);
    class pb {
      static ExpandRGBDTexture(bb) {
        const wb = bb._texture;
        if (!wb || !bb.isRGBD) return;
        const Hb = wb.DC(),
          pb = Hb.getCaps(),
          Vb = wb.isReady;
        let gb = !1;
        pb.textureHalfFloatRender && pb.textureHalfFloatLinearFiltering ? (gb = !0, wb.type = 2) : pb.textureFloatRender && pb.textureFloatLinearFiltering && (gb = !0, wb.type = 1), gb && (wb.isReady = !1, wb._isRGBD = !1, wb.invertY = !1);
        const lb = async () => {
          const pb = Hb.isWebGPU,
            Vb = pb ? 1 : 0;
          wb.isReady = !1, pb ? await Mb.e(661).then((() => Mb(64523))) : await Mb.e(643).then((() => Mb(64529)));
          const gb = new eb.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Hb, !1, void 0, wb.type, void 0, null, !1, void 0, Vb);
          gb.externalTextureSamplerBinding = !0;
          const lb = Hb.createRenderTargetTexture(wb.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: wb.samplingMode,
            type: wb.type,
            format: 5
          });
          gb.onEffectCreatedObservable.addOnce((Mb => {
            Mb.executeWhenCompiled((() => {
              gb.onApply = bb => {
                bb._bindTexture("textureSampler", wb), bb.setFloat2("scale", 1, 1)
              }, bb.RJ()?.postProcessManager.directRender([gb], lb, !0), Hb.restoreDefaultFramebuffer(), Hb._releaseTexture(wb), gb && gb.dispose(), lb._swapAndDie(wb), wb.isReady = !0
            }))
          }))
        };
        gb && (Vb ? lb() : bb.onLoadObservable.addOnce(lb))
      }
      static async EncodeTextureToRGBD(bb, wb) {
        let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return wb.DC().isWebGPU ? await Mb.e(662).then((() => Mb(64543))) : await Mb.e(644).then((() => Mb(64537))), await (0, Hb.c)("rgbdEncode", bb, wb, eb, 1, 5)
      }
    }
  },
  64405: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      AsyncLoop: () => eb.b,
      RegisterTools: () => eb.d,
      Tools: () => eb.e,
      className: () => eb.h
    });
    var eb = Mb(41771);
    (0, eb.d)()
  },
  54084: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    class eb {
      constructor(bb) {
        this._pendingActions = new Array, this._workerInfos = bb.map((bb => ({
          workerPromise: Promise.resolve(bb),
          idle: !0
        })))
      }
      dispose() {
        for (const bb of this._workerInfos) bb.workerPromise.then((bb => {
          bb.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(bb) {
        this._executeOnIdleWorker(bb) || this._pendingActions.push(bb)
      }
      _executeOnIdleWorker(bb) {
        for (const wb of this._workerInfos)
          if (wb.idle) return this._execute(wb, bb), !0;
        return !1
      }
      _execute(bb, wb) {
        bb.idle = !1, bb.workerPromise.then((Mb => {
          wb(Mb, (() => {
            const wb = this._pendingActions.shift();
            wb ? this._execute(bb, wb) : bb.idle = !0
          }))
        }))
      }
    }
    class Hb extends eb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Hb.DefaultOptions;
        super([]), this._maxWorkers = bb, this._createWorkerAsync = wb, this._options = Mb
      }
      push(bb) {
        if (!this._executeOnIdleWorker(bb))
          if (this._workerInfos.length < this._maxWorkers) {
            const wb = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(wb), this._execute(wb, bb)
          } else this._pendingActions.push(bb)
      }
      _execute(bb, wb) {
        bb.timeoutId && (clearTimeout(bb.timeoutId), delete bb.timeoutId), super._execute(bb, ((Mb, eb) => {
          wb(Mb, (() => {
            eb(), bb.idle && (bb.timeoutId = setTimeout((() => {
              bb.workerPromise.then((bb => {
                bb.terminate()
              }));
              const wb = this._workerInfos.indexOf(bb); - 1 !== wb && this._workerInfos.splice(wb, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Hb.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  64430: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      AbstractThreeMfSerializer: () => Pg,
      BVHExporter: () => RV,
      ContentTypeFileName: () => Eg,
      DefaultXmlSerializerFormatOptions: () => aV,
      DefaultXmlSerializerNumberOptions: () => qV,
      EXT_lights_area: () => BH,
      EXT_mesh_gpu_instancing: () => ve,
      EXT_texture_avif: () => VV,
      EXT_texture_webp: () => MV,
      GLTF2Export: () => Je,
      GLTFData: () => Lb,
      GetXmlFieldMeta: () => SV,
      GetXmlName: () => NV,
      IsQualifiedName: () => DV,
      KHR_draco_mesh_compression: () => Te,
      KHR_interactivity: () => IH,
      KHR_lights_punctual: () => VH,
      KHR_materials_anisotropy: () => zH,
      KHR_materials_clearcoat: () => rH,
      KHR_materials_coat: () => fH,
      KHR_materials_diffuse_roughness: () => Sp,
      KHR_materials_diffuse_transmission: () => vH,
      KHR_materials_dispersion: () => aH,
      KHR_materials_emissive_strength: () => PH,
      KHR_materials_fuzz: () => Op,
      KHR_materials_ior: () => TH,
      KHR_materials_iridescence: () => Mp,
      KHR_materials_openpbr: () => Gp,
      KHR_materials_sheen: () => Vp,
      KHR_materials_specular: () => Ep,
      KHR_materials_transmission: () => mp,
      KHR_materials_unlit: () => jp,
      KHR_materials_volume: () => Dp,
      KHR_materials_volume_scatter: () => fp,
      KHR_texture_basisu: () => Tp,
      KHR_texture_transform: () => dp,
      Known3mfRelationshipTypes: () => Fg,
      KnownI3mfContentType: () => Ig,
      Matrix3d: () => Xg,
      MatrixFormatter: () => xg,
      ModelFileName: () => tg,
      NumberFormatter: () => dV,
      OBJExport: () => Vb,
      Object3dDirName: () => Ug,
      OpenXmlContentTypesNamespace: () => lg,
      OpenXmlRelationshipsNamespace: () => Lg,
      RegisterEXT_lights_area: () => mH,
      RegisterEXT_mesh_gpu_instancing: () => Ge,
      RegisterEXT_texture_avif: () => lV,
      RegisterEXT_texture_webp: () => HV,
      RegisterKHR_draco_mesh_compression: () => bH,
      RegisterKHR_interactivity: () => UH,
      RegisterKHR_lights_punctual: () => lH,
      RegisterKHR_materials_anisotropy: () => xH,
      RegisterKHR_materials_clearcoat: () => DH,
      RegisterKHR_materials_coat: () => WH,
      RegisterKHR_materials_diffuse_roughness: () => vp,
      RegisterKHR_materials_diffuse_transmission: () => GH,
      RegisterKHR_materials_dispersion: () => uH,
      RegisterKHR_materials_emissive_strength: () => yH,
      RegisterKHR_materials_fuzz: () => tp,
      RegisterKHR_materials_ior: () => bp,
      RegisterKHR_materials_iridescence: () => Hp,
      RegisterKHR_materials_openpbr: () => ap,
      RegisterKHR_materials_sheen: () => lp,
      RegisterKHR_materials_specular: () => Bp,
      RegisterKHR_materials_transmission: () => zp,
      RegisterKHR_materials_unlit: () => rp,
      RegisterKHR_materials_volume: () => Yp,
      RegisterKHR_materials_volume_scatter: () => Wp,
      RegisterKHR_texture_basisu: () => bV,
      RegisterKHR_texture_transform: () => np,
      RelationshipDirName: () => Og,
      RelationshipFileName: () => Cg,
      ResolveFormatOptions: () => uV,
      ResolveNumberOptions: () => iV,
      STLExport: () => LV,
      ST_ObjectType: () => gg,
      ST_Unit: () => Vg,
      StringXmlWriter: () => Mg,
      ThreeDimModelNamespace: () => Hg,
      ThreeMf: () => ng,
      ThreeMfBase: () => Ng,
      ThreeMfBaseMaterials: () => Sg,
      ThreeMfBuild: () => vg,
      ThreeMfComponent: () => Jg,
      ThreeMfComponents: () => Wg,
      ThreeMfComponentsBuilder: () => qg,
      ThreeMfContentType: () => sg,
      ThreeMfContentTypes: () => Bg,
      ThreeMfDocument: () => zg,
      ThreeMfDocumentBuilder: () => dg,
      ThreeMfItem: () => Qg,
      ThreeMfMaterialBuilder: () => ig,
      ThreeMfMesh: () => cg,
      ThreeMfMeshBuilder: () => ag,
      ThreeMfMeta: () => Kg,
      ThreeMfMetadataGroup: () => rg,
      ThreeMfModel: () => jg,
      ThreeMfModelBuilder: () => ug,
      ThreeMfObject: () => Dg,
      ThreeMfObjectBuilder: () => Gg,
      ThreeMfRelationship: () => hg,
      ThreeMfRelationships: () => mg,
      ThreeMfResources: () => Rg,
      ThreeMfSerializer: () => Tg,
      ThreeMfSerializerGlobalConfiguration: () => yg,
      ThreeMfTriangle: () => Ag,
      ThreeMfTriangles: () => fg,
      ThreeMfVertex: () => Zg,
      ThreeMfVertices: () => Yg,
      ToQualifiedString: () => GV,
      TokenType: () => bg,
      TriangleSetsNamespace: () => pg,
      USDZExportAsync: () => KV,
      Utf8XmlWriterToBytes: () => eg,
      XmlAttr: () => WV,
      XmlBuilder: () => wg,
      XmlElem: () => JV,
      XmlIgnore: () => AV,
      XmlName: () => fV,
      XmlNameToParts: () => QV,
      XmlSerializer: () => TV,
      _ConvertToGLTFPBRMetallicRoughness: () => rM,
      _SolveMetallic: () => KM,
      __IGLTFExporterExtension: () => gb
    });
    var eb = Mb(38281),
      Hb = Mb(64405),
      pb = Mb(41963);
    class Vb {
      static OBJ(bb, wb, Mb, Vb) {
        const gb = [];
        let lb = 1,
          Lb = 1;
        wb && (Mb || (Mb = "mat"), gb.push("mtllib " + Mb + ".mtl"));
        for (let Ib = 0; Ib < bb.length; Ib++) {
          const Mb = bb[Ib],
            Ob = Mb.name || `mesh${Ib}}`;
          gb.push(`o ${Ob}`);
          let Ub = null;
          if (Vb) {
            const bb = Mb.computeWorldMatrix(!0);
            Ub = new eb.Matrix, bb.invertToRef(Ub), Mb.bakeTransformIntoVertices(bb)
          }
          if (wb) {
            const bb = Mb.material;
            bb && gb.push("usemtl " + bb.id)
          }
          const tb = Mb.geometry;
          if (!tb) {
            Hb.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const Cb = tb.getVerticesData("position"),
            Eb = tb.getVerticesData("normal"),
            Fb = tb.getVerticesData("uv"),
            Bb = tb.ipb();
          let sb = 0,
            mb = 0;
          if (!Cb || !Bb) {
            Hb.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const hb = bb[0].RJ().useRightHandedSystem ? 1 : -1;
          for (let bb = 0; bb < Cb.length; bb += 3) gb.push("v " + Cb[bb] * hb + " " + Cb[bb + 1] + " " + Cb[bb + 2]), sb++;
          if (null != Eb)
            for (let bb = 0; bb < Eb.length; bb += 3) gb.push("vn " + Eb[bb] * hb + " " + Eb[bb + 1] + " " + Eb[bb + 2]);
          if (null != Fb)
            for (let bb = 0; bb < Fb.length; bb += 2) gb.push("vt " + Fb[bb] + " " + Fb[bb + 1]), mb++;
          const zb = ["", "", ""],
            Xb = (Mb.material || Mb.RJ().defaultMaterial)._getEffectiveOrientation(Mb),
            [xb, jb] = Xb === pb.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let bb = 0; bb < Bb.length; bb += 3) {
            const wb = [String(Bb[bb] + lb), String(Bb[bb + xb] + lb), String(Bb[bb + jb] + lb)],
              Mb = [String(Bb[bb] + Lb), String(Bb[bb + xb] + Lb), String(Bb[bb + jb] + Lb)],
              eb = wb,
              Hb = null != Fb ? Mb : zb,
              pb = null != Eb ? wb : zb;
            gb.push("f " + eb[0] + "/" + Hb[0] + "/" + pb[0] + " " + eb[1] + "/" + Hb[1] + "/" + pb[1] + " " + eb[2] + "/" + Hb[2] + "/" + pb[2])
          }
          Vb && Ub && Mb.bakeTransformIntoVertices(Ub), lb += sb, Lb += mb
        }
        return gb.join("\n")
      }
      static MTL(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const Mb = [],
          eb = bb.material;
        Mb.push("newmtl " + wb), Mb.push("  Ns " + eb.specularPower.toFixed(4)), Mb.push("  Ni 1.5000"), Mb.push("  d " + eb.alpha.toFixed(4)), Mb.push("  Tr 0.0000"), Mb.push("  Tf 1.0000 1.0000 1.0000"), Mb.push("  illum 2"), Mb.push("  Ka " + eb.ambientColor.r.toFixed(4) + " " + eb.ambientColor.g.toFixed(4) + " " + eb.ambientColor.b.toFixed(4)), Mb.push("  Kd " + eb.diffuseColor.r.toFixed(4) + " " + eb.diffuseColor.g.toFixed(4) + " " + eb.diffuseColor.b.toFixed(4)), Mb.push("  Ks " + eb.specularColor.r.toFixed(4) + " " + eb.specularColor.g.toFixed(4) + " " + eb.specularColor.b.toFixed(4)), Mb.push("  Ke " + eb.emissiveColor.r.toFixed(4) + " " + eb.emissiveColor.g.toFixed(4) + " " + eb.emissiveColor.b.toFixed(4));
        eb.ambientTexture && Mb.push("  map_Ka " + eb.ambientTexture.name), eb.diffuseTexture && Mb.push("  map_Kd " + eb.diffuseTexture.name), eb.specularTexture && Mb.push("  map_Ks " + eb.specularTexture.name), eb.bumpTexture && Mb.push("  map_bump -imfchan z " + eb.bumpTexture.name), eb.opacityTexture && Mb.push("  map_d " + eb.opacityTexture.name);
        return Mb.join("\n")
      }
    }
    var gb = 0,
      lb = Mb(53845);
    class Lb {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const bb in this.files) {
          const wb = this.files[bb],
            Mb = new Blob([wb], {
              type: (0, lb.e)(bb)
            });
          Hb.Tools.Download(Mb, bb)
        }
      }
    }
    var Ib = Mb(42831),
      Ob = Mb(42787),
      Ub = Mb(53828),
      tb = Mb(42792),
      Cb = Mb(41496),
      Eb = Mb(38313),
      Fb = Mb(38401),
      Bb = Mb(38322);
    const sb = Bb.HighestCommonFactor,
      mb = {
        ...Bb,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: sb
      };
    var hb = Mb(54042),
      zb = Mb(42807),
      Xb = Mb(53775),
      xb = Mb(53781),
      jb = Mb(54062);
    (0, jb.RegisterDumpTools)();
    var Kb = Mb(41675),
      rb = Mb(41679),
      Rb = Mb(39971),
      Db = Mb(41777),
      cb = Mb(42152),
      Yb = Mb(54033);
    let Zb = 0;
    const fb = (bb, wb, Mb, eb) => {
        if (!bb[Mb]) {
          const Hb = bb.useDelayedTextureLoading;
          bb.useDelayedTextureLoading = !1;
          const pb = bb._blockEntityCollection;
          bb._blockEntityCollection = !1;
          const Vb = cb.f.CreateFromBase64String(wb, eb + Zb++, bb, !0, !1, cb.f.BILINEAR_SAMPLINGMODE);
          bb._blockEntityCollection = pb;
          const gb = bb.DC().getLoadedTexturesCache(),
            lb = gb.indexOf(Vb.getInternalTexture()); - 1 !== lb && gb.splice(lb, 1), Vb.isRGBD = !0, Vb.wrapU = cb.f.CLAMP_ADDRESSMODE, Vb.wrapV = cb.f.CLAMP_ADDRESSMODE, bb[Mb] = Vb, bb.useDelayedTextureLoading = Hb, Yb.b.ExpandRGBDTexture(Vb);
          const Lb = bb.DC().RC.add((() => {
            Vb.isRGBD = !0;
            const wb = bb.onBeforeRenderObservable.add((() => {
              Vb.isReady() && (bb.onBeforeRenderObservable.remove(wb), Yb.b.ExpandRGBDTexture(Vb))
            }))
          }));
          bb.vJ.add((() => {
            bb.DC().RC.remove(Lb)
          }))
        }
        return bb[Mb]
      },
      Ab = bb => fb(bb, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      Wb = bb => fb(bb, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Jb = bb => fb(bb, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var Sb = Mb(41764),
      Nb = Mb(38285),
      vb = Mb(41816),
      Qb = Mb(41954),
      Gb = Mb(42044);
    class qb extends Qb.b {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let ab = (() => {
      var bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb;
      let Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb, sb, mb = Gb.d,
        hb = [],
        zb = [],
        Xb = [],
        xb = [],
        jb = [],
        Rb = [],
        Db = [],
        cb = [],
        Yb = [],
        Zb = [],
        fb = [],
        Ab = [],
        Wb = [],
        Jb = [],
        Sb = [],
        Nb = [],
        vb = [],
        Qb = [];
      return bb = class extends mb {
        get useEnergyConservation() {
          return (0, Kb.b)(this, wb, "f")
        }
        set useEnergyConservation(bb) {
          (0, Kb.f)(this, wb, bb, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, Kb.b)(this, Mb, "f")
        }
        set useSmithVisibilityHeightCorrelated(bb) {
          (0, Kb.f)(this, Mb, bb, "f")
        }
        get useSphericalHarmonics() {
          return (0, Kb.b)(this, eb, "f")
        }
        set useSphericalHarmonics(bb) {
          (0, Kb.f)(this, eb, bb, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, Kb.b)(this, Hb, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(bb) {
          (0, Kb.f)(this, Hb, bb, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, Kb.b)(this, pb, "f")
        }
        set mixIblRadianceWithIrradiance(bb) {
          (0, Kb.f)(this, pb, bb, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, Kb.b)(this, Vb, "f")
        }
        set useLegacySpecularEnergyConservation(bb) {
          (0, Kb.f)(this, Vb, bb, "f")
        }
        get baseDiffuseModel() {
          return (0, Kb.b)(this, gb, "f")
        }
        set baseDiffuseModel(bb) {
          (0, Kb.f)(this, gb, bb, "f")
        }
        get dielectricSpecularModel() {
          return (0, Kb.b)(this, lb, "f")
        }
        set dielectricSpecularModel(bb) {
          (0, Kb.f)(this, lb, bb, "f")
        }
        get conductorSpecularModel() {
          return (0, Kb.b)(this, Lb, "f")
        }
        set conductorSpecularModel(bb) {
          (0, Kb.f)(this, Lb, bb, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Ib) {
          let Ob = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Ib, "PBRBRDF", 90, new qb, Ob), this._useEnergyConservation = bb.DEFAULT_USE_ENERGY_CONSERVATION, wb.set(this, (0, Kb.m)(this, hb, bb.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, Kb.m)(this, zb), bb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), Mb.set(this, (0, Kb.m)(this, Xb, bb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, Kb.m)(this, xb), bb.DEFAULT_USE_SPHERICAL_HARMONICS), eb.set(this, (0, Kb.m)(this, jb, bb.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, Kb.m)(this, Rb), bb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Hb.set(this, (0, Kb.m)(this, Db, bb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, Kb.m)(this, cb), bb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), pb.set(this, (0, Kb.m)(this, Yb, bb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, Kb.m)(this, Zb), bb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), Vb.set(this, (0, Kb.m)(this, fb, bb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, Kb.m)(this, Ab), bb.DEFAULT_DIFFUSE_MODEL), gb.set(this, (0, Kb.m)(this, Wb, bb.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, Kb.m)(this, Jb), bb.DEFAULT_DIELECTRIC_SPECULAR_MODEL), lb.set(this, (0, Kb.m)(this, Sb, bb.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, Kb.m)(this, Nb), bb.DEFAULT_CONDUCTOR_SPECULAR_MODEL), Lb.set(this, (0, Kb.m)(this, vb, bb.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, Kb.m)(this, Qb), this._internalMarkAllSubMeshesAsMiscDirty = Ib._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(bb) {
          bb.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, bb.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, bb.SPHERICAL_HARMONICS = this._useSphericalHarmonics, bb.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, bb.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, bb.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, bb.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, bb.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, bb.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, wb = new WeakMap, Mb = new WeakMap, eb = new WeakMap, Hb = new WeakMap, pb = new WeakMap, Vb = new WeakMap, gb = new WeakMap, lb = new WeakMap, Lb = new WeakMap, (() => {
        const wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(mb[Symbol.metadata] ?? null) : void 0;
        Ib = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], Ob = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], Ub = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], tb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], Cb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], Eb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], Fb = [(0, rb.E)("baseDiffuseModel"), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], Bb = [(0, rb.E)("dielectricSpecularModel"), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], sb = [(0, rb.E)("conductorSpecularModel"), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], (0, Kb.i)(bb, null, Ib, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: bb => "useEnergyConservation" in bb,
            get: bb => bb.useEnergyConservation,
            set: (bb, wb) => {
              bb.useEnergyConservation = wb
            }
          },
          metadata: wb
        }, hb, zb), (0, Kb.i)(bb, null, Ob, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSmithVisibilityHeightCorrelated" in bb,
            get: bb => bb.useSmithVisibilityHeightCorrelated,
            set: (bb, wb) => {
              bb.useSmithVisibilityHeightCorrelated = wb
            }
          },
          metadata: wb
        }, Xb, xb), (0, Kb.i)(bb, null, Ub, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSphericalHarmonics" in bb,
            get: bb => bb.useSphericalHarmonics,
            set: (bb, wb) => {
              bb.useSphericalHarmonics = wb
            }
          },
          metadata: wb
        }, jb, Rb), (0, Kb.i)(bb, null, tb, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSpecularGlossinessInputEnergyConservation" in bb,
            get: bb => bb.useSpecularGlossinessInputEnergyConservation,
            set: (bb, wb) => {
              bb.useSpecularGlossinessInputEnergyConservation = wb
            }
          },
          metadata: wb
        }, Db, cb), (0, Kb.i)(bb, null, Cb, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: bb => "mixIblRadianceWithIrradiance" in bb,
            get: bb => bb.mixIblRadianceWithIrradiance,
            set: (bb, wb) => {
              bb.mixIblRadianceWithIrradiance = wb
            }
          },
          metadata: wb
        }, Yb, Zb), (0, Kb.i)(bb, null, Eb, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLegacySpecularEnergyConservation" in bb,
            get: bb => bb.useLegacySpecularEnergyConservation,
            set: (bb, wb) => {
              bb.useLegacySpecularEnergyConservation = wb
            }
          },
          metadata: wb
        }, fb, Ab), (0, Kb.i)(bb, null, Fb, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseDiffuseModel" in bb,
            get: bb => bb.baseDiffuseModel,
            set: (bb, wb) => {
              bb.baseDiffuseModel = wb
            }
          },
          metadata: wb
        }, Wb, Jb), (0, Kb.i)(bb, null, Bb, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: bb => "dielectricSpecularModel" in bb,
            get: bb => bb.dielectricSpecularModel,
            set: (bb, wb) => {
              bb.dielectricSpecularModel = wb
            }
          },
          metadata: wb
        }, Sb, Nb), (0, Kb.i)(bb, null, sb, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: bb => "conductorSpecularModel" in bb,
            get: bb => bb.conductorSpecularModel,
            set: (bb, wb) => {
              bb.conductorSpecularModel = wb
            }
          },
          metadata: wb
        }, vb, Qb), wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wb
        })
      })(), bb.DEFAULT_USE_ENERGY_CONSERVATION = !0, bb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, bb.DEFAULT_USE_SPHERICAL_HARMONICS = !0, bb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, bb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, bb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, bb.DEFAULT_DIFFUSE_MODEL = 0, bb.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, bb.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, bb
    })();
    var ib = Mb(41943),
      ub = Mb(38406),
      db = Mb(41952),
      Pb = Mb(41786),
      nb = Mb(42017),
      yb = Mb(42010),
      ob = Mb(42026),
      Tb = Mb(41999);
    class kb extends Qb.b {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let bw = (() => {
      var bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb;
      let Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb, sb, mb, hb, zb, Xb, xb, jb = Gb.d,
        Rb = [],
        Db = [],
        cb = [],
        Yb = [],
        Zb = [],
        fb = [],
        Ab = [],
        Wb = [],
        Jb = [],
        Sb = [],
        Nb = [],
        vb = [],
        Qb = [],
        qb = [],
        ab = [],
        ib = [],
        db = [],
        Pb = [],
        nb = [],
        ob = [],
        bw = [],
        ww = [],
        Mw = [],
        ew = [],
        Hw = [],
        pw = [],
        Vw = [],
        gw = [];
      return bb = class extends jb {
        get isEnabled() {
          return (0, Kb.b)(this, wb, "f")
        }
        set isEnabled(bb) {
          (0, Kb.f)(this, wb, bb, "f")
        }
        get indexOfRefraction() {
          return (0, Kb.b)(this, Mb, "f")
        }
        set indexOfRefraction(bb) {
          (0, Kb.f)(this, Mb, bb, "f")
        }
        get texture() {
          return (0, Kb.b)(this, eb, "f")
        }
        set texture(bb) {
          (0, Kb.f)(this, eb, bb, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Kb.b)(this, Hb, "f")
        }
        set useRoughnessFromMainTexture(bb) {
          (0, Kb.f)(this, Hb, bb, "f")
        }
        get textureRoughness() {
          return (0, Kb.b)(this, pb, "f")
        }
        set textureRoughness(bb) {
          (0, Kb.f)(this, pb, bb, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, Kb.b)(this, Vb, "f")
        }
        set remapF0OnInterfaceChange(bb) {
          (0, Kb.f)(this, Vb, bb, "f")
        }
        get bumpTexture() {
          return (0, Kb.b)(this, gb, "f")
        }
        set bumpTexture(bb) {
          (0, Kb.f)(this, gb, bb, "f")
        }
        get isTintEnabled() {
          return (0, Kb.b)(this, lb, "f")
        }
        set isTintEnabled(bb) {
          (0, Kb.f)(this, lb, bb, "f")
        }
        get tintTexture() {
          return (0, Kb.b)(this, Lb, "f")
        }
        set tintTexture(bb) {
          (0, Kb.f)(this, Lb, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Ib) {
          let Ob = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Ib, "PBRClearCoat", 100, new kb, Ob), this._isEnabled = !1, wb.set(this, (0, Kb.m)(this, Rb, !1)), this.intensity = ((0, Kb.m)(this, Db), (0, Kb.m)(this, cb, 1)), this.roughness = ((0, Kb.m)(this, Yb), (0, Kb.m)(this, Zb, 0)), this._indexOfRefraction = ((0, Kb.m)(this, fb), bb._DefaultIndexOfRefraction), Mb.set(this, (0, Kb.m)(this, Ab, bb._DefaultIndexOfRefraction)), this._texture = ((0, Kb.m)(this, Wb), null), eb.set(this, (0, Kb.m)(this, Jb, null)), this._useRoughnessFromMainTexture = ((0, Kb.m)(this, Sb), !0), Hb.set(this, (0, Kb.m)(this, Nb, !0)), this._textureRoughness = ((0, Kb.m)(this, vb), null), pb.set(this, (0, Kb.m)(this, Qb, null)), this._remapF0OnInterfaceChange = ((0, Kb.m)(this, qb), !0), Vb.set(this, (0, Kb.m)(this, ab, !0)), this._bumpTexture = ((0, Kb.m)(this, ib), null), gb.set(this, (0, Kb.m)(this, db, null)), this._isTintEnabled = ((0, Kb.m)(this, Pb), !1), lb.set(this, (0, Kb.m)(this, nb, !1)), this.tintColor = ((0, Kb.m)(this, ob), (0, Kb.m)(this, bw, ub.e.White())), this.tintColorAtDistance = ((0, Kb.m)(this, ww), (0, Kb.m)(this, Mw, 1)), this.tintThickness = ((0, Kb.m)(this, ew), (0, Kb.m)(this, Hw, 1)), this._tintTexture = ((0, Kb.m)(this, pw), null), Lb.set(this, (0, Kb.m)(this, Vw, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Kb.m)(this, gw), this._internalMarkAllSubMeshesAsTexturesDirty = Ib._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, wb, Mb) {
          if (!this._isEnabled) return !0;
          const eb = this._material._disableBumpMap;
          if (bb._areTexturesDirty && wb.texturesEnabled) {
            if (this._texture && yb.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && yb.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (Mb.getCaps().standardDerivatives && this._bumpTexture && yb.e.ClearCoatBumpTextureEnabled && !eb && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && yb.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(wb, Mb) {
          this._isEnabled ? (wb.CLEARCOAT = !0, wb.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, wb.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, wb._areTexturesDirty && Mb.texturesEnabled && (this._texture && yb.e.ClearCoatTextureEnabled ? (0, Tb.$)(this._texture, wb, "CLEARCOAT_TEXTURE") : wb.CLEARCOAT_TEXTURE = !1, this._textureRoughness && yb.e.ClearCoatTextureEnabled ? (0, Tb.$)(this._textureRoughness, wb, "CLEARCOAT_TEXTURE_ROUGHNESS") : wb.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && yb.e.ClearCoatBumpTextureEnabled ? (0, Tb.$)(this._bumpTexture, wb, "CLEARCOAT_BUMP") : wb.CLEARCOAT_BUMP = !1, wb.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === bb._DefaultIndexOfRefraction, this._isTintEnabled ? (wb.CLEARCOAT_TINT = !0, this._tintTexture && yb.e.ClearCoatTintTextureEnabled ? ((0, Tb.$)(this._tintTexture, wb, "CLEARCOAT_TINT_TEXTURE"), wb.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : wb.CLEARCOAT_TINT_TEXTURE = !1) : (wb.CLEARCOAT_TINT = !1, wb.CLEARCOAT_TINT_TEXTURE = !1))) : (wb.CLEARCOAT = !1, wb.CLEARCOAT_TEXTURE = !1, wb.CLEARCOAT_TEXTURE_ROUGHNESS = !1, wb.CLEARCOAT_BUMP = !1, wb.CLEARCOAT_TINT = !1, wb.CLEARCOAT_TINT_TEXTURE = !1, wb.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, wb.CLEARCOAT_DEFAULTIOR = !1, wb.CLEARCOAT_TEXTUREDIRECTUV = 0, wb.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, wb.CLEARCOAT_BUMPDIRECTUV = 0, wb.CLEARCOAT_REMAP_F0 = !1, wb.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, wb.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(bb, wb, Mb, eb) {
          if (!this._isEnabled) return;
          const Hb = eb.materialDefines,
            pb = this._material.isFrozen,
            Vb = this._material._disableBumpMap,
            gb = this._material._invertNormalMapX,
            lb = this._material._invertNormalMapY;
          if (!bb.useUbo || !pb || !bb.isSync) {
            (this._texture || this._textureRoughness) && yb.e.ClearCoatTextureEnabled && (bb.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Tb.C)(this._texture, bb, "clearCoat"), this._textureRoughness && !Hb.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Tb.C)(this._textureRoughness, bb, "clearCoatRoughness")), this._bumpTexture && Mb.getCaps().standardDerivatives && yb.e.ClearCoatTextureEnabled && !Vb && (bb.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, Tb.C)(this._bumpTexture, bb, "clearCoatBump"), wb._mirroredCameraPosition ? bb.updateFloat2("vClearCoatTangentSpaceParams", gb ? 1 : -1, lb ? 1 : -1) : bb.updateFloat2("vClearCoatTangentSpaceParams", gb ? -1 : 1, lb ? -1 : 1)), this._tintTexture && yb.e.ClearCoatTintTextureEnabled && (bb.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, Tb.C)(this._tintTexture, bb, "clearCoatTint")), bb.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const eb = 1 - this._indexOfRefraction,
              pb = 1 + this._indexOfRefraction,
              Lb = Math.pow(-eb / pb, 2),
              Ib = 1 / this._indexOfRefraction;
            bb.updateFloat4("vClearCoatRefractionParams", Lb, Ib, eb, pb), this._isTintEnabled && (bb.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), bb.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          wb.texturesEnabled && (this._texture && yb.e.ClearCoatTextureEnabled && bb.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Hb.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && yb.e.ClearCoatTextureEnabled && bb.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && Mb.getCaps().standardDerivatives && yb.e.ClearCoatBumpTextureEnabled && !Vb && bb.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && yb.e.ClearCoatTintTextureEnabled && bb.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(bb) {
          return this._texture === bb || (this._textureRoughness === bb || (this._bumpTexture === bb || this._tintTexture === bb))
        }
        getActiveTextures(bb) {
          this._texture && bb.push(this._texture), this._textureRoughness && bb.push(this._textureRoughness), this._bumpTexture && bb.push(this._bumpTexture), this._tintTexture && bb.push(this._tintTexture)
        }
        getAnimatables(bb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && bb.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && bb.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && bb.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && bb.push(this._tintTexture)
        }
        dispose(bb) {
          bb && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(bb, wb, Mb) {
          return bb.CLEARCOAT_BUMP && wb.addFallback(Mb++, "CLEARCOAT_BUMP"), bb.CLEARCOAT_TINT && wb.addFallback(Mb++, "CLEARCOAT_TINT"), bb.CLEARCOAT && wb.addFallback(Mb++, "CLEARCOAT"), Mb
        }
        getSamplers(bb) {
          bb.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, wb = new WeakMap, Mb = new WeakMap, eb = new WeakMap, Hb = new WeakMap, pb = new WeakMap, Vb = new WeakMap, gb = new WeakMap, lb = new WeakMap, Lb = new WeakMap, (() => {
        const wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(jb[Symbol.metadata] ?? null) : void 0;
        Ib = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Ob = [(0, rb.E)()], Ub = [(0, rb.E)()], tb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Cb = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Eb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Fb = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Bb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], sb = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], mb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], hb = [(0, rb.i)()], zb = [(0, rb.E)()], Xb = [(0, rb.E)()], xb = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], (0, Kb.i)(bb, null, Ib, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, wb) => {
              bb.isEnabled = wb
            }
          },
          metadata: wb
        }, Rb, Db), (0, Kb.i)(bb, null, tb, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "indexOfRefraction" in bb,
            get: bb => bb.indexOfRefraction,
            set: (bb, wb) => {
              bb.indexOfRefraction = wb
            }
          },
          metadata: wb
        }, Ab, Wb), (0, Kb.i)(bb, null, Cb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, wb) => {
              bb.texture = wb
            }
          },
          metadata: wb
        }, Jb, Sb), (0, Kb.i)(bb, null, Eb, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMainTexture" in bb,
            get: bb => bb.useRoughnessFromMainTexture,
            set: (bb, wb) => {
              bb.useRoughnessFromMainTexture = wb
            }
          },
          metadata: wb
        }, Nb, vb), (0, Kb.i)(bb, null, Fb, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "textureRoughness" in bb,
            get: bb => bb.textureRoughness,
            set: (bb, wb) => {
              bb.textureRoughness = wb
            }
          },
          metadata: wb
        }, Qb, qb), (0, Kb.i)(bb, null, Bb, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: bb => "remapF0OnInterfaceChange" in bb,
            get: bb => bb.remapF0OnInterfaceChange,
            set: (bb, wb) => {
              bb.remapF0OnInterfaceChange = wb
            }
          },
          metadata: wb
        }, ab, ib), (0, Kb.i)(bb, null, sb, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "bumpTexture" in bb,
            get: bb => bb.bumpTexture,
            set: (bb, wb) => {
              bb.bumpTexture = wb
            }
          },
          metadata: wb
        }, db, Pb), (0, Kb.i)(bb, null, mb, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isTintEnabled" in bb,
            get: bb => bb.isTintEnabled,
            set: (bb, wb) => {
              bb.isTintEnabled = wb
            }
          },
          metadata: wb
        }, nb, ob), (0, Kb.i)(bb, null, xb, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintTexture" in bb,
            get: bb => bb.tintTexture,
            set: (bb, wb) => {
              bb.tintTexture = wb
            }
          },
          metadata: wb
        }, Vw, gw), (0, Kb.i)(null, null, Ob, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, wb) => {
              bb.intensity = wb
            }
          },
          metadata: wb
        }, cb, Yb), (0, Kb.i)(null, null, Ub, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughness" in bb,
            get: bb => bb.roughness,
            set: (bb, wb) => {
              bb.roughness = wb
            }
          },
          metadata: wb
        }, Zb, fb), (0, Kb.i)(null, null, hb, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColor" in bb,
            get: bb => bb.tintColor,
            set: (bb, wb) => {
              bb.tintColor = wb
            }
          },
          metadata: wb
        }, bw, ww), (0, Kb.i)(null, null, zb, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColorAtDistance" in bb,
            get: bb => bb.tintColorAtDistance,
            set: (bb, wb) => {
              bb.tintColorAtDistance = wb
            }
          },
          metadata: wb
        }, Mw, ew), (0, Kb.i)(null, null, Xb, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintThickness" in bb,
            get: bb => bb.tintThickness,
            set: (bb, wb) => {
              bb.tintThickness = wb
            }
          },
          metadata: wb
        }, Hw, pw), wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wb
        })
      })(), bb._DefaultIndexOfRefraction = 1.5, bb
    })();
    class ww extends Qb.b {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let Mw = (() => {
      var bb, wb, Mb, eb;
      let Hb, pb, Vb, gb, lb, Lb, Ib, Ob = Gb.d,
        Ub = [],
        tb = [],
        Cb = [],
        Eb = [],
        Fb = [],
        Bb = [],
        sb = [],
        mb = [],
        hb = [],
        zb = [],
        Xb = [],
        xb = [],
        jb = [],
        Rb = [];
      return bb = class extends Ob {
        get isEnabled() {
          return (0, Kb.b)(this, wb, "f")
        }
        set isEnabled(bb) {
          (0, Kb.f)(this, wb, bb, "f")
        }
        get texture() {
          return (0, Kb.b)(this, Mb, "f")
        }
        set texture(bb) {
          (0, Kb.f)(this, Mb, bb, "f")
        }
        get thicknessTexture() {
          return (0, Kb.b)(this, eb, "f")
        }
        set thicknessTexture(bb) {
          (0, Kb.f)(this, eb, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Hb) {
          let pb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Hb, "PBRIridescence", 110, new ww, pb), this._isEnabled = !1, wb.set(this, (0, Kb.m)(this, Ub, !1)), this.intensity = ((0, Kb.m)(this, tb), (0, Kb.m)(this, Cb, 1)), this.minimumThickness = ((0, Kb.m)(this, Eb), (0, Kb.m)(this, Fb, bb._DefaultMinimumThickness)), this.maximumThickness = ((0, Kb.m)(this, Bb), (0, Kb.m)(this, sb, bb._DefaultMaximumThickness)), this.indexOfRefraction = ((0, Kb.m)(this, mb), (0, Kb.m)(this, hb, bb._DefaultIndexOfRefraction)), this._texture = ((0, Kb.m)(this, zb), null), Mb.set(this, (0, Kb.m)(this, Xb, null)), this._thicknessTexture = ((0, Kb.m)(this, xb), null), eb.set(this, (0, Kb.m)(this, jb, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Kb.m)(this, Rb), this._internalMarkAllSubMeshesAsTexturesDirty = Hb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, wb) {
          if (!this._isEnabled) return !0;
          if (bb._areTexturesDirty && wb.texturesEnabled) {
            if (this._texture && yb.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && yb.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bb, wb) {
          this._isEnabled ? (bb.IRIDESCENCE = !0, bb._areTexturesDirty && wb.texturesEnabled && (this._texture && yb.e.IridescenceTextureEnabled ? (0, Tb.$)(this._texture, bb, "IRIDESCENCE_TEXTURE") : bb.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && yb.e.IridescenceTextureEnabled ? (0, Tb.$)(this._thicknessTexture, bb, "IRIDESCENCE_THICKNESS_TEXTURE") : bb.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (bb.IRIDESCENCE = !1, bb.IRIDESCENCE_TEXTURE = !1, bb.IRIDESCENCE_THICKNESS_TEXTURE = !1, bb.IRIDESCENCE_TEXTUREDIRECTUV = 0, bb.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(bb, wb) {
          if (!this._isEnabled) return;
          const Mb = this._material.isFrozen;
          bb.useUbo && Mb && bb.isSync || ((this._texture || this._thicknessTexture) && yb.e.IridescenceTextureEnabled && (bb.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, Tb.C)(this._texture, bb, "iridescence"), this._thicknessTexture && (0, Tb.C)(this._thicknessTexture, bb, "iridescenceThickness")), bb.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), wb.texturesEnabled && (this._texture && yb.e.IridescenceTextureEnabled && bb.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && yb.e.IridescenceTextureEnabled && bb.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(bb) {
          return this._texture === bb || this._thicknessTexture === bb
        }
        getActiveTextures(bb) {
          this._texture && bb.push(this._texture), this._thicknessTexture && bb.push(this._thicknessTexture)
        }
        getAnimatables(bb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && bb.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && bb.push(this._thicknessTexture)
        }
        dispose(bb) {
          bb && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(bb, wb, Mb) {
          return bb.IRIDESCENCE && wb.addFallback(Mb++, "IRIDESCENCE"), Mb
        }
        getSamplers(bb) {
          bb.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, wb = new WeakMap, Mb = new WeakMap, eb = new WeakMap, (() => {
        const wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ob[Symbol.metadata] ?? null) : void 0;
        Hb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], pb = [(0, rb.E)()], Vb = [(0, rb.E)()], gb = [(0, rb.E)()], lb = [(0, rb.E)()], Lb = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Ib = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], (0, Kb.i)(bb, null, Hb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, wb) => {
              bb.isEnabled = wb
            }
          },
          metadata: wb
        }, Ub, tb), (0, Kb.i)(bb, null, Lb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, wb) => {
              bb.texture = wb
            }
          },
          metadata: wb
        }, Xb, xb), (0, Kb.i)(bb, null, Ib, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "thicknessTexture" in bb,
            get: bb => bb.thicknessTexture,
            set: (bb, wb) => {
              bb.thicknessTexture = wb
            }
          },
          metadata: wb
        }, jb, Rb), (0, Kb.i)(null, null, pb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, wb) => {
              bb.intensity = wb
            }
          },
          metadata: wb
        }, Cb, Eb), (0, Kb.i)(null, null, Vb, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "minimumThickness" in bb,
            get: bb => bb.minimumThickness,
            set: (bb, wb) => {
              bb.minimumThickness = wb
            }
          },
          metadata: wb
        }, Fb, Bb), (0, Kb.i)(null, null, gb, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "maximumThickness" in bb,
            get: bb => bb.maximumThickness,
            set: (bb, wb) => {
              bb.maximumThickness = wb
            }
          },
          metadata: wb
        }, sb, mb), (0, Kb.i)(null, null, lb, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "indexOfRefraction" in bb,
            get: bb => bb.indexOfRefraction,
            set: (bb, wb) => {
              bb.indexOfRefraction = wb
            }
          },
          metadata: wb
        }, hb, zb), wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wb
        })
      })(), bb._DefaultMinimumThickness = 100, bb._DefaultMaximumThickness = 400, bb._DefaultIndexOfRefraction = 1.3, bb
    })();
    class ew extends Qb.b {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Hw = (() => {
      var bb, wb, Mb, eb;
      let Hb, pb, Vb, gb, lb, Lb = Gb.d,
        Ib = [],
        Ob = [],
        Ub = [],
        tb = [],
        Cb = [],
        Eb = [],
        Fb = [],
        Bb = [],
        sb = [],
        mb = [];
      return bb = class extends Lb {
        get isEnabled() {
          return (0, Kb.b)(this, wb, "f")
        }
        set isEnabled(bb) {
          (0, Kb.f)(this, wb, bb, "f")
        }
        set angle(bb) {
          this.direction.x = Math.cos(bb), this.direction.y = Math.sin(bb)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, Kb.b)(this, Mb, "f")
        }
        set texture(bb) {
          (0, Kb.f)(this, Mb, bb, "f")
        }
        get legacy() {
          return (0, Kb.b)(this, eb, "f")
        }
        set legacy(bb) {
          (0, Kb.f)(this, eb, bb, "f")
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
        constructor(bb) {
          let Hb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bb, "PBRAnisotropic", 110, new ew, Hb), this._isEnabled = !1, wb.set(this, (0, Kb.m)(this, Ib, !1)), this.intensity = ((0, Kb.m)(this, Ob), (0, Kb.m)(this, Ub, 1)), this.direction = ((0, Kb.m)(this, tb), (0, Kb.m)(this, Cb, new Nb.m(1, 0))), this._texture = ((0, Kb.m)(this, Eb), null), Mb.set(this, (0, Kb.m)(this, Fb, null)), this._legacy = ((0, Kb.m)(this, Bb), !1), eb.set(this, (0, Kb.m)(this, sb, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Kb.m)(this, mb), this._internalMarkAllSubMeshesAsTexturesDirty = bb._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = bb._dirtyCallbacks[16]
        }
        isReadyForSubMesh(bb, wb) {
          return !this._isEnabled || !(bb._areTexturesDirty && wb.texturesEnabled && this._texture && yb.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(bb, wb, Mb) {
          this._isEnabled ? (bb.ANISOTROPIC = this._isEnabled, this._isEnabled && !Mb.isVerticesDataPresent(vb.i.TangentKind) && (bb._needUVs = !0, bb.MAINUV1 = !0), bb._areTexturesDirty && wb.texturesEnabled && (this._texture && yb.e.AnisotropicTextureEnabled ? (0, Tb.$)(this._texture, bb, "ANISOTROPIC_TEXTURE") : bb.ANISOTROPIC_TEXTURE = !1), bb._areMiscDirty && (bb.ANISOTROPIC_LEGACY = this._legacy)) : (bb.ANISOTROPIC = !1, bb.ANISOTROPIC_TEXTURE = !1, bb.ANISOTROPIC_TEXTUREDIRECTUV = 0, bb.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(bb, wb) {
          if (!this._isEnabled) return;
          const Mb = this._material.isFrozen;
          bb.useUbo && Mb && bb.isSync || (this._texture && yb.e.AnisotropicTextureEnabled && (bb.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, Tb.C)(this._texture, bb, "anisotropy")), bb.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), wb.texturesEnabled && this._texture && yb.e.AnisotropicTextureEnabled && bb.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(bb) {
          return this._texture === bb
        }
        getActiveTextures(bb) {
          this._texture && bb.push(this._texture)
        }
        getAnimatables(bb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && bb.push(this._texture)
        }
        dispose(bb) {
          bb && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(bb, wb, Mb) {
          return bb.ANISOTROPIC && wb.addFallback(Mb++, "ANISOTROPIC"), Mb
        }
        getSamplers(bb) {
          bb.push("anisotropySampler")
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
        parse(bb, wb, Mb) {
          super.parse(bb, wb, Mb), void 0 === bb.legacy && (this.legacy = !0)
        }
      }, wb = new WeakMap, Mb = new WeakMap, eb = new WeakMap, (() => {
        const wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Lb[Symbol.metadata] ?? null) : void 0;
        Hb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], pb = [(0, rb.E)()], Vb = [(0, rb.y)()], gb = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], lb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], (0, Kb.i)(bb, null, Hb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, wb) => {
              bb.isEnabled = wb
            }
          },
          metadata: wb
        }, Ib, Ob), (0, Kb.i)(bb, null, gb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, wb) => {
              bb.texture = wb
            }
          },
          metadata: wb
        }, Fb, Bb), (0, Kb.i)(bb, null, lb, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: bb => "legacy" in bb,
            get: bb => bb.legacy,
            set: (bb, wb) => {
              bb.legacy = wb
            }
          },
          metadata: wb
        }, sb, mb), (0, Kb.i)(null, null, pb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, wb) => {
              bb.intensity = wb
            }
          },
          metadata: wb
        }, Ub, tb), (0, Kb.i)(null, null, Vb, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: bb => "direction" in bb,
            get: bb => bb.direction,
            set: (bb, wb) => {
              bb.direction = wb
            }
          },
          metadata: wb
        }, Cb, Eb), wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wb
        })
      })(), bb
    })();
    class pw extends Qb.b {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Vw = (() => {
      var bb, wb, Mb, eb, Hb, pb, Vb, gb;
      let lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb = Gb.d,
        sb = [],
        mb = [],
        hb = [],
        zb = [],
        Xb = [],
        xb = [],
        jb = [],
        Rb = [],
        Db = [],
        cb = [],
        Yb = [],
        Zb = [],
        fb = [],
        Ab = [],
        Wb = [],
        Jb = [],
        Sb = [],
        Nb = [];
      return bb = class extends Bb {
        get isEnabled() {
          return (0, Kb.b)(this, wb, "f")
        }
        set isEnabled(bb) {
          (0, Kb.f)(this, wb, bb, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, Kb.b)(this, Mb, "f")
        }
        set linkSheenWithAlbedo(bb) {
          (0, Kb.f)(this, Mb, bb, "f")
        }
        get texture() {
          return (0, Kb.b)(this, eb, "f")
        }
        set texture(bb) {
          (0, Kb.f)(this, eb, bb, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Kb.b)(this, Hb, "f")
        }
        set useRoughnessFromMainTexture(bb) {
          (0, Kb.f)(this, Hb, bb, "f")
        }
        get roughness() {
          return (0, Kb.b)(this, pb, "f")
        }
        set roughness(bb) {
          (0, Kb.f)(this, pb, bb, "f")
        }
        get textureRoughness() {
          return (0, Kb.b)(this, Vb, "f")
        }
        set textureRoughness(bb) {
          (0, Kb.f)(this, Vb, bb, "f")
        }
        get albedoScaling() {
          return (0, Kb.b)(this, gb, "f")
        }
        set albedoScaling(bb) {
          (0, Kb.f)(this, gb, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(bb) {
          let lb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bb, "Sheen", 120, new pw, lb), this._isEnabled = !1, wb.set(this, (0, Kb.m)(this, sb, !1)), this._linkSheenWithAlbedo = ((0, Kb.m)(this, mb), !1), Mb.set(this, (0, Kb.m)(this, hb, !1)), this.intensity = ((0, Kb.m)(this, zb), (0, Kb.m)(this, Xb, 1)), this.color = ((0, Kb.m)(this, xb), (0, Kb.m)(this, jb, ub.e.White())), this._texture = ((0, Kb.m)(this, Rb), null), eb.set(this, (0, Kb.m)(this, Db, null)), this._useRoughnessFromMainTexture = ((0, Kb.m)(this, cb), !0), Hb.set(this, (0, Kb.m)(this, Yb, !0)), this._roughness = ((0, Kb.m)(this, Zb), null), pb.set(this, (0, Kb.m)(this, fb, null)), this._textureRoughness = ((0, Kb.m)(this, Ab), null), Vb.set(this, (0, Kb.m)(this, Wb, null)), this._albedoScaling = ((0, Kb.m)(this, Jb), !1), gb.set(this, (0, Kb.m)(this, Sb, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Kb.m)(this, Nb), this._internalMarkAllSubMeshesAsTexturesDirty = bb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, wb) {
          if (!this._isEnabled) return !0;
          if (bb._areTexturesDirty && wb.texturesEnabled) {
            if (this._texture && yb.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && yb.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bb, wb) {
          this._isEnabled ? (bb.SHEEN = !0, bb.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, bb.SHEEN_ROUGHNESS = null !== this._roughness, bb.SHEEN_ALBEDOSCALING = this._albedoScaling, bb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, bb._areTexturesDirty && wb.texturesEnabled && (this._texture && yb.e.SheenTextureEnabled ? ((0, Tb.$)(this._texture, bb, "SHEEN_TEXTURE"), bb.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : bb.SHEEN_TEXTURE = !1, this._textureRoughness && yb.e.SheenTextureEnabled ? (0, Tb.$)(this._textureRoughness, bb, "SHEEN_TEXTURE_ROUGHNESS") : bb.SHEEN_TEXTURE_ROUGHNESS = !1)) : (bb.SHEEN = !1, bb.SHEEN_TEXTURE = !1, bb.SHEEN_TEXTURE_ROUGHNESS = !1, bb.SHEEN_LINKWITHALBEDO = !1, bb.SHEEN_ROUGHNESS = !1, bb.SHEEN_ALBEDOSCALING = !1, bb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, bb.SHEEN_GAMMATEXTURE = !1, bb.SHEEN_TEXTUREDIRECTUV = 0, bb.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(bb, wb, Mb, eb) {
          if (!this._isEnabled) return;
          const Hb = eb.materialDefines,
            pb = this._material.isFrozen;
          bb.useUbo && pb && bb.isSync || ((this._texture || this._textureRoughness) && yb.e.SheenTextureEnabled && (bb.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Tb.C)(this._texture, bb, "sheen"), this._textureRoughness && !Hb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Tb.C)(this._textureRoughness, bb, "sheenRoughness")), bb.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && bb.updateFloat("vSheenRoughness", this._roughness)), wb.texturesEnabled && (this._texture && yb.e.SheenTextureEnabled && bb.setTexture("sheenSampler", this._texture), this._textureRoughness && !Hb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && yb.e.SheenTextureEnabled && bb.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(bb) {
          return this._texture === bb || this._textureRoughness === bb
        }
        getActiveTextures(bb) {
          this._texture && bb.push(this._texture), this._textureRoughness && bb.push(this._textureRoughness)
        }
        getAnimatables(bb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && bb.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && bb.push(this._textureRoughness)
        }
        dispose(bb) {
          bb && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(bb, wb, Mb) {
          return bb.SHEEN && wb.addFallback(Mb++, "SHEEN"), Mb
        }
        getSamplers(bb) {
          bb.push("sheenSampler", "sheenRoughnessSampler")
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
      }, wb = new WeakMap, Mb = new WeakMap, eb = new WeakMap, Hb = new WeakMap, pb = new WeakMap, Vb = new WeakMap, gb = new WeakMap, (() => {
        const wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bb[Symbol.metadata] ?? null) : void 0;
        lb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Lb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Ib = [(0, rb.E)()], Ob = [(0, rb.i)()], Ub = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], tb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Cb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Eb = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Fb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], (0, Kb.i)(bb, null, lb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, wb) => {
              bb.isEnabled = wb
            }
          },
          metadata: wb
        }, sb, mb), (0, Kb.i)(bb, null, Lb, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: bb => "linkSheenWithAlbedo" in bb,
            get: bb => bb.linkSheenWithAlbedo,
            set: (bb, wb) => {
              bb.linkSheenWithAlbedo = wb
            }
          },
          metadata: wb
        }, hb, zb), (0, Kb.i)(bb, null, Ub, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, wb) => {
              bb.texture = wb
            }
          },
          metadata: wb
        }, Db, cb), (0, Kb.i)(bb, null, tb, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMainTexture" in bb,
            get: bb => bb.useRoughnessFromMainTexture,
            set: (bb, wb) => {
              bb.useRoughnessFromMainTexture = wb
            }
          },
          metadata: wb
        }, Yb, Zb), (0, Kb.i)(bb, null, Cb, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughness" in bb,
            get: bb => bb.roughness,
            set: (bb, wb) => {
              bb.roughness = wb
            }
          },
          metadata: wb
        }, fb, Ab), (0, Kb.i)(bb, null, Eb, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "textureRoughness" in bb,
            get: bb => bb.textureRoughness,
            set: (bb, wb) => {
              bb.textureRoughness = wb
            }
          },
          metadata: wb
        }, Wb, Jb), (0, Kb.i)(bb, null, Fb, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: bb => "albedoScaling" in bb,
            get: bb => bb.albedoScaling,
            set: (bb, wb) => {
              bb.albedoScaling = wb
            }
          },
          metadata: wb
        }, Sb, Nb), (0, Kb.i)(null, null, Ib, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, wb) => {
              bb.intensity = wb
            }
          },
          metadata: wb
        }, Xb, xb), (0, Kb.i)(null, null, Ob, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: bb => "color" in bb,
            get: bb => bb.color,
            set: (bb, wb) => {
              bb.color = wb
            }
          },
          metadata: wb
        }, jb, Rb), wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wb
        })
      })(), bb
    })();
    class gw extends Qb.b {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let lw = (() => {
      var bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb;
      let Bb, sb, mb, hb, zb, Xb, xb, jb, Rb, Db, cb, Yb, Zb, fb, Ab, Wb, Jb, Sb, vb, Qb, qb, ab, ib, db, Pb, nb, ob, kb, bw, ww, Mw = Gb.d,
        ew = [],
        Hw = [],
        pw = [],
        Vw = [],
        lw = [],
        Lw = [],
        Iw = [],
        Ow = [],
        Uw = [],
        tw = [],
        Cw = [],
        Ew = [],
        Fw = [],
        Bw = [],
        sw = [],
        mw = [],
        hw = [],
        zw = [],
        Xw = [],
        xw = [],
        jw = [],
        Kw = [],
        rw = [],
        Rw = [],
        Dw = [],
        Yw = [],
        Zw = [],
        fw = [],
        Aw = [],
        Ww = [],
        Jw = [],
        Sw = [],
        Nw = [],
        vw = [],
        Qw = [],
        Gw = [],
        qw = [],
        aw = [],
        iw = [],
        uw = [],
        dw = [],
        Pw = [],
        nw = [],
        yw = [],
        ow = [],
        Tw = [],
        kw = [],
        bM = [],
        wM = [],
        MM = [],
        eM = [],
        HM = [],
        pM = [],
        VM = [],
        gM = [],
        lM = [],
        LM = [],
        IM = [],
        OM = [],
        UM = [];
      return bb = class extends Mw {
        get isRefractionEnabled() {
          return (0, Kb.b)(this, wb, "f")
        }
        set isRefractionEnabled(bb) {
          (0, Kb.f)(this, wb, bb, "f")
        }
        get isTranslucencyEnabled() {
          return (0, Kb.b)(this, Mb, "f")
        }
        set isTranslucencyEnabled(bb) {
          (0, Kb.f)(this, Mb, bb, "f")
        }
        get isDispersionEnabled() {
          return (0, Kb.b)(this, eb, "f")
        }
        set isDispersionEnabled(bb) {
          (0, Kb.f)(this, eb, bb, "f")
        }
        get isScatteringEnabled() {
          return (0, Kb.b)(this, Hb, "f")
        }
        set isScatteringEnabled(bb) {
          (0, Kb.f)(this, Hb, bb, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(bb) {
          this._scene.enableSubSurfaceForPrePass() && bb && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(bb))
        }
        get useAlbedoToTintRefraction() {
          return (0, Kb.b)(this, pb, "f")
        }
        set useAlbedoToTintRefraction(bb) {
          (0, Kb.f)(this, pb, bb, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, Kb.b)(this, Vb, "f")
        }
        set useAlbedoToTintTranslucency(bb) {
          (0, Kb.f)(this, Vb, bb, "f")
        }
        get thicknessTexture() {
          return (0, Kb.b)(this, gb, "f")
        }
        set thicknessTexture(bb) {
          (0, Kb.f)(this, gb, bb, "f")
        }
        get refractionTexture() {
          return (0, Kb.b)(this, lb, "f")
        }
        set refractionTexture(bb) {
          (0, Kb.f)(this, lb, bb, "f")
        }
        get indexOfRefraction() {
          return (0, Kb.b)(this, Lb, "f")
        }
        set indexOfRefraction(bb) {
          (0, Kb.f)(this, Lb, bb, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(bb) {
          const wb = bb >= 1 ? bb : -1;
          this._volumeIndexOfRefraction !== wb && (this._volumeIndexOfRefraction = wb, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, Kb.b)(this, Ib, "f")
        }
        set invertRefractionY(bb) {
          (0, Kb.f)(this, Ib, bb, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, Kb.b)(this, Ob, "f")
        }
        set linkRefractionWithTransparency(bb) {
          (0, Kb.f)(this, Ob, bb, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, Kb.b)(this, Ub, "f")
        }
        set useMaskFromThicknessTexture(bb) {
          (0, Kb.f)(this, Ub, bb, "f")
        }
        get refractionIntensityTexture() {
          return (0, Kb.b)(this, tb, "f")
        }
        set refractionIntensityTexture(bb) {
          (0, Kb.f)(this, tb, bb, "f")
        }
        get translucencyIntensityTexture() {
          return (0, Kb.b)(this, Cb, "f")
        }
        set translucencyIntensityTexture(bb) {
          (0, Kb.f)(this, Cb, bb, "f")
        }
        get translucencyColorTexture() {
          return (0, Kb.b)(this, Eb, "f")
        }
        set translucencyColorTexture(bb) {
          (0, Kb.f)(this, Eb, bb, "f")
        }
        get useGltfStyleTextures() {
          return (0, Kb.b)(this, Fb, "f")
        }
        set useGltfStyleTextures(bb) {
          (0, Kb.f)(this, Fb, bb, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(bb) {
          this.legacyTranslucency = bb
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
        constructor(Bb) {
          let sb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Bb, "PBRSubSurface", 130, new gw, sb), this._isRefractionEnabled = !1, wb.set(this, (0, Kb.m)(this, ew, !1)), this._isTranslucencyEnabled = ((0, Kb.m)(this, Hw), !1), Mb.set(this, (0, Kb.m)(this, pw, !1)), this._isDispersionEnabled = ((0, Kb.m)(this, Vw), !1), eb.set(this, (0, Kb.m)(this, lw, !1)), this._isScatteringEnabled = ((0, Kb.m)(this, Lw), !1), Hb.set(this, (0, Kb.m)(this, Iw, !1)), this._scatteringDiffusionProfileIndex = ((0, Kb.m)(this, Ow), (0, Kb.m)(this, Uw, 0)), this.refractionIntensity = ((0, Kb.m)(this, tw), (0, Kb.m)(this, Cw, 1)), this.translucencyIntensity = ((0, Kb.m)(this, Ew), (0, Kb.m)(this, Fw, 1)), this._useAlbedoToTintRefraction = ((0, Kb.m)(this, Bw), !1), pb.set(this, (0, Kb.m)(this, sw, !1)), this._useAlbedoToTintTranslucency = ((0, Kb.m)(this, mw), !1), Vb.set(this, (0, Kb.m)(this, hw, !1)), this._thicknessTexture = ((0, Kb.m)(this, zw), null), gb.set(this, (0, Kb.m)(this, Xw, null)), this._refractionTexture = ((0, Kb.m)(this, xw), null), lb.set(this, (0, Kb.m)(this, jw, null)), this._indexOfRefraction = ((0, Kb.m)(this, Kw), 1.5), Lb.set(this, (0, Kb.m)(this, rw, 1.5)), this._volumeIndexOfRefraction = ((0, Kb.m)(this, Rw), (0, Kb.m)(this, Dw, -1)), this._invertRefractionY = ((0, Kb.m)(this, Yw), !1), Ib.set(this, (0, Kb.m)(this, Zw, !1)), this._linkRefractionWithTransparency = ((0, Kb.m)(this, fw), !1), Ob.set(this, (0, Kb.m)(this, Aw, !1)), this.minimumThickness = ((0, Kb.m)(this, Ww), (0, Kb.m)(this, Jw, 0)), this.maximumThickness = ((0, Kb.m)(this, Sw), (0, Kb.m)(this, Nw, 1)), this.useThicknessAsDepth = ((0, Kb.m)(this, vw), (0, Kb.m)(this, Qw, !1)), this.tintColor = ((0, Kb.m)(this, Gw), (0, Kb.m)(this, qw, ub.e.White())), this.tintColorAtDistance = ((0, Kb.m)(this, aw), (0, Kb.m)(this, iw, 1)), this.dispersion = ((0, Kb.m)(this, uw), (0, Kb.m)(this, dw, 0)), this.diffusionDistance = ((0, Kb.m)(this, Pw), (0, Kb.m)(this, nw, ub.e.White())), this._useMaskFromThicknessTexture = ((0, Kb.m)(this, yw), !1), Ub.set(this, (0, Kb.m)(this, ow, !1)), this._refractionIntensityTexture = ((0, Kb.m)(this, Tw), null), tb.set(this, (0, Kb.m)(this, kw, null)), this._translucencyIntensityTexture = ((0, Kb.m)(this, bM), null), Cb.set(this, (0, Kb.m)(this, wM, null)), this.translucencyColor = ((0, Kb.m)(this, MM), (0, Kb.m)(this, eM, null)), this._translucencyColorTexture = ((0, Kb.m)(this, HM), null), Eb.set(this, (0, Kb.m)(this, pM, null)), this._useGltfStyleTextures = ((0, Kb.m)(this, VM), !0), Fb.set(this, (0, Kb.m)(this, gM, !0)), this.applyAlbedoAfterSubSurface = ((0, Kb.m)(this, lM), (0, Kb.m)(this, LM, bb.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, Kb.m)(this, IM), (0, Kb.m)(this, OM, bb.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, Kb.m)(this, UM), this._scene = Bb.RJ(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = Bb._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = Bb._dirtyCallbacks[32]
        }
        isReadyForSubMesh(bb, wb) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (bb._areTexturesDirty && wb.texturesEnabled) {
            if (this._thicknessTexture && yb.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && yb.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && yb.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && yb.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const bb = this._getRefractionTexture(wb);
            if (bb && yb.e.RefractionTextureEnabled && !bb.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bb, wb) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return bb.SUBSURFACE = !1, bb.SS_DISPERSION = !1, bb.SS_TRANSLUCENCY = !1, bb.SS_SCATTERING = !1, bb.SS_REFRACTION = !1, bb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_THICKNESSANDMASK_TEXTURE = !1, bb.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, bb.SS_HAS_THICKNESS = !1, bb.SS_REFRACTIONINTENSITY_TEXTURE = !1, bb.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, bb.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, bb.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, bb.SS_REFRACTIONMAP_3D = !1, bb.SS_REFRACTIONMAP_OPPOSITEZ = !1, bb.SS_LODINREFRACTIONALPHA = !1, bb.SS_GAMMAREFRACTION = !1, bb.SS_RGBDREFRACTION = !1, bb.SS_LINEARSPECULARREFRACTION = !1, bb.SS_LINKREFRACTIONTOTRANSPARENCY = !1, bb.SS_ALBEDOFORREFRACTIONTINT = !1, bb.SS_ALBEDOFORTRANSLUCENCYTINT = !1, bb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, bb.SS_USE_THICKNESS_AS_DEPTH = !1, bb.SS_USE_GLTF_TEXTURES = !1, bb.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, bb.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, bb.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(bb.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (bb._areTexturesDirty) {
            if (bb.SUBSURFACE = !0, bb.SS_DISPERSION = this._isDispersionEnabled, bb.SS_TRANSLUCENCY = this._isTranslucencyEnabled, bb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, bb.SS_SCATTERING = this._isScatteringEnabled, bb.SS_THICKNESSANDMASK_TEXTURE = !1, bb.SS_REFRACTIONINTENSITY_TEXTURE = !1, bb.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, bb.SS_HAS_THICKNESS = !1, bb.SS_USE_GLTF_TEXTURES = !1, bb.SS_REFRACTION = !1, bb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_REFRACTIONMAP_3D = !1, bb.SS_GAMMAREFRACTION = !1, bb.SS_RGBDREFRACTION = !1, bb.SS_LINEARSPECULARREFRACTION = !1, bb.SS_REFRACTIONMAP_OPPOSITEZ = !1, bb.SS_LODINREFRACTIONALPHA = !1, bb.SS_LINKREFRACTIONTOTRANSPARENCY = !1, bb.SS_ALBEDOFORREFRACTIONTINT = !1, bb.SS_ALBEDOFORTRANSLUCENCYTINT = !1, bb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, bb.SS_USE_THICKNESS_AS_DEPTH = !1, bb.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, bb.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, bb._areTexturesDirty && wb.texturesEnabled && (this._thicknessTexture && yb.e.ThicknessTextureEnabled && (0, Tb.$)(this._thicknessTexture, bb, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && yb.e.RefractionIntensityTextureEnabled && (0, Tb.$)(this._refractionIntensityTexture, bb, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && yb.e.TranslucencyIntensityTextureEnabled && (0, Tb.$)(this._translucencyIntensityTexture, bb, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && yb.e.TranslucencyColorTextureEnabled && ((0, Tb.$)(this._translucencyColorTexture, bb, "SS_TRANSLUCENCYCOLOR_TEXTURE"), bb.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), bb.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, bb.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, bb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, bb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && wb.texturesEnabled) {
              const Mb = this._getRefractionTexture(wb);
              Mb && yb.e.RefractionTextureEnabled && (bb.SS_REFRACTION = !0, bb.SS_REFRACTIONMAP_3D = Mb.isCube, bb.SS_GAMMAREFRACTION = Mb.gammaSpace, bb.SS_RGBDREFRACTION = Mb.isRGBD, bb.SS_LINEARSPECULARREFRACTION = Mb.linearSpecularLOD, bb.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && Mb.isCube ? !Mb.invertZ : Mb.invertZ, bb.SS_LODINREFRACTIONALPHA = Mb.lodLevelInAlpha, bb.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, bb.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, bb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = Mb.isCube && Mb.boundingBoxSize, bb.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (bb.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(bb, wb, Mb, eb) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) bb.updateFloat2("vThicknessParam", 0, 0);
            else {
              eb.getRenderingMesh().getWorldMatrix().decompose(Nb.j.YC[0]);
              const wb = Math.max(Math.abs(Nb.j.YC[0].x), Math.abs(Nb.j.YC[0].y), Math.abs(Nb.j.YC[0].z));
              bb.updateFloat2("vThicknessParam", this.minimumThickness * wb, (this.maximumThickness - this.minimumThickness) * wb)
            }
        }
        bindForSubMesh(bb, wb, Mb, eb) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Hb = eb.materialDefines,
            pb = this._material.isFrozen,
            Vb = this._material.realTimeFiltering,
            gb = Hb.LODBASEDMICROSFURACE,
            lb = this._getRefractionTexture(wb);
          if (!bb.useUbo || !pb || !bb.isSync) {
            if (this._thicknessTexture && yb.e.ThicknessTextureEnabled && (bb.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, Tb.C)(this._thicknessTexture, bb, "thickness")), this._refractionIntensityTexture && yb.e.RefractionIntensityTextureEnabled && Hb.SS_REFRACTIONINTENSITY_TEXTURE && (bb.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, Tb.C)(this._refractionIntensityTexture, bb, "refractionIntensity")), this._translucencyColorTexture && yb.e.TranslucencyColorTextureEnabled && Hb.SS_TRANSLUCENCYCOLOR_TEXTURE && (bb.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, Tb.C)(this._translucencyColorTexture, bb, "translucencyColor")), this._translucencyIntensityTexture && yb.e.TranslucencyIntensityTextureEnabled && Hb.SS_TRANSLUCENCYINTENSITY_TEXTURE && (bb.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, Tb.C)(this._translucencyIntensityTexture, bb, "translucencyIntensity")), lb && yb.e.RefractionTextureEnabled) {
              bb.kbb("refractionMatrix", lb.getRefractionTextureMatrix());
              let wb = 1;
              lb.isCube || lb.depth && (wb = lb.depth);
              const Mb = lb.getSize().width,
                eb = this.volumeIndexOfRefraction;
              if (bb.updateFloat4("vRefractionInfos", lb.level, 1 / eb, wb, this._invertRefractionY ? -1 : 1), bb.updateFloat4("vRefractionMicrosurfaceInfos", Mb, lb.lodGenerationScale, lb.lodGenerationOffset, 1 / this.indexOfRefraction), Vb && bb.updateFloat2("vRefractionFilteringInfo", Mb, Math.log2(Mb)), lb.boundingBoxSize) {
                const wb = lb;
                bb.updateVector3("vRefractionPosition", wb.boundingBoxPosition), bb.updateVector3("vRefractionSize", wb.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && bb.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), bb.updateColor3("vDiffusionDistance", this.diffusionDistance), bb.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), bb.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), bb.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), bb.updateFloat("dispersion", this.dispersion)
          }
          wb.texturesEnabled && (this._thicknessTexture && yb.e.ThicknessTextureEnabled && bb.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && yb.e.RefractionIntensityTextureEnabled && Hb.SS_REFRACTIONINTENSITY_TEXTURE && bb.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && yb.e.TranslucencyIntensityTextureEnabled && Hb.SS_TRANSLUCENCYINTENSITY_TEXTURE && bb.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && yb.e.TranslucencyColorTextureEnabled && Hb.SS_TRANSLUCENCYCOLOR_TEXTURE && bb.setTexture("translucencyColorSampler", this._translucencyColorTexture), lb && yb.e.RefractionTextureEnabled && (gb ? bb.setTexture("refractionSampler", lb) : (bb.setTexture("refractionSampler", lb._lodTextureMid || lb), bb.setTexture("refractionSamplerLow", lb._lodTextureLow || lb), bb.setTexture("refractionSamplerHigh", lb._lodTextureHigh || lb))))
        }
        _getRefractionTexture(bb) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? bb.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(bb) {
          yb.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && bb.push(this._refractionTexture)
        }
        hasTexture(bb) {
          return this._thicknessTexture === bb || (this._refractionTexture === bb || (this._refractionIntensityTexture === bb || (this._translucencyIntensityTexture === bb || this._translucencyColorTexture === bb)))
        }
        hasRenderTargetTextures() {
          return !!(yb.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(bb) {
          this._thicknessTexture && bb.push(this._thicknessTexture), this._refractionTexture && bb.push(this._refractionTexture), this._refractionIntensityTexture && bb.push(this._refractionIntensityTexture), this._translucencyColorTexture && bb.push(this._translucencyColorTexture), this._translucencyIntensityTexture && bb.push(this._translucencyIntensityTexture)
        }
        getAnimatables(bb) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && bb.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && bb.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && bb.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && bb.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && bb.push(this._translucencyIntensityTexture)
        }
        dispose(bb) {
          bb && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(bb, wb, Mb) {
          return bb.SS_SCATTERING && wb.addFallback(Mb++, "SS_SCATTERING"), bb.SS_TRANSLUCENCY && wb.addFallback(Mb++, "SS_TRANSLUCENCY"), Mb
        }
        getSamplers(bb) {
          bb.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, wb = new WeakMap, Mb = new WeakMap, eb = new WeakMap, Hb = new WeakMap, pb = new WeakMap, Vb = new WeakMap, gb = new WeakMap, lb = new WeakMap, Lb = new WeakMap, Ib = new WeakMap, Ob = new WeakMap, Ub = new WeakMap, tb = new WeakMap, Cb = new WeakMap, Eb = new WeakMap, Fb = new WeakMap, (() => {
        const wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mw[Symbol.metadata] ?? null) : void 0;
        Bb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], sb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], mb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], hb = [(0, rb.E)(), (0, rb.d)("_markScenePrePassDirty")], zb = [(0, rb.E)()], Xb = [(0, rb.E)()], xb = [(0, rb.E)()], jb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Rb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Db = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], cb = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Yb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Zb = [(0, rb.E)()], fb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Ab = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Wb = [(0, rb.E)()], Jb = [(0, rb.E)()], Sb = [(0, rb.E)()], vb = [(0, rb.i)()], Qb = [(0, rb.E)()], qb = [(0, rb.E)()], ab = [(0, rb.i)()], ib = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], db = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Pb = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], nb = [(0, rb.i)()], ob = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], kb = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], bw = [(0, rb.E)()], ww = [(0, rb.E)()], (0, Kb.i)(bb, null, Bb, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isRefractionEnabled" in bb,
            get: bb => bb.isRefractionEnabled,
            set: (bb, wb) => {
              bb.isRefractionEnabled = wb
            }
          },
          metadata: wb
        }, ew, Hw), (0, Kb.i)(bb, null, sb, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isTranslucencyEnabled" in bb,
            get: bb => bb.isTranslucencyEnabled,
            set: (bb, wb) => {
              bb.isTranslucencyEnabled = wb
            }
          },
          metadata: wb
        }, pw, Vw), (0, Kb.i)(bb, null, mb, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isDispersionEnabled" in bb,
            get: bb => bb.isDispersionEnabled,
            set: (bb, wb) => {
              bb.isDispersionEnabled = wb
            }
          },
          metadata: wb
        }, lw, Lw), (0, Kb.i)(bb, null, hb, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isScatteringEnabled" in bb,
            get: bb => bb.isScatteringEnabled,
            set: (bb, wb) => {
              bb.isScatteringEnabled = wb
            }
          },
          metadata: wb
        }, Iw, Ow), (0, Kb.i)(bb, null, jb, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlbedoToTintRefraction" in bb,
            get: bb => bb.useAlbedoToTintRefraction,
            set: (bb, wb) => {
              bb.useAlbedoToTintRefraction = wb
            }
          },
          metadata: wb
        }, sw, mw), (0, Kb.i)(bb, null, Rb, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlbedoToTintTranslucency" in bb,
            get: bb => bb.useAlbedoToTintTranslucency,
            set: (bb, wb) => {
              bb.useAlbedoToTintTranslucency = wb
            }
          },
          metadata: wb
        }, hw, zw), (0, Kb.i)(bb, null, Db, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "thicknessTexture" in bb,
            get: bb => bb.thicknessTexture,
            set: (bb, wb) => {
              bb.thicknessTexture = wb
            }
          },
          metadata: wb
        }, Xw, xw), (0, Kb.i)(bb, null, cb, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "refractionTexture" in bb,
            get: bb => bb.refractionTexture,
            set: (bb, wb) => {
              bb.refractionTexture = wb
            }
          },
          metadata: wb
        }, jw, Kw), (0, Kb.i)(bb, null, Yb, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "indexOfRefraction" in bb,
            get: bb => bb.indexOfRefraction,
            set: (bb, wb) => {
              bb.indexOfRefraction = wb
            }
          },
          metadata: wb
        }, rw, Rw), (0, Kb.i)(bb, null, fb, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertRefractionY" in bb,
            get: bb => bb.invertRefractionY,
            set: (bb, wb) => {
              bb.invertRefractionY = wb
            }
          },
          metadata: wb
        }, Zw, fw), (0, Kb.i)(bb, null, Ab, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: bb => "linkRefractionWithTransparency" in bb,
            get: bb => bb.linkRefractionWithTransparency,
            set: (bb, wb) => {
              bb.linkRefractionWithTransparency = wb
            }
          },
          metadata: wb
        }, Aw, Ww), (0, Kb.i)(bb, null, ib, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useMaskFromThicknessTexture" in bb,
            get: bb => bb.useMaskFromThicknessTexture,
            set: (bb, wb) => {
              bb.useMaskFromThicknessTexture = wb
            }
          },
          metadata: wb
        }, ow, Tw), (0, Kb.i)(bb, null, db, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "refractionIntensityTexture" in bb,
            get: bb => bb.refractionIntensityTexture,
            set: (bb, wb) => {
              bb.refractionIntensityTexture = wb
            }
          },
          metadata: wb
        }, kw, bM), (0, Kb.i)(bb, null, Pb, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyIntensityTexture" in bb,
            get: bb => bb.translucencyIntensityTexture,
            set: (bb, wb) => {
              bb.translucencyIntensityTexture = wb
            }
          },
          metadata: wb
        }, wM, MM), (0, Kb.i)(bb, null, ob, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyColorTexture" in bb,
            get: bb => bb.translucencyColorTexture,
            set: (bb, wb) => {
              bb.translucencyColorTexture = wb
            }
          },
          metadata: wb
        }, pM, VM), (0, Kb.i)(bb, null, kb, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: bb => "useGltfStyleTextures" in bb,
            get: bb => bb.useGltfStyleTextures,
            set: (bb, wb) => {
              bb.useGltfStyleTextures = wb
            }
          },
          metadata: wb
        }, gM, lM), (0, Kb.i)(null, null, zb, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: bb => "_scatteringDiffusionProfileIndex" in bb,
            get: bb => bb._scatteringDiffusionProfileIndex,
            set: (bb, wb) => {
              bb._scatteringDiffusionProfileIndex = wb
            }
          },
          metadata: wb
        }, Uw, tw), (0, Kb.i)(null, null, Xb, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "refractionIntensity" in bb,
            get: bb => bb.refractionIntensity,
            set: (bb, wb) => {
              bb.refractionIntensity = wb
            }
          },
          metadata: wb
        }, Cw, Ew), (0, Kb.i)(null, null, xb, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyIntensity" in bb,
            get: bb => bb.translucencyIntensity,
            set: (bb, wb) => {
              bb.translucencyIntensity = wb
            }
          },
          metadata: wb
        }, Fw, Bw), (0, Kb.i)(null, null, Zb, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "_volumeIndexOfRefraction" in bb,
            get: bb => bb._volumeIndexOfRefraction,
            set: (bb, wb) => {
              bb._volumeIndexOfRefraction = wb
            }
          },
          metadata: wb
        }, Dw, Yw), (0, Kb.i)(null, null, Wb, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "minimumThickness" in bb,
            get: bb => bb.minimumThickness,
            set: (bb, wb) => {
              bb.minimumThickness = wb
            }
          },
          metadata: wb
        }, Jw, Sw), (0, Kb.i)(null, null, Jb, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "maximumThickness" in bb,
            get: bb => bb.maximumThickness,
            set: (bb, wb) => {
              bb.maximumThickness = wb
            }
          },
          metadata: wb
        }, Nw, vw), (0, Kb.i)(null, null, Sb, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: bb => "useThicknessAsDepth" in bb,
            get: bb => bb.useThicknessAsDepth,
            set: (bb, wb) => {
              bb.useThicknessAsDepth = wb
            }
          },
          metadata: wb
        }, Qw, Gw), (0, Kb.i)(null, null, vb, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColor" in bb,
            get: bb => bb.tintColor,
            set: (bb, wb) => {
              bb.tintColor = wb
            }
          },
          metadata: wb
        }, qw, aw), (0, Kb.i)(null, null, Qb, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColorAtDistance" in bb,
            get: bb => bb.tintColorAtDistance,
            set: (bb, wb) => {
              bb.tintColorAtDistance = wb
            }
          },
          metadata: wb
        }, iw, uw), (0, Kb.i)(null, null, qb, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: bb => "dispersion" in bb,
            get: bb => bb.dispersion,
            set: (bb, wb) => {
              bb.dispersion = wb
            }
          },
          metadata: wb
        }, dw, Pw), (0, Kb.i)(null, null, ab, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "diffusionDistance" in bb,
            get: bb => bb.diffusionDistance,
            set: (bb, wb) => {
              bb.diffusionDistance = wb
            }
          },
          metadata: wb
        }, nw, yw), (0, Kb.i)(null, null, nb, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyColor" in bb,
            get: bb => bb.translucencyColor,
            set: (bb, wb) => {
              bb.translucencyColor = wb
            }
          },
          metadata: wb
        }, eM, HM), (0, Kb.i)(null, null, bw, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: bb => "applyAlbedoAfterSubSurface" in bb,
            get: bb => bb.applyAlbedoAfterSubSurface,
            set: (bb, wb) => {
              bb.applyAlbedoAfterSubSurface = wb
            }
          },
          metadata: wb
        }, LM, IM), (0, Kb.i)(null, null, ww, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: bb => "legacyTranslucency" in bb,
            get: bb => bb.legacyTranslucency,
            set: (bb, wb) => {
              bb.legacyTranslucency = wb
            }
          },
          metadata: wb
        }, OM, UM), wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wb
        })
      })(), bb.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, bb.DEFAULT_LEGACY_TRANSLUCENCY = !1, bb
    })();
    var Lw = Mb(42035),
      Iw = Mb(42004),
      Ow = Mb(42050),
      Uw = Mb(42052),
      tw = Mb(42055),
      Cw = Mb(42061),
      Ew = Mb(42066),
      Fw = Mb(42070),
      Bw = Mb(41554);
    const sw = {
      effect: null,
      subMesh: null
    };
    class mw extends((0, Ew.c)((0, Cw.e)(Qb.b))) {}
    class hw extends((0, db.i)(mw)) {
      constructor(bb) {
        super(bb), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class zw extends((0, Fw.b)(nb.d)) {}
    let Xw = (() => {
      var bb, wb;
      let eb, Hb = zw,
        Vb = [],
        gb = [];
      return bb = class extends Hb {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(bb) {
          this._realTimeFiltering = bb, this.eeb(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(bb) {
          this._realTimeFilteringQuality = bb, this.eeb(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, Kb.b)(this, wb, "f")
        }
        set debugMode(bb) {
          (0, Kb.f)(this, wb, bb, "f")
        }
        constructor(Mb, eb) {
          super(Mb, eb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || bb.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Nb.q(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = ub.e.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new ub.e(0, 0, 0), this._albedoColor = new ub.e(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new ub.e(1, 1, 1), this._reflectionColor = new ub.e(1, 1, 1), this._emissiveColor = new ub.e(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = bb.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Db.h(16), this._globalAmbientColor = new ub.e(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, wb.set(this, (0, Kb.m)(this, Vb, 0)), this.debugLimit = ((0, Kb.m)(this, gb), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new ab(this), this.clearCoat = new bw(this), this.iridescence = new Mw(this), this.anisotropy = new Hw(this), this.sheen = new Vw(this), this.subSurface = new lw(this), this.detailMap = new Lw.d(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), yb.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Ab(this.RJ()), this.prePassConfiguration = new ib.c
        }
        get hasRenderTargetTextures() {
          return !!(yb.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === bb.PBRMATERIAL_OPAQUE || this._transparencyMode === bb.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === bb.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== bb.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(bb, wb, Mb) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const eb = wb._drawWrapper;
          if (eb.effect && this.isFrozen && eb._wasPreviouslyReady && eb._wasPreviouslyUsingInstances === Mb) return !0;
          wb.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), wb.materialDefines = new hw(this._eventInfo.defineNames));
          const Hb = wb.materialDefines;
          if (this._isReadyForSubMesh(wb)) return !0;
          const pb = this.RJ(),
            Vb = pb.DC();
          if (Hb._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, pb.texturesEnabled)) {
            if (this._albedoTexture && yb.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && yb.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && yb.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && yb.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && yb.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const bb = this._getReflectionTexture();
            if (bb && yb.e.ReflectionTextureEnabled) {
              if (!bb.isReadyOrNotBlocking()) return !1;
              if (bb.irradianceTexture) {
                if (!bb.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!bb.sphericalPolynomial && bb.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && yb.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && yb.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (yb.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (Vb.getCaps().standardDerivatives && this._bumpTexture && yb.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && yb.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Hb, this._eventInfo.subMesh = wb, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Hb._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Hb.AREALIGHTUSED || Hb.CLUSTLIGHT_BATCH)
            for (let Ob = 0; Ob < bb.lightSources.length; Ob++)
              if (!bb.lightSources[Ob]._isReady()) return !1;
          if (Vb.getCaps().standardDerivatives || bb.isVerticesDataPresent(vb.i.NormalKind) || (bb.createNormals(!0), Rb.b.Warn("PBRMaterial: Normals have been created for the mesh: " + bb.name)), !(0, Tb.c)(pb, bb, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const gb = wb.effect,
            lb = Hb._areLightsDisposed,
            Lb = this._prepareEffect(bb, wb.getRenderingMesh(), Hb, this.onCompiled, this.onError, Mb, null);
          let Ib = !1;
          if (Lb)
            if (this._onEffectCreatedObservable && (sw.effect = Lb, sw.subMesh = wb, this._onEffectCreatedObservable.notifyObservers(sw)), this.allowShaderHotSwapping && gb && !Lb.isReady()) {
              if (Hb.markAsUnprocessed(), Ib = this.isFrozen, lb) return Hb._areLightsDisposed = !0, !1
            } else pb.resetCachedMaterial(), wb.setEffect(Lb, Hb, this._materialContext);
          return !(!wb.effect || !wb.effect.isReady()) && (Hb._renderId = pb.getRenderId(), eb._wasPreviouslyReady = !Ib, eb._wasPreviouslyUsingInstances = !!Mb, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(wb, Mb, eb) {
          let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            gb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(wb, Mb, eb, Vb, gb), !eb.isDirty) return null;
          eb.markAsProcessed();
          const lb = this.RJ().DC(),
            Lb = new ob.d;
          let Ib = 0;
          eb.USESPHERICALINVERTEX && Lb.addFallback(Ib++, "USESPHERICALINVERTEX"), eb.FOG && Lb.addFallback(Ib, "FOG"), eb.SPECULARAA && Lb.addFallback(Ib, "SPECULARAA"), eb.POINTSIZE && Lb.addFallback(Ib, "POINTSIZE"), eb.LOGARITHMICDEPTH && Lb.addFallback(Ib, "LOGARITHMICDEPTH"), eb.PARALLAX && Lb.addFallback(Ib, "PARALLAX"), eb.PARALLAX_RHS && Lb.addFallback(Ib, "PARALLAX_RHS"), eb.PARALLAXOCCLUSION && Lb.addFallback(Ib++, "PARALLAXOCCLUSION"), eb.ENVIRONMENTBRDF && Lb.addFallback(Ib++, "ENVIRONMENTBRDF"), eb.TANGENT && Lb.addFallback(Ib++, "TANGENT"), eb.BUMP && Lb.addFallback(Ib++, "BUMP"), Ib = (0, Tb.G)(eb, Lb, this._maxSimultaneousLights, Ib), eb.SPECULARTERM && Lb.addFallback(Ib++, "SPECULARTERM"), eb.USESPHERICALFROMREFLECTIONMAP && Lb.addFallback(Ib++, "USESPHERICALFROMREFLECTIONMAP"), eb.USEIRRADIANCEMAP && Lb.addFallback(Ib++, "USEIRRADIANCEMAP"), eb.LIGHTMAP && Lb.addFallback(Ib++, "LIGHTMAP"), eb.NORMAL && Lb.addFallback(Ib++, "NORMAL"), eb.AMBIENT && Lb.addFallback(Ib++, "AMBIENT"), eb.EMISSIVE && Lb.addFallback(Ib++, "EMISSIVE"), eb.VERTEXCOLOR && Lb.addFallback(Ib++, "VERTEXCOLOR"), eb.MORPHTARGETS && Lb.addFallback(Ib++, "MORPHTARGETS"), eb.MULTIVIEW && Lb.addFallback(0, "MULTIVIEW");
          const Ob = [vb.i.PositionKind];
          eb.NORMAL && Ob.push(vb.i.NormalKind), eb.TANGENT && Ob.push(vb.i.TangentKind);
          for (let bb = 1; bb <= 6; ++bb) eb["UV" + bb] && Ob.push(`uv${1===bb?"":bb}`);
          eb.VERTEXCOLOR && Ob.push(vb.i.ColorKind), (0, Tb.I)(Ob, wb, eb, Lb), (0, Tb.J)(Ob, eb), (0, Tb.N)(Ob, wb, eb), (0, Tb.H)(Ob, wb, eb);
          let Ub = "pbr";
          const tb = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            Cb = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, Tb.nb)(tb, Cb, !0);
          const Eb = ["Material", "Scene", "Mesh"],
            Fb = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: eb.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = Lb, this._eventInfo.fallbackRank = Ib, this._eventInfo.defines = eb, this._eventInfo.uniforms = tb, this._eventInfo.attributes = Ob, this._eventInfo.samplers = Cb, this._eventInfo.uniformBuffersNames = Eb, this._eventInfo.customCode = void 0, this._eventInfo.mesh = wb, this._eventInfo.indexParameters = Fb, this._callbackPluginEventGeneric(128, this._eventInfo), tw.b.AddUniformsAndSamplers(tb, Cb), ib.c.AddUniforms(tb), ib.c.AddSamplers(Cb), (0, Iw.d)(tb), this._useVertexPulling) {
            const bb = Mb?.geometry;
            bb && (this._vertexPullingMetadata = (0, Ow.e)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, wb) => {
              tb.push(`vp_${wb}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          Pb.e && (Pb.e.PrepareUniforms(tb, eb), Pb.e.PrepareSamplers(Cb, eb)), (0, Tb.ob)({
            uniformsNames: tb,
            uniformBuffersNames: Eb,
            samplers: Cb,
            defines: eb,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const Bb = {};
          this.customShaderNameResolve && (Ub = this.customShaderNameResolve(Ub, tb, Eb, Cb, eb, Ob, Bb));
          const sb = eb.toString(),
            mb = lb.createEffect(Ub, {
              attributes: Ob,
              uniformsNames: tb,
              uniformBuffersNames: Eb,
              samplers: Cb,
              defines: sb,
              fallbacks: Lb,
              onCompiled: Hb,
              onError: pb,
              indexParameters: Fb,
              processFinalCode: Bb.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: eb.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, lb);
          return this._eventInfo.customCode = void 0, mb
        }
        _prepareDefines(wb, Mb, eb) {
          let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const Vb = Mb.hasThinInstances,
            gb = this.RJ(),
            lb = gb.DC();
          (0, Tb.Z)(gb, wb, eb, !0, this._maxSimultaneousLights, this._disableLighting), eb._needNormals = !0, (0, Tb.eb)(gb, eb);
          const Lb = this.needAlphaBlendingForMesh(wb) && this.RJ().useOrderIndependentTransparency;
          if ((0, Tb.jb)(gb, eb, this.canRenderToMRT && !Lb), (0, Tb.ib)(gb, eb, Lb), tw.b.PrepareDefines(lb.currentRenderPassId, wb, eb), eb.METALLICWORKFLOW = this.isMetallicWorkflow(), eb._areTexturesDirty) {
            eb._needUVs = !1;
            for (let bb = 1; bb <= 6; ++bb) eb["MAINUV" + bb] = !1;
            if (gb.texturesEnabled) {
              eb.ALBEDODIRECTUV = 0, eb.BASE_WEIGHTDIRECTUV = 0, eb.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, eb.AMBIENTDIRECTUV = 0, eb.OPACITYDIRECTUV = 0, eb.EMISSIVEDIRECTUV = 0, eb.REFLECTIVITYDIRECTUV = 0, eb.MICROSURFACEMAPDIRECTUV = 0, eb.METALLIC_REFLECTANCEDIRECTUV = 0, eb.REFLECTANCEDIRECTUV = 0, eb.BUMPDIRECTUV = 0, eb.LIGHTMAPDIRECTUV = 0, lb.getCaps().textureLOD && (eb.LODBASEDMICROSFURACE = !0), this._albedoTexture && yb.e.DiffuseTextureEnabled ? ((0, Tb.$)(this._albedoTexture, eb, "ALBEDO"), eb.GAMMAALBEDO = this._albedoTexture.gammaSpace) : eb.ALBEDO = !1, this._baseWeightTexture && yb.e.BaseWeightTextureEnabled ? (0, Tb.$)(this._baseWeightTexture, eb, "BASE_WEIGHT") : eb.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && yb.e.BaseDiffuseRoughnessTextureEnabled ? (0, Tb.$)(this._baseDiffuseRoughnessTexture, eb, "BASE_DIFFUSE_ROUGHNESS") : eb.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && yb.e.AmbientTextureEnabled ? ((0, Tb.$)(this._ambientTexture, eb, "AMBIENT"), eb.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : eb.AMBIENT = !1, this._opacityTexture && yb.e.OpacityTextureEnabled ? ((0, Tb.$)(this._opacityTexture, eb, "OPACITY"), eb.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : eb.OPACITY = !1;
              const bb = this._getReflectionTexture(),
                wb = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || lb.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, Tb.V)(gb, bb, eb, this.realTimeFiltering, this.realTimeFilteringQuality, !wb), this._lightmapTexture && yb.e.LightmapTextureEnabled ? ((0, Tb.$)(this._lightmapTexture, eb, "LIGHTMAP"), eb.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, eb.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, eb.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : eb.LIGHTMAP = !1, this._emissiveTexture && yb.e.EmissiveTextureEnabled ? ((0, Tb.$)(this._emissiveTexture, eb, "EMISSIVE"), eb.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : eb.EMISSIVE = !1, yb.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, Tb.$)(this._metallicTexture, eb, "REFLECTIVITY"), eb.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, eb.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, eb.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, eb.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, eb.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, Tb.$)(this._reflectivityTexture, eb, "REFLECTIVITY"), eb.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, eb.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, eb.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : eb.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (eb.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, Tb.$)(this._metallicReflectanceTexture, eb, "METALLIC_REFLECTANCE"), eb.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : eb.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, Tb.$)(this._reflectanceTexture, eb, "REFLECTANCE"), eb.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : eb.REFLECTANCE = !1) : (eb.METALLIC_REFLECTANCE = !1, eb.REFLECTANCE = !1), this._microSurfaceTexture ? (0, Tb.$)(this._microSurfaceTexture, eb, "MICROSURFACEMAP") : eb.MICROSURFACEMAP = !1) : (eb.REFLECTIVITY = !1, eb.MICROSURFACEMAP = !1), lb.getCaps().standardDerivatives && this._bumpTexture && yb.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, Tb.$)(this._bumpTexture, eb, "BUMP"), this._useParallax && this._albedoTexture && yb.e.DiffuseTextureEnabled ? (eb.PARALLAX = !0, eb.PARALLAX_RHS = gb.useRightHandedSystem, eb.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : eb.PARALLAX = !1, eb.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (eb.BUMP = !1, eb.PARALLAX = !1, eb.PARALLAX_RHS = !1, eb.PARALLAXOCCLUSION = !1, eb.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && yb.e.ReflectionTextureEnabled ? (eb.ENVIRONMENTBRDF = !0, eb.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (eb.ENVIRONMENTBRDF = !1, eb.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? eb.ALPHAFROMALBEDO = !0 : eb.ALPHAFROMALBEDO = !1
            }
            eb.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === bb.LIGHTFALLOFF_STANDARD ? (eb.USEPHYSICALLIGHTFALLOFF = !1, eb.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === bb.LIGHTFALLOFF_GLTF ? (eb.USEPHYSICALLIGHTFALLOFF = !1, eb.USEGLTFLIGHTFALLOFF = !0) : (eb.USEPHYSICALLIGHTFALLOFF = !0, eb.USEGLTFLIGHTFALLOFF = !1), eb.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? eb.TWOSIDEDLIGHTING = !0 : eb.TWOSIDEDLIGHTING = !1, eb.MIRRORED = !!gb._mirroredCameraPosition, eb.SPECULARAA = lb.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(eb._areTexturesDirty || eb._areMiscDirty) && (eb.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, eb.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, eb.ALPHABLEND = this.needAlphaBlendingForMesh(wb), eb.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, eb.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), eb._areTexturesDirty && (eb.TEXTURE_REPETITION_MODE = lb.version > 1 || lb.isWebGPU ? this.textureRepetitionMode : 0), eb._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(eb), eb.FORCENORMALFORWARD = this._forceNormalForward, eb.RADIANCEOCCLUSION = this._useRadianceOcclusion, eb.HORIZONOCCLUSION = this._useHorizonOcclusion, eb._areMiscDirty && ((0, Tb.bb)(wb, gb, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(wb), eb, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Mb, this._isVertexOutputInvariant), eb.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !wb.isVerticesDataPresent(vb.i.NormalKind), eb.DEBUGMODE = this._debugMode), (0, Tb.U)(gb, lb, this, eb, !!Hb, pb, Vb), this._eventInfo.defines = eb, this._eventInfo.mesh = wb, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Tb.Q)(wb, eb, !0, !0, !0, this._transparencyMode !== bb.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(bb, wb, Mb) {
          const eb = {
            clipPlane: !1,
            useInstances: !1,
            ...Mb
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const Mb = new hw(this._eventInfo.defineNames),
              Hb = this._prepareEffect(bb, bb, Mb, void 0, void 0, eb.useInstances, eb.clipPlane);
            this._onEffectCreatedObservable && (sw.effect = Hb, sw.subMesh = null, this._onEffectCreatedObservable.notifyObservers(sw)), Hb.isReady() ? wb && wb(this) : Hb.onCompileObservable.add((() => {
              wb && wb(this)
            }))
          })()
        }
        buildUniformLayout() {
          const bb = this._uniformBuffer;
          bb.addUniform("vAlbedoInfos", 2), bb.addUniform("vBaseWeightInfos", 2), bb.addUniform("vBaseDiffuseRoughnessInfos", 2), bb.addUniform("vAmbientInfos", 4), bb.addUniform("vOpacityInfos", 2), bb.addUniform("vEmissiveInfos", 2), bb.addUniform("vLightmapInfos", 2), bb.addUniform("vReflectivityInfos", 3), bb.addUniform("vMicroSurfaceSamplerInfos", 2), bb.addUniform("vBumpInfos", 3), bb.addUniform("albedoMatrix", 16), bb.addUniform("baseWeightMatrix", 16), bb.addUniform("baseDiffuseRoughnessMatrix", 16), bb.addUniform("ambientMatrix", 16), bb.addUniform("opacityMatrix", 16), bb.addUniform("emissiveMatrix", 16), bb.addUniform("lightmapMatrix", 16), bb.addUniform("reflectivityMatrix", 16), bb.addUniform("microSurfaceSamplerMatrix", 16), bb.addUniform("bumpMatrix", 16), bb.addUniform("vTangentSpaceParams", 2), bb.addUniform("vAlbedoColor", 4), bb.addUniform("baseWeight", 1), bb.addUniform("baseDiffuseRoughness", 1), bb.addUniform("vLightingIntensity", 4), bb.addUniform("pointSize", 1), bb.addUniform("vReflectivityColor", 4), bb.addUniform("vEmissiveColor", 3), bb.addUniform("vAmbientColor", 3), bb.addUniform("vDebugMode", 2), bb.addUniform("vMetallicReflectanceFactors", 4), bb.addUniform("vMetallicReflectanceInfos", 2), bb.addUniform("metallicReflectanceMatrix", 16), bb.addUniform("vReflectanceInfos", 2), bb.addUniform("reflectanceMatrix", 16), bb.addUniform("cameraInfo", 4), bb.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Tb.mb)(bb, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(bb, wb, Mb) {
          const eb = this.RJ(),
            Hb = Mb.materialDefines;
          if (!Hb) return;
          const pb = Mb.effect;
          if (!pb) return;
          this._activeEffect = pb, wb.getMeshUniformBuffer().bindToEffect(pb, "Mesh"), wb.transferToEffect(bb);
          const Vb = eb.DC();
          this._uniformBuffer.bindToEffect(pb, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, eb, wb, bb, this.isFrozen), tw.b.Bind(Vb.currentRenderPassId, this._activeEffect, wb, bb, this);
          const gb = eb.activeCamera;
          gb ? this._uniformBuffer.updateFloat4("cameraInfo", gb.minZ, gb.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const lb = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", lb[0], lb[1], lb[2], lb[3]), this._eventInfo.subMesh = Mb, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Hb.OBJECTSPACE_NORMALMAP && (bb.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const Lb = this._mustRebind(eb, pb, Mb, wb.visibility),
            Ib = Vb._features.needToAlwaysBindUniformBuffers;
          (0, Tb.g)(wb, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Ow.c)(this._activeEffect, this._vertexPullingMetadata);
          let Ob = null;
          const Ub = this._uniformBuffer;
          if (Lb) {
            if (this.bindViewProjection(pb), Ob = this._getReflectionTexture(), !Ub.useUbo || !this.isFrozen || !Ub.isSync || Mb._drawWrapper._forceRebindOnNextCall) {
              if (eb.texturesEnabled && (this._albedoTexture && yb.e.DiffuseTextureEnabled && (Ub.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, Tb.C)(this._albedoTexture, Ub, "albedo")), this._baseWeightTexture && yb.e.BaseWeightTextureEnabled && (Ub.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, Tb.C)(this._baseWeightTexture, Ub, "baseWeight")), this._baseDiffuseRoughnessTexture && yb.e.BaseDiffuseRoughnessTextureEnabled && (Ub.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, Tb.C)(this._baseDiffuseRoughnessTexture, Ub, "baseDiffuseRoughness")), this._ambientTexture && yb.e.AmbientTextureEnabled && (Ub.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, Tb.C)(this._ambientTexture, Ub, "ambient")), this._opacityTexture && yb.e.OpacityTextureEnabled && (Ub.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Tb.C)(this._opacityTexture, Ub, "opacity")), this._emissiveTexture && yb.e.EmissiveTextureEnabled && (Ub.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Tb.C)(this._emissiveTexture, Ub, "emissive")), this._lightmapTexture && yb.e.LightmapTextureEnabled && (Ub.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Tb.C)(this._lightmapTexture, Ub, "lightmap")), yb.e.SpecularTextureEnabled && (this._metallicTexture ? (Ub.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, Tb.C)(this._metallicTexture, Ub, "reflectivity")) : this._reflectivityTexture && (Ub.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, Tb.C)(this._reflectivityTexture, Ub, "reflectivity")), this._metallicReflectanceTexture && (Ub.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, Tb.C)(this._metallicReflectanceTexture, Ub, "metallicReflectance")), this._reflectanceTexture && Hb.REFLECTANCE && (Ub.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, Tb.C)(this._reflectanceTexture, Ub, "reflectance")), this._microSurfaceTexture && (Ub.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, Tb.C)(this._microSurfaceTexture, Ub, "microSurfaceSampler"))), this._bumpTexture && Vb.getCaps().standardDerivatives && yb.e.BumpTextureEnabled && !this._disableBumpMap && (Ub.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, Tb.C)(this._bumpTexture, Ub, "bump"), eb._mirroredCameraPosition ? Ub.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Ub.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Tb.n)(eb, Hb, Ub, this._reflectionColor, Ob, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && Ub.updateFloat("pointSize", this.pointSize), Hb.METALLICWORKFLOW) {
                ub.k.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, ub.k.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const bb = this.subSurface?._indexOfRefraction ?? 1.5,
                  wb = 1;
                ub.k.Color4[0].b = bb;
                const Mb = Math.pow((bb - wb) / (bb + wb), 2);
                ub.k.Color4[0].a = Mb, Ub.updateDirectColor4("vReflectivityColor", ub.k.Color4[0]), Ub.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else Ub.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              Ub.updateColor3("vEmissiveColor", yb.e.EmissiveTextureEnabled ? this._emissiveColor : ub.e.BlackReadOnly), !Hb.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? Ub.updateColor4("vAlbedoColor", this._albedoColor, 1) : Ub.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), Ub.updateFloat("baseWeight", this._baseWeight), Ub.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * eb.environmentIntensity, this._lightingInfos.w = this._specularIntensity, Ub.updateVector4("vLightingIntensity", this._lightingInfos), eb.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), Ub.updateColor3("vAmbientColor", this._globalAmbientColor), Ub.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            eb.texturesEnabled && (this._albedoTexture && yb.e.DiffuseTextureEnabled && Ub.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && yb.e.BaseWeightTextureEnabled && Ub.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && yb.e.BaseDiffuseRoughnessTextureEnabled && Ub.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && yb.e.AmbientTextureEnabled && Ub.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && yb.e.OpacityTextureEnabled && Ub.setTexture("opacitySampler", this._opacityTexture), (0, Tb.q)(eb, Hb, Ub, Ob, this.realTimeFiltering), Hb.ENVIRONMENTBRDF && Ub.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && yb.e.EmissiveTextureEnabled && Ub.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && yb.e.LightmapTextureEnabled && Ub.setTexture("lightmapSampler", this._lightmapTexture), yb.e.SpecularTextureEnabled && (this._metallicTexture ? Ub.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && Ub.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && Ub.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Hb.REFLECTANCE && Ub.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && Ub.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && Vb.getCaps().standardDerivatives && yb.e.BumpTextureEnabled && !this._disableBumpMap && Ub.setTexture("bumpSampler", this._bumpTexture)), this.RJ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(wb) && this.RJ().depthPeelingRenderer.bind(pb), this._eventInfo.subMesh = Mb, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Iw.f)(this._activeEffect, this, eb), this.bindEyePosition(pb)
          } else Ib && (this._needToBindSceneUbo = !0);
          !Lb && this.isFrozen && !Ib || !eb.lightsEnabled || this._disableLighting || (0, Tb.s)(eb, wb, this._activeEffect, Hb, this._maxSimultaneousLights), !Lb && this.isFrozen || ((eb.fogEnabled && wb.applyFog && eb.fogMode !== Sb.g.FOGMODE_NONE || Ob || this.subSurface.refractionTexture || wb.receiveShadows || Hb.PREPASS || Hb.CLUSTLIGHT_BATCH) && this.bindView(pb), (0, Tb.j)(eb, wb, this._activeEffect, !0), Hb.NUM_MORPH_INFLUENCERS && (0, Tb.x)(wb, this._activeEffect), Hb.BAKED_VERTEX_ANIMATION_TEXTURE && wb.bakedVertexAnimationManager?.bind(pb, Hb.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Tb.v)(Hb, this._activeEffect, eb)), this._afterBind(wb, this._activeEffect, Mb), Ub.update()
        }
        getAnimatables() {
          const bb = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && bb.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && bb.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && bb.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && bb.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && bb.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && bb.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && bb.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? bb.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && bb.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && bb.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && bb.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && bb.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && bb.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && bb.push(this._microSurfaceTexture), bb
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.RJ().environmentTexture
        }
        getActiveTextures() {
          const bb = super.getActiveTextures();
          return this._albedoTexture && bb.push(this._albedoTexture), this._baseWeightTexture && bb.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && bb.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && bb.push(this._ambientTexture), this._opacityTexture && bb.push(this._opacityTexture), this._reflectionTexture && bb.push(this._reflectionTexture), this._emissiveTexture && bb.push(this._emissiveTexture), this._reflectivityTexture && bb.push(this._reflectivityTexture), this._metallicTexture && bb.push(this._metallicTexture), this._metallicReflectanceTexture && bb.push(this._metallicReflectanceTexture), this._reflectanceTexture && bb.push(this._reflectanceTexture), this._microSurfaceTexture && bb.push(this._microSurfaceTexture), this._bumpTexture && bb.push(this._bumpTexture), this._lightmapTexture && bb.push(this._lightmapTexture), bb
        }
        hasTexture(bb) {
          return !!super.hasTexture(bb) || (this._albedoTexture === bb || (this._baseWeightTexture === bb || (this._baseDiffuseRoughnessTexture === bb || (this._ambientTexture === bb || (this._opacityTexture === bb || (this._reflectionTexture === bb || (this._emissiveTexture === bb || (this._reflectivityTexture === bb || (this._metallicTexture === bb || (this._metallicReflectanceTexture === bb || (this._reflectanceTexture === bb || (this._microSurfaceTexture === bb || (this._bumpTexture === bb || this._lightmapTexture === bb)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const bb = this.RJ().enableSubSurfaceForPrePass();
          return bb && (bb.enabled = !0), !0
        }
        dispose(bb, wb) {
          this._breakShaderLoadedCheck = !0, wb && (this._environmentBRDFTexture && this.RJ().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(bb, wb)
        }
      }, wb = new WeakMap, (() => {
        const wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hb[Symbol.metadata] ?? null) : void 0;
        eb = [(0, rb.d)("_markAllSubMeshesAsMiscDirty")], (0, Kb.i)(bb, null, eb, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "debugMode" in bb,
            get: bb => bb.debugMode,
            set: (bb, wb) => {
              bb.debugMode = wb
            }
          },
          metadata: wb
        }, Vb, gb), wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wb
        })
      })(), bb.PBRMATERIAL_OPAQUE = pb.b.MATERIAL_OPAQUE, bb.PBRMATERIAL_ALPHATEST = pb.b.MATERIAL_ALPHATEST, bb.PBRMATERIAL_ALPHABLEND = pb.b.MATERIAL_ALPHABLEND, bb.PBRMATERIAL_ALPHATESTANDBLEND = pb.b.MATERIAL_ALPHATESTANDBLEND, bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, bb.LIGHTFALLOFF_PHYSICAL = 0, bb.LIGHTFALLOFF_GLTF = 1, bb.LIGHTFALLOFF_STANDARD = 2, bb.ForceGLSL = !1, bb._ShaderLoader = new Uw.e((() => [Promise.all([Mb.e(636), Mb.e(647)]).then((() => Mb(64664))), Promise.all([Mb.e(641), Mb.e(637), Mb.e(698), Mb.e(650), Mb.e(697)]).then((() => Mb(64687)))]), (() => [Promise.all([Mb.e(655), Mb.e(657), Mb.e(664)]).then((() => Mb(64770))), Promise.all([Mb.e(655), Mb.e(658), Mb.e(701), Mb.e(668), Mb.e(700)]).then((() => Mb(64798)))])), bb
    })();
    Object.getOwnPropertyDescriptor(Xw.prototype, "decalMap") || Object.defineProperty(Xw.prototype, "decalMap", (0, Bw.g)("PBRBaseMaterial", "decalMap")), (0, Mb(54067).d)();
    var xw = Mb(41697);
    var jw = Mb(41771),
      Kw = Mb(54051),
      rw = Mb(41506),
      Rw = Mb(41511),
      Dw = Mb(41623);
    let Yw = !1;
    const Zw = new ub.f,
      fw = new ub.f;
    class Aw extends Kw.b {
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
      set wrapU(bb) {
        if (this._textures)
          for (let wb = 0; wb < this._textures.length; wb++) this._textures[wb].wrapU = bb
      }
      set wrapV(bb) {
        if (this._textures)
          for (let wb = 0; wb < this._textures.length; wb++) this._textures[wb].wrapV = bb
      }
      constructor(bb, wb, Mb, eb, Hb, pb) {
        const Vb = !(!Hb || !Hb.generateMipMaps) && Hb.generateMipMaps,
          gb = !(!Hb || !Hb.generateDepthTexture) && Hb.generateDepthTexture,
          lb = Hb && Hb.depthTextureFormat ? Hb.depthTextureFormat : 15,
          Lb = !Hb || void 0 === Hb.doNotChangeAspectRatio || Hb.doNotChangeAspectRatio,
          Ib = !(!Hb || !Hb.drawOnlyOnFirstAttachmentByDefault) && Hb.drawOnlyOnFirstAttachmentByDefault;
        if (super(bb, wb, eb, Vb, Lb, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Yw || (Yw = !0, Rw.ThinEngine.prototype.restoreSingleAttachment = function() {
            const bb = this._gl;
            this.bindAttachments([bb.BACK])
          }, Rw.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const bb = this._gl;
            this.bindAttachments([bb.COLOR_ATTACHMENT0])
          }, Rw.ThinEngine.prototype.buildTextureLayout = function(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Mb = this._gl,
              eb = [];
            if (wb) eb.push(Mb.BACK);
            else
              for (let Hb = 0; Hb < bb.length; Hb++) bb[Hb] ? eb.push(Mb["COLOR_ATTACHMENT" + Hb]) : eb.push(Mb.NONE);
            return eb
          }, Rw.ThinEngine.prototype.bindAttachments = function(bb) {
            const wb = this._gl,
              Mb = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, Mb)
              for (let eb = 0; eb < bb.length; eb++) bb[eb] !== wb.NONE && Mb[eb] && (0, Dw.g)(Mb[eb].format) && (this._integerMRTAttachmentsMask |= 1 << eb);
            wb.drawBuffers(bb)
          }, Rw.ThinEngine.prototype.clearAttachments = function(bb, wb, Mb, eb) {
            let Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const Vb = this._currentRenderTarget?.textures;
            let gb = !1;
            if (Mb && bb && Vb)
              for (let lb = 0; lb < wb.length; lb++) {
                const bb = Vb[lb];
                if (wb[lb] !== this._gl.NONE && bb && (0, Dw.g)(bb.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  gb = !0;
                  break
                }
              }
            if (!gb || !bb || !Vb) return this.bindAttachments(wb), void this.clear(bb, Mb, eb, Hb, pb);
            this.bindAttachments(wb), this._applyColorWriteState();
            for (let lb = 0; lb < wb.length; lb++) {
              const Mb = Vb[lb];
              if (wb[lb] !== this._gl.NONE && Mb) {
                let wb = bb;
                if ((0, Dw.g)(Mb.format)) {
                  const eb = (0, Dw.k)(Mb.type);
                  wb = eb ? Zw : fw;
                  const Hb = eb ? 255 : 1;
                  wb.r = Math.round(bb.r * Hb), wb.g = Math.round(bb.g * Hb), wb.b = Math.round(bb.b * Hb), wb.a = Math.round(bb.a * Hb)
                }
                this._clearColorAttachment(lb, wb, Mb.format, Mb.type)
              }
            }
            if (eb || Hb) {
              const bb = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, eb, Hb, pb)
              } finally {
                this._integerMRTAttachmentsMask = bb
              }
            }
          }, Rw.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Mb = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, bb.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(bb), wb || this.generateMipMapsMultiFramebuffer(bb), Mb && (bb._MSAAFramebuffer && this._bindUnboundFramebuffer(bb._framebuffer), Mb()), this._bindUnboundFramebuffer(null)
          }, Rw.ThinEngine.prototype.createMultipleRenderTarget = function(bb, wb) {
            let Mb, eb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Hb = !1,
              pb = !0,
              Vb = !1,
              gb = !1,
              lb = 1,
              Lb = 1,
              Ib = [],
              Ob = [],
              Ub = [],
              tb = [],
              Cb = [],
              Eb = [],
              Fb = [],
              Bb = [],
              sb = [],
              mb = !1;
            const hb = this._createHardwareRenderTargetWrapper(!0, !1, bb);
            void 0 !== wb && (Hb = void 0 !== wb.generateMipMaps && wb.generateMipMaps, pb = void 0 === wb.generateDepthBuffer || wb.generateDepthBuffer, Vb = void 0 !== wb.generateStencilBuffer && wb.generateStencilBuffer, gb = void 0 !== wb.generateDepthTexture && wb.generateDepthTexture, lb = wb.Clb ?? 1, Lb = wb.samples ?? Lb, Ib = wb.types || Ib, Ob = wb.samplingModes || Ob, Ub = wb.useSRGBBuffers || Ub, tb = wb.formats || tb, Cb = wb.targetTypes || Cb, Eb = wb.faceIndex || Eb, Fb = wb.layerIndex || Fb, Bb = wb.layerCounts || Bb, sb = wb.labels || sb, mb = wb.dontCreateTextures ?? !1, this.HE > 1 && (13 === wb.depthTextureFormat || 17 === wb.depthTextureFormat || 16 === wb.depthTextureFormat || 14 === wb.depthTextureFormat || 18 === wb.depthTextureFormat) && (Mb = wb.depthTextureFormat)), void 0 === Mb && (Mb = Vb ? 13 : 14);
            const zb = this._gl,
              Xb = this._currentFramebuffer,
              xb = zb.createFramebuffer();
            this._bindUnboundFramebuffer(xb);
            const jb = bb.width ?? bb,
              Kb = bb.height ?? bb,
              rb = [],
              Db = [],
              cb = this.HE > 1 && (13 === Mb || 17 === Mb || 18 === Mb);
            hb.label = wb?.label ?? "MultiRenderTargetWrapper", hb._framebuffer = xb, hb._generateDepthBuffer = gb || pb, hb._generateStencilBuffer = gb ? cb : Vb, hb._depthStencilBuffer = this._setupFramebufferDepthAttachments(hb._generateStencilBuffer, hb._generateDepthBuffer, jb, Kb, 1, Mb), hb._attachments = Db;
            for (let Yb = 0; Yb < lb; Yb++) {
              let bb = Ob[Yb] || 3,
                wb = Ib[Yb] || 0,
                Mb = Ub[Yb] || !1;
              const eb = tb[Yb] || 5,
                pb = Cb[Yb] || 3553,
                Vb = Bb[Yb] ?? 1;
              (1 !== wb || this._caps.textureFloatLinearFiltering) && (2 !== wb || this._caps.textureHalfFloatLinearFiltering) || (bb = 1);
              const gb = this._getSamplingParameters(bb, Hb);
              1 !== wb || this._caps.textureFloat || (wb = 0, Rb.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), Mb = Mb && this._caps.supportSRGBBuffers && (this.HE > 1 || this.isWebGPU);
              const lb = this.HE > 1,
                Lb = zb[lb ? "COLOR_ATTACHMENT" + Yb : "COLOR_ATTACHMENT" + Yb + "_WEBGL"];
              if (Db.push(Lb), -1 === pb || mb) continue;
              const Eb = new rw.e(this, 6);
              rb[Yb] = Eb, zb.activeTexture(zb["TEXTURE" + Yb]), zb.bindTexture(pb, Eb._hardwareTexture.underlyingResource), zb.texParameteri(pb, zb.TEXTURE_MAG_FILTER, gb.mag), zb.texParameteri(pb, zb.TEXTURE_MIN_FILTER, gb.min), zb.texParameteri(pb, zb.TEXTURE_WRAP_S, zb.CLAMP_TO_EDGE), zb.texParameteri(pb, zb.TEXTURE_WRAP_T, zb.CLAMP_TO_EDGE);
              const Fb = this._getRGBABufferInternalSizedFormat(wb, eb, Mb),
                Xb = this._getInternalFormat(eb),
                xb = this._getWebGLTextureType(wb);
              if (!lb || 35866 !== pb && 32879 !== pb)
                if (34067 === pb) {
                  for (let bb = 0; bb < 6; bb++) zb.texImage2D(zb.TEXTURE_CUBE_MAP_POSITIVE_X + bb, 0, Fb, jb, Kb, 0, Xb, xb, null);
                  Eb.isCube = !0
                } else zb.texImage2D(zb.TEXTURE_2D, 0, Fb, jb, Kb, 0, Xb, xb, null);
              else 35866 === pb ? Eb.is2DArray = !0 : Eb.is3D = !0, Eb.baseDepth = Eb.depth = Vb, zb.texImage3D(pb, 0, Fb, jb, Kb, Vb, 0, Xb, xb, null);
              Hb && zb.generateMipmap(pb), this._bindTextureDirectly(pb, null), Eb.baseWidth = jb, Eb.baseHeight = Kb, Eb.width = jb, Eb.height = Kb, Eb.isReady = !0, Eb.samples = 1, Eb.generateMipMaps = Hb, Eb.samplingMode = bb, Eb.type = wb, Eb._useSRGBBuffer = Mb, Eb.format = eb, Eb.label = sb[Yb] ?? hb.label + "-Texture" + Yb, this._internalTexturesCache.push(Eb)
            }
            if (gb && this._caps.depthTextureExtension && !mb) {
              const bb = new rw.e(this, 14);
              let wb = 5,
                eb = zb.DEPTH_COMPONENT16,
                pb = zb.DEPTH_COMPONENT,
                Vb = zb.UNSIGNED_SHORT,
                gb = zb.DEPTH_ATTACHMENT;
              this.HE < 2 ? eb = zb.DEPTH_COMPONENT : 14 === Mb ? (wb = 1, Vb = zb.FLOAT, eb = zb.DEPTH_COMPONENT32F) : 18 === Mb ? (wb = 0, Vb = zb.FLOAT_32_UNSIGNED_INT_24_8_REV, eb = zb.DEPTH32F_STENCIL8, pb = zb.DEPTH_STENCIL, gb = zb.DEPTH_STENCIL_ATTACHMENT) : 16 === Mb ? (wb = 0, Vb = zb.UNSIGNED_INT, eb = zb.DEPTH_COMPONENT24, gb = zb.DEPTH_ATTACHMENT) : 13 !== Mb && 17 !== Mb || (wb = 12, Vb = zb.UNSIGNED_INT_24_8, eb = zb.DEPTH24_STENCIL8, pb = zb.DEPTH_STENCIL, gb = zb.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(zb.TEXTURE_2D, bb, !0), zb.texParameteri(zb.TEXTURE_2D, zb.TEXTURE_MAG_FILTER, zb.NEAREST), zb.texParameteri(zb.TEXTURE_2D, zb.TEXTURE_MIN_FILTER, zb.NEAREST), zb.texParameteri(zb.TEXTURE_2D, zb.TEXTURE_WRAP_S, zb.CLAMP_TO_EDGE), zb.texParameteri(zb.TEXTURE_2D, zb.TEXTURE_WRAP_T, zb.CLAMP_TO_EDGE), zb.texImage2D(zb.TEXTURE_2D, 0, eb, jb, Kb, 0, pb, Vb, null), zb.framebufferTexture2D(zb.FRAMEBUFFER, gb, zb.TEXTURE_2D, bb._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(zb.TEXTURE_2D, null), hb._depthStencilTexture = bb, hb._depthStencilTextureWithStencil = cb, bb.baseWidth = jb, bb.baseHeight = Kb, bb.width = jb, bb.height = Kb, bb.isReady = !0, bb.samples = 1, bb.generateMipMaps = Hb, bb.samplingMode = 1, bb.format = Mb, bb.type = wb, bb.label = hb.label + "-DepthStencil", rb[lb] = bb, this._internalTexturesCache.push(bb)
            }
            if (hb.setTextures(rb), eb && zb.drawBuffers(Db), this._bindUnboundFramebuffer(Xb), hb.setLayerAndFaceIndices(Fb, Eb), this.resetTextureCache(), mb) {
              if (Lb > 1) {
                const bb = zb.createFramebuffer();
                if (!bb) throw new Error("Unable to create multi sampled framebuffer");
                hb._samples = Lb, hb._MSAAFramebuffer = bb, lb > 0 && eb && (this._bindUnboundFramebuffer(bb), zb.drawBuffers(Db), this._bindUnboundFramebuffer(Xb))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(hb, Lb, eb);
            return hb
          }, Rw.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(bb, wb) {
            let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.HE < 2 || !bb) return 1;
            if (bb.samples === wb) return wb;
            const eb = this._gl;
            wb = Math.min(wb, this.getCaps().maxMSAASamples), bb._depthStencilBuffer && (eb.deleteRenderbuffer(bb._depthStencilBuffer), bb._depthStencilBuffer = null), bb._MSAAFramebuffer && (eb.deleteFramebuffer(bb._MSAAFramebuffer), bb._MSAAFramebuffer = null);
            const Hb = bb._attachments.length;
            for (let Vb = 0; Vb < Hb; Vb++) {
              const wb = bb.textures[Vb]._hardwareTexture;
              wb?.releaseMSAARenderBuffers()
            }
            if (wb > 1 && "function" === typeof eb.renderbufferStorageMultisample) {
              const pb = eb.createFramebuffer();
              if (!pb) throw new Error("Unable to create multi sampled framebuffer");
              bb._MSAAFramebuffer = pb, this._bindUnboundFramebuffer(pb);
              const Vb = [];
              for (let Mb = 0; Mb < Hb; Mb++) {
                const Hb = bb.textures[Mb],
                  pb = Hb._hardwareTexture,
                  gb = eb[this.HE > 1 ? "COLOR_ATTACHMENT" + Mb : "COLOR_ATTACHMENT" + Mb + "_WEBGL"],
                  lb = this._createRenderBuffer(Hb.width, Hb.height, wb, -1, this._getRGBABufferInternalSizedFormat(Hb.type, Hb.format, Hb._useSRGBBuffer), gb);
                if (!lb) throw new Error("Unable to create multi sampled framebuffer");
                pb.addMSAARenderBuffer(lb), Hb.samples = wb, Vb.push(gb)
              }
              Mb && eb.drawBuffers(Vb)
            } else this._bindUnboundFramebuffer(bb._framebuffer);
            const pb = bb._depthStencilTexture ? bb._depthStencilTexture.format : void 0;
            return bb._depthStencilBuffer = this._setupFramebufferDepthAttachments(bb._generateStencilBuffer, bb._generateDepthBuffer, bb.width, bb.height, wb, pb), this._bindUnboundFramebuffer(null), bb._samples = wb, wb
          }, Rw.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(bb) {
            const wb = bb,
              Mb = this._gl;
            if (wb.isMulti)
              for (let eb = 0; eb < wb._attachments.length; eb++) {
                const bb = wb.textures[eb];
                !bb?.generateMipMaps || bb?.isCube || bb?.is3D || (this._bindTextureDirectly(Mb.TEXTURE_2D, bb, !0), Mb.generateMipmap(Mb.TEXTURE_2D), this._bindTextureDirectly(Mb.TEXTURE_2D, null))
              }
          }, Rw.ThinEngine.prototype.resolveMultiFramebuffer = function(bb) {
            const wb = bb,
              Mb = this._gl;
            if (!wb._MSAAFramebuffer || !wb.isMulti) return;
            let eb = wb.resolveMSAAColors ? Mb.COLOR_BUFFER_BIT : 0;
            eb |= wb._generateDepthBuffer && wb.resolveMSAADepth ? Mb.DEPTH_BUFFER_BIT : 0, eb |= wb._generateStencilBuffer && wb.resolveMSAAStencil ? Mb.STENCIL_BUFFER_BIT : 0;
            const Hb = wb._attachments,
              pb = Hb.length;
            Mb.bindFramebuffer(Mb.READ_FRAMEBUFFER, wb._MSAAFramebuffer), Mb.bindFramebuffer(Mb.DRAW_FRAMEBUFFER, wb._framebuffer);
            for (let Vb = 0; Vb < pb; Vb++) {
              const bb = wb.textures[Vb];
              for (let wb = 0; wb < pb; wb++) Hb[wb] = Mb.NONE;
              Hb[Vb] = Mb[this.HE > 1 ? "COLOR_ATTACHMENT" + Vb : "COLOR_ATTACHMENT" + Vb + "_WEBGL"], Mb.readBuffer(Hb[Vb]), Mb.drawBuffers(Hb), Mb.blitFramebuffer(0, 0, bb.width, bb.height, 0, 0, bb.width, bb.height, eb, Mb.NEAREST)
            }
            for (let Vb = 0; Vb < pb; Vb++) Hb[Vb] = Mb[this.HE > 1 ? "COLOR_ATTACHMENT" + Vb : "COLOR_ATTACHMENT" + Vb + "_WEBGL"];
            Mb.drawBuffers(Hb), Mb.bindFramebuffer(this._gl.FRAMEBUFFER, wb._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = pb;
        const Ob = [],
          Ub = [],
          tb = [],
          Cb = [],
          Eb = [],
          Fb = [],
          Bb = [],
          sb = [];
        this._initTypes(Mb, Ob, Ub, tb, Cb, Eb, Fb, Bb, sb, Hb);
        const mb = !Hb || void 0 === Hb.generateDepthBuffer || Hb.generateDepthBuffer,
          hb = !(!Hb || void 0 === Hb.generateStencilBuffer) && Hb.generateStencilBuffer,
          zb = Hb && Hb.samples ? Hb.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: Ub,
          generateMipMaps: Vb,
          generateDepthBuffer: mb,
          generateStencilBuffer: hb,
          generateDepthTexture: gb,
          depthTextureFormat: lb,
          types: Ob,
          Clb: Mb,
          useSRGBBuffers: tb,
          samples: zb,
          formats: Cb,
          targetTypes: Eb,
          faceIndex: Fb,
          layerIndex: Bb,
          layerCounts: sb,
          labels: pb,
          label: bb
        }, this._count = Mb, this._drawOnlyOnFirstAttachmentByDefault = Ib, Mb > 0 && (this._createInternalTextures(), this._createTextures(pb))
      }
      _initTypes(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb) {
        for (let Ib = 0; Ib < bb; Ib++) Lb && Lb.types && void 0 !== Lb.types[Ib] ? wb.push(Lb.types[Ib]) : wb.push(Lb && Lb.defaultType ? Lb.defaultType : 0), Lb && Lb.samplingModes && void 0 !== Lb.samplingModes[Ib] ? Mb.push(Lb.samplingModes[Ib]) : Mb.push(cb.f.BILINEAR_SAMPLINGMODE), Lb && Lb.useSRGBBuffers && void 0 !== Lb.useSRGBBuffers[Ib] ? eb.push(Lb.useSRGBBuffers[Ib]) : eb.push(!1), Lb && Lb.formats && void 0 !== Lb.formats[Ib] ? Hb.push(Lb.formats[Ib]) : Hb.push(5), Lb && Lb.targetTypes && void 0 !== Lb.targetTypes[Ib] ? pb.push(Lb.targetTypes[Ib]) : pb.push(3553), Lb && Lb.faceIndex && void 0 !== Lb.faceIndex[Ib] ? Vb.push(Lb.faceIndex[Ib]) : Vb.push(0), Lb && Lb.layerIndex && void 0 !== Lb.layerIndex[Ib] ? gb.push(Lb.layerIndex[Ib]) : gb.push(0), Lb && Lb.layerCounts && void 0 !== Lb.layerCounts[Ib] ? lb.push(Lb.layerCounts[Ib]) : lb.push(1)
      }
      _createInternaTextureIndexMapping() {
        const bb = {},
          wb = [];
        if (!this._renderTarget) return wb;
        const Mb = this._renderTarget.textures;
        for (let eb = 0; eb < Mb.length; eb++) {
          const Hb = Mb[eb];
          if (!Hb) continue;
          const pb = bb[Hb.uniqueId];
          void 0 !== pb ? wb[eb] = pb : bb[Hb.uniqueId] = eb
        }
        return wb
      }
      _rebuild() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || bb) return;
        const eb = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), wb && (this._releaseTextures(), this._createTextures(Mb));
        const Hb = this._renderTarget.textures;
        for (let pb = 0; pb < Hb.length; pb++) {
          const bb = this._textures[pb];
          void 0 !== eb[pb] && this._renderTarget.setTexture(Hb[eb[pb]], pb), bb._texture = Hb[pb], bb._texture && (bb._noMipmap = !bb._texture.useMipMaps, bb._useSRGBBuffer = bb._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let bb = 0; bb < this._textures.length; bb++) this._textures[bb]._texture = null, this._textures[bb].dispose()
      }
      _createTextures(bb) {
        const wb = this._renderTarget.textures;
        this._textures = [];
        for (let Mb = 0; Mb < wb.length; Mb++) {
          const eb = new cb.f(null, this.RJ());
          bb?.[Mb] && (eb.name = bb[Mb]), eb._texture = wb[Mb], eb._texture && (eb._noMipmap = !eb._texture.useMipMaps, eb._useSRGBBuffer = eb._texture._useSRGBBuffer), this._textures.push(eb)
        }
      }
      setInternalTexture(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === wb && (this._texture = bb), this.renderTarget.setTexture(bb, wb, Mb), this.textures[wb] || (this.textures[wb] = new cb.f(null, this.RJ()), this.textures[wb].name = this._textureNames?.[wb] ?? this.textures[wb].name), this.textures[wb]._texture = bb, this.textures[wb]._noMipmap = !bb.useMipMaps, this.textures[wb]._useSRGBBuffer = bb._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[wb] = bb.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[wb] = bb.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[wb] = bb._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[wb])) {
          let Mb;
          Mb = bb.is2DArray ? 35866 : bb.isCube ? 34067 : bb.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[wb] = Mb
        }
      }
      setLayerAndFaceIndex(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[bb] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[bb] = wb), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[bb] = Mb), this.renderTarget.setLayerAndFaceIndex(bb, wb, Mb))
      }
      setLayerAndFaceIndices(bb, wb) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = bb, this._multiRenderTargetOptions.faceIndex = wb, this.renderTarget.setLayerAndFaceIndices(bb, wb))
      }
      get samples() {
        return this._samples
      }
      set samples(bb) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(bb) : this._samples = bb
      }
      resize(bb) {
        this._processSizeParameter(bb), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(bb, wb, Mb) {
        this._multiRenderTargetOptions.Clb = bb, this._count = bb;
        const eb = [],
          Hb = [],
          pb = [],
          Vb = [],
          gb = [],
          lb = [],
          Lb = [],
          Ib = [];
        this._textureNames = Mb, this._initTypes(bb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, wb), this._multiRenderTargetOptions.types = eb, this._multiRenderTargetOptions.samplingModes = Hb, this._multiRenderTargetOptions.useSRGBBuffers = pb, this._multiRenderTargetOptions.formats = Vb, this._multiRenderTargetOptions.targetTypes = gb, this._multiRenderTargetOptions.faceIndex = lb, this._multiRenderTargetOptions.layerIndex = Lb, this._multiRenderTargetOptions.layerCounts = Ib, this._multiRenderTargetOptions.labels = Mb, this._rebuild(!1, !0, Mb)
      }
      _unbindFrameBuffer(bb, wb) {
        this._renderTarget && bb.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(wb)
        }))
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), bb ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const bb = this._renderTarget?.textures;
        if (bb) {
          for (let wb = bb.length - 1; wb >= 0; wb--) this._textures[wb]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var Ww = Mb(41841);
    class Jw {
      constructor(bb) {
        this.name = Ww.b.NAME_GEOMETRYBUFFERRENDERER, this.JE = bb
      }
      register() {
        this.JE._gatherRenderTargetsStage.registerStep(Ww.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(bb) {
        this.JE._geometryBufferRenderer && bb.push(this.JE._geometryBufferRenderer.getGBuffer())
      }
    }
    let Sw = !1;
    var Nw;
    ! function(bb) {
      bb[bb.Small = 0] = "Small", bb[bb.Medium = 1] = "Medium", bb[bb.Large = 2] = "Large", bb[bb.ExtraLarge = 3] = "ExtraLarge"
    }(Nw || (Nw = {}));
    const vw = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      Qw = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class Gw {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(bb) {
        if (bb && this._enableMeshBlendTag && !this._scene.DC().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = bb
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(bb) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = bb, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(bb, wb) {
        bb === Gw.POSITION_TEXTURE_TYPE ? (this._positionIndex = wb, this._enablePosition = !0) : bb === Gw.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = wb, this._enableVelocity = !0) : bb === Gw.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = wb, this._enableVelocityLinear = !0) : bb === Gw.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = wb, this._enableReflectivity = !0) : bb === Gw.DEPTH_TEXTURE_TYPE ? (this._depthIndex = wb, this._enableDepth = !0) : bb === Gw.NORMAL_TEXTURE_TYPE ? (this._normalIndex = wb, this._enableNormal = !0) : bb === Gw.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = wb, this._enableScreenspaceDepth = !0) : bb === Gw.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = wb, this._enableIrradiance = !0) : bb === Gw.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = wb, this._enableObjectId = !0) : bb === Gw.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = wb, this._enableMeshBlendTag = !0)
      }
      _setAttachments(bb) {
        this._attachmentsFromPrePass = bb
      }
      _linkInternalTexture(bb) {
        this._multiRenderTarget.setInternalTexture(bb, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(bb) {
        this._multiRenderTarget.renderList = bb
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(bb) {
        switch (bb) {
          case Gw.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case Gw.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case Gw.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case Gw.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case Gw.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case Gw.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case Gw.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case Gw.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case Gw.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case Gw.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(bb) {
        this._enableDepth = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(bb) {
        this._enableNormal = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(bb) {
        this._enablePosition = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(bb) {
        this._enableVelocity = bb, bb || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = bb
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(bb) {
        this._enableVelocityLinear = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(bb) {
        this._enableReflectivity = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(bb) {
        this._enableScreenspaceDepth = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(bb) {
        this._enableIrradiance = bb, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(bb) {
        if (bb && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (bb && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (bb && !this._enableObjectId && !this._linkedWithPrePass) {
          const bb = this._scene.DC(),
            wb = Math.min(bb.getCaps().maxDrawBuffers ?? 1, 8),
            Mb = this._assignRenderTargetIndices()[0] + 1;
          if (bb.getCaps().drawBuffersExtension && Mb > wb) throw new Error(`GeometryBufferRenderer: ${Mb} color attachments were requested, but this engine supports at most ${wb}`)
        }
        this._enableObjectId = bb, bb || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(bb) {
        if (this._enableMeshBlendTag !== bb) {
          if (bb) {
            const bb = this._scene.DC();
            if (! function(bb) {
                return "NATIVE" !== bb.shaderPlatformName && (bb.isWebGPU || 2 === bb.HE)
              }(bb)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !bb.isWebGPU && !bb.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const wb = Math.min(bb.getCaps().maxDrawBuffers ?? 1, 8),
                Mb = this._assignRenderTargetIndices()[0] + 1;
              if (bb.getCaps().drawBuffersExtension && Mb > wb) throw new Error(`GeometryBufferRenderer: ${Mb} color attachments were requested, but this engine supports at most ${wb}`)
            }
          }
          this._enableMeshBlendTag = bb, bb || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get JE() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          eb = arguments.length > 3 ? arguments[3] : void 0;
        var Hb;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new ub.f(0, 0, 0, 0), this._clearDepthColor = new ub.f(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = bb, this._ratioOrDimensions = wb, this._useUbo = bb.DC().supportsUniformBuffers, this._depthFormat = Mb, this._textureTypesAndFormats = eb || {}, this._initShaderSourceAsync(), Hb = Gw, Sw || (Sw = !0, Object.defineProperty(Sb.g.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(bb) {
            bb && bb.isSupported && (this._geometryBufferRenderer = bb)
          },
          enumerable: !0,
          configurable: !0
        }), Sb.g.prototype.enableGeometryBufferRenderer = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            Mb = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Hb(this, bb, wb, Mb), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, Sb.g.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Hb._SceneComponentInitialization = bb => {
          let wb = bb._getComponent(Ww.b.NAME_GEOMETRYBUFFERRENDERER);
          wb || (wb = new Jw(bb), bb.BHb(wb))
        }), Gw._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.DC().isWebGPU && !Gw.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Mb.e(656).then((() => Mb(64972))), Promise.all([Mb.e(655), Mb.e(667)]).then((() => Mb(64980)))])) : await Promise.all([Mb.e(639).then((() => Mb(64989))), Mb.e(638).then((() => Mb(64996)))]), this._shadersLoaded = !0
      }
      isReady(bb, wb) {
        if (!this._shadersLoaded) return !1;
        const Mb = bb.AC();
        if (Mb && Mb.disableDepthWrite) return !1;
        if (function(bb) {
            return bb._isGaussianSplatting || "GaussianSplattingMesh" === (wb = bb.getClassName()) || "GaussianSplattingStream" === wb;
            var wb
          }(bb.getMesh())) return !1;
        const eb = [],
          Hb = [vb.i.PositionKind],
          pb = bb.getMesh();
        pb.isVerticesDataPresent(vb.i.NormalKind) && (eb.push("#define HAS_NORMAL_ATTRIBUTE"), Hb.push(vb.i.NormalKind));
        let Vb = !1,
          gb = !1;
        if (Mb) {
          let bb = !1;
          if (Mb.needAlphaTestingForMesh(pb) && Mb.getAlphaTestTexture() && (eb.push("#define ALPHATEST"), eb.push(`#define ALPHATEST_UV${Mb.getAlphaTestTexture().coordinatesIndex+1}`), bb = !0), (Mb.bumpTexture || Mb.normalTexture || Mb.geometryNormalTexture) && yb.e.BumpTextureEnabled) {
            const wb = Mb.bumpTexture || Mb.normalTexture || Mb.geometryNormalTexture;
            eb.push("#define BUMP"), eb.push(`#define BUMP_UV${wb.coordinatesIndex+1}`), bb = !0
          }
          if (this._enableReflectivity) {
            let wb = !1;
            if ("PBRMetallicRoughnessMaterial" === Mb.getClassName()) Mb.metallicRoughnessTexture && (eb.push("#define ORMTEXTURE"), eb.push(`#define REFLECTIVITY_UV${Mb.metallicRoughnessTexture.coordinatesIndex+1}`), eb.push("#define METALLICWORKFLOW"), bb = !0, wb = !0), null != Mb.metallic && (eb.push("#define METALLIC"), eb.push("#define METALLICWORKFLOW"), wb = !0), null != Mb.roughness && (eb.push("#define ROUGHNESS"), eb.push("#define METALLICWORKFLOW"), wb = !0), wb && (Mb.baseTexture && (eb.push("#define ALBEDOTEXTURE"), eb.push(`#define ALBEDO_UV${Mb.baseTexture.coordinatesIndex+1}`), Mb.baseTexture.gammaSpace && eb.push("#define GAMMAALBEDO"), bb = !0), Mb.baseColor && eb.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === Mb.getClassName()) Mb.specularGlossinessTexture ? (eb.push("#define SPECULARGLOSSINESSTEXTURE"), eb.push(`#define REFLECTIVITY_UV${Mb.specularGlossinessTexture.coordinatesIndex+1}`), bb = !0, Mb.specularGlossinessTexture.gammaSpace && eb.push("#define GAMMAREFLECTIVITYTEXTURE")) : Mb.specularColor && eb.push("#define REFLECTIVITYCOLOR"), null != Mb.glossiness && eb.push("#define GLOSSINESS");
            else if ("PBRMaterial" === Mb.getClassName()) Mb.metallicTexture && (eb.push("#define ORMTEXTURE"), eb.push(`#define REFLECTIVITY_UV${Mb.metallicTexture.coordinatesIndex+1}`), eb.push("#define METALLICWORKFLOW"), bb = !0, wb = !0), null != Mb.metallic && (eb.push("#define METALLIC"), eb.push("#define METALLICWORKFLOW"), wb = !0), null != Mb.roughness && (eb.push("#define ROUGHNESS"), eb.push("#define METALLICWORKFLOW"), wb = !0), wb ? (Mb.albedoTexture && (eb.push("#define ALBEDOTEXTURE"), eb.push(`#define ALBEDO_UV${Mb.albedoTexture.coordinatesIndex+1}`), Mb.albedoTexture.gammaSpace && eb.push("#define GAMMAALBEDO"), bb = !0), Mb.albedoColor && eb.push("#define ALBEDOCOLOR")) : (Mb.reflectivityTexture ? (eb.push("#define SPECULARGLOSSINESSTEXTURE"), eb.push(`#define REFLECTIVITY_UV${Mb.reflectivityTexture.coordinatesIndex+1}`), Mb.reflectivityTexture.gammaSpace && eb.push("#define GAMMAREFLECTIVITYTEXTURE"), bb = !0) : Mb.reflectivityColor && eb.push("#define REFLECTIVITYCOLOR"), null != Mb.microSurface && eb.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === Mb.getClassName()) Mb.specularTexture && (eb.push("#define REFLECTIVITYTEXTURE"), eb.push(`#define REFLECTIVITY_UV${Mb.specularTexture.coordinatesIndex+1}`), Mb.specularTexture.gammaSpace && eb.push("#define GAMMAREFLECTIVITYTEXTURE"), bb = !0), Mb.specularColor && eb.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === Mb.getClassName()) {
              const wb = Mb;
              eb.push("#define METALLIC"), eb.push("#define ROUGHNESS"), wb._useRoughnessFromMetallicTextureGreen && wb.baseMetalnessTexture ? (eb.push("#define ORMTEXTURE"), eb.push(`#define REFLECTIVITY_UV${wb.baseMetalnessTexture.coordinatesIndex+1}`), bb = !0) : wb.baseMetalnessTexture ? (eb.push("#define METALLIC_TEXTURE"), eb.push(`#define METALLIC_UV${wb.baseMetalnessTexture.coordinatesIndex+1}`), bb = !0) : wb.specularRoughnessTexture && (eb.push("#define ROUGHNESS_TEXTURE"), eb.push(`#define ROUGHNESS_UV${wb.specularRoughnessTexture.coordinatesIndex+1}`), bb = !0), wb.baseColorTexture && (eb.push("#define ALBEDOTEXTURE"), eb.push(`#define ALBEDO_UV${wb.baseColorTexture.coordinatesIndex+1}`), wb.baseColorTexture.gammaSpace && eb.push("#define GAMMAALBEDO"), bb = !0), wb.baseColor && eb.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (eb.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === Mb.getClassName())) {
            const wb = Mb;
            wb.subsurfaceWeight > 0 && wb.subsurfaceWeightTexture && (eb.push("#define SUBSURFACE_WEIGHT"), eb.push(`#define SUBSURFACEWEIGHT_UV${wb.subsurfaceWeightTexture.coordinatesIndex+1}`), bb = !0), wb.transmissionWeight > 0 && wb.transmissionWeightTexture && (eb.push("#define TRANSMISSION_WEIGHT"), eb.push(`#define TRANSMISSIONWEIGHT_UV${wb.transmissionWeightTexture.coordinatesIndex+1}`), bb = !0)
          }
          bb && (eb.push("#define NEED_UV"), pb.isVerticesDataPresent(vb.i.UVKind) && (Hb.push(vb.i.UVKind), eb.push("#define UV1"), Vb = !0), pb.isVerticesDataPresent(vb.i.UV2Kind) && (Hb.push(vb.i.UV2Kind), eb.push("#define UV2"), gb = !0))
        }
        if (this._enableDepth && (eb.push("#define DEPTH"), eb.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (eb.push("#define NORMAL"), eb.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (eb.push("#define POSITION"), eb.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (eb.push("#define VELOCITY"), eb.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(pb) && eb.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (eb.push("#define VELOCITY_LINEAR"), eb.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(pb) && eb.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (eb.push("#define REFLECTIVITY"), eb.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (eb.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), eb.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          eb.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), eb.push("#define IRRADIANCE");
          const bb = this._scene;
          if (bb.environmentTexture) {
            const wb = {};
            let Hb = !1,
              pb = 0;
            "OpenPBRMaterial" !== Mb.getClassName() && "StandardMaterial" !== Mb.getClassName() && "PBRMetallicRoughnessMaterial" !== Mb.getClassName() && "PBRSpecularGlossinessMaterial" !== Mb.getClassName() && "PBRMaterial" !== Mb.getClassName() || (Hb = !!Mb.realtimeFiltering, pb = Mb.realtimeFilteringQuality || 0), (0, Tb.V)(bb, bb.environmentTexture, wb, Hb, pb, !0);
            for (const bb in wb) wb[bb] && eb.push("#define " + bb);
            wb.USEIRRADIANCEMAP || eb.push("#define SPHERICAL_HARMONICS");
            const Vb = bb.postProcessRenderPipelineManager.supportedPipelines.find((bb => "IBLShadowsRenderPipeline" === bb.getClassName()));
            if (Vb) {
              const bb = Vb;
              bb._getAccumulatedTexture() && (eb.push("#define IBL_SHADOW_TEXTURE"), bb.coloredShadows && eb.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (eb.push("#define OBJECT_ID"), eb.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (eb.push("#define MESH_BLEND_TAG"), eb.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && eb.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && eb.push("#define ENCODE_NORMAL"), pb.useBones && pb.computeBonesUsingShaders && pb.skeleton ? (Hb.push(vb.i.MatricesIndicesKind), Hb.push(vb.i.MatricesWeightsKind), pb.numBoneInfluencers > 4 && (Hb.push(vb.i.MatricesIndicesExtraKind), Hb.push(vb.i.MatricesWeightsExtraKind)), eb.push("#define NUM_BONE_INFLUENCERS " + pb.numBoneInfluencers), eb.push("#define BONETEXTURE " + pb.skeleton.isUsingTextureForMatrices), eb.push("#define BonesPerMesh " + (pb.skeleton.bones.length + 1))) : (eb.push("#define NUM_BONE_INFLUENCERS 0"), eb.push("#define BONETEXTURE false"), eb.push("#define BonesPerMesh 0"));
        const lb = pb.morphTargetManager ? (0, Tb.P)(pb.morphTargetManager, eb, Hb, pb, !0, !0, !1, Vb, gb, !1) : 0;
        wb && (eb.push("#define INSTANCES"), (0, Tb.sb)(Hb, this._enableVelocity || this._enableVelocityLinear), bb.getRenderingMesh().hasThinInstances && eb.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? eb.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : eb.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, Iw.j)(Mb, this._scene, eb);
        const Lb = this._scene.DC(),
          Ib = bb._getDrawWrapper(void 0, !0),
          Ob = Ib.defines,
          Ub = eb.join("\n");
        return Ob !== Ub && Ib.setEffect(Lb.createEffect("geometry", {
          attributes: Hb,
          uniformsNames: Qw,
          samplers: vw,
          defines: Ub,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: lb
          },
          shaderLanguage: this.shaderLanguage
        }, Lb), Ub), Ib.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(bb) {
        if (this._enableObjectId && 1 !== bb) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== bb) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = bb
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.DC().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.JE.DC()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.JE.DC().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const bb = [],
          wb = [];
        let Mb = 0;
        return this._enableDepth && (this._depthIndex = Mb, Mb++, bb.push("gBuffer_Depth"), wb.push(this._textureTypesAndFormats[Gw.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = Mb, Mb++, bb.push("gBuffer_Normal"), wb.push(this._textureTypesAndFormats[Gw.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = Mb, Mb++, bb.push("gBuffer_Position"), wb.push(this._textureTypesAndFormats[Gw.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = Mb, Mb++, bb.push("gBuffer_Velocity"), wb.push(this._textureTypesAndFormats[Gw.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = Mb, Mb++, bb.push("gBuffer_VelocityLinear"), wb.push(this._textureTypesAndFormats[Gw.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = Mb, Mb++, bb.push("gBuffer_Reflectivity"), wb.push(this._textureTypesAndFormats[Gw.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = Mb, Mb++, bb.push("gBuffer_ScreenspaceDepth"), wb.push(this._textureTypesAndFormats[Gw.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = Mb, Mb++, bb.push("gBuffer_Irradiance"), wb.push(this._textureTypesAndFormats[Gw.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = Mb, Mb++, bb.push("gBuffer_ObjectId"), wb.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = Mb, Mb++, bb.push("gBuffer_MeshBlendTag"), wb.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [Mb, bb, wb]
      }
      _createRenderTargets() {
        const bb = this._scene.DC(),
          [wb, Mb, eb] = this._assignRenderTargetIndices(),
          Hb = Math.min(bb.getCaps().maxDrawBuffers ?? 1, 8);
        if (bb.getCaps().drawBuffersExtension && wb > Hb) throw new Error(`GeometryBufferRenderer: ${wb} color attachments were requested, but this engine supports at most ${Hb}`);
        let Vb = 0;
        bb._caps.textureFloat && bb._caps.textureFloatLinearFiltering ? Vb = 1 : bb._caps.textureHalfFloat && bb._caps.textureHalfFloatLinearFiltering && (Vb = 2);
        const gb = this._getRenderTargetDimensions(),
          lb = [],
          Lb = [],
          Ib = [];
        for (const pb of eb) pb ? (lb.push(pb.textureType), Lb.push(pb.textureFormat), Ib.push(pb.samplingMode ?? 2)) : (lb.push(Vb), Lb.push(5), Ib.push(2));
        if (this._normalsAreUnsigned = 11 === lb[Gw.NORMAL_TEXTURE_TYPE] || 13 === lb[Gw.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new Aw("gBuffer", gb, wb, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: lb,
            formats: Lb,
            samplingModes: Ib,
            depthTextureFormat: this._depthFormat
          }, Mb.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = cb.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = cb.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const Ob = [!0],
          Ub = [!1],
          tb = [!0];
        for (let pb = 1; pb < wb; ++pb) Ob.push(!0), tb.push(!1), Ub.push(!0);
        const Cb = bb.buildTextureLayout(Ob),
          Eb = bb.buildTextureLayout(Ub),
          Fb = bb.buildTextureLayout(tb);
        this._multiRenderTarget.onClearObservable.add((bb => {
          const wb = this.useSpecificClearForDepthTexture ? Eb : Cb;
          bb.clearAttachments(this._clearColor, wb, !0, !0, !0), this.useSpecificClearForDepthTexture && bb.clearAttachments(this._clearDepthColor, Fb, !0, !1, !1), bb.bindAttachments(Cb)
        })), this._resizeObserver = bb.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const Bb = bb => {
          const wb = bb.getRenderingMesh(),
            Mb = bb.getEffectiveMesh(),
            eb = this._scene,
            Hb = eb.DC(),
            Vb = bb.AC();
          if (!Vb) return;
          if (Mb._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[Mb.uniqueId] && (this._previousTransformationMatrices[Mb.uniqueId] = {
              XO: Nb.b.Identity(),
              viewProjection: eb.getTransformMatrix()
            }, wb.skeleton)) {
            const bb = wb.skeleton.getTransformMatrices(wb);
            this._previousBonesTransformationMatrices[wb.uniqueId] = this._copyBonesTransformationMatrices(bb, new Float32Array(bb.length))
          }
          const gb = wb._getInstancesRenderList(bb._id, !!bb.getReplacementMesh());
          if (gb.mustReturn) return;
          const lb = Hb.getCaps().instancedArrays && (null !== gb.visibleInstances[bb._id] || wb.hasThinInstances),
            Lb = Mb.getWorldMatrix();
          if (this.isReady(bb, lb)) {
            const Ib = bb._getDrawWrapper();
            if (!Ib) return;
            const Ob = Ib.effect;
            let Ub;
            Hb.enableEffect(Ib), lb || wb._bind(bb, Ob, Vb.fillMode), this._useUbo ? ((0, Tb.y)(Ob, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (Ob.setMatrix("viewProjection", eb.getTransformMatrix()), Ob.setMatrix("view", eb.getViewMatrix()), this._scene.bindEyePosition(Ob, "vEyePosition"));
            if (wb._instanceDataStorage.isFrozen || !Vb.backFaceCulling && null === Vb.sideOrientation) Ub = wb._effectiveSideOrientation;
            else {
              const bb = Mb._getWorldMatrixDeterminant();
              Ub = Vb._getEffectiveOrientation(wb), bb < 0 && (Ub = Ub === pb.b.ClockWiseSideOrientation ? pb.b.CounterClockWiseSideOrientation : pb.b.ClockWiseSideOrientation)
            }
            if (Vb._preBind(Ib, Ub), Vb.needAlphaTestingForMesh(Mb)) {
              const bb = Vb.getAlphaTestTexture();
              bb && (Ob.setTexture("diffuseSampler", bb), Ob.setMatrix("diffuseMatrix", bb.getTextureMatrix()), Ob.setFloat("alphaCutOff", Vb.alphaCutOff ?? .4))
            }
            if ((Vb.bumpTexture || Vb.normalTexture || Vb.geometryNormalTexture) && eb.DC().getCaps().standardDerivatives && yb.e.BumpTextureEnabled) {
              const bb = Vb.bumpTexture || Vb.normalTexture || Vb.geometryNormalTexture;
              Ob.setFloat3("vBumpInfos", bb.coordinatesIndex, 1 / bb.level, Vb.parallaxScaleBias), Ob.setMatrix("bumpMatrix", bb.getTextureMatrix()), Ob.setTexture("bumpSampler", bb), Ob.setFloat2("vTangentSpaceParams", Vb.invertNormalMapX ? -1 : 1, Vb.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === Vb.getClassName()) null !== Vb.metallicRoughnessTexture && (Ob.setTexture("reflectivitySampler", Vb.metallicRoughnessTexture), Ob.setMatrix("reflectivityMatrix", Vb.metallicRoughnessTexture.getTextureMatrix())), null !== Vb.metallic && Ob.setFloat("metallic", Vb.metallic), null !== Vb.roughness && Ob.setFloat("glossiness", 1 - Vb.roughness), null !== Vb.baseTexture && (Ob.setTexture("albedoSampler", Vb.baseTexture), Ob.setMatrix("albedoMatrix", Vb.baseTexture.getTextureMatrix())), null !== Vb.baseColor && Ob.setColor3("albedoColor", Vb.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === Vb.getClassName()) null !== Vb.specularGlossinessTexture ? (Ob.setTexture("reflectivitySampler", Vb.specularGlossinessTexture), Ob.setMatrix("reflectivityMatrix", Vb.specularGlossinessTexture.getTextureMatrix())) : null !== Vb.specularColor && Ob.setColor3("reflectivityColor", Vb.specularColor), null !== Vb.glossiness && Ob.setFloat("glossiness", Vb.glossiness);
            else if ("PBRMaterial" === Vb.getClassName()) null !== Vb.metallicTexture && (Ob.setTexture("reflectivitySampler", Vb.metallicTexture), Ob.setMatrix("reflectivityMatrix", Vb.metallicTexture.getTextureMatrix())), null !== Vb.metallic && Ob.setFloat("metallic", Vb.metallic), null !== Vb.roughness && Ob.setFloat("glossiness", 1 - Vb.roughness), null !== Vb.roughness || null !== Vb.metallic || null !== Vb.metallicTexture ? (null !== Vb.albedoTexture && (Ob.setTexture("albedoSampler", Vb.albedoTexture), Ob.setMatrix("albedoMatrix", Vb.albedoTexture.getTextureMatrix())), null !== Vb.albedoColor && Ob.setColor3("albedoColor", Vb.albedoColor)) : (null !== Vb.reflectivityTexture ? (Ob.setTexture("reflectivitySampler", Vb.reflectivityTexture), Ob.setMatrix("reflectivityMatrix", Vb.reflectivityTexture.getTextureMatrix())) : null !== Vb.reflectivityColor && Ob.setColor3("reflectivityColor", Vb.reflectivityColor), null !== Vb.microSurface && Ob.setFloat("glossiness", Vb.microSurface));
            else if ("StandardMaterial" === Vb.getClassName()) null !== Vb.specularTexture && (Ob.setTexture("reflectivitySampler", Vb.specularTexture), Ob.setMatrix("reflectivityMatrix", Vb.specularTexture.getTextureMatrix())), null !== Vb.specularColor && Ob.setColor3("reflectivityColor", Vb.specularColor);
            else if ("OpenPBRMaterial" === Vb.getClassName()) {
              const bb = Vb;
              bb._useRoughnessFromMetallicTextureGreen && bb.baseMetalnessTexture ? (Ob.setTexture("reflectivitySampler", bb.baseMetalnessTexture), Ob.setMatrix("reflectivityMatrix", bb.baseMetalnessTexture.getTextureMatrix())) : bb.baseMetalnessTexture ? (Ob.setTexture("metallicSampler", bb.baseMetalnessTexture), Ob.setMatrix("metallicMatrix", bb.baseMetalnessTexture.getTextureMatrix())) : bb.specularRoughnessTexture && (Ob.setTexture("roughnessSampler", bb.specularRoughnessTexture), Ob.setMatrix("roughnessMatrix", bb.specularRoughnessTexture.getTextureMatrix())), Ob.setFloat("metallic", bb.baseMetalness), Ob.setFloat("glossiness", 1 - bb.specularRoughness), null !== bb.baseColorTexture && (Ob.setTexture("albedoSampler", bb.baseColorTexture), Ob.setMatrix("albedoMatrix", bb.baseColorTexture.getTextureMatrix())), null !== bb.baseColor && Ob.setColor3("albedoColor", bb.baseColor)
            }
            if (this._enableIrradiance && eb.environmentTexture) {
              const bb = eb.environmentTexture,
                wb = eb.postProcessRenderPipelineManager.supportedPipelines.find((bb => "IBLShadowsRenderPipeline" === bb.getClassName()));
              if (wb) {
                const bb = wb._getAccumulatedTexture();
                bb && (Ob.setTexture("iblShadowSampler", bb), Ob.setFloat2("shadowTextureSize", bb.getSize().width, bb.getSize().height))
              }
              if (Ob.setMatrix("reflectionMatrix", bb.getReflectionTextureMatrix()), Ob.setFloat2("vReflectionInfos", bb.level * eb.iblIntensity, 0), Ob.setTexture("reflectionSampler", bb), bb.irradianceTexture && (Ob.setTexture("irradianceSampler", bb.irradianceTexture), bb.irradianceTexture._dominantDirection && Ob.setVector3("vReflectionDominantDirection", bb.irradianceTexture._dominantDirection)), bb.sphericalPolynomial) {
                const wb = bb.sphericalPolynomial;
                if (wb.preScaledHarmonics) {
                  const bb = wb.preScaledHarmonics;
                  Ob.setVector3("vSphericalL00", bb.l00), Ob.setVector3("vSphericalL1_1", bb.l1_1), Ob.setVector3("vSphericalL10", bb.l10), Ob.setVector3("vSphericalL11", bb.l11), Ob.setVector3("vSphericalL2_2", bb.l2_2), Ob.setVector3("vSphericalL2_1", bb.l2_1), Ob.setVector3("vSphericalL20", bb.l20), Ob.setVector3("vSphericalL21", bb.l21), Ob.setVector3("vSphericalL22", bb.l22)
                } else Ob.setFloat3("vSphericalX", wb.x.x, wb.x.y, wb.x.z), Ob.setFloat3("vSphericalY", wb.y.x, wb.y.y, wb.y.z), Ob.setFloat3("vSphericalZ", wb.z.x, wb.z.y, wb.z.z), Ob.setFloat3("vSphericalXX_ZZ", wb.xx.x - wb.zz.x, wb.xx.y - wb.zz.y, wb.xx.z - wb.zz.z), Ob.setFloat3("vSphericalYY_ZZ", wb.yy.x - wb.zz.x, wb.yy.y - wb.zz.y, wb.yy.z - wb.zz.z), Ob.setFloat3("vSphericalZZ", wb.zz.x, wb.zz.y, wb.zz.z), Ob.setFloat3("vSphericalXY", wb.xy.x, wb.xy.y, wb.xy.z), Ob.setFloat3("vSphericalYZ", wb.yz.x, wb.yz.y, wb.yz.z), Ob.setFloat3("vSphericalZX", wb.zx.x, wb.zx.y, wb.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === Vb.getClassName()) {
                const bb = Vb;
                Ob.setFloat("vSubsurfaceWeight", bb.subsurfaceWeight), bb.subsurfaceWeightTexture && (Ob.setTexture("subsurfaceWeightSampler", bb.subsurfaceWeightTexture), Ob.setMatrix("subsurfaceWeightMatrix", bb.subsurfaceWeightTexture.getTextureMatrix())), Ob.setFloat("vTransmissionWeight", bb.transmissionWeight), bb.transmissionWeightTexture && (Ob.setTexture("transmissionWeightSampler", bb.transmissionWeightTexture), Ob.setMatrix("transmissionWeightMatrix", bb.transmissionWeightTexture.getTextureMatrix())), Ob.setFloat("vTransmissionScatterAnisotropy", bb.transmissionScatterAnisotropy), Ob.setFloat("vSubsurfaceScatterAnisotropy", bb.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, Iw.f)(Ob, Vb, this._scene), wb.useBones && wb.computeBonesUsingShaders && wb.skeleton) {
              const bb = wb.skeleton;
              if (bb.isUsingTextureForMatrices && Ob.getUniformIndex("boneTextureInfo") > -1) {
                const Mb = bb.getTransformMatrixTexture(wb);
                Ob.setTexture("boneSampler", Mb), Ob.setFloat2("boneTextureInfo", bb._textureWidth, bb._textureHeight)
              } else Ob.setMatrices("mBones", wb.skeleton.getTransformMatrices(wb));
              (this._enableVelocity || this._enableVelocityLinear) && Ob.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[wb.uniqueId])
            }
            if ((0, Tb.x)(wb, Ob), wb.morphTargetManager && wb.morphTargetManager.isUsingTextureForTargets && wb.morphTargetManager._bind(Ob), (this._enableVelocity || this._enableVelocityLinear) && (Ob.setMatrix("previousWorld", this._previousTransformationMatrices[Mb.uniqueId].XO), Ob.setMatrix("previousViewProjection", this._previousTransformationMatrices[Mb.uniqueId].viewProjection)), this._enableObjectId) {
              let bb = wb.uniqueId;
              if (this.objectIdProvider) bb = (0, tw.g)(wb, this.objectIdProvider);
              else if (bb > 16777215) throw new Error(`Invalid geometry object ID ${bb} for mesh "${wb.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              Ob.setFloat("objectId", bb)
            }
            if (this._enableMeshBlendTag) {
              const bb = this.meshBlendTagProvider ? (0, tw.d)(wb, this.meshBlendTagProvider) : wb.meshBlendingTag;
              Ob.setInt("meshBlendTag", bb)
            }
            lb && wb.hasThinInstances && Ob.setMatrix("world", Lb), wb._processRendering(Mb, bb, Ob, Vb.fillMode, gb, lb, ((bb, wb) => {
              bb || Ob.setMatrix("world", wb)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[Mb.uniqueId].XO = Lb.clone(), this._previousTransformationMatrices[Mb.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), wb.skeleton && this._copyBonesTransformationMatrices(wb.skeleton.getTransformMatrices(wb), this._previousBonesTransformationMatrices[Mb.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (wb, Mb, eb) => {
          if ((eb || 0 === Mb) && wb.oR)
            for (let Hb = 0; Hb < wb.oR.length; ++Hb) {
              const Mb = wb.oR[Hb],
                eb = Mb.AC(),
                pb = Mb.getRenderingMesh();
              if (!eb) continue;
              const Vb = pb._getInstancesRenderList(Mb._id, !!Mb.getReplacementMesh()),
                gb = bb.getCaps().instancedArrays && (null !== Vb.visibleInstances[Mb._id] || pb.hasThinInstances);
              if (!this.isReady(Mb, gb)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (wb, Mb, eb, Hb) => {
          let pb;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.DC().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Hb.length) {
            for (bb.setColorWrite(!1), pb = 0; pb < Hb.length; pb++) Bb(Hb.data[pb]);
            bb.setColorWrite(!0)
          }
          for (pb = 0; pb < wb.length; pb++) Bb(wb.data[pb]);
          for (bb.setDepthWrite(!1), pb = 0; pb < Mb.length; pb++) Bb(Mb.data[pb]);
          if (this.renderTransparentMeshes)
            for (pb = 0; pb < eb.length; pb++) Bb(eb.data[pb]);
          bb.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const bb = this._scene.DC();
        return {
          width: Math.max(1, Math.floor(bb.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(bb.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(bb, wb) {
        for (let Mb = 0; Mb < bb.length; Mb++) wb[Mb] = bb[Mb];
        return wb
      }
    }
    Gw.ForceGLSL = !1, Gw.DEPTH_TEXTURE_TYPE = 0, Gw.NORMAL_TEXTURE_TYPE = 1, Gw.POSITION_TEXTURE_TYPE = 2, Gw.VELOCITY_TEXTURE_TYPE = 3, Gw.REFLECTIVITY_TEXTURE_TYPE = 4, Gw.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, Gw.VELOCITY_LINEAR_TEXTURE_TYPE = 6, Gw.IRRADIANCE_TEXTURE_TYPE = 7, Gw.OBJECT_ID_TEXTURE_TYPE = 8, Gw.MESH_BLEND_TAG_TEXTURE_TYPE = 9, Gw._SceneComponentInitialization = bb => {
      throw (0, Bw.k)("GeometryBufferRendererSceneComponent")
    };
    var qw = Mb(38333);
    const aw = {
      effect: null,
      subMesh: null
    };

    function iw(bb) {
      if ("number" === typeof bb) return 1;
      if (bb instanceof Nb.m) return 2;
      if (bb instanceof Nb.o || bb instanceof ub.e) return 3;
      if (bb instanceof Nb.q || bb instanceof ub.f) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class uw {
      populateVectorFromLinkedProperties(bb) {
        const wb = iw(bb);
        for (const Mb in this.linkedProperties) {
          const bb = this.linkedProperties[Mb],
            eb = bb.numComponents;
          if (wb < eb || bb.targetUniformComponentOffset > wb - eb) return void(1 == eb ? Rb.b.Error(`Float property ${bb.name} has an offset that is too large.`) : Rb.b.Error(`Vector${eb} property ${bb.name} won't fit in Vector${wb} or has an offset that is too large.`));
          "number" === typeof bb.value ? uw._tmpArray[bb.targetUniformComponentOffset] = bb.value : bb.value.toArray(uw._tmpArray, bb.targetUniformComponentOffset)
        }
        bb.dI(uw._tmpArray)
      }
      constructor(bb, wb) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = bb, this.numComponents = wb
      }
    }
    uw._tmpArray = [0, 0, 0, 0];
    class dw {
      constructor(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          pb = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = bb, this.targetUniformName = Mb, this.defaultValue = wb, this.value = wb, this.targetUniformComponentNum = eb, this.targetUniformComponentOffset = Hb, this.requiredDefine = pb
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : iw(this.defaultValue)
      }
    }
    class Pw {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(bb, wb, Mb) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = bb, this.samplerPrefix = wb, this.textureDefine = Mb
      }
    }
    class nw extends((0, Ew.c)((0, Cw.e)(Qb.b))) {}
    class yw extends(function(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(nw)) {}
    class ow extends((0, db.i)(yw)) {
      constructor(bb) {
        super(bb), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class Tw extends((0, Fw.b)(nb.d)) {}
    let kw = (() => {
        var bb, wb, eb, Hb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb, sb, mb, hb, zb, Xb, xb, jb, Yb, Zb, fb, Ab, Sb, Qb, Gb, qb, ab, db, nb, kb, bw, ww, Mw, ew, Hw, pw, Vw, gw, lw, Lw, Cw, Ew, Fw, Bw, sw, mw, hw, zw, Xw, Kw, rw, Rw, Dw, Yw, Zw, fw, Aw, Ww, Jw, Sw, Nw, vw, Qw, qw, iw, nw, yw, kw, bM, wM, MM, eM, HM, pM, VM, gM, lM, LM, IM, OM, UM, tM, CM, EM, FM, BM, sM, mM, hM, zM, XM, xM, jM, KM, rM, RM, DM, cM;
        let YM, ZM, fM, AM, WM, JM, SM, NM, vM, QM, GM, qM, aM, iM, uM, dM, PM, nM, yM, oM, TM, kM, be, we, Me, ee, He, pe, Ve, ge, le, Le, Ie, Oe, Ue, te, Ce, Ee, Fe, Be, se, me, he, ze, Xe, xe, je, Ke, re, Re, De, ce, Ye, Ze, fe, Ae, We, Je, Se, Ne, ve, Qe, Ge, qe, ae, ie, ue, de, Pe, ne, ye, oe, Te, ke, bH, wH, MH, eH, HH, pH, VH, gH, lH, LH, IH, OH, UH, tH, CH, EH, FH, BH, sH, mH, hH, zH, XH, xH, jH, KH, rH, RH, DH, cH, YH, ZH = Tw,
          fH = [],
          AH = [],
          WH = [],
          JH = [],
          SH = [],
          NH = [],
          vH = [],
          QH = [],
          GH = [],
          qH = [],
          aH = [],
          iH = [],
          uH = [],
          dH = [],
          PH = [],
          nH = [],
          yH = [],
          oH = [],
          TH = [],
          kH = [],
          bp = [],
          wp = [],
          Mp = [],
          ep = [],
          Hp = [],
          pp = [],
          Vp = [],
          gp = [],
          lp = [],
          Lp = [],
          Ip = [],
          Op = [],
          Up = [],
          tp = [],
          Cp = [],
          Ep = [],
          Fp = [],
          Bp = [],
          sp = [],
          mp = [],
          hp = [],
          zp = [],
          Xp = [],
          xp = [],
          jp = [],
          Kp = [],
          rp = [],
          Rp = [],
          Dp = [],
          cp = [],
          Yp = [],
          Zp = [],
          fp = [],
          Ap = [],
          Wp = [],
          Jp = [],
          Sp = [],
          Np = [],
          vp = [],
          Qp = [],
          Gp = [],
          qp = [],
          ap = [],
          ip = [],
          dp = [],
          Pp = [],
          np = [],
          yp = [],
          op = [],
          Tp = [],
          kp = [],
          bV = [],
          wV = [],
          MV = [],
          eV = [],
          HV = [],
          pV = [],
          VV = [],
          gV = [],
          lV = [],
          LV = [],
          IV = [],
          OV = [],
          UV = [],
          tV = [],
          CV = [],
          EV = [],
          FV = [],
          BV = [],
          sV = [],
          mV = [],
          hV = [],
          zV = [],
          XV = [],
          xV = [],
          jV = [],
          KV = [],
          rV = [],
          RV = [],
          DV = [],
          cV = [],
          YV = [],
          ZV = [],
          fV = [],
          AV = [],
          WV = [],
          JV = [],
          SV = [],
          NV = [],
          vV = [],
          QV = [],
          GV = [],
          qV = [],
          aV = [],
          iV = [],
          uV = [],
          dV = [],
          PV = [],
          nV = [],
          yV = [],
          oV = [],
          TV = [],
          kV = [],
          bg = [],
          wg = [],
          Mg = [],
          eg = [],
          Hg = [],
          pg = [],
          Vg = [],
          gg = [],
          lg = [],
          Lg = [],
          Ig = [],
          Og = [],
          Ug = [],
          tg = [],
          Cg = [],
          Eg = [],
          Fg = [],
          Bg = [],
          sg = [],
          mg = [],
          hg = [],
          zg = [],
          Xg = [],
          xg = [],
          jg = [],
          Kg = [],
          rg = [],
          Rg = [],
          Dg = [],
          cg = [],
          Yg = [],
          Zg = [],
          fg = [],
          Ag = [],
          Wg = [],
          Jg = [],
          Sg = [],
          Ng = [],
          vg = [],
          Qg = [],
          Gg = [],
          qg = [],
          ag = [],
          ig = [],
          ug = [],
          dg = [],
          Pg = [],
          ng = [],
          yg = [],
          og = [],
          Tg = [],
          kg = [],
          bl = [],
          wl = [],
          Ml = [],
          el = [],
          Hl = [],
          pl = [],
          Vl = [],
          gl = [],
          ll = [],
          Ll = [],
          Il = [],
          Ol = [],
          Ul = [],
          tl = [],
          Cl = [],
          El = [],
          Fl = [],
          Bl = [],
          sl = [],
          ml = [],
          hl = [],
          zl = [],
          Xl = [],
          xl = [],
          jl = [],
          Kl = [],
          rl = [],
          Rl = [],
          Dl = [],
          cl = [];
        return bb = class extends ZH {
          get baseWeight() {
            return (0, Kb.b)(this, wb, "f")
          }
          set baseWeight(bb) {
            (0, Kb.f)(this, wb, bb, "f")
          }
          get baseWeightTexture() {
            return (0, Kb.b)(this, eb, "f")
          }
          set baseWeightTexture(bb) {
            (0, Kb.f)(this, eb, bb, "f")
          }
          get baseColor() {
            return (0, Kb.b)(this, Hb, "f")
          }
          set baseColor(bb) {
            (0, Kb.f)(this, Hb, bb, "f")
          }
          get baseColorTexture() {
            return (0, Kb.b)(this, Vb, "f")
          }
          set baseColorTexture(bb) {
            (0, Kb.f)(this, Vb, bb, "f")
          }
          get baseDiffuseRoughness() {
            return (0, Kb.b)(this, gb, "f")
          }
          set baseDiffuseRoughness(bb) {
            (0, Kb.f)(this, gb, bb, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, Kb.b)(this, lb, "f")
          }
          set baseDiffuseRoughnessTexture(bb) {
            (0, Kb.f)(this, lb, bb, "f")
          }
          get baseMetalness() {
            return (0, Kb.b)(this, Lb, "f")
          }
          set baseMetalness(bb) {
            (0, Kb.f)(this, Lb, bb, "f")
          }
          get baseMetalnessTexture() {
            return (0, Kb.b)(this, Ib, "f")
          }
          set baseMetalnessTexture(bb) {
            (0, Kb.f)(this, Ib, bb, "f")
          }
          get specularWeight() {
            return (0, Kb.b)(this, Ob, "f")
          }
          set specularWeight(bb) {
            (0, Kb.f)(this, Ob, bb, "f")
          }
          get specularWeightTexture() {
            return (0, Kb.b)(this, Ub, "f")
          }
          set specularWeightTexture(bb) {
            (0, Kb.f)(this, Ub, bb, "f")
          }
          get specularColor() {
            return (0, Kb.b)(this, tb, "f")
          }
          set specularColor(bb) {
            (0, Kb.f)(this, tb, bb, "f")
          }
          get specularColorTexture() {
            return (0, Kb.b)(this, Cb, "f")
          }
          set specularColorTexture(bb) {
            (0, Kb.f)(this, Cb, bb, "f")
          }
          get specularRoughness() {
            return (0, Kb.b)(this, Eb, "f")
          }
          set specularRoughness(bb) {
            (0, Kb.f)(this, Eb, bb, "f")
          }
          get specularRoughnessTexture() {
            return (0, Kb.b)(this, Fb, "f")
          }
          set specularRoughnessTexture(bb) {
            (0, Kb.f)(this, Fb, bb, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, Kb.b)(this, Bb, "f")
          }
          set specularRoughnessAnisotropy(bb) {
            (0, Kb.f)(this, Bb, bb, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, Kb.b)(this, sb, "f")
          }
          set specularRoughnessAnisotropyTexture(bb) {
            (0, Kb.f)(this, sb, bb, "f")
          }
          get specularIor() {
            return (0, Kb.b)(this, mb, "f")
          }
          set specularIor(bb) {
            (0, Kb.f)(this, mb, bb, "f")
          }
          get transmissionWeight() {
            return (0, Kb.b)(this, hb, "f")
          }
          set transmissionWeight(bb) {
            (0, Kb.f)(this, hb, bb, "f")
          }
          get transmissionWeightTexture() {
            return (0, Kb.b)(this, zb, "f")
          }
          set transmissionWeightTexture(bb) {
            (0, Kb.f)(this, zb, bb, "f")
          }
          get transmissionColor() {
            return (0, Kb.b)(this, Xb, "f")
          }
          set transmissionColor(bb) {
            (0, Kb.f)(this, Xb, bb, "f")
          }
          get transmissionColorTexture() {
            return (0, Kb.b)(this, xb, "f")
          }
          set transmissionColorTexture(bb) {
            (0, Kb.f)(this, xb, bb, "f")
          }
          get transmissionDepth() {
            return (0, Kb.b)(this, jb, "f")
          }
          set transmissionDepth(bb) {
            (0, Kb.f)(this, jb, bb, "f")
          }
          get transmissionDepthTexture() {
            return (0, Kb.b)(this, Yb, "f")
          }
          set transmissionDepthTexture(bb) {
            (0, Kb.f)(this, Yb, bb, "f")
          }
          get transmissionScatter() {
            return (0, Kb.b)(this, Zb, "f")
          }
          set transmissionScatter(bb) {
            (0, Kb.f)(this, Zb, bb, "f")
          }
          get transmissionScatterTexture() {
            return (0, Kb.b)(this, fb, "f")
          }
          set transmissionScatterTexture(bb) {
            (0, Kb.f)(this, fb, bb, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, Kb.b)(this, Ab, "f")
          }
          set transmissionScatterAnisotropy(bb) {
            (0, Kb.f)(this, Ab, bb, "f")
          }
          get transmissionDispersionScale() {
            return (0, Kb.b)(this, Sb, "f")
          }
          set transmissionDispersionScale(bb) {
            (0, Kb.f)(this, Sb, bb, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, Kb.b)(this, Qb, "f")
          }
          set transmissionDispersionScaleTexture(bb) {
            (0, Kb.f)(this, Qb, bb, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, Kb.b)(this, Gb, "f")
          }
          set transmissionDispersionAbbeNumber(bb) {
            (0, Kb.f)(this, Gb, bb, "f")
          }
          get subsurfaceWeight() {
            return (0, Kb.b)(this, qb, "f")
          }
          set subsurfaceWeight(bb) {
            (0, Kb.f)(this, qb, bb, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, Kb.b)(this, ab, "f")
          }
          set subsurfaceWeightTexture(bb) {
            (0, Kb.f)(this, ab, bb, "f")
          }
          get subsurfaceColor() {
            return (0, Kb.b)(this, db, "f")
          }
          set subsurfaceColor(bb) {
            (0, Kb.f)(this, db, bb, "f")
          }
          get subsurfaceColorTexture() {
            return (0, Kb.b)(this, nb, "f")
          }
          set subsurfaceColorTexture(bb) {
            (0, Kb.f)(this, nb, bb, "f")
          }
          get subsurfaceRadius() {
            return (0, Kb.b)(this, kb, "f")
          }
          set subsurfaceRadius(bb) {
            (0, Kb.f)(this, kb, bb, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, Kb.b)(this, bw, "f")
          }
          set subsurfaceRadiusScale(bb) {
            (0, Kb.f)(this, bw, bb, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, Kb.b)(this, ww, "f")
          }
          set subsurfaceRadiusScaleTexture(bb) {
            (0, Kb.f)(this, ww, bb, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, Kb.b)(this, Mw, "f")
          }
          set subsurfaceScatterAnisotropy(bb) {
            (0, Kb.f)(this, Mw, bb, "f")
          }
          get coatWeight() {
            return (0, Kb.b)(this, ew, "f")
          }
          set coatWeight(bb) {
            (0, Kb.f)(this, ew, bb, "f")
          }
          get coatWeightTexture() {
            return (0, Kb.b)(this, Hw, "f")
          }
          set coatWeightTexture(bb) {
            (0, Kb.f)(this, Hw, bb, "f")
          }
          get coatColor() {
            return (0, Kb.b)(this, pw, "f")
          }
          set coatColor(bb) {
            (0, Kb.f)(this, pw, bb, "f")
          }
          get coatColorTexture() {
            return (0, Kb.b)(this, Vw, "f")
          }
          set coatColorTexture(bb) {
            (0, Kb.f)(this, Vw, bb, "f")
          }
          get coatRoughness() {
            return (0, Kb.b)(this, gw, "f")
          }
          set coatRoughness(bb) {
            (0, Kb.f)(this, gw, bb, "f")
          }
          get coatRoughnessTexture() {
            return (0, Kb.b)(this, lw, "f")
          }
          set coatRoughnessTexture(bb) {
            (0, Kb.f)(this, lw, bb, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, Kb.b)(this, Lw, "f")
          }
          set coatRoughnessAnisotropy(bb) {
            (0, Kb.f)(this, Lw, bb, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, Kb.b)(this, Cw, "f")
          }
          set coatRoughnessAnisotropyTexture(bb) {
            (0, Kb.f)(this, Cw, bb, "f")
          }
          get coatIor() {
            return (0, Kb.b)(this, Ew, "f")
          }
          set coatIor(bb) {
            (0, Kb.f)(this, Ew, bb, "f")
          }
          get coatDarkening() {
            return (0, Kb.b)(this, Fw, "f")
          }
          set coatDarkening(bb) {
            (0, Kb.f)(this, Fw, bb, "f")
          }
          get coatDarkeningTexture() {
            return (0, Kb.b)(this, Bw, "f")
          }
          set coatDarkeningTexture(bb) {
            (0, Kb.f)(this, Bw, bb, "f")
          }
          get fuzzWeight() {
            return (0, Kb.b)(this, sw, "f")
          }
          set fuzzWeight(bb) {
            (0, Kb.f)(this, sw, bb, "f")
          }
          get fuzzWeightTexture() {
            return (0, Kb.b)(this, mw, "f")
          }
          set fuzzWeightTexture(bb) {
            (0, Kb.f)(this, mw, bb, "f")
          }
          get fuzzColor() {
            return (0, Kb.b)(this, hw, "f")
          }
          set fuzzColor(bb) {
            (0, Kb.f)(this, hw, bb, "f")
          }
          get fuzzColorTexture() {
            return (0, Kb.b)(this, zw, "f")
          }
          set fuzzColorTexture(bb) {
            (0, Kb.f)(this, zw, bb, "f")
          }
          get fuzzRoughness() {
            return (0, Kb.b)(this, Xw, "f")
          }
          set fuzzRoughness(bb) {
            (0, Kb.f)(this, Xw, bb, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, Kb.b)(this, Kw, "f")
          }
          set fuzzRoughnessTexture(bb) {
            (0, Kb.f)(this, Kw, bb, "f")
          }
          get geometryThinWalled() {
            return (0, Kb.b)(this, rw, "f")
          }
          set geometryThinWalled(bb) {
            (0, Kb.f)(this, rw, bb, "f")
          }
          get geometryNormalTexture() {
            return (0, Kb.b)(this, Rw, "f")
          }
          set geometryNormalTexture(bb) {
            (0, Kb.f)(this, Rw, bb, "f")
          }
          get geometryTangent() {
            return (0, Kb.b)(this, Dw, "f")
          }
          set geometryTangent(bb) {
            (0, Kb.f)(this, Dw, bb, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(bb) {
            this.geometryTangent = new Nb.m(Math.cos(bb), Math.sin(bb))
          }
          get geometryTangentTexture() {
            return (0, Kb.b)(this, Yw, "f")
          }
          set geometryTangentTexture(bb) {
            (0, Kb.f)(this, Yw, bb, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, Kb.b)(this, Zw, "f")
          }
          set geometryCoatNormalTexture(bb) {
            (0, Kb.f)(this, Zw, bb, "f")
          }
          get geometryCoatTangent() {
            return (0, Kb.b)(this, fw, "f")
          }
          set geometryCoatTangent(bb) {
            (0, Kb.f)(this, fw, bb, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(bb) {
            this.geometryCoatTangent = new Nb.m(Math.cos(bb), Math.sin(bb))
          }
          get geometryCoatTangentTexture() {
            return (0, Kb.b)(this, Aw, "f")
          }
          set geometryCoatTangentTexture(bb) {
            (0, Kb.f)(this, Aw, bb, "f")
          }
          get geometryOpacity() {
            return (0, Kb.b)(this, Ww, "f")
          }
          set geometryOpacity(bb) {
            (0, Kb.f)(this, Ww, bb, "f")
          }
          get geometryOpacityTexture() {
            return (0, Kb.b)(this, Jw, "f")
          }
          set geometryOpacityTexture(bb) {
            (0, Kb.f)(this, Jw, bb, "f")
          }
          get geometryThickness() {
            return (0, Kb.b)(this, Sw, "f")
          }
          set geometryThickness(bb) {
            (0, Kb.f)(this, Sw, bb, "f")
          }
          get geometryThicknessTexture() {
            return (0, Kb.b)(this, Nw, "f")
          }
          set geometryThicknessTexture(bb) {
            (0, Kb.f)(this, Nw, bb, "f")
          }
          get emissionLuminance() {
            return (0, Kb.b)(this, vw, "f")
          }
          set emissionLuminance(bb) {
            (0, Kb.f)(this, vw, bb, "f")
          }
          get emissionColor() {
            return (0, Kb.b)(this, Qw, "f")
          }
          set emissionColor(bb) {
            (0, Kb.f)(this, Qw, bb, "f")
          }
          get emissionColorTexture() {
            return (0, Kb.b)(this, qw, "f")
          }
          set emissionColorTexture(bb) {
            (0, Kb.f)(this, qw, bb, "f")
          }
          get thinFilmWeight() {
            return (0, Kb.b)(this, iw, "f")
          }
          set thinFilmWeight(bb) {
            (0, Kb.f)(this, iw, bb, "f")
          }
          get thinFilmWeightTexture() {
            return (0, Kb.b)(this, nw, "f")
          }
          set thinFilmWeightTexture(bb) {
            (0, Kb.f)(this, nw, bb, "f")
          }
          get thinFilmThickness() {
            return (0, Kb.b)(this, yw, "f")
          }
          set thinFilmThickness(bb) {
            (0, Kb.f)(this, yw, bb, "f")
          }
          get thinFilmThicknessMin() {
            return (0, Kb.b)(this, kw, "f")
          }
          set thinFilmThicknessMin(bb) {
            (0, Kb.f)(this, kw, bb, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, Kb.b)(this, bM, "f")
          }
          set thinFilmThicknessTexture(bb) {
            (0, Kb.f)(this, bM, bb, "f")
          }
          get thinFilmIor() {
            return (0, Kb.b)(this, wM, "f")
          }
          set thinFilmIor(bb) {
            (0, Kb.f)(this, wM, bb, "f")
          }
          get ambientOcclusionTexture() {
            return (0, Kb.b)(this, MM, "f")
          }
          set ambientOcclusionTexture(bb) {
            (0, Kb.f)(this, MM, bb, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(bb) {
            this._sssQuality !== bb && (this._sssQuality = bb, this.eeb(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(bb) {
            this._sssIrradianceTexture !== bb && (this._sssIrradianceTexture = bb, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(bb) {
            this._sssDepthTexture !== bb && (this._sssDepthTexture = bb, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, Kb.b)(this, eM, "f")
          }
          set directIntensity(bb) {
            (0, Kb.f)(this, eM, bb, "f")
          }
          get environmentIntensity() {
            return (0, Kb.b)(this, HM, "f")
          }
          set environmentIntensity(bb) {
            (0, Kb.f)(this, HM, bb, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, Kb.b)(this, pM, "f")
          }
          set useSpecularWeightFromTextureAlpha(bb) {
            (0, Kb.f)(this, pM, bb, "f")
          }
          get forceAlphaTest() {
            return (0, Kb.b)(this, VM, "f")
          }
          set forceAlphaTest(bb) {
            (0, Kb.f)(this, VM, bb, "f")
          }
          get alphaCutOff() {
            return (0, Kb.b)(this, gM, "f")
          }
          set alphaCutOff(bb) {
            (0, Kb.f)(this, gM, bb, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, Kb.b)(this, lM, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(bb) {
            (0, Kb.f)(this, lM, bb, "f")
          }
          get useAmbientInGrayScale() {
            return (0, Kb.b)(this, LM, "f")
          }
          set useAmbientInGrayScale(bb) {
            (0, Kb.f)(this, LM, bb, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(ub.e.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === pb.b.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(bb) {
            bb !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? pb.b.LIGHTFALLOFF_PHYSICAL : pb.b.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === pb.b.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(bb) {
            bb !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? pb.b.LIGHTFALLOFF_GLTF : pb.b.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, Kb.b)(this, IM, "f")
          }
          set useObjectSpaceNormalMap(bb) {
            (0, Kb.f)(this, IM, bb, "f")
          }
          get useParallax() {
            return (0, Kb.b)(this, OM, "f")
          }
          set useParallax(bb) {
            (0, Kb.f)(this, OM, bb, "f")
          }
          get useParallaxOcclusion() {
            return (0, Kb.b)(this, UM, "f")
          }
          set useParallaxOcclusion(bb) {
            (0, Kb.f)(this, UM, bb, "f")
          }
          get parallaxScaleBias() {
            return (0, Kb.b)(this, tM, "f")
          }
          set parallaxScaleBias(bb) {
            (0, Kb.f)(this, tM, bb, "f")
          }
          get disableLighting() {
            return (0, Kb.b)(this, CM, "f")
          }
          set disableLighting(bb) {
            (0, Kb.f)(this, CM, bb, "f")
          }
          get forceIrradianceInFragment() {
            return (0, Kb.b)(this, EM, "f")
          }
          set forceIrradianceInFragment(bb) {
            (0, Kb.f)(this, EM, bb, "f")
          }
          get maxSimultaneousLights() {
            return (0, Kb.b)(this, FM, "f")
          }
          set maxSimultaneousLights(bb) {
            (0, Kb.f)(this, FM, bb, "f")
          }
          get invertNormalMapX() {
            return (0, Kb.b)(this, BM, "f")
          }
          set invertNormalMapX(bb) {
            (0, Kb.f)(this, BM, bb, "f")
          }
          get invertNormalMapY() {
            return (0, Kb.b)(this, sM, "f")
          }
          set invertNormalMapY(bb) {
            (0, Kb.f)(this, sM, bb, "f")
          }
          get twoSidedLighting() {
            return (0, Kb.b)(this, mM, "f")
          }
          set twoSidedLighting(bb) {
            (0, Kb.f)(this, mM, bb, "f")
          }
          get useAlphaFresnel() {
            return (0, Kb.b)(this, hM, "f")
          }
          set useAlphaFresnel(bb) {
            (0, Kb.f)(this, hM, bb, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, Kb.b)(this, zM, "f")
          }
          set useLinearAlphaFresnel(bb) {
            (0, Kb.f)(this, zM, bb, "f")
          }
          get environmentBRDFTexture() {
            return (0, Kb.b)(this, XM, "f")
          }
          set environmentBRDFTexture(bb) {
            (0, Kb.f)(this, XM, bb, "f")
          }
          get forceNormalForward() {
            return (0, Kb.b)(this, xM, "f")
          }
          set forceNormalForward(bb) {
            (0, Kb.f)(this, xM, bb, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, Kb.b)(this, jM, "f")
          }
          set enableSpecularAntiAliasing(bb) {
            (0, Kb.f)(this, jM, bb, "f")
          }
          get useHorizonOcclusion() {
            return (0, Kb.b)(this, KM, "f")
          }
          set useHorizonOcclusion(bb) {
            (0, Kb.f)(this, KM, bb, "f")
          }
          get useRadianceOcclusion() {
            return (0, Kb.b)(this, rM, "f")
          }
          set useRadianceOcclusion(bb) {
            (0, Kb.f)(this, rM, bb, "f")
          }
          get unlit() {
            return (0, Kb.b)(this, RM, "f")
          }
          set unlit(bb) {
            (0, Kb.f)(this, RM, bb, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Kb.b)(this, DM, "f")
          }
          set applyDecalMapAfterDetailMap(bb) {
            (0, Kb.f)(this, DM, bb, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(bb) {
            this._backgroundRefractionTexture = bb, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(bb) {
            this._refractionHighQualityBlur !== bb && (this._refractionHighQualityBlur = bb, this.eeb(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(bb) {
            this._realTimeFiltering = bb, this.eeb(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(bb) {
            this._realTimeFilteringQuality = bb, this.eeb(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(bb) {
            this._fuzzSampleNumber = bb, this.eeb(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, Kb.b)(this, cM, "f")
          }
          set debugMode(bb) {
            (0, Kb.f)(this, cM, bb, "f")
          }
          constructor(Mb, rb) {
            super(Mb, rb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || bb.ForceGLSL), wb.set(this, ((0, Kb.m)(this, fH), (0, Kb.m)(this, AH, void 0))), this._baseWeight = ((0, Kb.m)(this, WH), new dw("base_weight", 1, "vBaseWeight", 1)), eb.set(this, (0, Kb.m)(this, JH, void 0)), this._baseWeightTexture = ((0, Kb.m)(this, SH), new Pw("base_weight", "baseWeight", "BASE_WEIGHT")), Hb.set(this, (0, Kb.m)(this, NH, void 0)), this._baseColor = ((0, Kb.m)(this, vH), new dw("base_color", ub.e.White(), "vBaseColor", 4)), Vb.set(this, (0, Kb.m)(this, QH, void 0)), this._baseColorTexture = ((0, Kb.m)(this, GH), new Pw("base_color", "baseColor", "BASE_COLOR")), gb.set(this, (0, Kb.m)(this, qH, void 0)), this._baseDiffuseRoughness = ((0, Kb.m)(this, aH), new dw("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), lb.set(this, (0, Kb.m)(this, iH, void 0)), this._baseDiffuseRoughnessTexture = ((0, Kb.m)(this, uH), new Pw("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), Lb.set(this, (0, Kb.m)(this, dH, void 0)), this._baseMetalness = ((0, Kb.m)(this, PH), new dw("base_metalness", 0, "vReflectanceInfo", 4, 0)), Ib.set(this, (0, Kb.m)(this, nH, void 0)), this._baseMetalnessTexture = ((0, Kb.m)(this, yH), new Pw("base_metalness", "baseMetalness", "BASE_METALNESS")), Ob.set(this, (0, Kb.m)(this, oH, void 0)), this._specularWeight = ((0, Kb.m)(this, TH), new dw("specular_weight", 1, "vReflectanceInfo", 4, 3)), Ub.set(this, (0, Kb.m)(this, kH, void 0)), this._specularWeightTexture = ((0, Kb.m)(this, bp), new Pw("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), tb.set(this, (0, Kb.m)(this, wp, void 0)), this._specularColor = ((0, Kb.m)(this, Mp), new dw("specular_color", ub.e.White(), "vSpecularColor", 4)), Cb.set(this, (0, Kb.m)(this, ep, void 0)), this._specularColorTexture = ((0, Kb.m)(this, Hp), new Pw("specular_color", "specularColor", "SPECULAR_COLOR")), Eb.set(this, (0, Kb.m)(this, pp, void 0)), this._specularRoughness = ((0, Kb.m)(this, Vp), new dw("specular_roughness", .3, "vReflectanceInfo", 4, 1)), Fb.set(this, (0, Kb.m)(this, gp, void 0)), this._specularRoughnessTexture = ((0, Kb.m)(this, lp), new Pw("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), Bb.set(this, (0, Kb.m)(this, Lp, void 0)), this._specularRoughnessAnisotropy = ((0, Kb.m)(this, Ip), new dw("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), sb.set(this, (0, Kb.m)(this, Op, void 0)), this._specularRoughnessAnisotropyTexture = ((0, Kb.m)(this, Up), new Pw("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), mb.set(this, (0, Kb.m)(this, tp, void 0)), this._specularIor = ((0, Kb.m)(this, Cp), new dw("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), hb.set(this, (0, Kb.m)(this, Ep, void 0)), this._transmissionWeight = ((0, Kb.m)(this, Fp), new dw("transmission_weight", 0, "vTransmissionWeight", 1)), zb.set(this, (0, Kb.m)(this, Bp, void 0)), this._transmissionWeightTexture = ((0, Kb.m)(this, sp), new Pw("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), Xb.set(this, (0, Kb.m)(this, mp, void 0)), this._transmissionColor = ((0, Kb.m)(this, hp), new dw("transmission_color", ub.e.White(), "vTransmissionColor", 3, 0)), xb.set(this, (0, Kb.m)(this, zp, void 0)), this._transmissionColorTexture = ((0, Kb.m)(this, Xp), new Pw("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), jb.set(this, (0, Kb.m)(this, xp, void 0)), this._transmissionDepth = ((0, Kb.m)(this, jp), new dw("transmission_depth", 0, "vTransmissionDepth", 1, 0)), Yb.set(this, (0, Kb.m)(this, Kp, void 0)), this._transmissionDepthTexture = ((0, Kb.m)(this, rp), new Pw("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Zb.set(this, (0, Kb.m)(this, Rp, void 0)), this._transmissionScatter = ((0, Kb.m)(this, Dp), new dw("transmission_scatter", ub.e.Black(), "vTransmissionScatter", 3, 0)), fb.set(this, (0, Kb.m)(this, cp, void 0)), this._transmissionScatterTexture = ((0, Kb.m)(this, Yp), new Pw("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Ab.set(this, (0, Kb.m)(this, Zp, void 0)), this._transmissionScatterAnisotropy = ((0, Kb.m)(this, fp), new dw("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), Sb.set(this, (0, Kb.m)(this, Ap, void 0)), this._transmissionDispersionScale = ((0, Kb.m)(this, Wp), new dw("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), Qb.set(this, (0, Kb.m)(this, Jp, void 0)), this._transmissionDispersionScaleTexture = ((0, Kb.m)(this, Sp), new Pw("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), Gb.set(this, (0, Kb.m)(this, Np, void 0)), this._transmissionDispersionAbbeNumber = ((0, Kb.m)(this, vp), new dw("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), qb.set(this, (0, Kb.m)(this, Qp, void 0)), this._subsurfaceWeight = ((0, Kb.m)(this, Gp), new dw("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), ab.set(this, (0, Kb.m)(this, qp, void 0)), this._subsurfaceWeightTexture = ((0, Kb.m)(this, ap), new Pw("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), db.set(this, (0, Kb.m)(this, ip, void 0)), this._subsurfaceColor = ((0, Kb.m)(this, dp), new dw("subsurface_color", new ub.e(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), nb.set(this, (0, Kb.m)(this, Pp, void 0)), this._subsurfaceColorTexture = ((0, Kb.m)(this, np), new Pw("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), kb.set(this, (0, Kb.m)(this, yp, void 0)), this._subsurfaceRadius = ((0, Kb.m)(this, op), new dw("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), bw.set(this, (0, Kb.m)(this, Tp, void 0)), this._subsurfaceRadiusScale = ((0, Kb.m)(this, kp), new dw("subsurface_radius_scale", new ub.e(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), ww.set(this, (0, Kb.m)(this, bV, void 0)), this._subsurfaceRadiusScaleTexture = ((0, Kb.m)(this, wV), new Pw("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), Mw.set(this, (0, Kb.m)(this, MV, void 0)), this._subsurfaceScatterAnisotropy = ((0, Kb.m)(this, eV), new dw("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), ew.set(this, (0, Kb.m)(this, HV, void 0)), this._coatWeight = ((0, Kb.m)(this, pV), new dw("coat_weight", 0, "vCoatWeight", 1, 0)), Hw.set(this, (0, Kb.m)(this, VV, void 0)), this._coatWeightTexture = ((0, Kb.m)(this, gV), new Pw("coat_weight", "coatWeight", "COAT_WEIGHT")), pw.set(this, (0, Kb.m)(this, lV, void 0)), this._coatColor = ((0, Kb.m)(this, LV), new dw("coat_color", ub.e.White(), "vCoatColor", 3, 0)), Vw.set(this, (0, Kb.m)(this, IV, void 0)), this._coatColorTexture = ((0, Kb.m)(this, OV), new Pw("coat_color", "coatColor", "COAT_COLOR")), gw.set(this, (0, Kb.m)(this, UV, void 0)), this._coatRoughness = ((0, Kb.m)(this, tV), new dw("coat_roughness", 0, "vCoatRoughness", 1, 0)), lw.set(this, (0, Kb.m)(this, CV, void 0)), this._coatRoughnessTexture = ((0, Kb.m)(this, EV), new Pw("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Lw.set(this, (0, Kb.m)(this, FV, void 0)), this._coatRoughnessAnisotropy = ((0, Kb.m)(this, BV), new dw("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), Cw.set(this, (0, Kb.m)(this, sV, void 0)), this._coatRoughnessAnisotropyTexture = ((0, Kb.m)(this, mV), new Pw("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), Ew.set(this, (0, Kb.m)(this, hV, void 0)), this._coatIor = ((0, Kb.m)(this, zV), new dw("coat_ior", 1.5, "vCoatIor", 1, 0)), Fw.set(this, (0, Kb.m)(this, XV, void 0)), this._coatDarkening = ((0, Kb.m)(this, xV), new dw("coat_darkening", 1, "vCoatDarkening", 1, 0)), Bw.set(this, (0, Kb.m)(this, jV, void 0)), this._coatDarkeningTexture = ((0, Kb.m)(this, KV), new Pw("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, sw.set(this, (0, Kb.m)(this, rV, void 0)), this._fuzzWeight = ((0, Kb.m)(this, RV), new dw("fuzz_weight", 0, "vFuzzWeight", 1, 0)), mw.set(this, (0, Kb.m)(this, DV, void 0)), this._fuzzWeightTexture = ((0, Kb.m)(this, cV), new Pw("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), hw.set(this, (0, Kb.m)(this, YV, void 0)), this._fuzzColor = ((0, Kb.m)(this, ZV), new dw("fuzz_color", ub.e.White(), "vFuzzColor", 3, 0)), zw.set(this, (0, Kb.m)(this, fV, void 0)), this._fuzzColorTexture = ((0, Kb.m)(this, AV), new Pw("fuzz_color", "fuzzColor", "FUZZ_COLOR")), Xw.set(this, (0, Kb.m)(this, WV, void 0)), this._fuzzRoughness = ((0, Kb.m)(this, JV), new dw("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), Kw.set(this, (0, Kb.m)(this, SV, void 0)), this._fuzzRoughnessTexture = ((0, Kb.m)(this, NV), new Pw("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), rw.set(this, (0, Kb.m)(this, vV, void 0)), this._geometryThinWalled = ((0, Kb.m)(this, QV), new dw("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Rw.set(this, (0, Kb.m)(this, GV, void 0)), this._geometryNormalTexture = ((0, Kb.m)(this, qV), new Pw("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), Dw.set(this, (0, Kb.m)(this, aV, void 0)), this._geometryTangent = ((0, Kb.m)(this, iV), new dw("geometry_tangent", new Nb.m(1, 0), "vSpecularAnisotropy", 3, 0)), Yw.set(this, (0, Kb.m)(this, uV, void 0)), this._geometryTangentTexture = ((0, Kb.m)(this, dV), new Pw("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), Zw.set(this, (0, Kb.m)(this, PV, void 0)), this._geometryCoatNormalTexture = ((0, Kb.m)(this, nV), new Pw("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), fw.set(this, (0, Kb.m)(this, yV, void 0)), this._geometryCoatTangent = ((0, Kb.m)(this, oV), new dw("geometry_coat_tangent", new Nb.m(1, 0), "vGeometryCoatTangent", 2, 0)), Aw.set(this, (0, Kb.m)(this, TV, void 0)), this._geometryCoatTangentTexture = ((0, Kb.m)(this, kV), new Pw("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), Ww.set(this, (0, Kb.m)(this, bg, void 0)), this._geometryOpacity = ((0, Kb.m)(this, wg), new dw("geometry_opacity", 1, "vBaseColor", 4, 3)), Jw.set(this, (0, Kb.m)(this, Mg, void 0)), this._geometryOpacityTexture = ((0, Kb.m)(this, eg), new Pw("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Sw.set(this, (0, Kb.m)(this, Hg, void 0)), this._geometryThickness = ((0, Kb.m)(this, pg), new dw("geometry_thickness", 0, "vGeometryThickness", 1, 0)), Nw.set(this, (0, Kb.m)(this, Vg, void 0)), this._geometryThicknessTexture = ((0, Kb.m)(this, gg), new Pw("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), vw.set(this, (0, Kb.m)(this, lg, void 0)), this._emissionLuminance = ((0, Kb.m)(this, Lg), new dw("emission_luminance", 1, "vLightingIntensity", 4, 1)), Qw.set(this, (0, Kb.m)(this, Ig, void 0)), this._emissionColor = ((0, Kb.m)(this, Og), new dw("emission_color", ub.e.Black(), "vEmissionColor", 3)), qw.set(this, (0, Kb.m)(this, Ug, void 0)), this._emissionColorTexture = ((0, Kb.m)(this, tg), new Pw("emission_color", "emissionColor", "EMISSION_COLOR")), iw.set(this, (0, Kb.m)(this, Cg, void 0)), this._thinFilmWeight = ((0, Kb.m)(this, Eg), new dw("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), nw.set(this, (0, Kb.m)(this, Fg, void 0)), this._thinFilmWeightTexture = ((0, Kb.m)(this, Bg), new Pw("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), yw.set(this, (0, Kb.m)(this, sg, void 0)), this._thinFilmThickness = ((0, Kb.m)(this, mg), new dw("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), kw.set(this, (0, Kb.m)(this, hg, void 0)), this._thinFilmThicknessMin = ((0, Kb.m)(this, zg), new dw("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), bM.set(this, (0, Kb.m)(this, Xg, void 0)), this._thinFilmThicknessTexture = ((0, Kb.m)(this, xg), new Pw("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), wM.set(this, (0, Kb.m)(this, jg, void 0)), this._thinFilmIor = ((0, Kb.m)(this, Kg), new dw("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), MM.set(this, (0, Kb.m)(this, rg, void 0)), this._ambientOcclusionTexture = ((0, Kb.m)(this, Rg), new Pw("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = bb.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, eM.set(this, (0, Kb.m)(this, Dg, 1)), HM.set(this, ((0, Kb.m)(this, cg), (0, Kb.m)(this, Yg, 1))), pM.set(this, ((0, Kb.m)(this, Zg), (0, Kb.m)(this, fg, !1))), VM.set(this, ((0, Kb.m)(this, Ag), (0, Kb.m)(this, Wg, !1))), gM.set(this, ((0, Kb.m)(this, Jg), (0, Kb.m)(this, Sg, .4))), lM.set(this, ((0, Kb.m)(this, Ng), (0, Kb.m)(this, vg, !1))), LM.set(this, ((0, Kb.m)(this, Qg), (0, Kb.m)(this, Gg, !1))), IM.set(this, ((0, Kb.m)(this, qg), (0, Kb.m)(this, ag, !1))), OM.set(this, ((0, Kb.m)(this, ig), (0, Kb.m)(this, ug, !1))), UM.set(this, ((0, Kb.m)(this, dg), (0, Kb.m)(this, Pg, !1))), tM.set(this, ((0, Kb.m)(this, ng), (0, Kb.m)(this, yg, .05))), CM.set(this, ((0, Kb.m)(this, og), (0, Kb.m)(this, Tg, !1))), EM.set(this, ((0, Kb.m)(this, kg), (0, Kb.m)(this, bl, !1))), FM.set(this, ((0, Kb.m)(this, wl), (0, Kb.m)(this, Ml, 4))), BM.set(this, ((0, Kb.m)(this, el), (0, Kb.m)(this, Hl, !1))), sM.set(this, ((0, Kb.m)(this, pl), (0, Kb.m)(this, Vl, !1))), mM.set(this, ((0, Kb.m)(this, gl), (0, Kb.m)(this, ll, !1))), hM.set(this, ((0, Kb.m)(this, Ll), (0, Kb.m)(this, Il, !1))), zM.set(this, ((0, Kb.m)(this, Ol), (0, Kb.m)(this, Ul, !1))), XM.set(this, ((0, Kb.m)(this, tl), (0, Kb.m)(this, Cl, null))), xM.set(this, ((0, Kb.m)(this, El), (0, Kb.m)(this, Fl, !1))), jM.set(this, ((0, Kb.m)(this, Bl), (0, Kb.m)(this, sl, !1))), KM.set(this, ((0, Kb.m)(this, ml), (0, Kb.m)(this, hl, !0))), rM.set(this, ((0, Kb.m)(this, zl), (0, Kb.m)(this, Xl, !0))), RM.set(this, ((0, Kb.m)(this, xl), (0, Kb.m)(this, jl, !1))), DM.set(this, ((0, Kb.m)(this, Kl), (0, Kb.m)(this, rl, !1))), this._lightingInfos = ((0, Kb.m)(this, Rl), new Nb.q(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = pb.b.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Db.h(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, cM.set(this, (0, Kb.m)(this, Dl, 0)), this.debugLimit = ((0, Kb.m)(this, cl), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = pb.b.MATERIAL_OPAQUE, this.RJ() && !this.RJ()?.DC().isWebGPU && this.RJ().DC().HE < 2 && Rb.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), bb._noiseTextures[this.RJ().uniqueId] || (bb._noiseTextures[this.RJ().uniqueId] = new cb.f(jw.e.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.RJ(), !1, !0, 1), this.RJ().vJ.addOnce((() => {
              bb._noiseTextures[this.RJ().uniqueId]?.dispose(), delete bb._noiseTextures[this.RJ().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), yb.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), yb.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Jb(this.RJ()), this._environmentFuzzBRDFTexture = Wb(this.RJ()), this.prePassConfiguration = new ib.c, this._propertyList = {};
            for (const bb of Object.getOwnPropertyNames(this)) {
              const wb = this[bb];
              wb instanceof dw && (this._propertyList[bb] = wb)
            }
            Object.keys(this._propertyList).forEach((bb => {
              const wb = this._propertyList[bb];
              let Mb = this._uniformsList[wb.targetUniformName];
              Mb ? Mb.numComponents !== wb.targetUniformComponentNum ? Rb.b.Error(`Uniform ${wb.targetUniformName} already exists of size ${Mb.numComponents}, but trying to set it to ${wb.targetUniformComponentNum}.`) : Mb.requiredDefine !== wb.requiredDefine && (Mb.requiredDefine = void 0) : (Mb = new uw(wb.targetUniformName, wb.targetUniformComponentNum), Mb.requiredDefine = wb.requiredDefine, this._uniformsList[wb.targetUniformName] = Mb), "" === Mb.firstLinkedKey && (Mb.firstLinkedKey = wb.name), Mb.linkedProperties[wb.name] = wb
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const bb of Object.getOwnPropertyNames(this)) {
              const wb = this[bb];
              wb instanceof Pw && (this._samplersList[bb] = wb)
            }
            for (const bb in this._samplersList) {
              const wb = this._samplersList[bb].textureDefine;
              this._samplerDefines[wb] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[wb + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[wb + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(yb.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(yb.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(bb) {
            this._transparencyMode !== bb && (this._transparencyMode = bb, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== pb.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(bb) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(bb)
          }
          clone(wb) {
            let Mb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Hb = xw.d.Clone((() => new bb(wb, this.RJ())), this, {
              cloneTexturesOnlyOnce: Mb
            });
            return Hb.id = wb, Hb.name = wb, this.stencil.copyTo(Hb.stencil), this._clonePlugins(Hb, eb), Hb
          }
          serialize() {
            const bb = super.serialize();
            return bb.customType = "BABYLON.OpenPBRMaterial", bb
          }
          static Parse(wb, Mb, eb) {
            const Hb = xw.d.Parse((() => new bb(wb.name, Mb)), wb, Mb, eb);
            return wb.stencil && Hb.stencil.parse(wb.stencil, Mb, eb), pb.b._ParsePlugins(wb, Hb, Mb, eb), Hb
          }
          forceCompilation(bb, wb, Mb) {
            const eb = {
              clipPlane: !1,
              useInstances: !1,
              ...Mb
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const Mb = new ow({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Hb = this._prepareEffect(bb, bb, Mb, void 0, void 0, eb.useInstances, eb.clipPlane);
              this._onEffectCreatedObservable && (aw.effect = Hb, aw.subMesh = null, this._onEffectCreatedObservable.notifyObservers(aw)), Hb.isReady() ? wb && wb(this) : Hb.onCompileObservable.add((() => {
                wb && wb(this)
              }))
            })()
          }
          isReadyForSubMesh(wb, Mb, eb) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Hb = Mb._drawWrapper;
            if (Hb.effect && this.isFrozen && Hb._wasPreviouslyReady && Hb._wasPreviouslyUsingInstances === eb) return !0;
            Mb.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Mb.materialDefines = new ow({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const pb = Mb.materialDefines;
            if (this._isReadyForSubMesh(Mb)) return !0;
            const Vb = this.RJ(),
              gb = Vb.DC();
            if (pb._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Vb.texturesEnabled)) {
              for (const bb in this._samplersList) {
                const wb = this._samplersList[bb];
                if (wb.value && !wb.value.isReadyOrNotBlocking()) return !1
              }
              const wb = this._getRadianceTexture();
              if (wb && yb.e.ReflectionTextureEnabled) {
                if (!wb.isReadyOrNotBlocking()) return !1;
                if (wb.irradianceTexture) {
                  if (!wb.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!wb.sphericalPolynomial && wb.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && yb.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && yb.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && yb.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (bb._noiseTextures[Vb.uniqueId] && !bb._noiseTextures[Vb.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = pb, this._eventInfo.subMesh = Mb, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (pb._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (pb.AREALIGHTUSED)
              for (let bb = 0; bb < wb.lightSources.length; bb++)
                if (!wb.lightSources[bb]._isReady()) return !1;
            if (gb.getCaps().standardDerivatives || wb.isVerticesDataPresent(vb.i.NormalKind) || (wb.createNormals(!0), Rb.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + wb.name)), !(0, Tb.c)(Vb, wb, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const lb = Mb.effect,
              Lb = pb._areLightsDisposed,
              Ib = this._prepareEffect(wb, Mb.getRenderingMesh(), pb, this.onCompiled, this.onError, eb, null);
            let Ob = !1;
            if (Ib)
              if (this._onEffectCreatedObservable && (aw.effect = Ib, aw.subMesh = Mb, this._onEffectCreatedObservable.notifyObservers(aw)), this.allowShaderHotSwapping && lb && !Ib.isReady()) {
                if (pb.markAsUnprocessed(), Ob = this.isFrozen, Lb) return pb._areLightsDisposed = !0, !1
              } else Vb.resetCachedMaterial(), Mb.setEffect(Ib, pb, this._materialContext);
            return !(!Mb.effect || !Mb.effect.isReady()) && (pb._renderId = Vb.getRenderId(), Hb._wasPreviouslyReady = !Ob, Hb._wasPreviouslyUsingInstances = !!eb, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const bb = this._uniformBuffer;
            bb.addUniform("vTangentSpaceParams", 2), bb.addUniform("vLightingIntensity", 4), bb.addUniform("pointSize", 1), bb.addUniform("vDebugMode", 2), bb.addUniform("renderTargetSize", 2), bb.addUniform("cameraInfo", 4), bb.addUniform("vTextureRepetitionHexTilingParams", 4), bb.addUniform("backgroundRefractionMatrix", 16), bb.addUniform("vBackgroundRefractionInfos", 3), (0, Tb.mb)(bb, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((wb => {
              bb.addUniform(wb.name, wb.numComponents)
            })), Object.values(this._samplersList).forEach((wb => {
              bb.addUniform(wb.samplerInfoName, 2), bb.addUniform(wb.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(bb, wb, Mb, eb) {
            if (0 === this.geometryThickness) bb.updateFloat("vGeometryThickness", 0);
            else {
              eb.getRenderingMesh().getWorldMatrix().decompose(Nb.j.YC[0]);
              const wb = Math.max(Math.abs(Nb.j.YC[0].x), Math.abs(Nb.j.YC[0].y), Math.abs(Nb.j.YC[0].z));
              bb.updateFloat("vGeometryThickness", this.geometryThickness * wb)
            }
          }
          bindForSubMesh(wb, Mb, eb) {
            const Hb = this.RJ(),
              pb = eb.materialDefines;
            if (!pb) return;
            const Vb = eb.effect;
            if (!Vb) return;
            this._activeEffect = Vb, Mb.getMeshUniformBuffer().bindToEffect(Vb, "Mesh"), Mb.transferToEffect(wb);
            const gb = Hb.DC();
            this._uniformBuffer.bindToEffect(Vb, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Hb, Mb, wb, this.isFrozen), tw.b.Bind(gb.currentRenderPassId, this._activeEffect, Mb, wb, this);
            const lb = Hb.activeCamera;
            lb ? this._uniformBuffer.updateFloat4("cameraInfo", lb.minZ, lb.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Lb = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Lb[0], Lb[1], Lb[2], Lb[3]), this._eventInfo.subMesh = eb, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), pb.OBJECTSPACE_NORMALMAP && (wb.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Ib = this._mustRebind(Hb, Vb, eb, Mb.visibility),
              Ob = gb._features.needToAlwaysBindUniformBuffers;
            (0, Tb.g)(Mb, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Ow.c)(this._activeEffect, this._vertexPullingMetadata);
            const Ub = this._uniformBuffer;
            if (Ib) {
              this.bindViewProjection(Vb);
              const wb = this._getRadianceTexture();
              if (!Ub.useUbo || !this.isFrozen || !Ub.isSync || eb._drawWrapper._forceRebindOnNextCall) {
                if (Hb.texturesEnabled) {
                  for (const bb in this._samplersList) {
                    const wb = this._samplersList[bb];
                    wb.value && (Ub.updateFloat2(wb.samplerInfoName, wb.value.coordinatesIndex, wb.value.level), (0, Tb.C)(wb.value, Ub, wb.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Hb._mirroredCameraPosition ? Ub.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Ub.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Tb.n)(Hb, pb, Ub, ub.e.White(), wb, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && Ub.updateFloat("pointSize", this.pointSize);
                const bb = this._uniformsArray;
                for (let wb = 0, Mb = bb.length; wb < Mb; wb++) {
                  const Mb = bb[wb];
                  (void 0 === Mb.requiredDefine || pb[Mb.requiredDefine]) && (4 === Mb.numComponents ? (Mb.populateVectorFromLinkedProperties(Nb.j.Vector4[0]), Ub.updateVector4(Mb.name, Nb.j.Vector4[0])) : 3 === Mb.numComponents ? (Mb.populateVectorFromLinkedProperties(Nb.j.YC[0]), Ub.updateVector3(Mb.name, Nb.j.YC[0])) : 2 === Mb.numComponents ? (Mb.populateVectorFromLinkedProperties(Nb.j.Vector2[0]), Ub.updateFloat2(Mb.name, Nb.j.Vector2[0].x, Nb.j.Vector2[0].y)) : 1 === Mb.numComponents && Ub.updateFloat(Mb.name, Mb.linkedProperties[Mb.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Hb.environmentIntensity, this._lightingInfos.w = 1, Ub.updateVector4("vLightingIntensity", this._lightingInfos), Ub.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Hb.texturesEnabled) {
                for (const bb in this._samplersList) {
                  const wb = this._samplersList[bb];
                  wb.value && Ub.setTexture(wb.samplerName, wb.value)
                }
                if ((0, Tb.q)(Hb, pb, Ub, wb, this.realTimeFiltering), pb.ENVIRONMENTBRDF && Ub.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), pb.FUZZENVIRONMENTBRDF && Ub.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), pb.REFRACTED_BACKGROUND && (Ub.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), Ub.kbb("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Nb.j.YC[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), Ub.updateVector3("vBackgroundRefractionInfos", Nb.j.YC[1])), (pb.ANISOTROPIC || pb.FUZZ || pb.REFRACTED_BACKGROUND || pb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Ub.setTexture("blueNoiseSampler", bb._noiseTextures[this.RJ().uniqueId]), pb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const bb = this.sssIrradianceTexture.getSize().width,
                    wb = this.sssIrradianceTexture.getSize().height;
                  Ub.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), Ub.setTexture("sceneDepthSampler", this.sssDepthTexture), Ub.updateFloat2("renderTargetSize", bb, wb)
                }
              }
              this.RJ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Mb) && this.RJ().depthPeelingRenderer.bind(Vb), this._eventInfo.subMesh = eb, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Iw.f)(this._activeEffect, this, Hb), this.bindEyePosition(Vb)
            } else Ob && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Hb, Hb.DC(), eb), !Ib && this.isFrozen && !Ob || !Hb.lightsEnabled || this._disableLighting || (0, Tb.s)(Hb, Mb, this._activeEffect, pb, this._maxSimultaneousLights), !Ib && this.isFrozen || (this.bindView(Vb), (0, Tb.j)(Hb, Mb, this._activeEffect, !0), pb.NUM_MORPH_INFLUENCERS && (0, Tb.x)(Mb, this._activeEffect), pb.BAKED_VERTEX_ANIMATION_TEXTURE && Mb.bakedVertexAnimationManager?.bind(Vb, pb.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Tb.v)(pb, this._activeEffect, Hb)), this._afterBind(Mb, this._activeEffect, eb), Ub.update()
          }
          getAnimatables() {
            const bb = super.getAnimatables();
            for (const wb in this._samplersList) {
              const Mb = this._samplersList[wb];
              Mb.value && Mb.value.animations && Mb.value.animations.length > 0 && bb.push(Mb.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && bb.push(this._radianceTexture), bb
          }
          getActiveTextures() {
            const bb = super.getActiveTextures();
            for (const wb in this._samplersList) {
              const Mb = this._samplersList[wb];
              Mb.value && bb.push(Mb.value)
            }
            return this._radianceTexture && bb.push(this._radianceTexture), bb
          }
          hasTexture(bb) {
            if (super.hasTexture(bb)) return !0;
            for (const wb in this._samplersList) {
              if (this._samplersList[wb].value === bb) return !0
            }
            return this._radianceTexture === bb
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(bb, wb) {
            if (this._breakShaderLoadedCheck = !0, wb) {
              this._environmentBRDFTexture && this.RJ().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.RJ().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const bb in this._samplersList) {
                const wb = this._samplersList[bb];
                wb.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(bb, wb)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.RJ().environmentTexture
          }
          _prepareEffect(wb, Mb, eb) {
            let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              gb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(wb, Mb, eb, Vb, gb), !eb.isDirty) return null;
            eb.markAsProcessed();
            const lb = this.RJ().DC(),
              Lb = new ob.d;
            let Ib = 0;
            eb.USESPHERICALINVERTEX && Lb.addFallback(Ib++, "USESPHERICALINVERTEX"), eb.FOG && Lb.addFallback(Ib, "FOG"), eb.SPECULARAA && Lb.addFallback(Ib, "SPECULARAA"), eb.POINTSIZE && Lb.addFallback(Ib, "POINTSIZE"), eb.LOGARITHMICDEPTH && Lb.addFallback(Ib, "LOGARITHMICDEPTH"), eb.PARALLAX && Lb.addFallback(Ib, "PARALLAX"), eb.PARALLAX_RHS && Lb.addFallback(Ib, "PARALLAX_RHS"), eb.PARALLAXOCCLUSION && Lb.addFallback(Ib++, "PARALLAXOCCLUSION"), eb.ENVIRONMENTBRDF && Lb.addFallback(Ib++, "ENVIRONMENTBRDF"), eb.TANGENT && Lb.addFallback(Ib++, "TANGENT"), Ib = (0, Tb.G)(eb, Lb, this._maxSimultaneousLights, Ib), eb.SPECULARTERM && Lb.addFallback(Ib++, "SPECULARTERM"), eb.USESPHERICALFROMREFLECTIONMAP && Lb.addFallback(Ib++, "USESPHERICALFROMREFLECTIONMAP"), eb.USEIRRADIANCEMAP && Lb.addFallback(Ib++, "USEIRRADIANCEMAP"), eb.NORMAL && Lb.addFallback(Ib++, "NORMAL"), eb.VERTEXCOLOR && Lb.addFallback(Ib++, "VERTEXCOLOR"), eb.MORPHTARGETS && Lb.addFallback(Ib++, "MORPHTARGETS"), eb.MULTIVIEW && Lb.addFallback(0, "MULTIVIEW");
            const Ob = [vb.i.PositionKind];
            eb.NORMAL && Ob.push(vb.i.NormalKind), eb.TANGENT && Ob.push(vb.i.TangentKind);
            for (let bb = 1; bb <= 6; ++bb) eb["UV" + bb] && Ob.push(`uv${1===bb?"":bb}`);
            eb.VERTEXCOLOR && Ob.push(vb.i.ColorKind), (0, Tb.I)(Ob, wb, eb, Lb), (0, Tb.J)(Ob, eb), (0, Tb.N)(Ob, wb, eb), (0, Tb.H)(Ob, wb, eb);
            let Ub = "openpbr";
            const tb = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const bb in this._uniformsList) tb.push(bb);
            const Cb = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            eb.FUZZENVIRONMENTBRDF && Cb.push("environmentFuzzBrdfSampler"), eb.REFRACTED_BACKGROUND && Cb.push("backgroundRefractionSampler"), (eb.ANISOTROPIC || eb.FUZZ || eb.REFRACTED_BACKGROUND || eb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Cb.push("blueNoiseSampler"), eb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (Cb.push("sceneIrradianceSampler"), Cb.push("sceneDepthSampler"));
            for (const bb in this._samplersList) {
              const wb = this._samplersList[bb];
              Cb.push(wb.samplerName), tb.push(wb.samplerInfoName), tb.push(wb.samplerMatrixName)
            }(0, Tb.nb)(tb, Cb, !0);
            const Eb = ["Material", "Scene", "Mesh"],
              Fb = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: eb.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = Lb, this._eventInfo.fallbackRank = Ib, this._eventInfo.defines = eb, this._eventInfo.uniforms = tb, this._eventInfo.attributes = Ob, this._eventInfo.samplers = Cb, this._eventInfo.uniformBuffersNames = Eb, this._eventInfo.customCode = void 0, this._eventInfo.mesh = wb, this._eventInfo.indexParameters = Fb, this._callbackPluginEventGeneric(128, this._eventInfo), tw.b.AddUniformsAndSamplers(tb, Cb), ib.c.AddUniforms(tb), ib.c.AddSamplers(Cb), (0, Iw.d)(tb), this._useVertexPulling) {
              const bb = Mb?.geometry;
              bb && (this._vertexPullingMetadata = (0, Ow.e)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, wb) => {
                tb.push(`vp_${wb}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            Pb.e && (Pb.e.PrepareUniforms(tb, eb), Pb.e.PrepareSamplers(Cb, eb)), (0, Tb.ob)({
              uniformsNames: tb,
              uniformBuffersNames: Eb,
              samplers: Cb,
              defines: eb,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const Bb = {};
            this.customShaderNameResolve && (Ub = this.customShaderNameResolve(Ub, tb, Eb, Cb, eb, Ob, Bb));
            const sb = eb.toString(),
              mb = lb.createEffect(Ub, {
                attributes: Ob,
                uniformsNames: tb,
                uniformBuffersNames: Eb,
                samplers: Cb,
                defines: sb,
                fallbacks: Lb,
                onCompiled: Hb,
                onError: pb,
                indexParameters: Fb,
                processFinalCode: Bb.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: eb.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, lb);
            return this._eventInfo.customCode = void 0, mb
          }
          _prepareDefines(wb, Mb, eb) {
            let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Vb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const gb = Mb.hasThinInstances,
              lb = this.RJ(),
              Lb = lb.DC();
            (0, Tb.Z)(lb, wb, eb, !0, this._maxSimultaneousLights, this._disableLighting), eb._needNormals = !0, (0, Tb.eb)(lb, eb);
            const Ib = this.needAlphaBlendingForMesh(wb) && this.RJ().useOrderIndependentTransparency;
            if ((0, Tb.jb)(lb, eb, this.canRenderToMRT && !Ib), (0, Tb.ib)(lb, eb, Ib), tw.b.PrepareDefines(Lb.currentRenderPassId, wb, eb), eb._areTexturesDirty) {
              eb._needUVs = !1;
              for (let bb = 1; bb <= 6; ++bb) eb["MAINUV" + bb] = !1;
              if (lb.texturesEnabled) {
                for (const Mb in this._samplersList) {
                  const bb = this._samplersList[Mb];
                  bb.value ? ((0, Tb.$)(bb.value, eb, bb.textureDefine), eb[bb.textureDefine + "_GAMMA"] = bb.value.gammaSpace) : eb[bb.textureDefine] = !1
                }
                const bb = this._getRadianceTexture(),
                  wb = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Lb.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, Tb.V)(lb, bb, eb, this.realTimeFiltering, this.realTimeFilteringQuality, !wb), this._baseMetalnessTexture && (eb.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), eb.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, eb.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, eb.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, eb.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, eb.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, eb.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, eb.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, eb.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, eb.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, eb.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, eb.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && yb.e.DiffuseTextureEnabled ? (eb.PARALLAX = !0, eb.PARALLAX_RHS = lb.useRightHandedSystem, eb.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : eb.PARALLAX = !1, eb.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (eb.PARALLAX = !1, eb.PARALLAX_RHS = !1, eb.PARALLAXOCCLUSION = !1, eb.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && yb.e.ReflectionTextureEnabled ? (eb.ENVIRONMENTBRDF = !0, eb.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (eb.ENVIRONMENTBRDF = !1, eb.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? eb.FUZZENVIRONMENTBRDF = !0 : eb.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  eb.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && yb.e.RefractionTextureEnabled, eb.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, eb.REFRACTED_LIGHTS = !0;
                  const bb = this._getRadianceTexture();
                  bb ? (eb.REFRACTED_ENVIRONMENT = yb.e.RefractionTextureEnabled, eb.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.RJ().useRightHandedSystem ? !bb.invertZ : bb.invertZ, eb.REFRACTED_ENVIRONMENT_LOCAL_CUBE = bb.isCube && bb.boundingBoxSize) : eb.REFRACTED_ENVIRONMENT = !1
                } else eb.REFRACTED_BACKGROUND = !1, eb.REFRACTED_LIGHTS = !1, eb.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? eb.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : eb.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === pb.b.LIGHTFALLOFF_STANDARD ? (eb.USEPHYSICALLIGHTFALLOFF = !1, eb.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === pb.b.LIGHTFALLOFF_GLTF ? (eb.USEPHYSICALLIGHTFALLOFF = !1, eb.USEGLTFLIGHTFALLOFF = !0) : (eb.USEPHYSICALLIGHTFALLOFF = !0, eb.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? eb.TWOSIDEDLIGHTING = !0 : eb.TWOSIDEDLIGHTING = !1, eb.MIRRORED = !!lb._mirroredCameraPosition, eb.SPECULARAA = Lb.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(eb._areTexturesDirty || eb._areMiscDirty) && (eb.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, eb.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, eb.ALPHABLEND = this.needAlphaBlendingForMesh(wb)), eb._areTexturesDirty && (eb.TEXTURE_REPETITION_MODE = Lb.version > 1 || Lb.isWebGPU ? this.textureRepetitionMode : 0), eb._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(eb), eb.FORCENORMALFORWARD = this._forceNormalForward, eb.RADIANCEOCCLUSION = this._useRadianceOcclusion, eb.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && bb._noiseTextures[lb.uniqueId] && yb.e.ReflectionTextureEnabled ? (eb.ANISOTROPIC = !0, wb.isVerticesDataPresent(vb.i.TangentKind) || (eb._needUVs = !0, eb.MAINUV1 = !0), this._useGltfStyleAnisotropy && (eb.USE_GLTF_STYLE_ANISOTROPY = !0), eb.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, eb.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (eb.ANISOTROPIC = !1, eb.USE_GLTF_STYLE_ANISOTROPY = !1, eb.ANISOTROPIC_BASE = !1, eb.ANISOTROPIC_COAT = !1), eb.THIN_FILM = this.thinFilmWeight > 0, eb.IRIDESCENCE = this.thinFilmWeight > 0, eb.DISPERSION = this.transmissionDispersionScale > 0, eb.SCATTERING = this.hasScattering;
            if (eb.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, eb.TRANSMISSION_SLAB = this.transmissionWeight > 0, eb.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, eb.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !eb.PREPASS && (eb.SUBSURFACE_SLAB || eb.TRANSMISSION_SLAB_VOLUME)) {
              let bb = !1;
              if (!this.sssIrradianceTexture && lb.geometryBufferRenderer) {
                const wb = lb.geometryBufferRenderer.getTextureIndex(Gw.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = lb.geometryBufferRenderer.getGBuffer().textures[wb], bb = !0
              }
              if (!this.sssDepthTexture && lb.geometryBufferRenderer) {
                const wb = lb.geometryBufferRenderer.getTextureIndex(Gw.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = lb.geometryBufferRenderer.getGBuffer().textures[wb], bb = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (eb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, bb && (eb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            eb.FUZZ = this.fuzzWeight > 0 && yb.e.ReflectionTextureEnabled, eb.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, eb.FUZZ ? (wb.isVerticesDataPresent(vb.i.TangentKind) || (eb._needUVs = !0, eb.MAINUV1 = !0), this._environmentFuzzBRDFTexture = Wb(this.RJ()), eb.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, eb.FUZZENVIRONMENTBRDF = !1, eb.FUZZ_IBL_SAMPLES = 0), eb._areMiscDirty && ((0, Tb.bb)(wb, lb, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(wb), eb, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Mb, this._isVertexOutputInvariant), eb.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !wb.isVerticesDataPresent(vb.i.NormalKind), eb.DEBUGMODE = this._debugMode), (0, Tb.U)(lb, Lb, this, eb, !!Hb, Vb, gb), this._eventInfo.defines = eb, this._eventInfo.mesh = wb, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Tb.Q)(wb, eb, !0, !0, !0, this._transparencyMode !== pb.b.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, wb = new WeakMap, eb = new WeakMap, Hb = new WeakMap, Vb = new WeakMap, gb = new WeakMap, lb = new WeakMap, Lb = new WeakMap, Ib = new WeakMap, Ob = new WeakMap, Ub = new WeakMap, tb = new WeakMap, Cb = new WeakMap, Eb = new WeakMap, Fb = new WeakMap, Bb = new WeakMap, sb = new WeakMap, mb = new WeakMap, hb = new WeakMap, zb = new WeakMap, Xb = new WeakMap, xb = new WeakMap, jb = new WeakMap, Yb = new WeakMap, Zb = new WeakMap, fb = new WeakMap, Ab = new WeakMap, Sb = new WeakMap, Qb = new WeakMap, Gb = new WeakMap, qb = new WeakMap, ab = new WeakMap, db = new WeakMap, nb = new WeakMap, kb = new WeakMap, bw = new WeakMap, ww = new WeakMap, Mw = new WeakMap, ew = new WeakMap, Hw = new WeakMap, pw = new WeakMap, Vw = new WeakMap, gw = new WeakMap, lw = new WeakMap, Lw = new WeakMap, Cw = new WeakMap, Ew = new WeakMap, Fw = new WeakMap, Bw = new WeakMap, sw = new WeakMap, mw = new WeakMap, hw = new WeakMap, zw = new WeakMap, Xw = new WeakMap, Kw = new WeakMap, rw = new WeakMap, Rw = new WeakMap, Dw = new WeakMap, Yw = new WeakMap, Zw = new WeakMap, fw = new WeakMap, Aw = new WeakMap, Ww = new WeakMap, Jw = new WeakMap, Sw = new WeakMap, Nw = new WeakMap, vw = new WeakMap, Qw = new WeakMap, qw = new WeakMap, iw = new WeakMap, nw = new WeakMap, yw = new WeakMap, kw = new WeakMap, bM = new WeakMap, wM = new WeakMap, MM = new WeakMap, eM = new WeakMap, HM = new WeakMap, pM = new WeakMap, VM = new WeakMap, gM = new WeakMap, lM = new WeakMap, LM = new WeakMap, IM = new WeakMap, OM = new WeakMap, UM = new WeakMap, tM = new WeakMap, CM = new WeakMap, EM = new WeakMap, FM = new WeakMap, BM = new WeakMap, sM = new WeakMap, mM = new WeakMap, hM = new WeakMap, zM = new WeakMap, XM = new WeakMap, xM = new WeakMap, jM = new WeakMap, KM = new WeakMap, rM = new WeakMap, RM = new WeakMap, DM = new WeakMap, cM = new WeakMap, (() => {
          const wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZH[Symbol.metadata] ?? null) : void 0;
          YM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], ZM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], fM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], AM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], WM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], JM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], SM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], NM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], vM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], QM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], GM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], qM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], aM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], iM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], uM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], dM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], PM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], nM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], yM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], oM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], TM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], kM = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], be = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], we = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Me = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], ee = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], He = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], pe = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Ve = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], ge = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], le = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Le = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Ie = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Oe = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Ue = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], te = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Ce = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Ee = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Fe = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Be = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], se = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], me = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], he = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], ze = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Xe = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], xe = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], je = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Ke = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], re = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Re = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], De = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], ce = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Ye = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Ze = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], fe = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Ae = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], We = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Je = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Se = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Ne = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], ve = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Qe = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Ge = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], qe = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], ae = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], ie = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], ue = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], de = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Pe = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], ne = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], ye = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], oe = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], Te = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], ke = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], bH = [(0, rb.c)("_markAllSubMeshesAsTexturesDirty")], wH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], MH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], eH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], HH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], pH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], VH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], gH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], lH = [(0, rb.E)()], LH = [(0, rb.E)()], IH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], OH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], UH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], tH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], CH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsLightsDirty")], EH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], FH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsLightsDirty")], BH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], sH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], mH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], hH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], zH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], XH = [(0, rb.d)("_markAllSubMeshesAsTexturesDirty")], xH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], jH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], KH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], rH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], RH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], DH = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], cH = [(0, rb.d)("_markAllSubMeshesAsMiscDirty")], YH = [(0, rb.E)()], (0, Kb.i)(bb, null, YM, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseWeight" in bb,
              get: bb => bb.baseWeight,
              set: (bb, wb) => {
                bb.baseWeight = wb
              }
            },
            metadata: wb
          }, AH, WH), (0, Kb.i)(bb, null, ZM, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseWeightTexture" in bb,
              get: bb => bb.baseWeightTexture,
              set: (bb, wb) => {
                bb.baseWeightTexture = wb
              }
            },
            metadata: wb
          }, JH, SH), (0, Kb.i)(bb, null, fM, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseColor" in bb,
              get: bb => bb.baseColor,
              set: (bb, wb) => {
                bb.baseColor = wb
              }
            },
            metadata: wb
          }, NH, vH), (0, Kb.i)(bb, null, AM, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseColorTexture" in bb,
              get: bb => bb.baseColorTexture,
              set: (bb, wb) => {
                bb.baseColorTexture = wb
              }
            },
            metadata: wb
          }, QH, GH), (0, Kb.i)(bb, null, WM, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseDiffuseRoughness" in bb,
              get: bb => bb.baseDiffuseRoughness,
              set: (bb, wb) => {
                bb.baseDiffuseRoughness = wb
              }
            },
            metadata: wb
          }, qH, aH), (0, Kb.i)(bb, null, JM, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseDiffuseRoughnessTexture" in bb,
              get: bb => bb.baseDiffuseRoughnessTexture,
              set: (bb, wb) => {
                bb.baseDiffuseRoughnessTexture = wb
              }
            },
            metadata: wb
          }, iH, uH), (0, Kb.i)(bb, null, SM, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseMetalness" in bb,
              get: bb => bb.baseMetalness,
              set: (bb, wb) => {
                bb.baseMetalness = wb
              }
            },
            metadata: wb
          }, dH, PH), (0, Kb.i)(bb, null, NM, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseMetalnessTexture" in bb,
              get: bb => bb.baseMetalnessTexture,
              set: (bb, wb) => {
                bb.baseMetalnessTexture = wb
              }
            },
            metadata: wb
          }, nH, yH), (0, Kb.i)(bb, null, vM, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularWeight" in bb,
              get: bb => bb.specularWeight,
              set: (bb, wb) => {
                bb.specularWeight = wb
              }
            },
            metadata: wb
          }, oH, TH), (0, Kb.i)(bb, null, QM, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularWeightTexture" in bb,
              get: bb => bb.specularWeightTexture,
              set: (bb, wb) => {
                bb.specularWeightTexture = wb
              }
            },
            metadata: wb
          }, kH, bp), (0, Kb.i)(bb, null, GM, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularColor" in bb,
              get: bb => bb.specularColor,
              set: (bb, wb) => {
                bb.specularColor = wb
              }
            },
            metadata: wb
          }, wp, Mp), (0, Kb.i)(bb, null, qM, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularColorTexture" in bb,
              get: bb => bb.specularColorTexture,
              set: (bb, wb) => {
                bb.specularColorTexture = wb
              }
            },
            metadata: wb
          }, ep, Hp), (0, Kb.i)(bb, null, aM, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughness" in bb,
              get: bb => bb.specularRoughness,
              set: (bb, wb) => {
                bb.specularRoughness = wb
              }
            },
            metadata: wb
          }, pp, Vp), (0, Kb.i)(bb, null, iM, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughnessTexture" in bb,
              get: bb => bb.specularRoughnessTexture,
              set: (bb, wb) => {
                bb.specularRoughnessTexture = wb
              }
            },
            metadata: wb
          }, gp, lp), (0, Kb.i)(bb, null, uM, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughnessAnisotropy" in bb,
              get: bb => bb.specularRoughnessAnisotropy,
              set: (bb, wb) => {
                bb.specularRoughnessAnisotropy = wb
              }
            },
            metadata: wb
          }, Lp, Ip), (0, Kb.i)(bb, null, dM, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughnessAnisotropyTexture" in bb,
              get: bb => bb.specularRoughnessAnisotropyTexture,
              set: (bb, wb) => {
                bb.specularRoughnessAnisotropyTexture = wb
              }
            },
            metadata: wb
          }, Op, Up), (0, Kb.i)(bb, null, PM, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularIor" in bb,
              get: bb => bb.specularIor,
              set: (bb, wb) => {
                bb.specularIor = wb
              }
            },
            metadata: wb
          }, tp, Cp), (0, Kb.i)(bb, null, nM, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionWeight" in bb,
              get: bb => bb.transmissionWeight,
              set: (bb, wb) => {
                bb.transmissionWeight = wb
              }
            },
            metadata: wb
          }, Ep, Fp), (0, Kb.i)(bb, null, yM, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionWeightTexture" in bb,
              get: bb => bb.transmissionWeightTexture,
              set: (bb, wb) => {
                bb.transmissionWeightTexture = wb
              }
            },
            metadata: wb
          }, Bp, sp), (0, Kb.i)(bb, null, oM, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionColor" in bb,
              get: bb => bb.transmissionColor,
              set: (bb, wb) => {
                bb.transmissionColor = wb
              }
            },
            metadata: wb
          }, mp, hp), (0, Kb.i)(bb, null, TM, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionColorTexture" in bb,
              get: bb => bb.transmissionColorTexture,
              set: (bb, wb) => {
                bb.transmissionColorTexture = wb
              }
            },
            metadata: wb
          }, zp, Xp), (0, Kb.i)(bb, null, kM, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDepth" in bb,
              get: bb => bb.transmissionDepth,
              set: (bb, wb) => {
                bb.transmissionDepth = wb
              }
            },
            metadata: wb
          }, xp, jp), (0, Kb.i)(bb, null, be, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDepthTexture" in bb,
              get: bb => bb.transmissionDepthTexture,
              set: (bb, wb) => {
                bb.transmissionDepthTexture = wb
              }
            },
            metadata: wb
          }, Kp, rp), (0, Kb.i)(bb, null, we, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionScatter" in bb,
              get: bb => bb.transmissionScatter,
              set: (bb, wb) => {
                bb.transmissionScatter = wb
              }
            },
            metadata: wb
          }, Rp, Dp), (0, Kb.i)(bb, null, Me, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionScatterTexture" in bb,
              get: bb => bb.transmissionScatterTexture,
              set: (bb, wb) => {
                bb.transmissionScatterTexture = wb
              }
            },
            metadata: wb
          }, cp, Yp), (0, Kb.i)(bb, null, ee, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionScatterAnisotropy" in bb,
              get: bb => bb.transmissionScatterAnisotropy,
              set: (bb, wb) => {
                bb.transmissionScatterAnisotropy = wb
              }
            },
            metadata: wb
          }, Zp, fp), (0, Kb.i)(bb, null, He, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDispersionScale" in bb,
              get: bb => bb.transmissionDispersionScale,
              set: (bb, wb) => {
                bb.transmissionDispersionScale = wb
              }
            },
            metadata: wb
          }, Ap, Wp), (0, Kb.i)(bb, null, pe, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDispersionScaleTexture" in bb,
              get: bb => bb.transmissionDispersionScaleTexture,
              set: (bb, wb) => {
                bb.transmissionDispersionScaleTexture = wb
              }
            },
            metadata: wb
          }, Jp, Sp), (0, Kb.i)(bb, null, Ve, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDispersionAbbeNumber" in bb,
              get: bb => bb.transmissionDispersionAbbeNumber,
              set: (bb, wb) => {
                bb.transmissionDispersionAbbeNumber = wb
              }
            },
            metadata: wb
          }, Np, vp), (0, Kb.i)(bb, null, ge, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceWeight" in bb,
              get: bb => bb.subsurfaceWeight,
              set: (bb, wb) => {
                bb.subsurfaceWeight = wb
              }
            },
            metadata: wb
          }, Qp, Gp), (0, Kb.i)(bb, null, le, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceWeightTexture" in bb,
              get: bb => bb.subsurfaceWeightTexture,
              set: (bb, wb) => {
                bb.subsurfaceWeightTexture = wb
              }
            },
            metadata: wb
          }, qp, ap), (0, Kb.i)(bb, null, Le, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceColor" in bb,
              get: bb => bb.subsurfaceColor,
              set: (bb, wb) => {
                bb.subsurfaceColor = wb
              }
            },
            metadata: wb
          }, ip, dp), (0, Kb.i)(bb, null, Ie, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceColorTexture" in bb,
              get: bb => bb.subsurfaceColorTexture,
              set: (bb, wb) => {
                bb.subsurfaceColorTexture = wb
              }
            },
            metadata: wb
          }, Pp, np), (0, Kb.i)(bb, null, Oe, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceRadius" in bb,
              get: bb => bb.subsurfaceRadius,
              set: (bb, wb) => {
                bb.subsurfaceRadius = wb
              }
            },
            metadata: wb
          }, yp, op), (0, Kb.i)(bb, null, Ue, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceRadiusScale" in bb,
              get: bb => bb.subsurfaceRadiusScale,
              set: (bb, wb) => {
                bb.subsurfaceRadiusScale = wb
              }
            },
            metadata: wb
          }, Tp, kp), (0, Kb.i)(bb, null, te, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceRadiusScaleTexture" in bb,
              get: bb => bb.subsurfaceRadiusScaleTexture,
              set: (bb, wb) => {
                bb.subsurfaceRadiusScaleTexture = wb
              }
            },
            metadata: wb
          }, bV, wV), (0, Kb.i)(bb, null, Ce, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceScatterAnisotropy" in bb,
              get: bb => bb.subsurfaceScatterAnisotropy,
              set: (bb, wb) => {
                bb.subsurfaceScatterAnisotropy = wb
              }
            },
            metadata: wb
          }, MV, eV), (0, Kb.i)(bb, null, Ee, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatWeight" in bb,
              get: bb => bb.coatWeight,
              set: (bb, wb) => {
                bb.coatWeight = wb
              }
            },
            metadata: wb
          }, HV, pV), (0, Kb.i)(bb, null, Fe, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatWeightTexture" in bb,
              get: bb => bb.coatWeightTexture,
              set: (bb, wb) => {
                bb.coatWeightTexture = wb
              }
            },
            metadata: wb
          }, VV, gV), (0, Kb.i)(bb, null, Be, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatColor" in bb,
              get: bb => bb.coatColor,
              set: (bb, wb) => {
                bb.coatColor = wb
              }
            },
            metadata: wb
          }, lV, LV), (0, Kb.i)(bb, null, se, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatColorTexture" in bb,
              get: bb => bb.coatColorTexture,
              set: (bb, wb) => {
                bb.coatColorTexture = wb
              }
            },
            metadata: wb
          }, IV, OV), (0, Kb.i)(bb, null, me, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughness" in bb,
              get: bb => bb.coatRoughness,
              set: (bb, wb) => {
                bb.coatRoughness = wb
              }
            },
            metadata: wb
          }, UV, tV), (0, Kb.i)(bb, null, he, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughnessTexture" in bb,
              get: bb => bb.coatRoughnessTexture,
              set: (bb, wb) => {
                bb.coatRoughnessTexture = wb
              }
            },
            metadata: wb
          }, CV, EV), (0, Kb.i)(bb, null, ze, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughnessAnisotropy" in bb,
              get: bb => bb.coatRoughnessAnisotropy,
              set: (bb, wb) => {
                bb.coatRoughnessAnisotropy = wb
              }
            },
            metadata: wb
          }, FV, BV), (0, Kb.i)(bb, null, Xe, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughnessAnisotropyTexture" in bb,
              get: bb => bb.coatRoughnessAnisotropyTexture,
              set: (bb, wb) => {
                bb.coatRoughnessAnisotropyTexture = wb
              }
            },
            metadata: wb
          }, sV, mV), (0, Kb.i)(bb, null, xe, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatIor" in bb,
              get: bb => bb.coatIor,
              set: (bb, wb) => {
                bb.coatIor = wb
              }
            },
            metadata: wb
          }, hV, zV), (0, Kb.i)(bb, null, je, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatDarkening" in bb,
              get: bb => bb.coatDarkening,
              set: (bb, wb) => {
                bb.coatDarkening = wb
              }
            },
            metadata: wb
          }, XV, xV), (0, Kb.i)(bb, null, Ke, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatDarkeningTexture" in bb,
              get: bb => bb.coatDarkeningTexture,
              set: (bb, wb) => {
                bb.coatDarkeningTexture = wb
              }
            },
            metadata: wb
          }, jV, KV), (0, Kb.i)(bb, null, re, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzWeight" in bb,
              get: bb => bb.fuzzWeight,
              set: (bb, wb) => {
                bb.fuzzWeight = wb
              }
            },
            metadata: wb
          }, rV, RV), (0, Kb.i)(bb, null, Re, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzWeightTexture" in bb,
              get: bb => bb.fuzzWeightTexture,
              set: (bb, wb) => {
                bb.fuzzWeightTexture = wb
              }
            },
            metadata: wb
          }, DV, cV), (0, Kb.i)(bb, null, De, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzColor" in bb,
              get: bb => bb.fuzzColor,
              set: (bb, wb) => {
                bb.fuzzColor = wb
              }
            },
            metadata: wb
          }, YV, ZV), (0, Kb.i)(bb, null, ce, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzColorTexture" in bb,
              get: bb => bb.fuzzColorTexture,
              set: (bb, wb) => {
                bb.fuzzColorTexture = wb
              }
            },
            metadata: wb
          }, fV, AV), (0, Kb.i)(bb, null, Ye, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzRoughness" in bb,
              get: bb => bb.fuzzRoughness,
              set: (bb, wb) => {
                bb.fuzzRoughness = wb
              }
            },
            metadata: wb
          }, WV, JV), (0, Kb.i)(bb, null, Ze, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzRoughnessTexture" in bb,
              get: bb => bb.fuzzRoughnessTexture,
              set: (bb, wb) => {
                bb.fuzzRoughnessTexture = wb
              }
            },
            metadata: wb
          }, SV, NV), (0, Kb.i)(bb, null, fe, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryThinWalled" in bb,
              get: bb => bb.geometryThinWalled,
              set: (bb, wb) => {
                bb.geometryThinWalled = wb
              }
            },
            metadata: wb
          }, vV, QV), (0, Kb.i)(bb, null, Ae, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryNormalTexture" in bb,
              get: bb => bb.geometryNormalTexture,
              set: (bb, wb) => {
                bb.geometryNormalTexture = wb
              }
            },
            metadata: wb
          }, GV, qV), (0, Kb.i)(bb, null, We, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryTangent" in bb,
              get: bb => bb.geometryTangent,
              set: (bb, wb) => {
                bb.geometryTangent = wb
              }
            },
            metadata: wb
          }, aV, iV), (0, Kb.i)(bb, null, Je, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryTangentTexture" in bb,
              get: bb => bb.geometryTangentTexture,
              set: (bb, wb) => {
                bb.geometryTangentTexture = wb
              }
            },
            metadata: wb
          }, uV, dV), (0, Kb.i)(bb, null, Se, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryCoatNormalTexture" in bb,
              get: bb => bb.geometryCoatNormalTexture,
              set: (bb, wb) => {
                bb.geometryCoatNormalTexture = wb
              }
            },
            metadata: wb
          }, PV, nV), (0, Kb.i)(bb, null, Ne, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryCoatTangent" in bb,
              get: bb => bb.geometryCoatTangent,
              set: (bb, wb) => {
                bb.geometryCoatTangent = wb
              }
            },
            metadata: wb
          }, yV, oV), (0, Kb.i)(bb, null, ve, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryCoatTangentTexture" in bb,
              get: bb => bb.geometryCoatTangentTexture,
              set: (bb, wb) => {
                bb.geometryCoatTangentTexture = wb
              }
            },
            metadata: wb
          }, TV, kV), (0, Kb.i)(bb, null, Qe, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryOpacity" in bb,
              get: bb => bb.geometryOpacity,
              set: (bb, wb) => {
                bb.geometryOpacity = wb
              }
            },
            metadata: wb
          }, bg, wg), (0, Kb.i)(bb, null, Ge, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryOpacityTexture" in bb,
              get: bb => bb.geometryOpacityTexture,
              set: (bb, wb) => {
                bb.geometryOpacityTexture = wb
              }
            },
            metadata: wb
          }, Mg, eg), (0, Kb.i)(bb, null, qe, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryThickness" in bb,
              get: bb => bb.geometryThickness,
              set: (bb, wb) => {
                bb.geometryThickness = wb
              }
            },
            metadata: wb
          }, Hg, pg), (0, Kb.i)(bb, null, ae, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryThicknessTexture" in bb,
              get: bb => bb.geometryThicknessTexture,
              set: (bb, wb) => {
                bb.geometryThicknessTexture = wb
              }
            },
            metadata: wb
          }, Vg, gg), (0, Kb.i)(bb, null, ie, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissionLuminance" in bb,
              get: bb => bb.emissionLuminance,
              set: (bb, wb) => {
                bb.emissionLuminance = wb
              }
            },
            metadata: wb
          }, lg, Lg), (0, Kb.i)(bb, null, ue, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissionColor" in bb,
              get: bb => bb.emissionColor,
              set: (bb, wb) => {
                bb.emissionColor = wb
              }
            },
            metadata: wb
          }, Ig, Og), (0, Kb.i)(bb, null, de, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissionColorTexture" in bb,
              get: bb => bb.emissionColorTexture,
              set: (bb, wb) => {
                bb.emissionColorTexture = wb
              }
            },
            metadata: wb
          }, Ug, tg), (0, Kb.i)(bb, null, Pe, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmWeight" in bb,
              get: bb => bb.thinFilmWeight,
              set: (bb, wb) => {
                bb.thinFilmWeight = wb
              }
            },
            metadata: wb
          }, Cg, Eg), (0, Kb.i)(bb, null, ne, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmWeightTexture" in bb,
              get: bb => bb.thinFilmWeightTexture,
              set: (bb, wb) => {
                bb.thinFilmWeightTexture = wb
              }
            },
            metadata: wb
          }, Fg, Bg), (0, Kb.i)(bb, null, ye, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmThickness" in bb,
              get: bb => bb.thinFilmThickness,
              set: (bb, wb) => {
                bb.thinFilmThickness = wb
              }
            },
            metadata: wb
          }, sg, mg), (0, Kb.i)(bb, null, oe, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmThicknessMin" in bb,
              get: bb => bb.thinFilmThicknessMin,
              set: (bb, wb) => {
                bb.thinFilmThicknessMin = wb
              }
            },
            metadata: wb
          }, hg, zg), (0, Kb.i)(bb, null, Te, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmThicknessTexture" in bb,
              get: bb => bb.thinFilmThicknessTexture,
              set: (bb, wb) => {
                bb.thinFilmThicknessTexture = wb
              }
            },
            metadata: wb
          }, Xg, xg), (0, Kb.i)(bb, null, ke, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmIor" in bb,
              get: bb => bb.thinFilmIor,
              set: (bb, wb) => {
                bb.thinFilmIor = wb
              }
            },
            metadata: wb
          }, jg, Kg), (0, Kb.i)(bb, null, bH, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "ambientOcclusionTexture" in bb,
              get: bb => bb.ambientOcclusionTexture,
              set: (bb, wb) => {
                bb.ambientOcclusionTexture = wb
              }
            },
            metadata: wb
          }, rg, Rg), (0, Kb.i)(bb, null, wH, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: bb => "directIntensity" in bb,
              get: bb => bb.directIntensity,
              set: (bb, wb) => {
                bb.directIntensity = wb
              }
            },
            metadata: wb
          }, Dg, cg), (0, Kb.i)(bb, null, MH, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: bb => "environmentIntensity" in bb,
              get: bb => bb.environmentIntensity,
              set: (bb, wb) => {
                bb.environmentIntensity = wb
              }
            },
            metadata: wb
          }, Yg, Zg), (0, Kb.i)(bb, null, eH, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useSpecularWeightFromTextureAlpha" in bb,
              get: bb => bb.useSpecularWeightFromTextureAlpha,
              set: (bb, wb) => {
                bb.useSpecularWeightFromTextureAlpha = wb
              }
            },
            metadata: wb
          }, fg, Ag), (0, Kb.i)(bb, null, HH, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceAlphaTest" in bb,
              get: bb => bb.forceAlphaTest,
              set: (bb, wb) => {
                bb.forceAlphaTest = wb
              }
            },
            metadata: wb
          }, Wg, Jg), (0, Kb.i)(bb, null, pH, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaCutOff" in bb,
              get: bb => bb.alphaCutOff,
              set: (bb, wb) => {
                bb.alphaCutOff = wb
              }
            },
            metadata: wb
          }, Sg, Ng), (0, Kb.i)(bb, null, VH, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAmbientOcclusionFromMetallicTextureRed" in bb,
              get: bb => bb.useAmbientOcclusionFromMetallicTextureRed,
              set: (bb, wb) => {
                bb.useAmbientOcclusionFromMetallicTextureRed = wb
              }
            },
            metadata: wb
          }, vg, Qg), (0, Kb.i)(bb, null, gH, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAmbientInGrayScale" in bb,
              get: bb => bb.useAmbientInGrayScale,
              set: (bb, wb) => {
                bb.useAmbientInGrayScale = wb
              }
            },
            metadata: wb
          }, Gg, qg), (0, Kb.i)(bb, null, lH, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: bb => "usePhysicalLightFalloff" in bb,
              get: bb => bb.usePhysicalLightFalloff
            },
            metadata: wb
          }, null, fH), (0, Kb.i)(bb, null, LH, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: bb => "useGLTFLightFalloff" in bb,
              get: bb => bb.useGLTFLightFalloff
            },
            metadata: wb
          }, null, fH), (0, Kb.i)(bb, null, IH, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "useObjectSpaceNormalMap" in bb,
              get: bb => bb.useObjectSpaceNormalMap,
              set: (bb, wb) => {
                bb.useObjectSpaceNormalMap = wb
              }
            },
            metadata: wb
          }, ag, ig), (0, Kb.i)(bb, null, OH, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallax" in bb,
              get: bb => bb.useParallax,
              set: (bb, wb) => {
                bb.useParallax = wb
              }
            },
            metadata: wb
          }, ug, dg), (0, Kb.i)(bb, null, UH, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallaxOcclusion" in bb,
              get: bb => bb.useParallaxOcclusion,
              set: (bb, wb) => {
                bb.useParallaxOcclusion = wb
              }
            },
            metadata: wb
          }, Pg, ng), (0, Kb.i)(bb, null, tH, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: bb => "parallaxScaleBias" in bb,
              get: bb => bb.parallaxScaleBias,
              set: (bb, wb) => {
                bb.parallaxScaleBias = wb
              }
            },
            metadata: wb
          }, yg, og), (0, Kb.i)(bb, null, CH, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "disableLighting" in bb,
              get: bb => bb.disableLighting,
              set: (bb, wb) => {
                bb.disableLighting = wb
              }
            },
            metadata: wb
          }, Tg, kg), (0, Kb.i)(bb, null, EH, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceIrradianceInFragment" in bb,
              get: bb => bb.forceIrradianceInFragment,
              set: (bb, wb) => {
                bb.forceIrradianceInFragment = wb
              }
            },
            metadata: wb
          }, bl, wl), (0, Kb.i)(bb, null, FH, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: bb => "maxSimultaneousLights" in bb,
              get: bb => bb.maxSimultaneousLights,
              set: (bb, wb) => {
                bb.maxSimultaneousLights = wb
              }
            },
            metadata: wb
          }, Ml, el), (0, Kb.i)(bb, null, BH, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapX" in bb,
              get: bb => bb.invertNormalMapX,
              set: (bb, wb) => {
                bb.invertNormalMapX = wb
              }
            },
            metadata: wb
          }, Hl, pl), (0, Kb.i)(bb, null, sH, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapY" in bb,
              get: bb => bb.invertNormalMapY,
              set: (bb, wb) => {
                bb.invertNormalMapY = wb
              }
            },
            metadata: wb
          }, Vl, gl), (0, Kb.i)(bb, null, mH, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "twoSidedLighting" in bb,
              get: bb => bb.twoSidedLighting,
              set: (bb, wb) => {
                bb.twoSidedLighting = wb
              }
            },
            metadata: wb
          }, ll, Ll), (0, Kb.i)(bb, null, hH, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAlphaFresnel" in bb,
              get: bb => bb.useAlphaFresnel,
              set: (bb, wb) => {
                bb.useAlphaFresnel = wb
              }
            },
            metadata: wb
          }, Il, Ol), (0, Kb.i)(bb, null, zH, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: bb => "useLinearAlphaFresnel" in bb,
              get: bb => bb.useLinearAlphaFresnel,
              set: (bb, wb) => {
                bb.useLinearAlphaFresnel = wb
              }
            },
            metadata: wb
          }, Ul, tl), (0, Kb.i)(bb, null, XH, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "environmentBRDFTexture" in bb,
              get: bb => bb.environmentBRDFTexture,
              set: (bb, wb) => {
                bb.environmentBRDFTexture = wb
              }
            },
            metadata: wb
          }, Cl, El), (0, Kb.i)(bb, null, xH, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceNormalForward" in bb,
              get: bb => bb.forceNormalForward,
              set: (bb, wb) => {
                bb.forceNormalForward = wb
              }
            },
            metadata: wb
          }, Fl, Bl), (0, Kb.i)(bb, null, jH, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: bb => "enableSpecularAntiAliasing" in bb,
              get: bb => bb.enableSpecularAntiAliasing,
              set: (bb, wb) => {
                bb.enableSpecularAntiAliasing = wb
              }
            },
            metadata: wb
          }, sl, ml), (0, Kb.i)(bb, null, KH, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useHorizonOcclusion" in bb,
              get: bb => bb.useHorizonOcclusion,
              set: (bb, wb) => {
                bb.useHorizonOcclusion = wb
              }
            },
            metadata: wb
          }, hl, zl), (0, Kb.i)(bb, null, rH, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useRadianceOcclusion" in bb,
              get: bb => bb.useRadianceOcclusion,
              set: (bb, wb) => {
                bb.useRadianceOcclusion = wb
              }
            },
            metadata: wb
          }, Xl, xl), (0, Kb.i)(bb, null, RH, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: bb => "unlit" in bb,
              get: bb => bb.unlit,
              set: (bb, wb) => {
                bb.unlit = wb
              }
            },
            metadata: wb
          }, jl, Kl), (0, Kb.i)(bb, null, DH, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "applyDecalMapAfterDetailMap" in bb,
              get: bb => bb.applyDecalMapAfterDetailMap,
              set: (bb, wb) => {
                bb.applyDecalMapAfterDetailMap = wb
              }
            },
            metadata: wb
          }, rl, Rl), (0, Kb.i)(bb, null, cH, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "debugMode" in bb,
              get: bb => bb.debugMode,
              set: (bb, wb) => {
                bb.debugMode = wb
              }
            },
            metadata: wb
          }, Dl, cl), (0, Kb.i)(bb, null, YH, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "transparencyMode" in bb,
              get: bb => bb.transparencyMode
            },
            metadata: wb
          }, null, fH), wb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wb
          })
        })(), bb.SSS_QUALITY_LOW = 0, bb.SSS_QUALITY_MEDIUM = 1, bb.SSS_QUALITY_HIGH = 2, bb._noiseTextures = {}, bb.ForceGLSL = !1, bb._ShaderLoader = new Uw.e((() => [Promise.all([Mb.e(636), Mb.e(699)]).then((() => Mb(64881))), Promise.all([Mb.e(641), Mb.e(637), Mb.e(698), Mb.e(703)]).then((() => Mb(64895)))]), (() => [Promise.all([Mb.e(655), Mb.e(657), Mb.e(702)]).then((() => Mb(64938))), Promise.all([Mb.e(655), Mb.e(658), Mb.e(701), Mb.e(704)]).then((() => Mb(64947)))])), bb
      })(),
      bM = !1;
    bM || (bM = !0, (0, Pb.h)(), (0, qw.e)("BABYLON.OpenPBRMaterial", kw));
    var wM = Mb(38318);
    class MM {
      constructor(bb) {
        this.name = Ww.b.NAME_PROCEDURALTEXTURE, this.JE = bb
      }
      register() {
        this.JE._beforeClearStage.registerStep(Ww.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.JE.proceduralTexturesEnabled) {
          jw.e.StartPerformanceCounter("Procedural textures", this.JE.proceduralTextures.length > 0);
          for (let bb = 0; bb < this.JE.proceduralTextures.length; bb++) {
            const wb = this.JE.proceduralTextures[bb];
            wb._shouldRender() && wb.render()
          }
          jw.e.EndPerformanceCounter("Procedural textures", this.JE.proceduralTextures.length > 0)
        }
      }
    }
    var eM = Mb(41997);
    let HM = (() => {
      var bb;
      let wb, eb, Hb, Vb, gb, lb = cb.f,
        Lb = [],
        Ib = [],
        Ob = [],
        Ub = [],
        tb = [],
        Cb = [],
        Fb = [],
        Bb = [],
        sb = [];
      return bb = class extends lb {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(bb, wb, Mb, eb) {
          let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            pb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, eb, !pb), this.isEnabled = ((0, Kb.m)(this, Lb), (0, Kb.m)(this, Ib, !0)), this.autoClear = ((0, Kb.m)(this, Ob), (0, Kb.m)(this, Ub, !0)), this.onGenerated = (0, Kb.m)(this, tb), this.onGeneratedObservable = new wM.b, this.onBeforeGenerationObservable = new wM.b, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, Kb.m)(this, Cb, void 0), this._drawWrapper = (0, Kb.m)(this, Fb), this._textures = {}, this._size = (0, Kb.m)(this, Bb, void 0), this._textureType = (0, Kb.m)(this, sb), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Hb || Hb instanceof cb.f ? (this._options = {}, this._fallbackTexture = Hb) : (this._options = Hb, this._fallbackTexture = Hb.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let lb = (eb = this.RJ() || Eb.e.LastCreatedScene)._getComponent(Ww.b.NAME_PROCEDURALTEXTURE);
          lb || (lb = new MM(eb), eb.BHb(lb)), this._options.skipSceneRegistration || eb.proceduralTextures.push(this), this._fullEngine = eb.DC(), this.name = bb, this.isRenderTarget = !0, this._size = wb, this._textureType = gb, this._generateMipMaps = pb, this._drawWrapper = new eM.c(this._fullEngine), this.setFragment(Mb);
          const mb = this._createRtWrapper(Vb, wb, pb, gb);
          this._texture = mb.texture;
          const hb = [];
          hb.push(1, 1), hb.push(-1, 1), hb.push(-1, -1), hb.push(1, -1), this._vertexBuffers[vb.i.PositionKind] = new vb.i(this._fullEngine, hb, vb.i.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(bb, wb, Mb, eb) {
          return bb ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(wb, {
            generateMipMaps: Mb,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: eb,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(wb, {
            generateMipMaps: Mb,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: eb,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(bb) {
          this._drawWrapper.effect = bb
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((bb => {
            this._contentData = this.readPixels(0, 0, bb), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const bb = this._fullEngine,
            wb = [];
          wb.push(0), wb.push(1), wb.push(2), wb.push(0), wb.push(2), wb.push(3), this._indexBuffer = bb.createIndexBuffer(wb)
        }
        _rebuild() {
          const bb = this._vertexBuffers[vb.i.PositionKind];
          bb && bb._rebuild(), this._createIndexBuffer(), this.refreshRate === Kw.b.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Kw.b.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(bb) {
          if (this.isReady()) return void bb(this);
          const wb = this.getEffect();
          wb && wb.executeWhenCompiled((() => {
            bb(this)
          }))
        }
        isReady() {
          const bb = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const wb = this._getDefines();
          if (this._drawWrapper.effect && wb === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const eb = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== wb && (this._cachedDefines = wb, this._drawWrapper.effect = bb.createEffect(eb, [vb.i.PositionKind], this._uniforms, this._samplers, wb, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([Mb.e(707).then((() => Mb(65011))), this._options.extraInitializationsAsync()]) : await Promise.all([Mb.e(708).then((() => Mb(65018))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await Mb.e(707).then((() => Mb(65011))) : await Mb.e(708).then((() => Mb(65018)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(bb) {
          this._fragment = bb
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(bb) {
          this._refreshRate = bb, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(bb, wb) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const Mb = this._texture.isCube;
          this._rtWrapper.dispose();
          const eb = this._createRtWrapper(Mb, bb, wb, this._textureType);
          this._texture = eb.texture, this._size = bb, this._generateMipMaps = wb
        }
        _checkUniform(bb) {
          -1 === this._uniforms.indexOf(bb) && this._uniforms.push(bb)
        }
        setTexture(bb, wb) {
          return -1 === this._samplers.indexOf(bb) && this._samplers.push(bb), this._textures[bb] = wb, this
        }
        setFloat(bb, wb) {
          return this._checkUniform(bb), this._floats[bb] = wb, this
        }
        setInt(bb, wb) {
          return this._checkUniform(bb), this._ints[bb] = wb, this
        }
        setFloats(bb, wb) {
          return this._checkUniform(bb), this._floatsArrays[bb] = wb, this
        }
        setColor3(bb, wb) {
          return this._checkUniform(bb), this._colors3[bb] = wb, this
        }
        setColor4(bb, wb) {
          return this._checkUniform(bb), this._colors4[bb] = wb, this
        }
        setVector2(bb, wb) {
          return this._checkUniform(bb), this._vectors2[bb] = wb, this
        }
        setVector3(bb, wb) {
          return this._checkUniform(bb), this._vectors3[bb] = wb, this
        }
        setVector4(bb, wb) {
          return this._checkUniform(bb), this._vectors4[bb] = wb, this
        }
        setMatrix(bb, wb) {
          return this._checkUniform(bb), this._matrices[bb] = wb, this
        }
        render(bb) {
          const wb = this.RJ();
          if (!wb) return;
          const Mb = this._fullEngine;
          if (Mb.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), Mb.setState(!1), !this.nodeMaterialSource) {
            for (const bb in this._textures) this._drawWrapper.effect.setTexture(bb, this._textures[bb]);
            for (const bb in this._ints) this._drawWrapper.effect.setInt(bb, this._ints[bb]);
            for (const bb in this._floats) this._drawWrapper.effect.setFloat(bb, this._floats[bb]);
            for (const bb in this._floatsArrays) this._drawWrapper.effect.setArray(bb, this._floatsArrays[bb]);
            for (const bb in this._colors3) this._drawWrapper.effect.setColor3(bb, this._colors3[bb]);
            for (const bb in this._colors4) {
              const wb = this._colors4[bb];
              this._drawWrapper.effect.setFloat4(bb, wb.r, wb.g, wb.b, wb.a)
            }
            for (const bb in this._vectors2) this._drawWrapper.effect.setVector2(bb, this._vectors2[bb]);
            for (const bb in this._vectors3) this._drawWrapper.effect.setVector3(bb, this._vectors3[bb]);
            for (const bb in this._vectors4) this._drawWrapper.effect.setVector4(bb, this._vectors4[bb]);
            for (const bb in this._matrices) this._drawWrapper.effect.setMatrix(bb, this._matrices[bb])
          }
          if (!this._texture || !this._rtWrapper) return;
          Mb._enableGPUDebugMarkers && Mb._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const eb = Mb.currentViewport;
          if (this.isCube)
            for (let Hb = 0; Hb < 6; Hb++) Mb.bindFramebuffer(this._rtWrapper, Hb, void 0, void 0, !0), Mb.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Hb), this.autoClear && Mb.clear(wb.clearColor, !0, !1, !1), Mb.drawElementsType(pb.b.TriangleFillMode, 0, 6), Mb.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let bb = 1;
            this._rtWrapper.is3D ? bb = this._rtWrapper.depth : this._rtWrapper.is2DArray && (bb = this._rtWrapper.layers);
            for (let eb = 0; eb < bb; eb++) {
              if (Mb.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, eb), Mb.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== bb ? eb / (bb - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", eb);
                for (const bb in this._textures) this._drawWrapper.effect.setTexture(bb, this._textures[bb])
              }
              this.autoClear && Mb.clear(wb.clearColor, !0, !1, !1), Mb.drawElementsType(pb.b.TriangleFillMode, 0, 6), Mb.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          eb && Mb.setViewport(eb), this.isCube && Mb.generateMipMapsForCubemap(this._texture, !0), Mb._enableGPUDebugMarkers && Mb._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const wb = this.getSize(),
            Mb = new bb(this.name, wb.width, this._fragment, this.RJ(), this._fallbackTexture, this._generateMipMaps);
          return Mb.hasAlpha = this.hasAlpha, Mb.level = this.level, Mb.coordinatesMode = this.coordinatesMode, Mb
        }
        dispose() {
          const bb = this.RJ();
          if (!bb) return;
          const wb = bb.proceduralTextures.indexOf(this);
          wb >= 0 && bb.proceduralTextures.splice(wb, 1);
          const Mb = this._vertexBuffers[vb.i.PositionKind];
          Mb && (Mb.dispose(), this._vertexBuffers[vb.i.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(lb[Symbol.metadata] ?? null) : void 0;
        wb = [(0, rb.E)()], eb = [(0, rb.E)()], Hb = [(0, rb.E)()], Vb = [(0, rb.E)()], gb = [(0, rb.E)()], (0, Kb.i)(bb, null, gb, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: bb => "refreshRate" in bb,
            get: bb => bb.refreshRate
          },
          metadata: Mb
        }, null, Lb), (0, Kb.i)(null, null, wb, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, wb) => {
              bb.isEnabled = wb
            }
          },
          metadata: Mb
        }, Ib, Ob), (0, Kb.i)(null, null, eb, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: bb => "autoClear" in bb,
            get: bb => bb.autoClear,
            set: (bb, wb) => {
              bb.autoClear = wb
            }
          },
          metadata: Mb
        }, Ub, tb), (0, Kb.i)(null, null, Hb, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: bb => "_generateMipMaps" in bb,
            get: bb => bb._generateMipMaps,
            set: (bb, wb) => {
              bb._generateMipMaps = wb
            }
          },
          metadata: Mb
        }, Cb, Fb), (0, Kb.i)(null, null, Vb, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: bb => "_size" in bb,
            get: bb => bb._size,
            set: (bb, wb) => {
              bb._size = wb
            }
          },
          metadata: Mb
        }, Bb, sb), Mb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Mb
        })
      })(), bb
    })();

    function pM(bb) {
      return "texture" in bb
    }

    function VM(bb) {
      return "value" in bb
    }
    async function gM(bb, wb, eb) {
      const Hb = [wb.red, wb.green, wb.blue, wb.alpha],
        pb = [],
        Vb = [];
      for (let Mb = 0; Mb < 4; Mb++) {
        const bb = Hb[Mb];
        if (bb)
          if (pM(bb)) {
            if (bb.sourceChannel < 0 || bb.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let wb = pb.indexOf(bb.texture); - 1 === wb && (wb = pb.length, pb.push(bb.texture)), Vb[Mb] = wb
          } else {
            if (!VM(bb)) throw new Error("Invalid channel input configuration");
            if (bb.value < 0 || bb.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            Vb[Mb] = -1
          }
        else Vb[Mb] = -1
      }
      let gb = wb.outputSize;
      if (!gb && pb.length > 0) {
        let bb = 0;
        for (const wb of pb) {
          const Mb = wb.getSize(),
            eb = Math.max(Mb.width, Mb.height);
          eb > bb && (bb = eb, gb = Mb.width === Mb.height ? bb : Mb)
        }
      }
      gb = gb || 512;
      const lb = [],
        Lb = new Set;
      for (let Mb = 0; Mb < 4; Mb++) {
        const bb = Hb[Mb],
          wb = ["RED", "GREEN", "BLUE", "ALPHA"][Mb];
        if (bb && pM(bb)) {
          lb.push(`${wb}_FROM_TEXTURE`);
          const bb = Vb[Mb];
          Lb.add(bb)
        }
      }
      Lb.forEach((bb => {
        lb.push(`USE_TEXTURE${bb}`)
      }));
      const Ib = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: eb.DC().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            eb.DC().isWebGPU ? await Promise.all([Mb.e(705).then((() => Mb(64998)))]) : await Promise.all([Mb.e(706).then((() => Mb(65006)))])
          },
          skipSceneRegistration: !0
        },
        Ob = new HM(bb, gb, "textureMerger", eb, Ib);
      Ob.refreshRate = -1, Ob.defines = lb.length > 0 ? "#define " + lb.join("\n#define ") + "\n" : "";
      for (let Mb = 0; Mb < pb.length; Mb++) Ub = pb[Mb], (tb = Ob).uOffset = Ub.uOffset, tb.vOffset = Ub.vOffset, tb.uScale = Ub.uScale, tb.vScale = Ub.vScale, tb.uAng = Ub.uAng, tb.vAng = Ub.vAng, tb.wAng = Ub.wAng, tb.uRotationCenter = Ub.uRotationCenter, tb.vRotationCenter = Ub.vRotationCenter, Ob.setTexture(`inputTexture${Mb}`, pb[Mb]);
      var Ub, tb;
      for (let Mb = 0; Mb < 4; Mb++) {
        const bb = Hb[Mb],
          wb = ["red", "green", "blue", "alpha"][Mb];
        if (bb && pM(bb)) {
          const eb = Vb[Mb];
          Ob.setInt(`${wb}TextureIndex`, eb), Ob.setInt(`${wb}SourceChannel`, bb.sourceChannel)
        } else {
          let eb;
          eb = bb && VM(bb) ? bb.value : 3 === Mb ? 1 : 0, Ob.setFloat(`${wb}ConstantValue`, eb)
        }
      }
      return await new Promise(((bb, wb) => {
        Ob.executeWhenReady((() => {
          try {
            Ob.render(), bb(Ob)
          } catch (Mb) {
            wb(Mb instanceof Error ? Mb : new Error(String(Mb)))
          }
        }))
      }))
    }

    function lM(bb, wb) {
      return {
        texture: bb,
        sourceChannel: wb
      }
    }

    function LM(bb) {
      return {
        value: bb
      }
    }

    function IM(bb, wb, Mb, eb) {
      return {
        red: bb,
        green: wb,
        blue: Mb,
        alpha: eb
      }
    }
    var OM = Mb(41499),
      UM = Mb(41603),
      tM = Mb(38308),
      CM = Mb(41660),
      EM = Mb(41592);
    class FM {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class BM extends OM.b {
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
        return !!this._options?.enableMultiview || this.HE > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new FM;
        super(null), void 0 === bb.deterministicLockstep && (bb.deterministicLockstep = !1), void 0 !== bb.timeStep && (this._timeStep = bb.timeStep), void 0 === bb.lockstepMaxSteps && (bb.lockstepMaxSteps = 4), this._options = bb, tM.c.SetMatrixPrecision(!!bb.useHighPrecisionMatrix), this._caps = {
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
        }, bb.enableMultiview && (this._caps.multiview = {
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
        }, bb.renderingCanvas && (this._renderingCanvas = bb.renderingCanvas), Rb.b.Log(`Babylon.js v${OM.b.Version} - Null engine`);
        const wb = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (wb.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (wb.Blob = function() {})
      }
      createVertexBuffer(bb) {
        const wb = new UM.c;
        return wb.references = 1, wb
      }
      createIndexBuffer(bb) {
        const wb = new UM.c;
        return wb.references = 1, wb
      }
      clear(bb, wb, Mb) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(bb, wb, Mb) {
        this._cachedViewport = bb
      }
      createUniformBuffer(bb) {
        const wb = new UM.c;
        return wb.references = 1, wb.qO = bb instanceof Array ? bb.length * Float32Array.BYTES_PER_ELEMENT : bb.byteLength, wb
      }
      createDynamicUniformBuffer(bb) {
        return this.createUniformBuffer(bb)
      }
      updateUniformBuffer(bb, wb, Mb, eb) {}
      bindUniformBufferBase(bb, wb, Mb) {}
      bindUniformBlock(bb, wb, Mb) {}
      createShaderProgram(bb, wb, Mb, eb, Hb) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(bb, wb) {
        return []
      }
      getAttributes(bb, wb) {
        return []
      }
      bindSamplers(bb) {
        this._currentEffect = null
      }
      enableEffect(bb) {
        bb = null !== bb && (0, EM.d)(bb) ? bb.effect : bb, this._currentEffect = bb, bb && (bb.onBind && bb.onBind(bb), bb._onBindObservable && bb._onBindObservable.notifyObservers(bb))
      }
      setStateCullFaceType(bb, wb) {}
      setState(bb) {}
      setIntArray(bb, wb) {
        return !0
      }
      setIntArray2(bb, wb) {
        return !0
      }
      setIntArray3(bb, wb) {
        return !0
      }
      setIntArray4(bb, wb) {
        return !0
      }
      setFloatArray(bb, wb) {
        return !0
      }
      setFloatArray2(bb, wb) {
        return !0
      }
      setFloatArray3(bb, wb) {
        return !0
      }
      setFloatArray4(bb, wb) {
        return !0
      }
      setArray(bb, wb) {
        return !0
      }
      setArray2(bb, wb) {
        return !0
      }
      setArray3(bb, wb) {
        return !0
      }
      setArray4(bb, wb) {
        return !0
      }
      setMatrices(bb, wb) {
        return !0
      }
      setMatrix3x3(bb, wb) {
        return !0
      }
      setMatrix2x2(bb, wb) {
        return !0
      }
      setFloat(bb, wb) {
        return !0
      }
      setFloat2(bb, wb, Mb) {
        return !0
      }
      setFloat3(bb, wb, Mb, eb) {
        return !0
      }
      setBool(bb, wb) {
        return !0
      }
      setFloat4(bb, wb, Mb, eb, Hb) {
        return !0
      }
      setAlphaMode(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[Mb] !== bb && (this.alphaState.setAlphaBlend(0 !== bb, 0), wb || this.setDepthWrite(0 === bb), this._alphaMode[Mb] = bb)
      }
      bindBuffers(bb, wb, Mb) {}
      wipeCaches(bb) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, bb && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(bb, wb, Mb, eb) {}
      drawElementsType(bb, wb, Mb, eb) {}
      drawArraysType(bb, wb, Mb, eb) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(bb) {}
      createTexture(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Vb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          gb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const lb = new rw.e(this, 1),
          Lb = String(bb);
        return lb.url = Lb, lb.generateMipMaps = !wb, lb.samplingMode = Hb, lb.invertY = Mb, lb.baseWidth = this._options.textureSize, lb.baseHeight = this._options.textureSize, lb.width = this._options.textureSize, lb.height = this._options.textureSize, gb && (lb.format = gb), Vb && (lb._buffer = Vb), lb.isReady = !0, pb && setTimeout((() => {
          pb(lb)
        })), this._internalTexturesCache.push(lb), lb
      }
      _createHardwareRenderTargetWrapper(bb, wb, Mb) {
        const eb = new CM.c(bb, wb, Mb, this);
        return this._renderTargetWrapperCache.push(eb), eb
      }
      createRenderTargetTexture(bb, wb) {
        const Mb = this._createHardwareRenderTargetWrapper(!1, !1, bb),
          eb = {};
        void 0 !== wb && "object" === typeof wb ? (eb.generateMipMaps = wb.generateMipMaps, eb.generateDepthBuffer = void 0 === wb.generateDepthBuffer || wb.generateDepthBuffer, eb.generateStencilBuffer = eb.generateDepthBuffer && wb.generateStencilBuffer, eb.type = void 0 === wb.type ? 0 : wb.type, eb.samplingMode = void 0 === wb.samplingMode ? 3 : wb.samplingMode) : (eb.generateMipMaps = wb, eb.generateDepthBuffer = !0, eb.generateStencilBuffer = !1, eb.type = 0, eb.samplingMode = 3);
        const Hb = new rw.e(this, 5);
        Mb.setTexture(Hb);
        const pb = bb.width || bb,
          Vb = bb.height || bb;
        return Mb._generateDepthBuffer = eb.generateDepthBuffer, Mb._generateStencilBuffer = !!eb.generateStencilBuffer, Hb.baseWidth = pb, Hb.baseHeight = Vb, Hb.width = pb, Hb.height = Vb, Hb.isReady = !0, Hb.samples = 1, Hb.generateMipMaps = !!eb.generateMipMaps, Hb.samplingMode = eb.samplingMode, Hb.type = eb.type, this._internalTexturesCache.push(Hb), Mb
      }
      createMultiviewRenderTargetTexture(bb, wb) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const Mb = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: bb,
            height: wb
          }),
          eb = new rw.e(this, 5, !0);
        return eb.baseWidth = bb, eb.baseHeight = wb, eb.width = bb, eb.height = wb, eb.isMultiview = !0, eb.isReady = !0, eb.format = 5, eb.samples = 1, Mb.setTextures(eb), Mb
      }
      bindMultiviewFramebuffer(bb) {
        this.bindFramebuffer(bb, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(bb, wb) {
        const Mb = this._createHardwareRenderTargetWrapper(!1, !0, bb),
          eb = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...wb
          };
        eb.generateStencilBuffer = eb.generateDepthBuffer && eb.generateStencilBuffer, (1 !== eb.type || this._caps.textureFloatLinearFiltering) && (2 !== eb.type || this._caps.textureHalfFloatLinearFiltering) || (eb.samplingMode = 1), Mb._generateDepthBuffer = eb.generateDepthBuffer, Mb._generateStencilBuffer = !!eb.generateStencilBuffer;
        const Hb = new rw.e(this, 5);
        return Hb.baseWidth = bb, Hb.baseHeight = bb, Hb.width = bb, Hb.height = bb, Hb.isReady = !0, Hb.isCube = !0, Hb.samples = 1, Hb.generateMipMaps = !!eb.generateMipMaps, Hb.samplingMode = eb.samplingMode, Hb.type = eb.type, this._internalTexturesCache.push(Hb), Mb
      }
      updateTextureSamplingMode(bb, wb) {
        wb.samplingMode = bb
      }
      createRawTexture(bb, wb, Mb, eb, Hb, pb, Vb) {
        let gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          lb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Lb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Ib = new rw.e(this, 3);
        return Ib.baseWidth = wb, Ib.baseHeight = Mb, Ib.width = wb, Ib.height = Mb, Ib.format = eb, Ib.generateMipMaps = Hb, Ib.samplingMode = Vb, Ib.invertY = pb, Ib._compression = gb, Ib.type = lb, Ib._useSRGBBuffer = Lb, this._doNotHandleContextLost || (Ib._bufferView = bb), Ib
      }
      updateRawTexture(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        bb && (bb._bufferView = wb, bb.format = Mb, bb.invertY = eb, bb._compression = Hb, bb.type = pb, bb._useSRGBBuffer = Vb)
      }
      bindFramebuffer(bb, wb, Mb, eb, Hb) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = bb, this._currentFramebuffer = null, this._cachedViewport && !Hb && this.setViewport(this._cachedViewport, Mb, eb)
      }
      unBindFramebuffer(bb) {
        let wb = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, wb && wb(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(bb) {
        const wb = new UM.c;
        return wb.references = 1, wb.qO = 1, wb
      }
      updateDynamicTexture(bb, wb, Mb) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(bb) {}
      updateDynamicIndexBuffer(bb, wb) {}
      updateDynamicVertexBuffer(bb, wb, Mb, eb) {}
      _bindTextureDirectly(bb, wb) {
        return this._boundTexturesCache[this._activeChannel] !== wb && (this._boundTexturesCache[this._activeChannel] = wb, !0)
      }
      _bindTexture(bb, wb) {
        bb < 0 || this._bindTextureDirectly(0, wb)
      }
      _deleteBuffer(bb) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(bb) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(bb, wb, Mb, eb, Hb) {}
      _uploadDataToTextureDirectly(bb, wb) {}
      _uploadArrayBufferViewToTexture(bb, wb) {}
      _uploadImageToTexture(bb, wb) {}
    }
    Mb(41713), Mb(41749), Mb(41709);
    async function sM(bb) {
      const wb = bb.getInternalTexture();
      if (!wb || 1 !== wb.source) return null;
      if (wb.invertY) {
        const wb = bb.RJ()?.DC();
        if (!(wb instanceof BM)) return null
      }
      const Mb = wb._buffer;
      let eb, pb = bb.mimeType;
      try {
        Mb ? ArrayBuffer.isView(Mb) ? eb = Mb.buffer.slice(Mb.byteOffset, Mb.byteOffset + Mb.byteLength) : Mb instanceof ArrayBuffer ? eb = Mb : Mb instanceof Blob ? (eb = await Mb.arrayBuffer(), pb = Mb.type || pb) : "string" === typeof Mb ? (eb = await Hb.Tools.LoadFileAsync(Mb), pb = (0, lb.e)(Mb) || pb) : "undefined" !== typeof HTMLImageElement && Mb instanceof HTMLImageElement && (eb = await Hb.Tools.LoadFileAsync(Mb.src), pb = (0, lb.e)(Mb.src) || pb) : (eb = await Hb.Tools.LoadFileAsync(wb.url), pb = (0, lb.e)(wb.url) || pb)
      } catch {
        return null
      }
      if (eb && !pb && wb.url) {
        const bb = wb.url.match(/^data:([^;,]+)/);
        pb = bb ? bb[1] : (0, lb.e)(wb.url)
      }
      return eb && pb ? {
        data: eb,
        mimeType: pb
      } : null
    }
    const mM = 1e-6,
      hM = new Fb.Color3(.04, .04, .04),
      zM = 1024,
      XM = Fb.Color3.White(),
      xM = Fb.Color3.BlackReadOnly;

    function jM(bb) {
      switch (bb) {
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

    function KM(bb, wb, Mb) {
      if (wb < hM.r) return 0;
      const eb = hM.r,
        Hb = bb * Mb / (1 - hM.r) + wb - 2 * hM.r,
        pb = Hb * Hb - 4 * eb * (hM.r - wb);
      return mb.Clamp((-Hb + Math.sqrt(pb)) / (2 * eb), 0, 1)
    }

    function rM(bb) {
      const wb = bb.diffuseColor.toLinearSpace(bb.RJ().DC().useExactSrgbConversions).scale(.5),
        Mb = bb.alpha,
        eb = function(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Nb.m(0, 1),
            Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Nb.m(0, .1),
            eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Nb.m(0, .1),
            Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Nb.m(1300, .1);
          return function(bb, wb, Mb, eb, Hb) {
            return (1 - bb) * (1 - bb) * (1 - bb) * wb + 3 * (1 - bb) * (1 - bb) * bb * Mb + 3 * (1 - bb) * bb * bb * eb + bb * bb * bb * Hb
          }(Math.pow(bb / Hb.x, .333333), wb.y, Mb.y, eb.y, Hb.y)
        }(mb.Clamp(bb.specularPower, 0, zM));
      return {
        baseColorFactor: [wb.r, wb.g, wb.b, Mb],
        metallicFactor: 0,
        roughnessFactor: eb
      }
    }

    function RM(bb, wb) {
      wb.needAlphaBlending() ? bb.alphaMode = "BLEND" : wb.needAlphaTesting() && (bb.alphaMode = "MASK", bb.alphaCutoff = wb.alphaCutOff)
    }

    function DM(bb, wb, Mb) {
      const eb = new Uint8Array(bb * wb * 4);
      for (let Hb = 0; Hb < eb.length; Hb += 4) eb[Hb] = eb[Hb + 1] = eb[Hb + 2] = eb[Hb + 3] = 255;
      return Xb.b.CreateRGBATexture(eb, bb, wb, Mb)
    }

    function cM(bb) {
      if (bb instanceof Uint8Array) {
        const wb = bb.length,
          Mb = new Float32Array(bb.length);
        for (let eb = 0; eb < wb; ++eb) Mb[eb] = bb[eb] / 255;
        return Mb
      }
      if (bb instanceof Float32Array) return bb;
      throw new Error("Unsupported pixel format!")
    }
    class YM {
      constructor(bb) {
        this._exporter = bb, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(bb) {
        return bb ? this._textureMap.get(bb.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(bb, wb) {
        const Mb = rM(bb),
          eb = {
            name: bb.name
          };
        if (null == bb.backFaceCulling || bb.backFaceCulling || (bb.twoSidedLighting || Hb.Tools.Warn(bb.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), eb.doubleSided = !0), wb) {
          const wb = [],
            Hb = bb.diffuseTexture;
          Hb && wb.push(this.exportTextureAsync(Hb).then((bb => {
            bb && (Mb.baseColorTexture = bb)
          })));
          const pb = bb.bumpTexture;
          pb && wb.push(this.exportTextureAsync(pb).then((bb => {
            bb && (eb.normalTexture = bb, 1 !== pb.level && (eb.normalTexture.scale = pb.level))
          })));
          const Vb = bb.emissiveTexture;
          Vb && (eb.emissiveFactor = [1, 1, 1], wb.push(this.exportTextureAsync(Vb).then((bb => {
            bb && (eb.emissiveTexture = bb)
          }))));
          const gb = bb.ambientTexture;
          gb && wb.push(this.exportTextureAsync(gb).then((bb => {
            if (bb) {
              const wb = {
                index: bb.index
              };
              eb.occlusionTexture = wb
            }
          }))), wb.length > 0 && (this._exporter._materialNeedsUVsSet.add(bb), await Promise.all(wb))
        }(bb.alpha < 1 || bb.opacityTexture) && (bb.alphaMode === xb.b.ALPHA_COMBINE ? eb.alphaMode = "BLEND" : Hb.Tools.Warn(bb.name + ": glTF 2.0 does not support alpha mode: " + bb.alphaMode.toString())), bb.emissiveColor && !bb.emissiveColor.equalsWithEpsilon(xM, mM) && (eb.emissiveFactor = bb.emissiveColor.ppb()), eb.pbrMetallicRoughness = Mb, RM(eb, bb), await this._finishMaterialAsync(eb, bb);
        const pb = this._exporter._materials;
        return pb.push(eb), pb.length - 1
      }
      async _finishMaterialAsync(bb, wb) {
        const Mb = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", bb, wb),
          eb = [];
        for (const Hb of Mb) eb.push(this.exportTextureAsync(Hb));
        await Promise.all(eb), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", bb, wb)
      }
      _resizeTexturesToSameDimensions(bb, wb, Mb) {
        const eb = bb ? bb.getSize() : {
            width: 0,
            height: 0
          },
          Hb = wb ? wb.getSize() : {
            width: 0,
            height: 0
          };
        let pb, Vb;
        return eb.width < Hb.width ? (pb = bb && bb instanceof zb.c ? hb.e.CreateResizedCopy(bb, Hb.width, Hb.height, !0) : DM(Hb.width, Hb.height, Mb), Vb = wb) : eb.width > Hb.width ? (Vb = wb && wb instanceof zb.c ? hb.e.CreateResizedCopy(wb, eb.width, eb.height, !0) : DM(eb.width, eb.height, Mb), pb = bb) : (pb = bb, Vb = wb), {
          texture1: pb,
          texture2: Vb
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(bb, wb, Mb) {
        const eb = new Array;
        if (!bb && !wb) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Hb = bb ? bb.RJ() : wb ? wb.RJ() : null;
        if (Hb) {
          const pb = this._resizeTexturesToSameDimensions(bb, wb, Hb),
            Vb = pb.texture1?.getSize();
          let gb, lb;
          const Lb = Vb.width,
            Ib = Vb.height,
            Ob = await pb.texture1.readPixels(),
            Ub = await pb.texture2.readPixels();
          if (!Ob) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (gb = cM(Ob), !Ub) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          lb = cM(Ub);
          const tb = lb.byteLength,
            Cb = new Uint8Array(tb),
            Eb = new Uint8Array(tb),
            Bb = 4,
            sb = new Fb.Color3(0, 0, 0);
          let mb = 0,
            hb = 0;
          for (let bb = 0; bb < Ib; ++bb)
            for (let wb = 0; wb < Lb; ++wb) {
              const eb = (Lb * bb + wb) * Bb,
                Vb = {
                  diffuseColor: new Fb.Color3(gb[eb], gb[eb + 1], gb[eb + 2]).toLinearSpace(Hb.DC().useExactSrgbConversions).multiply(Mb.diffuseColor),
                  specularColor: new Fb.Color3(lb[eb], lb[eb + 1], lb[eb + 2]).toLinearSpace(Hb.DC().useExactSrgbConversions).multiply(Mb.specularColor),
                  glossiness: lb[eb + 3] * Mb.glossiness
                },
                Ib = this._convertSpecularGlossinessToMetallicRoughness(Vb);
              sb.r = Math.max(sb.r, Ib.baseColor.r), sb.g = Math.max(sb.g, Ib.baseColor.g), sb.b = Math.max(sb.b, Ib.baseColor.b), mb = Math.max(mb, Ib.metallic), hb = Math.max(hb, Ib.roughness), Eb[eb] = 255 * Ib.baseColor.r, Eb[eb + 1] = 255 * Ib.baseColor.g, Eb[eb + 2] = 255 * Ib.baseColor.b, Eb[eb + 3] = pb.texture1.hasAlpha ? 255 * gb[eb + 3] : 255, Cb[eb] = 0, Cb[eb + 1] = 255 * Ib.roughness, Cb[eb + 2] = 255 * Ib.metallic, Cb[eb + 3] = 255
            }
          const zb = {
            baseColor: sb,
            metallic: mb,
            roughness: hb
          };
          let Xb = !1,
            xb = !1;
          for (let bb = 0; bb < Ib; ++bb)
            for (let wb = 0; wb < Lb; ++wb) {
              const Mb = (Lb * bb + wb) * Bb;
              Eb[Mb] /= zb.baseColor.r > mM ? zb.baseColor.r : 1, Eb[Mb + 1] /= zb.baseColor.g > mM ? zb.baseColor.g : 1, Eb[Mb + 2] /= zb.baseColor.b > mM ? zb.baseColor.b : 1;
              const eb = Fb.Color3.FromInts(Eb[Mb], Eb[Mb + 1], Eb[Mb + 2]).toGammaSpace(Hb.DC().useExactSrgbConversions);
              Eb[Mb] = 255 * eb.r, Eb[Mb + 1] = 255 * eb.g, Eb[Mb + 2] = 255 * eb.b, eb.equalsWithEpsilon(XM, mM) || (xb = !0), Cb[Mb + 1] /= zb.roughness > mM ? zb.roughness : 1, Cb[Mb + 2] /= zb.metallic > mM ? zb.metallic : 1;
              Fb.Color3.FromInts(255, Cb[Mb + 1], Cb[Mb + 2]).equalsWithEpsilon(XM, mM) || (Xb = !0)
            }
          return Xb && eb.push((0, jb.EncodeImageAsync)(Cb, Lb, Ib).then((bb => {
            zb.metallicRoughnessTextureData = bb
          }))), xb && eb.push((0, jb.EncodeImageAsync)(Eb, Lb, Ib).then((bb => {
            zb.baseColorTextureData = bb
          }))), await Promise.all(eb).then((() => zb))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(bb) {
        const wb = this._getPerceivedBrightness(bb.diffuseColor),
          Mb = this._getPerceivedBrightness(bb.specularColor),
          eb = 1 - this._getMaxComponent(bb.specularColor),
          Hb = KM(wb, Mb, eb),
          pb = bb.diffuseColor.scale(eb / (1 - hM.r) / Math.max(1 - Hb, mM)),
          Vb = bb.specularColor.subtract(hM.scale(1 - Hb)).scale(1 / Math.max(Hb, mM));
        let gb = Fb.Color3.Lerp(pb, Vb, Hb * Hb);
        gb = gb.clampToRef(0, 1, gb);
        return {
          baseColor: gb,
          metallic: Hb,
          roughness: 1 - bb.glossiness
        }
      }
      _getPerceivedBrightness(bb) {
        return Math.sqrt(.299 * bb.r * bb.r + .587 * bb.g * bb.g + .114 * bb.b * bb.b)
      }
      _getMaxComponent(bb) {
        return Math.max(bb.r, Math.max(bb.g, bb.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        const Lb = [],
          Ib = {
            baseColor: bb,
            metallic: wb,
            roughness: Mb
          };
        if (lb)
          if (Vb instanceof kw) {
            if (Vb.geometryOpacityTexture) {
              const bb = eb && eb.getInternalTexture() ? eb.getInternalTexture().uniqueId : 0,
                wb = Vb.geometryOpacityTexture && Vb.geometryOpacityTexture.getInternalTexture() ? Vb.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                Mb = Number(`${bb}${wb}`),
                Hb = this._textureMap.get(Mb);
              Hb ? gb.baseColorTexture = Hb : Lb.push(gM("baseColorOpacityTexture", IM(eb ? lM(eb, 0) : LM(1), eb ? lM(eb, 1) : LM(1), eb ? lM(eb, 2) : LM(1), lM(Vb.geometryOpacityTexture, 0)), Vb.RJ()).then((async bb => {
                const wb = await this.exportTextureAsync(bb, Mb);
                wb && (gb.baseColorTexture = wb)
              })))
            } else eb && Lb.push(this.exportTextureAsync(eb).then((bb => {
              bb && (gb.baseColorTexture = bb)
            })));
            if (Vb._useMetallicFromMetallicTextureBlue && Hb) Lb.push(this.exportTextureAsync(Hb).then((bb => {
              bb && (gb.metallicRoughnessTexture = bb)
            })));
            else if (pb || Hb) {
              const bb = Hb && Hb.getInternalTexture() ? Hb.getInternalTexture().uniqueId : 0,
                wb = pb && pb.getInternalTexture() ? pb.getInternalTexture().uniqueId : 0,
                Mb = Number(`${bb}${wb}`),
                eb = this._textureMap.get(Mb);
              eb ? gb.metallicRoughnessTexture = eb : Lb.push(gM("MetalRoughTexture", IM(Vb.ambientOcclusionTexture ? lM(Vb.ambientOcclusionTexture, 0) : LM(1), pb ? lM(pb, 0) : LM(1), Hb ? lM(Hb, 0) : LM(1)), Vb.RJ()).then((async bb => {
                const wb = await this.exportTextureAsync(bb, Mb);
                wb && (gb.metallicRoughnessTexture = wb)
              })))
            }
          } else eb && Lb.push(this.exportTextureAsync(eb).then((bb => {
            bb && (gb.baseColorTexture = bb)
          }))), Hb && Lb.push(this.exportTextureAsync(Hb).then((bb => {
            bb && (gb.metallicRoughnessTexture = bb)
          })));
        return Lb.length > 0 && (this._exporter._materialNeedsUVsSet.add(Vb), await Promise.all(Lb)), Ib
      }
      _getTextureSampler(bb) {
        const wb = {};
        if (!bb || !(bb instanceof zb.c)) return wb;
        const Mb = this._getGLTFTextureWrapMode(bb.wrapU);
        10497 !== Mb && (wb.wrapS = Mb);
        const eb = this._getGLTFTextureWrapMode(bb.wrapV);
        switch (10497 !== eb && (wb.wrapT = eb), bb.samplingMode) {
          case zb.c.LINEAR_LINEAR:
            wb.magFilter = 9729, wb.minFilter = 9729;
            break;
          case zb.c.LINEAR_NEAREST:
            wb.magFilter = 9729, wb.minFilter = 9728;
            break;
          case zb.c.NEAREST_LINEAR:
            wb.magFilter = 9728, wb.minFilter = 9729;
            break;
          case zb.c.NEAREST_LINEAR_MIPLINEAR:
            wb.magFilter = 9728, wb.minFilter = 9987;
            break;
          case zb.c.NEAREST_NEAREST:
            wb.magFilter = 9728, wb.minFilter = 9728;
            break;
          case zb.c.NEAREST_LINEAR_MIPNEAREST:
            wb.magFilter = 9728, wb.minFilter = 9985;
            break;
          case zb.c.LINEAR_NEAREST_MIPNEAREST:
            wb.magFilter = 9729, wb.minFilter = 9984;
            break;
          case zb.c.LINEAR_NEAREST_MIPLINEAR:
            wb.magFilter = 9729, wb.minFilter = 9986;
            break;
          case zb.c.NEAREST_NEAREST_MIPLINEAR:
            wb.magFilter = 9728, wb.minFilter = 9986;
            break;
          case zb.c.LINEAR_LINEAR_MIPLINEAR:
            wb.magFilter = 9729, wb.minFilter = 9987;
            break;
          case zb.c.LINEAR_LINEAR_MIPNEAREST:
            wb.magFilter = 9729, wb.minFilter = 9985;
            break;
          case zb.c.NEAREST_NEAREST_MIPNEAREST:
            wb.magFilter = 9728, wb.minFilter = 9984
        }
        return wb
      }
      _getGLTFTextureWrapMode(bb) {
        switch (bb) {
          case zb.c.WRAP_ADDRESSMODE:
            return 10497;
          case zb.c.CLAMP_ADDRESSMODE:
            return 33071;
          case zb.c.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Hb.Tools.Error(`Unsupported Texture Wrap Mode ${bb}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(bb, wb, Mb) {
        const eb = {
            diffuseColor: bb._albedoColor,
            specularColor: bb._reflectivityColor,
            glossiness: bb._microSurface
          },
          Hb = bb._albedoTexture,
          pb = bb._reflectivityTexture,
          Vb = bb._useMicroSurfaceFromReflectivityMapAlpha;
        if (pb && !Vb) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Hb || pb) && Mb) {
          this._exporter._materialNeedsUVsSet.add(bb);
          const Mb = this._exportTextureSampler(Hb || pb),
            Vb = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Hb, pb, eb),
            gb = this._exporter._textures;
          if (Vb.baseColorTextureData) {
            const bb = await this._exportImageAsync(`baseColor${gb.length}`, Vb.baseColorTextureData);
            wb.baseColorTexture = this._exportTextureInfo(bb, Mb, Hb?.coordinatesIndex)
          }
          if (Vb.metallicRoughnessTextureData) {
            const bb = await this._exportImageAsync(`metallicRoughness${gb.length}`, Vb.metallicRoughnessTextureData);
            wb.metallicRoughnessTexture = this._exportTextureInfo(bb, Mb, pb?.coordinatesIndex)
          }
          return Vb
        }
        return this._convertSpecularGlossinessToMetallicRoughness(eb)
      }
      async exportPBRMaterialAsync(bb, wb) {
        const Mb = {},
          eb = {
            name: bb.name
          },
          Hb = bb.isMetallicWorkflow();
        if (Hb) {
          const wb = bb._albedoColor,
            eb = bb.alpha;
          wb && (Mb.baseColorFactor = [wb.r, wb.g, wb.b, eb])
        }
        const pb = Hb ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(bb._albedoColor, bb._metallic, bb._roughness, bb._albedoTexture, bb._metallicTexture, bb._metallicTexture, bb, Mb, wb) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(bb, Mb, wb);
        await this._setMetallicRoughnessPbrMaterialAsync(pb, bb, eb, Mb, wb), await this._finishMaterialAsync(eb, bb);
        const Vb = this._exporter._materials;
        return Vb.push(eb), Vb.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(bb, wb, Mb, eb, pb) {
        if (RM(Mb, wb), bb.baseColor.equalsWithEpsilon(XM, mM) && mb.WithinEpsilon(wb.alpha, 1, mM) || (eb.baseColorFactor = [bb.baseColor.r, bb.baseColor.g, bb.baseColor.b, wb.alpha]), null != bb.metallic && 1 !== bb.metallic && (eb.metallicFactor = bb.metallic), null != bb.roughness && 1 !== bb.roughness && (eb.roughnessFactor = bb.roughness), null == wb.backFaceCulling || wb.backFaceCulling || (wb._twoSidedLighting || Hb.Tools.Warn(wb.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Mb.doubleSided = !0), pb) {
          const bb = [],
            Hb = wb instanceof Xw ? wb._bumpTexture : wb.geometryNormalTexture;
          Hb && bb.push(this.exportTextureAsync(Hb).then((bb => {
            bb && (Mb.normalTexture = bb, 1 !== Hb.level && (Mb.normalTexture.scale = Hb.level))
          })));
          const pb = wb instanceof Xw ? wb._ambientTexture : wb.ambientOcclusionTexture;
          pb && bb.push(new Promise((async bb => {
            if (wb instanceof kw && eb.metallicRoughnessTexture) {
              const wb = this._exportTextureSampler(pb),
                Mb = this._exporter._textures[eb.metallicRoughnessTexture.index].source,
                Hb = this._exportTextureInfo(Mb, wb, pb.coordinatesIndex);
              return this._textureMap.set(pb.uniqueId, Hb), this._exporter._extensionsPostExportTextures("exporter", Hb, pb), bb(Hb)
            }
            return bb(await this.exportTextureAsync(pb))
          })).then((async bb => {
            if (bb) {
              const eb = {
                index: bb.index,
                texCoord: bb.texCoord,
                extensions: bb.extensions
              };
              Mb.occlusionTexture = eb, eb.strength = wb instanceof Xw ? wb._ambientTextureStrength : wb.ambientOcclusionTexture.level
            }
          })));
          const Vb = wb instanceof Xw ? wb._emissiveTexture : wb.emissionColorTexture;
          Vb && bb.push(this.exportTextureAsync(Vb).then((bb => {
            bb && (Mb.emissiveTexture = bb)
          }))), bb.length > 0 && (this._exporter._materialNeedsUVsSet.add(wb), await Promise.all(bb))
        }
        const Vb = wb instanceof Xw ? wb._emissiveColor : wb.emissionColor;
        Vb.equalsWithEpsilon(xM, mM) || (Mb.emissiveFactor = Vb.ppb()), Mb.pbrMetallicRoughness = eb
      }
      async exportOpenPBRMaterialAsync(bb, wb) {
        const Mb = {},
          eb = {
            name: bb.name
          },
          Hb = bb.baseColor,
          pb = bb.geometryOpacity;
        Hb && (Mb.baseColorFactor = [Hb.r, Hb.g, Hb.b, pb]);
        const Vb = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(bb.baseColor, bb.baseMetalness, bb.specularRoughness, bb.baseColorTexture, bb.baseMetalnessTexture, bb.specularRoughnessTexture, bb, Mb, wb);
        await this._setMetallicRoughnessPbrMaterialAsync(Vb, bb, eb, Mb, wb), await this._finishMaterialAsync(eb, bb);
        const gb = this._exporter._materials;
        return gb.push(eb), gb.length - 1
      }
      async exportTextureAsync(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = this._textureMap.get(wb ?? bb.uniqueId);
        if (Mb) return Mb;
        const eb = this._exportTextureSampler(bb),
          Hb = await this._exportTextureImageAsync(bb);
        return Mb = this._exportTextureInfo(Hb, eb, bb.coordinatesIndex), this._textureMap.set(wb ?? bb.uniqueId, Mb), this._exporter._extensionsPostExportTextures("exporter", Mb, bb), Mb
      }
      async _exportTextureImageAsync(bb) {
        const wb = bb.mimeType ?? "none",
          Mb = this._internalTextureToImage,
          eb = bb.getInternalTexture().uniqueId;
        Mb[eb] = Mb[eb] || {};
        let pb = Mb[eb][wb];
        return void 0 === pb && (pb = (async () => {
          const Mb = await sM(bb);
          if (Mb && jM(Mb.mimeType) && ("none" === wb || Mb.mimeType === wb)) return await this._exportImageAsync(bb.name, new Blob([Mb.data], {
            type: Mb.mimeType
          }));
          let eb = "image/png";
          "none" !== wb && (jM(wb) ? eb = wb : (eb = "image/png", Hb.Tools.Warn(`Unsupported media type: ${wb}. Exporting texture as PNG.`)));
          const pb = bb.getSize(),
            Vb = await (0, hb.d)(bb),
            gb = await (0, jb.EncodeImageAsync)(Vb, pb.width, pb.height, eb);
          return await this._exportImageAsync(bb.name, gb)
        })(), Mb[eb][wb] = pb), await pb
      }
      async _exportImageAsync(bb, wb) {
        const Mb = this._exporter._images;
        let eb;
        if (this._exporter._shouldUseGlb) {
          eb = {
            name: bb,
            mimeType: wb.type,
            bufferView: void 0
          };
          const Mb = await wb.arrayBuffer(),
            Hb = this._exporter._bufferManager.createBufferView(new Uint8Array(Mb));
          this._exporter._bufferManager.setBufferView(eb, Hb)
        } else {
          const pb = bb.replace(/\.\/|\/|\.\\|\\/g, "_"),
            Vb = function(bb) {
              switch (bb) {
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
            }(wb.type);
          let gb = pb + Vb;
          Mb.some((bb => bb.uri === gb)) && (gb = `${pb}_${Hb.Tools.RandomId()}${Vb}`), eb = {
            name: bb,
            uri: gb
          }, this._exporter._imageData[gb] = wb
        }
        return Mb.push(eb), Mb.length - 1
      }
      _exportTextureInfo(bb, wb, Mb) {
        const eb = this._exporter._textures;
        let Hb = eb.findIndex((Mb => Mb.sampler == wb && Mb.source === bb)); - 1 === Hb && (Hb = eb.length, eb.push({
          source: bb,
          sampler: wb
        }));
        const pb = {
          index: Hb
        };
        return Mb && (pb.texCoord = Mb), pb
      }
      _exportTextureSampler(bb) {
        const wb = this._getTextureSampler(bb),
          Mb = this._exporter._samplers,
          eb = Mb.findIndex((bb => bb.minFilter === wb.minFilter && bb.magFilter === wb.magFilter && bb.wrapS === wb.wrapS && bb.wrapT === wb.wrapT));
        return -1 !== eb ? eb : (Mb.push(wb), Mb.length - 1)
      }
    }
    var ZM = Mb(41740),
      fM = Mb(41871);
    (0, fM.e)();
    var AM = Mb(38294);
    const WM = eb.Matrix.Compose(new eb.YC(-1, 1, 1), eb.Quaternion.Identity(), eb.YC.Zero());

    function JM(bb, wb) {
      if (!(bb instanceof Ob.b)) return !1;
      if (wb) {
        if (!bb.getWorldMatrix().equalsWithEpsilon(eb.Matrix.IdentityReadOnly, AM.e)) return !1
      } else {
        if (!bb.getWorldMatrix().multiplyToRef(WM, eb.TmpVectors.Matrix[0]).equalsWithEpsilon(eb.Matrix.IdentityReadOnly, AM.e)) return !1
      }
      return !(bb instanceof Ub.e && bb.geometry)
    }
    const SM = eb.YC.ZeroReadOnly,
      NM = eb.Quaternion.Identity(),
      vM = eb.YC.OneReadOnly,
      QM = new eb.YC(-1, 1, 1);

    function GM(bb, wb) {
      const {
        byteOffset: Mb,
        byteStride: eb,
        type: Hb,
        normalized: pb
      } = bb, Vb = bb.getSize(), gb = wb.reduce(((bb, wb) => wb.getTotalVertices() > bb ? wb.getTotalVertices() : bb), -Number.MAX_VALUE);
      return {
        byteOffset: Mb,
        byteStride: eb,
        componentCount: Vb,
        type: Hb,
        count: gb * Vb,
        normalized: pb,
        totalVertices: gb,
        kind: bb.getKind()
      }
    }

    function qM(bb) {
      switch (bb) {
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

    function aM(bb) {
      switch (bb) {
        case Ib.f.PositionKind:
        case Ib.f.NormalKind:
        case Ib.f.TangentKind:
        case Ib.f.ColorKind:
        case Ib.f.MatricesIndicesKind:
        case Ib.f.MatricesIndicesExtraKind:
        case Ib.f.MatricesWeightsKind:
        case Ib.f.MatricesWeightsExtraKind:
        case Ib.f.UVKind:
        case Ib.f.UV2Kind:
        case Ib.f.UV3Kind:
        case Ib.f.UV4Kind:
        case Ib.f.UV5Kind:
        case Ib.f.UV6Kind:
          return !0
      }
      return !1
    }

    function iM(bb) {
      const wb = Math.sqrt(bb.x * bb.x + bb.y * bb.y + bb.z * bb.z);
      wb > 0 && (bb.x /= wb, bb.y /= wb, bb.z /= wb)
    }

    function uM(bb) {
      return bb.x *= -1, bb
    }

    function dM(bb) {
      if (bb.x * bb.x + bb.y * bb.y > .5) {
        const wb = Math.abs(bb.x),
          Mb = Math.abs(bb.y);
        if (wb > Mb) {
          const Mb = Math.sign(bb.x);
          bb.x = wb, bb.y *= -Mb, bb.z *= -Mb, bb.w *= Mb
        } else {
          const wb = Math.sign(bb.y);
          bb.x *= -wb, bb.y = Mb, bb.z *= wb, bb.w *= -wb
        }
      } else {
        const wb = Math.abs(bb.z),
          Mb = Math.abs(bb.w);
        if (wb > Mb) {
          const Mb = Math.sign(bb.z);
          bb.x *= -Mb, bb.y *= Mb, bb.z = wb, bb.w *= -Mb
        } else {
          const wb = Math.sign(bb.w);
          bb.x *= wb, bb.y *= -wb, bb.z *= -wb, bb.w = Mb
        }
      }
      return bb
    }

    function PM(bb) {
      bb.twb(-bb.z, bb.w, bb.x, -bb.y)
    }

    function nM(bb, wb) {
      const Mb = eb.YC.FromArrayToRef(wb.translation || [0, 0, 0], 0, eb.TmpVectors.YC[0]),
        Hb = eb.Quaternion.FromArrayToRef(wb.rotation || [0, 0, 0, 1], 0, eb.TmpVectors.Quaternion[0]),
        pb = eb.Matrix.ComposeToRef(vM, Hb, Mb, eb.TmpVectors.Matrix[0]),
        Vb = eb.YC.FromArrayToRef(bb.translation || [0, 0, 0], 0, eb.TmpVectors.YC[2]),
        gb = eb.Quaternion.FromArrayToRef(bb.rotation || [0, 0, 0, 1], 0, eb.TmpVectors.Quaternion[1]),
        lb = eb.Matrix.ComposeToRef(vM, gb, Vb, eb.TmpVectors.Matrix[1]);
      pb.multiplyToRef(lb, lb), lb.decompose(void 0, Hb, Mb), Mb.equalsWithEpsilon(SM, AM.e) ? delete wb.translation : wb.translation = Mb.ppb(), Hb.equalsWithEpsilon(NM, AM.e) ? delete wb.rotation : wb.rotation = Hb.ppb(), wb.scale && delete wb.scale
    }

    function yM(bb, wb) {
      if (!(wb instanceof Ob.b)) return !1;
      if (!(1 === wb.getChildren().length && 0 === bb.getChildren().length && bb.parent === wb)) return !1;
      const Mb = bb.RJ(),
        eb = bb instanceof fM.f && !Mb.useRightHandedSystem ? QM : vM;
      return !!wb.CO.equalsWithEpsilon(eb, AM.e) || (Rb.b.Warn(`Cannot collapse node ${bb.name} into parent node ${wb.name} with modified scaling.`), !1)
    }

    function oM(bb) {
      if (bb instanceof Array) {
        const wb = new Float32Array(bb);
        return new Uint8Array(wb.buffer, wb.byteOffset, wb.byteLength)
      }
      return ArrayBuffer.isView(bb) ? new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength) : new Uint8Array(bb)
    }

    function TM(bb, wb) {
      for (const [Mb, eb] of Object.entries(bb)) {
        const Hb = wb[Mb];
        (Array.isArray(eb) && Array.isArray(Hb) && kM(eb, Hb) || eb === Hb) && delete bb[Mb]
      }
      return bb
    }

    function kM(bb, wb) {
      return bb.length === wb.length && bb.every(((bb, Mb) => bb === wb[Mb]))
    }
    const be = new Map([
      [Int8Array, (bb, wb, Mb) => bb.setInt8(wb, Mb)],
      [Uint8Array, (bb, wb, Mb) => bb.setUint8(wb, Mb)],
      [Uint8ClampedArray, (bb, wb, Mb) => bb.setUint8(wb, Mb)],
      [Int16Array, (bb, wb, Mb) => bb.setInt16(wb, Mb, !0)],
      [Uint16Array, (bb, wb, Mb) => bb.setUint16(wb, Mb, !0)],
      [Int32Array, (bb, wb, Mb) => bb.setInt32(wb, Mb, !0)],
      [Uint32Array, (bb, wb, Mb) => bb.setUint32(wb, Mb, !0)],
      [Float32Array, (bb, wb, Mb) => bb.setFloat32(wb, Mb, !0)],
      [Float64Array, (bb, wb, Mb) => bb.setFloat64(wb, Mb, !0)]
    ]);
    class we {
      writeTypedArray(bb) {
        this._checkGrowBuffer(bb.byteLength);
        const wb = be.get(bb.constructor);
        for (let Mb = 0; Mb < bb.length; Mb++) wb(this._dataView, this._byteOffset, bb[Mb]), this._byteOffset += bb.BYTES_PER_ELEMENT
      }
      constructor(bb) {
        this._data = new Uint8Array(bb), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(bb) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, bb), this._byteOffset++
      }
      writeInt8(bb) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, bb), this._byteOffset++
      }
      writeInt16(bb) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, bb, !0), this._byteOffset += 2
      }
      writeUInt16(bb) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, bb, !0), this._byteOffset += 2
      }
      writeInt32(bb) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, bb, !0), this._byteOffset += 4
      }
      writeUInt32(bb) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, bb, !0), this._byteOffset += 4
      }
      writeFloat32(bb) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, bb, !0), this._byteOffset += 4
      }
      writeFloat64(bb) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, bb, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(bb) {
        const wb = this.byteOffset + bb;
        if (wb > this._data.byteLength) {
          const bb = new Uint8Array(2 * wb);
          bb.set(this._data), this._data = bb, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function Me(bb) {
      return bb % 4 === 0 ? 4 : bb % 2 === 0 ? 2 : 1
    }
    class ee {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(bb) {
        let wb = 0;
        this._bufferViewToData.forEach((bb => {
          wb += bb.byteLength
        }));
        const Mb = new we(wb),
          eb = Array.from(this._bufferViewToData.keys()).sort(((bb, wb) => Me(wb.byteLength) - Me(bb.byteLength)));
        for (const Hb of eb) {
          Hb.byteOffset = Mb.byteOffset, bb.push(Hb);
          const wb = bb.length - 1,
            eb = this.getPropertiesWithBufferView(Hb);
          for (const bb of eb) bb.bufferView = wb;
          Mb.writeTypedArray(this._bufferViewToData.get(Hb)), this._bufferViewToData.delete(Hb)
        }
        return Mb.getOutputData()
      }
      createBufferView(bb, wb) {
        const Mb = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: bb.byteLength,
          byteStride: wb
        };
        return this._bufferViewToData.set(Mb, bb), Mb
      }
      createAccessor(bb, wb, Mb, eb, Hb, pb, Vb) {
        this._verifyBufferView(bb);
        const gb = {
          bufferView: void 0,
          componentType: Mb,
          count: eb,
          type: wb,
          min: pb?.min,
          max: pb?.max,
          normalized: Vb,
          byteOffset: Hb
        };
        return this.setBufferView(gb, bb), this._accessorToBufferView.set(gb, bb), gb
      }
      setBufferView(bb, wb) {
        this._verifyBufferView(wb);
        this.getPropertiesWithBufferView(wb).push(bb)
      }
      removeBufferView(bb) {
        const wb = this.getPropertiesWithBufferView(bb);
        for (const Mb of wb) void 0 !== Mb.bufferView && delete Mb.bufferView;
        this._bufferViewToData.delete(bb), this._bufferViewToProperties.delete(bb), this._accessorToBufferView.forEach(((wb, Mb) => {
          wb === bb && (void 0 !== Mb.byteOffset && delete Mb.byteOffset, this._accessorToBufferView.delete(Mb))
        }))
      }
      getBufferView(bb) {
        const wb = this._accessorToBufferView.get(bb);
        return this._verifyBufferView(wb), wb
      }
      getPropertiesWithBufferView(bb) {
        return this._verifyBufferView(bb), this._bufferViewToProperties.set(bb, this._bufferViewToProperties.get(bb) ?? []), this._bufferViewToProperties.get(bb)
      }
      getData(bb) {
        return this._verifyBufferView(bb), this._bufferViewToData.get(bb)
      }
      _verifyBufferView(bb) {
        if (void 0 === bb || !this._bufferViewToData.has(bb)) throw new Error(`BufferView ${bb} not found in BufferManager.`)
      }
    }
    var He = Mb(41879);
    (0, He.e)();
    var pe = Mb(42124);
    (0, pe.f)();
    var Ve = Mb(41933),
      ge = Mb(42772);
    (0, ge.d)();
    let le = (() => {
      var bb;
      let wb, Mb, eb = [],
        Hb = [],
        pb = [],
        Vb = [];
      return bb = class {
        get influence() {
          return this._influence
        }
        set influence(bb) {
          if (this._influence === bb) return;
          const wb = this._influence;
          this._influence = bb, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === wb || 0 === bb)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(bb) {
          this._animationPropertiesOverride = bb
        }
        constructor(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            gb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = bb, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new wM.b, this._onDataLayoutChanged = new wM.b, this.id = (0, Kb.m)(this, eb, void 0), this.morphTargetManager = ((0, Kb.m)(this, Hb), (0, Kb.m)(this, pb, null)), this._animationPropertiesOverride = ((0, Kb.m)(this, Vb), null), this.id = bb, this.morphTargetManager = gb, this._scene = Mb || Eb.e.LastCreatedScene, this.influence = wb, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        Elb(bb) {
          const wb = this.hasPositions;
          this._positions = bb, wb !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(bb) {
          const wb = this.hasNormals;
          this._normals = bb, wb !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(bb) {
          const wb = this.hasTangents;
          this._tangents = bb, wb !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(bb) {
          const wb = this.hasUVs;
          this._uvs = bb, wb !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(bb) {
          const wb = this.hasUV2s;
          this._uv2s = bb, wb !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(bb) {
          const wb = this.hasColors;
          this._colors = bb, wb !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const wb = xw.d.Clone((() => new bb(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return wb._positions = this._positions, wb._normals = this._normals, wb._tangents = this._tangents, wb._uvs = this._uvs, wb._uv2s = this._uv2s, wb._colors = this._colors, wb
        }
        serialize() {
          const bb = {};
          return bb.name = this.name, bb.influence = this.influence, null != this.id && (bb.id = this.id), bb.uniqueId = this.uniqueId, bb.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (bb.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (bb.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (bb.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (bb.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (bb.colors = Array.prototype.slice.call(this.getColors())), xw.d.AppendSerializedAnimations(this, bb), bb
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(wb, Mb) {
          let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Hb = new bb(wb.name, wb.influence, Mb, eb);
          if (Hb.Elb(wb.positions), null != wb.id && (Hb.id = wb.id), wb.normals && Hb.setNormals(wb.normals), wb.tangents && Hb.setTangents(wb.tangents), wb.uvs && Hb.setUVs(wb.uvs), wb.uv2s && Hb.setUV2s(wb.uv2s), wb.colors && Hb.setColors(wb.colors), wb.animations) {
            for (let bb = 0; bb < wb.animations.length; bb++) {
              const Mb = wb.animations[bb],
                eb = (0, qw.c)("BABYLON.Animation");
              eb && Hb.animations.push(eb.Parse(Mb))
            }
            wb.autoAnimate && Mb && Mb.beginAnimation(Hb, wb.autoAnimateFrom, wb.autoAnimateTo, wb.autoAnimateLoop, wb.autoAnimateSpeed || 1)
          }
          return Hb
        }
        static FromMesh(wb, Mb, eb) {
          Mb || (Mb = wb.name);
          const Hb = new bb(Mb, eb, wb.RJ(), wb.morphTargetManager);
          return Hb.Elb(wb.getVerticesData(vb.i.PositionKind)), wb.isVerticesDataPresent(vb.i.NormalKind) && Hb.setNormals(wb.getVerticesData(vb.i.NormalKind)), wb.isVerticesDataPresent(vb.i.TangentKind) && Hb.setTangents(wb.getVerticesData(vb.i.TangentKind)), wb.isVerticesDataPresent(vb.i.UVKind) && Hb.setUVs(wb.getVerticesData(vb.i.UVKind)), wb.isVerticesDataPresent(vb.i.UV2Kind) && Hb.setUV2s(wb.getVerticesData(vb.i.UV2Kind)), wb.isVerticesDataPresent(vb.i.ColorKind) && Hb.setColors(wb.getVerticesData(vb.i.ColorKind)), Hb
        }
      }, (() => {
        const gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [(0, rb.E)()], Mb = [(0, rb.E)()], (0, Kb.i)(null, null, wb, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: bb => "id" in bb,
            get: bb => bb.id,
            set: (bb, wb) => {
              bb.id = wb
            }
          },
          metadata: gb
        }, eb, Hb), (0, Kb.i)(null, null, Mb, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: bb => "morphTargetManager" in bb,
            get: bb => bb.morphTargetManager,
            set: (bb, wb) => {
              bb.morphTargetManager = wb
            }
          },
          metadata: gb
        }, pb, Vb), gb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gb
        })
      })(), bb
    })();
    var Le, Ie = Mb(42839),
      Oe = Mb(41931);
    ! function(bb) {
      bb[bb.INTANGENT = 0] = "INTANGENT", bb[bb.OUTTANGENT = 1] = "OUTTANGENT"
    }(Le || (Le = {}));
    class Ue {
      static _IsTransformable(bb) {
        return bb && (bb instanceof Ob.b || bb instanceof He.c || bb instanceof Oe.d)
      }
      static _CreateNodeAnimation(bb, wb, Mb, eb, pb) {
        if (this._IsTransformable(bb)) {
          const Vb = [],
            gb = [],
            lb = wb.getKeys(),
            Lb = Ue._CalculateMinMaxKeyFrames(lb),
            Ib = Ue._DeduceInterpolation(lb, Mb, eb),
            Ob = Ib.interpolationType,
            Ub = Ib.shouldBakeAnimation;
          if (Ub ? Ue._CreateBakedAnimation(bb, wb, Mb, Lb.min, Lb.max, wb.framePerSecond, pb, Vb, gb, Lb, eb) : "LINEAR" === Ob || "STEP" === Ob ? Ue._CreateLinearOrStepAnimation(bb, wb, Mb, Vb, gb, eb) : "CUBICSPLINE" === Ob ? Ue._CreateCubicSplineAnimation(bb, wb, Mb, Vb, gb, eb) : Ue._CreateBakedAnimation(bb, wb, Mb, Lb.min, Lb.max, wb.framePerSecond, pb, Vb, gb, Lb, eb), Vb.length && gb.length) {
            return {
              inputs: Vb,
              outputs: gb,
              samplerInterpolation: Ob,
              inputsMin: Ub ? Lb.min : Hb.Tools.FloatRound(Lb.min / wb.framePerSecond),
              inputsMax: Ub ? Lb.max : Hb.Tools.FloatRound(Lb.max / wb.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(bb) {
        let wb = null,
          Mb = "VEC3",
          eb = !1;
        const pb = bb.targetProperty.split(".");
        switch (pb[0]) {
          case "CO":
            wb = "scale";
            break;
          case "position":
            wb = "translation";
            break;
          case "rotation":
            Mb = "VEC4", wb = "rotation";
            break;
          case "rotationQuaternion":
            Mb = "VEC4", eb = !0, wb = "rotation";
            break;
          case "influence":
            Mb = "SCALAR", wb = "weights";
            break;
          default:
            Hb.Tools.Error(`Unsupported animatable property ${pb[0]}`)
        }
        return wb ? {
          animationChannelTargetPath: wb,
          dataAccessorType: Mb,
          useQuaternion: eb
        } : (Hb.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib) {
        let Ob;
        if (Ue._IsTransformable(bb) && bb.animations)
          for (const Ub of bb.animations) {
            if (Ib && !Ib(Ub)) continue;
            const Hb = Ue._DeduceAnimationInfo(Ub);
            Hb && (Ob = {
              name: Ub.name,
              samplers: [],
              channels: []
            }, Ue._AddAnimation(`${Ub.name}`, Ub.hasRunningRuntimeAnimations ? wb : Ob, bb, Ub, Hb.dataAccessorType, Hb.animationChannelTargetPath, eb, pb, Vb, gb, Hb.useQuaternion, lb, Lb), Ob.samplers.length && Ob.channels.length && Mb.push(Ob))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib) {
        let Ob;
        if (bb instanceof Ie.e) {
          const Hb = bb.morphTargetManager;
          if (Hb)
            for (let Ub = 0; Ub < Hb.numTargets; ++Ub) {
              const tb = Hb.getTarget(Ub);
              for (const Cb of tb.animations) {
                if (Ib && !Ib(Cb)) continue;
                const tb = new ge.b(`${Cb.name}`, "influence", Cb.framePerSecond, Cb.dataType, Cb.sM, Cb.enableBlending),
                  Eb = [],
                  Fb = Cb.getKeys();
                for (let bb = 0; bb < Fb.length; ++bb) {
                  const wb = Fb[bb];
                  for (let bb = 0; bb < Hb.numTargets; ++bb) bb == Ub ? Eb.push(wb) : Eb.push({
                    frame: wb.frame,
                    value: 0
                  })
                }
                tb.setKeys(Eb, !0);
                const Bb = Ue._DeduceAnimationInfo(tb);
                Bb && (Ob = {
                  name: tb.name,
                  samplers: [],
                  channels: []
                }, Ue._AddAnimation(Cb.name, Cb.hasRunningRuntimeAnimations ? wb : Ob, bb, tb, Bb.dataAccessorType, Bb.animationChannelTargetPath, eb, pb, Vb, gb, Bb.useQuaternion, lb, Lb, Hb.numTargets), Ob.samplers.length && Ob.channels.length && Mb.push(Ob))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb) {
        let Ib;
        if (bb.animationGroups) {
          const Ob = bb.animationGroups;
          for (const Ub of Ob) {
            const Ob = new Map,
              tb = new Map,
              Cb = new Set,
              Eb = Ub.to - Ub.from;
            Ib = {
              name: Ub.name,
              channels: [],
              samplers: []
            };
            for (let wb = 0; wb < Ub.targetedAnimations.length; ++wb) {
              const Lb = Ub.targetedAnimations[wb],
                Eb = Lb.target,
                Fb = Lb.animation;
              if (lb && !lb(Fb)) continue;
              const Bb = gb.has(Eb);
              if (this._IsTransformable(Eb) || 1 === Eb.length && this._IsTransformable(Eb[0])) {
                const bb = Ue._DeduceAnimationInfo(Lb.animation);
                if (bb) {
                  const wb = this._IsTransformable(Eb) ? Eb : this._IsTransformable(Eb[0]) ? Eb[0] : null;
                  wb && Ue._AddAnimation(`${Fb.name}`, Ib, wb, Fb, bb.dataAccessorType, bb.animationChannelTargetPath, Mb, eb, Hb, pb, bb.useQuaternion, Vb, Bb)
                }
              } else if (Eb instanceof le || 1 === Eb.length && Eb[0] instanceof le) {
                if (Ue._DeduceAnimationInfo(Lb.animation)) {
                  const wb = Eb instanceof le ? Eb : Eb[0];
                  if (wb) {
                    const Mb = bb.morphTargetManagers.find((bb => {
                      for (let Mb = 0; Mb < bb.numTargets; ++Mb)
                        if (bb.getTarget(Mb) === wb) return !0;
                      return !1
                    }));
                    if (Mb) {
                      const eb = bb.meshes.find((bb => bb.morphTargetManager === Mb));
                      eb && (Ob.has(eb) || Ob.set(eb, new Map), Ob.get(eb)?.set(wb, Fb), Cb.add(eb), tb.set(eb, Fb))
                    }
                  }
                }
              }
            }
            Cb.forEach((bb => {
              const wb = bb.morphTargetManager;
              let gb = null;
              const lb = [],
                Lb = tb.get(bb).getKeys(),
                Cb = Lb.length;
              for (let Mb = 0; Mb < Cb; ++Mb)
                for (let eb = 0; eb < wb.numTargets; ++eb) {
                  const Hb = wb.getTarget(eb),
                    pb = Ob.get(bb);
                  if (pb) {
                    const wb = pb.get(Hb);
                    wb ? (gb || (gb = new ge.b(`${Ub.name}_${bb.name}_MorphWeightAnimation`, "influence", wb.framePerSecond, ge.b.ANIMATIONTYPE_FLOAT, wb.sM, wb.enableBlending)), lb.push(wb.getKeys()[Mb])) : lb.push({
                      frame: Ub.from + Eb / Cb * Mb,
                      value: Hb.influence,
                      inTangent: Lb[0].inTangent ? 0 : void 0,
                      outTangent: Lb[0].outTangent ? 0 : void 0
                    })
                  }
                }
              gb.setKeys(lb, !0);
              const Fb = Ue._DeduceAnimationInfo(gb);
              Fb && Ue._AddAnimation(`${Ub.name}_${bb.name}_MorphWeightAnimation`, Ib, bb, gb, Fb.dataAccessorType, Fb.animationChannelTargetPath, Mb, eb, Hb, pb, Fb.useQuaternion, Vb, !1, wb?.numTargets)
            })), Ib.channels.length && Ib.samplers.length && (Lb?.set(Ub, wb.length), wb.push(Ib))
          }
        }
      }
      static _AddAnimation(bb, wb, Mb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb) {
        const Eb = Ue._CreateNodeAnimation(Mb, Hb, Vb, Ob, Ub);
        let Fb, Bb, sb, mb, hb, zb;
        if (Eb) {
          if (Cb) {
            let bb, wb = 0;
            const Mb = [];
            for (; Eb.inputs.length > 0;) bb = Eb.inputs.shift(), wb % Cb == 0 && Mb.push(bb), wb++;
            Eb.inputs = Mb
          }
          const bb = gb.get(Mb),
            Hb = new Float32Array(Eb.inputs);
          Fb = lb.createBufferView(Hb), Bb = lb.createAccessor(Fb, "SCALAR", 5126, Eb.inputs.length, void 0, {
            min: [Eb.inputsMin],
            max: [Eb.inputsMax]
          }), Ib.push(Bb), sb = Ib.length - 1;
          const Lb = new eb.Quaternion,
            Ob = new eb.YC,
            Ub = new eb.YC,
            Xb = Mb instanceof He.c,
            xb = qM(pb),
            jb = new Float32Array(Eb.outputs.length * xb);
          Eb.outputs.forEach((function(bb, wb) {
            let Mb = bb;
            switch (Vb) {
              case "translation":
                tb && (eb.YC.FromArrayToRef(bb, 0, Ub), uM(Ub), Ub.toArray(Mb));
                break;
              case "rotation":
                4 === bb.length ? eb.Quaternion.FromArrayToRef(bb, 0, Lb) : (Mb = new Array(4), eb.YC.FromArrayToRef(bb, 0, Ob), eb.Quaternion.FromEulerVectorToRef(Ob, Lb)), tb && (dM(Lb), Xb && PM(Lb)), Lb.toArray(Mb)
            }
            jb.set(Mb, wb * xb)
          })), Fb = lb.createBufferView(jb), Bb = lb.createAccessor(Fb, pb, 5126, Eb.outputs.length), Ib.push(Bb), mb = Ib.length - 1, hb = {
            interpolation: Eb.samplerInterpolation,
            input: sb,
            output: mb
          }, wb.samplers.push(hb), zb = {
            sampler: wb.samplers.length - 1,
            target: {
              node: bb,
              path: Vb
            }
          }, wb.channels.push(zb)
        }
      }
      static _CreateBakedAnimation(bb, wb, Mb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub) {
        let tb;
        const Cb = eb.Quaternion.Identity();
        let Eb, Fb, Bb, sb, mb, hb = null,
          zb = null;
        Ob.min = Hb.Tools.FloatRound(pb / gb);
        const Xb = wb.getKeys();
        for (let eb = 0, xb = Xb.length; eb < xb; ++eb) {
          if (Fb = Xb[eb], eb + 1 < xb)
            if (Bb = Xb[eb + 1], Fb.value.equals && Fb.value.equals(Bb.value) || Fb.value === Bb.value) {
              if (0 !== eb) continue;
              mb = Fb.frame
            } else mb = Bb.frame;
          else {
            if (sb = Xb[eb - 1], Fb.value.equals && Fb.value.equals(sb.value) || Fb.value === sb.value) continue;
            mb = Vb
          }
          if (mb)
            for (let eb = Fb.frame; eb <= mb; eb += lb) {
              if (Eb = Hb.Tools.FloatRound(eb / gb), Eb === hb) continue;
              hb = Eb, zb = Eb;
              const pb = {
                key: 0,
                repeatCount: 0,
                sM: wb.sM
              };
              tb = wb._interpolate(eb, pb), Ue._SetInterpolatedValue(bb, tb, Eb, wb, Mb, Cb, Lb, Ib, Ub)
            }
        }
        zb && (Ob.max = zb)
      }
      static _ConvertFactorToVector3OrQuaternion(bb, wb, Mb, pb, Vb) {
        const gb = Ue._GetBasePositionRotationOrScale(wb, pb, Vb),
          lb = Mb.targetProperty.split("."),
          Lb = lb ? lb[1] : "",
          Ib = Vb ? eb.Quaternion.FromArray(gb).normalize() : eb.YC.FromArray(gb);
        switch (Lb) {
          case "x":
          case "y":
          case "z":
            Ib[Lb] = bb;
            break;
          case "w":
            Ib.w = bb;
            break;
          default:
            Hb.Tools.Error(`glTFAnimation: Unsupported component name "${Lb}"!`)
        }
        return Ib
      }
      static _SetInterpolatedValue(bb, wb, Mb, Hb, pb, Vb, gb, lb, Lb) {
        let Ib;
        gb.push(Mb), "weights" !== pb ? (Hb.dataType === ge.b.ANIMATIONTYPE_FLOAT && (wb = this._ConvertFactorToVector3OrQuaternion(wb, bb, Hb, pb, Lb)), "rotation" === pb ? (Lb ? Vb = wb : (Ib = wb, eb.Quaternion.RotationYawPitchRollToRef(Ib.y, Ib.x, Ib.z, Vb)), lb.push(Vb.ppb())) : (Ib = wb, lb.push(Ib.ppb()))) : lb.push([wb])
      }
      static _CreateLinearOrStepAnimation(bb, wb, Mb, eb, Hb, pb) {
        for (const Vb of wb.getKeys()) eb.push(Vb.frame / wb.framePerSecond), Ue._AddKeyframeValue(Vb, wb, Hb, Mb, bb, pb)
      }
      static _CreateCubicSplineAnimation(bb, wb, Mb, eb, Hb, pb) {
        wb.getKeys().forEach((function(Vb) {
          eb.push(Vb.frame / wb.framePerSecond), Ue._AddSplineTangent(Le.INTANGENT, Hb, Mb, "CUBICSPLINE", Vb, pb), Ue._AddKeyframeValue(Vb, wb, Hb, Mb, bb, pb), Ue._AddSplineTangent(Le.OUTTANGENT, Hb, Mb, "CUBICSPLINE", Vb, pb)
        }))
      }
      static _GetBasePositionRotationOrScale(bb, wb, Mb) {
        let Hb;
        if ("rotation" === wb)
          if (Mb) {
            Hb = (bb.rotationQuaternion ?? eb.Quaternion.Identity()).ppb()
          } else {
            Hb = (bb.rotation ?? eb.YC.Zero()).ppb()
          }
        else if ("translation" === wb) {
          Hb = (bb.position ?? eb.YC.Zero()).ppb()
        } else {
          Hb = (bb.CO ?? eb.YC.One()).ppb()
        }
        return Hb
      }
      static _AddKeyframeValue(bb, wb, Mb, pb, Vb, gb) {
        let lb;
        const Lb = wb.dataType;
        if (Lb === ge.b.ANIMATIONTYPE_VECTOR3) {
          let wb = bb.value.ppb();
          if ("rotation" === pb) {
            const bb = eb.YC.FromArray(wb);
            wb = eb.Quaternion.RotationYawPitchRoll(bb.y, bb.x, bb.z).ppb()
          }
          Mb.push(wb)
        } else if (Lb === ge.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === pb) Mb.push([bb.value]);
          else if (lb = this._ConvertFactorToVector3OrQuaternion(bb.value, Vb, wb, pb, gb), lb) {
            if ("rotation" === pb) {
              const bb = gb ? lb : eb.Quaternion.RotationYawPitchRoll(lb.y, lb.x, lb.z).normalize();
              Mb.push(bb.ppb())
            }
            Mb.push(lb.ppb())
          }
        } else Lb === ge.b.ANIMATIONTYPE_QUATERNION ? Mb.push(bb.value.normalize().ppb()) : Hb.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(bb, wb, Mb) {
        let eb, Hb, pb = !1;
        if ("rotation" === wb && !Mb) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let Vb = 0, gb = bb.length; Vb < gb; ++Vb)
          if (Hb = bb[Vb], Hb.inTangent || Hb.outTangent)
            if (eb) {
              if ("CUBICSPLINE" !== eb) {
                eb = "LINEAR", pb = !0;
                break
              }
            } else eb = "CUBICSPLINE";
        else if (eb) {
          if ("CUBICSPLINE" === eb || Hb.interpolation && 1 === Hb.interpolation && "STEP" !== eb) {
            eb = "LINEAR", pb = !0;
            break
          }
        } else eb = Hb.interpolation && 1 === Hb.interpolation ? "STEP" : "LINEAR";
        return eb || (eb = "LINEAR"), {
          interpolationType: eb,
          shouldBakeAnimation: pb
        }
      }
      static _AddSplineTangent(bb, wb, Mb, Hb, pb, Vb) {
        let gb;
        const lb = bb === Le.INTANGENT ? pb.inTangent : pb.outTangent;
        if ("CUBICSPLINE" === Hb) {
          if ("rotation" === Mb)
            if (lb)
              if (Vb) gb = lb.ppb();
              else {
                const bb = lb;
                gb = eb.Quaternion.RotationYawPitchRoll(bb.y, bb.x, bb.z).ppb()
              }
          else gb = [0, 0, 0, 0];
          else gb = "weights" === Mb ? lb ? [lb] : [0] : lb ? lb.ppb() : [0, 0, 0];
          wb.push(gb)
        }
      }
      static _CalculateMinMaxKeyFrames(bb) {
        let wb = 1 / 0,
          Mb = -1 / 0;
        return bb.forEach((function(bb) {
          wb = Math.min(wb, bb.frame), Mb = Math.max(Mb, bb.frame)
        })), {
          min: wb,
          max: Mb
        }
      }
    }

    function te(bb, wb, Mb, pb, Vb, gb) {
      const lb = {
          attributes: {},
          influence: bb.influence,
          name: bb.name
        },
        Lb = wb.geometry;
      if (!Lb) return Hb.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), lb;
      const Ob = gb ? -1 : 1,
        Ub = eb.YC.Zero();
      let tb, Cb;
      if (bb.hasPositions) {
        const pb = bb.getPositions(),
          gb = Lb.getVerticesData(Ib.f.PositionKind);
        if (gb) {
          const bb = new Float32Array(gb.length),
            wb = [1 / 0, 1 / 0, 1 / 0],
            Hb = [-1 / 0, -1 / 0, -1 / 0];
          Cb = gb.length / 3, tb = 0;
          for (let Mb = tb; Mb < Cb; ++Mb) {
            const Vb = eb.YC.FromArray(gb, 3 * Mb);
            eb.YC.FromArray(pb, 3 * Mb).subtractToRef(Vb, Ub), Ub.x *= Ob, wb[0] = Math.min(wb[0], Ub.x), Hb[0] = Math.max(Hb[0], Ub.x), wb[1] = Math.min(wb[1], Ub.y), Hb[1] = Math.max(Hb[1], Ub.y), wb[2] = Math.min(wb[2], Ub.z), Hb[2] = Math.max(Hb[2], Ub.z), bb[3 * Mb] = Ub.x, bb[3 * Mb + 1] = Ub.y, bb[3 * Mb + 2] = Ub.z
          }
          const Lb = Mb.createBufferView(bb, 12),
            Ib = Mb.createAccessor(Lb, "VEC3", 5126, pb.length / 3, 0, {
              min: wb,
              max: Hb
            });
          Vb.push(Ib), lb.attributes.POSITION = Vb.length - 1
        } else Hb.Tools.Warn(`Morph target positions for mesh ${wb.name} were not exported. Mesh does not have position vertex data`)
      }
      if (bb.hasNormals) {
        const pb = bb.getNormals(),
          gb = Lb.getVerticesData(Ib.f.NormalKind);
        if (gb) {
          const bb = new Float32Array(gb.length);
          Cb = gb.length / 3, tb = 0;
          for (let Mb = tb; Mb < Cb; ++Mb) {
            const wb = eb.YC.FromArray(gb, 3 * Mb).normalize();
            eb.YC.FromArray(pb, 3 * Mb).normalize().subtractToRef(wb, Ub), bb[3 * Mb] = Ub.x * Ob, bb[3 * Mb + 1] = Ub.y, bb[3 * Mb + 2] = Ub.z
          }
          const wb = Mb.createBufferView(bb, 12),
            Hb = Mb.createAccessor(wb, "VEC3", 5126, pb.length / 3, 0);
          Vb.push(Hb), lb.attributes.NORMAL = Vb.length - 1
        } else Hb.Tools.Warn(`Morph target normals for mesh ${wb.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (bb.hasTangents) {
        const pb = bb.getTangents(),
          gb = Lb.getVerticesData(Ib.f.TangentKind);
        if (gb) {
          Cb = gb.length / 4;
          const bb = new Float32Array(3 * Cb);
          tb = 0;
          for (let Mb = tb; Mb < Cb; ++Mb) {
            const wb = eb.YC.FromArray(gb, 4 * Mb);
            iM(wb);
            const Hb = eb.YC.FromArray(pb, 3 * Mb);
            iM(Hb), Hb.subtractToRef(wb, Ub), bb[3 * Mb] = Ub.x * Ob, bb[3 * Mb + 1] = Ub.y, bb[3 * Mb + 2] = Ub.z
          }
          const wb = Mb.createBufferView(bb, 12),
            Hb = Mb.createAccessor(wb, "VEC3", 5126, Cb, 0);
          Vb.push(Hb), lb.attributes.TANGENT = Vb.length - 1
        } else Hb.Tools.Warn(`Morph target tangents for mesh ${wb.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (bb.hasColors) {
        const pb = bb.getColors(),
          gb = Lb.getVerticesData(Ib.f.ColorKind),
          Ob = Lb.getVertexBuffer(Ib.f.ColorKind);
        if (gb && Ob) {
          const bb = Ob.getSize();
          Cb = gb.length / bb;
          const wb = new Float32Array(Cb * bb);
          tb = 0;
          for (let Mb = tb; Mb < Cb; ++Mb)
            if (3 === bb) {
              const Hb = eb.YC.FromArray(gb, Mb * bb);
              eb.YC.FromArray(pb, Mb * bb).subtractToRef(Hb, Ub), wb[3 * Mb] = Ub.x, wb[3 * Mb + 1] = Ub.y, wb[3 * Mb + 2] = Ub.z
            } else if (4 === bb) {
            const Hb = new eb.Vector4,
              Vb = eb.Vector4.FromArray(gb, Mb * bb);
            eb.Vector4.FromArray(pb, Mb * bb).subtractToRef(Vb, Hb), wb[4 * Mb] = Hb.x, wb[4 * Mb + 1] = Hb.y, wb[4 * Mb + 2] = Hb.z, wb[4 * Mb + 3] = Hb.w
          } else Hb.Tools.Warn(`Unsupported number of components for color attribute: ${bb}`);
          const Lb = Mb.createBufferView(wb, 4 * bb),
            Ib = Mb.createAccessor(Lb, 3 === bb ? "VEC3" : "VEC4", 5126, Cb, 0);
          Vb.push(Ib), lb.attributes.COLOR_0 = Vb.length - 1
        } else Hb.Tools.Warn(`Morph target colors for mesh ${wb.name} were not exported. Mesh does not have colors vertex data`)
      }
      return lb
    }
    var Ce = Mb(53766);
    class Ee {}
    Ee.DEFAULT_COLOR = ub.e.White(), Ee.DEFAULT_WIDTH_ATTENUATED = 1, Ee.DEFAULT_WIDTH = .1;
    var Fe = Mb(42763);
    class Be {
      constructor(bb) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = bb
      }
      moveTo(bb, wb) {
        this._currentPath = new Fe.i(bb, wb), this._tempPaths.push(this._currentPath)
      }
      lineTo(bb, wb) {
        this._currentPath.addLineTo(bb, wb)
      }
      quadraticCurveTo(bb, wb, Mb, eb) {
        this._currentPath.addQuadraticCurveTo(bb, wb, Mb, eb, this._resolution)
      }
      bezierCurveTo(bb, wb, Mb, eb, Hb, pb) {
        this._currentPath.addBezierCurveTo(bb, wb, Mb, eb, Hb, pb, this._resolution)
      }
      extractHoles() {
        for (const bb of this._tempPaths) bb.area() > 0 ? this._holes.push(bb) : this._paths.push(bb);
        if (!this._paths.length && this._holes.length) {
          const bb = this._holes;
          this._holes = this._paths, this._paths = bb
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

    function se(bb, wb, Mb, eb, Hb, pb) {
      const Vb = pb.glyphs[bb] || pb.glyphs["?"];
      if (!Vb) return null;
      const gb = new Be(Hb);
      if (Vb.o) {
        const bb = Vb.o.split(" ");
        for (let Hb = 0, pb = bb.length; Hb < pb;) {
          switch (bb[Hb++]) {
            case "m": {
              const pb = parseInt(bb[Hb++]) * wb + Mb,
                Vb = parseInt(bb[Hb++]) * wb + eb;
              gb.moveTo(pb, Vb);
              break
            }
            case "l": {
              const pb = parseInt(bb[Hb++]) * wb + Mb,
                Vb = parseInt(bb[Hb++]) * wb + eb;
              gb.lineTo(pb, Vb);
              break
            }
            case "q": {
              const pb = parseInt(bb[Hb++]) * wb + Mb,
                Vb = parseInt(bb[Hb++]) * wb + eb,
                lb = parseInt(bb[Hb++]) * wb + Mb,
                Lb = parseInt(bb[Hb++]) * wb + eb;
              gb.quadraticCurveTo(lb, Lb, pb, Vb);
              break
            }
            case "b": {
              const pb = parseInt(bb[Hb++]) * wb + Mb,
                Vb = parseInt(bb[Hb++]) * wb + eb,
                lb = parseInt(bb[Hb++]) * wb + Mb,
                Lb = parseInt(bb[Hb++]) * wb + eb,
                Ib = parseInt(bb[Hb++]) * wb + Mb,
                Ob = parseInt(bb[Hb++]) * wb + eb;
              gb.bezierCurveTo(lb, Lb, Ib, Ob, pb, Vb);
              break
            }
          }
        }
      }
      return gb.extractHoles(), {
        offsetX: Vb.ha * wb,
        shapePath: gb
      }
    }

    function me(bb, wb, Mb, eb) {
      const Hb = Array.from(bb),
        pb = wb / eb.resolution,
        Vb = (eb.boundingBox.yMax - eb.boundingBox.yMin + eb.underlineThickness) * pb,
        gb = [];
      let lb = 0,
        Lb = 0;
      for (let Ib = 0; Ib < Hb.length; Ib++) {
        const bb = Hb[Ib];
        if ("\n" === bb) lb = 0, Lb -= Vb;
        else {
          const wb = se(bb, pb, lb, Lb, Mb, eb);
          wb && (lb += wb.offsetX, gb.push(wb.shapePath))
        }
      }
      return gb
    }
    class he {
      static ConvertPoints(bb, wb) {
        if (bb.length && Array.isArray(bb) && "number" === typeof bb[0]) return [bb];
        if (bb.length && Array.isArray(bb[0]) && "number" === typeof bb[0][0]) return bb;
        if (bb.length && !Array.isArray(bb[0]) && bb[0] instanceof Nb.o) {
          const wb = [];
          for (let Mb = 0; Mb < bb.length; Mb++) {
            const eb = bb[Mb];
            wb.push(eb.x, eb.y, eb.z)
          }
          return [wb]
        }
        if (bb.length > 0 && Array.isArray(bb[0]) && bb[0].length > 0 && bb[0][0] instanceof Nb.o) {
          const wb = [],
            Mb = bb;
          for (const bb of Mb) wb.push(bb.flatMap((bb => [bb.x, bb.y, bb.z])));
          return wb
        }
        if (bb instanceof Float32Array) {
          if (wb?.floatArrayStride) {
            const Mb = [],
              eb = 3 * wb.floatArrayStride;
            for (let wb = 0; wb < bb.length; wb += eb) {
              const Hb = new Array(eb);
              for (let Mb = 0; Mb < eb; Mb++) Hb[Mb] = bb[wb + Mb];
              Mb.push(Hb)
            }
            return Mb
          }
          return [Array.from(bb)]
        }
        if (bb.length && bb[0] instanceof Float32Array) {
          const wb = [];
          for (const Mb of bb) wb.push(Array.from(Mb));
          return wb
        }
        return []
      }
      static OmitZeroLengthPredicate(bb, wb, Mb) {
        const eb = [];
        return wb.subtract(bb).lengthSquared() > 0 && eb.push([bb, wb]), Mb.subtract(wb).lengthSquared() > 0 && eb.push([wb, Mb]), bb.subtract(Mb).lengthSquared() > 0 && eb.push([Mb, bb]), 0 === eb.length ? null : eb
      }
      static OmitDuplicatesPredicate(bb, wb, Mb, eb) {
        const Hb = [];
        return he._SearchInPoints(bb, wb, eb) || Hb.push([bb, wb]), he._SearchInPoints(wb, Mb, eb) || Hb.push([wb, Mb]), he._SearchInPoints(Mb, bb, eb) || Hb.push([Mb, bb]), 0 === Hb.length ? null : Hb
      }
      static _SearchInPoints(bb, wb, Mb) {
        for (const eb of Mb)
          for (let Mb = 0; Mb < eb.length; Mb++)
            if (eb[Mb]?.equals(bb) && (eb[Mb + 1]?.equals(wb) || eb[Mb - 1]?.equals(wb))) return !0;
        return !1
      }
      static MeshesToLines(bb, wb) {
        const Mb = [];
        for (let eb = 0; eb < bb.length; eb++) {
          const Hb = bb[eb],
            pb = Hb.getVerticesData(vb.i.PositionKind),
            Vb = Hb.ipb();
          if (pb && Vb)
            for (let bb = 0, gb = 0; bb < Vb.length; bb++) {
              const lb = 3 * Vb[gb++],
                Lb = 3 * Vb[gb++],
                Ib = 3 * Vb[gb++],
                Ob = new Nb.o(pb[lb], pb[lb + 1], pb[lb + 2]),
                Ub = new Nb.o(pb[Lb], pb[Lb + 1], pb[Lb + 2]),
                tb = new Nb.o(pb[Ib], pb[Ib + 1], pb[Ib + 2]);
              if (wb) {
                const gb = wb(Ob, Ub, tb, Mb, bb, lb, Hb, eb, pb, Vb);
                if (gb)
                  for (const bb of gb) Mb.push(bb)
              } else Mb.push([Ob, Ub], [Ub, tb], [tb, Ob])
            }
        }
        return Mb
      }
      static ToVector3Array(bb) {
        if (Array.isArray(bb[0])) {
          const wb = [],
            Mb = bb;
          for (const bb of Mb) {
            const Mb = [];
            for (let wb = 0; wb < bb.length; wb += 3) Mb.push(new Nb.o(bb[wb], bb[wb + 1], bb[wb + 2]));
            wb.push(Mb)
          }
          return wb
        }
        const wb = bb,
          Mb = [];
        for (let eb = 0; eb < wb.length; eb += 3) Mb.push(new Nb.o(wb[eb], wb[eb + 1], wb[eb + 2]));
        return Mb
      }
      static ToNumberArray(bb) {
        return bb.flatMap((bb => [bb.x, bb.y, bb.z]))
      }
      static GetPointsCountInfo(bb) {
        const wb = new Array(bb.length);
        let Mb = 0;
        for (let eb = bb.length; eb--;) wb[eb] = bb[eb].length / 3, Mb += wb[eb];
        return {
          total: Mb,
          counts: wb
        }
      }
      static GetLineLength(bb) {
        if (0 === bb.length) return 0;
        let wb;
        wb = "number" === typeof bb[0] ? he.ToVector3Array(bb) : bb;
        const Mb = Nb.j.YC[0];
        let eb = 0;
        for (let Hb = 0; Hb < wb.length - 1; Hb++) {
          const bb = wb[Hb];
          eb += wb[Hb + 1].subtractToRef(bb, Mb).length()
        }
        return eb
      }
      static GetLineLengthArray(bb, wb) {
        const Mb = wb ? new Float32Array(wb, 0, bb.length / 3) : new Float32Array(bb.length / 3);
        let eb = 0;
        for (let Hb = 0, pb = bb.length / 3 - 1; Hb < pb; Hb++) {
          let wb = bb[3 * Hb + 0],
            pb = bb[3 * Hb + 1],
            Vb = bb[3 * Hb + 2];
          wb -= bb[3 * Hb + 3], pb -= bb[3 * Hb + 4], Vb -= bb[3 * Hb + 5];
          eb += Math.sqrt(wb * wb + pb * pb + Vb * Vb), Mb[Hb + 1] = eb
        }
        return Mb
      }
      static SegmentizeSegmentByCount(bb, wb, Mb) {
        const eb = [],
          Hb = wb.subtract(bb),
          pb = Nb.j.YC[0];
        pb.Jbb(Mb);
        const Vb = Nb.j.YC[1];
        Hb.divideToRef(pb, Vb);
        let gb = bb.clone();
        eb.push(gb);
        for (let lb = 0; lb < Mb; lb++) gb = gb.clone(), eb.push(gb.addInPlace(Vb));
        return eb
      }
      static SegmentizeLineBySegmentLength(bb, wb) {
        const Mb = bb[0] instanceof Nb.o ? he.GetLineSegments(bb) : "number" === typeof bb[0] ? he.GetLineSegments(he.ToVector3Array(bb)) : bb,
          eb = [];
        for (const Hb of Mb)
          if (Hb.length > wb) {
            const bb = he.SegmentizeSegmentByCount(Hb.point1, Hb.point2, Math.ceil(Hb.length / wb));
            for (const wb of bb) eb.push(wb)
          } else eb.push(Hb.point1), eb.push(Hb.point2);
        return eb
      }
      static SegmentizeLineBySegmentCount(bb, wb) {
        const Mb = "number" === typeof bb[0] ? he.ToVector3Array(bb) : bb,
          eb = he.GetLineLength(Mb) / wb;
        return he.SegmentizeLineBySegmentLength(Mb, eb)
      }
      static GetLineSegments(bb) {
        const wb = [];
        for (let Mb = 0; Mb < bb.length - 1; Mb++) {
          const eb = bb[Mb],
            Hb = bb[Mb + 1],
            pb = Hb.subtract(eb).length();
          wb.push({
            point1: eb,
            point2: Hb,
            length: pb
          })
        }
        return wb
      }
      static GetMinMaxSegmentLength(bb) {
        const wb = he.GetLineSegments(bb).sort((bb => bb.length));
        return {
          min: wb[0].length,
          max: wb[wb.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Hb = wb * Mb;
        let pb = 0,
          Vb = 0;
        const gb = bb.length;
        for (let Lb = 0; Lb < gb; Lb++) {
          if (Hb <= pb + bb[Lb].length) {
            Vb = Lb;
            break
          }
          pb += bb[Lb].length
        }
        const lb = (Hb - pb) / bb[Vb].length;
        return bb[Vb].point2.subtractToRef(bb[Vb].point1, Nb.j.YC[0]), Nb.j.YC[0].scaleToRef(lb, Nb.j.YC[1]), eb || Nb.j.YC[1].addInPlace(bb[Vb].point1), Nb.j.YC[1].clone()
      }
      static GetCircleLinePoints(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb,
          Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / wb;
        const pb = [];
        for (let Vb = 0; Vb <= wb; Vb++) pb.push(new Nb.o(Math.cos(Vb * Hb) * bb, Math.sin(Vb * Hb) * eb, Mb));
        return pb
      }
      static GetBezierLinePoints(bb, wb, Mb, eb) {
        return Fe.h.CreateQuadraticBezier(bb, wb, Mb, eb).getPoints().flatMap((bb => [bb.x, bb.y, bb.z]))
      }
      static GetArrowCap(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [bb.clone(), bb.add(wb.multiplyByFloats(Mb, Mb, Mb))],
          widths: [eb, Hb, pb, Vb]
        }
      }
      static GetPointsFromText(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          pb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const Vb = [],
          gb = me(bb, wb, Mb, eb);
        for (const lb of gb) {
          for (const bb of lb.paths) {
            const wb = [],
              Mb = bb.getPoints();
            for (const bb of Mb) wb.push(bb.x, bb.y, Hb);
            Vb.push(wb)
          }
          if (pb)
            for (const bb of lb.holes) {
              const wb = [],
                Mb = bb.getPoints();
              for (const bb of Mb) wb.push(bb.x, bb.y, Hb);
              Vb.push(wb)
            }
        }
        return Vb
      }
      static Color3toRGBAUint8(bb) {
        const wb = new Uint8Array(4 * bb.length);
        for (let Mb = 0, eb = 0; Mb < bb.length; Mb++) wb[eb++] = 255 * bb[Mb].r, wb[eb++] = 255 * bb[Mb].g, wb[eb++] = 255 * bb[Mb].b, wb[eb++] = 255;
        return wb
      }
      static CreateColorsTexture(bb, wb, Mb, eb) {
        const Hb = eb.DC().getCaps().maxTextureSize ?? 1,
          pb = wb.length > Hb ? Hb : wb.length,
          Vb = Math.ceil(wb.length / Hb);
        Vb > 1 && (wb = [...wb, ...Array(pb * Vb - wb.length).fill(wb[0])]);
        const gb = he.Color3toRGBAUint8(wb),
          lb = new Xb.b(gb, pb, Vb, OM.b.TEXTUREFORMAT_RGBA, eb, !1, !0, Mb);
        return lb.name = bb, lb
      }
      static PrepareEmptyColorsTexture(bb) {
        if (!Ee.EmptyColorsTexture) {
          const wb = new Uint8Array(4);
          Ee.EmptyColorsTexture = new Xb.b(wb, 1, 1, OM.b.TEXTUREFORMAT_RGBA, bb, !1, !1, Xb.b.NEAREST_NEAREST), Ee.EmptyColorsTexture.name = "grlEmptyColorsTexture", Ee.EmptyColorsTexture.vJ.addOnce((() => {
            Ee.EmptyColorsTexture = null
          }))
        }
        return Ee.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        Ee.EmptyColorsTexture?.dispose(), Ee.EmptyColorsTexture = null
      }
      static BooleanToNumber(bb) {
        return bb ? 1 : 0
      }
    }
    class ze extends Qb.b {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class Xe extends Gb.d {
      isCompatible(bb) {
        return !0
      }
      constructor(bb, wb, Mb) {
        Mb = Mb || {
          color: Ee.DEFAULT_COLOR
        };
        const eb = new ze;
        eb.GREASED_LINE_HAS_COLOR = !!Mb.color && !Mb.useColors, eb.GREASED_LINE_SIZE_ATTENUATION = Mb.sizeAttenuation ?? !1, eb.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === Mb.colorDistributionType, eb.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (wb ?? bb.RJ()).useRightHandedSystem, eb.GREASED_LINE_CAMERA_FACING = Mb.cameraFacing ?? !0, super(bb, Xe.GREASED_LINE_MATERIAL_NAME, 200, eb, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = Mb?.forceGLSL || Xe.ForceGLSL, this._scene = wb ?? bb.RJ(), this._engine = this._scene.DC(), this._cameraFacing = Mb.cameraFacing ?? !0, this.visibility = Mb.visibility ?? 1, this.useDash = Mb.useDash ?? !1, this.dashRatio = Mb.dashRatio ?? .5, this.dashOffset = Mb.dashOffset ?? 0, this.width = Mb.width ? Mb.width : Mb.sizeAttenuation ? Ee.DEFAULT_WIDTH_ATTENUATED : Ee.DEFAULT_WIDTH, this._sizeAttenuation = Mb.sizeAttenuation ?? !1, this.colorMode = Mb.colorMode ?? 0, this._color = Mb.color ?? null, this.useColors = Mb.useColors ?? !1, this._colorsDistributionType = Mb.colorDistributionType ?? 0, this.colorsSampling = Mb.colorsSampling ?? Xb.b.NEAREST_NEAREST, this._colors = Mb.colors ?? null, this.dashCount = Mb.dashCount ?? 1, this.resolution = Mb.resolution ?? new Nb.m(this._engine.getRenderWidth(), this._engine.getRenderHeight()), Mb.colorsTexture ? this.colorsTexture = Mb.colorsTexture : this._colors ? this.colorsTexture = he.CreateColorsTexture(`${bb.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? Ee.DEFAULT_COLOR, he.PrepareEmptyColorsTexture(this._scene)), this._engine.vJ.add((() => {
          he.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(bb) {
        bb.push("grl_offsets"), bb.push("grl_widths"), bb.push("grl_colorPointers"), bb.push("grl_counters"), this._cameraFacing ? (bb.push("grl_previousAndSide"), bb.push("grl_nextAndCounters")) : bb.push("grl_slopes")
      }
      getSamplers(bb) {
        bb.push("grl_colors")
      }
      getActiveTextures(bb) {
        this.colorsTexture && bb.push(this.colorsTexture)
      }
      getUniforms() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const wb = [{
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
        return this._cameraFacing && wb.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === bb && wb.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: wb,
          vertex: this._cameraFacing && this._isGLSL(bb) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(bb) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(bb) {
        if (this._cameraFacing) {
          bb.kbb("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || bb.kbb("viewProjection", this._scene.getTransformMatrix());
          const wb = Nb.j.Vector4[0];
          wb.x = this._aspect, wb.y = this._resolution.x, wb.z = this._resolution.y, wb.w = this.width, bb.updateVector4("grl_aspect_resolution_lineWidth", wb)
        }
        const wb = Nb.j.Vector4[0];
        wb.x = he.BooleanToNumber(this.useDash), wb.y = this._dashArray, wb.z = this.dashOffset, wb.w = this.dashRatio, bb.updateVector4("grl_dashOptions", wb);
        const Mb = Nb.j.Vector4[1];
        Mb.x = this.colorMode, Mb.y = this.visibility, Mb.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, Mb.w = he.BooleanToNumber(this.useColors), bb.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", Mb), this._color && bb.updateColor3("grl_singleColor", this._color);
        const eb = this.colorsTexture ?? Ee.EmptyColorsTexture;
        bb.setTexture("grl_colors", eb), bb.updateFloat2("grl_textureSize", eb?.getSize().width ?? 1, eb?.getSize().height ?? 1)
      }
      prepareDefines(bb, wb, Mb) {
        bb.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, bb.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, bb.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, bb.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = wb.useRightHandedSystem, bb.GREASED_LINE_CAMERA_FACING = this._cameraFacing, bb.GREASED_LINE_USE_OFFSETS = !!Mb.offsets
      }
      getClassName() {
        return Xe.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(wb) ? function(bb, wb) {
          if ("vertex" === bb) {
            const bb = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return wb && (bb["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), bb
          }
          return "fragment" === bb ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(bb, this._cameraFacing) : function(bb, wb) {
          if ("vertex" === bb) {
            const bb = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return wb && (bb["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), bb
          }
          return "fragment" === bb ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(bb, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(bb) {
        this.setColors(bb)
      }
      setColors(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const eb = this._colors?.length ?? 0;
        if (this._colors = bb, null !== bb && 0 !== bb.length) {
          if (!wb || Mb)
            if (this.colorsTexture && eb === bb.length && !Mb) {
              const wb = he.Color3toRGBAUint8(bb);
              this.colorsTexture.update(wb)
            } else this.colorsTexture?.dispose(), this.colorsTexture = he.CreateColorsTexture(`${this._material.name}-colors-texture`, bb, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(bb) {
        this._dashCount = bb, this._dashArray = 1 / bb
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(bb) {
        this._sizeAttenuation = bb, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(bb) {
        this.setColor(bb)
      }
      setColor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== bb || null !== this._color && null === bb ? (this._color = bb, wb || this.markAllDefinesAsDirty()) : this._color = bb
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(bb) {
        this._colorsDistributionType = bb, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(bb) {
        this._aspect = bb.x / bb.y, this._resolution = bb
      }
      serialize() {
        const bb = super.serialize(),
          wb = {
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
        return this._colors && (wb.colors = this._colors), this._color && (wb.color = this._color), bb.greasedLineMaterialOptions = wb, bb
      }
      parse(bb, wb, Mb) {
        super.parse(bb, wb, Mb);
        const eb = bb.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), eb.color && this.setColor(eb.color, !0), eb.colorDistributionType && (this.colorsDistributionType = eb.colorDistributionType), eb.colors && (this.colors = eb.colors), eb.colorsSampling && (this.colorsSampling = eb.colorsSampling), eb.colorMode && (this.colorMode = eb.colorMode), eb.useColors && (this.useColors = eb.useColors), eb.visibility && (this.visibility = eb.visibility), eb.useDash && (this.useDash = eb.useDash), eb.dashCount && (this.dashCount = eb.dashCount), eb.dashRatio && (this.dashRatio = eb.dashRatio), eb.dashOffset && (this.dashOffset = eb.dashOffset), eb.width && (this.width = eb.width), eb.sizeAttenuation && (this.sizeAttenuation = eb.sizeAttenuation), eb.resolution && (this.resolution = eb.resolution), this.colors ? this.colorsTexture = he.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, wb) : he.PrepareEmptyColorsTexture(wb), this.markAllDefinesAsDirty()
      }
      copyTo(bb) {
        const wb = bb;
        wb.colorsTexture?.dispose(), this._colors && (wb.colorsTexture = he.CreateColorsTexture(`${wb._material.name}-colors-texture`, this._colors, wb.colorsSampling, this._scene)), wb.setColor(this.color, !0), wb.colorsDistributionType = this.colorsDistributionType, wb.colorsSampling = this.colorsSampling, wb.colorMode = this.colorMode, wb.useColors = this.useColors, wb.visibility = this.visibility, wb.useDash = this.useDash, wb.dashCount = this.dashCount, wb.dashRatio = this.dashRatio, wb.dashOffset = this.dashOffset, wb.width = this.width, wb.sizeAttenuation = this.sizeAttenuation, wb.resolution = this.resolution, wb.markAllDefinesAsDirty()
      }
      _isGLSL(bb) {
        return 0 === bb || this._forceGLSL
      }
    }
    Xe.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", Xe.ForceGLSL = !1;
    var xe = Mb(42078),
      je = Mb(42091),
      Ke = Mb(39966),
      re = Mb(42147),
      Re = Mb(41509);
    class De extends re.n {
      constructor(bb, wb, eb) {
        const Hb = wb.DC(),
          pb = Hb.isWebGPU && !(eb.forceGLSL || De.ForceGLSL),
          Vb = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        wb.useRightHandedSystem && Vb.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const gb = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        eb.cameraFacing ? (Vb.push("GREASED_LINE_CAMERA_FACING"), gb.push("grl_previousAndSide", "grl_nextAndCounters")) : (gb.push("grl_slopes"), gb.push("grl_counters"));
        const lb = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (pb || lb.push("world", "viewProjection", "view", "projection"), super(bb, wb, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: pb ? ["Scene", "Mesh"] : void 0,
            attributes: gb,
            uniforms: lb,
            samplers: pb ? [] : ["grlColors"],
            defines: Vb,
            extraInitializationsAsync: async () => {
              pb ? await Promise.all([Mb.e(653).then((() => Mb(65020))), Mb.e(709).then((() => Mb(65029)))]) : await Promise.all([Mb.e(646).then((() => Mb(65036))), Mb.e(710).then((() => Mb(65043)))])
            },
            shaderLanguage: pb ? 1 : 0
          }), this._color = ub.e.White(), this._colorsDistributionType = 0, this._colorsTexture = null, eb = eb || {
            color: Ee.DEFAULT_COLOR
          }, this.visibility = eb.visibility ?? 1, this.useDash = eb.useDash ?? !1, this.dashRatio = eb.dashRatio ?? .5, this.dashOffset = eb.dashOffset ?? 0, this.dashCount = eb.dashCount ?? 1, this.width = eb.width ? eb.width : eb.sizeAttenuation && eb.cameraFacing ? Ee.DEFAULT_WIDTH_ATTENUATED : Ee.DEFAULT_WIDTH, this.sizeAttenuation = eb.sizeAttenuation ?? !1, this.color = eb.color ?? ub.e.White(), this.useColors = eb.useColors ?? !1, this.colorsDistributionType = eb.colorDistributionType ?? 0, this.colorsSampling = eb.colorsSampling ?? Xb.b.NEAREST_NEAREST, this.colorMode = eb.colorMode ?? 0, this._colors = eb.colors ?? null, this._cameraFacing = eb.cameraFacing ?? !0, this.resolution = eb.resolution ?? new Nb.m(Hb.getRenderWidth(), Hb.getRenderHeight()), eb.colorsTexture ? this.colorsTexture = eb.colorsTexture : this._colors ? this.colorsTexture = he.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, wb) : (this._color = this._color ?? Ee.DEFAULT_COLOR, this.colorsTexture = he.PrepareEmptyColorsTexture(wb)), pb) {
          const bb = new Re.d;
          bb.setParameters(), bb.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", bb)
        }
        Hb.vJ.add((() => {
          he.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== Ee.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Nb.m(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(bb) {
        this.setColors(bb)
      }
      setColors(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const eb = this._colors?.length ?? 0;
        if (this._colors = bb, null !== bb && 0 !== bb.length) {
          if (!wb || Mb)
            if (this._colorsTexture && eb === bb.length && !Mb) {
              const wb = he.Color3toRGBAUint8(bb);
              this._colorsTexture.update(wb)
            } else this._colorsTexture && this._colorsTexture !== Ee.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = he.CreateColorsTexture(`${this.name}-colors-texture`, bb, this.colorsSampling, this.RJ())
        } else {
          this._colorsTexture && this._colorsTexture !== Ee.EmptyColorsTexture && this._colorsTexture.dispose();
          const bb = this.RJ();
          bb && (this.colorsTexture = he.PrepareEmptyColorsTexture(bb))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(bb) {
        this._colorsTexture = bb, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(bb) {
        this._width = bb, this.setFloat("grlWidth", bb)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(bb) {
        this._useColors = bb, this.setFloat("grlUseColors", he.BooleanToNumber(bb))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(bb) {
        this._colorsSampling = bb
      }
      get visibility() {
        return this._visibility
      }
      set visibility(bb) {
        this._visibility = bb, this.setFloat("grlVisibility", bb)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(bb) {
        this._useDash = bb, this.setFloat("grlUseDash", he.BooleanToNumber(bb))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(bb) {
        this._dashOffset = bb, this.setFloat("grlDashOffset", bb)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(bb) {
        this._dashRatio = bb, this.setFloat("grlDashRatio", bb)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(bb) {
        this._dashCount = bb, this._dashArray = 1 / bb, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(bb) {
        this._sizeAttenuation = bb, this.setFloat("grlSizeAttenuation", he.BooleanToNumber(bb))
      }
      get color() {
        return this._color
      }
      set color(bb) {
        this.setColor(bb)
      }
      setColor(bb) {
        bb = bb ?? Ee.DEFAULT_COLOR, this._color = bb, this.setColor3("grlColor", bb)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(bb) {
        this._colorsDistributionType = bb, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(bb) {
        this._colorMode = bb, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(bb) {
        this._resolution = bb, this.setVector2("grlResolution", bb), this.setFloat("grlAspect", bb.x / bb.y)
      }
      serialize() {
        const bb = super.serialize(),
          wb = {
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
        return this._colors && (wb.colors = this._colors), bb.greasedLineMaterialOptions = wb, bb
      }
      parse(bb, wb, Mb) {
        const eb = bb.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), eb.color && (this.color = eb.color), eb.colorDistributionType && (this.colorsDistributionType = eb.colorDistributionType), eb.colorsSampling && (this.colorsSampling = eb.colorsSampling), eb.colorMode && (this.colorMode = eb.colorMode), eb.useColors && (this.useColors = eb.useColors), eb.visibility && (this.visibility = eb.visibility), eb.useDash && (this.useDash = eb.useDash), eb.dashCount && (this.dashCount = eb.dashCount), eb.dashRatio && (this.dashRatio = eb.dashRatio), eb.dashOffset && (this.dashOffset = eb.dashOffset), eb.width && (this.width = eb.width), eb.sizeAttenuation && (this.sizeAttenuation = eb.sizeAttenuation), eb.resolution && (this.resolution = eb.resolution), eb.colors ? this.colorsTexture = he.CreateColorsTexture(`${this.name}-colors-texture`, eb.colors, this.colorsSampling, this.RJ()) : this.colorsTexture = he.PrepareEmptyColorsTexture(wb), this._cameraFacing = eb.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var ce, Ye, Ze;
    De.ForceGLSL = !1,
      function(bb) {
        bb[bb.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", bb[bb.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(ce || (ce = {})),
      function(bb) {
        bb[bb.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", bb[bb.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", bb[bb.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(Ye || (Ye = {})),
      function(bb) {
        bb[bb.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", bb[bb.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", bb[bb.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", bb[bb.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", bb[bb.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(Ze || (Ze = {}));
    class fe extends xe.e {
      constructor(bb, wb, Mb) {
        super(bb, wb, null, null, !1, !1), this.name = bb, this._options = Mb, this._lazy = !1, this._updatable = !1, this._engine = wb.DC(), this._lazy = Mb.lazy ?? !1, this._updatable = Mb.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = Mb.colorPointers ?? [], this._widths = Mb.widths ?? new Array(Mb.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(bb) {
        let wb = 0;
        for (const eb of this._points) wb += eb.length;
        const Mb = wb / 3 * 2 - this._widths.length;
        for (let eb = 0; eb < Mb; eb++) this._widths.push(bb)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.fC && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(bb, wb) {
        for (const Mb of bb) this._points.push(Mb);
        this._lazy || this.setPoints(this._points, wb)
      }
      dispose(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(bb, wb)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(bb) {
        this._uvs = bb instanceof Float32Array ? bb : new Float32Array(bb), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(bb) {
        this.material instanceof De && this.material.setDefine("GREASED_LINE_USE_OFFSETS", bb?.length > 0), this._offsets = bb, this._offsetsBuffer ? this._offsetsBuffer.update(bb) : this._createOffsetsBuffer(bb)
      }
      get widths() {
        return this._widths
      }
      set widths(bb) {
        this._widths = bb, this._lazy || this._widthsBuffer && this._widthsBuffer.update(bb)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(bb) {
        this._colorPointers = bb, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(bb)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof De) return this.material;
        const bb = this.material?.pluginManager?.getPlugin(Xe.GREASED_LINE_MATERIAL_NAME);
        return bb || void 0
      }
      get points() {
        const bb = [];
        return Ke.e.DeepCopy(this._points, bb), bb
      }
      setPoints(bb, wb) {
        this._points = he.ConvertPoints(bb, wb?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), wb?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, wb)
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
      serialize(bb) {
        super.serialize(bb), bb.type = this.getClassName(), bb.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = new je.d;
        return wb.positions = this._vertexPositions, wb.indices = this._indices, wb.uvs = this._uvs, bb && (wb.normals = [], je.d.ComputeNormals(this._vertexPositions, this._indices, wb.normals)), wb.applyToMesh(this, this._options.updatable), wb
      }
      _createOffsetsBuffer(bb) {
        const wb = this._scene.DC(),
          Mb = new vb.d(wb, bb, this._updatable, 3);
        this.setVerticesBuffer(Mb.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = Mb
      }
    }
    class Ae {
      constructor(bb, wb) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = bb, this.wasAddedByNoopNode = wb
      }
      getIndicesAccessor(bb, wb, Mb, eb, Hb) {
        return this._indicesAccessorMap.get(bb)?.get(wb)?.get(Mb)?.get(eb)?.get(Hb)
      }
      setIndicesAccessor(bb, wb, Mb, eb, Hb, pb) {
        let Vb = this._indicesAccessorMap.get(bb);
        Vb || (Vb = new Map, this._indicesAccessorMap.set(bb, Vb));
        let gb = Vb.get(wb);
        gb || (gb = new Map, Vb.set(wb, gb));
        let lb = gb.get(Mb);
        lb || (lb = new Map, gb.set(Mb, lb));
        let Lb = lb.get(eb);
        Lb || (Lb = new Map, lb.set(eb, Lb)), Lb.set(Hb, pb)
      }
      pushExportedNode(bb) {
        this._exportedNodes.has(bb) || this._exportedNodes.add(bb)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(bb) {
        return this._vertexBufferViewMap.get(bb)
      }
      setVertexBufferView(bb, wb) {
        this._vertexBufferViewMap.set(bb, wb)
      }
      setRemappedBufferView(bb, wb, Mb) {
        this._remappedBufferView.set(bb, new Map), this._remappedBufferView.get(bb).set(wb, Mb)
      }
      getRemappedBufferView(bb, wb) {
        return this._remappedBufferView.get(bb)?.get(wb)
      }
      getVertexAccessor(bb, wb, Mb) {
        return this._vertexAccessorMap.get(bb)?.get(wb)?.get(Mb)
      }
      setVertexAccessor(bb, wb, Mb, eb) {
        let Hb = this._vertexAccessorMap.get(bb);
        Hb || (Hb = new Map, this._vertexAccessorMap.set(bb, Hb));
        let pb = Hb.get(wb);
        pb || (pb = new Map, Hb.set(wb, pb)), pb.set(Mb, eb)
      }
      hasVertexColorAlpha(bb) {
        return this._vertexMapColorAlpha.get(bb) || !1
      }
      setHasVertexColorAlpha(bb, wb) {
        return this._vertexMapColorAlpha.set(bb, wb)
      }
      getMesh(bb) {
        return this._meshMap.get(bb)
      }
      setMesh(bb, wb) {
        this._meshMap.set(bb, wb)
      }
      bindMorphDataToMesh(bb, wb) {
        const Mb = this._meshMorphTargetMap.get(bb) || [];
        this._meshMorphTargetMap.set(bb, Mb), -1 === Mb.indexOf(wb) && Mb.push(wb)
      }
      getMorphTargetsFromMesh(bb) {
        return this._meshMorphTargetMap.get(bb)
      }
    }
    class We {
      _ApplyExtension(bb, wb, Mb, eb) {
        if (Mb >= wb.length) return Promise.resolve(bb);
        const Hb = eb(wb[Mb], bb);
        return Hb ? Hb.then((async bb => bb ? await this._ApplyExtension(bb, wb, Mb + 1, eb) : null)) : this._ApplyExtension(bb, wb, Mb + 1, eb)
      }
      _ApplyExtensions(bb, wb) {
        const Mb = [];
        for (const eb of We._ExtensionNames) Mb.push(this._extensions[eb]);
        return this._ApplyExtension(bb, Mb, 0, wb)
      }
      _extensionsPostExportNodeAsync(bb, wb, Mb, eb, Hb) {
        return this._ApplyExtensions(wb, ((wb, pb) => wb.postExportNodeAsync && wb.postExportNodeAsync(bb, pb, Mb, eb, Hb, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(bb, wb, Mb) {
        return this._ApplyExtensions(wb, ((wb, eb) => wb.postExportMaterialAsync && wb.postExportMaterialAsync(bb, eb, Mb)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(bb, wb, Mb) {
        const eb = [];
        return await Promise.all(We._ExtensionNames.map((async Hb => {
          const pb = this._extensions[Hb];
          if (pb.postExportMaterialAdditionalTexturesAsync) {
            const Hb = await pb.postExportMaterialAdditionalTexturesAsync(bb, wb, Mb);
            eb.push(...Hb)
          }
        }))), eb
      }
      _extensionsPostExportTextures(bb, wb, Mb) {
        for (const eb of We._ExtensionNames) {
          const Hb = this._extensions[eb];
          Hb.postExportTexture && Hb.postExportTexture(bb, wb, Mb)
        }
      }
      _extensionsPostExportMeshPrimitive(bb) {
        for (const wb of We._ExtensionNames) {
          const Mb = this._extensions[wb];
          Mb.postExportMeshPrimitive && Mb.postExportMeshPrimitive(bb, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const bb of We._ExtensionNames) {
          const wb = this._extensions[bb];
          wb.preGenerateBinaryAsync && await wb.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(bb) {
        for (const wb of We._ExtensionNames) {
          const Mb = this._extensions[wb];
          Mb.enabled && bb(Mb)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((bb => {
          var wb, Mb, eb;
          bb.wasUsed && ((wb = this._glTF).extensionsUsed || (wb.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(bb.name) && this._glTF.extensionsUsed.push(bb.name), bb.required && ((Mb = this._glTF).extensionsRequired || (Mb.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(bb.name) && this._glTF.extensionsRequired.push(bb.name)), (eb = this._glTF).extensions || (eb.extensions = {}), bb.onExporting && bb.onExporting())
        }))
      }
      _loadExtensions() {
        for (const bb of We._ExtensionNames) {
          const wb = We._ExtensionFactories[bb](this);
          this._extensions[bb] = wb
        }
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb.e.LastCreatedScene,
          wb = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${Cb.e.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new YM(this), this._extensions = {}, this._bufferManager = new ee, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !bb) throw new Error("No scene available to export");
        this._babylonScene = bb, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: bb => bb?.dW?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...wb
        }, this._loadExtensions()
      }
      dispose() {
        for (const bb in this._extensions) {
          this._extensions[bb].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        We.UnregisterExtension(bb) && Hb.Tools.Warn(`Extension with the name ${bb} already exists`), We._ExtensionFactories[bb] = wb;
        const eb = Mb ?? 0;
        We._ExtensionOrders[bb] = eb;
        let pb = We._ExtensionNames.length;
        for (let Hb = 0; Hb < We._ExtensionNames.length; Hb++) {
          const bb = We._ExtensionNames[Hb];
          if (eb < We._ExtensionOrders[bb]) {
            pb = Hb;
            break
          }
        }
        We._ExtensionNames.splice(pb, 0, bb)
      }
      static UnregisterExtension(bb) {
        if (!We._ExtensionFactories[bb]) return !1;
        delete We._ExtensionFactories[bb], delete We._ExtensionOrders[bb];
        const wb = We._ExtensionNames.indexOf(bb);
        return -1 !== wb && We._ExtensionNames.splice(wb, 1), !0
      }
      _generateJSON(bb, wb, Mb) {
        const eb = {
          byteLength: bb
        };
        return eb.byteLength && (this._glTF.buffers = [eb]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.JE = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (eb.uri = wb + ".bin"), Mb ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(bb) {
        const wb = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Mb = this._generateJSON(wb.byteLength, bb, !0),
          eb = new Blob([wb], {
            type: "application/octet-stream"
          }),
          Hb = bb + ".gltf",
          pb = bb + ".bin",
          Vb = new Lb;
        if (Vb.files[Hb] = Mb, Vb.files[pb] = eb, this._imageData)
          for (const gb in this._imageData) Vb.files[gb] = this._imageData[gb];
        return Vb
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(bb) {
        const wb = bb % 4;
        return 0 === wb ? wb : 4 - wb
      }
      async generateGLBAsync(bb) {
        this._shouldUseGlb = !0;
        const wb = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Mb = this._generateJSON(wb.byteLength),
          eb = bb + ".glb";
        let Hb, pb = Mb.length;
        if ("undefined" !== typeof TextEncoder) {
          Hb = (new TextEncoder).encode(Mb), pb = Hb.length
        }
        const Vb = this._getPadding(pb),
          gb = this._getPadding(wb.byteLength),
          lb = 28 + pb + Vb + wb.byteLength + gb,
          Ib = new we(lb);
        if (Ib.writeUInt32(1179937895), Ib.writeUInt32(2), Ib.writeUInt32(lb), Ib.writeUInt32(pb + Vb), Ib.writeUInt32(1313821514), Hb) Ib.writeTypedArray(Hb);
        else {
          const bb = "_".charCodeAt(0);
          for (let wb = 0; wb < pb; ++wb) {
            const eb = Mb.charCodeAt(wb);
            eb != Mb.codePointAt(wb) ? Ib.writeUInt8(bb) : Ib.writeUInt8(eb)
          }
        }
        for (let Lb = 0; Lb < Vb; ++Lb) Ib.writeUInt8(32);
        Ib.writeUInt32(wb.byteLength + gb), Ib.writeUInt32(5130562), Ib.writeTypedArray(wb);
        for (let Lb = 0; Lb < gb; ++Lb) Ib.writeUInt8(0);
        const Ob = new Lb;
        return Ob.files[eb] = new Blob([Ib.getOutputData()], {
          type: "application/octet-stream"
        }), Ob
      }
      _setNodeTransformation(bb, wb, Mb) {
        if (wb.getPivotPoint().equalsWithEpsilon(SM, AM.e) || Hb.Tools.Warn("Pivot points are not supported in the glTF serializer"), !wb.position.equalsWithEpsilon(SM, AM.e)) {
          const Hb = eb.TmpVectors.YC[0].eZ(wb.position);
          Mb && uM(Hb), bb.translation = Hb.ppb()
        }
        wb.CO.equalsWithEpsilon(vM, AM.e) || (bb.scale = wb.CO.ppb());
        const pb = wb.rotationQuaternion?.clone() || eb.Quaternion.FromEulerAngles(wb.rotation.x, wb.rotation.y, wb.rotation.z);
        pb.equalsWithEpsilon(NM, AM.e) || (Mb && dM(pb), bb.rotation = pb.normalize().ppb())
      }
      _setCameraTransformation(bb, wb, Mb) {
        const Hb = eb.TmpVectors.YC[0],
          pb = eb.TmpVectors.Quaternion[0],
          Vb = wb.getWorldMatrix();
        if (wb.parent) {
          const bb = wb.parent.getWorldMatrix().invertToRef(eb.TmpVectors.Matrix[0]);
          Vb.multiplyToRef(bb, eb.TmpVectors.Matrix[1]).decompose(void 0, pb, Hb)
        } else Vb.decompose(void 0, pb, Hb);
        Hb.equalsWithEpsilon(SM, AM.e) || (Mb && uM(Hb), bb.translation = Hb.ppb()), Mb && dM(pb), this._babylonScene.useRightHandedSystem || PM(pb), pb.equalsWithEpsilon(NM, AM.e) || (bb.rotation = pb.ppb())
      }
      _listAvailableCameras() {
        for (const bb of this._babylonScene.cameras) {
          const wb = {
            type: bb.mode === He.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (bb.name && (wb.name = bb.name), "perspective" === wb.type) wb.perspective = {
            aspectRatio: bb.DC().getAspectRatio(bb),
            yfov: bb.fovMode === He.c.FOVMODE_VERTICAL_FIXED ? bb.fov : bb.fov * bb.DC().getAspectRatio(bb),
            znear: bb.minZ,
            zfar: bb.maxZ
          };
          else if ("orthographic" === wb.type) {
            const Mb = bb.orthoLeft && bb.orthoRight ? .5 * (bb.orthoRight - bb.orthoLeft) : .5 * bb.DC().getRenderWidth(),
              eb = bb.orthoBottom && bb.orthoTop ? .5 * (bb.orthoTop - bb.orthoBottom) : .5 * bb.DC().getRenderHeight();
            wb.orthographic = {
              xmag: Mb,
              ymag: eb,
              znear: bb.minZ,
              zfar: bb.maxZ
            }
          }
          this._camerasMap.set(bb, wb)
        }
      }
      _exportAndAssignCameras() {
        const bb = Array.from(this._camerasMap.values());
        for (const wb of bb) {
          const bb = this._nodesCameraMap.get(wb);
          if (void 0 !== bb) {
            this._cameras.push(wb);
            for (const wb of bb) wb.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const bb of this._babylonScene.skeletons) {
          if (bb.bones.length <= 0) continue;
          const wb = {
            joints: []
          };
          this._skinMap.set(bb, wb)
        }
      }
      _exportAndAssignSkeletons(bb) {
        for (const Mb of this._babylonScene.skeletons) {
          if (Mb.bones.length <= 0) continue;
          const pb = this._skinMap.get(Mb);
          if (void 0 == pb) continue;
          const Vb = {};
          let gb = -1;
          for (let bb = 0; bb < Mb.bones.length; ++bb) {
            const wb = Mb.bones[bb],
              eb = wb.getIndex() ?? bb; - 1 !== eb && (Vb[eb] = wb, eb > gb && (gb = eb))
          }
          const lb = [];
          for (let Mb = 0; Mb <= gb; ++Mb) {
            const gb = Vb[Mb],
              Lb = gb.getTransformNode(),
              Ib = Lb ? this._nodeMap.get(Lb) : void 0;
            if (void 0 === Ib) {
              Hb.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            pb.joints.push(Ib);
            const Ob = gb.getAbsoluteInverseBindMatrix().clone();
            bb.has(Lb) && (wb = Ob, WM.invertToRef(eb.TmpVectors.Matrix[0]).multiplyToRef(wb, wb).multiplyToRef(WM, wb)), lb.push(Ob)
          }
          const Lb = this._nodesSkinMap.get(pb);
          if (pb.joints.length > 0 && void 0 !== Lb) {
            const bb = new Float32Array(16 * lb.length);
            lb.forEach(((wb, Mb) => {
              bb.set(wb.m, 16 * Mb)
            }));
            const wb = this._bufferManager.createBufferView(bb);
            this._accessors.push(this._bufferManager.createAccessor(wb, "MAT4", 5126, lb.length)), pb.inverseBindMatrices = this._accessors.length - 1, this._skins.push(pb);
            const Mb = this._skins.length - 1;
            for (const eb of Lb) eb.skin = Mb
          }
        }
        var wb
      }
      async _exportSceneAsync() {
        const bb = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const wb = this._options.metadataSelector(this._babylonScene.metadata);
          wb && (bb.extras = wb)
        }
        const wb = new Array,
          Mb = new Array,
          eb = new Array,
          Hb = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let pb;
        if (Hb && !this._options.includeCoordinateSystemConversionNodes)
          for (const Lb of this._babylonScene.animationGroups)
            for (const bb of Lb.targetedAnimations) {
              const wb = bb.target;
              wb instanceof Ob.b && !wb.parent && (pb ?? (pb = new Set)).add(wb)
            }
        for (const Lb of this._babylonScene.rootNodes) {
          const bb = Lb.animations,
            Vb = !!bb && bb.length > 0 || pb?.has(Lb);
          Hb && !this._options.includeCoordinateSystemConversionNodes && JM(Lb, this._babylonScene.useRightHandedSystem) && !Vb ? eb.push(...Lb.getChildren()) : this._babylonScene.useRightHandedSystem ? wb.push(Lb) : Mb.push(Lb)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const Vb = new Ae(!0, !1);
        bb.nodes.push(...await this._exportNodesAsync(Mb, Vb));
        const gb = new Ae(!1, !1);
        bb.nodes.push(...await this._exportNodesAsync(wb, gb));
        const lb = new Ae(!1, !0);
        bb.nodes.push(...await this._exportNodesAsync(eb, lb)), bb.nodes.length && this._scenes.push(bb), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(Vb.getNodesSet()), this._babylonScene.animationGroups.length && Ue._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Vb.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(bb) {
        return this._nodeMap.get(bb)
      }
      _getAnimationIndex(bb) {
        return this._animationGroupMap.get(bb)
      }
      _getCameraIndex(bb) {
        const wb = this._camerasMap.get(bb);
        if (!wb) return;
        const Mb = this._cameras.indexOf(wb);
        return Mb >= 0 ? Mb : void 0
      }
      _getMaterialIndex(bb) {
        return this._materialMap.get(bb)
      }
      _getRootIndex(bb, wb) {
        switch (bb) {
          case "nodes":
            return this._getNodeIndex(wb);
          case "animations":
            return this._getAnimationIndex(wb);
          case "cameras":
            return this._getCameraIndex(wb);
          case "materials":
            return this._getMaterialIndex(wb);
          case "meshes": {
            const bb = this._getNodeIndex(wb);
            return void 0 === bb ? void 0 : this._nodes[bb]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(wb)?.index;
          case "images": {
            const bb = this._materialExporter.getTextureInfo(wb)?.index;
            if (void 0 === bb) return;
            const Mb = this._textures[bb];
            for (const wb of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const bb = Mb?.extensions?.[wb]?.source;
              if ("number" === typeof bb) return bb
            }
            return Mb?.source
          }
          case "samplers": {
            const bb = this._materialExporter.getTextureInfo(wb)?.index;
            return void 0 === bb ? void 0 : this._textures[bb]?.sampler
          }
          case "skins": {
            const bb = this._skinMap.get(wb),
              Mb = bb ? this._skins.indexOf(bb) : -1;
            return Mb >= 0 ? Mb : void 0
          }
          case "scenes":
            return wb === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(bb, wb, Mb) {
        const eb = this._nodes[bb];
        if (!eb) throw new Error(`Cannot write ${wb}: glTF node ${bb} does not exist.`);
        eb.extensions || (eb.extensions = {}), eb.extensions[wb] = Mb
      }
      _shouldExportNode(bb) {
        let wb = this._shouldExportNodeMap.get(bb);
        return void 0 === wb && (wb = this._options.shouldExportNode(bb), this._shouldExportNodeMap.set(bb, wb)), wb
      }
      async _exportNodesAsync(bb, wb) {
        const Mb = new Array;
        this._exportBuffers(bb, wb);
        for (const eb of bb) await this._exportNodeAsync(eb, Mb, wb);
        return Mb
      }
      _collectBuffers(bb, wb, Mb, eb, Hb) {
        if (this._shouldExportNode(bb) && bb instanceof Ub.e && bb.geometry) {
          const pb = bb.geometry.getVertexBuffers();
          if (pb)
            for (const eb in pb) {
              if (!aM(eb)) continue;
              const Vb = pb[eb];
              Hb.setHasVertexColorAlpha(Vb, bb.hasVertexAlpha);
              const gb = Vb._buffer,
                lb = wb.get(gb) || [];
              wb.set(gb, lb), -1 === lb.indexOf(Vb) && lb.push(Vb);
              const Lb = Mb.get(Vb) || [];
              Mb.set(Vb, Lb), -1 === Lb.indexOf(bb) && Lb.push(bb)
            }
          const Vb = bb.morphTargetManager;
          if (Vb)
            for (let wb = 0; wb < Vb.numTargets; wb++) {
              const Mb = Vb.getTarget(wb),
                Hb = eb.get(Mb) || [];
              eb.set(Mb, Hb), -1 === Hb.indexOf(bb) && Hb.push(bb)
            }
        }
        for (const pb of bb.getChildren()) this._collectBuffers(pb, wb, Mb, eb, Hb)
      }
      _exportBuffers(bb, wb) {
        const Mb = new Map,
          eb = new Map,
          Hb = new Map;
        for (const gb of bb) this._collectBuffers(gb, Mb, eb, Hb, wb);
        const pb = Array.from(Mb.keys());
        for (const gb of pb) {
          const bb = gb.getData();
          if (!bb) throw new Error("Buffer data is not available");
          const Hb = Mb.get(gb);
          if (!Hb) continue;
          const pb = Hb[0].byteStride;
          if (Hb.some((bb => bb.byteStride !== pb))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const Vb = oM(bb).slice();
          for (const wb of Hb) {
            const bb = eb.get(wb),
              {
                byteOffset: Mb,
                byteStride: Hb,
                componentCount: pb,
                type: gb,
                count: lb,
                normalized: Lb,
                kind: Ob
              } = GM(wb, bb);
            switch (Ob) {
              case Ib.f.NormalKind:
              case Ib.f.TangentKind:
                (0, ZM.i)(Vb, Mb, Hb, pb, gb, lb, Lb, (bb => {
                  const wb = Math.sqrt(bb[0] * bb[0] + bb[1] * bb[1] + bb[2] * bb[2]);
                  if (wb > 0) {
                    const Mb = 1 / wb;
                    bb[0] *= Mb, bb[1] *= Mb, bb[2] *= Mb
                  }
                }));
                break;
              case Ib.f.ColorKind: {
                const wb = bb.filter((bb => bb.material instanceof Ve.StandardMaterial || null == bb.material)).length;
                if (0 == wb) break;
                if (wb != bb.length) {
                  Rb.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                gb == Ib.f.UNSIGNED_BYTE && Rb.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const eb = new Fb.Color3,
                  Ob = new Fb.c,
                  Ub = this._babylonScene.DC().useExactSrgbConversions;
                (0, ZM.i)(Vb, Mb, Hb, pb, gb, lb, Lb, (bb => {
                  3 === bb.length ? (eb.dI(bb, 0), eb.toLinearSpaceToRef(eb, Ub), eb.toArray(bb, 0)) : (Ob.dI(bb, 0), Ob.toLinearSpaceToRef(Ob, Ub), Ob.toArray(bb, 0))
                }))
              }
            }
          }
          if (wb.convertToRightHanded) {
            for (const bb of Hb) {
              const wb = eb.get(bb),
                {
                  byteOffset: Mb,
                  byteStride: Hb,
                  componentCount: pb,
                  type: gb,
                  count: lb,
                  normalized: Lb,
                  kind: Ob
                } = GM(bb, wb);
              switch (Ob) {
                case Ib.f.PositionKind:
                case Ib.f.NormalKind:
                case Ib.f.TangentKind:
                  (0, ZM.i)(Vb, Mb, Hb, pb, gb, lb, Lb, (bb => {
                    bb[0] = -bb[0]
                  }))
              }
            }
            wb.convertedToRightHandedBuffers.set(gb, Vb)
          }
          const lb = this._bufferManager.createBufferView(Vb, pb);
          wb.setVertexBufferView(gb, lb);
          const Lb = new Map;
          for (const wb of Hb) {
            const bb = eb.get(wb),
              {
                kind: Mb,
                totalVertices: Hb
              } = GM(wb, bb);
            switch (Mb) {
              case Ib.f.MatricesIndicesKind:
              case Ib.f.MatricesIndicesExtraKind:
                if (wb.type == Ib.f.FLOAT) {
                  const bb = wb.getFloatData(Hb);
                  null !== bb && Lb.set(wb, bb)
                }
            }
          }
          0 !== Lb.size && Rb.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const Ob = Array.from(Lb.keys());
          for (const Mb of Ob) {
            const bb = Lb.get(Mb);
            if (!bb) continue;
            const eb = bb.some((bb => bb >= 256)),
              Hb = new(eb ? Uint16Array : Uint8Array)(bb.length);
            for (let wb = 0; wb < bb.length; wb++) Hb[wb] = bb[wb];
            const pb = this._bufferManager.createBufferView(Hb, 4 * (eb ? 2 : 1));
            wb.setRemappedBufferView(gb, Mb, pb)
          }
        }
        const Vb = Array.from(Hb.keys());
        for (const gb of Vb) {
          const bb = Hb.get(gb);
          if (!bb) continue;
          const Mb = te(gb, bb[0], this._bufferManager, this._bufferViews, this._accessors, wb.convertToRightHanded);
          for (const eb of bb) wb.bindMorphDataToMesh(eb, Mb)
        }
      }
      async _exportNodeAsync(bb, wb, Mb) {
        let eb = this._nodeMap.get(bb);
        if (void 0 !== eb) return void(wb.includes(eb) || wb.push(eb));
        const Hb = await this._createNodeAsync(bb, Mb);
        if (Hb) {
          eb = this._nodes.length, this._nodes.push(Hb), this._nodeMap.set(bb, eb), Mb.pushExportedNode(bb), wb.push(eb);
          const pb = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            Vb = [];
          this._babylonScene.animationGroups.length || (Ue._CreateMorphTargetAnimationFromMorphTargetAnimations(bb, pb, Vb, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Mb.convertToRightHanded, this._options.shouldExportAnimation), bb.animations.length && Ue._CreateNodeAnimationFromNodeAnimations(bb, pb, Vb, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Mb.convertToRightHanded, this._options.shouldExportAnimation)), pb.channels.length && pb.samplers.length && this._animations.push(pb), Vb.forEach((bb => {
            bb.channels.length && bb.samplers.length && this._animations.push(bb)
          }))
        }
        const pb = Hb ? [] : wb;
        for (const Vb of bb.getChildren()) await this._exportNodeAsync(Vb, pb, Mb);
        Hb && pb.length && (Hb.children = pb)
      }
      async _createNodeAsync(bb, wb) {
        if (!this._shouldExportNode(bb)) return null;
        const Mb = {};
        if (bb.name && (Mb.name = bb.name), bb.metadata) {
          const wb = this._options.metadataSelector(bb.metadata);
          wb && (Mb.extras = wb)
        }
        if (bb instanceof Ob.b && (this._setNodeTransformation(Mb, bb, wb.convertToRightHanded), bb instanceof Ub.e)) {
          const eb = bb instanceof tb.d ? bb.opb : bb;
          if (eb.oR && eb.oR.length > 0 && (Mb.mesh = await this._exportMeshAsync(eb, wb)), bb.skeleton) {
            const wb = this._skinMap.get(bb.skeleton);
            void 0 !== wb && (void 0 === this._nodesSkinMap.get(wb) && this._nodesSkinMap.set(wb, []), this._nodesSkinMap.get(wb)?.push(Mb))
          }
        }
        if (bb instanceof fM.f) {
          const eb = this._camerasMap.get(bb);
          if (eb) {
            void 0 === this._nodesCameraMap.get(eb) && this._nodesCameraMap.set(eb, []), this._setCameraTransformation(Mb, bb, wb.convertToRightHanded);
            const Hb = bb.parent;
            if (null !== Hb && yM(bb, Hb)) {
              const bb = this._nodeMap.get(Hb);
              if (void 0 !== bb) {
                const wb = this._nodes[bb];
                return nM(Mb, wb), this._nodesCameraMap.get(eb)?.push(wb), null
              }
            }
            this._nodesCameraMap.get(eb)?.push(Mb)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", Mb, bb, this._nodeMap, wb.convertToRightHanded) ? Mb : (Rb.b.Warn(`Not exporting node ${bb.name}`), null)
      }
      _exportIndices(bb, wb, Mb, eb, Hb, Vb, gb, lb, Lb) {
        let Ib = null;
        Lb.mode = function(bb) {
          switch (bb) {
            case pb.b.TriangleFillMode:
              return 4;
            case pb.b.TriangleStripDrawMode:
              return 5;
            case pb.b.TriangleFanDrawMode:
              return 6;
            case pb.b.PointListDrawMode:
            case pb.b.PointFillMode:
              return 0;
            case pb.b.LineLoopDrawMode:
              return 2;
            case pb.b.LineListDrawMode:
              return 1;
            case pb.b.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${bb}`)
        }(Vb);
        const Ob = gb !== pb.b.CounterClockWiseSideOrientation && function(bb) {
          switch (bb) {
            case pb.b.TriangleFillMode:
            case pb.b.TriangleStripDrawMode:
            case pb.b.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(Vb);
        if (Ob) {
          if (Vb === pb.b.TriangleStripDrawMode || Vb === pb.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const gb = wb ? new Uint32Array(eb) : new Uint16Array(eb);
          if (bb)
            for (let wb = 0; wb + 2 < eb; wb += 3) gb[wb] = bb[Mb + wb] + Hb, gb[wb + 1] = bb[Mb + wb + 2] + Hb, gb[wb + 2] = bb[Mb + wb + 1] + Hb;
          else
            for (let bb = 0; bb + 2 < eb; bb += 3) gb[bb] = bb, gb[bb + 1] = bb + 2, gb[bb + 2] = bb + 1;
          Ib = gb
        } else if (bb && 0 !== Hb) {
          const pb = wb ? new Uint32Array(eb) : new Uint16Array(eb);
          for (let wb = 0; wb < eb; wb++) pb[wb] = bb[Mb + wb] + Hb;
          Ib = pb
        } else bb && (Ib = function(bb, wb, Mb, eb) {
          let Hb = bb;
          return 0 === wb && Mb === bb.length || (Hb = Array.isArray(bb) ? bb.slice(wb, wb + Mb) : bb.subarray(wb, wb + Mb)), Hb instanceof Int32Array ? new Uint32Array(Hb.buffer, Hb.byteOffset, Hb.length) : Array.isArray(Hb) ? eb ? new Uint32Array(Hb) : new Uint16Array(Hb) : Hb
        }(bb, Mb, eb, wb));
        if (Ib) {
          let pb = lb.getIndicesAccessor(bb, Mb, eb, Hb, Ob);
          if (void 0 === pb) {
            const Vb = this._bufferManager.createBufferView(Ib),
              gb = wb ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(Vb, "SCALAR", gb, eb, 0)), pb = this._accessors.length - 1, lb.setIndicesAccessor(bb, Mb, eb, Hb, Ob, pb)
          }
          Lb.indices = pb
        }
      }
      _exportVertexBuffer(bb, wb, Mb, eb, Hb, pb) {
        const Vb = bb.getKind();
        if (!aM(Vb)) return;
        if (Vb.startsWith("uv") && !this._options.exportUnusedUVs && (!wb || !this._materialNeedsUVsSet.has(wb))) return;
        let gb = Hb.getVertexAccessor(bb, Mb, eb);
        if (void 0 === gb) {
          const wb = Hb.convertedToRightHandedBuffers.get(bb._buffer) || bb._buffer.getData(),
            pb = Vb === Ib.f.PositionKind ? function(bb, wb, Mb, eb) {
              const {
                byteOffset: Hb,
                byteStride: pb,
                type: Vb,
                normalized: gb
              } = wb, lb = wb.getSize(), Lb = new Array(lb).fill(1 / 0), Ib = new Array(lb).fill(-1 / 0);
              return (0, ZM.i)(bb, Hb + Mb * pb, pb, lb, Vb, eb * lb, gb, (bb => {
                for (let wb = 0; wb < lb; wb++) Lb[wb] = Math.min(Lb[wb], bb[wb]), Ib[wb] = Math.max(Ib[wb], bb[wb])
              })), {
                min: Lb,
                max: Ib
              }
            }(wb, bb, Mb, eb) : void 0,
            lb = (Vb === Ib.f.MatricesIndicesKind || Vb === Ib.f.MatricesIndicesExtraKind) && bb.type === Ib.f.FLOAT,
            Lb = lb ? Ib.f.UNSIGNED_BYTE : bb.type,
            Ob = lb ? void 0 : bb.normalized,
            Ub = lb ? Hb.getRemappedBufferView(bb._buffer, bb) : Hb.getVertexBufferView(bb._buffer),
            tb = bb.byteOffset + Mb * bb.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(Ub, function(bb, wb) {
            if (bb == Ib.f.ColorKind) return wb ? "VEC4" : "VEC3";
            switch (bb) {
              case Ib.f.PositionKind:
              case Ib.f.NormalKind:
                return "VEC3";
              case Ib.f.TangentKind:
              case Ib.f.MatricesIndicesKind:
              case Ib.f.MatricesIndicesExtraKind:
              case Ib.f.MatricesWeightsKind:
              case Ib.f.MatricesWeightsExtraKind:
                return "VEC4";
              case Ib.f.UVKind:
              case Ib.f.UV2Kind:
              case Ib.f.UV3Kind:
              case Ib.f.UV4Kind:
              case Ib.f.UV5Kind:
              case Ib.f.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${bb}`)
          }(Vb, Hb.hasVertexColorAlpha(bb)), Lb, eb, tb, pb, Ob)), gb = this._accessors.length - 1, Hb.setVertexAccessor(bb, Mb, eb, gb)
        }
        pb.attributes[function(bb) {
          switch (bb) {
            case Ib.f.PositionKind:
              return "POSITION";
            case Ib.f.NormalKind:
              return "NORMAL";
            case Ib.f.TangentKind:
              return "TANGENT";
            case Ib.f.ColorKind:
              return "COLOR_0";
            case Ib.f.UVKind:
              return "TEXCOORD_0";
            case Ib.f.UV2Kind:
              return "TEXCOORD_1";
            case Ib.f.UV3Kind:
              return "TEXCOORD_2";
            case Ib.f.UV4Kind:
              return "TEXCOORD_3";
            case Ib.f.UV5Kind:
              return "TEXCOORD_4";
            case Ib.f.UV6Kind:
              return "TEXCOORD_5";
            case Ib.f.MatricesIndicesKind:
              return "JOINTS_0";
            case Ib.f.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case Ib.f.MatricesWeightsKind:
              return "WEIGHTS_0";
            case Ib.f.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${bb}`)
        }(Vb)] = gb
      }
      async _exportMaterialAsync(bb, wb, Mb, eb) {
        let Hb = this._materialMap.get(bb);
        if (void 0 === Hb) {
          const eb = wb && Object.keys(wb).some((bb => bb.startsWith("uv")));
          if ((bb = bb instanceof pe.d ? bb.Lwb[Mb.materialIndex] : bb) instanceof Xw) Hb = await this._materialExporter.exportPBRMaterialAsync(bb, eb);
          else if (bb instanceof Ve.StandardMaterial) Hb = await this._materialExporter.exportStandardMaterialAsync(bb, eb);
          else {
            if (!(bb instanceof kw)) return void Rb.b.Warn(`Unsupported material '${bb.name}' with type ${bb.getClassName()}`);
            Hb = await this._materialExporter.exportOpenPBRMaterialAsync(bb, eb)
          }
          this._materialMap.set(bb, Hb)
        }
        eb.material = Hb
      }
      async _exportMeshAsync(bb, wb) {
        let Mb = wb.getMesh(bb);
        if (void 0 !== Mb) return Mb;
        const eb = {
          primitives: []
        };
        Mb = this._meshes.length, this._meshes.push(eb), wb.setMesh(bb, Mb);
        const Hb = bb.isUnIndexed ? null : bb.ipb(),
          Vb = bb.geometry?.getVertexBuffers(),
          gb = wb.getMorphTargetsFromMesh(bb),
          lb = bb instanceof Ce.b,
          Lb = bb instanceof fe,
          Ib = bb.oR;
        if (Vb && Ib && Ib.length > 0)
          for (const Ob of Ib) {
            const Mb = {
                attributes: {}
              },
              Ib = Ob.AC() || this._babylonScene.defaultMaterial;
            if (Lb) {
              const wb = {
                  name: Ib.name
                },
                eb = bb,
                Hb = Fb.Color3.White(),
                pb = eb.material?.alpha ?? 1,
                Vb = eb.greasedLineMaterial?.color ?? Hb;
              (!Vb.equalsWithEpsilon(Hb, AM.e) || pb < 1) && (wb.pbrMetallicRoughness = {
                baseColorFactor: [...Vb.ppb(), pb]
              }), this._materials.push(wb), Mb.material = this._materials.length - 1
            } else if (lb) {
              const wb = {
                  name: Ib.name
                },
                eb = bb;
              (!eb.color.equalsWithEpsilon(Fb.Color3.White(), AM.e) || eb.alpha < 1) && (wb.pbrMetallicRoughness = {
                baseColorFactor: [...eb.color.ppb(), eb.alpha]
              }), this._materials.push(wb), Mb.material = this._materials.length - 1
            } else await this._exportMaterialAsync(Ib, Vb, Ob, Mb);
            const Ub = lb || Lb ? pb.b.LineListDrawMode : bb.overrideRenderingFillMode ?? Ib.fillMode;
            let tb = Ib._getEffectiveOrientation(bb);
            wb.wasAddedByNoopNode && !bb.RJ().useRightHandedSystem && (tb = tb === pb.b.ClockWiseSideOrientation ? pb.b.CounterClockWiseSideOrientation : pb.b.ClockWiseSideOrientation), this._exportIndices(Hb, Hb ? (0, ZM.d)(Hb, Ob.indexCount, Ob.indexStart, Ob.verticesStart) : Ob.verticesCount > 65535, Hb ? Ob.indexStart : Ob.verticesStart, Hb ? Ob.indexCount : Ob.verticesCount, -Ob.verticesStart, Ub, tb, wb, Mb);
            for (const bb of Object.values(Vb)) this._exportVertexBuffer(bb, Ib, Ob.verticesStart, Ob.verticesCount, wb, Mb);
            if (gb) {
              Mb.targets = [];
              for (const bb of gb) Mb.targets.push(bb.attributes)
            }
            eb.primitives.push(Mb), this._extensionsPostExportMeshPrimitive(Mb)
          }
        if (gb) {
          eb.weights = [], eb.extras || (eb.extras = {}), eb.extras.targetNames = [];
          for (const bb of gb) eb.weights.push(bb.influence), eb.extras.targetNames.push(bb.name)
        }
        return Mb
      }
    }
    We._ExtensionNames = new Array, We._ExtensionFactories = {}, We._ExtensionOrders = {};
    class Je {
      static async GLTFAsync(bb, wb, Mb) {
        Mb && Mb.exportWithoutWaitingForScene || await bb.whenReadyAsync();
        const eb = new We(bb, Mb),
          Hb = await eb.generateGLTFAsync(wb.replace(/\.[^/.]+$/, ""));
        return eb.dispose(), Hb
      }
      static async GLBAsync(bb, wb, Mb) {
        Mb && Mb.exportWithoutWaitingForScene || await bb.whenReadyAsync();
        const eb = new We(bb, Mb),
          Hb = await eb.generateGLBAsync(wb.replace(/\.[^/.]+$/, ""));
        return eb.dispose(), Hb
      }
    }
    const Se = "EXT_mesh_gpu_instancing";

    function Ne(bb, wb) {
      const Mb = new Float32Array(3 * wb);
      for (let eb = 0; eb < wb; eb++) Mb[3 * eb + 0] = bb[4 * eb + 0], Mb[3 * eb + 1] = bb[4 * eb + 1], Mb[3 * eb + 2] = bb[4 * eb + 2];
      return Mb
    }
    class ve {
      constructor(bb) {
        this.name = Se, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(bb, wb, Mb, eb, Hb, pb) {
        return await new Promise((bb => {
          if (wb && Mb instanceof xe.e && Mb.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const bb = Nb.o.Zero(),
              eb = Nb.e.Identity(),
              Vb = Nb.o.One(),
              gb = Mb.thinInstanceGetWorldMatrices(),
              lb = Nb.j.YC[2],
              Lb = Nb.j.Quaternion[1],
              Ib = Nb.j.YC[3];
            let Ob = !1,
              Ub = !1,
              tb = !1;
            const Cb = new Float32Array(3 * Mb.ibb),
              Eb = new Float32Array(4 * Mb.ibb),
              Fb = new Float32Array(3 * Mb.ibb);
            let Bb = 0;
            for (const wb of gb) wb.decompose(Ib, Lb, lb), Hb && (uM(lb), dM(Lb)), Cb.set(lb.ppb(), 3 * Bb), Eb.set(Lb.normalize().ppb(), 4 * Bb), Fb.set(Ib.ppb(), 3 * Bb), Ob = Ob || !lb.equalsWithEpsilon(bb), Ub = Ub || !Lb.equalsWithEpsilon(eb), tb = tb || !Ib.equalsWithEpsilon(Vb), Bb++;
            const sb = {
              attributes: {}
            };
            Ob && (sb.attributes.TRANSLATION = this._buildAccessor(Cb, "VEC3", Mb.ibb, pb)), Ub && (sb.attributes.ROTATION = this._buildAccessor(Eb, "VEC4", Mb.ibb, pb)), tb && (sb.attributes.SCALE = this._buildAccessor(Fb, "VEC3", Mb.ibb, pb));
            let mb = Mb._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (mb) {
              const bb = Mb.ibb,
                wb = "VEC3";
              Mb.hasVertexAlpha && mb.length === 4 * bb ? (this._instanceColorWarned || (Rb.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), mb = Ne(mb, bb)) : mb.length === 4 * bb && (mb = Ne(mb, bb)), mb.length === 3 * bb && (sb.attributes._COLOR_0 = this._buildAccessor(mb, wb, bb, pb))
            }
            wb.extensions = wb.extensions || {}, wb.extensions[Se] = sb
          }
          bb(wb)
        }))
      }
      _buildAccessor(bb, wb, Mb, eb) {
        const Hb = eb.createBufferView(bb),
          pb = eb.createAccessor(Hb, wb, 5126, Mb);
        return this._exporter._accessors.push(pb), this._exporter._accessors.length - 1
      }
    }
    let Qe = !1;

    function Ge() {
      Qe || (Qe = !0, We.RegisterExtension(Se, (bb => new ve(bb))))
    }
    Mb(42161);
    Ge();
    var qe = Mb(54084);

    function ae(bb, wb, Mb, eb) {
      const Hb = bb;
      let pb = null,
        Vb = null,
        gb = null,
        lb = null;
      const Lb = {},
        Ib = wb.find((bb => "POSITION" === bb.dracoName));
      if (!Ib) throw new Error("Draco: Missing position attribute for encoding.");
      if (!Mb) {
        const bb = Ib.data.length / Ib.size;
        Mb = new(bb > 65535 ? Uint32Array : Uint16Array)(bb);
        for (let wb = 0; wb < bb; wb++) Mb[wb] = wb
      }
      try {
        pb = new Hb.Encoder, Vb = new Hb.MeshBuilder, gb = new Hb.Mesh, Vb.AddFacesToMesh(gb, Mb.length / 3, Mb);
        const bb = new Map([
          [Float32Array, (bb, wb, Mb, eb, Hb, pb) => bb.AddFloatAttribute(wb, Mb, eb, Hb, pb)],
          [Uint32Array, (bb, wb, Mb, eb, Hb, pb) => bb.AddUInt32Attribute(wb, Mb, eb, Hb, pb)],
          [Uint16Array, (bb, wb, Mb, eb, Hb, pb) => bb.AddUInt16Attribute(wb, Mb, eb, Hb, pb)],
          [Uint8Array, (bb, wb, Mb, eb, Hb, pb) => bb.AddUInt8Attribute(wb, Mb, eb, Hb, pb)],
          [Int32Array, (bb, wb, Mb, eb, Hb, pb) => bb.AddInt32Attribute(wb, Mb, eb, Hb, pb)],
          [Int16Array, (bb, wb, Mb, eb, Hb, pb) => bb.AddInt16Attribute(wb, Mb, eb, Hb, pb)],
          [Int8Array, (bb, wb, Mb, eb, Hb, pb) => bb.AddInt8Attribute(wb, Mb, eb, Hb, pb)]
        ]);
        for (const Mb of wb) {
          Mb.data instanceof Uint8ClampedArray && (Mb.data = new Uint8Array(Mb.data));
          const wb = bb.get(Mb.data.constructor),
            lb = Mb.data.length / Mb.size;
          Lb[Mb.kind] = wb(Vb, gb, Hb[Mb.dracoName], lb, Mb.size, Mb.data), eb.quantizationBits && eb.quantizationBits[Mb.dracoName] && pb.SetAttributeQuantization(Hb[Mb.dracoName], eb.quantizationBits[Mb.dracoName])
        }
        eb.method && pb.SetEncodingMethod(Hb[eb.method]), void 0 !== eb.encodeSpeed && void 0 !== eb.decodeSpeed && pb.SetSpeedOptions(eb.encodeSpeed, eb.decodeSpeed), lb = new Hb.DracoInt8Array;
        const Ib = pb.EncodeMeshToDracoBuffer(gb, lb);
        if (Ib <= 0) throw new Error("Draco: Failed to encode.");
        const Ob = new Int8Array(Ib);
        for (let wb = 0; wb < Ib; wb++) Ob[wb] = lb.GetValue(wb);
        return {
          data: Ob,
          attributeIds: Lb
        }
      } finally {
        gb && Hb.destroy(gb), Vb && Hb.destroy(Vb), pb && Hb.destroy(pb), lb && Hb.destroy(lb)
      }
    }

    function ie() {
      let bb;
      onmessage = wb => {
        const Mb = wb.data;
        switch (Mb.id) {
          case "init": {
            Mb.url && importScripts(Mb.url);
            const wb = Mb.wasmBinary ? {
              wasmBinary: Mb.wasmBinary
            } : {};
            bb = DracoEncoderModule(wb), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!bb) throw new Error("Draco: Encoder module is not available.");
            bb.then((bb => {
              const wb = ae(bb, Mb.attributes, Mb.indices, Mb.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: wb
              }, wb ? [wb.data.buffer] : void 0)
            })).catch((bb => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: bb.message
              })
            }))
        }
      }
    }
    class ue {
      constructor(bb) {
        if (bb.workerPool) return void(this._workerPoolPromise = Promise.resolve(bb.workerPool));
        const wb = bb.wasmBinary,
          Mb = bb.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          eb = Mb && "function" === typeof Worker && "function" === typeof URL,
          Hb = eb || !bb.jsModule,
          pb = bb.wasmUrl && bb.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Hb ? jw.e.GetBabylonScriptURL(bb.wasmUrl, !0) : "",
            wasmBinaryPromise: wb ? Promise.resolve(wb) : jw.e.LoadFileAsync(jw.e.GetBabylonScriptURL(bb.wasmBinaryUrl, !0))
          } : {
            url: Hb ? jw.e.GetBabylonScriptURL(bb.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        eb ? this._workerPoolPromise = pb.wasmBinaryPromise.then((bb => {
          const wb = this._getWorkerContent(),
            eb = URL.createObjectURL(new Blob([wb], {
              type: "application/javascript"
            }));
          return new qe.c(Mb, (() => async function(bb, wb, Mb) {
            return await new Promise(((eb, Hb) => {
              const pb = wb => {
                  bb.removeEventListener("error", pb), bb.removeEventListener("message", Vb), Hb(wb)
                },
                Vb = wb => {
                  "initDone" === wb.data.id && (bb.removeEventListener("error", pb), bb.removeEventListener("message", Vb), eb(bb))
                };
              if (bb.addEventListener("error", pb), bb.addEventListener("message", Vb), wb) {
                const eb = wb.slice(0);
                bb.postMessage({
                  id: "init",
                  url: Mb,
                  wasmBinary: eb
                }, [eb])
              } else bb.postMessage({
                id: "init",
                url: Mb
              })
            }))
          }(new Worker(eb), bb, pb.url)))
        })) : this._modulePromise = pb.wasmBinaryPromise.then((async wb => {
          if (!this._isModuleAvailable() && !bb.jsModule) {
            if (!pb.url) throw new Error("Draco codec module is not available");
            await jw.e.LoadBabylonScriptAsync(pb.url)
          }
          return await this._createModuleAsync(wb, bb.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((bb => {
          bb.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function de() {
      const bb = bb => !!bb && "object" === typeof bb;
      for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
      return Mb.reduce(((wb, Mb) => {
        const eb = Object.keys(Mb);
        for (const Hb of eb) {
          const eb = wb[Hb],
            pb = Mb[Hb];
          Array.isArray(eb) && Array.isArray(pb) ? wb[Hb] = eb.concat(pb) : bb(eb) && bb(pb) ? wb[Hb] = de(eb, pb) : wb[Hb] = pb
        }
        return wb
      }), {})
    }

    function Pe(bb) {
      return bb === vb.i.PositionKind ? "POSITION" : bb === vb.i.NormalKind ? "NORMAL" : bb === vb.i.ColorKind ? "COLOR" : bb.startsWith(vb.i.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const ne = {
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
    class ye extends ue {
      static get DefaultAvailable() {
        return !!((bb = ye.DefaultConfiguration).wasmUrl && (bb.wasmBinary || bb.wasmBinaryUrl) && "object" === typeof WebAssembly || bb.fallbackUrl);
        var bb
      }
      static get Default() {
        return ye._Default ?? (ye._Default = new ye), ye._Default
      }
      static ResetDefault(bb) {
        ye._Default && (bb || ye._Default.dispose(), ye._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(bb, wb) {
        return {
          module: await (wb || DracoEncoderModule)({
            wasmBinary: bb
          })
        }
      }
      _getWorkerContent() {
        return `${ae}(${ie})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye.DefaultConfiguration)
      }
      async _encodeAsync(bb, wb, Mb) {
        const eb = Mb ? de(ne, Mb) : ne;
        if (this._workerPoolPromise) {
          const Mb = await this._workerPoolPromise;
          return await new Promise(((Hb, pb) => {
            Mb.push(((Mb, Vb) => {
              const gb = bb => {
                  Mb.removeEventListener("error", gb), Mb.removeEventListener("message", lb), pb(bb), Vb()
                },
                lb = bb => {
                  "encodeMeshSuccess" === bb.data.id ? (Mb.removeEventListener("error", gb), Mb.removeEventListener("message", lb), Hb(bb.data.encodedMeshData), Vb()) : "encodeMeshError" === bb.data.id && (Mb.removeEventListener("error", gb), Mb.removeEventListener("message", lb), pb(new Error(bb.data.errorMessage)), Vb())
                };
              Mb.addEventListener("error", gb), Mb.addEventListener("message", lb);
              const Lb = [];
              for (const wb of bb) Lb.push(wb.data.buffer);
              wb && Lb.push(wb.buffer), Mb.postMessage({
                id: "encodeMesh",
                attributes: bb,
                indices: wb,
                options: eb
              }, Lb)
            }))
          }))
        }
        if (this._modulePromise) {
          return ae((await this._modulePromise).module, bb, wb, eb)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(bb, wb) {
        if (0 == bb.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        bb instanceof xe.e && bb.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === wb?.method && (Rb.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), wb.method = "MESH_SEQUENTIAL_ENCODING");
        const Mb = function(bb) {
            let wb = bb.ipb(void 0, !0);
            return !wb || wb instanceof Uint32Array || wb instanceof Uint16Array || (wb = ((0, ZM.d)(wb, wb.length) ? Uint32Array : Uint16Array).from(wb)), wb
          }(bb),
          eb = function(bb, wb) {
            const Mb = [];
            for (const eb of bb.getVerticesDataKinds()) {
              if (wb?.includes(eb)) {
                if (eb === vb.i.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Hb = bb.getVertexBuffer(eb),
                pb = Hb.getSize(),
                Vb = (0, ZM.s)(Hb.getData(), pb, Hb.type, Hb.byteOffset, Hb.byteStride, bb.getTotalVertices(), !0);
              Mb.push({
                kind: eb,
                dracoName: Pe(eb),
                size: pb,
                data: Vb
              })
            }
            return Mb
          }(bb, wb?.excludedAttributes);
        return await this._encodeAsync(eb, Mb, wb)
      }
    }
    ye.DefaultConfiguration = {
      wasmUrl: `${jw.e._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${jw.e._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${jw.e._DefaultCdnUrl}/draco_encoder.js`
    }, ye._Default = null;
    const oe = "KHR_draco_mesh_compression";
    class Te {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = oe, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === bb.options.meshCompressionMethod && ye.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(bb, wb, Mb) {
        if (!this.enabled) return;
        if (4 !== bb.mode && 5 !== bb.mode) return void Rb.b.Warn("Cannot compress primitive with mode " + bb.mode + ".");
        const eb = [],
          Hb = [];
        let pb = null;
        if (void 0 !== bb.indices) {
          const Vb = Mb[bb.indices],
            gb = wb.getBufferView(Vb);
          pb = wb.getData(gb).slice(), eb.push(gb), Hb.push(Vb)
        }
        const Vb = [];
        for (const [Ib, Ob] of Object.entries(bb.attributes)) {
          const bb = Mb[Ob],
            pb = wb.getBufferView(bb),
            lb = qM(bb.type),
            Lb = (0, ZM.s)(wb.getData(pb), lb, bb.componentType, bb.byteOffset || 0, pb.byteStride || (0, ZM.r)(bb.componentType) * lb, bb.count, !0);
          Vb.push({
            kind: Ib,
            dracoName: (gb = Ib, "POSITION" === gb ? "POSITION" : "NORMAL" === gb ? "NORMAL" : gb.startsWith("COLOR") ? "COLOR" : gb.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: qM(bb.type),
            data: Lb
          }), eb.push(pb), Hb.push(bb)
        }
        var gb;
        const lb = {
            method: bb.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          Lb = ye.Default._encodeAsync(Vb, pb, lb).then((Mb => {
            const pb = {
                bufferView: -1,
                attributes: Mb.attributeIds
              },
              Vb = wb.createBufferView(Mb.data);
            wb.setBufferView(pb, Vb);
            for (const bb of eb) this._bufferViewsUsed.add(bb);
            for (const bb of Hb) this._accessorsUsed.add(bb);
            bb.extensions || (bb.extensions = {}), bb.extensions[oe] = pb
          })).catch((bb => {
            Rb.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + bb.message)
          }));
        this._encodePromises.push(Lb), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(bb) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((wb => {
          bb.getPropertiesWithBufferView(wb).every((bb => this._accessorsUsed.has(bb))) && bb.removeBufferView(wb)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let ke = !1;

    function bH() {
      ke || (ke = !0, We.RegisterExtension(oe, (bb => new Te(bb))))
    }
    bH();
    var wH = Mb(53764);
    const MH = "KHR_lights_punctual",
      eH = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      HH = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      pH = Nb.o.Backward();
    class VH {
      constructor(bb) {
        this.name = MH, this.enabled = !0, this.required = !1, this._exporter = bb
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[MH] = this._lights
      }
      async postExportNodeAsync(bb, wb, Mb, eb, Hb) {
        return await new Promise((pb => {
          if (!(Mb instanceof Oe.d)) return void pb(wb);
          const Vb = Mb.getTypeID() == Oe.d.LIGHTTYPEID_POINTLIGHT ? "point" : Mb.getTypeID() == Oe.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : Mb.getTypeID() == Oe.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!Vb || !(Mb instanceof wH.e)) return Rb.b.Warn(`${bb}: Light ${Mb.name} is not supported in ${MH}`), void pb(wb);
          if (Mb.falloffType !== Oe.d.FALLOFF_GLTF && Rb.b.Warn(`${bb}: Light falloff for ${Mb.name} does not match the ${MH} specification!`), !Mb.position.Flb(0, 0, 0)) {
            const bb = Nb.j.YC[0].eZ(Mb.position);
            Hb && uM(bb), wb.translation = bb.ppb()
          }
          if ("point" !== Vb) {
            const bb = Mb.direction.normalizeToRef(Nb.j.YC[0]);
            Hb && uM(bb);
            const eb = Nb.e.FromUnitVectorsToRef(pH, bb, Nb.j.Quaternion[0]);
            Nb.e.IsIdentity(eb) || (wb.rotation = eb.ppb())
          }
          const gb = {
            type: Vb,
            name: Mb.name,
            color: Mb.diffuse.ppb(),
            intensity: Mb.intensity,
            range: Mb.range
          };
          if (TM(gb, eH), "spot" === Vb) {
            const bb = Mb;
            gb.spot = {
              innerConeAngle: bb.innerAngle / 2,
              outerConeAngle: bb.angle / 2
            }, TM(gb.spot, HH)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(gb);
          const lb = {
              light: this._lights.lights.length - 1
            },
            Lb = Mb.parent;
          if (Lb && yM(Mb, Lb)) {
            const bb = eb.get(Lb);
            if (bb) {
              const Mb = this._exporter._nodes[bb];
              return nM(wb, Mb), Mb.extensions || (Mb.extensions = {}), Mb.extensions[MH] = lb, void pb(null)
            }
          }
          wb.extensions || (wb.extensions = {}), wb.extensions[MH] = lb, pb(wb)
        }))
      }
    }
    let gH = !1;

    function lH() {
      gH || (gH = !0, We.RegisterExtension(MH, (bb => new VH(bb))))
    }
    lH();
    const LH = "KHR_interactivity";
    class IH {
      constructor(bb) {
        this._exporter = bb, this.name = LH, this.enabled = !!bb.options.khrInteractivity, this.required = bb.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var bb, wb, Mb;
        const eb = this._exporter.options.khrInteractivity;
        if (!eb) return;
        const Hb = eb.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: bb => this._exporter._getNodeIndex(bb),
          getAnimationIndex: bb => this._exporter._getAnimationIndex(bb),
          getCameraIndex: bb => this._exporter._getCameraIndex(bb),
          getMaterialIndex: bb => this._exporter._getMaterialIndex(bb),
          getRootIndex: (bb, wb) => this._exporter._getRootIndex(bb, wb),
          setNodeExtension: (bb, wb, Mb) => this._exporter._setNodeExtension(bb, wb, Mb)
        });
        this._exporter._glTF.extensions[LH] = Hb;
        for (const pb of eb.additionalExtensionsUsed)(bb = this._exporter._glTF).extensionsUsed || (bb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(pb) && this._exporter._glTF.extensionsUsed.push(pb);
        for (const pb of eb.additionalExtensionsRequired)(wb = this._exporter._glTF).extensionsUsed || (wb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(pb) && this._exporter._glTF.extensionsUsed.push(pb), (Mb = this._exporter._glTF).extensionsRequired || (Mb.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(pb) && this._exporter._glTF.extensionsRequired.push(pb)
      }
    }
    let OH = !1;

    function UH() {
      OH || (OH = !0, We.RegisterExtension(LH, (bb => new IH(bb)), 200))
    }
    UH();
    const tH = "EXT_lights_area",
      CH = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      EH = {
        aspect: 1
      },
      FH = Nb.o.Backward();
    class BH {
      constructor(bb) {
        this.name = tH, this.enabled = !0, this.required = !1, this._exporter = bb
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[tH] = this._lights
      }
      async postExportNodeAsync(bb, wb, Mb, eb, Hb) {
        return await new Promise((pb => {
          if (!(Mb instanceof Oe.d)) return void pb(wb);
          const Vb = Mb.getTypeID() == Oe.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!Vb) return Rb.b.Warn(`${bb}: Light ${Mb.name} is not supported in ${tH}`), void pb(wb);
          const gb = Mb;
          if (gb.falloffType !== Oe.d.FALLOFF_GLTF && Rb.b.Warn(`${bb}: Light falloff for ${Mb.name} does not match the ${tH} specification!`), !gb.position.Flb(0, 0, 0)) {
            const bb = Nb.j.YC[0].eZ(gb.position);
            Hb && uM(bb), wb.translation = bb.ppb()
          }
          const lb = Nb.o.Forward();
          Hb && uM(lb);
          const Lb = Nb.e.FromUnitVectorsToRef(FH, lb, Nb.j.Quaternion[0]);
          Nb.e.IsIdentity(Lb) || (wb.rotation = Lb.ppb());
          const Ib = {
            type: Vb,
            name: gb.name,
            color: gb.diffuse.ppb(),
            intensity: gb.intensity,
            size: gb.height,
            rect: {
              aspect: gb.width / gb.height
            }
          };
          TM(Ib, CH), Ib.rect && TM(Ib.rect, EH), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Ib);
          const Ob = {
              light: this._lights.lights.length - 1
            },
            Ub = Mb.parent;
          if (Ub && yM(gb, Ub)) {
            const bb = eb.get(Ub);
            if (bb) {
              const Mb = this._exporter._nodes[bb];
              return nM(wb, Mb), Mb.extensions || (Mb.extensions = {}), Mb.extensions[tH] = Ob, void pb(null)
            }
          }
          wb.extensions || (wb.extensions = {}), wb.extensions[tH] = Ob, pb(wb)
        }))
      }
    }
    let sH = !1;

    function mH() {
      sH || (sH = !0, We.RegisterExtension(tH, (bb => new BH(bb))))
    }
    mH();
    const hH = "KHR_materials_anisotropy";
    class zH {
      constructor(bb) {
        this.name = hH, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, wb, Mb) {
        const eb = [];
        if (Mb instanceof Xw) {
          if (Mb.anisotropy.isEnabled && !Mb.anisotropy.legacy) return Mb.anisotropy.texture && eb.push(Mb.anisotropy.texture), eb
        } else if (Mb instanceof kw && Mb.specularRoughnessAnisotropy > 0) {
          const bb = function(bb) {
            const wb = bb.specularRoughnessAnisotropyTexture,
              Mb = bb.geometryTangentTexture;
            return `${wb&&wb.getInternalTexture()?wb.getInternalTexture().uniqueId:"NoStrength"}_${Mb&&Mb.getInternalTexture()?Mb.getInternalTexture().uniqueId:"NoTangent"}`
          }(Mb);
          if (this._anisoTexturesMap[bb]) eb.push(this._anisoTexturesMap[bb]);
          else {
            const wb = await async function(bb) {
              const wb = bb.RJ(),
                Mb = bb.specularRoughnessAnisotropyTexture,
                eb = bb.geometryTangentTexture;
              return Mb || eb ? await gM("AnisotropyTexture", IM(eb ? lM(eb, 0) : LM(1), eb ? lM(eb, 1) : LM(0), Mb ? lM(Mb, 0) : LM(1)), wb) : null
            }(Mb);
            wb && (eb.push(wb), this._anisoTexturesMap[bb] = wb)
          }
          return eb
        }
        return []
      }
      postExportMaterialAsync(bb, wb, Mb) {
        return new Promise((bb => {
          var eb;
          if (Mb instanceof Xw) {
            if (!Mb.anisotropy.isEnabled || Mb.anisotropy.legacy) return void bb(wb);
            this._wasUsed = !0, wb.extensions = wb.extensions || {};
            const eb = this._exporter._materialExporter.getTextureInfo(Mb.anisotropy.texture),
              Hb = {
                anisotropyStrength: Mb.anisotropy.intensity,
                anisotropyRotation: Mb.anisotropy.angle,
                anisotropyTexture: eb ?? void 0
              };
            null !== Hb.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions[hH] = Hb
          } else if (Mb instanceof kw && Mb.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, wb.extensions = wb.extensions || {};
            let Hb = Mb.specularRoughnessTexture;
            Mb._useRoughnessFromMetallicTextureGreen && (Hb = Mb.baseMetalnessTexture);
            const pb = this._anisoTexturesMap[Mb.id];
            if (!Hb && !pb) {
              let eb = Mb.specularRoughness,
                Hb = Mb.specularRoughnessAnisotropy;
              if (!Mb._useGltfStyleAnisotropy) {
                const bb = function(bb, wb) {
                  const Mb = bb * bb,
                    eb = Mb * Math.sqrt(2 / (1 + (1 - wb) * (1 - wb))),
                    Hb = (1 - wb) * eb;
                  return {
                    newBaseRoughness: Math.sqrt(Hb),
                    newAnisotropyStrength: Math.min(Math.sqrt((eb - Mb) / Math.max(1 - Mb, 1e-4)), 1)
                  }
                }(Mb.specularRoughness, Mb.specularRoughnessAnisotropy);
                eb = bb.newBaseRoughness, Hb = bb.newAnisotropyStrength
              }
              wb.pbrMetallicRoughness && (wb.pbrMetallicRoughness.roughnessFactor = eb);
              const pb = {
                anisotropyStrength: Hb,
                anisotropyRotation: Mb.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return wb.extensions[hH] = pb, bb(wb)
            }
            const Vb = pb ? this._exporter._materialExporter.getTextureInfo(pb) : null,
              gb = {
                anisotropyStrength: Mb.specularRoughnessAnisotropy,
                anisotropyRotation: Mb.geometryTangentAngle,
                anisotropyTexture: Vb || void 0,
                extensions: {}
              };
            Mb._useGltfStyleAnisotropy || (wb.extensions.KHR_materials_openpbr = {}, (eb = this._exporter._glTF).extensionsUsed || (eb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions[hH] = gb
          }
          bb(wb)
        }))
      }
    }
    let XH = !1;

    function xH() {
      XH || (XH = !0, We.RegisterExtension(hH, (bb => new zH(bb))))
    }
    xH();
    const jH = "KHR_materials_clearcoat";

    function KH(bb, wb) {
      const Mb = new cb.f(wb.name, wb.RJ());
      return Mb._texture = bb, Mb.coordinatesIndex = wb.coordinatesIndex, wb instanceof cb.f && (Mb.uOffset = wb.uOffset, Mb.vOffset = wb.vOffset, Mb.uScale = wb.uScale, Mb.vScale = wb.vScale, Mb.wAng = wb.wAng), Mb.wrapU = wb.wrapU, Mb.wrapV = wb.wrapV, Mb
    }
    class rH {
      constructor(bb) {
        this.name = jH, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = bb
      }
      dispose() {
        for (const bb of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[bb].dispose()
        }
        this._mergedTexturesMap = {};
        for (const bb of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[bb].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, wb, Mb) {
        const eb = [];
        if (Mb instanceof Xw) {
          if (Mb.clearCoat.isEnabled) return Mb.clearCoat.texture && eb.push(Mb.clearCoat.texture), !Mb.clearCoat.useRoughnessFromMainTexture && Mb.clearCoat.textureRoughness && eb.push(Mb.clearCoat.textureRoughness), Mb.clearCoat.bumpTexture && eb.push(Mb.clearCoat.bumpTexture), eb
        } else if (Mb instanceof kw && Mb.coatWeight > 0) {
          let bb = !1;
          if (Mb.coatWeightTexture ? Mb.coatRoughnessTexture ? Mb._useCoatRoughnessFromGreenChannel && Mb.coatWeightTexture.getInternalTexture() === Mb.coatRoughnessTexture.getInternalTexture() ? (eb.push(Mb.coatWeightTexture), eb.push(Mb.coatRoughnessTexture)) : bb = !0 : eb.push(Mb.coatWeightTexture) : Mb.coatRoughnessTexture && (Mb._useCoatRoughnessFromGreenChannel ? eb.push(Mb.coatRoughnessTexture) : bb = !0), bb) {
            const bb = function(bb) {
              const wb = bb.coatWeightTexture,
                Mb = wb && wb.getInternalTexture() ? wb.getInternalTexture().uniqueId : "NoCoat",
                eb = bb.coatRoughnessTexture;
              return `${Mb}_${eb&&eb.getInternalTexture()?eb.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Mb);
            if (!this._cachedInternalTexturesMap[bb]) {
              const wb = await async function(bb) {
                const wb = bb.RJ(),
                  Mb = bb.coatWeightTexture,
                  eb = bb.coatRoughnessTexture;
                return Mb || eb ? (await gM("CoatTexture", IM(Mb ? lM(Mb, 0) : LM(1), eb ? lM(eb, bb._useCoatRoughnessFromGreenChannel ? 1 : 0) : LM(1)), wb)).getInternalTexture() : null
              }(Mb);
              wb && (this._cachedInternalTexturesMap[bb] = wb)
            }
            this._cachedInternalTexturesMap[bb] && (Mb.coatWeightTexture && (this._mergedTexturesMap[Mb.coatWeightTexture.uniqueId] = KH(this._cachedInternalTexturesMap[bb], Mb.coatWeightTexture), eb.push(this._mergedTexturesMap[Mb.coatWeightTexture.uniqueId])), Mb.coatRoughnessTexture && (this._mergedTexturesMap[Mb.coatRoughnessTexture.uniqueId] = KH(this._cachedInternalTexturesMap[bb], Mb.coatRoughnessTexture), eb.push(this._mergedTexturesMap[Mb.coatRoughnessTexture.uniqueId])))
          }
          return Mb.geometryCoatNormalTexture && eb.push(Mb.geometryCoatNormalTexture), eb
        }
        return []
      }
      postExportMaterialAsync(bb, wb, Mb) {
        return new Promise((bb => {
          if (Mb instanceof Xw) {
            if (!Mb.clearCoat.isEnabled) return void bb(wb);
            this._wasUsed = !0, wb.extensions = wb.extensions || {};
            const eb = this._exporter._materialExporter.getTextureInfo(Mb.clearCoat.texture);
            let Hb;
            Hb = Mb.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Mb.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Mb.clearCoat.textureRoughness), Mb.clearCoat.isTintEnabled && jw.e.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Mb.name}`), Mb.clearCoat.remapF0OnInterfaceChange && jw.e.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${Mb.name}`);
            const pb = this._exporter._materialExporter.getTextureInfo(Mb.clearCoat.bumpTexture),
              Vb = {
                clearcoatFactor: Mb.clearCoat.intensity,
                clearcoatTexture: eb ?? void 0,
                clearcoatRoughnessFactor: Mb.clearCoat.roughness,
                clearcoatRoughnessTexture: Hb ?? void 0,
                clearcoatNormalTexture: pb ?? void 0
              };
            null === Vb.clearcoatTexture && null === Vb.clearcoatRoughnessTexture && null === Vb.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions[jH] = Vb
          } else if (Mb instanceof kw) {
            if (0 == Mb.coatWeight) return void bb(wb);
            let eb, Hb, pb, Vb;
            this._wasUsed = !0, wb.extensions = wb.extensions || {}, Mb.coatWeightTexture && (eb = this._mergedTexturesMap[Mb.coatWeightTexture.uniqueId], Hb = this._exporter._materialExporter.getTextureInfo(eb)), Mb.coatRoughnessTexture && (pb = this._mergedTexturesMap[Mb.coatRoughnessTexture.uniqueId], Vb = this._exporter._materialExporter.getTextureInfo(pb)), Mb.coatColorTexture && jw.e.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Mb.name}`);
            const gb = this._exporter._materialExporter.getTextureInfo(Mb.geometryCoatNormalTexture),
              lb = {
                clearcoatFactor: Mb.coatWeight,
                clearcoatTexture: Hb ?? void 0,
                clearcoatRoughnessFactor: Mb.coatRoughness,
                clearcoatRoughnessTexture: Vb ?? void 0,
                clearcoatNormalTexture: gb ?? void 0
              };
            null === lb.clearcoatTexture && null === lb.clearcoatRoughnessTexture && null === lb.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions[jH] = lb
          }
          bb(wb)
        }))
      }
    }
    let RH = !1;

    function DH() {
      RH || (RH = !0, We.RegisterExtension(jH, (bb => new rH(bb))))
    }
    DH();
    const cH = "KHR_materials_coat";

    function YH(bb) {
      const wb = bb.coatRoughnessAnisotropyTexture,
        Mb = bb.geometryCoatTangentTexture;
      return `${wb&&wb.getInternalTexture()?wb.getInternalTexture().uniqueId:"NoStrength"}_${Mb&&Mb.getInternalTexture()?Mb.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function ZH(bb, wb) {
      const Mb = new cb.f(wb.name, wb.RJ());
      return Mb._texture = bb, Mb.coordinatesIndex = wb.coordinatesIndex, wb instanceof cb.f && (Mb.uOffset = wb.uOffset, Mb.vOffset = wb.vOffset, Mb.uScale = wb.uScale, Mb.vScale = wb.vScale, Mb.wAng = wb.wAng), Mb.wrapU = wb.wrapU, Mb.wrapV = wb.wrapV, Mb
    }
    class fH {
      constructor(bb) {
        this.name = cH, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = bb
      }
      dispose() {
        for (const bb of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[bb].dispose()
        }
        this._mergedTexturesMap = {};
        for (const bb of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[bb].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, wb, Mb) {
        const eb = [];
        if (Mb instanceof Xw) {
          if (Mb.clearCoat.isEnabled) return Mb.clearCoat.texture && eb.push(Mb.clearCoat.texture), !Mb.clearCoat.useRoughnessFromMainTexture && Mb.clearCoat.textureRoughness && eb.push(Mb.clearCoat.textureRoughness), Mb.clearCoat.bumpTexture && eb.push(Mb.clearCoat.bumpTexture), Mb.clearCoat.tintTexture && eb.push(Mb.clearCoat.tintTexture), eb
        } else if (Mb instanceof kw && Mb.coatWeight > 0) {
          let bb = !1;
          if (Mb.coatWeightTexture ? Mb.coatRoughnessTexture ? Mb._useCoatRoughnessFromGreenChannel && Mb.coatWeightTexture.getInternalTexture() === Mb.coatRoughnessTexture.getInternalTexture() ? (eb.push(Mb.coatWeightTexture), eb.push(Mb.coatRoughnessTexture)) : bb = !0 : eb.push(Mb.coatWeightTexture) : Mb.coatRoughnessTexture && (Mb._useCoatRoughnessFromGreenChannel ? eb.push(Mb.coatRoughnessTexture) : bb = !0), bb) {
            const bb = function(bb) {
              const wb = bb.coatWeightTexture,
                Mb = wb && wb.getInternalTexture() ? wb.getInternalTexture().uniqueId : "NoCoat",
                eb = bb.coatRoughnessTexture;
              return `${Mb}_${eb&&eb.getInternalTexture()?eb.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Mb);
            if (!this._cachedInternalTexturesMap[bb]) {
              const wb = await async function(bb) {
                const wb = bb.RJ(),
                  Mb = bb.coatWeightTexture,
                  eb = bb.coatRoughnessTexture;
                return Mb || eb ? (await gM("CoatTexture", IM(Mb ? lM(Mb, 0) : LM(1), eb ? lM(eb, bb._useCoatRoughnessFromGreenChannel ? 1 : 0) : LM(1)), wb)).getInternalTexture() : null
              }(Mb);
              wb && (this._cachedInternalTexturesMap[bb] = wb)
            }
            this._cachedInternalTexturesMap[bb] && (Mb.coatWeightTexture && (this._mergedTexturesMap[Mb.coatWeightTexture.uniqueId] = ZH(this._cachedInternalTexturesMap[bb], Mb.coatWeightTexture), eb.push(this._mergedTexturesMap[Mb.coatWeightTexture.uniqueId])), Mb.coatRoughnessTexture && (this._mergedTexturesMap[Mb.coatRoughnessTexture.uniqueId] = ZH(this._cachedInternalTexturesMap[bb], Mb.coatRoughnessTexture), eb.push(this._mergedTexturesMap[Mb.coatRoughnessTexture.uniqueId])))
          }
          if (Mb.geometryCoatNormalTexture && eb.push(Mb.geometryCoatNormalTexture), Mb.coatColorTexture && eb.push(Mb.coatColorTexture), Mb.coatRoughnessAnisotropy > 0) {
            const bb = YH(Mb);
            if (this._mergedTexturesMap[bb]) eb.push(this._mergedTexturesMap[bb]);
            else {
              const wb = await async function(bb) {
                const wb = bb.RJ(),
                  Mb = bb.coatRoughnessAnisotropyTexture,
                  eb = bb.geometryCoatTangentTexture;
                return Mb || eb ? await gM("AnisotropyTexture", IM(eb ? lM(eb, 0) : LM(1), eb ? lM(eb, 1) : LM(0), Mb ? lM(Mb, 0) : LM(1)), wb) : null
              }(Mb);
              wb && (eb.push(wb), this._mergedTexturesMap[bb] = wb)
            }
            return eb
          }
          return eb
        }
        return []
      }
      postExportMaterialAsync(bb, wb, Mb) {
        return new Promise((bb => {
          var eb;
          if (Mb instanceof Xw) {
            if (!Mb.clearCoat.isEnabled) return void bb(wb);
            this._wasUsed = !0, wb.extensions = wb.extensions || {};
            const eb = this._exporter._materialExporter.getTextureInfo(Mb.clearCoat.texture);
            let Hb, pb;
            Hb = Mb.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Mb.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Mb.clearCoat.textureRoughness), Mb.clearCoat.isTintEnabled && (pb = this._exporter._materialExporter.getTextureInfo(Mb.clearCoat.tintTexture));
            const Vb = this._exporter._materialExporter.getTextureInfo(Mb.clearCoat.bumpTexture),
              gb = Mb.clearCoat.indexOfRefraction,
              lb = {
                coatFactor: Mb.clearCoat.intensity,
                coatTexture: eb ?? void 0,
                coatRoughnessFactor: Mb.clearCoat.roughness,
                coatRoughnessTexture: Hb ?? void 0,
                coatNormalTexture: Vb ?? void 0,
                coatColorFactor: Mb.clearCoat.tintColor.ppb(),
                coatColorTexture: pb ?? void 0,
                coatIor: 1.5 !== gb ? gb : void 0
              };
            null === lb.coatTexture && null === lb.coatRoughnessTexture && null === lb.coatRoughnessTexture && null === lb.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions[cH] = lb
          } else if (Mb instanceof kw) {
            if (0 == Mb.coatWeight) return void bb(wb);
            let Hb, pb, Vb, gb;
            this._wasUsed = !0, wb.extensions = wb.extensions || {}, Mb.coatWeightTexture && (Hb = this._mergedTexturesMap[Mb.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[Mb.coatWeightTexture.uniqueId] : Mb.coatWeightTexture, pb = this._exporter._materialExporter.getTextureInfo(Hb)), Mb.coatRoughnessTexture && (Vb = this._mergedTexturesMap[Mb.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Mb.coatRoughnessTexture.uniqueId] : Mb.coatRoughnessTexture, gb = this._exporter._materialExporter.getTextureInfo(Vb));
            const lb = this._exporter._materialExporter.getTextureInfo(Mb.geometryCoatNormalTexture),
              Lb = this._exporter._materialExporter.getTextureInfo(Mb.coatColorTexture),
              Ib = Mb.coatIor,
              Ob = Mb.coatDarkening,
              Ub = Mb.coatRoughnessTexture,
              tb = YH(Mb),
              Cb = this._mergedTexturesMap[tb];
            let Eb, Fb = 0,
              Bb = 0;
            if (Mb.coatRoughnessAnisotropy > 0) {
              if (Ub || Cb) {
                const bb = Cb ? this._exporter._materialExporter.getTextureInfo(Cb) : null;
                Fb = Mb.coatRoughnessAnisotropy, Bb = Mb.geometryCoatTangentAngle, Eb = bb || void 0
              } else {
                let bb = Mb.coatRoughness,
                  eb = Mb.coatRoughnessAnisotropy;
                if (!Mb._useGltfStyleAnisotropy) {
                  const wb = function(bb, wb) {
                    const Mb = bb * bb,
                      eb = Mb * Math.sqrt(2 / (1 + (1 - wb) * (1 - wb))),
                      Hb = (1 - wb) * eb;
                    return {
                      newBaseRoughness: Math.sqrt(Hb),
                      newAnisotropyStrength: Math.min(Math.sqrt((eb - Mb) / Math.max(1 - Mb, 1e-4)), 1)
                    }
                  }(Mb.coatRoughness, Mb.coatRoughnessAnisotropy);
                  bb = wb.newBaseRoughness, eb = wb.newAnisotropyStrength
                }
                wb.pbrMetallicRoughness && (wb.pbrMetallicRoughness.roughnessFactor = bb), Fb = eb, Bb = Mb.geometryCoatTangentAngle + .5 * Math.PI, Eb = void 0
              }
              Mb._useGltfStyleAnisotropy || (wb.extensions.KHR_materials_openpbr = {}, (eb = this._exporter._glTF).extensionsUsed || (eb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const sb = {
              coatFactor: Mb.coatWeight,
              coatTexture: pb ?? void 0,
              coatRoughnessFactor: Mb.coatRoughness,
              coatRoughnessTexture: gb ?? void 0,
              coatNormalTexture: lb ?? void 0,
              coatColorFactor: Mb.coatColor.ppb(),
              coatColorTexture: Lb ?? void 0,
              coatIor: 1.5 !== Ib ? Ib : void 0,
              coatDarkeningFactor: 1 !== Ob ? Ob : void 0,
              coatAnisotropyRotation: Bb,
              coatAnisotropyStrength: Fb,
              coatAnisotropyTexture: Eb
            };
            null === sb.coatTexture && null === sb.coatRoughnessTexture && null === sb.coatRoughnessTexture && null === sb.coatAnisotropyTexture && null === sb.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions[cH] = sb
          }
          bb(wb)
        }))
      }
    }
    let AH = !1;

    function WH() {
      AH || (AH = !0, We.RegisterExtension(cH, (bb => new fH(bb))))
    }
    WH();
    let JH = (() => {
      var bb, wb, Mb, eb, Hb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb, sb, mb, hb, zb, Xb, xb, jb, Rb, Db, cb, Yb, Zb, fb, Wb, Jb, Sb, Nb, vb, Qb, Gb, qb, ab, ib, db, Pb, nb, yb, ob, Tb, kb, bw, ww, Mw, ew, Hw, pw, Vw, gw, lw, Lw, Iw, Ow, Uw, tw, Cw, Ew, Fw, Bw, sw, mw;
      let hw, zw, jw, Kw, rw, Rw, Dw, Yw, Zw, fw, Aw, Ww, Jw, Sw, Nw, vw, Qw, Gw, qw, aw, iw, uw, dw, Pw, nw, yw, ow, Tw, kw, bM, wM, MM, eM, HM, pM, VM, gM, lM, LM, IM, OM, UM, tM, CM, EM, FM, BM, sM, mM, hM, zM, XM, xM, jM, KM, rM, RM, DM, cM, YM, ZM, fM, AM, WM, JM, SM, NM, vM, QM = Xw,
        GM = [],
        qM = [],
        aM = [],
        iM = [],
        uM = [],
        dM = [],
        PM = [],
        nM = [],
        yM = [],
        oM = [],
        TM = [],
        kM = [],
        be = [],
        we = [],
        Me = [],
        ee = [],
        He = [],
        pe = [],
        Ve = [],
        ge = [],
        le = [],
        Le = [],
        Ie = [],
        Oe = [],
        Ue = [],
        te = [],
        Ce = [],
        Ee = [],
        Fe = [],
        Be = [],
        se = [],
        me = [],
        he = [],
        ze = [],
        Xe = [],
        xe = [],
        je = [],
        Ke = [],
        re = [],
        Re = [],
        De = [],
        ce = [],
        Ye = [],
        Ze = [],
        fe = [],
        Ae = [],
        We = [],
        Je = [],
        Se = [],
        Ne = [],
        ve = [],
        Qe = [],
        Ge = [],
        qe = [],
        ae = [],
        ie = [],
        ue = [],
        de = [],
        Pe = [],
        ne = [],
        ye = [],
        oe = [],
        Te = [],
        ke = [],
        bH = [],
        wH = [],
        MH = [],
        eH = [],
        HH = [],
        pH = [],
        VH = [],
        gH = [],
        lH = [],
        LH = [],
        IH = [],
        OH = [],
        UH = [],
        tH = [],
        CH = [],
        EH = [],
        FH = [],
        BH = [],
        sH = [],
        mH = [],
        hH = [],
        zH = [],
        XH = [],
        xH = [],
        jH = [],
        KH = [],
        rH = [],
        RH = [],
        DH = [],
        cH = [],
        YH = [],
        ZH = [],
        fH = [],
        AH = [],
        WH = [],
        JH = [],
        SH = [],
        NH = [],
        vH = [],
        QH = [],
        GH = [],
        qH = [],
        aH = [],
        iH = [],
        uH = [],
        dH = [],
        PH = [],
        nH = [],
        yH = [],
        oH = [],
        TH = [],
        kH = [],
        bp = [],
        wp = [],
        Mp = [],
        ep = [],
        Hp = [],
        pp = [],
        Vp = [],
        gp = [],
        lp = [],
        Lp = [],
        Ip = [],
        Op = [],
        Up = [],
        tp = [],
        Cp = [],
        Ep = [],
        Fp = [];
      return bb = class extends QM {
        get directIntensity() {
          return (0, Kb.b)(this, wb, "f")
        }
        set directIntensity(bb) {
          (0, Kb.f)(this, wb, bb, "f")
        }
        get emissiveIntensity() {
          return (0, Kb.b)(this, Mb, "f")
        }
        set emissiveIntensity(bb) {
          (0, Kb.f)(this, Mb, bb, "f")
        }
        get environmentIntensity() {
          return (0, Kb.b)(this, eb, "f")
        }
        set environmentIntensity(bb) {
          (0, Kb.f)(this, eb, bb, "f")
        }
        get specularIntensity() {
          return (0, Kb.b)(this, Hb, "f")
        }
        set specularIntensity(bb) {
          (0, Kb.f)(this, Hb, bb, "f")
        }
        get disableBumpMap() {
          return (0, Kb.b)(this, Vb, "f")
        }
        set disableBumpMap(bb) {
          (0, Kb.f)(this, Vb, bb, "f")
        }
        get albedoTexture() {
          return (0, Kb.b)(this, gb, "f")
        }
        set albedoTexture(bb) {
          (0, Kb.f)(this, gb, bb, "f")
        }
        get baseWeightTexture() {
          return (0, Kb.b)(this, lb, "f")
        }
        set baseWeightTexture(bb) {
          (0, Kb.f)(this, lb, bb, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, Kb.b)(this, Lb, "f")
        }
        set baseDiffuseRoughnessTexture(bb) {
          (0, Kb.f)(this, Lb, bb, "f")
        }
        get ambientTexture() {
          return (0, Kb.b)(this, Ib, "f")
        }
        set ambientTexture(bb) {
          (0, Kb.f)(this, Ib, bb, "f")
        }
        get ambientTextureStrength() {
          return (0, Kb.b)(this, Ob, "f")
        }
        set ambientTextureStrength(bb) {
          (0, Kb.f)(this, Ob, bb, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, Kb.b)(this, Ub, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(bb) {
          (0, Kb.f)(this, Ub, bb, "f")
        }
        get opacityTexture() {
          return (0, Kb.b)(this, tb, "f")
        }
        set opacityTexture(bb) {
          (0, Kb.f)(this, tb, bb, "f")
        }
        get reflectionTexture() {
          return (0, Kb.b)(this, Cb, "f")
        }
        set reflectionTexture(bb) {
          (0, Kb.f)(this, Cb, bb, "f")
        }
        get emissiveTexture() {
          return (0, Kb.b)(this, Eb, "f")
        }
        set emissiveTexture(bb) {
          (0, Kb.f)(this, Eb, bb, "f")
        }
        get reflectivityTexture() {
          return (0, Kb.b)(this, Fb, "f")
        }
        set reflectivityTexture(bb) {
          (0, Kb.f)(this, Fb, bb, "f")
        }
        get metallicTexture() {
          return (0, Kb.b)(this, Bb, "f")
        }
        set metallicTexture(bb) {
          (0, Kb.f)(this, Bb, bb, "f")
        }
        get metallic() {
          return (0, Kb.b)(this, sb, "f")
        }
        set metallic(bb) {
          (0, Kb.f)(this, sb, bb, "f")
        }
        get roughness() {
          return (0, Kb.b)(this, mb, "f")
        }
        set roughness(bb) {
          (0, Kb.f)(this, mb, bb, "f")
        }
        get metallicF0Factor() {
          return (0, Kb.b)(this, hb, "f")
        }
        set metallicF0Factor(bb) {
          (0, Kb.f)(this, hb, bb, "f")
        }
        get metallicReflectanceColor() {
          return (0, Kb.b)(this, zb, "f")
        }
        set metallicReflectanceColor(bb) {
          (0, Kb.f)(this, zb, bb, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, Kb.b)(this, Xb, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(bb) {
          (0, Kb.f)(this, Xb, bb, "f")
        }
        get metallicReflectanceTexture() {
          return (0, Kb.b)(this, xb, "f")
        }
        set metallicReflectanceTexture(bb) {
          (0, Kb.f)(this, xb, bb, "f")
        }
        get reflectanceTexture() {
          return (0, Kb.b)(this, jb, "f")
        }
        set reflectanceTexture(bb) {
          (0, Kb.f)(this, jb, bb, "f")
        }
        get microSurfaceTexture() {
          return (0, Kb.b)(this, Rb, "f")
        }
        set microSurfaceTexture(bb) {
          (0, Kb.f)(this, Rb, bb, "f")
        }
        get bumpTexture() {
          return (0, Kb.b)(this, Db, "f")
        }
        set bumpTexture(bb) {
          (0, Kb.f)(this, Db, bb, "f")
        }
        get lightmapTexture() {
          return (0, Kb.b)(this, cb, "f")
        }
        set lightmapTexture(bb) {
          (0, Kb.f)(this, cb, bb, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(bb) {
          this.subSurface.refractionTexture = bb, bb ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, Kb.b)(this, Yb, "f")
        }
        set ambientColor(bb) {
          (0, Kb.f)(this, Yb, bb, "f")
        }
        get albedoColor() {
          return (0, Kb.b)(this, Zb, "f")
        }
        set albedoColor(bb) {
          (0, Kb.f)(this, Zb, bb, "f")
        }
        get baseWeight() {
          return (0, Kb.b)(this, fb, "f")
        }
        set baseWeight(bb) {
          (0, Kb.f)(this, fb, bb, "f")
        }
        get baseDiffuseRoughness() {
          return (0, Kb.b)(this, Wb, "f")
        }
        set baseDiffuseRoughness(bb) {
          (0, Kb.f)(this, Wb, bb, "f")
        }
        get reflectivityColor() {
          return (0, Kb.b)(this, Jb, "f")
        }
        set reflectivityColor(bb) {
          (0, Kb.f)(this, Jb, bb, "f")
        }
        get reflectionColor() {
          return (0, Kb.b)(this, Sb, "f")
        }
        set reflectionColor(bb) {
          (0, Kb.f)(this, Sb, bb, "f")
        }
        get emissiveColor() {
          return (0, Kb.b)(this, Nb, "f")
        }
        set emissiveColor(bb) {
          (0, Kb.f)(this, Nb, bb, "f")
        }
        get microSurface() {
          return (0, Kb.b)(this, vb, "f")
        }
        set microSurface(bb) {
          (0, Kb.f)(this, vb, bb, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(bb) {
          this.subSurface.indexOfRefraction = bb
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(bb) {
          this.subSurface.invertRefractionY = bb
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(bb) {
          this.subSurface.linkRefractionWithTransparency = bb, bb && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, Kb.b)(this, Qb, "f")
        }
        set useLightmapAsShadowmap(bb) {
          (0, Kb.f)(this, Qb, bb, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, Kb.b)(this, Gb, "f")
        }
        set useAlphaFromAlbedoTexture(bb) {
          (0, Kb.f)(this, Gb, bb, "f")
        }
        get forceAlphaTest() {
          return (0, Kb.b)(this, qb, "f")
        }
        set forceAlphaTest(bb) {
          (0, Kb.f)(this, qb, bb, "f")
        }
        get alphaCutOff() {
          return (0, Kb.b)(this, ab, "f")
        }
        set alphaCutOff(bb) {
          (0, Kb.f)(this, ab, bb, "f")
        }
        get useSpecularOverAlpha() {
          return (0, Kb.b)(this, ib, "f")
        }
        set useSpecularOverAlpha(bb) {
          (0, Kb.f)(this, ib, bb, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, Kb.b)(this, db, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(bb) {
          (0, Kb.f)(this, db, bb, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, Kb.b)(this, Pb, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(bb) {
          (0, Kb.f)(this, Pb, bb, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, Kb.b)(this, nb, "f")
        }
        set useRoughnessFromMetallicTextureGreen(bb) {
          (0, Kb.f)(this, nb, bb, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, Kb.b)(this, yb, "f")
        }
        set useMetallnessFromMetallicTextureBlue(bb) {
          (0, Kb.f)(this, yb, bb, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, Kb.b)(this, ob, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(bb) {
          (0, Kb.f)(this, ob, bb, "f")
        }
        get useAmbientInGrayScale() {
          return (0, Kb.b)(this, Tb, "f")
        }
        set useAmbientInGrayScale(bb) {
          (0, Kb.f)(this, Tb, bb, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, Kb.b)(this, kb, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(bb) {
          (0, Kb.f)(this, kb, bb, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === Xw.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(bb) {
          bb !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? Xw.LIGHTFALLOFF_PHYSICAL : Xw.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === Xw.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(bb) {
          bb !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? Xw.LIGHTFALLOFF_GLTF : Xw.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, Kb.b)(this, bw, "f")
        }
        set useRadianceOverAlpha(bb) {
          (0, Kb.f)(this, bw, bb, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, Kb.b)(this, ww, "f")
        }
        set useObjectSpaceNormalMap(bb) {
          (0, Kb.f)(this, ww, bb, "f")
        }
        get useParallax() {
          return (0, Kb.b)(this, Mw, "f")
        }
        set useParallax(bb) {
          (0, Kb.f)(this, Mw, bb, "f")
        }
        get useParallaxOcclusion() {
          return (0, Kb.b)(this, ew, "f")
        }
        set useParallaxOcclusion(bb) {
          (0, Kb.f)(this, ew, bb, "f")
        }
        get parallaxScaleBias() {
          return (0, Kb.b)(this, Hw, "f")
        }
        set parallaxScaleBias(bb) {
          (0, Kb.f)(this, Hw, bb, "f")
        }
        get disableLighting() {
          return (0, Kb.b)(this, pw, "f")
        }
        set disableLighting(bb) {
          (0, Kb.f)(this, pw, bb, "f")
        }
        get forceIrradianceInFragment() {
          return (0, Kb.b)(this, Vw, "f")
        }
        set forceIrradianceInFragment(bb) {
          (0, Kb.f)(this, Vw, bb, "f")
        }
        get maxSimultaneousLights() {
          return (0, Kb.b)(this, gw, "f")
        }
        set maxSimultaneousLights(bb) {
          (0, Kb.f)(this, gw, bb, "f")
        }
        get invertNormalMapX() {
          return (0, Kb.b)(this, lw, "f")
        }
        set invertNormalMapX(bb) {
          (0, Kb.f)(this, lw, bb, "f")
        }
        get invertNormalMapY() {
          return (0, Kb.b)(this, Lw, "f")
        }
        set invertNormalMapY(bb) {
          (0, Kb.f)(this, Lw, bb, "f")
        }
        get twoSidedLighting() {
          return (0, Kb.b)(this, Iw, "f")
        }
        set twoSidedLighting(bb) {
          (0, Kb.f)(this, Iw, bb, "f")
        }
        get useAlphaFresnel() {
          return (0, Kb.b)(this, Ow, "f")
        }
        set useAlphaFresnel(bb) {
          (0, Kb.f)(this, Ow, bb, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, Kb.b)(this, Uw, "f")
        }
        set useLinearAlphaFresnel(bb) {
          (0, Kb.f)(this, Uw, bb, "f")
        }
        get environmentBRDFTexture() {
          return (0, Kb.b)(this, tw, "f")
        }
        set environmentBRDFTexture(bb) {
          (0, Kb.f)(this, tw, bb, "f")
        }
        get forceNormalForward() {
          return (0, Kb.b)(this, Cw, "f")
        }
        set forceNormalForward(bb) {
          (0, Kb.f)(this, Cw, bb, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, Kb.b)(this, Ew, "f")
        }
        set enableSpecularAntiAliasing(bb) {
          (0, Kb.f)(this, Ew, bb, "f")
        }
        get useHorizonOcclusion() {
          return (0, Kb.b)(this, Fw, "f")
        }
        set useHorizonOcclusion(bb) {
          (0, Kb.f)(this, Fw, bb, "f")
        }
        get useRadianceOcclusion() {
          return (0, Kb.b)(this, Bw, "f")
        }
        set useRadianceOcclusion(bb) {
          (0, Kb.f)(this, Bw, bb, "f")
        }
        get unlit() {
          return (0, Kb.b)(this, sw, "f")
        }
        set unlit(bb) {
          (0, Kb.f)(this, sw, bb, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, Kb.b)(this, mw, "f")
        }
        set applyDecalMapAfterDetailMap(bb) {
          (0, Kb.f)(this, mw, bb, "f")
        }
        constructor(pb, rb) {
          super(pb, rb, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), wb.set(this, ((0, Kb.m)(this, GM), (0, Kb.m)(this, qM, 1))), Mb.set(this, ((0, Kb.m)(this, aM), (0, Kb.m)(this, iM, 1))), eb.set(this, ((0, Kb.m)(this, uM), (0, Kb.m)(this, dM, 1))), Hb.set(this, ((0, Kb.m)(this, PM), (0, Kb.m)(this, nM, 1))), Vb.set(this, ((0, Kb.m)(this, yM), (0, Kb.m)(this, oM, !1))), gb.set(this, ((0, Kb.m)(this, TM), (0, Kb.m)(this, kM, void 0))), lb.set(this, ((0, Kb.m)(this, be), (0, Kb.m)(this, we, void 0))), Lb.set(this, ((0, Kb.m)(this, Me), (0, Kb.m)(this, ee, void 0))), Ib.set(this, ((0, Kb.m)(this, He), (0, Kb.m)(this, pe, void 0))), Ob.set(this, ((0, Kb.m)(this, Ve), (0, Kb.m)(this, ge, 1))), Ub.set(this, ((0, Kb.m)(this, le), (0, Kb.m)(this, Le, bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), tb.set(this, ((0, Kb.m)(this, Ie), (0, Kb.m)(this, Oe, void 0))), Cb.set(this, ((0, Kb.m)(this, Ue), (0, Kb.m)(this, te, void 0))), Eb.set(this, ((0, Kb.m)(this, Ce), (0, Kb.m)(this, Ee, void 0))), Fb.set(this, ((0, Kb.m)(this, Fe), (0, Kb.m)(this, Be, void 0))), Bb.set(this, ((0, Kb.m)(this, se), (0, Kb.m)(this, me, void 0))), sb.set(this, ((0, Kb.m)(this, he), (0, Kb.m)(this, ze, void 0))), mb.set(this, ((0, Kb.m)(this, Xe), (0, Kb.m)(this, xe, void 0))), hb.set(this, ((0, Kb.m)(this, je), (0, Kb.m)(this, Ke, 1))), zb.set(this, ((0, Kb.m)(this, re), (0, Kb.m)(this, Re, ub.e.White()))), Xb.set(this, ((0, Kb.m)(this, De), (0, Kb.m)(this, ce, !1))), xb.set(this, ((0, Kb.m)(this, Ye), (0, Kb.m)(this, Ze, void 0))), jb.set(this, ((0, Kb.m)(this, fe), (0, Kb.m)(this, Ae, void 0))), Rb.set(this, ((0, Kb.m)(this, We), (0, Kb.m)(this, Je, void 0))), Db.set(this, ((0, Kb.m)(this, Se), (0, Kb.m)(this, Ne, void 0))), cb.set(this, ((0, Kb.m)(this, ve), (0, Kb.m)(this, Qe, void 0))), Yb.set(this, ((0, Kb.m)(this, Ge), (0, Kb.m)(this, qe, new ub.e(0, 0, 0)))), Zb.set(this, ((0, Kb.m)(this, ae), (0, Kb.m)(this, ie, new ub.e(1, 1, 1)))), fb.set(this, ((0, Kb.m)(this, ue), (0, Kb.m)(this, de, 1))), Wb.set(this, ((0, Kb.m)(this, Pe), (0, Kb.m)(this, ne, void 0))), Jb.set(this, ((0, Kb.m)(this, ye), (0, Kb.m)(this, oe, new ub.e(1, 1, 1)))), Sb.set(this, ((0, Kb.m)(this, Te), (0, Kb.m)(this, ke, new ub.e(1, 1, 1)))), Nb.set(this, ((0, Kb.m)(this, bH), (0, Kb.m)(this, wH, new ub.e(0, 0, 0)))), vb.set(this, ((0, Kb.m)(this, MH), (0, Kb.m)(this, eH, 1))), Qb.set(this, ((0, Kb.m)(this, HH), (0, Kb.m)(this, pH, !1))), Gb.set(this, ((0, Kb.m)(this, VH), (0, Kb.m)(this, gH, !1))), qb.set(this, ((0, Kb.m)(this, lH), (0, Kb.m)(this, LH, !1))), ab.set(this, ((0, Kb.m)(this, IH), (0, Kb.m)(this, OH, .4))), ib.set(this, ((0, Kb.m)(this, UH), (0, Kb.m)(this, tH, !0))), db.set(this, ((0, Kb.m)(this, CH), (0, Kb.m)(this, EH, !1))), Pb.set(this, ((0, Kb.m)(this, FH), (0, Kb.m)(this, BH, !0))), nb.set(this, ((0, Kb.m)(this, sH), (0, Kb.m)(this, mH, !1))), yb.set(this, ((0, Kb.m)(this, hH), (0, Kb.m)(this, zH, !1))), ob.set(this, ((0, Kb.m)(this, XH), (0, Kb.m)(this, xH, !1))), Tb.set(this, ((0, Kb.m)(this, jH), (0, Kb.m)(this, KH, !1))), kb.set(this, ((0, Kb.m)(this, rH), (0, Kb.m)(this, RH, !1))), bw.set(this, ((0, Kb.m)(this, DH), (0, Kb.m)(this, cH, !0))), ww.set(this, ((0, Kb.m)(this, YH), (0, Kb.m)(this, ZH, !1))), Mw.set(this, ((0, Kb.m)(this, fH), (0, Kb.m)(this, AH, !1))), ew.set(this, ((0, Kb.m)(this, WH), (0, Kb.m)(this, JH, !1))), Hw.set(this, ((0, Kb.m)(this, SH), (0, Kb.m)(this, NH, .05))), pw.set(this, ((0, Kb.m)(this, vH), (0, Kb.m)(this, QH, !1))), Vw.set(this, ((0, Kb.m)(this, GH), (0, Kb.m)(this, qH, !1))), gw.set(this, ((0, Kb.m)(this, aH), (0, Kb.m)(this, iH, 4))), lw.set(this, ((0, Kb.m)(this, uH), (0, Kb.m)(this, dH, !1))), Lw.set(this, ((0, Kb.m)(this, PH), (0, Kb.m)(this, nH, !1))), Iw.set(this, ((0, Kb.m)(this, yH), (0, Kb.m)(this, oH, !1))), Ow.set(this, ((0, Kb.m)(this, TH), (0, Kb.m)(this, kH, !1))), Uw.set(this, ((0, Kb.m)(this, bp), (0, Kb.m)(this, wp, !1))), tw.set(this, ((0, Kb.m)(this, Mp), (0, Kb.m)(this, ep, null))), Cw.set(this, ((0, Kb.m)(this, Hp), (0, Kb.m)(this, pp, !1))), Ew.set(this, ((0, Kb.m)(this, Vp), (0, Kb.m)(this, gp, !1))), Fw.set(this, ((0, Kb.m)(this, lp), (0, Kb.m)(this, Lp, !0))), Bw.set(this, ((0, Kb.m)(this, Ip), (0, Kb.m)(this, Op, !0))), sw.set(this, ((0, Kb.m)(this, Up), (0, Kb.m)(this, tp, !1))), mw.set(this, ((0, Kb.m)(this, Cp), (0, Kb.m)(this, Ep, !1))), (0, Kb.m)(this, Fp), this._environmentBRDFTexture = Ab(this.RJ())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(wb) {
          let Mb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Hb = xw.d.Clone((() => new bb(wb, this.RJ())), this, {
            cloneTexturesOnlyOnce: Mb
          });
          return Hb.id = wb, Hb.name = wb, this.stencil.copyTo(Hb.stencil), this._clonePlugins(Hb, eb), Hb
        }
        serialize() {
          const bb = super.serialize();
          return bb.customType = "BABYLON.PBRMaterial", bb
        }
        static Parse(wb, Mb, eb) {
          const Hb = xw.d.Parse((() => new bb(wb.name, Mb)), wb, Mb, eb);
          return wb.stencil && Hb.stencil.parse(wb.stencil, Mb, eb), pb.b._ParsePlugins(wb, Hb, Mb, eb), wb.clearCoat && Hb.clearCoat.parse(wb.clearCoat, Mb, eb), wb.anisotropy && Hb.anisotropy.parse(wb.anisotropy, Mb, eb), wb.brdf && Hb.brdf.parse(wb.brdf, Mb, eb), wb.sheen && Hb.sheen.parse(wb.sheen, Mb, eb), wb.subSurface && Hb.subSurface.parse(wb.subSurface, Mb, eb), wb.iridescence && Hb.iridescence.parse(wb.iridescence, Mb, eb), Hb
        }
      }, wb = new WeakMap, Mb = new WeakMap, eb = new WeakMap, Hb = new WeakMap, Vb = new WeakMap, gb = new WeakMap, lb = new WeakMap, Lb = new WeakMap, Ib = new WeakMap, Ob = new WeakMap, Ub = new WeakMap, tb = new WeakMap, Cb = new WeakMap, Eb = new WeakMap, Fb = new WeakMap, Bb = new WeakMap, sb = new WeakMap, mb = new WeakMap, hb = new WeakMap, zb = new WeakMap, Xb = new WeakMap, xb = new WeakMap, jb = new WeakMap, Rb = new WeakMap, Db = new WeakMap, cb = new WeakMap, Yb = new WeakMap, Zb = new WeakMap, fb = new WeakMap, Wb = new WeakMap, Jb = new WeakMap, Sb = new WeakMap, Nb = new WeakMap, vb = new WeakMap, Qb = new WeakMap, Gb = new WeakMap, qb = new WeakMap, ab = new WeakMap, ib = new WeakMap, db = new WeakMap, Pb = new WeakMap, nb = new WeakMap, yb = new WeakMap, ob = new WeakMap, Tb = new WeakMap, kb = new WeakMap, bw = new WeakMap, ww = new WeakMap, Mw = new WeakMap, ew = new WeakMap, Hw = new WeakMap, pw = new WeakMap, Vw = new WeakMap, gw = new WeakMap, lw = new WeakMap, Lw = new WeakMap, Iw = new WeakMap, Ow = new WeakMap, Uw = new WeakMap, tw = new WeakMap, Cw = new WeakMap, Ew = new WeakMap, Fw = new WeakMap, Bw = new WeakMap, sw = new WeakMap, mw = new WeakMap, (() => {
        const wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(QM[Symbol.metadata] ?? null) : void 0;
        hw = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], zw = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], jw = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Kw = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], rw = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Rw = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Dw = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Yw = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Zw = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], fw = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Aw = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Ww = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], Jw = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Sw = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Nw = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], vw = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Qw = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Gw = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], qw = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], aw = [(0, rb.i)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], iw = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], uw = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], dw = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Pw = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], nw = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], yw = [(0, rb.x)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty", null)], ow = [(0, rb.i)("ambient"), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], Tw = [(0, rb.i)("albedo"), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], kw = [(0, rb.E)("baseWeight"), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], bM = [(0, rb.E)("baseDiffuseRoughness"), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], wM = [(0, rb.i)("reflectivity"), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], MM = [(0, rb.i)("reflection"), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], eM = [(0, rb.i)("emissive"), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], HM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], pM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], VM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], gM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], lM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], LM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], IM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], OM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], UM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], tM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], CM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], EM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], FM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], BM = [(0, rb.E)()], sM = [(0, rb.E)()], mM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], hM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], zM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], XM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], xM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], jM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsLightsDirty")], KM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], rM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsLightsDirty")], RM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], DM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], cM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], YM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], ZM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], fM = [(0, rb.d)("_markAllSubMeshesAsTexturesDirty")], AM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], WM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], JM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], SM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsTexturesDirty")], NM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], vM = [(0, rb.E)(), (0, rb.d)("_markAllSubMeshesAsMiscDirty")], (0, Kb.i)(bb, null, hw, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "directIntensity" in bb,
            get: bb => bb.directIntensity,
            set: (bb, wb) => {
              bb.directIntensity = wb
            }
          },
          metadata: wb
        }, qM, aM), (0, Kb.i)(bb, null, zw, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "emissiveIntensity" in bb,
            get: bb => bb.emissiveIntensity,
            set: (bb, wb) => {
              bb.emissiveIntensity = wb
            }
          },
          metadata: wb
        }, iM, uM), (0, Kb.i)(bb, null, jw, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "environmentIntensity" in bb,
            get: bb => bb.environmentIntensity,
            set: (bb, wb) => {
              bb.environmentIntensity = wb
            }
          },
          metadata: wb
        }, dM, PM), (0, Kb.i)(bb, null, Kw, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "specularIntensity" in bb,
            get: bb => bb.specularIntensity,
            set: (bb, wb) => {
              bb.specularIntensity = wb
            }
          },
          metadata: wb
        }, nM, yM), (0, Kb.i)(bb, null, rw, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableBumpMap" in bb,
            get: bb => bb.disableBumpMap,
            set: (bb, wb) => {
              bb.disableBumpMap = wb
            }
          },
          metadata: wb
        }, oM, TM), (0, Kb.i)(bb, null, Rw, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "albedoTexture" in bb,
            get: bb => bb.albedoTexture,
            set: (bb, wb) => {
              bb.albedoTexture = wb
            }
          },
          metadata: wb
        }, kM, be), (0, Kb.i)(bb, null, Dw, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseWeightTexture" in bb,
            get: bb => bb.baseWeightTexture,
            set: (bb, wb) => {
              bb.baseWeightTexture = wb
            }
          },
          metadata: wb
        }, we, Me), (0, Kb.i)(bb, null, Yw, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseDiffuseRoughnessTexture" in bb,
            get: bb => bb.baseDiffuseRoughnessTexture,
            set: (bb, wb) => {
              bb.baseDiffuseRoughnessTexture = wb
            }
          },
          metadata: wb
        }, ee, He), (0, Kb.i)(bb, null, Zw, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientTexture" in bb,
            get: bb => bb.ambientTexture,
            set: (bb, wb) => {
              bb.ambientTexture = wb
            }
          },
          metadata: wb
        }, pe, Ve), (0, Kb.i)(bb, null, fw, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientTextureStrength" in bb,
            get: bb => bb.ambientTextureStrength,
            set: (bb, wb) => {
              bb.ambientTextureStrength = wb
            }
          },
          metadata: wb
        }, ge, le), (0, Kb.i)(bb, null, Aw, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientTextureImpactOnAnalyticalLights" in bb,
            get: bb => bb.ambientTextureImpactOnAnalyticalLights,
            set: (bb, wb) => {
              bb.ambientTextureImpactOnAnalyticalLights = wb
            }
          },
          metadata: wb
        }, Le, Ie), (0, Kb.i)(bb, null, Ww, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "opacityTexture" in bb,
            get: bb => bb.opacityTexture,
            set: (bb, wb) => {
              bb.opacityTexture = wb
            }
          },
          metadata: wb
        }, Oe, Ue), (0, Kb.i)(bb, null, Jw, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectionTexture" in bb,
            get: bb => bb.reflectionTexture,
            set: (bb, wb) => {
              bb.reflectionTexture = wb
            }
          },
          metadata: wb
        }, te, Ce), (0, Kb.i)(bb, null, Sw, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "emissiveTexture" in bb,
            get: bb => bb.emissiveTexture,
            set: (bb, wb) => {
              bb.emissiveTexture = wb
            }
          },
          metadata: wb
        }, Ee, Fe), (0, Kb.i)(bb, null, Nw, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectivityTexture" in bb,
            get: bb => bb.reflectivityTexture,
            set: (bb, wb) => {
              bb.reflectivityTexture = wb
            }
          },
          metadata: wb
        }, Be, se), (0, Kb.i)(bb, null, vw, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicTexture" in bb,
            get: bb => bb.metallicTexture,
            set: (bb, wb) => {
              bb.metallicTexture = wb
            }
          },
          metadata: wb
        }, me, he), (0, Kb.i)(bb, null, Qw, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallic" in bb,
            get: bb => bb.metallic,
            set: (bb, wb) => {
              bb.metallic = wb
            }
          },
          metadata: wb
        }, ze, Xe), (0, Kb.i)(bb, null, Gw, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughness" in bb,
            get: bb => bb.roughness,
            set: (bb, wb) => {
              bb.roughness = wb
            }
          },
          metadata: wb
        }, xe, je), (0, Kb.i)(bb, null, qw, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicF0Factor" in bb,
            get: bb => bb.metallicF0Factor,
            set: (bb, wb) => {
              bb.metallicF0Factor = wb
            }
          },
          metadata: wb
        }, Ke, re), (0, Kb.i)(bb, null, aw, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicReflectanceColor" in bb,
            get: bb => bb.metallicReflectanceColor,
            set: (bb, wb) => {
              bb.metallicReflectanceColor = wb
            }
          },
          metadata: wb
        }, Re, De), (0, Kb.i)(bb, null, iw, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useOnlyMetallicFromMetallicReflectanceTexture" in bb,
            get: bb => bb.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (bb, wb) => {
              bb.useOnlyMetallicFromMetallicReflectanceTexture = wb
            }
          },
          metadata: wb
        }, ce, Ye), (0, Kb.i)(bb, null, uw, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicReflectanceTexture" in bb,
            get: bb => bb.metallicReflectanceTexture,
            set: (bb, wb) => {
              bb.metallicReflectanceTexture = wb
            }
          },
          metadata: wb
        }, Ze, fe), (0, Kb.i)(bb, null, dw, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectanceTexture" in bb,
            get: bb => bb.reflectanceTexture,
            set: (bb, wb) => {
              bb.reflectanceTexture = wb
            }
          },
          metadata: wb
        }, Ae, We), (0, Kb.i)(bb, null, Pw, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "microSurfaceTexture" in bb,
            get: bb => bb.microSurfaceTexture,
            set: (bb, wb) => {
              bb.microSurfaceTexture = wb
            }
          },
          metadata: wb
        }, Je, Se), (0, Kb.i)(bb, null, nw, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "bumpTexture" in bb,
            get: bb => bb.bumpTexture,
            set: (bb, wb) => {
              bb.bumpTexture = wb
            }
          },
          metadata: wb
        }, Ne, ve), (0, Kb.i)(bb, null, yw, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "lightmapTexture" in bb,
            get: bb => bb.lightmapTexture,
            set: (bb, wb) => {
              bb.lightmapTexture = wb
            }
          },
          metadata: wb
        }, Qe, Ge), (0, Kb.i)(bb, null, ow, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientColor" in bb,
            get: bb => bb.ambientColor,
            set: (bb, wb) => {
              bb.ambientColor = wb
            }
          },
          metadata: wb
        }, qe, ae), (0, Kb.i)(bb, null, Tw, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "albedoColor" in bb,
            get: bb => bb.albedoColor,
            set: (bb, wb) => {
              bb.albedoColor = wb
            }
          },
          metadata: wb
        }, ie, ue), (0, Kb.i)(bb, null, kw, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseWeight" in bb,
            get: bb => bb.baseWeight,
            set: (bb, wb) => {
              bb.baseWeight = wb
            }
          },
          metadata: wb
        }, de, Pe), (0, Kb.i)(bb, null, bM, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseDiffuseRoughness" in bb,
            get: bb => bb.baseDiffuseRoughness,
            set: (bb, wb) => {
              bb.baseDiffuseRoughness = wb
            }
          },
          metadata: wb
        }, ne, ye), (0, Kb.i)(bb, null, wM, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectivityColor" in bb,
            get: bb => bb.reflectivityColor,
            set: (bb, wb) => {
              bb.reflectivityColor = wb
            }
          },
          metadata: wb
        }, oe, Te), (0, Kb.i)(bb, null, MM, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectionColor" in bb,
            get: bb => bb.reflectionColor,
            set: (bb, wb) => {
              bb.reflectionColor = wb
            }
          },
          metadata: wb
        }, ke, bH), (0, Kb.i)(bb, null, eM, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "emissiveColor" in bb,
            get: bb => bb.emissiveColor,
            set: (bb, wb) => {
              bb.emissiveColor = wb
            }
          },
          metadata: wb
        }, wH, MH), (0, Kb.i)(bb, null, HM, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: bb => "microSurface" in bb,
            get: bb => bb.microSurface,
            set: (bb, wb) => {
              bb.microSurface = wb
            }
          },
          metadata: wb
        }, eH, HH), (0, Kb.i)(bb, null, pM, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLightmapAsShadowmap" in bb,
            get: bb => bb.useLightmapAsShadowmap,
            set: (bb, wb) => {
              bb.useLightmapAsShadowmap = wb
            }
          },
          metadata: wb
        }, pH, VH), (0, Kb.i)(bb, null, VM, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlphaFromAlbedoTexture" in bb,
            get: bb => bb.useAlphaFromAlbedoTexture,
            set: (bb, wb) => {
              bb.useAlphaFromAlbedoTexture = wb
            }
          },
          metadata: wb
        }, gH, lH), (0, Kb.i)(bb, null, gM, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceAlphaTest" in bb,
            get: bb => bb.forceAlphaTest,
            set: (bb, wb) => {
              bb.forceAlphaTest = wb
            }
          },
          metadata: wb
        }, LH, IH), (0, Kb.i)(bb, null, lM, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: bb => "alphaCutOff" in bb,
            get: bb => bb.alphaCutOff,
            set: (bb, wb) => {
              bb.alphaCutOff = wb
            }
          },
          metadata: wb
        }, OH, UH), (0, Kb.i)(bb, null, LM, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSpecularOverAlpha" in bb,
            get: bb => bb.useSpecularOverAlpha,
            set: (bb, wb) => {
              bb.useSpecularOverAlpha = wb
            }
          },
          metadata: wb
        }, tH, CH), (0, Kb.i)(bb, null, IM, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useMicroSurfaceFromReflectivityMapAlpha" in bb,
            get: bb => bb.useMicroSurfaceFromReflectivityMapAlpha,
            set: (bb, wb) => {
              bb.useMicroSurfaceFromReflectivityMapAlpha = wb
            }
          },
          metadata: wb
        }, EH, FH), (0, Kb.i)(bb, null, OM, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMetallicTextureAlpha" in bb,
            get: bb => bb.useRoughnessFromMetallicTextureAlpha,
            set: (bb, wb) => {
              bb.useRoughnessFromMetallicTextureAlpha = wb
            }
          },
          metadata: wb
        }, BH, sH), (0, Kb.i)(bb, null, UM, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMetallicTextureGreen" in bb,
            get: bb => bb.useRoughnessFromMetallicTextureGreen,
            set: (bb, wb) => {
              bb.useRoughnessFromMetallicTextureGreen = wb
            }
          },
          metadata: wb
        }, mH, hH), (0, Kb.i)(bb, null, tM, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: bb => "useMetallnessFromMetallicTextureBlue" in bb,
            get: bb => bb.useMetallnessFromMetallicTextureBlue,
            set: (bb, wb) => {
              bb.useMetallnessFromMetallicTextureBlue = wb
            }
          },
          metadata: wb
        }, zH, XH), (0, Kb.i)(bb, null, CM, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAmbientOcclusionFromMetallicTextureRed" in bb,
            get: bb => bb.useAmbientOcclusionFromMetallicTextureRed,
            set: (bb, wb) => {
              bb.useAmbientOcclusionFromMetallicTextureRed = wb
            }
          },
          metadata: wb
        }, xH, jH), (0, Kb.i)(bb, null, EM, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAmbientInGrayScale" in bb,
            get: bb => bb.useAmbientInGrayScale,
            set: (bb, wb) => {
              bb.useAmbientInGrayScale = wb
            }
          },
          metadata: wb
        }, KH, rH), (0, Kb.i)(bb, null, FM, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAutoMicroSurfaceFromReflectivityMap" in bb,
            get: bb => bb.useAutoMicroSurfaceFromReflectivityMap,
            set: (bb, wb) => {
              bb.useAutoMicroSurfaceFromReflectivityMap = wb
            }
          },
          metadata: wb
        }, RH, DH), (0, Kb.i)(bb, null, BM, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: bb => "usePhysicalLightFalloff" in bb,
            get: bb => bb.usePhysicalLightFalloff
          },
          metadata: wb
        }, null, GM), (0, Kb.i)(bb, null, sM, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: bb => "useGLTFLightFalloff" in bb,
            get: bb => bb.useGLTFLightFalloff
          },
          metadata: wb
        }, null, GM), (0, Kb.i)(bb, null, mM, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRadianceOverAlpha" in bb,
            get: bb => bb.useRadianceOverAlpha,
            set: (bb, wb) => {
              bb.useRadianceOverAlpha = wb
            }
          },
          metadata: wb
        }, cH, YH), (0, Kb.i)(bb, null, hM, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "useObjectSpaceNormalMap" in bb,
            get: bb => bb.useObjectSpaceNormalMap,
            set: (bb, wb) => {
              bb.useObjectSpaceNormalMap = wb
            }
          },
          metadata: wb
        }, ZH, fH), (0, Kb.i)(bb, null, zM, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: bb => "useParallax" in bb,
            get: bb => bb.useParallax,
            set: (bb, wb) => {
              bb.useParallax = wb
            }
          },
          metadata: wb
        }, AH, WH), (0, Kb.i)(bb, null, XM, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: bb => "useParallaxOcclusion" in bb,
            get: bb => bb.useParallaxOcclusion,
            set: (bb, wb) => {
              bb.useParallaxOcclusion = wb
            }
          },
          metadata: wb
        }, JH, SH), (0, Kb.i)(bb, null, xM, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: bb => "parallaxScaleBias" in bb,
            get: bb => bb.parallaxScaleBias,
            set: (bb, wb) => {
              bb.parallaxScaleBias = wb
            }
          },
          metadata: wb
        }, NH, vH), (0, Kb.i)(bb, null, jM, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableLighting" in bb,
            get: bb => bb.disableLighting,
            set: (bb, wb) => {
              bb.disableLighting = wb
            }
          },
          metadata: wb
        }, QH, GH), (0, Kb.i)(bb, null, KM, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceIrradianceInFragment" in bb,
            get: bb => bb.forceIrradianceInFragment,
            set: (bb, wb) => {
              bb.forceIrradianceInFragment = wb
            }
          },
          metadata: wb
        }, qH, aH), (0, Kb.i)(bb, null, rM, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: bb => "maxSimultaneousLights" in bb,
            get: bb => bb.maxSimultaneousLights,
            set: (bb, wb) => {
              bb.maxSimultaneousLights = wb
            }
          },
          metadata: wb
        }, iH, uH), (0, Kb.i)(bb, null, RM, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertNormalMapX" in bb,
            get: bb => bb.invertNormalMapX,
            set: (bb, wb) => {
              bb.invertNormalMapX = wb
            }
          },
          metadata: wb
        }, dH, PH), (0, Kb.i)(bb, null, DM, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertNormalMapY" in bb,
            get: bb => bb.invertNormalMapY,
            set: (bb, wb) => {
              bb.invertNormalMapY = wb
            }
          },
          metadata: wb
        }, nH, yH), (0, Kb.i)(bb, null, cM, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: bb => "twoSidedLighting" in bb,
            get: bb => bb.twoSidedLighting,
            set: (bb, wb) => {
              bb.twoSidedLighting = wb
            }
          },
          metadata: wb
        }, oH, TH), (0, Kb.i)(bb, null, YM, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlphaFresnel" in bb,
            get: bb => bb.useAlphaFresnel,
            set: (bb, wb) => {
              bb.useAlphaFresnel = wb
            }
          },
          metadata: wb
        }, kH, bp), (0, Kb.i)(bb, null, ZM, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLinearAlphaFresnel" in bb,
            get: bb => bb.useLinearAlphaFresnel,
            set: (bb, wb) => {
              bb.useLinearAlphaFresnel = wb
            }
          },
          metadata: wb
        }, wp, Mp), (0, Kb.i)(bb, null, fM, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "environmentBRDFTexture" in bb,
            get: bb => bb.environmentBRDFTexture,
            set: (bb, wb) => {
              bb.environmentBRDFTexture = wb
            }
          },
          metadata: wb
        }, ep, Hp), (0, Kb.i)(bb, null, AM, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceNormalForward" in bb,
            get: bb => bb.forceNormalForward,
            set: (bb, wb) => {
              bb.forceNormalForward = wb
            }
          },
          metadata: wb
        }, pp, Vp), (0, Kb.i)(bb, null, WM, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: bb => "enableSpecularAntiAliasing" in bb,
            get: bb => bb.enableSpecularAntiAliasing,
            set: (bb, wb) => {
              bb.enableSpecularAntiAliasing = wb
            }
          },
          metadata: wb
        }, gp, lp), (0, Kb.i)(bb, null, JM, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: bb => "useHorizonOcclusion" in bb,
            get: bb => bb.useHorizonOcclusion,
            set: (bb, wb) => {
              bb.useHorizonOcclusion = wb
            }
          },
          metadata: wb
        }, Lp, Ip), (0, Kb.i)(bb, null, SM, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRadianceOcclusion" in bb,
            get: bb => bb.useRadianceOcclusion,
            set: (bb, wb) => {
              bb.useRadianceOcclusion = wb
            }
          },
          metadata: wb
        }, Op, Up), (0, Kb.i)(bb, null, NM, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: bb => "unlit" in bb,
            get: bb => bb.unlit,
            set: (bb, wb) => {
              bb.unlit = wb
            }
          },
          metadata: wb
        }, tp, Cp), (0, Kb.i)(bb, null, vM, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "applyDecalMapAfterDetailMap" in bb,
            get: bb => bb.applyDecalMapAfterDetailMap,
            set: (bb, wb) => {
              bb.applyDecalMapAfterDetailMap = wb
            }
          },
          metadata: wb
        }, Ep, Fp), wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wb
        })
      })(), bb.PBRMATERIAL_OPAQUE = Xw.PBRMATERIAL_OPAQUE, bb.PBRMATERIAL_ALPHATEST = Xw.PBRMATERIAL_ALPHATEST, bb.PBRMATERIAL_ALPHABLEND = Xw.PBRMATERIAL_ALPHABLEND, bb.PBRMATERIAL_ALPHATESTANDBLEND = Xw.PBRMATERIAL_ALPHATESTANDBLEND, bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = Xw.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, bb
    })();
    const SH = "KHR_materials_diffuse_transmission";

    function NH(bb, wb) {
      const Mb = wb.subSurface;
      let eb = null;
      return Mb.translucencyIntensityTexture ? eb = Mb.translucencyIntensityTexture : Mb.thicknessTexture && Mb.useMaskFromThicknessTexture && (eb = Mb.thicknessTexture), eb && !Mb.useGltfStyleTextures ? (Rb.b.Warn(`${bb}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${wb.name}`, 1), null) : eb
    }
    class vH {
      constructor(bb) {
        this.name = SH, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, wb, Mb) {
        const eb = [];
        if (Mb instanceof JH && this._isExtensionEnabled(Mb)) {
          const wb = NH(bb, Mb);
          return wb && eb.push(wb), Mb.subSurface.translucencyColorTexture && eb.push(Mb.subSurface.translucencyColorTexture), eb
        }
        return eb
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const wb = bb.subSurface;
        return !!wb.isTranslucencyEnabled && (!bb.unlit && !wb.useAlbedoToTintTranslucency && wb.useGltfStyleTextures && 1 === wb.volumeIndexOfRefraction && 0 === wb.minimumThickness && 0 === wb.maximumThickness)
      }
      postExportMaterialAsync(bb, wb, Mb) {
        return new Promise((eb => {
          if (Mb instanceof JH && this._isExtensionEnabled(Mb)) {
            this._wasUsed = !0;
            const eb = Mb.subSurface,
              Hb = NH(bb, Mb),
              pb = 0 == eb.translucencyIntensity ? void 0 : eb.translucencyIntensity,
              Vb = this._exporter._materialExporter.getTextureInfo(Hb) ?? void 0,
              gb = !eb.translucencyColor || eb.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : eb.translucencyColor.ppb(),
              lb = this._exporter._materialExporter.getTextureInfo(eb.translucencyColorTexture) ?? void 0,
              Lb = {
                diffuseTransmissionFactor: pb,
                diffuseTransmissionTexture: Vb,
                diffuseTransmissionColorFactor: gb,
                diffuseTransmissionColorTexture: lb
              };
            (Vb || lb) && this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions = wb.extensions || {}, wb.extensions[SH] = Lb
          }
          eb(wb)
        }))
      }
    }
    let QH = !1;

    function GH() {
      QH || (QH = !0, We.RegisterExtension(SH, (bb => new vH(bb))))
    }
    GH();
    const qH = "KHR_materials_dispersion";
    class aH {
      constructor() {
        this.name = qH, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const wb = bb.subSurface;
        return !(!wb.isRefractionEnabled && !wb.isDispersionEnabled)
      }
      postExportMaterialAsync(bb, wb, Mb) {
        return new Promise((bb => {
          if (Mb instanceof JH && this._isExtensionEnabled(Mb)) {
            this._wasUsed = !0;
            const bb = {
              dispersion: Mb.subSurface.dispersion
            };
            wb.extensions = wb.extensions || {}, wb.extensions[qH] = bb
          }
          bb(wb)
        }))
      }
    }
    let iH = !1;

    function uH() {
      iH || (iH = !0, We.RegisterExtension(qH, (() => new aH)))
    }
    uH();
    const dH = "KHR_materials_emissive_strength";
    class PH {
      constructor() {
        this.name = dH, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(bb, wb, Mb) {
        return await new Promise((bb => {
          if (!(Mb instanceof JH)) return bb(wb);
          const eb = Mb.emissiveColor.scale(Mb.emissiveIntensity),
            Hb = Math.max(...eb.ppb());
          if (Hb > 1) {
            wb.emissiveFactor = eb.scale(1 / Hb).ppb(), this._wasUsed = !0;
            const bb = {
              emissiveStrength: Hb
            };
            wb.extensions || (wb.extensions = {}), wb.extensions[dH] = bb
          } else wb.emissiveFactor = eb.ppb();
          return bb(wb)
        }))
      }
    }
    let nH = !1;

    function yH() {
      nH || (nH = !0, We.RegisterExtension(dH, (() => new PH)))
    }
    yH();
    const oH = "KHR_materials_ior";
    class TH {
      constructor() {
        this.name = oH, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(bb) {
        return !bb.unlit && (bb instanceof kw ? 1.5 != bb.specularIor : bb instanceof JH && (void 0 != bb.indexOfRefraction && 1.5 != bb.indexOfRefraction))
      }
      postExportMaterialAsync(bb, wb, Mb) {
        return new Promise((bb => {
          if (Mb instanceof JH && this._isExtensionEnabled(Mb)) {
            this._wasUsed = !0;
            const bb = {
              ior: Mb.indexOfRefraction
            };
            wb.extensions = wb.extensions || {}, wb.extensions[oH] = bb
          } else if (Mb instanceof kw && this._isExtensionEnabled(Mb)) {
            this._wasUsed = !0;
            const bb = {
              ior: Mb.specularIor
            };
            wb.extensions = wb.extensions || {}, wb.extensions[oH] = bb
          }
          bb(wb)
        }))
      }
    }
    let kH = !1;

    function bp() {
      kH || (kH = !0, We.RegisterExtension(oH, (() => new TH)))
    }
    bp();
    const wp = "KHR_materials_iridescence";
    class Mp {
      constructor(bb) {
        this.name = wp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, wb, Mb) {
        const eb = [];
        if (Mb instanceof Xw) {
          if (Mb.iridescence.isEnabled) return Mb.iridescence.texture && eb.push(Mb.iridescence.texture), Mb.iridescence.thicknessTexture && Mb.iridescence.thicknessTexture !== Mb.iridescence.texture && eb.push(Mb.iridescence.thicknessTexture), eb
        } else if (Mb instanceof kw && Mb.thinFilmWeight > 0) return Mb.thinFilmWeightTexture && eb.push(Mb.thinFilmWeightTexture), Mb.thinFilmThicknessTexture && Mb.thinFilmThicknessTexture !== Mb.thinFilmWeightTexture && eb.push(Mb.thinFilmThicknessTexture), eb;
        return []
      }
      postExportMaterialAsync(bb, wb, Mb) {
        return new Promise((bb => {
          if (Mb instanceof Xw) {
            if (!Mb.iridescence.isEnabled) return void bb(wb);
            this._wasUsed = !0, wb.extensions = wb.extensions || {};
            const eb = this._exporter._materialExporter.getTextureInfo(Mb.iridescence.texture),
              Hb = this._exporter._materialExporter.getTextureInfo(Mb.iridescence.thicknessTexture),
              pb = {
                iridescenceFactor: Mb.iridescence.intensity,
                iridescenceIor: Mb.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: Mb.iridescence.minimumThickness,
                iridescenceThicknessMaximum: Mb.iridescence.maximumThickness,
                iridescenceTexture: eb ?? void 0,
                iridescenceThicknessTexture: Hb ?? void 0
              };
            null === pb.iridescenceTexture && null === pb.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions[wp] = pb
          } else if (Mb instanceof kw) {
            if (Mb.thinFilmWeight <= 0) return void bb(wb);
            this._wasUsed = !0, wb.extensions = wb.extensions || {};
            const eb = this._exporter._materialExporter.getTextureInfo(Mb.thinFilmWeightTexture),
              Hb = this._exporter._materialExporter.getTextureInfo(Mb.thinFilmThicknessTexture),
              pb = {
                iridescenceFactor: Mb.thinFilmWeight,
                iridescenceIor: Mb.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * Mb.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * Mb.thinFilmThickness,
                iridescenceTexture: eb ?? void 0,
                iridescenceThicknessTexture: Hb ?? void 0
              };
            null === pb.iridescenceTexture && null === pb.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions[wp] = pb
          }
          bb(wb)
        }))
      }
    }
    let ep = !1;

    function Hp() {
      ep || (ep = !0, We.RegisterExtension(wp, (bb => new Mp(bb))))
    }
    Hp();
    const pp = "KHR_materials_sheen";
    class Vp {
      constructor(bb) {
        this.name = pp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, wb, Mb) {
        return Mb instanceof JH && Mb.sheen.isEnabled && Mb.sheen.texture ? [Mb.sheen.texture] : []
      }
      async postExportMaterialAsync(bb, wb, Mb) {
        return await new Promise((bb => {
          if (Mb instanceof JH) {
            if (!Mb.sheen.isEnabled) return void bb(wb);
            this._wasUsed = !0, null == wb.extensions && (wb.extensions = {});
            const eb = {
              sheenColorFactor: Mb.sheen.color.ppb(),
              sheenRoughnessFactor: Mb.sheen.roughness ?? 0
            };
            null === eb.sheenColorTexture && null === eb.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Mb), Mb.sheen.texture && (eb.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(Mb.sheen.texture) ?? void 0), Mb.sheen.textureRoughness && !Mb.sheen.useRoughnessFromMainTexture ? eb.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Mb.sheen.textureRoughness) ?? void 0 : Mb.sheen.texture && Mb.sheen.useRoughnessFromMainTexture && (eb.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Mb.sheen.texture) ?? void 0), wb.extensions[pp] = eb
          }
          bb(wb)
        }))
      }
    }
    let gp = !1;

    function lp() {
      gp || (gp = !0, We.RegisterExtension(pp, (bb => new Vp(bb))))
    }
    lp();
    const Lp = "KHR_materials_fuzz";

    function Ip(bb, wb) {
      const Mb = new cb.f(wb.name, wb.RJ());
      return Mb._texture = bb, Mb.coordinatesIndex = wb.coordinatesIndex, wb instanceof cb.f && (Mb.uOffset = wb.uOffset, Mb.vOffset = wb.vOffset, Mb.uScale = wb.uScale, Mb.vScale = wb.vScale, Mb.wAng = wb.wAng), Mb.wrapU = wb.wrapU, Mb.wrapV = wb.wrapV, Mb
    }
    class Op {
      constructor(bb) {
        this.name = Lp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = bb
      }
      dispose() {
        for (const bb of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[bb].dispose()
        }
        this._mergedTexturesMap = {};
        for (const bb of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[bb].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, wb, Mb) {
        if (Mb instanceof kw) {
          const bb = [];
          if (Mb.fuzzWeight > 0) {
            Mb.fuzzWeightTexture && bb.push(Mb.fuzzWeightTexture);
            let wb = !1;
            if (Mb.fuzzRoughnessTexture && (Mb._useFuzzRoughnessFromTextureAlpha ? bb.push(Mb.fuzzRoughnessTexture) : wb = !0), Mb.fuzzColorTexture && !wb && bb.push(Mb.fuzzColorTexture), wb) {
              const wb = function(bb) {
                const wb = bb.fuzzColorTexture,
                  Mb = wb && wb.getInternalTexture() ? wb.getInternalTexture().uniqueId : "NoFuzzColor",
                  eb = bb.fuzzRoughnessTexture;
                return `FuzzColor_${Mb}_FuzzRoughness_${eb&&eb.getInternalTexture()?eb.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(Mb);
              if (!this._cachedInternalTexturesMap[wb]) {
                const bb = await async function(bb) {
                  const wb = bb.RJ(),
                    Mb = bb.fuzzColorTexture,
                    eb = bb.fuzzRoughnessTexture;
                  return Mb || eb ? (await gM("FuzzTexture", IM(Mb ? lM(Mb, 0) : LM(1), Mb ? lM(Mb, 1) : LM(1), Mb ? lM(Mb, 2) : LM(1), eb ? lM(eb, bb._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : LM(1)), wb)).getInternalTexture() : null
                }(Mb);
                bb && (this._cachedInternalTexturesMap[wb] = bb)
              }
              this._cachedInternalTexturesMap[wb] && (Mb.fuzzColorTexture && (this._mergedTexturesMap[Mb.fuzzColorTexture.uniqueId] = Ip(this._cachedInternalTexturesMap[wb], Mb.fuzzColorTexture), bb.push(this._mergedTexturesMap[Mb.fuzzColorTexture.uniqueId])), Mb.fuzzRoughnessTexture && (this._mergedTexturesMap[Mb.fuzzRoughnessTexture.uniqueId] = Ip(this._cachedInternalTexturesMap[wb], Mb.fuzzRoughnessTexture), bb.push(this._mergedTexturesMap[Mb.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return bb
        }
        return []
      }
      async postExportMaterialAsync(bb, wb, Mb) {
        return await new Promise((bb => {
          if (Mb instanceof kw) {
            if (0 == Mb.fuzzWeight) return void bb(wb);
            this._wasUsed = !0, null == wb.extensions && (wb.extensions = {});
            const eb = {
              fuzzFactor: Mb.fuzzWeight,
              fuzzColorFactor: Mb.fuzzColor.ppb(),
              fuzzRoughnessFactor: Mb.fuzzRoughness
            };
            let Hb, pb;
            Mb.fuzzWeightTexture && (eb.fuzzTexture = this._exporter._materialExporter.getTextureInfo(Mb.fuzzWeightTexture) ?? void 0), Mb.fuzzColorTexture && (Hb = this._mergedTexturesMap[Mb.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[Mb.fuzzColorTexture.uniqueId] : Mb.fuzzColorTexture, eb.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Hb) ?? void 0), Mb.fuzzRoughnessTexture && (pb = this._mergedTexturesMap[Mb.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Mb.fuzzRoughnessTexture.uniqueId] : Mb.fuzzRoughnessTexture, eb.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(pb) ?? void 0), null === eb.fuzzColorTexture && null === eb.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions[Lp] = eb
          }
          bb(wb)
        }))
      }
    }
    let Up = !1;

    function tp() {
      Up || (Up = !0, We.RegisterExtension(Lp, (bb => new Op(bb))))
    }
    tp();
    const Cp = "KHR_materials_specular";
    class Ep {
      constructor(bb) {
        this.name = Cp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, wb, Mb) {
        const eb = [];
        return Mb instanceof JH && this._isExtensionEnabled(Mb) ? (Mb.metallicReflectanceTexture && eb.push(Mb.metallicReflectanceTexture), Mb.reflectanceTexture && eb.push(Mb.reflectanceTexture), eb) : eb
      }
      _isExtensionEnabled(bb) {
        return !bb.unlit && (void 0 != bb.metallicF0Factor && 1 != bb.metallicF0Factor || void 0 != bb.metallicReflectanceColor && !bb.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(bb))
      }
      _hasTexturesExtension(bb) {
        return null != bb.metallicReflectanceTexture || null != bb.reflectanceTexture
      }
      postExportMaterialAsync(bb, wb, Mb) {
        return new Promise((bb => {
          var eb;
          if (Mb instanceof JH && this._isExtensionEnabled(Mb)) {
            this._wasUsed = !0, wb.extensions = wb.extensions || {};
            const bb = this._exporter._materialExporter.getTextureInfo(Mb.metallicReflectanceTexture) ?? void 0,
              eb = this._exporter._materialExporter.getTextureInfo(Mb.reflectanceTexture) ?? void 0,
              Hb = {
                specularFactor: 1 == Mb.metallicF0Factor ? void 0 : Mb.metallicF0Factor,
                specularTexture: bb,
                specularColorFactor: Mb.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : Mb.metallicReflectanceColor.ppb(),
                specularColorTexture: eb
              };
            this._hasTexturesExtension(Mb) && this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions[Cp] = Hb
          } else if (Mb instanceof kw) {
            wb.extensions = wb.extensions || {};
            const Hb = this._exporter._materialExporter.getTextureInfo(Mb.specularWeightTexture) ?? void 0,
              pb = this._exporter._materialExporter.getTextureInfo(Mb.specularColorTexture) ?? void 0,
              Vb = 1 == Mb.specularWeight ? void 0 : Mb.specularWeight,
              gb = Mb.specularColor.equalsFloats(1, 1, 1) ? void 0 : Mb.specularColor.ppb();
            if (!pb && !Hb && void 0 === Vb && void 0 === gb) return bb(wb);
            this._wasUsed = !0;
            const lb = {
                specularEdgeColorEnabled: !0
              },
              Lb = {
                specularFactor: Vb,
                specularTexture: Hb,
                specularColorFactor: gb,
                specularColorTexture: pb,
                extensions: {}
              };
            Lb.extensions.EXT_materials_specular_edge_color = lb, (eb = this._exporter._glTF).extensionsUsed || (eb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Hb || pb) && this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions[Cp] = Lb
          }
          bb(wb)
        }))
      }
    }
    let Fp = !1;

    function Bp() {
      Fp || (Fp = !0, We.RegisterExtension(Cp, (bb => new Ep(bb))))
    }
    Bp();
    const sp = "KHR_materials_transmission";
    class mp {
      constructor(bb) {
        this.name = sp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, wb, Mb) {
        const eb = [];
        if (Mb instanceof JH) {
          if (this._isExtensionEnabled(Mb)) return Mb.subSurface.refractionIntensityTexture && Mb.subSurface.useGltfStyleTextures && eb.push(Mb.subSurface.refractionIntensityTexture), eb
        } else Mb instanceof kw && (Mb.transmissionWeight > 0 && Mb.transmissionWeightTexture && (eb.push(Mb.transmissionWeightTexture), Mb.transmissionColorTexture && eb.push(Mb.transmissionColorTexture)), Mb.subsurfaceWeight > 0 && Mb.subsurfaceWeightTexture && eb.push(Mb.subsurfaceWeightTexture));
        return eb
      }
      _isExtensionEnabled(bb) {
        if (bb instanceof kw && !bb.unlit) return bb.transmissionWeight > 0 || bb.subsurfaceWeight > 0;
        if (bb instanceof JH && !bb.unlit) {
          const wb = bb.subSurface;
          return wb.isRefractionEnabled && void 0 != wb.refractionIntensity && 0 != wb.refractionIntensity || null != wb.refractionIntensityTexture && wb.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(bb, wb, Mb) {
        if (!this._isExtensionEnabled(Mb)) return wb;
        if (Mb instanceof JH) {
          this._wasUsed = !0;
          const eb = Mb.subSurface,
            Hb = {
              transmissionFactor: 0 === eb.refractionIntensity ? void 0 : eb.refractionIntensity
            };
          if (eb.refractionIntensityTexture)
            if (eb.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(Mb);
              const bb = this._exporter._materialExporter.getTextureInfo(eb.refractionIntensityTexture);
              bb && (Hb.transmissionTexture = bb)
            } else Rb.b.Warn(`${bb}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          wb.extensions || (wb.extensions = {}), wb.extensions[sp] = Hb
        } else if (Mb instanceof kw) {
          this._wasUsed = !0;
          const bb = {
            transmissionFactor: (1 - Mb.transmissionWeight) * Mb.subsurfaceWeight + Mb.transmissionWeight
          };
          if (Mb.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Mb);
            const wb = this._exporter._materialExporter.getTextureInfo(Mb.transmissionWeightTexture);
            wb && (bb.transmissionTexture = wb)
          } else if (Mb.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Mb);
            const wb = this._exporter._materialExporter.getTextureInfo(Mb.subsurfaceWeightTexture);
            wb && (bb.transmissionTexture = wb)
          }
          if (0 == Mb.transmissionDepth && (!Mb.transmissionColor.equals(ub.e.White()) || Mb.transmissionColorTexture) && wb.pbrMetallicRoughness && (wb.pbrMetallicRoughness.baseColorFactor || (wb.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), wb.pbrMetallicRoughness.baseColorFactor[0] *= Mb.transmissionColor.r, wb.pbrMetallicRoughness.baseColorFactor[1] *= Mb.transmissionColor.g, wb.pbrMetallicRoughness.baseColorFactor[2] *= Mb.transmissionColor.b, Mb.transmissionColorTexture && !wb.pbrMetallicRoughness.baseColorTexture)) {
            const bb = this._exporter._materialExporter.getTextureInfo(Mb.transmissionColorTexture);
            bb && (wb.pbrMetallicRoughness.baseColorTexture = bb, this._exporter._materialNeedsUVsSet.add(Mb))
          }
          wb.extensions || (wb.extensions = {}), wb.extensions[sp] = bb
        }
        return wb
      }
    }
    let hp = !1;

    function zp() {
      hp || (hp = !0, We.RegisterExtension(sp, (bb => new mp(bb))))
    }
    zp();
    var Xp = Mb(41935);
    const xp = "KHR_materials_unlit";
    class jp {
      constructor() {
        this.name = xp, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(bb, wb, Mb) {
        return new Promise((bb => {
          let eb = !1;
          Mb instanceof JH ? eb = Mb.unlit : Mb instanceof Xp.g && (eb = Mb.disableLighting), eb && (this._wasUsed = !0, null == wb.extensions && (wb.extensions = {}), wb.extensions[xp] = {}), bb(wb)
        }))
      }
    }
    let Kp = !1;

    function rp() {
      Kp || (Kp = !0, We.RegisterExtension(xp, (() => new jp)))
    }
    rp();
    const Rp = "KHR_materials_volume";
    class Dp {
      constructor(bb) {
        this.name = Rp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, wb, Mb) {
        const eb = [];
        if (Mb instanceof JH) {
          if (this._isExtensionEnabled(Mb)) return Mb.subSurface.thicknessTexture && eb.push(Mb.subSurface.thicknessTexture), eb
        } else Mb instanceof kw && (Mb.transmissionWeight > 0 || Mb.subsurfaceWeight > 0) && Mb.geometryThicknessTexture && eb.push(Mb.geometryThicknessTexture);
        return eb
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const wb = bb.subSurface;
        return !(!wb.isRefractionEnabled && !wb.isTranslucencyEnabled) && (void 0 != wb.maximumThickness && 0 != wb.maximumThickness || void 0 != wb.tintColorAtDistance && wb.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != wb.tintColor && wb.tintColor != ub.e.White() || this._hasTexturesExtension(bb))
      }
      _hasTexturesExtension(bb) {
        return null != bb.subSurface.thicknessTexture
      }
      postExportMaterialAsync(bb, wb, Mb) {
        return new Promise((bb => {
          if (Mb instanceof JH && this._isExtensionEnabled(Mb)) {
            this._wasUsed = !0;
            const bb = Mb.subSurface,
              eb = {
                thicknessFactor: 0 == bb.maximumThickness ? void 0 : bb.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(bb.thicknessTexture) ?? void 0,
                attenuationDistance: bb.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : bb.tintColorAtDistance,
                attenuationColor: bb.tintColor.equalsFloats(1, 1, 1) ? void 0 : bb.tintColor.ppb()
              };
            this._hasTexturesExtension(Mb) && this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions = wb.extensions || {}, wb.extensions[Rp] = eb
          } else if (Mb instanceof kw) {
            const bb = Mb.transmissionWeight > 0 && !Mb.geometryThinWalled,
              eb = Mb.subsurfaceWeight > 0 && !Mb.geometryThinWalled;
            if (bb || eb) {
              this._wasUsed = !0;
              const Hb = Mb.geometryThickness,
                pb = this._exporter._materialExporter.getTextureInfo(Mb.geometryThicknessTexture) ?? void 0;
              let Vb;
              pb && this._exporter._materialNeedsUVsSet.add(Mb);
              const gb = ub.e.White().ppb();
              if (bb && Mb.transmissionDepth > 0) {
                const bb = 1 / Mb.transmissionDepth;
                let wb = new Nb.o(-Math.log(Mb.transmissionColor.r) * bb, -Math.log(Mb.transmissionColor.g) * bb, -Math.log(Mb.transmissionColor.b) * bb);
                const eb = new Nb.o(Mb.transmissionScatter.r * bb, Mb.transmissionScatter.g * bb, Mb.transmissionScatter.b * bb),
                  Hb = wb.subtract(eb),
                  pb = Math.min(Hb.x, Hb.y, Hb.z);
                pb < 0 && (Hb.x = Hb.x - pb, Hb.y = Hb.y - pb, Hb.z = Hb.z - pb), wb = Hb.add(eb);
                Vb = 1 / Math.max(wb.x, wb.y, wb.z), gb[0] = Math.exp(-wb.x * Vb), gb[1] = Math.exp(-wb.y * Vb), gb[2] = Math.exp(-wb.z * Vb)
              } else Vb = Number.MAX_VALUE, gb[0] = 1, gb[1] = 1, gb[2] = 1;
              let lb = 1;
              const Lb = ub.e.White().ppb();
              if (eb) {
                const bb = Mb.subsurfaceRadius,
                  wb = Mb.subsurfaceRadiusScale,
                  eb = new Nb.o(wb.r, wb.g, wb.b).multiplyByFloats(bb, bb, bb),
                  Hb = new Nb.o(1 / Math.max(eb.x, 1e-6), 1 / Math.max(eb.y, 1e-6), 1 / Math.max(eb.z, 1e-6));
                lb = 1 / Math.max(Hb.x, Hb.y, Hb.z), Lb[0] = Math.exp(-Hb.x * lb), Lb[1] = Math.exp(-Hb.y * lb), Lb[2] = Math.exp(-Hb.z * lb)
              }
              const Ib = (1 - Mb.transmissionWeight) * Mb.subsurfaceWeight,
                Ob = Ib + Mb.transmissionWeight,
                Ub = 1 / Math.max(Ob, 1e-6),
                tb = Mb.transmissionWeight * Ub,
                Cb = Ib * Ub,
                Eb = gb.map(((bb, wb) => bb * tb + Lb[wb] * Cb)),
                Fb = {
                  thicknessFactor: Hb,
                  thicknessTexture: pb,
                  attenuationDistance: Vb * tb + lb * Cb,
                  attenuationColor: Eb
                };
              wb.extensions = wb.extensions || {}, wb.extensions[Rp] = Fb
            }
          }
          bb(wb)
        }))
      }
    }
    let cp = !1;

    function Yp() {
      cp || (cp = !0, We.RegisterExtension(Rp, (bb => new Dp(bb))))
    }
    Yp();
    const Zp = "KHR_materials_volume_scatter";
    class fp {
      constructor(bb) {
        this.name = Zp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, wb, Mb) {
        const eb = [];
        return Mb instanceof kw && (Mb.transmissionWeight > 0 && Mb.transmissionScatterTexture && eb.push(Mb.transmissionScatterTexture), Mb.subsurfaceWeight > 0 && Mb.subsurfaceColorTexture && eb.push(Mb.subsurfaceColorTexture)), eb
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const wb = bb.transmissionWeight > 0 && !bb.geometryThinWalled && bb.transmissionDepth > 0 && !bb.transmissionScatter.equals(ub.e.Black()),
          Mb = bb.subsurfaceWeight > 0 && !bb.geometryThinWalled;
        return !(!wb && !Mb)
      }
      postExportMaterialAsync(bb, wb, Mb) {
        return new Promise((bb => {
          if (Mb instanceof kw && this._isExtensionEnabled(Mb)) {
            this._wasUsed = !0;
            let bb = Nb.o.Zero(),
              eb = 0;
            if (Mb.transmissionWeight > 0) {
              bb = function(bb) {
                const wb = new Nb.o(Math.sqrt(1 - bb.x), Math.sqrt(1 - bb.y), Math.sqrt(1 - bb.z)),
                  Mb = new Nb.o(1, 1, 1),
                  eb = Mb.subtract(wb),
                  Hb = Mb.subtract(new Nb.o(.139, .139, .139).multiplyInPlace(wb)),
                  pb = Mb.add(new Nb.o(1.17, 1.17, 1.17).multiplyInPlace(wb));
                return eb.multiplyInPlace(Hb).divideInPlace(pb)
              }(new Nb.o(Mb.transmissionScatter.r, Mb.transmissionScatter.g, Mb.transmissionScatter.b)), eb = Mb.transmissionScatterAnisotropy
            }
            const Hb = Nb.o.Zero();
            let pb = 0;
            Mb.subsurfaceWeight > 0 && (Hb.set(Mb.subsurfaceColor.r, Mb.subsurfaceColor.g, Mb.subsurfaceColor.b), pb = Mb.subsurfaceScatterAnisotropy);
            const Vb = (1 - Mb.transmissionWeight) * Mb.subsurfaceWeight,
              gb = Vb + Mb.transmissionWeight,
              lb = 1 / Math.max(gb, 1e-6),
              Lb = Mb.transmissionWeight * lb,
              Ib = Vb * lb,
              Ob = {
                multiscatterColorFactor: bb.multiplyByFloats(Lb, Lb, Lb).addInPlace(Hb.multiplyByFloats(Ib, Ib, Ib)).ppb(),
                scatterAnisotropy: eb * Lb + pb * Ib
              };
            if (Mb.subsurfaceWeight > 0 && Mb.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(Mb);
              const bb = this._exporter._materialExporter.getTextureInfo(Mb.subsurfaceColorTexture);
              bb && (Ob.multiscatterColorTexture = bb)
            } else if (Mb.transmissionWeight > 0 && Mb.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(Mb);
              const bb = this._exporter._materialExporter.getTextureInfo(Mb.transmissionScatterTexture);
              bb && (Ob.multiscatterColorTexture = bb)
            }
            wb.extensions = wb.extensions || {}, wb.extensions[Zp] = Ob
          }
          bb(wb)
        }))
      }
    }
    let Ap = !1;

    function Wp() {
      Ap || (Ap = !0, We.RegisterExtension(Zp, (bb => new fp(bb)), 101))
    }
    Wp();
    const Jp = "KHR_materials_diffuse_roughness";
    class Sp {
      constructor(bb) {
        this.name = Jp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, wb, Mb) {
        const eb = [];
        if (Mb instanceof Xw) {
          if (Mb._baseDiffuseRoughness) return Mb._baseDiffuseRoughnessTexture && eb.push(Mb._baseDiffuseRoughnessTexture), eb
        } else if (Mb instanceof kw && Mb.baseDiffuseRoughness) return Mb.baseDiffuseRoughnessTexture && eb.push(Mb.baseDiffuseRoughnessTexture), eb;
        return []
      }
      postExportMaterialAsync(bb, wb, Mb) {
        return new Promise((bb => {
          let eb = null,
            Hb = null;
          if (Mb instanceof Xw ? (eb = Mb._baseDiffuseRoughness, Hb = Mb._baseDiffuseRoughnessTexture) : Mb instanceof kw && (eb = Mb.baseDiffuseRoughness, Hb = Mb.baseDiffuseRoughnessTexture), !eb) return void bb(wb);
          this._wasUsed = !0, wb.extensions = wb.extensions || {};
          const pb = {
            diffuseRoughnessFactor: eb,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Hb) ?? void 0
          };
          null !== pb.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(Mb), wb.extensions[Jp] = pb, bb(wb)
        }))
      }
    }
    let Np = !1;

    function vp() {
      Np || (Np = !0, We.RegisterExtension(Jp, (bb => new Sp(bb))))
    }
    vp();
    const Qp = "KHR_materials_openpbr";
    class Gp {
      constructor() {
        this.name = Qp, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(bb, wb, Mb) {
        return new Promise((bb => {
          Mb instanceof kw && (this._wasUsed = !0, wb.extensions = wb.extensions || {}, wb.extensions[Qp] = {}), bb(wb)
        }))
      }
    }
    let qp = !1;

    function ap() {
      qp || (qp = !0, We.RegisterExtension(Qp, (() => new Gp)))
    }
    ap();
    const ip = "KHR_texture_transform";
    class dp {
      constructor() {
        this.name = ip, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(bb, wb, Mb) {
        if (Mb.RJ() || jw.e.Warn(`${bb}: "scene" is not defined for Babylon texture ${Mb.name}!`), (0 !== Mb.uAng || 0 !== Mb.vAng) && (jw.e.Warn(`${bb}: Texture ${Mb.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== Mb.uRotationCenter || 0 !== Mb.vRotationCenter)) return;
        const eb = {};
        let Hb = !1;
        if (0 === Mb.uOffset && 0 === Mb.vOffset || (eb.offset = [Mb.uOffset, Mb.vOffset], Hb = !0), 1 === Mb.uScale && 1 === Mb.vScale || (eb.scale = [Mb.uScale, Mb.vScale], Hb = !0), 0 !== Mb.wAng) {
          if (0 !== Mb.uRotationCenter || 0 !== Mb.vRotationCenter) {
            if (Mb.homogeneousRotationInUVTransform && Mb.uScale !== Mb.vScale) return void jw.e.Warn(`${bb}: Texture ${Mb.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${ip}.`);
            jw.e.Warn(`${bb}: Texture ${Mb.name} with non-origin rotation center will be exported using an adjusted offset with ${ip}.`), eb.offset = function(bb) {
              const {
                uOffset: wb,
                vOffset: Mb,
                uRotationCenter: eb,
                vRotationCenter: Hb,
                uScale: pb,
                vScale: Vb,
                wAng: gb
              } = bb, lb = Math.cos(gb), Lb = Math.sin(gb), Ib = eb * pb, Ob = Hb * Vb;
              return [wb + (Ib * (1 - lb) + Ob * Lb), Mb + (Ob * (1 - lb) - Ib * Lb)]
            }(Mb)
          }
          eb.rotation = -Mb.wAng, Hb = !0
        }
        0 !== Mb.coordinatesIndex && (eb.texCoord = Mb.coordinatesIndex, Hb = !0), Hb && (this._wasUsed = !0, wb.extensions || (wb.extensions = {}), wb.extensions[ip] = eb)
      }
    }
    let Pp = !1;

    function np() {
      Pp || (Pp = !0, We.RegisterExtension(ip, (() => new dp)))
    }
    np();
    var yp = Mb(41722);
    const op = "KHR_texture_basisu";
    class Tp {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = op, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      postExportTexture(bb, wb) {
        const Mb = this._exporter._textures[wb.index],
          eb = Mb.source;
        if (void 0 === eb) return;
        const Hb = this._exporter._images[eb];
        "image/ktx2" === (Hb.mimeType || (0, yp.d)(Hb.uri)) && (Mb.source = void 0, Mb.extensions || (Mb.extensions = {}), Mb.extensions[op] = {
          source: eb
        }, this._wasUsed = !0)
      }
    }
    let kp = !1;

    function bV() {
      kp || (kp = !0, We.RegisterExtension(op, (bb => new Tp(bb))))
    }
    bV();
    const wV = "EXT_texture_webp";
    class MV {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = wV, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      postExportTexture(bb, wb) {
        const Mb = this._exporter._textures[wb.index],
          eb = Mb.source;
        if (void 0 === eb) return;
        const Hb = this._exporter._images[eb];
        "image/webp" === (Hb.mimeType || (0, yp.d)(Hb.uri)) && (Mb.source = void 0, Mb.extensions || (Mb.extensions = {}), Mb.extensions[wV] = {
          source: eb
        }, this._wasUsed = !0)
      }
    }
    let eV = !1;

    function HV() {
      eV || (eV = !0, We.RegisterExtension(wV, (bb => new MV(bb))))
    }
    HV();
    const pV = "EXT_texture_avif";
    class VV {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = pV, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      postExportTexture(bb, wb) {
        const Mb = this._exporter._textures[wb.index],
          eb = Mb.source;
        if (void 0 === eb) return;
        const Hb = this._exporter._images[eb];
        "image/avif" === (Hb.mimeType || (0, yp.d)(Hb.uri)) && (Mb.source = void 0, Mb.extensions || (Mb.extensions = {}), Mb.extensions[pV] = {
          source: eb
        }, this._wasUsed = !0)
      }
    }
    let gV = !1;

    function lV() {
      gV || (gV = !0, We.RegisterExtension(pV, (bb => new VV(bb))))
    }
    lV();
    class LV {
      static CreateSTL(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Hb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Vb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          gb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          lb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const Lb = function(bb, wb, Mb) {
            const Hb = [3 * bb[Mb], 3 * bb[Mb + 1], 3 * bb[Mb + 2]],
              pb = [new eb.YC(wb[Hb[0]], wb[Hb[0] + 2], wb[Hb[0] + 1]), new eb.YC(wb[Hb[1]], wb[Hb[1] + 2], wb[Hb[1] + 1]), new eb.YC(wb[Hb[2]], wb[Hb[2] + 2], wb[Hb[2] + 1])],
              Vb = pb[0].subtract(pb[1]),
              gb = pb[2].subtract(pb[1]);
            return {
              v: pb,
              n: eb.YC.Cross(gb, Vb).normalize()
            }
          },
          Ob = function(bb, wb, Mb, eb) {
            return wb = Ub(bb, wb, Mb.x, eb), wb = Ub(bb, wb, Mb.y, eb), Ub(bb, wb, Mb.z, eb)
          },
          Ub = function(bb, wb, Mb, eb) {
            return bb.setFloat32(wb, Mb, eb), wb + 4
          },
          Cb = function(bb) {
            if (gb) {
              let wb = bb;
              bb instanceof tb.d && (wb = bb.opb);
              const Mb = wb.getVerticesData(Ib.f.PositionKind, !0, !0);
              if (!Mb) return [];
              const Hb = eb.YC.Zero();
              let pb;
              for (pb = 0; pb < Mb.length; pb += 3) eb.YC.TransformCoordinatesFromFloatsToRef(Mb[pb], Mb[pb + 1], Mb[pb + 2], bb.computeWorldMatrix(!0), Hb).toArray(Mb, pb);
              return Mb
            }
            return bb.getVerticesData(Ib.f.PositionKind) || []
          };
        gb && (Vb = !0);
        let Eb = "",
          Fb = 0,
          Bb = 0;
        if (Hb) {
          for (let Mb = 0; Mb < bb.length; Mb++) {
            const wb = bb[Mb].ipb();
            Fb += wb ? wb.length / 3 : 0
          }
          const wb = new ArrayBuffer(84 + 50 * Fb);
          Eb = new DataView(wb), Bb += 80, Eb.setUint32(Bb, Fb, pb), Bb += 4
        } else lb || (Eb = "solid stlmesh\r\n");
        for (let eb = 0; eb < bb.length; eb++) {
          const wb = bb[eb];
          !Hb && lb && (Eb += "solid " + wb.name + "\r\n"), !Vb && wb instanceof Ie.e && wb.bakeCurrentTransformIntoVertices();
          const Mb = Cb(wb),
            gb = wb.ipb() || [];
          for (let bb = 0; bb < gb.length; bb += 3) {
            const wb = Lb(gb, Mb, bb);
            Hb ? (Bb = Ob(Eb, Bb, wb.n, pb), Bb = Ob(Eb, Bb, wb.v[0], pb), Bb = Ob(Eb, Bb, wb.v[1], pb), Bb = Ob(Eb, Bb, wb.v[2], pb), Bb += 2) : (Eb += "\tfacet normal " + wb.n.x + " " + wb.n.y + " " + wb.n.z + "\r\n", Eb += "\t\touter loop\r\n", Eb += "\t\t\tvertex " + wb.v[0].x + " " + wb.v[0].y + " " + wb.v[0].z + "\r\n", Eb += "\t\t\tvertex " + wb.v[1].x + " " + wb.v[1].y + " " + wb.v[1].z + "\r\n", Eb += "\t\t\tvertex " + wb.v[2].x + " " + wb.v[2].y + " " + wb.v[2].z + "\r\n", Eb += "\t\tendloop\r\n", Eb += "\tendfacet\r\n")
          }!Hb && lb && (Eb += "endsolid " + name + "\r\n")
        }
        if (Hb || lb || (Eb += "endsolid stlmesh"), wb) {
          const bb = document.createElement("a"),
            wb = new Blob([Eb], {
              type: "application/octet-stream"
            });
          bb.href = window.URL.createObjectURL(wb), bb.download = Mb + ".stl", bb.click()
        }
        return Eb
      }
    }

    function IV(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Hb = [];
      for (let pb = 0; pb < bb.length / Mb; pb++) {
        const Vb = bb[pb * Mb] * (eb ? -1 : 1),
          gb = bb[pb * Mb + 1],
          lb = bb[pb * Mb + 2];
        Hb.push(`(${Vb.toPrecision(wb.precision)}, ${gb.toPrecision(wb.precision)}, ${lb.toPrecision(wb.precision)})`)
      }
      return Hb.join(", ")
    }

    function OV(bb, wb) {
      const Mb = [];
      for (let eb = 0; eb < bb.length / 2; eb++) {
        const Hb = bb[2 * eb],
          pb = bb[2 * eb + 1];
        Mb.push(`(${Hb.toPrecision(wb.precision)}, ${(1-pb).toPrecision(wb.precision)})`)
      }
      return Mb.join(", ")
    }

    function UV(bb, wb, Mb, eb) {
      const Hb = bb.getVerticesData(Ib.f.PositionKind),
        pb = bb.getVerticesData(Ib.f.NormalKind);
      if (Hb && pb) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${Mb}"\n\t\tint[] faceVertexCounts = [${function(bb){const wb=bb.ipb()?.length?bb.getTotalIndices():bb.getTotalVertices();return Array(wb/3).fill(3).join(", ")}(bb)}]\n\t\tint[] faceVertexIndices = [${function(bb){const wb=bb.ipb(),Mb=wb?.length??bb.getTotalVertices(),eb=[];if(null!==wb)for(let Hb=0;Hb<Mb;Hb++)eb.push(wb[Hb]);else for(let Hb=0;Hb<Mb;Hb++)eb.push(Hb);return eb.join(", ")}(bb)}]\n\t\tnormal3f[] normals = [${IV(pb,wb,void 0,eb)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${IV(Hb,wb,void 0,eb)}]\n        ${function(bb,wb){let Mb="";for(let Hb=0;Hb<4;Hb++){const eb=Hb>0?Hb:"",pb=bb.getVerticesData(Ib.f.UVKind+(eb?eb+1:""));pb&&(Mb+=`\n\t\ttexCoord2f[] primvars:st${eb} = [${OV(pb,wb)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const eb=bb.getVerticesData(Ib.f.ColorKind);return eb&&(Mb+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        IV(eb, wb, eb.length / bb.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),Mb}(bb,wb)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function tV(bb, wb, Mb, eb) {
      return `\n        def "Geometry"\n        {\n        ${UV(bb,wb,Mb,eb)}\n        }\n        `
    }

    function CV(bb) {
      let wb = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return wb += bb, fflate.strToU8(wb)
    }

    function EV(bb) {
      const wb = bb.m;
      return `( ${FV(wb,0)}, ${FV(wb,4)}, ${FV(wb,8)}, ${FV(wb,12)} )`
    }

    function FV(bb, wb) {
      return `(${bb[wb+0]}, ${bb[wb+1]}, ${bb[wb+2]}, ${bb[wb+3]})`
    }

    function BV(bb, wb) {
      const Mb = "Object_" + bb.uniqueId,
        eb = EV(wb);
      return `def Xform "${Mb}" (\n\tprepend references = @./geometries/Geometry_${bb.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${eb}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${bb.material.uniqueId}>\n}\n\n`
    }

    function sV(bb) {
      switch (bb) {
        case xb.b.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case xb.b.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case xb.b.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function mV(bb) {
      return `(${bb.x}, ${bb.y})`
    }

    function hV(bb) {
      return `(${bb.r}, ${bb.g}, ${bb.b})`
    }

    function zV(bb) {
      return "image/jpeg" === bb || "image/png" === bb
    }

    function XV(bb, wb, Mb, Hb, pb, Vb) {
      const gb = bb.getInternalTexture().uniqueId + "_" + bb.invertY,
        Lb = bb.mimeType || (0, lb.e)(bb.getInternalTexture()?.url ?? ""),
        Ib = zV(Lb) ? Lb : "image/png",
        Ob = "image/jpeg" === Ib ? "jpg" : "png";
      pb[gb] = {
        texture: bb,
        mimeType: Ib,
        ext: Ob
      };
      const Ub = bb.coordinatesIndex > 0 ? "st" + bb.coordinatesIndex : "st",
        tb = new eb.Vector2(bb.uScale, bb.vScale),
        Cb = new eb.Vector2(bb.uOffset, bb.vOffset),
        Eb = bb.wAng,
        Fb = Math.sin(Eb),
        Bb = Math.cos(Eb);
      return Cb.y = 1 - Cb.y - tb.y, Cb.x += Fb * tb.x, Cb.y += (1 - Bb) * tb.y, `\n    def Shader "PrimvarReader_${Mb}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${Ub}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${Mb}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${wb.uniqueId}/PrimvarReader_${Mb}.outputs:result>\n        float inputs:rotation = ${(Eb*(180/Math.PI)).toFixed(Vb.precision)}\n        float2 inputs:scale = ${mV(tb)}\n        float2 inputs:translation = ${mV(Cb)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${bb.uniqueId}_${Mb}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${gb}.${Ob}@\n        float2 inputs:st.connect = </Root/Materials/Material_${wb.uniqueId}/Transform2d_${Mb}.outputs:result>\n        ${Hb?"float4 inputs:scale = "+function(bb){return`(${bb.r}, ${bb.g}, ${bb.b}, 1.0)`}(Hb):""}\n        token inputs:sourceColorSpace = "${bb.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${sV(bb.wrapU)}"\n        token inputs:wrapT = "${sV(bb.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${wb.needAlphaBlending()||wb.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function xV(bb, wb, Mb) {
      const eb = "\t\t\t",
        Hb = [],
        pb = [],
        {
          diffuseMap: Vb,
          diffuse: gb,
          alphaCutOff: lb,
          emissiveMap: Lb,
          emissive: Ib,
          normalMap: Ob,
          roughnessMap: Ub,
          roughnessChannel: tb,
          roughness: Cb,
          metalnessMap: Eb,
          metalnessChannel: Bb,
          metalness: sb,
          aoMap: mb,
          aoMapChannel: hb,
          aoMapIntensity: zb,
          alphaMap: Xb,
          ior: xb,
          clearCoatEnabled: jb,
          clearCoat: Kb,
          clearCoatMap: rb,
          clearCoatRoughness: Rb,
          clearCoatRoughnessMap: Db
        } = function(bb) {
          const wb = {
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
          return bb instanceof Ve.StandardMaterial ? {
            ...wb,
            diffuseMap: bb.diffuseTexture,
            diffuse: bb.diffuseColor,
            alphaCutOff: bb.alphaCutOff,
            emissiveMap: bb.emissiveTexture,
            emissive: bb.emissiveColor,
            roughness: 1,
            alphaMap: bb.opacityTexture
          } : bb instanceof Xw ? {
            ...wb,
            diffuseMap: bb._albedoTexture,
            diffuse: bb._albedoColor,
            alphaCutOff: bb._alphaCutOff,
            emissiveMap: bb._emissiveTexture,
            emissive: bb._emissiveColor,
            normalMap: bb._bumpTexture,
            roughnessMap: bb._metallicTexture,
            roughnessChannel: bb._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: bb._roughness ?? 1,
            metalnessMap: bb._metallicTexture,
            metalnessChannel: bb._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: bb._metallic ?? 0,
            aoMap: bb._ambientTexture,
            aoMapChannel: bb._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: bb._ambientTextureStrength,
            alphaMap: bb._opacityTexture,
            ior: bb.subSurface.indexOfRefraction,
            clearCoatEnabled: bb.clearCoat.isEnabled,
            clearCoat: bb.clearCoat.intensity,
            clearCoatMap: bb.clearCoat.texture,
            clearCoatRoughness: bb.clearCoat.roughness,
            clearCoatRoughnessMap: bb.clearCoat.useRoughnessFromMainTexture ? bb.clearCoat.texture : bb.clearCoat.textureRoughness
          } : wb
        }(bb);
      return null !== Vb ? (Hb.push(`${eb}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Vb.uniqueId}_diffuse.outputs:rgb>`), bb.needAlphaBlending() ? Hb.push(`${eb}float inputs:opacity.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Vb.uniqueId}_diffuse.outputs:a>`) : bb.needAlphaTesting() && (Hb.push(`${eb}float inputs:opacity.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Vb.uniqueId}_diffuse.outputs:a>`), Hb.push(`${eb}float inputs:opacityThreshold = ${lb}`)), pb.push(XV(Vb, bb, "diffuse", gb, wb, Mb))) : Hb.push(`${eb}color3f inputs:diffuseColor = ${hV(gb||Fb.Color3.White())}`), null !== Lb ? (Hb.push(`${eb}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Lb.uniqueId}_emissive.outputs:rgb>`), pb.push(XV(Lb, bb, "emissive", Ib, wb, Mb))) : Ib && Ib.toLuminance() > 0 && Hb.push(`${eb}color3f inputs:emissiveColor = ${hV(Ib)}`), null !== Ob && (Hb.push(`${eb}normal3f inputs:normal.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Ob.uniqueId}_normal.outputs:rgb>`), pb.push(XV(Ob, bb, "normal", null, wb, Mb))), null !== mb && (Hb.push(`${eb}float inputs:occlusion.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${mb.uniqueId}_occlusion.outputs:${hb}>`), pb.push(XV(mb, bb, "occlusion", new Fb.Color3(zb, zb, zb), wb, Mb))), null !== Ub ? (Hb.push(`${eb}float inputs:roughness.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Ub.uniqueId}_roughness.outputs:${tb}>`), pb.push(XV(Ub, bb, "roughness", new Fb.Color3(Cb, Cb, Cb), wb, Mb))) : Hb.push(`${eb}float inputs:roughness = ${Cb}`), null !== Eb ? (Hb.push(`${eb}float inputs:metallic.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Eb.uniqueId}_metallic.outputs:${Bb}>`), pb.push(XV(Eb, bb, "metallic", new Fb.Color3(sb, sb, sb), wb, Mb))) : Hb.push(`${eb}float inputs:metallic = ${sb}`), null !== Xb ? (Hb.push(`${eb}float inputs:opacity.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Xb.uniqueId}_opacity.outputs:r>`), Hb.push(`${eb}float inputs:opacityThreshold = 0.0001`), pb.push(XV(Xb, bb, "opacity", null, wb, Mb))) : Hb.push(`${eb}float inputs:opacity = ${bb.alpha}`), jb && (null !== rb ? (Hb.push(`${eb}float inputs:clearcoat.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${rb.uniqueId}_clearcoat.outputs:r>`), pb.push(XV(rb, bb, "clearcoat", new Fb.Color3(Kb, Kb, Kb), wb, Mb))) : Hb.push(`${eb}float inputs:clearcoat = ${Kb}`), null !== Db ? (Hb.push(`${eb}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Db.uniqueId}_clearcoatRoughness.outputs:g>`), pb.push(XV(Db, bb, "clearcoatRoughness", new Fb.Color3(Rb, Rb, Rb), wb, Mb))) : Hb.push(`${eb}float inputs:clearcoatRoughness = ${Rb}`)), Hb.push(`${eb}float inputs:ior = ${xb}`), `\n\tdef Material "Material_${bb.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Hb.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${bb.uniqueId}/PreviewSurface.outputs:surface>\n\n${pb.join("\n")}\n\n\t}\n`
    }

    function jV(bb) {
      bb.computeWorldMatrix(!0);
      const wb = bb.getWorldMatrix().clone(),
        Mb = bb.RJ().useRightHandedSystem;
      let eb = bb.material?._getEffectiveOrientation(bb) ?? bb.sideOrientation,
        Vb = !Mb,
        gb = bb.parent;
      for (; gb;) {
        if (JM(gb, Mb) && null === gb.parent) {
          Mb || (wb.multiplyToRef(gb.getWorldMatrix().invert(), wb), eb = eb === pb.b.ClockWiseSideOrientation ? pb.b.CounterClockWiseSideOrientation : pb.b.ClockWiseSideOrientation), Vb = !1;
          break
        }
        gb = gb.parent
      }
      return wb.determinant() < 0 && Hb.Tools.Warn(`Mesh ${bb.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: wb,
        windingOrder: eb === pb.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: Vb
      }
    }
    async function KV(bb, wb, Mb) {
      const pb = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...wb
      };
      "undefined" === typeof fflate && await Hb.Tools.LoadScriptAsync(pb.fflateUrl);
      const Vb = {};
      Vb[pb.modelFileName] = null;
      let gb = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      gb += function(bb) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===bb.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${bb.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${bb.planeAnchoringAlignment}"`:""}\n            `
      }(pb);
      const lb = {};
      for (const eb of bb.meshes) {
        if (0 === eb.getTotalVertices()) continue;
        const bb = eb,
          wb = bb.geometry,
          Lb = bb.material;
        if (!Lb || !wb || Mb && !Mb(bb)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(Lb.getClassName())) {
          const Mb = "geometries/Geometry_" + wb.uniqueId + ".usda",
            {
              matrix: eb,
              windingOrder: Hb,
              convertToRightHanded: Ib
            } = jV(bb);
          if (!(Mb in Vb)) {
            const bb = tV(wb, pb, Hb, Ib);
            Vb[Mb] = CV(bb)
          }
          Lb.uniqueId in lb || (lb[Lb.uniqueId] = Lb), gb += BV(bb, eb)
        } else Hb.Tools.Warn("USDZExportAsync does not support this material type: " + Lb.getClassName())
      }
      bb.activeCamera && pb.exportCamera && (gb += function(bb, wb) {
        const Mb = "Camera_" + bb.uniqueId,
          Hb = EV(eb.Matrix.RotationY(Math.PI).multiply(bb.getWorldMatrix()));
        if (bb.mode === xb.b.ORTHOGRAPHIC_CAMERA) return `def Camera "${Mb}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Hb}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${bb.minZ.toPrecision(wb.precision)}, ${bb.maxZ.toPrecision(wb.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(bb.orthoLeft||1)+Math.abs(bb.orthoRight||1))).toPrecision(wb.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(bb.orthoTop||1)+Math.abs(bb.orthoBottom||1))).toPrecision(wb.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const eb = bb.DC().getAspectRatio(bb),
            pb = wb.cameraSensorWidth || 35;
          return `def Camera "${Mb}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Hb}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${bb.minZ.toPrecision(wb.precision)}, ${bb.maxZ.toPrecision(wb.precision)})\n\t\t\tfloat focalLength = ${(pb/(2*Math.tan(.5*bb.fov))).toPrecision(wb.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(pb*eb).toPrecision(wb.precision)}\n\t\t\tfloat verticalAperture = ${(pb/eb).toPrecision(wb.precision)}            \n\t\t}\n\t\n\t`
        }
      }(bb.activeCamera, pb)), gb += "\n            }\n        }";
      const Lb = {};
      gb += function(bb, wb, Mb) {
        const eb = [];
        for (const Hb in bb) {
          const pb = bb[Hb];
          eb.push(xV(pb, wb, Mb))
        }
        return `\n    def "Materials"\n{\n${eb.join("")}\n}\n\n`
      }(lb, Lb, pb), gb += "\n    }", Vb[pb.modelFileName] = fflate.strToU8(gb);
      for (const eb in Lb) {
        const {
          texture: bb,
          ext: wb,
          mimeType: Mb
        } = Lb[eb], Hb = await sM(bb);
        if (Hb && zV(Hb.mimeType) && Hb.mimeType === Mb) Vb[`textures/Texture_${eb}.${wb}`] = new Uint8Array(Hb.data);
        else {
          const Hb = bb.getSize(),
            pb = await (0, hb.d)(bb),
            gb = await jb.DumpTools.DumpDataAsync(Hb.width, Hb.height, pb, Mb, void 0, !1, !0);
          Vb[`textures/Texture_${eb}.${wb}`] = new Uint8Array(gb).slice()
        }
      }
      let Ib = 0;
      for (const eb in Vb) {
        const bb = Vb[eb];
        if (!bb) continue;
        Ib += 34 + eb.length;
        const wb = 63 & Ib;
        if (4 !== wb) {
          const Mb = new Uint8Array(64 - wb);
          Vb[eb] = [bb, {
            extra: {
              12345: Mb
            }
          }]
        }
        Ib = bb.length
      }
      return fflate.zipSync(Vb, {
        level: 0
      })
    }
    var rV = Mb(42781);
    class RV {
      static Export(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        if (!bb || 0 === bb.bones.length) throw new Error("Invalid or empty skeleton provided");
        let eb = wb;
        wb && 0 !== wb.length || (eb = bb.animations.map((bb => bb.name)));
        let Hb = null;
        for (const Lb of eb) {
          const wb = bb.getAnimationRange(Lb);
          wb && (Hb = Hb ? new rV.c("animation-range", Math.min(Hb.from, wb.from), Math.max(Hb.to, wb.to)) : wb)
        }
        if (!Hb && (bb.animations.length > 0 && (Hb = bb.getAnimationRange(bb.animations[0].name)), !Hb)) throw new Error("No animation range found in skeleton");
        const pb = Mb || 1 / (bb.animations[0]?.framePerSecond || 30),
          Vb = this._BuildBoneHierarchy(bb, eb);
        let gb = 0;
        for (const Lb of Vb) Lb.positionKeys.length > 0 && (gb = Math.max(gb, Lb.positionKeys.length)), Lb.rotationKeys.length > 0 && (gb = Math.max(gb, Lb.rotationKeys.length));
        0 === gb && (gb = Math.floor((Hb.to - Hb.from) / pb) + 1);
        let lb = "";
        return lb += "HIERARCHY\n", lb += this._ExportHierarchy(Vb, 0), lb += "MOTION\n", lb += `Frames: ${gb}\n`, lb += `Frame Time: ${pb.toFixed(6)}\n`, lb += this._ExportMotionData(Vb, gb, 0, eb), lb
      }
      static _BuildBoneHierarchy(bb, wb) {
        const Mb = new Map,
          eb = [];
        for (const Hb of bb.bones) {
          const bb = {
            bone: Hb,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          Mb.set(Hb, bb)
        }
        for (const Hb of bb.bones) {
          const bb = Mb.get(Hb);
          if (Hb.animations.length > 0)
            for (const Mb of Hb.animations) wb.includes(Mb.name) && ("position" === Mb.targetProperty ? (bb.hasPositionChannels = !0, bb.positionKeys.push(...Mb.getKeys())) : "rotationQuaternion" === Mb.targetProperty && (bb.hasRotationChannels = !0, bb.rotationKeys.push(...Mb.getKeys())));
          if (Hb.getParent()) {
            const wb = Mb.get(Hb.getParent());
            wb && wb.children.push(bb)
          } else eb.push(bb)
        }
        return eb
      }
      static _ExportHierarchy(bb, wb) {
        let Mb = "";
        const eb = "    ".repeat(wb);
        for (const Hb of bb) {
          const bb = Hb.bone;
          if (this._IsEndSite(Hb)) {
            Mb += `${eb}End Site\n`, Mb += `${eb}{\n`;
            const wb = this._GetBoneOffset(bb);
            Mb += `${eb}    OFFSET ${wb.x.toFixed(6)} ${wb.y.toFixed(6)} ${wb.z.toFixed(6)}\n`, Mb += `${eb}}\n`
          } else {
            Mb += `${0===wb?"ROOT":`${eb}JOINT`} ${bb.name}\n`, Mb += `${eb}{\n`;
            const pb = this._GetBoneOffset(bb);
            Mb += `${eb}    OFFSET ${pb.x.toFixed(6)} ${pb.y.toFixed(6)} ${pb.z.toFixed(6)}\n`;
            const Vb = [];
            Hb.hasPositionChannels && Vb.push("Xposition", "Yposition", "Zposition"), Hb.hasRotationChannels && Vb.push("Zrotation", "Xrotation", "Yrotation"), Vb.length > 0 && (Mb += `${eb}    CHANNELS ${Vb.length} ${Vb.join(" ")}\n`), Hb.children.length > 0 && (Mb += this._ExportHierarchy(Hb.children, wb + 1)), Mb += `${eb}}\n`
          }
        }
        return Mb
      }
      static _IsEndSite(bb) {
        return 0 === bb.children.length
      }
      static _GetBoneOffset(bb) {
        try {
          if (!bb.getParent()) return bb.getRestMatrix().getTranslation();
          return bb.getLocalMatrix().getTranslation()
        } catch (wb) {
          return eb.YC.Zero()
        }
      }
      static _ExportMotionData(bb, wb, Mb, eb) {
        let Hb = "";
        for (let pb = 0; pb < wb; pb++) {
          const wb = [];
          this._CollectFrameValues(bb, pb + Mb, wb, eb), Hb += wb.map((bb => bb.toFixed(6))).join(" ") + "\n"
        }
        return Hb
      }
      static _CollectFrameValues(bb, wb, Mb, eb) {
        for (const Hb of bb)
          if (!this._IsEndSite(Hb)) {
            if (Hb.hasPositionChannels) {
              const bb = this._GetPositionAtFrameIndex(Hb.positionKeys, wb);
              Mb.push(bb.x, bb.y, bb.z)
            }
            if (Hb.hasRotationChannels) {
              const bb = this._GetRotationAtFrameIndex(Hb.rotationKeys, wb),
                eb = this._QuaternionToEuler(bb);
              Mb.push(eb.z, eb.x, eb.y)
            }
            Hb.children.length > 0 && this._CollectFrameValues(Hb.children, wb, Mb, eb)
          }
      }
      static _GetPositionAtFrameIndex(bb, wb) {
        if (0 === bb.length) return eb.YC.Zero();
        return bb[Math.max(0, Math.min(wb, bb.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(bb, wb) {
        if (0 === bb.length) return eb.Quaternion.Identity();
        return bb[Math.max(0, Math.min(wb, bb.length - 1))].value.clone()
      }
      static _QuaternionToEuler(bb) {
        const wb = new eb.Matrix;
        bb.toRotationMatrix(wb);
        const Mb = wb.m;
        let pb, Vb, gb;
        const lb = Math.sqrt(Mb[0] * Mb[0] + Mb[1] * Mb[1]);
        return lb > AM.e ? (pb = Math.atan2(Mb[6], Mb[10]), Vb = Math.atan2(-Mb[2], lb), gb = Math.atan2(Mb[1], Mb[0])) : (pb = Math.atan2(-Mb[9], Mb[5]), Vb = Math.atan2(-Mb[2], lb), gb = 0), new eb.YC(Hb.Tools.ToDegrees(pb), Hb.Tools.ToDegrees(Vb), Hb.Tools.ToDegrees(gb))
      }
    }

    function DV(bb) {
      return "string" === typeof bb?.name
    }
    const cV = Symbol("__xml:meta$__"),
      YV = Symbol("__xml:name$__");

    function ZV(bb, wb) {
      Object.prototype.hasOwnProperty.call(bb.metadata, cV) || (bb.metadata[cV] = []), bb.metadata[cV].push(wb)
    }

    function fV(bb) {
      return (wb, Mb) => {
        wb[YV] = bb
      }
    }

    function AV() {
      return (bb, wb) => ZV(wb, {
        kind: "none",
        prop: String(wb.name),
        ignore: !0
      })
    }

    function WV(bb) {
      return (wb, Mb) => ZV(Mb, {
        kind: "attr",
        prop: String(Mb.name),
        ...bb
      })
    }

    function JV(bb) {
      return (wb, Mb) => ZV(Mb, {
        kind: "elem",
        prop: String(Mb.name),
        ...bb
      })
    }

    function SV(bb) {
      const wb = "function" === typeof bb ? bb : bb?.constructor,
        Mb = wb?.[Symbol.metadata];
      if (!Mb) return [];
      const eb = [];
      let Hb = Mb;
      for (; Hb;) Object.prototype.hasOwnProperty.call(Hb, cV) && eb.push(...Hb[cV]), Hb = Object.getPrototypeOf(Hb);
      return eb
    }

    function NV(bb) {
      const wb = bb?.constructor?.[YV];
      return wb || void 0
    }

    function vV(bb) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(bb)
    }

    function QV(bb) {
      if (DV(bb)) return bb;
      const wb = (bb ?? "").trim();
      if (!wb) return {
        name: ""
      };
      const Mb = wb.indexOf(":");
      if (-1 === Mb) return {
        name: wb
      };
      if (-1 !== wb.indexOf(":", Mb + 1)) return {
        name: wb
      };
      const eb = wb.slice(0, Mb),
        Hb = wb.slice(Mb + 1);
      return vV(eb) && vV(Hb) ? {
        ns: eb,
        name: Hb
      } : {
        name: wb
      }
    }

    function GV(bb, wb) {
      return wb ? `${wb}:${bb}` : bb
    }
    const qV = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      aV = Object.freeze({
        number: qV
      });

    function iV(bb) {
      const wb = bb?.eps ?? qV.eps;
      return {
        eps: wb,
        maxDecimalsCap: bb?.maxDecimalsCap ?? qV.maxDecimalsCap,
        trimTrailingZeros: bb?.trimTrailingZeros ?? qV.trimTrailingZeros,
        fixedDecimals: bb?.fixedDecimals,
        allowScientific: bb?.allowScientific ?? qV.allowScientific,
        snapNearZero: bb?.snapNearZero ?? qV.snapNearZero,
        zeroThreshold: bb?.zeroThreshold ?? wb,
        perAttributeEps: bb?.perAttributeEps
      }
    }

    function uV(bb) {
      return {
        number: iV(bb?.number)
      }
    }
    class dV {
      constructor(bb) {
        if (this.o = bb, this._o = bb.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(bb) {
        if (!Number.isFinite(bb)) throw new Error(`Cannot format non-finite number: ${bb}`);
        const wb = this._o,
          Mb = this._clampInt(wb.maxDecimalsCap ?? 15, 0, 20),
          eb = wb.trimTrailingZeros ?? !0,
          Hb = wb.snapNearZero ?? !0,
          pb = wb.zeroThreshold ?? wb.eps,
          Vb = 1 / wb.eps;
        let gb, lb = Math.round(bb * Vb) / Vb;
        if (Object.is(lb, -0) && (lb = 0), Hb && Math.abs(lb) <= pb && (lb = 0), gb = void 0 !== wb.fixedDecimals ? this._clampInt(wb.fixedDecimals, 0, Mb) : this._clampInt(Math.ceil(-Math.log10(wb.eps)), 0, Mb), wb.allowScientific, 0 === gb) return String(Math.trunc(lb));
        let Lb = lb.toFixed(gb);
        if (eb && void 0 === wb.fixedDecimals && (Lb = Lb.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Lb)) throw new Error(`Scientific notation not allowed in XML output: ${Lb}`);
        return Lb
      }
      _clampInt(bb, wb, Mb) {
        return Number.isFinite(bb) ? (bb = Math.trunc(bb), Math.max(wb, Math.min(Mb, bb))) : wb
      }
    }

    function PV(bb) {
      return bb instanceof Date
    }

    function nV(bb) {
      return "string" === typeof bb
    }

    function yV(bb) {
      return "string" === typeof bb || "number" === typeof bb || "boolean" === typeof bb || "bigint" === typeof bb || PV(bb)
    }

    function oV(bb) {
      return "number" === typeof bb || "boolean" === typeof bb || "bigint" === typeof bb || PV(bb)
    }
    class TV {
      constructor(bb, wb) {
        this._ns = new Map, this._prefixCount = 0, this._builder = bb, this._format = uV(wb), this._nFmt = new dV(this._format)
      }
      withNamespace() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        for (const eb of wb) this._assignNamespace(eb);
        return this
      }
      serialize(bb, wb) {
        if (!(wb = wb ?? NV(bb))) throw new Error("can not find name for given object");
        const Mb = QV(wb);
        Mb.ns && this._assignNamespace(Mb.ns, "xmlns"), this._gatherNamespaces(bb, new WeakSet);
        const eb = this._builder.ele(null, Mb.name);
        for (const [Hb, pb] of Array.from(this._ns.entries())) eb.att("xmlns", pb, Hb);
        this._writeObjectContent(eb, bb, (new WeakSet).add(bb)), this._builder.end()
      }
      _writeObject(bb, wb, Mb) {
        if (Mb.has(wb)) return;
        if (Mb.add(wb), Array.isArray(wb)) {
          for (const eb of wb) oV(eb) || (nV(eb) ? this._builder.text(eb) : this._writeObject(bb, eb, Mb));
          return
        }
        const eb = NV(wb);
        if (!eb) return;
        const Hb = QV(eb),
          pb = this._getPrefix(Hb),
          Vb = GV(Hb.name, pb);
        bb.ele(null, Vb), this._writeObjectContent(bb, wb, Mb), this._builder.end()
      }
      _getPrefix(bb) {
        if (bb.ns) {
          const wb = this._ns.get(bb.ns.toLowerCase());
          if ("xmlns" !== wb) return wb
        }
      }
      _writeObjectContent(bb, wb, Mb) {
        const eb = SV(wb) ?? [],
          Hb = new Map;
        for (const Vb of eb) {
          const bb = Hb.get(Vb.prop) ?? [];
          bb.push(Vb), Hb.set(Vb.prop, bb)
        }
        const pb = Object.keys(wb).sort(((bb, wb) => {
          const Mb = (Hb.get(bb) ?? []).some((bb => "attr" === bb.kind));
          return Mb === (Hb.get(wb) ?? []).some((bb => "attr" === bb.kind)) ? 0 : Mb ? -1 : 1
        }));
        for (const Vb of pb) {
          const eb = wb[Vb];
          if (null === eb || void 0 === eb) continue;
          const pb = Hb.get(Vb);
          if (pb) {
            if (pb.some((bb => !0 === bb.ignore || "none" === bb.kind))) continue;
            for (const wb of pb) {
              const Mb = wb.name ?? wb.prop.toLowerCase();
              if (Mb) switch (wb.kind) {
                case "attr": {
                  let Hb = null;
                  if ("number" === typeof eb && this._nFmt && (Hb = this._nFmt.toString(eb)), wb.formatter) {
                    Hb = new wb.formatter(this._format).toString(eb)
                  }
                  if (Hb = Hb ?? eb.toString(), Hb) {
                    const wb = QV(Mb),
                      eb = this._getPrefix(wb),
                      pb = GV(wb.name, eb);
                    bb.att(null, pb, Hb)
                  }
                  break
                }
              }
            }
          } else oV(eb) || (nV(eb) ? this._builder.text(eb) : this._writeObject(bb, eb, Mb))
        }
      }
      _gatherNamespaces(bb, wb) {
        if (wb.has(bb)) return;
        if (wb.add(bb), Array.isArray(bb)) {
          for (const Mb of bb) yV(Mb) || this._gatherNamespaces(Mb, wb);
          return
        }
        const Mb = NV(bb);
        Mb && this._assignNamespace(Mb);
        const eb = SV(bb) ?? [],
          Hb = new Map;
        for (const Vb of eb) {
          const bb = Hb.get(Vb.prop) ?? [];
          bb.push(Vb), Hb.set(Vb.prop, bb)
        }
        const pb = [];
        for (const Vb of Object.keys(bb)) {
          const wb = bb[Vb];
          if (null === wb || void 0 === wb) continue;
          const Mb = Hb.get(Vb);
          if (Mb) {
            if (Mb.some((bb => !0 === bb.ignore || "none" === bb.kind))) continue;
            for (const bb of Mb) bb.name && this._assignNamespace(bb.name)
          }
          pb.push(wb)
        }
        for (const Vb of pb) yV(Vb) || this._gatherNamespaces(Vb, wb)
      }
      _assignNamespace(bb, wb) {
        const Mb = QV(bb);
        if (Mb?.ns) {
          const bb = Mb.ns.toLowerCase();
          this._ns.get(bb) || this._ns.set(bb, wb ?? this._buildNsPrefix(bb))
        } else if ("xmlns" === wb) {
          const bb = Mb.name.toLowerCase();
          this._ns.get(bb) || this._ns.set(bb, wb ?? this._buildNsPrefix(bb))
        }
      }
      _buildNsPrefix(bb) {
        let wb, Mb = !1;
        do {
          wb = "ns" + this._prefixCount++;
          for (const bb of Array.from(this._ns.values()))
            if (bb === wb) {
              Mb = !0;
              break
            }
        } while (Mb);
        return wb
      }
    }
    class kV {}
    var bg;
    kV.OpenTag = "<", kV.CloseTag = ">", kV.Slash = "/", kV.Question = "?", kV.Quote = '"', kV.Equal = "=", kV.Space = " ", kV.Semicolon = ":", kV.Dec = "<?xml", kV.Xml = "xml", kV.Xmlns = "xmlns", kV.Xsi = "xsi", kV.VersionKeyword = "version", kV.EncodingKeyword = "encoding", kV.StandaloneKeyword = "standalone",
      function(bb) {
        bb[bb.Declaration = 0] = "Declaration", bb[bb.Tag = 1] = "Tag", bb[bb.Attribute = 2] = "Attribute", bb[bb.Text = 3] = "Text"
      }(bg || (bg = {}));
    class wg {
      constructor(bb) {
        this._ctxStack = [], this._d = 0, this._w = bb
      }
      dec(bb, wb, Mb) {
        return this._w.write(kV.Dec), this._writeAttStr(kV.VersionKeyword, bb), wb && this._writeAttStr(kV.EncodingKeyword, wb), void 0 !== Mb && this._writeAttStr(kV.StandaloneKeyword, Mb ? "yes" : "no"), this._w.write(kV.Question, kV.CloseTag), this
      }
      att(bb, wb, Mb) {
        const eb = this._peekContext();
        if (!eb) throw new Error("att() without open element");
        if (eb.closed) throw new Error(`att() after start tag closed for <${eb.name}>`);
        if (this._isXmlnsDecl(bb, wb)) {
          if (wb === kV.Xmlns) eb.defaultNs = Mb, this._registerNamespace(eb, "", Mb), this._writeAttStr(kV.Xmlns, Mb);
          else if (bb) this._registerNamespace(eb, wb, Mb), this._writeAttStr(`${bb}:${wb}`, Mb);
          else {
            const bb = wb.slice(6);
            this._registerNamespace(eb, bb, Mb), this._writeAttStr(wb, Mb)
          }
          return eb.lastToken = bg.Attribute, this
        }
        let Hb = wb;
        if (bb) {
          Hb = `${this._ensurePrefixDeclared(eb,bb)}:${wb}`
        }
        return eb.lastToken = bg.Attribute, this._writeAttStr(Hb, Mb), this
      }
      ele(bb, wb) {
        const Mb = this._peekContext();
        Mb && this._closeOpenTagIfNeeded(Mb);
        let eb = wb;
        if (bb) {
          eb = `${this._lookupPrefix(bb)??bb}:${wb}`
        }
        return this._pushContext(eb, ++this._d), this._w.write(kV.OpenTag, eb), this
      }
      text(bb) {
        const wb = this._peekContext();
        if (!wb) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(wb), wb.lastToken = bg.Text, this._w.write(this._escText(bb)), this
      }
      end() {
        const bb = this._popContext();
        return bb && (this._d--, bb.closed ? this._w.write(kV.OpenTag, kV.Slash, bb.name, kV.CloseTag) : this._w.write(kV.Slash, kV.CloseTag)), this
      }
      _pushContext(bb, wb) {
        const Mb = new wg.Context(bb, wb);
        return this._ctxStack.push(Mb), Mb
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
      _writeAttStr(bb, wb) {
        this._w.write(kV.Space, bb, kV.Equal, kV.Quote, this._escAttr(wb), kV.Quote)
      }
      _lookupPrefix(bb) {
        let wb = this._ctxStack.length - 1;
        if (wb >= 0)
          do {
            const Mb = this._ctxStack[wb--],
              eb = Mb.ns2prefix?.get(bb);
            if (eb) return eb
          } while (wb >= 0)
      }
      _escText(bb) {
        return bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(bb) {
        return this._escText(bb).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(bb, wb) {
        if (bb) return bb === kV.Xmlns;
        const Mb = wb.length,
          eb = kV.Xmlns.length;
        return Mb >= eb && (wb.startsWith(kV.Xmlns) && (wb.length == eb || wb[eb] == kV.Semicolon))
      }
      _registerNamespace(bb, wb, Mb) {
        if (wb === kV.Xml || wb === kV.Xmlns) throw new Error(`reserved prefix '${wb}'`);
        const eb = bb.prefix2ns.get(wb);
        if (eb && eb !== Mb) throw new Error(`prefix '${wb}' already bound to a different namespace`);
        bb.ns2prefix.get(Mb) || bb.ns2prefix.set(Mb, wb), bb.prefix2ns.set(wb, Mb)
      }
      _allocPrefix(bb) {
        let wb = 1;
        for (;;) {
          const Mb = "ns" + wb++;
          if (!bb.prefix2ns.has(Mb)) return Mb
        }
      }
      _ensurePrefixDeclared(bb, wb) {
        const Mb = this._lookupPrefix(wb);
        if (Mb) return Mb;
        if (bb.closed) throw new Error(`can not declare namespace after start tag closed for <${bb.name}>`);
        const eb = this._allocPrefix(bb);
        return this._writeAttStr(`${kV.Xmlns}:${eb}`, wb), this._registerNamespace(bb, eb, wb), eb
      }
      _closeOpenTagIfNeeded(bb) {
        bb.closed || (this._w.write(kV.CloseTag), bb.closed = !0)
      }
    }
    wg.Context = class {
      constructor(bb, wb) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = bb, this.depth = wb
      }
    };
    class Mg {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        if (0 === wb.length) return this;
        const eb = wb.join("");
        return this._chunks.push(eb), this.count += eb.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class eg {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = bb, this._opts = wb, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        if (0 === wb.length) return this;
        const eb = wb.join("");
        if (0 === eb.length) return this;
        this._pending += eb, this._pendingChars += eb.length;
        const Hb = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Hb && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const bb = this._encoder.encode(this._pending);
        return this._sink.push(bb), this.count += bb.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const Hg = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      pg = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Vg, gg;
    ! function(bb) {
      bb.micron = "micron", bb.millimeter = "millimeter", bb.centimeter = "centimeter", bb.inch = "inch", bb.foot = "foot", bb.meter = "meter"
    }(Vg || (Vg = {})),
    function(bb) {
      bb.model = "model", bb.solidsupport = "solidsupport", bb.support = "support", bb.surface = "surface", bb.other = "other"
    }(gg || (gg = {}));
    const lg = "http://schemas.openxmlformats.org/package/2006/content-types",
      Lg = "http://schemas.openxmlformats.org/package/2006/relationships";
    var Ig;
    ! function(bb) {
      bb.Relationships = "application/vnd.openxmlformats-package.relationships+xml", bb.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", bb.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", bb.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", bb.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", bb.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", bb.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", bb.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", bb.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", bb.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", bb.Png = "image/png", bb.Jpeg = "image/jpeg", bb.Tiff = "image/tiff", bb.Xml = "application/xml"
    }(Ig || (Ig = {}));
    const Og = "_rels/",
      Ug = "3D/",
      tg = "3dmodel.model",
      Cg = ".rels",
      Eg = "[Content_Types].xml";
    class Fg {
      static IsKnown(bb) {
        return Fg.Known.has(bb)
      }
      static IsThreeDimModel(bb) {
        return bb === Fg.ThreeDimModel
      }
    }
    Fg.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", Fg.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", Fg.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", Fg.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", Fg.Known = new Set([Fg.ThreeDimModel, Fg.Thumbnail, Fg.PrintTicket, Fg.MustPreserve]);
    let Bg = (() => {
        let bb, wb, Mb = [fV({
            ns: lg,
            name: "Types"
          })],
          eb = [];
        wb = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Kb.n)(wb, "ThreeMfContentTypes"), (() => {
          const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Kb.i)(null, bb = {
            value: wb
          }, Mb, {
            kind: "class",
            name: wb.name,
            metadata: Hb
          }, null, eb), wb = bb.value, Hb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Hb
          }), (0, Kb.m)(wb, eb)
        })(), wb
      })(),
      sg = (() => {
        let bb, wb, Mb, eb, Hb = [fV({
            ns: lg,
            name: "Default"
          })],
          pb = [],
          Vb = [],
          gb = [],
          lb = [],
          Lb = [];
        wb = class {
          constructor(bb, wb) {
            this.ext = (0, Kb.m)(this, Vb, void 0), this.ct = ((0, Kb.m)(this, gb), (0, Kb.m)(this, lb, void 0)), (0, Kb.m)(this, Lb), this.ext = bb, this.ct = wb
          }
        };
        return (0, Kb.n)(wb, "ThreeMfContentType"), (() => {
          const Ib = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Mb = [WV({
            name: {
              ns: lg,
              name: "Extension"
            }
          })], eb = [WV({
            name: {
              ns: lg,
              name: "ContentType"
            }
          })], (0, Kb.i)(null, null, Mb, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: bb => "ext" in bb,
              get: bb => bb.ext,
              set: (bb, wb) => {
                bb.ext = wb
              }
            },
            metadata: Ib
          }, Vb, gb), (0, Kb.i)(null, null, eb, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: bb => "ct" in bb,
              get: bb => bb.ct,
              set: (bb, wb) => {
                bb.ct = wb
              }
            },
            metadata: Ib
          }, lb, Lb), (0, Kb.i)(null, bb = {
            value: wb
          }, Hb, {
            kind: "class",
            name: wb.name,
            metadata: Ib
          }, null, pb), wb = bb.value, Ib && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ib
          }), (0, Kb.m)(wb, pb)
        })(), wb
      })(),
      mg = (() => {
        let bb, wb, Mb = [fV({
            ns: Lg,
            name: "Relationships"
          })],
          eb = [];
        wb = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Kb.n)(wb, "ThreeMfRelationships"), (() => {
          const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Kb.i)(null, bb = {
            value: wb
          }, Mb, {
            kind: "class",
            name: wb.name,
            metadata: Hb
          }, null, eb), wb = bb.value, Hb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Hb
          }), (0, Kb.m)(wb, eb)
        })(), wb
      })(),
      hg = (() => {
        let bb, wb, Mb, eb, Hb, pb = [fV({
            ns: Lg,
            name: "Relationship"
          })],
          Vb = [],
          gb = [],
          lb = [],
          Lb = [],
          Ib = [],
          Ob = [],
          Ub = [];
        wb = class {
          constructor(bb, wb, Mb) {
            this.id = (0, Kb.m)(this, gb, void 0), this.type = ((0, Kb.m)(this, lb), (0, Kb.m)(this, Lb, void 0)), this.target = ((0, Kb.m)(this, Ib), (0, Kb.m)(this, Ob, void 0)), (0, Kb.m)(this, Ub), this.id = bb, this.type = wb, this.target = Mb
          }
        };
        return (0, Kb.n)(wb, "ThreeMfRelationship"), (() => {
          const tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Mb = [WV({
            name: "Id"
          })], eb = [WV({
            name: "Type"
          })], Hb = [WV({
            name: "Target"
          })], (0, Kb.i)(null, null, Mb, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: bb => "id" in bb,
              get: bb => bb.id,
              set: (bb, wb) => {
                bb.id = wb
              }
            },
            metadata: tb
          }, gb, lb), (0, Kb.i)(null, null, eb, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: bb => "type" in bb,
              get: bb => bb.type,
              set: (bb, wb) => {
                bb.type = wb
              }
            },
            metadata: tb
          }, Lb, Ib), (0, Kb.i)(null, null, Hb, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: bb => "target" in bb,
              get: bb => bb.target,
              set: (bb, wb) => {
                bb.target = wb
              }
            },
            metadata: tb
          }, Ob, Ub), (0, Kb.i)(null, bb = {
            value: wb
          }, pb, {
            kind: "class",
            name: wb.name,
            metadata: tb
          }, null, Vb), wb = bb.value, tb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tb
          }), (0, Kb.m)(wb, Vb)
        })(), wb
      })();
    class zg {
      constructor(bb, wb, Mb) {
        this.contentTypes = bb, this.relationships = wb, this.model = Mb
      }
    }
    class Xg {
      static Zero() {
        return new Xg([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(bb) {
        this.values = bb
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class xg {
      constructor(bb) {
        this.o = bb, this._f = new dV(bb)
      }
      toString(bb) {
        return bb.values.map((bb => this._f.toString(bb))).join(" ")
      }
    }
    let jg = (() => {
        let bb, wb, Mb, eb, Hb, pb = [fV({
            ns: Hg,
            name: "model"
          })],
          Vb = [],
          gb = [],
          lb = [],
          Lb = [],
          Ib = [],
          Ob = [],
          Ub = [];
        wb = class {
          constructor() {
            this.unit = (0, Kb.m)(this, gb, Vg.millimeter), this.requiredextensions = ((0, Kb.m)(this, lb), (0, Kb.m)(this, Lb, void 0)), this.recommendedextensions = ((0, Kb.m)(this, Ib), (0, Kb.m)(this, Ob, void 0)), this.metadata = (0, Kb.m)(this, Ub)
          }
        };
        return (0, Kb.n)(wb, "ThreeMfModel"), (() => {
          const tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Mb = [WV({
            name: "unit"
          })], eb = [WV({
            name: "requiredextensions"
          })], Hb = [WV({
            name: "recommendedextensions"
          })], (0, Kb.i)(null, null, Mb, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: bb => "unit" in bb,
              get: bb => bb.unit,
              set: (bb, wb) => {
                bb.unit = wb
              }
            },
            metadata: tb
          }, gb, lb), (0, Kb.i)(null, null, eb, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: bb => "requiredextensions" in bb,
              get: bb => bb.requiredextensions,
              set: (bb, wb) => {
                bb.requiredextensions = wb
              }
            },
            metadata: tb
          }, Lb, Ib), (0, Kb.i)(null, null, Hb, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: bb => "recommendedextensions" in bb,
              get: bb => bb.recommendedextensions,
              set: (bb, wb) => {
                bb.recommendedextensions = wb
              }
            },
            metadata: tb
          }, Ob, Ub), (0, Kb.i)(null, bb = {
            value: wb
          }, pb, {
            kind: "class",
            name: wb.name,
            metadata: tb
          }, null, Vb), wb = bb.value, tb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tb
          })
        })(), wb.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, Kb.m)(wb, Vb), wb
      })(),
      Kg = (() => {
        let bb, wb, Mb, eb, Hb, pb = [fV({
            ns: Hg,
            name: "meta"
          })],
          Vb = [],
          gb = [],
          lb = [],
          Lb = [],
          Ib = [],
          Ob = [],
          Ub = [];
        wb = class {
          constructor(bb, wb, Mb, eb) {
            this.name = (0, Kb.m)(this, gb, void 0), this.preserve = ((0, Kb.m)(this, lb), (0, Kb.m)(this, Lb, void 0)), this.type = ((0, Kb.m)(this, Ib), (0, Kb.m)(this, Ob, void 0)), this.value = (0, Kb.m)(this, Ub), this.name = bb, this.value = wb, this.preserve = Mb, this.type = eb
          }
        };
        return (0, Kb.n)(wb, "ThreeMfMeta"), (() => {
          const tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Mb = [WV({
            name: "name"
          })], eb = [WV({
            name: "preserve"
          })], Hb = [WV({
            name: "type"
          })], (0, Kb.i)(null, null, Mb, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, wb) => {
                bb.name = wb
              }
            },
            metadata: tb
          }, gb, lb), (0, Kb.i)(null, null, eb, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: bb => "preserve" in bb,
              get: bb => bb.preserve,
              set: (bb, wb) => {
                bb.preserve = wb
              }
            },
            metadata: tb
          }, Lb, Ib), (0, Kb.i)(null, null, Hb, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: bb => "type" in bb,
              get: bb => bb.type,
              set: (bb, wb) => {
                bb.type = wb
              }
            },
            metadata: tb
          }, Ob, Ub), (0, Kb.i)(null, bb = {
            value: wb
          }, pb, {
            kind: "class",
            name: wb.name,
            metadata: tb
          }, null, Vb), wb = bb.value, tb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tb
          }), (0, Kb.m)(wb, Vb)
        })(), wb
      })(),
      rg = (() => {
        let bb, wb, Mb = [fV({
            ns: Hg,
            name: "metadatagroup"
          })],
          eb = [];
        wb = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, Kb.n)(wb, "ThreeMfMetadataGroup"), (() => {
          const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Kb.i)(null, bb = {
            value: wb
          }, Mb, {
            kind: "class",
            name: wb.name,
            metadata: Hb
          }, null, eb), wb = bb.value, Hb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Hb
          }), (0, Kb.m)(wb, eb)
        })(), wb
      })(),
      Rg = (() => {
        let bb, wb, Mb = [fV({
            ns: Hg,
            name: "resources"
          })],
          eb = [];
        wb = class {
          constructor() {
            this.object = []
          }
        };
        return (0, Kb.n)(wb, "ThreeMfResources"), (() => {
          const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Kb.i)(null, bb = {
            value: wb
          }, Mb, {
            kind: "class",
            name: wb.name,
            metadata: Hb
          }, null, eb), wb = bb.value, Hb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Hb
          }), (0, Kb.m)(wb, eb)
        })(), wb
      })(),
      Dg = (() => {
        let bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb = [fV({
            ns: Hg,
            name: "object"
          })],
          Ib = [],
          Ob = [],
          Ub = [],
          tb = [],
          Cb = [],
          Eb = [],
          Fb = [],
          Bb = [],
          sb = [],
          mb = [],
          hb = [],
          zb = [],
          Xb = [],
          xb = [],
          jb = [];
        wb = class {
          constructor(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gg.model;
            this.id = (0, Kb.m)(this, Ob, void 0), this.type = ((0, Kb.m)(this, Ub), (0, Kb.m)(this, tb, void 0)), this.thumbnail = ((0, Kb.m)(this, Cb), (0, Kb.m)(this, Eb, void 0)), this.partnumber = ((0, Kb.m)(this, Fb), (0, Kb.m)(this, Bb, void 0)), this.name = ((0, Kb.m)(this, sb), (0, Kb.m)(this, mb, void 0)), this.pid = ((0, Kb.m)(this, hb), (0, Kb.m)(this, zb, void 0)), this.pindex = ((0, Kb.m)(this, Xb), (0, Kb.m)(this, xb, void 0)), this.metadatagroup = (0, Kb.m)(this, jb), this.id = bb, this.type = wb
          }
        };
        return (0, Kb.n)(wb, "ThreeMfObject"), (() => {
          const rb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Mb = [WV({
            name: "id"
          })], eb = [WV({
            name: "type"
          })], Hb = [WV({
            name: "thumbnail"
          })], pb = [WV({
            name: "partnumber"
          })], Vb = [WV({
            name: "name"
          })], gb = [WV({
            name: "pid"
          })], lb = [WV({
            name: "pindex"
          })], (0, Kb.i)(null, null, Mb, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: bb => "id" in bb,
              get: bb => bb.id,
              set: (bb, wb) => {
                bb.id = wb
              }
            },
            metadata: rb
          }, Ob, Ub), (0, Kb.i)(null, null, eb, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: bb => "type" in bb,
              get: bb => bb.type,
              set: (bb, wb) => {
                bb.type = wb
              }
            },
            metadata: rb
          }, tb, Cb), (0, Kb.i)(null, null, Hb, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: bb => "thumbnail" in bb,
              get: bb => bb.thumbnail,
              set: (bb, wb) => {
                bb.thumbnail = wb
              }
            },
            metadata: rb
          }, Eb, Fb), (0, Kb.i)(null, null, pb, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: bb => "partnumber" in bb,
              get: bb => bb.partnumber,
              set: (bb, wb) => {
                bb.partnumber = wb
              }
            },
            metadata: rb
          }, Bb, sb), (0, Kb.i)(null, null, Vb, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, wb) => {
                bb.name = wb
              }
            },
            metadata: rb
          }, mb, hb), (0, Kb.i)(null, null, gb, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: bb => "pid" in bb,
              get: bb => bb.pid,
              set: (bb, wb) => {
                bb.pid = wb
              }
            },
            metadata: rb
          }, zb, Xb), (0, Kb.i)(null, null, lb, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: bb => "pindex" in bb,
              get: bb => bb.pindex,
              set: (bb, wb) => {
                bb.pindex = wb
              }
            },
            metadata: rb
          }, xb, jb), (0, Kb.i)(null, bb = {
            value: wb
          }, Lb, {
            kind: "class",
            name: wb.name,
            metadata: rb
          }, null, Ib), wb = bb.value, rb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rb
          }), (0, Kb.m)(wb, Ib)
        })(), wb
      })(),
      cg = (() => {
        let bb, wb, Mb = [fV({
            ns: Hg,
            name: "mesh"
          })],
          eb = [];
        wb = class {
          constructor(bb, wb) {
            this.vertices = bb ?? new Yg, this.triangles = wb ?? new fg
          }
        };
        return (0, Kb.n)(wb, "ThreeMfMesh"), (() => {
          const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Kb.i)(null, bb = {
            value: wb
          }, Mb, {
            kind: "class",
            name: wb.name,
            metadata: Hb
          }, null, eb), wb = bb.value, Hb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Hb
          }), (0, Kb.m)(wb, eb)
        })(), wb
      })(),
      Yg = (() => {
        let bb, wb, Mb = [fV({
            ns: Hg,
            name: "vertices"
          })],
          eb = [];
        wb = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, Kb.n)(wb, "ThreeMfVertices"), (() => {
          const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Kb.i)(null, bb = {
            value: wb
          }, Mb, {
            kind: "class",
            name: wb.name,
            metadata: Hb
          }, null, eb), wb = bb.value, Hb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Hb
          }), (0, Kb.m)(wb, eb)
        })(), wb
      })(),
      Zg = (() => {
        let bb, wb, Mb, eb, Hb, pb = [fV({
            ns: Hg,
            name: "vertex"
          })],
          Vb = [],
          gb = [],
          lb = [],
          Lb = [],
          Ib = [],
          Ob = [],
          Ub = [];
        wb = class {
          constructor() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, Kb.m)(this, gb, void 0), this.y = ((0, Kb.m)(this, lb), (0, Kb.m)(this, Lb, void 0)), this.z = ((0, Kb.m)(this, Ib), (0, Kb.m)(this, Ob, void 0)), (0, Kb.m)(this, Ub), this.x = bb, this.y = wb, this.z = Mb
          }
        };
        return (0, Kb.n)(wb, "ThreeMfVertex"), (() => {
          const tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Mb = [WV({
            name: "x"
          })], eb = [WV({
            name: "y"
          })], Hb = [WV({
            name: "z"
          })], (0, Kb.i)(null, null, Mb, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: bb => "x" in bb,
              get: bb => bb.x,
              set: (bb, wb) => {
                bb.x = wb
              }
            },
            metadata: tb
          }, gb, lb), (0, Kb.i)(null, null, eb, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: bb => "y" in bb,
              get: bb => bb.y,
              set: (bb, wb) => {
                bb.y = wb
              }
            },
            metadata: tb
          }, Lb, Ib), (0, Kb.i)(null, null, Hb, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: bb => "z" in bb,
              get: bb => bb.z,
              set: (bb, wb) => {
                bb.z = wb
              }
            },
            metadata: tb
          }, Ob, Ub), (0, Kb.i)(null, bb = {
            value: wb
          }, pb, {
            kind: "class",
            name: wb.name,
            metadata: tb
          }, null, Vb), wb = bb.value, tb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tb
          }), (0, Kb.m)(wb, Vb)
        })(), wb
      })(),
      fg = (() => {
        let bb, wb, Mb = [fV({
            ns: Hg,
            name: "triangles"
          })],
          eb = [];
        wb = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, Kb.n)(wb, "ThreeMfTriangles"), (() => {
          const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Kb.i)(null, bb = {
            value: wb
          }, Mb, {
            kind: "class",
            name: wb.name,
            metadata: Hb
          }, null, eb), wb = bb.value, Hb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Hb
          }), (0, Kb.m)(wb, eb)
        })(), wb
      })(),
      Ag = (() => {
        let bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb = [fV({
            ns: Hg,
            name: "triangle"
          })],
          Ib = [],
          Ob = [],
          Ub = [],
          tb = [],
          Cb = [],
          Eb = [],
          Fb = [],
          Bb = [],
          sb = [],
          mb = [],
          hb = [],
          zb = [],
          Xb = [],
          xb = [],
          jb = [];
        wb = class {
          constructor(bb, wb, Mb) {
            this.v1 = (0, Kb.m)(this, Ob, void 0), this.v2 = ((0, Kb.m)(this, Ub), (0, Kb.m)(this, tb, void 0)), this.v3 = ((0, Kb.m)(this, Cb), (0, Kb.m)(this, Eb, void 0)), this.p1 = ((0, Kb.m)(this, Fb), (0, Kb.m)(this, Bb, void 0)), this.p2 = ((0, Kb.m)(this, sb), (0, Kb.m)(this, mb, void 0)), this.p3 = ((0, Kb.m)(this, hb), (0, Kb.m)(this, zb, void 0)), this.pid = ((0, Kb.m)(this, Xb), (0, Kb.m)(this, xb, void 0)), (0, Kb.m)(this, jb), this.v1 = bb, this.v2 = wb, this.v3 = Mb
          }
        };
        return (0, Kb.n)(wb, "ThreeMfTriangle"), (() => {
          const rb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Mb = [WV({
            name: "v1"
          })], eb = [WV({
            name: "v2"
          })], Hb = [WV({
            name: "v3"
          })], pb = [WV({
            name: "p1"
          })], Vb = [WV({
            name: "p2"
          })], gb = [WV({
            name: "p3"
          })], lb = [WV({
            name: "pid"
          })], (0, Kb.i)(null, null, Mb, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: bb => "v1" in bb,
              get: bb => bb.v1,
              set: (bb, wb) => {
                bb.v1 = wb
              }
            },
            metadata: rb
          }, Ob, Ub), (0, Kb.i)(null, null, eb, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: bb => "v2" in bb,
              get: bb => bb.v2,
              set: (bb, wb) => {
                bb.v2 = wb
              }
            },
            metadata: rb
          }, tb, Cb), (0, Kb.i)(null, null, Hb, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: bb => "v3" in bb,
              get: bb => bb.v3,
              set: (bb, wb) => {
                bb.v3 = wb
              }
            },
            metadata: rb
          }, Eb, Fb), (0, Kb.i)(null, null, pb, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: bb => "p1" in bb,
              get: bb => bb.p1,
              set: (bb, wb) => {
                bb.p1 = wb
              }
            },
            metadata: rb
          }, Bb, sb), (0, Kb.i)(null, null, Vb, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: bb => "p2" in bb,
              get: bb => bb.p2,
              set: (bb, wb) => {
                bb.p2 = wb
              }
            },
            metadata: rb
          }, mb, hb), (0, Kb.i)(null, null, gb, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: bb => "p3" in bb,
              get: bb => bb.p3,
              set: (bb, wb) => {
                bb.p3 = wb
              }
            },
            metadata: rb
          }, zb, Xb), (0, Kb.i)(null, null, lb, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: bb => "pid" in bb,
              get: bb => bb.pid,
              set: (bb, wb) => {
                bb.pid = wb
              }
            },
            metadata: rb
          }, xb, jb), (0, Kb.i)(null, bb = {
            value: wb
          }, Lb, {
            kind: "class",
            name: wb.name,
            metadata: rb
          }, null, Ib), wb = bb.value, rb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rb
          }), (0, Kb.m)(wb, Ib)
        })(), wb
      })(),
      Wg = (() => {
        let bb, wb, Mb = [fV({
            ns: Hg,
            name: "components"
          })],
          eb = [];
        wb = class {
          constructor() {
            this.component = []
          }
        };
        return (0, Kb.n)(wb, "ThreeMfComponents"), (() => {
          const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Kb.i)(null, bb = {
            value: wb
          }, Mb, {
            kind: "class",
            name: wb.name,
            metadata: Hb
          }, null, eb), wb = bb.value, Hb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Hb
          }), (0, Kb.m)(wb, eb)
        })(), wb
      })(),
      Jg = (() => {
        let bb, wb, Mb, eb, Hb = [fV({
            ns: Hg,
            name: "component"
          })],
          pb = [],
          Vb = [],
          gb = [],
          lb = [],
          Lb = [];
        wb = class {
          constructor(bb, wb) {
            this.objectid = (0, Kb.m)(this, Vb, void 0), this.transform = ((0, Kb.m)(this, gb), (0, Kb.m)(this, lb, void 0)), (0, Kb.m)(this, Lb), this.objectid = bb, this.transform = wb
          }
        };
        return (0, Kb.n)(wb, "ThreeMfComponent"), (() => {
          const Ib = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Mb = [WV({
            name: "objectid"
          })], eb = [WV({
            name: "transform",
            formatter: xg
          })], (0, Kb.i)(null, null, Mb, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: bb => "objectid" in bb,
              get: bb => bb.objectid,
              set: (bb, wb) => {
                bb.objectid = wb
              }
            },
            metadata: Ib
          }, Vb, gb), (0, Kb.i)(null, null, eb, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: bb => "transform" in bb,
              get: bb => bb.transform,
              set: (bb, wb) => {
                bb.transform = wb
              }
            },
            metadata: Ib
          }, lb, Lb), (0, Kb.i)(null, bb = {
            value: wb
          }, Hb, {
            kind: "class",
            name: wb.name,
            metadata: Ib
          }, null, pb), wb = bb.value, Ib && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ib
          }), (0, Kb.m)(wb, pb)
        })(), wb
      })(),
      Sg = (() => {
        let bb, wb, Mb, eb = [fV({
            ns: Hg,
            name: "basematerials"
          })],
          Hb = [],
          pb = [],
          Vb = [];
        wb = class {
          constructor(bb) {
            this.id = (0, Kb.m)(this, pb, void 0), this.base = ((0, Kb.m)(this, Vb), []), this.id = bb
          }
        };
        return (0, Kb.n)(wb, "ThreeMfBaseMaterials"), (() => {
          const gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Mb = [WV({
            name: "id"
          })], (0, Kb.i)(null, null, Mb, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: bb => "id" in bb,
              get: bb => bb.id,
              set: (bb, wb) => {
                bb.id = wb
              }
            },
            metadata: gb
          }, pb, Vb), (0, Kb.i)(null, bb = {
            value: wb
          }, eb, {
            kind: "class",
            name: wb.name,
            metadata: gb
          }, null, Hb), wb = bb.value, gb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gb
          }), (0, Kb.m)(wb, Hb)
        })(), wb
      })(),
      Ng = (() => {
        let bb, wb, Mb, eb, Hb = [fV({
            ns: Hg,
            name: "base"
          })],
          pb = [],
          Vb = [],
          gb = [],
          lb = [],
          Lb = [];
        wb = class {
          constructor(bb, wb) {
            this.name = (0, Kb.m)(this, Vb, void 0), this.displaycolor = ((0, Kb.m)(this, gb), (0, Kb.m)(this, lb, void 0)), (0, Kb.m)(this, Lb), this.name = bb, this.displaycolor = wb
          }
        };
        return (0, Kb.n)(wb, "ThreeMfBase"), (() => {
          const Ib = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Mb = [WV({
            name: "name"
          })], eb = [WV({
            name: "displaycolor"
          })], (0, Kb.i)(null, null, Mb, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, wb) => {
                bb.name = wb
              }
            },
            metadata: Ib
          }, Vb, gb), (0, Kb.i)(null, null, eb, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: bb => "displaycolor" in bb,
              get: bb => bb.displaycolor,
              set: (bb, wb) => {
                bb.displaycolor = wb
              }
            },
            metadata: Ib
          }, lb, Lb), (0, Kb.i)(null, bb = {
            value: wb
          }, Hb, {
            kind: "class",
            name: wb.name,
            metadata: Ib
          }, null, pb), wb = bb.value, Ib && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ib
          }), (0, Kb.m)(wb, pb)
        })(), wb
      })(),
      vg = (() => {
        let bb, wb, Mb = [fV({
            ns: Hg,
            name: "build"
          })],
          eb = [];
        wb = class {
          constructor() {
            this.item = []
          }
        };
        return (0, Kb.n)(wb, "ThreeMfBuild"), (() => {
          const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Kb.i)(null, bb = {
            value: wb
          }, Mb, {
            kind: "class",
            name: wb.name,
            metadata: Hb
          }, null, eb), wb = bb.value, Hb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Hb
          }), (0, Kb.m)(wb, eb)
        })(), wb
      })(),
      Qg = (() => {
        let bb, wb, Mb, eb, Hb, pb = [fV({
            ns: Hg,
            name: "item"
          })],
          Vb = [],
          gb = [],
          lb = [],
          Lb = [],
          Ib = [],
          Ob = [],
          Ub = [];
        wb = class {
          constructor(bb, wb, Mb) {
            this.objectid = (0, Kb.m)(this, gb, void 0), this.transform = ((0, Kb.m)(this, lb), (0, Kb.m)(this, Lb, void 0)), this.partnumber = ((0, Kb.m)(this, Ib), (0, Kb.m)(this, Ob, void 0)), this.metadatagroup = (0, Kb.m)(this, Ub), this.objectid = bb, this.transform = wb, this.partnumber = Mb
          }
        };
        return (0, Kb.n)(wb, "ThreeMfItem"), (() => {
          const tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Mb = [WV({
            name: "objectid"
          })], eb = [WV({
            name: "transform",
            formatter: xg
          })], Hb = [WV({
            name: "partnumber"
          })], (0, Kb.i)(null, null, Mb, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: bb => "objectid" in bb,
              get: bb => bb.objectid,
              set: (bb, wb) => {
                bb.objectid = wb
              }
            },
            metadata: tb
          }, gb, lb), (0, Kb.i)(null, null, eb, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: bb => "transform" in bb,
              get: bb => bb.transform,
              set: (bb, wb) => {
                bb.transform = wb
              }
            },
            metadata: tb
          }, Lb, Ib), (0, Kb.i)(null, null, Hb, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: bb => "partnumber" in bb,
              get: bb => bb.partnumber,
              set: (bb, wb) => {
                bb.partnumber = wb
              }
            },
            metadata: tb
          }, Ob, Ub), (0, Kb.i)(null, bb = {
            value: wb
          }, pb, {
            kind: "class",
            name: wb.name,
            metadata: tb
          }, null, Vb), wb = bb.value, tb && Object.defineProperty(wb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tb
          }), (0, Kb.m)(wb, Vb)
        })(), wb
      })();
    class Gg {
      constructor(bb, wb) {
        this._object = new Dg(bb, wb)
      }
      withName(bb) {
        return this._object.name = bb, this
      }
      withThumbnail(bb) {
        return this._object.thumbnail = bb, this
      }
      withProperty(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = bb, this._object.id = wb, this
      }
      build() {
        return this._object
      }
      reset(bb, wb) {
        this._object = new Dg(bb, wb)
      }
    }
    class qg extends Gg {
      constructor(bb) {
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gg.model), this._object.content = new Wg
      }
      withComponent(bb, wb) {
        return this._object.content.component.push(new Jg(bb, wb)), this
      }
    }
    class ag extends Gg {
      constructor(bb) {
        super(bb, gg.model)
      }
      withPostProcessHandlers(bb, wb) {
        return this._vh = bb, this._th = wb, this
      }
      withData(bb) {
        return this._object.content = this._buildMesh(bb), this
      }
      withMaterial(bb, wb) {
        return this._object.pid = bb, this._object.pindex = wb, this
      }
      _buildMesh(bb) {
        const wb = this._buildVertices(bb.positions),
          Mb = this._buildTriangle(bb.indices);
        return new cg(wb, Mb)
      }
      _buildVertices(bb) {
        const wb = new Yg;
        if (bb)
          for (let Mb = 0; Mb < bb.length;) {
            const eb = bb[Mb++],
              Hb = bb[Mb++],
              pb = bb[Mb++];
            let Vb = new Zg(eb, Hb, pb);
            this._vh && (Vb = this._vh(Vb)), wb.vertex.push(Vb)
          }
        return wb
      }
      _buildTriangle(bb) {
        const wb = new fg;
        if (bb)
          for (let Mb = 0; Mb < bb.length;) {
            const eb = bb[Mb++],
              Hb = bb[Mb++],
              pb = bb[Mb++];
            let Vb = new Ag(eb, Hb, pb);
            this._th && (Vb = this._th(Vb)), wb.triangle.push(Vb)
          }
        return wb
      }
    }
    class ig {
      constructor(bb) {
        this._m = new Sg(bb)
      }
      withColor(bb, wb) {
        this._m.base = this._m.base ?? [];
        let Mb = this._m.base.find((wb => wb.name.toLowerCase() === bb.toLowerCase()));
        return Mb ? (Mb.displaycolor = this._rgbaToHex(wb), this) : (Mb = new Ng(bb, this._rgbaToHex(wb)), this._m.base.push(Mb), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(bb) {
        const wb = bb => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(bb, 1 / 2.2)))),
          Mb = wb(bb.r).toString(16).padStart(2, "0").toUpperCase(),
          eb = wb(bb.g).toString(16).padStart(2, "0").toUpperCase(),
          Hb = wb(bb.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof bb.a) {
          return `#${Mb}${eb}${Hb}${Math.round(Math.min(255,Math.max(0,255*bb.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${Mb}${eb}${Hb}`
      }
    }
    class ug {
      constructor() {
        this._model = new jg, this._objects = new Map
      }
      withMetaData(bb, wb, Mb, eb) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Kg(bb, wb, Mb, eb)), this
      }
      withMaterial(bb) {
        return bb instanceof ig && (bb = bb.build()), bb && (this._model.resources = this._model.resources ?? new Rg, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(bb)), this
      }
      withMesh(bb) {
        return bb instanceof ag && (bb = bb.build()), this._model.resources = this._model.resources ?? new Rg, this._model.resources.object.push(bb), this
      }
      withComponents(bb) {
        return bb instanceof qg && (bb = bb.build()), this._model.resources = this._model.resources ?? new Rg, this._model.resources.object.push(bb), this
      }
      withBuild(bb, wb, Mb) {
        return this._model.build = this._model.build ?? new vg, this._model.build.item?.push(new Qg(bb, wb, Mb)), this
      }
      withUnit(bb) {
        return this._model.unit = bb, this
      }
      reset() {
        return this._model = new jg, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    ug.KnownMetaSet = new Set(jg.KnownMeta.map((bb => bb.toLowerCase())));
    class dg {
      withContentType(bb) {
        this._cts || (this._cts = new Bg);
        const wb = this._cts.items;
        return wb.some((wb => wb.ext === bb.ext && wb.ct === bb.ct)) || wb.push(bb), this
      }
      withRelationship(bb) {
        this._rs || (this._rs = new mg);
        const wb = this._rs.items;
        return wb.some((wb => wb.id === bb.id)) || wb.push(bb), this.withContentType(new sg("rels", Ig.Relationships)), this
      }
      withModel(bb) {
        return bb instanceof ug && (bb = bb.build()), this._m = bb, this.withContentType(new sg("model", Ig.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const bb = `${Ug}${tg}`;
        if (!this._rs) {
          const wb = `/${bb}`;
          this.withRelationship(new hg("rel0", Fg.ThreeDimModel, wb))
        }
        return new zg(this._cts, this._rs, this._m)
      }
    }
    class Pg {
      constructor(bb) {
        this._o = bb
      }
      get options() {
        return this._o
      }
      async serializeAsync(bb) {
        const wb = await this.ensureZipLibReadyAsync();
        if (!wb) return;
        const Mb = wb.Zip,
          eb = wb.ZipDeflate;
        if (!Mb || !eb) throw new Error("fflate Zip / ZipDeflate not available");
        const Hb = function(bb, wb, Mb) {
          const Hb = new eb(wb, {
            level: 6
          });
          bb.add(Hb);
          const pb = function(bb) {
              return {
                push: (wb, Mb) => bb.push(wb, Mb)
              }
            }(Hb),
            Vb = new eg(pb),
            gb = new wg(Vb).dec("1.0", "UTF-8");
          new TV(gb).serialize(Mb), Vb.finish()
        };
        for (var pb = arguments.length, Vb = new Array(pb > 1 ? pb - 1 : 0), gb = 1; gb < pb; gb++) Vb[gb - 1] = arguments[gb];
        const lb = this.toDocument(...Vb);
        if (!lb) return;
        const Lb = new Mb(bb);
        Hb(Lb, Eg, lb.contentTypes), Hb(Lb, `${Og}${Cg}`, lb.relationships), Hb(Lb, `${Ug}${tg}`, lb.model), Lb.end()
      }
      toDocument() {
        const bb = (new ug).withUnit(this._o?.unit ?? Vg.millimeter);
        if (this.options.metadata)
          for (const Hb in this.options.metadata) bb.withMetaData(Hb, this.options.metadata[Hb]);
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        return (new dg).withModel(this.toModel(bb, ...Mb)).build()
      }
    }
    class ng {
      static async SerializeToMemoryAsync(bb) {
        const wb = new Array;
        let Mb = 0;
        for (var eb = arguments.length, Hb = new Array(eb > 1 ? eb - 1 : 0), pb = 1; pb < eb; pb++) Hb[pb - 1] = arguments[pb];
        if (await bb.serializeAsync((function(bb, eb, Hb) {
            wb.push(eb), Mb += eb.length
          }), ...Hb), !Mb) return;
        const Vb = new Uint8Array(Mb);
        let gb = 0;
        for (const lb of wb) Vb.set(lb, gb), gb += lb.length;
        return Vb
      }
    }
    class yg {}
    yg.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class og {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = bb, this._to = wb, this._step = Mb, this._i = bb
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const bb = this._i;
        return this._i += this._step, bb
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class Tg extends Pg {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...Tg.DefaultOptions,
          ...bb
        })
      }
      toModel(bb) {
        for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
        Mb = Mb.filter((bb => bb instanceof Ie.e || bb instanceof tb.d));
        const Hb = new og,
          pb = bb,
          Vb = new Map,
          gb = this.options.exportInstances ? [] : null;
        for (let lb = 0; lb < Mb.length; lb++) {
          const bb = Mb[lb];
          if (bb instanceof tb.d) {
            gb?.push(bb);
            continue
          }
          const wb = bb.name || `mesh${lb}`,
            eb = bb.getWorldMatrix(),
            Lb = this._handleBabylonTo3mfMatrixTransformToRef(eb, Xg.Zero()),
            Ib = bb.oR;
          if (void 0 === Ib) continue;
          const Ob = 1 == Ib.length;
          for (let Mb = 0; Mb < Ib.length; Mb++) {
            const eb = Ib[Mb],
              gb = this._extractSubMesh(bb, eb);
            if (gb) {
              const bb = Ob ? `${wb}` : `${wb}_${Mb}`,
                lb = new ag(Hb.next()).withData(gb).withName(bb).build();
              pb.withMesh(lb), pb.withBuild(lb.id, Lb), Vb.set(eb, lb)
            }
          }
        }
        if (gb && gb.length) {
          const bb = this._groupBy(gb, (bb => bb.opb));
          for (const [wb, Mb] of Array.from(bb.entries()))
            if (Mb && Mb.length)
              for (let bb = 0; bb < Mb.length; bb++) {
                const eb = Mb[bb].getWorldMatrix(),
                  Hb = wb.oR;
                for (let bb = 0; bb < Hb.length; bb++) {
                  const wb = Hb[bb],
                    Mb = Vb.get(wb);
                  Mb && pb.withBuild(Mb.id, this._handleBabylonTo3mfMatrixTransformToRef(eb, Xg.Zero()))
                }
              }
        }
        return pb.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const bb = globalThis;
          return bb.fflate || await Hb.Tools.LoadScriptAsync(yg.FFLATEUrl), bb.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(bb, wb) {
        const Mb = bb.ipb();
        if (!Mb) return;
        const eb = bb.getVerticesData(Tg._PositionKind);
        if (!eb) return;
        if (0 == wb.indexStart && wb.indexCount == Mb.length) return {
          positions: eb,
          indices: Mb
        };
        const Hb = wb.indexStart,
          pb = new Map,
          Vb = [],
          gb = new Uint32Array(wb.indexCount);
        for (let lb = 0; lb < wb.indexCount; lb++) {
          const bb = Mb[Hb + lb];
          let wb = pb.get(bb);
          if (void 0 === wb) {
            wb = pb.size, pb.set(bb, wb);
            const Mb = 3 * bb;
            Vb.push(eb[Mb], eb[Mb + 1], eb[Mb + 2])
          }
          gb[lb] = wb
        }
        return {
          positions: new Float32Array(Vb),
          indices: gb
        }
      }
      _groupBy(bb, wb) {
        const Mb = new Map;
        for (const eb of bb) {
          const bb = wb(eb),
            Hb = Mb.get(bb);
          Hb ? Hb.push(eb) : Mb.set(bb, [eb])
        }
        return Mb
      }
      _handleBabylonTo3mfMatrixTransformToRef(bb, wb) {
        const Mb = bb.multiplyToRef(Tg._R_BJS_TO_3MF, Nb.b.Zero()).m;
        return wb.values = [Mb[0], Mb[1], Mb[2], Mb[4], Mb[5], Mb[6], Mb[8], Mb[9], Mb[10], Mb[12], Mb[13], Mb[14]], wb
      }
    }
    Tg.DefaultOptions = {
      unit: Vg.meter,
      exportInstances: !1
    }, Tg._PositionKind = "position", Tg._R_BJS_TO_3MF = Nb.b.RotationX(Math.PI / 2).multiply(Nb.b.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);