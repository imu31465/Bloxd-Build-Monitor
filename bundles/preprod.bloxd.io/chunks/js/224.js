export const id = 224;
export const ids = [224, 229];
export const modules = {
  41037: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz
    });
    var Ez = bz(40972),
      nz = bz(39167);
    let iz = !1;

    function lz() {
      iz || (iz = !0, nz.b.prototype._sphericalPolynomialTargetSize = 0, nz.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(nz.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Ez.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((zz => {
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
  36709: (zz, uz, bz) => {
    bz.d(uz, {
      Color3: () => Ez.c,
      d: () => Ez.g
    });
    var Ez = bz(36715);
    (0, Ez.j)()
  },
  37235: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz
    });
    var Ez = bz(37239);
    class nz {
      static GetPlanes(zz) {
        const uz = [];
        for (let bz = 0; bz < 6; bz++) uz.push(new Ez.b(0, 0, 0, 0));
        return nz.GetPlanesToRef(zz, uz), uz
      }
      static GetNearPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[2], uz.normal.y = bz[7] + bz[6], uz.normal.z = bz[11] + bz[10], uz.d = bz[15] + bz[14], uz.normalize()
      }
      static GetFarPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[2], uz.normal.y = bz[7] - bz[6], uz.normal.z = bz[11] - bz[10], uz.d = bz[15] - bz[14], uz.normalize()
      }
      static GetLeftPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[0], uz.normal.y = bz[7] + bz[4], uz.normal.z = bz[11] + bz[8], uz.d = bz[15] + bz[12], uz.normalize()
      }
      static GetRightPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[0], uz.normal.y = bz[7] - bz[4], uz.normal.z = bz[11] - bz[8], uz.d = bz[15] - bz[12], uz.normalize()
      }
      static GetTopPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[1], uz.normal.y = bz[7] - bz[5], uz.normal.z = bz[11] - bz[9], uz.d = bz[15] - bz[13], uz.normalize()
      }
      static GetBottomPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[1], uz.normal.y = bz[7] + bz[5], uz.normal.z = bz[11] + bz[9], uz.d = bz[15] + bz[13], uz.normalize()
      }
      static GetPlanesToRef(zz, uz) {
        nz.GetNearPlaneToRef(zz, uz[0]), nz.GetFarPlaneToRef(zz, uz[1]), nz.GetLeftPlaneToRef(zz, uz[2]), nz.GetRightPlaneToRef(zz, uz[3]), nz.GetTopPlaneToRef(zz, uz[4]), nz.GetBottomPlaneToRef(zz, uz[5])
      }
      static IsPointInFrustum(zz, uz) {
        for (let bz = 0; bz < 6; bz++)
          if (uz[bz].dotCoordinate(zz) < 0) return !1;
        return !0
      }
    }
  },
  37239: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz
    });
    var Ez = bz(36519);
    class nz {
      constructor(zz, uz, bz, nz) {
        this.normal = new Ez.n(zz, uz, bz), this.d = nz
      }
      obz() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new nz(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let uz = 0;
        return 0 !== zz && (uz = 1 / zz), this.normal.x *= uz, this.normal.y *= uz, this.normal.z *= uz, this.d *= uz, this
      }
      transform(zz) {
        const uz = nz._TmpMatrix;
        zz.invertToRef(uz);
        const bz = uz.m,
          Ez = this.normal.x,
          iz = this.normal.y,
          lz = this.normal.z,
          Mz = this.d,
          tz = Ez * bz[0] + iz * bz[1] + lz * bz[2] + Mz * bz[3],
          Hz = Ez * bz[4] + iz * bz[5] + lz * bz[6] + Mz * bz[7],
          Oz = Ez * bz[8] + iz * bz[9] + lz * bz[10] + Mz * bz[11],
          pz = Ez * bz[12] + iz * bz[13] + lz * bz[14] + Mz * bz[15];
        return new nz(tz, Hz, Oz, pz)
      }
      dotCoordinate(zz) {
        return this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z + this.d
      }
      copyFromPoints(zz, uz, bz) {
        const Ez = uz.x - zz.x,
          nz = uz.y - zz.y,
          iz = uz.z - zz.z,
          lz = bz.x - zz.x,
          Mz = bz.y - zz.y,
          tz = bz.z - zz.z,
          Hz = nz * tz - iz * Mz,
          Oz = iz * lz - Ez * tz,
          pz = Ez * Mz - nz * lz,
          dz = Math.sqrt(Hz * Hz + Oz * Oz + pz * pz);
        let Fz;
        return Fz = 0 !== dz ? 1 / dz : 0, this.normal.x = Hz * Fz, this.normal.y = Oz * Fz, this.normal.z = pz * Fz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
      }
      isFrontFacingTo(zz, uz) {
        return Ez.n.Dot(this.normal, zz) <= uz
      }
      signedDistanceTo(zz) {
        return Ez.n.Dot(zz, this.normal) + this.d
      }
      static FromArray(zz) {
        return new nz(zz[0], zz[1], zz[2], zz[3])
      }
      static FromPoints(zz, uz, bz) {
        const Ez = new nz(0, 0, 0, 0);
        return Ez.copyFromPoints(zz, uz, bz), Ez
      }
      static FromPositionAndNormal(zz, uz) {
        const bz = new nz(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(zz, uz, bz)
      }
      static FromPositionAndNormalToRef(zz, uz, bz) {
        return bz.normal.euz(uz), bz.normal.normalize(), bz.d = -zz.dot(bz.normal), bz
      }
      static SignedDistanceToPlaneFromPositionAndNormal(zz, uz, bz) {
        const nz = -(uz.x * zz.x + uz.y * zz.y + uz.z * zz.z);
        return Ez.n.Dot(bz, uz) + nz
      }
    }
    nz._TmpMatrix = Ez.d.Identity()
  },
  36514: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      Matrix: () => Ez.d,
      Quaternion: () => Ez.h,
      RegisterMathVector: () => Ez.j,
      TmpVectors: () => Ez.l,
      Vector2: () => Ez.m,
      ER: () => Ez.n,
      Vector4: () => Ez.r
    });
    var Ez = bz(36519);
    (0, Ez.j)()
  },
  37519: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez
    });
    class Ez {
      constructor(zz, uz, bz, Ez) {
        this.x = zz, this.y = uz, this.width = bz, this.height = Ez
      }
      toGlobal(zz, uz) {
        return new Ez(this.x * zz, this.y * uz, this.width * zz, this.height * uz)
      }
      toGlobalToRef(zz, uz, bz) {
        return bz.x = this.x * zz, bz.y = this.y * uz, bz.width = this.width * zz, bz.height = this.height * uz, this
      }
      clone() {
        return new Ez(this.x, this.y, this.width, this.height)
      }
    }
  },
  40972: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Hz
    });
    var Ez = bz(36519),
      nz = bz(36553),
      iz = bz(39164),
      lz = bz(36526),
      Mz = bz(36715);
    class tz {
      constructor(zz, uz, bz, Ez) {
        this.name = zz, this.worldAxisForNormal = uz, this.worldAxisForFileX = bz, this.worldAxisForFileY = Ez
      }
    }
    class Hz {
      static _NearestPow2Floor(zz) {
        return zz <= 1 ? 1 : 1 << Math.floor(Math.log2(zz))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(zz) {
        if (!zz.isCube) return null;
        zz.XT()?.uR().flushFramebuffer();
        const uz = zz.getSize().width,
          bz = zz._sphericalPolynomialTargetSize,
          Ez = bz > 0 ? this._NearestPow2Floor(bz) : 0,
          nz = !zz.noMipmap && !0 === zz._texture?.generateMipMaps,
          iz = Ez > 0 && Ez < uz && nz,
          lz = iz ? Math.max(0, Math.round(Math.log2(uz / Ez))) : 0,
          Mz = iz ? Math.max(1, Math.floor(uz / Math.pow(2, lz))) : uz,
          tz = zz.readPixels(0, lz, void 0, !1),
          Hz = zz.readPixels(1, lz, void 0, !1);
        let Oz, pz;
        zz.isRenderTarget ? (Oz = zz.readPixels(3, lz, void 0, !1), pz = zz.readPixels(2, lz, void 0, !1)) : (Oz = zz.readPixels(2, lz, void 0, !1), pz = zz.readPixels(3, lz, void 0, !1));
        const dz = zz.readPixels(4, lz, void 0, !1),
          Fz = zz.readPixels(5, lz, void 0, !1),
          Zz = zz.gammaSpace,
          Rz = Ez > 0 && Ez < uz && !iz;
        return new Promise((zz => {
          Promise.all([Hz, tz, Oz, pz, dz, Fz]).then((bz => {
            let [nz, iz, lz, tz, Hz, Oz] = bz, pz = Mz;
            if (Rz) {
              const zz = 4;
              nz = this._DownsampleFace(nz, uz, Ez, zz), iz = this._DownsampleFace(iz, uz, Ez, zz), lz = this._DownsampleFace(lz, uz, Ez, zz), tz = this._DownsampleFace(tz, uz, Ez, zz), Hz = this._DownsampleFace(Hz, uz, Ez, zz), Oz = this._DownsampleFace(Oz, uz, Ez, zz), pz = Ez
            }
            const dz = {
              size: pz,
              right: iz,
              left: nz,
              up: lz,
              down: tz,
              front: Hz,
              back: Oz,
              format: 5,
              type: nz instanceof Float32Array ? 1 : 0,
              gammaSpace: Zz
            };
            zz(this.ConvertCubeMapToSphericalPolynomial(dz))
          }))
        }))
      }
      static _AreaElement(zz, uz) {
        return Math.atan2(zz * uz, Math.sqrt(zz * zz + uz * uz + 1))
      }
      static _DownsampleFace(zz, uz, bz, Ez) {
        const nz = zz instanceof Float32Array ? zz : Float32Array.from(zz),
          iz = bz * bz * Ez,
          lz = new Float32Array(iz),
          Mz = uz / bz,
          tz = 1 / (Mz * Mz);
        for (let Oz = 0; Oz < bz; Oz++) {
          const zz = Math.floor(Oz * Mz),
            iz = Math.floor((Oz + 1) * Mz);
          for (let Hz = 0; Hz < bz; Hz++) {
            const pz = Math.floor(Hz * Mz),
              dz = Math.floor((Hz + 1) * Mz),
              Fz = (Oz * bz + Hz) * Ez;
            for (let bz = 0; bz < Ez; bz++) {
              let Mz = 0;
              for (let lz = zz; lz < iz; lz++)
                for (let zz = pz; zz < dz; zz++) Mz += nz[(lz * uz + zz) * Ez + bz];
              lz[Fz + bz] = Mz * tz
            }
          }
        }
        if (zz instanceof Float32Array) return lz;
        const Hz = new(0, zz.constructor)(iz);
        for (let Oz = 0; Oz < iz; Oz++) Hz[Oz] = lz[Oz] + .5 | 0;
        return Hz
      }
      static ConvertCubeMapToSphericalPolynomial(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const bz = uz > 0 ? this._NearestPow2Floor(uz) : 0;
        if (bz > 0 && zz.size > bz) {
          const uz = 5 === zz.format ? 4 : 3,
            Ez = ["right", "left", "up", "down", "front", "back"],
            nz = {};
          for (const iz of Ez) nz[iz] = this._DownsampleFace(zz[iz], zz.size, bz, uz);
          zz = {
            ...zz,
            ...nz,
            size: bz
          }
        }
        const Ez = new iz.c;
        let tz = 0;
        const Hz = 2 / zz.size,
          Oz = Hz,
          pz = .5 * Hz,
          dz = pz - 1;
        for (let iz = 0; iz < 6; iz++) {
          const uz = this._FileFaces[iz],
            bz = zz[uz.name];
          let Fz = dz;
          const Zz = 5 === zz.format ? 4 : 3;
          for (let iz = 0; iz < zz.size; iz++) {
            let Rz = dz;
            for (let Oz = 0; Oz < zz.size; Oz++) {
              const dz = uz.worldAxisForFileX.scale(Rz).add(uz.worldAxisForFileY.scale(Fz)).add(uz.worldAxisForNormal);
              dz.normalize();
              const Kz = this._AreaElement(Rz - pz, Fz - pz) - this._AreaElement(Rz - pz, Fz + pz) - this._AreaElement(Rz + pz, Fz - pz) + this._AreaElement(Rz + pz, Fz + pz);
              let wz = bz[iz * zz.size * Zz + Oz * Zz + 0],
                Xz = bz[iz * zz.size * Zz + Oz * Zz + 1],
                fz = bz[iz * zz.size * Zz + Oz * Zz + 2];
              isNaN(wz) && (wz = 0), isNaN(Xz) && (Xz = 0), isNaN(fz) && (fz = 0), 0 === zz.type && (wz /= 255, Xz /= 255, fz /= 255), zz.gammaSpace && (wz = Math.pow((0, nz.Clamp)(wz), lz.i), Xz = Math.pow((0, nz.Clamp)(Xz), lz.i), fz = Math.pow((0, nz.Clamp)(fz), lz.i));
              const sz = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const zz = Math.max(wz, Xz, fz);
                if (zz > sz) {
                  const uz = sz / zz;
                  wz *= uz, Xz *= uz, fz *= uz
                }
              } else wz = (0, nz.Clamp)(wz, 0, sz), Xz = (0, nz.Clamp)(Xz, 0, sz), fz = (0, nz.Clamp)(fz, 0, sz);
              const rz = new Mz.c(wz, Xz, fz);
              Ez.addLight(dz, rz, Kz), tz += Kz, Rz += Hz
            }
            Fz += Oz
          }
        }
        const Fz = 6 * (4 * Math.PI) / 6 / tz;
        return Ez.scaleInPlace(Fz), Ez.convertIncidentRadianceToIrradiance(), Ez.convertIrradianceToLambertianRadiance(), iz.g.FromHarmonics(Ez)
      }
    }
    Hz._FileFaces = [new tz("right", new Ez.n(1, 0, 0), new Ez.n(0, 0, -1), new Ez.n(0, -1, 0)), new tz("left", new Ez.n(-1, 0, 0), new Ez.n(0, 0, 1), new Ez.n(0, -1, 0)), new tz("up", new Ez.n(0, 1, 0), new Ez.n(1, 0, 0), new Ez.n(0, 0, 1)), new tz("down", new Ez.n(0, -1, 0), new Ez.n(1, 0, 0), new Ez.n(0, 0, -1)), new tz("front", new Ez.n(0, 0, 1), new Ez.n(1, 0, 0), new Ez.n(0, -1, 0)), new tz("back", new Ez.n(0, 0, -1), new Ez.n(-1, 0, 0), new Ez.n(0, -1, 0))], Hz.MAX_HDRI_VALUE = 4096, Hz.PRESERVE_CLAMPED_COLORS = !1
  },
  40763: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez.j,
      g: () => Ez.t
    });
    var Ez = bz(39202);
    (0, Ez.z)()
  },
  37335: (zz, uz, bz) => {
    function Ez() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
        const uz = 16 * Math.random() | 0;
        return ("x" === zz ? uz : 3 & uz | 8).toString(16)
      }))
    }
    bz.d(uz, {
      c: () => Ez
    })
  },
  41012: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz
    });
    var Ez = bz(41e3),
      nz = bz(41014);
    class iz {
      static ExpandRGBDTexture(zz) {
        const uz = zz._texture;
        if (!uz || !zz.isRGBD) return;
        const nz = uz.uR(),
          iz = nz.getCaps(),
          lz = uz.isReady;
        let Mz = !1;
        iz.textureHalfFloatRender && iz.textureHalfFloatLinearFiltering ? (Mz = !0, uz.type = 2) : iz.textureFloatRender && iz.textureFloatLinearFiltering && (Mz = !0, uz.type = 1), Mz && (uz.isReady = !1, uz._isRGBD = !1, uz.invertY = !1);
        const tz = async () => {
          const iz = nz.isWebGPU,
            lz = iz ? 1 : 0;
          uz.isReady = !1, iz ? await bz.e(332).then((() => bz(60527))) : await bz.e(314).then((() => bz(60534)));
          const Mz = new Ez.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, nz, !1, void 0, uz.type, void 0, null, !1, void 0, lz);
          Mz.externalTextureSamplerBinding = !0;
          const tz = nz.createRenderTargetTexture(uz.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: uz.samplingMode,
            type: uz.type,
            format: 5
          });
          Mz.onEffectCreatedObservable.addOnce((bz => {
            bz.executeWhenCompiled((() => {
              Mz.onApply = zz => {
                zz._bindTexture("textureSampler", uz), zz.setFloat2("scale", 1, 1)
              }, zz.XT()?.postProcessManager.directRender([Mz], tz, !0), nz.restoreDefaultFramebuffer(), nz._releaseTexture(uz), Mz && Mz.dispose(), tz._swapAndDie(uz), uz.isReady = !0
            }))
          }))
        };
        Mz && (lz ? tz() : zz.onLoadObservable.addOnce(tz))
      }
      static async EncodeTextureToRGBD(zz, uz) {
        let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return uz.uR().isWebGPU ? await bz.e(333).then((() => bz(60551))) : await bz.e(315).then((() => bz(60546))), await (0, nz.c)("rgbdEncode", zz, uz, Ez, 1, 5)
      }
    }
  },
  60309: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      AsyncLoop: () => Ez.e,
      RegisterTools: () => Ez.g,
      Tools: () => Ez.h,
      className: () => Ez.k
    });
    var Ez = bz(39258);
    (0, Ez.g)()
  },
  41057: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz
    });
    class Ez {
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
        for (const uz of this._workerInfos)
          if (uz.idle) return this._execute(uz, zz), !0;
        return !1
      }
      _execute(zz, uz) {
        zz.idle = !1, zz.workerPromise.then((bz => {
          uz(bz, (() => {
            const uz = this._pendingActions.shift();
            uz ? this._execute(zz, uz) : zz.idle = !0
          }))
        }))
      }
    }
    class nz extends Ez {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nz.DefaultOptions;
        super([]), this._maxWorkers = zz, this._createWorkerAsync = uz, this._options = bz
      }
      push(zz) {
        if (!this._executeOnIdleWorker(zz))
          if (this._workerInfos.length < this._maxWorkers) {
            const uz = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(uz), this._execute(uz, zz)
          } else this._pendingActions.push(zz)
      }
      _execute(zz, uz) {
        zz.timeoutId && (clearTimeout(zz.timeoutId), delete zz.timeoutId), super._execute(zz, ((bz, Ez) => {
          uz(bz, (() => {
            Ez(), zz.idle && (zz.timeoutId = setTimeout((() => {
              zz.workerPromise.then((zz => {
                zz.terminate()
              }));
              const uz = this._workerInfos.indexOf(zz); - 1 !== uz && this._workerInfos.splice(uz, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    nz.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60343: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      AbstractThreeMfSerializer: () => CM,
      BVHExporter: () => Pl,
      ContentTypeFileName: () => XM,
      DefaultXmlSerializerFormatOptions: () => el,
      DefaultXmlSerializerNumberOptions: () => Wl,
      EXT_lights_area: () => Xn,
      EXT_mesh_gpu_instancing: () => UE,
      EXT_texture_avif: () => Hl,
      EXT_texture_webp: () => il,
      GLTF2Export: () => mE,
      GLTFData: () => Hz,
      GetXmlFieldMeta: () => gl,
      GetXmlName: () => Sl,
      IsQualifiedName: () => Gl,
      KHR_draco_mesh_compression: () => CE,
      KHR_interactivity: () => pn,
      KHR_lights_punctual: () => Mn,
      KHR_materials_anisotropy: () => Nn,
      KHR_materials_clearcoat: () => Tn,
      KHR_materials_coat: () => mn,
      KHR_materials_diffuse_roughness: () => Si,
      KHR_materials_diffuse_transmission: () => Sn,
      KHR_materials_dispersion: () => Wn,
      KHR_materials_emissive_strength: () => Bn,
      KHR_materials_fuzz: () => Zi,
      KHR_materials_ior: () => zi,
      KHR_materials_iridescence: () => ni,
      KHR_materials_openpbr: () => Wi,
      KHR_materials_sheen: () => ti,
      KHR_materials_specular: () => Xi,
      KHR_materials_transmission: () => oi,
      KHR_materials_unlit: () => Ai,
      KHR_materials_volume: () => Gi,
      KHR_materials_volume_scatter: () => qi,
      KHR_texture_basisu: () => ul,
      KHR_texture_transform: () => Bi,
      Known3mfRelationshipTypes: () => fM,
      KnownI3mfContentType: () => FM,
      Matrix3d: () => xM,
      MatrixFormatter: () => JM,
      ModelFileName: () => KM,
      NumberFormatter: () => Bl,
      OBJExport: () => lz,
      Object3dDirName: () => RM,
      OpenXmlContentTypesNamespace: () => pM,
      OpenXmlRelationshipsNamespace: () => dM,
      RegisterEXT_lights_area: () => sn,
      RegisterEXT_mesh_gpu_instancing: () => gE,
      RegisterEXT_texture_avif: () => pl,
      RegisterEXT_texture_webp: () => Ml,
      RegisterKHR_draco_mesh_compression: () => kE,
      RegisterKHR_interactivity: () => Fn,
      RegisterKHR_lights_punctual: () => Hn,
      RegisterKHR_materials_anisotropy: () => xn,
      RegisterKHR_materials_clearcoat: () => Pn,
      RegisterKHR_materials_coat: () => hn,
      RegisterKHR_materials_diffuse_roughness: () => Di,
      RegisterKHR_materials_diffuse_transmission: () => Dn,
      RegisterKHR_materials_dispersion: () => jn,
      RegisterKHR_materials_emissive_strength: () => Yn,
      RegisterKHR_materials_fuzz: () => Ki,
      RegisterKHR_materials_ior: () => bi,
      RegisterKHR_materials_iridescence: () => li,
      RegisterKHR_materials_openpbr: () => ji,
      RegisterKHR_materials_sheen: () => Oi,
      RegisterKHR_materials_specular: () => si,
      RegisterKHR_materials_transmission: () => vi,
      RegisterKHR_materials_unlit: () => Li,
      RegisterKHR_materials_volume: () => Vi,
      RegisterKHR_materials_volume_scatter: () => ci,
      RegisterKHR_texture_basisu: () => El,
      RegisterKHR_texture_transform: () => Yi,
      RelationshipDirName: () => ZM,
      RelationshipFileName: () => wM,
      ResolveFormatOptions: () => Il,
      ResolveNumberOptions: () => jl,
      STLExport: () => dl,
      ST_ObjectType: () => OM,
      ST_Unit: () => HM,
      StringXmlWriter: () => iM,
      ThreeDimModelNamespace: () => MM,
      ThreeMf: () => YM,
      ThreeMfBase: () => SM,
      ThreeMfBaseMaterials: () => gM,
      ThreeMfBuild: () => yM,
      ThreeMfComponent: () => cM,
      ThreeMfComponents: () => UM,
      ThreeMfComponentsBuilder: () => WM,
      ThreeMfContentType: () => rM,
      ThreeMfContentTypes: () => sM,
      ThreeMfDocument: () => vM,
      ThreeMfDocumentBuilder: () => BM,
      ThreeMfItem: () => DM,
      ThreeMfMaterialBuilder: () => jM,
      ThreeMfMesh: () => aM,
      ThreeMfMeshBuilder: () => eM,
      ThreeMfMeta: () => TM,
      ThreeMfMetadataGroup: () => LM,
      ThreeMfModel: () => AM,
      ThreeMfModelBuilder: () => IM,
      ThreeMfObject: () => GM,
      ThreeMfObjectBuilder: () => QM,
      ThreeMfRelationship: () => NM,
      ThreeMfRelationships: () => oM,
      ThreeMfResources: () => PM,
      ThreeMfSerializer: () => ut,
      ThreeMfSerializerGlobalConfiguration: () => kM,
      ThreeMfTriangle: () => hM,
      ThreeMfTriangles: () => qM,
      ThreeMfVertex: () => mM,
      ThreeMfVertices: () => VM,
      ToQualifiedString: () => Ql,
      TokenType: () => EM,
      TriangleSetsNamespace: () => tM,
      USDZExportAsync: () => Tl,
      Utf8XmlWriterToBytes: () => lM,
      XmlAttr: () => Ul,
      XmlBuilder: () => nM,
      XmlElem: () => cl,
      XmlIgnore: () => hl,
      XmlName: () => ql,
      XmlNameToParts: () => Dl,
      XmlSerializer: () => uM,
      _ConvertToGLTFPBRMetallicRoughness: () => xb,
      _SolveMetallic: () => vb,
      __IGLTFExporterExtension: () => Mz
    });
    var Ez = bz(36514),
      nz = bz(60309),
      iz = bz(39451);
    class lz {
      static OBJ(zz, uz, bz, lz) {
        const Mz = [];
        let tz = 1,
          Hz = 1;
        uz && (bz || (bz = "mat"), Mz.push("mtllib " + bz + ".mtl"));
        for (let Oz = 0; Oz < zz.length; Oz++) {
          const bz = zz[Oz],
            pz = bz.name || `mesh${Oz}}`;
          Mz.push(`o ${pz}`);
          let dz = null;
          if (lz) {
            const zz = bz.computeWorldMatrix(!0);
            dz = new Ez.Matrix, zz.invertToRef(dz), bz.bakeTransformIntoVertices(zz)
          }
          if (uz) {
            const zz = bz.material;
            zz && Mz.push("usemtl " + zz.id)
          }
          const Fz = bz.geometry;
          if (!Fz) {
            nz.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const Zz = Fz.getVerticesData("position"),
            Rz = Fz.getVerticesData("normal"),
            Kz = Fz.getVerticesData("uv"),
            wz = Fz.Nbz();
          let Xz = 0,
            fz = 0;
          if (!Zz || !wz) {
            nz.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const sz = zz[0].XT().useRightHandedSystem ? 1 : -1;
          for (let zz = 0; zz < Zz.length; zz += 3) Mz.push("v " + Zz[zz] * sz + " " + Zz[zz + 1] + " " + Zz[zz + 2]), Xz++;
          if (null != Rz)
            for (let zz = 0; zz < Rz.length; zz += 3) Mz.push("vn " + Rz[zz] * sz + " " + Rz[zz + 1] + " " + Rz[zz + 2]);
          if (null != Kz)
            for (let zz = 0; zz < Kz.length; zz += 2) Mz.push("vt " + Kz[zz] + " " + Kz[zz + 1]), fz++;
          const rz = ["", "", ""],
            oz = (bz.material || bz.XT().defaultMaterial)._getEffectiveOrientation(bz),
            [Nz, vz] = oz === iz.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let zz = 0; zz < wz.length; zz += 3) {
            const uz = [String(wz[zz] + tz), String(wz[zz + Nz] + tz), String(wz[zz + vz] + tz)],
              bz = [String(wz[zz] + Hz), String(wz[zz + Nz] + Hz), String(wz[zz + vz] + Hz)],
              Ez = uz,
              nz = null != Kz ? bz : rz,
              iz = null != Rz ? uz : rz;
            Mz.push("f " + Ez[0] + "/" + nz[0] + "/" + iz[0] + " " + Ez[1] + "/" + nz[1] + "/" + iz[1] + " " + Ez[2] + "/" + nz[2] + "/" + iz[2])
          }
          lz && dz && bz.bakeTransformIntoVertices(dz), tz += Xz, Hz += fz
        }
        return Mz.join("\n")
      }
      static MTL(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const bz = [],
          Ez = zz.material;
        bz.push("newmtl " + uz), bz.push("  Ns " + Ez.specularPower.toFixed(4)), bz.push("  Ni 1.5000"), bz.push("  d " + Ez.alpha.toFixed(4)), bz.push("  Tr 0.0000"), bz.push("  Tf 1.0000 1.0000 1.0000"), bz.push("  illum 2"), bz.push("  Ka " + Ez.ambientColor.r.toFixed(4) + " " + Ez.ambientColor.g.toFixed(4) + " " + Ez.ambientColor.b.toFixed(4)), bz.push("  Kd " + Ez.diffuseColor.r.toFixed(4) + " " + Ez.diffuseColor.g.toFixed(4) + " " + Ez.diffuseColor.b.toFixed(4)), bz.push("  Ks " + Ez.specularColor.r.toFixed(4) + " " + Ez.specularColor.g.toFixed(4) + " " + Ez.specularColor.b.toFixed(4)), bz.push("  Ke " + Ez.emissiveColor.r.toFixed(4) + " " + Ez.emissiveColor.g.toFixed(4) + " " + Ez.emissiveColor.b.toFixed(4));
        Ez.ambientTexture && bz.push("  map_Ka " + Ez.ambientTexture.name), Ez.diffuseTexture && bz.push("  map_Kd " + Ez.diffuseTexture.name), Ez.specularTexture && bz.push("  map_Ks " + Ez.specularTexture.name), Ez.bumpTexture && bz.push("  map_bump -imfchan z " + Ez.bumpTexture.name), Ez.opacityTexture && bz.push("  map_d " + Ez.opacityTexture.name);
        return bz.join("\n")
      }
    }
    var Mz = 0,
      tz = bz(40763);
    class Hz {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const zz in this.files) {
          const uz = this.files[zz],
            bz = new Blob([uz], {
              type: (0, tz.d)(zz)
            });
          nz.Tools.Download(bz, zz)
        }
      }
    }
    var Oz = bz(40360),
      pz = bz(40308),
      dz = bz(40847),
      Fz = bz(40310),
      Zz = bz(38998),
      Rz = bz(36543),
      Kz = bz(36709),
      wz = bz(36553);
    const Xz = wz.HighestCommonFactor,
      fz = {
        ...wz,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: Xz
      };
    var sz = bz(41014),
      rz = bz(40341),
      oz = bz(40803),
      Nz = bz(40809),
      vz = bz(41031);
    (0, vz.RegisterDumpTools)();
    var xz = bz(39170),
      Jz = bz(39172),
      Az = bz(38060),
      Tz = bz(39267),
      Lz = bz(39636),
      Pz = bz(41012);
    let Gz = 0;
    const az = (zz, uz, bz, Ez) => {
        if (!zz[bz]) {
          const nz = zz.useDelayedTextureLoading;
          zz.useDelayedTextureLoading = !1;
          const iz = zz._blockEntityCollection;
          zz._blockEntityCollection = !1;
          const lz = Lz.e.CreateFromBase64String(uz, Ez + Gz++, zz, !0, !1, Lz.e.BILINEAR_SAMPLINGMODE);
          zz._blockEntityCollection = iz;
          const Mz = zz.uR().getLoadedTexturesCache(),
            tz = Mz.indexOf(lz.getInternalTexture()); - 1 !== tz && Mz.splice(tz, 1), lz.isRGBD = !0, lz.wrapU = Lz.e.CLAMP_ADDRESSMODE, lz.wrapV = Lz.e.CLAMP_ADDRESSMODE, zz[bz] = lz, zz.useDelayedTextureLoading = nz, Pz.c.ExpandRGBDTexture(lz);
          const Hz = zz.uR().onContextRestoredObservable.add((() => {
            lz.isRGBD = !0;
            const uz = zz.onBeforeRenderObservable.add((() => {
              lz.isReady() && (zz.onBeforeRenderObservable.remove(uz), Pz.c.ExpandRGBDTexture(lz))
            }))
          }));
          zz.aT.add((() => {
            zz.uR().onContextRestoredObservable.remove(Hz)
          }))
        }
        return zz[bz]
      },
      Vz = zz => az(zz, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      mz = zz => az(zz, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      qz = zz => az(zz, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var hz = bz(39253),
      Uz = bz(36519),
      cz = bz(39299),
      gz = bz(39446),
      Sz = bz(39537);
    class yz extends gz.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let Dz = (() => {
      var zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz;
      let Oz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz = Sz.e,
        sz = [],
        rz = [],
        oz = [],
        Nz = [],
        vz = [],
        Az = [],
        Tz = [],
        Lz = [],
        Pz = [],
        Gz = [],
        az = [],
        Vz = [],
        mz = [],
        qz = [],
        hz = [],
        Uz = [],
        cz = [],
        gz = [];
      return zz = class extends fz {
        get useEnergyConservation() {
          return (0, xz.c)(this, uz, "f")
        }
        set useEnergyConservation(zz) {
          (0, xz.g)(this, uz, zz, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, xz.c)(this, bz, "f")
        }
        set useSmithVisibilityHeightCorrelated(zz) {
          (0, xz.g)(this, bz, zz, "f")
        }
        get useSphericalHarmonics() {
          return (0, xz.c)(this, Ez, "f")
        }
        set useSphericalHarmonics(zz) {
          (0, xz.g)(this, Ez, zz, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, xz.c)(this, nz, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(zz) {
          (0, xz.g)(this, nz, zz, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, xz.c)(this, iz, "f")
        }
        set mixIblRadianceWithIrradiance(zz) {
          (0, xz.g)(this, iz, zz, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, xz.c)(this, lz, "f")
        }
        set useLegacySpecularEnergyConservation(zz) {
          (0, xz.g)(this, lz, zz, "f")
        }
        get baseDiffuseModel() {
          return (0, xz.c)(this, Mz, "f")
        }
        set baseDiffuseModel(zz) {
          (0, xz.g)(this, Mz, zz, "f")
        }
        get dielectricSpecularModel() {
          return (0, xz.c)(this, tz, "f")
        }
        set dielectricSpecularModel(zz) {
          (0, xz.g)(this, tz, zz, "f")
        }
        get conductorSpecularModel() {
          return (0, xz.c)(this, Hz, "f")
        }
        set conductorSpecularModel(zz) {
          (0, xz.g)(this, Hz, zz, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Oz) {
          let pz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Oz, "PBRBRDF", 90, new yz, pz), this._useEnergyConservation = zz.DEFAULT_USE_ENERGY_CONSERVATION, uz.set(this, (0, xz.j)(this, sz, zz.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, xz.j)(this, rz), zz.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), bz.set(this, (0, xz.j)(this, oz, zz.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, xz.j)(this, Nz), zz.DEFAULT_USE_SPHERICAL_HARMONICS), Ez.set(this, (0, xz.j)(this, vz, zz.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, xz.j)(this, Az), zz.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), nz.set(this, (0, xz.j)(this, Tz, zz.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, xz.j)(this, Lz), zz.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), iz.set(this, (0, xz.j)(this, Pz, zz.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, xz.j)(this, Gz), zz.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), lz.set(this, (0, xz.j)(this, az, zz.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, xz.j)(this, Vz), zz.DEFAULT_DIFFUSE_MODEL), Mz.set(this, (0, xz.j)(this, mz, zz.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, xz.j)(this, qz), zz.DEFAULT_DIELECTRIC_SPECULAR_MODEL), tz.set(this, (0, xz.j)(this, hz, zz.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, xz.j)(this, Uz), zz.DEFAULT_CONDUCTOR_SPECULAR_MODEL), Hz.set(this, (0, xz.j)(this, cz, zz.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, xz.j)(this, gz), this._internalMarkAllSubMeshesAsMiscDirty = Oz._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(zz) {
          zz.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, zz.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, zz.SPHERICAL_HARMONICS = this._useSphericalHarmonics, zz.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, zz.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, zz.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, zz.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, zz.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, zz.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, uz = new WeakMap, bz = new WeakMap, Ez = new WeakMap, nz = new WeakMap, iz = new WeakMap, lz = new WeakMap, Mz = new WeakMap, tz = new WeakMap, Hz = new WeakMap, (() => {
        const uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(fz[Symbol.metadata] ?? null) : void 0;
        Oz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], pz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], dz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], Fz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], Zz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], Rz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], Kz = [(0, Jz.G)("baseDiffuseModel"), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], wz = [(0, Jz.G)("dielectricSpecularModel"), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], Xz = [(0, Jz.G)("conductorSpecularModel"), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], (0, xz.h)(zz, null, Oz, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: zz => "useEnergyConservation" in zz,
            get: zz => zz.useEnergyConservation,
            set: (zz, uz) => {
              zz.useEnergyConservation = uz
            }
          },
          metadata: uz
        }, sz, rz), (0, xz.h)(zz, null, pz, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: zz => "useSmithVisibilityHeightCorrelated" in zz,
            get: zz => zz.useSmithVisibilityHeightCorrelated,
            set: (zz, uz) => {
              zz.useSmithVisibilityHeightCorrelated = uz
            }
          },
          metadata: uz
        }, oz, Nz), (0, xz.h)(zz, null, dz, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: zz => "useSphericalHarmonics" in zz,
            get: zz => zz.useSphericalHarmonics,
            set: (zz, uz) => {
              zz.useSphericalHarmonics = uz
            }
          },
          metadata: uz
        }, vz, Az), (0, xz.h)(zz, null, Fz, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: zz => "useSpecularGlossinessInputEnergyConservation" in zz,
            get: zz => zz.useSpecularGlossinessInputEnergyConservation,
            set: (zz, uz) => {
              zz.useSpecularGlossinessInputEnergyConservation = uz
            }
          },
          metadata: uz
        }, Tz, Lz), (0, xz.h)(zz, null, Zz, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: zz => "mixIblRadianceWithIrradiance" in zz,
            get: zz => zz.mixIblRadianceWithIrradiance,
            set: (zz, uz) => {
              zz.mixIblRadianceWithIrradiance = uz
            }
          },
          metadata: uz
        }, Pz, Gz), (0, xz.h)(zz, null, Rz, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: zz => "useLegacySpecularEnergyConservation" in zz,
            get: zz => zz.useLegacySpecularEnergyConservation,
            set: (zz, uz) => {
              zz.useLegacySpecularEnergyConservation = uz
            }
          },
          metadata: uz
        }, az, Vz), (0, xz.h)(zz, null, Kz, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: zz => "baseDiffuseModel" in zz,
            get: zz => zz.baseDiffuseModel,
            set: (zz, uz) => {
              zz.baseDiffuseModel = uz
            }
          },
          metadata: uz
        }, mz, qz), (0, xz.h)(zz, null, wz, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: zz => "dielectricSpecularModel" in zz,
            get: zz => zz.dielectricSpecularModel,
            set: (zz, uz) => {
              zz.dielectricSpecularModel = uz
            }
          },
          metadata: uz
        }, hz, Uz), (0, xz.h)(zz, null, Xz, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: zz => "conductorSpecularModel" in zz,
            get: zz => zz.conductorSpecularModel,
            set: (zz, uz) => {
              zz.conductorSpecularModel = uz
            }
          },
          metadata: uz
        }, cz, gz), uz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uz
        })
      })(), zz.DEFAULT_USE_ENERGY_CONSERVATION = !0, zz.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, zz.DEFAULT_USE_SPHERICAL_HARMONICS = !0, zz.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, zz.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, zz.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, zz.DEFAULT_DIFFUSE_MODEL = 0, zz.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, zz.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, zz
    })();
    var Qz = bz(39437),
      Wz = bz(36715),
      ez = bz(39444),
      jz = bz(39276),
      Iz = bz(39519),
      Bz = bz(39513),
      Cz = bz(39528),
      Yz = bz(39505);
    class kz extends gz.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let zu = (() => {
      var zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz;
      let Oz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz, oz, Nz, vz = Sz.e,
        Az = [],
        Tz = [],
        Lz = [],
        Pz = [],
        Gz = [],
        az = [],
        Vz = [],
        mz = [],
        qz = [],
        hz = [],
        Uz = [],
        cz = [],
        gz = [],
        yz = [],
        Dz = [],
        Qz = [],
        ez = [],
        jz = [],
        Iz = [],
        Cz = [],
        zu = [],
        uu = [],
        bu = [],
        Eu = [],
        nu = [],
        iu = [],
        lu = [],
        Mu = [];
      return zz = class extends vz {
        get isEnabled() {
          return (0, xz.c)(this, uz, "f")
        }
        set isEnabled(zz) {
          (0, xz.g)(this, uz, zz, "f")
        }
        get indexOfRefraction() {
          return (0, xz.c)(this, bz, "f")
        }
        set indexOfRefraction(zz) {
          (0, xz.g)(this, bz, zz, "f")
        }
        get texture() {
          return (0, xz.c)(this, Ez, "f")
        }
        set texture(zz) {
          (0, xz.g)(this, Ez, zz, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, xz.c)(this, nz, "f")
        }
        set useRoughnessFromMainTexture(zz) {
          (0, xz.g)(this, nz, zz, "f")
        }
        get textureRoughness() {
          return (0, xz.c)(this, iz, "f")
        }
        set textureRoughness(zz) {
          (0, xz.g)(this, iz, zz, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, xz.c)(this, lz, "f")
        }
        set remapF0OnInterfaceChange(zz) {
          (0, xz.g)(this, lz, zz, "f")
        }
        get bumpTexture() {
          return (0, xz.c)(this, Mz, "f")
        }
        set bumpTexture(zz) {
          (0, xz.g)(this, Mz, zz, "f")
        }
        get isTintEnabled() {
          return (0, xz.c)(this, tz, "f")
        }
        set isTintEnabled(zz) {
          (0, xz.g)(this, tz, zz, "f")
        }
        get tintTexture() {
          return (0, xz.c)(this, Hz, "f")
        }
        set tintTexture(zz) {
          (0, xz.g)(this, Hz, zz, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Oz) {
          let pz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Oz, "PBRClearCoat", 100, new kz, pz), this._isEnabled = !1, uz.set(this, (0, xz.j)(this, Az, !1)), this.intensity = ((0, xz.j)(this, Tz), (0, xz.j)(this, Lz, 1)), this.roughness = ((0, xz.j)(this, Pz), (0, xz.j)(this, Gz, 0)), this._indexOfRefraction = ((0, xz.j)(this, az), zz._DefaultIndexOfRefraction), bz.set(this, (0, xz.j)(this, Vz, zz._DefaultIndexOfRefraction)), this._texture = ((0, xz.j)(this, mz), null), Ez.set(this, (0, xz.j)(this, qz, null)), this._useRoughnessFromMainTexture = ((0, xz.j)(this, hz), !0), nz.set(this, (0, xz.j)(this, Uz, !0)), this._textureRoughness = ((0, xz.j)(this, cz), null), iz.set(this, (0, xz.j)(this, gz, null)), this._remapF0OnInterfaceChange = ((0, xz.j)(this, yz), !0), lz.set(this, (0, xz.j)(this, Dz, !0)), this._bumpTexture = ((0, xz.j)(this, Qz), null), Mz.set(this, (0, xz.j)(this, ez, null)), this._isTintEnabled = ((0, xz.j)(this, jz), !1), tz.set(this, (0, xz.j)(this, Iz, !1)), this.tintColor = ((0, xz.j)(this, Cz), (0, xz.j)(this, zu, Wz.c.White())), this.tintColorAtDistance = ((0, xz.j)(this, uu), (0, xz.j)(this, bu, 1)), this.tintThickness = ((0, xz.j)(this, Eu), (0, xz.j)(this, nu, 1)), this._tintTexture = ((0, xz.j)(this, iu), null), Hz.set(this, (0, xz.j)(this, lu, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, xz.j)(this, Mu), this._internalMarkAllSubMeshesAsTexturesDirty = Oz._dirtyCallbacks[1]
        }
        isReadyForSubMesh(zz, uz, bz) {
          if (!this._isEnabled) return !0;
          const Ez = this._material._disableBumpMap;
          if (zz._areTexturesDirty && uz.texturesEnabled) {
            if (this._texture && Bz.d.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Bz.d.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (bz.getCaps().standardDerivatives && this._bumpTexture && Bz.d.ClearCoatBumpTextureEnabled && !Ez && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && Bz.d.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(uz, bz) {
          this._isEnabled ? (uz.CLEARCOAT = !0, uz.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, uz.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, uz._areTexturesDirty && bz.texturesEnabled && (this._texture && Bz.d.ClearCoatTextureEnabled ? (0, Yz.db)(this._texture, uz, "CLEARCOAT_TEXTURE") : uz.CLEARCOAT_TEXTURE = !1, this._textureRoughness && Bz.d.ClearCoatTextureEnabled ? (0, Yz.db)(this._textureRoughness, uz, "CLEARCOAT_TEXTURE_ROUGHNESS") : uz.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && Bz.d.ClearCoatBumpTextureEnabled ? (0, Yz.db)(this._bumpTexture, uz, "CLEARCOAT_BUMP") : uz.CLEARCOAT_BUMP = !1, uz.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === zz._DefaultIndexOfRefraction, this._isTintEnabled ? (uz.CLEARCOAT_TINT = !0, this._tintTexture && Bz.d.ClearCoatTintTextureEnabled ? ((0, Yz.db)(this._tintTexture, uz, "CLEARCOAT_TINT_TEXTURE"), uz.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : uz.CLEARCOAT_TINT_TEXTURE = !1) : (uz.CLEARCOAT_TINT = !1, uz.CLEARCOAT_TINT_TEXTURE = !1))) : (uz.CLEARCOAT = !1, uz.CLEARCOAT_TEXTURE = !1, uz.CLEARCOAT_TEXTURE_ROUGHNESS = !1, uz.CLEARCOAT_BUMP = !1, uz.CLEARCOAT_TINT = !1, uz.CLEARCOAT_TINT_TEXTURE = !1, uz.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, uz.CLEARCOAT_DEFAULTIOR = !1, uz.CLEARCOAT_TEXTUREDIRECTUV = 0, uz.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, uz.CLEARCOAT_BUMPDIRECTUV = 0, uz.CLEARCOAT_REMAP_F0 = !1, uz.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, uz.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(zz, uz, bz, Ez) {
          if (!this._isEnabled) return;
          const nz = Ez.materialDefines,
            iz = this._material.isFrozen,
            lz = this._material._disableBumpMap,
            Mz = this._material._invertNormalMapX,
            tz = this._material._invertNormalMapY;
          if (!zz.useUbo || !iz || !zz.isSync) {
            (this._texture || this._textureRoughness) && Bz.d.ClearCoatTextureEnabled && (zz.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Yz.B)(this._texture, zz, "clearCoat"), this._textureRoughness && !nz.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Yz.B)(this._textureRoughness, zz, "clearCoatRoughness")), this._bumpTexture && bz.getCaps().standardDerivatives && Bz.d.ClearCoatTextureEnabled && !lz && (zz.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, Yz.B)(this._bumpTexture, zz, "clearCoatBump"), uz._mirroredCameraPosition ? zz.updateFloat2("vClearCoatTangentSpaceParams", Mz ? 1 : -1, tz ? 1 : -1) : zz.updateFloat2("vClearCoatTangentSpaceParams", Mz ? -1 : 1, tz ? -1 : 1)), this._tintTexture && Bz.d.ClearCoatTintTextureEnabled && (zz.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, Yz.B)(this._tintTexture, zz, "clearCoatTint")), zz.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Ez = 1 - this._indexOfRefraction,
              iz = 1 + this._indexOfRefraction,
              Hz = Math.pow(-Ez / iz, 2),
              Oz = 1 / this._indexOfRefraction;
            zz.updateFloat4("vClearCoatRefractionParams", Hz, Oz, Ez, iz), this._isTintEnabled && (zz.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), zz.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          uz.texturesEnabled && (this._texture && Bz.d.ClearCoatTextureEnabled && zz.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !nz.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && Bz.d.ClearCoatTextureEnabled && zz.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && bz.getCaps().standardDerivatives && Bz.d.ClearCoatBumpTextureEnabled && !lz && zz.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && Bz.d.ClearCoatTintTextureEnabled && zz.setTexture("clearCoatTintSampler", this._tintTexture))
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
        addFallbacks(zz, uz, bz) {
          return zz.CLEARCOAT_BUMP && uz.addFallback(bz++, "CLEARCOAT_BUMP"), zz.CLEARCOAT_TINT && uz.addFallback(bz++, "CLEARCOAT_TINT"), zz.CLEARCOAT && uz.addFallback(bz++, "CLEARCOAT"), bz
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
      }, uz = new WeakMap, bz = new WeakMap, Ez = new WeakMap, nz = new WeakMap, iz = new WeakMap, lz = new WeakMap, Mz = new WeakMap, tz = new WeakMap, Hz = new WeakMap, (() => {
        const uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(vz[Symbol.metadata] ?? null) : void 0;
        Oz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], pz = [(0, Jz.G)()], dz = [(0, Jz.G)()], Fz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Zz = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Rz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Kz = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], wz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Xz = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], fz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], sz = [(0, Jz.q)()], rz = [(0, Jz.G)()], oz = [(0, Jz.G)()], Nz = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], (0, xz.h)(zz, null, Oz, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isEnabled" in zz,
            get: zz => zz.isEnabled,
            set: (zz, uz) => {
              zz.isEnabled = uz
            }
          },
          metadata: uz
        }, Az, Tz), (0, xz.h)(zz, null, Fz, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: zz => "indexOfRefraction" in zz,
            get: zz => zz.indexOfRefraction,
            set: (zz, uz) => {
              zz.indexOfRefraction = uz
            }
          },
          metadata: uz
        }, Vz, mz), (0, xz.h)(zz, null, Zz, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: zz => "texture" in zz,
            get: zz => zz.texture,
            set: (zz, uz) => {
              zz.texture = uz
            }
          },
          metadata: uz
        }, qz, hz), (0, xz.h)(zz, null, Rz, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "useRoughnessFromMainTexture" in zz,
            get: zz => zz.useRoughnessFromMainTexture,
            set: (zz, uz) => {
              zz.useRoughnessFromMainTexture = uz
            }
          },
          metadata: uz
        }, Uz, cz), (0, xz.h)(zz, null, Kz, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: zz => "textureRoughness" in zz,
            get: zz => zz.textureRoughness,
            set: (zz, uz) => {
              zz.textureRoughness = uz
            }
          },
          metadata: uz
        }, gz, yz), (0, xz.h)(zz, null, wz, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: zz => "remapF0OnInterfaceChange" in zz,
            get: zz => zz.remapF0OnInterfaceChange,
            set: (zz, uz) => {
              zz.remapF0OnInterfaceChange = uz
            }
          },
          metadata: uz
        }, Dz, Qz), (0, xz.h)(zz, null, Xz, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "bumpTexture" in zz,
            get: zz => zz.bumpTexture,
            set: (zz, uz) => {
              zz.bumpTexture = uz
            }
          },
          metadata: uz
        }, ez, jz), (0, xz.h)(zz, null, fz, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isTintEnabled" in zz,
            get: zz => zz.isTintEnabled,
            set: (zz, uz) => {
              zz.isTintEnabled = uz
            }
          },
          metadata: uz
        }, Iz, Cz), (0, xz.h)(zz, null, Nz, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "tintTexture" in zz,
            get: zz => zz.tintTexture,
            set: (zz, uz) => {
              zz.tintTexture = uz
            }
          },
          metadata: uz
        }, lu, Mu), (0, xz.h)(null, null, pz, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "intensity" in zz,
            get: zz => zz.intensity,
            set: (zz, uz) => {
              zz.intensity = uz
            }
          },
          metadata: uz
        }, Lz, Pz), (0, xz.h)(null, null, dz, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: zz => "roughness" in zz,
            get: zz => zz.roughness,
            set: (zz, uz) => {
              zz.roughness = uz
            }
          },
          metadata: uz
        }, Gz, az), (0, xz.h)(null, null, sz, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "tintColor" in zz,
            get: zz => zz.tintColor,
            set: (zz, uz) => {
              zz.tintColor = uz
            }
          },
          metadata: uz
        }, zu, uu), (0, xz.h)(null, null, rz, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: zz => "tintColorAtDistance" in zz,
            get: zz => zz.tintColorAtDistance,
            set: (zz, uz) => {
              zz.tintColorAtDistance = uz
            }
          },
          metadata: uz
        }, bu, Eu), (0, xz.h)(null, null, oz, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: zz => "tintThickness" in zz,
            get: zz => zz.tintThickness,
            set: (zz, uz) => {
              zz.tintThickness = uz
            }
          },
          metadata: uz
        }, nu, iu), uz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uz
        })
      })(), zz._DefaultIndexOfRefraction = 1.5, zz
    })();
    class uu extends gz.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let bu = (() => {
      var zz, uz, bz, Ez;
      let nz, iz, lz, Mz, tz, Hz, Oz, pz = Sz.e,
        dz = [],
        Fz = [],
        Zz = [],
        Rz = [],
        Kz = [],
        wz = [],
        Xz = [],
        fz = [],
        sz = [],
        rz = [],
        oz = [],
        Nz = [],
        vz = [],
        Az = [];
      return zz = class extends pz {
        get isEnabled() {
          return (0, xz.c)(this, uz, "f")
        }
        set isEnabled(zz) {
          (0, xz.g)(this, uz, zz, "f")
        }
        get texture() {
          return (0, xz.c)(this, bz, "f")
        }
        set texture(zz) {
          (0, xz.g)(this, bz, zz, "f")
        }
        get thicknessTexture() {
          return (0, xz.c)(this, Ez, "f")
        }
        set thicknessTexture(zz) {
          (0, xz.g)(this, Ez, zz, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(nz) {
          let iz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(nz, "PBRIridescence", 110, new uu, iz), this._isEnabled = !1, uz.set(this, (0, xz.j)(this, dz, !1)), this.intensity = ((0, xz.j)(this, Fz), (0, xz.j)(this, Zz, 1)), this.minimumThickness = ((0, xz.j)(this, Rz), (0, xz.j)(this, Kz, zz._DefaultMinimumThickness)), this.maximumThickness = ((0, xz.j)(this, wz), (0, xz.j)(this, Xz, zz._DefaultMaximumThickness)), this.indexOfRefraction = ((0, xz.j)(this, fz), (0, xz.j)(this, sz, zz._DefaultIndexOfRefraction)), this._texture = ((0, xz.j)(this, rz), null), bz.set(this, (0, xz.j)(this, oz, null)), this._thicknessTexture = ((0, xz.j)(this, Nz), null), Ez.set(this, (0, xz.j)(this, vz, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, xz.j)(this, Az), this._internalMarkAllSubMeshesAsTexturesDirty = nz._dirtyCallbacks[1]
        }
        isReadyForSubMesh(zz, uz) {
          if (!this._isEnabled) return !0;
          if (zz._areTexturesDirty && uz.texturesEnabled) {
            if (this._texture && Bz.d.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && Bz.d.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(zz, uz) {
          this._isEnabled ? (zz.IRIDESCENCE = !0, zz._areTexturesDirty && uz.texturesEnabled && (this._texture && Bz.d.IridescenceTextureEnabled ? (0, Yz.db)(this._texture, zz, "IRIDESCENCE_TEXTURE") : zz.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && Bz.d.IridescenceTextureEnabled ? (0, Yz.db)(this._thicknessTexture, zz, "IRIDESCENCE_THICKNESS_TEXTURE") : zz.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (zz.IRIDESCENCE = !1, zz.IRIDESCENCE_TEXTURE = !1, zz.IRIDESCENCE_THICKNESS_TEXTURE = !1, zz.IRIDESCENCE_TEXTUREDIRECTUV = 0, zz.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(zz, uz) {
          if (!this._isEnabled) return;
          const bz = this._material.isFrozen;
          zz.useUbo && bz && zz.isSync || ((this._texture || this._thicknessTexture) && Bz.d.IridescenceTextureEnabled && (zz.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, Yz.B)(this._texture, zz, "iridescence"), this._thicknessTexture && (0, Yz.B)(this._thicknessTexture, zz, "iridescenceThickness")), zz.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), uz.texturesEnabled && (this._texture && Bz.d.IridescenceTextureEnabled && zz.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && Bz.d.IridescenceTextureEnabled && zz.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
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
        addFallbacks(zz, uz, bz) {
          return zz.IRIDESCENCE && uz.addFallback(bz++, "IRIDESCENCE"), bz
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
      }, uz = new WeakMap, bz = new WeakMap, Ez = new WeakMap, (() => {
        const uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(pz[Symbol.metadata] ?? null) : void 0;
        nz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], iz = [(0, Jz.G)()], lz = [(0, Jz.G)()], Mz = [(0, Jz.G)()], tz = [(0, Jz.G)()], Hz = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Oz = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], (0, xz.h)(zz, null, nz, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isEnabled" in zz,
            get: zz => zz.isEnabled,
            set: (zz, uz) => {
              zz.isEnabled = uz
            }
          },
          metadata: uz
        }, dz, Fz), (0, xz.h)(zz, null, Hz, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: zz => "texture" in zz,
            get: zz => zz.texture,
            set: (zz, uz) => {
              zz.texture = uz
            }
          },
          metadata: uz
        }, oz, Nz), (0, xz.h)(zz, null, Oz, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "thicknessTexture" in zz,
            get: zz => zz.thicknessTexture,
            set: (zz, uz) => {
              zz.thicknessTexture = uz
            }
          },
          metadata: uz
        }, vz, Az), (0, xz.h)(null, null, iz, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "intensity" in zz,
            get: zz => zz.intensity,
            set: (zz, uz) => {
              zz.intensity = uz
            }
          },
          metadata: uz
        }, Zz, Rz), (0, xz.h)(null, null, lz, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: zz => "minimumThickness" in zz,
            get: zz => zz.minimumThickness,
            set: (zz, uz) => {
              zz.minimumThickness = uz
            }
          },
          metadata: uz
        }, Kz, wz), (0, xz.h)(null, null, Mz, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: zz => "maximumThickness" in zz,
            get: zz => zz.maximumThickness,
            set: (zz, uz) => {
              zz.maximumThickness = uz
            }
          },
          metadata: uz
        }, Xz, fz), (0, xz.h)(null, null, tz, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: zz => "indexOfRefraction" in zz,
            get: zz => zz.indexOfRefraction,
            set: (zz, uz) => {
              zz.indexOfRefraction = uz
            }
          },
          metadata: uz
        }, sz, rz), uz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uz
        })
      })(), zz._DefaultMinimumThickness = 100, zz._DefaultMaximumThickness = 400, zz._DefaultIndexOfRefraction = 1.3, zz
    })();
    class Eu extends gz.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let nu = (() => {
      var zz, uz, bz, Ez;
      let nz, iz, lz, Mz, tz, Hz = Sz.e,
        Oz = [],
        pz = [],
        dz = [],
        Fz = [],
        Zz = [],
        Rz = [],
        Kz = [],
        wz = [],
        Xz = [],
        fz = [];
      return zz = class extends Hz {
        get isEnabled() {
          return (0, xz.c)(this, uz, "f")
        }
        set isEnabled(zz) {
          (0, xz.g)(this, uz, zz, "f")
        }
        set angle(zz) {
          this.direction.x = Math.cos(zz), this.direction.y = Math.sin(zz)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, xz.c)(this, bz, "f")
        }
        set texture(zz) {
          (0, xz.g)(this, bz, zz, "f")
        }
        get legacy() {
          return (0, xz.c)(this, Ez, "f")
        }
        set legacy(zz) {
          (0, xz.g)(this, Ez, zz, "f")
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
          let nz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(zz, "PBRAnisotropic", 110, new Eu, nz), this._isEnabled = !1, uz.set(this, (0, xz.j)(this, Oz, !1)), this.intensity = ((0, xz.j)(this, pz), (0, xz.j)(this, dz, 1)), this.direction = ((0, xz.j)(this, Fz), (0, xz.j)(this, Zz, new Uz.m(1, 0))), this._texture = ((0, xz.j)(this, Rz), null), bz.set(this, (0, xz.j)(this, Kz, null)), this._legacy = ((0, xz.j)(this, wz), !1), Ez.set(this, (0, xz.j)(this, Xz, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, xz.j)(this, fz), this._internalMarkAllSubMeshesAsTexturesDirty = zz._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = zz._dirtyCallbacks[16]
        }
        isReadyForSubMesh(zz, uz) {
          return !this._isEnabled || !(zz._areTexturesDirty && uz.texturesEnabled && this._texture && Bz.d.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(zz, uz, bz) {
          this._isEnabled ? (zz.ANISOTROPIC = this._isEnabled, this._isEnabled && !bz.isVerticesDataPresent(cz.j.TangentKind) && (zz._needUVs = !0, zz.MAINUV1 = !0), zz._areTexturesDirty && uz.texturesEnabled && (this._texture && Bz.d.AnisotropicTextureEnabled ? (0, Yz.db)(this._texture, zz, "ANISOTROPIC_TEXTURE") : zz.ANISOTROPIC_TEXTURE = !1), zz._areMiscDirty && (zz.ANISOTROPIC_LEGACY = this._legacy)) : (zz.ANISOTROPIC = !1, zz.ANISOTROPIC_TEXTURE = !1, zz.ANISOTROPIC_TEXTUREDIRECTUV = 0, zz.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(zz, uz) {
          if (!this._isEnabled) return;
          const bz = this._material.isFrozen;
          zz.useUbo && bz && zz.isSync || (this._texture && Bz.d.AnisotropicTextureEnabled && (zz.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, Yz.B)(this._texture, zz, "anisotropy")), zz.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), uz.texturesEnabled && this._texture && Bz.d.AnisotropicTextureEnabled && zz.setTexture("anisotropySampler", this._texture)
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
        addFallbacks(zz, uz, bz) {
          return zz.ANISOTROPIC && uz.addFallback(bz++, "ANISOTROPIC"), bz
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
        parse(zz, uz, bz) {
          super.parse(zz, uz, bz), void 0 === zz.legacy && (this.legacy = !0)
        }
      }, uz = new WeakMap, bz = new WeakMap, Ez = new WeakMap, (() => {
        const uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hz[Symbol.metadata] ?? null) : void 0;
        nz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], iz = [(0, Jz.G)()], lz = [(0, Jz.C)()], Mz = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], tz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], (0, xz.h)(zz, null, nz, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isEnabled" in zz,
            get: zz => zz.isEnabled,
            set: (zz, uz) => {
              zz.isEnabled = uz
            }
          },
          metadata: uz
        }, Oz, pz), (0, xz.h)(zz, null, Mz, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: zz => "texture" in zz,
            get: zz => zz.texture,
            set: (zz, uz) => {
              zz.texture = uz
            }
          },
          metadata: uz
        }, Kz, wz), (0, xz.h)(zz, null, tz, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: zz => "legacy" in zz,
            get: zz => zz.legacy,
            set: (zz, uz) => {
              zz.legacy = uz
            }
          },
          metadata: uz
        }, Xz, fz), (0, xz.h)(null, null, iz, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "intensity" in zz,
            get: zz => zz.intensity,
            set: (zz, uz) => {
              zz.intensity = uz
            }
          },
          metadata: uz
        }, dz, Fz), (0, xz.h)(null, null, lz, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: zz => "direction" in zz,
            get: zz => zz.direction,
            set: (zz, uz) => {
              zz.direction = uz
            }
          },
          metadata: uz
        }, Zz, Rz), uz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uz
        })
      })(), zz
    })();
    class iu extends gz.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let lu = (() => {
      var zz, uz, bz, Ez, nz, iz, lz, Mz;
      let tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz = Sz.e,
        Xz = [],
        fz = [],
        sz = [],
        rz = [],
        oz = [],
        Nz = [],
        vz = [],
        Az = [],
        Tz = [],
        Lz = [],
        Pz = [],
        Gz = [],
        az = [],
        Vz = [],
        mz = [],
        qz = [],
        hz = [],
        Uz = [];
      return zz = class extends wz {
        get isEnabled() {
          return (0, xz.c)(this, uz, "f")
        }
        set isEnabled(zz) {
          (0, xz.g)(this, uz, zz, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, xz.c)(this, bz, "f")
        }
        set linkSheenWithAlbedo(zz) {
          (0, xz.g)(this, bz, zz, "f")
        }
        get texture() {
          return (0, xz.c)(this, Ez, "f")
        }
        set texture(zz) {
          (0, xz.g)(this, Ez, zz, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, xz.c)(this, nz, "f")
        }
        set useRoughnessFromMainTexture(zz) {
          (0, xz.g)(this, nz, zz, "f")
        }
        get roughness() {
          return (0, xz.c)(this, iz, "f")
        }
        set roughness(zz) {
          (0, xz.g)(this, iz, zz, "f")
        }
        get textureRoughness() {
          return (0, xz.c)(this, lz, "f")
        }
        set textureRoughness(zz) {
          (0, xz.g)(this, lz, zz, "f")
        }
        get albedoScaling() {
          return (0, xz.c)(this, Mz, "f")
        }
        set albedoScaling(zz) {
          (0, xz.g)(this, Mz, zz, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(zz) {
          let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(zz, "Sheen", 120, new iu, tz), this._isEnabled = !1, uz.set(this, (0, xz.j)(this, Xz, !1)), this._linkSheenWithAlbedo = ((0, xz.j)(this, fz), !1), bz.set(this, (0, xz.j)(this, sz, !1)), this.intensity = ((0, xz.j)(this, rz), (0, xz.j)(this, oz, 1)), this.color = ((0, xz.j)(this, Nz), (0, xz.j)(this, vz, Wz.c.White())), this._texture = ((0, xz.j)(this, Az), null), Ez.set(this, (0, xz.j)(this, Tz, null)), this._useRoughnessFromMainTexture = ((0, xz.j)(this, Lz), !0), nz.set(this, (0, xz.j)(this, Pz, !0)), this._roughness = ((0, xz.j)(this, Gz), null), iz.set(this, (0, xz.j)(this, az, null)), this._textureRoughness = ((0, xz.j)(this, Vz), null), lz.set(this, (0, xz.j)(this, mz, null)), this._albedoScaling = ((0, xz.j)(this, qz), !1), Mz.set(this, (0, xz.j)(this, hz, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, xz.j)(this, Uz), this._internalMarkAllSubMeshesAsTexturesDirty = zz._dirtyCallbacks[1]
        }
        isReadyForSubMesh(zz, uz) {
          if (!this._isEnabled) return !0;
          if (zz._areTexturesDirty && uz.texturesEnabled) {
            if (this._texture && Bz.d.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Bz.d.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(zz, uz) {
          this._isEnabled ? (zz.SHEEN = !0, zz.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, zz.SHEEN_ROUGHNESS = null !== this._roughness, zz.SHEEN_ALBEDOSCALING = this._albedoScaling, zz.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, zz._areTexturesDirty && uz.texturesEnabled && (this._texture && Bz.d.SheenTextureEnabled ? ((0, Yz.db)(this._texture, zz, "SHEEN_TEXTURE"), zz.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : zz.SHEEN_TEXTURE = !1, this._textureRoughness && Bz.d.SheenTextureEnabled ? (0, Yz.db)(this._textureRoughness, zz, "SHEEN_TEXTURE_ROUGHNESS") : zz.SHEEN_TEXTURE_ROUGHNESS = !1)) : (zz.SHEEN = !1, zz.SHEEN_TEXTURE = !1, zz.SHEEN_TEXTURE_ROUGHNESS = !1, zz.SHEEN_LINKWITHALBEDO = !1, zz.SHEEN_ROUGHNESS = !1, zz.SHEEN_ALBEDOSCALING = !1, zz.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, zz.SHEEN_GAMMATEXTURE = !1, zz.SHEEN_TEXTUREDIRECTUV = 0, zz.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(zz, uz, bz, Ez) {
          if (!this._isEnabled) return;
          const nz = Ez.materialDefines,
            iz = this._material.isFrozen;
          zz.useUbo && iz && zz.isSync || ((this._texture || this._textureRoughness) && Bz.d.SheenTextureEnabled && (zz.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Yz.B)(this._texture, zz, "sheen"), this._textureRoughness && !nz.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Yz.B)(this._textureRoughness, zz, "sheenRoughness")), zz.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && zz.updateFloat("vSheenRoughness", this._roughness)), uz.texturesEnabled && (this._texture && Bz.d.SheenTextureEnabled && zz.setTexture("sheenSampler", this._texture), this._textureRoughness && !nz.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && Bz.d.SheenTextureEnabled && zz.setTexture("sheenRoughnessSampler", this._textureRoughness))
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
        addFallbacks(zz, uz, bz) {
          return zz.SHEEN && uz.addFallback(bz++, "SHEEN"), bz
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
      }, uz = new WeakMap, bz = new WeakMap, Ez = new WeakMap, nz = new WeakMap, iz = new WeakMap, lz = new WeakMap, Mz = new WeakMap, (() => {
        const uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(wz[Symbol.metadata] ?? null) : void 0;
        tz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Hz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Oz = [(0, Jz.G)()], pz = [(0, Jz.q)()], dz = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Fz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Zz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Rz = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Kz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], (0, xz.h)(zz, null, tz, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isEnabled" in zz,
            get: zz => zz.isEnabled,
            set: (zz, uz) => {
              zz.isEnabled = uz
            }
          },
          metadata: uz
        }, Xz, fz), (0, xz.h)(zz, null, Hz, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: zz => "linkSheenWithAlbedo" in zz,
            get: zz => zz.linkSheenWithAlbedo,
            set: (zz, uz) => {
              zz.linkSheenWithAlbedo = uz
            }
          },
          metadata: uz
        }, sz, rz), (0, xz.h)(zz, null, dz, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: zz => "texture" in zz,
            get: zz => zz.texture,
            set: (zz, uz) => {
              zz.texture = uz
            }
          },
          metadata: uz
        }, Tz, Lz), (0, xz.h)(zz, null, Fz, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "useRoughnessFromMainTexture" in zz,
            get: zz => zz.useRoughnessFromMainTexture,
            set: (zz, uz) => {
              zz.useRoughnessFromMainTexture = uz
            }
          },
          metadata: uz
        }, Pz, Gz), (0, xz.h)(zz, null, Zz, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: zz => "roughness" in zz,
            get: zz => zz.roughness,
            set: (zz, uz) => {
              zz.roughness = uz
            }
          },
          metadata: uz
        }, az, Vz), (0, xz.h)(zz, null, Rz, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: zz => "textureRoughness" in zz,
            get: zz => zz.textureRoughness,
            set: (zz, uz) => {
              zz.textureRoughness = uz
            }
          },
          metadata: uz
        }, mz, qz), (0, xz.h)(zz, null, Kz, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: zz => "albedoScaling" in zz,
            get: zz => zz.albedoScaling,
            set: (zz, uz) => {
              zz.albedoScaling = uz
            }
          },
          metadata: uz
        }, hz, Uz), (0, xz.h)(null, null, Oz, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "intensity" in zz,
            get: zz => zz.intensity,
            set: (zz, uz) => {
              zz.intensity = uz
            }
          },
          metadata: uz
        }, oz, Nz), (0, xz.h)(null, null, pz, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: zz => "color" in zz,
            get: zz => zz.color,
            set: (zz, uz) => {
              zz.color = uz
            }
          },
          metadata: uz
        }, vz, Az), uz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uz
        })
      })(), zz
    })();
    class Mu extends gz.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let tu = (() => {
      var zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz;
      let wz, Xz, fz, sz, rz, oz, Nz, vz, Az, Tz, Lz, Pz, Gz, az, Vz, mz, qz, hz, cz, gz, yz, Dz, Qz, ez, jz, Iz, Cz, kz, zu, uu, bu = Sz.e,
        Eu = [],
        nu = [],
        iu = [],
        lu = [],
        tu = [],
        Hu = [],
        Ou = [],
        pu = [],
        du = [],
        Fu = [],
        Zu = [],
        Ru = [],
        Ku = [],
        wu = [],
        Xu = [],
        fu = [],
        su = [],
        ru = [],
        ou = [],
        Nu = [],
        vu = [],
        xu = [],
        Ju = [],
        Au = [],
        Tu = [],
        Lu = [],
        Pu = [],
        Gu = [],
        au = [],
        Vu = [],
        mu = [],
        qu = [],
        hu = [],
        Uu = [],
        cu = [],
        gu = [],
        Su = [],
        yu = [],
        Du = [],
        Qu = [],
        Wu = [],
        eu = [],
        ju = [],
        Iu = [],
        Bu = [],
        Cu = [],
        Yu = [],
        ku = [],
        zb = [],
        ub = [],
        bb = [],
        Eb = [],
        nb = [],
        ib = [],
        lb = [],
        Mb = [],
        tb = [],
        Hb = [],
        Ob = [],
        pb = [];
      return zz = class extends bu {
        get isRefractionEnabled() {
          return (0, xz.c)(this, uz, "f")
        }
        set isRefractionEnabled(zz) {
          (0, xz.g)(this, uz, zz, "f")
        }
        get isTranslucencyEnabled() {
          return (0, xz.c)(this, bz, "f")
        }
        set isTranslucencyEnabled(zz) {
          (0, xz.g)(this, bz, zz, "f")
        }
        get isDispersionEnabled() {
          return (0, xz.c)(this, Ez, "f")
        }
        set isDispersionEnabled(zz) {
          (0, xz.g)(this, Ez, zz, "f")
        }
        get isScatteringEnabled() {
          return (0, xz.c)(this, nz, "f")
        }
        set isScatteringEnabled(zz) {
          (0, xz.g)(this, nz, zz, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(zz) {
          this._scene.enableSubSurfaceForPrePass() && zz && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(zz))
        }
        get useAlbedoToTintRefraction() {
          return (0, xz.c)(this, iz, "f")
        }
        set useAlbedoToTintRefraction(zz) {
          (0, xz.g)(this, iz, zz, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, xz.c)(this, lz, "f")
        }
        set useAlbedoToTintTranslucency(zz) {
          (0, xz.g)(this, lz, zz, "f")
        }
        get thicknessTexture() {
          return (0, xz.c)(this, Mz, "f")
        }
        set thicknessTexture(zz) {
          (0, xz.g)(this, Mz, zz, "f")
        }
        get refractionTexture() {
          return (0, xz.c)(this, tz, "f")
        }
        set refractionTexture(zz) {
          (0, xz.g)(this, tz, zz, "f")
        }
        get indexOfRefraction() {
          return (0, xz.c)(this, Hz, "f")
        }
        set indexOfRefraction(zz) {
          (0, xz.g)(this, Hz, zz, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(zz) {
          const uz = zz >= 1 ? zz : -1;
          this._volumeIndexOfRefraction !== uz && (this._volumeIndexOfRefraction = uz, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, xz.c)(this, Oz, "f")
        }
        set invertRefractionY(zz) {
          (0, xz.g)(this, Oz, zz, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, xz.c)(this, pz, "f")
        }
        set linkRefractionWithTransparency(zz) {
          (0, xz.g)(this, pz, zz, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, xz.c)(this, dz, "f")
        }
        set useMaskFromThicknessTexture(zz) {
          (0, xz.g)(this, dz, zz, "f")
        }
        get refractionIntensityTexture() {
          return (0, xz.c)(this, Fz, "f")
        }
        set refractionIntensityTexture(zz) {
          (0, xz.g)(this, Fz, zz, "f")
        }
        get translucencyIntensityTexture() {
          return (0, xz.c)(this, Zz, "f")
        }
        set translucencyIntensityTexture(zz) {
          (0, xz.g)(this, Zz, zz, "f")
        }
        get translucencyColorTexture() {
          return (0, xz.c)(this, Rz, "f")
        }
        set translucencyColorTexture(zz) {
          (0, xz.g)(this, Rz, zz, "f")
        }
        get useGltfStyleTextures() {
          return (0, xz.c)(this, Kz, "f")
        }
        set useGltfStyleTextures(zz) {
          (0, xz.g)(this, Kz, zz, "f")
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
        constructor(wz) {
          let Xz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(wz, "PBRSubSurface", 130, new Mu, Xz), this._isRefractionEnabled = !1, uz.set(this, (0, xz.j)(this, Eu, !1)), this._isTranslucencyEnabled = ((0, xz.j)(this, nu), !1), bz.set(this, (0, xz.j)(this, iu, !1)), this._isDispersionEnabled = ((0, xz.j)(this, lu), !1), Ez.set(this, (0, xz.j)(this, tu, !1)), this._isScatteringEnabled = ((0, xz.j)(this, Hu), !1), nz.set(this, (0, xz.j)(this, Ou, !1)), this._scatteringDiffusionProfileIndex = ((0, xz.j)(this, pu), (0, xz.j)(this, du, 0)), this.refractionIntensity = ((0, xz.j)(this, Fu), (0, xz.j)(this, Zu, 1)), this.translucencyIntensity = ((0, xz.j)(this, Ru), (0, xz.j)(this, Ku, 1)), this._useAlbedoToTintRefraction = ((0, xz.j)(this, wu), !1), iz.set(this, (0, xz.j)(this, Xu, !1)), this._useAlbedoToTintTranslucency = ((0, xz.j)(this, fu), !1), lz.set(this, (0, xz.j)(this, su, !1)), this._thicknessTexture = ((0, xz.j)(this, ru), null), Mz.set(this, (0, xz.j)(this, ou, null)), this._refractionTexture = ((0, xz.j)(this, Nu), null), tz.set(this, (0, xz.j)(this, vu, null)), this._indexOfRefraction = ((0, xz.j)(this, xu), 1.5), Hz.set(this, (0, xz.j)(this, Ju, 1.5)), this._volumeIndexOfRefraction = ((0, xz.j)(this, Au), (0, xz.j)(this, Tu, -1)), this._invertRefractionY = ((0, xz.j)(this, Lu), !1), Oz.set(this, (0, xz.j)(this, Pu, !1)), this._linkRefractionWithTransparency = ((0, xz.j)(this, Gu), !1), pz.set(this, (0, xz.j)(this, au, !1)), this.minimumThickness = ((0, xz.j)(this, Vu), (0, xz.j)(this, mu, 0)), this.maximumThickness = ((0, xz.j)(this, qu), (0, xz.j)(this, hu, 1)), this.useThicknessAsDepth = ((0, xz.j)(this, Uu), (0, xz.j)(this, cu, !1)), this.tintColor = ((0, xz.j)(this, gu), (0, xz.j)(this, Su, Wz.c.White())), this.tintColorAtDistance = ((0, xz.j)(this, yu), (0, xz.j)(this, Du, 1)), this.dispersion = ((0, xz.j)(this, Qu), (0, xz.j)(this, Wu, 0)), this.diffusionDistance = ((0, xz.j)(this, eu), (0, xz.j)(this, ju, Wz.c.White())), this._useMaskFromThicknessTexture = ((0, xz.j)(this, Iu), !1), dz.set(this, (0, xz.j)(this, Bu, !1)), this._refractionIntensityTexture = ((0, xz.j)(this, Cu), null), Fz.set(this, (0, xz.j)(this, Yu, null)), this._translucencyIntensityTexture = ((0, xz.j)(this, ku), null), Zz.set(this, (0, xz.j)(this, zb, null)), this.translucencyColor = ((0, xz.j)(this, ub), (0, xz.j)(this, bb, null)), this._translucencyColorTexture = ((0, xz.j)(this, Eb), null), Rz.set(this, (0, xz.j)(this, nb, null)), this._useGltfStyleTextures = ((0, xz.j)(this, ib), !0), Kz.set(this, (0, xz.j)(this, lb, !0)), this.applyAlbedoAfterSubSurface = ((0, xz.j)(this, Mb), (0, xz.j)(this, tb, zz.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, xz.j)(this, Hb), (0, xz.j)(this, Ob, zz.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, xz.j)(this, pb), this._scene = wz.XT(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = wz._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = wz._dirtyCallbacks[32]
        }
        isReadyForSubMesh(zz, uz) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (zz._areTexturesDirty && uz.texturesEnabled) {
            if (this._thicknessTexture && Bz.d.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && Bz.d.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && Bz.d.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && Bz.d.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const zz = this._getRefractionTexture(uz);
            if (zz && Bz.d.RefractionTextureEnabled && !zz.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(zz, uz) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return zz.SUBSURFACE = !1, zz.SS_DISPERSION = !1, zz.SS_TRANSLUCENCY = !1, zz.SS_SCATTERING = !1, zz.SS_REFRACTION = !1, zz.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, zz.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, zz.SS_THICKNESSANDMASK_TEXTURE = !1, zz.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, zz.SS_HAS_THICKNESS = !1, zz.SS_REFRACTIONINTENSITY_TEXTURE = !1, zz.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, zz.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, zz.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, zz.SS_REFRACTIONMAP_3D = !1, zz.SS_REFRACTIONMAP_OPPOSITEZ = !1, zz.SS_LODINREFRACTIONALPHA = !1, zz.SS_GAMMAREFRACTION = !1, zz.SS_RGBDREFRACTION = !1, zz.SS_LINEARSPECULARREFRACTION = !1, zz.SS_LINKREFRACTIONTOTRANSPARENCY = !1, zz.SS_ALBEDOFORREFRACTIONTINT = !1, zz.SS_ALBEDOFORTRANSLUCENCYTINT = !1, zz.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, zz.SS_USE_THICKNESS_AS_DEPTH = !1, zz.SS_USE_GLTF_TEXTURES = !1, zz.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, zz.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, zz.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(zz.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (zz._areTexturesDirty) {
            if (zz.SUBSURFACE = !0, zz.SS_DISPERSION = this._isDispersionEnabled, zz.SS_TRANSLUCENCY = this._isTranslucencyEnabled, zz.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, zz.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, zz.SS_SCATTERING = this._isScatteringEnabled, zz.SS_THICKNESSANDMASK_TEXTURE = !1, zz.SS_REFRACTIONINTENSITY_TEXTURE = !1, zz.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, zz.SS_HAS_THICKNESS = !1, zz.SS_USE_GLTF_TEXTURES = !1, zz.SS_REFRACTION = !1, zz.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, zz.SS_REFRACTIONMAP_3D = !1, zz.SS_GAMMAREFRACTION = !1, zz.SS_RGBDREFRACTION = !1, zz.SS_LINEARSPECULARREFRACTION = !1, zz.SS_REFRACTIONMAP_OPPOSITEZ = !1, zz.SS_LODINREFRACTIONALPHA = !1, zz.SS_LINKREFRACTIONTOTRANSPARENCY = !1, zz.SS_ALBEDOFORREFRACTIONTINT = !1, zz.SS_ALBEDOFORTRANSLUCENCYTINT = !1, zz.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, zz.SS_USE_THICKNESS_AS_DEPTH = !1, zz.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, zz.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, zz._areTexturesDirty && uz.texturesEnabled && (this._thicknessTexture && Bz.d.ThicknessTextureEnabled && (0, Yz.db)(this._thicknessTexture, zz, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && Bz.d.RefractionIntensityTextureEnabled && (0, Yz.db)(this._refractionIntensityTexture, zz, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && Bz.d.TranslucencyIntensityTextureEnabled && (0, Yz.db)(this._translucencyIntensityTexture, zz, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && Bz.d.TranslucencyColorTextureEnabled && ((0, Yz.db)(this._translucencyColorTexture, zz, "SS_TRANSLUCENCYCOLOR_TEXTURE"), zz.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), zz.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, zz.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, zz.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, zz.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && uz.texturesEnabled) {
              const bz = this._getRefractionTexture(uz);
              bz && Bz.d.RefractionTextureEnabled && (zz.SS_REFRACTION = !0, zz.SS_REFRACTIONMAP_3D = bz.isCube, zz.SS_GAMMAREFRACTION = bz.gammaSpace, zz.SS_RGBDREFRACTION = bz.isRGBD, zz.SS_LINEARSPECULARREFRACTION = bz.linearSpecularLOD, zz.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && bz.isCube ? !bz.invertZ : bz.invertZ, zz.SS_LODINREFRACTIONALPHA = bz.lodLevelInAlpha, zz.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, zz.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, zz.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = bz.isCube && bz.boundingBoxSize, zz.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (zz.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(zz, uz, bz, Ez) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) zz.updateFloat2("vThicknessParam", 0, 0);
            else {
              Ez.getRenderingMesh().getWorldMatrix().decompose(Uz.l.ER[0]);
              const uz = Math.max(Math.abs(Uz.l.ER[0].x), Math.abs(Uz.l.ER[0].y), Math.abs(Uz.l.ER[0].z));
              zz.updateFloat2("vThicknessParam", this.minimumThickness * uz, (this.maximumThickness - this.minimumThickness) * uz)
            }
        }
        bindForSubMesh(zz, uz, bz, Ez) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const nz = Ez.materialDefines,
            iz = this._material.isFrozen,
            lz = this._material.realTimeFiltering,
            Mz = nz.LODBASEDMICROSFURACE,
            tz = this._getRefractionTexture(uz);
          if (!zz.useUbo || !iz || !zz.isSync) {
            if (this._thicknessTexture && Bz.d.ThicknessTextureEnabled && (zz.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, Yz.B)(this._thicknessTexture, zz, "thickness")), this._refractionIntensityTexture && Bz.d.RefractionIntensityTextureEnabled && nz.SS_REFRACTIONINTENSITY_TEXTURE && (zz.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, Yz.B)(this._refractionIntensityTexture, zz, "refractionIntensity")), this._translucencyColorTexture && Bz.d.TranslucencyColorTextureEnabled && nz.SS_TRANSLUCENCYCOLOR_TEXTURE && (zz.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, Yz.B)(this._translucencyColorTexture, zz, "translucencyColor")), this._translucencyIntensityTexture && Bz.d.TranslucencyIntensityTextureEnabled && nz.SS_TRANSLUCENCYINTENSITY_TEXTURE && (zz.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, Yz.B)(this._translucencyIntensityTexture, zz, "translucencyIntensity")), tz && Bz.d.RefractionTextureEnabled) {
              zz.M_("refractionMatrix", tz.getRefractionTextureMatrix());
              let uz = 1;
              tz.isCube || tz.depth && (uz = tz.depth);
              const bz = tz.getSize().width,
                Ez = this.volumeIndexOfRefraction;
              if (zz.updateFloat4("vRefractionInfos", tz.level, 1 / Ez, uz, this._invertRefractionY ? -1 : 1), zz.updateFloat4("vRefractionMicrosurfaceInfos", bz, tz.lodGenerationScale, tz.lodGenerationOffset, 1 / this.indexOfRefraction), lz && zz.updateFloat2("vRefractionFilteringInfo", bz, Math.log2(bz)), tz.boundingBoxSize) {
                const uz = tz;
                zz.updateVector3("vRefractionPosition", uz.boundingBoxPosition), zz.updateVector3("vRefractionSize", uz.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && zz.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), zz.updateColor3("vDiffusionDistance", this.diffusionDistance), zz.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), zz.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), zz.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), zz.updateFloat("dispersion", this.dispersion)
          }
          uz.texturesEnabled && (this._thicknessTexture && Bz.d.ThicknessTextureEnabled && zz.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && Bz.d.RefractionIntensityTextureEnabled && nz.SS_REFRACTIONINTENSITY_TEXTURE && zz.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && Bz.d.TranslucencyIntensityTextureEnabled && nz.SS_TRANSLUCENCYINTENSITY_TEXTURE && zz.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && Bz.d.TranslucencyColorTextureEnabled && nz.SS_TRANSLUCENCYCOLOR_TEXTURE && zz.setTexture("translucencyColorSampler", this._translucencyColorTexture), tz && Bz.d.RefractionTextureEnabled && (Mz ? zz.setTexture("refractionSampler", tz) : (zz.setTexture("refractionSampler", tz._lodTextureMid || tz), zz.setTexture("refractionSamplerLow", tz._lodTextureLow || tz), zz.setTexture("refractionSamplerHigh", tz._lodTextureHigh || tz))))
        }
        _getRefractionTexture(zz) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? zz.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(zz) {
          Bz.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && zz.push(this._refractionTexture)
        }
        hasTexture(zz) {
          return this._thicknessTexture === zz || (this._refractionTexture === zz || (this._refractionIntensityTexture === zz || (this._translucencyIntensityTexture === zz || this._translucencyColorTexture === zz)))
        }
        hasRenderTargetTextures() {
          return !!(Bz.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
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
        addFallbacks(zz, uz, bz) {
          return zz.SS_SCATTERING && uz.addFallback(bz++, "SS_SCATTERING"), zz.SS_TRANSLUCENCY && uz.addFallback(bz++, "SS_TRANSLUCENCY"), bz
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
      }, uz = new WeakMap, bz = new WeakMap, Ez = new WeakMap, nz = new WeakMap, iz = new WeakMap, lz = new WeakMap, Mz = new WeakMap, tz = new WeakMap, Hz = new WeakMap, Oz = new WeakMap, pz = new WeakMap, dz = new WeakMap, Fz = new WeakMap, Zz = new WeakMap, Rz = new WeakMap, Kz = new WeakMap, (() => {
        const uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(bu[Symbol.metadata] ?? null) : void 0;
        wz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Xz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], fz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], sz = [(0, Jz.G)(), (0, Jz.i)("_markScenePrePassDirty")], rz = [(0, Jz.G)()], oz = [(0, Jz.G)()], Nz = [(0, Jz.G)()], vz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Az = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Tz = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Lz = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Pz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Gz = [(0, Jz.G)()], az = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Vz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], mz = [(0, Jz.G)()], qz = [(0, Jz.G)()], hz = [(0, Jz.G)()], cz = [(0, Jz.q)()], gz = [(0, Jz.G)()], yz = [(0, Jz.G)()], Dz = [(0, Jz.q)()], Qz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], ez = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], jz = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Iz = [(0, Jz.q)()], Cz = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], kz = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], zu = [(0, Jz.G)()], uu = [(0, Jz.G)()], (0, xz.h)(zz, null, wz, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isRefractionEnabled" in zz,
            get: zz => zz.isRefractionEnabled,
            set: (zz, uz) => {
              zz.isRefractionEnabled = uz
            }
          },
          metadata: uz
        }, Eu, nu), (0, xz.h)(zz, null, Xz, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isTranslucencyEnabled" in zz,
            get: zz => zz.isTranslucencyEnabled,
            set: (zz, uz) => {
              zz.isTranslucencyEnabled = uz
            }
          },
          metadata: uz
        }, iu, lu), (0, xz.h)(zz, null, fz, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isDispersionEnabled" in zz,
            get: zz => zz.isDispersionEnabled,
            set: (zz, uz) => {
              zz.isDispersionEnabled = uz
            }
          },
          metadata: uz
        }, tu, Hu), (0, xz.h)(zz, null, sz, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isScatteringEnabled" in zz,
            get: zz => zz.isScatteringEnabled,
            set: (zz, uz) => {
              zz.isScatteringEnabled = uz
            }
          },
          metadata: uz
        }, Ou, pu), (0, xz.h)(zz, null, vz, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAlbedoToTintRefraction" in zz,
            get: zz => zz.useAlbedoToTintRefraction,
            set: (zz, uz) => {
              zz.useAlbedoToTintRefraction = uz
            }
          },
          metadata: uz
        }, Xu, fu), (0, xz.h)(zz, null, Az, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAlbedoToTintTranslucency" in zz,
            get: zz => zz.useAlbedoToTintTranslucency,
            set: (zz, uz) => {
              zz.useAlbedoToTintTranslucency = uz
            }
          },
          metadata: uz
        }, su, ru), (0, xz.h)(zz, null, Tz, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "thicknessTexture" in zz,
            get: zz => zz.thicknessTexture,
            set: (zz, uz) => {
              zz.thicknessTexture = uz
            }
          },
          metadata: uz
        }, ou, Nu), (0, xz.h)(zz, null, Lz, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "refractionTexture" in zz,
            get: zz => zz.refractionTexture,
            set: (zz, uz) => {
              zz.refractionTexture = uz
            }
          },
          metadata: uz
        }, vu, xu), (0, xz.h)(zz, null, Pz, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: zz => "indexOfRefraction" in zz,
            get: zz => zz.indexOfRefraction,
            set: (zz, uz) => {
              zz.indexOfRefraction = uz
            }
          },
          metadata: uz
        }, Ju, Au), (0, xz.h)(zz, null, az, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: zz => "invertRefractionY" in zz,
            get: zz => zz.invertRefractionY,
            set: (zz, uz) => {
              zz.invertRefractionY = uz
            }
          },
          metadata: uz
        }, Pu, Gu), (0, xz.h)(zz, null, Vz, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: zz => "linkRefractionWithTransparency" in zz,
            get: zz => zz.linkRefractionWithTransparency,
            set: (zz, uz) => {
              zz.linkRefractionWithTransparency = uz
            }
          },
          metadata: uz
        }, au, Vu), (0, xz.h)(zz, null, Qz, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "useMaskFromThicknessTexture" in zz,
            get: zz => zz.useMaskFromThicknessTexture,
            set: (zz, uz) => {
              zz.useMaskFromThicknessTexture = uz
            }
          },
          metadata: uz
        }, Bu, Cu), (0, xz.h)(zz, null, ez, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "refractionIntensityTexture" in zz,
            get: zz => zz.refractionIntensityTexture,
            set: (zz, uz) => {
              zz.refractionIntensityTexture = uz
            }
          },
          metadata: uz
        }, Yu, ku), (0, xz.h)(zz, null, jz, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "translucencyIntensityTexture" in zz,
            get: zz => zz.translucencyIntensityTexture,
            set: (zz, uz) => {
              zz.translucencyIntensityTexture = uz
            }
          },
          metadata: uz
        }, zb, ub), (0, xz.h)(zz, null, Cz, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "translucencyColorTexture" in zz,
            get: zz => zz.translucencyColorTexture,
            set: (zz, uz) => {
              zz.translucencyColorTexture = uz
            }
          },
          metadata: uz
        }, nb, ib), (0, xz.h)(zz, null, kz, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: zz => "useGltfStyleTextures" in zz,
            get: zz => zz.useGltfStyleTextures,
            set: (zz, uz) => {
              zz.useGltfStyleTextures = uz
            }
          },
          metadata: uz
        }, lb, Mb), (0, xz.h)(null, null, rz, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: zz => "_scatteringDiffusionProfileIndex" in zz,
            get: zz => zz._scatteringDiffusionProfileIndex,
            set: (zz, uz) => {
              zz._scatteringDiffusionProfileIndex = uz
            }
          },
          metadata: uz
        }, du, Fu), (0, xz.h)(null, null, oz, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "refractionIntensity" in zz,
            get: zz => zz.refractionIntensity,
            set: (zz, uz) => {
              zz.refractionIntensity = uz
            }
          },
          metadata: uz
        }, Zu, Ru), (0, xz.h)(null, null, Nz, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "translucencyIntensity" in zz,
            get: zz => zz.translucencyIntensity,
            set: (zz, uz) => {
              zz.translucencyIntensity = uz
            }
          },
          metadata: uz
        }, Ku, wu), (0, xz.h)(null, null, Gz, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: zz => "_volumeIndexOfRefraction" in zz,
            get: zz => zz._volumeIndexOfRefraction,
            set: (zz, uz) => {
              zz._volumeIndexOfRefraction = uz
            }
          },
          metadata: uz
        }, Tu, Lu), (0, xz.h)(null, null, mz, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: zz => "minimumThickness" in zz,
            get: zz => zz.minimumThickness,
            set: (zz, uz) => {
              zz.minimumThickness = uz
            }
          },
          metadata: uz
        }, mu, qu), (0, xz.h)(null, null, qz, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: zz => "maximumThickness" in zz,
            get: zz => zz.maximumThickness,
            set: (zz, uz) => {
              zz.maximumThickness = uz
            }
          },
          metadata: uz
        }, hu, Uu), (0, xz.h)(null, null, hz, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: zz => "useThicknessAsDepth" in zz,
            get: zz => zz.useThicknessAsDepth,
            set: (zz, uz) => {
              zz.useThicknessAsDepth = uz
            }
          },
          metadata: uz
        }, cu, gu), (0, xz.h)(null, null, cz, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "tintColor" in zz,
            get: zz => zz.tintColor,
            set: (zz, uz) => {
              zz.tintColor = uz
            }
          },
          metadata: uz
        }, Su, yu), (0, xz.h)(null, null, gz, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: zz => "tintColorAtDistance" in zz,
            get: zz => zz.tintColorAtDistance,
            set: (zz, uz) => {
              zz.tintColorAtDistance = uz
            }
          },
          metadata: uz
        }, Du, Qu), (0, xz.h)(null, null, yz, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: zz => "dispersion" in zz,
            get: zz => zz.dispersion,
            set: (zz, uz) => {
              zz.dispersion = uz
            }
          },
          metadata: uz
        }, Wu, eu), (0, xz.h)(null, null, Dz, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: zz => "diffusionDistance" in zz,
            get: zz => zz.diffusionDistance,
            set: (zz, uz) => {
              zz.diffusionDistance = uz
            }
          },
          metadata: uz
        }, ju, Iu), (0, xz.h)(null, null, Iz, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "translucencyColor" in zz,
            get: zz => zz.translucencyColor,
            set: (zz, uz) => {
              zz.translucencyColor = uz
            }
          },
          metadata: uz
        }, bb, Eb), (0, xz.h)(null, null, zu, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: zz => "applyAlbedoAfterSubSurface" in zz,
            get: zz => zz.applyAlbedoAfterSubSurface,
            set: (zz, uz) => {
              zz.applyAlbedoAfterSubSurface = uz
            }
          },
          metadata: uz
        }, tb, Hb), (0, xz.h)(null, null, uu, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: zz => "legacyTranslucency" in zz,
            get: zz => zz.legacyTranslucency,
            set: (zz, uz) => {
              zz.legacyTranslucency = uz
            }
          },
          metadata: uz
        }, Ob, pb), uz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uz
        })
      })(), zz.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, zz.DEFAULT_LEGACY_TRANSLUCENCY = !1, zz
    })();
    var Hu = bz(39530),
      Ou = bz(39511),
      pu = bz(39540),
      du = bz(39548),
      Fu = bz(39552),
      Zu = bz(39558),
      Ru = bz(39566),
      Ku = bz(39575),
      wu = bz(39061);
    const Xu = {
      effect: null,
      subMesh: null
    };
    class fu extends((0, Ru.d)((0, Zu.d)(gz.e))) {}
    class su extends((0, ez.h)(fu)) {
      constructor(zz) {
        super(zz), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class ru extends((0, Ku.c)(Iz.b)) {}
    let ou = (() => {
      var zz, uz;
      let Ez, nz = ru,
        lz = [],
        Mz = [];
      return zz = class extends nz {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(zz) {
          this._realTimeFiltering = zz, this.zuz(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(zz) {
          this._realTimeFilteringQuality = zz, this.zuz(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, xz.c)(this, uz, "f")
        }
        set debugMode(zz) {
          (0, xz.g)(this, uz, zz, "f")
        }
        constructor(bz, Ez) {
          super(bz, Ez, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || zz.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Uz.r(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = zz.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = Wz.c.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new Wz.c(0, 0, 0), this._albedoColor = new Wz.c(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new Wz.c(1, 1, 1), this._reflectionColor = new Wz.c(1, 1, 1), this._emissiveColor = new Wz.c(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = zz.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Tz.e(16), this._globalAmbientColor = new Wz.c(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, uz.set(this, (0, xz.j)(this, lz, 0)), this.debugLimit = ((0, xz.j)(this, Mz), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new Dz(this), this.clearCoat = new zu(this), this.iridescence = new bu(this), this.anisotropy = new nu(this), this.sheen = new lu(this), this.subSurface = new tu(this), this.detailMap = new Hu.e(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Bz.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Vz(this.XT()), this.prePassConfiguration = new Qz.e
        }
        get hasRenderTargetTextures() {
          return !!(Bz.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
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
        isReadyForSubMesh(zz, uz, bz) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Ez = uz._drawWrapper;
          if (Ez.effect && this.isFrozen && Ez._wasPreviouslyReady && Ez._wasPreviouslyUsingInstances === bz) return !0;
          uz.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), uz.materialDefines = new su(this._eventInfo.defineNames));
          const nz = uz.materialDefines;
          if (this._isReadyForSubMesh(uz)) return !0;
          const iz = this.XT(),
            lz = iz.uR();
          if (nz._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, iz.texturesEnabled)) {
            if (this._albedoTexture && Bz.d.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && Bz.d.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && Bz.d.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && Bz.d.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && Bz.d.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const zz = this._getReflectionTexture();
            if (zz && Bz.d.ReflectionTextureEnabled) {
              if (!zz.isReadyOrNotBlocking()) return !1;
              if (zz.irradianceTexture) {
                if (!zz.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!zz.sphericalPolynomial && zz.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && Bz.d.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && Bz.d.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (Bz.d.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (lz.getCaps().standardDerivatives && this._bumpTexture && Bz.d.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && Bz.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = nz, this._eventInfo.subMesh = uz, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (nz._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (nz.AREALIGHTUSED || nz.CLUSTLIGHT_BATCH)
            for (let pz = 0; pz < zz.lightSources.length; pz++)
              if (!zz.lightSources[pz]._isReady()) return !1;
          if (lz.getCaps().standardDerivatives || zz.isVerticesDataPresent(cz.j.NormalKind) || (zz.createNormals(!0), Az.e.Warn("PBRMaterial: Normals have been created for the mesh: " + zz.name)), !(0, Yz.d)(iz, zz, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const Mz = uz.effect,
            tz = nz._areLightsDisposed,
            Hz = this._prepareEffect(zz, uz.getRenderingMesh(), nz, this.onCompiled, this.onError, bz, null);
          let Oz = !1;
          if (Hz)
            if (this._onEffectCreatedObservable && (Xu.effect = Hz, Xu.subMesh = uz, this._onEffectCreatedObservable.notifyObservers(Xu)), this.allowShaderHotSwapping && Mz && !Hz.isReady()) {
              if (nz.markAsUnprocessed(), Oz = this.isFrozen, tz) return nz._areLightsDisposed = !0, !1
            } else iz.resetCachedMaterial(), uz.setEffect(Hz, nz, this._materialContext);
          return !(!uz.effect || !uz.effect.isReady()) && (nz._renderId = iz.getRenderId(), Ez._wasPreviouslyReady = !Oz, Ez._wasPreviouslyUsingInstances = !!bz, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(uz, bz, Ez) {
          let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            lz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            Mz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(uz, bz, Ez, lz, Mz), !Ez.isDirty) return null;
          Ez.markAsProcessed();
          const tz = this.XT().uR(),
            Hz = new Cz.c;
          let Oz = 0;
          Ez.USESPHERICALINVERTEX && Hz.addFallback(Oz++, "USESPHERICALINVERTEX"), Ez.FOG && Hz.addFallback(Oz, "FOG"), Ez.SPECULARAA && Hz.addFallback(Oz, "SPECULARAA"), Ez.POINTSIZE && Hz.addFallback(Oz, "POINTSIZE"), Ez.LOGARITHMICDEPTH && Hz.addFallback(Oz, "LOGARITHMICDEPTH"), Ez.PARALLAX && Hz.addFallback(Oz, "PARALLAX"), Ez.PARALLAX_RHS && Hz.addFallback(Oz, "PARALLAX_RHS"), Ez.PARALLAXOCCLUSION && Hz.addFallback(Oz++, "PARALLAXOCCLUSION"), Ez.ENVIRONMENTBRDF && Hz.addFallback(Oz++, "ENVIRONMENTBRDF"), Ez.TANGENT && Hz.addFallback(Oz++, "TANGENT"), Ez.BUMP && Hz.addFallback(Oz++, "BUMP"), Oz = (0, Yz.C)(Ez, Hz, this._maxSimultaneousLights, Oz), Ez.SPECULARTERM && Hz.addFallback(Oz++, "SPECULARTERM"), Ez.USESPHERICALFROMREFLECTIONMAP && Hz.addFallback(Oz++, "USESPHERICALFROMREFLECTIONMAP"), Ez.USEIRRADIANCEMAP && Hz.addFallback(Oz++, "USEIRRADIANCEMAP"), Ez.LIGHTMAP && Hz.addFallback(Oz++, "LIGHTMAP"), Ez.NORMAL && Hz.addFallback(Oz++, "NORMAL"), Ez.AMBIENT && Hz.addFallback(Oz++, "AMBIENT"), Ez.EMISSIVE && Hz.addFallback(Oz++, "EMISSIVE"), Ez.VERTEXCOLOR && Hz.addFallback(Oz++, "VERTEXCOLOR"), Ez.MORPHTARGETS && Hz.addFallback(Oz++, "MORPHTARGETS"), Ez.MULTIVIEW && Hz.addFallback(0, "MULTIVIEW");
          const pz = [cz.j.PositionKind];
          Ez.NORMAL && pz.push(cz.j.NormalKind), Ez.TANGENT && pz.push(cz.j.TangentKind);
          for (let zz = 1; zz <= 6; ++zz) Ez["UV" + zz] && pz.push(`uv${1===zz?"":zz}`);
          Ez.VERTEXCOLOR && pz.push(cz.j.ColorKind), (0, Yz.I)(pz, uz, Ez, Hz), (0, Yz.M)(pz, Ez), (0, Yz.P)(pz, uz, Ez), (0, Yz.G)(pz, uz, Ez);
          let dz = "pbr";
          const Fz = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            Zz = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, Yz.sb)(Fz, Zz, !0);
          const Rz = ["Material", "Scene", "Mesh"],
            Kz = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Ez.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = Hz, this._eventInfo.fallbackRank = Oz, this._eventInfo.defines = Ez, this._eventInfo.uniforms = Fz, this._eventInfo.attributes = pz, this._eventInfo.samplers = Zz, this._eventInfo.uniformBuffersNames = Rz, this._eventInfo.customCode = void 0, this._eventInfo.mesh = uz, this._eventInfo.indexParameters = Kz, this._callbackPluginEventGeneric(128, this._eventInfo), Fu.d.AddUniformsAndSamplers(Fz, Zz), Qz.e.AddUniforms(Fz), Qz.e.AddSamplers(Zz), (0, Ou.c)(Fz), this._useVertexPulling) {
            const zz = bz?.geometry;
            zz && (this._vertexPullingMetadata = (0, pu.e)(zz), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((zz, uz) => {
              Fz.push(`vp_${uz}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          jz.c && (jz.c.PrepareUniforms(Fz, Ez), jz.c.PrepareSamplers(Zz, Ez)), (0, Yz.ub)({
            uniformsNames: Fz,
            uniformBuffersNames: Rz,
            samplers: Zz,
            defines: Ez,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const wz = {};
          this.customShaderNameResolve && (dz = this.customShaderNameResolve(dz, Fz, Rz, Zz, Ez, pz, wz));
          const Xz = Ez.toString(),
            fz = tz.createEffect(dz, {
              attributes: pz,
              uniformsNames: Fz,
              uniformBuffersNames: Rz,
              samplers: Zz,
              defines: Xz,
              fallbacks: Hz,
              onCompiled: nz,
              onError: iz,
              indexParameters: Kz,
              processFinalCode: wz.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Ez.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: zz._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, tz);
          return this._eventInfo.customCode = void 0, fz
        }
        _prepareDefines(uz, bz, Ez) {
          let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const lz = bz.hasThinInstances,
            Mz = this.XT(),
            tz = Mz.uR();
          (0, Yz.$)(Mz, uz, Ez, !0, this._maxSimultaneousLights, this._disableLighting), Ez._needNormals = !0, (0, Yz.ib)(Mz, Ez);
          const Hz = this.needAlphaBlendingForMesh(uz) && this.XT().useOrderIndependentTransparency;
          if ((0, Yz.mb)(Mz, Ez, this.canRenderToMRT && !Hz), (0, Yz.kb)(Mz, Ez, Hz), Fu.d.PrepareDefines(tz.currentRenderPassId, uz, Ez), Ez.METALLICWORKFLOW = this.isMetallicWorkflow(), Ez._areTexturesDirty) {
            Ez._needUVs = !1;
            for (let zz = 1; zz <= 6; ++zz) Ez["MAINUV" + zz] = !1;
            if (Mz.texturesEnabled) {
              Ez.ALBEDODIRECTUV = 0, Ez.BASE_WEIGHTDIRECTUV = 0, Ez.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Ez.AMBIENTDIRECTUV = 0, Ez.OPACITYDIRECTUV = 0, Ez.EMISSIVEDIRECTUV = 0, Ez.REFLECTIVITYDIRECTUV = 0, Ez.MICROSURFACEMAPDIRECTUV = 0, Ez.METALLIC_REFLECTANCEDIRECTUV = 0, Ez.REFLECTANCEDIRECTUV = 0, Ez.BUMPDIRECTUV = 0, Ez.LIGHTMAPDIRECTUV = 0, tz.getCaps().textureLOD && (Ez.LODBASEDMICROSFURACE = !0), this._albedoTexture && Bz.d.DiffuseTextureEnabled ? ((0, Yz.db)(this._albedoTexture, Ez, "ALBEDO"), Ez.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Ez.ALBEDO = !1, this._baseWeightTexture && Bz.d.BaseWeightTextureEnabled ? (0, Yz.db)(this._baseWeightTexture, Ez, "BASE_WEIGHT") : Ez.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && Bz.d.BaseDiffuseRoughnessTextureEnabled ? (0, Yz.db)(this._baseDiffuseRoughnessTexture, Ez, "BASE_DIFFUSE_ROUGHNESS") : Ez.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && Bz.d.AmbientTextureEnabled ? ((0, Yz.db)(this._ambientTexture, Ez, "AMBIENT"), Ez.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Ez.AMBIENT = !1, this._opacityTexture && Bz.d.OpacityTextureEnabled ? ((0, Yz.db)(this._opacityTexture, Ez, "OPACITY"), Ez.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Ez.OPACITY = !1;
              const zz = this._getReflectionTexture(),
                uz = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || tz.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, Yz.Z)(Mz, zz, Ez, this.realTimeFiltering, this.realTimeFilteringQuality, !uz), this._lightmapTexture && Bz.d.LightmapTextureEnabled ? ((0, Yz.db)(this._lightmapTexture, Ez, "LIGHTMAP"), Ez.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Ez.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Ez.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Ez.LIGHTMAP = !1, this._emissiveTexture && Bz.d.EmissiveTextureEnabled ? ((0, Yz.db)(this._emissiveTexture, Ez, "EMISSIVE"), Ez.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Ez.EMISSIVE = !1, Bz.d.SpecularTextureEnabled ? (this._metallicTexture ? ((0, Yz.db)(this._metallicTexture, Ez, "REFLECTIVITY"), Ez.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Ez.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Ez.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Ez.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Ez.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, Yz.db)(this._reflectivityTexture, Ez, "REFLECTIVITY"), Ez.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Ez.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Ez.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Ez.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Ez.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, Yz.db)(this._metallicReflectanceTexture, Ez, "METALLIC_REFLECTANCE"), Ez.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Ez.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, Yz.db)(this._reflectanceTexture, Ez, "REFLECTANCE"), Ez.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Ez.REFLECTANCE = !1) : (Ez.METALLIC_REFLECTANCE = !1, Ez.REFLECTANCE = !1), this._microSurfaceTexture ? (0, Yz.db)(this._microSurfaceTexture, Ez, "MICROSURFACEMAP") : Ez.MICROSURFACEMAP = !1) : (Ez.REFLECTIVITY = !1, Ez.MICROSURFACEMAP = !1), tz.getCaps().standardDerivatives && this._bumpTexture && Bz.d.BumpTextureEnabled && !this._disableBumpMap ? ((0, Yz.db)(this._bumpTexture, Ez, "BUMP"), this._useParallax && this._albedoTexture && Bz.d.DiffuseTextureEnabled ? (Ez.PARALLAX = !0, Ez.PARALLAX_RHS = Mz.useRightHandedSystem, Ez.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Ez.PARALLAX = !1, Ez.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Ez.BUMP = !1, Ez.PARALLAX = !1, Ez.PARALLAX_RHS = !1, Ez.PARALLAXOCCLUSION = !1, Ez.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Bz.d.ReflectionTextureEnabled ? (Ez.ENVIRONMENTBRDF = !0, Ez.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Ez.ENVIRONMENTBRDF = !1, Ez.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Ez.ALPHAFROMALBEDO = !0 : Ez.ALPHAFROMALBEDO = !1
            }
            Ez.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === zz.LIGHTFALLOFF_STANDARD ? (Ez.USEPHYSICALLIGHTFALLOFF = !1, Ez.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === zz.LIGHTFALLOFF_GLTF ? (Ez.USEPHYSICALLIGHTFALLOFF = !1, Ez.USEGLTFLIGHTFALLOFF = !0) : (Ez.USEPHYSICALLIGHTFALLOFF = !0, Ez.USEGLTFLIGHTFALLOFF = !1), Ez.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Ez.TWOSIDEDLIGHTING = !0 : Ez.TWOSIDEDLIGHTING = !1, Ez.MIRRORED = !!Mz._mirroredCameraPosition, Ez.SPECULARAA = tz.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Ez._areTexturesDirty || Ez._areMiscDirty) && (Ez.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Ez.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Ez.ALPHABLEND = this.needAlphaBlendingForMesh(uz), Ez.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Ez.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Ez._areTexturesDirty && (Ez.TEXTURE_REPETITION_MODE = tz.version > 1 || tz.isWebGPU ? this.textureRepetitionMode : 0), Ez._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Ez), Ez.FORCENORMALFORWARD = this._forceNormalForward, Ez.RADIANCEOCCLUSION = this._useRadianceOcclusion, Ez.HORIZONOCCLUSION = this._useHorizonOcclusion, Ez._areMiscDirty && ((0, Yz.hb)(uz, Mz, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(uz), Ez, this._applyDecalMapAfterDetailMap, this._useVertexPulling, bz, this._isVertexOutputInvariant), Ez.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !uz.isVerticesDataPresent(cz.j.NormalKind), Ez.DEBUGMODE = this._debugMode), (0, Yz.W)(Mz, tz, this, Ez, !!nz, iz, lz), this._eventInfo.defines = Ez, this._eventInfo.mesh = uz, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Yz.T)(uz, Ez, !0, !0, !0, this._transparencyMode !== zz.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(zz, uz, bz) {
          const Ez = {
            clipPlane: !1,
            useInstances: !1,
            ...bz
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const bz = new su(this._eventInfo.defineNames),
              nz = this._prepareEffect(zz, zz, bz, void 0, void 0, Ez.useInstances, Ez.clipPlane);
            this._onEffectCreatedObservable && (Xu.effect = nz, Xu.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Xu)), nz.isReady() ? uz && uz(this) : nz.onCompileObservable.add((() => {
              uz && uz(this)
            }))
          })()
        }
        buildUniformLayout() {
          const zz = this._uniformBuffer;
          zz.addUniform("vAlbedoInfos", 2), zz.addUniform("vBaseWeightInfos", 2), zz.addUniform("vBaseDiffuseRoughnessInfos", 2), zz.addUniform("vAmbientInfos", 4), zz.addUniform("vOpacityInfos", 2), zz.addUniform("vEmissiveInfos", 2), zz.addUniform("vLightmapInfos", 2), zz.addUniform("vReflectivityInfos", 3), zz.addUniform("vMicroSurfaceSamplerInfos", 2), zz.addUniform("vBumpInfos", 3), zz.addUniform("albedoMatrix", 16), zz.addUniform("baseWeightMatrix", 16), zz.addUniform("baseDiffuseRoughnessMatrix", 16), zz.addUniform("ambientMatrix", 16), zz.addUniform("opacityMatrix", 16), zz.addUniform("emissiveMatrix", 16), zz.addUniform("lightmapMatrix", 16), zz.addUniform("reflectivityMatrix", 16), zz.addUniform("microSurfaceSamplerMatrix", 16), zz.addUniform("bumpMatrix", 16), zz.addUniform("vTangentSpaceParams", 2), zz.addUniform("vAlbedoColor", 4), zz.addUniform("baseWeight", 1), zz.addUniform("baseDiffuseRoughness", 1), zz.addUniform("vLightingIntensity", 4), zz.addUniform("pointSize", 1), zz.addUniform("vReflectivityColor", 4), zz.addUniform("vEmissiveColor", 3), zz.addUniform("vAmbientColor", 3), zz.addUniform("vDebugMode", 2), zz.addUniform("vMetallicReflectanceFactors", 4), zz.addUniform("vMetallicReflectanceInfos", 2), zz.addUniform("metallicReflectanceMatrix", 16), zz.addUniform("vReflectanceInfos", 2), zz.addUniform("reflectanceMatrix", 16), zz.addUniform("cameraInfo", 4), zz.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Yz.pb)(zz, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(zz, uz, bz) {
          const Ez = this.XT(),
            nz = bz.materialDefines;
          if (!nz) return;
          const iz = bz.effect;
          if (!iz) return;
          this._activeEffect = iz, uz.getMeshUniformBuffer().bindToEffect(iz, "Mesh"), uz.transferToEffect(zz);
          const lz = Ez.uR();
          this._uniformBuffer.bindToEffect(iz, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Ez, uz, zz, this.isFrozen), Fu.d.Bind(lz.currentRenderPassId, this._activeEffect, uz, zz, this);
          const Mz = Ez.activeCamera;
          Mz ? this._uniformBuffer.updateFloat4("cameraInfo", Mz.minZ, Mz.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const tz = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", tz[0], tz[1], tz[2], tz[3]), this._eventInfo.subMesh = bz, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), nz.OBJECTSPACE_NORMALMAP && (zz.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const Hz = this._mustRebind(Ez, iz, bz, uz.visibility),
            Oz = lz._features.needToAlwaysBindUniformBuffers;
          (0, Yz.g)(uz, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, pu.c)(this._activeEffect, this._vertexPullingMetadata);
          let pz = null;
          const dz = this._uniformBuffer;
          if (Hz) {
            if (this.bindViewProjection(iz), pz = this._getReflectionTexture(), !dz.useUbo || !this.isFrozen || !dz.isSync || bz._drawWrapper._forceRebindOnNextCall) {
              if (Ez.texturesEnabled && (this._albedoTexture && Bz.d.DiffuseTextureEnabled && (dz.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, Yz.B)(this._albedoTexture, dz, "albedo")), this._baseWeightTexture && Bz.d.BaseWeightTextureEnabled && (dz.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, Yz.B)(this._baseWeightTexture, dz, "baseWeight")), this._baseDiffuseRoughnessTexture && Bz.d.BaseDiffuseRoughnessTextureEnabled && (dz.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, Yz.B)(this._baseDiffuseRoughnessTexture, dz, "baseDiffuseRoughness")), this._ambientTexture && Bz.d.AmbientTextureEnabled && (dz.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, Yz.B)(this._ambientTexture, dz, "ambient")), this._opacityTexture && Bz.d.OpacityTextureEnabled && (dz.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Yz.B)(this._opacityTexture, dz, "opacity")), this._emissiveTexture && Bz.d.EmissiveTextureEnabled && (dz.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Yz.B)(this._emissiveTexture, dz, "emissive")), this._lightmapTexture && Bz.d.LightmapTextureEnabled && (dz.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Yz.B)(this._lightmapTexture, dz, "lightmap")), Bz.d.SpecularTextureEnabled && (this._metallicTexture ? (dz.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, Yz.B)(this._metallicTexture, dz, "reflectivity")) : this._reflectivityTexture && (dz.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, Yz.B)(this._reflectivityTexture, dz, "reflectivity")), this._metallicReflectanceTexture && (dz.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, Yz.B)(this._metallicReflectanceTexture, dz, "metallicReflectance")), this._reflectanceTexture && nz.REFLECTANCE && (dz.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, Yz.B)(this._reflectanceTexture, dz, "reflectance")), this._microSurfaceTexture && (dz.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, Yz.B)(this._microSurfaceTexture, dz, "microSurfaceSampler"))), this._bumpTexture && lz.getCaps().standardDerivatives && Bz.d.BumpTextureEnabled && !this._disableBumpMap && (dz.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, Yz.B)(this._bumpTexture, dz, "bump"), Ez._mirroredCameraPosition ? dz.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : dz.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Yz.m)(Ez, nz, dz, this._reflectionColor, pz, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && dz.updateFloat("pointSize", this.pointSize), nz.METALLICWORKFLOW) {
                Wz.k.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, Wz.k.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const zz = this.subSurface?._indexOfRefraction ?? 1.5,
                  uz = 1;
                Wz.k.Color4[0].b = zz;
                const bz = Math.pow((zz - uz) / (zz + uz), 2);
                Wz.k.Color4[0].a = bz, dz.updateDirectColor4("vReflectivityColor", Wz.k.Color4[0]), dz.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else dz.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              dz.updateColor3("vEmissiveColor", Bz.d.EmissiveTextureEnabled ? this._emissiveColor : Wz.c.BlackReadOnly), !nz.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? dz.updateColor4("vAlbedoColor", this._albedoColor, 1) : dz.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), dz.updateFloat("baseWeight", this._baseWeight), dz.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Ez.environmentIntensity, this._lightingInfos.w = this._specularIntensity, dz.updateVector4("vLightingIntensity", this._lightingInfos), Ez.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), dz.updateColor3("vAmbientColor", this._globalAmbientColor), dz.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Ez.texturesEnabled && (this._albedoTexture && Bz.d.DiffuseTextureEnabled && dz.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && Bz.d.BaseWeightTextureEnabled && dz.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && Bz.d.BaseDiffuseRoughnessTextureEnabled && dz.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && Bz.d.AmbientTextureEnabled && dz.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && Bz.d.OpacityTextureEnabled && dz.setTexture("opacitySampler", this._opacityTexture), (0, Yz.n)(Ez, nz, dz, pz, this.realTimeFiltering), nz.ENVIRONMENTBRDF && dz.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && Bz.d.EmissiveTextureEnabled && dz.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && Bz.d.LightmapTextureEnabled && dz.setTexture("lightmapSampler", this._lightmapTexture), Bz.d.SpecularTextureEnabled && (this._metallicTexture ? dz.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && dz.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && dz.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && nz.REFLECTANCE && dz.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && dz.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && lz.getCaps().standardDerivatives && Bz.d.BumpTextureEnabled && !this._disableBumpMap && dz.setTexture("bumpSampler", this._bumpTexture)), this.XT().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(uz) && this.XT().depthPeelingRenderer.bind(iz), this._eventInfo.subMesh = bz, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Ou.d)(this._activeEffect, this, Ez), this.bindEyePosition(iz)
          } else Oz && (this._needToBindSceneUbo = !0);
          !Hz && this.isFrozen && !Oz || !Ez.lightsEnabled || this._disableLighting || (0, Yz.q)(Ez, uz, this._activeEffect, nz, this._maxSimultaneousLights), !Hz && this.isFrozen || ((Ez.fogEnabled && uz.applyFog && Ez.fogMode !== hz.e.FOGMODE_NONE || pz || this.subSurface.refractionTexture || uz.receiveShadows || nz.PREPASS || nz.CLUSTLIGHT_BATCH) && this.bindView(iz), (0, Yz.k)(Ez, uz, this._activeEffect, !0), nz.NUM_MORPH_INFLUENCERS && (0, Yz.w)(uz, this._activeEffect), nz.BAKED_VERTEX_ANIMATION_TEXTURE && uz.bakedVertexAnimationManager?.bind(iz, nz.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Yz.t)(nz, this._activeEffect, Ez)), this._afterBind(uz, this._activeEffect, bz), dz.update()
        }
        getAnimatables() {
          const zz = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && zz.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && zz.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && zz.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && zz.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && zz.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && zz.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && zz.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? zz.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && zz.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && zz.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && zz.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && zz.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && zz.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && zz.push(this._microSurfaceTexture), zz
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.XT().environmentTexture
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
          const zz = this.XT().enableSubSurfaceForPrePass();
          return zz && (zz.enabled = !0), !0
        }
        dispose(zz, uz) {
          this._breakShaderLoadedCheck = !0, uz && (this._environmentBRDFTexture && this.XT().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(zz, uz)
        }
      }, uz = new WeakMap, (() => {
        const uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(nz[Symbol.metadata] ?? null) : void 0;
        Ez = [(0, Jz.i)("_markAllSubMeshesAsMiscDirty")], (0, xz.h)(zz, null, Ez, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: zz => "debugMode" in zz,
            get: zz => zz.debugMode,
            set: (zz, uz) => {
              zz.debugMode = uz
            }
          },
          metadata: uz
        }, lz, Mz), uz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uz
        })
      })(), zz.PBRMATERIAL_OPAQUE = iz.c.MATERIAL_OPAQUE, zz.PBRMATERIAL_ALPHATEST = iz.c.MATERIAL_ALPHATEST, zz.PBRMATERIAL_ALPHABLEND = iz.c.MATERIAL_ALPHABLEND, zz.PBRMATERIAL_ALPHATESTANDBLEND = iz.c.MATERIAL_ALPHATESTANDBLEND, zz.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, zz.LIGHTFALLOFF_PHYSICAL = 0, zz.LIGHTFALLOFF_GLTF = 1, zz.LIGHTFALLOFF_STANDARD = 2, zz.ForceGLSL = !1, zz._ShaderLoader = new du.c((() => [Promise.all([bz.e(307), bz.e(318)]).then((() => bz(60668))), Promise.all([bz.e(312), bz.e(308), bz.e(372), bz.e(321), bz.e(371)]).then((() => bz(60690)))]), (() => [Promise.all([bz.e(326), bz.e(328), bz.e(335)]).then((() => bz(60789))), Promise.all([bz.e(326), bz.e(329), bz.e(375), bz.e(339), bz.e(374)]).then((() => bz(60815)))])), zz
    })();
    Object.getOwnPropertyDescriptor(ou.prototype, "decalMap") || Object.defineProperty(ou.prototype, "decalMap", (0, wu.f)("PBRBaseMaterial", "decalMap")), (0, bz(41037).b)();
    var Nu = bz(39182);
    var vu = bz(39258),
      xu = bz(41019),
      Ju = bz(39011),
      Au = bz(39022),
      Tu = bz(39128);
    let Lu = !1;
    const Pu = new Wz.g,
      Gu = new Wz.g;
    class au extends xu.e {
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
          for (let uz = 0; uz < this._textures.length; uz++) this._textures[uz].wrapU = zz
      }
      set wrapV(zz) {
        if (this._textures)
          for (let uz = 0; uz < this._textures.length; uz++) this._textures[uz].wrapV = zz
      }
      constructor(zz, uz, bz, Ez, nz, iz) {
        const lz = !(!nz || !nz.generateMipMaps) && nz.generateMipMaps,
          Mz = !(!nz || !nz.generateDepthTexture) && nz.generateDepthTexture,
          tz = nz && nz.depthTextureFormat ? nz.depthTextureFormat : 15,
          Hz = !nz || void 0 === nz.doNotChangeAspectRatio || nz.doNotChangeAspectRatio,
          Oz = !(!nz || !nz.drawOnlyOnFirstAttachmentByDefault) && nz.drawOnlyOnFirstAttachmentByDefault;
        if (super(zz, uz, Ez, lz, Hz, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Lu || (Lu = !0, Au.ThinEngine.prototype.restoreSingleAttachment = function() {
            const zz = this._gl;
            this.bindAttachments([zz.BACK])
          }, Au.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const zz = this._gl;
            this.bindAttachments([zz.COLOR_ATTACHMENT0])
          }, Au.ThinEngine.prototype.buildTextureLayout = function(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const bz = this._gl,
              Ez = [];
            if (uz) Ez.push(bz.BACK);
            else
              for (let nz = 0; nz < zz.length; nz++) zz[nz] ? Ez.push(bz["COLOR_ATTACHMENT" + nz]) : Ez.push(bz.NONE);
            return Ez
          }, Au.ThinEngine.prototype.bindAttachments = function(zz) {
            const uz = this._gl,
              bz = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, bz)
              for (let Ez = 0; Ez < zz.length; Ez++) zz[Ez] !== uz.NONE && bz[Ez] && (0, Tu.k)(bz[Ez].format) && (this._integerMRTAttachmentsMask |= 1 << Ez);
            uz.drawBuffers(zz)
          }, Au.ThinEngine.prototype.clearAttachments = function(zz, uz, bz, Ez) {
            let nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const lz = this._currentRenderTarget?.textures;
            let Mz = !1;
            if (bz && zz && lz)
              for (let tz = 0; tz < uz.length; tz++) {
                const zz = lz[tz];
                if (uz[tz] !== this._gl.NONE && zz && (0, Tu.k)(zz.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  Mz = !0;
                  break
                }
              }
            if (!Mz || !zz || !lz) return this.bindAttachments(uz), void this.clear(zz, bz, Ez, nz, iz);
            this.bindAttachments(uz), this._applyColorWriteState();
            for (let tz = 0; tz < uz.length; tz++) {
              const bz = lz[tz];
              if (uz[tz] !== this._gl.NONE && bz) {
                let uz = zz;
                if ((0, Tu.k)(bz.format)) {
                  const Ez = (0, Tu.n)(bz.type);
                  uz = Ez ? Pu : Gu;
                  const nz = Ez ? 255 : 1;
                  uz.r = Math.round(zz.r * nz), uz.g = Math.round(zz.g * nz), uz.b = Math.round(zz.b * nz), uz.a = Math.round(zz.a * nz)
                }
                this._clearColorAttachment(tz, uz, bz.format, bz.type)
              }
            }
            if (Ez || nz) {
              const zz = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Ez, nz, iz)
              } finally {
                this._integerMRTAttachmentsMask = zz
              }
            }
          }, Au.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              bz = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, zz.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(zz), uz || this.generateMipMapsMultiFramebuffer(zz), bz && (zz._MSAAFramebuffer && this._bindUnboundFramebuffer(zz._framebuffer), bz()), this._bindUnboundFramebuffer(null)
          }, Au.ThinEngine.prototype.createMultipleRenderTarget = function(zz, uz) {
            let bz, Ez = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              nz = !1,
              iz = !0,
              lz = !1,
              Mz = !1,
              tz = 1,
              Hz = 1,
              Oz = [],
              pz = [],
              dz = [],
              Fz = [],
              Zz = [],
              Rz = [],
              Kz = [],
              wz = [],
              Xz = [],
              fz = !1;
            const sz = this._createHardwareRenderTargetWrapper(!0, !1, zz);
            void 0 !== uz && (nz = void 0 !== uz.generateMipMaps && uz.generateMipMaps, iz = void 0 === uz.generateDepthBuffer || uz.generateDepthBuffer, lz = void 0 !== uz.generateStencilBuffer && uz.generateStencilBuffer, Mz = void 0 !== uz.generateDepthTexture && uz.generateDepthTexture, tz = uz.Yiz ?? 1, Hz = uz.samples ?? Hz, Oz = uz.types || Oz, pz = uz.samplingModes || pz, dz = uz.useSRGBBuffers || dz, Fz = uz.formats || Fz, Zz = uz.targetTypes || Zz, Rz = uz.faceIndex || Rz, Kz = uz.layerIndex || Kz, wz = uz.layerCounts || wz, Xz = uz.labels || Xz, fz = uz.dontCreateTextures ?? !1, this.PR > 1 && (13 === uz.depthTextureFormat || 17 === uz.depthTextureFormat || 16 === uz.depthTextureFormat || 14 === uz.depthTextureFormat || 18 === uz.depthTextureFormat) && (bz = uz.depthTextureFormat)), void 0 === bz && (bz = lz ? 13 : 14);
            const rz = this._gl,
              oz = this._currentFramebuffer,
              Nz = rz.createFramebuffer();
            this._bindUnboundFramebuffer(Nz);
            const vz = zz.width ?? zz,
              xz = zz.height ?? zz,
              Jz = [],
              Tz = [],
              Lz = this.PR > 1 && (13 === bz || 17 === bz || 18 === bz);
            sz.label = uz?.label ?? "MultiRenderTargetWrapper", sz._framebuffer = Nz, sz._generateDepthBuffer = Mz || iz, sz._generateStencilBuffer = Mz ? Lz : lz, sz._depthStencilBuffer = this._setupFramebufferDepthAttachments(sz._generateStencilBuffer, sz._generateDepthBuffer, vz, xz, 1, bz), sz._attachments = Tz;
            for (let Pz = 0; Pz < tz; Pz++) {
              let zz = pz[Pz] || 3,
                uz = Oz[Pz] || 0,
                bz = dz[Pz] || !1;
              const Ez = Fz[Pz] || 5,
                iz = Zz[Pz] || 3553,
                lz = wz[Pz] ?? 1;
              (1 !== uz || this._caps.textureFloatLinearFiltering) && (2 !== uz || this._caps.textureHalfFloatLinearFiltering) || (zz = 1);
              const Mz = this._getSamplingParameters(zz, nz);
              1 !== uz || this._caps.textureFloat || (uz = 0, Az.e.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), bz = bz && this._caps.supportSRGBBuffers && (this.PR > 1 || this.isWebGPU);
              const tz = this.PR > 1,
                Hz = rz[tz ? "COLOR_ATTACHMENT" + Pz : "COLOR_ATTACHMENT" + Pz + "_WEBGL"];
              if (Tz.push(Hz), -1 === iz || fz) continue;
              const Rz = new Ju.c(this, 6);
              Jz[Pz] = Rz, rz.activeTexture(rz["TEXTURE" + Pz]), rz.bindTexture(iz, Rz._hardwareTexture.underlyingResource), rz.texParameteri(iz, rz.TEXTURE_MAG_FILTER, Mz.mag), rz.texParameteri(iz, rz.TEXTURE_MIN_FILTER, Mz.min), rz.texParameteri(iz, rz.TEXTURE_WRAP_S, rz.CLAMP_TO_EDGE), rz.texParameteri(iz, rz.TEXTURE_WRAP_T, rz.CLAMP_TO_EDGE);
              const Kz = this._getRGBABufferInternalSizedFormat(uz, Ez, bz),
                oz = this._getInternalFormat(Ez),
                Nz = this._getWebGLTextureType(uz);
              if (!tz || 35866 !== iz && 32879 !== iz)
                if (34067 === iz) {
                  for (let zz = 0; zz < 6; zz++) rz.texImage2D(rz.TEXTURE_CUBE_MAP_POSITIVE_X + zz, 0, Kz, vz, xz, 0, oz, Nz, null);
                  Rz.isCube = !0
                } else rz.texImage2D(rz.TEXTURE_2D, 0, Kz, vz, xz, 0, oz, Nz, null);
              else 35866 === iz ? Rz.is2DArray = !0 : Rz.is3D = !0, Rz.baseDepth = Rz.depth = lz, rz.texImage3D(iz, 0, Kz, vz, xz, lz, 0, oz, Nz, null);
              nz && rz.generateMipmap(iz), this._bindTextureDirectly(iz, null), Rz.baseWidth = vz, Rz.baseHeight = xz, Rz.width = vz, Rz.height = xz, Rz.isReady = !0, Rz.samples = 1, Rz.generateMipMaps = nz, Rz.samplingMode = zz, Rz.type = uz, Rz._useSRGBBuffer = bz, Rz.format = Ez, Rz.label = Xz[Pz] ?? sz.label + "-Texture" + Pz, this._internalTexturesCache.push(Rz)
            }
            if (Mz && this._caps.depthTextureExtension && !fz) {
              const zz = new Ju.c(this, 14);
              let uz = 5,
                Ez = rz.DEPTH_COMPONENT16,
                iz = rz.DEPTH_COMPONENT,
                lz = rz.UNSIGNED_SHORT,
                Mz = rz.DEPTH_ATTACHMENT;
              this.PR < 2 ? Ez = rz.DEPTH_COMPONENT : 14 === bz ? (uz = 1, lz = rz.FLOAT, Ez = rz.DEPTH_COMPONENT32F) : 18 === bz ? (uz = 0, lz = rz.FLOAT_32_UNSIGNED_INT_24_8_REV, Ez = rz.DEPTH32F_STENCIL8, iz = rz.DEPTH_STENCIL, Mz = rz.DEPTH_STENCIL_ATTACHMENT) : 16 === bz ? (uz = 0, lz = rz.UNSIGNED_INT, Ez = rz.DEPTH_COMPONENT24, Mz = rz.DEPTH_ATTACHMENT) : 13 !== bz && 17 !== bz || (uz = 12, lz = rz.UNSIGNED_INT_24_8, Ez = rz.DEPTH24_STENCIL8, iz = rz.DEPTH_STENCIL, Mz = rz.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(rz.TEXTURE_2D, zz, !0), rz.texParameteri(rz.TEXTURE_2D, rz.TEXTURE_MAG_FILTER, rz.NEAREST), rz.texParameteri(rz.TEXTURE_2D, rz.TEXTURE_MIN_FILTER, rz.NEAREST), rz.texParameteri(rz.TEXTURE_2D, rz.TEXTURE_WRAP_S, rz.CLAMP_TO_EDGE), rz.texParameteri(rz.TEXTURE_2D, rz.TEXTURE_WRAP_T, rz.CLAMP_TO_EDGE), rz.texImage2D(rz.TEXTURE_2D, 0, Ez, vz, xz, 0, iz, lz, null), rz.framebufferTexture2D(rz.FRAMEBUFFER, Mz, rz.TEXTURE_2D, zz._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(rz.TEXTURE_2D, null), sz._depthStencilTexture = zz, sz._depthStencilTextureWithStencil = Lz, zz.baseWidth = vz, zz.baseHeight = xz, zz.width = vz, zz.height = xz, zz.isReady = !0, zz.samples = 1, zz.generateMipMaps = nz, zz.samplingMode = 1, zz.format = bz, zz.type = uz, zz.label = sz.label + "-DepthStencil", Jz[tz] = zz, this._internalTexturesCache.push(zz)
            }
            if (sz.setTextures(Jz), Ez && rz.drawBuffers(Tz), this._bindUnboundFramebuffer(oz), sz.setLayerAndFaceIndices(Kz, Rz), this.resetTextureCache(), fz) {
              if (Hz > 1) {
                const zz = rz.createFramebuffer();
                if (!zz) throw new Error("Unable to create multi sampled framebuffer");
                sz._samples = Hz, sz._MSAAFramebuffer = zz, tz > 0 && Ez && (this._bindUnboundFramebuffer(zz), rz.drawBuffers(Tz), this._bindUnboundFramebuffer(oz))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(sz, Hz, Ez);
            return sz
          }, Au.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(zz, uz) {
            let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.PR < 2 || !zz) return 1;
            if (zz.samples === uz) return uz;
            const Ez = this._gl;
            uz = Math.min(uz, this.getCaps().maxMSAASamples), zz._depthStencilBuffer && (Ez.deleteRenderbuffer(zz._depthStencilBuffer), zz._depthStencilBuffer = null), zz._MSAAFramebuffer && (Ez.deleteFramebuffer(zz._MSAAFramebuffer), zz._MSAAFramebuffer = null);
            const nz = zz._attachments.length;
            for (let lz = 0; lz < nz; lz++) {
              const uz = zz.textures[lz]._hardwareTexture;
              uz?.releaseMSAARenderBuffers()
            }
            if (uz > 1 && "function" === typeof Ez.renderbufferStorageMultisample) {
              const iz = Ez.createFramebuffer();
              if (!iz) throw new Error("Unable to create multi sampled framebuffer");
              zz._MSAAFramebuffer = iz, this._bindUnboundFramebuffer(iz);
              const lz = [];
              for (let bz = 0; bz < nz; bz++) {
                const nz = zz.textures[bz],
                  iz = nz._hardwareTexture,
                  Mz = Ez[this.PR > 1 ? "COLOR_ATTACHMENT" + bz : "COLOR_ATTACHMENT" + bz + "_WEBGL"],
                  tz = this._createRenderBuffer(nz.width, nz.height, uz, -1, this._getRGBABufferInternalSizedFormat(nz.type, nz.format, nz._useSRGBBuffer), Mz);
                if (!tz) throw new Error("Unable to create multi sampled framebuffer");
                iz.addMSAARenderBuffer(tz), nz.samples = uz, lz.push(Mz)
              }
              bz && Ez.drawBuffers(lz)
            } else this._bindUnboundFramebuffer(zz._framebuffer);
            const iz = zz._depthStencilTexture ? zz._depthStencilTexture.format : void 0;
            return zz._depthStencilBuffer = this._setupFramebufferDepthAttachments(zz._generateStencilBuffer, zz._generateDepthBuffer, zz.width, zz.height, uz, iz), this._bindUnboundFramebuffer(null), zz._samples = uz, uz
          }, Au.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(zz) {
            const uz = zz,
              bz = this._gl;
            if (uz.isMulti)
              for (let Ez = 0; Ez < uz._attachments.length; Ez++) {
                const zz = uz.textures[Ez];
                !zz?.generateMipMaps || zz?.isCube || zz?.is3D || (this._bindTextureDirectly(bz.TEXTURE_2D, zz, !0), bz.generateMipmap(bz.TEXTURE_2D), this._bindTextureDirectly(bz.TEXTURE_2D, null))
              }
          }, Au.ThinEngine.prototype.resolveMultiFramebuffer = function(zz) {
            const uz = zz,
              bz = this._gl;
            if (!uz._MSAAFramebuffer || !uz.isMulti) return;
            let Ez = uz.resolveMSAAColors ? bz.COLOR_BUFFER_BIT : 0;
            Ez |= uz._generateDepthBuffer && uz.resolveMSAADepth ? bz.DEPTH_BUFFER_BIT : 0, Ez |= uz._generateStencilBuffer && uz.resolveMSAAStencil ? bz.STENCIL_BUFFER_BIT : 0;
            const nz = uz._attachments,
              iz = nz.length;
            bz.bindFramebuffer(bz.READ_FRAMEBUFFER, uz._MSAAFramebuffer), bz.bindFramebuffer(bz.DRAW_FRAMEBUFFER, uz._framebuffer);
            for (let lz = 0; lz < iz; lz++) {
              const zz = uz.textures[lz];
              for (let uz = 0; uz < iz; uz++) nz[uz] = bz.NONE;
              nz[lz] = bz[this.PR > 1 ? "COLOR_ATTACHMENT" + lz : "COLOR_ATTACHMENT" + lz + "_WEBGL"], bz.readBuffer(nz[lz]), bz.drawBuffers(nz), bz.blitFramebuffer(0, 0, zz.width, zz.height, 0, 0, zz.width, zz.height, Ez, bz.NEAREST)
            }
            for (let lz = 0; lz < iz; lz++) nz[lz] = bz[this.PR > 1 ? "COLOR_ATTACHMENT" + lz : "COLOR_ATTACHMENT" + lz + "_WEBGL"];
            bz.drawBuffers(nz), bz.bindFramebuffer(this._gl.FRAMEBUFFER, uz._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = iz;
        const pz = [],
          dz = [],
          Fz = [],
          Zz = [],
          Rz = [],
          Kz = [],
          wz = [],
          Xz = [];
        this._initTypes(bz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz, nz);
        const fz = !nz || void 0 === nz.generateDepthBuffer || nz.generateDepthBuffer,
          sz = !(!nz || void 0 === nz.generateStencilBuffer) && nz.generateStencilBuffer,
          rz = nz && nz.samples ? nz.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: dz,
          generateMipMaps: lz,
          generateDepthBuffer: fz,
          generateStencilBuffer: sz,
          generateDepthTexture: Mz,
          depthTextureFormat: tz,
          types: pz,
          Yiz: bz,
          useSRGBBuffers: Fz,
          samples: rz,
          formats: Zz,
          targetTypes: Rz,
          faceIndex: Kz,
          layerIndex: wz,
          layerCounts: Xz,
          labels: iz,
          label: zz
        }, this._count = bz, this._drawOnlyOnFirstAttachmentByDefault = Oz, bz > 0 && (this._createInternalTextures(), this._createTextures(iz))
      }
      _initTypes(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
        for (let Oz = 0; Oz < zz; Oz++) Hz && Hz.types && void 0 !== Hz.types[Oz] ? uz.push(Hz.types[Oz]) : uz.push(Hz && Hz.defaultType ? Hz.defaultType : 0), Hz && Hz.samplingModes && void 0 !== Hz.samplingModes[Oz] ? bz.push(Hz.samplingModes[Oz]) : bz.push(Lz.e.BILINEAR_SAMPLINGMODE), Hz && Hz.useSRGBBuffers && void 0 !== Hz.useSRGBBuffers[Oz] ? Ez.push(Hz.useSRGBBuffers[Oz]) : Ez.push(!1), Hz && Hz.formats && void 0 !== Hz.formats[Oz] ? nz.push(Hz.formats[Oz]) : nz.push(5), Hz && Hz.targetTypes && void 0 !== Hz.targetTypes[Oz] ? iz.push(Hz.targetTypes[Oz]) : iz.push(3553), Hz && Hz.faceIndex && void 0 !== Hz.faceIndex[Oz] ? lz.push(Hz.faceIndex[Oz]) : lz.push(0), Hz && Hz.layerIndex && void 0 !== Hz.layerIndex[Oz] ? Mz.push(Hz.layerIndex[Oz]) : Mz.push(0), Hz && Hz.layerCounts && void 0 !== Hz.layerCounts[Oz] ? tz.push(Hz.layerCounts[Oz]) : tz.push(1)
      }
      _createInternaTextureIndexMapping() {
        const zz = {},
          uz = [];
        if (!this._renderTarget) return uz;
        const bz = this._renderTarget.textures;
        for (let Ez = 0; Ez < bz.length; Ez++) {
          const nz = bz[Ez];
          if (!nz) continue;
          const iz = zz[nz.uniqueId];
          void 0 !== iz ? uz[Ez] = iz : zz[nz.uniqueId] = Ez
        }
        return uz
      }
      _rebuild() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || zz) return;
        const Ez = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), uz && (this._releaseTextures(), this._createTextures(bz));
        const nz = this._renderTarget.textures;
        for (let iz = 0; iz < nz.length; iz++) {
          const zz = this._textures[iz];
          void 0 !== Ez[iz] && this._renderTarget.setTexture(nz[Ez[iz]], iz), zz._texture = nz[iz], zz._texture && (zz._noMipmap = !zz._texture.useMipMaps, zz._useSRGBBuffer = zz._texture._useSRGBBuffer)
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
        const uz = this._renderTarget.textures;
        this._textures = [];
        for (let bz = 0; bz < uz.length; bz++) {
          const Ez = new Lz.e(null, this.XT());
          zz?.[bz] && (Ez.name = zz[bz]), Ez._texture = uz[bz], Ez._texture && (Ez._noMipmap = !Ez._texture.useMipMaps, Ez._useSRGBBuffer = Ez._texture._useSRGBBuffer), this._textures.push(Ez)
        }
      }
      setInternalTexture(zz, uz) {
        let bz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === uz && (this._texture = zz), this.renderTarget.setTexture(zz, uz, bz), this.textures[uz] || (this.textures[uz] = new Lz.e(null, this.XT()), this.textures[uz].name = this._textureNames?.[uz] ?? this.textures[uz].name), this.textures[uz]._texture = zz, this.textures[uz]._noMipmap = !zz.useMipMaps, this.textures[uz]._useSRGBBuffer = zz._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[uz] = zz.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[uz] = zz.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[uz] = zz._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[uz])) {
          let bz;
          bz = zz.is2DArray ? 35866 : zz.isCube ? 34067 : zz.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[uz] = bz
        }
      }
      setLayerAndFaceIndex(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[zz] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[zz] = uz), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[zz] = bz), this.renderTarget.setLayerAndFaceIndex(zz, uz, bz))
      }
      setLayerAndFaceIndices(zz, uz) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = zz, this._multiRenderTargetOptions.faceIndex = uz, this.renderTarget.setLayerAndFaceIndices(zz, uz))
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
      updateCount(zz, uz, bz) {
        this._multiRenderTargetOptions.Yiz = zz, this._count = zz;
        const Ez = [],
          nz = [],
          iz = [],
          lz = [],
          Mz = [],
          tz = [],
          Hz = [],
          Oz = [];
        this._textureNames = bz, this._initTypes(zz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, uz), this._multiRenderTargetOptions.types = Ez, this._multiRenderTargetOptions.samplingModes = nz, this._multiRenderTargetOptions.useSRGBBuffers = iz, this._multiRenderTargetOptions.formats = lz, this._multiRenderTargetOptions.targetTypes = Mz, this._multiRenderTargetOptions.faceIndex = tz, this._multiRenderTargetOptions.layerIndex = Hz, this._multiRenderTargetOptions.layerCounts = Oz, this._multiRenderTargetOptions.labels = bz, this._rebuild(!1, !0, bz)
      }
      _unbindFrameBuffer(zz, uz) {
        this._renderTarget && zz.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(uz)
        }))
      }
      dispose() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), zz ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const zz = this._renderTarget?.textures;
        if (zz) {
          for (let uz = zz.length - 1; uz >= 0; uz--) this._textures[uz]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var Vu = bz(39329);
    class mu {
      constructor(zz) {
        this.name = Vu.c.NAME_GEOMETRYBUFFERRENDERER, this.tK = zz
      }
      register() {
        this.tK._gatherRenderTargetsStage.registerStep(Vu.c.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(zz) {
        this.tK._geometryBufferRenderer && zz.push(this.tK._geometryBufferRenderer.getGBuffer())
      }
    }
    let qu = !1;
    var hu;
    ! function(zz) {
      zz[zz.Small = 0] = "Small", zz[zz.Medium = 1] = "Medium", zz[zz.Large = 2] = "Large", zz[zz.ExtraLarge = 3] = "ExtraLarge"
    }(hu || (hu = {}));
    const Uu = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      cu = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class gu {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(zz) {
        if (zz && this._enableMeshBlendTag && !this._scene.uR().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
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
      _forceTextureType(zz, uz) {
        zz === gu.POSITION_TEXTURE_TYPE ? (this._positionIndex = uz, this._enablePosition = !0) : zz === gu.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = uz, this._enableVelocity = !0) : zz === gu.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = uz, this._enableVelocityLinear = !0) : zz === gu.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = uz, this._enableReflectivity = !0) : zz === gu.DEPTH_TEXTURE_TYPE ? (this._depthIndex = uz, this._enableDepth = !0) : zz === gu.NORMAL_TEXTURE_TYPE ? (this._normalIndex = uz, this._enableNormal = !0) : zz === gu.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = uz, this._enableScreenspaceDepth = !0) : zz === gu.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = uz, this._enableIrradiance = !0) : zz === gu.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = uz, this._enableObjectId = !0) : zz === gu.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = uz, this._enableMeshBlendTag = !0)
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
          case gu.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case gu.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case gu.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case gu.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case gu.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case gu.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case gu.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case gu.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case gu.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case gu.MESH_BLEND_TAG_TEXTURE_TYPE:
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
          const zz = this._scene.uR(),
            uz = Math.min(zz.getCaps().maxDrawBuffers ?? 1, 8),
            bz = this._assignRenderTargetIndices()[0] + 1;
          if (zz.getCaps().drawBuffersExtension && bz > uz) throw new Error(`GeometryBufferRenderer: ${bz} color attachments were requested, but this engine supports at most ${uz}`)
        }
        this._enableObjectId = zz, zz || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(zz) {
        if (this._enableMeshBlendTag !== zz) {
          if (zz) {
            const zz = this._scene.uR();
            if (! function(zz) {
                return "NATIVE" !== zz.shaderPlatformName && (zz.isWebGPU || 2 === zz.PR)
              }(zz)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !zz.isWebGPU && !zz.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const uz = Math.min(zz.getCaps().maxDrawBuffers ?? 1, 8),
                bz = this._assignRenderTargetIndices()[0] + 1;
              if (zz.getCaps().drawBuffersExtension && bz > uz) throw new Error(`GeometryBufferRenderer: ${bz} color attachments were requested, but this engine supports at most ${uz}`)
            }
          }
          this._enableMeshBlendTag = zz, zz || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get tK() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        var nz;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new Wz.g(0, 0, 0, 0), this._clearDepthColor = new Wz.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = zz, this._ratioOrDimensions = uz, this._useUbo = zz.uR().supportsUniformBuffers, this._depthFormat = bz, this._textureTypesAndFormats = Ez || {}, this._initShaderSourceAsync(), nz = gu, qu || (qu = !0, Object.defineProperty(hz.e.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(zz) {
            zz && zz.isSupported && (this._geometryBufferRenderer = zz)
          },
          enumerable: !0,
          configurable: !0
        }), hz.e.prototype.enableGeometryBufferRenderer = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            bz = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new nz(this, zz, uz, bz), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, hz.e.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, nz._SceneComponentInitialization = zz => {
          let uz = zz._getComponent(Vu.c.NAME_GEOMETRYBUFFERRENDERER);
          uz || (uz = new mu(zz), zz.Hbz(uz))
        }), gu._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.uR().isWebGPU && !gu.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([bz.e(327).then((() => bz(60990))), Promise.all([bz.e(326), bz.e(338)]).then((() => bz(60993)))])) : await Promise.all([bz.e(310).then((() => bz(60998))), bz.e(309).then((() => bz(61004)))]), this._shadersLoaded = !0
      }
      isReady(zz, uz) {
        if (!this._shadersLoaded) return !1;
        const bz = zz.lR();
        if (bz && bz.disableDepthWrite) return !1;
        if (function(zz) {
            return zz._isGaussianSplatting || "GaussianSplattingMesh" === (uz = zz.getClassName()) || "GaussianSplattingStream" === uz;
            var uz
          }(zz.getMesh())) return !1;
        const Ez = [],
          nz = [cz.j.PositionKind],
          iz = zz.getMesh();
        iz.isVerticesDataPresent(cz.j.NormalKind) && (Ez.push("#define HAS_NORMAL_ATTRIBUTE"), nz.push(cz.j.NormalKind));
        let lz = !1,
          Mz = !1;
        if (bz) {
          let zz = !1;
          if (bz.needAlphaTestingForMesh(iz) && bz.getAlphaTestTexture() && (Ez.push("#define ALPHATEST"), Ez.push(`#define ALPHATEST_UV${bz.getAlphaTestTexture().coordinatesIndex+1}`), zz = !0), (bz.bumpTexture || bz.normalTexture || bz.geometryNormalTexture) && Bz.d.BumpTextureEnabled) {
            const uz = bz.bumpTexture || bz.normalTexture || bz.geometryNormalTexture;
            Ez.push("#define BUMP"), Ez.push(`#define BUMP_UV${uz.coordinatesIndex+1}`), zz = !0
          }
          if (this._enableReflectivity) {
            let uz = !1;
            if ("PBRMetallicRoughnessMaterial" === bz.getClassName()) bz.metallicRoughnessTexture && (Ez.push("#define ORMTEXTURE"), Ez.push(`#define REFLECTIVITY_UV${bz.metallicRoughnessTexture.coordinatesIndex+1}`), Ez.push("#define METALLICWORKFLOW"), zz = !0, uz = !0), null != bz.metallic && (Ez.push("#define METALLIC"), Ez.push("#define METALLICWORKFLOW"), uz = !0), null != bz.roughness && (Ez.push("#define ROUGHNESS"), Ez.push("#define METALLICWORKFLOW"), uz = !0), uz && (bz.baseTexture && (Ez.push("#define ALBEDOTEXTURE"), Ez.push(`#define ALBEDO_UV${bz.baseTexture.coordinatesIndex+1}`), bz.baseTexture.gammaSpace && Ez.push("#define GAMMAALBEDO"), zz = !0), bz.baseColor && Ez.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === bz.getClassName()) bz.specularGlossinessTexture ? (Ez.push("#define SPECULARGLOSSINESSTEXTURE"), Ez.push(`#define REFLECTIVITY_UV${bz.specularGlossinessTexture.coordinatesIndex+1}`), zz = !0, bz.specularGlossinessTexture.gammaSpace && Ez.push("#define GAMMAREFLECTIVITYTEXTURE")) : bz.specularColor && Ez.push("#define REFLECTIVITYCOLOR"), null != bz.glossiness && Ez.push("#define GLOSSINESS");
            else if ("PBRMaterial" === bz.getClassName()) bz.metallicTexture && (Ez.push("#define ORMTEXTURE"), Ez.push(`#define REFLECTIVITY_UV${bz.metallicTexture.coordinatesIndex+1}`), Ez.push("#define METALLICWORKFLOW"), zz = !0, uz = !0), null != bz.metallic && (Ez.push("#define METALLIC"), Ez.push("#define METALLICWORKFLOW"), uz = !0), null != bz.roughness && (Ez.push("#define ROUGHNESS"), Ez.push("#define METALLICWORKFLOW"), uz = !0), uz ? (bz.albedoTexture && (Ez.push("#define ALBEDOTEXTURE"), Ez.push(`#define ALBEDO_UV${bz.albedoTexture.coordinatesIndex+1}`), bz.albedoTexture.gammaSpace && Ez.push("#define GAMMAALBEDO"), zz = !0), bz.albedoColor && Ez.push("#define ALBEDOCOLOR")) : (bz.reflectivityTexture ? (Ez.push("#define SPECULARGLOSSINESSTEXTURE"), Ez.push(`#define REFLECTIVITY_UV${bz.reflectivityTexture.coordinatesIndex+1}`), bz.reflectivityTexture.gammaSpace && Ez.push("#define GAMMAREFLECTIVITYTEXTURE"), zz = !0) : bz.reflectivityColor && Ez.push("#define REFLECTIVITYCOLOR"), null != bz.microSurface && Ez.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === bz.getClassName()) bz.specularTexture && (Ez.push("#define REFLECTIVITYTEXTURE"), Ez.push(`#define REFLECTIVITY_UV${bz.specularTexture.coordinatesIndex+1}`), bz.specularTexture.gammaSpace && Ez.push("#define GAMMAREFLECTIVITYTEXTURE"), zz = !0), bz.specularColor && Ez.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === bz.getClassName()) {
              const uz = bz;
              Ez.push("#define METALLIC"), Ez.push("#define ROUGHNESS"), uz._useRoughnessFromMetallicTextureGreen && uz.baseMetalnessTexture ? (Ez.push("#define ORMTEXTURE"), Ez.push(`#define REFLECTIVITY_UV${uz.baseMetalnessTexture.coordinatesIndex+1}`), zz = !0) : uz.baseMetalnessTexture ? (Ez.push("#define METALLIC_TEXTURE"), Ez.push(`#define METALLIC_UV${uz.baseMetalnessTexture.coordinatesIndex+1}`), zz = !0) : uz.specularRoughnessTexture && (Ez.push("#define ROUGHNESS_TEXTURE"), Ez.push(`#define ROUGHNESS_UV${uz.specularRoughnessTexture.coordinatesIndex+1}`), zz = !0), uz.baseColorTexture && (Ez.push("#define ALBEDOTEXTURE"), Ez.push(`#define ALBEDO_UV${uz.baseColorTexture.coordinatesIndex+1}`), uz.baseColorTexture.gammaSpace && Ez.push("#define GAMMAALBEDO"), zz = !0), uz.baseColor && Ez.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Ez.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === bz.getClassName())) {
            const uz = bz;
            uz.subsurfaceWeight > 0 && uz.subsurfaceWeightTexture && (Ez.push("#define SUBSURFACE_WEIGHT"), Ez.push(`#define SUBSURFACEWEIGHT_UV${uz.subsurfaceWeightTexture.coordinatesIndex+1}`), zz = !0), uz.transmissionWeight > 0 && uz.transmissionWeightTexture && (Ez.push("#define TRANSMISSION_WEIGHT"), Ez.push(`#define TRANSMISSIONWEIGHT_UV${uz.transmissionWeightTexture.coordinatesIndex+1}`), zz = !0)
          }
          zz && (Ez.push("#define NEED_UV"), iz.isVerticesDataPresent(cz.j.UVKind) && (nz.push(cz.j.UVKind), Ez.push("#define UV1"), lz = !0), iz.isVerticesDataPresent(cz.j.UV2Kind) && (nz.push(cz.j.UV2Kind), Ez.push("#define UV2"), Mz = !0))
        }
        if (this._enableDepth && (Ez.push("#define DEPTH"), Ez.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Ez.push("#define NORMAL"), Ez.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Ez.push("#define POSITION"), Ez.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Ez.push("#define VELOCITY"), Ez.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(iz) && Ez.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Ez.push("#define VELOCITY_LINEAR"), Ez.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(iz) && Ez.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Ez.push("#define REFLECTIVITY"), Ez.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Ez.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Ez.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Ez.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Ez.push("#define IRRADIANCE");
          const zz = this._scene;
          if (zz.environmentTexture) {
            const uz = {};
            let nz = !1,
              iz = 0;
            "OpenPBRMaterial" !== bz.getClassName() && "StandardMaterial" !== bz.getClassName() && "PBRMetallicRoughnessMaterial" !== bz.getClassName() && "PBRSpecularGlossinessMaterial" !== bz.getClassName() && "PBRMaterial" !== bz.getClassName() || (nz = !!bz.realtimeFiltering, iz = bz.realtimeFilteringQuality || 0), (0, Yz.Z)(zz, zz.environmentTexture, uz, nz, iz, !0);
            for (const zz in uz) uz[zz] && Ez.push("#define " + zz);
            uz.USEIRRADIANCEMAP || Ez.push("#define SPHERICAL_HARMONICS");
            const lz = zz.postProcessRenderPipelineManager.supportedPipelines.find((zz => "IBLShadowsRenderPipeline" === zz.getClassName()));
            if (lz) {
              const zz = lz;
              zz._getAccumulatedTexture() && (Ez.push("#define IBL_SHADOW_TEXTURE"), zz.coloredShadows && Ez.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Ez.push("#define OBJECT_ID"), Ez.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Ez.push("#define MESH_BLEND_TAG"), Ez.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Ez.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Ez.push("#define ENCODE_NORMAL"), iz.useBones && iz.computeBonesUsingShaders && iz.skeleton ? (nz.push(cz.j.MatricesIndicesKind), nz.push(cz.j.MatricesWeightsKind), iz.numBoneInfluencers > 4 && (nz.push(cz.j.MatricesIndicesExtraKind), nz.push(cz.j.MatricesWeightsExtraKind)), Ez.push("#define NUM_BONE_INFLUENCERS " + iz.numBoneInfluencers), Ez.push("#define BONETEXTURE " + iz.skeleton.isUsingTextureForMatrices), Ez.push("#define BonesPerMesh " + (iz.skeleton.bones.length + 1))) : (Ez.push("#define NUM_BONE_INFLUENCERS 0"), Ez.push("#define BONETEXTURE false"), Ez.push("#define BonesPerMesh 0"));
        const tz = iz.morphTargetManager ? (0, Yz.R)(iz.morphTargetManager, Ez, nz, iz, !0, !0, !1, lz, Mz, !1) : 0;
        uz && (Ez.push("#define INSTANCES"), (0, Yz.xb)(nz, this._enableVelocity || this._enableVelocityLinear), zz.getRenderingMesh().hasThinInstances && Ez.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Ez.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Ez.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, Ou.i)(bz, this._scene, Ez);
        const Hz = this._scene.uR(),
          Oz = zz._getDrawWrapper(void 0, !0),
          pz = Oz.defines,
          dz = Ez.join("\n");
        return pz !== dz && Oz.setEffect(Hz.createEffect("geometry", {
          attributes: nz,
          uniformsNames: cu,
          samplers: Uu,
          defines: dz,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: tz
          },
          shaderLanguage: this.shaderLanguage
        }, Hz), dz), Oz.effect.isReady()
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
          this._scene.uR().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.tK.uR()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.tK.uR().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const zz = [],
          uz = [];
        let bz = 0;
        return this._enableDepth && (this._depthIndex = bz, bz++, zz.push("gBuffer_Depth"), uz.push(this._textureTypesAndFormats[gu.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = bz, bz++, zz.push("gBuffer_Normal"), uz.push(this._textureTypesAndFormats[gu.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = bz, bz++, zz.push("gBuffer_Position"), uz.push(this._textureTypesAndFormats[gu.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = bz, bz++, zz.push("gBuffer_Velocity"), uz.push(this._textureTypesAndFormats[gu.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = bz, bz++, zz.push("gBuffer_VelocityLinear"), uz.push(this._textureTypesAndFormats[gu.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = bz, bz++, zz.push("gBuffer_Reflectivity"), uz.push(this._textureTypesAndFormats[gu.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = bz, bz++, zz.push("gBuffer_ScreenspaceDepth"), uz.push(this._textureTypesAndFormats[gu.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = bz, bz++, zz.push("gBuffer_Irradiance"), uz.push(this._textureTypesAndFormats[gu.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = bz, bz++, zz.push("gBuffer_ObjectId"), uz.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = bz, bz++, zz.push("gBuffer_MeshBlendTag"), uz.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [bz, zz, uz]
      }
      _createRenderTargets() {
        const zz = this._scene.uR(),
          [uz, bz, Ez] = this._assignRenderTargetIndices(),
          nz = Math.min(zz.getCaps().maxDrawBuffers ?? 1, 8);
        if (zz.getCaps().drawBuffersExtension && uz > nz) throw new Error(`GeometryBufferRenderer: ${uz} color attachments were requested, but this engine supports at most ${nz}`);
        let lz = 0;
        zz._caps.textureFloat && zz._caps.textureFloatLinearFiltering ? lz = 1 : zz._caps.textureHalfFloat && zz._caps.textureHalfFloatLinearFiltering && (lz = 2);
        const Mz = this._getRenderTargetDimensions(),
          tz = [],
          Hz = [],
          Oz = [];
        for (const iz of Ez) iz ? (tz.push(iz.textureType), Hz.push(iz.textureFormat), Oz.push(iz.samplingMode ?? 2)) : (tz.push(lz), Hz.push(5), Oz.push(2));
        if (this._normalsAreUnsigned = 11 === tz[gu.NORMAL_TEXTURE_TYPE] || 13 === tz[gu.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new au("gBuffer", Mz, uz, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: tz,
            formats: Hz,
            samplingModes: Oz,
            depthTextureFormat: this._depthFormat
          }, bz.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = Lz.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = Lz.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const pz = [!0],
          dz = [!1],
          Fz = [!0];
        for (let iz = 1; iz < uz; ++iz) pz.push(!0), Fz.push(!1), dz.push(!0);
        const Zz = zz.buildTextureLayout(pz),
          Rz = zz.buildTextureLayout(dz),
          Kz = zz.buildTextureLayout(Fz);
        this._multiRenderTarget.onClearObservable.add((zz => {
          const uz = this.useSpecificClearForDepthTexture ? Rz : Zz;
          zz.clearAttachments(this._clearColor, uz, !0, !0, !0), this.useSpecificClearForDepthTexture && zz.clearAttachments(this._clearDepthColor, Kz, !0, !1, !1), zz.bindAttachments(Zz)
        })), this._resizeObserver = zz.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const wz = zz => {
          const uz = zz.getRenderingMesh(),
            bz = zz.getEffectiveMesh(),
            Ez = this._scene,
            nz = Ez.uR(),
            lz = zz.lR();
          if (!lz) return;
          if (bz._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[bz.uniqueId] && (this._previousTransformationMatrices[bz.uniqueId] = {
              xd: Uz.d.Identity(),
              viewProjection: Ez.getTransformMatrix()
            }, uz.skeleton)) {
            const zz = uz.skeleton.getTransformMatrices(uz);
            this._previousBonesTransformationMatrices[uz.uniqueId] = this._copyBonesTransformationMatrices(zz, new Float32Array(zz.length))
          }
          const Mz = uz._getInstancesRenderList(zz._id, !!zz.getReplacementMesh());
          if (Mz.mustReturn) return;
          const tz = nz.getCaps().instancedArrays && (null !== Mz.visibleInstances[zz._id] || uz.hasThinInstances),
            Hz = bz.getWorldMatrix();
          if (this.isReady(zz, tz)) {
            const Oz = zz._getDrawWrapper();
            if (!Oz) return;
            const pz = Oz.effect;
            let dz;
            nz.enableEffect(Oz), tz || uz._bind(zz, pz, lz.fillMode), this._useUbo ? ((0, Yz.y)(pz, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (pz.setMatrix("viewProjection", Ez.getTransformMatrix()), pz.setMatrix("view", Ez.getViewMatrix()), this._scene.bindEyePosition(pz, "vEyePosition"));
            if (uz._instanceDataStorage.isFrozen || !lz.backFaceCulling && null === lz.sideOrientation) dz = uz._effectiveSideOrientation;
            else {
              const zz = bz._getWorldMatrixDeterminant();
              dz = lz._getEffectiveOrientation(uz), zz < 0 && (dz = dz === iz.c.ClockWiseSideOrientation ? iz.c.CounterClockWiseSideOrientation : iz.c.ClockWiseSideOrientation)
            }
            if (lz._preBind(Oz, dz), lz.needAlphaTestingForMesh(bz)) {
              const zz = lz.getAlphaTestTexture();
              zz && (pz.setTexture("diffuseSampler", zz), pz.setMatrix("diffuseMatrix", zz.getTextureMatrix()), pz.setFloat("alphaCutOff", lz.alphaCutOff ?? .4))
            }
            if ((lz.bumpTexture || lz.normalTexture || lz.geometryNormalTexture) && Ez.uR().getCaps().standardDerivatives && Bz.d.BumpTextureEnabled) {
              const zz = lz.bumpTexture || lz.normalTexture || lz.geometryNormalTexture;
              pz.setFloat3("vBumpInfos", zz.coordinatesIndex, 1 / zz.level, lz.parallaxScaleBias), pz.setMatrix("bumpMatrix", zz.getTextureMatrix()), pz.setTexture("bumpSampler", zz), pz.setFloat2("vTangentSpaceParams", lz.invertNormalMapX ? -1 : 1, lz.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === lz.getClassName()) null !== lz.metallicRoughnessTexture && (pz.setTexture("reflectivitySampler", lz.metallicRoughnessTexture), pz.setMatrix("reflectivityMatrix", lz.metallicRoughnessTexture.getTextureMatrix())), null !== lz.metallic && pz.setFloat("metallic", lz.metallic), null !== lz.roughness && pz.setFloat("glossiness", 1 - lz.roughness), null !== lz.baseTexture && (pz.setTexture("albedoSampler", lz.baseTexture), pz.setMatrix("albedoMatrix", lz.baseTexture.getTextureMatrix())), null !== lz.baseColor && pz.setColor3("albedoColor", lz.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === lz.getClassName()) null !== lz.specularGlossinessTexture ? (pz.setTexture("reflectivitySampler", lz.specularGlossinessTexture), pz.setMatrix("reflectivityMatrix", lz.specularGlossinessTexture.getTextureMatrix())) : null !== lz.specularColor && pz.setColor3("reflectivityColor", lz.specularColor), null !== lz.glossiness && pz.setFloat("glossiness", lz.glossiness);
            else if ("PBRMaterial" === lz.getClassName()) null !== lz.metallicTexture && (pz.setTexture("reflectivitySampler", lz.metallicTexture), pz.setMatrix("reflectivityMatrix", lz.metallicTexture.getTextureMatrix())), null !== lz.metallic && pz.setFloat("metallic", lz.metallic), null !== lz.roughness && pz.setFloat("glossiness", 1 - lz.roughness), null !== lz.roughness || null !== lz.metallic || null !== lz.metallicTexture ? (null !== lz.albedoTexture && (pz.setTexture("albedoSampler", lz.albedoTexture), pz.setMatrix("albedoMatrix", lz.albedoTexture.getTextureMatrix())), null !== lz.albedoColor && pz.setColor3("albedoColor", lz.albedoColor)) : (null !== lz.reflectivityTexture ? (pz.setTexture("reflectivitySampler", lz.reflectivityTexture), pz.setMatrix("reflectivityMatrix", lz.reflectivityTexture.getTextureMatrix())) : null !== lz.reflectivityColor && pz.setColor3("reflectivityColor", lz.reflectivityColor), null !== lz.microSurface && pz.setFloat("glossiness", lz.microSurface));
            else if ("StandardMaterial" === lz.getClassName()) null !== lz.specularTexture && (pz.setTexture("reflectivitySampler", lz.specularTexture), pz.setMatrix("reflectivityMatrix", lz.specularTexture.getTextureMatrix())), null !== lz.specularColor && pz.setColor3("reflectivityColor", lz.specularColor);
            else if ("OpenPBRMaterial" === lz.getClassName()) {
              const zz = lz;
              zz._useRoughnessFromMetallicTextureGreen && zz.baseMetalnessTexture ? (pz.setTexture("reflectivitySampler", zz.baseMetalnessTexture), pz.setMatrix("reflectivityMatrix", zz.baseMetalnessTexture.getTextureMatrix())) : zz.baseMetalnessTexture ? (pz.setTexture("metallicSampler", zz.baseMetalnessTexture), pz.setMatrix("metallicMatrix", zz.baseMetalnessTexture.getTextureMatrix())) : zz.specularRoughnessTexture && (pz.setTexture("roughnessSampler", zz.specularRoughnessTexture), pz.setMatrix("roughnessMatrix", zz.specularRoughnessTexture.getTextureMatrix())), pz.setFloat("metallic", zz.baseMetalness), pz.setFloat("glossiness", 1 - zz.specularRoughness), null !== zz.baseColorTexture && (pz.setTexture("albedoSampler", zz.baseColorTexture), pz.setMatrix("albedoMatrix", zz.baseColorTexture.getTextureMatrix())), null !== zz.baseColor && pz.setColor3("albedoColor", zz.baseColor)
            }
            if (this._enableIrradiance && Ez.environmentTexture) {
              const zz = Ez.environmentTexture,
                uz = Ez.postProcessRenderPipelineManager.supportedPipelines.find((zz => "IBLShadowsRenderPipeline" === zz.getClassName()));
              if (uz) {
                const zz = uz._getAccumulatedTexture();
                zz && (pz.setTexture("iblShadowSampler", zz), pz.setFloat2("shadowTextureSize", zz.getSize().width, zz.getSize().height))
              }
              if (pz.setMatrix("reflectionMatrix", zz.getReflectionTextureMatrix()), pz.setFloat2("vReflectionInfos", zz.level * Ez.iblIntensity, 0), pz.setTexture("reflectionSampler", zz), zz.irradianceTexture && (pz.setTexture("irradianceSampler", zz.irradianceTexture), zz.irradianceTexture._dominantDirection && pz.setVector3("vReflectionDominantDirection", zz.irradianceTexture._dominantDirection)), zz.sphericalPolynomial) {
                const uz = zz.sphericalPolynomial;
                if (uz.preScaledHarmonics) {
                  const zz = uz.preScaledHarmonics;
                  pz.setVector3("vSphericalL00", zz.l00), pz.setVector3("vSphericalL1_1", zz.l1_1), pz.setVector3("vSphericalL10", zz.l10), pz.setVector3("vSphericalL11", zz.l11), pz.setVector3("vSphericalL2_2", zz.l2_2), pz.setVector3("vSphericalL2_1", zz.l2_1), pz.setVector3("vSphericalL20", zz.l20), pz.setVector3("vSphericalL21", zz.l21), pz.setVector3("vSphericalL22", zz.l22)
                } else pz.setFloat3("vSphericalX", uz.x.x, uz.x.y, uz.x.z), pz.setFloat3("vSphericalY", uz.y.x, uz.y.y, uz.y.z), pz.setFloat3("vSphericalZ", uz.z.x, uz.z.y, uz.z.z), pz.setFloat3("vSphericalXX_ZZ", uz.xx.x - uz.zz.x, uz.xx.y - uz.zz.y, uz.xx.z - uz.zz.z), pz.setFloat3("vSphericalYY_ZZ", uz.yy.x - uz.zz.x, uz.yy.y - uz.zz.y, uz.yy.z - uz.zz.z), pz.setFloat3("vSphericalZZ", uz.zz.x, uz.zz.y, uz.zz.z), pz.setFloat3("vSphericalXY", uz.xy.x, uz.xy.y, uz.xy.z), pz.setFloat3("vSphericalYZ", uz.yz.x, uz.yz.y, uz.yz.z), pz.setFloat3("vSphericalZX", uz.zx.x, uz.zx.y, uz.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === lz.getClassName()) {
                const zz = lz;
                pz.setFloat("vSubsurfaceWeight", zz.subsurfaceWeight), zz.subsurfaceWeightTexture && (pz.setTexture("subsurfaceWeightSampler", zz.subsurfaceWeightTexture), pz.setMatrix("subsurfaceWeightMatrix", zz.subsurfaceWeightTexture.getTextureMatrix())), pz.setFloat("vTransmissionWeight", zz.transmissionWeight), zz.transmissionWeightTexture && (pz.setTexture("transmissionWeightSampler", zz.transmissionWeightTexture), pz.setMatrix("transmissionWeightMatrix", zz.transmissionWeightTexture.getTextureMatrix())), pz.setFloat("vTransmissionScatterAnisotropy", zz.transmissionScatterAnisotropy), pz.setFloat("vSubsurfaceScatterAnisotropy", zz.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, Ou.d)(pz, lz, this._scene), uz.useBones && uz.computeBonesUsingShaders && uz.skeleton) {
              const zz = uz.skeleton;
              if (zz.isUsingTextureForMatrices && pz.getUniformIndex("boneTextureInfo") > -1) {
                const bz = zz.getTransformMatrixTexture(uz);
                pz.setTexture("boneSampler", bz), pz.setFloat2("boneTextureInfo", zz._textureWidth, zz._textureHeight)
              } else pz.setMatrices("mBones", uz.skeleton.getTransformMatrices(uz));
              (this._enableVelocity || this._enableVelocityLinear) && pz.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[uz.uniqueId])
            }
            if ((0, Yz.w)(uz, pz), uz.morphTargetManager && uz.morphTargetManager.isUsingTextureForTargets && uz.morphTargetManager._bind(pz), (this._enableVelocity || this._enableVelocityLinear) && (pz.setMatrix("previousWorld", this._previousTransformationMatrices[bz.uniqueId].xd), pz.setMatrix("previousViewProjection", this._previousTransformationMatrices[bz.uniqueId].viewProjection)), this._enableObjectId) {
              let zz = uz.uniqueId;
              if (this.objectIdProvider) zz = (0, Fu.j)(uz, this.objectIdProvider);
              else if (zz > 16777215) throw new Error(`Invalid geometry object ID ${zz} for mesh "${uz.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              pz.setFloat("objectId", zz)
            }
            if (this._enableMeshBlendTag) {
              const zz = this.meshBlendTagProvider ? (0, Fu.g)(uz, this.meshBlendTagProvider) : uz.meshBlendingTag;
              pz.setInt("meshBlendTag", zz)
            }
            tz && uz.hasThinInstances && pz.setMatrix("world", Hz), uz._processRendering(bz, zz, pz, lz.fillMode, Mz, tz, ((zz, uz) => {
              zz || pz.setMatrix("world", uz)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[bz.uniqueId].xd = Hz.clone(), this._previousTransformationMatrices[bz.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), uz.skeleton && this._copyBonesTransformationMatrices(uz.skeleton.getTransformMatrices(uz), this._previousBonesTransformationMatrices[bz.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (uz, bz, Ez) => {
          if ((Ez || 0 === bz) && uz.hN)
            for (let nz = 0; nz < uz.hN.length; ++nz) {
              const bz = uz.hN[nz],
                Ez = bz.lR(),
                iz = bz.getRenderingMesh();
              if (!Ez) continue;
              const lz = iz._getInstancesRenderList(bz._id, !!bz.getReplacementMesh()),
                Mz = zz.getCaps().instancedArrays && (null !== lz.visibleInstances[bz._id] || iz.hasThinInstances);
              if (!this.isReady(bz, Mz)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (uz, bz, Ez, nz) => {
          let iz;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.uR().bindAttachments(this._attachmentsFromPrePass)
          }
          if (nz.length) {
            for (zz.setColorWrite(!1), iz = 0; iz < nz.length; iz++) wz(nz.data[iz]);
            zz.setColorWrite(!0)
          }
          for (iz = 0; iz < uz.length; iz++) wz(uz.data[iz]);
          for (zz.setDepthWrite(!1), iz = 0; iz < bz.length; iz++) wz(bz.data[iz]);
          if (this.renderTransparentMeshes)
            for (iz = 0; iz < Ez.length; iz++) wz(Ez.data[iz]);
          zz.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const zz = this._scene.uR();
        return {
          width: Math.max(1, Math.floor(zz.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(zz.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(zz, uz) {
        for (let bz = 0; bz < zz.length; bz++) uz[bz] = zz[bz];
        return uz
      }
    }
    gu.ForceGLSL = !1, gu.DEPTH_TEXTURE_TYPE = 0, gu.NORMAL_TEXTURE_TYPE = 1, gu.POSITION_TEXTURE_TYPE = 2, gu.VELOCITY_TEXTURE_TYPE = 3, gu.REFLECTIVITY_TEXTURE_TYPE = 4, gu.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, gu.VELOCITY_LINEAR_TEXTURE_TYPE = 6, gu.IRRADIANCE_TEXTURE_TYPE = 7, gu.OBJECT_ID_TEXTURE_TYPE = 8, gu.MESH_BLEND_TAG_TEXTURE_TYPE = 9, gu._SceneComponentInitialization = zz => {
      throw (0, wu.l)("GeometryBufferRendererSceneComponent")
    };
    var Su = bz(36564);
    const yu = {
      effect: null,
      subMesh: null
    };

    function Du(zz) {
      if ("number" === typeof zz) return 1;
      if (zz instanceof Uz.m) return 2;
      if (zz instanceof Uz.n || zz instanceof Wz.c) return 3;
      if (zz instanceof Uz.r || zz instanceof Wz.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class Qu {
      populateVectorFromLinkedProperties(zz) {
        const uz = Du(zz);
        for (const bz in this.linkedProperties) {
          const zz = this.linkedProperties[bz],
            Ez = zz.numComponents;
          if (uz < Ez || zz.targetUniformComponentOffset > uz - Ez) return void(1 == Ez ? Az.e.Error(`Float property ${zz.name} has an offset that is too large.`) : Az.e.Error(`Vector${Ez} property ${zz.name} won't fit in Vector${uz} or has an offset that is too large.`));
          "number" === typeof zz.value ? Qu._tmpArray[zz.targetUniformComponentOffset] = zz.value : zz.value.toArray(Qu._tmpArray, zz.targetUniformComponentOffset)
        }
        zz.Fuz(Qu._tmpArray)
      }
      constructor(zz, uz) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = zz, this.numComponents = uz
      }
    }
    Qu._tmpArray = [0, 0, 0, 0];
    class Wu {
      constructor(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          iz = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = zz, this.targetUniformName = bz, this.defaultValue = uz, this.value = uz, this.targetUniformComponentNum = Ez, this.targetUniformComponentOffset = nz, this.requiredDefine = iz
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : Du(this.defaultValue)
      }
    }
    class eu {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(zz, uz, bz) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = zz, this.samplerPrefix = uz, this.textureDefine = bz
      }
    }
    class ju extends((0, Ru.d)((0, Zu.d)(gz.e))) {}
    class Iu extends(function(zz) {
      return class extends zz {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(ju)) {}
    class Bu extends((0, ez.h)(Iu)) {
      constructor(zz) {
        super(zz), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class Cu extends((0, Ku.c)(Iz.b)) {}
    let Yu = (() => {
        var zz, uz, Ez, nz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz, oz, Nz, vz, Pz, Gz, az, Vz, hz, gz, Sz, yz, Dz, ez, Iz, kz, zu, uu, bu, Eu, nu, iu, lu, Mu, tu, Hu, Zu, Ru, Ku, wu, Xu, fu, su, ru, ou, xu, Ju, Au, Tu, Lu, Pu, Gu, au, Vu, mu, qu, hu, Uu, cu, Su, Du, ju, Iu, Yu, ku, zb, ub, bb, Eb, nb, ib, lb, Mb, tb, Hb, Ob, pb, db, Fb, Zb, Rb, Kb, wb, Xb, fb, sb, rb, ob, Nb, vb, xb, Jb, Ab, Tb;
        let Lb, Pb, Gb, ab, Vb, mb, qb, hb, Ub, cb, gb, Sb, yb, Db, Qb, Wb, eb, jb, Ib, Bb, Cb, Yb, kb, zE, uE, bE, EE, nE, iE, lE, ME, tE, HE, OE, pE, dE, FE, ZE, RE, KE, wE, XE, fE, sE, rE, oE, NE, vE, xE, JE, AE, TE, LE, PE, GE, aE, VE, mE, qE, hE, UE, cE, gE, SE, yE, DE, QE, WE, eE, jE, IE, BE, CE, YE, kE, zn, un, bn, En, nn, Mn, tn, Hn, On, pn, dn, Fn, Zn, Rn, Kn, wn, Xn, fn, sn, rn, Nn, vn, xn, Jn, An, Tn, Ln, Pn, Gn, an, Vn = Cu,
          mn = [],
          qn = [],
          hn = [],
          Un = [],
          cn = [],
          gn = [],
          Sn = [],
          yn = [],
          Dn = [],
          Qn = [],
          Wn = [],
          en = [],
          jn = [],
          In = [],
          Bn = [],
          Cn = [],
          Yn = [],
          kn = [],
          zi = [],
          ui = [],
          bi = [],
          Ei = [],
          ni = [],
          ii = [],
          li = [],
          Mi = [],
          ti = [],
          Hi = [],
          Oi = [],
          di = [],
          Fi = [],
          Zi = [],
          Ri = [],
          Ki = [],
          wi = [],
          Xi = [],
          fi = [],
          si = [],
          ri = [],
          oi = [],
          Ni = [],
          vi = [],
          xi = [],
          Ji = [],
          Ai = [],
          Ti = [],
          Li = [],
          Pi = [],
          Gi = [],
          ai = [],
          Vi = [],
          mi = [],
          qi = [],
          Ui = [],
          ci = [],
          gi = [],
          Si = [],
          yi = [],
          Di = [],
          Qi = [],
          Wi = [],
          ei = [],
          ji = [],
          Ii = [],
          Bi = [],
          Ci = [],
          Yi = [],
          ki = [],
          zl = [],
          ul = [],
          bl = [],
          El = [],
          nl = [],
          il = [],
          ll = [],
          Ml = [],
          tl = [],
          Hl = [],
          Ol = [],
          pl = [],
          dl = [],
          Fl = [],
          Zl = [],
          Rl = [],
          Kl = [],
          wl = [],
          Xl = [],
          fl = [],
          sl = [],
          rl = [],
          ol = [],
          Nl = [],
          vl = [],
          xl = [],
          Jl = [],
          Al = [],
          Tl = [],
          Ll = [],
          Pl = [],
          Gl = [],
          al = [],
          Vl = [],
          ml = [],
          ql = [],
          hl = [],
          Ul = [],
          cl = [],
          gl = [],
          Sl = [],
          yl = [],
          Dl = [],
          Ql = [],
          Wl = [],
          el = [],
          jl = [],
          Il = [],
          Bl = [],
          Cl = [],
          Yl = [],
          kl = [],
          zM = [],
          uM = [],
          bM = [],
          EM = [],
          nM = [],
          iM = [],
          lM = [],
          MM = [],
          tM = [],
          HM = [],
          OM = [],
          pM = [],
          dM = [],
          FM = [],
          ZM = [],
          RM = [],
          KM = [],
          wM = [],
          XM = [],
          fM = [],
          sM = [],
          rM = [],
          oM = [],
          NM = [],
          vM = [],
          xM = [],
          JM = [],
          AM = [],
          TM = [],
          LM = [],
          PM = [],
          GM = [],
          aM = [],
          VM = [],
          mM = [],
          qM = [],
          hM = [],
          UM = [],
          cM = [],
          gM = [],
          SM = [],
          yM = [],
          DM = [],
          QM = [],
          WM = [],
          eM = [],
          jM = [],
          IM = [],
          BM = [],
          CM = [],
          YM = [],
          kM = [],
          zt = [],
          ut = [],
          bt = [],
          Et = [],
          nt = [],
          it = [],
          lt = [],
          Mt = [],
          tt = [],
          Ht = [],
          Ot = [],
          pt = [],
          dt = [],
          Ft = [],
          Zt = [],
          Rt = [],
          Kt = [],
          wt = [],
          Xt = [],
          ft = [],
          st = [],
          rt = [],
          ot = [],
          Nt = [],
          vt = [],
          xt = [],
          Jt = [],
          At = [],
          Tt = [],
          Lt = [],
          Pt = [],
          Gt = [],
          Vt = [];
        return zz = class extends Vn {
          get baseWeight() {
            return (0, xz.c)(this, uz, "f")
          }
          set baseWeight(zz) {
            (0, xz.g)(this, uz, zz, "f")
          }
          get baseWeightTexture() {
            return (0, xz.c)(this, Ez, "f")
          }
          set baseWeightTexture(zz) {
            (0, xz.g)(this, Ez, zz, "f")
          }
          get baseColor() {
            return (0, xz.c)(this, nz, "f")
          }
          set baseColor(zz) {
            (0, xz.g)(this, nz, zz, "f")
          }
          get baseColorTexture() {
            return (0, xz.c)(this, lz, "f")
          }
          set baseColorTexture(zz) {
            (0, xz.g)(this, lz, zz, "f")
          }
          get baseDiffuseRoughness() {
            return (0, xz.c)(this, Mz, "f")
          }
          set baseDiffuseRoughness(zz) {
            (0, xz.g)(this, Mz, zz, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, xz.c)(this, tz, "f")
          }
          set baseDiffuseRoughnessTexture(zz) {
            (0, xz.g)(this, tz, zz, "f")
          }
          get baseMetalness() {
            return (0, xz.c)(this, Hz, "f")
          }
          set baseMetalness(zz) {
            (0, xz.g)(this, Hz, zz, "f")
          }
          get baseMetalnessTexture() {
            return (0, xz.c)(this, Oz, "f")
          }
          set baseMetalnessTexture(zz) {
            (0, xz.g)(this, Oz, zz, "f")
          }
          get specularWeight() {
            return (0, xz.c)(this, pz, "f")
          }
          set specularWeight(zz) {
            (0, xz.g)(this, pz, zz, "f")
          }
          get specularWeightTexture() {
            return (0, xz.c)(this, dz, "f")
          }
          set specularWeightTexture(zz) {
            (0, xz.g)(this, dz, zz, "f")
          }
          get specularColor() {
            return (0, xz.c)(this, Fz, "f")
          }
          set specularColor(zz) {
            (0, xz.g)(this, Fz, zz, "f")
          }
          get specularColorTexture() {
            return (0, xz.c)(this, Zz, "f")
          }
          set specularColorTexture(zz) {
            (0, xz.g)(this, Zz, zz, "f")
          }
          get specularRoughness() {
            return (0, xz.c)(this, Rz, "f")
          }
          set specularRoughness(zz) {
            (0, xz.g)(this, Rz, zz, "f")
          }
          get specularRoughnessTexture() {
            return (0, xz.c)(this, Kz, "f")
          }
          set specularRoughnessTexture(zz) {
            (0, xz.g)(this, Kz, zz, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, xz.c)(this, wz, "f")
          }
          set specularRoughnessAnisotropy(zz) {
            (0, xz.g)(this, wz, zz, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, xz.c)(this, Xz, "f")
          }
          set specularRoughnessAnisotropyTexture(zz) {
            (0, xz.g)(this, Xz, zz, "f")
          }
          get specularIor() {
            return (0, xz.c)(this, fz, "f")
          }
          set specularIor(zz) {
            (0, xz.g)(this, fz, zz, "f")
          }
          get transmissionWeight() {
            return (0, xz.c)(this, sz, "f")
          }
          set transmissionWeight(zz) {
            (0, xz.g)(this, sz, zz, "f")
          }
          get transmissionWeightTexture() {
            return (0, xz.c)(this, rz, "f")
          }
          set transmissionWeightTexture(zz) {
            (0, xz.g)(this, rz, zz, "f")
          }
          get transmissionColor() {
            return (0, xz.c)(this, oz, "f")
          }
          set transmissionColor(zz) {
            (0, xz.g)(this, oz, zz, "f")
          }
          get transmissionColorTexture() {
            return (0, xz.c)(this, Nz, "f")
          }
          set transmissionColorTexture(zz) {
            (0, xz.g)(this, Nz, zz, "f")
          }
          get transmissionDepth() {
            return (0, xz.c)(this, vz, "f")
          }
          set transmissionDepth(zz) {
            (0, xz.g)(this, vz, zz, "f")
          }
          get transmissionDepthTexture() {
            return (0, xz.c)(this, Pz, "f")
          }
          set transmissionDepthTexture(zz) {
            (0, xz.g)(this, Pz, zz, "f")
          }
          get transmissionScatter() {
            return (0, xz.c)(this, Gz, "f")
          }
          set transmissionScatter(zz) {
            (0, xz.g)(this, Gz, zz, "f")
          }
          get transmissionScatterTexture() {
            return (0, xz.c)(this, az, "f")
          }
          set transmissionScatterTexture(zz) {
            (0, xz.g)(this, az, zz, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, xz.c)(this, Vz, "f")
          }
          set transmissionScatterAnisotropy(zz) {
            (0, xz.g)(this, Vz, zz, "f")
          }
          get transmissionDispersionScale() {
            return (0, xz.c)(this, hz, "f")
          }
          set transmissionDispersionScale(zz) {
            (0, xz.g)(this, hz, zz, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, xz.c)(this, gz, "f")
          }
          set transmissionDispersionScaleTexture(zz) {
            (0, xz.g)(this, gz, zz, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, xz.c)(this, Sz, "f")
          }
          set transmissionDispersionAbbeNumber(zz) {
            (0, xz.g)(this, Sz, zz, "f")
          }
          get subsurfaceWeight() {
            return (0, xz.c)(this, yz, "f")
          }
          set subsurfaceWeight(zz) {
            (0, xz.g)(this, yz, zz, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, xz.c)(this, Dz, "f")
          }
          set subsurfaceWeightTexture(zz) {
            (0, xz.g)(this, Dz, zz, "f")
          }
          get subsurfaceColor() {
            return (0, xz.c)(this, ez, "f")
          }
          set subsurfaceColor(zz) {
            (0, xz.g)(this, ez, zz, "f")
          }
          get subsurfaceColorTexture() {
            return (0, xz.c)(this, Iz, "f")
          }
          set subsurfaceColorTexture(zz) {
            (0, xz.g)(this, Iz, zz, "f")
          }
          get subsurfaceRadius() {
            return (0, xz.c)(this, kz, "f")
          }
          set subsurfaceRadius(zz) {
            (0, xz.g)(this, kz, zz, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, xz.c)(this, zu, "f")
          }
          set subsurfaceRadiusScale(zz) {
            (0, xz.g)(this, zu, zz, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, xz.c)(this, uu, "f")
          }
          set subsurfaceRadiusScaleTexture(zz) {
            (0, xz.g)(this, uu, zz, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, xz.c)(this, bu, "f")
          }
          set subsurfaceScatterAnisotropy(zz) {
            (0, xz.g)(this, bu, zz, "f")
          }
          get coatWeight() {
            return (0, xz.c)(this, Eu, "f")
          }
          set coatWeight(zz) {
            (0, xz.g)(this, Eu, zz, "f")
          }
          get coatWeightTexture() {
            return (0, xz.c)(this, nu, "f")
          }
          set coatWeightTexture(zz) {
            (0, xz.g)(this, nu, zz, "f")
          }
          get coatColor() {
            return (0, xz.c)(this, iu, "f")
          }
          set coatColor(zz) {
            (0, xz.g)(this, iu, zz, "f")
          }
          get coatColorTexture() {
            return (0, xz.c)(this, lu, "f")
          }
          set coatColorTexture(zz) {
            (0, xz.g)(this, lu, zz, "f")
          }
          get coatRoughness() {
            return (0, xz.c)(this, Mu, "f")
          }
          set coatRoughness(zz) {
            (0, xz.g)(this, Mu, zz, "f")
          }
          get coatRoughnessTexture() {
            return (0, xz.c)(this, tu, "f")
          }
          set coatRoughnessTexture(zz) {
            (0, xz.g)(this, tu, zz, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, xz.c)(this, Hu, "f")
          }
          set coatRoughnessAnisotropy(zz) {
            (0, xz.g)(this, Hu, zz, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, xz.c)(this, Zu, "f")
          }
          set coatRoughnessAnisotropyTexture(zz) {
            (0, xz.g)(this, Zu, zz, "f")
          }
          get coatIor() {
            return (0, xz.c)(this, Ru, "f")
          }
          set coatIor(zz) {
            (0, xz.g)(this, Ru, zz, "f")
          }
          get coatDarkening() {
            return (0, xz.c)(this, Ku, "f")
          }
          set coatDarkening(zz) {
            (0, xz.g)(this, Ku, zz, "f")
          }
          get coatDarkeningTexture() {
            return (0, xz.c)(this, wu, "f")
          }
          set coatDarkeningTexture(zz) {
            (0, xz.g)(this, wu, zz, "f")
          }
          get fuzzWeight() {
            return (0, xz.c)(this, Xu, "f")
          }
          set fuzzWeight(zz) {
            (0, xz.g)(this, Xu, zz, "f")
          }
          get fuzzWeightTexture() {
            return (0, xz.c)(this, fu, "f")
          }
          set fuzzWeightTexture(zz) {
            (0, xz.g)(this, fu, zz, "f")
          }
          get fuzzColor() {
            return (0, xz.c)(this, su, "f")
          }
          set fuzzColor(zz) {
            (0, xz.g)(this, su, zz, "f")
          }
          get fuzzColorTexture() {
            return (0, xz.c)(this, ru, "f")
          }
          set fuzzColorTexture(zz) {
            (0, xz.g)(this, ru, zz, "f")
          }
          get fuzzRoughness() {
            return (0, xz.c)(this, ou, "f")
          }
          set fuzzRoughness(zz) {
            (0, xz.g)(this, ou, zz, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, xz.c)(this, xu, "f")
          }
          set fuzzRoughnessTexture(zz) {
            (0, xz.g)(this, xu, zz, "f")
          }
          get geometryThinWalled() {
            return (0, xz.c)(this, Ju, "f")
          }
          set geometryThinWalled(zz) {
            (0, xz.g)(this, Ju, zz, "f")
          }
          get geometryNormalTexture() {
            return (0, xz.c)(this, Au, "f")
          }
          set geometryNormalTexture(zz) {
            (0, xz.g)(this, Au, zz, "f")
          }
          get geometryTangent() {
            return (0, xz.c)(this, Tu, "f")
          }
          set geometryTangent(zz) {
            (0, xz.g)(this, Tu, zz, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(zz) {
            this.geometryTangent = new Uz.m(Math.cos(zz), Math.sin(zz))
          }
          get geometryTangentTexture() {
            return (0, xz.c)(this, Lu, "f")
          }
          set geometryTangentTexture(zz) {
            (0, xz.g)(this, Lu, zz, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, xz.c)(this, Pu, "f")
          }
          set geometryCoatNormalTexture(zz) {
            (0, xz.g)(this, Pu, zz, "f")
          }
          get geometryCoatTangent() {
            return (0, xz.c)(this, Gu, "f")
          }
          set geometryCoatTangent(zz) {
            (0, xz.g)(this, Gu, zz, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(zz) {
            this.geometryCoatTangent = new Uz.m(Math.cos(zz), Math.sin(zz))
          }
          get geometryCoatTangentTexture() {
            return (0, xz.c)(this, au, "f")
          }
          set geometryCoatTangentTexture(zz) {
            (0, xz.g)(this, au, zz, "f")
          }
          get geometryOpacity() {
            return (0, xz.c)(this, Vu, "f")
          }
          set geometryOpacity(zz) {
            (0, xz.g)(this, Vu, zz, "f")
          }
          get geometryOpacityTexture() {
            return (0, xz.c)(this, mu, "f")
          }
          set geometryOpacityTexture(zz) {
            (0, xz.g)(this, mu, zz, "f")
          }
          get geometryThickness() {
            return (0, xz.c)(this, qu, "f")
          }
          set geometryThickness(zz) {
            (0, xz.g)(this, qu, zz, "f")
          }
          get geometryThicknessTexture() {
            return (0, xz.c)(this, hu, "f")
          }
          set geometryThicknessTexture(zz) {
            (0, xz.g)(this, hu, zz, "f")
          }
          get emissionLuminance() {
            return (0, xz.c)(this, Uu, "f")
          }
          set emissionLuminance(zz) {
            (0, xz.g)(this, Uu, zz, "f")
          }
          get emissionColor() {
            return (0, xz.c)(this, cu, "f")
          }
          set emissionColor(zz) {
            (0, xz.g)(this, cu, zz, "f")
          }
          get emissionColorTexture() {
            return (0, xz.c)(this, Su, "f")
          }
          set emissionColorTexture(zz) {
            (0, xz.g)(this, Su, zz, "f")
          }
          get thinFilmWeight() {
            return (0, xz.c)(this, Du, "f")
          }
          set thinFilmWeight(zz) {
            (0, xz.g)(this, Du, zz, "f")
          }
          get thinFilmWeightTexture() {
            return (0, xz.c)(this, ju, "f")
          }
          set thinFilmWeightTexture(zz) {
            (0, xz.g)(this, ju, zz, "f")
          }
          get thinFilmThickness() {
            return (0, xz.c)(this, Iu, "f")
          }
          set thinFilmThickness(zz) {
            (0, xz.g)(this, Iu, zz, "f")
          }
          get thinFilmThicknessMin() {
            return (0, xz.c)(this, Yu, "f")
          }
          set thinFilmThicknessMin(zz) {
            (0, xz.g)(this, Yu, zz, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, xz.c)(this, ku, "f")
          }
          set thinFilmThicknessTexture(zz) {
            (0, xz.g)(this, ku, zz, "f")
          }
          get thinFilmIor() {
            return (0, xz.c)(this, zb, "f")
          }
          set thinFilmIor(zz) {
            (0, xz.g)(this, zb, zz, "f")
          }
          get ambientOcclusionTexture() {
            return (0, xz.c)(this, ub, "f")
          }
          set ambientOcclusionTexture(zz) {
            (0, xz.g)(this, ub, zz, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(zz) {
            this._sssQuality !== zz && (this._sssQuality = zz, this.zuz(1))
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
            return (0, xz.c)(this, bb, "f")
          }
          set directIntensity(zz) {
            (0, xz.g)(this, bb, zz, "f")
          }
          get environmentIntensity() {
            return (0, xz.c)(this, Eb, "f")
          }
          set environmentIntensity(zz) {
            (0, xz.g)(this, Eb, zz, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, xz.c)(this, nb, "f")
          }
          set useSpecularWeightFromTextureAlpha(zz) {
            (0, xz.g)(this, nb, zz, "f")
          }
          get forceAlphaTest() {
            return (0, xz.c)(this, ib, "f")
          }
          set forceAlphaTest(zz) {
            (0, xz.g)(this, ib, zz, "f")
          }
          get alphaCutOff() {
            return (0, xz.c)(this, lb, "f")
          }
          set alphaCutOff(zz) {
            (0, xz.g)(this, lb, zz, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, xz.c)(this, Mb, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(zz) {
            (0, xz.g)(this, Mb, zz, "f")
          }
          get useAmbientInGrayScale() {
            return (0, xz.c)(this, tb, "f")
          }
          set useAmbientInGrayScale(zz) {
            (0, xz.g)(this, tb, zz, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(Wz.c.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === iz.c.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(zz) {
            zz !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = zz ? iz.c.LIGHTFALLOFF_PHYSICAL : iz.c.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === iz.c.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(zz) {
            zz !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = zz ? iz.c.LIGHTFALLOFF_GLTF : iz.c.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, xz.c)(this, Hb, "f")
          }
          set useObjectSpaceNormalMap(zz) {
            (0, xz.g)(this, Hb, zz, "f")
          }
          get useParallax() {
            return (0, xz.c)(this, Ob, "f")
          }
          set useParallax(zz) {
            (0, xz.g)(this, Ob, zz, "f")
          }
          get useParallaxOcclusion() {
            return (0, xz.c)(this, pb, "f")
          }
          set useParallaxOcclusion(zz) {
            (0, xz.g)(this, pb, zz, "f")
          }
          get parallaxScaleBias() {
            return (0, xz.c)(this, db, "f")
          }
          set parallaxScaleBias(zz) {
            (0, xz.g)(this, db, zz, "f")
          }
          get disableLighting() {
            return (0, xz.c)(this, Fb, "f")
          }
          set disableLighting(zz) {
            (0, xz.g)(this, Fb, zz, "f")
          }
          get forceIrradianceInFragment() {
            return (0, xz.c)(this, Zb, "f")
          }
          set forceIrradianceInFragment(zz) {
            (0, xz.g)(this, Zb, zz, "f")
          }
          get maxSimultaneousLights() {
            return (0, xz.c)(this, Rb, "f")
          }
          set maxSimultaneousLights(zz) {
            (0, xz.g)(this, Rb, zz, "f")
          }
          get invertNormalMapX() {
            return (0, xz.c)(this, Kb, "f")
          }
          set invertNormalMapX(zz) {
            (0, xz.g)(this, Kb, zz, "f")
          }
          get invertNormalMapY() {
            return (0, xz.c)(this, wb, "f")
          }
          set invertNormalMapY(zz) {
            (0, xz.g)(this, wb, zz, "f")
          }
          get twoSidedLighting() {
            return (0, xz.c)(this, Xb, "f")
          }
          set twoSidedLighting(zz) {
            (0, xz.g)(this, Xb, zz, "f")
          }
          get useAlphaFresnel() {
            return (0, xz.c)(this, fb, "f")
          }
          set useAlphaFresnel(zz) {
            (0, xz.g)(this, fb, zz, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, xz.c)(this, sb, "f")
          }
          set useLinearAlphaFresnel(zz) {
            (0, xz.g)(this, sb, zz, "f")
          }
          get environmentBRDFTexture() {
            return (0, xz.c)(this, rb, "f")
          }
          set environmentBRDFTexture(zz) {
            (0, xz.g)(this, rb, zz, "f")
          }
          get forceNormalForward() {
            return (0, xz.c)(this, ob, "f")
          }
          set forceNormalForward(zz) {
            (0, xz.g)(this, ob, zz, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, xz.c)(this, Nb, "f")
          }
          set enableSpecularAntiAliasing(zz) {
            (0, xz.g)(this, Nb, zz, "f")
          }
          get useHorizonOcclusion() {
            return (0, xz.c)(this, vb, "f")
          }
          set useHorizonOcclusion(zz) {
            (0, xz.g)(this, vb, zz, "f")
          }
          get useRadianceOcclusion() {
            return (0, xz.c)(this, xb, "f")
          }
          set useRadianceOcclusion(zz) {
            (0, xz.g)(this, xb, zz, "f")
          }
          get unlit() {
            return (0, xz.c)(this, Jb, "f")
          }
          set unlit(zz) {
            (0, xz.g)(this, Jb, zz, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, xz.c)(this, Ab, "f")
          }
          set applyDecalMapAfterDetailMap(zz) {
            (0, xz.g)(this, Ab, zz, "f")
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
            this._refractionHighQualityBlur !== zz && (this._refractionHighQualityBlur = zz, this.zuz(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(zz) {
            this._realTimeFiltering = zz, this.zuz(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(zz) {
            this._realTimeFilteringQuality = zz, this.zuz(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(zz) {
            this._fuzzSampleNumber = zz, this.zuz(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, xz.c)(this, Tb, "f")
          }
          set debugMode(zz) {
            (0, xz.g)(this, Tb, zz, "f")
          }
          constructor(bz, Jz) {
            super(bz, Jz, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || zz.ForceGLSL), uz.set(this, ((0, xz.j)(this, mn), (0, xz.j)(this, qn, void 0))), this._baseWeight = ((0, xz.j)(this, hn), new Wu("base_weight", 1, "vBaseWeight", 1)), Ez.set(this, (0, xz.j)(this, Un, void 0)), this._baseWeightTexture = ((0, xz.j)(this, cn), new eu("base_weight", "baseWeight", "BASE_WEIGHT")), nz.set(this, (0, xz.j)(this, gn, void 0)), this._baseColor = ((0, xz.j)(this, Sn), new Wu("base_color", Wz.c.White(), "vBaseColor", 4)), lz.set(this, (0, xz.j)(this, yn, void 0)), this._baseColorTexture = ((0, xz.j)(this, Dn), new eu("base_color", "baseColor", "BASE_COLOR")), Mz.set(this, (0, xz.j)(this, Qn, void 0)), this._baseDiffuseRoughness = ((0, xz.j)(this, Wn), new Wu("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), tz.set(this, (0, xz.j)(this, en, void 0)), this._baseDiffuseRoughnessTexture = ((0, xz.j)(this, jn), new eu("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), Hz.set(this, (0, xz.j)(this, In, void 0)), this._baseMetalness = ((0, xz.j)(this, Bn), new Wu("base_metalness", 0, "vReflectanceInfo", 4, 0)), Oz.set(this, (0, xz.j)(this, Cn, void 0)), this._baseMetalnessTexture = ((0, xz.j)(this, Yn), new eu("base_metalness", "baseMetalness", "BASE_METALNESS")), pz.set(this, (0, xz.j)(this, kn, void 0)), this._specularWeight = ((0, xz.j)(this, zi), new Wu("specular_weight", 1, "vReflectanceInfo", 4, 3)), dz.set(this, (0, xz.j)(this, ui, void 0)), this._specularWeightTexture = ((0, xz.j)(this, bi), new eu("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), Fz.set(this, (0, xz.j)(this, Ei, void 0)), this._specularColor = ((0, xz.j)(this, ni), new Wu("specular_color", Wz.c.White(), "vSpecularColor", 4)), Zz.set(this, (0, xz.j)(this, ii, void 0)), this._specularColorTexture = ((0, xz.j)(this, li), new eu("specular_color", "specularColor", "SPECULAR_COLOR")), Rz.set(this, (0, xz.j)(this, Mi, void 0)), this._specularRoughness = ((0, xz.j)(this, ti), new Wu("specular_roughness", .3, "vReflectanceInfo", 4, 1)), Kz.set(this, (0, xz.j)(this, Hi, void 0)), this._specularRoughnessTexture = ((0, xz.j)(this, Oi), new eu("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), wz.set(this, (0, xz.j)(this, di, void 0)), this._specularRoughnessAnisotropy = ((0, xz.j)(this, Fi), new Wu("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), Xz.set(this, (0, xz.j)(this, Zi, void 0)), this._specularRoughnessAnisotropyTexture = ((0, xz.j)(this, Ri), new eu("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), fz.set(this, (0, xz.j)(this, Ki, void 0)), this._specularIor = ((0, xz.j)(this, wi), new Wu("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), sz.set(this, (0, xz.j)(this, Xi, void 0)), this._transmissionWeight = ((0, xz.j)(this, fi), new Wu("transmission_weight", 0, "vTransmissionWeight", 1)), rz.set(this, (0, xz.j)(this, si, void 0)), this._transmissionWeightTexture = ((0, xz.j)(this, ri), new eu("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), oz.set(this, (0, xz.j)(this, oi, void 0)), this._transmissionColor = ((0, xz.j)(this, Ni), new Wu("transmission_color", Wz.c.White(), "vTransmissionColor", 3, 0)), Nz.set(this, (0, xz.j)(this, vi, void 0)), this._transmissionColorTexture = ((0, xz.j)(this, xi), new eu("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), vz.set(this, (0, xz.j)(this, Ji, void 0)), this._transmissionDepth = ((0, xz.j)(this, Ai), new Wu("transmission_depth", 0, "vTransmissionDepth", 1, 0)), Pz.set(this, (0, xz.j)(this, Ti, void 0)), this._transmissionDepthTexture = ((0, xz.j)(this, Li), new eu("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Gz.set(this, (0, xz.j)(this, Pi, void 0)), this._transmissionScatter = ((0, xz.j)(this, Gi), new Wu("transmission_scatter", Wz.c.Black(), "vTransmissionScatter", 3, 0)), az.set(this, (0, xz.j)(this, ai, void 0)), this._transmissionScatterTexture = ((0, xz.j)(this, Vi), new eu("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Vz.set(this, (0, xz.j)(this, mi, void 0)), this._transmissionScatterAnisotropy = ((0, xz.j)(this, qi), new Wu("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), hz.set(this, (0, xz.j)(this, Ui, void 0)), this._transmissionDispersionScale = ((0, xz.j)(this, ci), new Wu("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), gz.set(this, (0, xz.j)(this, gi, void 0)), this._transmissionDispersionScaleTexture = ((0, xz.j)(this, Si), new eu("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), Sz.set(this, (0, xz.j)(this, yi, void 0)), this._transmissionDispersionAbbeNumber = ((0, xz.j)(this, Di), new Wu("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), yz.set(this, (0, xz.j)(this, Qi, void 0)), this._subsurfaceWeight = ((0, xz.j)(this, Wi), new Wu("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), Dz.set(this, (0, xz.j)(this, ei, void 0)), this._subsurfaceWeightTexture = ((0, xz.j)(this, ji), new eu("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), ez.set(this, (0, xz.j)(this, Ii, void 0)), this._subsurfaceColor = ((0, xz.j)(this, Bi), new Wu("subsurface_color", new Wz.c(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), Iz.set(this, (0, xz.j)(this, Ci, void 0)), this._subsurfaceColorTexture = ((0, xz.j)(this, Yi), new eu("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), kz.set(this, (0, xz.j)(this, ki, void 0)), this._subsurfaceRadius = ((0, xz.j)(this, zl), new Wu("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), zu.set(this, (0, xz.j)(this, ul, void 0)), this._subsurfaceRadiusScale = ((0, xz.j)(this, bl), new Wu("subsurface_radius_scale", new Wz.c(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), uu.set(this, (0, xz.j)(this, El, void 0)), this._subsurfaceRadiusScaleTexture = ((0, xz.j)(this, nl), new eu("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), bu.set(this, (0, xz.j)(this, il, void 0)), this._subsurfaceScatterAnisotropy = ((0, xz.j)(this, ll), new Wu("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), Eu.set(this, (0, xz.j)(this, Ml, void 0)), this._coatWeight = ((0, xz.j)(this, tl), new Wu("coat_weight", 0, "vCoatWeight", 1, 0)), nu.set(this, (0, xz.j)(this, Hl, void 0)), this._coatWeightTexture = ((0, xz.j)(this, Ol), new eu("coat_weight", "coatWeight", "COAT_WEIGHT")), iu.set(this, (0, xz.j)(this, pl, void 0)), this._coatColor = ((0, xz.j)(this, dl), new Wu("coat_color", Wz.c.White(), "vCoatColor", 3, 0)), lu.set(this, (0, xz.j)(this, Fl, void 0)), this._coatColorTexture = ((0, xz.j)(this, Zl), new eu("coat_color", "coatColor", "COAT_COLOR")), Mu.set(this, (0, xz.j)(this, Rl, void 0)), this._coatRoughness = ((0, xz.j)(this, Kl), new Wu("coat_roughness", 0, "vCoatRoughness", 1, 0)), tu.set(this, (0, xz.j)(this, wl, void 0)), this._coatRoughnessTexture = ((0, xz.j)(this, Xl), new eu("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Hu.set(this, (0, xz.j)(this, fl, void 0)), this._coatRoughnessAnisotropy = ((0, xz.j)(this, sl), new Wu("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), Zu.set(this, (0, xz.j)(this, rl, void 0)), this._coatRoughnessAnisotropyTexture = ((0, xz.j)(this, ol), new eu("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), Ru.set(this, (0, xz.j)(this, Nl, void 0)), this._coatIor = ((0, xz.j)(this, vl), new Wu("coat_ior", 1.5, "vCoatIor", 1, 0)), Ku.set(this, (0, xz.j)(this, xl, void 0)), this._coatDarkening = ((0, xz.j)(this, Jl), new Wu("coat_darkening", 1, "vCoatDarkening", 1, 0)), wu.set(this, (0, xz.j)(this, Al, void 0)), this._coatDarkeningTexture = ((0, xz.j)(this, Tl), new eu("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, Xu.set(this, (0, xz.j)(this, Ll, void 0)), this._fuzzWeight = ((0, xz.j)(this, Pl), new Wu("fuzz_weight", 0, "vFuzzWeight", 1, 0)), fu.set(this, (0, xz.j)(this, Gl, void 0)), this._fuzzWeightTexture = ((0, xz.j)(this, al), new eu("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), su.set(this, (0, xz.j)(this, Vl, void 0)), this._fuzzColor = ((0, xz.j)(this, ml), new Wu("fuzz_color", Wz.c.White(), "vFuzzColor", 3, 0)), ru.set(this, (0, xz.j)(this, ql, void 0)), this._fuzzColorTexture = ((0, xz.j)(this, hl), new eu("fuzz_color", "fuzzColor", "FUZZ_COLOR")), ou.set(this, (0, xz.j)(this, Ul, void 0)), this._fuzzRoughness = ((0, xz.j)(this, cl), new Wu("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), xu.set(this, (0, xz.j)(this, gl, void 0)), this._fuzzRoughnessTexture = ((0, xz.j)(this, Sl), new eu("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Ju.set(this, (0, xz.j)(this, yl, void 0)), this._geometryThinWalled = ((0, xz.j)(this, Dl), new Wu("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Au.set(this, (0, xz.j)(this, Ql, void 0)), this._geometryNormalTexture = ((0, xz.j)(this, Wl), new eu("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), Tu.set(this, (0, xz.j)(this, el, void 0)), this._geometryTangent = ((0, xz.j)(this, jl), new Wu("geometry_tangent", new Uz.m(1, 0), "vSpecularAnisotropy", 3, 0)), Lu.set(this, (0, xz.j)(this, Il, void 0)), this._geometryTangentTexture = ((0, xz.j)(this, Bl), new eu("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), Pu.set(this, (0, xz.j)(this, Cl, void 0)), this._geometryCoatNormalTexture = ((0, xz.j)(this, Yl), new eu("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Gu.set(this, (0, xz.j)(this, kl, void 0)), this._geometryCoatTangent = ((0, xz.j)(this, zM), new Wu("geometry_coat_tangent", new Uz.m(1, 0), "vGeometryCoatTangent", 2, 0)), au.set(this, (0, xz.j)(this, uM, void 0)), this._geometryCoatTangentTexture = ((0, xz.j)(this, bM), new eu("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), Vu.set(this, (0, xz.j)(this, EM, void 0)), this._geometryOpacity = ((0, xz.j)(this, nM), new Wu("geometry_opacity", 1, "vBaseColor", 4, 3)), mu.set(this, (0, xz.j)(this, iM, void 0)), this._geometryOpacityTexture = ((0, xz.j)(this, lM), new eu("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), qu.set(this, (0, xz.j)(this, MM, void 0)), this._geometryThickness = ((0, xz.j)(this, tM), new Wu("geometry_thickness", 0, "vGeometryThickness", 1, 0)), hu.set(this, (0, xz.j)(this, HM, void 0)), this._geometryThicknessTexture = ((0, xz.j)(this, OM), new eu("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), Uu.set(this, (0, xz.j)(this, pM, void 0)), this._emissionLuminance = ((0, xz.j)(this, dM), new Wu("emission_luminance", 1, "vLightingIntensity", 4, 1)), cu.set(this, (0, xz.j)(this, FM, void 0)), this._emissionColor = ((0, xz.j)(this, ZM), new Wu("emission_color", Wz.c.Black(), "vEmissionColor", 3)), Su.set(this, (0, xz.j)(this, RM, void 0)), this._emissionColorTexture = ((0, xz.j)(this, KM), new eu("emission_color", "emissionColor", "EMISSION_COLOR")), Du.set(this, (0, xz.j)(this, wM, void 0)), this._thinFilmWeight = ((0, xz.j)(this, XM), new Wu("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), ju.set(this, (0, xz.j)(this, fM, void 0)), this._thinFilmWeightTexture = ((0, xz.j)(this, sM), new eu("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), Iu.set(this, (0, xz.j)(this, rM, void 0)), this._thinFilmThickness = ((0, xz.j)(this, oM), new Wu("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), Yu.set(this, (0, xz.j)(this, NM, void 0)), this._thinFilmThicknessMin = ((0, xz.j)(this, vM), new Wu("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), ku.set(this, (0, xz.j)(this, xM, void 0)), this._thinFilmThicknessTexture = ((0, xz.j)(this, JM), new eu("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), zb.set(this, (0, xz.j)(this, AM, void 0)), this._thinFilmIor = ((0, xz.j)(this, TM), new Wu("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), ub.set(this, (0, xz.j)(this, LM, void 0)), this._ambientOcclusionTexture = ((0, xz.j)(this, PM), new eu("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = zz.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, bb.set(this, (0, xz.j)(this, GM, 1)), Eb.set(this, ((0, xz.j)(this, aM), (0, xz.j)(this, VM, 1))), nb.set(this, ((0, xz.j)(this, mM), (0, xz.j)(this, qM, !1))), ib.set(this, ((0, xz.j)(this, hM), (0, xz.j)(this, UM, !1))), lb.set(this, ((0, xz.j)(this, cM), (0, xz.j)(this, gM, .4))), Mb.set(this, ((0, xz.j)(this, SM), (0, xz.j)(this, yM, !1))), tb.set(this, ((0, xz.j)(this, DM), (0, xz.j)(this, QM, !1))), Hb.set(this, ((0, xz.j)(this, WM), (0, xz.j)(this, eM, !1))), Ob.set(this, ((0, xz.j)(this, jM), (0, xz.j)(this, IM, !1))), pb.set(this, ((0, xz.j)(this, BM), (0, xz.j)(this, CM, !1))), db.set(this, ((0, xz.j)(this, YM), (0, xz.j)(this, kM, .05))), Fb.set(this, ((0, xz.j)(this, zt), (0, xz.j)(this, ut, !1))), Zb.set(this, ((0, xz.j)(this, bt), (0, xz.j)(this, Et, !1))), Rb.set(this, ((0, xz.j)(this, nt), (0, xz.j)(this, it, 4))), Kb.set(this, ((0, xz.j)(this, lt), (0, xz.j)(this, Mt, !1))), wb.set(this, ((0, xz.j)(this, tt), (0, xz.j)(this, Ht, !1))), Xb.set(this, ((0, xz.j)(this, Ot), (0, xz.j)(this, pt, !1))), fb.set(this, ((0, xz.j)(this, dt), (0, xz.j)(this, Ft, !1))), sb.set(this, ((0, xz.j)(this, Zt), (0, xz.j)(this, Rt, !1))), rb.set(this, ((0, xz.j)(this, Kt), (0, xz.j)(this, wt, null))), ob.set(this, ((0, xz.j)(this, Xt), (0, xz.j)(this, ft, !1))), Nb.set(this, ((0, xz.j)(this, st), (0, xz.j)(this, rt, !1))), vb.set(this, ((0, xz.j)(this, ot), (0, xz.j)(this, Nt, !0))), xb.set(this, ((0, xz.j)(this, vt), (0, xz.j)(this, xt, !0))), Jb.set(this, ((0, xz.j)(this, Jt), (0, xz.j)(this, At, !1))), Ab.set(this, ((0, xz.j)(this, Tt), (0, xz.j)(this, Lt, !1))), this._lightingInfos = ((0, xz.j)(this, Pt), new Uz.r(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = iz.c.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Tz.e(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Tb.set(this, (0, xz.j)(this, Gt, 0)), this.debugLimit = ((0, xz.j)(this, Vt), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = iz.c.MATERIAL_OPAQUE, this.XT() && !this.XT()?.uR().isWebGPU && this.XT().uR().PR < 2 && Az.e.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), zz._noiseTextures[this.XT().uniqueId] || (zz._noiseTextures[this.XT().uniqueId] = new Lz.e(vu.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.XT(), !1, !0, 1), this.XT().aT.addOnce((() => {
              zz._noiseTextures[this.XT().uniqueId]?.dispose(), delete zz._noiseTextures[this.XT().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Bz.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), Bz.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = qz(this.XT()), this._environmentFuzzBRDFTexture = mz(this.XT()), this.prePassConfiguration = new Qz.e, this._propertyList = {};
            for (const zz of Object.getOwnPropertyNames(this)) {
              const uz = this[zz];
              uz instanceof Wu && (this._propertyList[zz] = uz)
            }
            Object.keys(this._propertyList).forEach((zz => {
              const uz = this._propertyList[zz];
              let bz = this._uniformsList[uz.targetUniformName];
              bz ? bz.numComponents !== uz.targetUniformComponentNum ? Az.e.Error(`Uniform ${uz.targetUniformName} already exists of size ${bz.numComponents}, but trying to set it to ${uz.targetUniformComponentNum}.`) : bz.requiredDefine !== uz.requiredDefine && (bz.requiredDefine = void 0) : (bz = new Qu(uz.targetUniformName, uz.targetUniformComponentNum), bz.requiredDefine = uz.requiredDefine, this._uniformsList[uz.targetUniformName] = bz), "" === bz.firstLinkedKey && (bz.firstLinkedKey = uz.name), bz.linkedProperties[uz.name] = uz
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const zz of Object.getOwnPropertyNames(this)) {
              const uz = this[zz];
              uz instanceof eu && (this._samplersList[zz] = uz)
            }
            for (const zz in this._samplersList) {
              const uz = this._samplersList[zz].textureDefine;
              this._samplerDefines[uz] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[uz + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[uz + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(Bz.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(Bz.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
            return this._hasAlphaChannel() && this._transparencyMode !== iz.c.MATERIAL_OPAQUE && !this.geometryOpacityTexture
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
          clone(uz) {
            let bz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const nz = Nu.e.Clone((() => new zz(uz, this.XT())), this, {
              cloneTexturesOnlyOnce: bz
            });
            return nz.id = uz, nz.name = uz, this.stencil.copyTo(nz.stencil), this._clonePlugins(nz, Ez), nz
          }
          serialize() {
            const zz = super.serialize();
            return zz.customType = "BABYLON.OpenPBRMaterial", zz
          }
          static Parse(uz, bz, Ez) {
            const nz = Nu.e.Parse((() => new zz(uz.name, bz)), uz, bz, Ez);
            return uz.stencil && nz.stencil.parse(uz.stencil, bz, Ez), iz.c._ParsePlugins(uz, nz, bz, Ez), nz
          }
          forceCompilation(zz, uz, bz) {
            const Ez = {
              clipPlane: !1,
              useInstances: !1,
              ...bz
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const bz = new Bu({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                nz = this._prepareEffect(zz, zz, bz, void 0, void 0, Ez.useInstances, Ez.clipPlane);
              this._onEffectCreatedObservable && (yu.effect = nz, yu.subMesh = null, this._onEffectCreatedObservable.notifyObservers(yu)), nz.isReady() ? uz && uz(this) : nz.onCompileObservable.add((() => {
                uz && uz(this)
              }))
            })()
          }
          isReadyForSubMesh(uz, bz, Ez) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const nz = bz._drawWrapper;
            if (nz.effect && this.isFrozen && nz._wasPreviouslyReady && nz._wasPreviouslyUsingInstances === Ez) return !0;
            bz.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), bz.materialDefines = new Bu({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const iz = bz.materialDefines;
            if (this._isReadyForSubMesh(bz)) return !0;
            const lz = this.XT(),
              Mz = lz.uR();
            if (iz._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, lz.texturesEnabled)) {
              for (const zz in this._samplersList) {
                const uz = this._samplersList[zz];
                if (uz.value && !uz.value.isReadyOrNotBlocking()) return !1
              }
              const uz = this._getRadianceTexture();
              if (uz && Bz.d.ReflectionTextureEnabled) {
                if (!uz.isReadyOrNotBlocking()) return !1;
                if (uz.irradianceTexture) {
                  if (!uz.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!uz.sphericalPolynomial && uz.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && Bz.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && Bz.d.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && Bz.d.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (zz._noiseTextures[lz.uniqueId] && !zz._noiseTextures[lz.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = iz, this._eventInfo.subMesh = bz, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (iz._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (iz.AREALIGHTUSED)
              for (let zz = 0; zz < uz.lightSources.length; zz++)
                if (!uz.lightSources[zz]._isReady()) return !1;
            if (Mz.getCaps().standardDerivatives || uz.isVerticesDataPresent(cz.j.NormalKind) || (uz.createNormals(!0), Az.e.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + uz.name)), !(0, Yz.d)(lz, uz, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const tz = bz.effect,
              Hz = iz._areLightsDisposed,
              Oz = this._prepareEffect(uz, bz.getRenderingMesh(), iz, this.onCompiled, this.onError, Ez, null);
            let pz = !1;
            if (Oz)
              if (this._onEffectCreatedObservable && (yu.effect = Oz, yu.subMesh = bz, this._onEffectCreatedObservable.notifyObservers(yu)), this.allowShaderHotSwapping && tz && !Oz.isReady()) {
                if (iz.markAsUnprocessed(), pz = this.isFrozen, Hz) return iz._areLightsDisposed = !0, !1
              } else lz.resetCachedMaterial(), bz.setEffect(Oz, iz, this._materialContext);
            return !(!bz.effect || !bz.effect.isReady()) && (iz._renderId = lz.getRenderId(), nz._wasPreviouslyReady = !pz, nz._wasPreviouslyUsingInstances = !!Ez, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const zz = this._uniformBuffer;
            zz.addUniform("vTangentSpaceParams", 2), zz.addUniform("vLightingIntensity", 4), zz.addUniform("pointSize", 1), zz.addUniform("vDebugMode", 2), zz.addUniform("renderTargetSize", 2), zz.addUniform("cameraInfo", 4), zz.addUniform("vTextureRepetitionHexTilingParams", 4), zz.addUniform("backgroundRefractionMatrix", 16), zz.addUniform("vBackgroundRefractionInfos", 3), (0, Yz.pb)(zz, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((uz => {
              zz.addUniform(uz.name, uz.numComponents)
            })), Object.values(this._samplersList).forEach((uz => {
              zz.addUniform(uz.samplerInfoName, 2), zz.addUniform(uz.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(zz, uz, bz, Ez) {
            if (0 === this.geometryThickness) zz.updateFloat("vGeometryThickness", 0);
            else {
              Ez.getRenderingMesh().getWorldMatrix().decompose(Uz.l.ER[0]);
              const uz = Math.max(Math.abs(Uz.l.ER[0].x), Math.abs(Uz.l.ER[0].y), Math.abs(Uz.l.ER[0].z));
              zz.updateFloat("vGeometryThickness", this.geometryThickness * uz)
            }
          }
          bindForSubMesh(uz, bz, Ez) {
            const nz = this.XT(),
              iz = Ez.materialDefines;
            if (!iz) return;
            const lz = Ez.effect;
            if (!lz) return;
            this._activeEffect = lz, bz.getMeshUniformBuffer().bindToEffect(lz, "Mesh"), bz.transferToEffect(uz);
            const Mz = nz.uR();
            this._uniformBuffer.bindToEffect(lz, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, nz, bz, uz, this.isFrozen), Fu.d.Bind(Mz.currentRenderPassId, this._activeEffect, bz, uz, this);
            const tz = nz.activeCamera;
            tz ? this._uniformBuffer.updateFloat4("cameraInfo", tz.minZ, tz.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Hz = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Hz[0], Hz[1], Hz[2], Hz[3]), this._eventInfo.subMesh = Ez, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), iz.OBJECTSPACE_NORMALMAP && (uz.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Oz = this._mustRebind(nz, lz, Ez, bz.visibility),
              pz = Mz._features.needToAlwaysBindUniformBuffers;
            (0, Yz.g)(bz, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, pu.c)(this._activeEffect, this._vertexPullingMetadata);
            const dz = this._uniformBuffer;
            if (Oz) {
              this.bindViewProjection(lz);
              const uz = this._getRadianceTexture();
              if (!dz.useUbo || !this.isFrozen || !dz.isSync || Ez._drawWrapper._forceRebindOnNextCall) {
                if (nz.texturesEnabled) {
                  for (const zz in this._samplersList) {
                    const uz = this._samplersList[zz];
                    uz.value && (dz.updateFloat2(uz.samplerInfoName, uz.value.coordinatesIndex, uz.value.level), (0, Yz.B)(uz.value, dz, uz.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (nz._mirroredCameraPosition ? dz.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : dz.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Yz.m)(nz, iz, dz, Wz.c.White(), uz, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && dz.updateFloat("pointSize", this.pointSize);
                const zz = this._uniformsArray;
                for (let uz = 0, bz = zz.length; uz < bz; uz++) {
                  const bz = zz[uz];
                  (void 0 === bz.requiredDefine || iz[bz.requiredDefine]) && (4 === bz.numComponents ? (bz.populateVectorFromLinkedProperties(Uz.l.Vector4[0]), dz.updateVector4(bz.name, Uz.l.Vector4[0])) : 3 === bz.numComponents ? (bz.populateVectorFromLinkedProperties(Uz.l.ER[0]), dz.updateVector3(bz.name, Uz.l.ER[0])) : 2 === bz.numComponents ? (bz.populateVectorFromLinkedProperties(Uz.l.Vector2[0]), dz.updateFloat2(bz.name, Uz.l.Vector2[0].x, Uz.l.Vector2[0].y)) : 1 === bz.numComponents && dz.updateFloat(bz.name, bz.linkedProperties[bz.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * nz.environmentIntensity, this._lightingInfos.w = 1, dz.updateVector4("vLightingIntensity", this._lightingInfos), dz.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (nz.texturesEnabled) {
                for (const zz in this._samplersList) {
                  const uz = this._samplersList[zz];
                  uz.value && dz.setTexture(uz.samplerName, uz.value)
                }
                if ((0, Yz.n)(nz, iz, dz, uz, this.realTimeFiltering), iz.ENVIRONMENTBRDF && dz.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), iz.FUZZENVIRONMENTBRDF && dz.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), iz.REFRACTED_BACKGROUND && (dz.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), dz.M_("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Uz.l.ER[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), dz.updateVector3("vBackgroundRefractionInfos", Uz.l.ER[1])), (iz.ANISOTROPIC || iz.FUZZ || iz.REFRACTED_BACKGROUND || iz.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && dz.setTexture("blueNoiseSampler", zz._noiseTextures[this.XT().uniqueId]), iz.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const zz = this.sssIrradianceTexture.getSize().width,
                    uz = this.sssIrradianceTexture.getSize().height;
                  dz.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), dz.setTexture("sceneDepthSampler", this.sssDepthTexture), dz.updateFloat2("renderTargetSize", zz, uz)
                }
              }
              this.XT().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(bz) && this.XT().depthPeelingRenderer.bind(lz), this._eventInfo.subMesh = Ez, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Ou.d)(this._activeEffect, this, nz), this.bindEyePosition(lz)
            } else pz && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, nz, nz.uR(), Ez), !Oz && this.isFrozen && !pz || !nz.lightsEnabled || this._disableLighting || (0, Yz.q)(nz, bz, this._activeEffect, iz, this._maxSimultaneousLights), !Oz && this.isFrozen || (this.bindView(lz), (0, Yz.k)(nz, bz, this._activeEffect, !0), iz.NUM_MORPH_INFLUENCERS && (0, Yz.w)(bz, this._activeEffect), iz.BAKED_VERTEX_ANIMATION_TEXTURE && bz.bakedVertexAnimationManager?.bind(lz, iz.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Yz.t)(iz, this._activeEffect, nz)), this._afterBind(bz, this._activeEffect, Ez), dz.update()
          }
          getAnimatables() {
            const zz = super.getAnimatables();
            for (const uz in this._samplersList) {
              const bz = this._samplersList[uz];
              bz.value && bz.value.animations && bz.value.animations.length > 0 && zz.push(bz.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && zz.push(this._radianceTexture), zz
          }
          getActiveTextures() {
            const zz = super.getActiveTextures();
            for (const uz in this._samplersList) {
              const bz = this._samplersList[uz];
              bz.value && zz.push(bz.value)
            }
            return this._radianceTexture && zz.push(this._radianceTexture), zz
          }
          hasTexture(zz) {
            if (super.hasTexture(zz)) return !0;
            for (const uz in this._samplersList) {
              if (this._samplersList[uz].value === zz) return !0
            }
            return this._radianceTexture === zz
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(zz, uz) {
            if (this._breakShaderLoadedCheck = !0, uz) {
              this._environmentBRDFTexture && this.XT().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.XT().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const zz in this._samplersList) {
                const uz = this._samplersList[zz];
                uz.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(zz, uz)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.XT().environmentTexture
          }
          _prepareEffect(uz, bz, Ez) {
            let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              lz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Mz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(uz, bz, Ez, lz, Mz), !Ez.isDirty) return null;
            Ez.markAsProcessed();
            const tz = this.XT().uR(),
              Hz = new Cz.c;
            let Oz = 0;
            Ez.USESPHERICALINVERTEX && Hz.addFallback(Oz++, "USESPHERICALINVERTEX"), Ez.FOG && Hz.addFallback(Oz, "FOG"), Ez.SPECULARAA && Hz.addFallback(Oz, "SPECULARAA"), Ez.POINTSIZE && Hz.addFallback(Oz, "POINTSIZE"), Ez.LOGARITHMICDEPTH && Hz.addFallback(Oz, "LOGARITHMICDEPTH"), Ez.PARALLAX && Hz.addFallback(Oz, "PARALLAX"), Ez.PARALLAX_RHS && Hz.addFallback(Oz, "PARALLAX_RHS"), Ez.PARALLAXOCCLUSION && Hz.addFallback(Oz++, "PARALLAXOCCLUSION"), Ez.ENVIRONMENTBRDF && Hz.addFallback(Oz++, "ENVIRONMENTBRDF"), Ez.TANGENT && Hz.addFallback(Oz++, "TANGENT"), Oz = (0, Yz.C)(Ez, Hz, this._maxSimultaneousLights, Oz), Ez.SPECULARTERM && Hz.addFallback(Oz++, "SPECULARTERM"), Ez.USESPHERICALFROMREFLECTIONMAP && Hz.addFallback(Oz++, "USESPHERICALFROMREFLECTIONMAP"), Ez.USEIRRADIANCEMAP && Hz.addFallback(Oz++, "USEIRRADIANCEMAP"), Ez.NORMAL && Hz.addFallback(Oz++, "NORMAL"), Ez.VERTEXCOLOR && Hz.addFallback(Oz++, "VERTEXCOLOR"), Ez.MORPHTARGETS && Hz.addFallback(Oz++, "MORPHTARGETS"), Ez.MULTIVIEW && Hz.addFallback(0, "MULTIVIEW");
            const pz = [cz.j.PositionKind];
            Ez.NORMAL && pz.push(cz.j.NormalKind), Ez.TANGENT && pz.push(cz.j.TangentKind);
            for (let zz = 1; zz <= 6; ++zz) Ez["UV" + zz] && pz.push(`uv${1===zz?"":zz}`);
            Ez.VERTEXCOLOR && pz.push(cz.j.ColorKind), (0, Yz.I)(pz, uz, Ez, Hz), (0, Yz.M)(pz, Ez), (0, Yz.P)(pz, uz, Ez), (0, Yz.G)(pz, uz, Ez);
            let dz = "openpbr";
            const Fz = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const zz in this._uniformsList) Fz.push(zz);
            const Zz = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Ez.FUZZENVIRONMENTBRDF && Zz.push("environmentFuzzBrdfSampler"), Ez.REFRACTED_BACKGROUND && Zz.push("backgroundRefractionSampler"), (Ez.ANISOTROPIC || Ez.FUZZ || Ez.REFRACTED_BACKGROUND || Ez.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Zz.push("blueNoiseSampler"), Ez.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (Zz.push("sceneIrradianceSampler"), Zz.push("sceneDepthSampler"));
            for (const zz in this._samplersList) {
              const uz = this._samplersList[zz];
              Zz.push(uz.samplerName), Fz.push(uz.samplerInfoName), Fz.push(uz.samplerMatrixName)
            }(0, Yz.sb)(Fz, Zz, !0);
            const Rz = ["Material", "Scene", "Mesh"],
              Kz = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Ez.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = Hz, this._eventInfo.fallbackRank = Oz, this._eventInfo.defines = Ez, this._eventInfo.uniforms = Fz, this._eventInfo.attributes = pz, this._eventInfo.samplers = Zz, this._eventInfo.uniformBuffersNames = Rz, this._eventInfo.customCode = void 0, this._eventInfo.mesh = uz, this._eventInfo.indexParameters = Kz, this._callbackPluginEventGeneric(128, this._eventInfo), Fu.d.AddUniformsAndSamplers(Fz, Zz), Qz.e.AddUniforms(Fz), Qz.e.AddSamplers(Zz), (0, Ou.c)(Fz), this._useVertexPulling) {
              const zz = bz?.geometry;
              zz && (this._vertexPullingMetadata = (0, pu.e)(zz), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((zz, uz) => {
                Fz.push(`vp_${uz}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            jz.c && (jz.c.PrepareUniforms(Fz, Ez), jz.c.PrepareSamplers(Zz, Ez)), (0, Yz.ub)({
              uniformsNames: Fz,
              uniformBuffersNames: Rz,
              samplers: Zz,
              defines: Ez,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const wz = {};
            this.customShaderNameResolve && (dz = this.customShaderNameResolve(dz, Fz, Rz, Zz, Ez, pz, wz));
            const Xz = Ez.toString(),
              fz = tz.createEffect(dz, {
                attributes: pz,
                uniformsNames: Fz,
                uniformBuffersNames: Rz,
                samplers: Zz,
                defines: Xz,
                fallbacks: Hz,
                onCompiled: nz,
                onError: iz,
                indexParameters: Kz,
                processFinalCode: wz.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Ez.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: zz._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, tz);
            return this._eventInfo.customCode = void 0, fz
          }
          _prepareDefines(uz, bz, Ez) {
            let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              lz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Mz = bz.hasThinInstances,
              tz = this.XT(),
              Hz = tz.uR();
            (0, Yz.$)(tz, uz, Ez, !0, this._maxSimultaneousLights, this._disableLighting), Ez._needNormals = !0, (0, Yz.ib)(tz, Ez);
            const Oz = this.needAlphaBlendingForMesh(uz) && this.XT().useOrderIndependentTransparency;
            if ((0, Yz.mb)(tz, Ez, this.canRenderToMRT && !Oz), (0, Yz.kb)(tz, Ez, Oz), Fu.d.PrepareDefines(Hz.currentRenderPassId, uz, Ez), Ez._areTexturesDirty) {
              Ez._needUVs = !1;
              for (let zz = 1; zz <= 6; ++zz) Ez["MAINUV" + zz] = !1;
              if (tz.texturesEnabled) {
                for (const bz in this._samplersList) {
                  const zz = this._samplersList[bz];
                  zz.value ? ((0, Yz.db)(zz.value, Ez, zz.textureDefine), Ez[zz.textureDefine + "_GAMMA"] = zz.value.gammaSpace) : Ez[zz.textureDefine] = !1
                }
                const zz = this._getRadianceTexture(),
                  uz = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Hz.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, Yz.Z)(tz, zz, Ez, this.realTimeFiltering, this.realTimeFilteringQuality, !uz), this._baseMetalnessTexture && (Ez.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Ez.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Ez.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Ez.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Ez.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Ez.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Ez.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Ez.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Ez.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Ez.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Ez.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Ez.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && Bz.d.DiffuseTextureEnabled ? (Ez.PARALLAX = !0, Ez.PARALLAX_RHS = tz.useRightHandedSystem, Ez.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Ez.PARALLAX = !1, Ez.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Ez.PARALLAX = !1, Ez.PARALLAX_RHS = !1, Ez.PARALLAXOCCLUSION = !1, Ez.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Bz.d.ReflectionTextureEnabled ? (Ez.ENVIRONMENTBRDF = !0, Ez.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Ez.ENVIRONMENTBRDF = !1, Ez.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Ez.FUZZENVIRONMENTBRDF = !0 : Ez.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Ez.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && Bz.d.RefractionTextureEnabled, Ez.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Ez.REFRACTED_LIGHTS = !0;
                  const zz = this._getRadianceTexture();
                  zz ? (Ez.REFRACTED_ENVIRONMENT = Bz.d.RefractionTextureEnabled, Ez.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.XT().useRightHandedSystem ? !zz.invertZ : zz.invertZ, Ez.REFRACTED_ENVIRONMENT_LOCAL_CUBE = zz.isCube && zz.boundingBoxSize) : Ez.REFRACTED_ENVIRONMENT = !1
                } else Ez.REFRACTED_BACKGROUND = !1, Ez.REFRACTED_LIGHTS = !1, Ez.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Ez.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Ez.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === iz.c.LIGHTFALLOFF_STANDARD ? (Ez.USEPHYSICALLIGHTFALLOFF = !1, Ez.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === iz.c.LIGHTFALLOFF_GLTF ? (Ez.USEPHYSICALLIGHTFALLOFF = !1, Ez.USEGLTFLIGHTFALLOFF = !0) : (Ez.USEPHYSICALLIGHTFALLOFF = !0, Ez.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Ez.TWOSIDEDLIGHTING = !0 : Ez.TWOSIDEDLIGHTING = !1, Ez.MIRRORED = !!tz._mirroredCameraPosition, Ez.SPECULARAA = Hz.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Ez._areTexturesDirty || Ez._areMiscDirty) && (Ez.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Ez.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Ez.ALPHABLEND = this.needAlphaBlendingForMesh(uz)), Ez._areTexturesDirty && (Ez.TEXTURE_REPETITION_MODE = Hz.version > 1 || Hz.isWebGPU ? this.textureRepetitionMode : 0), Ez._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Ez), Ez.FORCENORMALFORWARD = this._forceNormalForward, Ez.RADIANCEOCCLUSION = this._useRadianceOcclusion, Ez.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && zz._noiseTextures[tz.uniqueId] && Bz.d.ReflectionTextureEnabled ? (Ez.ANISOTROPIC = !0, uz.isVerticesDataPresent(cz.j.TangentKind) || (Ez._needUVs = !0, Ez.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Ez.USE_GLTF_STYLE_ANISOTROPY = !0), Ez.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Ez.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Ez.ANISOTROPIC = !1, Ez.USE_GLTF_STYLE_ANISOTROPY = !1, Ez.ANISOTROPIC_BASE = !1, Ez.ANISOTROPIC_COAT = !1), Ez.THIN_FILM = this.thinFilmWeight > 0, Ez.IRIDESCENCE = this.thinFilmWeight > 0, Ez.DISPERSION = this.transmissionDispersionScale > 0, Ez.SCATTERING = this.hasScattering;
            if (Ez.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Ez.TRANSMISSION_SLAB = this.transmissionWeight > 0, Ez.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Ez.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Ez.PREPASS && (Ez.SUBSURFACE_SLAB || Ez.TRANSMISSION_SLAB_VOLUME)) {
              let zz = !1;
              if (!this.sssIrradianceTexture && tz.geometryBufferRenderer) {
                const uz = tz.geometryBufferRenderer.getTextureIndex(gu.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = tz.geometryBufferRenderer.getGBuffer().textures[uz], zz = !0
              }
              if (!this.sssDepthTexture && tz.geometryBufferRenderer) {
                const uz = tz.geometryBufferRenderer.getTextureIndex(gu.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = tz.geometryBufferRenderer.getGBuffer().textures[uz], zz = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Ez.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, zz && (Ez.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Ez.FUZZ = this.fuzzWeight > 0 && Bz.d.ReflectionTextureEnabled, Ez.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Ez.FUZZ ? (uz.isVerticesDataPresent(cz.j.TangentKind) || (Ez._needUVs = !0, Ez.MAINUV1 = !0), this._environmentFuzzBRDFTexture = mz(this.XT()), Ez.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Ez.FUZZENVIRONMENTBRDF = !1, Ez.FUZZ_IBL_SAMPLES = 0), Ez._areMiscDirty && ((0, Yz.hb)(uz, tz, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(uz), Ez, this._applyDecalMapAfterDetailMap, this._useVertexPulling, bz, this._isVertexOutputInvariant), Ez.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !uz.isVerticesDataPresent(cz.j.NormalKind), Ez.DEBUGMODE = this._debugMode), (0, Yz.W)(tz, Hz, this, Ez, !!nz, lz, Mz), this._eventInfo.defines = Ez, this._eventInfo.mesh = uz, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Yz.T)(uz, Ez, !0, !0, !0, this._transparencyMode !== iz.c.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, uz = new WeakMap, Ez = new WeakMap, nz = new WeakMap, lz = new WeakMap, Mz = new WeakMap, tz = new WeakMap, Hz = new WeakMap, Oz = new WeakMap, pz = new WeakMap, dz = new WeakMap, Fz = new WeakMap, Zz = new WeakMap, Rz = new WeakMap, Kz = new WeakMap, wz = new WeakMap, Xz = new WeakMap, fz = new WeakMap, sz = new WeakMap, rz = new WeakMap, oz = new WeakMap, Nz = new WeakMap, vz = new WeakMap, Pz = new WeakMap, Gz = new WeakMap, az = new WeakMap, Vz = new WeakMap, hz = new WeakMap, gz = new WeakMap, Sz = new WeakMap, yz = new WeakMap, Dz = new WeakMap, ez = new WeakMap, Iz = new WeakMap, kz = new WeakMap, zu = new WeakMap, uu = new WeakMap, bu = new WeakMap, Eu = new WeakMap, nu = new WeakMap, iu = new WeakMap, lu = new WeakMap, Mu = new WeakMap, tu = new WeakMap, Hu = new WeakMap, Zu = new WeakMap, Ru = new WeakMap, Ku = new WeakMap, wu = new WeakMap, Xu = new WeakMap, fu = new WeakMap, su = new WeakMap, ru = new WeakMap, ou = new WeakMap, xu = new WeakMap, Ju = new WeakMap, Au = new WeakMap, Tu = new WeakMap, Lu = new WeakMap, Pu = new WeakMap, Gu = new WeakMap, au = new WeakMap, Vu = new WeakMap, mu = new WeakMap, qu = new WeakMap, hu = new WeakMap, Uu = new WeakMap, cu = new WeakMap, Su = new WeakMap, Du = new WeakMap, ju = new WeakMap, Iu = new WeakMap, Yu = new WeakMap, ku = new WeakMap, zb = new WeakMap, ub = new WeakMap, bb = new WeakMap, Eb = new WeakMap, nb = new WeakMap, ib = new WeakMap, lb = new WeakMap, Mb = new WeakMap, tb = new WeakMap, Hb = new WeakMap, Ob = new WeakMap, pb = new WeakMap, db = new WeakMap, Fb = new WeakMap, Zb = new WeakMap, Rb = new WeakMap, Kb = new WeakMap, wb = new WeakMap, Xb = new WeakMap, fb = new WeakMap, sb = new WeakMap, rb = new WeakMap, ob = new WeakMap, Nb = new WeakMap, vb = new WeakMap, xb = new WeakMap, Jb = new WeakMap, Ab = new WeakMap, Tb = new WeakMap, (() => {
          const uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Vn[Symbol.metadata] ?? null) : void 0;
          Lb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], Pb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], Gb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], ab = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], Vb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], mb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], qb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], hb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], Ub = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], cb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], gb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], Sb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], yb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], Db = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], Qb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], Wb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], eb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], jb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], Ib = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], Bb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], Cb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], Yb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], kb = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], zE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], uE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], bE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], EE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], nE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], iE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], lE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], ME = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], tE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], HE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], OE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], pE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], dE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], FE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], ZE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], RE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], KE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], wE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], XE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], fE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], sE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], rE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], oE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], NE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], vE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], xE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], JE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], AE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], TE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], LE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], PE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], GE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], aE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], VE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], mE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], qE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], hE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], UE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], cE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], gE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], SE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], yE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], DE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], QE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], WE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], eE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], jE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], IE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], BE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], CE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], YE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], kE = [(0, Jz.e)("_markAllSubMeshesAsTexturesDirty")], zn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], un = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], bn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], En = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], nn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Mn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], tn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Hn = [(0, Jz.G)()], On = [(0, Jz.G)()], pn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], dn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Fn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Zn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Rn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsLightsDirty")], Kn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], wn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsLightsDirty")], Xn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], fn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], sn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], rn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Nn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], vn = [(0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], xn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Jn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], An = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Tn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Ln = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], Pn = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], Gn = [(0, Jz.i)("_markAllSubMeshesAsMiscDirty")], an = [(0, Jz.G)()], (0, xz.h)(zz, null, Lb, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseWeight" in zz,
              get: zz => zz.baseWeight,
              set: (zz, uz) => {
                zz.baseWeight = uz
              }
            },
            metadata: uz
          }, qn, hn), (0, xz.h)(zz, null, Pb, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseWeightTexture" in zz,
              get: zz => zz.baseWeightTexture,
              set: (zz, uz) => {
                zz.baseWeightTexture = uz
              }
            },
            metadata: uz
          }, Un, cn), (0, xz.h)(zz, null, Gb, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseColor" in zz,
              get: zz => zz.baseColor,
              set: (zz, uz) => {
                zz.baseColor = uz
              }
            },
            metadata: uz
          }, gn, Sn), (0, xz.h)(zz, null, ab, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseColorTexture" in zz,
              get: zz => zz.baseColorTexture,
              set: (zz, uz) => {
                zz.baseColorTexture = uz
              }
            },
            metadata: uz
          }, yn, Dn), (0, xz.h)(zz, null, Vb, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseDiffuseRoughness" in zz,
              get: zz => zz.baseDiffuseRoughness,
              set: (zz, uz) => {
                zz.baseDiffuseRoughness = uz
              }
            },
            metadata: uz
          }, Qn, Wn), (0, xz.h)(zz, null, mb, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseDiffuseRoughnessTexture" in zz,
              get: zz => zz.baseDiffuseRoughnessTexture,
              set: (zz, uz) => {
                zz.baseDiffuseRoughnessTexture = uz
              }
            },
            metadata: uz
          }, en, jn), (0, xz.h)(zz, null, qb, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseMetalness" in zz,
              get: zz => zz.baseMetalness,
              set: (zz, uz) => {
                zz.baseMetalness = uz
              }
            },
            metadata: uz
          }, In, Bn), (0, xz.h)(zz, null, hb, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "baseMetalnessTexture" in zz,
              get: zz => zz.baseMetalnessTexture,
              set: (zz, uz) => {
                zz.baseMetalnessTexture = uz
              }
            },
            metadata: uz
          }, Cn, Yn), (0, xz.h)(zz, null, Ub, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularWeight" in zz,
              get: zz => zz.specularWeight,
              set: (zz, uz) => {
                zz.specularWeight = uz
              }
            },
            metadata: uz
          }, kn, zi), (0, xz.h)(zz, null, cb, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularWeightTexture" in zz,
              get: zz => zz.specularWeightTexture,
              set: (zz, uz) => {
                zz.specularWeightTexture = uz
              }
            },
            metadata: uz
          }, ui, bi), (0, xz.h)(zz, null, gb, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularColor" in zz,
              get: zz => zz.specularColor,
              set: (zz, uz) => {
                zz.specularColor = uz
              }
            },
            metadata: uz
          }, Ei, ni), (0, xz.h)(zz, null, Sb, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularColorTexture" in zz,
              get: zz => zz.specularColorTexture,
              set: (zz, uz) => {
                zz.specularColorTexture = uz
              }
            },
            metadata: uz
          }, ii, li), (0, xz.h)(zz, null, yb, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularRoughness" in zz,
              get: zz => zz.specularRoughness,
              set: (zz, uz) => {
                zz.specularRoughness = uz
              }
            },
            metadata: uz
          }, Mi, ti), (0, xz.h)(zz, null, Db, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularRoughnessTexture" in zz,
              get: zz => zz.specularRoughnessTexture,
              set: (zz, uz) => {
                zz.specularRoughnessTexture = uz
              }
            },
            metadata: uz
          }, Hi, Oi), (0, xz.h)(zz, null, Qb, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularRoughnessAnisotropy" in zz,
              get: zz => zz.specularRoughnessAnisotropy,
              set: (zz, uz) => {
                zz.specularRoughnessAnisotropy = uz
              }
            },
            metadata: uz
          }, di, Fi), (0, xz.h)(zz, null, Wb, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularRoughnessAnisotropyTexture" in zz,
              get: zz => zz.specularRoughnessAnisotropyTexture,
              set: (zz, uz) => {
                zz.specularRoughnessAnisotropyTexture = uz
              }
            },
            metadata: uz
          }, Zi, Ri), (0, xz.h)(zz, null, eb, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularIor" in zz,
              get: zz => zz.specularIor,
              set: (zz, uz) => {
                zz.specularIor = uz
              }
            },
            metadata: uz
          }, Ki, wi), (0, xz.h)(zz, null, jb, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionWeight" in zz,
              get: zz => zz.transmissionWeight,
              set: (zz, uz) => {
                zz.transmissionWeight = uz
              }
            },
            metadata: uz
          }, Xi, fi), (0, xz.h)(zz, null, Ib, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionWeightTexture" in zz,
              get: zz => zz.transmissionWeightTexture,
              set: (zz, uz) => {
                zz.transmissionWeightTexture = uz
              }
            },
            metadata: uz
          }, si, ri), (0, xz.h)(zz, null, Bb, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionColor" in zz,
              get: zz => zz.transmissionColor,
              set: (zz, uz) => {
                zz.transmissionColor = uz
              }
            },
            metadata: uz
          }, oi, Ni), (0, xz.h)(zz, null, Cb, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionColorTexture" in zz,
              get: zz => zz.transmissionColorTexture,
              set: (zz, uz) => {
                zz.transmissionColorTexture = uz
              }
            },
            metadata: uz
          }, vi, xi), (0, xz.h)(zz, null, Yb, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionDepth" in zz,
              get: zz => zz.transmissionDepth,
              set: (zz, uz) => {
                zz.transmissionDepth = uz
              }
            },
            metadata: uz
          }, Ji, Ai), (0, xz.h)(zz, null, kb, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionDepthTexture" in zz,
              get: zz => zz.transmissionDepthTexture,
              set: (zz, uz) => {
                zz.transmissionDepthTexture = uz
              }
            },
            metadata: uz
          }, Ti, Li), (0, xz.h)(zz, null, zE, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionScatter" in zz,
              get: zz => zz.transmissionScatter,
              set: (zz, uz) => {
                zz.transmissionScatter = uz
              }
            },
            metadata: uz
          }, Pi, Gi), (0, xz.h)(zz, null, uE, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionScatterTexture" in zz,
              get: zz => zz.transmissionScatterTexture,
              set: (zz, uz) => {
                zz.transmissionScatterTexture = uz
              }
            },
            metadata: uz
          }, ai, Vi), (0, xz.h)(zz, null, bE, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionScatterAnisotropy" in zz,
              get: zz => zz.transmissionScatterAnisotropy,
              set: (zz, uz) => {
                zz.transmissionScatterAnisotropy = uz
              }
            },
            metadata: uz
          }, mi, qi), (0, xz.h)(zz, null, EE, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionDispersionScale" in zz,
              get: zz => zz.transmissionDispersionScale,
              set: (zz, uz) => {
                zz.transmissionDispersionScale = uz
              }
            },
            metadata: uz
          }, Ui, ci), (0, xz.h)(zz, null, nE, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionDispersionScaleTexture" in zz,
              get: zz => zz.transmissionDispersionScaleTexture,
              set: (zz, uz) => {
                zz.transmissionDispersionScaleTexture = uz
              }
            },
            metadata: uz
          }, gi, Si), (0, xz.h)(zz, null, iE, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: zz => "transmissionDispersionAbbeNumber" in zz,
              get: zz => zz.transmissionDispersionAbbeNumber,
              set: (zz, uz) => {
                zz.transmissionDispersionAbbeNumber = uz
              }
            },
            metadata: uz
          }, yi, Di), (0, xz.h)(zz, null, lE, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceWeight" in zz,
              get: zz => zz.subsurfaceWeight,
              set: (zz, uz) => {
                zz.subsurfaceWeight = uz
              }
            },
            metadata: uz
          }, Qi, Wi), (0, xz.h)(zz, null, ME, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceWeightTexture" in zz,
              get: zz => zz.subsurfaceWeightTexture,
              set: (zz, uz) => {
                zz.subsurfaceWeightTexture = uz
              }
            },
            metadata: uz
          }, ei, ji), (0, xz.h)(zz, null, tE, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceColor" in zz,
              get: zz => zz.subsurfaceColor,
              set: (zz, uz) => {
                zz.subsurfaceColor = uz
              }
            },
            metadata: uz
          }, Ii, Bi), (0, xz.h)(zz, null, HE, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceColorTexture" in zz,
              get: zz => zz.subsurfaceColorTexture,
              set: (zz, uz) => {
                zz.subsurfaceColorTexture = uz
              }
            },
            metadata: uz
          }, Ci, Yi), (0, xz.h)(zz, null, OE, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceRadius" in zz,
              get: zz => zz.subsurfaceRadius,
              set: (zz, uz) => {
                zz.subsurfaceRadius = uz
              }
            },
            metadata: uz
          }, ki, zl), (0, xz.h)(zz, null, pE, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceRadiusScale" in zz,
              get: zz => zz.subsurfaceRadiusScale,
              set: (zz, uz) => {
                zz.subsurfaceRadiusScale = uz
              }
            },
            metadata: uz
          }, ul, bl), (0, xz.h)(zz, null, dE, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceRadiusScaleTexture" in zz,
              get: zz => zz.subsurfaceRadiusScaleTexture,
              set: (zz, uz) => {
                zz.subsurfaceRadiusScaleTexture = uz
              }
            },
            metadata: uz
          }, El, nl), (0, xz.h)(zz, null, FE, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: zz => "subsurfaceScatterAnisotropy" in zz,
              get: zz => zz.subsurfaceScatterAnisotropy,
              set: (zz, uz) => {
                zz.subsurfaceScatterAnisotropy = uz
              }
            },
            metadata: uz
          }, il, ll), (0, xz.h)(zz, null, ZE, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatWeight" in zz,
              get: zz => zz.coatWeight,
              set: (zz, uz) => {
                zz.coatWeight = uz
              }
            },
            metadata: uz
          }, Ml, tl), (0, xz.h)(zz, null, RE, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatWeightTexture" in zz,
              get: zz => zz.coatWeightTexture,
              set: (zz, uz) => {
                zz.coatWeightTexture = uz
              }
            },
            metadata: uz
          }, Hl, Ol), (0, xz.h)(zz, null, KE, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatColor" in zz,
              get: zz => zz.coatColor,
              set: (zz, uz) => {
                zz.coatColor = uz
              }
            },
            metadata: uz
          }, pl, dl), (0, xz.h)(zz, null, wE, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatColorTexture" in zz,
              get: zz => zz.coatColorTexture,
              set: (zz, uz) => {
                zz.coatColorTexture = uz
              }
            },
            metadata: uz
          }, Fl, Zl), (0, xz.h)(zz, null, XE, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatRoughness" in zz,
              get: zz => zz.coatRoughness,
              set: (zz, uz) => {
                zz.coatRoughness = uz
              }
            },
            metadata: uz
          }, Rl, Kl), (0, xz.h)(zz, null, fE, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatRoughnessTexture" in zz,
              get: zz => zz.coatRoughnessTexture,
              set: (zz, uz) => {
                zz.coatRoughnessTexture = uz
              }
            },
            metadata: uz
          }, wl, Xl), (0, xz.h)(zz, null, sE, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatRoughnessAnisotropy" in zz,
              get: zz => zz.coatRoughnessAnisotropy,
              set: (zz, uz) => {
                zz.coatRoughnessAnisotropy = uz
              }
            },
            metadata: uz
          }, fl, sl), (0, xz.h)(zz, null, rE, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatRoughnessAnisotropyTexture" in zz,
              get: zz => zz.coatRoughnessAnisotropyTexture,
              set: (zz, uz) => {
                zz.coatRoughnessAnisotropyTexture = uz
              }
            },
            metadata: uz
          }, rl, ol), (0, xz.h)(zz, null, oE, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatIor" in zz,
              get: zz => zz.coatIor,
              set: (zz, uz) => {
                zz.coatIor = uz
              }
            },
            metadata: uz
          }, Nl, vl), (0, xz.h)(zz, null, NE, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatDarkening" in zz,
              get: zz => zz.coatDarkening,
              set: (zz, uz) => {
                zz.coatDarkening = uz
              }
            },
            metadata: uz
          }, xl, Jl), (0, xz.h)(zz, null, vE, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "coatDarkeningTexture" in zz,
              get: zz => zz.coatDarkeningTexture,
              set: (zz, uz) => {
                zz.coatDarkeningTexture = uz
              }
            },
            metadata: uz
          }, Al, Tl), (0, xz.h)(zz, null, xE, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "fuzzWeight" in zz,
              get: zz => zz.fuzzWeight,
              set: (zz, uz) => {
                zz.fuzzWeight = uz
              }
            },
            metadata: uz
          }, Ll, Pl), (0, xz.h)(zz, null, JE, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "fuzzWeightTexture" in zz,
              get: zz => zz.fuzzWeightTexture,
              set: (zz, uz) => {
                zz.fuzzWeightTexture = uz
              }
            },
            metadata: uz
          }, Gl, al), (0, xz.h)(zz, null, AE, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "fuzzColor" in zz,
              get: zz => zz.fuzzColor,
              set: (zz, uz) => {
                zz.fuzzColor = uz
              }
            },
            metadata: uz
          }, Vl, ml), (0, xz.h)(zz, null, TE, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "fuzzColorTexture" in zz,
              get: zz => zz.fuzzColorTexture,
              set: (zz, uz) => {
                zz.fuzzColorTexture = uz
              }
            },
            metadata: uz
          }, ql, hl), (0, xz.h)(zz, null, LE, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: zz => "fuzzRoughness" in zz,
              get: zz => zz.fuzzRoughness,
              set: (zz, uz) => {
                zz.fuzzRoughness = uz
              }
            },
            metadata: uz
          }, Ul, cl), (0, xz.h)(zz, null, PE, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "fuzzRoughnessTexture" in zz,
              get: zz => zz.fuzzRoughnessTexture,
              set: (zz, uz) => {
                zz.fuzzRoughnessTexture = uz
              }
            },
            metadata: uz
          }, gl, Sl), (0, xz.h)(zz, null, GE, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryThinWalled" in zz,
              get: zz => zz.geometryThinWalled,
              set: (zz, uz) => {
                zz.geometryThinWalled = uz
              }
            },
            metadata: uz
          }, yl, Dl), (0, xz.h)(zz, null, aE, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryNormalTexture" in zz,
              get: zz => zz.geometryNormalTexture,
              set: (zz, uz) => {
                zz.geometryNormalTexture = uz
              }
            },
            metadata: uz
          }, Ql, Wl), (0, xz.h)(zz, null, VE, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryTangent" in zz,
              get: zz => zz.geometryTangent,
              set: (zz, uz) => {
                zz.geometryTangent = uz
              }
            },
            metadata: uz
          }, el, jl), (0, xz.h)(zz, null, mE, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryTangentTexture" in zz,
              get: zz => zz.geometryTangentTexture,
              set: (zz, uz) => {
                zz.geometryTangentTexture = uz
              }
            },
            metadata: uz
          }, Il, Bl), (0, xz.h)(zz, null, qE, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryCoatNormalTexture" in zz,
              get: zz => zz.geometryCoatNormalTexture,
              set: (zz, uz) => {
                zz.geometryCoatNormalTexture = uz
              }
            },
            metadata: uz
          }, Cl, Yl), (0, xz.h)(zz, null, hE, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryCoatTangent" in zz,
              get: zz => zz.geometryCoatTangent,
              set: (zz, uz) => {
                zz.geometryCoatTangent = uz
              }
            },
            metadata: uz
          }, kl, zM), (0, xz.h)(zz, null, UE, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryCoatTangentTexture" in zz,
              get: zz => zz.geometryCoatTangentTexture,
              set: (zz, uz) => {
                zz.geometryCoatTangentTexture = uz
              }
            },
            metadata: uz
          }, uM, bM), (0, xz.h)(zz, null, cE, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryOpacity" in zz,
              get: zz => zz.geometryOpacity,
              set: (zz, uz) => {
                zz.geometryOpacity = uz
              }
            },
            metadata: uz
          }, EM, nM), (0, xz.h)(zz, null, gE, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryOpacityTexture" in zz,
              get: zz => zz.geometryOpacityTexture,
              set: (zz, uz) => {
                zz.geometryOpacityTexture = uz
              }
            },
            metadata: uz
          }, iM, lM), (0, xz.h)(zz, null, SE, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryThickness" in zz,
              get: zz => zz.geometryThickness,
              set: (zz, uz) => {
                zz.geometryThickness = uz
              }
            },
            metadata: uz
          }, MM, tM), (0, xz.h)(zz, null, yE, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "geometryThicknessTexture" in zz,
              get: zz => zz.geometryThicknessTexture,
              set: (zz, uz) => {
                zz.geometryThicknessTexture = uz
              }
            },
            metadata: uz
          }, HM, OM), (0, xz.h)(zz, null, DE, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: zz => "emissionLuminance" in zz,
              get: zz => zz.emissionLuminance,
              set: (zz, uz) => {
                zz.emissionLuminance = uz
              }
            },
            metadata: uz
          }, pM, dM), (0, xz.h)(zz, null, QE, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "emissionColor" in zz,
              get: zz => zz.emissionColor,
              set: (zz, uz) => {
                zz.emissionColor = uz
              }
            },
            metadata: uz
          }, FM, ZM), (0, xz.h)(zz, null, WE, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "emissionColorTexture" in zz,
              get: zz => zz.emissionColorTexture,
              set: (zz, uz) => {
                zz.emissionColorTexture = uz
              }
            },
            metadata: uz
          }, RM, KM), (0, xz.h)(zz, null, eE, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: zz => "thinFilmWeight" in zz,
              get: zz => zz.thinFilmWeight,
              set: (zz, uz) => {
                zz.thinFilmWeight = uz
              }
            },
            metadata: uz
          }, wM, XM), (0, xz.h)(zz, null, jE, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "thinFilmWeightTexture" in zz,
              get: zz => zz.thinFilmWeightTexture,
              set: (zz, uz) => {
                zz.thinFilmWeightTexture = uz
              }
            },
            metadata: uz
          }, fM, sM), (0, xz.h)(zz, null, IE, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: zz => "thinFilmThickness" in zz,
              get: zz => zz.thinFilmThickness,
              set: (zz, uz) => {
                zz.thinFilmThickness = uz
              }
            },
            metadata: uz
          }, rM, oM), (0, xz.h)(zz, null, BE, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: zz => "thinFilmThicknessMin" in zz,
              get: zz => zz.thinFilmThicknessMin,
              set: (zz, uz) => {
                zz.thinFilmThicknessMin = uz
              }
            },
            metadata: uz
          }, NM, vM), (0, xz.h)(zz, null, CE, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "thinFilmThicknessTexture" in zz,
              get: zz => zz.thinFilmThicknessTexture,
              set: (zz, uz) => {
                zz.thinFilmThicknessTexture = uz
              }
            },
            metadata: uz
          }, xM, JM), (0, xz.h)(zz, null, YE, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: zz => "thinFilmIor" in zz,
              get: zz => zz.thinFilmIor,
              set: (zz, uz) => {
                zz.thinFilmIor = uz
              }
            },
            metadata: uz
          }, AM, TM), (0, xz.h)(zz, null, kE, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "ambientOcclusionTexture" in zz,
              get: zz => zz.ambientOcclusionTexture,
              set: (zz, uz) => {
                zz.ambientOcclusionTexture = uz
              }
            },
            metadata: uz
          }, LM, PM), (0, xz.h)(zz, null, zn, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: zz => "directIntensity" in zz,
              get: zz => zz.directIntensity,
              set: (zz, uz) => {
                zz.directIntensity = uz
              }
            },
            metadata: uz
          }, GM, aM), (0, xz.h)(zz, null, un, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: zz => "environmentIntensity" in zz,
              get: zz => zz.environmentIntensity,
              set: (zz, uz) => {
                zz.environmentIntensity = uz
              }
            },
            metadata: uz
          }, VM, mM), (0, xz.h)(zz, null, bn, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "useSpecularWeightFromTextureAlpha" in zz,
              get: zz => zz.useSpecularWeightFromTextureAlpha,
              set: (zz, uz) => {
                zz.useSpecularWeightFromTextureAlpha = uz
              }
            },
            metadata: uz
          }, qM, hM), (0, xz.h)(zz, null, En, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: zz => "forceAlphaTest" in zz,
              get: zz => zz.forceAlphaTest,
              set: (zz, uz) => {
                zz.forceAlphaTest = uz
              }
            },
            metadata: uz
          }, UM, cM), (0, xz.h)(zz, null, nn, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: zz => "alphaCutOff" in zz,
              get: zz => zz.alphaCutOff,
              set: (zz, uz) => {
                zz.alphaCutOff = uz
              }
            },
            metadata: uz
          }, gM, SM), (0, xz.h)(zz, null, Mn, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: zz => "useAmbientOcclusionFromMetallicTextureRed" in zz,
              get: zz => zz.useAmbientOcclusionFromMetallicTextureRed,
              set: (zz, uz) => {
                zz.useAmbientOcclusionFromMetallicTextureRed = uz
              }
            },
            metadata: uz
          }, yM, DM), (0, xz.h)(zz, null, tn, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: zz => "useAmbientInGrayScale" in zz,
              get: zz => zz.useAmbientInGrayScale,
              set: (zz, uz) => {
                zz.useAmbientInGrayScale = uz
              }
            },
            metadata: uz
          }, QM, WM), (0, xz.h)(zz, null, Hn, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: zz => "usePhysicalLightFalloff" in zz,
              get: zz => zz.usePhysicalLightFalloff
            },
            metadata: uz
          }, null, mn), (0, xz.h)(zz, null, On, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: zz => "useGLTFLightFalloff" in zz,
              get: zz => zz.useGLTFLightFalloff
            },
            metadata: uz
          }, null, mn), (0, xz.h)(zz, null, pn, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: zz => "useObjectSpaceNormalMap" in zz,
              get: zz => zz.useObjectSpaceNormalMap,
              set: (zz, uz) => {
                zz.useObjectSpaceNormalMap = uz
              }
            },
            metadata: uz
          }, eM, jM), (0, xz.h)(zz, null, dn, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: zz => "useParallax" in zz,
              get: zz => zz.useParallax,
              set: (zz, uz) => {
                zz.useParallax = uz
              }
            },
            metadata: uz
          }, IM, BM), (0, xz.h)(zz, null, Fn, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: zz => "useParallaxOcclusion" in zz,
              get: zz => zz.useParallaxOcclusion,
              set: (zz, uz) => {
                zz.useParallaxOcclusion = uz
              }
            },
            metadata: uz
          }, CM, YM), (0, xz.h)(zz, null, Zn, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: zz => "parallaxScaleBias" in zz,
              get: zz => zz.parallaxScaleBias,
              set: (zz, uz) => {
                zz.parallaxScaleBias = uz
              }
            },
            metadata: uz
          }, kM, zt), (0, xz.h)(zz, null, Rn, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: zz => "disableLighting" in zz,
              get: zz => zz.disableLighting,
              set: (zz, uz) => {
                zz.disableLighting = uz
              }
            },
            metadata: uz
          }, ut, bt), (0, xz.h)(zz, null, Kn, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: zz => "forceIrradianceInFragment" in zz,
              get: zz => zz.forceIrradianceInFragment,
              set: (zz, uz) => {
                zz.forceIrradianceInFragment = uz
              }
            },
            metadata: uz
          }, Et, nt), (0, xz.h)(zz, null, wn, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: zz => "maxSimultaneousLights" in zz,
              get: zz => zz.maxSimultaneousLights,
              set: (zz, uz) => {
                zz.maxSimultaneousLights = uz
              }
            },
            metadata: uz
          }, it, lt), (0, xz.h)(zz, null, Xn, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: zz => "invertNormalMapX" in zz,
              get: zz => zz.invertNormalMapX,
              set: (zz, uz) => {
                zz.invertNormalMapX = uz
              }
            },
            metadata: uz
          }, Mt, tt), (0, xz.h)(zz, null, fn, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: zz => "invertNormalMapY" in zz,
              get: zz => zz.invertNormalMapY,
              set: (zz, uz) => {
                zz.invertNormalMapY = uz
              }
            },
            metadata: uz
          }, Ht, Ot), (0, xz.h)(zz, null, sn, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: zz => "twoSidedLighting" in zz,
              get: zz => zz.twoSidedLighting,
              set: (zz, uz) => {
                zz.twoSidedLighting = uz
              }
            },
            metadata: uz
          }, pt, dt), (0, xz.h)(zz, null, rn, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: zz => "useAlphaFresnel" in zz,
              get: zz => zz.useAlphaFresnel,
              set: (zz, uz) => {
                zz.useAlphaFresnel = uz
              }
            },
            metadata: uz
          }, Ft, Zt), (0, xz.h)(zz, null, Nn, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: zz => "useLinearAlphaFresnel" in zz,
              get: zz => zz.useLinearAlphaFresnel,
              set: (zz, uz) => {
                zz.useLinearAlphaFresnel = uz
              }
            },
            metadata: uz
          }, Rt, Kt), (0, xz.h)(zz, null, vn, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "environmentBRDFTexture" in zz,
              get: zz => zz.environmentBRDFTexture,
              set: (zz, uz) => {
                zz.environmentBRDFTexture = uz
              }
            },
            metadata: uz
          }, wt, Xt), (0, xz.h)(zz, null, xn, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: zz => "forceNormalForward" in zz,
              get: zz => zz.forceNormalForward,
              set: (zz, uz) => {
                zz.forceNormalForward = uz
              }
            },
            metadata: uz
          }, ft, st), (0, xz.h)(zz, null, Jn, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: zz => "enableSpecularAntiAliasing" in zz,
              get: zz => zz.enableSpecularAntiAliasing,
              set: (zz, uz) => {
                zz.enableSpecularAntiAliasing = uz
              }
            },
            metadata: uz
          }, rt, ot), (0, xz.h)(zz, null, An, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: zz => "useHorizonOcclusion" in zz,
              get: zz => zz.useHorizonOcclusion,
              set: (zz, uz) => {
                zz.useHorizonOcclusion = uz
              }
            },
            metadata: uz
          }, Nt, vt), (0, xz.h)(zz, null, Tn, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: zz => "useRadianceOcclusion" in zz,
              get: zz => zz.useRadianceOcclusion,
              set: (zz, uz) => {
                zz.useRadianceOcclusion = uz
              }
            },
            metadata: uz
          }, xt, Jt), (0, xz.h)(zz, null, Ln, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: zz => "unlit" in zz,
              get: zz => zz.unlit,
              set: (zz, uz) => {
                zz.unlit = uz
              }
            },
            metadata: uz
          }, At, Tt), (0, xz.h)(zz, null, Pn, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: zz => "applyDecalMapAfterDetailMap" in zz,
              get: zz => zz.applyDecalMapAfterDetailMap,
              set: (zz, uz) => {
                zz.applyDecalMapAfterDetailMap = uz
              }
            },
            metadata: uz
          }, Lt, Pt), (0, xz.h)(zz, null, Gn, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "debugMode" in zz,
              get: zz => zz.debugMode,
              set: (zz, uz) => {
                zz.debugMode = uz
              }
            },
            metadata: uz
          }, Gt, Vt), (0, xz.h)(zz, null, an, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: zz => "transparencyMode" in zz,
              get: zz => zz.transparencyMode
            },
            metadata: uz
          }, null, mn), uz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uz
          })
        })(), zz.SSS_QUALITY_LOW = 0, zz.SSS_QUALITY_MEDIUM = 1, zz.SSS_QUALITY_HIGH = 2, zz._noiseTextures = {}, zz.ForceGLSL = !1, zz._ShaderLoader = new du.c((() => [Promise.all([bz.e(307), bz.e(373)]).then((() => bz(60897))), Promise.all([bz.e(312), bz.e(308), bz.e(372), bz.e(377)]).then((() => bz(60906)))]), (() => [Promise.all([bz.e(326), bz.e(328), bz.e(376)]).then((() => bz(60949))), Promise.all([bz.e(326), bz.e(329), bz.e(375), bz.e(378)]).then((() => bz(60963)))])), zz
      })(),
      ku = !1;
    ku || (ku = !0, (0, jz.d)(), (0, Su.c)("BABYLON.OpenPBRMaterial", Yu));
    var zb = bz(36547);
    class ub {
      constructor(zz) {
        this.name = Vu.c.NAME_PROCEDURALTEXTURE, this.tK = zz
      }
      register() {
        this.tK._beforeClearStage.registerStep(Vu.c.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.tK.proceduralTexturesEnabled) {
          vu.h.StartPerformanceCounter("Procedural textures", this.tK.proceduralTextures.length > 0);
          for (let zz = 0; zz < this.tK.proceduralTextures.length; zz++) {
            const uz = this.tK.proceduralTextures[zz];
            uz._shouldRender() && uz.render()
          }
          vu.h.EndPerformanceCounter("Procedural textures", this.tK.proceduralTextures.length > 0)
        }
      }
    }
    var bb = bz(39497);
    let Eb = (() => {
      var zz;
      let uz, Ez, nz, lz, Mz, tz = Lz.e,
        Hz = [],
        Oz = [],
        pz = [],
        dz = [],
        Fz = [],
        Zz = [],
        Kz = [],
        wz = [],
        Xz = [];
      return zz = class extends tz {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(zz, uz, bz, Ez) {
          let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            iz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Ez, !iz), this.isEnabled = ((0, xz.j)(this, Hz), (0, xz.j)(this, Oz, !0)), this.autoClear = ((0, xz.j)(this, pz), (0, xz.j)(this, dz, !0)), this.onGenerated = (0, xz.j)(this, Fz), this.onGeneratedObservable = new zb.b, this.onBeforeGenerationObservable = new zb.b, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, xz.j)(this, Zz, void 0), this._drawWrapper = (0, xz.j)(this, Kz), this._textures = {}, this._size = (0, xz.j)(this, wz, void 0), this._textureType = (0, xz.j)(this, Xz), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === nz || nz instanceof Lz.e ? (this._options = {}, this._fallbackTexture = nz) : (this._options = nz, this._fallbackTexture = nz.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let tz = (Ez = this.XT() || Rz.d.LastCreatedScene)._getComponent(Vu.c.NAME_PROCEDURALTEXTURE);
          tz || (tz = new ub(Ez), Ez.Hbz(tz)), this._options.skipSceneRegistration || Ez.proceduralTextures.push(this), this._fullEngine = Ez.uR(), this.name = zz, this.isRenderTarget = !0, this._size = uz, this._textureType = Mz, this._generateMipMaps = iz, this._drawWrapper = new bb.c(this._fullEngine), this.setFragment(bz);
          const fz = this._createRtWrapper(lz, uz, iz, Mz);
          this._texture = fz.texture;
          const sz = [];
          sz.push(1, 1), sz.push(-1, 1), sz.push(-1, -1), sz.push(1, -1), this._vertexBuffers[cz.j.PositionKind] = new cz.j(this._fullEngine, sz, cz.j.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(zz, uz, bz, Ez) {
          return zz ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(uz, {
            generateMipMaps: bz,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Ez,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(uz, {
            generateMipMaps: bz,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Ez,
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
            uz = [];
          uz.push(0), uz.push(1), uz.push(2), uz.push(0), uz.push(2), uz.push(3), this._indexBuffer = zz.createIndexBuffer(uz)
        }
        _rebuild() {
          const zz = this._vertexBuffers[cz.j.PositionKind];
          zz && zz._rebuild(), this._createIndexBuffer(), this.refreshRate === xu.e.REFRESHRATE_RENDER_ONCE && (this.refreshRate = xu.e.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(zz) {
          if (this.isReady()) return void zz(this);
          const uz = this.getEffect();
          uz && uz.executeWhenCompiled((() => {
            zz(this)
          }))
        }
        isReady() {
          const zz = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const uz = this._getDefines();
          if (this._drawWrapper.effect && uz === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Ez = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== uz && (this._cachedDefines = uz, this._drawWrapper.effect = zz.createEffect(Ez, [cz.j.PositionKind], this._uniforms, this._samplers, uz, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([bz.e(381).then((() => bz(61023))), this._options.extraInitializationsAsync()]) : await Promise.all([bz.e(382).then((() => bz(61031))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await bz.e(381).then((() => bz(61023))) : await bz.e(382).then((() => bz(61031)))
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
        resize(zz, uz) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const bz = this._texture.isCube;
          this._rtWrapper.dispose();
          const Ez = this._createRtWrapper(bz, zz, uz, this._textureType);
          this._texture = Ez.texture, this._size = zz, this._generateMipMaps = uz
        }
        _checkUniform(zz) {
          -1 === this._uniforms.indexOf(zz) && this._uniforms.push(zz)
        }
        setTexture(zz, uz) {
          return -1 === this._samplers.indexOf(zz) && this._samplers.push(zz), this._textures[zz] = uz, this
        }
        setFloat(zz, uz) {
          return this._checkUniform(zz), this._floats[zz] = uz, this
        }
        setInt(zz, uz) {
          return this._checkUniform(zz), this._ints[zz] = uz, this
        }
        setFloats(zz, uz) {
          return this._checkUniform(zz), this._floatsArrays[zz] = uz, this
        }
        setColor3(zz, uz) {
          return this._checkUniform(zz), this._colors3[zz] = uz, this
        }
        setColor4(zz, uz) {
          return this._checkUniform(zz), this._colors4[zz] = uz, this
        }
        setVector2(zz, uz) {
          return this._checkUniform(zz), this._vectors2[zz] = uz, this
        }
        setVector3(zz, uz) {
          return this._checkUniform(zz), this._vectors3[zz] = uz, this
        }
        setVector4(zz, uz) {
          return this._checkUniform(zz), this._vectors4[zz] = uz, this
        }
        setMatrix(zz, uz) {
          return this._checkUniform(zz), this._matrices[zz] = uz, this
        }
        render(zz) {
          const uz = this.XT();
          if (!uz) return;
          const bz = this._fullEngine;
          if (bz.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), bz.setState(!1), !this.nodeMaterialSource) {
            for (const zz in this._textures) this._drawWrapper.effect.setTexture(zz, this._textures[zz]);
            for (const zz in this._ints) this._drawWrapper.effect.setInt(zz, this._ints[zz]);
            for (const zz in this._floats) this._drawWrapper.effect.setFloat(zz, this._floats[zz]);
            for (const zz in this._floatsArrays) this._drawWrapper.effect.setArray(zz, this._floatsArrays[zz]);
            for (const zz in this._colors3) this._drawWrapper.effect.setColor3(zz, this._colors3[zz]);
            for (const zz in this._colors4) {
              const uz = this._colors4[zz];
              this._drawWrapper.effect.setFloat4(zz, uz.r, uz.g, uz.b, uz.a)
            }
            for (const zz in this._vectors2) this._drawWrapper.effect.setVector2(zz, this._vectors2[zz]);
            for (const zz in this._vectors3) this._drawWrapper.effect.setVector3(zz, this._vectors3[zz]);
            for (const zz in this._vectors4) this._drawWrapper.effect.setVector4(zz, this._vectors4[zz]);
            for (const zz in this._matrices) this._drawWrapper.effect.setMatrix(zz, this._matrices[zz])
          }
          if (!this._texture || !this._rtWrapper) return;
          bz._enableGPUDebugMarkers && bz._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Ez = bz.currentViewport;
          if (this.isCube)
            for (let nz = 0; nz < 6; nz++) bz.bindFramebuffer(this._rtWrapper, nz, void 0, void 0, !0), bz.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", nz), this.autoClear && bz.clear(uz.clearColor, !0, !1, !1), bz.drawElementsType(iz.c.TriangleFillMode, 0, 6), bz.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let zz = 1;
            this._rtWrapper.is3D ? zz = this._rtWrapper.depth : this._rtWrapper.is2DArray && (zz = this._rtWrapper.layers);
            for (let Ez = 0; Ez < zz; Ez++) {
              if (bz.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Ez), bz.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== zz ? Ez / (zz - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Ez);
                for (const zz in this._textures) this._drawWrapper.effect.setTexture(zz, this._textures[zz])
              }
              this.autoClear && bz.clear(uz.clearColor, !0, !1, !1), bz.drawElementsType(iz.c.TriangleFillMode, 0, 6), bz.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Ez && bz.setViewport(Ez), this.isCube && bz.generateMipMapsForCubemap(this._texture, !0), bz._enableGPUDebugMarkers && bz._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const uz = this.getSize(),
            bz = new zz(this.name, uz.width, this._fragment, this.XT(), this._fallbackTexture, this._generateMipMaps);
          return bz.hasAlpha = this.hasAlpha, bz.level = this.level, bz.coordinatesMode = this.coordinatesMode, bz
        }
        dispose() {
          const zz = this.XT();
          if (!zz) return;
          const uz = zz.proceduralTextures.indexOf(this);
          uz >= 0 && zz.proceduralTextures.splice(uz, 1);
          const bz = this._vertexBuffers[cz.j.PositionKind];
          bz && (bz.dispose(), this._vertexBuffers[cz.j.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const bz = "function" === typeof Symbol && Symbol.metadata ? Object.create(tz[Symbol.metadata] ?? null) : void 0;
        uz = [(0, Jz.G)()], Ez = [(0, Jz.G)()], nz = [(0, Jz.G)()], lz = [(0, Jz.G)()], Mz = [(0, Jz.G)()], (0, xz.h)(zz, null, Mz, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: zz => "refreshRate" in zz,
            get: zz => zz.refreshRate
          },
          metadata: bz
        }, null, Hz), (0, xz.h)(null, null, uz, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isEnabled" in zz,
            get: zz => zz.isEnabled,
            set: (zz, uz) => {
              zz.isEnabled = uz
            }
          },
          metadata: bz
        }, Oz, pz), (0, xz.h)(null, null, Ez, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: zz => "autoClear" in zz,
            get: zz => zz.autoClear,
            set: (zz, uz) => {
              zz.autoClear = uz
            }
          },
          metadata: bz
        }, dz, Fz), (0, xz.h)(null, null, nz, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: zz => "_generateMipMaps" in zz,
            get: zz => zz._generateMipMaps,
            set: (zz, uz) => {
              zz._generateMipMaps = uz
            }
          },
          metadata: bz
        }, Zz, Kz), (0, xz.h)(null, null, lz, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: zz => "_size" in zz,
            get: zz => zz._size,
            set: (zz, uz) => {
              zz._size = uz
            }
          },
          metadata: bz
        }, wz, Xz), bz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bz
        })
      })(), zz
    })();

    function nb(zz) {
      return "texture" in zz
    }

    function ib(zz) {
      return "value" in zz
    }
    async function lb(zz, uz, Ez) {
      const nz = [uz.red, uz.green, uz.blue, uz.alpha],
        iz = [],
        lz = [];
      for (let bz = 0; bz < 4; bz++) {
        const zz = nz[bz];
        if (zz)
          if (nb(zz)) {
            if (zz.sourceChannel < 0 || zz.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let uz = iz.indexOf(zz.texture); - 1 === uz && (uz = iz.length, iz.push(zz.texture)), lz[bz] = uz
          } else {
            if (!ib(zz)) throw new Error("Invalid channel input configuration");
            if (zz.value < 0 || zz.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            lz[bz] = -1
          }
        else lz[bz] = -1
      }
      let Mz = uz.outputSize;
      if (!Mz && iz.length > 0) {
        let zz = 0;
        for (const uz of iz) {
          const bz = uz.getSize(),
            Ez = Math.max(bz.width, bz.height);
          Ez > zz && (zz = Ez, Mz = bz.width === bz.height ? zz : bz)
        }
      }
      Mz = Mz || 512;
      const tz = [],
        Hz = new Set;
      for (let bz = 0; bz < 4; bz++) {
        const zz = nz[bz],
          uz = ["RED", "GREEN", "BLUE", "ALPHA"][bz];
        if (zz && nb(zz)) {
          tz.push(`${uz}_FROM_TEXTURE`);
          const zz = lz[bz];
          Hz.add(zz)
        }
      }
      Hz.forEach((zz => {
        tz.push(`USE_TEXTURE${zz}`)
      }));
      const Oz = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Ez.uR().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Ez.uR().isWebGPU ? await Promise.all([bz.e(379).then((() => bz(61011)))]) : await Promise.all([bz.e(380).then((() => bz(61017)))])
          },
          skipSceneRegistration: !0
        },
        pz = new Eb(zz, Mz, "textureMerger", Ez, Oz);
      pz.refreshRate = -1, pz.defines = tz.length > 0 ? "#define " + tz.join("\n#define ") + "\n" : "";
      for (let bz = 0; bz < iz.length; bz++) dz = iz[bz], (Fz = pz).uOffset = dz.uOffset, Fz.vOffset = dz.vOffset, Fz.uScale = dz.uScale, Fz.vScale = dz.vScale, Fz.uAng = dz.uAng, Fz.vAng = dz.vAng, Fz.wAng = dz.wAng, Fz.uRotationCenter = dz.uRotationCenter, Fz.vRotationCenter = dz.vRotationCenter, pz.setTexture(`inputTexture${bz}`, iz[bz]);
      var dz, Fz;
      for (let bz = 0; bz < 4; bz++) {
        const zz = nz[bz],
          uz = ["red", "green", "blue", "alpha"][bz];
        if (zz && nb(zz)) {
          const Ez = lz[bz];
          pz.setInt(`${uz}TextureIndex`, Ez), pz.setInt(`${uz}SourceChannel`, zz.sourceChannel)
        } else {
          let Ez;
          Ez = zz && ib(zz) ? zz.value : 3 === bz ? 1 : 0, pz.setFloat(`${uz}ConstantValue`, Ez)
        }
      }
      return await new Promise(((zz, uz) => {
        pz.executeWhenReady((() => {
          try {
            pz.render(), zz(pz)
          } catch (bz) {
            uz(bz instanceof Error ? bz : new Error(String(bz)))
          }
        }))
      }))
    }

    function Mb(zz, uz) {
      return {
        texture: zz,
        sourceChannel: uz
      }
    }

    function tb(zz) {
      return {
        value: zz
      }
    }

    function Hb(zz, uz, bz, Ez) {
      return {
        red: zz,
        green: uz,
        blue: bz,
        alpha: Ez
      }
    }
    var Ob = bz(39002),
      pb = bz(39115),
      db = bz(36537),
      Fb = bz(39162),
      Zb = bz(39103);
    class Rb {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class Kb extends Ob.b {
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
        return !!this._options?.enableMultiview || this.PR > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Rb;
        super(null), void 0 === zz.deterministicLockstep && (zz.deterministicLockstep = !1), void 0 !== zz.timeStep && (this._timeStep = zz.timeStep), void 0 === zz.lockstepMaxSteps && (zz.lockstepMaxSteps = 4), this._options = zz, db.b.SetMatrixPrecision(!!zz.useHighPrecisionMatrix), this._caps = {
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
        }, zz.renderingCanvas && (this._renderingCanvas = zz.renderingCanvas), Az.e.Log(`Babylon.js v${Ob.b.Version} - Null engine`);
        const uz = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (uz.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (uz.Blob = function() {})
      }
      createVertexBuffer(zz) {
        const uz = new pb.d;
        return uz.references = 1, uz
      }
      createIndexBuffer(zz) {
        const uz = new pb.d;
        return uz.references = 1, uz
      }
      clear(zz, uz, bz) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(zz, uz, bz) {
        this._cachedViewport = zz
      }
      createUniformBuffer(zz) {
        const uz = new pb.d;
        return uz.references = 1, uz.Bp = zz instanceof Array ? zz.length * Float32Array.BYTES_PER_ELEMENT : zz.byteLength, uz
      }
      createDynamicUniformBuffer(zz) {
        return this.createUniformBuffer(zz)
      }
      updateUniformBuffer(zz, uz, bz, Ez) {}
      bindUniformBufferBase(zz, uz, bz) {}
      bindUniformBlock(zz, uz, bz) {}
      createShaderProgram(zz, uz, bz, Ez, nz) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(zz, uz) {
        return []
      }
      getAttributes(zz, uz) {
        return []
      }
      bindSamplers(zz) {
        this._currentEffect = null
      }
      enableEffect(zz) {
        zz = null !== zz && (0, Zb.c)(zz) ? zz.effect : zz, this._currentEffect = zz, zz && (zz.onBind && zz.onBind(zz), zz._onBindObservable && zz._onBindObservable.notifyObservers(zz))
      }
      setStateCullFaceType(zz, uz) {}
      setState(zz) {}
      setIntArray(zz, uz) {
        return !0
      }
      setIntArray2(zz, uz) {
        return !0
      }
      setIntArray3(zz, uz) {
        return !0
      }
      setIntArray4(zz, uz) {
        return !0
      }
      setFloatArray(zz, uz) {
        return !0
      }
      setFloatArray2(zz, uz) {
        return !0
      }
      setFloatArray3(zz, uz) {
        return !0
      }
      setFloatArray4(zz, uz) {
        return !0
      }
      setArray(zz, uz) {
        return !0
      }
      setArray2(zz, uz) {
        return !0
      }
      setArray3(zz, uz) {
        return !0
      }
      setArray4(zz, uz) {
        return !0
      }
      setMatrices(zz, uz) {
        return !0
      }
      setMatrix3x3(zz, uz) {
        return !0
      }
      setMatrix2x2(zz, uz) {
        return !0
      }
      setFloat(zz, uz) {
        return !0
      }
      setFloat2(zz, uz, bz) {
        return !0
      }
      setFloat3(zz, uz, bz, Ez) {
        return !0
      }
      setBool(zz, uz) {
        return !0
      }
      setFloat4(zz, uz, bz, Ez, nz) {
        return !0
      }
      setAlphaMode(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[bz] !== zz && (this.alphaState.setAlphaBlend(0 !== zz, 0), uz || this.setDepthWrite(0 === zz), this._alphaMode[bz] = zz)
      }
      bindBuffers(zz, uz, bz) {}
      wipeCaches(zz) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, zz && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(zz, uz, bz, Ez) {}
      drawElementsType(zz, uz, bz, Ez) {}
      drawArraysType(zz, uz, bz, Ez) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(zz) {}
      createTexture(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          lz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Mz = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const tz = new Ju.c(this, 1),
          Hz = String(zz);
        return tz.url = Hz, tz.generateMipMaps = !uz, tz.samplingMode = nz, tz.invertY = bz, tz.baseWidth = this._options.textureSize, tz.baseHeight = this._options.textureSize, tz.width = this._options.textureSize, tz.height = this._options.textureSize, Mz && (tz.format = Mz), lz && (tz._buffer = lz), tz.isReady = !0, iz && setTimeout((() => {
          iz(tz)
        })), this._internalTexturesCache.push(tz), tz
      }
      _createHardwareRenderTargetWrapper(zz, uz, bz) {
        const Ez = new Fb.d(zz, uz, bz, this);
        return this._renderTargetWrapperCache.push(Ez), Ez
      }
      createRenderTargetTexture(zz, uz) {
        const bz = this._createHardwareRenderTargetWrapper(!1, !1, zz),
          Ez = {};
        void 0 !== uz && "object" === typeof uz ? (Ez.generateMipMaps = uz.generateMipMaps, Ez.generateDepthBuffer = void 0 === uz.generateDepthBuffer || uz.generateDepthBuffer, Ez.generateStencilBuffer = Ez.generateDepthBuffer && uz.generateStencilBuffer, Ez.type = void 0 === uz.type ? 0 : uz.type, Ez.samplingMode = void 0 === uz.samplingMode ? 3 : uz.samplingMode) : (Ez.generateMipMaps = uz, Ez.generateDepthBuffer = !0, Ez.generateStencilBuffer = !1, Ez.type = 0, Ez.samplingMode = 3);
        const nz = new Ju.c(this, 5);
        bz.setTexture(nz);
        const iz = zz.width || zz,
          lz = zz.height || zz;
        return bz._generateDepthBuffer = Ez.generateDepthBuffer, bz._generateStencilBuffer = !!Ez.generateStencilBuffer, nz.baseWidth = iz, nz.baseHeight = lz, nz.width = iz, nz.height = lz, nz.isReady = !0, nz.samples = 1, nz.generateMipMaps = !!Ez.generateMipMaps, nz.samplingMode = Ez.samplingMode, nz.type = Ez.type, this._internalTexturesCache.push(nz), bz
      }
      createMultiviewRenderTargetTexture(zz, uz) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const bz = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: zz,
            height: uz
          }),
          Ez = new Ju.c(this, 5, !0);
        return Ez.baseWidth = zz, Ez.baseHeight = uz, Ez.width = zz, Ez.height = uz, Ez.isMultiview = !0, Ez.isReady = !0, Ez.format = 5, Ez.samples = 1, bz.setTextures(Ez), bz
      }
      bindMultiviewFramebuffer(zz) {
        this.bindFramebuffer(zz, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(zz, uz) {
        const bz = this._createHardwareRenderTargetWrapper(!1, !0, zz),
          Ez = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...uz
          };
        Ez.generateStencilBuffer = Ez.generateDepthBuffer && Ez.generateStencilBuffer, (1 !== Ez.type || this._caps.textureFloatLinearFiltering) && (2 !== Ez.type || this._caps.textureHalfFloatLinearFiltering) || (Ez.samplingMode = 1), bz._generateDepthBuffer = Ez.generateDepthBuffer, bz._generateStencilBuffer = !!Ez.generateStencilBuffer;
        const nz = new Ju.c(this, 5);
        return nz.baseWidth = zz, nz.baseHeight = zz, nz.width = zz, nz.height = zz, nz.isReady = !0, nz.isCube = !0, nz.samples = 1, nz.generateMipMaps = !!Ez.generateMipMaps, nz.samplingMode = Ez.samplingMode, nz.type = Ez.type, this._internalTexturesCache.push(nz), bz
      }
      updateTextureSamplingMode(zz, uz) {
        uz.samplingMode = zz
      }
      createRawTexture(zz, uz, bz, Ez, nz, iz, lz) {
        let Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          tz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Hz = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Oz = new Ju.c(this, 3);
        return Oz.baseWidth = uz, Oz.baseHeight = bz, Oz.width = uz, Oz.height = bz, Oz.format = Ez, Oz.generateMipMaps = nz, Oz.samplingMode = lz, Oz.invertY = iz, Oz._compression = Mz, Oz.type = tz, Oz._useSRGBBuffer = Hz, this._doNotHandleContextLost || (Oz._bufferView = zz), Oz
      }
      updateRawTexture(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        zz && (zz._bufferView = uz, zz.format = bz, zz.invertY = Ez, zz._compression = nz, zz.type = iz, zz._useSRGBBuffer = lz)
      }
      bindFramebuffer(zz, uz, bz, Ez, nz) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = zz, this._currentFramebuffer = null, this._cachedViewport && !nz && this.setViewport(this._cachedViewport, bz, Ez)
      }
      unBindFramebuffer(zz) {
        let uz = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, uz && uz(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(zz) {
        const uz = new pb.d;
        return uz.references = 1, uz.Bp = 1, uz
      }
      updateDynamicTexture(zz, uz, bz) {}
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
      updateDynamicIndexBuffer(zz, uz) {}
      updateDynamicVertexBuffer(zz, uz, bz, Ez) {}
      _bindTextureDirectly(zz, uz) {
        return this._boundTexturesCache[this._activeChannel] !== uz && (this._boundTexturesCache[this._activeChannel] = uz, !0)
      }
      _bindTexture(zz, uz) {
        zz < 0 || this._bindTextureDirectly(0, uz)
      }
      _deleteBuffer(zz) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(zz) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(zz, uz, bz, Ez, nz) {}
      _uploadDataToTextureDirectly(zz, uz) {}
      _uploadArrayBufferViewToTexture(zz, uz) {}
      _uploadImageToTexture(zz, uz) {}
    }
    bz(39193), bz(39233), bz(39191);
    async function wb(zz) {
      const uz = zz.getInternalTexture();
      if (!uz || 1 !== uz.source) return null;
      if (uz.invertY) {
        const uz = zz.XT()?.uR();
        if (!(uz instanceof Kb)) return null
      }
      const bz = uz._buffer;
      let Ez, iz = zz.mimeType;
      try {
        bz ? ArrayBuffer.isView(bz) ? Ez = bz.buffer.slice(bz.byteOffset, bz.byteOffset + bz.byteLength) : bz instanceof ArrayBuffer ? Ez = bz : bz instanceof Blob ? (Ez = await bz.arrayBuffer(), iz = bz.type || iz) : "string" === typeof bz ? (Ez = await nz.Tools.LoadFileAsync(bz), iz = (0, tz.d)(bz) || iz) : "undefined" !== typeof HTMLImageElement && bz instanceof HTMLImageElement && (Ez = await nz.Tools.LoadFileAsync(bz.src), iz = (0, tz.d)(bz.src) || iz) : (Ez = await nz.Tools.LoadFileAsync(uz.url), iz = (0, tz.d)(uz.url) || iz)
      } catch {
        return null
      }
      if (Ez && !iz && uz.url) {
        const zz = uz.url.match(/^data:([^;,]+)/);
        iz = zz ? zz[1] : (0, tz.d)(uz.url)
      }
      return Ez && iz ? {
        data: Ez,
        mimeType: iz
      } : null
    }
    const Xb = 1e-6,
      fb = new Kz.Color3(.04, .04, .04),
      sb = 1024,
      rb = Kz.Color3.White(),
      ob = Kz.Color3.BlackReadOnly;

    function Nb(zz) {
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

    function vb(zz, uz, bz) {
      if (uz < fb.r) return 0;
      const Ez = fb.r,
        nz = zz * bz / (1 - fb.r) + uz - 2 * fb.r,
        iz = nz * nz - 4 * Ez * (fb.r - uz);
      return fz.Clamp((-nz + Math.sqrt(iz)) / (2 * Ez), 0, 1)
    }

    function xb(zz) {
      const uz = zz.diffuseColor.toLinearSpace(zz.XT().uR().useExactSrgbConversions).scale(.5),
        bz = zz.alpha,
        Ez = function(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uz.m(0, 1),
            bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Uz.m(0, .1),
            Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Uz.m(0, .1),
            nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Uz.m(1300, .1);
          return function(zz, uz, bz, Ez, nz) {
            return (1 - zz) * (1 - zz) * (1 - zz) * uz + 3 * (1 - zz) * (1 - zz) * zz * bz + 3 * (1 - zz) * zz * zz * Ez + zz * zz * zz * nz
          }(Math.pow(zz / nz.x, .333333), uz.y, bz.y, Ez.y, nz.y)
        }(fz.Clamp(zz.specularPower, 0, sb));
      return {
        baseColorFactor: [uz.r, uz.g, uz.b, bz],
        metallicFactor: 0,
        roughnessFactor: Ez
      }
    }

    function Jb(zz, uz) {
      uz.needAlphaBlending() ? zz.alphaMode = "BLEND" : uz.needAlphaTesting() && (zz.alphaMode = "MASK", zz.alphaCutoff = uz.alphaCutOff)
    }

    function Ab(zz, uz, bz) {
      const Ez = new Uint8Array(zz * uz * 4);
      for (let nz = 0; nz < Ez.length; nz += 4) Ez[nz] = Ez[nz + 1] = Ez[nz + 2] = Ez[nz + 3] = 255;
      return oz.b.CreateRGBATexture(Ez, zz, uz, bz)
    }

    function Tb(zz) {
      if (zz instanceof Uint8Array) {
        const uz = zz.length,
          bz = new Float32Array(zz.length);
        for (let Ez = 0; Ez < uz; ++Ez) bz[Ez] = zz[Ez] / 255;
        return bz
      }
      if (zz instanceof Float32Array) return zz;
      throw new Error("Unsupported pixel format!")
    }
    class Lb {
      constructor(zz) {
        this._exporter = zz, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(zz) {
        return zz ? this._textureMap.get(zz.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(zz, uz) {
        const bz = xb(zz),
          Ez = {
            name: zz.name
          };
        if (null == zz.backFaceCulling || zz.backFaceCulling || (zz.twoSidedLighting || nz.Tools.Warn(zz.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Ez.doubleSided = !0), uz) {
          const uz = [],
            nz = zz.diffuseTexture;
          nz && uz.push(this.exportTextureAsync(nz).then((zz => {
            zz && (bz.baseColorTexture = zz)
          })));
          const iz = zz.bumpTexture;
          iz && uz.push(this.exportTextureAsync(iz).then((zz => {
            zz && (Ez.normalTexture = zz, 1 !== iz.level && (Ez.normalTexture.scale = iz.level))
          })));
          const lz = zz.emissiveTexture;
          lz && (Ez.emissiveFactor = [1, 1, 1], uz.push(this.exportTextureAsync(lz).then((zz => {
            zz && (Ez.emissiveTexture = zz)
          }))));
          const Mz = zz.ambientTexture;
          Mz && uz.push(this.exportTextureAsync(Mz).then((zz => {
            if (zz) {
              const uz = {
                index: zz.index
              };
              Ez.occlusionTexture = uz
            }
          }))), uz.length > 0 && (this._exporter._materialNeedsUVsSet.add(zz), await Promise.all(uz))
        }(zz.alpha < 1 || zz.opacityTexture) && (zz.alphaMode === Nz.c.ALPHA_COMBINE ? Ez.alphaMode = "BLEND" : nz.Tools.Warn(zz.name + ": glTF 2.0 does not support alpha mode: " + zz.alphaMode.toString())), zz.emissiveColor && !zz.emissiveColor.equalsWithEpsilon(ob, Xb) && (Ez.emissiveFactor = zz.emissiveColor.obz()), Ez.pbrMetallicRoughness = bz, Jb(Ez, zz), await this._finishMaterialAsync(Ez, zz);
        const iz = this._exporter._materials;
        return iz.push(Ez), iz.length - 1
      }
      async _finishMaterialAsync(zz, uz) {
        const bz = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", zz, uz),
          Ez = [];
        for (const nz of bz) Ez.push(this.exportTextureAsync(nz));
        await Promise.all(Ez), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", zz, uz)
      }
      _resizeTexturesToSameDimensions(zz, uz, bz) {
        const Ez = zz ? zz.getSize() : {
            width: 0,
            height: 0
          },
          nz = uz ? uz.getSize() : {
            width: 0,
            height: 0
          };
        let iz, lz;
        return Ez.width < nz.width ? (iz = zz && zz instanceof rz.e ? sz.f.CreateResizedCopy(zz, nz.width, nz.height, !0) : Ab(nz.width, nz.height, bz), lz = uz) : Ez.width > nz.width ? (lz = uz && uz instanceof rz.e ? sz.f.CreateResizedCopy(uz, Ez.width, Ez.height, !0) : Ab(Ez.width, Ez.height, bz), iz = zz) : (iz = zz, lz = uz), {
          texture1: iz,
          texture2: lz
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(zz, uz, bz) {
        const Ez = new Array;
        if (!zz && !uz) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const nz = zz ? zz.XT() : uz ? uz.XT() : null;
        if (nz) {
          const iz = this._resizeTexturesToSameDimensions(zz, uz, nz),
            lz = iz.texture1?.getSize();
          let Mz, tz;
          const Hz = lz.width,
            Oz = lz.height,
            pz = await iz.texture1.readPixels(),
            dz = await iz.texture2.readPixels();
          if (!pz) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (Mz = Tb(pz), !dz) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          tz = Tb(dz);
          const Fz = tz.byteLength,
            Zz = new Uint8Array(Fz),
            Rz = new Uint8Array(Fz),
            wz = 4,
            Xz = new Kz.Color3(0, 0, 0);
          let fz = 0,
            sz = 0;
          for (let zz = 0; zz < Oz; ++zz)
            for (let uz = 0; uz < Hz; ++uz) {
              const Ez = (Hz * zz + uz) * wz,
                lz = {
                  diffuseColor: new Kz.Color3(Mz[Ez], Mz[Ez + 1], Mz[Ez + 2]).toLinearSpace(nz.uR().useExactSrgbConversions).multiply(bz.diffuseColor),
                  specularColor: new Kz.Color3(tz[Ez], tz[Ez + 1], tz[Ez + 2]).toLinearSpace(nz.uR().useExactSrgbConversions).multiply(bz.specularColor),
                  glossiness: tz[Ez + 3] * bz.glossiness
                },
                Oz = this._convertSpecularGlossinessToMetallicRoughness(lz);
              Xz.r = Math.max(Xz.r, Oz.baseColor.r), Xz.g = Math.max(Xz.g, Oz.baseColor.g), Xz.b = Math.max(Xz.b, Oz.baseColor.b), fz = Math.max(fz, Oz.metallic), sz = Math.max(sz, Oz.roughness), Rz[Ez] = 255 * Oz.baseColor.r, Rz[Ez + 1] = 255 * Oz.baseColor.g, Rz[Ez + 2] = 255 * Oz.baseColor.b, Rz[Ez + 3] = iz.texture1.hasAlpha ? 255 * Mz[Ez + 3] : 255, Zz[Ez] = 0, Zz[Ez + 1] = 255 * Oz.roughness, Zz[Ez + 2] = 255 * Oz.metallic, Zz[Ez + 3] = 255
            }
          const rz = {
            baseColor: Xz,
            metallic: fz,
            roughness: sz
          };
          let oz = !1,
            Nz = !1;
          for (let zz = 0; zz < Oz; ++zz)
            for (let uz = 0; uz < Hz; ++uz) {
              const bz = (Hz * zz + uz) * wz;
              Rz[bz] /= rz.baseColor.r > Xb ? rz.baseColor.r : 1, Rz[bz + 1] /= rz.baseColor.g > Xb ? rz.baseColor.g : 1, Rz[bz + 2] /= rz.baseColor.b > Xb ? rz.baseColor.b : 1;
              const Ez = Kz.Color3.FromInts(Rz[bz], Rz[bz + 1], Rz[bz + 2]).toGammaSpace(nz.uR().useExactSrgbConversions);
              Rz[bz] = 255 * Ez.r, Rz[bz + 1] = 255 * Ez.g, Rz[bz + 2] = 255 * Ez.b, Ez.equalsWithEpsilon(rb, Xb) || (Nz = !0), Zz[bz + 1] /= rz.roughness > Xb ? rz.roughness : 1, Zz[bz + 2] /= rz.metallic > Xb ? rz.metallic : 1;
              Kz.Color3.FromInts(255, Zz[bz + 1], Zz[bz + 2]).equalsWithEpsilon(rb, Xb) || (oz = !0)
            }
          return oz && Ez.push((0, vz.EncodeImageAsync)(Zz, Hz, Oz).then((zz => {
            rz.metallicRoughnessTextureData = zz
          }))), Nz && Ez.push((0, vz.EncodeImageAsync)(Rz, Hz, Oz).then((zz => {
            rz.baseColorTextureData = zz
          }))), await Promise.all(Ez).then((() => rz))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(zz) {
        const uz = this._getPerceivedBrightness(zz.diffuseColor),
          bz = this._getPerceivedBrightness(zz.specularColor),
          Ez = 1 - this._getMaxComponent(zz.specularColor),
          nz = vb(uz, bz, Ez),
          iz = zz.diffuseColor.scale(Ez / (1 - fb.r) / Math.max(1 - nz, Xb)),
          lz = zz.specularColor.subtract(fb.scale(1 - nz)).scale(1 / Math.max(nz, Xb));
        let Mz = Kz.Color3.Lerp(iz, lz, nz * nz);
        Mz = Mz.clampToRef(0, 1, Mz);
        return {
          baseColor: Mz,
          metallic: nz,
          roughness: 1 - zz.glossiness
        }
      }
      _getPerceivedBrightness(zz) {
        return Math.sqrt(.299 * zz.r * zz.r + .587 * zz.g * zz.g + .114 * zz.b * zz.b)
      }
      _getMaxComponent(zz) {
        return Math.max(zz.r, Math.max(zz.g, zz.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        const Hz = [],
          Oz = {
            baseColor: zz,
            metallic: uz,
            roughness: bz
          };
        if (tz)
          if (lz instanceof Yu) {
            if (lz.geometryOpacityTexture) {
              const zz = Ez && Ez.getInternalTexture() ? Ez.getInternalTexture().uniqueId : 0,
                uz = lz.geometryOpacityTexture && lz.geometryOpacityTexture.getInternalTexture() ? lz.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                bz = Number(`${zz}${uz}`),
                nz = this._textureMap.get(bz);
              nz ? Mz.baseColorTexture = nz : Hz.push(lb("baseColorOpacityTexture", Hb(Ez ? Mb(Ez, 0) : tb(1), Ez ? Mb(Ez, 1) : tb(1), Ez ? Mb(Ez, 2) : tb(1), Mb(lz.geometryOpacityTexture, 0)), lz.XT()).then((async zz => {
                const uz = await this.exportTextureAsync(zz, bz);
                uz && (Mz.baseColorTexture = uz)
              })))
            } else Ez && Hz.push(this.exportTextureAsync(Ez).then((zz => {
              zz && (Mz.baseColorTexture = zz)
            })));
            if (lz._useMetallicFromMetallicTextureBlue && nz) Hz.push(this.exportTextureAsync(nz).then((zz => {
              zz && (Mz.metallicRoughnessTexture = zz)
            })));
            else if (iz || nz) {
              const zz = nz && nz.getInternalTexture() ? nz.getInternalTexture().uniqueId : 0,
                uz = iz && iz.getInternalTexture() ? iz.getInternalTexture().uniqueId : 0,
                bz = Number(`${zz}${uz}`),
                Ez = this._textureMap.get(bz);
              Ez ? Mz.metallicRoughnessTexture = Ez : Hz.push(lb("MetalRoughTexture", Hb(lz.ambientOcclusionTexture ? Mb(lz.ambientOcclusionTexture, 0) : tb(1), iz ? Mb(iz, 0) : tb(1), nz ? Mb(nz, 0) : tb(1)), lz.XT()).then((async zz => {
                const uz = await this.exportTextureAsync(zz, bz);
                uz && (Mz.metallicRoughnessTexture = uz)
              })))
            }
          } else Ez && Hz.push(this.exportTextureAsync(Ez).then((zz => {
            zz && (Mz.baseColorTexture = zz)
          }))), nz && Hz.push(this.exportTextureAsync(nz).then((zz => {
            zz && (Mz.metallicRoughnessTexture = zz)
          })));
        return Hz.length > 0 && (this._exporter._materialNeedsUVsSet.add(lz), await Promise.all(Hz)), Oz
      }
      _getTextureSampler(zz) {
        const uz = {};
        if (!zz || !(zz instanceof rz.e)) return uz;
        const bz = this._getGLTFTextureWrapMode(zz.wrapU);
        10497 !== bz && (uz.wrapS = bz);
        const Ez = this._getGLTFTextureWrapMode(zz.wrapV);
        switch (10497 !== Ez && (uz.wrapT = Ez), zz.samplingMode) {
          case rz.e.LINEAR_LINEAR:
            uz.magFilter = 9729, uz.minFilter = 9729;
            break;
          case rz.e.LINEAR_NEAREST:
            uz.magFilter = 9729, uz.minFilter = 9728;
            break;
          case rz.e.NEAREST_LINEAR:
            uz.magFilter = 9728, uz.minFilter = 9729;
            break;
          case rz.e.NEAREST_LINEAR_MIPLINEAR:
            uz.magFilter = 9728, uz.minFilter = 9987;
            break;
          case rz.e.NEAREST_NEAREST:
            uz.magFilter = 9728, uz.minFilter = 9728;
            break;
          case rz.e.NEAREST_LINEAR_MIPNEAREST:
            uz.magFilter = 9728, uz.minFilter = 9985;
            break;
          case rz.e.LINEAR_NEAREST_MIPNEAREST:
            uz.magFilter = 9729, uz.minFilter = 9984;
            break;
          case rz.e.LINEAR_NEAREST_MIPLINEAR:
            uz.magFilter = 9729, uz.minFilter = 9986;
            break;
          case rz.e.NEAREST_NEAREST_MIPLINEAR:
            uz.magFilter = 9728, uz.minFilter = 9986;
            break;
          case rz.e.LINEAR_LINEAR_MIPLINEAR:
            uz.magFilter = 9729, uz.minFilter = 9987;
            break;
          case rz.e.LINEAR_LINEAR_MIPNEAREST:
            uz.magFilter = 9729, uz.minFilter = 9985;
            break;
          case rz.e.NEAREST_NEAREST_MIPNEAREST:
            uz.magFilter = 9728, uz.minFilter = 9984
        }
        return uz
      }
      _getGLTFTextureWrapMode(zz) {
        switch (zz) {
          case rz.e.WRAP_ADDRESSMODE:
            return 10497;
          case rz.e.CLAMP_ADDRESSMODE:
            return 33071;
          case rz.e.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return nz.Tools.Error(`Unsupported Texture Wrap Mode ${zz}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(zz, uz, bz) {
        const Ez = {
            diffuseColor: zz._albedoColor,
            specularColor: zz._reflectivityColor,
            glossiness: zz._microSurface
          },
          nz = zz._albedoTexture,
          iz = zz._reflectivityTexture,
          lz = zz._useMicroSurfaceFromReflectivityMapAlpha;
        if (iz && !lz) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((nz || iz) && bz) {
          this._exporter._materialNeedsUVsSet.add(zz);
          const bz = this._exportTextureSampler(nz || iz),
            lz = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(nz, iz, Ez),
            Mz = this._exporter._textures;
          if (lz.baseColorTextureData) {
            const zz = await this._exportImageAsync(`baseColor${Mz.length}`, lz.baseColorTextureData);
            uz.baseColorTexture = this._exportTextureInfo(zz, bz, nz?.coordinatesIndex)
          }
          if (lz.metallicRoughnessTextureData) {
            const zz = await this._exportImageAsync(`metallicRoughness${Mz.length}`, lz.metallicRoughnessTextureData);
            uz.metallicRoughnessTexture = this._exportTextureInfo(zz, bz, iz?.coordinatesIndex)
          }
          return lz
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Ez)
      }
      async exportPBRMaterialAsync(zz, uz) {
        const bz = {},
          Ez = {
            name: zz.name
          },
          nz = zz.isMetallicWorkflow();
        if (nz) {
          const uz = zz._albedoColor,
            Ez = zz.alpha;
          uz && (bz.baseColorFactor = [uz.r, uz.g, uz.b, Ez])
        }
        const iz = nz ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(zz._albedoColor, zz._metallic, zz._roughness, zz._albedoTexture, zz._metallicTexture, zz._metallicTexture, zz, bz, uz) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(zz, bz, uz);
        await this._setMetallicRoughnessPbrMaterialAsync(iz, zz, Ez, bz, uz), await this._finishMaterialAsync(Ez, zz);
        const lz = this._exporter._materials;
        return lz.push(Ez), lz.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(zz, uz, bz, Ez, iz) {
        if (Jb(bz, uz), zz.baseColor.equalsWithEpsilon(rb, Xb) && fz.WithinEpsilon(uz.alpha, 1, Xb) || (Ez.baseColorFactor = [zz.baseColor.r, zz.baseColor.g, zz.baseColor.b, uz.alpha]), null != zz.metallic && 1 !== zz.metallic && (Ez.metallicFactor = zz.metallic), null != zz.roughness && 1 !== zz.roughness && (Ez.roughnessFactor = zz.roughness), null == uz.backFaceCulling || uz.backFaceCulling || (uz._twoSidedLighting || nz.Tools.Warn(uz.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), bz.doubleSided = !0), iz) {
          const zz = [],
            nz = uz instanceof ou ? uz._bumpTexture : uz.geometryNormalTexture;
          nz && zz.push(this.exportTextureAsync(nz).then((zz => {
            zz && (bz.normalTexture = zz, 1 !== nz.level && (bz.normalTexture.scale = nz.level))
          })));
          const iz = uz instanceof ou ? uz._ambientTexture : uz.ambientOcclusionTexture;
          iz && zz.push(new Promise((async zz => {
            if (uz instanceof Yu && Ez.metallicRoughnessTexture) {
              const uz = this._exportTextureSampler(iz),
                bz = this._exporter._textures[Ez.metallicRoughnessTexture.index].source,
                nz = this._exportTextureInfo(bz, uz, iz.coordinatesIndex);
              return this._textureMap.set(iz.uniqueId, nz), this._exporter._extensionsPostExportTextures("exporter", nz, iz), zz(nz)
            }
            return zz(await this.exportTextureAsync(iz))
          })).then((async zz => {
            if (zz) {
              const Ez = {
                index: zz.index,
                texCoord: zz.texCoord,
                extensions: zz.extensions
              };
              bz.occlusionTexture = Ez, Ez.strength = uz instanceof ou ? uz._ambientTextureStrength : uz.ambientOcclusionTexture.level
            }
          })));
          const lz = uz instanceof ou ? uz._emissiveTexture : uz.emissionColorTexture;
          lz && zz.push(this.exportTextureAsync(lz).then((zz => {
            zz && (bz.emissiveTexture = zz)
          }))), zz.length > 0 && (this._exporter._materialNeedsUVsSet.add(uz), await Promise.all(zz))
        }
        const lz = uz instanceof ou ? uz._emissiveColor : uz.emissionColor;
        lz.equalsWithEpsilon(ob, Xb) || (bz.emissiveFactor = lz.obz()), bz.pbrMetallicRoughness = Ez
      }
      async exportOpenPBRMaterialAsync(zz, uz) {
        const bz = {},
          Ez = {
            name: zz.name
          },
          nz = zz.baseColor,
          iz = zz.geometryOpacity;
        nz && (bz.baseColorFactor = [nz.r, nz.g, nz.b, iz]);
        const lz = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(zz.baseColor, zz.baseMetalness, zz.specularRoughness, zz.baseColorTexture, zz.baseMetalnessTexture, zz.specularRoughnessTexture, zz, bz, uz);
        await this._setMetallicRoughnessPbrMaterialAsync(lz, zz, Ez, bz, uz), await this._finishMaterialAsync(Ez, zz);
        const Mz = this._exporter._materials;
        return Mz.push(Ez), Mz.length - 1
      }
      async exportTextureAsync(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = this._textureMap.get(uz ?? zz.uniqueId);
        if (bz) return bz;
        const Ez = this._exportTextureSampler(zz),
          nz = await this._exportTextureImageAsync(zz);
        return bz = this._exportTextureInfo(nz, Ez, zz.coordinatesIndex), this._textureMap.set(uz ?? zz.uniqueId, bz), this._exporter._extensionsPostExportTextures("exporter", bz, zz), bz
      }
      async _exportTextureImageAsync(zz) {
        const uz = zz.mimeType ?? "none",
          bz = this._internalTextureToImage,
          Ez = zz.getInternalTexture().uniqueId;
        bz[Ez] = bz[Ez] || {};
        let iz = bz[Ez][uz];
        return void 0 === iz && (iz = (async () => {
          const bz = await wb(zz);
          if (bz && Nb(bz.mimeType) && ("none" === uz || bz.mimeType === uz)) return await this._exportImageAsync(zz.name, new Blob([bz.data], {
            type: bz.mimeType
          }));
          let Ez = "image/png";
          "none" !== uz && (Nb(uz) ? Ez = uz : (Ez = "image/png", nz.Tools.Warn(`Unsupported media type: ${uz}. Exporting texture as PNG.`)));
          const iz = zz.getSize(),
            lz = await (0, sz.e)(zz),
            Mz = await (0, vz.EncodeImageAsync)(lz, iz.width, iz.height, Ez);
          return await this._exportImageAsync(zz.name, Mz)
        })(), bz[Ez][uz] = iz), await iz
      }
      async _exportImageAsync(zz, uz) {
        const bz = this._exporter._images;
        let Ez;
        if (this._exporter._shouldUseGlb) {
          Ez = {
            name: zz,
            mimeType: uz.type,
            bufferView: void 0
          };
          const bz = await uz.arrayBuffer(),
            nz = this._exporter._bufferManager.createBufferView(new Uint8Array(bz));
          this._exporter._bufferManager.setBufferView(Ez, nz)
        } else {
          const iz = zz.replace(/\.\/|\/|\.\\|\\/g, "_"),
            lz = function(zz) {
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
            }(uz.type);
          let Mz = iz + lz;
          bz.some((zz => zz.uri === Mz)) && (Mz = `${iz}_${nz.Tools.RandomId()}${lz}`), Ez = {
            name: zz,
            uri: Mz
          }, this._exporter._imageData[Mz] = uz
        }
        return bz.push(Ez), bz.length - 1
      }
      _exportTextureInfo(zz, uz, bz) {
        const Ez = this._exporter._textures;
        let nz = Ez.findIndex((bz => bz.sampler == uz && bz.source === zz)); - 1 === nz && (nz = Ez.length, Ez.push({
          source: zz,
          sampler: uz
        }));
        const iz = {
          index: nz
        };
        return bz && (iz.texCoord = bz), iz
      }
      _exportTextureSampler(zz) {
        const uz = this._getTextureSampler(zz),
          bz = this._exporter._samplers,
          Ez = bz.findIndex((zz => zz.minFilter === uz.minFilter && zz.magFilter === uz.magFilter && zz.wrapS === uz.wrapS && zz.wrapT === uz.wrapT));
        return -1 !== Ez ? Ez : (bz.push(uz), bz.length - 1)
      }
    }
    var Pb = bz(39226),
      Gb = bz(39372);
    (0, Gb.e)();
    var ab = bz(36526);
    const Vb = Ez.Matrix.Compose(new Ez.ER(-1, 1, 1), Ez.Quaternion.Identity(), Ez.ER.Zero());

    function mb(zz, uz) {
      if (!(zz instanceof pz.e)) return !1;
      if (uz) {
        if (!zz.getWorldMatrix().equalsWithEpsilon(Ez.Matrix.IdentityReadOnly, ab.b)) return !1
      } else {
        if (!zz.getWorldMatrix().multiplyToRef(Vb, Ez.TmpVectors.Matrix[0]).equalsWithEpsilon(Ez.Matrix.IdentityReadOnly, ab.b)) return !1
      }
      return !(zz instanceof dz.d && zz.geometry)
    }
    const qb = Ez.ER.ZeroReadOnly,
      hb = Ez.Quaternion.Identity(),
      Ub = Ez.ER.OneReadOnly,
      cb = new Ez.ER(-1, 1, 1);

    function gb(zz, uz) {
      const {
        byteOffset: bz,
        byteStride: Ez,
        type: nz,
        normalized: iz
      } = zz, lz = zz.getSize(), Mz = uz.reduce(((zz, uz) => uz.getTotalVertices() > zz ? uz.getTotalVertices() : zz), -Number.MAX_VALUE);
      return {
        byteOffset: bz,
        byteStride: Ez,
        componentCount: lz,
        type: nz,
        count: Mz * lz,
        normalized: iz,
        totalVertices: Mz,
        kind: zz.getKind()
      }
    }

    function Sb(zz) {
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

    function yb(zz) {
      switch (zz) {
        case Oz.d.PositionKind:
        case Oz.d.NormalKind:
        case Oz.d.TangentKind:
        case Oz.d.ColorKind:
        case Oz.d.MatricesIndicesKind:
        case Oz.d.MatricesIndicesExtraKind:
        case Oz.d.MatricesWeightsKind:
        case Oz.d.MatricesWeightsExtraKind:
        case Oz.d.UVKind:
        case Oz.d.UV2Kind:
        case Oz.d.UV3Kind:
        case Oz.d.UV4Kind:
        case Oz.d.UV5Kind:
        case Oz.d.UV6Kind:
          return !0
      }
      return !1
    }

    function Db(zz) {
      const uz = Math.sqrt(zz.x * zz.x + zz.y * zz.y + zz.z * zz.z);
      uz > 0 && (zz.x /= uz, zz.y /= uz, zz.z /= uz)
    }

    function Qb(zz) {
      return zz.x *= -1, zz
    }

    function Wb(zz) {
      if (zz.x * zz.x + zz.y * zz.y > .5) {
        const uz = Math.abs(zz.x),
          bz = Math.abs(zz.y);
        if (uz > bz) {
          const bz = Math.sign(zz.x);
          zz.x = uz, zz.y *= -bz, zz.z *= -bz, zz.w *= bz
        } else {
          const uz = Math.sign(zz.y);
          zz.x *= -uz, zz.y = bz, zz.z *= uz, zz.w *= -uz
        }
      } else {
        const uz = Math.abs(zz.z),
          bz = Math.abs(zz.w);
        if (uz > bz) {
          const bz = Math.sign(zz.z);
          zz.x *= -bz, zz.y *= bz, zz.z = uz, zz.w *= -bz
        } else {
          const uz = Math.sign(zz.w);
          zz.x *= uz, zz.y *= -uz, zz.z *= -uz, zz.w = bz
        }
      }
      return zz
    }

    function eb(zz) {
      zz.P_(-zz.z, zz.w, zz.x, -zz.y)
    }

    function jb(zz, uz) {
      const bz = Ez.ER.FromArrayToRef(uz.translation || [0, 0, 0], 0, Ez.TmpVectors.ER[0]),
        nz = Ez.Quaternion.FromArrayToRef(uz.rotation || [0, 0, 0, 1], 0, Ez.TmpVectors.Quaternion[0]),
        iz = Ez.Matrix.ComposeToRef(Ub, nz, bz, Ez.TmpVectors.Matrix[0]),
        lz = Ez.ER.FromArrayToRef(zz.translation || [0, 0, 0], 0, Ez.TmpVectors.ER[2]),
        Mz = Ez.Quaternion.FromArrayToRef(zz.rotation || [0, 0, 0, 1], 0, Ez.TmpVectors.Quaternion[1]),
        tz = Ez.Matrix.ComposeToRef(Ub, Mz, lz, Ez.TmpVectors.Matrix[1]);
      iz.multiplyToRef(tz, tz), tz.decompose(void 0, nz, bz), bz.equalsWithEpsilon(qb, ab.b) ? delete uz.translation : uz.translation = bz.obz(), nz.equalsWithEpsilon(hb, ab.b) ? delete uz.rotation : uz.rotation = nz.obz(), uz.scale && delete uz.scale
    }

    function Ib(zz, uz) {
      if (!(uz instanceof pz.e)) return !1;
      if (!(1 === uz.getChildren().length && 0 === zz.getChildren().length && zz.parent === uz)) return !1;
      const bz = zz.XT(),
        Ez = zz instanceof Gb.i && !bz.useRightHandedSystem ? cb : Ub;
      return !!uz.ti.equalsWithEpsilon(Ez, ab.b) || (Az.e.Warn(`Cannot collapse node ${zz.name} into parent node ${uz.name} with modified scaling.`), !1)
    }

    function Bb(zz) {
      if (zz instanceof Array) {
        const uz = new Float32Array(zz);
        return new Uint8Array(uz.buffer, uz.byteOffset, uz.byteLength)
      }
      return ArrayBuffer.isView(zz) ? new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength) : new Uint8Array(zz)
    }

    function Cb(zz, uz) {
      for (const [bz, Ez] of Object.entries(zz)) {
        const nz = uz[bz];
        (Array.isArray(Ez) && Array.isArray(nz) && Yb(Ez, nz) || Ez === nz) && delete zz[bz]
      }
      return zz
    }

    function Yb(zz, uz) {
      return zz.length === uz.length && zz.every(((zz, bz) => zz === uz[bz]))
    }
    const kb = new Map([
      [Int8Array, (zz, uz, bz) => zz.setInt8(uz, bz)],
      [Uint8Array, (zz, uz, bz) => zz.setUint8(uz, bz)],
      [Uint8ClampedArray, (zz, uz, bz) => zz.setUint8(uz, bz)],
      [Int16Array, (zz, uz, bz) => zz.setInt16(uz, bz, !0)],
      [Uint16Array, (zz, uz, bz) => zz.setUint16(uz, bz, !0)],
      [Int32Array, (zz, uz, bz) => zz.setInt32(uz, bz, !0)],
      [Uint32Array, (zz, uz, bz) => zz.setUint32(uz, bz, !0)],
      [Float32Array, (zz, uz, bz) => zz.setFloat32(uz, bz, !0)],
      [Float64Array, (zz, uz, bz) => zz.setFloat64(uz, bz, !0)]
    ]);
    class zE {
      writeTypedArray(zz) {
        this._checkGrowBuffer(zz.byteLength);
        const uz = kb.get(zz.constructor);
        for (let bz = 0; bz < zz.length; bz++) uz(this._dataView, this._byteOffset, zz[bz]), this._byteOffset += zz.BYTES_PER_ELEMENT
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
        const uz = this.byteOffset + zz;
        if (uz > this._data.byteLength) {
          const zz = new Uint8Array(2 * uz);
          zz.set(this._data), this._data = zz, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function uE(zz) {
      return zz % 4 === 0 ? 4 : zz % 2 === 0 ? 2 : 1
    }
    class bE {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(zz) {
        let uz = 0;
        this._bufferViewToData.forEach((zz => {
          uz += zz.byteLength
        }));
        const bz = new zE(uz),
          Ez = Array.from(this._bufferViewToData.keys()).sort(((zz, uz) => uE(uz.byteLength) - uE(zz.byteLength)));
        for (const nz of Ez) {
          nz.byteOffset = bz.byteOffset, zz.push(nz);
          const uz = zz.length - 1,
            Ez = this.getPropertiesWithBufferView(nz);
          for (const zz of Ez) zz.bufferView = uz;
          bz.writeTypedArray(this._bufferViewToData.get(nz)), this._bufferViewToData.delete(nz)
        }
        return bz.getOutputData()
      }
      createBufferView(zz, uz) {
        const bz = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: zz.byteLength,
          byteStride: uz
        };
        return this._bufferViewToData.set(bz, zz), bz
      }
      createAccessor(zz, uz, bz, Ez, nz, iz, lz) {
        this._verifyBufferView(zz);
        const Mz = {
          bufferView: void 0,
          componentType: bz,
          count: Ez,
          type: uz,
          min: iz?.min,
          max: iz?.max,
          normalized: lz,
          byteOffset: nz
        };
        return this.setBufferView(Mz, zz), this._accessorToBufferView.set(Mz, zz), Mz
      }
      setBufferView(zz, uz) {
        this._verifyBufferView(uz);
        this.getPropertiesWithBufferView(uz).push(zz)
      }
      removeBufferView(zz) {
        const uz = this.getPropertiesWithBufferView(zz);
        for (const bz of uz) void 0 !== bz.bufferView && delete bz.bufferView;
        this._bufferViewToData.delete(zz), this._bufferViewToProperties.delete(zz), this._accessorToBufferView.forEach(((uz, bz) => {
          uz === zz && (void 0 !== bz.byteOffset && delete bz.byteOffset, this._accessorToBufferView.delete(bz))
        }))
      }
      getBufferView(zz) {
        const uz = this._accessorToBufferView.get(zz);
        return this._verifyBufferView(uz), uz
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
    var EE = bz(39376);
    (0, EE.g)();
    var nE = bz(39622);
    (0, nE.f)();
    var iE = bz(39425),
      lE = bz(40298);
    (0, lE.g)();
    let ME = (() => {
      var zz;
      let uz, bz, Ez = [],
        nz = [],
        iz = [],
        lz = [];
      return zz = class {
        get influence() {
          return this._influence
        }
        set influence(zz) {
          if (this._influence === zz) return;
          const uz = this._influence;
          this._influence = zz, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === uz || 0 === zz)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(zz) {
          this._animationPropertiesOverride = zz
        }
        constructor(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Mz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = zz, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new zb.b, this._onDataLayoutChanged = new zb.b, this.id = (0, xz.j)(this, Ez, void 0), this.morphTargetManager = ((0, xz.j)(this, nz), (0, xz.j)(this, iz, null)), this._animationPropertiesOverride = ((0, xz.j)(this, lz), null), this.id = zz, this.morphTargetManager = Mz, this._scene = bz || Rz.d.LastCreatedScene, this.influence = uz, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        kiz(zz) {
          const uz = this.hasPositions;
          this._positions = zz, uz !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(zz) {
          const uz = this.hasNormals;
          this._normals = zz, uz !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(zz) {
          const uz = this.hasTangents;
          this._tangents = zz, uz !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(zz) {
          const uz = this.hasUVs;
          this._uvs = zz, uz !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(zz) {
          const uz = this.hasUV2s;
          this._uv2s = zz, uz !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(zz) {
          const uz = this.hasColors;
          this._colors = zz, uz !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const uz = Nu.e.Clone((() => new zz(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return uz._positions = this._positions, uz._normals = this._normals, uz._tangents = this._tangents, uz._uvs = this._uvs, uz._uv2s = this._uv2s, uz._colors = this._colors, uz
        }
        serialize() {
          const zz = {};
          return zz.name = this.name, zz.influence = this.influence, null != this.id && (zz.id = this.id), zz.uniqueId = this.uniqueId, zz.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (zz.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (zz.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (zz.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (zz.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (zz.colors = Array.prototype.slice.call(this.getColors())), Nu.e.AppendSerializedAnimations(this, zz), zz
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(uz, bz) {
          let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const nz = new zz(uz.name, uz.influence, bz, Ez);
          if (nz.kiz(uz.positions), null != uz.id && (nz.id = uz.id), uz.normals && nz.setNormals(uz.normals), uz.tangents && nz.setTangents(uz.tangents), uz.uvs && nz.setUVs(uz.uvs), uz.uv2s && nz.setUV2s(uz.uv2s), uz.colors && nz.setColors(uz.colors), uz.animations) {
            for (let zz = 0; zz < uz.animations.length; zz++) {
              const bz = uz.animations[zz],
                Ez = (0, Su.b)("BABYLON.Animation");
              Ez && nz.animations.push(Ez.Parse(bz))
            }
            uz.autoAnimate && bz && bz.beginAnimation(nz, uz.autoAnimateFrom, uz.autoAnimateTo, uz.autoAnimateLoop, uz.autoAnimateSpeed || 1)
          }
          return nz
        }
        static FromMesh(uz, bz, Ez) {
          bz || (bz = uz.name);
          const nz = new zz(bz, Ez, uz.XT(), uz.morphTargetManager);
          return nz.kiz(uz.getVerticesData(cz.j.PositionKind)), uz.isVerticesDataPresent(cz.j.NormalKind) && nz.setNormals(uz.getVerticesData(cz.j.NormalKind)), uz.isVerticesDataPresent(cz.j.TangentKind) && nz.setTangents(uz.getVerticesData(cz.j.TangentKind)), uz.isVerticesDataPresent(cz.j.UVKind) && nz.setUVs(uz.getVerticesData(cz.j.UVKind)), uz.isVerticesDataPresent(cz.j.UV2Kind) && nz.setUV2s(uz.getVerticesData(cz.j.UV2Kind)), uz.isVerticesDataPresent(cz.j.ColorKind) && nz.setColors(uz.getVerticesData(cz.j.ColorKind)), nz
        }
      }, (() => {
        const Mz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        uz = [(0, Jz.G)()], bz = [(0, Jz.G)()], (0, xz.h)(null, null, uz, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: zz => "id" in zz,
            get: zz => zz.id,
            set: (zz, uz) => {
              zz.id = uz
            }
          },
          metadata: Mz
        }, Ez, nz), (0, xz.h)(null, null, bz, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: zz => "morphTargetManager" in zz,
            get: zz => zz.morphTargetManager,
            set: (zz, uz) => {
              zz.morphTargetManager = uz
            }
          },
          metadata: Mz
        }, iz, lz), Mz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Mz
        })
      })(), zz
    })();
    var tE, HE = bz(40369),
      OE = bz(39421);
    ! function(zz) {
      zz[zz.INTANGENT = 0] = "INTANGENT", zz[zz.OUTTANGENT = 1] = "OUTTANGENT"
    }(tE || (tE = {}));
    class pE {
      static _IsTransformable(zz) {
        return zz && (zz instanceof pz.e || zz instanceof EE.d || zz instanceof OE.b)
      }
      static _CreateNodeAnimation(zz, uz, bz, Ez, iz) {
        if (this._IsTransformable(zz)) {
          const lz = [],
            Mz = [],
            tz = uz.getKeys(),
            Hz = pE._CalculateMinMaxKeyFrames(tz),
            Oz = pE._DeduceInterpolation(tz, bz, Ez),
            pz = Oz.interpolationType,
            dz = Oz.shouldBakeAnimation;
          if (dz ? pE._CreateBakedAnimation(zz, uz, bz, Hz.min, Hz.max, uz.framePerSecond, iz, lz, Mz, Hz, Ez) : "LINEAR" === pz || "STEP" === pz ? pE._CreateLinearOrStepAnimation(zz, uz, bz, lz, Mz, Ez) : "CUBICSPLINE" === pz ? pE._CreateCubicSplineAnimation(zz, uz, bz, lz, Mz, Ez) : pE._CreateBakedAnimation(zz, uz, bz, Hz.min, Hz.max, uz.framePerSecond, iz, lz, Mz, Hz, Ez), lz.length && Mz.length) {
            return {
              inputs: lz,
              outputs: Mz,
              samplerInterpolation: pz,
              inputsMin: dz ? Hz.min : nz.Tools.FloatRound(Hz.min / uz.framePerSecond),
              inputsMax: dz ? Hz.max : nz.Tools.FloatRound(Hz.max / uz.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(zz) {
        let uz = null,
          bz = "VEC3",
          Ez = !1;
        const iz = zz.targetProperty.split(".");
        switch (iz[0]) {
          case "ti":
            uz = "scale";
            break;
          case "position":
            uz = "translation";
            break;
          case "rotation":
            bz = "VEC4", uz = "rotation";
            break;
          case "rotationQuaternion":
            bz = "VEC4", Ez = !0, uz = "rotation";
            break;
          case "influence":
            bz = "SCALAR", uz = "weights";
            break;
          default:
            nz.Tools.Error(`Unsupported animatable property ${iz[0]}`)
        }
        return uz ? {
          animationChannelTargetPath: uz,
          dataAccessorType: bz,
          useQuaternion: Ez
        } : (nz.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz) {
        let pz;
        if (pE._IsTransformable(zz) && zz.animations)
          for (const dz of zz.animations) {
            if (Oz && !Oz(dz)) continue;
            const nz = pE._DeduceAnimationInfo(dz);
            nz && (pz = {
              name: dz.name,
              samplers: [],
              channels: []
            }, pE._AddAnimation(`${dz.name}`, dz.hasRunningRuntimeAnimations ? uz : pz, zz, dz, nz.dataAccessorType, nz.animationChannelTargetPath, Ez, iz, lz, Mz, nz.useQuaternion, tz, Hz), pz.samplers.length && pz.channels.length && bz.push(pz))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz) {
        let pz;
        if (zz instanceof HE.d) {
          const nz = zz.morphTargetManager;
          if (nz)
            for (let dz = 0; dz < nz.numTargets; ++dz) {
              const Fz = nz.getTarget(dz);
              for (const Zz of Fz.animations) {
                if (Oz && !Oz(Zz)) continue;
                const Fz = new lE.c(`${Zz.name}`, "influence", Zz.framePerSecond, Zz.dataType, Zz.gi, Zz.enableBlending),
                  Rz = [],
                  Kz = Zz.getKeys();
                for (let zz = 0; zz < Kz.length; ++zz) {
                  const uz = Kz[zz];
                  for (let zz = 0; zz < nz.numTargets; ++zz) zz == dz ? Rz.push(uz) : Rz.push({
                    frame: uz.frame,
                    value: 0
                  })
                }
                Fz.setKeys(Rz, !0);
                const wz = pE._DeduceAnimationInfo(Fz);
                wz && (pz = {
                  name: Fz.name,
                  samplers: [],
                  channels: []
                }, pE._AddAnimation(Zz.name, Zz.hasRunningRuntimeAnimations ? uz : pz, zz, Fz, wz.dataAccessorType, wz.animationChannelTargetPath, Ez, iz, lz, Mz, wz.useQuaternion, tz, Hz, nz.numTargets), pz.samplers.length && pz.channels.length && bz.push(pz))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
        let Oz;
        if (zz.animationGroups) {
          const pz = zz.animationGroups;
          for (const dz of pz) {
            const pz = new Map,
              Fz = new Map,
              Zz = new Set,
              Rz = dz.to - dz.from;
            Oz = {
              name: dz.name,
              channels: [],
              samplers: []
            };
            for (let uz = 0; uz < dz.targetedAnimations.length; ++uz) {
              const Hz = dz.targetedAnimations[uz],
                Rz = Hz.target,
                Kz = Hz.animation;
              if (tz && !tz(Kz)) continue;
              const wz = Mz.has(Rz);
              if (this._IsTransformable(Rz) || 1 === Rz.length && this._IsTransformable(Rz[0])) {
                const zz = pE._DeduceAnimationInfo(Hz.animation);
                if (zz) {
                  const uz = this._IsTransformable(Rz) ? Rz : this._IsTransformable(Rz[0]) ? Rz[0] : null;
                  uz && pE._AddAnimation(`${Kz.name}`, Oz, uz, Kz, zz.dataAccessorType, zz.animationChannelTargetPath, bz, Ez, nz, iz, zz.useQuaternion, lz, wz)
                }
              } else if (Rz instanceof ME || 1 === Rz.length && Rz[0] instanceof ME) {
                if (pE._DeduceAnimationInfo(Hz.animation)) {
                  const uz = Rz instanceof ME ? Rz : Rz[0];
                  if (uz) {
                    const bz = zz.morphTargetManagers.find((zz => {
                      for (let bz = 0; bz < zz.numTargets; ++bz)
                        if (zz.getTarget(bz) === uz) return !0;
                      return !1
                    }));
                    if (bz) {
                      const Ez = zz.meshes.find((zz => zz.morphTargetManager === bz));
                      Ez && (pz.has(Ez) || pz.set(Ez, new Map), pz.get(Ez)?.set(uz, Kz), Zz.add(Ez), Fz.set(Ez, Kz))
                    }
                  }
                }
              }
            }
            Zz.forEach((zz => {
              const uz = zz.morphTargetManager;
              let Mz = null;
              const tz = [],
                Hz = Fz.get(zz).getKeys(),
                Zz = Hz.length;
              for (let bz = 0; bz < Zz; ++bz)
                for (let Ez = 0; Ez < uz.numTargets; ++Ez) {
                  const nz = uz.getTarget(Ez),
                    iz = pz.get(zz);
                  if (iz) {
                    const uz = iz.get(nz);
                    uz ? (Mz || (Mz = new lE.c(`${dz.name}_${zz.name}_MorphWeightAnimation`, "influence", uz.framePerSecond, lE.c.ANIMATIONTYPE_FLOAT, uz.gi, uz.enableBlending)), tz.push(uz.getKeys()[bz])) : tz.push({
                      frame: dz.from + Rz / Zz * bz,
                      value: nz.influence,
                      inTangent: Hz[0].inTangent ? 0 : void 0,
                      outTangent: Hz[0].outTangent ? 0 : void 0
                    })
                  }
                }
              Mz.setKeys(tz, !0);
              const Kz = pE._DeduceAnimationInfo(Mz);
              Kz && pE._AddAnimation(`${dz.name}_${zz.name}_MorphWeightAnimation`, Oz, zz, Mz, Kz.dataAccessorType, Kz.animationChannelTargetPath, bz, Ez, nz, iz, Kz.useQuaternion, lz, !1, uz?.numTargets)
            })), Oz.channels.length && Oz.samplers.length && (Hz?.set(dz, uz.length), uz.push(Oz))
          }
        }
      }
      static _AddAnimation(zz, uz, bz, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz) {
        const Rz = pE._CreateNodeAnimation(bz, nz, lz, pz, dz);
        let Kz, wz, Xz, fz, sz, rz;
        if (Rz) {
          if (Zz) {
            let zz, uz = 0;
            const bz = [];
            for (; Rz.inputs.length > 0;) zz = Rz.inputs.shift(), uz % Zz == 0 && bz.push(zz), uz++;
            Rz.inputs = bz
          }
          const zz = Mz.get(bz),
            nz = new Float32Array(Rz.inputs);
          Kz = tz.createBufferView(nz), wz = tz.createAccessor(Kz, "SCALAR", 5126, Rz.inputs.length, void 0, {
            min: [Rz.inputsMin],
            max: [Rz.inputsMax]
          }), Oz.push(wz), Xz = Oz.length - 1;
          const Hz = new Ez.Quaternion,
            pz = new Ez.ER,
            dz = new Ez.ER,
            oz = bz instanceof EE.d,
            Nz = Sb(iz),
            vz = new Float32Array(Rz.outputs.length * Nz);
          Rz.outputs.forEach((function(zz, uz) {
            let bz = zz;
            switch (lz) {
              case "translation":
                Fz && (Ez.ER.FromArrayToRef(zz, 0, dz), Qb(dz), dz.toArray(bz));
                break;
              case "rotation":
                4 === zz.length ? Ez.Quaternion.FromArrayToRef(zz, 0, Hz) : (bz = new Array(4), Ez.ER.FromArrayToRef(zz, 0, pz), Ez.Quaternion.FromEulerVectorToRef(pz, Hz)), Fz && (Wb(Hz), oz && eb(Hz)), Hz.toArray(bz)
            }
            vz.set(bz, uz * Nz)
          })), Kz = tz.createBufferView(vz), wz = tz.createAccessor(Kz, iz, 5126, Rz.outputs.length), Oz.push(wz), fz = Oz.length - 1, sz = {
            interpolation: Rz.samplerInterpolation,
            input: Xz,
            output: fz
          }, uz.samplers.push(sz), rz = {
            sampler: uz.samplers.length - 1,
            target: {
              node: zz,
              path: lz
            }
          }, uz.channels.push(rz)
        }
      }
      static _CreateBakedAnimation(zz, uz, bz, iz, lz, Mz, tz, Hz, Oz, pz, dz) {
        let Fz;
        const Zz = Ez.Quaternion.Identity();
        let Rz, Kz, wz, Xz, fz, sz = null,
          rz = null;
        pz.min = nz.Tools.FloatRound(iz / Mz);
        const oz = uz.getKeys();
        for (let Ez = 0, Nz = oz.length; Ez < Nz; ++Ez) {
          if (Kz = oz[Ez], Ez + 1 < Nz)
            if (wz = oz[Ez + 1], Kz.value.equals && Kz.value.equals(wz.value) || Kz.value === wz.value) {
              if (0 !== Ez) continue;
              fz = Kz.frame
            } else fz = wz.frame;
          else {
            if (Xz = oz[Ez - 1], Kz.value.equals && Kz.value.equals(Xz.value) || Kz.value === Xz.value) continue;
            fz = lz
          }
          if (fz)
            for (let Ez = Kz.frame; Ez <= fz; Ez += tz) {
              if (Rz = nz.Tools.FloatRound(Ez / Mz), Rz === sz) continue;
              sz = Rz, rz = Rz;
              const iz = {
                key: 0,
                repeatCount: 0,
                gi: uz.gi
              };
              Fz = uz._interpolate(Ez, iz), pE._SetInterpolatedValue(zz, Fz, Rz, uz, bz, Zz, Hz, Oz, dz)
            }
        }
        rz && (pz.max = rz)
      }
      static _ConvertFactorToVector3OrQuaternion(zz, uz, bz, iz, lz) {
        const Mz = pE._GetBasePositionRotationOrScale(uz, iz, lz),
          tz = bz.targetProperty.split("."),
          Hz = tz ? tz[1] : "",
          Oz = lz ? Ez.Quaternion.FromArray(Mz).normalize() : Ez.ER.FromArray(Mz);
        switch (Hz) {
          case "x":
          case "y":
          case "z":
            Oz[Hz] = zz;
            break;
          case "w":
            Oz.w = zz;
            break;
          default:
            nz.Tools.Error(`glTFAnimation: Unsupported component name "${Hz}"!`)
        }
        return Oz
      }
      static _SetInterpolatedValue(zz, uz, bz, nz, iz, lz, Mz, tz, Hz) {
        let Oz;
        Mz.push(bz), "weights" !== iz ? (nz.dataType === lE.c.ANIMATIONTYPE_FLOAT && (uz = this._ConvertFactorToVector3OrQuaternion(uz, zz, nz, iz, Hz)), "rotation" === iz ? (Hz ? lz = uz : (Oz = uz, Ez.Quaternion.RotationYawPitchRollToRef(Oz.y, Oz.x, Oz.z, lz)), tz.push(lz.obz())) : (Oz = uz, tz.push(Oz.obz()))) : tz.push([uz])
      }
      static _CreateLinearOrStepAnimation(zz, uz, bz, Ez, nz, iz) {
        for (const lz of uz.getKeys()) Ez.push(lz.frame / uz.framePerSecond), pE._AddKeyframeValue(lz, uz, nz, bz, zz, iz)
      }
      static _CreateCubicSplineAnimation(zz, uz, bz, Ez, nz, iz) {
        uz.getKeys().forEach((function(lz) {
          Ez.push(lz.frame / uz.framePerSecond), pE._AddSplineTangent(tE.INTANGENT, nz, bz, "CUBICSPLINE", lz, iz), pE._AddKeyframeValue(lz, uz, nz, bz, zz, iz), pE._AddSplineTangent(tE.OUTTANGENT, nz, bz, "CUBICSPLINE", lz, iz)
        }))
      }
      static _GetBasePositionRotationOrScale(zz, uz, bz) {
        let nz;
        if ("rotation" === uz)
          if (bz) {
            nz = (zz.rotationQuaternion ?? Ez.Quaternion.Identity()).obz()
          } else {
            nz = (zz.rotation ?? Ez.ER.Zero()).obz()
          }
        else if ("translation" === uz) {
          nz = (zz.position ?? Ez.ER.Zero()).obz()
        } else {
          nz = (zz.ti ?? Ez.ER.One()).obz()
        }
        return nz
      }
      static _AddKeyframeValue(zz, uz, bz, iz, lz, Mz) {
        let tz;
        const Hz = uz.dataType;
        if (Hz === lE.c.ANIMATIONTYPE_VECTOR3) {
          let uz = zz.value.obz();
          if ("rotation" === iz) {
            const zz = Ez.ER.FromArray(uz);
            uz = Ez.Quaternion.RotationYawPitchRoll(zz.y, zz.x, zz.z).obz()
          }
          bz.push(uz)
        } else if (Hz === lE.c.ANIMATIONTYPE_FLOAT) {
          if ("weights" === iz) bz.push([zz.value]);
          else if (tz = this._ConvertFactorToVector3OrQuaternion(zz.value, lz, uz, iz, Mz), tz) {
            if ("rotation" === iz) {
              const zz = Mz ? tz : Ez.Quaternion.RotationYawPitchRoll(tz.y, tz.x, tz.z).normalize();
              bz.push(zz.obz())
            }
            bz.push(tz.obz())
          }
        } else Hz === lE.c.ANIMATIONTYPE_QUATERNION ? bz.push(zz.value.normalize().obz()) : nz.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(zz, uz, bz) {
        let Ez, nz, iz = !1;
        if ("rotation" === uz && !bz) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let lz = 0, Mz = zz.length; lz < Mz; ++lz)
          if (nz = zz[lz], nz.inTangent || nz.outTangent)
            if (Ez) {
              if ("CUBICSPLINE" !== Ez) {
                Ez = "LINEAR", iz = !0;
                break
              }
            } else Ez = "CUBICSPLINE";
        else if (Ez) {
          if ("CUBICSPLINE" === Ez || nz.interpolation && 1 === nz.interpolation && "STEP" !== Ez) {
            Ez = "LINEAR", iz = !0;
            break
          }
        } else Ez = nz.interpolation && 1 === nz.interpolation ? "STEP" : "LINEAR";
        return Ez || (Ez = "LINEAR"), {
          interpolationType: Ez,
          shouldBakeAnimation: iz
        }
      }
      static _AddSplineTangent(zz, uz, bz, nz, iz, lz) {
        let Mz;
        const tz = zz === tE.INTANGENT ? iz.inTangent : iz.outTangent;
        if ("CUBICSPLINE" === nz) {
          if ("rotation" === bz)
            if (tz)
              if (lz) Mz = tz.obz();
              else {
                const zz = tz;
                Mz = Ez.Quaternion.RotationYawPitchRoll(zz.y, zz.x, zz.z).obz()
              }
          else Mz = [0, 0, 0, 0];
          else Mz = "weights" === bz ? tz ? [tz] : [0] : tz ? tz.obz() : [0, 0, 0];
          uz.push(Mz)
        }
      }
      static _CalculateMinMaxKeyFrames(zz) {
        let uz = 1 / 0,
          bz = -1 / 0;
        return zz.forEach((function(zz) {
          uz = Math.min(uz, zz.frame), bz = Math.max(bz, zz.frame)
        })), {
          min: uz,
          max: bz
        }
      }
    }

    function dE(zz, uz, bz, iz, lz, Mz) {
      const tz = {
          attributes: {},
          influence: zz.influence,
          name: zz.name
        },
        Hz = uz.geometry;
      if (!Hz) return nz.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), tz;
      const pz = Mz ? -1 : 1,
        dz = Ez.ER.Zero();
      let Fz, Zz;
      if (zz.hasPositions) {
        const iz = zz.getPositions(),
          Mz = Hz.getVerticesData(Oz.d.PositionKind);
        if (Mz) {
          const zz = new Float32Array(Mz.length),
            uz = [1 / 0, 1 / 0, 1 / 0],
            nz = [-1 / 0, -1 / 0, -1 / 0];
          Zz = Mz.length / 3, Fz = 0;
          for (let bz = Fz; bz < Zz; ++bz) {
            const lz = Ez.ER.FromArray(Mz, 3 * bz);
            Ez.ER.FromArray(iz, 3 * bz).subtractToRef(lz, dz), dz.x *= pz, uz[0] = Math.min(uz[0], dz.x), nz[0] = Math.max(nz[0], dz.x), uz[1] = Math.min(uz[1], dz.y), nz[1] = Math.max(nz[1], dz.y), uz[2] = Math.min(uz[2], dz.z), nz[2] = Math.max(nz[2], dz.z), zz[3 * bz] = dz.x, zz[3 * bz + 1] = dz.y, zz[3 * bz + 2] = dz.z
          }
          const Hz = bz.createBufferView(zz, 12),
            Oz = bz.createAccessor(Hz, "VEC3", 5126, iz.length / 3, 0, {
              min: uz,
              max: nz
            });
          lz.push(Oz), tz.attributes.POSITION = lz.length - 1
        } else nz.Tools.Warn(`Morph target positions for mesh ${uz.name} were not exported. Mesh does not have position vertex data`)
      }
      if (zz.hasNormals) {
        const iz = zz.getNormals(),
          Mz = Hz.getVerticesData(Oz.d.NormalKind);
        if (Mz) {
          const zz = new Float32Array(Mz.length);
          Zz = Mz.length / 3, Fz = 0;
          for (let bz = Fz; bz < Zz; ++bz) {
            const uz = Ez.ER.FromArray(Mz, 3 * bz).normalize();
            Ez.ER.FromArray(iz, 3 * bz).normalize().subtractToRef(uz, dz), zz[3 * bz] = dz.x * pz, zz[3 * bz + 1] = dz.y, zz[3 * bz + 2] = dz.z
          }
          const uz = bz.createBufferView(zz, 12),
            nz = bz.createAccessor(uz, "VEC3", 5126, iz.length / 3, 0);
          lz.push(nz), tz.attributes.NORMAL = lz.length - 1
        } else nz.Tools.Warn(`Morph target normals for mesh ${uz.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (zz.hasTangents) {
        const iz = zz.getTangents(),
          Mz = Hz.getVerticesData(Oz.d.TangentKind);
        if (Mz) {
          Zz = Mz.length / 4;
          const zz = new Float32Array(3 * Zz);
          Fz = 0;
          for (let bz = Fz; bz < Zz; ++bz) {
            const uz = Ez.ER.FromArray(Mz, 4 * bz);
            Db(uz);
            const nz = Ez.ER.FromArray(iz, 3 * bz);
            Db(nz), nz.subtractToRef(uz, dz), zz[3 * bz] = dz.x * pz, zz[3 * bz + 1] = dz.y, zz[3 * bz + 2] = dz.z
          }
          const uz = bz.createBufferView(zz, 12),
            nz = bz.createAccessor(uz, "VEC3", 5126, Zz, 0);
          lz.push(nz), tz.attributes.TANGENT = lz.length - 1
        } else nz.Tools.Warn(`Morph target tangents for mesh ${uz.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (zz.hasColors) {
        const iz = zz.getColors(),
          Mz = Hz.getVerticesData(Oz.d.ColorKind),
          pz = Hz.getVertexBuffer(Oz.d.ColorKind);
        if (Mz && pz) {
          const zz = pz.getSize();
          Zz = Mz.length / zz;
          const uz = new Float32Array(Zz * zz);
          Fz = 0;
          for (let bz = Fz; bz < Zz; ++bz)
            if (3 === zz) {
              const nz = Ez.ER.FromArray(Mz, bz * zz);
              Ez.ER.FromArray(iz, bz * zz).subtractToRef(nz, dz), uz[3 * bz] = dz.x, uz[3 * bz + 1] = dz.y, uz[3 * bz + 2] = dz.z
            } else if (4 === zz) {
            const nz = new Ez.Vector4,
              lz = Ez.Vector4.FromArray(Mz, bz * zz);
            Ez.Vector4.FromArray(iz, bz * zz).subtractToRef(lz, nz), uz[4 * bz] = nz.x, uz[4 * bz + 1] = nz.y, uz[4 * bz + 2] = nz.z, uz[4 * bz + 3] = nz.w
          } else nz.Tools.Warn(`Unsupported number of components for color attribute: ${zz}`);
          const Hz = bz.createBufferView(uz, 4 * zz),
            Oz = bz.createAccessor(Hz, 3 === zz ? "VEC3" : "VEC4", 5126, Zz, 0);
          lz.push(Oz), tz.attributes.COLOR_0 = lz.length - 1
        } else nz.Tools.Warn(`Morph target colors for mesh ${uz.name} were not exported. Mesh does not have colors vertex data`)
      }
      return tz
    }
    var FE = bz(40792);
    class ZE {}
    ZE.DEFAULT_COLOR = Wz.c.White(), ZE.DEFAULT_WIDTH_ATTENUATED = 1, ZE.DEFAULT_WIDTH = .1;
    var RE = bz(40289);
    class KE {
      constructor(zz) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = zz
      }
      moveTo(zz, uz) {
        this._currentPath = new RE.i(zz, uz), this._tempPaths.push(this._currentPath)
      }
      lineTo(zz, uz) {
        this._currentPath.addLineTo(zz, uz)
      }
      quadraticCurveTo(zz, uz, bz, Ez) {
        this._currentPath.addQuadraticCurveTo(zz, uz, bz, Ez, this._resolution)
      }
      bezierCurveTo(zz, uz, bz, Ez, nz, iz) {
        this._currentPath.addBezierCurveTo(zz, uz, bz, Ez, nz, iz, this._resolution)
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

    function wE(zz, uz, bz, Ez, nz, iz) {
      const lz = iz.glyphs[zz] || iz.glyphs["?"];
      if (!lz) return null;
      const Mz = new KE(nz);
      if (lz.o) {
        const zz = lz.o.split(" ");
        for (let nz = 0, iz = zz.length; nz < iz;) {
          switch (zz[nz++]) {
            case "m": {
              const iz = parseInt(zz[nz++]) * uz + bz,
                lz = parseInt(zz[nz++]) * uz + Ez;
              Mz.moveTo(iz, lz);
              break
            }
            case "l": {
              const iz = parseInt(zz[nz++]) * uz + bz,
                lz = parseInt(zz[nz++]) * uz + Ez;
              Mz.lineTo(iz, lz);
              break
            }
            case "q": {
              const iz = parseInt(zz[nz++]) * uz + bz,
                lz = parseInt(zz[nz++]) * uz + Ez,
                tz = parseInt(zz[nz++]) * uz + bz,
                Hz = parseInt(zz[nz++]) * uz + Ez;
              Mz.quadraticCurveTo(tz, Hz, iz, lz);
              break
            }
            case "b": {
              const iz = parseInt(zz[nz++]) * uz + bz,
                lz = parseInt(zz[nz++]) * uz + Ez,
                tz = parseInt(zz[nz++]) * uz + bz,
                Hz = parseInt(zz[nz++]) * uz + Ez,
                Oz = parseInt(zz[nz++]) * uz + bz,
                pz = parseInt(zz[nz++]) * uz + Ez;
              Mz.bezierCurveTo(tz, Hz, Oz, pz, iz, lz);
              break
            }
          }
        }
      }
      return Mz.extractHoles(), {
        offsetX: lz.ha * uz,
        shapePath: Mz
      }
    }

    function XE(zz, uz, bz, Ez) {
      const nz = Array.from(zz),
        iz = uz / Ez.resolution,
        lz = (Ez.boundingBox.yMax - Ez.boundingBox.yMin + Ez.underlineThickness) * iz,
        Mz = [];
      let tz = 0,
        Hz = 0;
      for (let Oz = 0; Oz < nz.length; Oz++) {
        const zz = nz[Oz];
        if ("\n" === zz) tz = 0, Hz -= lz;
        else {
          const uz = wE(zz, iz, tz, Hz, bz, Ez);
          uz && (tz += uz.offsetX, Mz.push(uz.shapePath))
        }
      }
      return Mz
    }
    class fE {
      static ConvertPoints(zz, uz) {
        if (zz.length && Array.isArray(zz) && "number" === typeof zz[0]) return [zz];
        if (zz.length && Array.isArray(zz[0]) && "number" === typeof zz[0][0]) return zz;
        if (zz.length && !Array.isArray(zz[0]) && zz[0] instanceof Uz.n) {
          const uz = [];
          for (let bz = 0; bz < zz.length; bz++) {
            const Ez = zz[bz];
            uz.push(Ez.x, Ez.y, Ez.z)
          }
          return [uz]
        }
        if (zz.length > 0 && Array.isArray(zz[0]) && zz[0].length > 0 && zz[0][0] instanceof Uz.n) {
          const uz = [],
            bz = zz;
          for (const zz of bz) uz.push(zz.flatMap((zz => [zz.x, zz.y, zz.z])));
          return uz
        }
        if (zz instanceof Float32Array) {
          if (uz?.floatArrayStride) {
            const bz = [],
              Ez = 3 * uz.floatArrayStride;
            for (let uz = 0; uz < zz.length; uz += Ez) {
              const nz = new Array(Ez);
              for (let bz = 0; bz < Ez; bz++) nz[bz] = zz[uz + bz];
              bz.push(nz)
            }
            return bz
          }
          return [Array.from(zz)]
        }
        if (zz.length && zz[0] instanceof Float32Array) {
          const uz = [];
          for (const bz of zz) uz.push(Array.from(bz));
          return uz
        }
        return []
      }
      static OmitZeroLengthPredicate(zz, uz, bz) {
        const Ez = [];
        return uz.subtract(zz).lengthSquared() > 0 && Ez.push([zz, uz]), bz.subtract(uz).lengthSquared() > 0 && Ez.push([uz, bz]), zz.subtract(bz).lengthSquared() > 0 && Ez.push([bz, zz]), 0 === Ez.length ? null : Ez
      }
      static OmitDuplicatesPredicate(zz, uz, bz, Ez) {
        const nz = [];
        return fE._SearchInPoints(zz, uz, Ez) || nz.push([zz, uz]), fE._SearchInPoints(uz, bz, Ez) || nz.push([uz, bz]), fE._SearchInPoints(bz, zz, Ez) || nz.push([bz, zz]), 0 === nz.length ? null : nz
      }
      static _SearchInPoints(zz, uz, bz) {
        for (const Ez of bz)
          for (let bz = 0; bz < Ez.length; bz++)
            if (Ez[bz]?.equals(zz) && (Ez[bz + 1]?.equals(uz) || Ez[bz - 1]?.equals(uz))) return !0;
        return !1
      }
      static MeshesToLines(zz, uz) {
        const bz = [];
        for (let Ez = 0; Ez < zz.length; Ez++) {
          const nz = zz[Ez],
            iz = nz.getVerticesData(cz.j.PositionKind),
            lz = nz.Nbz();
          if (iz && lz)
            for (let zz = 0, Mz = 0; zz < lz.length; zz++) {
              const tz = 3 * lz[Mz++],
                Hz = 3 * lz[Mz++],
                Oz = 3 * lz[Mz++],
                pz = new Uz.n(iz[tz], iz[tz + 1], iz[tz + 2]),
                dz = new Uz.n(iz[Hz], iz[Hz + 1], iz[Hz + 2]),
                Fz = new Uz.n(iz[Oz], iz[Oz + 1], iz[Oz + 2]);
              if (uz) {
                const Mz = uz(pz, dz, Fz, bz, zz, tz, nz, Ez, iz, lz);
                if (Mz)
                  for (const zz of Mz) bz.push(zz)
              } else bz.push([pz, dz], [dz, Fz], [Fz, pz])
            }
        }
        return bz
      }
      static ToVector3Array(zz) {
        if (Array.isArray(zz[0])) {
          const uz = [],
            bz = zz;
          for (const zz of bz) {
            const bz = [];
            for (let uz = 0; uz < zz.length; uz += 3) bz.push(new Uz.n(zz[uz], zz[uz + 1], zz[uz + 2]));
            uz.push(bz)
          }
          return uz
        }
        const uz = zz,
          bz = [];
        for (let Ez = 0; Ez < uz.length; Ez += 3) bz.push(new Uz.n(uz[Ez], uz[Ez + 1], uz[Ez + 2]));
        return bz
      }
      static ToNumberArray(zz) {
        return zz.flatMap((zz => [zz.x, zz.y, zz.z]))
      }
      static GetPointsCountInfo(zz) {
        const uz = new Array(zz.length);
        let bz = 0;
        for (let Ez = zz.length; Ez--;) uz[Ez] = zz[Ez].length / 3, bz += uz[Ez];
        return {
          total: bz,
          counts: uz
        }
      }
      static GetLineLength(zz) {
        if (0 === zz.length) return 0;
        let uz;
        uz = "number" === typeof zz[0] ? fE.ToVector3Array(zz) : zz;
        const bz = Uz.l.ER[0];
        let Ez = 0;
        for (let nz = 0; nz < uz.length - 1; nz++) {
          const zz = uz[nz];
          Ez += uz[nz + 1].subtractToRef(zz, bz).length()
        }
        return Ez
      }
      static GetLineLengthArray(zz, uz) {
        const bz = uz ? new Float32Array(uz, 0, zz.length / 3) : new Float32Array(zz.length / 3);
        let Ez = 0;
        for (let nz = 0, iz = zz.length / 3 - 1; nz < iz; nz++) {
          let uz = zz[3 * nz + 0],
            iz = zz[3 * nz + 1],
            lz = zz[3 * nz + 2];
          uz -= zz[3 * nz + 3], iz -= zz[3 * nz + 4], lz -= zz[3 * nz + 5];
          Ez += Math.sqrt(uz * uz + iz * iz + lz * lz), bz[nz + 1] = Ez
        }
        return bz
      }
      static SegmentizeSegmentByCount(zz, uz, bz) {
        const Ez = [],
          nz = uz.subtract(zz),
          iz = Uz.l.ER[0];
        iz.Vk(bz);
        const lz = Uz.l.ER[1];
        nz.divideToRef(iz, lz);
        let Mz = zz.clone();
        Ez.push(Mz);
        for (let tz = 0; tz < bz; tz++) Mz = Mz.clone(), Ez.push(Mz.addInPlace(lz));
        return Ez
      }
      static SegmentizeLineBySegmentLength(zz, uz) {
        const bz = zz[0] instanceof Uz.n ? fE.GetLineSegments(zz) : "number" === typeof zz[0] ? fE.GetLineSegments(fE.ToVector3Array(zz)) : zz,
          Ez = [];
        for (const nz of bz)
          if (nz.length > uz) {
            const zz = fE.SegmentizeSegmentByCount(nz.point1, nz.point2, Math.ceil(nz.length / uz));
            for (const uz of zz) Ez.push(uz)
          } else Ez.push(nz.point1), Ez.push(nz.point2);
        return Ez
      }
      static SegmentizeLineBySegmentCount(zz, uz) {
        const bz = "number" === typeof zz[0] ? fE.ToVector3Array(zz) : zz,
          Ez = fE.GetLineLength(bz) / uz;
        return fE.SegmentizeLineBySegmentLength(bz, Ez)
      }
      static GetLineSegments(zz) {
        const uz = [];
        for (let bz = 0; bz < zz.length - 1; bz++) {
          const Ez = zz[bz],
            nz = zz[bz + 1],
            iz = nz.subtract(Ez).length();
          uz.push({
            point1: Ez,
            point2: nz,
            length: iz
          })
        }
        return uz
      }
      static GetMinMaxSegmentLength(zz) {
        const uz = fE.GetLineSegments(zz).sort((zz => zz.length));
        return {
          min: uz[0].length,
          max: uz[uz.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const nz = uz * bz;
        let iz = 0,
          lz = 0;
        const Mz = zz.length;
        for (let Hz = 0; Hz < Mz; Hz++) {
          if (nz <= iz + zz[Hz].length) {
            lz = Hz;
            break
          }
          iz += zz[Hz].length
        }
        const tz = (nz - iz) / zz[lz].length;
        return zz[lz].point2.subtractToRef(zz[lz].point1, Uz.l.ER[0]), Uz.l.ER[0].scaleToRef(tz, Uz.l.ER[1]), Ez || Uz.l.ER[1].addInPlace(zz[lz].point1), Uz.l.ER[1].clone()
      }
      static GetCircleLinePoints(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz,
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / uz;
        const iz = [];
        for (let lz = 0; lz <= uz; lz++) iz.push(new Uz.n(Math.cos(lz * nz) * zz, Math.sin(lz * nz) * Ez, bz));
        return iz
      }
      static GetBezierLinePoints(zz, uz, bz, Ez) {
        return RE.g.CreateQuadraticBezier(zz, uz, bz, Ez).getPoints().flatMap((zz => [zz.x, zz.y, zz.z]))
      }
      static GetArrowCap(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [zz.clone(), zz.add(uz.multiplyByFloats(bz, bz, bz))],
          widths: [Ez, nz, iz, lz]
        }
      }
      static GetPointsFromText(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          iz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const lz = [],
          Mz = XE(zz, uz, bz, Ez);
        for (const tz of Mz) {
          for (const zz of tz.paths) {
            const uz = [],
              bz = zz.getPoints();
            for (const zz of bz) uz.push(zz.x, zz.y, nz);
            lz.push(uz)
          }
          if (iz)
            for (const zz of tz.holes) {
              const uz = [],
                bz = zz.getPoints();
              for (const zz of bz) uz.push(zz.x, zz.y, nz);
              lz.push(uz)
            }
        }
        return lz
      }
      static Color3toRGBAUint8(zz) {
        const uz = new Uint8Array(4 * zz.length);
        for (let bz = 0, Ez = 0; bz < zz.length; bz++) uz[Ez++] = 255 * zz[bz].r, uz[Ez++] = 255 * zz[bz].g, uz[Ez++] = 255 * zz[bz].b, uz[Ez++] = 255;
        return uz
      }
      static CreateColorsTexture(zz, uz, bz, Ez) {
        const nz = Ez.uR().getCaps().maxTextureSize ?? 1,
          iz = uz.length > nz ? nz : uz.length,
          lz = Math.ceil(uz.length / nz);
        lz > 1 && (uz = [...uz, ...Array(iz * lz - uz.length).fill(uz[0])]);
        const Mz = fE.Color3toRGBAUint8(uz),
          tz = new oz.b(Mz, iz, lz, Ob.b.TEXTUREFORMAT_RGBA, Ez, !1, !0, bz);
        return tz.name = zz, tz
      }
      static PrepareEmptyColorsTexture(zz) {
        if (!ZE.EmptyColorsTexture) {
          const uz = new Uint8Array(4);
          ZE.EmptyColorsTexture = new oz.b(uz, 1, 1, Ob.b.TEXTUREFORMAT_RGBA, zz, !1, !1, oz.b.NEAREST_NEAREST), ZE.EmptyColorsTexture.name = "grlEmptyColorsTexture", ZE.EmptyColorsTexture.aT.addOnce((() => {
            ZE.EmptyColorsTexture = null
          }))
        }
        return ZE.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        ZE.EmptyColorsTexture?.dispose(), ZE.EmptyColorsTexture = null
      }
      static BooleanToNumber(zz) {
        return zz ? 1 : 0
      }
    }
    class sE extends gz.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class rE extends Sz.e {
      isCompatible(zz) {
        return !0
      }
      constructor(zz, uz, bz) {
        bz = bz || {
          color: ZE.DEFAULT_COLOR
        };
        const Ez = new sE;
        Ez.GREASED_LINE_HAS_COLOR = !!bz.color && !bz.useColors, Ez.GREASED_LINE_SIZE_ATTENUATION = bz.sizeAttenuation ?? !1, Ez.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === bz.colorDistributionType, Ez.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (uz ?? zz.XT()).useRightHandedSystem, Ez.GREASED_LINE_CAMERA_FACING = bz.cameraFacing ?? !0, super(zz, rE.GREASED_LINE_MATERIAL_NAME, 200, Ez, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = bz?.forceGLSL || rE.ForceGLSL, this._scene = uz ?? zz.XT(), this._engine = this._scene.uR(), this._cameraFacing = bz.cameraFacing ?? !0, this.visibility = bz.visibility ?? 1, this.useDash = bz.useDash ?? !1, this.dashRatio = bz.dashRatio ?? .5, this.dashOffset = bz.dashOffset ?? 0, this.width = bz.width ? bz.width : bz.sizeAttenuation ? ZE.DEFAULT_WIDTH_ATTENUATED : ZE.DEFAULT_WIDTH, this._sizeAttenuation = bz.sizeAttenuation ?? !1, this.colorMode = bz.colorMode ?? 0, this._color = bz.color ?? null, this.useColors = bz.useColors ?? !1, this._colorsDistributionType = bz.colorDistributionType ?? 0, this.colorsSampling = bz.colorsSampling ?? oz.b.NEAREST_NEAREST, this._colors = bz.colors ?? null, this.dashCount = bz.dashCount ?? 1, this.resolution = bz.resolution ?? new Uz.m(this._engine.getRenderWidth(), this._engine.getRenderHeight()), bz.colorsTexture ? this.colorsTexture = bz.colorsTexture : this._colors ? this.colorsTexture = fE.CreateColorsTexture(`${zz.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? ZE.DEFAULT_COLOR, fE.PrepareEmptyColorsTexture(this._scene)), this._engine.aT.add((() => {
          fE.DisposeEmptyColorsTexture()
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
        const uz = [{
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
        return this._cameraFacing && uz.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === zz && uz.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: uz,
          vertex: this._cameraFacing && this._isGLSL(zz) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(zz) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(zz) {
        if (this._cameraFacing) {
          zz.M_("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || zz.M_("viewProjection", this._scene.getTransformMatrix());
          const uz = Uz.l.Vector4[0];
          uz.x = this._aspect, uz.y = this._resolution.x, uz.z = this._resolution.y, uz.w = this.width, zz.updateVector4("grl_aspect_resolution_lineWidth", uz)
        }
        const uz = Uz.l.Vector4[0];
        uz.x = fE.BooleanToNumber(this.useDash), uz.y = this._dashArray, uz.z = this.dashOffset, uz.w = this.dashRatio, zz.updateVector4("grl_dashOptions", uz);
        const bz = Uz.l.Vector4[1];
        bz.x = this.colorMode, bz.y = this.visibility, bz.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, bz.w = fE.BooleanToNumber(this.useColors), zz.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", bz), this._color && zz.updateColor3("grl_singleColor", this._color);
        const Ez = this.colorsTexture ?? ZE.EmptyColorsTexture;
        zz.setTexture("grl_colors", Ez), zz.updateFloat2("grl_textureSize", Ez?.getSize().width ?? 1, Ez?.getSize().height ?? 1)
      }
      prepareDefines(zz, uz, bz) {
        zz.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, zz.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, zz.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, zz.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = uz.useRightHandedSystem, zz.GREASED_LINE_CAMERA_FACING = this._cameraFacing, zz.GREASED_LINE_USE_OFFSETS = !!bz.offsets
      }
      getClassName() {
        return rE.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(uz) ? function(zz, uz) {
          if ("vertex" === zz) {
            const zz = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return uz && (zz["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), zz
          }
          return "fragment" === zz ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(zz, this._cameraFacing) : function(zz, uz) {
          if ("vertex" === zz) {
            const zz = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return uz && (zz["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), zz
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
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ez = this._colors?.length ?? 0;
        if (this._colors = zz, null !== zz && 0 !== zz.length) {
          if (!uz || bz)
            if (this.colorsTexture && Ez === zz.length && !bz) {
              const uz = fE.Color3toRGBAUint8(zz);
              this.colorsTexture.update(uz)
            } else this.colorsTexture?.dispose(), this.colorsTexture = fE.CreateColorsTexture(`${this._material.name}-colors-texture`, zz, this.colorsSampling, this._scene)
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
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== zz || null !== this._color && null === zz ? (this._color = zz, uz || this.markAllDefinesAsDirty()) : this._color = zz
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
          uz = {
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
        return this._colors && (uz.colors = this._colors), this._color && (uz.color = this._color), zz.greasedLineMaterialOptions = uz, zz
      }
      parse(zz, uz, bz) {
        super.parse(zz, uz, bz);
        const Ez = zz.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Ez.color && this.setColor(Ez.color, !0), Ez.colorDistributionType && (this.colorsDistributionType = Ez.colorDistributionType), Ez.colors && (this.colors = Ez.colors), Ez.colorsSampling && (this.colorsSampling = Ez.colorsSampling), Ez.colorMode && (this.colorMode = Ez.colorMode), Ez.useColors && (this.useColors = Ez.useColors), Ez.visibility && (this.visibility = Ez.visibility), Ez.useDash && (this.useDash = Ez.useDash), Ez.dashCount && (this.dashCount = Ez.dashCount), Ez.dashRatio && (this.dashRatio = Ez.dashRatio), Ez.dashOffset && (this.dashOffset = Ez.dashOffset), Ez.width && (this.width = Ez.width), Ez.sizeAttenuation && (this.sizeAttenuation = Ez.sizeAttenuation), Ez.resolution && (this.resolution = Ez.resolution), this.colors ? this.colorsTexture = fE.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, uz) : fE.PrepareEmptyColorsTexture(uz), this.markAllDefinesAsDirty()
      }
      copyTo(zz) {
        const uz = zz;
        uz.colorsTexture?.dispose(), this._colors && (uz.colorsTexture = fE.CreateColorsTexture(`${uz._material.name}-colors-texture`, this._colors, uz.colorsSampling, this._scene)), uz.setColor(this.color, !0), uz.colorsDistributionType = this.colorsDistributionType, uz.colorsSampling = this.colorsSampling, uz.colorMode = this.colorMode, uz.useColors = this.useColors, uz.visibility = this.visibility, uz.useDash = this.useDash, uz.dashCount = this.dashCount, uz.dashRatio = this.dashRatio, uz.dashOffset = this.dashOffset, uz.width = this.width, uz.sizeAttenuation = this.sizeAttenuation, uz.resolution = this.resolution, uz.markAllDefinesAsDirty()
      }
      _isGLSL(zz) {
        return 0 === zz || this._forceGLSL
      }
    }
    rE.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", rE.ForceGLSL = !1;
    var oE = bz(39584),
      NE = bz(39596),
      vE = bz(38054),
      xE = bz(39634),
      JE = bz(39013);
    class AE extends xE.p {
      constructor(zz, uz, Ez) {
        const nz = uz.uR(),
          iz = nz.isWebGPU && !(Ez.forceGLSL || AE.ForceGLSL),
          lz = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        uz.useRightHandedSystem && lz.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const Mz = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Ez.cameraFacing ? (lz.push("GREASED_LINE_CAMERA_FACING"), Mz.push("grl_previousAndSide", "grl_nextAndCounters")) : (Mz.push("grl_slopes"), Mz.push("grl_counters"));
        const tz = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (iz || tz.push("world", "viewProjection", "view", "projection"), super(zz, uz, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: iz ? ["Scene", "Mesh"] : void 0,
            attributes: Mz,
            uniforms: tz,
            samplers: iz ? [] : ["grlColors"],
            defines: lz,
            extraInitializationsAsync: async () => {
              iz ? await Promise.all([bz.e(324).then((() => bz(61040))), bz.e(383).then((() => bz(61043)))]) : await Promise.all([bz.e(317).then((() => bz(61048))), bz.e(384).then((() => bz(61057)))])
            },
            shaderLanguage: iz ? 1 : 0
          }), this._color = Wz.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Ez = Ez || {
            color: ZE.DEFAULT_COLOR
          }, this.visibility = Ez.visibility ?? 1, this.useDash = Ez.useDash ?? !1, this.dashRatio = Ez.dashRatio ?? .5, this.dashOffset = Ez.dashOffset ?? 0, this.dashCount = Ez.dashCount ?? 1, this.width = Ez.width ? Ez.width : Ez.sizeAttenuation && Ez.cameraFacing ? ZE.DEFAULT_WIDTH_ATTENUATED : ZE.DEFAULT_WIDTH, this.sizeAttenuation = Ez.sizeAttenuation ?? !1, this.color = Ez.color ?? Wz.c.White(), this.useColors = Ez.useColors ?? !1, this.colorsDistributionType = Ez.colorDistributionType ?? 0, this.colorsSampling = Ez.colorsSampling ?? oz.b.NEAREST_NEAREST, this.colorMode = Ez.colorMode ?? 0, this._colors = Ez.colors ?? null, this._cameraFacing = Ez.cameraFacing ?? !0, this.resolution = Ez.resolution ?? new Uz.m(nz.getRenderWidth(), nz.getRenderHeight()), Ez.colorsTexture ? this.colorsTexture = Ez.colorsTexture : this._colors ? this.colorsTexture = fE.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, uz) : (this._color = this._color ?? ZE.DEFAULT_COLOR, this.colorsTexture = fE.PrepareEmptyColorsTexture(uz)), iz) {
          const zz = new JE.c;
          zz.setParameters(), zz.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", zz)
        }
        nz.aT.add((() => {
          fE.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== ZE.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Uz.m(this._colorMode, this._colorsDistributionType))
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
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ez = this._colors?.length ?? 0;
        if (this._colors = zz, null !== zz && 0 !== zz.length) {
          if (!uz || bz)
            if (this._colorsTexture && Ez === zz.length && !bz) {
              const uz = fE.Color3toRGBAUint8(zz);
              this._colorsTexture.update(uz)
            } else this._colorsTexture && this._colorsTexture !== ZE.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = fE.CreateColorsTexture(`${this.name}-colors-texture`, zz, this.colorsSampling, this.XT())
        } else {
          this._colorsTexture && this._colorsTexture !== ZE.EmptyColorsTexture && this._colorsTexture.dispose();
          const zz = this.XT();
          zz && (this.colorsTexture = fE.PrepareEmptyColorsTexture(zz))
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
        this._useColors = zz, this.setFloat("grlUseColors", fE.BooleanToNumber(zz))
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
        this._useDash = zz, this.setFloat("grlUseDash", fE.BooleanToNumber(zz))
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
        this._sizeAttenuation = zz, this.setFloat("grlSizeAttenuation", fE.BooleanToNumber(zz))
      }
      get color() {
        return this._color
      }
      set color(zz) {
        this.setColor(zz)
      }
      setColor(zz) {
        zz = zz ?? ZE.DEFAULT_COLOR, this._color = zz, this.setColor3("grlColor", zz)
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
          uz = {
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
        return this._colors && (uz.colors = this._colors), zz.greasedLineMaterialOptions = uz, zz
      }
      parse(zz, uz, bz) {
        const Ez = zz.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Ez.color && (this.color = Ez.color), Ez.colorDistributionType && (this.colorsDistributionType = Ez.colorDistributionType), Ez.colorsSampling && (this.colorsSampling = Ez.colorsSampling), Ez.colorMode && (this.colorMode = Ez.colorMode), Ez.useColors && (this.useColors = Ez.useColors), Ez.visibility && (this.visibility = Ez.visibility), Ez.useDash && (this.useDash = Ez.useDash), Ez.dashCount && (this.dashCount = Ez.dashCount), Ez.dashRatio && (this.dashRatio = Ez.dashRatio), Ez.dashOffset && (this.dashOffset = Ez.dashOffset), Ez.width && (this.width = Ez.width), Ez.sizeAttenuation && (this.sizeAttenuation = Ez.sizeAttenuation), Ez.resolution && (this.resolution = Ez.resolution), Ez.colors ? this.colorsTexture = fE.CreateColorsTexture(`${this.name}-colors-texture`, Ez.colors, this.colorsSampling, this.XT()) : this.colorsTexture = fE.PrepareEmptyColorsTexture(uz), this._cameraFacing = Ez.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var TE, LE, PE;
    AE.ForceGLSL = !1,
      function(zz) {
        zz[zz.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", zz[zz.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(TE || (TE = {})),
      function(zz) {
        zz[zz.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", zz[zz.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", zz[zz.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(LE || (LE = {})),
      function(zz) {
        zz[zz.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", zz[zz.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", zz[zz.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", zz[zz.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", zz[zz.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(PE || (PE = {}));
    class GE extends oE.c {
      constructor(zz, uz, bz) {
        super(zz, uz, null, null, !1, !1), this.name = zz, this._options = bz, this._lazy = !1, this._updatable = !1, this._engine = uz.uR(), this._lazy = bz.lazy ?? !1, this._updatable = bz.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = bz.colorPointers ?? [], this._widths = bz.widths ?? new Array(bz.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(zz) {
        let uz = 0;
        for (const Ez of this._points) uz += Ez.length;
        const bz = uz / 3 * 2 - this._widths.length;
        for (let Ez = 0; Ez < bz; Ez++) this._widths.push(zz)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.iR && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(zz, uz) {
        for (const bz of zz) this._points.push(bz);
        this._lazy || this.setPoints(this._points, uz)
      }
      dispose(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(zz, uz)
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
        this.material instanceof AE && this.material.setDefine("GREASED_LINE_USE_OFFSETS", zz?.length > 0), this._offsets = zz, this._offsetsBuffer ? this._offsetsBuffer.update(zz) : this._createOffsetsBuffer(zz)
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
        if (this.material && this.material instanceof AE) return this.material;
        const zz = this.material?.pluginManager?.getPlugin(rE.GREASED_LINE_MATERIAL_NAME);
        return zz || void 0
      }
      get points() {
        const zz = [];
        return vE.b.DeepCopy(this._points, zz), zz
      }
      setPoints(zz, uz) {
        this._points = fE.ConvertPoints(zz, uz?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), uz?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, uz)
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
        const uz = new NE.b;
        return uz.positions = this._vertexPositions, uz.indices = this._indices, uz.uvs = this._uvs, zz && (uz.normals = [], NE.b.ComputeNormals(this._vertexPositions, this._indices, uz.normals)), uz.applyToMesh(this, this._options.updatable), uz
      }
      _createOffsetsBuffer(zz) {
        const uz = this._scene.uR(),
          bz = new cz.c(uz, zz, this._updatable, 3);
        this.setVerticesBuffer(bz.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = bz
      }
    }
    class aE {
      constructor(zz, uz) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = zz, this.wasAddedByNoopNode = uz
      }
      getIndicesAccessor(zz, uz, bz, Ez, nz) {
        return this._indicesAccessorMap.get(zz)?.get(uz)?.get(bz)?.get(Ez)?.get(nz)
      }
      setIndicesAccessor(zz, uz, bz, Ez, nz, iz) {
        let lz = this._indicesAccessorMap.get(zz);
        lz || (lz = new Map, this._indicesAccessorMap.set(zz, lz));
        let Mz = lz.get(uz);
        Mz || (Mz = new Map, lz.set(uz, Mz));
        let tz = Mz.get(bz);
        tz || (tz = new Map, Mz.set(bz, tz));
        let Hz = tz.get(Ez);
        Hz || (Hz = new Map, tz.set(Ez, Hz)), Hz.set(nz, iz)
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
      setVertexBufferView(zz, uz) {
        this._vertexBufferViewMap.set(zz, uz)
      }
      setRemappedBufferView(zz, uz, bz) {
        this._remappedBufferView.set(zz, new Map), this._remappedBufferView.get(zz).set(uz, bz)
      }
      getRemappedBufferView(zz, uz) {
        return this._remappedBufferView.get(zz)?.get(uz)
      }
      getVertexAccessor(zz, uz, bz) {
        return this._vertexAccessorMap.get(zz)?.get(uz)?.get(bz)
      }
      setVertexAccessor(zz, uz, bz, Ez) {
        let nz = this._vertexAccessorMap.get(zz);
        nz || (nz = new Map, this._vertexAccessorMap.set(zz, nz));
        let iz = nz.get(uz);
        iz || (iz = new Map, nz.set(uz, iz)), iz.set(bz, Ez)
      }
      hasVertexColorAlpha(zz) {
        return this._vertexMapColorAlpha.get(zz) || !1
      }
      setHasVertexColorAlpha(zz, uz) {
        return this._vertexMapColorAlpha.set(zz, uz)
      }
      getMesh(zz) {
        return this._meshMap.get(zz)
      }
      setMesh(zz, uz) {
        this._meshMap.set(zz, uz)
      }
      bindMorphDataToMesh(zz, uz) {
        const bz = this._meshMorphTargetMap.get(zz) || [];
        this._meshMorphTargetMap.set(zz, bz), -1 === bz.indexOf(uz) && bz.push(uz)
      }
      getMorphTargetsFromMesh(zz) {
        return this._meshMorphTargetMap.get(zz)
      }
    }
    class VE {
      _ApplyExtension(zz, uz, bz, Ez) {
        if (bz >= uz.length) return Promise.resolve(zz);
        const nz = Ez(uz[bz], zz);
        return nz ? nz.then((async zz => zz ? await this._ApplyExtension(zz, uz, bz + 1, Ez) : null)) : this._ApplyExtension(zz, uz, bz + 1, Ez)
      }
      _ApplyExtensions(zz, uz) {
        const bz = [];
        for (const Ez of VE._ExtensionNames) bz.push(this._extensions[Ez]);
        return this._ApplyExtension(zz, bz, 0, uz)
      }
      _extensionsPostExportNodeAsync(zz, uz, bz, Ez, nz) {
        return this._ApplyExtensions(uz, ((uz, iz) => uz.postExportNodeAsync && uz.postExportNodeAsync(zz, iz, bz, Ez, nz, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(zz, uz, bz) {
        return this._ApplyExtensions(uz, ((uz, Ez) => uz.postExportMaterialAsync && uz.postExportMaterialAsync(zz, Ez, bz)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(zz, uz, bz) {
        const Ez = [];
        return await Promise.all(VE._ExtensionNames.map((async nz => {
          const iz = this._extensions[nz];
          if (iz.postExportMaterialAdditionalTexturesAsync) {
            const nz = await iz.postExportMaterialAdditionalTexturesAsync(zz, uz, bz);
            Ez.push(...nz)
          }
        }))), Ez
      }
      _extensionsPostExportTextures(zz, uz, bz) {
        for (const Ez of VE._ExtensionNames) {
          const nz = this._extensions[Ez];
          nz.postExportTexture && nz.postExportTexture(zz, uz, bz)
        }
      }
      _extensionsPostExportMeshPrimitive(zz) {
        for (const uz of VE._ExtensionNames) {
          const bz = this._extensions[uz];
          bz.postExportMeshPrimitive && bz.postExportMeshPrimitive(zz, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const zz of VE._ExtensionNames) {
          const uz = this._extensions[zz];
          uz.preGenerateBinaryAsync && await uz.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(zz) {
        for (const uz of VE._ExtensionNames) {
          const bz = this._extensions[uz];
          bz.enabled && zz(bz)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((zz => {
          var uz, bz, Ez;
          zz.wasUsed && ((uz = this._glTF).extensionsUsed || (uz.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(zz.name) && this._glTF.extensionsUsed.push(zz.name), zz.required && ((bz = this._glTF).extensionsRequired || (bz.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(zz.name) && this._glTF.extensionsRequired.push(zz.name)), (Ez = this._glTF).extensions || (Ez.extensions = {}), zz.onExporting && zz.onExporting())
        }))
      }
      _loadExtensions() {
        for (const zz of VE._ExtensionNames) {
          const uz = VE._ExtensionFactories[zz](this);
          this._extensions[zz] = uz
        }
      }
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rz.d.LastCreatedScene,
          uz = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${Zz.c.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new Lb(this), this._extensions = {}, this._bufferManager = new bE, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !zz) throw new Error("No scene available to export");
        this._babylonScene = zz, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: zz => zz?.JA?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...uz
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
      static RegisterExtension(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        VE.UnregisterExtension(zz) && nz.Tools.Warn(`Extension with the name ${zz} already exists`), VE._ExtensionFactories[zz] = uz;
        const Ez = bz ?? 0;
        VE._ExtensionOrders[zz] = Ez;
        let iz = VE._ExtensionNames.length;
        for (let nz = 0; nz < VE._ExtensionNames.length; nz++) {
          const zz = VE._ExtensionNames[nz];
          if (Ez < VE._ExtensionOrders[zz]) {
            iz = nz;
            break
          }
        }
        VE._ExtensionNames.splice(iz, 0, zz)
      }
      static UnregisterExtension(zz) {
        if (!VE._ExtensionFactories[zz]) return !1;
        delete VE._ExtensionFactories[zz], delete VE._ExtensionOrders[zz];
        const uz = VE._ExtensionNames.indexOf(zz);
        return -1 !== uz && VE._ExtensionNames.splice(uz, 1), !0
      }
      _generateJSON(zz, uz, bz) {
        const Ez = {
          byteLength: zz
        };
        return Ez.byteLength && (this._glTF.buffers = [Ez]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.tK = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Ez.uri = uz + ".bin"), bz ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(zz) {
        const uz = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const bz = this._generateJSON(uz.byteLength, zz, !0),
          Ez = new Blob([uz], {
            type: "application/octet-stream"
          }),
          nz = zz + ".gltf",
          iz = zz + ".bin",
          lz = new Hz;
        if (lz.files[nz] = bz, lz.files[iz] = Ez, this._imageData)
          for (const Mz in this._imageData) lz.files[Mz] = this._imageData[Mz];
        return lz
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(zz) {
        const uz = zz % 4;
        return 0 === uz ? uz : 4 - uz
      }
      async generateGLBAsync(zz) {
        this._shouldUseGlb = !0;
        const uz = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const bz = this._generateJSON(uz.byteLength),
          Ez = zz + ".glb";
        let nz, iz = bz.length;
        if ("undefined" !== typeof TextEncoder) {
          nz = (new TextEncoder).encode(bz), iz = nz.length
        }
        const lz = this._getPadding(iz),
          Mz = this._getPadding(uz.byteLength),
          tz = 28 + iz + lz + uz.byteLength + Mz,
          Oz = new zE(tz);
        if (Oz.writeUInt32(1179937895), Oz.writeUInt32(2), Oz.writeUInt32(tz), Oz.writeUInt32(iz + lz), Oz.writeUInt32(1313821514), nz) Oz.writeTypedArray(nz);
        else {
          const zz = "_".charCodeAt(0);
          for (let uz = 0; uz < iz; ++uz) {
            const Ez = bz.charCodeAt(uz);
            Ez != bz.codePointAt(uz) ? Oz.writeUInt8(zz) : Oz.writeUInt8(Ez)
          }
        }
        for (let Hz = 0; Hz < lz; ++Hz) Oz.writeUInt8(32);
        Oz.writeUInt32(uz.byteLength + Mz), Oz.writeUInt32(5130562), Oz.writeTypedArray(uz);
        for (let Hz = 0; Hz < Mz; ++Hz) Oz.writeUInt8(0);
        const pz = new Hz;
        return pz.files[Ez] = new Blob([Oz.getOutputData()], {
          type: "application/octet-stream"
        }), pz
      }
      _setNodeTransformation(zz, uz, bz) {
        if (uz.getPivotPoint().equalsWithEpsilon(qb, ab.b) || nz.Tools.Warn("Pivot points are not supported in the glTF serializer"), !uz.position.equalsWithEpsilon(qb, ab.b)) {
          const nz = Ez.TmpVectors.ER[0].euz(uz.position);
          bz && Qb(nz), zz.translation = nz.obz()
        }
        uz.ti.equalsWithEpsilon(Ub, ab.b) || (zz.scale = uz.ti.obz());
        const iz = uz.rotationQuaternion?.clone() || Ez.Quaternion.FromEulerAngles(uz.rotation.x, uz.rotation.y, uz.rotation.z);
        iz.equalsWithEpsilon(hb, ab.b) || (bz && Wb(iz), zz.rotation = iz.normalize().obz())
      }
      _setCameraTransformation(zz, uz, bz) {
        const nz = Ez.TmpVectors.ER[0],
          iz = Ez.TmpVectors.Quaternion[0],
          lz = uz.getWorldMatrix();
        if (uz.parent) {
          const zz = uz.parent.getWorldMatrix().invertToRef(Ez.TmpVectors.Matrix[0]);
          lz.multiplyToRef(zz, Ez.TmpVectors.Matrix[1]).decompose(void 0, iz, nz)
        } else lz.decompose(void 0, iz, nz);
        nz.equalsWithEpsilon(qb, ab.b) || (bz && Qb(nz), zz.translation = nz.obz()), bz && Wb(iz), this._babylonScene.useRightHandedSystem || eb(iz), iz.equalsWithEpsilon(hb, ab.b) || (zz.rotation = iz.obz())
      }
      _listAvailableCameras() {
        for (const zz of this._babylonScene.cameras) {
          const uz = {
            type: zz.mode === EE.d.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (zz.name && (uz.name = zz.name), "perspective" === uz.type) uz.perspective = {
            aspectRatio: zz.uR().getAspectRatio(zz),
            yfov: zz.fovMode === EE.d.FOVMODE_VERTICAL_FIXED ? zz.fov : zz.fov * zz.uR().getAspectRatio(zz),
            znear: zz.minZ,
            zfar: zz.maxZ
          };
          else if ("orthographic" === uz.type) {
            const bz = zz.orthoLeft && zz.orthoRight ? .5 * (zz.orthoRight - zz.orthoLeft) : .5 * zz.uR().getRenderWidth(),
              Ez = zz.orthoBottom && zz.orthoTop ? .5 * (zz.orthoTop - zz.orthoBottom) : .5 * zz.uR().getRenderHeight();
            uz.orthographic = {
              xmag: bz,
              ymag: Ez,
              znear: zz.minZ,
              zfar: zz.maxZ
            }
          }
          this._camerasMap.set(zz, uz)
        }
      }
      _exportAndAssignCameras() {
        const zz = Array.from(this._camerasMap.values());
        for (const uz of zz) {
          const zz = this._nodesCameraMap.get(uz);
          if (void 0 !== zz) {
            this._cameras.push(uz);
            for (const uz of zz) uz.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const zz of this._babylonScene.skeletons) {
          if (zz.bones.length <= 0) continue;
          const uz = {
            joints: []
          };
          this._skinMap.set(zz, uz)
        }
      }
      _exportAndAssignSkeletons(zz) {
        for (const bz of this._babylonScene.skeletons) {
          if (bz.bones.length <= 0) continue;
          const iz = this._skinMap.get(bz);
          if (void 0 == iz) continue;
          const lz = {};
          let Mz = -1;
          for (let zz = 0; zz < bz.bones.length; ++zz) {
            const uz = bz.bones[zz],
              Ez = uz.getIndex() ?? zz; - 1 !== Ez && (lz[Ez] = uz, Ez > Mz && (Mz = Ez))
          }
          const tz = [];
          for (let bz = 0; bz <= Mz; ++bz) {
            const Mz = lz[bz],
              Hz = Mz.getTransformNode(),
              Oz = Hz ? this._nodeMap.get(Hz) : void 0;
            if (void 0 === Oz) {
              nz.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            iz.joints.push(Oz);
            const pz = Mz.getAbsoluteInverseBindMatrix().clone();
            zz.has(Hz) && (uz = pz, Vb.invertToRef(Ez.TmpVectors.Matrix[0]).multiplyToRef(uz, uz).multiplyToRef(Vb, uz)), tz.push(pz)
          }
          const Hz = this._nodesSkinMap.get(iz);
          if (iz.joints.length > 0 && void 0 !== Hz) {
            const zz = new Float32Array(16 * tz.length);
            tz.forEach(((uz, bz) => {
              zz.set(uz.m, 16 * bz)
            }));
            const uz = this._bufferManager.createBufferView(zz);
            this._accessors.push(this._bufferManager.createAccessor(uz, "MAT4", 5126, tz.length)), iz.inverseBindMatrices = this._accessors.length - 1, this._skins.push(iz);
            const bz = this._skins.length - 1;
            for (const Ez of Hz) Ez.skin = bz
          }
        }
        var uz
      }
      async _exportSceneAsync() {
        const zz = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const uz = this._options.metadataSelector(this._babylonScene.metadata);
          uz && (zz.extras = uz)
        }
        const uz = new Array,
          bz = new Array,
          Ez = new Array,
          nz = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let iz;
        if (nz && !this._options.includeCoordinateSystemConversionNodes)
          for (const Hz of this._babylonScene.animationGroups)
            for (const zz of Hz.targetedAnimations) {
              const uz = zz.target;
              uz instanceof pz.e && !uz.parent && (iz ?? (iz = new Set)).add(uz)
            }
        for (const Hz of this._babylonScene.rootNodes) {
          const zz = Hz.animations,
            lz = !!zz && zz.length > 0 || iz?.has(Hz);
          nz && !this._options.includeCoordinateSystemConversionNodes && mb(Hz, this._babylonScene.useRightHandedSystem) && !lz ? Ez.push(...Hz.getChildren()) : this._babylonScene.useRightHandedSystem ? uz.push(Hz) : bz.push(Hz)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const lz = new aE(!0, !1);
        zz.nodes.push(...await this._exportNodesAsync(bz, lz));
        const Mz = new aE(!1, !1);
        zz.nodes.push(...await this._exportNodesAsync(uz, Mz));
        const tz = new aE(!1, !0);
        zz.nodes.push(...await this._exportNodesAsync(Ez, tz)), zz.nodes.length && this._scenes.push(zz), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(lz.getNodesSet()), this._babylonScene.animationGroups.length && pE._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, lz.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(zz) {
        return this._nodeMap.get(zz)
      }
      _getAnimationIndex(zz) {
        return this._animationGroupMap.get(zz)
      }
      _getCameraIndex(zz) {
        const uz = this._camerasMap.get(zz);
        if (!uz) return;
        const bz = this._cameras.indexOf(uz);
        return bz >= 0 ? bz : void 0
      }
      _getMaterialIndex(zz) {
        return this._materialMap.get(zz)
      }
      _getRootIndex(zz, uz) {
        switch (zz) {
          case "nodes":
            return this._getNodeIndex(uz);
          case "animations":
            return this._getAnimationIndex(uz);
          case "cameras":
            return this._getCameraIndex(uz);
          case "materials":
            return this._getMaterialIndex(uz);
          case "meshes": {
            const zz = this._getNodeIndex(uz);
            return void 0 === zz ? void 0 : this._nodes[zz]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(uz)?.index;
          case "images": {
            const zz = this._materialExporter.getTextureInfo(uz)?.index;
            if (void 0 === zz) return;
            const bz = this._textures[zz];
            for (const uz of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const zz = bz?.extensions?.[uz]?.source;
              if ("number" === typeof zz) return zz
            }
            return bz?.source
          }
          case "samplers": {
            const zz = this._materialExporter.getTextureInfo(uz)?.index;
            return void 0 === zz ? void 0 : this._textures[zz]?.sampler
          }
          case "skins": {
            const zz = this._skinMap.get(uz),
              bz = zz ? this._skins.indexOf(zz) : -1;
            return bz >= 0 ? bz : void 0
          }
          case "scenes":
            return uz === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(zz, uz, bz) {
        const Ez = this._nodes[zz];
        if (!Ez) throw new Error(`Cannot write ${uz}: glTF node ${zz} does not exist.`);
        Ez.extensions || (Ez.extensions = {}), Ez.extensions[uz] = bz
      }
      _shouldExportNode(zz) {
        let uz = this._shouldExportNodeMap.get(zz);
        return void 0 === uz && (uz = this._options.shouldExportNode(zz), this._shouldExportNodeMap.set(zz, uz)), uz
      }
      async _exportNodesAsync(zz, uz) {
        const bz = new Array;
        this._exportBuffers(zz, uz);
        for (const Ez of zz) await this._exportNodeAsync(Ez, bz, uz);
        return bz
      }
      _collectBuffers(zz, uz, bz, Ez, nz) {
        if (this._shouldExportNode(zz) && zz instanceof dz.d && zz.geometry) {
          const iz = zz.geometry.getVertexBuffers();
          if (iz)
            for (const Ez in iz) {
              if (!yb(Ez)) continue;
              const lz = iz[Ez];
              nz.setHasVertexColorAlpha(lz, zz.hasVertexAlpha);
              const Mz = lz._buffer,
                tz = uz.get(Mz) || [];
              uz.set(Mz, tz), -1 === tz.indexOf(lz) && tz.push(lz);
              const Hz = bz.get(lz) || [];
              bz.set(lz, Hz), -1 === Hz.indexOf(zz) && Hz.push(zz)
            }
          const lz = zz.morphTargetManager;
          if (lz)
            for (let uz = 0; uz < lz.numTargets; uz++) {
              const bz = lz.getTarget(uz),
                nz = Ez.get(bz) || [];
              Ez.set(bz, nz), -1 === nz.indexOf(zz) && nz.push(zz)
            }
        }
        for (const iz of zz.getChildren()) this._collectBuffers(iz, uz, bz, Ez, nz)
      }
      _exportBuffers(zz, uz) {
        const bz = new Map,
          Ez = new Map,
          nz = new Map;
        for (const Mz of zz) this._collectBuffers(Mz, bz, Ez, nz, uz);
        const iz = Array.from(bz.keys());
        for (const Mz of iz) {
          const zz = Mz.getData();
          if (!zz) throw new Error("Buffer data is not available");
          const nz = bz.get(Mz);
          if (!nz) continue;
          const iz = nz[0].byteStride;
          if (nz.some((zz => zz.byteStride !== iz))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const lz = Bb(zz).slice();
          for (const uz of nz) {
            const zz = Ez.get(uz),
              {
                byteOffset: bz,
                byteStride: nz,
                componentCount: iz,
                type: Mz,
                count: tz,
                normalized: Hz,
                kind: pz
              } = gb(uz, zz);
            switch (pz) {
              case Oz.d.NormalKind:
              case Oz.d.TangentKind:
                (0, Pb.k)(lz, bz, nz, iz, Mz, tz, Hz, (zz => {
                  const uz = Math.sqrt(zz[0] * zz[0] + zz[1] * zz[1] + zz[2] * zz[2]);
                  if (uz > 0) {
                    const bz = 1 / uz;
                    zz[0] *= bz, zz[1] *= bz, zz[2] *= bz
                  }
                }));
                break;
              case Oz.d.ColorKind: {
                const uz = zz.filter((zz => zz.material instanceof iE.StandardMaterial || null == zz.material)).length;
                if (0 == uz) break;
                if (uz != zz.length) {
                  Az.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                Mz == Oz.d.UNSIGNED_BYTE && Az.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Ez = new Kz.Color3,
                  pz = new Kz.d,
                  dz = this._babylonScene.uR().useExactSrgbConversions;
                (0, Pb.k)(lz, bz, nz, iz, Mz, tz, Hz, (zz => {
                  3 === zz.length ? (Ez.Fuz(zz, 0), Ez.toLinearSpaceToRef(Ez, dz), Ez.toArray(zz, 0)) : (pz.Fuz(zz, 0), pz.toLinearSpaceToRef(pz, dz), pz.toArray(zz, 0))
                }))
              }
            }
          }
          if (uz.convertToRightHanded) {
            for (const zz of nz) {
              const uz = Ez.get(zz),
                {
                  byteOffset: bz,
                  byteStride: nz,
                  componentCount: iz,
                  type: Mz,
                  count: tz,
                  normalized: Hz,
                  kind: pz
                } = gb(zz, uz);
              switch (pz) {
                case Oz.d.PositionKind:
                case Oz.d.NormalKind:
                case Oz.d.TangentKind:
                  (0, Pb.k)(lz, bz, nz, iz, Mz, tz, Hz, (zz => {
                    zz[0] = -zz[0]
                  }))
              }
            }
            uz.convertedToRightHandedBuffers.set(Mz, lz)
          }
          const tz = this._bufferManager.createBufferView(lz, iz);
          uz.setVertexBufferView(Mz, tz);
          const Hz = new Map;
          for (const uz of nz) {
            const zz = Ez.get(uz),
              {
                kind: bz,
                totalVertices: nz
              } = gb(uz, zz);
            switch (bz) {
              case Oz.d.MatricesIndicesKind:
              case Oz.d.MatricesIndicesExtraKind:
                if (uz.type == Oz.d.FLOAT) {
                  const zz = uz.getFloatData(nz);
                  null !== zz && Hz.set(uz, zz)
                }
            }
          }
          0 !== Hz.size && Az.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const pz = Array.from(Hz.keys());
          for (const bz of pz) {
            const zz = Hz.get(bz);
            if (!zz) continue;
            const Ez = zz.some((zz => zz >= 256)),
              nz = new(Ez ? Uint16Array : Uint8Array)(zz.length);
            for (let uz = 0; uz < zz.length; uz++) nz[uz] = zz[uz];
            const iz = this._bufferManager.createBufferView(nz, 4 * (Ez ? 2 : 1));
            uz.setRemappedBufferView(Mz, bz, iz)
          }
        }
        const lz = Array.from(nz.keys());
        for (const Mz of lz) {
          const zz = nz.get(Mz);
          if (!zz) continue;
          const bz = dE(Mz, zz[0], this._bufferManager, this._bufferViews, this._accessors, uz.convertToRightHanded);
          for (const Ez of zz) uz.bindMorphDataToMesh(Ez, bz)
        }
      }
      async _exportNodeAsync(zz, uz, bz) {
        let Ez = this._nodeMap.get(zz);
        if (void 0 !== Ez) return void(uz.includes(Ez) || uz.push(Ez));
        const nz = await this._createNodeAsync(zz, bz);
        if (nz) {
          Ez = this._nodes.length, this._nodes.push(nz), this._nodeMap.set(zz, Ez), bz.pushExportedNode(zz), uz.push(Ez);
          const iz = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            lz = [];
          this._babylonScene.animationGroups.length || (pE._CreateMorphTargetAnimationFromMorphTargetAnimations(zz, iz, lz, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, bz.convertToRightHanded, this._options.shouldExportAnimation), zz.animations.length && pE._CreateNodeAnimationFromNodeAnimations(zz, iz, lz, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, bz.convertToRightHanded, this._options.shouldExportAnimation)), iz.channels.length && iz.samplers.length && this._animations.push(iz), lz.forEach((zz => {
            zz.channels.length && zz.samplers.length && this._animations.push(zz)
          }))
        }
        const iz = nz ? [] : uz;
        for (const lz of zz.getChildren()) await this._exportNodeAsync(lz, iz, bz);
        nz && iz.length && (nz.children = iz)
      }
      async _createNodeAsync(zz, uz) {
        if (!this._shouldExportNode(zz)) return null;
        const bz = {};
        if (zz.name && (bz.name = zz.name), zz.metadata) {
          const uz = this._options.metadataSelector(zz.metadata);
          uz && (bz.extras = uz)
        }
        if (zz instanceof pz.e && (this._setNodeTransformation(bz, zz, uz.convertToRightHanded), zz instanceof dz.d)) {
          const Ez = zz instanceof Fz.c ? zz.wEz : zz;
          if (Ez.hN && Ez.hN.length > 0 && (bz.mesh = await this._exportMeshAsync(Ez, uz)), zz.skeleton) {
            const uz = this._skinMap.get(zz.skeleton);
            void 0 !== uz && (void 0 === this._nodesSkinMap.get(uz) && this._nodesSkinMap.set(uz, []), this._nodesSkinMap.get(uz)?.push(bz))
          }
        }
        if (zz instanceof Gb.i) {
          const Ez = this._camerasMap.get(zz);
          if (Ez) {
            void 0 === this._nodesCameraMap.get(Ez) && this._nodesCameraMap.set(Ez, []), this._setCameraTransformation(bz, zz, uz.convertToRightHanded);
            const nz = zz.parent;
            if (null !== nz && Ib(zz, nz)) {
              const zz = this._nodeMap.get(nz);
              if (void 0 !== zz) {
                const uz = this._nodes[zz];
                return jb(bz, uz), this._nodesCameraMap.get(Ez)?.push(uz), null
              }
            }
            this._nodesCameraMap.get(Ez)?.push(bz)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", bz, zz, this._nodeMap, uz.convertToRightHanded) ? bz : (Az.e.Warn(`Not exporting node ${zz.name}`), null)
      }
      _exportIndices(zz, uz, bz, Ez, nz, lz, Mz, tz, Hz) {
        let Oz = null;
        Hz.mode = function(zz) {
          switch (zz) {
            case iz.c.TriangleFillMode:
              return 4;
            case iz.c.TriangleStripDrawMode:
              return 5;
            case iz.c.TriangleFanDrawMode:
              return 6;
            case iz.c.PointListDrawMode:
            case iz.c.PointFillMode:
              return 0;
            case iz.c.LineLoopDrawMode:
              return 2;
            case iz.c.LineListDrawMode:
              return 1;
            case iz.c.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${zz}`)
        }(lz);
        const pz = Mz !== iz.c.CounterClockWiseSideOrientation && function(zz) {
          switch (zz) {
            case iz.c.TriangleFillMode:
            case iz.c.TriangleStripDrawMode:
            case iz.c.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(lz);
        if (pz) {
          if (lz === iz.c.TriangleStripDrawMode || lz === iz.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const Mz = uz ? new Uint32Array(Ez) : new Uint16Array(Ez);
          if (zz)
            for (let uz = 0; uz + 2 < Ez; uz += 3) Mz[uz] = zz[bz + uz] + nz, Mz[uz + 1] = zz[bz + uz + 2] + nz, Mz[uz + 2] = zz[bz + uz + 1] + nz;
          else
            for (let zz = 0; zz + 2 < Ez; zz += 3) Mz[zz] = zz, Mz[zz + 1] = zz + 2, Mz[zz + 2] = zz + 1;
          Oz = Mz
        } else if (zz && 0 !== nz) {
          const iz = uz ? new Uint32Array(Ez) : new Uint16Array(Ez);
          for (let uz = 0; uz < Ez; uz++) iz[uz] = zz[bz + uz] + nz;
          Oz = iz
        } else zz && (Oz = function(zz, uz, bz, Ez) {
          let nz = zz;
          return 0 === uz && bz === zz.length || (nz = Array.isArray(zz) ? zz.slice(uz, uz + bz) : zz.subarray(uz, uz + bz)), nz instanceof Int32Array ? new Uint32Array(nz.buffer, nz.byteOffset, nz.length) : Array.isArray(nz) ? Ez ? new Uint32Array(nz) : new Uint16Array(nz) : nz
        }(zz, bz, Ez, uz));
        if (Oz) {
          let iz = tz.getIndicesAccessor(zz, bz, Ez, nz, pz);
          if (void 0 === iz) {
            const lz = this._bufferManager.createBufferView(Oz),
              Mz = uz ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(lz, "SCALAR", Mz, Ez, 0)), iz = this._accessors.length - 1, tz.setIndicesAccessor(zz, bz, Ez, nz, pz, iz)
          }
          Hz.indices = iz
        }
      }
      _exportVertexBuffer(zz, uz, bz, Ez, nz, iz) {
        const lz = zz.getKind();
        if (!yb(lz)) return;
        if (lz.startsWith("uv") && !this._options.exportUnusedUVs && (!uz || !this._materialNeedsUVsSet.has(uz))) return;
        let Mz = nz.getVertexAccessor(zz, bz, Ez);
        if (void 0 === Mz) {
          const uz = nz.convertedToRightHandedBuffers.get(zz._buffer) || zz._buffer.getData(),
            iz = lz === Oz.d.PositionKind ? function(zz, uz, bz, Ez) {
              const {
                byteOffset: nz,
                byteStride: iz,
                type: lz,
                normalized: Mz
              } = uz, tz = uz.getSize(), Hz = new Array(tz).fill(1 / 0), Oz = new Array(tz).fill(-1 / 0);
              return (0, Pb.k)(zz, nz + bz * iz, iz, tz, lz, Ez * tz, Mz, (zz => {
                for (let uz = 0; uz < tz; uz++) Hz[uz] = Math.min(Hz[uz], zz[uz]), Oz[uz] = Math.max(Oz[uz], zz[uz])
              })), {
                min: Hz,
                max: Oz
              }
            }(uz, zz, bz, Ez) : void 0,
            tz = (lz === Oz.d.MatricesIndicesKind || lz === Oz.d.MatricesIndicesExtraKind) && zz.type === Oz.d.FLOAT,
            Hz = tz ? Oz.d.UNSIGNED_BYTE : zz.type,
            pz = tz ? void 0 : zz.normalized,
            dz = tz ? nz.getRemappedBufferView(zz._buffer, zz) : nz.getVertexBufferView(zz._buffer),
            Fz = zz.byteOffset + bz * zz.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(dz, function(zz, uz) {
            if (zz == Oz.d.ColorKind) return uz ? "VEC4" : "VEC3";
            switch (zz) {
              case Oz.d.PositionKind:
              case Oz.d.NormalKind:
                return "VEC3";
              case Oz.d.TangentKind:
              case Oz.d.MatricesIndicesKind:
              case Oz.d.MatricesIndicesExtraKind:
              case Oz.d.MatricesWeightsKind:
              case Oz.d.MatricesWeightsExtraKind:
                return "VEC4";
              case Oz.d.UVKind:
              case Oz.d.UV2Kind:
              case Oz.d.UV3Kind:
              case Oz.d.UV4Kind:
              case Oz.d.UV5Kind:
              case Oz.d.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${zz}`)
          }(lz, nz.hasVertexColorAlpha(zz)), Hz, Ez, Fz, iz, pz)), Mz = this._accessors.length - 1, nz.setVertexAccessor(zz, bz, Ez, Mz)
        }
        iz.attributes[function(zz) {
          switch (zz) {
            case Oz.d.PositionKind:
              return "POSITION";
            case Oz.d.NormalKind:
              return "NORMAL";
            case Oz.d.TangentKind:
              return "TANGENT";
            case Oz.d.ColorKind:
              return "COLOR_0";
            case Oz.d.UVKind:
              return "TEXCOORD_0";
            case Oz.d.UV2Kind:
              return "TEXCOORD_1";
            case Oz.d.UV3Kind:
              return "TEXCOORD_2";
            case Oz.d.UV4Kind:
              return "TEXCOORD_3";
            case Oz.d.UV5Kind:
              return "TEXCOORD_4";
            case Oz.d.UV6Kind:
              return "TEXCOORD_5";
            case Oz.d.MatricesIndicesKind:
              return "JOINTS_0";
            case Oz.d.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case Oz.d.MatricesWeightsKind:
              return "WEIGHTS_0";
            case Oz.d.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${zz}`)
        }(lz)] = Mz
      }
      async _exportMaterialAsync(zz, uz, bz, Ez) {
        let nz = this._materialMap.get(zz);
        if (void 0 === nz) {
          const Ez = uz && Object.keys(uz).some((zz => zz.startsWith("uv")));
          if ((zz = zz instanceof nE.d ? zz.J_[bz.materialIndex] : zz) instanceof ou) nz = await this._materialExporter.exportPBRMaterialAsync(zz, Ez);
          else if (zz instanceof iE.StandardMaterial) nz = await this._materialExporter.exportStandardMaterialAsync(zz, Ez);
          else {
            if (!(zz instanceof Yu)) return void Az.e.Warn(`Unsupported material '${zz.name}' with type ${zz.getClassName()}`);
            nz = await this._materialExporter.exportOpenPBRMaterialAsync(zz, Ez)
          }
          this._materialMap.set(zz, nz)
        }
        Ez.material = nz
      }
      async _exportMeshAsync(zz, uz) {
        let bz = uz.getMesh(zz);
        if (void 0 !== bz) return bz;
        const Ez = {
          primitives: []
        };
        bz = this._meshes.length, this._meshes.push(Ez), uz.setMesh(zz, bz);
        const nz = zz.isUnIndexed ? null : zz.Nbz(),
          lz = zz.geometry?.getVertexBuffers(),
          Mz = uz.getMorphTargetsFromMesh(zz),
          tz = zz instanceof FE.d,
          Hz = zz instanceof GE,
          Oz = zz.hN;
        if (lz && Oz && Oz.length > 0)
          for (const pz of Oz) {
            const bz = {
                attributes: {}
              },
              Oz = pz.lR() || this._babylonScene.defaultMaterial;
            if (Hz) {
              const uz = {
                  name: Oz.name
                },
                Ez = zz,
                nz = Kz.Color3.White(),
                iz = Ez.material?.alpha ?? 1,
                lz = Ez.greasedLineMaterial?.color ?? nz;
              (!lz.equalsWithEpsilon(nz, ab.b) || iz < 1) && (uz.pbrMetallicRoughness = {
                baseColorFactor: [...lz.obz(), iz]
              }), this._materials.push(uz), bz.material = this._materials.length - 1
            } else if (tz) {
              const uz = {
                  name: Oz.name
                },
                Ez = zz;
              (!Ez.color.equalsWithEpsilon(Kz.Color3.White(), ab.b) || Ez.alpha < 1) && (uz.pbrMetallicRoughness = {
                baseColorFactor: [...Ez.color.obz(), Ez.alpha]
              }), this._materials.push(uz), bz.material = this._materials.length - 1
            } else await this._exportMaterialAsync(Oz, lz, pz, bz);
            const dz = tz || Hz ? iz.c.LineListDrawMode : zz.overrideRenderingFillMode ?? Oz.fillMode;
            let Fz = Oz._getEffectiveOrientation(zz);
            uz.wasAddedByNoopNode && !zz.XT().useRightHandedSystem && (Fz = Fz === iz.c.ClockWiseSideOrientation ? iz.c.CounterClockWiseSideOrientation : iz.c.ClockWiseSideOrientation), this._exportIndices(nz, nz ? (0, Pb.d)(nz, pz.indexCount, pz.indexStart, pz.verticesStart) : pz.verticesCount > 65535, nz ? pz.indexStart : pz.verticesStart, nz ? pz.indexCount : pz.verticesCount, -pz.verticesStart, dz, Fz, uz, bz);
            for (const zz of Object.values(lz)) this._exportVertexBuffer(zz, Oz, pz.verticesStart, pz.verticesCount, uz, bz);
            if (Mz) {
              bz.targets = [];
              for (const zz of Mz) bz.targets.push(zz.attributes)
            }
            Ez.primitives.push(bz), this._extensionsPostExportMeshPrimitive(bz)
          }
        if (Mz) {
          Ez.weights = [], Ez.extras || (Ez.extras = {}), Ez.extras.targetNames = [];
          for (const zz of Mz) Ez.weights.push(zz.influence), Ez.extras.targetNames.push(zz.name)
        }
        return bz
      }
    }
    VE._ExtensionNames = new Array, VE._ExtensionFactories = {}, VE._ExtensionOrders = {};
    class mE {
      static async GLTFAsync(zz, uz, bz) {
        bz && bz.exportWithoutWaitingForScene || await zz.whenReadyAsync();
        const Ez = new VE(zz, bz),
          nz = await Ez.generateGLTFAsync(uz.replace(/\.[^/.]+$/, ""));
        return Ez.dispose(), nz
      }
      static async GLBAsync(zz, uz, bz) {
        bz && bz.exportWithoutWaitingForScene || await zz.whenReadyAsync();
        const Ez = new VE(zz, bz),
          nz = await Ez.generateGLBAsync(uz.replace(/\.[^/.]+$/, ""));
        return Ez.dispose(), nz
      }
    }
    const qE = "EXT_mesh_gpu_instancing";

    function hE(zz, uz) {
      const bz = new Float32Array(3 * uz);
      for (let Ez = 0; Ez < uz; Ez++) bz[3 * Ez + 0] = zz[4 * Ez + 0], bz[3 * Ez + 1] = zz[4 * Ez + 1], bz[3 * Ez + 2] = zz[4 * Ez + 2];
      return bz
    }
    class UE {
      constructor(zz) {
        this.name = qE, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(zz, uz, bz, Ez, nz, iz) {
        return await new Promise((zz => {
          if (uz && bz instanceof oE.c && bz.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const zz = Uz.n.Zero(),
              Ez = Uz.h.Identity(),
              lz = Uz.n.One(),
              Mz = bz.thinInstanceGetWorldMatrices(),
              tz = Uz.l.ER[2],
              Hz = Uz.l.Quaternion[1],
              Oz = Uz.l.ER[3];
            let pz = !1,
              dz = !1,
              Fz = !1;
            const Zz = new Float32Array(3 * bz.W8),
              Rz = new Float32Array(4 * bz.W8),
              Kz = new Float32Array(3 * bz.W8);
            let wz = 0;
            for (const uz of Mz) uz.decompose(Oz, Hz, tz), nz && (Qb(tz), Wb(Hz)), Zz.set(tz.obz(), 3 * wz), Rz.set(Hz.normalize().obz(), 4 * wz), Kz.set(Oz.obz(), 3 * wz), pz = pz || !tz.equalsWithEpsilon(zz), dz = dz || !Hz.equalsWithEpsilon(Ez), Fz = Fz || !Oz.equalsWithEpsilon(lz), wz++;
            const Xz = {
              attributes: {}
            };
            pz && (Xz.attributes.TRANSLATION = this._buildAccessor(Zz, "VEC3", bz.W8, iz)), dz && (Xz.attributes.ROTATION = this._buildAccessor(Rz, "VEC4", bz.W8, iz)), Fz && (Xz.attributes.SCALE = this._buildAccessor(Kz, "VEC3", bz.W8, iz));
            let fz = bz._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (fz) {
              const zz = bz.W8,
                uz = "VEC3";
              bz.hasVertexAlpha && fz.length === 4 * zz ? (this._instanceColorWarned || (Az.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), fz = hE(fz, zz)) : fz.length === 4 * zz && (fz = hE(fz, zz)), fz.length === 3 * zz && (Xz.attributes._COLOR_0 = this._buildAccessor(fz, uz, zz, iz))
            }
            uz.extensions = uz.extensions || {}, uz.extensions[qE] = Xz
          }
          zz(uz)
        }))
      }
      _buildAccessor(zz, uz, bz, Ez) {
        const nz = Ez.createBufferView(zz),
          iz = Ez.createAccessor(nz, uz, 5126, bz);
        return this._exporter._accessors.push(iz), this._exporter._accessors.length - 1
      }
    }
    let cE = !1;

    function gE() {
      cE || (cE = !0, VE.RegisterExtension(qE, (zz => new UE(zz))))
    }
    bz(39642);
    gE();
    var SE = bz(41057);

    function yE(zz, uz, bz, Ez) {
      const nz = zz;
      let iz = null,
        lz = null,
        Mz = null,
        tz = null;
      const Hz = {},
        Oz = uz.find((zz => "POSITION" === zz.dracoName));
      if (!Oz) throw new Error("Draco: Missing position attribute for encoding.");
      if (!bz) {
        const zz = Oz.data.length / Oz.size;
        bz = new(zz > 65535 ? Uint32Array : Uint16Array)(zz);
        for (let uz = 0; uz < zz; uz++) bz[uz] = uz
      }
      try {
        iz = new nz.Encoder, lz = new nz.MeshBuilder, Mz = new nz.Mesh, lz.AddFacesToMesh(Mz, bz.length / 3, bz);
        const zz = new Map([
          [Float32Array, (zz, uz, bz, Ez, nz, iz) => zz.AddFloatAttribute(uz, bz, Ez, nz, iz)],
          [Uint32Array, (zz, uz, bz, Ez, nz, iz) => zz.AddUInt32Attribute(uz, bz, Ez, nz, iz)],
          [Uint16Array, (zz, uz, bz, Ez, nz, iz) => zz.AddUInt16Attribute(uz, bz, Ez, nz, iz)],
          [Uint8Array, (zz, uz, bz, Ez, nz, iz) => zz.AddUInt8Attribute(uz, bz, Ez, nz, iz)],
          [Int32Array, (zz, uz, bz, Ez, nz, iz) => zz.AddInt32Attribute(uz, bz, Ez, nz, iz)],
          [Int16Array, (zz, uz, bz, Ez, nz, iz) => zz.AddInt16Attribute(uz, bz, Ez, nz, iz)],
          [Int8Array, (zz, uz, bz, Ez, nz, iz) => zz.AddInt8Attribute(uz, bz, Ez, nz, iz)]
        ]);
        for (const bz of uz) {
          bz.data instanceof Uint8ClampedArray && (bz.data = new Uint8Array(bz.data));
          const uz = zz.get(bz.data.constructor),
            tz = bz.data.length / bz.size;
          Hz[bz.kind] = uz(lz, Mz, nz[bz.dracoName], tz, bz.size, bz.data), Ez.quantizationBits && Ez.quantizationBits[bz.dracoName] && iz.SetAttributeQuantization(nz[bz.dracoName], Ez.quantizationBits[bz.dracoName])
        }
        Ez.method && iz.SetEncodingMethod(nz[Ez.method]), void 0 !== Ez.encodeSpeed && void 0 !== Ez.decodeSpeed && iz.SetSpeedOptions(Ez.encodeSpeed, Ez.decodeSpeed), tz = new nz.DracoInt8Array;
        const Oz = iz.EncodeMeshToDracoBuffer(Mz, tz);
        if (Oz <= 0) throw new Error("Draco: Failed to encode.");
        const pz = new Int8Array(Oz);
        for (let uz = 0; uz < Oz; uz++) pz[uz] = tz.GetValue(uz);
        return {
          data: pz,
          attributeIds: Hz
        }
      } finally {
        Mz && nz.destroy(Mz), lz && nz.destroy(lz), iz && nz.destroy(iz), tz && nz.destroy(tz)
      }
    }

    function DE() {
      let zz;
      onmessage = uz => {
        const bz = uz.data;
        switch (bz.id) {
          case "init": {
            bz.url && importScripts(bz.url);
            const uz = bz.wasmBinary ? {
              wasmBinary: bz.wasmBinary
            } : {};
            zz = DracoEncoderModule(uz), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!zz) throw new Error("Draco: Encoder module is not available.");
            zz.then((zz => {
              const uz = yE(zz, bz.attributes, bz.indices, bz.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: uz
              }, uz ? [uz.data.buffer] : void 0)
            })).catch((zz => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: zz.message
              })
            }))
        }
      }
    }
    class QE {
      constructor(zz) {
        if (zz.workerPool) return void(this._workerPoolPromise = Promise.resolve(zz.workerPool));
        const uz = zz.wasmBinary,
          bz = zz.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Ez = bz && "function" === typeof Worker && "function" === typeof URL,
          nz = Ez || !zz.jsModule,
          iz = zz.wasmUrl && zz.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: nz ? vu.h.GetBabylonScriptURL(zz.wasmUrl, !0) : "",
            wasmBinaryPromise: uz ? Promise.resolve(uz) : vu.h.LoadFileAsync(vu.h.GetBabylonScriptURL(zz.wasmBinaryUrl, !0))
          } : {
            url: nz ? vu.h.GetBabylonScriptURL(zz.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Ez ? this._workerPoolPromise = iz.wasmBinaryPromise.then((zz => {
          const uz = this._getWorkerContent(),
            Ez = URL.createObjectURL(new Blob([uz], {
              type: "application/javascript"
            }));
          return new SE.d(bz, (() => async function(zz, uz, bz) {
            return await new Promise(((Ez, nz) => {
              const iz = uz => {
                  zz.removeEventListener("error", iz), zz.removeEventListener("message", lz), nz(uz)
                },
                lz = uz => {
                  "initDone" === uz.data.id && (zz.removeEventListener("error", iz), zz.removeEventListener("message", lz), Ez(zz))
                };
              if (zz.addEventListener("error", iz), zz.addEventListener("message", lz), uz) {
                const Ez = uz.slice(0);
                zz.postMessage({
                  id: "init",
                  url: bz,
                  wasmBinary: Ez
                }, [Ez])
              } else zz.postMessage({
                id: "init",
                url: bz
              })
            }))
          }(new Worker(Ez), zz, iz.url)))
        })) : this._modulePromise = iz.wasmBinaryPromise.then((async uz => {
          if (!this._isModuleAvailable() && !zz.jsModule) {
            if (!iz.url) throw new Error("Draco codec module is not available");
            await vu.h.LoadBabylonScriptAsync(iz.url)
          }
          return await this._createModuleAsync(uz, zz.jsModule)
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

    function WE() {
      const zz = zz => !!zz && "object" === typeof zz;
      for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
      return bz.reduce(((uz, bz) => {
        const Ez = Object.keys(bz);
        for (const nz of Ez) {
          const Ez = uz[nz],
            iz = bz[nz];
          Array.isArray(Ez) && Array.isArray(iz) ? uz[nz] = Ez.concat(iz) : zz(Ez) && zz(iz) ? uz[nz] = WE(Ez, iz) : uz[nz] = iz
        }
        return uz
      }), {})
    }

    function eE(zz) {
      return zz === cz.j.PositionKind ? "POSITION" : zz === cz.j.NormalKind ? "NORMAL" : zz === cz.j.ColorKind ? "COLOR" : zz.startsWith(cz.j.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const jE = {
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
    class IE extends QE {
      static get DefaultAvailable() {
        return !!((zz = IE.DefaultConfiguration).wasmUrl && (zz.wasmBinary || zz.wasmBinaryUrl) && "object" === typeof WebAssembly || zz.fallbackUrl);
        var zz
      }
      static get Default() {
        return IE._Default ?? (IE._Default = new IE), IE._Default
      }
      static ResetDefault(zz) {
        IE._Default && (zz || IE._Default.dispose(), IE._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(zz, uz) {
        return {
          module: await (uz || DracoEncoderModule)({
            wasmBinary: zz
          })
        }
      }
      _getWorkerContent() {
        return `${yE}(${DE})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IE.DefaultConfiguration)
      }
      async _encodeAsync(zz, uz, bz) {
        const Ez = bz ? WE(jE, bz) : jE;
        if (this._workerPoolPromise) {
          const bz = await this._workerPoolPromise;
          return await new Promise(((nz, iz) => {
            bz.push(((bz, lz) => {
              const Mz = zz => {
                  bz.removeEventListener("error", Mz), bz.removeEventListener("message", tz), iz(zz), lz()
                },
                tz = zz => {
                  "encodeMeshSuccess" === zz.data.id ? (bz.removeEventListener("error", Mz), bz.removeEventListener("message", tz), nz(zz.data.encodedMeshData), lz()) : "encodeMeshError" === zz.data.id && (bz.removeEventListener("error", Mz), bz.removeEventListener("message", tz), iz(new Error(zz.data.errorMessage)), lz())
                };
              bz.addEventListener("error", Mz), bz.addEventListener("message", tz);
              const Hz = [];
              for (const uz of zz) Hz.push(uz.data.buffer);
              uz && Hz.push(uz.buffer), bz.postMessage({
                id: "encodeMesh",
                attributes: zz,
                indices: uz,
                options: Ez
              }, Hz)
            }))
          }))
        }
        if (this._modulePromise) {
          return yE((await this._modulePromise).module, zz, uz, Ez)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(zz, uz) {
        if (0 == zz.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        zz instanceof oE.c && zz.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === uz?.method && (Az.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), uz.method = "MESH_SEQUENTIAL_ENCODING");
        const bz = function(zz) {
            let uz = zz.Nbz(void 0, !0);
            return !uz || uz instanceof Uint32Array || uz instanceof Uint16Array || (uz = ((0, Pb.d)(uz, uz.length) ? Uint32Array : Uint16Array).from(uz)), uz
          }(zz),
          Ez = function(zz, uz) {
            const bz = [];
            for (const Ez of zz.getVerticesDataKinds()) {
              if (uz?.includes(Ez)) {
                if (Ez === cz.j.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const nz = zz.getVertexBuffer(Ez),
                iz = nz.getSize(),
                lz = (0, Pb.u)(nz.getData(), iz, nz.type, nz.byteOffset, nz.byteStride, zz.getTotalVertices(), !0);
              bz.push({
                kind: Ez,
                dracoName: eE(Ez),
                size: iz,
                data: lz
              })
            }
            return bz
          }(zz, uz?.excludedAttributes);
        return await this._encodeAsync(Ez, bz, uz)
      }
    }
    IE.DefaultConfiguration = {
      wasmUrl: `${vu.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${vu.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${vu.h._DefaultCdnUrl}/draco_encoder.js`
    }, IE._Default = null;
    const BE = "KHR_draco_mesh_compression";
    class CE {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(zz) {
        this.name = BE, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === zz.options.meshCompressionMethod && IE.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(zz, uz, bz) {
        if (!this.enabled) return;
        if (4 !== zz.mode && 5 !== zz.mode) return void Az.e.Warn("Cannot compress primitive with mode " + zz.mode + ".");
        const Ez = [],
          nz = [];
        let iz = null;
        if (void 0 !== zz.indices) {
          const lz = bz[zz.indices],
            Mz = uz.getBufferView(lz);
          iz = uz.getData(Mz).slice(), Ez.push(Mz), nz.push(lz)
        }
        const lz = [];
        for (const [Oz, pz] of Object.entries(zz.attributes)) {
          const zz = bz[pz],
            iz = uz.getBufferView(zz),
            tz = Sb(zz.type),
            Hz = (0, Pb.u)(uz.getData(iz), tz, zz.componentType, zz.byteOffset || 0, iz.byteStride || (0, Pb.t)(zz.componentType) * tz, zz.count, !0);
          lz.push({
            kind: Oz,
            dracoName: (Mz = Oz, "POSITION" === Mz ? "POSITION" : "NORMAL" === Mz ? "NORMAL" : Mz.startsWith("COLOR") ? "COLOR" : Mz.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: Sb(zz.type),
            data: Hz
          }), Ez.push(iz), nz.push(zz)
        }
        var Mz;
        const tz = {
            method: zz.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          Hz = IE.Default._encodeAsync(lz, iz, tz).then((bz => {
            const iz = {
                bufferView: -1,
                attributes: bz.attributeIds
              },
              lz = uz.createBufferView(bz.data);
            uz.setBufferView(iz, lz);
            for (const zz of Ez) this._bufferViewsUsed.add(zz);
            for (const zz of nz) this._accessorsUsed.add(zz);
            zz.extensions || (zz.extensions = {}), zz.extensions[BE] = iz
          })).catch((zz => {
            Az.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + zz.message)
          }));
        this._encodePromises.push(Hz), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(zz) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((uz => {
          zz.getPropertiesWithBufferView(uz).every((zz => this._accessorsUsed.has(zz))) && zz.removeBufferView(uz)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let YE = !1;

    function kE() {
      YE || (YE = !0, VE.RegisterExtension(BE, (zz => new CE(zz))))
    }
    kE();
    var zn = bz(40786);
    const un = "KHR_lights_punctual",
      bn = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      En = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      nn = Uz.n.Backward();
    class Mn {
      constructor(zz) {
        this.name = un, this.enabled = !0, this.required = !1, this._exporter = zz
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[un] = this._lights
      }
      async postExportNodeAsync(zz, uz, bz, Ez, nz) {
        return await new Promise((iz => {
          if (!(bz instanceof OE.b)) return void iz(uz);
          const lz = bz.getTypeID() == OE.b.LIGHTTYPEID_POINTLIGHT ? "point" : bz.getTypeID() == OE.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : bz.getTypeID() == OE.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!lz || !(bz instanceof zn.e)) return Az.e.Warn(`${zz}: Light ${bz.name} is not supported in ${un}`), void iz(uz);
          if (bz.falloffType !== OE.b.FALLOFF_GLTF && Az.e.Warn(`${zz}: Light falloff for ${bz.name} does not match the ${un} specification!`), !bz.position.zlz(0, 0, 0)) {
            const zz = Uz.l.ER[0].euz(bz.position);
            nz && Qb(zz), uz.translation = zz.obz()
          }
          if ("point" !== lz) {
            const zz = bz.direction.normalizeToRef(Uz.l.ER[0]);
            nz && Qb(zz);
            const Ez = Uz.h.FromUnitVectorsToRef(nn, zz, Uz.l.Quaternion[0]);
            Uz.h.IsIdentity(Ez) || (uz.rotation = Ez.obz())
          }
          const Mz = {
            type: lz,
            name: bz.name,
            color: bz.diffuse.obz(),
            intensity: bz.intensity,
            range: bz.range
          };
          if (Cb(Mz, bn), "spot" === lz) {
            const zz = bz;
            Mz.spot = {
              innerConeAngle: zz.innerAngle / 2,
              outerConeAngle: zz.angle / 2
            }, Cb(Mz.spot, En)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Mz);
          const tz = {
              light: this._lights.lights.length - 1
            },
            Hz = bz.parent;
          if (Hz && Ib(bz, Hz)) {
            const zz = Ez.get(Hz);
            if (zz) {
              const bz = this._exporter._nodes[zz];
              return jb(uz, bz), bz.extensions || (bz.extensions = {}), bz.extensions[un] = tz, void iz(null)
            }
          }
          uz.extensions || (uz.extensions = {}), uz.extensions[un] = tz, iz(uz)
        }))
      }
    }
    let tn = !1;

    function Hn() {
      tn || (tn = !0, VE.RegisterExtension(un, (zz => new Mn(zz))))
    }
    Hn();
    const On = "KHR_interactivity";
    class pn {
      constructor(zz) {
        this._exporter = zz, this.name = On, this.enabled = !!zz.options.khrInteractivity, this.required = zz.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var zz, uz, bz;
        const Ez = this._exporter.options.khrInteractivity;
        if (!Ez) return;
        const nz = Ez.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: zz => this._exporter._getNodeIndex(zz),
          getAnimationIndex: zz => this._exporter._getAnimationIndex(zz),
          getCameraIndex: zz => this._exporter._getCameraIndex(zz),
          getMaterialIndex: zz => this._exporter._getMaterialIndex(zz),
          getRootIndex: (zz, uz) => this._exporter._getRootIndex(zz, uz),
          setNodeExtension: (zz, uz, bz) => this._exporter._setNodeExtension(zz, uz, bz)
        });
        this._exporter._glTF.extensions[On] = nz;
        for (const iz of Ez.additionalExtensionsUsed)(zz = this._exporter._glTF).extensionsUsed || (zz.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(iz) && this._exporter._glTF.extensionsUsed.push(iz);
        for (const iz of Ez.additionalExtensionsRequired)(uz = this._exporter._glTF).extensionsUsed || (uz.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(iz) && this._exporter._glTF.extensionsUsed.push(iz), (bz = this._exporter._glTF).extensionsRequired || (bz.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(iz) && this._exporter._glTF.extensionsRequired.push(iz)
      }
    }
    let dn = !1;

    function Fn() {
      dn || (dn = !0, VE.RegisterExtension(On, (zz => new pn(zz)), 200))
    }
    Fn();
    const Zn = "EXT_lights_area",
      Rn = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      Kn = {
        aspect: 1
      },
      wn = Uz.n.Backward();
    class Xn {
      constructor(zz) {
        this.name = Zn, this.enabled = !0, this.required = !1, this._exporter = zz
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Zn] = this._lights
      }
      async postExportNodeAsync(zz, uz, bz, Ez, nz) {
        return await new Promise((iz => {
          if (!(bz instanceof OE.b)) return void iz(uz);
          const lz = bz.getTypeID() == OE.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!lz) return Az.e.Warn(`${zz}: Light ${bz.name} is not supported in ${Zn}`), void iz(uz);
          const Mz = bz;
          if (Mz.falloffType !== OE.b.FALLOFF_GLTF && Az.e.Warn(`${zz}: Light falloff for ${bz.name} does not match the ${Zn} specification!`), !Mz.position.zlz(0, 0, 0)) {
            const zz = Uz.l.ER[0].euz(Mz.position);
            nz && Qb(zz), uz.translation = zz.obz()
          }
          const tz = Uz.n.Forward();
          nz && Qb(tz);
          const Hz = Uz.h.FromUnitVectorsToRef(wn, tz, Uz.l.Quaternion[0]);
          Uz.h.IsIdentity(Hz) || (uz.rotation = Hz.obz());
          const Oz = {
            type: lz,
            name: Mz.name,
            color: Mz.diffuse.obz(),
            intensity: Mz.intensity,
            size: Mz.height,
            rect: {
              aspect: Mz.width / Mz.height
            }
          };
          Cb(Oz, Rn), Oz.rect && Cb(Oz.rect, Kn), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Oz);
          const pz = {
              light: this._lights.lights.length - 1
            },
            dz = bz.parent;
          if (dz && Ib(Mz, dz)) {
            const zz = Ez.get(dz);
            if (zz) {
              const bz = this._exporter._nodes[zz];
              return jb(uz, bz), bz.extensions || (bz.extensions = {}), bz.extensions[Zn] = pz, void iz(null)
            }
          }
          uz.extensions || (uz.extensions = {}), uz.extensions[Zn] = pz, iz(uz)
        }))
      }
    }
    let fn = !1;

    function sn() {
      fn || (fn = !0, VE.RegisterExtension(Zn, (zz => new Xn(zz))))
    }
    sn();
    const rn = "KHR_materials_anisotropy";
    class Nn {
      constructor(zz) {
        this.name = rn, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, uz, bz) {
        const Ez = [];
        if (bz instanceof ou) {
          if (bz.anisotropy.isEnabled && !bz.anisotropy.legacy) return bz.anisotropy.texture && Ez.push(bz.anisotropy.texture), Ez
        } else if (bz instanceof Yu && bz.specularRoughnessAnisotropy > 0) {
          const zz = function(zz) {
            const uz = zz.specularRoughnessAnisotropyTexture,
              bz = zz.geometryTangentTexture;
            return `${uz&&uz.getInternalTexture()?uz.getInternalTexture().uniqueId:"NoStrength"}_${bz&&bz.getInternalTexture()?bz.getInternalTexture().uniqueId:"NoTangent"}`
          }(bz);
          if (this._anisoTexturesMap[zz]) Ez.push(this._anisoTexturesMap[zz]);
          else {
            const uz = await async function(zz) {
              const uz = zz.XT(),
                bz = zz.specularRoughnessAnisotropyTexture,
                Ez = zz.geometryTangentTexture;
              return bz || Ez ? await lb("AnisotropyTexture", Hb(Ez ? Mb(Ez, 0) : tb(1), Ez ? Mb(Ez, 1) : tb(0), bz ? Mb(bz, 0) : tb(1)), uz) : null
            }(bz);
            uz && (Ez.push(uz), this._anisoTexturesMap[zz] = uz)
          }
          return Ez
        }
        return []
      }
      postExportMaterialAsync(zz, uz, bz) {
        return new Promise((zz => {
          var Ez;
          if (bz instanceof ou) {
            if (!bz.anisotropy.isEnabled || bz.anisotropy.legacy) return void zz(uz);
            this._wasUsed = !0, uz.extensions = uz.extensions || {};
            const Ez = this._exporter._materialExporter.getTextureInfo(bz.anisotropy.texture),
              nz = {
                anisotropyStrength: bz.anisotropy.intensity,
                anisotropyRotation: bz.anisotropy.angle,
                anisotropyTexture: Ez ?? void 0
              };
            null !== nz.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(bz), uz.extensions[rn] = nz
          } else if (bz instanceof Yu && bz.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, uz.extensions = uz.extensions || {};
            let nz = bz.specularRoughnessTexture;
            bz._useRoughnessFromMetallicTextureGreen && (nz = bz.baseMetalnessTexture);
            const iz = this._anisoTexturesMap[bz.id];
            if (!nz && !iz) {
              let Ez = bz.specularRoughness,
                nz = bz.specularRoughnessAnisotropy;
              if (!bz._useGltfStyleAnisotropy) {
                const zz = function(zz, uz) {
                  const bz = zz * zz,
                    Ez = bz * Math.sqrt(2 / (1 + (1 - uz) * (1 - uz))),
                    nz = (1 - uz) * Ez;
                  return {
                    newBaseRoughness: Math.sqrt(nz),
                    newAnisotropyStrength: Math.min(Math.sqrt((Ez - bz) / Math.max(1 - bz, 1e-4)), 1)
                  }
                }(bz.specularRoughness, bz.specularRoughnessAnisotropy);
                Ez = zz.newBaseRoughness, nz = zz.newAnisotropyStrength
              }
              uz.pbrMetallicRoughness && (uz.pbrMetallicRoughness.roughnessFactor = Ez);
              const iz = {
                anisotropyStrength: nz,
                anisotropyRotation: bz.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return uz.extensions[rn] = iz, zz(uz)
            }
            const lz = iz ? this._exporter._materialExporter.getTextureInfo(iz) : null,
              Mz = {
                anisotropyStrength: bz.specularRoughnessAnisotropy,
                anisotropyRotation: bz.geometryTangentAngle,
                anisotropyTexture: lz || void 0,
                extensions: {}
              };
            bz._useGltfStyleAnisotropy || (uz.extensions.KHR_materials_openpbr = {}, (Ez = this._exporter._glTF).extensionsUsed || (Ez.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(bz), uz.extensions[rn] = Mz
          }
          zz(uz)
        }))
      }
    }
    let vn = !1;

    function xn() {
      vn || (vn = !0, VE.RegisterExtension(rn, (zz => new Nn(zz))))
    }
    xn();
    const Jn = "KHR_materials_clearcoat";

    function An(zz, uz) {
      const bz = new Lz.e(uz.name, uz.XT());
      return bz._texture = zz, bz.coordinatesIndex = uz.coordinatesIndex, uz instanceof Lz.e && (bz.uOffset = uz.uOffset, bz.vOffset = uz.vOffset, bz.uScale = uz.uScale, bz.vScale = uz.vScale, bz.wAng = uz.wAng), bz.wrapU = uz.wrapU, bz.wrapV = uz.wrapV, bz
    }
    class Tn {
      constructor(zz) {
        this.name = Jn, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = zz
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
      async postExportMaterialAdditionalTexturesAsync(zz, uz, bz) {
        const Ez = [];
        if (bz instanceof ou) {
          if (bz.clearCoat.isEnabled) return bz.clearCoat.texture && Ez.push(bz.clearCoat.texture), !bz.clearCoat.useRoughnessFromMainTexture && bz.clearCoat.textureRoughness && Ez.push(bz.clearCoat.textureRoughness), bz.clearCoat.bumpTexture && Ez.push(bz.clearCoat.bumpTexture), Ez
        } else if (bz instanceof Yu && bz.coatWeight > 0) {
          let zz = !1;
          if (bz.coatWeightTexture ? bz.coatRoughnessTexture ? bz._useCoatRoughnessFromGreenChannel && bz.coatWeightTexture.getInternalTexture() === bz.coatRoughnessTexture.getInternalTexture() ? (Ez.push(bz.coatWeightTexture), Ez.push(bz.coatRoughnessTexture)) : zz = !0 : Ez.push(bz.coatWeightTexture) : bz.coatRoughnessTexture && (bz._useCoatRoughnessFromGreenChannel ? Ez.push(bz.coatRoughnessTexture) : zz = !0), zz) {
            const zz = function(zz) {
              const uz = zz.coatWeightTexture,
                bz = uz && uz.getInternalTexture() ? uz.getInternalTexture().uniqueId : "NoCoat",
                Ez = zz.coatRoughnessTexture;
              return `${bz}_${Ez&&Ez.getInternalTexture()?Ez.getInternalTexture().uniqueId:"NoRoughness"}`
            }(bz);
            if (!this._cachedInternalTexturesMap[zz]) {
              const uz = await async function(zz) {
                const uz = zz.XT(),
                  bz = zz.coatWeightTexture,
                  Ez = zz.coatRoughnessTexture;
                return bz || Ez ? (await lb("CoatTexture", Hb(bz ? Mb(bz, 0) : tb(1), Ez ? Mb(Ez, zz._useCoatRoughnessFromGreenChannel ? 1 : 0) : tb(1)), uz)).getInternalTexture() : null
              }(bz);
              uz && (this._cachedInternalTexturesMap[zz] = uz)
            }
            this._cachedInternalTexturesMap[zz] && (bz.coatWeightTexture && (this._mergedTexturesMap[bz.coatWeightTexture.uniqueId] = An(this._cachedInternalTexturesMap[zz], bz.coatWeightTexture), Ez.push(this._mergedTexturesMap[bz.coatWeightTexture.uniqueId])), bz.coatRoughnessTexture && (this._mergedTexturesMap[bz.coatRoughnessTexture.uniqueId] = An(this._cachedInternalTexturesMap[zz], bz.coatRoughnessTexture), Ez.push(this._mergedTexturesMap[bz.coatRoughnessTexture.uniqueId])))
          }
          return bz.geometryCoatNormalTexture && Ez.push(bz.geometryCoatNormalTexture), Ez
        }
        return []
      }
      postExportMaterialAsync(zz, uz, bz) {
        return new Promise((zz => {
          if (bz instanceof ou) {
            if (!bz.clearCoat.isEnabled) return void zz(uz);
            this._wasUsed = !0, uz.extensions = uz.extensions || {};
            const Ez = this._exporter._materialExporter.getTextureInfo(bz.clearCoat.texture);
            let nz;
            nz = bz.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(bz.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(bz.clearCoat.textureRoughness), bz.clearCoat.isTintEnabled && vu.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${bz.name}`), bz.clearCoat.remapF0OnInterfaceChange && vu.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${bz.name}`);
            const iz = this._exporter._materialExporter.getTextureInfo(bz.clearCoat.bumpTexture),
              lz = {
                clearcoatFactor: bz.clearCoat.intensity,
                clearcoatTexture: Ez ?? void 0,
                clearcoatRoughnessFactor: bz.clearCoat.roughness,
                clearcoatRoughnessTexture: nz ?? void 0,
                clearcoatNormalTexture: iz ?? void 0
              };
            null === lz.clearcoatTexture && null === lz.clearcoatRoughnessTexture && null === lz.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(bz), uz.extensions[Jn] = lz
          } else if (bz instanceof Yu) {
            if (0 == bz.coatWeight) return void zz(uz);
            let Ez, nz, iz, lz;
            this._wasUsed = !0, uz.extensions = uz.extensions || {}, bz.coatWeightTexture && (Ez = this._mergedTexturesMap[bz.coatWeightTexture.uniqueId], nz = this._exporter._materialExporter.getTextureInfo(Ez)), bz.coatRoughnessTexture && (iz = this._mergedTexturesMap[bz.coatRoughnessTexture.uniqueId], lz = this._exporter._materialExporter.getTextureInfo(iz)), bz.coatColorTexture && vu.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${bz.name}`);
            const Mz = this._exporter._materialExporter.getTextureInfo(bz.geometryCoatNormalTexture),
              tz = {
                clearcoatFactor: bz.coatWeight,
                clearcoatTexture: nz ?? void 0,
                clearcoatRoughnessFactor: bz.coatRoughness,
                clearcoatRoughnessTexture: lz ?? void 0,
                clearcoatNormalTexture: Mz ?? void 0
              };
            null === tz.clearcoatTexture && null === tz.clearcoatRoughnessTexture && null === tz.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(bz), uz.extensions[Jn] = tz
          }
          zz(uz)
        }))
      }
    }
    let Ln = !1;

    function Pn() {
      Ln || (Ln = !0, VE.RegisterExtension(Jn, (zz => new Tn(zz))))
    }
    Pn();
    const Gn = "KHR_materials_coat";

    function an(zz) {
      const uz = zz.coatRoughnessAnisotropyTexture,
        bz = zz.geometryCoatTangentTexture;
      return `${uz&&uz.getInternalTexture()?uz.getInternalTexture().uniqueId:"NoStrength"}_${bz&&bz.getInternalTexture()?bz.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Vn(zz, uz) {
      const bz = new Lz.e(uz.name, uz.XT());
      return bz._texture = zz, bz.coordinatesIndex = uz.coordinatesIndex, uz instanceof Lz.e && (bz.uOffset = uz.uOffset, bz.vOffset = uz.vOffset, bz.uScale = uz.uScale, bz.vScale = uz.vScale, bz.wAng = uz.wAng), bz.wrapU = uz.wrapU, bz.wrapV = uz.wrapV, bz
    }
    class mn {
      constructor(zz) {
        this.name = Gn, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = zz
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
      async postExportMaterialAdditionalTexturesAsync(zz, uz, bz) {
        const Ez = [];
        if (bz instanceof ou) {
          if (bz.clearCoat.isEnabled) return bz.clearCoat.texture && Ez.push(bz.clearCoat.texture), !bz.clearCoat.useRoughnessFromMainTexture && bz.clearCoat.textureRoughness && Ez.push(bz.clearCoat.textureRoughness), bz.clearCoat.bumpTexture && Ez.push(bz.clearCoat.bumpTexture), bz.clearCoat.tintTexture && Ez.push(bz.clearCoat.tintTexture), Ez
        } else if (bz instanceof Yu && bz.coatWeight > 0) {
          let zz = !1;
          if (bz.coatWeightTexture ? bz.coatRoughnessTexture ? bz._useCoatRoughnessFromGreenChannel && bz.coatWeightTexture.getInternalTexture() === bz.coatRoughnessTexture.getInternalTexture() ? (Ez.push(bz.coatWeightTexture), Ez.push(bz.coatRoughnessTexture)) : zz = !0 : Ez.push(bz.coatWeightTexture) : bz.coatRoughnessTexture && (bz._useCoatRoughnessFromGreenChannel ? Ez.push(bz.coatRoughnessTexture) : zz = !0), zz) {
            const zz = function(zz) {
              const uz = zz.coatWeightTexture,
                bz = uz && uz.getInternalTexture() ? uz.getInternalTexture().uniqueId : "NoCoat",
                Ez = zz.coatRoughnessTexture;
              return `${bz}_${Ez&&Ez.getInternalTexture()?Ez.getInternalTexture().uniqueId:"NoRoughness"}`
            }(bz);
            if (!this._cachedInternalTexturesMap[zz]) {
              const uz = await async function(zz) {
                const uz = zz.XT(),
                  bz = zz.coatWeightTexture,
                  Ez = zz.coatRoughnessTexture;
                return bz || Ez ? (await lb("CoatTexture", Hb(bz ? Mb(bz, 0) : tb(1), Ez ? Mb(Ez, zz._useCoatRoughnessFromGreenChannel ? 1 : 0) : tb(1)), uz)).getInternalTexture() : null
              }(bz);
              uz && (this._cachedInternalTexturesMap[zz] = uz)
            }
            this._cachedInternalTexturesMap[zz] && (bz.coatWeightTexture && (this._mergedTexturesMap[bz.coatWeightTexture.uniqueId] = Vn(this._cachedInternalTexturesMap[zz], bz.coatWeightTexture), Ez.push(this._mergedTexturesMap[bz.coatWeightTexture.uniqueId])), bz.coatRoughnessTexture && (this._mergedTexturesMap[bz.coatRoughnessTexture.uniqueId] = Vn(this._cachedInternalTexturesMap[zz], bz.coatRoughnessTexture), Ez.push(this._mergedTexturesMap[bz.coatRoughnessTexture.uniqueId])))
          }
          if (bz.geometryCoatNormalTexture && Ez.push(bz.geometryCoatNormalTexture), bz.coatColorTexture && Ez.push(bz.coatColorTexture), bz.coatRoughnessAnisotropy > 0) {
            const zz = an(bz);
            if (this._mergedTexturesMap[zz]) Ez.push(this._mergedTexturesMap[zz]);
            else {
              const uz = await async function(zz) {
                const uz = zz.XT(),
                  bz = zz.coatRoughnessAnisotropyTexture,
                  Ez = zz.geometryCoatTangentTexture;
                return bz || Ez ? await lb("AnisotropyTexture", Hb(Ez ? Mb(Ez, 0) : tb(1), Ez ? Mb(Ez, 1) : tb(0), bz ? Mb(bz, 0) : tb(1)), uz) : null
              }(bz);
              uz && (Ez.push(uz), this._mergedTexturesMap[zz] = uz)
            }
            return Ez
          }
          return Ez
        }
        return []
      }
      postExportMaterialAsync(zz, uz, bz) {
        return new Promise((zz => {
          var Ez;
          if (bz instanceof ou) {
            if (!bz.clearCoat.isEnabled) return void zz(uz);
            this._wasUsed = !0, uz.extensions = uz.extensions || {};
            const Ez = this._exporter._materialExporter.getTextureInfo(bz.clearCoat.texture);
            let nz, iz;
            nz = bz.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(bz.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(bz.clearCoat.textureRoughness), bz.clearCoat.isTintEnabled && (iz = this._exporter._materialExporter.getTextureInfo(bz.clearCoat.tintTexture));
            const lz = this._exporter._materialExporter.getTextureInfo(bz.clearCoat.bumpTexture),
              Mz = bz.clearCoat.indexOfRefraction,
              tz = {
                coatFactor: bz.clearCoat.intensity,
                coatTexture: Ez ?? void 0,
                coatRoughnessFactor: bz.clearCoat.roughness,
                coatRoughnessTexture: nz ?? void 0,
                coatNormalTexture: lz ?? void 0,
                coatColorFactor: bz.clearCoat.tintColor.obz(),
                coatColorTexture: iz ?? void 0,
                coatIor: 1.5 !== Mz ? Mz : void 0
              };
            null === tz.coatTexture && null === tz.coatRoughnessTexture && null === tz.coatRoughnessTexture && null === tz.coatColorTexture || this._exporter._materialNeedsUVsSet.add(bz), uz.extensions[Gn] = tz
          } else if (bz instanceof Yu) {
            if (0 == bz.coatWeight) return void zz(uz);
            let nz, iz, lz, Mz;
            this._wasUsed = !0, uz.extensions = uz.extensions || {}, bz.coatWeightTexture && (nz = this._mergedTexturesMap[bz.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[bz.coatWeightTexture.uniqueId] : bz.coatWeightTexture, iz = this._exporter._materialExporter.getTextureInfo(nz)), bz.coatRoughnessTexture && (lz = this._mergedTexturesMap[bz.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[bz.coatRoughnessTexture.uniqueId] : bz.coatRoughnessTexture, Mz = this._exporter._materialExporter.getTextureInfo(lz));
            const tz = this._exporter._materialExporter.getTextureInfo(bz.geometryCoatNormalTexture),
              Hz = this._exporter._materialExporter.getTextureInfo(bz.coatColorTexture),
              Oz = bz.coatIor,
              pz = bz.coatDarkening,
              dz = bz.coatRoughnessTexture,
              Fz = an(bz),
              Zz = this._mergedTexturesMap[Fz];
            let Rz, Kz = 0,
              wz = 0;
            if (bz.coatRoughnessAnisotropy > 0) {
              if (dz || Zz) {
                const zz = Zz ? this._exporter._materialExporter.getTextureInfo(Zz) : null;
                Kz = bz.coatRoughnessAnisotropy, wz = bz.geometryCoatTangentAngle, Rz = zz || void 0
              } else {
                let zz = bz.coatRoughness,
                  Ez = bz.coatRoughnessAnisotropy;
                if (!bz._useGltfStyleAnisotropy) {
                  const uz = function(zz, uz) {
                    const bz = zz * zz,
                      Ez = bz * Math.sqrt(2 / (1 + (1 - uz) * (1 - uz))),
                      nz = (1 - uz) * Ez;
                    return {
                      newBaseRoughness: Math.sqrt(nz),
                      newAnisotropyStrength: Math.min(Math.sqrt((Ez - bz) / Math.max(1 - bz, 1e-4)), 1)
                    }
                  }(bz.coatRoughness, bz.coatRoughnessAnisotropy);
                  zz = uz.newBaseRoughness, Ez = uz.newAnisotropyStrength
                }
                uz.pbrMetallicRoughness && (uz.pbrMetallicRoughness.roughnessFactor = zz), Kz = Ez, wz = bz.geometryCoatTangentAngle + .5 * Math.PI, Rz = void 0
              }
              bz._useGltfStyleAnisotropy || (uz.extensions.KHR_materials_openpbr = {}, (Ez = this._exporter._glTF).extensionsUsed || (Ez.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const Xz = {
              coatFactor: bz.coatWeight,
              coatTexture: iz ?? void 0,
              coatRoughnessFactor: bz.coatRoughness,
              coatRoughnessTexture: Mz ?? void 0,
              coatNormalTexture: tz ?? void 0,
              coatColorFactor: bz.coatColor.obz(),
              coatColorTexture: Hz ?? void 0,
              coatIor: 1.5 !== Oz ? Oz : void 0,
              coatDarkeningFactor: 1 !== pz ? pz : void 0,
              coatAnisotropyRotation: wz,
              coatAnisotropyStrength: Kz,
              coatAnisotropyTexture: Rz
            };
            null === Xz.coatTexture && null === Xz.coatRoughnessTexture && null === Xz.coatRoughnessTexture && null === Xz.coatAnisotropyTexture && null === Xz.coatColorTexture || this._exporter._materialNeedsUVsSet.add(bz), uz.extensions[Gn] = Xz
          }
          zz(uz)
        }))
      }
    }
    let qn = !1;

    function hn() {
      qn || (qn = !0, VE.RegisterExtension(Gn, (zz => new mn(zz))))
    }
    hn();
    let Un = (() => {
      var zz, uz, bz, Ez, nz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz, oz, Nz, vz, Az, Tz, Lz, Pz, Gz, az, mz, qz, hz, Uz, cz, gz, Sz, yz, Dz, Qz, ez, jz, Iz, Bz, Cz, Yz, kz, zu, uu, bu, Eu, nu, iu, lu, Mu, tu, Hu, Ou, pu, du, Fu, Zu, Ru, Ku, wu, Xu, fu;
      let su, ru, vu, xu, Ju, Au, Tu, Lu, Pu, Gu, au, Vu, mu, qu, hu, Uu, cu, gu, Su, yu, Du, Qu, Wu, eu, ju, Iu, Bu, Cu, Yu, ku, zb, ub, bb, Eb, nb, ib, lb, Mb, tb, Hb, Ob, pb, db, Fb, Zb, Rb, Kb, wb, Xb, fb, sb, rb, ob, Nb, vb, xb, Jb, Ab, Tb, Lb, Pb, Gb, ab, Vb, mb, qb, hb, Ub, cb = ou,
        gb = [],
        Sb = [],
        yb = [],
        Db = [],
        Qb = [],
        Wb = [],
        eb = [],
        jb = [],
        Ib = [],
        Bb = [],
        Cb = [],
        Yb = [],
        kb = [],
        zE = [],
        uE = [],
        bE = [],
        EE = [],
        nE = [],
        iE = [],
        lE = [],
        ME = [],
        tE = [],
        HE = [],
        OE = [],
        pE = [],
        dE = [],
        FE = [],
        ZE = [],
        RE = [],
        KE = [],
        wE = [],
        XE = [],
        fE = [],
        sE = [],
        rE = [],
        oE = [],
        NE = [],
        vE = [],
        xE = [],
        JE = [],
        AE = [],
        TE = [],
        LE = [],
        PE = [],
        GE = [],
        aE = [],
        VE = [],
        mE = [],
        qE = [],
        hE = [],
        UE = [],
        cE = [],
        gE = [],
        SE = [],
        yE = [],
        DE = [],
        QE = [],
        WE = [],
        eE = [],
        jE = [],
        IE = [],
        BE = [],
        CE = [],
        YE = [],
        kE = [],
        zn = [],
        un = [],
        bn = [],
        En = [],
        nn = [],
        Mn = [],
        tn = [],
        Hn = [],
        On = [],
        pn = [],
        dn = [],
        Fn = [],
        Zn = [],
        Rn = [],
        Kn = [],
        wn = [],
        Xn = [],
        fn = [],
        sn = [],
        rn = [],
        Nn = [],
        vn = [],
        xn = [],
        Jn = [],
        An = [],
        Tn = [],
        Ln = [],
        Pn = [],
        Gn = [],
        an = [],
        Vn = [],
        mn = [],
        qn = [],
        hn = [],
        Un = [],
        cn = [],
        gn = [],
        Sn = [],
        yn = [],
        Dn = [],
        Qn = [],
        Wn = [],
        en = [],
        jn = [],
        In = [],
        Bn = [],
        Cn = [],
        Yn = [],
        kn = [],
        zi = [],
        ui = [],
        bi = [],
        Ei = [],
        ni = [],
        ii = [],
        li = [],
        Mi = [],
        ti = [],
        Hi = [],
        Oi = [],
        di = [],
        Fi = [],
        Zi = [],
        Ri = [],
        Ki = [],
        wi = [],
        Xi = [],
        fi = [];
      return zz = class extends cb {
        get directIntensity() {
          return (0, xz.c)(this, uz, "f")
        }
        set directIntensity(zz) {
          (0, xz.g)(this, uz, zz, "f")
        }
        get emissiveIntensity() {
          return (0, xz.c)(this, bz, "f")
        }
        set emissiveIntensity(zz) {
          (0, xz.g)(this, bz, zz, "f")
        }
        get environmentIntensity() {
          return (0, xz.c)(this, Ez, "f")
        }
        set environmentIntensity(zz) {
          (0, xz.g)(this, Ez, zz, "f")
        }
        get specularIntensity() {
          return (0, xz.c)(this, nz, "f")
        }
        set specularIntensity(zz) {
          (0, xz.g)(this, nz, zz, "f")
        }
        get disableBumpMap() {
          return (0, xz.c)(this, lz, "f")
        }
        set disableBumpMap(zz) {
          (0, xz.g)(this, lz, zz, "f")
        }
        get albedoTexture() {
          return (0, xz.c)(this, Mz, "f")
        }
        set albedoTexture(zz) {
          (0, xz.g)(this, Mz, zz, "f")
        }
        get baseWeightTexture() {
          return (0, xz.c)(this, tz, "f")
        }
        set baseWeightTexture(zz) {
          (0, xz.g)(this, tz, zz, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, xz.c)(this, Hz, "f")
        }
        set baseDiffuseRoughnessTexture(zz) {
          (0, xz.g)(this, Hz, zz, "f")
        }
        get ambientTexture() {
          return (0, xz.c)(this, Oz, "f")
        }
        set ambientTexture(zz) {
          (0, xz.g)(this, Oz, zz, "f")
        }
        get ambientTextureStrength() {
          return (0, xz.c)(this, pz, "f")
        }
        set ambientTextureStrength(zz) {
          (0, xz.g)(this, pz, zz, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, xz.c)(this, dz, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(zz) {
          (0, xz.g)(this, dz, zz, "f")
        }
        get opacityTexture() {
          return (0, xz.c)(this, Fz, "f")
        }
        set opacityTexture(zz) {
          (0, xz.g)(this, Fz, zz, "f")
        }
        get reflectionTexture() {
          return (0, xz.c)(this, Zz, "f")
        }
        set reflectionTexture(zz) {
          (0, xz.g)(this, Zz, zz, "f")
        }
        get emissiveTexture() {
          return (0, xz.c)(this, Rz, "f")
        }
        set emissiveTexture(zz) {
          (0, xz.g)(this, Rz, zz, "f")
        }
        get reflectivityTexture() {
          return (0, xz.c)(this, Kz, "f")
        }
        set reflectivityTexture(zz) {
          (0, xz.g)(this, Kz, zz, "f")
        }
        get metallicTexture() {
          return (0, xz.c)(this, wz, "f")
        }
        set metallicTexture(zz) {
          (0, xz.g)(this, wz, zz, "f")
        }
        get metallic() {
          return (0, xz.c)(this, Xz, "f")
        }
        set metallic(zz) {
          (0, xz.g)(this, Xz, zz, "f")
        }
        get roughness() {
          return (0, xz.c)(this, fz, "f")
        }
        set roughness(zz) {
          (0, xz.g)(this, fz, zz, "f")
        }
        get metallicF0Factor() {
          return (0, xz.c)(this, sz, "f")
        }
        set metallicF0Factor(zz) {
          (0, xz.g)(this, sz, zz, "f")
        }
        get metallicReflectanceColor() {
          return (0, xz.c)(this, rz, "f")
        }
        set metallicReflectanceColor(zz) {
          (0, xz.g)(this, rz, zz, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, xz.c)(this, oz, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(zz) {
          (0, xz.g)(this, oz, zz, "f")
        }
        get metallicReflectanceTexture() {
          return (0, xz.c)(this, Nz, "f")
        }
        set metallicReflectanceTexture(zz) {
          (0, xz.g)(this, Nz, zz, "f")
        }
        get reflectanceTexture() {
          return (0, xz.c)(this, vz, "f")
        }
        set reflectanceTexture(zz) {
          (0, xz.g)(this, vz, zz, "f")
        }
        get microSurfaceTexture() {
          return (0, xz.c)(this, Az, "f")
        }
        set microSurfaceTexture(zz) {
          (0, xz.g)(this, Az, zz, "f")
        }
        get bumpTexture() {
          return (0, xz.c)(this, Tz, "f")
        }
        set bumpTexture(zz) {
          (0, xz.g)(this, Tz, zz, "f")
        }
        get lightmapTexture() {
          return (0, xz.c)(this, Lz, "f")
        }
        set lightmapTexture(zz) {
          (0, xz.g)(this, Lz, zz, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(zz) {
          this.subSurface.refractionTexture = zz, zz ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, xz.c)(this, Pz, "f")
        }
        set ambientColor(zz) {
          (0, xz.g)(this, Pz, zz, "f")
        }
        get albedoColor() {
          return (0, xz.c)(this, Gz, "f")
        }
        set albedoColor(zz) {
          (0, xz.g)(this, Gz, zz, "f")
        }
        get baseWeight() {
          return (0, xz.c)(this, az, "f")
        }
        set baseWeight(zz) {
          (0, xz.g)(this, az, zz, "f")
        }
        get baseDiffuseRoughness() {
          return (0, xz.c)(this, mz, "f")
        }
        set baseDiffuseRoughness(zz) {
          (0, xz.g)(this, mz, zz, "f")
        }
        get reflectivityColor() {
          return (0, xz.c)(this, qz, "f")
        }
        set reflectivityColor(zz) {
          (0, xz.g)(this, qz, zz, "f")
        }
        get reflectionColor() {
          return (0, xz.c)(this, hz, "f")
        }
        set reflectionColor(zz) {
          (0, xz.g)(this, hz, zz, "f")
        }
        get emissiveColor() {
          return (0, xz.c)(this, Uz, "f")
        }
        set emissiveColor(zz) {
          (0, xz.g)(this, Uz, zz, "f")
        }
        get microSurface() {
          return (0, xz.c)(this, cz, "f")
        }
        set microSurface(zz) {
          (0, xz.g)(this, cz, zz, "f")
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
          return (0, xz.c)(this, gz, "f")
        }
        set useLightmapAsShadowmap(zz) {
          (0, xz.g)(this, gz, zz, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, xz.c)(this, Sz, "f")
        }
        set useAlphaFromAlbedoTexture(zz) {
          (0, xz.g)(this, Sz, zz, "f")
        }
        get forceAlphaTest() {
          return (0, xz.c)(this, yz, "f")
        }
        set forceAlphaTest(zz) {
          (0, xz.g)(this, yz, zz, "f")
        }
        get alphaCutOff() {
          return (0, xz.c)(this, Dz, "f")
        }
        set alphaCutOff(zz) {
          (0, xz.g)(this, Dz, zz, "f")
        }
        get useSpecularOverAlpha() {
          return (0, xz.c)(this, Qz, "f")
        }
        set useSpecularOverAlpha(zz) {
          (0, xz.g)(this, Qz, zz, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, xz.c)(this, ez, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(zz) {
          (0, xz.g)(this, ez, zz, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, xz.c)(this, jz, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(zz) {
          (0, xz.g)(this, jz, zz, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, xz.c)(this, Iz, "f")
        }
        set useRoughnessFromMetallicTextureGreen(zz) {
          (0, xz.g)(this, Iz, zz, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, xz.c)(this, Bz, "f")
        }
        set useMetallnessFromMetallicTextureBlue(zz) {
          (0, xz.g)(this, Bz, zz, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, xz.c)(this, Cz, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(zz) {
          (0, xz.g)(this, Cz, zz, "f")
        }
        get useAmbientInGrayScale() {
          return (0, xz.c)(this, Yz, "f")
        }
        set useAmbientInGrayScale(zz) {
          (0, xz.g)(this, Yz, zz, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, xz.c)(this, kz, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(zz) {
          (0, xz.g)(this, kz, zz, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === ou.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(zz) {
          zz !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = zz ? ou.LIGHTFALLOFF_PHYSICAL : ou.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === ou.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(zz) {
          zz !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = zz ? ou.LIGHTFALLOFF_GLTF : ou.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, xz.c)(this, zu, "f")
        }
        set useRadianceOverAlpha(zz) {
          (0, xz.g)(this, zu, zz, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, xz.c)(this, uu, "f")
        }
        set useObjectSpaceNormalMap(zz) {
          (0, xz.g)(this, uu, zz, "f")
        }
        get useParallax() {
          return (0, xz.c)(this, bu, "f")
        }
        set useParallax(zz) {
          (0, xz.g)(this, bu, zz, "f")
        }
        get useParallaxOcclusion() {
          return (0, xz.c)(this, Eu, "f")
        }
        set useParallaxOcclusion(zz) {
          (0, xz.g)(this, Eu, zz, "f")
        }
        get parallaxScaleBias() {
          return (0, xz.c)(this, nu, "f")
        }
        set parallaxScaleBias(zz) {
          (0, xz.g)(this, nu, zz, "f")
        }
        get disableLighting() {
          return (0, xz.c)(this, iu, "f")
        }
        set disableLighting(zz) {
          (0, xz.g)(this, iu, zz, "f")
        }
        get forceIrradianceInFragment() {
          return (0, xz.c)(this, lu, "f")
        }
        set forceIrradianceInFragment(zz) {
          (0, xz.g)(this, lu, zz, "f")
        }
        get maxSimultaneousLights() {
          return (0, xz.c)(this, Mu, "f")
        }
        set maxSimultaneousLights(zz) {
          (0, xz.g)(this, Mu, zz, "f")
        }
        get invertNormalMapX() {
          return (0, xz.c)(this, tu, "f")
        }
        set invertNormalMapX(zz) {
          (0, xz.g)(this, tu, zz, "f")
        }
        get invertNormalMapY() {
          return (0, xz.c)(this, Hu, "f")
        }
        set invertNormalMapY(zz) {
          (0, xz.g)(this, Hu, zz, "f")
        }
        get twoSidedLighting() {
          return (0, xz.c)(this, Ou, "f")
        }
        set twoSidedLighting(zz) {
          (0, xz.g)(this, Ou, zz, "f")
        }
        get useAlphaFresnel() {
          return (0, xz.c)(this, pu, "f")
        }
        set useAlphaFresnel(zz) {
          (0, xz.g)(this, pu, zz, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, xz.c)(this, du, "f")
        }
        set useLinearAlphaFresnel(zz) {
          (0, xz.g)(this, du, zz, "f")
        }
        get environmentBRDFTexture() {
          return (0, xz.c)(this, Fu, "f")
        }
        set environmentBRDFTexture(zz) {
          (0, xz.g)(this, Fu, zz, "f")
        }
        get forceNormalForward() {
          return (0, xz.c)(this, Zu, "f")
        }
        set forceNormalForward(zz) {
          (0, xz.g)(this, Zu, zz, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, xz.c)(this, Ru, "f")
        }
        set enableSpecularAntiAliasing(zz) {
          (0, xz.g)(this, Ru, zz, "f")
        }
        get useHorizonOcclusion() {
          return (0, xz.c)(this, Ku, "f")
        }
        set useHorizonOcclusion(zz) {
          (0, xz.g)(this, Ku, zz, "f")
        }
        get useRadianceOcclusion() {
          return (0, xz.c)(this, wu, "f")
        }
        set useRadianceOcclusion(zz) {
          (0, xz.g)(this, wu, zz, "f")
        }
        get unlit() {
          return (0, xz.c)(this, Xu, "f")
        }
        set unlit(zz) {
          (0, xz.g)(this, Xu, zz, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, xz.c)(this, fu, "f")
        }
        set applyDecalMapAfterDetailMap(zz) {
          (0, xz.g)(this, fu, zz, "f")
        }
        constructor(iz, Jz) {
          super(iz, Jz, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), uz.set(this, ((0, xz.j)(this, gb), (0, xz.j)(this, Sb, 1))), bz.set(this, ((0, xz.j)(this, yb), (0, xz.j)(this, Db, 1))), Ez.set(this, ((0, xz.j)(this, Qb), (0, xz.j)(this, Wb, 1))), nz.set(this, ((0, xz.j)(this, eb), (0, xz.j)(this, jb, 1))), lz.set(this, ((0, xz.j)(this, Ib), (0, xz.j)(this, Bb, !1))), Mz.set(this, ((0, xz.j)(this, Cb), (0, xz.j)(this, Yb, void 0))), tz.set(this, ((0, xz.j)(this, kb), (0, xz.j)(this, zE, void 0))), Hz.set(this, ((0, xz.j)(this, uE), (0, xz.j)(this, bE, void 0))), Oz.set(this, ((0, xz.j)(this, EE), (0, xz.j)(this, nE, void 0))), pz.set(this, ((0, xz.j)(this, iE), (0, xz.j)(this, lE, 1))), dz.set(this, ((0, xz.j)(this, ME), (0, xz.j)(this, tE, zz.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), Fz.set(this, ((0, xz.j)(this, HE), (0, xz.j)(this, OE, void 0))), Zz.set(this, ((0, xz.j)(this, pE), (0, xz.j)(this, dE, void 0))), Rz.set(this, ((0, xz.j)(this, FE), (0, xz.j)(this, ZE, void 0))), Kz.set(this, ((0, xz.j)(this, RE), (0, xz.j)(this, KE, void 0))), wz.set(this, ((0, xz.j)(this, wE), (0, xz.j)(this, XE, void 0))), Xz.set(this, ((0, xz.j)(this, fE), (0, xz.j)(this, sE, void 0))), fz.set(this, ((0, xz.j)(this, rE), (0, xz.j)(this, oE, void 0))), sz.set(this, ((0, xz.j)(this, NE), (0, xz.j)(this, vE, 1))), rz.set(this, ((0, xz.j)(this, xE), (0, xz.j)(this, JE, Wz.c.White()))), oz.set(this, ((0, xz.j)(this, AE), (0, xz.j)(this, TE, !1))), Nz.set(this, ((0, xz.j)(this, LE), (0, xz.j)(this, PE, void 0))), vz.set(this, ((0, xz.j)(this, GE), (0, xz.j)(this, aE, void 0))), Az.set(this, ((0, xz.j)(this, VE), (0, xz.j)(this, mE, void 0))), Tz.set(this, ((0, xz.j)(this, qE), (0, xz.j)(this, hE, void 0))), Lz.set(this, ((0, xz.j)(this, UE), (0, xz.j)(this, cE, void 0))), Pz.set(this, ((0, xz.j)(this, gE), (0, xz.j)(this, SE, new Wz.c(0, 0, 0)))), Gz.set(this, ((0, xz.j)(this, yE), (0, xz.j)(this, DE, new Wz.c(1, 1, 1)))), az.set(this, ((0, xz.j)(this, QE), (0, xz.j)(this, WE, 1))), mz.set(this, ((0, xz.j)(this, eE), (0, xz.j)(this, jE, void 0))), qz.set(this, ((0, xz.j)(this, IE), (0, xz.j)(this, BE, new Wz.c(1, 1, 1)))), hz.set(this, ((0, xz.j)(this, CE), (0, xz.j)(this, YE, new Wz.c(1, 1, 1)))), Uz.set(this, ((0, xz.j)(this, kE), (0, xz.j)(this, zn, new Wz.c(0, 0, 0)))), cz.set(this, ((0, xz.j)(this, un), (0, xz.j)(this, bn, 1))), gz.set(this, ((0, xz.j)(this, En), (0, xz.j)(this, nn, !1))), Sz.set(this, ((0, xz.j)(this, Mn), (0, xz.j)(this, tn, !1))), yz.set(this, ((0, xz.j)(this, Hn), (0, xz.j)(this, On, !1))), Dz.set(this, ((0, xz.j)(this, pn), (0, xz.j)(this, dn, .4))), Qz.set(this, ((0, xz.j)(this, Fn), (0, xz.j)(this, Zn, !0))), ez.set(this, ((0, xz.j)(this, Rn), (0, xz.j)(this, Kn, !1))), jz.set(this, ((0, xz.j)(this, wn), (0, xz.j)(this, Xn, !0))), Iz.set(this, ((0, xz.j)(this, fn), (0, xz.j)(this, sn, !1))), Bz.set(this, ((0, xz.j)(this, rn), (0, xz.j)(this, Nn, !1))), Cz.set(this, ((0, xz.j)(this, vn), (0, xz.j)(this, xn, !1))), Yz.set(this, ((0, xz.j)(this, Jn), (0, xz.j)(this, An, !1))), kz.set(this, ((0, xz.j)(this, Tn), (0, xz.j)(this, Ln, !1))), zu.set(this, ((0, xz.j)(this, Pn), (0, xz.j)(this, Gn, !0))), uu.set(this, ((0, xz.j)(this, an), (0, xz.j)(this, Vn, !1))), bu.set(this, ((0, xz.j)(this, mn), (0, xz.j)(this, qn, !1))), Eu.set(this, ((0, xz.j)(this, hn), (0, xz.j)(this, Un, !1))), nu.set(this, ((0, xz.j)(this, cn), (0, xz.j)(this, gn, .05))), iu.set(this, ((0, xz.j)(this, Sn), (0, xz.j)(this, yn, !1))), lu.set(this, ((0, xz.j)(this, Dn), (0, xz.j)(this, Qn, !1))), Mu.set(this, ((0, xz.j)(this, Wn), (0, xz.j)(this, en, 4))), tu.set(this, ((0, xz.j)(this, jn), (0, xz.j)(this, In, !1))), Hu.set(this, ((0, xz.j)(this, Bn), (0, xz.j)(this, Cn, !1))), Ou.set(this, ((0, xz.j)(this, Yn), (0, xz.j)(this, kn, !1))), pu.set(this, ((0, xz.j)(this, zi), (0, xz.j)(this, ui, !1))), du.set(this, ((0, xz.j)(this, bi), (0, xz.j)(this, Ei, !1))), Fu.set(this, ((0, xz.j)(this, ni), (0, xz.j)(this, ii, null))), Zu.set(this, ((0, xz.j)(this, li), (0, xz.j)(this, Mi, !1))), Ru.set(this, ((0, xz.j)(this, ti), (0, xz.j)(this, Hi, !1))), Ku.set(this, ((0, xz.j)(this, Oi), (0, xz.j)(this, di, !0))), wu.set(this, ((0, xz.j)(this, Fi), (0, xz.j)(this, Zi, !0))), Xu.set(this, ((0, xz.j)(this, Ri), (0, xz.j)(this, Ki, !1))), fu.set(this, ((0, xz.j)(this, wi), (0, xz.j)(this, Xi, !1))), (0, xz.j)(this, fi), this._environmentBRDFTexture = Vz(this.XT())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(uz) {
          let bz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const nz = Nu.e.Clone((() => new zz(uz, this.XT())), this, {
            cloneTexturesOnlyOnce: bz
          });
          return nz.id = uz, nz.name = uz, this.stencil.copyTo(nz.stencil), this._clonePlugins(nz, Ez), nz
        }
        serialize() {
          const zz = super.serialize();
          return zz.customType = "BABYLON.PBRMaterial", zz
        }
        static Parse(uz, bz, Ez) {
          const nz = Nu.e.Parse((() => new zz(uz.name, bz)), uz, bz, Ez);
          return uz.stencil && nz.stencil.parse(uz.stencil, bz, Ez), iz.c._ParsePlugins(uz, nz, bz, Ez), uz.clearCoat && nz.clearCoat.parse(uz.clearCoat, bz, Ez), uz.anisotropy && nz.anisotropy.parse(uz.anisotropy, bz, Ez), uz.brdf && nz.brdf.parse(uz.brdf, bz, Ez), uz.sheen && nz.sheen.parse(uz.sheen, bz, Ez), uz.subSurface && nz.subSurface.parse(uz.subSurface, bz, Ez), uz.iridescence && nz.iridescence.parse(uz.iridescence, bz, Ez), nz
        }
      }, uz = new WeakMap, bz = new WeakMap, Ez = new WeakMap, nz = new WeakMap, lz = new WeakMap, Mz = new WeakMap, tz = new WeakMap, Hz = new WeakMap, Oz = new WeakMap, pz = new WeakMap, dz = new WeakMap, Fz = new WeakMap, Zz = new WeakMap, Rz = new WeakMap, Kz = new WeakMap, wz = new WeakMap, Xz = new WeakMap, fz = new WeakMap, sz = new WeakMap, rz = new WeakMap, oz = new WeakMap, Nz = new WeakMap, vz = new WeakMap, Az = new WeakMap, Tz = new WeakMap, Lz = new WeakMap, Pz = new WeakMap, Gz = new WeakMap, az = new WeakMap, mz = new WeakMap, qz = new WeakMap, hz = new WeakMap, Uz = new WeakMap, cz = new WeakMap, gz = new WeakMap, Sz = new WeakMap, yz = new WeakMap, Dz = new WeakMap, Qz = new WeakMap, ez = new WeakMap, jz = new WeakMap, Iz = new WeakMap, Bz = new WeakMap, Cz = new WeakMap, Yz = new WeakMap, kz = new WeakMap, zu = new WeakMap, uu = new WeakMap, bu = new WeakMap, Eu = new WeakMap, nu = new WeakMap, iu = new WeakMap, lu = new WeakMap, Mu = new WeakMap, tu = new WeakMap, Hu = new WeakMap, Ou = new WeakMap, pu = new WeakMap, du = new WeakMap, Fu = new WeakMap, Zu = new WeakMap, Ru = new WeakMap, Ku = new WeakMap, wu = new WeakMap, Xu = new WeakMap, fu = new WeakMap, (() => {
        const uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(cb[Symbol.metadata] ?? null) : void 0;
        su = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], ru = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], vu = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], xu = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Ju = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Au = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Tu = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Lu = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Pu = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Gu = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], au = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Vu = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], mu = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], qu = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], hu = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Uu = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], cu = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], gu = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Su = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], yu = [(0, Jz.q)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Du = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Qu = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Wu = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], eu = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], ju = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Iu = [(0, Jz.B)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty", null)], Bu = [(0, Jz.q)("ambient"), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Cu = [(0, Jz.q)("albedo"), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Yu = [(0, Jz.G)("baseWeight"), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], ku = [(0, Jz.G)("baseDiffuseRoughness"), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], zb = [(0, Jz.q)("reflectivity"), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], ub = [(0, Jz.q)("reflection"), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], bb = [(0, Jz.q)("emissive"), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Eb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], nb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], ib = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], lb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Mb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], tb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Hb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Ob = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], pb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], db = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Fb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Zb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Rb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Kb = [(0, Jz.G)()], wb = [(0, Jz.G)()], Xb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], fb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], sb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], rb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], ob = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Nb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsLightsDirty")], vb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], xb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsLightsDirty")], Jb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Ab = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Tb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Lb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Pb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Gb = [(0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], ab = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], Vb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], mb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], qb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsTexturesDirty")], hb = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], Ub = [(0, Jz.G)(), (0, Jz.i)("_markAllSubMeshesAsMiscDirty")], (0, xz.h)(zz, null, su, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "directIntensity" in zz,
            get: zz => zz.directIntensity,
            set: (zz, uz) => {
              zz.directIntensity = uz
            }
          },
          metadata: uz
        }, Sb, yb), (0, xz.h)(zz, null, ru, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "emissiveIntensity" in zz,
            get: zz => zz.emissiveIntensity,
            set: (zz, uz) => {
              zz.emissiveIntensity = uz
            }
          },
          metadata: uz
        }, Db, Qb), (0, xz.h)(zz, null, vu, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "environmentIntensity" in zz,
            get: zz => zz.environmentIntensity,
            set: (zz, uz) => {
              zz.environmentIntensity = uz
            }
          },
          metadata: uz
        }, Wb, eb), (0, xz.h)(zz, null, xu, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: zz => "specularIntensity" in zz,
            get: zz => zz.specularIntensity,
            set: (zz, uz) => {
              zz.specularIntensity = uz
            }
          },
          metadata: uz
        }, jb, Ib), (0, xz.h)(zz, null, Ju, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: zz => "disableBumpMap" in zz,
            get: zz => zz.disableBumpMap,
            set: (zz, uz) => {
              zz.disableBumpMap = uz
            }
          },
          metadata: uz
        }, Bb, Cb), (0, xz.h)(zz, null, Au, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "albedoTexture" in zz,
            get: zz => zz.albedoTexture,
            set: (zz, uz) => {
              zz.albedoTexture = uz
            }
          },
          metadata: uz
        }, Yb, kb), (0, xz.h)(zz, null, Tu, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "baseWeightTexture" in zz,
            get: zz => zz.baseWeightTexture,
            set: (zz, uz) => {
              zz.baseWeightTexture = uz
            }
          },
          metadata: uz
        }, zE, uE), (0, xz.h)(zz, null, Lu, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "baseDiffuseRoughnessTexture" in zz,
            get: zz => zz.baseDiffuseRoughnessTexture,
            set: (zz, uz) => {
              zz.baseDiffuseRoughnessTexture = uz
            }
          },
          metadata: uz
        }, bE, EE), (0, xz.h)(zz, null, Pu, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "ambientTexture" in zz,
            get: zz => zz.ambientTexture,
            set: (zz, uz) => {
              zz.ambientTexture = uz
            }
          },
          metadata: uz
        }, nE, iE), (0, xz.h)(zz, null, Gu, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: zz => "ambientTextureStrength" in zz,
            get: zz => zz.ambientTextureStrength,
            set: (zz, uz) => {
              zz.ambientTextureStrength = uz
            }
          },
          metadata: uz
        }, lE, ME), (0, xz.h)(zz, null, au, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: zz => "ambientTextureImpactOnAnalyticalLights" in zz,
            get: zz => zz.ambientTextureImpactOnAnalyticalLights,
            set: (zz, uz) => {
              zz.ambientTextureImpactOnAnalyticalLights = uz
            }
          },
          metadata: uz
        }, tE, HE), (0, xz.h)(zz, null, Vu, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "opacityTexture" in zz,
            get: zz => zz.opacityTexture,
            set: (zz, uz) => {
              zz.opacityTexture = uz
            }
          },
          metadata: uz
        }, OE, pE), (0, xz.h)(zz, null, mu, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "reflectionTexture" in zz,
            get: zz => zz.reflectionTexture,
            set: (zz, uz) => {
              zz.reflectionTexture = uz
            }
          },
          metadata: uz
        }, dE, FE), (0, xz.h)(zz, null, qu, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "emissiveTexture" in zz,
            get: zz => zz.emissiveTexture,
            set: (zz, uz) => {
              zz.emissiveTexture = uz
            }
          },
          metadata: uz
        }, ZE, RE), (0, xz.h)(zz, null, hu, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "reflectivityTexture" in zz,
            get: zz => zz.reflectivityTexture,
            set: (zz, uz) => {
              zz.reflectivityTexture = uz
            }
          },
          metadata: uz
        }, KE, wE), (0, xz.h)(zz, null, Uu, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "metallicTexture" in zz,
            get: zz => zz.metallicTexture,
            set: (zz, uz) => {
              zz.metallicTexture = uz
            }
          },
          metadata: uz
        }, XE, fE), (0, xz.h)(zz, null, cu, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: zz => "metallic" in zz,
            get: zz => zz.metallic,
            set: (zz, uz) => {
              zz.metallic = uz
            }
          },
          metadata: uz
        }, sE, rE), (0, xz.h)(zz, null, gu, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: zz => "roughness" in zz,
            get: zz => zz.roughness,
            set: (zz, uz) => {
              zz.roughness = uz
            }
          },
          metadata: uz
        }, oE, NE), (0, xz.h)(zz, null, Su, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: zz => "metallicF0Factor" in zz,
            get: zz => zz.metallicF0Factor,
            set: (zz, uz) => {
              zz.metallicF0Factor = uz
            }
          },
          metadata: uz
        }, vE, xE), (0, xz.h)(zz, null, yu, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "metallicReflectanceColor" in zz,
            get: zz => zz.metallicReflectanceColor,
            set: (zz, uz) => {
              zz.metallicReflectanceColor = uz
            }
          },
          metadata: uz
        }, JE, AE), (0, xz.h)(zz, null, Du, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "useOnlyMetallicFromMetallicReflectanceTexture" in zz,
            get: zz => zz.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (zz, uz) => {
              zz.useOnlyMetallicFromMetallicReflectanceTexture = uz
            }
          },
          metadata: uz
        }, TE, LE), (0, xz.h)(zz, null, Qu, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "metallicReflectanceTexture" in zz,
            get: zz => zz.metallicReflectanceTexture,
            set: (zz, uz) => {
              zz.metallicReflectanceTexture = uz
            }
          },
          metadata: uz
        }, PE, GE), (0, xz.h)(zz, null, Wu, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "reflectanceTexture" in zz,
            get: zz => zz.reflectanceTexture,
            set: (zz, uz) => {
              zz.reflectanceTexture = uz
            }
          },
          metadata: uz
        }, aE, VE), (0, xz.h)(zz, null, eu, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "microSurfaceTexture" in zz,
            get: zz => zz.microSurfaceTexture,
            set: (zz, uz) => {
              zz.microSurfaceTexture = uz
            }
          },
          metadata: uz
        }, mE, qE), (0, xz.h)(zz, null, ju, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "bumpTexture" in zz,
            get: zz => zz.bumpTexture,
            set: (zz, uz) => {
              zz.bumpTexture = uz
            }
          },
          metadata: uz
        }, hE, UE), (0, xz.h)(zz, null, Iu, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "lightmapTexture" in zz,
            get: zz => zz.lightmapTexture,
            set: (zz, uz) => {
              zz.lightmapTexture = uz
            }
          },
          metadata: uz
        }, cE, gE), (0, xz.h)(zz, null, Bu, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "ambientColor" in zz,
            get: zz => zz.ambientColor,
            set: (zz, uz) => {
              zz.ambientColor = uz
            }
          },
          metadata: uz
        }, SE, yE), (0, xz.h)(zz, null, Cu, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "albedoColor" in zz,
            get: zz => zz.albedoColor,
            set: (zz, uz) => {
              zz.albedoColor = uz
            }
          },
          metadata: uz
        }, DE, QE), (0, xz.h)(zz, null, Yu, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: zz => "baseWeight" in zz,
            get: zz => zz.baseWeight,
            set: (zz, uz) => {
              zz.baseWeight = uz
            }
          },
          metadata: uz
        }, WE, eE), (0, xz.h)(zz, null, ku, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: zz => "baseDiffuseRoughness" in zz,
            get: zz => zz.baseDiffuseRoughness,
            set: (zz, uz) => {
              zz.baseDiffuseRoughness = uz
            }
          },
          metadata: uz
        }, jE, IE), (0, xz.h)(zz, null, zb, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "reflectivityColor" in zz,
            get: zz => zz.reflectivityColor,
            set: (zz, uz) => {
              zz.reflectivityColor = uz
            }
          },
          metadata: uz
        }, BE, CE), (0, xz.h)(zz, null, ub, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "reflectionColor" in zz,
            get: zz => zz.reflectionColor,
            set: (zz, uz) => {
              zz.reflectionColor = uz
            }
          },
          metadata: uz
        }, YE, kE), (0, xz.h)(zz, null, bb, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: zz => "emissiveColor" in zz,
            get: zz => zz.emissiveColor,
            set: (zz, uz) => {
              zz.emissiveColor = uz
            }
          },
          metadata: uz
        }, zn, un), (0, xz.h)(zz, null, Eb, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: zz => "microSurface" in zz,
            get: zz => zz.microSurface,
            set: (zz, uz) => {
              zz.microSurface = uz
            }
          },
          metadata: uz
        }, bn, En), (0, xz.h)(zz, null, nb, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: zz => "useLightmapAsShadowmap" in zz,
            get: zz => zz.useLightmapAsShadowmap,
            set: (zz, uz) => {
              zz.useLightmapAsShadowmap = uz
            }
          },
          metadata: uz
        }, nn, Mn), (0, xz.h)(zz, null, ib, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAlphaFromAlbedoTexture" in zz,
            get: zz => zz.useAlphaFromAlbedoTexture,
            set: (zz, uz) => {
              zz.useAlphaFromAlbedoTexture = uz
            }
          },
          metadata: uz
        }, tn, Hn), (0, xz.h)(zz, null, lb, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: zz => "forceAlphaTest" in zz,
            get: zz => zz.forceAlphaTest,
            set: (zz, uz) => {
              zz.forceAlphaTest = uz
            }
          },
          metadata: uz
        }, On, pn), (0, xz.h)(zz, null, Mb, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: zz => "alphaCutOff" in zz,
            get: zz => zz.alphaCutOff,
            set: (zz, uz) => {
              zz.alphaCutOff = uz
            }
          },
          metadata: uz
        }, dn, Fn), (0, xz.h)(zz, null, tb, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "useSpecularOverAlpha" in zz,
            get: zz => zz.useSpecularOverAlpha,
            set: (zz, uz) => {
              zz.useSpecularOverAlpha = uz
            }
          },
          metadata: uz
        }, Zn, Rn), (0, xz.h)(zz, null, Hb, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "useMicroSurfaceFromReflectivityMapAlpha" in zz,
            get: zz => zz.useMicroSurfaceFromReflectivityMapAlpha,
            set: (zz, uz) => {
              zz.useMicroSurfaceFromReflectivityMapAlpha = uz
            }
          },
          metadata: uz
        }, Kn, wn), (0, xz.h)(zz, null, Ob, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "useRoughnessFromMetallicTextureAlpha" in zz,
            get: zz => zz.useRoughnessFromMetallicTextureAlpha,
            set: (zz, uz) => {
              zz.useRoughnessFromMetallicTextureAlpha = uz
            }
          },
          metadata: uz
        }, Xn, fn), (0, xz.h)(zz, null, pb, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: zz => "useRoughnessFromMetallicTextureGreen" in zz,
            get: zz => zz.useRoughnessFromMetallicTextureGreen,
            set: (zz, uz) => {
              zz.useRoughnessFromMetallicTextureGreen = uz
            }
          },
          metadata: uz
        }, sn, rn), (0, xz.h)(zz, null, db, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: zz => "useMetallnessFromMetallicTextureBlue" in zz,
            get: zz => zz.useMetallnessFromMetallicTextureBlue,
            set: (zz, uz) => {
              zz.useMetallnessFromMetallicTextureBlue = uz
            }
          },
          metadata: uz
        }, Nn, vn), (0, xz.h)(zz, null, Fb, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAmbientOcclusionFromMetallicTextureRed" in zz,
            get: zz => zz.useAmbientOcclusionFromMetallicTextureRed,
            set: (zz, uz) => {
              zz.useAmbientOcclusionFromMetallicTextureRed = uz
            }
          },
          metadata: uz
        }, xn, Jn), (0, xz.h)(zz, null, Zb, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAmbientInGrayScale" in zz,
            get: zz => zz.useAmbientInGrayScale,
            set: (zz, uz) => {
              zz.useAmbientInGrayScale = uz
            }
          },
          metadata: uz
        }, An, Tn), (0, xz.h)(zz, null, Rb, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAutoMicroSurfaceFromReflectivityMap" in zz,
            get: zz => zz.useAutoMicroSurfaceFromReflectivityMap,
            set: (zz, uz) => {
              zz.useAutoMicroSurfaceFromReflectivityMap = uz
            }
          },
          metadata: uz
        }, Ln, Pn), (0, xz.h)(zz, null, Kb, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: zz => "usePhysicalLightFalloff" in zz,
            get: zz => zz.usePhysicalLightFalloff
          },
          metadata: uz
        }, null, gb), (0, xz.h)(zz, null, wb, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: zz => "useGLTFLightFalloff" in zz,
            get: zz => zz.useGLTFLightFalloff
          },
          metadata: uz
        }, null, gb), (0, xz.h)(zz, null, Xb, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: zz => "useRadianceOverAlpha" in zz,
            get: zz => zz.useRadianceOverAlpha,
            set: (zz, uz) => {
              zz.useRadianceOverAlpha = uz
            }
          },
          metadata: uz
        }, Gn, an), (0, xz.h)(zz, null, fb, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: zz => "useObjectSpaceNormalMap" in zz,
            get: zz => zz.useObjectSpaceNormalMap,
            set: (zz, uz) => {
              zz.useObjectSpaceNormalMap = uz
            }
          },
          metadata: uz
        }, Vn, mn), (0, xz.h)(zz, null, sb, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: zz => "useParallax" in zz,
            get: zz => zz.useParallax,
            set: (zz, uz) => {
              zz.useParallax = uz
            }
          },
          metadata: uz
        }, qn, hn), (0, xz.h)(zz, null, rb, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: zz => "useParallaxOcclusion" in zz,
            get: zz => zz.useParallaxOcclusion,
            set: (zz, uz) => {
              zz.useParallaxOcclusion = uz
            }
          },
          metadata: uz
        }, Un, cn), (0, xz.h)(zz, null, ob, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: zz => "parallaxScaleBias" in zz,
            get: zz => zz.parallaxScaleBias,
            set: (zz, uz) => {
              zz.parallaxScaleBias = uz
            }
          },
          metadata: uz
        }, gn, Sn), (0, xz.h)(zz, null, Nb, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: zz => "disableLighting" in zz,
            get: zz => zz.disableLighting,
            set: (zz, uz) => {
              zz.disableLighting = uz
            }
          },
          metadata: uz
        }, yn, Dn), (0, xz.h)(zz, null, vb, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: zz => "forceIrradianceInFragment" in zz,
            get: zz => zz.forceIrradianceInFragment,
            set: (zz, uz) => {
              zz.forceIrradianceInFragment = uz
            }
          },
          metadata: uz
        }, Qn, Wn), (0, xz.h)(zz, null, xb, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: zz => "maxSimultaneousLights" in zz,
            get: zz => zz.maxSimultaneousLights,
            set: (zz, uz) => {
              zz.maxSimultaneousLights = uz
            }
          },
          metadata: uz
        }, en, jn), (0, xz.h)(zz, null, Jb, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: zz => "invertNormalMapX" in zz,
            get: zz => zz.invertNormalMapX,
            set: (zz, uz) => {
              zz.invertNormalMapX = uz
            }
          },
          metadata: uz
        }, In, Bn), (0, xz.h)(zz, null, Ab, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: zz => "invertNormalMapY" in zz,
            get: zz => zz.invertNormalMapY,
            set: (zz, uz) => {
              zz.invertNormalMapY = uz
            }
          },
          metadata: uz
        }, Cn, Yn), (0, xz.h)(zz, null, Tb, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: zz => "twoSidedLighting" in zz,
            get: zz => zz.twoSidedLighting,
            set: (zz, uz) => {
              zz.twoSidedLighting = uz
            }
          },
          metadata: uz
        }, kn, zi), (0, xz.h)(zz, null, Lb, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: zz => "useAlphaFresnel" in zz,
            get: zz => zz.useAlphaFresnel,
            set: (zz, uz) => {
              zz.useAlphaFresnel = uz
            }
          },
          metadata: uz
        }, ui, bi), (0, xz.h)(zz, null, Pb, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: zz => "useLinearAlphaFresnel" in zz,
            get: zz => zz.useLinearAlphaFresnel,
            set: (zz, uz) => {
              zz.useLinearAlphaFresnel = uz
            }
          },
          metadata: uz
        }, Ei, ni), (0, xz.h)(zz, null, Gb, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: zz => "environmentBRDFTexture" in zz,
            get: zz => zz.environmentBRDFTexture,
            set: (zz, uz) => {
              zz.environmentBRDFTexture = uz
            }
          },
          metadata: uz
        }, ii, li), (0, xz.h)(zz, null, ab, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: zz => "forceNormalForward" in zz,
            get: zz => zz.forceNormalForward,
            set: (zz, uz) => {
              zz.forceNormalForward = uz
            }
          },
          metadata: uz
        }, Mi, ti), (0, xz.h)(zz, null, Vb, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: zz => "enableSpecularAntiAliasing" in zz,
            get: zz => zz.enableSpecularAntiAliasing,
            set: (zz, uz) => {
              zz.enableSpecularAntiAliasing = uz
            }
          },
          metadata: uz
        }, Hi, Oi), (0, xz.h)(zz, null, mb, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: zz => "useHorizonOcclusion" in zz,
            get: zz => zz.useHorizonOcclusion,
            set: (zz, uz) => {
              zz.useHorizonOcclusion = uz
            }
          },
          metadata: uz
        }, di, Fi), (0, xz.h)(zz, null, qb, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: zz => "useRadianceOcclusion" in zz,
            get: zz => zz.useRadianceOcclusion,
            set: (zz, uz) => {
              zz.useRadianceOcclusion = uz
            }
          },
          metadata: uz
        }, Zi, Ri), (0, xz.h)(zz, null, hb, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: zz => "unlit" in zz,
            get: zz => zz.unlit,
            set: (zz, uz) => {
              zz.unlit = uz
            }
          },
          metadata: uz
        }, Ki, wi), (0, xz.h)(zz, null, Ub, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: zz => "applyDecalMapAfterDetailMap" in zz,
            get: zz => zz.applyDecalMapAfterDetailMap,
            set: (zz, uz) => {
              zz.applyDecalMapAfterDetailMap = uz
            }
          },
          metadata: uz
        }, Xi, fi), uz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uz
        })
      })(), zz.PBRMATERIAL_OPAQUE = ou.PBRMATERIAL_OPAQUE, zz.PBRMATERIAL_ALPHATEST = ou.PBRMATERIAL_ALPHATEST, zz.PBRMATERIAL_ALPHABLEND = ou.PBRMATERIAL_ALPHABLEND, zz.PBRMATERIAL_ALPHATESTANDBLEND = ou.PBRMATERIAL_ALPHATESTANDBLEND, zz.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = ou.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, zz
    })();
    const cn = "KHR_materials_diffuse_transmission";

    function gn(zz, uz) {
      const bz = uz.subSurface;
      let Ez = null;
      return bz.translucencyIntensityTexture ? Ez = bz.translucencyIntensityTexture : bz.thicknessTexture && bz.useMaskFromThicknessTexture && (Ez = bz.thicknessTexture), Ez && !bz.useGltfStyleTextures ? (Az.e.Warn(`${zz}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${uz.name}`, 1), null) : Ez
    }
    class Sn {
      constructor(zz) {
        this.name = cn, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, uz, bz) {
        const Ez = [];
        if (bz instanceof Un && this._isExtensionEnabled(bz)) {
          const uz = gn(zz, bz);
          return uz && Ez.push(uz), bz.subSurface.translucencyColorTexture && Ez.push(bz.subSurface.translucencyColorTexture), Ez
        }
        return Ez
      }
      _isExtensionEnabled(zz) {
        if (zz.unlit) return !1;
        const uz = zz.subSurface;
        return !!uz.isTranslucencyEnabled && (!zz.unlit && !uz.useAlbedoToTintTranslucency && uz.useGltfStyleTextures && 1 === uz.volumeIndexOfRefraction && 0 === uz.minimumThickness && 0 === uz.maximumThickness)
      }
      postExportMaterialAsync(zz, uz, bz) {
        return new Promise((Ez => {
          if (bz instanceof Un && this._isExtensionEnabled(bz)) {
            this._wasUsed = !0;
            const Ez = bz.subSurface,
              nz = gn(zz, bz),
              iz = 0 == Ez.translucencyIntensity ? void 0 : Ez.translucencyIntensity,
              lz = this._exporter._materialExporter.getTextureInfo(nz) ?? void 0,
              Mz = !Ez.translucencyColor || Ez.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Ez.translucencyColor.obz(),
              tz = this._exporter._materialExporter.getTextureInfo(Ez.translucencyColorTexture) ?? void 0,
              Hz = {
                diffuseTransmissionFactor: iz,
                diffuseTransmissionTexture: lz,
                diffuseTransmissionColorFactor: Mz,
                diffuseTransmissionColorTexture: tz
              };
            (lz || tz) && this._exporter._materialNeedsUVsSet.add(bz), uz.extensions = uz.extensions || {}, uz.extensions[cn] = Hz
          }
          Ez(uz)
        }))
      }
    }
    let yn = !1;

    function Dn() {
      yn || (yn = !0, VE.RegisterExtension(cn, (zz => new Sn(zz))))
    }
    Dn();
    const Qn = "KHR_materials_dispersion";
    class Wn {
      constructor() {
        this.name = Qn, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(zz) {
        if (zz.unlit) return !1;
        const uz = zz.subSurface;
        return !(!uz.isRefractionEnabled && !uz.isDispersionEnabled)
      }
      postExportMaterialAsync(zz, uz, bz) {
        return new Promise((zz => {
          if (bz instanceof Un && this._isExtensionEnabled(bz)) {
            this._wasUsed = !0;
            const zz = {
              dispersion: bz.subSurface.dispersion
            };
            uz.extensions = uz.extensions || {}, uz.extensions[Qn] = zz
          }
          zz(uz)
        }))
      }
    }
    let en = !1;

    function jn() {
      en || (en = !0, VE.RegisterExtension(Qn, (() => new Wn)))
    }
    jn();
    const In = "KHR_materials_emissive_strength";
    class Bn {
      constructor() {
        this.name = In, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(zz, uz, bz) {
        return await new Promise((zz => {
          if (!(bz instanceof Un)) return zz(uz);
          const Ez = bz.emissiveColor.scale(bz.emissiveIntensity),
            nz = Math.max(...Ez.obz());
          if (nz > 1) {
            uz.emissiveFactor = Ez.scale(1 / nz).obz(), this._wasUsed = !0;
            const zz = {
              emissiveStrength: nz
            };
            uz.extensions || (uz.extensions = {}), uz.extensions[In] = zz
          } else uz.emissiveFactor = Ez.obz();
          return zz(uz)
        }))
      }
    }
    let Cn = !1;

    function Yn() {
      Cn || (Cn = !0, VE.RegisterExtension(In, (() => new Bn)))
    }
    Yn();
    const kn = "KHR_materials_ior";
    class zi {
      constructor() {
        this.name = kn, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(zz) {
        return !zz.unlit && (zz instanceof Yu ? 1.5 != zz.specularIor : zz instanceof Un && (void 0 != zz.indexOfRefraction && 1.5 != zz.indexOfRefraction))
      }
      postExportMaterialAsync(zz, uz, bz) {
        return new Promise((zz => {
          if (bz instanceof Un && this._isExtensionEnabled(bz)) {
            this._wasUsed = !0;
            const zz = {
              ior: bz.indexOfRefraction
            };
            uz.extensions = uz.extensions || {}, uz.extensions[kn] = zz
          } else if (bz instanceof Yu && this._isExtensionEnabled(bz)) {
            this._wasUsed = !0;
            const zz = {
              ior: bz.specularIor
            };
            uz.extensions = uz.extensions || {}, uz.extensions[kn] = zz
          }
          zz(uz)
        }))
      }
    }
    let ui = !1;

    function bi() {
      ui || (ui = !0, VE.RegisterExtension(kn, (() => new zi)))
    }
    bi();
    const Ei = "KHR_materials_iridescence";
    class ni {
      constructor(zz) {
        this.name = Ei, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, uz, bz) {
        const Ez = [];
        if (bz instanceof ou) {
          if (bz.iridescence.isEnabled) return bz.iridescence.texture && Ez.push(bz.iridescence.texture), bz.iridescence.thicknessTexture && bz.iridescence.thicknessTexture !== bz.iridescence.texture && Ez.push(bz.iridescence.thicknessTexture), Ez
        } else if (bz instanceof Yu && bz.thinFilmWeight > 0) return bz.thinFilmWeightTexture && Ez.push(bz.thinFilmWeightTexture), bz.thinFilmThicknessTexture && bz.thinFilmThicknessTexture !== bz.thinFilmWeightTexture && Ez.push(bz.thinFilmThicknessTexture), Ez;
        return []
      }
      postExportMaterialAsync(zz, uz, bz) {
        return new Promise((zz => {
          if (bz instanceof ou) {
            if (!bz.iridescence.isEnabled) return void zz(uz);
            this._wasUsed = !0, uz.extensions = uz.extensions || {};
            const Ez = this._exporter._materialExporter.getTextureInfo(bz.iridescence.texture),
              nz = this._exporter._materialExporter.getTextureInfo(bz.iridescence.thicknessTexture),
              iz = {
                iridescenceFactor: bz.iridescence.intensity,
                iridescenceIor: bz.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: bz.iridescence.minimumThickness,
                iridescenceThicknessMaximum: bz.iridescence.maximumThickness,
                iridescenceTexture: Ez ?? void 0,
                iridescenceThicknessTexture: nz ?? void 0
              };
            null === iz.iridescenceTexture && null === iz.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(bz), uz.extensions[Ei] = iz
          } else if (bz instanceof Yu) {
            if (bz.thinFilmWeight <= 0) return void zz(uz);
            this._wasUsed = !0, uz.extensions = uz.extensions || {};
            const Ez = this._exporter._materialExporter.getTextureInfo(bz.thinFilmWeightTexture),
              nz = this._exporter._materialExporter.getTextureInfo(bz.thinFilmThicknessTexture),
              iz = {
                iridescenceFactor: bz.thinFilmWeight,
                iridescenceIor: bz.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * bz.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * bz.thinFilmThickness,
                iridescenceTexture: Ez ?? void 0,
                iridescenceThicknessTexture: nz ?? void 0
              };
            null === iz.iridescenceTexture && null === iz.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(bz), uz.extensions[Ei] = iz
          }
          zz(uz)
        }))
      }
    }
    let ii = !1;

    function li() {
      ii || (ii = !0, VE.RegisterExtension(Ei, (zz => new ni(zz))))
    }
    li();
    const Mi = "KHR_materials_sheen";
    class ti {
      constructor(zz) {
        this.name = Mi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, uz, bz) {
        return bz instanceof Un && bz.sheen.isEnabled && bz.sheen.texture ? [bz.sheen.texture] : []
      }
      async postExportMaterialAsync(zz, uz, bz) {
        return await new Promise((zz => {
          if (bz instanceof Un) {
            if (!bz.sheen.isEnabled) return void zz(uz);
            this._wasUsed = !0, null == uz.extensions && (uz.extensions = {});
            const Ez = {
              sheenColorFactor: bz.sheen.color.obz(),
              sheenRoughnessFactor: bz.sheen.roughness ?? 0
            };
            null === Ez.sheenColorTexture && null === Ez.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(bz), bz.sheen.texture && (Ez.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(bz.sheen.texture) ?? void 0), bz.sheen.textureRoughness && !bz.sheen.useRoughnessFromMainTexture ? Ez.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(bz.sheen.textureRoughness) ?? void 0 : bz.sheen.texture && bz.sheen.useRoughnessFromMainTexture && (Ez.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(bz.sheen.texture) ?? void 0), uz.extensions[Mi] = Ez
          }
          zz(uz)
        }))
      }
    }
    let Hi = !1;

    function Oi() {
      Hi || (Hi = !0, VE.RegisterExtension(Mi, (zz => new ti(zz))))
    }
    Oi();
    const di = "KHR_materials_fuzz";

    function Fi(zz, uz) {
      const bz = new Lz.e(uz.name, uz.XT());
      return bz._texture = zz, bz.coordinatesIndex = uz.coordinatesIndex, uz instanceof Lz.e && (bz.uOffset = uz.uOffset, bz.vOffset = uz.vOffset, bz.uScale = uz.uScale, bz.vScale = uz.vScale, bz.wAng = uz.wAng), bz.wrapU = uz.wrapU, bz.wrapV = uz.wrapV, bz
    }
    class Zi {
      constructor(zz) {
        this.name = di, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = zz
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
      async postExportMaterialAdditionalTexturesAsync(zz, uz, bz) {
        if (bz instanceof Yu) {
          const zz = [];
          if (bz.fuzzWeight > 0) {
            bz.fuzzWeightTexture && zz.push(bz.fuzzWeightTexture);
            let uz = !1;
            if (bz.fuzzRoughnessTexture && (bz._useFuzzRoughnessFromTextureAlpha ? zz.push(bz.fuzzRoughnessTexture) : uz = !0), bz.fuzzColorTexture && !uz && zz.push(bz.fuzzColorTexture), uz) {
              const uz = function(zz) {
                const uz = zz.fuzzColorTexture,
                  bz = uz && uz.getInternalTexture() ? uz.getInternalTexture().uniqueId : "NoFuzzColor",
                  Ez = zz.fuzzRoughnessTexture;
                return `FuzzColor_${bz}_FuzzRoughness_${Ez&&Ez.getInternalTexture()?Ez.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(bz);
              if (!this._cachedInternalTexturesMap[uz]) {
                const zz = await async function(zz) {
                  const uz = zz.XT(),
                    bz = zz.fuzzColorTexture,
                    Ez = zz.fuzzRoughnessTexture;
                  return bz || Ez ? (await lb("FuzzTexture", Hb(bz ? Mb(bz, 0) : tb(1), bz ? Mb(bz, 1) : tb(1), bz ? Mb(bz, 2) : tb(1), Ez ? Mb(Ez, zz._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : tb(1)), uz)).getInternalTexture() : null
                }(bz);
                zz && (this._cachedInternalTexturesMap[uz] = zz)
              }
              this._cachedInternalTexturesMap[uz] && (bz.fuzzColorTexture && (this._mergedTexturesMap[bz.fuzzColorTexture.uniqueId] = Fi(this._cachedInternalTexturesMap[uz], bz.fuzzColorTexture), zz.push(this._mergedTexturesMap[bz.fuzzColorTexture.uniqueId])), bz.fuzzRoughnessTexture && (this._mergedTexturesMap[bz.fuzzRoughnessTexture.uniqueId] = Fi(this._cachedInternalTexturesMap[uz], bz.fuzzRoughnessTexture), zz.push(this._mergedTexturesMap[bz.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return zz
        }
        return []
      }
      async postExportMaterialAsync(zz, uz, bz) {
        return await new Promise((zz => {
          if (bz instanceof Yu) {
            if (0 == bz.fuzzWeight) return void zz(uz);
            this._wasUsed = !0, null == uz.extensions && (uz.extensions = {});
            const Ez = {
              fuzzFactor: bz.fuzzWeight,
              fuzzColorFactor: bz.fuzzColor.obz(),
              fuzzRoughnessFactor: bz.fuzzRoughness
            };
            let nz, iz;
            bz.fuzzWeightTexture && (Ez.fuzzTexture = this._exporter._materialExporter.getTextureInfo(bz.fuzzWeightTexture) ?? void 0), bz.fuzzColorTexture && (nz = this._mergedTexturesMap[bz.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[bz.fuzzColorTexture.uniqueId] : bz.fuzzColorTexture, Ez.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(nz) ?? void 0), bz.fuzzRoughnessTexture && (iz = this._mergedTexturesMap[bz.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[bz.fuzzRoughnessTexture.uniqueId] : bz.fuzzRoughnessTexture, Ez.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(iz) ?? void 0), null === Ez.fuzzColorTexture && null === Ez.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(bz), uz.extensions[di] = Ez
          }
          zz(uz)
        }))
      }
    }
    let Ri = !1;

    function Ki() {
      Ri || (Ri = !0, VE.RegisterExtension(di, (zz => new Zi(zz))))
    }
    Ki();
    const wi = "KHR_materials_specular";
    class Xi {
      constructor(zz) {
        this.name = wi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, uz, bz) {
        const Ez = [];
        return bz instanceof Un && this._isExtensionEnabled(bz) ? (bz.metallicReflectanceTexture && Ez.push(bz.metallicReflectanceTexture), bz.reflectanceTexture && Ez.push(bz.reflectanceTexture), Ez) : Ez
      }
      _isExtensionEnabled(zz) {
        return !zz.unlit && (void 0 != zz.metallicF0Factor && 1 != zz.metallicF0Factor || void 0 != zz.metallicReflectanceColor && !zz.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(zz))
      }
      _hasTexturesExtension(zz) {
        return null != zz.metallicReflectanceTexture || null != zz.reflectanceTexture
      }
      postExportMaterialAsync(zz, uz, bz) {
        return new Promise((zz => {
          var Ez;
          if (bz instanceof Un && this._isExtensionEnabled(bz)) {
            this._wasUsed = !0, uz.extensions = uz.extensions || {};
            const zz = this._exporter._materialExporter.getTextureInfo(bz.metallicReflectanceTexture) ?? void 0,
              Ez = this._exporter._materialExporter.getTextureInfo(bz.reflectanceTexture) ?? void 0,
              nz = {
                specularFactor: 1 == bz.metallicF0Factor ? void 0 : bz.metallicF0Factor,
                specularTexture: zz,
                specularColorFactor: bz.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : bz.metallicReflectanceColor.obz(),
                specularColorTexture: Ez
              };
            this._hasTexturesExtension(bz) && this._exporter._materialNeedsUVsSet.add(bz), uz.extensions[wi] = nz
          } else if (bz instanceof Yu) {
            uz.extensions = uz.extensions || {};
            const nz = this._exporter._materialExporter.getTextureInfo(bz.specularWeightTexture) ?? void 0,
              iz = this._exporter._materialExporter.getTextureInfo(bz.specularColorTexture) ?? void 0,
              lz = 1 == bz.specularWeight ? void 0 : bz.specularWeight,
              Mz = bz.specularColor.equalsFloats(1, 1, 1) ? void 0 : bz.specularColor.obz();
            if (!iz && !nz && void 0 === lz && void 0 === Mz) return zz(uz);
            this._wasUsed = !0;
            const tz = {
                specularEdgeColorEnabled: !0
              },
              Hz = {
                specularFactor: lz,
                specularTexture: nz,
                specularColorFactor: Mz,
                specularColorTexture: iz,
                extensions: {}
              };
            Hz.extensions.EXT_materials_specular_edge_color = tz, (Ez = this._exporter._glTF).extensionsUsed || (Ez.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (nz || iz) && this._exporter._materialNeedsUVsSet.add(bz), uz.extensions[wi] = Hz
          }
          zz(uz)
        }))
      }
    }
    let fi = !1;

    function si() {
      fi || (fi = !0, VE.RegisterExtension(wi, (zz => new Xi(zz))))
    }
    si();
    const ri = "KHR_materials_transmission";
    class oi {
      constructor(zz) {
        this.name = ri, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, uz, bz) {
        const Ez = [];
        if (bz instanceof Un) {
          if (this._isExtensionEnabled(bz)) return bz.subSurface.refractionIntensityTexture && bz.subSurface.useGltfStyleTextures && Ez.push(bz.subSurface.refractionIntensityTexture), Ez
        } else bz instanceof Yu && (bz.transmissionWeight > 0 && bz.transmissionWeightTexture && (Ez.push(bz.transmissionWeightTexture), bz.transmissionColorTexture && Ez.push(bz.transmissionColorTexture)), bz.subsurfaceWeight > 0 && bz.subsurfaceWeightTexture && Ez.push(bz.subsurfaceWeightTexture));
        return Ez
      }
      _isExtensionEnabled(zz) {
        if (zz instanceof Yu && !zz.unlit) return zz.transmissionWeight > 0 || zz.subsurfaceWeight > 0;
        if (zz instanceof Un && !zz.unlit) {
          const uz = zz.subSurface;
          return uz.isRefractionEnabled && void 0 != uz.refractionIntensity && 0 != uz.refractionIntensity || null != uz.refractionIntensityTexture && uz.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(zz, uz, bz) {
        if (!this._isExtensionEnabled(bz)) return uz;
        if (bz instanceof Un) {
          this._wasUsed = !0;
          const Ez = bz.subSurface,
            nz = {
              transmissionFactor: 0 === Ez.refractionIntensity ? void 0 : Ez.refractionIntensity
            };
          if (Ez.refractionIntensityTexture)
            if (Ez.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(bz);
              const zz = this._exporter._materialExporter.getTextureInfo(Ez.refractionIntensityTexture);
              zz && (nz.transmissionTexture = zz)
            } else Az.e.Warn(`${zz}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          uz.extensions || (uz.extensions = {}), uz.extensions[ri] = nz
        } else if (bz instanceof Yu) {
          this._wasUsed = !0;
          const zz = {
            transmissionFactor: (1 - bz.transmissionWeight) * bz.subsurfaceWeight + bz.transmissionWeight
          };
          if (bz.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(bz);
            const uz = this._exporter._materialExporter.getTextureInfo(bz.transmissionWeightTexture);
            uz && (zz.transmissionTexture = uz)
          } else if (bz.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(bz);
            const uz = this._exporter._materialExporter.getTextureInfo(bz.subsurfaceWeightTexture);
            uz && (zz.transmissionTexture = uz)
          }
          if (0 == bz.transmissionDepth && (!bz.transmissionColor.equals(Wz.c.White()) || bz.transmissionColorTexture) && uz.pbrMetallicRoughness && (uz.pbrMetallicRoughness.baseColorFactor || (uz.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), uz.pbrMetallicRoughness.baseColorFactor[0] *= bz.transmissionColor.r, uz.pbrMetallicRoughness.baseColorFactor[1] *= bz.transmissionColor.g, uz.pbrMetallicRoughness.baseColorFactor[2] *= bz.transmissionColor.b, bz.transmissionColorTexture && !uz.pbrMetallicRoughness.baseColorTexture)) {
            const zz = this._exporter._materialExporter.getTextureInfo(bz.transmissionColorTexture);
            zz && (uz.pbrMetallicRoughness.baseColorTexture = zz, this._exporter._materialNeedsUVsSet.add(bz))
          }
          uz.extensions || (uz.extensions = {}), uz.extensions[ri] = zz
        }
        return uz
      }
    }
    let Ni = !1;

    function vi() {
      Ni || (Ni = !0, VE.RegisterExtension(ri, (zz => new oi(zz))))
    }
    vi();
    var xi = bz(39429);
    const Ji = "KHR_materials_unlit";
    class Ai {
      constructor() {
        this.name = Ji, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(zz, uz, bz) {
        return new Promise((zz => {
          let Ez = !1;
          bz instanceof Un ? Ez = bz.unlit : bz instanceof xi.e && (Ez = bz.disableLighting), Ez && (this._wasUsed = !0, null == uz.extensions && (uz.extensions = {}), uz.extensions[Ji] = {}), zz(uz)
        }))
      }
    }
    let Ti = !1;

    function Li() {
      Ti || (Ti = !0, VE.RegisterExtension(Ji, (() => new Ai)))
    }
    Li();
    const Pi = "KHR_materials_volume";
    class Gi {
      constructor(zz) {
        this.name = Pi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, uz, bz) {
        const Ez = [];
        if (bz instanceof Un) {
          if (this._isExtensionEnabled(bz)) return bz.subSurface.thicknessTexture && Ez.push(bz.subSurface.thicknessTexture), Ez
        } else bz instanceof Yu && (bz.transmissionWeight > 0 || bz.subsurfaceWeight > 0) && bz.geometryThicknessTexture && Ez.push(bz.geometryThicknessTexture);
        return Ez
      }
      _isExtensionEnabled(zz) {
        if (zz.unlit) return !1;
        const uz = zz.subSurface;
        return !(!uz.isRefractionEnabled && !uz.isTranslucencyEnabled) && (void 0 != uz.maximumThickness && 0 != uz.maximumThickness || void 0 != uz.tintColorAtDistance && uz.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != uz.tintColor && uz.tintColor != Wz.c.White() || this._hasTexturesExtension(zz))
      }
      _hasTexturesExtension(zz) {
        return null != zz.subSurface.thicknessTexture
      }
      postExportMaterialAsync(zz, uz, bz) {
        return new Promise((zz => {
          if (bz instanceof Un && this._isExtensionEnabled(bz)) {
            this._wasUsed = !0;
            const zz = bz.subSurface,
              Ez = {
                thicknessFactor: 0 == zz.maximumThickness ? void 0 : zz.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(zz.thicknessTexture) ?? void 0,
                attenuationDistance: zz.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : zz.tintColorAtDistance,
                attenuationColor: zz.tintColor.equalsFloats(1, 1, 1) ? void 0 : zz.tintColor.obz()
              };
            this._hasTexturesExtension(bz) && this._exporter._materialNeedsUVsSet.add(bz), uz.extensions = uz.extensions || {}, uz.extensions[Pi] = Ez
          } else if (bz instanceof Yu) {
            const zz = bz.transmissionWeight > 0 && !bz.geometryThinWalled,
              Ez = bz.subsurfaceWeight > 0 && !bz.geometryThinWalled;
            if (zz || Ez) {
              this._wasUsed = !0;
              const nz = bz.geometryThickness,
                iz = this._exporter._materialExporter.getTextureInfo(bz.geometryThicknessTexture) ?? void 0;
              let lz;
              iz && this._exporter._materialNeedsUVsSet.add(bz);
              const Mz = Wz.c.White().obz();
              if (zz && bz.transmissionDepth > 0) {
                const zz = 1 / bz.transmissionDepth;
                let uz = new Uz.n(-Math.log(bz.transmissionColor.r) * zz, -Math.log(bz.transmissionColor.g) * zz, -Math.log(bz.transmissionColor.b) * zz);
                const Ez = new Uz.n(bz.transmissionScatter.r * zz, bz.transmissionScatter.g * zz, bz.transmissionScatter.b * zz),
                  nz = uz.subtract(Ez),
                  iz = Math.min(nz.x, nz.y, nz.z);
                iz < 0 && (nz.x = nz.x - iz, nz.y = nz.y - iz, nz.z = nz.z - iz), uz = nz.add(Ez);
                lz = 1 / Math.max(uz.x, uz.y, uz.z), Mz[0] = Math.exp(-uz.x * lz), Mz[1] = Math.exp(-uz.y * lz), Mz[2] = Math.exp(-uz.z * lz)
              } else lz = Number.MAX_VALUE, Mz[0] = 1, Mz[1] = 1, Mz[2] = 1;
              let tz = 1;
              const Hz = Wz.c.White().obz();
              if (Ez) {
                const zz = bz.subsurfaceRadius,
                  uz = bz.subsurfaceRadiusScale,
                  Ez = new Uz.n(uz.r, uz.g, uz.b).multiplyByFloats(zz, zz, zz),
                  nz = new Uz.n(1 / Math.max(Ez.x, 1e-6), 1 / Math.max(Ez.y, 1e-6), 1 / Math.max(Ez.z, 1e-6));
                tz = 1 / Math.max(nz.x, nz.y, nz.z), Hz[0] = Math.exp(-nz.x * tz), Hz[1] = Math.exp(-nz.y * tz), Hz[2] = Math.exp(-nz.z * tz)
              }
              const Oz = (1 - bz.transmissionWeight) * bz.subsurfaceWeight,
                pz = Oz + bz.transmissionWeight,
                dz = 1 / Math.max(pz, 1e-6),
                Fz = bz.transmissionWeight * dz,
                Zz = Oz * dz,
                Rz = Mz.map(((zz, uz) => zz * Fz + Hz[uz] * Zz)),
                Kz = {
                  thicknessFactor: nz,
                  thicknessTexture: iz,
                  attenuationDistance: lz * Fz + tz * Zz,
                  attenuationColor: Rz
                };
              uz.extensions = uz.extensions || {}, uz.extensions[Pi] = Kz
            }
          }
          zz(uz)
        }))
      }
    }
    let ai = !1;

    function Vi() {
      ai || (ai = !0, VE.RegisterExtension(Pi, (zz => new Gi(zz))))
    }
    Vi();
    const mi = "KHR_materials_volume_scatter";
    class qi {
      constructor(zz) {
        this.name = mi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, uz, bz) {
        const Ez = [];
        return bz instanceof Yu && (bz.transmissionWeight > 0 && bz.transmissionScatterTexture && Ez.push(bz.transmissionScatterTexture), bz.subsurfaceWeight > 0 && bz.subsurfaceColorTexture && Ez.push(bz.subsurfaceColorTexture)), Ez
      }
      _isExtensionEnabled(zz) {
        if (zz.unlit) return !1;
        const uz = zz.transmissionWeight > 0 && !zz.geometryThinWalled && zz.transmissionDepth > 0 && !zz.transmissionScatter.equals(Wz.c.Black()),
          bz = zz.subsurfaceWeight > 0 && !zz.geometryThinWalled;
        return !(!uz && !bz)
      }
      postExportMaterialAsync(zz, uz, bz) {
        return new Promise((zz => {
          if (bz instanceof Yu && this._isExtensionEnabled(bz)) {
            this._wasUsed = !0;
            let zz = Uz.n.Zero(),
              Ez = 0;
            if (bz.transmissionWeight > 0) {
              zz = function(zz) {
                const uz = new Uz.n(Math.sqrt(1 - zz.x), Math.sqrt(1 - zz.y), Math.sqrt(1 - zz.z)),
                  bz = new Uz.n(1, 1, 1),
                  Ez = bz.subtract(uz),
                  nz = bz.subtract(new Uz.n(.139, .139, .139).multiplyInPlace(uz)),
                  iz = bz.add(new Uz.n(1.17, 1.17, 1.17).multiplyInPlace(uz));
                return Ez.multiplyInPlace(nz).divideInPlace(iz)
              }(new Uz.n(bz.transmissionScatter.r, bz.transmissionScatter.g, bz.transmissionScatter.b)), Ez = bz.transmissionScatterAnisotropy
            }
            const nz = Uz.n.Zero();
            let iz = 0;
            bz.subsurfaceWeight > 0 && (nz.set(bz.subsurfaceColor.r, bz.subsurfaceColor.g, bz.subsurfaceColor.b), iz = bz.subsurfaceScatterAnisotropy);
            const lz = (1 - bz.transmissionWeight) * bz.subsurfaceWeight,
              Mz = lz + bz.transmissionWeight,
              tz = 1 / Math.max(Mz, 1e-6),
              Hz = bz.transmissionWeight * tz,
              Oz = lz * tz,
              pz = {
                multiscatterColorFactor: zz.multiplyByFloats(Hz, Hz, Hz).addInPlace(nz.multiplyByFloats(Oz, Oz, Oz)).obz(),
                scatterAnisotropy: Ez * Hz + iz * Oz
              };
            if (bz.subsurfaceWeight > 0 && bz.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(bz);
              const zz = this._exporter._materialExporter.getTextureInfo(bz.subsurfaceColorTexture);
              zz && (pz.multiscatterColorTexture = zz)
            } else if (bz.transmissionWeight > 0 && bz.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(bz);
              const zz = this._exporter._materialExporter.getTextureInfo(bz.transmissionScatterTexture);
              zz && (pz.multiscatterColorTexture = zz)
            }
            uz.extensions = uz.extensions || {}, uz.extensions[mi] = pz
          }
          zz(uz)
        }))
      }
    }
    let Ui = !1;

    function ci() {
      Ui || (Ui = !0, VE.RegisterExtension(mi, (zz => new qi(zz)), 101))
    }
    ci();
    const gi = "KHR_materials_diffuse_roughness";
    class Si {
      constructor(zz) {
        this.name = gi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(zz, uz, bz) {
        const Ez = [];
        if (bz instanceof ou) {
          if (bz._baseDiffuseRoughness) return bz._baseDiffuseRoughnessTexture && Ez.push(bz._baseDiffuseRoughnessTexture), Ez
        } else if (bz instanceof Yu && bz.baseDiffuseRoughness) return bz.baseDiffuseRoughnessTexture && Ez.push(bz.baseDiffuseRoughnessTexture), Ez;
        return []
      }
      postExportMaterialAsync(zz, uz, bz) {
        return new Promise((zz => {
          let Ez = null,
            nz = null;
          if (bz instanceof ou ? (Ez = bz._baseDiffuseRoughness, nz = bz._baseDiffuseRoughnessTexture) : bz instanceof Yu && (Ez = bz.baseDiffuseRoughness, nz = bz.baseDiffuseRoughnessTexture), !Ez) return void zz(uz);
          this._wasUsed = !0, uz.extensions = uz.extensions || {};
          const iz = {
            diffuseRoughnessFactor: Ez,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(nz) ?? void 0
          };
          null !== iz.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(bz), uz.extensions[gi] = iz, zz(uz)
        }))
      }
    }
    let yi = !1;

    function Di() {
      yi || (yi = !0, VE.RegisterExtension(gi, (zz => new Si(zz))))
    }
    Di();
    const Qi = "KHR_materials_openpbr";
    class Wi {
      constructor() {
        this.name = Qi, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(zz, uz, bz) {
        return new Promise((zz => {
          bz instanceof Yu && (this._wasUsed = !0, uz.extensions = uz.extensions || {}, uz.extensions[Qi] = {}), zz(uz)
        }))
      }
    }
    let ei = !1;

    function ji() {
      ei || (ei = !0, VE.RegisterExtension(Qi, (() => new Wi)))
    }
    ji();
    const Ii = "KHR_texture_transform";
    class Bi {
      constructor() {
        this.name = Ii, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(zz, uz, bz) {
        if (bz.XT() || vu.h.Warn(`${zz}: "scene" is not defined for Babylon texture ${bz.name}!`), (0 !== bz.uAng || 0 !== bz.vAng) && (vu.h.Warn(`${zz}: Texture ${bz.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== bz.uRotationCenter || 0 !== bz.vRotationCenter)) return;
        const Ez = {};
        let nz = !1;
        if (0 === bz.uOffset && 0 === bz.vOffset || (Ez.offset = [bz.uOffset, bz.vOffset], nz = !0), 1 === bz.uScale && 1 === bz.vScale || (Ez.scale = [bz.uScale, bz.vScale], nz = !0), 0 !== bz.wAng) {
          if (0 !== bz.uRotationCenter || 0 !== bz.vRotationCenter) {
            if (bz.homogeneousRotationInUVTransform && bz.uScale !== bz.vScale) return void vu.h.Warn(`${zz}: Texture ${bz.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${Ii}.`);
            vu.h.Warn(`${zz}: Texture ${bz.name} with non-origin rotation center will be exported using an adjusted offset with ${Ii}.`), Ez.offset = function(zz) {
              const {
                uOffset: uz,
                vOffset: bz,
                uRotationCenter: Ez,
                vRotationCenter: nz,
                uScale: iz,
                vScale: lz,
                wAng: Mz
              } = zz, tz = Math.cos(Mz), Hz = Math.sin(Mz), Oz = Ez * iz, pz = nz * lz;
              return [uz + (Oz * (1 - tz) + pz * Hz), bz + (pz * (1 - tz) - Oz * Hz)]
            }(bz)
          }
          Ez.rotation = -bz.wAng, nz = !0
        }
        0 !== bz.coordinatesIndex && (Ez.texCoord = bz.coordinatesIndex, nz = !0), nz && (this._wasUsed = !0, uz.extensions || (uz.extensions = {}), uz.extensions[Ii] = Ez)
      }
    }
    let Ci = !1;

    function Yi() {
      Ci || (Ci = !0, VE.RegisterExtension(Ii, (() => new Bi)))
    }
    Yi();
    var ki = bz(39202);
    const zl = "KHR_texture_basisu";
    class ul {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(zz) {
        this.name = zl, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      postExportTexture(zz, uz) {
        const bz = this._exporter._textures[uz.index],
          Ez = bz.source;
        if (void 0 === Ez) return;
        const nz = this._exporter._images[Ez];
        "image/ktx2" === (nz.mimeType || (0, ki.j)(nz.uri)) && (bz.source = void 0, bz.extensions || (bz.extensions = {}), bz.extensions[zl] = {
          source: Ez
        }, this._wasUsed = !0)
      }
    }
    let bl = !1;

    function El() {
      bl || (bl = !0, VE.RegisterExtension(zl, (zz => new ul(zz))))
    }
    El();
    const nl = "EXT_texture_webp";
    class il {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(zz) {
        this.name = nl, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      postExportTexture(zz, uz) {
        const bz = this._exporter._textures[uz.index],
          Ez = bz.source;
        if (void 0 === Ez) return;
        const nz = this._exporter._images[Ez];
        "image/webp" === (nz.mimeType || (0, ki.j)(nz.uri)) && (bz.source = void 0, bz.extensions || (bz.extensions = {}), bz.extensions[nl] = {
          source: Ez
        }, this._wasUsed = !0)
      }
    }
    let ll = !1;

    function Ml() {
      ll || (ll = !0, VE.RegisterExtension(nl, (zz => new il(zz))))
    }
    Ml();
    const tl = "EXT_texture_avif";
    class Hl {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(zz) {
        this.name = tl, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = zz
      }
      dispose() {}
      postExportTexture(zz, uz) {
        const bz = this._exporter._textures[uz.index],
          Ez = bz.source;
        if (void 0 === Ez) return;
        const nz = this._exporter._images[Ez];
        "image/avif" === (nz.mimeType || (0, ki.j)(nz.uri)) && (bz.source = void 0, bz.extensions || (bz.extensions = {}), bz.extensions[tl] = {
          source: Ez
        }, this._wasUsed = !0)
      }
    }
    let Ol = !1;

    function pl() {
      Ol || (Ol = !0, VE.RegisterExtension(tl, (zz => new Hl(zz))))
    }
    pl();
    class dl {
      static CreateSTL(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          nz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          iz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          lz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Mz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          tz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const Hz = function(zz, uz, bz) {
            const nz = [3 * zz[bz], 3 * zz[bz + 1], 3 * zz[bz + 2]],
              iz = [new Ez.ER(uz[nz[0]], uz[nz[0] + 2], uz[nz[0] + 1]), new Ez.ER(uz[nz[1]], uz[nz[1] + 2], uz[nz[1] + 1]), new Ez.ER(uz[nz[2]], uz[nz[2] + 2], uz[nz[2] + 1])],
              lz = iz[0].subtract(iz[1]),
              Mz = iz[2].subtract(iz[1]);
            return {
              v: iz,
              n: Ez.ER.Cross(Mz, lz).normalize()
            }
          },
          pz = function(zz, uz, bz, Ez) {
            return uz = dz(zz, uz, bz.x, Ez), uz = dz(zz, uz, bz.y, Ez), dz(zz, uz, bz.z, Ez)
          },
          dz = function(zz, uz, bz, Ez) {
            return zz.setFloat32(uz, bz, Ez), uz + 4
          },
          Zz = function(zz) {
            if (Mz) {
              let uz = zz;
              zz instanceof Fz.c && (uz = zz.wEz);
              const bz = uz.getVerticesData(Oz.d.PositionKind, !0, !0);
              if (!bz) return [];
              const nz = Ez.ER.Zero();
              let iz;
              for (iz = 0; iz < bz.length; iz += 3) Ez.ER.TransformCoordinatesFromFloatsToRef(bz[iz], bz[iz + 1], bz[iz + 2], zz.computeWorldMatrix(!0), nz).toArray(bz, iz);
              return bz
            }
            return zz.getVerticesData(Oz.d.PositionKind) || []
          };
        Mz && (lz = !0);
        let Rz = "",
          Kz = 0,
          wz = 0;
        if (nz) {
          for (let bz = 0; bz < zz.length; bz++) {
            const uz = zz[bz].Nbz();
            Kz += uz ? uz.length / 3 : 0
          }
          const uz = new ArrayBuffer(84 + 50 * Kz);
          Rz = new DataView(uz), wz += 80, Rz.setUint32(wz, Kz, iz), wz += 4
        } else tz || (Rz = "solid stlmesh\r\n");
        for (let Ez = 0; Ez < zz.length; Ez++) {
          const uz = zz[Ez];
          !nz && tz && (Rz += "solid " + uz.name + "\r\n"), !lz && uz instanceof HE.d && uz.bakeCurrentTransformIntoVertices();
          const bz = Zz(uz),
            Mz = uz.Nbz() || [];
          for (let zz = 0; zz < Mz.length; zz += 3) {
            const uz = Hz(Mz, bz, zz);
            nz ? (wz = pz(Rz, wz, uz.n, iz), wz = pz(Rz, wz, uz.v[0], iz), wz = pz(Rz, wz, uz.v[1], iz), wz = pz(Rz, wz, uz.v[2], iz), wz += 2) : (Rz += "\tfacet normal " + uz.n.x + " " + uz.n.y + " " + uz.n.z + "\r\n", Rz += "\t\touter loop\r\n", Rz += "\t\t\tvertex " + uz.v[0].x + " " + uz.v[0].y + " " + uz.v[0].z + "\r\n", Rz += "\t\t\tvertex " + uz.v[1].x + " " + uz.v[1].y + " " + uz.v[1].z + "\r\n", Rz += "\t\t\tvertex " + uz.v[2].x + " " + uz.v[2].y + " " + uz.v[2].z + "\r\n", Rz += "\t\tendloop\r\n", Rz += "\tendfacet\r\n")
          }!nz && tz && (Rz += "endsolid " + name + "\r\n")
        }
        if (nz || tz || (Rz += "endsolid stlmesh"), uz) {
          const zz = document.createElement("a"),
            uz = new Blob([Rz], {
              type: "application/octet-stream"
            });
          zz.href = window.URL.createObjectURL(uz), zz.download = bz + ".stl", zz.click()
        }
        return Rz
      }
    }

    function Fl(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const nz = [];
      for (let iz = 0; iz < zz.length / bz; iz++) {
        const lz = zz[iz * bz] * (Ez ? -1 : 1),
          Mz = zz[iz * bz + 1],
          tz = zz[iz * bz + 2];
        nz.push(`(${lz.toPrecision(uz.precision)}, ${Mz.toPrecision(uz.precision)}, ${tz.toPrecision(uz.precision)})`)
      }
      return nz.join(", ")
    }

    function Zl(zz, uz) {
      const bz = [];
      for (let Ez = 0; Ez < zz.length / 2; Ez++) {
        const nz = zz[2 * Ez],
          iz = zz[2 * Ez + 1];
        bz.push(`(${nz.toPrecision(uz.precision)}, ${(1-iz).toPrecision(uz.precision)})`)
      }
      return bz.join(", ")
    }

    function Rl(zz, uz, bz, Ez) {
      const nz = zz.getVerticesData(Oz.d.PositionKind),
        iz = zz.getVerticesData(Oz.d.NormalKind);
      if (nz && iz) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${bz}"\n\t\tint[] faceVertexCounts = [${function(zz){const uz=zz.Nbz()?.length?zz.getTotalIndices():zz.getTotalVertices();return Array(uz/3).fill(3).join(", ")}(zz)}]\n\t\tint[] faceVertexIndices = [${function(zz){const uz=zz.Nbz(),bz=uz?.length??zz.getTotalVertices(),Ez=[];if(null!==uz)for(let nz=0;nz<bz;nz++)Ez.push(uz[nz]);else for(let nz=0;nz<bz;nz++)Ez.push(nz);return Ez.join(", ")}(zz)}]\n\t\tnormal3f[] normals = [${Fl(iz,uz,void 0,Ez)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${Fl(nz,uz,void 0,Ez)}]\n        ${function(zz,uz){let bz="";for(let nz=0;nz<4;nz++){const Ez=nz>0?nz:"",iz=zz.getVerticesData(Oz.d.UVKind+(Ez?Ez+1:""));iz&&(bz+=`\n\t\ttexCoord2f[] primvars:st${Ez} = [${Zl(iz,uz)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Ez=zz.getVerticesData(Oz.d.ColorKind);return Ez&&(bz+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        Fl(Ez, uz, Ez.length / zz.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),bz}(zz,uz)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function Kl(zz, uz, bz, Ez) {
      return `\n        def "Geometry"\n        {\n        ${Rl(zz,uz,bz,Ez)}\n        }\n        `
    }

    function wl(zz) {
      let uz = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return uz += zz, fflate.strToU8(uz)
    }

    function Xl(zz) {
      const uz = zz.m;
      return `( ${fl(uz,0)}, ${fl(uz,4)}, ${fl(uz,8)}, ${fl(uz,12)} )`
    }

    function fl(zz, uz) {
      return `(${zz[uz+0]}, ${zz[uz+1]}, ${zz[uz+2]}, ${zz[uz+3]})`
    }

    function sl(zz, uz) {
      const bz = "Object_" + zz.uniqueId,
        Ez = Xl(uz);
      return `def Xform "${bz}" (\n\tprepend references = @./geometries/Geometry_${zz.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Ez}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${zz.material.uniqueId}>\n}\n\n`
    }

    function rl(zz) {
      switch (zz) {
        case Nz.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case Nz.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case Nz.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function ol(zz) {
      return `(${zz.x}, ${zz.y})`
    }

    function Nl(zz) {
      return `(${zz.r}, ${zz.g}, ${zz.b})`
    }

    function vl(zz) {
      return "image/jpeg" === zz || "image/png" === zz
    }

    function xl(zz, uz, bz, nz, iz, lz) {
      const Mz = zz.getInternalTexture().uniqueId + "_" + zz.invertY,
        Hz = zz.mimeType || (0, tz.d)(zz.getInternalTexture()?.url ?? ""),
        Oz = vl(Hz) ? Hz : "image/png",
        pz = "image/jpeg" === Oz ? "jpg" : "png";
      iz[Mz] = {
        texture: zz,
        mimeType: Oz,
        ext: pz
      };
      const dz = zz.coordinatesIndex > 0 ? "st" + zz.coordinatesIndex : "st",
        Fz = new Ez.Vector2(zz.uScale, zz.vScale),
        Zz = new Ez.Vector2(zz.uOffset, zz.vOffset),
        Rz = zz.wAng,
        Kz = Math.sin(Rz),
        wz = Math.cos(Rz);
      return Zz.y = 1 - Zz.y - Fz.y, Zz.x += Kz * Fz.x, Zz.y += (1 - wz) * Fz.y, `\n    def Shader "PrimvarReader_${bz}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${dz}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${bz}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${uz.uniqueId}/PrimvarReader_${bz}.outputs:result>\n        float inputs:rotation = ${(Rz*(180/Math.PI)).toFixed(lz.precision)}\n        float2 inputs:scale = ${ol(Fz)}\n        float2 inputs:translation = ${ol(Zz)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${zz.uniqueId}_${bz}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${Mz}.${pz}@\n        float2 inputs:st.connect = </Root/Materials/Material_${uz.uniqueId}/Transform2d_${bz}.outputs:result>\n        ${nz?"float4 inputs:scale = "+function(zz){return`(${zz.r}, ${zz.g}, ${zz.b}, 1.0)`}(nz):""}\n        token inputs:sourceColorSpace = "${zz.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${rl(zz.wrapU)}"\n        token inputs:wrapT = "${rl(zz.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${uz.needAlphaBlending()||uz.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function Jl(zz, uz, bz) {
      const Ez = "\t\t\t",
        nz = [],
        iz = [],
        {
          diffuseMap: lz,
          diffuse: Mz,
          alphaCutOff: tz,
          emissiveMap: Hz,
          emissive: Oz,
          normalMap: pz,
          roughnessMap: dz,
          roughnessChannel: Fz,
          roughness: Zz,
          metalnessMap: Rz,
          metalnessChannel: wz,
          metalness: Xz,
          aoMap: fz,
          aoMapChannel: sz,
          aoMapIntensity: rz,
          alphaMap: oz,
          ior: Nz,
          clearCoatEnabled: vz,
          clearCoat: xz,
          clearCoatMap: Jz,
          clearCoatRoughness: Az,
          clearCoatRoughnessMap: Tz
        } = function(zz) {
          const uz = {
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
          return zz instanceof iE.StandardMaterial ? {
            ...uz,
            diffuseMap: zz.diffuseTexture,
            diffuse: zz.diffuseColor,
            alphaCutOff: zz.alphaCutOff,
            emissiveMap: zz.emissiveTexture,
            emissive: zz.emissiveColor,
            roughness: 1,
            alphaMap: zz.opacityTexture
          } : zz instanceof ou ? {
            ...uz,
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
          } : uz
        }(zz);
      return null !== lz ? (nz.push(`${Ez}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${lz.uniqueId}_diffuse.outputs:rgb>`), zz.needAlphaBlending() ? nz.push(`${Ez}float inputs:opacity.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${lz.uniqueId}_diffuse.outputs:a>`) : zz.needAlphaTesting() && (nz.push(`${Ez}float inputs:opacity.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${lz.uniqueId}_diffuse.outputs:a>`), nz.push(`${Ez}float inputs:opacityThreshold = ${tz}`)), iz.push(xl(lz, zz, "diffuse", Mz, uz, bz))) : nz.push(`${Ez}color3f inputs:diffuseColor = ${Nl(Mz||Kz.Color3.White())}`), null !== Hz ? (nz.push(`${Ez}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${Hz.uniqueId}_emissive.outputs:rgb>`), iz.push(xl(Hz, zz, "emissive", Oz, uz, bz))) : Oz && Oz.toLuminance() > 0 && nz.push(`${Ez}color3f inputs:emissiveColor = ${Nl(Oz)}`), null !== pz && (nz.push(`${Ez}normal3f inputs:normal.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${pz.uniqueId}_normal.outputs:rgb>`), iz.push(xl(pz, zz, "normal", null, uz, bz))), null !== fz && (nz.push(`${Ez}float inputs:occlusion.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${fz.uniqueId}_occlusion.outputs:${sz}>`), iz.push(xl(fz, zz, "occlusion", new Kz.Color3(rz, rz, rz), uz, bz))), null !== dz ? (nz.push(`${Ez}float inputs:roughness.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${dz.uniqueId}_roughness.outputs:${Fz}>`), iz.push(xl(dz, zz, "roughness", new Kz.Color3(Zz, Zz, Zz), uz, bz))) : nz.push(`${Ez}float inputs:roughness = ${Zz}`), null !== Rz ? (nz.push(`${Ez}float inputs:metallic.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${Rz.uniqueId}_metallic.outputs:${wz}>`), iz.push(xl(Rz, zz, "metallic", new Kz.Color3(Xz, Xz, Xz), uz, bz))) : nz.push(`${Ez}float inputs:metallic = ${Xz}`), null !== oz ? (nz.push(`${Ez}float inputs:opacity.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${oz.uniqueId}_opacity.outputs:r>`), nz.push(`${Ez}float inputs:opacityThreshold = 0.0001`), iz.push(xl(oz, zz, "opacity", null, uz, bz))) : nz.push(`${Ez}float inputs:opacity = ${zz.alpha}`), vz && (null !== Jz ? (nz.push(`${Ez}float inputs:clearcoat.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${Jz.uniqueId}_clearcoat.outputs:r>`), iz.push(xl(Jz, zz, "clearcoat", new Kz.Color3(xz, xz, xz), uz, bz))) : nz.push(`${Ez}float inputs:clearcoat = ${xz}`), null !== Tz ? (nz.push(`${Ez}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${zz.uniqueId}/Texture_${Tz.uniqueId}_clearcoatRoughness.outputs:g>`), iz.push(xl(Tz, zz, "clearcoatRoughness", new Kz.Color3(Az, Az, Az), uz, bz))) : nz.push(`${Ez}float inputs:clearcoatRoughness = ${Az}`)), nz.push(`${Ez}float inputs:ior = ${Nz}`), `\n\tdef Material "Material_${zz.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${nz.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${zz.uniqueId}/PreviewSurface.outputs:surface>\n\n${iz.join("\n")}\n\n\t}\n`
    }

    function Al(zz) {
      zz.computeWorldMatrix(!0);
      const uz = zz.getWorldMatrix().clone(),
        bz = zz.XT().useRightHandedSystem;
      let Ez = zz.material?._getEffectiveOrientation(zz) ?? zz.sideOrientation,
        lz = !bz,
        Mz = zz.parent;
      for (; Mz;) {
        if (mb(Mz, bz) && null === Mz.parent) {
          bz || (uz.multiplyToRef(Mz.getWorldMatrix().invert(), uz), Ez = Ez === iz.c.ClockWiseSideOrientation ? iz.c.CounterClockWiseSideOrientation : iz.c.ClockWiseSideOrientation), lz = !1;
          break
        }
        Mz = Mz.parent
      }
      return uz.determinant() < 0 && nz.Tools.Warn(`Mesh ${zz.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: uz,
        windingOrder: Ez === iz.c.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: lz
      }
    }
    async function Tl(zz, uz, bz) {
      const iz = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...uz
      };
      "undefined" === typeof fflate && await nz.Tools.LoadScriptAsync(iz.fflateUrl);
      const lz = {};
      lz[iz.modelFileName] = null;
      let Mz = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      Mz += function(zz) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===zz.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${zz.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${zz.planeAnchoringAlignment}"`:""}\n            `
      }(iz);
      const tz = {};
      for (const Ez of zz.meshes) {
        if (0 === Ez.getTotalVertices()) continue;
        const zz = Ez,
          uz = zz.geometry,
          Hz = zz.material;
        if (!Hz || !uz || bz && !bz(zz)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(Hz.getClassName())) {
          const bz = "geometries/Geometry_" + uz.uniqueId + ".usda",
            {
              matrix: Ez,
              windingOrder: nz,
              convertToRightHanded: Oz
            } = Al(zz);
          if (!(bz in lz)) {
            const zz = Kl(uz, iz, nz, Oz);
            lz[bz] = wl(zz)
          }
          Hz.uniqueId in tz || (tz[Hz.uniqueId] = Hz), Mz += sl(zz, Ez)
        } else nz.Tools.Warn("USDZExportAsync does not support this material type: " + Hz.getClassName())
      }
      zz.activeCamera && iz.exportCamera && (Mz += function(zz, uz) {
        const bz = "Camera_" + zz.uniqueId,
          nz = Xl(Ez.Matrix.RotationY(Math.PI).multiply(zz.getWorldMatrix()));
        if (zz.mode === Nz.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${bz}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${nz}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${zz.minZ.toPrecision(uz.precision)}, ${zz.maxZ.toPrecision(uz.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(zz.orthoLeft||1)+Math.abs(zz.orthoRight||1))).toPrecision(uz.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(zz.orthoTop||1)+Math.abs(zz.orthoBottom||1))).toPrecision(uz.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Ez = zz.uR().getAspectRatio(zz),
            iz = uz.cameraSensorWidth || 35;
          return `def Camera "${bz}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${nz}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${zz.minZ.toPrecision(uz.precision)}, ${zz.maxZ.toPrecision(uz.precision)})\n\t\t\tfloat focalLength = ${(iz/(2*Math.tan(.5*zz.fov))).toPrecision(uz.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(iz*Ez).toPrecision(uz.precision)}\n\t\t\tfloat verticalAperture = ${(iz/Ez).toPrecision(uz.precision)}            \n\t\t}\n\t\n\t`
        }
      }(zz.activeCamera, iz)), Mz += "\n            }\n        }";
      const Hz = {};
      Mz += function(zz, uz, bz) {
        const Ez = [];
        for (const nz in zz) {
          const iz = zz[nz];
          Ez.push(Jl(iz, uz, bz))
        }
        return `\n    def "Materials"\n{\n${Ez.join("")}\n}\n\n`
      }(tz, Hz, iz), Mz += "\n    }", lz[iz.modelFileName] = fflate.strToU8(Mz);
      for (const Ez in Hz) {
        const {
          texture: zz,
          ext: uz,
          mimeType: bz
        } = Hz[Ez], nz = await wb(zz);
        if (nz && vl(nz.mimeType) && nz.mimeType === bz) lz[`textures/Texture_${Ez}.${uz}`] = new Uint8Array(nz.data);
        else {
          const nz = zz.getSize(),
            iz = await (0, sz.e)(zz),
            Mz = await vz.DumpTools.DumpDataAsync(nz.width, nz.height, iz, bz, void 0, !1, !0);
          lz[`textures/Texture_${Ez}.${uz}`] = new Uint8Array(Mz).slice()
        }
      }
      let Oz = 0;
      for (const Ez in lz) {
        const zz = lz[Ez];
        if (!zz) continue;
        Oz += 34 + Ez.length;
        const uz = 63 & Oz;
        if (4 !== uz) {
          const bz = new Uint8Array(64 - uz);
          lz[Ez] = [zz, {
            extra: {
              12345: bz
            }
          }]
        }
        Oz = zz.length
      }
      return fflate.zipSync(lz, {
        level: 0
      })
    }
    var Ll = bz(40300);
    class Pl {
      static Export(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          bz = arguments.length > 2 ? arguments[2] : void 0;
        if (!zz || 0 === zz.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Ez = uz;
        uz && 0 !== uz.length || (Ez = zz.animations.map((zz => zz.name)));
        let nz = null;
        for (const Hz of Ez) {
          const uz = zz.getAnimationRange(Hz);
          uz && (nz = nz ? new Ll.e("animation-range", Math.min(nz.from, uz.from), Math.max(nz.to, uz.to)) : uz)
        }
        if (!nz && (zz.animations.length > 0 && (nz = zz.getAnimationRange(zz.animations[0].name)), !nz)) throw new Error("No animation range found in skeleton");
        const iz = bz || 1 / (zz.animations[0]?.framePerSecond || 30),
          lz = this._BuildBoneHierarchy(zz, Ez);
        let Mz = 0;
        for (const Hz of lz) Hz.positionKeys.length > 0 && (Mz = Math.max(Mz, Hz.positionKeys.length)), Hz.rotationKeys.length > 0 && (Mz = Math.max(Mz, Hz.rotationKeys.length));
        0 === Mz && (Mz = Math.floor((nz.to - nz.from) / iz) + 1);
        let tz = "";
        return tz += "HIERARCHY\n", tz += this._ExportHierarchy(lz, 0), tz += "MOTION\n", tz += `Frames: ${Mz}\n`, tz += `Frame Time: ${iz.toFixed(6)}\n`, tz += this._ExportMotionData(lz, Mz, 0, Ez), tz
      }
      static _BuildBoneHierarchy(zz, uz) {
        const bz = new Map,
          Ez = [];
        for (const nz of zz.bones) {
          const zz = {
            bone: nz,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          bz.set(nz, zz)
        }
        for (const nz of zz.bones) {
          const zz = bz.get(nz);
          if (nz.animations.length > 0)
            for (const bz of nz.animations) uz.includes(bz.name) && ("position" === bz.targetProperty ? (zz.hasPositionChannels = !0, zz.positionKeys.push(...bz.getKeys())) : "rotationQuaternion" === bz.targetProperty && (zz.hasRotationChannels = !0, zz.rotationKeys.push(...bz.getKeys())));
          if (nz.getParent()) {
            const uz = bz.get(nz.getParent());
            uz && uz.children.push(zz)
          } else Ez.push(zz)
        }
        return Ez
      }
      static _ExportHierarchy(zz, uz) {
        let bz = "";
        const Ez = "    ".repeat(uz);
        for (const nz of zz) {
          const zz = nz.bone;
          if (this._IsEndSite(nz)) {
            bz += `${Ez}End Site\n`, bz += `${Ez}{\n`;
            const uz = this._GetBoneOffset(zz);
            bz += `${Ez}    OFFSET ${uz.x.toFixed(6)} ${uz.y.toFixed(6)} ${uz.z.toFixed(6)}\n`, bz += `${Ez}}\n`
          } else {
            bz += `${0===uz?"ROOT":`${Ez}JOINT`} ${zz.name}\n`, bz += `${Ez}{\n`;
            const iz = this._GetBoneOffset(zz);
            bz += `${Ez}    OFFSET ${iz.x.toFixed(6)} ${iz.y.toFixed(6)} ${iz.z.toFixed(6)}\n`;
            const lz = [];
            nz.hasPositionChannels && lz.push("Xposition", "Yposition", "Zposition"), nz.hasRotationChannels && lz.push("Zrotation", "Xrotation", "Yrotation"), lz.length > 0 && (bz += `${Ez}    CHANNELS ${lz.length} ${lz.join(" ")}\n`), nz.children.length > 0 && (bz += this._ExportHierarchy(nz.children, uz + 1)), bz += `${Ez}}\n`
          }
        }
        return bz
      }
      static _IsEndSite(zz) {
        return 0 === zz.children.length
      }
      static _GetBoneOffset(zz) {
        try {
          if (!zz.getParent()) return zz.getRestMatrix().getTranslation();
          return zz.getLocalMatrix().getTranslation()
        } catch (uz) {
          return Ez.ER.Zero()
        }
      }
      static _ExportMotionData(zz, uz, bz, Ez) {
        let nz = "";
        for (let iz = 0; iz < uz; iz++) {
          const uz = [];
          this._CollectFrameValues(zz, iz + bz, uz, Ez), nz += uz.map((zz => zz.toFixed(6))).join(" ") + "\n"
        }
        return nz
      }
      static _CollectFrameValues(zz, uz, bz, Ez) {
        for (const nz of zz)
          if (!this._IsEndSite(nz)) {
            if (nz.hasPositionChannels) {
              const zz = this._GetPositionAtFrameIndex(nz.positionKeys, uz);
              bz.push(zz.x, zz.y, zz.z)
            }
            if (nz.hasRotationChannels) {
              const zz = this._GetRotationAtFrameIndex(nz.rotationKeys, uz),
                Ez = this._QuaternionToEuler(zz);
              bz.push(Ez.z, Ez.x, Ez.y)
            }
            nz.children.length > 0 && this._CollectFrameValues(nz.children, uz, bz, Ez)
          }
      }
      static _GetPositionAtFrameIndex(zz, uz) {
        if (0 === zz.length) return Ez.ER.Zero();
        return zz[Math.max(0, Math.min(uz, zz.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(zz, uz) {
        if (0 === zz.length) return Ez.Quaternion.Identity();
        return zz[Math.max(0, Math.min(uz, zz.length - 1))].value.clone()
      }
      static _QuaternionToEuler(zz) {
        const uz = new Ez.Matrix;
        zz.toRotationMatrix(uz);
        const bz = uz.m;
        let iz, lz, Mz;
        const tz = Math.sqrt(bz[0] * bz[0] + bz[1] * bz[1]);
        return tz > ab.b ? (iz = Math.atan2(bz[6], bz[10]), lz = Math.atan2(-bz[2], tz), Mz = Math.atan2(bz[1], bz[0])) : (iz = Math.atan2(-bz[9], bz[5]), lz = Math.atan2(-bz[2], tz), Mz = 0), new Ez.ER(nz.Tools.ToDegrees(iz), nz.Tools.ToDegrees(lz), nz.Tools.ToDegrees(Mz))
      }
    }

    function Gl(zz) {
      return "string" === typeof zz?.name
    }
    const al = Symbol("__xml:meta$__"),
      Vl = Symbol("__xml:name$__");

    function ml(zz, uz) {
      Object.prototype.hasOwnProperty.call(zz.metadata, al) || (zz.metadata[al] = []), zz.metadata[al].push(uz)
    }

    function ql(zz) {
      return (uz, bz) => {
        uz[Vl] = zz
      }
    }

    function hl() {
      return (zz, uz) => ml(uz, {
        kind: "none",
        prop: String(uz.name),
        ignore: !0
      })
    }

    function Ul(zz) {
      return (uz, bz) => ml(bz, {
        kind: "attr",
        prop: String(bz.name),
        ...zz
      })
    }

    function cl(zz) {
      return (uz, bz) => ml(bz, {
        kind: "elem",
        prop: String(bz.name),
        ...zz
      })
    }

    function gl(zz) {
      const uz = "function" === typeof zz ? zz : zz?.constructor,
        bz = uz?.[Symbol.metadata];
      if (!bz) return [];
      const Ez = [];
      let nz = bz;
      for (; nz;) Object.prototype.hasOwnProperty.call(nz, al) && Ez.push(...nz[al]), nz = Object.getPrototypeOf(nz);
      return Ez
    }

    function Sl(zz) {
      const uz = zz?.constructor?.[Vl];
      return uz || void 0
    }

    function yl(zz) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(zz)
    }

    function Dl(zz) {
      if (Gl(zz)) return zz;
      const uz = (zz ?? "").trim();
      if (!uz) return {
        name: ""
      };
      const bz = uz.indexOf(":");
      if (-1 === bz) return {
        name: uz
      };
      if (-1 !== uz.indexOf(":", bz + 1)) return {
        name: uz
      };
      const Ez = uz.slice(0, bz),
        nz = uz.slice(bz + 1);
      return yl(Ez) && yl(nz) ? {
        ns: Ez,
        name: nz
      } : {
        name: uz
      }
    }

    function Ql(zz, uz) {
      return uz ? `${uz}:${zz}` : zz
    }
    const Wl = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      el = Object.freeze({
        number: Wl
      });

    function jl(zz) {
      const uz = zz?.eps ?? Wl.eps;
      return {
        eps: uz,
        maxDecimalsCap: zz?.maxDecimalsCap ?? Wl.maxDecimalsCap,
        trimTrailingZeros: zz?.trimTrailingZeros ?? Wl.trimTrailingZeros,
        fixedDecimals: zz?.fixedDecimals,
        allowScientific: zz?.allowScientific ?? Wl.allowScientific,
        snapNearZero: zz?.snapNearZero ?? Wl.snapNearZero,
        zeroThreshold: zz?.zeroThreshold ?? uz,
        perAttributeEps: zz?.perAttributeEps
      }
    }

    function Il(zz) {
      return {
        number: jl(zz?.number)
      }
    }
    class Bl {
      constructor(zz) {
        if (this.o = zz, this._o = zz.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(zz) {
        if (!Number.isFinite(zz)) throw new Error(`Cannot format non-finite number: ${zz}`);
        const uz = this._o,
          bz = this._clampInt(uz.maxDecimalsCap ?? 15, 0, 20),
          Ez = uz.trimTrailingZeros ?? !0,
          nz = uz.snapNearZero ?? !0,
          iz = uz.zeroThreshold ?? uz.eps,
          lz = 1 / uz.eps;
        let Mz, tz = Math.round(zz * lz) / lz;
        if (Object.is(tz, -0) && (tz = 0), nz && Math.abs(tz) <= iz && (tz = 0), Mz = void 0 !== uz.fixedDecimals ? this._clampInt(uz.fixedDecimals, 0, bz) : this._clampInt(Math.ceil(-Math.log10(uz.eps)), 0, bz), uz.allowScientific, 0 === Mz) return String(Math.trunc(tz));
        let Hz = tz.toFixed(Mz);
        if (Ez && void 0 === uz.fixedDecimals && (Hz = Hz.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Hz)) throw new Error(`Scientific notation not allowed in XML output: ${Hz}`);
        return Hz
      }
      _clampInt(zz, uz, bz) {
        return Number.isFinite(zz) ? (zz = Math.trunc(zz), Math.max(uz, Math.min(bz, zz))) : uz
      }
    }

    function Cl(zz) {
      return zz instanceof Date
    }

    function Yl(zz) {
      return "string" === typeof zz
    }

    function kl(zz) {
      return "string" === typeof zz || "number" === typeof zz || "boolean" === typeof zz || "bigint" === typeof zz || Cl(zz)
    }

    function zM(zz) {
      return "number" === typeof zz || "boolean" === typeof zz || "bigint" === typeof zz || Cl(zz)
    }
    class uM {
      constructor(zz, uz) {
        this._ns = new Map, this._prefixCount = 0, this._builder = zz, this._format = Il(uz), this._nFmt = new Bl(this._format)
      }
      withNamespace() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        for (const Ez of uz) this._assignNamespace(Ez);
        return this
      }
      serialize(zz, uz) {
        if (!(uz = uz ?? Sl(zz))) throw new Error("can not find name for given object");
        const bz = Dl(uz);
        bz.ns && this._assignNamespace(bz.ns, "xmlns"), this._gatherNamespaces(zz, new WeakSet);
        const Ez = this._builder.ele(null, bz.name);
        for (const [nz, iz] of Array.from(this._ns.entries())) Ez.att("xmlns", iz, nz);
        this._writeObjectContent(Ez, zz, (new WeakSet).add(zz)), this._builder.end()
      }
      _writeObject(zz, uz, bz) {
        if (bz.has(uz)) return;
        if (bz.add(uz), Array.isArray(uz)) {
          for (const Ez of uz) zM(Ez) || (Yl(Ez) ? this._builder.text(Ez) : this._writeObject(zz, Ez, bz));
          return
        }
        const Ez = Sl(uz);
        if (!Ez) return;
        const nz = Dl(Ez),
          iz = this._getPrefix(nz),
          lz = Ql(nz.name, iz);
        zz.ele(null, lz), this._writeObjectContent(zz, uz, bz), this._builder.end()
      }
      _getPrefix(zz) {
        if (zz.ns) {
          const uz = this._ns.get(zz.ns.toLowerCase());
          if ("xmlns" !== uz) return uz
        }
      }
      _writeObjectContent(zz, uz, bz) {
        const Ez = gl(uz) ?? [],
          nz = new Map;
        for (const lz of Ez) {
          const zz = nz.get(lz.prop) ?? [];
          zz.push(lz), nz.set(lz.prop, zz)
        }
        const iz = Object.keys(uz).sort(((zz, uz) => {
          const bz = (nz.get(zz) ?? []).some((zz => "attr" === zz.kind));
          return bz === (nz.get(uz) ?? []).some((zz => "attr" === zz.kind)) ? 0 : bz ? -1 : 1
        }));
        for (const lz of iz) {
          const Ez = uz[lz];
          if (null === Ez || void 0 === Ez) continue;
          const iz = nz.get(lz);
          if (iz) {
            if (iz.some((zz => !0 === zz.ignore || "none" === zz.kind))) continue;
            for (const uz of iz) {
              const bz = uz.name ?? uz.prop.toLowerCase();
              if (bz) switch (uz.kind) {
                case "attr": {
                  let nz = null;
                  if ("number" === typeof Ez && this._nFmt && (nz = this._nFmt.toString(Ez)), uz.formatter) {
                    nz = new uz.formatter(this._format).toString(Ez)
                  }
                  if (nz = nz ?? Ez.toString(), nz) {
                    const uz = Dl(bz),
                      Ez = this._getPrefix(uz),
                      iz = Ql(uz.name, Ez);
                    zz.att(null, iz, nz)
                  }
                  break
                }
              }
            }
          } else zM(Ez) || (Yl(Ez) ? this._builder.text(Ez) : this._writeObject(zz, Ez, bz))
        }
      }
      _gatherNamespaces(zz, uz) {
        if (uz.has(zz)) return;
        if (uz.add(zz), Array.isArray(zz)) {
          for (const bz of zz) kl(bz) || this._gatherNamespaces(bz, uz);
          return
        }
        const bz = Sl(zz);
        bz && this._assignNamespace(bz);
        const Ez = gl(zz) ?? [],
          nz = new Map;
        for (const lz of Ez) {
          const zz = nz.get(lz.prop) ?? [];
          zz.push(lz), nz.set(lz.prop, zz)
        }
        const iz = [];
        for (const lz of Object.keys(zz)) {
          const uz = zz[lz];
          if (null === uz || void 0 === uz) continue;
          const bz = nz.get(lz);
          if (bz) {
            if (bz.some((zz => !0 === zz.ignore || "none" === zz.kind))) continue;
            for (const zz of bz) zz.name && this._assignNamespace(zz.name)
          }
          iz.push(uz)
        }
        for (const lz of iz) kl(lz) || this._gatherNamespaces(lz, uz)
      }
      _assignNamespace(zz, uz) {
        const bz = Dl(zz);
        if (bz?.ns) {
          const zz = bz.ns.toLowerCase();
          this._ns.get(zz) || this._ns.set(zz, uz ?? this._buildNsPrefix(zz))
        } else if ("xmlns" === uz) {
          const zz = bz.name.toLowerCase();
          this._ns.get(zz) || this._ns.set(zz, uz ?? this._buildNsPrefix(zz))
        }
      }
      _buildNsPrefix(zz) {
        let uz, bz = !1;
        do {
          uz = "ns" + this._prefixCount++;
          for (const zz of Array.from(this._ns.values()))
            if (zz === uz) {
              bz = !0;
              break
            }
        } while (bz);
        return uz
      }
    }
    class bM {}
    var EM;
    bM.OpenTag = "<", bM.CloseTag = ">", bM.Slash = "/", bM.Question = "?", bM.Quote = '"', bM.Equal = "=", bM.Space = " ", bM.Semicolon = ":", bM.Dec = "<?xml", bM.Xml = "xml", bM.Xmlns = "xmlns", bM.Xsi = "xsi", bM.VersionKeyword = "version", bM.EncodingKeyword = "encoding", bM.StandaloneKeyword = "standalone",
      function(zz) {
        zz[zz.Declaration = 0] = "Declaration", zz[zz.Tag = 1] = "Tag", zz[zz.Attribute = 2] = "Attribute", zz[zz.Text = 3] = "Text"
      }(EM || (EM = {}));
    class nM {
      constructor(zz) {
        this._ctxStack = [], this._d = 0, this._w = zz
      }
      dec(zz, uz, bz) {
        return this._w.write(bM.Dec), this._writeAttStr(bM.VersionKeyword, zz), uz && this._writeAttStr(bM.EncodingKeyword, uz), void 0 !== bz && this._writeAttStr(bM.StandaloneKeyword, bz ? "yes" : "no"), this._w.write(bM.Question, bM.CloseTag), this
      }
      att(zz, uz, bz) {
        const Ez = this._peekContext();
        if (!Ez) throw new Error("att() without open element");
        if (Ez.closed) throw new Error(`att() after start tag closed for <${Ez.name}>`);
        if (this._isXmlnsDecl(zz, uz)) {
          if (uz === bM.Xmlns) Ez.defaultNs = bz, this._registerNamespace(Ez, "", bz), this._writeAttStr(bM.Xmlns, bz);
          else if (zz) this._registerNamespace(Ez, uz, bz), this._writeAttStr(`${zz}:${uz}`, bz);
          else {
            const zz = uz.slice(6);
            this._registerNamespace(Ez, zz, bz), this._writeAttStr(uz, bz)
          }
          return Ez.lastToken = EM.Attribute, this
        }
        let nz = uz;
        if (zz) {
          nz = `${this._ensurePrefixDeclared(Ez,zz)}:${uz}`
        }
        return Ez.lastToken = EM.Attribute, this._writeAttStr(nz, bz), this
      }
      ele(zz, uz) {
        const bz = this._peekContext();
        bz && this._closeOpenTagIfNeeded(bz);
        let Ez = uz;
        if (zz) {
          Ez = `${this._lookupPrefix(zz)??zz}:${uz}`
        }
        return this._pushContext(Ez, ++this._d), this._w.write(bM.OpenTag, Ez), this
      }
      text(zz) {
        const uz = this._peekContext();
        if (!uz) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(uz), uz.lastToken = EM.Text, this._w.write(this._escText(zz)), this
      }
      end() {
        const zz = this._popContext();
        return zz && (this._d--, zz.closed ? this._w.write(bM.OpenTag, bM.Slash, zz.name, bM.CloseTag) : this._w.write(bM.Slash, bM.CloseTag)), this
      }
      _pushContext(zz, uz) {
        const bz = new nM.Context(zz, uz);
        return this._ctxStack.push(bz), bz
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
      _writeAttStr(zz, uz) {
        this._w.write(bM.Space, zz, bM.Equal, bM.Quote, this._escAttr(uz), bM.Quote)
      }
      _lookupPrefix(zz) {
        let uz = this._ctxStack.length - 1;
        if (uz >= 0)
          do {
            const bz = this._ctxStack[uz--],
              Ez = bz.ns2prefix?.get(zz);
            if (Ez) return Ez
          } while (uz >= 0)
      }
      _escText(zz) {
        return zz.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(zz) {
        return this._escText(zz).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(zz, uz) {
        if (zz) return zz === bM.Xmlns;
        const bz = uz.length,
          Ez = bM.Xmlns.length;
        return bz >= Ez && (uz.startsWith(bM.Xmlns) && (uz.length == Ez || uz[Ez] == bM.Semicolon))
      }
      _registerNamespace(zz, uz, bz) {
        if (uz === bM.Xml || uz === bM.Xmlns) throw new Error(`reserved prefix '${uz}'`);
        const Ez = zz.prefix2ns.get(uz);
        if (Ez && Ez !== bz) throw new Error(`prefix '${uz}' already bound to a different namespace`);
        zz.ns2prefix.get(bz) || zz.ns2prefix.set(bz, uz), zz.prefix2ns.set(uz, bz)
      }
      _allocPrefix(zz) {
        let uz = 1;
        for (;;) {
          const bz = "ns" + uz++;
          if (!zz.prefix2ns.has(bz)) return bz
        }
      }
      _ensurePrefixDeclared(zz, uz) {
        const bz = this._lookupPrefix(uz);
        if (bz) return bz;
        if (zz.closed) throw new Error(`can not declare namespace after start tag closed for <${zz.name}>`);
        const Ez = this._allocPrefix(zz);
        return this._writeAttStr(`${bM.Xmlns}:${Ez}`, uz), this._registerNamespace(zz, Ez, uz), Ez
      }
      _closeOpenTagIfNeeded(zz) {
        zz.closed || (this._w.write(bM.CloseTag), zz.closed = !0)
      }
    }
    nM.Context = class {
      constructor(zz, uz) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = zz, this.depth = uz
      }
    };
    class iM {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        if (0 === uz.length) return this;
        const Ez = uz.join("");
        return this._chunks.push(Ez), this.count += Ez.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class lM {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = zz, this._opts = uz, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        if (0 === uz.length) return this;
        const Ez = uz.join("");
        if (0 === Ez.length) return this;
        this._pending += Ez, this._pendingChars += Ez.length;
        const nz = this._opts.flushChars ?? 65536;
        return this._pendingChars >= nz && this.flush(), this
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
    const MM = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      tM = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var HM, OM;
    ! function(zz) {
      zz.micron = "micron", zz.millimeter = "millimeter", zz.centimeter = "centimeter", zz.inch = "inch", zz.foot = "foot", zz.meter = "meter"
    }(HM || (HM = {})),
    function(zz) {
      zz.model = "model", zz.solidsupport = "solidsupport", zz.support = "support", zz.surface = "surface", zz.other = "other"
    }(OM || (OM = {}));
    const pM = "http://schemas.openxmlformats.org/package/2006/content-types",
      dM = "http://schemas.openxmlformats.org/package/2006/relationships";
    var FM;
    ! function(zz) {
      zz.Relationships = "application/vnd.openxmlformats-package.relationships+xml", zz.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", zz.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", zz.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", zz.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", zz.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", zz.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", zz.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", zz.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", zz.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", zz.Png = "image/png", zz.Jpeg = "image/jpeg", zz.Tiff = "image/tiff", zz.Xml = "application/xml"
    }(FM || (FM = {}));
    const ZM = "_rels/",
      RM = "3D/",
      KM = "3dmodel.model",
      wM = ".rels",
      XM = "[Content_Types].xml";
    class fM {
      static IsKnown(zz) {
        return fM.Known.has(zz)
      }
      static IsThreeDimModel(zz) {
        return zz === fM.ThreeDimModel
      }
    }
    fM.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", fM.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", fM.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", fM.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", fM.Known = new Set([fM.ThreeDimModel, fM.Thumbnail, fM.PrintTicket, fM.MustPreserve]);
    let sM = (() => {
        let zz, uz, bz = [ql({
            ns: pM,
            name: "Types"
          })],
          Ez = [];
        uz = class {
          constructor() {
            this.items = []
          }
        };
        return (0, xz.n)(uz, "ThreeMfContentTypes"), (() => {
          const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, xz.h)(null, zz = {
            value: uz
          }, bz, {
            kind: "class",
            name: uz.name,
            metadata: nz
          }, null, Ez), uz = zz.value, nz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nz
          }), (0, xz.j)(uz, Ez)
        })(), uz
      })(),
      rM = (() => {
        let zz, uz, bz, Ez, nz = [ql({
            ns: pM,
            name: "Default"
          })],
          iz = [],
          lz = [],
          Mz = [],
          tz = [],
          Hz = [];
        uz = class {
          constructor(zz, uz) {
            this.ext = (0, xz.j)(this, lz, void 0), this.ct = ((0, xz.j)(this, Mz), (0, xz.j)(this, tz, void 0)), (0, xz.j)(this, Hz), this.ext = zz, this.ct = uz
          }
        };
        return (0, xz.n)(uz, "ThreeMfContentType"), (() => {
          const Oz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bz = [Ul({
            name: {
              ns: pM,
              name: "Extension"
            }
          })], Ez = [Ul({
            name: {
              ns: pM,
              name: "ContentType"
            }
          })], (0, xz.h)(null, null, bz, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: zz => "ext" in zz,
              get: zz => zz.ext,
              set: (zz, uz) => {
                zz.ext = uz
              }
            },
            metadata: Oz
          }, lz, Mz), (0, xz.h)(null, null, Ez, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: zz => "ct" in zz,
              get: zz => zz.ct,
              set: (zz, uz) => {
                zz.ct = uz
              }
            },
            metadata: Oz
          }, tz, Hz), (0, xz.h)(null, zz = {
            value: uz
          }, nz, {
            kind: "class",
            name: uz.name,
            metadata: Oz
          }, null, iz), uz = zz.value, Oz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oz
          }), (0, xz.j)(uz, iz)
        })(), uz
      })(),
      oM = (() => {
        let zz, uz, bz = [ql({
            ns: dM,
            name: "Relationships"
          })],
          Ez = [];
        uz = class {
          constructor() {
            this.items = []
          }
        };
        return (0, xz.n)(uz, "ThreeMfRelationships"), (() => {
          const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, xz.h)(null, zz = {
            value: uz
          }, bz, {
            kind: "class",
            name: uz.name,
            metadata: nz
          }, null, Ez), uz = zz.value, nz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nz
          }), (0, xz.j)(uz, Ez)
        })(), uz
      })(),
      NM = (() => {
        let zz, uz, bz, Ez, nz, iz = [ql({
            ns: dM,
            name: "Relationship"
          })],
          lz = [],
          Mz = [],
          tz = [],
          Hz = [],
          Oz = [],
          pz = [],
          dz = [];
        uz = class {
          constructor(zz, uz, bz) {
            this.id = (0, xz.j)(this, Mz, void 0), this.type = ((0, xz.j)(this, tz), (0, xz.j)(this, Hz, void 0)), this.target = ((0, xz.j)(this, Oz), (0, xz.j)(this, pz, void 0)), (0, xz.j)(this, dz), this.id = zz, this.type = uz, this.target = bz
          }
        };
        return (0, xz.n)(uz, "ThreeMfRelationship"), (() => {
          const Fz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bz = [Ul({
            name: "Id"
          })], Ez = [Ul({
            name: "Type"
          })], nz = [Ul({
            name: "Target"
          })], (0, xz.h)(null, null, bz, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: zz => "id" in zz,
              get: zz => zz.id,
              set: (zz, uz) => {
                zz.id = uz
              }
            },
            metadata: Fz
          }, Mz, tz), (0, xz.h)(null, null, Ez, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: zz => "type" in zz,
              get: zz => zz.type,
              set: (zz, uz) => {
                zz.type = uz
              }
            },
            metadata: Fz
          }, Hz, Oz), (0, xz.h)(null, null, nz, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: zz => "target" in zz,
              get: zz => zz.target,
              set: (zz, uz) => {
                zz.target = uz
              }
            },
            metadata: Fz
          }, pz, dz), (0, xz.h)(null, zz = {
            value: uz
          }, iz, {
            kind: "class",
            name: uz.name,
            metadata: Fz
          }, null, lz), uz = zz.value, Fz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fz
          }), (0, xz.j)(uz, lz)
        })(), uz
      })();
    class vM {
      constructor(zz, uz, bz) {
        this.contentTypes = zz, this.relationships = uz, this.model = bz
      }
    }
    class xM {
      static Zero() {
        return new xM([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(zz) {
        this.values = zz
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class JM {
      constructor(zz) {
        this.o = zz, this._f = new Bl(zz)
      }
      toString(zz) {
        return zz.values.map((zz => this._f.toString(zz))).join(" ")
      }
    }
    let AM = (() => {
        let zz, uz, bz, Ez, nz, iz = [ql({
            ns: MM,
            name: "model"
          })],
          lz = [],
          Mz = [],
          tz = [],
          Hz = [],
          Oz = [],
          pz = [],
          dz = [];
        uz = class {
          constructor() {
            this.unit = (0, xz.j)(this, Mz, HM.millimeter), this.requiredextensions = ((0, xz.j)(this, tz), (0, xz.j)(this, Hz, void 0)), this.recommendedextensions = ((0, xz.j)(this, Oz), (0, xz.j)(this, pz, void 0)), this.metadata = (0, xz.j)(this, dz)
          }
        };
        return (0, xz.n)(uz, "ThreeMfModel"), (() => {
          const Fz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bz = [Ul({
            name: "unit"
          })], Ez = [Ul({
            name: "requiredextensions"
          })], nz = [Ul({
            name: "recommendedextensions"
          })], (0, xz.h)(null, null, bz, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: zz => "unit" in zz,
              get: zz => zz.unit,
              set: (zz, uz) => {
                zz.unit = uz
              }
            },
            metadata: Fz
          }, Mz, tz), (0, xz.h)(null, null, Ez, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: zz => "requiredextensions" in zz,
              get: zz => zz.requiredextensions,
              set: (zz, uz) => {
                zz.requiredextensions = uz
              }
            },
            metadata: Fz
          }, Hz, Oz), (0, xz.h)(null, null, nz, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: zz => "recommendedextensions" in zz,
              get: zz => zz.recommendedextensions,
              set: (zz, uz) => {
                zz.recommendedextensions = uz
              }
            },
            metadata: Fz
          }, pz, dz), (0, xz.h)(null, zz = {
            value: uz
          }, iz, {
            kind: "class",
            name: uz.name,
            metadata: Fz
          }, null, lz), uz = zz.value, Fz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fz
          })
        })(), uz.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, xz.j)(uz, lz), uz
      })(),
      TM = (() => {
        let zz, uz, bz, Ez, nz, iz = [ql({
            ns: MM,
            name: "meta"
          })],
          lz = [],
          Mz = [],
          tz = [],
          Hz = [],
          Oz = [],
          pz = [],
          dz = [];
        uz = class {
          constructor(zz, uz, bz, Ez) {
            this.name = (0, xz.j)(this, Mz, void 0), this.preserve = ((0, xz.j)(this, tz), (0, xz.j)(this, Hz, void 0)), this.type = ((0, xz.j)(this, Oz), (0, xz.j)(this, pz, void 0)), this.value = (0, xz.j)(this, dz), this.name = zz, this.value = uz, this.preserve = bz, this.type = Ez
          }
        };
        return (0, xz.n)(uz, "ThreeMfMeta"), (() => {
          const Fz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bz = [Ul({
            name: "name"
          })], Ez = [Ul({
            name: "preserve"
          })], nz = [Ul({
            name: "type"
          })], (0, xz.h)(null, null, bz, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: zz => "name" in zz,
              get: zz => zz.name,
              set: (zz, uz) => {
                zz.name = uz
              }
            },
            metadata: Fz
          }, Mz, tz), (0, xz.h)(null, null, Ez, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: zz => "preserve" in zz,
              get: zz => zz.preserve,
              set: (zz, uz) => {
                zz.preserve = uz
              }
            },
            metadata: Fz
          }, Hz, Oz), (0, xz.h)(null, null, nz, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: zz => "type" in zz,
              get: zz => zz.type,
              set: (zz, uz) => {
                zz.type = uz
              }
            },
            metadata: Fz
          }, pz, dz), (0, xz.h)(null, zz = {
            value: uz
          }, iz, {
            kind: "class",
            name: uz.name,
            metadata: Fz
          }, null, lz), uz = zz.value, Fz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fz
          }), (0, xz.j)(uz, lz)
        })(), uz
      })(),
      LM = (() => {
        let zz, uz, bz = [ql({
            ns: MM,
            name: "metadatagroup"
          })],
          Ez = [];
        uz = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, xz.n)(uz, "ThreeMfMetadataGroup"), (() => {
          const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, xz.h)(null, zz = {
            value: uz
          }, bz, {
            kind: "class",
            name: uz.name,
            metadata: nz
          }, null, Ez), uz = zz.value, nz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nz
          }), (0, xz.j)(uz, Ez)
        })(), uz
      })(),
      PM = (() => {
        let zz, uz, bz = [ql({
            ns: MM,
            name: "resources"
          })],
          Ez = [];
        uz = class {
          constructor() {
            this.object = []
          }
        };
        return (0, xz.n)(uz, "ThreeMfResources"), (() => {
          const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, xz.h)(null, zz = {
            value: uz
          }, bz, {
            kind: "class",
            name: uz.name,
            metadata: nz
          }, null, Ez), uz = zz.value, nz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nz
          }), (0, xz.j)(uz, Ez)
        })(), uz
      })(),
      GM = (() => {
        let zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz = [ql({
            ns: MM,
            name: "object"
          })],
          Oz = [],
          pz = [],
          dz = [],
          Fz = [],
          Zz = [],
          Rz = [],
          Kz = [],
          wz = [],
          Xz = [],
          fz = [],
          sz = [],
          rz = [],
          oz = [],
          Nz = [],
          vz = [];
        uz = class {
          constructor(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OM.model;
            this.id = (0, xz.j)(this, pz, void 0), this.type = ((0, xz.j)(this, dz), (0, xz.j)(this, Fz, void 0)), this.thumbnail = ((0, xz.j)(this, Zz), (0, xz.j)(this, Rz, void 0)), this.partnumber = ((0, xz.j)(this, Kz), (0, xz.j)(this, wz, void 0)), this.name = ((0, xz.j)(this, Xz), (0, xz.j)(this, fz, void 0)), this.pid = ((0, xz.j)(this, sz), (0, xz.j)(this, rz, void 0)), this.pindex = ((0, xz.j)(this, oz), (0, xz.j)(this, Nz, void 0)), this.metadatagroup = (0, xz.j)(this, vz), this.id = zz, this.type = uz
          }
        };
        return (0, xz.n)(uz, "ThreeMfObject"), (() => {
          const Jz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bz = [Ul({
            name: "id"
          })], Ez = [Ul({
            name: "type"
          })], nz = [Ul({
            name: "thumbnail"
          })], iz = [Ul({
            name: "partnumber"
          })], lz = [Ul({
            name: "name"
          })], Mz = [Ul({
            name: "pid"
          })], tz = [Ul({
            name: "pindex"
          })], (0, xz.h)(null, null, bz, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: zz => "id" in zz,
              get: zz => zz.id,
              set: (zz, uz) => {
                zz.id = uz
              }
            },
            metadata: Jz
          }, pz, dz), (0, xz.h)(null, null, Ez, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: zz => "type" in zz,
              get: zz => zz.type,
              set: (zz, uz) => {
                zz.type = uz
              }
            },
            metadata: Jz
          }, Fz, Zz), (0, xz.h)(null, null, nz, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: zz => "thumbnail" in zz,
              get: zz => zz.thumbnail,
              set: (zz, uz) => {
                zz.thumbnail = uz
              }
            },
            metadata: Jz
          }, Rz, Kz), (0, xz.h)(null, null, iz, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: zz => "partnumber" in zz,
              get: zz => zz.partnumber,
              set: (zz, uz) => {
                zz.partnumber = uz
              }
            },
            metadata: Jz
          }, wz, Xz), (0, xz.h)(null, null, lz, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: zz => "name" in zz,
              get: zz => zz.name,
              set: (zz, uz) => {
                zz.name = uz
              }
            },
            metadata: Jz
          }, fz, sz), (0, xz.h)(null, null, Mz, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: zz => "pid" in zz,
              get: zz => zz.pid,
              set: (zz, uz) => {
                zz.pid = uz
              }
            },
            metadata: Jz
          }, rz, oz), (0, xz.h)(null, null, tz, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: zz => "pindex" in zz,
              get: zz => zz.pindex,
              set: (zz, uz) => {
                zz.pindex = uz
              }
            },
            metadata: Jz
          }, Nz, vz), (0, xz.h)(null, zz = {
            value: uz
          }, Hz, {
            kind: "class",
            name: uz.name,
            metadata: Jz
          }, null, Oz), uz = zz.value, Jz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Jz
          }), (0, xz.j)(uz, Oz)
        })(), uz
      })(),
      aM = (() => {
        let zz, uz, bz = [ql({
            ns: MM,
            name: "mesh"
          })],
          Ez = [];
        uz = class {
          constructor(zz, uz) {
            this.vertices = zz ?? new VM, this.triangles = uz ?? new qM
          }
        };
        return (0, xz.n)(uz, "ThreeMfMesh"), (() => {
          const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, xz.h)(null, zz = {
            value: uz
          }, bz, {
            kind: "class",
            name: uz.name,
            metadata: nz
          }, null, Ez), uz = zz.value, nz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nz
          }), (0, xz.j)(uz, Ez)
        })(), uz
      })(),
      VM = (() => {
        let zz, uz, bz = [ql({
            ns: MM,
            name: "vertices"
          })],
          Ez = [];
        uz = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, xz.n)(uz, "ThreeMfVertices"), (() => {
          const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, xz.h)(null, zz = {
            value: uz
          }, bz, {
            kind: "class",
            name: uz.name,
            metadata: nz
          }, null, Ez), uz = zz.value, nz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nz
          }), (0, xz.j)(uz, Ez)
        })(), uz
      })(),
      mM = (() => {
        let zz, uz, bz, Ez, nz, iz = [ql({
            ns: MM,
            name: "vertex"
          })],
          lz = [],
          Mz = [],
          tz = [],
          Hz = [],
          Oz = [],
          pz = [],
          dz = [];
        uz = class {
          constructor() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, xz.j)(this, Mz, void 0), this.y = ((0, xz.j)(this, tz), (0, xz.j)(this, Hz, void 0)), this.z = ((0, xz.j)(this, Oz), (0, xz.j)(this, pz, void 0)), (0, xz.j)(this, dz), this.x = zz, this.y = uz, this.z = bz
          }
        };
        return (0, xz.n)(uz, "ThreeMfVertex"), (() => {
          const Fz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bz = [Ul({
            name: "x"
          })], Ez = [Ul({
            name: "y"
          })], nz = [Ul({
            name: "z"
          })], (0, xz.h)(null, null, bz, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: zz => "x" in zz,
              get: zz => zz.x,
              set: (zz, uz) => {
                zz.x = uz
              }
            },
            metadata: Fz
          }, Mz, tz), (0, xz.h)(null, null, Ez, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: zz => "y" in zz,
              get: zz => zz.y,
              set: (zz, uz) => {
                zz.y = uz
              }
            },
            metadata: Fz
          }, Hz, Oz), (0, xz.h)(null, null, nz, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: zz => "z" in zz,
              get: zz => zz.z,
              set: (zz, uz) => {
                zz.z = uz
              }
            },
            metadata: Fz
          }, pz, dz), (0, xz.h)(null, zz = {
            value: uz
          }, iz, {
            kind: "class",
            name: uz.name,
            metadata: Fz
          }, null, lz), uz = zz.value, Fz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fz
          }), (0, xz.j)(uz, lz)
        })(), uz
      })(),
      qM = (() => {
        let zz, uz, bz = [ql({
            ns: MM,
            name: "triangles"
          })],
          Ez = [];
        uz = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, xz.n)(uz, "ThreeMfTriangles"), (() => {
          const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, xz.h)(null, zz = {
            value: uz
          }, bz, {
            kind: "class",
            name: uz.name,
            metadata: nz
          }, null, Ez), uz = zz.value, nz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nz
          }), (0, xz.j)(uz, Ez)
        })(), uz
      })(),
      hM = (() => {
        let zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz = [ql({
            ns: MM,
            name: "triangle"
          })],
          Oz = [],
          pz = [],
          dz = [],
          Fz = [],
          Zz = [],
          Rz = [],
          Kz = [],
          wz = [],
          Xz = [],
          fz = [],
          sz = [],
          rz = [],
          oz = [],
          Nz = [],
          vz = [];
        uz = class {
          constructor(zz, uz, bz) {
            this.v1 = (0, xz.j)(this, pz, void 0), this.v2 = ((0, xz.j)(this, dz), (0, xz.j)(this, Fz, void 0)), this.v3 = ((0, xz.j)(this, Zz), (0, xz.j)(this, Rz, void 0)), this.p1 = ((0, xz.j)(this, Kz), (0, xz.j)(this, wz, void 0)), this.p2 = ((0, xz.j)(this, Xz), (0, xz.j)(this, fz, void 0)), this.p3 = ((0, xz.j)(this, sz), (0, xz.j)(this, rz, void 0)), this.pid = ((0, xz.j)(this, oz), (0, xz.j)(this, Nz, void 0)), (0, xz.j)(this, vz), this.v1 = zz, this.v2 = uz, this.v3 = bz
          }
        };
        return (0, xz.n)(uz, "ThreeMfTriangle"), (() => {
          const Jz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bz = [Ul({
            name: "v1"
          })], Ez = [Ul({
            name: "v2"
          })], nz = [Ul({
            name: "v3"
          })], iz = [Ul({
            name: "p1"
          })], lz = [Ul({
            name: "p2"
          })], Mz = [Ul({
            name: "p3"
          })], tz = [Ul({
            name: "pid"
          })], (0, xz.h)(null, null, bz, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: zz => "v1" in zz,
              get: zz => zz.v1,
              set: (zz, uz) => {
                zz.v1 = uz
              }
            },
            metadata: Jz
          }, pz, dz), (0, xz.h)(null, null, Ez, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: zz => "v2" in zz,
              get: zz => zz.v2,
              set: (zz, uz) => {
                zz.v2 = uz
              }
            },
            metadata: Jz
          }, Fz, Zz), (0, xz.h)(null, null, nz, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: zz => "v3" in zz,
              get: zz => zz.v3,
              set: (zz, uz) => {
                zz.v3 = uz
              }
            },
            metadata: Jz
          }, Rz, Kz), (0, xz.h)(null, null, iz, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: zz => "p1" in zz,
              get: zz => zz.p1,
              set: (zz, uz) => {
                zz.p1 = uz
              }
            },
            metadata: Jz
          }, wz, Xz), (0, xz.h)(null, null, lz, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: zz => "p2" in zz,
              get: zz => zz.p2,
              set: (zz, uz) => {
                zz.p2 = uz
              }
            },
            metadata: Jz
          }, fz, sz), (0, xz.h)(null, null, Mz, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: zz => "p3" in zz,
              get: zz => zz.p3,
              set: (zz, uz) => {
                zz.p3 = uz
              }
            },
            metadata: Jz
          }, rz, oz), (0, xz.h)(null, null, tz, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: zz => "pid" in zz,
              get: zz => zz.pid,
              set: (zz, uz) => {
                zz.pid = uz
              }
            },
            metadata: Jz
          }, Nz, vz), (0, xz.h)(null, zz = {
            value: uz
          }, Hz, {
            kind: "class",
            name: uz.name,
            metadata: Jz
          }, null, Oz), uz = zz.value, Jz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Jz
          }), (0, xz.j)(uz, Oz)
        })(), uz
      })(),
      UM = (() => {
        let zz, uz, bz = [ql({
            ns: MM,
            name: "components"
          })],
          Ez = [];
        uz = class {
          constructor() {
            this.component = []
          }
        };
        return (0, xz.n)(uz, "ThreeMfComponents"), (() => {
          const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, xz.h)(null, zz = {
            value: uz
          }, bz, {
            kind: "class",
            name: uz.name,
            metadata: nz
          }, null, Ez), uz = zz.value, nz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nz
          }), (0, xz.j)(uz, Ez)
        })(), uz
      })(),
      cM = (() => {
        let zz, uz, bz, Ez, nz = [ql({
            ns: MM,
            name: "component"
          })],
          iz = [],
          lz = [],
          Mz = [],
          tz = [],
          Hz = [];
        uz = class {
          constructor(zz, uz) {
            this.objectid = (0, xz.j)(this, lz, void 0), this.transform = ((0, xz.j)(this, Mz), (0, xz.j)(this, tz, void 0)), (0, xz.j)(this, Hz), this.objectid = zz, this.transform = uz
          }
        };
        return (0, xz.n)(uz, "ThreeMfComponent"), (() => {
          const Oz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bz = [Ul({
            name: "objectid"
          })], Ez = [Ul({
            name: "transform",
            formatter: JM
          })], (0, xz.h)(null, null, bz, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: zz => "objectid" in zz,
              get: zz => zz.objectid,
              set: (zz, uz) => {
                zz.objectid = uz
              }
            },
            metadata: Oz
          }, lz, Mz), (0, xz.h)(null, null, Ez, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: zz => "transform" in zz,
              get: zz => zz.transform,
              set: (zz, uz) => {
                zz.transform = uz
              }
            },
            metadata: Oz
          }, tz, Hz), (0, xz.h)(null, zz = {
            value: uz
          }, nz, {
            kind: "class",
            name: uz.name,
            metadata: Oz
          }, null, iz), uz = zz.value, Oz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oz
          }), (0, xz.j)(uz, iz)
        })(), uz
      })(),
      gM = (() => {
        let zz, uz, bz, Ez = [ql({
            ns: MM,
            name: "basematerials"
          })],
          nz = [],
          iz = [],
          lz = [];
        uz = class {
          constructor(zz) {
            this.id = (0, xz.j)(this, iz, void 0), this.base = ((0, xz.j)(this, lz), []), this.id = zz
          }
        };
        return (0, xz.n)(uz, "ThreeMfBaseMaterials"), (() => {
          const Mz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bz = [Ul({
            name: "id"
          })], (0, xz.h)(null, null, bz, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: zz => "id" in zz,
              get: zz => zz.id,
              set: (zz, uz) => {
                zz.id = uz
              }
            },
            metadata: Mz
          }, iz, lz), (0, xz.h)(null, zz = {
            value: uz
          }, Ez, {
            kind: "class",
            name: uz.name,
            metadata: Mz
          }, null, nz), uz = zz.value, Mz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mz
          }), (0, xz.j)(uz, nz)
        })(), uz
      })(),
      SM = (() => {
        let zz, uz, bz, Ez, nz = [ql({
            ns: MM,
            name: "base"
          })],
          iz = [],
          lz = [],
          Mz = [],
          tz = [],
          Hz = [];
        uz = class {
          constructor(zz, uz) {
            this.name = (0, xz.j)(this, lz, void 0), this.displaycolor = ((0, xz.j)(this, Mz), (0, xz.j)(this, tz, void 0)), (0, xz.j)(this, Hz), this.name = zz, this.displaycolor = uz
          }
        };
        return (0, xz.n)(uz, "ThreeMfBase"), (() => {
          const Oz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bz = [Ul({
            name: "name"
          })], Ez = [Ul({
            name: "displaycolor"
          })], (0, xz.h)(null, null, bz, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: zz => "name" in zz,
              get: zz => zz.name,
              set: (zz, uz) => {
                zz.name = uz
              }
            },
            metadata: Oz
          }, lz, Mz), (0, xz.h)(null, null, Ez, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: zz => "displaycolor" in zz,
              get: zz => zz.displaycolor,
              set: (zz, uz) => {
                zz.displaycolor = uz
              }
            },
            metadata: Oz
          }, tz, Hz), (0, xz.h)(null, zz = {
            value: uz
          }, nz, {
            kind: "class",
            name: uz.name,
            metadata: Oz
          }, null, iz), uz = zz.value, Oz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oz
          }), (0, xz.j)(uz, iz)
        })(), uz
      })(),
      yM = (() => {
        let zz, uz, bz = [ql({
            ns: MM,
            name: "build"
          })],
          Ez = [];
        uz = class {
          constructor() {
            this.item = []
          }
        };
        return (0, xz.n)(uz, "ThreeMfBuild"), (() => {
          const nz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, xz.h)(null, zz = {
            value: uz
          }, bz, {
            kind: "class",
            name: uz.name,
            metadata: nz
          }, null, Ez), uz = zz.value, nz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nz
          }), (0, xz.j)(uz, Ez)
        })(), uz
      })(),
      DM = (() => {
        let zz, uz, bz, Ez, nz, iz = [ql({
            ns: MM,
            name: "item"
          })],
          lz = [],
          Mz = [],
          tz = [],
          Hz = [],
          Oz = [],
          pz = [],
          dz = [];
        uz = class {
          constructor(zz, uz, bz) {
            this.objectid = (0, xz.j)(this, Mz, void 0), this.transform = ((0, xz.j)(this, tz), (0, xz.j)(this, Hz, void 0)), this.partnumber = ((0, xz.j)(this, Oz), (0, xz.j)(this, pz, void 0)), this.metadatagroup = (0, xz.j)(this, dz), this.objectid = zz, this.transform = uz, this.partnumber = bz
          }
        };
        return (0, xz.n)(uz, "ThreeMfItem"), (() => {
          const Fz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bz = [Ul({
            name: "objectid"
          })], Ez = [Ul({
            name: "transform",
            formatter: JM
          })], nz = [Ul({
            name: "partnumber"
          })], (0, xz.h)(null, null, bz, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: zz => "objectid" in zz,
              get: zz => zz.objectid,
              set: (zz, uz) => {
                zz.objectid = uz
              }
            },
            metadata: Fz
          }, Mz, tz), (0, xz.h)(null, null, Ez, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: zz => "transform" in zz,
              get: zz => zz.transform,
              set: (zz, uz) => {
                zz.transform = uz
              }
            },
            metadata: Fz
          }, Hz, Oz), (0, xz.h)(null, null, nz, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: zz => "partnumber" in zz,
              get: zz => zz.partnumber,
              set: (zz, uz) => {
                zz.partnumber = uz
              }
            },
            metadata: Fz
          }, pz, dz), (0, xz.h)(null, zz = {
            value: uz
          }, iz, {
            kind: "class",
            name: uz.name,
            metadata: Fz
          }, null, lz), uz = zz.value, Fz && Object.defineProperty(uz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fz
          }), (0, xz.j)(uz, lz)
        })(), uz
      })();
    class QM {
      constructor(zz, uz) {
        this._object = new GM(zz, uz)
      }
      withName(zz) {
        return this._object.name = zz, this
      }
      withThumbnail(zz) {
        return this._object.thumbnail = zz, this
      }
      withProperty(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = zz, this._object.id = uz, this
      }
      build() {
        return this._object
      }
      reset(zz, uz) {
        this._object = new GM(zz, uz)
      }
    }
    class WM extends QM {
      constructor(zz) {
        super(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OM.model), this._object.content = new UM
      }
      withComponent(zz, uz) {
        return this._object.content.component.push(new cM(zz, uz)), this
      }
    }
    class eM extends QM {
      constructor(zz) {
        super(zz, OM.model)
      }
      withPostProcessHandlers(zz, uz) {
        return this._vh = zz, this._th = uz, this
      }
      withData(zz) {
        return this._object.content = this._buildMesh(zz), this
      }
      withMaterial(zz, uz) {
        return this._object.pid = zz, this._object.pindex = uz, this
      }
      _buildMesh(zz) {
        const uz = this._buildVertices(zz.positions),
          bz = this._buildTriangle(zz.indices);
        return new aM(uz, bz)
      }
      _buildVertices(zz) {
        const uz = new VM;
        if (zz)
          for (let bz = 0; bz < zz.length;) {
            const Ez = zz[bz++],
              nz = zz[bz++],
              iz = zz[bz++];
            let lz = new mM(Ez, nz, iz);
            this._vh && (lz = this._vh(lz)), uz.vertex.push(lz)
          }
        return uz
      }
      _buildTriangle(zz) {
        const uz = new qM;
        if (zz)
          for (let bz = 0; bz < zz.length;) {
            const Ez = zz[bz++],
              nz = zz[bz++],
              iz = zz[bz++];
            let lz = new hM(Ez, nz, iz);
            this._th && (lz = this._th(lz)), uz.triangle.push(lz)
          }
        return uz
      }
    }
    class jM {
      constructor(zz) {
        this._m = new gM(zz)
      }
      withColor(zz, uz) {
        this._m.base = this._m.base ?? [];
        let bz = this._m.base.find((uz => uz.name.toLowerCase() === zz.toLowerCase()));
        return bz ? (bz.displaycolor = this._rgbaToHex(uz), this) : (bz = new SM(zz, this._rgbaToHex(uz)), this._m.base.push(bz), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(zz) {
        const uz = zz => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(zz, 1 / 2.2)))),
          bz = uz(zz.r).toString(16).padStart(2, "0").toUpperCase(),
          Ez = uz(zz.g).toString(16).padStart(2, "0").toUpperCase(),
          nz = uz(zz.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof zz.a) {
          return `#${bz}${Ez}${nz}${Math.round(Math.min(255,Math.max(0,255*zz.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${bz}${Ez}${nz}`
      }
    }
    class IM {
      constructor() {
        this._model = new AM, this._objects = new Map
      }
      withMetaData(zz, uz, bz, Ez) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new TM(zz, uz, bz, Ez)), this
      }
      withMaterial(zz) {
        return zz instanceof jM && (zz = zz.build()), zz && (this._model.resources = this._model.resources ?? new PM, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(zz)), this
      }
      withMesh(zz) {
        return zz instanceof eM && (zz = zz.build()), this._model.resources = this._model.resources ?? new PM, this._model.resources.object.push(zz), this
      }
      withComponents(zz) {
        return zz instanceof WM && (zz = zz.build()), this._model.resources = this._model.resources ?? new PM, this._model.resources.object.push(zz), this
      }
      withBuild(zz, uz, bz) {
        return this._model.build = this._model.build ?? new yM, this._model.build.item?.push(new DM(zz, uz, bz)), this
      }
      withUnit(zz) {
        return this._model.unit = zz, this
      }
      reset() {
        return this._model = new AM, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    IM.KnownMetaSet = new Set(AM.KnownMeta.map((zz => zz.toLowerCase())));
    class BM {
      withContentType(zz) {
        this._cts || (this._cts = new sM);
        const uz = this._cts.items;
        return uz.some((uz => uz.ext === zz.ext && uz.ct === zz.ct)) || uz.push(zz), this
      }
      withRelationship(zz) {
        this._rs || (this._rs = new oM);
        const uz = this._rs.items;
        return uz.some((uz => uz.id === zz.id)) || uz.push(zz), this.withContentType(new rM("rels", FM.Relationships)), this
      }
      withModel(zz) {
        return zz instanceof IM && (zz = zz.build()), this._m = zz, this.withContentType(new rM("model", FM.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const zz = `${RM}${KM}`;
        if (!this._rs) {
          const uz = `/${zz}`;
          this.withRelationship(new NM("rel0", fM.ThreeDimModel, uz))
        }
        return new vM(this._cts, this._rs, this._m)
      }
    }
    class CM {
      constructor(zz) {
        this._o = zz
      }
      get options() {
        return this._o
      }
      async serializeAsync(zz) {
        const uz = await this.ensureZipLibReadyAsync();
        if (!uz) return;
        const bz = uz.Zip,
          Ez = uz.ZipDeflate;
        if (!bz || !Ez) throw new Error("fflate Zip / ZipDeflate not available");
        const nz = function(zz, uz, bz) {
          const nz = new Ez(uz, {
            level: 6
          });
          zz.add(nz);
          const iz = function(zz) {
              return {
                push: (uz, bz) => zz.push(uz, bz)
              }
            }(nz),
            lz = new lM(iz),
            Mz = new nM(lz).dec("1.0", "UTF-8");
          new uM(Mz).serialize(bz), lz.finish()
        };
        for (var iz = arguments.length, lz = new Array(iz > 1 ? iz - 1 : 0), Mz = 1; Mz < iz; Mz++) lz[Mz - 1] = arguments[Mz];
        const tz = this.toDocument(...lz);
        if (!tz) return;
        const Hz = new bz(zz);
        nz(Hz, XM, tz.contentTypes), nz(Hz, `${ZM}${wM}`, tz.relationships), nz(Hz, `${RM}${KM}`, tz.model), Hz.end()
      }
      toDocument() {
        const zz = (new IM).withUnit(this._o?.unit ?? HM.millimeter);
        if (this.options.metadata)
          for (const nz in this.options.metadata) zz.withMetaData(nz, this.options.metadata[nz]);
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        return (new BM).withModel(this.toModel(zz, ...bz)).build()
      }
    }
    class YM {
      static async SerializeToMemoryAsync(zz) {
        const uz = new Array;
        let bz = 0;
        for (var Ez = arguments.length, nz = new Array(Ez > 1 ? Ez - 1 : 0), iz = 1; iz < Ez; iz++) nz[iz - 1] = arguments[iz];
        if (await zz.serializeAsync((function(zz, Ez, nz) {
            uz.push(Ez), bz += Ez.length
          }), ...nz), !bz) return;
        const lz = new Uint8Array(bz);
        let Mz = 0;
        for (const tz of uz) lz.set(tz, Mz), Mz += tz.length;
        return lz
      }
    }
    class kM {}
    kM.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class zt {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = zz, this._to = uz, this._step = bz, this._i = zz
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
    class ut extends CM {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...ut.DefaultOptions,
          ...zz
        })
      }
      toModel(zz) {
        for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
        bz = bz.filter((zz => zz instanceof HE.d || zz instanceof Fz.c));
        const nz = new zt,
          iz = zz,
          lz = new Map,
          Mz = this.options.exportInstances ? [] : null;
        for (let tz = 0; tz < bz.length; tz++) {
          const zz = bz[tz];
          if (zz instanceof Fz.c) {
            Mz?.push(zz);
            continue
          }
          const uz = zz.name || `mesh${tz}`,
            Ez = zz.getWorldMatrix(),
            Hz = this._handleBabylonTo3mfMatrixTransformToRef(Ez, xM.Zero()),
            Oz = zz.hN;
          if (void 0 === Oz) continue;
          const pz = 1 == Oz.length;
          for (let bz = 0; bz < Oz.length; bz++) {
            const Ez = Oz[bz],
              Mz = this._extractSubMesh(zz, Ez);
            if (Mz) {
              const zz = pz ? `${uz}` : `${uz}_${bz}`,
                tz = new eM(nz.next()).withData(Mz).withName(zz).build();
              iz.withMesh(tz), iz.withBuild(tz.id, Hz), lz.set(Ez, tz)
            }
          }
        }
        if (Mz && Mz.length) {
          const zz = this._groupBy(Mz, (zz => zz.wEz));
          for (const [uz, bz] of Array.from(zz.entries()))
            if (bz && bz.length)
              for (let zz = 0; zz < bz.length; zz++) {
                const Ez = bz[zz].getWorldMatrix(),
                  nz = uz.hN;
                for (let zz = 0; zz < nz.length; zz++) {
                  const uz = nz[zz],
                    bz = lz.get(uz);
                  bz && iz.withBuild(bz.id, this._handleBabylonTo3mfMatrixTransformToRef(Ez, xM.Zero()))
                }
              }
        }
        return iz.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const zz = globalThis;
          return zz.fflate || await nz.Tools.LoadScriptAsync(kM.FFLATEUrl), zz.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(zz, uz) {
        const bz = zz.Nbz();
        if (!bz) return;
        const Ez = zz.getVerticesData(ut._PositionKind);
        if (!Ez) return;
        if (0 == uz.indexStart && uz.indexCount == bz.length) return {
          positions: Ez,
          indices: bz
        };
        const nz = uz.indexStart,
          iz = new Map,
          lz = [],
          Mz = new Uint32Array(uz.indexCount);
        for (let tz = 0; tz < uz.indexCount; tz++) {
          const zz = bz[nz + tz];
          let uz = iz.get(zz);
          if (void 0 === uz) {
            uz = iz.size, iz.set(zz, uz);
            const bz = 3 * zz;
            lz.push(Ez[bz], Ez[bz + 1], Ez[bz + 2])
          }
          Mz[tz] = uz
        }
        return {
          positions: new Float32Array(lz),
          indices: Mz
        }
      }
      _groupBy(zz, uz) {
        const bz = new Map;
        for (const Ez of zz) {
          const zz = uz(Ez),
            nz = bz.get(zz);
          nz ? nz.push(Ez) : bz.set(zz, [Ez])
        }
        return bz
      }
      _handleBabylonTo3mfMatrixTransformToRef(zz, uz) {
        const bz = zz.multiplyToRef(ut._R_BJS_TO_3MF, Uz.d.Zero()).m;
        return uz.values = [bz[0], bz[1], bz[2], bz[4], bz[5], bz[6], bz[8], bz[9], bz[10], bz[12], bz[13], bz[14]], uz
      }
    }
    ut.DefaultOptions = {
      unit: HM.meter,
      exportInstances: !1
    }, ut._PositionKind = "position", ut._R_BJS_TO_3MF = Uz.d.RotationX(Math.PI / 2).multiply(Uz.d.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);