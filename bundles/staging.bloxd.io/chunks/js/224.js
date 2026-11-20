export const id = 224;
export const ids = [224, 229];
export const modules = {
  40950: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz
    });
    var Fz = sz(40872),
      Wz = sz(39163);
    let Xz = !1;

    function Oz() {
      Xz || (Xz = !0, Wz.b.prototype._sphericalPolynomialTargetSize = 0, Wz.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Wz.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Fz.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((zz => {
              this._texture._sphericalPolynomial = zz, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(zz) {
          this._texture && (this._texture._sphericalPolynomial = zz)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  36652: (zz, tz, sz) => {
    sz.d(tz, {
      Color3: () => Fz.c,
      c: () => Fz.d
    });
    var Fz = sz(36654);
    (0, Fz.e)()
  },
  37191: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz
    });
    var Fz = sz(37199);
    class Wz {
      static GetPlanes(zz) {
        const tz = [];
        for (let sz = 0; sz < 6; sz++) tz.push(new Fz.c(0, 0, 0, 0));
        return Wz.GetPlanesToRef(zz, tz), tz
      }
      static GetNearPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[2], tz.normal.y = sz[7] + sz[6], tz.normal.z = sz[11] + sz[10], tz.d = sz[15] + sz[14], tz.normalize()
      }
      static GetFarPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[2], tz.normal.y = sz[7] - sz[6], tz.normal.z = sz[11] - sz[10], tz.d = sz[15] - sz[14], tz.normalize()
      }
      static GetLeftPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[0], tz.normal.y = sz[7] + sz[4], tz.normal.z = sz[11] + sz[8], tz.d = sz[15] + sz[12], tz.normalize()
      }
      static GetRightPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[0], tz.normal.y = sz[7] - sz[4], tz.normal.z = sz[11] - sz[8], tz.d = sz[15] - sz[12], tz.normalize()
      }
      static GetTopPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[1], tz.normal.y = sz[7] - sz[5], tz.normal.z = sz[11] - sz[9], tz.d = sz[15] - sz[13], tz.normalize()
      }
      static GetBottomPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[1], tz.normal.y = sz[7] + sz[5], tz.normal.z = sz[11] + sz[9], tz.d = sz[15] + sz[13], tz.normalize()
      }
      static GetPlanesToRef(zz, tz) {
        Wz.GetNearPlaneToRef(zz, tz[0]), Wz.GetFarPlaneToRef(zz, tz[1]), Wz.GetLeftPlaneToRef(zz, tz[2]), Wz.GetRightPlaneToRef(zz, tz[3]), Wz.GetTopPlaneToRef(zz, tz[4]), Wz.GetBottomPlaneToRef(zz, tz[5])
      }
      static IsPointInFrustum(zz, tz) {
        for (let sz = 0; sz < 6; sz++)
          if (tz[sz].dotCoordinate(zz) < 0) return !1;
        return !0
      }
    }
  },
  37199: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(36475);
    class Wz {
      constructor(zz, tz, sz, Wz) {
        this.normal = new Fz.p(zz, tz, sz), this.d = Wz
      }
      hsz() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wz(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let zz = this.normal.getHashCode();
        return zz = 397 * zz ^ this.d, zz
      }
      normalize() {
        const zz = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let tz = 0;
        return 0 !== zz && (tz = 1 / zz), this.normal.x *= tz, this.normal.y *= tz, this.normal.z *= tz, this.d *= tz, this
      }
      transform(zz) {
        const tz = Wz._TmpMatrix;
        zz.invertToRef(tz);
        const sz = tz.m,
          Fz = this.normal.x,
          Xz = this.normal.y,
          Oz = this.normal.z,
          oz = this.d,
          vz = Fz * sz[0] + Xz * sz[1] + Oz * sz[2] + oz * sz[3],
          Uz = Fz * sz[4] + Xz * sz[5] + Oz * sz[6] + oz * sz[7],
          Kz = Fz * sz[8] + Xz * sz[9] + Oz * sz[10] + oz * sz[11],
          uz = Fz * sz[12] + Xz * sz[13] + Oz * sz[14] + oz * sz[15];
        return new Wz(vz, Uz, Kz, uz)
      }
      dotCoordinate(zz) {
        return this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z + this.d
      }
      copyFromPoints(zz, tz, sz) {
        const Fz = tz.x - zz.x,
          Wz = tz.y - zz.y,
          Xz = tz.z - zz.z,
          Oz = sz.x - zz.x,
          oz = sz.y - zz.y,
          vz = sz.z - zz.z,
          Uz = Wz * vz - Xz * oz,
          Kz = Xz * Oz - Fz * vz,
          uz = Fz * oz - Wz * Oz,
          Nz = Math.sqrt(Uz * Uz + Kz * Kz + uz * uz);
        let bz;
        return bz = 0 !== Nz ? 1 / Nz : 0, this.normal.x = Uz * bz, this.normal.y = Kz * bz, this.normal.z = uz * bz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
      }
      isFrontFacingTo(zz, tz) {
        return Fz.p.Dot(this.normal, zz) <= tz
      }
      signedDistanceTo(zz) {
        return Fz.p.Dot(zz, this.normal) + this.d
      }
      static FromArray(zz) {
        return new Wz(zz[0], zz[1], zz[2], zz[3])
      }
      static FromPoints(zz, tz, sz) {
        const Fz = new Wz(0, 0, 0, 0);
        return Fz.copyFromPoints(zz, tz, sz), Fz
      }
      static FromPositionAndNormal(zz, tz) {
        const sz = new Wz(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(zz, tz, sz)
      }
      static FromPositionAndNormalToRef(zz, tz, sz) {
        return sz.normal.vsz(tz), sz.normal.normalize(), sz.d = -zz.dot(sz.normal), sz
      }
      static SignedDistanceToPlaneFromPositionAndNormal(zz, tz, sz) {
        const Wz = -(tz.x * zz.x + tz.y * zz.y + tz.z * zz.z);
        return Fz.p.Dot(sz, tz) + Wz
      }
    }
    Wz._TmpMatrix = Fz.e.Identity()
  },
  36473: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      Matrix: () => Fz.e,
      Quaternion: () => Fz.h,
      RegisterMathVector: () => Fz.k,
      TmpVectors: () => Fz.m,
      Vector2: () => Fz.n,
      XD: () => Fz.p,
      Vector4: () => Fz.q
    });
    var Fz = sz(36475);
    (0, Fz.k)()
  },
  37536: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz
    });
    class Fz {
      constructor(zz, tz, sz, Fz) {
        this.x = zz, this.y = tz, this.width = sz, this.height = Fz
      }
      toGlobal(zz, tz) {
        return new Fz(this.x * zz, this.y * tz, this.width * zz, this.height * tz)
      }
      toGlobalToRef(zz, tz, sz) {
        return sz.x = this.x * zz, sz.y = this.y * tz, sz.width = this.width * zz, sz.height = this.height * tz, this
      }
      clone() {
        return new Fz(this.x, this.y, this.width, this.height)
      }
    }
  },
  40872: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Uz
    });
    var Fz = sz(36475),
      Wz = sz(36507),
      Xz = sz(39155),
      Oz = sz(36479),
      oz = sz(36654);
    class vz {
      constructor(zz, tz, sz, Fz) {
        this.name = zz, this.worldAxisForNormal = tz, this.worldAxisForFileX = sz, this.worldAxisForFileY = Fz
      }
    }
    class Uz {
      static _NearestPow2Floor(zz) {
        return zz <= 1 ? 1 : 1 << Math.floor(Math.log2(zz))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(zz) {
        if (!zz.isCube) return null;
        zz.aJ()?.FD().flushFramebuffer();
        const tz = zz.getSize().width,
          sz = zz._sphericalPolynomialTargetSize,
          Fz = sz > 0 ? this._NearestPow2Floor(sz) : 0,
          Wz = !zz.noMipmap && !0 === zz._texture?.generateMipMaps,
          Xz = Fz > 0 && Fz < tz && Wz,
          Oz = Xz ? Math.max(0, Math.round(Math.log2(tz / Fz))) : 0,
          oz = Xz ? Math.max(1, Math.floor(tz / Math.pow(2, Oz))) : tz,
          vz = zz.readPixels(0, Oz, void 0, !1),
          Uz = zz.readPixels(1, Oz, void 0, !1);
        let Kz, uz;
        zz.isRenderTarget ? (Kz = zz.readPixels(3, Oz, void 0, !1), uz = zz.readPixels(2, Oz, void 0, !1)) : (Kz = zz.readPixels(2, Oz, void 0, !1), uz = zz.readPixels(3, Oz, void 0, !1));
        const Nz = zz.readPixels(4, Oz, void 0, !1),
          bz = zz.readPixels(5, Oz, void 0, !1),
          wz = zz.gammaSpace,
          Dz = Fz > 0 && Fz < tz && !Xz;
        return new Promise((zz => {
          Promise.all([Uz, vz, Kz, uz, Nz, bz]).then((sz => {
            let [Wz, Xz, Oz, vz, Uz, Kz] = sz, uz = oz;
            if (Dz) {
              const zz = 4;
              Wz = this._DownsampleFace(Wz, tz, Fz, zz), Xz = this._DownsampleFace(Xz, tz, Fz, zz), Oz = this._DownsampleFace(Oz, tz, Fz, zz), vz = this._DownsampleFace(vz, tz, Fz, zz), Uz = this._DownsampleFace(Uz, tz, Fz, zz), Kz = this._DownsampleFace(Kz, tz, Fz, zz), uz = Fz
            }
            const Nz = {
              size: uz,
              right: Xz,
              left: Wz,
              up: Oz,
              down: vz,
              front: Uz,
              back: Kz,
              format: 5,
              type: Wz instanceof Float32Array ? 1 : 0,
              gammaSpace: wz
            };
            zz(this.ConvertCubeMapToSphericalPolynomial(Nz))
          }))
        }))
      }
      static _AreaElement(zz, tz) {
        return Math.atan2(zz * tz, Math.sqrt(zz * zz + tz * tz + 1))
      }
      static _DownsampleFace(zz, tz, sz, Fz) {
        const Wz = zz instanceof Float32Array ? zz : Float32Array.from(zz),
          Xz = sz * sz * Fz,
          Oz = new Float32Array(Xz),
          oz = tz / sz,
          vz = 1 / (oz * oz);
        for (let Kz = 0; Kz < sz; Kz++) {
          const zz = Math.floor(Kz * oz),
            Xz = Math.floor((Kz + 1) * oz);
          for (let Uz = 0; Uz < sz; Uz++) {
            const uz = Math.floor(Uz * oz),
              Nz = Math.floor((Uz + 1) * oz),
              bz = (Kz * sz + Uz) * Fz;
            for (let sz = 0; sz < Fz; sz++) {
              let oz = 0;
              for (let Oz = zz; Oz < Xz; Oz++)
                for (let zz = uz; zz < Nz; zz++) oz += Wz[(Oz * tz + zz) * Fz + sz];
              Oz[bz + sz] = oz * vz
            }
          }
        }
        if (zz instanceof Float32Array) return Oz;
        const Uz = new(0, zz.constructor)(Xz);
        for (let Kz = 0; Kz < Xz; Kz++) Uz[Kz] = Oz[Kz] + .5 | 0;
        return Uz
      }
      static ConvertCubeMapToSphericalPolynomial(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sz = tz > 0 ? this._NearestPow2Floor(tz) : 0;
        if (sz > 0 && zz.size > sz) {
          const tz = 5 === zz.format ? 4 : 3,
            Fz = ["right", "left", "up", "down", "front", "back"],
            Wz = {};
          for (const Xz of Fz) Wz[Xz] = this._DownsampleFace(zz[Xz], zz.size, sz, tz);
          zz = {
            ...zz,
            ...Wz,
            size: sz
          }
        }
        const Fz = new Xz.d;
        let vz = 0;
        const Uz = 2 / zz.size,
          Kz = Uz,
          uz = .5 * Uz,
          Nz = uz - 1;
        for (let Xz = 0; Xz < 6; Xz++) {
          const tz = this._FileFaces[Xz],
            sz = zz[tz.name];
          let bz = Nz;
          const wz = 5 === zz.format ? 4 : 3;
          for (let Xz = 0; Xz < zz.size; Xz++) {
            let Dz = Nz;
            for (let Kz = 0; Kz < zz.size; Kz++) {
              const Nz = tz.worldAxisForFileX.scale(Dz).add(tz.worldAxisForFileY.scale(bz)).add(tz.worldAxisForNormal);
              Nz.normalize();
              const gz = this._AreaElement(Dz - uz, bz - uz) - this._AreaElement(Dz - uz, bz + uz) - this._AreaElement(Dz + uz, bz - uz) + this._AreaElement(Dz + uz, bz + uz);
              let Hz = sz[Xz * zz.size * wz + Kz * wz + 0],
                Bz = sz[Xz * zz.size * wz + Kz * wz + 1],
                Pz = sz[Xz * zz.size * wz + Kz * wz + 2];
              isNaN(Hz) && (Hz = 0), isNaN(Bz) && (Bz = 0), isNaN(Pz) && (Pz = 0), 0 === zz.type && (Hz /= 255, Bz /= 255, Pz /= 255), zz.gammaSpace && (Hz = Math.pow((0, Wz.Clamp)(Hz), Oz.i), Bz = Math.pow((0, Wz.Clamp)(Bz), Oz.i), Pz = Math.pow((0, Wz.Clamp)(Pz), Oz.i));
              const rz = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const zz = Math.max(Hz, Bz, Pz);
                if (zz > rz) {
                  const tz = rz / zz;
                  Hz *= tz, Bz *= tz, Pz *= tz
                }
              } else Hz = (0, Wz.Clamp)(Hz, 0, rz), Bz = (0, Wz.Clamp)(Bz, 0, rz), Pz = (0, Wz.Clamp)(Pz, 0, rz);
              const Yz = new oz.c(Hz, Bz, Pz);
              Fz.addLight(Nz, Yz, gz), vz += gz, Dz += Uz
            }
            bz += Kz
          }
        }
        const bz = 6 * (4 * Math.PI) / 6 / vz;
        return Fz.scaleInPlace(bz), Fz.convertIncidentRadianceToIrradiance(), Fz.convertIrradianceToLambertianRadiance(), Xz.g.FromHarmonics(Fz)
      }
    }
    Uz._FileFaces = [new vz("right", new Fz.p(1, 0, 0), new Fz.p(0, 0, -1), new Fz.p(0, -1, 0)), new vz("left", new Fz.p(-1, 0, 0), new Fz.p(0, 0, 1), new Fz.p(0, -1, 0)), new vz("up", new Fz.p(0, 1, 0), new Fz.p(1, 0, 0), new Fz.p(0, 0, 1)), new vz("down", new Fz.p(0, -1, 0), new Fz.p(1, 0, 0), new Fz.p(0, 0, -1)), new vz("front", new Fz.p(0, 0, 1), new Fz.p(1, 0, 0), new Fz.p(0, -1, 0)), new vz("back", new Fz.p(0, 0, -1), new Fz.p(-1, 0, 0), new Fz.p(0, -1, 0))], Uz.MAX_HDRI_VALUE = 4096, Uz.PRESERVE_CLAMPED_COLORS = !1
  },
  40661: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz.g,
      e: () => Fz.p
    });
    var Fz = sz(39205);
    (0, Fz.t)()
  },
  37333: (zz, tz, sz) => {
    function Fz() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
        const tz = 16 * Math.random() | 0;
        return ("x" === zz ? tz : 3 & tz | 8).toString(16)
      }))
    }
    sz.d(tz, {
      d: () => Fz
    })
  },
  40921: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(40909),
      Wz = sz(40928);
    class Xz {
      static ExpandRGBDTexture(zz) {
        const tz = zz._texture;
        if (!tz || !zz.isRGBD) return;
        const Wz = tz.FD(),
          Xz = Wz.getCaps(),
          Oz = tz.isReady;
        let oz = !1;
        Xz.textureHalfFloatRender && Xz.textureHalfFloatLinearFiltering ? (oz = !0, tz.type = 2) : Xz.textureFloatRender && Xz.textureFloatLinearFiltering && (oz = !0, tz.type = 1), oz && (tz.isReady = !1, tz._isRGBD = !1, tz.invertY = !1);
        const vz = async () => {
          const Xz = Wz.isWebGPU,
            Oz = Xz ? 1 : 0;
          tz.isReady = !1, Xz ? await sz.e(332).then((() => sz(60550))) : await sz.e(314).then((() => sz(60558)));
          const oz = new Fz.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Wz, !1, void 0, tz.type, void 0, null, !1, void 0, Oz);
          oz.externalTextureSamplerBinding = !0;
          const vz = Wz.createRenderTargetTexture(tz.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: tz.samplingMode,
            type: tz.type,
            format: 5
          });
          oz.onEffectCreatedObservable.addOnce((sz => {
            sz.executeWhenCompiled((() => {
              oz.onApply = zz => {
                zz._bindTexture("textureSampler", tz), zz.setFloat2("scale", 1, 1)
              }, zz.aJ()?.postProcessManager.directRender([oz], vz, !0), Wz.restoreDefaultFramebuffer(), Wz._releaseTexture(tz), oz && oz.dispose(), vz._swapAndDie(tz), tz.isReady = !0
            }))
          }))
        };
        oz && (Oz ? vz() : zz.onLoadObservable.addOnce(vz))
      }
      static async EncodeTextureToRGBD(zz, tz) {
        let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return tz.FD().isWebGPU ? await sz.e(333).then((() => sz(60573))) : await sz.e(315).then((() => sz(60567))), await (0, Wz.b)("rgbdEncode", zz, tz, Fz, 1, 5)
      }
    }
  },
  60294: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      AsyncLoop: () => Fz.e,
      RegisterTools: () => Fz.h,
      Tools: () => Fz.j,
      className: () => Fz.l
    });
    var Fz = sz(39264);
    (0, Fz.h)()
  },
  40962: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz
    });
    class Fz {
      constructor(zz) {
        this._pendingActions = new Array, this._workerInfos = zz.map((zz => ({
          workerPromise: Promise.resolve(zz),
          idle: !0
        })))
      }
      dispose() {
        for (const zz of this._workerInfos) zz.workerPromise.then((zz => {
          zz.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(zz) {
        this._executeOnIdleWorker(zz) || this._pendingActions.push(zz)
      }
      _executeOnIdleWorker(zz) {
        for (const tz of this._workerInfos)
          if (tz.idle) return this._execute(tz, zz), !0;
        return !1
      }
      _execute(zz, tz) {
        zz.idle = !1, zz.workerPromise.then((sz => {
          tz(sz, (() => {
            const tz = this._pendingActions.shift();
            tz ? this._execute(zz, tz) : zz.idle = !0
          }))
        }))
      }
    }
    class Wz extends Fz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wz.DefaultOptions;
        super([]), this._maxWorkers = zz, this._createWorkerAsync = tz, this._options = sz
      }
      push(zz) {
        if (!this._executeOnIdleWorker(zz))
          if (this._workerInfos.length < this._maxWorkers) {
            const tz = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(tz), this._execute(tz, zz)
          } else this._pendingActions.push(zz)
      }
      _execute(zz, tz) {
        zz.timeoutId && (clearTimeout(zz.timeoutId), delete zz.timeoutId), super._execute(zz, ((sz, Fz) => {
          tz(sz, (() => {
            Fz(), zz.idle && (zz.timeoutId = setTimeout((() => {
              zz.workerPromise.then((zz => {
                zz.terminate()
              }));
              const tz = this._workerInfos.indexOf(zz); - 1 !== tz && this._workerInfos.splice(tz, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Wz.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60332: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      AbstractThreeMfSerializer: () => po,
      BVHExporter: () => ZO,
      ContentTypeFileName: () => go,
      DefaultXmlSerializerFormatOptions: () => nO,
      DefaultXmlSerializerNumberOptions: () => lO,
      EXT_lights_area: () => PW,
      EXT_mesh_gpu_instancing: () => iF,
      EXT_texture_avif: () => oO,
      EXT_texture_webp: () => FO,
      GLTF2Export: () => hF,
      GLTFData: () => Uz,
      GetXmlFieldMeta: () => hO,
      GetXmlName: () => QO,
      IsQualifiedName: () => GO,
      KHR_draco_mesh_compression: () => zW,
      KHR_interactivity: () => NW,
      KHR_lights_punctual: () => vW,
      KHR_materials_anisotropy: () => mW,
      KHR_materials_clearcoat: () => ZW,
      KHR_materials_coat: () => yW,
      KHR_materials_diffuse_roughness: () => QX,
      KHR_materials_diffuse_transmission: () => iW,
      KHR_materials_dispersion: () => aW,
      KHR_materials_emissive_strength: () => RW,
      KHR_materials_fuzz: () => bX,
      KHR_materials_ior: () => zX,
      KHR_materials_iridescence: () => WX,
      KHR_materials_openpbr: () => lX,
      KHR_materials_sheen: () => vX,
      KHR_materials_specular: () => HX,
      KHR_materials_transmission: () => YX,
      KHR_materials_unlit: () => CX,
      KHR_materials_volume: () => TX,
      KHR_materials_volume_scatter: () => yX,
      KHR_texture_basisu: () => EX,
      KHR_texture_transform: () => SX,
      Known3mfRelationshipTypes: () => Ho,
      KnownI3mfContentType: () => uo,
      Matrix3d: () => mo,
      MatrixFormatter: () => Jo,
      ModelFileName: () => wo,
      NumberFormatter: () => SO,
      OBJExport: () => Oz,
      Object3dDirName: () => bo,
      OpenXmlContentTypesNamespace: () => Uo,
      OpenXmlRelationshipsNamespace: () => Ko,
      RegisterEXT_lights_area: () => YW,
      RegisterEXT_mesh_gpu_instancing: () => lF,
      RegisterEXT_texture_avif: () => UO,
      RegisterEXT_texture_webp: () => XO,
      RegisterKHR_draco_mesh_compression: () => sW,
      RegisterKHR_interactivity: () => wW,
      RegisterKHR_lights_punctual: () => KW,
      RegisterKHR_materials_anisotropy: () => IW,
      RegisterKHR_materials_clearcoat: () => TW,
      RegisterKHR_materials_coat: () => dW,
      RegisterKHR_materials_diffuse_roughness: () => iX,
      RegisterKHR_materials_diffuse_transmission: () => lW,
      RegisterKHR_materials_dispersion: () => SW,
      RegisterKHR_materials_emissive_strength: () => fW,
      RegisterKHR_materials_fuzz: () => DX,
      RegisterKHR_materials_ior: () => sX,
      RegisterKHR_materials_iridescence: () => OX,
      RegisterKHR_materials_openpbr: () => aX,
      RegisterKHR_materials_sheen: () => KX,
      RegisterKHR_materials_specular: () => PX,
      RegisterKHR_materials_transmission: () => mX,
      RegisterKHR_materials_unlit: () => ZX,
      RegisterKHR_materials_volume: () => jX,
      RegisterKHR_materials_volume_scatter: () => dX,
      RegisterKHR_texture_basisu: () => tO,
      RegisterKHR_texture_transform: () => RX,
      RelationshipDirName: () => No,
      RelationshipFileName: () => Do,
      ResolveFormatOptions: () => qO,
      ResolveNumberOptions: () => aO,
      STLExport: () => KO,
      ST_ObjectType: () => vo,
      ST_Unit: () => oo,
      StringXmlWriter: () => Fo,
      ThreeDimModelNamespace: () => Xo,
      ThreeMf: () => fo,
      ThreeMfBase: () => ko,
      ThreeMfBaseMaterials: () => Qo,
      ThreeMfBuild: () => io,
      ThreeMfComponent: () => ho,
      ThreeMfComponents: () => Mo,
      ThreeMfComponentsBuilder: () => ao,
      ThreeMfContentType: () => Po,
      ThreeMfContentTypes: () => Bo,
      ThreeMfDocument: () => xo,
      ThreeMfDocumentBuilder: () => Ro,
      ThreeMfItem: () => Lo,
      ThreeMfMaterialBuilder: () => So,
      ThreeMfMesh: () => To,
      ThreeMfMeshBuilder: () => qo,
      ThreeMfMeta: () => Co,
      ThreeMfMetadataGroup: () => eo,
      ThreeMfModel: () => Io,
      ThreeMfModelBuilder: () => Vo,
      ThreeMfObject: () => Go,
      ThreeMfObjectBuilder: () => no,
      ThreeMfRelationship: () => Yo,
      ThreeMfRelationships: () => ro,
      ThreeMfResources: () => Zo,
      ThreeMfSerializer: () => tv,
      ThreeMfSerializerGlobalConfiguration: () => Eo,
      ThreeMfTriangle: () => yo,
      ThreeMfTriangles: () => Ao,
      ThreeMfVertex: () => jo,
      ThreeMfVertices: () => co,
      ToQualifiedString: () => LO,
      TokenType: () => to,
      TriangleSetsNamespace: () => Oo,
      USDZExportAsync: () => CO,
      Utf8XmlWriterToBytes: () => Wo,
      XmlAttr: () => MO,
      XmlBuilder: () => so,
      XmlElem: () => dO,
      XmlIgnore: () => yO,
      XmlName: () => AO,
      XmlNameToParts: () => iO,
      XmlSerializer: () => EO,
      _ConvertToGLTFPBRMetallicRoughness: () => es,
      _SolveMetallic: () => Cs,
      __IGLTFExporterExtension: () => oz
    });
    var Fz = sz(36473),
      Wz = sz(60294),
      Xz = sz(39451);
    class Oz {
      static OBJ(zz, tz, sz, Oz) {
        const oz = [];
        let vz = 1,
          Uz = 1;
        tz && (sz || (sz = "mat"), oz.push("mtllib " + sz + ".mtl"));
        for (let Kz = 0; Kz < zz.length; Kz++) {
          const sz = zz[Kz],
            uz = sz.name || `mesh${Kz}}`;
          oz.push(`o ${uz}`);
          let Nz = null;
          if (Oz) {
            const zz = sz.computeWorldMatrix(!0);
            Nz = new Fz.Matrix, zz.invertToRef(Nz), sz.bakeTransformIntoVertices(zz)
          }
          if (tz) {
            const zz = sz.material;
            zz && oz.push("usemtl " + zz.id)
          }
          const bz = sz.geometry;
          if (!bz) {
            Wz.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const wz = bz.getVerticesData("position"),
            Dz = bz.getVerticesData("normal"),
            gz = bz.getVerticesData("uv"),
            Hz = bz.Qsz();
          let Bz = 0,
            Pz = 0;
          if (!wz || !Hz) {
            Wz.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const rz = zz[0].aJ().useRightHandedSystem ? 1 : -1;
          for (let zz = 0; zz < wz.length; zz += 3) oz.push("v " + wz[zz] * rz + " " + wz[zz + 1] + " " + wz[zz + 2]), Bz++;
          if (null != Dz)
            for (let zz = 0; zz < Dz.length; zz += 3) oz.push("vn " + Dz[zz] * rz + " " + Dz[zz + 1] + " " + Dz[zz + 2]);
          if (null != gz)
            for (let zz = 0; zz < gz.length; zz += 2) oz.push("vt " + gz[zz] + " " + gz[zz + 1]), Pz++;
          const Yz = ["", "", ""],
            xz = (sz.material || sz.aJ().defaultMaterial)._getEffectiveOrientation(sz),
            [mz, Jz] = xz === Xz.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let zz = 0; zz < Hz.length; zz += 3) {
            const tz = [String(Hz[zz] + vz), String(Hz[zz + mz] + vz), String(Hz[zz + Jz] + vz)],
              sz = [String(Hz[zz] + Uz), String(Hz[zz + mz] + Uz), String(Hz[zz + Jz] + Uz)],
              Fz = tz,
              Wz = null != gz ? sz : Yz,
              Xz = null != Dz ? tz : Yz;
            oz.push("f " + Fz[0] + "/" + Wz[0] + "/" + Xz[0] + " " + Fz[1] + "/" + Wz[1] + "/" + Xz[1] + " " + Fz[2] + "/" + Wz[2] + "/" + Xz[2])
          }
          Oz && Nz && sz.bakeTransformIntoVertices(Nz), vz += Bz, Uz += Pz
        }
        return oz.join("\n")
      }
      static MTL(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const sz = [],
          Fz = zz.material;
        sz.push("newmtl " + tz), sz.push("  Ns " + Fz.specularPower.toFixed(4)), sz.push("  Ni 1.5000"), sz.push("  d " + Fz.alpha.toFixed(4)), sz.push("  Tr 0.0000"), sz.push("  Tf 1.0000 1.0000 1.0000"), sz.push("  illum 2"), sz.push("  Ka " + Fz.ambientColor.r.toFixed(4) + " " + Fz.ambientColor.g.toFixed(4) + " " + Fz.ambientColor.b.toFixed(4)), sz.push("  Kd " + Fz.diffuseColor.r.toFixed(4) + " " + Fz.diffuseColor.g.toFixed(4) + " " + Fz.diffuseColor.b.toFixed(4)), sz.push("  Ks " + Fz.specularColor.r.toFixed(4) + " " + Fz.specularColor.g.toFixed(4) + " " + Fz.specularColor.b.toFixed(4)), sz.push("  Ke " + Fz.emissiveColor.r.toFixed(4) + " " + Fz.emissiveColor.g.toFixed(4) + " " + Fz.emissiveColor.b.toFixed(4));
        Fz.ambientTexture && sz.push("  map_Ka " + Fz.ambientTexture.name), Fz.diffuseTexture && sz.push("  map_Kd " + Fz.diffuseTexture.name), Fz.specularTexture && sz.push("  map_Ks " + Fz.specularTexture.name), Fz.bumpTexture && sz.push("  map_bump -imfchan z " + Fz.bumpTexture.name), Fz.opacityTexture && sz.push("  map_d " + Fz.opacityTexture.name);
        return sz.join("\n")
      }
    }
    var oz = 0,
      vz = sz(40661);
    class Uz {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const zz in this.files) {
          const tz = this.files[zz],
            sz = new Blob([tz], {
              type: (0, vz.c)(zz)
            });
          Wz.Tools.Download(sz, zz)
        }
      }
    }
    var Kz = sz(40238),
      uz = sz(40192),
      Nz = sz(40752),
      bz = sz(40201),
      wz = sz(39010),
      Dz = sz(36502),
      gz = sz(36652),
      Hz = sz(36507);
    const Bz = Hz.HighestCommonFactor,
      Pz = {
        ...Hz,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: Bz
      };
    var rz = sz(40928),
      Yz = sz(40220),
      xz = sz(40715),
      mz = sz(40717),
      Jz = sz(40945);
    (0, Jz.RegisterDumpTools)();
    var Iz = sz(39167),
      Cz = sz(39170),
      ez = sz(38097),
      Zz = sz(39270),
      Gz = sz(39617),
      Tz = sz(40921);
    let cz = 0;
    const jz = (zz, tz, sz, Fz) => {
        if (!zz[sz]) {
          const Wz = zz.useDelayedTextureLoading;
          zz.useDelayedTextureLoading = !1;
          const Xz = zz._blockEntityCollection;
          zz._blockEntityCollection = !1;
          const Oz = Gz.g.CreateFromBase64String(tz, Fz + cz++, zz, !0, !1, Gz.g.BILINEAR_SAMPLINGMODE);
          zz._blockEntityCollection = Xz;
          const oz = zz.FD().getLoadedTexturesCache(),
            vz = oz.indexOf(Oz.getInternalTexture()); - 1 !== vz && oz.splice(vz, 1), Oz.isRGBD = !0, Oz.wrapU = Gz.g.CLAMP_ADDRESSMODE, Oz.wrapV = Gz.g.CLAMP_ADDRESSMODE, zz[sz] = Oz, zz.useDelayedTextureLoading = Wz, Tz.c.ExpandRGBDTexture(Oz);
          const Uz = zz.FD().onContextRestoredObservable.add((() => {
            Oz.isRGBD = !0;
            const tz = zz.onBeforeRenderObservable.add((() => {
              Oz.isReady() && (zz.onBeforeRenderObservable.remove(tz), Tz.c.ExpandRGBDTexture(Oz))
            }))
          }));
          zz.qJ.add((() => {
            zz.FD().onContextRestoredObservable.remove(Uz)
          }))
        }
        return zz[sz]
      },
      Az = zz => jz(zz, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      yz = zz => jz(zz, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAF9UlEQVR4nGWVy64eVxGF16X27u7/HMcyuZGYAINwmTBigngBXoc34El4B0ZMGDJjFCExQUIKiRKZYBITHdvn/L1rF4P+c+yEUqmH9WmtrrWLkdB4C1/91h/9yn947D8+8CfdlBeGGAMtqwNd6K7VWAJrw9qwLtw2nDaernh6wKuHPD3S1Vs6vaPT97W9r/Wx1seKUWj7Uzz6vX79T//wF/Gbx/7rw/jsFB/39nlrX7q99LKrp5bJZXAtrqW1uJIncbNOXafBU+o0tZW28got0AJ3KACsE4OfYvmzfvDMb/+4//Td9snD9rfr9vHWnyz9361/1fpNLLde0mt5pTZ7a9pCm32SrqQTfZI3aqNXHAwvcAB4BPwnk/oMEcqX8eaz1t9cHjxs7133f5z6p2v/Ylme9eWmLbexjlhnrPBirz3WxWv30rw0L/Yi96PpDrcDcPMEfq+qvQCfsFF1blcv2js3vb2xLNd9O/XT1p8u/Vlfnvd+25bResXC6BFLj2WJpUdv7uEe0exGByPoOAC//BH+cgNqUjfkU4mOEetde+O2vf+y8br71Nva+9q/XpYXvZ97z9ardUXrra3RerQWrUU4myLk4AzYiADwJ+NRQ41i7MSNEBIcM5YR1+f21rnlXcPWtbVYW1/a7dL21mZvbK211lv01lpEtIi0MxTmFGzMAABAN6gF1CTPxI1gkXa5Z5xGPNrbfo6xB/bQubW9nXvkHtXDPfqIJd2bI+1mpZjmNK17QFuxDzhBJued8Fy0KLvcp7fpNzJuM3JE7daIWGKMqAylW0bLiHQ0e1ppTXEK8Qrwkzv8fUIua6oG553wQpRIme7lbfpBxm3GnoEMZ+wZlYGMlu6pNh1pT3nqALCEugCeAB2ohKqYk9hZd4JFS5ThDm/lB9N305nGtKfnNKZiqk23qZhySZOcYhHFewXfI54UMCBDOYlU3TMkSaYWaCtdwXu5yprOKUxrqk9FyUWXNKXiBfCNgucGboGAUBwUJzFYO3G+MCwFtdAn6K6UZZSyXCXBAUVdGCoS5IVxAcQNujAHKCiLLHJqDtWZh1GHV0Et8EYNqOABTUhglKJoyKBBgSwCBC6Ajz7Azz+GiJbwhFTkZCXnEM6EJcuHDmmlztCkBE2IkMGAAhQoSCBBvgYA0G6xN4DgLE5IU5iqZA1hJ8zDqCY2qktJHfEnZSpIk6bE++kEXwHUEBMCmBBBFzE5UzNZuyBRshlSSF0aEg6MaDHIgyFCPAqvA/YdIjTgQ3WBLNZkpWoQPnRIUljdGiIkHd9jumgeO0ESEI97cNTPJj6Z4ISOZh1JUSVLwiAs7pRp02aTypRUhwIzjvhfPCKF1wH/BTqwA5pQlnYyipgs6dDBQVncZatZaZUlsUxZYVq0jyfm8kNeBzz/Gu0ETrjABAURAoTJOVVJpDAoM3ZOc5olfmMK42CYMrRTAr6tIK6QiSA84VtIIEosslSTNYUkUxyS5aEDQ6tMmQ7YDMOmjziYx8E56oPEl8DdDgM2/BLeIJVw9CRSTClZg97ZrDl0BF6m49V0GTIZQL4CvNuxFj47w4ASmqUkAalYU+DBoIbK8hAG506aZTLonWFG0IMa1AAHXlegW9wFGuAJG97hhFkqiuCxUZyqSSWR5GCZHKxB7nSwDcZADHiACQ4eJ/Oot9+BvsaLQD2Hby9RUEEs1cUlcdKpmWKSQ2VyqAY56J0RiEEPOqHxXYv2W4yJuANWxBkBOKEGFcwyjlhMYdLJSjLJpA8FAxqMwXZRQA0wgdQ94Hcf4nqDFnQhBDcY5YJUIqSSpnxpRqone6ol+2Af7Il2MJJxnN/8lgIA8yWQUKItaBMRsGEdDIrQoYNTnGSyBqdZQSY16IEYaANOOKn/A+htXH+OdgLOiB1BBOEGCz5ejmO6JpGEeexVJTmohJNORqIlnVDyO4CvvsT2AGm0BVEHo0IMHeEooeQipzDFY5eSNcigLgwoGYlIKHF/ky9Z+xD/WrCfoQUuRCGAKBhlwIBRQvmSuykkMYHkqx7EAPK+/wdqEbWmfB0bfwAAAABJRU5ErkJggg==", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Mz = zz => jz(zz, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var dz = sz(39256),
      hz = sz(36475),
      Qz = sz(39293),
      kz = sz(39444),
      iz = sz(39515);
    class Lz extends kz.d {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let lz = (() => {
      var zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz;
      let Kz, uz, Nz, bz, wz, Dz, gz, Hz, Bz, Pz = iz.d,
        rz = [],
        Yz = [],
        xz = [],
        mz = [],
        Jz = [],
        ez = [],
        Zz = [],
        Gz = [],
        Tz = [],
        cz = [],
        jz = [],
        Az = [],
        yz = [],
        Mz = [],
        dz = [],
        hz = [],
        Qz = [],
        kz = [];
      return zz = class extends Pz {
        get useEnergyConservation() {
          return (0, Iz.c)(this, tz, "f")
        }
        set useEnergyConservation(zz) {
          (0, Iz.g)(this, tz, zz, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, Iz.c)(this, sz, "f")
        }
        set useSmithVisibilityHeightCorrelated(zz) {
          (0, Iz.g)(this, sz, zz, "f")
        }
        get useSphericalHarmonics() {
          return (0, Iz.c)(this, Fz, "f")
        }
        set useSphericalHarmonics(zz) {
          (0, Iz.g)(this, Fz, zz, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, Iz.c)(this, Wz, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(zz) {
          (0, Iz.g)(this, Wz, zz, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, Iz.c)(this, Xz, "f")
        }
        set mixIblRadianceWithIrradiance(zz) {
          (0, Iz.g)(this, Xz, zz, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, Iz.c)(this, Oz, "f")
        }
        set useLegacySpecularEnergyConservation(zz) {
          (0, Iz.g)(this, Oz, zz, "f")
        }
        get baseDiffuseModel() {
          return (0, Iz.c)(this, oz, "f")
        }
        set baseDiffuseModel(zz) {
          (0, Iz.g)(this, oz, zz, "f")
        }
        get dielectricSpecularModel() {
          return (0, Iz.c)(this, vz, "f")
        }
        set dielectricSpecularModel(zz) {
          (0, Iz.g)(this, vz, zz, "f")
        }
        get conductorSpecularModel() {
          return (0, Iz.c)(this, Uz, "f")
        }
        set conductorSpecularModel(zz) {
          (0, Iz.g)(this, Uz, zz, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Kz) {
          let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Kz, "PBRBRDF", 90, new Lz, uz), this._useEnergyConservation = zz.DEFAULT_USE_ENERGY_CONSERVATION, tz.set(this, (0, Iz.k)(this, rz, zz.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, Iz.k)(this, Yz), zz.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), sz.set(this, (0, Iz.k)(this, xz, zz.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, Iz.k)(this, mz), zz.DEFAULT_USE_SPHERICAL_HARMONICS), Fz.set(this, (0, Iz.k)(this, Jz, zz.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, Iz.k)(this, ez), zz.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Wz.set(this, (0, Iz.k)(this, Zz, zz.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, Iz.k)(this, Gz), zz.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), Xz.set(this, (0, Iz.k)(this, Tz, zz.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, Iz.k)(this, cz), zz.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), Oz.set(this, (0, Iz.k)(this, jz, zz.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, Iz.k)(this, Az), zz.DEFAULT_DIFFUSE_MODEL), oz.set(this, (0, Iz.k)(this, yz, zz.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, Iz.k)(this, Mz), zz.DEFAULT_DIELECTRIC_SPECULAR_MODEL), vz.set(this, (0, Iz.k)(this, dz, zz.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, Iz.k)(this, hz), zz.DEFAULT_CONDUCTOR_SPECULAR_MODEL), Uz.set(this, (0, Iz.k)(this, Qz, zz.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, Iz.k)(this, kz), this._internalMarkAllSubMeshesAsMiscDirty = Kz._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(zz) {
          zz.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, zz.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, zz.SPHERICAL_HARMONICS = this._useSphericalHarmonics, zz.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, zz.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, zz.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, zz.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, zz.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, zz.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, tz = new WeakMap, sz = new WeakMap, Fz = new WeakMap, Wz = new WeakMap, Xz = new WeakMap, Oz = new WeakMap, oz = new WeakMap, vz = new WeakMap, Uz = new WeakMap, (() => {
        const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pz[Symbol.metadata] ?? null) : void 0;
        Kz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], uz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], Nz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], bz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], wz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], Dz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], gz = [(0, Cz.J)("baseDiffuseModel"), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], Hz = [(0, Cz.J)("dielectricSpecularModel"), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], Bz = [(0, Cz.J)("conductorSpecularModel"), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], (0, Iz.h)(zz, null, Kz, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: zz => "useEnergyConservation" in zz,
            get: zz => zz.useEnergyConservation,
            set: (zz, tz) => {
              zz.useEnergyConservation = tz
            }
          },
          metadata: tz
        }, rz, Yz), (0, Iz.h)(zz, null, uz, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: zz => "useSmithVisibilityHeightCorrelated" in zz,
            get: zz => zz.useSmithVisibilityHeightCorrelated,
            set: (zz, tz) => {
              zz.useSmithVisibilityHeightCorrelated = tz
            }
          },
          metadata: tz
        }, xz, mz), (0, Iz.h)(zz, null, Nz, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: zz => "useSphericalHarmonics" in zz,
            get: zz => zz.useSphericalHarmonics,
            set: (zz, tz) => {
              zz.useSphericalHarmonics = tz
            }
          },
          metadata: tz
        }, Jz, ez), (0, Iz.h)(zz, null, bz, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: zz => "useSpecularGlossinessInputEnergyConservation" in zz,
            get: zz => zz.useSpecularGlossinessInputEnergyConservation,
            set: (zz, tz) => {
              zz.useSpecularGlossinessInputEnergyConservation = tz
            }
          },
          metadata: tz
        }, Zz, Gz), (0, Iz.h)(zz, null, wz, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: zz => "mixIblRadianceWithIrradiance" in zz,
            get: zz => zz.mixIblRadianceWithIrradiance,
            set: (zz, tz) => {
              zz.mixIblRadianceWithIrradiance = tz
            }
          },
          metadata: tz
        }, Tz, cz), (0, Iz.h)(zz, null, Dz, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: zz => "useLegacySpecularEnergyConservation" in zz,
            get: zz => zz.useLegacySpecularEnergyConservation,
            set: (zz, tz) => {
              zz.useLegacySpecularEnergyConservation = tz
            }
          },
          metadata: tz
        }, jz, Az), (0, Iz.h)(zz, null, gz, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: zz => "baseDiffuseModel" in zz,
            get: zz => zz.baseDiffuseModel,
            set: (zz, tz) => {
              zz.baseDiffuseModel = tz
            }
          },
          metadata: tz
        }, yz, Mz), (0, Iz.h)(zz, null, Hz, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: zz => "dielectricSpecularModel" in zz,
            get: zz => zz.dielectricSpecularModel,
            set: (zz, tz) => {
              zz.dielectricSpecularModel = tz
            }
          },
          metadata: tz
        }, dz, hz), (0, Iz.h)(zz, null, Bz, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: zz => "conductorSpecularModel" in zz,
            get: zz => zz.conductorSpecularModel,
            set: (zz, tz) => {
              zz.conductorSpecularModel = tz
            }
          },
          metadata: tz
        }, Qz, kz), tz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tz
        })
      })(), zz.DEFAULT_USE_ENERGY_CONSERVATION = !0, zz.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, zz.DEFAULT_USE_SPHERICAL_HARMONICS = !0, zz.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, zz.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, zz.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, zz.DEFAULT_DIFFUSE_MODEL = 0, zz.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, zz.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, zz
    })();
    var nz = sz(39436),
      az = sz(36654),
      qz = sz(39439),
      Sz = sz(39272),
      Vz = sz(39501),
      Rz = sz(39499),
      pz = sz(39507),
      fz = sz(39489);
    class Ez extends kz.d {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let zt = (() => {
      var zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz;
      let Kz, uz, Nz, bz, wz, Dz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz = iz.d,
        ez = [],
        Zz = [],
        Gz = [],
        Tz = [],
        cz = [],
        jz = [],
        Az = [],
        yz = [],
        Mz = [],
        dz = [],
        hz = [],
        Qz = [],
        kz = [],
        Lz = [],
        lz = [],
        nz = [],
        qz = [],
        Sz = [],
        Vz = [],
        pz = [],
        zt = [],
        tt = [],
        st = [],
        Ft = [],
        Wt = [],
        Xt = [],
        Ot = [],
        ot = [];
      return zz = class extends Jz {
        get isEnabled() {
          return (0, Iz.c)(this, tz, "f")
        }
        set isEnabled(zz) {
          (0, Iz.g)(this, tz, zz, "f")
        }
        get indexOfRefraction() {
          return (0, Iz.c)(this, sz, "f")
        }
        set indexOfRefraction(zz) {
          (0, Iz.g)(this, sz, zz, "f")
        }
        get texture() {
          return (0, Iz.c)(this, Fz, "f")
        }
        set texture(zz) {
          (0, Iz.g)(this, Fz, zz, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Iz.c)(this, Wz, "f")
        }
        set useRoughnessFromMainTexture(zz) {
          (0, Iz.g)(this, Wz, zz, "f")
        }
        get textureRoughness() {
          return (0, Iz.c)(this, Xz, "f")
        }
        set textureRoughness(zz) {
          (0, Iz.g)(this, Xz, zz, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, Iz.c)(this, Oz, "f")
        }
        set remapF0OnInterfaceChange(zz) {
          (0, Iz.g)(this, Oz, zz, "f")
        }
        get bumpTexture() {
          return (0, Iz.c)(this, oz, "f")
        }
        set bumpTexture(zz) {
          (0, Iz.g)(this, oz, zz, "f")
        }
        get isTintEnabled() {
          return (0, Iz.c)(this, vz, "f")
        }
        set isTintEnabled(zz) {
          (0, Iz.g)(this, vz, zz, "f")
        }
        get tintTexture() {
          return (0, Iz.c)(this, Uz, "f")
        }
        set tintTexture(zz) {
          (0, Iz.g)(this, Uz, zz, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Kz) {
          let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Kz, "PBRClearCoat", 100, new Ez, uz), this._isEnabled = !1, tz.set(this, (0, Iz.k)(this, ez, !1)), this.intensity = ((0, Iz.k)(this, Zz), (0, Iz.k)(this, Gz, 1)), this.roughness = ((0, Iz.k)(this, Tz), (0, Iz.k)(this, cz, 0)), this._indexOfRefraction = ((0, Iz.k)(this, jz), zz._DefaultIndexOfRefraction), sz.set(this, (0, Iz.k)(this, Az, zz._DefaultIndexOfRefraction)), this._texture = ((0, Iz.k)(this, yz), null), Fz.set(this, (0, Iz.k)(this, Mz, null)), this._useRoughnessFromMainTexture = ((0, Iz.k)(this, dz), !0), Wz.set(this, (0, Iz.k)(this, hz, !0)), this._textureRoughness = ((0, Iz.k)(this, Qz), null), Xz.set(this, (0, Iz.k)(this, kz, null)), this._remapF0OnInterfaceChange = ((0, Iz.k)(this, Lz), !0), Oz.set(this, (0, Iz.k)(this, lz, !0)), this._bumpTexture = ((0, Iz.k)(this, nz), null), oz.set(this, (0, Iz.k)(this, qz, null)), this._isTintEnabled = ((0, Iz.k)(this, Sz), !1), vz.set(this, (0, Iz.k)(this, Vz, !1)), this.tintColor = ((0, Iz.k)(this, pz), (0, Iz.k)(this, zt, az.c.White())), this.tintColorAtDistance = ((0, Iz.k)(this, tt), (0, Iz.k)(this, st, 1)), this.tintThickness = ((0, Iz.k)(this, Ft), (0, Iz.k)(this, Wt, 1)), this._tintTexture = ((0, Iz.k)(this, Xt), null), Uz.set(this, (0, Iz.k)(this, Ot, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Iz.k)(this, ot), this._internalMarkAllSubMeshesAsTexturesDirty = Kz._dirtyCallbacks[1]
        }
        isReadyForSubMesh(zz, tz, sz) {
          if (!this._isEnabled) return !0;
          const Fz = this._material._disableBumpMap;
          if (zz._areTexturesDirty && tz.texturesEnabled) {
            if (this._texture && Rz.b.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Rz.b.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (sz.getCaps().standardDerivatives && this._bumpTexture && Rz.b.ClearCoatBumpTextureEnabled && !Fz && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && Rz.b.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(tz, sz) {
          this._isEnabled ? (tz.CLEARCOAT = !0, tz.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, tz.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, tz._areTexturesDirty && sz.texturesEnabled && (this._texture && Rz.b.ClearCoatTextureEnabled ? (0, fz.Y)(this._texture, tz, "CLEARCOAT_TEXTURE") : tz.CLEARCOAT_TEXTURE = !1, this._textureRoughness && Rz.b.ClearCoatTextureEnabled ? (0, fz.Y)(this._textureRoughness, tz, "CLEARCOAT_TEXTURE_ROUGHNESS") : tz.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && Rz.b.ClearCoatBumpTextureEnabled ? (0, fz.Y)(this._bumpTexture, tz, "CLEARCOAT_BUMP") : tz.CLEARCOAT_BUMP = !1, tz.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === zz._DefaultIndexOfRefraction, this._isTintEnabled ? (tz.CLEARCOAT_TINT = !0, this._tintTexture && Rz.b.ClearCoatTintTextureEnabled ? ((0, fz.Y)(this._tintTexture, tz, "CLEARCOAT_TINT_TEXTURE"), tz.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : tz.CLEARCOAT_TINT_TEXTURE = !1) : (tz.CLEARCOAT_TINT = !1, tz.CLEARCOAT_TINT_TEXTURE = !1))) : (tz.CLEARCOAT = !1, tz.CLEARCOAT_TEXTURE = !1, tz.CLEARCOAT_TEXTURE_ROUGHNESS = !1, tz.CLEARCOAT_BUMP = !1, tz.CLEARCOAT_TINT = !1, tz.CLEARCOAT_TINT_TEXTURE = !1, tz.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, tz.CLEARCOAT_DEFAULTIOR = !1, tz.CLEARCOAT_TEXTUREDIRECTUV = 0, tz.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, tz.CLEARCOAT_BUMPDIRECTUV = 0, tz.CLEARCOAT_REMAP_F0 = !1, tz.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, tz.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(zz, tz, sz, Fz) {
          if (!this._isEnabled) return;
          const Wz = Fz.materialDefines,
            Xz = this._material.isFrozen,
            Oz = this._material._disableBumpMap,
            oz = this._material._invertNormalMapX,
            vz = this._material._invertNormalMapY;
          if (!zz.useUbo || !Xz || !zz.isSync) {
            (this._texture || this._textureRoughness) && Rz.b.ClearCoatTextureEnabled && (zz.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, fz.x)(this._texture, zz, "clearCoat"), this._textureRoughness && !Wz.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, fz.x)(this._textureRoughness, zz, "clearCoatRoughness")), this._bumpTexture && sz.getCaps().standardDerivatives && Rz.b.ClearCoatTextureEnabled && !Oz && (zz.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, fz.x)(this._bumpTexture, zz, "clearCoatBump"), tz._mirroredCameraPosition ? zz.updateFloat2("vClearCoatTangentSpaceParams", oz ? 1 : -1, vz ? 1 : -1) : zz.updateFloat2("vClearCoatTangentSpaceParams", oz ? -1 : 1, vz ? -1 : 1)), this._tintTexture && Rz.b.ClearCoatTintTextureEnabled && (zz.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, fz.x)(this._tintTexture, zz, "clearCoatTint")), zz.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Fz = 1 - this._indexOfRefraction,
              Xz = 1 + this._indexOfRefraction,
              Uz = Math.pow(-Fz / Xz, 2),
              Kz = 1 / this._indexOfRefraction;
            zz.updateFloat4("vClearCoatRefractionParams", Uz, Kz, Fz, Xz), this._isTintEnabled && (zz.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), zz.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          tz.texturesEnabled && (this._texture && Rz.b.ClearCoatTextureEnabled && zz.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Wz.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && Rz.b.ClearCoatTextureEnabled && zz.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && sz.getCaps().standardDerivatives && Rz.b.ClearCoatBumpTextureEnabled && !Oz && zz.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && Rz.b.ClearCoatTintTextureEnabled && zz.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(zz) {
          return this._texture === zz || (this._textureRoughness === zz || (this._bumpTexture === zz || this._tintTexture === zz))
        }
        getActiveTextures(zz) {
          this._texture && zz.push(this._texture), this._textureRoughness && zz.push(this._textureRoughness), this._bumpTexture && zz.push(this._bumpTexture), this._tintTexture && zz.push(this._tintTexture)
        }
        getAnimatables(zz) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && zz.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && zz.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && zz.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && zz.push(this._tintTexture)
        }
        dispose(zz) {
          zz && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(zz, tz, sz) {
          return zz.CLEARCOAT_BUMP && tz.addFallback(sz++, "CLEARCOAT_BUMP"), zz.CLEARCOAT_TINT && tz.addFallback(sz++, "CLEARCOAT_TINT"), zz.CLEARCOAT && tz.addFallback(sz++, "CLEARCOAT"), sz
        }
        getSamplers(zz) {
          zz.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, tz = new WeakMap, sz = new WeakMap, Fz = new WeakMap, Wz = new WeakMap, Xz = new WeakMap, Oz = new WeakMap, oz = new WeakMap, vz = new WeakMap, Uz = new WeakMap, (() => {
        const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Jz[Symbol.metadata] ?? null) : void 0;
        Kz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], uz = [(0, Cz.J)()], Nz = [(0, Cz.J)()], bz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], wz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Dz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], gz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Hz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Bz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Pz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], rz = [(0, Cz.p)()], Yz = [(0, Cz.J)()], xz = [(0, Cz.J)()], mz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], (0, Iz.h)(zz, null, Kz, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isEnabled" in zz,
            get: zz => zz.isEnabled,
            set: (zz, tz) => {
              zz.isEnabled = tz
            }
          },
          metadata: tz
        }, ez, Zz), (0, Iz.h)(zz, null, bz, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: zz => "indexOfRefraction" in zz,
            get: zz => zz.indexOfRefraction,
            set: (zz, tz) => {
              zz.indexOfRefraction = tz
            }
          },
          metadata: tz
        }, Az, yz), (0, Iz.h)(zz, null, wz, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: zz => "texture" in zz,
            get: zz => zz.texture,
            set: (zz, tz) => {
              zz.texture = tz
            }
          },
          metadata: tz
        }, Mz, dz), (0, Iz.h)(zz, null, Dz, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "useRoughnessFromMainTexture" in zz,
            get: zz => zz.useRoughnessFromMainTexture,
            set: (zz, tz) => {
              zz.useRoughnessFromMainTexture = tz
            }
          },
          metadata: tz
        }, hz, Qz), (0, Iz.h)(zz, null, gz, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: zz => "textureRoughness" in zz,
            get: zz => zz.textureRoughness,
            set: (zz, tz) => {
              zz.textureRoughness = tz
            }
          },
          metadata: tz
        }, kz, Lz), (0, Iz.h)(zz, null, Hz, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: zz => "remapF0OnInterfaceChange" in zz,
            get: zz => zz.remapF0OnInterfaceChange,
            set: (zz, tz) => {
              zz.remapF0OnInterfaceChange = tz
            }
          },
          metadata: tz
        }, lz, nz), (0, Iz.h)(zz, null, Bz, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "bumpTexture" in zz,
            get: zz => zz.bumpTexture,
            set: (zz, tz) => {
              zz.bumpTexture = tz
            }
          },
          metadata: tz
        }, qz, Sz), (0, Iz.h)(zz, null, Pz, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isTintEnabled" in zz,
            get: zz => zz.isTintEnabled,
            set: (zz, tz) => {
              zz.isTintEnabled = tz
            }
          },
          metadata: tz
        }, Vz, pz), (0, Iz.h)(zz, null, mz, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "tintTexture" in zz,
            get: zz => zz.tintTexture,
            set: (zz, tz) => {
              zz.tintTexture = tz
            }
          },
          metadata: tz
        }, Ot, ot), (0, Iz.h)(null, null, uz, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "intensity" in zz,
            get: zz => zz.intensity,
            set: (zz, tz) => {
              zz.intensity = tz
            }
          },
          metadata: tz
        }, Gz, Tz), (0, Iz.h)(null, null, Nz, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: zz => "roughness" in zz,
            get: zz => zz.roughness,
            set: (zz, tz) => {
              zz.roughness = tz
            }
          },
          metadata: tz
        }, cz, jz), (0, Iz.h)(null, null, rz, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "tintColor" in zz,
            get: zz => zz.tintColor,
            set: (zz, tz) => {
              zz.tintColor = tz
            }
          },
          metadata: tz
        }, zt, tt), (0, Iz.h)(null, null, Yz, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: zz => "tintColorAtDistance" in zz,
            get: zz => zz.tintColorAtDistance,
            set: (zz, tz) => {
              zz.tintColorAtDistance = tz
            }
          },
          metadata: tz
        }, st, Ft), (0, Iz.h)(null, null, xz, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: zz => "tintThickness" in zz,
            get: zz => zz.tintThickness,
            set: (zz, tz) => {
              zz.tintThickness = tz
            }
          },
          metadata: tz
        }, Wt, Xt), tz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tz
        })
      })(), zz._DefaultIndexOfRefraction = 1.5, zz
    })();
    class tt extends kz.d {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let st = (() => {
      var zz, tz, sz, Fz;
      let Wz, Xz, Oz, oz, vz, Uz, Kz, uz = iz.d,
        Nz = [],
        bz = [],
        wz = [],
        Dz = [],
        gz = [],
        Hz = [],
        Bz = [],
        Pz = [],
        rz = [],
        Yz = [],
        xz = [],
        mz = [],
        Jz = [],
        ez = [];
      return zz = class extends uz {
        get isEnabled() {
          return (0, Iz.c)(this, tz, "f")
        }
        set isEnabled(zz) {
          (0, Iz.g)(this, tz, zz, "f")
        }
        get texture() {
          return (0, Iz.c)(this, sz, "f")
        }
        set texture(zz) {
          (0, Iz.g)(this, sz, zz, "f")
        }
        get thicknessTexture() {
          return (0, Iz.c)(this, Fz, "f")
        }
        set thicknessTexture(zz) {
          (0, Iz.g)(this, Fz, zz, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Wz) {
          let Xz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Wz, "PBRIridescence", 110, new tt, Xz), this._isEnabled = !1, tz.set(this, (0, Iz.k)(this, Nz, !1)), this.intensity = ((0, Iz.k)(this, bz), (0, Iz.k)(this, wz, 1)), this.minimumThickness = ((0, Iz.k)(this, Dz), (0, Iz.k)(this, gz, zz._DefaultMinimumThickness)), this.maximumThickness = ((0, Iz.k)(this, Hz), (0, Iz.k)(this, Bz, zz._DefaultMaximumThickness)), this.indexOfRefraction = ((0, Iz.k)(this, Pz), (0, Iz.k)(this, rz, zz._DefaultIndexOfRefraction)), this._texture = ((0, Iz.k)(this, Yz), null), sz.set(this, (0, Iz.k)(this, xz, null)), this._thicknessTexture = ((0, Iz.k)(this, mz), null), Fz.set(this, (0, Iz.k)(this, Jz, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Iz.k)(this, ez), this._internalMarkAllSubMeshesAsTexturesDirty = Wz._dirtyCallbacks[1]
        }
        isReadyForSubMesh(zz, tz) {
          if (!this._isEnabled) return !0;
          if (zz._areTexturesDirty && tz.texturesEnabled) {
            if (this._texture && Rz.b.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && Rz.b.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(zz, tz) {
          this._isEnabled ? (zz.IRIDESCENCE = !0, zz._areTexturesDirty && tz.texturesEnabled && (this._texture && Rz.b.IridescenceTextureEnabled ? (0, fz.Y)(this._texture, zz, "IRIDESCENCE_TEXTURE") : zz.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && Rz.b.IridescenceTextureEnabled ? (0, fz.Y)(this._thicknessTexture, zz, "IRIDESCENCE_THICKNESS_TEXTURE") : zz.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (zz.IRIDESCENCE = !1, zz.IRIDESCENCE_TEXTURE = !1, zz.IRIDESCENCE_THICKNESS_TEXTURE = !1, zz.IRIDESCENCE_TEXTUREDIRECTUV = 0, zz.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(zz, tz) {
          if (!this._isEnabled) return;
          const sz = this._material.isFrozen;
          zz.useUbo && sz && zz.isSync || ((this._texture || this._thicknessTexture) && Rz.b.IridescenceTextureEnabled && (zz.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, fz.x)(this._texture, zz, "iridescence"), this._thicknessTexture && (0, fz.x)(this._thicknessTexture, zz, "iridescenceThickness")), zz.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), tz.texturesEnabled && (this._texture && Rz.b.IridescenceTextureEnabled && zz.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && Rz.b.IridescenceTextureEnabled && zz.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(zz) {
          return this._texture === zz || this._thicknessTexture === zz
        }
        getActiveTextures(zz) {
          this._texture && zz.push(this._texture), this._thicknessTexture && zz.push(this._thicknessTexture)
        }
        getAnimatables(zz) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && zz.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && zz.push(this._thicknessTexture)
        }
        dispose(zz) {
          zz && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(zz, tz, sz) {
          return zz.IRIDESCENCE && tz.addFallback(sz++, "IRIDESCENCE"), sz
        }
        getSamplers(zz) {
          zz.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, tz = new WeakMap, sz = new WeakMap, Fz = new WeakMap, (() => {
        const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(uz[Symbol.metadata] ?? null) : void 0;
        Wz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Xz = [(0, Cz.J)()], Oz = [(0, Cz.J)()], oz = [(0, Cz.J)()], vz = [(0, Cz.J)()], Uz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Kz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], (0, Iz.h)(zz, null, Wz, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isEnabled" in zz,
            get: zz => zz.isEnabled,
            set: (zz, tz) => {
              zz.isEnabled = tz
            }
          },
          metadata: tz
        }, Nz, bz), (0, Iz.h)(zz, null, Uz, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: zz => "texture" in zz,
            get: zz => zz.texture,
            set: (zz, tz) => {
              zz.texture = tz
            }
          },
          metadata: tz
        }, xz, mz), (0, Iz.h)(zz, null, Kz, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "thicknessTexture" in zz,
            get: zz => zz.thicknessTexture,
            set: (zz, tz) => {
              zz.thicknessTexture = tz
            }
          },
          metadata: tz
        }, Jz, ez), (0, Iz.h)(null, null, Xz, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "intensity" in zz,
            get: zz => zz.intensity,
            set: (zz, tz) => {
              zz.intensity = tz
            }
          },
          metadata: tz
        }, wz, Dz), (0, Iz.h)(null, null, Oz, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: zz => "minimumThickness" in zz,
            get: zz => zz.minimumThickness,
            set: (zz, tz) => {
              zz.minimumThickness = tz
            }
          },
          metadata: tz
        }, gz, Hz), (0, Iz.h)(null, null, oz, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: zz => "maximumThickness" in zz,
            get: zz => zz.maximumThickness,
            set: (zz, tz) => {
              zz.maximumThickness = tz
            }
          },
          metadata: tz
        }, Bz, Pz), (0, Iz.h)(null, null, vz, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: zz => "indexOfRefraction" in zz,
            get: zz => zz.indexOfRefraction,
            set: (zz, tz) => {
              zz.indexOfRefraction = tz
            }
          },
          metadata: tz
        }, rz, Yz), tz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tz
        })
      })(), zz._DefaultMinimumThickness = 100, zz._DefaultMaximumThickness = 400, zz._DefaultIndexOfRefraction = 1.3, zz
    })();
    class Ft extends kz.d {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Wt = (() => {
      var zz, tz, sz, Fz;
      let Wz, Xz, Oz, oz, vz, Uz = iz.d,
        Kz = [],
        uz = [],
        Nz = [],
        bz = [],
        wz = [],
        Dz = [],
        gz = [],
        Hz = [],
        Bz = [],
        Pz = [];
      return zz = class extends Uz {
        get isEnabled() {
          return (0, Iz.c)(this, tz, "f")
        }
        set isEnabled(zz) {
          (0, Iz.g)(this, tz, zz, "f")
        }
        set angle(zz) {
          this.direction.x = Math.cos(zz), this.direction.y = Math.sin(zz)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, Iz.c)(this, sz, "f")
        }
        set texture(zz) {
          (0, Iz.g)(this, sz, zz, "f")
        }
        get legacy() {
          return (0, Iz.c)(this, Fz, "f")
        }
        set legacy(zz) {
          (0, Iz.g)(this, Fz, zz, "f")
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
        constructor(zz) {
          let Wz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(zz, "PBRAnisotropic", 110, new Ft, Wz), this._isEnabled = !1, tz.set(this, (0, Iz.k)(this, Kz, !1)), this.intensity = ((0, Iz.k)(this, uz), (0, Iz.k)(this, Nz, 1)), this.direction = ((0, Iz.k)(this, bz), (0, Iz.k)(this, wz, new hz.n(1, 0))), this._texture = ((0, Iz.k)(this, Dz), null), sz.set(this, (0, Iz.k)(this, gz, null)), this._legacy = ((0, Iz.k)(this, Hz), !1), Fz.set(this, (0, Iz.k)(this, Bz, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Iz.k)(this, Pz), this._internalMarkAllSubMeshesAsTexturesDirty = zz._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = zz._dirtyCallbacks[16]
        }
        isReadyForSubMesh(zz, tz) {
          return !this._isEnabled || !(zz._areTexturesDirty && tz.texturesEnabled && this._texture && Rz.b.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(zz, tz, sz) {
          this._isEnabled ? (zz.ANISOTROPIC = this._isEnabled, this._isEnabled && !sz.isVerticesDataPresent(Qz.m.TangentKind) && (zz._needUVs = !0, zz.MAINUV1 = !0), zz._areTexturesDirty && tz.texturesEnabled && (this._texture && Rz.b.AnisotropicTextureEnabled ? (0, fz.Y)(this._texture, zz, "ANISOTROPIC_TEXTURE") : zz.ANISOTROPIC_TEXTURE = !1), zz._areMiscDirty && (zz.ANISOTROPIC_LEGACY = this._legacy)) : (zz.ANISOTROPIC = !1, zz.ANISOTROPIC_TEXTURE = !1, zz.ANISOTROPIC_TEXTUREDIRECTUV = 0, zz.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(zz, tz) {
          if (!this._isEnabled) return;
          const sz = this._material.isFrozen;
          zz.useUbo && sz && zz.isSync || (this._texture && Rz.b.AnisotropicTextureEnabled && (zz.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, fz.x)(this._texture, zz, "anisotropy")), zz.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), tz.texturesEnabled && this._texture && Rz.b.AnisotropicTextureEnabled && zz.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(zz) {
          return this._texture === zz
        }
        getActiveTextures(zz) {
          this._texture && zz.push(this._texture)
        }
        getAnimatables(zz) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && zz.push(this._texture)
        }
        dispose(zz) {
          zz && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(zz, tz, sz) {
          return zz.ANISOTROPIC && tz.addFallback(sz++, "ANISOTROPIC"), sz
        }
        getSamplers(zz) {
          zz.push("anisotropySampler")
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
        parse(zz, tz, sz) {
          super.parse(zz, tz, sz), void 0 === zz.legacy && (this.legacy = !0)
        }
      }, tz = new WeakMap, sz = new WeakMap, Fz = new WeakMap, (() => {
        const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Uz[Symbol.metadata] ?? null) : void 0;
        Wz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Xz = [(0, Cz.J)()], Oz = [(0, Cz.E)()], oz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], vz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], (0, Iz.h)(zz, null, Wz, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isEnabled" in zz,
            get: zz => zz.isEnabled,
            set: (zz, tz) => {
              zz.isEnabled = tz
            }
          },
          metadata: tz
        }, Kz, uz), (0, Iz.h)(zz, null, oz, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: zz => "texture" in zz,
            get: zz => zz.texture,
            set: (zz, tz) => {
              zz.texture = tz
            }
          },
          metadata: tz
        }, gz, Hz), (0, Iz.h)(zz, null, vz, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: zz => "legacy" in zz,
            get: zz => zz.legacy,
            set: (zz, tz) => {
              zz.legacy = tz
            }
          },
          metadata: tz
        }, Bz, Pz), (0, Iz.h)(null, null, Xz, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "intensity" in zz,
            get: zz => zz.intensity,
            set: (zz, tz) => {
              zz.intensity = tz
            }
          },
          metadata: tz
        }, Nz, bz), (0, Iz.h)(null, null, Oz, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: zz => "direction" in zz,
            get: zz => zz.direction,
            set: (zz, tz) => {
              zz.direction = tz
            }
          },
          metadata: tz
        }, wz, Dz), tz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tz
        })
      })(), zz
    })();
    class Xt extends kz.d {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Ot = (() => {
      var zz, tz, sz, Fz, Wz, Xz, Oz, oz;
      let vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz = iz.d,
        Bz = [],
        Pz = [],
        rz = [],
        Yz = [],
        xz = [],
        mz = [],
        Jz = [],
        ez = [],
        Zz = [],
        Gz = [],
        Tz = [],
        cz = [],
        jz = [],
        Az = [],
        yz = [],
        Mz = [],
        dz = [],
        hz = [];
      return zz = class extends Hz {
        get isEnabled() {
          return (0, Iz.c)(this, tz, "f")
        }
        set isEnabled(zz) {
          (0, Iz.g)(this, tz, zz, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, Iz.c)(this, sz, "f")
        }
        set linkSheenWithAlbedo(zz) {
          (0, Iz.g)(this, sz, zz, "f")
        }
        get texture() {
          return (0, Iz.c)(this, Fz, "f")
        }
        set texture(zz) {
          (0, Iz.g)(this, Fz, zz, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Iz.c)(this, Wz, "f")
        }
        set useRoughnessFromMainTexture(zz) {
          (0, Iz.g)(this, Wz, zz, "f")
        }
        get roughness() {
          return (0, Iz.c)(this, Xz, "f")
        }
        set roughness(zz) {
          (0, Iz.g)(this, Xz, zz, "f")
        }
        get textureRoughness() {
          return (0, Iz.c)(this, Oz, "f")
        }
        set textureRoughness(zz) {
          (0, Iz.g)(this, Oz, zz, "f")
        }
        get albedoScaling() {
          return (0, Iz.c)(this, oz, "f")
        }
        set albedoScaling(zz) {
          (0, Iz.g)(this, oz, zz, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(zz) {
          let vz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(zz, "Sheen", 120, new Xt, vz), this._isEnabled = !1, tz.set(this, (0, Iz.k)(this, Bz, !1)), this._linkSheenWithAlbedo = ((0, Iz.k)(this, Pz), !1), sz.set(this, (0, Iz.k)(this, rz, !1)), this.intensity = ((0, Iz.k)(this, Yz), (0, Iz.k)(this, xz, 1)), this.color = ((0, Iz.k)(this, mz), (0, Iz.k)(this, Jz, az.c.White())), this._texture = ((0, Iz.k)(this, ez), null), Fz.set(this, (0, Iz.k)(this, Zz, null)), this._useRoughnessFromMainTexture = ((0, Iz.k)(this, Gz), !0), Wz.set(this, (0, Iz.k)(this, Tz, !0)), this._roughness = ((0, Iz.k)(this, cz), null), Xz.set(this, (0, Iz.k)(this, jz, null)), this._textureRoughness = ((0, Iz.k)(this, Az), null), Oz.set(this, (0, Iz.k)(this, yz, null)), this._albedoScaling = ((0, Iz.k)(this, Mz), !1), oz.set(this, (0, Iz.k)(this, dz, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Iz.k)(this, hz), this._internalMarkAllSubMeshesAsTexturesDirty = zz._dirtyCallbacks[1]
        }
        isReadyForSubMesh(zz, tz) {
          if (!this._isEnabled) return !0;
          if (zz._areTexturesDirty && tz.texturesEnabled) {
            if (this._texture && Rz.b.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Rz.b.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(zz, tz) {
          this._isEnabled ? (zz.SHEEN = !0, zz.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, zz.SHEEN_ROUGHNESS = null !== this._roughness, zz.SHEEN_ALBEDOSCALING = this._albedoScaling, zz.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, zz._areTexturesDirty && tz.texturesEnabled && (this._texture && Rz.b.SheenTextureEnabled ? ((0, fz.Y)(this._texture, zz, "SHEEN_TEXTURE"), zz.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : zz.SHEEN_TEXTURE = !1, this._textureRoughness && Rz.b.SheenTextureEnabled ? (0, fz.Y)(this._textureRoughness, zz, "SHEEN_TEXTURE_ROUGHNESS") : zz.SHEEN_TEXTURE_ROUGHNESS = !1)) : (zz.SHEEN = !1, zz.SHEEN_TEXTURE = !1, zz.SHEEN_TEXTURE_ROUGHNESS = !1, zz.SHEEN_LINKWITHALBEDO = !1, zz.SHEEN_ROUGHNESS = !1, zz.SHEEN_ALBEDOSCALING = !1, zz.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, zz.SHEEN_GAMMATEXTURE = !1, zz.SHEEN_TEXTUREDIRECTUV = 0, zz.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(zz, tz, sz, Fz) {
          if (!this._isEnabled) return;
          const Wz = Fz.materialDefines,
            Xz = this._material.isFrozen;
          zz.useUbo && Xz && zz.isSync || ((this._texture || this._textureRoughness) && Rz.b.SheenTextureEnabled && (zz.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, fz.x)(this._texture, zz, "sheen"), this._textureRoughness && !Wz.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, fz.x)(this._textureRoughness, zz, "sheenRoughness")), zz.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && zz.updateFloat("vSheenRoughness", this._roughness)), tz.texturesEnabled && (this._texture && Rz.b.SheenTextureEnabled && zz.setTexture("sheenSampler", this._texture), this._textureRoughness && !Wz.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && Rz.b.SheenTextureEnabled && zz.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(zz) {
          return this._texture === zz || this._textureRoughness === zz
        }
        getActiveTextures(zz) {
          this._texture && zz.push(this._texture), this._textureRoughness && zz.push(this._textureRoughness)
        }
        getAnimatables(zz) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && zz.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && zz.push(this._textureRoughness)
        }
        dispose(zz) {
          zz && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(zz, tz, sz) {
          return zz.SHEEN && tz.addFallback(sz++, "SHEEN"), sz
        }
        getSamplers(zz) {
          zz.push("sheenSampler", "sheenRoughnessSampler")
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
      }, tz = new WeakMap, sz = new WeakMap, Fz = new WeakMap, Wz = new WeakMap, Xz = new WeakMap, Oz = new WeakMap, oz = new WeakMap, (() => {
        const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hz[Symbol.metadata] ?? null) : void 0;
        vz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Uz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Kz = [(0, Cz.J)()], uz = [(0, Cz.p)()], Nz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], bz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], wz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Dz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], gz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], (0, Iz.h)(zz, null, vz, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isEnabled" in zz,
            get: zz => zz.isEnabled,
            set: (zz, tz) => {
              zz.isEnabled = tz
            }
          },
          metadata: tz
        }, Bz, Pz), (0, Iz.h)(zz, null, Uz, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: zz => "linkSheenWithAlbedo" in zz,
            get: zz => zz.linkSheenWithAlbedo,
            set: (zz, tz) => {
              zz.linkSheenWithAlbedo = tz
            }
          },
          metadata: tz
        }, rz, Yz), (0, Iz.h)(zz, null, Nz, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: zz => "texture" in zz,
            get: zz => zz.texture,
            set: (zz, tz) => {
              zz.texture = tz
            }
          },
          metadata: tz
        }, Zz, Gz), (0, Iz.h)(zz, null, bz, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "useRoughnessFromMainTexture" in zz,
            get: zz => zz.useRoughnessFromMainTexture,
            set: (zz, tz) => {
              zz.useRoughnessFromMainTexture = tz
            }
          },
          metadata: tz
        }, Tz, cz), (0, Iz.h)(zz, null, wz, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: zz => "roughness" in zz,
            get: zz => zz.roughness,
            set: (zz, tz) => {
              zz.roughness = tz
            }
          },
          metadata: tz
        }, jz, Az), (0, Iz.h)(zz, null, Dz, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: zz => "textureRoughness" in zz,
            get: zz => zz.textureRoughness,
            set: (zz, tz) => {
              zz.textureRoughness = tz
            }
          },
          metadata: tz
        }, yz, Mz), (0, Iz.h)(zz, null, gz, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: zz => "albedoScaling" in zz,
            get: zz => zz.albedoScaling,
            set: (zz, tz) => {
              zz.albedoScaling = tz
            }
          },
          metadata: tz
        }, dz, hz), (0, Iz.h)(null, null, Kz, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "intensity" in zz,
            get: zz => zz.intensity,
            set: (zz, tz) => {
              zz.intensity = tz
            }
          },
          metadata: tz
        }, xz, mz), (0, Iz.h)(null, null, uz, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: zz => "color" in zz,
            get: zz => zz.color,
            set: (zz, tz) => {
              zz.color = tz
            }
          },
          metadata: tz
        }, Jz, ez), tz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tz
        })
      })(), zz
    })();
    class ot extends kz.d {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let vt = (() => {
      var zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz;
      let Hz, Bz, Pz, rz, Yz, xz, mz, Jz, ez, Zz, Gz, Tz, cz, jz, Az, yz, Mz, dz, Qz, kz, Lz, lz, nz, qz, Sz, Vz, pz, Ez, zt, tt, st = iz.d,
        Ft = [],
        Wt = [],
        Xt = [],
        Ot = [],
        vt = [],
        Ut = [],
        Kt = [],
        ut = [],
        Nt = [],
        bt = [],
        wt = [],
        Dt = [],
        gt = [],
        Ht = [],
        Bt = [],
        Pt = [],
        rt = [],
        Yt = [],
        xt = [],
        mt = [],
        Jt = [],
        It = [],
        Ct = [],
        et = [],
        Zt = [],
        Gt = [],
        Tt = [],
        ct = [],
        jt = [],
        At = [],
        yt = [],
        Mt = [],
        dt = [],
        ht = [],
        Qt = [],
        kt = [],
        it = [],
        Lt = [],
        lt = [],
        nt = [],
        qt = [],
        St = [],
        Vt = [],
        Rt = [],
        pt = [],
        ft = [],
        Et = [],
        zs = [],
        ts = [],
        ss = [],
        Fs = [],
        Ws = [],
        Xs = [],
        Os = [],
        os = [],
        vs = [],
        Us = [],
        Ks = [],
        us = [],
        Ns = [];
      return zz = class extends st {
        get isRefractionEnabled() {
          return (0, Iz.c)(this, tz, "f")
        }
        set isRefractionEnabled(zz) {
          (0, Iz.g)(this, tz, zz, "f")
        }
        get isTranslucencyEnabled() {
          return (0, Iz.c)(this, sz, "f")
        }
        set isTranslucencyEnabled(zz) {
          (0, Iz.g)(this, sz, zz, "f")
        }
        get isDispersionEnabled() {
          return (0, Iz.c)(this, Fz, "f")
        }
        set isDispersionEnabled(zz) {
          (0, Iz.g)(this, Fz, zz, "f")
        }
        get isScatteringEnabled() {
          return (0, Iz.c)(this, Wz, "f")
        }
        set isScatteringEnabled(zz) {
          (0, Iz.g)(this, Wz, zz, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(zz) {
          this._scene.enableSubSurfaceForPrePass() && zz && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(zz))
        }
        get useAlbedoToTintRefraction() {
          return (0, Iz.c)(this, Xz, "f")
        }
        set useAlbedoToTintRefraction(zz) {
          (0, Iz.g)(this, Xz, zz, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, Iz.c)(this, Oz, "f")
        }
        set useAlbedoToTintTranslucency(zz) {
          (0, Iz.g)(this, Oz, zz, "f")
        }
        get thicknessTexture() {
          return (0, Iz.c)(this, oz, "f")
        }
        set thicknessTexture(zz) {
          (0, Iz.g)(this, oz, zz, "f")
        }
        get refractionTexture() {
          return (0, Iz.c)(this, vz, "f")
        }
        set refractionTexture(zz) {
          (0, Iz.g)(this, vz, zz, "f")
        }
        get indexOfRefraction() {
          return (0, Iz.c)(this, Uz, "f")
        }
        set indexOfRefraction(zz) {
          (0, Iz.g)(this, Uz, zz, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(zz) {
          const tz = zz >= 1 ? zz : -1;
          this._volumeIndexOfRefraction !== tz && (this._volumeIndexOfRefraction = tz, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, Iz.c)(this, Kz, "f")
        }
        set invertRefractionY(zz) {
          (0, Iz.g)(this, Kz, zz, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, Iz.c)(this, uz, "f")
        }
        set linkRefractionWithTransparency(zz) {
          (0, Iz.g)(this, uz, zz, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, Iz.c)(this, Nz, "f")
        }
        set useMaskFromThicknessTexture(zz) {
          (0, Iz.g)(this, Nz, zz, "f")
        }
        get refractionIntensityTexture() {
          return (0, Iz.c)(this, bz, "f")
        }
        set refractionIntensityTexture(zz) {
          (0, Iz.g)(this, bz, zz, "f")
        }
        get translucencyIntensityTexture() {
          return (0, Iz.c)(this, wz, "f")
        }
        set translucencyIntensityTexture(zz) {
          (0, Iz.g)(this, wz, zz, "f")
        }
        get translucencyColorTexture() {
          return (0, Iz.c)(this, Dz, "f")
        }
        set translucencyColorTexture(zz) {
          (0, Iz.g)(this, Dz, zz, "f")
        }
        get useGltfStyleTextures() {
          return (0, Iz.c)(this, gz, "f")
        }
        set useGltfStyleTextures(zz) {
          (0, Iz.g)(this, gz, zz, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(zz) {
          this.legacyTranslucency = zz
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
        constructor(Hz) {
          let Bz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Hz, "PBRSubSurface", 130, new ot, Bz), this._isRefractionEnabled = !1, tz.set(this, (0, Iz.k)(this, Ft, !1)), this._isTranslucencyEnabled = ((0, Iz.k)(this, Wt), !1), sz.set(this, (0, Iz.k)(this, Xt, !1)), this._isDispersionEnabled = ((0, Iz.k)(this, Ot), !1), Fz.set(this, (0, Iz.k)(this, vt, !1)), this._isScatteringEnabled = ((0, Iz.k)(this, Ut), !1), Wz.set(this, (0, Iz.k)(this, Kt, !1)), this._scatteringDiffusionProfileIndex = ((0, Iz.k)(this, ut), (0, Iz.k)(this, Nt, 0)), this.refractionIntensity = ((0, Iz.k)(this, bt), (0, Iz.k)(this, wt, 1)), this.translucencyIntensity = ((0, Iz.k)(this, Dt), (0, Iz.k)(this, gt, 1)), this._useAlbedoToTintRefraction = ((0, Iz.k)(this, Ht), !1), Xz.set(this, (0, Iz.k)(this, Bt, !1)), this._useAlbedoToTintTranslucency = ((0, Iz.k)(this, Pt), !1), Oz.set(this, (0, Iz.k)(this, rt, !1)), this._thicknessTexture = ((0, Iz.k)(this, Yt), null), oz.set(this, (0, Iz.k)(this, xt, null)), this._refractionTexture = ((0, Iz.k)(this, mt), null), vz.set(this, (0, Iz.k)(this, Jt, null)), this._indexOfRefraction = ((0, Iz.k)(this, It), 1.5), Uz.set(this, (0, Iz.k)(this, Ct, 1.5)), this._volumeIndexOfRefraction = ((0, Iz.k)(this, et), (0, Iz.k)(this, Zt, -1)), this._invertRefractionY = ((0, Iz.k)(this, Gt), !1), Kz.set(this, (0, Iz.k)(this, Tt, !1)), this._linkRefractionWithTransparency = ((0, Iz.k)(this, ct), !1), uz.set(this, (0, Iz.k)(this, jt, !1)), this.minimumThickness = ((0, Iz.k)(this, At), (0, Iz.k)(this, yt, 0)), this.maximumThickness = ((0, Iz.k)(this, Mt), (0, Iz.k)(this, dt, 1)), this.useThicknessAsDepth = ((0, Iz.k)(this, ht), (0, Iz.k)(this, Qt, !1)), this.tintColor = ((0, Iz.k)(this, kt), (0, Iz.k)(this, it, az.c.White())), this.tintColorAtDistance = ((0, Iz.k)(this, Lt), (0, Iz.k)(this, lt, 1)), this.dispersion = ((0, Iz.k)(this, nt), (0, Iz.k)(this, qt, 0)), this.diffusionDistance = ((0, Iz.k)(this, St), (0, Iz.k)(this, Vt, az.c.White())), this._useMaskFromThicknessTexture = ((0, Iz.k)(this, Rt), !1), Nz.set(this, (0, Iz.k)(this, pt, !1)), this._refractionIntensityTexture = ((0, Iz.k)(this, ft), null), bz.set(this, (0, Iz.k)(this, Et, null)), this._translucencyIntensityTexture = ((0, Iz.k)(this, zs), null), wz.set(this, (0, Iz.k)(this, ts, null)), this.translucencyColor = ((0, Iz.k)(this, ss), (0, Iz.k)(this, Fs, null)), this._translucencyColorTexture = ((0, Iz.k)(this, Ws), null), Dz.set(this, (0, Iz.k)(this, Xs, null)), this._useGltfStyleTextures = ((0, Iz.k)(this, Os), !0), gz.set(this, (0, Iz.k)(this, os, !0)), this.applyAlbedoAfterSubSurface = ((0, Iz.k)(this, vs), (0, Iz.k)(this, Us, zz.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, Iz.k)(this, Ks), (0, Iz.k)(this, us, zz.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, Iz.k)(this, Ns), this._scene = Hz.aJ(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = Hz._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = Hz._dirtyCallbacks[32]
        }
        isReadyForSubMesh(zz, tz) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (zz._areTexturesDirty && tz.texturesEnabled) {
            if (this._thicknessTexture && Rz.b.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && Rz.b.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && Rz.b.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && Rz.b.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const zz = this._getRefractionTexture(tz);
            if (zz && Rz.b.RefractionTextureEnabled && !zz.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(zz, tz) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return zz.SUBSURFACE = !1, zz.SS_DISPERSION = !1, zz.SS_TRANSLUCENCY = !1, zz.SS_SCATTERING = !1, zz.SS_REFRACTION = !1, zz.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, zz.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, zz.SS_THICKNESSANDMASK_TEXTURE = !1, zz.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, zz.SS_HAS_THICKNESS = !1, zz.SS_REFRACTIONINTENSITY_TEXTURE = !1, zz.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, zz.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, zz.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, zz.SS_REFRACTIONMAP_3D = !1, zz.SS_REFRACTIONMAP_OPPOSITEZ = !1, zz.SS_LODINREFRACTIONALPHA = !1, zz.SS_GAMMAREFRACTION = !1, zz.SS_RGBDREFRACTION = !1, zz.SS_LINEARSPECULARREFRACTION = !1, zz.SS_LINKREFRACTIONTOTRANSPARENCY = !1, zz.SS_ALBEDOFORREFRACTIONTINT = !1, zz.SS_ALBEDOFORTRANSLUCENCYTINT = !1, zz.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, zz.SS_USE_THICKNESS_AS_DEPTH = !1, zz.SS_USE_GLTF_TEXTURES = !1, zz.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, zz.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, zz.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(zz.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (zz._areTexturesDirty) {
            if (zz.SUBSURFACE = !0, zz.SS_DISPERSION = this._isDispersionEnabled, zz.SS_TRANSLUCENCY = this._isTranslucencyEnabled, zz.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, zz.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, zz.SS_SCATTERING = this._isScatteringEnabled, zz.SS_THICKNESSANDMASK_TEXTURE = !1, zz.SS_REFRACTIONINTENSITY_TEXTURE = !1, zz.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, zz.SS_HAS_THICKNESS = !1, zz.SS_USE_GLTF_TEXTURES = !1, zz.SS_REFRACTION = !1, zz.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, zz.SS_REFRACTIONMAP_3D = !1, zz.SS_GAMMAREFRACTION = !1, zz.SS_RGBDREFRACTION = !1, zz.SS_LINEARSPECULARREFRACTION = !1, zz.SS_REFRACTIONMAP_OPPOSITEZ = !1, zz.SS_LODINREFRACTIONALPHA = !1, zz.SS_LINKREFRACTIONTOTRANSPARENCY = !1, zz.SS_ALBEDOFORREFRACTIONTINT = !1, zz.SS_ALBEDOFORTRANSLUCENCYTINT = !1, zz.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, zz.SS_USE_THICKNESS_AS_DEPTH = !1, zz.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, zz.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, zz._areTexturesDirty && tz.texturesEnabled && (this._thicknessTexture && Rz.b.ThicknessTextureEnabled && (0, fz.Y)(this._thicknessTexture, zz, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && Rz.b.RefractionIntensityTextureEnabled && (0, fz.Y)(this._refractionIntensityTexture, zz, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && Rz.b.TranslucencyIntensityTextureEnabled && (0, fz.Y)(this._translucencyIntensityTexture, zz, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && Rz.b.TranslucencyColorTextureEnabled && ((0, fz.Y)(this._translucencyColorTexture, zz, "SS_TRANSLUCENCYCOLOR_TEXTURE"), zz.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), zz.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, zz.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, zz.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, zz.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && tz.texturesEnabled) {
              const sz = this._getRefractionTexture(tz);
              sz && Rz.b.RefractionTextureEnabled && (zz.SS_REFRACTION = !0, zz.SS_REFRACTIONMAP_3D = sz.isCube, zz.SS_GAMMAREFRACTION = sz.gammaSpace, zz.SS_RGBDREFRACTION = sz.isRGBD, zz.SS_LINEARSPECULARREFRACTION = sz.linearSpecularLOD, zz.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && sz.isCube ? !sz.invertZ : sz.invertZ, zz.SS_LODINREFRACTIONALPHA = sz.lodLevelInAlpha, zz.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, zz.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, zz.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = sz.isCube && sz.boundingBoxSize, zz.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (zz.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(zz, tz, sz, Fz) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) zz.updateFloat2("vThicknessParam", 0, 0);
            else {
              Fz.getRenderingMesh().getWorldMatrix().decompose(hz.m.XD[0]);
              const tz = Math.max(Math.abs(hz.m.XD[0].x), Math.abs(hz.m.XD[0].y), Math.abs(hz.m.XD[0].z));
              zz.updateFloat2("vThicknessParam", this.minimumThickness * tz, (this.maximumThickness - this.minimumThickness) * tz)
            }
        }
        bindForSubMesh(zz, tz, sz, Fz) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Wz = Fz.materialDefines,
            Xz = this._material.isFrozen,
            Oz = this._material.realTimeFiltering,
            oz = Wz.LODBASEDMICROSFURACE,
            vz = this._getRefractionTexture(tz);
          if (!zz.useUbo || !Xz || !zz.isSync) {
            if (this._thicknessTexture && Rz.b.ThicknessTextureEnabled && (zz.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, fz.x)(this._thicknessTexture, zz, "thickness")), this._refractionIntensityTexture && Rz.b.RefractionIntensityTextureEnabled && Wz.SS_REFRACTIONINTENSITY_TEXTURE && (zz.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, fz.x)(this._refractionIntensityTexture, zz, "refractionIntensity")), this._translucencyColorTexture && Rz.b.TranslucencyColorTextureEnabled && Wz.SS_TRANSLUCENCYCOLOR_TEXTURE && (zz.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, fz.x)(this._translucencyColorTexture, zz, "translucencyColor")), this._translucencyIntensityTexture && Rz.b.TranslucencyIntensityTextureEnabled && Wz.SS_TRANSLUCENCYINTENSITY_TEXTURE && (zz.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, fz.x)(this._translucencyIntensityTexture, zz, "translucencyIntensity")), vz && Rz.b.RefractionTextureEnabled) {
              zz.y5("refractionMatrix", vz.getRefractionTextureMatrix());
              let tz = 1;
              vz.isCube || vz.depth && (tz = vz.depth);
              const sz = vz.getSize().width,
                Fz = this.volumeIndexOfRefraction;
              if (zz.updateFloat4("vRefractionInfos", vz.level, 1 / Fz, tz, this._invertRefractionY ? -1 : 1), zz.updateFloat4("vRefractionMicrosurfaceInfos", sz, vz.lodGenerationScale, vz.lodGenerationOffset, 1 / this.indexOfRefraction), Oz && zz.updateFloat2("vRefractionFilteringInfo", sz, Math.log2(sz)), vz.boundingBoxSize) {
                const tz = vz;
                zz.updateVector3("vRefractionPosition", tz.boundingBoxPosition), zz.updateVector3("vRefractionSize", tz.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && zz.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), zz.updateColor3("vDiffusionDistance", this.diffusionDistance), zz.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), zz.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), zz.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), zz.updateFloat("dispersion", this.dispersion)
          }
          tz.texturesEnabled && (this._thicknessTexture && Rz.b.ThicknessTextureEnabled && zz.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && Rz.b.RefractionIntensityTextureEnabled && Wz.SS_REFRACTIONINTENSITY_TEXTURE && zz.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && Rz.b.TranslucencyIntensityTextureEnabled && Wz.SS_TRANSLUCENCYINTENSITY_TEXTURE && zz.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && Rz.b.TranslucencyColorTextureEnabled && Wz.SS_TRANSLUCENCYCOLOR_TEXTURE && zz.setTexture("translucencyColorSampler", this._translucencyColorTexture), vz && Rz.b.RefractionTextureEnabled && (oz ? zz.setTexture("refractionSampler", vz) : (zz.setTexture("refractionSampler", vz._lodTextureMid || vz), zz.setTexture("refractionSamplerLow", vz._lodTextureLow || vz), zz.setTexture("refractionSamplerHigh", vz._lodTextureHigh || vz))))
        }
        _getRefractionTexture(zz) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? zz.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(zz) {
          Rz.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && zz.push(this._refractionTexture)
        }
        hasTexture(zz) {
          return this._thicknessTexture === zz || (this._refractionTexture === zz || (this._refractionIntensityTexture === zz || (this._translucencyIntensityTexture === zz || this._translucencyColorTexture === zz)))
        }
        hasRenderTargetTextures() {
          return !!(Rz.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(zz) {
          this._thicknessTexture && zz.push(this._thicknessTexture), this._refractionTexture && zz.push(this._refractionTexture), this._refractionIntensityTexture && zz.push(this._refractionIntensityTexture), this._translucencyColorTexture && zz.push(this._translucencyColorTexture), this._translucencyIntensityTexture && zz.push(this._translucencyIntensityTexture)
        }
        getAnimatables(zz) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && zz.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && zz.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && zz.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && zz.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && zz.push(this._translucencyIntensityTexture)
        }
        dispose(zz) {
          zz && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(zz, tz, sz) {
          return zz.SS_SCATTERING && tz.addFallback(sz++, "SS_SCATTERING"), zz.SS_TRANSLUCENCY && tz.addFallback(sz++, "SS_TRANSLUCENCY"), sz
        }
        getSamplers(zz) {
          zz.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, tz = new WeakMap, sz = new WeakMap, Fz = new WeakMap, Wz = new WeakMap, Xz = new WeakMap, Oz = new WeakMap, oz = new WeakMap, vz = new WeakMap, Uz = new WeakMap, Kz = new WeakMap, uz = new WeakMap, Nz = new WeakMap, bz = new WeakMap, wz = new WeakMap, Dz = new WeakMap, gz = new WeakMap, (() => {
        const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(st[Symbol.metadata] ?? null) : void 0;
        Hz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Bz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Pz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], rz = [(0, Cz.J)(), (0, Cz.i)("_markScenePrePassDirty")], Yz = [(0, Cz.J)()], xz = [(0, Cz.J)()], mz = [(0, Cz.J)()], Jz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], ez = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Zz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Gz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Tz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], cz = [(0, Cz.J)()], jz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Az = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], yz = [(0, Cz.J)()], Mz = [(0, Cz.J)()], dz = [(0, Cz.J)()], Qz = [(0, Cz.p)()], kz = [(0, Cz.J)()], Lz = [(0, Cz.J)()], lz = [(0, Cz.p)()], nz = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], qz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Sz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Vz = [(0, Cz.p)()], pz = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Ez = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], zt = [(0, Cz.J)()], tt = [(0, Cz.J)()], (0, Iz.h)(zz, null, Hz, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isRefractionEnabled" in zz,
            get: zz => zz.isRefractionEnabled,
            set: (zz, tz) => {
              zz.isRefractionEnabled = tz
            }
          },
          metadata: tz
        }, Ft, Wt), (0, Iz.h)(zz, null, Bz, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isTranslucencyEnabled" in zz,
            get: zz => zz.isTranslucencyEnabled,
            set: (zz, tz) => {
              zz.isTranslucencyEnabled = tz
            }
          },
          metadata: tz
        }, Xt, Ot), (0, Iz.h)(zz, null, Pz, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isDispersionEnabled" in zz,
            get: zz => zz.isDispersionEnabled,
            set: (zz, tz) => {
              zz.isDispersionEnabled = tz
            }
          },
          metadata: tz
        }, vt, Ut), (0, Iz.h)(zz, null, rz, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isScatteringEnabled" in zz,
            get: zz => zz.isScatteringEnabled,
            set: (zz, tz) => {
              zz.isScatteringEnabled = tz
            }
          },
          metadata: tz
        }, Kt, ut), (0, Iz.h)(zz, null, Jz, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAlbedoToTintRefraction" in zz,
            get: zz => zz.useAlbedoToTintRefraction,
            set: (zz, tz) => {
              zz.useAlbedoToTintRefraction = tz
            }
          },
          metadata: tz
        }, Bt, Pt), (0, Iz.h)(zz, null, ez, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAlbedoToTintTranslucency" in zz,
            get: zz => zz.useAlbedoToTintTranslucency,
            set: (zz, tz) => {
              zz.useAlbedoToTintTranslucency = tz
            }
          },
          metadata: tz
        }, rt, Yt), (0, Iz.h)(zz, null, Zz, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "thicknessTexture" in zz,
            get: zz => zz.thicknessTexture,
            set: (zz, tz) => {
              zz.thicknessTexture = tz
            }
          },
          metadata: tz
        }, xt, mt), (0, Iz.h)(zz, null, Gz, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "refractionTexture" in zz,
            get: zz => zz.refractionTexture,
            set: (zz, tz) => {
              zz.refractionTexture = tz
            }
          },
          metadata: tz
        }, Jt, It), (0, Iz.h)(zz, null, Tz, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: zz => "indexOfRefraction" in zz,
            get: zz => zz.indexOfRefraction,
            set: (zz, tz) => {
              zz.indexOfRefraction = tz
            }
          },
          metadata: tz
        }, Ct, et), (0, Iz.h)(zz, null, jz, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: zz => "invertRefractionY" in zz,
            get: zz => zz.invertRefractionY,
            set: (zz, tz) => {
              zz.invertRefractionY = tz
            }
          },
          metadata: tz
        }, Tt, ct), (0, Iz.h)(zz, null, Az, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: zz => "linkRefractionWithTransparency" in zz,
            get: zz => zz.linkRefractionWithTransparency,
            set: (zz, tz) => {
              zz.linkRefractionWithTransparency = tz
            }
          },
          metadata: tz
        }, jt, At), (0, Iz.h)(zz, null, nz, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "useMaskFromThicknessTexture" in zz,
            get: zz => zz.useMaskFromThicknessTexture,
            set: (zz, tz) => {
              zz.useMaskFromThicknessTexture = tz
            }
          },
          metadata: tz
        }, pt, ft), (0, Iz.h)(zz, null, qz, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "refractionIntensityTexture" in zz,
            get: zz => zz.refractionIntensityTexture,
            set: (zz, tz) => {
              zz.refractionIntensityTexture = tz
            }
          },
          metadata: tz
        }, Et, zs), (0, Iz.h)(zz, null, Sz, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "translucencyIntensityTexture" in zz,
            get: zz => zz.translucencyIntensityTexture,
            set: (zz, tz) => {
              zz.translucencyIntensityTexture = tz
            }
          },
          metadata: tz
        }, ts, ss), (0, Iz.h)(zz, null, pz, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "translucencyColorTexture" in zz,
            get: zz => zz.translucencyColorTexture,
            set: (zz, tz) => {
              zz.translucencyColorTexture = tz
            }
          },
          metadata: tz
        }, Xs, Os), (0, Iz.h)(zz, null, Ez, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: zz => "useGltfStyleTextures" in zz,
            get: zz => zz.useGltfStyleTextures,
            set: (zz, tz) => {
              zz.useGltfStyleTextures = tz
            }
          },
          metadata: tz
        }, os, vs), (0, Iz.h)(null, null, Yz, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: zz => "_scatteringDiffusionProfileIndex" in zz,
            get: zz => zz._scatteringDiffusionProfileIndex,
            set: (zz, tz) => {
              zz._scatteringDiffusionProfileIndex = tz
            }
          },
          metadata: tz
        }, Nt, bt), (0, Iz.h)(null, null, xz, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "refractionIntensity" in zz,
            get: zz => zz.refractionIntensity,
            set: (zz, tz) => {
              zz.refractionIntensity = tz
            }
          },
          metadata: tz
        }, wt, Dt), (0, Iz.h)(null, null, mz, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "translucencyIntensity" in zz,
            get: zz => zz.translucencyIntensity,
            set: (zz, tz) => {
              zz.translucencyIntensity = tz
            }
          },
          metadata: tz
        }, gt, Ht), (0, Iz.h)(null, null, cz, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: zz => "_volumeIndexOfRefraction" in zz,
            get: zz => zz._volumeIndexOfRefraction,
            set: (zz, tz) => {
              zz._volumeIndexOfRefraction = tz
            }
          },
          metadata: tz
        }, Zt, Gt), (0, Iz.h)(null, null, yz, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: zz => "minimumThickness" in zz,
            get: zz => zz.minimumThickness,
            set: (zz, tz) => {
              zz.minimumThickness = tz
            }
          },
          metadata: tz
        }, yt, Mt), (0, Iz.h)(null, null, Mz, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: zz => "maximumThickness" in zz,
            get: zz => zz.maximumThickness,
            set: (zz, tz) => {
              zz.maximumThickness = tz
            }
          },
          metadata: tz
        }, dt, ht), (0, Iz.h)(null, null, dz, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: zz => "useThicknessAsDepth" in zz,
            get: zz => zz.useThicknessAsDepth,
            set: (zz, tz) => {
              zz.useThicknessAsDepth = tz
            }
          },
          metadata: tz
        }, Qt, kt), (0, Iz.h)(null, null, Qz, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "tintColor" in zz,
            get: zz => zz.tintColor,
            set: (zz, tz) => {
              zz.tintColor = tz
            }
          },
          metadata: tz
        }, it, Lt), (0, Iz.h)(null, null, kz, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: zz => "tintColorAtDistance" in zz,
            get: zz => zz.tintColorAtDistance,
            set: (zz, tz) => {
              zz.tintColorAtDistance = tz
            }
          },
          metadata: tz
        }, lt, nt), (0, Iz.h)(null, null, Lz, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: zz => "dispersion" in zz,
            get: zz => zz.dispersion,
            set: (zz, tz) => {
              zz.dispersion = tz
            }
          },
          metadata: tz
        }, qt, St), (0, Iz.h)(null, null, lz, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: zz => "diffusionDistance" in zz,
            get: zz => zz.diffusionDistance,
            set: (zz, tz) => {
              zz.diffusionDistance = tz
            }
          },
          metadata: tz
        }, Vt, Rt), (0, Iz.h)(null, null, Vz, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "translucencyColor" in zz,
            get: zz => zz.translucencyColor,
            set: (zz, tz) => {
              zz.translucencyColor = tz
            }
          },
          metadata: tz
        }, Fs, Ws), (0, Iz.h)(null, null, zt, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: zz => "applyAlbedoAfterSubSurface" in zz,
            get: zz => zz.applyAlbedoAfterSubSurface,
            set: (zz, tz) => {
              zz.applyAlbedoAfterSubSurface = tz
            }
          },
          metadata: tz
        }, Us, Ks), (0, Iz.h)(null, null, tt, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: zz => "legacyTranslucency" in zz,
            get: zz => zz.legacyTranslucency,
            set: (zz, tz) => {
              zz.legacyTranslucency = tz
            }
          },
          metadata: tz
        }, us, Ns), tz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tz
        })
      })(), zz.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, zz.DEFAULT_LEGACY_TRANSLUCENCY = !1, zz
    })();
    var Ut = sz(39509),
      Kt = sz(39493),
      ut = sz(39522),
      Nt = sz(39529),
      bt = sz(39531),
      wt = sz(39535),
      Dt = sz(39541),
      gt = sz(39545),
      Ht = sz(39065);
    const Bt = {
      effect: null,
      subMesh: null
    };
    class Pt extends((0, Dt.d)((0, wt.e)(kz.d))) {}
    class rt extends((0, qz.f)(Pt)) {
      constructor(zz) {
        super(zz), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class Yt extends((0, gt.c)(Vz.c)) {}
    let xt = (() => {
      var zz, tz;
      let Fz, Wz = Yt,
        Oz = [],
        oz = [];
      return zz = class extends Wz {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(zz) {
          this._realTimeFiltering = zz, this.wtz(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(zz) {
          this._realTimeFilteringQuality = zz, this.wtz(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, Iz.c)(this, tz, "f")
        }
        set debugMode(zz) {
          (0, Iz.g)(this, tz, zz, "f")
        }
        constructor(sz, Fz) {
          super(sz, Fz, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || zz.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new hz.q(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = zz.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = az.c.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new az.c(0, 0, 0), this._albedoColor = new az.c(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new az.c(1, 1, 1), this._reflectionColor = new az.c(1, 1, 1), this._emissiveColor = new az.c(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = zz.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Zz.h(16), this._globalAmbientColor = new az.c(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, tz.set(this, (0, Iz.k)(this, Oz, 0)), this.debugLimit = ((0, Iz.k)(this, oz), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new lz(this), this.clearCoat = new zt(this), this.iridescence = new st(this), this.anisotropy = new Wt(this), this.sheen = new Ot(this), this.subSurface = new vt(this), this.detailMap = new Ut.d(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Rz.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Az(this.aJ()), this.prePassConfiguration = new nz.c
        }
        get hasRenderTargetTextures() {
          return !!(Rz.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === zz.PBRMATERIAL_OPAQUE || this._transparencyMode === zz.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === zz.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== zz.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(zz, tz, sz) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Fz = tz._drawWrapper;
          if (Fz.effect && this.isFrozen && Fz._wasPreviouslyReady && Fz._wasPreviouslyUsingInstances === sz) return !0;
          tz.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), tz.materialDefines = new rt(this._eventInfo.defineNames));
          const Wz = tz.materialDefines;
          if (this._isReadyForSubMesh(tz)) return !0;
          const Xz = this.aJ(),
            Oz = Xz.FD();
          if (Wz._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Xz.texturesEnabled)) {
            if (this._albedoTexture && Rz.b.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && Rz.b.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && Rz.b.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && Rz.b.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && Rz.b.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const zz = this._getReflectionTexture();
            if (zz && Rz.b.ReflectionTextureEnabled) {
              if (!zz.isReadyOrNotBlocking()) return !1;
              if (zz.irradianceTexture) {
                if (!zz.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!zz.sphericalPolynomial && zz.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && Rz.b.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && Rz.b.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (Rz.b.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (Oz.getCaps().standardDerivatives && this._bumpTexture && Rz.b.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && Rz.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Wz, this._eventInfo.subMesh = tz, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Wz._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Wz.AREALIGHTUSED || Wz.CLUSTLIGHT_BATCH)
            for (let uz = 0; uz < zz.lightSources.length; uz++)
              if (!zz.lightSources[uz]._isReady()) return !1;
          if (Oz.getCaps().standardDerivatives || zz.isVerticesDataPresent(Qz.m.NormalKind) || (zz.createNormals(!0), ez.e.Warn("PBRMaterial: Normals have been created for the mesh: " + zz.name)), !(0, fz.d)(Xz, zz, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const oz = tz.effect,
            vz = Wz._areLightsDisposed,
            Uz = this._prepareEffect(zz, tz.getRenderingMesh(), Wz, this.onCompiled, this.onError, sz, null);
          let Kz = !1;
          if (Uz)
            if (this._onEffectCreatedObservable && (Bt.effect = Uz, Bt.subMesh = tz, this._onEffectCreatedObservable.notifyObservers(Bt)), this.allowShaderHotSwapping && oz && !Uz.isReady()) {
              if (Wz.markAsUnprocessed(), Kz = this.isFrozen, vz) return Wz._areLightsDisposed = !0, !1
            } else Xz.resetCachedMaterial(), tz.setEffect(Uz, Wz, this._materialContext);
          return !(!tz.effect || !tz.effect.isReady()) && (Wz._renderId = Xz.getRenderId(), Fz._wasPreviouslyReady = !Kz, Fz._wasPreviouslyUsingInstances = !!sz, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(tz, sz, Fz) {
          let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(tz, sz, Fz, Oz, oz), !Fz.isDirty) return null;
          Fz.markAsProcessed();
          const vz = this.aJ().FD(),
            Uz = new pz.e;
          let Kz = 0;
          Fz.USESPHERICALINVERTEX && Uz.addFallback(Kz++, "USESPHERICALINVERTEX"), Fz.FOG && Uz.addFallback(Kz, "FOG"), Fz.SPECULARAA && Uz.addFallback(Kz, "SPECULARAA"), Fz.POINTSIZE && Uz.addFallback(Kz, "POINTSIZE"), Fz.LOGARITHMICDEPTH && Uz.addFallback(Kz, "LOGARITHMICDEPTH"), Fz.PARALLAX && Uz.addFallback(Kz, "PARALLAX"), Fz.PARALLAX_RHS && Uz.addFallback(Kz, "PARALLAX_RHS"), Fz.PARALLAXOCCLUSION && Uz.addFallback(Kz++, "PARALLAXOCCLUSION"), Fz.ENVIRONMENTBRDF && Uz.addFallback(Kz++, "ENVIRONMENTBRDF"), Fz.TANGENT && Uz.addFallback(Kz++, "TANGENT"), Fz.BUMP && Uz.addFallback(Kz++, "BUMP"), Kz = (0, fz.y)(Fz, Uz, this._maxSimultaneousLights, Kz), Fz.SPECULARTERM && Uz.addFallback(Kz++, "SPECULARTERM"), Fz.USESPHERICALFROMREFLECTIONMAP && Uz.addFallback(Kz++, "USESPHERICALFROMREFLECTIONMAP"), Fz.USEIRRADIANCEMAP && Uz.addFallback(Kz++, "USEIRRADIANCEMAP"), Fz.LIGHTMAP && Uz.addFallback(Kz++, "LIGHTMAP"), Fz.NORMAL && Uz.addFallback(Kz++, "NORMAL"), Fz.AMBIENT && Uz.addFallback(Kz++, "AMBIENT"), Fz.EMISSIVE && Uz.addFallback(Kz++, "EMISSIVE"), Fz.VERTEXCOLOR && Uz.addFallback(Kz++, "VERTEXCOLOR"), Fz.MORPHTARGETS && Uz.addFallback(Kz++, "MORPHTARGETS"), Fz.MULTIVIEW && Uz.addFallback(0, "MULTIVIEW");
          const uz = [Qz.m.PositionKind];
          Fz.NORMAL && uz.push(Qz.m.NormalKind), Fz.TANGENT && uz.push(Qz.m.TangentKind);
          for (let zz = 1; zz <= 6; ++zz) Fz["UV" + zz] && uz.push(`uv${1===zz?"":zz}`);
          Fz.VERTEXCOLOR && uz.push(Qz.m.ColorKind), (0, fz.F)(uz, tz, Fz, Uz), (0, fz.J)(uz, Fz), (0, fz.N)(uz, tz, Fz), (0, fz.C)(uz, tz, Fz);
          let Nz = "pbr";
          const bz = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            wz = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, fz.pb)(bz, wz, !0);
          const Dz = ["Material", "Scene", "Mesh"],
            gz = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Fz.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = Uz, this._eventInfo.fallbackRank = Kz, this._eventInfo.defines = Fz, this._eventInfo.uniforms = bz, this._eventInfo.attributes = uz, this._eventInfo.samplers = wz, this._eventInfo.uniformBuffersNames = Dz, this._eventInfo.customCode = void 0, this._eventInfo.mesh = tz, this._eventInfo.indexParameters = gz, this._callbackPluginEventGeneric(128, this._eventInfo), bt.c.AddUniformsAndSamplers(bz, wz), nz.c.AddUniforms(bz), nz.c.AddSamplers(wz), (0, Kt.d)(bz), this._useVertexPulling) {
            const zz = sz?.geometry;
            zz && (this._vertexPullingMetadata = (0, ut.f)(zz), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((zz, tz) => {
              bz.push(`vp_${tz}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          Sz.d && (Sz.d.PrepareUniforms(bz, Fz), Sz.d.PrepareSamplers(wz, Fz)), (0, fz.sb)({
            uniformsNames: bz,
            uniformBuffersNames: Dz,
            samplers: wz,
            defines: Fz,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const Hz = {};
          this.customShaderNameResolve && (Nz = this.customShaderNameResolve(Nz, bz, Dz, wz, Fz, uz, Hz));
          const Bz = Fz.toString(),
            Pz = vz.createEffect(Nz, {
              attributes: uz,
              uniformsNames: bz,
              uniformBuffersNames: Dz,
              samplers: wz,
              defines: Bz,
              fallbacks: Uz,
              onCompiled: Wz,
              onError: Xz,
              indexParameters: gz,
              processFinalCode: Hz.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Fz.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: zz._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, vz);
          return this._eventInfo.customCode = void 0, Pz
        }
        _prepareDefines(tz, sz, Fz) {
          let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const Oz = sz.hasThinInstances,
            oz = this.aJ(),
            vz = oz.FD();
          (0, fz.X)(oz, tz, Fz, !0, this._maxSimultaneousLights, this._disableLighting), Fz._needNormals = !0, (0, fz.cb)(oz, Fz);
          const Uz = this.needAlphaBlendingForMesh(tz) && this.aJ().useOrderIndependentTransparency;
          if ((0, fz.hb)(oz, Fz, this.canRenderToMRT && !Uz), (0, fz.eb)(oz, Fz, Uz), bt.c.PrepareDefines(vz.currentRenderPassId, tz, Fz), Fz.METALLICWORKFLOW = this.isMetallicWorkflow(), Fz._areTexturesDirty) {
            Fz._needUVs = !1;
            for (let zz = 1; zz <= 6; ++zz) Fz["MAINUV" + zz] = !1;
            if (oz.texturesEnabled) {
              Fz.ALBEDODIRECTUV = 0, Fz.BASE_WEIGHTDIRECTUV = 0, Fz.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Fz.AMBIENTDIRECTUV = 0, Fz.OPACITYDIRECTUV = 0, Fz.EMISSIVEDIRECTUV = 0, Fz.REFLECTIVITYDIRECTUV = 0, Fz.MICROSURFACEMAPDIRECTUV = 0, Fz.METALLIC_REFLECTANCEDIRECTUV = 0, Fz.REFLECTANCEDIRECTUV = 0, Fz.BUMPDIRECTUV = 0, Fz.LIGHTMAPDIRECTUV = 0, vz.getCaps().textureLOD && (Fz.LODBASEDMICROSFURACE = !0), this._albedoTexture && Rz.b.DiffuseTextureEnabled ? ((0, fz.Y)(this._albedoTexture, Fz, "ALBEDO"), Fz.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Fz.ALBEDO = !1, this._baseWeightTexture && Rz.b.BaseWeightTextureEnabled ? (0, fz.Y)(this._baseWeightTexture, Fz, "BASE_WEIGHT") : Fz.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && Rz.b.BaseDiffuseRoughnessTextureEnabled ? (0, fz.Y)(this._baseDiffuseRoughnessTexture, Fz, "BASE_DIFFUSE_ROUGHNESS") : Fz.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && Rz.b.AmbientTextureEnabled ? ((0, fz.Y)(this._ambientTexture, Fz, "AMBIENT"), Fz.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Fz.AMBIENT = !1, this._opacityTexture && Rz.b.OpacityTextureEnabled ? ((0, fz.Y)(this._opacityTexture, Fz, "OPACITY"), Fz.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Fz.OPACITY = !1;
              const zz = this._getReflectionTexture(),
                tz = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || vz.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, fz.U)(oz, zz, Fz, this.realTimeFiltering, this.realTimeFilteringQuality, !tz), this._lightmapTexture && Rz.b.LightmapTextureEnabled ? ((0, fz.Y)(this._lightmapTexture, Fz, "LIGHTMAP"), Fz.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Fz.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Fz.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Fz.LIGHTMAP = !1, this._emissiveTexture && Rz.b.EmissiveTextureEnabled ? ((0, fz.Y)(this._emissiveTexture, Fz, "EMISSIVE"), Fz.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Fz.EMISSIVE = !1, Rz.b.SpecularTextureEnabled ? (this._metallicTexture ? ((0, fz.Y)(this._metallicTexture, Fz, "REFLECTIVITY"), Fz.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Fz.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Fz.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Fz.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Fz.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, fz.Y)(this._reflectivityTexture, Fz, "REFLECTIVITY"), Fz.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Fz.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Fz.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Fz.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Fz.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, fz.Y)(this._metallicReflectanceTexture, Fz, "METALLIC_REFLECTANCE"), Fz.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Fz.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, fz.Y)(this._reflectanceTexture, Fz, "REFLECTANCE"), Fz.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Fz.REFLECTANCE = !1) : (Fz.METALLIC_REFLECTANCE = !1, Fz.REFLECTANCE = !1), this._microSurfaceTexture ? (0, fz.Y)(this._microSurfaceTexture, Fz, "MICROSURFACEMAP") : Fz.MICROSURFACEMAP = !1) : (Fz.REFLECTIVITY = !1, Fz.MICROSURFACEMAP = !1), vz.getCaps().standardDerivatives && this._bumpTexture && Rz.b.BumpTextureEnabled && !this._disableBumpMap ? ((0, fz.Y)(this._bumpTexture, Fz, "BUMP"), this._useParallax && this._albedoTexture && Rz.b.DiffuseTextureEnabled ? (Fz.PARALLAX = !0, Fz.PARALLAX_RHS = oz.useRightHandedSystem, Fz.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Fz.PARALLAX = !1, Fz.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Fz.BUMP = !1, Fz.PARALLAX = !1, Fz.PARALLAX_RHS = !1, Fz.PARALLAXOCCLUSION = !1, Fz.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Rz.b.ReflectionTextureEnabled ? (Fz.ENVIRONMENTBRDF = !0, Fz.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Fz.ENVIRONMENTBRDF = !1, Fz.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Fz.ALPHAFROMALBEDO = !0 : Fz.ALPHAFROMALBEDO = !1
            }
            Fz.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === zz.LIGHTFALLOFF_STANDARD ? (Fz.USEPHYSICALLIGHTFALLOFF = !1, Fz.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === zz.LIGHTFALLOFF_GLTF ? (Fz.USEPHYSICALLIGHTFALLOFF = !1, Fz.USEGLTFLIGHTFALLOFF = !0) : (Fz.USEPHYSICALLIGHTFALLOFF = !0, Fz.USEGLTFLIGHTFALLOFF = !1), Fz.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Fz.TWOSIDEDLIGHTING = !0 : Fz.TWOSIDEDLIGHTING = !1, Fz.MIRRORED = !!oz._mirroredCameraPosition, Fz.SPECULARAA = vz.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Fz._areTexturesDirty || Fz._areMiscDirty) && (Fz.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Fz.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Fz.ALPHABLEND = this.needAlphaBlendingForMesh(tz), Fz.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Fz.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Fz._areTexturesDirty && (Fz.TEXTURE_REPETITION_MODE = vz.version > 1 || vz.isWebGPU ? this.textureRepetitionMode : 0), Fz._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Fz), Fz.FORCENORMALFORWARD = this._forceNormalForward, Fz.RADIANCEOCCLUSION = this._useRadianceOcclusion, Fz.HORIZONOCCLUSION = this._useHorizonOcclusion, Fz._areMiscDirty && ((0, fz._)(tz, oz, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(tz), Fz, this._applyDecalMapAfterDetailMap, this._useVertexPulling, sz, this._isVertexOutputInvariant), Fz.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !tz.isVerticesDataPresent(Qz.m.NormalKind), Fz.DEBUGMODE = this._debugMode), (0, fz.S)(oz, vz, this, Fz, !!Wz, Xz, Oz), this._eventInfo.defines = Fz, this._eventInfo.mesh = tz, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, fz.P)(tz, Fz, !0, !0, !0, this._transparencyMode !== zz.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(zz, tz, sz) {
          const Fz = {
            clipPlane: !1,
            useInstances: !1,
            ...sz
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const sz = new rt(this._eventInfo.defineNames),
              Wz = this._prepareEffect(zz, zz, sz, void 0, void 0, Fz.useInstances, Fz.clipPlane);
            this._onEffectCreatedObservable && (Bt.effect = Wz, Bt.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Bt)), Wz.isReady() ? tz && tz(this) : Wz.onCompileObservable.add((() => {
              tz && tz(this)
            }))
          })()
        }
        buildUniformLayout() {
          const zz = this._uniformBuffer;
          zz.addUniform("vAlbedoInfos", 2), zz.addUniform("vBaseWeightInfos", 2), zz.addUniform("vBaseDiffuseRoughnessInfos", 2), zz.addUniform("vAmbientInfos", 4), zz.addUniform("vOpacityInfos", 2), zz.addUniform("vEmissiveInfos", 2), zz.addUniform("vLightmapInfos", 2), zz.addUniform("vReflectivityInfos", 3), zz.addUniform("vMicroSurfaceSamplerInfos", 2), zz.addUniform("vBumpInfos", 3), zz.addUniform("albedoMatrix", 16), zz.addUniform("baseWeightMatrix", 16), zz.addUniform("baseDiffuseRoughnessMatrix", 16), zz.addUniform("ambientMatrix", 16), zz.addUniform("opacityMatrix", 16), zz.addUniform("emissiveMatrix", 16), zz.addUniform("lightmapMatrix", 16), zz.addUniform("reflectivityMatrix", 16), zz.addUniform("microSurfaceSamplerMatrix", 16), zz.addUniform("bumpMatrix", 16), zz.addUniform("vTangentSpaceParams", 2), zz.addUniform("vAlbedoColor", 4), zz.addUniform("baseWeight", 1), zz.addUniform("baseDiffuseRoughness", 1), zz.addUniform("vLightingIntensity", 4), zz.addUniform("pointSize", 1), zz.addUniform("vReflectivityColor", 4), zz.addUniform("vEmissiveColor", 3), zz.addUniform("vAmbientColor", 3), zz.addUniform("vDebugMode", 2), zz.addUniform("vMetallicReflectanceFactors", 4), zz.addUniform("vMetallicReflectanceInfos", 2), zz.addUniform("metallicReflectanceMatrix", 16), zz.addUniform("vReflectanceInfos", 2), zz.addUniform("reflectanceMatrix", 16), zz.addUniform("cameraInfo", 4), zz.addUniform("vTextureRepetitionHexTilingParams", 4), (0, fz.lb)(zz, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(zz, tz, sz) {
          const Fz = this.aJ(),
            Wz = sz.materialDefines;
          if (!Wz) return;
          const Xz = sz.effect;
          if (!Xz) return;
          this._activeEffect = Xz, tz.getMeshUniformBuffer().bindToEffect(Xz, "Mesh"), tz.transferToEffect(zz);
          const Oz = Fz.FD();
          this._uniformBuffer.bindToEffect(Xz, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Fz, tz, zz, this.isFrozen), bt.c.Bind(Oz.currentRenderPassId, this._activeEffect, tz, zz, this);
          const oz = Fz.activeCamera;
          oz ? this._uniformBuffer.updateFloat4("cameraInfo", oz.minZ, oz.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const vz = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", vz[0], vz[1], vz[2], vz[3]), this._eventInfo.subMesh = sz, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Wz.OBJECTSPACE_NORMALMAP && (zz.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const Uz = this._mustRebind(Fz, Xz, sz, tz.visibility),
            Kz = Oz._features.needToAlwaysBindUniformBuffers;
          (0, fz.g)(tz, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, ut.d)(this._activeEffect, this._vertexPullingMetadata);
          let uz = null;
          const Nz = this._uniformBuffer;
          if (Uz) {
            if (this.bindViewProjection(Xz), uz = this._getReflectionTexture(), !Nz.useUbo || !this.isFrozen || !Nz.isSync || sz._drawWrapper._forceRebindOnNextCall) {
              if (Fz.texturesEnabled && (this._albedoTexture && Rz.b.DiffuseTextureEnabled && (Nz.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, fz.x)(this._albedoTexture, Nz, "albedo")), this._baseWeightTexture && Rz.b.BaseWeightTextureEnabled && (Nz.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, fz.x)(this._baseWeightTexture, Nz, "baseWeight")), this._baseDiffuseRoughnessTexture && Rz.b.BaseDiffuseRoughnessTextureEnabled && (Nz.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, fz.x)(this._baseDiffuseRoughnessTexture, Nz, "baseDiffuseRoughness")), this._ambientTexture && Rz.b.AmbientTextureEnabled && (Nz.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, fz.x)(this._ambientTexture, Nz, "ambient")), this._opacityTexture && Rz.b.OpacityTextureEnabled && (Nz.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, fz.x)(this._opacityTexture, Nz, "opacity")), this._emissiveTexture && Rz.b.EmissiveTextureEnabled && (Nz.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, fz.x)(this._emissiveTexture, Nz, "emissive")), this._lightmapTexture && Rz.b.LightmapTextureEnabled && (Nz.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, fz.x)(this._lightmapTexture, Nz, "lightmap")), Rz.b.SpecularTextureEnabled && (this._metallicTexture ? (Nz.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, fz.x)(this._metallicTexture, Nz, "reflectivity")) : this._reflectivityTexture && (Nz.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, fz.x)(this._reflectivityTexture, Nz, "reflectivity")), this._metallicReflectanceTexture && (Nz.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, fz.x)(this._metallicReflectanceTexture, Nz, "metallicReflectance")), this._reflectanceTexture && Wz.REFLECTANCE && (Nz.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, fz.x)(this._reflectanceTexture, Nz, "reflectance")), this._microSurfaceTexture && (Nz.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, fz.x)(this._microSurfaceTexture, Nz, "microSurfaceSampler"))), this._bumpTexture && Oz.getCaps().standardDerivatives && Rz.b.BumpTextureEnabled && !this._disableBumpMap && (Nz.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, fz.x)(this._bumpTexture, Nz, "bump"), Fz._mirroredCameraPosition ? Nz.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Nz.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, fz.n)(Fz, Wz, Nz, this._reflectionColor, uz, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && Nz.updateFloat("pointSize", this.pointSize), Wz.METALLICWORKFLOW) {
                az.f.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, az.f.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const zz = this.subSurface?._indexOfRefraction ?? 1.5,
                  tz = 1;
                az.f.Color4[0].b = zz;
                const sz = Math.pow((zz - tz) / (zz + tz), 2);
                az.f.Color4[0].a = sz, Nz.updateDirectColor4("vReflectivityColor", az.f.Color4[0]), Nz.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else Nz.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              Nz.updateColor3("vEmissiveColor", Rz.b.EmissiveTextureEnabled ? this._emissiveColor : az.c.BlackReadOnly), !Wz.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? Nz.updateColor4("vAlbedoColor", this._albedoColor, 1) : Nz.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), Nz.updateFloat("baseWeight", this._baseWeight), Nz.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Fz.environmentIntensity, this._lightingInfos.w = this._specularIntensity, Nz.updateVector4("vLightingIntensity", this._lightingInfos), Fz.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), Nz.updateColor3("vAmbientColor", this._globalAmbientColor), Nz.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Fz.texturesEnabled && (this._albedoTexture && Rz.b.DiffuseTextureEnabled && Nz.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && Rz.b.BaseWeightTextureEnabled && Nz.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && Rz.b.BaseDiffuseRoughnessTextureEnabled && Nz.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && Rz.b.AmbientTextureEnabled && Nz.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && Rz.b.OpacityTextureEnabled && Nz.setTexture("opacitySampler", this._opacityTexture), (0, fz.q)(Fz, Wz, Nz, uz, this.realTimeFiltering), Wz.ENVIRONMENTBRDF && Nz.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && Rz.b.EmissiveTextureEnabled && Nz.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && Rz.b.LightmapTextureEnabled && Nz.setTexture("lightmapSampler", this._lightmapTexture), Rz.b.SpecularTextureEnabled && (this._metallicTexture ? Nz.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && Nz.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && Nz.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Wz.REFLECTANCE && Nz.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && Nz.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && Oz.getCaps().standardDerivatives && Rz.b.BumpTextureEnabled && !this._disableBumpMap && Nz.setTexture("bumpSampler", this._bumpTexture)), this.aJ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(tz) && this.aJ().depthPeelingRenderer.bind(Xz), this._eventInfo.subMesh = sz, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Kt.g)(this._activeEffect, this, Fz), this.bindEyePosition(Xz)
          } else Kz && (this._needToBindSceneUbo = !0);
          !Uz && this.isFrozen && !Kz || !Fz.lightsEnabled || this._disableLighting || (0, fz.s)(Fz, tz, this._activeEffect, Wz, this._maxSimultaneousLights), !Uz && this.isFrozen || ((Fz.fogEnabled && tz.applyFog && Fz.fogMode !== dz.i.FOGMODE_NONE || uz || this.subSurface.refractionTexture || tz.receiveShadows || Wz.PREPASS || Wz.CLUSTLIGHT_BATCH) && this.bindView(Xz), (0, fz.j)(Fz, tz, this._activeEffect, !0), Wz.NUM_MORPH_INFLUENCERS && (0, fz.v)(tz, this._activeEffect), Wz.BAKED_VERTEX_ANIMATION_TEXTURE && tz.bakedVertexAnimationManager?.bind(Xz, Wz.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, fz.t)(Wz, this._activeEffect, Fz)), this._afterBind(tz, this._activeEffect, sz), Nz.update()
        }
        getAnimatables() {
          const zz = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && zz.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && zz.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && zz.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && zz.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && zz.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && zz.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && zz.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? zz.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && zz.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && zz.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && zz.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && zz.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && zz.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && zz.push(this._microSurfaceTexture), zz
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.aJ().environmentTexture
        }
        getActiveTextures() {
          const zz = super.getActiveTextures();
          return this._albedoTexture && zz.push(this._albedoTexture), this._baseWeightTexture && zz.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && zz.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && zz.push(this._ambientTexture), this._opacityTexture && zz.push(this._opacityTexture), this._reflectionTexture && zz.push(this._reflectionTexture), this._emissiveTexture && zz.push(this._emissiveTexture), this._reflectivityTexture && zz.push(this._reflectivityTexture), this._metallicTexture && zz.push(this._metallicTexture), this._metallicReflectanceTexture && zz.push(this._metallicReflectanceTexture), this._reflectanceTexture && zz.push(this._reflectanceTexture), this._microSurfaceTexture && zz.push(this._microSurfaceTexture), this._bumpTexture && zz.push(this._bumpTexture), this._lightmapTexture && zz.push(this._lightmapTexture), zz
        }
        hasTexture(zz) {
          return !!super.hasTexture(zz) || (this._albedoTexture === zz || (this._baseWeightTexture === zz || (this._baseDiffuseRoughnessTexture === zz || (this._ambientTexture === zz || (this._opacityTexture === zz || (this._reflectionTexture === zz || (this._emissiveTexture === zz || (this._reflectivityTexture === zz || (this._metallicTexture === zz || (this._metallicReflectanceTexture === zz || (this._reflectanceTexture === zz || (this._microSurfaceTexture === zz || (this._bumpTexture === zz || this._lightmapTexture === zz)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const zz = this.aJ().enableSubSurfaceForPrePass();
          return zz && (zz.enabled = !0), !0
        }
        dispose(zz, tz) {
          this._breakShaderLoadedCheck = !0, tz && (this._environmentBRDFTexture && this.aJ().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(zz, tz)
        }
      }, tz = new WeakMap, (() => {
        const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Wz[Symbol.metadata] ?? null) : void 0;
        Fz = [(0, Cz.i)("_markAllSubMeshesAsMiscDirty")], (0, Iz.h)(zz, null, Fz, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "debugMode" in zz,
            get: zz => zz.debugMode,
            set: (zz, tz) => {
              zz.debugMode = tz
            }
          },
          metadata: tz
        }, Oz, oz), tz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tz
        })
      })(), zz.PBRMATERIAL_OPAQUE = Xz.b.MATERIAL_OPAQUE, zz.PBRMATERIAL_ALPHATEST = Xz.b.MATERIAL_ALPHATEST, zz.PBRMATERIAL_ALPHABLEND = Xz.b.MATERIAL_ALPHABLEND, zz.PBRMATERIAL_ALPHATESTANDBLEND = Xz.b.MATERIAL_ALPHATESTANDBLEND, zz.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, zz.LIGHTFALLOFF_PHYSICAL = 0, zz.LIGHTFALLOFF_GLTF = 1, zz.LIGHTFALLOFF_STANDARD = 2, zz.ForceGLSL = !1, zz._ShaderLoader = new Nt.c((() => [Promise.all([sz.e(307), sz.e(318)]).then((() => sz(60677))), Promise.all([sz.e(312), sz.e(308), sz.e(372), sz.e(321), sz.e(371)]).then((() => sz(60693)))]), (() => [Promise.all([sz.e(326), sz.e(328), sz.e(335)]).then((() => sz(60769))), Promise.all([sz.e(326), sz.e(329), sz.e(375), sz.e(339), sz.e(374)]).then((() => sz(60787)))])), zz
    })();
    Object.getOwnPropertyDescriptor(xt.prototype, "decalMap") || Object.defineProperty(xt.prototype, "decalMap", (0, Ht.f)("PBRBaseMaterial", "decalMap")), (0, sz(40950).d)();
    var mt = sz(39181);
    var Jt = sz(39264),
      It = sz(40936),
      Ct = sz(39021),
      et = sz(39031),
      Zt = sz(39117);
    let Gt = !1;
    const Tt = new az.d,
      ct = new az.d;
    class jt extends It.d {
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
      set wrapU(zz) {
        if (this._textures)
          for (let tz = 0; tz < this._textures.length; tz++) this._textures[tz].wrapU = zz
      }
      set wrapV(zz) {
        if (this._textures)
          for (let tz = 0; tz < this._textures.length; tz++) this._textures[tz].wrapV = zz
      }
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = !(!Wz || !Wz.generateMipMaps) && Wz.generateMipMaps,
          oz = !(!Wz || !Wz.generateDepthTexture) && Wz.generateDepthTexture,
          vz = Wz && Wz.depthTextureFormat ? Wz.depthTextureFormat : 15,
          Uz = !Wz || void 0 === Wz.doNotChangeAspectRatio || Wz.doNotChangeAspectRatio,
          Kz = !(!Wz || !Wz.drawOnlyOnFirstAttachmentByDefault) && Wz.drawOnlyOnFirstAttachmentByDefault;
        if (super(zz, tz, Fz, Oz, Uz, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Gt || (Gt = !0, et.ThinEngine.prototype.restoreSingleAttachment = function() {
            const zz = this._gl;
            this.bindAttachments([zz.BACK])
          }, et.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const zz = this._gl;
            this.bindAttachments([zz.COLOR_ATTACHMENT0])
          }, et.ThinEngine.prototype.buildTextureLayout = function(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const sz = this._gl,
              Fz = [];
            if (tz) Fz.push(sz.BACK);
            else
              for (let Wz = 0; Wz < zz.length; Wz++) zz[Wz] ? Fz.push(sz["COLOR_ATTACHMENT" + Wz]) : Fz.push(sz.NONE);
            return Fz
          }, et.ThinEngine.prototype.bindAttachments = function(zz) {
            const tz = this._gl,
              sz = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, sz)
              for (let Fz = 0; Fz < zz.length; Fz++) zz[Fz] !== tz.NONE && sz[Fz] && (0, Zt.h)(sz[Fz].format) && (this._integerMRTAttachmentsMask |= 1 << Fz);
            tz.drawBuffers(zz)
          }, et.ThinEngine.prototype.clearAttachments = function(zz, tz, sz, Fz) {
            let Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const Oz = this._currentRenderTarget?.textures;
            let oz = !1;
            if (sz && zz && Oz)
              for (let vz = 0; vz < tz.length; vz++) {
                const zz = Oz[vz];
                if (tz[vz] !== this._gl.NONE && zz && (0, Zt.h)(zz.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  oz = !0;
                  break
                }
              }
            if (!oz || !zz || !Oz) return this.bindAttachments(tz), void this.clear(zz, sz, Fz, Wz, Xz);
            this.bindAttachments(tz), this._applyColorWriteState();
            for (let vz = 0; vz < tz.length; vz++) {
              const sz = Oz[vz];
              if (tz[vz] !== this._gl.NONE && sz) {
                let tz = zz;
                if ((0, Zt.h)(sz.format)) {
                  const Fz = (0, Zt.k)(sz.type);
                  tz = Fz ? Tt : ct;
                  const Wz = Fz ? 255 : 1;
                  tz.r = Math.round(zz.r * Wz), tz.g = Math.round(zz.g * Wz), tz.b = Math.round(zz.b * Wz), tz.a = Math.round(zz.a * Wz)
                }
                this._clearColorAttachment(vz, tz, sz.format, sz.type)
              }
            }
            if (Fz || Wz) {
              const zz = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Fz, Wz, Xz)
              } finally {
                this._integerMRTAttachmentsMask = zz
              }
            }
          }, et.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              sz = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, zz.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(zz), tz || this.generateMipMapsMultiFramebuffer(zz), sz && (zz._MSAAFramebuffer && this._bindUnboundFramebuffer(zz._framebuffer), sz()), this._bindUnboundFramebuffer(null)
          }, et.ThinEngine.prototype.createMultipleRenderTarget = function(zz, tz) {
            let sz, Fz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Wz = !1,
              Xz = !0,
              Oz = !1,
              oz = !1,
              vz = 1,
              Uz = 1,
              Kz = [],
              uz = [],
              Nz = [],
              bz = [],
              wz = [],
              Dz = [],
              gz = [],
              Hz = [],
              Bz = [],
              Pz = !1;
            const rz = this._createHardwareRenderTargetWrapper(!0, !1, zz);
            void 0 !== tz && (Wz = void 0 !== tz.generateMipMaps && tz.generateMipMaps, Xz = void 0 === tz.generateDepthBuffer || tz.generateDepthBuffer, Oz = void 0 !== tz.generateStencilBuffer && tz.generateStencilBuffer, oz = void 0 !== tz.generateDepthTexture && tz.generateDepthTexture, vz = tz.NOz ?? 1, Uz = tz.samples ?? Uz, Kz = tz.types || Kz, uz = tz.samplingModes || uz, Nz = tz.useSRGBBuffers || Nz, bz = tz.formats || bz, wz = tz.targetTypes || wz, Dz = tz.faceIndex || Dz, gz = tz.layerIndex || gz, Hz = tz.layerCounts || Hz, Bz = tz.labels || Bz, Pz = tz.dontCreateTextures ?? !1, this.jD > 1 && (13 === tz.depthTextureFormat || 17 === tz.depthTextureFormat || 16 === tz.depthTextureFormat || 14 === tz.depthTextureFormat || 18 === tz.depthTextureFormat) && (sz = tz.depthTextureFormat)), void 0 === sz && (sz = Oz ? 13 : 14);
            const Yz = this._gl,
              xz = this._currentFramebuffer,
              mz = Yz.createFramebuffer();
            this._bindUnboundFramebuffer(mz);
            const Jz = zz.width ?? zz,
              Iz = zz.height ?? zz,
              Cz = [],
              Zz = [],
              Gz = this.jD > 1 && (13 === sz || 17 === sz || 18 === sz);
            rz.label = tz?.label ?? "MultiRenderTargetWrapper", rz._framebuffer = mz, rz._generateDepthBuffer = oz || Xz, rz._generateStencilBuffer = oz ? Gz : Oz, rz._depthStencilBuffer = this._setupFramebufferDepthAttachments(rz._generateStencilBuffer, rz._generateDepthBuffer, Jz, Iz, 1, sz), rz._attachments = Zz;
            for (let Tz = 0; Tz < vz; Tz++) {
              let zz = uz[Tz] || 3,
                tz = Kz[Tz] || 0,
                sz = Nz[Tz] || !1;
              const Fz = bz[Tz] || 5,
                Xz = wz[Tz] || 3553,
                Oz = Hz[Tz] ?? 1;
              (1 !== tz || this._caps.textureFloatLinearFiltering) && (2 !== tz || this._caps.textureHalfFloatLinearFiltering) || (zz = 1);
              const oz = this._getSamplingParameters(zz, Wz);
              1 !== tz || this._caps.textureFloat || (tz = 0, ez.e.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), sz = sz && this._caps.supportSRGBBuffers && (this.jD > 1 || this.isWebGPU);
              const vz = this.jD > 1,
                Uz = Yz[vz ? "COLOR_ATTACHMENT" + Tz : "COLOR_ATTACHMENT" + Tz + "_WEBGL"];
              if (Zz.push(Uz), -1 === Xz || Pz) continue;
              const Dz = new Ct.d(this, 6);
              Cz[Tz] = Dz, Yz.activeTexture(Yz["TEXTURE" + Tz]), Yz.bindTexture(Xz, Dz._hardwareTexture.underlyingResource), Yz.texParameteri(Xz, Yz.TEXTURE_MAG_FILTER, oz.mag), Yz.texParameteri(Xz, Yz.TEXTURE_MIN_FILTER, oz.min), Yz.texParameteri(Xz, Yz.TEXTURE_WRAP_S, Yz.CLAMP_TO_EDGE), Yz.texParameteri(Xz, Yz.TEXTURE_WRAP_T, Yz.CLAMP_TO_EDGE);
              const gz = this._getRGBABufferInternalSizedFormat(tz, Fz, sz),
                xz = this._getInternalFormat(Fz),
                mz = this._getWebGLTextureType(tz);
              if (!vz || 35866 !== Xz && 32879 !== Xz)
                if (34067 === Xz) {
                  for (let zz = 0; zz < 6; zz++) Yz.texImage2D(Yz.TEXTURE_CUBE_MAP_POSITIVE_X + zz, 0, gz, Jz, Iz, 0, xz, mz, null);
                  Dz.isCube = !0
                } else Yz.texImage2D(Yz.TEXTURE_2D, 0, gz, Jz, Iz, 0, xz, mz, null);
              else 35866 === Xz ? Dz.is2DArray = !0 : Dz.is3D = !0, Dz.baseDepth = Dz.depth = Oz, Yz.texImage3D(Xz, 0, gz, Jz, Iz, Oz, 0, xz, mz, null);
              Wz && Yz.generateMipmap(Xz), this._bindTextureDirectly(Xz, null), Dz.baseWidth = Jz, Dz.baseHeight = Iz, Dz.width = Jz, Dz.height = Iz, Dz.isReady = !0, Dz.samples = 1, Dz.generateMipMaps = Wz, Dz.samplingMode = zz, Dz.type = tz, Dz._useSRGBBuffer = sz, Dz.format = Fz, Dz.label = Bz[Tz] ?? rz.label + "-Texture" + Tz, this._internalTexturesCache.push(Dz)
            }
            if (oz && this._caps.depthTextureExtension && !Pz) {
              const zz = new Ct.d(this, 14);
              let tz = 5,
                Fz = Yz.DEPTH_COMPONENT16,
                Xz = Yz.DEPTH_COMPONENT,
                Oz = Yz.UNSIGNED_SHORT,
                oz = Yz.DEPTH_ATTACHMENT;
              this.jD < 2 ? Fz = Yz.DEPTH_COMPONENT : 14 === sz ? (tz = 1, Oz = Yz.FLOAT, Fz = Yz.DEPTH_COMPONENT32F) : 18 === sz ? (tz = 0, Oz = Yz.FLOAT_32_UNSIGNED_INT_24_8_REV, Fz = Yz.DEPTH32F_STENCIL8, Xz = Yz.DEPTH_STENCIL, oz = Yz.DEPTH_STENCIL_ATTACHMENT) : 16 === sz ? (tz = 0, Oz = Yz.UNSIGNED_INT, Fz = Yz.DEPTH_COMPONENT24, oz = Yz.DEPTH_ATTACHMENT) : 13 !== sz && 17 !== sz || (tz = 12, Oz = Yz.UNSIGNED_INT_24_8, Fz = Yz.DEPTH24_STENCIL8, Xz = Yz.DEPTH_STENCIL, oz = Yz.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(Yz.TEXTURE_2D, zz, !0), Yz.texParameteri(Yz.TEXTURE_2D, Yz.TEXTURE_MAG_FILTER, Yz.NEAREST), Yz.texParameteri(Yz.TEXTURE_2D, Yz.TEXTURE_MIN_FILTER, Yz.NEAREST), Yz.texParameteri(Yz.TEXTURE_2D, Yz.TEXTURE_WRAP_S, Yz.CLAMP_TO_EDGE), Yz.texParameteri(Yz.TEXTURE_2D, Yz.TEXTURE_WRAP_T, Yz.CLAMP_TO_EDGE), Yz.texImage2D(Yz.TEXTURE_2D, 0, Fz, Jz, Iz, 0, Xz, Oz, null), Yz.framebufferTexture2D(Yz.FRAMEBUFFER, oz, Yz.TEXTURE_2D, zz._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(Yz.TEXTURE_2D, null), rz._depthStencilTexture = zz, rz._depthStencilTextureWithStencil = Gz, zz.baseWidth = Jz, zz.baseHeight = Iz, zz.width = Jz, zz.height = Iz, zz.isReady = !0, zz.samples = 1, zz.generateMipMaps = Wz, zz.samplingMode = 1, zz.format = sz, zz.type = tz, zz.label = rz.label + "-DepthStencil", Cz[vz] = zz, this._internalTexturesCache.push(zz)
            }
            if (rz.setTextures(Cz), Fz && Yz.drawBuffers(Zz), this._bindUnboundFramebuffer(xz), rz.setLayerAndFaceIndices(gz, Dz), this.resetTextureCache(), Pz) {
              if (Uz > 1) {
                const zz = Yz.createFramebuffer();
                if (!zz) throw new Error("Unable to create multi sampled framebuffer");
                rz._samples = Uz, rz._MSAAFramebuffer = zz, vz > 0 && Fz && (this._bindUnboundFramebuffer(zz), Yz.drawBuffers(Zz), this._bindUnboundFramebuffer(xz))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(rz, Uz, Fz);
            return rz
          }, et.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(zz, tz) {
            let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.jD < 2 || !zz) return 1;
            if (zz.samples === tz) return tz;
            const Fz = this._gl;
            tz = Math.min(tz, this.getCaps().maxMSAASamples), zz._depthStencilBuffer && (Fz.deleteRenderbuffer(zz._depthStencilBuffer), zz._depthStencilBuffer = null), zz._MSAAFramebuffer && (Fz.deleteFramebuffer(zz._MSAAFramebuffer), zz._MSAAFramebuffer = null);
            const Wz = zz._attachments.length;
            for (let Oz = 0; Oz < Wz; Oz++) {
              const tz = zz.textures[Oz]._hardwareTexture;
              tz?.releaseMSAARenderBuffers()
            }
            if (tz > 1 && "function" === typeof Fz.renderbufferStorageMultisample) {
              const Xz = Fz.createFramebuffer();
              if (!Xz) throw new Error("Unable to create multi sampled framebuffer");
              zz._MSAAFramebuffer = Xz, this._bindUnboundFramebuffer(Xz);
              const Oz = [];
              for (let sz = 0; sz < Wz; sz++) {
                const Wz = zz.textures[sz],
                  Xz = Wz._hardwareTexture,
                  oz = Fz[this.jD > 1 ? "COLOR_ATTACHMENT" + sz : "COLOR_ATTACHMENT" + sz + "_WEBGL"],
                  vz = this._createRenderBuffer(Wz.width, Wz.height, tz, -1, this._getRGBABufferInternalSizedFormat(Wz.type, Wz.format, Wz._useSRGBBuffer), oz);
                if (!vz) throw new Error("Unable to create multi sampled framebuffer");
                Xz.addMSAARenderBuffer(vz), Wz.samples = tz, Oz.push(oz)
              }
              sz && Fz.drawBuffers(Oz)
            } else this._bindUnboundFramebuffer(zz._framebuffer);
            const Xz = zz._depthStencilTexture ? zz._depthStencilTexture.format : void 0;
            return zz._depthStencilBuffer = this._setupFramebufferDepthAttachments(zz._generateStencilBuffer, zz._generateDepthBuffer, zz.width, zz.height, tz, Xz), this._bindUnboundFramebuffer(null), zz._samples = tz, tz
          }, et.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(zz) {
            const tz = zz,
              sz = this._gl;
            if (tz.isMulti)
              for (let Fz = 0; Fz < tz._attachments.length; Fz++) {
                const zz = tz.textures[Fz];
                !zz?.generateMipMaps || zz?.isCube || zz?.is3D || (this._bindTextureDirectly(sz.TEXTURE_2D, zz, !0), sz.generateMipmap(sz.TEXTURE_2D), this._bindTextureDirectly(sz.TEXTURE_2D, null))
              }
          }, et.ThinEngine.prototype.resolveMultiFramebuffer = function(zz) {
            const tz = zz,
              sz = this._gl;
            if (!tz._MSAAFramebuffer || !tz.isMulti) return;
            let Fz = tz.resolveMSAAColors ? sz.COLOR_BUFFER_BIT : 0;
            Fz |= tz._generateDepthBuffer && tz.resolveMSAADepth ? sz.DEPTH_BUFFER_BIT : 0, Fz |= tz._generateStencilBuffer && tz.resolveMSAAStencil ? sz.STENCIL_BUFFER_BIT : 0;
            const Wz = tz._attachments,
              Xz = Wz.length;
            sz.bindFramebuffer(sz.READ_FRAMEBUFFER, tz._MSAAFramebuffer), sz.bindFramebuffer(sz.DRAW_FRAMEBUFFER, tz._framebuffer);
            for (let Oz = 0; Oz < Xz; Oz++) {
              const zz = tz.textures[Oz];
              for (let tz = 0; tz < Xz; tz++) Wz[tz] = sz.NONE;
              Wz[Oz] = sz[this.jD > 1 ? "COLOR_ATTACHMENT" + Oz : "COLOR_ATTACHMENT" + Oz + "_WEBGL"], sz.readBuffer(Wz[Oz]), sz.drawBuffers(Wz), sz.blitFramebuffer(0, 0, zz.width, zz.height, 0, 0, zz.width, zz.height, Fz, sz.NEAREST)
            }
            for (let Oz = 0; Oz < Xz; Oz++) Wz[Oz] = sz[this.jD > 1 ? "COLOR_ATTACHMENT" + Oz : "COLOR_ATTACHMENT" + Oz + "_WEBGL"];
            sz.drawBuffers(Wz), sz.bindFramebuffer(this._gl.FRAMEBUFFER, tz._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = Xz;
        const uz = [],
          Nz = [],
          bz = [],
          wz = [],
          Dz = [],
          gz = [],
          Hz = [],
          Bz = [];
        this._initTypes(sz, uz, Nz, bz, wz, Dz, gz, Hz, Bz, Wz);
        const Pz = !Wz || void 0 === Wz.generateDepthBuffer || Wz.generateDepthBuffer,
          rz = !(!Wz || void 0 === Wz.generateStencilBuffer) && Wz.generateStencilBuffer,
          Yz = Wz && Wz.samples ? Wz.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: Nz,
          generateMipMaps: Oz,
          generateDepthBuffer: Pz,
          generateStencilBuffer: rz,
          generateDepthTexture: oz,
          depthTextureFormat: vz,
          types: uz,
          NOz: sz,
          useSRGBBuffers: bz,
          samples: Yz,
          formats: wz,
          targetTypes: Dz,
          faceIndex: gz,
          layerIndex: Hz,
          layerCounts: Bz,
          labels: Xz,
          label: zz
        }, this._count = sz, this._drawOnlyOnFirstAttachmentByDefault = Kz, sz > 0 && (this._createInternalTextures(), this._createTextures(Xz))
      }
      _initTypes(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
        for (let Kz = 0; Kz < zz; Kz++) Uz && Uz.types && void 0 !== Uz.types[Kz] ? tz.push(Uz.types[Kz]) : tz.push(Uz && Uz.defaultType ? Uz.defaultType : 0), Uz && Uz.samplingModes && void 0 !== Uz.samplingModes[Kz] ? sz.push(Uz.samplingModes[Kz]) : sz.push(Gz.g.BILINEAR_SAMPLINGMODE), Uz && Uz.useSRGBBuffers && void 0 !== Uz.useSRGBBuffers[Kz] ? Fz.push(Uz.useSRGBBuffers[Kz]) : Fz.push(!1), Uz && Uz.formats && void 0 !== Uz.formats[Kz] ? Wz.push(Uz.formats[Kz]) : Wz.push(5), Uz && Uz.targetTypes && void 0 !== Uz.targetTypes[Kz] ? Xz.push(Uz.targetTypes[Kz]) : Xz.push(3553), Uz && Uz.faceIndex && void 0 !== Uz.faceIndex[Kz] ? Oz.push(Uz.faceIndex[Kz]) : Oz.push(0), Uz && Uz.layerIndex && void 0 !== Uz.layerIndex[Kz] ? oz.push(Uz.layerIndex[Kz]) : oz.push(0), Uz && Uz.layerCounts && void 0 !== Uz.layerCounts[Kz] ? vz.push(Uz.layerCounts[Kz]) : vz.push(1)
      }
      _createInternaTextureIndexMapping() {
        const zz = {},
          tz = [];
        if (!this._renderTarget) return tz;
        const sz = this._renderTarget.textures;
        for (let Fz = 0; Fz < sz.length; Fz++) {
          const Wz = sz[Fz];
          if (!Wz) continue;
          const Xz = zz[Wz.uniqueId];
          void 0 !== Xz ? tz[Fz] = Xz : zz[Wz.uniqueId] = Fz
        }
        return tz
      }
      _rebuild() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || zz) return;
        const Fz = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), tz && (this._releaseTextures(), this._createTextures(sz));
        const Wz = this._renderTarget.textures;
        for (let Xz = 0; Xz < Wz.length; Xz++) {
          const zz = this._textures[Xz];
          void 0 !== Fz[Xz] && this._renderTarget.setTexture(Wz[Fz[Xz]], Xz), zz._texture = Wz[Xz], zz._texture && (zz._noMipmap = !zz._texture.useMipMaps, zz._useSRGBBuffer = zz._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let zz = 0; zz < this._textures.length; zz++) this._textures[zz]._texture = null, this._textures[zz].dispose()
      }
      _createTextures(zz) {
        const tz = this._renderTarget.textures;
        this._textures = [];
        for (let sz = 0; sz < tz.length; sz++) {
          const Fz = new Gz.g(null, this.aJ());
          zz?.[sz] && (Fz.name = zz[sz]), Fz._texture = tz[sz], Fz._texture && (Fz._noMipmap = !Fz._texture.useMipMaps, Fz._useSRGBBuffer = Fz._texture._useSRGBBuffer), this._textures.push(Fz)
        }
      }
      setInternalTexture(zz, tz) {
        let sz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === tz && (this._texture = zz), this.renderTarget.setTexture(zz, tz, sz), this.textures[tz] || (this.textures[tz] = new Gz.g(null, this.aJ()), this.textures[tz].name = this._textureNames?.[tz] ?? this.textures[tz].name), this.textures[tz]._texture = zz, this.textures[tz]._noMipmap = !zz.useMipMaps, this.textures[tz]._useSRGBBuffer = zz._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[tz] = zz.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[tz] = zz.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[tz] = zz._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[tz])) {
          let sz;
          sz = zz.is2DArray ? 35866 : zz.isCube ? 34067 : zz.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[tz] = sz
        }
      }
      setLayerAndFaceIndex(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[zz] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[zz] = tz), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[zz] = sz), this.renderTarget.setLayerAndFaceIndex(zz, tz, sz))
      }
      setLayerAndFaceIndices(zz, tz) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = zz, this._multiRenderTargetOptions.faceIndex = tz, this.renderTarget.setLayerAndFaceIndices(zz, tz))
      }
      get samples() {
        return this._samples
      }
      set samples(zz) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(zz) : this._samples = zz
      }
      resize(zz) {
        this._processSizeParameter(zz), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(zz, tz, sz) {
        this._multiRenderTargetOptions.NOz = zz, this._count = zz;
        const Fz = [],
          Wz = [],
          Xz = [],
          Oz = [],
          oz = [],
          vz = [],
          Uz = [],
          Kz = [];
        this._textureNames = sz, this._initTypes(zz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, tz), this._multiRenderTargetOptions.types = Fz, this._multiRenderTargetOptions.samplingModes = Wz, this._multiRenderTargetOptions.useSRGBBuffers = Xz, this._multiRenderTargetOptions.formats = Oz, this._multiRenderTargetOptions.targetTypes = oz, this._multiRenderTargetOptions.faceIndex = vz, this._multiRenderTargetOptions.layerIndex = Uz, this._multiRenderTargetOptions.layerCounts = Kz, this._multiRenderTargetOptions.labels = sz, this._rebuild(!1, !0, sz)
      }
      _unbindFrameBuffer(zz, tz) {
        this._renderTarget && zz.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(tz)
        }))
      }
      dispose() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), zz ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const zz = this._renderTarget?.textures;
        if (zz) {
          for (let tz = zz.length - 1; tz >= 0; tz--) this._textures[tz]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var At = sz(39319);
    class yt {
      constructor(zz) {
        this.name = At.e.NAME_GEOMETRYBUFFERRENDERER, this.Kg = zz
      }
      register() {
        this.Kg._gatherRenderTargetsStage.registerStep(At.e.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(zz) {
        this.Kg._geometryBufferRenderer && zz.push(this.Kg._geometryBufferRenderer.getGBuffer())
      }
    }
    let Mt = !1;
    var dt;
    ! function(zz) {
      zz[zz.Small = 0] = "Small", zz[zz.Medium = 1] = "Medium", zz[zz.Large = 2] = "Large", zz[zz.ExtraLarge = 3] = "ExtraLarge"
    }(dt || (dt = {}));
    const ht = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      Qt = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class kt {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(zz) {
        if (zz && this._enableMeshBlendTag && !this._scene.FD().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = zz
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(zz) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = zz, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(zz, tz) {
        zz === kt.POSITION_TEXTURE_TYPE ? (this._positionIndex = tz, this._enablePosition = !0) : zz === kt.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = tz, this._enableVelocity = !0) : zz === kt.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = tz, this._enableVelocityLinear = !0) : zz === kt.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = tz, this._enableReflectivity = !0) : zz === kt.DEPTH_TEXTURE_TYPE ? (this._depthIndex = tz, this._enableDepth = !0) : zz === kt.NORMAL_TEXTURE_TYPE ? (this._normalIndex = tz, this._enableNormal = !0) : zz === kt.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = tz, this._enableScreenspaceDepth = !0) : zz === kt.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = tz, this._enableIrradiance = !0) : zz === kt.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = tz, this._enableObjectId = !0) : zz === kt.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = tz, this._enableMeshBlendTag = !0)
      }
      _setAttachments(zz) {
        this._attachmentsFromPrePass = zz
      }
      _linkInternalTexture(zz) {
        this._multiRenderTarget.setInternalTexture(zz, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(zz) {
        this._multiRenderTarget.renderList = zz
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(zz) {
        switch (zz) {
          case kt.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case kt.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case kt.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case kt.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case kt.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case kt.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case kt.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case kt.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case kt.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case kt.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(zz) {
        this._enableDepth = zz, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(zz) {
        this._enableNormal = zz, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(zz) {
        this._enablePosition = zz, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(zz) {
        this._enableVelocity = zz, zz || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = zz
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(zz) {
        this._enableVelocityLinear = zz, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(zz) {
        this._enableReflectivity = zz, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(zz) {
        this._enableScreenspaceDepth = zz, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(zz) {
        this._enableIrradiance = zz, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(zz) {
        if (zz && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (zz && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (zz && !this._enableObjectId && !this._linkedWithPrePass) {
          const zz = this._scene.FD(),
            tz = Math.min(zz.getCaps().maxDrawBuffers ?? 1, 8),
            sz = this._assignRenderTargetIndices()[0] + 1;
          if (zz.getCaps().drawBuffersExtension && sz > tz) throw new Error(`GeometryBufferRenderer: ${sz} color attachments were requested, but this engine supports at most ${tz}`)
        }
        this._enableObjectId = zz, zz || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(zz) {
        if (this._enableMeshBlendTag !== zz) {
          if (zz) {
            const zz = this._scene.FD();
            if (! function(zz) {
                return "NATIVE" !== zz.shaderPlatformName && (zz.isWebGPU || 2 === zz.jD)
              }(zz)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !zz.isWebGPU && !zz.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const tz = Math.min(zz.getCaps().maxDrawBuffers ?? 1, 8),
                sz = this._assignRenderTargetIndices()[0] + 1;
              if (zz.getCaps().drawBuffersExtension && sz > tz) throw new Error(`GeometryBufferRenderer: ${sz} color attachments were requested, but this engine supports at most ${tz}`)
            }
          }
          this._enableMeshBlendTag = zz, zz || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get Kg() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        var Wz;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new az.d(0, 0, 0, 0), this._clearDepthColor = new az.d(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = zz, this._ratioOrDimensions = tz, this._useUbo = zz.FD().supportsUniformBuffers, this._depthFormat = sz, this._textureTypesAndFormats = Fz || {}, this._initShaderSourceAsync(), Wz = kt, Mt || (Mt = !0, Object.defineProperty(dz.i.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(zz) {
            zz && zz.isSupported && (this._geometryBufferRenderer = zz)
          },
          enumerable: !0,
          configurable: !0
        }), dz.i.prototype.enableGeometryBufferRenderer = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            sz = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Wz(this, zz, tz, sz), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, dz.i.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Wz._SceneComponentInitialization = zz => {
          let tz = zz._getComponent(At.e.NAME_GEOMETRYBUFFERRENDERER);
          tz || (tz = new yt(zz), zz.Jsz(tz))
        }), kt._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.FD().isWebGPU && !kt.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([sz.e(327).then((() => sz(60981))), Promise.all([sz.e(326), sz.e(338)]).then((() => sz(60985)))])) : await Promise.all([sz.e(310).then((() => sz(60988))), sz.e(309).then((() => sz(60995)))]), this._shadersLoaded = !0
      }
      isReady(zz, tz) {
        if (!this._shadersLoaded) return !1;
        const sz = zz.vD();
        if (sz && sz.disableDepthWrite) return !1;
        if (function(zz) {
            return zz._isGaussianSplatting || "GaussianSplattingMesh" === (tz = zz.getClassName()) || "GaussianSplattingStream" === tz;
            var tz
          }(zz.getMesh())) return !1;
        const Fz = [],
          Wz = [Qz.m.PositionKind],
          Xz = zz.getMesh();
        Xz.isVerticesDataPresent(Qz.m.NormalKind) && (Fz.push("#define HAS_NORMAL_ATTRIBUTE"), Wz.push(Qz.m.NormalKind));
        let Oz = !1,
          oz = !1;
        if (sz) {
          let zz = !1;
          if (sz.needAlphaTestingForMesh(Xz) && sz.getAlphaTestTexture() && (Fz.push("#define ALPHATEST"), Fz.push(`#define ALPHATEST_UV${sz.getAlphaTestTexture().coordinatesIndex+1}`), zz = !0), (sz.bumpTexture || sz.normalTexture || sz.geometryNormalTexture) && Rz.b.BumpTextureEnabled) {
            const tz = sz.bumpTexture || sz.normalTexture || sz.geometryNormalTexture;
            Fz.push("#define BUMP"), Fz.push(`#define BUMP_UV${tz.coordinatesIndex+1}`), zz = !0
          }
          if (this._enableReflectivity) {
            let tz = !1;
            if ("PBRMetallicRoughnessMaterial" === sz.getClassName()) sz.metallicRoughnessTexture && (Fz.push("#define ORMTEXTURE"), Fz.push(`#define REFLECTIVITY_UV${sz.metallicRoughnessTexture.coordinatesIndex+1}`), Fz.push("#define METALLICWORKFLOW"), zz = !0, tz = !0), null != sz.metallic && (Fz.push("#define METALLIC"), Fz.push("#define METALLICWORKFLOW"), tz = !0), null != sz.roughness && (Fz.push("#define ROUGHNESS"), Fz.push("#define METALLICWORKFLOW"), tz = !0), tz && (sz.baseTexture && (Fz.push("#define ALBEDOTEXTURE"), Fz.push(`#define ALBEDO_UV${sz.baseTexture.coordinatesIndex+1}`), sz.baseTexture.gammaSpace && Fz.push("#define GAMMAALBEDO"), zz = !0), sz.baseColor && Fz.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === sz.getClassName()) sz.specularGlossinessTexture ? (Fz.push("#define SPECULARGLOSSINESSTEXTURE"), Fz.push(`#define REFLECTIVITY_UV${sz.specularGlossinessTexture.coordinatesIndex+1}`), zz = !0, sz.specularGlossinessTexture.gammaSpace && Fz.push("#define GAMMAREFLECTIVITYTEXTURE")) : sz.specularColor && Fz.push("#define REFLECTIVITYCOLOR"), null != sz.glossiness && Fz.push("#define GLOSSINESS");
            else if ("PBRMaterial" === sz.getClassName()) sz.metallicTexture && (Fz.push("#define ORMTEXTURE"), Fz.push(`#define REFLECTIVITY_UV${sz.metallicTexture.coordinatesIndex+1}`), Fz.push("#define METALLICWORKFLOW"), zz = !0, tz = !0), null != sz.metallic && (Fz.push("#define METALLIC"), Fz.push("#define METALLICWORKFLOW"), tz = !0), null != sz.roughness && (Fz.push("#define ROUGHNESS"), Fz.push("#define METALLICWORKFLOW"), tz = !0), tz ? (sz.albedoTexture && (Fz.push("#define ALBEDOTEXTURE"), Fz.push(`#define ALBEDO_UV${sz.albedoTexture.coordinatesIndex+1}`), sz.albedoTexture.gammaSpace && Fz.push("#define GAMMAALBEDO"), zz = !0), sz.albedoColor && Fz.push("#define ALBEDOCOLOR")) : (sz.reflectivityTexture ? (Fz.push("#define SPECULARGLOSSINESSTEXTURE"), Fz.push(`#define REFLECTIVITY_UV${sz.reflectivityTexture.coordinatesIndex+1}`), sz.reflectivityTexture.gammaSpace && Fz.push("#define GAMMAREFLECTIVITYTEXTURE"), zz = !0) : sz.reflectivityColor && Fz.push("#define REFLECTIVITYCOLOR"), null != sz.microSurface && Fz.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === sz.getClassName()) sz.specularTexture && (Fz.push("#define REFLECTIVITYTEXTURE"), Fz.push(`#define REFLECTIVITY_UV${sz.specularTexture.coordinatesIndex+1}`), sz.specularTexture.gammaSpace && Fz.push("#define GAMMAREFLECTIVITYTEXTURE"), zz = !0), sz.specularColor && Fz.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === sz.getClassName()) {
              const tz = sz;
              Fz.push("#define METALLIC"), Fz.push("#define ROUGHNESS"), tz._useRoughnessFromMetallicTextureGreen && tz.baseMetalnessTexture ? (Fz.push("#define ORMTEXTURE"), Fz.push(`#define REFLECTIVITY_UV${tz.baseMetalnessTexture.coordinatesIndex+1}`), zz = !0) : tz.baseMetalnessTexture ? (Fz.push("#define METALLIC_TEXTURE"), Fz.push(`#define METALLIC_UV${tz.baseMetalnessTexture.coordinatesIndex+1}`), zz = !0) : tz.specularRoughnessTexture && (Fz.push("#define ROUGHNESS_TEXTURE"), Fz.push(`#define ROUGHNESS_UV${tz.specularRoughnessTexture.coordinatesIndex+1}`), zz = !0), tz.baseColorTexture && (Fz.push("#define ALBEDOTEXTURE"), Fz.push(`#define ALBEDO_UV${tz.baseColorTexture.coordinatesIndex+1}`), tz.baseColorTexture.gammaSpace && Fz.push("#define GAMMAALBEDO"), zz = !0), tz.baseColor && Fz.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Fz.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === sz.getClassName())) {
            const tz = sz;
            tz.subsurfaceWeight > 0 && tz.subsurfaceWeightTexture && (Fz.push("#define SUBSURFACE_WEIGHT"), Fz.push(`#define SUBSURFACEWEIGHT_UV${tz.subsurfaceWeightTexture.coordinatesIndex+1}`), zz = !0), tz.transmissionWeight > 0 && tz.transmissionWeightTexture && (Fz.push("#define TRANSMISSION_WEIGHT"), Fz.push(`#define TRANSMISSIONWEIGHT_UV${tz.transmissionWeightTexture.coordinatesIndex+1}`), zz = !0)
          }
          zz && (Fz.push("#define NEED_UV"), Xz.isVerticesDataPresent(Qz.m.UVKind) && (Wz.push(Qz.m.UVKind), Fz.push("#define UV1"), Oz = !0), Xz.isVerticesDataPresent(Qz.m.UV2Kind) && (Wz.push(Qz.m.UV2Kind), Fz.push("#define UV2"), oz = !0))
        }
        if (this._enableDepth && (Fz.push("#define DEPTH"), Fz.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Fz.push("#define NORMAL"), Fz.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Fz.push("#define POSITION"), Fz.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Fz.push("#define VELOCITY"), Fz.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Xz) && Fz.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Fz.push("#define VELOCITY_LINEAR"), Fz.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Xz) && Fz.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Fz.push("#define REFLECTIVITY"), Fz.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Fz.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Fz.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Fz.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Fz.push("#define IRRADIANCE");
          const zz = this._scene;
          if (zz.environmentTexture) {
            const tz = {};
            let Wz = !1,
              Xz = 0;
            "OpenPBRMaterial" !== sz.getClassName() && "StandardMaterial" !== sz.getClassName() && "PBRMetallicRoughnessMaterial" !== sz.getClassName() && "PBRSpecularGlossinessMaterial" !== sz.getClassName() && "PBRMaterial" !== sz.getClassName() || (Wz = !!sz.realtimeFiltering, Xz = sz.realtimeFilteringQuality || 0), (0, fz.U)(zz, zz.environmentTexture, tz, Wz, Xz, !0);
            for (const zz in tz) tz[zz] && Fz.push("#define " + zz);
            tz.USEIRRADIANCEMAP || Fz.push("#define SPHERICAL_HARMONICS");
            const Oz = zz.postProcessRenderPipelineManager.supportedPipelines.find((zz => "IBLShadowsRenderPipeline" === zz.getClassName()));
            if (Oz) {
              const zz = Oz;
              zz._getAccumulatedTexture() && (Fz.push("#define IBL_SHADOW_TEXTURE"), zz.coloredShadows && Fz.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Fz.push("#define OBJECT_ID"), Fz.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Fz.push("#define MESH_BLEND_TAG"), Fz.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Fz.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Fz.push("#define ENCODE_NORMAL"), Xz.useBones && Xz.computeBonesUsingShaders && Xz.skeleton ? (Wz.push(Qz.m.MatricesIndicesKind), Wz.push(Qz.m.MatricesWeightsKind), Xz.numBoneInfluencers > 4 && (Wz.push(Qz.m.MatricesIndicesExtraKind), Wz.push(Qz.m.MatricesWeightsExtraKind)), Fz.push("#define NUM_BONE_INFLUENCERS " + Xz.numBoneInfluencers), Fz.push("#define BONETEXTURE " + Xz.skeleton.isUsingTextureForMatrices), Fz.push("#define BonesPerMesh " + (Xz.skeleton.bones.length + 1))) : (Fz.push("#define NUM_BONE_INFLUENCERS 0"), Fz.push("#define BONETEXTURE false"), Fz.push("#define BonesPerMesh 0"));
        const vz = Xz.morphTargetManager ? (0, fz.O)(Xz.morphTargetManager, Fz, Wz, Xz, !0, !0, !1, Oz, oz, !1) : 0;
        tz && (Fz.push("#define INSTANCES"), (0, fz.tb)(Wz, this._enableVelocity || this._enableVelocityLinear), zz.getRenderingMesh().hasThinInstances && Fz.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Fz.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Fz.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, Kt.j)(sz, this._scene, Fz);
        const Uz = this._scene.FD(),
          Kz = zz._getDrawWrapper(void 0, !0),
          uz = Kz.defines,
          Nz = Fz.join("\n");
        return uz !== Nz && Kz.setEffect(Uz.createEffect("geometry", {
          attributes: Wz,
          uniformsNames: Qt,
          samplers: ht,
          defines: Nz,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: vz
          },
          shaderLanguage: this.shaderLanguage
        }, Uz), Nz), Kz.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(zz) {
        if (this._enableObjectId && 1 !== zz) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== zz) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = zz
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.FD().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.Kg.FD()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.Kg.FD().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const zz = [],
          tz = [];
        let sz = 0;
        return this._enableDepth && (this._depthIndex = sz, sz++, zz.push("gBuffer_Depth"), tz.push(this._textureTypesAndFormats[kt.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = sz, sz++, zz.push("gBuffer_Normal"), tz.push(this._textureTypesAndFormats[kt.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = sz, sz++, zz.push("gBuffer_Position"), tz.push(this._textureTypesAndFormats[kt.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = sz, sz++, zz.push("gBuffer_Velocity"), tz.push(this._textureTypesAndFormats[kt.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = sz, sz++, zz.push("gBuffer_VelocityLinear"), tz.push(this._textureTypesAndFormats[kt.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = sz, sz++, zz.push("gBuffer_Reflectivity"), tz.push(this._textureTypesAndFormats[kt.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = sz, sz++, zz.push("gBuffer_ScreenspaceDepth"), tz.push(this._textureTypesAndFormats[kt.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = sz, sz++, zz.push("gBuffer_Irradiance"), tz.push(this._textureTypesAndFormats[kt.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = sz, sz++, zz.push("gBuffer_ObjectId"), tz.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = sz, sz++, zz.push("gBuffer_MeshBlendTag"), tz.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [sz, zz, tz]
      }
      _createRenderTargets() {
        const zz = this._scene.FD(),
          [tz, sz, Fz] = this._assignRenderTargetIndices(),
          Wz = Math.min(zz.getCaps().maxDrawBuffers ?? 1, 8);
        if (zz.getCaps().drawBuffersExtension && tz > Wz) throw new Error(`GeometryBufferRenderer: ${tz} color attachments were requested, but this engine supports at most ${Wz}`);
        let Oz = 0;
        zz._caps.textureFloat && zz._caps.textureFloatLinearFiltering ? Oz = 1 : zz._caps.textureHalfFloat && zz._caps.textureHalfFloatLinearFiltering && (Oz = 2);
        const oz = this._getRenderTargetDimensions(),
          vz = [],
          Uz = [],
          Kz = [];
        for (const Xz of Fz) Xz ? (vz.push(Xz.textureType), Uz.push(Xz.textureFormat), Kz.push(Xz.samplingMode ?? 2)) : (vz.push(Oz), Uz.push(5), Kz.push(2));
        if (this._normalsAreUnsigned = 11 === vz[kt.NORMAL_TEXTURE_TYPE] || 13 === vz[kt.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new jt("gBuffer", oz, tz, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: vz,
            formats: Uz,
            samplingModes: Kz,
            depthTextureFormat: this._depthFormat
          }, sz.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = Gz.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = Gz.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const uz = [!0],
          Nz = [!1],
          bz = [!0];
        for (let Xz = 1; Xz < tz; ++Xz) uz.push(!0), bz.push(!1), Nz.push(!0);
        const wz = zz.buildTextureLayout(uz),
          Dz = zz.buildTextureLayout(Nz),
          gz = zz.buildTextureLayout(bz);
        this._multiRenderTarget.onClearObservable.add((zz => {
          const tz = this.useSpecificClearForDepthTexture ? Dz : wz;
          zz.clearAttachments(this._clearColor, tz, !0, !0, !0), this.useSpecificClearForDepthTexture && zz.clearAttachments(this._clearDepthColor, gz, !0, !1, !1), zz.bindAttachments(wz)
        })), this._resizeObserver = zz.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const Hz = zz => {
          const tz = zz.getRenderingMesh(),
            sz = zz.getEffectiveMesh(),
            Fz = this._scene,
            Wz = Fz.FD(),
            Oz = zz.vD();
          if (!Oz) return;
          if (sz._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[sz.uniqueId] && (this._previousTransformationMatrices[sz.uniqueId] = {
              PN: hz.e.Identity(),
              viewProjection: Fz.getTransformMatrix()
            }, tz.skeleton)) {
            const zz = tz.skeleton.getTransformMatrices(tz);
            this._previousBonesTransformationMatrices[tz.uniqueId] = this._copyBonesTransformationMatrices(zz, new Float32Array(zz.length))
          }
          const oz = tz._getInstancesRenderList(zz._id, !!zz.getReplacementMesh());
          if (oz.mustReturn) return;
          const vz = Wz.getCaps().instancedArrays && (null !== oz.visibleInstances[zz._id] || tz.hasThinInstances),
            Uz = sz.getWorldMatrix();
          if (this.isReady(zz, vz)) {
            const Kz = zz._getDrawWrapper();
            if (!Kz) return;
            const uz = Kz.effect;
            let Nz;
            Wz.enableEffect(Kz), vz || tz._bind(zz, uz, Oz.fillMode), this._useUbo ? ((0, fz.w)(uz, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (uz.setMatrix("viewProjection", Fz.getTransformMatrix()), uz.setMatrix("view", Fz.getViewMatrix()), this._scene.bindEyePosition(uz, "vEyePosition"));
            if (tz._instanceDataStorage.isFrozen || !Oz.backFaceCulling && null === Oz.sideOrientation) Nz = tz._effectiveSideOrientation;
            else {
              const zz = sz._getWorldMatrixDeterminant();
              Nz = Oz._getEffectiveOrientation(tz), zz < 0 && (Nz = Nz === Xz.b.ClockWiseSideOrientation ? Xz.b.CounterClockWiseSideOrientation : Xz.b.ClockWiseSideOrientation)
            }
            if (Oz._preBind(Kz, Nz), Oz.needAlphaTestingForMesh(sz)) {
              const zz = Oz.getAlphaTestTexture();
              zz && (uz.setTexture("diffuseSampler", zz), uz.setMatrix("diffuseMatrix", zz.getTextureMatrix()), uz.setFloat("alphaCutOff", Oz.alphaCutOff ?? .4))
            }
            if ((Oz.bumpTexture || Oz.normalTexture || Oz.geometryNormalTexture) && Fz.FD().getCaps().standardDerivatives && Rz.b.BumpTextureEnabled) {
              const zz = Oz.bumpTexture || Oz.normalTexture || Oz.geometryNormalTexture;
              uz.setFloat3("vBumpInfos", zz.coordinatesIndex, 1 / zz.level, Oz.parallaxScaleBias), uz.setMatrix("bumpMatrix", zz.getTextureMatrix()), uz.setTexture("bumpSampler", zz), uz.setFloat2("vTangentSpaceParams", Oz.invertNormalMapX ? -1 : 1, Oz.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === Oz.getClassName()) null !== Oz.metallicRoughnessTexture && (uz.setTexture("reflectivitySampler", Oz.metallicRoughnessTexture), uz.setMatrix("reflectivityMatrix", Oz.metallicRoughnessTexture.getTextureMatrix())), null !== Oz.metallic && uz.setFloat("metallic", Oz.metallic), null !== Oz.roughness && uz.setFloat("glossiness", 1 - Oz.roughness), null !== Oz.baseTexture && (uz.setTexture("albedoSampler", Oz.baseTexture), uz.setMatrix("albedoMatrix", Oz.baseTexture.getTextureMatrix())), null !== Oz.baseColor && uz.setColor3("albedoColor", Oz.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === Oz.getClassName()) null !== Oz.specularGlossinessTexture ? (uz.setTexture("reflectivitySampler", Oz.specularGlossinessTexture), uz.setMatrix("reflectivityMatrix", Oz.specularGlossinessTexture.getTextureMatrix())) : null !== Oz.specularColor && uz.setColor3("reflectivityColor", Oz.specularColor), null !== Oz.glossiness && uz.setFloat("glossiness", Oz.glossiness);
            else if ("PBRMaterial" === Oz.getClassName()) null !== Oz.metallicTexture && (uz.setTexture("reflectivitySampler", Oz.metallicTexture), uz.setMatrix("reflectivityMatrix", Oz.metallicTexture.getTextureMatrix())), null !== Oz.metallic && uz.setFloat("metallic", Oz.metallic), null !== Oz.roughness && uz.setFloat("glossiness", 1 - Oz.roughness), null !== Oz.roughness || null !== Oz.metallic || null !== Oz.metallicTexture ? (null !== Oz.albedoTexture && (uz.setTexture("albedoSampler", Oz.albedoTexture), uz.setMatrix("albedoMatrix", Oz.albedoTexture.getTextureMatrix())), null !== Oz.albedoColor && uz.setColor3("albedoColor", Oz.albedoColor)) : (null !== Oz.reflectivityTexture ? (uz.setTexture("reflectivitySampler", Oz.reflectivityTexture), uz.setMatrix("reflectivityMatrix", Oz.reflectivityTexture.getTextureMatrix())) : null !== Oz.reflectivityColor && uz.setColor3("reflectivityColor", Oz.reflectivityColor), null !== Oz.microSurface && uz.setFloat("glossiness", Oz.microSurface));
            else if ("StandardMaterial" === Oz.getClassName()) null !== Oz.specularTexture && (uz.setTexture("reflectivitySampler", Oz.specularTexture), uz.setMatrix("reflectivityMatrix", Oz.specularTexture.getTextureMatrix())), null !== Oz.specularColor && uz.setColor3("reflectivityColor", Oz.specularColor);
            else if ("OpenPBRMaterial" === Oz.getClassName()) {
              const zz = Oz;
              zz._useRoughnessFromMetallicTextureGreen && zz.baseMetalnessTexture ? (uz.setTexture("reflectivitySampler", zz.baseMetalnessTexture), uz.setMatrix("reflectivityMatrix", zz.baseMetalnessTexture.getTextureMatrix())) : zz.baseMetalnessTexture ? (uz.setTexture("metallicSampler", zz.baseMetalnessTexture), uz.setMatrix("metallicMatrix", zz.baseMetalnessTexture.getTextureMatrix())) : zz.specularRoughnessTexture && (uz.setTexture("roughnessSampler", zz.specularRoughnessTexture), uz.setMatrix("roughnessMatrix", zz.specularRoughnessTexture.getTextureMatrix())), uz.setFloat("metallic", zz.baseMetalness), uz.setFloat("glossiness", 1 - zz.specularRoughness), null !== zz.baseColorTexture && (uz.setTexture("albedoSampler", zz.baseColorTexture), uz.setMatrix("albedoMatrix", zz.baseColorTexture.getTextureMatrix())), null !== zz.baseColor && uz.setColor3("albedoColor", zz.baseColor)
            }
            if (this._enableIrradiance && Fz.environmentTexture) {
              const zz = Fz.environmentTexture,
                tz = Fz.postProcessRenderPipelineManager.supportedPipelines.find((zz => "IBLShadowsRenderPipeline" === zz.getClassName()));
              if (tz) {
                const zz = tz._getAccumulatedTexture();
                zz && (uz.setTexture("iblShadowSampler", zz), uz.setFloat2("shadowTextureSize", zz.getSize().width, zz.getSize().height))
              }
              if (uz.setMatrix("reflectionMatrix", zz.getReflectionTextureMatrix()), uz.setFloat2("vReflectionInfos", zz.level * Fz.iblIntensity, 0), uz.setTexture("reflectionSampler", zz), zz.irradianceTexture && (uz.setTexture("irradianceSampler", zz.irradianceTexture), zz.irradianceTexture._dominantDirection && uz.setVector3("vReflectionDominantDirection", zz.irradianceTexture._dominantDirection)), zz.sphericalPolynomial) {
                const tz = zz.sphericalPolynomial;
                if (tz.preScaledHarmonics) {
                  const zz = tz.preScaledHarmonics;
                  uz.setVector3("vSphericalL00", zz.l00), uz.setVector3("vSphericalL1_1", zz.l1_1), uz.setVector3("vSphericalL10", zz.l10), uz.setVector3("vSphericalL11", zz.l11), uz.setVector3("vSphericalL2_2", zz.l2_2), uz.setVector3("vSphericalL2_1", zz.l2_1), uz.setVector3("vSphericalL20", zz.l20), uz.setVector3("vSphericalL21", zz.l21), uz.setVector3("vSphericalL22", zz.l22)
                } else uz.setFloat3("vSphericalX", tz.x.x, tz.x.y, tz.x.z), uz.setFloat3("vSphericalY", tz.y.x, tz.y.y, tz.y.z), uz.setFloat3("vSphericalZ", tz.z.x, tz.z.y, tz.z.z), uz.setFloat3("vSphericalXX_ZZ", tz.xx.x - tz.zz.x, tz.xx.y - tz.zz.y, tz.xx.z - tz.zz.z), uz.setFloat3("vSphericalYY_ZZ", tz.yy.x - tz.zz.x, tz.yy.y - tz.zz.y, tz.yy.z - tz.zz.z), uz.setFloat3("vSphericalZZ", tz.zz.x, tz.zz.y, tz.zz.z), uz.setFloat3("vSphericalXY", tz.xy.x, tz.xy.y, tz.xy.z), uz.setFloat3("vSphericalYZ", tz.yz.x, tz.yz.y, tz.yz.z), uz.setFloat3("vSphericalZX", tz.zx.x, tz.zx.y, tz.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === Oz.getClassName()) {
                const zz = Oz;
                uz.setFloat("vSubsurfaceWeight", zz.subsurfaceWeight), zz.subsurfaceWeightTexture && (uz.setTexture("subsurfaceWeightSampler", zz.subsurfaceWeightTexture), uz.setMatrix("subsurfaceWeightMatrix", zz.subsurfaceWeightTexture.getTextureMatrix())), uz.setFloat("vTransmissionWeight", zz.transmissionWeight), zz.transmissionWeightTexture && (uz.setTexture("transmissionWeightSampler", zz.transmissionWeightTexture), uz.setMatrix("transmissionWeightMatrix", zz.transmissionWeightTexture.getTextureMatrix())), uz.setFloat("vTransmissionScatterAnisotropy", zz.transmissionScatterAnisotropy), uz.setFloat("vSubsurfaceScatterAnisotropy", zz.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, Kt.g)(uz, Oz, this._scene), tz.useBones && tz.computeBonesUsingShaders && tz.skeleton) {
              const zz = tz.skeleton;
              if (zz.isUsingTextureForMatrices && uz.getUniformIndex("boneTextureInfo") > -1) {
                const sz = zz.getTransformMatrixTexture(tz);
                uz.setTexture("boneSampler", sz), uz.setFloat2("boneTextureInfo", zz._textureWidth, zz._textureHeight)
              } else uz.setMatrices("mBones", tz.skeleton.getTransformMatrices(tz));
              (this._enableVelocity || this._enableVelocityLinear) && uz.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[tz.uniqueId])
            }
            if ((0, fz.v)(tz, uz), tz.morphTargetManager && tz.morphTargetManager.isUsingTextureForTargets && tz.morphTargetManager._bind(uz), (this._enableVelocity || this._enableVelocityLinear) && (uz.setMatrix("previousWorld", this._previousTransformationMatrices[sz.uniqueId].PN), uz.setMatrix("previousViewProjection", this._previousTransformationMatrices[sz.uniqueId].viewProjection)), this._enableObjectId) {
              let zz = tz.uniqueId;
              if (this.objectIdProvider) zz = (0, bt.h)(tz, this.objectIdProvider);
              else if (zz > 16777215) throw new Error(`Invalid geometry object ID ${zz} for mesh "${tz.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              uz.setFloat("objectId", zz)
            }
            if (this._enableMeshBlendTag) {
              const zz = this.meshBlendTagProvider ? (0, bt.e)(tz, this.meshBlendTagProvider) : tz.meshBlendingTag;
              uz.setInt("meshBlendTag", zz)
            }
            vz && tz.hasThinInstances && uz.setMatrix("world", Uz), tz._processRendering(sz, zz, uz, Oz.fillMode, oz, vz, ((zz, tz) => {
              zz || uz.setMatrix("world", tz)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[sz.uniqueId].PN = Uz.clone(), this._previousTransformationMatrices[sz.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), tz.skeleton && this._copyBonesTransformationMatrices(tz.skeleton.getTransformMatrices(tz), this._previousBonesTransformationMatrices[sz.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (tz, sz, Fz) => {
          if ((Fz || 0 === sz) && tz.kY)
            for (let Wz = 0; Wz < tz.kY.length; ++Wz) {
              const sz = tz.kY[Wz],
                Fz = sz.vD(),
                Xz = sz.getRenderingMesh();
              if (!Fz) continue;
              const Oz = Xz._getInstancesRenderList(sz._id, !!sz.getReplacementMesh()),
                oz = zz.getCaps().instancedArrays && (null !== Oz.visibleInstances[sz._id] || Xz.hasThinInstances);
              if (!this.isReady(sz, oz)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (tz, sz, Fz, Wz) => {
          let Xz;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.FD().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Wz.length) {
            for (zz.setColorWrite(!1), Xz = 0; Xz < Wz.length; Xz++) Hz(Wz.data[Xz]);
            zz.setColorWrite(!0)
          }
          for (Xz = 0; Xz < tz.length; Xz++) Hz(tz.data[Xz]);
          for (zz.setDepthWrite(!1), Xz = 0; Xz < sz.length; Xz++) Hz(sz.data[Xz]);
          if (this.renderTransparentMeshes)
            for (Xz = 0; Xz < Fz.length; Xz++) Hz(Fz.data[Xz]);
          zz.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const zz = this._scene.FD();
        return {
          width: Math.max(1, Math.floor(zz.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(zz.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(zz, tz) {
        for (let sz = 0; sz < zz.length; sz++) tz[sz] = zz[sz];
        return tz
      }
    }
    kt.ForceGLSL = !1, kt.DEPTH_TEXTURE_TYPE = 0, kt.NORMAL_TEXTURE_TYPE = 1, kt.POSITION_TEXTURE_TYPE = 2, kt.VELOCITY_TEXTURE_TYPE = 3, kt.REFLECTIVITY_TEXTURE_TYPE = 4, kt.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, kt.VELOCITY_LINEAR_TEXTURE_TYPE = 6, kt.IRRADIANCE_TEXTURE_TYPE = 7, kt.OBJECT_ID_TEXTURE_TYPE = 8, kt.MESH_BLEND_TAG_TEXTURE_TYPE = 9, kt._SceneComponentInitialization = zz => {
      throw (0, Ht.i)("GeometryBufferRendererSceneComponent")
    };
    var it = sz(36518);
    const Lt = {
      effect: null,
      subMesh: null
    };

    function lt(zz) {
      if ("number" === typeof zz) return 1;
      if (zz instanceof hz.n) return 2;
      if (zz instanceof hz.p || zz instanceof az.c) return 3;
      if (zz instanceof hz.q || zz instanceof az.d) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class nt {
      populateVectorFromLinkedProperties(zz) {
        const tz = lt(zz);
        for (const sz in this.linkedProperties) {
          const zz = this.linkedProperties[sz],
            Fz = zz.numComponents;
          if (tz < Fz || zz.targetUniformComponentOffset > tz - Fz) return void(1 == Fz ? ez.e.Error(`Float property ${zz.name} has an offset that is too large.`) : ez.e.Error(`Vector${Fz} property ${zz.name} won't fit in Vector${tz} or has an offset that is too large.`));
          "number" === typeof zz.value ? nt._tmpArray[zz.targetUniformComponentOffset] = zz.value : zz.value.toArray(nt._tmpArray, zz.targetUniformComponentOffset)
        }
        zz.Ztz(nt._tmpArray)
      }
      constructor(zz, tz) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = zz, this.numComponents = tz
      }
    }
    nt._tmpArray = [0, 0, 0, 0];
    class qt {
      constructor(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Xz = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = zz, this.targetUniformName = sz, this.defaultValue = tz, this.value = tz, this.targetUniformComponentNum = Fz, this.targetUniformComponentOffset = Wz, this.requiredDefine = Xz
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : lt(this.defaultValue)
      }
    }
    class St {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(zz, tz, sz) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = zz, this.samplerPrefix = tz, this.textureDefine = sz
      }
    }
    class Vt extends((0, Dt.d)((0, wt.e)(kz.d))) {}
    class Rt extends(function(zz) {
      return class extends zz {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(Vt)) {}
    class pt extends((0, qz.f)(Rt)) {
      constructor(zz) {
        super(zz), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class ft extends((0, gt.c)(Vz.c)) {}
    let Et = (() => {
        var zz, tz, Fz, Wz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz, Tz, cz, jz, Az, dz, kz, iz, Lz, lz, qz, Vz, Ez, zt, tt, st, Ft, Wt, Xt, Ot, ot, vt, Ut, wt, Dt, gt, Ht, Bt, Pt, rt, Yt, xt, It, Ct, et, Zt, Gt, Tt, ct, jt, At, yt, Mt, dt, ht, Qt, it, lt, Vt, Rt, Et, zs, ts, ss, Fs, Ws, Xs, Os, os, vs, Us, Ks, us, Ns, bs, ws, Ds, gs, Hs, Bs, Ps, rs, Ys, xs, ms, Is, Cs, es, Zs, Gs, Ts;
        let cs, As, ys, Ms, ds, hs, Qs, ks, is, Ls, ls, ns, as, qs, Ss, Vs, Rs, ps, fs, Es, zF, tF, sF, FF, WF, XF, OF, oF, vF, UF, KF, uF, NF, bF, wF, DF, gF, HF, BF, PF, rF, YF, xF, mF, JF, IF, CF, eF, ZF, GF, TF, cF, jF, AF, yF, MF, dF, hF, QF, kF, iF, LF, lF, nF, aF, qF, SF, VF, RF, pF, fF, EF, zW, tW, sW, FW, WW, XW, OW, oW, vW, UW, KW, uW, NW, bW, wW, DW, gW, HW, BW, PW, rW, YW, xW, mW, JW, IW, CW, eW, ZW, GW, TW, cW, jW, AW = ft,
          yW = [],
          MW = [],
          dW = [],
          hW = [],
          QW = [],
          kW = [],
          iW = [],
          LW = [],
          lW = [],
          nW = [],
          aW = [],
          qW = [],
          SW = [],
          VW = [],
          RW = [],
          pW = [],
          fW = [],
          EW = [],
          zX = [],
          tX = [],
          sX = [],
          FX = [],
          WX = [],
          XX = [],
          OX = [],
          oX = [],
          vX = [],
          UX = [],
          KX = [],
          uX = [],
          NX = [],
          bX = [],
          wX = [],
          DX = [],
          gX = [],
          HX = [],
          BX = [],
          PX = [],
          rX = [],
          YX = [],
          xX = [],
          mX = [],
          JX = [],
          IX = [],
          CX = [],
          eX = [],
          ZX = [],
          GX = [],
          TX = [],
          cX = [],
          jX = [],
          AX = [],
          yX = [],
          MX = [],
          dX = [],
          hX = [],
          QX = [],
          kX = [],
          iX = [],
          LX = [],
          lX = [],
          nX = [],
          aX = [],
          qX = [],
          SX = [],
          VX = [],
          RX = [],
          pX = [],
          fX = [],
          EX = [],
          zO = [],
          tO = [],
          sO = [],
          FO = [],
          WO = [],
          XO = [],
          OO = [],
          oO = [],
          vO = [],
          UO = [],
          KO = [],
          uO = [],
          NO = [],
          bO = [],
          wO = [],
          DO = [],
          gO = [],
          HO = [],
          BO = [],
          PO = [],
          rO = [],
          YO = [],
          xO = [],
          mO = [],
          JO = [],
          IO = [],
          CO = [],
          eO = [],
          ZO = [],
          GO = [],
          TO = [],
          cO = [],
          jO = [],
          AO = [],
          yO = [],
          MO = [],
          dO = [],
          hO = [],
          QO = [],
          kO = [],
          iO = [],
          LO = [],
          lO = [],
          nO = [],
          aO = [],
          qO = [],
          SO = [],
          VO = [],
          RO = [],
          pO = [],
          fO = [],
          EO = [],
          zo = [],
          to = [],
          so = [],
          Fo = [],
          Wo = [],
          Xo = [],
          Oo = [],
          oo = [],
          vo = [],
          Uo = [],
          Ko = [],
          uo = [],
          No = [],
          bo = [],
          wo = [],
          Do = [],
          go = [],
          Ho = [],
          Bo = [],
          Po = [],
          ro = [],
          Yo = [],
          xo = [],
          mo = [],
          Jo = [],
          Io = [],
          Co = [],
          eo = [],
          Zo = [],
          Go = [],
          To = [],
          co = [],
          jo = [],
          Ao = [],
          yo = [],
          Mo = [],
          ho = [],
          Qo = [],
          ko = [],
          io = [],
          Lo = [],
          no = [],
          ao = [],
          qo = [],
          So = [],
          Vo = [],
          Ro = [],
          po = [],
          fo = [],
          Eo = [],
          zv = [],
          tv = [],
          sv = [],
          Fv = [],
          Wv = [],
          Xv = [],
          Ov = [],
          ov = [],
          vv = [],
          Uv = [],
          Kv = [],
          uv = [],
          Nv = [],
          bv = [],
          wv = [],
          Dv = [],
          gv = [],
          Hv = [],
          Bv = [],
          Pv = [],
          rv = [],
          Yv = [],
          xv = [],
          mv = [],
          Jv = [],
          Iv = [],
          Cv = [],
          ev = [],
          Zv = [],
          Gv = [],
          Tv = [],
          cv = [],
          jv = [];
        return zz = class extends AW {
          get baseWeight() {
            return (0, Iz.c)(this, tz, "f")
          }
          set baseWeight(zz) {
            (0, Iz.g)(this, tz, zz, "f")
          }
          get baseWeightTexture() {
            return (0, Iz.c)(this, Fz, "f")
          }
          set baseWeightTexture(zz) {
            (0, Iz.g)(this, Fz, zz, "f")
          }
          get baseColor() {
            return (0, Iz.c)(this, Wz, "f")
          }
          set baseColor(zz) {
            (0, Iz.g)(this, Wz, zz, "f")
          }
          get baseColorTexture() {
            return (0, Iz.c)(this, Oz, "f")
          }
          set baseColorTexture(zz) {
            (0, Iz.g)(this, Oz, zz, "f")
          }
          get baseDiffuseRoughness() {
            return (0, Iz.c)(this, oz, "f")
          }
          set baseDiffuseRoughness(zz) {
            (0, Iz.g)(this, oz, zz, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, Iz.c)(this, vz, "f")
          }
          set baseDiffuseRoughnessTexture(zz) {
            (0, Iz.g)(this, vz, zz, "f")
          }
          get baseMetalness() {
            return (0, Iz.c)(this, Uz, "f")
          }
          set baseMetalness(zz) {
            (0, Iz.g)(this, Uz, zz, "f")
          }
          get baseMetalnessTexture() {
            return (0, Iz.c)(this, Kz, "f")
          }
          set baseMetalnessTexture(zz) {
            (0, Iz.g)(this, Kz, zz, "f")
          }
          get specularWeight() {
            return (0, Iz.c)(this, uz, "f")
          }
          set specularWeight(zz) {
            (0, Iz.g)(this, uz, zz, "f")
          }
          get specularWeightTexture() {
            return (0, Iz.c)(this, Nz, "f")
          }
          set specularWeightTexture(zz) {
            (0, Iz.g)(this, Nz, zz, "f")
          }
          get specularColor() {
            return (0, Iz.c)(this, bz, "f")
          }
          set specularColor(zz) {
            (0, Iz.g)(this, bz, zz, "f")
          }
          get specularColorTexture() {
            return (0, Iz.c)(this, wz, "f")
          }
          set specularColorTexture(zz) {
            (0, Iz.g)(this, wz, zz, "f")
          }
          get specularRoughness() {
            return (0, Iz.c)(this, Dz, "f")
          }
          set specularRoughness(zz) {
            (0, Iz.g)(this, Dz, zz, "f")
          }
          get specularRoughnessTexture() {
            return (0, Iz.c)(this, gz, "f")
          }
          set specularRoughnessTexture(zz) {
            (0, Iz.g)(this, gz, zz, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, Iz.c)(this, Hz, "f")
          }
          set specularRoughnessAnisotropy(zz) {
            (0, Iz.g)(this, Hz, zz, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, Iz.c)(this, Bz, "f")
          }
          set specularRoughnessAnisotropyTexture(zz) {
            (0, Iz.g)(this, Bz, zz, "f")
          }
          get specularIor() {
            return (0, Iz.c)(this, Pz, "f")
          }
          set specularIor(zz) {
            (0, Iz.g)(this, Pz, zz, "f")
          }
          get transmissionWeight() {
            return (0, Iz.c)(this, rz, "f")
          }
          set transmissionWeight(zz) {
            (0, Iz.g)(this, rz, zz, "f")
          }
          get transmissionWeightTexture() {
            return (0, Iz.c)(this, Yz, "f")
          }
          set transmissionWeightTexture(zz) {
            (0, Iz.g)(this, Yz, zz, "f")
          }
          get transmissionColor() {
            return (0, Iz.c)(this, xz, "f")
          }
          set transmissionColor(zz) {
            (0, Iz.g)(this, xz, zz, "f")
          }
          get transmissionColorTexture() {
            return (0, Iz.c)(this, mz, "f")
          }
          set transmissionColorTexture(zz) {
            (0, Iz.g)(this, mz, zz, "f")
          }
          get transmissionDepth() {
            return (0, Iz.c)(this, Jz, "f")
          }
          set transmissionDepth(zz) {
            (0, Iz.g)(this, Jz, zz, "f")
          }
          get transmissionDepthTexture() {
            return (0, Iz.c)(this, Tz, "f")
          }
          set transmissionDepthTexture(zz) {
            (0, Iz.g)(this, Tz, zz, "f")
          }
          get transmissionScatter() {
            return (0, Iz.c)(this, cz, "f")
          }
          set transmissionScatter(zz) {
            (0, Iz.g)(this, cz, zz, "f")
          }
          get transmissionScatterTexture() {
            return (0, Iz.c)(this, jz, "f")
          }
          set transmissionScatterTexture(zz) {
            (0, Iz.g)(this, jz, zz, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, Iz.c)(this, Az, "f")
          }
          set transmissionScatterAnisotropy(zz) {
            (0, Iz.g)(this, Az, zz, "f")
          }
          get transmissionDispersionScale() {
            return (0, Iz.c)(this, dz, "f")
          }
          set transmissionDispersionScale(zz) {
            (0, Iz.g)(this, dz, zz, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, Iz.c)(this, kz, "f")
          }
          set transmissionDispersionScaleTexture(zz) {
            (0, Iz.g)(this, kz, zz, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, Iz.c)(this, iz, "f")
          }
          set transmissionDispersionAbbeNumber(zz) {
            (0, Iz.g)(this, iz, zz, "f")
          }
          get subsurfaceWeight() {
            return (0, Iz.c)(this, Lz, "f")
          }
          set subsurfaceWeight(zz) {
            (0, Iz.g)(this, Lz, zz, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, Iz.c)(this, lz, "f")
          }
          set subsurfaceWeightTexture(zz) {
            (0, Iz.g)(this, lz, zz, "f")
          }
          get subsurfaceColor() {
            return (0, Iz.c)(this, qz, "f")
          }
          set subsurfaceColor(zz) {
            (0, Iz.g)(this, qz, zz, "f")
          }
          get subsurfaceColorTexture() {
            return (0, Iz.c)(this, Vz, "f")
          }
          set subsurfaceColorTexture(zz) {
            (0, Iz.g)(this, Vz, zz, "f")
          }
          get subsurfaceRadius() {
            return (0, Iz.c)(this, Ez, "f")
          }
          set subsurfaceRadius(zz) {
            (0, Iz.g)(this, Ez, zz, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, Iz.c)(this, zt, "f")
          }
          set subsurfaceRadiusScale(zz) {
            (0, Iz.g)(this, zt, zz, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, Iz.c)(this, tt, "f")
          }
          set subsurfaceRadiusScaleTexture(zz) {
            (0, Iz.g)(this, tt, zz, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, Iz.c)(this, st, "f")
          }
          set subsurfaceScatterAnisotropy(zz) {
            (0, Iz.g)(this, st, zz, "f")
          }
          get coatWeight() {
            return (0, Iz.c)(this, Ft, "f")
          }
          set coatWeight(zz) {
            (0, Iz.g)(this, Ft, zz, "f")
          }
          get coatWeightTexture() {
            return (0, Iz.c)(this, Wt, "f")
          }
          set coatWeightTexture(zz) {
            (0, Iz.g)(this, Wt, zz, "f")
          }
          get coatColor() {
            return (0, Iz.c)(this, Xt, "f")
          }
          set coatColor(zz) {
            (0, Iz.g)(this, Xt, zz, "f")
          }
          get coatColorTexture() {
            return (0, Iz.c)(this, Ot, "f")
          }
          set coatColorTexture(zz) {
            (0, Iz.g)(this, Ot, zz, "f")
          }
          get coatRoughness() {
            return (0, Iz.c)(this, ot, "f")
          }
          set coatRoughness(zz) {
            (0, Iz.g)(this, ot, zz, "f")
          }
          get coatRoughnessTexture() {
            return (0, Iz.c)(this, vt, "f")
          }
          set coatRoughnessTexture(zz) {
            (0, Iz.g)(this, vt, zz, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, Iz.c)(this, Ut, "f")
          }
          set coatRoughnessAnisotropy(zz) {
            (0, Iz.g)(this, Ut, zz, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, Iz.c)(this, wt, "f")
          }
          set coatRoughnessAnisotropyTexture(zz) {
            (0, Iz.g)(this, wt, zz, "f")
          }
          get coatIor() {
            return (0, Iz.c)(this, Dt, "f")
          }
          set coatIor(zz) {
            (0, Iz.g)(this, Dt, zz, "f")
          }
          get coatDarkening() {
            return (0, Iz.c)(this, gt, "f")
          }
          set coatDarkening(zz) {
            (0, Iz.g)(this, gt, zz, "f")
          }
          get coatDarkeningTexture() {
            return (0, Iz.c)(this, Ht, "f")
          }
          set coatDarkeningTexture(zz) {
            (0, Iz.g)(this, Ht, zz, "f")
          }
          get fuzzWeight() {
            return (0, Iz.c)(this, Bt, "f")
          }
          set fuzzWeight(zz) {
            (0, Iz.g)(this, Bt, zz, "f")
          }
          get fuzzWeightTexture() {
            return (0, Iz.c)(this, Pt, "f")
          }
          set fuzzWeightTexture(zz) {
            (0, Iz.g)(this, Pt, zz, "f")
          }
          get fuzzColor() {
            return (0, Iz.c)(this, rt, "f")
          }
          set fuzzColor(zz) {
            (0, Iz.g)(this, rt, zz, "f")
          }
          get fuzzColorTexture() {
            return (0, Iz.c)(this, Yt, "f")
          }
          set fuzzColorTexture(zz) {
            (0, Iz.g)(this, Yt, zz, "f")
          }
          get fuzzRoughness() {
            return (0, Iz.c)(this, xt, "f")
          }
          set fuzzRoughness(zz) {
            (0, Iz.g)(this, xt, zz, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, Iz.c)(this, It, "f")
          }
          set fuzzRoughnessTexture(zz) {
            (0, Iz.g)(this, It, zz, "f")
          }
          get geometryThinWalled() {
            return (0, Iz.c)(this, Ct, "f")
          }
          set geometryThinWalled(zz) {
            (0, Iz.g)(this, Ct, zz, "f")
          }
          get geometryNormalTexture() {
            return (0, Iz.c)(this, et, "f")
          }
          set geometryNormalTexture(zz) {
            (0, Iz.g)(this, et, zz, "f")
          }
          get geometryTangent() {
            return (0, Iz.c)(this, Zt, "f")
          }
          set geometryTangent(zz) {
            (0, Iz.g)(this, Zt, zz, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(zz) {
            this.geometryTangent = new hz.n(Math.cos(zz), Math.sin(zz))
          }
          get geometryTangentTexture() {
            return (0, Iz.c)(this, Gt, "f")
          }
          set geometryTangentTexture(zz) {
            (0, Iz.g)(this, Gt, zz, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, Iz.c)(this, Tt, "f")
          }
          set geometryCoatNormalTexture(zz) {
            (0, Iz.g)(this, Tt, zz, "f")
          }
          get geometryCoatTangent() {
            return (0, Iz.c)(this, ct, "f")
          }
          set geometryCoatTangent(zz) {
            (0, Iz.g)(this, ct, zz, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(zz) {
            this.geometryCoatTangent = new hz.n(Math.cos(zz), Math.sin(zz))
          }
          get geometryCoatTangentTexture() {
            return (0, Iz.c)(this, jt, "f")
          }
          set geometryCoatTangentTexture(zz) {
            (0, Iz.g)(this, jt, zz, "f")
          }
          get geometryOpacity() {
            return (0, Iz.c)(this, At, "f")
          }
          set geometryOpacity(zz) {
            (0, Iz.g)(this, At, zz, "f")
          }
          get geometryOpacityTexture() {
            return (0, Iz.c)(this, yt, "f")
          }
          set geometryOpacityTexture(zz) {
            (0, Iz.g)(this, yt, zz, "f")
          }
          get geometryThickness() {
            return (0, Iz.c)(this, Mt, "f")
          }
          set geometryThickness(zz) {
            (0, Iz.g)(this, Mt, zz, "f")
          }
          get geometryThicknessTexture() {
            return (0, Iz.c)(this, dt, "f")
          }
          set geometryThicknessTexture(zz) {
            (0, Iz.g)(this, dt, zz, "f")
          }
          get emissionLuminance() {
            return (0, Iz.c)(this, ht, "f")
          }
          set emissionLuminance(zz) {
            (0, Iz.g)(this, ht, zz, "f")
          }
          get emissionColor() {
            return (0, Iz.c)(this, Qt, "f")
          }
          set emissionColor(zz) {
            (0, Iz.g)(this, Qt, zz, "f")
          }
          get emissionColorTexture() {
            return (0, Iz.c)(this, it, "f")
          }
          set emissionColorTexture(zz) {
            (0, Iz.g)(this, it, zz, "f")
          }
          get thinFilmWeight() {
            return (0, Iz.c)(this, lt, "f")
          }
          set thinFilmWeight(zz) {
            (0, Iz.g)(this, lt, zz, "f")
          }
          get thinFilmWeightTexture() {
            return (0, Iz.c)(this, Vt, "f")
          }
          set thinFilmWeightTexture(zz) {
            (0, Iz.g)(this, Vt, zz, "f")
          }
          get thinFilmThickness() {
            return (0, Iz.c)(this, Rt, "f")
          }
          set thinFilmThickness(zz) {
            (0, Iz.g)(this, Rt, zz, "f")
          }
          get thinFilmThicknessMin() {
            return (0, Iz.c)(this, Et, "f")
          }
          set thinFilmThicknessMin(zz) {
            (0, Iz.g)(this, Et, zz, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, Iz.c)(this, zs, "f")
          }
          set thinFilmThicknessTexture(zz) {
            (0, Iz.g)(this, zs, zz, "f")
          }
          get thinFilmIor() {
            return (0, Iz.c)(this, ts, "f")
          }
          set thinFilmIor(zz) {
            (0, Iz.g)(this, ts, zz, "f")
          }
          get ambientOcclusionTexture() {
            return (0, Iz.c)(this, ss, "f")
          }
          set ambientOcclusionTexture(zz) {
            (0, Iz.g)(this, ss, zz, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(zz) {
            this._sssQuality !== zz && (this._sssQuality = zz, this.wtz(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(zz) {
            this._sssIrradianceTexture !== zz && (this._sssIrradianceTexture = zz, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(zz) {
            this._sssDepthTexture !== zz && (this._sssDepthTexture = zz, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, Iz.c)(this, Fs, "f")
          }
          set directIntensity(zz) {
            (0, Iz.g)(this, Fs, zz, "f")
          }
          get environmentIntensity() {
            return (0, Iz.c)(this, Ws, "f")
          }
          set environmentIntensity(zz) {
            (0, Iz.g)(this, Ws, zz, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, Iz.c)(this, Xs, "f")
          }
          set useSpecularWeightFromTextureAlpha(zz) {
            (0, Iz.g)(this, Xs, zz, "f")
          }
          get forceAlphaTest() {
            return (0, Iz.c)(this, Os, "f")
          }
          set forceAlphaTest(zz) {
            (0, Iz.g)(this, Os, zz, "f")
          }
          get alphaCutOff() {
            return (0, Iz.c)(this, os, "f")
          }
          set alphaCutOff(zz) {
            (0, Iz.g)(this, os, zz, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, Iz.c)(this, vs, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(zz) {
            (0, Iz.g)(this, vs, zz, "f")
          }
          get useAmbientInGrayScale() {
            return (0, Iz.c)(this, Us, "f")
          }
          set useAmbientInGrayScale(zz) {
            (0, Iz.g)(this, Us, zz, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(az.c.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === Xz.b.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(zz) {
            zz !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = zz ? Xz.b.LIGHTFALLOFF_PHYSICAL : Xz.b.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === Xz.b.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(zz) {
            zz !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = zz ? Xz.b.LIGHTFALLOFF_GLTF : Xz.b.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, Iz.c)(this, Ks, "f")
          }
          set useObjectSpaceNormalMap(zz) {
            (0, Iz.g)(this, Ks, zz, "f")
          }
          get useParallax() {
            return (0, Iz.c)(this, us, "f")
          }
          set useParallax(zz) {
            (0, Iz.g)(this, us, zz, "f")
          }
          get useParallaxOcclusion() {
            return (0, Iz.c)(this, Ns, "f")
          }
          set useParallaxOcclusion(zz) {
            (0, Iz.g)(this, Ns, zz, "f")
          }
          get parallaxScaleBias() {
            return (0, Iz.c)(this, bs, "f")
          }
          set parallaxScaleBias(zz) {
            (0, Iz.g)(this, bs, zz, "f")
          }
          get disableLighting() {
            return (0, Iz.c)(this, ws, "f")
          }
          set disableLighting(zz) {
            (0, Iz.g)(this, ws, zz, "f")
          }
          get forceIrradianceInFragment() {
            return (0, Iz.c)(this, Ds, "f")
          }
          set forceIrradianceInFragment(zz) {
            (0, Iz.g)(this, Ds, zz, "f")
          }
          get maxSimultaneousLights() {
            return (0, Iz.c)(this, gs, "f")
          }
          set maxSimultaneousLights(zz) {
            (0, Iz.g)(this, gs, zz, "f")
          }
          get invertNormalMapX() {
            return (0, Iz.c)(this, Hs, "f")
          }
          set invertNormalMapX(zz) {
            (0, Iz.g)(this, Hs, zz, "f")
          }
          get invertNormalMapY() {
            return (0, Iz.c)(this, Bs, "f")
          }
          set invertNormalMapY(zz) {
            (0, Iz.g)(this, Bs, zz, "f")
          }
          get twoSidedLighting() {
            return (0, Iz.c)(this, Ps, "f")
          }
          set twoSidedLighting(zz) {
            (0, Iz.g)(this, Ps, zz, "f")
          }
          get useAlphaFresnel() {
            return (0, Iz.c)(this, rs, "f")
          }
          set useAlphaFresnel(zz) {
            (0, Iz.g)(this, rs, zz, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, Iz.c)(this, Ys, "f")
          }
          set useLinearAlphaFresnel(zz) {
            (0, Iz.g)(this, Ys, zz, "f")
          }
          get environmentBRDFTexture() {
            return (0, Iz.c)(this, xs, "f")
          }
          set environmentBRDFTexture(zz) {
            (0, Iz.g)(this, xs, zz, "f")
          }
          get forceNormalForward() {
            return (0, Iz.c)(this, ms, "f")
          }
          set forceNormalForward(zz) {
            (0, Iz.g)(this, ms, zz, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, Iz.c)(this, Is, "f")
          }
          set enableSpecularAntiAliasing(zz) {
            (0, Iz.g)(this, Is, zz, "f")
          }
          get useHorizonOcclusion() {
            return (0, Iz.c)(this, Cs, "f")
          }
          set useHorizonOcclusion(zz) {
            (0, Iz.g)(this, Cs, zz, "f")
          }
          get useRadianceOcclusion() {
            return (0, Iz.c)(this, es, "f")
          }
          set useRadianceOcclusion(zz) {
            (0, Iz.g)(this, es, zz, "f")
          }
          get unlit() {
            return (0, Iz.c)(this, Zs, "f")
          }
          set unlit(zz) {
            (0, Iz.g)(this, Zs, zz, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Iz.c)(this, Gs, "f")
          }
          set applyDecalMapAfterDetailMap(zz) {
            (0, Iz.g)(this, Gs, zz, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(zz) {
            this._backgroundRefractionTexture = zz, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(zz) {
            this._refractionHighQualityBlur !== zz && (this._refractionHighQualityBlur = zz, this.wtz(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(zz) {
            this._realTimeFiltering = zz, this.wtz(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(zz) {
            this._realTimeFilteringQuality = zz, this.wtz(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(zz) {
            this._fuzzSampleNumber = zz, this.wtz(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, Iz.c)(this, Ts, "f")
          }
          set debugMode(zz) {
            (0, Iz.g)(this, Ts, zz, "f")
          }
          constructor(sz, Cz) {
            super(sz, Cz, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || zz.ForceGLSL), tz.set(this, ((0, Iz.k)(this, yW), (0, Iz.k)(this, MW, void 0))), this._baseWeight = ((0, Iz.k)(this, dW), new qt("base_weight", 1, "vBaseWeight", 1)), Fz.set(this, (0, Iz.k)(this, hW, void 0)), this._baseWeightTexture = ((0, Iz.k)(this, QW), new St("base_weight", "baseWeight", "BASE_WEIGHT")), Wz.set(this, (0, Iz.k)(this, kW, void 0)), this._baseColor = ((0, Iz.k)(this, iW), new qt("base_color", az.c.White(), "vBaseColor", 4)), Oz.set(this, (0, Iz.k)(this, LW, void 0)), this._baseColorTexture = ((0, Iz.k)(this, lW), new St("base_color", "baseColor", "BASE_COLOR")), oz.set(this, (0, Iz.k)(this, nW, void 0)), this._baseDiffuseRoughness = ((0, Iz.k)(this, aW), new qt("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), vz.set(this, (0, Iz.k)(this, qW, void 0)), this._baseDiffuseRoughnessTexture = ((0, Iz.k)(this, SW), new St("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), Uz.set(this, (0, Iz.k)(this, VW, void 0)), this._baseMetalness = ((0, Iz.k)(this, RW), new qt("base_metalness", 0, "vReflectanceInfo", 4, 0)), Kz.set(this, (0, Iz.k)(this, pW, void 0)), this._baseMetalnessTexture = ((0, Iz.k)(this, fW), new St("base_metalness", "baseMetalness", "BASE_METALNESS")), uz.set(this, (0, Iz.k)(this, EW, void 0)), this._specularWeight = ((0, Iz.k)(this, zX), new qt("specular_weight", 1, "vReflectanceInfo", 4, 3)), Nz.set(this, (0, Iz.k)(this, tX, void 0)), this._specularWeightTexture = ((0, Iz.k)(this, sX), new St("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), bz.set(this, (0, Iz.k)(this, FX, void 0)), this._specularColor = ((0, Iz.k)(this, WX), new qt("specular_color", az.c.White(), "vSpecularColor", 4)), wz.set(this, (0, Iz.k)(this, XX, void 0)), this._specularColorTexture = ((0, Iz.k)(this, OX), new St("specular_color", "specularColor", "SPECULAR_COLOR")), Dz.set(this, (0, Iz.k)(this, oX, void 0)), this._specularRoughness = ((0, Iz.k)(this, vX), new qt("specular_roughness", .3, "vReflectanceInfo", 4, 1)), gz.set(this, (0, Iz.k)(this, UX, void 0)), this._specularRoughnessTexture = ((0, Iz.k)(this, KX), new St("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), Hz.set(this, (0, Iz.k)(this, uX, void 0)), this._specularRoughnessAnisotropy = ((0, Iz.k)(this, NX), new qt("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), Bz.set(this, (0, Iz.k)(this, bX, void 0)), this._specularRoughnessAnisotropyTexture = ((0, Iz.k)(this, wX), new St("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), Pz.set(this, (0, Iz.k)(this, DX, void 0)), this._specularIor = ((0, Iz.k)(this, gX), new qt("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), rz.set(this, (0, Iz.k)(this, HX, void 0)), this._transmissionWeight = ((0, Iz.k)(this, BX), new qt("transmission_weight", 0, "vTransmissionWeight", 1)), Yz.set(this, (0, Iz.k)(this, PX, void 0)), this._transmissionWeightTexture = ((0, Iz.k)(this, rX), new St("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), xz.set(this, (0, Iz.k)(this, YX, void 0)), this._transmissionColor = ((0, Iz.k)(this, xX), new qt("transmission_color", az.c.White(), "vTransmissionColor", 3, 0)), mz.set(this, (0, Iz.k)(this, mX, void 0)), this._transmissionColorTexture = ((0, Iz.k)(this, JX), new St("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), Jz.set(this, (0, Iz.k)(this, IX, void 0)), this._transmissionDepth = ((0, Iz.k)(this, CX), new qt("transmission_depth", 0, "vTransmissionDepth", 1, 0)), Tz.set(this, (0, Iz.k)(this, eX, void 0)), this._transmissionDepthTexture = ((0, Iz.k)(this, ZX), new St("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), cz.set(this, (0, Iz.k)(this, GX, void 0)), this._transmissionScatter = ((0, Iz.k)(this, TX), new qt("transmission_scatter", az.c.Black(), "vTransmissionScatter", 3, 0)), jz.set(this, (0, Iz.k)(this, cX, void 0)), this._transmissionScatterTexture = ((0, Iz.k)(this, jX), new St("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Az.set(this, (0, Iz.k)(this, AX, void 0)), this._transmissionScatterAnisotropy = ((0, Iz.k)(this, yX), new qt("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), dz.set(this, (0, Iz.k)(this, MX, void 0)), this._transmissionDispersionScale = ((0, Iz.k)(this, dX), new qt("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), kz.set(this, (0, Iz.k)(this, hX, void 0)), this._transmissionDispersionScaleTexture = ((0, Iz.k)(this, QX), new St("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), iz.set(this, (0, Iz.k)(this, kX, void 0)), this._transmissionDispersionAbbeNumber = ((0, Iz.k)(this, iX), new qt("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), Lz.set(this, (0, Iz.k)(this, LX, void 0)), this._subsurfaceWeight = ((0, Iz.k)(this, lX), new qt("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), lz.set(this, (0, Iz.k)(this, nX, void 0)), this._subsurfaceWeightTexture = ((0, Iz.k)(this, aX), new St("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), qz.set(this, (0, Iz.k)(this, qX, void 0)), this._subsurfaceColor = ((0, Iz.k)(this, SX), new qt("subsurface_color", new az.c(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), Vz.set(this, (0, Iz.k)(this, VX, void 0)), this._subsurfaceColorTexture = ((0, Iz.k)(this, RX), new St("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), Ez.set(this, (0, Iz.k)(this, pX, void 0)), this._subsurfaceRadius = ((0, Iz.k)(this, fX), new qt("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), zt.set(this, (0, Iz.k)(this, EX, void 0)), this._subsurfaceRadiusScale = ((0, Iz.k)(this, zO), new qt("subsurface_radius_scale", new az.c(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), tt.set(this, (0, Iz.k)(this, tO, void 0)), this._subsurfaceRadiusScaleTexture = ((0, Iz.k)(this, sO), new St("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), st.set(this, (0, Iz.k)(this, FO, void 0)), this._subsurfaceScatterAnisotropy = ((0, Iz.k)(this, WO), new qt("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), Ft.set(this, (0, Iz.k)(this, XO, void 0)), this._coatWeight = ((0, Iz.k)(this, OO), new qt("coat_weight", 0, "vCoatWeight", 1, 0)), Wt.set(this, (0, Iz.k)(this, oO, void 0)), this._coatWeightTexture = ((0, Iz.k)(this, vO), new St("coat_weight", "coatWeight", "COAT_WEIGHT")), Xt.set(this, (0, Iz.k)(this, UO, void 0)), this._coatColor = ((0, Iz.k)(this, KO), new qt("coat_color", az.c.White(), "vCoatColor", 3, 0)), Ot.set(this, (0, Iz.k)(this, uO, void 0)), this._coatColorTexture = ((0, Iz.k)(this, NO), new St("coat_color", "coatColor", "COAT_COLOR")), ot.set(this, (0, Iz.k)(this, bO, void 0)), this._coatRoughness = ((0, Iz.k)(this, wO), new qt("coat_roughness", 0, "vCoatRoughness", 1, 0)), vt.set(this, (0, Iz.k)(this, DO, void 0)), this._coatRoughnessTexture = ((0, Iz.k)(this, gO), new St("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Ut.set(this, (0, Iz.k)(this, HO, void 0)), this._coatRoughnessAnisotropy = ((0, Iz.k)(this, BO), new qt("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), wt.set(this, (0, Iz.k)(this, PO, void 0)), this._coatRoughnessAnisotropyTexture = ((0, Iz.k)(this, rO), new St("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), Dt.set(this, (0, Iz.k)(this, YO, void 0)), this._coatIor = ((0, Iz.k)(this, xO), new qt("coat_ior", 1.5, "vCoatIor", 1, 0)), gt.set(this, (0, Iz.k)(this, mO, void 0)), this._coatDarkening = ((0, Iz.k)(this, JO), new qt("coat_darkening", 1, "vCoatDarkening", 1, 0)), Ht.set(this, (0, Iz.k)(this, IO, void 0)), this._coatDarkeningTexture = ((0, Iz.k)(this, CO), new St("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, Bt.set(this, (0, Iz.k)(this, eO, void 0)), this._fuzzWeight = ((0, Iz.k)(this, ZO), new qt("fuzz_weight", 0, "vFuzzWeight", 1, 0)), Pt.set(this, (0, Iz.k)(this, GO, void 0)), this._fuzzWeightTexture = ((0, Iz.k)(this, TO), new St("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), rt.set(this, (0, Iz.k)(this, cO, void 0)), this._fuzzColor = ((0, Iz.k)(this, jO), new qt("fuzz_color", az.c.White(), "vFuzzColor", 3, 0)), Yt.set(this, (0, Iz.k)(this, AO, void 0)), this._fuzzColorTexture = ((0, Iz.k)(this, yO), new St("fuzz_color", "fuzzColor", "FUZZ_COLOR")), xt.set(this, (0, Iz.k)(this, MO, void 0)), this._fuzzRoughness = ((0, Iz.k)(this, dO), new qt("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), It.set(this, (0, Iz.k)(this, hO, void 0)), this._fuzzRoughnessTexture = ((0, Iz.k)(this, QO), new St("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Ct.set(this, (0, Iz.k)(this, kO, void 0)), this._geometryThinWalled = ((0, Iz.k)(this, iO), new qt("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), et.set(this, (0, Iz.k)(this, LO, void 0)), this._geometryNormalTexture = ((0, Iz.k)(this, lO), new St("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), Zt.set(this, (0, Iz.k)(this, nO, void 0)), this._geometryTangent = ((0, Iz.k)(this, aO), new qt("geometry_tangent", new hz.n(1, 0), "vSpecularAnisotropy", 3, 0)), Gt.set(this, (0, Iz.k)(this, qO, void 0)), this._geometryTangentTexture = ((0, Iz.k)(this, SO), new St("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), Tt.set(this, (0, Iz.k)(this, VO, void 0)), this._geometryCoatNormalTexture = ((0, Iz.k)(this, RO), new St("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), ct.set(this, (0, Iz.k)(this, pO, void 0)), this._geometryCoatTangent = ((0, Iz.k)(this, fO), new qt("geometry_coat_tangent", new hz.n(1, 0), "vGeometryCoatTangent", 2, 0)), jt.set(this, (0, Iz.k)(this, EO, void 0)), this._geometryCoatTangentTexture = ((0, Iz.k)(this, zo), new St("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), At.set(this, (0, Iz.k)(this, to, void 0)), this._geometryOpacity = ((0, Iz.k)(this, so), new qt("geometry_opacity", 1, "vBaseColor", 4, 3)), yt.set(this, (0, Iz.k)(this, Fo, void 0)), this._geometryOpacityTexture = ((0, Iz.k)(this, Wo), new St("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Mt.set(this, (0, Iz.k)(this, Xo, void 0)), this._geometryThickness = ((0, Iz.k)(this, Oo), new qt("geometry_thickness", 0, "vGeometryThickness", 1, 0)), dt.set(this, (0, Iz.k)(this, oo, void 0)), this._geometryThicknessTexture = ((0, Iz.k)(this, vo), new St("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), ht.set(this, (0, Iz.k)(this, Uo, void 0)), this._emissionLuminance = ((0, Iz.k)(this, Ko), new qt("emission_luminance", 1, "vLightingIntensity", 4, 1)), Qt.set(this, (0, Iz.k)(this, uo, void 0)), this._emissionColor = ((0, Iz.k)(this, No), new qt("emission_color", az.c.Black(), "vEmissionColor", 3)), it.set(this, (0, Iz.k)(this, bo, void 0)), this._emissionColorTexture = ((0, Iz.k)(this, wo), new St("emission_color", "emissionColor", "EMISSION_COLOR")), lt.set(this, (0, Iz.k)(this, Do, void 0)), this._thinFilmWeight = ((0, Iz.k)(this, go), new qt("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), Vt.set(this, (0, Iz.k)(this, Ho, void 0)), this._thinFilmWeightTexture = ((0, Iz.k)(this, Bo), new St("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), Rt.set(this, (0, Iz.k)(this, Po, void 0)), this._thinFilmThickness = ((0, Iz.k)(this, ro), new qt("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), Et.set(this, (0, Iz.k)(this, Yo, void 0)), this._thinFilmThicknessMin = ((0, Iz.k)(this, xo), new qt("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), zs.set(this, (0, Iz.k)(this, mo, void 0)), this._thinFilmThicknessTexture = ((0, Iz.k)(this, Jo), new St("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), ts.set(this, (0, Iz.k)(this, Io, void 0)), this._thinFilmIor = ((0, Iz.k)(this, Co), new qt("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), ss.set(this, (0, Iz.k)(this, eo, void 0)), this._ambientOcclusionTexture = ((0, Iz.k)(this, Zo), new St("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = zz.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, Fs.set(this, (0, Iz.k)(this, Go, 1)), Ws.set(this, ((0, Iz.k)(this, To), (0, Iz.k)(this, co, 1))), Xs.set(this, ((0, Iz.k)(this, jo), (0, Iz.k)(this, Ao, !1))), Os.set(this, ((0, Iz.k)(this, yo), (0, Iz.k)(this, Mo, !1))), os.set(this, ((0, Iz.k)(this, ho), (0, Iz.k)(this, Qo, .4))), vs.set(this, ((0, Iz.k)(this, ko), (0, Iz.k)(this, io, !1))), Us.set(this, ((0, Iz.k)(this, Lo), (0, Iz.k)(this, no, !1))), Ks.set(this, ((0, Iz.k)(this, ao), (0, Iz.k)(this, qo, !1))), us.set(this, ((0, Iz.k)(this, So), (0, Iz.k)(this, Vo, !1))), Ns.set(this, ((0, Iz.k)(this, Ro), (0, Iz.k)(this, po, !1))), bs.set(this, ((0, Iz.k)(this, fo), (0, Iz.k)(this, Eo, .05))), ws.set(this, ((0, Iz.k)(this, zv), (0, Iz.k)(this, tv, !1))), Ds.set(this, ((0, Iz.k)(this, sv), (0, Iz.k)(this, Fv, !1))), gs.set(this, ((0, Iz.k)(this, Wv), (0, Iz.k)(this, Xv, 4))), Hs.set(this, ((0, Iz.k)(this, Ov), (0, Iz.k)(this, ov, !1))), Bs.set(this, ((0, Iz.k)(this, vv), (0, Iz.k)(this, Uv, !1))), Ps.set(this, ((0, Iz.k)(this, Kv), (0, Iz.k)(this, uv, !1))), rs.set(this, ((0, Iz.k)(this, Nv), (0, Iz.k)(this, bv, !1))), Ys.set(this, ((0, Iz.k)(this, wv), (0, Iz.k)(this, Dv, !1))), xs.set(this, ((0, Iz.k)(this, gv), (0, Iz.k)(this, Hv, null))), ms.set(this, ((0, Iz.k)(this, Bv), (0, Iz.k)(this, Pv, !1))), Is.set(this, ((0, Iz.k)(this, rv), (0, Iz.k)(this, Yv, !1))), Cs.set(this, ((0, Iz.k)(this, xv), (0, Iz.k)(this, mv, !0))), es.set(this, ((0, Iz.k)(this, Jv), (0, Iz.k)(this, Iv, !0))), Zs.set(this, ((0, Iz.k)(this, Cv), (0, Iz.k)(this, ev, !1))), Gs.set(this, ((0, Iz.k)(this, Zv), (0, Iz.k)(this, Gv, !1))), this._lightingInfos = ((0, Iz.k)(this, Tv), new hz.q(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = Xz.b.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Zz.h(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Ts.set(this, (0, Iz.k)(this, cv, 0)), this.debugLimit = ((0, Iz.k)(this, jv), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = Xz.b.MATERIAL_OPAQUE, this.aJ() && !this.aJ()?.FD().isWebGPU && this.aJ().FD().jD < 2 && ez.e.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), zz._noiseTextures[this.aJ().uniqueId] || (zz._noiseTextures[this.aJ().uniqueId] = new Gz.g(Jt.j.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.aJ(), !1, !0, 1), this.aJ().qJ.addOnce((() => {
              zz._noiseTextures[this.aJ().uniqueId]?.dispose(), delete zz._noiseTextures[this.aJ().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Rz.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), Rz.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Mz(this.aJ()), this._environmentFuzzBRDFTexture = yz(this.aJ()), this.prePassConfiguration = new nz.c, this._propertyList = {};
            for (const zz of Object.getOwnPropertyNames(this)) {
              const tz = this[zz];
              tz instanceof qt && (this._propertyList[zz] = tz)
            }
            Object.keys(this._propertyList).forEach((zz => {
              const tz = this._propertyList[zz];
              let sz = this._uniformsList[tz.targetUniformName];
              sz ? sz.numComponents !== tz.targetUniformComponentNum ? ez.e.Error(`Uniform ${tz.targetUniformName} already exists of size ${sz.numComponents}, but trying to set it to ${tz.targetUniformComponentNum}.`) : sz.requiredDefine !== tz.requiredDefine && (sz.requiredDefine = void 0) : (sz = new nt(tz.targetUniformName, tz.targetUniformComponentNum), sz.requiredDefine = tz.requiredDefine, this._uniformsList[tz.targetUniformName] = sz), "" === sz.firstLinkedKey && (sz.firstLinkedKey = tz.name), sz.linkedProperties[tz.name] = tz
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const zz of Object.getOwnPropertyNames(this)) {
              const tz = this[zz];
              tz instanceof St && (this._samplersList[zz] = tz)
            }
            for (const zz in this._samplersList) {
              const tz = this._samplersList[zz].textureDefine;
              this._samplerDefines[tz] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[tz + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[tz + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(Rz.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(Rz.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(zz) {
            this._transparencyMode !== zz && (this._transparencyMode = zz, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== Xz.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(zz) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(zz)
          }
          clone(tz) {
            let sz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Wz = mt.e.Clone((() => new zz(tz, this.aJ())), this, {
              cloneTexturesOnlyOnce: sz
            });
            return Wz.id = tz, Wz.name = tz, this.stencil.copyTo(Wz.stencil), this._clonePlugins(Wz, Fz), Wz
          }
          serialize() {
            const zz = super.serialize();
            return zz.customType = "BABYLON.OpenPBRMaterial", zz
          }
          static Parse(tz, sz, Fz) {
            const Wz = mt.e.Parse((() => new zz(tz.name, sz)), tz, sz, Fz);
            return tz.stencil && Wz.stencil.parse(tz.stencil, sz, Fz), Xz.b._ParsePlugins(tz, Wz, sz, Fz), Wz
          }
          forceCompilation(zz, tz, sz) {
            const Fz = {
              clipPlane: !1,
              useInstances: !1,
              ...sz
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const sz = new pt({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Wz = this._prepareEffect(zz, zz, sz, void 0, void 0, Fz.useInstances, Fz.clipPlane);
              this._onEffectCreatedObservable && (Lt.effect = Wz, Lt.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Lt)), Wz.isReady() ? tz && tz(this) : Wz.onCompileObservable.add((() => {
                tz && tz(this)
              }))
            })()
          }
          isReadyForSubMesh(tz, sz, Fz) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Wz = sz._drawWrapper;
            if (Wz.effect && this.isFrozen && Wz._wasPreviouslyReady && Wz._wasPreviouslyUsingInstances === Fz) return !0;
            sz.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), sz.materialDefines = new pt({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const Xz = sz.materialDefines;
            if (this._isReadyForSubMesh(sz)) return !0;
            const Oz = this.aJ(),
              oz = Oz.FD();
            if (Xz._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Oz.texturesEnabled)) {
              for (const zz in this._samplersList) {
                const tz = this._samplersList[zz];
                if (tz.value && !tz.value.isReadyOrNotBlocking()) return !1
              }
              const tz = this._getRadianceTexture();
              if (tz && Rz.b.ReflectionTextureEnabled) {
                if (!tz.isReadyOrNotBlocking()) return !1;
                if (tz.irradianceTexture) {
                  if (!tz.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!tz.sphericalPolynomial && tz.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && Rz.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && Rz.b.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && Rz.b.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (zz._noiseTextures[Oz.uniqueId] && !zz._noiseTextures[Oz.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Xz, this._eventInfo.subMesh = sz, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Xz._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (Xz.AREALIGHTUSED)
              for (let zz = 0; zz < tz.lightSources.length; zz++)
                if (!tz.lightSources[zz]._isReady()) return !1;
            if (oz.getCaps().standardDerivatives || tz.isVerticesDataPresent(Qz.m.NormalKind) || (tz.createNormals(!0), ez.e.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + tz.name)), !(0, fz.d)(Oz, tz, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const vz = sz.effect,
              Uz = Xz._areLightsDisposed,
              Kz = this._prepareEffect(tz, sz.getRenderingMesh(), Xz, this.onCompiled, this.onError, Fz, null);
            let uz = !1;
            if (Kz)
              if (this._onEffectCreatedObservable && (Lt.effect = Kz, Lt.subMesh = sz, this._onEffectCreatedObservable.notifyObservers(Lt)), this.allowShaderHotSwapping && vz && !Kz.isReady()) {
                if (Xz.markAsUnprocessed(), uz = this.isFrozen, Uz) return Xz._areLightsDisposed = !0, !1
              } else Oz.resetCachedMaterial(), sz.setEffect(Kz, Xz, this._materialContext);
            return !(!sz.effect || !sz.effect.isReady()) && (Xz._renderId = Oz.getRenderId(), Wz._wasPreviouslyReady = !uz, Wz._wasPreviouslyUsingInstances = !!Fz, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const zz = this._uniformBuffer;
            zz.addUniform("vTangentSpaceParams", 2), zz.addUniform("vLightingIntensity", 4), zz.addUniform("pointSize", 1), zz.addUniform("vDebugMode", 2), zz.addUniform("renderTargetSize", 2), zz.addUniform("cameraInfo", 4), zz.addUniform("vTextureRepetitionHexTilingParams", 4), zz.addUniform("backgroundRefractionMatrix", 16), zz.addUniform("vBackgroundRefractionInfos", 3), (0, fz.lb)(zz, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((tz => {
              zz.addUniform(tz.name, tz.numComponents)
            })), Object.values(this._samplersList).forEach((tz => {
              zz.addUniform(tz.samplerInfoName, 2), zz.addUniform(tz.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(zz, tz, sz, Fz) {
            if (0 === this.geometryThickness) zz.updateFloat("vGeometryThickness", 0);
            else {
              Fz.getRenderingMesh().getWorldMatrix().decompose(hz.m.XD[0]);
              const tz = Math.max(Math.abs(hz.m.XD[0].x), Math.abs(hz.m.XD[0].y), Math.abs(hz.m.XD[0].z));
              zz.updateFloat("vGeometryThickness", this.geometryThickness * tz)
            }
          }
          bindForSubMesh(tz, sz, Fz) {
            const Wz = this.aJ(),
              Xz = Fz.materialDefines;
            if (!Xz) return;
            const Oz = Fz.effect;
            if (!Oz) return;
            this._activeEffect = Oz, sz.getMeshUniformBuffer().bindToEffect(Oz, "Mesh"), sz.transferToEffect(tz);
            const oz = Wz.FD();
            this._uniformBuffer.bindToEffect(Oz, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Wz, sz, tz, this.isFrozen), bt.c.Bind(oz.currentRenderPassId, this._activeEffect, sz, tz, this);
            const vz = Wz.activeCamera;
            vz ? this._uniformBuffer.updateFloat4("cameraInfo", vz.minZ, vz.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Uz = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Uz[0], Uz[1], Uz[2], Uz[3]), this._eventInfo.subMesh = Fz, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Xz.OBJECTSPACE_NORMALMAP && (tz.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Kz = this._mustRebind(Wz, Oz, Fz, sz.visibility),
              uz = oz._features.needToAlwaysBindUniformBuffers;
            (0, fz.g)(sz, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, ut.d)(this._activeEffect, this._vertexPullingMetadata);
            const Nz = this._uniformBuffer;
            if (Kz) {
              this.bindViewProjection(Oz);
              const tz = this._getRadianceTexture();
              if (!Nz.useUbo || !this.isFrozen || !Nz.isSync || Fz._drawWrapper._forceRebindOnNextCall) {
                if (Wz.texturesEnabled) {
                  for (const zz in this._samplersList) {
                    const tz = this._samplersList[zz];
                    tz.value && (Nz.updateFloat2(tz.samplerInfoName, tz.value.coordinatesIndex, tz.value.level), (0, fz.x)(tz.value, Nz, tz.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Wz._mirroredCameraPosition ? Nz.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Nz.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, fz.n)(Wz, Xz, Nz, az.c.White(), tz, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && Nz.updateFloat("pointSize", this.pointSize);
                const zz = this._uniformsArray;
                for (let tz = 0, sz = zz.length; tz < sz; tz++) {
                  const sz = zz[tz];
                  (void 0 === sz.requiredDefine || Xz[sz.requiredDefine]) && (4 === sz.numComponents ? (sz.populateVectorFromLinkedProperties(hz.m.Vector4[0]), Nz.updateVector4(sz.name, hz.m.Vector4[0])) : 3 === sz.numComponents ? (sz.populateVectorFromLinkedProperties(hz.m.XD[0]), Nz.updateVector3(sz.name, hz.m.XD[0])) : 2 === sz.numComponents ? (sz.populateVectorFromLinkedProperties(hz.m.Vector2[0]), Nz.updateFloat2(sz.name, hz.m.Vector2[0].x, hz.m.Vector2[0].y)) : 1 === sz.numComponents && Nz.updateFloat(sz.name, sz.linkedProperties[sz.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Wz.environmentIntensity, this._lightingInfos.w = 1, Nz.updateVector4("vLightingIntensity", this._lightingInfos), Nz.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Wz.texturesEnabled) {
                for (const zz in this._samplersList) {
                  const tz = this._samplersList[zz];
                  tz.value && Nz.setTexture(tz.samplerName, tz.value)
                }
                if ((0, fz.q)(Wz, Xz, Nz, tz, this.realTimeFiltering), Xz.ENVIRONMENTBRDF && Nz.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), Xz.FUZZENVIRONMENTBRDF && Nz.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), Xz.REFRACTED_BACKGROUND && (Nz.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), Nz.y5("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), hz.m.XD[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), Nz.updateVector3("vBackgroundRefractionInfos", hz.m.XD[1])), (Xz.ANISOTROPIC || Xz.FUZZ || Xz.REFRACTED_BACKGROUND || Xz.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Nz.setTexture("blueNoiseSampler", zz._noiseTextures[this.aJ().uniqueId]), Xz.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const zz = this.sssIrradianceTexture.getSize().width,
                    tz = this.sssIrradianceTexture.getSize().height;
                  Nz.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), Nz.setTexture("sceneDepthSampler", this.sssDepthTexture), Nz.updateFloat2("renderTargetSize", zz, tz)
                }
              }
              this.aJ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(sz) && this.aJ().depthPeelingRenderer.bind(Oz), this._eventInfo.subMesh = Fz, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Kt.g)(this._activeEffect, this, Wz), this.bindEyePosition(Oz)
            } else uz && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Wz, Wz.FD(), Fz), !Kz && this.isFrozen && !uz || !Wz.lightsEnabled || this._disableLighting || (0, fz.s)(Wz, sz, this._activeEffect, Xz, this._maxSimultaneousLights), !Kz && this.isFrozen || (this.bindView(Oz), (0, fz.j)(Wz, sz, this._activeEffect, !0), Xz.NUM_MORPH_INFLUENCERS && (0, fz.v)(sz, this._activeEffect), Xz.BAKED_VERTEX_ANIMATION_TEXTURE && sz.bakedVertexAnimationManager?.bind(Oz, Xz.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, fz.t)(Xz, this._activeEffect, Wz)), this._afterBind(sz, this._activeEffect, Fz), Nz.update()
          }
          getAnimatables() {
            const zz = super.getAnimatables();
            for (const tz in this._samplersList) {
              const sz = this._samplersList[tz];
              sz.value && sz.value.animations && sz.value.animations.length > 0 && zz.push(sz.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && zz.push(this._radianceTexture), zz
          }
          getActiveTextures() {
            const zz = super.getActiveTextures();
            for (const tz in this._samplersList) {
              const sz = this._samplersList[tz];
              sz.value && zz.push(sz.value)
            }
            return this._radianceTexture && zz.push(this._radianceTexture), zz
          }
          hasTexture(zz) {
            if (super.hasTexture(zz)) return !0;
            for (const tz in this._samplersList) {
              if (this._samplersList[tz].value === zz) return !0
            }
            return this._radianceTexture === zz
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(zz, tz) {
            if (this._breakShaderLoadedCheck = !0, tz) {
              this._environmentBRDFTexture && this.aJ().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.aJ().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const zz in this._samplersList) {
                const tz = this._samplersList[zz];
                tz.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(zz, tz)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.aJ().environmentTexture
          }
          _prepareEffect(tz, sz, Fz) {
            let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Oz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(tz, sz, Fz, Oz, oz), !Fz.isDirty) return null;
            Fz.markAsProcessed();
            const vz = this.aJ().FD(),
              Uz = new pz.e;
            let Kz = 0;
            Fz.USESPHERICALINVERTEX && Uz.addFallback(Kz++, "USESPHERICALINVERTEX"), Fz.FOG && Uz.addFallback(Kz, "FOG"), Fz.SPECULARAA && Uz.addFallback(Kz, "SPECULARAA"), Fz.POINTSIZE && Uz.addFallback(Kz, "POINTSIZE"), Fz.LOGARITHMICDEPTH && Uz.addFallback(Kz, "LOGARITHMICDEPTH"), Fz.PARALLAX && Uz.addFallback(Kz, "PARALLAX"), Fz.PARALLAX_RHS && Uz.addFallback(Kz, "PARALLAX_RHS"), Fz.PARALLAXOCCLUSION && Uz.addFallback(Kz++, "PARALLAXOCCLUSION"), Fz.ENVIRONMENTBRDF && Uz.addFallback(Kz++, "ENVIRONMENTBRDF"), Fz.TANGENT && Uz.addFallback(Kz++, "TANGENT"), Kz = (0, fz.y)(Fz, Uz, this._maxSimultaneousLights, Kz), Fz.SPECULARTERM && Uz.addFallback(Kz++, "SPECULARTERM"), Fz.USESPHERICALFROMREFLECTIONMAP && Uz.addFallback(Kz++, "USESPHERICALFROMREFLECTIONMAP"), Fz.USEIRRADIANCEMAP && Uz.addFallback(Kz++, "USEIRRADIANCEMAP"), Fz.NORMAL && Uz.addFallback(Kz++, "NORMAL"), Fz.VERTEXCOLOR && Uz.addFallback(Kz++, "VERTEXCOLOR"), Fz.MORPHTARGETS && Uz.addFallback(Kz++, "MORPHTARGETS"), Fz.MULTIVIEW && Uz.addFallback(0, "MULTIVIEW");
            const uz = [Qz.m.PositionKind];
            Fz.NORMAL && uz.push(Qz.m.NormalKind), Fz.TANGENT && uz.push(Qz.m.TangentKind);
            for (let zz = 1; zz <= 6; ++zz) Fz["UV" + zz] && uz.push(`uv${1===zz?"":zz}`);
            Fz.VERTEXCOLOR && uz.push(Qz.m.ColorKind), (0, fz.F)(uz, tz, Fz, Uz), (0, fz.J)(uz, Fz), (0, fz.N)(uz, tz, Fz), (0, fz.C)(uz, tz, Fz);
            let Nz = "openpbr";
            const bz = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const zz in this._uniformsList) bz.push(zz);
            const wz = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Fz.FUZZENVIRONMENTBRDF && wz.push("environmentFuzzBrdfSampler"), Fz.REFRACTED_BACKGROUND && wz.push("backgroundRefractionSampler"), (Fz.ANISOTROPIC || Fz.FUZZ || Fz.REFRACTED_BACKGROUND || Fz.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && wz.push("blueNoiseSampler"), Fz.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (wz.push("sceneIrradianceSampler"), wz.push("sceneDepthSampler"));
            for (const zz in this._samplersList) {
              const tz = this._samplersList[zz];
              wz.push(tz.samplerName), bz.push(tz.samplerInfoName), bz.push(tz.samplerMatrixName)
            }(0, fz.pb)(bz, wz, !0);
            const Dz = ["Material", "Scene", "Mesh"],
              gz = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Fz.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = Uz, this._eventInfo.fallbackRank = Kz, this._eventInfo.defines = Fz, this._eventInfo.uniforms = bz, this._eventInfo.attributes = uz, this._eventInfo.samplers = wz, this._eventInfo.uniformBuffersNames = Dz, this._eventInfo.customCode = void 0, this._eventInfo.mesh = tz, this._eventInfo.indexParameters = gz, this._callbackPluginEventGeneric(128, this._eventInfo), bt.c.AddUniformsAndSamplers(bz, wz), nz.c.AddUniforms(bz), nz.c.AddSamplers(wz), (0, Kt.d)(bz), this._useVertexPulling) {
              const zz = sz?.geometry;
              zz && (this._vertexPullingMetadata = (0, ut.f)(zz), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((zz, tz) => {
                bz.push(`vp_${tz}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            Sz.d && (Sz.d.PrepareUniforms(bz, Fz), Sz.d.PrepareSamplers(wz, Fz)), (0, fz.sb)({
              uniformsNames: bz,
              uniformBuffersNames: Dz,
              samplers: wz,
              defines: Fz,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const Hz = {};
            this.customShaderNameResolve && (Nz = this.customShaderNameResolve(Nz, bz, Dz, wz, Fz, uz, Hz));
            const Bz = Fz.toString(),
              Pz = vz.createEffect(Nz, {
                attributes: uz,
                uniformsNames: bz,
                uniformBuffersNames: Dz,
                samplers: wz,
                defines: Bz,
                fallbacks: Uz,
                onCompiled: Wz,
                onError: Xz,
                indexParameters: gz,
                processFinalCode: Hz.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Fz.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: zz._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, vz);
            return this._eventInfo.customCode = void 0, Pz
          }
          _prepareDefines(tz, sz, Fz) {
            let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Oz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const oz = sz.hasThinInstances,
              vz = this.aJ(),
              Uz = vz.FD();
            (0, fz.X)(vz, tz, Fz, !0, this._maxSimultaneousLights, this._disableLighting), Fz._needNormals = !0, (0, fz.cb)(vz, Fz);
            const Kz = this.needAlphaBlendingForMesh(tz) && this.aJ().useOrderIndependentTransparency;
            if ((0, fz.hb)(vz, Fz, this.canRenderToMRT && !Kz), (0, fz.eb)(vz, Fz, Kz), bt.c.PrepareDefines(Uz.currentRenderPassId, tz, Fz), Fz._areTexturesDirty) {
              Fz._needUVs = !1;
              for (let zz = 1; zz <= 6; ++zz) Fz["MAINUV" + zz] = !1;
              if (vz.texturesEnabled) {
                for (const sz in this._samplersList) {
                  const zz = this._samplersList[sz];
                  zz.value ? ((0, fz.Y)(zz.value, Fz, zz.textureDefine), Fz[zz.textureDefine + "_GAMMA"] = zz.value.gammaSpace) : Fz[zz.textureDefine] = !1
                }
                const zz = this._getRadianceTexture(),
                  tz = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Uz.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, fz.U)(vz, zz, Fz, this.realTimeFiltering, this.realTimeFilteringQuality, !tz), this._baseMetalnessTexture && (Fz.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Fz.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Fz.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Fz.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Fz.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Fz.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Fz.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Fz.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Fz.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Fz.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Fz.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Fz.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && Rz.b.DiffuseTextureEnabled ? (Fz.PARALLAX = !0, Fz.PARALLAX_RHS = vz.useRightHandedSystem, Fz.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Fz.PARALLAX = !1, Fz.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Fz.PARALLAX = !1, Fz.PARALLAX_RHS = !1, Fz.PARALLAXOCCLUSION = !1, Fz.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Rz.b.ReflectionTextureEnabled ? (Fz.ENVIRONMENTBRDF = !0, Fz.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Fz.ENVIRONMENTBRDF = !1, Fz.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Fz.FUZZENVIRONMENTBRDF = !0 : Fz.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Fz.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && Rz.b.RefractionTextureEnabled, Fz.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Fz.REFRACTED_LIGHTS = !0;
                  const zz = this._getRadianceTexture();
                  zz ? (Fz.REFRACTED_ENVIRONMENT = Rz.b.RefractionTextureEnabled, Fz.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.aJ().useRightHandedSystem ? !zz.invertZ : zz.invertZ, Fz.REFRACTED_ENVIRONMENT_LOCAL_CUBE = zz.isCube && zz.boundingBoxSize) : Fz.REFRACTED_ENVIRONMENT = !1
                } else Fz.REFRACTED_BACKGROUND = !1, Fz.REFRACTED_LIGHTS = !1, Fz.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Fz.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Fz.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === Xz.b.LIGHTFALLOFF_STANDARD ? (Fz.USEPHYSICALLIGHTFALLOFF = !1, Fz.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === Xz.b.LIGHTFALLOFF_GLTF ? (Fz.USEPHYSICALLIGHTFALLOFF = !1, Fz.USEGLTFLIGHTFALLOFF = !0) : (Fz.USEPHYSICALLIGHTFALLOFF = !0, Fz.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Fz.TWOSIDEDLIGHTING = !0 : Fz.TWOSIDEDLIGHTING = !1, Fz.MIRRORED = !!vz._mirroredCameraPosition, Fz.SPECULARAA = Uz.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Fz._areTexturesDirty || Fz._areMiscDirty) && (Fz.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Fz.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Fz.ALPHABLEND = this.needAlphaBlendingForMesh(tz)), Fz._areTexturesDirty && (Fz.TEXTURE_REPETITION_MODE = Uz.version > 1 || Uz.isWebGPU ? this.textureRepetitionMode : 0), Fz._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Fz), Fz.FORCENORMALFORWARD = this._forceNormalForward, Fz.RADIANCEOCCLUSION = this._useRadianceOcclusion, Fz.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && zz._noiseTextures[vz.uniqueId] && Rz.b.ReflectionTextureEnabled ? (Fz.ANISOTROPIC = !0, tz.isVerticesDataPresent(Qz.m.TangentKind) || (Fz._needUVs = !0, Fz.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Fz.USE_GLTF_STYLE_ANISOTROPY = !0), Fz.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Fz.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Fz.ANISOTROPIC = !1, Fz.USE_GLTF_STYLE_ANISOTROPY = !1, Fz.ANISOTROPIC_BASE = !1, Fz.ANISOTROPIC_COAT = !1), Fz.THIN_FILM = this.thinFilmWeight > 0, Fz.IRIDESCENCE = this.thinFilmWeight > 0, Fz.DISPERSION = this.transmissionDispersionScale > 0, Fz.SCATTERING = this.hasScattering;
            if (Fz.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Fz.TRANSMISSION_SLAB = this.transmissionWeight > 0, Fz.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Fz.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Fz.PREPASS && (Fz.SUBSURFACE_SLAB || Fz.TRANSMISSION_SLAB_VOLUME)) {
              let zz = !1;
              if (!this.sssIrradianceTexture && vz.geometryBufferRenderer) {
                const tz = vz.geometryBufferRenderer.getTextureIndex(kt.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = vz.geometryBufferRenderer.getGBuffer().textures[tz], zz = !0
              }
              if (!this.sssDepthTexture && vz.geometryBufferRenderer) {
                const tz = vz.geometryBufferRenderer.getTextureIndex(kt.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = vz.geometryBufferRenderer.getGBuffer().textures[tz], zz = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Fz.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, zz && (Fz.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Fz.FUZZ = this.fuzzWeight > 0 && Rz.b.ReflectionTextureEnabled, Fz.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Fz.FUZZ ? (tz.isVerticesDataPresent(Qz.m.TangentKind) || (Fz._needUVs = !0, Fz.MAINUV1 = !0), this._environmentFuzzBRDFTexture = yz(this.aJ()), Fz.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Fz.FUZZENVIRONMENTBRDF = !1, Fz.FUZZ_IBL_SAMPLES = 0), Fz._areMiscDirty && ((0, fz._)(tz, vz, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(tz), Fz, this._applyDecalMapAfterDetailMap, this._useVertexPulling, sz, this._isVertexOutputInvariant), Fz.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !tz.isVerticesDataPresent(Qz.m.NormalKind), Fz.DEBUGMODE = this._debugMode), (0, fz.S)(vz, Uz, this, Fz, !!Wz, Oz, oz), this._eventInfo.defines = Fz, this._eventInfo.mesh = tz, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, fz.P)(tz, Fz, !0, !0, !0, this._transparencyMode !== Xz.b.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, tz = new WeakMap, Fz = new WeakMap, Wz = new WeakMap, Oz = new WeakMap, oz = new WeakMap, vz = new WeakMap, Uz = new WeakMap, Kz = new WeakMap, uz = new WeakMap, Nz = new WeakMap, bz = new WeakMap, wz = new WeakMap, Dz = new WeakMap, gz = new WeakMap, Hz = new WeakMap, Bz = new WeakMap, Pz = new WeakMap, rz = new WeakMap, Yz = new WeakMap, xz = new WeakMap, mz = new WeakMap, Jz = new WeakMap, Tz = new WeakMap, cz = new WeakMap, jz = new WeakMap, Az = new WeakMap, dz = new WeakMap, kz = new WeakMap, iz = new WeakMap, Lz = new WeakMap, lz = new WeakMap, qz = new WeakMap, Vz = new WeakMap, Ez = new WeakMap, zt = new WeakMap, tt = new WeakMap, st = new WeakMap, Ft = new WeakMap, Wt = new WeakMap, Xt = new WeakMap, Ot = new WeakMap, ot = new WeakMap, vt = new WeakMap, Ut = new WeakMap, wt = new WeakMap, Dt = new WeakMap, gt = new WeakMap, Ht = new WeakMap, Bt = new WeakMap, Pt = new WeakMap, rt = new WeakMap, Yt = new WeakMap, xt = new WeakMap, It = new WeakMap, Ct = new WeakMap, et = new WeakMap, Zt = new WeakMap, Gt = new WeakMap, Tt = new WeakMap, ct = new WeakMap, jt = new WeakMap, At = new WeakMap, yt = new WeakMap, Mt = new WeakMap, dt = new WeakMap, ht = new WeakMap, Qt = new WeakMap, it = new WeakMap, lt = new WeakMap, Vt = new WeakMap, Rt = new WeakMap, Et = new WeakMap, zs = new WeakMap, ts = new WeakMap, ss = new WeakMap, Fs = new WeakMap, Ws = new WeakMap, Xs = new WeakMap, Os = new WeakMap, os = new WeakMap, vs = new WeakMap, Us = new WeakMap, Ks = new WeakMap, us = new WeakMap, Ns = new WeakMap, bs = new WeakMap, ws = new WeakMap, Ds = new WeakMap, gs = new WeakMap, Hs = new WeakMap, Bs = new WeakMap, Ps = new WeakMap, rs = new WeakMap, Ys = new WeakMap, xs = new WeakMap, ms = new WeakMap, Is = new WeakMap, Cs = new WeakMap, es = new WeakMap, Zs = new WeakMap, Gs = new WeakMap, Ts = new WeakMap, (() => {
          const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(AW[Symbol.metadata] ?? null) : void 0;
          cs = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], As = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], ys = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], Ms = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], ds = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], hs = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], Qs = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], ks = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], is = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], Ls = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], ls = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], ns = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], as = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], qs = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], Ss = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], Vs = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], Rs = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], ps = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], fs = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], Es = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], zF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], tF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], sF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], FF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], WF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], XF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], OF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], oF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], vF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], UF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], KF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], uF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], NF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], bF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], wF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], DF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], gF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], HF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], BF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], PF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], rF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], YF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], xF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], mF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], JF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], IF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], CF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], eF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], ZF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], GF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], TF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], cF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], jF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], AF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], yF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], MF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], dF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], hF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], QF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], kF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], iF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], LF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], lF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], nF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], aF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], qF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], SF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], VF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], RF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], pF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], fF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], EF = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], zW = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], tW = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], sW = [(0, Cz.e)("_markAllSubMeshesAsTexturesDirty")], FW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], WW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], XW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], OW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], oW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], vW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], UW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], KW = [(0, Cz.J)()], uW = [(0, Cz.J)()], NW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], bW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], wW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], DW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], gW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsLightsDirty")], HW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], BW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsLightsDirty")], PW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], rW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], xW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], mW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], JW = [(0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], IW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], CW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], eW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], ZW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], GW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], TW = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], cW = [(0, Cz.i)("_markAllSubMeshesAsMiscDirty")], jW = [(0, Cz.J)()], (0, Iz.h)(zz, null, cs, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseWeight" in zz,
              get: zz => zz.baseWeight,
              set: (zz, tz) => {
                zz.baseWeight = tz
              }
            },
            metadata: tz
          }, MW, dW), (0, Iz.h)(zz, null, As, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseWeightTexture" in zz,
              get: zz => zz.baseWeightTexture,
              set: (zz, tz) => {
                zz.baseWeightTexture = tz
              }
            },
            metadata: tz
          }, hW, QW), (0, Iz.h)(zz, null, ys, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseColor" in zz,
              get: zz => zz.baseColor,
              set: (zz, tz) => {
                zz.baseColor = tz
              }
            },
            metadata: tz
          }, kW, iW), (0, Iz.h)(zz, null, Ms, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseColorTexture" in zz,
              get: zz => zz.baseColorTexture,
              set: (zz, tz) => {
                zz.baseColorTexture = tz
              }
            },
            metadata: tz
          }, LW, lW), (0, Iz.h)(zz, null, ds, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseDiffuseRoughness" in zz,
              get: zz => zz.baseDiffuseRoughness,
              set: (zz, tz) => {
                zz.baseDiffuseRoughness = tz
              }
            },
            metadata: tz
          }, nW, aW), (0, Iz.h)(zz, null, hs, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseDiffuseRoughnessTexture" in zz,
              get: zz => zz.baseDiffuseRoughnessTexture,
              set: (zz, tz) => {
                zz.baseDiffuseRoughnessTexture = tz
              }
            },
            metadata: tz
          }, qW, SW), (0, Iz.h)(zz, null, Qs, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseMetalness" in zz,
              get: zz => zz.baseMetalness,
              set: (zz, tz) => {
                zz.baseMetalness = tz
              }
            },
            metadata: tz
          }, VW, RW), (0, Iz.h)(zz, null, ks, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseMetalnessTexture" in zz,
              get: zz => zz.baseMetalnessTexture,
              set: (zz, tz) => {
                zz.baseMetalnessTexture = tz
              }
            },
            metadata: tz
          }, pW, fW), (0, Iz.h)(zz, null, is, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularWeight" in zz,
              get: zz => zz.specularWeight,
              set: (zz, tz) => {
                zz.specularWeight = tz
              }
            },
            metadata: tz
          }, EW, zX), (0, Iz.h)(zz, null, Ls, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularWeightTexture" in zz,
              get: zz => zz.specularWeightTexture,
              set: (zz, tz) => {
                zz.specularWeightTexture = tz
              }
            },
            metadata: tz
          }, tX, sX), (0, Iz.h)(zz, null, ls, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularColor" in zz,
              get: zz => zz.specularColor,
              set: (zz, tz) => {
                zz.specularColor = tz
              }
            },
            metadata: tz
          }, FX, WX), (0, Iz.h)(zz, null, ns, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularColorTexture" in zz,
              get: zz => zz.specularColorTexture,
              set: (zz, tz) => {
                zz.specularColorTexture = tz
              }
            },
            metadata: tz
          }, XX, OX), (0, Iz.h)(zz, null, as, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularRoughness" in zz,
              get: zz => zz.specularRoughness,
              set: (zz, tz) => {
                zz.specularRoughness = tz
              }
            },
            metadata: tz
          }, oX, vX), (0, Iz.h)(zz, null, qs, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularRoughnessTexture" in zz,
              get: zz => zz.specularRoughnessTexture,
              set: (zz, tz) => {
                zz.specularRoughnessTexture = tz
              }
            },
            metadata: tz
          }, UX, KX), (0, Iz.h)(zz, null, Ss, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularRoughnessAnisotropy" in zz,
              get: zz => zz.specularRoughnessAnisotropy,
              set: (zz, tz) => {
                zz.specularRoughnessAnisotropy = tz
              }
            },
            metadata: tz
          }, uX, NX), (0, Iz.h)(zz, null, Vs, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularRoughnessAnisotropyTexture" in zz,
              get: zz => zz.specularRoughnessAnisotropyTexture,
              set: (zz, tz) => {
                zz.specularRoughnessAnisotropyTexture = tz
              }
            },
            metadata: tz
          }, bX, wX), (0, Iz.h)(zz, null, Rs, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularIor" in zz,
              get: zz => zz.specularIor,
              set: (zz, tz) => {
                zz.specularIor = tz
              }
            },
            metadata: tz
          }, DX, gX), (0, Iz.h)(zz, null, ps, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionWeight" in zz,
              get: zz => zz.transmissionWeight,
              set: (zz, tz) => {
                zz.transmissionWeight = tz
              }
            },
            metadata: tz
          }, HX, BX), (0, Iz.h)(zz, null, fs, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionWeightTexture" in zz,
              get: zz => zz.transmissionWeightTexture,
              set: (zz, tz) => {
                zz.transmissionWeightTexture = tz
              }
            },
            metadata: tz
          }, PX, rX), (0, Iz.h)(zz, null, Es, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionColor" in zz,
              get: zz => zz.transmissionColor,
              set: (zz, tz) => {
                zz.transmissionColor = tz
              }
            },
            metadata: tz
          }, YX, xX), (0, Iz.h)(zz, null, zF, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionColorTexture" in zz,
              get: zz => zz.transmissionColorTexture,
              set: (zz, tz) => {
                zz.transmissionColorTexture = tz
              }
            },
            metadata: tz
          }, mX, JX), (0, Iz.h)(zz, null, tF, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionDepth" in zz,
              get: zz => zz.transmissionDepth,
              set: (zz, tz) => {
                zz.transmissionDepth = tz
              }
            },
            metadata: tz
          }, IX, CX), (0, Iz.h)(zz, null, sF, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionDepthTexture" in zz,
              get: zz => zz.transmissionDepthTexture,
              set: (zz, tz) => {
                zz.transmissionDepthTexture = tz
              }
            },
            metadata: tz
          }, eX, ZX), (0, Iz.h)(zz, null, FF, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionScatter" in zz,
              get: zz => zz.transmissionScatter,
              set: (zz, tz) => {
                zz.transmissionScatter = tz
              }
            },
            metadata: tz
          }, GX, TX), (0, Iz.h)(zz, null, WF, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionScatterTexture" in zz,
              get: zz => zz.transmissionScatterTexture,
              set: (zz, tz) => {
                zz.transmissionScatterTexture = tz
              }
            },
            metadata: tz
          }, cX, jX), (0, Iz.h)(zz, null, XF, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionScatterAnisotropy" in zz,
              get: zz => zz.transmissionScatterAnisotropy,
              set: (zz, tz) => {
                zz.transmissionScatterAnisotropy = tz
              }
            },
            metadata: tz
          }, AX, yX), (0, Iz.h)(zz, null, OF, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionDispersionScale" in zz,
              get: zz => zz.transmissionDispersionScale,
              set: (zz, tz) => {
                zz.transmissionDispersionScale = tz
              }
            },
            metadata: tz
          }, MX, dX), (0, Iz.h)(zz, null, oF, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionDispersionScaleTexture" in zz,
              get: zz => zz.transmissionDispersionScaleTexture,
              set: (zz, tz) => {
                zz.transmissionDispersionScaleTexture = tz
              }
            },
            metadata: tz
          }, hX, QX), (0, Iz.h)(zz, null, vF, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionDispersionAbbeNumber" in zz,
              get: zz => zz.transmissionDispersionAbbeNumber,
              set: (zz, tz) => {
                zz.transmissionDispersionAbbeNumber = tz
              }
            },
            metadata: tz
          }, kX, iX), (0, Iz.h)(zz, null, UF, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceWeight" in zz,
              get: zz => zz.subsurfaceWeight,
              set: (zz, tz) => {
                zz.subsurfaceWeight = tz
              }
            },
            metadata: tz
          }, LX, lX), (0, Iz.h)(zz, null, KF, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceWeightTexture" in zz,
              get: zz => zz.subsurfaceWeightTexture,
              set: (zz, tz) => {
                zz.subsurfaceWeightTexture = tz
              }
            },
            metadata: tz
          }, nX, aX), (0, Iz.h)(zz, null, uF, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceColor" in zz,
              get: zz => zz.subsurfaceColor,
              set: (zz, tz) => {
                zz.subsurfaceColor = tz
              }
            },
            metadata: tz
          }, qX, SX), (0, Iz.h)(zz, null, NF, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceColorTexture" in zz,
              get: zz => zz.subsurfaceColorTexture,
              set: (zz, tz) => {
                zz.subsurfaceColorTexture = tz
              }
            },
            metadata: tz
          }, VX, RX), (0, Iz.h)(zz, null, bF, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceRadius" in zz,
              get: zz => zz.subsurfaceRadius,
              set: (zz, tz) => {
                zz.subsurfaceRadius = tz
              }
            },
            metadata: tz
          }, pX, fX), (0, Iz.h)(zz, null, wF, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceRadiusScale" in zz,
              get: zz => zz.subsurfaceRadiusScale,
              set: (zz, tz) => {
                zz.subsurfaceRadiusScale = tz
              }
            },
            metadata: tz
          }, EX, zO), (0, Iz.h)(zz, null, DF, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceRadiusScaleTexture" in zz,
              get: zz => zz.subsurfaceRadiusScaleTexture,
              set: (zz, tz) => {
                zz.subsurfaceRadiusScaleTexture = tz
              }
            },
            metadata: tz
          }, tO, sO), (0, Iz.h)(zz, null, gF, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceScatterAnisotropy" in zz,
              get: zz => zz.subsurfaceScatterAnisotropy,
              set: (zz, tz) => {
                zz.subsurfaceScatterAnisotropy = tz
              }
            },
            metadata: tz
          }, FO, WO), (0, Iz.h)(zz, null, HF, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatWeight" in zz,
              get: zz => zz.coatWeight,
              set: (zz, tz) => {
                zz.coatWeight = tz
              }
            },
            metadata: tz
          }, XO, OO), (0, Iz.h)(zz, null, BF, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatWeightTexture" in zz,
              get: zz => zz.coatWeightTexture,
              set: (zz, tz) => {
                zz.coatWeightTexture = tz
              }
            },
            metadata: tz
          }, oO, vO), (0, Iz.h)(zz, null, PF, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatColor" in zz,
              get: zz => zz.coatColor,
              set: (zz, tz) => {
                zz.coatColor = tz
              }
            },
            metadata: tz
          }, UO, KO), (0, Iz.h)(zz, null, rF, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatColorTexture" in zz,
              get: zz => zz.coatColorTexture,
              set: (zz, tz) => {
                zz.coatColorTexture = tz
              }
            },
            metadata: tz
          }, uO, NO), (0, Iz.h)(zz, null, YF, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatRoughness" in zz,
              get: zz => zz.coatRoughness,
              set: (zz, tz) => {
                zz.coatRoughness = tz
              }
            },
            metadata: tz
          }, bO, wO), (0, Iz.h)(zz, null, xF, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatRoughnessTexture" in zz,
              get: zz => zz.coatRoughnessTexture,
              set: (zz, tz) => {
                zz.coatRoughnessTexture = tz
              }
            },
            metadata: tz
          }, DO, gO), (0, Iz.h)(zz, null, mF, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatRoughnessAnisotropy" in zz,
              get: zz => zz.coatRoughnessAnisotropy,
              set: (zz, tz) => {
                zz.coatRoughnessAnisotropy = tz
              }
            },
            metadata: tz
          }, HO, BO), (0, Iz.h)(zz, null, JF, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatRoughnessAnisotropyTexture" in zz,
              get: zz => zz.coatRoughnessAnisotropyTexture,
              set: (zz, tz) => {
                zz.coatRoughnessAnisotropyTexture = tz
              }
            },
            metadata: tz
          }, PO, rO), (0, Iz.h)(zz, null, IF, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatIor" in zz,
              get: zz => zz.coatIor,
              set: (zz, tz) => {
                zz.coatIor = tz
              }
            },
            metadata: tz
          }, YO, xO), (0, Iz.h)(zz, null, CF, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatDarkening" in zz,
              get: zz => zz.coatDarkening,
              set: (zz, tz) => {
                zz.coatDarkening = tz
              }
            },
            metadata: tz
          }, mO, JO), (0, Iz.h)(zz, null, eF, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatDarkeningTexture" in zz,
              get: zz => zz.coatDarkeningTexture,
              set: (zz, tz) => {
                zz.coatDarkeningTexture = tz
              }
            },
            metadata: tz
          }, IO, CO), (0, Iz.h)(zz, null, ZF, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "fuzzWeight" in zz,
              get: zz => zz.fuzzWeight,
              set: (zz, tz) => {
                zz.fuzzWeight = tz
              }
            },
            metadata: tz
          }, eO, ZO), (0, Iz.h)(zz, null, GF, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "fuzzWeightTexture" in zz,
              get: zz => zz.fuzzWeightTexture,
              set: (zz, tz) => {
                zz.fuzzWeightTexture = tz
              }
            },
            metadata: tz
          }, GO, TO), (0, Iz.h)(zz, null, TF, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "fuzzColor" in zz,
              get: zz => zz.fuzzColor,
              set: (zz, tz) => {
                zz.fuzzColor = tz
              }
            },
            metadata: tz
          }, cO, jO), (0, Iz.h)(zz, null, cF, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "fuzzColorTexture" in zz,
              get: zz => zz.fuzzColorTexture,
              set: (zz, tz) => {
                zz.fuzzColorTexture = tz
              }
            },
            metadata: tz
          }, AO, yO), (0, Iz.h)(zz, null, jF, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: zz => "fuzzRoughness" in zz,
              get: zz => zz.fuzzRoughness,
              set: (zz, tz) => {
                zz.fuzzRoughness = tz
              }
            },
            metadata: tz
          }, MO, dO), (0, Iz.h)(zz, null, AF, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "fuzzRoughnessTexture" in zz,
              get: zz => zz.fuzzRoughnessTexture,
              set: (zz, tz) => {
                zz.fuzzRoughnessTexture = tz
              }
            },
            metadata: tz
          }, hO, QO), (0, Iz.h)(zz, null, yF, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryThinWalled" in zz,
              get: zz => zz.geometryThinWalled,
              set: (zz, tz) => {
                zz.geometryThinWalled = tz
              }
            },
            metadata: tz
          }, kO, iO), (0, Iz.h)(zz, null, MF, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryNormalTexture" in zz,
              get: zz => zz.geometryNormalTexture,
              set: (zz, tz) => {
                zz.geometryNormalTexture = tz
              }
            },
            metadata: tz
          }, LO, lO), (0, Iz.h)(zz, null, dF, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryTangent" in zz,
              get: zz => zz.geometryTangent,
              set: (zz, tz) => {
                zz.geometryTangent = tz
              }
            },
            metadata: tz
          }, nO, aO), (0, Iz.h)(zz, null, hF, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryTangentTexture" in zz,
              get: zz => zz.geometryTangentTexture,
              set: (zz, tz) => {
                zz.geometryTangentTexture = tz
              }
            },
            metadata: tz
          }, qO, SO), (0, Iz.h)(zz, null, QF, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryCoatNormalTexture" in zz,
              get: zz => zz.geometryCoatNormalTexture,
              set: (zz, tz) => {
                zz.geometryCoatNormalTexture = tz
              }
            },
            metadata: tz
          }, VO, RO), (0, Iz.h)(zz, null, kF, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryCoatTangent" in zz,
              get: zz => zz.geometryCoatTangent,
              set: (zz, tz) => {
                zz.geometryCoatTangent = tz
              }
            },
            metadata: tz
          }, pO, fO), (0, Iz.h)(zz, null, iF, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryCoatTangentTexture" in zz,
              get: zz => zz.geometryCoatTangentTexture,
              set: (zz, tz) => {
                zz.geometryCoatTangentTexture = tz
              }
            },
            metadata: tz
          }, EO, zo), (0, Iz.h)(zz, null, LF, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryOpacity" in zz,
              get: zz => zz.geometryOpacity,
              set: (zz, tz) => {
                zz.geometryOpacity = tz
              }
            },
            metadata: tz
          }, to, so), (0, Iz.h)(zz, null, lF, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryOpacityTexture" in zz,
              get: zz => zz.geometryOpacityTexture,
              set: (zz, tz) => {
                zz.geometryOpacityTexture = tz
              }
            },
            metadata: tz
          }, Fo, Wo), (0, Iz.h)(zz, null, nF, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryThickness" in zz,
              get: zz => zz.geometryThickness,
              set: (zz, tz) => {
                zz.geometryThickness = tz
              }
            },
            metadata: tz
          }, Xo, Oo), (0, Iz.h)(zz, null, aF, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryThicknessTexture" in zz,
              get: zz => zz.geometryThicknessTexture,
              set: (zz, tz) => {
                zz.geometryThicknessTexture = tz
              }
            },
            metadata: tz
          }, oo, vo), (0, Iz.h)(zz, null, qF, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: zz => "emissionLuminance" in zz,
              get: zz => zz.emissionLuminance,
              set: (zz, tz) => {
                zz.emissionLuminance = tz
              }
            },
            metadata: tz
          }, Uo, Ko), (0, Iz.h)(zz, null, SF, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "emissionColor" in zz,
              get: zz => zz.emissionColor,
              set: (zz, tz) => {
                zz.emissionColor = tz
              }
            },
            metadata: tz
          }, uo, No), (0, Iz.h)(zz, null, VF, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "emissionColorTexture" in zz,
              get: zz => zz.emissionColorTexture,
              set: (zz, tz) => {
                zz.emissionColorTexture = tz
              }
            },
            metadata: tz
          }, bo, wo), (0, Iz.h)(zz, null, RF, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "thinFilmWeight" in zz,
              get: zz => zz.thinFilmWeight,
              set: (zz, tz) => {
                zz.thinFilmWeight = tz
              }
            },
            metadata: tz
          }, Do, go), (0, Iz.h)(zz, null, pF, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "thinFilmWeightTexture" in zz,
              get: zz => zz.thinFilmWeightTexture,
              set: (zz, tz) => {
                zz.thinFilmWeightTexture = tz
              }
            },
            metadata: tz
          }, Ho, Bo), (0, Iz.h)(zz, null, fF, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: zz => "thinFilmThickness" in zz,
              get: zz => zz.thinFilmThickness,
              set: (zz, tz) => {
                zz.thinFilmThickness = tz
              }
            },
            metadata: tz
          }, Po, ro), (0, Iz.h)(zz, null, EF, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: zz => "thinFilmThicknessMin" in zz,
              get: zz => zz.thinFilmThicknessMin,
              set: (zz, tz) => {
                zz.thinFilmThicknessMin = tz
              }
            },
            metadata: tz
          }, Yo, xo), (0, Iz.h)(zz, null, zW, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "thinFilmThicknessTexture" in zz,
              get: zz => zz.thinFilmThicknessTexture,
              set: (zz, tz) => {
                zz.thinFilmThicknessTexture = tz
              }
            },
            metadata: tz
          }, mo, Jo), (0, Iz.h)(zz, null, tW, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: zz => "thinFilmIor" in zz,
              get: zz => zz.thinFilmIor,
              set: (zz, tz) => {
                zz.thinFilmIor = tz
              }
            },
            metadata: tz
          }, Io, Co), (0, Iz.h)(zz, null, sW, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "ambientOcclusionTexture" in zz,
              get: zz => zz.ambientOcclusionTexture,
              set: (zz, tz) => {
                zz.ambientOcclusionTexture = tz
              }
            },
            metadata: tz
          }, eo, Zo), (0, Iz.h)(zz, null, FW, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: zz => "directIntensity" in zz,
              get: zz => zz.directIntensity,
              set: (zz, tz) => {
                zz.directIntensity = tz
              }
            },
            metadata: tz
          }, Go, To), (0, Iz.h)(zz, null, WW, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: zz => "environmentIntensity" in zz,
              get: zz => zz.environmentIntensity,
              set: (zz, tz) => {
                zz.environmentIntensity = tz
              }
            },
            metadata: tz
          }, co, jo), (0, Iz.h)(zz, null, XW, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "useSpecularWeightFromTextureAlpha" in zz,
              get: zz => zz.useSpecularWeightFromTextureAlpha,
              set: (zz, tz) => {
                zz.useSpecularWeightFromTextureAlpha = tz
              }
            },
            metadata: tz
          }, Ao, yo), (0, Iz.h)(zz, null, OW, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: zz => "forceAlphaTest" in zz,
              get: zz => zz.forceAlphaTest,
              set: (zz, tz) => {
                zz.forceAlphaTest = tz
              }
            },
            metadata: tz
          }, Mo, ho), (0, Iz.h)(zz, null, oW, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: zz => "alphaCutOff" in zz,
              get: zz => zz.alphaCutOff,
              set: (zz, tz) => {
                zz.alphaCutOff = tz
              }
            },
            metadata: tz
          }, Qo, ko), (0, Iz.h)(zz, null, vW, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: zz => "useAmbientOcclusionFromMetallicTextureRed" in zz,
              get: zz => zz.useAmbientOcclusionFromMetallicTextureRed,
              set: (zz, tz) => {
                zz.useAmbientOcclusionFromMetallicTextureRed = tz
              }
            },
            metadata: tz
          }, io, Lo), (0, Iz.h)(zz, null, UW, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: zz => "useAmbientInGrayScale" in zz,
              get: zz => zz.useAmbientInGrayScale,
              set: (zz, tz) => {
                zz.useAmbientInGrayScale = tz
              }
            },
            metadata: tz
          }, no, ao), (0, Iz.h)(zz, null, KW, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: zz => "usePhysicalLightFalloff" in zz,
              get: zz => zz.usePhysicalLightFalloff
            },
            metadata: tz
          }, null, yW), (0, Iz.h)(zz, null, uW, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: zz => "useGLTFLightFalloff" in zz,
              get: zz => zz.useGLTFLightFalloff
            },
            metadata: tz
          }, null, yW), (0, Iz.h)(zz, null, NW, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: zz => "useObjectSpaceNormalMap" in zz,
              get: zz => zz.useObjectSpaceNormalMap,
              set: (zz, tz) => {
                zz.useObjectSpaceNormalMap = tz
              }
            },
            metadata: tz
          }, qo, So), (0, Iz.h)(zz, null, bW, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: zz => "useParallax" in zz,
              get: zz => zz.useParallax,
              set: (zz, tz) => {
                zz.useParallax = tz
              }
            },
            metadata: tz
          }, Vo, Ro), (0, Iz.h)(zz, null, wW, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: zz => "useParallaxOcclusion" in zz,
              get: zz => zz.useParallaxOcclusion,
              set: (zz, tz) => {
                zz.useParallaxOcclusion = tz
              }
            },
            metadata: tz
          }, po, fo), (0, Iz.h)(zz, null, DW, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: zz => "parallaxScaleBias" in zz,
              get: zz => zz.parallaxScaleBias,
              set: (zz, tz) => {
                zz.parallaxScaleBias = tz
              }
            },
            metadata: tz
          }, Eo, zv), (0, Iz.h)(zz, null, gW, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: zz => "disableLighting" in zz,
              get: zz => zz.disableLighting,
              set: (zz, tz) => {
                zz.disableLighting = tz
              }
            },
            metadata: tz
          }, tv, sv), (0, Iz.h)(zz, null, HW, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: zz => "forceIrradianceInFragment" in zz,
              get: zz => zz.forceIrradianceInFragment,
              set: (zz, tz) => {
                zz.forceIrradianceInFragment = tz
              }
            },
            metadata: tz
          }, Fv, Wv), (0, Iz.h)(zz, null, BW, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: zz => "maxSimultaneousLights" in zz,
              get: zz => zz.maxSimultaneousLights,
              set: (zz, tz) => {
                zz.maxSimultaneousLights = tz
              }
            },
            metadata: tz
          }, Xv, Ov), (0, Iz.h)(zz, null, PW, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: zz => "invertNormalMapX" in zz,
              get: zz => zz.invertNormalMapX,
              set: (zz, tz) => {
                zz.invertNormalMapX = tz
              }
            },
            metadata: tz
          }, ov, vv), (0, Iz.h)(zz, null, rW, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: zz => "invertNormalMapY" in zz,
              get: zz => zz.invertNormalMapY,
              set: (zz, tz) => {
                zz.invertNormalMapY = tz
              }
            },
            metadata: tz
          }, Uv, Kv), (0, Iz.h)(zz, null, YW, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: zz => "twoSidedLighting" in zz,
              get: zz => zz.twoSidedLighting,
              set: (zz, tz) => {
                zz.twoSidedLighting = tz
              }
            },
            metadata: tz
          }, uv, Nv), (0, Iz.h)(zz, null, xW, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: zz => "useAlphaFresnel" in zz,
              get: zz => zz.useAlphaFresnel,
              set: (zz, tz) => {
                zz.useAlphaFresnel = tz
              }
            },
            metadata: tz
          }, bv, wv), (0, Iz.h)(zz, null, mW, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: zz => "useLinearAlphaFresnel" in zz,
              get: zz => zz.useLinearAlphaFresnel,
              set: (zz, tz) => {
                zz.useLinearAlphaFresnel = tz
              }
            },
            metadata: tz
          }, Dv, gv), (0, Iz.h)(zz, null, JW, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "environmentBRDFTexture" in zz,
              get: zz => zz.environmentBRDFTexture,
              set: (zz, tz) => {
                zz.environmentBRDFTexture = tz
              }
            },
            metadata: tz
          }, Hv, Bv), (0, Iz.h)(zz, null, IW, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: zz => "forceNormalForward" in zz,
              get: zz => zz.forceNormalForward,
              set: (zz, tz) => {
                zz.forceNormalForward = tz
              }
            },
            metadata: tz
          }, Pv, rv), (0, Iz.h)(zz, null, CW, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: zz => "enableSpecularAntiAliasing" in zz,
              get: zz => zz.enableSpecularAntiAliasing,
              set: (zz, tz) => {
                zz.enableSpecularAntiAliasing = tz
              }
            },
            metadata: tz
          }, Yv, xv), (0, Iz.h)(zz, null, eW, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: zz => "useHorizonOcclusion" in zz,
              get: zz => zz.useHorizonOcclusion,
              set: (zz, tz) => {
                zz.useHorizonOcclusion = tz
              }
            },
            metadata: tz
          }, mv, Jv), (0, Iz.h)(zz, null, ZW, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: zz => "useRadianceOcclusion" in zz,
              get: zz => zz.useRadianceOcclusion,
              set: (zz, tz) => {
                zz.useRadianceOcclusion = tz
              }
            },
            metadata: tz
          }, Iv, Cv), (0, Iz.h)(zz, null, GW, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: zz => "unlit" in zz,
              get: zz => zz.unlit,
              set: (zz, tz) => {
                zz.unlit = tz
              }
            },
            metadata: tz
          }, ev, Zv), (0, Iz.h)(zz, null, TW, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: zz => "applyDecalMapAfterDetailMap" in zz,
              get: zz => zz.applyDecalMapAfterDetailMap,
              set: (zz, tz) => {
                zz.applyDecalMapAfterDetailMap = tz
              }
            },
            metadata: tz
          }, Gv, Tv), (0, Iz.h)(zz, null, cW, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "debugMode" in zz,
              get: zz => zz.debugMode,
              set: (zz, tz) => {
                zz.debugMode = tz
              }
            },
            metadata: tz
          }, cv, jv), (0, Iz.h)(zz, null, jW, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "transparencyMode" in zz,
              get: zz => zz.transparencyMode
            },
            metadata: tz
          }, null, yW), tz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tz
          })
        })(), zz.SSS_QUALITY_LOW = 0, zz.SSS_QUALITY_MEDIUM = 1, zz.SSS_QUALITY_HIGH = 2, zz._noiseTextures = {}, zz.ForceGLSL = !1, zz._ShaderLoader = new Nt.c((() => [Promise.all([sz.e(307), sz.e(373)]).then((() => sz(60894))), Promise.all([sz.e(312), sz.e(308), sz.e(372), sz.e(377)]).then((() => sz(60898)))]), (() => [Promise.all([sz.e(326), sz.e(328), sz.e(376)]).then((() => sz(60933))), Promise.all([sz.e(326), sz.e(329), sz.e(375), sz.e(378)]).then((() => sz(60945)))])), zz
      })(),
      zs = !1;
    zs || (zs = !0, (0, Sz.g)(), (0, it.g)("BABYLON.OpenPBRMaterial", Et));
    var ts = sz(36505);
    class ss {
      constructor(zz) {
        this.name = At.e.NAME_PROCEDURALTEXTURE, this.Kg = zz
      }
      register() {
        this.Kg._beforeClearStage.registerStep(At.e.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.Kg.proceduralTexturesEnabled) {
          Jt.j.StartPerformanceCounter("Procedural textures", this.Kg.proceduralTextures.length > 0);
          for (let zz = 0; zz < this.Kg.proceduralTextures.length; zz++) {
            const tz = this.Kg.proceduralTextures[zz];
            tz._shouldRender() && tz.render()
          }
          Jt.j.EndPerformanceCounter("Procedural textures", this.Kg.proceduralTextures.length > 0)
        }
      }
    }
    var Fs = sz(39485);
    let Ws = (() => {
      var zz;
      let tz, Fz, Wz, Oz, oz, vz = Gz.g,
        Uz = [],
        Kz = [],
        uz = [],
        Nz = [],
        bz = [],
        wz = [],
        gz = [],
        Hz = [],
        Bz = [];
      return zz = class extends vz {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(zz, tz, sz, Fz) {
          let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Xz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Fz, !Xz), this.isEnabled = ((0, Iz.k)(this, Uz), (0, Iz.k)(this, Kz, !0)), this.autoClear = ((0, Iz.k)(this, uz), (0, Iz.k)(this, Nz, !0)), this.onGenerated = (0, Iz.k)(this, bz), this.onGeneratedObservable = new ts.c, this.onBeforeGenerationObservable = new ts.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, Iz.k)(this, wz, void 0), this._drawWrapper = (0, Iz.k)(this, gz), this._textures = {}, this._size = (0, Iz.k)(this, Hz, void 0), this._textureType = (0, Iz.k)(this, Bz), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Wz || Wz instanceof Gz.g ? (this._options = {}, this._fallbackTexture = Wz) : (this._options = Wz, this._fallbackTexture = Wz.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let vz = (Fz = this.aJ() || Dz.c.LastCreatedScene)._getComponent(At.e.NAME_PROCEDURALTEXTURE);
          vz || (vz = new ss(Fz), Fz.Jsz(vz)), this._options.skipSceneRegistration || Fz.proceduralTextures.push(this), this._fullEngine = Fz.FD(), this.name = zz, this.isRenderTarget = !0, this._size = tz, this._textureType = oz, this._generateMipMaps = Xz, this._drawWrapper = new Fs.c(this._fullEngine), this.setFragment(sz);
          const Pz = this._createRtWrapper(Oz, tz, Xz, oz);
          this._texture = Pz.texture;
          const rz = [];
          rz.push(1, 1), rz.push(-1, 1), rz.push(-1, -1), rz.push(1, -1), this._vertexBuffers[Qz.m.PositionKind] = new Qz.m(this._fullEngine, rz, Qz.m.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(zz, tz, sz, Fz) {
          return zz ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(tz, {
            generateMipMaps: sz,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Fz,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(tz, {
            generateMipMaps: sz,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Fz,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(zz) {
          this._drawWrapper.effect = zz
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((zz => {
            this._contentData = this.readPixels(0, 0, zz), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const zz = this._fullEngine,
            tz = [];
          tz.push(0), tz.push(1), tz.push(2), tz.push(0), tz.push(2), tz.push(3), this._indexBuffer = zz.createIndexBuffer(tz)
        }
        _rebuild() {
          const zz = this._vertexBuffers[Qz.m.PositionKind];
          zz && zz._rebuild(), this._createIndexBuffer(), this.refreshRate === It.d.REFRESHRATE_RENDER_ONCE && (this.refreshRate = It.d.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(zz) {
          if (this.isReady()) return void zz(this);
          const tz = this.getEffect();
          tz && tz.executeWhenCompiled((() => {
            zz(this)
          }))
        }
        isReady() {
          const zz = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const tz = this._getDefines();
          if (this._drawWrapper.effect && tz === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Fz = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== tz && (this._cachedDefines = tz, this._drawWrapper.effect = zz.createEffect(Fz, [Qz.m.PositionKind], this._uniforms, this._samplers, tz, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([sz.e(381).then((() => sz(61011))), this._options.extraInitializationsAsync()]) : await Promise.all([sz.e(382).then((() => sz(61013))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await sz.e(381).then((() => sz(61011))) : await sz.e(382).then((() => sz(61013)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(zz) {
          this._fragment = zz
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(zz) {
          this._refreshRate = zz, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(zz, tz) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const sz = this._texture.isCube;
          this._rtWrapper.dispose();
          const Fz = this._createRtWrapper(sz, zz, tz, this._textureType);
          this._texture = Fz.texture, this._size = zz, this._generateMipMaps = tz
        }
        _checkUniform(zz) {
          -1 === this._uniforms.indexOf(zz) && this._uniforms.push(zz)
        }
        setTexture(zz, tz) {
          return -1 === this._samplers.indexOf(zz) && this._samplers.push(zz), this._textures[zz] = tz, this
        }
        setFloat(zz, tz) {
          return this._checkUniform(zz), this._floats[zz] = tz, this
        }
        setInt(zz, tz) {
          return this._checkUniform(zz), this._ints[zz] = tz, this
        }
        setFloats(zz, tz) {
          return this._checkUniform(zz), this._floatsArrays[zz] = tz, this
        }
        setColor3(zz, tz) {
          return this._checkUniform(zz), this._colors3[zz] = tz, this
        }
        setColor4(zz, tz) {
          return this._checkUniform(zz), this._colors4[zz] = tz, this
        }
        setVector2(zz, tz) {
          return this._checkUniform(zz), this._vectors2[zz] = tz, this
        }
        setVector3(zz, tz) {
          return this._checkUniform(zz), this._vectors3[zz] = tz, this
        }
        setVector4(zz, tz) {
          return this._checkUniform(zz), this._vectors4[zz] = tz, this
        }
        setMatrix(zz, tz) {
          return this._checkUniform(zz), this._matrices[zz] = tz, this
        }
        render(zz) {
          const tz = this.aJ();
          if (!tz) return;
          const sz = this._fullEngine;
          if (sz.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), sz.setState(!1), !this.nodeMaterialSource) {
            for (const zz in this._textures) this._drawWrapper.effect.setTexture(zz, this._textures[zz]);
            for (const zz in this._ints) this._drawWrapper.effect.setInt(zz, this._ints[zz]);
            for (const zz in this._floats) this._drawWrapper.effect.setFloat(zz, this._floats[zz]);
            for (const zz in this._floatsArrays) this._drawWrapper.effect.setArray(zz, this._floatsArrays[zz]);
            for (const zz in this._colors3) this._drawWrapper.effect.setColor3(zz, this._colors3[zz]);
            for (const zz in this._colors4) {
              const tz = this._colors4[zz];
              this._drawWrapper.effect.setFloat4(zz, tz.r, tz.g, tz.b, tz.a)
            }
            for (const zz in this._vectors2) this._drawWrapper.effect.setVector2(zz, this._vectors2[zz]);
            for (const zz in this._vectors3) this._drawWrapper.effect.setVector3(zz, this._vectors3[zz]);
            for (const zz in this._vectors4) this._drawWrapper.effect.setVector4(zz, this._vectors4[zz]);
            for (const zz in this._matrices) this._drawWrapper.effect.setMatrix(zz, this._matrices[zz])
          }
          if (!this._texture || !this._rtWrapper) return;
          sz._enableGPUDebugMarkers && sz._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Fz = sz.currentViewport;
          if (this.isCube)
            for (let Wz = 0; Wz < 6; Wz++) sz.bindFramebuffer(this._rtWrapper, Wz, void 0, void 0, !0), sz.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Wz), this.autoClear && sz.clear(tz.clearColor, !0, !1, !1), sz.drawElementsType(Xz.b.TriangleFillMode, 0, 6), sz.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let zz = 1;
            this._rtWrapper.is3D ? zz = this._rtWrapper.depth : this._rtWrapper.is2DArray && (zz = this._rtWrapper.layers);
            for (let Fz = 0; Fz < zz; Fz++) {
              if (sz.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Fz), sz.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== zz ? Fz / (zz - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Fz);
                for (const zz in this._textures) this._drawWrapper.effect.setTexture(zz, this._textures[zz])
              }
              this.autoClear && sz.clear(tz.clearColor, !0, !1, !1), sz.drawElementsType(Xz.b.TriangleFillMode, 0, 6), sz.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Fz && sz.setViewport(Fz), this.isCube && sz.generateMipMapsForCubemap(this._texture, !0), sz._enableGPUDebugMarkers && sz._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const tz = this.getSize(),
            sz = new zz(this.name, tz.width, this._fragment, this.aJ(), this._fallbackTexture, this._generateMipMaps);
          return sz.hasAlpha = this.hasAlpha, sz.level = this.level, sz.coordinatesMode = this.coordinatesMode, sz
        }
        dispose() {
          const zz = this.aJ();
          if (!zz) return;
          const tz = zz.proceduralTextures.indexOf(this);
          tz >= 0 && zz.proceduralTextures.splice(tz, 1);
          const sz = this._vertexBuffers[Qz.m.PositionKind];
          sz && (sz.dispose(), this._vertexBuffers[Qz.m.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const sz = "function" === typeof Symbol && Symbol.metadata ? Object.create(vz[Symbol.metadata] ?? null) : void 0;
        tz = [(0, Cz.J)()], Fz = [(0, Cz.J)()], Wz = [(0, Cz.J)()], Oz = [(0, Cz.J)()], oz = [(0, Cz.J)()], (0, Iz.h)(zz, null, oz, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: zz => "refreshRate" in zz,
            get: zz => zz.refreshRate
          },
          metadata: sz
        }, null, Uz), (0, Iz.h)(null, null, tz, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isEnabled" in zz,
            get: zz => zz.isEnabled,
            set: (zz, tz) => {
              zz.isEnabled = tz
            }
          },
          metadata: sz
        }, Kz, uz), (0, Iz.h)(null, null, Fz, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: zz => "autoClear" in zz,
            get: zz => zz.autoClear,
            set: (zz, tz) => {
              zz.autoClear = tz
            }
          },
          metadata: sz
        }, Nz, bz), (0, Iz.h)(null, null, Wz, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: zz => "_generateMipMaps" in zz,
            get: zz => zz._generateMipMaps,
            set: (zz, tz) => {
              zz._generateMipMaps = tz
            }
          },
          metadata: sz
        }, wz, gz), (0, Iz.h)(null, null, Oz, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: zz => "_size" in zz,
            get: zz => zz._size,
            set: (zz, tz) => {
              zz._size = tz
            }
          },
          metadata: sz
        }, Hz, Bz), sz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: sz
        })
      })(), zz
    })();

    function Xs(zz) {
      return "texture" in zz
    }

    function Os(zz) {
      return "value" in zz
    }
    async function os(zz, tz, Fz) {
      const Wz = [tz.red, tz.green, tz.blue, tz.alpha],
        Xz = [],
        Oz = [];
      for (let sz = 0; sz < 4; sz++) {
        const zz = Wz[sz];
        if (zz)
          if (Xs(zz)) {
            if (zz.sourceChannel < 0 || zz.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let tz = Xz.indexOf(zz.texture); - 1 === tz && (tz = Xz.length, Xz.push(zz.texture)), Oz[sz] = tz
          } else {
            if (!Os(zz)) throw new Error("Invalid channel input configuration");
            if (zz.value < 0 || zz.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            Oz[sz] = -1
          }
        else Oz[sz] = -1
      }
      let oz = tz.outputSize;
      if (!oz && Xz.length > 0) {
        let zz = 0;
        for (const tz of Xz) {
          const sz = tz.getSize(),
            Fz = Math.max(sz.width, sz.height);
          Fz > zz && (zz = Fz, oz = sz.width === sz.height ? zz : sz)
        }
      }
      oz = oz || 512;
      const vz = [],
        Uz = new Set;
      for (let sz = 0; sz < 4; sz++) {
        const zz = Wz[sz],
          tz = ["RED", "GREEN", "BLUE", "ALPHA"][sz];
        if (zz && Xs(zz)) {
          vz.push(`${tz}_FROM_TEXTURE`);
          const zz = Oz[sz];
          Uz.add(zz)
        }
      }
      Uz.forEach((zz => {
        vz.push(`USE_TEXTURE${zz}`)
      }));
      const Kz = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Fz.FD().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Fz.FD().isWebGPU ? await Promise.all([sz.e(379).then((() => sz(61e3)))]) : await Promise.all([sz.e(380).then((() => sz(61002)))])
          },
          skipSceneRegistration: !0
        },
        uz = new Ws(zz, oz, "textureMerger", Fz, Kz);
      uz.refreshRate = -1, uz.defines = vz.length > 0 ? "#define " + vz.join("\n#define ") + "\n" : "";
      for (let sz = 0; sz < Xz.length; sz++) Nz = Xz[sz], (bz = uz).uOffset = Nz.uOffset, bz.vOffset = Nz.vOffset, bz.uScale = Nz.uScale, bz.vScale = Nz.vScale, bz.uAng = Nz.uAng, bz.vAng = Nz.vAng, bz.wAng = Nz.wAng, bz.uRotationCenter = Nz.uRotationCenter, bz.vRotationCenter = Nz.vRotationCenter, uz.setTexture(`inputTexture${sz}`, Xz[sz]);
      var Nz, bz;
      for (let sz = 0; sz < 4; sz++) {
        const zz = Wz[sz],
          tz = ["red", "green", "blue", "alpha"][sz];
        if (zz && Xs(zz)) {
          const Fz = Oz[sz];
          uz.setInt(`${tz}TextureIndex`, Fz), uz.setInt(`${tz}SourceChannel`, zz.sourceChannel)
        } else {
          let Fz;
          Fz = zz && Os(zz) ? zz.value : 3 === sz ? 1 : 0, uz.setFloat(`${tz}ConstantValue`, Fz)
        }
      }
      return await new Promise(((zz, tz) => {
        uz.executeWhenReady((() => {
          try {
            uz.render(), zz(uz)
          } catch (sz) {
            tz(sz instanceof Error ? sz : new Error(String(sz)))
          }
        }))
      }))
    }

    function vs(zz, tz) {
      return {
        texture: zz,
        sourceChannel: tz
      }
    }

    function Us(zz) {
      return {
        value: zz
      }
    }

    function Ks(zz, tz, sz, Fz) {
      return {
        red: zz,
        green: tz,
        blue: sz,
        alpha: Fz
      }
    }
    var us = sz(39018),
      Ns = sz(39106),
      bs = sz(36493),
      ws = sz(39150),
      Ds = sz(39090);
    class gs {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class Hs extends us.e {
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
        return !!this._options?.enableMultiview || this.jD > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new gs;
        super(null), void 0 === zz.deterministicLockstep && (zz.deterministicLockstep = !1), void 0 !== zz.timeStep && (this._timeStep = zz.timeStep), void 0 === zz.lockstepMaxSteps && (zz.lockstepMaxSteps = 4), this._options = zz, bs.c.SetMatrixPrecision(!!zz.useHighPrecisionMatrix), this._caps = {
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
        }, zz.enableMultiview && (this._caps.multiview = {
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
        }, zz.renderingCanvas && (this._renderingCanvas = zz.renderingCanvas), ez.e.Log(`Babylon.js v${us.e.Version} - Null engine`);
        const tz = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (tz.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (tz.Blob = function() {})
      }
      createVertexBuffer(zz) {
        const tz = new Ns.c;
        return tz.references = 1, tz
      }
      createIndexBuffer(zz) {
        const tz = new Ns.c;
        return tz.references = 1, tz
      }
      clear(zz, tz, sz) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(zz, tz, sz) {
        this._cachedViewport = zz
      }
      createUniformBuffer(zz) {
        const tz = new Ns.c;
        return tz.references = 1, tz.au = zz instanceof Array ? zz.length * Float32Array.BYTES_PER_ELEMENT : zz.byteLength, tz
      }
      createDynamicUniformBuffer(zz) {
        return this.createUniformBuffer(zz)
      }
      updateUniformBuffer(zz, tz, sz, Fz) {}
      bindUniformBufferBase(zz, tz, sz) {}
      bindUniformBlock(zz, tz, sz) {}
      createShaderProgram(zz, tz, sz, Fz, Wz) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(zz, tz) {
        return []
      }
      getAttributes(zz, tz) {
        return []
      }
      bindSamplers(zz) {
        this._currentEffect = null
      }
      enableEffect(zz) {
        zz = null !== zz && (0, Ds.d)(zz) ? zz.effect : zz, this._currentEffect = zz, zz && (zz.onBind && zz.onBind(zz), zz._onBindObservable && zz._onBindObservable.notifyObservers(zz))
      }
      setStateCullFaceType(zz, tz) {}
      setState(zz) {}
      setIntArray(zz, tz) {
        return !0
      }
      setIntArray2(zz, tz) {
        return !0
      }
      setIntArray3(zz, tz) {
        return !0
      }
      setIntArray4(zz, tz) {
        return !0
      }
      setFloatArray(zz, tz) {
        return !0
      }
      setFloatArray2(zz, tz) {
        return !0
      }
      setFloatArray3(zz, tz) {
        return !0
      }
      setFloatArray4(zz, tz) {
        return !0
      }
      setArray(zz, tz) {
        return !0
      }
      setArray2(zz, tz) {
        return !0
      }
      setArray3(zz, tz) {
        return !0
      }
      setArray4(zz, tz) {
        return !0
      }
      setMatrices(zz, tz) {
        return !0
      }
      setMatrix3x3(zz, tz) {
        return !0
      }
      setMatrix2x2(zz, tz) {
        return !0
      }
      setFloat(zz, tz) {
        return !0
      }
      setFloat2(zz, tz, sz) {
        return !0
      }
      setFloat3(zz, tz, sz, Fz) {
        return !0
      }
      setBool(zz, tz) {
        return !0
      }
      setFloat4(zz, tz, sz, Fz, Wz) {
        return !0
      }
      setAlphaMode(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[sz] !== zz && (this.alphaState.setAlphaBlend(0 !== zz, 0), tz || this.setDepthWrite(0 === zz), this._alphaMode[sz] = zz)
      }
      bindBuffers(zz, tz, sz) {}
      wipeCaches(zz) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, zz && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(zz, tz, sz, Fz) {}
      drawElementsType(zz, tz, sz, Fz) {}
      drawArraysType(zz, tz, sz, Fz) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(zz) {}
      createTexture(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          oz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const vz = new Ct.d(this, 1),
          Uz = String(zz);
        return vz.url = Uz, vz.generateMipMaps = !tz, vz.samplingMode = Wz, vz.invertY = sz, vz.baseWidth = this._options.textureSize, vz.baseHeight = this._options.textureSize, vz.width = this._options.textureSize, vz.height = this._options.textureSize, oz && (vz.format = oz), Oz && (vz._buffer = Oz), vz.isReady = !0, Xz && setTimeout((() => {
          Xz(vz)
        })), this._internalTexturesCache.push(vz), vz
      }
      _createHardwareRenderTargetWrapper(zz, tz, sz) {
        const Fz = new ws.d(zz, tz, sz, this);
        return this._renderTargetWrapperCache.push(Fz), Fz
      }
      createRenderTargetTexture(zz, tz) {
        const sz = this._createHardwareRenderTargetWrapper(!1, !1, zz),
          Fz = {};
        void 0 !== tz && "object" === typeof tz ? (Fz.generateMipMaps = tz.generateMipMaps, Fz.generateDepthBuffer = void 0 === tz.generateDepthBuffer || tz.generateDepthBuffer, Fz.generateStencilBuffer = Fz.generateDepthBuffer && tz.generateStencilBuffer, Fz.type = void 0 === tz.type ? 0 : tz.type, Fz.samplingMode = void 0 === tz.samplingMode ? 3 : tz.samplingMode) : (Fz.generateMipMaps = tz, Fz.generateDepthBuffer = !0, Fz.generateStencilBuffer = !1, Fz.type = 0, Fz.samplingMode = 3);
        const Wz = new Ct.d(this, 5);
        sz.setTexture(Wz);
        const Xz = zz.width || zz,
          Oz = zz.height || zz;
        return sz._generateDepthBuffer = Fz.generateDepthBuffer, sz._generateStencilBuffer = !!Fz.generateStencilBuffer, Wz.baseWidth = Xz, Wz.baseHeight = Oz, Wz.width = Xz, Wz.height = Oz, Wz.isReady = !0, Wz.samples = 1, Wz.generateMipMaps = !!Fz.generateMipMaps, Wz.samplingMode = Fz.samplingMode, Wz.type = Fz.type, this._internalTexturesCache.push(Wz), sz
      }
      createMultiviewRenderTargetTexture(zz, tz) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const sz = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: zz,
            height: tz
          }),
          Fz = new Ct.d(this, 5, !0);
        return Fz.baseWidth = zz, Fz.baseHeight = tz, Fz.width = zz, Fz.height = tz, Fz.isMultiview = !0, Fz.isReady = !0, Fz.format = 5, Fz.samples = 1, sz.setTextures(Fz), sz
      }
      bindMultiviewFramebuffer(zz) {
        this.bindFramebuffer(zz, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(zz, tz) {
        const sz = this._createHardwareRenderTargetWrapper(!1, !0, zz),
          Fz = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...tz
          };
        Fz.generateStencilBuffer = Fz.generateDepthBuffer && Fz.generateStencilBuffer, (1 !== Fz.type || this._caps.textureFloatLinearFiltering) && (2 !== Fz.type || this._caps.textureHalfFloatLinearFiltering) || (Fz.samplingMode = 1), sz._generateDepthBuffer = Fz.generateDepthBuffer, sz._generateStencilBuffer = !!Fz.generateStencilBuffer;
        const Wz = new Ct.d(this, 5);
        return Wz.baseWidth = zz, Wz.baseHeight = zz, Wz.width = zz, Wz.height = zz, Wz.isReady = !0, Wz.isCube = !0, Wz.samples = 1, Wz.generateMipMaps = !!Fz.generateMipMaps, Wz.samplingMode = Fz.samplingMode, Wz.type = Fz.type, this._internalTexturesCache.push(Wz), sz
      }
      updateTextureSamplingMode(zz, tz) {
        tz.samplingMode = zz
      }
      createRawTexture(zz, tz, sz, Fz, Wz, Xz, Oz) {
        let oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          vz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Uz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Kz = new Ct.d(this, 3);
        return Kz.baseWidth = tz, Kz.baseHeight = sz, Kz.width = tz, Kz.height = sz, Kz.format = Fz, Kz.generateMipMaps = Wz, Kz.samplingMode = Oz, Kz.invertY = Xz, Kz._compression = oz, Kz.type = vz, Kz._useSRGBBuffer = Uz, this._doNotHandleContextLost || (Kz._bufferView = zz), Kz
      }
      updateRawTexture(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        zz && (zz._bufferView = tz, zz.format = sz, zz.invertY = Fz, zz._compression = Wz, zz.type = Xz, zz._useSRGBBuffer = Oz)
      }
      bindFramebuffer(zz, tz, sz, Fz, Wz) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = zz, this._currentFramebuffer = null, this._cachedViewport && !Wz && this.setViewport(this._cachedViewport, sz, Fz)
      }
      unBindFramebuffer(zz) {
        let tz = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, tz && tz(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(zz) {
        const tz = new Ns.c;
        return tz.references = 1, tz.au = 1, tz
      }
      updateDynamicTexture(zz, tz, sz) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(zz) {}
      updateDynamicIndexBuffer(zz, tz) {}
      updateDynamicVertexBuffer(zz, tz, sz, Fz) {}
      _bindTextureDirectly(zz, tz) {
        return this._boundTexturesCache[this._activeChannel] !== tz && (this._boundTexturesCache[this._activeChannel] = tz, !0)
      }
      _bindTexture(zz, tz) {
        zz < 0 || this._bindTextureDirectly(0, tz)
      }
      _deleteBuffer(zz) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(zz) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(zz, tz, sz, Fz, Wz) {}
      _uploadDataToTextureDirectly(zz, tz) {}
      _uploadArrayBufferViewToTexture(zz, tz) {}
      _uploadImageToTexture(zz, tz) {}
    }
    sz(39196), sz(39238), sz(39189);
    async function Bs(zz) {
      const tz = zz.getInternalTexture();
      if (!tz || 1 !== tz.source) return null;
      if (tz.invertY) {
        const tz = zz.aJ()?.FD();
        if (!(tz instanceof Hs)) return null
      }
      const sz = tz._buffer;
      let Fz, Xz = zz.mimeType;
      try {
        sz ? ArrayBuffer.isView(sz) ? Fz = sz.buffer.slice(sz.byteOffset, sz.byteOffset + sz.byteLength) : sz instanceof ArrayBuffer ? Fz = sz : sz instanceof Blob ? (Fz = await sz.arrayBuffer(), Xz = sz.type || Xz) : "string" === typeof sz ? (Fz = await Wz.Tools.LoadFileAsync(sz), Xz = (0, vz.c)(sz) || Xz) : "undefined" !== typeof HTMLImageElement && sz instanceof HTMLImageElement && (Fz = await Wz.Tools.LoadFileAsync(sz.src), Xz = (0, vz.c)(sz.src) || Xz) : (Fz = await Wz.Tools.LoadFileAsync(tz.url), Xz = (0, vz.c)(tz.url) || Xz)
      } catch {
        return null
      }
      if (Fz && !Xz && tz.url) {
        const zz = tz.url.match(/^data:([^;,]+)/);
        Xz = zz ? zz[1] : (0, vz.c)(tz.url)
      }
      return Fz && Xz ? {
        data: Fz,
        mimeType: Xz
      } : null
    }
    const Ps = 1e-6,
      rs = new gz.Color3(.04, .04, .04),
      Ys = 1024,
      xs = gz.Color3.White(),
      ms = gz.Color3.BlackReadOnly;

    function Is(zz) {
      switch (zz) {
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

    function Cs(zz, tz, sz) {
      if (tz < rs.r) return 0;
      const Fz = rs.r,
        Wz = zz * sz / (1 - rs.r) + tz - 2 * rs.r,
        Xz = Wz * Wz - 4 * Fz * (rs.r - tz);
      return Pz.Clamp((-Wz + Math.sqrt(Xz)) / (2 * Fz), 0, 1)
    }

    function es(zz) {
      const tz = zz.diffuseColor.toLinearSpace(zz.aJ().FD().useExactSrgbConversions).scale(.5),
        sz = zz.alpha,
        Fz = function(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new hz.n(0, 1),
            sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new hz.n(0, .1),
            Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new hz.n(0, .1),
            Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new hz.n(1300, .1);
          return function(zz, tz, sz, Fz, Wz) {
            return (1 - zz) * (1 - zz) * (1 - zz) * tz + 3 * (1 - zz) * (1 - zz) * zz * sz + 3 * (1 - zz) * zz * zz * Fz + zz * zz * zz * Wz
          }(Math.pow(zz / Wz.x, .333333), tz.y, sz.y, Fz.y, Wz.y)
        }(Pz.Clamp(zz.specularPower, 0, Ys));
      return {
        baseColorFactor: [tz.r, tz.g, tz.b, sz],
        metallicFactor: 0,
        roughnessFactor: Fz
      }
    }

    function Zs(zz, tz) {
      tz.needAlphaBlending() ? zz.alphaMode = "BLEND" : tz.needAlphaTesting() && (zz.alphaMode = "MASK", zz.alphaCutoff = tz.alphaCutOff)
    }

    function Gs(zz, tz, sz) {
      const Fz = new Uint8Array(zz * tz * 4);
      for (let Wz = 0; Wz < Fz.length; Wz += 4) Fz[Wz] = Fz[Wz + 1] = Fz[Wz + 2] = Fz[Wz + 3] = 255;
      return xz.b.CreateRGBATexture(Fz, zz, tz, sz)
    }

    function Ts(zz) {
      if (zz instanceof Uint8Array) {
        const tz = zz.length,
          sz = new Float32Array(zz.length);
        for (let Fz = 0; Fz < tz; ++Fz) sz[Fz] = zz[Fz] / 255;
        return sz
      }
      if (zz instanceof Float32Array) return zz;
      throw new Error("Unsupported pixel format!")
    }
    class cs {
      constructor(zz) {
        this._exporter = zz, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(zz) {
        return zz ? this._textureMap.get(zz.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(zz, tz) {
        const sz = es(zz),
          Fz = {
            name: zz.name
          };
        if (null == zz.backFaceCulling || zz.backFaceCulling || (zz.twoSidedLighting || Wz.Tools.Warn(zz.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Fz.doubleSided = !0), tz) {
          const tz = [],
            Wz = zz.diffuseTexture;
          Wz && tz.push(this.exportTextureAsync(Wz).then((zz => {
            zz && (sz.baseColorTexture = zz)
          })));
          const Xz = zz.bumpTexture;
          Xz && tz.push(this.exportTextureAsync(Xz).then((zz => {
            zz && (Fz.normalTexture = zz, 1 !== Xz.level && (Fz.normalTexture.scale = Xz.level))
          })));
          const Oz = zz.emissiveTexture;
          Oz && (Fz.emissiveFactor = [1, 1, 1], tz.push(this.exportTextureAsync(Oz).then((zz => {
            zz && (Fz.emissiveTexture = zz)
          }))));
          const oz = zz.ambientTexture;
          oz && tz.push(this.exportTextureAsync(oz).then((zz => {
            if (zz) {
              const tz = {
                index: zz.index
              };
              Fz.occlusionTexture = tz
            }
          }))), tz.length > 0 && (this._exporter._materialNeedsUVsSet.add(zz), await Promise.all(tz))
        }(zz.alpha < 1 || zz.opacityTexture) && (zz.alphaMode === mz.e.ALPHA_COMBINE ? Fz.alphaMode = "BLEND" : Wz.Tools.Warn(zz.name + ": glTF 2.0 does not support alpha mode: " + zz.alphaMode.toString())), zz.emissiveColor && !zz.emissiveColor.equalsWithEpsilon(ms, Ps) && (Fz.emissiveFactor = zz.emissiveColor.hsz()), Fz.pbrMetallicRoughness = sz, Zs(Fz, zz), await this._finishMaterialAsync(Fz, zz);
        const Xz = this._exporter._materials;
        return Xz.push(Fz), Xz.length - 1
      }
      async _finishMaterialAsync(zz, tz) {
        const sz = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", zz, tz),
          Fz = [];
        for (const Wz of sz) Fz.push(this.exportTextureAsync(Wz));
        await Promise.all(Fz), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", zz, tz)
      }
      _resizeTexturesToSameDimensions(zz, tz, sz) {
        const Fz = zz ? zz.getSize() : {
            width: 0,
            height: 0
          },
          Wz = tz ? tz.getSize() : {
            width: 0,
            height: 0
          };
        let Xz, Oz;
        return Fz.width < Wz.width ? (Xz = zz && zz instanceof Yz.c ? rz.d.CreateResizedCopy(zz, Wz.width, Wz.height, !0) : Gs(Wz.width, Wz.height, sz), Oz = tz) : Fz.width > Wz.width ? (Oz = tz && tz instanceof Yz.c ? rz.d.CreateResizedCopy(tz, Fz.width, Fz.height, !0) : Gs(Fz.width, Fz.height, sz), Xz = zz) : (Xz = zz, Oz = tz), {
          texture1: Xz,
          texture2: Oz
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(zz, tz, sz) {
        const Fz = new Array;
        if (!zz && !tz) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Wz = zz ? zz.aJ() : tz ? tz.aJ() : null;
        if (Wz) {
          const Xz = this._resizeTexturesToSameDimensions(zz, tz, Wz),
            Oz = Xz.texture1?.getSize();
          let oz, vz;
          const Uz = Oz.width,
            Kz = Oz.height,
            uz = await Xz.texture1.readPixels(),
            Nz = await Xz.texture2.readPixels();
          if (!uz) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (oz = Ts(uz), !Nz) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          vz = Ts(Nz);
          const bz = vz.byteLength,
            wz = new Uint8Array(bz),
            Dz = new Uint8Array(bz),
            Hz = 4,
            Bz = new gz.Color3(0, 0, 0);
          let Pz = 0,
            rz = 0;
          for (let zz = 0; zz < Kz; ++zz)
            for (let tz = 0; tz < Uz; ++tz) {
              const Fz = (Uz * zz + tz) * Hz,
                Oz = {
                  diffuseColor: new gz.Color3(oz[Fz], oz[Fz + 1], oz[Fz + 2]).toLinearSpace(Wz.FD().useExactSrgbConversions).multiply(sz.diffuseColor),
                  specularColor: new gz.Color3(vz[Fz], vz[Fz + 1], vz[Fz + 2]).toLinearSpace(Wz.FD().useExactSrgbConversions).multiply(sz.specularColor),
                  glossiness: vz[Fz + 3] * sz.glossiness
                },
                Kz = this._convertSpecularGlossinessToMetallicRoughness(Oz);
              Bz.r = Math.max(Bz.r, Kz.baseColor.r), Bz.g = Math.max(Bz.g, Kz.baseColor.g), Bz.b = Math.max(Bz.b, Kz.baseColor.b), Pz = Math.max(Pz, Kz.metallic), rz = Math.max(rz, Kz.roughness), Dz[Fz] = 255 * Kz.baseColor.r, Dz[Fz + 1] = 255 * Kz.baseColor.g, Dz[Fz + 2] = 255 * Kz.baseColor.b, Dz[Fz + 3] = Xz.texture1.hasAlpha ? 255 * oz[Fz + 3] : 255, wz[Fz] = 0, wz[Fz + 1] = 255 * Kz.roughness, wz[Fz + 2] = 255 * Kz.metallic, wz[Fz + 3] = 255
            }
          const Yz = {
            baseColor: Bz,
            metallic: Pz,
            roughness: rz
          };
          let xz = !1,
            mz = !1;
          for (let zz = 0; zz < Kz; ++zz)
            for (let tz = 0; tz < Uz; ++tz) {
              const sz = (Uz * zz + tz) * Hz;
              Dz[sz] /= Yz.baseColor.r > Ps ? Yz.baseColor.r : 1, Dz[sz + 1] /= Yz.baseColor.g > Ps ? Yz.baseColor.g : 1, Dz[sz + 2] /= Yz.baseColor.b > Ps ? Yz.baseColor.b : 1;
              const Fz = gz.Color3.FromInts(Dz[sz], Dz[sz + 1], Dz[sz + 2]).toGammaSpace(Wz.FD().useExactSrgbConversions);
              Dz[sz] = 255 * Fz.r, Dz[sz + 1] = 255 * Fz.g, Dz[sz + 2] = 255 * Fz.b, Fz.equalsWithEpsilon(xs, Ps) || (mz = !0), wz[sz + 1] /= Yz.roughness > Ps ? Yz.roughness : 1, wz[sz + 2] /= Yz.metallic > Ps ? Yz.metallic : 1;
              gz.Color3.FromInts(255, wz[sz + 1], wz[sz + 2]).equalsWithEpsilon(xs, Ps) || (xz = !0)
            }
          return xz && Fz.push((0, Jz.EncodeImageAsync)(wz, Uz, Kz).then((zz => {
            Yz.metallicRoughnessTextureData = zz
          }))), mz && Fz.push((0, Jz.EncodeImageAsync)(Dz, Uz, Kz).then((zz => {
            Yz.baseColorTextureData = zz
          }))), await Promise.all(Fz).then((() => Yz))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(zz) {
        const tz = this._getPerceivedBrightness(zz.diffuseColor),
          sz = this._getPerceivedBrightness(zz.specularColor),
          Fz = 1 - this._getMaxComponent(zz.specularColor),
          Wz = Cs(tz, sz, Fz),
          Xz = zz.diffuseColor.scale(Fz / (1 - rs.r) / Math.max(1 - Wz, Ps)),
          Oz = zz.specularColor.subtract(rs.scale(1 - Wz)).scale(1 / Math.max(Wz, Ps));
        let oz = gz.Color3.Lerp(Xz, Oz, Wz * Wz);
        oz = oz.clampToRef(0, 1, oz);
        return {
          baseColor: oz,
          metallic: Wz,
          roughness: 1 - zz.glossiness
        }
      }
      _getPerceivedBrightness(zz) {
        return Math.sqrt(.299 * zz.r * zz.r + .587 * zz.g * zz.g + .114 * zz.b * zz.b)
      }
      _getMaxComponent(zz) {
        return Math.max(zz.r, Math.max(zz.g, zz.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        const Uz = [],
          Kz = {
            baseColor: zz,
            metallic: tz,
            roughness: sz
          };
        if (vz)
          if (Oz instanceof Et) {
            if (Oz.geometryOpacityTexture) {
              const zz = Fz && Fz.getInternalTexture() ? Fz.getInternalTexture().uniqueId : 0,
                tz = Oz.geometryOpacityTexture && Oz.geometryOpacityTexture.getInternalTexture() ? Oz.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                sz = Number(`${zz}${tz}`),
                Wz = this._textureMap.get(sz);
              Wz ? oz.baseColorTexture = Wz : Uz.push(os("baseColorOpacityTexture", Ks(Fz ? vs(Fz, 0) : Us(1), Fz ? vs(Fz, 1) : Us(1), Fz ? vs(Fz, 2) : Us(1), vs(Oz.geometryOpacityTexture, 0)), Oz.aJ()).then((async zz => {
                const tz = await this.exportTextureAsync(zz, sz);
                tz && (oz.baseColorTexture = tz)
              })))
            } else Fz && Uz.push(this.exportTextureAsync(Fz).then((zz => {
              zz && (oz.baseColorTexture = zz)
            })));
            if (Oz._useMetallicFromMetallicTextureBlue && Wz) Uz.push(this.exportTextureAsync(Wz).then((zz => {
              zz && (oz.metallicRoughnessTexture = zz)
            })));
            else if (Xz || Wz) {
              const zz = Wz && Wz.getInternalTexture() ? Wz.getInternalTexture().uniqueId : 0,
                tz = Xz && Xz.getInternalTexture() ? Xz.getInternalTexture().uniqueId : 0,
                sz = Number(`${zz}${tz}`),
                Fz = this._textureMap.get(sz);
              Fz ? oz.metallicRoughnessTexture = Fz : Uz.push(os("MetalRoughTexture", Ks(Oz.ambientOcclusionTexture ? vs(Oz.ambientOcclusionTexture, 0) : Us(1), Xz ? vs(Xz, 0) : Us(1), Wz ? vs(Wz, 0) : Us(1)), Oz.aJ()).then((async zz => {
                const tz = await this.exportTextureAsync(zz, sz);
                tz && (oz.metallicRoughnessTexture = tz)
              })))
            }
          } else Fz && Uz.push(this.exportTextureAsync(Fz).then((zz => {
            zz && (oz.baseColorTexture = zz)
          }))), Wz && Uz.push(this.exportTextureAsync(Wz).then((zz => {
            zz && (oz.metallicRoughnessTexture = zz)
          })));
        return Uz.length > 0 && (this._exporter._materialNeedsUVsSet.add(Oz), await Promise.all(Uz)), Kz
      }
      _getTextureSampler(zz) {
        const tz = {};
        if (!zz || !(zz instanceof Yz.c)) return tz;
        const sz = this._getGLTFTextureWrapMode(zz.wrapU);
        10497 !== sz && (tz.wrapS = sz);
        const Fz = this._getGLTFTextureWrapMode(zz.wrapV);
        switch (10497 !== Fz && (tz.wrapT = Fz), zz.samplingMode) {
          case Yz.c.LINEAR_LINEAR:
            tz.magFilter = 9729, tz.minFilter = 9729;
            break;
          case Yz.c.LINEAR_NEAREST:
            tz.magFilter = 9729, tz.minFilter = 9728;
            break;
          case Yz.c.NEAREST_LINEAR:
            tz.magFilter = 9728, tz.minFilter = 9729;
            break;
          case Yz.c.NEAREST_LINEAR_MIPLINEAR:
            tz.magFilter = 9728, tz.minFilter = 9987;
            break;
          case Yz.c.NEAREST_NEAREST:
            tz.magFilter = 9728, tz.minFilter = 9728;
            break;
          case Yz.c.NEAREST_LINEAR_MIPNEAREST:
            tz.magFilter = 9728, tz.minFilter = 9985;
            break;
          case Yz.c.LINEAR_NEAREST_MIPNEAREST:
            tz.magFilter = 9729, tz.minFilter = 9984;
            break;
          case Yz.c.LINEAR_NEAREST_MIPLINEAR:
            tz.magFilter = 9729, tz.minFilter = 9986;
            break;
          case Yz.c.NEAREST_NEAREST_MIPLINEAR:
            tz.magFilter = 9728, tz.minFilter = 9986;
            break;
          case Yz.c.LINEAR_LINEAR_MIPLINEAR:
            tz.magFilter = 9729, tz.minFilter = 9987;
            break;
          case Yz.c.LINEAR_LINEAR_MIPNEAREST:
            tz.magFilter = 9729, tz.minFilter = 9985;
            break;
          case Yz.c.NEAREST_NEAREST_MIPNEAREST:
            tz.magFilter = 9728, tz.minFilter = 9984
        }
        return tz
      }
      _getGLTFTextureWrapMode(zz) {
        switch (zz) {
          case Yz.c.WRAP_ADDRESSMODE:
            return 10497;
          case Yz.c.CLAMP_ADDRESSMODE:
            return 33071;
          case Yz.c.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Wz.Tools.Error(`Unsupported Texture Wrap Mode ${zz}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(zz, tz, sz) {
        const Fz = {
            diffuseColor: zz._albedoColor,
            specularColor: zz._reflectivityColor,
            glossiness: zz._microSurface
          },
          Wz = zz._albedoTexture,
          Xz = zz._reflectivityTexture,
          Oz = zz._useMicroSurfaceFromReflectivityMapAlpha;
        if (Xz && !Oz) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Wz || Xz) && sz) {
          this._exporter._materialNeedsUVsSet.add(zz);
          const sz = this._exportTextureSampler(Wz || Xz),
            Oz = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Wz, Xz, Fz),
            oz = this._exporter._textures;
          if (Oz.baseColorTextureData) {
            const zz = await this._exportImageAsync(`baseColor${oz.length}`, Oz.baseColorTextureData);
            tz.baseColorTexture = this._exportTextureInfo(zz, sz, Wz?.coordinatesIndex)
          }
          if (Oz.metallicRoughnessTextureData) {
            const zz = await this._exportImageAsync(`metallicRoughness${oz.length}`, Oz.metallicRoughnessTextureData);
            tz.metallicRoughnessTexture = this._exportTextureInfo(zz, sz, Xz?.coordinatesIndex)
          }
          return Oz
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Fz)
      }
      async exportPBRMaterialAsync(zz, tz) {
        const sz = {},
          Fz = {
            name: zz.name
          },
          Wz = zz.isMetallicWorkflow();
        if (Wz) {
          const tz = zz._albedoColor,
            Fz = zz.alpha;
          tz && (sz.baseColorFactor = [tz.r, tz.g, tz.b, Fz])
        }
        const Xz = Wz ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(zz._albedoColor, zz._metallic, zz._roughness, zz._albedoTexture, zz._metallicTexture, zz._metallicTexture, zz, sz, tz) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(zz, sz, tz);
        await this._setMetallicRoughnessPbrMaterialAsync(Xz, zz, Fz, sz, tz), await this._finishMaterialAsync(Fz, zz);
        const Oz = this._exporter._materials;
        return Oz.push(Fz), Oz.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(zz, tz, sz, Fz, Xz) {
        if (Zs(sz, tz), zz.baseColor.equalsWithEpsilon(xs, Ps) && Pz.WithinEpsilon(tz.alpha, 1, Ps) || (Fz.baseColorFactor = [zz.baseColor.r, zz.baseColor.g, zz.baseColor.b, tz.alpha]), null != zz.metallic && 1 !== zz.metallic && (Fz.metallicFactor = zz.metallic), null != zz.roughness && 1 !== zz.roughness && (Fz.roughnessFactor = zz.roughness), null == tz.backFaceCulling || tz.backFaceCulling || (tz._twoSidedLighting || Wz.Tools.Warn(tz.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), sz.doubleSided = !0), Xz) {
          const zz = [],
            Wz = tz instanceof xt ? tz._bumpTexture : tz.geometryNormalTexture;
          Wz && zz.push(this.exportTextureAsync(Wz).then((zz => {
            zz && (sz.normalTexture = zz, 1 !== Wz.level && (sz.normalTexture.scale = Wz.level))
          })));
          const Xz = tz instanceof xt ? tz._ambientTexture : tz.ambientOcclusionTexture;
          Xz && zz.push(new Promise((async zz => {
            if (tz instanceof Et && Fz.metallicRoughnessTexture) {
              const tz = this._exportTextureSampler(Xz),
                sz = this._exporter._textures[Fz.metallicRoughnessTexture.index].source,
                Wz = this._exportTextureInfo(sz, tz, Xz.coordinatesIndex);
              return this._textureMap.set(Xz.uniqueId, Wz), this._exporter._extensionsPostExportTextures("exporter", Wz, Xz), zz(Wz)
            }
            return zz(await this.exportTextureAsync(Xz))
          })).then((async zz => {
            if (zz) {
              const Fz = {
                index: zz.index,
                texCoord: zz.texCoord,
                extensions: zz.extensions
              };
              sz.occlusionTexture = Fz, Fz.strength = tz instanceof xt ? tz._ambientTextureStrength : tz.ambientOcclusionTexture.level
            }
          })));
          const Oz = tz instanceof xt ? tz._emissiveTexture : tz.emissionColorTexture;
          Oz && zz.push(this.exportTextureAsync(Oz).then((zz => {
            zz && (sz.emissiveTexture = zz)
          }))), zz.length > 0 && (this._exporter._materialNeedsUVsSet.add(tz), await Promise.all(zz))
        }
        const Oz = tz instanceof xt ? tz._emissiveColor : tz.emissionColor;
        Oz.equalsWithEpsilon(ms, Ps) || (sz.emissiveFactor = Oz.hsz()), sz.pbrMetallicRoughness = Fz
      }
      async exportOpenPBRMaterialAsync(zz, tz) {
        const sz = {},
          Fz = {
            name: zz.name
          },
          Wz = zz.baseColor,
          Xz = zz.geometryOpacity;
        Wz && (sz.baseColorFactor = [Wz.r, Wz.g, Wz.b, Xz]);
        const Oz = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(zz.baseColor, zz.baseMetalness, zz.specularRoughness, zz.baseColorTexture, zz.baseMetalnessTexture, zz.specularRoughnessTexture, zz, sz, tz);
        await this._setMetallicRoughnessPbrMaterialAsync(Oz, zz, Fz, sz, tz), await this._finishMaterialAsync(Fz, zz);
        const oz = this._exporter._materials;
        return oz.push(Fz), oz.length - 1
      }
      async exportTextureAsync(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sz = this._textureMap.get(tz ?? zz.uniqueId);
        if (sz) return sz;
        const Fz = this._exportTextureSampler(zz),
          Wz = await this._exportTextureImageAsync(zz);
        return sz = this._exportTextureInfo(Wz, Fz, zz.coordinatesIndex), this._textureMap.set(tz ?? zz.uniqueId, sz), this._exporter._extensionsPostExportTextures("exporter", sz, zz), sz
      }
      async _exportTextureImageAsync(zz) {
        const tz = zz.mimeType ?? "none",
          sz = this._internalTextureToImage,
          Fz = zz.getInternalTexture().uniqueId;
        sz[Fz] = sz[Fz] || {};
        let Xz = sz[Fz][tz];
        return void 0 === Xz && (Xz = (async () => {
          const sz = await Bs(zz);
          if (sz && Is(sz.mimeType) && ("none" === tz || sz.mimeType === tz)) return await this._exportImageAsync(zz.name, new Blob([sz.data], {
            type: sz.mimeType
          }));
          let Fz = "image/png";
          "none" !== tz && (Is(tz) ? Fz = tz : (Fz = "image/png", Wz.Tools.Warn(`Unsupported media type: ${tz}. Exporting texture as PNG.`)));
          const Xz = zz.getSize(),
            Oz = await (0, rz.c)(zz),
            oz = await (0, Jz.EncodeImageAsync)(Oz, Xz.width, Xz.height, Fz);
          return await this._exportImageAsync(zz.name, oz)
        })(), sz[Fz][tz] = Xz), await Xz
      }
      async _exportImageAsync(zz, tz) {
        const sz = this._exporter._images;
        let Fz;
        if (this._exporter._shouldUseGlb) {
          Fz = {
            name: zz,
            mimeType: tz.type,
            bufferView: void 0
          };
          const sz = await tz.arrayBuffer(),
            Wz = this._exporter._bufferManager.createBufferView(new Uint8Array(sz));
          this._exporter._bufferManager.setBufferView(Fz, Wz)
        } else {
          const Xz = zz.replace(/\.\/|\/|\.\\|\\/g, "_"),
            Oz = function(zz) {
              switch (zz) {
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
            }(tz.type);
          let oz = Xz + Oz;
          sz.some((zz => zz.uri === oz)) && (oz = `${Xz}_${Wz.Tools.RandomId()}${Oz}`), Fz = {
            name: zz,
            uri: oz
          }, this._exporter._imageData[oz] = tz
        }
        return sz.push(Fz), sz.length - 1
      }
      _exportTextureInfo(zz, tz, sz) {
        const Fz = this._exporter._textures;
        let Wz = Fz.findIndex((sz => sz.sampler == tz && sz.source === zz)); - 1 === Wz && (Wz = Fz.length, Fz.push({
          source: zz,
          sampler: tz
        }));
        const Xz = {
          index: Wz
        };
        return sz && (Xz.texCoord = sz), Xz
      }
      _exportTextureSampler(zz) {
        const tz = this._getTextureSampler(zz),
          sz = this._exporter._samplers,
          Fz = sz.findIndex((zz => zz.minFilter === tz.minFilter && zz.magFilter === tz.magFilter && zz.wrapS === tz.wrapS && zz.wrapT === tz.wrapT));
        return -1 !== Fz ? Fz : (sz.push(tz), sz.length - 1)
      }
    }
    var As = sz(39231),
      ys = sz(39362);
    (0, ys.d)();
    var Ms = sz(36479);
    const ds = Fz.Matrix.Compose(new Fz.XD(-1, 1, 1), Fz.Quaternion.Identity(), Fz.XD.Zero());

    function hs(zz, tz) {
      if (!(zz instanceof uz.c)) return !1;
      if (tz) {
        if (!zz.getWorldMatrix().equalsWithEpsilon(Fz.Matrix.IdentityReadOnly, Ms.c)) return !1
      } else {
        if (!zz.getWorldMatrix().multiplyToRef(ds, Fz.TmpVectors.Matrix[0]).equalsWithEpsilon(Fz.Matrix.IdentityReadOnly, Ms.c)) return !1
      }
      return !(zz instanceof Nz.e && zz.geometry)
    }
    const Qs = Fz.XD.ZeroReadOnly,
      ks = Fz.Quaternion.Identity(),
      is = Fz.XD.OneReadOnly,
      Ls = new Fz.XD(-1, 1, 1);

    function ls(zz, tz) {
      const {
        byteOffset: sz,
        byteStride: Fz,
        type: Wz,
        normalized: Xz
      } = zz, Oz = zz.getSize(), oz = tz.reduce(((zz, tz) => tz.getTotalVertices() > zz ? tz.getTotalVertices() : zz), -Number.MAX_VALUE);
      return {
        byteOffset: sz,
        byteStride: Fz,
        componentCount: Oz,
        type: Wz,
        count: oz * Oz,
        normalized: Xz,
        totalVertices: oz,
        kind: zz.getKind()
      }
    }

    function ns(zz) {
      switch (zz) {
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

    function as(zz) {
      switch (zz) {
        case Kz.c.PositionKind:
        case Kz.c.NormalKind:
        case Kz.c.TangentKind:
        case Kz.c.ColorKind:
        case Kz.c.MatricesIndicesKind:
        case Kz.c.MatricesIndicesExtraKind:
        case Kz.c.MatricesWeightsKind:
        case Kz.c.MatricesWeightsExtraKind:
        case Kz.c.UVKind:
        case Kz.c.UV2Kind:
        case Kz.c.UV3Kind:
        case Kz.c.UV4Kind:
        case Kz.c.UV5Kind:
        case Kz.c.UV6Kind:
          return !0
      }
      return !1
    }

    function qs(zz) {
      const tz = Math.sqrt(zz.x * zz.x + zz.y * zz.y + zz.z * zz.z);
      tz > 0 && (zz.x /= tz, zz.y /= tz, zz.z /= tz)
    }

    function Ss(zz) {
      return zz.x *= -1, zz
    }

    function Vs(zz) {
      if (zz.x * zz.x + zz.y * zz.y > .5) {
        const tz = Math.abs(zz.x),
          sz = Math.abs(zz.y);
        if (tz > sz) {
          const sz = Math.sign(zz.x);
          zz.x = tz, zz.y *= -sz, zz.z *= -sz, zz.w *= sz
        } else {
          const tz = Math.sign(zz.y);
          zz.x *= -tz, zz.y = sz, zz.z *= tz, zz.w *= -tz
        }
      } else {
        const tz = Math.abs(zz.z),
          sz = Math.abs(zz.w);
        if (tz > sz) {
          const sz = Math.sign(zz.z);
          zz.x *= -sz, zz.y *= sz, zz.z = tz, zz.w *= -sz
        } else {
          const tz = Math.sign(zz.w);
          zz.x *= tz, zz.y *= -tz, zz.z *= -tz, zz.w = sz
        }
      }
      return zz
    }

    function Rs(zz) {
      zz.m_(-zz.z, zz.w, zz.x, -zz.y)
    }

    function ps(zz, tz) {
      const sz = Fz.XD.FromArrayToRef(tz.translation || [0, 0, 0], 0, Fz.TmpVectors.XD[0]),
        Wz = Fz.Quaternion.FromArrayToRef(tz.rotation || [0, 0, 0, 1], 0, Fz.TmpVectors.Quaternion[0]),
        Xz = Fz.Matrix.ComposeToRef(is, Wz, sz, Fz.TmpVectors.Matrix[0]),
        Oz = Fz.XD.FromArrayToRef(zz.translation || [0, 0, 0], 0, Fz.TmpVectors.XD[2]),
        oz = Fz.Quaternion.FromArrayToRef(zz.rotation || [0, 0, 0, 1], 0, Fz.TmpVectors.Quaternion[1]),
        vz = Fz.Matrix.ComposeToRef(is, oz, Oz, Fz.TmpVectors.Matrix[1]);
      Xz.multiplyToRef(vz, vz), vz.decompose(void 0, Wz, sz), sz.equalsWithEpsilon(Qs, Ms.c) ? delete tz.translation : tz.translation = sz.hsz(), Wz.equalsWithEpsilon(ks, Ms.c) ? delete tz.rotation : tz.rotation = Wz.hsz(), tz.scale && delete tz.scale
    }

    function fs(zz, tz) {
      if (!(tz instanceof uz.c)) return !1;
      if (!(1 === tz.getChildren().length && 0 === zz.getChildren().length && zz.parent === tz)) return !1;
      const sz = zz.aJ(),
        Fz = zz instanceof ys.h && !sz.useRightHandedSystem ? Ls : is;
      return !!tz.nX.equalsWithEpsilon(Fz, Ms.c) || (ez.e.Warn(`Cannot collapse node ${zz.name} into parent node ${tz.name} with modified scaling.`), !1)
    }

    function Es(zz) {
      if (zz instanceof Array) {
        const tz = new Float32Array(zz);
        return new Uint8Array(tz.buffer, tz.byteOffset, tz.byteLength)
      }
      return ArrayBuffer.isView(zz) ? new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength) : new Uint8Array(zz)
    }

    function zF(zz, tz) {
      for (const [sz, Fz] of Object.entries(zz)) {
        const Wz = tz[sz];
        (Array.isArray(Fz) && Array.isArray(Wz) && tF(Fz, Wz) || Fz === Wz) && delete zz[sz]
      }
      return zz
    }

    function tF(zz, tz) {
      return zz.length === tz.length && zz.every(((zz, sz) => zz === tz[sz]))
    }
    const sF = new Map([
      [Int8Array, (zz, tz, sz) => zz.setInt8(tz, sz)],
      [Uint8Array, (zz, tz, sz) => zz.setUint8(tz, sz)],
      [Uint8ClampedArray, (zz, tz, sz) => zz.setUint8(tz, sz)],
      [Int16Array, (zz, tz, sz) => zz.setInt16(tz, sz, !0)],
      [Uint16Array, (zz, tz, sz) => zz.setUint16(tz, sz, !0)],
      [Int32Array, (zz, tz, sz) => zz.setInt32(tz, sz, !0)],
      [Uint32Array, (zz, tz, sz) => zz.setUint32(tz, sz, !0)],
      [Float32Array, (zz, tz, sz) => zz.setFloat32(tz, sz, !0)],
      [Float64Array, (zz, tz, sz) => zz.setFloat64(tz, sz, !0)]
    ]);
    class FF {
      writeTypedArray(zz) {
        this._checkGrowBuffer(zz.byteLength);
        const tz = sF.get(zz.constructor);
        for (let sz = 0; sz < zz.length; sz++) tz(this._dataView, this._byteOffset, zz[sz]), this._byteOffset += zz.BYTES_PER_ELEMENT
      }
      constructor(zz) {
        this._data = new Uint8Array(zz), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(zz) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, zz), this._byteOffset++
      }
      writeInt8(zz) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, zz), this._byteOffset++
      }
      writeInt16(zz) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, zz, !0), this._byteOffset += 2
      }
      writeUInt16(zz) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, zz, !0), this._byteOffset += 2
      }
      writeInt32(zz) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, zz, !0), this._byteOffset += 4
      }
      writeUInt32(zz) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, zz, !0), this._byteOffset += 4
      }
      writeFloat32(zz) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, zz, !0), this._byteOffset += 4
      }
      writeFloat64(zz) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, zz, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(zz) {
        const tz = this.byteOffset + zz;
        if (tz > this._data.byteLength) {
          const zz = new Uint8Array(2 * tz);
          zz.set(this._data), this._data = zz, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function WF(zz) {
      return zz % 4 === 0 ? 4 : zz % 2 === 0 ? 2 : 1
    }
    class XF {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(zz) {
        let tz = 0;
        this._bufferViewToData.forEach((zz => {
          tz += zz.byteLength
        }));
        const sz = new FF(tz),
          Fz = Array.from(this._bufferViewToData.keys()).sort(((zz, tz) => WF(tz.byteLength) - WF(zz.byteLength)));
        for (const Wz of Fz) {
          Wz.byteOffset = sz.byteOffset, zz.push(Wz);
          const tz = zz.length - 1,
            Fz = this.getPropertiesWithBufferView(Wz);
          for (const zz of Fz) zz.bufferView = tz;
          sz.writeTypedArray(this._bufferViewToData.get(Wz)), this._bufferViewToData.delete(Wz)
        }
        return sz.getOutputData()
      }
      createBufferView(zz, tz) {
        const sz = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: zz.byteLength,
          byteStride: tz
        };
        return this._bufferViewToData.set(sz, zz), sz
      }
      createAccessor(zz, tz, sz, Fz, Wz, Xz, Oz) {
        this._verifyBufferView(zz);
        const oz = {
          bufferView: void 0,
          componentType: sz,
          count: Fz,
          type: tz,
          min: Xz?.min,
          max: Xz?.max,
          normalized: Oz,
          byteOffset: Wz
        };
        return this.setBufferView(oz, zz), this._accessorToBufferView.set(oz, zz), oz
      }
      setBufferView(zz, tz) {
        this._verifyBufferView(tz);
        this.getPropertiesWithBufferView(tz).push(zz)
      }
      removeBufferView(zz) {
        const tz = this.getPropertiesWithBufferView(zz);
        for (const sz of tz) void 0 !== sz.bufferView && delete sz.bufferView;
        this._bufferViewToData.delete(zz), this._bufferViewToProperties.delete(zz), this._accessorToBufferView.forEach(((tz, sz) => {
          tz === zz && (void 0 !== sz.byteOffset && delete sz.byteOffset, this._accessorToBufferView.delete(sz))
        }))
      }
      getBufferView(zz) {
        const tz = this._accessorToBufferView.get(zz);
        return this._verifyBufferView(tz), tz
      }
      getPropertiesWithBufferView(zz) {
        return this._verifyBufferView(zz), this._bufferViewToProperties.set(zz, this._bufferViewToProperties.get(zz) ?? []), this._bufferViewToProperties.get(zz)
      }
      getData(zz) {
        return this._verifyBufferView(zz), this._bufferViewToData.get(zz)
      }
      _verifyBufferView(zz) {
        if (void 0 === zz || !this._bufferViewToData.has(zz)) throw new Error(`BufferView ${zz} not found in BufferManager.`)
      }
    }
    var OF = sz(39370);
    (0, OF.c)();
    var oF = sz(39588);
    (0, oF.f)();
    var vF = sz(39427),
      UF = sz(40185);
    (0, UF.h)();
    let KF = (() => {
      var zz;
      let tz, sz, Fz = [],
        Wz = [],
        Xz = [],
        Oz = [];
      return zz = class {
        get influence() {
          return this._influence
        }
        set influence(zz) {
          if (this._influence === zz) return;
          const tz = this._influence;
          this._influence = zz, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === tz || 0 === zz)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(zz) {
          this._animationPropertiesOverride = zz
        }
        constructor(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            oz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = zz, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new ts.c, this._onDataLayoutChanged = new ts.c, this.id = (0, Iz.k)(this, Fz, void 0), this.morphTargetManager = ((0, Iz.k)(this, Wz), (0, Iz.k)(this, Xz, null)), this._animationPropertiesOverride = ((0, Iz.k)(this, Oz), null), this.id = zz, this.morphTargetManager = oz, this._scene = sz || Dz.c.LastCreatedScene, this.influence = tz, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        bOz(zz) {
          const tz = this.hasPositions;
          this._positions = zz, tz !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(zz) {
          const tz = this.hasNormals;
          this._normals = zz, tz !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(zz) {
          const tz = this.hasTangents;
          this._tangents = zz, tz !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(zz) {
          const tz = this.hasUVs;
          this._uvs = zz, tz !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(zz) {
          const tz = this.hasUV2s;
          this._uv2s = zz, tz !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(zz) {
          const tz = this.hasColors;
          this._colors = zz, tz !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const tz = mt.e.Clone((() => new zz(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return tz._positions = this._positions, tz._normals = this._normals, tz._tangents = this._tangents, tz._uvs = this._uvs, tz._uv2s = this._uv2s, tz._colors = this._colors, tz
        }
        serialize() {
          const zz = {};
          return zz.name = this.name, zz.influence = this.influence, null != this.id && (zz.id = this.id), zz.uniqueId = this.uniqueId, zz.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (zz.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (zz.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (zz.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (zz.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (zz.colors = Array.prototype.slice.call(this.getColors())), mt.e.AppendSerializedAnimations(this, zz), zz
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(tz, sz) {
          let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Wz = new zz(tz.name, tz.influence, sz, Fz);
          if (Wz.bOz(tz.positions), null != tz.id && (Wz.id = tz.id), tz.normals && Wz.setNormals(tz.normals), tz.tangents && Wz.setTangents(tz.tangents), tz.uvs && Wz.setUVs(tz.uvs), tz.uv2s && Wz.setUV2s(tz.uv2s), tz.colors && Wz.setColors(tz.colors), tz.animations) {
            for (let zz = 0; zz < tz.animations.length; zz++) {
              const sz = tz.animations[zz],
                Fz = (0, it.e)("BABYLON.Animation");
              Fz && Wz.animations.push(Fz.Parse(sz))
            }
            tz.autoAnimate && sz && sz.beginAnimation(Wz, tz.autoAnimateFrom, tz.autoAnimateTo, tz.autoAnimateLoop, tz.autoAnimateSpeed || 1)
          }
          return Wz
        }
        static FromMesh(tz, sz, Fz) {
          sz || (sz = tz.name);
          const Wz = new zz(sz, Fz, tz.aJ(), tz.morphTargetManager);
          return Wz.bOz(tz.getVerticesData(Qz.m.PositionKind)), tz.isVerticesDataPresent(Qz.m.NormalKind) && Wz.setNormals(tz.getVerticesData(Qz.m.NormalKind)), tz.isVerticesDataPresent(Qz.m.TangentKind) && Wz.setTangents(tz.getVerticesData(Qz.m.TangentKind)), tz.isVerticesDataPresent(Qz.m.UVKind) && Wz.setUVs(tz.getVerticesData(Qz.m.UVKind)), tz.isVerticesDataPresent(Qz.m.UV2Kind) && Wz.setUV2s(tz.getVerticesData(Qz.m.UV2Kind)), tz.isVerticesDataPresent(Qz.m.ColorKind) && Wz.setColors(tz.getVerticesData(Qz.m.ColorKind)), Wz
        }
      }, (() => {
        const oz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        tz = [(0, Cz.J)()], sz = [(0, Cz.J)()], (0, Iz.h)(null, null, tz, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: zz => "id" in zz,
            get: zz => zz.id,
            set: (zz, tz) => {
              zz.id = tz
            }
          },
          metadata: oz
        }, Fz, Wz), (0, Iz.h)(null, null, sz, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: zz => "morphTargetManager" in zz,
            get: zz => zz.morphTargetManager,
            set: (zz, tz) => {
              zz.morphTargetManager = tz
            }
          },
          metadata: oz
        }, Xz, Oz), oz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oz
        })
      })(), zz
    })();
    var uF, NF = sz(40240),
      bF = sz(39421);
    ! function(zz) {
      zz[zz.INTANGENT = 0] = "INTANGENT", zz[zz.OUTTANGENT = 1] = "OUTTANGENT"
    }(uF || (uF = {}));
    class wF {
      static _IsTransformable(zz) {
        return zz && (zz instanceof uz.c || zz instanceof OF.b || zz instanceof bF.d)
      }
      static _CreateNodeAnimation(zz, tz, sz, Fz, Xz) {
        if (this._IsTransformable(zz)) {
          const Oz = [],
            oz = [],
            vz = tz.getKeys(),
            Uz = wF._CalculateMinMaxKeyFrames(vz),
            Kz = wF._DeduceInterpolation(vz, sz, Fz),
            uz = Kz.interpolationType,
            Nz = Kz.shouldBakeAnimation;
          if (Nz ? wF._CreateBakedAnimation(zz, tz, sz, Uz.min, Uz.max, tz.framePerSecond, Xz, Oz, oz, Uz, Fz) : "LINEAR" === uz || "STEP" === uz ? wF._CreateLinearOrStepAnimation(zz, tz, sz, Oz, oz, Fz) : "CUBICSPLINE" === uz ? wF._CreateCubicSplineAnimation(zz, tz, sz, Oz, oz, Fz) : wF._CreateBakedAnimation(zz, tz, sz, Uz.min, Uz.max, tz.framePerSecond, Xz, Oz, oz, Uz, Fz), Oz.length && oz.length) {
            return {
              inputs: Oz,
              outputs: oz,
              samplerInterpolation: uz,
              inputsMin: Nz ? Uz.min : Wz.Tools.FloatRound(Uz.min / tz.framePerSecond),
              inputsMax: Nz ? Uz.max : Wz.Tools.FloatRound(Uz.max / tz.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(zz) {
        let tz = null,
          sz = "VEC3",
          Fz = !1;
        const Xz = zz.targetProperty.split(".");
        switch (Xz[0]) {
          case "nX":
            tz = "scale";
            break;
          case "position":
            tz = "translation";
            break;
          case "rotation":
            sz = "VEC4", tz = "rotation";
            break;
          case "rotationQuaternion":
            sz = "VEC4", Fz = !0, tz = "rotation";
            break;
          case "influence":
            sz = "SCALAR", tz = "weights";
            break;
          default:
            Wz.Tools.Error(`Unsupported animatable property ${Xz[0]}`)
        }
        return tz ? {
          animationChannelTargetPath: tz,
          dataAccessorType: sz,
          useQuaternion: Fz
        } : (Wz.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz) {
        let uz;
        if (wF._IsTransformable(zz) && zz.animations)
          for (const Nz of zz.animations) {
            if (Kz && !Kz(Nz)) continue;
            const Wz = wF._DeduceAnimationInfo(Nz);
            Wz && (uz = {
              name: Nz.name,
              samplers: [],
              channels: []
            }, wF._AddAnimation(`${Nz.name}`, Nz.hasRunningRuntimeAnimations ? tz : uz, zz, Nz, Wz.dataAccessorType, Wz.animationChannelTargetPath, Fz, Xz, Oz, oz, Wz.useQuaternion, vz, Uz), uz.samplers.length && uz.channels.length && sz.push(uz))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz) {
        let uz;
        if (zz instanceof NF.b) {
          const Wz = zz.morphTargetManager;
          if (Wz)
            for (let Nz = 0; Nz < Wz.numTargets; ++Nz) {
              const bz = Wz.getTarget(Nz);
              for (const wz of bz.animations) {
                if (Kz && !Kz(wz)) continue;
                const bz = new UF.d(`${wz.name}`, "influence", wz.framePerSecond, wz.dataType, wz.hX, wz.enableBlending),
                  Dz = [],
                  gz = wz.getKeys();
                for (let zz = 0; zz < gz.length; ++zz) {
                  const tz = gz[zz];
                  for (let zz = 0; zz < Wz.numTargets; ++zz) zz == Nz ? Dz.push(tz) : Dz.push({
                    frame: tz.frame,
                    value: 0
                  })
                }
                bz.setKeys(Dz, !0);
                const Hz = wF._DeduceAnimationInfo(bz);
                Hz && (uz = {
                  name: bz.name,
                  samplers: [],
                  channels: []
                }, wF._AddAnimation(wz.name, wz.hasRunningRuntimeAnimations ? tz : uz, zz, bz, Hz.dataAccessorType, Hz.animationChannelTargetPath, Fz, Xz, Oz, oz, Hz.useQuaternion, vz, Uz, Wz.numTargets), uz.samplers.length && uz.channels.length && sz.push(uz))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
        let Kz;
        if (zz.animationGroups) {
          const uz = zz.animationGroups;
          for (const Nz of uz) {
            const uz = new Map,
              bz = new Map,
              wz = new Set,
              Dz = Nz.to - Nz.from;
            Kz = {
              name: Nz.name,
              channels: [],
              samplers: []
            };
            for (let tz = 0; tz < Nz.targetedAnimations.length; ++tz) {
              const Uz = Nz.targetedAnimations[tz],
                Dz = Uz.target,
                gz = Uz.animation;
              if (vz && !vz(gz)) continue;
              const Hz = oz.has(Dz);
              if (this._IsTransformable(Dz) || 1 === Dz.length && this._IsTransformable(Dz[0])) {
                const zz = wF._DeduceAnimationInfo(Uz.animation);
                if (zz) {
                  const tz = this._IsTransformable(Dz) ? Dz : this._IsTransformable(Dz[0]) ? Dz[0] : null;
                  tz && wF._AddAnimation(`${gz.name}`, Kz, tz, gz, zz.dataAccessorType, zz.animationChannelTargetPath, sz, Fz, Wz, Xz, zz.useQuaternion, Oz, Hz)
                }
              } else if (Dz instanceof KF || 1 === Dz.length && Dz[0] instanceof KF) {
                if (wF._DeduceAnimationInfo(Uz.animation)) {
                  const tz = Dz instanceof KF ? Dz : Dz[0];
                  if (tz) {
                    const sz = zz.morphTargetManagers.find((zz => {
                      for (let sz = 0; sz < zz.numTargets; ++sz)
                        if (zz.getTarget(sz) === tz) return !0;
                      return !1
                    }));
                    if (sz) {
                      const Fz = zz.meshes.find((zz => zz.morphTargetManager === sz));
                      Fz && (uz.has(Fz) || uz.set(Fz, new Map), uz.get(Fz)?.set(tz, gz), wz.add(Fz), bz.set(Fz, gz))
                    }
                  }
                }
              }
            }
            wz.forEach((zz => {
              const tz = zz.morphTargetManager;
              let oz = null;
              const vz = [],
                Uz = bz.get(zz).getKeys(),
                wz = Uz.length;
              for (let sz = 0; sz < wz; ++sz)
                for (let Fz = 0; Fz < tz.numTargets; ++Fz) {
                  const Wz = tz.getTarget(Fz),
                    Xz = uz.get(zz);
                  if (Xz) {
                    const tz = Xz.get(Wz);
                    tz ? (oz || (oz = new UF.d(`${Nz.name}_${zz.name}_MorphWeightAnimation`, "influence", tz.framePerSecond, UF.d.ANIMATIONTYPE_FLOAT, tz.hX, tz.enableBlending)), vz.push(tz.getKeys()[sz])) : vz.push({
                      frame: Nz.from + Dz / wz * sz,
                      value: Wz.influence,
                      inTangent: Uz[0].inTangent ? 0 : void 0,
                      outTangent: Uz[0].outTangent ? 0 : void 0
                    })
                  }
                }
              oz.setKeys(vz, !0);
              const gz = wF._DeduceAnimationInfo(oz);
              gz && wF._AddAnimation(`${Nz.name}_${zz.name}_MorphWeightAnimation`, Kz, zz, oz, gz.dataAccessorType, gz.animationChannelTargetPath, sz, Fz, Wz, Xz, gz.useQuaternion, Oz, !1, tz?.numTargets)
            })), Kz.channels.length && Kz.samplers.length && (Uz?.set(Nz, tz.length), tz.push(Kz))
          }
        }
      }
      static _AddAnimation(zz, tz, sz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz) {
        const Dz = wF._CreateNodeAnimation(sz, Wz, Oz, uz, Nz);
        let gz, Hz, Bz, Pz, rz, Yz;
        if (Dz) {
          if (wz) {
            let zz, tz = 0;
            const sz = [];
            for (; Dz.inputs.length > 0;) zz = Dz.inputs.shift(), tz % wz == 0 && sz.push(zz), tz++;
            Dz.inputs = sz
          }
          const zz = oz.get(sz),
            Wz = new Float32Array(Dz.inputs);
          gz = vz.createBufferView(Wz), Hz = vz.createAccessor(gz, "SCALAR", 5126, Dz.inputs.length, void 0, {
            min: [Dz.inputsMin],
            max: [Dz.inputsMax]
          }), Kz.push(Hz), Bz = Kz.length - 1;
          const Uz = new Fz.Quaternion,
            uz = new Fz.XD,
            Nz = new Fz.XD,
            xz = sz instanceof OF.b,
            mz = ns(Xz),
            Jz = new Float32Array(Dz.outputs.length * mz);
          Dz.outputs.forEach((function(zz, tz) {
            let sz = zz;
            switch (Oz) {
              case "translation":
                bz && (Fz.XD.FromArrayToRef(zz, 0, Nz), Ss(Nz), Nz.toArray(sz));
                break;
              case "rotation":
                4 === zz.length ? Fz.Quaternion.FromArrayToRef(zz, 0, Uz) : (sz = new Array(4), Fz.XD.FromArrayToRef(zz, 0, uz), Fz.Quaternion.FromEulerVectorToRef(uz, Uz)), bz && (Vs(Uz), xz && Rs(Uz)), Uz.toArray(sz)
            }
            Jz.set(sz, tz * mz)
          })), gz = vz.createBufferView(Jz), Hz = vz.createAccessor(gz, Xz, 5126, Dz.outputs.length), Kz.push(Hz), Pz = Kz.length - 1, rz = {
            interpolation: Dz.samplerInterpolation,
            input: Bz,
            output: Pz
          }, tz.samplers.push(rz), Yz = {
            sampler: tz.samplers.length - 1,
            target: {
              node: zz,
              path: Oz
            }
          }, tz.channels.push(Yz)
        }
      }
      static _CreateBakedAnimation(zz, tz, sz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz) {
        let bz;
        const wz = Fz.Quaternion.Identity();
        let Dz, gz, Hz, Bz, Pz, rz = null,
          Yz = null;
        uz.min = Wz.Tools.FloatRound(Xz / oz);
        const xz = tz.getKeys();
        for (let Fz = 0, mz = xz.length; Fz < mz; ++Fz) {
          if (gz = xz[Fz], Fz + 1 < mz)
            if (Hz = xz[Fz + 1], gz.value.equals && gz.value.equals(Hz.value) || gz.value === Hz.value) {
              if (0 !== Fz) continue;
              Pz = gz.frame
            } else Pz = Hz.frame;
          else {
            if (Bz = xz[Fz - 1], gz.value.equals && gz.value.equals(Bz.value) || gz.value === Bz.value) continue;
            Pz = Oz
          }
          if (Pz)
            for (let Fz = gz.frame; Fz <= Pz; Fz += vz) {
              if (Dz = Wz.Tools.FloatRound(Fz / oz), Dz === rz) continue;
              rz = Dz, Yz = Dz;
              const Xz = {
                key: 0,
                repeatCount: 0,
                hX: tz.hX
              };
              bz = tz._interpolate(Fz, Xz), wF._SetInterpolatedValue(zz, bz, Dz, tz, sz, wz, Uz, Kz, Nz)
            }
        }
        Yz && (uz.max = Yz)
      }
      static _ConvertFactorToVector3OrQuaternion(zz, tz, sz, Xz, Oz) {
        const oz = wF._GetBasePositionRotationOrScale(tz, Xz, Oz),
          vz = sz.targetProperty.split("."),
          Uz = vz ? vz[1] : "",
          Kz = Oz ? Fz.Quaternion.FromArray(oz).normalize() : Fz.XD.FromArray(oz);
        switch (Uz) {
          case "x":
          case "y":
          case "z":
            Kz[Uz] = zz;
            break;
          case "w":
            Kz.w = zz;
            break;
          default:
            Wz.Tools.Error(`glTFAnimation: Unsupported component name "${Uz}"!`)
        }
        return Kz
      }
      static _SetInterpolatedValue(zz, tz, sz, Wz, Xz, Oz, oz, vz, Uz) {
        let Kz;
        oz.push(sz), "weights" !== Xz ? (Wz.dataType === UF.d.ANIMATIONTYPE_FLOAT && (tz = this._ConvertFactorToVector3OrQuaternion(tz, zz, Wz, Xz, Uz)), "rotation" === Xz ? (Uz ? Oz = tz : (Kz = tz, Fz.Quaternion.RotationYawPitchRollToRef(Kz.y, Kz.x, Kz.z, Oz)), vz.push(Oz.hsz())) : (Kz = tz, vz.push(Kz.hsz()))) : vz.push([tz])
      }
      static _CreateLinearOrStepAnimation(zz, tz, sz, Fz, Wz, Xz) {
        for (const Oz of tz.getKeys()) Fz.push(Oz.frame / tz.framePerSecond), wF._AddKeyframeValue(Oz, tz, Wz, sz, zz, Xz)
      }
      static _CreateCubicSplineAnimation(zz, tz, sz, Fz, Wz, Xz) {
        tz.getKeys().forEach((function(Oz) {
          Fz.push(Oz.frame / tz.framePerSecond), wF._AddSplineTangent(uF.INTANGENT, Wz, sz, "CUBICSPLINE", Oz, Xz), wF._AddKeyframeValue(Oz, tz, Wz, sz, zz, Xz), wF._AddSplineTangent(uF.OUTTANGENT, Wz, sz, "CUBICSPLINE", Oz, Xz)
        }))
      }
      static _GetBasePositionRotationOrScale(zz, tz, sz) {
        let Wz;
        if ("rotation" === tz)
          if (sz) {
            Wz = (zz.rotationQuaternion ?? Fz.Quaternion.Identity()).hsz()
          } else {
            Wz = (zz.rotation ?? Fz.XD.Zero()).hsz()
          }
        else if ("translation" === tz) {
          Wz = (zz.position ?? Fz.XD.Zero()).hsz()
        } else {
          Wz = (zz.nX ?? Fz.XD.One()).hsz()
        }
        return Wz
      }
      static _AddKeyframeValue(zz, tz, sz, Xz, Oz, oz) {
        let vz;
        const Uz = tz.dataType;
        if (Uz === UF.d.ANIMATIONTYPE_VECTOR3) {
          let tz = zz.value.hsz();
          if ("rotation" === Xz) {
            const zz = Fz.XD.FromArray(tz);
            tz = Fz.Quaternion.RotationYawPitchRoll(zz.y, zz.x, zz.z).hsz()
          }
          sz.push(tz)
        } else if (Uz === UF.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === Xz) sz.push([zz.value]);
          else if (vz = this._ConvertFactorToVector3OrQuaternion(zz.value, Oz, tz, Xz, oz), vz) {
            if ("rotation" === Xz) {
              const zz = oz ? vz : Fz.Quaternion.RotationYawPitchRoll(vz.y, vz.x, vz.z).normalize();
              sz.push(zz.hsz())
            }
            sz.push(vz.hsz())
          }
        } else Uz === UF.d.ANIMATIONTYPE_QUATERNION ? sz.push(zz.value.normalize().hsz()) : Wz.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(zz, tz, sz) {
        let Fz, Wz, Xz = !1;
        if ("rotation" === tz && !sz) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let Oz = 0, oz = zz.length; Oz < oz; ++Oz)
          if (Wz = zz[Oz], Wz.inTangent || Wz.outTangent)
            if (Fz) {
              if ("CUBICSPLINE" !== Fz) {
                Fz = "LINEAR", Xz = !0;
                break
              }
            } else Fz = "CUBICSPLINE";
        else if (Fz) {
          if ("CUBICSPLINE" === Fz || Wz.interpolation && 1 === Wz.interpolation && "STEP" !== Fz) {
            Fz = "LINEAR", Xz = !0;
            break
          }
        } else Fz = Wz.interpolation && 1 === Wz.interpolation ? "STEP" : "LINEAR";
        return Fz || (Fz = "LINEAR"), {
          interpolationType: Fz,
          shouldBakeAnimation: Xz
        }
      }
      static _AddSplineTangent(zz, tz, sz, Wz, Xz, Oz) {
        let oz;
        const vz = zz === uF.INTANGENT ? Xz.inTangent : Xz.outTangent;
        if ("CUBICSPLINE" === Wz) {
          if ("rotation" === sz)
            if (vz)
              if (Oz) oz = vz.hsz();
              else {
                const zz = vz;
                oz = Fz.Quaternion.RotationYawPitchRoll(zz.y, zz.x, zz.z).hsz()
              }
          else oz = [0, 0, 0, 0];
          else oz = "weights" === sz ? vz ? [vz] : [0] : vz ? vz.hsz() : [0, 0, 0];
          tz.push(oz)
        }
      }
      static _CalculateMinMaxKeyFrames(zz) {
        let tz = 1 / 0,
          sz = -1 / 0;
        return zz.forEach((function(zz) {
          tz = Math.min(tz, zz.frame), sz = Math.max(sz, zz.frame)
        })), {
          min: tz,
          max: sz
        }
      }
    }

    function DF(zz, tz, sz, Xz, Oz, oz) {
      const vz = {
          attributes: {},
          influence: zz.influence,
          name: zz.name
        },
        Uz = tz.geometry;
      if (!Uz) return Wz.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), vz;
      const uz = oz ? -1 : 1,
        Nz = Fz.XD.Zero();
      let bz, wz;
      if (zz.hasPositions) {
        const Xz = zz.getPositions(),
          oz = Uz.getVerticesData(Kz.c.PositionKind);
        if (oz) {
          const zz = new Float32Array(oz.length),
            tz = [1 / 0, 1 / 0, 1 / 0],
            Wz = [-1 / 0, -1 / 0, -1 / 0];
          wz = oz.length / 3, bz = 0;
          for (let sz = bz; sz < wz; ++sz) {
            const Oz = Fz.XD.FromArray(oz, 3 * sz);
            Fz.XD.FromArray(Xz, 3 * sz).subtractToRef(Oz, Nz), Nz.x *= uz, tz[0] = Math.min(tz[0], Nz.x), Wz[0] = Math.max(Wz[0], Nz.x), tz[1] = Math.min(tz[1], Nz.y), Wz[1] = Math.max(Wz[1], Nz.y), tz[2] = Math.min(tz[2], Nz.z), Wz[2] = Math.max(Wz[2], Nz.z), zz[3 * sz] = Nz.x, zz[3 * sz + 1] = Nz.y, zz[3 * sz + 2] = Nz.z
          }
          const Uz = sz.createBufferView(zz, 12),
            Kz = sz.createAccessor(Uz, "VEC3", 5126, Xz.length / 3, 0, {
              min: tz,
              max: Wz
            });
          Oz.push(Kz), vz.attributes.POSITION = Oz.length - 1
        } else Wz.Tools.Warn(`Morph target positions for mesh ${tz.name} were not exported. Mesh does not have position vertex data`)
      }
      if (zz.hasNormals) {
        const Xz = zz.getNormals(),
          oz = Uz.getVerticesData(Kz.c.NormalKind);
        if (oz) {
          const zz = new Float32Array(oz.length);
          wz = oz.length / 3, bz = 0;
          for (let sz = bz; sz < wz; ++sz) {
            const tz = Fz.XD.FromArray(oz, 3 * sz).normalize();
            Fz.XD.FromArray(Xz, 3 * sz).normalize().subtractToRef(tz, Nz), zz[3 * sz] = Nz.x * uz, zz[3 * sz + 1] = Nz.y, zz[3 * sz + 2] = Nz.z
          }
          const tz = sz.createBufferView(zz, 12),
            Wz = sz.createAccessor(tz, "VEC3", 5126, Xz.length / 3, 0);
          Oz.push(Wz), vz.attributes.NORMAL = Oz.length - 1
        } else Wz.Tools.Warn(`Morph target normals for mesh ${tz.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (zz.hasTangents) {
        const Xz = zz.getTangents(),
          oz = Uz.getVerticesData(Kz.c.TangentKind);
        if (oz) {
          wz = oz.length / 4;
          const zz = new Float32Array(3 * wz);
          bz = 0;
          for (let sz = bz; sz < wz; ++sz) {
            const tz = Fz.XD.FromArray(oz, 4 * sz);
            qs(tz);
            const Wz = Fz.XD.FromArray(Xz, 3 * sz);
            qs(Wz), Wz.subtractToRef(tz, Nz), zz[3 * sz] = Nz.x * uz, zz[3 * sz + 1] = Nz.y, zz[3 * sz + 2] = Nz.z
          }
          const tz = sz.createBufferView(zz, 12),
            Wz = sz.createAccessor(tz, "VEC3", 5126, wz, 0);
          Oz.push(Wz), vz.attributes.TANGENT = Oz.length - 1
        } else Wz.Tools.Warn(`Morph target tangents for mesh ${tz.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (zz.hasColors) {
        const Xz = zz.getColors(),
          oz = Uz.getVerticesData(Kz.c.ColorKind),
          uz = Uz.getVertexBuffer(Kz.c.ColorKind);
        if (oz && uz) {
          const zz = uz.getSize();
          wz = oz.length / zz;
          const tz = new Float32Array(wz * zz);
          bz = 0;
          for (let sz = bz; sz < wz; ++sz)
            if (3 === zz) {
              const Wz = Fz.XD.FromArray(oz, sz * zz);
              Fz.XD.FromArray(Xz, sz * zz).subtractToRef(Wz, Nz), tz[3 * sz] = Nz.x, tz[3 * sz + 1] = Nz.y, tz[3 * sz + 2] = Nz.z
            } else if (4 === zz) {
            const Wz = new Fz.Vector4,
              Oz = Fz.Vector4.FromArray(oz, sz * zz);
            Fz.Vector4.FromArray(Xz, sz * zz).subtractToRef(Oz, Wz), tz[4 * sz] = Wz.x, tz[4 * sz + 1] = Wz.y, tz[4 * sz + 2] = Wz.z, tz[4 * sz + 3] = Wz.w
          } else Wz.Tools.Warn(`Unsupported number of components for color attribute: ${zz}`);
          const Uz = sz.createBufferView(tz, 4 * zz),
            Kz = sz.createAccessor(Uz, 3 === zz ? "VEC3" : "VEC4", 5126, wz, 0);
          Oz.push(Kz), vz.attributes.COLOR_0 = Oz.length - 1
        } else Wz.Tools.Warn(`Morph target colors for mesh ${tz.name} were not exported. Mesh does not have colors vertex data`)
      }
      return vz
    }
    var gF = sz(40701);
    class HF {}
    HF.DEFAULT_COLOR = az.c.White(), HF.DEFAULT_WIDTH_ATTENUATED = 1, HF.DEFAULT_WIDTH = .1;
    var BF = sz(40180);
    class PF {
      constructor(zz) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = zz
      }
      moveTo(zz, tz) {
        this._currentPath = new BF.g(zz, tz), this._tempPaths.push(this._currentPath)
      }
      lineTo(zz, tz) {
        this._currentPath.addLineTo(zz, tz)
      }
      quadraticCurveTo(zz, tz, sz, Fz) {
        this._currentPath.addQuadraticCurveTo(zz, tz, sz, Fz, this._resolution)
      }
      bezierCurveTo(zz, tz, sz, Fz, Wz, Xz) {
        this._currentPath.addBezierCurveTo(zz, tz, sz, Fz, Wz, Xz, this._resolution)
      }
      extractHoles() {
        for (const zz of this._tempPaths) zz.area() > 0 ? this._holes.push(zz) : this._paths.push(zz);
        if (!this._paths.length && this._holes.length) {
          const zz = this._holes;
          this._holes = this._paths, this._paths = zz
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

    function rF(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = Xz.glyphs[zz] || Xz.glyphs["?"];
      if (!Oz) return null;
      const oz = new PF(Wz);
      if (Oz.o) {
        const zz = Oz.o.split(" ");
        for (let Wz = 0, Xz = zz.length; Wz < Xz;) {
          switch (zz[Wz++]) {
            case "m": {
              const Xz = parseInt(zz[Wz++]) * tz + sz,
                Oz = parseInt(zz[Wz++]) * tz + Fz;
              oz.moveTo(Xz, Oz);
              break
            }
            case "l": {
              const Xz = parseInt(zz[Wz++]) * tz + sz,
                Oz = parseInt(zz[Wz++]) * tz + Fz;
              oz.lineTo(Xz, Oz);
              break
            }
            case "q": {
              const Xz = parseInt(zz[Wz++]) * tz + sz,
                Oz = parseInt(zz[Wz++]) * tz + Fz,
                vz = parseInt(zz[Wz++]) * tz + sz,
                Uz = parseInt(zz[Wz++]) * tz + Fz;
              oz.quadraticCurveTo(vz, Uz, Xz, Oz);
              break
            }
            case "b": {
              const Xz = parseInt(zz[Wz++]) * tz + sz,
                Oz = parseInt(zz[Wz++]) * tz + Fz,
                vz = parseInt(zz[Wz++]) * tz + sz,
                Uz = parseInt(zz[Wz++]) * tz + Fz,
                Kz = parseInt(zz[Wz++]) * tz + sz,
                uz = parseInt(zz[Wz++]) * tz + Fz;
              oz.bezierCurveTo(vz, Uz, Kz, uz, Xz, Oz);
              break
            }
          }
        }
      }
      return oz.extractHoles(), {
        offsetX: Oz.ha * tz,
        shapePath: oz
      }
    }

    function YF(zz, tz, sz, Fz) {
      const Wz = Array.from(zz),
        Xz = tz / Fz.resolution,
        Oz = (Fz.boundingBox.yMax - Fz.boundingBox.yMin + Fz.underlineThickness) * Xz,
        oz = [];
      let vz = 0,
        Uz = 0;
      for (let Kz = 0; Kz < Wz.length; Kz++) {
        const zz = Wz[Kz];
        if ("\n" === zz) vz = 0, Uz -= Oz;
        else {
          const tz = rF(zz, Xz, vz, Uz, sz, Fz);
          tz && (vz += tz.offsetX, oz.push(tz.shapePath))
        }
      }
      return oz
    }
    class xF {
      static ConvertPoints(zz, tz) {
        if (zz.length && Array.isArray(zz) && "number" === typeof zz[0]) return [zz];
        if (zz.length && Array.isArray(zz[0]) && "number" === typeof zz[0][0]) return zz;
        if (zz.length && !Array.isArray(zz[0]) && zz[0] instanceof hz.p) {
          const tz = [];
          for (let sz = 0; sz < zz.length; sz++) {
            const Fz = zz[sz];
            tz.push(Fz.x, Fz.y, Fz.z)
          }
          return [tz]
        }
        if (zz.length > 0 && Array.isArray(zz[0]) && zz[0].length > 0 && zz[0][0] instanceof hz.p) {
          const tz = [],
            sz = zz;
          for (const zz of sz) tz.push(zz.flatMap((zz => [zz.x, zz.y, zz.z])));
          return tz
        }
        if (zz instanceof Float32Array) {
          if (tz?.floatArrayStride) {
            const sz = [],
              Fz = 3 * tz.floatArrayStride;
            for (let tz = 0; tz < zz.length; tz += Fz) {
              const Wz = new Array(Fz);
              for (let sz = 0; sz < Fz; sz++) Wz[sz] = zz[tz + sz];
              sz.push(Wz)
            }
            return sz
          }
          return [Array.from(zz)]
        }
        if (zz.length && zz[0] instanceof Float32Array) {
          const tz = [];
          for (const sz of zz) tz.push(Array.from(sz));
          return tz
        }
        return []
      }
      static OmitZeroLengthPredicate(zz, tz, sz) {
        const Fz = [];
        return tz.subtract(zz).lengthSquared() > 0 && Fz.push([zz, tz]), sz.subtract(tz).lengthSquared() > 0 && Fz.push([tz, sz]), zz.subtract(sz).lengthSquared() > 0 && Fz.push([sz, zz]), 0 === Fz.length ? null : Fz
      }
      static OmitDuplicatesPredicate(zz, tz, sz, Fz) {
        const Wz = [];
        return xF._SearchInPoints(zz, tz, Fz) || Wz.push([zz, tz]), xF._SearchInPoints(tz, sz, Fz) || Wz.push([tz, sz]), xF._SearchInPoints(sz, zz, Fz) || Wz.push([sz, zz]), 0 === Wz.length ? null : Wz
      }
      static _SearchInPoints(zz, tz, sz) {
        for (const Fz of sz)
          for (let sz = 0; sz < Fz.length; sz++)
            if (Fz[sz]?.equals(zz) && (Fz[sz + 1]?.equals(tz) || Fz[sz - 1]?.equals(tz))) return !0;
        return !1
      }
      static MeshesToLines(zz, tz) {
        const sz = [];
        for (let Fz = 0; Fz < zz.length; Fz++) {
          const Wz = zz[Fz],
            Xz = Wz.getVerticesData(Qz.m.PositionKind),
            Oz = Wz.Qsz();
          if (Xz && Oz)
            for (let zz = 0, oz = 0; zz < Oz.length; zz++) {
              const vz = 3 * Oz[oz++],
                Uz = 3 * Oz[oz++],
                Kz = 3 * Oz[oz++],
                uz = new hz.p(Xz[vz], Xz[vz + 1], Xz[vz + 2]),
                Nz = new hz.p(Xz[Uz], Xz[Uz + 1], Xz[Uz + 2]),
                bz = new hz.p(Xz[Kz], Xz[Kz + 1], Xz[Kz + 2]);
              if (tz) {
                const oz = tz(uz, Nz, bz, sz, zz, vz, Wz, Fz, Xz, Oz);
                if (oz)
                  for (const zz of oz) sz.push(zz)
              } else sz.push([uz, Nz], [Nz, bz], [bz, uz])
            }
        }
        return sz
      }
      static ToVector3Array(zz) {
        if (Array.isArray(zz[0])) {
          const tz = [],
            sz = zz;
          for (const zz of sz) {
            const sz = [];
            for (let tz = 0; tz < zz.length; tz += 3) sz.push(new hz.p(zz[tz], zz[tz + 1], zz[tz + 2]));
            tz.push(sz)
          }
          return tz
        }
        const tz = zz,
          sz = [];
        for (let Fz = 0; Fz < tz.length; Fz += 3) sz.push(new hz.p(tz[Fz], tz[Fz + 1], tz[Fz + 2]));
        return sz
      }
      static ToNumberArray(zz) {
        return zz.flatMap((zz => [zz.x, zz.y, zz.z]))
      }
      static GetPointsCountInfo(zz) {
        const tz = new Array(zz.length);
        let sz = 0;
        for (let Fz = zz.length; Fz--;) tz[Fz] = zz[Fz].length / 3, sz += tz[Fz];
        return {
          total: sz,
          counts: tz
        }
      }
      static GetLineLength(zz) {
        if (0 === zz.length) return 0;
        let tz;
        tz = "number" === typeof zz[0] ? xF.ToVector3Array(zz) : zz;
        const sz = hz.m.XD[0];
        let Fz = 0;
        for (let Wz = 0; Wz < tz.length - 1; Wz++) {
          const zz = tz[Wz];
          Fz += tz[Wz + 1].subtractToRef(zz, sz).length()
        }
        return Fz
      }
      static GetLineLengthArray(zz, tz) {
        const sz = tz ? new Float32Array(tz, 0, zz.length / 3) : new Float32Array(zz.length / 3);
        let Fz = 0;
        for (let Wz = 0, Xz = zz.length / 3 - 1; Wz < Xz; Wz++) {
          let tz = zz[3 * Wz + 0],
            Xz = zz[3 * Wz + 1],
            Oz = zz[3 * Wz + 2];
          tz -= zz[3 * Wz + 3], Xz -= zz[3 * Wz + 4], Oz -= zz[3 * Wz + 5];
          Fz += Math.sqrt(tz * tz + Xz * Xz + Oz * Oz), sz[Wz + 1] = Fz
        }
        return sz
      }
      static SegmentizeSegmentByCount(zz, tz, sz) {
        const Fz = [],
          Wz = tz.subtract(zz),
          Xz = hz.m.XD[0];
        Xz.Z6(sz);
        const Oz = hz.m.XD[1];
        Wz.divideToRef(Xz, Oz);
        let oz = zz.clone();
        Fz.push(oz);
        for (let vz = 0; vz < sz; vz++) oz = oz.clone(), Fz.push(oz.addInPlace(Oz));
        return Fz
      }
      static SegmentizeLineBySegmentLength(zz, tz) {
        const sz = zz[0] instanceof hz.p ? xF.GetLineSegments(zz) : "number" === typeof zz[0] ? xF.GetLineSegments(xF.ToVector3Array(zz)) : zz,
          Fz = [];
        for (const Wz of sz)
          if (Wz.length > tz) {
            const zz = xF.SegmentizeSegmentByCount(Wz.point1, Wz.point2, Math.ceil(Wz.length / tz));
            for (const tz of zz) Fz.push(tz)
          } else Fz.push(Wz.point1), Fz.push(Wz.point2);
        return Fz
      }
      static SegmentizeLineBySegmentCount(zz, tz) {
        const sz = "number" === typeof zz[0] ? xF.ToVector3Array(zz) : zz,
          Fz = xF.GetLineLength(sz) / tz;
        return xF.SegmentizeLineBySegmentLength(sz, Fz)
      }
      static GetLineSegments(zz) {
        const tz = [];
        for (let sz = 0; sz < zz.length - 1; sz++) {
          const Fz = zz[sz],
            Wz = zz[sz + 1],
            Xz = Wz.subtract(Fz).length();
          tz.push({
            point1: Fz,
            point2: Wz,
            length: Xz
          })
        }
        return tz
      }
      static GetMinMaxSegmentLength(zz) {
        const tz = xF.GetLineSegments(zz).sort((zz => zz.length));
        return {
          min: tz[0].length,
          max: tz[tz.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wz = tz * sz;
        let Xz = 0,
          Oz = 0;
        const oz = zz.length;
        for (let Uz = 0; Uz < oz; Uz++) {
          if (Wz <= Xz + zz[Uz].length) {
            Oz = Uz;
            break
          }
          Xz += zz[Uz].length
        }
        const vz = (Wz - Xz) / zz[Oz].length;
        return zz[Oz].point2.subtractToRef(zz[Oz].point1, hz.m.XD[0]), hz.m.XD[0].scaleToRef(vz, hz.m.XD[1]), Fz || hz.m.XD[1].addInPlace(zz[Oz].point1), hz.m.XD[1].clone()
      }
      static GetCircleLinePoints(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz,
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / tz;
        const Xz = [];
        for (let Oz = 0; Oz <= tz; Oz++) Xz.push(new hz.p(Math.cos(Oz * Wz) * zz, Math.sin(Oz * Wz) * Fz, sz));
        return Xz
      }
      static GetBezierLinePoints(zz, tz, sz, Fz) {
        return BF.e.CreateQuadraticBezier(zz, tz, sz, Fz).getPoints().flatMap((zz => [zz.x, zz.y, zz.z]))
      }
      static GetArrowCap(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [zz.clone(), zz.add(tz.multiplyByFloats(sz, sz, sz))],
          widths: [Fz, Wz, Xz, Oz]
        }
      }
      static GetPointsFromText(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Xz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const Oz = [],
          oz = YF(zz, tz, sz, Fz);
        for (const vz of oz) {
          for (const zz of vz.paths) {
            const tz = [],
              sz = zz.getPoints();
            for (const zz of sz) tz.push(zz.x, zz.y, Wz);
            Oz.push(tz)
          }
          if (Xz)
            for (const zz of vz.holes) {
              const tz = [],
                sz = zz.getPoints();
              for (const zz of sz) tz.push(zz.x, zz.y, Wz);
              Oz.push(tz)
            }
        }
        return Oz
      }
      static Color3toRGBAUint8(zz) {
        const tz = new Uint8Array(4 * zz.length);
        for (let sz = 0, Fz = 0; sz < zz.length; sz++) tz[Fz++] = 255 * zz[sz].r, tz[Fz++] = 255 * zz[sz].g, tz[Fz++] = 255 * zz[sz].b, tz[Fz++] = 255;
        return tz
      }
      static CreateColorsTexture(zz, tz, sz, Fz) {
        const Wz = Fz.FD().getCaps().maxTextureSize ?? 1,
          Xz = tz.length > Wz ? Wz : tz.length,
          Oz = Math.ceil(tz.length / Wz);
        Oz > 1 && (tz = [...tz, ...Array(Xz * Oz - tz.length).fill(tz[0])]);
        const oz = xF.Color3toRGBAUint8(tz),
          vz = new xz.b(oz, Xz, Oz, us.e.TEXTUREFORMAT_RGBA, Fz, !1, !0, sz);
        return vz.name = zz, vz
      }
      static PrepareEmptyColorsTexture(zz) {
        if (!HF.EmptyColorsTexture) {
          const tz = new Uint8Array(4);
          HF.EmptyColorsTexture = new xz.b(tz, 1, 1, us.e.TEXTUREFORMAT_RGBA, zz, !1, !1, xz.b.NEAREST_NEAREST), HF.EmptyColorsTexture.name = "grlEmptyColorsTexture", HF.EmptyColorsTexture.qJ.addOnce((() => {
            HF.EmptyColorsTexture = null
          }))
        }
        return HF.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        HF.EmptyColorsTexture?.dispose(), HF.EmptyColorsTexture = null
      }
      static BooleanToNumber(zz) {
        return zz ? 1 : 0
      }
    }
    class mF extends kz.d {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class JF extends iz.d {
      isCompatible(zz) {
        return !0
      }
      constructor(zz, tz, sz) {
        sz = sz || {
          color: HF.DEFAULT_COLOR
        };
        const Fz = new mF;
        Fz.GREASED_LINE_HAS_COLOR = !!sz.color && !sz.useColors, Fz.GREASED_LINE_SIZE_ATTENUATION = sz.sizeAttenuation ?? !1, Fz.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === sz.colorDistributionType, Fz.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (tz ?? zz.aJ()).useRightHandedSystem, Fz.GREASED_LINE_CAMERA_FACING = sz.cameraFacing ?? !0, super(zz, JF.GREASED_LINE_MATERIAL_NAME, 200, Fz, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = sz?.forceGLSL || JF.ForceGLSL, this._scene = tz ?? zz.aJ(), this._engine = this._scene.FD(), this._cameraFacing = sz.cameraFacing ?? !0, this.visibility = sz.visibility ?? 1, this.useDash = sz.useDash ?? !1, this.dashRatio = sz.dashRatio ?? .5, this.dashOffset = sz.dashOffset ?? 0, this.width = sz.width ? sz.width : sz.sizeAttenuation ? HF.DEFAULT_WIDTH_ATTENUATED : HF.DEFAULT_WIDTH, this._sizeAttenuation = sz.sizeAttenuation ?? !1, this.colorMode = sz.colorMode ?? 0, this._color = sz.color ?? null, this.useColors = sz.useColors ?? !1, this._colorsDistributionType = sz.colorDistributionType ?? 0, this.colorsSampling = sz.colorsSampling ?? xz.b.NEAREST_NEAREST, this._colors = sz.colors ?? null, this.dashCount = sz.dashCount ?? 1, this.resolution = sz.resolution ?? new hz.n(this._engine.getRenderWidth(), this._engine.getRenderHeight()), sz.colorsTexture ? this.colorsTexture = sz.colorsTexture : this._colors ? this.colorsTexture = xF.CreateColorsTexture(`${zz.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? HF.DEFAULT_COLOR, xF.PrepareEmptyColorsTexture(this._scene)), this._engine.qJ.add((() => {
          xF.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(zz) {
        zz.push("grl_offsets"), zz.push("grl_widths"), zz.push("grl_colorPointers"), zz.push("grl_counters"), this._cameraFacing ? (zz.push("grl_previousAndSide"), zz.push("grl_nextAndCounters")) : zz.push("grl_slopes")
      }
      getSamplers(zz) {
        zz.push("grl_colors")
      }
      getActiveTextures(zz) {
        this.colorsTexture && zz.push(this.colorsTexture)
      }
      getUniforms() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const tz = [{
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
        return this._cameraFacing && tz.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === zz && tz.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: tz,
          vertex: this._cameraFacing && this._isGLSL(zz) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(zz) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(zz) {
        if (this._cameraFacing) {
          zz.y5("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || zz.y5("viewProjection", this._scene.getTransformMatrix());
          const tz = hz.m.Vector4[0];
          tz.x = this._aspect, tz.y = this._resolution.x, tz.z = this._resolution.y, tz.w = this.width, zz.updateVector4("grl_aspect_resolution_lineWidth", tz)
        }
        const tz = hz.m.Vector4[0];
        tz.x = xF.BooleanToNumber(this.useDash), tz.y = this._dashArray, tz.z = this.dashOffset, tz.w = this.dashRatio, zz.updateVector4("grl_dashOptions", tz);
        const sz = hz.m.Vector4[1];
        sz.x = this.colorMode, sz.y = this.visibility, sz.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, sz.w = xF.BooleanToNumber(this.useColors), zz.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", sz), this._color && zz.updateColor3("grl_singleColor", this._color);
        const Fz = this.colorsTexture ?? HF.EmptyColorsTexture;
        zz.setTexture("grl_colors", Fz), zz.updateFloat2("grl_textureSize", Fz?.getSize().width ?? 1, Fz?.getSize().height ?? 1)
      }
      prepareDefines(zz, tz, sz) {
        zz.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, zz.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, zz.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, zz.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = tz.useRightHandedSystem, zz.GREASED_LINE_CAMERA_FACING = this._cameraFacing, zz.GREASED_LINE_USE_OFFSETS = !!sz.offsets
      }
      getClassName() {
        return JF.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(tz) ? function(zz, tz) {
          if ("vertex" === zz) {
            const zz = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return tz && (zz["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), zz
          }
          return "fragment" === zz ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(zz, this._cameraFacing) : function(zz, tz) {
          if ("vertex" === zz) {
            const zz = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return tz && (zz["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), zz
          }
          return "fragment" === zz ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(zz, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(zz) {
        this.setColors(zz)
      }
      setColors(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Fz = this._colors?.length ?? 0;
        if (this._colors = zz, null !== zz && 0 !== zz.length) {
          if (!tz || sz)
            if (this.colorsTexture && Fz === zz.length && !sz) {
              const tz = xF.Color3toRGBAUint8(zz);
              this.colorsTexture.update(tz)
            } else this.colorsTexture?.dispose(), this.colorsTexture = xF.CreateColorsTexture(`${this._material.name}-colors-texture`, zz, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(zz) {
        this._dashCount = zz, this._dashArray = 1 / zz
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(zz) {
        this._sizeAttenuation = zz, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(zz) {
        this.setColor(zz)
      }
      setColor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== zz || null !== this._color && null === zz ? (this._color = zz, tz || this.markAllDefinesAsDirty()) : this._color = zz
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(zz) {
        this._colorsDistributionType = zz, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(zz) {
        this._aspect = zz.x / zz.y, this._resolution = zz
      }
      serialize() {
        const zz = super.serialize(),
          tz = {
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
        return this._colors && (tz.colors = this._colors), this._color && (tz.color = this._color), zz.greasedLineMaterialOptions = tz, zz
      }
      parse(zz, tz, sz) {
        super.parse(zz, tz, sz);
        const Fz = zz.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Fz.color && this.setColor(Fz.color, !0), Fz.colorDistributionType && (this.colorsDistributionType = Fz.colorDistributionType), Fz.colors && (this.colors = Fz.colors), Fz.colorsSampling && (this.colorsSampling = Fz.colorsSampling), Fz.colorMode && (this.colorMode = Fz.colorMode), Fz.useColors && (this.useColors = Fz.useColors), Fz.visibility && (this.visibility = Fz.visibility), Fz.useDash && (this.useDash = Fz.useDash), Fz.dashCount && (this.dashCount = Fz.dashCount), Fz.dashRatio && (this.dashRatio = Fz.dashRatio), Fz.dashOffset && (this.dashOffset = Fz.dashOffset), Fz.width && (this.width = Fz.width), Fz.sizeAttenuation && (this.sizeAttenuation = Fz.sizeAttenuation), Fz.resolution && (this.resolution = Fz.resolution), this.colors ? this.colorsTexture = xF.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, tz) : xF.PrepareEmptyColorsTexture(tz), this.markAllDefinesAsDirty()
      }
      copyTo(zz) {
        const tz = zz;
        tz.colorsTexture?.dispose(), this._colors && (tz.colorsTexture = xF.CreateColorsTexture(`${tz._material.name}-colors-texture`, this._colors, tz.colorsSampling, this._scene)), tz.setColor(this.color, !0), tz.colorsDistributionType = this.colorsDistributionType, tz.colorsSampling = this.colorsSampling, tz.colorMode = this.colorMode, tz.useColors = this.useColors, tz.visibility = this.visibility, tz.useDash = this.useDash, tz.dashCount = this.dashCount, tz.dashRatio = this.dashRatio, tz.dashOffset = this.dashOffset, tz.width = this.width, tz.sizeAttenuation = this.sizeAttenuation, tz.resolution = this.resolution, tz.markAllDefinesAsDirty()
      }
      _isGLSL(zz) {
        return 0 === zz || this._forceGLSL
      }
    }
    JF.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", JF.ForceGLSL = !1;
    var IF = sz(39555),
      CF = sz(39562),
      eF = sz(38091),
      ZF = sz(39614),
      GF = sz(39026);
    class TF extends ZF.s {
      constructor(zz, tz, Fz) {
        const Wz = tz.FD(),
          Xz = Wz.isWebGPU && !(Fz.forceGLSL || TF.ForceGLSL),
          Oz = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        tz.useRightHandedSystem && Oz.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const oz = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Fz.cameraFacing ? (Oz.push("GREASED_LINE_CAMERA_FACING"), oz.push("grl_previousAndSide", "grl_nextAndCounters")) : (oz.push("grl_slopes"), oz.push("grl_counters"));
        const vz = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (Xz || vz.push("world", "viewProjection", "view", "projection"), super(zz, tz, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: Xz ? ["Scene", "Mesh"] : void 0,
            attributes: oz,
            uniforms: vz,
            samplers: Xz ? [] : ["grlColors"],
            defines: Oz,
            extraInitializationsAsync: async () => {
              Xz ? await Promise.all([sz.e(324).then((() => sz(61021))), sz.e(383).then((() => sz(61024)))]) : await Promise.all([sz.e(317).then((() => sz(61030))), sz.e(384).then((() => sz(61034)))])
            },
            shaderLanguage: Xz ? 1 : 0
          }), this._color = az.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Fz = Fz || {
            color: HF.DEFAULT_COLOR
          }, this.visibility = Fz.visibility ?? 1, this.useDash = Fz.useDash ?? !1, this.dashRatio = Fz.dashRatio ?? .5, this.dashOffset = Fz.dashOffset ?? 0, this.dashCount = Fz.dashCount ?? 1, this.width = Fz.width ? Fz.width : Fz.sizeAttenuation && Fz.cameraFacing ? HF.DEFAULT_WIDTH_ATTENUATED : HF.DEFAULT_WIDTH, this.sizeAttenuation = Fz.sizeAttenuation ?? !1, this.color = Fz.color ?? az.c.White(), this.useColors = Fz.useColors ?? !1, this.colorsDistributionType = Fz.colorDistributionType ?? 0, this.colorsSampling = Fz.colorsSampling ?? xz.b.NEAREST_NEAREST, this.colorMode = Fz.colorMode ?? 0, this._colors = Fz.colors ?? null, this._cameraFacing = Fz.cameraFacing ?? !0, this.resolution = Fz.resolution ?? new hz.n(Wz.getRenderWidth(), Wz.getRenderHeight()), Fz.colorsTexture ? this.colorsTexture = Fz.colorsTexture : this._colors ? this.colorsTexture = xF.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, tz) : (this._color = this._color ?? HF.DEFAULT_COLOR, this.colorsTexture = xF.PrepareEmptyColorsTexture(tz)), Xz) {
          const zz = new GF.d;
          zz.setParameters(), zz.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", zz)
        }
        Wz.qJ.add((() => {
          xF.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== HF.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new hz.n(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(zz) {
        this.setColors(zz)
      }
      setColors(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Fz = this._colors?.length ?? 0;
        if (this._colors = zz, null !== zz && 0 !== zz.length) {
          if (!tz || sz)
            if (this._colorsTexture && Fz === zz.length && !sz) {
              const tz = xF.Color3toRGBAUint8(zz);
              this._colorsTexture.update(tz)
            } else this._colorsTexture && this._colorsTexture !== HF.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = xF.CreateColorsTexture(`${this.name}-colors-texture`, zz, this.colorsSampling, this.aJ())
        } else {
          this._colorsTexture && this._colorsTexture !== HF.EmptyColorsTexture && this._colorsTexture.dispose();
          const zz = this.aJ();
          zz && (this.colorsTexture = xF.PrepareEmptyColorsTexture(zz))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(zz) {
        this._colorsTexture = zz, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(zz) {
        this._width = zz, this.setFloat("grlWidth", zz)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(zz) {
        this._useColors = zz, this.setFloat("grlUseColors", xF.BooleanToNumber(zz))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(zz) {
        this._colorsSampling = zz
      }
      get visibility() {
        return this._visibility
      }
      set visibility(zz) {
        this._visibility = zz, this.setFloat("grlVisibility", zz)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(zz) {
        this._useDash = zz, this.setFloat("grlUseDash", xF.BooleanToNumber(zz))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(zz) {
        this._dashOffset = zz, this.setFloat("grlDashOffset", zz)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(zz) {
        this._dashRatio = zz, this.setFloat("grlDashRatio", zz)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(zz) {
        this._dashCount = zz, this._dashArray = 1 / zz, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(zz) {
        this._sizeAttenuation = zz, this.setFloat("grlSizeAttenuation", xF.BooleanToNumber(zz))
      }
      get color() {
        return this._color
      }
      set color(zz) {
        this.setColor(zz)
      }
      setColor(zz) {
        zz = zz ?? HF.DEFAULT_COLOR, this._color = zz, this.setColor3("grlColor", zz)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(zz) {
        this._colorsDistributionType = zz, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(zz) {
        this._colorMode = zz, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(zz) {
        this._resolution = zz, this.setVector2("grlResolution", zz), this.setFloat("grlAspect", zz.x / zz.y)
      }
      serialize() {
        const zz = super.serialize(),
          tz = {
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
        return this._colors && (tz.colors = this._colors), zz.greasedLineMaterialOptions = tz, zz
      }
      parse(zz, tz, sz) {
        const Fz = zz.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Fz.color && (this.color = Fz.color), Fz.colorDistributionType && (this.colorsDistributionType = Fz.colorDistributionType), Fz.colorsSampling && (this.colorsSampling = Fz.colorsSampling), Fz.colorMode && (this.colorMode = Fz.colorMode), Fz.useColors && (this.useColors = Fz.useColors), Fz.visibility && (this.visibility = Fz.visibility), Fz.useDash && (this.useDash = Fz.useDash), Fz.dashCount && (this.dashCount = Fz.dashCount), Fz.dashRatio && (this.dashRatio = Fz.dashRatio), Fz.dashOffset && (this.dashOffset = Fz.dashOffset), Fz.width && (this.width = Fz.width), Fz.sizeAttenuation && (this.sizeAttenuation = Fz.sizeAttenuation), Fz.resolution && (this.resolution = Fz.resolution), Fz.colors ? this.colorsTexture = xF.CreateColorsTexture(`${this.name}-colors-texture`, Fz.colors, this.colorsSampling, this.aJ()) : this.colorsTexture = xF.PrepareEmptyColorsTexture(tz), this._cameraFacing = Fz.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var cF, jF, AF;
    TF.ForceGLSL = !1,
      function(zz) {
        zz[zz.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", zz[zz.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(cF || (cF = {})),
      function(zz) {
        zz[zz.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", zz[zz.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", zz[zz.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(jF || (jF = {})),
      function(zz) {
        zz[zz.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", zz[zz.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", zz[zz.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", zz[zz.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", zz[zz.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(AF || (AF = {}));
    class yF extends IF.c {
      constructor(zz, tz, sz) {
        super(zz, tz, null, null, !1, !1), this.name = zz, this._options = sz, this._lazy = !1, this._updatable = !1, this._engine = tz.FD(), this._lazy = sz.lazy ?? !1, this._updatable = sz.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = sz.colorPointers ?? [], this._widths = sz.widths ?? new Array(sz.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(zz) {
        let tz = 0;
        for (const Fz of this._points) tz += Fz.length;
        const sz = tz / 3 * 2 - this._widths.length;
        for (let Fz = 0; Fz < sz; Fz++) this._widths.push(zz)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.oD && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(zz, tz) {
        for (const sz of zz) this._points.push(sz);
        this._lazy || this.setPoints(this._points, tz)
      }
      dispose(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(zz, tz)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(zz) {
        this._uvs = zz instanceof Float32Array ? zz : new Float32Array(zz), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(zz) {
        this.material instanceof TF && this.material.setDefine("GREASED_LINE_USE_OFFSETS", zz?.length > 0), this._offsets = zz, this._offsetsBuffer ? this._offsetsBuffer.update(zz) : this._createOffsetsBuffer(zz)
      }
      get widths() {
        return this._widths
      }
      set widths(zz) {
        this._widths = zz, this._lazy || this._widthsBuffer && this._widthsBuffer.update(zz)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(zz) {
        this._colorPointers = zz, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(zz)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof TF) return this.material;
        const zz = this.material?.pluginManager?.getPlugin(JF.GREASED_LINE_MATERIAL_NAME);
        return zz || void 0
      }
      get points() {
        const zz = [];
        return eF.d.DeepCopy(this._points, zz), zz
      }
      setPoints(zz, tz) {
        this._points = xF.ConvertPoints(zz, tz?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), tz?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, tz)
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
      serialize(zz) {
        super.serialize(zz), zz.type = this.getClassName(), zz.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const tz = new CF.b;
        return tz.positions = this._vertexPositions, tz.indices = this._indices, tz.uvs = this._uvs, zz && (tz.normals = [], CF.b.ComputeNormals(this._vertexPositions, this._indices, tz.normals)), tz.applyToMesh(this, this._options.updatable), tz
      }
      _createOffsetsBuffer(zz) {
        const tz = this._scene.FD(),
          sz = new Qz.e(tz, zz, this._updatable, 3);
        this.setVerticesBuffer(sz.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = sz
      }
    }
    class MF {
      constructor(zz, tz) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = zz, this.wasAddedByNoopNode = tz
      }
      getIndicesAccessor(zz, tz, sz, Fz, Wz) {
        return this._indicesAccessorMap.get(zz)?.get(tz)?.get(sz)?.get(Fz)?.get(Wz)
      }
      setIndicesAccessor(zz, tz, sz, Fz, Wz, Xz) {
        let Oz = this._indicesAccessorMap.get(zz);
        Oz || (Oz = new Map, this._indicesAccessorMap.set(zz, Oz));
        let oz = Oz.get(tz);
        oz || (oz = new Map, Oz.set(tz, oz));
        let vz = oz.get(sz);
        vz || (vz = new Map, oz.set(sz, vz));
        let Uz = vz.get(Fz);
        Uz || (Uz = new Map, vz.set(Fz, Uz)), Uz.set(Wz, Xz)
      }
      pushExportedNode(zz) {
        this._exportedNodes.has(zz) || this._exportedNodes.add(zz)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(zz) {
        return this._vertexBufferViewMap.get(zz)
      }
      setVertexBufferView(zz, tz) {
        this._vertexBufferViewMap.set(zz, tz)
      }
      setRemappedBufferView(zz, tz, sz) {
        this._remappedBufferView.set(zz, new Map), this._remappedBufferView.get(zz).set(tz, sz)
      }
      getRemappedBufferView(zz, tz) {
        return this._remappedBufferView.get(zz)?.get(tz)
      }
      getVertexAccessor(zz, tz, sz) {
        return this._vertexAccessorMap.get(zz)?.get(tz)?.get(sz)
      }
      setVertexAccessor(zz, tz, sz, Fz) {
        let Wz = this._vertexAccessorMap.get(zz);
        Wz || (Wz = new Map, this._vertexAccessorMap.set(zz, Wz));
        let Xz = Wz.get(tz);
        Xz || (Xz = new Map, Wz.set(tz, Xz)), Xz.set(sz, Fz)
      }
      hasVertexColorAlpha(zz) {
        return this._vertexMapColorAlpha.get(zz) || !1
      }
      setHasVertexColorAlpha(zz, tz) {
        return this._vertexMapColorAlpha.set(zz, tz)
      }
      getMesh(zz) {
        return this._meshMap.get(zz)
      }
      setMesh(zz, tz) {
        this._meshMap.set(zz, tz)
      }
      bindMorphDataToMesh(zz, tz) {
        const sz = this._meshMorphTargetMap.get(zz) || [];
        this._meshMorphTargetMap.set(zz, sz), -1 === sz.indexOf(tz) && sz.push(tz)
      }
      getMorphTargetsFromMesh(zz) {
        return this._meshMorphTargetMap.get(zz)
      }
    }
    class dF {
      _ApplyExtension(zz, tz, sz, Fz) {
        if (sz >= tz.length) return Promise.resolve(zz);
        const Wz = Fz(tz[sz], zz);
        return Wz ? Wz.then((async zz => zz ? await this._ApplyExtension(zz, tz, sz + 1, Fz) : null)) : this._ApplyExtension(zz, tz, sz + 1, Fz)
      }
      _ApplyExtensions(zz, tz) {
        const sz = [];
        for (const Fz of dF._ExtensionNames) sz.push(this._extensions[Fz]);
        return this._ApplyExtension(zz, sz, 0, tz)
      }
      _extensionsPostExportNodeAsync(zz, tz, sz, Fz, Wz) {
        return this._ApplyExtensions(tz, ((tz, Xz) => tz.postExportNodeAsync && tz.postExportNodeAsync(zz, Xz, sz, Fz, Wz, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(zz, tz, sz) {
        return this._ApplyExtensions(tz, ((tz, Fz) => tz.postExportMaterialAsync && tz.postExportMaterialAsync(zz, Fz, sz)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(zz, tz, sz) {
        const Fz = [];
        return await Promise.all(dF._ExtensionNames.map((async Wz => {
          const Xz = this._extensions[Wz];
          if (Xz.postExportMaterialAdditionalTexturesAsync) {
            const Wz = await Xz.postExportMaterialAdditionalTexturesAsync(zz, tz, sz);
            Fz.push(...Wz)
          }
        }))), Fz
      }
      _extensionsPostExportTextures(zz, tz, sz) {
        for (const Fz of dF._ExtensionNames) {
          const Wz = this._extensions[Fz];
          Wz.postExportTexture && Wz.postExportTexture(zz, tz, sz)
        }
      }
      _extensionsPostExportMeshPrimitive(zz) {
        for (const tz of dF._ExtensionNames) {
          const sz = this._extensions[tz];
          sz.postExportMeshPrimitive && sz.postExportMeshPrimitive(zz, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const zz of dF._ExtensionNames) {
          const tz = this._extensions[zz];
          tz.preGenerateBinaryAsync && await tz.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(zz) {
        for (const tz of dF._ExtensionNames) {
          const sz = this._extensions[tz];
          sz.enabled && zz(sz)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((zz => {
          var tz, sz, Fz;
          zz.wasUsed && ((tz = this._glTF).extensionsUsed || (tz.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(zz.name) && this._glTF.extensionsUsed.push(zz.name), zz.required && ((sz = this._glTF).extensionsRequired || (sz.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(zz.name) && this._glTF.extensionsRequired.push(zz.name)), (Fz = this._glTF).extensions || (Fz.extensions = {}), zz.onExporting && zz.onExporting())
        }))
      }
      _loadExtensions() {
        for (const zz of dF._ExtensionNames) {
          const tz = dF._ExtensionFactories[zz](this);
          this._extensions[zz] = tz
        }
      }
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dz.c.LastCreatedScene,
          tz = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${wz.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new cs(this), this._extensions = {}, this._bufferManager = new XF, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !zz) throw new Error("No scene available to export");
        this._babylonScene = zz, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: zz => zz?.MJ?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...tz
        }, this._loadExtensions()
      }
      dispose() {
        for (const zz in this._extensions) {
          this._extensions[zz].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        dF.UnregisterExtension(zz) && Wz.Tools.Warn(`Extension with the name ${zz} already exists`), dF._ExtensionFactories[zz] = tz;
        const Fz = sz ?? 0;
        dF._ExtensionOrders[zz] = Fz;
        let Xz = dF._ExtensionNames.length;
        for (let Wz = 0; Wz < dF._ExtensionNames.length; Wz++) {
          const zz = dF._ExtensionNames[Wz];
          if (Fz < dF._ExtensionOrders[zz]) {
            Xz = Wz;
            break
          }
        }
        dF._ExtensionNames.splice(Xz, 0, zz)
      }
      static UnregisterExtension(zz) {
        if (!dF._ExtensionFactories[zz]) return !1;
        delete dF._ExtensionFactories[zz], delete dF._ExtensionOrders[zz];
        const tz = dF._ExtensionNames.indexOf(zz);
        return -1 !== tz && dF._ExtensionNames.splice(tz, 1), !0
      }
      _generateJSON(zz, tz, sz) {
        const Fz = {
          byteLength: zz
        };
        return Fz.byteLength && (this._glTF.buffers = [Fz]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.Kg = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Fz.uri = tz + ".bin"), sz ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(zz) {
        const tz = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const sz = this._generateJSON(tz.byteLength, zz, !0),
          Fz = new Blob([tz], {
            type: "application/octet-stream"
          }),
          Wz = zz + ".gltf",
          Xz = zz + ".bin",
          Oz = new Uz;
        if (Oz.files[Wz] = sz, Oz.files[Xz] = Fz, this._imageData)
          for (const oz in this._imageData) Oz.files[oz] = this._imageData[oz];
        return Oz
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(zz) {
        const tz = zz % 4;
        return 0 === tz ? tz : 4 - tz
      }
      async generateGLBAsync(zz) {
        this._shouldUseGlb = !0;
        const tz = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const sz = this._generateJSON(tz.byteLength),
          Fz = zz + ".glb";
        let Wz, Xz = sz.length;
        if ("undefined" !== typeof TextEncoder) {
          Wz = (new TextEncoder).encode(sz), Xz = Wz.length
        }
        const Oz = this._getPadding(Xz),
          oz = this._getPadding(tz.byteLength),
          vz = 28 + Xz + Oz + tz.byteLength + oz,
          Kz = new FF(vz);
        if (Kz.writeUInt32(1179937895), Kz.writeUInt32(2), Kz.writeUInt32(vz), Kz.writeUInt32(Xz + Oz), Kz.writeUInt32(1313821514), Wz) Kz.writeTypedArray(Wz);
        else {
          const zz = "_".charCodeAt(0);
          for (let tz = 0; tz < Xz; ++tz) {
            const Fz = sz.charCodeAt(tz);
            Fz != sz.codePointAt(tz) ? Kz.writeUInt8(zz) : Kz.writeUInt8(Fz)
          }
        }
        for (let Uz = 0; Uz < Oz; ++Uz) Kz.writeUInt8(32);
        Kz.writeUInt32(tz.byteLength + oz), Kz.writeUInt32(5130562), Kz.writeTypedArray(tz);
        for (let Uz = 0; Uz < oz; ++Uz) Kz.writeUInt8(0);
        const uz = new Uz;
        return uz.files[Fz] = new Blob([Kz.getOutputData()], {
          type: "application/octet-stream"
        }), uz
      }
      _setNodeTransformation(zz, tz, sz) {
        if (tz.getPivotPoint().equalsWithEpsilon(Qs, Ms.c) || Wz.Tools.Warn("Pivot points are not supported in the glTF serializer"), !tz.position.equalsWithEpsilon(Qs, Ms.c)) {
          const Wz = Fz.TmpVectors.XD[0].vsz(tz.position);
          sz && Ss(Wz), zz.translation = Wz.hsz()
        }
        tz.nX.equalsWithEpsilon(is, Ms.c) || (zz.scale = tz.nX.hsz());
        const Xz = tz.rotationQuaternion?.clone() || Fz.Quaternion.FromEulerAngles(tz.rotation.x, tz.rotation.y, tz.rotation.z);
        Xz.equalsWithEpsilon(ks, Ms.c) || (sz && Vs(Xz), zz.rotation = Xz.normalize().hsz())
      }
      _setCameraTransformation(zz, tz, sz) {
        const Wz = Fz.TmpVectors.XD[0],
          Xz = Fz.TmpVectors.Quaternion[0],
          Oz = tz.getWorldMatrix();
        if (tz.parent) {
          const zz = tz.parent.getWorldMatrix().invertToRef(Fz.TmpVectors.Matrix[0]);
          Oz.multiplyToRef(zz, Fz.TmpVectors.Matrix[1]).decompose(void 0, Xz, Wz)
        } else Oz.decompose(void 0, Xz, Wz);
        Wz.equalsWithEpsilon(Qs, Ms.c) || (sz && Ss(Wz), zz.translation = Wz.hsz()), sz && Vs(Xz), this._babylonScene.useRightHandedSystem || Rs(Xz), Xz.equalsWithEpsilon(ks, Ms.c) || (zz.rotation = Xz.hsz())
      }
      _listAvailableCameras() {
        for (const zz of this._babylonScene.cameras) {
          const tz = {
            type: zz.mode === OF.b.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (zz.name && (tz.name = zz.name), "perspective" === tz.type) tz.perspective = {
            aspectRatio: zz.FD().getAspectRatio(zz),
            yfov: zz.fovMode === OF.b.FOVMODE_VERTICAL_FIXED ? zz.fov : zz.fov * zz.FD().getAspectRatio(zz),
            znear: zz.minZ,
            zfar: zz.maxZ
          };
          else if ("orthographic" === tz.type) {
            const sz = zz.orthoLeft && zz.orthoRight ? .5 * (zz.orthoRight - zz.orthoLeft) : .5 * zz.FD().getRenderWidth(),
              Fz = zz.orthoBottom && zz.orthoTop ? .5 * (zz.orthoTop - zz.orthoBottom) : .5 * zz.FD().getRenderHeight();
            tz.orthographic = {
              xmag: sz,
              ymag: Fz,
              znear: zz.minZ,
              zfar: zz.maxZ
            }
          }
          this._camerasMap.set(zz, tz)
        }
      }
      _exportAndAssignCameras() {
        const zz = Array.from(this._camerasMap.values());
        for (const tz of zz) {
          const zz = this._nodesCameraMap.get(tz);
          if (void 0 !== zz) {
            this._cameras.push(tz);
            for (const tz of zz) tz.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const zz of this._babylonScene.skeletons) {
          if (zz.bones.length <= 0) continue;
          const tz = {
            joints: []
          };
          this._skinMap.set(zz, tz)
        }
      }
      _exportAndAssignSkeletons(zz) {
        for (const sz of this._babylonScene.skeletons) {
          if (sz.bones.length <= 0) continue;
          const Xz = this._skinMap.get(sz);
          if (void 0 == Xz) continue;
          const Oz = {};
          let oz = -1;
          for (let zz = 0; zz < sz.bones.length; ++zz) {
            const tz = sz.bones[zz],
              Fz = tz.getIndex() ?? zz; - 1 !== Fz && (Oz[Fz] = tz, Fz > oz && (oz = Fz))
          }
          const vz = [];
          for (let sz = 0; sz <= oz; ++sz) {
            const oz = Oz[sz],
              Uz = oz.getTransformNode(),
              Kz = Uz ? this._nodeMap.get(Uz) : void 0;
            if (void 0 === Kz) {
              Wz.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            Xz.joints.push(Kz);
            const uz = oz.getAbsoluteInverseBindMatrix().clone();
            zz.has(Uz) && (tz = uz, ds.invertToRef(Fz.TmpVectors.Matrix[0]).multiplyToRef(tz, tz).multiplyToRef(ds, tz)), vz.push(uz)
          }
          const Uz = this._nodesSkinMap.get(Xz);
          if (Xz.joints.length > 0 && void 0 !== Uz) {
            const zz = new Float32Array(16 * vz.length);
            vz.forEach(((tz, sz) => {
              zz.set(tz.m, 16 * sz)
            }));
            const tz = this._bufferManager.createBufferView(zz);
            this._accessors.push(this._bufferManager.createAccessor(tz, "MAT4", 5126, vz.length)), Xz.inverseBindMatrices = this._accessors.length - 1, this._skins.push(Xz);
            const sz = this._skins.length - 1;
            for (const Fz of Uz) Fz.skin = sz
          }
        }
        var tz
      }
      async _exportSceneAsync() {
        const zz = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const tz = this._options.metadataSelector(this._babylonScene.metadata);
          tz && (zz.extras = tz)
        }
        const tz = new Array,
          sz = new Array,
          Fz = new Array,
          Wz = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let Xz;
        if (Wz && !this._options.includeCoordinateSystemConversionNodes)
          for (const Uz of this._babylonScene.animationGroups)
            for (const zz of Uz.targetedAnimations) {
              const tz = zz.target;
              tz instanceof uz.c && !tz.parent && (Xz ?? (Xz = new Set)).add(tz)
            }
        for (const Uz of this._babylonScene.rootNodes) {
          const zz = Uz.animations,
            Oz = !!zz && zz.length > 0 || Xz?.has(Uz);
          Wz && !this._options.includeCoordinateSystemConversionNodes && hs(Uz, this._babylonScene.useRightHandedSystem) && !Oz ? Fz.push(...Uz.getChildren()) : this._babylonScene.useRightHandedSystem ? tz.push(Uz) : sz.push(Uz)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const Oz = new MF(!0, !1);
        zz.nodes.push(...await this._exportNodesAsync(sz, Oz));
        const oz = new MF(!1, !1);
        zz.nodes.push(...await this._exportNodesAsync(tz, oz));
        const vz = new MF(!1, !0);
        zz.nodes.push(...await this._exportNodesAsync(Fz, vz)), zz.nodes.length && this._scenes.push(zz), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(Oz.getNodesSet()), this._babylonScene.animationGroups.length && wF._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Oz.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(zz) {
        return this._nodeMap.get(zz)
      }
      _getAnimationIndex(zz) {
        return this._animationGroupMap.get(zz)
      }
      _getCameraIndex(zz) {
        const tz = this._camerasMap.get(zz);
        if (!tz) return;
        const sz = this._cameras.indexOf(tz);
        return sz >= 0 ? sz : void 0
      }
      _getMaterialIndex(zz) {
        return this._materialMap.get(zz)
      }
      _getRootIndex(zz, tz) {
        switch (zz) {
          case "nodes":
            return this._getNodeIndex(tz);
          case "animations":
            return this._getAnimationIndex(tz);
          case "cameras":
            return this._getCameraIndex(tz);
          case "materials":
            return this._getMaterialIndex(tz);
          case "meshes": {
            const zz = this._getNodeIndex(tz);
            return void 0 === zz ? void 0 : this._nodes[zz]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(tz)?.index;
          case "images": {
            const zz = this._materialExporter.getTextureInfo(tz)?.index;
            if (void 0 === zz) return;
            const sz = this._textures[zz];
            for (const tz of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const zz = sz?.extensions?.[tz]?.source;
              if ("number" === typeof zz) return zz
            }
            return sz?.source
          }
          case "samplers": {
            const zz = this._materialExporter.getTextureInfo(tz)?.index;
            return void 0 === zz ? void 0 : this._textures[zz]?.sampler
          }
          case "skins": {
            const zz = this._skinMap.get(tz),
              sz = zz ? this._skins.indexOf(zz) : -1;
            return sz >= 0 ? sz : void 0
          }
          case "scenes":
            return tz === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(zz, tz, sz) {
        const Fz = this._nodes[zz];
        if (!Fz) throw new Error(`Cannot write ${tz}: glTF node ${zz} does not exist.`);
        Fz.extensions || (Fz.extensions = {}), Fz.extensions[tz] = sz
      }
      _shouldExportNode(zz) {
        let tz = this._shouldExportNodeMap.get(zz);
        return void 0 === tz && (tz = this._options.shouldExportNode(zz), this._shouldExportNodeMap.set(zz, tz)), tz
      }
      async _exportNodesAsync(zz, tz) {
        const sz = new Array;
        this._exportBuffers(zz, tz);
        for (const Fz of zz) await this._exportNodeAsync(Fz, sz, tz);
        return sz
      }
      _collectBuffers(zz, tz, sz, Fz, Wz) {
        if (this._shouldExportNode(zz) && zz instanceof Nz.e && zz.geometry) {
          const Xz = zz.geometry.getVertexBuffers();
          if (Xz)
            for (const Fz in Xz) {
              if (!as(Fz)) continue;
              const Oz = Xz[Fz];
              Wz.setHasVertexColorAlpha(Oz, zz.hasVertexAlpha);
              const oz = Oz._buffer,
                vz = tz.get(oz) || [];
              tz.set(oz, vz), -1 === vz.indexOf(Oz) && vz.push(Oz);
              const Uz = sz.get(Oz) || [];
              sz.set(Oz, Uz), -1 === Uz.indexOf(zz) && Uz.push(zz)
            }
          const Oz = zz.morphTargetManager;
          if (Oz)
            for (let tz = 0; tz < Oz.numTargets; tz++) {
              const sz = Oz.getTarget(tz),
                Wz = Fz.get(sz) || [];
              Fz.set(sz, Wz), -1 === Wz.indexOf(zz) && Wz.push(zz)
            }
        }
        for (const Xz of zz.getChildren()) this._collectBuffers(Xz, tz, sz, Fz, Wz)
      }
      _exportBuffers(zz, tz) {
        const sz = new Map,
          Fz = new Map,
          Wz = new Map;
        for (const oz of zz) this._collectBuffers(oz, sz, Fz, Wz, tz);
        const Xz = Array.from(sz.keys());
        for (const oz of Xz) {
          const zz = oz.getData();
          if (!zz) throw new Error("Buffer data is not available");
          const Wz = sz.get(oz);
          if (!Wz) continue;
          const Xz = Wz[0].byteStride;
          if (Wz.some((zz => zz.byteStride !== Xz))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const Oz = Es(zz).slice();
          for (const tz of Wz) {
            const zz = Fz.get(tz),
              {
                byteOffset: sz,
                byteStride: Wz,
                componentCount: Xz,
                type: oz,
                count: vz,
                normalized: Uz,
                kind: uz
              } = ls(tz, zz);
            switch (uz) {
              case Kz.c.NormalKind:
              case Kz.c.TangentKind:
                (0, As.l)(Oz, sz, Wz, Xz, oz, vz, Uz, (zz => {
                  const tz = Math.sqrt(zz[0] * zz[0] + zz[1] * zz[1] + zz[2] * zz[2]);
                  if (tz > 0) {
                    const sz = 1 / tz;
                    zz[0] *= sz, zz[1] *= sz, zz[2] *= sz
                  }
                }));
                break;
              case Kz.c.ColorKind: {
                const tz = zz.filter((zz => zz.material instanceof vF.StandardMaterial || null == zz.material)).length;
                if (0 == tz) break;
                if (tz != zz.length) {
                  ez.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                oz == Kz.c.UNSIGNED_BYTE && ez.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Fz = new gz.Color3,
                  uz = new gz.c,
                  Nz = this._babylonScene.FD().useExactSrgbConversions;
                (0, As.l)(Oz, sz, Wz, Xz, oz, vz, Uz, (zz => {
                  3 === zz.length ? (Fz.Ztz(zz, 0), Fz.toLinearSpaceToRef(Fz, Nz), Fz.toArray(zz, 0)) : (uz.Ztz(zz, 0), uz.toLinearSpaceToRef(uz, Nz), uz.toArray(zz, 0))
                }))
              }
            }
          }
          if (tz.convertToRightHanded) {
            for (const zz of Wz) {
              const tz = Fz.get(zz),
                {
                  byteOffset: sz,
                  byteStride: Wz,
                  componentCount: Xz,
                  type: oz,
                  count: vz,
                  normalized: Uz,
                  kind: uz
                } = ls(zz, tz);
              switch (uz) {
                case Kz.c.PositionKind:
                case Kz.c.NormalKind:
                case Kz.c.TangentKind:
                  (0, As.l)(Oz, sz, Wz, Xz, oz, vz, Uz, (zz => {
                    zz[0] = -zz[0]
                  }))
              }
            }
            tz.convertedToRightHandedBuffers.set(oz, Oz)
          }
          const vz = this._bufferManager.createBufferView(Oz, Xz);
          tz.setVertexBufferView(oz, vz);
          const Uz = new Map;
          for (const tz of Wz) {
            const zz = Fz.get(tz),
              {
                kind: sz,
                totalVertices: Wz
              } = ls(tz, zz);
            switch (sz) {
              case Kz.c.MatricesIndicesKind:
              case Kz.c.MatricesIndicesExtraKind:
                if (tz.type == Kz.c.FLOAT) {
                  const zz = tz.getFloatData(Wz);
                  null !== zz && Uz.set(tz, zz)
                }
            }
          }
          0 !== Uz.size && ez.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const uz = Array.from(Uz.keys());
          for (const sz of uz) {
            const zz = Uz.get(sz);
            if (!zz) continue;
            const Fz = zz.some((zz => zz >= 256)),
              Wz = new(Fz ? Uint16Array : Uint8Array)(zz.length);
            for (let tz = 0; tz < zz.length; tz++) Wz[tz] = zz[tz];
            const Xz = this._bufferManager.createBufferView(Wz, 4 * (Fz ? 2 : 1));
            tz.setRemappedBufferView(oz, sz, Xz)
          }
        }
        const Oz = Array.from(Wz.keys());
        for (const oz of Oz) {
          const zz = Wz.get(oz);
          if (!zz) continue;
          const sz = DF(oz, zz[0], this._bufferManager, this._bufferViews, this._accessors, tz.convertToRightHanded);
          for (const Fz of zz) tz.bindMorphDataToMesh(Fz, sz)
        }
      }
      async _exportNodeAsync(zz, tz, sz) {
        let Fz = this._nodeMap.get(zz);
        if (void 0 !== Fz) return void(tz.includes(Fz) || tz.push(Fz));
        const Wz = await this._createNodeAsync(zz, sz);
        if (Wz) {
          Fz = this._nodes.length, this._nodes.push(Wz), this._nodeMap.set(zz, Fz), sz.pushExportedNode(zz), tz.push(Fz);
          const Xz = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            Oz = [];
          this._babylonScene.animationGroups.length || (wF._CreateMorphTargetAnimationFromMorphTargetAnimations(zz, Xz, Oz, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, sz.convertToRightHanded, this._options.shouldExportAnimation), zz.animations.length && wF._CreateNodeAnimationFromNodeAnimations(zz, Xz, Oz, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, sz.convertToRightHanded, this._options.shouldExportAnimation)), Xz.channels.length && Xz.samplers.length && this._animations.push(Xz), Oz.forEach((zz => {
            zz.channels.length && zz.samplers.length && this._animations.push(zz)
          }))
        }
        const Xz = Wz ? [] : tz;
        for (const Oz of zz.getChildren()) await this._exportNodeAsync(Oz, Xz, sz);
        Wz && Xz.length && (Wz.children = Xz)
      }
      async _createNodeAsync(zz, tz) {
        if (!this._shouldExportNode(zz)) return null;
        const sz = {};
        if (zz.name && (sz.name = zz.name), zz.metadata) {
          const tz = this._options.metadataSelector(zz.metadata);
          tz && (sz.extras = tz)
        }
        if (zz instanceof uz.c && (this._setNodeTransformation(sz, zz, tz.convertToRightHanded), zz instanceof Nz.e)) {
          const Fz = zz instanceof bz.d ? zz.AFz : zz;
          if (Fz.kY && Fz.kY.length > 0 && (sz.mesh = await this._exportMeshAsync(Fz, tz)), zz.skeleton) {
            const tz = this._skinMap.get(zz.skeleton);
            void 0 !== tz && (void 0 === this._nodesSkinMap.get(tz) && this._nodesSkinMap.set(tz, []), this._nodesSkinMap.get(tz)?.push(sz))
          }
        }
        if (zz instanceof ys.h) {
          const Fz = this._camerasMap.get(zz);
          if (Fz) {
            void 0 === this._nodesCameraMap.get(Fz) && this._nodesCameraMap.set(Fz, []), this._setCameraTransformation(sz, zz, tz.convertToRightHanded);
            const Wz = zz.parent;
            if (null !== Wz && fs(zz, Wz)) {
              const zz = this._nodeMap.get(Wz);
              if (void 0 !== zz) {
                const tz = this._nodes[zz];
                return ps(sz, tz), this._nodesCameraMap.get(Fz)?.push(tz), null
              }
            }
            this._nodesCameraMap.get(Fz)?.push(sz)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", sz, zz, this._nodeMap, tz.convertToRightHanded) ? sz : (ez.e.Warn(`Not exporting node ${zz.name}`), null)
      }
      _exportIndices(zz, tz, sz, Fz, Wz, Oz, oz, vz, Uz) {
        let Kz = null;
        Uz.mode = function(zz) {
          switch (zz) {
            case Xz.b.TriangleFillMode:
              return 4;
            case Xz.b.TriangleStripDrawMode:
              return 5;
            case Xz.b.TriangleFanDrawMode:
              return 6;
            case Xz.b.PointListDrawMode:
            case Xz.b.PointFillMode:
              return 0;
            case Xz.b.LineLoopDrawMode:
              return 2;
            case Xz.b.LineListDrawMode:
              return 1;
            case Xz.b.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${zz}`)
        }(Oz);
        const uz = oz !== Xz.b.CounterClockWiseSideOrientation && function(zz) {
          switch (zz) {
            case Xz.b.TriangleFillMode:
            case Xz.b.TriangleStripDrawMode:
            case Xz.b.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(Oz);
        if (uz) {
          if (Oz === Xz.b.TriangleStripDrawMode || Oz === Xz.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const oz = tz ? new Uint32Array(Fz) : new Uint16Array(Fz);
          if (zz)
            for (let tz = 0; tz + 2 < Fz; tz += 3) oz[tz] = zz[sz + tz] + Wz, oz[tz + 1] = zz[sz + tz + 2] + Wz, oz[tz + 2] = zz[sz + tz + 1] + Wz;
          else
            for (let zz = 0; zz + 2 < Fz; zz += 3) oz[zz] = zz, oz[zz + 1] = zz + 2, oz[zz + 2] = zz + 1;
          Kz = oz
        } else if (zz && 0 !== Wz) {
          const Xz = tz ? new Uint32Array(Fz) : new Uint16Array(Fz);
          for (let tz = 0; tz < Fz; tz++) Xz[tz] = zz[sz + tz] + Wz;
          Kz = Xz
        } else zz && (Kz = function(zz, tz, sz, Fz) {
          let Wz = zz;
          return 0 === tz && sz === zz.length || (Wz = Array.isArray(zz) ? zz.slice(tz, tz + sz) : zz.subarray(tz, tz + sz)), Wz instanceof Int32Array ? new Uint32Array(Wz.buffer, Wz.byteOffset, Wz.length) : Array.isArray(Wz) ? Fz ? new Uint32Array(Wz) : new Uint16Array(Wz) : Wz
        }(zz, sz, Fz, tz));
        if (Kz) {
          let Xz = vz.getIndicesAccessor(zz, sz, Fz, Wz, uz);
          if (void 0 === Xz) {
            const Oz = this._bufferManager.createBufferView(Kz),
              oz = tz ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(Oz, "SCALAR", oz, Fz, 0)), Xz = this._accessors.length - 1, vz.setIndicesAccessor(zz, sz, Fz, Wz, uz, Xz)
          }
          Uz.indices = Xz
        }
      }
      _exportVertexBuffer(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = zz.getKind();
        if (!as(Oz)) return;
        if (Oz.startsWith("uv") && !this._options.exportUnusedUVs && (!tz || !this._materialNeedsUVsSet.has(tz))) return;
        let oz = Wz.getVertexAccessor(zz, sz, Fz);
        if (void 0 === oz) {
          const tz = Wz.convertedToRightHandedBuffers.get(zz._buffer) || zz._buffer.getData(),
            Xz = Oz === Kz.c.PositionKind ? function(zz, tz, sz, Fz) {
              const {
                byteOffset: Wz,
                byteStride: Xz,
                type: Oz,
                normalized: oz
              } = tz, vz = tz.getSize(), Uz = new Array(vz).fill(1 / 0), Kz = new Array(vz).fill(-1 / 0);
              return (0, As.l)(zz, Wz + sz * Xz, Xz, vz, Oz, Fz * vz, oz, (zz => {
                for (let tz = 0; tz < vz; tz++) Uz[tz] = Math.min(Uz[tz], zz[tz]), Kz[tz] = Math.max(Kz[tz], zz[tz])
              })), {
                min: Uz,
                max: Kz
              }
            }(tz, zz, sz, Fz) : void 0,
            vz = (Oz === Kz.c.MatricesIndicesKind || Oz === Kz.c.MatricesIndicesExtraKind) && zz.type === Kz.c.FLOAT,
            Uz = vz ? Kz.c.UNSIGNED_BYTE : zz.type,
            uz = vz ? void 0 : zz.normalized,
            Nz = vz ? Wz.getRemappedBufferView(zz._buffer, zz) : Wz.getVertexBufferView(zz._buffer),
            bz = zz.byteOffset + sz * zz.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(Nz, function(zz, tz) {
            if (zz == Kz.c.ColorKind) return tz ? "VEC4" : "VEC3";
            switch (zz) {
              case Kz.c.PositionKind:
              case Kz.c.NormalKind:
                return "VEC3";
              case Kz.c.TangentKind:
              case Kz.c.MatricesIndicesKind:
              case Kz.c.MatricesIndicesExtraKind:
              case Kz.c.MatricesWeightsKind:
              case Kz.c.MatricesWeightsExtraKind:
                return "VEC4";
              case Kz.c.UVKind:
              case Kz.c.UV2Kind:
              case Kz.c.UV3Kind:
              case Kz.c.UV4Kind:
              case Kz.c.UV5Kind:
              case Kz.c.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${zz}`)
          }(Oz, Wz.hasVertexColorAlpha(zz)), Uz, Fz, bz, Xz, uz)), oz = this._accessors.length - 1, Wz.setVertexAccessor(zz, sz, Fz, oz)
        }
        Xz.attributes[function(zz) {
          switch (zz) {
            case Kz.c.PositionKind:
              return "POSITION";
            case Kz.c.NormalKind:
              return "NORMAL";
            case Kz.c.TangentKind:
              return "TANGENT";
            case Kz.c.ColorKind:
              return "COLOR_0";
            case Kz.c.UVKind:
              return "TEXCOORD_0";
            case Kz.c.UV2Kind:
              return "TEXCOORD_1";
            case Kz.c.UV3Kind:
              return "TEXCOORD_2";
            case Kz.c.UV4Kind:
              return "TEXCOORD_3";
            case Kz.c.UV5Kind:
              return "TEXCOORD_4";
            case Kz.c.UV6Kind:
              return "TEXCOORD_5";
            case Kz.c.MatricesIndicesKind:
              return "JOINTS_0";
            case Kz.c.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case Kz.c.MatricesWeightsKind:
              return "WEIGHTS_0";
            case Kz.c.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${zz}`)
        }(Oz)] = oz
      }
      async _exportMaterialAsync(zz, tz, sz, Fz) {
        let Wz = this._materialMap.get(zz);
        if (void 0 === Wz) {
          const Fz = tz && Object.keys(tz).some((zz => zz.startsWith("uv")));
          if ((zz = zz instanceof oF.c ? zz.P_[sz.materialIndex] : zz) instanceof xt) Wz = await this._materialExporter.exportPBRMaterialAsync(zz, Fz);
          else if (zz instanceof vF.StandardMaterial) Wz = await this._materialExporter.exportStandardMaterialAsync(zz, Fz);
          else {
            if (!(zz instanceof Et)) return void ez.e.Warn(`Unsupported material '${zz.name}' with type ${zz.getClassName()}`);
            Wz = await this._materialExporter.exportOpenPBRMaterialAsync(zz, Fz)
          }
          this._materialMap.set(zz, Wz)
        }
        Fz.material = Wz
      }
      async _exportMeshAsync(zz, tz) {
        let sz = tz.getMesh(zz);
        if (void 0 !== sz) return sz;
        const Fz = {
          primitives: []
        };
        sz = this._meshes.length, this._meshes.push(Fz), tz.setMesh(zz, sz);
        const Wz = zz.isUnIndexed ? null : zz.Qsz(),
          Oz = zz.geometry?.getVertexBuffers(),
          oz = tz.getMorphTargetsFromMesh(zz),
          vz = zz instanceof gF.b,
          Uz = zz instanceof yF,
          Kz = zz.kY;
        if (Oz && Kz && Kz.length > 0)
          for (const uz of Kz) {
            const sz = {
                attributes: {}
              },
              Kz = uz.vD() || this._babylonScene.defaultMaterial;
            if (Uz) {
              const tz = {
                  name: Kz.name
                },
                Fz = zz,
                Wz = gz.Color3.White(),
                Xz = Fz.material?.alpha ?? 1,
                Oz = Fz.greasedLineMaterial?.color ?? Wz;
              (!Oz.equalsWithEpsilon(Wz, Ms.c) || Xz < 1) && (tz.pbrMetallicRoughness = {
                baseColorFactor: [...Oz.hsz(), Xz]
              }), this._materials.push(tz), sz.material = this._materials.length - 1
            } else if (vz) {
              const tz = {
                  name: Kz.name
                },
                Fz = zz;
              (!Fz.color.equalsWithEpsilon(gz.Color3.White(), Ms.c) || Fz.alpha < 1) && (tz.pbrMetallicRoughness = {
                baseColorFactor: [...Fz.color.hsz(), Fz.alpha]
              }), this._materials.push(tz), sz.material = this._materials.length - 1
            } else await this._exportMaterialAsync(Kz, Oz, uz, sz);
            const Nz = vz || Uz ? Xz.b.LineListDrawMode : zz.overrideRenderingFillMode ?? Kz.fillMode;
            let bz = Kz._getEffectiveOrientation(zz);
            tz.wasAddedByNoopNode && !zz.aJ().useRightHandedSystem && (bz = bz === Xz.b.ClockWiseSideOrientation ? Xz.b.CounterClockWiseSideOrientation : Xz.b.ClockWiseSideOrientation), this._exportIndices(Wz, Wz ? (0, As.e)(Wz, uz.indexCount, uz.indexStart, uz.verticesStart) : uz.verticesCount > 65535, Wz ? uz.indexStart : uz.verticesStart, Wz ? uz.indexCount : uz.verticesCount, -uz.verticesStart, Nz, bz, tz, sz);
            for (const zz of Object.values(Oz)) this._exportVertexBuffer(zz, Kz, uz.verticesStart, uz.verticesCount, tz, sz);
            if (oz) {
              sz.targets = [];
              for (const zz of oz) sz.targets.push(zz.attributes)
            }
            Fz.primitives.push(sz), this._extensionsPostExportMeshPrimitive(sz)
          }
        if (oz) {
          Fz.weights = [], Fz.extras || (Fz.extras = {}), Fz.extras.targetNames = [];
          for (const zz of oz) Fz.weights.push(zz.influence), Fz.extras.targetNames.push(zz.name)
        }
        return sz
      }
    }
    dF._ExtensionNames = new Array, dF._ExtensionFactories = {}, dF._ExtensionOrders = {};
    class hF {
      static async GLTFAsync(zz, tz, sz) {
        sz && sz.exportWithoutWaitingForScene || await zz.whenReadyAsync();
        const Fz = new dF(zz, sz),
          Wz = await Fz.generateGLTFAsync(tz.replace(/\.[^/.]+$/, ""));
        return Fz.dispose(), Wz
      }
      static async GLBAsync(zz, tz, sz) {
        sz && sz.exportWithoutWaitingForScene || await zz.whenReadyAsync();
        const Fz = new dF(zz, sz),
          Wz = await Fz.generateGLBAsync(tz.replace(/\.[^/.]+$/, ""));
        return Fz.dispose(), Wz
      }
    }
    const QF = "EXT_mesh_gpu_instancing";

    function kF(zz, tz) {
      const sz = new Float32Array(3 * tz);
      for (let Fz = 0; Fz < tz; Fz++) sz[3 * Fz + 0] = zz[4 * Fz + 0], sz[3 * Fz + 1] = zz[4 * Fz + 1], sz[3 * Fz + 2] = zz[4 * Fz + 2];
      return sz
    }
    class iF {
      constructor(zz) {
        this.name = QF, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(zz, tz, sz, Fz, Wz, Xz) {
        return await new Promise((zz => {
          if (tz && sz instanceof IF.c && sz.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const zz = hz.p.Zero(),
              Fz = hz.h.Identity(),
              Oz = hz.p.One(),
              oz = sz.thinInstanceGetWorldMatrices(),
              vz = hz.m.XD[2],
              Uz = hz.m.Quaternion[1],
              Kz = hz.m.XD[3];
            let uz = !1,
              Nz = !1,
              bz = !1;
            const wz = new Float32Array(3 * sz.E1),
              Dz = new Float32Array(4 * sz.E1),
              gz = new Float32Array(3 * sz.E1);
            let Hz = 0;
            for (const tz of oz) tz.decompose(Kz, Uz, vz), Wz && (Ss(vz), Vs(Uz)), wz.set(vz.hsz(), 3 * Hz), Dz.set(Uz.normalize().hsz(), 4 * Hz), gz.set(Kz.hsz(), 3 * Hz), uz = uz || !vz.equalsWithEpsilon(zz), Nz = Nz || !Uz.equalsWithEpsilon(Fz), bz = bz || !Kz.equalsWithEpsilon(Oz), Hz++;
            const Bz = {
              attributes: {}
            };
            uz && (Bz.attributes.TRANSLATION = this._buildAccessor(wz, "VEC3", sz.E1, Xz)), Nz && (Bz.attributes.ROTATION = this._buildAccessor(Dz, "VEC4", sz.E1, Xz)), bz && (Bz.attributes.SCALE = this._buildAccessor(gz, "VEC3", sz.E1, Xz));
            let Pz = sz._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (Pz) {
              const zz = sz.E1,
                tz = "VEC3";
              sz.hasVertexAlpha && Pz.length === 4 * zz ? (this._instanceColorWarned || (ez.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Pz = kF(Pz, zz)) : Pz.length === 4 * zz && (Pz = kF(Pz, zz)), Pz.length === 3 * zz && (Bz.attributes._COLOR_0 = this._buildAccessor(Pz, tz, zz, Xz))
            }
            tz.extensions = tz.extensions || {}, tz.extensions[QF] = Bz
          }
          zz(tz)
        }))
      }
      _buildAccessor(zz, tz, sz, Fz) {
        const Wz = Fz.createBufferView(zz),
          Xz = Fz.createAccessor(Wz, tz, 5126, sz);
        return this._exporter._accessors.push(Xz), this._exporter._accessors.length - 1
      }
    }
    let LF = !1;

    function lF() {
      LF || (LF = !0, dF.RegisterExtension(QF, (zz => new iF(zz))))
    }
    sz(39623);
    lF();
    var nF = sz(40962);

    function aF(zz, tz, sz, Fz) {
      const Wz = zz;
      let Xz = null,
        Oz = null,
        oz = null,
        vz = null;
      const Uz = {},
        Kz = tz.find((zz => "POSITION" === zz.dracoName));
      if (!Kz) throw new Error("Draco: Missing position attribute for encoding.");
      if (!sz) {
        const zz = Kz.data.length / Kz.size;
        sz = new(zz > 65535 ? Uint32Array : Uint16Array)(zz);
        for (let tz = 0; tz < zz; tz++) sz[tz] = tz
      }
      try {
        Xz = new Wz.Encoder, Oz = new Wz.MeshBuilder, oz = new Wz.Mesh, Oz.AddFacesToMesh(oz, sz.length / 3, sz);
        const zz = new Map([
          [Float32Array, (zz, tz, sz, Fz, Wz, Xz) => zz.AddFloatAttribute(tz, sz, Fz, Wz, Xz)],
          [Uint32Array, (zz, tz, sz, Fz, Wz, Xz) => zz.AddUInt32Attribute(tz, sz, Fz, Wz, Xz)],
          [Uint16Array, (zz, tz, sz, Fz, Wz, Xz) => zz.AddUInt16Attribute(tz, sz, Fz, Wz, Xz)],
          [Uint8Array, (zz, tz, sz, Fz, Wz, Xz) => zz.AddUInt8Attribute(tz, sz, Fz, Wz, Xz)],
          [Int32Array, (zz, tz, sz, Fz, Wz, Xz) => zz.AddInt32Attribute(tz, sz, Fz, Wz, Xz)],
          [Int16Array, (zz, tz, sz, Fz, Wz, Xz) => zz.AddInt16Attribute(tz, sz, Fz, Wz, Xz)],
          [Int8Array, (zz, tz, sz, Fz, Wz, Xz) => zz.AddInt8Attribute(tz, sz, Fz, Wz, Xz)]
        ]);
        for (const sz of tz) {
          sz.data instanceof Uint8ClampedArray && (sz.data = new Uint8Array(sz.data));
          const tz = zz.get(sz.data.constructor),
            vz = sz.data.length / sz.size;
          Uz[sz.kind] = tz(Oz, oz, Wz[sz.dracoName], vz, sz.size, sz.data), Fz.quantizationBits && Fz.quantizationBits[sz.dracoName] && Xz.SetAttributeQuantization(Wz[sz.dracoName], Fz.quantizationBits[sz.dracoName])
        }
        Fz.method && Xz.SetEncodingMethod(Wz[Fz.method]), void 0 !== Fz.encodeSpeed && void 0 !== Fz.decodeSpeed && Xz.SetSpeedOptions(Fz.encodeSpeed, Fz.decodeSpeed), vz = new Wz.DracoInt8Array;
        const Kz = Xz.EncodeMeshToDracoBuffer(oz, vz);
        if (Kz <= 0) throw new Error("Draco: Failed to encode.");
        const uz = new Int8Array(Kz);
        for (let tz = 0; tz < Kz; tz++) uz[tz] = vz.GetValue(tz);
        return {
          data: uz,
          attributeIds: Uz
        }
      } finally {
        oz && Wz.destroy(oz), Oz && Wz.destroy(Oz), Xz && Wz.destroy(Xz), vz && Wz.destroy(vz)
      }
    }

    function qF() {
      let zz;
      onmessage = tz => {
        const sz = tz.data;
        switch (sz.id) {
          case "init": {
            sz.url && importScripts(sz.url);
            const tz = sz.wasmBinary ? {
              wasmBinary: sz.wasmBinary
            } : {};
            zz = DracoEncoderModule(tz), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!zz) throw new Error("Draco: Encoder module is not available.");
            zz.then((zz => {
              const tz = aF(zz, sz.attributes, sz.indices, sz.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: tz
              }, tz ? [tz.data.buffer] : void 0)
            })).catch((zz => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: zz.message
              })
            }))
        }
      }
    }
    class SF {
      constructor(zz) {
        if (zz.workerPool) return void(this._workerPoolPromise = Promise.resolve(zz.workerPool));
        const tz = zz.wasmBinary,
          sz = zz.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Fz = sz && "function" === typeof Worker && "function" === typeof URL,
          Wz = Fz || !zz.jsModule,
          Xz = zz.wasmUrl && zz.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Wz ? Jt.j.GetBabylonScriptURL(zz.wasmUrl, !0) : "",
            wasmBinaryPromise: tz ? Promise.resolve(tz) : Jt.j.LoadFileAsync(Jt.j.GetBabylonScriptURL(zz.wasmBinaryUrl, !0))
          } : {
            url: Wz ? Jt.j.GetBabylonScriptURL(zz.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Fz ? this._workerPoolPromise = Xz.wasmBinaryPromise.then((zz => {
          const tz = this._getWorkerContent(),
            Fz = URL.createObjectURL(new Blob([tz], {
              type: "application/javascript"
            }));
          return new nF.b(sz, (() => async function(zz, tz, sz) {
            return await new Promise(((Fz, Wz) => {
              const Xz = tz => {
                  zz.removeEventListener("error", Xz), zz.removeEventListener("message", Oz), Wz(tz)
                },
                Oz = tz => {
                  "initDone" === tz.data.id && (zz.removeEventListener("error", Xz), zz.removeEventListener("message", Oz), Fz(zz))
                };
              if (zz.addEventListener("error", Xz), zz.addEventListener("message", Oz), tz) {
                const Fz = tz.slice(0);
                zz.postMessage({
                  id: "init",
                  url: sz,
                  wasmBinary: Fz
                }, [Fz])
              } else zz.postMessage({
                id: "init",
                url: sz
              })
            }))
          }(new Worker(Fz), zz, Xz.url)))
        })) : this._modulePromise = Xz.wasmBinaryPromise.then((async tz => {
          if (!this._isModuleAvailable() && !zz.jsModule) {
            if (!Xz.url) throw new Error("Draco codec module is not available");
            await Jt.j.LoadBabylonScriptAsync(Xz.url)
          }
          return await this._createModuleAsync(tz, zz.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((zz => {
          zz.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function VF() {
      const zz = zz => !!zz && "object" === typeof zz;
      for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
      return sz.reduce(((tz, sz) => {
        const Fz = Object.keys(sz);
        for (const Wz of Fz) {
          const Fz = tz[Wz],
            Xz = sz[Wz];
          Array.isArray(Fz) && Array.isArray(Xz) ? tz[Wz] = Fz.concat(Xz) : zz(Fz) && zz(Xz) ? tz[Wz] = VF(Fz, Xz) : tz[Wz] = Xz
        }
        return tz
      }), {})
    }

    function RF(zz) {
      return zz === Qz.m.PositionKind ? "POSITION" : zz === Qz.m.NormalKind ? "NORMAL" : zz === Qz.m.ColorKind ? "COLOR" : zz.startsWith(Qz.m.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const pF = {
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
    class fF extends SF {
      static get DefaultAvailable() {
        return !!((zz = fF.DefaultConfiguration).wasmUrl && (zz.wasmBinary || zz.wasmBinaryUrl) && "object" === typeof WebAssembly || zz.fallbackUrl);
        var zz
      }
      static get Default() {
        return fF._Default ?? (fF._Default = new fF), fF._Default
      }
      static ResetDefault(zz) {
        fF._Default && (zz || fF._Default.dispose(), fF._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(zz, tz) {
        return {
          module: await (tz || DracoEncoderModule)({
            wasmBinary: zz
          })
        }
      }
      _getWorkerContent() {
        return `${aF}(${qF})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fF.DefaultConfiguration)
      }
      async _encodeAsync(zz, tz, sz) {
        const Fz = sz ? VF(pF, sz) : pF;
        if (this._workerPoolPromise) {
          const sz = await this._workerPoolPromise;
          return await new Promise(((Wz, Xz) => {
            sz.push(((sz, Oz) => {
              const oz = zz => {
                  sz.removeEventListener("error", oz), sz.removeEventListener("message", vz), Xz(zz), Oz()
                },
                vz = zz => {
                  "encodeMeshSuccess" === zz.data.id ? (sz.removeEventListener("error", oz), sz.removeEventListener("message", vz), Wz(zz.data.encodedMeshData), Oz()) : "encodeMeshError" === zz.data.id && (sz.removeEventListener("error", oz), sz.removeEventListener("message", vz), Xz(new Error(zz.data.errorMessage)), Oz())
                };
              sz.addEventListener("error", oz), sz.addEventListener("message", vz);
              const Uz = [];
              for (const tz of zz) Uz.push(tz.data.buffer);
              tz && Uz.push(tz.buffer), sz.postMessage({
                id: "encodeMesh",
                attributes: zz,
                indices: tz,
                options: Fz
              }, Uz)
            }))
          }))
        }
        if (this._modulePromise) {
          return aF((await this._modulePromise).module, zz, tz, Fz)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(zz, tz) {
        if (0 == zz.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        zz instanceof IF.c && zz.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === tz?.method && (ez.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), tz.method = "MESH_SEQUENTIAL_ENCODING");
        const sz = function(zz) {
            let tz = zz.Qsz(void 0, !0);
            return !tz || tz instanceof Uint32Array || tz instanceof Uint16Array || (tz = ((0, As.e)(tz, tz.length) ? Uint32Array : Uint16Array).from(tz)), tz
          }(zz),
          Fz = function(zz, tz) {
            const sz = [];
            for (const Fz of zz.getVerticesDataKinds()) {
              if (tz?.includes(Fz)) {
                if (Fz === Qz.m.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Wz = zz.getVertexBuffer(Fz),
                Xz = Wz.getSize(),
                Oz = (0, As.s)(Wz.getData(), Xz, Wz.type, Wz.byteOffset, Wz.byteStride, zz.getTotalVertices(), !0);
              sz.push({
                kind: Fz,
                dracoName: RF(Fz),
                size: Xz,
                data: Oz
              })
            }
            return sz
          }(zz, tz?.excludedAttributes);
        return await this._encodeAsync(Fz, sz, tz)
      }
    }
    fF.DefaultConfiguration = {
      wasmUrl: `${Jt.j._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${Jt.j._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${Jt.j._DefaultCdnUrl}/draco_encoder.js`
    }, fF._Default = null;
    const EF = "KHR_draco_mesh_compression";
    class zW {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(zz) {
        this.name = EF, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === zz.options.meshCompressionMethod && fF.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(zz, tz, sz) {
        if (!this.enabled) return;
        if (4 !== zz.mode && 5 !== zz.mode) return void ez.e.Warn("Cannot compress primitive with mode " + zz.mode + ".");
        const Fz = [],
          Wz = [];
        let Xz = null;
        if (void 0 !== zz.indices) {
          const Oz = sz[zz.indices],
            oz = tz.getBufferView(Oz);
          Xz = tz.getData(oz).slice(), Fz.push(oz), Wz.push(Oz)
        }
        const Oz = [];
        for (const [Kz, uz] of Object.entries(zz.attributes)) {
          const zz = sz[uz],
            Xz = tz.getBufferView(zz),
            vz = ns(zz.type),
            Uz = (0, As.s)(tz.getData(Xz), vz, zz.componentType, zz.byteOffset || 0, Xz.byteStride || (0, As.q)(zz.componentType) * vz, zz.count, !0);
          Oz.push({
            kind: Kz,
            dracoName: (oz = Kz, "POSITION" === oz ? "POSITION" : "NORMAL" === oz ? "NORMAL" : oz.startsWith("COLOR") ? "COLOR" : oz.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: ns(zz.type),
            data: Uz
          }), Fz.push(Xz), Wz.push(zz)
        }
        var oz;
        const vz = {
            method: zz.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          Uz = fF.Default._encodeAsync(Oz, Xz, vz).then((sz => {
            const Xz = {
                bufferView: -1,
                attributes: sz.attributeIds
              },
              Oz = tz.createBufferView(sz.data);
            tz.setBufferView(Xz, Oz);
            for (const zz of Fz) this._bufferViewsUsed.add(zz);
            for (const zz of Wz) this._accessorsUsed.add(zz);
            zz.extensions || (zz.extensions = {}), zz.extensions[EF] = Xz
          })).catch((zz => {
            ez.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + zz.message)
          }));
        this._encodePromises.push(Uz), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(zz) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((tz => {
          zz.getPropertiesWithBufferView(tz).every((zz => this._accessorsUsed.has(zz))) && zz.removeBufferView(tz)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let tW = !1;

    function sW() {
      tW || (tW = !0, dF.RegisterExtension(EF, (zz => new zW(zz))))
    }
    sW();
    var FW = sz(40695);
    const WW = "KHR_lights_punctual",
      XW = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      OW = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      oW = hz.p.Backward();
    class vW {
      constructor(zz) {
        this.name = WW, this.enabled = !0, this.required = !1, this._exporter = zz
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
      async postExportNodeAsync(zz, tz, sz, Fz, Wz) {
        return await new Promise((Xz => {
          if (!(sz instanceof bF.d)) return void Xz(tz);
          const Oz = sz.getTypeID() == bF.d.LIGHTTYPEID_POINTLIGHT ? "point" : sz.getTypeID() == bF.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : sz.getTypeID() == bF.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!Oz || !(sz instanceof FW.e)) return ez.e.Warn(`${zz}: Light ${sz.name} is not supported in ${WW}`), void Xz(tz);
          if (sz.falloffType !== bF.d.FALLOFF_GLTF && ez.e.Warn(`${zz}: Light falloff for ${sz.name} does not match the ${WW} specification!`), !sz.position.wOz(0, 0, 0)) {
            const zz = hz.m.XD[0].vsz(sz.position);
            Wz && Ss(zz), tz.translation = zz.hsz()
          }
          if ("point" !== Oz) {
            const zz = sz.direction.normalizeToRef(hz.m.XD[0]);
            Wz && Ss(zz);
            const Fz = hz.h.FromUnitVectorsToRef(oW, zz, hz.m.Quaternion[0]);
            hz.h.IsIdentity(Fz) || (tz.rotation = Fz.hsz())
          }
          const oz = {
            type: Oz,
            name: sz.name,
            color: sz.diffuse.hsz(),
            intensity: sz.intensity,
            range: sz.range
          };
          if (zF(oz, XW), "spot" === Oz) {
            const zz = sz;
            oz.spot = {
              innerConeAngle: zz.innerAngle / 2,
              outerConeAngle: zz.angle / 2
            }, zF(oz.spot, OW)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(oz);
          const vz = {
              light: this._lights.lights.length - 1
            },
            Uz = sz.parent;
          if (Uz && fs(sz, Uz)) {
            const zz = Fz.get(Uz);
            if (zz) {
              const sz = this._exporter._nodes[zz];
              return ps(tz, sz), sz.extensions || (sz.extensions = {}), sz.extensions[WW] = vz, void Xz(null)
            }
          }
          tz.extensions || (tz.extensions = {}), tz.extensions[WW] = vz, Xz(tz)
        }))
      }
    }
    let UW = !1;

    function KW() {
      UW || (UW = !0, dF.RegisterExtension(WW, (zz => new vW(zz))))
    }
    KW();
    const uW = "KHR_interactivity";
    class NW {
      constructor(zz) {
        this._exporter = zz, this.name = uW, this.enabled = !!zz.options.khrInteractivity, this.required = zz.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var zz, tz, sz;
        const Fz = this._exporter.options.khrInteractivity;
        if (!Fz) return;
        const Wz = Fz.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: zz => this._exporter._getNodeIndex(zz),
          getAnimationIndex: zz => this._exporter._getAnimationIndex(zz),
          getCameraIndex: zz => this._exporter._getCameraIndex(zz),
          getMaterialIndex: zz => this._exporter._getMaterialIndex(zz),
          getRootIndex: (zz, tz) => this._exporter._getRootIndex(zz, tz),
          setNodeExtension: (zz, tz, sz) => this._exporter._setNodeExtension(zz, tz, sz)
        });
        this._exporter._glTF.extensions[uW] = Wz;
        for (const Xz of Fz.additionalExtensionsUsed)(zz = this._exporter._glTF).extensionsUsed || (zz.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Xz) && this._exporter._glTF.extensionsUsed.push(Xz);
        for (const Xz of Fz.additionalExtensionsRequired)(tz = this._exporter._glTF).extensionsUsed || (tz.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Xz) && this._exporter._glTF.extensionsUsed.push(Xz), (sz = this._exporter._glTF).extensionsRequired || (sz.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(Xz) && this._exporter._glTF.extensionsRequired.push(Xz)
      }
    }
    let bW = !1;

    function wW() {
      bW || (bW = !0, dF.RegisterExtension(uW, (zz => new NW(zz)), 200))
    }
    wW();
    const DW = "EXT_lights_area",
      gW = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      HW = {
        aspect: 1
      },
      BW = hz.p.Backward();
    class PW {
      constructor(zz) {
        this.name = DW, this.enabled = !0, this.required = !1, this._exporter = zz
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[DW] = this._lights
      }
      async postExportNodeAsync(zz, tz, sz, Fz, Wz) {
        return await new Promise((Xz => {
          if (!(sz instanceof bF.d)) return void Xz(tz);
          const Oz = sz.getTypeID() == bF.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!Oz) return ez.e.Warn(`${zz}: Light ${sz.name} is not supported in ${DW}`), void Xz(tz);
          const oz = sz;
          if (oz.falloffType !== bF.d.FALLOFF_GLTF && ez.e.Warn(`${zz}: Light falloff for ${sz.name} does not match the ${DW} specification!`), !oz.position.wOz(0, 0, 0)) {
            const zz = hz.m.XD[0].vsz(oz.position);
            Wz && Ss(zz), tz.translation = zz.hsz()
          }
          const vz = hz.p.Forward();
          Wz && Ss(vz);
          const Uz = hz.h.FromUnitVectorsToRef(BW, vz, hz.m.Quaternion[0]);
          hz.h.IsIdentity(Uz) || (tz.rotation = Uz.hsz());
          const Kz = {
            type: Oz,
            name: oz.name,
            color: oz.diffuse.hsz(),
            intensity: oz.intensity,
            size: oz.height,
            rect: {
              aspect: oz.width / oz.height
            }
          };
          zF(Kz, gW), Kz.rect && zF(Kz.rect, HW), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Kz);
          const uz = {
              light: this._lights.lights.length - 1
            },
            Nz = sz.parent;
          if (Nz && fs(oz, Nz)) {
            const zz = Fz.get(Nz);
            if (zz) {
              const sz = this._exporter._nodes[zz];
              return ps(tz, sz), sz.extensions || (sz.extensions = {}), sz.extensions[DW] = uz, void Xz(null)
            }
          }
          tz.extensions || (tz.extensions = {}), tz.extensions[DW] = uz, Xz(tz)
        }))
      }
    }
    let rW = !1;

    function YW() {
      rW || (rW = !0, dF.RegisterExtension(DW, (zz => new PW(zz))))
    }
    YW();
    const xW = "KHR_materials_anisotropy";
    class mW {
      constructor(zz) {
        this.name = xW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, tz, sz) {
        const Fz = [];
        if (sz instanceof xt) {
          if (sz.anisotropy.isEnabled && !sz.anisotropy.legacy) return sz.anisotropy.texture && Fz.push(sz.anisotropy.texture), Fz
        } else if (sz instanceof Et && sz.specularRoughnessAnisotropy > 0) {
          const zz = function(zz) {
            const tz = zz.specularRoughnessAnisotropyTexture,
              sz = zz.geometryTangentTexture;
            return `${tz&&tz.getInternalTexture()?tz.getInternalTexture().uniqueId:"NoStrength"}_${sz&&sz.getInternalTexture()?sz.getInternalTexture().uniqueId:"NoTangent"}`
          }(sz);
          if (this._anisoTexturesMap[zz]) Fz.push(this._anisoTexturesMap[zz]);
          else {
            const tz = await async function(zz) {
              const tz = zz.aJ(),
                sz = zz.specularRoughnessAnisotropyTexture,
                Fz = zz.geometryTangentTexture;
              return sz || Fz ? await os("AnisotropyTexture", Ks(Fz ? vs(Fz, 0) : Us(1), Fz ? vs(Fz, 1) : Us(0), sz ? vs(sz, 0) : Us(1)), tz) : null
            }(sz);
            tz && (Fz.push(tz), this._anisoTexturesMap[zz] = tz)
          }
          return Fz
        }
        return []
      }
      postExportMaterialAsync(zz, tz, sz) {
        return new Promise((zz => {
          var Fz;
          if (sz instanceof xt) {
            if (!sz.anisotropy.isEnabled || sz.anisotropy.legacy) return void zz(tz);
            this._wasUsed = !0, tz.extensions = tz.extensions || {};
            const Fz = this._exporter._materialExporter.getTextureInfo(sz.anisotropy.texture),
              Wz = {
                anisotropyStrength: sz.anisotropy.intensity,
                anisotropyRotation: sz.anisotropy.angle,
                anisotropyTexture: Fz ?? void 0
              };
            null !== Wz.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(sz), tz.extensions[xW] = Wz
          } else if (sz instanceof Et && sz.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, tz.extensions = tz.extensions || {};
            let Wz = sz.specularRoughnessTexture;
            sz._useRoughnessFromMetallicTextureGreen && (Wz = sz.baseMetalnessTexture);
            const Xz = this._anisoTexturesMap[sz.id];
            if (!Wz && !Xz) {
              let Fz = sz.specularRoughness,
                Wz = sz.specularRoughnessAnisotropy;
              if (!sz._useGltfStyleAnisotropy) {
                const zz = function(zz, tz) {
                  const sz = zz * zz,
                    Fz = sz * Math.sqrt(2 / (1 + (1 - tz) * (1 - tz))),
                    Wz = (1 - tz) * Fz;
                  return {
                    newBaseRoughness: Math.sqrt(Wz),
                    newAnisotropyStrength: Math.min(Math.sqrt((Fz - sz) / Math.max(1 - sz, 1e-4)), 1)
                  }
                }(sz.specularRoughness, sz.specularRoughnessAnisotropy);
                Fz = zz.newBaseRoughness, Wz = zz.newAnisotropyStrength
              }
              tz.pbrMetallicRoughness && (tz.pbrMetallicRoughness.roughnessFactor = Fz);
              const Xz = {
                anisotropyStrength: Wz,
                anisotropyRotation: sz.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return tz.extensions[xW] = Xz, zz(tz)
            }
            const Oz = Xz ? this._exporter._materialExporter.getTextureInfo(Xz) : null,
              oz = {
                anisotropyStrength: sz.specularRoughnessAnisotropy,
                anisotropyRotation: sz.geometryTangentAngle,
                anisotropyTexture: Oz || void 0,
                extensions: {}
              };
            sz._useGltfStyleAnisotropy || (tz.extensions.KHR_materials_openpbr = {}, (Fz = this._exporter._glTF).extensionsUsed || (Fz.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(sz), tz.extensions[xW] = oz
          }
          zz(tz)
        }))
      }
    }
    let JW = !1;

    function IW() {
      JW || (JW = !0, dF.RegisterExtension(xW, (zz => new mW(zz))))
    }
    IW();
    const CW = "KHR_materials_clearcoat";

    function eW(zz, tz) {
      const sz = new Gz.g(tz.name, tz.aJ());
      return sz._texture = zz, sz.coordinatesIndex = tz.coordinatesIndex, tz instanceof Gz.g && (sz.uOffset = tz.uOffset, sz.vOffset = tz.vOffset, sz.uScale = tz.uScale, sz.vScale = tz.vScale, sz.wAng = tz.wAng), sz.wrapU = tz.wrapU, sz.wrapV = tz.wrapV, sz
    }
    class ZW {
      constructor(zz) {
        this.name = CW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = zz
      }
      dispose() {
        for (const zz of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[zz].dispose()
        }
        this._mergedTexturesMap = {};
        for (const zz of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[zz].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, tz, sz) {
        const Fz = [];
        if (sz instanceof xt) {
          if (sz.clearCoat.isEnabled) return sz.clearCoat.texture && Fz.push(sz.clearCoat.texture), !sz.clearCoat.useRoughnessFromMainTexture && sz.clearCoat.textureRoughness && Fz.push(sz.clearCoat.textureRoughness), sz.clearCoat.bumpTexture && Fz.push(sz.clearCoat.bumpTexture), Fz
        } else if (sz instanceof Et && sz.coatWeight > 0) {
          let zz = !1;
          if (sz.coatWeightTexture ? sz.coatRoughnessTexture ? sz._useCoatRoughnessFromGreenChannel && sz.coatWeightTexture.getInternalTexture() === sz.coatRoughnessTexture.getInternalTexture() ? (Fz.push(sz.coatWeightTexture), Fz.push(sz.coatRoughnessTexture)) : zz = !0 : Fz.push(sz.coatWeightTexture) : sz.coatRoughnessTexture && (sz._useCoatRoughnessFromGreenChannel ? Fz.push(sz.coatRoughnessTexture) : zz = !0), zz) {
            const zz = function(zz) {
              const tz = zz.coatWeightTexture,
                sz = tz && tz.getInternalTexture() ? tz.getInternalTexture().uniqueId : "NoCoat",
                Fz = zz.coatRoughnessTexture;
              return `${sz}_${Fz&&Fz.getInternalTexture()?Fz.getInternalTexture().uniqueId:"NoRoughness"}`
            }(sz);
            if (!this._cachedInternalTexturesMap[zz]) {
              const tz = await async function(zz) {
                const tz = zz.aJ(),
                  sz = zz.coatWeightTexture,
                  Fz = zz.coatRoughnessTexture;
                return sz || Fz ? (await os("CoatTexture", Ks(sz ? vs(sz, 0) : Us(1), Fz ? vs(Fz, zz._useCoatRoughnessFromGreenChannel ? 1 : 0) : Us(1)), tz)).getInternalTexture() : null
              }(sz);
              tz && (this._cachedInternalTexturesMap[zz] = tz)
            }
            this._cachedInternalTexturesMap[zz] && (sz.coatWeightTexture && (this._mergedTexturesMap[sz.coatWeightTexture.uniqueId] = eW(this._cachedInternalTexturesMap[zz], sz.coatWeightTexture), Fz.push(this._mergedTexturesMap[sz.coatWeightTexture.uniqueId])), sz.coatRoughnessTexture && (this._mergedTexturesMap[sz.coatRoughnessTexture.uniqueId] = eW(this._cachedInternalTexturesMap[zz], sz.coatRoughnessTexture), Fz.push(this._mergedTexturesMap[sz.coatRoughnessTexture.uniqueId])))
          }
          return sz.geometryCoatNormalTexture && Fz.push(sz.geometryCoatNormalTexture), Fz
        }
        return []
      }
      postExportMaterialAsync(zz, tz, sz) {
        return new Promise((zz => {
          if (sz instanceof xt) {
            if (!sz.clearCoat.isEnabled) return void zz(tz);
            this._wasUsed = !0, tz.extensions = tz.extensions || {};
            const Fz = this._exporter._materialExporter.getTextureInfo(sz.clearCoat.texture);
            let Wz;
            Wz = sz.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(sz.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(sz.clearCoat.textureRoughness), sz.clearCoat.isTintEnabled && Jt.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${sz.name}`), sz.clearCoat.remapF0OnInterfaceChange && Jt.j.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${sz.name}`);
            const Xz = this._exporter._materialExporter.getTextureInfo(sz.clearCoat.bumpTexture),
              Oz = {
                clearcoatFactor: sz.clearCoat.intensity,
                clearcoatTexture: Fz ?? void 0,
                clearcoatRoughnessFactor: sz.clearCoat.roughness,
                clearcoatRoughnessTexture: Wz ?? void 0,
                clearcoatNormalTexture: Xz ?? void 0
              };
            null === Oz.clearcoatTexture && null === Oz.clearcoatRoughnessTexture && null === Oz.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(sz), tz.extensions[CW] = Oz
          } else if (sz instanceof Et) {
            if (0 == sz.coatWeight) return void zz(tz);
            let Fz, Wz, Xz, Oz;
            this._wasUsed = !0, tz.extensions = tz.extensions || {}, sz.coatWeightTexture && (Fz = this._mergedTexturesMap[sz.coatWeightTexture.uniqueId], Wz = this._exporter._materialExporter.getTextureInfo(Fz)), sz.coatRoughnessTexture && (Xz = this._mergedTexturesMap[sz.coatRoughnessTexture.uniqueId], Oz = this._exporter._materialExporter.getTextureInfo(Xz)), sz.coatColorTexture && Jt.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${sz.name}`);
            const oz = this._exporter._materialExporter.getTextureInfo(sz.geometryCoatNormalTexture),
              vz = {
                clearcoatFactor: sz.coatWeight,
                clearcoatTexture: Wz ?? void 0,
                clearcoatRoughnessFactor: sz.coatRoughness,
                clearcoatRoughnessTexture: Oz ?? void 0,
                clearcoatNormalTexture: oz ?? void 0
              };
            null === vz.clearcoatTexture && null === vz.clearcoatRoughnessTexture && null === vz.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(sz), tz.extensions[CW] = vz
          }
          zz(tz)
        }))
      }
    }
    let GW = !1;

    function TW() {
      GW || (GW = !0, dF.RegisterExtension(CW, (zz => new ZW(zz))))
    }
    TW();
    const cW = "KHR_materials_coat";

    function jW(zz) {
      const tz = zz.coatRoughnessAnisotropyTexture,
        sz = zz.geometryCoatTangentTexture;
      return `${tz&&tz.getInternalTexture()?tz.getInternalTexture().uniqueId:"NoStrength"}_${sz&&sz.getInternalTexture()?sz.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function AW(zz, tz) {
      const sz = new Gz.g(tz.name, tz.aJ());
      return sz._texture = zz, sz.coordinatesIndex = tz.coordinatesIndex, tz instanceof Gz.g && (sz.uOffset = tz.uOffset, sz.vOffset = tz.vOffset, sz.uScale = tz.uScale, sz.vScale = tz.vScale, sz.wAng = tz.wAng), sz.wrapU = tz.wrapU, sz.wrapV = tz.wrapV, sz
    }
    class yW {
      constructor(zz) {
        this.name = cW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = zz
      }
      dispose() {
        for (const zz of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[zz].dispose()
        }
        this._mergedTexturesMap = {};
        for (const zz of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[zz].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, tz, sz) {
        const Fz = [];
        if (sz instanceof xt) {
          if (sz.clearCoat.isEnabled) return sz.clearCoat.texture && Fz.push(sz.clearCoat.texture), !sz.clearCoat.useRoughnessFromMainTexture && sz.clearCoat.textureRoughness && Fz.push(sz.clearCoat.textureRoughness), sz.clearCoat.bumpTexture && Fz.push(sz.clearCoat.bumpTexture), sz.clearCoat.tintTexture && Fz.push(sz.clearCoat.tintTexture), Fz
        } else if (sz instanceof Et && sz.coatWeight > 0) {
          let zz = !1;
          if (sz.coatWeightTexture ? sz.coatRoughnessTexture ? sz._useCoatRoughnessFromGreenChannel && sz.coatWeightTexture.getInternalTexture() === sz.coatRoughnessTexture.getInternalTexture() ? (Fz.push(sz.coatWeightTexture), Fz.push(sz.coatRoughnessTexture)) : zz = !0 : Fz.push(sz.coatWeightTexture) : sz.coatRoughnessTexture && (sz._useCoatRoughnessFromGreenChannel ? Fz.push(sz.coatRoughnessTexture) : zz = !0), zz) {
            const zz = function(zz) {
              const tz = zz.coatWeightTexture,
                sz = tz && tz.getInternalTexture() ? tz.getInternalTexture().uniqueId : "NoCoat",
                Fz = zz.coatRoughnessTexture;
              return `${sz}_${Fz&&Fz.getInternalTexture()?Fz.getInternalTexture().uniqueId:"NoRoughness"}`
            }(sz);
            if (!this._cachedInternalTexturesMap[zz]) {
              const tz = await async function(zz) {
                const tz = zz.aJ(),
                  sz = zz.coatWeightTexture,
                  Fz = zz.coatRoughnessTexture;
                return sz || Fz ? (await os("CoatTexture", Ks(sz ? vs(sz, 0) : Us(1), Fz ? vs(Fz, zz._useCoatRoughnessFromGreenChannel ? 1 : 0) : Us(1)), tz)).getInternalTexture() : null
              }(sz);
              tz && (this._cachedInternalTexturesMap[zz] = tz)
            }
            this._cachedInternalTexturesMap[zz] && (sz.coatWeightTexture && (this._mergedTexturesMap[sz.coatWeightTexture.uniqueId] = AW(this._cachedInternalTexturesMap[zz], sz.coatWeightTexture), Fz.push(this._mergedTexturesMap[sz.coatWeightTexture.uniqueId])), sz.coatRoughnessTexture && (this._mergedTexturesMap[sz.coatRoughnessTexture.uniqueId] = AW(this._cachedInternalTexturesMap[zz], sz.coatRoughnessTexture), Fz.push(this._mergedTexturesMap[sz.coatRoughnessTexture.uniqueId])))
          }
          if (sz.geometryCoatNormalTexture && Fz.push(sz.geometryCoatNormalTexture), sz.coatColorTexture && Fz.push(sz.coatColorTexture), sz.coatRoughnessAnisotropy > 0) {
            const zz = jW(sz);
            if (this._mergedTexturesMap[zz]) Fz.push(this._mergedTexturesMap[zz]);
            else {
              const tz = await async function(zz) {
                const tz = zz.aJ(),
                  sz = zz.coatRoughnessAnisotropyTexture,
                  Fz = zz.geometryCoatTangentTexture;
                return sz || Fz ? await os("AnisotropyTexture", Ks(Fz ? vs(Fz, 0) : Us(1), Fz ? vs(Fz, 1) : Us(0), sz ? vs(sz, 0) : Us(1)), tz) : null
              }(sz);
              tz && (Fz.push(tz), this._mergedTexturesMap[zz] = tz)
            }
            return Fz
          }
          return Fz
        }
        return []
      }
      postExportMaterialAsync(zz, tz, sz) {
        return new Promise((zz => {
          var Fz;
          if (sz instanceof xt) {
            if (!sz.clearCoat.isEnabled) return void zz(tz);
            this._wasUsed = !0, tz.extensions = tz.extensions || {};
            const Fz = this._exporter._materialExporter.getTextureInfo(sz.clearCoat.texture);
            let Wz, Xz;
            Wz = sz.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(sz.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(sz.clearCoat.textureRoughness), sz.clearCoat.isTintEnabled && (Xz = this._exporter._materialExporter.getTextureInfo(sz.clearCoat.tintTexture));
            const Oz = this._exporter._materialExporter.getTextureInfo(sz.clearCoat.bumpTexture),
              oz = sz.clearCoat.indexOfRefraction,
              vz = {
                coatFactor: sz.clearCoat.intensity,
                coatTexture: Fz ?? void 0,
                coatRoughnessFactor: sz.clearCoat.roughness,
                coatRoughnessTexture: Wz ?? void 0,
                coatNormalTexture: Oz ?? void 0,
                coatColorFactor: sz.clearCoat.tintColor.hsz(),
                coatColorTexture: Xz ?? void 0,
                coatIor: 1.5 !== oz ? oz : void 0
              };
            null === vz.coatTexture && null === vz.coatRoughnessTexture && null === vz.coatRoughnessTexture && null === vz.coatColorTexture || this._exporter._materialNeedsUVsSet.add(sz), tz.extensions[cW] = vz
          } else if (sz instanceof Et) {
            if (0 == sz.coatWeight) return void zz(tz);
            let Wz, Xz, Oz, oz;
            this._wasUsed = !0, tz.extensions = tz.extensions || {}, sz.coatWeightTexture && (Wz = this._mergedTexturesMap[sz.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[sz.coatWeightTexture.uniqueId] : sz.coatWeightTexture, Xz = this._exporter._materialExporter.getTextureInfo(Wz)), sz.coatRoughnessTexture && (Oz = this._mergedTexturesMap[sz.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[sz.coatRoughnessTexture.uniqueId] : sz.coatRoughnessTexture, oz = this._exporter._materialExporter.getTextureInfo(Oz));
            const vz = this._exporter._materialExporter.getTextureInfo(sz.geometryCoatNormalTexture),
              Uz = this._exporter._materialExporter.getTextureInfo(sz.coatColorTexture),
              Kz = sz.coatIor,
              uz = sz.coatDarkening,
              Nz = sz.coatRoughnessTexture,
              bz = jW(sz),
              wz = this._mergedTexturesMap[bz];
            let Dz, gz = 0,
              Hz = 0;
            if (sz.coatRoughnessAnisotropy > 0) {
              if (Nz || wz) {
                const zz = wz ? this._exporter._materialExporter.getTextureInfo(wz) : null;
                gz = sz.coatRoughnessAnisotropy, Hz = sz.geometryCoatTangentAngle, Dz = zz || void 0
              } else {
                let zz = sz.coatRoughness,
                  Fz = sz.coatRoughnessAnisotropy;
                if (!sz._useGltfStyleAnisotropy) {
                  const tz = function(zz, tz) {
                    const sz = zz * zz,
                      Fz = sz * Math.sqrt(2 / (1 + (1 - tz) * (1 - tz))),
                      Wz = (1 - tz) * Fz;
                    return {
                      newBaseRoughness: Math.sqrt(Wz),
                      newAnisotropyStrength: Math.min(Math.sqrt((Fz - sz) / Math.max(1 - sz, 1e-4)), 1)
                    }
                  }(sz.coatRoughness, sz.coatRoughnessAnisotropy);
                  zz = tz.newBaseRoughness, Fz = tz.newAnisotropyStrength
                }
                tz.pbrMetallicRoughness && (tz.pbrMetallicRoughness.roughnessFactor = zz), gz = Fz, Hz = sz.geometryCoatTangentAngle + .5 * Math.PI, Dz = void 0
              }
              sz._useGltfStyleAnisotropy || (tz.extensions.KHR_materials_openpbr = {}, (Fz = this._exporter._glTF).extensionsUsed || (Fz.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const Bz = {
              coatFactor: sz.coatWeight,
              coatTexture: Xz ?? void 0,
              coatRoughnessFactor: sz.coatRoughness,
              coatRoughnessTexture: oz ?? void 0,
              coatNormalTexture: vz ?? void 0,
              coatColorFactor: sz.coatColor.hsz(),
              coatColorTexture: Uz ?? void 0,
              coatIor: 1.5 !== Kz ? Kz : void 0,
              coatDarkeningFactor: 1 !== uz ? uz : void 0,
              coatAnisotropyRotation: Hz,
              coatAnisotropyStrength: gz,
              coatAnisotropyTexture: Dz
            };
            null === Bz.coatTexture && null === Bz.coatRoughnessTexture && null === Bz.coatRoughnessTexture && null === Bz.coatAnisotropyTexture && null === Bz.coatColorTexture || this._exporter._materialNeedsUVsSet.add(sz), tz.extensions[cW] = Bz
          }
          zz(tz)
        }))
      }
    }
    let MW = !1;

    function dW() {
      MW || (MW = !0, dF.RegisterExtension(cW, (zz => new yW(zz))))
    }
    dW();
    let hW = (() => {
      var zz, tz, sz, Fz, Wz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz, ez, Zz, Gz, Tz, cz, jz, yz, Mz, dz, hz, Qz, kz, iz, Lz, lz, nz, qz, Sz, Vz, Rz, pz, fz, Ez, zt, tt, st, Ft, Wt, Xt, Ot, ot, vt, Ut, Kt, ut, Nt, bt, wt, Dt, gt, Ht, Bt, Pt;
      let rt, Yt, Jt, It, Ct, et, Zt, Gt, Tt, ct, jt, At, yt, Mt, dt, ht, Qt, kt, it, Lt, lt, nt, qt, St, Vt, Rt, pt, ft, Et, zs, ts, ss, Fs, Ws, Xs, Os, os, vs, Us, Ks, us, Ns, bs, ws, Ds, gs, Hs, Bs, Ps, rs, Ys, xs, ms, Is, Cs, es, Zs, Gs, Ts, cs, As, ys, Ms, ds, hs, Qs, ks, is, Ls = xt,
        ls = [],
        ns = [],
        as = [],
        qs = [],
        Ss = [],
        Vs = [],
        Rs = [],
        ps = [],
        fs = [],
        Es = [],
        zF = [],
        tF = [],
        sF = [],
        FF = [],
        WF = [],
        XF = [],
        OF = [],
        oF = [],
        vF = [],
        UF = [],
        KF = [],
        uF = [],
        NF = [],
        bF = [],
        wF = [],
        DF = [],
        gF = [],
        HF = [],
        BF = [],
        PF = [],
        rF = [],
        YF = [],
        xF = [],
        mF = [],
        JF = [],
        IF = [],
        CF = [],
        eF = [],
        ZF = [],
        GF = [],
        TF = [],
        cF = [],
        jF = [],
        AF = [],
        yF = [],
        MF = [],
        dF = [],
        hF = [],
        QF = [],
        kF = [],
        iF = [],
        LF = [],
        lF = [],
        nF = [],
        aF = [],
        qF = [],
        SF = [],
        VF = [],
        RF = [],
        pF = [],
        fF = [],
        EF = [],
        zW = [],
        tW = [],
        sW = [],
        FW = [],
        WW = [],
        XW = [],
        OW = [],
        oW = [],
        vW = [],
        UW = [],
        KW = [],
        uW = [],
        NW = [],
        bW = [],
        wW = [],
        DW = [],
        gW = [],
        HW = [],
        BW = [],
        PW = [],
        rW = [],
        YW = [],
        xW = [],
        mW = [],
        JW = [],
        IW = [],
        CW = [],
        eW = [],
        ZW = [],
        GW = [],
        TW = [],
        cW = [],
        jW = [],
        AW = [],
        yW = [],
        MW = [],
        dW = [],
        hW = [],
        QW = [],
        kW = [],
        iW = [],
        LW = [],
        lW = [],
        nW = [],
        aW = [],
        qW = [],
        SW = [],
        VW = [],
        RW = [],
        pW = [],
        fW = [],
        EW = [],
        zX = [],
        tX = [],
        sX = [],
        FX = [],
        WX = [],
        XX = [],
        OX = [],
        oX = [],
        vX = [],
        UX = [],
        KX = [],
        uX = [],
        NX = [],
        bX = [],
        wX = [],
        DX = [],
        gX = [],
        HX = [],
        BX = [];
      return zz = class extends Ls {
        get directIntensity() {
          return (0, Iz.c)(this, tz, "f")
        }
        set directIntensity(zz) {
          (0, Iz.g)(this, tz, zz, "f")
        }
        get emissiveIntensity() {
          return (0, Iz.c)(this, sz, "f")
        }
        set emissiveIntensity(zz) {
          (0, Iz.g)(this, sz, zz, "f")
        }
        get environmentIntensity() {
          return (0, Iz.c)(this, Fz, "f")
        }
        set environmentIntensity(zz) {
          (0, Iz.g)(this, Fz, zz, "f")
        }
        get specularIntensity() {
          return (0, Iz.c)(this, Wz, "f")
        }
        set specularIntensity(zz) {
          (0, Iz.g)(this, Wz, zz, "f")
        }
        get disableBumpMap() {
          return (0, Iz.c)(this, Oz, "f")
        }
        set disableBumpMap(zz) {
          (0, Iz.g)(this, Oz, zz, "f")
        }
        get albedoTexture() {
          return (0, Iz.c)(this, oz, "f")
        }
        set albedoTexture(zz) {
          (0, Iz.g)(this, oz, zz, "f")
        }
        get baseWeightTexture() {
          return (0, Iz.c)(this, vz, "f")
        }
        set baseWeightTexture(zz) {
          (0, Iz.g)(this, vz, zz, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, Iz.c)(this, Uz, "f")
        }
        set baseDiffuseRoughnessTexture(zz) {
          (0, Iz.g)(this, Uz, zz, "f")
        }
        get ambientTexture() {
          return (0, Iz.c)(this, Kz, "f")
        }
        set ambientTexture(zz) {
          (0, Iz.g)(this, Kz, zz, "f")
        }
        get ambientTextureStrength() {
          return (0, Iz.c)(this, uz, "f")
        }
        set ambientTextureStrength(zz) {
          (0, Iz.g)(this, uz, zz, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, Iz.c)(this, Nz, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(zz) {
          (0, Iz.g)(this, Nz, zz, "f")
        }
        get opacityTexture() {
          return (0, Iz.c)(this, bz, "f")
        }
        set opacityTexture(zz) {
          (0, Iz.g)(this, bz, zz, "f")
        }
        get reflectionTexture() {
          return (0, Iz.c)(this, wz, "f")
        }
        set reflectionTexture(zz) {
          (0, Iz.g)(this, wz, zz, "f")
        }
        get emissiveTexture() {
          return (0, Iz.c)(this, Dz, "f")
        }
        set emissiveTexture(zz) {
          (0, Iz.g)(this, Dz, zz, "f")
        }
        get reflectivityTexture() {
          return (0, Iz.c)(this, gz, "f")
        }
        set reflectivityTexture(zz) {
          (0, Iz.g)(this, gz, zz, "f")
        }
        get metallicTexture() {
          return (0, Iz.c)(this, Hz, "f")
        }
        set metallicTexture(zz) {
          (0, Iz.g)(this, Hz, zz, "f")
        }
        get metallic() {
          return (0, Iz.c)(this, Bz, "f")
        }
        set metallic(zz) {
          (0, Iz.g)(this, Bz, zz, "f")
        }
        get roughness() {
          return (0, Iz.c)(this, Pz, "f")
        }
        set roughness(zz) {
          (0, Iz.g)(this, Pz, zz, "f")
        }
        get metallicF0Factor() {
          return (0, Iz.c)(this, rz, "f")
        }
        set metallicF0Factor(zz) {
          (0, Iz.g)(this, rz, zz, "f")
        }
        get metallicReflectanceColor() {
          return (0, Iz.c)(this, Yz, "f")
        }
        set metallicReflectanceColor(zz) {
          (0, Iz.g)(this, Yz, zz, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, Iz.c)(this, xz, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(zz) {
          (0, Iz.g)(this, xz, zz, "f")
        }
        get metallicReflectanceTexture() {
          return (0, Iz.c)(this, mz, "f")
        }
        set metallicReflectanceTexture(zz) {
          (0, Iz.g)(this, mz, zz, "f")
        }
        get reflectanceTexture() {
          return (0, Iz.c)(this, Jz, "f")
        }
        set reflectanceTexture(zz) {
          (0, Iz.g)(this, Jz, zz, "f")
        }
        get microSurfaceTexture() {
          return (0, Iz.c)(this, ez, "f")
        }
        set microSurfaceTexture(zz) {
          (0, Iz.g)(this, ez, zz, "f")
        }
        get bumpTexture() {
          return (0, Iz.c)(this, Zz, "f")
        }
        set bumpTexture(zz) {
          (0, Iz.g)(this, Zz, zz, "f")
        }
        get lightmapTexture() {
          return (0, Iz.c)(this, Gz, "f")
        }
        set lightmapTexture(zz) {
          (0, Iz.g)(this, Gz, zz, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(zz) {
          this.subSurface.refractionTexture = zz, zz ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, Iz.c)(this, Tz, "f")
        }
        set ambientColor(zz) {
          (0, Iz.g)(this, Tz, zz, "f")
        }
        get albedoColor() {
          return (0, Iz.c)(this, cz, "f")
        }
        set albedoColor(zz) {
          (0, Iz.g)(this, cz, zz, "f")
        }
        get baseWeight() {
          return (0, Iz.c)(this, jz, "f")
        }
        set baseWeight(zz) {
          (0, Iz.g)(this, jz, zz, "f")
        }
        get baseDiffuseRoughness() {
          return (0, Iz.c)(this, yz, "f")
        }
        set baseDiffuseRoughness(zz) {
          (0, Iz.g)(this, yz, zz, "f")
        }
        get reflectivityColor() {
          return (0, Iz.c)(this, Mz, "f")
        }
        set reflectivityColor(zz) {
          (0, Iz.g)(this, Mz, zz, "f")
        }
        get reflectionColor() {
          return (0, Iz.c)(this, dz, "f")
        }
        set reflectionColor(zz) {
          (0, Iz.g)(this, dz, zz, "f")
        }
        get emissiveColor() {
          return (0, Iz.c)(this, hz, "f")
        }
        set emissiveColor(zz) {
          (0, Iz.g)(this, hz, zz, "f")
        }
        get microSurface() {
          return (0, Iz.c)(this, Qz, "f")
        }
        set microSurface(zz) {
          (0, Iz.g)(this, Qz, zz, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(zz) {
          this.subSurface.indexOfRefraction = zz
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(zz) {
          this.subSurface.invertRefractionY = zz
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(zz) {
          this.subSurface.linkRefractionWithTransparency = zz, zz && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, Iz.c)(this, kz, "f")
        }
        set useLightmapAsShadowmap(zz) {
          (0, Iz.g)(this, kz, zz, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, Iz.c)(this, iz, "f")
        }
        set useAlphaFromAlbedoTexture(zz) {
          (0, Iz.g)(this, iz, zz, "f")
        }
        get forceAlphaTest() {
          return (0, Iz.c)(this, Lz, "f")
        }
        set forceAlphaTest(zz) {
          (0, Iz.g)(this, Lz, zz, "f")
        }
        get alphaCutOff() {
          return (0, Iz.c)(this, lz, "f")
        }
        set alphaCutOff(zz) {
          (0, Iz.g)(this, lz, zz, "f")
        }
        get useSpecularOverAlpha() {
          return (0, Iz.c)(this, nz, "f")
        }
        set useSpecularOverAlpha(zz) {
          (0, Iz.g)(this, nz, zz, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, Iz.c)(this, qz, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(zz) {
          (0, Iz.g)(this, qz, zz, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, Iz.c)(this, Sz, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(zz) {
          (0, Iz.g)(this, Sz, zz, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, Iz.c)(this, Vz, "f")
        }
        set useRoughnessFromMetallicTextureGreen(zz) {
          (0, Iz.g)(this, Vz, zz, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, Iz.c)(this, Rz, "f")
        }
        set useMetallnessFromMetallicTextureBlue(zz) {
          (0, Iz.g)(this, Rz, zz, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, Iz.c)(this, pz, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(zz) {
          (0, Iz.g)(this, pz, zz, "f")
        }
        get useAmbientInGrayScale() {
          return (0, Iz.c)(this, fz, "f")
        }
        set useAmbientInGrayScale(zz) {
          (0, Iz.g)(this, fz, zz, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, Iz.c)(this, Ez, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(zz) {
          (0, Iz.g)(this, Ez, zz, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === xt.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(zz) {
          zz !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = zz ? xt.LIGHTFALLOFF_PHYSICAL : xt.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === xt.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(zz) {
          zz !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = zz ? xt.LIGHTFALLOFF_GLTF : xt.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, Iz.c)(this, zt, "f")
        }
        set useRadianceOverAlpha(zz) {
          (0, Iz.g)(this, zt, zz, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, Iz.c)(this, tt, "f")
        }
        set useObjectSpaceNormalMap(zz) {
          (0, Iz.g)(this, tt, zz, "f")
        }
        get useParallax() {
          return (0, Iz.c)(this, st, "f")
        }
        set useParallax(zz) {
          (0, Iz.g)(this, st, zz, "f")
        }
        get useParallaxOcclusion() {
          return (0, Iz.c)(this, Ft, "f")
        }
        set useParallaxOcclusion(zz) {
          (0, Iz.g)(this, Ft, zz, "f")
        }
        get parallaxScaleBias() {
          return (0, Iz.c)(this, Wt, "f")
        }
        set parallaxScaleBias(zz) {
          (0, Iz.g)(this, Wt, zz, "f")
        }
        get disableLighting() {
          return (0, Iz.c)(this, Xt, "f")
        }
        set disableLighting(zz) {
          (0, Iz.g)(this, Xt, zz, "f")
        }
        get forceIrradianceInFragment() {
          return (0, Iz.c)(this, Ot, "f")
        }
        set forceIrradianceInFragment(zz) {
          (0, Iz.g)(this, Ot, zz, "f")
        }
        get maxSimultaneousLights() {
          return (0, Iz.c)(this, ot, "f")
        }
        set maxSimultaneousLights(zz) {
          (0, Iz.g)(this, ot, zz, "f")
        }
        get invertNormalMapX() {
          return (0, Iz.c)(this, vt, "f")
        }
        set invertNormalMapX(zz) {
          (0, Iz.g)(this, vt, zz, "f")
        }
        get invertNormalMapY() {
          return (0, Iz.c)(this, Ut, "f")
        }
        set invertNormalMapY(zz) {
          (0, Iz.g)(this, Ut, zz, "f")
        }
        get twoSidedLighting() {
          return (0, Iz.c)(this, Kt, "f")
        }
        set twoSidedLighting(zz) {
          (0, Iz.g)(this, Kt, zz, "f")
        }
        get useAlphaFresnel() {
          return (0, Iz.c)(this, ut, "f")
        }
        set useAlphaFresnel(zz) {
          (0, Iz.g)(this, ut, zz, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, Iz.c)(this, Nt, "f")
        }
        set useLinearAlphaFresnel(zz) {
          (0, Iz.g)(this, Nt, zz, "f")
        }
        get environmentBRDFTexture() {
          return (0, Iz.c)(this, bt, "f")
        }
        set environmentBRDFTexture(zz) {
          (0, Iz.g)(this, bt, zz, "f")
        }
        get forceNormalForward() {
          return (0, Iz.c)(this, wt, "f")
        }
        set forceNormalForward(zz) {
          (0, Iz.g)(this, wt, zz, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, Iz.c)(this, Dt, "f")
        }
        set enableSpecularAntiAliasing(zz) {
          (0, Iz.g)(this, Dt, zz, "f")
        }
        get useHorizonOcclusion() {
          return (0, Iz.c)(this, gt, "f")
        }
        set useHorizonOcclusion(zz) {
          (0, Iz.g)(this, gt, zz, "f")
        }
        get useRadianceOcclusion() {
          return (0, Iz.c)(this, Ht, "f")
        }
        set useRadianceOcclusion(zz) {
          (0, Iz.g)(this, Ht, zz, "f")
        }
        get unlit() {
          return (0, Iz.c)(this, Bt, "f")
        }
        set unlit(zz) {
          (0, Iz.g)(this, Bt, zz, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, Iz.c)(this, Pt, "f")
        }
        set applyDecalMapAfterDetailMap(zz) {
          (0, Iz.g)(this, Pt, zz, "f")
        }
        constructor(Xz, Cz) {
          super(Xz, Cz, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), tz.set(this, ((0, Iz.k)(this, ls), (0, Iz.k)(this, ns, 1))), sz.set(this, ((0, Iz.k)(this, as), (0, Iz.k)(this, qs, 1))), Fz.set(this, ((0, Iz.k)(this, Ss), (0, Iz.k)(this, Vs, 1))), Wz.set(this, ((0, Iz.k)(this, Rs), (0, Iz.k)(this, ps, 1))), Oz.set(this, ((0, Iz.k)(this, fs), (0, Iz.k)(this, Es, !1))), oz.set(this, ((0, Iz.k)(this, zF), (0, Iz.k)(this, tF, void 0))), vz.set(this, ((0, Iz.k)(this, sF), (0, Iz.k)(this, FF, void 0))), Uz.set(this, ((0, Iz.k)(this, WF), (0, Iz.k)(this, XF, void 0))), Kz.set(this, ((0, Iz.k)(this, OF), (0, Iz.k)(this, oF, void 0))), uz.set(this, ((0, Iz.k)(this, vF), (0, Iz.k)(this, UF, 1))), Nz.set(this, ((0, Iz.k)(this, KF), (0, Iz.k)(this, uF, zz.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), bz.set(this, ((0, Iz.k)(this, NF), (0, Iz.k)(this, bF, void 0))), wz.set(this, ((0, Iz.k)(this, wF), (0, Iz.k)(this, DF, void 0))), Dz.set(this, ((0, Iz.k)(this, gF), (0, Iz.k)(this, HF, void 0))), gz.set(this, ((0, Iz.k)(this, BF), (0, Iz.k)(this, PF, void 0))), Hz.set(this, ((0, Iz.k)(this, rF), (0, Iz.k)(this, YF, void 0))), Bz.set(this, ((0, Iz.k)(this, xF), (0, Iz.k)(this, mF, void 0))), Pz.set(this, ((0, Iz.k)(this, JF), (0, Iz.k)(this, IF, void 0))), rz.set(this, ((0, Iz.k)(this, CF), (0, Iz.k)(this, eF, 1))), Yz.set(this, ((0, Iz.k)(this, ZF), (0, Iz.k)(this, GF, az.c.White()))), xz.set(this, ((0, Iz.k)(this, TF), (0, Iz.k)(this, cF, !1))), mz.set(this, ((0, Iz.k)(this, jF), (0, Iz.k)(this, AF, void 0))), Jz.set(this, ((0, Iz.k)(this, yF), (0, Iz.k)(this, MF, void 0))), ez.set(this, ((0, Iz.k)(this, dF), (0, Iz.k)(this, hF, void 0))), Zz.set(this, ((0, Iz.k)(this, QF), (0, Iz.k)(this, kF, void 0))), Gz.set(this, ((0, Iz.k)(this, iF), (0, Iz.k)(this, LF, void 0))), Tz.set(this, ((0, Iz.k)(this, lF), (0, Iz.k)(this, nF, new az.c(0, 0, 0)))), cz.set(this, ((0, Iz.k)(this, aF), (0, Iz.k)(this, qF, new az.c(1, 1, 1)))), jz.set(this, ((0, Iz.k)(this, SF), (0, Iz.k)(this, VF, 1))), yz.set(this, ((0, Iz.k)(this, RF), (0, Iz.k)(this, pF, void 0))), Mz.set(this, ((0, Iz.k)(this, fF), (0, Iz.k)(this, EF, new az.c(1, 1, 1)))), dz.set(this, ((0, Iz.k)(this, zW), (0, Iz.k)(this, tW, new az.c(1, 1, 1)))), hz.set(this, ((0, Iz.k)(this, sW), (0, Iz.k)(this, FW, new az.c(0, 0, 0)))), Qz.set(this, ((0, Iz.k)(this, WW), (0, Iz.k)(this, XW, 1))), kz.set(this, ((0, Iz.k)(this, OW), (0, Iz.k)(this, oW, !1))), iz.set(this, ((0, Iz.k)(this, vW), (0, Iz.k)(this, UW, !1))), Lz.set(this, ((0, Iz.k)(this, KW), (0, Iz.k)(this, uW, !1))), lz.set(this, ((0, Iz.k)(this, NW), (0, Iz.k)(this, bW, .4))), nz.set(this, ((0, Iz.k)(this, wW), (0, Iz.k)(this, DW, !0))), qz.set(this, ((0, Iz.k)(this, gW), (0, Iz.k)(this, HW, !1))), Sz.set(this, ((0, Iz.k)(this, BW), (0, Iz.k)(this, PW, !0))), Vz.set(this, ((0, Iz.k)(this, rW), (0, Iz.k)(this, YW, !1))), Rz.set(this, ((0, Iz.k)(this, xW), (0, Iz.k)(this, mW, !1))), pz.set(this, ((0, Iz.k)(this, JW), (0, Iz.k)(this, IW, !1))), fz.set(this, ((0, Iz.k)(this, CW), (0, Iz.k)(this, eW, !1))), Ez.set(this, ((0, Iz.k)(this, ZW), (0, Iz.k)(this, GW, !1))), zt.set(this, ((0, Iz.k)(this, TW), (0, Iz.k)(this, cW, !0))), tt.set(this, ((0, Iz.k)(this, jW), (0, Iz.k)(this, AW, !1))), st.set(this, ((0, Iz.k)(this, yW), (0, Iz.k)(this, MW, !1))), Ft.set(this, ((0, Iz.k)(this, dW), (0, Iz.k)(this, hW, !1))), Wt.set(this, ((0, Iz.k)(this, QW), (0, Iz.k)(this, kW, .05))), Xt.set(this, ((0, Iz.k)(this, iW), (0, Iz.k)(this, LW, !1))), Ot.set(this, ((0, Iz.k)(this, lW), (0, Iz.k)(this, nW, !1))), ot.set(this, ((0, Iz.k)(this, aW), (0, Iz.k)(this, qW, 4))), vt.set(this, ((0, Iz.k)(this, SW), (0, Iz.k)(this, VW, !1))), Ut.set(this, ((0, Iz.k)(this, RW), (0, Iz.k)(this, pW, !1))), Kt.set(this, ((0, Iz.k)(this, fW), (0, Iz.k)(this, EW, !1))), ut.set(this, ((0, Iz.k)(this, zX), (0, Iz.k)(this, tX, !1))), Nt.set(this, ((0, Iz.k)(this, sX), (0, Iz.k)(this, FX, !1))), bt.set(this, ((0, Iz.k)(this, WX), (0, Iz.k)(this, XX, null))), wt.set(this, ((0, Iz.k)(this, OX), (0, Iz.k)(this, oX, !1))), Dt.set(this, ((0, Iz.k)(this, vX), (0, Iz.k)(this, UX, !1))), gt.set(this, ((0, Iz.k)(this, KX), (0, Iz.k)(this, uX, !0))), Ht.set(this, ((0, Iz.k)(this, NX), (0, Iz.k)(this, bX, !0))), Bt.set(this, ((0, Iz.k)(this, wX), (0, Iz.k)(this, DX, !1))), Pt.set(this, ((0, Iz.k)(this, gX), (0, Iz.k)(this, HX, !1))), (0, Iz.k)(this, BX), this._environmentBRDFTexture = Az(this.aJ())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(tz) {
          let sz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Wz = mt.e.Clone((() => new zz(tz, this.aJ())), this, {
            cloneTexturesOnlyOnce: sz
          });
          return Wz.id = tz, Wz.name = tz, this.stencil.copyTo(Wz.stencil), this._clonePlugins(Wz, Fz), Wz
        }
        serialize() {
          const zz = super.serialize();
          return zz.customType = "BABYLON.PBRMaterial", zz
        }
        static Parse(tz, sz, Fz) {
          const Wz = mt.e.Parse((() => new zz(tz.name, sz)), tz, sz, Fz);
          return tz.stencil && Wz.stencil.parse(tz.stencil, sz, Fz), Xz.b._ParsePlugins(tz, Wz, sz, Fz), tz.clearCoat && Wz.clearCoat.parse(tz.clearCoat, sz, Fz), tz.anisotropy && Wz.anisotropy.parse(tz.anisotropy, sz, Fz), tz.brdf && Wz.brdf.parse(tz.brdf, sz, Fz), tz.sheen && Wz.sheen.parse(tz.sheen, sz, Fz), tz.subSurface && Wz.subSurface.parse(tz.subSurface, sz, Fz), tz.iridescence && Wz.iridescence.parse(tz.iridescence, sz, Fz), Wz
        }
      }, tz = new WeakMap, sz = new WeakMap, Fz = new WeakMap, Wz = new WeakMap, Oz = new WeakMap, oz = new WeakMap, vz = new WeakMap, Uz = new WeakMap, Kz = new WeakMap, uz = new WeakMap, Nz = new WeakMap, bz = new WeakMap, wz = new WeakMap, Dz = new WeakMap, gz = new WeakMap, Hz = new WeakMap, Bz = new WeakMap, Pz = new WeakMap, rz = new WeakMap, Yz = new WeakMap, xz = new WeakMap, mz = new WeakMap, Jz = new WeakMap, ez = new WeakMap, Zz = new WeakMap, Gz = new WeakMap, Tz = new WeakMap, cz = new WeakMap, jz = new WeakMap, yz = new WeakMap, Mz = new WeakMap, dz = new WeakMap, hz = new WeakMap, Qz = new WeakMap, kz = new WeakMap, iz = new WeakMap, Lz = new WeakMap, lz = new WeakMap, nz = new WeakMap, qz = new WeakMap, Sz = new WeakMap, Vz = new WeakMap, Rz = new WeakMap, pz = new WeakMap, fz = new WeakMap, Ez = new WeakMap, zt = new WeakMap, tt = new WeakMap, st = new WeakMap, Ft = new WeakMap, Wt = new WeakMap, Xt = new WeakMap, Ot = new WeakMap, ot = new WeakMap, vt = new WeakMap, Ut = new WeakMap, Kt = new WeakMap, ut = new WeakMap, Nt = new WeakMap, bt = new WeakMap, wt = new WeakMap, Dt = new WeakMap, gt = new WeakMap, Ht = new WeakMap, Bt = new WeakMap, Pt = new WeakMap, (() => {
        const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ls[Symbol.metadata] ?? null) : void 0;
        rt = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Yt = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Jt = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], It = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Ct = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], et = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Zt = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Gt = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Tt = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], ct = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], jt = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], At = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], yt = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Mt = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], dt = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], ht = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Qt = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], kt = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], it = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Lt = [(0, Cz.p)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], lt = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], nt = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], qt = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], St = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Vt = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Rt = [(0, Cz.D)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty", null)], pt = [(0, Cz.p)("ambient"), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], ft = [(0, Cz.p)("albedo"), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Et = [(0, Cz.J)("baseWeight"), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], zs = [(0, Cz.J)("baseDiffuseRoughness"), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], ts = [(0, Cz.p)("reflectivity"), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], ss = [(0, Cz.p)("reflection"), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Fs = [(0, Cz.p)("emissive"), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Ws = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Xs = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Os = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], os = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], vs = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Us = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Ks = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], us = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Ns = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], bs = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], ws = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Ds = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], gs = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Hs = [(0, Cz.J)()], Bs = [(0, Cz.J)()], Ps = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], rs = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Ys = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], xs = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], ms = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Is = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsLightsDirty")], Cs = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], es = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsLightsDirty")], Zs = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Gs = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Ts = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], cs = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], As = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], ys = [(0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Ms = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], ds = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], hs = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], Qs = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsTexturesDirty")], ks = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], is = [(0, Cz.J)(), (0, Cz.i)("_markAllSubMeshesAsMiscDirty")], (0, Iz.h)(zz, null, rt, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "directIntensity" in zz,
            get: zz => zz.directIntensity,
            set: (zz, tz) => {
              zz.directIntensity = tz
            }
          },
          metadata: tz
        }, ns, as), (0, Iz.h)(zz, null, Yt, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "emissiveIntensity" in zz,
            get: zz => zz.emissiveIntensity,
            set: (zz, tz) => {
              zz.emissiveIntensity = tz
            }
          },
          metadata: tz
        }, qs, Ss), (0, Iz.h)(zz, null, Jt, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "environmentIntensity" in zz,
            get: zz => zz.environmentIntensity,
            set: (zz, tz) => {
              zz.environmentIntensity = tz
            }
          },
          metadata: tz
        }, Vs, Rs), (0, Iz.h)(zz, null, It, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "specularIntensity" in zz,
            get: zz => zz.specularIntensity,
            set: (zz, tz) => {
              zz.specularIntensity = tz
            }
          },
          metadata: tz
        }, ps, fs), (0, Iz.h)(zz, null, Ct, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: zz => "disableBumpMap" in zz,
            get: zz => zz.disableBumpMap,
            set: (zz, tz) => {
              zz.disableBumpMap = tz
            }
          },
          metadata: tz
        }, Es, zF), (0, Iz.h)(zz, null, et, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "albedoTexture" in zz,
            get: zz => zz.albedoTexture,
            set: (zz, tz) => {
              zz.albedoTexture = tz
            }
          },
          metadata: tz
        }, tF, sF), (0, Iz.h)(zz, null, Zt, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "baseWeightTexture" in zz,
            get: zz => zz.baseWeightTexture,
            set: (zz, tz) => {
              zz.baseWeightTexture = tz
            }
          },
          metadata: tz
        }, FF, WF), (0, Iz.h)(zz, null, Gt, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "baseDiffuseRoughnessTexture" in zz,
            get: zz => zz.baseDiffuseRoughnessTexture,
            set: (zz, tz) => {
              zz.baseDiffuseRoughnessTexture = tz
            }
          },
          metadata: tz
        }, XF, OF), (0, Iz.h)(zz, null, Tt, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "ambientTexture" in zz,
            get: zz => zz.ambientTexture,
            set: (zz, tz) => {
              zz.ambientTexture = tz
            }
          },
          metadata: tz
        }, oF, vF), (0, Iz.h)(zz, null, ct, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: zz => "ambientTextureStrength" in zz,
            get: zz => zz.ambientTextureStrength,
            set: (zz, tz) => {
              zz.ambientTextureStrength = tz
            }
          },
          metadata: tz
        }, UF, KF), (0, Iz.h)(zz, null, jt, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: zz => "ambientTextureImpactOnAnalyticalLights" in zz,
            get: zz => zz.ambientTextureImpactOnAnalyticalLights,
            set: (zz, tz) => {
              zz.ambientTextureImpactOnAnalyticalLights = tz
            }
          },
          metadata: tz
        }, uF, NF), (0, Iz.h)(zz, null, At, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "opacityTexture" in zz,
            get: zz => zz.opacityTexture,
            set: (zz, tz) => {
              zz.opacityTexture = tz
            }
          },
          metadata: tz
        }, bF, wF), (0, Iz.h)(zz, null, yt, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "reflectionTexture" in zz,
            get: zz => zz.reflectionTexture,
            set: (zz, tz) => {
              zz.reflectionTexture = tz
            }
          },
          metadata: tz
        }, DF, gF), (0, Iz.h)(zz, null, Mt, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "emissiveTexture" in zz,
            get: zz => zz.emissiveTexture,
            set: (zz, tz) => {
              zz.emissiveTexture = tz
            }
          },
          metadata: tz
        }, HF, BF), (0, Iz.h)(zz, null, dt, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "reflectivityTexture" in zz,
            get: zz => zz.reflectivityTexture,
            set: (zz, tz) => {
              zz.reflectivityTexture = tz
            }
          },
          metadata: tz
        }, PF, rF), (0, Iz.h)(zz, null, ht, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "metallicTexture" in zz,
            get: zz => zz.metallicTexture,
            set: (zz, tz) => {
              zz.metallicTexture = tz
            }
          },
          metadata: tz
        }, YF, xF), (0, Iz.h)(zz, null, Qt, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: zz => "metallic" in zz,
            get: zz => zz.metallic,
            set: (zz, tz) => {
              zz.metallic = tz
            }
          },
          metadata: tz
        }, mF, JF), (0, Iz.h)(zz, null, kt, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: zz => "roughness" in zz,
            get: zz => zz.roughness,
            set: (zz, tz) => {
              zz.roughness = tz
            }
          },
          metadata: tz
        }, IF, CF), (0, Iz.h)(zz, null, it, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: zz => "metallicF0Factor" in zz,
            get: zz => zz.metallicF0Factor,
            set: (zz, tz) => {
              zz.metallicF0Factor = tz
            }
          },
          metadata: tz
        }, eF, ZF), (0, Iz.h)(zz, null, Lt, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "metallicReflectanceColor" in zz,
            get: zz => zz.metallicReflectanceColor,
            set: (zz, tz) => {
              zz.metallicReflectanceColor = tz
            }
          },
          metadata: tz
        }, GF, TF), (0, Iz.h)(zz, null, lt, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "useOnlyMetallicFromMetallicReflectanceTexture" in zz,
            get: zz => zz.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (zz, tz) => {
              zz.useOnlyMetallicFromMetallicReflectanceTexture = tz
            }
          },
          metadata: tz
        }, cF, jF), (0, Iz.h)(zz, null, nt, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "metallicReflectanceTexture" in zz,
            get: zz => zz.metallicReflectanceTexture,
            set: (zz, tz) => {
              zz.metallicReflectanceTexture = tz
            }
          },
          metadata: tz
        }, AF, yF), (0, Iz.h)(zz, null, qt, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "reflectanceTexture" in zz,
            get: zz => zz.reflectanceTexture,
            set: (zz, tz) => {
              zz.reflectanceTexture = tz
            }
          },
          metadata: tz
        }, MF, dF), (0, Iz.h)(zz, null, St, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "microSurfaceTexture" in zz,
            get: zz => zz.microSurfaceTexture,
            set: (zz, tz) => {
              zz.microSurfaceTexture = tz
            }
          },
          metadata: tz
        }, hF, QF), (0, Iz.h)(zz, null, Vt, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "bumpTexture" in zz,
            get: zz => zz.bumpTexture,
            set: (zz, tz) => {
              zz.bumpTexture = tz
            }
          },
          metadata: tz
        }, kF, iF), (0, Iz.h)(zz, null, Rt, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "lightmapTexture" in zz,
            get: zz => zz.lightmapTexture,
            set: (zz, tz) => {
              zz.lightmapTexture = tz
            }
          },
          metadata: tz
        }, LF, lF), (0, Iz.h)(zz, null, pt, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "ambientColor" in zz,
            get: zz => zz.ambientColor,
            set: (zz, tz) => {
              zz.ambientColor = tz
            }
          },
          metadata: tz
        }, nF, aF), (0, Iz.h)(zz, null, ft, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "albedoColor" in zz,
            get: zz => zz.albedoColor,
            set: (zz, tz) => {
              zz.albedoColor = tz
            }
          },
          metadata: tz
        }, qF, SF), (0, Iz.h)(zz, null, Et, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: zz => "baseWeight" in zz,
            get: zz => zz.baseWeight,
            set: (zz, tz) => {
              zz.baseWeight = tz
            }
          },
          metadata: tz
        }, VF, RF), (0, Iz.h)(zz, null, zs, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: zz => "baseDiffuseRoughness" in zz,
            get: zz => zz.baseDiffuseRoughness,
            set: (zz, tz) => {
              zz.baseDiffuseRoughness = tz
            }
          },
          metadata: tz
        }, pF, fF), (0, Iz.h)(zz, null, ts, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "reflectivityColor" in zz,
            get: zz => zz.reflectivityColor,
            set: (zz, tz) => {
              zz.reflectivityColor = tz
            }
          },
          metadata: tz
        }, EF, zW), (0, Iz.h)(zz, null, ss, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "reflectionColor" in zz,
            get: zz => zz.reflectionColor,
            set: (zz, tz) => {
              zz.reflectionColor = tz
            }
          },
          metadata: tz
        }, tW, sW), (0, Iz.h)(zz, null, Fs, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "emissiveColor" in zz,
            get: zz => zz.emissiveColor,
            set: (zz, tz) => {
              zz.emissiveColor = tz
            }
          },
          metadata: tz
        }, FW, WW), (0, Iz.h)(zz, null, Ws, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: zz => "microSurface" in zz,
            get: zz => zz.microSurface,
            set: (zz, tz) => {
              zz.microSurface = tz
            }
          },
          metadata: tz
        }, XW, OW), (0, Iz.h)(zz, null, Xs, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: zz => "useLightmapAsShadowmap" in zz,
            get: zz => zz.useLightmapAsShadowmap,
            set: (zz, tz) => {
              zz.useLightmapAsShadowmap = tz
            }
          },
          metadata: tz
        }, oW, vW), (0, Iz.h)(zz, null, Os, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAlphaFromAlbedoTexture" in zz,
            get: zz => zz.useAlphaFromAlbedoTexture,
            set: (zz, tz) => {
              zz.useAlphaFromAlbedoTexture = tz
            }
          },
          metadata: tz
        }, UW, KW), (0, Iz.h)(zz, null, os, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: zz => "forceAlphaTest" in zz,
            get: zz => zz.forceAlphaTest,
            set: (zz, tz) => {
              zz.forceAlphaTest = tz
            }
          },
          metadata: tz
        }, uW, NW), (0, Iz.h)(zz, null, vs, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: zz => "alphaCutOff" in zz,
            get: zz => zz.alphaCutOff,
            set: (zz, tz) => {
              zz.alphaCutOff = tz
            }
          },
          metadata: tz
        }, bW, wW), (0, Iz.h)(zz, null, Us, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "useSpecularOverAlpha" in zz,
            get: zz => zz.useSpecularOverAlpha,
            set: (zz, tz) => {
              zz.useSpecularOverAlpha = tz
            }
          },
          metadata: tz
        }, DW, gW), (0, Iz.h)(zz, null, Ks, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "useMicroSurfaceFromReflectivityMapAlpha" in zz,
            get: zz => zz.useMicroSurfaceFromReflectivityMapAlpha,
            set: (zz, tz) => {
              zz.useMicroSurfaceFromReflectivityMapAlpha = tz
            }
          },
          metadata: tz
        }, HW, BW), (0, Iz.h)(zz, null, us, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "useRoughnessFromMetallicTextureAlpha" in zz,
            get: zz => zz.useRoughnessFromMetallicTextureAlpha,
            set: (zz, tz) => {
              zz.useRoughnessFromMetallicTextureAlpha = tz
            }
          },
          metadata: tz
        }, PW, rW), (0, Iz.h)(zz, null, Ns, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: zz => "useRoughnessFromMetallicTextureGreen" in zz,
            get: zz => zz.useRoughnessFromMetallicTextureGreen,
            set: (zz, tz) => {
              zz.useRoughnessFromMetallicTextureGreen = tz
            }
          },
          metadata: tz
        }, YW, xW), (0, Iz.h)(zz, null, bs, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: zz => "useMetallnessFromMetallicTextureBlue" in zz,
            get: zz => zz.useMetallnessFromMetallicTextureBlue,
            set: (zz, tz) => {
              zz.useMetallnessFromMetallicTextureBlue = tz
            }
          },
          metadata: tz
        }, mW, JW), (0, Iz.h)(zz, null, ws, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAmbientOcclusionFromMetallicTextureRed" in zz,
            get: zz => zz.useAmbientOcclusionFromMetallicTextureRed,
            set: (zz, tz) => {
              zz.useAmbientOcclusionFromMetallicTextureRed = tz
            }
          },
          metadata: tz
        }, IW, CW), (0, Iz.h)(zz, null, Ds, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAmbientInGrayScale" in zz,
            get: zz => zz.useAmbientInGrayScale,
            set: (zz, tz) => {
              zz.useAmbientInGrayScale = tz
            }
          },
          metadata: tz
        }, eW, ZW), (0, Iz.h)(zz, null, gs, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAutoMicroSurfaceFromReflectivityMap" in zz,
            get: zz => zz.useAutoMicroSurfaceFromReflectivityMap,
            set: (zz, tz) => {
              zz.useAutoMicroSurfaceFromReflectivityMap = tz
            }
          },
          metadata: tz
        }, GW, TW), (0, Iz.h)(zz, null, Hs, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: zz => "usePhysicalLightFalloff" in zz,
            get: zz => zz.usePhysicalLightFalloff
          },
          metadata: tz
        }, null, ls), (0, Iz.h)(zz, null, Bs, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: zz => "useGLTFLightFalloff" in zz,
            get: zz => zz.useGLTFLightFalloff
          },
          metadata: tz
        }, null, ls), (0, Iz.h)(zz, null, Ps, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "useRadianceOverAlpha" in zz,
            get: zz => zz.useRadianceOverAlpha,
            set: (zz, tz) => {
              zz.useRadianceOverAlpha = tz
            }
          },
          metadata: tz
        }, cW, jW), (0, Iz.h)(zz, null, rs, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: zz => "useObjectSpaceNormalMap" in zz,
            get: zz => zz.useObjectSpaceNormalMap,
            set: (zz, tz) => {
              zz.useObjectSpaceNormalMap = tz
            }
          },
          metadata: tz
        }, AW, yW), (0, Iz.h)(zz, null, Ys, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: zz => "useParallax" in zz,
            get: zz => zz.useParallax,
            set: (zz, tz) => {
              zz.useParallax = tz
            }
          },
          metadata: tz
        }, MW, dW), (0, Iz.h)(zz, null, xs, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: zz => "useParallaxOcclusion" in zz,
            get: zz => zz.useParallaxOcclusion,
            set: (zz, tz) => {
              zz.useParallaxOcclusion = tz
            }
          },
          metadata: tz
        }, hW, QW), (0, Iz.h)(zz, null, ms, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: zz => "parallaxScaleBias" in zz,
            get: zz => zz.parallaxScaleBias,
            set: (zz, tz) => {
              zz.parallaxScaleBias = tz
            }
          },
          metadata: tz
        }, kW, iW), (0, Iz.h)(zz, null, Is, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: zz => "disableLighting" in zz,
            get: zz => zz.disableLighting,
            set: (zz, tz) => {
              zz.disableLighting = tz
            }
          },
          metadata: tz
        }, LW, lW), (0, Iz.h)(zz, null, Cs, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: zz => "forceIrradianceInFragment" in zz,
            get: zz => zz.forceIrradianceInFragment,
            set: (zz, tz) => {
              zz.forceIrradianceInFragment = tz
            }
          },
          metadata: tz
        }, nW, aW), (0, Iz.h)(zz, null, es, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: zz => "maxSimultaneousLights" in zz,
            get: zz => zz.maxSimultaneousLights,
            set: (zz, tz) => {
              zz.maxSimultaneousLights = tz
            }
          },
          metadata: tz
        }, qW, SW), (0, Iz.h)(zz, null, Zs, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: zz => "invertNormalMapX" in zz,
            get: zz => zz.invertNormalMapX,
            set: (zz, tz) => {
              zz.invertNormalMapX = tz
            }
          },
          metadata: tz
        }, VW, RW), (0, Iz.h)(zz, null, Gs, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: zz => "invertNormalMapY" in zz,
            get: zz => zz.invertNormalMapY,
            set: (zz, tz) => {
              zz.invertNormalMapY = tz
            }
          },
          metadata: tz
        }, pW, fW), (0, Iz.h)(zz, null, Ts, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: zz => "twoSidedLighting" in zz,
            get: zz => zz.twoSidedLighting,
            set: (zz, tz) => {
              zz.twoSidedLighting = tz
            }
          },
          metadata: tz
        }, EW, zX), (0, Iz.h)(zz, null, cs, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAlphaFresnel" in zz,
            get: zz => zz.useAlphaFresnel,
            set: (zz, tz) => {
              zz.useAlphaFresnel = tz
            }
          },
          metadata: tz
        }, tX, sX), (0, Iz.h)(zz, null, As, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: zz => "useLinearAlphaFresnel" in zz,
            get: zz => zz.useLinearAlphaFresnel,
            set: (zz, tz) => {
              zz.useLinearAlphaFresnel = tz
            }
          },
          metadata: tz
        }, FX, WX), (0, Iz.h)(zz, null, ys, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "environmentBRDFTexture" in zz,
            get: zz => zz.environmentBRDFTexture,
            set: (zz, tz) => {
              zz.environmentBRDFTexture = tz
            }
          },
          metadata: tz
        }, XX, OX), (0, Iz.h)(zz, null, Ms, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: zz => "forceNormalForward" in zz,
            get: zz => zz.forceNormalForward,
            set: (zz, tz) => {
              zz.forceNormalForward = tz
            }
          },
          metadata: tz
        }, oX, vX), (0, Iz.h)(zz, null, ds, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: zz => "enableSpecularAntiAliasing" in zz,
            get: zz => zz.enableSpecularAntiAliasing,
            set: (zz, tz) => {
              zz.enableSpecularAntiAliasing = tz
            }
          },
          metadata: tz
        }, UX, KX), (0, Iz.h)(zz, null, hs, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: zz => "useHorizonOcclusion" in zz,
            get: zz => zz.useHorizonOcclusion,
            set: (zz, tz) => {
              zz.useHorizonOcclusion = tz
            }
          },
          metadata: tz
        }, uX, NX), (0, Iz.h)(zz, null, Qs, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: zz => "useRadianceOcclusion" in zz,
            get: zz => zz.useRadianceOcclusion,
            set: (zz, tz) => {
              zz.useRadianceOcclusion = tz
            }
          },
          metadata: tz
        }, bX, wX), (0, Iz.h)(zz, null, ks, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: zz => "unlit" in zz,
            get: zz => zz.unlit,
            set: (zz, tz) => {
              zz.unlit = tz
            }
          },
          metadata: tz
        }, DX, gX), (0, Iz.h)(zz, null, is, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: zz => "applyDecalMapAfterDetailMap" in zz,
            get: zz => zz.applyDecalMapAfterDetailMap,
            set: (zz, tz) => {
              zz.applyDecalMapAfterDetailMap = tz
            }
          },
          metadata: tz
        }, HX, BX), tz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tz
        })
      })(), zz.PBRMATERIAL_OPAQUE = xt.PBRMATERIAL_OPAQUE, zz.PBRMATERIAL_ALPHATEST = xt.PBRMATERIAL_ALPHATEST, zz.PBRMATERIAL_ALPHABLEND = xt.PBRMATERIAL_ALPHABLEND, zz.PBRMATERIAL_ALPHATESTANDBLEND = xt.PBRMATERIAL_ALPHATESTANDBLEND, zz.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = xt.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, zz
    })();
    const QW = "KHR_materials_diffuse_transmission";

    function kW(zz, tz) {
      const sz = tz.subSurface;
      let Fz = null;
      return sz.translucencyIntensityTexture ? Fz = sz.translucencyIntensityTexture : sz.thicknessTexture && sz.useMaskFromThicknessTexture && (Fz = sz.thicknessTexture), Fz && !sz.useGltfStyleTextures ? (ez.e.Warn(`${zz}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${tz.name}`, 1), null) : Fz
    }
    class iW {
      constructor(zz) {
        this.name = QW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, tz, sz) {
        const Fz = [];
        if (sz instanceof hW && this._isExtensionEnabled(sz)) {
          const tz = kW(zz, sz);
          return tz && Fz.push(tz), sz.subSurface.translucencyColorTexture && Fz.push(sz.subSurface.translucencyColorTexture), Fz
        }
        return Fz
      }
      _isExtensionEnabled(zz) {
        if (zz.unlit) return !1;
        const tz = zz.subSurface;
        return !!tz.isTranslucencyEnabled && (!zz.unlit && !tz.useAlbedoToTintTranslucency && tz.useGltfStyleTextures && 1 === tz.volumeIndexOfRefraction && 0 === tz.minimumThickness && 0 === tz.maximumThickness)
      }
      postExportMaterialAsync(zz, tz, sz) {
        return new Promise((Fz => {
          if (sz instanceof hW && this._isExtensionEnabled(sz)) {
            this._wasUsed = !0;
            const Fz = sz.subSurface,
              Wz = kW(zz, sz),
              Xz = 0 == Fz.translucencyIntensity ? void 0 : Fz.translucencyIntensity,
              Oz = this._exporter._materialExporter.getTextureInfo(Wz) ?? void 0,
              oz = !Fz.translucencyColor || Fz.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Fz.translucencyColor.hsz(),
              vz = this._exporter._materialExporter.getTextureInfo(Fz.translucencyColorTexture) ?? void 0,
              Uz = {
                diffuseTransmissionFactor: Xz,
                diffuseTransmissionTexture: Oz,
                diffuseTransmissionColorFactor: oz,
                diffuseTransmissionColorTexture: vz
              };
            (Oz || vz) && this._exporter._materialNeedsUVsSet.add(sz), tz.extensions = tz.extensions || {}, tz.extensions[QW] = Uz
          }
          Fz(tz)
        }))
      }
    }
    let LW = !1;

    function lW() {
      LW || (LW = !0, dF.RegisterExtension(QW, (zz => new iW(zz))))
    }
    lW();
    const nW = "KHR_materials_dispersion";
    class aW {
      constructor() {
        this.name = nW, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(zz) {
        if (zz.unlit) return !1;
        const tz = zz.subSurface;
        return !(!tz.isRefractionEnabled && !tz.isDispersionEnabled)
      }
      postExportMaterialAsync(zz, tz, sz) {
        return new Promise((zz => {
          if (sz instanceof hW && this._isExtensionEnabled(sz)) {
            this._wasUsed = !0;
            const zz = {
              dispersion: sz.subSurface.dispersion
            };
            tz.extensions = tz.extensions || {}, tz.extensions[nW] = zz
          }
          zz(tz)
        }))
      }
    }
    let qW = !1;

    function SW() {
      qW || (qW = !0, dF.RegisterExtension(nW, (() => new aW)))
    }
    SW();
    const VW = "KHR_materials_emissive_strength";
    class RW {
      constructor() {
        this.name = VW, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(zz, tz, sz) {
        return await new Promise((zz => {
          if (!(sz instanceof hW)) return zz(tz);
          const Fz = sz.emissiveColor.scale(sz.emissiveIntensity),
            Wz = Math.max(...Fz.hsz());
          if (Wz > 1) {
            tz.emissiveFactor = Fz.scale(1 / Wz).hsz(), this._wasUsed = !0;
            const zz = {
              emissiveStrength: Wz
            };
            tz.extensions || (tz.extensions = {}), tz.extensions[VW] = zz
          } else tz.emissiveFactor = Fz.hsz();
          return zz(tz)
        }))
      }
    }
    let pW = !1;

    function fW() {
      pW || (pW = !0, dF.RegisterExtension(VW, (() => new RW)))
    }
    fW();
    const EW = "KHR_materials_ior";
    class zX {
      constructor() {
        this.name = EW, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(zz) {
        return !zz.unlit && (zz instanceof Et ? 1.5 != zz.specularIor : zz instanceof hW && (void 0 != zz.indexOfRefraction && 1.5 != zz.indexOfRefraction))
      }
      postExportMaterialAsync(zz, tz, sz) {
        return new Promise((zz => {
          if (sz instanceof hW && this._isExtensionEnabled(sz)) {
            this._wasUsed = !0;
            const zz = {
              ior: sz.indexOfRefraction
            };
            tz.extensions = tz.extensions || {}, tz.extensions[EW] = zz
          } else if (sz instanceof Et && this._isExtensionEnabled(sz)) {
            this._wasUsed = !0;
            const zz = {
              ior: sz.specularIor
            };
            tz.extensions = tz.extensions || {}, tz.extensions[EW] = zz
          }
          zz(tz)
        }))
      }
    }
    let tX = !1;

    function sX() {
      tX || (tX = !0, dF.RegisterExtension(EW, (() => new zX)))
    }
    sX();
    const FX = "KHR_materials_iridescence";
    class WX {
      constructor(zz) {
        this.name = FX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, tz, sz) {
        const Fz = [];
        if (sz instanceof xt) {
          if (sz.iridescence.isEnabled) return sz.iridescence.texture && Fz.push(sz.iridescence.texture), sz.iridescence.thicknessTexture && sz.iridescence.thicknessTexture !== sz.iridescence.texture && Fz.push(sz.iridescence.thicknessTexture), Fz
        } else if (sz instanceof Et && sz.thinFilmWeight > 0) return sz.thinFilmWeightTexture && Fz.push(sz.thinFilmWeightTexture), sz.thinFilmThicknessTexture && sz.thinFilmThicknessTexture !== sz.thinFilmWeightTexture && Fz.push(sz.thinFilmThicknessTexture), Fz;
        return []
      }
      postExportMaterialAsync(zz, tz, sz) {
        return new Promise((zz => {
          if (sz instanceof xt) {
            if (!sz.iridescence.isEnabled) return void zz(tz);
            this._wasUsed = !0, tz.extensions = tz.extensions || {};
            const Fz = this._exporter._materialExporter.getTextureInfo(sz.iridescence.texture),
              Wz = this._exporter._materialExporter.getTextureInfo(sz.iridescence.thicknessTexture),
              Xz = {
                iridescenceFactor: sz.iridescence.intensity,
                iridescenceIor: sz.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: sz.iridescence.minimumThickness,
                iridescenceThicknessMaximum: sz.iridescence.maximumThickness,
                iridescenceTexture: Fz ?? void 0,
                iridescenceThicknessTexture: Wz ?? void 0
              };
            null === Xz.iridescenceTexture && null === Xz.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(sz), tz.extensions[FX] = Xz
          } else if (sz instanceof Et) {
            if (sz.thinFilmWeight <= 0) return void zz(tz);
            this._wasUsed = !0, tz.extensions = tz.extensions || {};
            const Fz = this._exporter._materialExporter.getTextureInfo(sz.thinFilmWeightTexture),
              Wz = this._exporter._materialExporter.getTextureInfo(sz.thinFilmThicknessTexture),
              Xz = {
                iridescenceFactor: sz.thinFilmWeight,
                iridescenceIor: sz.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * sz.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * sz.thinFilmThickness,
                iridescenceTexture: Fz ?? void 0,
                iridescenceThicknessTexture: Wz ?? void 0
              };
            null === Xz.iridescenceTexture && null === Xz.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(sz), tz.extensions[FX] = Xz
          }
          zz(tz)
        }))
      }
    }
    let XX = !1;

    function OX() {
      XX || (XX = !0, dF.RegisterExtension(FX, (zz => new WX(zz))))
    }
    OX();
    const oX = "KHR_materials_sheen";
    class vX {
      constructor(zz) {
        this.name = oX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, tz, sz) {
        return sz instanceof hW && sz.sheen.isEnabled && sz.sheen.texture ? [sz.sheen.texture] : []
      }
      async postExportMaterialAsync(zz, tz, sz) {
        return await new Promise((zz => {
          if (sz instanceof hW) {
            if (!sz.sheen.isEnabled) return void zz(tz);
            this._wasUsed = !0, null == tz.extensions && (tz.extensions = {});
            const Fz = {
              sheenColorFactor: sz.sheen.color.hsz(),
              sheenRoughnessFactor: sz.sheen.roughness ?? 0
            };
            null === Fz.sheenColorTexture && null === Fz.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(sz), sz.sheen.texture && (Fz.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(sz.sheen.texture) ?? void 0), sz.sheen.textureRoughness && !sz.sheen.useRoughnessFromMainTexture ? Fz.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(sz.sheen.textureRoughness) ?? void 0 : sz.sheen.texture && sz.sheen.useRoughnessFromMainTexture && (Fz.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(sz.sheen.texture) ?? void 0), tz.extensions[oX] = Fz
          }
          zz(tz)
        }))
      }
    }
    let UX = !1;

    function KX() {
      UX || (UX = !0, dF.RegisterExtension(oX, (zz => new vX(zz))))
    }
    KX();
    const uX = "KHR_materials_fuzz";

    function NX(zz, tz) {
      const sz = new Gz.g(tz.name, tz.aJ());
      return sz._texture = zz, sz.coordinatesIndex = tz.coordinatesIndex, tz instanceof Gz.g && (sz.uOffset = tz.uOffset, sz.vOffset = tz.vOffset, sz.uScale = tz.uScale, sz.vScale = tz.vScale, sz.wAng = tz.wAng), sz.wrapU = tz.wrapU, sz.wrapV = tz.wrapV, sz
    }
    class bX {
      constructor(zz) {
        this.name = uX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = zz
      }
      dispose() {
        for (const zz of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[zz].dispose()
        }
        this._mergedTexturesMap = {};
        for (const zz of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[zz].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, tz, sz) {
        if (sz instanceof Et) {
          const zz = [];
          if (sz.fuzzWeight > 0) {
            sz.fuzzWeightTexture && zz.push(sz.fuzzWeightTexture);
            let tz = !1;
            if (sz.fuzzRoughnessTexture && (sz._useFuzzRoughnessFromTextureAlpha ? zz.push(sz.fuzzRoughnessTexture) : tz = !0), sz.fuzzColorTexture && !tz && zz.push(sz.fuzzColorTexture), tz) {
              const tz = function(zz) {
                const tz = zz.fuzzColorTexture,
                  sz = tz && tz.getInternalTexture() ? tz.getInternalTexture().uniqueId : "NoFuzzColor",
                  Fz = zz.fuzzRoughnessTexture;
                return `FuzzColor_${sz}_FuzzRoughness_${Fz&&Fz.getInternalTexture()?Fz.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(sz);
              if (!this._cachedInternalTexturesMap[tz]) {
                const zz = await async function(zz) {
                  const tz = zz.aJ(),
                    sz = zz.fuzzColorTexture,
                    Fz = zz.fuzzRoughnessTexture;
                  return sz || Fz ? (await os("FuzzTexture", Ks(sz ? vs(sz, 0) : Us(1), sz ? vs(sz, 1) : Us(1), sz ? vs(sz, 2) : Us(1), Fz ? vs(Fz, zz._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : Us(1)), tz)).getInternalTexture() : null
                }(sz);
                zz && (this._cachedInternalTexturesMap[tz] = zz)
              }
              this._cachedInternalTexturesMap[tz] && (sz.fuzzColorTexture && (this._mergedTexturesMap[sz.fuzzColorTexture.uniqueId] = NX(this._cachedInternalTexturesMap[tz], sz.fuzzColorTexture), zz.push(this._mergedTexturesMap[sz.fuzzColorTexture.uniqueId])), sz.fuzzRoughnessTexture && (this._mergedTexturesMap[sz.fuzzRoughnessTexture.uniqueId] = NX(this._cachedInternalTexturesMap[tz], sz.fuzzRoughnessTexture), zz.push(this._mergedTexturesMap[sz.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return zz
        }
        return []
      }
      async postExportMaterialAsync(zz, tz, sz) {
        return await new Promise((zz => {
          if (sz instanceof Et) {
            if (0 == sz.fuzzWeight) return void zz(tz);
            this._wasUsed = !0, null == tz.extensions && (tz.extensions = {});
            const Fz = {
              fuzzFactor: sz.fuzzWeight,
              fuzzColorFactor: sz.fuzzColor.hsz(),
              fuzzRoughnessFactor: sz.fuzzRoughness
            };
            let Wz, Xz;
            sz.fuzzWeightTexture && (Fz.fuzzTexture = this._exporter._materialExporter.getTextureInfo(sz.fuzzWeightTexture) ?? void 0), sz.fuzzColorTexture && (Wz = this._mergedTexturesMap[sz.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[sz.fuzzColorTexture.uniqueId] : sz.fuzzColorTexture, Fz.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Wz) ?? void 0), sz.fuzzRoughnessTexture && (Xz = this._mergedTexturesMap[sz.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[sz.fuzzRoughnessTexture.uniqueId] : sz.fuzzRoughnessTexture, Fz.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Xz) ?? void 0), null === Fz.fuzzColorTexture && null === Fz.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(sz), tz.extensions[uX] = Fz
          }
          zz(tz)
        }))
      }
    }
    let wX = !1;

    function DX() {
      wX || (wX = !0, dF.RegisterExtension(uX, (zz => new bX(zz))))
    }
    DX();
    const gX = "KHR_materials_specular";
    class HX {
      constructor(zz) {
        this.name = gX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, tz, sz) {
        const Fz = [];
        return sz instanceof hW && this._isExtensionEnabled(sz) ? (sz.metallicReflectanceTexture && Fz.push(sz.metallicReflectanceTexture), sz.reflectanceTexture && Fz.push(sz.reflectanceTexture), Fz) : Fz
      }
      _isExtensionEnabled(zz) {
        return !zz.unlit && (void 0 != zz.metallicF0Factor && 1 != zz.metallicF0Factor || void 0 != zz.metallicReflectanceColor && !zz.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(zz))
      }
      _hasTexturesExtension(zz) {
        return null != zz.metallicReflectanceTexture || null != zz.reflectanceTexture
      }
      postExportMaterialAsync(zz, tz, sz) {
        return new Promise((zz => {
          var Fz;
          if (sz instanceof hW && this._isExtensionEnabled(sz)) {
            this._wasUsed = !0, tz.extensions = tz.extensions || {};
            const zz = this._exporter._materialExporter.getTextureInfo(sz.metallicReflectanceTexture) ?? void 0,
              Fz = this._exporter._materialExporter.getTextureInfo(sz.reflectanceTexture) ?? void 0,
              Wz = {
                specularFactor: 1 == sz.metallicF0Factor ? void 0 : sz.metallicF0Factor,
                specularTexture: zz,
                specularColorFactor: sz.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : sz.metallicReflectanceColor.hsz(),
                specularColorTexture: Fz
              };
            this._hasTexturesExtension(sz) && this._exporter._materialNeedsUVsSet.add(sz), tz.extensions[gX] = Wz
          } else if (sz instanceof Et) {
            tz.extensions = tz.extensions || {};
            const Wz = this._exporter._materialExporter.getTextureInfo(sz.specularWeightTexture) ?? void 0,
              Xz = this._exporter._materialExporter.getTextureInfo(sz.specularColorTexture) ?? void 0,
              Oz = 1 == sz.specularWeight ? void 0 : sz.specularWeight,
              oz = sz.specularColor.equalsFloats(1, 1, 1) ? void 0 : sz.specularColor.hsz();
            if (!Xz && !Wz && void 0 === Oz && void 0 === oz) return zz(tz);
            this._wasUsed = !0;
            const vz = {
                specularEdgeColorEnabled: !0
              },
              Uz = {
                specularFactor: Oz,
                specularTexture: Wz,
                specularColorFactor: oz,
                specularColorTexture: Xz,
                extensions: {}
              };
            Uz.extensions.EXT_materials_specular_edge_color = vz, (Fz = this._exporter._glTF).extensionsUsed || (Fz.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Wz || Xz) && this._exporter._materialNeedsUVsSet.add(sz), tz.extensions[gX] = Uz
          }
          zz(tz)
        }))
      }
    }
    let BX = !1;

    function PX() {
      BX || (BX = !0, dF.RegisterExtension(gX, (zz => new HX(zz))))
    }
    PX();
    const rX = "KHR_materials_transmission";
    class YX {
      constructor(zz) {
        this.name = rX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, tz, sz) {
        const Fz = [];
        if (sz instanceof hW) {
          if (this._isExtensionEnabled(sz)) return sz.subSurface.refractionIntensityTexture && sz.subSurface.useGltfStyleTextures && Fz.push(sz.subSurface.refractionIntensityTexture), Fz
        } else sz instanceof Et && (sz.transmissionWeight > 0 && sz.transmissionWeightTexture && (Fz.push(sz.transmissionWeightTexture), sz.transmissionColorTexture && Fz.push(sz.transmissionColorTexture)), sz.subsurfaceWeight > 0 && sz.subsurfaceWeightTexture && Fz.push(sz.subsurfaceWeightTexture));
        return Fz
      }
      _isExtensionEnabled(zz) {
        if (zz instanceof Et && !zz.unlit) return zz.transmissionWeight > 0 || zz.subsurfaceWeight > 0;
        if (zz instanceof hW && !zz.unlit) {
          const tz = zz.subSurface;
          return tz.isRefractionEnabled && void 0 != tz.refractionIntensity && 0 != tz.refractionIntensity || null != tz.refractionIntensityTexture && tz.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(zz, tz, sz) {
        if (!this._isExtensionEnabled(sz)) return tz;
        if (sz instanceof hW) {
          this._wasUsed = !0;
          const Fz = sz.subSurface,
            Wz = {
              transmissionFactor: 0 === Fz.refractionIntensity ? void 0 : Fz.refractionIntensity
            };
          if (Fz.refractionIntensityTexture)
            if (Fz.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(sz);
              const zz = this._exporter._materialExporter.getTextureInfo(Fz.refractionIntensityTexture);
              zz && (Wz.transmissionTexture = zz)
            } else ez.e.Warn(`${zz}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          tz.extensions || (tz.extensions = {}), tz.extensions[rX] = Wz
        } else if (sz instanceof Et) {
          this._wasUsed = !0;
          const zz = {
            transmissionFactor: (1 - sz.transmissionWeight) * sz.subsurfaceWeight + sz.transmissionWeight
          };
          if (sz.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(sz);
            const tz = this._exporter._materialExporter.getTextureInfo(sz.transmissionWeightTexture);
            tz && (zz.transmissionTexture = tz)
          } else if (sz.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(sz);
            const tz = this._exporter._materialExporter.getTextureInfo(sz.subsurfaceWeightTexture);
            tz && (zz.transmissionTexture = tz)
          }
          if (0 == sz.transmissionDepth && (!sz.transmissionColor.equals(az.c.White()) || sz.transmissionColorTexture) && tz.pbrMetallicRoughness && (tz.pbrMetallicRoughness.baseColorFactor || (tz.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), tz.pbrMetallicRoughness.baseColorFactor[0] *= sz.transmissionColor.r, tz.pbrMetallicRoughness.baseColorFactor[1] *= sz.transmissionColor.g, tz.pbrMetallicRoughness.baseColorFactor[2] *= sz.transmissionColor.b, sz.transmissionColorTexture && !tz.pbrMetallicRoughness.baseColorTexture)) {
            const zz = this._exporter._materialExporter.getTextureInfo(sz.transmissionColorTexture);
            zz && (tz.pbrMetallicRoughness.baseColorTexture = zz, this._exporter._materialNeedsUVsSet.add(sz))
          }
          tz.extensions || (tz.extensions = {}), tz.extensions[rX] = zz
        }
        return tz
      }
    }
    let xX = !1;

    function mX() {
      xX || (xX = !0, dF.RegisterExtension(rX, (zz => new YX(zz))))
    }
    mX();
    var JX = sz(39430);
    const IX = "KHR_materials_unlit";
    class CX {
      constructor() {
        this.name = IX, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(zz, tz, sz) {
        return new Promise((zz => {
          let Fz = !1;
          sz instanceof hW ? Fz = sz.unlit : sz instanceof JX.e && (Fz = sz.disableLighting), Fz && (this._wasUsed = !0, null == tz.extensions && (tz.extensions = {}), tz.extensions[IX] = {}), zz(tz)
        }))
      }
    }
    let eX = !1;

    function ZX() {
      eX || (eX = !0, dF.RegisterExtension(IX, (() => new CX)))
    }
    ZX();
    const GX = "KHR_materials_volume";
    class TX {
      constructor(zz) {
        this.name = GX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, tz, sz) {
        const Fz = [];
        if (sz instanceof hW) {
          if (this._isExtensionEnabled(sz)) return sz.subSurface.thicknessTexture && Fz.push(sz.subSurface.thicknessTexture), Fz
        } else sz instanceof Et && (sz.transmissionWeight > 0 || sz.subsurfaceWeight > 0) && sz.geometryThicknessTexture && Fz.push(sz.geometryThicknessTexture);
        return Fz
      }
      _isExtensionEnabled(zz) {
        if (zz.unlit) return !1;
        const tz = zz.subSurface;
        return !(!tz.isRefractionEnabled && !tz.isTranslucencyEnabled) && (void 0 != tz.maximumThickness && 0 != tz.maximumThickness || void 0 != tz.tintColorAtDistance && tz.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != tz.tintColor && tz.tintColor != az.c.White() || this._hasTexturesExtension(zz))
      }
      _hasTexturesExtension(zz) {
        return null != zz.subSurface.thicknessTexture
      }
      postExportMaterialAsync(zz, tz, sz) {
        return new Promise((zz => {
          if (sz instanceof hW && this._isExtensionEnabled(sz)) {
            this._wasUsed = !0;
            const zz = sz.subSurface,
              Fz = {
                thicknessFactor: 0 == zz.maximumThickness ? void 0 : zz.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(zz.thicknessTexture) ?? void 0,
                attenuationDistance: zz.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : zz.tintColorAtDistance,
                attenuationColor: zz.tintColor.equalsFloats(1, 1, 1) ? void 0 : zz.tintColor.hsz()
              };
            this._hasTexturesExtension(sz) && this._exporter._materialNeedsUVsSet.add(sz), tz.extensions = tz.extensions || {}, tz.extensions[GX] = Fz
          } else if (sz instanceof Et) {
            const zz = sz.transmissionWeight > 0 && !sz.geometryThinWalled,
              Fz = sz.subsurfaceWeight > 0 && !sz.geometryThinWalled;
            if (zz || Fz) {
              this._wasUsed = !0;
              const Wz = sz.geometryThickness,
                Xz = this._exporter._materialExporter.getTextureInfo(sz.geometryThicknessTexture) ?? void 0;
              let Oz;
              Xz && this._exporter._materialNeedsUVsSet.add(sz);
              const oz = az.c.White().hsz();
              if (zz && sz.transmissionDepth > 0) {
                const zz = 1 / sz.transmissionDepth;
                let tz = new hz.p(-Math.log(sz.transmissionColor.r) * zz, -Math.log(sz.transmissionColor.g) * zz, -Math.log(sz.transmissionColor.b) * zz);
                const Fz = new hz.p(sz.transmissionScatter.r * zz, sz.transmissionScatter.g * zz, sz.transmissionScatter.b * zz),
                  Wz = tz.subtract(Fz),
                  Xz = Math.min(Wz.x, Wz.y, Wz.z);
                Xz < 0 && (Wz.x = Wz.x - Xz, Wz.y = Wz.y - Xz, Wz.z = Wz.z - Xz), tz = Wz.add(Fz);
                Oz = 1 / Math.max(tz.x, tz.y, tz.z), oz[0] = Math.exp(-tz.x * Oz), oz[1] = Math.exp(-tz.y * Oz), oz[2] = Math.exp(-tz.z * Oz)
              } else Oz = Number.MAX_VALUE, oz[0] = 1, oz[1] = 1, oz[2] = 1;
              let vz = 1;
              const Uz = az.c.White().hsz();
              if (Fz) {
                const zz = sz.subsurfaceRadius,
                  tz = sz.subsurfaceRadiusScale,
                  Fz = new hz.p(tz.r, tz.g, tz.b).multiplyByFloats(zz, zz, zz),
                  Wz = new hz.p(1 / Math.max(Fz.x, 1e-6), 1 / Math.max(Fz.y, 1e-6), 1 / Math.max(Fz.z, 1e-6));
                vz = 1 / Math.max(Wz.x, Wz.y, Wz.z), Uz[0] = Math.exp(-Wz.x * vz), Uz[1] = Math.exp(-Wz.y * vz), Uz[2] = Math.exp(-Wz.z * vz)
              }
              const Kz = (1 - sz.transmissionWeight) * sz.subsurfaceWeight,
                uz = Kz + sz.transmissionWeight,
                Nz = 1 / Math.max(uz, 1e-6),
                bz = sz.transmissionWeight * Nz,
                wz = Kz * Nz,
                Dz = oz.map(((zz, tz) => zz * bz + Uz[tz] * wz)),
                gz = {
                  thicknessFactor: Wz,
                  thicknessTexture: Xz,
                  attenuationDistance: Oz * bz + vz * wz,
                  attenuationColor: Dz
                };
              tz.extensions = tz.extensions || {}, tz.extensions[GX] = gz
            }
          }
          zz(tz)
        }))
      }
    }
    let cX = !1;

    function jX() {
      cX || (cX = !0, dF.RegisterExtension(GX, (zz => new TX(zz))))
    }
    jX();
    const AX = "KHR_materials_volume_scatter";
    class yX {
      constructor(zz) {
        this.name = AX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, tz, sz) {
        const Fz = [];
        return sz instanceof Et && (sz.transmissionWeight > 0 && sz.transmissionScatterTexture && Fz.push(sz.transmissionScatterTexture), sz.subsurfaceWeight > 0 && sz.subsurfaceColorTexture && Fz.push(sz.subsurfaceColorTexture)), Fz
      }
      _isExtensionEnabled(zz) {
        if (zz.unlit) return !1;
        const tz = zz.transmissionWeight > 0 && !zz.geometryThinWalled && zz.transmissionDepth > 0 && !zz.transmissionScatter.equals(az.c.Black()),
          sz = zz.subsurfaceWeight > 0 && !zz.geometryThinWalled;
        return !(!tz && !sz)
      }
      postExportMaterialAsync(zz, tz, sz) {
        return new Promise((zz => {
          if (sz instanceof Et && this._isExtensionEnabled(sz)) {
            this._wasUsed = !0;
            let zz = hz.p.Zero(),
              Fz = 0;
            if (sz.transmissionWeight > 0) {
              zz = function(zz) {
                const tz = new hz.p(Math.sqrt(1 - zz.x), Math.sqrt(1 - zz.y), Math.sqrt(1 - zz.z)),
                  sz = new hz.p(1, 1, 1),
                  Fz = sz.subtract(tz),
                  Wz = sz.subtract(new hz.p(.139, .139, .139).multiplyInPlace(tz)),
                  Xz = sz.add(new hz.p(1.17, 1.17, 1.17).multiplyInPlace(tz));
                return Fz.multiplyInPlace(Wz).divideInPlace(Xz)
              }(new hz.p(sz.transmissionScatter.r, sz.transmissionScatter.g, sz.transmissionScatter.b)), Fz = sz.transmissionScatterAnisotropy
            }
            const Wz = hz.p.Zero();
            let Xz = 0;
            sz.subsurfaceWeight > 0 && (Wz.set(sz.subsurfaceColor.r, sz.subsurfaceColor.g, sz.subsurfaceColor.b), Xz = sz.subsurfaceScatterAnisotropy);
            const Oz = (1 - sz.transmissionWeight) * sz.subsurfaceWeight,
              oz = Oz + sz.transmissionWeight,
              vz = 1 / Math.max(oz, 1e-6),
              Uz = sz.transmissionWeight * vz,
              Kz = Oz * vz,
              uz = {
                multiscatterColorFactor: zz.multiplyByFloats(Uz, Uz, Uz).addInPlace(Wz.multiplyByFloats(Kz, Kz, Kz)).hsz(),
                scatterAnisotropy: Fz * Uz + Xz * Kz
              };
            if (sz.subsurfaceWeight > 0 && sz.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(sz);
              const zz = this._exporter._materialExporter.getTextureInfo(sz.subsurfaceColorTexture);
              zz && (uz.multiscatterColorTexture = zz)
            } else if (sz.transmissionWeight > 0 && sz.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(sz);
              const zz = this._exporter._materialExporter.getTextureInfo(sz.transmissionScatterTexture);
              zz && (uz.multiscatterColorTexture = zz)
            }
            tz.extensions = tz.extensions || {}, tz.extensions[AX] = uz
          }
          zz(tz)
        }))
      }
    }
    let MX = !1;

    function dX() {
      MX || (MX = !0, dF.RegisterExtension(AX, (zz => new yX(zz)), 101))
    }
    dX();
    const hX = "KHR_materials_diffuse_roughness";
    class QX {
      constructor(zz) {
        this.name = hX, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, tz, sz) {
        const Fz = [];
        if (sz instanceof xt) {
          if (sz._baseDiffuseRoughness) return sz._baseDiffuseRoughnessTexture && Fz.push(sz._baseDiffuseRoughnessTexture), Fz
        } else if (sz instanceof Et && sz.baseDiffuseRoughness) return sz.baseDiffuseRoughnessTexture && Fz.push(sz.baseDiffuseRoughnessTexture), Fz;
        return []
      }
      postExportMaterialAsync(zz, tz, sz) {
        return new Promise((zz => {
          let Fz = null,
            Wz = null;
          if (sz instanceof xt ? (Fz = sz._baseDiffuseRoughness, Wz = sz._baseDiffuseRoughnessTexture) : sz instanceof Et && (Fz = sz.baseDiffuseRoughness, Wz = sz.baseDiffuseRoughnessTexture), !Fz) return void zz(tz);
          this._wasUsed = !0, tz.extensions = tz.extensions || {};
          const Xz = {
            diffuseRoughnessFactor: Fz,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Wz) ?? void 0
          };
          null !== Xz.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(sz), tz.extensions[hX] = Xz, zz(tz)
        }))
      }
    }
    let kX = !1;

    function iX() {
      kX || (kX = !0, dF.RegisterExtension(hX, (zz => new QX(zz))))
    }
    iX();
    const LX = "KHR_materials_openpbr";
    class lX {
      constructor() {
        this.name = LX, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(zz, tz, sz) {
        return new Promise((zz => {
          sz instanceof Et && (this._wasUsed = !0, tz.extensions = tz.extensions || {}, tz.extensions[LX] = {}), zz(tz)
        }))
      }
    }
    let nX = !1;

    function aX() {
      nX || (nX = !0, dF.RegisterExtension(LX, (() => new lX)))
    }
    aX();
    const qX = "KHR_texture_transform";
    class SX {
      constructor() {
        this.name = qX, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(zz, tz, sz) {
        if (sz.aJ() || Jt.j.Warn(`${zz}: "scene" is not defined for Babylon texture ${sz.name}!`), (0 !== sz.uAng || 0 !== sz.vAng) && (Jt.j.Warn(`${zz}: Texture ${sz.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== sz.uRotationCenter || 0 !== sz.vRotationCenter)) return;
        const Fz = {};
        let Wz = !1;
        if (0 === sz.uOffset && 0 === sz.vOffset || (Fz.offset = [sz.uOffset, sz.vOffset], Wz = !0), 1 === sz.uScale && 1 === sz.vScale || (Fz.scale = [sz.uScale, sz.vScale], Wz = !0), 0 !== sz.wAng) {
          if (0 !== sz.uRotationCenter || 0 !== sz.vRotationCenter) {
            if (sz.homogeneousRotationInUVTransform && sz.uScale !== sz.vScale) return void Jt.j.Warn(`${zz}: Texture ${sz.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${qX}.`);
            Jt.j.Warn(`${zz}: Texture ${sz.name} with non-origin rotation center will be exported using an adjusted offset with ${qX}.`), Fz.offset = function(zz) {
              const {
                uOffset: tz,
                vOffset: sz,
                uRotationCenter: Fz,
                vRotationCenter: Wz,
                uScale: Xz,
                vScale: Oz,
                wAng: oz
              } = zz, vz = Math.cos(oz), Uz = Math.sin(oz), Kz = Fz * Xz, uz = Wz * Oz;
              return [tz + (Kz * (1 - vz) + uz * Uz), sz + (uz * (1 - vz) - Kz * Uz)]
            }(sz)
          }
          Fz.rotation = -sz.wAng, Wz = !0
        }
        0 !== sz.coordinatesIndex && (Fz.texCoord = sz.coordinatesIndex, Wz = !0), Wz && (this._wasUsed = !0, tz.extensions || (tz.extensions = {}), tz.extensions[qX] = Fz)
      }
    }
    let VX = !1;

    function RX() {
      VX || (VX = !0, dF.RegisterExtension(qX, (() => new SX)))
    }
    RX();
    var pX = sz(39205);
    const fX = "KHR_texture_basisu";
    class EX {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(zz) {
        this.name = fX, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      postExportTexture(zz, tz) {
        const sz = this._exporter._textures[tz.index],
          Fz = sz.source;
        if (void 0 === Fz) return;
        const Wz = this._exporter._images[Fz];
        "image/ktx2" === (Wz.mimeType || (0, pX.g)(Wz.uri)) && (sz.source = void 0, sz.extensions || (sz.extensions = {}), sz.extensions[fX] = {
          source: Fz
        }, this._wasUsed = !0)
      }
    }
    let zO = !1;

    function tO() {
      zO || (zO = !0, dF.RegisterExtension(fX, (zz => new EX(zz))))
    }
    tO();
    const sO = "EXT_texture_webp";
    class FO {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(zz) {
        this.name = sO, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      postExportTexture(zz, tz) {
        const sz = this._exporter._textures[tz.index],
          Fz = sz.source;
        if (void 0 === Fz) return;
        const Wz = this._exporter._images[Fz];
        "image/webp" === (Wz.mimeType || (0, pX.g)(Wz.uri)) && (sz.source = void 0, sz.extensions || (sz.extensions = {}), sz.extensions[sO] = {
          source: Fz
        }, this._wasUsed = !0)
      }
    }
    let WO = !1;

    function XO() {
      WO || (WO = !0, dF.RegisterExtension(sO, (zz => new FO(zz))))
    }
    XO();
    const OO = "EXT_texture_avif";
    class oO {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(zz) {
        this.name = OO, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      postExportTexture(zz, tz) {
        const sz = this._exporter._textures[tz.index],
          Fz = sz.source;
        if (void 0 === Fz) return;
        const Wz = this._exporter._images[Fz];
        "image/avif" === (Wz.mimeType || (0, pX.g)(Wz.uri)) && (sz.source = void 0, sz.extensions || (sz.extensions = {}), sz.extensions[OO] = {
          source: Fz
        }, this._wasUsed = !0)
      }
    }
    let vO = !1;

    function UO() {
      vO || (vO = !0, dF.RegisterExtension(OO, (zz => new oO(zz))))
    }
    UO();
    class KO {
      static CreateSTL(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Wz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Xz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Oz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          vz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const Uz = function(zz, tz, sz) {
            const Wz = [3 * zz[sz], 3 * zz[sz + 1], 3 * zz[sz + 2]],
              Xz = [new Fz.XD(tz[Wz[0]], tz[Wz[0] + 2], tz[Wz[0] + 1]), new Fz.XD(tz[Wz[1]], tz[Wz[1] + 2], tz[Wz[1] + 1]), new Fz.XD(tz[Wz[2]], tz[Wz[2] + 2], tz[Wz[2] + 1])],
              Oz = Xz[0].subtract(Xz[1]),
              oz = Xz[2].subtract(Xz[1]);
            return {
              v: Xz,
              n: Fz.XD.Cross(oz, Oz).normalize()
            }
          },
          uz = function(zz, tz, sz, Fz) {
            return tz = Nz(zz, tz, sz.x, Fz), tz = Nz(zz, tz, sz.y, Fz), Nz(zz, tz, sz.z, Fz)
          },
          Nz = function(zz, tz, sz, Fz) {
            return zz.setFloat32(tz, sz, Fz), tz + 4
          },
          wz = function(zz) {
            if (oz) {
              let tz = zz;
              zz instanceof bz.d && (tz = zz.AFz);
              const sz = tz.getVerticesData(Kz.c.PositionKind, !0, !0);
              if (!sz) return [];
              const Wz = Fz.XD.Zero();
              let Xz;
              for (Xz = 0; Xz < sz.length; Xz += 3) Fz.XD.TransformCoordinatesFromFloatsToRef(sz[Xz], sz[Xz + 1], sz[Xz + 2], zz.computeWorldMatrix(!0), Wz).toArray(sz, Xz);
              return sz
            }
            return zz.getVerticesData(Kz.c.PositionKind) || []
          };
        oz && (Oz = !0);
        let Dz = "",
          gz = 0,
          Hz = 0;
        if (Wz) {
          for (let sz = 0; sz < zz.length; sz++) {
            const tz = zz[sz].Qsz();
            gz += tz ? tz.length / 3 : 0
          }
          const tz = new ArrayBuffer(84 + 50 * gz);
          Dz = new DataView(tz), Hz += 80, Dz.setUint32(Hz, gz, Xz), Hz += 4
        } else vz || (Dz = "solid stlmesh\r\n");
        for (let Fz = 0; Fz < zz.length; Fz++) {
          const tz = zz[Fz];
          !Wz && vz && (Dz += "solid " + tz.name + "\r\n"), !Oz && tz instanceof NF.b && tz.bakeCurrentTransformIntoVertices();
          const sz = wz(tz),
            oz = tz.Qsz() || [];
          for (let zz = 0; zz < oz.length; zz += 3) {
            const tz = Uz(oz, sz, zz);
            Wz ? (Hz = uz(Dz, Hz, tz.n, Xz), Hz = uz(Dz, Hz, tz.v[0], Xz), Hz = uz(Dz, Hz, tz.v[1], Xz), Hz = uz(Dz, Hz, tz.v[2], Xz), Hz += 2) : (Dz += "\tfacet normal " + tz.n.x + " " + tz.n.y + " " + tz.n.z + "\r\n", Dz += "\t\touter loop\r\n", Dz += "\t\t\tvertex " + tz.v[0].x + " " + tz.v[0].y + " " + tz.v[0].z + "\r\n", Dz += "\t\t\tvertex " + tz.v[1].x + " " + tz.v[1].y + " " + tz.v[1].z + "\r\n", Dz += "\t\t\tvertex " + tz.v[2].x + " " + tz.v[2].y + " " + tz.v[2].z + "\r\n", Dz += "\t\tendloop\r\n", Dz += "\tendfacet\r\n")
          }!Wz && vz && (Dz += "endsolid " + name + "\r\n")
        }
        if (Wz || vz || (Dz += "endsolid stlmesh"), tz) {
          const zz = document.createElement("a"),
            tz = new Blob([Dz], {
              type: "application/octet-stream"
            });
          zz.href = window.URL.createObjectURL(tz), zz.download = sz + ".stl", zz.click()
        }
        return Dz
      }
    }

    function uO(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Wz = [];
      for (let Xz = 0; Xz < zz.length / sz; Xz++) {
        const Oz = zz[Xz * sz] * (Fz ? -1 : 1),
          oz = zz[Xz * sz + 1],
          vz = zz[Xz * sz + 2];
        Wz.push(`(${Oz.toPrecision(tz.precision)}, ${oz.toPrecision(tz.precision)}, ${vz.toPrecision(tz.precision)})`)
      }
      return Wz.join(", ")
    }

    function NO(zz, tz) {
      const sz = [];
      for (let Fz = 0; Fz < zz.length / 2; Fz++) {
        const Wz = zz[2 * Fz],
          Xz = zz[2 * Fz + 1];
        sz.push(`(${Wz.toPrecision(tz.precision)}, ${(1-Xz).toPrecision(tz.precision)})`)
      }
      return sz.join(", ")
    }

    function bO(zz, tz, sz, Fz) {
      const Wz = zz.getVerticesData(Kz.c.PositionKind),
        Xz = zz.getVerticesData(Kz.c.NormalKind);
      if (Wz && Xz) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${sz}"\n\t\tint[] faceVertexCounts = [${function(zz){const tz=zz.Qsz()?.length?zz.getTotalIndices():zz.getTotalVertices();return Array(tz/3).fill(3).join(", ")}(zz)}]\n\t\tint[] faceVertexIndices = [${function(zz){const tz=zz.Qsz(),sz=tz?.length??zz.getTotalVertices(),Fz=[];if(null!==tz)for(let Wz=0;Wz<sz;Wz++)Fz.push(tz[Wz]);else for(let Wz=0;Wz<sz;Wz++)Fz.push(Wz);return Fz.join(", ")}(zz)}]\n\t\tnormal3f[] normals = [${uO(Xz,tz,void 0,Fz)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${uO(Wz,tz,void 0,Fz)}]\n        ${function(zz,tz){let sz="";for(let Wz=0;Wz<4;Wz++){const Fz=Wz>0?Wz:"",Xz=zz.getVerticesData(Kz.c.UVKind+(Fz?Fz+1:""));Xz&&(sz+=`\n\t\ttexCoord2f[] primvars:st${Fz} = [${NO(Xz,tz)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Fz=zz.getVerticesData(Kz.c.ColorKind);return Fz&&(sz+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        uO(Fz, tz, Fz.length / zz.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),sz}(zz,tz)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function wO(zz, tz, sz, Fz) {
      return `\n        def "Geometry"\n        {\n        ${bO(zz,tz,sz,Fz)}\n        }\n        `
    }

    function DO(zz) {
      let tz = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return tz += zz, fflate.strToU8(tz)
    }

    function gO(zz) {
      const tz = zz.m;
      return `( ${HO(tz,0)}, ${HO(tz,4)}, ${HO(tz,8)}, ${HO(tz,12)} )`
    }

    function HO(zz, tz) {
      return `(${zz[tz+0]}, ${zz[tz+1]}, ${zz[tz+2]}, ${zz[tz+3]})`
    }

    function BO(zz, tz) {
      const sz = "Object_" + zz.uniqueId,
        Fz = gO(tz);
      return `def Xform "${sz}" (\n\tprepend references = @./geometries/Geometry_${zz.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Fz}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${zz.material.uniqueId}>\n}\n\n`
    }

    function PO(zz) {
      switch (zz) {
        case mz.e.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case mz.e.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case mz.e.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function rO(zz) {
      return `(${zz.x}, ${zz.y})`
    }

    function YO(zz) {
      return `(${zz.r}, ${zz.g}, ${zz.b})`
    }

    function xO(zz) {
      return "image/jpeg" === zz || "image/png" === zz
    }

    function mO(zz, tz, sz, Wz, Xz, Oz) {
      const oz = zz.getInternalTexture().uniqueId + "_" + zz.invertY,
        Uz = zz.mimeType || (0, vz.c)(zz.getInternalTexture()?.url ?? ""),
        Kz = xO(Uz) ? Uz : "image/png",
        uz = "image/jpeg" === Kz ? "jpg" : "png";
      Xz[oz] = {
        texture: zz,
        mimeType: Kz,
        ext: uz
      };
      const Nz = zz.coordinatesIndex > 0 ? "st" + zz.coordinatesIndex : "st",
        bz = new Fz.Vector2(zz.uScale, zz.vScale),
        wz = new Fz.Vector2(zz.uOffset, zz.vOffset),
        Dz = zz.wAng,
        gz = Math.sin(Dz),
        Hz = Math.cos(Dz);
      return wz.y = 1 - wz.y - bz.y, wz.x += gz * bz.x, wz.y += (1 - Hz) * bz.y, `\n    def Shader "PrimvarReader_${sz}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${Nz}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${sz}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${tz.uniqueId}/PrimvarReader_${sz}.outputs:result>\n        float inputs:rotation = ${(Dz*(180/Math.PI)).toFixed(Oz.precision)}\n        float2 inputs:scale = ${rO(bz)}\n        float2 inputs:translation = ${rO(wz)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${zz.uniqueId}_${sz}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${oz}.${uz}@\n        float2 inputs:st.connect = </Root/Materials/Material_${tz.uniqueId}/Transform2d_${sz}.outputs:result>\n        ${Wz?"float4 inputs:scale = "+function(zz){return`(${zz.r}, ${zz.g}, ${zz.b}, 1.0)`}(Wz):""}\n        token inputs:sourceColorSpace = "${zz.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${PO(zz.wrapU)}"\n        token inputs:wrapT = "${PO(zz.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${tz.needAlphaBlending()||tz.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function JO(zz, tz, sz) {
      const Fz = "\t\t\t",
        Wz = [],
        Xz = [],
        {
          diffuseMap: Oz,
          diffuse: oz,
          alphaCutOff: vz,
          emissiveMap: Uz,
          emissive: Kz,
          normalMap: uz,
          roughnessMap: Nz,
          roughnessChannel: bz,
          roughness: wz,
          metalnessMap: Dz,
          metalnessChannel: Hz,
          metalness: Bz,
          aoMap: Pz,
          aoMapChannel: rz,
          aoMapIntensity: Yz,
          alphaMap: xz,
          ior: mz,
          clearCoatEnabled: Jz,
          clearCoat: Iz,
          clearCoatMap: Cz,
          clearCoatRoughness: ez,
          clearCoatRoughnessMap: Zz
        } = function(zz) {
          const tz = {
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
          return zz instanceof vF.StandardMaterial ? {
            ...tz,
            diffuseMap: zz.diffuseTexture,
            diffuse: zz.diffuseColor,
            alphaCutOff: zz.alphaCutOff,
            emissiveMap: zz.emissiveTexture,
            emissive: zz.emissiveColor,
            roughness: 1,
            alphaMap: zz.opacityTexture
          } : zz instanceof xt ? {
            ...tz,
            diffuseMap: zz._albedoTexture,
            diffuse: zz._albedoColor,
            alphaCutOff: zz._alphaCutOff,
            emissiveMap: zz._emissiveTexture,
            emissive: zz._emissiveColor,
            normalMap: zz._bumpTexture,
            roughnessMap: zz._metallicTexture,
            roughnessChannel: zz._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: zz._roughness ?? 1,
            metalnessMap: zz._metallicTexture,
            metalnessChannel: zz._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: zz._metallic ?? 0,
            aoMap: zz._ambientTexture,
            aoMapChannel: zz._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: zz._ambientTextureStrength,
            alphaMap: zz._opacityTexture,
            ior: zz.subSurface.indexOfRefraction,
            clearCoatEnabled: zz.clearCoat.isEnabled,
            clearCoat: zz.clearCoat.intensity,
            clearCoatMap: zz.clearCoat.texture,
            clearCoatRoughness: zz.clearCoat.roughness,
            clearCoatRoughnessMap: zz.clearCoat.useRoughnessFromMainTexture ? zz.clearCoat.texture : zz.clearCoat.textureRoughness
          } : tz
        }(zz);
      return null !== Oz ? (Wz.push(`${Fz}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${Oz.uniqueId}_diffuse.outputs:rgb>`), zz.needAlphaBlending() ? Wz.push(`${Fz}float inputs:opacity.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${Oz.uniqueId}_diffuse.outputs:a>`) : zz.needAlphaTesting() && (Wz.push(`${Fz}float inputs:opacity.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${Oz.uniqueId}_diffuse.outputs:a>`), Wz.push(`${Fz}float inputs:opacityThreshold = ${vz}`)), Xz.push(mO(Oz, zz, "diffuse", oz, tz, sz))) : Wz.push(`${Fz}color3f inputs:diffuseColor = ${YO(oz||gz.Color3.White())}`), null !== Uz ? (Wz.push(`${Fz}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${Uz.uniqueId}_emissive.outputs:rgb>`), Xz.push(mO(Uz, zz, "emissive", Kz, tz, sz))) : Kz && Kz.toLuminance() > 0 && Wz.push(`${Fz}color3f inputs:emissiveColor = ${YO(Kz)}`), null !== uz && (Wz.push(`${Fz}normal3f inputs:normal.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${uz.uniqueId}_normal.outputs:rgb>`), Xz.push(mO(uz, zz, "normal", null, tz, sz))), null !== Pz && (Wz.push(`${Fz}float inputs:occlusion.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${Pz.uniqueId}_occlusion.outputs:${rz}>`), Xz.push(mO(Pz, zz, "occlusion", new gz.Color3(Yz, Yz, Yz), tz, sz))), null !== Nz ? (Wz.push(`${Fz}float inputs:roughness.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${Nz.uniqueId}_roughness.outputs:${bz}>`), Xz.push(mO(Nz, zz, "roughness", new gz.Color3(wz, wz, wz), tz, sz))) : Wz.push(`${Fz}float inputs:roughness = ${wz}`), null !== Dz ? (Wz.push(`${Fz}float inputs:metallic.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${Dz.uniqueId}_metallic.outputs:${Hz}>`), Xz.push(mO(Dz, zz, "metallic", new gz.Color3(Bz, Bz, Bz), tz, sz))) : Wz.push(`${Fz}float inputs:metallic = ${Bz}`), null !== xz ? (Wz.push(`${Fz}float inputs:opacity.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${xz.uniqueId}_opacity.outputs:r>`), Wz.push(`${Fz}float inputs:opacityThreshold = 0.0001`), Xz.push(mO(xz, zz, "opacity", null, tz, sz))) : Wz.push(`${Fz}float inputs:opacity = ${zz.alpha}`), Jz && (null !== Cz ? (Wz.push(`${Fz}float inputs:clearcoat.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${Cz.uniqueId}_clearcoat.outputs:r>`), Xz.push(mO(Cz, zz, "clearcoat", new gz.Color3(Iz, Iz, Iz), tz, sz))) : Wz.push(`${Fz}float inputs:clearcoat = ${Iz}`), null !== Zz ? (Wz.push(`${Fz}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${Zz.uniqueId}_clearcoatRoughness.outputs:g>`), Xz.push(mO(Zz, zz, "clearcoatRoughness", new gz.Color3(ez, ez, ez), tz, sz))) : Wz.push(`${Fz}float inputs:clearcoatRoughness = ${ez}`)), Wz.push(`${Fz}float inputs:ior = ${mz}`), `\n\tdef Material "Material_${zz.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Wz.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${zz.uniqueId}/PreviewSurface.outputs:surface>\n\n${Xz.join("\n")}\n\n\t}\n`
    }

    function IO(zz) {
      zz.computeWorldMatrix(!0);
      const tz = zz.getWorldMatrix().clone(),
        sz = zz.aJ().useRightHandedSystem;
      let Fz = zz.material?._getEffectiveOrientation(zz) ?? zz.sideOrientation,
        Oz = !sz,
        oz = zz.parent;
      for (; oz;) {
        if (hs(oz, sz) && null === oz.parent) {
          sz || (tz.multiplyToRef(oz.getWorldMatrix().invert(), tz), Fz = Fz === Xz.b.ClockWiseSideOrientation ? Xz.b.CounterClockWiseSideOrientation : Xz.b.ClockWiseSideOrientation), Oz = !1;
          break
        }
        oz = oz.parent
      }
      return tz.determinant() < 0 && Wz.Tools.Warn(`Mesh ${zz.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: tz,
        windingOrder: Fz === Xz.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: Oz
      }
    }
    async function CO(zz, tz, sz) {
      const Xz = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...tz
      };
      "undefined" === typeof fflate && await Wz.Tools.LoadScriptAsync(Xz.fflateUrl);
      const Oz = {};
      Oz[Xz.modelFileName] = null;
      let oz = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      oz += function(zz) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===zz.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${zz.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${zz.planeAnchoringAlignment}"`:""}\n            `
      }(Xz);
      const vz = {};
      for (const Fz of zz.meshes) {
        if (0 === Fz.getTotalVertices()) continue;
        const zz = Fz,
          tz = zz.geometry,
          Uz = zz.material;
        if (!Uz || !tz || sz && !sz(zz)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(Uz.getClassName())) {
          const sz = "geometries/Geometry_" + tz.uniqueId + ".usda",
            {
              matrix: Fz,
              windingOrder: Wz,
              convertToRightHanded: Kz
            } = IO(zz);
          if (!(sz in Oz)) {
            const zz = wO(tz, Xz, Wz, Kz);
            Oz[sz] = DO(zz)
          }
          Uz.uniqueId in vz || (vz[Uz.uniqueId] = Uz), oz += BO(zz, Fz)
        } else Wz.Tools.Warn("USDZExportAsync does not support this material type: " + Uz.getClassName())
      }
      zz.activeCamera && Xz.exportCamera && (oz += function(zz, tz) {
        const sz = "Camera_" + zz.uniqueId,
          Wz = gO(Fz.Matrix.RotationY(Math.PI).multiply(zz.getWorldMatrix()));
        if (zz.mode === mz.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${sz}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Wz}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${zz.minZ.toPrecision(tz.precision)}, ${zz.maxZ.toPrecision(tz.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(zz.orthoLeft||1)+Math.abs(zz.orthoRight||1))).toPrecision(tz.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(zz.orthoTop||1)+Math.abs(zz.orthoBottom||1))).toPrecision(tz.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Fz = zz.FD().getAspectRatio(zz),
            Xz = tz.cameraSensorWidth || 35;
          return `def Camera "${sz}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Wz}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${zz.minZ.toPrecision(tz.precision)}, ${zz.maxZ.toPrecision(tz.precision)})\n\t\t\tfloat focalLength = ${(Xz/(2*Math.tan(.5*zz.fov))).toPrecision(tz.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(Xz*Fz).toPrecision(tz.precision)}\n\t\t\tfloat verticalAperture = ${(Xz/Fz).toPrecision(tz.precision)}            \n\t\t}\n\t\n\t`
        }
      }(zz.activeCamera, Xz)), oz += "\n            }\n        }";
      const Uz = {};
      oz += function(zz, tz, sz) {
        const Fz = [];
        for (const Wz in zz) {
          const Xz = zz[Wz];
          Fz.push(JO(Xz, tz, sz))
        }
        return `\n    def "Materials"\n{\n${Fz.join("")}\n}\n\n`
      }(vz, Uz, Xz), oz += "\n    }", Oz[Xz.modelFileName] = fflate.strToU8(oz);
      for (const Fz in Uz) {
        const {
          texture: zz,
          ext: tz,
          mimeType: sz
        } = Uz[Fz], Wz = await Bs(zz);
        if (Wz && xO(Wz.mimeType) && Wz.mimeType === sz) Oz[`textures/Texture_${Fz}.${tz}`] = new Uint8Array(Wz.data);
        else {
          const Wz = zz.getSize(),
            Xz = await (0, rz.c)(zz),
            oz = await Jz.DumpTools.DumpDataAsync(Wz.width, Wz.height, Xz, sz, void 0, !1, !0);
          Oz[`textures/Texture_${Fz}.${tz}`] = new Uint8Array(oz).slice()
        }
      }
      let Kz = 0;
      for (const Fz in Oz) {
        const zz = Oz[Fz];
        if (!zz) continue;
        Kz += 34 + Fz.length;
        const tz = 63 & Kz;
        if (4 !== tz) {
          const sz = new Uint8Array(64 - tz);
          Oz[Fz] = [zz, {
            extra: {
              12345: sz
            }
          }]
        }
        Kz = zz.length
      }
      return fflate.zipSync(Oz, {
        level: 0
      })
    }
    var eO = sz(40190);
    class ZO {
      static Export(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          sz = arguments.length > 2 ? arguments[2] : void 0;
        if (!zz || 0 === zz.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Fz = tz;
        tz && 0 !== tz.length || (Fz = zz.animations.map((zz => zz.name)));
        let Wz = null;
        for (const Uz of Fz) {
          const tz = zz.getAnimationRange(Uz);
          tz && (Wz = Wz ? new eO.e("animation-range", Math.min(Wz.from, tz.from), Math.max(Wz.to, tz.to)) : tz)
        }
        if (!Wz && (zz.animations.length > 0 && (Wz = zz.getAnimationRange(zz.animations[0].name)), !Wz)) throw new Error("No animation range found in skeleton");
        const Xz = sz || 1 / (zz.animations[0]?.framePerSecond || 30),
          Oz = this._BuildBoneHierarchy(zz, Fz);
        let oz = 0;
        for (const Uz of Oz) Uz.positionKeys.length > 0 && (oz = Math.max(oz, Uz.positionKeys.length)), Uz.rotationKeys.length > 0 && (oz = Math.max(oz, Uz.rotationKeys.length));
        0 === oz && (oz = Math.floor((Wz.to - Wz.from) / Xz) + 1);
        let vz = "";
        return vz += "HIERARCHY\n", vz += this._ExportHierarchy(Oz, 0), vz += "MOTION\n", vz += `Frames: ${oz}\n`, vz += `Frame Time: ${Xz.toFixed(6)}\n`, vz += this._ExportMotionData(Oz, oz, 0, Fz), vz
      }
      static _BuildBoneHierarchy(zz, tz) {
        const sz = new Map,
          Fz = [];
        for (const Wz of zz.bones) {
          const zz = {
            bone: Wz,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          sz.set(Wz, zz)
        }
        for (const Wz of zz.bones) {
          const zz = sz.get(Wz);
          if (Wz.animations.length > 0)
            for (const sz of Wz.animations) tz.includes(sz.name) && ("position" === sz.targetProperty ? (zz.hasPositionChannels = !0, zz.positionKeys.push(...sz.getKeys())) : "rotationQuaternion" === sz.targetProperty && (zz.hasRotationChannels = !0, zz.rotationKeys.push(...sz.getKeys())));
          if (Wz.getParent()) {
            const tz = sz.get(Wz.getParent());
            tz && tz.children.push(zz)
          } else Fz.push(zz)
        }
        return Fz
      }
      static _ExportHierarchy(zz, tz) {
        let sz = "";
        const Fz = "    ".repeat(tz);
        for (const Wz of zz) {
          const zz = Wz.bone;
          if (this._IsEndSite(Wz)) {
            sz += `${Fz}End Site\n`, sz += `${Fz}{\n`;
            const tz = this._GetBoneOffset(zz);
            sz += `${Fz}    OFFSET ${tz.x.toFixed(6)} ${tz.y.toFixed(6)} ${tz.z.toFixed(6)}\n`, sz += `${Fz}}\n`
          } else {
            sz += `${0===tz?"ROOT":`${Fz}JOINT`} ${zz.name}\n`, sz += `${Fz}{\n`;
            const Xz = this._GetBoneOffset(zz);
            sz += `${Fz}    OFFSET ${Xz.x.toFixed(6)} ${Xz.y.toFixed(6)} ${Xz.z.toFixed(6)}\n`;
            const Oz = [];
            Wz.hasPositionChannels && Oz.push("Xposition", "Yposition", "Zposition"), Wz.hasRotationChannels && Oz.push("Zrotation", "Xrotation", "Yrotation"), Oz.length > 0 && (sz += `${Fz}    CHANNELS ${Oz.length} ${Oz.join(" ")}\n`), Wz.children.length > 0 && (sz += this._ExportHierarchy(Wz.children, tz + 1)), sz += `${Fz}}\n`
          }
        }
        return sz
      }
      static _IsEndSite(zz) {
        return 0 === zz.children.length
      }
      static _GetBoneOffset(zz) {
        try {
          if (!zz.getParent()) return zz.getRestMatrix().getTranslation();
          return zz.getLocalMatrix().getTranslation()
        } catch (tz) {
          return Fz.XD.Zero()
        }
      }
      static _ExportMotionData(zz, tz, sz, Fz) {
        let Wz = "";
        for (let Xz = 0; Xz < tz; Xz++) {
          const tz = [];
          this._CollectFrameValues(zz, Xz + sz, tz, Fz), Wz += tz.map((zz => zz.toFixed(6))).join(" ") + "\n"
        }
        return Wz
      }
      static _CollectFrameValues(zz, tz, sz, Fz) {
        for (const Wz of zz)
          if (!this._IsEndSite(Wz)) {
            if (Wz.hasPositionChannels) {
              const zz = this._GetPositionAtFrameIndex(Wz.positionKeys, tz);
              sz.push(zz.x, zz.y, zz.z)
            }
            if (Wz.hasRotationChannels) {
              const zz = this._GetRotationAtFrameIndex(Wz.rotationKeys, tz),
                Fz = this._QuaternionToEuler(zz);
              sz.push(Fz.z, Fz.x, Fz.y)
            }
            Wz.children.length > 0 && this._CollectFrameValues(Wz.children, tz, sz, Fz)
          }
      }
      static _GetPositionAtFrameIndex(zz, tz) {
        if (0 === zz.length) return Fz.XD.Zero();
        return zz[Math.max(0, Math.min(tz, zz.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(zz, tz) {
        if (0 === zz.length) return Fz.Quaternion.Identity();
        return zz[Math.max(0, Math.min(tz, zz.length - 1))].value.clone()
      }
      static _QuaternionToEuler(zz) {
        const tz = new Fz.Matrix;
        zz.toRotationMatrix(tz);
        const sz = tz.m;
        let Xz, Oz, oz;
        const vz = Math.sqrt(sz[0] * sz[0] + sz[1] * sz[1]);
        return vz > Ms.c ? (Xz = Math.atan2(sz[6], sz[10]), Oz = Math.atan2(-sz[2], vz), oz = Math.atan2(sz[1], sz[0])) : (Xz = Math.atan2(-sz[9], sz[5]), Oz = Math.atan2(-sz[2], vz), oz = 0), new Fz.XD(Wz.Tools.ToDegrees(Xz), Wz.Tools.ToDegrees(Oz), Wz.Tools.ToDegrees(oz))
      }
    }

    function GO(zz) {
      return "string" === typeof zz?.name
    }
    const TO = Symbol("__xml:meta$__"),
      cO = Symbol("__xml:name$__");

    function jO(zz, tz) {
      Object.prototype.hasOwnProperty.call(zz.metadata, TO) || (zz.metadata[TO] = []), zz.metadata[TO].push(tz)
    }

    function AO(zz) {
      return (tz, sz) => {
        tz[cO] = zz
      }
    }

    function yO() {
      return (zz, tz) => jO(tz, {
        kind: "none",
        prop: String(tz.name),
        ignore: !0
      })
    }

    function MO(zz) {
      return (tz, sz) => jO(sz, {
        kind: "attr",
        prop: String(sz.name),
        ...zz
      })
    }

    function dO(zz) {
      return (tz, sz) => jO(sz, {
        kind: "elem",
        prop: String(sz.name),
        ...zz
      })
    }

    function hO(zz) {
      const tz = "function" === typeof zz ? zz : zz?.constructor,
        sz = tz?.[Symbol.metadata];
      if (!sz) return [];
      const Fz = [];
      let Wz = sz;
      for (; Wz;) Object.prototype.hasOwnProperty.call(Wz, TO) && Fz.push(...Wz[TO]), Wz = Object.getPrototypeOf(Wz);
      return Fz
    }

    function QO(zz) {
      const tz = zz?.constructor?.[cO];
      return tz || void 0
    }

    function kO(zz) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(zz)
    }

    function iO(zz) {
      if (GO(zz)) return zz;
      const tz = (zz ?? "").trim();
      if (!tz) return {
        name: ""
      };
      const sz = tz.indexOf(":");
      if (-1 === sz) return {
        name: tz
      };
      if (-1 !== tz.indexOf(":", sz + 1)) return {
        name: tz
      };
      const Fz = tz.slice(0, sz),
        Wz = tz.slice(sz + 1);
      return kO(Fz) && kO(Wz) ? {
        ns: Fz,
        name: Wz
      } : {
        name: tz
      }
    }

    function LO(zz, tz) {
      return tz ? `${tz}:${zz}` : zz
    }
    const lO = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      nO = Object.freeze({
        number: lO
      });

    function aO(zz) {
      const tz = zz?.eps ?? lO.eps;
      return {
        eps: tz,
        maxDecimalsCap: zz?.maxDecimalsCap ?? lO.maxDecimalsCap,
        trimTrailingZeros: zz?.trimTrailingZeros ?? lO.trimTrailingZeros,
        fixedDecimals: zz?.fixedDecimals,
        allowScientific: zz?.allowScientific ?? lO.allowScientific,
        snapNearZero: zz?.snapNearZero ?? lO.snapNearZero,
        zeroThreshold: zz?.zeroThreshold ?? tz,
        perAttributeEps: zz?.perAttributeEps
      }
    }

    function qO(zz) {
      return {
        number: aO(zz?.number)
      }
    }
    class SO {
      constructor(zz) {
        if (this.o = zz, this._o = zz.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(zz) {
        if (!Number.isFinite(zz)) throw new Error(`Cannot format non-finite number: ${zz}`);
        const tz = this._o,
          sz = this._clampInt(tz.maxDecimalsCap ?? 15, 0, 20),
          Fz = tz.trimTrailingZeros ?? !0,
          Wz = tz.snapNearZero ?? !0,
          Xz = tz.zeroThreshold ?? tz.eps,
          Oz = 1 / tz.eps;
        let oz, vz = Math.round(zz * Oz) / Oz;
        if (Object.is(vz, -0) && (vz = 0), Wz && Math.abs(vz) <= Xz && (vz = 0), oz = void 0 !== tz.fixedDecimals ? this._clampInt(tz.fixedDecimals, 0, sz) : this._clampInt(Math.ceil(-Math.log10(tz.eps)), 0, sz), tz.allowScientific, 0 === oz) return String(Math.trunc(vz));
        let Uz = vz.toFixed(oz);
        if (Fz && void 0 === tz.fixedDecimals && (Uz = Uz.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Uz)) throw new Error(`Scientific notation not allowed in XML output: ${Uz}`);
        return Uz
      }
      _clampInt(zz, tz, sz) {
        return Number.isFinite(zz) ? (zz = Math.trunc(zz), Math.max(tz, Math.min(sz, zz))) : tz
      }
    }

    function VO(zz) {
      return zz instanceof Date
    }

    function RO(zz) {
      return "string" === typeof zz
    }

    function pO(zz) {
      return "string" === typeof zz || "number" === typeof zz || "boolean" === typeof zz || "bigint" === typeof zz || VO(zz)
    }

    function fO(zz) {
      return "number" === typeof zz || "boolean" === typeof zz || "bigint" === typeof zz || VO(zz)
    }
    class EO {
      constructor(zz, tz) {
        this._ns = new Map, this._prefixCount = 0, this._builder = zz, this._format = qO(tz), this._nFmt = new SO(this._format)
      }
      withNamespace() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        for (const Fz of tz) this._assignNamespace(Fz);
        return this
      }
      serialize(zz, tz) {
        if (!(tz = tz ?? QO(zz))) throw new Error("can not find name for given object");
        const sz = iO(tz);
        sz.ns && this._assignNamespace(sz.ns, "xmlns"), this._gatherNamespaces(zz, new WeakSet);
        const Fz = this._builder.ele(null, sz.name);
        for (const [Wz, Xz] of Array.from(this._ns.entries())) Fz.att("xmlns", Xz, Wz);
        this._writeObjectContent(Fz, zz, (new WeakSet).add(zz)), this._builder.end()
      }
      _writeObject(zz, tz, sz) {
        if (sz.has(tz)) return;
        if (sz.add(tz), Array.isArray(tz)) {
          for (const Fz of tz) fO(Fz) || (RO(Fz) ? this._builder.text(Fz) : this._writeObject(zz, Fz, sz));
          return
        }
        const Fz = QO(tz);
        if (!Fz) return;
        const Wz = iO(Fz),
          Xz = this._getPrefix(Wz),
          Oz = LO(Wz.name, Xz);
        zz.ele(null, Oz), this._writeObjectContent(zz, tz, sz), this._builder.end()
      }
      _getPrefix(zz) {
        if (zz.ns) {
          const tz = this._ns.get(zz.ns.toLowerCase());
          if ("xmlns" !== tz) return tz
        }
      }
      _writeObjectContent(zz, tz, sz) {
        const Fz = hO(tz) ?? [],
          Wz = new Map;
        for (const Oz of Fz) {
          const zz = Wz.get(Oz.prop) ?? [];
          zz.push(Oz), Wz.set(Oz.prop, zz)
        }
        const Xz = Object.keys(tz).sort(((zz, tz) => {
          const sz = (Wz.get(zz) ?? []).some((zz => "attr" === zz.kind));
          return sz === (Wz.get(tz) ?? []).some((zz => "attr" === zz.kind)) ? 0 : sz ? -1 : 1
        }));
        for (const Oz of Xz) {
          const Fz = tz[Oz];
          if (null === Fz || void 0 === Fz) continue;
          const Xz = Wz.get(Oz);
          if (Xz) {
            if (Xz.some((zz => !0 === zz.ignore || "none" === zz.kind))) continue;
            for (const tz of Xz) {
              const sz = tz.name ?? tz.prop.toLowerCase();
              if (sz) switch (tz.kind) {
                case "attr": {
                  let Wz = null;
                  if ("number" === typeof Fz && this._nFmt && (Wz = this._nFmt.toString(Fz)), tz.formatter) {
                    Wz = new tz.formatter(this._format).toString(Fz)
                  }
                  if (Wz = Wz ?? Fz.toString(), Wz) {
                    const tz = iO(sz),
                      Fz = this._getPrefix(tz),
                      Xz = LO(tz.name, Fz);
                    zz.att(null, Xz, Wz)
                  }
                  break
                }
              }
            }
          } else fO(Fz) || (RO(Fz) ? this._builder.text(Fz) : this._writeObject(zz, Fz, sz))
        }
      }
      _gatherNamespaces(zz, tz) {
        if (tz.has(zz)) return;
        if (tz.add(zz), Array.isArray(zz)) {
          for (const sz of zz) pO(sz) || this._gatherNamespaces(sz, tz);
          return
        }
        const sz = QO(zz);
        sz && this._assignNamespace(sz);
        const Fz = hO(zz) ?? [],
          Wz = new Map;
        for (const Oz of Fz) {
          const zz = Wz.get(Oz.prop) ?? [];
          zz.push(Oz), Wz.set(Oz.prop, zz)
        }
        const Xz = [];
        for (const Oz of Object.keys(zz)) {
          const tz = zz[Oz];
          if (null === tz || void 0 === tz) continue;
          const sz = Wz.get(Oz);
          if (sz) {
            if (sz.some((zz => !0 === zz.ignore || "none" === zz.kind))) continue;
            for (const zz of sz) zz.name && this._assignNamespace(zz.name)
          }
          Xz.push(tz)
        }
        for (const Oz of Xz) pO(Oz) || this._gatherNamespaces(Oz, tz)
      }
      _assignNamespace(zz, tz) {
        const sz = iO(zz);
        if (sz?.ns) {
          const zz = sz.ns.toLowerCase();
          this._ns.get(zz) || this._ns.set(zz, tz ?? this._buildNsPrefix(zz))
        } else if ("xmlns" === tz) {
          const zz = sz.name.toLowerCase();
          this._ns.get(zz) || this._ns.set(zz, tz ?? this._buildNsPrefix(zz))
        }
      }
      _buildNsPrefix(zz) {
        let tz, sz = !1;
        do {
          tz = "ns" + this._prefixCount++;
          for (const zz of Array.from(this._ns.values()))
            if (zz === tz) {
              sz = !0;
              break
            }
        } while (sz);
        return tz
      }
    }
    class zo {}
    var to;
    zo.OpenTag = "<", zo.CloseTag = ">", zo.Slash = "/", zo.Question = "?", zo.Quote = '"', zo.Equal = "=", zo.Space = " ", zo.Semicolon = ":", zo.Dec = "<?xml", zo.Xml = "xml", zo.Xmlns = "xmlns", zo.Xsi = "xsi", zo.VersionKeyword = "version", zo.EncodingKeyword = "encoding", zo.StandaloneKeyword = "standalone",
      function(zz) {
        zz[zz.Declaration = 0] = "Declaration", zz[zz.Tag = 1] = "Tag", zz[zz.Attribute = 2] = "Attribute", zz[zz.Text = 3] = "Text"
      }(to || (to = {}));
    class so {
      constructor(zz) {
        this._ctxStack = [], this._d = 0, this._w = zz
      }
      dec(zz, tz, sz) {
        return this._w.write(zo.Dec), this._writeAttStr(zo.VersionKeyword, zz), tz && this._writeAttStr(zo.EncodingKeyword, tz), void 0 !== sz && this._writeAttStr(zo.StandaloneKeyword, sz ? "yes" : "no"), this._w.write(zo.Question, zo.CloseTag), this
      }
      att(zz, tz, sz) {
        const Fz = this._peekContext();
        if (!Fz) throw new Error("att() without open element");
        if (Fz.closed) throw new Error(`att() after start tag closed for <${Fz.name}>`);
        if (this._isXmlnsDecl(zz, tz)) {
          if (tz === zo.Xmlns) Fz.defaultNs = sz, this._registerNamespace(Fz, "", sz), this._writeAttStr(zo.Xmlns, sz);
          else if (zz) this._registerNamespace(Fz, tz, sz), this._writeAttStr(`${zz}:${tz}`, sz);
          else {
            const zz = tz.slice(6);
            this._registerNamespace(Fz, zz, sz), this._writeAttStr(tz, sz)
          }
          return Fz.lastToken = to.Attribute, this
        }
        let Wz = tz;
        if (zz) {
          Wz = `${this._ensurePrefixDeclared(Fz,zz)}:${tz}`
        }
        return Fz.lastToken = to.Attribute, this._writeAttStr(Wz, sz), this
      }
      ele(zz, tz) {
        const sz = this._peekContext();
        sz && this._closeOpenTagIfNeeded(sz);
        let Fz = tz;
        if (zz) {
          Fz = `${this._lookupPrefix(zz)??zz}:${tz}`
        }
        return this._pushContext(Fz, ++this._d), this._w.write(zo.OpenTag, Fz), this
      }
      text(zz) {
        const tz = this._peekContext();
        if (!tz) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(tz), tz.lastToken = to.Text, this._w.write(this._escText(zz)), this
      }
      end() {
        const zz = this._popContext();
        return zz && (this._d--, zz.closed ? this._w.write(zo.OpenTag, zo.Slash, zz.name, zo.CloseTag) : this._w.write(zo.Slash, zo.CloseTag)), this
      }
      _pushContext(zz, tz) {
        const sz = new so.Context(zz, tz);
        return this._ctxStack.push(sz), sz
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
      _writeAttStr(zz, tz) {
        this._w.write(zo.Space, zz, zo.Equal, zo.Quote, this._escAttr(tz), zo.Quote)
      }
      _lookupPrefix(zz) {
        let tz = this._ctxStack.length - 1;
        if (tz >= 0)
          do {
            const sz = this._ctxStack[tz--],
              Fz = sz.ns2prefix?.get(zz);
            if (Fz) return Fz
          } while (tz >= 0)
      }
      _escText(zz) {
        return zz.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(zz) {
        return this._escText(zz).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(zz, tz) {
        if (zz) return zz === zo.Xmlns;
        const sz = tz.length,
          Fz = zo.Xmlns.length;
        return sz >= Fz && (tz.startsWith(zo.Xmlns) && (tz.length == Fz || tz[Fz] == zo.Semicolon))
      }
      _registerNamespace(zz, tz, sz) {
        if (tz === zo.Xml || tz === zo.Xmlns) throw new Error(`reserved prefix '${tz}'`);
        const Fz = zz.prefix2ns.get(tz);
        if (Fz && Fz !== sz) throw new Error(`prefix '${tz}' already bound to a different namespace`);
        zz.ns2prefix.get(sz) || zz.ns2prefix.set(sz, tz), zz.prefix2ns.set(tz, sz)
      }
      _allocPrefix(zz) {
        let tz = 1;
        for (;;) {
          const sz = "ns" + tz++;
          if (!zz.prefix2ns.has(sz)) return sz
        }
      }
      _ensurePrefixDeclared(zz, tz) {
        const sz = this._lookupPrefix(tz);
        if (sz) return sz;
        if (zz.closed) throw new Error(`can not declare namespace after start tag closed for <${zz.name}>`);
        const Fz = this._allocPrefix(zz);
        return this._writeAttStr(`${zo.Xmlns}:${Fz}`, tz), this._registerNamespace(zz, Fz, tz), Fz
      }
      _closeOpenTagIfNeeded(zz) {
        zz.closed || (this._w.write(zo.CloseTag), zz.closed = !0)
      }
    }
    so.Context = class {
      constructor(zz, tz) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = zz, this.depth = tz
      }
    };
    class Fo {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        if (0 === tz.length) return this;
        const Fz = tz.join("");
        return this._chunks.push(Fz), this.count += Fz.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Wo {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = zz, this._opts = tz, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        if (0 === tz.length) return this;
        const Fz = tz.join("");
        if (0 === Fz.length) return this;
        this._pending += Fz, this._pendingChars += Fz.length;
        const Wz = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Wz && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const zz = this._encoder.encode(this._pending);
        return this._sink.push(zz), this.count += zz.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const Xo = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      Oo = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var oo, vo;
    ! function(zz) {
      zz.micron = "micron", zz.millimeter = "millimeter", zz.centimeter = "centimeter", zz.inch = "inch", zz.foot = "foot", zz.meter = "meter"
    }(oo || (oo = {})),
    function(zz) {
      zz.model = "model", zz.solidsupport = "solidsupport", zz.support = "support", zz.surface = "surface", zz.other = "other"
    }(vo || (vo = {}));
    const Uo = "http://schemas.openxmlformats.org/package/2006/content-types",
      Ko = "http://schemas.openxmlformats.org/package/2006/relationships";
    var uo;
    ! function(zz) {
      zz.Relationships = "application/vnd.openxmlformats-package.relationships+xml", zz.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", zz.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", zz.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", zz.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", zz.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", zz.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", zz.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", zz.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", zz.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", zz.Png = "image/png", zz.Jpeg = "image/jpeg", zz.Tiff = "image/tiff", zz.Xml = "application/xml"
    }(uo || (uo = {}));
    const No = "_rels/",
      bo = "3D/",
      wo = "3dmodel.model",
      Do = ".rels",
      go = "[Content_Types].xml";
    class Ho {
      static IsKnown(zz) {
        return Ho.Known.has(zz)
      }
      static IsThreeDimModel(zz) {
        return zz === Ho.ThreeDimModel
      }
    }
    Ho.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", Ho.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", Ho.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", Ho.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", Ho.Known = new Set([Ho.ThreeDimModel, Ho.Thumbnail, Ho.PrintTicket, Ho.MustPreserve]);
    let Bo = (() => {
        let zz, tz, sz = [AO({
            ns: Uo,
            name: "Types"
          })],
          Fz = [];
        tz = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Iz.n)(tz, "ThreeMfContentTypes"), (() => {
          const Wz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Iz.h)(null, zz = {
            value: tz
          }, sz, {
            kind: "class",
            name: tz.name,
            metadata: Wz
          }, null, Fz), tz = zz.value, Wz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wz
          }), (0, Iz.k)(tz, Fz)
        })(), tz
      })(),
      Po = (() => {
        let zz, tz, sz, Fz, Wz = [AO({
            ns: Uo,
            name: "Default"
          })],
          Xz = [],
          Oz = [],
          oz = [],
          vz = [],
          Uz = [];
        tz = class {
          constructor(zz, tz) {
            this.ext = (0, Iz.k)(this, Oz, void 0), this.ct = ((0, Iz.k)(this, oz), (0, Iz.k)(this, vz, void 0)), (0, Iz.k)(this, Uz), this.ext = zz, this.ct = tz
          }
        };
        return (0, Iz.n)(tz, "ThreeMfContentType"), (() => {
          const Kz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sz = [MO({
            name: {
              ns: Uo,
              name: "Extension"
            }
          })], Fz = [MO({
            name: {
              ns: Uo,
              name: "ContentType"
            }
          })], (0, Iz.h)(null, null, sz, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: zz => "ext" in zz,
              get: zz => zz.ext,
              set: (zz, tz) => {
                zz.ext = tz
              }
            },
            metadata: Kz
          }, Oz, oz), (0, Iz.h)(null, null, Fz, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: zz => "ct" in zz,
              get: zz => zz.ct,
              set: (zz, tz) => {
                zz.ct = tz
              }
            },
            metadata: Kz
          }, vz, Uz), (0, Iz.h)(null, zz = {
            value: tz
          }, Wz, {
            kind: "class",
            name: tz.name,
            metadata: Kz
          }, null, Xz), tz = zz.value, Kz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Kz
          }), (0, Iz.k)(tz, Xz)
        })(), tz
      })(),
      ro = (() => {
        let zz, tz, sz = [AO({
            ns: Ko,
            name: "Relationships"
          })],
          Fz = [];
        tz = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Iz.n)(tz, "ThreeMfRelationships"), (() => {
          const Wz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Iz.h)(null, zz = {
            value: tz
          }, sz, {
            kind: "class",
            name: tz.name,
            metadata: Wz
          }, null, Fz), tz = zz.value, Wz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wz
          }), (0, Iz.k)(tz, Fz)
        })(), tz
      })(),
      Yo = (() => {
        let zz, tz, sz, Fz, Wz, Xz = [AO({
            ns: Ko,
            name: "Relationship"
          })],
          Oz = [],
          oz = [],
          vz = [],
          Uz = [],
          Kz = [],
          uz = [],
          Nz = [];
        tz = class {
          constructor(zz, tz, sz) {
            this.id = (0, Iz.k)(this, oz, void 0), this.type = ((0, Iz.k)(this, vz), (0, Iz.k)(this, Uz, void 0)), this.target = ((0, Iz.k)(this, Kz), (0, Iz.k)(this, uz, void 0)), (0, Iz.k)(this, Nz), this.id = zz, this.type = tz, this.target = sz
          }
        };
        return (0, Iz.n)(tz, "ThreeMfRelationship"), (() => {
          const bz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sz = [MO({
            name: "Id"
          })], Fz = [MO({
            name: "Type"
          })], Wz = [MO({
            name: "Target"
          })], (0, Iz.h)(null, null, sz, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: zz => "id" in zz,
              get: zz => zz.id,
              set: (zz, tz) => {
                zz.id = tz
              }
            },
            metadata: bz
          }, oz, vz), (0, Iz.h)(null, null, Fz, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: zz => "type" in zz,
              get: zz => zz.type,
              set: (zz, tz) => {
                zz.type = tz
              }
            },
            metadata: bz
          }, Uz, Kz), (0, Iz.h)(null, null, Wz, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: zz => "target" in zz,
              get: zz => zz.target,
              set: (zz, tz) => {
                zz.target = tz
              }
            },
            metadata: bz
          }, uz, Nz), (0, Iz.h)(null, zz = {
            value: tz
          }, Xz, {
            kind: "class",
            name: tz.name,
            metadata: bz
          }, null, Oz), tz = zz.value, bz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bz
          }), (0, Iz.k)(tz, Oz)
        })(), tz
      })();
    class xo {
      constructor(zz, tz, sz) {
        this.contentTypes = zz, this.relationships = tz, this.model = sz
      }
    }
    class mo {
      static Zero() {
        return new mo([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(zz) {
        this.values = zz
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class Jo {
      constructor(zz) {
        this.o = zz, this._f = new SO(zz)
      }
      toString(zz) {
        return zz.values.map((zz => this._f.toString(zz))).join(" ")
      }
    }
    let Io = (() => {
        let zz, tz, sz, Fz, Wz, Xz = [AO({
            ns: Xo,
            name: "model"
          })],
          Oz = [],
          oz = [],
          vz = [],
          Uz = [],
          Kz = [],
          uz = [],
          Nz = [];
        tz = class {
          constructor() {
            this.unit = (0, Iz.k)(this, oz, oo.millimeter), this.requiredextensions = ((0, Iz.k)(this, vz), (0, Iz.k)(this, Uz, void 0)), this.recommendedextensions = ((0, Iz.k)(this, Kz), (0, Iz.k)(this, uz, void 0)), this.metadata = (0, Iz.k)(this, Nz)
          }
        };
        return (0, Iz.n)(tz, "ThreeMfModel"), (() => {
          const bz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sz = [MO({
            name: "unit"
          })], Fz = [MO({
            name: "requiredextensions"
          })], Wz = [MO({
            name: "recommendedextensions"
          })], (0, Iz.h)(null, null, sz, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: zz => "unit" in zz,
              get: zz => zz.unit,
              set: (zz, tz) => {
                zz.unit = tz
              }
            },
            metadata: bz
          }, oz, vz), (0, Iz.h)(null, null, Fz, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: zz => "requiredextensions" in zz,
              get: zz => zz.requiredextensions,
              set: (zz, tz) => {
                zz.requiredextensions = tz
              }
            },
            metadata: bz
          }, Uz, Kz), (0, Iz.h)(null, null, Wz, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: zz => "recommendedextensions" in zz,
              get: zz => zz.recommendedextensions,
              set: (zz, tz) => {
                zz.recommendedextensions = tz
              }
            },
            metadata: bz
          }, uz, Nz), (0, Iz.h)(null, zz = {
            value: tz
          }, Xz, {
            kind: "class",
            name: tz.name,
            metadata: bz
          }, null, Oz), tz = zz.value, bz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bz
          })
        })(), tz.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, Iz.k)(tz, Oz), tz
      })(),
      Co = (() => {
        let zz, tz, sz, Fz, Wz, Xz = [AO({
            ns: Xo,
            name: "meta"
          })],
          Oz = [],
          oz = [],
          vz = [],
          Uz = [],
          Kz = [],
          uz = [],
          Nz = [];
        tz = class {
          constructor(zz, tz, sz, Fz) {
            this.name = (0, Iz.k)(this, oz, void 0), this.preserve = ((0, Iz.k)(this, vz), (0, Iz.k)(this, Uz, void 0)), this.type = ((0, Iz.k)(this, Kz), (0, Iz.k)(this, uz, void 0)), this.value = (0, Iz.k)(this, Nz), this.name = zz, this.value = tz, this.preserve = sz, this.type = Fz
          }
        };
        return (0, Iz.n)(tz, "ThreeMfMeta"), (() => {
          const bz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sz = [MO({
            name: "name"
          })], Fz = [MO({
            name: "preserve"
          })], Wz = [MO({
            name: "type"
          })], (0, Iz.h)(null, null, sz, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: zz => "name" in zz,
              get: zz => zz.name,
              set: (zz, tz) => {
                zz.name = tz
              }
            },
            metadata: bz
          }, oz, vz), (0, Iz.h)(null, null, Fz, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: zz => "preserve" in zz,
              get: zz => zz.preserve,
              set: (zz, tz) => {
                zz.preserve = tz
              }
            },
            metadata: bz
          }, Uz, Kz), (0, Iz.h)(null, null, Wz, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: zz => "type" in zz,
              get: zz => zz.type,
              set: (zz, tz) => {
                zz.type = tz
              }
            },
            metadata: bz
          }, uz, Nz), (0, Iz.h)(null, zz = {
            value: tz
          }, Xz, {
            kind: "class",
            name: tz.name,
            metadata: bz
          }, null, Oz), tz = zz.value, bz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bz
          }), (0, Iz.k)(tz, Oz)
        })(), tz
      })(),
      eo = (() => {
        let zz, tz, sz = [AO({
            ns: Xo,
            name: "metadatagroup"
          })],
          Fz = [];
        tz = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, Iz.n)(tz, "ThreeMfMetadataGroup"), (() => {
          const Wz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Iz.h)(null, zz = {
            value: tz
          }, sz, {
            kind: "class",
            name: tz.name,
            metadata: Wz
          }, null, Fz), tz = zz.value, Wz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wz
          }), (0, Iz.k)(tz, Fz)
        })(), tz
      })(),
      Zo = (() => {
        let zz, tz, sz = [AO({
            ns: Xo,
            name: "resources"
          })],
          Fz = [];
        tz = class {
          constructor() {
            this.object = []
          }
        };
        return (0, Iz.n)(tz, "ThreeMfResources"), (() => {
          const Wz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Iz.h)(null, zz = {
            value: tz
          }, sz, {
            kind: "class",
            name: tz.name,
            metadata: Wz
          }, null, Fz), tz = zz.value, Wz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wz
          }), (0, Iz.k)(tz, Fz)
        })(), tz
      })(),
      Go = (() => {
        let zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz = [AO({
            ns: Xo,
            name: "object"
          })],
          Kz = [],
          uz = [],
          Nz = [],
          bz = [],
          wz = [],
          Dz = [],
          gz = [],
          Hz = [],
          Bz = [],
          Pz = [],
          rz = [],
          Yz = [],
          xz = [],
          mz = [],
          Jz = [];
        tz = class {
          constructor(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vo.model;
            this.id = (0, Iz.k)(this, uz, void 0), this.type = ((0, Iz.k)(this, Nz), (0, Iz.k)(this, bz, void 0)), this.thumbnail = ((0, Iz.k)(this, wz), (0, Iz.k)(this, Dz, void 0)), this.partnumber = ((0, Iz.k)(this, gz), (0, Iz.k)(this, Hz, void 0)), this.name = ((0, Iz.k)(this, Bz), (0, Iz.k)(this, Pz, void 0)), this.pid = ((0, Iz.k)(this, rz), (0, Iz.k)(this, Yz, void 0)), this.pindex = ((0, Iz.k)(this, xz), (0, Iz.k)(this, mz, void 0)), this.metadatagroup = (0, Iz.k)(this, Jz), this.id = zz, this.type = tz
          }
        };
        return (0, Iz.n)(tz, "ThreeMfObject"), (() => {
          const Cz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sz = [MO({
            name: "id"
          })], Fz = [MO({
            name: "type"
          })], Wz = [MO({
            name: "thumbnail"
          })], Xz = [MO({
            name: "partnumber"
          })], Oz = [MO({
            name: "name"
          })], oz = [MO({
            name: "pid"
          })], vz = [MO({
            name: "pindex"
          })], (0, Iz.h)(null, null, sz, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: zz => "id" in zz,
              get: zz => zz.id,
              set: (zz, tz) => {
                zz.id = tz
              }
            },
            metadata: Cz
          }, uz, Nz), (0, Iz.h)(null, null, Fz, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: zz => "type" in zz,
              get: zz => zz.type,
              set: (zz, tz) => {
                zz.type = tz
              }
            },
            metadata: Cz
          }, bz, wz), (0, Iz.h)(null, null, Wz, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: zz => "thumbnail" in zz,
              get: zz => zz.thumbnail,
              set: (zz, tz) => {
                zz.thumbnail = tz
              }
            },
            metadata: Cz
          }, Dz, gz), (0, Iz.h)(null, null, Xz, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: zz => "partnumber" in zz,
              get: zz => zz.partnumber,
              set: (zz, tz) => {
                zz.partnumber = tz
              }
            },
            metadata: Cz
          }, Hz, Bz), (0, Iz.h)(null, null, Oz, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: zz => "name" in zz,
              get: zz => zz.name,
              set: (zz, tz) => {
                zz.name = tz
              }
            },
            metadata: Cz
          }, Pz, rz), (0, Iz.h)(null, null, oz, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: zz => "pid" in zz,
              get: zz => zz.pid,
              set: (zz, tz) => {
                zz.pid = tz
              }
            },
            metadata: Cz
          }, Yz, xz), (0, Iz.h)(null, null, vz, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: zz => "pindex" in zz,
              get: zz => zz.pindex,
              set: (zz, tz) => {
                zz.pindex = tz
              }
            },
            metadata: Cz
          }, mz, Jz), (0, Iz.h)(null, zz = {
            value: tz
          }, Uz, {
            kind: "class",
            name: tz.name,
            metadata: Cz
          }, null, Kz), tz = zz.value, Cz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Cz
          }), (0, Iz.k)(tz, Kz)
        })(), tz
      })(),
      To = (() => {
        let zz, tz, sz = [AO({
            ns: Xo,
            name: "mesh"
          })],
          Fz = [];
        tz = class {
          constructor(zz, tz) {
            this.vertices = zz ?? new co, this.triangles = tz ?? new Ao
          }
        };
        return (0, Iz.n)(tz, "ThreeMfMesh"), (() => {
          const Wz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Iz.h)(null, zz = {
            value: tz
          }, sz, {
            kind: "class",
            name: tz.name,
            metadata: Wz
          }, null, Fz), tz = zz.value, Wz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wz
          }), (0, Iz.k)(tz, Fz)
        })(), tz
      })(),
      co = (() => {
        let zz, tz, sz = [AO({
            ns: Xo,
            name: "vertices"
          })],
          Fz = [];
        tz = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, Iz.n)(tz, "ThreeMfVertices"), (() => {
          const Wz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Iz.h)(null, zz = {
            value: tz
          }, sz, {
            kind: "class",
            name: tz.name,
            metadata: Wz
          }, null, Fz), tz = zz.value, Wz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wz
          }), (0, Iz.k)(tz, Fz)
        })(), tz
      })(),
      jo = (() => {
        let zz, tz, sz, Fz, Wz, Xz = [AO({
            ns: Xo,
            name: "vertex"
          })],
          Oz = [],
          oz = [],
          vz = [],
          Uz = [],
          Kz = [],
          uz = [],
          Nz = [];
        tz = class {
          constructor() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, Iz.k)(this, oz, void 0), this.y = ((0, Iz.k)(this, vz), (0, Iz.k)(this, Uz, void 0)), this.z = ((0, Iz.k)(this, Kz), (0, Iz.k)(this, uz, void 0)), (0, Iz.k)(this, Nz), this.x = zz, this.y = tz, this.z = sz
          }
        };
        return (0, Iz.n)(tz, "ThreeMfVertex"), (() => {
          const bz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sz = [MO({
            name: "x"
          })], Fz = [MO({
            name: "y"
          })], Wz = [MO({
            name: "z"
          })], (0, Iz.h)(null, null, sz, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: zz => "x" in zz,
              get: zz => zz.x,
              set: (zz, tz) => {
                zz.x = tz
              }
            },
            metadata: bz
          }, oz, vz), (0, Iz.h)(null, null, Fz, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: zz => "y" in zz,
              get: zz => zz.y,
              set: (zz, tz) => {
                zz.y = tz
              }
            },
            metadata: bz
          }, Uz, Kz), (0, Iz.h)(null, null, Wz, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: zz => "z" in zz,
              get: zz => zz.z,
              set: (zz, tz) => {
                zz.z = tz
              }
            },
            metadata: bz
          }, uz, Nz), (0, Iz.h)(null, zz = {
            value: tz
          }, Xz, {
            kind: "class",
            name: tz.name,
            metadata: bz
          }, null, Oz), tz = zz.value, bz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bz
          }), (0, Iz.k)(tz, Oz)
        })(), tz
      })(),
      Ao = (() => {
        let zz, tz, sz = [AO({
            ns: Xo,
            name: "triangles"
          })],
          Fz = [];
        tz = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, Iz.n)(tz, "ThreeMfTriangles"), (() => {
          const Wz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Iz.h)(null, zz = {
            value: tz
          }, sz, {
            kind: "class",
            name: tz.name,
            metadata: Wz
          }, null, Fz), tz = zz.value, Wz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wz
          }), (0, Iz.k)(tz, Fz)
        })(), tz
      })(),
      yo = (() => {
        let zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz = [AO({
            ns: Xo,
            name: "triangle"
          })],
          Kz = [],
          uz = [],
          Nz = [],
          bz = [],
          wz = [],
          Dz = [],
          gz = [],
          Hz = [],
          Bz = [],
          Pz = [],
          rz = [],
          Yz = [],
          xz = [],
          mz = [],
          Jz = [];
        tz = class {
          constructor(zz, tz, sz) {
            this.v1 = (0, Iz.k)(this, uz, void 0), this.v2 = ((0, Iz.k)(this, Nz), (0, Iz.k)(this, bz, void 0)), this.v3 = ((0, Iz.k)(this, wz), (0, Iz.k)(this, Dz, void 0)), this.p1 = ((0, Iz.k)(this, gz), (0, Iz.k)(this, Hz, void 0)), this.p2 = ((0, Iz.k)(this, Bz), (0, Iz.k)(this, Pz, void 0)), this.p3 = ((0, Iz.k)(this, rz), (0, Iz.k)(this, Yz, void 0)), this.pid = ((0, Iz.k)(this, xz), (0, Iz.k)(this, mz, void 0)), (0, Iz.k)(this, Jz), this.v1 = zz, this.v2 = tz, this.v3 = sz
          }
        };
        return (0, Iz.n)(tz, "ThreeMfTriangle"), (() => {
          const Cz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sz = [MO({
            name: "v1"
          })], Fz = [MO({
            name: "v2"
          })], Wz = [MO({
            name: "v3"
          })], Xz = [MO({
            name: "p1"
          })], Oz = [MO({
            name: "p2"
          })], oz = [MO({
            name: "p3"
          })], vz = [MO({
            name: "pid"
          })], (0, Iz.h)(null, null, sz, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: zz => "v1" in zz,
              get: zz => zz.v1,
              set: (zz, tz) => {
                zz.v1 = tz
              }
            },
            metadata: Cz
          }, uz, Nz), (0, Iz.h)(null, null, Fz, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: zz => "v2" in zz,
              get: zz => zz.v2,
              set: (zz, tz) => {
                zz.v2 = tz
              }
            },
            metadata: Cz
          }, bz, wz), (0, Iz.h)(null, null, Wz, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: zz => "v3" in zz,
              get: zz => zz.v3,
              set: (zz, tz) => {
                zz.v3 = tz
              }
            },
            metadata: Cz
          }, Dz, gz), (0, Iz.h)(null, null, Xz, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: zz => "p1" in zz,
              get: zz => zz.p1,
              set: (zz, tz) => {
                zz.p1 = tz
              }
            },
            metadata: Cz
          }, Hz, Bz), (0, Iz.h)(null, null, Oz, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: zz => "p2" in zz,
              get: zz => zz.p2,
              set: (zz, tz) => {
                zz.p2 = tz
              }
            },
            metadata: Cz
          }, Pz, rz), (0, Iz.h)(null, null, oz, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: zz => "p3" in zz,
              get: zz => zz.p3,
              set: (zz, tz) => {
                zz.p3 = tz
              }
            },
            metadata: Cz
          }, Yz, xz), (0, Iz.h)(null, null, vz, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: zz => "pid" in zz,
              get: zz => zz.pid,
              set: (zz, tz) => {
                zz.pid = tz
              }
            },
            metadata: Cz
          }, mz, Jz), (0, Iz.h)(null, zz = {
            value: tz
          }, Uz, {
            kind: "class",
            name: tz.name,
            metadata: Cz
          }, null, Kz), tz = zz.value, Cz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Cz
          }), (0, Iz.k)(tz, Kz)
        })(), tz
      })(),
      Mo = (() => {
        let zz, tz, sz = [AO({
            ns: Xo,
            name: "components"
          })],
          Fz = [];
        tz = class {
          constructor() {
            this.component = []
          }
        };
        return (0, Iz.n)(tz, "ThreeMfComponents"), (() => {
          const Wz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Iz.h)(null, zz = {
            value: tz
          }, sz, {
            kind: "class",
            name: tz.name,
            metadata: Wz
          }, null, Fz), tz = zz.value, Wz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wz
          }), (0, Iz.k)(tz, Fz)
        })(), tz
      })(),
      ho = (() => {
        let zz, tz, sz, Fz, Wz = [AO({
            ns: Xo,
            name: "component"
          })],
          Xz = [],
          Oz = [],
          oz = [],
          vz = [],
          Uz = [];
        tz = class {
          constructor(zz, tz) {
            this.objectid = (0, Iz.k)(this, Oz, void 0), this.transform = ((0, Iz.k)(this, oz), (0, Iz.k)(this, vz, void 0)), (0, Iz.k)(this, Uz), this.objectid = zz, this.transform = tz
          }
        };
        return (0, Iz.n)(tz, "ThreeMfComponent"), (() => {
          const Kz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sz = [MO({
            name: "objectid"
          })], Fz = [MO({
            name: "transform",
            formatter: Jo
          })], (0, Iz.h)(null, null, sz, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: zz => "objectid" in zz,
              get: zz => zz.objectid,
              set: (zz, tz) => {
                zz.objectid = tz
              }
            },
            metadata: Kz
          }, Oz, oz), (0, Iz.h)(null, null, Fz, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: zz => "transform" in zz,
              get: zz => zz.transform,
              set: (zz, tz) => {
                zz.transform = tz
              }
            },
            metadata: Kz
          }, vz, Uz), (0, Iz.h)(null, zz = {
            value: tz
          }, Wz, {
            kind: "class",
            name: tz.name,
            metadata: Kz
          }, null, Xz), tz = zz.value, Kz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Kz
          }), (0, Iz.k)(tz, Xz)
        })(), tz
      })(),
      Qo = (() => {
        let zz, tz, sz, Fz = [AO({
            ns: Xo,
            name: "basematerials"
          })],
          Wz = [],
          Xz = [],
          Oz = [];
        tz = class {
          constructor(zz) {
            this.id = (0, Iz.k)(this, Xz, void 0), this.base = ((0, Iz.k)(this, Oz), []), this.id = zz
          }
        };
        return (0, Iz.n)(tz, "ThreeMfBaseMaterials"), (() => {
          const oz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sz = [MO({
            name: "id"
          })], (0, Iz.h)(null, null, sz, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: zz => "id" in zz,
              get: zz => zz.id,
              set: (zz, tz) => {
                zz.id = tz
              }
            },
            metadata: oz
          }, Xz, Oz), (0, Iz.h)(null, zz = {
            value: tz
          }, Fz, {
            kind: "class",
            name: tz.name,
            metadata: oz
          }, null, Wz), tz = zz.value, oz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oz
          }), (0, Iz.k)(tz, Wz)
        })(), tz
      })(),
      ko = (() => {
        let zz, tz, sz, Fz, Wz = [AO({
            ns: Xo,
            name: "base"
          })],
          Xz = [],
          Oz = [],
          oz = [],
          vz = [],
          Uz = [];
        tz = class {
          constructor(zz, tz) {
            this.name = (0, Iz.k)(this, Oz, void 0), this.displaycolor = ((0, Iz.k)(this, oz), (0, Iz.k)(this, vz, void 0)), (0, Iz.k)(this, Uz), this.name = zz, this.displaycolor = tz
          }
        };
        return (0, Iz.n)(tz, "ThreeMfBase"), (() => {
          const Kz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sz = [MO({
            name: "name"
          })], Fz = [MO({
            name: "displaycolor"
          })], (0, Iz.h)(null, null, sz, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: zz => "name" in zz,
              get: zz => zz.name,
              set: (zz, tz) => {
                zz.name = tz
              }
            },
            metadata: Kz
          }, Oz, oz), (0, Iz.h)(null, null, Fz, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: zz => "displaycolor" in zz,
              get: zz => zz.displaycolor,
              set: (zz, tz) => {
                zz.displaycolor = tz
              }
            },
            metadata: Kz
          }, vz, Uz), (0, Iz.h)(null, zz = {
            value: tz
          }, Wz, {
            kind: "class",
            name: tz.name,
            metadata: Kz
          }, null, Xz), tz = zz.value, Kz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Kz
          }), (0, Iz.k)(tz, Xz)
        })(), tz
      })(),
      io = (() => {
        let zz, tz, sz = [AO({
            ns: Xo,
            name: "build"
          })],
          Fz = [];
        tz = class {
          constructor() {
            this.item = []
          }
        };
        return (0, Iz.n)(tz, "ThreeMfBuild"), (() => {
          const Wz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Iz.h)(null, zz = {
            value: tz
          }, sz, {
            kind: "class",
            name: tz.name,
            metadata: Wz
          }, null, Fz), tz = zz.value, Wz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wz
          }), (0, Iz.k)(tz, Fz)
        })(), tz
      })(),
      Lo = (() => {
        let zz, tz, sz, Fz, Wz, Xz = [AO({
            ns: Xo,
            name: "item"
          })],
          Oz = [],
          oz = [],
          vz = [],
          Uz = [],
          Kz = [],
          uz = [],
          Nz = [];
        tz = class {
          constructor(zz, tz, sz) {
            this.objectid = (0, Iz.k)(this, oz, void 0), this.transform = ((0, Iz.k)(this, vz), (0, Iz.k)(this, Uz, void 0)), this.partnumber = ((0, Iz.k)(this, Kz), (0, Iz.k)(this, uz, void 0)), this.metadatagroup = (0, Iz.k)(this, Nz), this.objectid = zz, this.transform = tz, this.partnumber = sz
          }
        };
        return (0, Iz.n)(tz, "ThreeMfItem"), (() => {
          const bz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          sz = [MO({
            name: "objectid"
          })], Fz = [MO({
            name: "transform",
            formatter: Jo
          })], Wz = [MO({
            name: "partnumber"
          })], (0, Iz.h)(null, null, sz, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: zz => "objectid" in zz,
              get: zz => zz.objectid,
              set: (zz, tz) => {
                zz.objectid = tz
              }
            },
            metadata: bz
          }, oz, vz), (0, Iz.h)(null, null, Fz, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: zz => "transform" in zz,
              get: zz => zz.transform,
              set: (zz, tz) => {
                zz.transform = tz
              }
            },
            metadata: bz
          }, Uz, Kz), (0, Iz.h)(null, null, Wz, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: zz => "partnumber" in zz,
              get: zz => zz.partnumber,
              set: (zz, tz) => {
                zz.partnumber = tz
              }
            },
            metadata: bz
          }, uz, Nz), (0, Iz.h)(null, zz = {
            value: tz
          }, Xz, {
            kind: "class",
            name: tz.name,
            metadata: bz
          }, null, Oz), tz = zz.value, bz && Object.defineProperty(tz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bz
          }), (0, Iz.k)(tz, Oz)
        })(), tz
      })();
    class no {
      constructor(zz, tz) {
        this._object = new Go(zz, tz)
      }
      withName(zz) {
        return this._object.name = zz, this
      }
      withThumbnail(zz) {
        return this._object.thumbnail = zz, this
      }
      withProperty(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = zz, this._object.id = tz, this
      }
      build() {
        return this._object
      }
      reset(zz, tz) {
        this._object = new Go(zz, tz)
      }
    }
    class ao extends no {
      constructor(zz) {
        super(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vo.model), this._object.content = new Mo
      }
      withComponent(zz, tz) {
        return this._object.content.component.push(new ho(zz, tz)), this
      }
    }
    class qo extends no {
      constructor(zz) {
        super(zz, vo.model)
      }
      withPostProcessHandlers(zz, tz) {
        return this._vh = zz, this._th = tz, this
      }
      withData(zz) {
        return this._object.content = this._buildMesh(zz), this
      }
      withMaterial(zz, tz) {
        return this._object.pid = zz, this._object.pindex = tz, this
      }
      _buildMesh(zz) {
        const tz = this._buildVertices(zz.positions),
          sz = this._buildTriangle(zz.indices);
        return new To(tz, sz)
      }
      _buildVertices(zz) {
        const tz = new co;
        if (zz)
          for (let sz = 0; sz < zz.length;) {
            const Fz = zz[sz++],
              Wz = zz[sz++],
              Xz = zz[sz++];
            let Oz = new jo(Fz, Wz, Xz);
            this._vh && (Oz = this._vh(Oz)), tz.vertex.push(Oz)
          }
        return tz
      }
      _buildTriangle(zz) {
        const tz = new Ao;
        if (zz)
          for (let sz = 0; sz < zz.length;) {
            const Fz = zz[sz++],
              Wz = zz[sz++],
              Xz = zz[sz++];
            let Oz = new yo(Fz, Wz, Xz);
            this._th && (Oz = this._th(Oz)), tz.triangle.push(Oz)
          }
        return tz
      }
    }
    class So {
      constructor(zz) {
        this._m = new Qo(zz)
      }
      withColor(zz, tz) {
        this._m.base = this._m.base ?? [];
        let sz = this._m.base.find((tz => tz.name.toLowerCase() === zz.toLowerCase()));
        return sz ? (sz.displaycolor = this._rgbaToHex(tz), this) : (sz = new ko(zz, this._rgbaToHex(tz)), this._m.base.push(sz), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(zz) {
        const tz = zz => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(zz, 1 / 2.2)))),
          sz = tz(zz.r).toString(16).padStart(2, "0").toUpperCase(),
          Fz = tz(zz.g).toString(16).padStart(2, "0").toUpperCase(),
          Wz = tz(zz.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof zz.a) {
          return `#${sz}${Fz}${Wz}${Math.round(Math.min(255,Math.max(0,255*zz.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${sz}${Fz}${Wz}`
      }
    }
    class Vo {
      constructor() {
        this._model = new Io, this._objects = new Map
      }
      withMetaData(zz, tz, sz, Fz) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Co(zz, tz, sz, Fz)), this
      }
      withMaterial(zz) {
        return zz instanceof So && (zz = zz.build()), zz && (this._model.resources = this._model.resources ?? new Zo, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(zz)), this
      }
      withMesh(zz) {
        return zz instanceof qo && (zz = zz.build()), this._model.resources = this._model.resources ?? new Zo, this._model.resources.object.push(zz), this
      }
      withComponents(zz) {
        return zz instanceof ao && (zz = zz.build()), this._model.resources = this._model.resources ?? new Zo, this._model.resources.object.push(zz), this
      }
      withBuild(zz, tz, sz) {
        return this._model.build = this._model.build ?? new io, this._model.build.item?.push(new Lo(zz, tz, sz)), this
      }
      withUnit(zz) {
        return this._model.unit = zz, this
      }
      reset() {
        return this._model = new Io, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    Vo.KnownMetaSet = new Set(Io.KnownMeta.map((zz => zz.toLowerCase())));
    class Ro {
      withContentType(zz) {
        this._cts || (this._cts = new Bo);
        const tz = this._cts.items;
        return tz.some((tz => tz.ext === zz.ext && tz.ct === zz.ct)) || tz.push(zz), this
      }
      withRelationship(zz) {
        this._rs || (this._rs = new ro);
        const tz = this._rs.items;
        return tz.some((tz => tz.id === zz.id)) || tz.push(zz), this.withContentType(new Po("rels", uo.Relationships)), this
      }
      withModel(zz) {
        return zz instanceof Vo && (zz = zz.build()), this._m = zz, this.withContentType(new Po("model", uo.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const zz = `${bo}${wo}`;
        if (!this._rs) {
          const tz = `/${zz}`;
          this.withRelationship(new Yo("rel0", Ho.ThreeDimModel, tz))
        }
        return new xo(this._cts, this._rs, this._m)
      }
    }
    class po {
      constructor(zz) {
        this._o = zz
      }
      get options() {
        return this._o
      }
      async serializeAsync(zz) {
        const tz = await this.ensureZipLibReadyAsync();
        if (!tz) return;
        const sz = tz.Zip,
          Fz = tz.ZipDeflate;
        if (!sz || !Fz) throw new Error("fflate Zip / ZipDeflate not available");
        const Wz = function(zz, tz, sz) {
          const Wz = new Fz(tz, {
            level: 6
          });
          zz.add(Wz);
          const Xz = function(zz) {
              return {
                push: (tz, sz) => zz.push(tz, sz)
              }
            }(Wz),
            Oz = new Wo(Xz),
            oz = new so(Oz).dec("1.0", "UTF-8");
          new EO(oz).serialize(sz), Oz.finish()
        };
        for (var Xz = arguments.length, Oz = new Array(Xz > 1 ? Xz - 1 : 0), oz = 1; oz < Xz; oz++) Oz[oz - 1] = arguments[oz];
        const vz = this.toDocument(...Oz);
        if (!vz) return;
        const Uz = new sz(zz);
        Wz(Uz, go, vz.contentTypes), Wz(Uz, `${No}${Do}`, vz.relationships), Wz(Uz, `${bo}${wo}`, vz.model), Uz.end()
      }
      toDocument() {
        const zz = (new Vo).withUnit(this._o?.unit ?? oo.millimeter);
        if (this.options.metadata)
          for (const Wz in this.options.metadata) zz.withMetaData(Wz, this.options.metadata[Wz]);
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        return (new Ro).withModel(this.toModel(zz, ...sz)).build()
      }
    }
    class fo {
      static async SerializeToMemoryAsync(zz) {
        const tz = new Array;
        let sz = 0;
        for (var Fz = arguments.length, Wz = new Array(Fz > 1 ? Fz - 1 : 0), Xz = 1; Xz < Fz; Xz++) Wz[Xz - 1] = arguments[Xz];
        if (await zz.serializeAsync((function(zz, Fz, Wz) {
            tz.push(Fz), sz += Fz.length
          }), ...Wz), !sz) return;
        const Oz = new Uint8Array(sz);
        let oz = 0;
        for (const vz of tz) Oz.set(vz, oz), oz += vz.length;
        return Oz
      }
    }
    class Eo {}
    Eo.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class zv {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = zz, this._to = tz, this._step = sz, this._i = zz
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const zz = this._i;
        return this._i += this._step, zz
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class tv extends po {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...tv.DefaultOptions,
          ...zz
        })
      }
      toModel(zz) {
        for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
        sz = sz.filter((zz => zz instanceof NF.b || zz instanceof bz.d));
        const Wz = new zv,
          Xz = zz,
          Oz = new Map,
          oz = this.options.exportInstances ? [] : null;
        for (let vz = 0; vz < sz.length; vz++) {
          const zz = sz[vz];
          if (zz instanceof bz.d) {
            oz?.push(zz);
            continue
          }
          const tz = zz.name || `mesh${vz}`,
            Fz = zz.getWorldMatrix(),
            Uz = this._handleBabylonTo3mfMatrixTransformToRef(Fz, mo.Zero()),
            Kz = zz.kY;
          if (void 0 === Kz) continue;
          const uz = 1 == Kz.length;
          for (let sz = 0; sz < Kz.length; sz++) {
            const Fz = Kz[sz],
              oz = this._extractSubMesh(zz, Fz);
            if (oz) {
              const zz = uz ? `${tz}` : `${tz}_${sz}`,
                vz = new qo(Wz.next()).withData(oz).withName(zz).build();
              Xz.withMesh(vz), Xz.withBuild(vz.id, Uz), Oz.set(Fz, vz)
            }
          }
        }
        if (oz && oz.length) {
          const zz = this._groupBy(oz, (zz => zz.AFz));
          for (const [tz, sz] of Array.from(zz.entries()))
            if (sz && sz.length)
              for (let zz = 0; zz < sz.length; zz++) {
                const Fz = sz[zz].getWorldMatrix(),
                  Wz = tz.kY;
                for (let zz = 0; zz < Wz.length; zz++) {
                  const tz = Wz[zz],
                    sz = Oz.get(tz);
                  sz && Xz.withBuild(sz.id, this._handleBabylonTo3mfMatrixTransformToRef(Fz, mo.Zero()))
                }
              }
        }
        return Xz.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const zz = globalThis;
          return zz.fflate || await Wz.Tools.LoadScriptAsync(Eo.FFLATEUrl), zz.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(zz, tz) {
        const sz = zz.Qsz();
        if (!sz) return;
        const Fz = zz.getVerticesData(tv._PositionKind);
        if (!Fz) return;
        if (0 == tz.indexStart && tz.indexCount == sz.length) return {
          positions: Fz,
          indices: sz
        };
        const Wz = tz.indexStart,
          Xz = new Map,
          Oz = [],
          oz = new Uint32Array(tz.indexCount);
        for (let vz = 0; vz < tz.indexCount; vz++) {
          const zz = sz[Wz + vz];
          let tz = Xz.get(zz);
          if (void 0 === tz) {
            tz = Xz.size, Xz.set(zz, tz);
            const sz = 3 * zz;
            Oz.push(Fz[sz], Fz[sz + 1], Fz[sz + 2])
          }
          oz[vz] = tz
        }
        return {
          positions: new Float32Array(Oz),
          indices: oz
        }
      }
      _groupBy(zz, tz) {
        const sz = new Map;
        for (const Fz of zz) {
          const zz = tz(Fz),
            Wz = sz.get(zz);
          Wz ? Wz.push(Fz) : sz.set(zz, [Fz])
        }
        return sz
      }
      _handleBabylonTo3mfMatrixTransformToRef(zz, tz) {
        const sz = zz.multiplyToRef(tv._R_BJS_TO_3MF, hz.e.Zero()).m;
        return tz.values = [sz[0], sz[1], sz[2], sz[4], sz[5], sz[6], sz[8], sz[9], sz[10], sz[12], sz[13], sz[14]], tz
      }
    }
    tv.DefaultOptions = {
      unit: oo.meter,
      exportInstances: !1
    }, tv._PositionKind = "position", tv._R_BJS_TO_3MF = hz.e.RotationX(Math.PI / 2).multiply(hz.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);