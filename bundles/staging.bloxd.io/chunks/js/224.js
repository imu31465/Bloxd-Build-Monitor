export const id = 224;
export const ids = [224, 229];
export const modules = {
  41238: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(41160),
      Wb = sb(39406);
    let ab = !1;

    function Tb() {
      ab || (ab = !0, Wb.e.prototype._sphericalPolynomialTargetSize = 0, Wb.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Wb.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = kb.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((bb => {
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
  36821: (bb, cb, sb) => {
    sb.d(cb, {
      Color3: () => kb.e,
      e: () => kb.g
    });
    var kb = sb(36830);
    (0, kb.j)()
  },
  37365: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = sb(37368);
    class Wb {
      static GetPlanes(bb) {
        const cb = [];
        for (let sb = 0; sb < 6; sb++) cb.push(new kb.c(0, 0, 0, 0));
        return Wb.GetPlanesToRef(bb, cb), cb
      }
      static GetNearPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[2], cb.normal.y = sb[7] + sb[6], cb.normal.z = sb[11] + sb[10], cb.d = sb[15] + sb[14], cb.normalize()
      }
      static GetFarPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[2], cb.normal.y = sb[7] - sb[6], cb.normal.z = sb[11] - sb[10], cb.d = sb[15] - sb[14], cb.normalize()
      }
      static GetLeftPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[0], cb.normal.y = sb[7] + sb[4], cb.normal.z = sb[11] + sb[8], cb.d = sb[15] + sb[12], cb.normalize()
      }
      static GetRightPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[0], cb.normal.y = sb[7] - sb[4], cb.normal.z = sb[11] - sb[8], cb.d = sb[15] - sb[12], cb.normalize()
      }
      static GetTopPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[1], cb.normal.y = sb[7] - sb[5], cb.normal.z = sb[11] - sb[9], cb.d = sb[15] - sb[13], cb.normalize()
      }
      static GetBottomPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[1], cb.normal.y = sb[7] + sb[5], cb.normal.z = sb[11] + sb[9], cb.d = sb[15] + sb[13], cb.normalize()
      }
      static GetPlanesToRef(bb, cb) {
        Wb.GetNearPlaneToRef(bb, cb[0]), Wb.GetFarPlaneToRef(bb, cb[1]), Wb.GetLeftPlaneToRef(bb, cb[2]), Wb.GetRightPlaneToRef(bb, cb[3]), Wb.GetTopPlaneToRef(bb, cb[4]), Wb.GetBottomPlaneToRef(bb, cb[5])
      }
      static IsPointInFrustum(bb, cb) {
        for (let sb = 0; sb < 6; sb++)
          if (cb[sb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37368: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = sb(36656);
    class Wb {
      constructor(bb, cb, sb, Wb) {
        this.normal = new kb.p(bb, cb, sb), this.d = Wb
      }
      Osb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wb(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let cb = 0;
        return 0 !== bb && (cb = 1 / bb), this.normal.x *= cb, this.normal.y *= cb, this.normal.z *= cb, this.d *= cb, this
      }
      transform(bb) {
        const cb = Wb._TmpMatrix;
        bb.invertToRef(cb);
        const sb = cb.m,
          kb = this.normal.x,
          ab = this.normal.y,
          Tb = this.normal.z,
          Ub = this.d,
          Ib = kb * sb[0] + ab * sb[1] + Tb * sb[2] + Ub * sb[3],
          Hb = kb * sb[4] + ab * sb[5] + Tb * sb[6] + Ub * sb[7],
          fb = kb * sb[8] + ab * sb[9] + Tb * sb[10] + Ub * sb[11],
          Mb = kb * sb[12] + ab * sb[13] + Tb * sb[14] + Ub * sb[15];
        return new Wb(Ib, Hb, fb, Mb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, cb, sb) {
        const kb = cb.x - bb.x,
          Wb = cb.y - bb.y,
          ab = cb.z - bb.z,
          Tb = sb.x - bb.x,
          Ub = sb.y - bb.y,
          Ib = sb.z - bb.z,
          Hb = Wb * Ib - ab * Ub,
          fb = ab * Tb - kb * Ib,
          Mb = kb * Ub - Wb * Tb,
          Xb = Math.sqrt(Hb * Hb + fb * fb + Mb * Mb);
        let nb;
        return nb = 0 !== Xb ? 1 / Xb : 0, this.normal.x = Hb * nb, this.normal.y = fb * nb, this.normal.z = Mb * nb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, cb) {
        return kb.p.Dot(this.normal, bb) <= cb
      }
      signedDistanceTo(bb) {
        return kb.p.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Wb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, cb, sb) {
        const kb = new Wb(0, 0, 0, 0);
        return kb.copyFromPoints(bb, cb, sb), kb
      }
      static FromPositionAndNormal(bb, cb) {
        const sb = new Wb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, cb, sb)
      }
      static FromPositionAndNormalToRef(bb, cb, sb) {
        return sb.normal.ssb(cb), sb.normal.normalize(), sb.d = -bb.dot(sb.normal), sb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, cb, sb) {
        const Wb = -(cb.x * bb.x + cb.y * bb.y + cb.z * bb.z);
        return kb.p.Dot(sb, cb) + Wb
      }
    }
    Wb._TmpMatrix = kb.e.Identity()
  },
  36654: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      Matrix: () => kb.e,
      Quaternion: () => kb.f,
      RegisterMathVector: () => kb.j,
      TmpVectors: () => kb.m,
      Vector2: () => kb.n,
      Fm: () => kb.p,
      Vector4: () => kb.t
    });
    var kb = sb(36656);
    (0, kb.j)()
  },
  37700: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb
    });
    class kb {
      constructor(bb, cb, sb, kb) {
        this.x = bb, this.y = cb, this.width = sb, this.height = kb
      }
      toGlobal(bb, cb) {
        return new kb(this.x * bb, this.y * cb, this.width * bb, this.height * cb)
      }
      toGlobalToRef(bb, cb, sb) {
        return sb.x = this.x * bb, sb.y = this.y * cb, sb.width = this.width * bb, sb.height = this.height * cb, this
      }
      clone() {
        return new kb(this.x, this.y, this.width, this.height)
      }
    }
  },
  41160: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Hb
    });
    var kb = sb(36656),
      Wb = sb(36688),
      ab = sb(39404),
      Tb = sb(36661),
      Ub = sb(36830);
    class Ib {
      constructor(bb, cb, sb, kb) {
        this.name = bb, this.worldAxisForNormal = cb, this.worldAxisForFileX = sb, this.worldAxisForFileY = kb
      }
    }
    class Hb {
      static _NearestPow2Floor(bb) {
        return bb <= 1 ? 1 : 1 << Math.floor(Math.log2(bb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(bb) {
        if (!bb.isCube) return null;
        bb.EY()?.Sm().flushFramebuffer();
        const cb = bb.getSize().width,
          sb = bb._sphericalPolynomialTargetSize,
          kb = sb > 0 ? this._NearestPow2Floor(sb) : 0,
          Wb = !bb.noMipmap && !0 === bb._texture?.generateMipMaps,
          ab = kb > 0 && kb < cb && Wb,
          Tb = ab ? Math.max(0, Math.round(Math.log2(cb / kb))) : 0,
          Ub = ab ? Math.max(1, Math.floor(cb / Math.pow(2, Tb))) : cb,
          Ib = bb.readPixels(0, Tb, void 0, !1),
          Hb = bb.readPixels(1, Tb, void 0, !1);
        let fb, Mb;
        bb.isRenderTarget ? (fb = bb.readPixels(3, Tb, void 0, !1), Mb = bb.readPixels(2, Tb, void 0, !1)) : (fb = bb.readPixels(2, Tb, void 0, !1), Mb = bb.readPixels(3, Tb, void 0, !1));
        const Xb = bb.readPixels(4, Tb, void 0, !1),
          nb = bb.readPixels(5, Tb, void 0, !1),
          mb = bb.gammaSpace,
          lb = kb > 0 && kb < cb && !ab;
        return new Promise((bb => {
          Promise.all([Hb, Ib, fb, Mb, Xb, nb]).then((sb => {
            let [Wb, ab, Tb, Ib, Hb, fb] = sb, Mb = Ub;
            if (lb) {
              const bb = 4;
              Wb = this._DownsampleFace(Wb, cb, kb, bb), ab = this._DownsampleFace(ab, cb, kb, bb), Tb = this._DownsampleFace(Tb, cb, kb, bb), Ib = this._DownsampleFace(Ib, cb, kb, bb), Hb = this._DownsampleFace(Hb, cb, kb, bb), fb = this._DownsampleFace(fb, cb, kb, bb), Mb = kb
            }
            const Xb = {
              size: Mb,
              right: ab,
              left: Wb,
              up: Tb,
              down: Ib,
              front: Hb,
              back: fb,
              format: 5,
              type: Wb instanceof Float32Array ? 1 : 0,
              gammaSpace: mb
            };
            bb(this.ConvertCubeMapToSphericalPolynomial(Xb))
          }))
        }))
      }
      static _AreaElement(bb, cb) {
        return Math.atan2(bb * cb, Math.sqrt(bb * bb + cb * cb + 1))
      }
      static _DownsampleFace(bb, cb, sb, kb) {
        const Wb = bb instanceof Float32Array ? bb : Float32Array.from(bb),
          ab = sb * sb * kb,
          Tb = new Float32Array(ab),
          Ub = cb / sb,
          Ib = 1 / (Ub * Ub);
        for (let fb = 0; fb < sb; fb++) {
          const bb = Math.floor(fb * Ub),
            ab = Math.floor((fb + 1) * Ub);
          for (let Hb = 0; Hb < sb; Hb++) {
            const Mb = Math.floor(Hb * Ub),
              Xb = Math.floor((Hb + 1) * Ub),
              nb = (fb * sb + Hb) * kb;
            for (let sb = 0; sb < kb; sb++) {
              let Ub = 0;
              for (let Tb = bb; Tb < ab; Tb++)
                for (let bb = Mb; bb < Xb; bb++) Ub += Wb[(Tb * cb + bb) * kb + sb];
              Tb[nb + sb] = Ub * Ib
            }
          }
        }
        if (bb instanceof Float32Array) return Tb;
        const Hb = new(0, bb.constructor)(ab);
        for (let fb = 0; fb < ab; fb++) Hb[fb] = Tb[fb] + .5 | 0;
        return Hb
      }
      static ConvertCubeMapToSphericalPolynomial(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sb = cb > 0 ? this._NearestPow2Floor(cb) : 0;
        if (sb > 0 && bb.size > sb) {
          const cb = 5 === bb.format ? 4 : 3,
            kb = ["right", "left", "up", "down", "front", "back"],
            Wb = {};
          for (const ab of kb) Wb[ab] = this._DownsampleFace(bb[ab], bb.size, sb, cb);
          bb = {
            ...bb,
            ...Wb,
            size: sb
          }
        }
        const kb = new ab.b;
        let Ib = 0;
        const Hb = 2 / bb.size,
          fb = Hb,
          Mb = .5 * Hb,
          Xb = Mb - 1;
        for (let ab = 0; ab < 6; ab++) {
          const cb = this._FileFaces[ab],
            sb = bb[cb.name];
          let nb = Xb;
          const mb = 5 === bb.format ? 4 : 3;
          for (let ab = 0; ab < bb.size; ab++) {
            let lb = Xb;
            for (let fb = 0; fb < bb.size; fb++) {
              const Xb = cb.worldAxisForFileX.scale(lb).add(cb.worldAxisForFileY.scale(nb)).add(cb.worldAxisForNormal);
              Xb.normalize();
              const Qb = this._AreaElement(lb - Mb, nb - Mb) - this._AreaElement(lb - Mb, nb + Mb) - this._AreaElement(lb + Mb, nb - Mb) + this._AreaElement(lb + Mb, nb + Mb);
              let eb = sb[ab * bb.size * mb + fb * mb + 0],
                Cb = sb[ab * bb.size * mb + fb * mb + 1],
                Nb = sb[ab * bb.size * mb + fb * mb + 2];
              isNaN(eb) && (eb = 0), isNaN(Cb) && (Cb = 0), isNaN(Nb) && (Nb = 0), 0 === bb.type && (eb /= 255, Cb /= 255, Nb /= 255), bb.gammaSpace && (eb = Math.pow((0, Wb.Clamp)(eb), Tb.h), Cb = Math.pow((0, Wb.Clamp)(Cb), Tb.h), Nb = Math.pow((0, Wb.Clamp)(Nb), Tb.h));
              const Vb = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const bb = Math.max(eb, Cb, Nb);
                if (bb > Vb) {
                  const cb = Vb / bb;
                  eb *= cb, Cb *= cb, Nb *= cb
                }
              } else eb = (0, Wb.Clamp)(eb, 0, Vb), Cb = (0, Wb.Clamp)(Cb, 0, Vb), Nb = (0, Wb.Clamp)(Nb, 0, Vb);
              const Lb = new Ub.e(eb, Cb, Nb);
              kb.addLight(Xb, Lb, Qb), Ib += Qb, lb += Hb
            }
            nb += fb
          }
        }
        const nb = 6 * (4 * Math.PI) / 6 / Ib;
        return kb.scaleInPlace(nb), kb.convertIncidentRadianceToIrradiance(), kb.convertIrradianceToLambertianRadiance(), ab.f.FromHarmonics(kb)
      }
    }
    Hb._FileFaces = [new Ib("right", new kb.p(1, 0, 0), new kb.p(0, 0, -1), new kb.p(0, -1, 0)), new Ib("left", new kb.p(-1, 0, 0), new kb.p(0, 0, 1), new kb.p(0, -1, 0)), new Ib("up", new kb.p(0, 1, 0), new kb.p(1, 0, 0), new kb.p(0, 0, 1)), new Ib("down", new kb.p(0, -1, 0), new kb.p(1, 0, 0), new kb.p(0, 0, -1)), new Ib("front", new kb.p(0, 0, 1), new kb.p(1, 0, 0), new kb.p(0, -1, 0)), new Ib("back", new kb.p(0, 0, -1), new kb.p(-1, 0, 0), new kb.p(0, -1, 0))], Hb.MAX_HDRI_VALUE = 4096, Hb.PRESERVE_CLAMPED_COLORS = !1
  },
  40961: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb.g,
      g: () => kb.m
    });
    var kb = sb(39466);
    (0, kb.o)()
  },
  37501: (bb, cb, sb) => {
    function kb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const cb = 16 * Math.random() | 0;
        return ("x" === bb ? cb : 3 & cb | 8).toString(16)
      }))
    }
    sb.d(cb, {
      b: () => kb
    })
  },
  41200: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(41190),
      Wb = sb(41209);
    class ab {
      static ExpandRGBDTexture(bb) {
        const cb = bb._texture;
        if (!cb || !bb.isRGBD) return;
        const Wb = cb.Sm(),
          ab = Wb.getCaps(),
          Tb = cb.isReady;
        let Ub = !1;
        ab.textureHalfFloatRender && ab.textureHalfFloatLinearFiltering ? (Ub = !0, cb.type = 2) : ab.textureFloatRender && ab.textureFloatLinearFiltering && (Ub = !0, cb.type = 1), Ub && (cb.isReady = !1, cb._isRGBD = !1, cb.invertY = !1);
        const Ib = async () => {
          const ab = Wb.isWebGPU,
            Tb = ab ? 1 : 0;
          cb.isReady = !1, ab ? await sb.e(332).then((() => sb(60799))) : await sb.e(314).then((() => sb(60805)));
          const Ub = new kb.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Wb, !1, void 0, cb.type, void 0, null, !1, void 0, Tb);
          Ub.externalTextureSamplerBinding = !0;
          const Ib = Wb.createRenderTargetTexture(cb.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: cb.samplingMode,
            type: cb.type,
            format: 5
          });
          Ub.onEffectCreatedObservable.addOnce((sb => {
            sb.executeWhenCompiled((() => {
              Ub.onApply = bb => {
                bb._bindTexture("textureSampler", cb), bb.setFloat2("scale", 1, 1)
              }, bb.EY()?.postProcessManager.directRender([Ub], Ib, !0), Wb.restoreDefaultFramebuffer(), Wb._releaseTexture(cb), Ub && Ub.dispose(), Ib._swapAndDie(cb), cb.isReady = !0
            }))
          }))
        };
        Ub && (Tb ? Ib() : bb.onLoadObservable.addOnce(Ib))
      }
      static async EncodeTextureToRGBD(bb, cb) {
        let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return cb.Sm().isWebGPU ? await sb.e(333).then((() => sb(60828))) : await sb.e(315).then((() => sb(60819))), await (0, Wb.b)("rgbdEncode", bb, cb, kb, 1, 5)
      }
    }
  },
  60563: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      AsyncLoop: () => kb.b,
      RegisterTools: () => kb.f,
      Tools: () => kb.g,
      className: () => kb.i
    });
    var kb = sb(39531);
    (0, kb.f)()
  },
  41258: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    class kb {
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
        for (const cb of this._workerInfos)
          if (cb.idle) return this._execute(cb, bb), !0;
        return !1
      }
      _execute(bb, cb) {
        bb.idle = !1, bb.workerPromise.then((sb => {
          cb(sb, (() => {
            const cb = this._pendingActions.shift();
            cb ? this._execute(bb, cb) : bb.idle = !0
          }))
        }))
      }
    }
    class Wb extends kb {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wb.DefaultOptions;
        super([]), this._maxWorkers = bb, this._createWorkerAsync = cb, this._options = sb
      }
      push(bb) {
        if (!this._executeOnIdleWorker(bb))
          if (this._workerInfos.length < this._maxWorkers) {
            const cb = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(cb), this._execute(cb, bb)
          } else this._pendingActions.push(bb)
      }
      _execute(bb, cb) {
        bb.timeoutId && (clearTimeout(bb.timeoutId), delete bb.timeoutId), super._execute(bb, ((sb, kb) => {
          cb(sb, (() => {
            kb(), bb.idle && (bb.timeoutId = setTimeout((() => {
              bb.workerPromise.then((bb => {
                bb.terminate()
              }));
              const cb = this._workerInfos.indexOf(bb); - 1 !== cb && this._workerInfos.splice(cb, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Wb.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60600: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      AbstractThreeMfSerializer: () => vU,
      BVHExporter: () => tT,
      ContentTypeFileName: () => QU,
      DefaultXmlSerializerFormatOptions: () => rT,
      DefaultXmlSerializerNumberOptions: () => wT,
      EXT_lights_area: () => NW,
      EXT_mesh_gpu_instancing: () => qk,
      EXT_texture_avif: () => UT,
      EXT_texture_webp: () => kT,
      GLTF2Export: () => Kk,
      GLTFData: () => Hb,
      GetXmlFieldMeta: () => ZT,
      GetXmlName: () => zT,
      IsQualifiedName: () => yT,
      KHR_draco_mesh_compression: () => bW,
      KHR_interactivity: () => XW,
      KHR_lights_punctual: () => IW,
      KHR_materials_anisotropy: () => YW,
      KHR_materials_clearcoat: () => tW,
      KHR_materials_coat: () => OW,
      KHR_materials_diffuse_roughness: () => za,
      KHR_materials_diffuse_transmission: () => dW,
      KHR_materials_dispersion: () => oW,
      KHR_materials_emissive_strength: () => FW,
      KHR_materials_fuzz: () => na,
      KHR_materials_ior: () => ba,
      KHR_materials_iridescence: () => Wa,
      KHR_materials_openpbr: () => wa,
      KHR_materials_sheen: () => Ia,
      KHR_materials_specular: () => ea,
      KHR_materials_transmission: () => La,
      KHR_materials_unlit: () => ga,
      KHR_materials_volume: () => Pa,
      KHR_materials_volume_scatter: () => Oa,
      KHR_texture_basisu: () => pa,
      KHR_texture_transform: () => Ra,
      Known3mfRelationshipTypes: () => eU,
      KnownI3mfContentType: () => MU,
      Matrix3d: () => YU,
      MatrixFormatter: () => hU,
      ModelFileName: () => mU,
      NumberFormatter: () => RT,
      OBJExport: () => Tb,
      Object3dDirName: () => nU,
      OpenXmlContentTypesNamespace: () => HU,
      OpenXmlRelationshipsNamespace: () => fU,
      RegisterEXT_lights_area: () => LW,
      RegisterEXT_mesh_gpu_instancing: () => Ak,
      RegisterEXT_texture_avif: () => HT,
      RegisterEXT_texture_webp: () => aT,
      RegisterKHR_draco_mesh_compression: () => sW,
      RegisterKHR_interactivity: () => mW,
      RegisterKHR_lights_punctual: () => fW,
      RegisterKHR_materials_anisotropy: () => JW,
      RegisterKHR_materials_clearcoat: () => PW,
      RegisterKHR_materials_coat: () => KW,
      RegisterKHR_materials_diffuse_roughness: () => da,
      RegisterKHR_materials_diffuse_transmission: () => wW,
      RegisterKHR_materials_dispersion: () => RW,
      RegisterKHR_materials_emissive_strength: () => jW,
      RegisterKHR_materials_fuzz: () => la,
      RegisterKHR_materials_ior: () => sa,
      RegisterKHR_materials_iridescence: () => Ta,
      RegisterKHR_materials_openpbr: () => oa,
      RegisterKHR_materials_sheen: () => fa,
      RegisterKHR_materials_specular: () => Na,
      RegisterKHR_materials_transmission: () => Ya,
      RegisterKHR_materials_unlit: () => ta,
      RegisterKHR_materials_volume: () => Ea,
      RegisterKHR_materials_volume_scatter: () => Ka,
      RegisterKHR_texture_basisu: () => cT,
      RegisterKHR_texture_transform: () => Fa,
      RelationshipDirName: () => XU,
      RelationshipFileName: () => lU,
      ResolveFormatOptions: () => ST,
      ResolveNumberOptions: () => oT,
      STLExport: () => fT,
      ST_ObjectType: () => IU,
      ST_Unit: () => UU,
      StringXmlWriter: () => kU,
      ThreeDimModelNamespace: () => aU,
      ThreeMf: () => FU,
      ThreeMfBase: () => zU,
      ThreeMfBaseMaterials: () => ZU,
      ThreeMfBuild: () => qU,
      ThreeMfComponent: () => KU,
      ThreeMfComponents: () => GU,
      ThreeMfComponentsBuilder: () => wU,
      ThreeMfContentType: () => NU,
      ThreeMfContentTypes: () => CU,
      ThreeMfDocument: () => uU,
      ThreeMfDocumentBuilder: () => RU,
      ThreeMfItem: () => dU,
      ThreeMfMaterialBuilder: () => oU,
      ThreeMfMesh: () => PU,
      ThreeMfMeshBuilder: () => rU,
      ThreeMfMeta: () => gU,
      ThreeMfMetadataGroup: () => BU,
      ThreeMfModel: () => JU,
      ThreeMfModelBuilder: () => SU,
      ThreeMfObject: () => yU,
      ThreeMfObjectBuilder: () => AU,
      ThreeMfRelationship: () => LU,
      ThreeMfRelationships: () => VU,
      ThreeMfResources: () => tU,
      ThreeMfSerializer: () => pU,
      ThreeMfSerializerGlobalConfiguration: () => xU,
      ThreeMfTriangle: () => OU,
      ThreeMfTriangles: () => iU,
      ThreeMfVertex: () => EU,
      ThreeMfVertices: () => DU,
      ToQualifiedString: () => AT,
      TokenType: () => cU,
      TriangleSetsNamespace: () => TU,
      USDZExportAsync: () => gT,
      Utf8XmlWriterToBytes: () => WU,
      XmlAttr: () => GT,
      XmlBuilder: () => sU,
      XmlElem: () => KT,
      XmlIgnore: () => OT,
      XmlName: () => iT,
      XmlNameToParts: () => dT,
      XmlSerializer: () => pT,
      _ConvertToGLTFPBRMetallicRoughness: () => gs,
      _SolveMetallic: () => hs,
      __IGLTFExporterExtension: () => Ub
    });
    var kb = sb(36654),
      Wb = sb(60563),
      ab = sb(39730);
    class Tb {
      static OBJ(bb, cb, sb, Tb) {
        const Ub = [];
        let Ib = 1,
          Hb = 1;
        cb && (sb || (sb = "mat"), Ub.push("mtllib " + sb + ".mtl"));
        for (let fb = 0; fb < bb.length; fb++) {
          const sb = bb[fb],
            Mb = sb.name || `mesh${fb}}`;
          Ub.push(`o ${Mb}`);
          let Xb = null;
          if (Tb) {
            const bb = sb.computeWorldMatrix(!0);
            Xb = new kb.Matrix, bb.invertToRef(Xb), sb.bakeTransformIntoVertices(bb)
          }
          if (cb) {
            const bb = sb.material;
            bb && Ub.push("usemtl " + bb.id)
          }
          const nb = sb.geometry;
          if (!nb) {
            Wb.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const mb = nb.getVerticesData("position"),
            lb = nb.getVerticesData("normal"),
            Qb = nb.getVerticesData("uv"),
            eb = nb.Gsb();
          let Cb = 0,
            Nb = 0;
          if (!mb || !eb) {
            Wb.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const Vb = bb[0].EY().useRightHandedSystem ? 1 : -1;
          for (let bb = 0; bb < mb.length; bb += 3) Ub.push("v " + mb[bb] * Vb + " " + mb[bb + 1] + " " + mb[bb + 2]), Cb++;
          if (null != lb)
            for (let bb = 0; bb < lb.length; bb += 3) Ub.push("vn " + lb[bb] * Vb + " " + lb[bb + 1] + " " + lb[bb + 2]);
          if (null != Qb)
            for (let bb = 0; bb < Qb.length; bb += 2) Ub.push("vt " + Qb[bb] + " " + Qb[bb + 1]), Nb++;
          const Lb = ["", "", ""],
            ub = (sb.material || sb.EY().defaultMaterial)._getEffectiveOrientation(sb),
            [Yb, hb] = ub === ab.e.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let bb = 0; bb < eb.length; bb += 3) {
            const cb = [String(eb[bb] + Ib), String(eb[bb + Yb] + Ib), String(eb[bb + hb] + Ib)],
              sb = [String(eb[bb] + Hb), String(eb[bb + Yb] + Hb), String(eb[bb + hb] + Hb)],
              kb = cb,
              Wb = null != Qb ? sb : Lb,
              ab = null != lb ? cb : Lb;
            Ub.push("f " + kb[0] + "/" + Wb[0] + "/" + ab[0] + " " + kb[1] + "/" + Wb[1] + "/" + ab[1] + " " + kb[2] + "/" + Wb[2] + "/" + ab[2])
          }
          Tb && Xb && sb.bakeTransformIntoVertices(Xb), Ib += Cb, Hb += Nb
        }
        return Ub.join("\n")
      }
      static MTL(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const sb = [],
          kb = bb.material;
        sb.push("newmtl " + cb), sb.push("  Ns " + kb.specularPower.toFixed(4)), sb.push("  Ni 1.5000"), sb.push("  d " + kb.alpha.toFixed(4)), sb.push("  Tr 0.0000"), sb.push("  Tf 1.0000 1.0000 1.0000"), sb.push("  illum 2"), sb.push("  Ka " + kb.ambientColor.r.toFixed(4) + " " + kb.ambientColor.g.toFixed(4) + " " + kb.ambientColor.b.toFixed(4)), sb.push("  Kd " + kb.diffuseColor.r.toFixed(4) + " " + kb.diffuseColor.g.toFixed(4) + " " + kb.diffuseColor.b.toFixed(4)), sb.push("  Ks " + kb.specularColor.r.toFixed(4) + " " + kb.specularColor.g.toFixed(4) + " " + kb.specularColor.b.toFixed(4)), sb.push("  Ke " + kb.emissiveColor.r.toFixed(4) + " " + kb.emissiveColor.g.toFixed(4) + " " + kb.emissiveColor.b.toFixed(4));
        kb.ambientTexture && sb.push("  map_Ka " + kb.ambientTexture.name), kb.diffuseTexture && sb.push("  map_Kd " + kb.diffuseTexture.name), kb.specularTexture && sb.push("  map_Ks " + kb.specularTexture.name), kb.bumpTexture && sb.push("  map_bump -imfchan z " + kb.bumpTexture.name), kb.opacityTexture && sb.push("  map_d " + kb.opacityTexture.name);
        return sb.join("\n")
      }
    }
    var Ub = 0,
      Ib = sb(40961);
    class Hb {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const bb in this.files) {
          const cb = this.files[bb],
            sb = new Blob([cb], {
              type: (0, Ib.c)(bb)
            });
          Wb.Tools.Download(sb, bb)
        }
      }
    }
    var fb = sb(40567),
      Mb = sb(40528),
      Xb = sb(41043),
      nb = sb(40531),
      mb = sb(39232),
      lb = sb(36677),
      Qb = sb(36821),
      eb = sb(36688);
    const Cb = eb.HighestCommonFactor,
      Nb = {
        ...eb,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: Cb
      };
    var Vb = sb(41209),
      Lb = sb(40546),
      ub = sb(41e3),
      Yb = sb(41006),
      hb = sb(41232);
    (0, hb.RegisterDumpTools)();
    var Jb = sb(39414),
      gb = sb(39418),
      Bb = sb(38284),
      tb = sb(39536),
      yb = sb(39895),
      Pb = sb(41200);
    let Db = 0;
    const Eb = (bb, cb, sb, kb) => {
        if (!bb[sb]) {
          const Wb = bb.useDelayedTextureLoading;
          bb.useDelayedTextureLoading = !1;
          const ab = bb._blockEntityCollection;
          bb._blockEntityCollection = !1;
          const Tb = yb.e.CreateFromBase64String(cb, kb + Db++, bb, !0, !1, yb.e.BILINEAR_SAMPLINGMODE);
          bb._blockEntityCollection = ab;
          const Ub = bb.Sm().getLoadedTexturesCache(),
            Ib = Ub.indexOf(Tb.getInternalTexture()); - 1 !== Ib && Ub.splice(Ib, 1), Tb.isRGBD = !0, Tb.wrapU = yb.e.CLAMP_ADDRESSMODE, Tb.wrapV = yb.e.CLAMP_ADDRESSMODE, bb[sb] = Tb, bb.useDelayedTextureLoading = Wb, Pb.b.ExpandRGBDTexture(Tb);
          const Hb = bb.Sm().onContextRestoredObservable.add((() => {
            Tb.isRGBD = !0;
            const cb = bb.onBeforeRenderObservable.add((() => {
              Tb.isReady() && (bb.onBeforeRenderObservable.remove(cb), Pb.b.ExpandRGBDTexture(Tb))
            }))
          }));
          bb.ZY.add((() => {
            bb.Sm().onContextRestoredObservable.remove(Hb)
          }))
        }
        return bb[sb]
      },
      ib = bb => Eb(bb, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR42u29yY5tWXIlZnbuiSaTbZFUkZRKrCKhElASQA0EoQABgn6hJvoXzfUP+gP9hWb6Bg00IgRoQJaKqUxmZmTEe8/v0uB2u7Fm2T7HIyIrnz88uPvt3f2a2WrMbOvf/u3PvvzP/sUf/N6//i8vf/lv/3v5H//d//Sb//Uq/5u8yf8hV/m/5Cp/L1f5hVzlG7nKJ7mKyJuIXN/hPwqXI/g++zq6rPI5u8z+WqfLre+zy7PrVv9L8brsMiGvk8XLmM/sdfHXal4e3ad6GXPdyu2ij8u/+uv/5cuf/OSLfdtEfvUr+dnf/d0X//t3H/7bf/hP//N/928h/0Yg/4VA/kogfyGQP5Wr/IFAvhbIlwK5CGQTPP+9z5uPeePJSW+yo2+s/GtN30Rnv1E+f5zxof9R/lSXv/nr//mrr3+i+5dfyX7ZZQP07Tffys//8R/l/9TtX7790T/7r/8G8pdy+/8XAvnnAvkzgfwzgfyxQP5AIL8vkJ8K5KsmMVzu1U7p5PA5AXxOAJ8TwPf7sX/51ZeXfcemqnp9w/W77/S7X/6T/vzf/7383RWCX3/z05/9i3/13/0PX//eX/2FyP8tIv+PiPy9iPy/IvIzEfm5iPxCRH4lIt/c/393//9BRD6KyKf7f488fP74/PH544dJAF9cLl98IZfLBZtuqterXr/7Dt9982v95S9+Lv+gF/3i7Spv/8lf/vnf/vGf/dF/JfKnIvLnIvLvReQ/NEngn0TklyLy6/v/34jIt00iGJOBlxAsdvv54/PH5493SQCXy9t2ueh2ueimKorrFbjq9eNH+fDtb+TXv/ol/vHyhX4Fxfbx7euPf/Lnf/PfiPyeiPyhiPxxkwB+fk8AvxzQgJcIrGTwFsiAEXH4/PH54/PHUgLY7whgu2C7bLqpQgHB2xvePn6SDx8+6G9+84384vKF/IPu8iVU9Y/+7C/+jWxffiHytYj8VER+X0T+oEEBvxqQwCMJeIngo5EI3goIwVMIPn98/vj8ESaAbbtu2ybbvl8u2ybbdtluSECA65u8ffqIDx8+6G++/VZ/efkV/sO261dQXP7wT/7kX8vl8qXIFyLylbySwe/dE0CLAr65B/9vGn0gQwRMMqgmhM/J4fPH548eAezbZd/lsm3YtssNAYiqiogAAkCvb5/k46cP8u2HD/rrb7+R/2/b9Wu9yJe//8d/9Ney6S5yEZFdRL68/38khG/uKOCnAwoYkcCoEXwkEgGDDq7CeQfyOTl8/vhd1QCum26ybZtu2yabbrKpQvXue1yvuF6v+vbpTT5+/CDffviAX1++1V9sO77WXb/66R/+4V/dgkbllQi+aBLBV/dE8LWRALwkYCWCNyMZXElkwLTMeMkga/P4/PH547ccAVwuctkvdxSw6bbdtYDbTfSZBN7e8PHTR/3u4wf55vKd/nL7DX6mu3791U9//5+/gkNFZGuSgZUQvnKowKgLWLTAQgRtEniTuEfwaELw0MJvf3LQzynud+53uG+X6y3gN9kul+2y6XVT1U27JCDAFVc8ksAn/e7jR/nN5YP+avtWfq6Xy9f7Vz/9w1dgRYngiyYhfNkkgzYBWHTg44AEMmqQUYQKOmDaiCIa8TmsfmzB+DnZDQjgcpGLbti2y3bZHjRAdRMVvb/dcYU8kcDbPQlsH/CrbddfbF98+RPZfvLFnAQeieCRDC5DMvju/vmD4JkEvjRQgKULeGggowdHkAHTYxihg89vu88I5UeGAPSOAFTlrgPopiqbKPSmCKreUoAAkCcSePukHz590m8vH+WbD9/JP335k6/+tA86KxFchv8jMvhiogE4JQm8XhfKqOAqx5qRPyeGzx8/cgSwbXcUoLJtim27C4Oi93+4v6VxQwKAvl2v+Hj9pB8+fZJvt4/yzfbF9lPdv/wJnsE2BogmyeCRED40tGFvksIXiSbgiYSRRpDNDZ6BDI6ghM+J4fPHeyKAO+zX7cb9t4tedMMNAQju5V+f1uAtBSiu1zsduMrHy5t8ePsk3376KN98sX/xE5FPAnm7/782o0DiUINXMkCXCB7/P94/e87AWUmARQWVvgMuKej9t1RLBp+Tw+ePgwngsutFFdu26WXbbl+rSvdfbnqAiuA23QcBgCugV1zl7e1NPm5v+LC96XfbJ/1W9y++fgXjA3bDYXV+MuhRwSPwL3JLMFYC+HS/LU8HYrGwIhwyNOF12SvgM4SgztdifP85MXz+KGsA2C6X7aJ6bXSAOwrY5OYIqGy3d5uq4P5GhABXuV6veLvRAf10fZMPb2/y3b7vX7+g+9v98/WOBq7GG7RNAlYy+Dgkhhb+Xxp0sE8IAC4SGAP/TbgVJK/PoJPBnAiwPKxsXfbbnRg+i3s/JAK4Q/4b9NfLtomBAqCickMBjy7BuywAUVyv8na94tMjCVzf9KNcLl/0SeA6oAEYb1i9g+FtSALb/bKL8/+t+wxXFMyswqiHoK4ToIgKqslgpg1qUC0QoYbvJZg/B/q5v4szHmPX7YEAsD0CX25OwEUVm9xag1+agKg+nxQArnKjAtDr9U0+Xd/k4/UqH7bL5YsewrcBBiMJZPRAp6TwQgWfjM9vgRbgUYGL8AvLWH2gqhesCokeUmCSwPsnhs8fP2YNYMO2XeSmAWxy2VQaXeDmDIhApf33rD4PTUCuV+DtCn27XuXT5ir8VmCJ2G5BpBM8/r/dEcJb8/0lEQMtJHA5TAlqNuLRhJChhEpSqFabH3di+G1AGj+W1/dyAR4IYJNNnuLf6+tWC9CHHiAtFhAIFLjK2/Uqn65X+SS67aK+3QeTDoy/IG2ogQ7fb/dAtz5vBgrYGqrwNtCHsVfgIvwK07OTQBURVNCBFpKCOjqCHn5L/67TgTN+fpySAC56nwSUi256kXsSuFGAVyLoUIDo8/Pz7fdoErr/v17lk162HbgHvFpIYDfoAJJfW4sGPjkU4VNAF8ZEcLmLhdc7kljdY1y1Dq9yLiI4IiRqcLujb138KIPn80ejATwRwIbtBvn1cqv+2J78/5EI5N4cJA8qIPcmwRsKAHDF9WYP6mV7VmrgLuTpxYTcMEW0LAmoQxFsuvAI8tv/a/C5fV2ZMMiKg++FCM7RDPRu8ebWY7VG6VJi+Bzk35MI2LsAckMAgwvQ0gC5DQjd3ABg2HQLAPpEAlZ1Bu7VV7MGHDFRAbo3VKsTbAY9sPWC/uvx86gBbDK3D1eEQS8pbAeSgSwmhepnJb6uBv/o/PzHLzxWA/X7TH77De5j6AGQi6o0CUGfCOD2X7cXAlCFQABtEsGLDtxuOyQB2UTQBKZe5GUPXgkUYCUAbZJRhBDeuq8xBf+bgwbehDm+BFQi2IJksOocvA8ysIMfxluVcRsY/eB3JzH8GFDAXQO48X/dcIf9jyDHptIigDsFkEe066tBSETQUYF7ElDdYEBytN4+rk9UcBPfrKaZqFHWcw3i4J8/X4ev2//bSXqAhwTay6OEIPLD2Ipt8OtAGzxkwLw9WVFRjTc/qC6H3+YK/b1oAA0KuOizHfieCLaHHiAb5NYTIC9EMEbZrVEQt1xwhVy1UfBh8PUOquMizwaap3tQXfY5B//tea/NZdfhsvbz+PURQTDSGWB87VX/7WSd4KxjUqrIgE0IUkoKGnhIvwvawpGf6eECXJ7tv4qbA7DJgwpsKthEmmYgfaAAffYF3HLxo0vwNjJ0SwRWMG4db4eh1gPNm18vQ+us/0eGmxDemu/fnM/X4evq/8342ksGHgLY5LyT/zg0wM8lcMjgGFXwqIOVFJBQw99eCvF9oZL9Mfl3QwAvIXDsBRC9R+fz8x0FPBLB0xJEpwUobrfAkARgIAF41h3wQgP6QAmX5E/7eI43IxGwwf/moIkRyWRJQIPgt9CA9b39nzt4bYUWjAlCjWDPgv8IEjgLJfzuaAsrv9VdVG4OwOXW/fdoA35qAdL0BDwvf6AAUVHd8LIEu94A3K+Q+2YxaB84MOH62P//qoo38fCRDERE2zf0JfmDa+MieElAjcDPKz+mRKCOtdgGtXaBjgNJ4H2owSpNeAW/rRH4CaHSpMwnBYYycjgSJwfie9CR6mPu20Uv8kABF206AvXlBMiIBPSlB9wjBW1fwEuSb94296VCqgMaGCt/G1BbExi3IG+r3a3J6P48Gv/J0YmEYoiGY7V/SxwFCwGoE/xa0AJ0CEiV9QPCJb1OJ5F1VTjEY2/MO9AEJvj1BJTQpqLfTlGwjABuzT962e4IoKnyrdh3+/6mzDVJ4PHOxj0JqGKoy20+wBMN6D1gLWi9NQHfVP5MEEPzjGYy8BMAOnTAJgEr8HUIejRo5xrA5xkR5AngmiSHs+zDDAmMgWzTg55GSJEmHE8IvWPAoYTfhWak/Wn/bQ0CGLSAjv83SUEfKp5q24LXuQICpzrjrgWoza8xVE00CQCORdhMJuTUT/rjuls0gO4Iby8BIEgK6gS7BsGuTtDrScH/fR68biUHNVGBnxjeNyHEvQe/ve3LZQqgG3rof6cEclsNflG9J4KtaQ8WHcVBHS1BtHE4QP9OBMS98mpbKTeDW7dJwRsnHpMBTFJpV4I+b0kY/NqInVFSyBLANbnMSgBM8F+Fqfxq/h657/Up+GaBnwV9hRqc9bZ/vA6vu+T9E8KPJWns94UfTeCj2QXwCHS9dNL8Xf3Ho/rfewSeFODGDV69AU0y6NFAE1DP3qK++rdB7/1HRxf86gT376zOr99T/h/ioBiXWQkgQgVeIrCC/WomhDmQK+hASI2ARQZKooHMLdCJwGEBBXC3+uERwg+VOHZ9ioAt9H80AI06wGgJ3nQA3BoCut6AhxYwgcPOFnxuFnrphk+NIKIGrWPQtgz3b0i7Y6D5rs1GKqTop0nQX52vmQC4BkjA+r4a7Kx9WLENGeegkhSETBCrNXIMdi/444Rw1n6E96ry7OPuj8UfLxtQ78NA2iSBbg7gIiIbdDLsb5agPhLC3RkYKv8NDbS2YGsatNRAG2oQwf9ZIOydgy1MAzBkAw8UwEEIDzSAqdPQ6za0PkeJAMH3Z0wXniUSZoHvBXU2mcjQgv56TedIKglCpIoQfgwCIjOytd8WgN0bfxoR8Fn9Gx0Aj5Zgq0lIZbsH/ibSJoFnS+C98g9ooHEELI3gliy25yONIiE6pb0NfBlyNEYyENoodkKwgl6I6s8kARgJ4ZoEfuYWHLEJa0LhSBXm7kImGeSfVdoJ1DO2G7WXsehAptupSOoyrCSF904k+6vt98X/ZcM98Hsd4JYIXhQAIg3/f9AAUYhsLQKAtkHVBnzjCKhOoYl2ym+iBtvzDzQ2DLXJ4PUmbJHAVnBQX4jkxfvHhNDqAdHXGQJgv0aSDGItgOseHIU+K9hXnIJzkoGlEKzNHagTdJ6VWEUH4iCKH4fd2AwDPaYBm4Wgng4gQ9V/CoGiuNmD04AQtNGMGzSAAQ2I2pzfogY9LRh7BrbOh4+D30sAencljFu2CUFrwY8UAWRfWwGvVOVfbx2uIILM0pwDv082dUTw8hYs8L+uIWiHGpWgClnAa1lMPJogovvvbePPs/q3Xr++kgCsfgB5oQF9WYKPJqEn6G+OE3i5AqouF59FQOmahQC8rlPLj38kg1c2f30vw+XaoIX24/pMGIgSBoZqoH3wo0sIIGlA9PWcCPrAtpPB8eBf6x1o6cHra+2+tpIFP4PgBfxZtZUJfo4qxELT948D9ucK8Mt9+ccjIQw6QJcEbrD/1g340ATuDgDkFfx6twSf1f9xvuBECYxq/7ythQQGm+5JDx6Brw4CkMGT3wgscCUoQ4sU2t6DR2ciBjTgtcpenQoZVX9NuL4Owc+dVaDursYVkVALX+shjSBKBuvCYDUZjE5BdNkxdHAUBexyHwB6NP7Iyw7sxUDViwge1t+mz8B/LAvVx/c3PeBBCToB8IUGOgqA3iV4yUg6UAOxaUFHDx6CYS8SorMOue0CCJGAf5YfRhoAI+A1CvwxqNkAY5yAIx2EQmkFfeWOXi+nEdSQQA0ZHMEItiagJArQxDXIrj8nCfQi4HZPAttrIahso9oPQ/2/JwV5JQU8zw+7I4D7/sBn4EO6rjw0FR+i3Z9fHtahzsFvJgM0X+tmVH5vaYiNDGAigewAz+gyNLThnjCURQFR1b9d3lZvnVqmj9mEPDKIUIC4KCCjBXywS4N+otp/Hk3QVthOkwEKlV9PQwXjT7s/zwF4Qf9toAAzFdjuaEB6S7D1//U5FIQu2MevO0rQQH8ZmoXE6B/IkgE60XCjVoq8gt2iCG0S8L5GdxkM1cGsfsCMArSCAnrr7dzAZxCEEpepvB8tqHJ/q+bmJGGts/AcAXFOMMeTwC7Pw0B6CtCtA2vWgonqBQJFSwH0JQK29OB2kvgj2HHXAoyeAIsCQO0kMNECAhFMqCBf8mElAkyBbX1tJQP2RJ/ha0gpAfS9l+/5n00CkrQpq0MZbOdAuxmMvHswog62jZj7BnYQe19b14kxNq2D/ehX/p68HEcF+x3yP7z/V/A/q/5DA3i5A/dzA5pdgbKp3v3/wQF4Bb70WkCTHGRAA6+KL0bFl6FJaFw0ImZwm6igSwbbwPn9RMBWf3sN2JgA/BVh/Rg0kQBgePf6HglAHLFQwqQQOwDjbdVxNZjR4iM6Qa3WxwvNxh0JFb3g/WzFQQS8b/ttKcDWoABtUMAd8j9hf0MB2uDXhzX4CHj03L9DBU3Qjz0C0l4mLSLQPicOOwZoVCB6P6dA7nDbGkVuxcNr8PU2JQO4wX5trEqmccZaHU4q8oCDFOpzAnOwqyMIMktNNNAHouDGxO37DgArQZzlmp/14W1QlqHTMaIIx7SCx0+5yza7AKJ3IXBrNAHVDcMZAU/BT/vgv/ULPOA+XiLggAREDF2g0ci6xNDRglegd7P7TWWH5oJfayliEg7bScQRBVgI4Ookg/F6rvpLWP29swREqA3CaG8/FpKqS8DTAV4TiBqIqtxfzaQRLys5I0XEFIFrPbZRQb+16Fgi2LvJv8EFUPW1gGfQv1T/F/d/HBnccP7rAwnIIyHI4ArgWeGbU4eHy6Tx/EeTZIb5bo/BsMBjmjBE08f/RB0PHYBd9eVRAGY7cHRwiBf8WeCPHY1bgBTa9xKTELzEkQX9CPtl0gJiqsAmCT7I8xbjivh3JGFI+D2nBcSJQJ8agDX+O9iBL7UfG4bzAkcaICrbtYHz1ycSmGmAjJfL3CMgT3tQpmrfB7gxSzC1DnvdhQMieG47u75+kTouKNkM8c/+vq/Q7ZYjO/hhVvRq8F/9gGfhP8aqE9EIdR6LTwJ1h0BItyDqB8iFwuNqASscRnYioxOg9ApvnYA35f8e9Ohbfe8J4rknoFkO0lmA2gmAG0YK0DkB4ieEjiLoMD8wBzom27ANZkzIoU8EMHk/uo1mzeVoEoRWKn8L/62EYAX/lsB7D/LXg74uAMr9oGivJ0CNJCGD6i9DhZdQF+gtOp4S+NODRzsDVbhdgv4BqTMNyIL9SCKwL9/FGPp5oQKxIf8A/UX6r231H7YIqLML0Ae2GtrADOvRQH5b/MPE9dt9BGLNG8jVTAQvIaK5TtvvvWQgDvyXIClUA78S9Nfg7VtIBlO7cbsEYkQDMot+ygQ7QwmOawTHnAM2XUSnJvPIYRYMmYPS+sv3J+cfP3d04JYIXsF/EwMbBKB9Q9AY+BiSwFj9mzrSXmcJhFPVHySTbgHJCPvRQ/z7G/SVUETsg0ZF+i3CRoCjhf7y1A9mOiDD7TwdwEoEXjLwAv+avLE2B7Jnb+OqDpBoAchoQJskxKnss0vu7Q2YhcDv4ySeLOg9GsCKiUIihP7yfW7zbTsBh0TQfN0iAWn9f72Z56/Ax9P7j5OAH/Qvv3/QxKfk0DgDuP+R3USg3bzBC7bO/QT9Eeh9QvDPG7glBQzJwK740lAFFgFk8P88CqDGAa223YckWYhr+c0BPdwetl2ocnsfzePAWcVnnAIp6gDVhDLyfV4nqFEDPxHsbWD3k4BDkN+pARqKMLYBPzYEvxp9xmCHQQdgWH/9EtH2TIFpu3AH/cdGydv1j0TQbRrq+D/mLcX3ZACZ15bF378CG0My6Kq/zoGOQwhASDFwFbxyNGBuSxbCEhQ/uEPe/6gAERWQObCVVfjPpQX+rexxYhYFxIkgpgX7Y/vPs+Pvxf9vwt8kAs7i32t3QCP+3SPaTwIytQXP38u0PESm+YER+o9B3vr8mETAUfDrEkPI80ck0FZ0dXh9U+HRbhey0cAc2H7A4y4egoD6y8JfkBiigLdFP8v2W00E8deT2IeAKujZ/QAVKpAtKI20gLWksHedfgPcb+0+NEHefd9vB9rayi8h7J91gBbaw20MsnWAF5xHkyDUCOoXp+yrOwwxcKj0aL6fFppaaKDv6OpHR5sgx5BAlK/+fYhuP1D196o8e7lFBaKqv5YIMnFQpd0FGVR35RJCnCDaABaXBtgbiSwtICMtalKC+1JQ6bx/PLcDPQL91QFodQNKpwOgF/9eqcBxBBqRcKAAVk+ArQOMx1RYGgB6naDhlK+uQQwJYx4meQbxtNnYQwMjt/d4f3M9ZE4UOld1LAh99fbfzOxiEkKFCkTJIUIMUeVnJ/9sDt8/e1NEJOi9oVHDGYhgnSLss9DX2IAqw1zALUncKcDr0FB5NP+0cBQNrEezDiyiADPkt9qGpwoPdL0AGPx/NOKeyf3b9WJNdfcFv6bKd2cLMJVfJ6Y3B6wB9WFUfWWEwKMfGiQL+3bz9XGQz2EHKhF41GCtZyDi/gUCsNhYoAr3UNJ58YidHKqnMb/6AB5J4N73/4L+t7mAkeeP3P+1LNSB/l0SkMEd8DcEuUlguEw6t2AU/PCE/q++Akw6QFf1u6SBrj1ZnnhG50AfkoGIdf7gJv1KcSfgzWWkQ9U33Z3tHXYASKJ9e/YhU90rvD+q9Ej69/wxYJVs506Eg/r3DkMDzEdDBRGgcZay49XihLA30P+l8N+hf1f57/0AoxbQbwYaan/rBMirE9Dk+sBzTkC8JNDEUlv5McB8PP19Y01Gayep+hC/2zvQ/2HGLAurowsNGlA1cnqGGzeH5weiYLZm7h3QQC4O2tXdhvMMk1ZS5ebpgI8eMrPvPGkwaxayk8Yc6PMOBPEdC1XZ+2UfbfOPtxLMQQAG9BcZFoF0gp/RKjxe7+oAw9T7ZPWhgedodgz0gf5KBtrtIZhQAZpAV1Bi36w6t98qVfH7hqGI318lLCjLCUFlxRHwqYEH9a2qb4XjWvDT7kBwfbZA5P0+PNuRuW1yf4yNQH3zzwv6b70QOJ0G9OT/dhoYRUGT15uQH/71MjQLtQlxfDuiCXrtM+SkA+icQdH6sU/xz7Ze7FlubV4TpoTQ2osdpaEjtqADmEU7OkBEFoLeC3IWFFeswJXKXzkboNL+wzcFHU8hTGKIboO7CLi1/P+5F+gydQhuvRbwEgxvtACmANikhLTbj0gCYk8KdlYgmj+4Ymaod7TwahwadICuX0Cm2fE5iNHPK0x/CDV66Kyg1MnqjNFBnhBoLQCgUULfaVe5nq/6EQWY67bXCszUb+7232fVPz51iGB12owK9peyP1T4raMFF/OEYJP792mgXYfZ04GHMAhBkCSmSj+dKqRPgVFGHbpLEGMiGFeQWfSgrY52VxaeDUPSNJI0P7NoisG729HHl78z6hxfs9rV3m4JjgM/lsui2qmThjCfDFSb+I9vwUqG5wwL55U7C+6ot8B+7N2o6r3q37T9trfpjgmTvv7PSQATLLeRAOZhIJHBQfDQQJPBdUwEbVW3+L08EcEE/9G4ANrCeWcnPKRHDupbNynMx5AA9IRYLmrc/YLSiD5EaEBS/s/TgnU9ILcH19n+CpHwegLejx7Mn/d25fdN+e9U/1vgb7bqf08MOtf8EXxaoh+GY8L6gDfhvs4i6HQ7seYI2sv1GchdMsBIG3xlvxcCRzdgCPTn+6q/TW00VE8Q9FaFv+R2VlOM1vm/hhjhDCdgNflVKME5B47I9xT8z0YgPAJ8myb/LqHy36j/Mwqw9AALxuO1JVjiuQAYLcFzIhiEPe05fk8tRjGw7yWQbsfuLAT2VqOId1osnr0F49VM8INACPHDoBz4B5mqqSnUgyh3ArjXxfQH5BbgUS8gP7aU+w0zHD9GGD0CGHf+P1p/DeivlhU4BbxR9a2kYFR58YaDZCUR2P0DMmgED2eg77puegy6PgDphEB0CwlG/i9d+/Hs34pBEQrBn0W51mqGnJAk3ACCHeiqkQ1XFQA5AlKH7Lk8yJKWY3/nym14h2C3JvxeMwD9ZVMz0BPMi1n1RbKl1cYhIVblF3G0ATsRiCMUvoK9//OgcwYMoe+ZKOLlC6/Xk50br9NFz9fanqA8UIYSpCwlBO4kHc4WLLBfBHVaKwKgLQjmP4Un61Vq+3s7Bsyi0WztmLjJwJwFeE0I2vD/1Q6MVwefxfUf32skCPbCnxQqf+QMPEUDHZ7vGeyj020JgkPXXwsldA7SYR1RE3h94NvNtugswcgxXEkIcBPCGZ1rmrgDC0A4K88nm2fn/eTnpQtWyZfybRoK8Dro4zYDIMGsf7saTBzvX0SMbkAD6o9CYbsfMK38cJKD9l2FJt9/VGs0h5Gib33pxMKWNsigFUh3G2un+/N1WUglI/EEx8fq27vUNnwsiOoKecL7kQS8VnWAGCFUgn6dBtQhv40CmIYggwK0uwDHRGAuBXVdfwzHUjZzATLMAoyJ4FmBhzaWBlrHld9CCWpPHRqofBqMReMGTJ78q9rDes1Tv7/0m0v0AFHXNR6P6g30SHivin7V1BOhh3iWPwvps/yE836L2XiwnUT8x2iHgfqhnwn667QHEE8oLQjEvtEW7GYBZDrDVkwNIO4G5GiBDf9fGoFM6n+vbEtzXwP6u9AduaWnGYSLAlVdl/AU+ikrSeEIKgwdaZ4AACAASURBVKj4/wtgHcHtdO2nWKcBkPfxcvnNQvsj2Me9f02r76T8q0IBn9OLKfz1HX8yVXQYGoAB/2UeBQ5/5kCL6+H/OGGoRnLSwdd3oH8r7KkGTbgIxEwVWvnF8KOpHnyzfF9Jod5Px+IF1h8owyitDw/XEgRb5bPqbt1uvn7qBIQ16vtS/u+DP3cR7CH0WWJgd5mTJKYgNzoGjQrfvu99NDBC+bnyW1x/qhTatv2OaMKgJWPvv5kwnMgxHYGFRtJW8VMl3uP+MgoqSZyWFKr7+KIDw1d6+IiOgZI4+d5iYL3imzbgyO+tph9t2oSBxOM3ugHtPoFZ1LM0hF4kXNEBssvVgPdjdXZWK7uKvyS3q1Xb1WQwtVDqSUggq+Vw3t56JA2cz7PXOwGNW1ecwxPhfe3QEUsDsFaAz8jg0nf+iZMAHNg/XSazDuC18Iq1HBRrOsAQ8NLB+16g614jmuSgs3bROxE55D+WDDQNA4ivdMJ9M1b309UqknaDU8ObV9/PwmMPATvTMAxpABLBzugUtV9bLdhNDQA+7B9tQJ06/7QNDHGSwtgZOCIA47InIoDdROQGtt0U1HI3GaoUnCnC/rzBMQJteN17+VaAzYNA7e+PFqHQUyXPUYB7iQYa5ZFjq1Zqpx8Uqu/XT7+6BWC1Xaj0GlBIwMoHu7UzcI/6/Acb8KIq+hzmGWmAYnADrIpvKP7TZeLaf0LAeQkGgebbq9FToI44p654F47tekKkI0L5PQNZPsDwPBpy/ni+wKMN76Vav4+2cFZFf8+JwAraMt0DFB7beA/u4Zz/a+RXx0M/ct4/jwaNAS8G17eSwmta0Fhx0VRxJkHMivso+onMXr+YwdWKbgioy1jp4x4AzIKg5lEA7wvHEYCRmdx11TAuT6lDLVl4KvXkAET9P4RT8H2u+lg9EPQIpw+/NpJ7RwE8HaDv/Mu4f3OdNkq/EfAiEiOANjEALvcWL9gfFV4NZbgbQc6qPky4Pm35QZxtH1f4j+P/jXuaYPcWwIEH/fmEPBoAO4m4LGxV3txOQqDU+dXgey+UwSzuqP++uImO/u/6ogCb7wTc1n61sL+vZi87rxnrNas+giTg6QLzaUCjIp6JfhwtGI7AjBBB9JjDY4ePYVR6ZPgN4owVv6Q2N5hhVHwNeYrM+w6dN6K1sMHZm/Ce7bHe3dzKr1xw1w4JrSQMZtgnoQHlr18fzunAszD4qurNUg/TDqzx/lfCaO6t4tACMUQ6P6htWjDPC1hCoZ8kpODzJ70MUR9AODcgwyqyPhmE+wfHYB/hvSqt6qeXUShhXH+d9SR8DzrDaZZdpSp/HxqLMQuATgDU/qDPRgOIeT8cvz/h/XC6BtE7ACLOWPE0KIS4UUjmZaJ2grBphiWgT41BUVWZfP3AnEIT6OrfoF122l2rMycBoU5i/OXoUZ4/aglsXwLzHNU++FVF3qikOj5HXm2PBitT1WuvJRAB+6O//W0/PY8vQH5IrAsMs/WuVmAdHBrQgrbOxJShXwRSsu08h8JMBpo0+aDTALwV4tbswgzHrftG/dJKIAQb5h9KCssWIMeto+GYqG12/HWGjx8kzqNJaa0noMWOr2KwW01AMwJoNvhMQda2/RKQP/3ecABM3g9uD6BY68Ntz9+nDOMb5iV+hIE+dP/Zs/wwJhJ9mgBnohBuStABUXjugF3hkXF9ZZJAjefKdHZCc389LoStKvIl7QIEb1d9RyciQgFDI9Cjyccc/23Aam7/PZJBhgDgin5CtQvbCzX8ip9YgIFtOAt+w0owp/hOiCWgEGbVHuYjRigPGR/YOnEoqPDoV5z5YqB3mRq2ox5ICmSSgAP1Ne+XV2NE+/vuFbCTRADxtS70VRBCjgBk2OyDUQiUgfl77b7DwaHm2rAZ7osRSOOUoHgKfNBSLI767+oDYrfwZvqChSpGfj3pFwZFsCJg2jeIQQBUiyI4WgD68ww4qO8khuWkkIuDrxWv2nv+UTBpJYiPd0KemTA8qqFiuUF1jWS3BoG6pADJq751JqBI0wvAVPyMQvjcX1zbELltKK+zBiXRFiRxG+b7q3M9xuLdzR8g0gCGNzSM5gNYfqGO9CBT8OHct6oB3KsSDBisUnwsFuISQaRHxDSv0vptt2oeLHMERfRn/FG/Cx01EpgIQG8LP+/i37PKw53xn6sYCM4/JwSRrCnIeB1ZkLsawDhaPKv/njU3wnZ/dBdGE8+YTHSG8+ofGgIjsC19YnwdM/KAnTSsqj6ig7uGgIPw3nYFzhhIIvriAxFP9CQd4HSlnzgxONIdrE7A8ZDPx9fjib8ifgegNIliRgdx95+E1T7+3nQVNNhEzDgGA3T2rEDLduwtPpuuouPcs8swwXFjdTaMKt+jA5gUAQPcf95KJQxYU0cYxEDvsBSmYuukp7AwnqniC9Afa5z8vboI68ImT0t26CvwBzSggkj447r9IojvCn7U92J/Hw0QSdwZKNNjxPCfSxRqnATkdwpOwh88oc4J8KTSm/wdbZjrc+4iFP8YO0/5JJDCfaijK5xVXevqfg6zGRrQf83chvX4aRfAE//6vv5+6490U4ADdO7QgM/5bcHP/n4OtCQhBEFeDWSvos8DPq8/IwzLzjpa8/U6MMSkBklDm8e0mn3QIY7XG1Om8wzN48y7HwhOK3P0/ZwUQHHv4psbdoVeb9VlAjChBCdtDDpOKTh9ZfcagOYq31RFjN4/gwBYzp8lAwYNwBELhZoxECeZxMlAzWGdCRV0fQWGHo8+8Kx+AAxnCIzowAxy9KvNepWfsfp4RR9kUrD88CPVTuXRybhqqTHcnxEGndsgub1Gdug8yz9fHt3Hpl57x/mfCOC29FOSQ7/noAZR5W3Ob24UMpuPYAYiQrQgk1gnFoUIKr4vKFpV15pHUJO3Y5rfH3UFHU4bGkU+NKJ9f2hJyOMxDBDpjAgwiYqvk5TqNl9EH2Arb6fA3yaA4cBtPWewhkEcIQJBlGzYp6zRmr1v+e3Fv27xpzvyI44NGDkCIi7CGNV9Dw0M8NtHC2vUwHINumCGNG8erxOwtQINsW88Tlwdoc+F85nI559ngEDpt2F/Uu3hiXYrkN/pBFS26hYDAkFgErMK67y9mGBA3L5ore5izf8b3n805MOq/t7XU4WHv1DUF/5gugCSOAIW/59uMwl6CHWAib8bvfxWl9/rBGEMTTwDfG+ezEYG4yk6FvRPuPwE+wvc39IRjENWM+/cm5b0W4Pf4WuKUnw/vD6eDbB1ETs5vl77Dhnm/51g6wPWwQAqxnivgQaeS3gy/u/1H4hpTPrIgHAN0mSgXUX13YP5PMIuQAfBr/f70cdeE+QoCX3i8nFMLcAjInBoAIYqt1LhC1WdtvmSab28AYffaeivCB+ohdYQgfUa/WS4ToMsNLHLc9nnvPZLwn1/EefPVf+U/xvnCVSEQEkEQEnEQJO7S7RvYDxNeNYKrG7DKMhtsQ8cMmhgPKKKj+F7CiHYFR5KIIPxOmg5IVAtu3ACQSPh7CzUQOgAej5CWEkIe3vgxz0ROGO//qYfz/dnLT+ZxDr4QW0eNCJBorCFOVC312Ec2TiY5Bk0cAaQmiA1VH1MOwDHQ0kHdEDDf+2UTWhS4Z8diQMicLx8MLBfverLcP/jQzF0P8EJj5+NGK9RCz755S6F/f1+X/gxeP+Wsedv+vF8/54aSPJYFjIQd624MDz/UDLQnr8HU3ztKHRf8Qeno1vyAQJBaLcMtTV3cvgP56COCqd/QP9xLgBkH4BxO13n4hNUDtACC6G1S3zqooZ6Ba4lp/zcAFb7iERKQwQcF39IFJjdXECGADw0IE4gg674pYAnk4HoHPx54tD5daO5vxrugSkMjgiiqc7TVKAT6AT8R4ckbHEQCYR/IZBxJgA+XZjsR7vaoRpIxWqeqfXuGC2CxwudicwePEB1kNkaZCuwyF0DuKv/4sz9mzP/Qxdg3BDkBTMC8Q+loD6UGBzx0Kz6eAX/KArOQTlPHFoI4vVtf4rNuLrca9edRn4xBP7k8w+9AgZCgBfEUZWfEs8iFNZ3UO7TqmkjCO/rWdgco/yIqHcQWaC2EGTzgz5y/iXQAvyx3riyxxV/JeBriaGB9OrTA5g9/eokM+37GszqfA/UZk9iW5UnCtBqBl3XoNN6Ag/+zy6A5evPAp+TIFDn15gQw9rjrOzFX0s2JBVAxa/nP1a6AsNWYGjPNGPLTQgBsNUFvOA3Ht9o/rGDN0tWOCcxJGp+f7++kkP7PxcGv1+GjkaLt/fawpwwerQxBJNW4b+PJsYEgiAYYdEAGIlDNaAbRkIgK3ut0jKByp+8yz23X6GttmBmjwDvChgiYLP5V/zhH6/110sGcKo5CkggCngxnIPoPja0j2B+1BRkiYJiviaLJqghDI63G2nAgAxMCuDdnoD0wIQm+urMB3VuAwbBrFGgGgnhAFqg9+ujKsLxB3qGCQNEEtPinIQlAj4WgIw7/iXc9V/x/yUWFs2KH504bAh4aYWf4TrTLGTy9YbftyLeVOWNfYNyt/ji29mQnqMAltU3ioTtbX343yv/1u0YPUBz6zB702tQucnX0gWaFh6DgPdmhXaapGotw0SFz1qDiTMdd8h45HfcqCPRUhA3+NmKz1l9teCPaMd4urGaewRitNBDdahR5c3AfQmDCFT9vmtQEwqAYXX4XI2n23Z9B/Yb1FL+LWox6wHGbZSo6FR1LzyG+3hriSZvWT6jfXhl2cmQZJDrAbuYAqAHo1GA/EOgD8eGcU7A8eDvH4fQBuAhBL/Zp/vamPTrRENDGLTV/7E1WEPLDlP/PwzU4YhusIMUgfIPAr6Dhv5R4y2r8ldFwiFoYHnmr8TAHbhRQSZOctH598ZYhqt6wP7q/ouqe77RJxvzFYaji/z4vna4v5cUMDXqDAJ5ytktqtBDckyjvJg04hl16LB0xFfyMfD77PZjErGQRRjYIfSvoAXntks0ok8MsUC4KARWnYPlJBeIgLeFrUgDOHYCag0/XNAbWgRwQuLAsaQwIhC1g7+jCNKuT38JfnYSyTi+QQEwwHeT4/dWHYxJPxfOj5oAnRQqgU3YgGZSOaDyK3n/qkDYBKptzR3oD6B4fyRKjp2AzSl80YR/3P+/1vBjX18Jbu+YsrMRgbqPP8zrDLTAaupphfeZtyPs9BPztpLSBZjowF3woYRwBwOWaqbev15b7X4RWsiqYiY6ZkFEIoUwUA2OrkeEQE8HYNyD/rl3m88jCGgO/nPW3xy8x4Q/HBcM1dYg5q8N+B/SBSYhtD0EY1PRGLDoKIBHF3yLz4H/gSYQJRETgqeB2d4vC8L2NVnQn4PoVJJAcP0inahAfdXVI8CFszjRagCTtRdV7Sr895NBpRKXIT64RMFw/iw5eChhEvmmyUIH+k+Qu3cLzOAN6ILlFvgWnx3YWFDz0f38ze9GlfP6UQ3ojEY0gtqRIEbA5/WgQFhsEuIeL75uTzvqHktAWfj/OD6sQXssROcGiRgFn0QVkld7OznMDT7CJKzhMIqxW9B+LCOQdH4uyxIcE49VTSeLj0wKjzcp2oDXQA8YoDEGBLMW0BJw+eAxXejPV/IXd59/tp5rVyYXDw5BlRetSpQAcvgfOwVM8ObzBq/AQ2wX4lwkQV3vNhYFfn2LFgaoDU1ogqsfqGkJYmrj9Tr22KQwBLzbLuzDeA9yzyJjVRfwegWq0H+FThDPA6ZhZwX2M2Kh4waovCzAWJTzD/qY00c+6PM8coz08VNqglzx54LfHuTJK7z2rwX35ABLg1DzsZ7Qv7l/f2yXDlbf4C/irg0MJ0aCuD0wP74MrxfdFlX7tq+vtRdCpvt599EG9Yz3V+P+Oj/n4zLruZHcJ7oMt/MNp9eD6HEeFb6/TMfbWo85Pb79HJo8t3371/PuIAZqMvjPC34nVV6ZB4hEuA7AzA5cfU0y2n6ux89D/35/n2/vWY5Bf0qwf3tPLISO1Tap9qzFB6eap/beqI94NCCbGwgqOItY3CGl446CaQ8i2Q9g0AvmgJOnBoAA0gu17tsKtKS7D4udgCYERy2QIceCX/P7mBW+g/7D9S6Mn50CS0eAoQPDcBjopIA5+EcxEjLweRjXq0UbLIjcBxsGx2IZvlf0ATjz/6qypAmY7bhrk4ahsIis6ccXKHdueAfUgk+RWPCLh42c6zEeKyJpRTdRAOqBbl/Wq/uT+q+Fx3FoTIuCzc6+hN8j4veGjuAnhSE5gKnco3A3XwYlq2sq+lmP4yEOpqEoG0M+mGDYuYT0pKCFHgLHKt3T7T9p8GcWH+n1UwGa8X6kQt2x4CeqPexegT6o/Z4Cr313PHdgrsS2ZReLfpKIf+IMFnmVmwxQ9AhithYT73+p2s+JIVfrjwiHnpAZrSsr9CMstQXP1+1+510N/q8E/YoekMN9OMFvi5LvkRDsy9rgFCOoPdpgaQIWBZjf5KCSQszZJ1ivTvLokpen6tsJAVND0NFqb6GUGg2Im4Dyx9Pn7/0dm4pADAslJzTv+dKNrAPQ0wyySm7bj1RQgbAXsRa4R+mBJzpaQmHLmy0BLoL+Nh2ZRca8uUc6P37k97n451fvTieAE8BdZ2ItqFEK6oOJIYPsiU4woo140Oh+H/UC++gatHYcOFT+2y3AYvD1rM/fpxdUcsAi70c0OxAEP45X/hymE9XeoC0zfYhbcqfbhs09HpwnKMDR6g0mmYyKth/UcLl9ITGQ8N1S6s+gA1HvQCc2pluPvN2Br8SyZyfyxPP/VhCi1L1HWX2CQCuAE8TIq/sBYdANZmTIwqq0sb0HIzhhugBeUpBZLFyA8y+EErsBUYDZHYN9QAAooQwOws+uQlhdESSSqk5Qsh8LSYI6LDS1AbmOvLlRBqQIeITvM36+TP63VfE5hFClCTr9zEyVFwS3STQBy66DMHB+PJWIrfgGnYBx2dTboPa2X49GaBVlePA7CFx4iaGi4ns0aLVjMGvtPTDtmO4XEE8E5Kb/8qYai+NHl60LgAICcUCoJPVeiYG6Pxw/X9VFNVbFn9FNPzXoIRDTyzcpREYB5Fm1EQQn3KRi9wKApR8Tz48SwxnV3qM0q7ZhpdKvr0zfY+gO4oQf+EGPFYW/Xf5hwWsUgxiBbShGoGIx+D2eH1h2EeR3UQMH4zMaUKr4033nzkSkfQADelFbLOQCalxdxvN8mInhPas9bxtGJw29Fx3Y8429MAS0fL33Oeo7qFZeiToCC3B/VSNYuU0fgDnkhxGgMFdxiYEY7MYel+OHPH30IMeVFK1C79l+QdXVpFqHlMAXEf3EYDyfkkGdNvJ8f3RAXU0jpgM7jMNA5yCrtfzOicKG/M9bgEkEjqqPPDEcDfqVwGZv6zcO9avDfOhf4OmLFd9OLBHHdxp51HvOBlnAoQksYjASA1xnIhPsapTCPjbsGB2YevpPpgM73EYeSYIftgPgte6CWesVBB9QEgfnWYMgoeC8ql69bWoRIqYHvSIv/u26bj/jdqZ9KSGk74JRo6QS9PuTiSHm6Z62kLUGH0UO4rwWrhtRETkR4iKRdI8giJ2D2nUCMjsA0TXiVDb98NAf/rCMlajA9wesWHZrAe1dlwRyVI2jx4KkyUHSx7YDe6YD4tOC6XW01puEdAJwaEJzf1uATHi6ZlSCpBQscsh6C1xRcWEG4bCFeKcAVhVlDu54JQIkTT21hptIT/Afk0kMcS9BKfjBJozcDXCrtgbWXxbMAw3INQIxtQJPAGwXmYaBbYh4SCsuKwLOAQ5awKskCMmRg8P3xwlBfbosQaDqyZqBkyQe1CLQACoTgN4qbyHsPwkTiF2pYaj6MAXBmUosQHnUEYCsBL3MW39SNKMJ5PfoBsT33DVJCEbFnBCMOkHfvj6Xq8uw+dgRIhGgAiUqf5QgKDFyhe8nnYrlqn9sG1GoAfirubygX4H+8IM1CmQrMFAJ5ExzKIp54nPoVU2Auh6eBShDlTV4u5c4HE/fVvjFrsII0Ik6QX+Iq68jB19ziLoKC27FYe0gC+j1RSS+BgB7AvAM3m8HLdy5fV60C8RMVuhD1ieQB32MCCq0QPJuvuw5IHF/geMKwOPdpmsxBwVEfGEOgeincJqNmuSFIPhPq/xM81CWIIi+gCFBqDX3QPYd2OcCRo6GZBoA3AM+00aesAOQ7/2Pe/vBCXoguD4OBD1WfPwClzcui12AuH+gC0gEwW72KfjBCQRBr05D0IQc7N8PzOCMehPWK384MPVDJQim7yDdoiRTItzzFV/ZOX9sYFetP0fsQzb6O7wOoFjxk89YoQXv+BmSN+yYHYO+BsDRAXHhuJXsEFbdIEGZQWUkNVNzGA9NZUVBIQL7jASR0AclE4Pb7JN3BO72mG92+o8UG3nybj+mASh0FsLKn9GPxDrEcS2Au35BzHO1BksriIJdpqWjKR1wlpR4fN977rZqI+XbYjYDgVDpcYQalOYKMiuQbB3G6Pu/HlMbi9a0EMkksXtjvvXTfgMKAEZRN/i/O7yD8Da2S2Bdh3ICWfp8yuMkYl5a4df4vVWt4UF0yyqEnaT6swYyWB8/j111Y1ERS9oB0SLMtBGDEBD1PEHwtdjUEAHnqmoHU4wCDAoAS+lHwtu9eQLUAgmxVvAuMB9cELMV3m8EUtcBYYI9nkNIEEJYrQeUHfnzzRyC39j8CgSkir/E0P2odnAmAqDnDIhqrtV9BDNS2POjv/0pwKr6z1h/PMz3uf9ykFYq9TtoAXSwpz0HljdvBCVAPY6t7osv6gFhMpkX13rcfXQMIpuTsfTibkfOPRAC2meLRipI4mDPwMD5x+v3+Ey+qEfACwoUEkKQSMZxYJDz9R68PyP43yvo2aYf881rNQbZgRU/jp80QnW/hdXqJxMvCFxXQSNHpE8QiF4XI+wFfQcw7VL2Md7RRajsKgh2D+6SLAKPF356+/7yXYBTUgFy/38StUjFHweD+iiHh8/LV/i/TSvGk4L5x7F6AsIKbgb4C0YjgdGRIToGUx7cgS3JKP8pRcgak95BJGQbjaJdBYQ1qHYnYHL8F45QgHx2gLMQ2cDxBD/4SeR0LSDi5XzPQNjM4ySE/HGG6g+ugltLNSARn281BPtNO72eJLjdX4ITSEgpQvJYFEUg24f1qAYQNQdxx6Q/RcB85j9f+03zf2QV33IDPHegNgPABTfqFR8cZK9TA7/ll0EQbUUHW8Gr1d+MSadia+LRHwhunv87yWoJ3h/pRDwJAbDNQQFd2P2mH4kP/wDT/ZeN3CK3+ZjvgVpw4r20AMafb58j4N1UMknuj6iCx883PU9g2VHVH5JX2eEcPghSgRBCKPzK0Q3fknwPN0Hk0CyC0zBkz//7duEetgFjVtypASDI4CsknYJgYDhqsBxxy29+eyxrAZX75EEf8f+CkOcijMDDHx4ASYGGu8WHgPwpHJc0qOG8FgFTuVk0cRZVePFwHEIUEu8xSHoL5qWg4I7/HgOKXe2dcnu2SSdCGIDTA+AcxY1zYL6Q6AAFu+/1GvjKPSeEoJV3NiM4Dz9C6oWkEav+NWjPWXNOIkKgNTi2I8LeBgaZHJxqrC4oNXoB9pzzMws/OW3ghSyQJgjbygOVEDhoj4nHLld8HPD6UUMFVLIgKrTL7cFoBRLQgEdXIseZ2/HhFPKbk4d5tYWwwR0nIFQSD2P5gQhs6meVfB+Bkyz2fOIvX/zxqsSODuAGIOLtPNnmIPCrv6Kqvgz3q4tCwNl9lWYfnsdHj2HTgQw5IBHwULmfSu1jEV3gDFSxTBmqSEVqiYK2IkWcRiAkwV/cyW9YhqHXDw9dkNQAcO6HFNJT7oChfrPUYc3KY17zAd+evAwF2w5SCKLV4EuCEKsKfjBVWHu9Q9Arh4CoBqEMWYBsNX7YgKP/69uC3M7/mOOz232QT+ox4iCyJGEFP4oBHd+GVvXBwX35nqp7qeIbV6L6tdZub3ueJ+gBIKgC6S5gOQFxDoGr+Bv2nzqbknd7ph/EmXzO0o+kZdc/wqvQkAOUffVMzKtYgx5Vob1/+HAfCdzHSiXHenX35/2JTr3KZ9Ruj2lYiMhLIFoNyMq9hFroeYMTE0bSLbhb4l3YlFPa6hMd2jk8dmrDgdQCnC4/+ANFlYTB6ATlx2GDGXP1rvL+SnWHw+cJes5/rRWt4H2pw9GklD4uSMpwasIQiaYR92gIyFX5S8dtRZt/nCAH48VXW3hRE/HKOsGquj8EM85Q9cfeAV4XwNGAlmIFIwPYrfLKuxV476RRetzcdeAsRSZhiHizCKEIOHn3EMOWy5X4uIJnXX6sFiBFLaBm/THOQAkVJK9j6TKwiSDTBWpwHkSPQJX7U959uAkoaTUuug6oQCBz1Zlxm0OJSIoIw04M+7zCGuYiznCfHww9AN6Ir+HXA7lfn2oBSJ2FOOh8SzINfmcAyITq8JX/sOMPx6A9LeYtVfwgCBZhdu25OB9/XmWWNPUEPD5dUuJ68wd1AqD2+w1PI9KxE9BW5t3z/igdYGWiL7L+wPv9jgVY8f0ZcbCKCuLAHN+c5wa69Zpr0J9t2KnpAGzyiAIPiFalJ8/xXrrA6Y+/8NoDnWCPNwFJzf5DpVkHte8hx76P+HU1+HEytEeSEIzAsu5r6wPJGu6oLz8VrKofXLce+ywIHhNa/Dmw8LrptWXZ4NKZm4pr/QQ7Qk8ehMrPtAF7PQCD309QgRgRZMKgAbFREAfBBXNalbHA9cEHMo4IgIUuPjjBWEUFEQpYTkhVO43eRiynJw9Jjj8TOUIlJExK+0wA4gWgQvcFBHAc7P4/u78/Ff4CC5ATB3P3oUwFClYgcALcxzp/B9Ez4DUV8RjBbsCBrMH4dLNwIDaCGhA6o3pXksdBvYBsktrXDgNJKAFy1Z+ZGIy5NXgXoBT8a3ZgVSPIUAMV6DjLxhsV8wX4n4ibbONObHNyCr8Z4FinNFjg8ziiF5zSV8A99u7Zdf5OisvVaAAAG3VJREFU/kIPAJLWX3hUIFD6o7MD4WkHIMXBk4IftSrPNBJVk0OoC7ice8HGS8XBKDoz/YFBLaQi392lGpCMJfhD9xVkx5Xbj73P9V4m1j0v73x9FjDDPlYvATkgFAVWcdNvJBamliOjAwRV0EpeRymAe717kMYRyy/j5FwFBX0fP7Dyx8gq8wn2ZXi8GfGYR+lFcGJSxa3Y84WgzBHetlU4cvKY44Ps4iP9fsgsPGEhQTAcHqwwGCj61SoPexKwasXFqtxq8qhD9SixoBBYcJEDNzmIoi3J7QkoJActVHocTVpPBCDhElAvMDK1PT/Sq3DwB/ygmyB9GNhYDH4so4Foy48kkPtZfZEv1PQTxYpyX0EI3Bu+/5krcN8fgwVdwWu2JNVNWAk+PcOOPMNdGFyAZ5Aj6gicgzNfwuHZg0HrLxBWfjSRl88fVCo/apX/IBrIvf65ZxtEoK9Bec4KZIPLe76osQns46NwW0pUPCPAyMc4A/KXOwZzFLGbAqD5xhhbgBcWfoJBAlarcCSQgdQJ+Movnih4gjZQTw51rz588y/ZgxVUEAQ8soCfX8OR26JwujCLGFAMsOjnwGrlPuQw9D/PPv8BYVR7pG/eeFtQpsLzR2KFI8SwKj9KlX++HeLOPuSBKrKeHBi7L4b+Kx184+ptAp4Trcscv69oARVYzWgaK01H1X0K3zNSmARKtxXYHvwJuT+8gLGGWgpHcWOmBeljFB2Ckg6wiAYOqfxEK3GMCAj6kIiTWdCBCXhkjUKMgJcLk271N9uLSbtvvK0S69OXAvoA5z94VsFubbmZvx4QAnXgBnJxENyQjy38wef81uPhxMpPJIQzr5ckuUTKe0wZyN57iFTWga8GvCwlh5UqvYgmaNV9XSxEVWs40kkosFwA70RgNOu8mLZfR6wDiwRa35y7j08NksqPQhcfkRBK/J8R75Iz+9C8gJpqzwiIeZII3QnYOkJWbVEI5jNuA+o2BwK82ifwnpSgHwaC+GNAdmW2VXfC+vPu6wR6lBj84C9WfvivZyUhZMJlJhjSukDlFJ3g4AvGJfC1iEpQJ/CaEd7G9wds7p71+odruKrHip/C7RdsxeVjzIxhoNkFGOW/+sk/YVAGtltfzZAIfzix8gcHhZCXpcGN2u69qWqD9OlRFAy7x2fQBhHUiETB+DocqvArYt98f+AEAXApsEmEcNLC0t2uPHCqPQIXwHYDfI4/9+8LMpchqr5HK39MJSrBXwnutNqjovjHFdq+fcHLp7YLR4mGgduW5hFpAXUoL4cTTuW5HJSkB5PC0S7A+8c+837DyoM1J9iv/po/o3BunlDqPjOSO/YbLFd+FGy9sxKFeT8b+nLNPrkAyD53FtT27yUS32yqUaEGTMBiASGcZ0FmK8nWxbvjC1q6WQC4VdWdAcBY8eFoAzIrC0b7Wt8wlPcIdE1FhUWeKU1Igv8Q/0dl4k/NnYSxdlDon8diUDeuQB4c8XVzcahRgyyZmNC+LAgeCfSVALde8/t1DCYawNoePGT83wlOpFUdOZKwxn89OsMEf0X8CxJCBN/dwKbFwkSMgx0ACJJDJD4iC1JEYh6XcEqVHpx4+J4I4UiAl26r5x64sttvSlAn3LBuQCz6edU8C+J5epBrC4YP52EFDgHrCw1B0eU9bOaTgh3wmYvQV3Oqqcf53XnVNXUBELX1xtSgFrirlII5d3HFulxBCNEfZx0h7K2f34XwdHpuYQcguN189Ow/nPXclaUcqMH5leCXjKOjbv3F0a7i2ZaRHmBe5zwnhA9S736ZC8AH8LHkg/T5znYgmES1dtuzGo92qwHIquiWX+4KgVLd8utv9Ml1BQNhEJW/FOgweiTguCUoQHkEwYhjfQIgm8eAzPKzHqAG5xGiiPyxeGRRaYetUpDVpHVC1T9bHGyaknb/TQTnuG7rDYwYCUT7/cMjtILzA+Go/FPw581F/mWeTkDuBsBCAK8ki+A29nMzPn4Rzjv6QV7xWW4fzQFUxb9jQQ1qc28kMi4mDl1NBr4usIsz5ltZqNm7AeJXfuTHd7nioLEyPBISU+8/tP1AC4Il/n+YGmjg2NiBRdl6yCw//zG5ph7bqaBuz8B4VMU/TqSsNPbwCeZA1cdxyG9SgKzRZPL+GXFOiH1/SFZ9wX8M3zUgvH8a4rMBjZj/h1W9MrwTiN6MlsCKiI4gycBzgV/xUaQGjGDHwHiYi0VIzeEAasCpNuL76AC7BIEl7i4AIxnAfoMxk35eJbZ68wWEUChs8IPz/EEE9BkUoNA4RCWSLJkY1h0Y/dG9bVCtUVPe7QRhtStXG4nOECDfUxc4Uw/Ik8JkA9o9+a83IrfHH11EdFUWc4phNgVFWkPsIHBnCvCCYBSgqEN9qtoXuwHhByYoJJA7BxIkkRwpDGgAHo+vQ3ZGOwCFJCJKUAx4MBpFZWvReeLgtBBkDDQu2OJxXa7SE/P4ZiUPHABjY1DsFIhPAaygWewiXK72hHjow/k8gCL6gKES8qcDZ7A+EhYlWCPGCX1wXIwzkQEKt8cP6iqkC0FEhFj/ZYtvXCtwuBLcDT5wXN+9H6ZEIkTwV/x/s78fXFX3siWHEKrC3tw7EFZ31Ll7ttknQyEMGgAqCaVe1bGk8r8nFWCQQR0h7CY0dsU/mIeIuA1AGCo02Q0YVXxub36sG1Qgfo0CBBUXxap+ECFEycQVyViBEBFPt14TK9rZHB9EwMG7DPXOv0OVHkdtx7OSCXfb3av4CFZGTwQBwT7/hKPHE4PzpJ4L4+FM9r1n8B+B+9R9I4Fu9brYUZgCunZWNxdQgIs8mASBQ4F8hJpEiaf4GPihk8FdAxin/kybjZjTj+mAQy6ihZ9whDvHAWB6BKrBXQr+5SBfqPaINwiz12UIwoTmbPACZY/fshBBBKNlW8ZCHwH/cVKSOZMm4Mxk4OwE9JeB+EFkn1IzcPQoiSB4vGgNeJSoik1A7m0TCmE/HrggB+/1M12C1Z18ACGoIeH1pH2IhAqFWgBq+kDFEWAvA3X8tpW0cnSD5WAOriOHhnYraF1eLTkS8P/QsHUBdtMPnOrMaANJE9AZiaKWII5Ue/8PTHn/UcCSTgIF2xN4zdmAQYIAKeBFl6FiO0aKfq5jcImHfPwTxcEdRmD3LcFoAva1Hdjm9UgGggI9YOoPkOBYLsT8HlG3nucMDGkOOJ8CkNOELdSO7D5qqAeJYBb2GpABgRi2gxLITgrOQ9C937HgB+0i7MeRx3gfPWCXLtgbLJAu/gCFBPzRX8eADJqCvA3FViC/BlOQC4LZyrBq8BdQAOUKoKjqR7v7EFfVFMojPgEoSlJesNIePyLHwW9NRgq7E6HvUN8A0yj0wyWDHRZ3J2A1jHdMyu3hCGwSDwdRir7h9VP7AKLgPoMCgKziOFLtrUm8aIFHlgxYfz8WBYUU55iAXauo+evJaIK/NTgRJM9sUcZRzcCnMdNKMJc7usnAyrpxHYkTRHK+n1HxS01LheAHqRWwKIDqLvQC0+PupHZgBawfVGsiniTVHwZHRqbUI/D4Cd+ftgyLAR1ehkIiqaKFw7MJEwUIuK5zsu4svoFYCFKgBJZACBuppOId2RDkPZas8H9kULcA9a0KTCQDGtpnzT+RMJiOGseHl4BQ1C29AWUXIIf/OIwwqoNEK3SCuA7FRiBrE9B4/PcrGJ1OQNj83F4Xbol/TgVHfMiIZLAdcaVkgh8sLrd+liNQH/FqsNTfj15m1J0X+ffZuq/gTY7QnvIfJz6UzBJLs83ItQpt3RfZz5iuGfNPajpngUm0R8DoA5jDlzsOTAwZjzsC3Jjxg7H914PjlcskGdghgx9HG4OOQH34uwQyzz61/0qiYNQjXxECuWYbGM/DrjtPH/Mw/K+gBLLSA+cEfPr4MroArzcDuybbr8Zc72i2UnzeHnTgzD4Ug78SzIvCoARVOQxaFFR3TzWnkkHUVFShEuqKxZnKz4p4YYcf8ZhYhuu8wFgSHcuuwCJagI4bgchJQK/qe9c/RT6nGcg6KGREJpb+MI0EY/b0jcsni3AJBeCQNsBOFVYoApcM2Aom4VFgIRdHpeIG8D3YaxBD+qCiQ+rBOSVnci8hzkAG1t/pgHA4uwDzmu8xFKkkkIqCfkIRs204r/hiDgutoAAcowBMZ9+KS0CcXVBOHCvJw2jMQSJyeoeExF2DuTuRcuWAo9sefyUQ6/oBaIjPtiRH1KvQKvygAHb171d+vc4GRMDPoxN/kL5pwlVh1mBQ1quQJAJ5j0TgOAis+h8d3mnC8xTKE34+8sDNjyVXE6nFMN+H39TQDmocHScENvN74LoGScGU4f7g6IG3n3C3qnG6JBS+Z5tHOOzRYQx+u7MZmAl0OSsRLAS/VIKfRAWU92+12aaVPksGDBWQuCMvgNy2M2Mt8EwqbjosZAec5xLEAmXmcFTHiOWARWglpNpjdEtBQRxJJU5VL5/7F1X86XntXgUK4q+KggsUoIIK8oA+kgy4+zLaACqQGTVOX6MBWdehL6BxHn+tlyBMDGAqufd7WOX5WTJwKYDfXJJP2GXDPk7Tj5Ed7BOG7DMFaBRAJgI/+H2Ngeb2SKb0zkoGlQBHkefDr7xMA5HZeJPtKIzyApI9gmnPgf1c3mulfhe0gFekDCdNFnrOwi4Gs6eTACNjB+Uegcgojog4V25P8bctRYY6RL8AJklE9ACFAGZdBEahd4d4CmghFhbzcwaXYH5qTlS6DY+KfNH5Avzjo2JJ0poDkSCMxLn73H/eB+ifvgvyIFCWAji7BWC8hd0qj0FziMdrS70BlVbgamIgcmotGZDNPwm0L9l5iHv7WRoAFx57ScFS2r2iwot8oKu8l+TOCOg2mZ2nFdjTgOFQENzKkJ8OjEnsE8f6AzyXwT6MNF3RDRnuj0Lwo6wTlBMDIyqaz6G+RiLJMg/KUrQV/rh9uH0tWduwoxmky0kSMQ+rnXxZsGadgnxfgk1pCnsIsGYltvfdzTOBIclIsN8MLAGcz5gBwj94AE8DuC9Molip/JGwB57nRyJiyD3pyk6q5ij+3TzRLohcqyqCEQBTepF15+WVmW8SEr5jMUUkx3oMIsrH3ndwAQganKzyMpOJNxMQooGBYwcByw7axIhgPRGEr6GSGJhkAELoQ1YRg+dPeD5IIRDIqq5PA2Jh0Rq0YcS8XBi0ghGRFpCtWTdum5+yLOsQf2EuYY8AfnbQZDgCjHxBSKwTGpt8QCIDVH3/4H5OwEvldhliINwAFLsEyyIfGKV+vm3eEehVqKTdNxtDiPoLHCRiuwTJxCECxMDqDjTvZ63KaPKvRgV2i/F3ohm88V8LN8hgJcXD5pVGIPPNn9EBqSQC0I4AMxBUcQNCkarkFgSn/oCs9GCVep4eUG5BRAOcQOCWlGSc3If0IFqRfURQGRrKewPKEJ9sLnIowKCcw+f48N6UHjqYtgInaCCkBbPSj8VEkCr2g8U43wY1xX/BNkwreQrzg+oaJghOCGTU8RBxuIp6VFOGoEXgEsBLIgV6gBgxoLSI5CgiYNT+GBHsU01GthrceiMUtv9KgAYktgVNeGrBbtiOQVi9x8WjiAW7UNUnm4Vet7WtsFgDCDYEwQ/EVL1PnQf/xCDLTowTh4c4HPRDoQaiwhKIAae4B7xgCBydI/CDPOrevK0FR4p6w3VfoXgQiB3T1N8Y1PCD0X19JqcHGfzB5WkQE4p/kdeXBcEVUXEIFqSij82lMyrWq/7c+LFHA7z5/dwOHHg8s/Y8C2CmhbmALtare+4UWLfb25BmXABKABTniC8gRAP2yvDAiUAsElnrxFzITQa/sAFecAOY7zPV/8jMQHSbWAiUPGkQNABhw85xrSCv+mMSzFR8+7mjw01A8f4F8S/td4jnDHYxpT8/OEyV3gz2+GTfdAeAszswfJNGlQhEIjB0Bls0BKn4Iw7WKu9f1gmSagmvqleEwJwnZwjO7npz1HdCJ1hS/mlBcRXyF3i/M7NxqJFoeH27z7nnJaBmpUZKHsTbGUc1ALEoIGsGYl9ixS50gjAT/VhB8IzvGTrBVfWEz1MzAkRFTtecW731VdjNQPukVdhdn0Y8d/a7WYH6i/TBPBzUFwAlHwtGHOQISrgb1AMUgDETTA3+THAdeRJhg59V/Ektofa9I8wxVICkC7QQSAd2O3cftzPzdMK6aA4iZI4ILfYRbb9RgqICt2AxVnYZ4kkBvHOBxT/zN9ybHx/f5Ql2fkGCX6ANm6F8WCfqAS+Eq5AGcHJd2IFHagTMHAAj+mWBnDXuc81CjhsAi5dL2K8QCYI1aJ/PJtSSxEFXASv7C2I3ZB9/a0j/7nDn/j1pHsz9Jr8fNpxPBUAUUYD4wz5GBlmyAiORjtAIGDFwzSUwqiNZ1d1tPiB7/Q9VeI9KeJU16/knkEeQJEALjY4rkp74fCZiMDSA/PgvT/aT2gYgp5E/P29AKBQAo6TRth5T4VesQFb0i4K7RA2MZpgyFXCEQHCOixuYMPgy2L7+45ezSSKt2oUkURlpXkEMOLSiXPuDQZjk63N5bmzOSxQdLHX7AhwUEA0BAeQPJIQzkAuFlOK/GtyLdiGDKEBdllQ7YouxV2Xdwza9So4Kp5Z0yAgUhTlJgFzSFrznIHYIwKcCu2/L3LsCg6UI1b1/CA+ApIV5/32HqOIjdQusE4azip5Wc1b0q/QGIAlaWEJbXP3r/L+AEipw/+BtkQVY9fIM2i/ZhgVEgJO6DZ1ksVtlYdoQAPhVO0oKmYBmnAYco4DRCRB3TwCziptaE0auER9/VzRqKNOEYINOQg2m1l9GpGNQAhh1v6UmxNQh2M4+LmlUzll0OTjYQOaGlZAEMCrdhmBphaMBwBADrSQQc3//He8KgFETT7p6BHnjj2X9EXsDjrgBS6ihoAmcSQVYmE4JgYWFpp1waAQRoqDzxDhU+HxSnZHz/9JEY6Y5MJA+cwoWrt99+U3Mc/9g/NQTFaigAEtwB1yBzwzucZSX7RZEILhR1d5GDCsBLVUdIQvsldZfEJt5i/MHx2hGJZFkVVyK242iFeh58oBUFqIQbkfp2DV2X0CkAYgv1sU+P+I/HmBu8nErugdRnUWhfp+A/ddlbEH3uQlBsNobUEMHasK1HOYn8BEEvCUaiuigXRIKj+sGOPA4KAWz9/s7WxcgB4+a6/fI2osEwv4yOENAiPf+wQhbc/5f0gGisWuQaRFmGoIqguARWsBQgTTocDLMT5OJUQnhqdCEig+/EShKSEgTVV0MBMnz04BcshPnLk/+OaV0/dwKzB4QUt1NB6uTDfGOP+cNm9mEsBAFiM7AQh9AKVEU75vy68jeOxrUC4mDEuYO0oLqoSdHaEF2eXYYSm0V+oEOwpLmYFOF3Z4CmAeBTIGueiIw2xoKPzDBJVBXQ5g5O8/twwA+QguIjJt3+g0NQEcDfUXgO5gsqlTBLkQLdl86K3CWneitQ8sg/5oWAUJP2C3V3RoEyji5n4b9lB4t9pz2CA+cAFn1Z9I/uzYsU/ELtEBOCHYQQqGcFejV+yeuRJX31zsKV5IGjway9z6PLDxKwNEPsBuOEiqw57jGgOtZ1Y++T50AuMFl7hPIbhskiOwsATtRoc7rS7dXrpcgrMCGJca6ELJo+Y0be0BW5ZKGcFz4y8W9BduwcDnK9iO5fagsKpp9ANnvDPxeP8THNyIVFo1AMas8Qk5v2Ytm0LCCYAXqn+wQsPTBh/5Bcnne14Os3uCQt28vsK1WUESJFviBgAW//3u9PLxusXchcCR2WsNzv/ImvgZzzkUByDUAIrjTvmSHAowpJBQE4SUlxMxnARlQbIqkArVAJ6pBBvELCCKlkyCDAP45BYfEPfcUpfMch3Vn4bheYK4E66BxAxHSVd5INgEPgU/NBCDfNQ8Ho1CoINAPQAW/QT8OCIZlNFCB84XhoDChFByHGjx35v9BLgyhmojqHYb5QYXnuAecvua0hZe6BV9f7v4ibvgvamrmAc1TmaEir0LQ9h97eYAYVoM/nWA60i8Q3Ifezha9BqaaL3zvqd6IAuwwLSCCuCLuJWch4h30giPtyiAphKEBcCu9BV5wwzkMxID8rhMwdwMhcSFgrBT3RUTQboAUg3+p+Qe1IGarOioVnazmefV3lHpwA0AcLWCahUiXwePHWJsP+GH1gnp/we5KfOhJAbsj0H/BIEb04TbrTPsAyb2LLu93KwfCvn5PLAwrOXAa72eEQRo1CNdw5IprsAZ3hApy9zlcITG2vpCihsRSYxNS+J4vdBZ6B52eqRcQ/QXmSjAWSfa/5GA5qEg4iJFtm624AqXLrSA2gx8p1Mdqcghv41S0lSp/xAYs9gakQc4Ie2RTUYwYgt748mV+FU1Xgp14eW3XYZ6cdqGTNHwHICTwEeTPl0jEZwIgP9gDEaogeg5IHWCF+1eoAhvEKPB/EAeTRsM/pSAP5wjWEUMM1/NJRhwJbpJSgK7S7zF3EOsI5jBQBK9DV80Z8Y0COzvmWzJXgDl40KEC6cqvqgi4OB5cpgLFYK/1CvDiItXqC6/S87wfAUfPtxqfGNzlYaOjlf1IsHPPvffHgDAoEeEST4ZLZUd/RSo91/BjXY5ggWgQ4In3fyj4mUqPrInHOCLKO3wUwRsfyXpt1nEIRLrqcWeTuk7bigsbid1zD4iDRQtnIdQsyIXnFCn1I9D7ADgxEhOvR5AJosoUbu1FkJyYCi9OhQERoIx+4AX/YqUXQhtYEwKN4Cy1HntLMmtaAQpqfrT/UCoLSxeswjA5UWPPi0mjajUWxMTdVusNvt/ChMdmILK5IRMFu90BMEzFYHdg2GAgeYVHMMJIBTA7EFTx/5fpgTFXz9w/en0ZjD8kCDoKPNGwlB01BmoWQbh+AxR689mBponGJOr9OwmMu3dtJ/ylW1Tik4ElUPmR9RqII+pVhD9ychABMQ51gOIZg+/G+5mGIzLB1JJC5WhzYjhJ7IWmLDpA8jzsAafUPkB2WnFBF4iSxkq1ty7f25rv/+EQLOxs2oUdTSA9HIR9swdBlCcFe9owPC3XWDDC0ISVzsEVbSCF/sWdA5Fu4HJqankp2SeQCYYrImNalfmhpVxYrGkUS4LeSUjg8dD7+D7w/ybIfy7vlB9/HJ978zr7/45Qgajzj+4EjIK/ULHPRAOlKr/aG0AFcqCyu0GcW45Igh6JMJmhA49/U+cEssHNJhtXDC1MOya3j/sAiAGcrEtqtgjBD6wEzSDc7D8o6C8rIqAZyPk+NQoNLAZ1hR64Yl1FBY648smUYKnSg1Xwk/0DyRyArByMUobyByhCcPnOaPyoegREFS4jNfYAw+IHCjdC1J2WDZBke/OyN85J24WiXwDYPoJyYuCD238ulvuzwt6KgHf0shWKsqCFFGjB/w8HU8eeTED9wAAAAABJRU5ErkJggg==", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      Ob = bb => Eb(bb, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Gb = bb => Eb(bb, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var Kb = sb(39524),
      Zb = sb(36656),
      zb = sb(39576),
      qb = sb(39726),
      db = sb(39781);
    class Ab extends qb.b {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let wb = (() => {
      var bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb;
      let fb, Mb, Xb, nb, mb, lb, Qb, eb, Cb, Nb = db.d,
        Vb = [],
        Lb = [],
        ub = [],
        Yb = [],
        hb = [],
        Bb = [],
        tb = [],
        yb = [],
        Pb = [],
        Db = [],
        Eb = [],
        ib = [],
        Ob = [],
        Gb = [],
        Kb = [],
        Zb = [],
        zb = [],
        qb = [];
      return bb = class extends Nb {
        get useEnergyConservation() {
          return (0, Jb.d)(this, cb, "f")
        }
        set useEnergyConservation(bb) {
          (0, Jb.h)(this, cb, bb, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, Jb.d)(this, sb, "f")
        }
        set useSmithVisibilityHeightCorrelated(bb) {
          (0, Jb.h)(this, sb, bb, "f")
        }
        get useSphericalHarmonics() {
          return (0, Jb.d)(this, kb, "f")
        }
        set useSphericalHarmonics(bb) {
          (0, Jb.h)(this, kb, bb, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, Jb.d)(this, Wb, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(bb) {
          (0, Jb.h)(this, Wb, bb, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, Jb.d)(this, ab, "f")
        }
        set mixIblRadianceWithIrradiance(bb) {
          (0, Jb.h)(this, ab, bb, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, Jb.d)(this, Tb, "f")
        }
        set useLegacySpecularEnergyConservation(bb) {
          (0, Jb.h)(this, Tb, bb, "f")
        }
        get baseDiffuseModel() {
          return (0, Jb.d)(this, Ub, "f")
        }
        set baseDiffuseModel(bb) {
          (0, Jb.h)(this, Ub, bb, "f")
        }
        get dielectricSpecularModel() {
          return (0, Jb.d)(this, Ib, "f")
        }
        set dielectricSpecularModel(bb) {
          (0, Jb.h)(this, Ib, bb, "f")
        }
        get conductorSpecularModel() {
          return (0, Jb.d)(this, Hb, "f")
        }
        set conductorSpecularModel(bb) {
          (0, Jb.h)(this, Hb, bb, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(fb) {
          let Mb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(fb, "PBRBRDF", 90, new Ab, Mb), this._useEnergyConservation = bb.DEFAULT_USE_ENERGY_CONSERVATION, cb.set(this, (0, Jb.m)(this, Vb, bb.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, Jb.m)(this, Lb), bb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), sb.set(this, (0, Jb.m)(this, ub, bb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, Jb.m)(this, Yb), bb.DEFAULT_USE_SPHERICAL_HARMONICS), kb.set(this, (0, Jb.m)(this, hb, bb.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, Jb.m)(this, Bb), bb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Wb.set(this, (0, Jb.m)(this, tb, bb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, Jb.m)(this, yb), bb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), ab.set(this, (0, Jb.m)(this, Pb, bb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, Jb.m)(this, Db), bb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), Tb.set(this, (0, Jb.m)(this, Eb, bb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, Jb.m)(this, ib), bb.DEFAULT_DIFFUSE_MODEL), Ub.set(this, (0, Jb.m)(this, Ob, bb.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, Jb.m)(this, Gb), bb.DEFAULT_DIELECTRIC_SPECULAR_MODEL), Ib.set(this, (0, Jb.m)(this, Kb, bb.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, Jb.m)(this, Zb), bb.DEFAULT_CONDUCTOR_SPECULAR_MODEL), Hb.set(this, (0, Jb.m)(this, zb, bb.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, Jb.m)(this, qb), this._internalMarkAllSubMeshesAsMiscDirty = fb._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(bb) {
          bb.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, bb.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, bb.SPHERICAL_HARMONICS = this._useSphericalHarmonics, bb.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, bb.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, bb.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, bb.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, bb.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, bb.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, cb = new WeakMap, sb = new WeakMap, kb = new WeakMap, Wb = new WeakMap, ab = new WeakMap, Tb = new WeakMap, Ub = new WeakMap, Ib = new WeakMap, Hb = new WeakMap, (() => {
        const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nb[Symbol.metadata] ?? null) : void 0;
        fb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], Mb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], Xb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], nb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], mb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], lb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], Qb = [(0, gb.E)("baseDiffuseModel"), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], eb = [(0, gb.E)("dielectricSpecularModel"), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], Cb = [(0, gb.E)("conductorSpecularModel"), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], (0, Jb.j)(bb, null, fb, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: bb => "useEnergyConservation" in bb,
            get: bb => bb.useEnergyConservation,
            set: (bb, cb) => {
              bb.useEnergyConservation = cb
            }
          },
          metadata: cb
        }, Vb, Lb), (0, Jb.j)(bb, null, Mb, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSmithVisibilityHeightCorrelated" in bb,
            get: bb => bb.useSmithVisibilityHeightCorrelated,
            set: (bb, cb) => {
              bb.useSmithVisibilityHeightCorrelated = cb
            }
          },
          metadata: cb
        }, ub, Yb), (0, Jb.j)(bb, null, Xb, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSphericalHarmonics" in bb,
            get: bb => bb.useSphericalHarmonics,
            set: (bb, cb) => {
              bb.useSphericalHarmonics = cb
            }
          },
          metadata: cb
        }, hb, Bb), (0, Jb.j)(bb, null, nb, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSpecularGlossinessInputEnergyConservation" in bb,
            get: bb => bb.useSpecularGlossinessInputEnergyConservation,
            set: (bb, cb) => {
              bb.useSpecularGlossinessInputEnergyConservation = cb
            }
          },
          metadata: cb
        }, tb, yb), (0, Jb.j)(bb, null, mb, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: bb => "mixIblRadianceWithIrradiance" in bb,
            get: bb => bb.mixIblRadianceWithIrradiance,
            set: (bb, cb) => {
              bb.mixIblRadianceWithIrradiance = cb
            }
          },
          metadata: cb
        }, Pb, Db), (0, Jb.j)(bb, null, lb, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLegacySpecularEnergyConservation" in bb,
            get: bb => bb.useLegacySpecularEnergyConservation,
            set: (bb, cb) => {
              bb.useLegacySpecularEnergyConservation = cb
            }
          },
          metadata: cb
        }, Eb, ib), (0, Jb.j)(bb, null, Qb, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseDiffuseModel" in bb,
            get: bb => bb.baseDiffuseModel,
            set: (bb, cb) => {
              bb.baseDiffuseModel = cb
            }
          },
          metadata: cb
        }, Ob, Gb), (0, Jb.j)(bb, null, eb, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: bb => "dielectricSpecularModel" in bb,
            get: bb => bb.dielectricSpecularModel,
            set: (bb, cb) => {
              bb.dielectricSpecularModel = cb
            }
          },
          metadata: cb
        }, Kb, Zb), (0, Jb.j)(bb, null, Cb, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: bb => "conductorSpecularModel" in bb,
            get: bb => bb.conductorSpecularModel,
            set: (bb, cb) => {
              bb.conductorSpecularModel = cb
            }
          },
          metadata: cb
        }, zb, qb), cb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cb
        })
      })(), bb.DEFAULT_USE_ENERGY_CONSERVATION = !0, bb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, bb.DEFAULT_USE_SPHERICAL_HARMONICS = !0, bb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, bb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, bb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, bb.DEFAULT_DIFFUSE_MODEL = 0, bb.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, bb.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, bb
    })();
    var rb = sb(39720),
      ob = sb(36830),
      Sb = sb(39722),
      Rb = sb(39544),
      vb = sb(39774),
      Fb = sb(39770),
      xb = sb(39777),
      jb = sb(39761);
    class pb extends qb.b {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let bc = (() => {
      var bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb;
      let fb, Mb, Xb, nb, mb, lb, Qb, eb, Cb, Nb, Vb, Lb, ub, Yb, hb = db.d,
        Bb = [],
        tb = [],
        yb = [],
        Pb = [],
        Db = [],
        Eb = [],
        ib = [],
        Ob = [],
        Gb = [],
        Kb = [],
        Zb = [],
        zb = [],
        qb = [],
        Ab = [],
        wb = [],
        rb = [],
        Sb = [],
        Rb = [],
        vb = [],
        xb = [],
        bc = [],
        cc = [],
        sc = [],
        kc = [],
        Wc = [],
        ac = [],
        Tc = [],
        Uc = [];
      return bb = class extends hb {
        get isEnabled() {
          return (0, Jb.d)(this, cb, "f")
        }
        set isEnabled(bb) {
          (0, Jb.h)(this, cb, bb, "f")
        }
        get indexOfRefraction() {
          return (0, Jb.d)(this, sb, "f")
        }
        set indexOfRefraction(bb) {
          (0, Jb.h)(this, sb, bb, "f")
        }
        get texture() {
          return (0, Jb.d)(this, kb, "f")
        }
        set texture(bb) {
          (0, Jb.h)(this, kb, bb, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Jb.d)(this, Wb, "f")
        }
        set useRoughnessFromMainTexture(bb) {
          (0, Jb.h)(this, Wb, bb, "f")
        }
        get textureRoughness() {
          return (0, Jb.d)(this, ab, "f")
        }
        set textureRoughness(bb) {
          (0, Jb.h)(this, ab, bb, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, Jb.d)(this, Tb, "f")
        }
        set remapF0OnInterfaceChange(bb) {
          (0, Jb.h)(this, Tb, bb, "f")
        }
        get bumpTexture() {
          return (0, Jb.d)(this, Ub, "f")
        }
        set bumpTexture(bb) {
          (0, Jb.h)(this, Ub, bb, "f")
        }
        get isTintEnabled() {
          return (0, Jb.d)(this, Ib, "f")
        }
        set isTintEnabled(bb) {
          (0, Jb.h)(this, Ib, bb, "f")
        }
        get tintTexture() {
          return (0, Jb.d)(this, Hb, "f")
        }
        set tintTexture(bb) {
          (0, Jb.h)(this, Hb, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(fb) {
          let Mb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(fb, "PBRClearCoat", 100, new pb, Mb), this._isEnabled = !1, cb.set(this, (0, Jb.m)(this, Bb, !1)), this.intensity = ((0, Jb.m)(this, tb), (0, Jb.m)(this, yb, 1)), this.roughness = ((0, Jb.m)(this, Pb), (0, Jb.m)(this, Db, 0)), this._indexOfRefraction = ((0, Jb.m)(this, Eb), bb._DefaultIndexOfRefraction), sb.set(this, (0, Jb.m)(this, ib, bb._DefaultIndexOfRefraction)), this._texture = ((0, Jb.m)(this, Ob), null), kb.set(this, (0, Jb.m)(this, Gb, null)), this._useRoughnessFromMainTexture = ((0, Jb.m)(this, Kb), !0), Wb.set(this, (0, Jb.m)(this, Zb, !0)), this._textureRoughness = ((0, Jb.m)(this, zb), null), ab.set(this, (0, Jb.m)(this, qb, null)), this._remapF0OnInterfaceChange = ((0, Jb.m)(this, Ab), !0), Tb.set(this, (0, Jb.m)(this, wb, !0)), this._bumpTexture = ((0, Jb.m)(this, rb), null), Ub.set(this, (0, Jb.m)(this, Sb, null)), this._isTintEnabled = ((0, Jb.m)(this, Rb), !1), Ib.set(this, (0, Jb.m)(this, vb, !1)), this.tintColor = ((0, Jb.m)(this, xb), (0, Jb.m)(this, bc, ob.e.White())), this.tintColorAtDistance = ((0, Jb.m)(this, cc), (0, Jb.m)(this, sc, 1)), this.tintThickness = ((0, Jb.m)(this, kc), (0, Jb.m)(this, Wc, 1)), this._tintTexture = ((0, Jb.m)(this, ac), null), Hb.set(this, (0, Jb.m)(this, Tc, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Jb.m)(this, Uc), this._internalMarkAllSubMeshesAsTexturesDirty = fb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, cb, sb) {
          if (!this._isEnabled) return !0;
          const kb = this._material._disableBumpMap;
          if (bb._areTexturesDirty && cb.texturesEnabled) {
            if (this._texture && Fb.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Fb.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (sb.getCaps().standardDerivatives && this._bumpTexture && Fb.e.ClearCoatBumpTextureEnabled && !kb && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && Fb.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(cb, sb) {
          this._isEnabled ? (cb.CLEARCOAT = !0, cb.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, cb.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, cb._areTexturesDirty && sb.texturesEnabled && (this._texture && Fb.e.ClearCoatTextureEnabled ? (0, jb.eb)(this._texture, cb, "CLEARCOAT_TEXTURE") : cb.CLEARCOAT_TEXTURE = !1, this._textureRoughness && Fb.e.ClearCoatTextureEnabled ? (0, jb.eb)(this._textureRoughness, cb, "CLEARCOAT_TEXTURE_ROUGHNESS") : cb.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && Fb.e.ClearCoatBumpTextureEnabled ? (0, jb.eb)(this._bumpTexture, cb, "CLEARCOAT_BUMP") : cb.CLEARCOAT_BUMP = !1, cb.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === bb._DefaultIndexOfRefraction, this._isTintEnabled ? (cb.CLEARCOAT_TINT = !0, this._tintTexture && Fb.e.ClearCoatTintTextureEnabled ? ((0, jb.eb)(this._tintTexture, cb, "CLEARCOAT_TINT_TEXTURE"), cb.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : cb.CLEARCOAT_TINT_TEXTURE = !1) : (cb.CLEARCOAT_TINT = !1, cb.CLEARCOAT_TINT_TEXTURE = !1))) : (cb.CLEARCOAT = !1, cb.CLEARCOAT_TEXTURE = !1, cb.CLEARCOAT_TEXTURE_ROUGHNESS = !1, cb.CLEARCOAT_BUMP = !1, cb.CLEARCOAT_TINT = !1, cb.CLEARCOAT_TINT_TEXTURE = !1, cb.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, cb.CLEARCOAT_DEFAULTIOR = !1, cb.CLEARCOAT_TEXTUREDIRECTUV = 0, cb.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, cb.CLEARCOAT_BUMPDIRECTUV = 0, cb.CLEARCOAT_REMAP_F0 = !1, cb.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, cb.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(bb, cb, sb, kb) {
          if (!this._isEnabled) return;
          const Wb = kb.materialDefines,
            ab = this._material.isFrozen,
            Tb = this._material._disableBumpMap,
            Ub = this._material._invertNormalMapX,
            Ib = this._material._invertNormalMapY;
          if (!bb.useUbo || !ab || !bb.isSync) {
            (this._texture || this._textureRoughness) && Fb.e.ClearCoatTextureEnabled && (bb.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, jb.x)(this._texture, bb, "clearCoat"), this._textureRoughness && !Wb.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, jb.x)(this._textureRoughness, bb, "clearCoatRoughness")), this._bumpTexture && sb.getCaps().standardDerivatives && Fb.e.ClearCoatTextureEnabled && !Tb && (bb.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, jb.x)(this._bumpTexture, bb, "clearCoatBump"), cb._mirroredCameraPosition ? bb.updateFloat2("vClearCoatTangentSpaceParams", Ub ? 1 : -1, Ib ? 1 : -1) : bb.updateFloat2("vClearCoatTangentSpaceParams", Ub ? -1 : 1, Ib ? -1 : 1)), this._tintTexture && Fb.e.ClearCoatTintTextureEnabled && (bb.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, jb.x)(this._tintTexture, bb, "clearCoatTint")), bb.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const kb = 1 - this._indexOfRefraction,
              ab = 1 + this._indexOfRefraction,
              Hb = Math.pow(-kb / ab, 2),
              fb = 1 / this._indexOfRefraction;
            bb.updateFloat4("vClearCoatRefractionParams", Hb, fb, kb, ab), this._isTintEnabled && (bb.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), bb.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          cb.texturesEnabled && (this._texture && Fb.e.ClearCoatTextureEnabled && bb.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Wb.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && Fb.e.ClearCoatTextureEnabled && bb.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && sb.getCaps().standardDerivatives && Fb.e.ClearCoatBumpTextureEnabled && !Tb && bb.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && Fb.e.ClearCoatTintTextureEnabled && bb.setTexture("clearCoatTintSampler", this._tintTexture))
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
        addFallbacks(bb, cb, sb) {
          return bb.CLEARCOAT_BUMP && cb.addFallback(sb++, "CLEARCOAT_BUMP"), bb.CLEARCOAT_TINT && cb.addFallback(sb++, "CLEARCOAT_TINT"), bb.CLEARCOAT && cb.addFallback(sb++, "CLEARCOAT"), sb
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
      }, cb = new WeakMap, sb = new WeakMap, kb = new WeakMap, Wb = new WeakMap, ab = new WeakMap, Tb = new WeakMap, Ub = new WeakMap, Ib = new WeakMap, Hb = new WeakMap, (() => {
        const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(hb[Symbol.metadata] ?? null) : void 0;
        fb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Mb = [(0, gb.E)()], Xb = [(0, gb.E)()], nb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], mb = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], lb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Qb = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], eb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Cb = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Nb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Vb = [(0, gb.o)()], Lb = [(0, gb.E)()], ub = [(0, gb.E)()], Yb = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], (0, Jb.j)(bb, null, fb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, cb) => {
              bb.isEnabled = cb
            }
          },
          metadata: cb
        }, Bb, tb), (0, Jb.j)(bb, null, nb, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "indexOfRefraction" in bb,
            get: bb => bb.indexOfRefraction,
            set: (bb, cb) => {
              bb.indexOfRefraction = cb
            }
          },
          metadata: cb
        }, ib, Ob), (0, Jb.j)(bb, null, mb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, cb) => {
              bb.texture = cb
            }
          },
          metadata: cb
        }, Gb, Kb), (0, Jb.j)(bb, null, lb, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMainTexture" in bb,
            get: bb => bb.useRoughnessFromMainTexture,
            set: (bb, cb) => {
              bb.useRoughnessFromMainTexture = cb
            }
          },
          metadata: cb
        }, Zb, zb), (0, Jb.j)(bb, null, Qb, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "textureRoughness" in bb,
            get: bb => bb.textureRoughness,
            set: (bb, cb) => {
              bb.textureRoughness = cb
            }
          },
          metadata: cb
        }, qb, Ab), (0, Jb.j)(bb, null, eb, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: bb => "remapF0OnInterfaceChange" in bb,
            get: bb => bb.remapF0OnInterfaceChange,
            set: (bb, cb) => {
              bb.remapF0OnInterfaceChange = cb
            }
          },
          metadata: cb
        }, wb, rb), (0, Jb.j)(bb, null, Cb, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "bumpTexture" in bb,
            get: bb => bb.bumpTexture,
            set: (bb, cb) => {
              bb.bumpTexture = cb
            }
          },
          metadata: cb
        }, Sb, Rb), (0, Jb.j)(bb, null, Nb, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isTintEnabled" in bb,
            get: bb => bb.isTintEnabled,
            set: (bb, cb) => {
              bb.isTintEnabled = cb
            }
          },
          metadata: cb
        }, vb, xb), (0, Jb.j)(bb, null, Yb, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintTexture" in bb,
            get: bb => bb.tintTexture,
            set: (bb, cb) => {
              bb.tintTexture = cb
            }
          },
          metadata: cb
        }, Tc, Uc), (0, Jb.j)(null, null, Mb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, cb) => {
              bb.intensity = cb
            }
          },
          metadata: cb
        }, yb, Pb), (0, Jb.j)(null, null, Xb, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughness" in bb,
            get: bb => bb.roughness,
            set: (bb, cb) => {
              bb.roughness = cb
            }
          },
          metadata: cb
        }, Db, Eb), (0, Jb.j)(null, null, Vb, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColor" in bb,
            get: bb => bb.tintColor,
            set: (bb, cb) => {
              bb.tintColor = cb
            }
          },
          metadata: cb
        }, bc, cc), (0, Jb.j)(null, null, Lb, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColorAtDistance" in bb,
            get: bb => bb.tintColorAtDistance,
            set: (bb, cb) => {
              bb.tintColorAtDistance = cb
            }
          },
          metadata: cb
        }, sc, kc), (0, Jb.j)(null, null, ub, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintThickness" in bb,
            get: bb => bb.tintThickness,
            set: (bb, cb) => {
              bb.tintThickness = cb
            }
          },
          metadata: cb
        }, Wc, ac), cb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cb
        })
      })(), bb._DefaultIndexOfRefraction = 1.5, bb
    })();
    class cc extends qb.b {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let sc = (() => {
      var bb, cb, sb, kb;
      let Wb, ab, Tb, Ub, Ib, Hb, fb, Mb = db.d,
        Xb = [],
        nb = [],
        mb = [],
        lb = [],
        Qb = [],
        eb = [],
        Cb = [],
        Nb = [],
        Vb = [],
        Lb = [],
        ub = [],
        Yb = [],
        hb = [],
        Bb = [];
      return bb = class extends Mb {
        get isEnabled() {
          return (0, Jb.d)(this, cb, "f")
        }
        set isEnabled(bb) {
          (0, Jb.h)(this, cb, bb, "f")
        }
        get texture() {
          return (0, Jb.d)(this, sb, "f")
        }
        set texture(bb) {
          (0, Jb.h)(this, sb, bb, "f")
        }
        get thicknessTexture() {
          return (0, Jb.d)(this, kb, "f")
        }
        set thicknessTexture(bb) {
          (0, Jb.h)(this, kb, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Wb) {
          let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Wb, "PBRIridescence", 110, new cc, ab), this._isEnabled = !1, cb.set(this, (0, Jb.m)(this, Xb, !1)), this.intensity = ((0, Jb.m)(this, nb), (0, Jb.m)(this, mb, 1)), this.minimumThickness = ((0, Jb.m)(this, lb), (0, Jb.m)(this, Qb, bb._DefaultMinimumThickness)), this.maximumThickness = ((0, Jb.m)(this, eb), (0, Jb.m)(this, Cb, bb._DefaultMaximumThickness)), this.indexOfRefraction = ((0, Jb.m)(this, Nb), (0, Jb.m)(this, Vb, bb._DefaultIndexOfRefraction)), this._texture = ((0, Jb.m)(this, Lb), null), sb.set(this, (0, Jb.m)(this, ub, null)), this._thicknessTexture = ((0, Jb.m)(this, Yb), null), kb.set(this, (0, Jb.m)(this, hb, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Jb.m)(this, Bb), this._internalMarkAllSubMeshesAsTexturesDirty = Wb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, cb) {
          if (!this._isEnabled) return !0;
          if (bb._areTexturesDirty && cb.texturesEnabled) {
            if (this._texture && Fb.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && Fb.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bb, cb) {
          this._isEnabled ? (bb.IRIDESCENCE = !0, bb._areTexturesDirty && cb.texturesEnabled && (this._texture && Fb.e.IridescenceTextureEnabled ? (0, jb.eb)(this._texture, bb, "IRIDESCENCE_TEXTURE") : bb.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && Fb.e.IridescenceTextureEnabled ? (0, jb.eb)(this._thicknessTexture, bb, "IRIDESCENCE_THICKNESS_TEXTURE") : bb.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (bb.IRIDESCENCE = !1, bb.IRIDESCENCE_TEXTURE = !1, bb.IRIDESCENCE_THICKNESS_TEXTURE = !1, bb.IRIDESCENCE_TEXTUREDIRECTUV = 0, bb.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(bb, cb) {
          if (!this._isEnabled) return;
          const sb = this._material.isFrozen;
          bb.useUbo && sb && bb.isSync || ((this._texture || this._thicknessTexture) && Fb.e.IridescenceTextureEnabled && (bb.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, jb.x)(this._texture, bb, "iridescence"), this._thicknessTexture && (0, jb.x)(this._thicknessTexture, bb, "iridescenceThickness")), bb.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), cb.texturesEnabled && (this._texture && Fb.e.IridescenceTextureEnabled && bb.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && Fb.e.IridescenceTextureEnabled && bb.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
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
        addFallbacks(bb, cb, sb) {
          return bb.IRIDESCENCE && cb.addFallback(sb++, "IRIDESCENCE"), sb
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
      }, cb = new WeakMap, sb = new WeakMap, kb = new WeakMap, (() => {
        const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mb[Symbol.metadata] ?? null) : void 0;
        Wb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], ab = [(0, gb.E)()], Tb = [(0, gb.E)()], Ub = [(0, gb.E)()], Ib = [(0, gb.E)()], Hb = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], fb = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], (0, Jb.j)(bb, null, Wb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, cb) => {
              bb.isEnabled = cb
            }
          },
          metadata: cb
        }, Xb, nb), (0, Jb.j)(bb, null, Hb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, cb) => {
              bb.texture = cb
            }
          },
          metadata: cb
        }, ub, Yb), (0, Jb.j)(bb, null, fb, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "thicknessTexture" in bb,
            get: bb => bb.thicknessTexture,
            set: (bb, cb) => {
              bb.thicknessTexture = cb
            }
          },
          metadata: cb
        }, hb, Bb), (0, Jb.j)(null, null, ab, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, cb) => {
              bb.intensity = cb
            }
          },
          metadata: cb
        }, mb, lb), (0, Jb.j)(null, null, Tb, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "minimumThickness" in bb,
            get: bb => bb.minimumThickness,
            set: (bb, cb) => {
              bb.minimumThickness = cb
            }
          },
          metadata: cb
        }, Qb, eb), (0, Jb.j)(null, null, Ub, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "maximumThickness" in bb,
            get: bb => bb.maximumThickness,
            set: (bb, cb) => {
              bb.maximumThickness = cb
            }
          },
          metadata: cb
        }, Cb, Nb), (0, Jb.j)(null, null, Ib, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "indexOfRefraction" in bb,
            get: bb => bb.indexOfRefraction,
            set: (bb, cb) => {
              bb.indexOfRefraction = cb
            }
          },
          metadata: cb
        }, Vb, Lb), cb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cb
        })
      })(), bb._DefaultMinimumThickness = 100, bb._DefaultMaximumThickness = 400, bb._DefaultIndexOfRefraction = 1.3, bb
    })();
    class kc extends qb.b {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Wc = (() => {
      var bb, cb, sb, kb;
      let Wb, ab, Tb, Ub, Ib, Hb = db.d,
        fb = [],
        Mb = [],
        Xb = [],
        nb = [],
        mb = [],
        lb = [],
        Qb = [],
        eb = [],
        Cb = [],
        Nb = [];
      return bb = class extends Hb {
        get isEnabled() {
          return (0, Jb.d)(this, cb, "f")
        }
        set isEnabled(bb) {
          (0, Jb.h)(this, cb, bb, "f")
        }
        set angle(bb) {
          this.direction.x = Math.cos(bb), this.direction.y = Math.sin(bb)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, Jb.d)(this, sb, "f")
        }
        set texture(bb) {
          (0, Jb.h)(this, sb, bb, "f")
        }
        get legacy() {
          return (0, Jb.d)(this, kb, "f")
        }
        set legacy(bb) {
          (0, Jb.h)(this, kb, bb, "f")
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
          let Wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bb, "PBRAnisotropic", 110, new kc, Wb), this._isEnabled = !1, cb.set(this, (0, Jb.m)(this, fb, !1)), this.intensity = ((0, Jb.m)(this, Mb), (0, Jb.m)(this, Xb, 1)), this.direction = ((0, Jb.m)(this, nb), (0, Jb.m)(this, mb, new Zb.n(1, 0))), this._texture = ((0, Jb.m)(this, lb), null), sb.set(this, (0, Jb.m)(this, Qb, null)), this._legacy = ((0, Jb.m)(this, eb), !1), kb.set(this, (0, Jb.m)(this, Cb, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Jb.m)(this, Nb), this._internalMarkAllSubMeshesAsTexturesDirty = bb._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = bb._dirtyCallbacks[16]
        }
        isReadyForSubMesh(bb, cb) {
          return !this._isEnabled || !(bb._areTexturesDirty && cb.texturesEnabled && this._texture && Fb.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(bb, cb, sb) {
          this._isEnabled ? (bb.ANISOTROPIC = this._isEnabled, this._isEnabled && !sb.isVerticesDataPresent(zb.l.TangentKind) && (bb._needUVs = !0, bb.MAINUV1 = !0), bb._areTexturesDirty && cb.texturesEnabled && (this._texture && Fb.e.AnisotropicTextureEnabled ? (0, jb.eb)(this._texture, bb, "ANISOTROPIC_TEXTURE") : bb.ANISOTROPIC_TEXTURE = !1), bb._areMiscDirty && (bb.ANISOTROPIC_LEGACY = this._legacy)) : (bb.ANISOTROPIC = !1, bb.ANISOTROPIC_TEXTURE = !1, bb.ANISOTROPIC_TEXTUREDIRECTUV = 0, bb.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(bb, cb) {
          if (!this._isEnabled) return;
          const sb = this._material.isFrozen;
          bb.useUbo && sb && bb.isSync || (this._texture && Fb.e.AnisotropicTextureEnabled && (bb.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, jb.x)(this._texture, bb, "anisotropy")), bb.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), cb.texturesEnabled && this._texture && Fb.e.AnisotropicTextureEnabled && bb.setTexture("anisotropySampler", this._texture)
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
        addFallbacks(bb, cb, sb) {
          return bb.ANISOTROPIC && cb.addFallback(sb++, "ANISOTROPIC"), sb
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
        parse(bb, cb, sb) {
          super.parse(bb, cb, sb), void 0 === bb.legacy && (this.legacy = !0)
        }
      }, cb = new WeakMap, sb = new WeakMap, kb = new WeakMap, (() => {
        const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hb[Symbol.metadata] ?? null) : void 0;
        Wb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], ab = [(0, gb.E)()], Tb = [(0, gb.A)()], Ub = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Ib = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], (0, Jb.j)(bb, null, Wb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, cb) => {
              bb.isEnabled = cb
            }
          },
          metadata: cb
        }, fb, Mb), (0, Jb.j)(bb, null, Ub, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, cb) => {
              bb.texture = cb
            }
          },
          metadata: cb
        }, Qb, eb), (0, Jb.j)(bb, null, Ib, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: bb => "legacy" in bb,
            get: bb => bb.legacy,
            set: (bb, cb) => {
              bb.legacy = cb
            }
          },
          metadata: cb
        }, Cb, Nb), (0, Jb.j)(null, null, ab, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, cb) => {
              bb.intensity = cb
            }
          },
          metadata: cb
        }, Xb, nb), (0, Jb.j)(null, null, Tb, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: bb => "direction" in bb,
            get: bb => bb.direction,
            set: (bb, cb) => {
              bb.direction = cb
            }
          },
          metadata: cb
        }, mb, lb), cb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cb
        })
      })(), bb
    })();
    class ac extends qb.b {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Tc = (() => {
      var bb, cb, sb, kb, Wb, ab, Tb, Ub;
      let Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb = db.d,
        Cb = [],
        Nb = [],
        Vb = [],
        Lb = [],
        ub = [],
        Yb = [],
        hb = [],
        Bb = [],
        tb = [],
        yb = [],
        Pb = [],
        Db = [],
        Eb = [],
        ib = [],
        Ob = [],
        Gb = [],
        Kb = [],
        Zb = [];
      return bb = class extends eb {
        get isEnabled() {
          return (0, Jb.d)(this, cb, "f")
        }
        set isEnabled(bb) {
          (0, Jb.h)(this, cb, bb, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, Jb.d)(this, sb, "f")
        }
        set linkSheenWithAlbedo(bb) {
          (0, Jb.h)(this, sb, bb, "f")
        }
        get texture() {
          return (0, Jb.d)(this, kb, "f")
        }
        set texture(bb) {
          (0, Jb.h)(this, kb, bb, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Jb.d)(this, Wb, "f")
        }
        set useRoughnessFromMainTexture(bb) {
          (0, Jb.h)(this, Wb, bb, "f")
        }
        get roughness() {
          return (0, Jb.d)(this, ab, "f")
        }
        set roughness(bb) {
          (0, Jb.h)(this, ab, bb, "f")
        }
        get textureRoughness() {
          return (0, Jb.d)(this, Tb, "f")
        }
        set textureRoughness(bb) {
          (0, Jb.h)(this, Tb, bb, "f")
        }
        get albedoScaling() {
          return (0, Jb.d)(this, Ub, "f")
        }
        set albedoScaling(bb) {
          (0, Jb.h)(this, Ub, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(bb) {
          let Ib = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bb, "Sheen", 120, new ac, Ib), this._isEnabled = !1, cb.set(this, (0, Jb.m)(this, Cb, !1)), this._linkSheenWithAlbedo = ((0, Jb.m)(this, Nb), !1), sb.set(this, (0, Jb.m)(this, Vb, !1)), this.intensity = ((0, Jb.m)(this, Lb), (0, Jb.m)(this, ub, 1)), this.color = ((0, Jb.m)(this, Yb), (0, Jb.m)(this, hb, ob.e.White())), this._texture = ((0, Jb.m)(this, Bb), null), kb.set(this, (0, Jb.m)(this, tb, null)), this._useRoughnessFromMainTexture = ((0, Jb.m)(this, yb), !0), Wb.set(this, (0, Jb.m)(this, Pb, !0)), this._roughness = ((0, Jb.m)(this, Db), null), ab.set(this, (0, Jb.m)(this, Eb, null)), this._textureRoughness = ((0, Jb.m)(this, ib), null), Tb.set(this, (0, Jb.m)(this, Ob, null)), this._albedoScaling = ((0, Jb.m)(this, Gb), !1), Ub.set(this, (0, Jb.m)(this, Kb, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Jb.m)(this, Zb), this._internalMarkAllSubMeshesAsTexturesDirty = bb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, cb) {
          if (!this._isEnabled) return !0;
          if (bb._areTexturesDirty && cb.texturesEnabled) {
            if (this._texture && Fb.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Fb.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bb, cb) {
          this._isEnabled ? (bb.SHEEN = !0, bb.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, bb.SHEEN_ROUGHNESS = null !== this._roughness, bb.SHEEN_ALBEDOSCALING = this._albedoScaling, bb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, bb._areTexturesDirty && cb.texturesEnabled && (this._texture && Fb.e.SheenTextureEnabled ? ((0, jb.eb)(this._texture, bb, "SHEEN_TEXTURE"), bb.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : bb.SHEEN_TEXTURE = !1, this._textureRoughness && Fb.e.SheenTextureEnabled ? (0, jb.eb)(this._textureRoughness, bb, "SHEEN_TEXTURE_ROUGHNESS") : bb.SHEEN_TEXTURE_ROUGHNESS = !1)) : (bb.SHEEN = !1, bb.SHEEN_TEXTURE = !1, bb.SHEEN_TEXTURE_ROUGHNESS = !1, bb.SHEEN_LINKWITHALBEDO = !1, bb.SHEEN_ROUGHNESS = !1, bb.SHEEN_ALBEDOSCALING = !1, bb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, bb.SHEEN_GAMMATEXTURE = !1, bb.SHEEN_TEXTUREDIRECTUV = 0, bb.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(bb, cb, sb, kb) {
          if (!this._isEnabled) return;
          const Wb = kb.materialDefines,
            ab = this._material.isFrozen;
          bb.useUbo && ab && bb.isSync || ((this._texture || this._textureRoughness) && Fb.e.SheenTextureEnabled && (bb.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, jb.x)(this._texture, bb, "sheen"), this._textureRoughness && !Wb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, jb.x)(this._textureRoughness, bb, "sheenRoughness")), bb.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && bb.updateFloat("vSheenRoughness", this._roughness)), cb.texturesEnabled && (this._texture && Fb.e.SheenTextureEnabled && bb.setTexture("sheenSampler", this._texture), this._textureRoughness && !Wb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && Fb.e.SheenTextureEnabled && bb.setTexture("sheenRoughnessSampler", this._textureRoughness))
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
        addFallbacks(bb, cb, sb) {
          return bb.SHEEN && cb.addFallback(sb++, "SHEEN"), sb
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
      }, cb = new WeakMap, sb = new WeakMap, kb = new WeakMap, Wb = new WeakMap, ab = new WeakMap, Tb = new WeakMap, Ub = new WeakMap, (() => {
        const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(eb[Symbol.metadata] ?? null) : void 0;
        Ib = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Hb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], fb = [(0, gb.E)()], Mb = [(0, gb.o)()], Xb = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], nb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], mb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], lb = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Qb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], (0, Jb.j)(bb, null, Ib, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, cb) => {
              bb.isEnabled = cb
            }
          },
          metadata: cb
        }, Cb, Nb), (0, Jb.j)(bb, null, Hb, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: bb => "linkSheenWithAlbedo" in bb,
            get: bb => bb.linkSheenWithAlbedo,
            set: (bb, cb) => {
              bb.linkSheenWithAlbedo = cb
            }
          },
          metadata: cb
        }, Vb, Lb), (0, Jb.j)(bb, null, Xb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, cb) => {
              bb.texture = cb
            }
          },
          metadata: cb
        }, tb, yb), (0, Jb.j)(bb, null, nb, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMainTexture" in bb,
            get: bb => bb.useRoughnessFromMainTexture,
            set: (bb, cb) => {
              bb.useRoughnessFromMainTexture = cb
            }
          },
          metadata: cb
        }, Pb, Db), (0, Jb.j)(bb, null, mb, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughness" in bb,
            get: bb => bb.roughness,
            set: (bb, cb) => {
              bb.roughness = cb
            }
          },
          metadata: cb
        }, Eb, ib), (0, Jb.j)(bb, null, lb, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "textureRoughness" in bb,
            get: bb => bb.textureRoughness,
            set: (bb, cb) => {
              bb.textureRoughness = cb
            }
          },
          metadata: cb
        }, Ob, Gb), (0, Jb.j)(bb, null, Qb, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: bb => "albedoScaling" in bb,
            get: bb => bb.albedoScaling,
            set: (bb, cb) => {
              bb.albedoScaling = cb
            }
          },
          metadata: cb
        }, Kb, Zb), (0, Jb.j)(null, null, fb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, cb) => {
              bb.intensity = cb
            }
          },
          metadata: cb
        }, ub, Yb), (0, Jb.j)(null, null, Mb, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: bb => "color" in bb,
            get: bb => bb.color,
            set: (bb, cb) => {
              bb.color = cb
            }
          },
          metadata: cb
        }, hb, Bb), cb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cb
        })
      })(), bb
    })();
    class Uc extends qb.b {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let Ic = (() => {
      var bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb;
      let eb, Cb, Nb, Vb, Lb, ub, Yb, hb, Bb, tb, yb, Pb, Db, Eb, ib, Ob, Gb, Kb, zb, qb, Ab, wb, rb, Sb, Rb, vb, xb, pb, bc, cc, sc = db.d,
        kc = [],
        Wc = [],
        ac = [],
        Tc = [],
        Ic = [],
        Hc = [],
        fc = [],
        Mc = [],
        Xc = [],
        nc = [],
        mc = [],
        lc = [],
        Qc = [],
        ec = [],
        Cc = [],
        Nc = [],
        Vc = [],
        Lc = [],
        uc = [],
        Yc = [],
        hc = [],
        Jc = [],
        gc = [],
        Bc = [],
        tc = [],
        yc = [],
        Pc = [],
        Dc = [],
        Ec = [],
        ic = [],
        Oc = [],
        Gc = [],
        Kc = [],
        Zc = [],
        zc = [],
        qc = [],
        dc = [],
        Ac = [],
        wc = [],
        rc = [],
        oc = [],
        Sc = [],
        Rc = [],
        vc = [],
        Fc = [],
        xc = [],
        jc = [],
        pc = [],
        bs = [],
        cs = [],
        ss = [],
        ks = [],
        Ws = [],
        as = [],
        Ts = [],
        Us = [],
        Is = [],
        Hs = [],
        fs = [],
        Ms = [];
      return bb = class extends sc {
        get isRefractionEnabled() {
          return (0, Jb.d)(this, cb, "f")
        }
        set isRefractionEnabled(bb) {
          (0, Jb.h)(this, cb, bb, "f")
        }
        get isTranslucencyEnabled() {
          return (0, Jb.d)(this, sb, "f")
        }
        set isTranslucencyEnabled(bb) {
          (0, Jb.h)(this, sb, bb, "f")
        }
        get isDispersionEnabled() {
          return (0, Jb.d)(this, kb, "f")
        }
        set isDispersionEnabled(bb) {
          (0, Jb.h)(this, kb, bb, "f")
        }
        get isScatteringEnabled() {
          return (0, Jb.d)(this, Wb, "f")
        }
        set isScatteringEnabled(bb) {
          (0, Jb.h)(this, Wb, bb, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(bb) {
          this._scene.enableSubSurfaceForPrePass() && bb && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(bb))
        }
        get useAlbedoToTintRefraction() {
          return (0, Jb.d)(this, ab, "f")
        }
        set useAlbedoToTintRefraction(bb) {
          (0, Jb.h)(this, ab, bb, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, Jb.d)(this, Tb, "f")
        }
        set useAlbedoToTintTranslucency(bb) {
          (0, Jb.h)(this, Tb, bb, "f")
        }
        get thicknessTexture() {
          return (0, Jb.d)(this, Ub, "f")
        }
        set thicknessTexture(bb) {
          (0, Jb.h)(this, Ub, bb, "f")
        }
        get refractionTexture() {
          return (0, Jb.d)(this, Ib, "f")
        }
        set refractionTexture(bb) {
          (0, Jb.h)(this, Ib, bb, "f")
        }
        get indexOfRefraction() {
          return (0, Jb.d)(this, Hb, "f")
        }
        set indexOfRefraction(bb) {
          (0, Jb.h)(this, Hb, bb, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(bb) {
          const cb = bb >= 1 ? bb : -1;
          this._volumeIndexOfRefraction !== cb && (this._volumeIndexOfRefraction = cb, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, Jb.d)(this, fb, "f")
        }
        set invertRefractionY(bb) {
          (0, Jb.h)(this, fb, bb, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, Jb.d)(this, Mb, "f")
        }
        set linkRefractionWithTransparency(bb) {
          (0, Jb.h)(this, Mb, bb, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, Jb.d)(this, Xb, "f")
        }
        set useMaskFromThicknessTexture(bb) {
          (0, Jb.h)(this, Xb, bb, "f")
        }
        get refractionIntensityTexture() {
          return (0, Jb.d)(this, nb, "f")
        }
        set refractionIntensityTexture(bb) {
          (0, Jb.h)(this, nb, bb, "f")
        }
        get translucencyIntensityTexture() {
          return (0, Jb.d)(this, mb, "f")
        }
        set translucencyIntensityTexture(bb) {
          (0, Jb.h)(this, mb, bb, "f")
        }
        get translucencyColorTexture() {
          return (0, Jb.d)(this, lb, "f")
        }
        set translucencyColorTexture(bb) {
          (0, Jb.h)(this, lb, bb, "f")
        }
        get useGltfStyleTextures() {
          return (0, Jb.d)(this, Qb, "f")
        }
        set useGltfStyleTextures(bb) {
          (0, Jb.h)(this, Qb, bb, "f")
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
        constructor(eb) {
          let Cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(eb, "PBRSubSurface", 130, new Uc, Cb), this._isRefractionEnabled = !1, cb.set(this, (0, Jb.m)(this, kc, !1)), this._isTranslucencyEnabled = ((0, Jb.m)(this, Wc), !1), sb.set(this, (0, Jb.m)(this, ac, !1)), this._isDispersionEnabled = ((0, Jb.m)(this, Tc), !1), kb.set(this, (0, Jb.m)(this, Ic, !1)), this._isScatteringEnabled = ((0, Jb.m)(this, Hc), !1), Wb.set(this, (0, Jb.m)(this, fc, !1)), this._scatteringDiffusionProfileIndex = ((0, Jb.m)(this, Mc), (0, Jb.m)(this, Xc, 0)), this.refractionIntensity = ((0, Jb.m)(this, nc), (0, Jb.m)(this, mc, 1)), this.translucencyIntensity = ((0, Jb.m)(this, lc), (0, Jb.m)(this, Qc, 1)), this._useAlbedoToTintRefraction = ((0, Jb.m)(this, ec), !1), ab.set(this, (0, Jb.m)(this, Cc, !1)), this._useAlbedoToTintTranslucency = ((0, Jb.m)(this, Nc), !1), Tb.set(this, (0, Jb.m)(this, Vc, !1)), this._thicknessTexture = ((0, Jb.m)(this, Lc), null), Ub.set(this, (0, Jb.m)(this, uc, null)), this._refractionTexture = ((0, Jb.m)(this, Yc), null), Ib.set(this, (0, Jb.m)(this, hc, null)), this._indexOfRefraction = ((0, Jb.m)(this, Jc), 1.5), Hb.set(this, (0, Jb.m)(this, gc, 1.5)), this._volumeIndexOfRefraction = ((0, Jb.m)(this, Bc), (0, Jb.m)(this, tc, -1)), this._invertRefractionY = ((0, Jb.m)(this, yc), !1), fb.set(this, (0, Jb.m)(this, Pc, !1)), this._linkRefractionWithTransparency = ((0, Jb.m)(this, Dc), !1), Mb.set(this, (0, Jb.m)(this, Ec, !1)), this.minimumThickness = ((0, Jb.m)(this, ic), (0, Jb.m)(this, Oc, 0)), this.maximumThickness = ((0, Jb.m)(this, Gc), (0, Jb.m)(this, Kc, 1)), this.useThicknessAsDepth = ((0, Jb.m)(this, Zc), (0, Jb.m)(this, zc, !1)), this.tintColor = ((0, Jb.m)(this, qc), (0, Jb.m)(this, dc, ob.e.White())), this.tintColorAtDistance = ((0, Jb.m)(this, Ac), (0, Jb.m)(this, wc, 1)), this.dispersion = ((0, Jb.m)(this, rc), (0, Jb.m)(this, oc, 0)), this.diffusionDistance = ((0, Jb.m)(this, Sc), (0, Jb.m)(this, Rc, ob.e.White())), this._useMaskFromThicknessTexture = ((0, Jb.m)(this, vc), !1), Xb.set(this, (0, Jb.m)(this, Fc, !1)), this._refractionIntensityTexture = ((0, Jb.m)(this, xc), null), nb.set(this, (0, Jb.m)(this, jc, null)), this._translucencyIntensityTexture = ((0, Jb.m)(this, pc), null), mb.set(this, (0, Jb.m)(this, bs, null)), this.translucencyColor = ((0, Jb.m)(this, cs), (0, Jb.m)(this, ss, null)), this._translucencyColorTexture = ((0, Jb.m)(this, ks), null), lb.set(this, (0, Jb.m)(this, Ws, null)), this._useGltfStyleTextures = ((0, Jb.m)(this, as), !0), Qb.set(this, (0, Jb.m)(this, Ts, !0)), this.applyAlbedoAfterSubSurface = ((0, Jb.m)(this, Us), (0, Jb.m)(this, Is, bb.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, Jb.m)(this, Hs), (0, Jb.m)(this, fs, bb.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, Jb.m)(this, Ms), this._scene = eb.EY(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = eb._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = eb._dirtyCallbacks[32]
        }
        isReadyForSubMesh(bb, cb) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (bb._areTexturesDirty && cb.texturesEnabled) {
            if (this._thicknessTexture && Fb.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && Fb.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && Fb.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && Fb.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const bb = this._getRefractionTexture(cb);
            if (bb && Fb.e.RefractionTextureEnabled && !bb.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bb, cb) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return bb.SUBSURFACE = !1, bb.SS_DISPERSION = !1, bb.SS_TRANSLUCENCY = !1, bb.SS_SCATTERING = !1, bb.SS_REFRACTION = !1, bb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_THICKNESSANDMASK_TEXTURE = !1, bb.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, bb.SS_HAS_THICKNESS = !1, bb.SS_REFRACTIONINTENSITY_TEXTURE = !1, bb.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, bb.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, bb.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, bb.SS_REFRACTIONMAP_3D = !1, bb.SS_REFRACTIONMAP_OPPOSITEZ = !1, bb.SS_LODINREFRACTIONALPHA = !1, bb.SS_GAMMAREFRACTION = !1, bb.SS_RGBDREFRACTION = !1, bb.SS_LINEARSPECULARREFRACTION = !1, bb.SS_LINKREFRACTIONTOTRANSPARENCY = !1, bb.SS_ALBEDOFORREFRACTIONTINT = !1, bb.SS_ALBEDOFORTRANSLUCENCYTINT = !1, bb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, bb.SS_USE_THICKNESS_AS_DEPTH = !1, bb.SS_USE_GLTF_TEXTURES = !1, bb.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, bb.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, bb.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(bb.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (bb._areTexturesDirty) {
            if (bb.SUBSURFACE = !0, bb.SS_DISPERSION = this._isDispersionEnabled, bb.SS_TRANSLUCENCY = this._isTranslucencyEnabled, bb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, bb.SS_SCATTERING = this._isScatteringEnabled, bb.SS_THICKNESSANDMASK_TEXTURE = !1, bb.SS_REFRACTIONINTENSITY_TEXTURE = !1, bb.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, bb.SS_HAS_THICKNESS = !1, bb.SS_USE_GLTF_TEXTURES = !1, bb.SS_REFRACTION = !1, bb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_REFRACTIONMAP_3D = !1, bb.SS_GAMMAREFRACTION = !1, bb.SS_RGBDREFRACTION = !1, bb.SS_LINEARSPECULARREFRACTION = !1, bb.SS_REFRACTIONMAP_OPPOSITEZ = !1, bb.SS_LODINREFRACTIONALPHA = !1, bb.SS_LINKREFRACTIONTOTRANSPARENCY = !1, bb.SS_ALBEDOFORREFRACTIONTINT = !1, bb.SS_ALBEDOFORTRANSLUCENCYTINT = !1, bb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, bb.SS_USE_THICKNESS_AS_DEPTH = !1, bb.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, bb.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, bb._areTexturesDirty && cb.texturesEnabled && (this._thicknessTexture && Fb.e.ThicknessTextureEnabled && (0, jb.eb)(this._thicknessTexture, bb, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && Fb.e.RefractionIntensityTextureEnabled && (0, jb.eb)(this._refractionIntensityTexture, bb, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && Fb.e.TranslucencyIntensityTextureEnabled && (0, jb.eb)(this._translucencyIntensityTexture, bb, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && Fb.e.TranslucencyColorTextureEnabled && ((0, jb.eb)(this._translucencyColorTexture, bb, "SS_TRANSLUCENCYCOLOR_TEXTURE"), bb.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), bb.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, bb.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, bb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, bb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && cb.texturesEnabled) {
              const sb = this._getRefractionTexture(cb);
              sb && Fb.e.RefractionTextureEnabled && (bb.SS_REFRACTION = !0, bb.SS_REFRACTIONMAP_3D = sb.isCube, bb.SS_GAMMAREFRACTION = sb.gammaSpace, bb.SS_RGBDREFRACTION = sb.isRGBD, bb.SS_LINEARSPECULARREFRACTION = sb.linearSpecularLOD, bb.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && sb.isCube ? !sb.invertZ : sb.invertZ, bb.SS_LODINREFRACTIONALPHA = sb.lodLevelInAlpha, bb.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, bb.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, bb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = sb.isCube && sb.boundingBoxSize, bb.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (bb.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(bb, cb, sb, kb) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) bb.updateFloat2("vThicknessParam", 0, 0);
            else {
              kb.getRenderingMesh().getWorldMatrix().decompose(Zb.m.Fm[0]);
              const cb = Math.max(Math.abs(Zb.m.Fm[0].x), Math.abs(Zb.m.Fm[0].y), Math.abs(Zb.m.Fm[0].z));
              bb.updateFloat2("vThicknessParam", this.minimumThickness * cb, (this.maximumThickness - this.minimumThickness) * cb)
            }
        }
        bindForSubMesh(bb, cb, sb, kb) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Wb = kb.materialDefines,
            ab = this._material.isFrozen,
            Tb = this._material.realTimeFiltering,
            Ub = Wb.LODBASEDMICROSFURACE,
            Ib = this._getRefractionTexture(cb);
          if (!bb.useUbo || !ab || !bb.isSync) {
            if (this._thicknessTexture && Fb.e.ThicknessTextureEnabled && (bb.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, jb.x)(this._thicknessTexture, bb, "thickness")), this._refractionIntensityTexture && Fb.e.RefractionIntensityTextureEnabled && Wb.SS_REFRACTIONINTENSITY_TEXTURE && (bb.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, jb.x)(this._refractionIntensityTexture, bb, "refractionIntensity")), this._translucencyColorTexture && Fb.e.TranslucencyColorTextureEnabled && Wb.SS_TRANSLUCENCYCOLOR_TEXTURE && (bb.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, jb.x)(this._translucencyColorTexture, bb, "translucencyColor")), this._translucencyIntensityTexture && Fb.e.TranslucencyIntensityTextureEnabled && Wb.SS_TRANSLUCENCYINTENSITY_TEXTURE && (bb.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, jb.x)(this._translucencyIntensityTexture, bb, "translucencyIntensity")), Ib && Fb.e.RefractionTextureEnabled) {
              bb.O4("refractionMatrix", Ib.getRefractionTextureMatrix());
              let cb = 1;
              Ib.isCube || Ib.depth && (cb = Ib.depth);
              const sb = Ib.getSize().width,
                kb = this.volumeIndexOfRefraction;
              if (bb.updateFloat4("vRefractionInfos", Ib.level, 1 / kb, cb, this._invertRefractionY ? -1 : 1), bb.updateFloat4("vRefractionMicrosurfaceInfos", sb, Ib.lodGenerationScale, Ib.lodGenerationOffset, 1 / this.indexOfRefraction), Tb && bb.updateFloat2("vRefractionFilteringInfo", sb, Math.log2(sb)), Ib.boundingBoxSize) {
                const cb = Ib;
                bb.updateVector3("vRefractionPosition", cb.boundingBoxPosition), bb.updateVector3("vRefractionSize", cb.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && bb.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), bb.updateColor3("vDiffusionDistance", this.diffusionDistance), bb.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), bb.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), bb.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), bb.updateFloat("dispersion", this.dispersion)
          }
          cb.texturesEnabled && (this._thicknessTexture && Fb.e.ThicknessTextureEnabled && bb.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && Fb.e.RefractionIntensityTextureEnabled && Wb.SS_REFRACTIONINTENSITY_TEXTURE && bb.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && Fb.e.TranslucencyIntensityTextureEnabled && Wb.SS_TRANSLUCENCYINTENSITY_TEXTURE && bb.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && Fb.e.TranslucencyColorTextureEnabled && Wb.SS_TRANSLUCENCYCOLOR_TEXTURE && bb.setTexture("translucencyColorSampler", this._translucencyColorTexture), Ib && Fb.e.RefractionTextureEnabled && (Ub ? bb.setTexture("refractionSampler", Ib) : (bb.setTexture("refractionSampler", Ib._lodTextureMid || Ib), bb.setTexture("refractionSamplerLow", Ib._lodTextureLow || Ib), bb.setTexture("refractionSamplerHigh", Ib._lodTextureHigh || Ib))))
        }
        _getRefractionTexture(bb) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? bb.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(bb) {
          Fb.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && bb.push(this._refractionTexture)
        }
        hasTexture(bb) {
          return this._thicknessTexture === bb || (this._refractionTexture === bb || (this._refractionIntensityTexture === bb || (this._translucencyIntensityTexture === bb || this._translucencyColorTexture === bb)))
        }
        hasRenderTargetTextures() {
          return !!(Fb.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
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
        addFallbacks(bb, cb, sb) {
          return bb.SS_SCATTERING && cb.addFallback(sb++, "SS_SCATTERING"), bb.SS_TRANSLUCENCY && cb.addFallback(sb++, "SS_TRANSLUCENCY"), sb
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
      }, cb = new WeakMap, sb = new WeakMap, kb = new WeakMap, Wb = new WeakMap, ab = new WeakMap, Tb = new WeakMap, Ub = new WeakMap, Ib = new WeakMap, Hb = new WeakMap, fb = new WeakMap, Mb = new WeakMap, Xb = new WeakMap, nb = new WeakMap, mb = new WeakMap, lb = new WeakMap, Qb = new WeakMap, (() => {
        const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(sc[Symbol.metadata] ?? null) : void 0;
        eb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Cb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Nb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Vb = [(0, gb.E)(), (0, gb.f)("_markScenePrePassDirty")], Lb = [(0, gb.E)()], ub = [(0, gb.E)()], Yb = [(0, gb.E)()], hb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Bb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], tb = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], yb = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Pb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Db = [(0, gb.E)()], Eb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], ib = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Ob = [(0, gb.E)()], Gb = [(0, gb.E)()], Kb = [(0, gb.E)()], zb = [(0, gb.o)()], qb = [(0, gb.E)()], Ab = [(0, gb.E)()], wb = [(0, gb.o)()], rb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Sb = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Rb = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], vb = [(0, gb.o)()], xb = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], pb = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], bc = [(0, gb.E)()], cc = [(0, gb.E)()], (0, Jb.j)(bb, null, eb, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isRefractionEnabled" in bb,
            get: bb => bb.isRefractionEnabled,
            set: (bb, cb) => {
              bb.isRefractionEnabled = cb
            }
          },
          metadata: cb
        }, kc, Wc), (0, Jb.j)(bb, null, Cb, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isTranslucencyEnabled" in bb,
            get: bb => bb.isTranslucencyEnabled,
            set: (bb, cb) => {
              bb.isTranslucencyEnabled = cb
            }
          },
          metadata: cb
        }, ac, Tc), (0, Jb.j)(bb, null, Nb, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isDispersionEnabled" in bb,
            get: bb => bb.isDispersionEnabled,
            set: (bb, cb) => {
              bb.isDispersionEnabled = cb
            }
          },
          metadata: cb
        }, Ic, Hc), (0, Jb.j)(bb, null, Vb, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isScatteringEnabled" in bb,
            get: bb => bb.isScatteringEnabled,
            set: (bb, cb) => {
              bb.isScatteringEnabled = cb
            }
          },
          metadata: cb
        }, fc, Mc), (0, Jb.j)(bb, null, hb, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlbedoToTintRefraction" in bb,
            get: bb => bb.useAlbedoToTintRefraction,
            set: (bb, cb) => {
              bb.useAlbedoToTintRefraction = cb
            }
          },
          metadata: cb
        }, Cc, Nc), (0, Jb.j)(bb, null, Bb, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlbedoToTintTranslucency" in bb,
            get: bb => bb.useAlbedoToTintTranslucency,
            set: (bb, cb) => {
              bb.useAlbedoToTintTranslucency = cb
            }
          },
          metadata: cb
        }, Vc, Lc), (0, Jb.j)(bb, null, tb, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "thicknessTexture" in bb,
            get: bb => bb.thicknessTexture,
            set: (bb, cb) => {
              bb.thicknessTexture = cb
            }
          },
          metadata: cb
        }, uc, Yc), (0, Jb.j)(bb, null, yb, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "refractionTexture" in bb,
            get: bb => bb.refractionTexture,
            set: (bb, cb) => {
              bb.refractionTexture = cb
            }
          },
          metadata: cb
        }, hc, Jc), (0, Jb.j)(bb, null, Pb, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "indexOfRefraction" in bb,
            get: bb => bb.indexOfRefraction,
            set: (bb, cb) => {
              bb.indexOfRefraction = cb
            }
          },
          metadata: cb
        }, gc, Bc), (0, Jb.j)(bb, null, Eb, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertRefractionY" in bb,
            get: bb => bb.invertRefractionY,
            set: (bb, cb) => {
              bb.invertRefractionY = cb
            }
          },
          metadata: cb
        }, Pc, Dc), (0, Jb.j)(bb, null, ib, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: bb => "linkRefractionWithTransparency" in bb,
            get: bb => bb.linkRefractionWithTransparency,
            set: (bb, cb) => {
              bb.linkRefractionWithTransparency = cb
            }
          },
          metadata: cb
        }, Ec, ic), (0, Jb.j)(bb, null, rb, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useMaskFromThicknessTexture" in bb,
            get: bb => bb.useMaskFromThicknessTexture,
            set: (bb, cb) => {
              bb.useMaskFromThicknessTexture = cb
            }
          },
          metadata: cb
        }, Fc, xc), (0, Jb.j)(bb, null, Sb, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "refractionIntensityTexture" in bb,
            get: bb => bb.refractionIntensityTexture,
            set: (bb, cb) => {
              bb.refractionIntensityTexture = cb
            }
          },
          metadata: cb
        }, jc, pc), (0, Jb.j)(bb, null, Rb, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyIntensityTexture" in bb,
            get: bb => bb.translucencyIntensityTexture,
            set: (bb, cb) => {
              bb.translucencyIntensityTexture = cb
            }
          },
          metadata: cb
        }, bs, cs), (0, Jb.j)(bb, null, xb, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyColorTexture" in bb,
            get: bb => bb.translucencyColorTexture,
            set: (bb, cb) => {
              bb.translucencyColorTexture = cb
            }
          },
          metadata: cb
        }, Ws, as), (0, Jb.j)(bb, null, pb, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: bb => "useGltfStyleTextures" in bb,
            get: bb => bb.useGltfStyleTextures,
            set: (bb, cb) => {
              bb.useGltfStyleTextures = cb
            }
          },
          metadata: cb
        }, Ts, Us), (0, Jb.j)(null, null, Lb, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: bb => "_scatteringDiffusionProfileIndex" in bb,
            get: bb => bb._scatteringDiffusionProfileIndex,
            set: (bb, cb) => {
              bb._scatteringDiffusionProfileIndex = cb
            }
          },
          metadata: cb
        }, Xc, nc), (0, Jb.j)(null, null, ub, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "refractionIntensity" in bb,
            get: bb => bb.refractionIntensity,
            set: (bb, cb) => {
              bb.refractionIntensity = cb
            }
          },
          metadata: cb
        }, mc, lc), (0, Jb.j)(null, null, Yb, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyIntensity" in bb,
            get: bb => bb.translucencyIntensity,
            set: (bb, cb) => {
              bb.translucencyIntensity = cb
            }
          },
          metadata: cb
        }, Qc, ec), (0, Jb.j)(null, null, Db, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "_volumeIndexOfRefraction" in bb,
            get: bb => bb._volumeIndexOfRefraction,
            set: (bb, cb) => {
              bb._volumeIndexOfRefraction = cb
            }
          },
          metadata: cb
        }, tc, yc), (0, Jb.j)(null, null, Ob, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "minimumThickness" in bb,
            get: bb => bb.minimumThickness,
            set: (bb, cb) => {
              bb.minimumThickness = cb
            }
          },
          metadata: cb
        }, Oc, Gc), (0, Jb.j)(null, null, Gb, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "maximumThickness" in bb,
            get: bb => bb.maximumThickness,
            set: (bb, cb) => {
              bb.maximumThickness = cb
            }
          },
          metadata: cb
        }, Kc, Zc), (0, Jb.j)(null, null, Kb, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: bb => "useThicknessAsDepth" in bb,
            get: bb => bb.useThicknessAsDepth,
            set: (bb, cb) => {
              bb.useThicknessAsDepth = cb
            }
          },
          metadata: cb
        }, zc, qc), (0, Jb.j)(null, null, zb, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColor" in bb,
            get: bb => bb.tintColor,
            set: (bb, cb) => {
              bb.tintColor = cb
            }
          },
          metadata: cb
        }, dc, Ac), (0, Jb.j)(null, null, qb, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColorAtDistance" in bb,
            get: bb => bb.tintColorAtDistance,
            set: (bb, cb) => {
              bb.tintColorAtDistance = cb
            }
          },
          metadata: cb
        }, wc, rc), (0, Jb.j)(null, null, Ab, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: bb => "dispersion" in bb,
            get: bb => bb.dispersion,
            set: (bb, cb) => {
              bb.dispersion = cb
            }
          },
          metadata: cb
        }, oc, Sc), (0, Jb.j)(null, null, wb, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "diffusionDistance" in bb,
            get: bb => bb.diffusionDistance,
            set: (bb, cb) => {
              bb.diffusionDistance = cb
            }
          },
          metadata: cb
        }, Rc, vc), (0, Jb.j)(null, null, vb, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyColor" in bb,
            get: bb => bb.translucencyColor,
            set: (bb, cb) => {
              bb.translucencyColor = cb
            }
          },
          metadata: cb
        }, ss, ks), (0, Jb.j)(null, null, bc, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: bb => "applyAlbedoAfterSubSurface" in bb,
            get: bb => bb.applyAlbedoAfterSubSurface,
            set: (bb, cb) => {
              bb.applyAlbedoAfterSubSurface = cb
            }
          },
          metadata: cb
        }, Is, Hs), (0, Jb.j)(null, null, cc, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: bb => "legacyTranslucency" in bb,
            get: bb => bb.legacyTranslucency,
            set: (bb, cb) => {
              bb.legacyTranslucency = cb
            }
          },
          metadata: cb
        }, fs, Ms), cb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cb
        })
      })(), bb.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, bb.DEFAULT_LEGACY_TRANSLUCENCY = !1, bb
    })();
    var Hc = sb(39779),
      fc = sb(39767),
      Mc = sb(39787),
      Xc = sb(39794),
      nc = sb(39796),
      mc = sb(39805),
      lc = sb(39814),
      Qc = sb(39823),
      ec = sb(39296);
    const Cc = {
      effect: null,
      subMesh: null
    };
    class Nc extends((0, lc.b)((0, mc.c)(qb.b))) {}
    class Vc extends((0, Sb.e)(Nc)) {
      constructor(bb) {
        super(bb), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class Lc extends((0, Qc.c)(vb.d)) {}
    let uc = (() => {
      var bb, cb;
      let kb, Wb = Lc,
        Tb = [],
        Ub = [];
      return bb = class extends Wb {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(bb) {
          this._realTimeFiltering = bb, this.Tcb(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(bb) {
          this._realTimeFilteringQuality = bb, this.Tcb(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, Jb.d)(this, cb, "f")
        }
        set debugMode(bb) {
          (0, Jb.h)(this, cb, bb, "f")
        }
        constructor(sb, kb) {
          super(sb, kb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || bb.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Zb.t(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = ob.e.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new ob.e(0, 0, 0), this._albedoColor = new ob.e(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new ob.e(1, 1, 1), this._reflectionColor = new ob.e(1, 1, 1), this._emissiveColor = new ob.e(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = bb.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new tb.d(16), this._globalAmbientColor = new ob.e(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, cb.set(this, (0, Jb.m)(this, Tb, 0)), this.debugLimit = ((0, Jb.m)(this, Ub), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new wb(this), this.clearCoat = new bc(this), this.iridescence = new sc(this), this.anisotropy = new Wc(this), this.sheen = new Tc(this), this.subSurface = new Ic(this), this.detailMap = new Hc.e(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Fb.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = ib(this.EY()), this.prePassConfiguration = new rb.e
        }
        get hasRenderTargetTextures() {
          return !!(Fb.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
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
        isReadyForSubMesh(bb, cb, sb) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const kb = cb._drawWrapper;
          if (kb.effect && this.isFrozen && kb._wasPreviouslyReady && kb._wasPreviouslyUsingInstances === sb) return !0;
          cb.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), cb.materialDefines = new Vc(this._eventInfo.defineNames));
          const Wb = cb.materialDefines;
          if (this._isReadyForSubMesh(cb)) return !0;
          const ab = this.EY(),
            Tb = ab.Sm();
          if (Wb._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, ab.texturesEnabled)) {
            if (this._albedoTexture && Fb.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && Fb.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && Fb.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && Fb.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && Fb.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const bb = this._getReflectionTexture();
            if (bb && Fb.e.ReflectionTextureEnabled) {
              if (!bb.isReadyOrNotBlocking()) return !1;
              if (bb.irradianceTexture) {
                if (!bb.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!bb.sphericalPolynomial && bb.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && Fb.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && Fb.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (Fb.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (Tb.getCaps().standardDerivatives && this._bumpTexture && Fb.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && Fb.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Wb, this._eventInfo.subMesh = cb, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Wb._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Wb.AREALIGHTUSED || Wb.CLUSTLIGHT_BATCH)
            for (let Mb = 0; Mb < bb.lightSources.length; Mb++)
              if (!bb.lightSources[Mb]._isReady()) return !1;
          if (Tb.getCaps().standardDerivatives || bb.isVerticesDataPresent(zb.l.NormalKind) || (bb.createNormals(!0), Bb.c.Warn("PBRMaterial: Normals have been created for the mesh: " + bb.name)), !(0, jb.d)(ab, bb, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const Ub = cb.effect,
            Ib = Wb._areLightsDisposed,
            Hb = this._prepareEffect(bb, cb.getRenderingMesh(), Wb, this.onCompiled, this.onError, sb, null);
          let fb = !1;
          if (Hb)
            if (this._onEffectCreatedObservable && (Cc.effect = Hb, Cc.subMesh = cb, this._onEffectCreatedObservable.notifyObservers(Cc)), this.allowShaderHotSwapping && Ub && !Hb.isReady()) {
              if (Wb.markAsUnprocessed(), fb = this.isFrozen, Ib) return Wb._areLightsDisposed = !0, !1
            } else ab.resetCachedMaterial(), cb.setEffect(Hb, Wb, this._materialContext);
          return !(!cb.effect || !cb.effect.isReady()) && (Wb._renderId = ab.getRenderId(), kb._wasPreviouslyReady = !fb, kb._wasPreviouslyUsingInstances = !!sb, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(cb, sb, kb) {
          let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(cb, sb, kb, Tb, Ub), !kb.isDirty) return null;
          kb.markAsProcessed();
          const Ib = this.EY().Sm(),
            Hb = new xb.b;
          let fb = 0;
          kb.USESPHERICALINVERTEX && Hb.addFallback(fb++, "USESPHERICALINVERTEX"), kb.FOG && Hb.addFallback(fb, "FOG"), kb.SPECULARAA && Hb.addFallback(fb, "SPECULARAA"), kb.POINTSIZE && Hb.addFallback(fb, "POINTSIZE"), kb.LOGARITHMICDEPTH && Hb.addFallback(fb, "LOGARITHMICDEPTH"), kb.PARALLAX && Hb.addFallback(fb, "PARALLAX"), kb.PARALLAX_RHS && Hb.addFallback(fb, "PARALLAX_RHS"), kb.PARALLAXOCCLUSION && Hb.addFallback(fb++, "PARALLAXOCCLUSION"), kb.ENVIRONMENTBRDF && Hb.addFallback(fb++, "ENVIRONMENTBRDF"), kb.TANGENT && Hb.addFallback(fb++, "TANGENT"), kb.BUMP && Hb.addFallback(fb++, "BUMP"), fb = (0, jb.B)(kb, Hb, this._maxSimultaneousLights, fb), kb.SPECULARTERM && Hb.addFallback(fb++, "SPECULARTERM"), kb.USESPHERICALFROMREFLECTIONMAP && Hb.addFallback(fb++, "USESPHERICALFROMREFLECTIONMAP"), kb.USEIRRADIANCEMAP && Hb.addFallback(fb++, "USEIRRADIANCEMAP"), kb.LIGHTMAP && Hb.addFallback(fb++, "LIGHTMAP"), kb.NORMAL && Hb.addFallback(fb++, "NORMAL"), kb.AMBIENT && Hb.addFallback(fb++, "AMBIENT"), kb.EMISSIVE && Hb.addFallback(fb++, "EMISSIVE"), kb.VERTEXCOLOR && Hb.addFallback(fb++, "VERTEXCOLOR"), kb.MORPHTARGETS && Hb.addFallback(fb++, "MORPHTARGETS"), kb.MULTIVIEW && Hb.addFallback(0, "MULTIVIEW");
          const Mb = [zb.l.PositionKind];
          kb.NORMAL && Mb.push(zb.l.NormalKind), kb.TANGENT && Mb.push(zb.l.TangentKind);
          for (let bb = 1; bb <= 6; ++bb) kb["UV" + bb] && Mb.push(`uv${1===bb?"":bb}`);
          kb.VERTEXCOLOR && Mb.push(zb.l.ColorKind), (0, jb.I)(Mb, cb, kb, Hb), (0, jb.L)(Mb, kb), (0, jb.N)(Mb, cb, kb), (0, jb.F)(Mb, cb, kb);
          let Xb = "pbr";
          const nb = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            mb = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, jb.wb)(nb, mb, !0);
          const lb = ["Material", "Scene", "Mesh"],
            Qb = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: kb.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = Hb, this._eventInfo.fallbackRank = fb, this._eventInfo.defines = kb, this._eventInfo.uniforms = nb, this._eventInfo.attributes = Mb, this._eventInfo.samplers = mb, this._eventInfo.uniformBuffersNames = lb, this._eventInfo.customCode = void 0, this._eventInfo.mesh = cb, this._eventInfo.indexParameters = Qb, this._callbackPluginEventGeneric(128, this._eventInfo), nc.d.AddUniformsAndSamplers(nb, mb), rb.e.AddUniforms(nb), rb.e.AddSamplers(mb), (0, fc.c)(nb), this._useVertexPulling) {
            const bb = sb?.geometry;
            bb && (this._vertexPullingMetadata = (0, Mc.h)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, cb) => {
              nb.push(`vp_${cb}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          Rb.d && (Rb.d.PrepareUniforms(nb, kb), Rb.d.PrepareSamplers(mb, kb)), (0, jb.zb)({
            uniformsNames: nb,
            uniformBuffersNames: lb,
            samplers: mb,
            defines: kb,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const eb = {};
          this.customShaderNameResolve && (Xb = this.customShaderNameResolve(Xb, nb, lb, mb, kb, Mb, eb));
          const Cb = kb.toString(),
            Nb = Ib.createEffect(Xb, {
              attributes: Mb,
              uniformsNames: nb,
              uniformBuffersNames: lb,
              samplers: mb,
              defines: Cb,
              fallbacks: Hb,
              onCompiled: Wb,
              onError: ab,
              indexParameters: Qb,
              processFinalCode: eb.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: kb.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Ib);
          return this._eventInfo.customCode = void 0, Nb
        }
        _prepareDefines(cb, sb, kb) {
          let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const Tb = sb.hasThinInstances,
            Ub = this.EY(),
            Ib = Ub.Sm();
          (0, jb.bb)(Ub, cb, kb, !0, this._maxSimultaneousLights, this._disableLighting), kb._needNormals = !0, (0, jb.jb)(Ub, kb);
          const Hb = this.needAlphaBlendingForMesh(cb) && this.EY().useOrderIndependentTransparency;
          if ((0, jb.ob)(Ub, kb, this.canRenderToMRT && !Hb), (0, jb.mb)(Ub, kb, Hb), nc.d.PrepareDefines(Ib.currentRenderPassId, cb, kb), kb.METALLICWORKFLOW = this.isMetallicWorkflow(), kb._areTexturesDirty) {
            kb._needUVs = !1;
            for (let bb = 1; bb <= 6; ++bb) kb["MAINUV" + bb] = !1;
            if (Ub.texturesEnabled) {
              kb.ALBEDODIRECTUV = 0, kb.BASE_WEIGHTDIRECTUV = 0, kb.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, kb.AMBIENTDIRECTUV = 0, kb.OPACITYDIRECTUV = 0, kb.EMISSIVEDIRECTUV = 0, kb.REFLECTIVITYDIRECTUV = 0, kb.MICROSURFACEMAPDIRECTUV = 0, kb.METALLIC_REFLECTANCEDIRECTUV = 0, kb.REFLECTANCEDIRECTUV = 0, kb.BUMPDIRECTUV = 0, kb.LIGHTMAPDIRECTUV = 0, Ib.getCaps().textureLOD && (kb.LODBASEDMICROSFURACE = !0), this._albedoTexture && Fb.e.DiffuseTextureEnabled ? ((0, jb.eb)(this._albedoTexture, kb, "ALBEDO"), kb.GAMMAALBEDO = this._albedoTexture.gammaSpace) : kb.ALBEDO = !1, this._baseWeightTexture && Fb.e.BaseWeightTextureEnabled ? (0, jb.eb)(this._baseWeightTexture, kb, "BASE_WEIGHT") : kb.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && Fb.e.BaseDiffuseRoughnessTextureEnabled ? (0, jb.eb)(this._baseDiffuseRoughnessTexture, kb, "BASE_DIFFUSE_ROUGHNESS") : kb.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && Fb.e.AmbientTextureEnabled ? ((0, jb.eb)(this._ambientTexture, kb, "AMBIENT"), kb.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : kb.AMBIENT = !1, this._opacityTexture && Fb.e.OpacityTextureEnabled ? ((0, jb.eb)(this._opacityTexture, kb, "OPACITY"), kb.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : kb.OPACITY = !1;
              const bb = this._getReflectionTexture(),
                cb = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Ib.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, jb._)(Ub, bb, kb, this.realTimeFiltering, this.realTimeFilteringQuality, !cb), this._lightmapTexture && Fb.e.LightmapTextureEnabled ? ((0, jb.eb)(this._lightmapTexture, kb, "LIGHTMAP"), kb.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, kb.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, kb.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : kb.LIGHTMAP = !1, this._emissiveTexture && Fb.e.EmissiveTextureEnabled ? ((0, jb.eb)(this._emissiveTexture, kb, "EMISSIVE"), kb.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : kb.EMISSIVE = !1, Fb.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, jb.eb)(this._metallicTexture, kb, "REFLECTIVITY"), kb.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, kb.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, kb.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, kb.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, kb.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, jb.eb)(this._reflectivityTexture, kb, "REFLECTIVITY"), kb.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, kb.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, kb.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : kb.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (kb.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, jb.eb)(this._metallicReflectanceTexture, kb, "METALLIC_REFLECTANCE"), kb.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : kb.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, jb.eb)(this._reflectanceTexture, kb, "REFLECTANCE"), kb.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : kb.REFLECTANCE = !1) : (kb.METALLIC_REFLECTANCE = !1, kb.REFLECTANCE = !1), this._microSurfaceTexture ? (0, jb.eb)(this._microSurfaceTexture, kb, "MICROSURFACEMAP") : kb.MICROSURFACEMAP = !1) : (kb.REFLECTIVITY = !1, kb.MICROSURFACEMAP = !1), Ib.getCaps().standardDerivatives && this._bumpTexture && Fb.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, jb.eb)(this._bumpTexture, kb, "BUMP"), this._useParallax && this._albedoTexture && Fb.e.DiffuseTextureEnabled ? (kb.PARALLAX = !0, kb.PARALLAX_RHS = Ub.useRightHandedSystem, kb.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : kb.PARALLAX = !1, kb.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (kb.BUMP = !1, kb.PARALLAX = !1, kb.PARALLAX_RHS = !1, kb.PARALLAXOCCLUSION = !1, kb.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Fb.e.ReflectionTextureEnabled ? (kb.ENVIRONMENTBRDF = !0, kb.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (kb.ENVIRONMENTBRDF = !1, kb.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? kb.ALPHAFROMALBEDO = !0 : kb.ALPHAFROMALBEDO = !1
            }
            kb.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === bb.LIGHTFALLOFF_STANDARD ? (kb.USEPHYSICALLIGHTFALLOFF = !1, kb.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === bb.LIGHTFALLOFF_GLTF ? (kb.USEPHYSICALLIGHTFALLOFF = !1, kb.USEGLTFLIGHTFALLOFF = !0) : (kb.USEPHYSICALLIGHTFALLOFF = !0, kb.USEGLTFLIGHTFALLOFF = !1), kb.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? kb.TWOSIDEDLIGHTING = !0 : kb.TWOSIDEDLIGHTING = !1, kb.MIRRORED = !!Ub._mirroredCameraPosition, kb.SPECULARAA = Ib.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(kb._areTexturesDirty || kb._areMiscDirty) && (kb.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, kb.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, kb.ALPHABLEND = this.needAlphaBlendingForMesh(cb), kb.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, kb.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), kb._areTexturesDirty && (kb.TEXTURE_REPETITION_MODE = Ib.version > 1 || Ib.isWebGPU ? this.textureRepetitionMode : 0), kb._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(kb), kb.FORCENORMALFORWARD = this._forceNormalForward, kb.RADIANCEOCCLUSION = this._useRadianceOcclusion, kb.HORIZONOCCLUSION = this._useHorizonOcclusion, kb._areMiscDirty && ((0, jb.hb)(cb, Ub, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(cb), kb, this._applyDecalMapAfterDetailMap, this._useVertexPulling, sb, this._isVertexOutputInvariant), kb.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !cb.isVerticesDataPresent(zb.l.NormalKind), kb.DEBUGMODE = this._debugMode), (0, jb.Y)(Ub, Ib, this, kb, !!Wb, ab, Tb), this._eventInfo.defines = kb, this._eventInfo.mesh = cb, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, jb.V)(cb, kb, !0, !0, !0, this._transparencyMode !== bb.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(bb, cb, sb) {
          const kb = {
            clipPlane: !1,
            useInstances: !1,
            ...sb
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const sb = new Vc(this._eventInfo.defineNames),
              Wb = this._prepareEffect(bb, bb, sb, void 0, void 0, kb.useInstances, kb.clipPlane);
            this._onEffectCreatedObservable && (Cc.effect = Wb, Cc.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Cc)), Wb.isReady() ? cb && cb(this) : Wb.onCompileObservable.add((() => {
              cb && cb(this)
            }))
          })()
        }
        buildUniformLayout() {
          const bb = this._uniformBuffer;
          bb.addUniform("vAlbedoInfos", 2), bb.addUniform("vBaseWeightInfos", 2), bb.addUniform("vBaseDiffuseRoughnessInfos", 2), bb.addUniform("vAmbientInfos", 4), bb.addUniform("vOpacityInfos", 2), bb.addUniform("vEmissiveInfos", 2), bb.addUniform("vLightmapInfos", 2), bb.addUniform("vReflectivityInfos", 3), bb.addUniform("vMicroSurfaceSamplerInfos", 2), bb.addUniform("vBumpInfos", 3), bb.addUniform("albedoMatrix", 16), bb.addUniform("baseWeightMatrix", 16), bb.addUniform("baseDiffuseRoughnessMatrix", 16), bb.addUniform("ambientMatrix", 16), bb.addUniform("opacityMatrix", 16), bb.addUniform("emissiveMatrix", 16), bb.addUniform("lightmapMatrix", 16), bb.addUniform("reflectivityMatrix", 16), bb.addUniform("microSurfaceSamplerMatrix", 16), bb.addUniform("bumpMatrix", 16), bb.addUniform("vTangentSpaceParams", 2), bb.addUniform("vAlbedoColor", 4), bb.addUniform("baseWeight", 1), bb.addUniform("baseDiffuseRoughness", 1), bb.addUniform("vLightingIntensity", 4), bb.addUniform("pointSize", 1), bb.addUniform("vReflectivityColor", 4), bb.addUniform("vEmissiveColor", 3), bb.addUniform("vAmbientColor", 3), bb.addUniform("vDebugMode", 2), bb.addUniform("vMetallicReflectanceFactors", 4), bb.addUniform("vMetallicReflectanceInfos", 2), bb.addUniform("metallicReflectanceMatrix", 16), bb.addUniform("vReflectanceInfos", 2), bb.addUniform("reflectanceMatrix", 16), bb.addUniform("cameraInfo", 4), bb.addUniform("vTextureRepetitionHexTilingParams", 4), (0, jb.sb)(bb, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(bb, cb, sb) {
          const kb = this.EY(),
            Wb = sb.materialDefines;
          if (!Wb) return;
          const ab = sb.effect;
          if (!ab) return;
          this._activeEffect = ab, cb.getMeshUniformBuffer().bindToEffect(ab, "Mesh"), cb.transferToEffect(bb);
          const Tb = kb.Sm();
          this._uniformBuffer.bindToEffect(ab, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, kb, cb, bb, this.isFrozen), nc.d.Bind(Tb.currentRenderPassId, this._activeEffect, cb, bb, this);
          const Ub = kb.activeCamera;
          Ub ? this._uniformBuffer.updateFloat4("cameraInfo", Ub.minZ, Ub.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const Ib = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Ib[0], Ib[1], Ib[2], Ib[3]), this._eventInfo.subMesh = sb, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Wb.OBJECTSPACE_NORMALMAP && (bb.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const Hb = this._mustRebind(kb, ab, sb, cb.visibility),
            fb = Tb._features.needToAlwaysBindUniformBuffers;
          (0, jb.e)(cb, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Mc.d)(this._activeEffect, this._vertexPullingMetadata);
          let Mb = null;
          const Xb = this._uniformBuffer;
          if (Hb) {
            if (this.bindViewProjection(ab), Mb = this._getReflectionTexture(), !Xb.useUbo || !this.isFrozen || !Xb.isSync || sb._drawWrapper._forceRebindOnNextCall) {
              if (kb.texturesEnabled && (this._albedoTexture && Fb.e.DiffuseTextureEnabled && (Xb.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, jb.x)(this._albedoTexture, Xb, "albedo")), this._baseWeightTexture && Fb.e.BaseWeightTextureEnabled && (Xb.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, jb.x)(this._baseWeightTexture, Xb, "baseWeight")), this._baseDiffuseRoughnessTexture && Fb.e.BaseDiffuseRoughnessTextureEnabled && (Xb.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, jb.x)(this._baseDiffuseRoughnessTexture, Xb, "baseDiffuseRoughness")), this._ambientTexture && Fb.e.AmbientTextureEnabled && (Xb.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, jb.x)(this._ambientTexture, Xb, "ambient")), this._opacityTexture && Fb.e.OpacityTextureEnabled && (Xb.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, jb.x)(this._opacityTexture, Xb, "opacity")), this._emissiveTexture && Fb.e.EmissiveTextureEnabled && (Xb.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, jb.x)(this._emissiveTexture, Xb, "emissive")), this._lightmapTexture && Fb.e.LightmapTextureEnabled && (Xb.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, jb.x)(this._lightmapTexture, Xb, "lightmap")), Fb.e.SpecularTextureEnabled && (this._metallicTexture ? (Xb.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, jb.x)(this._metallicTexture, Xb, "reflectivity")) : this._reflectivityTexture && (Xb.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, jb.x)(this._reflectivityTexture, Xb, "reflectivity")), this._metallicReflectanceTexture && (Xb.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, jb.x)(this._metallicReflectanceTexture, Xb, "metallicReflectance")), this._reflectanceTexture && Wb.REFLECTANCE && (Xb.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, jb.x)(this._reflectanceTexture, Xb, "reflectance")), this._microSurfaceTexture && (Xb.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, jb.x)(this._microSurfaceTexture, Xb, "microSurfaceSampler"))), this._bumpTexture && Tb.getCaps().standardDerivatives && Fb.e.BumpTextureEnabled && !this._disableBumpMap && (Xb.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, jb.x)(this._bumpTexture, Xb, "bump"), kb._mirroredCameraPosition ? Xb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Xb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, jb.k)(kb, Wb, Xb, this._reflectionColor, Mb, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && Xb.updateFloat("pointSize", this.pointSize), Wb.METALLICWORKFLOW) {
                ob.m.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, ob.m.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const bb = this.subSurface?._indexOfRefraction ?? 1.5,
                  cb = 1;
                ob.m.Color4[0].b = bb;
                const sb = Math.pow((bb - cb) / (bb + cb), 2);
                ob.m.Color4[0].a = sb, Xb.updateDirectColor4("vReflectivityColor", ob.m.Color4[0]), Xb.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else Xb.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              Xb.updateColor3("vEmissiveColor", Fb.e.EmissiveTextureEnabled ? this._emissiveColor : ob.e.BlackReadOnly), !Wb.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? Xb.updateColor4("vAlbedoColor", this._albedoColor, 1) : Xb.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), Xb.updateFloat("baseWeight", this._baseWeight), Xb.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * kb.environmentIntensity, this._lightingInfos.w = this._specularIntensity, Xb.updateVector4("vLightingIntensity", this._lightingInfos), kb.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), Xb.updateColor3("vAmbientColor", this._globalAmbientColor), Xb.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            kb.texturesEnabled && (this._albedoTexture && Fb.e.DiffuseTextureEnabled && Xb.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && Fb.e.BaseWeightTextureEnabled && Xb.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && Fb.e.BaseDiffuseRoughnessTextureEnabled && Xb.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && Fb.e.AmbientTextureEnabled && Xb.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && Fb.e.OpacityTextureEnabled && Xb.setTexture("opacitySampler", this._opacityTexture), (0, jb.n)(kb, Wb, Xb, Mb, this.realTimeFiltering), Wb.ENVIRONMENTBRDF && Xb.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && Fb.e.EmissiveTextureEnabled && Xb.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && Fb.e.LightmapTextureEnabled && Xb.setTexture("lightmapSampler", this._lightmapTexture), Fb.e.SpecularTextureEnabled && (this._metallicTexture ? Xb.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && Xb.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && Xb.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Wb.REFLECTANCE && Xb.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && Xb.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && Tb.getCaps().standardDerivatives && Fb.e.BumpTextureEnabled && !this._disableBumpMap && Xb.setTexture("bumpSampler", this._bumpTexture)), this.EY().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(cb) && this.EY().depthPeelingRenderer.bind(ab), this._eventInfo.subMesh = sb, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, fc.f)(this._activeEffect, this, kb), this.bindEyePosition(ab)
          } else fb && (this._needToBindSceneUbo = !0);
          !Hb && this.isFrozen && !fb || !kb.lightsEnabled || this._disableLighting || (0, jb.q)(kb, cb, this._activeEffect, Wb, this._maxSimultaneousLights), !Hb && this.isFrozen || ((kb.fogEnabled && cb.applyFog && kb.fogMode !== Kb.c.FOGMODE_NONE || Mb || this.subSurface.refractionTexture || cb.receiveShadows || Wb.PREPASS || Wb.CLUSTLIGHT_BATCH) && this.bindView(ab), (0, jb.g)(kb, cb, this._activeEffect, !0), Wb.NUM_MORPH_INFLUENCERS && (0, jb.t)(cb, this._activeEffect), Wb.BAKED_VERTEX_ANIMATION_TEXTURE && cb.bakedVertexAnimationManager?.bind(ab, Wb.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, jb.s)(Wb, this._activeEffect, kb)), this._afterBind(cb, this._activeEffect, sb), Xb.update()
        }
        getAnimatables() {
          const bb = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && bb.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && bb.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && bb.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && bb.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && bb.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && bb.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && bb.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? bb.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && bb.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && bb.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && bb.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && bb.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && bb.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && bb.push(this._microSurfaceTexture), bb
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.EY().environmentTexture
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
          const bb = this.EY().enableSubSurfaceForPrePass();
          return bb && (bb.enabled = !0), !0
        }
        dispose(bb, cb) {
          this._breakShaderLoadedCheck = !0, cb && (this._environmentBRDFTexture && this.EY().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(bb, cb)
        }
      }, cb = new WeakMap, (() => {
        const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Wb[Symbol.metadata] ?? null) : void 0;
        kb = [(0, gb.f)("_markAllSubMeshesAsMiscDirty")], (0, Jb.j)(bb, null, kb, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "debugMode" in bb,
            get: bb => bb.debugMode,
            set: (bb, cb) => {
              bb.debugMode = cb
            }
          },
          metadata: cb
        }, Tb, Ub), cb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cb
        })
      })(), bb.PBRMATERIAL_OPAQUE = ab.e.MATERIAL_OPAQUE, bb.PBRMATERIAL_ALPHATEST = ab.e.MATERIAL_ALPHATEST, bb.PBRMATERIAL_ALPHABLEND = ab.e.MATERIAL_ALPHABLEND, bb.PBRMATERIAL_ALPHATESTANDBLEND = ab.e.MATERIAL_ALPHATESTANDBLEND, bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, bb.LIGHTFALLOFF_PHYSICAL = 0, bb.LIGHTFALLOFF_GLTF = 1, bb.LIGHTFALLOFF_STANDARD = 2, bb.ForceGLSL = !1, bb._ShaderLoader = new Xc.d((() => [Promise.all([sb.e(307), sb.e(318)]).then((() => sb(60938))), Promise.all([sb.e(312), sb.e(308), sb.e(372), sb.e(321), sb.e(371)]).then((() => sb(60963)))]), (() => [Promise.all([sb.e(326), sb.e(328), sb.e(335)]).then((() => sb(61046))), Promise.all([sb.e(326), sb.e(329), sb.e(375), sb.e(339), sb.e(374)]).then((() => sb(61065)))])), bb
    })();
    Object.getOwnPropertyDescriptor(uc.prototype, "decalMap") || Object.defineProperty(uc.prototype, "decalMap", (0, ec.d)("PBRBaseMaterial", "decalMap")), (0, sb(41238).d)();
    var Yc = sb(39441);
    var hc = sb(39531),
      Jc = sb(41218),
      gc = sb(39241),
      Bc = sb(39251),
      tc = sb(39353);
    let yc = !1;
    const Pc = new ob.g,
      Dc = new ob.g;
    class Ec extends Jc.d {
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
          for (let cb = 0; cb < this._textures.length; cb++) this._textures[cb].wrapU = bb
      }
      set wrapV(bb) {
        if (this._textures)
          for (let cb = 0; cb < this._textures.length; cb++) this._textures[cb].wrapV = bb
      }
      constructor(bb, cb, sb, kb, Wb, ab) {
        const Tb = !(!Wb || !Wb.generateMipMaps) && Wb.generateMipMaps,
          Ub = !(!Wb || !Wb.generateDepthTexture) && Wb.generateDepthTexture,
          Ib = Wb && Wb.depthTextureFormat ? Wb.depthTextureFormat : 15,
          Hb = !Wb || void 0 === Wb.doNotChangeAspectRatio || Wb.doNotChangeAspectRatio,
          fb = !(!Wb || !Wb.drawOnlyOnFirstAttachmentByDefault) && Wb.drawOnlyOnFirstAttachmentByDefault;
        if (super(bb, cb, kb, Tb, Hb, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), yc || (yc = !0, Bc.ThinEngine.prototype.restoreSingleAttachment = function() {
            const bb = this._gl;
            this.bindAttachments([bb.BACK])
          }, Bc.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const bb = this._gl;
            this.bindAttachments([bb.COLOR_ATTACHMENT0])
          }, Bc.ThinEngine.prototype.buildTextureLayout = function(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const sb = this._gl,
              kb = [];
            if (cb) kb.push(sb.BACK);
            else
              for (let Wb = 0; Wb < bb.length; Wb++) bb[Wb] ? kb.push(sb["COLOR_ATTACHMENT" + Wb]) : kb.push(sb.NONE);
            return kb
          }, Bc.ThinEngine.prototype.bindAttachments = function(bb) {
            const cb = this._gl,
              sb = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, sb)
              for (let kb = 0; kb < bb.length; kb++) bb[kb] !== cb.NONE && sb[kb] && (0, tc.f)(sb[kb].format) && (this._integerMRTAttachmentsMask |= 1 << kb);
            cb.drawBuffers(bb)
          }, Bc.ThinEngine.prototype.clearAttachments = function(bb, cb, sb, kb) {
            let Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const Tb = this._currentRenderTarget?.textures;
            let Ub = !1;
            if (sb && bb && Tb)
              for (let Ib = 0; Ib < cb.length; Ib++) {
                const bb = Tb[Ib];
                if (cb[Ib] !== this._gl.NONE && bb && (0, tc.f)(bb.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  Ub = !0;
                  break
                }
              }
            if (!Ub || !bb || !Tb) return this.bindAttachments(cb), void this.clear(bb, sb, kb, Wb, ab);
            this.bindAttachments(cb), this._applyColorWriteState();
            for (let Ib = 0; Ib < cb.length; Ib++) {
              const sb = Tb[Ib];
              if (cb[Ib] !== this._gl.NONE && sb) {
                let cb = bb;
                if ((0, tc.f)(sb.format)) {
                  const kb = (0, tc.i)(sb.type);
                  cb = kb ? Pc : Dc;
                  const Wb = kb ? 255 : 1;
                  cb.r = Math.round(bb.r * Wb), cb.g = Math.round(bb.g * Wb), cb.b = Math.round(bb.b * Wb), cb.a = Math.round(bb.a * Wb)
                }
                this._clearColorAttachment(Ib, cb, sb.format, sb.type)
              }
            }
            if (kb || Wb) {
              const bb = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, kb, Wb, ab)
              } finally {
                this._integerMRTAttachmentsMask = bb
              }
            }
          }, Bc.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              sb = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, bb.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(bb), cb || this.generateMipMapsMultiFramebuffer(bb), sb && (bb._MSAAFramebuffer && this._bindUnboundFramebuffer(bb._framebuffer), sb()), this._bindUnboundFramebuffer(null)
          }, Bc.ThinEngine.prototype.createMultipleRenderTarget = function(bb, cb) {
            let sb, kb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Wb = !1,
              ab = !0,
              Tb = !1,
              Ub = !1,
              Ib = 1,
              Hb = 1,
              fb = [],
              Mb = [],
              Xb = [],
              nb = [],
              mb = [],
              lb = [],
              Qb = [],
              eb = [],
              Cb = [],
              Nb = !1;
            const Vb = this._createHardwareRenderTargetWrapper(!0, !1, bb);
            void 0 !== cb && (Wb = void 0 !== cb.generateMipMaps && cb.generateMipMaps, ab = void 0 === cb.generateDepthBuffer || cb.generateDepthBuffer, Tb = void 0 !== cb.generateStencilBuffer && cb.generateStencilBuffer, Ub = void 0 !== cb.generateDepthTexture && cb.generateDepthTexture, Ib = cb.QTb ?? 1, Hb = cb.samples ?? Hb, fb = cb.types || fb, Mb = cb.samplingModes || Mb, Xb = cb.useSRGBBuffers || Xb, nb = cb.formats || nb, mb = cb.targetTypes || mb, lb = cb.faceIndex || lb, Qb = cb.layerIndex || Qb, eb = cb.layerCounts || eb, Cb = cb.labels || Cb, Nb = cb.dontCreateTextures ?? !1, this.gl > 1 && (13 === cb.depthTextureFormat || 17 === cb.depthTextureFormat || 16 === cb.depthTextureFormat || 14 === cb.depthTextureFormat || 18 === cb.depthTextureFormat) && (sb = cb.depthTextureFormat)), void 0 === sb && (sb = Tb ? 13 : 14);
            const Lb = this._gl,
              ub = this._currentFramebuffer,
              Yb = Lb.createFramebuffer();
            this._bindUnboundFramebuffer(Yb);
            const hb = bb.width ?? bb,
              Jb = bb.height ?? bb,
              gb = [],
              tb = [],
              yb = this.gl > 1 && (13 === sb || 17 === sb || 18 === sb);
            Vb.label = cb?.label ?? "MultiRenderTargetWrapper", Vb._framebuffer = Yb, Vb._generateDepthBuffer = Ub || ab, Vb._generateStencilBuffer = Ub ? yb : Tb, Vb._depthStencilBuffer = this._setupFramebufferDepthAttachments(Vb._generateStencilBuffer, Vb._generateDepthBuffer, hb, Jb, 1, sb), Vb._attachments = tb;
            for (let Pb = 0; Pb < Ib; Pb++) {
              let bb = Mb[Pb] || 3,
                cb = fb[Pb] || 0,
                sb = Xb[Pb] || !1;
              const kb = nb[Pb] || 5,
                ab = mb[Pb] || 3553,
                Tb = eb[Pb] ?? 1;
              (1 !== cb || this._caps.textureFloatLinearFiltering) && (2 !== cb || this._caps.textureHalfFloatLinearFiltering) || (bb = 1);
              const Ub = this._getSamplingParameters(bb, Wb);
              1 !== cb || this._caps.textureFloat || (cb = 0, Bb.c.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), sb = sb && this._caps.supportSRGBBuffers && (this.gl > 1 || this.isWebGPU);
              const Ib = this.gl > 1,
                Hb = Lb[Ib ? "COLOR_ATTACHMENT" + Pb : "COLOR_ATTACHMENT" + Pb + "_WEBGL"];
              if (tb.push(Hb), -1 === ab || Nb) continue;
              const lb = new gc.b(this, 6);
              gb[Pb] = lb, Lb.activeTexture(Lb["TEXTURE" + Pb]), Lb.bindTexture(ab, lb._hardwareTexture.underlyingResource), Lb.texParameteri(ab, Lb.TEXTURE_MAG_FILTER, Ub.mag), Lb.texParameteri(ab, Lb.TEXTURE_MIN_FILTER, Ub.min), Lb.texParameteri(ab, Lb.TEXTURE_WRAP_S, Lb.CLAMP_TO_EDGE), Lb.texParameteri(ab, Lb.TEXTURE_WRAP_T, Lb.CLAMP_TO_EDGE);
              const Qb = this._getRGBABufferInternalSizedFormat(cb, kb, sb),
                ub = this._getInternalFormat(kb),
                Yb = this._getWebGLTextureType(cb);
              if (!Ib || 35866 !== ab && 32879 !== ab)
                if (34067 === ab) {
                  for (let bb = 0; bb < 6; bb++) Lb.texImage2D(Lb.TEXTURE_CUBE_MAP_POSITIVE_X + bb, 0, Qb, hb, Jb, 0, ub, Yb, null);
                  lb.isCube = !0
                } else Lb.texImage2D(Lb.TEXTURE_2D, 0, Qb, hb, Jb, 0, ub, Yb, null);
              else 35866 === ab ? lb.is2DArray = !0 : lb.is3D = !0, lb.baseDepth = lb.depth = Tb, Lb.texImage3D(ab, 0, Qb, hb, Jb, Tb, 0, ub, Yb, null);
              Wb && Lb.generateMipmap(ab), this._bindTextureDirectly(ab, null), lb.baseWidth = hb, lb.baseHeight = Jb, lb.width = hb, lb.height = Jb, lb.isReady = !0, lb.samples = 1, lb.generateMipMaps = Wb, lb.samplingMode = bb, lb.type = cb, lb._useSRGBBuffer = sb, lb.format = kb, lb.label = Cb[Pb] ?? Vb.label + "-Texture" + Pb, this._internalTexturesCache.push(lb)
            }
            if (Ub && this._caps.depthTextureExtension && !Nb) {
              const bb = new gc.b(this, 14);
              let cb = 5,
                kb = Lb.DEPTH_COMPONENT16,
                ab = Lb.DEPTH_COMPONENT,
                Tb = Lb.UNSIGNED_SHORT,
                Ub = Lb.DEPTH_ATTACHMENT;
              this.gl < 2 ? kb = Lb.DEPTH_COMPONENT : 14 === sb ? (cb = 1, Tb = Lb.FLOAT, kb = Lb.DEPTH_COMPONENT32F) : 18 === sb ? (cb = 0, Tb = Lb.FLOAT_32_UNSIGNED_INT_24_8_REV, kb = Lb.DEPTH32F_STENCIL8, ab = Lb.DEPTH_STENCIL, Ub = Lb.DEPTH_STENCIL_ATTACHMENT) : 16 === sb ? (cb = 0, Tb = Lb.UNSIGNED_INT, kb = Lb.DEPTH_COMPONENT24, Ub = Lb.DEPTH_ATTACHMENT) : 13 !== sb && 17 !== sb || (cb = 12, Tb = Lb.UNSIGNED_INT_24_8, kb = Lb.DEPTH24_STENCIL8, ab = Lb.DEPTH_STENCIL, Ub = Lb.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(Lb.TEXTURE_2D, bb, !0), Lb.texParameteri(Lb.TEXTURE_2D, Lb.TEXTURE_MAG_FILTER, Lb.NEAREST), Lb.texParameteri(Lb.TEXTURE_2D, Lb.TEXTURE_MIN_FILTER, Lb.NEAREST), Lb.texParameteri(Lb.TEXTURE_2D, Lb.TEXTURE_WRAP_S, Lb.CLAMP_TO_EDGE), Lb.texParameteri(Lb.TEXTURE_2D, Lb.TEXTURE_WRAP_T, Lb.CLAMP_TO_EDGE), Lb.texImage2D(Lb.TEXTURE_2D, 0, kb, hb, Jb, 0, ab, Tb, null), Lb.framebufferTexture2D(Lb.FRAMEBUFFER, Ub, Lb.TEXTURE_2D, bb._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(Lb.TEXTURE_2D, null), Vb._depthStencilTexture = bb, Vb._depthStencilTextureWithStencil = yb, bb.baseWidth = hb, bb.baseHeight = Jb, bb.width = hb, bb.height = Jb, bb.isReady = !0, bb.samples = 1, bb.generateMipMaps = Wb, bb.samplingMode = 1, bb.format = sb, bb.type = cb, bb.label = Vb.label + "-DepthStencil", gb[Ib] = bb, this._internalTexturesCache.push(bb)
            }
            if (Vb.setTextures(gb), kb && Lb.drawBuffers(tb), this._bindUnboundFramebuffer(ub), Vb.setLayerAndFaceIndices(Qb, lb), this.resetTextureCache(), Nb) {
              if (Hb > 1) {
                const bb = Lb.createFramebuffer();
                if (!bb) throw new Error("Unable to create multi sampled framebuffer");
                Vb._samples = Hb, Vb._MSAAFramebuffer = bb, Ib > 0 && kb && (this._bindUnboundFramebuffer(bb), Lb.drawBuffers(tb), this._bindUnboundFramebuffer(ub))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(Vb, Hb, kb);
            return Vb
          }, Bc.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(bb, cb) {
            let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.gl < 2 || !bb) return 1;
            if (bb.samples === cb) return cb;
            const kb = this._gl;
            cb = Math.min(cb, this.getCaps().maxMSAASamples), bb._depthStencilBuffer && (kb.deleteRenderbuffer(bb._depthStencilBuffer), bb._depthStencilBuffer = null), bb._MSAAFramebuffer && (kb.deleteFramebuffer(bb._MSAAFramebuffer), bb._MSAAFramebuffer = null);
            const Wb = bb._attachments.length;
            for (let Tb = 0; Tb < Wb; Tb++) {
              const cb = bb.textures[Tb]._hardwareTexture;
              cb?.releaseMSAARenderBuffers()
            }
            if (cb > 1 && "function" === typeof kb.renderbufferStorageMultisample) {
              const ab = kb.createFramebuffer();
              if (!ab) throw new Error("Unable to create multi sampled framebuffer");
              bb._MSAAFramebuffer = ab, this._bindUnboundFramebuffer(ab);
              const Tb = [];
              for (let sb = 0; sb < Wb; sb++) {
                const Wb = bb.textures[sb],
                  ab = Wb._hardwareTexture,
                  Ub = kb[this.gl > 1 ? "COLOR_ATTACHMENT" + sb : "COLOR_ATTACHMENT" + sb + "_WEBGL"],
                  Ib = this._createRenderBuffer(Wb.width, Wb.height, cb, -1, this._getRGBABufferInternalSizedFormat(Wb.type, Wb.format, Wb._useSRGBBuffer), Ub);
                if (!Ib) throw new Error("Unable to create multi sampled framebuffer");
                ab.addMSAARenderBuffer(Ib), Wb.samples = cb, Tb.push(Ub)
              }
              sb && kb.drawBuffers(Tb)
            } else this._bindUnboundFramebuffer(bb._framebuffer);
            const ab = bb._depthStencilTexture ? bb._depthStencilTexture.format : void 0;
            return bb._depthStencilBuffer = this._setupFramebufferDepthAttachments(bb._generateStencilBuffer, bb._generateDepthBuffer, bb.width, bb.height, cb, ab), this._bindUnboundFramebuffer(null), bb._samples = cb, cb
          }, Bc.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(bb) {
            const cb = bb,
              sb = this._gl;
            if (cb.isMulti)
              for (let kb = 0; kb < cb._attachments.length; kb++) {
                const bb = cb.textures[kb];
                !bb?.generateMipMaps || bb?.isCube || bb?.is3D || (this._bindTextureDirectly(sb.TEXTURE_2D, bb, !0), sb.generateMipmap(sb.TEXTURE_2D), this._bindTextureDirectly(sb.TEXTURE_2D, null))
              }
          }, Bc.ThinEngine.prototype.resolveMultiFramebuffer = function(bb) {
            const cb = bb,
              sb = this._gl;
            if (!cb._MSAAFramebuffer || !cb.isMulti) return;
            let kb = cb.resolveMSAAColors ? sb.COLOR_BUFFER_BIT : 0;
            kb |= cb._generateDepthBuffer && cb.resolveMSAADepth ? sb.DEPTH_BUFFER_BIT : 0, kb |= cb._generateStencilBuffer && cb.resolveMSAAStencil ? sb.STENCIL_BUFFER_BIT : 0;
            const Wb = cb._attachments,
              ab = Wb.length;
            sb.bindFramebuffer(sb.READ_FRAMEBUFFER, cb._MSAAFramebuffer), sb.bindFramebuffer(sb.DRAW_FRAMEBUFFER, cb._framebuffer);
            for (let Tb = 0; Tb < ab; Tb++) {
              const bb = cb.textures[Tb];
              for (let cb = 0; cb < ab; cb++) Wb[cb] = sb.NONE;
              Wb[Tb] = sb[this.gl > 1 ? "COLOR_ATTACHMENT" + Tb : "COLOR_ATTACHMENT" + Tb + "_WEBGL"], sb.readBuffer(Wb[Tb]), sb.drawBuffers(Wb), sb.blitFramebuffer(0, 0, bb.width, bb.height, 0, 0, bb.width, bb.height, kb, sb.NEAREST)
            }
            for (let Tb = 0; Tb < ab; Tb++) Wb[Tb] = sb[this.gl > 1 ? "COLOR_ATTACHMENT" + Tb : "COLOR_ATTACHMENT" + Tb + "_WEBGL"];
            sb.drawBuffers(Wb), sb.bindFramebuffer(this._gl.FRAMEBUFFER, cb._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = ab;
        const Mb = [],
          Xb = [],
          nb = [],
          mb = [],
          lb = [],
          Qb = [],
          eb = [],
          Cb = [];
        this._initTypes(sb, Mb, Xb, nb, mb, lb, Qb, eb, Cb, Wb);
        const Nb = !Wb || void 0 === Wb.generateDepthBuffer || Wb.generateDepthBuffer,
          Vb = !(!Wb || void 0 === Wb.generateStencilBuffer) && Wb.generateStencilBuffer,
          Lb = Wb && Wb.samples ? Wb.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: Xb,
          generateMipMaps: Tb,
          generateDepthBuffer: Nb,
          generateStencilBuffer: Vb,
          generateDepthTexture: Ub,
          depthTextureFormat: Ib,
          types: Mb,
          QTb: sb,
          useSRGBBuffers: nb,
          samples: Lb,
          formats: mb,
          targetTypes: lb,
          faceIndex: Qb,
          layerIndex: eb,
          layerCounts: Cb,
          labels: ab,
          label: bb
        }, this._count = sb, this._drawOnlyOnFirstAttachmentByDefault = fb, sb > 0 && (this._createInternalTextures(), this._createTextures(ab))
      }
      _initTypes(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) {
        for (let fb = 0; fb < bb; fb++) Hb && Hb.types && void 0 !== Hb.types[fb] ? cb.push(Hb.types[fb]) : cb.push(Hb && Hb.defaultType ? Hb.defaultType : 0), Hb && Hb.samplingModes && void 0 !== Hb.samplingModes[fb] ? sb.push(Hb.samplingModes[fb]) : sb.push(yb.e.BILINEAR_SAMPLINGMODE), Hb && Hb.useSRGBBuffers && void 0 !== Hb.useSRGBBuffers[fb] ? kb.push(Hb.useSRGBBuffers[fb]) : kb.push(!1), Hb && Hb.formats && void 0 !== Hb.formats[fb] ? Wb.push(Hb.formats[fb]) : Wb.push(5), Hb && Hb.targetTypes && void 0 !== Hb.targetTypes[fb] ? ab.push(Hb.targetTypes[fb]) : ab.push(3553), Hb && Hb.faceIndex && void 0 !== Hb.faceIndex[fb] ? Tb.push(Hb.faceIndex[fb]) : Tb.push(0), Hb && Hb.layerIndex && void 0 !== Hb.layerIndex[fb] ? Ub.push(Hb.layerIndex[fb]) : Ub.push(0), Hb && Hb.layerCounts && void 0 !== Hb.layerCounts[fb] ? Ib.push(Hb.layerCounts[fb]) : Ib.push(1)
      }
      _createInternaTextureIndexMapping() {
        const bb = {},
          cb = [];
        if (!this._renderTarget) return cb;
        const sb = this._renderTarget.textures;
        for (let kb = 0; kb < sb.length; kb++) {
          const Wb = sb[kb];
          if (!Wb) continue;
          const ab = bb[Wb.uniqueId];
          void 0 !== ab ? cb[kb] = ab : bb[Wb.uniqueId] = kb
        }
        return cb
      }
      _rebuild() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || bb) return;
        const kb = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), cb && (this._releaseTextures(), this._createTextures(sb));
        const Wb = this._renderTarget.textures;
        for (let ab = 0; ab < Wb.length; ab++) {
          const bb = this._textures[ab];
          void 0 !== kb[ab] && this._renderTarget.setTexture(Wb[kb[ab]], ab), bb._texture = Wb[ab], bb._texture && (bb._noMipmap = !bb._texture.useMipMaps, bb._useSRGBBuffer = bb._texture._useSRGBBuffer)
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
        const cb = this._renderTarget.textures;
        this._textures = [];
        for (let sb = 0; sb < cb.length; sb++) {
          const kb = new yb.e(null, this.EY());
          bb?.[sb] && (kb.name = bb[sb]), kb._texture = cb[sb], kb._texture && (kb._noMipmap = !kb._texture.useMipMaps, kb._useSRGBBuffer = kb._texture._useSRGBBuffer), this._textures.push(kb)
        }
      }
      setInternalTexture(bb, cb) {
        let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === cb && (this._texture = bb), this.renderTarget.setTexture(bb, cb, sb), this.textures[cb] || (this.textures[cb] = new yb.e(null, this.EY()), this.textures[cb].name = this._textureNames?.[cb] ?? this.textures[cb].name), this.textures[cb]._texture = bb, this.textures[cb]._noMipmap = !bb.useMipMaps, this.textures[cb]._useSRGBBuffer = bb._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[cb] = bb.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[cb] = bb.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[cb] = bb._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[cb])) {
          let sb;
          sb = bb.is2DArray ? 35866 : bb.isCube ? 34067 : bb.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[cb] = sb
        }
      }
      setLayerAndFaceIndex(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[bb] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[bb] = cb), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[bb] = sb), this.renderTarget.setLayerAndFaceIndex(bb, cb, sb))
      }
      setLayerAndFaceIndices(bb, cb) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = bb, this._multiRenderTargetOptions.faceIndex = cb, this.renderTarget.setLayerAndFaceIndices(bb, cb))
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
      updateCount(bb, cb, sb) {
        this._multiRenderTargetOptions.QTb = bb, this._count = bb;
        const kb = [],
          Wb = [],
          ab = [],
          Tb = [],
          Ub = [],
          Ib = [],
          Hb = [],
          fb = [];
        this._textureNames = sb, this._initTypes(bb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, cb), this._multiRenderTargetOptions.types = kb, this._multiRenderTargetOptions.samplingModes = Wb, this._multiRenderTargetOptions.useSRGBBuffers = ab, this._multiRenderTargetOptions.formats = Tb, this._multiRenderTargetOptions.targetTypes = Ub, this._multiRenderTargetOptions.faceIndex = Ib, this._multiRenderTargetOptions.layerIndex = Hb, this._multiRenderTargetOptions.layerCounts = fb, this._multiRenderTargetOptions.labels = sb, this._rebuild(!1, !0, sb)
      }
      _unbindFrameBuffer(bb, cb) {
        this._renderTarget && bb.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(cb)
        }))
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), bb ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const bb = this._renderTarget?.textures;
        if (bb) {
          for (let cb = bb.length - 1; cb >= 0; cb--) this._textures[cb]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var ic = sb(39608);
    class Oc {
      constructor(bb) {
        this.name = ic.e.NAME_GEOMETRYBUFFERRENDERER, this.aQ = bb
      }
      register() {
        this.aQ._gatherRenderTargetsStage.registerStep(ic.e.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(bb) {
        this.aQ._geometryBufferRenderer && bb.push(this.aQ._geometryBufferRenderer.getGBuffer())
      }
    }
    let Gc = !1;
    var Kc;
    ! function(bb) {
      bb[bb.Small = 0] = "Small", bb[bb.Medium = 1] = "Medium", bb[bb.Large = 2] = "Large", bb[bb.ExtraLarge = 3] = "ExtraLarge"
    }(Kc || (Kc = {}));
    const Zc = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      zc = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class qc {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(bb) {
        if (bb && this._enableMeshBlendTag && !this._scene.Sm().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
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
      _forceTextureType(bb, cb) {
        bb === qc.POSITION_TEXTURE_TYPE ? (this._positionIndex = cb, this._enablePosition = !0) : bb === qc.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = cb, this._enableVelocity = !0) : bb === qc.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = cb, this._enableVelocityLinear = !0) : bb === qc.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = cb, this._enableReflectivity = !0) : bb === qc.DEPTH_TEXTURE_TYPE ? (this._depthIndex = cb, this._enableDepth = !0) : bb === qc.NORMAL_TEXTURE_TYPE ? (this._normalIndex = cb, this._enableNormal = !0) : bb === qc.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = cb, this._enableScreenspaceDepth = !0) : bb === qc.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = cb, this._enableIrradiance = !0) : bb === qc.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = cb, this._enableObjectId = !0) : bb === qc.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = cb, this._enableMeshBlendTag = !0)
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
          case qc.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case qc.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case qc.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case qc.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case qc.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case qc.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case qc.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case qc.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case qc.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case qc.MESH_BLEND_TAG_TEXTURE_TYPE:
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
          const bb = this._scene.Sm(),
            cb = Math.min(bb.getCaps().maxDrawBuffers ?? 1, 8),
            sb = this._assignRenderTargetIndices()[0] + 1;
          if (bb.getCaps().drawBuffersExtension && sb > cb) throw new Error(`GeometryBufferRenderer: ${sb} color attachments were requested, but this engine supports at most ${cb}`)
        }
        this._enableObjectId = bb, bb || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(bb) {
        if (this._enableMeshBlendTag !== bb) {
          if (bb) {
            const bb = this._scene.Sm();
            if (! function(bb) {
                return "NATIVE" !== bb.shaderPlatformName && (bb.isWebGPU || 2 === bb.gl)
              }(bb)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !bb.isWebGPU && !bb.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const cb = Math.min(bb.getCaps().maxDrawBuffers ?? 1, 8),
                sb = this._assignRenderTargetIndices()[0] + 1;
              if (bb.getCaps().drawBuffersExtension && sb > cb) throw new Error(`GeometryBufferRenderer: ${sb} color attachments were requested, but this engine supports at most ${cb}`)
            }
          }
          this._enableMeshBlendTag = bb, bb || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get aQ() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          kb = arguments.length > 3 ? arguments[3] : void 0;
        var Wb;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new ob.g(0, 0, 0, 0), this._clearDepthColor = new ob.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = bb, this._ratioOrDimensions = cb, this._useUbo = bb.Sm().supportsUniformBuffers, this._depthFormat = sb, this._textureTypesAndFormats = kb || {}, this._initShaderSourceAsync(), Wb = qc, Gc || (Gc = !0, Object.defineProperty(Kb.c.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(bb) {
            bb && bb.isSupported && (this._geometryBufferRenderer = bb)
          },
          enumerable: !0,
          configurable: !0
        }), Kb.c.prototype.enableGeometryBufferRenderer = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            sb = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Wb(this, bb, cb, sb), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, Kb.c.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Wb._SceneComponentInitialization = bb => {
          let cb = bb._getComponent(ic.e.NAME_GEOMETRYBUFFERRENDERER);
          cb || (cb = new Oc(bb), bb.Vsb(cb))
        }), qc._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.Sm().isWebGPU && !qc.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([sb.e(327).then((() => sb(61264))), Promise.all([sb.e(326), sb.e(338)]).then((() => sb(61270)))])) : await Promise.all([sb.e(310).then((() => sb(61277))), sb.e(309).then((() => sb(61279)))]), this._shadersLoaded = !0
      }
      isReady(bb, cb) {
        if (!this._shadersLoaded) return !1;
        const sb = bb.pm();
        if (sb && sb.disableDepthWrite) return !1;
        if (function(bb) {
            return bb._isGaussianSplatting || "GaussianSplattingMesh" === (cb = bb.getClassName()) || "GaussianSplattingStream" === cb;
            var cb
          }(bb.getMesh())) return !1;
        const kb = [],
          Wb = [zb.l.PositionKind],
          ab = bb.getMesh();
        ab.isVerticesDataPresent(zb.l.NormalKind) && (kb.push("#define HAS_NORMAL_ATTRIBUTE"), Wb.push(zb.l.NormalKind));
        let Tb = !1,
          Ub = !1;
        if (sb) {
          let bb = !1;
          if (sb.needAlphaTestingForMesh(ab) && sb.getAlphaTestTexture() && (kb.push("#define ALPHATEST"), kb.push(`#define ALPHATEST_UV${sb.getAlphaTestTexture().coordinatesIndex+1}`), bb = !0), (sb.bumpTexture || sb.normalTexture || sb.geometryNormalTexture) && Fb.e.BumpTextureEnabled) {
            const cb = sb.bumpTexture || sb.normalTexture || sb.geometryNormalTexture;
            kb.push("#define BUMP"), kb.push(`#define BUMP_UV${cb.coordinatesIndex+1}`), bb = !0
          }
          if (this._enableReflectivity) {
            let cb = !1;
            if ("PBRMetallicRoughnessMaterial" === sb.getClassName()) sb.metallicRoughnessTexture && (kb.push("#define ORMTEXTURE"), kb.push(`#define REFLECTIVITY_UV${sb.metallicRoughnessTexture.coordinatesIndex+1}`), kb.push("#define METALLICWORKFLOW"), bb = !0, cb = !0), null != sb.metallic && (kb.push("#define METALLIC"), kb.push("#define METALLICWORKFLOW"), cb = !0), null != sb.roughness && (kb.push("#define ROUGHNESS"), kb.push("#define METALLICWORKFLOW"), cb = !0), cb && (sb.baseTexture && (kb.push("#define ALBEDOTEXTURE"), kb.push(`#define ALBEDO_UV${sb.baseTexture.coordinatesIndex+1}`), sb.baseTexture.gammaSpace && kb.push("#define GAMMAALBEDO"), bb = !0), sb.baseColor && kb.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === sb.getClassName()) sb.specularGlossinessTexture ? (kb.push("#define SPECULARGLOSSINESSTEXTURE"), kb.push(`#define REFLECTIVITY_UV${sb.specularGlossinessTexture.coordinatesIndex+1}`), bb = !0, sb.specularGlossinessTexture.gammaSpace && kb.push("#define GAMMAREFLECTIVITYTEXTURE")) : sb.specularColor && kb.push("#define REFLECTIVITYCOLOR"), null != sb.glossiness && kb.push("#define GLOSSINESS");
            else if ("PBRMaterial" === sb.getClassName()) sb.metallicTexture && (kb.push("#define ORMTEXTURE"), kb.push(`#define REFLECTIVITY_UV${sb.metallicTexture.coordinatesIndex+1}`), kb.push("#define METALLICWORKFLOW"), bb = !0, cb = !0), null != sb.metallic && (kb.push("#define METALLIC"), kb.push("#define METALLICWORKFLOW"), cb = !0), null != sb.roughness && (kb.push("#define ROUGHNESS"), kb.push("#define METALLICWORKFLOW"), cb = !0), cb ? (sb.albedoTexture && (kb.push("#define ALBEDOTEXTURE"), kb.push(`#define ALBEDO_UV${sb.albedoTexture.coordinatesIndex+1}`), sb.albedoTexture.gammaSpace && kb.push("#define GAMMAALBEDO"), bb = !0), sb.albedoColor && kb.push("#define ALBEDOCOLOR")) : (sb.reflectivityTexture ? (kb.push("#define SPECULARGLOSSINESSTEXTURE"), kb.push(`#define REFLECTIVITY_UV${sb.reflectivityTexture.coordinatesIndex+1}`), sb.reflectivityTexture.gammaSpace && kb.push("#define GAMMAREFLECTIVITYTEXTURE"), bb = !0) : sb.reflectivityColor && kb.push("#define REFLECTIVITYCOLOR"), null != sb.microSurface && kb.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === sb.getClassName()) sb.specularTexture && (kb.push("#define REFLECTIVITYTEXTURE"), kb.push(`#define REFLECTIVITY_UV${sb.specularTexture.coordinatesIndex+1}`), sb.specularTexture.gammaSpace && kb.push("#define GAMMAREFLECTIVITYTEXTURE"), bb = !0), sb.specularColor && kb.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === sb.getClassName()) {
              const cb = sb;
              kb.push("#define METALLIC"), kb.push("#define ROUGHNESS"), cb._useRoughnessFromMetallicTextureGreen && cb.baseMetalnessTexture ? (kb.push("#define ORMTEXTURE"), kb.push(`#define REFLECTIVITY_UV${cb.baseMetalnessTexture.coordinatesIndex+1}`), bb = !0) : cb.baseMetalnessTexture ? (kb.push("#define METALLIC_TEXTURE"), kb.push(`#define METALLIC_UV${cb.baseMetalnessTexture.coordinatesIndex+1}`), bb = !0) : cb.specularRoughnessTexture && (kb.push("#define ROUGHNESS_TEXTURE"), kb.push(`#define ROUGHNESS_UV${cb.specularRoughnessTexture.coordinatesIndex+1}`), bb = !0), cb.baseColorTexture && (kb.push("#define ALBEDOTEXTURE"), kb.push(`#define ALBEDO_UV${cb.baseColorTexture.coordinatesIndex+1}`), cb.baseColorTexture.gammaSpace && kb.push("#define GAMMAALBEDO"), bb = !0), cb.baseColor && kb.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (kb.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === sb.getClassName())) {
            const cb = sb;
            cb.subsurfaceWeight > 0 && cb.subsurfaceWeightTexture && (kb.push("#define SUBSURFACE_WEIGHT"), kb.push(`#define SUBSURFACEWEIGHT_UV${cb.subsurfaceWeightTexture.coordinatesIndex+1}`), bb = !0), cb.transmissionWeight > 0 && cb.transmissionWeightTexture && (kb.push("#define TRANSMISSION_WEIGHT"), kb.push(`#define TRANSMISSIONWEIGHT_UV${cb.transmissionWeightTexture.coordinatesIndex+1}`), bb = !0)
          }
          bb && (kb.push("#define NEED_UV"), ab.isVerticesDataPresent(zb.l.UVKind) && (Wb.push(zb.l.UVKind), kb.push("#define UV1"), Tb = !0), ab.isVerticesDataPresent(zb.l.UV2Kind) && (Wb.push(zb.l.UV2Kind), kb.push("#define UV2"), Ub = !0))
        }
        if (this._enableDepth && (kb.push("#define DEPTH"), kb.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (kb.push("#define NORMAL"), kb.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (kb.push("#define POSITION"), kb.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (kb.push("#define VELOCITY"), kb.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(ab) && kb.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (kb.push("#define VELOCITY_LINEAR"), kb.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(ab) && kb.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (kb.push("#define REFLECTIVITY"), kb.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (kb.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), kb.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          kb.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), kb.push("#define IRRADIANCE");
          const bb = this._scene;
          if (bb.environmentTexture) {
            const cb = {};
            let Wb = !1,
              ab = 0;
            "OpenPBRMaterial" !== sb.getClassName() && "StandardMaterial" !== sb.getClassName() && "PBRMetallicRoughnessMaterial" !== sb.getClassName() && "PBRSpecularGlossinessMaterial" !== sb.getClassName() && "PBRMaterial" !== sb.getClassName() || (Wb = !!sb.realtimeFiltering, ab = sb.realtimeFilteringQuality || 0), (0, jb._)(bb, bb.environmentTexture, cb, Wb, ab, !0);
            for (const bb in cb) cb[bb] && kb.push("#define " + bb);
            cb.USEIRRADIANCEMAP || kb.push("#define SPHERICAL_HARMONICS");
            const Tb = bb.postProcessRenderPipelineManager.supportedPipelines.find((bb => "IBLShadowsRenderPipeline" === bb.getClassName()));
            if (Tb) {
              const bb = Tb;
              bb._getAccumulatedTexture() && (kb.push("#define IBL_SHADOW_TEXTURE"), bb.coloredShadows && kb.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (kb.push("#define OBJECT_ID"), kb.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (kb.push("#define MESH_BLEND_TAG"), kb.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && kb.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && kb.push("#define ENCODE_NORMAL"), ab.useBones && ab.computeBonesUsingShaders && ab.skeleton ? (Wb.push(zb.l.MatricesIndicesKind), Wb.push(zb.l.MatricesWeightsKind), ab.numBoneInfluencers > 4 && (Wb.push(zb.l.MatricesIndicesExtraKind), Wb.push(zb.l.MatricesWeightsExtraKind)), kb.push("#define NUM_BONE_INFLUENCERS " + ab.numBoneInfluencers), kb.push("#define BONETEXTURE " + ab.skeleton.isUsingTextureForMatrices), kb.push("#define BonesPerMesh " + (ab.skeleton.bones.length + 1))) : (kb.push("#define NUM_BONE_INFLUENCERS 0"), kb.push("#define BONETEXTURE false"), kb.push("#define BonesPerMesh 0"));
        const Ib = ab.morphTargetManager ? (0, jb.R)(ab.morphTargetManager, kb, Wb, ab, !0, !0, !1, Tb, Ub, !1) : 0;
        cb && (kb.push("#define INSTANCES"), (0, jb.Db)(Wb, this._enableVelocity || this._enableVelocityLinear), bb.getRenderingMesh().hasThinInstances && kb.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? kb.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : kb.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, fc.j)(sb, this._scene, kb);
        const Hb = this._scene.Sm(),
          fb = bb._getDrawWrapper(void 0, !0),
          Mb = fb.defines,
          Xb = kb.join("\n");
        return Mb !== Xb && fb.setEffect(Hb.createEffect("geometry", {
          attributes: Wb,
          uniformsNames: zc,
          samplers: Zc,
          defines: Xb,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: Ib
          },
          shaderLanguage: this.shaderLanguage
        }, Hb), Xb), fb.effect.isReady()
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
          this._scene.Sm().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.aQ.Sm()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.aQ.Sm().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const bb = [],
          cb = [];
        let sb = 0;
        return this._enableDepth && (this._depthIndex = sb, sb++, bb.push("gBuffer_Depth"), cb.push(this._textureTypesAndFormats[qc.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = sb, sb++, bb.push("gBuffer_Normal"), cb.push(this._textureTypesAndFormats[qc.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = sb, sb++, bb.push("gBuffer_Position"), cb.push(this._textureTypesAndFormats[qc.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = sb, sb++, bb.push("gBuffer_Velocity"), cb.push(this._textureTypesAndFormats[qc.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = sb, sb++, bb.push("gBuffer_VelocityLinear"), cb.push(this._textureTypesAndFormats[qc.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = sb, sb++, bb.push("gBuffer_Reflectivity"), cb.push(this._textureTypesAndFormats[qc.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = sb, sb++, bb.push("gBuffer_ScreenspaceDepth"), cb.push(this._textureTypesAndFormats[qc.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = sb, sb++, bb.push("gBuffer_Irradiance"), cb.push(this._textureTypesAndFormats[qc.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = sb, sb++, bb.push("gBuffer_ObjectId"), cb.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = sb, sb++, bb.push("gBuffer_MeshBlendTag"), cb.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [sb, bb, cb]
      }
      _createRenderTargets() {
        const bb = this._scene.Sm(),
          [cb, sb, kb] = this._assignRenderTargetIndices(),
          Wb = Math.min(bb.getCaps().maxDrawBuffers ?? 1, 8);
        if (bb.getCaps().drawBuffersExtension && cb > Wb) throw new Error(`GeometryBufferRenderer: ${cb} color attachments were requested, but this engine supports at most ${Wb}`);
        let Tb = 0;
        bb._caps.textureFloat && bb._caps.textureFloatLinearFiltering ? Tb = 1 : bb._caps.textureHalfFloat && bb._caps.textureHalfFloatLinearFiltering && (Tb = 2);
        const Ub = this._getRenderTargetDimensions(),
          Ib = [],
          Hb = [],
          fb = [];
        for (const ab of kb) ab ? (Ib.push(ab.textureType), Hb.push(ab.textureFormat), fb.push(ab.samplingMode ?? 2)) : (Ib.push(Tb), Hb.push(5), fb.push(2));
        if (this._normalsAreUnsigned = 11 === Ib[qc.NORMAL_TEXTURE_TYPE] || 13 === Ib[qc.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new Ec("gBuffer", Ub, cb, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: Ib,
            formats: Hb,
            samplingModes: fb,
            depthTextureFormat: this._depthFormat
          }, sb.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = yb.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = yb.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const Mb = [!0],
          Xb = [!1],
          nb = [!0];
        for (let ab = 1; ab < cb; ++ab) Mb.push(!0), nb.push(!1), Xb.push(!0);
        const mb = bb.buildTextureLayout(Mb),
          lb = bb.buildTextureLayout(Xb),
          Qb = bb.buildTextureLayout(nb);
        this._multiRenderTarget.onClearObservable.add((bb => {
          const cb = this.useSpecificClearForDepthTexture ? lb : mb;
          bb.clearAttachments(this._clearColor, cb, !0, !0, !0), this.useSpecificClearForDepthTexture && bb.clearAttachments(this._clearDepthColor, Qb, !0, !1, !1), bb.bindAttachments(mb)
        })), this._resizeObserver = bb.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const eb = bb => {
          const cb = bb.getRenderingMesh(),
            sb = bb.getEffectiveMesh(),
            kb = this._scene,
            Wb = kb.Sm(),
            Tb = bb.pm();
          if (!Tb) return;
          if (sb._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[sb.uniqueId] && (this._previousTransformationMatrices[sb.uniqueId] = {
              fX: Zb.e.Identity(),
              viewProjection: kb.getTransformMatrix()
            }, cb.skeleton)) {
            const bb = cb.skeleton.getTransformMatrices(cb);
            this._previousBonesTransformationMatrices[cb.uniqueId] = this._copyBonesTransformationMatrices(bb, new Float32Array(bb.length))
          }
          const Ub = cb._getInstancesRenderList(bb._id, !!bb.getReplacementMesh());
          if (Ub.mustReturn) return;
          const Ib = Wb.getCaps().instancedArrays && (null !== Ub.visibleInstances[bb._id] || cb.hasThinInstances),
            Hb = sb.getWorldMatrix();
          if (this.isReady(bb, Ib)) {
            const fb = bb._getDrawWrapper();
            if (!fb) return;
            const Mb = fb.effect;
            let Xb;
            Wb.enableEffect(fb), Ib || cb._bind(bb, Mb, Tb.fillMode), this._useUbo ? ((0, jb.v)(Mb, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (Mb.setMatrix("viewProjection", kb.getTransformMatrix()), Mb.setMatrix("view", kb.getViewMatrix()), this._scene.bindEyePosition(Mb, "vEyePosition"));
            if (cb._instanceDataStorage.isFrozen || !Tb.backFaceCulling && null === Tb.sideOrientation) Xb = cb._effectiveSideOrientation;
            else {
              const bb = sb._getWorldMatrixDeterminant();
              Xb = Tb._getEffectiveOrientation(cb), bb < 0 && (Xb = Xb === ab.e.ClockWiseSideOrientation ? ab.e.CounterClockWiseSideOrientation : ab.e.ClockWiseSideOrientation)
            }
            if (Tb._preBind(fb, Xb), Tb.needAlphaTestingForMesh(sb)) {
              const bb = Tb.getAlphaTestTexture();
              bb && (Mb.setTexture("diffuseSampler", bb), Mb.setMatrix("diffuseMatrix", bb.getTextureMatrix()), Mb.setFloat("alphaCutOff", Tb.alphaCutOff ?? .4))
            }
            if ((Tb.bumpTexture || Tb.normalTexture || Tb.geometryNormalTexture) && kb.Sm().getCaps().standardDerivatives && Fb.e.BumpTextureEnabled) {
              const bb = Tb.bumpTexture || Tb.normalTexture || Tb.geometryNormalTexture;
              Mb.setFloat3("vBumpInfos", bb.coordinatesIndex, 1 / bb.level, Tb.parallaxScaleBias), Mb.setMatrix("bumpMatrix", bb.getTextureMatrix()), Mb.setTexture("bumpSampler", bb), Mb.setFloat2("vTangentSpaceParams", Tb.invertNormalMapX ? -1 : 1, Tb.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === Tb.getClassName()) null !== Tb.metallicRoughnessTexture && (Mb.setTexture("reflectivitySampler", Tb.metallicRoughnessTexture), Mb.setMatrix("reflectivityMatrix", Tb.metallicRoughnessTexture.getTextureMatrix())), null !== Tb.metallic && Mb.setFloat("metallic", Tb.metallic), null !== Tb.roughness && Mb.setFloat("glossiness", 1 - Tb.roughness), null !== Tb.baseTexture && (Mb.setTexture("albedoSampler", Tb.baseTexture), Mb.setMatrix("albedoMatrix", Tb.baseTexture.getTextureMatrix())), null !== Tb.baseColor && Mb.setColor3("albedoColor", Tb.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === Tb.getClassName()) null !== Tb.specularGlossinessTexture ? (Mb.setTexture("reflectivitySampler", Tb.specularGlossinessTexture), Mb.setMatrix("reflectivityMatrix", Tb.specularGlossinessTexture.getTextureMatrix())) : null !== Tb.specularColor && Mb.setColor3("reflectivityColor", Tb.specularColor), null !== Tb.glossiness && Mb.setFloat("glossiness", Tb.glossiness);
            else if ("PBRMaterial" === Tb.getClassName()) null !== Tb.metallicTexture && (Mb.setTexture("reflectivitySampler", Tb.metallicTexture), Mb.setMatrix("reflectivityMatrix", Tb.metallicTexture.getTextureMatrix())), null !== Tb.metallic && Mb.setFloat("metallic", Tb.metallic), null !== Tb.roughness && Mb.setFloat("glossiness", 1 - Tb.roughness), null !== Tb.roughness || null !== Tb.metallic || null !== Tb.metallicTexture ? (null !== Tb.albedoTexture && (Mb.setTexture("albedoSampler", Tb.albedoTexture), Mb.setMatrix("albedoMatrix", Tb.albedoTexture.getTextureMatrix())), null !== Tb.albedoColor && Mb.setColor3("albedoColor", Tb.albedoColor)) : (null !== Tb.reflectivityTexture ? (Mb.setTexture("reflectivitySampler", Tb.reflectivityTexture), Mb.setMatrix("reflectivityMatrix", Tb.reflectivityTexture.getTextureMatrix())) : null !== Tb.reflectivityColor && Mb.setColor3("reflectivityColor", Tb.reflectivityColor), null !== Tb.microSurface && Mb.setFloat("glossiness", Tb.microSurface));
            else if ("StandardMaterial" === Tb.getClassName()) null !== Tb.specularTexture && (Mb.setTexture("reflectivitySampler", Tb.specularTexture), Mb.setMatrix("reflectivityMatrix", Tb.specularTexture.getTextureMatrix())), null !== Tb.specularColor && Mb.setColor3("reflectivityColor", Tb.specularColor);
            else if ("OpenPBRMaterial" === Tb.getClassName()) {
              const bb = Tb;
              bb._useRoughnessFromMetallicTextureGreen && bb.baseMetalnessTexture ? (Mb.setTexture("reflectivitySampler", bb.baseMetalnessTexture), Mb.setMatrix("reflectivityMatrix", bb.baseMetalnessTexture.getTextureMatrix())) : bb.baseMetalnessTexture ? (Mb.setTexture("metallicSampler", bb.baseMetalnessTexture), Mb.setMatrix("metallicMatrix", bb.baseMetalnessTexture.getTextureMatrix())) : bb.specularRoughnessTexture && (Mb.setTexture("roughnessSampler", bb.specularRoughnessTexture), Mb.setMatrix("roughnessMatrix", bb.specularRoughnessTexture.getTextureMatrix())), Mb.setFloat("metallic", bb.baseMetalness), Mb.setFloat("glossiness", 1 - bb.specularRoughness), null !== bb.baseColorTexture && (Mb.setTexture("albedoSampler", bb.baseColorTexture), Mb.setMatrix("albedoMatrix", bb.baseColorTexture.getTextureMatrix())), null !== bb.baseColor && Mb.setColor3("albedoColor", bb.baseColor)
            }
            if (this._enableIrradiance && kb.environmentTexture) {
              const bb = kb.environmentTexture,
                cb = kb.postProcessRenderPipelineManager.supportedPipelines.find((bb => "IBLShadowsRenderPipeline" === bb.getClassName()));
              if (cb) {
                const bb = cb._getAccumulatedTexture();
                bb && (Mb.setTexture("iblShadowSampler", bb), Mb.setFloat2("shadowTextureSize", bb.getSize().width, bb.getSize().height))
              }
              if (Mb.setMatrix("reflectionMatrix", bb.getReflectionTextureMatrix()), Mb.setFloat2("vReflectionInfos", bb.level * kb.iblIntensity, 0), Mb.setTexture("reflectionSampler", bb), bb.irradianceTexture && (Mb.setTexture("irradianceSampler", bb.irradianceTexture), bb.irradianceTexture._dominantDirection && Mb.setVector3("vReflectionDominantDirection", bb.irradianceTexture._dominantDirection)), bb.sphericalPolynomial) {
                const cb = bb.sphericalPolynomial;
                if (cb.preScaledHarmonics) {
                  const bb = cb.preScaledHarmonics;
                  Mb.setVector3("vSphericalL00", bb.l00), Mb.setVector3("vSphericalL1_1", bb.l1_1), Mb.setVector3("vSphericalL10", bb.l10), Mb.setVector3("vSphericalL11", bb.l11), Mb.setVector3("vSphericalL2_2", bb.l2_2), Mb.setVector3("vSphericalL2_1", bb.l2_1), Mb.setVector3("vSphericalL20", bb.l20), Mb.setVector3("vSphericalL21", bb.l21), Mb.setVector3("vSphericalL22", bb.l22)
                } else Mb.setFloat3("vSphericalX", cb.x.x, cb.x.y, cb.x.z), Mb.setFloat3("vSphericalY", cb.y.x, cb.y.y, cb.y.z), Mb.setFloat3("vSphericalZ", cb.z.x, cb.z.y, cb.z.z), Mb.setFloat3("vSphericalXX_ZZ", cb.xx.x - cb.zz.x, cb.xx.y - cb.zz.y, cb.xx.z - cb.zz.z), Mb.setFloat3("vSphericalYY_ZZ", cb.yy.x - cb.zz.x, cb.yy.y - cb.zz.y, cb.yy.z - cb.zz.z), Mb.setFloat3("vSphericalZZ", cb.zz.x, cb.zz.y, cb.zz.z), Mb.setFloat3("vSphericalXY", cb.xy.x, cb.xy.y, cb.xy.z), Mb.setFloat3("vSphericalYZ", cb.yz.x, cb.yz.y, cb.yz.z), Mb.setFloat3("vSphericalZX", cb.zx.x, cb.zx.y, cb.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === Tb.getClassName()) {
                const bb = Tb;
                Mb.setFloat("vSubsurfaceWeight", bb.subsurfaceWeight), bb.subsurfaceWeightTexture && (Mb.setTexture("subsurfaceWeightSampler", bb.subsurfaceWeightTexture), Mb.setMatrix("subsurfaceWeightMatrix", bb.subsurfaceWeightTexture.getTextureMatrix())), Mb.setFloat("vTransmissionWeight", bb.transmissionWeight), bb.transmissionWeightTexture && (Mb.setTexture("transmissionWeightSampler", bb.transmissionWeightTexture), Mb.setMatrix("transmissionWeightMatrix", bb.transmissionWeightTexture.getTextureMatrix())), Mb.setFloat("vTransmissionScatterAnisotropy", bb.transmissionScatterAnisotropy), Mb.setFloat("vSubsurfaceScatterAnisotropy", bb.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, fc.f)(Mb, Tb, this._scene), cb.useBones && cb.computeBonesUsingShaders && cb.skeleton) {
              const bb = cb.skeleton;
              if (bb.isUsingTextureForMatrices && Mb.getUniformIndex("boneTextureInfo") > -1) {
                const sb = bb.getTransformMatrixTexture(cb);
                Mb.setTexture("boneSampler", sb), Mb.setFloat2("boneTextureInfo", bb._textureWidth, bb._textureHeight)
              } else Mb.setMatrices("mBones", cb.skeleton.getTransformMatrices(cb));
              (this._enableVelocity || this._enableVelocityLinear) && Mb.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[cb.uniqueId])
            }
            if ((0, jb.t)(cb, Mb), cb.morphTargetManager && cb.morphTargetManager.isUsingTextureForTargets && cb.morphTargetManager._bind(Mb), (this._enableVelocity || this._enableVelocityLinear) && (Mb.setMatrix("previousWorld", this._previousTransformationMatrices[sb.uniqueId].fX), Mb.setMatrix("previousViewProjection", this._previousTransformationMatrices[sb.uniqueId].viewProjection)), this._enableObjectId) {
              let bb = cb.uniqueId;
              if (this.objectIdProvider) bb = (0, nc.j)(cb, this.objectIdProvider);
              else if (bb > 16777215) throw new Error(`Invalid geometry object ID ${bb} for mesh "${cb.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              Mb.setFloat("objectId", bb)
            }
            if (this._enableMeshBlendTag) {
              const bb = this.meshBlendTagProvider ? (0, nc.f)(cb, this.meshBlendTagProvider) : cb.meshBlendingTag;
              Mb.setInt("meshBlendTag", bb)
            }
            Ib && cb.hasThinInstances && Mb.setMatrix("world", Hb), cb._processRendering(sb, bb, Mb, Tb.fillMode, Ub, Ib, ((bb, cb) => {
              bb || Mb.setMatrix("world", cb)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[sb.uniqueId].fX = Hb.clone(), this._previousTransformationMatrices[sb.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), cb.skeleton && this._copyBonesTransformationMatrices(cb.skeleton.getTransformMatrices(cb), this._previousBonesTransformationMatrices[sb.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (cb, sb, kb) => {
          if ((kb || 0 === sb) && cb.XV)
            for (let Wb = 0; Wb < cb.XV.length; ++Wb) {
              const sb = cb.XV[Wb],
                kb = sb.pm(),
                ab = sb.getRenderingMesh();
              if (!kb) continue;
              const Tb = ab._getInstancesRenderList(sb._id, !!sb.getReplacementMesh()),
                Ub = bb.getCaps().instancedArrays && (null !== Tb.visibleInstances[sb._id] || ab.hasThinInstances);
              if (!this.isReady(sb, Ub)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (cb, sb, kb, Wb) => {
          let ab;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.Sm().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Wb.length) {
            for (bb.setColorWrite(!1), ab = 0; ab < Wb.length; ab++) eb(Wb.data[ab]);
            bb.setColorWrite(!0)
          }
          for (ab = 0; ab < cb.length; ab++) eb(cb.data[ab]);
          for (bb.setDepthWrite(!1), ab = 0; ab < sb.length; ab++) eb(sb.data[ab]);
          if (this.renderTransparentMeshes)
            for (ab = 0; ab < kb.length; ab++) eb(kb.data[ab]);
          bb.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const bb = this._scene.Sm();
        return {
          width: Math.max(1, Math.floor(bb.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(bb.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(bb, cb) {
        for (let sb = 0; sb < bb.length; sb++) cb[sb] = bb[sb];
        return cb
      }
    }
    qc.ForceGLSL = !1, qc.DEPTH_TEXTURE_TYPE = 0, qc.NORMAL_TEXTURE_TYPE = 1, qc.POSITION_TEXTURE_TYPE = 2, qc.VELOCITY_TEXTURE_TYPE = 3, qc.REFLECTIVITY_TEXTURE_TYPE = 4, qc.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, qc.VELOCITY_LINEAR_TEXTURE_TYPE = 6, qc.IRRADIANCE_TEXTURE_TYPE = 7, qc.OBJECT_ID_TEXTURE_TYPE = 8, qc.MESH_BLEND_TAG_TEXTURE_TYPE = 9, qc._SceneComponentInitialization = bb => {
      throw (0, ec.i)("GeometryBufferRendererSceneComponent")
    };
    var dc = sb(36698);
    const Ac = {
      effect: null,
      subMesh: null
    };

    function wc(bb) {
      if ("number" === typeof bb) return 1;
      if (bb instanceof Zb.n) return 2;
      if (bb instanceof Zb.p || bb instanceof ob.e) return 3;
      if (bb instanceof Zb.t || bb instanceof ob.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class rc {
      populateVectorFromLinkedProperties(bb) {
        const cb = wc(bb);
        for (const sb in this.linkedProperties) {
          const bb = this.linkedProperties[sb],
            kb = bb.numComponents;
          if (cb < kb || bb.targetUniformComponentOffset > cb - kb) return void(1 == kb ? Bb.c.Error(`Float property ${bb.name} has an offset that is too large.`) : Bb.c.Error(`Vector${kb} property ${bb.name} won't fit in Vector${cb} or has an offset that is too large.`));
          "number" === typeof bb.value ? rc._tmpArray[bb.targetUniformComponentOffset] = bb.value : bb.value.toArray(rc._tmpArray, bb.targetUniformComponentOffset)
        }
        bb.Ncb(rc._tmpArray)
      }
      constructor(bb, cb) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = bb, this.numComponents = cb
      }
    }
    rc._tmpArray = [0, 0, 0, 0];
    class oc {
      constructor(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ab = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = bb, this.targetUniformName = sb, this.defaultValue = cb, this.value = cb, this.targetUniformComponentNum = kb, this.targetUniformComponentOffset = Wb, this.requiredDefine = ab
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : wc(this.defaultValue)
      }
    }
    class Sc {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(bb, cb, sb) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = bb, this.samplerPrefix = cb, this.textureDefine = sb
      }
    }
    class Rc extends((0, lc.b)((0, mc.c)(qb.b))) {}
    class vc extends(function(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(Rc)) {}
    class Fc extends((0, Sb.e)(vc)) {
      constructor(bb) {
        super(bb), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class xc extends((0, Qc.c)(vb.d)) {}
    let jc = (() => {
        var bb, cb, kb, Wb, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb, Cb, Nb, Vb, Lb, ub, Yb, hb, Pb, Db, Eb, ib, Kb, qb, db, Ab, wb, Sb, vb, pb, bc, cc, sc, kc, Wc, ac, Tc, Uc, Ic, Hc, mc, lc, Qc, ec, Cc, Nc, Vc, Lc, uc, Jc, gc, Bc, tc, yc, Pc, Dc, Ec, ic, Oc, Gc, Kc, Zc, zc, dc, wc, Rc, vc, jc, pc, bs, cs, ss, ks, Ws, as, Ts, Us, Is, Hs, fs, Ms, Xs, ns, ms, ls, Qs, es, Cs, Ns, Vs, Ls, us, Ys, hs, gs, Bs, ts, ys;
        let Ps, Ds, Es, is, Os, Gs, Ks, Zs, zs, qs, ds, As, ws, rs, os, Ss, Rs, vs, Fs, xs, ps, bk, ck, sk, kk, Wk, ak, Tk, Uk, Ik, Hk, fk, Mk, Xk, nk, mk, lk, Qk, ek, Ck, Nk, Vk, Lk, uk, Yk, hk, Jk, gk, Bk, tk, yk, Pk, Dk, Ek, ik, Ok, Gk, Kk, Zk, zk, qk, dk, Ak, wk, rk, Sk, Rk, vk, Fk, xk, jk, pk, bW, cW, sW, kW, WW, aW, TW, UW, IW, HW, fW, MW, XW, nW, mW, lW, QW, eW, CW, NW, VW, LW, uW, YW, hW, JW, gW, BW, tW, yW, PW, DW, EW, iW = xc,
          OW = [],
          GW = [],
          KW = [],
          ZW = [],
          zW = [],
          qW = [],
          dW = [],
          AW = [],
          wW = [],
          rW = [],
          oW = [],
          SW = [],
          RW = [],
          vW = [],
          FW = [],
          xW = [],
          jW = [],
          pW = [],
          ba = [],
          ca = [],
          sa = [],
          ka = [],
          Wa = [],
          aa = [],
          Ta = [],
          Ua = [],
          Ia = [],
          Ha = [],
          fa = [],
          Ma = [],
          Xa = [],
          na = [],
          ma = [],
          la = [],
          Qa = [],
          ea = [],
          Ca = [],
          Na = [],
          Va = [],
          La = [],
          ua = [],
          Ya = [],
          ha = [],
          Ja = [],
          ga = [],
          Ba = [],
          ta = [],
          ya = [],
          Pa = [],
          Da = [],
          Ea = [],
          ia = [],
          Oa = [],
          Ga = [],
          Ka = [],
          Za = [],
          za = [],
          qa = [],
          da = [],
          Aa = [],
          wa = [],
          ra = [],
          oa = [],
          Sa = [],
          Ra = [],
          va = [],
          Fa = [],
          xa = [],
          ja = [],
          pa = [],
          bT = [],
          cT = [],
          sT = [],
          kT = [],
          WT = [],
          aT = [],
          TT = [],
          UT = [],
          IT = [],
          HT = [],
          fT = [],
          MT = [],
          XT = [],
          nT = [],
          mT = [],
          lT = [],
          QT = [],
          eT = [],
          CT = [],
          NT = [],
          VT = [],
          LT = [],
          uT = [],
          YT = [],
          hT = [],
          JT = [],
          gT = [],
          BT = [],
          tT = [],
          yT = [],
          PT = [],
          DT = [],
          ET = [],
          iT = [],
          OT = [],
          GT = [],
          KT = [],
          ZT = [],
          zT = [],
          qT = [],
          dT = [],
          AT = [],
          wT = [],
          rT = [],
          oT = [],
          ST = [],
          RT = [],
          vT = [],
          FT = [],
          xT = [],
          jT = [],
          pT = [],
          bU = [],
          cU = [],
          sU = [],
          kU = [],
          WU = [],
          aU = [],
          TU = [],
          UU = [],
          IU = [],
          HU = [],
          fU = [],
          MU = [],
          XU = [],
          nU = [],
          mU = [],
          lU = [],
          QU = [],
          eU = [],
          CU = [],
          NU = [],
          VU = [],
          LU = [],
          uU = [],
          YU = [],
          hU = [],
          JU = [],
          gU = [],
          BU = [],
          tU = [],
          yU = [],
          PU = [],
          DU = [],
          EU = [],
          iU = [],
          OU = [],
          GU = [],
          KU = [],
          ZU = [],
          zU = [],
          qU = [],
          dU = [],
          AU = [],
          wU = [],
          rU = [],
          oU = [],
          SU = [],
          RU = [],
          vU = [],
          FU = [],
          xU = [],
          jU = [],
          pU = [],
          bI = [],
          cI = [],
          sI = [],
          kI = [],
          WI = [],
          aI = [],
          TI = [],
          UI = [],
          II = [],
          HI = [],
          fI = [],
          MI = [],
          XI = [],
          nI = [],
          mI = [],
          lI = [],
          QI = [],
          eI = [],
          CI = [],
          NI = [],
          VI = [],
          LI = [],
          uI = [],
          YI = [],
          hI = [],
          JI = [],
          gI = [],
          BI = [],
          tI = [],
          yI = [],
          PI = [];
        return bb = class extends iW {
          get baseWeight() {
            return (0, Jb.d)(this, cb, "f")
          }
          set baseWeight(bb) {
            (0, Jb.h)(this, cb, bb, "f")
          }
          get baseWeightTexture() {
            return (0, Jb.d)(this, kb, "f")
          }
          set baseWeightTexture(bb) {
            (0, Jb.h)(this, kb, bb, "f")
          }
          get baseColor() {
            return (0, Jb.d)(this, Wb, "f")
          }
          set baseColor(bb) {
            (0, Jb.h)(this, Wb, bb, "f")
          }
          get baseColorTexture() {
            return (0, Jb.d)(this, Tb, "f")
          }
          set baseColorTexture(bb) {
            (0, Jb.h)(this, Tb, bb, "f")
          }
          get baseDiffuseRoughness() {
            return (0, Jb.d)(this, Ub, "f")
          }
          set baseDiffuseRoughness(bb) {
            (0, Jb.h)(this, Ub, bb, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, Jb.d)(this, Ib, "f")
          }
          set baseDiffuseRoughnessTexture(bb) {
            (0, Jb.h)(this, Ib, bb, "f")
          }
          get baseMetalness() {
            return (0, Jb.d)(this, Hb, "f")
          }
          set baseMetalness(bb) {
            (0, Jb.h)(this, Hb, bb, "f")
          }
          get baseMetalnessTexture() {
            return (0, Jb.d)(this, fb, "f")
          }
          set baseMetalnessTexture(bb) {
            (0, Jb.h)(this, fb, bb, "f")
          }
          get specularWeight() {
            return (0, Jb.d)(this, Mb, "f")
          }
          set specularWeight(bb) {
            (0, Jb.h)(this, Mb, bb, "f")
          }
          get specularWeightTexture() {
            return (0, Jb.d)(this, Xb, "f")
          }
          set specularWeightTexture(bb) {
            (0, Jb.h)(this, Xb, bb, "f")
          }
          get specularColor() {
            return (0, Jb.d)(this, nb, "f")
          }
          set specularColor(bb) {
            (0, Jb.h)(this, nb, bb, "f")
          }
          get specularColorTexture() {
            return (0, Jb.d)(this, mb, "f")
          }
          set specularColorTexture(bb) {
            (0, Jb.h)(this, mb, bb, "f")
          }
          get specularRoughness() {
            return (0, Jb.d)(this, lb, "f")
          }
          set specularRoughness(bb) {
            (0, Jb.h)(this, lb, bb, "f")
          }
          get specularRoughnessTexture() {
            return (0, Jb.d)(this, Qb, "f")
          }
          set specularRoughnessTexture(bb) {
            (0, Jb.h)(this, Qb, bb, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, Jb.d)(this, eb, "f")
          }
          set specularRoughnessAnisotropy(bb) {
            (0, Jb.h)(this, eb, bb, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, Jb.d)(this, Cb, "f")
          }
          set specularRoughnessAnisotropyTexture(bb) {
            (0, Jb.h)(this, Cb, bb, "f")
          }
          get specularIor() {
            return (0, Jb.d)(this, Nb, "f")
          }
          set specularIor(bb) {
            (0, Jb.h)(this, Nb, bb, "f")
          }
          get transmissionWeight() {
            return (0, Jb.d)(this, Vb, "f")
          }
          set transmissionWeight(bb) {
            (0, Jb.h)(this, Vb, bb, "f")
          }
          get transmissionWeightTexture() {
            return (0, Jb.d)(this, Lb, "f")
          }
          set transmissionWeightTexture(bb) {
            (0, Jb.h)(this, Lb, bb, "f")
          }
          get transmissionColor() {
            return (0, Jb.d)(this, ub, "f")
          }
          set transmissionColor(bb) {
            (0, Jb.h)(this, ub, bb, "f")
          }
          get transmissionColorTexture() {
            return (0, Jb.d)(this, Yb, "f")
          }
          set transmissionColorTexture(bb) {
            (0, Jb.h)(this, Yb, bb, "f")
          }
          get transmissionDepth() {
            return (0, Jb.d)(this, hb, "f")
          }
          set transmissionDepth(bb) {
            (0, Jb.h)(this, hb, bb, "f")
          }
          get transmissionDepthTexture() {
            return (0, Jb.d)(this, Pb, "f")
          }
          set transmissionDepthTexture(bb) {
            (0, Jb.h)(this, Pb, bb, "f")
          }
          get transmissionScatter() {
            return (0, Jb.d)(this, Db, "f")
          }
          set transmissionScatter(bb) {
            (0, Jb.h)(this, Db, bb, "f")
          }
          get transmissionScatterTexture() {
            return (0, Jb.d)(this, Eb, "f")
          }
          set transmissionScatterTexture(bb) {
            (0, Jb.h)(this, Eb, bb, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, Jb.d)(this, ib, "f")
          }
          set transmissionScatterAnisotropy(bb) {
            (0, Jb.h)(this, ib, bb, "f")
          }
          get transmissionDispersionScale() {
            return (0, Jb.d)(this, Kb, "f")
          }
          set transmissionDispersionScale(bb) {
            (0, Jb.h)(this, Kb, bb, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, Jb.d)(this, qb, "f")
          }
          set transmissionDispersionScaleTexture(bb) {
            (0, Jb.h)(this, qb, bb, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, Jb.d)(this, db, "f")
          }
          set transmissionDispersionAbbeNumber(bb) {
            (0, Jb.h)(this, db, bb, "f")
          }
          get subsurfaceWeight() {
            return (0, Jb.d)(this, Ab, "f")
          }
          set subsurfaceWeight(bb) {
            (0, Jb.h)(this, Ab, bb, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, Jb.d)(this, wb, "f")
          }
          set subsurfaceWeightTexture(bb) {
            (0, Jb.h)(this, wb, bb, "f")
          }
          get subsurfaceColor() {
            return (0, Jb.d)(this, Sb, "f")
          }
          set subsurfaceColor(bb) {
            (0, Jb.h)(this, Sb, bb, "f")
          }
          get subsurfaceColorTexture() {
            return (0, Jb.d)(this, vb, "f")
          }
          set subsurfaceColorTexture(bb) {
            (0, Jb.h)(this, vb, bb, "f")
          }
          get subsurfaceRadius() {
            return (0, Jb.d)(this, pb, "f")
          }
          set subsurfaceRadius(bb) {
            (0, Jb.h)(this, pb, bb, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, Jb.d)(this, bc, "f")
          }
          set subsurfaceRadiusScale(bb) {
            (0, Jb.h)(this, bc, bb, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, Jb.d)(this, cc, "f")
          }
          set subsurfaceRadiusScaleTexture(bb) {
            (0, Jb.h)(this, cc, bb, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, Jb.d)(this, sc, "f")
          }
          set subsurfaceScatterAnisotropy(bb) {
            (0, Jb.h)(this, sc, bb, "f")
          }
          get coatWeight() {
            return (0, Jb.d)(this, kc, "f")
          }
          set coatWeight(bb) {
            (0, Jb.h)(this, kc, bb, "f")
          }
          get coatWeightTexture() {
            return (0, Jb.d)(this, Wc, "f")
          }
          set coatWeightTexture(bb) {
            (0, Jb.h)(this, Wc, bb, "f")
          }
          get coatColor() {
            return (0, Jb.d)(this, ac, "f")
          }
          set coatColor(bb) {
            (0, Jb.h)(this, ac, bb, "f")
          }
          get coatColorTexture() {
            return (0, Jb.d)(this, Tc, "f")
          }
          set coatColorTexture(bb) {
            (0, Jb.h)(this, Tc, bb, "f")
          }
          get coatRoughness() {
            return (0, Jb.d)(this, Uc, "f")
          }
          set coatRoughness(bb) {
            (0, Jb.h)(this, Uc, bb, "f")
          }
          get coatRoughnessTexture() {
            return (0, Jb.d)(this, Ic, "f")
          }
          set coatRoughnessTexture(bb) {
            (0, Jb.h)(this, Ic, bb, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, Jb.d)(this, Hc, "f")
          }
          set coatRoughnessAnisotropy(bb) {
            (0, Jb.h)(this, Hc, bb, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, Jb.d)(this, mc, "f")
          }
          set coatRoughnessAnisotropyTexture(bb) {
            (0, Jb.h)(this, mc, bb, "f")
          }
          get coatIor() {
            return (0, Jb.d)(this, lc, "f")
          }
          set coatIor(bb) {
            (0, Jb.h)(this, lc, bb, "f")
          }
          get coatDarkening() {
            return (0, Jb.d)(this, Qc, "f")
          }
          set coatDarkening(bb) {
            (0, Jb.h)(this, Qc, bb, "f")
          }
          get coatDarkeningTexture() {
            return (0, Jb.d)(this, ec, "f")
          }
          set coatDarkeningTexture(bb) {
            (0, Jb.h)(this, ec, bb, "f")
          }
          get fuzzWeight() {
            return (0, Jb.d)(this, Cc, "f")
          }
          set fuzzWeight(bb) {
            (0, Jb.h)(this, Cc, bb, "f")
          }
          get fuzzWeightTexture() {
            return (0, Jb.d)(this, Nc, "f")
          }
          set fuzzWeightTexture(bb) {
            (0, Jb.h)(this, Nc, bb, "f")
          }
          get fuzzColor() {
            return (0, Jb.d)(this, Vc, "f")
          }
          set fuzzColor(bb) {
            (0, Jb.h)(this, Vc, bb, "f")
          }
          get fuzzColorTexture() {
            return (0, Jb.d)(this, Lc, "f")
          }
          set fuzzColorTexture(bb) {
            (0, Jb.h)(this, Lc, bb, "f")
          }
          get fuzzRoughness() {
            return (0, Jb.d)(this, uc, "f")
          }
          set fuzzRoughness(bb) {
            (0, Jb.h)(this, uc, bb, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, Jb.d)(this, Jc, "f")
          }
          set fuzzRoughnessTexture(bb) {
            (0, Jb.h)(this, Jc, bb, "f")
          }
          get geometryThinWalled() {
            return (0, Jb.d)(this, gc, "f")
          }
          set geometryThinWalled(bb) {
            (0, Jb.h)(this, gc, bb, "f")
          }
          get geometryNormalTexture() {
            return (0, Jb.d)(this, Bc, "f")
          }
          set geometryNormalTexture(bb) {
            (0, Jb.h)(this, Bc, bb, "f")
          }
          get geometryTangent() {
            return (0, Jb.d)(this, tc, "f")
          }
          set geometryTangent(bb) {
            (0, Jb.h)(this, tc, bb, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(bb) {
            this.geometryTangent = new Zb.n(Math.cos(bb), Math.sin(bb))
          }
          get geometryTangentTexture() {
            return (0, Jb.d)(this, yc, "f")
          }
          set geometryTangentTexture(bb) {
            (0, Jb.h)(this, yc, bb, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, Jb.d)(this, Pc, "f")
          }
          set geometryCoatNormalTexture(bb) {
            (0, Jb.h)(this, Pc, bb, "f")
          }
          get geometryCoatTangent() {
            return (0, Jb.d)(this, Dc, "f")
          }
          set geometryCoatTangent(bb) {
            (0, Jb.h)(this, Dc, bb, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(bb) {
            this.geometryCoatTangent = new Zb.n(Math.cos(bb), Math.sin(bb))
          }
          get geometryCoatTangentTexture() {
            return (0, Jb.d)(this, Ec, "f")
          }
          set geometryCoatTangentTexture(bb) {
            (0, Jb.h)(this, Ec, bb, "f")
          }
          get geometryOpacity() {
            return (0, Jb.d)(this, ic, "f")
          }
          set geometryOpacity(bb) {
            (0, Jb.h)(this, ic, bb, "f")
          }
          get geometryOpacityTexture() {
            return (0, Jb.d)(this, Oc, "f")
          }
          set geometryOpacityTexture(bb) {
            (0, Jb.h)(this, Oc, bb, "f")
          }
          get geometryThickness() {
            return (0, Jb.d)(this, Gc, "f")
          }
          set geometryThickness(bb) {
            (0, Jb.h)(this, Gc, bb, "f")
          }
          get geometryThicknessTexture() {
            return (0, Jb.d)(this, Kc, "f")
          }
          set geometryThicknessTexture(bb) {
            (0, Jb.h)(this, Kc, bb, "f")
          }
          get emissionLuminance() {
            return (0, Jb.d)(this, Zc, "f")
          }
          set emissionLuminance(bb) {
            (0, Jb.h)(this, Zc, bb, "f")
          }
          get emissionColor() {
            return (0, Jb.d)(this, zc, "f")
          }
          set emissionColor(bb) {
            (0, Jb.h)(this, zc, bb, "f")
          }
          get emissionColorTexture() {
            return (0, Jb.d)(this, dc, "f")
          }
          set emissionColorTexture(bb) {
            (0, Jb.h)(this, dc, bb, "f")
          }
          get thinFilmWeight() {
            return (0, Jb.d)(this, wc, "f")
          }
          set thinFilmWeight(bb) {
            (0, Jb.h)(this, wc, bb, "f")
          }
          get thinFilmWeightTexture() {
            return (0, Jb.d)(this, Rc, "f")
          }
          set thinFilmWeightTexture(bb) {
            (0, Jb.h)(this, Rc, bb, "f")
          }
          get thinFilmThickness() {
            return (0, Jb.d)(this, vc, "f")
          }
          set thinFilmThickness(bb) {
            (0, Jb.h)(this, vc, bb, "f")
          }
          get thinFilmThicknessMin() {
            return (0, Jb.d)(this, jc, "f")
          }
          set thinFilmThicknessMin(bb) {
            (0, Jb.h)(this, jc, bb, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, Jb.d)(this, pc, "f")
          }
          set thinFilmThicknessTexture(bb) {
            (0, Jb.h)(this, pc, bb, "f")
          }
          get thinFilmIor() {
            return (0, Jb.d)(this, bs, "f")
          }
          set thinFilmIor(bb) {
            (0, Jb.h)(this, bs, bb, "f")
          }
          get ambientOcclusionTexture() {
            return (0, Jb.d)(this, cs, "f")
          }
          set ambientOcclusionTexture(bb) {
            (0, Jb.h)(this, cs, bb, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(bb) {
            this._sssQuality !== bb && (this._sssQuality = bb, this.Tcb(1))
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
            return (0, Jb.d)(this, ss, "f")
          }
          set directIntensity(bb) {
            (0, Jb.h)(this, ss, bb, "f")
          }
          get environmentIntensity() {
            return (0, Jb.d)(this, ks, "f")
          }
          set environmentIntensity(bb) {
            (0, Jb.h)(this, ks, bb, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, Jb.d)(this, Ws, "f")
          }
          set useSpecularWeightFromTextureAlpha(bb) {
            (0, Jb.h)(this, Ws, bb, "f")
          }
          get forceAlphaTest() {
            return (0, Jb.d)(this, as, "f")
          }
          set forceAlphaTest(bb) {
            (0, Jb.h)(this, as, bb, "f")
          }
          get alphaCutOff() {
            return (0, Jb.d)(this, Ts, "f")
          }
          set alphaCutOff(bb) {
            (0, Jb.h)(this, Ts, bb, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, Jb.d)(this, Us, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(bb) {
            (0, Jb.h)(this, Us, bb, "f")
          }
          get useAmbientInGrayScale() {
            return (0, Jb.d)(this, Is, "f")
          }
          set useAmbientInGrayScale(bb) {
            (0, Jb.h)(this, Is, bb, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(ob.e.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === ab.e.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(bb) {
            bb !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? ab.e.LIGHTFALLOFF_PHYSICAL : ab.e.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === ab.e.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(bb) {
            bb !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? ab.e.LIGHTFALLOFF_GLTF : ab.e.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, Jb.d)(this, Hs, "f")
          }
          set useObjectSpaceNormalMap(bb) {
            (0, Jb.h)(this, Hs, bb, "f")
          }
          get useParallax() {
            return (0, Jb.d)(this, fs, "f")
          }
          set useParallax(bb) {
            (0, Jb.h)(this, fs, bb, "f")
          }
          get useParallaxOcclusion() {
            return (0, Jb.d)(this, Ms, "f")
          }
          set useParallaxOcclusion(bb) {
            (0, Jb.h)(this, Ms, bb, "f")
          }
          get parallaxScaleBias() {
            return (0, Jb.d)(this, Xs, "f")
          }
          set parallaxScaleBias(bb) {
            (0, Jb.h)(this, Xs, bb, "f")
          }
          get disableLighting() {
            return (0, Jb.d)(this, ns, "f")
          }
          set disableLighting(bb) {
            (0, Jb.h)(this, ns, bb, "f")
          }
          get forceIrradianceInFragment() {
            return (0, Jb.d)(this, ms, "f")
          }
          set forceIrradianceInFragment(bb) {
            (0, Jb.h)(this, ms, bb, "f")
          }
          get maxSimultaneousLights() {
            return (0, Jb.d)(this, ls, "f")
          }
          set maxSimultaneousLights(bb) {
            (0, Jb.h)(this, ls, bb, "f")
          }
          get invertNormalMapX() {
            return (0, Jb.d)(this, Qs, "f")
          }
          set invertNormalMapX(bb) {
            (0, Jb.h)(this, Qs, bb, "f")
          }
          get invertNormalMapY() {
            return (0, Jb.d)(this, es, "f")
          }
          set invertNormalMapY(bb) {
            (0, Jb.h)(this, es, bb, "f")
          }
          get twoSidedLighting() {
            return (0, Jb.d)(this, Cs, "f")
          }
          set twoSidedLighting(bb) {
            (0, Jb.h)(this, Cs, bb, "f")
          }
          get useAlphaFresnel() {
            return (0, Jb.d)(this, Ns, "f")
          }
          set useAlphaFresnel(bb) {
            (0, Jb.h)(this, Ns, bb, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, Jb.d)(this, Vs, "f")
          }
          set useLinearAlphaFresnel(bb) {
            (0, Jb.h)(this, Vs, bb, "f")
          }
          get environmentBRDFTexture() {
            return (0, Jb.d)(this, Ls, "f")
          }
          set environmentBRDFTexture(bb) {
            (0, Jb.h)(this, Ls, bb, "f")
          }
          get forceNormalForward() {
            return (0, Jb.d)(this, us, "f")
          }
          set forceNormalForward(bb) {
            (0, Jb.h)(this, us, bb, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, Jb.d)(this, Ys, "f")
          }
          set enableSpecularAntiAliasing(bb) {
            (0, Jb.h)(this, Ys, bb, "f")
          }
          get useHorizonOcclusion() {
            return (0, Jb.d)(this, hs, "f")
          }
          set useHorizonOcclusion(bb) {
            (0, Jb.h)(this, hs, bb, "f")
          }
          get useRadianceOcclusion() {
            return (0, Jb.d)(this, gs, "f")
          }
          set useRadianceOcclusion(bb) {
            (0, Jb.h)(this, gs, bb, "f")
          }
          get unlit() {
            return (0, Jb.d)(this, Bs, "f")
          }
          set unlit(bb) {
            (0, Jb.h)(this, Bs, bb, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Jb.d)(this, ts, "f")
          }
          set applyDecalMapAfterDetailMap(bb) {
            (0, Jb.h)(this, ts, bb, "f")
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
            this._refractionHighQualityBlur !== bb && (this._refractionHighQualityBlur = bb, this.Tcb(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(bb) {
            this._realTimeFiltering = bb, this.Tcb(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(bb) {
            this._realTimeFilteringQuality = bb, this.Tcb(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(bb) {
            this._fuzzSampleNumber = bb, this.Tcb(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, Jb.d)(this, ys, "f")
          }
          set debugMode(bb) {
            (0, Jb.h)(this, ys, bb, "f")
          }
          constructor(sb, gb) {
            super(sb, gb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || bb.ForceGLSL), cb.set(this, ((0, Jb.m)(this, OW), (0, Jb.m)(this, GW, void 0))), this._baseWeight = ((0, Jb.m)(this, KW), new oc("base_weight", 1, "vBaseWeight", 1)), kb.set(this, (0, Jb.m)(this, ZW, void 0)), this._baseWeightTexture = ((0, Jb.m)(this, zW), new Sc("base_weight", "baseWeight", "BASE_WEIGHT")), Wb.set(this, (0, Jb.m)(this, qW, void 0)), this._baseColor = ((0, Jb.m)(this, dW), new oc("base_color", ob.e.White(), "vBaseColor", 4)), Tb.set(this, (0, Jb.m)(this, AW, void 0)), this._baseColorTexture = ((0, Jb.m)(this, wW), new Sc("base_color", "baseColor", "BASE_COLOR")), Ub.set(this, (0, Jb.m)(this, rW, void 0)), this._baseDiffuseRoughness = ((0, Jb.m)(this, oW), new oc("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), Ib.set(this, (0, Jb.m)(this, SW, void 0)), this._baseDiffuseRoughnessTexture = ((0, Jb.m)(this, RW), new Sc("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), Hb.set(this, (0, Jb.m)(this, vW, void 0)), this._baseMetalness = ((0, Jb.m)(this, FW), new oc("base_metalness", 0, "vReflectanceInfo", 4, 0)), fb.set(this, (0, Jb.m)(this, xW, void 0)), this._baseMetalnessTexture = ((0, Jb.m)(this, jW), new Sc("base_metalness", "baseMetalness", "BASE_METALNESS")), Mb.set(this, (0, Jb.m)(this, pW, void 0)), this._specularWeight = ((0, Jb.m)(this, ba), new oc("specular_weight", 1, "vReflectanceInfo", 4, 3)), Xb.set(this, (0, Jb.m)(this, ca, void 0)), this._specularWeightTexture = ((0, Jb.m)(this, sa), new Sc("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), nb.set(this, (0, Jb.m)(this, ka, void 0)), this._specularColor = ((0, Jb.m)(this, Wa), new oc("specular_color", ob.e.White(), "vSpecularColor", 4)), mb.set(this, (0, Jb.m)(this, aa, void 0)), this._specularColorTexture = ((0, Jb.m)(this, Ta), new Sc("specular_color", "specularColor", "SPECULAR_COLOR")), lb.set(this, (0, Jb.m)(this, Ua, void 0)), this._specularRoughness = ((0, Jb.m)(this, Ia), new oc("specular_roughness", .3, "vReflectanceInfo", 4, 1)), Qb.set(this, (0, Jb.m)(this, Ha, void 0)), this._specularRoughnessTexture = ((0, Jb.m)(this, fa), new Sc("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), eb.set(this, (0, Jb.m)(this, Ma, void 0)), this._specularRoughnessAnisotropy = ((0, Jb.m)(this, Xa), new oc("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), Cb.set(this, (0, Jb.m)(this, na, void 0)), this._specularRoughnessAnisotropyTexture = ((0, Jb.m)(this, ma), new Sc("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), Nb.set(this, (0, Jb.m)(this, la, void 0)), this._specularIor = ((0, Jb.m)(this, Qa), new oc("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), Vb.set(this, (0, Jb.m)(this, ea, void 0)), this._transmissionWeight = ((0, Jb.m)(this, Ca), new oc("transmission_weight", 0, "vTransmissionWeight", 1)), Lb.set(this, (0, Jb.m)(this, Na, void 0)), this._transmissionWeightTexture = ((0, Jb.m)(this, Va), new Sc("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), ub.set(this, (0, Jb.m)(this, La, void 0)), this._transmissionColor = ((0, Jb.m)(this, ua), new oc("transmission_color", ob.e.White(), "vTransmissionColor", 3, 0)), Yb.set(this, (0, Jb.m)(this, Ya, void 0)), this._transmissionColorTexture = ((0, Jb.m)(this, ha), new Sc("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), hb.set(this, (0, Jb.m)(this, Ja, void 0)), this._transmissionDepth = ((0, Jb.m)(this, ga), new oc("transmission_depth", 0, "vTransmissionDepth", 1, 0)), Pb.set(this, (0, Jb.m)(this, Ba, void 0)), this._transmissionDepthTexture = ((0, Jb.m)(this, ta), new Sc("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Db.set(this, (0, Jb.m)(this, ya, void 0)), this._transmissionScatter = ((0, Jb.m)(this, Pa), new oc("transmission_scatter", ob.e.Black(), "vTransmissionScatter", 3, 0)), Eb.set(this, (0, Jb.m)(this, Da, void 0)), this._transmissionScatterTexture = ((0, Jb.m)(this, Ea), new Sc("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), ib.set(this, (0, Jb.m)(this, ia, void 0)), this._transmissionScatterAnisotropy = ((0, Jb.m)(this, Oa), new oc("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), Kb.set(this, (0, Jb.m)(this, Ga, void 0)), this._transmissionDispersionScale = ((0, Jb.m)(this, Ka), new oc("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), qb.set(this, (0, Jb.m)(this, Za, void 0)), this._transmissionDispersionScaleTexture = ((0, Jb.m)(this, za), new Sc("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), db.set(this, (0, Jb.m)(this, qa, void 0)), this._transmissionDispersionAbbeNumber = ((0, Jb.m)(this, da), new oc("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), Ab.set(this, (0, Jb.m)(this, Aa, void 0)), this._subsurfaceWeight = ((0, Jb.m)(this, wa), new oc("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), wb.set(this, (0, Jb.m)(this, ra, void 0)), this._subsurfaceWeightTexture = ((0, Jb.m)(this, oa), new Sc("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), Sb.set(this, (0, Jb.m)(this, Sa, void 0)), this._subsurfaceColor = ((0, Jb.m)(this, Ra), new oc("subsurface_color", new ob.e(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), vb.set(this, (0, Jb.m)(this, va, void 0)), this._subsurfaceColorTexture = ((0, Jb.m)(this, Fa), new Sc("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), pb.set(this, (0, Jb.m)(this, xa, void 0)), this._subsurfaceRadius = ((0, Jb.m)(this, ja), new oc("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), bc.set(this, (0, Jb.m)(this, pa, void 0)), this._subsurfaceRadiusScale = ((0, Jb.m)(this, bT), new oc("subsurface_radius_scale", new ob.e(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), cc.set(this, (0, Jb.m)(this, cT, void 0)), this._subsurfaceRadiusScaleTexture = ((0, Jb.m)(this, sT), new Sc("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), sc.set(this, (0, Jb.m)(this, kT, void 0)), this._subsurfaceScatterAnisotropy = ((0, Jb.m)(this, WT), new oc("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), kc.set(this, (0, Jb.m)(this, aT, void 0)), this._coatWeight = ((0, Jb.m)(this, TT), new oc("coat_weight", 0, "vCoatWeight", 1, 0)), Wc.set(this, (0, Jb.m)(this, UT, void 0)), this._coatWeightTexture = ((0, Jb.m)(this, IT), new Sc("coat_weight", "coatWeight", "COAT_WEIGHT")), ac.set(this, (0, Jb.m)(this, HT, void 0)), this._coatColor = ((0, Jb.m)(this, fT), new oc("coat_color", ob.e.White(), "vCoatColor", 3, 0)), Tc.set(this, (0, Jb.m)(this, MT, void 0)), this._coatColorTexture = ((0, Jb.m)(this, XT), new Sc("coat_color", "coatColor", "COAT_COLOR")), Uc.set(this, (0, Jb.m)(this, nT, void 0)), this._coatRoughness = ((0, Jb.m)(this, mT), new oc("coat_roughness", 0, "vCoatRoughness", 1, 0)), Ic.set(this, (0, Jb.m)(this, lT, void 0)), this._coatRoughnessTexture = ((0, Jb.m)(this, QT), new Sc("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Hc.set(this, (0, Jb.m)(this, eT, void 0)), this._coatRoughnessAnisotropy = ((0, Jb.m)(this, CT), new oc("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), mc.set(this, (0, Jb.m)(this, NT, void 0)), this._coatRoughnessAnisotropyTexture = ((0, Jb.m)(this, VT), new Sc("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), lc.set(this, (0, Jb.m)(this, LT, void 0)), this._coatIor = ((0, Jb.m)(this, uT), new oc("coat_ior", 1.5, "vCoatIor", 1, 0)), Qc.set(this, (0, Jb.m)(this, YT, void 0)), this._coatDarkening = ((0, Jb.m)(this, hT), new oc("coat_darkening", 1, "vCoatDarkening", 1, 0)), ec.set(this, (0, Jb.m)(this, JT, void 0)), this._coatDarkeningTexture = ((0, Jb.m)(this, gT), new Sc("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, Cc.set(this, (0, Jb.m)(this, BT, void 0)), this._fuzzWeight = ((0, Jb.m)(this, tT), new oc("fuzz_weight", 0, "vFuzzWeight", 1, 0)), Nc.set(this, (0, Jb.m)(this, yT, void 0)), this._fuzzWeightTexture = ((0, Jb.m)(this, PT), new Sc("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), Vc.set(this, (0, Jb.m)(this, DT, void 0)), this._fuzzColor = ((0, Jb.m)(this, ET), new oc("fuzz_color", ob.e.White(), "vFuzzColor", 3, 0)), Lc.set(this, (0, Jb.m)(this, iT, void 0)), this._fuzzColorTexture = ((0, Jb.m)(this, OT), new Sc("fuzz_color", "fuzzColor", "FUZZ_COLOR")), uc.set(this, (0, Jb.m)(this, GT, void 0)), this._fuzzRoughness = ((0, Jb.m)(this, KT), new oc("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), Jc.set(this, (0, Jb.m)(this, ZT, void 0)), this._fuzzRoughnessTexture = ((0, Jb.m)(this, zT), new Sc("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), gc.set(this, (0, Jb.m)(this, qT, void 0)), this._geometryThinWalled = ((0, Jb.m)(this, dT), new oc("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Bc.set(this, (0, Jb.m)(this, AT, void 0)), this._geometryNormalTexture = ((0, Jb.m)(this, wT), new Sc("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), tc.set(this, (0, Jb.m)(this, rT, void 0)), this._geometryTangent = ((0, Jb.m)(this, oT), new oc("geometry_tangent", new Zb.n(1, 0), "vSpecularAnisotropy", 3, 0)), yc.set(this, (0, Jb.m)(this, ST, void 0)), this._geometryTangentTexture = ((0, Jb.m)(this, RT), new Sc("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), Pc.set(this, (0, Jb.m)(this, vT, void 0)), this._geometryCoatNormalTexture = ((0, Jb.m)(this, FT), new Sc("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Dc.set(this, (0, Jb.m)(this, xT, void 0)), this._geometryCoatTangent = ((0, Jb.m)(this, jT), new oc("geometry_coat_tangent", new Zb.n(1, 0), "vGeometryCoatTangent", 2, 0)), Ec.set(this, (0, Jb.m)(this, pT, void 0)), this._geometryCoatTangentTexture = ((0, Jb.m)(this, bU), new Sc("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), ic.set(this, (0, Jb.m)(this, cU, void 0)), this._geometryOpacity = ((0, Jb.m)(this, sU), new oc("geometry_opacity", 1, "vBaseColor", 4, 3)), Oc.set(this, (0, Jb.m)(this, kU, void 0)), this._geometryOpacityTexture = ((0, Jb.m)(this, WU), new Sc("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Gc.set(this, (0, Jb.m)(this, aU, void 0)), this._geometryThickness = ((0, Jb.m)(this, TU), new oc("geometry_thickness", 0, "vGeometryThickness", 1, 0)), Kc.set(this, (0, Jb.m)(this, UU, void 0)), this._geometryThicknessTexture = ((0, Jb.m)(this, IU), new Sc("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), Zc.set(this, (0, Jb.m)(this, HU, void 0)), this._emissionLuminance = ((0, Jb.m)(this, fU), new oc("emission_luminance", 1, "vLightingIntensity", 4, 1)), zc.set(this, (0, Jb.m)(this, MU, void 0)), this._emissionColor = ((0, Jb.m)(this, XU), new oc("emission_color", ob.e.Black(), "vEmissionColor", 3)), dc.set(this, (0, Jb.m)(this, nU, void 0)), this._emissionColorTexture = ((0, Jb.m)(this, mU), new Sc("emission_color", "emissionColor", "EMISSION_COLOR")), wc.set(this, (0, Jb.m)(this, lU, void 0)), this._thinFilmWeight = ((0, Jb.m)(this, QU), new oc("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), Rc.set(this, (0, Jb.m)(this, eU, void 0)), this._thinFilmWeightTexture = ((0, Jb.m)(this, CU), new Sc("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), vc.set(this, (0, Jb.m)(this, NU, void 0)), this._thinFilmThickness = ((0, Jb.m)(this, VU), new oc("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), jc.set(this, (0, Jb.m)(this, LU, void 0)), this._thinFilmThicknessMin = ((0, Jb.m)(this, uU), new oc("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), pc.set(this, (0, Jb.m)(this, YU, void 0)), this._thinFilmThicknessTexture = ((0, Jb.m)(this, hU), new Sc("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), bs.set(this, (0, Jb.m)(this, JU, void 0)), this._thinFilmIor = ((0, Jb.m)(this, gU), new oc("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), cs.set(this, (0, Jb.m)(this, BU, void 0)), this._ambientOcclusionTexture = ((0, Jb.m)(this, tU), new Sc("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = bb.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, ss.set(this, (0, Jb.m)(this, yU, 1)), ks.set(this, ((0, Jb.m)(this, PU), (0, Jb.m)(this, DU, 1))), Ws.set(this, ((0, Jb.m)(this, EU), (0, Jb.m)(this, iU, !1))), as.set(this, ((0, Jb.m)(this, OU), (0, Jb.m)(this, GU, !1))), Ts.set(this, ((0, Jb.m)(this, KU), (0, Jb.m)(this, ZU, .4))), Us.set(this, ((0, Jb.m)(this, zU), (0, Jb.m)(this, qU, !1))), Is.set(this, ((0, Jb.m)(this, dU), (0, Jb.m)(this, AU, !1))), Hs.set(this, ((0, Jb.m)(this, wU), (0, Jb.m)(this, rU, !1))), fs.set(this, ((0, Jb.m)(this, oU), (0, Jb.m)(this, SU, !1))), Ms.set(this, ((0, Jb.m)(this, RU), (0, Jb.m)(this, vU, !1))), Xs.set(this, ((0, Jb.m)(this, FU), (0, Jb.m)(this, xU, .05))), ns.set(this, ((0, Jb.m)(this, jU), (0, Jb.m)(this, pU, !1))), ms.set(this, ((0, Jb.m)(this, bI), (0, Jb.m)(this, cI, !1))), ls.set(this, ((0, Jb.m)(this, sI), (0, Jb.m)(this, kI, 4))), Qs.set(this, ((0, Jb.m)(this, WI), (0, Jb.m)(this, aI, !1))), es.set(this, ((0, Jb.m)(this, TI), (0, Jb.m)(this, UI, !1))), Cs.set(this, ((0, Jb.m)(this, II), (0, Jb.m)(this, HI, !1))), Ns.set(this, ((0, Jb.m)(this, fI), (0, Jb.m)(this, MI, !1))), Vs.set(this, ((0, Jb.m)(this, XI), (0, Jb.m)(this, nI, !1))), Ls.set(this, ((0, Jb.m)(this, mI), (0, Jb.m)(this, lI, null))), us.set(this, ((0, Jb.m)(this, QI), (0, Jb.m)(this, eI, !1))), Ys.set(this, ((0, Jb.m)(this, CI), (0, Jb.m)(this, NI, !1))), hs.set(this, ((0, Jb.m)(this, VI), (0, Jb.m)(this, LI, !0))), gs.set(this, ((0, Jb.m)(this, uI), (0, Jb.m)(this, YI, !0))), Bs.set(this, ((0, Jb.m)(this, hI), (0, Jb.m)(this, JI, !1))), ts.set(this, ((0, Jb.m)(this, gI), (0, Jb.m)(this, BI, !1))), this._lightingInfos = ((0, Jb.m)(this, tI), new Zb.t(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = ab.e.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new tb.d(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, ys.set(this, (0, Jb.m)(this, yI, 0)), this.debugLimit = ((0, Jb.m)(this, PI), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = ab.e.MATERIAL_OPAQUE, this.EY() && !this.EY()?.Sm().isWebGPU && this.EY().Sm().gl < 2 && Bb.c.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), bb._noiseTextures[this.EY().uniqueId] || (bb._noiseTextures[this.EY().uniqueId] = new yb.e(hc.g.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.EY(), !1, !0, 1), this.EY().ZY.addOnce((() => {
              bb._noiseTextures[this.EY().uniqueId]?.dispose(), delete bb._noiseTextures[this.EY().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Fb.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), Fb.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Gb(this.EY()), this._environmentFuzzBRDFTexture = Ob(this.EY()), this.prePassConfiguration = new rb.e, this._propertyList = {};
            for (const bb of Object.getOwnPropertyNames(this)) {
              const cb = this[bb];
              cb instanceof oc && (this._propertyList[bb] = cb)
            }
            Object.keys(this._propertyList).forEach((bb => {
              const cb = this._propertyList[bb];
              let sb = this._uniformsList[cb.targetUniformName];
              sb ? sb.numComponents !== cb.targetUniformComponentNum ? Bb.c.Error(`Uniform ${cb.targetUniformName} already exists of size ${sb.numComponents}, but trying to set it to ${cb.targetUniformComponentNum}.`) : sb.requiredDefine !== cb.requiredDefine && (sb.requiredDefine = void 0) : (sb = new rc(cb.targetUniformName, cb.targetUniformComponentNum), sb.requiredDefine = cb.requiredDefine, this._uniformsList[cb.targetUniformName] = sb), "" === sb.firstLinkedKey && (sb.firstLinkedKey = cb.name), sb.linkedProperties[cb.name] = cb
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const bb of Object.getOwnPropertyNames(this)) {
              const cb = this[bb];
              cb instanceof Sc && (this._samplersList[bb] = cb)
            }
            for (const bb in this._samplersList) {
              const cb = this._samplersList[bb].textureDefine;
              this._samplerDefines[cb] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[cb + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[cb + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(Fb.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(Fb.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
            return this._hasAlphaChannel() && this._transparencyMode !== ab.e.MATERIAL_OPAQUE && !this.geometryOpacityTexture
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
          clone(cb) {
            let sb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Wb = Yc.d.Clone((() => new bb(cb, this.EY())), this, {
              cloneTexturesOnlyOnce: sb
            });
            return Wb.id = cb, Wb.name = cb, this.stencil.copyTo(Wb.stencil), this._clonePlugins(Wb, kb), Wb
          }
          serialize() {
            const bb = super.serialize();
            return bb.customType = "BABYLON.OpenPBRMaterial", bb
          }
          static Parse(cb, sb, kb) {
            const Wb = Yc.d.Parse((() => new bb(cb.name, sb)), cb, sb, kb);
            return cb.stencil && Wb.stencil.parse(cb.stencil, sb, kb), ab.e._ParsePlugins(cb, Wb, sb, kb), Wb
          }
          forceCompilation(bb, cb, sb) {
            const kb = {
              clipPlane: !1,
              useInstances: !1,
              ...sb
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const sb = new Fc({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Wb = this._prepareEffect(bb, bb, sb, void 0, void 0, kb.useInstances, kb.clipPlane);
              this._onEffectCreatedObservable && (Ac.effect = Wb, Ac.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Ac)), Wb.isReady() ? cb && cb(this) : Wb.onCompileObservable.add((() => {
                cb && cb(this)
              }))
            })()
          }
          isReadyForSubMesh(cb, sb, kb) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Wb = sb._drawWrapper;
            if (Wb.effect && this.isFrozen && Wb._wasPreviouslyReady && Wb._wasPreviouslyUsingInstances === kb) return !0;
            sb.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), sb.materialDefines = new Fc({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const ab = sb.materialDefines;
            if (this._isReadyForSubMesh(sb)) return !0;
            const Tb = this.EY(),
              Ub = Tb.Sm();
            if (ab._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Tb.texturesEnabled)) {
              for (const bb in this._samplersList) {
                const cb = this._samplersList[bb];
                if (cb.value && !cb.value.isReadyOrNotBlocking()) return !1
              }
              const cb = this._getRadianceTexture();
              if (cb && Fb.e.ReflectionTextureEnabled) {
                if (!cb.isReadyOrNotBlocking()) return !1;
                if (cb.irradianceTexture) {
                  if (!cb.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!cb.sphericalPolynomial && cb.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && Fb.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && Fb.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && Fb.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (bb._noiseTextures[Tb.uniqueId] && !bb._noiseTextures[Tb.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = ab, this._eventInfo.subMesh = sb, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (ab._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (ab.AREALIGHTUSED)
              for (let bb = 0; bb < cb.lightSources.length; bb++)
                if (!cb.lightSources[bb]._isReady()) return !1;
            if (Ub.getCaps().standardDerivatives || cb.isVerticesDataPresent(zb.l.NormalKind) || (cb.createNormals(!0), Bb.c.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + cb.name)), !(0, jb.d)(Tb, cb, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const Ib = sb.effect,
              Hb = ab._areLightsDisposed,
              fb = this._prepareEffect(cb, sb.getRenderingMesh(), ab, this.onCompiled, this.onError, kb, null);
            let Mb = !1;
            if (fb)
              if (this._onEffectCreatedObservable && (Ac.effect = fb, Ac.subMesh = sb, this._onEffectCreatedObservable.notifyObservers(Ac)), this.allowShaderHotSwapping && Ib && !fb.isReady()) {
                if (ab.markAsUnprocessed(), Mb = this.isFrozen, Hb) return ab._areLightsDisposed = !0, !1
              } else Tb.resetCachedMaterial(), sb.setEffect(fb, ab, this._materialContext);
            return !(!sb.effect || !sb.effect.isReady()) && (ab._renderId = Tb.getRenderId(), Wb._wasPreviouslyReady = !Mb, Wb._wasPreviouslyUsingInstances = !!kb, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const bb = this._uniformBuffer;
            bb.addUniform("vTangentSpaceParams", 2), bb.addUniform("vLightingIntensity", 4), bb.addUniform("pointSize", 1), bb.addUniform("vDebugMode", 2), bb.addUniform("renderTargetSize", 2), bb.addUniform("cameraInfo", 4), bb.addUniform("vTextureRepetitionHexTilingParams", 4), bb.addUniform("backgroundRefractionMatrix", 16), bb.addUniform("vBackgroundRefractionInfos", 3), (0, jb.sb)(bb, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((cb => {
              bb.addUniform(cb.name, cb.numComponents)
            })), Object.values(this._samplersList).forEach((cb => {
              bb.addUniform(cb.samplerInfoName, 2), bb.addUniform(cb.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(bb, cb, sb, kb) {
            if (0 === this.geometryThickness) bb.updateFloat("vGeometryThickness", 0);
            else {
              kb.getRenderingMesh().getWorldMatrix().decompose(Zb.m.Fm[0]);
              const cb = Math.max(Math.abs(Zb.m.Fm[0].x), Math.abs(Zb.m.Fm[0].y), Math.abs(Zb.m.Fm[0].z));
              bb.updateFloat("vGeometryThickness", this.geometryThickness * cb)
            }
          }
          bindForSubMesh(cb, sb, kb) {
            const Wb = this.EY(),
              ab = kb.materialDefines;
            if (!ab) return;
            const Tb = kb.effect;
            if (!Tb) return;
            this._activeEffect = Tb, sb.getMeshUniformBuffer().bindToEffect(Tb, "Mesh"), sb.transferToEffect(cb);
            const Ub = Wb.Sm();
            this._uniformBuffer.bindToEffect(Tb, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Wb, sb, cb, this.isFrozen), nc.d.Bind(Ub.currentRenderPassId, this._activeEffect, sb, cb, this);
            const Ib = Wb.activeCamera;
            Ib ? this._uniformBuffer.updateFloat4("cameraInfo", Ib.minZ, Ib.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Hb = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Hb[0], Hb[1], Hb[2], Hb[3]), this._eventInfo.subMesh = kb, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), ab.OBJECTSPACE_NORMALMAP && (cb.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const fb = this._mustRebind(Wb, Tb, kb, sb.visibility),
              Mb = Ub._features.needToAlwaysBindUniformBuffers;
            (0, jb.e)(sb, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Mc.d)(this._activeEffect, this._vertexPullingMetadata);
            const Xb = this._uniformBuffer;
            if (fb) {
              this.bindViewProjection(Tb);
              const cb = this._getRadianceTexture();
              if (!Xb.useUbo || !this.isFrozen || !Xb.isSync || kb._drawWrapper._forceRebindOnNextCall) {
                if (Wb.texturesEnabled) {
                  for (const bb in this._samplersList) {
                    const cb = this._samplersList[bb];
                    cb.value && (Xb.updateFloat2(cb.samplerInfoName, cb.value.coordinatesIndex, cb.value.level), (0, jb.x)(cb.value, Xb, cb.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Wb._mirroredCameraPosition ? Xb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Xb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, jb.k)(Wb, ab, Xb, ob.e.White(), cb, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && Xb.updateFloat("pointSize", this.pointSize);
                const bb = this._uniformsArray;
                for (let cb = 0, sb = bb.length; cb < sb; cb++) {
                  const sb = bb[cb];
                  (void 0 === sb.requiredDefine || ab[sb.requiredDefine]) && (4 === sb.numComponents ? (sb.populateVectorFromLinkedProperties(Zb.m.Vector4[0]), Xb.updateVector4(sb.name, Zb.m.Vector4[0])) : 3 === sb.numComponents ? (sb.populateVectorFromLinkedProperties(Zb.m.Fm[0]), Xb.updateVector3(sb.name, Zb.m.Fm[0])) : 2 === sb.numComponents ? (sb.populateVectorFromLinkedProperties(Zb.m.Vector2[0]), Xb.updateFloat2(sb.name, Zb.m.Vector2[0].x, Zb.m.Vector2[0].y)) : 1 === sb.numComponents && Xb.updateFloat(sb.name, sb.linkedProperties[sb.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Wb.environmentIntensity, this._lightingInfos.w = 1, Xb.updateVector4("vLightingIntensity", this._lightingInfos), Xb.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Wb.texturesEnabled) {
                for (const bb in this._samplersList) {
                  const cb = this._samplersList[bb];
                  cb.value && Xb.setTexture(cb.samplerName, cb.value)
                }
                if ((0, jb.n)(Wb, ab, Xb, cb, this.realTimeFiltering), ab.ENVIRONMENTBRDF && Xb.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), ab.FUZZENVIRONMENTBRDF && Xb.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), ab.REFRACTED_BACKGROUND && (Xb.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), Xb.O4("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Zb.m.Fm[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), Xb.updateVector3("vBackgroundRefractionInfos", Zb.m.Fm[1])), (ab.ANISOTROPIC || ab.FUZZ || ab.REFRACTED_BACKGROUND || ab.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Xb.setTexture("blueNoiseSampler", bb._noiseTextures[this.EY().uniqueId]), ab.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const bb = this.sssIrradianceTexture.getSize().width,
                    cb = this.sssIrradianceTexture.getSize().height;
                  Xb.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), Xb.setTexture("sceneDepthSampler", this.sssDepthTexture), Xb.updateFloat2("renderTargetSize", bb, cb)
                }
              }
              this.EY().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(sb) && this.EY().depthPeelingRenderer.bind(Tb), this._eventInfo.subMesh = kb, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, fc.f)(this._activeEffect, this, Wb), this.bindEyePosition(Tb)
            } else Mb && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Wb, Wb.Sm(), kb), !fb && this.isFrozen && !Mb || !Wb.lightsEnabled || this._disableLighting || (0, jb.q)(Wb, sb, this._activeEffect, ab, this._maxSimultaneousLights), !fb && this.isFrozen || (this.bindView(Tb), (0, jb.g)(Wb, sb, this._activeEffect, !0), ab.NUM_MORPH_INFLUENCERS && (0, jb.t)(sb, this._activeEffect), ab.BAKED_VERTEX_ANIMATION_TEXTURE && sb.bakedVertexAnimationManager?.bind(Tb, ab.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, jb.s)(ab, this._activeEffect, Wb)), this._afterBind(sb, this._activeEffect, kb), Xb.update()
          }
          getAnimatables() {
            const bb = super.getAnimatables();
            for (const cb in this._samplersList) {
              const sb = this._samplersList[cb];
              sb.value && sb.value.animations && sb.value.animations.length > 0 && bb.push(sb.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && bb.push(this._radianceTexture), bb
          }
          getActiveTextures() {
            const bb = super.getActiveTextures();
            for (const cb in this._samplersList) {
              const sb = this._samplersList[cb];
              sb.value && bb.push(sb.value)
            }
            return this._radianceTexture && bb.push(this._radianceTexture), bb
          }
          hasTexture(bb) {
            if (super.hasTexture(bb)) return !0;
            for (const cb in this._samplersList) {
              if (this._samplersList[cb].value === bb) return !0
            }
            return this._radianceTexture === bb
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(bb, cb) {
            if (this._breakShaderLoadedCheck = !0, cb) {
              this._environmentBRDFTexture && this.EY().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.EY().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const bb in this._samplersList) {
                const cb = this._samplersList[bb];
                cb.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(bb, cb)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.EY().environmentTexture
          }
          _prepareEffect(cb, sb, kb) {
            let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(cb, sb, kb, Tb, Ub), !kb.isDirty) return null;
            kb.markAsProcessed();
            const Ib = this.EY().Sm(),
              Hb = new xb.b;
            let fb = 0;
            kb.USESPHERICALINVERTEX && Hb.addFallback(fb++, "USESPHERICALINVERTEX"), kb.FOG && Hb.addFallback(fb, "FOG"), kb.SPECULARAA && Hb.addFallback(fb, "SPECULARAA"), kb.POINTSIZE && Hb.addFallback(fb, "POINTSIZE"), kb.LOGARITHMICDEPTH && Hb.addFallback(fb, "LOGARITHMICDEPTH"), kb.PARALLAX && Hb.addFallback(fb, "PARALLAX"), kb.PARALLAX_RHS && Hb.addFallback(fb, "PARALLAX_RHS"), kb.PARALLAXOCCLUSION && Hb.addFallback(fb++, "PARALLAXOCCLUSION"), kb.ENVIRONMENTBRDF && Hb.addFallback(fb++, "ENVIRONMENTBRDF"), kb.TANGENT && Hb.addFallback(fb++, "TANGENT"), fb = (0, jb.B)(kb, Hb, this._maxSimultaneousLights, fb), kb.SPECULARTERM && Hb.addFallback(fb++, "SPECULARTERM"), kb.USESPHERICALFROMREFLECTIONMAP && Hb.addFallback(fb++, "USESPHERICALFROMREFLECTIONMAP"), kb.USEIRRADIANCEMAP && Hb.addFallback(fb++, "USEIRRADIANCEMAP"), kb.NORMAL && Hb.addFallback(fb++, "NORMAL"), kb.VERTEXCOLOR && Hb.addFallback(fb++, "VERTEXCOLOR"), kb.MORPHTARGETS && Hb.addFallback(fb++, "MORPHTARGETS"), kb.MULTIVIEW && Hb.addFallback(0, "MULTIVIEW");
            const Mb = [zb.l.PositionKind];
            kb.NORMAL && Mb.push(zb.l.NormalKind), kb.TANGENT && Mb.push(zb.l.TangentKind);
            for (let bb = 1; bb <= 6; ++bb) kb["UV" + bb] && Mb.push(`uv${1===bb?"":bb}`);
            kb.VERTEXCOLOR && Mb.push(zb.l.ColorKind), (0, jb.I)(Mb, cb, kb, Hb), (0, jb.L)(Mb, kb), (0, jb.N)(Mb, cb, kb), (0, jb.F)(Mb, cb, kb);
            let Xb = "openpbr";
            const nb = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const bb in this._uniformsList) nb.push(bb);
            const mb = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            kb.FUZZENVIRONMENTBRDF && mb.push("environmentFuzzBrdfSampler"), kb.REFRACTED_BACKGROUND && mb.push("backgroundRefractionSampler"), (kb.ANISOTROPIC || kb.FUZZ || kb.REFRACTED_BACKGROUND || kb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && mb.push("blueNoiseSampler"), kb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (mb.push("sceneIrradianceSampler"), mb.push("sceneDepthSampler"));
            for (const bb in this._samplersList) {
              const cb = this._samplersList[bb];
              mb.push(cb.samplerName), nb.push(cb.samplerInfoName), nb.push(cb.samplerMatrixName)
            }(0, jb.wb)(nb, mb, !0);
            const lb = ["Material", "Scene", "Mesh"],
              Qb = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: kb.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = Hb, this._eventInfo.fallbackRank = fb, this._eventInfo.defines = kb, this._eventInfo.uniforms = nb, this._eventInfo.attributes = Mb, this._eventInfo.samplers = mb, this._eventInfo.uniformBuffersNames = lb, this._eventInfo.customCode = void 0, this._eventInfo.mesh = cb, this._eventInfo.indexParameters = Qb, this._callbackPluginEventGeneric(128, this._eventInfo), nc.d.AddUniformsAndSamplers(nb, mb), rb.e.AddUniforms(nb), rb.e.AddSamplers(mb), (0, fc.c)(nb), this._useVertexPulling) {
              const bb = sb?.geometry;
              bb && (this._vertexPullingMetadata = (0, Mc.h)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, cb) => {
                nb.push(`vp_${cb}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            Rb.d && (Rb.d.PrepareUniforms(nb, kb), Rb.d.PrepareSamplers(mb, kb)), (0, jb.zb)({
              uniformsNames: nb,
              uniformBuffersNames: lb,
              samplers: mb,
              defines: kb,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const eb = {};
            this.customShaderNameResolve && (Xb = this.customShaderNameResolve(Xb, nb, lb, mb, kb, Mb, eb));
            const Cb = kb.toString(),
              Nb = Ib.createEffect(Xb, {
                attributes: Mb,
                uniformsNames: nb,
                uniformBuffersNames: lb,
                samplers: mb,
                defines: Cb,
                fallbacks: Hb,
                onCompiled: Wb,
                onError: ab,
                indexParameters: Qb,
                processFinalCode: eb.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: kb.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, Ib);
            return this._eventInfo.customCode = void 0, Nb
          }
          _prepareDefines(cb, sb, kb) {
            let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Ub = sb.hasThinInstances,
              Ib = this.EY(),
              Hb = Ib.Sm();
            (0, jb.bb)(Ib, cb, kb, !0, this._maxSimultaneousLights, this._disableLighting), kb._needNormals = !0, (0, jb.jb)(Ib, kb);
            const fb = this.needAlphaBlendingForMesh(cb) && this.EY().useOrderIndependentTransparency;
            if ((0, jb.ob)(Ib, kb, this.canRenderToMRT && !fb), (0, jb.mb)(Ib, kb, fb), nc.d.PrepareDefines(Hb.currentRenderPassId, cb, kb), kb._areTexturesDirty) {
              kb._needUVs = !1;
              for (let bb = 1; bb <= 6; ++bb) kb["MAINUV" + bb] = !1;
              if (Ib.texturesEnabled) {
                for (const sb in this._samplersList) {
                  const bb = this._samplersList[sb];
                  bb.value ? ((0, jb.eb)(bb.value, kb, bb.textureDefine), kb[bb.textureDefine + "_GAMMA"] = bb.value.gammaSpace) : kb[bb.textureDefine] = !1
                }
                const bb = this._getRadianceTexture(),
                  cb = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Hb.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, jb._)(Ib, bb, kb, this.realTimeFiltering, this.realTimeFilteringQuality, !cb), this._baseMetalnessTexture && (kb.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), kb.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, kb.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, kb.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, kb.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, kb.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, kb.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, kb.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, kb.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, kb.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, kb.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, kb.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && Fb.e.DiffuseTextureEnabled ? (kb.PARALLAX = !0, kb.PARALLAX_RHS = Ib.useRightHandedSystem, kb.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : kb.PARALLAX = !1, kb.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (kb.PARALLAX = !1, kb.PARALLAX_RHS = !1, kb.PARALLAXOCCLUSION = !1, kb.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Fb.e.ReflectionTextureEnabled ? (kb.ENVIRONMENTBRDF = !0, kb.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (kb.ENVIRONMENTBRDF = !1, kb.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? kb.FUZZENVIRONMENTBRDF = !0 : kb.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  kb.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && Fb.e.RefractionTextureEnabled, kb.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, kb.REFRACTED_LIGHTS = !0;
                  const bb = this._getRadianceTexture();
                  bb ? (kb.REFRACTED_ENVIRONMENT = Fb.e.RefractionTextureEnabled, kb.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.EY().useRightHandedSystem ? !bb.invertZ : bb.invertZ, kb.REFRACTED_ENVIRONMENT_LOCAL_CUBE = bb.isCube && bb.boundingBoxSize) : kb.REFRACTED_ENVIRONMENT = !1
                } else kb.REFRACTED_BACKGROUND = !1, kb.REFRACTED_LIGHTS = !1, kb.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? kb.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : kb.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === ab.e.LIGHTFALLOFF_STANDARD ? (kb.USEPHYSICALLIGHTFALLOFF = !1, kb.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === ab.e.LIGHTFALLOFF_GLTF ? (kb.USEPHYSICALLIGHTFALLOFF = !1, kb.USEGLTFLIGHTFALLOFF = !0) : (kb.USEPHYSICALLIGHTFALLOFF = !0, kb.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? kb.TWOSIDEDLIGHTING = !0 : kb.TWOSIDEDLIGHTING = !1, kb.MIRRORED = !!Ib._mirroredCameraPosition, kb.SPECULARAA = Hb.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(kb._areTexturesDirty || kb._areMiscDirty) && (kb.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, kb.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, kb.ALPHABLEND = this.needAlphaBlendingForMesh(cb)), kb._areTexturesDirty && (kb.TEXTURE_REPETITION_MODE = Hb.version > 1 || Hb.isWebGPU ? this.textureRepetitionMode : 0), kb._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(kb), kb.FORCENORMALFORWARD = this._forceNormalForward, kb.RADIANCEOCCLUSION = this._useRadianceOcclusion, kb.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && bb._noiseTextures[Ib.uniqueId] && Fb.e.ReflectionTextureEnabled ? (kb.ANISOTROPIC = !0, cb.isVerticesDataPresent(zb.l.TangentKind) || (kb._needUVs = !0, kb.MAINUV1 = !0), this._useGltfStyleAnisotropy && (kb.USE_GLTF_STYLE_ANISOTROPY = !0), kb.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, kb.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (kb.ANISOTROPIC = !1, kb.USE_GLTF_STYLE_ANISOTROPY = !1, kb.ANISOTROPIC_BASE = !1, kb.ANISOTROPIC_COAT = !1), kb.THIN_FILM = this.thinFilmWeight > 0, kb.IRIDESCENCE = this.thinFilmWeight > 0, kb.DISPERSION = this.transmissionDispersionScale > 0, kb.SCATTERING = this.hasScattering;
            if (kb.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, kb.TRANSMISSION_SLAB = this.transmissionWeight > 0, kb.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, kb.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !kb.PREPASS && (kb.SUBSURFACE_SLAB || kb.TRANSMISSION_SLAB_VOLUME)) {
              let bb = !1;
              if (!this.sssIrradianceTexture && Ib.geometryBufferRenderer) {
                const cb = Ib.geometryBufferRenderer.getTextureIndex(qc.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = Ib.geometryBufferRenderer.getGBuffer().textures[cb], bb = !0
              }
              if (!this.sssDepthTexture && Ib.geometryBufferRenderer) {
                const cb = Ib.geometryBufferRenderer.getTextureIndex(qc.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = Ib.geometryBufferRenderer.getGBuffer().textures[cb], bb = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (kb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, bb && (kb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            kb.FUZZ = this.fuzzWeight > 0 && Fb.e.ReflectionTextureEnabled, kb.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, kb.FUZZ ? (cb.isVerticesDataPresent(zb.l.TangentKind) || (kb._needUVs = !0, kb.MAINUV1 = !0), this._environmentFuzzBRDFTexture = Ob(this.EY()), kb.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, kb.FUZZENVIRONMENTBRDF = !1, kb.FUZZ_IBL_SAMPLES = 0), kb._areMiscDirty && ((0, jb.hb)(cb, Ib, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(cb), kb, this._applyDecalMapAfterDetailMap, this._useVertexPulling, sb, this._isVertexOutputInvariant), kb.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !cb.isVerticesDataPresent(zb.l.NormalKind), kb.DEBUGMODE = this._debugMode), (0, jb.Y)(Ib, Hb, this, kb, !!Wb, Tb, Ub), this._eventInfo.defines = kb, this._eventInfo.mesh = cb, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, jb.V)(cb, kb, !0, !0, !0, this._transparencyMode !== ab.e.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, cb = new WeakMap, kb = new WeakMap, Wb = new WeakMap, Tb = new WeakMap, Ub = new WeakMap, Ib = new WeakMap, Hb = new WeakMap, fb = new WeakMap, Mb = new WeakMap, Xb = new WeakMap, nb = new WeakMap, mb = new WeakMap, lb = new WeakMap, Qb = new WeakMap, eb = new WeakMap, Cb = new WeakMap, Nb = new WeakMap, Vb = new WeakMap, Lb = new WeakMap, ub = new WeakMap, Yb = new WeakMap, hb = new WeakMap, Pb = new WeakMap, Db = new WeakMap, Eb = new WeakMap, ib = new WeakMap, Kb = new WeakMap, qb = new WeakMap, db = new WeakMap, Ab = new WeakMap, wb = new WeakMap, Sb = new WeakMap, vb = new WeakMap, pb = new WeakMap, bc = new WeakMap, cc = new WeakMap, sc = new WeakMap, kc = new WeakMap, Wc = new WeakMap, ac = new WeakMap, Tc = new WeakMap, Uc = new WeakMap, Ic = new WeakMap, Hc = new WeakMap, mc = new WeakMap, lc = new WeakMap, Qc = new WeakMap, ec = new WeakMap, Cc = new WeakMap, Nc = new WeakMap, Vc = new WeakMap, Lc = new WeakMap, uc = new WeakMap, Jc = new WeakMap, gc = new WeakMap, Bc = new WeakMap, tc = new WeakMap, yc = new WeakMap, Pc = new WeakMap, Dc = new WeakMap, Ec = new WeakMap, ic = new WeakMap, Oc = new WeakMap, Gc = new WeakMap, Kc = new WeakMap, Zc = new WeakMap, zc = new WeakMap, dc = new WeakMap, wc = new WeakMap, Rc = new WeakMap, vc = new WeakMap, jc = new WeakMap, pc = new WeakMap, bs = new WeakMap, cs = new WeakMap, ss = new WeakMap, ks = new WeakMap, Ws = new WeakMap, as = new WeakMap, Ts = new WeakMap, Us = new WeakMap, Is = new WeakMap, Hs = new WeakMap, fs = new WeakMap, Ms = new WeakMap, Xs = new WeakMap, ns = new WeakMap, ms = new WeakMap, ls = new WeakMap, Qs = new WeakMap, es = new WeakMap, Cs = new WeakMap, Ns = new WeakMap, Vs = new WeakMap, Ls = new WeakMap, us = new WeakMap, Ys = new WeakMap, hs = new WeakMap, gs = new WeakMap, Bs = new WeakMap, ts = new WeakMap, ys = new WeakMap, (() => {
          const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(iW[Symbol.metadata] ?? null) : void 0;
          Ps = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Ds = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Es = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], is = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Os = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Gs = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Ks = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Zs = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], zs = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], qs = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], ds = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], As = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], ws = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], rs = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], os = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Ss = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Rs = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], vs = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Fs = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], xs = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], ps = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], bk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], ck = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], sk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], kk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Wk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], ak = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Tk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Uk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Ik = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Hk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], fk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Mk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Xk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], nk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], mk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], lk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Qk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], ek = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Ck = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Nk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Vk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Lk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], uk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Yk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], hk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Jk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], gk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Bk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], tk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], yk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Pk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Dk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Ek = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], ik = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Ok = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Gk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Kk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Zk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], zk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], qk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], dk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Ak = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], wk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], rk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Sk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Rk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], vk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], Fk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], xk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], jk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], pk = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], bW = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], cW = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], sW = [(0, gb.b)("_markAllSubMeshesAsTexturesDirty")], kW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], WW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], aW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], TW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], UW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], IW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], HW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], fW = [(0, gb.E)()], MW = [(0, gb.E)()], XW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], nW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], mW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], lW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], QW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsLightsDirty")], eW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], CW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsLightsDirty")], NW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], VW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], LW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], uW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], hW = [(0, gb.f)("_markAllSubMeshesAsTexturesDirty")], JW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], gW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], BW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], tW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], yW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], PW = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], DW = [(0, gb.f)("_markAllSubMeshesAsMiscDirty")], EW = [(0, gb.E)()], (0, Jb.j)(bb, null, Ps, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseWeight" in bb,
              get: bb => bb.baseWeight,
              set: (bb, cb) => {
                bb.baseWeight = cb
              }
            },
            metadata: cb
          }, GW, KW), (0, Jb.j)(bb, null, Ds, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseWeightTexture" in bb,
              get: bb => bb.baseWeightTexture,
              set: (bb, cb) => {
                bb.baseWeightTexture = cb
              }
            },
            metadata: cb
          }, ZW, zW), (0, Jb.j)(bb, null, Es, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseColor" in bb,
              get: bb => bb.baseColor,
              set: (bb, cb) => {
                bb.baseColor = cb
              }
            },
            metadata: cb
          }, qW, dW), (0, Jb.j)(bb, null, is, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseColorTexture" in bb,
              get: bb => bb.baseColorTexture,
              set: (bb, cb) => {
                bb.baseColorTexture = cb
              }
            },
            metadata: cb
          }, AW, wW), (0, Jb.j)(bb, null, Os, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseDiffuseRoughness" in bb,
              get: bb => bb.baseDiffuseRoughness,
              set: (bb, cb) => {
                bb.baseDiffuseRoughness = cb
              }
            },
            metadata: cb
          }, rW, oW), (0, Jb.j)(bb, null, Gs, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseDiffuseRoughnessTexture" in bb,
              get: bb => bb.baseDiffuseRoughnessTexture,
              set: (bb, cb) => {
                bb.baseDiffuseRoughnessTexture = cb
              }
            },
            metadata: cb
          }, SW, RW), (0, Jb.j)(bb, null, Ks, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseMetalness" in bb,
              get: bb => bb.baseMetalness,
              set: (bb, cb) => {
                bb.baseMetalness = cb
              }
            },
            metadata: cb
          }, vW, FW), (0, Jb.j)(bb, null, Zs, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseMetalnessTexture" in bb,
              get: bb => bb.baseMetalnessTexture,
              set: (bb, cb) => {
                bb.baseMetalnessTexture = cb
              }
            },
            metadata: cb
          }, xW, jW), (0, Jb.j)(bb, null, zs, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularWeight" in bb,
              get: bb => bb.specularWeight,
              set: (bb, cb) => {
                bb.specularWeight = cb
              }
            },
            metadata: cb
          }, pW, ba), (0, Jb.j)(bb, null, qs, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularWeightTexture" in bb,
              get: bb => bb.specularWeightTexture,
              set: (bb, cb) => {
                bb.specularWeightTexture = cb
              }
            },
            metadata: cb
          }, ca, sa), (0, Jb.j)(bb, null, ds, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularColor" in bb,
              get: bb => bb.specularColor,
              set: (bb, cb) => {
                bb.specularColor = cb
              }
            },
            metadata: cb
          }, ka, Wa), (0, Jb.j)(bb, null, As, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularColorTexture" in bb,
              get: bb => bb.specularColorTexture,
              set: (bb, cb) => {
                bb.specularColorTexture = cb
              }
            },
            metadata: cb
          }, aa, Ta), (0, Jb.j)(bb, null, ws, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughness" in bb,
              get: bb => bb.specularRoughness,
              set: (bb, cb) => {
                bb.specularRoughness = cb
              }
            },
            metadata: cb
          }, Ua, Ia), (0, Jb.j)(bb, null, rs, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughnessTexture" in bb,
              get: bb => bb.specularRoughnessTexture,
              set: (bb, cb) => {
                bb.specularRoughnessTexture = cb
              }
            },
            metadata: cb
          }, Ha, fa), (0, Jb.j)(bb, null, os, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughnessAnisotropy" in bb,
              get: bb => bb.specularRoughnessAnisotropy,
              set: (bb, cb) => {
                bb.specularRoughnessAnisotropy = cb
              }
            },
            metadata: cb
          }, Ma, Xa), (0, Jb.j)(bb, null, Ss, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughnessAnisotropyTexture" in bb,
              get: bb => bb.specularRoughnessAnisotropyTexture,
              set: (bb, cb) => {
                bb.specularRoughnessAnisotropyTexture = cb
              }
            },
            metadata: cb
          }, na, ma), (0, Jb.j)(bb, null, Rs, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularIor" in bb,
              get: bb => bb.specularIor,
              set: (bb, cb) => {
                bb.specularIor = cb
              }
            },
            metadata: cb
          }, la, Qa), (0, Jb.j)(bb, null, vs, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionWeight" in bb,
              get: bb => bb.transmissionWeight,
              set: (bb, cb) => {
                bb.transmissionWeight = cb
              }
            },
            metadata: cb
          }, ea, Ca), (0, Jb.j)(bb, null, Fs, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionWeightTexture" in bb,
              get: bb => bb.transmissionWeightTexture,
              set: (bb, cb) => {
                bb.transmissionWeightTexture = cb
              }
            },
            metadata: cb
          }, Na, Va), (0, Jb.j)(bb, null, xs, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionColor" in bb,
              get: bb => bb.transmissionColor,
              set: (bb, cb) => {
                bb.transmissionColor = cb
              }
            },
            metadata: cb
          }, La, ua), (0, Jb.j)(bb, null, ps, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionColorTexture" in bb,
              get: bb => bb.transmissionColorTexture,
              set: (bb, cb) => {
                bb.transmissionColorTexture = cb
              }
            },
            metadata: cb
          }, Ya, ha), (0, Jb.j)(bb, null, bk, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDepth" in bb,
              get: bb => bb.transmissionDepth,
              set: (bb, cb) => {
                bb.transmissionDepth = cb
              }
            },
            metadata: cb
          }, Ja, ga), (0, Jb.j)(bb, null, ck, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDepthTexture" in bb,
              get: bb => bb.transmissionDepthTexture,
              set: (bb, cb) => {
                bb.transmissionDepthTexture = cb
              }
            },
            metadata: cb
          }, Ba, ta), (0, Jb.j)(bb, null, sk, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionScatter" in bb,
              get: bb => bb.transmissionScatter,
              set: (bb, cb) => {
                bb.transmissionScatter = cb
              }
            },
            metadata: cb
          }, ya, Pa), (0, Jb.j)(bb, null, kk, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionScatterTexture" in bb,
              get: bb => bb.transmissionScatterTexture,
              set: (bb, cb) => {
                bb.transmissionScatterTexture = cb
              }
            },
            metadata: cb
          }, Da, Ea), (0, Jb.j)(bb, null, Wk, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionScatterAnisotropy" in bb,
              get: bb => bb.transmissionScatterAnisotropy,
              set: (bb, cb) => {
                bb.transmissionScatterAnisotropy = cb
              }
            },
            metadata: cb
          }, ia, Oa), (0, Jb.j)(bb, null, ak, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDispersionScale" in bb,
              get: bb => bb.transmissionDispersionScale,
              set: (bb, cb) => {
                bb.transmissionDispersionScale = cb
              }
            },
            metadata: cb
          }, Ga, Ka), (0, Jb.j)(bb, null, Tk, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDispersionScaleTexture" in bb,
              get: bb => bb.transmissionDispersionScaleTexture,
              set: (bb, cb) => {
                bb.transmissionDispersionScaleTexture = cb
              }
            },
            metadata: cb
          }, Za, za), (0, Jb.j)(bb, null, Uk, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDispersionAbbeNumber" in bb,
              get: bb => bb.transmissionDispersionAbbeNumber,
              set: (bb, cb) => {
                bb.transmissionDispersionAbbeNumber = cb
              }
            },
            metadata: cb
          }, qa, da), (0, Jb.j)(bb, null, Ik, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceWeight" in bb,
              get: bb => bb.subsurfaceWeight,
              set: (bb, cb) => {
                bb.subsurfaceWeight = cb
              }
            },
            metadata: cb
          }, Aa, wa), (0, Jb.j)(bb, null, Hk, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceWeightTexture" in bb,
              get: bb => bb.subsurfaceWeightTexture,
              set: (bb, cb) => {
                bb.subsurfaceWeightTexture = cb
              }
            },
            metadata: cb
          }, ra, oa), (0, Jb.j)(bb, null, fk, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceColor" in bb,
              get: bb => bb.subsurfaceColor,
              set: (bb, cb) => {
                bb.subsurfaceColor = cb
              }
            },
            metadata: cb
          }, Sa, Ra), (0, Jb.j)(bb, null, Mk, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceColorTexture" in bb,
              get: bb => bb.subsurfaceColorTexture,
              set: (bb, cb) => {
                bb.subsurfaceColorTexture = cb
              }
            },
            metadata: cb
          }, va, Fa), (0, Jb.j)(bb, null, Xk, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceRadius" in bb,
              get: bb => bb.subsurfaceRadius,
              set: (bb, cb) => {
                bb.subsurfaceRadius = cb
              }
            },
            metadata: cb
          }, xa, ja), (0, Jb.j)(bb, null, nk, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceRadiusScale" in bb,
              get: bb => bb.subsurfaceRadiusScale,
              set: (bb, cb) => {
                bb.subsurfaceRadiusScale = cb
              }
            },
            metadata: cb
          }, pa, bT), (0, Jb.j)(bb, null, mk, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceRadiusScaleTexture" in bb,
              get: bb => bb.subsurfaceRadiusScaleTexture,
              set: (bb, cb) => {
                bb.subsurfaceRadiusScaleTexture = cb
              }
            },
            metadata: cb
          }, cT, sT), (0, Jb.j)(bb, null, lk, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceScatterAnisotropy" in bb,
              get: bb => bb.subsurfaceScatterAnisotropy,
              set: (bb, cb) => {
                bb.subsurfaceScatterAnisotropy = cb
              }
            },
            metadata: cb
          }, kT, WT), (0, Jb.j)(bb, null, Qk, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatWeight" in bb,
              get: bb => bb.coatWeight,
              set: (bb, cb) => {
                bb.coatWeight = cb
              }
            },
            metadata: cb
          }, aT, TT), (0, Jb.j)(bb, null, ek, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatWeightTexture" in bb,
              get: bb => bb.coatWeightTexture,
              set: (bb, cb) => {
                bb.coatWeightTexture = cb
              }
            },
            metadata: cb
          }, UT, IT), (0, Jb.j)(bb, null, Ck, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatColor" in bb,
              get: bb => bb.coatColor,
              set: (bb, cb) => {
                bb.coatColor = cb
              }
            },
            metadata: cb
          }, HT, fT), (0, Jb.j)(bb, null, Nk, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatColorTexture" in bb,
              get: bb => bb.coatColorTexture,
              set: (bb, cb) => {
                bb.coatColorTexture = cb
              }
            },
            metadata: cb
          }, MT, XT), (0, Jb.j)(bb, null, Vk, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughness" in bb,
              get: bb => bb.coatRoughness,
              set: (bb, cb) => {
                bb.coatRoughness = cb
              }
            },
            metadata: cb
          }, nT, mT), (0, Jb.j)(bb, null, Lk, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughnessTexture" in bb,
              get: bb => bb.coatRoughnessTexture,
              set: (bb, cb) => {
                bb.coatRoughnessTexture = cb
              }
            },
            metadata: cb
          }, lT, QT), (0, Jb.j)(bb, null, uk, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughnessAnisotropy" in bb,
              get: bb => bb.coatRoughnessAnisotropy,
              set: (bb, cb) => {
                bb.coatRoughnessAnisotropy = cb
              }
            },
            metadata: cb
          }, eT, CT), (0, Jb.j)(bb, null, Yk, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughnessAnisotropyTexture" in bb,
              get: bb => bb.coatRoughnessAnisotropyTexture,
              set: (bb, cb) => {
                bb.coatRoughnessAnisotropyTexture = cb
              }
            },
            metadata: cb
          }, NT, VT), (0, Jb.j)(bb, null, hk, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatIor" in bb,
              get: bb => bb.coatIor,
              set: (bb, cb) => {
                bb.coatIor = cb
              }
            },
            metadata: cb
          }, LT, uT), (0, Jb.j)(bb, null, Jk, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatDarkening" in bb,
              get: bb => bb.coatDarkening,
              set: (bb, cb) => {
                bb.coatDarkening = cb
              }
            },
            metadata: cb
          }, YT, hT), (0, Jb.j)(bb, null, gk, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatDarkeningTexture" in bb,
              get: bb => bb.coatDarkeningTexture,
              set: (bb, cb) => {
                bb.coatDarkeningTexture = cb
              }
            },
            metadata: cb
          }, JT, gT), (0, Jb.j)(bb, null, Bk, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzWeight" in bb,
              get: bb => bb.fuzzWeight,
              set: (bb, cb) => {
                bb.fuzzWeight = cb
              }
            },
            metadata: cb
          }, BT, tT), (0, Jb.j)(bb, null, tk, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzWeightTexture" in bb,
              get: bb => bb.fuzzWeightTexture,
              set: (bb, cb) => {
                bb.fuzzWeightTexture = cb
              }
            },
            metadata: cb
          }, yT, PT), (0, Jb.j)(bb, null, yk, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzColor" in bb,
              get: bb => bb.fuzzColor,
              set: (bb, cb) => {
                bb.fuzzColor = cb
              }
            },
            metadata: cb
          }, DT, ET), (0, Jb.j)(bb, null, Pk, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzColorTexture" in bb,
              get: bb => bb.fuzzColorTexture,
              set: (bb, cb) => {
                bb.fuzzColorTexture = cb
              }
            },
            metadata: cb
          }, iT, OT), (0, Jb.j)(bb, null, Dk, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzRoughness" in bb,
              get: bb => bb.fuzzRoughness,
              set: (bb, cb) => {
                bb.fuzzRoughness = cb
              }
            },
            metadata: cb
          }, GT, KT), (0, Jb.j)(bb, null, Ek, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzRoughnessTexture" in bb,
              get: bb => bb.fuzzRoughnessTexture,
              set: (bb, cb) => {
                bb.fuzzRoughnessTexture = cb
              }
            },
            metadata: cb
          }, ZT, zT), (0, Jb.j)(bb, null, ik, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryThinWalled" in bb,
              get: bb => bb.geometryThinWalled,
              set: (bb, cb) => {
                bb.geometryThinWalled = cb
              }
            },
            metadata: cb
          }, qT, dT), (0, Jb.j)(bb, null, Ok, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryNormalTexture" in bb,
              get: bb => bb.geometryNormalTexture,
              set: (bb, cb) => {
                bb.geometryNormalTexture = cb
              }
            },
            metadata: cb
          }, AT, wT), (0, Jb.j)(bb, null, Gk, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryTangent" in bb,
              get: bb => bb.geometryTangent,
              set: (bb, cb) => {
                bb.geometryTangent = cb
              }
            },
            metadata: cb
          }, rT, oT), (0, Jb.j)(bb, null, Kk, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryTangentTexture" in bb,
              get: bb => bb.geometryTangentTexture,
              set: (bb, cb) => {
                bb.geometryTangentTexture = cb
              }
            },
            metadata: cb
          }, ST, RT), (0, Jb.j)(bb, null, Zk, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryCoatNormalTexture" in bb,
              get: bb => bb.geometryCoatNormalTexture,
              set: (bb, cb) => {
                bb.geometryCoatNormalTexture = cb
              }
            },
            metadata: cb
          }, vT, FT), (0, Jb.j)(bb, null, zk, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryCoatTangent" in bb,
              get: bb => bb.geometryCoatTangent,
              set: (bb, cb) => {
                bb.geometryCoatTangent = cb
              }
            },
            metadata: cb
          }, xT, jT), (0, Jb.j)(bb, null, qk, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryCoatTangentTexture" in bb,
              get: bb => bb.geometryCoatTangentTexture,
              set: (bb, cb) => {
                bb.geometryCoatTangentTexture = cb
              }
            },
            metadata: cb
          }, pT, bU), (0, Jb.j)(bb, null, dk, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryOpacity" in bb,
              get: bb => bb.geometryOpacity,
              set: (bb, cb) => {
                bb.geometryOpacity = cb
              }
            },
            metadata: cb
          }, cU, sU), (0, Jb.j)(bb, null, Ak, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryOpacityTexture" in bb,
              get: bb => bb.geometryOpacityTexture,
              set: (bb, cb) => {
                bb.geometryOpacityTexture = cb
              }
            },
            metadata: cb
          }, kU, WU), (0, Jb.j)(bb, null, wk, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryThickness" in bb,
              get: bb => bb.geometryThickness,
              set: (bb, cb) => {
                bb.geometryThickness = cb
              }
            },
            metadata: cb
          }, aU, TU), (0, Jb.j)(bb, null, rk, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryThicknessTexture" in bb,
              get: bb => bb.geometryThicknessTexture,
              set: (bb, cb) => {
                bb.geometryThicknessTexture = cb
              }
            },
            metadata: cb
          }, UU, IU), (0, Jb.j)(bb, null, Sk, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissionLuminance" in bb,
              get: bb => bb.emissionLuminance,
              set: (bb, cb) => {
                bb.emissionLuminance = cb
              }
            },
            metadata: cb
          }, HU, fU), (0, Jb.j)(bb, null, Rk, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissionColor" in bb,
              get: bb => bb.emissionColor,
              set: (bb, cb) => {
                bb.emissionColor = cb
              }
            },
            metadata: cb
          }, MU, XU), (0, Jb.j)(bb, null, vk, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissionColorTexture" in bb,
              get: bb => bb.emissionColorTexture,
              set: (bb, cb) => {
                bb.emissionColorTexture = cb
              }
            },
            metadata: cb
          }, nU, mU), (0, Jb.j)(bb, null, Fk, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmWeight" in bb,
              get: bb => bb.thinFilmWeight,
              set: (bb, cb) => {
                bb.thinFilmWeight = cb
              }
            },
            metadata: cb
          }, lU, QU), (0, Jb.j)(bb, null, xk, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmWeightTexture" in bb,
              get: bb => bb.thinFilmWeightTexture,
              set: (bb, cb) => {
                bb.thinFilmWeightTexture = cb
              }
            },
            metadata: cb
          }, eU, CU), (0, Jb.j)(bb, null, jk, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmThickness" in bb,
              get: bb => bb.thinFilmThickness,
              set: (bb, cb) => {
                bb.thinFilmThickness = cb
              }
            },
            metadata: cb
          }, NU, VU), (0, Jb.j)(bb, null, pk, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmThicknessMin" in bb,
              get: bb => bb.thinFilmThicknessMin,
              set: (bb, cb) => {
                bb.thinFilmThicknessMin = cb
              }
            },
            metadata: cb
          }, LU, uU), (0, Jb.j)(bb, null, bW, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmThicknessTexture" in bb,
              get: bb => bb.thinFilmThicknessTexture,
              set: (bb, cb) => {
                bb.thinFilmThicknessTexture = cb
              }
            },
            metadata: cb
          }, YU, hU), (0, Jb.j)(bb, null, cW, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmIor" in bb,
              get: bb => bb.thinFilmIor,
              set: (bb, cb) => {
                bb.thinFilmIor = cb
              }
            },
            metadata: cb
          }, JU, gU), (0, Jb.j)(bb, null, sW, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "ambientOcclusionTexture" in bb,
              get: bb => bb.ambientOcclusionTexture,
              set: (bb, cb) => {
                bb.ambientOcclusionTexture = cb
              }
            },
            metadata: cb
          }, BU, tU), (0, Jb.j)(bb, null, kW, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: bb => "directIntensity" in bb,
              get: bb => bb.directIntensity,
              set: (bb, cb) => {
                bb.directIntensity = cb
              }
            },
            metadata: cb
          }, yU, PU), (0, Jb.j)(bb, null, WW, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: bb => "environmentIntensity" in bb,
              get: bb => bb.environmentIntensity,
              set: (bb, cb) => {
                bb.environmentIntensity = cb
              }
            },
            metadata: cb
          }, DU, EU), (0, Jb.j)(bb, null, aW, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useSpecularWeightFromTextureAlpha" in bb,
              get: bb => bb.useSpecularWeightFromTextureAlpha,
              set: (bb, cb) => {
                bb.useSpecularWeightFromTextureAlpha = cb
              }
            },
            metadata: cb
          }, iU, OU), (0, Jb.j)(bb, null, TW, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceAlphaTest" in bb,
              get: bb => bb.forceAlphaTest,
              set: (bb, cb) => {
                bb.forceAlphaTest = cb
              }
            },
            metadata: cb
          }, GU, KU), (0, Jb.j)(bb, null, UW, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaCutOff" in bb,
              get: bb => bb.alphaCutOff,
              set: (bb, cb) => {
                bb.alphaCutOff = cb
              }
            },
            metadata: cb
          }, ZU, zU), (0, Jb.j)(bb, null, IW, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAmbientOcclusionFromMetallicTextureRed" in bb,
              get: bb => bb.useAmbientOcclusionFromMetallicTextureRed,
              set: (bb, cb) => {
                bb.useAmbientOcclusionFromMetallicTextureRed = cb
              }
            },
            metadata: cb
          }, qU, dU), (0, Jb.j)(bb, null, HW, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAmbientInGrayScale" in bb,
              get: bb => bb.useAmbientInGrayScale,
              set: (bb, cb) => {
                bb.useAmbientInGrayScale = cb
              }
            },
            metadata: cb
          }, AU, wU), (0, Jb.j)(bb, null, fW, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: bb => "usePhysicalLightFalloff" in bb,
              get: bb => bb.usePhysicalLightFalloff
            },
            metadata: cb
          }, null, OW), (0, Jb.j)(bb, null, MW, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: bb => "useGLTFLightFalloff" in bb,
              get: bb => bb.useGLTFLightFalloff
            },
            metadata: cb
          }, null, OW), (0, Jb.j)(bb, null, XW, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "useObjectSpaceNormalMap" in bb,
              get: bb => bb.useObjectSpaceNormalMap,
              set: (bb, cb) => {
                bb.useObjectSpaceNormalMap = cb
              }
            },
            metadata: cb
          }, rU, oU), (0, Jb.j)(bb, null, nW, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallax" in bb,
              get: bb => bb.useParallax,
              set: (bb, cb) => {
                bb.useParallax = cb
              }
            },
            metadata: cb
          }, SU, RU), (0, Jb.j)(bb, null, mW, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallaxOcclusion" in bb,
              get: bb => bb.useParallaxOcclusion,
              set: (bb, cb) => {
                bb.useParallaxOcclusion = cb
              }
            },
            metadata: cb
          }, vU, FU), (0, Jb.j)(bb, null, lW, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: bb => "parallaxScaleBias" in bb,
              get: bb => bb.parallaxScaleBias,
              set: (bb, cb) => {
                bb.parallaxScaleBias = cb
              }
            },
            metadata: cb
          }, xU, jU), (0, Jb.j)(bb, null, QW, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "disableLighting" in bb,
              get: bb => bb.disableLighting,
              set: (bb, cb) => {
                bb.disableLighting = cb
              }
            },
            metadata: cb
          }, pU, bI), (0, Jb.j)(bb, null, eW, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceIrradianceInFragment" in bb,
              get: bb => bb.forceIrradianceInFragment,
              set: (bb, cb) => {
                bb.forceIrradianceInFragment = cb
              }
            },
            metadata: cb
          }, cI, sI), (0, Jb.j)(bb, null, CW, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: bb => "maxSimultaneousLights" in bb,
              get: bb => bb.maxSimultaneousLights,
              set: (bb, cb) => {
                bb.maxSimultaneousLights = cb
              }
            },
            metadata: cb
          }, kI, WI), (0, Jb.j)(bb, null, NW, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapX" in bb,
              get: bb => bb.invertNormalMapX,
              set: (bb, cb) => {
                bb.invertNormalMapX = cb
              }
            },
            metadata: cb
          }, aI, TI), (0, Jb.j)(bb, null, VW, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapY" in bb,
              get: bb => bb.invertNormalMapY,
              set: (bb, cb) => {
                bb.invertNormalMapY = cb
              }
            },
            metadata: cb
          }, UI, II), (0, Jb.j)(bb, null, LW, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "twoSidedLighting" in bb,
              get: bb => bb.twoSidedLighting,
              set: (bb, cb) => {
                bb.twoSidedLighting = cb
              }
            },
            metadata: cb
          }, HI, fI), (0, Jb.j)(bb, null, uW, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAlphaFresnel" in bb,
              get: bb => bb.useAlphaFresnel,
              set: (bb, cb) => {
                bb.useAlphaFresnel = cb
              }
            },
            metadata: cb
          }, MI, XI), (0, Jb.j)(bb, null, YW, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: bb => "useLinearAlphaFresnel" in bb,
              get: bb => bb.useLinearAlphaFresnel,
              set: (bb, cb) => {
                bb.useLinearAlphaFresnel = cb
              }
            },
            metadata: cb
          }, nI, mI), (0, Jb.j)(bb, null, hW, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "environmentBRDFTexture" in bb,
              get: bb => bb.environmentBRDFTexture,
              set: (bb, cb) => {
                bb.environmentBRDFTexture = cb
              }
            },
            metadata: cb
          }, lI, QI), (0, Jb.j)(bb, null, JW, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceNormalForward" in bb,
              get: bb => bb.forceNormalForward,
              set: (bb, cb) => {
                bb.forceNormalForward = cb
              }
            },
            metadata: cb
          }, eI, CI), (0, Jb.j)(bb, null, gW, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: bb => "enableSpecularAntiAliasing" in bb,
              get: bb => bb.enableSpecularAntiAliasing,
              set: (bb, cb) => {
                bb.enableSpecularAntiAliasing = cb
              }
            },
            metadata: cb
          }, NI, VI), (0, Jb.j)(bb, null, BW, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useHorizonOcclusion" in bb,
              get: bb => bb.useHorizonOcclusion,
              set: (bb, cb) => {
                bb.useHorizonOcclusion = cb
              }
            },
            metadata: cb
          }, LI, uI), (0, Jb.j)(bb, null, tW, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useRadianceOcclusion" in bb,
              get: bb => bb.useRadianceOcclusion,
              set: (bb, cb) => {
                bb.useRadianceOcclusion = cb
              }
            },
            metadata: cb
          }, YI, hI), (0, Jb.j)(bb, null, yW, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: bb => "unlit" in bb,
              get: bb => bb.unlit,
              set: (bb, cb) => {
                bb.unlit = cb
              }
            },
            metadata: cb
          }, JI, gI), (0, Jb.j)(bb, null, PW, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "applyDecalMapAfterDetailMap" in bb,
              get: bb => bb.applyDecalMapAfterDetailMap,
              set: (bb, cb) => {
                bb.applyDecalMapAfterDetailMap = cb
              }
            },
            metadata: cb
          }, BI, tI), (0, Jb.j)(bb, null, DW, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "debugMode" in bb,
              get: bb => bb.debugMode,
              set: (bb, cb) => {
                bb.debugMode = cb
              }
            },
            metadata: cb
          }, yI, PI), (0, Jb.j)(bb, null, EW, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "transparencyMode" in bb,
              get: bb => bb.transparencyMode
            },
            metadata: cb
          }, null, OW), cb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cb
          })
        })(), bb.SSS_QUALITY_LOW = 0, bb.SSS_QUALITY_MEDIUM = 1, bb.SSS_QUALITY_HIGH = 2, bb._noiseTextures = {}, bb.ForceGLSL = !1, bb._ShaderLoader = new Xc.d((() => [Promise.all([sb.e(307), sb.e(373)]).then((() => sb(61163))), Promise.all([sb.e(312), sb.e(308), sb.e(372), sb.e(377)]).then((() => sb(61176)))]), (() => [Promise.all([sb.e(326), sb.e(328), sb.e(376)]).then((() => sb(61221))), Promise.all([sb.e(326), sb.e(329), sb.e(375), sb.e(378)]).then((() => sb(61233)))])), bb
      })(),
      pc = !1;
    pc || (pc = !0, (0, Rb.h)(), (0, dc.h)("BABYLON.OpenPBRMaterial", jc));
    var bs = sb(36683);
    class cs {
      constructor(bb) {
        this.name = ic.e.NAME_PROCEDURALTEXTURE, this.aQ = bb
      }
      register() {
        this.aQ._beforeClearStage.registerStep(ic.e.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.aQ.proceduralTexturesEnabled) {
          hc.g.StartPerformanceCounter("Procedural textures", this.aQ.proceduralTextures.length > 0);
          for (let bb = 0; bb < this.aQ.proceduralTextures.length; bb++) {
            const cb = this.aQ.proceduralTextures[bb];
            cb._shouldRender() && cb.render()
          }
          hc.g.EndPerformanceCounter("Procedural textures", this.aQ.proceduralTextures.length > 0)
        }
      }
    }
    var ss = sb(39755);
    let ks = (() => {
      var bb;
      let cb, kb, Wb, Tb, Ub, Ib = yb.e,
        Hb = [],
        fb = [],
        Mb = [],
        Xb = [],
        nb = [],
        mb = [],
        Qb = [],
        eb = [],
        Cb = [];
      return bb = class extends Ib {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(bb, cb, sb, kb) {
          let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            ab = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            Tb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, kb, !ab), this.isEnabled = ((0, Jb.m)(this, Hb), (0, Jb.m)(this, fb, !0)), this.autoClear = ((0, Jb.m)(this, Mb), (0, Jb.m)(this, Xb, !0)), this.onGenerated = (0, Jb.m)(this, nb), this.onGeneratedObservable = new bs.c, this.onBeforeGenerationObservable = new bs.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, Jb.m)(this, mb, void 0), this._drawWrapper = (0, Jb.m)(this, Qb), this._textures = {}, this._size = (0, Jb.m)(this, eb, void 0), this._textureType = (0, Jb.m)(this, Cb), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Wb || Wb instanceof yb.e ? (this._options = {}, this._fallbackTexture = Wb) : (this._options = Wb, this._fallbackTexture = Wb.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let Ib = (kb = this.EY() || lb.d.LastCreatedScene)._getComponent(ic.e.NAME_PROCEDURALTEXTURE);
          Ib || (Ib = new cs(kb), kb.Vsb(Ib)), this._options.skipSceneRegistration || kb.proceduralTextures.push(this), this._fullEngine = kb.Sm(), this.name = bb, this.isRenderTarget = !0, this._size = cb, this._textureType = Ub, this._generateMipMaps = ab, this._drawWrapper = new ss.b(this._fullEngine), this.setFragment(sb);
          const Nb = this._createRtWrapper(Tb, cb, ab, Ub);
          this._texture = Nb.texture;
          const Vb = [];
          Vb.push(1, 1), Vb.push(-1, 1), Vb.push(-1, -1), Vb.push(1, -1), this._vertexBuffers[zb.l.PositionKind] = new zb.l(this._fullEngine, Vb, zb.l.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(bb, cb, sb, kb) {
          return bb ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(cb, {
            generateMipMaps: sb,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: kb,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(cb, {
            generateMipMaps: sb,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: kb,
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
            cb = [];
          cb.push(0), cb.push(1), cb.push(2), cb.push(0), cb.push(2), cb.push(3), this._indexBuffer = bb.createIndexBuffer(cb)
        }
        _rebuild() {
          const bb = this._vertexBuffers[zb.l.PositionKind];
          bb && bb._rebuild(), this._createIndexBuffer(), this.refreshRate === Jc.d.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Jc.d.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(bb) {
          if (this.isReady()) return void bb(this);
          const cb = this.getEffect();
          cb && cb.executeWhenCompiled((() => {
            bb(this)
          }))
        }
        isReady() {
          const bb = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const cb = this._getDefines();
          if (this._drawWrapper.effect && cb === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const kb = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== cb && (this._cachedDefines = cb, this._drawWrapper.effect = bb.createEffect(kb, [zb.l.PositionKind], this._uniforms, this._samplers, cb, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([sb.e(381).then((() => sb(61291))), this._options.extraInitializationsAsync()]) : await Promise.all([sb.e(382).then((() => sb(61299))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await sb.e(381).then((() => sb(61291))) : await sb.e(382).then((() => sb(61299)))
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
        resize(bb, cb) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const sb = this._texture.isCube;
          this._rtWrapper.dispose();
          const kb = this._createRtWrapper(sb, bb, cb, this._textureType);
          this._texture = kb.texture, this._size = bb, this._generateMipMaps = cb
        }
        _checkUniform(bb) {
          -1 === this._uniforms.indexOf(bb) && this._uniforms.push(bb)
        }
        setTexture(bb, cb) {
          return -1 === this._samplers.indexOf(bb) && this._samplers.push(bb), this._textures[bb] = cb, this
        }
        setFloat(bb, cb) {
          return this._checkUniform(bb), this._floats[bb] = cb, this
        }
        setInt(bb, cb) {
          return this._checkUniform(bb), this._ints[bb] = cb, this
        }
        setFloats(bb, cb) {
          return this._checkUniform(bb), this._floatsArrays[bb] = cb, this
        }
        setColor3(bb, cb) {
          return this._checkUniform(bb), this._colors3[bb] = cb, this
        }
        setColor4(bb, cb) {
          return this._checkUniform(bb), this._colors4[bb] = cb, this
        }
        setVector2(bb, cb) {
          return this._checkUniform(bb), this._vectors2[bb] = cb, this
        }
        setVector3(bb, cb) {
          return this._checkUniform(bb), this._vectors3[bb] = cb, this
        }
        setVector4(bb, cb) {
          return this._checkUniform(bb), this._vectors4[bb] = cb, this
        }
        setMatrix(bb, cb) {
          return this._checkUniform(bb), this._matrices[bb] = cb, this
        }
        render(bb) {
          const cb = this.EY();
          if (!cb) return;
          const sb = this._fullEngine;
          if (sb.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), sb.setState(!1), !this.nodeMaterialSource) {
            for (const bb in this._textures) this._drawWrapper.effect.setTexture(bb, this._textures[bb]);
            for (const bb in this._ints) this._drawWrapper.effect.setInt(bb, this._ints[bb]);
            for (const bb in this._floats) this._drawWrapper.effect.setFloat(bb, this._floats[bb]);
            for (const bb in this._floatsArrays) this._drawWrapper.effect.setArray(bb, this._floatsArrays[bb]);
            for (const bb in this._colors3) this._drawWrapper.effect.setColor3(bb, this._colors3[bb]);
            for (const bb in this._colors4) {
              const cb = this._colors4[bb];
              this._drawWrapper.effect.setFloat4(bb, cb.r, cb.g, cb.b, cb.a)
            }
            for (const bb in this._vectors2) this._drawWrapper.effect.setVector2(bb, this._vectors2[bb]);
            for (const bb in this._vectors3) this._drawWrapper.effect.setVector3(bb, this._vectors3[bb]);
            for (const bb in this._vectors4) this._drawWrapper.effect.setVector4(bb, this._vectors4[bb]);
            for (const bb in this._matrices) this._drawWrapper.effect.setMatrix(bb, this._matrices[bb])
          }
          if (!this._texture || !this._rtWrapper) return;
          sb._enableGPUDebugMarkers && sb._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const kb = sb.currentViewport;
          if (this.isCube)
            for (let Wb = 0; Wb < 6; Wb++) sb.bindFramebuffer(this._rtWrapper, Wb, void 0, void 0, !0), sb.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Wb), this.autoClear && sb.clear(cb.clearColor, !0, !1, !1), sb.drawElementsType(ab.e.TriangleFillMode, 0, 6), sb.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let bb = 1;
            this._rtWrapper.is3D ? bb = this._rtWrapper.depth : this._rtWrapper.is2DArray && (bb = this._rtWrapper.layers);
            for (let kb = 0; kb < bb; kb++) {
              if (sb.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, kb), sb.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== bb ? kb / (bb - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", kb);
                for (const bb in this._textures) this._drawWrapper.effect.setTexture(bb, this._textures[bb])
              }
              this.autoClear && sb.clear(cb.clearColor, !0, !1, !1), sb.drawElementsType(ab.e.TriangleFillMode, 0, 6), sb.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          kb && sb.setViewport(kb), this.isCube && sb.generateMipMapsForCubemap(this._texture, !0), sb._enableGPUDebugMarkers && sb._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const cb = this.getSize(),
            sb = new bb(this.name, cb.width, this._fragment, this.EY(), this._fallbackTexture, this._generateMipMaps);
          return sb.hasAlpha = this.hasAlpha, sb.level = this.level, sb.coordinatesMode = this.coordinatesMode, sb
        }
        dispose() {
          const bb = this.EY();
          if (!bb) return;
          const cb = bb.proceduralTextures.indexOf(this);
          cb >= 0 && bb.proceduralTextures.splice(cb, 1);
          const sb = this._vertexBuffers[zb.l.PositionKind];
          sb && (sb.dispose(), this._vertexBuffers[zb.l.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const sb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ib[Symbol.metadata] ?? null) : void 0;
        cb = [(0, gb.E)()], kb = [(0, gb.E)()], Wb = [(0, gb.E)()], Tb = [(0, gb.E)()], Ub = [(0, gb.E)()], (0, Jb.j)(bb, null, Ub, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: bb => "refreshRate" in bb,
            get: bb => bb.refreshRate
          },
          metadata: sb
        }, null, Hb), (0, Jb.j)(null, null, cb, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, cb) => {
              bb.isEnabled = cb
            }
          },
          metadata: sb
        }, fb, Mb), (0, Jb.j)(null, null, kb, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: bb => "autoClear" in bb,
            get: bb => bb.autoClear,
            set: (bb, cb) => {
              bb.autoClear = cb
            }
          },
          metadata: sb
        }, Xb, nb), (0, Jb.j)(null, null, Wb, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: bb => "_generateMipMaps" in bb,
            get: bb => bb._generateMipMaps,
            set: (bb, cb) => {
              bb._generateMipMaps = cb
            }
          },
          metadata: sb
        }, mb, Qb), (0, Jb.j)(null, null, Tb, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: bb => "_size" in bb,
            get: bb => bb._size,
            set: (bb, cb) => {
              bb._size = cb
            }
          },
          metadata: sb
        }, eb, Cb), sb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sb
        })
      })(), bb
    })();

    function Ws(bb) {
      return "texture" in bb
    }

    function as(bb) {
      return "value" in bb
    }
    async function Ts(bb, cb, kb) {
      const Wb = [cb.red, cb.green, cb.blue, cb.alpha],
        ab = [],
        Tb = [];
      for (let sb = 0; sb < 4; sb++) {
        const bb = Wb[sb];
        if (bb)
          if (Ws(bb)) {
            if (bb.sourceChannel < 0 || bb.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let cb = ab.indexOf(bb.texture); - 1 === cb && (cb = ab.length, ab.push(bb.texture)), Tb[sb] = cb
          } else {
            if (!as(bb)) throw new Error("Invalid channel input configuration");
            if (bb.value < 0 || bb.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            Tb[sb] = -1
          }
        else Tb[sb] = -1
      }
      let Ub = cb.outputSize;
      if (!Ub && ab.length > 0) {
        let bb = 0;
        for (const cb of ab) {
          const sb = cb.getSize(),
            kb = Math.max(sb.width, sb.height);
          kb > bb && (bb = kb, Ub = sb.width === sb.height ? bb : sb)
        }
      }
      Ub = Ub || 512;
      const Ib = [],
        Hb = new Set;
      for (let sb = 0; sb < 4; sb++) {
        const bb = Wb[sb],
          cb = ["RED", "GREEN", "BLUE", "ALPHA"][sb];
        if (bb && Ws(bb)) {
          Ib.push(`${cb}_FROM_TEXTURE`);
          const bb = Tb[sb];
          Hb.add(bb)
        }
      }
      Hb.forEach((bb => {
        Ib.push(`USE_TEXTURE${bb}`)
      }));
      const fb = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: kb.Sm().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            kb.Sm().isWebGPU ? await Promise.all([sb.e(379).then((() => sb(61284)))]) : await Promise.all([sb.e(380).then((() => sb(61287)))])
          },
          skipSceneRegistration: !0
        },
        Mb = new ks(bb, Ub, "textureMerger", kb, fb);
      Mb.refreshRate = -1, Mb.defines = Ib.length > 0 ? "#define " + Ib.join("\n#define ") + "\n" : "";
      for (let sb = 0; sb < ab.length; sb++) Xb = ab[sb], (nb = Mb).uOffset = Xb.uOffset, nb.vOffset = Xb.vOffset, nb.uScale = Xb.uScale, nb.vScale = Xb.vScale, nb.uAng = Xb.uAng, nb.vAng = Xb.vAng, nb.wAng = Xb.wAng, nb.uRotationCenter = Xb.uRotationCenter, nb.vRotationCenter = Xb.vRotationCenter, Mb.setTexture(`inputTexture${sb}`, ab[sb]);
      var Xb, nb;
      for (let sb = 0; sb < 4; sb++) {
        const bb = Wb[sb],
          cb = ["red", "green", "blue", "alpha"][sb];
        if (bb && Ws(bb)) {
          const kb = Tb[sb];
          Mb.setInt(`${cb}TextureIndex`, kb), Mb.setInt(`${cb}SourceChannel`, bb.sourceChannel)
        } else {
          let kb;
          kb = bb && as(bb) ? bb.value : 3 === sb ? 1 : 0, Mb.setFloat(`${cb}ConstantValue`, kb)
        }
      }
      return await new Promise(((bb, cb) => {
        Mb.executeWhenReady((() => {
          try {
            Mb.render(), bb(Mb)
          } catch (sb) {
            cb(sb instanceof Error ? sb : new Error(String(sb)))
          }
        }))
      }))
    }

    function Us(bb, cb) {
      return {
        texture: bb,
        sourceChannel: cb
      }
    }

    function Is(bb) {
      return {
        value: bb
      }
    }

    function Hs(bb, cb, sb, kb) {
      return {
        red: bb,
        green: cb,
        blue: sb,
        alpha: kb
      }
    }
    var fs = sb(39239),
      Ms = sb(39334),
      Xs = sb(36672),
      ns = sb(39395),
      ms = sb(39328);
    class ls {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class Qs extends fs.c {
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
        return !!this._options?.enableMultiview || this.gl > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ls;
        super(null), void 0 === bb.deterministicLockstep && (bb.deterministicLockstep = !1), void 0 !== bb.timeStep && (this._timeStep = bb.timeStep), void 0 === bb.lockstepMaxSteps && (bb.lockstepMaxSteps = 4), this._options = bb, Xs.c.SetMatrixPrecision(!!bb.useHighPrecisionMatrix), this._caps = {
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
        }, bb.renderingCanvas && (this._renderingCanvas = bb.renderingCanvas), Bb.c.Log(`Babylon.js v${fs.c.Version} - Null engine`);
        const cb = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (cb.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (cb.Blob = function() {})
      }
      createVertexBuffer(bb) {
        const cb = new Ms.c;
        return cb.references = 1, cb
      }
      createIndexBuffer(bb) {
        const cb = new Ms.c;
        return cb.references = 1, cb
      }
      clear(bb, cb, sb) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(bb, cb, sb) {
        this._cachedViewport = bb
      }
      createUniformBuffer(bb) {
        const cb = new Ms.c;
        return cb.references = 1, cb.GM = bb instanceof Array ? bb.length * Float32Array.BYTES_PER_ELEMENT : bb.byteLength, cb
      }
      createDynamicUniformBuffer(bb) {
        return this.createUniformBuffer(bb)
      }
      updateUniformBuffer(bb, cb, sb, kb) {}
      bindUniformBufferBase(bb, cb, sb) {}
      bindUniformBlock(bb, cb, sb) {}
      createShaderProgram(bb, cb, sb, kb, Wb) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(bb, cb) {
        return []
      }
      getAttributes(bb, cb) {
        return []
      }
      bindSamplers(bb) {
        this._currentEffect = null
      }
      enableEffect(bb) {
        bb = null !== bb && (0, ms.c)(bb) ? bb.effect : bb, this._currentEffect = bb, bb && (bb.onBind && bb.onBind(bb), bb._onBindObservable && bb._onBindObservable.notifyObservers(bb))
      }
      setStateCullFaceType(bb, cb) {}
      setState(bb) {}
      setIntArray(bb, cb) {
        return !0
      }
      setIntArray2(bb, cb) {
        return !0
      }
      setIntArray3(bb, cb) {
        return !0
      }
      setIntArray4(bb, cb) {
        return !0
      }
      setFloatArray(bb, cb) {
        return !0
      }
      setFloatArray2(bb, cb) {
        return !0
      }
      setFloatArray3(bb, cb) {
        return !0
      }
      setFloatArray4(bb, cb) {
        return !0
      }
      setArray(bb, cb) {
        return !0
      }
      setArray2(bb, cb) {
        return !0
      }
      setArray3(bb, cb) {
        return !0
      }
      setArray4(bb, cb) {
        return !0
      }
      setMatrices(bb, cb) {
        return !0
      }
      setMatrix3x3(bb, cb) {
        return !0
      }
      setMatrix2x2(bb, cb) {
        return !0
      }
      setFloat(bb, cb) {
        return !0
      }
      setFloat2(bb, cb, sb) {
        return !0
      }
      setFloat3(bb, cb, sb, kb) {
        return !0
      }
      setBool(bb, cb) {
        return !0
      }
      setFloat4(bb, cb, sb, kb, Wb) {
        return !0
      }
      setAlphaMode(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[sb] !== bb && (this.alphaState.setAlphaBlend(0 !== bb, 0), cb || this.setDepthWrite(0 === bb), this._alphaMode[sb] = bb)
      }
      bindBuffers(bb, cb, sb) {}
      wipeCaches(bb) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, bb && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(bb, cb, sb, kb) {}
      drawElementsType(bb, cb, sb, kb) {}
      drawArraysType(bb, cb, sb, kb) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(bb) {}
      createTexture(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Tb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Ub = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const Ib = new gc.b(this, 1),
          Hb = String(bb);
        return Ib.url = Hb, Ib.generateMipMaps = !cb, Ib.samplingMode = Wb, Ib.invertY = sb, Ib.baseWidth = this._options.textureSize, Ib.baseHeight = this._options.textureSize, Ib.width = this._options.textureSize, Ib.height = this._options.textureSize, Ub && (Ib.format = Ub), Tb && (Ib._buffer = Tb), Ib.isReady = !0, ab && setTimeout((() => {
          ab(Ib)
        })), this._internalTexturesCache.push(Ib), Ib
      }
      _createHardwareRenderTargetWrapper(bb, cb, sb) {
        const kb = new ns.e(bb, cb, sb, this);
        return this._renderTargetWrapperCache.push(kb), kb
      }
      createRenderTargetTexture(bb, cb) {
        const sb = this._createHardwareRenderTargetWrapper(!1, !1, bb),
          kb = {};
        void 0 !== cb && "object" === typeof cb ? (kb.generateMipMaps = cb.generateMipMaps, kb.generateDepthBuffer = void 0 === cb.generateDepthBuffer || cb.generateDepthBuffer, kb.generateStencilBuffer = kb.generateDepthBuffer && cb.generateStencilBuffer, kb.type = void 0 === cb.type ? 0 : cb.type, kb.samplingMode = void 0 === cb.samplingMode ? 3 : cb.samplingMode) : (kb.generateMipMaps = cb, kb.generateDepthBuffer = !0, kb.generateStencilBuffer = !1, kb.type = 0, kb.samplingMode = 3);
        const Wb = new gc.b(this, 5);
        sb.setTexture(Wb);
        const ab = bb.width || bb,
          Tb = bb.height || bb;
        return sb._generateDepthBuffer = kb.generateDepthBuffer, sb._generateStencilBuffer = !!kb.generateStencilBuffer, Wb.baseWidth = ab, Wb.baseHeight = Tb, Wb.width = ab, Wb.height = Tb, Wb.isReady = !0, Wb.samples = 1, Wb.generateMipMaps = !!kb.generateMipMaps, Wb.samplingMode = kb.samplingMode, Wb.type = kb.type, this._internalTexturesCache.push(Wb), sb
      }
      createMultiviewRenderTargetTexture(bb, cb) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const sb = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: bb,
            height: cb
          }),
          kb = new gc.b(this, 5, !0);
        return kb.baseWidth = bb, kb.baseHeight = cb, kb.width = bb, kb.height = cb, kb.isMultiview = !0, kb.isReady = !0, kb.format = 5, kb.samples = 1, sb.setTextures(kb), sb
      }
      bindMultiviewFramebuffer(bb) {
        this.bindFramebuffer(bb, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(bb, cb) {
        const sb = this._createHardwareRenderTargetWrapper(!1, !0, bb),
          kb = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...cb
          };
        kb.generateStencilBuffer = kb.generateDepthBuffer && kb.generateStencilBuffer, (1 !== kb.type || this._caps.textureFloatLinearFiltering) && (2 !== kb.type || this._caps.textureHalfFloatLinearFiltering) || (kb.samplingMode = 1), sb._generateDepthBuffer = kb.generateDepthBuffer, sb._generateStencilBuffer = !!kb.generateStencilBuffer;
        const Wb = new gc.b(this, 5);
        return Wb.baseWidth = bb, Wb.baseHeight = bb, Wb.width = bb, Wb.height = bb, Wb.isReady = !0, Wb.isCube = !0, Wb.samples = 1, Wb.generateMipMaps = !!kb.generateMipMaps, Wb.samplingMode = kb.samplingMode, Wb.type = kb.type, this._internalTexturesCache.push(Wb), sb
      }
      updateTextureSamplingMode(bb, cb) {
        cb.samplingMode = bb
      }
      createRawTexture(bb, cb, sb, kb, Wb, ab, Tb) {
        let Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Ib = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Hb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const fb = new gc.b(this, 3);
        return fb.baseWidth = cb, fb.baseHeight = sb, fb.width = cb, fb.height = sb, fb.format = kb, fb.generateMipMaps = Wb, fb.samplingMode = Tb, fb.invertY = ab, fb._compression = Ub, fb.type = Ib, fb._useSRGBBuffer = Hb, this._doNotHandleContextLost || (fb._bufferView = bb), fb
      }
      updateRawTexture(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Tb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        bb && (bb._bufferView = cb, bb.format = sb, bb.invertY = kb, bb._compression = Wb, bb.type = ab, bb._useSRGBBuffer = Tb)
      }
      bindFramebuffer(bb, cb, sb, kb, Wb) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = bb, this._currentFramebuffer = null, this._cachedViewport && !Wb && this.setViewport(this._cachedViewport, sb, kb)
      }
      unBindFramebuffer(bb) {
        let cb = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, cb && cb(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(bb) {
        const cb = new Ms.c;
        return cb.references = 1, cb.GM = 1, cb
      }
      updateDynamicTexture(bb, cb, sb) {}
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
      updateDynamicIndexBuffer(bb, cb) {}
      updateDynamicVertexBuffer(bb, cb, sb, kb) {}
      _bindTextureDirectly(bb, cb) {
        return this._boundTexturesCache[this._activeChannel] !== cb && (this._boundTexturesCache[this._activeChannel] = cb, !0)
      }
      _bindTexture(bb, cb) {
        bb < 0 || this._bindTextureDirectly(0, cb)
      }
      _deleteBuffer(bb) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(bb) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(bb, cb, sb, kb, Wb) {}
      _uploadDataToTextureDirectly(bb, cb) {}
      _uploadArrayBufferViewToTexture(bb, cb) {}
      _uploadImageToTexture(bb, cb) {}
    }
    sb(39459), sb(39505), sb(39456);
    async function es(bb) {
      const cb = bb.getInternalTexture();
      if (!cb || 1 !== cb.source) return null;
      if (cb.invertY) {
        const cb = bb.EY()?.Sm();
        if (!(cb instanceof Qs)) return null
      }
      const sb = cb._buffer;
      let kb, ab = bb.mimeType;
      try {
        sb ? ArrayBuffer.isView(sb) ? kb = sb.buffer.slice(sb.byteOffset, sb.byteOffset + sb.byteLength) : sb instanceof ArrayBuffer ? kb = sb : sb instanceof Blob ? (kb = await sb.arrayBuffer(), ab = sb.type || ab) : "string" === typeof sb ? (kb = await Wb.Tools.LoadFileAsync(sb), ab = (0, Ib.c)(sb) || ab) : "undefined" !== typeof HTMLImageElement && sb instanceof HTMLImageElement && (kb = await Wb.Tools.LoadFileAsync(sb.src), ab = (0, Ib.c)(sb.src) || ab) : (kb = await Wb.Tools.LoadFileAsync(cb.url), ab = (0, Ib.c)(cb.url) || ab)
      } catch {
        return null
      }
      if (kb && !ab && cb.url) {
        const bb = cb.url.match(/^data:([^;,]+)/);
        ab = bb ? bb[1] : (0, Ib.c)(cb.url)
      }
      return kb && ab ? {
        data: kb,
        mimeType: ab
      } : null
    }
    const Cs = 1e-6,
      Ns = new Qb.Color3(.04, .04, .04),
      Vs = 1024,
      Ls = Qb.Color3.White(),
      us = Qb.Color3.BlackReadOnly;

    function Ys(bb) {
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

    function hs(bb, cb, sb) {
      if (cb < Ns.r) return 0;
      const kb = Ns.r,
        Wb = bb * sb / (1 - Ns.r) + cb - 2 * Ns.r,
        ab = Wb * Wb - 4 * kb * (Ns.r - cb);
      return Nb.Clamp((-Wb + Math.sqrt(ab)) / (2 * kb), 0, 1)
    }

    function gs(bb) {
      const cb = bb.diffuseColor.toLinearSpace(bb.EY().Sm().useExactSrgbConversions).scale(.5),
        sb = bb.alpha,
        kb = function(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Zb.n(0, 1),
            sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Zb.n(0, .1),
            kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zb.n(0, .1),
            Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Zb.n(1300, .1);
          return function(bb, cb, sb, kb, Wb) {
            return (1 - bb) * (1 - bb) * (1 - bb) * cb + 3 * (1 - bb) * (1 - bb) * bb * sb + 3 * (1 - bb) * bb * bb * kb + bb * bb * bb * Wb
          }(Math.pow(bb / Wb.x, .333333), cb.y, sb.y, kb.y, Wb.y)
        }(Nb.Clamp(bb.specularPower, 0, Vs));
      return {
        baseColorFactor: [cb.r, cb.g, cb.b, sb],
        metallicFactor: 0,
        roughnessFactor: kb
      }
    }

    function Bs(bb, cb) {
      cb.needAlphaBlending() ? bb.alphaMode = "BLEND" : cb.needAlphaTesting() && (bb.alphaMode = "MASK", bb.alphaCutoff = cb.alphaCutOff)
    }

    function ts(bb, cb, sb) {
      const kb = new Uint8Array(bb * cb * 4);
      for (let Wb = 0; Wb < kb.length; Wb += 4) kb[Wb] = kb[Wb + 1] = kb[Wb + 2] = kb[Wb + 3] = 255;
      return ub.e.CreateRGBATexture(kb, bb, cb, sb)
    }

    function ys(bb) {
      if (bb instanceof Uint8Array) {
        const cb = bb.length,
          sb = new Float32Array(bb.length);
        for (let kb = 0; kb < cb; ++kb) sb[kb] = bb[kb] / 255;
        return sb
      }
      if (bb instanceof Float32Array) return bb;
      throw new Error("Unsupported pixel format!")
    }
    class Ps {
      constructor(bb) {
        this._exporter = bb, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(bb) {
        return bb ? this._textureMap.get(bb.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(bb, cb) {
        const sb = gs(bb),
          kb = {
            name: bb.name
          };
        if (null == bb.backFaceCulling || bb.backFaceCulling || (bb.twoSidedLighting || Wb.Tools.Warn(bb.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), kb.doubleSided = !0), cb) {
          const cb = [],
            Wb = bb.diffuseTexture;
          Wb && cb.push(this.exportTextureAsync(Wb).then((bb => {
            bb && (sb.baseColorTexture = bb)
          })));
          const ab = bb.bumpTexture;
          ab && cb.push(this.exportTextureAsync(ab).then((bb => {
            bb && (kb.normalTexture = bb, 1 !== ab.level && (kb.normalTexture.scale = ab.level))
          })));
          const Tb = bb.emissiveTexture;
          Tb && (kb.emissiveFactor = [1, 1, 1], cb.push(this.exportTextureAsync(Tb).then((bb => {
            bb && (kb.emissiveTexture = bb)
          }))));
          const Ub = bb.ambientTexture;
          Ub && cb.push(this.exportTextureAsync(Ub).then((bb => {
            if (bb) {
              const cb = {
                index: bb.index
              };
              kb.occlusionTexture = cb
            }
          }))), cb.length > 0 && (this._exporter._materialNeedsUVsSet.add(bb), await Promise.all(cb))
        }(bb.alpha < 1 || bb.opacityTexture) && (bb.alphaMode === Yb.e.ALPHA_COMBINE ? kb.alphaMode = "BLEND" : Wb.Tools.Warn(bb.name + ": glTF 2.0 does not support alpha mode: " + bb.alphaMode.toString())), bb.emissiveColor && !bb.emissiveColor.equalsWithEpsilon(us, Cs) && (kb.emissiveFactor = bb.emissiveColor.Osb()), kb.pbrMetallicRoughness = sb, Bs(kb, bb), await this._finishMaterialAsync(kb, bb);
        const ab = this._exporter._materials;
        return ab.push(kb), ab.length - 1
      }
      async _finishMaterialAsync(bb, cb) {
        const sb = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", bb, cb),
          kb = [];
        for (const Wb of sb) kb.push(this.exportTextureAsync(Wb));
        await Promise.all(kb), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", bb, cb)
      }
      _resizeTexturesToSameDimensions(bb, cb, sb) {
        const kb = bb ? bb.getSize() : {
            width: 0,
            height: 0
          },
          Wb = cb ? cb.getSize() : {
            width: 0,
            height: 0
          };
        let ab, Tb;
        return kb.width < Wb.width ? (ab = bb && bb instanceof Lb.e ? Vb.g.CreateResizedCopy(bb, Wb.width, Wb.height, !0) : ts(Wb.width, Wb.height, sb), Tb = cb) : kb.width > Wb.width ? (Tb = cb && cb instanceof Lb.e ? Vb.g.CreateResizedCopy(cb, kb.width, kb.height, !0) : ts(kb.width, kb.height, sb), ab = bb) : (ab = bb, Tb = cb), {
          texture1: ab,
          texture2: Tb
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(bb, cb, sb) {
        const kb = new Array;
        if (!bb && !cb) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Wb = bb ? bb.EY() : cb ? cb.EY() : null;
        if (Wb) {
          const ab = this._resizeTexturesToSameDimensions(bb, cb, Wb),
            Tb = ab.texture1?.getSize();
          let Ub, Ib;
          const Hb = Tb.width,
            fb = Tb.height,
            Mb = await ab.texture1.readPixels(),
            Xb = await ab.texture2.readPixels();
          if (!Mb) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (Ub = ys(Mb), !Xb) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          Ib = ys(Xb);
          const nb = Ib.byteLength,
            mb = new Uint8Array(nb),
            lb = new Uint8Array(nb),
            eb = 4,
            Cb = new Qb.Color3(0, 0, 0);
          let Nb = 0,
            Vb = 0;
          for (let bb = 0; bb < fb; ++bb)
            for (let cb = 0; cb < Hb; ++cb) {
              const kb = (Hb * bb + cb) * eb,
                Tb = {
                  diffuseColor: new Qb.Color3(Ub[kb], Ub[kb + 1], Ub[kb + 2]).toLinearSpace(Wb.Sm().useExactSrgbConversions).multiply(sb.diffuseColor),
                  specularColor: new Qb.Color3(Ib[kb], Ib[kb + 1], Ib[kb + 2]).toLinearSpace(Wb.Sm().useExactSrgbConversions).multiply(sb.specularColor),
                  glossiness: Ib[kb + 3] * sb.glossiness
                },
                fb = this._convertSpecularGlossinessToMetallicRoughness(Tb);
              Cb.r = Math.max(Cb.r, fb.baseColor.r), Cb.g = Math.max(Cb.g, fb.baseColor.g), Cb.b = Math.max(Cb.b, fb.baseColor.b), Nb = Math.max(Nb, fb.metallic), Vb = Math.max(Vb, fb.roughness), lb[kb] = 255 * fb.baseColor.r, lb[kb + 1] = 255 * fb.baseColor.g, lb[kb + 2] = 255 * fb.baseColor.b, lb[kb + 3] = ab.texture1.hasAlpha ? 255 * Ub[kb + 3] : 255, mb[kb] = 0, mb[kb + 1] = 255 * fb.roughness, mb[kb + 2] = 255 * fb.metallic, mb[kb + 3] = 255
            }
          const Lb = {
            baseColor: Cb,
            metallic: Nb,
            roughness: Vb
          };
          let ub = !1,
            Yb = !1;
          for (let bb = 0; bb < fb; ++bb)
            for (let cb = 0; cb < Hb; ++cb) {
              const sb = (Hb * bb + cb) * eb;
              lb[sb] /= Lb.baseColor.r > Cs ? Lb.baseColor.r : 1, lb[sb + 1] /= Lb.baseColor.g > Cs ? Lb.baseColor.g : 1, lb[sb + 2] /= Lb.baseColor.b > Cs ? Lb.baseColor.b : 1;
              const kb = Qb.Color3.FromInts(lb[sb], lb[sb + 1], lb[sb + 2]).toGammaSpace(Wb.Sm().useExactSrgbConversions);
              lb[sb] = 255 * kb.r, lb[sb + 1] = 255 * kb.g, lb[sb + 2] = 255 * kb.b, kb.equalsWithEpsilon(Ls, Cs) || (Yb = !0), mb[sb + 1] /= Lb.roughness > Cs ? Lb.roughness : 1, mb[sb + 2] /= Lb.metallic > Cs ? Lb.metallic : 1;
              Qb.Color3.FromInts(255, mb[sb + 1], mb[sb + 2]).equalsWithEpsilon(Ls, Cs) || (ub = !0)
            }
          return ub && kb.push((0, hb.EncodeImageAsync)(mb, Hb, fb).then((bb => {
            Lb.metallicRoughnessTextureData = bb
          }))), Yb && kb.push((0, hb.EncodeImageAsync)(lb, Hb, fb).then((bb => {
            Lb.baseColorTextureData = bb
          }))), await Promise.all(kb).then((() => Lb))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(bb) {
        const cb = this._getPerceivedBrightness(bb.diffuseColor),
          sb = this._getPerceivedBrightness(bb.specularColor),
          kb = 1 - this._getMaxComponent(bb.specularColor),
          Wb = hs(cb, sb, kb),
          ab = bb.diffuseColor.scale(kb / (1 - Ns.r) / Math.max(1 - Wb, Cs)),
          Tb = bb.specularColor.subtract(Ns.scale(1 - Wb)).scale(1 / Math.max(Wb, Cs));
        let Ub = Qb.Color3.Lerp(ab, Tb, Wb * Wb);
        Ub = Ub.clampToRef(0, 1, Ub);
        return {
          baseColor: Ub,
          metallic: Wb,
          roughness: 1 - bb.glossiness
        }
      }
      _getPerceivedBrightness(bb) {
        return Math.sqrt(.299 * bb.r * bb.r + .587 * bb.g * bb.g + .114 * bb.b * bb.b)
      }
      _getMaxComponent(bb) {
        return Math.max(bb.r, Math.max(bb.g, bb.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        const Hb = [],
          fb = {
            baseColor: bb,
            metallic: cb,
            roughness: sb
          };
        if (Ib)
          if (Tb instanceof jc) {
            if (Tb.geometryOpacityTexture) {
              const bb = kb && kb.getInternalTexture() ? kb.getInternalTexture().uniqueId : 0,
                cb = Tb.geometryOpacityTexture && Tb.geometryOpacityTexture.getInternalTexture() ? Tb.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                sb = Number(`${bb}${cb}`),
                Wb = this._textureMap.get(sb);
              Wb ? Ub.baseColorTexture = Wb : Hb.push(Ts("baseColorOpacityTexture", Hs(kb ? Us(kb, 0) : Is(1), kb ? Us(kb, 1) : Is(1), kb ? Us(kb, 2) : Is(1), Us(Tb.geometryOpacityTexture, 0)), Tb.EY()).then((async bb => {
                const cb = await this.exportTextureAsync(bb, sb);
                cb && (Ub.baseColorTexture = cb)
              })))
            } else kb && Hb.push(this.exportTextureAsync(kb).then((bb => {
              bb && (Ub.baseColorTexture = bb)
            })));
            if (Tb._useMetallicFromMetallicTextureBlue && Wb) Hb.push(this.exportTextureAsync(Wb).then((bb => {
              bb && (Ub.metallicRoughnessTexture = bb)
            })));
            else if (ab || Wb) {
              const bb = Wb && Wb.getInternalTexture() ? Wb.getInternalTexture().uniqueId : 0,
                cb = ab && ab.getInternalTexture() ? ab.getInternalTexture().uniqueId : 0,
                sb = Number(`${bb}${cb}`),
                kb = this._textureMap.get(sb);
              kb ? Ub.metallicRoughnessTexture = kb : Hb.push(Ts("MetalRoughTexture", Hs(Tb.ambientOcclusionTexture ? Us(Tb.ambientOcclusionTexture, 0) : Is(1), ab ? Us(ab, 0) : Is(1), Wb ? Us(Wb, 0) : Is(1)), Tb.EY()).then((async bb => {
                const cb = await this.exportTextureAsync(bb, sb);
                cb && (Ub.metallicRoughnessTexture = cb)
              })))
            }
          } else kb && Hb.push(this.exportTextureAsync(kb).then((bb => {
            bb && (Ub.baseColorTexture = bb)
          }))), Wb && Hb.push(this.exportTextureAsync(Wb).then((bb => {
            bb && (Ub.metallicRoughnessTexture = bb)
          })));
        return Hb.length > 0 && (this._exporter._materialNeedsUVsSet.add(Tb), await Promise.all(Hb)), fb
      }
      _getTextureSampler(bb) {
        const cb = {};
        if (!bb || !(bb instanceof Lb.e)) return cb;
        const sb = this._getGLTFTextureWrapMode(bb.wrapU);
        10497 !== sb && (cb.wrapS = sb);
        const kb = this._getGLTFTextureWrapMode(bb.wrapV);
        switch (10497 !== kb && (cb.wrapT = kb), bb.samplingMode) {
          case Lb.e.LINEAR_LINEAR:
            cb.magFilter = 9729, cb.minFilter = 9729;
            break;
          case Lb.e.LINEAR_NEAREST:
            cb.magFilter = 9729, cb.minFilter = 9728;
            break;
          case Lb.e.NEAREST_LINEAR:
            cb.magFilter = 9728, cb.minFilter = 9729;
            break;
          case Lb.e.NEAREST_LINEAR_MIPLINEAR:
            cb.magFilter = 9728, cb.minFilter = 9987;
            break;
          case Lb.e.NEAREST_NEAREST:
            cb.magFilter = 9728, cb.minFilter = 9728;
            break;
          case Lb.e.NEAREST_LINEAR_MIPNEAREST:
            cb.magFilter = 9728, cb.minFilter = 9985;
            break;
          case Lb.e.LINEAR_NEAREST_MIPNEAREST:
            cb.magFilter = 9729, cb.minFilter = 9984;
            break;
          case Lb.e.LINEAR_NEAREST_MIPLINEAR:
            cb.magFilter = 9729, cb.minFilter = 9986;
            break;
          case Lb.e.NEAREST_NEAREST_MIPLINEAR:
            cb.magFilter = 9728, cb.minFilter = 9986;
            break;
          case Lb.e.LINEAR_LINEAR_MIPLINEAR:
            cb.magFilter = 9729, cb.minFilter = 9987;
            break;
          case Lb.e.LINEAR_LINEAR_MIPNEAREST:
            cb.magFilter = 9729, cb.minFilter = 9985;
            break;
          case Lb.e.NEAREST_NEAREST_MIPNEAREST:
            cb.magFilter = 9728, cb.minFilter = 9984
        }
        return cb
      }
      _getGLTFTextureWrapMode(bb) {
        switch (bb) {
          case Lb.e.WRAP_ADDRESSMODE:
            return 10497;
          case Lb.e.CLAMP_ADDRESSMODE:
            return 33071;
          case Lb.e.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Wb.Tools.Error(`Unsupported Texture Wrap Mode ${bb}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(bb, cb, sb) {
        const kb = {
            diffuseColor: bb._albedoColor,
            specularColor: bb._reflectivityColor,
            glossiness: bb._microSurface
          },
          Wb = bb._albedoTexture,
          ab = bb._reflectivityTexture,
          Tb = bb._useMicroSurfaceFromReflectivityMapAlpha;
        if (ab && !Tb) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Wb || ab) && sb) {
          this._exporter._materialNeedsUVsSet.add(bb);
          const sb = this._exportTextureSampler(Wb || ab),
            Tb = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Wb, ab, kb),
            Ub = this._exporter._textures;
          if (Tb.baseColorTextureData) {
            const bb = await this._exportImageAsync(`baseColor${Ub.length}`, Tb.baseColorTextureData);
            cb.baseColorTexture = this._exportTextureInfo(bb, sb, Wb?.coordinatesIndex)
          }
          if (Tb.metallicRoughnessTextureData) {
            const bb = await this._exportImageAsync(`metallicRoughness${Ub.length}`, Tb.metallicRoughnessTextureData);
            cb.metallicRoughnessTexture = this._exportTextureInfo(bb, sb, ab?.coordinatesIndex)
          }
          return Tb
        }
        return this._convertSpecularGlossinessToMetallicRoughness(kb)
      }
      async exportPBRMaterialAsync(bb, cb) {
        const sb = {},
          kb = {
            name: bb.name
          },
          Wb = bb.isMetallicWorkflow();
        if (Wb) {
          const cb = bb._albedoColor,
            kb = bb.alpha;
          cb && (sb.baseColorFactor = [cb.r, cb.g, cb.b, kb])
        }
        const ab = Wb ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(bb._albedoColor, bb._metallic, bb._roughness, bb._albedoTexture, bb._metallicTexture, bb._metallicTexture, bb, sb, cb) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(bb, sb, cb);
        await this._setMetallicRoughnessPbrMaterialAsync(ab, bb, kb, sb, cb), await this._finishMaterialAsync(kb, bb);
        const Tb = this._exporter._materials;
        return Tb.push(kb), Tb.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(bb, cb, sb, kb, ab) {
        if (Bs(sb, cb), bb.baseColor.equalsWithEpsilon(Ls, Cs) && Nb.WithinEpsilon(cb.alpha, 1, Cs) || (kb.baseColorFactor = [bb.baseColor.r, bb.baseColor.g, bb.baseColor.b, cb.alpha]), null != bb.metallic && 1 !== bb.metallic && (kb.metallicFactor = bb.metallic), null != bb.roughness && 1 !== bb.roughness && (kb.roughnessFactor = bb.roughness), null == cb.backFaceCulling || cb.backFaceCulling || (cb._twoSidedLighting || Wb.Tools.Warn(cb.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), sb.doubleSided = !0), ab) {
          const bb = [],
            Wb = cb instanceof uc ? cb._bumpTexture : cb.geometryNormalTexture;
          Wb && bb.push(this.exportTextureAsync(Wb).then((bb => {
            bb && (sb.normalTexture = bb, 1 !== Wb.level && (sb.normalTexture.scale = Wb.level))
          })));
          const ab = cb instanceof uc ? cb._ambientTexture : cb.ambientOcclusionTexture;
          ab && bb.push(new Promise((async bb => {
            if (cb instanceof jc && kb.metallicRoughnessTexture) {
              const cb = this._exportTextureSampler(ab),
                sb = this._exporter._textures[kb.metallicRoughnessTexture.index].source,
                Wb = this._exportTextureInfo(sb, cb, ab.coordinatesIndex);
              return this._textureMap.set(ab.uniqueId, Wb), this._exporter._extensionsPostExportTextures("exporter", Wb, ab), bb(Wb)
            }
            return bb(await this.exportTextureAsync(ab))
          })).then((async bb => {
            if (bb) {
              const kb = {
                index: bb.index,
                texCoord: bb.texCoord,
                extensions: bb.extensions
              };
              sb.occlusionTexture = kb, kb.strength = cb instanceof uc ? cb._ambientTextureStrength : cb.ambientOcclusionTexture.level
            }
          })));
          const Tb = cb instanceof uc ? cb._emissiveTexture : cb.emissionColorTexture;
          Tb && bb.push(this.exportTextureAsync(Tb).then((bb => {
            bb && (sb.emissiveTexture = bb)
          }))), bb.length > 0 && (this._exporter._materialNeedsUVsSet.add(cb), await Promise.all(bb))
        }
        const Tb = cb instanceof uc ? cb._emissiveColor : cb.emissionColor;
        Tb.equalsWithEpsilon(us, Cs) || (sb.emissiveFactor = Tb.Osb()), sb.pbrMetallicRoughness = kb
      }
      async exportOpenPBRMaterialAsync(bb, cb) {
        const sb = {},
          kb = {
            name: bb.name
          },
          Wb = bb.baseColor,
          ab = bb.geometryOpacity;
        Wb && (sb.baseColorFactor = [Wb.r, Wb.g, Wb.b, ab]);
        const Tb = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(bb.baseColor, bb.baseMetalness, bb.specularRoughness, bb.baseColorTexture, bb.baseMetalnessTexture, bb.specularRoughnessTexture, bb, sb, cb);
        await this._setMetallicRoughnessPbrMaterialAsync(Tb, bb, kb, sb, cb), await this._finishMaterialAsync(kb, bb);
        const Ub = this._exporter._materials;
        return Ub.push(kb), Ub.length - 1
      }
      async exportTextureAsync(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = this._textureMap.get(cb ?? bb.uniqueId);
        if (sb) return sb;
        const kb = this._exportTextureSampler(bb),
          Wb = await this._exportTextureImageAsync(bb);
        return sb = this._exportTextureInfo(Wb, kb, bb.coordinatesIndex), this._textureMap.set(cb ?? bb.uniqueId, sb), this._exporter._extensionsPostExportTextures("exporter", sb, bb), sb
      }
      async _exportTextureImageAsync(bb) {
        const cb = bb.mimeType ?? "none",
          sb = this._internalTextureToImage,
          kb = bb.getInternalTexture().uniqueId;
        sb[kb] = sb[kb] || {};
        let ab = sb[kb][cb];
        return void 0 === ab && (ab = (async () => {
          const sb = await es(bb);
          if (sb && Ys(sb.mimeType) && ("none" === cb || sb.mimeType === cb)) return await this._exportImageAsync(bb.name, new Blob([sb.data], {
            type: sb.mimeType
          }));
          let kb = "image/png";
          "none" !== cb && (Ys(cb) ? kb = cb : (kb = "image/png", Wb.Tools.Warn(`Unsupported media type: ${cb}. Exporting texture as PNG.`)));
          const ab = bb.getSize(),
            Tb = await (0, Vb.e)(bb),
            Ub = await (0, hb.EncodeImageAsync)(Tb, ab.width, ab.height, kb);
          return await this._exportImageAsync(bb.name, Ub)
        })(), sb[kb][cb] = ab), await ab
      }
      async _exportImageAsync(bb, cb) {
        const sb = this._exporter._images;
        let kb;
        if (this._exporter._shouldUseGlb) {
          kb = {
            name: bb,
            mimeType: cb.type,
            bufferView: void 0
          };
          const sb = await cb.arrayBuffer(),
            Wb = this._exporter._bufferManager.createBufferView(new Uint8Array(sb));
          this._exporter._bufferManager.setBufferView(kb, Wb)
        } else {
          const ab = bb.replace(/\.\/|\/|\.\\|\\/g, "_"),
            Tb = function(bb) {
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
            }(cb.type);
          let Ub = ab + Tb;
          sb.some((bb => bb.uri === Ub)) && (Ub = `${ab}_${Wb.Tools.RandomId()}${Tb}`), kb = {
            name: bb,
            uri: Ub
          }, this._exporter._imageData[Ub] = cb
        }
        return sb.push(kb), sb.length - 1
      }
      _exportTextureInfo(bb, cb, sb) {
        const kb = this._exporter._textures;
        let Wb = kb.findIndex((sb => sb.sampler == cb && sb.source === bb)); - 1 === Wb && (Wb = kb.length, kb.push({
          source: bb,
          sampler: cb
        }));
        const ab = {
          index: Wb
        };
        return sb && (ab.texCoord = sb), ab
      }
      _exportTextureSampler(bb) {
        const cb = this._getTextureSampler(bb),
          sb = this._exporter._samplers,
          kb = sb.findIndex((bb => bb.minFilter === cb.minFilter && bb.magFilter === cb.magFilter && bb.wrapS === cb.wrapS && bb.wrapT === cb.wrapT));
        return -1 !== kb ? kb : (sb.push(cb), sb.length - 1)
      }
    }
    var Ds = sb(39495),
      Es = sb(39653);
    (0, Es.e)();
    var is = sb(36661);
    const Os = kb.Matrix.Compose(new kb.Fm(-1, 1, 1), kb.Quaternion.Identity(), kb.Fm.Zero());

    function Gs(bb, cb) {
      if (!(bb instanceof Mb.c)) return !1;
      if (cb) {
        if (!bb.getWorldMatrix().equalsWithEpsilon(kb.Matrix.IdentityReadOnly, is.d)) return !1
      } else {
        if (!bb.getWorldMatrix().multiplyToRef(Os, kb.TmpVectors.Matrix[0]).equalsWithEpsilon(kb.Matrix.IdentityReadOnly, is.d)) return !1
      }
      return !(bb instanceof Xb.d && bb.geometry)
    }
    const Ks = kb.Fm.ZeroReadOnly,
      Zs = kb.Quaternion.Identity(),
      zs = kb.Fm.OneReadOnly,
      qs = new kb.Fm(-1, 1, 1);

    function ds(bb, cb) {
      const {
        byteOffset: sb,
        byteStride: kb,
        type: Wb,
        normalized: ab
      } = bb, Tb = bb.getSize(), Ub = cb.reduce(((bb, cb) => cb.getTotalVertices() > bb ? cb.getTotalVertices() : bb), -Number.MAX_VALUE);
      return {
        byteOffset: sb,
        byteStride: kb,
        componentCount: Tb,
        type: Wb,
        count: Ub * Tb,
        normalized: ab,
        totalVertices: Ub,
        kind: bb.getKind()
      }
    }

    function As(bb) {
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

    function ws(bb) {
      switch (bb) {
        case fb.f.PositionKind:
        case fb.f.NormalKind:
        case fb.f.TangentKind:
        case fb.f.ColorKind:
        case fb.f.MatricesIndicesKind:
        case fb.f.MatricesIndicesExtraKind:
        case fb.f.MatricesWeightsKind:
        case fb.f.MatricesWeightsExtraKind:
        case fb.f.UVKind:
        case fb.f.UV2Kind:
        case fb.f.UV3Kind:
        case fb.f.UV4Kind:
        case fb.f.UV5Kind:
        case fb.f.UV6Kind:
          return !0
      }
      return !1
    }

    function rs(bb) {
      const cb = Math.sqrt(bb.x * bb.x + bb.y * bb.y + bb.z * bb.z);
      cb > 0 && (bb.x /= cb, bb.y /= cb, bb.z /= cb)
    }

    function os(bb) {
      return bb.x *= -1, bb
    }

    function Ss(bb) {
      if (bb.x * bb.x + bb.y * bb.y > .5) {
        const cb = Math.abs(bb.x),
          sb = Math.abs(bb.y);
        if (cb > sb) {
          const sb = Math.sign(bb.x);
          bb.x = cb, bb.y *= -sb, bb.z *= -sb, bb.w *= sb
        } else {
          const cb = Math.sign(bb.y);
          bb.x *= -cb, bb.y = sb, bb.z *= cb, bb.w *= -cb
        }
      } else {
        const cb = Math.abs(bb.z),
          sb = Math.abs(bb.w);
        if (cb > sb) {
          const sb = Math.sign(bb.z);
          bb.x *= -sb, bb.y *= sb, bb.z = cb, bb.w *= -sb
        } else {
          const cb = Math.sign(bb.w);
          bb.x *= cb, bb.y *= -cb, bb.z *= -cb, bb.w = sb
        }
      }
      return bb
    }

    function Rs(bb) {
      bb.I5(-bb.z, bb.w, bb.x, -bb.y)
    }

    function vs(bb, cb) {
      const sb = kb.Fm.FromArrayToRef(cb.translation || [0, 0, 0], 0, kb.TmpVectors.Fm[0]),
        Wb = kb.Quaternion.FromArrayToRef(cb.rotation || [0, 0, 0, 1], 0, kb.TmpVectors.Quaternion[0]),
        ab = kb.Matrix.ComposeToRef(zs, Wb, sb, kb.TmpVectors.Matrix[0]),
        Tb = kb.Fm.FromArrayToRef(bb.translation || [0, 0, 0], 0, kb.TmpVectors.Fm[2]),
        Ub = kb.Quaternion.FromArrayToRef(bb.rotation || [0, 0, 0, 1], 0, kb.TmpVectors.Quaternion[1]),
        Ib = kb.Matrix.ComposeToRef(zs, Ub, Tb, kb.TmpVectors.Matrix[1]);
      ab.multiplyToRef(Ib, Ib), Ib.decompose(void 0, Wb, sb), sb.equalsWithEpsilon(Ks, is.d) ? delete cb.translation : cb.translation = sb.Osb(), Wb.equalsWithEpsilon(Zs, is.d) ? delete cb.rotation : cb.rotation = Wb.Osb(), cb.scale && delete cb.scale
    }

    function Fs(bb, cb) {
      if (!(cb instanceof Mb.c)) return !1;
      if (!(1 === cb.getChildren().length && 0 === bb.getChildren().length && bb.parent === cb)) return !1;
      const sb = bb.EY(),
        kb = bb instanceof Es.f && !sb.useRightHandedSystem ? qs : zs;
      return !!cb.bl.equalsWithEpsilon(kb, is.d) || (Bb.c.Warn(`Cannot collapse node ${bb.name} into parent node ${cb.name} with modified scaling.`), !1)
    }

    function xs(bb) {
      if (bb instanceof Array) {
        const cb = new Float32Array(bb);
        return new Uint8Array(cb.buffer, cb.byteOffset, cb.byteLength)
      }
      return ArrayBuffer.isView(bb) ? new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength) : new Uint8Array(bb)
    }

    function ps(bb, cb) {
      for (const [sb, kb] of Object.entries(bb)) {
        const Wb = cb[sb];
        (Array.isArray(kb) && Array.isArray(Wb) && bk(kb, Wb) || kb === Wb) && delete bb[sb]
      }
      return bb
    }

    function bk(bb, cb) {
      return bb.length === cb.length && bb.every(((bb, sb) => bb === cb[sb]))
    }
    const ck = new Map([
      [Int8Array, (bb, cb, sb) => bb.setInt8(cb, sb)],
      [Uint8Array, (bb, cb, sb) => bb.setUint8(cb, sb)],
      [Uint8ClampedArray, (bb, cb, sb) => bb.setUint8(cb, sb)],
      [Int16Array, (bb, cb, sb) => bb.setInt16(cb, sb, !0)],
      [Uint16Array, (bb, cb, sb) => bb.setUint16(cb, sb, !0)],
      [Int32Array, (bb, cb, sb) => bb.setInt32(cb, sb, !0)],
      [Uint32Array, (bb, cb, sb) => bb.setUint32(cb, sb, !0)],
      [Float32Array, (bb, cb, sb) => bb.setFloat32(cb, sb, !0)],
      [Float64Array, (bb, cb, sb) => bb.setFloat64(cb, sb, !0)]
    ]);
    class sk {
      writeTypedArray(bb) {
        this._checkGrowBuffer(bb.byteLength);
        const cb = ck.get(bb.constructor);
        for (let sb = 0; sb < bb.length; sb++) cb(this._dataView, this._byteOffset, bb[sb]), this._byteOffset += bb.BYTES_PER_ELEMENT
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
        const cb = this.byteOffset + bb;
        if (cb > this._data.byteLength) {
          const bb = new Uint8Array(2 * cb);
          bb.set(this._data), this._data = bb, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function kk(bb) {
      return bb % 4 === 0 ? 4 : bb % 2 === 0 ? 2 : 1
    }
    class Wk {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(bb) {
        let cb = 0;
        this._bufferViewToData.forEach((bb => {
          cb += bb.byteLength
        }));
        const sb = new sk(cb),
          kb = Array.from(this._bufferViewToData.keys()).sort(((bb, cb) => kk(cb.byteLength) - kk(bb.byteLength)));
        for (const Wb of kb) {
          Wb.byteOffset = sb.byteOffset, bb.push(Wb);
          const cb = bb.length - 1,
            kb = this.getPropertiesWithBufferView(Wb);
          for (const bb of kb) bb.bufferView = cb;
          sb.writeTypedArray(this._bufferViewToData.get(Wb)), this._bufferViewToData.delete(Wb)
        }
        return sb.getOutputData()
      }
      createBufferView(bb, cb) {
        const sb = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: bb.byteLength,
          byteStride: cb
        };
        return this._bufferViewToData.set(sb, bb), sb
      }
      createAccessor(bb, cb, sb, kb, Wb, ab, Tb) {
        this._verifyBufferView(bb);
        const Ub = {
          bufferView: void 0,
          componentType: sb,
          count: kb,
          type: cb,
          min: ab?.min,
          max: ab?.max,
          normalized: Tb,
          byteOffset: Wb
        };
        return this.setBufferView(Ub, bb), this._accessorToBufferView.set(Ub, bb), Ub
      }
      setBufferView(bb, cb) {
        this._verifyBufferView(cb);
        this.getPropertiesWithBufferView(cb).push(bb)
      }
      removeBufferView(bb) {
        const cb = this.getPropertiesWithBufferView(bb);
        for (const sb of cb) void 0 !== sb.bufferView && delete sb.bufferView;
        this._bufferViewToData.delete(bb), this._bufferViewToProperties.delete(bb), this._accessorToBufferView.forEach(((cb, sb) => {
          cb === bb && (void 0 !== sb.byteOffset && delete sb.byteOffset, this._accessorToBufferView.delete(sb))
        }))
      }
      getBufferView(bb) {
        const cb = this._accessorToBufferView.get(bb);
        return this._verifyBufferView(cb), cb
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
    var ak = sb(39658);
    (0, ak.g)();
    var Tk = sb(39871);
    (0, Tk.e)();
    var Uk = sb(39709),
      Ik = sb(40519);
    (0, Ik.e)();
    let Hk = (() => {
      var bb;
      let cb, sb, kb = [],
        Wb = [],
        ab = [],
        Tb = [];
      return bb = class {
        get influence() {
          return this._influence
        }
        set influence(bb) {
          if (this._influence === bb) return;
          const cb = this._influence;
          this._influence = bb, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === cb || 0 === bb)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(bb) {
          this._animationPropertiesOverride = bb
        }
        constructor(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = bb, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new bs.c, this._onDataLayoutChanged = new bs.c, this.id = (0, Jb.m)(this, kb, void 0), this.morphTargetManager = ((0, Jb.m)(this, Wb), (0, Jb.m)(this, ab, null)), this._animationPropertiesOverride = ((0, Jb.m)(this, Tb), null), this.id = bb, this.morphTargetManager = Ub, this._scene = sb || lb.d.LastCreatedScene, this.influence = cb, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        eTb(bb) {
          const cb = this.hasPositions;
          this._positions = bb, cb !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(bb) {
          const cb = this.hasNormals;
          this._normals = bb, cb !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(bb) {
          const cb = this.hasTangents;
          this._tangents = bb, cb !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(bb) {
          const cb = this.hasUVs;
          this._uvs = bb, cb !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(bb) {
          const cb = this.hasUV2s;
          this._uv2s = bb, cb !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(bb) {
          const cb = this.hasColors;
          this._colors = bb, cb !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const cb = Yc.d.Clone((() => new bb(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return cb._positions = this._positions, cb._normals = this._normals, cb._tangents = this._tangents, cb._uvs = this._uvs, cb._uv2s = this._uv2s, cb._colors = this._colors, cb
        }
        serialize() {
          const bb = {};
          return bb.name = this.name, bb.influence = this.influence, null != this.id && (bb.id = this.id), bb.uniqueId = this.uniqueId, bb.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (bb.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (bb.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (bb.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (bb.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (bb.colors = Array.prototype.slice.call(this.getColors())), Yc.d.AppendSerializedAnimations(this, bb), bb
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(cb, sb) {
          let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Wb = new bb(cb.name, cb.influence, sb, kb);
          if (Wb.eTb(cb.positions), null != cb.id && (Wb.id = cb.id), cb.normals && Wb.setNormals(cb.normals), cb.tangents && Wb.setTangents(cb.tangents), cb.uvs && Wb.setUVs(cb.uvs), cb.uv2s && Wb.setUV2s(cb.uv2s), cb.colors && Wb.setColors(cb.colors), cb.animations) {
            for (let bb = 0; bb < cb.animations.length; bb++) {
              const sb = cb.animations[bb],
                kb = (0, dc.e)("BABYLON.Animation");
              kb && Wb.animations.push(kb.Parse(sb))
            }
            cb.autoAnimate && sb && sb.beginAnimation(Wb, cb.autoAnimateFrom, cb.autoAnimateTo, cb.autoAnimateLoop, cb.autoAnimateSpeed || 1)
          }
          return Wb
        }
        static FromMesh(cb, sb, kb) {
          sb || (sb = cb.name);
          const Wb = new bb(sb, kb, cb.EY(), cb.morphTargetManager);
          return Wb.eTb(cb.getVerticesData(zb.l.PositionKind)), cb.isVerticesDataPresent(zb.l.NormalKind) && Wb.setNormals(cb.getVerticesData(zb.l.NormalKind)), cb.isVerticesDataPresent(zb.l.TangentKind) && Wb.setTangents(cb.getVerticesData(zb.l.TangentKind)), cb.isVerticesDataPresent(zb.l.UVKind) && Wb.setUVs(cb.getVerticesData(zb.l.UVKind)), cb.isVerticesDataPresent(zb.l.UV2Kind) && Wb.setUV2s(cb.getVerticesData(zb.l.UV2Kind)), cb.isVerticesDataPresent(zb.l.ColorKind) && Wb.setColors(cb.getVerticesData(zb.l.ColorKind)), Wb
        }
      }, (() => {
        const Ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [(0, gb.E)()], sb = [(0, gb.E)()], (0, Jb.j)(null, null, cb, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: bb => "id" in bb,
            get: bb => bb.id,
            set: (bb, cb) => {
              bb.id = cb
            }
          },
          metadata: Ub
        }, kb, Wb), (0, Jb.j)(null, null, sb, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: bb => "morphTargetManager" in bb,
            get: bb => bb.morphTargetManager,
            set: (bb, cb) => {
              bb.morphTargetManager = cb
            }
          },
          metadata: Ub
        }, ab, Tb), Ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ub
        })
      })(), bb
    })();
    var fk, Mk = sb(40574),
      Xk = sb(39706);
    ! function(bb) {
      bb[bb.INTANGENT = 0] = "INTANGENT", bb[bb.OUTTANGENT = 1] = "OUTTANGENT"
    }(fk || (fk = {}));
    class nk {
      static _IsTransformable(bb) {
        return bb && (bb instanceof Mb.c || bb instanceof ak.c || bb instanceof Xk.b)
      }
      static _CreateNodeAnimation(bb, cb, sb, kb, ab) {
        if (this._IsTransformable(bb)) {
          const Tb = [],
            Ub = [],
            Ib = cb.getKeys(),
            Hb = nk._CalculateMinMaxKeyFrames(Ib),
            fb = nk._DeduceInterpolation(Ib, sb, kb),
            Mb = fb.interpolationType,
            Xb = fb.shouldBakeAnimation;
          if (Xb ? nk._CreateBakedAnimation(bb, cb, sb, Hb.min, Hb.max, cb.framePerSecond, ab, Tb, Ub, Hb, kb) : "LINEAR" === Mb || "STEP" === Mb ? nk._CreateLinearOrStepAnimation(bb, cb, sb, Tb, Ub, kb) : "CUBICSPLINE" === Mb ? nk._CreateCubicSplineAnimation(bb, cb, sb, Tb, Ub, kb) : nk._CreateBakedAnimation(bb, cb, sb, Hb.min, Hb.max, cb.framePerSecond, ab, Tb, Ub, Hb, kb), Tb.length && Ub.length) {
            return {
              inputs: Tb,
              outputs: Ub,
              samplerInterpolation: Mb,
              inputsMin: Xb ? Hb.min : Wb.Tools.FloatRound(Hb.min / cb.framePerSecond),
              inputsMax: Xb ? Hb.max : Wb.Tools.FloatRound(Hb.max / cb.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(bb) {
        let cb = null,
          sb = "VEC3",
          kb = !1;
        const ab = bb.targetProperty.split(".");
        switch (ab[0]) {
          case "bl":
            cb = "scale";
            break;
          case "position":
            cb = "translation";
            break;
          case "rotation":
            sb = "VEC4", cb = "rotation";
            break;
          case "rotationQuaternion":
            sb = "VEC4", kb = !0, cb = "rotation";
            break;
          case "influence":
            sb = "SCALAR", cb = "weights";
            break;
          default:
            Wb.Tools.Error(`Unsupported animatable property ${ab[0]}`)
        }
        return cb ? {
          animationChannelTargetPath: cb,
          dataAccessorType: sb,
          useQuaternion: kb
        } : (Wb.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb) {
        let Mb;
        if (nk._IsTransformable(bb) && bb.animations)
          for (const Xb of bb.animations) {
            if (fb && !fb(Xb)) continue;
            const Wb = nk._DeduceAnimationInfo(Xb);
            Wb && (Mb = {
              name: Xb.name,
              samplers: [],
              channels: []
            }, nk._AddAnimation(`${Xb.name}`, Xb.hasRunningRuntimeAnimations ? cb : Mb, bb, Xb, Wb.dataAccessorType, Wb.animationChannelTargetPath, kb, ab, Tb, Ub, Wb.useQuaternion, Ib, Hb), Mb.samplers.length && Mb.channels.length && sb.push(Mb))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb) {
        let Mb;
        if (bb instanceof Mk.e) {
          const Wb = bb.morphTargetManager;
          if (Wb)
            for (let Xb = 0; Xb < Wb.numTargets; ++Xb) {
              const nb = Wb.getTarget(Xb);
              for (const mb of nb.animations) {
                if (fb && !fb(mb)) continue;
                const nb = new Ik.c(`${mb.name}`, "influence", mb.framePerSecond, mb.dataType, mb.Aa, mb.enableBlending),
                  lb = [],
                  Qb = mb.getKeys();
                for (let bb = 0; bb < Qb.length; ++bb) {
                  const cb = Qb[bb];
                  for (let bb = 0; bb < Wb.numTargets; ++bb) bb == Xb ? lb.push(cb) : lb.push({
                    frame: cb.frame,
                    value: 0
                  })
                }
                nb.setKeys(lb, !0);
                const eb = nk._DeduceAnimationInfo(nb);
                eb && (Mb = {
                  name: nb.name,
                  samplers: [],
                  channels: []
                }, nk._AddAnimation(mb.name, mb.hasRunningRuntimeAnimations ? cb : Mb, bb, nb, eb.dataAccessorType, eb.animationChannelTargetPath, kb, ab, Tb, Ub, eb.useQuaternion, Ib, Hb, Wb.numTargets), Mb.samplers.length && Mb.channels.length && sb.push(Mb))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) {
        let fb;
        if (bb.animationGroups) {
          const Mb = bb.animationGroups;
          for (const Xb of Mb) {
            const Mb = new Map,
              nb = new Map,
              mb = new Set,
              lb = Xb.to - Xb.from;
            fb = {
              name: Xb.name,
              channels: [],
              samplers: []
            };
            for (let cb = 0; cb < Xb.targetedAnimations.length; ++cb) {
              const Hb = Xb.targetedAnimations[cb],
                lb = Hb.target,
                Qb = Hb.animation;
              if (Ib && !Ib(Qb)) continue;
              const eb = Ub.has(lb);
              if (this._IsTransformable(lb) || 1 === lb.length && this._IsTransformable(lb[0])) {
                const bb = nk._DeduceAnimationInfo(Hb.animation);
                if (bb) {
                  const cb = this._IsTransformable(lb) ? lb : this._IsTransformable(lb[0]) ? lb[0] : null;
                  cb && nk._AddAnimation(`${Qb.name}`, fb, cb, Qb, bb.dataAccessorType, bb.animationChannelTargetPath, sb, kb, Wb, ab, bb.useQuaternion, Tb, eb)
                }
              } else if (lb instanceof Hk || 1 === lb.length && lb[0] instanceof Hk) {
                if (nk._DeduceAnimationInfo(Hb.animation)) {
                  const cb = lb instanceof Hk ? lb : lb[0];
                  if (cb) {
                    const sb = bb.morphTargetManagers.find((bb => {
                      for (let sb = 0; sb < bb.numTargets; ++sb)
                        if (bb.getTarget(sb) === cb) return !0;
                      return !1
                    }));
                    if (sb) {
                      const kb = bb.meshes.find((bb => bb.morphTargetManager === sb));
                      kb && (Mb.has(kb) || Mb.set(kb, new Map), Mb.get(kb)?.set(cb, Qb), mb.add(kb), nb.set(kb, Qb))
                    }
                  }
                }
              }
            }
            mb.forEach((bb => {
              const cb = bb.morphTargetManager;
              let Ub = null;
              const Ib = [],
                Hb = nb.get(bb).getKeys(),
                mb = Hb.length;
              for (let sb = 0; sb < mb; ++sb)
                for (let kb = 0; kb < cb.numTargets; ++kb) {
                  const Wb = cb.getTarget(kb),
                    ab = Mb.get(bb);
                  if (ab) {
                    const cb = ab.get(Wb);
                    cb ? (Ub || (Ub = new Ik.c(`${Xb.name}_${bb.name}_MorphWeightAnimation`, "influence", cb.framePerSecond, Ik.c.ANIMATIONTYPE_FLOAT, cb.Aa, cb.enableBlending)), Ib.push(cb.getKeys()[sb])) : Ib.push({
                      frame: Xb.from + lb / mb * sb,
                      value: Wb.influence,
                      inTangent: Hb[0].inTangent ? 0 : void 0,
                      outTangent: Hb[0].outTangent ? 0 : void 0
                    })
                  }
                }
              Ub.setKeys(Ib, !0);
              const Qb = nk._DeduceAnimationInfo(Ub);
              Qb && nk._AddAnimation(`${Xb.name}_${bb.name}_MorphWeightAnimation`, fb, bb, Ub, Qb.dataAccessorType, Qb.animationChannelTargetPath, sb, kb, Wb, ab, Qb.useQuaternion, Tb, !1, cb?.numTargets)
            })), fb.channels.length && fb.samplers.length && (Hb?.set(Xb, cb.length), cb.push(fb))
          }
        }
      }
      static _AddAnimation(bb, cb, sb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb) {
        const lb = nk._CreateNodeAnimation(sb, Wb, Tb, Mb, Xb);
        let Qb, eb, Cb, Nb, Vb, Lb;
        if (lb) {
          if (mb) {
            let bb, cb = 0;
            const sb = [];
            for (; lb.inputs.length > 0;) bb = lb.inputs.shift(), cb % mb == 0 && sb.push(bb), cb++;
            lb.inputs = sb
          }
          const bb = Ub.get(sb),
            Wb = new Float32Array(lb.inputs);
          Qb = Ib.createBufferView(Wb), eb = Ib.createAccessor(Qb, "SCALAR", 5126, lb.inputs.length, void 0, {
            min: [lb.inputsMin],
            max: [lb.inputsMax]
          }), fb.push(eb), Cb = fb.length - 1;
          const Hb = new kb.Quaternion,
            Mb = new kb.Fm,
            Xb = new kb.Fm,
            ub = sb instanceof ak.c,
            Yb = As(ab),
            hb = new Float32Array(lb.outputs.length * Yb);
          lb.outputs.forEach((function(bb, cb) {
            let sb = bb;
            switch (Tb) {
              case "translation":
                nb && (kb.Fm.FromArrayToRef(bb, 0, Xb), os(Xb), Xb.toArray(sb));
                break;
              case "rotation":
                4 === bb.length ? kb.Quaternion.FromArrayToRef(bb, 0, Hb) : (sb = new Array(4), kb.Fm.FromArrayToRef(bb, 0, Mb), kb.Quaternion.FromEulerVectorToRef(Mb, Hb)), nb && (Ss(Hb), ub && Rs(Hb)), Hb.toArray(sb)
            }
            hb.set(sb, cb * Yb)
          })), Qb = Ib.createBufferView(hb), eb = Ib.createAccessor(Qb, ab, 5126, lb.outputs.length), fb.push(eb), Nb = fb.length - 1, Vb = {
            interpolation: lb.samplerInterpolation,
            input: Cb,
            output: Nb
          }, cb.samplers.push(Vb), Lb = {
            sampler: cb.samplers.length - 1,
            target: {
              node: bb,
              path: Tb
            }
          }, cb.channels.push(Lb)
        }
      }
      static _CreateBakedAnimation(bb, cb, sb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb) {
        let nb;
        const mb = kb.Quaternion.Identity();
        let lb, Qb, eb, Cb, Nb, Vb = null,
          Lb = null;
        Mb.min = Wb.Tools.FloatRound(ab / Ub);
        const ub = cb.getKeys();
        for (let kb = 0, Yb = ub.length; kb < Yb; ++kb) {
          if (Qb = ub[kb], kb + 1 < Yb)
            if (eb = ub[kb + 1], Qb.value.equals && Qb.value.equals(eb.value) || Qb.value === eb.value) {
              if (0 !== kb) continue;
              Nb = Qb.frame
            } else Nb = eb.frame;
          else {
            if (Cb = ub[kb - 1], Qb.value.equals && Qb.value.equals(Cb.value) || Qb.value === Cb.value) continue;
            Nb = Tb
          }
          if (Nb)
            for (let kb = Qb.frame; kb <= Nb; kb += Ib) {
              if (lb = Wb.Tools.FloatRound(kb / Ub), lb === Vb) continue;
              Vb = lb, Lb = lb;
              const ab = {
                key: 0,
                repeatCount: 0,
                Aa: cb.Aa
              };
              nb = cb._interpolate(kb, ab), nk._SetInterpolatedValue(bb, nb, lb, cb, sb, mb, Hb, fb, Xb)
            }
        }
        Lb && (Mb.max = Lb)
      }
      static _ConvertFactorToVector3OrQuaternion(bb, cb, sb, ab, Tb) {
        const Ub = nk._GetBasePositionRotationOrScale(cb, ab, Tb),
          Ib = sb.targetProperty.split("."),
          Hb = Ib ? Ib[1] : "",
          fb = Tb ? kb.Quaternion.FromArray(Ub).normalize() : kb.Fm.FromArray(Ub);
        switch (Hb) {
          case "x":
          case "y":
          case "z":
            fb[Hb] = bb;
            break;
          case "w":
            fb.w = bb;
            break;
          default:
            Wb.Tools.Error(`glTFAnimation: Unsupported component name "${Hb}"!`)
        }
        return fb
      }
      static _SetInterpolatedValue(bb, cb, sb, Wb, ab, Tb, Ub, Ib, Hb) {
        let fb;
        Ub.push(sb), "weights" !== ab ? (Wb.dataType === Ik.c.ANIMATIONTYPE_FLOAT && (cb = this._ConvertFactorToVector3OrQuaternion(cb, bb, Wb, ab, Hb)), "rotation" === ab ? (Hb ? Tb = cb : (fb = cb, kb.Quaternion.RotationYawPitchRollToRef(fb.y, fb.x, fb.z, Tb)), Ib.push(Tb.Osb())) : (fb = cb, Ib.push(fb.Osb()))) : Ib.push([cb])
      }
      static _CreateLinearOrStepAnimation(bb, cb, sb, kb, Wb, ab) {
        for (const Tb of cb.getKeys()) kb.push(Tb.frame / cb.framePerSecond), nk._AddKeyframeValue(Tb, cb, Wb, sb, bb, ab)
      }
      static _CreateCubicSplineAnimation(bb, cb, sb, kb, Wb, ab) {
        cb.getKeys().forEach((function(Tb) {
          kb.push(Tb.frame / cb.framePerSecond), nk._AddSplineTangent(fk.INTANGENT, Wb, sb, "CUBICSPLINE", Tb, ab), nk._AddKeyframeValue(Tb, cb, Wb, sb, bb, ab), nk._AddSplineTangent(fk.OUTTANGENT, Wb, sb, "CUBICSPLINE", Tb, ab)
        }))
      }
      static _GetBasePositionRotationOrScale(bb, cb, sb) {
        let Wb;
        if ("rotation" === cb)
          if (sb) {
            Wb = (bb.rotationQuaternion ?? kb.Quaternion.Identity()).Osb()
          } else {
            Wb = (bb.rotation ?? kb.Fm.Zero()).Osb()
          }
        else if ("translation" === cb) {
          Wb = (bb.position ?? kb.Fm.Zero()).Osb()
        } else {
          Wb = (bb.bl ?? kb.Fm.One()).Osb()
        }
        return Wb
      }
      static _AddKeyframeValue(bb, cb, sb, ab, Tb, Ub) {
        let Ib;
        const Hb = cb.dataType;
        if (Hb === Ik.c.ANIMATIONTYPE_VECTOR3) {
          let cb = bb.value.Osb();
          if ("rotation" === ab) {
            const bb = kb.Fm.FromArray(cb);
            cb = kb.Quaternion.RotationYawPitchRoll(bb.y, bb.x, bb.z).Osb()
          }
          sb.push(cb)
        } else if (Hb === Ik.c.ANIMATIONTYPE_FLOAT) {
          if ("weights" === ab) sb.push([bb.value]);
          else if (Ib = this._ConvertFactorToVector3OrQuaternion(bb.value, Tb, cb, ab, Ub), Ib) {
            if ("rotation" === ab) {
              const bb = Ub ? Ib : kb.Quaternion.RotationYawPitchRoll(Ib.y, Ib.x, Ib.z).normalize();
              sb.push(bb.Osb())
            }
            sb.push(Ib.Osb())
          }
        } else Hb === Ik.c.ANIMATIONTYPE_QUATERNION ? sb.push(bb.value.normalize().Osb()) : Wb.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(bb, cb, sb) {
        let kb, Wb, ab = !1;
        if ("rotation" === cb && !sb) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let Tb = 0, Ub = bb.length; Tb < Ub; ++Tb)
          if (Wb = bb[Tb], Wb.inTangent || Wb.outTangent)
            if (kb) {
              if ("CUBICSPLINE" !== kb) {
                kb = "LINEAR", ab = !0;
                break
              }
            } else kb = "CUBICSPLINE";
        else if (kb) {
          if ("CUBICSPLINE" === kb || Wb.interpolation && 1 === Wb.interpolation && "STEP" !== kb) {
            kb = "LINEAR", ab = !0;
            break
          }
        } else kb = Wb.interpolation && 1 === Wb.interpolation ? "STEP" : "LINEAR";
        return kb || (kb = "LINEAR"), {
          interpolationType: kb,
          shouldBakeAnimation: ab
        }
      }
      static _AddSplineTangent(bb, cb, sb, Wb, ab, Tb) {
        let Ub;
        const Ib = bb === fk.INTANGENT ? ab.inTangent : ab.outTangent;
        if ("CUBICSPLINE" === Wb) {
          if ("rotation" === sb)
            if (Ib)
              if (Tb) Ub = Ib.Osb();
              else {
                const bb = Ib;
                Ub = kb.Quaternion.RotationYawPitchRoll(bb.y, bb.x, bb.z).Osb()
              }
          else Ub = [0, 0, 0, 0];
          else Ub = "weights" === sb ? Ib ? [Ib] : [0] : Ib ? Ib.Osb() : [0, 0, 0];
          cb.push(Ub)
        }
      }
      static _CalculateMinMaxKeyFrames(bb) {
        let cb = 1 / 0,
          sb = -1 / 0;
        return bb.forEach((function(bb) {
          cb = Math.min(cb, bb.frame), sb = Math.max(sb, bb.frame)
        })), {
          min: cb,
          max: sb
        }
      }
    }

    function mk(bb, cb, sb, ab, Tb, Ub) {
      const Ib = {
          attributes: {},
          influence: bb.influence,
          name: bb.name
        },
        Hb = cb.geometry;
      if (!Hb) return Wb.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), Ib;
      const Mb = Ub ? -1 : 1,
        Xb = kb.Fm.Zero();
      let nb, mb;
      if (bb.hasPositions) {
        const ab = bb.getPositions(),
          Ub = Hb.getVerticesData(fb.f.PositionKind);
        if (Ub) {
          const bb = new Float32Array(Ub.length),
            cb = [1 / 0, 1 / 0, 1 / 0],
            Wb = [-1 / 0, -1 / 0, -1 / 0];
          mb = Ub.length / 3, nb = 0;
          for (let sb = nb; sb < mb; ++sb) {
            const Tb = kb.Fm.FromArray(Ub, 3 * sb);
            kb.Fm.FromArray(ab, 3 * sb).subtractToRef(Tb, Xb), Xb.x *= Mb, cb[0] = Math.min(cb[0], Xb.x), Wb[0] = Math.max(Wb[0], Xb.x), cb[1] = Math.min(cb[1], Xb.y), Wb[1] = Math.max(Wb[1], Xb.y), cb[2] = Math.min(cb[2], Xb.z), Wb[2] = Math.max(Wb[2], Xb.z), bb[3 * sb] = Xb.x, bb[3 * sb + 1] = Xb.y, bb[3 * sb + 2] = Xb.z
          }
          const Hb = sb.createBufferView(bb, 12),
            fb = sb.createAccessor(Hb, "VEC3", 5126, ab.length / 3, 0, {
              min: cb,
              max: Wb
            });
          Tb.push(fb), Ib.attributes.POSITION = Tb.length - 1
        } else Wb.Tools.Warn(`Morph target positions for mesh ${cb.name} were not exported. Mesh does not have position vertex data`)
      }
      if (bb.hasNormals) {
        const ab = bb.getNormals(),
          Ub = Hb.getVerticesData(fb.f.NormalKind);
        if (Ub) {
          const bb = new Float32Array(Ub.length);
          mb = Ub.length / 3, nb = 0;
          for (let sb = nb; sb < mb; ++sb) {
            const cb = kb.Fm.FromArray(Ub, 3 * sb).normalize();
            kb.Fm.FromArray(ab, 3 * sb).normalize().subtractToRef(cb, Xb), bb[3 * sb] = Xb.x * Mb, bb[3 * sb + 1] = Xb.y, bb[3 * sb + 2] = Xb.z
          }
          const cb = sb.createBufferView(bb, 12),
            Wb = sb.createAccessor(cb, "VEC3", 5126, ab.length / 3, 0);
          Tb.push(Wb), Ib.attributes.NORMAL = Tb.length - 1
        } else Wb.Tools.Warn(`Morph target normals for mesh ${cb.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (bb.hasTangents) {
        const ab = bb.getTangents(),
          Ub = Hb.getVerticesData(fb.f.TangentKind);
        if (Ub) {
          mb = Ub.length / 4;
          const bb = new Float32Array(3 * mb);
          nb = 0;
          for (let sb = nb; sb < mb; ++sb) {
            const cb = kb.Fm.FromArray(Ub, 4 * sb);
            rs(cb);
            const Wb = kb.Fm.FromArray(ab, 3 * sb);
            rs(Wb), Wb.subtractToRef(cb, Xb), bb[3 * sb] = Xb.x * Mb, bb[3 * sb + 1] = Xb.y, bb[3 * sb + 2] = Xb.z
          }
          const cb = sb.createBufferView(bb, 12),
            Wb = sb.createAccessor(cb, "VEC3", 5126, mb, 0);
          Tb.push(Wb), Ib.attributes.TANGENT = Tb.length - 1
        } else Wb.Tools.Warn(`Morph target tangents for mesh ${cb.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (bb.hasColors) {
        const ab = bb.getColors(),
          Ub = Hb.getVerticesData(fb.f.ColorKind),
          Mb = Hb.getVertexBuffer(fb.f.ColorKind);
        if (Ub && Mb) {
          const bb = Mb.getSize();
          mb = Ub.length / bb;
          const cb = new Float32Array(mb * bb);
          nb = 0;
          for (let sb = nb; sb < mb; ++sb)
            if (3 === bb) {
              const Wb = kb.Fm.FromArray(Ub, sb * bb);
              kb.Fm.FromArray(ab, sb * bb).subtractToRef(Wb, Xb), cb[3 * sb] = Xb.x, cb[3 * sb + 1] = Xb.y, cb[3 * sb + 2] = Xb.z
            } else if (4 === bb) {
            const Wb = new kb.Vector4,
              Tb = kb.Vector4.FromArray(Ub, sb * bb);
            kb.Vector4.FromArray(ab, sb * bb).subtractToRef(Tb, Wb), cb[4 * sb] = Wb.x, cb[4 * sb + 1] = Wb.y, cb[4 * sb + 2] = Wb.z, cb[4 * sb + 3] = Wb.w
          } else Wb.Tools.Warn(`Unsupported number of components for color attribute: ${bb}`);
          const Hb = sb.createBufferView(cb, 4 * bb),
            fb = sb.createAccessor(Hb, 3 === bb ? "VEC3" : "VEC4", 5126, mb, 0);
          Tb.push(fb), Ib.attributes.COLOR_0 = Tb.length - 1
        } else Wb.Tools.Warn(`Morph target colors for mesh ${cb.name} were not exported. Mesh does not have colors vertex data`)
      }
      return Ib
    }
    var lk = sb(40991);
    class Qk {}
    Qk.DEFAULT_COLOR = ob.e.White(), Qk.DEFAULT_WIDTH_ATTENUATED = 1, Qk.DEFAULT_WIDTH = .1;
    var ek = sb(40516);
    class Ck {
      constructor(bb) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = bb
      }
      moveTo(bb, cb) {
        this._currentPath = new ek.i(bb, cb), this._tempPaths.push(this._currentPath)
      }
      lineTo(bb, cb) {
        this._currentPath.addLineTo(bb, cb)
      }
      quadraticCurveTo(bb, cb, sb, kb) {
        this._currentPath.addQuadraticCurveTo(bb, cb, sb, kb, this._resolution)
      }
      bezierCurveTo(bb, cb, sb, kb, Wb, ab) {
        this._currentPath.addBezierCurveTo(bb, cb, sb, kb, Wb, ab, this._resolution)
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

    function Nk(bb, cb, sb, kb, Wb, ab) {
      const Tb = ab.glyphs[bb] || ab.glyphs["?"];
      if (!Tb) return null;
      const Ub = new Ck(Wb);
      if (Tb.o) {
        const bb = Tb.o.split(" ");
        for (let Wb = 0, ab = bb.length; Wb < ab;) {
          switch (bb[Wb++]) {
            case "m": {
              const ab = parseInt(bb[Wb++]) * cb + sb,
                Tb = parseInt(bb[Wb++]) * cb + kb;
              Ub.moveTo(ab, Tb);
              break
            }
            case "l": {
              const ab = parseInt(bb[Wb++]) * cb + sb,
                Tb = parseInt(bb[Wb++]) * cb + kb;
              Ub.lineTo(ab, Tb);
              break
            }
            case "q": {
              const ab = parseInt(bb[Wb++]) * cb + sb,
                Tb = parseInt(bb[Wb++]) * cb + kb,
                Ib = parseInt(bb[Wb++]) * cb + sb,
                Hb = parseInt(bb[Wb++]) * cb + kb;
              Ub.quadraticCurveTo(Ib, Hb, ab, Tb);
              break
            }
            case "b": {
              const ab = parseInt(bb[Wb++]) * cb + sb,
                Tb = parseInt(bb[Wb++]) * cb + kb,
                Ib = parseInt(bb[Wb++]) * cb + sb,
                Hb = parseInt(bb[Wb++]) * cb + kb,
                fb = parseInt(bb[Wb++]) * cb + sb,
                Mb = parseInt(bb[Wb++]) * cb + kb;
              Ub.bezierCurveTo(Ib, Hb, fb, Mb, ab, Tb);
              break
            }
          }
        }
      }
      return Ub.extractHoles(), {
        offsetX: Tb.ha * cb,
        shapePath: Ub
      }
    }

    function Vk(bb, cb, sb, kb) {
      const Wb = Array.from(bb),
        ab = cb / kb.resolution,
        Tb = (kb.boundingBox.yMax - kb.boundingBox.yMin + kb.underlineThickness) * ab,
        Ub = [];
      let Ib = 0,
        Hb = 0;
      for (let fb = 0; fb < Wb.length; fb++) {
        const bb = Wb[fb];
        if ("\n" === bb) Ib = 0, Hb -= Tb;
        else {
          const cb = Nk(bb, ab, Ib, Hb, sb, kb);
          cb && (Ib += cb.offsetX, Ub.push(cb.shapePath))
        }
      }
      return Ub
    }
    class Lk {
      static ConvertPoints(bb, cb) {
        if (bb.length && Array.isArray(bb) && "number" === typeof bb[0]) return [bb];
        if (bb.length && Array.isArray(bb[0]) && "number" === typeof bb[0][0]) return bb;
        if (bb.length && !Array.isArray(bb[0]) && bb[0] instanceof Zb.p) {
          const cb = [];
          for (let sb = 0; sb < bb.length; sb++) {
            const kb = bb[sb];
            cb.push(kb.x, kb.y, kb.z)
          }
          return [cb]
        }
        if (bb.length > 0 && Array.isArray(bb[0]) && bb[0].length > 0 && bb[0][0] instanceof Zb.p) {
          const cb = [],
            sb = bb;
          for (const bb of sb) cb.push(bb.flatMap((bb => [bb.x, bb.y, bb.z])));
          return cb
        }
        if (bb instanceof Float32Array) {
          if (cb?.floatArrayStride) {
            const sb = [],
              kb = 3 * cb.floatArrayStride;
            for (let cb = 0; cb < bb.length; cb += kb) {
              const Wb = new Array(kb);
              for (let sb = 0; sb < kb; sb++) Wb[sb] = bb[cb + sb];
              sb.push(Wb)
            }
            return sb
          }
          return [Array.from(bb)]
        }
        if (bb.length && bb[0] instanceof Float32Array) {
          const cb = [];
          for (const sb of bb) cb.push(Array.from(sb));
          return cb
        }
        return []
      }
      static OmitZeroLengthPredicate(bb, cb, sb) {
        const kb = [];
        return cb.subtract(bb).lengthSquared() > 0 && kb.push([bb, cb]), sb.subtract(cb).lengthSquared() > 0 && kb.push([cb, sb]), bb.subtract(sb).lengthSquared() > 0 && kb.push([sb, bb]), 0 === kb.length ? null : kb
      }
      static OmitDuplicatesPredicate(bb, cb, sb, kb) {
        const Wb = [];
        return Lk._SearchInPoints(bb, cb, kb) || Wb.push([bb, cb]), Lk._SearchInPoints(cb, sb, kb) || Wb.push([cb, sb]), Lk._SearchInPoints(sb, bb, kb) || Wb.push([sb, bb]), 0 === Wb.length ? null : Wb
      }
      static _SearchInPoints(bb, cb, sb) {
        for (const kb of sb)
          for (let sb = 0; sb < kb.length; sb++)
            if (kb[sb]?.equals(bb) && (kb[sb + 1]?.equals(cb) || kb[sb - 1]?.equals(cb))) return !0;
        return !1
      }
      static MeshesToLines(bb, cb) {
        const sb = [];
        for (let kb = 0; kb < bb.length; kb++) {
          const Wb = bb[kb],
            ab = Wb.getVerticesData(zb.l.PositionKind),
            Tb = Wb.Gsb();
          if (ab && Tb)
            for (let bb = 0, Ub = 0; bb < Tb.length; bb++) {
              const Ib = 3 * Tb[Ub++],
                Hb = 3 * Tb[Ub++],
                fb = 3 * Tb[Ub++],
                Mb = new Zb.p(ab[Ib], ab[Ib + 1], ab[Ib + 2]),
                Xb = new Zb.p(ab[Hb], ab[Hb + 1], ab[Hb + 2]),
                nb = new Zb.p(ab[fb], ab[fb + 1], ab[fb + 2]);
              if (cb) {
                const Ub = cb(Mb, Xb, nb, sb, bb, Ib, Wb, kb, ab, Tb);
                if (Ub)
                  for (const bb of Ub) sb.push(bb)
              } else sb.push([Mb, Xb], [Xb, nb], [nb, Mb])
            }
        }
        return sb
      }
      static ToVector3Array(bb) {
        if (Array.isArray(bb[0])) {
          const cb = [],
            sb = bb;
          for (const bb of sb) {
            const sb = [];
            for (let cb = 0; cb < bb.length; cb += 3) sb.push(new Zb.p(bb[cb], bb[cb + 1], bb[cb + 2]));
            cb.push(sb)
          }
          return cb
        }
        const cb = bb,
          sb = [];
        for (let kb = 0; kb < cb.length; kb += 3) sb.push(new Zb.p(cb[kb], cb[kb + 1], cb[kb + 2]));
        return sb
      }
      static ToNumberArray(bb) {
        return bb.flatMap((bb => [bb.x, bb.y, bb.z]))
      }
      static GetPointsCountInfo(bb) {
        const cb = new Array(bb.length);
        let sb = 0;
        for (let kb = bb.length; kb--;) cb[kb] = bb[kb].length / 3, sb += cb[kb];
        return {
          total: sb,
          counts: cb
        }
      }
      static GetLineLength(bb) {
        if (0 === bb.length) return 0;
        let cb;
        cb = "number" === typeof bb[0] ? Lk.ToVector3Array(bb) : bb;
        const sb = Zb.m.Fm[0];
        let kb = 0;
        for (let Wb = 0; Wb < cb.length - 1; Wb++) {
          const bb = cb[Wb];
          kb += cb[Wb + 1].subtractToRef(bb, sb).length()
        }
        return kb
      }
      static GetLineLengthArray(bb, cb) {
        const sb = cb ? new Float32Array(cb, 0, bb.length / 3) : new Float32Array(bb.length / 3);
        let kb = 0;
        for (let Wb = 0, ab = bb.length / 3 - 1; Wb < ab; Wb++) {
          let cb = bb[3 * Wb + 0],
            ab = bb[3 * Wb + 1],
            Tb = bb[3 * Wb + 2];
          cb -= bb[3 * Wb + 3], ab -= bb[3 * Wb + 4], Tb -= bb[3 * Wb + 5];
          kb += Math.sqrt(cb * cb + ab * ab + Tb * Tb), sb[Wb + 1] = kb
        }
        return sb
      }
      static SegmentizeSegmentByCount(bb, cb, sb) {
        const kb = [],
          Wb = cb.subtract(bb),
          ab = Zb.m.Fm[0];
        ab.I6(sb);
        const Tb = Zb.m.Fm[1];
        Wb.divideToRef(ab, Tb);
        let Ub = bb.clone();
        kb.push(Ub);
        for (let Ib = 0; Ib < sb; Ib++) Ub = Ub.clone(), kb.push(Ub.addInPlace(Tb));
        return kb
      }
      static SegmentizeLineBySegmentLength(bb, cb) {
        const sb = bb[0] instanceof Zb.p ? Lk.GetLineSegments(bb) : "number" === typeof bb[0] ? Lk.GetLineSegments(Lk.ToVector3Array(bb)) : bb,
          kb = [];
        for (const Wb of sb)
          if (Wb.length > cb) {
            const bb = Lk.SegmentizeSegmentByCount(Wb.point1, Wb.point2, Math.ceil(Wb.length / cb));
            for (const cb of bb) kb.push(cb)
          } else kb.push(Wb.point1), kb.push(Wb.point2);
        return kb
      }
      static SegmentizeLineBySegmentCount(bb, cb) {
        const sb = "number" === typeof bb[0] ? Lk.ToVector3Array(bb) : bb,
          kb = Lk.GetLineLength(sb) / cb;
        return Lk.SegmentizeLineBySegmentLength(sb, kb)
      }
      static GetLineSegments(bb) {
        const cb = [];
        for (let sb = 0; sb < bb.length - 1; sb++) {
          const kb = bb[sb],
            Wb = bb[sb + 1],
            ab = Wb.subtract(kb).length();
          cb.push({
            point1: kb,
            point2: Wb,
            length: ab
          })
        }
        return cb
      }
      static GetMinMaxSegmentLength(bb) {
        const cb = Lk.GetLineSegments(bb).sort((bb => bb.length));
        return {
          min: cb[0].length,
          max: cb[cb.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wb = cb * sb;
        let ab = 0,
          Tb = 0;
        const Ub = bb.length;
        for (let Hb = 0; Hb < Ub; Hb++) {
          if (Wb <= ab + bb[Hb].length) {
            Tb = Hb;
            break
          }
          ab += bb[Hb].length
        }
        const Ib = (Wb - ab) / bb[Tb].length;
        return bb[Tb].point2.subtractToRef(bb[Tb].point1, Zb.m.Fm[0]), Zb.m.Fm[0].scaleToRef(Ib, Zb.m.Fm[1]), kb || Zb.m.Fm[1].addInPlace(bb[Tb].point1), Zb.m.Fm[1].clone()
      }
      static GetCircleLinePoints(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb,
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / cb;
        const ab = [];
        for (let Tb = 0; Tb <= cb; Tb++) ab.push(new Zb.p(Math.cos(Tb * Wb) * bb, Math.sin(Tb * Wb) * kb, sb));
        return ab
      }
      static GetBezierLinePoints(bb, cb, sb, kb) {
        return ek.e.CreateQuadraticBezier(bb, cb, sb, kb).getPoints().flatMap((bb => [bb.x, bb.y, bb.z]))
      }
      static GetArrowCap(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [bb.clone(), bb.add(cb.multiplyByFloats(sb, sb, sb))],
          widths: [kb, Wb, ab, Tb]
        }
      }
      static GetPointsFromText(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ab = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const Tb = [],
          Ub = Vk(bb, cb, sb, kb);
        for (const Ib of Ub) {
          for (const bb of Ib.paths) {
            const cb = [],
              sb = bb.getPoints();
            for (const bb of sb) cb.push(bb.x, bb.y, Wb);
            Tb.push(cb)
          }
          if (ab)
            for (const bb of Ib.holes) {
              const cb = [],
                sb = bb.getPoints();
              for (const bb of sb) cb.push(bb.x, bb.y, Wb);
              Tb.push(cb)
            }
        }
        return Tb
      }
      static Color3toRGBAUint8(bb) {
        const cb = new Uint8Array(4 * bb.length);
        for (let sb = 0, kb = 0; sb < bb.length; sb++) cb[kb++] = 255 * bb[sb].r, cb[kb++] = 255 * bb[sb].g, cb[kb++] = 255 * bb[sb].b, cb[kb++] = 255;
        return cb
      }
      static CreateColorsTexture(bb, cb, sb, kb) {
        const Wb = kb.Sm().getCaps().maxTextureSize ?? 1,
          ab = cb.length > Wb ? Wb : cb.length,
          Tb = Math.ceil(cb.length / Wb);
        Tb > 1 && (cb = [...cb, ...Array(ab * Tb - cb.length).fill(cb[0])]);
        const Ub = Lk.Color3toRGBAUint8(cb),
          Ib = new ub.e(Ub, ab, Tb, fs.c.TEXTUREFORMAT_RGBA, kb, !1, !0, sb);
        return Ib.name = bb, Ib
      }
      static PrepareEmptyColorsTexture(bb) {
        if (!Qk.EmptyColorsTexture) {
          const cb = new Uint8Array(4);
          Qk.EmptyColorsTexture = new ub.e(cb, 1, 1, fs.c.TEXTUREFORMAT_RGBA, bb, !1, !1, ub.e.NEAREST_NEAREST), Qk.EmptyColorsTexture.name = "grlEmptyColorsTexture", Qk.EmptyColorsTexture.ZY.addOnce((() => {
            Qk.EmptyColorsTexture = null
          }))
        }
        return Qk.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        Qk.EmptyColorsTexture?.dispose(), Qk.EmptyColorsTexture = null
      }
      static BooleanToNumber(bb) {
        return bb ? 1 : 0
      }
    }
    class uk extends qb.b {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class Yk extends db.d {
      isCompatible(bb) {
        return !0
      }
      constructor(bb, cb, sb) {
        sb = sb || {
          color: Qk.DEFAULT_COLOR
        };
        const kb = new uk;
        kb.GREASED_LINE_HAS_COLOR = !!sb.color && !sb.useColors, kb.GREASED_LINE_SIZE_ATTENUATION = sb.sizeAttenuation ?? !1, kb.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === sb.colorDistributionType, kb.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (cb ?? bb.EY()).useRightHandedSystem, kb.GREASED_LINE_CAMERA_FACING = sb.cameraFacing ?? !0, super(bb, Yk.GREASED_LINE_MATERIAL_NAME, 200, kb, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = sb?.forceGLSL || Yk.ForceGLSL, this._scene = cb ?? bb.EY(), this._engine = this._scene.Sm(), this._cameraFacing = sb.cameraFacing ?? !0, this.visibility = sb.visibility ?? 1, this.useDash = sb.useDash ?? !1, this.dashRatio = sb.dashRatio ?? .5, this.dashOffset = sb.dashOffset ?? 0, this.width = sb.width ? sb.width : sb.sizeAttenuation ? Qk.DEFAULT_WIDTH_ATTENUATED : Qk.DEFAULT_WIDTH, this._sizeAttenuation = sb.sizeAttenuation ?? !1, this.colorMode = sb.colorMode ?? 0, this._color = sb.color ?? null, this.useColors = sb.useColors ?? !1, this._colorsDistributionType = sb.colorDistributionType ?? 0, this.colorsSampling = sb.colorsSampling ?? ub.e.NEAREST_NEAREST, this._colors = sb.colors ?? null, this.dashCount = sb.dashCount ?? 1, this.resolution = sb.resolution ?? new Zb.n(this._engine.getRenderWidth(), this._engine.getRenderHeight()), sb.colorsTexture ? this.colorsTexture = sb.colorsTexture : this._colors ? this.colorsTexture = Lk.CreateColorsTexture(`${bb.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? Qk.DEFAULT_COLOR, Lk.PrepareEmptyColorsTexture(this._scene)), this._engine.ZY.add((() => {
          Lk.DisposeEmptyColorsTexture()
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
        const cb = [{
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
        return this._cameraFacing && cb.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === bb && cb.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: cb,
          vertex: this._cameraFacing && this._isGLSL(bb) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(bb) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(bb) {
        if (this._cameraFacing) {
          bb.O4("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || bb.O4("viewProjection", this._scene.getTransformMatrix());
          const cb = Zb.m.Vector4[0];
          cb.x = this._aspect, cb.y = this._resolution.x, cb.z = this._resolution.y, cb.w = this.width, bb.updateVector4("grl_aspect_resolution_lineWidth", cb)
        }
        const cb = Zb.m.Vector4[0];
        cb.x = Lk.BooleanToNumber(this.useDash), cb.y = this._dashArray, cb.z = this.dashOffset, cb.w = this.dashRatio, bb.updateVector4("grl_dashOptions", cb);
        const sb = Zb.m.Vector4[1];
        sb.x = this.colorMode, sb.y = this.visibility, sb.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, sb.w = Lk.BooleanToNumber(this.useColors), bb.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", sb), this._color && bb.updateColor3("grl_singleColor", this._color);
        const kb = this.colorsTexture ?? Qk.EmptyColorsTexture;
        bb.setTexture("grl_colors", kb), bb.updateFloat2("grl_textureSize", kb?.getSize().width ?? 1, kb?.getSize().height ?? 1)
      }
      prepareDefines(bb, cb, sb) {
        bb.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, bb.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, bb.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, bb.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = cb.useRightHandedSystem, bb.GREASED_LINE_CAMERA_FACING = this._cameraFacing, bb.GREASED_LINE_USE_OFFSETS = !!sb.offsets
      }
      getClassName() {
        return Yk.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(cb) ? function(bb, cb) {
          if ("vertex" === bb) {
            const bb = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return cb && (bb["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), bb
          }
          return "fragment" === bb ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(bb, this._cameraFacing) : function(bb, cb) {
          if ("vertex" === bb) {
            const bb = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return cb && (bb["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), bb
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const kb = this._colors?.length ?? 0;
        if (this._colors = bb, null !== bb && 0 !== bb.length) {
          if (!cb || sb)
            if (this.colorsTexture && kb === bb.length && !sb) {
              const cb = Lk.Color3toRGBAUint8(bb);
              this.colorsTexture.update(cb)
            } else this.colorsTexture?.dispose(), this.colorsTexture = Lk.CreateColorsTexture(`${this._material.name}-colors-texture`, bb, this.colorsSampling, this._scene)
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== bb || null !== this._color && null === bb ? (this._color = bb, cb || this.markAllDefinesAsDirty()) : this._color = bb
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
          cb = {
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
        return this._colors && (cb.colors = this._colors), this._color && (cb.color = this._color), bb.greasedLineMaterialOptions = cb, bb
      }
      parse(bb, cb, sb) {
        super.parse(bb, cb, sb);
        const kb = bb.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), kb.color && this.setColor(kb.color, !0), kb.colorDistributionType && (this.colorsDistributionType = kb.colorDistributionType), kb.colors && (this.colors = kb.colors), kb.colorsSampling && (this.colorsSampling = kb.colorsSampling), kb.colorMode && (this.colorMode = kb.colorMode), kb.useColors && (this.useColors = kb.useColors), kb.visibility && (this.visibility = kb.visibility), kb.useDash && (this.useDash = kb.useDash), kb.dashCount && (this.dashCount = kb.dashCount), kb.dashRatio && (this.dashRatio = kb.dashRatio), kb.dashOffset && (this.dashOffset = kb.dashOffset), kb.width && (this.width = kb.width), kb.sizeAttenuation && (this.sizeAttenuation = kb.sizeAttenuation), kb.resolution && (this.resolution = kb.resolution), this.colors ? this.colorsTexture = Lk.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, cb) : Lk.PrepareEmptyColorsTexture(cb), this.markAllDefinesAsDirty()
      }
      copyTo(bb) {
        const cb = bb;
        cb.colorsTexture?.dispose(), this._colors && (cb.colorsTexture = Lk.CreateColorsTexture(`${cb._material.name}-colors-texture`, this._colors, cb.colorsSampling, this._scene)), cb.setColor(this.color, !0), cb.colorsDistributionType = this.colorsDistributionType, cb.colorsSampling = this.colorsSampling, cb.colorMode = this.colorMode, cb.useColors = this.useColors, cb.visibility = this.visibility, cb.useDash = this.useDash, cb.dashCount = this.dashCount, cb.dashRatio = this.dashRatio, cb.dashOffset = this.dashOffset, cb.width = this.width, cb.sizeAttenuation = this.sizeAttenuation, cb.resolution = this.resolution, cb.markAllDefinesAsDirty()
      }
      _isGLSL(bb) {
        return 0 === bb || this._forceGLSL
      }
    }
    Yk.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", Yk.ForceGLSL = !1;
    var hk = sb(39835),
      Jk = sb(39848),
      gk = sb(38279),
      Bk = sb(39889),
      tk = sb(39248);
    class yk extends Bk.q {
      constructor(bb, cb, kb) {
        const Wb = cb.Sm(),
          ab = Wb.isWebGPU && !(kb.forceGLSL || yk.ForceGLSL),
          Tb = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        cb.useRightHandedSystem && Tb.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const Ub = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        kb.cameraFacing ? (Tb.push("GREASED_LINE_CAMERA_FACING"), Ub.push("grl_previousAndSide", "grl_nextAndCounters")) : (Ub.push("grl_slopes"), Ub.push("grl_counters"));
        const Ib = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (ab || Ib.push("world", "viewProjection", "view", "projection"), super(bb, cb, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: ab ? ["Scene", "Mesh"] : void 0,
            attributes: Ub,
            uniforms: Ib,
            samplers: ab ? [] : ["grlColors"],
            defines: Tb,
            extraInitializationsAsync: async () => {
              ab ? await Promise.all([sb.e(324).then((() => sb(61306))), sb.e(383).then((() => sb(61312)))]) : await Promise.all([sb.e(317).then((() => sb(61319))), sb.e(384).then((() => sb(61324)))])
            },
            shaderLanguage: ab ? 1 : 0
          }), this._color = ob.e.White(), this._colorsDistributionType = 0, this._colorsTexture = null, kb = kb || {
            color: Qk.DEFAULT_COLOR
          }, this.visibility = kb.visibility ?? 1, this.useDash = kb.useDash ?? !1, this.dashRatio = kb.dashRatio ?? .5, this.dashOffset = kb.dashOffset ?? 0, this.dashCount = kb.dashCount ?? 1, this.width = kb.width ? kb.width : kb.sizeAttenuation && kb.cameraFacing ? Qk.DEFAULT_WIDTH_ATTENUATED : Qk.DEFAULT_WIDTH, this.sizeAttenuation = kb.sizeAttenuation ?? !1, this.color = kb.color ?? ob.e.White(), this.useColors = kb.useColors ?? !1, this.colorsDistributionType = kb.colorDistributionType ?? 0, this.colorsSampling = kb.colorsSampling ?? ub.e.NEAREST_NEAREST, this.colorMode = kb.colorMode ?? 0, this._colors = kb.colors ?? null, this._cameraFacing = kb.cameraFacing ?? !0, this.resolution = kb.resolution ?? new Zb.n(Wb.getRenderWidth(), Wb.getRenderHeight()), kb.colorsTexture ? this.colorsTexture = kb.colorsTexture : this._colors ? this.colorsTexture = Lk.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, cb) : (this._color = this._color ?? Qk.DEFAULT_COLOR, this.colorsTexture = Lk.PrepareEmptyColorsTexture(cb)), ab) {
          const bb = new tk.e;
          bb.setParameters(), bb.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", bb)
        }
        Wb.ZY.add((() => {
          Lk.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== Qk.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Zb.n(this._colorMode, this._colorsDistributionType))
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const kb = this._colors?.length ?? 0;
        if (this._colors = bb, null !== bb && 0 !== bb.length) {
          if (!cb || sb)
            if (this._colorsTexture && kb === bb.length && !sb) {
              const cb = Lk.Color3toRGBAUint8(bb);
              this._colorsTexture.update(cb)
            } else this._colorsTexture && this._colorsTexture !== Qk.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = Lk.CreateColorsTexture(`${this.name}-colors-texture`, bb, this.colorsSampling, this.EY())
        } else {
          this._colorsTexture && this._colorsTexture !== Qk.EmptyColorsTexture && this._colorsTexture.dispose();
          const bb = this.EY();
          bb && (this.colorsTexture = Lk.PrepareEmptyColorsTexture(bb))
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
        this._useColors = bb, this.setFloat("grlUseColors", Lk.BooleanToNumber(bb))
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
        this._useDash = bb, this.setFloat("grlUseDash", Lk.BooleanToNumber(bb))
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
        this._sizeAttenuation = bb, this.setFloat("grlSizeAttenuation", Lk.BooleanToNumber(bb))
      }
      get color() {
        return this._color
      }
      set color(bb) {
        this.setColor(bb)
      }
      setColor(bb) {
        bb = bb ?? Qk.DEFAULT_COLOR, this._color = bb, this.setColor3("grlColor", bb)
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
          cb = {
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
        return this._colors && (cb.colors = this._colors), bb.greasedLineMaterialOptions = cb, bb
      }
      parse(bb, cb, sb) {
        const kb = bb.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), kb.color && (this.color = kb.color), kb.colorDistributionType && (this.colorsDistributionType = kb.colorDistributionType), kb.colorsSampling && (this.colorsSampling = kb.colorsSampling), kb.colorMode && (this.colorMode = kb.colorMode), kb.useColors && (this.useColors = kb.useColors), kb.visibility && (this.visibility = kb.visibility), kb.useDash && (this.useDash = kb.useDash), kb.dashCount && (this.dashCount = kb.dashCount), kb.dashRatio && (this.dashRatio = kb.dashRatio), kb.dashOffset && (this.dashOffset = kb.dashOffset), kb.width && (this.width = kb.width), kb.sizeAttenuation && (this.sizeAttenuation = kb.sizeAttenuation), kb.resolution && (this.resolution = kb.resolution), kb.colors ? this.colorsTexture = Lk.CreateColorsTexture(`${this.name}-colors-texture`, kb.colors, this.colorsSampling, this.EY()) : this.colorsTexture = Lk.PrepareEmptyColorsTexture(cb), this._cameraFacing = kb.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var Pk, Dk, Ek;
    yk.ForceGLSL = !1,
      function(bb) {
        bb[bb.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", bb[bb.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(Pk || (Pk = {})),
      function(bb) {
        bb[bb.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", bb[bb.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", bb[bb.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(Dk || (Dk = {})),
      function(bb) {
        bb[bb.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", bb[bb.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", bb[bb.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", bb[bb.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", bb[bb.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(Ek || (Ek = {}));
    class ik extends hk.b {
      constructor(bb, cb, sb) {
        super(bb, cb, null, null, !1, !1), this.name = bb, this._options = sb, this._lazy = !1, this._updatable = !1, this._engine = cb.Sm(), this._lazy = sb.lazy ?? !1, this._updatable = sb.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = sb.colorPointers ?? [], this._widths = sb.widths ?? new Array(sb.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(bb) {
        let cb = 0;
        for (const kb of this._points) cb += kb.length;
        const sb = cb / 3 * 2 - this._widths.length;
        for (let kb = 0; kb < sb; kb++) this._widths.push(bb)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.jm && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(bb, cb) {
        for (const sb of bb) this._points.push(sb);
        this._lazy || this.setPoints(this._points, cb)
      }
      dispose(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(bb, cb)
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
        this.material instanceof yk && this.material.setDefine("GREASED_LINE_USE_OFFSETS", bb?.length > 0), this._offsets = bb, this._offsetsBuffer ? this._offsetsBuffer.update(bb) : this._createOffsetsBuffer(bb)
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
        if (this.material && this.material instanceof yk) return this.material;
        const bb = this.material?.pluginManager?.getPlugin(Yk.GREASED_LINE_MATERIAL_NAME);
        return bb || void 0
      }
      get points() {
        const bb = [];
        return gk.c.DeepCopy(this._points, bb), bb
      }
      setPoints(bb, cb) {
        this._points = Lk.ConvertPoints(bb, cb?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), cb?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, cb)
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
        const cb = new Jk.e;
        return cb.positions = this._vertexPositions, cb.indices = this._indices, cb.uvs = this._uvs, bb && (cb.normals = [], Jk.e.ComputeNormals(this._vertexPositions, this._indices, cb.normals)), cb.applyToMesh(this, this._options.updatable), cb
      }
      _createOffsetsBuffer(bb) {
        const cb = this._scene.Sm(),
          sb = new zb.b(cb, bb, this._updatable, 3);
        this.setVerticesBuffer(sb.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = sb
      }
    }
    class Ok {
      constructor(bb, cb) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = bb, this.wasAddedByNoopNode = cb
      }
      getIndicesAccessor(bb, cb, sb, kb, Wb) {
        return this._indicesAccessorMap.get(bb)?.get(cb)?.get(sb)?.get(kb)?.get(Wb)
      }
      setIndicesAccessor(bb, cb, sb, kb, Wb, ab) {
        let Tb = this._indicesAccessorMap.get(bb);
        Tb || (Tb = new Map, this._indicesAccessorMap.set(bb, Tb));
        let Ub = Tb.get(cb);
        Ub || (Ub = new Map, Tb.set(cb, Ub));
        let Ib = Ub.get(sb);
        Ib || (Ib = new Map, Ub.set(sb, Ib));
        let Hb = Ib.get(kb);
        Hb || (Hb = new Map, Ib.set(kb, Hb)), Hb.set(Wb, ab)
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
      setVertexBufferView(bb, cb) {
        this._vertexBufferViewMap.set(bb, cb)
      }
      setRemappedBufferView(bb, cb, sb) {
        this._remappedBufferView.set(bb, new Map), this._remappedBufferView.get(bb).set(cb, sb)
      }
      getRemappedBufferView(bb, cb) {
        return this._remappedBufferView.get(bb)?.get(cb)
      }
      getVertexAccessor(bb, cb, sb) {
        return this._vertexAccessorMap.get(bb)?.get(cb)?.get(sb)
      }
      setVertexAccessor(bb, cb, sb, kb) {
        let Wb = this._vertexAccessorMap.get(bb);
        Wb || (Wb = new Map, this._vertexAccessorMap.set(bb, Wb));
        let ab = Wb.get(cb);
        ab || (ab = new Map, Wb.set(cb, ab)), ab.set(sb, kb)
      }
      hasVertexColorAlpha(bb) {
        return this._vertexMapColorAlpha.get(bb) || !1
      }
      setHasVertexColorAlpha(bb, cb) {
        return this._vertexMapColorAlpha.set(bb, cb)
      }
      getMesh(bb) {
        return this._meshMap.get(bb)
      }
      setMesh(bb, cb) {
        this._meshMap.set(bb, cb)
      }
      bindMorphDataToMesh(bb, cb) {
        const sb = this._meshMorphTargetMap.get(bb) || [];
        this._meshMorphTargetMap.set(bb, sb), -1 === sb.indexOf(cb) && sb.push(cb)
      }
      getMorphTargetsFromMesh(bb) {
        return this._meshMorphTargetMap.get(bb)
      }
    }
    class Gk {
      _ApplyExtension(bb, cb, sb, kb) {
        if (sb >= cb.length) return Promise.resolve(bb);
        const Wb = kb(cb[sb], bb);
        return Wb ? Wb.then((async bb => bb ? await this._ApplyExtension(bb, cb, sb + 1, kb) : null)) : this._ApplyExtension(bb, cb, sb + 1, kb)
      }
      _ApplyExtensions(bb, cb) {
        const sb = [];
        for (const kb of Gk._ExtensionNames) sb.push(this._extensions[kb]);
        return this._ApplyExtension(bb, sb, 0, cb)
      }
      _extensionsPostExportNodeAsync(bb, cb, sb, kb, Wb) {
        return this._ApplyExtensions(cb, ((cb, ab) => cb.postExportNodeAsync && cb.postExportNodeAsync(bb, ab, sb, kb, Wb, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(bb, cb, sb) {
        return this._ApplyExtensions(cb, ((cb, kb) => cb.postExportMaterialAsync && cb.postExportMaterialAsync(bb, kb, sb)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(bb, cb, sb) {
        const kb = [];
        return await Promise.all(Gk._ExtensionNames.map((async Wb => {
          const ab = this._extensions[Wb];
          if (ab.postExportMaterialAdditionalTexturesAsync) {
            const Wb = await ab.postExportMaterialAdditionalTexturesAsync(bb, cb, sb);
            kb.push(...Wb)
          }
        }))), kb
      }
      _extensionsPostExportTextures(bb, cb, sb) {
        for (const kb of Gk._ExtensionNames) {
          const Wb = this._extensions[kb];
          Wb.postExportTexture && Wb.postExportTexture(bb, cb, sb)
        }
      }
      _extensionsPostExportMeshPrimitive(bb) {
        for (const cb of Gk._ExtensionNames) {
          const sb = this._extensions[cb];
          sb.postExportMeshPrimitive && sb.postExportMeshPrimitive(bb, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const bb of Gk._ExtensionNames) {
          const cb = this._extensions[bb];
          cb.preGenerateBinaryAsync && await cb.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(bb) {
        for (const cb of Gk._ExtensionNames) {
          const sb = this._extensions[cb];
          sb.enabled && bb(sb)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((bb => {
          var cb, sb, kb;
          bb.wasUsed && ((cb = this._glTF).extensionsUsed || (cb.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(bb.name) && this._glTF.extensionsUsed.push(bb.name), bb.required && ((sb = this._glTF).extensionsRequired || (sb.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(bb.name) && this._glTF.extensionsRequired.push(bb.name)), (kb = this._glTF).extensions || (kb.extensions = {}), bb.onExporting && bb.onExporting())
        }))
      }
      _loadExtensions() {
        for (const bb of Gk._ExtensionNames) {
          const cb = Gk._ExtensionFactories[bb](this);
          this._extensions[bb] = cb
        }
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lb.d.LastCreatedScene,
          cb = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${mb.c.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new Ps(this), this._extensions = {}, this._bufferManager = new Wk, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !bb) throw new Error("No scene available to export");
        this._babylonScene = bb, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: bb => bb?.fY?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...cb
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
      static RegisterExtension(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        Gk.UnregisterExtension(bb) && Wb.Tools.Warn(`Extension with the name ${bb} already exists`), Gk._ExtensionFactories[bb] = cb;
        const kb = sb ?? 0;
        Gk._ExtensionOrders[bb] = kb;
        let ab = Gk._ExtensionNames.length;
        for (let Wb = 0; Wb < Gk._ExtensionNames.length; Wb++) {
          const bb = Gk._ExtensionNames[Wb];
          if (kb < Gk._ExtensionOrders[bb]) {
            ab = Wb;
            break
          }
        }
        Gk._ExtensionNames.splice(ab, 0, bb)
      }
      static UnregisterExtension(bb) {
        if (!Gk._ExtensionFactories[bb]) return !1;
        delete Gk._ExtensionFactories[bb], delete Gk._ExtensionOrders[bb];
        const cb = Gk._ExtensionNames.indexOf(bb);
        return -1 !== cb && Gk._ExtensionNames.splice(cb, 1), !0
      }
      _generateJSON(bb, cb, sb) {
        const kb = {
          byteLength: bb
        };
        return kb.byteLength && (this._glTF.buffers = [kb]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.aQ = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (kb.uri = cb + ".bin"), sb ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(bb) {
        const cb = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const sb = this._generateJSON(cb.byteLength, bb, !0),
          kb = new Blob([cb], {
            type: "application/octet-stream"
          }),
          Wb = bb + ".gltf",
          ab = bb + ".bin",
          Tb = new Hb;
        if (Tb.files[Wb] = sb, Tb.files[ab] = kb, this._imageData)
          for (const Ub in this._imageData) Tb.files[Ub] = this._imageData[Ub];
        return Tb
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(bb) {
        const cb = bb % 4;
        return 0 === cb ? cb : 4 - cb
      }
      async generateGLBAsync(bb) {
        this._shouldUseGlb = !0;
        const cb = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const sb = this._generateJSON(cb.byteLength),
          kb = bb + ".glb";
        let Wb, ab = sb.length;
        if ("undefined" !== typeof TextEncoder) {
          Wb = (new TextEncoder).encode(sb), ab = Wb.length
        }
        const Tb = this._getPadding(ab),
          Ub = this._getPadding(cb.byteLength),
          Ib = 28 + ab + Tb + cb.byteLength + Ub,
          fb = new sk(Ib);
        if (fb.writeUInt32(1179937895), fb.writeUInt32(2), fb.writeUInt32(Ib), fb.writeUInt32(ab + Tb), fb.writeUInt32(1313821514), Wb) fb.writeTypedArray(Wb);
        else {
          const bb = "_".charCodeAt(0);
          for (let cb = 0; cb < ab; ++cb) {
            const kb = sb.charCodeAt(cb);
            kb != sb.codePointAt(cb) ? fb.writeUInt8(bb) : fb.writeUInt8(kb)
          }
        }
        for (let Hb = 0; Hb < Tb; ++Hb) fb.writeUInt8(32);
        fb.writeUInt32(cb.byteLength + Ub), fb.writeUInt32(5130562), fb.writeTypedArray(cb);
        for (let Hb = 0; Hb < Ub; ++Hb) fb.writeUInt8(0);
        const Mb = new Hb;
        return Mb.files[kb] = new Blob([fb.getOutputData()], {
          type: "application/octet-stream"
        }), Mb
      }
      _setNodeTransformation(bb, cb, sb) {
        if (cb.getPivotPoint().equalsWithEpsilon(Ks, is.d) || Wb.Tools.Warn("Pivot points are not supported in the glTF serializer"), !cb.position.equalsWithEpsilon(Ks, is.d)) {
          const Wb = kb.TmpVectors.Fm[0].ssb(cb.position);
          sb && os(Wb), bb.translation = Wb.Osb()
        }
        cb.bl.equalsWithEpsilon(zs, is.d) || (bb.scale = cb.bl.Osb());
        const ab = cb.rotationQuaternion?.clone() || kb.Quaternion.FromEulerAngles(cb.rotation.x, cb.rotation.y, cb.rotation.z);
        ab.equalsWithEpsilon(Zs, is.d) || (sb && Ss(ab), bb.rotation = ab.normalize().Osb())
      }
      _setCameraTransformation(bb, cb, sb) {
        const Wb = kb.TmpVectors.Fm[0],
          ab = kb.TmpVectors.Quaternion[0],
          Tb = cb.getWorldMatrix();
        if (cb.parent) {
          const bb = cb.parent.getWorldMatrix().invertToRef(kb.TmpVectors.Matrix[0]);
          Tb.multiplyToRef(bb, kb.TmpVectors.Matrix[1]).decompose(void 0, ab, Wb)
        } else Tb.decompose(void 0, ab, Wb);
        Wb.equalsWithEpsilon(Ks, is.d) || (sb && os(Wb), bb.translation = Wb.Osb()), sb && Ss(ab), this._babylonScene.useRightHandedSystem || Rs(ab), ab.equalsWithEpsilon(Zs, is.d) || (bb.rotation = ab.Osb())
      }
      _listAvailableCameras() {
        for (const bb of this._babylonScene.cameras) {
          const cb = {
            type: bb.mode === ak.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (bb.name && (cb.name = bb.name), "perspective" === cb.type) cb.perspective = {
            aspectRatio: bb.Sm().getAspectRatio(bb),
            yfov: bb.fovMode === ak.c.FOVMODE_VERTICAL_FIXED ? bb.fov : bb.fov * bb.Sm().getAspectRatio(bb),
            znear: bb.minZ,
            zfar: bb.maxZ
          };
          else if ("orthographic" === cb.type) {
            const sb = bb.orthoLeft && bb.orthoRight ? .5 * (bb.orthoRight - bb.orthoLeft) : .5 * bb.Sm().getRenderWidth(),
              kb = bb.orthoBottom && bb.orthoTop ? .5 * (bb.orthoTop - bb.orthoBottom) : .5 * bb.Sm().getRenderHeight();
            cb.orthographic = {
              xmag: sb,
              ymag: kb,
              znear: bb.minZ,
              zfar: bb.maxZ
            }
          }
          this._camerasMap.set(bb, cb)
        }
      }
      _exportAndAssignCameras() {
        const bb = Array.from(this._camerasMap.values());
        for (const cb of bb) {
          const bb = this._nodesCameraMap.get(cb);
          if (void 0 !== bb) {
            this._cameras.push(cb);
            for (const cb of bb) cb.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const bb of this._babylonScene.skeletons) {
          if (bb.bones.length <= 0) continue;
          const cb = {
            joints: []
          };
          this._skinMap.set(bb, cb)
        }
      }
      _exportAndAssignSkeletons(bb) {
        for (const sb of this._babylonScene.skeletons) {
          if (sb.bones.length <= 0) continue;
          const ab = this._skinMap.get(sb);
          if (void 0 == ab) continue;
          const Tb = {};
          let Ub = -1;
          for (let bb = 0; bb < sb.bones.length; ++bb) {
            const cb = sb.bones[bb],
              kb = cb.getIndex() ?? bb; - 1 !== kb && (Tb[kb] = cb, kb > Ub && (Ub = kb))
          }
          const Ib = [];
          for (let sb = 0; sb <= Ub; ++sb) {
            const Ub = Tb[sb],
              Hb = Ub.getTransformNode(),
              fb = Hb ? this._nodeMap.get(Hb) : void 0;
            if (void 0 === fb) {
              Wb.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            ab.joints.push(fb);
            const Mb = Ub.getAbsoluteInverseBindMatrix().clone();
            bb.has(Hb) && (cb = Mb, Os.invertToRef(kb.TmpVectors.Matrix[0]).multiplyToRef(cb, cb).multiplyToRef(Os, cb)), Ib.push(Mb)
          }
          const Hb = this._nodesSkinMap.get(ab);
          if (ab.joints.length > 0 && void 0 !== Hb) {
            const bb = new Float32Array(16 * Ib.length);
            Ib.forEach(((cb, sb) => {
              bb.set(cb.m, 16 * sb)
            }));
            const cb = this._bufferManager.createBufferView(bb);
            this._accessors.push(this._bufferManager.createAccessor(cb, "MAT4", 5126, Ib.length)), ab.inverseBindMatrices = this._accessors.length - 1, this._skins.push(ab);
            const sb = this._skins.length - 1;
            for (const kb of Hb) kb.skin = sb
          }
        }
        var cb
      }
      async _exportSceneAsync() {
        const bb = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const cb = this._options.metadataSelector(this._babylonScene.metadata);
          cb && (bb.extras = cb)
        }
        const cb = new Array,
          sb = new Array,
          kb = new Array,
          Wb = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let ab;
        if (Wb && !this._options.includeCoordinateSystemConversionNodes)
          for (const Hb of this._babylonScene.animationGroups)
            for (const bb of Hb.targetedAnimations) {
              const cb = bb.target;
              cb instanceof Mb.c && !cb.parent && (ab ?? (ab = new Set)).add(cb)
            }
        for (const Hb of this._babylonScene.rootNodes) {
          const bb = Hb.animations,
            Tb = !!bb && bb.length > 0 || ab?.has(Hb);
          Wb && !this._options.includeCoordinateSystemConversionNodes && Gs(Hb, this._babylonScene.useRightHandedSystem) && !Tb ? kb.push(...Hb.getChildren()) : this._babylonScene.useRightHandedSystem ? cb.push(Hb) : sb.push(Hb)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const Tb = new Ok(!0, !1);
        bb.nodes.push(...await this._exportNodesAsync(sb, Tb));
        const Ub = new Ok(!1, !1);
        bb.nodes.push(...await this._exportNodesAsync(cb, Ub));
        const Ib = new Ok(!1, !0);
        bb.nodes.push(...await this._exportNodesAsync(kb, Ib)), bb.nodes.length && this._scenes.push(bb), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(Tb.getNodesSet()), this._babylonScene.animationGroups.length && nk._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Tb.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(bb) {
        return this._nodeMap.get(bb)
      }
      _getAnimationIndex(bb) {
        return this._animationGroupMap.get(bb)
      }
      _getCameraIndex(bb) {
        const cb = this._camerasMap.get(bb);
        if (!cb) return;
        const sb = this._cameras.indexOf(cb);
        return sb >= 0 ? sb : void 0
      }
      _getMaterialIndex(bb) {
        return this._materialMap.get(bb)
      }
      _getRootIndex(bb, cb) {
        switch (bb) {
          case "nodes":
            return this._getNodeIndex(cb);
          case "animations":
            return this._getAnimationIndex(cb);
          case "cameras":
            return this._getCameraIndex(cb);
          case "materials":
            return this._getMaterialIndex(cb);
          case "meshes": {
            const bb = this._getNodeIndex(cb);
            return void 0 === bb ? void 0 : this._nodes[bb]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(cb)?.index;
          case "images": {
            const bb = this._materialExporter.getTextureInfo(cb)?.index;
            if (void 0 === bb) return;
            const sb = this._textures[bb];
            for (const cb of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const bb = sb?.extensions?.[cb]?.source;
              if ("number" === typeof bb) return bb
            }
            return sb?.source
          }
          case "samplers": {
            const bb = this._materialExporter.getTextureInfo(cb)?.index;
            return void 0 === bb ? void 0 : this._textures[bb]?.sampler
          }
          case "skins": {
            const bb = this._skinMap.get(cb),
              sb = bb ? this._skins.indexOf(bb) : -1;
            return sb >= 0 ? sb : void 0
          }
          case "scenes":
            return cb === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(bb, cb, sb) {
        const kb = this._nodes[bb];
        if (!kb) throw new Error(`Cannot write ${cb}: glTF node ${bb} does not exist.`);
        kb.extensions || (kb.extensions = {}), kb.extensions[cb] = sb
      }
      _shouldExportNode(bb) {
        let cb = this._shouldExportNodeMap.get(bb);
        return void 0 === cb && (cb = this._options.shouldExportNode(bb), this._shouldExportNodeMap.set(bb, cb)), cb
      }
      async _exportNodesAsync(bb, cb) {
        const sb = new Array;
        this._exportBuffers(bb, cb);
        for (const kb of bb) await this._exportNodeAsync(kb, sb, cb);
        return sb
      }
      _collectBuffers(bb, cb, sb, kb, Wb) {
        if (this._shouldExportNode(bb) && bb instanceof Xb.d && bb.geometry) {
          const ab = bb.geometry.getVertexBuffers();
          if (ab)
            for (const kb in ab) {
              if (!ws(kb)) continue;
              const Tb = ab[kb];
              Wb.setHasVertexColorAlpha(Tb, bb.hasVertexAlpha);
              const Ub = Tb._buffer,
                Ib = cb.get(Ub) || [];
              cb.set(Ub, Ib), -1 === Ib.indexOf(Tb) && Ib.push(Tb);
              const Hb = sb.get(Tb) || [];
              sb.set(Tb, Hb), -1 === Hb.indexOf(bb) && Hb.push(bb)
            }
          const Tb = bb.morphTargetManager;
          if (Tb)
            for (let cb = 0; cb < Tb.numTargets; cb++) {
              const sb = Tb.getTarget(cb),
                Wb = kb.get(sb) || [];
              kb.set(sb, Wb), -1 === Wb.indexOf(bb) && Wb.push(bb)
            }
        }
        for (const ab of bb.getChildren()) this._collectBuffers(ab, cb, sb, kb, Wb)
      }
      _exportBuffers(bb, cb) {
        const sb = new Map,
          kb = new Map,
          Wb = new Map;
        for (const Ub of bb) this._collectBuffers(Ub, sb, kb, Wb, cb);
        const ab = Array.from(sb.keys());
        for (const Ub of ab) {
          const bb = Ub.getData();
          if (!bb) throw new Error("Buffer data is not available");
          const Wb = sb.get(Ub);
          if (!Wb) continue;
          const ab = Wb[0].byteStride;
          if (Wb.some((bb => bb.byteStride !== ab))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const Tb = xs(bb).slice();
          for (const cb of Wb) {
            const bb = kb.get(cb),
              {
                byteOffset: sb,
                byteStride: Wb,
                componentCount: ab,
                type: Ub,
                count: Ib,
                normalized: Hb,
                kind: Mb
              } = ds(cb, bb);
            switch (Mb) {
              case fb.f.NormalKind:
              case fb.f.TangentKind:
                (0, Ds.j)(Tb, sb, Wb, ab, Ub, Ib, Hb, (bb => {
                  const cb = Math.sqrt(bb[0] * bb[0] + bb[1] * bb[1] + bb[2] * bb[2]);
                  if (cb > 0) {
                    const sb = 1 / cb;
                    bb[0] *= sb, bb[1] *= sb, bb[2] *= sb
                  }
                }));
                break;
              case fb.f.ColorKind: {
                const cb = bb.filter((bb => bb.material instanceof Uk.StandardMaterial || null == bb.material)).length;
                if (0 == cb) break;
                if (cb != bb.length) {
                  Bb.c.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                Ub == fb.f.UNSIGNED_BYTE && Bb.c.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const kb = new Qb.Color3,
                  Mb = new Qb.e,
                  Xb = this._babylonScene.Sm().useExactSrgbConversions;
                (0, Ds.j)(Tb, sb, Wb, ab, Ub, Ib, Hb, (bb => {
                  3 === bb.length ? (kb.Ncb(bb, 0), kb.toLinearSpaceToRef(kb, Xb), kb.toArray(bb, 0)) : (Mb.Ncb(bb, 0), Mb.toLinearSpaceToRef(Mb, Xb), Mb.toArray(bb, 0))
                }))
              }
            }
          }
          if (cb.convertToRightHanded) {
            for (const bb of Wb) {
              const cb = kb.get(bb),
                {
                  byteOffset: sb,
                  byteStride: Wb,
                  componentCount: ab,
                  type: Ub,
                  count: Ib,
                  normalized: Hb,
                  kind: Mb
                } = ds(bb, cb);
              switch (Mb) {
                case fb.f.PositionKind:
                case fb.f.NormalKind:
                case fb.f.TangentKind:
                  (0, Ds.j)(Tb, sb, Wb, ab, Ub, Ib, Hb, (bb => {
                    bb[0] = -bb[0]
                  }))
              }
            }
            cb.convertedToRightHandedBuffers.set(Ub, Tb)
          }
          const Ib = this._bufferManager.createBufferView(Tb, ab);
          cb.setVertexBufferView(Ub, Ib);
          const Hb = new Map;
          for (const cb of Wb) {
            const bb = kb.get(cb),
              {
                kind: sb,
                totalVertices: Wb
              } = ds(cb, bb);
            switch (sb) {
              case fb.f.MatricesIndicesKind:
              case fb.f.MatricesIndicesExtraKind:
                if (cb.type == fb.f.FLOAT) {
                  const bb = cb.getFloatData(Wb);
                  null !== bb && Hb.set(cb, bb)
                }
            }
          }
          0 !== Hb.size && Bb.c.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const Mb = Array.from(Hb.keys());
          for (const sb of Mb) {
            const bb = Hb.get(sb);
            if (!bb) continue;
            const kb = bb.some((bb => bb >= 256)),
              Wb = new(kb ? Uint16Array : Uint8Array)(bb.length);
            for (let cb = 0; cb < bb.length; cb++) Wb[cb] = bb[cb];
            const ab = this._bufferManager.createBufferView(Wb, 4 * (kb ? 2 : 1));
            cb.setRemappedBufferView(Ub, sb, ab)
          }
        }
        const Tb = Array.from(Wb.keys());
        for (const Ub of Tb) {
          const bb = Wb.get(Ub);
          if (!bb) continue;
          const sb = mk(Ub, bb[0], this._bufferManager, this._bufferViews, this._accessors, cb.convertToRightHanded);
          for (const kb of bb) cb.bindMorphDataToMesh(kb, sb)
        }
      }
      async _exportNodeAsync(bb, cb, sb) {
        let kb = this._nodeMap.get(bb);
        if (void 0 !== kb) return void(cb.includes(kb) || cb.push(kb));
        const Wb = await this._createNodeAsync(bb, sb);
        if (Wb) {
          kb = this._nodes.length, this._nodes.push(Wb), this._nodeMap.set(bb, kb), sb.pushExportedNode(bb), cb.push(kb);
          const ab = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            Tb = [];
          this._babylonScene.animationGroups.length || (nk._CreateMorphTargetAnimationFromMorphTargetAnimations(bb, ab, Tb, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, sb.convertToRightHanded, this._options.shouldExportAnimation), bb.animations.length && nk._CreateNodeAnimationFromNodeAnimations(bb, ab, Tb, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, sb.convertToRightHanded, this._options.shouldExportAnimation)), ab.channels.length && ab.samplers.length && this._animations.push(ab), Tb.forEach((bb => {
            bb.channels.length && bb.samplers.length && this._animations.push(bb)
          }))
        }
        const ab = Wb ? [] : cb;
        for (const Tb of bb.getChildren()) await this._exportNodeAsync(Tb, ab, sb);
        Wb && ab.length && (Wb.children = ab)
      }
      async _createNodeAsync(bb, cb) {
        if (!this._shouldExportNode(bb)) return null;
        const sb = {};
        if (bb.name && (sb.name = bb.name), bb.metadata) {
          const cb = this._options.metadataSelector(bb.metadata);
          cb && (sb.extras = cb)
        }
        if (bb instanceof Mb.c && (this._setNodeTransformation(sb, bb, cb.convertToRightHanded), bb instanceof Xb.d)) {
          const kb = bb instanceof nb.c ? bb.Pkb : bb;
          if (kb.XV && kb.XV.length > 0 && (sb.mesh = await this._exportMeshAsync(kb, cb)), bb.skeleton) {
            const cb = this._skinMap.get(bb.skeleton);
            void 0 !== cb && (void 0 === this._nodesSkinMap.get(cb) && this._nodesSkinMap.set(cb, []), this._nodesSkinMap.get(cb)?.push(sb))
          }
        }
        if (bb instanceof Es.f) {
          const kb = this._camerasMap.get(bb);
          if (kb) {
            void 0 === this._nodesCameraMap.get(kb) && this._nodesCameraMap.set(kb, []), this._setCameraTransformation(sb, bb, cb.convertToRightHanded);
            const Wb = bb.parent;
            if (null !== Wb && Fs(bb, Wb)) {
              const bb = this._nodeMap.get(Wb);
              if (void 0 !== bb) {
                const cb = this._nodes[bb];
                return vs(sb, cb), this._nodesCameraMap.get(kb)?.push(cb), null
              }
            }
            this._nodesCameraMap.get(kb)?.push(sb)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", sb, bb, this._nodeMap, cb.convertToRightHanded) ? sb : (Bb.c.Warn(`Not exporting node ${bb.name}`), null)
      }
      _exportIndices(bb, cb, sb, kb, Wb, Tb, Ub, Ib, Hb) {
        let fb = null;
        Hb.mode = function(bb) {
          switch (bb) {
            case ab.e.TriangleFillMode:
              return 4;
            case ab.e.TriangleStripDrawMode:
              return 5;
            case ab.e.TriangleFanDrawMode:
              return 6;
            case ab.e.PointListDrawMode:
            case ab.e.PointFillMode:
              return 0;
            case ab.e.LineLoopDrawMode:
              return 2;
            case ab.e.LineListDrawMode:
              return 1;
            case ab.e.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${bb}`)
        }(Tb);
        const Mb = Ub !== ab.e.CounterClockWiseSideOrientation && function(bb) {
          switch (bb) {
            case ab.e.TriangleFillMode:
            case ab.e.TriangleStripDrawMode:
            case ab.e.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(Tb);
        if (Mb) {
          if (Tb === ab.e.TriangleStripDrawMode || Tb === ab.e.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const Ub = cb ? new Uint32Array(kb) : new Uint16Array(kb);
          if (bb)
            for (let cb = 0; cb + 2 < kb; cb += 3) Ub[cb] = bb[sb + cb] + Wb, Ub[cb + 1] = bb[sb + cb + 2] + Wb, Ub[cb + 2] = bb[sb + cb + 1] + Wb;
          else
            for (let bb = 0; bb + 2 < kb; bb += 3) Ub[bb] = bb, Ub[bb + 1] = bb + 2, Ub[bb + 2] = bb + 1;
          fb = Ub
        } else if (bb && 0 !== Wb) {
          const ab = cb ? new Uint32Array(kb) : new Uint16Array(kb);
          for (let cb = 0; cb < kb; cb++) ab[cb] = bb[sb + cb] + Wb;
          fb = ab
        } else bb && (fb = function(bb, cb, sb, kb) {
          let Wb = bb;
          return 0 === cb && sb === bb.length || (Wb = Array.isArray(bb) ? bb.slice(cb, cb + sb) : bb.subarray(cb, cb + sb)), Wb instanceof Int32Array ? new Uint32Array(Wb.buffer, Wb.byteOffset, Wb.length) : Array.isArray(Wb) ? kb ? new Uint32Array(Wb) : new Uint16Array(Wb) : Wb
        }(bb, sb, kb, cb));
        if (fb) {
          let ab = Ib.getIndicesAccessor(bb, sb, kb, Wb, Mb);
          if (void 0 === ab) {
            const Tb = this._bufferManager.createBufferView(fb),
              Ub = cb ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(Tb, "SCALAR", Ub, kb, 0)), ab = this._accessors.length - 1, Ib.setIndicesAccessor(bb, sb, kb, Wb, Mb, ab)
          }
          Hb.indices = ab
        }
      }
      _exportVertexBuffer(bb, cb, sb, kb, Wb, ab) {
        const Tb = bb.getKind();
        if (!ws(Tb)) return;
        if (Tb.startsWith("uv") && !this._options.exportUnusedUVs && (!cb || !this._materialNeedsUVsSet.has(cb))) return;
        let Ub = Wb.getVertexAccessor(bb, sb, kb);
        if (void 0 === Ub) {
          const cb = Wb.convertedToRightHandedBuffers.get(bb._buffer) || bb._buffer.getData(),
            ab = Tb === fb.f.PositionKind ? function(bb, cb, sb, kb) {
              const {
                byteOffset: Wb,
                byteStride: ab,
                type: Tb,
                normalized: Ub
              } = cb, Ib = cb.getSize(), Hb = new Array(Ib).fill(1 / 0), fb = new Array(Ib).fill(-1 / 0);
              return (0, Ds.j)(bb, Wb + sb * ab, ab, Ib, Tb, kb * Ib, Ub, (bb => {
                for (let cb = 0; cb < Ib; cb++) Hb[cb] = Math.min(Hb[cb], bb[cb]), fb[cb] = Math.max(fb[cb], bb[cb])
              })), {
                min: Hb,
                max: fb
              }
            }(cb, bb, sb, kb) : void 0,
            Ib = (Tb === fb.f.MatricesIndicesKind || Tb === fb.f.MatricesIndicesExtraKind) && bb.type === fb.f.FLOAT,
            Hb = Ib ? fb.f.UNSIGNED_BYTE : bb.type,
            Mb = Ib ? void 0 : bb.normalized,
            Xb = Ib ? Wb.getRemappedBufferView(bb._buffer, bb) : Wb.getVertexBufferView(bb._buffer),
            nb = bb.byteOffset + sb * bb.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(Xb, function(bb, cb) {
            if (bb == fb.f.ColorKind) return cb ? "VEC4" : "VEC3";
            switch (bb) {
              case fb.f.PositionKind:
              case fb.f.NormalKind:
                return "VEC3";
              case fb.f.TangentKind:
              case fb.f.MatricesIndicesKind:
              case fb.f.MatricesIndicesExtraKind:
              case fb.f.MatricesWeightsKind:
              case fb.f.MatricesWeightsExtraKind:
                return "VEC4";
              case fb.f.UVKind:
              case fb.f.UV2Kind:
              case fb.f.UV3Kind:
              case fb.f.UV4Kind:
              case fb.f.UV5Kind:
              case fb.f.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${bb}`)
          }(Tb, Wb.hasVertexColorAlpha(bb)), Hb, kb, nb, ab, Mb)), Ub = this._accessors.length - 1, Wb.setVertexAccessor(bb, sb, kb, Ub)
        }
        ab.attributes[function(bb) {
          switch (bb) {
            case fb.f.PositionKind:
              return "POSITION";
            case fb.f.NormalKind:
              return "NORMAL";
            case fb.f.TangentKind:
              return "TANGENT";
            case fb.f.ColorKind:
              return "COLOR_0";
            case fb.f.UVKind:
              return "TEXCOORD_0";
            case fb.f.UV2Kind:
              return "TEXCOORD_1";
            case fb.f.UV3Kind:
              return "TEXCOORD_2";
            case fb.f.UV4Kind:
              return "TEXCOORD_3";
            case fb.f.UV5Kind:
              return "TEXCOORD_4";
            case fb.f.UV6Kind:
              return "TEXCOORD_5";
            case fb.f.MatricesIndicesKind:
              return "JOINTS_0";
            case fb.f.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case fb.f.MatricesWeightsKind:
              return "WEIGHTS_0";
            case fb.f.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${bb}`)
        }(Tb)] = Ub
      }
      async _exportMaterialAsync(bb, cb, sb, kb) {
        let Wb = this._materialMap.get(bb);
        if (void 0 === Wb) {
          const kb = cb && Object.keys(cb).some((bb => bb.startsWith("uv")));
          if ((bb = bb instanceof Tk.d ? bb.X3[sb.materialIndex] : bb) instanceof uc) Wb = await this._materialExporter.exportPBRMaterialAsync(bb, kb);
          else if (bb instanceof Uk.StandardMaterial) Wb = await this._materialExporter.exportStandardMaterialAsync(bb, kb);
          else {
            if (!(bb instanceof jc)) return void Bb.c.Warn(`Unsupported material '${bb.name}' with type ${bb.getClassName()}`);
            Wb = await this._materialExporter.exportOpenPBRMaterialAsync(bb, kb)
          }
          this._materialMap.set(bb, Wb)
        }
        kb.material = Wb
      }
      async _exportMeshAsync(bb, cb) {
        let sb = cb.getMesh(bb);
        if (void 0 !== sb) return sb;
        const kb = {
          primitives: []
        };
        sb = this._meshes.length, this._meshes.push(kb), cb.setMesh(bb, sb);
        const Wb = bb.isUnIndexed ? null : bb.Gsb(),
          Tb = bb.geometry?.getVertexBuffers(),
          Ub = cb.getMorphTargetsFromMesh(bb),
          Ib = bb instanceof lk.d,
          Hb = bb instanceof ik,
          fb = bb.XV;
        if (Tb && fb && fb.length > 0)
          for (const Mb of fb) {
            const sb = {
                attributes: {}
              },
              fb = Mb.pm() || this._babylonScene.defaultMaterial;
            if (Hb) {
              const cb = {
                  name: fb.name
                },
                kb = bb,
                Wb = Qb.Color3.White(),
                ab = kb.material?.alpha ?? 1,
                Tb = kb.greasedLineMaterial?.color ?? Wb;
              (!Tb.equalsWithEpsilon(Wb, is.d) || ab < 1) && (cb.pbrMetallicRoughness = {
                baseColorFactor: [...Tb.Osb(), ab]
              }), this._materials.push(cb), sb.material = this._materials.length - 1
            } else if (Ib) {
              const cb = {
                  name: fb.name
                },
                kb = bb;
              (!kb.color.equalsWithEpsilon(Qb.Color3.White(), is.d) || kb.alpha < 1) && (cb.pbrMetallicRoughness = {
                baseColorFactor: [...kb.color.Osb(), kb.alpha]
              }), this._materials.push(cb), sb.material = this._materials.length - 1
            } else await this._exportMaterialAsync(fb, Tb, Mb, sb);
            const Xb = Ib || Hb ? ab.e.LineListDrawMode : bb.overrideRenderingFillMode ?? fb.fillMode;
            let nb = fb._getEffectiveOrientation(bb);
            cb.wasAddedByNoopNode && !bb.EY().useRightHandedSystem && (nb = nb === ab.e.ClockWiseSideOrientation ? ab.e.CounterClockWiseSideOrientation : ab.e.ClockWiseSideOrientation), this._exportIndices(Wb, Wb ? (0, Ds.e)(Wb, Mb.indexCount, Mb.indexStart, Mb.verticesStart) : Mb.verticesCount > 65535, Wb ? Mb.indexStart : Mb.verticesStart, Wb ? Mb.indexCount : Mb.verticesCount, -Mb.verticesStart, Xb, nb, cb, sb);
            for (const bb of Object.values(Tb)) this._exportVertexBuffer(bb, fb, Mb.verticesStart, Mb.verticesCount, cb, sb);
            if (Ub) {
              sb.targets = [];
              for (const bb of Ub) sb.targets.push(bb.attributes)
            }
            kb.primitives.push(sb), this._extensionsPostExportMeshPrimitive(sb)
          }
        if (Ub) {
          kb.weights = [], kb.extras || (kb.extras = {}), kb.extras.targetNames = [];
          for (const bb of Ub) kb.weights.push(bb.influence), kb.extras.targetNames.push(bb.name)
        }
        return sb
      }
    }
    Gk._ExtensionNames = new Array, Gk._ExtensionFactories = {}, Gk._ExtensionOrders = {};
    class Kk {
      static async GLTFAsync(bb, cb, sb) {
        sb && sb.exportWithoutWaitingForScene || await bb.whenReadyAsync();
        const kb = new Gk(bb, sb),
          Wb = await kb.generateGLTFAsync(cb.replace(/\.[^/.]+$/, ""));
        return kb.dispose(), Wb
      }
      static async GLBAsync(bb, cb, sb) {
        sb && sb.exportWithoutWaitingForScene || await bb.whenReadyAsync();
        const kb = new Gk(bb, sb),
          Wb = await kb.generateGLBAsync(cb.replace(/\.[^/.]+$/, ""));
        return kb.dispose(), Wb
      }
    }
    const Zk = "EXT_mesh_gpu_instancing";

    function zk(bb, cb) {
      const sb = new Float32Array(3 * cb);
      for (let kb = 0; kb < cb; kb++) sb[3 * kb + 0] = bb[4 * kb + 0], sb[3 * kb + 1] = bb[4 * kb + 1], sb[3 * kb + 2] = bb[4 * kb + 2];
      return sb
    }
    class qk {
      constructor(bb) {
        this.name = Zk, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(bb, cb, sb, kb, Wb, ab) {
        return await new Promise((bb => {
          if (cb && sb instanceof hk.b && sb.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const bb = Zb.p.Zero(),
              kb = Zb.f.Identity(),
              Tb = Zb.p.One(),
              Ub = sb.thinInstanceGetWorldMatrices(),
              Ib = Zb.m.Fm[2],
              Hb = Zb.m.Quaternion[1],
              fb = Zb.m.Fm[3];
            let Mb = !1,
              Xb = !1,
              nb = !1;
            const mb = new Float32Array(3 * sb.W8),
              lb = new Float32Array(4 * sb.W8),
              Qb = new Float32Array(3 * sb.W8);
            let eb = 0;
            for (const cb of Ub) cb.decompose(fb, Hb, Ib), Wb && (os(Ib), Ss(Hb)), mb.set(Ib.Osb(), 3 * eb), lb.set(Hb.normalize().Osb(), 4 * eb), Qb.set(fb.Osb(), 3 * eb), Mb = Mb || !Ib.equalsWithEpsilon(bb), Xb = Xb || !Hb.equalsWithEpsilon(kb), nb = nb || !fb.equalsWithEpsilon(Tb), eb++;
            const Cb = {
              attributes: {}
            };
            Mb && (Cb.attributes.TRANSLATION = this._buildAccessor(mb, "VEC3", sb.W8, ab)), Xb && (Cb.attributes.ROTATION = this._buildAccessor(lb, "VEC4", sb.W8, ab)), nb && (Cb.attributes.SCALE = this._buildAccessor(Qb, "VEC3", sb.W8, ab));
            let Nb = sb._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (Nb) {
              const bb = sb.W8,
                cb = "VEC3";
              sb.hasVertexAlpha && Nb.length === 4 * bb ? (this._instanceColorWarned || (Bb.c.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Nb = zk(Nb, bb)) : Nb.length === 4 * bb && (Nb = zk(Nb, bb)), Nb.length === 3 * bb && (Cb.attributes._COLOR_0 = this._buildAccessor(Nb, cb, bb, ab))
            }
            cb.extensions = cb.extensions || {}, cb.extensions[Zk] = Cb
          }
          bb(cb)
        }))
      }
      _buildAccessor(bb, cb, sb, kb) {
        const Wb = kb.createBufferView(bb),
          ab = kb.createAccessor(Wb, cb, 5126, sb);
        return this._exporter._accessors.push(ab), this._exporter._accessors.length - 1
      }
    }
    let dk = !1;

    function Ak() {
      dk || (dk = !0, Gk.RegisterExtension(Zk, (bb => new qk(bb))))
    }
    sb(39902);
    Ak();
    var wk = sb(41258);

    function rk(bb, cb, sb, kb) {
      const Wb = bb;
      let ab = null,
        Tb = null,
        Ub = null,
        Ib = null;
      const Hb = {},
        fb = cb.find((bb => "POSITION" === bb.dracoName));
      if (!fb) throw new Error("Draco: Missing position attribute for encoding.");
      if (!sb) {
        const bb = fb.data.length / fb.size;
        sb = new(bb > 65535 ? Uint32Array : Uint16Array)(bb);
        for (let cb = 0; cb < bb; cb++) sb[cb] = cb
      }
      try {
        ab = new Wb.Encoder, Tb = new Wb.MeshBuilder, Ub = new Wb.Mesh, Tb.AddFacesToMesh(Ub, sb.length / 3, sb);
        const bb = new Map([
          [Float32Array, (bb, cb, sb, kb, Wb, ab) => bb.AddFloatAttribute(cb, sb, kb, Wb, ab)],
          [Uint32Array, (bb, cb, sb, kb, Wb, ab) => bb.AddUInt32Attribute(cb, sb, kb, Wb, ab)],
          [Uint16Array, (bb, cb, sb, kb, Wb, ab) => bb.AddUInt16Attribute(cb, sb, kb, Wb, ab)],
          [Uint8Array, (bb, cb, sb, kb, Wb, ab) => bb.AddUInt8Attribute(cb, sb, kb, Wb, ab)],
          [Int32Array, (bb, cb, sb, kb, Wb, ab) => bb.AddInt32Attribute(cb, sb, kb, Wb, ab)],
          [Int16Array, (bb, cb, sb, kb, Wb, ab) => bb.AddInt16Attribute(cb, sb, kb, Wb, ab)],
          [Int8Array, (bb, cb, sb, kb, Wb, ab) => bb.AddInt8Attribute(cb, sb, kb, Wb, ab)]
        ]);
        for (const sb of cb) {
          sb.data instanceof Uint8ClampedArray && (sb.data = new Uint8Array(sb.data));
          const cb = bb.get(sb.data.constructor),
            Ib = sb.data.length / sb.size;
          Hb[sb.kind] = cb(Tb, Ub, Wb[sb.dracoName], Ib, sb.size, sb.data), kb.quantizationBits && kb.quantizationBits[sb.dracoName] && ab.SetAttributeQuantization(Wb[sb.dracoName], kb.quantizationBits[sb.dracoName])
        }
        kb.method && ab.SetEncodingMethod(Wb[kb.method]), void 0 !== kb.encodeSpeed && void 0 !== kb.decodeSpeed && ab.SetSpeedOptions(kb.encodeSpeed, kb.decodeSpeed), Ib = new Wb.DracoInt8Array;
        const fb = ab.EncodeMeshToDracoBuffer(Ub, Ib);
        if (fb <= 0) throw new Error("Draco: Failed to encode.");
        const Mb = new Int8Array(fb);
        for (let cb = 0; cb < fb; cb++) Mb[cb] = Ib.GetValue(cb);
        return {
          data: Mb,
          attributeIds: Hb
        }
      } finally {
        Ub && Wb.destroy(Ub), Tb && Wb.destroy(Tb), ab && Wb.destroy(ab), Ib && Wb.destroy(Ib)
      }
    }

    function Sk() {
      let bb;
      onmessage = cb => {
        const sb = cb.data;
        switch (sb.id) {
          case "init": {
            sb.url && importScripts(sb.url);
            const cb = sb.wasmBinary ? {
              wasmBinary: sb.wasmBinary
            } : {};
            bb = DracoEncoderModule(cb), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!bb) throw new Error("Draco: Encoder module is not available.");
            bb.then((bb => {
              const cb = rk(bb, sb.attributes, sb.indices, sb.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: cb
              }, cb ? [cb.data.buffer] : void 0)
            })).catch((bb => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: bb.message
              })
            }))
        }
      }
    }
    class Rk {
      constructor(bb) {
        if (bb.workerPool) return void(this._workerPoolPromise = Promise.resolve(bb.workerPool));
        const cb = bb.wasmBinary,
          sb = bb.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          kb = sb && "function" === typeof Worker && "function" === typeof URL,
          Wb = kb || !bb.jsModule,
          ab = bb.wasmUrl && bb.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Wb ? hc.g.GetBabylonScriptURL(bb.wasmUrl, !0) : "",
            wasmBinaryPromise: cb ? Promise.resolve(cb) : hc.g.LoadFileAsync(hc.g.GetBabylonScriptURL(bb.wasmBinaryUrl, !0))
          } : {
            url: Wb ? hc.g.GetBabylonScriptURL(bb.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        kb ? this._workerPoolPromise = ab.wasmBinaryPromise.then((bb => {
          const cb = this._getWorkerContent(),
            kb = URL.createObjectURL(new Blob([cb], {
              type: "application/javascript"
            }));
          return new wk.c(sb, (() => async function(bb, cb, sb) {
            return await new Promise(((kb, Wb) => {
              const ab = cb => {
                  bb.removeEventListener("error", ab), bb.removeEventListener("message", Tb), Wb(cb)
                },
                Tb = cb => {
                  "initDone" === cb.data.id && (bb.removeEventListener("error", ab), bb.removeEventListener("message", Tb), kb(bb))
                };
              if (bb.addEventListener("error", ab), bb.addEventListener("message", Tb), cb) {
                const kb = cb.slice(0);
                bb.postMessage({
                  id: "init",
                  url: sb,
                  wasmBinary: kb
                }, [kb])
              } else bb.postMessage({
                id: "init",
                url: sb
              })
            }))
          }(new Worker(kb), bb, ab.url)))
        })) : this._modulePromise = ab.wasmBinaryPromise.then((async cb => {
          if (!this._isModuleAvailable() && !bb.jsModule) {
            if (!ab.url) throw new Error("Draco codec module is not available");
            await hc.g.LoadBabylonScriptAsync(ab.url)
          }
          return await this._createModuleAsync(cb, bb.jsModule)
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

    function vk() {
      const bb = bb => !!bb && "object" === typeof bb;
      for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
      return sb.reduce(((cb, sb) => {
        const kb = Object.keys(sb);
        for (const Wb of kb) {
          const kb = cb[Wb],
            ab = sb[Wb];
          Array.isArray(kb) && Array.isArray(ab) ? cb[Wb] = kb.concat(ab) : bb(kb) && bb(ab) ? cb[Wb] = vk(kb, ab) : cb[Wb] = ab
        }
        return cb
      }), {})
    }

    function Fk(bb) {
      return bb === zb.l.PositionKind ? "POSITION" : bb === zb.l.NormalKind ? "NORMAL" : bb === zb.l.ColorKind ? "COLOR" : bb.startsWith(zb.l.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const xk = {
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
    class jk extends Rk {
      static get DefaultAvailable() {
        return !!((bb = jk.DefaultConfiguration).wasmUrl && (bb.wasmBinary || bb.wasmBinaryUrl) && "object" === typeof WebAssembly || bb.fallbackUrl);
        var bb
      }
      static get Default() {
        return jk._Default ?? (jk._Default = new jk), jk._Default
      }
      static ResetDefault(bb) {
        jk._Default && (bb || jk._Default.dispose(), jk._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(bb, cb) {
        return {
          module: await (cb || DracoEncoderModule)({
            wasmBinary: bb
          })
        }
      }
      _getWorkerContent() {
        return `${rk}(${Sk})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jk.DefaultConfiguration)
      }
      async _encodeAsync(bb, cb, sb) {
        const kb = sb ? vk(xk, sb) : xk;
        if (this._workerPoolPromise) {
          const sb = await this._workerPoolPromise;
          return await new Promise(((Wb, ab) => {
            sb.push(((sb, Tb) => {
              const Ub = bb => {
                  sb.removeEventListener("error", Ub), sb.removeEventListener("message", Ib), ab(bb), Tb()
                },
                Ib = bb => {
                  "encodeMeshSuccess" === bb.data.id ? (sb.removeEventListener("error", Ub), sb.removeEventListener("message", Ib), Wb(bb.data.encodedMeshData), Tb()) : "encodeMeshError" === bb.data.id && (sb.removeEventListener("error", Ub), sb.removeEventListener("message", Ib), ab(new Error(bb.data.errorMessage)), Tb())
                };
              sb.addEventListener("error", Ub), sb.addEventListener("message", Ib);
              const Hb = [];
              for (const cb of bb) Hb.push(cb.data.buffer);
              cb && Hb.push(cb.buffer), sb.postMessage({
                id: "encodeMesh",
                attributes: bb,
                indices: cb,
                options: kb
              }, Hb)
            }))
          }))
        }
        if (this._modulePromise) {
          return rk((await this._modulePromise).module, bb, cb, kb)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(bb, cb) {
        if (0 == bb.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        bb instanceof hk.b && bb.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === cb?.method && (Bb.c.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), cb.method = "MESH_SEQUENTIAL_ENCODING");
        const sb = function(bb) {
            let cb = bb.Gsb(void 0, !0);
            return !cb || cb instanceof Uint32Array || cb instanceof Uint16Array || (cb = ((0, Ds.e)(cb, cb.length) ? Uint32Array : Uint16Array).from(cb)), cb
          }(bb),
          kb = function(bb, cb) {
            const sb = [];
            for (const kb of bb.getVerticesDataKinds()) {
              if (cb?.includes(kb)) {
                if (kb === zb.l.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Wb = bb.getVertexBuffer(kb),
                ab = Wb.getSize(),
                Tb = (0, Ds.t)(Wb.getData(), ab, Wb.type, Wb.byteOffset, Wb.byteStride, bb.getTotalVertices(), !0);
              sb.push({
                kind: kb,
                dracoName: Fk(kb),
                size: ab,
                data: Tb
              })
            }
            return sb
          }(bb, cb?.excludedAttributes);
        return await this._encodeAsync(kb, sb, cb)
      }
    }
    jk.DefaultConfiguration = {
      wasmUrl: `${hc.g._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${hc.g._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${hc.g._DefaultCdnUrl}/draco_encoder.js`
    }, jk._Default = null;
    const pk = "KHR_draco_mesh_compression";
    class bW {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = pk, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === bb.options.meshCompressionMethod && jk.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(bb, cb, sb) {
        if (!this.enabled) return;
        if (4 !== bb.mode && 5 !== bb.mode) return void Bb.c.Warn("Cannot compress primitive with mode " + bb.mode + ".");
        const kb = [],
          Wb = [];
        let ab = null;
        if (void 0 !== bb.indices) {
          const Tb = sb[bb.indices],
            Ub = cb.getBufferView(Tb);
          ab = cb.getData(Ub).slice(), kb.push(Ub), Wb.push(Tb)
        }
        const Tb = [];
        for (const [fb, Mb] of Object.entries(bb.attributes)) {
          const bb = sb[Mb],
            ab = cb.getBufferView(bb),
            Ib = As(bb.type),
            Hb = (0, Ds.t)(cb.getData(ab), Ib, bb.componentType, bb.byteOffset || 0, ab.byteStride || (0, Ds.s)(bb.componentType) * Ib, bb.count, !0);
          Tb.push({
            kind: fb,
            dracoName: (Ub = fb, "POSITION" === Ub ? "POSITION" : "NORMAL" === Ub ? "NORMAL" : Ub.startsWith("COLOR") ? "COLOR" : Ub.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: As(bb.type),
            data: Hb
          }), kb.push(ab), Wb.push(bb)
        }
        var Ub;
        const Ib = {
            method: bb.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          Hb = jk.Default._encodeAsync(Tb, ab, Ib).then((sb => {
            const ab = {
                bufferView: -1,
                attributes: sb.attributeIds
              },
              Tb = cb.createBufferView(sb.data);
            cb.setBufferView(ab, Tb);
            for (const bb of kb) this._bufferViewsUsed.add(bb);
            for (const bb of Wb) this._accessorsUsed.add(bb);
            bb.extensions || (bb.extensions = {}), bb.extensions[pk] = ab
          })).catch((bb => {
            Bb.c.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + bb.message)
          }));
        this._encodePromises.push(Hb), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(bb) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((cb => {
          bb.getPropertiesWithBufferView(cb).every((bb => this._accessorsUsed.has(bb))) && bb.removeBufferView(cb)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let cW = !1;

    function sW() {
      cW || (cW = !0, Gk.RegisterExtension(pk, (bb => new bW(bb))))
    }
    sW();
    var kW = sb(40987);
    const WW = "KHR_lights_punctual",
      aW = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      TW = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      UW = Zb.p.Backward();
    class IW {
      constructor(bb) {
        this.name = WW, this.enabled = !0, this.required = !1, this._exporter = bb
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[WW] = this._lights
      }
      async postExportNodeAsync(bb, cb, sb, kb, Wb) {
        return await new Promise((ab => {
          if (!(sb instanceof Xk.b)) return void ab(cb);
          const Tb = sb.getTypeID() == Xk.b.LIGHTTYPEID_POINTLIGHT ? "point" : sb.getTypeID() == Xk.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : sb.getTypeID() == Xk.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!Tb || !(sb instanceof kW.c)) return Bb.c.Warn(`${bb}: Light ${sb.name} is not supported in ${WW}`), void ab(cb);
          if (sb.falloffType !== Xk.b.FALLOFF_GLTF && Bb.c.Warn(`${bb}: Light falloff for ${sb.name} does not match the ${WW} specification!`), !sb.position.CTb(0, 0, 0)) {
            const bb = Zb.m.Fm[0].ssb(sb.position);
            Wb && os(bb), cb.translation = bb.Osb()
          }
          if ("point" !== Tb) {
            const bb = sb.direction.normalizeToRef(Zb.m.Fm[0]);
            Wb && os(bb);
            const kb = Zb.f.FromUnitVectorsToRef(UW, bb, Zb.m.Quaternion[0]);
            Zb.f.IsIdentity(kb) || (cb.rotation = kb.Osb())
          }
          const Ub = {
            type: Tb,
            name: sb.name,
            color: sb.diffuse.Osb(),
            intensity: sb.intensity,
            range: sb.range
          };
          if (ps(Ub, aW), "spot" === Tb) {
            const bb = sb;
            Ub.spot = {
              innerConeAngle: bb.innerAngle / 2,
              outerConeAngle: bb.angle / 2
            }, ps(Ub.spot, TW)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Ub);
          const Ib = {
              light: this._lights.lights.length - 1
            },
            Hb = sb.parent;
          if (Hb && Fs(sb, Hb)) {
            const bb = kb.get(Hb);
            if (bb) {
              const sb = this._exporter._nodes[bb];
              return vs(cb, sb), sb.extensions || (sb.extensions = {}), sb.extensions[WW] = Ib, void ab(null)
            }
          }
          cb.extensions || (cb.extensions = {}), cb.extensions[WW] = Ib, ab(cb)
        }))
      }
    }
    let HW = !1;

    function fW() {
      HW || (HW = !0, Gk.RegisterExtension(WW, (bb => new IW(bb))))
    }
    fW();
    const MW = "KHR_interactivity";
    class XW {
      constructor(bb) {
        this._exporter = bb, this.name = MW, this.enabled = !!bb.options.khrInteractivity, this.required = bb.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var bb, cb, sb;
        const kb = this._exporter.options.khrInteractivity;
        if (!kb) return;
        const Wb = kb.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: bb => this._exporter._getNodeIndex(bb),
          getAnimationIndex: bb => this._exporter._getAnimationIndex(bb),
          getCameraIndex: bb => this._exporter._getCameraIndex(bb),
          getMaterialIndex: bb => this._exporter._getMaterialIndex(bb),
          getRootIndex: (bb, cb) => this._exporter._getRootIndex(bb, cb),
          setNodeExtension: (bb, cb, sb) => this._exporter._setNodeExtension(bb, cb, sb)
        });
        this._exporter._glTF.extensions[MW] = Wb;
        for (const ab of kb.additionalExtensionsUsed)(bb = this._exporter._glTF).extensionsUsed || (bb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(ab) && this._exporter._glTF.extensionsUsed.push(ab);
        for (const ab of kb.additionalExtensionsRequired)(cb = this._exporter._glTF).extensionsUsed || (cb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(ab) && this._exporter._glTF.extensionsUsed.push(ab), (sb = this._exporter._glTF).extensionsRequired || (sb.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(ab) && this._exporter._glTF.extensionsRequired.push(ab)
      }
    }
    let nW = !1;

    function mW() {
      nW || (nW = !0, Gk.RegisterExtension(MW, (bb => new XW(bb)), 200))
    }
    mW();
    const lW = "EXT_lights_area",
      QW = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      eW = {
        aspect: 1
      },
      CW = Zb.p.Backward();
    class NW {
      constructor(bb) {
        this.name = lW, this.enabled = !0, this.required = !1, this._exporter = bb
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[lW] = this._lights
      }
      async postExportNodeAsync(bb, cb, sb, kb, Wb) {
        return await new Promise((ab => {
          if (!(sb instanceof Xk.b)) return void ab(cb);
          const Tb = sb.getTypeID() == Xk.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!Tb) return Bb.c.Warn(`${bb}: Light ${sb.name} is not supported in ${lW}`), void ab(cb);
          const Ub = sb;
          if (Ub.falloffType !== Xk.b.FALLOFF_GLTF && Bb.c.Warn(`${bb}: Light falloff for ${sb.name} does not match the ${lW} specification!`), !Ub.position.CTb(0, 0, 0)) {
            const bb = Zb.m.Fm[0].ssb(Ub.position);
            Wb && os(bb), cb.translation = bb.Osb()
          }
          const Ib = Zb.p.Forward();
          Wb && os(Ib);
          const Hb = Zb.f.FromUnitVectorsToRef(CW, Ib, Zb.m.Quaternion[0]);
          Zb.f.IsIdentity(Hb) || (cb.rotation = Hb.Osb());
          const fb = {
            type: Tb,
            name: Ub.name,
            color: Ub.diffuse.Osb(),
            intensity: Ub.intensity,
            size: Ub.height,
            rect: {
              aspect: Ub.width / Ub.height
            }
          };
          ps(fb, QW), fb.rect && ps(fb.rect, eW), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(fb);
          const Mb = {
              light: this._lights.lights.length - 1
            },
            Xb = sb.parent;
          if (Xb && Fs(Ub, Xb)) {
            const bb = kb.get(Xb);
            if (bb) {
              const sb = this._exporter._nodes[bb];
              return vs(cb, sb), sb.extensions || (sb.extensions = {}), sb.extensions[lW] = Mb, void ab(null)
            }
          }
          cb.extensions || (cb.extensions = {}), cb.extensions[lW] = Mb, ab(cb)
        }))
      }
    }
    let VW = !1;

    function LW() {
      VW || (VW = !0, Gk.RegisterExtension(lW, (bb => new NW(bb))))
    }
    LW();
    const uW = "KHR_materials_anisotropy";
    class YW {
      constructor(bb) {
        this.name = uW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, cb, sb) {
        const kb = [];
        if (sb instanceof uc) {
          if (sb.anisotropy.isEnabled && !sb.anisotropy.legacy) return sb.anisotropy.texture && kb.push(sb.anisotropy.texture), kb
        } else if (sb instanceof jc && sb.specularRoughnessAnisotropy > 0) {
          const bb = function(bb) {
            const cb = bb.specularRoughnessAnisotropyTexture,
              sb = bb.geometryTangentTexture;
            return `${cb&&cb.getInternalTexture()?cb.getInternalTexture().uniqueId:"NoStrength"}_${sb&&sb.getInternalTexture()?sb.getInternalTexture().uniqueId:"NoTangent"}`
          }(sb);
          if (this._anisoTexturesMap[bb]) kb.push(this._anisoTexturesMap[bb]);
          else {
            const cb = await async function(bb) {
              const cb = bb.EY(),
                sb = bb.specularRoughnessAnisotropyTexture,
                kb = bb.geometryTangentTexture;
              return sb || kb ? await Ts("AnisotropyTexture", Hs(kb ? Us(kb, 0) : Is(1), kb ? Us(kb, 1) : Is(0), sb ? Us(sb, 0) : Is(1)), cb) : null
            }(sb);
            cb && (kb.push(cb), this._anisoTexturesMap[bb] = cb)
          }
          return kb
        }
        return []
      }
      postExportMaterialAsync(bb, cb, sb) {
        return new Promise((bb => {
          var kb;
          if (sb instanceof uc) {
            if (!sb.anisotropy.isEnabled || sb.anisotropy.legacy) return void bb(cb);
            this._wasUsed = !0, cb.extensions = cb.extensions || {};
            const kb = this._exporter._materialExporter.getTextureInfo(sb.anisotropy.texture),
              Wb = {
                anisotropyStrength: sb.anisotropy.intensity,
                anisotropyRotation: sb.anisotropy.angle,
                anisotropyTexture: kb ?? void 0
              };
            null !== Wb.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(sb), cb.extensions[uW] = Wb
          } else if (sb instanceof jc && sb.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, cb.extensions = cb.extensions || {};
            let Wb = sb.specularRoughnessTexture;
            sb._useRoughnessFromMetallicTextureGreen && (Wb = sb.baseMetalnessTexture);
            const ab = this._anisoTexturesMap[sb.id];
            if (!Wb && !ab) {
              let kb = sb.specularRoughness,
                Wb = sb.specularRoughnessAnisotropy;
              if (!sb._useGltfStyleAnisotropy) {
                const bb = function(bb, cb) {
                  const sb = bb * bb,
                    kb = sb * Math.sqrt(2 / (1 + (1 - cb) * (1 - cb))),
                    Wb = (1 - cb) * kb;
                  return {
                    newBaseRoughness: Math.sqrt(Wb),
                    newAnisotropyStrength: Math.min(Math.sqrt((kb - sb) / Math.max(1 - sb, 1e-4)), 1)
                  }
                }(sb.specularRoughness, sb.specularRoughnessAnisotropy);
                kb = bb.newBaseRoughness, Wb = bb.newAnisotropyStrength
              }
              cb.pbrMetallicRoughness && (cb.pbrMetallicRoughness.roughnessFactor = kb);
              const ab = {
                anisotropyStrength: Wb,
                anisotropyRotation: sb.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return cb.extensions[uW] = ab, bb(cb)
            }
            const Tb = ab ? this._exporter._materialExporter.getTextureInfo(ab) : null,
              Ub = {
                anisotropyStrength: sb.specularRoughnessAnisotropy,
                anisotropyRotation: sb.geometryTangentAngle,
                anisotropyTexture: Tb || void 0,
                extensions: {}
              };
            sb._useGltfStyleAnisotropy || (cb.extensions.KHR_materials_openpbr = {}, (kb = this._exporter._glTF).extensionsUsed || (kb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(sb), cb.extensions[uW] = Ub
          }
          bb(cb)
        }))
      }
    }
    let hW = !1;

    function JW() {
      hW || (hW = !0, Gk.RegisterExtension(uW, (bb => new YW(bb))))
    }
    JW();
    const gW = "KHR_materials_clearcoat";

    function BW(bb, cb) {
      const sb = new yb.e(cb.name, cb.EY());
      return sb._texture = bb, sb.coordinatesIndex = cb.coordinatesIndex, cb instanceof yb.e && (sb.uOffset = cb.uOffset, sb.vOffset = cb.vOffset, sb.uScale = cb.uScale, sb.vScale = cb.vScale, sb.wAng = cb.wAng), sb.wrapU = cb.wrapU, sb.wrapV = cb.wrapV, sb
    }
    class tW {
      constructor(bb) {
        this.name = gW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = bb
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
      async postExportMaterialAdditionalTexturesAsync(bb, cb, sb) {
        const kb = [];
        if (sb instanceof uc) {
          if (sb.clearCoat.isEnabled) return sb.clearCoat.texture && kb.push(sb.clearCoat.texture), !sb.clearCoat.useRoughnessFromMainTexture && sb.clearCoat.textureRoughness && kb.push(sb.clearCoat.textureRoughness), sb.clearCoat.bumpTexture && kb.push(sb.clearCoat.bumpTexture), kb
        } else if (sb instanceof jc && sb.coatWeight > 0) {
          let bb = !1;
          if (sb.coatWeightTexture ? sb.coatRoughnessTexture ? sb._useCoatRoughnessFromGreenChannel && sb.coatWeightTexture.getInternalTexture() === sb.coatRoughnessTexture.getInternalTexture() ? (kb.push(sb.coatWeightTexture), kb.push(sb.coatRoughnessTexture)) : bb = !0 : kb.push(sb.coatWeightTexture) : sb.coatRoughnessTexture && (sb._useCoatRoughnessFromGreenChannel ? kb.push(sb.coatRoughnessTexture) : bb = !0), bb) {
            const bb = function(bb) {
              const cb = bb.coatWeightTexture,
                sb = cb && cb.getInternalTexture() ? cb.getInternalTexture().uniqueId : "NoCoat",
                kb = bb.coatRoughnessTexture;
              return `${sb}_${kb&&kb.getInternalTexture()?kb.getInternalTexture().uniqueId:"NoRoughness"}`
            }(sb);
            if (!this._cachedInternalTexturesMap[bb]) {
              const cb = await async function(bb) {
                const cb = bb.EY(),
                  sb = bb.coatWeightTexture,
                  kb = bb.coatRoughnessTexture;
                return sb || kb ? (await Ts("CoatTexture", Hs(sb ? Us(sb, 0) : Is(1), kb ? Us(kb, bb._useCoatRoughnessFromGreenChannel ? 1 : 0) : Is(1)), cb)).getInternalTexture() : null
              }(sb);
              cb && (this._cachedInternalTexturesMap[bb] = cb)
            }
            this._cachedInternalTexturesMap[bb] && (sb.coatWeightTexture && (this._mergedTexturesMap[sb.coatWeightTexture.uniqueId] = BW(this._cachedInternalTexturesMap[bb], sb.coatWeightTexture), kb.push(this._mergedTexturesMap[sb.coatWeightTexture.uniqueId])), sb.coatRoughnessTexture && (this._mergedTexturesMap[sb.coatRoughnessTexture.uniqueId] = BW(this._cachedInternalTexturesMap[bb], sb.coatRoughnessTexture), kb.push(this._mergedTexturesMap[sb.coatRoughnessTexture.uniqueId])))
          }
          return sb.geometryCoatNormalTexture && kb.push(sb.geometryCoatNormalTexture), kb
        }
        return []
      }
      postExportMaterialAsync(bb, cb, sb) {
        return new Promise((bb => {
          if (sb instanceof uc) {
            if (!sb.clearCoat.isEnabled) return void bb(cb);
            this._wasUsed = !0, cb.extensions = cb.extensions || {};
            const kb = this._exporter._materialExporter.getTextureInfo(sb.clearCoat.texture);
            let Wb;
            Wb = sb.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(sb.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(sb.clearCoat.textureRoughness), sb.clearCoat.isTintEnabled && hc.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${sb.name}`), sb.clearCoat.remapF0OnInterfaceChange && hc.g.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${sb.name}`);
            const ab = this._exporter._materialExporter.getTextureInfo(sb.clearCoat.bumpTexture),
              Tb = {
                clearcoatFactor: sb.clearCoat.intensity,
                clearcoatTexture: kb ?? void 0,
                clearcoatRoughnessFactor: sb.clearCoat.roughness,
                clearcoatRoughnessTexture: Wb ?? void 0,
                clearcoatNormalTexture: ab ?? void 0
              };
            null === Tb.clearcoatTexture && null === Tb.clearcoatRoughnessTexture && null === Tb.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(sb), cb.extensions[gW] = Tb
          } else if (sb instanceof jc) {
            if (0 == sb.coatWeight) return void bb(cb);
            let kb, Wb, ab, Tb;
            this._wasUsed = !0, cb.extensions = cb.extensions || {}, sb.coatWeightTexture && (kb = this._mergedTexturesMap[sb.coatWeightTexture.uniqueId], Wb = this._exporter._materialExporter.getTextureInfo(kb)), sb.coatRoughnessTexture && (ab = this._mergedTexturesMap[sb.coatRoughnessTexture.uniqueId], Tb = this._exporter._materialExporter.getTextureInfo(ab)), sb.coatColorTexture && hc.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${sb.name}`);
            const Ub = this._exporter._materialExporter.getTextureInfo(sb.geometryCoatNormalTexture),
              Ib = {
                clearcoatFactor: sb.coatWeight,
                clearcoatTexture: Wb ?? void 0,
                clearcoatRoughnessFactor: sb.coatRoughness,
                clearcoatRoughnessTexture: Tb ?? void 0,
                clearcoatNormalTexture: Ub ?? void 0
              };
            null === Ib.clearcoatTexture && null === Ib.clearcoatRoughnessTexture && null === Ib.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(sb), cb.extensions[gW] = Ib
          }
          bb(cb)
        }))
      }
    }
    let yW = !1;

    function PW() {
      yW || (yW = !0, Gk.RegisterExtension(gW, (bb => new tW(bb))))
    }
    PW();
    const DW = "KHR_materials_coat";

    function EW(bb) {
      const cb = bb.coatRoughnessAnisotropyTexture,
        sb = bb.geometryCoatTangentTexture;
      return `${cb&&cb.getInternalTexture()?cb.getInternalTexture().uniqueId:"NoStrength"}_${sb&&sb.getInternalTexture()?sb.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function iW(bb, cb) {
      const sb = new yb.e(cb.name, cb.EY());
      return sb._texture = bb, sb.coordinatesIndex = cb.coordinatesIndex, cb instanceof yb.e && (sb.uOffset = cb.uOffset, sb.vOffset = cb.vOffset, sb.uScale = cb.uScale, sb.vScale = cb.vScale, sb.wAng = cb.wAng), sb.wrapU = cb.wrapU, sb.wrapV = cb.wrapV, sb
    }
    class OW {
      constructor(bb) {
        this.name = DW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = bb
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
      async postExportMaterialAdditionalTexturesAsync(bb, cb, sb) {
        const kb = [];
        if (sb instanceof uc) {
          if (sb.clearCoat.isEnabled) return sb.clearCoat.texture && kb.push(sb.clearCoat.texture), !sb.clearCoat.useRoughnessFromMainTexture && sb.clearCoat.textureRoughness && kb.push(sb.clearCoat.textureRoughness), sb.clearCoat.bumpTexture && kb.push(sb.clearCoat.bumpTexture), sb.clearCoat.tintTexture && kb.push(sb.clearCoat.tintTexture), kb
        } else if (sb instanceof jc && sb.coatWeight > 0) {
          let bb = !1;
          if (sb.coatWeightTexture ? sb.coatRoughnessTexture ? sb._useCoatRoughnessFromGreenChannel && sb.coatWeightTexture.getInternalTexture() === sb.coatRoughnessTexture.getInternalTexture() ? (kb.push(sb.coatWeightTexture), kb.push(sb.coatRoughnessTexture)) : bb = !0 : kb.push(sb.coatWeightTexture) : sb.coatRoughnessTexture && (sb._useCoatRoughnessFromGreenChannel ? kb.push(sb.coatRoughnessTexture) : bb = !0), bb) {
            const bb = function(bb) {
              const cb = bb.coatWeightTexture,
                sb = cb && cb.getInternalTexture() ? cb.getInternalTexture().uniqueId : "NoCoat",
                kb = bb.coatRoughnessTexture;
              return `${sb}_${kb&&kb.getInternalTexture()?kb.getInternalTexture().uniqueId:"NoRoughness"}`
            }(sb);
            if (!this._cachedInternalTexturesMap[bb]) {
              const cb = await async function(bb) {
                const cb = bb.EY(),
                  sb = bb.coatWeightTexture,
                  kb = bb.coatRoughnessTexture;
                return sb || kb ? (await Ts("CoatTexture", Hs(sb ? Us(sb, 0) : Is(1), kb ? Us(kb, bb._useCoatRoughnessFromGreenChannel ? 1 : 0) : Is(1)), cb)).getInternalTexture() : null
              }(sb);
              cb && (this._cachedInternalTexturesMap[bb] = cb)
            }
            this._cachedInternalTexturesMap[bb] && (sb.coatWeightTexture && (this._mergedTexturesMap[sb.coatWeightTexture.uniqueId] = iW(this._cachedInternalTexturesMap[bb], sb.coatWeightTexture), kb.push(this._mergedTexturesMap[sb.coatWeightTexture.uniqueId])), sb.coatRoughnessTexture && (this._mergedTexturesMap[sb.coatRoughnessTexture.uniqueId] = iW(this._cachedInternalTexturesMap[bb], sb.coatRoughnessTexture), kb.push(this._mergedTexturesMap[sb.coatRoughnessTexture.uniqueId])))
          }
          if (sb.geometryCoatNormalTexture && kb.push(sb.geometryCoatNormalTexture), sb.coatColorTexture && kb.push(sb.coatColorTexture), sb.coatRoughnessAnisotropy > 0) {
            const bb = EW(sb);
            if (this._mergedTexturesMap[bb]) kb.push(this._mergedTexturesMap[bb]);
            else {
              const cb = await async function(bb) {
                const cb = bb.EY(),
                  sb = bb.coatRoughnessAnisotropyTexture,
                  kb = bb.geometryCoatTangentTexture;
                return sb || kb ? await Ts("AnisotropyTexture", Hs(kb ? Us(kb, 0) : Is(1), kb ? Us(kb, 1) : Is(0), sb ? Us(sb, 0) : Is(1)), cb) : null
              }(sb);
              cb && (kb.push(cb), this._mergedTexturesMap[bb] = cb)
            }
            return kb
          }
          return kb
        }
        return []
      }
      postExportMaterialAsync(bb, cb, sb) {
        return new Promise((bb => {
          var kb;
          if (sb instanceof uc) {
            if (!sb.clearCoat.isEnabled) return void bb(cb);
            this._wasUsed = !0, cb.extensions = cb.extensions || {};
            const kb = this._exporter._materialExporter.getTextureInfo(sb.clearCoat.texture);
            let Wb, ab;
            Wb = sb.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(sb.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(sb.clearCoat.textureRoughness), sb.clearCoat.isTintEnabled && (ab = this._exporter._materialExporter.getTextureInfo(sb.clearCoat.tintTexture));
            const Tb = this._exporter._materialExporter.getTextureInfo(sb.clearCoat.bumpTexture),
              Ub = sb.clearCoat.indexOfRefraction,
              Ib = {
                coatFactor: sb.clearCoat.intensity,
                coatTexture: kb ?? void 0,
                coatRoughnessFactor: sb.clearCoat.roughness,
                coatRoughnessTexture: Wb ?? void 0,
                coatNormalTexture: Tb ?? void 0,
                coatColorFactor: sb.clearCoat.tintColor.Osb(),
                coatColorTexture: ab ?? void 0,
                coatIor: 1.5 !== Ub ? Ub : void 0
              };
            null === Ib.coatTexture && null === Ib.coatRoughnessTexture && null === Ib.coatRoughnessTexture && null === Ib.coatColorTexture || this._exporter._materialNeedsUVsSet.add(sb), cb.extensions[DW] = Ib
          } else if (sb instanceof jc) {
            if (0 == sb.coatWeight) return void bb(cb);
            let Wb, ab, Tb, Ub;
            this._wasUsed = !0, cb.extensions = cb.extensions || {}, sb.coatWeightTexture && (Wb = this._mergedTexturesMap[sb.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[sb.coatWeightTexture.uniqueId] : sb.coatWeightTexture, ab = this._exporter._materialExporter.getTextureInfo(Wb)), sb.coatRoughnessTexture && (Tb = this._mergedTexturesMap[sb.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[sb.coatRoughnessTexture.uniqueId] : sb.coatRoughnessTexture, Ub = this._exporter._materialExporter.getTextureInfo(Tb));
            const Ib = this._exporter._materialExporter.getTextureInfo(sb.geometryCoatNormalTexture),
              Hb = this._exporter._materialExporter.getTextureInfo(sb.coatColorTexture),
              fb = sb.coatIor,
              Mb = sb.coatDarkening,
              Xb = sb.coatRoughnessTexture,
              nb = EW(sb),
              mb = this._mergedTexturesMap[nb];
            let lb, Qb = 0,
              eb = 0;
            if (sb.coatRoughnessAnisotropy > 0) {
              if (Xb || mb) {
                const bb = mb ? this._exporter._materialExporter.getTextureInfo(mb) : null;
                Qb = sb.coatRoughnessAnisotropy, eb = sb.geometryCoatTangentAngle, lb = bb || void 0
              } else {
                let bb = sb.coatRoughness,
                  kb = sb.coatRoughnessAnisotropy;
                if (!sb._useGltfStyleAnisotropy) {
                  const cb = function(bb, cb) {
                    const sb = bb * bb,
                      kb = sb * Math.sqrt(2 / (1 + (1 - cb) * (1 - cb))),
                      Wb = (1 - cb) * kb;
                    return {
                      newBaseRoughness: Math.sqrt(Wb),
                      newAnisotropyStrength: Math.min(Math.sqrt((kb - sb) / Math.max(1 - sb, 1e-4)), 1)
                    }
                  }(sb.coatRoughness, sb.coatRoughnessAnisotropy);
                  bb = cb.newBaseRoughness, kb = cb.newAnisotropyStrength
                }
                cb.pbrMetallicRoughness && (cb.pbrMetallicRoughness.roughnessFactor = bb), Qb = kb, eb = sb.geometryCoatTangentAngle + .5 * Math.PI, lb = void 0
              }
              sb._useGltfStyleAnisotropy || (cb.extensions.KHR_materials_openpbr = {}, (kb = this._exporter._glTF).extensionsUsed || (kb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const Cb = {
              coatFactor: sb.coatWeight,
              coatTexture: ab ?? void 0,
              coatRoughnessFactor: sb.coatRoughness,
              coatRoughnessTexture: Ub ?? void 0,
              coatNormalTexture: Ib ?? void 0,
              coatColorFactor: sb.coatColor.Osb(),
              coatColorTexture: Hb ?? void 0,
              coatIor: 1.5 !== fb ? fb : void 0,
              coatDarkeningFactor: 1 !== Mb ? Mb : void 0,
              coatAnisotropyRotation: eb,
              coatAnisotropyStrength: Qb,
              coatAnisotropyTexture: lb
            };
            null === Cb.coatTexture && null === Cb.coatRoughnessTexture && null === Cb.coatRoughnessTexture && null === Cb.coatAnisotropyTexture && null === Cb.coatColorTexture || this._exporter._materialNeedsUVsSet.add(sb), cb.extensions[DW] = Cb
          }
          bb(cb)
        }))
      }
    }
    let GW = !1;

    function KW() {
      GW || (GW = !0, Gk.RegisterExtension(DW, (bb => new OW(bb))))
    }
    KW();
    let ZW = (() => {
      var bb, cb, sb, kb, Wb, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb, Cb, Nb, Vb, Lb, ub, Yb, hb, Bb, tb, yb, Pb, Db, Eb, Ob, Gb, Kb, Zb, zb, qb, db, Ab, wb, rb, Sb, Rb, vb, Fb, xb, jb, pb, bc, cc, sc, kc, Wc, ac, Tc, Uc, Ic, Hc, fc, Mc, Xc, nc, mc, lc, Qc, ec, Cc, Nc;
      let Vc, Lc, hc, Jc, gc, Bc, tc, yc, Pc, Dc, Ec, ic, Oc, Gc, Kc, Zc, zc, qc, dc, Ac, wc, rc, oc, Sc, Rc, vc, Fc, xc, jc, pc, bs, cs, ss, ks, Ws, as, Ts, Us, Is, Hs, fs, Ms, Xs, ns, ms, ls, Qs, es, Cs, Ns, Vs, Ls, us, Ys, hs, gs, Bs, ts, ys, Ps, Ds, Es, is, Os, Gs, Ks, Zs, zs, qs = uc,
        ds = [],
        As = [],
        ws = [],
        rs = [],
        os = [],
        Ss = [],
        Rs = [],
        vs = [],
        Fs = [],
        xs = [],
        ps = [],
        bk = [],
        ck = [],
        sk = [],
        kk = [],
        Wk = [],
        ak = [],
        Tk = [],
        Uk = [],
        Ik = [],
        Hk = [],
        fk = [],
        Mk = [],
        Xk = [],
        nk = [],
        mk = [],
        lk = [],
        Qk = [],
        ek = [],
        Ck = [],
        Nk = [],
        Vk = [],
        Lk = [],
        uk = [],
        Yk = [],
        hk = [],
        Jk = [],
        gk = [],
        Bk = [],
        tk = [],
        yk = [],
        Pk = [],
        Dk = [],
        Ek = [],
        ik = [],
        Ok = [],
        Gk = [],
        Kk = [],
        Zk = [],
        zk = [],
        qk = [],
        dk = [],
        Ak = [],
        wk = [],
        rk = [],
        Sk = [],
        Rk = [],
        vk = [],
        Fk = [],
        xk = [],
        jk = [],
        pk = [],
        bW = [],
        cW = [],
        sW = [],
        kW = [],
        WW = [],
        aW = [],
        TW = [],
        UW = [],
        IW = [],
        HW = [],
        fW = [],
        MW = [],
        XW = [],
        nW = [],
        mW = [],
        lW = [],
        QW = [],
        eW = [],
        CW = [],
        NW = [],
        VW = [],
        LW = [],
        uW = [],
        YW = [],
        hW = [],
        JW = [],
        gW = [],
        BW = [],
        tW = [],
        yW = [],
        PW = [],
        DW = [],
        EW = [],
        iW = [],
        OW = [],
        GW = [],
        KW = [],
        ZW = [],
        zW = [],
        qW = [],
        dW = [],
        AW = [],
        wW = [],
        rW = [],
        oW = [],
        SW = [],
        RW = [],
        vW = [],
        FW = [],
        xW = [],
        jW = [],
        pW = [],
        ba = [],
        ca = [],
        sa = [],
        ka = [],
        Wa = [],
        aa = [],
        Ta = [],
        Ua = [],
        Ia = [],
        Ha = [],
        fa = [],
        Ma = [],
        Xa = [],
        na = [],
        ma = [],
        la = [],
        Qa = [],
        ea = [],
        Ca = [];
      return bb = class extends qs {
        get directIntensity() {
          return (0, Jb.d)(this, cb, "f")
        }
        set directIntensity(bb) {
          (0, Jb.h)(this, cb, bb, "f")
        }
        get emissiveIntensity() {
          return (0, Jb.d)(this, sb, "f")
        }
        set emissiveIntensity(bb) {
          (0, Jb.h)(this, sb, bb, "f")
        }
        get environmentIntensity() {
          return (0, Jb.d)(this, kb, "f")
        }
        set environmentIntensity(bb) {
          (0, Jb.h)(this, kb, bb, "f")
        }
        get specularIntensity() {
          return (0, Jb.d)(this, Wb, "f")
        }
        set specularIntensity(bb) {
          (0, Jb.h)(this, Wb, bb, "f")
        }
        get disableBumpMap() {
          return (0, Jb.d)(this, Tb, "f")
        }
        set disableBumpMap(bb) {
          (0, Jb.h)(this, Tb, bb, "f")
        }
        get albedoTexture() {
          return (0, Jb.d)(this, Ub, "f")
        }
        set albedoTexture(bb) {
          (0, Jb.h)(this, Ub, bb, "f")
        }
        get baseWeightTexture() {
          return (0, Jb.d)(this, Ib, "f")
        }
        set baseWeightTexture(bb) {
          (0, Jb.h)(this, Ib, bb, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, Jb.d)(this, Hb, "f")
        }
        set baseDiffuseRoughnessTexture(bb) {
          (0, Jb.h)(this, Hb, bb, "f")
        }
        get ambientTexture() {
          return (0, Jb.d)(this, fb, "f")
        }
        set ambientTexture(bb) {
          (0, Jb.h)(this, fb, bb, "f")
        }
        get ambientTextureStrength() {
          return (0, Jb.d)(this, Mb, "f")
        }
        set ambientTextureStrength(bb) {
          (0, Jb.h)(this, Mb, bb, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, Jb.d)(this, Xb, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(bb) {
          (0, Jb.h)(this, Xb, bb, "f")
        }
        get opacityTexture() {
          return (0, Jb.d)(this, nb, "f")
        }
        set opacityTexture(bb) {
          (0, Jb.h)(this, nb, bb, "f")
        }
        get reflectionTexture() {
          return (0, Jb.d)(this, mb, "f")
        }
        set reflectionTexture(bb) {
          (0, Jb.h)(this, mb, bb, "f")
        }
        get emissiveTexture() {
          return (0, Jb.d)(this, lb, "f")
        }
        set emissiveTexture(bb) {
          (0, Jb.h)(this, lb, bb, "f")
        }
        get reflectivityTexture() {
          return (0, Jb.d)(this, Qb, "f")
        }
        set reflectivityTexture(bb) {
          (0, Jb.h)(this, Qb, bb, "f")
        }
        get metallicTexture() {
          return (0, Jb.d)(this, eb, "f")
        }
        set metallicTexture(bb) {
          (0, Jb.h)(this, eb, bb, "f")
        }
        get metallic() {
          return (0, Jb.d)(this, Cb, "f")
        }
        set metallic(bb) {
          (0, Jb.h)(this, Cb, bb, "f")
        }
        get roughness() {
          return (0, Jb.d)(this, Nb, "f")
        }
        set roughness(bb) {
          (0, Jb.h)(this, Nb, bb, "f")
        }
        get metallicF0Factor() {
          return (0, Jb.d)(this, Vb, "f")
        }
        set metallicF0Factor(bb) {
          (0, Jb.h)(this, Vb, bb, "f")
        }
        get metallicReflectanceColor() {
          return (0, Jb.d)(this, Lb, "f")
        }
        set metallicReflectanceColor(bb) {
          (0, Jb.h)(this, Lb, bb, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, Jb.d)(this, ub, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(bb) {
          (0, Jb.h)(this, ub, bb, "f")
        }
        get metallicReflectanceTexture() {
          return (0, Jb.d)(this, Yb, "f")
        }
        set metallicReflectanceTexture(bb) {
          (0, Jb.h)(this, Yb, bb, "f")
        }
        get reflectanceTexture() {
          return (0, Jb.d)(this, hb, "f")
        }
        set reflectanceTexture(bb) {
          (0, Jb.h)(this, hb, bb, "f")
        }
        get microSurfaceTexture() {
          return (0, Jb.d)(this, Bb, "f")
        }
        set microSurfaceTexture(bb) {
          (0, Jb.h)(this, Bb, bb, "f")
        }
        get bumpTexture() {
          return (0, Jb.d)(this, tb, "f")
        }
        set bumpTexture(bb) {
          (0, Jb.h)(this, tb, bb, "f")
        }
        get lightmapTexture() {
          return (0, Jb.d)(this, yb, "f")
        }
        set lightmapTexture(bb) {
          (0, Jb.h)(this, yb, bb, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(bb) {
          this.subSurface.refractionTexture = bb, bb ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, Jb.d)(this, Pb, "f")
        }
        set ambientColor(bb) {
          (0, Jb.h)(this, Pb, bb, "f")
        }
        get albedoColor() {
          return (0, Jb.d)(this, Db, "f")
        }
        set albedoColor(bb) {
          (0, Jb.h)(this, Db, bb, "f")
        }
        get baseWeight() {
          return (0, Jb.d)(this, Eb, "f")
        }
        set baseWeight(bb) {
          (0, Jb.h)(this, Eb, bb, "f")
        }
        get baseDiffuseRoughness() {
          return (0, Jb.d)(this, Ob, "f")
        }
        set baseDiffuseRoughness(bb) {
          (0, Jb.h)(this, Ob, bb, "f")
        }
        get reflectivityColor() {
          return (0, Jb.d)(this, Gb, "f")
        }
        set reflectivityColor(bb) {
          (0, Jb.h)(this, Gb, bb, "f")
        }
        get reflectionColor() {
          return (0, Jb.d)(this, Kb, "f")
        }
        set reflectionColor(bb) {
          (0, Jb.h)(this, Kb, bb, "f")
        }
        get emissiveColor() {
          return (0, Jb.d)(this, Zb, "f")
        }
        set emissiveColor(bb) {
          (0, Jb.h)(this, Zb, bb, "f")
        }
        get microSurface() {
          return (0, Jb.d)(this, zb, "f")
        }
        set microSurface(bb) {
          (0, Jb.h)(this, zb, bb, "f")
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
          return (0, Jb.d)(this, qb, "f")
        }
        set useLightmapAsShadowmap(bb) {
          (0, Jb.h)(this, qb, bb, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, Jb.d)(this, db, "f")
        }
        set useAlphaFromAlbedoTexture(bb) {
          (0, Jb.h)(this, db, bb, "f")
        }
        get forceAlphaTest() {
          return (0, Jb.d)(this, Ab, "f")
        }
        set forceAlphaTest(bb) {
          (0, Jb.h)(this, Ab, bb, "f")
        }
        get alphaCutOff() {
          return (0, Jb.d)(this, wb, "f")
        }
        set alphaCutOff(bb) {
          (0, Jb.h)(this, wb, bb, "f")
        }
        get useSpecularOverAlpha() {
          return (0, Jb.d)(this, rb, "f")
        }
        set useSpecularOverAlpha(bb) {
          (0, Jb.h)(this, rb, bb, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, Jb.d)(this, Sb, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(bb) {
          (0, Jb.h)(this, Sb, bb, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, Jb.d)(this, Rb, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(bb) {
          (0, Jb.h)(this, Rb, bb, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, Jb.d)(this, vb, "f")
        }
        set useRoughnessFromMetallicTextureGreen(bb) {
          (0, Jb.h)(this, vb, bb, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, Jb.d)(this, Fb, "f")
        }
        set useMetallnessFromMetallicTextureBlue(bb) {
          (0, Jb.h)(this, Fb, bb, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, Jb.d)(this, xb, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(bb) {
          (0, Jb.h)(this, xb, bb, "f")
        }
        get useAmbientInGrayScale() {
          return (0, Jb.d)(this, jb, "f")
        }
        set useAmbientInGrayScale(bb) {
          (0, Jb.h)(this, jb, bb, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, Jb.d)(this, pb, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(bb) {
          (0, Jb.h)(this, pb, bb, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === uc.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(bb) {
          bb !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? uc.LIGHTFALLOFF_PHYSICAL : uc.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === uc.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(bb) {
          bb !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? uc.LIGHTFALLOFF_GLTF : uc.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, Jb.d)(this, bc, "f")
        }
        set useRadianceOverAlpha(bb) {
          (0, Jb.h)(this, bc, bb, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, Jb.d)(this, cc, "f")
        }
        set useObjectSpaceNormalMap(bb) {
          (0, Jb.h)(this, cc, bb, "f")
        }
        get useParallax() {
          return (0, Jb.d)(this, sc, "f")
        }
        set useParallax(bb) {
          (0, Jb.h)(this, sc, bb, "f")
        }
        get useParallaxOcclusion() {
          return (0, Jb.d)(this, kc, "f")
        }
        set useParallaxOcclusion(bb) {
          (0, Jb.h)(this, kc, bb, "f")
        }
        get parallaxScaleBias() {
          return (0, Jb.d)(this, Wc, "f")
        }
        set parallaxScaleBias(bb) {
          (0, Jb.h)(this, Wc, bb, "f")
        }
        get disableLighting() {
          return (0, Jb.d)(this, ac, "f")
        }
        set disableLighting(bb) {
          (0, Jb.h)(this, ac, bb, "f")
        }
        get forceIrradianceInFragment() {
          return (0, Jb.d)(this, Tc, "f")
        }
        set forceIrradianceInFragment(bb) {
          (0, Jb.h)(this, Tc, bb, "f")
        }
        get maxSimultaneousLights() {
          return (0, Jb.d)(this, Uc, "f")
        }
        set maxSimultaneousLights(bb) {
          (0, Jb.h)(this, Uc, bb, "f")
        }
        get invertNormalMapX() {
          return (0, Jb.d)(this, Ic, "f")
        }
        set invertNormalMapX(bb) {
          (0, Jb.h)(this, Ic, bb, "f")
        }
        get invertNormalMapY() {
          return (0, Jb.d)(this, Hc, "f")
        }
        set invertNormalMapY(bb) {
          (0, Jb.h)(this, Hc, bb, "f")
        }
        get twoSidedLighting() {
          return (0, Jb.d)(this, fc, "f")
        }
        set twoSidedLighting(bb) {
          (0, Jb.h)(this, fc, bb, "f")
        }
        get useAlphaFresnel() {
          return (0, Jb.d)(this, Mc, "f")
        }
        set useAlphaFresnel(bb) {
          (0, Jb.h)(this, Mc, bb, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, Jb.d)(this, Xc, "f")
        }
        set useLinearAlphaFresnel(bb) {
          (0, Jb.h)(this, Xc, bb, "f")
        }
        get environmentBRDFTexture() {
          return (0, Jb.d)(this, nc, "f")
        }
        set environmentBRDFTexture(bb) {
          (0, Jb.h)(this, nc, bb, "f")
        }
        get forceNormalForward() {
          return (0, Jb.d)(this, mc, "f")
        }
        set forceNormalForward(bb) {
          (0, Jb.h)(this, mc, bb, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, Jb.d)(this, lc, "f")
        }
        set enableSpecularAntiAliasing(bb) {
          (0, Jb.h)(this, lc, bb, "f")
        }
        get useHorizonOcclusion() {
          return (0, Jb.d)(this, Qc, "f")
        }
        set useHorizonOcclusion(bb) {
          (0, Jb.h)(this, Qc, bb, "f")
        }
        get useRadianceOcclusion() {
          return (0, Jb.d)(this, ec, "f")
        }
        set useRadianceOcclusion(bb) {
          (0, Jb.h)(this, ec, bb, "f")
        }
        get unlit() {
          return (0, Jb.d)(this, Cc, "f")
        }
        set unlit(bb) {
          (0, Jb.h)(this, Cc, bb, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, Jb.d)(this, Nc, "f")
        }
        set applyDecalMapAfterDetailMap(bb) {
          (0, Jb.h)(this, Nc, bb, "f")
        }
        constructor(ab, gb) {
          super(ab, gb, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), cb.set(this, ((0, Jb.m)(this, ds), (0, Jb.m)(this, As, 1))), sb.set(this, ((0, Jb.m)(this, ws), (0, Jb.m)(this, rs, 1))), kb.set(this, ((0, Jb.m)(this, os), (0, Jb.m)(this, Ss, 1))), Wb.set(this, ((0, Jb.m)(this, Rs), (0, Jb.m)(this, vs, 1))), Tb.set(this, ((0, Jb.m)(this, Fs), (0, Jb.m)(this, xs, !1))), Ub.set(this, ((0, Jb.m)(this, ps), (0, Jb.m)(this, bk, void 0))), Ib.set(this, ((0, Jb.m)(this, ck), (0, Jb.m)(this, sk, void 0))), Hb.set(this, ((0, Jb.m)(this, kk), (0, Jb.m)(this, Wk, void 0))), fb.set(this, ((0, Jb.m)(this, ak), (0, Jb.m)(this, Tk, void 0))), Mb.set(this, ((0, Jb.m)(this, Uk), (0, Jb.m)(this, Ik, 1))), Xb.set(this, ((0, Jb.m)(this, Hk), (0, Jb.m)(this, fk, bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), nb.set(this, ((0, Jb.m)(this, Mk), (0, Jb.m)(this, Xk, void 0))), mb.set(this, ((0, Jb.m)(this, nk), (0, Jb.m)(this, mk, void 0))), lb.set(this, ((0, Jb.m)(this, lk), (0, Jb.m)(this, Qk, void 0))), Qb.set(this, ((0, Jb.m)(this, ek), (0, Jb.m)(this, Ck, void 0))), eb.set(this, ((0, Jb.m)(this, Nk), (0, Jb.m)(this, Vk, void 0))), Cb.set(this, ((0, Jb.m)(this, Lk), (0, Jb.m)(this, uk, void 0))), Nb.set(this, ((0, Jb.m)(this, Yk), (0, Jb.m)(this, hk, void 0))), Vb.set(this, ((0, Jb.m)(this, Jk), (0, Jb.m)(this, gk, 1))), Lb.set(this, ((0, Jb.m)(this, Bk), (0, Jb.m)(this, tk, ob.e.White()))), ub.set(this, ((0, Jb.m)(this, yk), (0, Jb.m)(this, Pk, !1))), Yb.set(this, ((0, Jb.m)(this, Dk), (0, Jb.m)(this, Ek, void 0))), hb.set(this, ((0, Jb.m)(this, ik), (0, Jb.m)(this, Ok, void 0))), Bb.set(this, ((0, Jb.m)(this, Gk), (0, Jb.m)(this, Kk, void 0))), tb.set(this, ((0, Jb.m)(this, Zk), (0, Jb.m)(this, zk, void 0))), yb.set(this, ((0, Jb.m)(this, qk), (0, Jb.m)(this, dk, void 0))), Pb.set(this, ((0, Jb.m)(this, Ak), (0, Jb.m)(this, wk, new ob.e(0, 0, 0)))), Db.set(this, ((0, Jb.m)(this, rk), (0, Jb.m)(this, Sk, new ob.e(1, 1, 1)))), Eb.set(this, ((0, Jb.m)(this, Rk), (0, Jb.m)(this, vk, 1))), Ob.set(this, ((0, Jb.m)(this, Fk), (0, Jb.m)(this, xk, void 0))), Gb.set(this, ((0, Jb.m)(this, jk), (0, Jb.m)(this, pk, new ob.e(1, 1, 1)))), Kb.set(this, ((0, Jb.m)(this, bW), (0, Jb.m)(this, cW, new ob.e(1, 1, 1)))), Zb.set(this, ((0, Jb.m)(this, sW), (0, Jb.m)(this, kW, new ob.e(0, 0, 0)))), zb.set(this, ((0, Jb.m)(this, WW), (0, Jb.m)(this, aW, 1))), qb.set(this, ((0, Jb.m)(this, TW), (0, Jb.m)(this, UW, !1))), db.set(this, ((0, Jb.m)(this, IW), (0, Jb.m)(this, HW, !1))), Ab.set(this, ((0, Jb.m)(this, fW), (0, Jb.m)(this, MW, !1))), wb.set(this, ((0, Jb.m)(this, XW), (0, Jb.m)(this, nW, .4))), rb.set(this, ((0, Jb.m)(this, mW), (0, Jb.m)(this, lW, !0))), Sb.set(this, ((0, Jb.m)(this, QW), (0, Jb.m)(this, eW, !1))), Rb.set(this, ((0, Jb.m)(this, CW), (0, Jb.m)(this, NW, !0))), vb.set(this, ((0, Jb.m)(this, VW), (0, Jb.m)(this, LW, !1))), Fb.set(this, ((0, Jb.m)(this, uW), (0, Jb.m)(this, YW, !1))), xb.set(this, ((0, Jb.m)(this, hW), (0, Jb.m)(this, JW, !1))), jb.set(this, ((0, Jb.m)(this, gW), (0, Jb.m)(this, BW, !1))), pb.set(this, ((0, Jb.m)(this, tW), (0, Jb.m)(this, yW, !1))), bc.set(this, ((0, Jb.m)(this, PW), (0, Jb.m)(this, DW, !0))), cc.set(this, ((0, Jb.m)(this, EW), (0, Jb.m)(this, iW, !1))), sc.set(this, ((0, Jb.m)(this, OW), (0, Jb.m)(this, GW, !1))), kc.set(this, ((0, Jb.m)(this, KW), (0, Jb.m)(this, ZW, !1))), Wc.set(this, ((0, Jb.m)(this, zW), (0, Jb.m)(this, qW, .05))), ac.set(this, ((0, Jb.m)(this, dW), (0, Jb.m)(this, AW, !1))), Tc.set(this, ((0, Jb.m)(this, wW), (0, Jb.m)(this, rW, !1))), Uc.set(this, ((0, Jb.m)(this, oW), (0, Jb.m)(this, SW, 4))), Ic.set(this, ((0, Jb.m)(this, RW), (0, Jb.m)(this, vW, !1))), Hc.set(this, ((0, Jb.m)(this, FW), (0, Jb.m)(this, xW, !1))), fc.set(this, ((0, Jb.m)(this, jW), (0, Jb.m)(this, pW, !1))), Mc.set(this, ((0, Jb.m)(this, ba), (0, Jb.m)(this, ca, !1))), Xc.set(this, ((0, Jb.m)(this, sa), (0, Jb.m)(this, ka, !1))), nc.set(this, ((0, Jb.m)(this, Wa), (0, Jb.m)(this, aa, null))), mc.set(this, ((0, Jb.m)(this, Ta), (0, Jb.m)(this, Ua, !1))), lc.set(this, ((0, Jb.m)(this, Ia), (0, Jb.m)(this, Ha, !1))), Qc.set(this, ((0, Jb.m)(this, fa), (0, Jb.m)(this, Ma, !0))), ec.set(this, ((0, Jb.m)(this, Xa), (0, Jb.m)(this, na, !0))), Cc.set(this, ((0, Jb.m)(this, ma), (0, Jb.m)(this, la, !1))), Nc.set(this, ((0, Jb.m)(this, Qa), (0, Jb.m)(this, ea, !1))), (0, Jb.m)(this, Ca), this._environmentBRDFTexture = ib(this.EY())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(cb) {
          let sb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Wb = Yc.d.Clone((() => new bb(cb, this.EY())), this, {
            cloneTexturesOnlyOnce: sb
          });
          return Wb.id = cb, Wb.name = cb, this.stencil.copyTo(Wb.stencil), this._clonePlugins(Wb, kb), Wb
        }
        serialize() {
          const bb = super.serialize();
          return bb.customType = "BABYLON.PBRMaterial", bb
        }
        static Parse(cb, sb, kb) {
          const Wb = Yc.d.Parse((() => new bb(cb.name, sb)), cb, sb, kb);
          return cb.stencil && Wb.stencil.parse(cb.stencil, sb, kb), ab.e._ParsePlugins(cb, Wb, sb, kb), cb.clearCoat && Wb.clearCoat.parse(cb.clearCoat, sb, kb), cb.anisotropy && Wb.anisotropy.parse(cb.anisotropy, sb, kb), cb.brdf && Wb.brdf.parse(cb.brdf, sb, kb), cb.sheen && Wb.sheen.parse(cb.sheen, sb, kb), cb.subSurface && Wb.subSurface.parse(cb.subSurface, sb, kb), cb.iridescence && Wb.iridescence.parse(cb.iridescence, sb, kb), Wb
        }
      }, cb = new WeakMap, sb = new WeakMap, kb = new WeakMap, Wb = new WeakMap, Tb = new WeakMap, Ub = new WeakMap, Ib = new WeakMap, Hb = new WeakMap, fb = new WeakMap, Mb = new WeakMap, Xb = new WeakMap, nb = new WeakMap, mb = new WeakMap, lb = new WeakMap, Qb = new WeakMap, eb = new WeakMap, Cb = new WeakMap, Nb = new WeakMap, Vb = new WeakMap, Lb = new WeakMap, ub = new WeakMap, Yb = new WeakMap, hb = new WeakMap, Bb = new WeakMap, tb = new WeakMap, yb = new WeakMap, Pb = new WeakMap, Db = new WeakMap, Eb = new WeakMap, Ob = new WeakMap, Gb = new WeakMap, Kb = new WeakMap, Zb = new WeakMap, zb = new WeakMap, qb = new WeakMap, db = new WeakMap, Ab = new WeakMap, wb = new WeakMap, rb = new WeakMap, Sb = new WeakMap, Rb = new WeakMap, vb = new WeakMap, Fb = new WeakMap, xb = new WeakMap, jb = new WeakMap, pb = new WeakMap, bc = new WeakMap, cc = new WeakMap, sc = new WeakMap, kc = new WeakMap, Wc = new WeakMap, ac = new WeakMap, Tc = new WeakMap, Uc = new WeakMap, Ic = new WeakMap, Hc = new WeakMap, fc = new WeakMap, Mc = new WeakMap, Xc = new WeakMap, nc = new WeakMap, mc = new WeakMap, lc = new WeakMap, Qc = new WeakMap, ec = new WeakMap, Cc = new WeakMap, Nc = new WeakMap, (() => {
        const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(qs[Symbol.metadata] ?? null) : void 0;
        Vc = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Lc = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], hc = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Jc = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], gc = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Bc = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], tc = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], yc = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Pc = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Dc = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Ec = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], ic = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Oc = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Gc = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Kc = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Zc = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], zc = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], qc = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], dc = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Ac = [(0, gb.o)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], wc = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], rc = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], oc = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Sc = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Rc = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], vc = [(0, gb.x)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty", null)], Fc = [(0, gb.o)("ambient"), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], xc = [(0, gb.o)("albedo"), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], jc = [(0, gb.E)("baseWeight"), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], pc = [(0, gb.E)("baseDiffuseRoughness"), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], bs = [(0, gb.o)("reflectivity"), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], cs = [(0, gb.o)("reflection"), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], ss = [(0, gb.o)("emissive"), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], ks = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Ws = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], as = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ts = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Us = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Is = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Hs = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], fs = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Ms = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Xs = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], ns = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], ms = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], ls = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Qs = [(0, gb.E)()], es = [(0, gb.E)()], Cs = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Ns = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Vs = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Ls = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], us = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Ys = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsLightsDirty")], hs = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], gs = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsLightsDirty")], Bs = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], ts = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], ys = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Ps = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Ds = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Es = [(0, gb.f)("_markAllSubMeshesAsTexturesDirty")], is = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Os = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Gs = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Ks = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsTexturesDirty")], Zs = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], zs = [(0, gb.E)(), (0, gb.f)("_markAllSubMeshesAsMiscDirty")], (0, Jb.j)(bb, null, Vc, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "directIntensity" in bb,
            get: bb => bb.directIntensity,
            set: (bb, cb) => {
              bb.directIntensity = cb
            }
          },
          metadata: cb
        }, As, ws), (0, Jb.j)(bb, null, Lc, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "emissiveIntensity" in bb,
            get: bb => bb.emissiveIntensity,
            set: (bb, cb) => {
              bb.emissiveIntensity = cb
            }
          },
          metadata: cb
        }, rs, os), (0, Jb.j)(bb, null, hc, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "environmentIntensity" in bb,
            get: bb => bb.environmentIntensity,
            set: (bb, cb) => {
              bb.environmentIntensity = cb
            }
          },
          metadata: cb
        }, Ss, Rs), (0, Jb.j)(bb, null, Jc, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "specularIntensity" in bb,
            get: bb => bb.specularIntensity,
            set: (bb, cb) => {
              bb.specularIntensity = cb
            }
          },
          metadata: cb
        }, vs, Fs), (0, Jb.j)(bb, null, gc, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableBumpMap" in bb,
            get: bb => bb.disableBumpMap,
            set: (bb, cb) => {
              bb.disableBumpMap = cb
            }
          },
          metadata: cb
        }, xs, ps), (0, Jb.j)(bb, null, Bc, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "albedoTexture" in bb,
            get: bb => bb.albedoTexture,
            set: (bb, cb) => {
              bb.albedoTexture = cb
            }
          },
          metadata: cb
        }, bk, ck), (0, Jb.j)(bb, null, tc, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseWeightTexture" in bb,
            get: bb => bb.baseWeightTexture,
            set: (bb, cb) => {
              bb.baseWeightTexture = cb
            }
          },
          metadata: cb
        }, sk, kk), (0, Jb.j)(bb, null, yc, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseDiffuseRoughnessTexture" in bb,
            get: bb => bb.baseDiffuseRoughnessTexture,
            set: (bb, cb) => {
              bb.baseDiffuseRoughnessTexture = cb
            }
          },
          metadata: cb
        }, Wk, ak), (0, Jb.j)(bb, null, Pc, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientTexture" in bb,
            get: bb => bb.ambientTexture,
            set: (bb, cb) => {
              bb.ambientTexture = cb
            }
          },
          metadata: cb
        }, Tk, Uk), (0, Jb.j)(bb, null, Dc, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientTextureStrength" in bb,
            get: bb => bb.ambientTextureStrength,
            set: (bb, cb) => {
              bb.ambientTextureStrength = cb
            }
          },
          metadata: cb
        }, Ik, Hk), (0, Jb.j)(bb, null, Ec, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientTextureImpactOnAnalyticalLights" in bb,
            get: bb => bb.ambientTextureImpactOnAnalyticalLights,
            set: (bb, cb) => {
              bb.ambientTextureImpactOnAnalyticalLights = cb
            }
          },
          metadata: cb
        }, fk, Mk), (0, Jb.j)(bb, null, ic, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "opacityTexture" in bb,
            get: bb => bb.opacityTexture,
            set: (bb, cb) => {
              bb.opacityTexture = cb
            }
          },
          metadata: cb
        }, Xk, nk), (0, Jb.j)(bb, null, Oc, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectionTexture" in bb,
            get: bb => bb.reflectionTexture,
            set: (bb, cb) => {
              bb.reflectionTexture = cb
            }
          },
          metadata: cb
        }, mk, lk), (0, Jb.j)(bb, null, Gc, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "emissiveTexture" in bb,
            get: bb => bb.emissiveTexture,
            set: (bb, cb) => {
              bb.emissiveTexture = cb
            }
          },
          metadata: cb
        }, Qk, ek), (0, Jb.j)(bb, null, Kc, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectivityTexture" in bb,
            get: bb => bb.reflectivityTexture,
            set: (bb, cb) => {
              bb.reflectivityTexture = cb
            }
          },
          metadata: cb
        }, Ck, Nk), (0, Jb.j)(bb, null, Zc, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicTexture" in bb,
            get: bb => bb.metallicTexture,
            set: (bb, cb) => {
              bb.metallicTexture = cb
            }
          },
          metadata: cb
        }, Vk, Lk), (0, Jb.j)(bb, null, zc, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallic" in bb,
            get: bb => bb.metallic,
            set: (bb, cb) => {
              bb.metallic = cb
            }
          },
          metadata: cb
        }, uk, Yk), (0, Jb.j)(bb, null, qc, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughness" in bb,
            get: bb => bb.roughness,
            set: (bb, cb) => {
              bb.roughness = cb
            }
          },
          metadata: cb
        }, hk, Jk), (0, Jb.j)(bb, null, dc, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicF0Factor" in bb,
            get: bb => bb.metallicF0Factor,
            set: (bb, cb) => {
              bb.metallicF0Factor = cb
            }
          },
          metadata: cb
        }, gk, Bk), (0, Jb.j)(bb, null, Ac, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicReflectanceColor" in bb,
            get: bb => bb.metallicReflectanceColor,
            set: (bb, cb) => {
              bb.metallicReflectanceColor = cb
            }
          },
          metadata: cb
        }, tk, yk), (0, Jb.j)(bb, null, wc, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useOnlyMetallicFromMetallicReflectanceTexture" in bb,
            get: bb => bb.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (bb, cb) => {
              bb.useOnlyMetallicFromMetallicReflectanceTexture = cb
            }
          },
          metadata: cb
        }, Pk, Dk), (0, Jb.j)(bb, null, rc, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicReflectanceTexture" in bb,
            get: bb => bb.metallicReflectanceTexture,
            set: (bb, cb) => {
              bb.metallicReflectanceTexture = cb
            }
          },
          metadata: cb
        }, Ek, ik), (0, Jb.j)(bb, null, oc, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectanceTexture" in bb,
            get: bb => bb.reflectanceTexture,
            set: (bb, cb) => {
              bb.reflectanceTexture = cb
            }
          },
          metadata: cb
        }, Ok, Gk), (0, Jb.j)(bb, null, Sc, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "microSurfaceTexture" in bb,
            get: bb => bb.microSurfaceTexture,
            set: (bb, cb) => {
              bb.microSurfaceTexture = cb
            }
          },
          metadata: cb
        }, Kk, Zk), (0, Jb.j)(bb, null, Rc, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "bumpTexture" in bb,
            get: bb => bb.bumpTexture,
            set: (bb, cb) => {
              bb.bumpTexture = cb
            }
          },
          metadata: cb
        }, zk, qk), (0, Jb.j)(bb, null, vc, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "lightmapTexture" in bb,
            get: bb => bb.lightmapTexture,
            set: (bb, cb) => {
              bb.lightmapTexture = cb
            }
          },
          metadata: cb
        }, dk, Ak), (0, Jb.j)(bb, null, Fc, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientColor" in bb,
            get: bb => bb.ambientColor,
            set: (bb, cb) => {
              bb.ambientColor = cb
            }
          },
          metadata: cb
        }, wk, rk), (0, Jb.j)(bb, null, xc, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "albedoColor" in bb,
            get: bb => bb.albedoColor,
            set: (bb, cb) => {
              bb.albedoColor = cb
            }
          },
          metadata: cb
        }, Sk, Rk), (0, Jb.j)(bb, null, jc, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseWeight" in bb,
            get: bb => bb.baseWeight,
            set: (bb, cb) => {
              bb.baseWeight = cb
            }
          },
          metadata: cb
        }, vk, Fk), (0, Jb.j)(bb, null, pc, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseDiffuseRoughness" in bb,
            get: bb => bb.baseDiffuseRoughness,
            set: (bb, cb) => {
              bb.baseDiffuseRoughness = cb
            }
          },
          metadata: cb
        }, xk, jk), (0, Jb.j)(bb, null, bs, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectivityColor" in bb,
            get: bb => bb.reflectivityColor,
            set: (bb, cb) => {
              bb.reflectivityColor = cb
            }
          },
          metadata: cb
        }, pk, bW), (0, Jb.j)(bb, null, cs, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectionColor" in bb,
            get: bb => bb.reflectionColor,
            set: (bb, cb) => {
              bb.reflectionColor = cb
            }
          },
          metadata: cb
        }, cW, sW), (0, Jb.j)(bb, null, ss, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "emissiveColor" in bb,
            get: bb => bb.emissiveColor,
            set: (bb, cb) => {
              bb.emissiveColor = cb
            }
          },
          metadata: cb
        }, kW, WW), (0, Jb.j)(bb, null, ks, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: bb => "microSurface" in bb,
            get: bb => bb.microSurface,
            set: (bb, cb) => {
              bb.microSurface = cb
            }
          },
          metadata: cb
        }, aW, TW), (0, Jb.j)(bb, null, Ws, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLightmapAsShadowmap" in bb,
            get: bb => bb.useLightmapAsShadowmap,
            set: (bb, cb) => {
              bb.useLightmapAsShadowmap = cb
            }
          },
          metadata: cb
        }, UW, IW), (0, Jb.j)(bb, null, as, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlphaFromAlbedoTexture" in bb,
            get: bb => bb.useAlphaFromAlbedoTexture,
            set: (bb, cb) => {
              bb.useAlphaFromAlbedoTexture = cb
            }
          },
          metadata: cb
        }, HW, fW), (0, Jb.j)(bb, null, Ts, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceAlphaTest" in bb,
            get: bb => bb.forceAlphaTest,
            set: (bb, cb) => {
              bb.forceAlphaTest = cb
            }
          },
          metadata: cb
        }, MW, XW), (0, Jb.j)(bb, null, Us, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: bb => "alphaCutOff" in bb,
            get: bb => bb.alphaCutOff,
            set: (bb, cb) => {
              bb.alphaCutOff = cb
            }
          },
          metadata: cb
        }, nW, mW), (0, Jb.j)(bb, null, Is, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSpecularOverAlpha" in bb,
            get: bb => bb.useSpecularOverAlpha,
            set: (bb, cb) => {
              bb.useSpecularOverAlpha = cb
            }
          },
          metadata: cb
        }, lW, QW), (0, Jb.j)(bb, null, Hs, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useMicroSurfaceFromReflectivityMapAlpha" in bb,
            get: bb => bb.useMicroSurfaceFromReflectivityMapAlpha,
            set: (bb, cb) => {
              bb.useMicroSurfaceFromReflectivityMapAlpha = cb
            }
          },
          metadata: cb
        }, eW, CW), (0, Jb.j)(bb, null, fs, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMetallicTextureAlpha" in bb,
            get: bb => bb.useRoughnessFromMetallicTextureAlpha,
            set: (bb, cb) => {
              bb.useRoughnessFromMetallicTextureAlpha = cb
            }
          },
          metadata: cb
        }, NW, VW), (0, Jb.j)(bb, null, Ms, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMetallicTextureGreen" in bb,
            get: bb => bb.useRoughnessFromMetallicTextureGreen,
            set: (bb, cb) => {
              bb.useRoughnessFromMetallicTextureGreen = cb
            }
          },
          metadata: cb
        }, LW, uW), (0, Jb.j)(bb, null, Xs, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: bb => "useMetallnessFromMetallicTextureBlue" in bb,
            get: bb => bb.useMetallnessFromMetallicTextureBlue,
            set: (bb, cb) => {
              bb.useMetallnessFromMetallicTextureBlue = cb
            }
          },
          metadata: cb
        }, YW, hW), (0, Jb.j)(bb, null, ns, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAmbientOcclusionFromMetallicTextureRed" in bb,
            get: bb => bb.useAmbientOcclusionFromMetallicTextureRed,
            set: (bb, cb) => {
              bb.useAmbientOcclusionFromMetallicTextureRed = cb
            }
          },
          metadata: cb
        }, JW, gW), (0, Jb.j)(bb, null, ms, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAmbientInGrayScale" in bb,
            get: bb => bb.useAmbientInGrayScale,
            set: (bb, cb) => {
              bb.useAmbientInGrayScale = cb
            }
          },
          metadata: cb
        }, BW, tW), (0, Jb.j)(bb, null, ls, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAutoMicroSurfaceFromReflectivityMap" in bb,
            get: bb => bb.useAutoMicroSurfaceFromReflectivityMap,
            set: (bb, cb) => {
              bb.useAutoMicroSurfaceFromReflectivityMap = cb
            }
          },
          metadata: cb
        }, yW, PW), (0, Jb.j)(bb, null, Qs, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: bb => "usePhysicalLightFalloff" in bb,
            get: bb => bb.usePhysicalLightFalloff
          },
          metadata: cb
        }, null, ds), (0, Jb.j)(bb, null, es, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: bb => "useGLTFLightFalloff" in bb,
            get: bb => bb.useGLTFLightFalloff
          },
          metadata: cb
        }, null, ds), (0, Jb.j)(bb, null, Cs, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRadianceOverAlpha" in bb,
            get: bb => bb.useRadianceOverAlpha,
            set: (bb, cb) => {
              bb.useRadianceOverAlpha = cb
            }
          },
          metadata: cb
        }, DW, EW), (0, Jb.j)(bb, null, Ns, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "useObjectSpaceNormalMap" in bb,
            get: bb => bb.useObjectSpaceNormalMap,
            set: (bb, cb) => {
              bb.useObjectSpaceNormalMap = cb
            }
          },
          metadata: cb
        }, iW, OW), (0, Jb.j)(bb, null, Vs, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: bb => "useParallax" in bb,
            get: bb => bb.useParallax,
            set: (bb, cb) => {
              bb.useParallax = cb
            }
          },
          metadata: cb
        }, GW, KW), (0, Jb.j)(bb, null, Ls, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: bb => "useParallaxOcclusion" in bb,
            get: bb => bb.useParallaxOcclusion,
            set: (bb, cb) => {
              bb.useParallaxOcclusion = cb
            }
          },
          metadata: cb
        }, ZW, zW), (0, Jb.j)(bb, null, us, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: bb => "parallaxScaleBias" in bb,
            get: bb => bb.parallaxScaleBias,
            set: (bb, cb) => {
              bb.parallaxScaleBias = cb
            }
          },
          metadata: cb
        }, qW, dW), (0, Jb.j)(bb, null, Ys, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableLighting" in bb,
            get: bb => bb.disableLighting,
            set: (bb, cb) => {
              bb.disableLighting = cb
            }
          },
          metadata: cb
        }, AW, wW), (0, Jb.j)(bb, null, hs, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceIrradianceInFragment" in bb,
            get: bb => bb.forceIrradianceInFragment,
            set: (bb, cb) => {
              bb.forceIrradianceInFragment = cb
            }
          },
          metadata: cb
        }, rW, oW), (0, Jb.j)(bb, null, gs, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: bb => "maxSimultaneousLights" in bb,
            get: bb => bb.maxSimultaneousLights,
            set: (bb, cb) => {
              bb.maxSimultaneousLights = cb
            }
          },
          metadata: cb
        }, SW, RW), (0, Jb.j)(bb, null, Bs, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertNormalMapX" in bb,
            get: bb => bb.invertNormalMapX,
            set: (bb, cb) => {
              bb.invertNormalMapX = cb
            }
          },
          metadata: cb
        }, vW, FW), (0, Jb.j)(bb, null, ts, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertNormalMapY" in bb,
            get: bb => bb.invertNormalMapY,
            set: (bb, cb) => {
              bb.invertNormalMapY = cb
            }
          },
          metadata: cb
        }, xW, jW), (0, Jb.j)(bb, null, ys, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: bb => "twoSidedLighting" in bb,
            get: bb => bb.twoSidedLighting,
            set: (bb, cb) => {
              bb.twoSidedLighting = cb
            }
          },
          metadata: cb
        }, pW, ba), (0, Jb.j)(bb, null, Ps, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlphaFresnel" in bb,
            get: bb => bb.useAlphaFresnel,
            set: (bb, cb) => {
              bb.useAlphaFresnel = cb
            }
          },
          metadata: cb
        }, ca, sa), (0, Jb.j)(bb, null, Ds, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLinearAlphaFresnel" in bb,
            get: bb => bb.useLinearAlphaFresnel,
            set: (bb, cb) => {
              bb.useLinearAlphaFresnel = cb
            }
          },
          metadata: cb
        }, ka, Wa), (0, Jb.j)(bb, null, Es, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "environmentBRDFTexture" in bb,
            get: bb => bb.environmentBRDFTexture,
            set: (bb, cb) => {
              bb.environmentBRDFTexture = cb
            }
          },
          metadata: cb
        }, aa, Ta), (0, Jb.j)(bb, null, is, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceNormalForward" in bb,
            get: bb => bb.forceNormalForward,
            set: (bb, cb) => {
              bb.forceNormalForward = cb
            }
          },
          metadata: cb
        }, Ua, Ia), (0, Jb.j)(bb, null, Os, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: bb => "enableSpecularAntiAliasing" in bb,
            get: bb => bb.enableSpecularAntiAliasing,
            set: (bb, cb) => {
              bb.enableSpecularAntiAliasing = cb
            }
          },
          metadata: cb
        }, Ha, fa), (0, Jb.j)(bb, null, Gs, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: bb => "useHorizonOcclusion" in bb,
            get: bb => bb.useHorizonOcclusion,
            set: (bb, cb) => {
              bb.useHorizonOcclusion = cb
            }
          },
          metadata: cb
        }, Ma, Xa), (0, Jb.j)(bb, null, Ks, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRadianceOcclusion" in bb,
            get: bb => bb.useRadianceOcclusion,
            set: (bb, cb) => {
              bb.useRadianceOcclusion = cb
            }
          },
          metadata: cb
        }, na, ma), (0, Jb.j)(bb, null, Zs, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: bb => "unlit" in bb,
            get: bb => bb.unlit,
            set: (bb, cb) => {
              bb.unlit = cb
            }
          },
          metadata: cb
        }, la, Qa), (0, Jb.j)(bb, null, zs, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "applyDecalMapAfterDetailMap" in bb,
            get: bb => bb.applyDecalMapAfterDetailMap,
            set: (bb, cb) => {
              bb.applyDecalMapAfterDetailMap = cb
            }
          },
          metadata: cb
        }, ea, Ca), cb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cb
        })
      })(), bb.PBRMATERIAL_OPAQUE = uc.PBRMATERIAL_OPAQUE, bb.PBRMATERIAL_ALPHATEST = uc.PBRMATERIAL_ALPHATEST, bb.PBRMATERIAL_ALPHABLEND = uc.PBRMATERIAL_ALPHABLEND, bb.PBRMATERIAL_ALPHATESTANDBLEND = uc.PBRMATERIAL_ALPHATESTANDBLEND, bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = uc.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, bb
    })();
    const zW = "KHR_materials_diffuse_transmission";

    function qW(bb, cb) {
      const sb = cb.subSurface;
      let kb = null;
      return sb.translucencyIntensityTexture ? kb = sb.translucencyIntensityTexture : sb.thicknessTexture && sb.useMaskFromThicknessTexture && (kb = sb.thicknessTexture), kb && !sb.useGltfStyleTextures ? (Bb.c.Warn(`${bb}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${cb.name}`, 1), null) : kb
    }
    class dW {
      constructor(bb) {
        this.name = zW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, cb, sb) {
        const kb = [];
        if (sb instanceof ZW && this._isExtensionEnabled(sb)) {
          const cb = qW(bb, sb);
          return cb && kb.push(cb), sb.subSurface.translucencyColorTexture && kb.push(sb.subSurface.translucencyColorTexture), kb
        }
        return kb
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const cb = bb.subSurface;
        return !!cb.isTranslucencyEnabled && (!bb.unlit && !cb.useAlbedoToTintTranslucency && cb.useGltfStyleTextures && 1 === cb.volumeIndexOfRefraction && 0 === cb.minimumThickness && 0 === cb.maximumThickness)
      }
      postExportMaterialAsync(bb, cb, sb) {
        return new Promise((kb => {
          if (sb instanceof ZW && this._isExtensionEnabled(sb)) {
            this._wasUsed = !0;
            const kb = sb.subSurface,
              Wb = qW(bb, sb),
              ab = 0 == kb.translucencyIntensity ? void 0 : kb.translucencyIntensity,
              Tb = this._exporter._materialExporter.getTextureInfo(Wb) ?? void 0,
              Ub = !kb.translucencyColor || kb.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : kb.translucencyColor.Osb(),
              Ib = this._exporter._materialExporter.getTextureInfo(kb.translucencyColorTexture) ?? void 0,
              Hb = {
                diffuseTransmissionFactor: ab,
                diffuseTransmissionTexture: Tb,
                diffuseTransmissionColorFactor: Ub,
                diffuseTransmissionColorTexture: Ib
              };
            (Tb || Ib) && this._exporter._materialNeedsUVsSet.add(sb), cb.extensions = cb.extensions || {}, cb.extensions[zW] = Hb
          }
          kb(cb)
        }))
      }
    }
    let AW = !1;

    function wW() {
      AW || (AW = !0, Gk.RegisterExtension(zW, (bb => new dW(bb))))
    }
    wW();
    const rW = "KHR_materials_dispersion";
    class oW {
      constructor() {
        this.name = rW, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const cb = bb.subSurface;
        return !(!cb.isRefractionEnabled && !cb.isDispersionEnabled)
      }
      postExportMaterialAsync(bb, cb, sb) {
        return new Promise((bb => {
          if (sb instanceof ZW && this._isExtensionEnabled(sb)) {
            this._wasUsed = !0;
            const bb = {
              dispersion: sb.subSurface.dispersion
            };
            cb.extensions = cb.extensions || {}, cb.extensions[rW] = bb
          }
          bb(cb)
        }))
      }
    }
    let SW = !1;

    function RW() {
      SW || (SW = !0, Gk.RegisterExtension(rW, (() => new oW)))
    }
    RW();
    const vW = "KHR_materials_emissive_strength";
    class FW {
      constructor() {
        this.name = vW, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(bb, cb, sb) {
        return await new Promise((bb => {
          if (!(sb instanceof ZW)) return bb(cb);
          const kb = sb.emissiveColor.scale(sb.emissiveIntensity),
            Wb = Math.max(...kb.Osb());
          if (Wb > 1) {
            cb.emissiveFactor = kb.scale(1 / Wb).Osb(), this._wasUsed = !0;
            const bb = {
              emissiveStrength: Wb
            };
            cb.extensions || (cb.extensions = {}), cb.extensions[vW] = bb
          } else cb.emissiveFactor = kb.Osb();
          return bb(cb)
        }))
      }
    }
    let xW = !1;

    function jW() {
      xW || (xW = !0, Gk.RegisterExtension(vW, (() => new FW)))
    }
    jW();
    const pW = "KHR_materials_ior";
    class ba {
      constructor() {
        this.name = pW, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(bb) {
        return !bb.unlit && (bb instanceof jc ? 1.5 != bb.specularIor : bb instanceof ZW && (void 0 != bb.indexOfRefraction && 1.5 != bb.indexOfRefraction))
      }
      postExportMaterialAsync(bb, cb, sb) {
        return new Promise((bb => {
          if (sb instanceof ZW && this._isExtensionEnabled(sb)) {
            this._wasUsed = !0;
            const bb = {
              ior: sb.indexOfRefraction
            };
            cb.extensions = cb.extensions || {}, cb.extensions[pW] = bb
          } else if (sb instanceof jc && this._isExtensionEnabled(sb)) {
            this._wasUsed = !0;
            const bb = {
              ior: sb.specularIor
            };
            cb.extensions = cb.extensions || {}, cb.extensions[pW] = bb
          }
          bb(cb)
        }))
      }
    }
    let ca = !1;

    function sa() {
      ca || (ca = !0, Gk.RegisterExtension(pW, (() => new ba)))
    }
    sa();
    const ka = "KHR_materials_iridescence";
    class Wa {
      constructor(bb) {
        this.name = ka, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, cb, sb) {
        const kb = [];
        if (sb instanceof uc) {
          if (sb.iridescence.isEnabled) return sb.iridescence.texture && kb.push(sb.iridescence.texture), sb.iridescence.thicknessTexture && sb.iridescence.thicknessTexture !== sb.iridescence.texture && kb.push(sb.iridescence.thicknessTexture), kb
        } else if (sb instanceof jc && sb.thinFilmWeight > 0) return sb.thinFilmWeightTexture && kb.push(sb.thinFilmWeightTexture), sb.thinFilmThicknessTexture && sb.thinFilmThicknessTexture !== sb.thinFilmWeightTexture && kb.push(sb.thinFilmThicknessTexture), kb;
        return []
      }
      postExportMaterialAsync(bb, cb, sb) {
        return new Promise((bb => {
          if (sb instanceof uc) {
            if (!sb.iridescence.isEnabled) return void bb(cb);
            this._wasUsed = !0, cb.extensions = cb.extensions || {};
            const kb = this._exporter._materialExporter.getTextureInfo(sb.iridescence.texture),
              Wb = this._exporter._materialExporter.getTextureInfo(sb.iridescence.thicknessTexture),
              ab = {
                iridescenceFactor: sb.iridescence.intensity,
                iridescenceIor: sb.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: sb.iridescence.minimumThickness,
                iridescenceThicknessMaximum: sb.iridescence.maximumThickness,
                iridescenceTexture: kb ?? void 0,
                iridescenceThicknessTexture: Wb ?? void 0
              };
            null === ab.iridescenceTexture && null === ab.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(sb), cb.extensions[ka] = ab
          } else if (sb instanceof jc) {
            if (sb.thinFilmWeight <= 0) return void bb(cb);
            this._wasUsed = !0, cb.extensions = cb.extensions || {};
            const kb = this._exporter._materialExporter.getTextureInfo(sb.thinFilmWeightTexture),
              Wb = this._exporter._materialExporter.getTextureInfo(sb.thinFilmThicknessTexture),
              ab = {
                iridescenceFactor: sb.thinFilmWeight,
                iridescenceIor: sb.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * sb.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * sb.thinFilmThickness,
                iridescenceTexture: kb ?? void 0,
                iridescenceThicknessTexture: Wb ?? void 0
              };
            null === ab.iridescenceTexture && null === ab.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(sb), cb.extensions[ka] = ab
          }
          bb(cb)
        }))
      }
    }
    let aa = !1;

    function Ta() {
      aa || (aa = !0, Gk.RegisterExtension(ka, (bb => new Wa(bb))))
    }
    Ta();
    const Ua = "KHR_materials_sheen";
    class Ia {
      constructor(bb) {
        this.name = Ua, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, cb, sb) {
        return sb instanceof ZW && sb.sheen.isEnabled && sb.sheen.texture ? [sb.sheen.texture] : []
      }
      async postExportMaterialAsync(bb, cb, sb) {
        return await new Promise((bb => {
          if (sb instanceof ZW) {
            if (!sb.sheen.isEnabled) return void bb(cb);
            this._wasUsed = !0, null == cb.extensions && (cb.extensions = {});
            const kb = {
              sheenColorFactor: sb.sheen.color.Osb(),
              sheenRoughnessFactor: sb.sheen.roughness ?? 0
            };
            null === kb.sheenColorTexture && null === kb.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(sb), sb.sheen.texture && (kb.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(sb.sheen.texture) ?? void 0), sb.sheen.textureRoughness && !sb.sheen.useRoughnessFromMainTexture ? kb.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(sb.sheen.textureRoughness) ?? void 0 : sb.sheen.texture && sb.sheen.useRoughnessFromMainTexture && (kb.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(sb.sheen.texture) ?? void 0), cb.extensions[Ua] = kb
          }
          bb(cb)
        }))
      }
    }
    let Ha = !1;

    function fa() {
      Ha || (Ha = !0, Gk.RegisterExtension(Ua, (bb => new Ia(bb))))
    }
    fa();
    const Ma = "KHR_materials_fuzz";

    function Xa(bb, cb) {
      const sb = new yb.e(cb.name, cb.EY());
      return sb._texture = bb, sb.coordinatesIndex = cb.coordinatesIndex, cb instanceof yb.e && (sb.uOffset = cb.uOffset, sb.vOffset = cb.vOffset, sb.uScale = cb.uScale, sb.vScale = cb.vScale, sb.wAng = cb.wAng), sb.wrapU = cb.wrapU, sb.wrapV = cb.wrapV, sb
    }
    class na {
      constructor(bb) {
        this.name = Ma, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = bb
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
      async postExportMaterialAdditionalTexturesAsync(bb, cb, sb) {
        if (sb instanceof jc) {
          const bb = [];
          if (sb.fuzzWeight > 0) {
            sb.fuzzWeightTexture && bb.push(sb.fuzzWeightTexture);
            let cb = !1;
            if (sb.fuzzRoughnessTexture && (sb._useFuzzRoughnessFromTextureAlpha ? bb.push(sb.fuzzRoughnessTexture) : cb = !0), sb.fuzzColorTexture && !cb && bb.push(sb.fuzzColorTexture), cb) {
              const cb = function(bb) {
                const cb = bb.fuzzColorTexture,
                  sb = cb && cb.getInternalTexture() ? cb.getInternalTexture().uniqueId : "NoFuzzColor",
                  kb = bb.fuzzRoughnessTexture;
                return `FuzzColor_${sb}_FuzzRoughness_${kb&&kb.getInternalTexture()?kb.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(sb);
              if (!this._cachedInternalTexturesMap[cb]) {
                const bb = await async function(bb) {
                  const cb = bb.EY(),
                    sb = bb.fuzzColorTexture,
                    kb = bb.fuzzRoughnessTexture;
                  return sb || kb ? (await Ts("FuzzTexture", Hs(sb ? Us(sb, 0) : Is(1), sb ? Us(sb, 1) : Is(1), sb ? Us(sb, 2) : Is(1), kb ? Us(kb, bb._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : Is(1)), cb)).getInternalTexture() : null
                }(sb);
                bb && (this._cachedInternalTexturesMap[cb] = bb)
              }
              this._cachedInternalTexturesMap[cb] && (sb.fuzzColorTexture && (this._mergedTexturesMap[sb.fuzzColorTexture.uniqueId] = Xa(this._cachedInternalTexturesMap[cb], sb.fuzzColorTexture), bb.push(this._mergedTexturesMap[sb.fuzzColorTexture.uniqueId])), sb.fuzzRoughnessTexture && (this._mergedTexturesMap[sb.fuzzRoughnessTexture.uniqueId] = Xa(this._cachedInternalTexturesMap[cb], sb.fuzzRoughnessTexture), bb.push(this._mergedTexturesMap[sb.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return bb
        }
        return []
      }
      async postExportMaterialAsync(bb, cb, sb) {
        return await new Promise((bb => {
          if (sb instanceof jc) {
            if (0 == sb.fuzzWeight) return void bb(cb);
            this._wasUsed = !0, null == cb.extensions && (cb.extensions = {});
            const kb = {
              fuzzFactor: sb.fuzzWeight,
              fuzzColorFactor: sb.fuzzColor.Osb(),
              fuzzRoughnessFactor: sb.fuzzRoughness
            };
            let Wb, ab;
            sb.fuzzWeightTexture && (kb.fuzzTexture = this._exporter._materialExporter.getTextureInfo(sb.fuzzWeightTexture) ?? void 0), sb.fuzzColorTexture && (Wb = this._mergedTexturesMap[sb.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[sb.fuzzColorTexture.uniqueId] : sb.fuzzColorTexture, kb.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Wb) ?? void 0), sb.fuzzRoughnessTexture && (ab = this._mergedTexturesMap[sb.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[sb.fuzzRoughnessTexture.uniqueId] : sb.fuzzRoughnessTexture, kb.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ab) ?? void 0), null === kb.fuzzColorTexture && null === kb.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(sb), cb.extensions[Ma] = kb
          }
          bb(cb)
        }))
      }
    }
    let ma = !1;

    function la() {
      ma || (ma = !0, Gk.RegisterExtension(Ma, (bb => new na(bb))))
    }
    la();
    const Qa = "KHR_materials_specular";
    class ea {
      constructor(bb) {
        this.name = Qa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, cb, sb) {
        const kb = [];
        return sb instanceof ZW && this._isExtensionEnabled(sb) ? (sb.metallicReflectanceTexture && kb.push(sb.metallicReflectanceTexture), sb.reflectanceTexture && kb.push(sb.reflectanceTexture), kb) : kb
      }
      _isExtensionEnabled(bb) {
        return !bb.unlit && (void 0 != bb.metallicF0Factor && 1 != bb.metallicF0Factor || void 0 != bb.metallicReflectanceColor && !bb.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(bb))
      }
      _hasTexturesExtension(bb) {
        return null != bb.metallicReflectanceTexture || null != bb.reflectanceTexture
      }
      postExportMaterialAsync(bb, cb, sb) {
        return new Promise((bb => {
          var kb;
          if (sb instanceof ZW && this._isExtensionEnabled(sb)) {
            this._wasUsed = !0, cb.extensions = cb.extensions || {};
            const bb = this._exporter._materialExporter.getTextureInfo(sb.metallicReflectanceTexture) ?? void 0,
              kb = this._exporter._materialExporter.getTextureInfo(sb.reflectanceTexture) ?? void 0,
              Wb = {
                specularFactor: 1 == sb.metallicF0Factor ? void 0 : sb.metallicF0Factor,
                specularTexture: bb,
                specularColorFactor: sb.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : sb.metallicReflectanceColor.Osb(),
                specularColorTexture: kb
              };
            this._hasTexturesExtension(sb) && this._exporter._materialNeedsUVsSet.add(sb), cb.extensions[Qa] = Wb
          } else if (sb instanceof jc) {
            cb.extensions = cb.extensions || {};
            const Wb = this._exporter._materialExporter.getTextureInfo(sb.specularWeightTexture) ?? void 0,
              ab = this._exporter._materialExporter.getTextureInfo(sb.specularColorTexture) ?? void 0,
              Tb = 1 == sb.specularWeight ? void 0 : sb.specularWeight,
              Ub = sb.specularColor.equalsFloats(1, 1, 1) ? void 0 : sb.specularColor.Osb();
            if (!ab && !Wb && void 0 === Tb && void 0 === Ub) return bb(cb);
            this._wasUsed = !0;
            const Ib = {
                specularEdgeColorEnabled: !0
              },
              Hb = {
                specularFactor: Tb,
                specularTexture: Wb,
                specularColorFactor: Ub,
                specularColorTexture: ab,
                extensions: {}
              };
            Hb.extensions.EXT_materials_specular_edge_color = Ib, (kb = this._exporter._glTF).extensionsUsed || (kb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Wb || ab) && this._exporter._materialNeedsUVsSet.add(sb), cb.extensions[Qa] = Hb
          }
          bb(cb)
        }))
      }
    }
    let Ca = !1;

    function Na() {
      Ca || (Ca = !0, Gk.RegisterExtension(Qa, (bb => new ea(bb))))
    }
    Na();
    const Va = "KHR_materials_transmission";
    class La {
      constructor(bb) {
        this.name = Va, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, cb, sb) {
        const kb = [];
        if (sb instanceof ZW) {
          if (this._isExtensionEnabled(sb)) return sb.subSurface.refractionIntensityTexture && sb.subSurface.useGltfStyleTextures && kb.push(sb.subSurface.refractionIntensityTexture), kb
        } else sb instanceof jc && (sb.transmissionWeight > 0 && sb.transmissionWeightTexture && (kb.push(sb.transmissionWeightTexture), sb.transmissionColorTexture && kb.push(sb.transmissionColorTexture)), sb.subsurfaceWeight > 0 && sb.subsurfaceWeightTexture && kb.push(sb.subsurfaceWeightTexture));
        return kb
      }
      _isExtensionEnabled(bb) {
        if (bb instanceof jc && !bb.unlit) return bb.transmissionWeight > 0 || bb.subsurfaceWeight > 0;
        if (bb instanceof ZW && !bb.unlit) {
          const cb = bb.subSurface;
          return cb.isRefractionEnabled && void 0 != cb.refractionIntensity && 0 != cb.refractionIntensity || null != cb.refractionIntensityTexture && cb.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(bb, cb, sb) {
        if (!this._isExtensionEnabled(sb)) return cb;
        if (sb instanceof ZW) {
          this._wasUsed = !0;
          const kb = sb.subSurface,
            Wb = {
              transmissionFactor: 0 === kb.refractionIntensity ? void 0 : kb.refractionIntensity
            };
          if (kb.refractionIntensityTexture)
            if (kb.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(sb);
              const bb = this._exporter._materialExporter.getTextureInfo(kb.refractionIntensityTexture);
              bb && (Wb.transmissionTexture = bb)
            } else Bb.c.Warn(`${bb}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          cb.extensions || (cb.extensions = {}), cb.extensions[Va] = Wb
        } else if (sb instanceof jc) {
          this._wasUsed = !0;
          const bb = {
            transmissionFactor: (1 - sb.transmissionWeight) * sb.subsurfaceWeight + sb.transmissionWeight
          };
          if (sb.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(sb);
            const cb = this._exporter._materialExporter.getTextureInfo(sb.transmissionWeightTexture);
            cb && (bb.transmissionTexture = cb)
          } else if (sb.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(sb);
            const cb = this._exporter._materialExporter.getTextureInfo(sb.subsurfaceWeightTexture);
            cb && (bb.transmissionTexture = cb)
          }
          if (0 == sb.transmissionDepth && (!sb.transmissionColor.equals(ob.e.White()) || sb.transmissionColorTexture) && cb.pbrMetallicRoughness && (cb.pbrMetallicRoughness.baseColorFactor || (cb.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), cb.pbrMetallicRoughness.baseColorFactor[0] *= sb.transmissionColor.r, cb.pbrMetallicRoughness.baseColorFactor[1] *= sb.transmissionColor.g, cb.pbrMetallicRoughness.baseColorFactor[2] *= sb.transmissionColor.b, sb.transmissionColorTexture && !cb.pbrMetallicRoughness.baseColorTexture)) {
            const bb = this._exporter._materialExporter.getTextureInfo(sb.transmissionColorTexture);
            bb && (cb.pbrMetallicRoughness.baseColorTexture = bb, this._exporter._materialNeedsUVsSet.add(sb))
          }
          cb.extensions || (cb.extensions = {}), cb.extensions[Va] = bb
        }
        return cb
      }
    }
    let ua = !1;

    function Ya() {
      ua || (ua = !0, Gk.RegisterExtension(Va, (bb => new La(bb))))
    }
    Ya();
    var ha = sb(39711);
    const Ja = "KHR_materials_unlit";
    class ga {
      constructor() {
        this.name = Ja, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(bb, cb, sb) {
        return new Promise((bb => {
          let kb = !1;
          sb instanceof ZW ? kb = sb.unlit : sb instanceof ha.f && (kb = sb.disableLighting), kb && (this._wasUsed = !0, null == cb.extensions && (cb.extensions = {}), cb.extensions[Ja] = {}), bb(cb)
        }))
      }
    }
    let Ba = !1;

    function ta() {
      Ba || (Ba = !0, Gk.RegisterExtension(Ja, (() => new ga)))
    }
    ta();
    const ya = "KHR_materials_volume";
    class Pa {
      constructor(bb) {
        this.name = ya, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, cb, sb) {
        const kb = [];
        if (sb instanceof ZW) {
          if (this._isExtensionEnabled(sb)) return sb.subSurface.thicknessTexture && kb.push(sb.subSurface.thicknessTexture), kb
        } else sb instanceof jc && (sb.transmissionWeight > 0 || sb.subsurfaceWeight > 0) && sb.geometryThicknessTexture && kb.push(sb.geometryThicknessTexture);
        return kb
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const cb = bb.subSurface;
        return !(!cb.isRefractionEnabled && !cb.isTranslucencyEnabled) && (void 0 != cb.maximumThickness && 0 != cb.maximumThickness || void 0 != cb.tintColorAtDistance && cb.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != cb.tintColor && cb.tintColor != ob.e.White() || this._hasTexturesExtension(bb))
      }
      _hasTexturesExtension(bb) {
        return null != bb.subSurface.thicknessTexture
      }
      postExportMaterialAsync(bb, cb, sb) {
        return new Promise((bb => {
          if (sb instanceof ZW && this._isExtensionEnabled(sb)) {
            this._wasUsed = !0;
            const bb = sb.subSurface,
              kb = {
                thicknessFactor: 0 == bb.maximumThickness ? void 0 : bb.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(bb.thicknessTexture) ?? void 0,
                attenuationDistance: bb.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : bb.tintColorAtDistance,
                attenuationColor: bb.tintColor.equalsFloats(1, 1, 1) ? void 0 : bb.tintColor.Osb()
              };
            this._hasTexturesExtension(sb) && this._exporter._materialNeedsUVsSet.add(sb), cb.extensions = cb.extensions || {}, cb.extensions[ya] = kb
          } else if (sb instanceof jc) {
            const bb = sb.transmissionWeight > 0 && !sb.geometryThinWalled,
              kb = sb.subsurfaceWeight > 0 && !sb.geometryThinWalled;
            if (bb || kb) {
              this._wasUsed = !0;
              const Wb = sb.geometryThickness,
                ab = this._exporter._materialExporter.getTextureInfo(sb.geometryThicknessTexture) ?? void 0;
              let Tb;
              ab && this._exporter._materialNeedsUVsSet.add(sb);
              const Ub = ob.e.White().Osb();
              if (bb && sb.transmissionDepth > 0) {
                const bb = 1 / sb.transmissionDepth;
                let cb = new Zb.p(-Math.log(sb.transmissionColor.r) * bb, -Math.log(sb.transmissionColor.g) * bb, -Math.log(sb.transmissionColor.b) * bb);
                const kb = new Zb.p(sb.transmissionScatter.r * bb, sb.transmissionScatter.g * bb, sb.transmissionScatter.b * bb),
                  Wb = cb.subtract(kb),
                  ab = Math.min(Wb.x, Wb.y, Wb.z);
                ab < 0 && (Wb.x = Wb.x - ab, Wb.y = Wb.y - ab, Wb.z = Wb.z - ab), cb = Wb.add(kb);
                Tb = 1 / Math.max(cb.x, cb.y, cb.z), Ub[0] = Math.exp(-cb.x * Tb), Ub[1] = Math.exp(-cb.y * Tb), Ub[2] = Math.exp(-cb.z * Tb)
              } else Tb = Number.MAX_VALUE, Ub[0] = 1, Ub[1] = 1, Ub[2] = 1;
              let Ib = 1;
              const Hb = ob.e.White().Osb();
              if (kb) {
                const bb = sb.subsurfaceRadius,
                  cb = sb.subsurfaceRadiusScale,
                  kb = new Zb.p(cb.r, cb.g, cb.b).multiplyByFloats(bb, bb, bb),
                  Wb = new Zb.p(1 / Math.max(kb.x, 1e-6), 1 / Math.max(kb.y, 1e-6), 1 / Math.max(kb.z, 1e-6));
                Ib = 1 / Math.max(Wb.x, Wb.y, Wb.z), Hb[0] = Math.exp(-Wb.x * Ib), Hb[1] = Math.exp(-Wb.y * Ib), Hb[2] = Math.exp(-Wb.z * Ib)
              }
              const fb = (1 - sb.transmissionWeight) * sb.subsurfaceWeight,
                Mb = fb + sb.transmissionWeight,
                Xb = 1 / Math.max(Mb, 1e-6),
                nb = sb.transmissionWeight * Xb,
                mb = fb * Xb,
                lb = Ub.map(((bb, cb) => bb * nb + Hb[cb] * mb)),
                Qb = {
                  thicknessFactor: Wb,
                  thicknessTexture: ab,
                  attenuationDistance: Tb * nb + Ib * mb,
                  attenuationColor: lb
                };
              cb.extensions = cb.extensions || {}, cb.extensions[ya] = Qb
            }
          }
          bb(cb)
        }))
      }
    }
    let Da = !1;

    function Ea() {
      Da || (Da = !0, Gk.RegisterExtension(ya, (bb => new Pa(bb))))
    }
    Ea();
    const ia = "KHR_materials_volume_scatter";
    class Oa {
      constructor(bb) {
        this.name = ia, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, cb, sb) {
        const kb = [];
        return sb instanceof jc && (sb.transmissionWeight > 0 && sb.transmissionScatterTexture && kb.push(sb.transmissionScatterTexture), sb.subsurfaceWeight > 0 && sb.subsurfaceColorTexture && kb.push(sb.subsurfaceColorTexture)), kb
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const cb = bb.transmissionWeight > 0 && !bb.geometryThinWalled && bb.transmissionDepth > 0 && !bb.transmissionScatter.equals(ob.e.Black()),
          sb = bb.subsurfaceWeight > 0 && !bb.geometryThinWalled;
        return !(!cb && !sb)
      }
      postExportMaterialAsync(bb, cb, sb) {
        return new Promise((bb => {
          if (sb instanceof jc && this._isExtensionEnabled(sb)) {
            this._wasUsed = !0;
            let bb = Zb.p.Zero(),
              kb = 0;
            if (sb.transmissionWeight > 0) {
              bb = function(bb) {
                const cb = new Zb.p(Math.sqrt(1 - bb.x), Math.sqrt(1 - bb.y), Math.sqrt(1 - bb.z)),
                  sb = new Zb.p(1, 1, 1),
                  kb = sb.subtract(cb),
                  Wb = sb.subtract(new Zb.p(.139, .139, .139).multiplyInPlace(cb)),
                  ab = sb.add(new Zb.p(1.17, 1.17, 1.17).multiplyInPlace(cb));
                return kb.multiplyInPlace(Wb).divideInPlace(ab)
              }(new Zb.p(sb.transmissionScatter.r, sb.transmissionScatter.g, sb.transmissionScatter.b)), kb = sb.transmissionScatterAnisotropy
            }
            const Wb = Zb.p.Zero();
            let ab = 0;
            sb.subsurfaceWeight > 0 && (Wb.set(sb.subsurfaceColor.r, sb.subsurfaceColor.g, sb.subsurfaceColor.b), ab = sb.subsurfaceScatterAnisotropy);
            const Tb = (1 - sb.transmissionWeight) * sb.subsurfaceWeight,
              Ub = Tb + sb.transmissionWeight,
              Ib = 1 / Math.max(Ub, 1e-6),
              Hb = sb.transmissionWeight * Ib,
              fb = Tb * Ib,
              Mb = {
                multiscatterColorFactor: bb.multiplyByFloats(Hb, Hb, Hb).addInPlace(Wb.multiplyByFloats(fb, fb, fb)).Osb(),
                scatterAnisotropy: kb * Hb + ab * fb
              };
            if (sb.subsurfaceWeight > 0 && sb.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(sb);
              const bb = this._exporter._materialExporter.getTextureInfo(sb.subsurfaceColorTexture);
              bb && (Mb.multiscatterColorTexture = bb)
            } else if (sb.transmissionWeight > 0 && sb.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(sb);
              const bb = this._exporter._materialExporter.getTextureInfo(sb.transmissionScatterTexture);
              bb && (Mb.multiscatterColorTexture = bb)
            }
            cb.extensions = cb.extensions || {}, cb.extensions[ia] = Mb
          }
          bb(cb)
        }))
      }
    }
    let Ga = !1;

    function Ka() {
      Ga || (Ga = !0, Gk.RegisterExtension(ia, (bb => new Oa(bb)), 101))
    }
    Ka();
    const Za = "KHR_materials_diffuse_roughness";
    class za {
      constructor(bb) {
        this.name = Za, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, cb, sb) {
        const kb = [];
        if (sb instanceof uc) {
          if (sb._baseDiffuseRoughness) return sb._baseDiffuseRoughnessTexture && kb.push(sb._baseDiffuseRoughnessTexture), kb
        } else if (sb instanceof jc && sb.baseDiffuseRoughness) return sb.baseDiffuseRoughnessTexture && kb.push(sb.baseDiffuseRoughnessTexture), kb;
        return []
      }
      postExportMaterialAsync(bb, cb, sb) {
        return new Promise((bb => {
          let kb = null,
            Wb = null;
          if (sb instanceof uc ? (kb = sb._baseDiffuseRoughness, Wb = sb._baseDiffuseRoughnessTexture) : sb instanceof jc && (kb = sb.baseDiffuseRoughness, Wb = sb.baseDiffuseRoughnessTexture), !kb) return void bb(cb);
          this._wasUsed = !0, cb.extensions = cb.extensions || {};
          const ab = {
            diffuseRoughnessFactor: kb,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Wb) ?? void 0
          };
          null !== ab.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(sb), cb.extensions[Za] = ab, bb(cb)
        }))
      }
    }
    let qa = !1;

    function da() {
      qa || (qa = !0, Gk.RegisterExtension(Za, (bb => new za(bb))))
    }
    da();
    const Aa = "KHR_materials_openpbr";
    class wa {
      constructor() {
        this.name = Aa, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(bb, cb, sb) {
        return new Promise((bb => {
          sb instanceof jc && (this._wasUsed = !0, cb.extensions = cb.extensions || {}, cb.extensions[Aa] = {}), bb(cb)
        }))
      }
    }
    let ra = !1;

    function oa() {
      ra || (ra = !0, Gk.RegisterExtension(Aa, (() => new wa)))
    }
    oa();
    const Sa = "KHR_texture_transform";
    class Ra {
      constructor() {
        this.name = Sa, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(bb, cb, sb) {
        if (sb.EY() || hc.g.Warn(`${bb}: "scene" is not defined for Babylon texture ${sb.name}!`), (0 !== sb.uAng || 0 !== sb.vAng) && (hc.g.Warn(`${bb}: Texture ${sb.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== sb.uRotationCenter || 0 !== sb.vRotationCenter)) return;
        const kb = {};
        let Wb = !1;
        if (0 === sb.uOffset && 0 === sb.vOffset || (kb.offset = [sb.uOffset, sb.vOffset], Wb = !0), 1 === sb.uScale && 1 === sb.vScale || (kb.scale = [sb.uScale, sb.vScale], Wb = !0), 0 !== sb.wAng) {
          if (0 !== sb.uRotationCenter || 0 !== sb.vRotationCenter) {
            if (sb.homogeneousRotationInUVTransform && sb.uScale !== sb.vScale) return void hc.g.Warn(`${bb}: Texture ${sb.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${Sa}.`);
            hc.g.Warn(`${bb}: Texture ${sb.name} with non-origin rotation center will be exported using an adjusted offset with ${Sa}.`), kb.offset = function(bb) {
              const {
                uOffset: cb,
                vOffset: sb,
                uRotationCenter: kb,
                vRotationCenter: Wb,
                uScale: ab,
                vScale: Tb,
                wAng: Ub
              } = bb, Ib = Math.cos(Ub), Hb = Math.sin(Ub), fb = kb * ab, Mb = Wb * Tb;
              return [cb + (fb * (1 - Ib) + Mb * Hb), sb + (Mb * (1 - Ib) - fb * Hb)]
            }(sb)
          }
          kb.rotation = -sb.wAng, Wb = !0
        }
        0 !== sb.coordinatesIndex && (kb.texCoord = sb.coordinatesIndex, Wb = !0), Wb && (this._wasUsed = !0, cb.extensions || (cb.extensions = {}), cb.extensions[Sa] = kb)
      }
    }
    let va = !1;

    function Fa() {
      va || (va = !0, Gk.RegisterExtension(Sa, (() => new Ra)))
    }
    Fa();
    var xa = sb(39466);
    const ja = "KHR_texture_basisu";
    class pa {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = ja, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      postExportTexture(bb, cb) {
        const sb = this._exporter._textures[cb.index],
          kb = sb.source;
        if (void 0 === kb) return;
        const Wb = this._exporter._images[kb];
        "image/ktx2" === (Wb.mimeType || (0, xa.g)(Wb.uri)) && (sb.source = void 0, sb.extensions || (sb.extensions = {}), sb.extensions[ja] = {
          source: kb
        }, this._wasUsed = !0)
      }
    }
    let bT = !1;

    function cT() {
      bT || (bT = !0, Gk.RegisterExtension(ja, (bb => new pa(bb))))
    }
    cT();
    const sT = "EXT_texture_webp";
    class kT {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = sT, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      postExportTexture(bb, cb) {
        const sb = this._exporter._textures[cb.index],
          kb = sb.source;
        if (void 0 === kb) return;
        const Wb = this._exporter._images[kb];
        "image/webp" === (Wb.mimeType || (0, xa.g)(Wb.uri)) && (sb.source = void 0, sb.extensions || (sb.extensions = {}), sb.extensions[sT] = {
          source: kb
        }, this._wasUsed = !0)
      }
    }
    let WT = !1;

    function aT() {
      WT || (WT = !0, Gk.RegisterExtension(sT, (bb => new kT(bb))))
    }
    aT();
    const TT = "EXT_texture_avif";
    class UT {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = TT, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      postExportTexture(bb, cb) {
        const sb = this._exporter._textures[cb.index],
          kb = sb.source;
        if (void 0 === kb) return;
        const Wb = this._exporter._images[kb];
        "image/avif" === (Wb.mimeType || (0, xa.g)(Wb.uri)) && (sb.source = void 0, sb.extensions || (sb.extensions = {}), sb.extensions[TT] = {
          source: kb
        }, this._wasUsed = !0)
      }
    }
    let IT = !1;

    function HT() {
      IT || (IT = !0, Gk.RegisterExtension(TT, (bb => new UT(bb))))
    }
    HT();
    class fT {
      static CreateSTL(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Wb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ab = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Ib = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const Hb = function(bb, cb, sb) {
            const Wb = [3 * bb[sb], 3 * bb[sb + 1], 3 * bb[sb + 2]],
              ab = [new kb.Fm(cb[Wb[0]], cb[Wb[0] + 2], cb[Wb[0] + 1]), new kb.Fm(cb[Wb[1]], cb[Wb[1] + 2], cb[Wb[1] + 1]), new kb.Fm(cb[Wb[2]], cb[Wb[2] + 2], cb[Wb[2] + 1])],
              Tb = ab[0].subtract(ab[1]),
              Ub = ab[2].subtract(ab[1]);
            return {
              v: ab,
              n: kb.Fm.Cross(Ub, Tb).normalize()
            }
          },
          Mb = function(bb, cb, sb, kb) {
            return cb = Xb(bb, cb, sb.x, kb), cb = Xb(bb, cb, sb.y, kb), Xb(bb, cb, sb.z, kb)
          },
          Xb = function(bb, cb, sb, kb) {
            return bb.setFloat32(cb, sb, kb), cb + 4
          },
          mb = function(bb) {
            if (Ub) {
              let cb = bb;
              bb instanceof nb.c && (cb = bb.Pkb);
              const sb = cb.getVerticesData(fb.f.PositionKind, !0, !0);
              if (!sb) return [];
              const Wb = kb.Fm.Zero();
              let ab;
              for (ab = 0; ab < sb.length; ab += 3) kb.Fm.TransformCoordinatesFromFloatsToRef(sb[ab], sb[ab + 1], sb[ab + 2], bb.computeWorldMatrix(!0), Wb).toArray(sb, ab);
              return sb
            }
            return bb.getVerticesData(fb.f.PositionKind) || []
          };
        Ub && (Tb = !0);
        let lb = "",
          Qb = 0,
          eb = 0;
        if (Wb) {
          for (let sb = 0; sb < bb.length; sb++) {
            const cb = bb[sb].Gsb();
            Qb += cb ? cb.length / 3 : 0
          }
          const cb = new ArrayBuffer(84 + 50 * Qb);
          lb = new DataView(cb), eb += 80, lb.setUint32(eb, Qb, ab), eb += 4
        } else Ib || (lb = "solid stlmesh\r\n");
        for (let kb = 0; kb < bb.length; kb++) {
          const cb = bb[kb];
          !Wb && Ib && (lb += "solid " + cb.name + "\r\n"), !Tb && cb instanceof Mk.e && cb.bakeCurrentTransformIntoVertices();
          const sb = mb(cb),
            Ub = cb.Gsb() || [];
          for (let bb = 0; bb < Ub.length; bb += 3) {
            const cb = Hb(Ub, sb, bb);
            Wb ? (eb = Mb(lb, eb, cb.n, ab), eb = Mb(lb, eb, cb.v[0], ab), eb = Mb(lb, eb, cb.v[1], ab), eb = Mb(lb, eb, cb.v[2], ab), eb += 2) : (lb += "\tfacet normal " + cb.n.x + " " + cb.n.y + " " + cb.n.z + "\r\n", lb += "\t\touter loop\r\n", lb += "\t\t\tvertex " + cb.v[0].x + " " + cb.v[0].y + " " + cb.v[0].z + "\r\n", lb += "\t\t\tvertex " + cb.v[1].x + " " + cb.v[1].y + " " + cb.v[1].z + "\r\n", lb += "\t\t\tvertex " + cb.v[2].x + " " + cb.v[2].y + " " + cb.v[2].z + "\r\n", lb += "\t\tendloop\r\n", lb += "\tendfacet\r\n")
          }!Wb && Ib && (lb += "endsolid " + name + "\r\n")
        }
        if (Wb || Ib || (lb += "endsolid stlmesh"), cb) {
          const bb = document.createElement("a"),
            cb = new Blob([lb], {
              type: "application/octet-stream"
            });
          bb.href = window.URL.createObjectURL(cb), bb.download = sb + ".stl", bb.click()
        }
        return lb
      }
    }

    function MT(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Wb = [];
      for (let ab = 0; ab < bb.length / sb; ab++) {
        const Tb = bb[ab * sb] * (kb ? -1 : 1),
          Ub = bb[ab * sb + 1],
          Ib = bb[ab * sb + 2];
        Wb.push(`(${Tb.toPrecision(cb.precision)}, ${Ub.toPrecision(cb.precision)}, ${Ib.toPrecision(cb.precision)})`)
      }
      return Wb.join(", ")
    }

    function XT(bb, cb) {
      const sb = [];
      for (let kb = 0; kb < bb.length / 2; kb++) {
        const Wb = bb[2 * kb],
          ab = bb[2 * kb + 1];
        sb.push(`(${Wb.toPrecision(cb.precision)}, ${(1-ab).toPrecision(cb.precision)})`)
      }
      return sb.join(", ")
    }

    function nT(bb, cb, sb, kb) {
      const Wb = bb.getVerticesData(fb.f.PositionKind),
        ab = bb.getVerticesData(fb.f.NormalKind);
      if (Wb && ab) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${sb}"\n\t\tint[] faceVertexCounts = [${function(bb){const cb=bb.Gsb()?.length?bb.getTotalIndices():bb.getTotalVertices();return Array(cb/3).fill(3).join(", ")}(bb)}]\n\t\tint[] faceVertexIndices = [${function(bb){const cb=bb.Gsb(),sb=cb?.length??bb.getTotalVertices(),kb=[];if(null!==cb)for(let Wb=0;Wb<sb;Wb++)kb.push(cb[Wb]);else for(let Wb=0;Wb<sb;Wb++)kb.push(Wb);return kb.join(", ")}(bb)}]\n\t\tnormal3f[] normals = [${MT(ab,cb,void 0,kb)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${MT(Wb,cb,void 0,kb)}]\n        ${function(bb,cb){let sb="";for(let Wb=0;Wb<4;Wb++){const kb=Wb>0?Wb:"",ab=bb.getVerticesData(fb.f.UVKind+(kb?kb+1:""));ab&&(sb+=`\n\t\ttexCoord2f[] primvars:st${kb} = [${XT(ab,cb)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const kb=bb.getVerticesData(fb.f.ColorKind);return kb&&(sb+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        MT(kb, cb, kb.length / bb.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),sb}(bb,cb)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function mT(bb, cb, sb, kb) {
      return `\n        def "Geometry"\n        {\n        ${nT(bb,cb,sb,kb)}\n        }\n        `
    }

    function lT(bb) {
      let cb = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return cb += bb, fflate.strToU8(cb)
    }

    function QT(bb) {
      const cb = bb.m;
      return `( ${eT(cb,0)}, ${eT(cb,4)}, ${eT(cb,8)}, ${eT(cb,12)} )`
    }

    function eT(bb, cb) {
      return `(${bb[cb+0]}, ${bb[cb+1]}, ${bb[cb+2]}, ${bb[cb+3]})`
    }

    function CT(bb, cb) {
      const sb = "Object_" + bb.uniqueId,
        kb = QT(cb);
      return `def Xform "${sb}" (\n\tprepend references = @./geometries/Geometry_${bb.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${kb}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${bb.material.uniqueId}>\n}\n\n`
    }

    function NT(bb) {
      switch (bb) {
        case Yb.e.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case Yb.e.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case Yb.e.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function VT(bb) {
      return `(${bb.x}, ${bb.y})`
    }

    function LT(bb) {
      return `(${bb.r}, ${bb.g}, ${bb.b})`
    }

    function uT(bb) {
      return "image/jpeg" === bb || "image/png" === bb
    }

    function YT(bb, cb, sb, Wb, ab, Tb) {
      const Ub = bb.getInternalTexture().uniqueId + "_" + bb.invertY,
        Hb = bb.mimeType || (0, Ib.c)(bb.getInternalTexture()?.url ?? ""),
        fb = uT(Hb) ? Hb : "image/png",
        Mb = "image/jpeg" === fb ? "jpg" : "png";
      ab[Ub] = {
        texture: bb,
        mimeType: fb,
        ext: Mb
      };
      const Xb = bb.coordinatesIndex > 0 ? "st" + bb.coordinatesIndex : "st",
        nb = new kb.Vector2(bb.uScale, bb.vScale),
        mb = new kb.Vector2(bb.uOffset, bb.vOffset),
        lb = bb.wAng,
        Qb = Math.sin(lb),
        eb = Math.cos(lb);
      return mb.y = 1 - mb.y - nb.y, mb.x += Qb * nb.x, mb.y += (1 - eb) * nb.y, `\n    def Shader "PrimvarReader_${sb}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${Xb}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${sb}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${cb.uniqueId}/PrimvarReader_${sb}.outputs:result>\n        float inputs:rotation = ${(lb*(180/Math.PI)).toFixed(Tb.precision)}\n        float2 inputs:scale = ${VT(nb)}\n        float2 inputs:translation = ${VT(mb)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${bb.uniqueId}_${sb}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${Ub}.${Mb}@\n        float2 inputs:st.connect = </Root/Materials/Material_${cb.uniqueId}/Transform2d_${sb}.outputs:result>\n        ${Wb?"float4 inputs:scale = "+function(bb){return`(${bb.r}, ${bb.g}, ${bb.b}, 1.0)`}(Wb):""}\n        token inputs:sourceColorSpace = "${bb.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${NT(bb.wrapU)}"\n        token inputs:wrapT = "${NT(bb.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${cb.needAlphaBlending()||cb.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function hT(bb, cb, sb) {
      const kb = "\t\t\t",
        Wb = [],
        ab = [],
        {
          diffuseMap: Tb,
          diffuse: Ub,
          alphaCutOff: Ib,
          emissiveMap: Hb,
          emissive: fb,
          normalMap: Mb,
          roughnessMap: Xb,
          roughnessChannel: nb,
          roughness: mb,
          metalnessMap: lb,
          metalnessChannel: eb,
          metalness: Cb,
          aoMap: Nb,
          aoMapChannel: Vb,
          aoMapIntensity: Lb,
          alphaMap: ub,
          ior: Yb,
          clearCoatEnabled: hb,
          clearCoat: Jb,
          clearCoatMap: gb,
          clearCoatRoughness: Bb,
          clearCoatRoughnessMap: tb
        } = function(bb) {
          const cb = {
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
          return bb instanceof Uk.StandardMaterial ? {
            ...cb,
            diffuseMap: bb.diffuseTexture,
            diffuse: bb.diffuseColor,
            alphaCutOff: bb.alphaCutOff,
            emissiveMap: bb.emissiveTexture,
            emissive: bb.emissiveColor,
            roughness: 1,
            alphaMap: bb.opacityTexture
          } : bb instanceof uc ? {
            ...cb,
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
          } : cb
        }(bb);
      return null !== Tb ? (Wb.push(`${kb}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Tb.uniqueId}_diffuse.outputs:rgb>`), bb.needAlphaBlending() ? Wb.push(`${kb}float inputs:opacity.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Tb.uniqueId}_diffuse.outputs:a>`) : bb.needAlphaTesting() && (Wb.push(`${kb}float inputs:opacity.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Tb.uniqueId}_diffuse.outputs:a>`), Wb.push(`${kb}float inputs:opacityThreshold = ${Ib}`)), ab.push(YT(Tb, bb, "diffuse", Ub, cb, sb))) : Wb.push(`${kb}color3f inputs:diffuseColor = ${LT(Ub||Qb.Color3.White())}`), null !== Hb ? (Wb.push(`${kb}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Hb.uniqueId}_emissive.outputs:rgb>`), ab.push(YT(Hb, bb, "emissive", fb, cb, sb))) : fb && fb.toLuminance() > 0 && Wb.push(`${kb}color3f inputs:emissiveColor = ${LT(fb)}`), null !== Mb && (Wb.push(`${kb}normal3f inputs:normal.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Mb.uniqueId}_normal.outputs:rgb>`), ab.push(YT(Mb, bb, "normal", null, cb, sb))), null !== Nb && (Wb.push(`${kb}float inputs:occlusion.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Nb.uniqueId}_occlusion.outputs:${Vb}>`), ab.push(YT(Nb, bb, "occlusion", new Qb.Color3(Lb, Lb, Lb), cb, sb))), null !== Xb ? (Wb.push(`${kb}float inputs:roughness.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Xb.uniqueId}_roughness.outputs:${nb}>`), ab.push(YT(Xb, bb, "roughness", new Qb.Color3(mb, mb, mb), cb, sb))) : Wb.push(`${kb}float inputs:roughness = ${mb}`), null !== lb ? (Wb.push(`${kb}float inputs:metallic.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${lb.uniqueId}_metallic.outputs:${eb}>`), ab.push(YT(lb, bb, "metallic", new Qb.Color3(Cb, Cb, Cb), cb, sb))) : Wb.push(`${kb}float inputs:metallic = ${Cb}`), null !== ub ? (Wb.push(`${kb}float inputs:opacity.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${ub.uniqueId}_opacity.outputs:r>`), Wb.push(`${kb}float inputs:opacityThreshold = 0.0001`), ab.push(YT(ub, bb, "opacity", null, cb, sb))) : Wb.push(`${kb}float inputs:opacity = ${bb.alpha}`), hb && (null !== gb ? (Wb.push(`${kb}float inputs:clearcoat.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${gb.uniqueId}_clearcoat.outputs:r>`), ab.push(YT(gb, bb, "clearcoat", new Qb.Color3(Jb, Jb, Jb), cb, sb))) : Wb.push(`${kb}float inputs:clearcoat = ${Jb}`), null !== tb ? (Wb.push(`${kb}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${tb.uniqueId}_clearcoatRoughness.outputs:g>`), ab.push(YT(tb, bb, "clearcoatRoughness", new Qb.Color3(Bb, Bb, Bb), cb, sb))) : Wb.push(`${kb}float inputs:clearcoatRoughness = ${Bb}`)), Wb.push(`${kb}float inputs:ior = ${Yb}`), `\n\tdef Material "Material_${bb.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Wb.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${bb.uniqueId}/PreviewSurface.outputs:surface>\n\n${ab.join("\n")}\n\n\t}\n`
    }

    function JT(bb) {
      bb.computeWorldMatrix(!0);
      const cb = bb.getWorldMatrix().clone(),
        sb = bb.EY().useRightHandedSystem;
      let kb = bb.material?._getEffectiveOrientation(bb) ?? bb.sideOrientation,
        Tb = !sb,
        Ub = bb.parent;
      for (; Ub;) {
        if (Gs(Ub, sb) && null === Ub.parent) {
          sb || (cb.multiplyToRef(Ub.getWorldMatrix().invert(), cb), kb = kb === ab.e.ClockWiseSideOrientation ? ab.e.CounterClockWiseSideOrientation : ab.e.ClockWiseSideOrientation), Tb = !1;
          break
        }
        Ub = Ub.parent
      }
      return cb.determinant() < 0 && Wb.Tools.Warn(`Mesh ${bb.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: cb,
        windingOrder: kb === ab.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: Tb
      }
    }
    async function gT(bb, cb, sb) {
      const ab = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...cb
      };
      "undefined" === typeof fflate && await Wb.Tools.LoadScriptAsync(ab.fflateUrl);
      const Tb = {};
      Tb[ab.modelFileName] = null;
      let Ub = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      Ub += function(bb) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===bb.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${bb.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${bb.planeAnchoringAlignment}"`:""}\n            `
      }(ab);
      const Ib = {};
      for (const kb of bb.meshes) {
        if (0 === kb.getTotalVertices()) continue;
        const bb = kb,
          cb = bb.geometry,
          Hb = bb.material;
        if (!Hb || !cb || sb && !sb(bb)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(Hb.getClassName())) {
          const sb = "geometries/Geometry_" + cb.uniqueId + ".usda",
            {
              matrix: kb,
              windingOrder: Wb,
              convertToRightHanded: fb
            } = JT(bb);
          if (!(sb in Tb)) {
            const bb = mT(cb, ab, Wb, fb);
            Tb[sb] = lT(bb)
          }
          Hb.uniqueId in Ib || (Ib[Hb.uniqueId] = Hb), Ub += CT(bb, kb)
        } else Wb.Tools.Warn("USDZExportAsync does not support this material type: " + Hb.getClassName())
      }
      bb.activeCamera && ab.exportCamera && (Ub += function(bb, cb) {
        const sb = "Camera_" + bb.uniqueId,
          Wb = QT(kb.Matrix.RotationY(Math.PI).multiply(bb.getWorldMatrix()));
        if (bb.mode === Yb.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${sb}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Wb}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${bb.minZ.toPrecision(cb.precision)}, ${bb.maxZ.toPrecision(cb.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(bb.orthoLeft||1)+Math.abs(bb.orthoRight||1))).toPrecision(cb.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(bb.orthoTop||1)+Math.abs(bb.orthoBottom||1))).toPrecision(cb.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const kb = bb.Sm().getAspectRatio(bb),
            ab = cb.cameraSensorWidth || 35;
          return `def Camera "${sb}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Wb}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${bb.minZ.toPrecision(cb.precision)}, ${bb.maxZ.toPrecision(cb.precision)})\n\t\t\tfloat focalLength = ${(ab/(2*Math.tan(.5*bb.fov))).toPrecision(cb.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(ab*kb).toPrecision(cb.precision)}\n\t\t\tfloat verticalAperture = ${(ab/kb).toPrecision(cb.precision)}            \n\t\t}\n\t\n\t`
        }
      }(bb.activeCamera, ab)), Ub += "\n            }\n        }";
      const Hb = {};
      Ub += function(bb, cb, sb) {
        const kb = [];
        for (const Wb in bb) {
          const ab = bb[Wb];
          kb.push(hT(ab, cb, sb))
        }
        return `\n    def "Materials"\n{\n${kb.join("")}\n}\n\n`
      }(Ib, Hb, ab), Ub += "\n    }", Tb[ab.modelFileName] = fflate.strToU8(Ub);
      for (const kb in Hb) {
        const {
          texture: bb,
          ext: cb,
          mimeType: sb
        } = Hb[kb], Wb = await es(bb);
        if (Wb && uT(Wb.mimeType) && Wb.mimeType === sb) Tb[`textures/Texture_${kb}.${cb}`] = new Uint8Array(Wb.data);
        else {
          const Wb = bb.getSize(),
            ab = await (0, Vb.e)(bb),
            Ub = await hb.DumpTools.DumpDataAsync(Wb.width, Wb.height, ab, sb, void 0, !1, !0);
          Tb[`textures/Texture_${kb}.${cb}`] = new Uint8Array(Ub).slice()
        }
      }
      let fb = 0;
      for (const kb in Tb) {
        const bb = Tb[kb];
        if (!bb) continue;
        fb += 34 + kb.length;
        const cb = 63 & fb;
        if (4 !== cb) {
          const sb = new Uint8Array(64 - cb);
          Tb[kb] = [bb, {
            extra: {
              12345: sb
            }
          }]
        }
        fb = bb.length
      }
      return fflate.zipSync(Tb, {
        level: 0
      })
    }
    var BT = sb(40523);
    class tT {
      static Export(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          sb = arguments.length > 2 ? arguments[2] : void 0;
        if (!bb || 0 === bb.bones.length) throw new Error("Invalid or empty skeleton provided");
        let kb = cb;
        cb && 0 !== cb.length || (kb = bb.animations.map((bb => bb.name)));
        let Wb = null;
        for (const Hb of kb) {
          const cb = bb.getAnimationRange(Hb);
          cb && (Wb = Wb ? new BT.c("animation-range", Math.min(Wb.from, cb.from), Math.max(Wb.to, cb.to)) : cb)
        }
        if (!Wb && (bb.animations.length > 0 && (Wb = bb.getAnimationRange(bb.animations[0].name)), !Wb)) throw new Error("No animation range found in skeleton");
        const ab = sb || 1 / (bb.animations[0]?.framePerSecond || 30),
          Tb = this._BuildBoneHierarchy(bb, kb);
        let Ub = 0;
        for (const Hb of Tb) Hb.positionKeys.length > 0 && (Ub = Math.max(Ub, Hb.positionKeys.length)), Hb.rotationKeys.length > 0 && (Ub = Math.max(Ub, Hb.rotationKeys.length));
        0 === Ub && (Ub = Math.floor((Wb.to - Wb.from) / ab) + 1);
        let Ib = "";
        return Ib += "HIERARCHY\n", Ib += this._ExportHierarchy(Tb, 0), Ib += "MOTION\n", Ib += `Frames: ${Ub}\n`, Ib += `Frame Time: ${ab.toFixed(6)}\n`, Ib += this._ExportMotionData(Tb, Ub, 0, kb), Ib
      }
      static _BuildBoneHierarchy(bb, cb) {
        const sb = new Map,
          kb = [];
        for (const Wb of bb.bones) {
          const bb = {
            bone: Wb,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          sb.set(Wb, bb)
        }
        for (const Wb of bb.bones) {
          const bb = sb.get(Wb);
          if (Wb.animations.length > 0)
            for (const sb of Wb.animations) cb.includes(sb.name) && ("position" === sb.targetProperty ? (bb.hasPositionChannels = !0, bb.positionKeys.push(...sb.getKeys())) : "rotationQuaternion" === sb.targetProperty && (bb.hasRotationChannels = !0, bb.rotationKeys.push(...sb.getKeys())));
          if (Wb.getParent()) {
            const cb = sb.get(Wb.getParent());
            cb && cb.children.push(bb)
          } else kb.push(bb)
        }
        return kb
      }
      static _ExportHierarchy(bb, cb) {
        let sb = "";
        const kb = "    ".repeat(cb);
        for (const Wb of bb) {
          const bb = Wb.bone;
          if (this._IsEndSite(Wb)) {
            sb += `${kb}End Site\n`, sb += `${kb}{\n`;
            const cb = this._GetBoneOffset(bb);
            sb += `${kb}    OFFSET ${cb.x.toFixed(6)} ${cb.y.toFixed(6)} ${cb.z.toFixed(6)}\n`, sb += `${kb}}\n`
          } else {
            sb += `${0===cb?"ROOT":`${kb}JOINT`} ${bb.name}\n`, sb += `${kb}{\n`;
            const ab = this._GetBoneOffset(bb);
            sb += `${kb}    OFFSET ${ab.x.toFixed(6)} ${ab.y.toFixed(6)} ${ab.z.toFixed(6)}\n`;
            const Tb = [];
            Wb.hasPositionChannels && Tb.push("Xposition", "Yposition", "Zposition"), Wb.hasRotationChannels && Tb.push("Zrotation", "Xrotation", "Yrotation"), Tb.length > 0 && (sb += `${kb}    CHANNELS ${Tb.length} ${Tb.join(" ")}\n`), Wb.children.length > 0 && (sb += this._ExportHierarchy(Wb.children, cb + 1)), sb += `${kb}}\n`
          }
        }
        return sb
      }
      static _IsEndSite(bb) {
        return 0 === bb.children.length
      }
      static _GetBoneOffset(bb) {
        try {
          if (!bb.getParent()) return bb.getRestMatrix().getTranslation();
          return bb.getLocalMatrix().getTranslation()
        } catch (cb) {
          return kb.Fm.Zero()
        }
      }
      static _ExportMotionData(bb, cb, sb, kb) {
        let Wb = "";
        for (let ab = 0; ab < cb; ab++) {
          const cb = [];
          this._CollectFrameValues(bb, ab + sb, cb, kb), Wb += cb.map((bb => bb.toFixed(6))).join(" ") + "\n"
        }
        return Wb
      }
      static _CollectFrameValues(bb, cb, sb, kb) {
        for (const Wb of bb)
          if (!this._IsEndSite(Wb)) {
            if (Wb.hasPositionChannels) {
              const bb = this._GetPositionAtFrameIndex(Wb.positionKeys, cb);
              sb.push(bb.x, bb.y, bb.z)
            }
            if (Wb.hasRotationChannels) {
              const bb = this._GetRotationAtFrameIndex(Wb.rotationKeys, cb),
                kb = this._QuaternionToEuler(bb);
              sb.push(kb.z, kb.x, kb.y)
            }
            Wb.children.length > 0 && this._CollectFrameValues(Wb.children, cb, sb, kb)
          }
      }
      static _GetPositionAtFrameIndex(bb, cb) {
        if (0 === bb.length) return kb.Fm.Zero();
        return bb[Math.max(0, Math.min(cb, bb.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(bb, cb) {
        if (0 === bb.length) return kb.Quaternion.Identity();
        return bb[Math.max(0, Math.min(cb, bb.length - 1))].value.clone()
      }
      static _QuaternionToEuler(bb) {
        const cb = new kb.Matrix;
        bb.toRotationMatrix(cb);
        const sb = cb.m;
        let ab, Tb, Ub;
        const Ib = Math.sqrt(sb[0] * sb[0] + sb[1] * sb[1]);
        return Ib > is.d ? (ab = Math.atan2(sb[6], sb[10]), Tb = Math.atan2(-sb[2], Ib), Ub = Math.atan2(sb[1], sb[0])) : (ab = Math.atan2(-sb[9], sb[5]), Tb = Math.atan2(-sb[2], Ib), Ub = 0), new kb.Fm(Wb.Tools.ToDegrees(ab), Wb.Tools.ToDegrees(Tb), Wb.Tools.ToDegrees(Ub))
      }
    }

    function yT(bb) {
      return "string" === typeof bb?.name
    }
    const PT = Symbol("__xml:meta$__"),
      DT = Symbol("__xml:name$__");

    function ET(bb, cb) {
      Object.prototype.hasOwnProperty.call(bb.metadata, PT) || (bb.metadata[PT] = []), bb.metadata[PT].push(cb)
    }

    function iT(bb) {
      return (cb, sb) => {
        cb[DT] = bb
      }
    }

    function OT() {
      return (bb, cb) => ET(cb, {
        kind: "none",
        prop: String(cb.name),
        ignore: !0
      })
    }

    function GT(bb) {
      return (cb, sb) => ET(sb, {
        kind: "attr",
        prop: String(sb.name),
        ...bb
      })
    }

    function KT(bb) {
      return (cb, sb) => ET(sb, {
        kind: "elem",
        prop: String(sb.name),
        ...bb
      })
    }

    function ZT(bb) {
      const cb = "function" === typeof bb ? bb : bb?.constructor,
        sb = cb?.[Symbol.metadata];
      if (!sb) return [];
      const kb = [];
      let Wb = sb;
      for (; Wb;) Object.prototype.hasOwnProperty.call(Wb, PT) && kb.push(...Wb[PT]), Wb = Object.getPrototypeOf(Wb);
      return kb
    }

    function zT(bb) {
      const cb = bb?.constructor?.[DT];
      return cb || void 0
    }

    function qT(bb) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(bb)
    }

    function dT(bb) {
      if (yT(bb)) return bb;
      const cb = (bb ?? "").trim();
      if (!cb) return {
        name: ""
      };
      const sb = cb.indexOf(":");
      if (-1 === sb) return {
        name: cb
      };
      if (-1 !== cb.indexOf(":", sb + 1)) return {
        name: cb
      };
      const kb = cb.slice(0, sb),
        Wb = cb.slice(sb + 1);
      return qT(kb) && qT(Wb) ? {
        ns: kb,
        name: Wb
      } : {
        name: cb
      }
    }

    function AT(bb, cb) {
      return cb ? `${cb}:${bb}` : bb
    }
    const wT = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      rT = Object.freeze({
        number: wT
      });

    function oT(bb) {
      const cb = bb?.eps ?? wT.eps;
      return {
        eps: cb,
        maxDecimalsCap: bb?.maxDecimalsCap ?? wT.maxDecimalsCap,
        trimTrailingZeros: bb?.trimTrailingZeros ?? wT.trimTrailingZeros,
        fixedDecimals: bb?.fixedDecimals,
        allowScientific: bb?.allowScientific ?? wT.allowScientific,
        snapNearZero: bb?.snapNearZero ?? wT.snapNearZero,
        zeroThreshold: bb?.zeroThreshold ?? cb,
        perAttributeEps: bb?.perAttributeEps
      }
    }

    function ST(bb) {
      return {
        number: oT(bb?.number)
      }
    }
    class RT {
      constructor(bb) {
        if (this.o = bb, this._o = bb.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(bb) {
        if (!Number.isFinite(bb)) throw new Error(`Cannot format non-finite number: ${bb}`);
        const cb = this._o,
          sb = this._clampInt(cb.maxDecimalsCap ?? 15, 0, 20),
          kb = cb.trimTrailingZeros ?? !0,
          Wb = cb.snapNearZero ?? !0,
          ab = cb.zeroThreshold ?? cb.eps,
          Tb = 1 / cb.eps;
        let Ub, Ib = Math.round(bb * Tb) / Tb;
        if (Object.is(Ib, -0) && (Ib = 0), Wb && Math.abs(Ib) <= ab && (Ib = 0), Ub = void 0 !== cb.fixedDecimals ? this._clampInt(cb.fixedDecimals, 0, sb) : this._clampInt(Math.ceil(-Math.log10(cb.eps)), 0, sb), cb.allowScientific, 0 === Ub) return String(Math.trunc(Ib));
        let Hb = Ib.toFixed(Ub);
        if (kb && void 0 === cb.fixedDecimals && (Hb = Hb.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Hb)) throw new Error(`Scientific notation not allowed in XML output: ${Hb}`);
        return Hb
      }
      _clampInt(bb, cb, sb) {
        return Number.isFinite(bb) ? (bb = Math.trunc(bb), Math.max(cb, Math.min(sb, bb))) : cb
      }
    }

    function vT(bb) {
      return bb instanceof Date
    }

    function FT(bb) {
      return "string" === typeof bb
    }

    function xT(bb) {
      return "string" === typeof bb || "number" === typeof bb || "boolean" === typeof bb || "bigint" === typeof bb || vT(bb)
    }

    function jT(bb) {
      return "number" === typeof bb || "boolean" === typeof bb || "bigint" === typeof bb || vT(bb)
    }
    class pT {
      constructor(bb, cb) {
        this._ns = new Map, this._prefixCount = 0, this._builder = bb, this._format = ST(cb), this._nFmt = new RT(this._format)
      }
      withNamespace() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        for (const kb of cb) this._assignNamespace(kb);
        return this
      }
      serialize(bb, cb) {
        if (!(cb = cb ?? zT(bb))) throw new Error("can not find name for given object");
        const sb = dT(cb);
        sb.ns && this._assignNamespace(sb.ns, "xmlns"), this._gatherNamespaces(bb, new WeakSet);
        const kb = this._builder.ele(null, sb.name);
        for (const [Wb, ab] of Array.from(this._ns.entries())) kb.att("xmlns", ab, Wb);
        this._writeObjectContent(kb, bb, (new WeakSet).add(bb)), this._builder.end()
      }
      _writeObject(bb, cb, sb) {
        if (sb.has(cb)) return;
        if (sb.add(cb), Array.isArray(cb)) {
          for (const kb of cb) jT(kb) || (FT(kb) ? this._builder.text(kb) : this._writeObject(bb, kb, sb));
          return
        }
        const kb = zT(cb);
        if (!kb) return;
        const Wb = dT(kb),
          ab = this._getPrefix(Wb),
          Tb = AT(Wb.name, ab);
        bb.ele(null, Tb), this._writeObjectContent(bb, cb, sb), this._builder.end()
      }
      _getPrefix(bb) {
        if (bb.ns) {
          const cb = this._ns.get(bb.ns.toLowerCase());
          if ("xmlns" !== cb) return cb
        }
      }
      _writeObjectContent(bb, cb, sb) {
        const kb = ZT(cb) ?? [],
          Wb = new Map;
        for (const Tb of kb) {
          const bb = Wb.get(Tb.prop) ?? [];
          bb.push(Tb), Wb.set(Tb.prop, bb)
        }
        const ab = Object.keys(cb).sort(((bb, cb) => {
          const sb = (Wb.get(bb) ?? []).some((bb => "attr" === bb.kind));
          return sb === (Wb.get(cb) ?? []).some((bb => "attr" === bb.kind)) ? 0 : sb ? -1 : 1
        }));
        for (const Tb of ab) {
          const kb = cb[Tb];
          if (null === kb || void 0 === kb) continue;
          const ab = Wb.get(Tb);
          if (ab) {
            if (ab.some((bb => !0 === bb.ignore || "none" === bb.kind))) continue;
            for (const cb of ab) {
              const sb = cb.name ?? cb.prop.toLowerCase();
              if (sb) switch (cb.kind) {
                case "attr": {
                  let Wb = null;
                  if ("number" === typeof kb && this._nFmt && (Wb = this._nFmt.toString(kb)), cb.formatter) {
                    Wb = new cb.formatter(this._format).toString(kb)
                  }
                  if (Wb = Wb ?? kb.toString(), Wb) {
                    const cb = dT(sb),
                      kb = this._getPrefix(cb),
                      ab = AT(cb.name, kb);
                    bb.att(null, ab, Wb)
                  }
                  break
                }
              }
            }
          } else jT(kb) || (FT(kb) ? this._builder.text(kb) : this._writeObject(bb, kb, sb))
        }
      }
      _gatherNamespaces(bb, cb) {
        if (cb.has(bb)) return;
        if (cb.add(bb), Array.isArray(bb)) {
          for (const sb of bb) xT(sb) || this._gatherNamespaces(sb, cb);
          return
        }
        const sb = zT(bb);
        sb && this._assignNamespace(sb);
        const kb = ZT(bb) ?? [],
          Wb = new Map;
        for (const Tb of kb) {
          const bb = Wb.get(Tb.prop) ?? [];
          bb.push(Tb), Wb.set(Tb.prop, bb)
        }
        const ab = [];
        for (const Tb of Object.keys(bb)) {
          const cb = bb[Tb];
          if (null === cb || void 0 === cb) continue;
          const sb = Wb.get(Tb);
          if (sb) {
            if (sb.some((bb => !0 === bb.ignore || "none" === bb.kind))) continue;
            for (const bb of sb) bb.name && this._assignNamespace(bb.name)
          }
          ab.push(cb)
        }
        for (const Tb of ab) xT(Tb) || this._gatherNamespaces(Tb, cb)
      }
      _assignNamespace(bb, cb) {
        const sb = dT(bb);
        if (sb?.ns) {
          const bb = sb.ns.toLowerCase();
          this._ns.get(bb) || this._ns.set(bb, cb ?? this._buildNsPrefix(bb))
        } else if ("xmlns" === cb) {
          const bb = sb.name.toLowerCase();
          this._ns.get(bb) || this._ns.set(bb, cb ?? this._buildNsPrefix(bb))
        }
      }
      _buildNsPrefix(bb) {
        let cb, sb = !1;
        do {
          cb = "ns" + this._prefixCount++;
          for (const bb of Array.from(this._ns.values()))
            if (bb === cb) {
              sb = !0;
              break
            }
        } while (sb);
        return cb
      }
    }
    class bU {}
    var cU;
    bU.OpenTag = "<", bU.CloseTag = ">", bU.Slash = "/", bU.Question = "?", bU.Quote = '"', bU.Equal = "=", bU.Space = " ", bU.Semicolon = ":", bU.Dec = "<?xml", bU.Xml = "xml", bU.Xmlns = "xmlns", bU.Xsi = "xsi", bU.VersionKeyword = "version", bU.EncodingKeyword = "encoding", bU.StandaloneKeyword = "standalone",
      function(bb) {
        bb[bb.Declaration = 0] = "Declaration", bb[bb.Tag = 1] = "Tag", bb[bb.Attribute = 2] = "Attribute", bb[bb.Text = 3] = "Text"
      }(cU || (cU = {}));
    class sU {
      constructor(bb) {
        this._ctxStack = [], this._d = 0, this._w = bb
      }
      dec(bb, cb, sb) {
        return this._w.write(bU.Dec), this._writeAttStr(bU.VersionKeyword, bb), cb && this._writeAttStr(bU.EncodingKeyword, cb), void 0 !== sb && this._writeAttStr(bU.StandaloneKeyword, sb ? "yes" : "no"), this._w.write(bU.Question, bU.CloseTag), this
      }
      att(bb, cb, sb) {
        const kb = this._peekContext();
        if (!kb) throw new Error("att() without open element");
        if (kb.closed) throw new Error(`att() after start tag closed for <${kb.name}>`);
        if (this._isXmlnsDecl(bb, cb)) {
          if (cb === bU.Xmlns) kb.defaultNs = sb, this._registerNamespace(kb, "", sb), this._writeAttStr(bU.Xmlns, sb);
          else if (bb) this._registerNamespace(kb, cb, sb), this._writeAttStr(`${bb}:${cb}`, sb);
          else {
            const bb = cb.slice(6);
            this._registerNamespace(kb, bb, sb), this._writeAttStr(cb, sb)
          }
          return kb.lastToken = cU.Attribute, this
        }
        let Wb = cb;
        if (bb) {
          Wb = `${this._ensurePrefixDeclared(kb,bb)}:${cb}`
        }
        return kb.lastToken = cU.Attribute, this._writeAttStr(Wb, sb), this
      }
      ele(bb, cb) {
        const sb = this._peekContext();
        sb && this._closeOpenTagIfNeeded(sb);
        let kb = cb;
        if (bb) {
          kb = `${this._lookupPrefix(bb)??bb}:${cb}`
        }
        return this._pushContext(kb, ++this._d), this._w.write(bU.OpenTag, kb), this
      }
      text(bb) {
        const cb = this._peekContext();
        if (!cb) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(cb), cb.lastToken = cU.Text, this._w.write(this._escText(bb)), this
      }
      end() {
        const bb = this._popContext();
        return bb && (this._d--, bb.closed ? this._w.write(bU.OpenTag, bU.Slash, bb.name, bU.CloseTag) : this._w.write(bU.Slash, bU.CloseTag)), this
      }
      _pushContext(bb, cb) {
        const sb = new sU.Context(bb, cb);
        return this._ctxStack.push(sb), sb
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
      _writeAttStr(bb, cb) {
        this._w.write(bU.Space, bb, bU.Equal, bU.Quote, this._escAttr(cb), bU.Quote)
      }
      _lookupPrefix(bb) {
        let cb = this._ctxStack.length - 1;
        if (cb >= 0)
          do {
            const sb = this._ctxStack[cb--],
              kb = sb.ns2prefix?.get(bb);
            if (kb) return kb
          } while (cb >= 0)
      }
      _escText(bb) {
        return bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(bb) {
        return this._escText(bb).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(bb, cb) {
        if (bb) return bb === bU.Xmlns;
        const sb = cb.length,
          kb = bU.Xmlns.length;
        return sb >= kb && (cb.startsWith(bU.Xmlns) && (cb.length == kb || cb[kb] == bU.Semicolon))
      }
      _registerNamespace(bb, cb, sb) {
        if (cb === bU.Xml || cb === bU.Xmlns) throw new Error(`reserved prefix '${cb}'`);
        const kb = bb.prefix2ns.get(cb);
        if (kb && kb !== sb) throw new Error(`prefix '${cb}' already bound to a different namespace`);
        bb.ns2prefix.get(sb) || bb.ns2prefix.set(sb, cb), bb.prefix2ns.set(cb, sb)
      }
      _allocPrefix(bb) {
        let cb = 1;
        for (;;) {
          const sb = "ns" + cb++;
          if (!bb.prefix2ns.has(sb)) return sb
        }
      }
      _ensurePrefixDeclared(bb, cb) {
        const sb = this._lookupPrefix(cb);
        if (sb) return sb;
        if (bb.closed) throw new Error(`can not declare namespace after start tag closed for <${bb.name}>`);
        const kb = this._allocPrefix(bb);
        return this._writeAttStr(`${bU.Xmlns}:${kb}`, cb), this._registerNamespace(bb, kb, cb), kb
      }
      _closeOpenTagIfNeeded(bb) {
        bb.closed || (this._w.write(bU.CloseTag), bb.closed = !0)
      }
    }
    sU.Context = class {
      constructor(bb, cb) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = bb, this.depth = cb
      }
    };
    class kU {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        if (0 === cb.length) return this;
        const kb = cb.join("");
        return this._chunks.push(kb), this.count += kb.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class WU {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = bb, this._opts = cb, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        if (0 === cb.length) return this;
        const kb = cb.join("");
        if (0 === kb.length) return this;
        this._pending += kb, this._pendingChars += kb.length;
        const Wb = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Wb && this.flush(), this
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
    const aU = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      TU = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var UU, IU;
    ! function(bb) {
      bb.micron = "micron", bb.millimeter = "millimeter", bb.centimeter = "centimeter", bb.inch = "inch", bb.foot = "foot", bb.meter = "meter"
    }(UU || (UU = {})),
    function(bb) {
      bb.model = "model", bb.solidsupport = "solidsupport", bb.support = "support", bb.surface = "surface", bb.other = "other"
    }(IU || (IU = {}));
    const HU = "http://schemas.openxmlformats.org/package/2006/content-types",
      fU = "http://schemas.openxmlformats.org/package/2006/relationships";
    var MU;
    ! function(bb) {
      bb.Relationships = "application/vnd.openxmlformats-package.relationships+xml", bb.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", bb.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", bb.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", bb.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", bb.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", bb.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", bb.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", bb.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", bb.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", bb.Png = "image/png", bb.Jpeg = "image/jpeg", bb.Tiff = "image/tiff", bb.Xml = "application/xml"
    }(MU || (MU = {}));
    const XU = "_rels/",
      nU = "3D/",
      mU = "3dmodel.model",
      lU = ".rels",
      QU = "[Content_Types].xml";
    class eU {
      static IsKnown(bb) {
        return eU.Known.has(bb)
      }
      static IsThreeDimModel(bb) {
        return bb === eU.ThreeDimModel
      }
    }
    eU.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", eU.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", eU.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", eU.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", eU.Known = new Set([eU.ThreeDimModel, eU.Thumbnail, eU.PrintTicket, eU.MustPreserve]);
    let CU = (() => {
        let bb, cb, sb = [iT({
            ns: HU,
            name: "Types"
          })],
          kb = [];
        cb = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Jb.p)(cb, "ThreeMfContentTypes"), (() => {
          const Wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Jb.j)(null, bb = {
            value: cb
          }, sb, {
            kind: "class",
            name: cb.name,
            metadata: Wb
          }, null, kb), cb = bb.value, Wb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wb
          }), (0, Jb.m)(cb, kb)
        })(), cb
      })(),
      NU = (() => {
        let bb, cb, sb, kb, Wb = [iT({
            ns: HU,
            name: "Default"
          })],
          ab = [],
          Tb = [],
          Ub = [],
          Ib = [],
          Hb = [];
        cb = class {
          constructor(bb, cb) {
            this.ext = (0, Jb.m)(this, Tb, void 0), this.ct = ((0, Jb.m)(this, Ub), (0, Jb.m)(this, Ib, void 0)), (0, Jb.m)(this, Hb), this.ext = bb, this.ct = cb
          }
        };
        return (0, Jb.p)(cb, "ThreeMfContentType"), (() => {
          const fb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sb = [GT({
            name: {
              ns: HU,
              name: "Extension"
            }
          })], kb = [GT({
            name: {
              ns: HU,
              name: "ContentType"
            }
          })], (0, Jb.j)(null, null, sb, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: bb => "ext" in bb,
              get: bb => bb.ext,
              set: (bb, cb) => {
                bb.ext = cb
              }
            },
            metadata: fb
          }, Tb, Ub), (0, Jb.j)(null, null, kb, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: bb => "ct" in bb,
              get: bb => bb.ct,
              set: (bb, cb) => {
                bb.ct = cb
              }
            },
            metadata: fb
          }, Ib, Hb), (0, Jb.j)(null, bb = {
            value: cb
          }, Wb, {
            kind: "class",
            name: cb.name,
            metadata: fb
          }, null, ab), cb = bb.value, fb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fb
          }), (0, Jb.m)(cb, ab)
        })(), cb
      })(),
      VU = (() => {
        let bb, cb, sb = [iT({
            ns: fU,
            name: "Relationships"
          })],
          kb = [];
        cb = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Jb.p)(cb, "ThreeMfRelationships"), (() => {
          const Wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Jb.j)(null, bb = {
            value: cb
          }, sb, {
            kind: "class",
            name: cb.name,
            metadata: Wb
          }, null, kb), cb = bb.value, Wb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wb
          }), (0, Jb.m)(cb, kb)
        })(), cb
      })(),
      LU = (() => {
        let bb, cb, sb, kb, Wb, ab = [iT({
            ns: fU,
            name: "Relationship"
          })],
          Tb = [],
          Ub = [],
          Ib = [],
          Hb = [],
          fb = [],
          Mb = [],
          Xb = [];
        cb = class {
          constructor(bb, cb, sb) {
            this.id = (0, Jb.m)(this, Ub, void 0), this.type = ((0, Jb.m)(this, Ib), (0, Jb.m)(this, Hb, void 0)), this.target = ((0, Jb.m)(this, fb), (0, Jb.m)(this, Mb, void 0)), (0, Jb.m)(this, Xb), this.id = bb, this.type = cb, this.target = sb
          }
        };
        return (0, Jb.p)(cb, "ThreeMfRelationship"), (() => {
          const nb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sb = [GT({
            name: "Id"
          })], kb = [GT({
            name: "Type"
          })], Wb = [GT({
            name: "Target"
          })], (0, Jb.j)(null, null, sb, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: bb => "id" in bb,
              get: bb => bb.id,
              set: (bb, cb) => {
                bb.id = cb
              }
            },
            metadata: nb
          }, Ub, Ib), (0, Jb.j)(null, null, kb, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: bb => "type" in bb,
              get: bb => bb.type,
              set: (bb, cb) => {
                bb.type = cb
              }
            },
            metadata: nb
          }, Hb, fb), (0, Jb.j)(null, null, Wb, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: bb => "target" in bb,
              get: bb => bb.target,
              set: (bb, cb) => {
                bb.target = cb
              }
            },
            metadata: nb
          }, Mb, Xb), (0, Jb.j)(null, bb = {
            value: cb
          }, ab, {
            kind: "class",
            name: cb.name,
            metadata: nb
          }, null, Tb), cb = bb.value, nb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nb
          }), (0, Jb.m)(cb, Tb)
        })(), cb
      })();
    class uU {
      constructor(bb, cb, sb) {
        this.contentTypes = bb, this.relationships = cb, this.model = sb
      }
    }
    class YU {
      static Zero() {
        return new YU([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(bb) {
        this.values = bb
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class hU {
      constructor(bb) {
        this.o = bb, this._f = new RT(bb)
      }
      toString(bb) {
        return bb.values.map((bb => this._f.toString(bb))).join(" ")
      }
    }
    let JU = (() => {
        let bb, cb, sb, kb, Wb, ab = [iT({
            ns: aU,
            name: "model"
          })],
          Tb = [],
          Ub = [],
          Ib = [],
          Hb = [],
          fb = [],
          Mb = [],
          Xb = [];
        cb = class {
          constructor() {
            this.unit = (0, Jb.m)(this, Ub, UU.millimeter), this.requiredextensions = ((0, Jb.m)(this, Ib), (0, Jb.m)(this, Hb, void 0)), this.recommendedextensions = ((0, Jb.m)(this, fb), (0, Jb.m)(this, Mb, void 0)), this.metadata = (0, Jb.m)(this, Xb)
          }
        };
        return (0, Jb.p)(cb, "ThreeMfModel"), (() => {
          const nb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sb = [GT({
            name: "unit"
          })], kb = [GT({
            name: "requiredextensions"
          })], Wb = [GT({
            name: "recommendedextensions"
          })], (0, Jb.j)(null, null, sb, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: bb => "unit" in bb,
              get: bb => bb.unit,
              set: (bb, cb) => {
                bb.unit = cb
              }
            },
            metadata: nb
          }, Ub, Ib), (0, Jb.j)(null, null, kb, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: bb => "requiredextensions" in bb,
              get: bb => bb.requiredextensions,
              set: (bb, cb) => {
                bb.requiredextensions = cb
              }
            },
            metadata: nb
          }, Hb, fb), (0, Jb.j)(null, null, Wb, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: bb => "recommendedextensions" in bb,
              get: bb => bb.recommendedextensions,
              set: (bb, cb) => {
                bb.recommendedextensions = cb
              }
            },
            metadata: nb
          }, Mb, Xb), (0, Jb.j)(null, bb = {
            value: cb
          }, ab, {
            kind: "class",
            name: cb.name,
            metadata: nb
          }, null, Tb), cb = bb.value, nb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nb
          })
        })(), cb.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, Jb.m)(cb, Tb), cb
      })(),
      gU = (() => {
        let bb, cb, sb, kb, Wb, ab = [iT({
            ns: aU,
            name: "meta"
          })],
          Tb = [],
          Ub = [],
          Ib = [],
          Hb = [],
          fb = [],
          Mb = [],
          Xb = [];
        cb = class {
          constructor(bb, cb, sb, kb) {
            this.name = (0, Jb.m)(this, Ub, void 0), this.preserve = ((0, Jb.m)(this, Ib), (0, Jb.m)(this, Hb, void 0)), this.type = ((0, Jb.m)(this, fb), (0, Jb.m)(this, Mb, void 0)), this.value = (0, Jb.m)(this, Xb), this.name = bb, this.value = cb, this.preserve = sb, this.type = kb
          }
        };
        return (0, Jb.p)(cb, "ThreeMfMeta"), (() => {
          const nb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sb = [GT({
            name: "name"
          })], kb = [GT({
            name: "preserve"
          })], Wb = [GT({
            name: "type"
          })], (0, Jb.j)(null, null, sb, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, cb) => {
                bb.name = cb
              }
            },
            metadata: nb
          }, Ub, Ib), (0, Jb.j)(null, null, kb, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: bb => "preserve" in bb,
              get: bb => bb.preserve,
              set: (bb, cb) => {
                bb.preserve = cb
              }
            },
            metadata: nb
          }, Hb, fb), (0, Jb.j)(null, null, Wb, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: bb => "type" in bb,
              get: bb => bb.type,
              set: (bb, cb) => {
                bb.type = cb
              }
            },
            metadata: nb
          }, Mb, Xb), (0, Jb.j)(null, bb = {
            value: cb
          }, ab, {
            kind: "class",
            name: cb.name,
            metadata: nb
          }, null, Tb), cb = bb.value, nb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nb
          }), (0, Jb.m)(cb, Tb)
        })(), cb
      })(),
      BU = (() => {
        let bb, cb, sb = [iT({
            ns: aU,
            name: "metadatagroup"
          })],
          kb = [];
        cb = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, Jb.p)(cb, "ThreeMfMetadataGroup"), (() => {
          const Wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Jb.j)(null, bb = {
            value: cb
          }, sb, {
            kind: "class",
            name: cb.name,
            metadata: Wb
          }, null, kb), cb = bb.value, Wb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wb
          }), (0, Jb.m)(cb, kb)
        })(), cb
      })(),
      tU = (() => {
        let bb, cb, sb = [iT({
            ns: aU,
            name: "resources"
          })],
          kb = [];
        cb = class {
          constructor() {
            this.object = []
          }
        };
        return (0, Jb.p)(cb, "ThreeMfResources"), (() => {
          const Wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Jb.j)(null, bb = {
            value: cb
          }, sb, {
            kind: "class",
            name: cb.name,
            metadata: Wb
          }, null, kb), cb = bb.value, Wb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wb
          }), (0, Jb.m)(cb, kb)
        })(), cb
      })(),
      yU = (() => {
        let bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb = [iT({
            ns: aU,
            name: "object"
          })],
          fb = [],
          Mb = [],
          Xb = [],
          nb = [],
          mb = [],
          lb = [],
          Qb = [],
          eb = [],
          Cb = [],
          Nb = [],
          Vb = [],
          Lb = [],
          ub = [],
          Yb = [],
          hb = [];
        cb = class {
          constructor(bb) {
            let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IU.model;
            this.id = (0, Jb.m)(this, Mb, void 0), this.type = ((0, Jb.m)(this, Xb), (0, Jb.m)(this, nb, void 0)), this.thumbnail = ((0, Jb.m)(this, mb), (0, Jb.m)(this, lb, void 0)), this.partnumber = ((0, Jb.m)(this, Qb), (0, Jb.m)(this, eb, void 0)), this.name = ((0, Jb.m)(this, Cb), (0, Jb.m)(this, Nb, void 0)), this.pid = ((0, Jb.m)(this, Vb), (0, Jb.m)(this, Lb, void 0)), this.pindex = ((0, Jb.m)(this, ub), (0, Jb.m)(this, Yb, void 0)), this.metadatagroup = (0, Jb.m)(this, hb), this.id = bb, this.type = cb
          }
        };
        return (0, Jb.p)(cb, "ThreeMfObject"), (() => {
          const gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sb = [GT({
            name: "id"
          })], kb = [GT({
            name: "type"
          })], Wb = [GT({
            name: "thumbnail"
          })], ab = [GT({
            name: "partnumber"
          })], Tb = [GT({
            name: "name"
          })], Ub = [GT({
            name: "pid"
          })], Ib = [GT({
            name: "pindex"
          })], (0, Jb.j)(null, null, sb, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: bb => "id" in bb,
              get: bb => bb.id,
              set: (bb, cb) => {
                bb.id = cb
              }
            },
            metadata: gb
          }, Mb, Xb), (0, Jb.j)(null, null, kb, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: bb => "type" in bb,
              get: bb => bb.type,
              set: (bb, cb) => {
                bb.type = cb
              }
            },
            metadata: gb
          }, nb, mb), (0, Jb.j)(null, null, Wb, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: bb => "thumbnail" in bb,
              get: bb => bb.thumbnail,
              set: (bb, cb) => {
                bb.thumbnail = cb
              }
            },
            metadata: gb
          }, lb, Qb), (0, Jb.j)(null, null, ab, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: bb => "partnumber" in bb,
              get: bb => bb.partnumber,
              set: (bb, cb) => {
                bb.partnumber = cb
              }
            },
            metadata: gb
          }, eb, Cb), (0, Jb.j)(null, null, Tb, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, cb) => {
                bb.name = cb
              }
            },
            metadata: gb
          }, Nb, Vb), (0, Jb.j)(null, null, Ub, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: bb => "pid" in bb,
              get: bb => bb.pid,
              set: (bb, cb) => {
                bb.pid = cb
              }
            },
            metadata: gb
          }, Lb, ub), (0, Jb.j)(null, null, Ib, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: bb => "pindex" in bb,
              get: bb => bb.pindex,
              set: (bb, cb) => {
                bb.pindex = cb
              }
            },
            metadata: gb
          }, Yb, hb), (0, Jb.j)(null, bb = {
            value: cb
          }, Hb, {
            kind: "class",
            name: cb.name,
            metadata: gb
          }, null, fb), cb = bb.value, gb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gb
          }), (0, Jb.m)(cb, fb)
        })(), cb
      })(),
      PU = (() => {
        let bb, cb, sb = [iT({
            ns: aU,
            name: "mesh"
          })],
          kb = [];
        cb = class {
          constructor(bb, cb) {
            this.vertices = bb ?? new DU, this.triangles = cb ?? new iU
          }
        };
        return (0, Jb.p)(cb, "ThreeMfMesh"), (() => {
          const Wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Jb.j)(null, bb = {
            value: cb
          }, sb, {
            kind: "class",
            name: cb.name,
            metadata: Wb
          }, null, kb), cb = bb.value, Wb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wb
          }), (0, Jb.m)(cb, kb)
        })(), cb
      })(),
      DU = (() => {
        let bb, cb, sb = [iT({
            ns: aU,
            name: "vertices"
          })],
          kb = [];
        cb = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, Jb.p)(cb, "ThreeMfVertices"), (() => {
          const Wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Jb.j)(null, bb = {
            value: cb
          }, sb, {
            kind: "class",
            name: cb.name,
            metadata: Wb
          }, null, kb), cb = bb.value, Wb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wb
          }), (0, Jb.m)(cb, kb)
        })(), cb
      })(),
      EU = (() => {
        let bb, cb, sb, kb, Wb, ab = [iT({
            ns: aU,
            name: "vertex"
          })],
          Tb = [],
          Ub = [],
          Ib = [],
          Hb = [],
          fb = [],
          Mb = [],
          Xb = [];
        cb = class {
          constructor() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, Jb.m)(this, Ub, void 0), this.y = ((0, Jb.m)(this, Ib), (0, Jb.m)(this, Hb, void 0)), this.z = ((0, Jb.m)(this, fb), (0, Jb.m)(this, Mb, void 0)), (0, Jb.m)(this, Xb), this.x = bb, this.y = cb, this.z = sb
          }
        };
        return (0, Jb.p)(cb, "ThreeMfVertex"), (() => {
          const nb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sb = [GT({
            name: "x"
          })], kb = [GT({
            name: "y"
          })], Wb = [GT({
            name: "z"
          })], (0, Jb.j)(null, null, sb, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: bb => "x" in bb,
              get: bb => bb.x,
              set: (bb, cb) => {
                bb.x = cb
              }
            },
            metadata: nb
          }, Ub, Ib), (0, Jb.j)(null, null, kb, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: bb => "y" in bb,
              get: bb => bb.y,
              set: (bb, cb) => {
                bb.y = cb
              }
            },
            metadata: nb
          }, Hb, fb), (0, Jb.j)(null, null, Wb, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: bb => "z" in bb,
              get: bb => bb.z,
              set: (bb, cb) => {
                bb.z = cb
              }
            },
            metadata: nb
          }, Mb, Xb), (0, Jb.j)(null, bb = {
            value: cb
          }, ab, {
            kind: "class",
            name: cb.name,
            metadata: nb
          }, null, Tb), cb = bb.value, nb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nb
          }), (0, Jb.m)(cb, Tb)
        })(), cb
      })(),
      iU = (() => {
        let bb, cb, sb = [iT({
            ns: aU,
            name: "triangles"
          })],
          kb = [];
        cb = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, Jb.p)(cb, "ThreeMfTriangles"), (() => {
          const Wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Jb.j)(null, bb = {
            value: cb
          }, sb, {
            kind: "class",
            name: cb.name,
            metadata: Wb
          }, null, kb), cb = bb.value, Wb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wb
          }), (0, Jb.m)(cb, kb)
        })(), cb
      })(),
      OU = (() => {
        let bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb = [iT({
            ns: aU,
            name: "triangle"
          })],
          fb = [],
          Mb = [],
          Xb = [],
          nb = [],
          mb = [],
          lb = [],
          Qb = [],
          eb = [],
          Cb = [],
          Nb = [],
          Vb = [],
          Lb = [],
          ub = [],
          Yb = [],
          hb = [];
        cb = class {
          constructor(bb, cb, sb) {
            this.v1 = (0, Jb.m)(this, Mb, void 0), this.v2 = ((0, Jb.m)(this, Xb), (0, Jb.m)(this, nb, void 0)), this.v3 = ((0, Jb.m)(this, mb), (0, Jb.m)(this, lb, void 0)), this.p1 = ((0, Jb.m)(this, Qb), (0, Jb.m)(this, eb, void 0)), this.p2 = ((0, Jb.m)(this, Cb), (0, Jb.m)(this, Nb, void 0)), this.p3 = ((0, Jb.m)(this, Vb), (0, Jb.m)(this, Lb, void 0)), this.pid = ((0, Jb.m)(this, ub), (0, Jb.m)(this, Yb, void 0)), (0, Jb.m)(this, hb), this.v1 = bb, this.v2 = cb, this.v3 = sb
          }
        };
        return (0, Jb.p)(cb, "ThreeMfTriangle"), (() => {
          const gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sb = [GT({
            name: "v1"
          })], kb = [GT({
            name: "v2"
          })], Wb = [GT({
            name: "v3"
          })], ab = [GT({
            name: "p1"
          })], Tb = [GT({
            name: "p2"
          })], Ub = [GT({
            name: "p3"
          })], Ib = [GT({
            name: "pid"
          })], (0, Jb.j)(null, null, sb, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: bb => "v1" in bb,
              get: bb => bb.v1,
              set: (bb, cb) => {
                bb.v1 = cb
              }
            },
            metadata: gb
          }, Mb, Xb), (0, Jb.j)(null, null, kb, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: bb => "v2" in bb,
              get: bb => bb.v2,
              set: (bb, cb) => {
                bb.v2 = cb
              }
            },
            metadata: gb
          }, nb, mb), (0, Jb.j)(null, null, Wb, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: bb => "v3" in bb,
              get: bb => bb.v3,
              set: (bb, cb) => {
                bb.v3 = cb
              }
            },
            metadata: gb
          }, lb, Qb), (0, Jb.j)(null, null, ab, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: bb => "p1" in bb,
              get: bb => bb.p1,
              set: (bb, cb) => {
                bb.p1 = cb
              }
            },
            metadata: gb
          }, eb, Cb), (0, Jb.j)(null, null, Tb, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: bb => "p2" in bb,
              get: bb => bb.p2,
              set: (bb, cb) => {
                bb.p2 = cb
              }
            },
            metadata: gb
          }, Nb, Vb), (0, Jb.j)(null, null, Ub, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: bb => "p3" in bb,
              get: bb => bb.p3,
              set: (bb, cb) => {
                bb.p3 = cb
              }
            },
            metadata: gb
          }, Lb, ub), (0, Jb.j)(null, null, Ib, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: bb => "pid" in bb,
              get: bb => bb.pid,
              set: (bb, cb) => {
                bb.pid = cb
              }
            },
            metadata: gb
          }, Yb, hb), (0, Jb.j)(null, bb = {
            value: cb
          }, Hb, {
            kind: "class",
            name: cb.name,
            metadata: gb
          }, null, fb), cb = bb.value, gb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gb
          }), (0, Jb.m)(cb, fb)
        })(), cb
      })(),
      GU = (() => {
        let bb, cb, sb = [iT({
            ns: aU,
            name: "components"
          })],
          kb = [];
        cb = class {
          constructor() {
            this.component = []
          }
        };
        return (0, Jb.p)(cb, "ThreeMfComponents"), (() => {
          const Wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Jb.j)(null, bb = {
            value: cb
          }, sb, {
            kind: "class",
            name: cb.name,
            metadata: Wb
          }, null, kb), cb = bb.value, Wb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wb
          }), (0, Jb.m)(cb, kb)
        })(), cb
      })(),
      KU = (() => {
        let bb, cb, sb, kb, Wb = [iT({
            ns: aU,
            name: "component"
          })],
          ab = [],
          Tb = [],
          Ub = [],
          Ib = [],
          Hb = [];
        cb = class {
          constructor(bb, cb) {
            this.objectid = (0, Jb.m)(this, Tb, void 0), this.transform = ((0, Jb.m)(this, Ub), (0, Jb.m)(this, Ib, void 0)), (0, Jb.m)(this, Hb), this.objectid = bb, this.transform = cb
          }
        };
        return (0, Jb.p)(cb, "ThreeMfComponent"), (() => {
          const fb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sb = [GT({
            name: "objectid"
          })], kb = [GT({
            name: "transform",
            formatter: hU
          })], (0, Jb.j)(null, null, sb, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: bb => "objectid" in bb,
              get: bb => bb.objectid,
              set: (bb, cb) => {
                bb.objectid = cb
              }
            },
            metadata: fb
          }, Tb, Ub), (0, Jb.j)(null, null, kb, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: bb => "transform" in bb,
              get: bb => bb.transform,
              set: (bb, cb) => {
                bb.transform = cb
              }
            },
            metadata: fb
          }, Ib, Hb), (0, Jb.j)(null, bb = {
            value: cb
          }, Wb, {
            kind: "class",
            name: cb.name,
            metadata: fb
          }, null, ab), cb = bb.value, fb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fb
          }), (0, Jb.m)(cb, ab)
        })(), cb
      })(),
      ZU = (() => {
        let bb, cb, sb, kb = [iT({
            ns: aU,
            name: "basematerials"
          })],
          Wb = [],
          ab = [],
          Tb = [];
        cb = class {
          constructor(bb) {
            this.id = (0, Jb.m)(this, ab, void 0), this.base = ((0, Jb.m)(this, Tb), []), this.id = bb
          }
        };
        return (0, Jb.p)(cb, "ThreeMfBaseMaterials"), (() => {
          const Ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sb = [GT({
            name: "id"
          })], (0, Jb.j)(null, null, sb, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: bb => "id" in bb,
              get: bb => bb.id,
              set: (bb, cb) => {
                bb.id = cb
              }
            },
            metadata: Ub
          }, ab, Tb), (0, Jb.j)(null, bb = {
            value: cb
          }, kb, {
            kind: "class",
            name: cb.name,
            metadata: Ub
          }, null, Wb), cb = bb.value, Ub && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ub
          }), (0, Jb.m)(cb, Wb)
        })(), cb
      })(),
      zU = (() => {
        let bb, cb, sb, kb, Wb = [iT({
            ns: aU,
            name: "base"
          })],
          ab = [],
          Tb = [],
          Ub = [],
          Ib = [],
          Hb = [];
        cb = class {
          constructor(bb, cb) {
            this.name = (0, Jb.m)(this, Tb, void 0), this.displaycolor = ((0, Jb.m)(this, Ub), (0, Jb.m)(this, Ib, void 0)), (0, Jb.m)(this, Hb), this.name = bb, this.displaycolor = cb
          }
        };
        return (0, Jb.p)(cb, "ThreeMfBase"), (() => {
          const fb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sb = [GT({
            name: "name"
          })], kb = [GT({
            name: "displaycolor"
          })], (0, Jb.j)(null, null, sb, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, cb) => {
                bb.name = cb
              }
            },
            metadata: fb
          }, Tb, Ub), (0, Jb.j)(null, null, kb, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: bb => "displaycolor" in bb,
              get: bb => bb.displaycolor,
              set: (bb, cb) => {
                bb.displaycolor = cb
              }
            },
            metadata: fb
          }, Ib, Hb), (0, Jb.j)(null, bb = {
            value: cb
          }, Wb, {
            kind: "class",
            name: cb.name,
            metadata: fb
          }, null, ab), cb = bb.value, fb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fb
          }), (0, Jb.m)(cb, ab)
        })(), cb
      })(),
      qU = (() => {
        let bb, cb, sb = [iT({
            ns: aU,
            name: "build"
          })],
          kb = [];
        cb = class {
          constructor() {
            this.item = []
          }
        };
        return (0, Jb.p)(cb, "ThreeMfBuild"), (() => {
          const Wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Jb.j)(null, bb = {
            value: cb
          }, sb, {
            kind: "class",
            name: cb.name,
            metadata: Wb
          }, null, kb), cb = bb.value, Wb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wb
          }), (0, Jb.m)(cb, kb)
        })(), cb
      })(),
      dU = (() => {
        let bb, cb, sb, kb, Wb, ab = [iT({
            ns: aU,
            name: "item"
          })],
          Tb = [],
          Ub = [],
          Ib = [],
          Hb = [],
          fb = [],
          Mb = [],
          Xb = [];
        cb = class {
          constructor(bb, cb, sb) {
            this.objectid = (0, Jb.m)(this, Ub, void 0), this.transform = ((0, Jb.m)(this, Ib), (0, Jb.m)(this, Hb, void 0)), this.partnumber = ((0, Jb.m)(this, fb), (0, Jb.m)(this, Mb, void 0)), this.metadatagroup = (0, Jb.m)(this, Xb), this.objectid = bb, this.transform = cb, this.partnumber = sb
          }
        };
        return (0, Jb.p)(cb, "ThreeMfItem"), (() => {
          const nb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sb = [GT({
            name: "objectid"
          })], kb = [GT({
            name: "transform",
            formatter: hU
          })], Wb = [GT({
            name: "partnumber"
          })], (0, Jb.j)(null, null, sb, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: bb => "objectid" in bb,
              get: bb => bb.objectid,
              set: (bb, cb) => {
                bb.objectid = cb
              }
            },
            metadata: nb
          }, Ub, Ib), (0, Jb.j)(null, null, kb, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: bb => "transform" in bb,
              get: bb => bb.transform,
              set: (bb, cb) => {
                bb.transform = cb
              }
            },
            metadata: nb
          }, Hb, fb), (0, Jb.j)(null, null, Wb, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: bb => "partnumber" in bb,
              get: bb => bb.partnumber,
              set: (bb, cb) => {
                bb.partnumber = cb
              }
            },
            metadata: nb
          }, Mb, Xb), (0, Jb.j)(null, bb = {
            value: cb
          }, ab, {
            kind: "class",
            name: cb.name,
            metadata: nb
          }, null, Tb), cb = bb.value, nb && Object.defineProperty(cb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nb
          }), (0, Jb.m)(cb, Tb)
        })(), cb
      })();
    class AU {
      constructor(bb, cb) {
        this._object = new yU(bb, cb)
      }
      withName(bb) {
        return this._object.name = bb, this
      }
      withThumbnail(bb) {
        return this._object.thumbnail = bb, this
      }
      withProperty(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = bb, this._object.id = cb, this
      }
      build() {
        return this._object
      }
      reset(bb, cb) {
        this._object = new yU(bb, cb)
      }
    }
    class wU extends AU {
      constructor(bb) {
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IU.model), this._object.content = new GU
      }
      withComponent(bb, cb) {
        return this._object.content.component.push(new KU(bb, cb)), this
      }
    }
    class rU extends AU {
      constructor(bb) {
        super(bb, IU.model)
      }
      withPostProcessHandlers(bb, cb) {
        return this._vh = bb, this._th = cb, this
      }
      withData(bb) {
        return this._object.content = this._buildMesh(bb), this
      }
      withMaterial(bb, cb) {
        return this._object.pid = bb, this._object.pindex = cb, this
      }
      _buildMesh(bb) {
        const cb = this._buildVertices(bb.positions),
          sb = this._buildTriangle(bb.indices);
        return new PU(cb, sb)
      }
      _buildVertices(bb) {
        const cb = new DU;
        if (bb)
          for (let sb = 0; sb < bb.length;) {
            const kb = bb[sb++],
              Wb = bb[sb++],
              ab = bb[sb++];
            let Tb = new EU(kb, Wb, ab);
            this._vh && (Tb = this._vh(Tb)), cb.vertex.push(Tb)
          }
        return cb
      }
      _buildTriangle(bb) {
        const cb = new iU;
        if (bb)
          for (let sb = 0; sb < bb.length;) {
            const kb = bb[sb++],
              Wb = bb[sb++],
              ab = bb[sb++];
            let Tb = new OU(kb, Wb, ab);
            this._th && (Tb = this._th(Tb)), cb.triangle.push(Tb)
          }
        return cb
      }
    }
    class oU {
      constructor(bb) {
        this._m = new ZU(bb)
      }
      withColor(bb, cb) {
        this._m.base = this._m.base ?? [];
        let sb = this._m.base.find((cb => cb.name.toLowerCase() === bb.toLowerCase()));
        return sb ? (sb.displaycolor = this._rgbaToHex(cb), this) : (sb = new zU(bb, this._rgbaToHex(cb)), this._m.base.push(sb), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(bb) {
        const cb = bb => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(bb, 1 / 2.2)))),
          sb = cb(bb.r).toString(16).padStart(2, "0").toUpperCase(),
          kb = cb(bb.g).toString(16).padStart(2, "0").toUpperCase(),
          Wb = cb(bb.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof bb.a) {
          return `#${sb}${kb}${Wb}${Math.round(Math.min(255,Math.max(0,255*bb.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${sb}${kb}${Wb}`
      }
    }
    class SU {
      constructor() {
        this._model = new JU, this._objects = new Map
      }
      withMetaData(bb, cb, sb, kb) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new gU(bb, cb, sb, kb)), this
      }
      withMaterial(bb) {
        return bb instanceof oU && (bb = bb.build()), bb && (this._model.resources = this._model.resources ?? new tU, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(bb)), this
      }
      withMesh(bb) {
        return bb instanceof rU && (bb = bb.build()), this._model.resources = this._model.resources ?? new tU, this._model.resources.object.push(bb), this
      }
      withComponents(bb) {
        return bb instanceof wU && (bb = bb.build()), this._model.resources = this._model.resources ?? new tU, this._model.resources.object.push(bb), this
      }
      withBuild(bb, cb, sb) {
        return this._model.build = this._model.build ?? new qU, this._model.build.item?.push(new dU(bb, cb, sb)), this
      }
      withUnit(bb) {
        return this._model.unit = bb, this
      }
      reset() {
        return this._model = new JU, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    SU.KnownMetaSet = new Set(JU.KnownMeta.map((bb => bb.toLowerCase())));
    class RU {
      withContentType(bb) {
        this._cts || (this._cts = new CU);
        const cb = this._cts.items;
        return cb.some((cb => cb.ext === bb.ext && cb.ct === bb.ct)) || cb.push(bb), this
      }
      withRelationship(bb) {
        this._rs || (this._rs = new VU);
        const cb = this._rs.items;
        return cb.some((cb => cb.id === bb.id)) || cb.push(bb), this.withContentType(new NU("rels", MU.Relationships)), this
      }
      withModel(bb) {
        return bb instanceof SU && (bb = bb.build()), this._m = bb, this.withContentType(new NU("model", MU.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const bb = `${nU}${mU}`;
        if (!this._rs) {
          const cb = `/${bb}`;
          this.withRelationship(new LU("rel0", eU.ThreeDimModel, cb))
        }
        return new uU(this._cts, this._rs, this._m)
      }
    }
    class vU {
      constructor(bb) {
        this._o = bb
      }
      get options() {
        return this._o
      }
      async serializeAsync(bb) {
        const cb = await this.ensureZipLibReadyAsync();
        if (!cb) return;
        const sb = cb.Zip,
          kb = cb.ZipDeflate;
        if (!sb || !kb) throw new Error("fflate Zip / ZipDeflate not available");
        const Wb = function(bb, cb, sb) {
          const Wb = new kb(cb, {
            level: 6
          });
          bb.add(Wb);
          const ab = function(bb) {
              return {
                push: (cb, sb) => bb.push(cb, sb)
              }
            }(Wb),
            Tb = new WU(ab),
            Ub = new sU(Tb).dec("1.0", "UTF-8");
          new pT(Ub).serialize(sb), Tb.finish()
        };
        for (var ab = arguments.length, Tb = new Array(ab > 1 ? ab - 1 : 0), Ub = 1; Ub < ab; Ub++) Tb[Ub - 1] = arguments[Ub];
        const Ib = this.toDocument(...Tb);
        if (!Ib) return;
        const Hb = new sb(bb);
        Wb(Hb, QU, Ib.contentTypes), Wb(Hb, `${XU}${lU}`, Ib.relationships), Wb(Hb, `${nU}${mU}`, Ib.model), Hb.end()
      }
      toDocument() {
        const bb = (new SU).withUnit(this._o?.unit ?? UU.millimeter);
        if (this.options.metadata)
          for (const Wb in this.options.metadata) bb.withMetaData(Wb, this.options.metadata[Wb]);
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        return (new RU).withModel(this.toModel(bb, ...sb)).build()
      }
    }
    class FU {
      static async SerializeToMemoryAsync(bb) {
        const cb = new Array;
        let sb = 0;
        for (var kb = arguments.length, Wb = new Array(kb > 1 ? kb - 1 : 0), ab = 1; ab < kb; ab++) Wb[ab - 1] = arguments[ab];
        if (await bb.serializeAsync((function(bb, kb, Wb) {
            cb.push(kb), sb += kb.length
          }), ...Wb), !sb) return;
        const Tb = new Uint8Array(sb);
        let Ub = 0;
        for (const Ib of cb) Tb.set(Ib, Ub), Ub += Ib.length;
        return Tb
      }
    }
    class xU {}
    xU.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class jU {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = bb, this._to = cb, this._step = sb, this._i = bb
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
    class pU extends vU {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...pU.DefaultOptions,
          ...bb
        })
      }
      toModel(bb) {
        for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
        sb = sb.filter((bb => bb instanceof Mk.e || bb instanceof nb.c));
        const Wb = new jU,
          ab = bb,
          Tb = new Map,
          Ub = this.options.exportInstances ? [] : null;
        for (let Ib = 0; Ib < sb.length; Ib++) {
          const bb = sb[Ib];
          if (bb instanceof nb.c) {
            Ub?.push(bb);
            continue
          }
          const cb = bb.name || `mesh${Ib}`,
            kb = bb.getWorldMatrix(),
            Hb = this._handleBabylonTo3mfMatrixTransformToRef(kb, YU.Zero()),
            fb = bb.XV;
          if (void 0 === fb) continue;
          const Mb = 1 == fb.length;
          for (let sb = 0; sb < fb.length; sb++) {
            const kb = fb[sb],
              Ub = this._extractSubMesh(bb, kb);
            if (Ub) {
              const bb = Mb ? `${cb}` : `${cb}_${sb}`,
                Ib = new rU(Wb.next()).withData(Ub).withName(bb).build();
              ab.withMesh(Ib), ab.withBuild(Ib.id, Hb), Tb.set(kb, Ib)
            }
          }
        }
        if (Ub && Ub.length) {
          const bb = this._groupBy(Ub, (bb => bb.Pkb));
          for (const [cb, sb] of Array.from(bb.entries()))
            if (sb && sb.length)
              for (let bb = 0; bb < sb.length; bb++) {
                const kb = sb[bb].getWorldMatrix(),
                  Wb = cb.XV;
                for (let bb = 0; bb < Wb.length; bb++) {
                  const cb = Wb[bb],
                    sb = Tb.get(cb);
                  sb && ab.withBuild(sb.id, this._handleBabylonTo3mfMatrixTransformToRef(kb, YU.Zero()))
                }
              }
        }
        return ab.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const bb = globalThis;
          return bb.fflate || await Wb.Tools.LoadScriptAsync(xU.FFLATEUrl), bb.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(bb, cb) {
        const sb = bb.Gsb();
        if (!sb) return;
        const kb = bb.getVerticesData(pU._PositionKind);
        if (!kb) return;
        if (0 == cb.indexStart && cb.indexCount == sb.length) return {
          positions: kb,
          indices: sb
        };
        const Wb = cb.indexStart,
          ab = new Map,
          Tb = [],
          Ub = new Uint32Array(cb.indexCount);
        for (let Ib = 0; Ib < cb.indexCount; Ib++) {
          const bb = sb[Wb + Ib];
          let cb = ab.get(bb);
          if (void 0 === cb) {
            cb = ab.size, ab.set(bb, cb);
            const sb = 3 * bb;
            Tb.push(kb[sb], kb[sb + 1], kb[sb + 2])
          }
          Ub[Ib] = cb
        }
        return {
          positions: new Float32Array(Tb),
          indices: Ub
        }
      }
      _groupBy(bb, cb) {
        const sb = new Map;
        for (const kb of bb) {
          const bb = cb(kb),
            Wb = sb.get(bb);
          Wb ? Wb.push(kb) : sb.set(bb, [kb])
        }
        return sb
      }
      _handleBabylonTo3mfMatrixTransformToRef(bb, cb) {
        const sb = bb.multiplyToRef(pU._R_BJS_TO_3MF, Zb.e.Zero()).m;
        return cb.values = [sb[0], sb[1], sb[2], sb[4], sb[5], sb[6], sb[8], sb[9], sb[10], sb[12], sb[13], sb[14]], cb
      }
    }
    pU.DefaultOptions = {
      unit: UU.meter,
      exportInstances: !1
    }, pU._PositionKind = "position", pU._R_BJS_TO_3MF = Zb.e.RotationX(Math.PI / 2).multiply(Zb.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);