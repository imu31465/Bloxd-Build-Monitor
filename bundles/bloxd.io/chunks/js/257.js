export const id = 257;
export const ids = [257, 262];
export const modules = {
  45036: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(44963),
      be = He(41111);
    let Me = !1;

    function Ke() {
      Me || (Me = !0, be.c.prototype._sphericalPolynomialTargetSize = 0, be.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(be.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = ye.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((ee => {
              this._texture._sphericalPolynomial = ee, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(ee) {
          this._texture && (this._texture._sphericalPolynomial = ee)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  38020: (ee, ie, He) => {
    He.d(ie, {
      Color3: () => ye.c,
      e: () => ye.g
    });
    var ye = He(38022);
    (0, ye.h)()
  },
  38581: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(38590);
    class be {
      static GetPlanes(ee) {
        const ie = [];
        for (let He = 0; He < 6; He++) ie.push(new ye.c(0, 0, 0, 0));
        return be.GetPlanesToRef(ee, ie), ie
      }
      static GetNearPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[2], ie.normal.y = He[7] + He[6], ie.normal.z = He[11] + He[10], ie.d = He[15] + He[14], ie.normalize()
      }
      static GetFarPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[2], ie.normal.y = He[7] - He[6], ie.normal.z = He[11] - He[10], ie.d = He[15] - He[14], ie.normalize()
      }
      static GetLeftPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[0], ie.normal.y = He[7] + He[4], ie.normal.z = He[11] + He[8], ie.d = He[15] + He[12], ie.normalize()
      }
      static GetRightPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[0], ie.normal.y = He[7] - He[4], ie.normal.z = He[11] - He[8], ie.d = He[15] - He[12], ie.normalize()
      }
      static GetTopPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[1], ie.normal.y = He[7] - He[5], ie.normal.z = He[11] - He[9], ie.d = He[15] - He[13], ie.normalize()
      }
      static GetBottomPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[1], ie.normal.y = He[7] + He[5], ie.normal.z = He[11] + He[9], ie.d = He[15] + He[13], ie.normalize()
      }
      static GetPlanesToRef(ee, ie) {
        be.GetNearPlaneToRef(ee, ie[0]), be.GetFarPlaneToRef(ee, ie[1]), be.GetLeftPlaneToRef(ee, ie[2]), be.GetRightPlaneToRef(ee, ie[3]), be.GetTopPlaneToRef(ee, ie[4]), be.GetBottomPlaneToRef(ee, ie[5])
      }
      static IsPointInFrustum(ee, ie) {
        for (let He = 0; He < 6; He++)
          if (ie[He].dotCoordinate(ee) < 0) return !1;
        return !0
      }
    }
  },
  38590: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    var ye = He(37917);
    class be {
      constructor(ee, ie, He, be) {
        this.normal = new ye.p(ee, ie, He), this.d = be
      }
      Qbe() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new be(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let ee = this.normal.getHashCode();
        return ee = 397 * ee ^ this.d, ee
      }
      normalize() {
        const ee = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ie = 0;
        return 0 !== ee && (ie = 1 / ee), this.normal.x *= ie, this.normal.y *= ie, this.normal.z *= ie, this.d *= ie, this
      }
      transform(ee) {
        const ie = be._TmpMatrix;
        ee.invertToRef(ie);
        const He = ie.m,
          ye = this.normal.x,
          Me = this.normal.y,
          Ke = this.normal.z,
          Ue = this.d,
          Fe = ye * He[0] + Me * He[1] + Ke * He[2] + Ue * He[3],
          Je = ye * He[4] + Me * He[5] + Ke * He[6] + Ue * He[7],
          oe = ye * He[8] + Me * He[9] + Ke * He[10] + Ue * He[11],
          Re = ye * He[12] + Me * He[13] + Ke * He[14] + Ue * He[15];
        return new be(Fe, Je, oe, Re)
      }
      dotCoordinate(ee) {
        return this.normal.x * ee.x + this.normal.y * ee.y + this.normal.z * ee.z + this.d
      }
      copyFromPoints(ee, ie, He) {
        const ye = ie.x - ee.x,
          be = ie.y - ee.y,
          Me = ie.z - ee.z,
          Ke = He.x - ee.x,
          Ue = He.y - ee.y,
          Fe = He.z - ee.z,
          Je = be * Fe - Me * Ue,
          oe = Me * Ke - ye * Fe,
          Re = ye * Ue - be * Ke,
          ke = Math.sqrt(Je * Je + oe * oe + Re * Re);
        let qe;
        return qe = 0 !== ke ? 1 / ke : 0, this.normal.x = Je * qe, this.normal.y = oe * qe, this.normal.z = Re * qe, this.d = -(this.normal.x * ee.x + this.normal.y * ee.y + this.normal.z * ee.z), this
      }
      isFrontFacingTo(ee, ie) {
        return ye.p.Dot(this.normal, ee) <= ie
      }
      signedDistanceTo(ee) {
        return ye.p.Dot(ee, this.normal) + this.d
      }
      static FromArray(ee) {
        return new be(ee[0], ee[1], ee[2], ee[3])
      }
      static FromPoints(ee, ie, He) {
        const ye = new be(0, 0, 0, 0);
        return ye.copyFromPoints(ee, ie, He), ye
      }
      static FromPositionAndNormal(ee, ie) {
        const He = new be(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(ee, ie, He)
      }
      static FromPositionAndNormalToRef(ee, ie, He) {
        return He.normal.jD(ie), He.normal.normalize(), He.d = -ee.dot(He.normal), He
      }
      static SignedDistanceToPlaneFromPositionAndNormal(ee, ie, He) {
        const be = -(ie.x * ee.x + ie.y * ee.y + ie.z * ee.z);
        return ye.p.Dot(He, ie) + be
      }
    }
    be._TmpMatrix = ye.b.Identity()
  },
  37913: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      Matrix: () => ye.b,
      Quaternion: () => ye.f,
      RegisterMathVector: () => ye.h,
      TmpVectors: () => ye.j,
      Vector2: () => ye.n,
      rf: () => ye.p,
      Vector4: () => ye.s
    });
    var ye = He(37917);
    (0, ye.h)()
  },
  38919: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    class ye {
      constructor(ee, ie, He, ye) {
        this.x = ee, this.y = ie, this.width = He, this.height = ye
      }
      toGlobal(ee, ie) {
        return new ye(this.x * ee, this.y * ie, this.width * ee, this.height * ie)
      }
      toGlobalToRef(ee, ie, He) {
        return He.x = this.x * ee, He.y = this.y * ie, He.width = this.width * ee, He.height = this.height * ie, this
      }
      clone() {
        return new ye(this.x, this.y, this.width, this.height)
      }
    }
  },
  44963: (ee, ie, He) => {
    He.d(ie, {
      b: () => Je
    });
    var ye = He(37917),
      be = He(37938),
      Me = He(41104),
      Ke = He(37920),
      Ue = He(38022);
    class Fe {
      constructor(ee, ie, He, ye) {
        this.name = ee, this.worldAxisForNormal = ie, this.worldAxisForFileX = He, this.worldAxisForFileY = ye
      }
    }
    class Je {
      static _NearestPow2Floor(ee) {
        return ee <= 1 ? 1 : 1 << Math.floor(Math.log2(ee))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(ee) {
        if (!ee.isCube) return null;
        ee.Xx()?.Nf().flushFramebuffer();
        const ie = ee.getSize().width,
          He = ee._sphericalPolynomialTargetSize,
          ye = He > 0 ? this._NearestPow2Floor(He) : 0,
          be = !ee.noMipmap && !0 === ee._texture?.generateMipMaps,
          Me = ye > 0 && ye < ie && be,
          Ke = Me ? Math.max(0, Math.round(Math.log2(ie / ye))) : 0,
          Ue = Me ? Math.max(1, Math.floor(ie / Math.pow(2, Ke))) : ie,
          Fe = ee.readPixels(0, Ke, void 0, !1),
          Je = ee.readPixels(1, Ke, void 0, !1);
        let oe, Re;
        ee.isRenderTarget ? (oe = ee.readPixels(3, Ke, void 0, !1), Re = ee.readPixels(2, Ke, void 0, !1)) : (oe = ee.readPixels(2, Ke, void 0, !1), Re = ee.readPixels(3, Ke, void 0, !1));
        const ke = ee.readPixels(4, Ke, void 0, !1),
          qe = ee.readPixels(5, Ke, void 0, !1),
          fe = ee.gammaSpace,
          Te = ye > 0 && ye < ie && !Me;
        return new Promise((ee => {
          Promise.all([Je, Fe, oe, Re, ke, qe]).then((He => {
            let [be, Me, Ke, Fe, Je, oe] = He, Re = Ue;
            if (Te) {
              const ee = 4;
              be = this._DownsampleFace(be, ie, ye, ee), Me = this._DownsampleFace(Me, ie, ye, ee), Ke = this._DownsampleFace(Ke, ie, ye, ee), Fe = this._DownsampleFace(Fe, ie, ye, ee), Je = this._DownsampleFace(Je, ie, ye, ee), oe = this._DownsampleFace(oe, ie, ye, ee), Re = ye
            }
            const ke = {
              size: Re,
              right: Me,
              left: be,
              up: Ke,
              down: Fe,
              front: Je,
              back: oe,
              format: 5,
              type: be instanceof Float32Array ? 1 : 0,
              gammaSpace: fe
            };
            ee(this.ConvertCubeMapToSphericalPolynomial(ke))
          }))
        }))
      }
      static _AreaElement(ee, ie) {
        return Math.atan2(ee * ie, Math.sqrt(ee * ee + ie * ie + 1))
      }
      static _DownsampleFace(ee, ie, He, ye) {
        const be = ee instanceof Float32Array ? ee : Float32Array.from(ee),
          Me = He * He * ye,
          Ke = new Float32Array(Me),
          Ue = ie / He,
          Fe = 1 / (Ue * Ue);
        for (let oe = 0; oe < He; oe++) {
          const ee = Math.floor(oe * Ue),
            Me = Math.floor((oe + 1) * Ue);
          for (let Je = 0; Je < He; Je++) {
            const Re = Math.floor(Je * Ue),
              ke = Math.floor((Je + 1) * Ue),
              qe = (oe * He + Je) * ye;
            for (let He = 0; He < ye; He++) {
              let Ue = 0;
              for (let Ke = ee; Ke < Me; Ke++)
                for (let ee = Re; ee < ke; ee++) Ue += be[(Ke * ie + ee) * ye + He];
              Ke[qe + He] = Ue * Fe
            }
          }
        }
        if (ee instanceof Float32Array) return Ke;
        const Je = new(0, ee.constructor)(Me);
        for (let oe = 0; oe < Me; oe++) Je[oe] = Ke[oe] + .5 | 0;
        return Je
      }
      static ConvertCubeMapToSphericalPolynomial(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const He = ie > 0 ? this._NearestPow2Floor(ie) : 0;
        if (He > 0 && ee.size > He) {
          const ie = 5 === ee.format ? 4 : 3,
            ye = ["right", "left", "up", "down", "front", "back"],
            be = {};
          for (const Me of ye) be[Me] = this._DownsampleFace(ee[Me], ee.size, He, ie);
          ee = {
            ...ee,
            ...be,
            size: He
          }
        }
        const ye = new Me.c;
        let Fe = 0;
        const Je = 2 / ee.size,
          oe = Je,
          Re = .5 * Je,
          ke = Re - 1;
        for (let Me = 0; Me < 6; Me++) {
          const ie = this._FileFaces[Me],
            He = ee[ie.name];
          let qe = ke;
          const fe = 5 === ee.format ? 4 : 3;
          for (let Me = 0; Me < ee.size; Me++) {
            let Te = ke;
            for (let oe = 0; oe < ee.size; oe++) {
              const ke = ie.worldAxisForFileX.scale(Te).add(ie.worldAxisForFileY.scale(qe)).add(ie.worldAxisForNormal);
              ke.normalize();
              const pe = this._AreaElement(Te - Re, qe - Re) - this._AreaElement(Te - Re, qe + Re) - this._AreaElement(Te + Re, qe - Re) + this._AreaElement(Te + Re, qe + Re);
              let Xe = He[Me * ee.size * fe + oe * fe + 0],
                ze = He[Me * ee.size * fe + oe * fe + 1],
                Be = He[Me * ee.size * fe + oe * fe + 2];
              isNaN(Xe) && (Xe = 0), isNaN(ze) && (ze = 0), isNaN(Be) && (Be = 0), 0 === ee.type && (Xe /= 255, ze /= 255, Be /= 255), ee.gammaSpace && (Xe = Math.pow((0, be.Clamp)(Xe), Ke.h), ze = Math.pow((0, be.Clamp)(ze), Ke.h), Be = Math.pow((0, be.Clamp)(Be), Ke.h));
              const Ee = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const ee = Math.max(Xe, ze, Be);
                if (ee > Ee) {
                  const ie = Ee / ee;
                  Xe *= ie, ze *= ie, Be *= ie
                }
              } else Xe = (0, be.Clamp)(Xe, 0, Ee), ze = (0, be.Clamp)(ze, 0, Ee), Be = (0, be.Clamp)(Be, 0, Ee);
              const ge = new Ue.c(Xe, ze, Be);
              ye.addLight(ke, ge, pe), Fe += pe, Te += Je
            }
            qe += oe
          }
        }
        const qe = 6 * (4 * Math.PI) / 6 / Fe;
        return ye.scaleInPlace(qe), ye.convertIncidentRadianceToIrradiance(), ye.convertIrradianceToLambertianRadiance(), Me.e.FromHarmonics(ye)
      }
    }
    Je._FileFaces = [new Fe("right", new ye.p(1, 0, 0), new ye.p(0, 0, -1), new ye.p(0, -1, 0)), new Fe("left", new ye.p(-1, 0, 0), new ye.p(0, 0, 1), new ye.p(0, -1, 0)), new Fe("up", new ye.p(0, 1, 0), new ye.p(1, 0, 0), new ye.p(0, 0, 1)), new Fe("down", new ye.p(0, -1, 0), new ye.p(1, 0, 0), new ye.p(0, 0, -1)), new Fe("front", new ye.p(0, 0, 1), new ye.p(1, 0, 0), new ye.p(0, -1, 0)), new Fe("back", new ye.p(0, 0, -1), new ye.p(-1, 0, 0), new ye.p(0, -1, 0))], Je.MAX_HDRI_VALUE = 4096, Je.PRESERVE_CLAMPED_COLORS = !1
  },
  44824: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye.i,
      i: () => ye.r
    });
    var ye = He(41159);
    (0, ye.u)()
  },
  38745: (ee, ie, He) => {
    function ye() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ee => {
        const ie = 16 * Math.random() | 0;
        return ("x" === ee ? ie : 3 & ie | 8).toString(16)
      }))
    }
    He.d(ie, {
      d: () => ye
    })
  },
  45011: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(44998),
      be = He(45015);
    class Me {
      static ExpandRGBDTexture(ee) {
        const ie = ee._texture;
        if (!ie || !ee.isRGBD) return;
        const be = ie.Nf(),
          Me = be.getCaps(),
          Ke = ie.isReady;
        let Ue = !1;
        Me.textureHalfFloatRender && Me.textureHalfFloatLinearFiltering ? (Ue = !0, ie.type = 2) : Me.textureFloatRender && Me.textureFloatLinearFiltering && (Ue = !0, ie.type = 1), Ue && (ie.isReady = !1, ie._isRGBD = !1, ie.invertY = !1);
        const Fe = async () => {
          const Me = be.isWebGPU,
            Ke = Me ? 1 : 0;
          ie.isReady = !1, Me ? await He.e(651).then((() => He(63934))) : await He.e(633).then((() => He(63943)));
          const Ue = new ye.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, be, !1, void 0, ie.type, void 0, null, !1, void 0, Ke);
          Ue.externalTextureSamplerBinding = !0;
          const Fe = be.createRenderTargetTexture(ie.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: ie.samplingMode,
            type: ie.type,
            format: 5
          });
          Ue.onEffectCreatedObservable.addOnce((He => {
            He.executeWhenCompiled((() => {
              Ue.onApply = ee => {
                ee._bindTexture("textureSampler", ie), ee.setFloat2("scale", 1, 1)
              }, ee.Xx()?.postProcessManager.directRender([Ue], Fe, !0), be.restoreDefaultFramebuffer(), be._releaseTexture(ie), Ue && Ue.dispose(), Fe._swapAndDie(ie), ie.isReady = !0
            }))
          }))
        };
        Ue && (Ke ? Fe() : ee.onLoadObservable.addOnce(Fe))
      }
      static async EncodeTextureToRGBD(ee, ie) {
        let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return ie.Nf().isWebGPU ? await He.e(652).then((() => He(63962))) : await He.e(634).then((() => He(63955))), await (0, be.d)("rgbdEncode", ee, ie, ye, 1, 5)
      }
    }
  },
  63809: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      AsyncLoop: () => ye.c,
      RegisterTools: () => ye.g,
      Tools: () => ye.h,
      className: () => ye.k
    });
    var ye = He(41203);
    (0, ye.g)()
  },
  45055: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    class ye {
      constructor(ee) {
        this._pendingActions = new Array, this._workerInfos = ee.map((ee => ({
          workerPromise: Promise.resolve(ee),
          idle: !0
        })))
      }
      dispose() {
        for (const ee of this._workerInfos) ee.workerPromise.then((ee => {
          ee.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(ee) {
        this._executeOnIdleWorker(ee) || this._pendingActions.push(ee)
      }
      _executeOnIdleWorker(ee) {
        for (const ie of this._workerInfos)
          if (ie.idle) return this._execute(ie, ee), !0;
        return !1
      }
      _execute(ee, ie) {
        ee.idle = !1, ee.workerPromise.then((He => {
          ie(He, (() => {
            const ie = this._pendingActions.shift();
            ie ? this._execute(ee, ie) : ee.idle = !0
          }))
        }))
      }
    }
    class be extends ye {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : be.DefaultOptions;
        super([]), this._maxWorkers = ee, this._createWorkerAsync = ie, this._options = He
      }
      push(ee) {
        if (!this._executeOnIdleWorker(ee))
          if (this._workerInfos.length < this._maxWorkers) {
            const ie = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(ie), this._execute(ie, ee)
          } else this._pendingActions.push(ee)
      }
      _execute(ee, ie) {
        ee.timeoutId && (clearTimeout(ee.timeoutId), delete ee.timeoutId), super._execute(ee, ((He, ye) => {
          ie(He, (() => {
            ye(), ee.idle && (ee.timeoutId = setTimeout((() => {
              ee.workerPromise.then((ee => {
                ee.terminate()
              }));
              const ie = this._workerInfos.indexOf(ee); - 1 !== ie && this._workerInfos.splice(ie, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    be.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  63844: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      AbstractThreeMfSerializer: () => IU,
      BVHExporter: () => wK,
      ContentTypeFileName: () => TU,
      DefaultXmlSerializerFormatOptions: () => SK,
      DefaultXmlSerializerNumberOptions: () => lK,
      EXT_lights_area: () => zb,
      EXT_mesh_gpu_instancing: () => uy,
      EXT_texture_avif: () => KK,
      EXT_texture_webp: () => HK,
      GLTF2Export: () => Ly,
      GLTFData: () => Je,
      GetXmlFieldMeta: () => LK,
      GetXmlName: () => CK,
      IsQualifiedName: () => DK,
      KHR_draco_mesh_compression: () => Qy,
      KHR_interactivity: () => Rb,
      KHR_lights_punctual: () => Ub,
      KHR_materials_anisotropy: () => Ob,
      KHR_materials_clearcoat: () => wb,
      KHR_materials_coat: () => ab,
      KHR_materials_diffuse_roughness: () => CM,
      KHR_materials_diffuse_transmission: () => ub,
      KHR_materials_dispersion: () => nb,
      KHR_materials_emissive_strength: () => hb,
      KHR_materials_fuzz: () => kM,
      KHR_materials_ior: () => Qb,
      KHR_materials_iridescence: () => yM,
      KHR_materials_openpbr: () => lM,
      KHR_materials_sheen: () => UM,
      KHR_materials_specular: () => pM,
      KHR_materials_transmission: () => EM,
      KHR_materials_unlit: () => tM,
      KHR_materials_volume: () => PM,
      KHR_materials_volume_scatter: () => aM,
      KHR_texture_basisu: () => rM,
      KHR_texture_transform: () => sM,
      Known3mfRelationshipTypes: () => pU,
      KnownI3mfContentType: () => oU,
      Matrix3d: () => OU,
      MatrixFormatter: () => dU,
      ModelFileName: () => qU,
      NumberFormatter: () => sK,
      OBJExport: () => Ke,
      Object3dDirName: () => kU,
      OpenXmlContentTypesNamespace: () => FU,
      OpenXmlRelationshipsNamespace: () => JU,
      RegisterEXT_lights_area: () => Eb,
      RegisterEXT_mesh_gpu_instancing: () => ly,
      RegisterEXT_texture_avif: () => FK,
      RegisterEXT_texture_webp: () => bK,
      RegisterKHR_draco_mesh_compression: () => ib,
      RegisterKHR_interactivity: () => qb,
      RegisterKHR_lights_punctual: () => Jb,
      RegisterKHR_materials_anisotropy: () => Wb,
      RegisterKHR_materials_clearcoat: () => Pb,
      RegisterKHR_materials_coat: () => xb,
      RegisterKHR_materials_diffuse_roughness: () => uM,
      RegisterKHR_materials_diffuse_transmission: () => lb,
      RegisterKHR_materials_dispersion: () => sb,
      RegisterKHR_materials_emissive_strength: () => Gb,
      RegisterKHR_materials_fuzz: () => fM,
      RegisterKHR_materials_ior: () => iM,
      RegisterKHR_materials_iridescence: () => MM,
      RegisterKHR_materials_openpbr: () => nM,
      RegisterKHR_materials_sheen: () => JM,
      RegisterKHR_materials_specular: () => zM,
      RegisterKHR_materials_transmission: () => OM,
      RegisterKHR_materials_unlit: () => wM,
      RegisterKHR_materials_volume: () => YM,
      RegisterKHR_materials_volume_scatter: () => xM,
      RegisterKHR_texture_basisu: () => eK,
      RegisterKHR_texture_transform: () => hM,
      RelationshipDirName: () => RU,
      RelationshipFileName: () => fU,
      ResolveFormatOptions: () => jK,
      ResolveNumberOptions: () => nK,
      STLExport: () => JK,
      ST_ObjectType: () => UU,
      ST_Unit: () => KU,
      StringXmlWriter: () => HU,
      ThreeDimModelNamespace: () => bU,
      ThreeMf: () => hU,
      ThreeMfBase: () => CU,
      ThreeMfBaseMaterials: () => LU,
      ThreeMfBuild: () => vU,
      ThreeMfComponent: () => xU,
      ThreeMfComponents: () => cU,
      ThreeMfComponentsBuilder: () => lU,
      ThreeMfContentType: () => zU,
      ThreeMfContentTypes: () => XU,
      ThreeMfDocument: () => gU,
      ThreeMfDocumentBuilder: () => sU,
      ThreeMfItem: () => uU,
      ThreeMfMaterialBuilder: () => nU,
      ThreeMfMesh: () => PU,
      ThreeMfMeshBuilder: () => SU,
      ThreeMfMeta: () => tU,
      ThreeMfMetadataGroup: () => ZU,
      ThreeMfModel: () => WU,
      ThreeMfModelBuilder: () => jU,
      ThreeMfObject: () => DU,
      ThreeMfObjectBuilder: () => mU,
      ThreeMfRelationship: () => EU,
      ThreeMfRelationships: () => BU,
      ThreeMfResources: () => wU,
      ThreeMfSerializer: () => rU,
      ThreeMfSerializerGlobalConfiguration: () => NU,
      ThreeMfTriangle: () => aU,
      ThreeMfTriangles: () => VU,
      ThreeMfVertex: () => YU,
      ThreeMfVertices: () => AU,
      ToQualifiedString: () => mK,
      TokenType: () => eU,
      TriangleSetsNamespace: () => MU,
      USDZExportAsync: () => tK,
      Utf8XmlWriterToBytes: () => yU,
      XmlAttr: () => cK,
      XmlBuilder: () => iU,
      XmlElem: () => xK,
      XmlIgnore: () => aK,
      XmlName: () => VK,
      XmlNameToParts: () => uK,
      XmlSerializer: () => rK,
      _ConvertToGLTFPBRMetallicRoughness: () => wH,
      _SolveMetallic: () => ZH,
      __IGLTFExporterExtension: () => Ue
    });
    var ye = He(37913),
      be = He(63809),
      Me = He(41414);
    class Ke {
      static OBJ(ee, ie, He, Ke) {
        const Ue = [];
        let Fe = 1,
          Je = 1;
        ie && (He || (He = "mat"), Ue.push("mtllib " + He + ".mtl"));
        for (let oe = 0; oe < ee.length; oe++) {
          const He = ee[oe],
            Re = He.name || `mesh${oe}}`;
          Ue.push(`o ${Re}`);
          let ke = null;
          if (Ke) {
            const ee = He.computeWorldMatrix(!0);
            ke = new ye.Matrix, ee.invertToRef(ke), He.bakeTransformIntoVertices(ee)
          }
          if (ie) {
            const ee = He.material;
            ee && Ue.push("usemtl " + ee.id)
          }
          const qe = He.geometry;
          if (!qe) {
            be.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const fe = qe.getVerticesData("position"),
            Te = qe.getVerticesData("normal"),
            pe = qe.getVerticesData("uv"),
            Xe = qe.eMe();
          let ze = 0,
            Be = 0;
          if (!fe || !Xe) {
            be.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const Ee = ee[0].Xx().useRightHandedSystem ? 1 : -1;
          for (let ee = 0; ee < fe.length; ee += 3) Ue.push("v " + fe[ee] * Ee + " " + fe[ee + 1] + " " + fe[ee + 2]), ze++;
          if (null != Te)
            for (let ee = 0; ee < Te.length; ee += 3) Ue.push("vn " + Te[ee] * Ee + " " + Te[ee + 1] + " " + Te[ee + 2]);
          if (null != pe)
            for (let ee = 0; ee < pe.length; ee += 2) Ue.push("vt " + pe[ee] + " " + pe[ee + 1]), Be++;
          const ge = ["", "", ""],
            Oe = (He.material || He.Xx().defaultMaterial)._getEffectiveOrientation(He),
            [de, We] = Oe === Me.e.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let ee = 0; ee < Xe.length; ee += 3) {
            const ie = [String(Xe[ee] + Fe), String(Xe[ee + de] + Fe), String(Xe[ee + We] + Fe)],
              He = [String(Xe[ee] + Je), String(Xe[ee + de] + Je), String(Xe[ee + We] + Je)],
              ye = ie,
              be = null != pe ? He : ge,
              Me = null != Te ? ie : ge;
            Ue.push("f " + ye[0] + "/" + be[0] + "/" + Me[0] + " " + ye[1] + "/" + be[1] + "/" + Me[1] + " " + ye[2] + "/" + be[2] + "/" + Me[2])
          }
          Ke && ke && He.bakeTransformIntoVertices(ke), Fe += ze, Je += Be
        }
        return Ue.join("\n")
      }
      static MTL(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const He = [],
          ye = ee.material;
        He.push("newmtl " + ie), He.push("  Ns " + ye.specularPower.toFixed(4)), He.push("  Ni 1.5000"), He.push("  d " + ye.alpha.toFixed(4)), He.push("  Tr 0.0000"), He.push("  Tf 1.0000 1.0000 1.0000"), He.push("  illum 2"), He.push("  Ka " + ye.ambientColor.r.toFixed(4) + " " + ye.ambientColor.g.toFixed(4) + " " + ye.ambientColor.b.toFixed(4)), He.push("  Kd " + ye.diffuseColor.r.toFixed(4) + " " + ye.diffuseColor.g.toFixed(4) + " " + ye.diffuseColor.b.toFixed(4)), He.push("  Ks " + ye.specularColor.r.toFixed(4) + " " + ye.specularColor.g.toFixed(4) + " " + ye.specularColor.b.toFixed(4)), He.push("  Ke " + ye.emissiveColor.r.toFixed(4) + " " + ye.emissiveColor.g.toFixed(4) + " " + ye.emissiveColor.b.toFixed(4));
        ye.ambientTexture && He.push("  map_Ka " + ye.ambientTexture.name), ye.diffuseTexture && He.push("  map_Kd " + ye.diffuseTexture.name), ye.specularTexture && He.push("  map_Ks " + ye.specularTexture.name), ye.bumpTexture && He.push("  map_bump -imfchan z " + ye.bumpTexture.name), ye.opacityTexture && He.push("  map_d " + ye.opacityTexture.name);
        return He.join("\n")
      }
    }
    var Ue = 0,
      Fe = He(44824);
    class Je {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const ee in this.files) {
          const ie = this.files[ee],
            He = new Blob([ie], {
              type: (0, Fe.e)(ee)
            });
          be.Tools.Download(He, ee)
        }
      }
    }
    var oe = He(42233),
      Re = He(42177),
      ke = He(44815),
      qe = He(42193),
      fe = He(40913),
      Te = He(37929),
      pe = He(38020),
      Xe = He(37938);
    const ze = Xe.HighestCommonFactor,
      Be = {
        ...Xe,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: ze
      };
    var Ee = He(45015),
      ge = He(42217),
      Oe = He(44783),
      de = He(44789),
      We = He(45032);
    (0, We.RegisterDumpTools)();
    var te = He(41113),
      Ze = He(41121),
      we = He(39467),
      De = He(41216),
      Pe = He(41593),
      Ae = He(45011);
    let Ye = 0;
    const Ve = (ee, ie, He, ye) => {
        if (!ee[He]) {
          const be = ee.useDelayedTextureLoading;
          ee.useDelayedTextureLoading = !1;
          const Me = ee._blockEntityCollection;
          ee._blockEntityCollection = !1;
          const Ke = Pe.e.CreateFromBase64String(ie, ye + Ye++, ee, !0, !1, Pe.e.BILINEAR_SAMPLINGMODE);
          ee._blockEntityCollection = Me;
          const Ue = ee.Nf().getLoadedTexturesCache(),
            Fe = Ue.indexOf(Ke.getInternalTexture()); - 1 !== Fe && Ue.splice(Fe, 1), Ke.isRGBD = !0, Ke.wrapU = Pe.e.CLAMP_ADDRESSMODE, Ke.wrapV = Pe.e.CLAMP_ADDRESSMODE, ee[He] = Ke, ee.useDelayedTextureLoading = be, Ae.e.ExpandRGBDTexture(Ke);
          const Je = ee.Nf().hf.add((() => {
            Ke.isRGBD = !0;
            const ie = ee.onBeforeRenderObservable.add((() => {
              Ke.isReady() && (ee.onBeforeRenderObservable.remove(ie), Ae.e.ExpandRGBDTexture(Ke))
            }))
          }));
          ee.Bx.add((() => {
            ee.Nf().hf.remove(Je)
          }))
        }
        return ee[He]
      },
      ae = ee => Ve(ee, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      ce = ee => Ve(ee, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      xe = ee => Ve(ee, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var Le = He(41199),
      Ce = He(37917),
      ve = He(41247),
      ue = He(41406),
      me = He(41490);
    class le extends ue.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let Se = (() => {
      var ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je;
      let oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be = me.b,
        Ee = [],
        ge = [],
        Oe = [],
        de = [],
        We = [],
        we = [],
        De = [],
        Pe = [],
        Ae = [],
        Ye = [],
        Ve = [],
        ae = [],
        ce = [],
        xe = [],
        Le = [],
        Ce = [],
        ve = [],
        ue = [];
      return ee = class extends Be {
        get useEnergyConservation() {
          return (0, te.c)(this, ie, "f")
        }
        set useEnergyConservation(ee) {
          (0, te.f)(this, ie, ee, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, te.c)(this, He, "f")
        }
        set useSmithVisibilityHeightCorrelated(ee) {
          (0, te.f)(this, He, ee, "f")
        }
        get useSphericalHarmonics() {
          return (0, te.c)(this, ye, "f")
        }
        set useSphericalHarmonics(ee) {
          (0, te.f)(this, ye, ee, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, te.c)(this, be, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(ee) {
          (0, te.f)(this, be, ee, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, te.c)(this, Me, "f")
        }
        set mixIblRadianceWithIrradiance(ee) {
          (0, te.f)(this, Me, ee, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, te.c)(this, Ke, "f")
        }
        set useLegacySpecularEnergyConservation(ee) {
          (0, te.f)(this, Ke, ee, "f")
        }
        get baseDiffuseModel() {
          return (0, te.c)(this, Ue, "f")
        }
        set baseDiffuseModel(ee) {
          (0, te.f)(this, Ue, ee, "f")
        }
        get dielectricSpecularModel() {
          return (0, te.c)(this, Fe, "f")
        }
        set dielectricSpecularModel(ee) {
          (0, te.f)(this, Fe, ee, "f")
        }
        get conductorSpecularModel() {
          return (0, te.c)(this, Je, "f")
        }
        set conductorSpecularModel(ee) {
          (0, te.f)(this, Je, ee, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(oe) {
          let Re = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(oe, "PBRBRDF", 90, new le, Re), this._useEnergyConservation = ee.DEFAULT_USE_ENERGY_CONSERVATION, ie.set(this, (0, te.l)(this, Ee, ee.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, te.l)(this, ge), ee.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), He.set(this, (0, te.l)(this, Oe, ee.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, te.l)(this, de), ee.DEFAULT_USE_SPHERICAL_HARMONICS), ye.set(this, (0, te.l)(this, We, ee.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, te.l)(this, we), ee.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), be.set(this, (0, te.l)(this, De, ee.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, te.l)(this, Pe), ee.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), Me.set(this, (0, te.l)(this, Ae, ee.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, te.l)(this, Ye), ee.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), Ke.set(this, (0, te.l)(this, Ve, ee.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, te.l)(this, ae), ee.DEFAULT_DIFFUSE_MODEL), Ue.set(this, (0, te.l)(this, ce, ee.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, te.l)(this, xe), ee.DEFAULT_DIELECTRIC_SPECULAR_MODEL), Fe.set(this, (0, te.l)(this, Le, ee.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, te.l)(this, Ce), ee.DEFAULT_CONDUCTOR_SPECULAR_MODEL), Je.set(this, (0, te.l)(this, ve, ee.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, te.l)(this, ue), this._internalMarkAllSubMeshesAsMiscDirty = oe._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(ee) {
          ee.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, ee.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, ee.SPHERICAL_HARMONICS = this._useSphericalHarmonics, ee.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, ee.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, ee.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, ee.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, ee.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, ee.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, ie = new WeakMap, He = new WeakMap, ye = new WeakMap, be = new WeakMap, Me = new WeakMap, Ke = new WeakMap, Ue = new WeakMap, Fe = new WeakMap, Je = new WeakMap, (() => {
        const ie = "function" === typeof Symbol && Symbol.metadata ? Object.create(Be[Symbol.metadata] ?? null) : void 0;
        oe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], Re = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], ke = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], qe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], fe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], Te = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], pe = [(0, Ze.R)("baseDiffuseModel"), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], Xe = [(0, Ze.R)("dielectricSpecularModel"), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], ze = [(0, Ze.R)("conductorSpecularModel"), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], (0, te.i)(ee, null, oe, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: ee => "useEnergyConservation" in ee,
            get: ee => ee.useEnergyConservation,
            set: (ee, ie) => {
              ee.useEnergyConservation = ie
            }
          },
          metadata: ie
        }, Ee, ge), (0, te.i)(ee, null, Re, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: ee => "useSmithVisibilityHeightCorrelated" in ee,
            get: ee => ee.useSmithVisibilityHeightCorrelated,
            set: (ee, ie) => {
              ee.useSmithVisibilityHeightCorrelated = ie
            }
          },
          metadata: ie
        }, Oe, de), (0, te.i)(ee, null, ke, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: ee => "useSphericalHarmonics" in ee,
            get: ee => ee.useSphericalHarmonics,
            set: (ee, ie) => {
              ee.useSphericalHarmonics = ie
            }
          },
          metadata: ie
        }, We, we), (0, te.i)(ee, null, qe, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: ee => "useSpecularGlossinessInputEnergyConservation" in ee,
            get: ee => ee.useSpecularGlossinessInputEnergyConservation,
            set: (ee, ie) => {
              ee.useSpecularGlossinessInputEnergyConservation = ie
            }
          },
          metadata: ie
        }, De, Pe), (0, te.i)(ee, null, fe, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: ee => "mixIblRadianceWithIrradiance" in ee,
            get: ee => ee.mixIblRadianceWithIrradiance,
            set: (ee, ie) => {
              ee.mixIblRadianceWithIrradiance = ie
            }
          },
          metadata: ie
        }, Ae, Ye), (0, te.i)(ee, null, Te, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: ee => "useLegacySpecularEnergyConservation" in ee,
            get: ee => ee.useLegacySpecularEnergyConservation,
            set: (ee, ie) => {
              ee.useLegacySpecularEnergyConservation = ie
            }
          },
          metadata: ie
        }, Ve, ae), (0, te.i)(ee, null, pe, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: ee => "baseDiffuseModel" in ee,
            get: ee => ee.baseDiffuseModel,
            set: (ee, ie) => {
              ee.baseDiffuseModel = ie
            }
          },
          metadata: ie
        }, ce, xe), (0, te.i)(ee, null, Xe, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: ee => "dielectricSpecularModel" in ee,
            get: ee => ee.dielectricSpecularModel,
            set: (ee, ie) => {
              ee.dielectricSpecularModel = ie
            }
          },
          metadata: ie
        }, Le, Ce), (0, te.i)(ee, null, ze, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: ee => "conductorSpecularModel" in ee,
            get: ee => ee.conductorSpecularModel,
            set: (ee, ie) => {
              ee.conductorSpecularModel = ie
            }
          },
          metadata: ie
        }, ve, ue), ie && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie
        })
      })(), ee.DEFAULT_USE_ENERGY_CONSERVATION = !0, ee.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, ee.DEFAULT_USE_SPHERICAL_HARMONICS = !0, ee.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, ee.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, ee.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, ee.DEFAULT_DIFFUSE_MODEL = 0, ee.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, ee.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, ee
    })();
    var ne = He(41391),
      je = He(38022),
      se = He(41400),
      Ie = He(41222),
      he = He(41472),
      Ne = He(41466),
      Ge = He(41481),
      re = He(41451);
    class Qe extends ue.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let ei = (() => {
      var ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je;
      let oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be, Ee, ge, Oe, de, We = me.b,
        we = [],
        De = [],
        Pe = [],
        Ae = [],
        Ye = [],
        Ve = [],
        ae = [],
        ce = [],
        xe = [],
        Le = [],
        Ce = [],
        ve = [],
        ue = [],
        le = [],
        Se = [],
        ne = [],
        se = [],
        Ie = [],
        he = [],
        Ge = [],
        ei = [],
        ii = [],
        Hi = [],
        yi = [],
        bi = [],
        Mi = [],
        Ki = [],
        Ui = [];
      return ee = class extends We {
        get isEnabled() {
          return (0, te.c)(this, ie, "f")
        }
        set isEnabled(ee) {
          (0, te.f)(this, ie, ee, "f")
        }
        get indexOfRefraction() {
          return (0, te.c)(this, He, "f")
        }
        set indexOfRefraction(ee) {
          (0, te.f)(this, He, ee, "f")
        }
        get texture() {
          return (0, te.c)(this, ye, "f")
        }
        set texture(ee) {
          (0, te.f)(this, ye, ee, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, te.c)(this, be, "f")
        }
        set useRoughnessFromMainTexture(ee) {
          (0, te.f)(this, be, ee, "f")
        }
        get textureRoughness() {
          return (0, te.c)(this, Me, "f")
        }
        set textureRoughness(ee) {
          (0, te.f)(this, Me, ee, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, te.c)(this, Ke, "f")
        }
        set remapF0OnInterfaceChange(ee) {
          (0, te.f)(this, Ke, ee, "f")
        }
        get bumpTexture() {
          return (0, te.c)(this, Ue, "f")
        }
        set bumpTexture(ee) {
          (0, te.f)(this, Ue, ee, "f")
        }
        get isTintEnabled() {
          return (0, te.c)(this, Fe, "f")
        }
        set isTintEnabled(ee) {
          (0, te.f)(this, Fe, ee, "f")
        }
        get tintTexture() {
          return (0, te.c)(this, Je, "f")
        }
        set tintTexture(ee) {
          (0, te.f)(this, Je, ee, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(oe) {
          let Re = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(oe, "PBRClearCoat", 100, new Qe, Re), this._isEnabled = !1, ie.set(this, (0, te.l)(this, we, !1)), this.intensity = ((0, te.l)(this, De), (0, te.l)(this, Pe, 1)), this.roughness = ((0, te.l)(this, Ae), (0, te.l)(this, Ye, 0)), this._indexOfRefraction = ((0, te.l)(this, Ve), ee._DefaultIndexOfRefraction), He.set(this, (0, te.l)(this, ae, ee._DefaultIndexOfRefraction)), this._texture = ((0, te.l)(this, ce), null), ye.set(this, (0, te.l)(this, xe, null)), this._useRoughnessFromMainTexture = ((0, te.l)(this, Le), !0), be.set(this, (0, te.l)(this, Ce, !0)), this._textureRoughness = ((0, te.l)(this, ve), null), Me.set(this, (0, te.l)(this, ue, null)), this._remapF0OnInterfaceChange = ((0, te.l)(this, le), !0), Ke.set(this, (0, te.l)(this, Se, !0)), this._bumpTexture = ((0, te.l)(this, ne), null), Ue.set(this, (0, te.l)(this, se, null)), this._isTintEnabled = ((0, te.l)(this, Ie), !1), Fe.set(this, (0, te.l)(this, he, !1)), this.tintColor = ((0, te.l)(this, Ge), (0, te.l)(this, ei, je.c.White())), this.tintColorAtDistance = ((0, te.l)(this, ii), (0, te.l)(this, Hi, 1)), this.tintThickness = ((0, te.l)(this, yi), (0, te.l)(this, bi, 1)), this._tintTexture = ((0, te.l)(this, Mi), null), Je.set(this, (0, te.l)(this, Ki, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, te.l)(this, Ui), this._internalMarkAllSubMeshesAsTexturesDirty = oe._dirtyCallbacks[1]
        }
        isReadyForSubMesh(ee, ie, He) {
          if (!this._isEnabled) return !0;
          const ye = this._material._disableBumpMap;
          if (ee._areTexturesDirty && ie.texturesEnabled) {
            if (this._texture && Ne.c.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Ne.c.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (He.getCaps().standardDerivatives && this._bumpTexture && Ne.c.ClearCoatBumpTextureEnabled && !ye && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && Ne.c.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(ie, He) {
          this._isEnabled ? (ie.CLEARCOAT = !0, ie.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, ie.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, ie._areTexturesDirty && He.texturesEnabled && (this._texture && Ne.c.ClearCoatTextureEnabled ? (0, re.Z)(this._texture, ie, "CLEARCOAT_TEXTURE") : ie.CLEARCOAT_TEXTURE = !1, this._textureRoughness && Ne.c.ClearCoatTextureEnabled ? (0, re.Z)(this._textureRoughness, ie, "CLEARCOAT_TEXTURE_ROUGHNESS") : ie.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && Ne.c.ClearCoatBumpTextureEnabled ? (0, re.Z)(this._bumpTexture, ie, "CLEARCOAT_BUMP") : ie.CLEARCOAT_BUMP = !1, ie.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === ee._DefaultIndexOfRefraction, this._isTintEnabled ? (ie.CLEARCOAT_TINT = !0, this._tintTexture && Ne.c.ClearCoatTintTextureEnabled ? ((0, re.Z)(this._tintTexture, ie, "CLEARCOAT_TINT_TEXTURE"), ie.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : ie.CLEARCOAT_TINT_TEXTURE = !1) : (ie.CLEARCOAT_TINT = !1, ie.CLEARCOAT_TINT_TEXTURE = !1))) : (ie.CLEARCOAT = !1, ie.CLEARCOAT_TEXTURE = !1, ie.CLEARCOAT_TEXTURE_ROUGHNESS = !1, ie.CLEARCOAT_BUMP = !1, ie.CLEARCOAT_TINT = !1, ie.CLEARCOAT_TINT_TEXTURE = !1, ie.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, ie.CLEARCOAT_DEFAULTIOR = !1, ie.CLEARCOAT_TEXTUREDIRECTUV = 0, ie.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, ie.CLEARCOAT_BUMPDIRECTUV = 0, ie.CLEARCOAT_REMAP_F0 = !1, ie.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, ie.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(ee, ie, He, ye) {
          if (!this._isEnabled) return;
          const be = ye.materialDefines,
            Me = this._material.isFrozen,
            Ke = this._material._disableBumpMap,
            Ue = this._material._invertNormalMapX,
            Fe = this._material._invertNormalMapY;
          if (!ee.useUbo || !Me || !ee.isSync) {
            (this._texture || this._textureRoughness) && Ne.c.ClearCoatTextureEnabled && (ee.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, re.A)(this._texture, ee, "clearCoat"), this._textureRoughness && !be.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, re.A)(this._textureRoughness, ee, "clearCoatRoughness")), this._bumpTexture && He.getCaps().standardDerivatives && Ne.c.ClearCoatTextureEnabled && !Ke && (ee.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, re.A)(this._bumpTexture, ee, "clearCoatBump"), ie._mirroredCameraPosition ? ee.updateFloat2("vClearCoatTangentSpaceParams", Ue ? 1 : -1, Fe ? 1 : -1) : ee.updateFloat2("vClearCoatTangentSpaceParams", Ue ? -1 : 1, Fe ? -1 : 1)), this._tintTexture && Ne.c.ClearCoatTintTextureEnabled && (ee.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, re.A)(this._tintTexture, ee, "clearCoatTint")), ee.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const ye = 1 - this._indexOfRefraction,
              Me = 1 + this._indexOfRefraction,
              Je = Math.pow(-ye / Me, 2),
              oe = 1 / this._indexOfRefraction;
            ee.updateFloat4("vClearCoatRefractionParams", Je, oe, ye, Me), this._isTintEnabled && (ee.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), ee.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          ie.texturesEnabled && (this._texture && Ne.c.ClearCoatTextureEnabled && ee.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !be.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && Ne.c.ClearCoatTextureEnabled && ee.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && He.getCaps().standardDerivatives && Ne.c.ClearCoatBumpTextureEnabled && !Ke && ee.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && Ne.c.ClearCoatTintTextureEnabled && ee.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(ee) {
          return this._texture === ee || (this._textureRoughness === ee || (this._bumpTexture === ee || this._tintTexture === ee))
        }
        getActiveTextures(ee) {
          this._texture && ee.push(this._texture), this._textureRoughness && ee.push(this._textureRoughness), this._bumpTexture && ee.push(this._bumpTexture), this._tintTexture && ee.push(this._tintTexture)
        }
        getAnimatables(ee) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && ee.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && ee.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && ee.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && ee.push(this._tintTexture)
        }
        dispose(ee) {
          ee && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(ee, ie, He) {
          return ee.CLEARCOAT_BUMP && ie.addFallback(He++, "CLEARCOAT_BUMP"), ee.CLEARCOAT_TINT && ie.addFallback(He++, "CLEARCOAT_TINT"), ee.CLEARCOAT && ie.addFallback(He++, "CLEARCOAT"), He
        }
        getSamplers(ee) {
          ee.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, ie = new WeakMap, He = new WeakMap, ye = new WeakMap, be = new WeakMap, Me = new WeakMap, Ke = new WeakMap, Ue = new WeakMap, Fe = new WeakMap, Je = new WeakMap, (() => {
        const ie = "function" === typeof Symbol && Symbol.metadata ? Object.create(We[Symbol.metadata] ?? null) : void 0;
        oe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Re = [(0, Ze.R)()], ke = [(0, Ze.R)()], qe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], fe = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Te = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], pe = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Xe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], ze = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Be = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Ee = [(0, Ze.p)()], ge = [(0, Ze.R)()], Oe = [(0, Ze.R)()], de = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], (0, te.i)(ee, null, oe, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "isEnabled" in ee,
            get: ee => ee.isEnabled,
            set: (ee, ie) => {
              ee.isEnabled = ie
            }
          },
          metadata: ie
        }, we, De), (0, te.i)(ee, null, qe, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: ee => "indexOfRefraction" in ee,
            get: ee => ee.indexOfRefraction,
            set: (ee, ie) => {
              ee.indexOfRefraction = ie
            }
          },
          metadata: ie
        }, ae, ce), (0, te.i)(ee, null, fe, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: ee => "texture" in ee,
            get: ee => ee.texture,
            set: (ee, ie) => {
              ee.texture = ie
            }
          },
          metadata: ie
        }, xe, Le), (0, te.i)(ee, null, Te, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "useRoughnessFromMainTexture" in ee,
            get: ee => ee.useRoughnessFromMainTexture,
            set: (ee, ie) => {
              ee.useRoughnessFromMainTexture = ie
            }
          },
          metadata: ie
        }, Ce, ve), (0, te.i)(ee, null, pe, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: ee => "textureRoughness" in ee,
            get: ee => ee.textureRoughness,
            set: (ee, ie) => {
              ee.textureRoughness = ie
            }
          },
          metadata: ie
        }, ue, le), (0, te.i)(ee, null, Xe, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: ee => "remapF0OnInterfaceChange" in ee,
            get: ee => ee.remapF0OnInterfaceChange,
            set: (ee, ie) => {
              ee.remapF0OnInterfaceChange = ie
            }
          },
          metadata: ie
        }, Se, ne), (0, te.i)(ee, null, ze, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "bumpTexture" in ee,
            get: ee => ee.bumpTexture,
            set: (ee, ie) => {
              ee.bumpTexture = ie
            }
          },
          metadata: ie
        }, se, Ie), (0, te.i)(ee, null, Be, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "isTintEnabled" in ee,
            get: ee => ee.isTintEnabled,
            set: (ee, ie) => {
              ee.isTintEnabled = ie
            }
          },
          metadata: ie
        }, he, Ge), (0, te.i)(ee, null, de, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "tintTexture" in ee,
            get: ee => ee.tintTexture,
            set: (ee, ie) => {
              ee.tintTexture = ie
            }
          },
          metadata: ie
        }, Ki, Ui), (0, te.i)(null, null, Re, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "intensity" in ee,
            get: ee => ee.intensity,
            set: (ee, ie) => {
              ee.intensity = ie
            }
          },
          metadata: ie
        }, Pe, Ae), (0, te.i)(null, null, ke, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: ee => "roughness" in ee,
            get: ee => ee.roughness,
            set: (ee, ie) => {
              ee.roughness = ie
            }
          },
          metadata: ie
        }, Ye, Ve), (0, te.i)(null, null, Ee, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: ee => "tintColor" in ee,
            get: ee => ee.tintColor,
            set: (ee, ie) => {
              ee.tintColor = ie
            }
          },
          metadata: ie
        }, ei, ii), (0, te.i)(null, null, ge, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: ee => "tintColorAtDistance" in ee,
            get: ee => ee.tintColorAtDistance,
            set: (ee, ie) => {
              ee.tintColorAtDistance = ie
            }
          },
          metadata: ie
        }, Hi, yi), (0, te.i)(null, null, Oe, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: ee => "tintThickness" in ee,
            get: ee => ee.tintThickness,
            set: (ee, ie) => {
              ee.tintThickness = ie
            }
          },
          metadata: ie
        }, bi, Mi), ie && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie
        })
      })(), ee._DefaultIndexOfRefraction = 1.5, ee
    })();
    class ii extends ue.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let Hi = (() => {
      var ee, ie, He, ye;
      let be, Me, Ke, Ue, Fe, Je, oe, Re = me.b,
        ke = [],
        qe = [],
        fe = [],
        Te = [],
        pe = [],
        Xe = [],
        ze = [],
        Be = [],
        Ee = [],
        ge = [],
        Oe = [],
        de = [],
        We = [],
        we = [];
      return ee = class extends Re {
        get isEnabled() {
          return (0, te.c)(this, ie, "f")
        }
        set isEnabled(ee) {
          (0, te.f)(this, ie, ee, "f")
        }
        get texture() {
          return (0, te.c)(this, He, "f")
        }
        set texture(ee) {
          (0, te.f)(this, He, ee, "f")
        }
        get thicknessTexture() {
          return (0, te.c)(this, ye, "f")
        }
        set thicknessTexture(ee) {
          (0, te.f)(this, ye, ee, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(be) {
          let Me = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(be, "PBRIridescence", 110, new ii, Me), this._isEnabled = !1, ie.set(this, (0, te.l)(this, ke, !1)), this.intensity = ((0, te.l)(this, qe), (0, te.l)(this, fe, 1)), this.minimumThickness = ((0, te.l)(this, Te), (0, te.l)(this, pe, ee._DefaultMinimumThickness)), this.maximumThickness = ((0, te.l)(this, Xe), (0, te.l)(this, ze, ee._DefaultMaximumThickness)), this.indexOfRefraction = ((0, te.l)(this, Be), (0, te.l)(this, Ee, ee._DefaultIndexOfRefraction)), this._texture = ((0, te.l)(this, ge), null), He.set(this, (0, te.l)(this, Oe, null)), this._thicknessTexture = ((0, te.l)(this, de), null), ye.set(this, (0, te.l)(this, We, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, te.l)(this, we), this._internalMarkAllSubMeshesAsTexturesDirty = be._dirtyCallbacks[1]
        }
        isReadyForSubMesh(ee, ie) {
          if (!this._isEnabled) return !0;
          if (ee._areTexturesDirty && ie.texturesEnabled) {
            if (this._texture && Ne.c.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && Ne.c.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(ee, ie) {
          this._isEnabled ? (ee.IRIDESCENCE = !0, ee._areTexturesDirty && ie.texturesEnabled && (this._texture && Ne.c.IridescenceTextureEnabled ? (0, re.Z)(this._texture, ee, "IRIDESCENCE_TEXTURE") : ee.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && Ne.c.IridescenceTextureEnabled ? (0, re.Z)(this._thicknessTexture, ee, "IRIDESCENCE_THICKNESS_TEXTURE") : ee.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (ee.IRIDESCENCE = !1, ee.IRIDESCENCE_TEXTURE = !1, ee.IRIDESCENCE_THICKNESS_TEXTURE = !1, ee.IRIDESCENCE_TEXTUREDIRECTUV = 0, ee.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(ee, ie) {
          if (!this._isEnabled) return;
          const He = this._material.isFrozen;
          ee.useUbo && He && ee.isSync || ((this._texture || this._thicknessTexture) && Ne.c.IridescenceTextureEnabled && (ee.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, re.A)(this._texture, ee, "iridescence"), this._thicknessTexture && (0, re.A)(this._thicknessTexture, ee, "iridescenceThickness")), ee.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), ie.texturesEnabled && (this._texture && Ne.c.IridescenceTextureEnabled && ee.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && Ne.c.IridescenceTextureEnabled && ee.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(ee) {
          return this._texture === ee || this._thicknessTexture === ee
        }
        getActiveTextures(ee) {
          this._texture && ee.push(this._texture), this._thicknessTexture && ee.push(this._thicknessTexture)
        }
        getAnimatables(ee) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && ee.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && ee.push(this._thicknessTexture)
        }
        dispose(ee) {
          ee && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(ee, ie, He) {
          return ee.IRIDESCENCE && ie.addFallback(He++, "IRIDESCENCE"), He
        }
        getSamplers(ee) {
          ee.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, ie = new WeakMap, He = new WeakMap, ye = new WeakMap, (() => {
        const ie = "function" === typeof Symbol && Symbol.metadata ? Object.create(Re[Symbol.metadata] ?? null) : void 0;
        be = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Me = [(0, Ze.R)()], Ke = [(0, Ze.R)()], Ue = [(0, Ze.R)()], Fe = [(0, Ze.R)()], Je = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], oe = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], (0, te.i)(ee, null, be, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "isEnabled" in ee,
            get: ee => ee.isEnabled,
            set: (ee, ie) => {
              ee.isEnabled = ie
            }
          },
          metadata: ie
        }, ke, qe), (0, te.i)(ee, null, Je, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: ee => "texture" in ee,
            get: ee => ee.texture,
            set: (ee, ie) => {
              ee.texture = ie
            }
          },
          metadata: ie
        }, Oe, de), (0, te.i)(ee, null, oe, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "thicknessTexture" in ee,
            get: ee => ee.thicknessTexture,
            set: (ee, ie) => {
              ee.thicknessTexture = ie
            }
          },
          metadata: ie
        }, We, we), (0, te.i)(null, null, Me, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "intensity" in ee,
            get: ee => ee.intensity,
            set: (ee, ie) => {
              ee.intensity = ie
            }
          },
          metadata: ie
        }, fe, Te), (0, te.i)(null, null, Ke, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: ee => "minimumThickness" in ee,
            get: ee => ee.minimumThickness,
            set: (ee, ie) => {
              ee.minimumThickness = ie
            }
          },
          metadata: ie
        }, pe, Xe), (0, te.i)(null, null, Ue, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: ee => "maximumThickness" in ee,
            get: ee => ee.maximumThickness,
            set: (ee, ie) => {
              ee.maximumThickness = ie
            }
          },
          metadata: ie
        }, ze, Be), (0, te.i)(null, null, Fe, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: ee => "indexOfRefraction" in ee,
            get: ee => ee.indexOfRefraction,
            set: (ee, ie) => {
              ee.indexOfRefraction = ie
            }
          },
          metadata: ie
        }, Ee, ge), ie && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie
        })
      })(), ee._DefaultMinimumThickness = 100, ee._DefaultMaximumThickness = 400, ee._DefaultIndexOfRefraction = 1.3, ee
    })();
    class yi extends ue.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let bi = (() => {
      var ee, ie, He, ye;
      let be, Me, Ke, Ue, Fe, Je = me.b,
        oe = [],
        Re = [],
        ke = [],
        qe = [],
        fe = [],
        Te = [],
        pe = [],
        Xe = [],
        ze = [],
        Be = [];
      return ee = class extends Je {
        get isEnabled() {
          return (0, te.c)(this, ie, "f")
        }
        set isEnabled(ee) {
          (0, te.f)(this, ie, ee, "f")
        }
        set angle(ee) {
          this.direction.x = Math.cos(ee), this.direction.y = Math.sin(ee)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, te.c)(this, He, "f")
        }
        set texture(ee) {
          (0, te.f)(this, He, ee, "f")
        }
        get legacy() {
          return (0, te.c)(this, ye, "f")
        }
        set legacy(ee) {
          (0, te.f)(this, ye, ee, "f")
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
        constructor(ee) {
          let be = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(ee, "PBRAnisotropic", 110, new yi, be), this._isEnabled = !1, ie.set(this, (0, te.l)(this, oe, !1)), this.intensity = ((0, te.l)(this, Re), (0, te.l)(this, ke, 1)), this.direction = ((0, te.l)(this, qe), (0, te.l)(this, fe, new Ce.n(1, 0))), this._texture = ((0, te.l)(this, Te), null), He.set(this, (0, te.l)(this, pe, null)), this._legacy = ((0, te.l)(this, Xe), !1), ye.set(this, (0, te.l)(this, ze, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, te.l)(this, Be), this._internalMarkAllSubMeshesAsTexturesDirty = ee._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = ee._dirtyCallbacks[16]
        }
        isReadyForSubMesh(ee, ie) {
          return !this._isEnabled || !(ee._areTexturesDirty && ie.texturesEnabled && this._texture && Ne.c.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(ee, ie, He) {
          this._isEnabled ? (ee.ANISOTROPIC = this._isEnabled, this._isEnabled && !He.isVerticesDataPresent(ve.h.TangentKind) && (ee._needUVs = !0, ee.MAINUV1 = !0), ee._areTexturesDirty && ie.texturesEnabled && (this._texture && Ne.c.AnisotropicTextureEnabled ? (0, re.Z)(this._texture, ee, "ANISOTROPIC_TEXTURE") : ee.ANISOTROPIC_TEXTURE = !1), ee._areMiscDirty && (ee.ANISOTROPIC_LEGACY = this._legacy)) : (ee.ANISOTROPIC = !1, ee.ANISOTROPIC_TEXTURE = !1, ee.ANISOTROPIC_TEXTUREDIRECTUV = 0, ee.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(ee, ie) {
          if (!this._isEnabled) return;
          const He = this._material.isFrozen;
          ee.useUbo && He && ee.isSync || (this._texture && Ne.c.AnisotropicTextureEnabled && (ee.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, re.A)(this._texture, ee, "anisotropy")), ee.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), ie.texturesEnabled && this._texture && Ne.c.AnisotropicTextureEnabled && ee.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(ee) {
          return this._texture === ee
        }
        getActiveTextures(ee) {
          this._texture && ee.push(this._texture)
        }
        getAnimatables(ee) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && ee.push(this._texture)
        }
        dispose(ee) {
          ee && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(ee, ie, He) {
          return ee.ANISOTROPIC && ie.addFallback(He++, "ANISOTROPIC"), He
        }
        getSamplers(ee) {
          ee.push("anisotropySampler")
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
        parse(ee, ie, He) {
          super.parse(ee, ie, He), void 0 === ee.legacy && (this.legacy = !0)
        }
      }, ie = new WeakMap, He = new WeakMap, ye = new WeakMap, (() => {
        const ie = "function" === typeof Symbol && Symbol.metadata ? Object.create(Je[Symbol.metadata] ?? null) : void 0;
        be = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Me = [(0, Ze.R)()], Ke = [(0, Ze.L)()], Ue = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Fe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], (0, te.i)(ee, null, be, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "isEnabled" in ee,
            get: ee => ee.isEnabled,
            set: (ee, ie) => {
              ee.isEnabled = ie
            }
          },
          metadata: ie
        }, oe, Re), (0, te.i)(ee, null, Ue, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: ee => "texture" in ee,
            get: ee => ee.texture,
            set: (ee, ie) => {
              ee.texture = ie
            }
          },
          metadata: ie
        }, pe, Xe), (0, te.i)(ee, null, Fe, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: ee => "legacy" in ee,
            get: ee => ee.legacy,
            set: (ee, ie) => {
              ee.legacy = ie
            }
          },
          metadata: ie
        }, ze, Be), (0, te.i)(null, null, Me, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "intensity" in ee,
            get: ee => ee.intensity,
            set: (ee, ie) => {
              ee.intensity = ie
            }
          },
          metadata: ie
        }, ke, qe), (0, te.i)(null, null, Ke, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: ee => "direction" in ee,
            get: ee => ee.direction,
            set: (ee, ie) => {
              ee.direction = ie
            }
          },
          metadata: ie
        }, fe, Te), ie && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie
        })
      })(), ee
    })();
    class Mi extends ue.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Ki = (() => {
      var ee, ie, He, ye, be, Me, Ke, Ue;
      let Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe = me.b,
        ze = [],
        Be = [],
        Ee = [],
        ge = [],
        Oe = [],
        de = [],
        We = [],
        we = [],
        De = [],
        Pe = [],
        Ae = [],
        Ye = [],
        Ve = [],
        ae = [],
        ce = [],
        xe = [],
        Le = [],
        Ce = [];
      return ee = class extends Xe {
        get isEnabled() {
          return (0, te.c)(this, ie, "f")
        }
        set isEnabled(ee) {
          (0, te.f)(this, ie, ee, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, te.c)(this, He, "f")
        }
        set linkSheenWithAlbedo(ee) {
          (0, te.f)(this, He, ee, "f")
        }
        get texture() {
          return (0, te.c)(this, ye, "f")
        }
        set texture(ee) {
          (0, te.f)(this, ye, ee, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, te.c)(this, be, "f")
        }
        set useRoughnessFromMainTexture(ee) {
          (0, te.f)(this, be, ee, "f")
        }
        get roughness() {
          return (0, te.c)(this, Me, "f")
        }
        set roughness(ee) {
          (0, te.f)(this, Me, ee, "f")
        }
        get textureRoughness() {
          return (0, te.c)(this, Ke, "f")
        }
        set textureRoughness(ee) {
          (0, te.f)(this, Ke, ee, "f")
        }
        get albedoScaling() {
          return (0, te.c)(this, Ue, "f")
        }
        set albedoScaling(ee) {
          (0, te.f)(this, Ue, ee, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(ee) {
          let Fe = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(ee, "Sheen", 120, new Mi, Fe), this._isEnabled = !1, ie.set(this, (0, te.l)(this, ze, !1)), this._linkSheenWithAlbedo = ((0, te.l)(this, Be), !1), He.set(this, (0, te.l)(this, Ee, !1)), this.intensity = ((0, te.l)(this, ge), (0, te.l)(this, Oe, 1)), this.color = ((0, te.l)(this, de), (0, te.l)(this, We, je.c.White())), this._texture = ((0, te.l)(this, we), null), ye.set(this, (0, te.l)(this, De, null)), this._useRoughnessFromMainTexture = ((0, te.l)(this, Pe), !0), be.set(this, (0, te.l)(this, Ae, !0)), this._roughness = ((0, te.l)(this, Ye), null), Me.set(this, (0, te.l)(this, Ve, null)), this._textureRoughness = ((0, te.l)(this, ae), null), Ke.set(this, (0, te.l)(this, ce, null)), this._albedoScaling = ((0, te.l)(this, xe), !1), Ue.set(this, (0, te.l)(this, Le, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, te.l)(this, Ce), this._internalMarkAllSubMeshesAsTexturesDirty = ee._dirtyCallbacks[1]
        }
        isReadyForSubMesh(ee, ie) {
          if (!this._isEnabled) return !0;
          if (ee._areTexturesDirty && ie.texturesEnabled) {
            if (this._texture && Ne.c.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Ne.c.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(ee, ie) {
          this._isEnabled ? (ee.SHEEN = !0, ee.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, ee.SHEEN_ROUGHNESS = null !== this._roughness, ee.SHEEN_ALBEDOSCALING = this._albedoScaling, ee.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, ee._areTexturesDirty && ie.texturesEnabled && (this._texture && Ne.c.SheenTextureEnabled ? ((0, re.Z)(this._texture, ee, "SHEEN_TEXTURE"), ee.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : ee.SHEEN_TEXTURE = !1, this._textureRoughness && Ne.c.SheenTextureEnabled ? (0, re.Z)(this._textureRoughness, ee, "SHEEN_TEXTURE_ROUGHNESS") : ee.SHEEN_TEXTURE_ROUGHNESS = !1)) : (ee.SHEEN = !1, ee.SHEEN_TEXTURE = !1, ee.SHEEN_TEXTURE_ROUGHNESS = !1, ee.SHEEN_LINKWITHALBEDO = !1, ee.SHEEN_ROUGHNESS = !1, ee.SHEEN_ALBEDOSCALING = !1, ee.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, ee.SHEEN_GAMMATEXTURE = !1, ee.SHEEN_TEXTUREDIRECTUV = 0, ee.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(ee, ie, He, ye) {
          if (!this._isEnabled) return;
          const be = ye.materialDefines,
            Me = this._material.isFrozen;
          ee.useUbo && Me && ee.isSync || ((this._texture || this._textureRoughness) && Ne.c.SheenTextureEnabled && (ee.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, re.A)(this._texture, ee, "sheen"), this._textureRoughness && !be.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, re.A)(this._textureRoughness, ee, "sheenRoughness")), ee.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && ee.updateFloat("vSheenRoughness", this._roughness)), ie.texturesEnabled && (this._texture && Ne.c.SheenTextureEnabled && ee.setTexture("sheenSampler", this._texture), this._textureRoughness && !be.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && Ne.c.SheenTextureEnabled && ee.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(ee) {
          return this._texture === ee || this._textureRoughness === ee
        }
        getActiveTextures(ee) {
          this._texture && ee.push(this._texture), this._textureRoughness && ee.push(this._textureRoughness)
        }
        getAnimatables(ee) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && ee.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && ee.push(this._textureRoughness)
        }
        dispose(ee) {
          ee && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(ee, ie, He) {
          return ee.SHEEN && ie.addFallback(He++, "SHEEN"), He
        }
        getSamplers(ee) {
          ee.push("sheenSampler", "sheenRoughnessSampler")
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
      }, ie = new WeakMap, He = new WeakMap, ye = new WeakMap, be = new WeakMap, Me = new WeakMap, Ke = new WeakMap, Ue = new WeakMap, (() => {
        const ie = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xe[Symbol.metadata] ?? null) : void 0;
        Fe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Je = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], oe = [(0, Ze.R)()], Re = [(0, Ze.p)()], ke = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], qe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], fe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Te = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], pe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], (0, te.i)(ee, null, Fe, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "isEnabled" in ee,
            get: ee => ee.isEnabled,
            set: (ee, ie) => {
              ee.isEnabled = ie
            }
          },
          metadata: ie
        }, ze, Be), (0, te.i)(ee, null, Je, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: ee => "linkSheenWithAlbedo" in ee,
            get: ee => ee.linkSheenWithAlbedo,
            set: (ee, ie) => {
              ee.linkSheenWithAlbedo = ie
            }
          },
          metadata: ie
        }, Ee, ge), (0, te.i)(ee, null, ke, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: ee => "texture" in ee,
            get: ee => ee.texture,
            set: (ee, ie) => {
              ee.texture = ie
            }
          },
          metadata: ie
        }, De, Pe), (0, te.i)(ee, null, qe, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "useRoughnessFromMainTexture" in ee,
            get: ee => ee.useRoughnessFromMainTexture,
            set: (ee, ie) => {
              ee.useRoughnessFromMainTexture = ie
            }
          },
          metadata: ie
        }, Ae, Ye), (0, te.i)(ee, null, fe, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: ee => "roughness" in ee,
            get: ee => ee.roughness,
            set: (ee, ie) => {
              ee.roughness = ie
            }
          },
          metadata: ie
        }, Ve, ae), (0, te.i)(ee, null, Te, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: ee => "textureRoughness" in ee,
            get: ee => ee.textureRoughness,
            set: (ee, ie) => {
              ee.textureRoughness = ie
            }
          },
          metadata: ie
        }, ce, xe), (0, te.i)(ee, null, pe, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: ee => "albedoScaling" in ee,
            get: ee => ee.albedoScaling,
            set: (ee, ie) => {
              ee.albedoScaling = ie
            }
          },
          metadata: ie
        }, Le, Ce), (0, te.i)(null, null, oe, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "intensity" in ee,
            get: ee => ee.intensity,
            set: (ee, ie) => {
              ee.intensity = ie
            }
          },
          metadata: ie
        }, Oe, de), (0, te.i)(null, null, Re, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: ee => "color" in ee,
            get: ee => ee.color,
            set: (ee, ie) => {
              ee.color = ie
            }
          },
          metadata: ie
        }, We, we), ie && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie
        })
      })(), ee
    })();
    class Ui extends ue.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let Fi = (() => {
      var ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe;
      let Xe, ze, Be, Ee, ge, Oe, de, We, we, De, Pe, Ae, Ye, Ve, ae, ce, xe, Le, ve, ue, le, Se, ne, se, Ie, he, Ge, Qe, ei, ii, Hi = me.b,
        yi = [],
        bi = [],
        Mi = [],
        Ki = [],
        Fi = [],
        Ji = [],
        oi = [],
        Ri = [],
        ki = [],
        qi = [],
        fi = [],
        Ti = [],
        Xi = [],
        zi = [],
        Bi = [],
        Ei = [],
        gi = [],
        Oi = [],
        di = [],
        Wi = [],
        ti = [],
        Zi = [],
        wi = [],
        Di = [],
        Pi = [],
        Ai = [],
        Yi = [],
        Vi = [],
        ai = [],
        ci = [],
        xi = [],
        Li = [],
        Ci = [],
        vi = [],
        ui = [],
        mi = [],
        li = [],
        Si = [],
        ni = [],
        ji = [],
        si = [],
        Ii = [],
        Ni = [],
        Gi = [],
        ri = [],
        Qi = [],
        eH = [],
        iH = [],
        HH = [],
        yH = [],
        bH = [],
        MH = [],
        KH = [],
        UH = [],
        FH = [],
        JH = [],
        oH = [],
        RH = [],
        kH = [],
        qH = [];
      return ee = class extends Hi {
        get isRefractionEnabled() {
          return (0, te.c)(this, ie, "f")
        }
        set isRefractionEnabled(ee) {
          (0, te.f)(this, ie, ee, "f")
        }
        get isTranslucencyEnabled() {
          return (0, te.c)(this, He, "f")
        }
        set isTranslucencyEnabled(ee) {
          (0, te.f)(this, He, ee, "f")
        }
        get isDispersionEnabled() {
          return (0, te.c)(this, ye, "f")
        }
        set isDispersionEnabled(ee) {
          (0, te.f)(this, ye, ee, "f")
        }
        get isScatteringEnabled() {
          return (0, te.c)(this, be, "f")
        }
        set isScatteringEnabled(ee) {
          (0, te.f)(this, be, ee, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(ee) {
          this._scene.enableSubSurfaceForPrePass() && ee && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(ee))
        }
        get useAlbedoToTintRefraction() {
          return (0, te.c)(this, Me, "f")
        }
        set useAlbedoToTintRefraction(ee) {
          (0, te.f)(this, Me, ee, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, te.c)(this, Ke, "f")
        }
        set useAlbedoToTintTranslucency(ee) {
          (0, te.f)(this, Ke, ee, "f")
        }
        get thicknessTexture() {
          return (0, te.c)(this, Ue, "f")
        }
        set thicknessTexture(ee) {
          (0, te.f)(this, Ue, ee, "f")
        }
        get refractionTexture() {
          return (0, te.c)(this, Fe, "f")
        }
        set refractionTexture(ee) {
          (0, te.f)(this, Fe, ee, "f")
        }
        get indexOfRefraction() {
          return (0, te.c)(this, Je, "f")
        }
        set indexOfRefraction(ee) {
          (0, te.f)(this, Je, ee, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(ee) {
          const ie = ee >= 1 ? ee : -1;
          this._volumeIndexOfRefraction !== ie && (this._volumeIndexOfRefraction = ie, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, te.c)(this, oe, "f")
        }
        set invertRefractionY(ee) {
          (0, te.f)(this, oe, ee, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, te.c)(this, Re, "f")
        }
        set linkRefractionWithTransparency(ee) {
          (0, te.f)(this, Re, ee, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, te.c)(this, ke, "f")
        }
        set useMaskFromThicknessTexture(ee) {
          (0, te.f)(this, ke, ee, "f")
        }
        get refractionIntensityTexture() {
          return (0, te.c)(this, qe, "f")
        }
        set refractionIntensityTexture(ee) {
          (0, te.f)(this, qe, ee, "f")
        }
        get translucencyIntensityTexture() {
          return (0, te.c)(this, fe, "f")
        }
        set translucencyIntensityTexture(ee) {
          (0, te.f)(this, fe, ee, "f")
        }
        get translucencyColorTexture() {
          return (0, te.c)(this, Te, "f")
        }
        set translucencyColorTexture(ee) {
          (0, te.f)(this, Te, ee, "f")
        }
        get useGltfStyleTextures() {
          return (0, te.c)(this, pe, "f")
        }
        set useGltfStyleTextures(ee) {
          (0, te.f)(this, pe, ee, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(ee) {
          this.legacyTranslucency = ee
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
        constructor(Xe) {
          let ze = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Xe, "PBRSubSurface", 130, new Ui, ze), this._isRefractionEnabled = !1, ie.set(this, (0, te.l)(this, yi, !1)), this._isTranslucencyEnabled = ((0, te.l)(this, bi), !1), He.set(this, (0, te.l)(this, Mi, !1)), this._isDispersionEnabled = ((0, te.l)(this, Ki), !1), ye.set(this, (0, te.l)(this, Fi, !1)), this._isScatteringEnabled = ((0, te.l)(this, Ji), !1), be.set(this, (0, te.l)(this, oi, !1)), this._scatteringDiffusionProfileIndex = ((0, te.l)(this, Ri), (0, te.l)(this, ki, 0)), this.refractionIntensity = ((0, te.l)(this, qi), (0, te.l)(this, fi, 1)), this.translucencyIntensity = ((0, te.l)(this, Ti), (0, te.l)(this, Xi, 1)), this._useAlbedoToTintRefraction = ((0, te.l)(this, zi), !1), Me.set(this, (0, te.l)(this, Bi, !1)), this._useAlbedoToTintTranslucency = ((0, te.l)(this, Ei), !1), Ke.set(this, (0, te.l)(this, gi, !1)), this._thicknessTexture = ((0, te.l)(this, Oi), null), Ue.set(this, (0, te.l)(this, di, null)), this._refractionTexture = ((0, te.l)(this, Wi), null), Fe.set(this, (0, te.l)(this, ti, null)), this._indexOfRefraction = ((0, te.l)(this, Zi), 1.5), Je.set(this, (0, te.l)(this, wi, 1.5)), this._volumeIndexOfRefraction = ((0, te.l)(this, Di), (0, te.l)(this, Pi, -1)), this._invertRefractionY = ((0, te.l)(this, Ai), !1), oe.set(this, (0, te.l)(this, Yi, !1)), this._linkRefractionWithTransparency = ((0, te.l)(this, Vi), !1), Re.set(this, (0, te.l)(this, ai, !1)), this.minimumThickness = ((0, te.l)(this, ci), (0, te.l)(this, xi, 0)), this.maximumThickness = ((0, te.l)(this, Li), (0, te.l)(this, Ci, 1)), this.useThicknessAsDepth = ((0, te.l)(this, vi), (0, te.l)(this, ui, !1)), this.tintColor = ((0, te.l)(this, mi), (0, te.l)(this, li, je.c.White())), this.tintColorAtDistance = ((0, te.l)(this, Si), (0, te.l)(this, ni, 1)), this.dispersion = ((0, te.l)(this, ji), (0, te.l)(this, si, 0)), this.diffusionDistance = ((0, te.l)(this, Ii), (0, te.l)(this, Ni, je.c.White())), this._useMaskFromThicknessTexture = ((0, te.l)(this, Gi), !1), ke.set(this, (0, te.l)(this, ri, !1)), this._refractionIntensityTexture = ((0, te.l)(this, Qi), null), qe.set(this, (0, te.l)(this, eH, null)), this._translucencyIntensityTexture = ((0, te.l)(this, iH), null), fe.set(this, (0, te.l)(this, HH, null)), this.translucencyColor = ((0, te.l)(this, yH), (0, te.l)(this, bH, null)), this._translucencyColorTexture = ((0, te.l)(this, MH), null), Te.set(this, (0, te.l)(this, KH, null)), this._useGltfStyleTextures = ((0, te.l)(this, UH), !0), pe.set(this, (0, te.l)(this, FH, !0)), this.applyAlbedoAfterSubSurface = ((0, te.l)(this, JH), (0, te.l)(this, oH, ee.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, te.l)(this, RH), (0, te.l)(this, kH, ee.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, te.l)(this, qH), this._scene = Xe.Xx(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = Xe._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = Xe._dirtyCallbacks[32]
        }
        isReadyForSubMesh(ee, ie) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (ee._areTexturesDirty && ie.texturesEnabled) {
            if (this._thicknessTexture && Ne.c.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && Ne.c.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && Ne.c.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && Ne.c.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const ee = this._getRefractionTexture(ie);
            if (ee && Ne.c.RefractionTextureEnabled && !ee.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(ee, ie) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return ee.SUBSURFACE = !1, ee.SS_DISPERSION = !1, ee.SS_TRANSLUCENCY = !1, ee.SS_SCATTERING = !1, ee.SS_REFRACTION = !1, ee.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, ee.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, ee.SS_THICKNESSANDMASK_TEXTURE = !1, ee.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, ee.SS_HAS_THICKNESS = !1, ee.SS_REFRACTIONINTENSITY_TEXTURE = !1, ee.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, ee.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, ee.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, ee.SS_REFRACTIONMAP_3D = !1, ee.SS_REFRACTIONMAP_OPPOSITEZ = !1, ee.SS_LODINREFRACTIONALPHA = !1, ee.SS_GAMMAREFRACTION = !1, ee.SS_RGBDREFRACTION = !1, ee.SS_LINEARSPECULARREFRACTION = !1, ee.SS_LINKREFRACTIONTOTRANSPARENCY = !1, ee.SS_ALBEDOFORREFRACTIONTINT = !1, ee.SS_ALBEDOFORTRANSLUCENCYTINT = !1, ee.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, ee.SS_USE_THICKNESS_AS_DEPTH = !1, ee.SS_USE_GLTF_TEXTURES = !1, ee.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, ee.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, ee.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(ee.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (ee._areTexturesDirty) {
            if (ee.SUBSURFACE = !0, ee.SS_DISPERSION = this._isDispersionEnabled, ee.SS_TRANSLUCENCY = this._isTranslucencyEnabled, ee.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, ee.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, ee.SS_SCATTERING = this._isScatteringEnabled, ee.SS_THICKNESSANDMASK_TEXTURE = !1, ee.SS_REFRACTIONINTENSITY_TEXTURE = !1, ee.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, ee.SS_HAS_THICKNESS = !1, ee.SS_USE_GLTF_TEXTURES = !1, ee.SS_REFRACTION = !1, ee.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, ee.SS_REFRACTIONMAP_3D = !1, ee.SS_GAMMAREFRACTION = !1, ee.SS_RGBDREFRACTION = !1, ee.SS_LINEARSPECULARREFRACTION = !1, ee.SS_REFRACTIONMAP_OPPOSITEZ = !1, ee.SS_LODINREFRACTIONALPHA = !1, ee.SS_LINKREFRACTIONTOTRANSPARENCY = !1, ee.SS_ALBEDOFORREFRACTIONTINT = !1, ee.SS_ALBEDOFORTRANSLUCENCYTINT = !1, ee.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, ee.SS_USE_THICKNESS_AS_DEPTH = !1, ee.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, ee.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, ee._areTexturesDirty && ie.texturesEnabled && (this._thicknessTexture && Ne.c.ThicknessTextureEnabled && (0, re.Z)(this._thicknessTexture, ee, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && Ne.c.RefractionIntensityTextureEnabled && (0, re.Z)(this._refractionIntensityTexture, ee, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && Ne.c.TranslucencyIntensityTextureEnabled && (0, re.Z)(this._translucencyIntensityTexture, ee, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && Ne.c.TranslucencyColorTextureEnabled && ((0, re.Z)(this._translucencyColorTexture, ee, "SS_TRANSLUCENCYCOLOR_TEXTURE"), ee.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), ee.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, ee.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, ee.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, ee.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && ie.texturesEnabled) {
              const He = this._getRefractionTexture(ie);
              He && Ne.c.RefractionTextureEnabled && (ee.SS_REFRACTION = !0, ee.SS_REFRACTIONMAP_3D = He.isCube, ee.SS_GAMMAREFRACTION = He.gammaSpace, ee.SS_RGBDREFRACTION = He.isRGBD, ee.SS_LINEARSPECULARREFRACTION = He.linearSpecularLOD, ee.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && He.isCube ? !He.invertZ : He.invertZ, ee.SS_LODINREFRACTIONALPHA = He.lodLevelInAlpha, ee.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, ee.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, ee.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = He.isCube && He.boundingBoxSize, ee.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (ee.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(ee, ie, He, ye) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) ee.updateFloat2("vThicknessParam", 0, 0);
            else {
              ye.getRenderingMesh().getWorldMatrix().decompose(Ce.j.rf[0]);
              const ie = Math.max(Math.abs(Ce.j.rf[0].x), Math.abs(Ce.j.rf[0].y), Math.abs(Ce.j.rf[0].z));
              ee.updateFloat2("vThicknessParam", this.minimumThickness * ie, (this.maximumThickness - this.minimumThickness) * ie)
            }
        }
        bindForSubMesh(ee, ie, He, ye) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const be = ye.materialDefines,
            Me = this._material.isFrozen,
            Ke = this._material.realTimeFiltering,
            Ue = be.LODBASEDMICROSFURACE,
            Fe = this._getRefractionTexture(ie);
          if (!ee.useUbo || !Me || !ee.isSync) {
            if (this._thicknessTexture && Ne.c.ThicknessTextureEnabled && (ee.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, re.A)(this._thicknessTexture, ee, "thickness")), this._refractionIntensityTexture && Ne.c.RefractionIntensityTextureEnabled && be.SS_REFRACTIONINTENSITY_TEXTURE && (ee.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, re.A)(this._refractionIntensityTexture, ee, "refractionIntensity")), this._translucencyColorTexture && Ne.c.TranslucencyColorTextureEnabled && be.SS_TRANSLUCENCYCOLOR_TEXTURE && (ee.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, re.A)(this._translucencyColorTexture, ee, "translucencyColor")), this._translucencyIntensityTexture && Ne.c.TranslucencyIntensityTextureEnabled && be.SS_TRANSLUCENCYINTENSITY_TEXTURE && (ee.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, re.A)(this._translucencyIntensityTexture, ee, "translucencyIntensity")), Fe && Ne.c.RefractionTextureEnabled) {
              ee.oie("refractionMatrix", Fe.getRefractionTextureMatrix());
              let ie = 1;
              Fe.isCube || Fe.depth && (ie = Fe.depth);
              const He = Fe.getSize().width,
                ye = this.volumeIndexOfRefraction;
              if (ee.updateFloat4("vRefractionInfos", Fe.level, 1 / ye, ie, this._invertRefractionY ? -1 : 1), ee.updateFloat4("vRefractionMicrosurfaceInfos", He, Fe.lodGenerationScale, Fe.lodGenerationOffset, 1 / this.indexOfRefraction), Ke && ee.updateFloat2("vRefractionFilteringInfo", He, Math.log2(He)), Fe.boundingBoxSize) {
                const ie = Fe;
                ee.updateVector3("vRefractionPosition", ie.boundingBoxPosition), ee.updateVector3("vRefractionSize", ie.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && ee.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), ee.updateColor3("vDiffusionDistance", this.diffusionDistance), ee.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), ee.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), ee.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), ee.updateFloat("dispersion", this.dispersion)
          }
          ie.texturesEnabled && (this._thicknessTexture && Ne.c.ThicknessTextureEnabled && ee.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && Ne.c.RefractionIntensityTextureEnabled && be.SS_REFRACTIONINTENSITY_TEXTURE && ee.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && Ne.c.TranslucencyIntensityTextureEnabled && be.SS_TRANSLUCENCYINTENSITY_TEXTURE && ee.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && Ne.c.TranslucencyColorTextureEnabled && be.SS_TRANSLUCENCYCOLOR_TEXTURE && ee.setTexture("translucencyColorSampler", this._translucencyColorTexture), Fe && Ne.c.RefractionTextureEnabled && (Ue ? ee.setTexture("refractionSampler", Fe) : (ee.setTexture("refractionSampler", Fe._lodTextureMid || Fe), ee.setTexture("refractionSamplerLow", Fe._lodTextureLow || Fe), ee.setTexture("refractionSamplerHigh", Fe._lodTextureHigh || Fe))))
        }
        _getRefractionTexture(ee) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? ee.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(ee) {
          Ne.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && ee.push(this._refractionTexture)
        }
        hasTexture(ee) {
          return this._thicknessTexture === ee || (this._refractionTexture === ee || (this._refractionIntensityTexture === ee || (this._translucencyIntensityTexture === ee || this._translucencyColorTexture === ee)))
        }
        hasRenderTargetTextures() {
          return !!(Ne.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(ee) {
          this._thicknessTexture && ee.push(this._thicknessTexture), this._refractionTexture && ee.push(this._refractionTexture), this._refractionIntensityTexture && ee.push(this._refractionIntensityTexture), this._translucencyColorTexture && ee.push(this._translucencyColorTexture), this._translucencyIntensityTexture && ee.push(this._translucencyIntensityTexture)
        }
        getAnimatables(ee) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && ee.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && ee.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && ee.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && ee.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && ee.push(this._translucencyIntensityTexture)
        }
        dispose(ee) {
          ee && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(ee, ie, He) {
          return ee.SS_SCATTERING && ie.addFallback(He++, "SS_SCATTERING"), ee.SS_TRANSLUCENCY && ie.addFallback(He++, "SS_TRANSLUCENCY"), He
        }
        getSamplers(ee) {
          ee.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, ie = new WeakMap, He = new WeakMap, ye = new WeakMap, be = new WeakMap, Me = new WeakMap, Ke = new WeakMap, Ue = new WeakMap, Fe = new WeakMap, Je = new WeakMap, oe = new WeakMap, Re = new WeakMap, ke = new WeakMap, qe = new WeakMap, fe = new WeakMap, Te = new WeakMap, pe = new WeakMap, (() => {
        const ie = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hi[Symbol.metadata] ?? null) : void 0;
        Xe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], ze = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Be = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Ee = [(0, Ze.R)(), (0, Ze.d)("_markScenePrePassDirty")], ge = [(0, Ze.R)()], Oe = [(0, Ze.R)()], de = [(0, Ze.R)()], We = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], we = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], De = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Pe = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Ae = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Ye = [(0, Ze.R)()], Ve = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], ae = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], ce = [(0, Ze.R)()], xe = [(0, Ze.R)()], Le = [(0, Ze.R)()], ve = [(0, Ze.p)()], ue = [(0, Ze.R)()], le = [(0, Ze.R)()], Se = [(0, Ze.p)()], ne = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], se = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Ie = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], he = [(0, Ze.p)()], Ge = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Qe = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], ei = [(0, Ze.R)()], ii = [(0, Ze.R)()], (0, te.i)(ee, null, Xe, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "isRefractionEnabled" in ee,
            get: ee => ee.isRefractionEnabled,
            set: (ee, ie) => {
              ee.isRefractionEnabled = ie
            }
          },
          metadata: ie
        }, yi, bi), (0, te.i)(ee, null, ze, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "isTranslucencyEnabled" in ee,
            get: ee => ee.isTranslucencyEnabled,
            set: (ee, ie) => {
              ee.isTranslucencyEnabled = ie
            }
          },
          metadata: ie
        }, Mi, Ki), (0, te.i)(ee, null, Be, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "isDispersionEnabled" in ee,
            get: ee => ee.isDispersionEnabled,
            set: (ee, ie) => {
              ee.isDispersionEnabled = ie
            }
          },
          metadata: ie
        }, Fi, Ji), (0, te.i)(ee, null, Ee, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "isScatteringEnabled" in ee,
            get: ee => ee.isScatteringEnabled,
            set: (ee, ie) => {
              ee.isScatteringEnabled = ie
            }
          },
          metadata: ie
        }, oi, Ri), (0, te.i)(ee, null, We, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: ee => "useAlbedoToTintRefraction" in ee,
            get: ee => ee.useAlbedoToTintRefraction,
            set: (ee, ie) => {
              ee.useAlbedoToTintRefraction = ie
            }
          },
          metadata: ie
        }, Bi, Ei), (0, te.i)(ee, null, we, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: ee => "useAlbedoToTintTranslucency" in ee,
            get: ee => ee.useAlbedoToTintTranslucency,
            set: (ee, ie) => {
              ee.useAlbedoToTintTranslucency = ie
            }
          },
          metadata: ie
        }, gi, Oi), (0, te.i)(ee, null, De, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "thicknessTexture" in ee,
            get: ee => ee.thicknessTexture,
            set: (ee, ie) => {
              ee.thicknessTexture = ie
            }
          },
          metadata: ie
        }, di, Wi), (0, te.i)(ee, null, Pe, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "refractionTexture" in ee,
            get: ee => ee.refractionTexture,
            set: (ee, ie) => {
              ee.refractionTexture = ie
            }
          },
          metadata: ie
        }, ti, Zi), (0, te.i)(ee, null, Ae, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: ee => "indexOfRefraction" in ee,
            get: ee => ee.indexOfRefraction,
            set: (ee, ie) => {
              ee.indexOfRefraction = ie
            }
          },
          metadata: ie
        }, wi, Di), (0, te.i)(ee, null, Ve, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: ee => "invertRefractionY" in ee,
            get: ee => ee.invertRefractionY,
            set: (ee, ie) => {
              ee.invertRefractionY = ie
            }
          },
          metadata: ie
        }, Yi, Vi), (0, te.i)(ee, null, ae, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: ee => "linkRefractionWithTransparency" in ee,
            get: ee => ee.linkRefractionWithTransparency,
            set: (ee, ie) => {
              ee.linkRefractionWithTransparency = ie
            }
          },
          metadata: ie
        }, ai, ci), (0, te.i)(ee, null, ne, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "useMaskFromThicknessTexture" in ee,
            get: ee => ee.useMaskFromThicknessTexture,
            set: (ee, ie) => {
              ee.useMaskFromThicknessTexture = ie
            }
          },
          metadata: ie
        }, ri, Qi), (0, te.i)(ee, null, se, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "refractionIntensityTexture" in ee,
            get: ee => ee.refractionIntensityTexture,
            set: (ee, ie) => {
              ee.refractionIntensityTexture = ie
            }
          },
          metadata: ie
        }, eH, iH), (0, te.i)(ee, null, Ie, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "translucencyIntensityTexture" in ee,
            get: ee => ee.translucencyIntensityTexture,
            set: (ee, ie) => {
              ee.translucencyIntensityTexture = ie
            }
          },
          metadata: ie
        }, HH, yH), (0, te.i)(ee, null, Ge, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "translucencyColorTexture" in ee,
            get: ee => ee.translucencyColorTexture,
            set: (ee, ie) => {
              ee.translucencyColorTexture = ie
            }
          },
          metadata: ie
        }, KH, UH), (0, te.i)(ee, null, Qe, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: ee => "useGltfStyleTextures" in ee,
            get: ee => ee.useGltfStyleTextures,
            set: (ee, ie) => {
              ee.useGltfStyleTextures = ie
            }
          },
          metadata: ie
        }, FH, JH), (0, te.i)(null, null, ge, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: ee => "_scatteringDiffusionProfileIndex" in ee,
            get: ee => ee._scatteringDiffusionProfileIndex,
            set: (ee, ie) => {
              ee._scatteringDiffusionProfileIndex = ie
            }
          },
          metadata: ie
        }, ki, qi), (0, te.i)(null, null, Oe, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "refractionIntensity" in ee,
            get: ee => ee.refractionIntensity,
            set: (ee, ie) => {
              ee.refractionIntensity = ie
            }
          },
          metadata: ie
        }, fi, Ti), (0, te.i)(null, null, de, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "translucencyIntensity" in ee,
            get: ee => ee.translucencyIntensity,
            set: (ee, ie) => {
              ee.translucencyIntensity = ie
            }
          },
          metadata: ie
        }, Xi, zi), (0, te.i)(null, null, Ye, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: ee => "_volumeIndexOfRefraction" in ee,
            get: ee => ee._volumeIndexOfRefraction,
            set: (ee, ie) => {
              ee._volumeIndexOfRefraction = ie
            }
          },
          metadata: ie
        }, Pi, Ai), (0, te.i)(null, null, ce, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: ee => "minimumThickness" in ee,
            get: ee => ee.minimumThickness,
            set: (ee, ie) => {
              ee.minimumThickness = ie
            }
          },
          metadata: ie
        }, xi, Li), (0, te.i)(null, null, xe, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: ee => "maximumThickness" in ee,
            get: ee => ee.maximumThickness,
            set: (ee, ie) => {
              ee.maximumThickness = ie
            }
          },
          metadata: ie
        }, Ci, vi), (0, te.i)(null, null, Le, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: ee => "useThicknessAsDepth" in ee,
            get: ee => ee.useThicknessAsDepth,
            set: (ee, ie) => {
              ee.useThicknessAsDepth = ie
            }
          },
          metadata: ie
        }, ui, mi), (0, te.i)(null, null, ve, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: ee => "tintColor" in ee,
            get: ee => ee.tintColor,
            set: (ee, ie) => {
              ee.tintColor = ie
            }
          },
          metadata: ie
        }, li, Si), (0, te.i)(null, null, ue, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: ee => "tintColorAtDistance" in ee,
            get: ee => ee.tintColorAtDistance,
            set: (ee, ie) => {
              ee.tintColorAtDistance = ie
            }
          },
          metadata: ie
        }, ni, ji), (0, te.i)(null, null, le, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: ee => "dispersion" in ee,
            get: ee => ee.dispersion,
            set: (ee, ie) => {
              ee.dispersion = ie
            }
          },
          metadata: ie
        }, si, Ii), (0, te.i)(null, null, Se, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: ee => "diffusionDistance" in ee,
            get: ee => ee.diffusionDistance,
            set: (ee, ie) => {
              ee.diffusionDistance = ie
            }
          },
          metadata: ie
        }, Ni, Gi), (0, te.i)(null, null, he, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: ee => "translucencyColor" in ee,
            get: ee => ee.translucencyColor,
            set: (ee, ie) => {
              ee.translucencyColor = ie
            }
          },
          metadata: ie
        }, bH, MH), (0, te.i)(null, null, ei, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: ee => "applyAlbedoAfterSubSurface" in ee,
            get: ee => ee.applyAlbedoAfterSubSurface,
            set: (ee, ie) => {
              ee.applyAlbedoAfterSubSurface = ie
            }
          },
          metadata: ie
        }, oH, RH), (0, te.i)(null, null, ii, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: ee => "legacyTranslucency" in ee,
            get: ee => ee.legacyTranslucency,
            set: (ee, ie) => {
              ee.legacyTranslucency = ie
            }
          },
          metadata: ie
        }, kH, qH), ie && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie
        })
      })(), ee.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, ee.DEFAULT_LEGACY_TRANSLUCENCY = !1, ee
    })();
    var Ji = He(41483),
      oi = He(41458),
      Ri = He(41495),
      ki = He(41497),
      qi = He(41499),
      fi = He(41502),
      Ti = He(41509),
      Xi = He(41515),
      zi = He(40985);
    const Bi = {
      effect: null,
      subMesh: null
    };
    class Ei extends((0, Ti.d)((0, fi.d)(ue.e))) {}
    class gi extends((0, se.e)(Ei)) {
      constructor(ee) {
        super(ee), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class Oi extends((0, Xi.e)(he.c)) {}
    let di = (() => {
      var ee, ie;
      let ye, be = Oi,
        Ke = [],
        Ue = [];
      return ee = class extends be {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(ee) {
          this._realTimeFiltering = ee, this.tye(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(ee) {
          this._realTimeFilteringQuality = ee, this.tye(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, te.c)(this, ie, "f")
        }
        set debugMode(ee) {
          (0, te.f)(this, ie, ee, "f")
        }
        constructor(He, ye) {
          super(He, ye, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || ee.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Ce.s(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = ee.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = je.c.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new je.c(0, 0, 0), this._albedoColor = new je.c(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new je.c(1, 1, 1), this._reflectionColor = new je.c(1, 1, 1), this._emissiveColor = new je.c(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = ee.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new De.f(16), this._globalAmbientColor = new je.c(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, ie.set(this, (0, te.l)(this, Ke, 0)), this.debugLimit = ((0, te.l)(this, Ue), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new Se(this), this.clearCoat = new ei(this), this.iridescence = new Hi(this), this.anisotropy = new bi(this), this.sheen = new Ki(this), this.subSurface = new Fi(this), this.detailMap = new Ji.c(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Ne.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = ae(this.Xx()), this.prePassConfiguration = new ne.b
        }
        get hasRenderTargetTextures() {
          return !!(Ne.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === ee.PBRMATERIAL_OPAQUE || this._transparencyMode === ee.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === ee.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== ee.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(ee, ie, He) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const ye = ie._drawWrapper;
          if (ye.effect && this.isFrozen && ye._wasPreviouslyReady && ye._wasPreviouslyUsingInstances === He) return !0;
          ie.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ie.materialDefines = new gi(this._eventInfo.defineNames));
          const be = ie.materialDefines;
          if (this._isReadyForSubMesh(ie)) return !0;
          const Me = this.Xx(),
            Ke = Me.Nf();
          if (be._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Me.texturesEnabled)) {
            if (this._albedoTexture && Ne.c.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && Ne.c.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && Ne.c.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && Ne.c.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && Ne.c.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const ee = this._getReflectionTexture();
            if (ee && Ne.c.ReflectionTextureEnabled) {
              if (!ee.isReadyOrNotBlocking()) return !1;
              if (ee.irradianceTexture) {
                if (!ee.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!ee.sphericalPolynomial && ee.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && Ne.c.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && Ne.c.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (Ne.c.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (Ke.getCaps().standardDerivatives && this._bumpTexture && Ne.c.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && Ne.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = be, this._eventInfo.subMesh = ie, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (be._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (be.AREALIGHTUSED || be.CLUSTLIGHT_BATCH)
            for (let Re = 0; Re < ee.lightSources.length; Re++)
              if (!ee.lightSources[Re]._isReady()) return !1;
          if (Ke.getCaps().standardDerivatives || ee.isVerticesDataPresent(ve.h.NormalKind) || (ee.createNormals(!0), we.e.Warn("PBRMaterial: Normals have been created for the mesh: " + ee.name)), !(0, re.d)(Me, ee, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const Ue = ie.effect,
            Fe = be._areLightsDisposed,
            Je = this._prepareEffect(ee, ie.getRenderingMesh(), be, this.onCompiled, this.onError, He, null);
          let oe = !1;
          if (Je)
            if (this._onEffectCreatedObservable && (Bi.effect = Je, Bi.subMesh = ie, this._onEffectCreatedObservable.notifyObservers(Bi)), this.allowShaderHotSwapping && Ue && !Je.isReady()) {
              if (be.markAsUnprocessed(), oe = this.isFrozen, Fe) return be._areLightsDisposed = !0, !1
            } else Me.resetCachedMaterial(), ie.setEffect(Je, be, this._materialContext);
          return !(!ie.effect || !ie.effect.isReady()) && (be._renderId = Me.getRenderId(), ye._wasPreviouslyReady = !oe, ye._wasPreviouslyUsingInstances = !!He, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(ie, He, ye) {
          let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Ke = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            Ue = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(ie, He, ye, Ke, Ue), !ye.isDirty) return null;
          ye.markAsProcessed();
          const Fe = this.Xx().Nf(),
            Je = new Ge.e;
          let oe = 0;
          ye.USESPHERICALINVERTEX && Je.addFallback(oe++, "USESPHERICALINVERTEX"), ye.FOG && Je.addFallback(oe, "FOG"), ye.SPECULARAA && Je.addFallback(oe, "SPECULARAA"), ye.POINTSIZE && Je.addFallback(oe, "POINTSIZE"), ye.LOGARITHMICDEPTH && Je.addFallback(oe, "LOGARITHMICDEPTH"), ye.PARALLAX && Je.addFallback(oe, "PARALLAX"), ye.PARALLAX_RHS && Je.addFallback(oe, "PARALLAX_RHS"), ye.PARALLAXOCCLUSION && Je.addFallback(oe++, "PARALLAXOCCLUSION"), ye.ENVIRONMENTBRDF && Je.addFallback(oe++, "ENVIRONMENTBRDF"), ye.TANGENT && Je.addFallback(oe++, "TANGENT"), ye.BUMP && Je.addFallback(oe++, "BUMP"), oe = (0, re.D)(ye, Je, this._maxSimultaneousLights, oe), ye.SPECULARTERM && Je.addFallback(oe++, "SPECULARTERM"), ye.USESPHERICALFROMREFLECTIONMAP && Je.addFallback(oe++, "USESPHERICALFROMREFLECTIONMAP"), ye.USEIRRADIANCEMAP && Je.addFallback(oe++, "USEIRRADIANCEMAP"), ye.LIGHTMAP && Je.addFallback(oe++, "LIGHTMAP"), ye.NORMAL && Je.addFallback(oe++, "NORMAL"), ye.AMBIENT && Je.addFallback(oe++, "AMBIENT"), ye.EMISSIVE && Je.addFallback(oe++, "EMISSIVE"), ye.VERTEXCOLOR && Je.addFallback(oe++, "VERTEXCOLOR"), ye.MORPHTARGETS && Je.addFallback(oe++, "MORPHTARGETS"), ye.MULTIVIEW && Je.addFallback(0, "MULTIVIEW");
          const Re = [ve.h.PositionKind];
          ye.NORMAL && Re.push(ve.h.NormalKind), ye.TANGENT && Re.push(ve.h.TangentKind);
          for (let ee = 1; ee <= 6; ++ee) ye["UV" + ee] && Re.push(`uv${1===ee?"":ee}`);
          ye.VERTEXCOLOR && Re.push(ve.h.ColorKind), (0, re.I)(Re, ie, ye, Je), (0, re.K)(Re, ye), (0, re.O)(Re, ie, ye), (0, re.F)(Re, ie, ye);
          let ke = "pbr";
          const qe = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            fe = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, re.kb)(qe, fe, !0);
          const Te = ["Material", "Scene", "Mesh"],
            pe = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: ye.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = Je, this._eventInfo.fallbackRank = oe, this._eventInfo.defines = ye, this._eventInfo.uniforms = qe, this._eventInfo.attributes = Re, this._eventInfo.samplers = fe, this._eventInfo.uniformBuffersNames = Te, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ie, this._eventInfo.indexParameters = pe, this._callbackPluginEventGeneric(128, this._eventInfo), qi.b.AddUniformsAndSamplers(qe, fe), ne.b.AddUniforms(qe), ne.b.AddSamplers(fe), (0, oi.e)(qe), this._useVertexPulling) {
            const ee = He?.geometry;
            ee && (this._vertexPullingMetadata = (0, Ri.h)(ee), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((ee, ie) => {
              qe.push(`vp_${ie}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          Ie.e && (Ie.e.PrepareUniforms(qe, ye), Ie.e.PrepareSamplers(fe, ye)), (0, re.nb)({
            uniformsNames: qe,
            uniformBuffersNames: Te,
            samplers: fe,
            defines: ye,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const Xe = {};
          this.customShaderNameResolve && (ke = this.customShaderNameResolve(ke, qe, Te, fe, ye, Re, Xe));
          const ze = ye.toString(),
            Be = Fe.createEffect(ke, {
              attributes: Re,
              uniformsNames: qe,
              uniformBuffersNames: Te,
              samplers: fe,
              defines: ze,
              fallbacks: Je,
              onCompiled: be,
              onError: Me,
              indexParameters: pe,
              processFinalCode: Xe.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: ye.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: ee._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Fe);
          return this._eventInfo.customCode = void 0, Be
        }
        _prepareDefines(ie, He, ye) {
          let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const Ke = He.hasThinInstances,
            Ue = this.Xx(),
            Fe = Ue.Nf();
          (0, re.W)(Ue, ie, ye, !0, this._maxSimultaneousLights, this._disableLighting), ye._needNormals = !0, (0, re.ab)(Ue, ye);
          const Je = this.needAlphaBlendingForMesh(ie) && this.Xx().useOrderIndependentTransparency;
          if ((0, re.eb)(Ue, ye, this.canRenderToMRT && !Je), (0, re.cb)(Ue, ye, Je), qi.b.PrepareDefines(Fe.currentRenderPassId, ie, ye), ye.METALLICWORKFLOW = this.isMetallicWorkflow(), ye._areTexturesDirty) {
            ye._needUVs = !1;
            for (let ee = 1; ee <= 6; ++ee) ye["MAINUV" + ee] = !1;
            if (Ue.texturesEnabled) {
              ye.ALBEDODIRECTUV = 0, ye.BASE_WEIGHTDIRECTUV = 0, ye.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, ye.AMBIENTDIRECTUV = 0, ye.OPACITYDIRECTUV = 0, ye.EMISSIVEDIRECTUV = 0, ye.REFLECTIVITYDIRECTUV = 0, ye.MICROSURFACEMAPDIRECTUV = 0, ye.METALLIC_REFLECTANCEDIRECTUV = 0, ye.REFLECTANCEDIRECTUV = 0, ye.BUMPDIRECTUV = 0, ye.LIGHTMAPDIRECTUV = 0, Fe.getCaps().textureLOD && (ye.LODBASEDMICROSFURACE = !0), this._albedoTexture && Ne.c.DiffuseTextureEnabled ? ((0, re.Z)(this._albedoTexture, ye, "ALBEDO"), ye.GAMMAALBEDO = this._albedoTexture.gammaSpace) : ye.ALBEDO = !1, this._baseWeightTexture && Ne.c.BaseWeightTextureEnabled ? (0, re.Z)(this._baseWeightTexture, ye, "BASE_WEIGHT") : ye.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && Ne.c.BaseDiffuseRoughnessTextureEnabled ? (0, re.Z)(this._baseDiffuseRoughnessTexture, ye, "BASE_DIFFUSE_ROUGHNESS") : ye.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && Ne.c.AmbientTextureEnabled ? ((0, re.Z)(this._ambientTexture, ye, "AMBIENT"), ye.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : ye.AMBIENT = !1, this._opacityTexture && Ne.c.OpacityTextureEnabled ? ((0, re.Z)(this._opacityTexture, ye, "OPACITY"), ye.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : ye.OPACITY = !1;
              const ee = this._getReflectionTexture(),
                ie = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Fe.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, re.V)(Ue, ee, ye, this.realTimeFiltering, this.realTimeFilteringQuality, !ie), this._lightmapTexture && Ne.c.LightmapTextureEnabled ? ((0, re.Z)(this._lightmapTexture, ye, "LIGHTMAP"), ye.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, ye.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, ye.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : ye.LIGHTMAP = !1, this._emissiveTexture && Ne.c.EmissiveTextureEnabled ? ((0, re.Z)(this._emissiveTexture, ye, "EMISSIVE"), ye.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : ye.EMISSIVE = !1, Ne.c.SpecularTextureEnabled ? (this._metallicTexture ? ((0, re.Z)(this._metallicTexture, ye, "REFLECTIVITY"), ye.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, ye.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, ye.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, ye.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, ye.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, re.Z)(this._reflectivityTexture, ye, "REFLECTIVITY"), ye.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, ye.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, ye.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : ye.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (ye.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, re.Z)(this._metallicReflectanceTexture, ye, "METALLIC_REFLECTANCE"), ye.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : ye.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, re.Z)(this._reflectanceTexture, ye, "REFLECTANCE"), ye.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : ye.REFLECTANCE = !1) : (ye.METALLIC_REFLECTANCE = !1, ye.REFLECTANCE = !1), this._microSurfaceTexture ? (0, re.Z)(this._microSurfaceTexture, ye, "MICROSURFACEMAP") : ye.MICROSURFACEMAP = !1) : (ye.REFLECTIVITY = !1, ye.MICROSURFACEMAP = !1), Fe.getCaps().standardDerivatives && this._bumpTexture && Ne.c.BumpTextureEnabled && !this._disableBumpMap ? ((0, re.Z)(this._bumpTexture, ye, "BUMP"), this._useParallax && this._albedoTexture && Ne.c.DiffuseTextureEnabled ? (ye.PARALLAX = !0, ye.PARALLAX_RHS = Ue.useRightHandedSystem, ye.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : ye.PARALLAX = !1, ye.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (ye.BUMP = !1, ye.PARALLAX = !1, ye.PARALLAX_RHS = !1, ye.PARALLAXOCCLUSION = !1, ye.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Ne.c.ReflectionTextureEnabled ? (ye.ENVIRONMENTBRDF = !0, ye.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (ye.ENVIRONMENTBRDF = !1, ye.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? ye.ALPHAFROMALBEDO = !0 : ye.ALPHAFROMALBEDO = !1
            }
            ye.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === ee.LIGHTFALLOFF_STANDARD ? (ye.USEPHYSICALLIGHTFALLOFF = !1, ye.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === ee.LIGHTFALLOFF_GLTF ? (ye.USEPHYSICALLIGHTFALLOFF = !1, ye.USEGLTFLIGHTFALLOFF = !0) : (ye.USEPHYSICALLIGHTFALLOFF = !0, ye.USEGLTFLIGHTFALLOFF = !1), ye.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? ye.TWOSIDEDLIGHTING = !0 : ye.TWOSIDEDLIGHTING = !1, ye.MIRRORED = !!Ue._mirroredCameraPosition, ye.SPECULARAA = Fe.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(ye._areTexturesDirty || ye._areMiscDirty) && (ye.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, ye.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, ye.ALPHABLEND = this.needAlphaBlendingForMesh(ie), ye.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, ye.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), ye._areTexturesDirty && (ye.TEXTURE_REPETITION_MODE = Fe.version > 1 || Fe.isWebGPU ? this.textureRepetitionMode : 0), ye._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(ye), ye.FORCENORMALFORWARD = this._forceNormalForward, ye.RADIANCEOCCLUSION = this._useRadianceOcclusion, ye.HORIZONOCCLUSION = this._useHorizonOcclusion, ye._areMiscDirty && ((0, re._)(ie, Ue, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ie), ye, this._applyDecalMapAfterDetailMap, this._useVertexPulling, He, this._isVertexOutputInvariant), ye.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !ie.isVerticesDataPresent(ve.h.NormalKind), ye.DEBUGMODE = this._debugMode), (0, re.U)(Ue, Fe, this, ye, !!be, Me, Ke), this._eventInfo.defines = ye, this._eventInfo.mesh = ie, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, re.T)(ie, ye, !0, !0, !0, this._transparencyMode !== ee.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(ee, ie, He) {
          const ye = {
            clipPlane: !1,
            useInstances: !1,
            ...He
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const He = new gi(this._eventInfo.defineNames),
              be = this._prepareEffect(ee, ee, He, void 0, void 0, ye.useInstances, ye.clipPlane);
            this._onEffectCreatedObservable && (Bi.effect = be, Bi.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Bi)), be.isReady() ? ie && ie(this) : be.onCompileObservable.add((() => {
              ie && ie(this)
            }))
          })()
        }
        buildUniformLayout() {
          const ee = this._uniformBuffer;
          ee.addUniform("vAlbedoInfos", 2), ee.addUniform("vBaseWeightInfos", 2), ee.addUniform("vBaseDiffuseRoughnessInfos", 2), ee.addUniform("vAmbientInfos", 4), ee.addUniform("vOpacityInfos", 2), ee.addUniform("vEmissiveInfos", 2), ee.addUniform("vLightmapInfos", 2), ee.addUniform("vReflectivityInfos", 3), ee.addUniform("vMicroSurfaceSamplerInfos", 2), ee.addUniform("vBumpInfos", 3), ee.addUniform("albedoMatrix", 16), ee.addUniform("baseWeightMatrix", 16), ee.addUniform("baseDiffuseRoughnessMatrix", 16), ee.addUniform("ambientMatrix", 16), ee.addUniform("opacityMatrix", 16), ee.addUniform("emissiveMatrix", 16), ee.addUniform("lightmapMatrix", 16), ee.addUniform("reflectivityMatrix", 16), ee.addUniform("microSurfaceSamplerMatrix", 16), ee.addUniform("bumpMatrix", 16), ee.addUniform("vTangentSpaceParams", 2), ee.addUniform("vAlbedoColor", 4), ee.addUniform("baseWeight", 1), ee.addUniform("baseDiffuseRoughness", 1), ee.addUniform("vLightingIntensity", 4), ee.addUniform("pointSize", 1), ee.addUniform("vReflectivityColor", 4), ee.addUniform("vEmissiveColor", 3), ee.addUniform("vAmbientColor", 3), ee.addUniform("vDebugMode", 2), ee.addUniform("vMetallicReflectanceFactors", 4), ee.addUniform("vMetallicReflectanceInfos", 2), ee.addUniform("metallicReflectanceMatrix", 16), ee.addUniform("vReflectanceInfos", 2), ee.addUniform("reflectanceMatrix", 16), ee.addUniform("cameraInfo", 4), ee.addUniform("vTextureRepetitionHexTilingParams", 4), (0, re.hb)(ee, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(ee, ie, He) {
          const ye = this.Xx(),
            be = He.materialDefines;
          if (!be) return;
          const Me = He.effect;
          if (!Me) return;
          this._activeEffect = Me, ie.getMeshUniformBuffer().bindToEffect(Me, "Mesh"), ie.transferToEffect(ee);
          const Ke = ye.Nf();
          this._uniformBuffer.bindToEffect(Me, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, ye, ie, ee, this.isFrozen), qi.b.Bind(Ke.currentRenderPassId, this._activeEffect, ie, ee, this);
          const Ue = ye.activeCamera;
          Ue ? this._uniformBuffer.updateFloat4("cameraInfo", Ue.minZ, Ue.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const Fe = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Fe[0], Fe[1], Fe[2], Fe[3]), this._eventInfo.subMesh = He, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), be.OBJECTSPACE_NORMALMAP && (ee.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const Je = this._mustRebind(ye, Me, He, ie.visibility),
            oe = Ke._features.needToAlwaysBindUniformBuffers;
          (0, re.g)(ie, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Ri.e)(this._activeEffect, this._vertexPullingMetadata);
          let Re = null;
          const ke = this._uniformBuffer;
          if (Je) {
            if (this.bindViewProjection(Me), Re = this._getReflectionTexture(), !ke.useUbo || !this.isFrozen || !ke.isSync || He._drawWrapper._forceRebindOnNextCall) {
              if (ye.texturesEnabled && (this._albedoTexture && Ne.c.DiffuseTextureEnabled && (ke.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, re.A)(this._albedoTexture, ke, "albedo")), this._baseWeightTexture && Ne.c.BaseWeightTextureEnabled && (ke.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, re.A)(this._baseWeightTexture, ke, "baseWeight")), this._baseDiffuseRoughnessTexture && Ne.c.BaseDiffuseRoughnessTextureEnabled && (ke.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, re.A)(this._baseDiffuseRoughnessTexture, ke, "baseDiffuseRoughness")), this._ambientTexture && Ne.c.AmbientTextureEnabled && (ke.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, re.A)(this._ambientTexture, ke, "ambient")), this._opacityTexture && Ne.c.OpacityTextureEnabled && (ke.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, re.A)(this._opacityTexture, ke, "opacity")), this._emissiveTexture && Ne.c.EmissiveTextureEnabled && (ke.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, re.A)(this._emissiveTexture, ke, "emissive")), this._lightmapTexture && Ne.c.LightmapTextureEnabled && (ke.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, re.A)(this._lightmapTexture, ke, "lightmap")), Ne.c.SpecularTextureEnabled && (this._metallicTexture ? (ke.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, re.A)(this._metallicTexture, ke, "reflectivity")) : this._reflectivityTexture && (ke.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, re.A)(this._reflectivityTexture, ke, "reflectivity")), this._metallicReflectanceTexture && (ke.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, re.A)(this._metallicReflectanceTexture, ke, "metallicReflectance")), this._reflectanceTexture && be.REFLECTANCE && (ke.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, re.A)(this._reflectanceTexture, ke, "reflectance")), this._microSurfaceTexture && (ke.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, re.A)(this._microSurfaceTexture, ke, "microSurfaceSampler"))), this._bumpTexture && Ke.getCaps().standardDerivatives && Ne.c.BumpTextureEnabled && !this._disableBumpMap && (ke.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, re.A)(this._bumpTexture, ke, "bump"), ye._mirroredCameraPosition ? ke.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : ke.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, re.l)(ye, be, ke, this._reflectionColor, Re, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && ke.updateFloat("pointSize", this.pointSize), be.METALLICWORKFLOW) {
                je.j.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, je.j.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const ee = this.subSurface?._indexOfRefraction ?? 1.5,
                  ie = 1;
                je.j.Color4[0].b = ee;
                const He = Math.pow((ee - ie) / (ee + ie), 2);
                je.j.Color4[0].a = He, ke.updateDirectColor4("vReflectivityColor", je.j.Color4[0]), ke.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else ke.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              ke.updateColor3("vEmissiveColor", Ne.c.EmissiveTextureEnabled ? this._emissiveColor : je.c.BlackReadOnly), !be.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? ke.updateColor4("vAlbedoColor", this._albedoColor, 1) : ke.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), ke.updateFloat("baseWeight", this._baseWeight), ke.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * ye.environmentIntensity, this._lightingInfos.w = this._specularIntensity, ke.updateVector4("vLightingIntensity", this._lightingInfos), ye.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), ke.updateColor3("vAmbientColor", this._globalAmbientColor), ke.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            ye.texturesEnabled && (this._albedoTexture && Ne.c.DiffuseTextureEnabled && ke.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && Ne.c.BaseWeightTextureEnabled && ke.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && Ne.c.BaseDiffuseRoughnessTextureEnabled && ke.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && Ne.c.AmbientTextureEnabled && ke.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && Ne.c.OpacityTextureEnabled && ke.setTexture("opacitySampler", this._opacityTexture), (0, re.n)(ye, be, ke, Re, this.realTimeFiltering), be.ENVIRONMENTBRDF && ke.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && Ne.c.EmissiveTextureEnabled && ke.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && Ne.c.LightmapTextureEnabled && ke.setTexture("lightmapSampler", this._lightmapTexture), Ne.c.SpecularTextureEnabled && (this._metallicTexture ? ke.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && ke.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && ke.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && be.REFLECTANCE && ke.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && ke.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && Ke.getCaps().standardDerivatives && Ne.c.BumpTextureEnabled && !this._disableBumpMap && ke.setTexture("bumpSampler", this._bumpTexture)), this.Xx().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ie) && this.Xx().depthPeelingRenderer.bind(Me), this._eventInfo.subMesh = He, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, oi.f)(this._activeEffect, this, ye), this.bindEyePosition(Me)
          } else oe && (this._needToBindSceneUbo = !0);
          !Je && this.isFrozen && !oe || !ye.lightsEnabled || this._disableLighting || (0, re.r)(ye, ie, this._activeEffect, be, this._maxSimultaneousLights), !Je && this.isFrozen || ((ye.fogEnabled && ie.applyFog && ye.fogMode !== Le.f.FOGMODE_NONE || Re || this.subSurface.refractionTexture || ie.receiveShadows || be.PREPASS || be.CLUSTLIGHT_BATCH) && this.bindView(Me), (0, re.k)(ye, ie, this._activeEffect, !0), be.NUM_MORPH_INFLUENCERS && (0, re.w)(ie, this._activeEffect), be.BAKED_VERTEX_ANIMATION_TEXTURE && ie.bakedVertexAnimationManager?.bind(Me, be.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, re.v)(be, this._activeEffect, ye)), this._afterBind(ie, this._activeEffect, He), ke.update()
        }
        getAnimatables() {
          const ee = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && ee.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && ee.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && ee.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && ee.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && ee.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && ee.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && ee.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? ee.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && ee.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && ee.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && ee.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && ee.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && ee.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && ee.push(this._microSurfaceTexture), ee
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.Xx().environmentTexture
        }
        getActiveTextures() {
          const ee = super.getActiveTextures();
          return this._albedoTexture && ee.push(this._albedoTexture), this._baseWeightTexture && ee.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && ee.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && ee.push(this._ambientTexture), this._opacityTexture && ee.push(this._opacityTexture), this._reflectionTexture && ee.push(this._reflectionTexture), this._emissiveTexture && ee.push(this._emissiveTexture), this._reflectivityTexture && ee.push(this._reflectivityTexture), this._metallicTexture && ee.push(this._metallicTexture), this._metallicReflectanceTexture && ee.push(this._metallicReflectanceTexture), this._reflectanceTexture && ee.push(this._reflectanceTexture), this._microSurfaceTexture && ee.push(this._microSurfaceTexture), this._bumpTexture && ee.push(this._bumpTexture), this._lightmapTexture && ee.push(this._lightmapTexture), ee
        }
        hasTexture(ee) {
          return !!super.hasTexture(ee) || (this._albedoTexture === ee || (this._baseWeightTexture === ee || (this._baseDiffuseRoughnessTexture === ee || (this._ambientTexture === ee || (this._opacityTexture === ee || (this._reflectionTexture === ee || (this._emissiveTexture === ee || (this._reflectivityTexture === ee || (this._metallicTexture === ee || (this._metallicReflectanceTexture === ee || (this._reflectanceTexture === ee || (this._microSurfaceTexture === ee || (this._bumpTexture === ee || this._lightmapTexture === ee)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const ee = this.Xx().enableSubSurfaceForPrePass();
          return ee && (ee.enabled = !0), !0
        }
        dispose(ee, ie) {
          this._breakShaderLoadedCheck = !0, ie && (this._environmentBRDFTexture && this.Xx().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(ee, ie)
        }
      }, ie = new WeakMap, (() => {
        const ie = "function" === typeof Symbol && Symbol.metadata ? Object.create(be[Symbol.metadata] ?? null) : void 0;
        ye = [(0, Ze.d)("_markAllSubMeshesAsMiscDirty")], (0, te.i)(ee, null, ye, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: ee => "debugMode" in ee,
            get: ee => ee.debugMode,
            set: (ee, ie) => {
              ee.debugMode = ie
            }
          },
          metadata: ie
        }, Ke, Ue), ie && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie
        })
      })(), ee.PBRMATERIAL_OPAQUE = Me.e.MATERIAL_OPAQUE, ee.PBRMATERIAL_ALPHATEST = Me.e.MATERIAL_ALPHATEST, ee.PBRMATERIAL_ALPHABLEND = Me.e.MATERIAL_ALPHABLEND, ee.PBRMATERIAL_ALPHATESTANDBLEND = Me.e.MATERIAL_ALPHATESTANDBLEND, ee.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, ee.LIGHTFALLOFF_PHYSICAL = 0, ee.LIGHTFALLOFF_GLTF = 1, ee.LIGHTFALLOFF_STANDARD = 2, ee.ForceGLSL = !1, ee._ShaderLoader = new ki.d((() => [Promise.all([He.e(626), He.e(637)]).then((() => He(64085))), Promise.all([He.e(631), He.e(627), He.e(688), He.e(640), He.e(687)]).then((() => He(64110)))]), (() => [Promise.all([He.e(645), He.e(647), He.e(654)]).then((() => He(64184))), Promise.all([He.e(645), He.e(648), He.e(691), He.e(658), He.e(690)]).then((() => He(64209)))])), ee
    })();
    Object.getOwnPropertyDescriptor(di.prototype, "decalMap") || Object.defineProperty(di.prototype, "decalMap", (0, zi.d)("PBRBaseMaterial", "decalMap")), (0, He(45036).d)();
    var Wi = He(41141);
    var ti = He(41203),
      Zi = He(45019),
      wi = He(40924),
      Di = He(40936),
      Pi = He(41059);
    let Ai = !1;
    const Yi = new je.g,
      Vi = new je.g;
    class ai extends Zi.e {
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
      set wrapU(ee) {
        if (this._textures)
          for (let ie = 0; ie < this._textures.length; ie++) this._textures[ie].wrapU = ee
      }
      set wrapV(ee) {
        if (this._textures)
          for (let ie = 0; ie < this._textures.length; ie++) this._textures[ie].wrapV = ee
      }
      constructor(ee, ie, He, ye, be, Me) {
        const Ke = !(!be || !be.generateMipMaps) && be.generateMipMaps,
          Ue = !(!be || !be.generateDepthTexture) && be.generateDepthTexture,
          Fe = be && be.depthTextureFormat ? be.depthTextureFormat : 15,
          Je = !be || void 0 === be.doNotChangeAspectRatio || be.doNotChangeAspectRatio,
          oe = !(!be || !be.drawOnlyOnFirstAttachmentByDefault) && be.drawOnlyOnFirstAttachmentByDefault;
        if (super(ee, ie, ye, Ke, Je, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Ai || (Ai = !0, Di.ThinEngine.prototype.restoreSingleAttachment = function() {
            const ee = this._gl;
            this.bindAttachments([ee.BACK])
          }, Di.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const ee = this._gl;
            this.bindAttachments([ee.COLOR_ATTACHMENT0])
          }, Di.ThinEngine.prototype.buildTextureLayout = function(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const He = this._gl,
              ye = [];
            if (ie) ye.push(He.BACK);
            else
              for (let be = 0; be < ee.length; be++) ee[be] ? ye.push(He["COLOR_ATTACHMENT" + be]) : ye.push(He.NONE);
            return ye
          }, Di.ThinEngine.prototype.bindAttachments = function(ee) {
            const ie = this._gl,
              He = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, He)
              for (let ye = 0; ye < ee.length; ye++) ee[ye] !== ie.NONE && He[ye] && (0, Pi.j)(He[ye].format) && (this._integerMRTAttachmentsMask |= 1 << ye);
            ie.drawBuffers(ee)
          }, Di.ThinEngine.prototype.clearAttachments = function(ee, ie, He, ye) {
            let be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const Ke = this._currentRenderTarget?.textures;
            let Ue = !1;
            if (He && ee && Ke)
              for (let Fe = 0; Fe < ie.length; Fe++) {
                const ee = Ke[Fe];
                if (ie[Fe] !== this._gl.NONE && ee && (0, Pi.j)(ee.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  Ue = !0;
                  break
                }
              }
            if (!Ue || !ee || !Ke) return this.bindAttachments(ie), void this.clear(ee, He, ye, be, Me);
            this.bindAttachments(ie), this._applyColorWriteState();
            for (let Fe = 0; Fe < ie.length; Fe++) {
              const He = Ke[Fe];
              if (ie[Fe] !== this._gl.NONE && He) {
                let ie = ee;
                if ((0, Pi.j)(He.format)) {
                  const ye = (0, Pi.k)(He.type);
                  ie = ye ? Yi : Vi;
                  const be = ye ? 255 : 1;
                  ie.r = Math.round(ee.r * be), ie.g = Math.round(ee.g * be), ie.b = Math.round(ee.b * be), ie.a = Math.round(ee.a * be)
                }
                this._clearColorAttachment(Fe, ie, He.format, He.type)
              }
            }
            if (ye || be) {
              const ee = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, ye, be, Me)
              } finally {
                this._integerMRTAttachmentsMask = ee
              }
            }
          }, Di.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              He = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, ee.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(ee), ie || this.generateMipMapsMultiFramebuffer(ee), He && (ee._MSAAFramebuffer && this._bindUnboundFramebuffer(ee._framebuffer), He()), this._bindUnboundFramebuffer(null)
          }, Di.ThinEngine.prototype.createMultipleRenderTarget = function(ee, ie) {
            let He, ye = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              be = !1,
              Me = !0,
              Ke = !1,
              Ue = !1,
              Fe = 1,
              Je = 1,
              oe = [],
              Re = [],
              ke = [],
              qe = [],
              fe = [],
              Te = [],
              pe = [],
              Xe = [],
              ze = [],
              Be = !1;
            const Ee = this._createHardwareRenderTargetWrapper(!0, !1, ee);
            void 0 !== ie && (be = void 0 !== ie.generateMipMaps && ie.generateMipMaps, Me = void 0 === ie.generateDepthBuffer || ie.generateDepthBuffer, Ke = void 0 !== ie.generateStencilBuffer && ie.generateStencilBuffer, Ue = void 0 !== ie.generateDepthTexture && ie.generateDepthTexture, Fe = ie.tFe ?? 1, Je = ie.samples ?? Je, oe = ie.types || oe, Re = ie.samplingModes || Re, ke = ie.useSRGBBuffers || ke, qe = ie.formats || qe, fe = ie.targetTypes || fe, Te = ie.faceIndex || Te, pe = ie.layerIndex || pe, Xe = ie.layerCounts || Xe, ze = ie.labels || ze, Be = ie.dontCreateTextures ?? !1, this.dT > 1 && (13 === ie.depthTextureFormat || 17 === ie.depthTextureFormat || 16 === ie.depthTextureFormat || 14 === ie.depthTextureFormat || 18 === ie.depthTextureFormat) && (He = ie.depthTextureFormat)), void 0 === He && (He = Ke ? 13 : 14);
            const ge = this._gl,
              Oe = this._currentFramebuffer,
              de = ge.createFramebuffer();
            this._bindUnboundFramebuffer(de);
            const We = ee.width ?? ee,
              te = ee.height ?? ee,
              Ze = [],
              De = [],
              Pe = this.dT > 1 && (13 === He || 17 === He || 18 === He);
            Ee.label = ie?.label ?? "MultiRenderTargetWrapper", Ee._framebuffer = de, Ee._generateDepthBuffer = Ue || Me, Ee._generateStencilBuffer = Ue ? Pe : Ke, Ee._depthStencilBuffer = this._setupFramebufferDepthAttachments(Ee._generateStencilBuffer, Ee._generateDepthBuffer, We, te, 1, He), Ee._attachments = De;
            for (let Ae = 0; Ae < Fe; Ae++) {
              let ee = Re[Ae] || 3,
                ie = oe[Ae] || 0,
                He = ke[Ae] || !1;
              const ye = qe[Ae] || 5,
                Me = fe[Ae] || 3553,
                Ke = Xe[Ae] ?? 1;
              (1 !== ie || this._caps.textureFloatLinearFiltering) && (2 !== ie || this._caps.textureHalfFloatLinearFiltering) || (ee = 1);
              const Ue = this._getSamplingParameters(ee, be);
              1 !== ie || this._caps.textureFloat || (ie = 0, we.e.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), He = He && this._caps.supportSRGBBuffers && (this.dT > 1 || this.isWebGPU);
              const Fe = this.dT > 1,
                Je = ge[Fe ? "COLOR_ATTACHMENT" + Ae : "COLOR_ATTACHMENT" + Ae + "_WEBGL"];
              if (De.push(Je), -1 === Me || Be) continue;
              const Te = new wi.b(this, 6);
              Ze[Ae] = Te, ge.activeTexture(ge["TEXTURE" + Ae]), ge.bindTexture(Me, Te._hardwareTexture.underlyingResource), ge.texParameteri(Me, ge.TEXTURE_MAG_FILTER, Ue.mag), ge.texParameteri(Me, ge.TEXTURE_MIN_FILTER, Ue.min), ge.texParameteri(Me, ge.TEXTURE_WRAP_S, ge.CLAMP_TO_EDGE), ge.texParameteri(Me, ge.TEXTURE_WRAP_T, ge.CLAMP_TO_EDGE);
              const pe = this._getRGBABufferInternalSizedFormat(ie, ye, He),
                Oe = this._getInternalFormat(ye),
                de = this._getWebGLTextureType(ie);
              if (!Fe || 35866 !== Me && 32879 !== Me)
                if (34067 === Me) {
                  for (let ee = 0; ee < 6; ee++) ge.texImage2D(ge.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, pe, We, te, 0, Oe, de, null);
                  Te.isCube = !0
                } else ge.texImage2D(ge.TEXTURE_2D, 0, pe, We, te, 0, Oe, de, null);
              else 35866 === Me ? Te.is2DArray = !0 : Te.is3D = !0, Te.baseDepth = Te.depth = Ke, ge.texImage3D(Me, 0, pe, We, te, Ke, 0, Oe, de, null);
              be && ge.generateMipmap(Me), this._bindTextureDirectly(Me, null), Te.baseWidth = We, Te.baseHeight = te, Te.width = We, Te.height = te, Te.isReady = !0, Te.samples = 1, Te.generateMipMaps = be, Te.samplingMode = ee, Te.type = ie, Te._useSRGBBuffer = He, Te.format = ye, Te.label = ze[Ae] ?? Ee.label + "-Texture" + Ae, this._internalTexturesCache.push(Te)
            }
            if (Ue && this._caps.depthTextureExtension && !Be) {
              const ee = new wi.b(this, 14);
              let ie = 5,
                ye = ge.DEPTH_COMPONENT16,
                Me = ge.DEPTH_COMPONENT,
                Ke = ge.UNSIGNED_SHORT,
                Ue = ge.DEPTH_ATTACHMENT;
              this.dT < 2 ? ye = ge.DEPTH_COMPONENT : 14 === He ? (ie = 1, Ke = ge.FLOAT, ye = ge.DEPTH_COMPONENT32F) : 18 === He ? (ie = 0, Ke = ge.FLOAT_32_UNSIGNED_INT_24_8_REV, ye = ge.DEPTH32F_STENCIL8, Me = ge.DEPTH_STENCIL, Ue = ge.DEPTH_STENCIL_ATTACHMENT) : 16 === He ? (ie = 0, Ke = ge.UNSIGNED_INT, ye = ge.DEPTH_COMPONENT24, Ue = ge.DEPTH_ATTACHMENT) : 13 !== He && 17 !== He || (ie = 12, Ke = ge.UNSIGNED_INT_24_8, ye = ge.DEPTH24_STENCIL8, Me = ge.DEPTH_STENCIL, Ue = ge.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(ge.TEXTURE_2D, ee, !0), ge.texParameteri(ge.TEXTURE_2D, ge.TEXTURE_MAG_FILTER, ge.NEAREST), ge.texParameteri(ge.TEXTURE_2D, ge.TEXTURE_MIN_FILTER, ge.NEAREST), ge.texParameteri(ge.TEXTURE_2D, ge.TEXTURE_WRAP_S, ge.CLAMP_TO_EDGE), ge.texParameteri(ge.TEXTURE_2D, ge.TEXTURE_WRAP_T, ge.CLAMP_TO_EDGE), ge.texImage2D(ge.TEXTURE_2D, 0, ye, We, te, 0, Me, Ke, null), ge.framebufferTexture2D(ge.FRAMEBUFFER, Ue, ge.TEXTURE_2D, ee._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(ge.TEXTURE_2D, null), Ee._depthStencilTexture = ee, Ee._depthStencilTextureWithStencil = Pe, ee.baseWidth = We, ee.baseHeight = te, ee.width = We, ee.height = te, ee.isReady = !0, ee.samples = 1, ee.generateMipMaps = be, ee.samplingMode = 1, ee.format = He, ee.type = ie, ee.label = Ee.label + "-DepthStencil", Ze[Fe] = ee, this._internalTexturesCache.push(ee)
            }
            if (Ee.setTextures(Ze), ye && ge.drawBuffers(De), this._bindUnboundFramebuffer(Oe), Ee.setLayerAndFaceIndices(pe, Te), this.resetTextureCache(), Be) {
              if (Je > 1) {
                const ee = ge.createFramebuffer();
                if (!ee) throw new Error("Unable to create multi sampled framebuffer");
                Ee._samples = Je, Ee._MSAAFramebuffer = ee, Fe > 0 && ye && (this._bindUnboundFramebuffer(ee), ge.drawBuffers(De), this._bindUnboundFramebuffer(Oe))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(Ee, Je, ye);
            return Ee
          }, Di.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(ee, ie) {
            let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.dT < 2 || !ee) return 1;
            if (ee.samples === ie) return ie;
            const ye = this._gl;
            ie = Math.min(ie, this.getCaps().maxMSAASamples), ee._depthStencilBuffer && (ye.deleteRenderbuffer(ee._depthStencilBuffer), ee._depthStencilBuffer = null), ee._MSAAFramebuffer && (ye.deleteFramebuffer(ee._MSAAFramebuffer), ee._MSAAFramebuffer = null);
            const be = ee._attachments.length;
            for (let Ke = 0; Ke < be; Ke++) {
              const ie = ee.textures[Ke]._hardwareTexture;
              ie?.releaseMSAARenderBuffers()
            }
            if (ie > 1 && "function" === typeof ye.renderbufferStorageMultisample) {
              const Me = ye.createFramebuffer();
              if (!Me) throw new Error("Unable to create multi sampled framebuffer");
              ee._MSAAFramebuffer = Me, this._bindUnboundFramebuffer(Me);
              const Ke = [];
              for (let He = 0; He < be; He++) {
                const be = ee.textures[He],
                  Me = be._hardwareTexture,
                  Ue = ye[this.dT > 1 ? "COLOR_ATTACHMENT" + He : "COLOR_ATTACHMENT" + He + "_WEBGL"],
                  Fe = this._createRenderBuffer(be.width, be.height, ie, -1, this._getRGBABufferInternalSizedFormat(be.type, be.format, be._useSRGBBuffer), Ue);
                if (!Fe) throw new Error("Unable to create multi sampled framebuffer");
                Me.addMSAARenderBuffer(Fe), be.samples = ie, Ke.push(Ue)
              }
              He && ye.drawBuffers(Ke)
            } else this._bindUnboundFramebuffer(ee._framebuffer);
            const Me = ee._depthStencilTexture ? ee._depthStencilTexture.format : void 0;
            return ee._depthStencilBuffer = this._setupFramebufferDepthAttachments(ee._generateStencilBuffer, ee._generateDepthBuffer, ee.width, ee.height, ie, Me), this._bindUnboundFramebuffer(null), ee._samples = ie, ie
          }, Di.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(ee) {
            const ie = ee,
              He = this._gl;
            if (ie.isMulti)
              for (let ye = 0; ye < ie._attachments.length; ye++) {
                const ee = ie.textures[ye];
                !ee?.generateMipMaps || ee?.isCube || ee?.is3D || (this._bindTextureDirectly(He.TEXTURE_2D, ee, !0), He.generateMipmap(He.TEXTURE_2D), this._bindTextureDirectly(He.TEXTURE_2D, null))
              }
          }, Di.ThinEngine.prototype.resolveMultiFramebuffer = function(ee) {
            const ie = ee,
              He = this._gl;
            if (!ie._MSAAFramebuffer || !ie.isMulti) return;
            let ye = ie.resolveMSAAColors ? He.COLOR_BUFFER_BIT : 0;
            ye |= ie._generateDepthBuffer && ie.resolveMSAADepth ? He.DEPTH_BUFFER_BIT : 0, ye |= ie._generateStencilBuffer && ie.resolveMSAAStencil ? He.STENCIL_BUFFER_BIT : 0;
            const be = ie._attachments,
              Me = be.length;
            He.bindFramebuffer(He.READ_FRAMEBUFFER, ie._MSAAFramebuffer), He.bindFramebuffer(He.DRAW_FRAMEBUFFER, ie._framebuffer);
            for (let Ke = 0; Ke < Me; Ke++) {
              const ee = ie.textures[Ke];
              for (let ie = 0; ie < Me; ie++) be[ie] = He.NONE;
              be[Ke] = He[this.dT > 1 ? "COLOR_ATTACHMENT" + Ke : "COLOR_ATTACHMENT" + Ke + "_WEBGL"], He.readBuffer(be[Ke]), He.drawBuffers(be), He.blitFramebuffer(0, 0, ee.width, ee.height, 0, 0, ee.width, ee.height, ye, He.NEAREST)
            }
            for (let Ke = 0; Ke < Me; Ke++) be[Ke] = He[this.dT > 1 ? "COLOR_ATTACHMENT" + Ke : "COLOR_ATTACHMENT" + Ke + "_WEBGL"];
            He.drawBuffers(be), He.bindFramebuffer(this._gl.FRAMEBUFFER, ie._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = Me;
        const Re = [],
          ke = [],
          qe = [],
          fe = [],
          Te = [],
          pe = [],
          Xe = [],
          ze = [];
        this._initTypes(He, Re, ke, qe, fe, Te, pe, Xe, ze, be);
        const Be = !be || void 0 === be.generateDepthBuffer || be.generateDepthBuffer,
          Ee = !(!be || void 0 === be.generateStencilBuffer) && be.generateStencilBuffer,
          ge = be && be.samples ? be.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: ke,
          generateMipMaps: Ke,
          generateDepthBuffer: Be,
          generateStencilBuffer: Ee,
          generateDepthTexture: Ue,
          depthTextureFormat: Fe,
          types: Re,
          tFe: He,
          useSRGBBuffers: qe,
          samples: ge,
          formats: fe,
          targetTypes: Te,
          faceIndex: pe,
          layerIndex: Xe,
          layerCounts: ze,
          labels: Me,
          label: ee
        }, this._count = He, this._drawOnlyOnFirstAttachmentByDefault = oe, He > 0 && (this._createInternalTextures(), this._createTextures(Me))
      }
      _initTypes(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) {
        for (let oe = 0; oe < ee; oe++) Je && Je.types && void 0 !== Je.types[oe] ? ie.push(Je.types[oe]) : ie.push(Je && Je.defaultType ? Je.defaultType : 0), Je && Je.samplingModes && void 0 !== Je.samplingModes[oe] ? He.push(Je.samplingModes[oe]) : He.push(Pe.e.BILINEAR_SAMPLINGMODE), Je && Je.useSRGBBuffers && void 0 !== Je.useSRGBBuffers[oe] ? ye.push(Je.useSRGBBuffers[oe]) : ye.push(!1), Je && Je.formats && void 0 !== Je.formats[oe] ? be.push(Je.formats[oe]) : be.push(5), Je && Je.targetTypes && void 0 !== Je.targetTypes[oe] ? Me.push(Je.targetTypes[oe]) : Me.push(3553), Je && Je.faceIndex && void 0 !== Je.faceIndex[oe] ? Ke.push(Je.faceIndex[oe]) : Ke.push(0), Je && Je.layerIndex && void 0 !== Je.layerIndex[oe] ? Ue.push(Je.layerIndex[oe]) : Ue.push(0), Je && Je.layerCounts && void 0 !== Je.layerCounts[oe] ? Fe.push(Je.layerCounts[oe]) : Fe.push(1)
      }
      _createInternaTextureIndexMapping() {
        const ee = {},
          ie = [];
        if (!this._renderTarget) return ie;
        const He = this._renderTarget.textures;
        for (let ye = 0; ye < He.length; ye++) {
          const be = He[ye];
          if (!be) continue;
          const Me = ee[be.uniqueId];
          void 0 !== Me ? ie[ye] = Me : ee[be.uniqueId] = ye
        }
        return ie
      }
      _rebuild() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || ee) return;
        const ye = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), ie && (this._releaseTextures(), this._createTextures(He));
        const be = this._renderTarget.textures;
        for (let Me = 0; Me < be.length; Me++) {
          const ee = this._textures[Me];
          void 0 !== ye[Me] && this._renderTarget.setTexture(be[ye[Me]], Me), ee._texture = be[Me], ee._texture && (ee._noMipmap = !ee._texture.useMipMaps, ee._useSRGBBuffer = ee._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let ee = 0; ee < this._textures.length; ee++) this._textures[ee]._texture = null, this._textures[ee].dispose()
      }
      _createTextures(ee) {
        const ie = this._renderTarget.textures;
        this._textures = [];
        for (let He = 0; He < ie.length; He++) {
          const ye = new Pe.e(null, this.Xx());
          ee?.[He] && (ye.name = ee[He]), ye._texture = ie[He], ye._texture && (ye._noMipmap = !ye._texture.useMipMaps, ye._useSRGBBuffer = ye._texture._useSRGBBuffer), this._textures.push(ye)
        }
      }
      setInternalTexture(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === ie && (this._texture = ee), this.renderTarget.setTexture(ee, ie, He), this.textures[ie] || (this.textures[ie] = new Pe.e(null, this.Xx()), this.textures[ie].name = this._textureNames?.[ie] ?? this.textures[ie].name), this.textures[ie]._texture = ee, this.textures[ie]._noMipmap = !ee.useMipMaps, this.textures[ie]._useSRGBBuffer = ee._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[ie] = ee.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[ie] = ee.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[ie] = ee._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[ie])) {
          let He;
          He = ee.is2DArray ? 35866 : ee.isCube ? 34067 : ee.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[ie] = He
        }
      }
      setLayerAndFaceIndex(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[ee] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[ee] = ie), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[ee] = He), this.renderTarget.setLayerAndFaceIndex(ee, ie, He))
      }
      setLayerAndFaceIndices(ee, ie) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = ee, this._multiRenderTargetOptions.faceIndex = ie, this.renderTarget.setLayerAndFaceIndices(ee, ie))
      }
      get samples() {
        return this._samples
      }
      set samples(ee) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(ee) : this._samples = ee
      }
      resize(ee) {
        this._processSizeParameter(ee), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(ee, ie, He) {
        this._multiRenderTargetOptions.tFe = ee, this._count = ee;
        const ye = [],
          be = [],
          Me = [],
          Ke = [],
          Ue = [],
          Fe = [],
          Je = [],
          oe = [];
        this._textureNames = He, this._initTypes(ee, ye, be, Me, Ke, Ue, Fe, Je, oe, ie), this._multiRenderTargetOptions.types = ye, this._multiRenderTargetOptions.samplingModes = be, this._multiRenderTargetOptions.useSRGBBuffers = Me, this._multiRenderTargetOptions.formats = Ke, this._multiRenderTargetOptions.targetTypes = Ue, this._multiRenderTargetOptions.faceIndex = Fe, this._multiRenderTargetOptions.layerIndex = Je, this._multiRenderTargetOptions.layerCounts = oe, this._multiRenderTargetOptions.labels = He, this._rebuild(!1, !0, He)
      }
      _unbindFrameBuffer(ee, ie) {
        this._renderTarget && ee.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(ie)
        }))
      }
      dispose() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), ee ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const ee = this._renderTarget?.textures;
        if (ee) {
          for (let ie = ee.length - 1; ie >= 0; ie--) this._textures[ie]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var ci = He(41279);
    class xi {
      constructor(ee) {
        this.name = ci.c.NAME_GEOMETRYBUFFERRENDERER, this.yp = ee
      }
      register() {
        this.yp._gatherRenderTargetsStage.registerStep(ci.c.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(ee) {
        this.yp._geometryBufferRenderer && ee.push(this.yp._geometryBufferRenderer.getGBuffer())
      }
    }
    let Li = !1;
    var Ci;
    ! function(ee) {
      ee[ee.Small = 0] = "Small", ee[ee.Medium = 1] = "Medium", ee[ee.Large = 2] = "Large", ee[ee.ExtraLarge = 3] = "ExtraLarge"
    }(Ci || (Ci = {}));
    const vi = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      ui = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class mi {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(ee) {
        if (ee && this._enableMeshBlendTag && !this._scene.Nf().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = ee
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(ee) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = ee, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(ee, ie) {
        ee === mi.POSITION_TEXTURE_TYPE ? (this._positionIndex = ie, this._enablePosition = !0) : ee === mi.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = ie, this._enableVelocity = !0) : ee === mi.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = ie, this._enableVelocityLinear = !0) : ee === mi.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = ie, this._enableReflectivity = !0) : ee === mi.DEPTH_TEXTURE_TYPE ? (this._depthIndex = ie, this._enableDepth = !0) : ee === mi.NORMAL_TEXTURE_TYPE ? (this._normalIndex = ie, this._enableNormal = !0) : ee === mi.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = ie, this._enableScreenspaceDepth = !0) : ee === mi.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = ie, this._enableIrradiance = !0) : ee === mi.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = ie, this._enableObjectId = !0) : ee === mi.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = ie, this._enableMeshBlendTag = !0)
      }
      _setAttachments(ee) {
        this._attachmentsFromPrePass = ee
      }
      _linkInternalTexture(ee) {
        this._multiRenderTarget.setInternalTexture(ee, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(ee) {
        this._multiRenderTarget.renderList = ee
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(ee) {
        switch (ee) {
          case mi.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case mi.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case mi.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case mi.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case mi.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case mi.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case mi.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case mi.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case mi.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case mi.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(ee) {
        this._enableDepth = ee, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(ee) {
        this._enableNormal = ee, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(ee) {
        this._enablePosition = ee, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(ee) {
        this._enableVelocity = ee, ee || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = ee
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(ee) {
        this._enableVelocityLinear = ee, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(ee) {
        this._enableReflectivity = ee, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(ee) {
        this._enableScreenspaceDepth = ee, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(ee) {
        this._enableIrradiance = ee, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(ee) {
        if (ee && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (ee && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (ee && !this._enableObjectId && !this._linkedWithPrePass) {
          const ee = this._scene.Nf(),
            ie = Math.min(ee.getCaps().maxDrawBuffers ?? 1, 8),
            He = this._assignRenderTargetIndices()[0] + 1;
          if (ee.getCaps().drawBuffersExtension && He > ie) throw new Error(`GeometryBufferRenderer: ${He} color attachments were requested, but this engine supports at most ${ie}`)
        }
        this._enableObjectId = ee, ee || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(ee) {
        if (this._enableMeshBlendTag !== ee) {
          if (ee) {
            const ee = this._scene.Nf();
            if (! function(ee) {
                return "NATIVE" !== ee.shaderPlatformName && (ee.isWebGPU || 2 === ee.dT)
              }(ee)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !ee.isWebGPU && !ee.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const ie = Math.min(ee.getCaps().maxDrawBuffers ?? 1, 8),
                He = this._assignRenderTargetIndices()[0] + 1;
              if (ee.getCaps().drawBuffersExtension && He > ie) throw new Error(`GeometryBufferRenderer: ${He} color attachments were requested, but this engine supports at most ${ie}`)
            }
          }
          this._enableMeshBlendTag = ee, ee || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get yp() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          ye = arguments.length > 3 ? arguments[3] : void 0;
        var be;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new je.g(0, 0, 0, 0), this._clearDepthColor = new je.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = ee, this._ratioOrDimensions = ie, this._useUbo = ee.Nf().supportsUniformBuffers, this._depthFormat = He, this._textureTypesAndFormats = ye || {}, this._initShaderSourceAsync(), be = mi, Li || (Li = !0, Object.defineProperty(Le.f.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(ee) {
            ee && ee.isSupported && (this._geometryBufferRenderer = ee)
          },
          enumerable: !0,
          configurable: !0
        }), Le.f.prototype.enableGeometryBufferRenderer = function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            He = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new be(this, ee, ie, He), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, Le.f.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, be._SceneComponentInitialization = ee => {
          let ie = ee._getComponent(ci.c.NAME_GEOMETRYBUFFERRENDERER);
          ie || (ie = new xi(ee), ee.Cbe(ie))
        }), mi._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.Nf().isWebGPU && !mi.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([He.e(646).then((() => He(64391))), Promise.all([He.e(645), He.e(657)]).then((() => He(64400)))])) : await Promise.all([He.e(629).then((() => He(64407))), He.e(628).then((() => He(64409)))]), this._shadersLoaded = !0
      }
      isReady(ee, ie) {
        if (!this._shadersLoaded) return !1;
        const He = ee.iT();
        if (He && He.disableDepthWrite) return !1;
        if (function(ee) {
            return ee._isGaussianSplatting || "GaussianSplattingMesh" === (ie = ee.getClassName()) || "GaussianSplattingStream" === ie;
            var ie
          }(ee.getMesh())) return !1;
        const ye = [],
          be = [ve.h.PositionKind],
          Me = ee.getMesh();
        Me.isVerticesDataPresent(ve.h.NormalKind) && (ye.push("#define HAS_NORMAL_ATTRIBUTE"), be.push(ve.h.NormalKind));
        let Ke = !1,
          Ue = !1;
        if (He) {
          let ee = !1;
          if (He.needAlphaTestingForMesh(Me) && He.getAlphaTestTexture() && (ye.push("#define ALPHATEST"), ye.push(`#define ALPHATEST_UV${He.getAlphaTestTexture().coordinatesIndex+1}`), ee = !0), (He.bumpTexture || He.normalTexture || He.geometryNormalTexture) && Ne.c.BumpTextureEnabled) {
            const ie = He.bumpTexture || He.normalTexture || He.geometryNormalTexture;
            ye.push("#define BUMP"), ye.push(`#define BUMP_UV${ie.coordinatesIndex+1}`), ee = !0
          }
          if (this._enableReflectivity) {
            let ie = !1;
            if ("PBRMetallicRoughnessMaterial" === He.getClassName()) He.metallicRoughnessTexture && (ye.push("#define ORMTEXTURE"), ye.push(`#define REFLECTIVITY_UV${He.metallicRoughnessTexture.coordinatesIndex+1}`), ye.push("#define METALLICWORKFLOW"), ee = !0, ie = !0), null != He.metallic && (ye.push("#define METALLIC"), ye.push("#define METALLICWORKFLOW"), ie = !0), null != He.roughness && (ye.push("#define ROUGHNESS"), ye.push("#define METALLICWORKFLOW"), ie = !0), ie && (He.baseTexture && (ye.push("#define ALBEDOTEXTURE"), ye.push(`#define ALBEDO_UV${He.baseTexture.coordinatesIndex+1}`), He.baseTexture.gammaSpace && ye.push("#define GAMMAALBEDO"), ee = !0), He.baseColor && ye.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === He.getClassName()) He.specularGlossinessTexture ? (ye.push("#define SPECULARGLOSSINESSTEXTURE"), ye.push(`#define REFLECTIVITY_UV${He.specularGlossinessTexture.coordinatesIndex+1}`), ee = !0, He.specularGlossinessTexture.gammaSpace && ye.push("#define GAMMAREFLECTIVITYTEXTURE")) : He.specularColor && ye.push("#define REFLECTIVITYCOLOR"), null != He.glossiness && ye.push("#define GLOSSINESS");
            else if ("PBRMaterial" === He.getClassName()) He.metallicTexture && (ye.push("#define ORMTEXTURE"), ye.push(`#define REFLECTIVITY_UV${He.metallicTexture.coordinatesIndex+1}`), ye.push("#define METALLICWORKFLOW"), ee = !0, ie = !0), null != He.metallic && (ye.push("#define METALLIC"), ye.push("#define METALLICWORKFLOW"), ie = !0), null != He.roughness && (ye.push("#define ROUGHNESS"), ye.push("#define METALLICWORKFLOW"), ie = !0), ie ? (He.albedoTexture && (ye.push("#define ALBEDOTEXTURE"), ye.push(`#define ALBEDO_UV${He.albedoTexture.coordinatesIndex+1}`), He.albedoTexture.gammaSpace && ye.push("#define GAMMAALBEDO"), ee = !0), He.albedoColor && ye.push("#define ALBEDOCOLOR")) : (He.reflectivityTexture ? (ye.push("#define SPECULARGLOSSINESSTEXTURE"), ye.push(`#define REFLECTIVITY_UV${He.reflectivityTexture.coordinatesIndex+1}`), He.reflectivityTexture.gammaSpace && ye.push("#define GAMMAREFLECTIVITYTEXTURE"), ee = !0) : He.reflectivityColor && ye.push("#define REFLECTIVITYCOLOR"), null != He.microSurface && ye.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === He.getClassName()) He.specularTexture && (ye.push("#define REFLECTIVITYTEXTURE"), ye.push(`#define REFLECTIVITY_UV${He.specularTexture.coordinatesIndex+1}`), He.specularTexture.gammaSpace && ye.push("#define GAMMAREFLECTIVITYTEXTURE"), ee = !0), He.specularColor && ye.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === He.getClassName()) {
              const ie = He;
              ye.push("#define METALLIC"), ye.push("#define ROUGHNESS"), ie._useRoughnessFromMetallicTextureGreen && ie.baseMetalnessTexture ? (ye.push("#define ORMTEXTURE"), ye.push(`#define REFLECTIVITY_UV${ie.baseMetalnessTexture.coordinatesIndex+1}`), ee = !0) : ie.baseMetalnessTexture ? (ye.push("#define METALLIC_TEXTURE"), ye.push(`#define METALLIC_UV${ie.baseMetalnessTexture.coordinatesIndex+1}`), ee = !0) : ie.specularRoughnessTexture && (ye.push("#define ROUGHNESS_TEXTURE"), ye.push(`#define ROUGHNESS_UV${ie.specularRoughnessTexture.coordinatesIndex+1}`), ee = !0), ie.baseColorTexture && (ye.push("#define ALBEDOTEXTURE"), ye.push(`#define ALBEDO_UV${ie.baseColorTexture.coordinatesIndex+1}`), ie.baseColorTexture.gammaSpace && ye.push("#define GAMMAALBEDO"), ee = !0), ie.baseColor && ye.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (ye.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === He.getClassName())) {
            const ie = He;
            ie.subsurfaceWeight > 0 && ie.subsurfaceWeightTexture && (ye.push("#define SUBSURFACE_WEIGHT"), ye.push(`#define SUBSURFACEWEIGHT_UV${ie.subsurfaceWeightTexture.coordinatesIndex+1}`), ee = !0), ie.transmissionWeight > 0 && ie.transmissionWeightTexture && (ye.push("#define TRANSMISSION_WEIGHT"), ye.push(`#define TRANSMISSIONWEIGHT_UV${ie.transmissionWeightTexture.coordinatesIndex+1}`), ee = !0)
          }
          ee && (ye.push("#define NEED_UV"), Me.isVerticesDataPresent(ve.h.UVKind) && (be.push(ve.h.UVKind), ye.push("#define UV1"), Ke = !0), Me.isVerticesDataPresent(ve.h.UV2Kind) && (be.push(ve.h.UV2Kind), ye.push("#define UV2"), Ue = !0))
        }
        if (this._enableDepth && (ye.push("#define DEPTH"), ye.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (ye.push("#define NORMAL"), ye.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (ye.push("#define POSITION"), ye.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (ye.push("#define VELOCITY"), ye.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Me) && ye.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (ye.push("#define VELOCITY_LINEAR"), ye.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Me) && ye.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (ye.push("#define REFLECTIVITY"), ye.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (ye.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), ye.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          ye.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), ye.push("#define IRRADIANCE");
          const ee = this._scene;
          if (ee.environmentTexture) {
            const ie = {};
            let be = !1,
              Me = 0;
            "OpenPBRMaterial" !== He.getClassName() && "StandardMaterial" !== He.getClassName() && "PBRMetallicRoughnessMaterial" !== He.getClassName() && "PBRSpecularGlossinessMaterial" !== He.getClassName() && "PBRMaterial" !== He.getClassName() || (be = !!He.realtimeFiltering, Me = He.realtimeFilteringQuality || 0), (0, re.V)(ee, ee.environmentTexture, ie, be, Me, !0);
            for (const ee in ie) ie[ee] && ye.push("#define " + ee);
            ie.USEIRRADIANCEMAP || ye.push("#define SPHERICAL_HARMONICS");
            const Ke = ee.postProcessRenderPipelineManager.supportedPipelines.find((ee => "IBLShadowsRenderPipeline" === ee.getClassName()));
            if (Ke) {
              const ee = Ke;
              ee._getAccumulatedTexture() && (ye.push("#define IBL_SHADOW_TEXTURE"), ee.coloredShadows && ye.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (ye.push("#define OBJECT_ID"), ye.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (ye.push("#define MESH_BLEND_TAG"), ye.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && ye.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && ye.push("#define ENCODE_NORMAL"), Me.useBones && Me.computeBonesUsingShaders && Me.skeleton ? (be.push(ve.h.MatricesIndicesKind), be.push(ve.h.MatricesWeightsKind), Me.numBoneInfluencers > 4 && (be.push(ve.h.MatricesIndicesExtraKind), be.push(ve.h.MatricesWeightsExtraKind)), ye.push("#define NUM_BONE_INFLUENCERS " + Me.numBoneInfluencers), ye.push("#define BONETEXTURE " + Me.skeleton.isUsingTextureForMatrices), ye.push("#define BonesPerMesh " + (Me.skeleton.bones.length + 1))) : (ye.push("#define NUM_BONE_INFLUENCERS 0"), ye.push("#define BONETEXTURE false"), ye.push("#define BonesPerMesh 0"));
        const Fe = Me.morphTargetManager ? (0, re.R)(Me.morphTargetManager, ye, be, Me, !0, !0, !1, Ke, Ue, !1) : 0;
        ie && (ye.push("#define INSTANCES"), (0, re.rb)(be, this._enableVelocity || this._enableVelocityLinear), ee.getRenderingMesh().hasThinInstances && ye.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? ye.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : ye.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, oi.k)(He, this._scene, ye);
        const Je = this._scene.Nf(),
          oe = ee._getDrawWrapper(void 0, !0),
          Re = oe.defines,
          ke = ye.join("\n");
        return Re !== ke && oe.setEffect(Je.createEffect("geometry", {
          attributes: be,
          uniformsNames: ui,
          samplers: vi,
          defines: ke,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: Fe
          },
          shaderLanguage: this.shaderLanguage
        }, Je), ke), oe.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(ee) {
        if (this._enableObjectId && 1 !== ee) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== ee) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = ee
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.Nf().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.yp.Nf()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.yp.Nf().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const ee = [],
          ie = [];
        let He = 0;
        return this._enableDepth && (this._depthIndex = He, He++, ee.push("gBuffer_Depth"), ie.push(this._textureTypesAndFormats[mi.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = He, He++, ee.push("gBuffer_Normal"), ie.push(this._textureTypesAndFormats[mi.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = He, He++, ee.push("gBuffer_Position"), ie.push(this._textureTypesAndFormats[mi.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = He, He++, ee.push("gBuffer_Velocity"), ie.push(this._textureTypesAndFormats[mi.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = He, He++, ee.push("gBuffer_VelocityLinear"), ie.push(this._textureTypesAndFormats[mi.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = He, He++, ee.push("gBuffer_Reflectivity"), ie.push(this._textureTypesAndFormats[mi.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = He, He++, ee.push("gBuffer_ScreenspaceDepth"), ie.push(this._textureTypesAndFormats[mi.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = He, He++, ee.push("gBuffer_Irradiance"), ie.push(this._textureTypesAndFormats[mi.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = He, He++, ee.push("gBuffer_ObjectId"), ie.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = He, He++, ee.push("gBuffer_MeshBlendTag"), ie.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [He, ee, ie]
      }
      _createRenderTargets() {
        const ee = this._scene.Nf(),
          [ie, He, ye] = this._assignRenderTargetIndices(),
          be = Math.min(ee.getCaps().maxDrawBuffers ?? 1, 8);
        if (ee.getCaps().drawBuffersExtension && ie > be) throw new Error(`GeometryBufferRenderer: ${ie} color attachments were requested, but this engine supports at most ${be}`);
        let Ke = 0;
        ee._caps.textureFloat && ee._caps.textureFloatLinearFiltering ? Ke = 1 : ee._caps.textureHalfFloat && ee._caps.textureHalfFloatLinearFiltering && (Ke = 2);
        const Ue = this._getRenderTargetDimensions(),
          Fe = [],
          Je = [],
          oe = [];
        for (const Me of ye) Me ? (Fe.push(Me.textureType), Je.push(Me.textureFormat), oe.push(Me.samplingMode ?? 2)) : (Fe.push(Ke), Je.push(5), oe.push(2));
        if (this._normalsAreUnsigned = 11 === Fe[mi.NORMAL_TEXTURE_TYPE] || 13 === Fe[mi.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new ai("gBuffer", Ue, ie, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: Fe,
            formats: Je,
            samplingModes: oe,
            depthTextureFormat: this._depthFormat
          }, He.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = Pe.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = Pe.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const Re = [!0],
          ke = [!1],
          qe = [!0];
        for (let Me = 1; Me < ie; ++Me) Re.push(!0), qe.push(!1), ke.push(!0);
        const fe = ee.buildTextureLayout(Re),
          Te = ee.buildTextureLayout(ke),
          pe = ee.buildTextureLayout(qe);
        this._multiRenderTarget.onClearObservable.add((ee => {
          const ie = this.useSpecificClearForDepthTexture ? Te : fe;
          ee.clearAttachments(this._clearColor, ie, !0, !0, !0), this.useSpecificClearForDepthTexture && ee.clearAttachments(this._clearDepthColor, pe, !0, !1, !1), ee.bindAttachments(fe)
        })), this._resizeObserver = ee.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const Xe = ee => {
          const ie = ee.getRenderingMesh(),
            He = ee.getEffectiveMesh(),
            ye = this._scene,
            be = ye.Nf(),
            Ke = ee.iT();
          if (!Ke) return;
          if (He._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[He.uniqueId] && (this._previousTransformationMatrices[He.uniqueId] = {
              xR: Ce.b.Identity(),
              viewProjection: ye.getTransformMatrix()
            }, ie.skeleton)) {
            const ee = ie.skeleton.getTransformMatrices(ie);
            this._previousBonesTransformationMatrices[ie.uniqueId] = this._copyBonesTransformationMatrices(ee, new Float32Array(ee.length))
          }
          const Ue = ie._getInstancesRenderList(ee._id, !!ee.getReplacementMesh());
          if (Ue.mustReturn) return;
          const Fe = be.getCaps().instancedArrays && (null !== Ue.visibleInstances[ee._id] || ie.hasThinInstances),
            Je = He.getWorldMatrix();
          if (this.isReady(ee, Fe)) {
            const oe = ee._getDrawWrapper();
            if (!oe) return;
            const Re = oe.effect;
            let ke;
            be.enableEffect(oe), Fe || ie._bind(ee, Re, Ke.fillMode), this._useUbo ? ((0, re.x)(Re, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (Re.setMatrix("viewProjection", ye.getTransformMatrix()), Re.setMatrix("view", ye.getViewMatrix()), this._scene.bindEyePosition(Re, "vEyePosition"));
            if (ie._instanceDataStorage.isFrozen || !Ke.backFaceCulling && null === Ke.sideOrientation) ke = ie._effectiveSideOrientation;
            else {
              const ee = He._getWorldMatrixDeterminant();
              ke = Ke._getEffectiveOrientation(ie), ee < 0 && (ke = ke === Me.e.ClockWiseSideOrientation ? Me.e.CounterClockWiseSideOrientation : Me.e.ClockWiseSideOrientation)
            }
            if (Ke._preBind(oe, ke), Ke.needAlphaTestingForMesh(He)) {
              const ee = Ke.getAlphaTestTexture();
              ee && (Re.setTexture("diffuseSampler", ee), Re.setMatrix("diffuseMatrix", ee.getTextureMatrix()), Re.setFloat("alphaCutOff", Ke.alphaCutOff ?? .4))
            }
            if ((Ke.bumpTexture || Ke.normalTexture || Ke.geometryNormalTexture) && ye.Nf().getCaps().standardDerivatives && Ne.c.BumpTextureEnabled) {
              const ee = Ke.bumpTexture || Ke.normalTexture || Ke.geometryNormalTexture;
              Re.setFloat3("vBumpInfos", ee.coordinatesIndex, 1 / ee.level, Ke.parallaxScaleBias), Re.setMatrix("bumpMatrix", ee.getTextureMatrix()), Re.setTexture("bumpSampler", ee), Re.setFloat2("vTangentSpaceParams", Ke.invertNormalMapX ? -1 : 1, Ke.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === Ke.getClassName()) null !== Ke.metallicRoughnessTexture && (Re.setTexture("reflectivitySampler", Ke.metallicRoughnessTexture), Re.setMatrix("reflectivityMatrix", Ke.metallicRoughnessTexture.getTextureMatrix())), null !== Ke.metallic && Re.setFloat("metallic", Ke.metallic), null !== Ke.roughness && Re.setFloat("glossiness", 1 - Ke.roughness), null !== Ke.baseTexture && (Re.setTexture("albedoSampler", Ke.baseTexture), Re.setMatrix("albedoMatrix", Ke.baseTexture.getTextureMatrix())), null !== Ke.baseColor && Re.setColor3("albedoColor", Ke.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === Ke.getClassName()) null !== Ke.specularGlossinessTexture ? (Re.setTexture("reflectivitySampler", Ke.specularGlossinessTexture), Re.setMatrix("reflectivityMatrix", Ke.specularGlossinessTexture.getTextureMatrix())) : null !== Ke.specularColor && Re.setColor3("reflectivityColor", Ke.specularColor), null !== Ke.glossiness && Re.setFloat("glossiness", Ke.glossiness);
            else if ("PBRMaterial" === Ke.getClassName()) null !== Ke.metallicTexture && (Re.setTexture("reflectivitySampler", Ke.metallicTexture), Re.setMatrix("reflectivityMatrix", Ke.metallicTexture.getTextureMatrix())), null !== Ke.metallic && Re.setFloat("metallic", Ke.metallic), null !== Ke.roughness && Re.setFloat("glossiness", 1 - Ke.roughness), null !== Ke.roughness || null !== Ke.metallic || null !== Ke.metallicTexture ? (null !== Ke.albedoTexture && (Re.setTexture("albedoSampler", Ke.albedoTexture), Re.setMatrix("albedoMatrix", Ke.albedoTexture.getTextureMatrix())), null !== Ke.albedoColor && Re.setColor3("albedoColor", Ke.albedoColor)) : (null !== Ke.reflectivityTexture ? (Re.setTexture("reflectivitySampler", Ke.reflectivityTexture), Re.setMatrix("reflectivityMatrix", Ke.reflectivityTexture.getTextureMatrix())) : null !== Ke.reflectivityColor && Re.setColor3("reflectivityColor", Ke.reflectivityColor), null !== Ke.microSurface && Re.setFloat("glossiness", Ke.microSurface));
            else if ("StandardMaterial" === Ke.getClassName()) null !== Ke.specularTexture && (Re.setTexture("reflectivitySampler", Ke.specularTexture), Re.setMatrix("reflectivityMatrix", Ke.specularTexture.getTextureMatrix())), null !== Ke.specularColor && Re.setColor3("reflectivityColor", Ke.specularColor);
            else if ("OpenPBRMaterial" === Ke.getClassName()) {
              const ee = Ke;
              ee._useRoughnessFromMetallicTextureGreen && ee.baseMetalnessTexture ? (Re.setTexture("reflectivitySampler", ee.baseMetalnessTexture), Re.setMatrix("reflectivityMatrix", ee.baseMetalnessTexture.getTextureMatrix())) : ee.baseMetalnessTexture ? (Re.setTexture("metallicSampler", ee.baseMetalnessTexture), Re.setMatrix("metallicMatrix", ee.baseMetalnessTexture.getTextureMatrix())) : ee.specularRoughnessTexture && (Re.setTexture("roughnessSampler", ee.specularRoughnessTexture), Re.setMatrix("roughnessMatrix", ee.specularRoughnessTexture.getTextureMatrix())), Re.setFloat("metallic", ee.baseMetalness), Re.setFloat("glossiness", 1 - ee.specularRoughness), null !== ee.baseColorTexture && (Re.setTexture("albedoSampler", ee.baseColorTexture), Re.setMatrix("albedoMatrix", ee.baseColorTexture.getTextureMatrix())), null !== ee.baseColor && Re.setColor3("albedoColor", ee.baseColor)
            }
            if (this._enableIrradiance && ye.environmentTexture) {
              const ee = ye.environmentTexture,
                ie = ye.postProcessRenderPipelineManager.supportedPipelines.find((ee => "IBLShadowsRenderPipeline" === ee.getClassName()));
              if (ie) {
                const ee = ie._getAccumulatedTexture();
                ee && (Re.setTexture("iblShadowSampler", ee), Re.setFloat2("shadowTextureSize", ee.getSize().width, ee.getSize().height))
              }
              if (Re.setMatrix("reflectionMatrix", ee.getReflectionTextureMatrix()), Re.setFloat2("vReflectionInfos", ee.level * ye.iblIntensity, 0), Re.setTexture("reflectionSampler", ee), ee.irradianceTexture && (Re.setTexture("irradianceSampler", ee.irradianceTexture), ee.irradianceTexture._dominantDirection && Re.setVector3("vReflectionDominantDirection", ee.irradianceTexture._dominantDirection)), ee.sphericalPolynomial) {
                const ie = ee.sphericalPolynomial;
                if (ie.preScaledHarmonics) {
                  const ee = ie.preScaledHarmonics;
                  Re.setVector3("vSphericalL00", ee.l00), Re.setVector3("vSphericalL1_1", ee.l1_1), Re.setVector3("vSphericalL10", ee.l10), Re.setVector3("vSphericalL11", ee.l11), Re.setVector3("vSphericalL2_2", ee.l2_2), Re.setVector3("vSphericalL2_1", ee.l2_1), Re.setVector3("vSphericalL20", ee.l20), Re.setVector3("vSphericalL21", ee.l21), Re.setVector3("vSphericalL22", ee.l22)
                } else Re.setFloat3("vSphericalX", ie.x.x, ie.x.y, ie.x.z), Re.setFloat3("vSphericalY", ie.y.x, ie.y.y, ie.y.z), Re.setFloat3("vSphericalZ", ie.z.x, ie.z.y, ie.z.z), Re.setFloat3("vSphericalXX_ZZ", ie.xx.x - ie.zz.x, ie.xx.y - ie.zz.y, ie.xx.z - ie.zz.z), Re.setFloat3("vSphericalYY_ZZ", ie.yy.x - ie.zz.x, ie.yy.y - ie.zz.y, ie.yy.z - ie.zz.z), Re.setFloat3("vSphericalZZ", ie.zz.x, ie.zz.y, ie.zz.z), Re.setFloat3("vSphericalXY", ie.xy.x, ie.xy.y, ie.xy.z), Re.setFloat3("vSphericalYZ", ie.yz.x, ie.yz.y, ie.yz.z), Re.setFloat3("vSphericalZX", ie.zx.x, ie.zx.y, ie.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === Ke.getClassName()) {
                const ee = Ke;
                Re.setFloat("vSubsurfaceWeight", ee.subsurfaceWeight), ee.subsurfaceWeightTexture && (Re.setTexture("subsurfaceWeightSampler", ee.subsurfaceWeightTexture), Re.setMatrix("subsurfaceWeightMatrix", ee.subsurfaceWeightTexture.getTextureMatrix())), Re.setFloat("vTransmissionWeight", ee.transmissionWeight), ee.transmissionWeightTexture && (Re.setTexture("transmissionWeightSampler", ee.transmissionWeightTexture), Re.setMatrix("transmissionWeightMatrix", ee.transmissionWeightTexture.getTextureMatrix())), Re.setFloat("vTransmissionScatterAnisotropy", ee.transmissionScatterAnisotropy), Re.setFloat("vSubsurfaceScatterAnisotropy", ee.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, oi.f)(Re, Ke, this._scene), ie.useBones && ie.computeBonesUsingShaders && ie.skeleton) {
              const ee = ie.skeleton;
              if (ee.isUsingTextureForMatrices && Re.getUniformIndex("boneTextureInfo") > -1) {
                const He = ee.getTransformMatrixTexture(ie);
                Re.setTexture("boneSampler", He), Re.setFloat2("boneTextureInfo", ee._textureWidth, ee._textureHeight)
              } else Re.setMatrices("mBones", ie.skeleton.getTransformMatrices(ie));
              (this._enableVelocity || this._enableVelocityLinear) && Re.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[ie.uniqueId])
            }
            if ((0, re.w)(ie, Re), ie.morphTargetManager && ie.morphTargetManager.isUsingTextureForTargets && ie.morphTargetManager._bind(Re), (this._enableVelocity || this._enableVelocityLinear) && (Re.setMatrix("previousWorld", this._previousTransformationMatrices[He.uniqueId].xR), Re.setMatrix("previousViewProjection", this._previousTransformationMatrices[He.uniqueId].viewProjection)), this._enableObjectId) {
              let ee = ie.uniqueId;
              if (this.objectIdProvider) ee = (0, qi.e)(ie, this.objectIdProvider);
              else if (ee > 16777215) throw new Error(`Invalid geometry object ID ${ee} for mesh "${ie.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              Re.setFloat("objectId", ee)
            }
            if (this._enableMeshBlendTag) {
              const ee = this.meshBlendTagProvider ? (0, qi.d)(ie, this.meshBlendTagProvider) : ie.meshBlendingTag;
              Re.setInt("meshBlendTag", ee)
            }
            Fe && ie.hasThinInstances && Re.setMatrix("world", Je), ie._processRendering(He, ee, Re, Ke.fillMode, Ue, Fe, ((ee, ie) => {
              ee || Re.setMatrix("world", ie)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[He.uniqueId].xR = Je.clone(), this._previousTransformationMatrices[He.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), ie.skeleton && this._copyBonesTransformationMatrices(ie.skeleton.getTransformMatrices(ie), this._previousBonesTransformationMatrices[He.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (ie, He, ye) => {
          if ((ye || 0 === He) && ie.pW)
            for (let be = 0; be < ie.pW.length; ++be) {
              const He = ie.pW[be],
                ye = He.iT(),
                Me = He.getRenderingMesh();
              if (!ye) continue;
              const Ke = Me._getInstancesRenderList(He._id, !!He.getReplacementMesh()),
                Ue = ee.getCaps().instancedArrays && (null !== Ke.visibleInstances[He._id] || Me.hasThinInstances);
              if (!this.isReady(He, Ue)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (ie, He, ye, be) => {
          let Me;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.Nf().bindAttachments(this._attachmentsFromPrePass)
          }
          if (be.length) {
            for (ee.setColorWrite(!1), Me = 0; Me < be.length; Me++) Xe(be.data[Me]);
            ee.setColorWrite(!0)
          }
          for (Me = 0; Me < ie.length; Me++) Xe(ie.data[Me]);
          for (ee.setDepthWrite(!1), Me = 0; Me < He.length; Me++) Xe(He.data[Me]);
          if (this.renderTransparentMeshes)
            for (Me = 0; Me < ye.length; Me++) Xe(ye.data[Me]);
          ee.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const ee = this._scene.Nf();
        return {
          width: Math.max(1, Math.floor(ee.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(ee.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(ee, ie) {
        for (let He = 0; He < ee.length; He++) ie[He] = ee[He];
        return ie
      }
    }
    mi.ForceGLSL = !1, mi.DEPTH_TEXTURE_TYPE = 0, mi.NORMAL_TEXTURE_TYPE = 1, mi.POSITION_TEXTURE_TYPE = 2, mi.VELOCITY_TEXTURE_TYPE = 3, mi.REFLECTIVITY_TEXTURE_TYPE = 4, mi.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, mi.VELOCITY_LINEAR_TEXTURE_TYPE = 6, mi.IRRADIANCE_TEXTURE_TYPE = 7, mi.OBJECT_ID_TEXTURE_TYPE = 8, mi.MESH_BLEND_TAG_TEXTURE_TYPE = 9, mi._SceneComponentInitialization = ee => {
      throw (0, zi.l)("GeometryBufferRendererSceneComponent")
    };
    var li = He(37949);
    const Si = {
      effect: null,
      subMesh: null
    };

    function ni(ee) {
      if ("number" === typeof ee) return 1;
      if (ee instanceof Ce.n) return 2;
      if (ee instanceof Ce.p || ee instanceof je.c) return 3;
      if (ee instanceof Ce.s || ee instanceof je.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class ji {
      populateVectorFromLinkedProperties(ee) {
        const ie = ni(ee);
        for (const He in this.linkedProperties) {
          const ee = this.linkedProperties[He],
            ye = ee.numComponents;
          if (ie < ye || ee.targetUniformComponentOffset > ie - ye) return void(1 == ye ? we.e.Error(`Float property ${ee.name} has an offset that is too large.`) : we.e.Error(`Vector${ye} property ${ee.name} won't fit in Vector${ie} or has an offset that is too large.`));
          "number" === typeof ee.value ? ji._tmpArray[ee.targetUniformComponentOffset] = ee.value : ee.value.toArray(ji._tmpArray, ee.targetUniformComponentOffset)
        }
        ee.MR(ji._tmpArray)
      }
      constructor(ee, ie) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = ee, this.numComponents = ie
      }
    }
    ji._tmpArray = [0, 0, 0, 0];
    class si {
      constructor(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Me = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = ee, this.targetUniformName = He, this.defaultValue = ie, this.value = ie, this.targetUniformComponentNum = ye, this.targetUniformComponentOffset = be, this.requiredDefine = Me
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : ni(this.defaultValue)
      }
    }
    class Ii {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(ee, ie, He) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = ee, this.samplerPrefix = ie, this.textureDefine = He
      }
    }
    class Ni extends((0, Ti.d)((0, fi.d)(ue.e))) {}
    class Gi extends(function(ee) {
      return class extends ee {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(Ni)) {}
    class ri extends((0, se.e)(Gi)) {
      constructor(ee) {
        super(ee), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class Qi extends((0, Xi.e)(he.c)) {}
    let eH = (() => {
        var ee, ie, ye, be, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be, Ee, ge, Oe, de, We, Ae, Ye, Ve, ae, Le, ue, me, le, Se, se, he, Qe, ei, ii, Hi, yi, bi, Mi, Ki, Ui, Fi, Ji, fi, Ti, Xi, zi, Bi, Ei, gi, Oi, di, Zi, wi, Di, Pi, Ai, Yi, Vi, ai, ci, xi, Li, Ci, vi, ui, li, ni, Ni, Gi, eH, iH, HH, yH, bH, MH, KH, UH, FH, JH, oH, RH, kH, qH, fH, TH, pH, XH, zH, BH, EH, gH, OH, dH, WH, tH, ZH, wH, DH, PH, AH;
        let YH, VH, aH, cH, xH, LH, CH, vH, uH, mH, lH, SH, nH, jH, sH, IH, hH, NH, GH, rH, QH, ey, iy, Hy, yy, by, My, Ky, Uy, Fy, Jy, oy, Ry, ky, qy, fy, Ty, py, Xy, zy, By, Ey, gy, Oy, dy, Wy, ty, Zy, wy, Dy, Py, Ay, Yy, Vy, ay, cy, xy, Ly, Cy, vy, uy, my, ly, Sy, ny, jy, sy, Iy, hy, Ny, Gy, ry, Qy, eb, ib, Hb, yb, bb, Mb, Kb, Ub, Fb, Jb, ob, Rb, kb, qb, fb, Tb, pb, Xb, zb, Bb, Eb, gb, Ob, db, Wb, tb, Zb, wb, Db, Pb, Ab, Yb, Vb = Qi,
          ab = [],
          cb = [],
          xb = [],
          Lb = [],
          Cb = [],
          vb = [],
          ub = [],
          mb = [],
          lb = [],
          Sb = [],
          nb = [],
          jb = [],
          sb = [],
          Ib = [],
          hb = [],
          Nb = [],
          Gb = [],
          rb = [],
          Qb = [],
          eM = [],
          iM = [],
          HM = [],
          yM = [],
          bM = [],
          MM = [],
          KM = [],
          UM = [],
          FM = [],
          JM = [],
          oM = [],
          RM = [],
          kM = [],
          qM = [],
          fM = [],
          TM = [],
          pM = [],
          XM = [],
          zM = [],
          BM = [],
          EM = [],
          gM = [],
          OM = [],
          dM = [],
          WM = [],
          tM = [],
          ZM = [],
          wM = [],
          DM = [],
          PM = [],
          AM = [],
          YM = [],
          VM = [],
          aM = [],
          cM = [],
          xM = [],
          LM = [],
          CM = [],
          vM = [],
          uM = [],
          mM = [],
          lM = [],
          SM = [],
          nM = [],
          jM = [],
          sM = [],
          IM = [],
          hM = [],
          NM = [],
          GM = [],
          rM = [],
          QM = [],
          eK = [],
          iK = [],
          HK = [],
          yK = [],
          bK = [],
          MK = [],
          KK = [],
          UK = [],
          FK = [],
          JK = [],
          oK = [],
          RK = [],
          kK = [],
          qK = [],
          fK = [],
          TK = [],
          pK = [],
          XK = [],
          zK = [],
          BK = [],
          EK = [],
          gK = [],
          OK = [],
          dK = [],
          WK = [],
          tK = [],
          ZK = [],
          wK = [],
          DK = [],
          PK = [],
          AK = [],
          YK = [],
          VK = [],
          aK = [],
          cK = [],
          xK = [],
          LK = [],
          CK = [],
          vK = [],
          uK = [],
          mK = [],
          lK = [],
          SK = [],
          nK = [],
          jK = [],
          sK = [],
          IK = [],
          hK = [],
          NK = [],
          GK = [],
          rK = [],
          QK = [],
          eU = [],
          iU = [],
          HU = [],
          yU = [],
          bU = [],
          MU = [],
          KU = [],
          UU = [],
          FU = [],
          JU = [],
          oU = [],
          RU = [],
          kU = [],
          qU = [],
          fU = [],
          TU = [],
          pU = [],
          XU = [],
          zU = [],
          BU = [],
          EU = [],
          gU = [],
          OU = [],
          dU = [],
          WU = [],
          tU = [],
          ZU = [],
          wU = [],
          DU = [],
          PU = [],
          AU = [],
          YU = [],
          VU = [],
          aU = [],
          cU = [],
          xU = [],
          LU = [],
          CU = [],
          vU = [],
          uU = [],
          mU = [],
          lU = [],
          SU = [],
          nU = [],
          jU = [],
          sU = [],
          IU = [],
          hU = [],
          NU = [],
          GU = [],
          rU = [],
          QU = [],
          eF = [],
          iF = [],
          HF = [],
          yF = [],
          bF = [],
          MF = [],
          KF = [],
          UF = [],
          FF = [],
          JF = [],
          oF = [],
          RF = [],
          kF = [],
          qF = [],
          fF = [],
          TF = [],
          pF = [],
          XF = [],
          zF = [],
          BF = [],
          EF = [],
          gF = [],
          OF = [],
          dF = [],
          WF = [],
          tF = [],
          ZF = [],
          wF = [],
          DF = [],
          PF = [];
        return ee = class extends Vb {
          get baseWeight() {
            return (0, te.c)(this, ie, "f")
          }
          set baseWeight(ee) {
            (0, te.f)(this, ie, ee, "f")
          }
          get baseWeightTexture() {
            return (0, te.c)(this, ye, "f")
          }
          set baseWeightTexture(ee) {
            (0, te.f)(this, ye, ee, "f")
          }
          get baseColor() {
            return (0, te.c)(this, be, "f")
          }
          set baseColor(ee) {
            (0, te.f)(this, be, ee, "f")
          }
          get baseColorTexture() {
            return (0, te.c)(this, Ke, "f")
          }
          set baseColorTexture(ee) {
            (0, te.f)(this, Ke, ee, "f")
          }
          get baseDiffuseRoughness() {
            return (0, te.c)(this, Ue, "f")
          }
          set baseDiffuseRoughness(ee) {
            (0, te.f)(this, Ue, ee, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, te.c)(this, Fe, "f")
          }
          set baseDiffuseRoughnessTexture(ee) {
            (0, te.f)(this, Fe, ee, "f")
          }
          get baseMetalness() {
            return (0, te.c)(this, Je, "f")
          }
          set baseMetalness(ee) {
            (0, te.f)(this, Je, ee, "f")
          }
          get baseMetalnessTexture() {
            return (0, te.c)(this, oe, "f")
          }
          set baseMetalnessTexture(ee) {
            (0, te.f)(this, oe, ee, "f")
          }
          get specularWeight() {
            return (0, te.c)(this, Re, "f")
          }
          set specularWeight(ee) {
            (0, te.f)(this, Re, ee, "f")
          }
          get specularWeightTexture() {
            return (0, te.c)(this, ke, "f")
          }
          set specularWeightTexture(ee) {
            (0, te.f)(this, ke, ee, "f")
          }
          get specularColor() {
            return (0, te.c)(this, qe, "f")
          }
          set specularColor(ee) {
            (0, te.f)(this, qe, ee, "f")
          }
          get specularColorTexture() {
            return (0, te.c)(this, fe, "f")
          }
          set specularColorTexture(ee) {
            (0, te.f)(this, fe, ee, "f")
          }
          get specularRoughness() {
            return (0, te.c)(this, Te, "f")
          }
          set specularRoughness(ee) {
            (0, te.f)(this, Te, ee, "f")
          }
          get specularRoughnessTexture() {
            return (0, te.c)(this, pe, "f")
          }
          set specularRoughnessTexture(ee) {
            (0, te.f)(this, pe, ee, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, te.c)(this, Xe, "f")
          }
          set specularRoughnessAnisotropy(ee) {
            (0, te.f)(this, Xe, ee, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, te.c)(this, ze, "f")
          }
          set specularRoughnessAnisotropyTexture(ee) {
            (0, te.f)(this, ze, ee, "f")
          }
          get specularIor() {
            return (0, te.c)(this, Be, "f")
          }
          set specularIor(ee) {
            (0, te.f)(this, Be, ee, "f")
          }
          get transmissionWeight() {
            return (0, te.c)(this, Ee, "f")
          }
          set transmissionWeight(ee) {
            (0, te.f)(this, Ee, ee, "f")
          }
          get transmissionWeightTexture() {
            return (0, te.c)(this, ge, "f")
          }
          set transmissionWeightTexture(ee) {
            (0, te.f)(this, ge, ee, "f")
          }
          get transmissionColor() {
            return (0, te.c)(this, Oe, "f")
          }
          set transmissionColor(ee) {
            (0, te.f)(this, Oe, ee, "f")
          }
          get transmissionColorTexture() {
            return (0, te.c)(this, de, "f")
          }
          set transmissionColorTexture(ee) {
            (0, te.f)(this, de, ee, "f")
          }
          get transmissionDepth() {
            return (0, te.c)(this, We, "f")
          }
          set transmissionDepth(ee) {
            (0, te.f)(this, We, ee, "f")
          }
          get transmissionDepthTexture() {
            return (0, te.c)(this, Ae, "f")
          }
          set transmissionDepthTexture(ee) {
            (0, te.f)(this, Ae, ee, "f")
          }
          get transmissionScatter() {
            return (0, te.c)(this, Ye, "f")
          }
          set transmissionScatter(ee) {
            (0, te.f)(this, Ye, ee, "f")
          }
          get transmissionScatterTexture() {
            return (0, te.c)(this, Ve, "f")
          }
          set transmissionScatterTexture(ee) {
            (0, te.f)(this, Ve, ee, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, te.c)(this, ae, "f")
          }
          set transmissionScatterAnisotropy(ee) {
            (0, te.f)(this, ae, ee, "f")
          }
          get transmissionDispersionScale() {
            return (0, te.c)(this, Le, "f")
          }
          set transmissionDispersionScale(ee) {
            (0, te.f)(this, Le, ee, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, te.c)(this, ue, "f")
          }
          set transmissionDispersionScaleTexture(ee) {
            (0, te.f)(this, ue, ee, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, te.c)(this, me, "f")
          }
          set transmissionDispersionAbbeNumber(ee) {
            (0, te.f)(this, me, ee, "f")
          }
          get subsurfaceWeight() {
            return (0, te.c)(this, le, "f")
          }
          set subsurfaceWeight(ee) {
            (0, te.f)(this, le, ee, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, te.c)(this, Se, "f")
          }
          set subsurfaceWeightTexture(ee) {
            (0, te.f)(this, Se, ee, "f")
          }
          get subsurfaceColor() {
            return (0, te.c)(this, se, "f")
          }
          set subsurfaceColor(ee) {
            (0, te.f)(this, se, ee, "f")
          }
          get subsurfaceColorTexture() {
            return (0, te.c)(this, he, "f")
          }
          set subsurfaceColorTexture(ee) {
            (0, te.f)(this, he, ee, "f")
          }
          get subsurfaceRadius() {
            return (0, te.c)(this, Qe, "f")
          }
          set subsurfaceRadius(ee) {
            (0, te.f)(this, Qe, ee, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, te.c)(this, ei, "f")
          }
          set subsurfaceRadiusScale(ee) {
            (0, te.f)(this, ei, ee, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, te.c)(this, ii, "f")
          }
          set subsurfaceRadiusScaleTexture(ee) {
            (0, te.f)(this, ii, ee, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, te.c)(this, Hi, "f")
          }
          set subsurfaceScatterAnisotropy(ee) {
            (0, te.f)(this, Hi, ee, "f")
          }
          get coatWeight() {
            return (0, te.c)(this, yi, "f")
          }
          set coatWeight(ee) {
            (0, te.f)(this, yi, ee, "f")
          }
          get coatWeightTexture() {
            return (0, te.c)(this, bi, "f")
          }
          set coatWeightTexture(ee) {
            (0, te.f)(this, bi, ee, "f")
          }
          get coatColor() {
            return (0, te.c)(this, Mi, "f")
          }
          set coatColor(ee) {
            (0, te.f)(this, Mi, ee, "f")
          }
          get coatColorTexture() {
            return (0, te.c)(this, Ki, "f")
          }
          set coatColorTexture(ee) {
            (0, te.f)(this, Ki, ee, "f")
          }
          get coatRoughness() {
            return (0, te.c)(this, Ui, "f")
          }
          set coatRoughness(ee) {
            (0, te.f)(this, Ui, ee, "f")
          }
          get coatRoughnessTexture() {
            return (0, te.c)(this, Fi, "f")
          }
          set coatRoughnessTexture(ee) {
            (0, te.f)(this, Fi, ee, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, te.c)(this, Ji, "f")
          }
          set coatRoughnessAnisotropy(ee) {
            (0, te.f)(this, Ji, ee, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, te.c)(this, fi, "f")
          }
          set coatRoughnessAnisotropyTexture(ee) {
            (0, te.f)(this, fi, ee, "f")
          }
          get coatIor() {
            return (0, te.c)(this, Ti, "f")
          }
          set coatIor(ee) {
            (0, te.f)(this, Ti, ee, "f")
          }
          get coatDarkening() {
            return (0, te.c)(this, Xi, "f")
          }
          set coatDarkening(ee) {
            (0, te.f)(this, Xi, ee, "f")
          }
          get coatDarkeningTexture() {
            return (0, te.c)(this, zi, "f")
          }
          set coatDarkeningTexture(ee) {
            (0, te.f)(this, zi, ee, "f")
          }
          get fuzzWeight() {
            return (0, te.c)(this, Bi, "f")
          }
          set fuzzWeight(ee) {
            (0, te.f)(this, Bi, ee, "f")
          }
          get fuzzWeightTexture() {
            return (0, te.c)(this, Ei, "f")
          }
          set fuzzWeightTexture(ee) {
            (0, te.f)(this, Ei, ee, "f")
          }
          get fuzzColor() {
            return (0, te.c)(this, gi, "f")
          }
          set fuzzColor(ee) {
            (0, te.f)(this, gi, ee, "f")
          }
          get fuzzColorTexture() {
            return (0, te.c)(this, Oi, "f")
          }
          set fuzzColorTexture(ee) {
            (0, te.f)(this, Oi, ee, "f")
          }
          get fuzzRoughness() {
            return (0, te.c)(this, di, "f")
          }
          set fuzzRoughness(ee) {
            (0, te.f)(this, di, ee, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, te.c)(this, Zi, "f")
          }
          set fuzzRoughnessTexture(ee) {
            (0, te.f)(this, Zi, ee, "f")
          }
          get geometryThinWalled() {
            return (0, te.c)(this, wi, "f")
          }
          set geometryThinWalled(ee) {
            (0, te.f)(this, wi, ee, "f")
          }
          get geometryNormalTexture() {
            return (0, te.c)(this, Di, "f")
          }
          set geometryNormalTexture(ee) {
            (0, te.f)(this, Di, ee, "f")
          }
          get geometryTangent() {
            return (0, te.c)(this, Pi, "f")
          }
          set geometryTangent(ee) {
            (0, te.f)(this, Pi, ee, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(ee) {
            this.geometryTangent = new Ce.n(Math.cos(ee), Math.sin(ee))
          }
          get geometryTangentTexture() {
            return (0, te.c)(this, Ai, "f")
          }
          set geometryTangentTexture(ee) {
            (0, te.f)(this, Ai, ee, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, te.c)(this, Yi, "f")
          }
          set geometryCoatNormalTexture(ee) {
            (0, te.f)(this, Yi, ee, "f")
          }
          get geometryCoatTangent() {
            return (0, te.c)(this, Vi, "f")
          }
          set geometryCoatTangent(ee) {
            (0, te.f)(this, Vi, ee, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(ee) {
            this.geometryCoatTangent = new Ce.n(Math.cos(ee), Math.sin(ee))
          }
          get geometryCoatTangentTexture() {
            return (0, te.c)(this, ai, "f")
          }
          set geometryCoatTangentTexture(ee) {
            (0, te.f)(this, ai, ee, "f")
          }
          get geometryOpacity() {
            return (0, te.c)(this, ci, "f")
          }
          set geometryOpacity(ee) {
            (0, te.f)(this, ci, ee, "f")
          }
          get geometryOpacityTexture() {
            return (0, te.c)(this, xi, "f")
          }
          set geometryOpacityTexture(ee) {
            (0, te.f)(this, xi, ee, "f")
          }
          get geometryThickness() {
            return (0, te.c)(this, Li, "f")
          }
          set geometryThickness(ee) {
            (0, te.f)(this, Li, ee, "f")
          }
          get geometryThicknessTexture() {
            return (0, te.c)(this, Ci, "f")
          }
          set geometryThicknessTexture(ee) {
            (0, te.f)(this, Ci, ee, "f")
          }
          get emissionLuminance() {
            return (0, te.c)(this, vi, "f")
          }
          set emissionLuminance(ee) {
            (0, te.f)(this, vi, ee, "f")
          }
          get emissionColor() {
            return (0, te.c)(this, ui, "f")
          }
          set emissionColor(ee) {
            (0, te.f)(this, ui, ee, "f")
          }
          get emissionColorTexture() {
            return (0, te.c)(this, li, "f")
          }
          set emissionColorTexture(ee) {
            (0, te.f)(this, li, ee, "f")
          }
          get thinFilmWeight() {
            return (0, te.c)(this, ni, "f")
          }
          set thinFilmWeight(ee) {
            (0, te.f)(this, ni, ee, "f")
          }
          get thinFilmWeightTexture() {
            return (0, te.c)(this, Ni, "f")
          }
          set thinFilmWeightTexture(ee) {
            (0, te.f)(this, Ni, ee, "f")
          }
          get thinFilmThickness() {
            return (0, te.c)(this, Gi, "f")
          }
          set thinFilmThickness(ee) {
            (0, te.f)(this, Gi, ee, "f")
          }
          get thinFilmThicknessMin() {
            return (0, te.c)(this, eH, "f")
          }
          set thinFilmThicknessMin(ee) {
            (0, te.f)(this, eH, ee, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, te.c)(this, iH, "f")
          }
          set thinFilmThicknessTexture(ee) {
            (0, te.f)(this, iH, ee, "f")
          }
          get thinFilmIor() {
            return (0, te.c)(this, HH, "f")
          }
          set thinFilmIor(ee) {
            (0, te.f)(this, HH, ee, "f")
          }
          get ambientOcclusionTexture() {
            return (0, te.c)(this, yH, "f")
          }
          set ambientOcclusionTexture(ee) {
            (0, te.f)(this, yH, ee, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(ee) {
            this._sssQuality !== ee && (this._sssQuality = ee, this.tye(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(ee) {
            this._sssIrradianceTexture !== ee && (this._sssIrradianceTexture = ee, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(ee) {
            this._sssDepthTexture !== ee && (this._sssDepthTexture = ee, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, te.c)(this, bH, "f")
          }
          set directIntensity(ee) {
            (0, te.f)(this, bH, ee, "f")
          }
          get environmentIntensity() {
            return (0, te.c)(this, MH, "f")
          }
          set environmentIntensity(ee) {
            (0, te.f)(this, MH, ee, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, te.c)(this, KH, "f")
          }
          set useSpecularWeightFromTextureAlpha(ee) {
            (0, te.f)(this, KH, ee, "f")
          }
          get forceAlphaTest() {
            return (0, te.c)(this, UH, "f")
          }
          set forceAlphaTest(ee) {
            (0, te.f)(this, UH, ee, "f")
          }
          get alphaCutOff() {
            return (0, te.c)(this, FH, "f")
          }
          set alphaCutOff(ee) {
            (0, te.f)(this, FH, ee, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, te.c)(this, JH, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(ee) {
            (0, te.f)(this, JH, ee, "f")
          }
          get useAmbientInGrayScale() {
            return (0, te.c)(this, oH, "f")
          }
          set useAmbientInGrayScale(ee) {
            (0, te.f)(this, oH, ee, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(je.c.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === Me.e.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(ee) {
            ee !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = ee ? Me.e.LIGHTFALLOFF_PHYSICAL : Me.e.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === Me.e.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(ee) {
            ee !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = ee ? Me.e.LIGHTFALLOFF_GLTF : Me.e.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, te.c)(this, RH, "f")
          }
          set useObjectSpaceNormalMap(ee) {
            (0, te.f)(this, RH, ee, "f")
          }
          get useParallax() {
            return (0, te.c)(this, kH, "f")
          }
          set useParallax(ee) {
            (0, te.f)(this, kH, ee, "f")
          }
          get useParallaxOcclusion() {
            return (0, te.c)(this, qH, "f")
          }
          set useParallaxOcclusion(ee) {
            (0, te.f)(this, qH, ee, "f")
          }
          get parallaxScaleBias() {
            return (0, te.c)(this, fH, "f")
          }
          set parallaxScaleBias(ee) {
            (0, te.f)(this, fH, ee, "f")
          }
          get disableLighting() {
            return (0, te.c)(this, TH, "f")
          }
          set disableLighting(ee) {
            (0, te.f)(this, TH, ee, "f")
          }
          get forceIrradianceInFragment() {
            return (0, te.c)(this, pH, "f")
          }
          set forceIrradianceInFragment(ee) {
            (0, te.f)(this, pH, ee, "f")
          }
          get maxSimultaneousLights() {
            return (0, te.c)(this, XH, "f")
          }
          set maxSimultaneousLights(ee) {
            (0, te.f)(this, XH, ee, "f")
          }
          get invertNormalMapX() {
            return (0, te.c)(this, zH, "f")
          }
          set invertNormalMapX(ee) {
            (0, te.f)(this, zH, ee, "f")
          }
          get invertNormalMapY() {
            return (0, te.c)(this, BH, "f")
          }
          set invertNormalMapY(ee) {
            (0, te.f)(this, BH, ee, "f")
          }
          get twoSidedLighting() {
            return (0, te.c)(this, EH, "f")
          }
          set twoSidedLighting(ee) {
            (0, te.f)(this, EH, ee, "f")
          }
          get useAlphaFresnel() {
            return (0, te.c)(this, gH, "f")
          }
          set useAlphaFresnel(ee) {
            (0, te.f)(this, gH, ee, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, te.c)(this, OH, "f")
          }
          set useLinearAlphaFresnel(ee) {
            (0, te.f)(this, OH, ee, "f")
          }
          get environmentBRDFTexture() {
            return (0, te.c)(this, dH, "f")
          }
          set environmentBRDFTexture(ee) {
            (0, te.f)(this, dH, ee, "f")
          }
          get forceNormalForward() {
            return (0, te.c)(this, WH, "f")
          }
          set forceNormalForward(ee) {
            (0, te.f)(this, WH, ee, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, te.c)(this, tH, "f")
          }
          set enableSpecularAntiAliasing(ee) {
            (0, te.f)(this, tH, ee, "f")
          }
          get useHorizonOcclusion() {
            return (0, te.c)(this, ZH, "f")
          }
          set useHorizonOcclusion(ee) {
            (0, te.f)(this, ZH, ee, "f")
          }
          get useRadianceOcclusion() {
            return (0, te.c)(this, wH, "f")
          }
          set useRadianceOcclusion(ee) {
            (0, te.f)(this, wH, ee, "f")
          }
          get unlit() {
            return (0, te.c)(this, DH, "f")
          }
          set unlit(ee) {
            (0, te.f)(this, DH, ee, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, te.c)(this, PH, "f")
          }
          set applyDecalMapAfterDetailMap(ee) {
            (0, te.f)(this, PH, ee, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(ee) {
            this._backgroundRefractionTexture = ee, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(ee) {
            this._refractionHighQualityBlur !== ee && (this._refractionHighQualityBlur = ee, this.tye(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(ee) {
            this._realTimeFiltering = ee, this.tye(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(ee) {
            this._realTimeFilteringQuality = ee, this.tye(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(ee) {
            this._fuzzSampleNumber = ee, this.tye(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, te.c)(this, AH, "f")
          }
          set debugMode(ee) {
            (0, te.f)(this, AH, ee, "f")
          }
          constructor(He, Ze) {
            super(He, Ze, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || ee.ForceGLSL), ie.set(this, ((0, te.l)(this, ab), (0, te.l)(this, cb, void 0))), this._baseWeight = ((0, te.l)(this, xb), new si("base_weight", 1, "vBaseWeight", 1)), ye.set(this, (0, te.l)(this, Lb, void 0)), this._baseWeightTexture = ((0, te.l)(this, Cb), new Ii("base_weight", "baseWeight", "BASE_WEIGHT")), be.set(this, (0, te.l)(this, vb, void 0)), this._baseColor = ((0, te.l)(this, ub), new si("base_color", je.c.White(), "vBaseColor", 4)), Ke.set(this, (0, te.l)(this, mb, void 0)), this._baseColorTexture = ((0, te.l)(this, lb), new Ii("base_color", "baseColor", "BASE_COLOR")), Ue.set(this, (0, te.l)(this, Sb, void 0)), this._baseDiffuseRoughness = ((0, te.l)(this, nb), new si("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), Fe.set(this, (0, te.l)(this, jb, void 0)), this._baseDiffuseRoughnessTexture = ((0, te.l)(this, sb), new Ii("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), Je.set(this, (0, te.l)(this, Ib, void 0)), this._baseMetalness = ((0, te.l)(this, hb), new si("base_metalness", 0, "vReflectanceInfo", 4, 0)), oe.set(this, (0, te.l)(this, Nb, void 0)), this._baseMetalnessTexture = ((0, te.l)(this, Gb), new Ii("base_metalness", "baseMetalness", "BASE_METALNESS")), Re.set(this, (0, te.l)(this, rb, void 0)), this._specularWeight = ((0, te.l)(this, Qb), new si("specular_weight", 1, "vReflectanceInfo", 4, 3)), ke.set(this, (0, te.l)(this, eM, void 0)), this._specularWeightTexture = ((0, te.l)(this, iM), new Ii("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), qe.set(this, (0, te.l)(this, HM, void 0)), this._specularColor = ((0, te.l)(this, yM), new si("specular_color", je.c.White(), "vSpecularColor", 4)), fe.set(this, (0, te.l)(this, bM, void 0)), this._specularColorTexture = ((0, te.l)(this, MM), new Ii("specular_color", "specularColor", "SPECULAR_COLOR")), Te.set(this, (0, te.l)(this, KM, void 0)), this._specularRoughness = ((0, te.l)(this, UM), new si("specular_roughness", .3, "vReflectanceInfo", 4, 1)), pe.set(this, (0, te.l)(this, FM, void 0)), this._specularRoughnessTexture = ((0, te.l)(this, JM), new Ii("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), Xe.set(this, (0, te.l)(this, oM, void 0)), this._specularRoughnessAnisotropy = ((0, te.l)(this, RM), new si("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), ze.set(this, (0, te.l)(this, kM, void 0)), this._specularRoughnessAnisotropyTexture = ((0, te.l)(this, qM), new Ii("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), Be.set(this, (0, te.l)(this, fM, void 0)), this._specularIor = ((0, te.l)(this, TM), new si("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), Ee.set(this, (0, te.l)(this, pM, void 0)), this._transmissionWeight = ((0, te.l)(this, XM), new si("transmission_weight", 0, "vTransmissionWeight", 1)), ge.set(this, (0, te.l)(this, zM, void 0)), this._transmissionWeightTexture = ((0, te.l)(this, BM), new Ii("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), Oe.set(this, (0, te.l)(this, EM, void 0)), this._transmissionColor = ((0, te.l)(this, gM), new si("transmission_color", je.c.White(), "vTransmissionColor", 3, 0)), de.set(this, (0, te.l)(this, OM, void 0)), this._transmissionColorTexture = ((0, te.l)(this, dM), new Ii("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), We.set(this, (0, te.l)(this, WM, void 0)), this._transmissionDepth = ((0, te.l)(this, tM), new si("transmission_depth", 0, "vTransmissionDepth", 1, 0)), Ae.set(this, (0, te.l)(this, ZM, void 0)), this._transmissionDepthTexture = ((0, te.l)(this, wM), new Ii("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Ye.set(this, (0, te.l)(this, DM, void 0)), this._transmissionScatter = ((0, te.l)(this, PM), new si("transmission_scatter", je.c.Black(), "vTransmissionScatter", 3, 0)), Ve.set(this, (0, te.l)(this, AM, void 0)), this._transmissionScatterTexture = ((0, te.l)(this, YM), new Ii("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), ae.set(this, (0, te.l)(this, VM, void 0)), this._transmissionScatterAnisotropy = ((0, te.l)(this, aM), new si("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), Le.set(this, (0, te.l)(this, cM, void 0)), this._transmissionDispersionScale = ((0, te.l)(this, xM), new si("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), ue.set(this, (0, te.l)(this, LM, void 0)), this._transmissionDispersionScaleTexture = ((0, te.l)(this, CM), new Ii("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), me.set(this, (0, te.l)(this, vM, void 0)), this._transmissionDispersionAbbeNumber = ((0, te.l)(this, uM), new si("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), le.set(this, (0, te.l)(this, mM, void 0)), this._subsurfaceWeight = ((0, te.l)(this, lM), new si("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), Se.set(this, (0, te.l)(this, SM, void 0)), this._subsurfaceWeightTexture = ((0, te.l)(this, nM), new Ii("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), se.set(this, (0, te.l)(this, jM, void 0)), this._subsurfaceColor = ((0, te.l)(this, sM), new si("subsurface_color", new je.c(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), he.set(this, (0, te.l)(this, IM, void 0)), this._subsurfaceColorTexture = ((0, te.l)(this, hM), new Ii("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), Qe.set(this, (0, te.l)(this, NM, void 0)), this._subsurfaceRadius = ((0, te.l)(this, GM), new si("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), ei.set(this, (0, te.l)(this, rM, void 0)), this._subsurfaceRadiusScale = ((0, te.l)(this, QM), new si("subsurface_radius_scale", new je.c(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), ii.set(this, (0, te.l)(this, eK, void 0)), this._subsurfaceRadiusScaleTexture = ((0, te.l)(this, iK), new Ii("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), Hi.set(this, (0, te.l)(this, HK, void 0)), this._subsurfaceScatterAnisotropy = ((0, te.l)(this, yK), new si("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), yi.set(this, (0, te.l)(this, bK, void 0)), this._coatWeight = ((0, te.l)(this, MK), new si("coat_weight", 0, "vCoatWeight", 1, 0)), bi.set(this, (0, te.l)(this, KK, void 0)), this._coatWeightTexture = ((0, te.l)(this, UK), new Ii("coat_weight", "coatWeight", "COAT_WEIGHT")), Mi.set(this, (0, te.l)(this, FK, void 0)), this._coatColor = ((0, te.l)(this, JK), new si("coat_color", je.c.White(), "vCoatColor", 3, 0)), Ki.set(this, (0, te.l)(this, oK, void 0)), this._coatColorTexture = ((0, te.l)(this, RK), new Ii("coat_color", "coatColor", "COAT_COLOR")), Ui.set(this, (0, te.l)(this, kK, void 0)), this._coatRoughness = ((0, te.l)(this, qK), new si("coat_roughness", 0, "vCoatRoughness", 1, 0)), Fi.set(this, (0, te.l)(this, fK, void 0)), this._coatRoughnessTexture = ((0, te.l)(this, TK), new Ii("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Ji.set(this, (0, te.l)(this, pK, void 0)), this._coatRoughnessAnisotropy = ((0, te.l)(this, XK), new si("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), fi.set(this, (0, te.l)(this, zK, void 0)), this._coatRoughnessAnisotropyTexture = ((0, te.l)(this, BK), new Ii("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), Ti.set(this, (0, te.l)(this, EK, void 0)), this._coatIor = ((0, te.l)(this, gK), new si("coat_ior", 1.5, "vCoatIor", 1, 0)), Xi.set(this, (0, te.l)(this, OK, void 0)), this._coatDarkening = ((0, te.l)(this, dK), new si("coat_darkening", 1, "vCoatDarkening", 1, 0)), zi.set(this, (0, te.l)(this, WK, void 0)), this._coatDarkeningTexture = ((0, te.l)(this, tK), new Ii("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, Bi.set(this, (0, te.l)(this, ZK, void 0)), this._fuzzWeight = ((0, te.l)(this, wK), new si("fuzz_weight", 0, "vFuzzWeight", 1, 0)), Ei.set(this, (0, te.l)(this, DK, void 0)), this._fuzzWeightTexture = ((0, te.l)(this, PK), new Ii("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), gi.set(this, (0, te.l)(this, AK, void 0)), this._fuzzColor = ((0, te.l)(this, YK), new si("fuzz_color", je.c.White(), "vFuzzColor", 3, 0)), Oi.set(this, (0, te.l)(this, VK, void 0)), this._fuzzColorTexture = ((0, te.l)(this, aK), new Ii("fuzz_color", "fuzzColor", "FUZZ_COLOR")), di.set(this, (0, te.l)(this, cK, void 0)), this._fuzzRoughness = ((0, te.l)(this, xK), new si("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), Zi.set(this, (0, te.l)(this, LK, void 0)), this._fuzzRoughnessTexture = ((0, te.l)(this, CK), new Ii("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), wi.set(this, (0, te.l)(this, vK, void 0)), this._geometryThinWalled = ((0, te.l)(this, uK), new si("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Di.set(this, (0, te.l)(this, mK, void 0)), this._geometryNormalTexture = ((0, te.l)(this, lK), new Ii("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), Pi.set(this, (0, te.l)(this, SK, void 0)), this._geometryTangent = ((0, te.l)(this, nK), new si("geometry_tangent", new Ce.n(1, 0), "vSpecularAnisotropy", 3, 0)), Ai.set(this, (0, te.l)(this, jK, void 0)), this._geometryTangentTexture = ((0, te.l)(this, sK), new Ii("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), Yi.set(this, (0, te.l)(this, IK, void 0)), this._geometryCoatNormalTexture = ((0, te.l)(this, hK), new Ii("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Vi.set(this, (0, te.l)(this, NK, void 0)), this._geometryCoatTangent = ((0, te.l)(this, GK), new si("geometry_coat_tangent", new Ce.n(1, 0), "vGeometryCoatTangent", 2, 0)), ai.set(this, (0, te.l)(this, rK, void 0)), this._geometryCoatTangentTexture = ((0, te.l)(this, QK), new Ii("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), ci.set(this, (0, te.l)(this, eU, void 0)), this._geometryOpacity = ((0, te.l)(this, iU), new si("geometry_opacity", 1, "vBaseColor", 4, 3)), xi.set(this, (0, te.l)(this, HU, void 0)), this._geometryOpacityTexture = ((0, te.l)(this, yU), new Ii("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Li.set(this, (0, te.l)(this, bU, void 0)), this._geometryThickness = ((0, te.l)(this, MU), new si("geometry_thickness", 0, "vGeometryThickness", 1, 0)), Ci.set(this, (0, te.l)(this, KU, void 0)), this._geometryThicknessTexture = ((0, te.l)(this, UU), new Ii("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), vi.set(this, (0, te.l)(this, FU, void 0)), this._emissionLuminance = ((0, te.l)(this, JU), new si("emission_luminance", 1, "vLightingIntensity", 4, 1)), ui.set(this, (0, te.l)(this, oU, void 0)), this._emissionColor = ((0, te.l)(this, RU), new si("emission_color", je.c.Black(), "vEmissionColor", 3)), li.set(this, (0, te.l)(this, kU, void 0)), this._emissionColorTexture = ((0, te.l)(this, qU), new Ii("emission_color", "emissionColor", "EMISSION_COLOR")), ni.set(this, (0, te.l)(this, fU, void 0)), this._thinFilmWeight = ((0, te.l)(this, TU), new si("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), Ni.set(this, (0, te.l)(this, pU, void 0)), this._thinFilmWeightTexture = ((0, te.l)(this, XU), new Ii("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), Gi.set(this, (0, te.l)(this, zU, void 0)), this._thinFilmThickness = ((0, te.l)(this, BU), new si("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), eH.set(this, (0, te.l)(this, EU, void 0)), this._thinFilmThicknessMin = ((0, te.l)(this, gU), new si("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), iH.set(this, (0, te.l)(this, OU, void 0)), this._thinFilmThicknessTexture = ((0, te.l)(this, dU), new Ii("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), HH.set(this, (0, te.l)(this, WU, void 0)), this._thinFilmIor = ((0, te.l)(this, tU), new si("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), yH.set(this, (0, te.l)(this, ZU, void 0)), this._ambientOcclusionTexture = ((0, te.l)(this, wU), new Ii("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = ee.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, bH.set(this, (0, te.l)(this, DU, 1)), MH.set(this, ((0, te.l)(this, PU), (0, te.l)(this, AU, 1))), KH.set(this, ((0, te.l)(this, YU), (0, te.l)(this, VU, !1))), UH.set(this, ((0, te.l)(this, aU), (0, te.l)(this, cU, !1))), FH.set(this, ((0, te.l)(this, xU), (0, te.l)(this, LU, .4))), JH.set(this, ((0, te.l)(this, CU), (0, te.l)(this, vU, !1))), oH.set(this, ((0, te.l)(this, uU), (0, te.l)(this, mU, !1))), RH.set(this, ((0, te.l)(this, lU), (0, te.l)(this, SU, !1))), kH.set(this, ((0, te.l)(this, nU), (0, te.l)(this, jU, !1))), qH.set(this, ((0, te.l)(this, sU), (0, te.l)(this, IU, !1))), fH.set(this, ((0, te.l)(this, hU), (0, te.l)(this, NU, .05))), TH.set(this, ((0, te.l)(this, GU), (0, te.l)(this, rU, !1))), pH.set(this, ((0, te.l)(this, QU), (0, te.l)(this, eF, !1))), XH.set(this, ((0, te.l)(this, iF), (0, te.l)(this, HF, 4))), zH.set(this, ((0, te.l)(this, yF), (0, te.l)(this, bF, !1))), BH.set(this, ((0, te.l)(this, MF), (0, te.l)(this, KF, !1))), EH.set(this, ((0, te.l)(this, UF), (0, te.l)(this, FF, !1))), gH.set(this, ((0, te.l)(this, JF), (0, te.l)(this, oF, !1))), OH.set(this, ((0, te.l)(this, RF), (0, te.l)(this, kF, !1))), dH.set(this, ((0, te.l)(this, qF), (0, te.l)(this, fF, null))), WH.set(this, ((0, te.l)(this, TF), (0, te.l)(this, pF, !1))), tH.set(this, ((0, te.l)(this, XF), (0, te.l)(this, zF, !1))), ZH.set(this, ((0, te.l)(this, BF), (0, te.l)(this, EF, !0))), wH.set(this, ((0, te.l)(this, gF), (0, te.l)(this, OF, !0))), DH.set(this, ((0, te.l)(this, dF), (0, te.l)(this, WF, !1))), PH.set(this, ((0, te.l)(this, tF), (0, te.l)(this, ZF, !1))), this._lightingInfos = ((0, te.l)(this, wF), new Ce.s(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = Me.e.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new De.f(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, AH.set(this, (0, te.l)(this, DF, 0)), this.debugLimit = ((0, te.l)(this, PF), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = Me.e.MATERIAL_OPAQUE, this.Xx() && !this.Xx()?.Nf().isWebGPU && this.Xx().Nf().dT < 2 && we.e.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), ee._noiseTextures[this.Xx().uniqueId] || (ee._noiseTextures[this.Xx().uniqueId] = new Pe.e(ti.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.Xx(), !1, !0, 1), this.Xx().Bx.addOnce((() => {
              ee._noiseTextures[this.Xx().uniqueId]?.dispose(), delete ee._noiseTextures[this.Xx().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Ne.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), Ne.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = xe(this.Xx()), this._environmentFuzzBRDFTexture = ce(this.Xx()), this.prePassConfiguration = new ne.b, this._propertyList = {};
            for (const ee of Object.getOwnPropertyNames(this)) {
              const ie = this[ee];
              ie instanceof si && (this._propertyList[ee] = ie)
            }
            Object.keys(this._propertyList).forEach((ee => {
              const ie = this._propertyList[ee];
              let He = this._uniformsList[ie.targetUniformName];
              He ? He.numComponents !== ie.targetUniformComponentNum ? we.e.Error(`Uniform ${ie.targetUniformName} already exists of size ${He.numComponents}, but trying to set it to ${ie.targetUniformComponentNum}.`) : He.requiredDefine !== ie.requiredDefine && (He.requiredDefine = void 0) : (He = new ji(ie.targetUniformName, ie.targetUniformComponentNum), He.requiredDefine = ie.requiredDefine, this._uniformsList[ie.targetUniformName] = He), "" === He.firstLinkedKey && (He.firstLinkedKey = ie.name), He.linkedProperties[ie.name] = ie
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const ee of Object.getOwnPropertyNames(this)) {
              const ie = this[ee];
              ie instanceof Ii && (this._samplersList[ee] = ie)
            }
            for (const ee in this._samplersList) {
              const ie = this._samplersList[ee].textureDefine;
              this._samplerDefines[ie] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[ie + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[ie + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(Ne.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(Ne.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(ee) {
            this._transparencyMode !== ee && (this._transparencyMode = ee, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== Me.e.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(ee) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(ee)
          }
          clone(ie) {
            let He = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const be = Wi.c.Clone((() => new ee(ie, this.Xx())), this, {
              cloneTexturesOnlyOnce: He
            });
            return be.id = ie, be.name = ie, this.stencil.copyTo(be.stencil), this._clonePlugins(be, ye), be
          }
          serialize() {
            const ee = super.serialize();
            return ee.customType = "BABYLON.OpenPBRMaterial", ee
          }
          static Parse(ie, He, ye) {
            const be = Wi.c.Parse((() => new ee(ie.name, He)), ie, He, ye);
            return ie.stencil && be.stencil.parse(ie.stencil, He, ye), Me.e._ParsePlugins(ie, be, He, ye), be
          }
          forceCompilation(ee, ie, He) {
            const ye = {
              clipPlane: !1,
              useInstances: !1,
              ...He
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const He = new ri({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                be = this._prepareEffect(ee, ee, He, void 0, void 0, ye.useInstances, ye.clipPlane);
              this._onEffectCreatedObservable && (Si.effect = be, Si.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Si)), be.isReady() ? ie && ie(this) : be.onCompileObservable.add((() => {
                ie && ie(this)
              }))
            })()
          }
          isReadyForSubMesh(ie, He, ye) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const be = He._drawWrapper;
            if (be.effect && this.isFrozen && be._wasPreviouslyReady && be._wasPreviouslyUsingInstances === ye) return !0;
            He.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), He.materialDefines = new ri({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const Me = He.materialDefines;
            if (this._isReadyForSubMesh(He)) return !0;
            const Ke = this.Xx(),
              Ue = Ke.Nf();
            if (Me._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Ke.texturesEnabled)) {
              for (const ee in this._samplersList) {
                const ie = this._samplersList[ee];
                if (ie.value && !ie.value.isReadyOrNotBlocking()) return !1
              }
              const ie = this._getRadianceTexture();
              if (ie && Ne.c.ReflectionTextureEnabled) {
                if (!ie.isReadyOrNotBlocking()) return !1;
                if (ie.irradianceTexture) {
                  if (!ie.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!ie.sphericalPolynomial && ie.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && Ne.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && Ne.c.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && Ne.c.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (ee._noiseTextures[Ke.uniqueId] && !ee._noiseTextures[Ke.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Me, this._eventInfo.subMesh = He, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Me._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (Me.AREALIGHTUSED)
              for (let ee = 0; ee < ie.lightSources.length; ee++)
                if (!ie.lightSources[ee]._isReady()) return !1;
            if (Ue.getCaps().standardDerivatives || ie.isVerticesDataPresent(ve.h.NormalKind) || (ie.createNormals(!0), we.e.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + ie.name)), !(0, re.d)(Ke, ie, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const Fe = He.effect,
              Je = Me._areLightsDisposed,
              oe = this._prepareEffect(ie, He.getRenderingMesh(), Me, this.onCompiled, this.onError, ye, null);
            let Re = !1;
            if (oe)
              if (this._onEffectCreatedObservable && (Si.effect = oe, Si.subMesh = He, this._onEffectCreatedObservable.notifyObservers(Si)), this.allowShaderHotSwapping && Fe && !oe.isReady()) {
                if (Me.markAsUnprocessed(), Re = this.isFrozen, Je) return Me._areLightsDisposed = !0, !1
              } else Ke.resetCachedMaterial(), He.setEffect(oe, Me, this._materialContext);
            return !(!He.effect || !He.effect.isReady()) && (Me._renderId = Ke.getRenderId(), be._wasPreviouslyReady = !Re, be._wasPreviouslyUsingInstances = !!ye, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const ee = this._uniformBuffer;
            ee.addUniform("vTangentSpaceParams", 2), ee.addUniform("vLightingIntensity", 4), ee.addUniform("pointSize", 1), ee.addUniform("vDebugMode", 2), ee.addUniform("renderTargetSize", 2), ee.addUniform("cameraInfo", 4), ee.addUniform("vTextureRepetitionHexTilingParams", 4), ee.addUniform("backgroundRefractionMatrix", 16), ee.addUniform("vBackgroundRefractionInfos", 3), (0, re.hb)(ee, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((ie => {
              ee.addUniform(ie.name, ie.numComponents)
            })), Object.values(this._samplersList).forEach((ie => {
              ee.addUniform(ie.samplerInfoName, 2), ee.addUniform(ie.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(ee, ie, He, ye) {
            if (0 === this.geometryThickness) ee.updateFloat("vGeometryThickness", 0);
            else {
              ye.getRenderingMesh().getWorldMatrix().decompose(Ce.j.rf[0]);
              const ie = Math.max(Math.abs(Ce.j.rf[0].x), Math.abs(Ce.j.rf[0].y), Math.abs(Ce.j.rf[0].z));
              ee.updateFloat("vGeometryThickness", this.geometryThickness * ie)
            }
          }
          bindForSubMesh(ie, He, ye) {
            const be = this.Xx(),
              Me = ye.materialDefines;
            if (!Me) return;
            const Ke = ye.effect;
            if (!Ke) return;
            this._activeEffect = Ke, He.getMeshUniformBuffer().bindToEffect(Ke, "Mesh"), He.transferToEffect(ie);
            const Ue = be.Nf();
            this._uniformBuffer.bindToEffect(Ke, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, be, He, ie, this.isFrozen), qi.b.Bind(Ue.currentRenderPassId, this._activeEffect, He, ie, this);
            const Fe = be.activeCamera;
            Fe ? this._uniformBuffer.updateFloat4("cameraInfo", Fe.minZ, Fe.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Je = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Je[0], Je[1], Je[2], Je[3]), this._eventInfo.subMesh = ye, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Me.OBJECTSPACE_NORMALMAP && (ie.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const oe = this._mustRebind(be, Ke, ye, He.visibility),
              Re = Ue._features.needToAlwaysBindUniformBuffers;
            (0, re.g)(He, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Ri.e)(this._activeEffect, this._vertexPullingMetadata);
            const ke = this._uniformBuffer;
            if (oe) {
              this.bindViewProjection(Ke);
              const ie = this._getRadianceTexture();
              if (!ke.useUbo || !this.isFrozen || !ke.isSync || ye._drawWrapper._forceRebindOnNextCall) {
                if (be.texturesEnabled) {
                  for (const ee in this._samplersList) {
                    const ie = this._samplersList[ee];
                    ie.value && (ke.updateFloat2(ie.samplerInfoName, ie.value.coordinatesIndex, ie.value.level), (0, re.A)(ie.value, ke, ie.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (be._mirroredCameraPosition ? ke.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : ke.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, re.l)(be, Me, ke, je.c.White(), ie, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && ke.updateFloat("pointSize", this.pointSize);
                const ee = this._uniformsArray;
                for (let ie = 0, He = ee.length; ie < He; ie++) {
                  const He = ee[ie];
                  (void 0 === He.requiredDefine || Me[He.requiredDefine]) && (4 === He.numComponents ? (He.populateVectorFromLinkedProperties(Ce.j.Vector4[0]), ke.updateVector4(He.name, Ce.j.Vector4[0])) : 3 === He.numComponents ? (He.populateVectorFromLinkedProperties(Ce.j.rf[0]), ke.updateVector3(He.name, Ce.j.rf[0])) : 2 === He.numComponents ? (He.populateVectorFromLinkedProperties(Ce.j.Vector2[0]), ke.updateFloat2(He.name, Ce.j.Vector2[0].x, Ce.j.Vector2[0].y)) : 1 === He.numComponents && ke.updateFloat(He.name, He.linkedProperties[He.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * be.environmentIntensity, this._lightingInfos.w = 1, ke.updateVector4("vLightingIntensity", this._lightingInfos), ke.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (be.texturesEnabled) {
                for (const ee in this._samplersList) {
                  const ie = this._samplersList[ee];
                  ie.value && ke.setTexture(ie.samplerName, ie.value)
                }
                if ((0, re.n)(be, Me, ke, ie, this.realTimeFiltering), Me.ENVIRONMENTBRDF && ke.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), Me.FUZZENVIRONMENTBRDF && ke.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), Me.REFRACTED_BACKGROUND && (ke.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), ke.oie("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Ce.j.rf[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), ke.updateVector3("vBackgroundRefractionInfos", Ce.j.rf[1])), (Me.ANISOTROPIC || Me.FUZZ || Me.REFRACTED_BACKGROUND || Me.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && ke.setTexture("blueNoiseSampler", ee._noiseTextures[this.Xx().uniqueId]), Me.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const ee = this.sssIrradianceTexture.getSize().width,
                    ie = this.sssIrradianceTexture.getSize().height;
                  ke.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), ke.setTexture("sceneDepthSampler", this.sssDepthTexture), ke.updateFloat2("renderTargetSize", ee, ie)
                }
              }
              this.Xx().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(He) && this.Xx().depthPeelingRenderer.bind(Ke), this._eventInfo.subMesh = ye, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, oi.f)(this._activeEffect, this, be), this.bindEyePosition(Ke)
            } else Re && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, be, be.Nf(), ye), !oe && this.isFrozen && !Re || !be.lightsEnabled || this._disableLighting || (0, re.r)(be, He, this._activeEffect, Me, this._maxSimultaneousLights), !oe && this.isFrozen || (this.bindView(Ke), (0, re.k)(be, He, this._activeEffect, !0), Me.NUM_MORPH_INFLUENCERS && (0, re.w)(He, this._activeEffect), Me.BAKED_VERTEX_ANIMATION_TEXTURE && He.bakedVertexAnimationManager?.bind(Ke, Me.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, re.v)(Me, this._activeEffect, be)), this._afterBind(He, this._activeEffect, ye), ke.update()
          }
          getAnimatables() {
            const ee = super.getAnimatables();
            for (const ie in this._samplersList) {
              const He = this._samplersList[ie];
              He.value && He.value.animations && He.value.animations.length > 0 && ee.push(He.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && ee.push(this._radianceTexture), ee
          }
          getActiveTextures() {
            const ee = super.getActiveTextures();
            for (const ie in this._samplersList) {
              const He = this._samplersList[ie];
              He.value && ee.push(He.value)
            }
            return this._radianceTexture && ee.push(this._radianceTexture), ee
          }
          hasTexture(ee) {
            if (super.hasTexture(ee)) return !0;
            for (const ie in this._samplersList) {
              if (this._samplersList[ie].value === ee) return !0
            }
            return this._radianceTexture === ee
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(ee, ie) {
            if (this._breakShaderLoadedCheck = !0, ie) {
              this._environmentBRDFTexture && this.Xx().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.Xx().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const ee in this._samplersList) {
                const ie = this._samplersList[ee];
                ie.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(ee, ie)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.Xx().environmentTexture
          }
          _prepareEffect(ie, He, ye) {
            let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Ke = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Ue = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(ie, He, ye, Ke, Ue), !ye.isDirty) return null;
            ye.markAsProcessed();
            const Fe = this.Xx().Nf(),
              Je = new Ge.e;
            let oe = 0;
            ye.USESPHERICALINVERTEX && Je.addFallback(oe++, "USESPHERICALINVERTEX"), ye.FOG && Je.addFallback(oe, "FOG"), ye.SPECULARAA && Je.addFallback(oe, "SPECULARAA"), ye.POINTSIZE && Je.addFallback(oe, "POINTSIZE"), ye.LOGARITHMICDEPTH && Je.addFallback(oe, "LOGARITHMICDEPTH"), ye.PARALLAX && Je.addFallback(oe, "PARALLAX"), ye.PARALLAX_RHS && Je.addFallback(oe, "PARALLAX_RHS"), ye.PARALLAXOCCLUSION && Je.addFallback(oe++, "PARALLAXOCCLUSION"), ye.ENVIRONMENTBRDF && Je.addFallback(oe++, "ENVIRONMENTBRDF"), ye.TANGENT && Je.addFallback(oe++, "TANGENT"), oe = (0, re.D)(ye, Je, this._maxSimultaneousLights, oe), ye.SPECULARTERM && Je.addFallback(oe++, "SPECULARTERM"), ye.USESPHERICALFROMREFLECTIONMAP && Je.addFallback(oe++, "USESPHERICALFROMREFLECTIONMAP"), ye.USEIRRADIANCEMAP && Je.addFallback(oe++, "USEIRRADIANCEMAP"), ye.NORMAL && Je.addFallback(oe++, "NORMAL"), ye.VERTEXCOLOR && Je.addFallback(oe++, "VERTEXCOLOR"), ye.MORPHTARGETS && Je.addFallback(oe++, "MORPHTARGETS"), ye.MULTIVIEW && Je.addFallback(0, "MULTIVIEW");
            const Re = [ve.h.PositionKind];
            ye.NORMAL && Re.push(ve.h.NormalKind), ye.TANGENT && Re.push(ve.h.TangentKind);
            for (let ee = 1; ee <= 6; ++ee) ye["UV" + ee] && Re.push(`uv${1===ee?"":ee}`);
            ye.VERTEXCOLOR && Re.push(ve.h.ColorKind), (0, re.I)(Re, ie, ye, Je), (0, re.K)(Re, ye), (0, re.O)(Re, ie, ye), (0, re.F)(Re, ie, ye);
            let ke = "openpbr";
            const qe = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const ee in this._uniformsList) qe.push(ee);
            const fe = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            ye.FUZZENVIRONMENTBRDF && fe.push("environmentFuzzBrdfSampler"), ye.REFRACTED_BACKGROUND && fe.push("backgroundRefractionSampler"), (ye.ANISOTROPIC || ye.FUZZ || ye.REFRACTED_BACKGROUND || ye.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && fe.push("blueNoiseSampler"), ye.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (fe.push("sceneIrradianceSampler"), fe.push("sceneDepthSampler"));
            for (const ee in this._samplersList) {
              const ie = this._samplersList[ee];
              fe.push(ie.samplerName), qe.push(ie.samplerInfoName), qe.push(ie.samplerMatrixName)
            }(0, re.kb)(qe, fe, !0);
            const Te = ["Material", "Scene", "Mesh"],
              pe = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: ye.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = Je, this._eventInfo.fallbackRank = oe, this._eventInfo.defines = ye, this._eventInfo.uniforms = qe, this._eventInfo.attributes = Re, this._eventInfo.samplers = fe, this._eventInfo.uniformBuffersNames = Te, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ie, this._eventInfo.indexParameters = pe, this._callbackPluginEventGeneric(128, this._eventInfo), qi.b.AddUniformsAndSamplers(qe, fe), ne.b.AddUniforms(qe), ne.b.AddSamplers(fe), (0, oi.e)(qe), this._useVertexPulling) {
              const ee = He?.geometry;
              ee && (this._vertexPullingMetadata = (0, Ri.h)(ee), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((ee, ie) => {
                qe.push(`vp_${ie}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            Ie.e && (Ie.e.PrepareUniforms(qe, ye), Ie.e.PrepareSamplers(fe, ye)), (0, re.nb)({
              uniformsNames: qe,
              uniformBuffersNames: Te,
              samplers: fe,
              defines: ye,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const Xe = {};
            this.customShaderNameResolve && (ke = this.customShaderNameResolve(ke, qe, Te, fe, ye, Re, Xe));
            const ze = ye.toString(),
              Be = Fe.createEffect(ke, {
                attributes: Re,
                uniformsNames: qe,
                uniformBuffersNames: Te,
                samplers: fe,
                defines: ze,
                fallbacks: Je,
                onCompiled: be,
                onError: Me,
                indexParameters: pe,
                processFinalCode: Xe.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: ye.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: ee._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, Fe);
            return this._eventInfo.customCode = void 0, Be
          }
          _prepareDefines(ie, He, ye) {
            let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Ke = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Ue = He.hasThinInstances,
              Fe = this.Xx(),
              Je = Fe.Nf();
            (0, re.W)(Fe, ie, ye, !0, this._maxSimultaneousLights, this._disableLighting), ye._needNormals = !0, (0, re.ab)(Fe, ye);
            const oe = this.needAlphaBlendingForMesh(ie) && this.Xx().useOrderIndependentTransparency;
            if ((0, re.eb)(Fe, ye, this.canRenderToMRT && !oe), (0, re.cb)(Fe, ye, oe), qi.b.PrepareDefines(Je.currentRenderPassId, ie, ye), ye._areTexturesDirty) {
              ye._needUVs = !1;
              for (let ee = 1; ee <= 6; ++ee) ye["MAINUV" + ee] = !1;
              if (Fe.texturesEnabled) {
                for (const He in this._samplersList) {
                  const ee = this._samplersList[He];
                  ee.value ? ((0, re.Z)(ee.value, ye, ee.textureDefine), ye[ee.textureDefine + "_GAMMA"] = ee.value.gammaSpace) : ye[ee.textureDefine] = !1
                }
                const ee = this._getRadianceTexture(),
                  ie = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Je.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, re.V)(Fe, ee, ye, this.realTimeFiltering, this.realTimeFilteringQuality, !ie), this._baseMetalnessTexture && (ye.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), ye.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, ye.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, ye.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, ye.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, ye.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, ye.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, ye.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, ye.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, ye.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, ye.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, ye.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && Ne.c.DiffuseTextureEnabled ? (ye.PARALLAX = !0, ye.PARALLAX_RHS = Fe.useRightHandedSystem, ye.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : ye.PARALLAX = !1, ye.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (ye.PARALLAX = !1, ye.PARALLAX_RHS = !1, ye.PARALLAXOCCLUSION = !1, ye.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Ne.c.ReflectionTextureEnabled ? (ye.ENVIRONMENTBRDF = !0, ye.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (ye.ENVIRONMENTBRDF = !1, ye.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? ye.FUZZENVIRONMENTBRDF = !0 : ye.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  ye.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && Ne.c.RefractionTextureEnabled, ye.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, ye.REFRACTED_LIGHTS = !0;
                  const ee = this._getRadianceTexture();
                  ee ? (ye.REFRACTED_ENVIRONMENT = Ne.c.RefractionTextureEnabled, ye.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.Xx().useRightHandedSystem ? !ee.invertZ : ee.invertZ, ye.REFRACTED_ENVIRONMENT_LOCAL_CUBE = ee.isCube && ee.boundingBoxSize) : ye.REFRACTED_ENVIRONMENT = !1
                } else ye.REFRACTED_BACKGROUND = !1, ye.REFRACTED_LIGHTS = !1, ye.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? ye.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : ye.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === Me.e.LIGHTFALLOFF_STANDARD ? (ye.USEPHYSICALLIGHTFALLOFF = !1, ye.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === Me.e.LIGHTFALLOFF_GLTF ? (ye.USEPHYSICALLIGHTFALLOFF = !1, ye.USEGLTFLIGHTFALLOFF = !0) : (ye.USEPHYSICALLIGHTFALLOFF = !0, ye.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? ye.TWOSIDEDLIGHTING = !0 : ye.TWOSIDEDLIGHTING = !1, ye.MIRRORED = !!Fe._mirroredCameraPosition, ye.SPECULARAA = Je.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(ye._areTexturesDirty || ye._areMiscDirty) && (ye.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, ye.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, ye.ALPHABLEND = this.needAlphaBlendingForMesh(ie)), ye._areTexturesDirty && (ye.TEXTURE_REPETITION_MODE = Je.version > 1 || Je.isWebGPU ? this.textureRepetitionMode : 0), ye._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(ye), ye.FORCENORMALFORWARD = this._forceNormalForward, ye.RADIANCEOCCLUSION = this._useRadianceOcclusion, ye.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && ee._noiseTextures[Fe.uniqueId] && Ne.c.ReflectionTextureEnabled ? (ye.ANISOTROPIC = !0, ie.isVerticesDataPresent(ve.h.TangentKind) || (ye._needUVs = !0, ye.MAINUV1 = !0), this._useGltfStyleAnisotropy && (ye.USE_GLTF_STYLE_ANISOTROPY = !0), ye.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, ye.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (ye.ANISOTROPIC = !1, ye.USE_GLTF_STYLE_ANISOTROPY = !1, ye.ANISOTROPIC_BASE = !1, ye.ANISOTROPIC_COAT = !1), ye.THIN_FILM = this.thinFilmWeight > 0, ye.IRIDESCENCE = this.thinFilmWeight > 0, ye.DISPERSION = this.transmissionDispersionScale > 0, ye.SCATTERING = this.hasScattering;
            if (ye.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, ye.TRANSMISSION_SLAB = this.transmissionWeight > 0, ye.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, ye.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !ye.PREPASS && (ye.SUBSURFACE_SLAB || ye.TRANSMISSION_SLAB_VOLUME)) {
              let ee = !1;
              if (!this.sssIrradianceTexture && Fe.geometryBufferRenderer) {
                const ie = Fe.geometryBufferRenderer.getTextureIndex(mi.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = Fe.geometryBufferRenderer.getGBuffer().textures[ie], ee = !0
              }
              if (!this.sssDepthTexture && Fe.geometryBufferRenderer) {
                const ie = Fe.geometryBufferRenderer.getTextureIndex(mi.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = Fe.geometryBufferRenderer.getGBuffer().textures[ie], ee = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (ye.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, ee && (ye.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            ye.FUZZ = this.fuzzWeight > 0 && Ne.c.ReflectionTextureEnabled, ye.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, ye.FUZZ ? (ie.isVerticesDataPresent(ve.h.TangentKind) || (ye._needUVs = !0, ye.MAINUV1 = !0), this._environmentFuzzBRDFTexture = ce(this.Xx()), ye.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, ye.FUZZENVIRONMENTBRDF = !1, ye.FUZZ_IBL_SAMPLES = 0), ye._areMiscDirty && ((0, re._)(ie, Fe, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ie), ye, this._applyDecalMapAfterDetailMap, this._useVertexPulling, He, this._isVertexOutputInvariant), ye.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !ie.isVerticesDataPresent(ve.h.NormalKind), ye.DEBUGMODE = this._debugMode), (0, re.U)(Fe, Je, this, ye, !!be, Ke, Ue), this._eventInfo.defines = ye, this._eventInfo.mesh = ie, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, re.T)(ie, ye, !0, !0, !0, this._transparencyMode !== Me.e.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, ie = new WeakMap, ye = new WeakMap, be = new WeakMap, Ke = new WeakMap, Ue = new WeakMap, Fe = new WeakMap, Je = new WeakMap, oe = new WeakMap, Re = new WeakMap, ke = new WeakMap, qe = new WeakMap, fe = new WeakMap, Te = new WeakMap, pe = new WeakMap, Xe = new WeakMap, ze = new WeakMap, Be = new WeakMap, Ee = new WeakMap, ge = new WeakMap, Oe = new WeakMap, de = new WeakMap, We = new WeakMap, Ae = new WeakMap, Ye = new WeakMap, Ve = new WeakMap, ae = new WeakMap, Le = new WeakMap, ue = new WeakMap, me = new WeakMap, le = new WeakMap, Se = new WeakMap, se = new WeakMap, he = new WeakMap, Qe = new WeakMap, ei = new WeakMap, ii = new WeakMap, Hi = new WeakMap, yi = new WeakMap, bi = new WeakMap, Mi = new WeakMap, Ki = new WeakMap, Ui = new WeakMap, Fi = new WeakMap, Ji = new WeakMap, fi = new WeakMap, Ti = new WeakMap, Xi = new WeakMap, zi = new WeakMap, Bi = new WeakMap, Ei = new WeakMap, gi = new WeakMap, Oi = new WeakMap, di = new WeakMap, Zi = new WeakMap, wi = new WeakMap, Di = new WeakMap, Pi = new WeakMap, Ai = new WeakMap, Yi = new WeakMap, Vi = new WeakMap, ai = new WeakMap, ci = new WeakMap, xi = new WeakMap, Li = new WeakMap, Ci = new WeakMap, vi = new WeakMap, ui = new WeakMap, li = new WeakMap, ni = new WeakMap, Ni = new WeakMap, Gi = new WeakMap, eH = new WeakMap, iH = new WeakMap, HH = new WeakMap, yH = new WeakMap, bH = new WeakMap, MH = new WeakMap, KH = new WeakMap, UH = new WeakMap, FH = new WeakMap, JH = new WeakMap, oH = new WeakMap, RH = new WeakMap, kH = new WeakMap, qH = new WeakMap, fH = new WeakMap, TH = new WeakMap, pH = new WeakMap, XH = new WeakMap, zH = new WeakMap, BH = new WeakMap, EH = new WeakMap, gH = new WeakMap, OH = new WeakMap, dH = new WeakMap, WH = new WeakMap, tH = new WeakMap, ZH = new WeakMap, wH = new WeakMap, DH = new WeakMap, PH = new WeakMap, AH = new WeakMap, (() => {
          const ie = "function" === typeof Symbol && Symbol.metadata ? Object.create(Vb[Symbol.metadata] ?? null) : void 0;
          YH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], VH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], aH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], cH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], xH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], LH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], CH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], vH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], uH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], mH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], lH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], SH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], nH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], jH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], sH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], IH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], hH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], NH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], GH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], rH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], QH = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], ey = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], iy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Hy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], yy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], by = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], My = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Ky = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Uy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Fy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Jy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], oy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Ry = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], ky = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], qy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], fy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Ty = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], py = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Xy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], zy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], By = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Ey = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], gy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Oy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], dy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Wy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], ty = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Zy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], wy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Dy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Py = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Ay = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Yy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Vy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], ay = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], cy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], xy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Ly = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Cy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], vy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], uy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], my = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], ly = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Sy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], ny = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], jy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], sy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Iy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], hy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Ny = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Gy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], ry = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Qy = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], eb = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], ib = [(0, Ze.c)("_markAllSubMeshesAsTexturesDirty")], Hb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], yb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], bb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Mb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], Kb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ub = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Fb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Jb = [(0, Ze.R)()], ob = [(0, Ze.R)()], Rb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], kb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], qb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], fb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Tb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsLightsDirty")], pb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Xb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsLightsDirty")], zb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Bb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Eb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], gb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Ob = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], db = [(0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Wb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], tb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Zb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], wb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Db = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], Pb = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], Ab = [(0, Ze.d)("_markAllSubMeshesAsMiscDirty")], Yb = [(0, Ze.R)()], (0, te.i)(ee, null, YH, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: ee => "baseWeight" in ee,
              get: ee => ee.baseWeight,
              set: (ee, ie) => {
                ee.baseWeight = ie
              }
            },
            metadata: ie
          }, cb, xb), (0, te.i)(ee, null, VH, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "baseWeightTexture" in ee,
              get: ee => ee.baseWeightTexture,
              set: (ee, ie) => {
                ee.baseWeightTexture = ie
              }
            },
            metadata: ie
          }, Lb, Cb), (0, te.i)(ee, null, aH, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "baseColor" in ee,
              get: ee => ee.baseColor,
              set: (ee, ie) => {
                ee.baseColor = ie
              }
            },
            metadata: ie
          }, vb, ub), (0, te.i)(ee, null, cH, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "baseColorTexture" in ee,
              get: ee => ee.baseColorTexture,
              set: (ee, ie) => {
                ee.baseColorTexture = ie
              }
            },
            metadata: ie
          }, mb, lb), (0, te.i)(ee, null, xH, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: ee => "baseDiffuseRoughness" in ee,
              get: ee => ee.baseDiffuseRoughness,
              set: (ee, ie) => {
                ee.baseDiffuseRoughness = ie
              }
            },
            metadata: ie
          }, Sb, nb), (0, te.i)(ee, null, LH, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "baseDiffuseRoughnessTexture" in ee,
              get: ee => ee.baseDiffuseRoughnessTexture,
              set: (ee, ie) => {
                ee.baseDiffuseRoughnessTexture = ie
              }
            },
            metadata: ie
          }, jb, sb), (0, te.i)(ee, null, CH, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: ee => "baseMetalness" in ee,
              get: ee => ee.baseMetalness,
              set: (ee, ie) => {
                ee.baseMetalness = ie
              }
            },
            metadata: ie
          }, Ib, hb), (0, te.i)(ee, null, vH, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "baseMetalnessTexture" in ee,
              get: ee => ee.baseMetalnessTexture,
              set: (ee, ie) => {
                ee.baseMetalnessTexture = ie
              }
            },
            metadata: ie
          }, Nb, Gb), (0, te.i)(ee, null, uH, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: ee => "specularWeight" in ee,
              get: ee => ee.specularWeight,
              set: (ee, ie) => {
                ee.specularWeight = ie
              }
            },
            metadata: ie
          }, rb, Qb), (0, te.i)(ee, null, mH, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "specularWeightTexture" in ee,
              get: ee => ee.specularWeightTexture,
              set: (ee, ie) => {
                ee.specularWeightTexture = ie
              }
            },
            metadata: ie
          }, eM, iM), (0, te.i)(ee, null, lH, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "specularColor" in ee,
              get: ee => ee.specularColor,
              set: (ee, ie) => {
                ee.specularColor = ie
              }
            },
            metadata: ie
          }, HM, yM), (0, te.i)(ee, null, SH, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "specularColorTexture" in ee,
              get: ee => ee.specularColorTexture,
              set: (ee, ie) => {
                ee.specularColorTexture = ie
              }
            },
            metadata: ie
          }, bM, MM), (0, te.i)(ee, null, nH, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: ee => "specularRoughness" in ee,
              get: ee => ee.specularRoughness,
              set: (ee, ie) => {
                ee.specularRoughness = ie
              }
            },
            metadata: ie
          }, KM, UM), (0, te.i)(ee, null, jH, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "specularRoughnessTexture" in ee,
              get: ee => ee.specularRoughnessTexture,
              set: (ee, ie) => {
                ee.specularRoughnessTexture = ie
              }
            },
            metadata: ie
          }, FM, JM), (0, te.i)(ee, null, sH, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: ee => "specularRoughnessAnisotropy" in ee,
              get: ee => ee.specularRoughnessAnisotropy,
              set: (ee, ie) => {
                ee.specularRoughnessAnisotropy = ie
              }
            },
            metadata: ie
          }, oM, RM), (0, te.i)(ee, null, IH, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "specularRoughnessAnisotropyTexture" in ee,
              get: ee => ee.specularRoughnessAnisotropyTexture,
              set: (ee, ie) => {
                ee.specularRoughnessAnisotropyTexture = ie
              }
            },
            metadata: ie
          }, kM, qM), (0, te.i)(ee, null, hH, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: ee => "specularIor" in ee,
              get: ee => ee.specularIor,
              set: (ee, ie) => {
                ee.specularIor = ie
              }
            },
            metadata: ie
          }, fM, TM), (0, te.i)(ee, null, NH, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: ee => "transmissionWeight" in ee,
              get: ee => ee.transmissionWeight,
              set: (ee, ie) => {
                ee.transmissionWeight = ie
              }
            },
            metadata: ie
          }, pM, XM), (0, te.i)(ee, null, GH, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "transmissionWeightTexture" in ee,
              get: ee => ee.transmissionWeightTexture,
              set: (ee, ie) => {
                ee.transmissionWeightTexture = ie
              }
            },
            metadata: ie
          }, zM, BM), (0, te.i)(ee, null, rH, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "transmissionColor" in ee,
              get: ee => ee.transmissionColor,
              set: (ee, ie) => {
                ee.transmissionColor = ie
              }
            },
            metadata: ie
          }, EM, gM), (0, te.i)(ee, null, QH, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "transmissionColorTexture" in ee,
              get: ee => ee.transmissionColorTexture,
              set: (ee, ie) => {
                ee.transmissionColorTexture = ie
              }
            },
            metadata: ie
          }, OM, dM), (0, te.i)(ee, null, ey, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: ee => "transmissionDepth" in ee,
              get: ee => ee.transmissionDepth,
              set: (ee, ie) => {
                ee.transmissionDepth = ie
              }
            },
            metadata: ie
          }, WM, tM), (0, te.i)(ee, null, iy, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "transmissionDepthTexture" in ee,
              get: ee => ee.transmissionDepthTexture,
              set: (ee, ie) => {
                ee.transmissionDepthTexture = ie
              }
            },
            metadata: ie
          }, ZM, wM), (0, te.i)(ee, null, Hy, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: ee => "transmissionScatter" in ee,
              get: ee => ee.transmissionScatter,
              set: (ee, ie) => {
                ee.transmissionScatter = ie
              }
            },
            metadata: ie
          }, DM, PM), (0, te.i)(ee, null, yy, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "transmissionScatterTexture" in ee,
              get: ee => ee.transmissionScatterTexture,
              set: (ee, ie) => {
                ee.transmissionScatterTexture = ie
              }
            },
            metadata: ie
          }, AM, YM), (0, te.i)(ee, null, by, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: ee => "transmissionScatterAnisotropy" in ee,
              get: ee => ee.transmissionScatterAnisotropy,
              set: (ee, ie) => {
                ee.transmissionScatterAnisotropy = ie
              }
            },
            metadata: ie
          }, VM, aM), (0, te.i)(ee, null, My, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: ee => "transmissionDispersionScale" in ee,
              get: ee => ee.transmissionDispersionScale,
              set: (ee, ie) => {
                ee.transmissionDispersionScale = ie
              }
            },
            metadata: ie
          }, cM, xM), (0, te.i)(ee, null, Ky, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "transmissionDispersionScaleTexture" in ee,
              get: ee => ee.transmissionDispersionScaleTexture,
              set: (ee, ie) => {
                ee.transmissionDispersionScaleTexture = ie
              }
            },
            metadata: ie
          }, LM, CM), (0, te.i)(ee, null, Uy, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: ee => "transmissionDispersionAbbeNumber" in ee,
              get: ee => ee.transmissionDispersionAbbeNumber,
              set: (ee, ie) => {
                ee.transmissionDispersionAbbeNumber = ie
              }
            },
            metadata: ie
          }, vM, uM), (0, te.i)(ee, null, Fy, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: ee => "subsurfaceWeight" in ee,
              get: ee => ee.subsurfaceWeight,
              set: (ee, ie) => {
                ee.subsurfaceWeight = ie
              }
            },
            metadata: ie
          }, mM, lM), (0, te.i)(ee, null, Jy, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "subsurfaceWeightTexture" in ee,
              get: ee => ee.subsurfaceWeightTexture,
              set: (ee, ie) => {
                ee.subsurfaceWeightTexture = ie
              }
            },
            metadata: ie
          }, SM, nM), (0, te.i)(ee, null, oy, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "subsurfaceColor" in ee,
              get: ee => ee.subsurfaceColor,
              set: (ee, ie) => {
                ee.subsurfaceColor = ie
              }
            },
            metadata: ie
          }, jM, sM), (0, te.i)(ee, null, Ry, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "subsurfaceColorTexture" in ee,
              get: ee => ee.subsurfaceColorTexture,
              set: (ee, ie) => {
                ee.subsurfaceColorTexture = ie
              }
            },
            metadata: ie
          }, IM, hM), (0, te.i)(ee, null, ky, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: ee => "subsurfaceRadius" in ee,
              get: ee => ee.subsurfaceRadius,
              set: (ee, ie) => {
                ee.subsurfaceRadius = ie
              }
            },
            metadata: ie
          }, NM, GM), (0, te.i)(ee, null, qy, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: ee => "subsurfaceRadiusScale" in ee,
              get: ee => ee.subsurfaceRadiusScale,
              set: (ee, ie) => {
                ee.subsurfaceRadiusScale = ie
              }
            },
            metadata: ie
          }, rM, QM), (0, te.i)(ee, null, fy, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "subsurfaceRadiusScaleTexture" in ee,
              get: ee => ee.subsurfaceRadiusScaleTexture,
              set: (ee, ie) => {
                ee.subsurfaceRadiusScaleTexture = ie
              }
            },
            metadata: ie
          }, eK, iK), (0, te.i)(ee, null, Ty, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: ee => "subsurfaceScatterAnisotropy" in ee,
              get: ee => ee.subsurfaceScatterAnisotropy,
              set: (ee, ie) => {
                ee.subsurfaceScatterAnisotropy = ie
              }
            },
            metadata: ie
          }, HK, yK), (0, te.i)(ee, null, py, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: ee => "coatWeight" in ee,
              get: ee => ee.coatWeight,
              set: (ee, ie) => {
                ee.coatWeight = ie
              }
            },
            metadata: ie
          }, bK, MK), (0, te.i)(ee, null, Xy, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "coatWeightTexture" in ee,
              get: ee => ee.coatWeightTexture,
              set: (ee, ie) => {
                ee.coatWeightTexture = ie
              }
            },
            metadata: ie
          }, KK, UK), (0, te.i)(ee, null, zy, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "coatColor" in ee,
              get: ee => ee.coatColor,
              set: (ee, ie) => {
                ee.coatColor = ie
              }
            },
            metadata: ie
          }, FK, JK), (0, te.i)(ee, null, By, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "coatColorTexture" in ee,
              get: ee => ee.coatColorTexture,
              set: (ee, ie) => {
                ee.coatColorTexture = ie
              }
            },
            metadata: ie
          }, oK, RK), (0, te.i)(ee, null, Ey, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: ee => "coatRoughness" in ee,
              get: ee => ee.coatRoughness,
              set: (ee, ie) => {
                ee.coatRoughness = ie
              }
            },
            metadata: ie
          }, kK, qK), (0, te.i)(ee, null, gy, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "coatRoughnessTexture" in ee,
              get: ee => ee.coatRoughnessTexture,
              set: (ee, ie) => {
                ee.coatRoughnessTexture = ie
              }
            },
            metadata: ie
          }, fK, TK), (0, te.i)(ee, null, Oy, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: ee => "coatRoughnessAnisotropy" in ee,
              get: ee => ee.coatRoughnessAnisotropy,
              set: (ee, ie) => {
                ee.coatRoughnessAnisotropy = ie
              }
            },
            metadata: ie
          }, pK, XK), (0, te.i)(ee, null, dy, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "coatRoughnessAnisotropyTexture" in ee,
              get: ee => ee.coatRoughnessAnisotropyTexture,
              set: (ee, ie) => {
                ee.coatRoughnessAnisotropyTexture = ie
              }
            },
            metadata: ie
          }, zK, BK), (0, te.i)(ee, null, Wy, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: ee => "coatIor" in ee,
              get: ee => ee.coatIor,
              set: (ee, ie) => {
                ee.coatIor = ie
              }
            },
            metadata: ie
          }, EK, gK), (0, te.i)(ee, null, ty, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: ee => "coatDarkening" in ee,
              get: ee => ee.coatDarkening,
              set: (ee, ie) => {
                ee.coatDarkening = ie
              }
            },
            metadata: ie
          }, OK, dK), (0, te.i)(ee, null, Zy, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "coatDarkeningTexture" in ee,
              get: ee => ee.coatDarkeningTexture,
              set: (ee, ie) => {
                ee.coatDarkeningTexture = ie
              }
            },
            metadata: ie
          }, WK, tK), (0, te.i)(ee, null, wy, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: ee => "fuzzWeight" in ee,
              get: ee => ee.fuzzWeight,
              set: (ee, ie) => {
                ee.fuzzWeight = ie
              }
            },
            metadata: ie
          }, ZK, wK), (0, te.i)(ee, null, Dy, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "fuzzWeightTexture" in ee,
              get: ee => ee.fuzzWeightTexture,
              set: (ee, ie) => {
                ee.fuzzWeightTexture = ie
              }
            },
            metadata: ie
          }, DK, PK), (0, te.i)(ee, null, Py, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "fuzzColor" in ee,
              get: ee => ee.fuzzColor,
              set: (ee, ie) => {
                ee.fuzzColor = ie
              }
            },
            metadata: ie
          }, AK, YK), (0, te.i)(ee, null, Ay, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "fuzzColorTexture" in ee,
              get: ee => ee.fuzzColorTexture,
              set: (ee, ie) => {
                ee.fuzzColorTexture = ie
              }
            },
            metadata: ie
          }, VK, aK), (0, te.i)(ee, null, Yy, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: ee => "fuzzRoughness" in ee,
              get: ee => ee.fuzzRoughness,
              set: (ee, ie) => {
                ee.fuzzRoughness = ie
              }
            },
            metadata: ie
          }, cK, xK), (0, te.i)(ee, null, Vy, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "fuzzRoughnessTexture" in ee,
              get: ee => ee.fuzzRoughnessTexture,
              set: (ee, ie) => {
                ee.fuzzRoughnessTexture = ie
              }
            },
            metadata: ie
          }, LK, CK), (0, te.i)(ee, null, ay, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: ee => "geometryThinWalled" in ee,
              get: ee => ee.geometryThinWalled,
              set: (ee, ie) => {
                ee.geometryThinWalled = ie
              }
            },
            metadata: ie
          }, vK, uK), (0, te.i)(ee, null, cy, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "geometryNormalTexture" in ee,
              get: ee => ee.geometryNormalTexture,
              set: (ee, ie) => {
                ee.geometryNormalTexture = ie
              }
            },
            metadata: ie
          }, mK, lK), (0, te.i)(ee, null, xy, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: ee => "geometryTangent" in ee,
              get: ee => ee.geometryTangent,
              set: (ee, ie) => {
                ee.geometryTangent = ie
              }
            },
            metadata: ie
          }, SK, nK), (0, te.i)(ee, null, Ly, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "geometryTangentTexture" in ee,
              get: ee => ee.geometryTangentTexture,
              set: (ee, ie) => {
                ee.geometryTangentTexture = ie
              }
            },
            metadata: ie
          }, jK, sK), (0, te.i)(ee, null, Cy, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "geometryCoatNormalTexture" in ee,
              get: ee => ee.geometryCoatNormalTexture,
              set: (ee, ie) => {
                ee.geometryCoatNormalTexture = ie
              }
            },
            metadata: ie
          }, IK, hK), (0, te.i)(ee, null, vy, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: ee => "geometryCoatTangent" in ee,
              get: ee => ee.geometryCoatTangent,
              set: (ee, ie) => {
                ee.geometryCoatTangent = ie
              }
            },
            metadata: ie
          }, NK, GK), (0, te.i)(ee, null, uy, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "geometryCoatTangentTexture" in ee,
              get: ee => ee.geometryCoatTangentTexture,
              set: (ee, ie) => {
                ee.geometryCoatTangentTexture = ie
              }
            },
            metadata: ie
          }, rK, QK), (0, te.i)(ee, null, my, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: ee => "geometryOpacity" in ee,
              get: ee => ee.geometryOpacity,
              set: (ee, ie) => {
                ee.geometryOpacity = ie
              }
            },
            metadata: ie
          }, eU, iU), (0, te.i)(ee, null, ly, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "geometryOpacityTexture" in ee,
              get: ee => ee.geometryOpacityTexture,
              set: (ee, ie) => {
                ee.geometryOpacityTexture = ie
              }
            },
            metadata: ie
          }, HU, yU), (0, te.i)(ee, null, Sy, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: ee => "geometryThickness" in ee,
              get: ee => ee.geometryThickness,
              set: (ee, ie) => {
                ee.geometryThickness = ie
              }
            },
            metadata: ie
          }, bU, MU), (0, te.i)(ee, null, ny, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "geometryThicknessTexture" in ee,
              get: ee => ee.geometryThicknessTexture,
              set: (ee, ie) => {
                ee.geometryThicknessTexture = ie
              }
            },
            metadata: ie
          }, KU, UU), (0, te.i)(ee, null, jy, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: ee => "emissionLuminance" in ee,
              get: ee => ee.emissionLuminance,
              set: (ee, ie) => {
                ee.emissionLuminance = ie
              }
            },
            metadata: ie
          }, FU, JU), (0, te.i)(ee, null, sy, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "emissionColor" in ee,
              get: ee => ee.emissionColor,
              set: (ee, ie) => {
                ee.emissionColor = ie
              }
            },
            metadata: ie
          }, oU, RU), (0, te.i)(ee, null, Iy, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "emissionColorTexture" in ee,
              get: ee => ee.emissionColorTexture,
              set: (ee, ie) => {
                ee.emissionColorTexture = ie
              }
            },
            metadata: ie
          }, kU, qU), (0, te.i)(ee, null, hy, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: ee => "thinFilmWeight" in ee,
              get: ee => ee.thinFilmWeight,
              set: (ee, ie) => {
                ee.thinFilmWeight = ie
              }
            },
            metadata: ie
          }, fU, TU), (0, te.i)(ee, null, Ny, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "thinFilmWeightTexture" in ee,
              get: ee => ee.thinFilmWeightTexture,
              set: (ee, ie) => {
                ee.thinFilmWeightTexture = ie
              }
            },
            metadata: ie
          }, pU, XU), (0, te.i)(ee, null, Gy, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: ee => "thinFilmThickness" in ee,
              get: ee => ee.thinFilmThickness,
              set: (ee, ie) => {
                ee.thinFilmThickness = ie
              }
            },
            metadata: ie
          }, zU, BU), (0, te.i)(ee, null, ry, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: ee => "thinFilmThicknessMin" in ee,
              get: ee => ee.thinFilmThicknessMin,
              set: (ee, ie) => {
                ee.thinFilmThicknessMin = ie
              }
            },
            metadata: ie
          }, EU, gU), (0, te.i)(ee, null, Qy, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "thinFilmThicknessTexture" in ee,
              get: ee => ee.thinFilmThicknessTexture,
              set: (ee, ie) => {
                ee.thinFilmThicknessTexture = ie
              }
            },
            metadata: ie
          }, OU, dU), (0, te.i)(ee, null, eb, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: ee => "thinFilmIor" in ee,
              get: ee => ee.thinFilmIor,
              set: (ee, ie) => {
                ee.thinFilmIor = ie
              }
            },
            metadata: ie
          }, WU, tU), (0, te.i)(ee, null, ib, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "ambientOcclusionTexture" in ee,
              get: ee => ee.ambientOcclusionTexture,
              set: (ee, ie) => {
                ee.ambientOcclusionTexture = ie
              }
            },
            metadata: ie
          }, ZU, wU), (0, te.i)(ee, null, Hb, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: ee => "directIntensity" in ee,
              get: ee => ee.directIntensity,
              set: (ee, ie) => {
                ee.directIntensity = ie
              }
            },
            metadata: ie
          }, DU, PU), (0, te.i)(ee, null, yb, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: ee => "environmentIntensity" in ee,
              get: ee => ee.environmentIntensity,
              set: (ee, ie) => {
                ee.environmentIntensity = ie
              }
            },
            metadata: ie
          }, AU, YU), (0, te.i)(ee, null, bb, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: ee => "useSpecularWeightFromTextureAlpha" in ee,
              get: ee => ee.useSpecularWeightFromTextureAlpha,
              set: (ee, ie) => {
                ee.useSpecularWeightFromTextureAlpha = ie
              }
            },
            metadata: ie
          }, VU, aU), (0, te.i)(ee, null, Mb, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: ee => "forceAlphaTest" in ee,
              get: ee => ee.forceAlphaTest,
              set: (ee, ie) => {
                ee.forceAlphaTest = ie
              }
            },
            metadata: ie
          }, cU, xU), (0, te.i)(ee, null, Kb, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: ee => "alphaCutOff" in ee,
              get: ee => ee.alphaCutOff,
              set: (ee, ie) => {
                ee.alphaCutOff = ie
              }
            },
            metadata: ie
          }, LU, CU), (0, te.i)(ee, null, Ub, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: ee => "useAmbientOcclusionFromMetallicTextureRed" in ee,
              get: ee => ee.useAmbientOcclusionFromMetallicTextureRed,
              set: (ee, ie) => {
                ee.useAmbientOcclusionFromMetallicTextureRed = ie
              }
            },
            metadata: ie
          }, vU, uU), (0, te.i)(ee, null, Fb, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: ee => "useAmbientInGrayScale" in ee,
              get: ee => ee.useAmbientInGrayScale,
              set: (ee, ie) => {
                ee.useAmbientInGrayScale = ie
              }
            },
            metadata: ie
          }, mU, lU), (0, te.i)(ee, null, Jb, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: ee => "usePhysicalLightFalloff" in ee,
              get: ee => ee.usePhysicalLightFalloff
            },
            metadata: ie
          }, null, ab), (0, te.i)(ee, null, ob, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: ee => "useGLTFLightFalloff" in ee,
              get: ee => ee.useGLTFLightFalloff
            },
            metadata: ie
          }, null, ab), (0, te.i)(ee, null, Rb, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: ee => "useObjectSpaceNormalMap" in ee,
              get: ee => ee.useObjectSpaceNormalMap,
              set: (ee, ie) => {
                ee.useObjectSpaceNormalMap = ie
              }
            },
            metadata: ie
          }, SU, nU), (0, te.i)(ee, null, kb, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: ee => "useParallax" in ee,
              get: ee => ee.useParallax,
              set: (ee, ie) => {
                ee.useParallax = ie
              }
            },
            metadata: ie
          }, jU, sU), (0, te.i)(ee, null, qb, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: ee => "useParallaxOcclusion" in ee,
              get: ee => ee.useParallaxOcclusion,
              set: (ee, ie) => {
                ee.useParallaxOcclusion = ie
              }
            },
            metadata: ie
          }, IU, hU), (0, te.i)(ee, null, fb, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: ee => "parallaxScaleBias" in ee,
              get: ee => ee.parallaxScaleBias,
              set: (ee, ie) => {
                ee.parallaxScaleBias = ie
              }
            },
            metadata: ie
          }, NU, GU), (0, te.i)(ee, null, Tb, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: ee => "disableLighting" in ee,
              get: ee => ee.disableLighting,
              set: (ee, ie) => {
                ee.disableLighting = ie
              }
            },
            metadata: ie
          }, rU, QU), (0, te.i)(ee, null, pb, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: ee => "forceIrradianceInFragment" in ee,
              get: ee => ee.forceIrradianceInFragment,
              set: (ee, ie) => {
                ee.forceIrradianceInFragment = ie
              }
            },
            metadata: ie
          }, eF, iF), (0, te.i)(ee, null, Xb, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: ee => "maxSimultaneousLights" in ee,
              get: ee => ee.maxSimultaneousLights,
              set: (ee, ie) => {
                ee.maxSimultaneousLights = ie
              }
            },
            metadata: ie
          }, HF, yF), (0, te.i)(ee, null, zb, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: ee => "invertNormalMapX" in ee,
              get: ee => ee.invertNormalMapX,
              set: (ee, ie) => {
                ee.invertNormalMapX = ie
              }
            },
            metadata: ie
          }, bF, MF), (0, te.i)(ee, null, Bb, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: ee => "invertNormalMapY" in ee,
              get: ee => ee.invertNormalMapY,
              set: (ee, ie) => {
                ee.invertNormalMapY = ie
              }
            },
            metadata: ie
          }, KF, UF), (0, te.i)(ee, null, Eb, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: ee => "twoSidedLighting" in ee,
              get: ee => ee.twoSidedLighting,
              set: (ee, ie) => {
                ee.twoSidedLighting = ie
              }
            },
            metadata: ie
          }, FF, JF), (0, te.i)(ee, null, gb, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: ee => "useAlphaFresnel" in ee,
              get: ee => ee.useAlphaFresnel,
              set: (ee, ie) => {
                ee.useAlphaFresnel = ie
              }
            },
            metadata: ie
          }, oF, RF), (0, te.i)(ee, null, Ob, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: ee => "useLinearAlphaFresnel" in ee,
              get: ee => ee.useLinearAlphaFresnel,
              set: (ee, ie) => {
                ee.useLinearAlphaFresnel = ie
              }
            },
            metadata: ie
          }, kF, qF), (0, te.i)(ee, null, db, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "environmentBRDFTexture" in ee,
              get: ee => ee.environmentBRDFTexture,
              set: (ee, ie) => {
                ee.environmentBRDFTexture = ie
              }
            },
            metadata: ie
          }, fF, TF), (0, te.i)(ee, null, Wb, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: ee => "forceNormalForward" in ee,
              get: ee => ee.forceNormalForward,
              set: (ee, ie) => {
                ee.forceNormalForward = ie
              }
            },
            metadata: ie
          }, pF, XF), (0, te.i)(ee, null, tb, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: ee => "enableSpecularAntiAliasing" in ee,
              get: ee => ee.enableSpecularAntiAliasing,
              set: (ee, ie) => {
                ee.enableSpecularAntiAliasing = ie
              }
            },
            metadata: ie
          }, zF, BF), (0, te.i)(ee, null, Zb, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: ee => "useHorizonOcclusion" in ee,
              get: ee => ee.useHorizonOcclusion,
              set: (ee, ie) => {
                ee.useHorizonOcclusion = ie
              }
            },
            metadata: ie
          }, EF, gF), (0, te.i)(ee, null, wb, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: ee => "useRadianceOcclusion" in ee,
              get: ee => ee.useRadianceOcclusion,
              set: (ee, ie) => {
                ee.useRadianceOcclusion = ie
              }
            },
            metadata: ie
          }, OF, dF), (0, te.i)(ee, null, Db, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: ee => "unlit" in ee,
              get: ee => ee.unlit,
              set: (ee, ie) => {
                ee.unlit = ie
              }
            },
            metadata: ie
          }, WF, tF), (0, te.i)(ee, null, Pb, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: ee => "applyDecalMapAfterDetailMap" in ee,
              get: ee => ee.applyDecalMapAfterDetailMap,
              set: (ee, ie) => {
                ee.applyDecalMapAfterDetailMap = ie
              }
            },
            metadata: ie
          }, ZF, wF), (0, te.i)(ee, null, Ab, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: ee => "debugMode" in ee,
              get: ee => ee.debugMode,
              set: (ee, ie) => {
                ee.debugMode = ie
              }
            },
            metadata: ie
          }, DF, PF), (0, te.i)(ee, null, Yb, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: ee => "transparencyMode" in ee,
              get: ee => ee.transparencyMode
            },
            metadata: ie
          }, null, ab), ie && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ie
          })
        })(), ee.SSS_QUALITY_LOW = 0, ee.SSS_QUALITY_MEDIUM = 1, ee.SSS_QUALITY_HIGH = 2, ee._noiseTextures = {}, ee.ForceGLSL = !1, ee._ShaderLoader = new ki.d((() => [Promise.all([He.e(626), He.e(689)]).then((() => He(64302))), Promise.all([He.e(631), He.e(627), He.e(688), He.e(693)]).then((() => He(64310)))]), (() => [Promise.all([He.e(645), He.e(647), He.e(692)]).then((() => He(64345))), Promise.all([He.e(645), He.e(648), He.e(691), He.e(694)]).then((() => He(64353)))])), ee
      })(),
      iH = !1;
    iH || (iH = !0, (0, Ie.g)(), (0, li.e)("BABYLON.OpenPBRMaterial", eH));
    var HH = He(37931);
    class yH {
      constructor(ee) {
        this.name = ci.c.NAME_PROCEDURALTEXTURE, this.yp = ee
      }
      register() {
        this.yp._beforeClearStage.registerStep(ci.c.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.yp.proceduralTexturesEnabled) {
          ti.h.StartPerformanceCounter("Procedural textures", this.yp.proceduralTextures.length > 0);
          for (let ee = 0; ee < this.yp.proceduralTextures.length; ee++) {
            const ie = this.yp.proceduralTextures[ee];
            ie._shouldRender() && ie.render()
          }
          ti.h.EndPerformanceCounter("Procedural textures", this.yp.proceduralTextures.length > 0)
        }
      }
    }
    var bH = He(41446);
    let MH = (() => {
      var ee;
      let ie, ye, be, Ke, Ue, Fe = Pe.e,
        Je = [],
        oe = [],
        Re = [],
        ke = [],
        qe = [],
        fe = [],
        pe = [],
        Xe = [],
        ze = [];
      return ee = class extends Fe {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(ee, ie, He, ye) {
          let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Me = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, ye, !Me), this.isEnabled = ((0, te.l)(this, Je), (0, te.l)(this, oe, !0)), this.autoClear = ((0, te.l)(this, Re), (0, te.l)(this, ke, !0)), this.onGenerated = (0, te.l)(this, qe), this.onGeneratedObservable = new HH.d, this.onBeforeGenerationObservable = new HH.d, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, te.l)(this, fe, void 0), this._drawWrapper = (0, te.l)(this, pe), this._textures = {}, this._size = (0, te.l)(this, Xe, void 0), this._textureType = (0, te.l)(this, ze), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === be || be instanceof Pe.e ? (this._options = {}, this._fallbackTexture = be) : (this._options = be, this._fallbackTexture = be.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let Fe = (ye = this.Xx() || Te.b.LastCreatedScene)._getComponent(ci.c.NAME_PROCEDURALTEXTURE);
          Fe || (Fe = new yH(ye), ye.Cbe(Fe)), this._options.skipSceneRegistration || ye.proceduralTextures.push(this), this._fullEngine = ye.Nf(), this.name = ee, this.isRenderTarget = !0, this._size = ie, this._textureType = Ue, this._generateMipMaps = Me, this._drawWrapper = new bH.b(this._fullEngine), this.setFragment(He);
          const Be = this._createRtWrapper(Ke, ie, Me, Ue);
          this._texture = Be.texture;
          const Ee = [];
          Ee.push(1, 1), Ee.push(-1, 1), Ee.push(-1, -1), Ee.push(1, -1), this._vertexBuffers[ve.h.PositionKind] = new ve.h(this._fullEngine, Ee, ve.h.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(ee, ie, He, ye) {
          return ee ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(ie, {
            generateMipMaps: He,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: ye,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(ie, {
            generateMipMaps: He,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: ye,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(ee) {
          this._drawWrapper.effect = ee
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((ee => {
            this._contentData = this.readPixels(0, 0, ee), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const ee = this._fullEngine,
            ie = [];
          ie.push(0), ie.push(1), ie.push(2), ie.push(0), ie.push(2), ie.push(3), this._indexBuffer = ee.createIndexBuffer(ie)
        }
        _rebuild() {
          const ee = this._vertexBuffers[ve.h.PositionKind];
          ee && ee._rebuild(), this._createIndexBuffer(), this.refreshRate === Zi.e.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Zi.e.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(ee) {
          if (this.isReady()) return void ee(this);
          const ie = this.getEffect();
          ie && ie.executeWhenCompiled((() => {
            ee(this)
          }))
        }
        isReady() {
          const ee = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const ie = this._getDefines();
          if (this._drawWrapper.effect && ie === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const ye = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== ie && (this._cachedDefines = ie, this._drawWrapper.effect = ee.createEffect(ye, [ve.h.PositionKind], this._uniforms, this._samplers, ie, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([He.e(697).then((() => He(64427))), this._options.extraInitializationsAsync()]) : await Promise.all([He.e(698).then((() => He(64431))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await He.e(697).then((() => He(64427))) : await He.e(698).then((() => He(64431)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(ee) {
          this._fragment = ee
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(ee) {
          this._refreshRate = ee, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(ee, ie) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const He = this._texture.isCube;
          this._rtWrapper.dispose();
          const ye = this._createRtWrapper(He, ee, ie, this._textureType);
          this._texture = ye.texture, this._size = ee, this._generateMipMaps = ie
        }
        _checkUniform(ee) {
          -1 === this._uniforms.indexOf(ee) && this._uniforms.push(ee)
        }
        setTexture(ee, ie) {
          return -1 === this._samplers.indexOf(ee) && this._samplers.push(ee), this._textures[ee] = ie, this
        }
        setFloat(ee, ie) {
          return this._checkUniform(ee), this._floats[ee] = ie, this
        }
        setInt(ee, ie) {
          return this._checkUniform(ee), this._ints[ee] = ie, this
        }
        setFloats(ee, ie) {
          return this._checkUniform(ee), this._floatsArrays[ee] = ie, this
        }
        setColor3(ee, ie) {
          return this._checkUniform(ee), this._colors3[ee] = ie, this
        }
        setColor4(ee, ie) {
          return this._checkUniform(ee), this._colors4[ee] = ie, this
        }
        setVector2(ee, ie) {
          return this._checkUniform(ee), this._vectors2[ee] = ie, this
        }
        setVector3(ee, ie) {
          return this._checkUniform(ee), this._vectors3[ee] = ie, this
        }
        setVector4(ee, ie) {
          return this._checkUniform(ee), this._vectors4[ee] = ie, this
        }
        setMatrix(ee, ie) {
          return this._checkUniform(ee), this._matrices[ee] = ie, this
        }
        render(ee) {
          const ie = this.Xx();
          if (!ie) return;
          const He = this._fullEngine;
          if (He.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), He.setState(!1), !this.nodeMaterialSource) {
            for (const ee in this._textures) this._drawWrapper.effect.setTexture(ee, this._textures[ee]);
            for (const ee in this._ints) this._drawWrapper.effect.setInt(ee, this._ints[ee]);
            for (const ee in this._floats) this._drawWrapper.effect.setFloat(ee, this._floats[ee]);
            for (const ee in this._floatsArrays) this._drawWrapper.effect.setArray(ee, this._floatsArrays[ee]);
            for (const ee in this._colors3) this._drawWrapper.effect.setColor3(ee, this._colors3[ee]);
            for (const ee in this._colors4) {
              const ie = this._colors4[ee];
              this._drawWrapper.effect.setFloat4(ee, ie.r, ie.g, ie.b, ie.a)
            }
            for (const ee in this._vectors2) this._drawWrapper.effect.setVector2(ee, this._vectors2[ee]);
            for (const ee in this._vectors3) this._drawWrapper.effect.setVector3(ee, this._vectors3[ee]);
            for (const ee in this._vectors4) this._drawWrapper.effect.setVector4(ee, this._vectors4[ee]);
            for (const ee in this._matrices) this._drawWrapper.effect.setMatrix(ee, this._matrices[ee])
          }
          if (!this._texture || !this._rtWrapper) return;
          He._enableGPUDebugMarkers && He._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const ye = He.currentViewport;
          if (this.isCube)
            for (let be = 0; be < 6; be++) He.bindFramebuffer(this._rtWrapper, be, void 0, void 0, !0), He.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", be), this.autoClear && He.clear(ie.clearColor, !0, !1, !1), He.drawElementsType(Me.e.TriangleFillMode, 0, 6), He.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let ee = 1;
            this._rtWrapper.is3D ? ee = this._rtWrapper.depth : this._rtWrapper.is2DArray && (ee = this._rtWrapper.layers);
            for (let ye = 0; ye < ee; ye++) {
              if (He.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, ye), He.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== ee ? ye / (ee - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", ye);
                for (const ee in this._textures) this._drawWrapper.effect.setTexture(ee, this._textures[ee])
              }
              this.autoClear && He.clear(ie.clearColor, !0, !1, !1), He.drawElementsType(Me.e.TriangleFillMode, 0, 6), He.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          ye && He.setViewport(ye), this.isCube && He.generateMipMapsForCubemap(this._texture, !0), He._enableGPUDebugMarkers && He._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const ie = this.getSize(),
            He = new ee(this.name, ie.width, this._fragment, this.Xx(), this._fallbackTexture, this._generateMipMaps);
          return He.hasAlpha = this.hasAlpha, He.level = this.level, He.coordinatesMode = this.coordinatesMode, He
        }
        dispose() {
          const ee = this.Xx();
          if (!ee) return;
          const ie = ee.proceduralTextures.indexOf(this);
          ie >= 0 && ee.proceduralTextures.splice(ie, 1);
          const He = this._vertexBuffers[ve.h.PositionKind];
          He && (He.dispose(), this._vertexBuffers[ve.h.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const He = "function" === typeof Symbol && Symbol.metadata ? Object.create(Fe[Symbol.metadata] ?? null) : void 0;
        ie = [(0, Ze.R)()], ye = [(0, Ze.R)()], be = [(0, Ze.R)()], Ke = [(0, Ze.R)()], Ue = [(0, Ze.R)()], (0, te.i)(ee, null, Ue, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: ee => "refreshRate" in ee,
            get: ee => ee.refreshRate
          },
          metadata: He
        }, null, Je), (0, te.i)(null, null, ie, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "isEnabled" in ee,
            get: ee => ee.isEnabled,
            set: (ee, ie) => {
              ee.isEnabled = ie
            }
          },
          metadata: He
        }, oe, Re), (0, te.i)(null, null, ye, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: ee => "autoClear" in ee,
            get: ee => ee.autoClear,
            set: (ee, ie) => {
              ee.autoClear = ie
            }
          },
          metadata: He
        }, ke, qe), (0, te.i)(null, null, be, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: ee => "_generateMipMaps" in ee,
            get: ee => ee._generateMipMaps,
            set: (ee, ie) => {
              ee._generateMipMaps = ie
            }
          },
          metadata: He
        }, fe, pe), (0, te.i)(null, null, Ke, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: ee => "_size" in ee,
            get: ee => ee._size,
            set: (ee, ie) => {
              ee._size = ie
            }
          },
          metadata: He
        }, Xe, ze), He && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: He
        })
      })(), ee
    })();

    function KH(ee) {
      return "texture" in ee
    }

    function UH(ee) {
      return "value" in ee
    }
    async function FH(ee, ie, ye) {
      const be = [ie.red, ie.green, ie.blue, ie.alpha],
        Me = [],
        Ke = [];
      for (let He = 0; He < 4; He++) {
        const ee = be[He];
        if (ee)
          if (KH(ee)) {
            if (ee.sourceChannel < 0 || ee.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let ie = Me.indexOf(ee.texture); - 1 === ie && (ie = Me.length, Me.push(ee.texture)), Ke[He] = ie
          } else {
            if (!UH(ee)) throw new Error("Invalid channel input configuration");
            if (ee.value < 0 || ee.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            Ke[He] = -1
          }
        else Ke[He] = -1
      }
      let Ue = ie.outputSize;
      if (!Ue && Me.length > 0) {
        let ee = 0;
        for (const ie of Me) {
          const He = ie.getSize(),
            ye = Math.max(He.width, He.height);
          ye > ee && (ee = ye, Ue = He.width === He.height ? ee : He)
        }
      }
      Ue = Ue || 512;
      const Fe = [],
        Je = new Set;
      for (let He = 0; He < 4; He++) {
        const ee = be[He],
          ie = ["RED", "GREEN", "BLUE", "ALPHA"][He];
        if (ee && KH(ee)) {
          Fe.push(`${ie}_FROM_TEXTURE`);
          const ee = Ke[He];
          Je.add(ee)
        }
      }
      Je.forEach((ee => {
        Fe.push(`USE_TEXTURE${ee}`)
      }));
      const oe = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: ye.Nf().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            ye.Nf().isWebGPU ? await Promise.all([He.e(695).then((() => He(64416)))]) : await Promise.all([He.e(696).then((() => He(64424)))])
          },
          skipSceneRegistration: !0
        },
        Re = new MH(ee, Ue, "textureMerger", ye, oe);
      Re.refreshRate = -1, Re.defines = Fe.length > 0 ? "#define " + Fe.join("\n#define ") + "\n" : "";
      for (let He = 0; He < Me.length; He++) ke = Me[He], (qe = Re).uOffset = ke.uOffset, qe.vOffset = ke.vOffset, qe.uScale = ke.uScale, qe.vScale = ke.vScale, qe.uAng = ke.uAng, qe.vAng = ke.vAng, qe.wAng = ke.wAng, qe.uRotationCenter = ke.uRotationCenter, qe.vRotationCenter = ke.vRotationCenter, Re.setTexture(`inputTexture${He}`, Me[He]);
      var ke, qe;
      for (let He = 0; He < 4; He++) {
        const ee = be[He],
          ie = ["red", "green", "blue", "alpha"][He];
        if (ee && KH(ee)) {
          const ye = Ke[He];
          Re.setInt(`${ie}TextureIndex`, ye), Re.setInt(`${ie}SourceChannel`, ee.sourceChannel)
        } else {
          let ye;
          ye = ee && UH(ee) ? ee.value : 3 === He ? 1 : 0, Re.setFloat(`${ie}ConstantValue`, ye)
        }
      }
      return await new Promise(((ee, ie) => {
        Re.executeWhenReady((() => {
          try {
            Re.render(), ee(Re)
          } catch (He) {
            ie(He instanceof Error ? He : new Error(String(He)))
          }
        }))
      }))
    }

    function JH(ee, ie) {
      return {
        texture: ee,
        sourceChannel: ie
      }
    }

    function oH(ee) {
      return {
        value: ee
      }
    }

    function RH(ee, ie, He, ye) {
      return {
        red: ee,
        green: ie,
        blue: He,
        alpha: ye
      }
    }
    var kH = He(40922),
      qH = He(41036),
      fH = He(37927),
      TH = He(41098),
      pH = He(41022);
    class XH {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class zH extends kH.b {
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
        return !!this._options?.enableMultiview || this.dT > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new XH;
        super(null), void 0 === ee.deterministicLockstep && (ee.deterministicLockstep = !1), void 0 !== ee.timeStep && (this._timeStep = ee.timeStep), void 0 === ee.lockstepMaxSteps && (ee.lockstepMaxSteps = 4), this._options = ee, fH.e.SetMatrixPrecision(!!ee.useHighPrecisionMatrix), this._caps = {
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
        }, ee.enableMultiview && (this._caps.multiview = {
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
        }, ee.renderingCanvas && (this._renderingCanvas = ee.renderingCanvas), we.e.Log(`Babylon.js v${kH.b.Version} - Null engine`);
        const ie = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (ie.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (ie.Blob = function() {})
      }
      createVertexBuffer(ee) {
        const ie = new qH.c;
        return ie.references = 1, ie
      }
      createIndexBuffer(ee) {
        const ie = new qH.c;
        return ie.references = 1, ie
      }
      clear(ee, ie, He) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(ee, ie, He) {
        this._cachedViewport = ee
      }
      createUniformBuffer(ee) {
        const ie = new qH.c;
        return ie.references = 1, ie.bk = ee instanceof Array ? ee.length * Float32Array.BYTES_PER_ELEMENT : ee.byteLength, ie
      }
      createDynamicUniformBuffer(ee) {
        return this.createUniformBuffer(ee)
      }
      updateUniformBuffer(ee, ie, He, ye) {}
      bindUniformBufferBase(ee, ie, He) {}
      bindUniformBlock(ee, ie, He) {}
      createShaderProgram(ee, ie, He, ye, be) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(ee, ie) {
        return []
      }
      getAttributes(ee, ie) {
        return []
      }
      bindSamplers(ee) {
        this._currentEffect = null
      }
      enableEffect(ee) {
        ee = null !== ee && (0, pH.e)(ee) ? ee.effect : ee, this._currentEffect = ee, ee && (ee.onBind && ee.onBind(ee), ee._onBindObservable && ee._onBindObservable.notifyObservers(ee))
      }
      setStateCullFaceType(ee, ie) {}
      setState(ee) {}
      setIntArray(ee, ie) {
        return !0
      }
      setIntArray2(ee, ie) {
        return !0
      }
      setIntArray3(ee, ie) {
        return !0
      }
      setIntArray4(ee, ie) {
        return !0
      }
      setFloatArray(ee, ie) {
        return !0
      }
      setFloatArray2(ee, ie) {
        return !0
      }
      setFloatArray3(ee, ie) {
        return !0
      }
      setFloatArray4(ee, ie) {
        return !0
      }
      setArray(ee, ie) {
        return !0
      }
      setArray2(ee, ie) {
        return !0
      }
      setArray3(ee, ie) {
        return !0
      }
      setArray4(ee, ie) {
        return !0
      }
      setMatrices(ee, ie) {
        return !0
      }
      setMatrix3x3(ee, ie) {
        return !0
      }
      setMatrix2x2(ee, ie) {
        return !0
      }
      setFloat(ee, ie) {
        return !0
      }
      setFloat2(ee, ie, He) {
        return !0
      }
      setFloat3(ee, ie, He, ye) {
        return !0
      }
      setBool(ee, ie) {
        return !0
      }
      setFloat4(ee, ie, He, ye, be) {
        return !0
      }
      setAlphaMode(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[He] !== ee && (this.alphaState.setAlphaBlend(0 !== ee, 0), ie || this.setDepthWrite(0 === ee), this._alphaMode[He] = ee)
      }
      bindBuffers(ee, ie, He) {}
      wipeCaches(ee) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, ee && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(ee, ie, He, ye) {}
      drawElementsType(ee, ie, He, ye) {}
      drawArraysType(ee, ie, He, ye) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(ee) {}
      createTexture(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ke = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Ue = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const Fe = new wi.b(this, 1),
          Je = String(ee);
        return Fe.url = Je, Fe.generateMipMaps = !ie, Fe.samplingMode = be, Fe.invertY = He, Fe.baseWidth = this._options.textureSize, Fe.baseHeight = this._options.textureSize, Fe.width = this._options.textureSize, Fe.height = this._options.textureSize, Ue && (Fe.format = Ue), Ke && (Fe._buffer = Ke), Fe.isReady = !0, Me && setTimeout((() => {
          Me(Fe)
        })), this._internalTexturesCache.push(Fe), Fe
      }
      _createHardwareRenderTargetWrapper(ee, ie, He) {
        const ye = new TH.b(ee, ie, He, this);
        return this._renderTargetWrapperCache.push(ye), ye
      }
      createRenderTargetTexture(ee, ie) {
        const He = this._createHardwareRenderTargetWrapper(!1, !1, ee),
          ye = {};
        void 0 !== ie && "object" === typeof ie ? (ye.generateMipMaps = ie.generateMipMaps, ye.generateDepthBuffer = void 0 === ie.generateDepthBuffer || ie.generateDepthBuffer, ye.generateStencilBuffer = ye.generateDepthBuffer && ie.generateStencilBuffer, ye.type = void 0 === ie.type ? 0 : ie.type, ye.samplingMode = void 0 === ie.samplingMode ? 3 : ie.samplingMode) : (ye.generateMipMaps = ie, ye.generateDepthBuffer = !0, ye.generateStencilBuffer = !1, ye.type = 0, ye.samplingMode = 3);
        const be = new wi.b(this, 5);
        He.setTexture(be);
        const Me = ee.width || ee,
          Ke = ee.height || ee;
        return He._generateDepthBuffer = ye.generateDepthBuffer, He._generateStencilBuffer = !!ye.generateStencilBuffer, be.baseWidth = Me, be.baseHeight = Ke, be.width = Me, be.height = Ke, be.isReady = !0, be.samples = 1, be.generateMipMaps = !!ye.generateMipMaps, be.samplingMode = ye.samplingMode, be.type = ye.type, this._internalTexturesCache.push(be), He
      }
      createMultiviewRenderTargetTexture(ee, ie) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const He = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: ee,
            height: ie
          }),
          ye = new wi.b(this, 5, !0);
        return ye.baseWidth = ee, ye.baseHeight = ie, ye.width = ee, ye.height = ie, ye.isMultiview = !0, ye.isReady = !0, ye.format = 5, ye.samples = 1, He.setTextures(ye), He
      }
      bindMultiviewFramebuffer(ee) {
        this.bindFramebuffer(ee, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(ee, ie) {
        const He = this._createHardwareRenderTargetWrapper(!1, !0, ee),
          ye = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...ie
          };
        ye.generateStencilBuffer = ye.generateDepthBuffer && ye.generateStencilBuffer, (1 !== ye.type || this._caps.textureFloatLinearFiltering) && (2 !== ye.type || this._caps.textureHalfFloatLinearFiltering) || (ye.samplingMode = 1), He._generateDepthBuffer = ye.generateDepthBuffer, He._generateStencilBuffer = !!ye.generateStencilBuffer;
        const be = new wi.b(this, 5);
        return be.baseWidth = ee, be.baseHeight = ee, be.width = ee, be.height = ee, be.isReady = !0, be.isCube = !0, be.samples = 1, be.generateMipMaps = !!ye.generateMipMaps, be.samplingMode = ye.samplingMode, be.type = ye.type, this._internalTexturesCache.push(be), He
      }
      updateTextureSamplingMode(ee, ie) {
        ie.samplingMode = ee
      }
      createRawTexture(ee, ie, He, ye, be, Me, Ke) {
        let Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Fe = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Je = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const oe = new wi.b(this, 3);
        return oe.baseWidth = ie, oe.baseHeight = He, oe.width = ie, oe.height = He, oe.format = ye, oe.generateMipMaps = be, oe.samplingMode = Ke, oe.invertY = Me, oe._compression = Ue, oe.type = Fe, oe._useSRGBBuffer = Je, this._doNotHandleContextLost || (oe._bufferView = ee), oe
      }
      updateRawTexture(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        ee && (ee._bufferView = ie, ee.format = He, ee.invertY = ye, ee._compression = be, ee.type = Me, ee._useSRGBBuffer = Ke)
      }
      bindFramebuffer(ee, ie, He, ye, be) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = ee, this._currentFramebuffer = null, this._cachedViewport && !be && this.setViewport(this._cachedViewport, He, ye)
      }
      unBindFramebuffer(ee) {
        let ie = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, ie && ie(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(ee) {
        const ie = new qH.c;
        return ie.references = 1, ie.bk = 1, ie
      }
      updateDynamicTexture(ee, ie, He) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(ee) {}
      updateDynamicIndexBuffer(ee, ie) {}
      updateDynamicVertexBuffer(ee, ie, He, ye) {}
      _bindTextureDirectly(ee, ie) {
        return this._boundTexturesCache[this._activeChannel] !== ie && (this._boundTexturesCache[this._activeChannel] = ie, !0)
      }
      _bindTexture(ee, ie) {
        ee < 0 || this._bindTextureDirectly(0, ie)
      }
      _deleteBuffer(ee) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(ee) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(ee, ie, He, ye, be) {}
      _uploadDataToTextureDirectly(ee, ie) {}
      _uploadArrayBufferViewToTexture(ee, ie) {}
      _uploadImageToTexture(ee, ie) {}
    }
    He(41153), He(41185), He(41147);
    async function BH(ee) {
      const ie = ee.getInternalTexture();
      if (!ie || 1 !== ie.source) return null;
      if (ie.invertY) {
        const ie = ee.Xx()?.Nf();
        if (!(ie instanceof zH)) return null
      }
      const He = ie._buffer;
      let ye, Me = ee.mimeType;
      try {
        He ? ArrayBuffer.isView(He) ? ye = He.buffer.slice(He.byteOffset, He.byteOffset + He.byteLength) : He instanceof ArrayBuffer ? ye = He : He instanceof Blob ? (ye = await He.arrayBuffer(), Me = He.type || Me) : "string" === typeof He ? (ye = await be.Tools.LoadFileAsync(He), Me = (0, Fe.e)(He) || Me) : "undefined" !== typeof HTMLImageElement && He instanceof HTMLImageElement && (ye = await be.Tools.LoadFileAsync(He.src), Me = (0, Fe.e)(He.src) || Me) : (ye = await be.Tools.LoadFileAsync(ie.url), Me = (0, Fe.e)(ie.url) || Me)
      } catch {
        return null
      }
      if (ye && !Me && ie.url) {
        const ee = ie.url.match(/^data:([^;,]+)/);
        Me = ee ? ee[1] : (0, Fe.e)(ie.url)
      }
      return ye && Me ? {
        data: ye,
        mimeType: Me
      } : null
    }
    const EH = 1e-6,
      gH = new pe.Color3(.04, .04, .04),
      OH = 1024,
      dH = pe.Color3.White(),
      WH = pe.Color3.BlackReadOnly;

    function tH(ee) {
      switch (ee) {
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

    function ZH(ee, ie, He) {
      if (ie < gH.r) return 0;
      const ye = gH.r,
        be = ee * He / (1 - gH.r) + ie - 2 * gH.r,
        Me = be * be - 4 * ye * (gH.r - ie);
      return Be.Clamp((-be + Math.sqrt(Me)) / (2 * ye), 0, 1)
    }

    function wH(ee) {
      const ie = ee.diffuseColor.toLinearSpace(ee.Xx().Nf().useExactSrgbConversions).scale(.5),
        He = ee.alpha,
        ye = function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ce.n(0, 1),
            He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Ce.n(0, .1),
            ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ce.n(0, .1),
            be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Ce.n(1300, .1);
          return function(ee, ie, He, ye, be) {
            return (1 - ee) * (1 - ee) * (1 - ee) * ie + 3 * (1 - ee) * (1 - ee) * ee * He + 3 * (1 - ee) * ee * ee * ye + ee * ee * ee * be
          }(Math.pow(ee / be.x, .333333), ie.y, He.y, ye.y, be.y)
        }(Be.Clamp(ee.specularPower, 0, OH));
      return {
        baseColorFactor: [ie.r, ie.g, ie.b, He],
        metallicFactor: 0,
        roughnessFactor: ye
      }
    }

    function DH(ee, ie) {
      ie.needAlphaBlending() ? ee.alphaMode = "BLEND" : ie.needAlphaTesting() && (ee.alphaMode = "MASK", ee.alphaCutoff = ie.alphaCutOff)
    }

    function PH(ee, ie, He) {
      const ye = new Uint8Array(ee * ie * 4);
      for (let be = 0; be < ye.length; be += 4) ye[be] = ye[be + 1] = ye[be + 2] = ye[be + 3] = 255;
      return Oe.c.CreateRGBATexture(ye, ee, ie, He)
    }

    function AH(ee) {
      if (ee instanceof Uint8Array) {
        const ie = ee.length,
          He = new Float32Array(ee.length);
        for (let ye = 0; ye < ie; ++ye) He[ye] = ee[ye] / 255;
        return He
      }
      if (ee instanceof Float32Array) return ee;
      throw new Error("Unsupported pixel format!")
    }
    class YH {
      constructor(ee) {
        this._exporter = ee, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(ee) {
        return ee ? this._textureMap.get(ee.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(ee, ie) {
        const He = wH(ee),
          ye = {
            name: ee.name
          };
        if (null == ee.backFaceCulling || ee.backFaceCulling || (ee.twoSidedLighting || be.Tools.Warn(ee.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), ye.doubleSided = !0), ie) {
          const ie = [],
            be = ee.diffuseTexture;
          be && ie.push(this.exportTextureAsync(be).then((ee => {
            ee && (He.baseColorTexture = ee)
          })));
          const Me = ee.bumpTexture;
          Me && ie.push(this.exportTextureAsync(Me).then((ee => {
            ee && (ye.normalTexture = ee, 1 !== Me.level && (ye.normalTexture.scale = Me.level))
          })));
          const Ke = ee.emissiveTexture;
          Ke && (ye.emissiveFactor = [1, 1, 1], ie.push(this.exportTextureAsync(Ke).then((ee => {
            ee && (ye.emissiveTexture = ee)
          }))));
          const Ue = ee.ambientTexture;
          Ue && ie.push(this.exportTextureAsync(Ue).then((ee => {
            if (ee) {
              const ie = {
                index: ee.index
              };
              ye.occlusionTexture = ie
            }
          }))), ie.length > 0 && (this._exporter._materialNeedsUVsSet.add(ee), await Promise.all(ie))
        }(ee.alpha < 1 || ee.opacityTexture) && (ee.alphaMode === de.c.ALPHA_COMBINE ? ye.alphaMode = "BLEND" : be.Tools.Warn(ee.name + ": glTF 2.0 does not support alpha mode: " + ee.alphaMode.toString())), ee.emissiveColor && !ee.emissiveColor.equalsWithEpsilon(WH, EH) && (ye.emissiveFactor = ee.emissiveColor.Qbe()), ye.pbrMetallicRoughness = He, DH(ye, ee), await this._finishMaterialAsync(ye, ee);
        const Me = this._exporter._materials;
        return Me.push(ye), Me.length - 1
      }
      async _finishMaterialAsync(ee, ie) {
        const He = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", ee, ie),
          ye = [];
        for (const be of He) ye.push(this.exportTextureAsync(be));
        await Promise.all(ye), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", ee, ie)
      }
      _resizeTexturesToSameDimensions(ee, ie, He) {
        const ye = ee ? ee.getSize() : {
            width: 0,
            height: 0
          },
          be = ie ? ie.getSize() : {
            width: 0,
            height: 0
          };
        let Me, Ke;
        return ye.width < be.width ? (Me = ee && ee instanceof ge.d ? Ee.g.CreateResizedCopy(ee, be.width, be.height, !0) : PH(be.width, be.height, He), Ke = ie) : ye.width > be.width ? (Ke = ie && ie instanceof ge.d ? Ee.g.CreateResizedCopy(ie, ye.width, ye.height, !0) : PH(ye.width, ye.height, He), Me = ee) : (Me = ee, Ke = ie), {
          texture1: Me,
          texture2: Ke
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(ee, ie, He) {
        const ye = new Array;
        if (!ee && !ie) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const be = ee ? ee.Xx() : ie ? ie.Xx() : null;
        if (be) {
          const Me = this._resizeTexturesToSameDimensions(ee, ie, be),
            Ke = Me.texture1?.getSize();
          let Ue, Fe;
          const Je = Ke.width,
            oe = Ke.height,
            Re = await Me.texture1.readPixels(),
            ke = await Me.texture2.readPixels();
          if (!Re) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (Ue = AH(Re), !ke) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          Fe = AH(ke);
          const qe = Fe.byteLength,
            fe = new Uint8Array(qe),
            Te = new Uint8Array(qe),
            Xe = 4,
            ze = new pe.Color3(0, 0, 0);
          let Be = 0,
            Ee = 0;
          for (let ee = 0; ee < oe; ++ee)
            for (let ie = 0; ie < Je; ++ie) {
              const ye = (Je * ee + ie) * Xe,
                Ke = {
                  diffuseColor: new pe.Color3(Ue[ye], Ue[ye + 1], Ue[ye + 2]).toLinearSpace(be.Nf().useExactSrgbConversions).multiply(He.diffuseColor),
                  specularColor: new pe.Color3(Fe[ye], Fe[ye + 1], Fe[ye + 2]).toLinearSpace(be.Nf().useExactSrgbConversions).multiply(He.specularColor),
                  glossiness: Fe[ye + 3] * He.glossiness
                },
                oe = this._convertSpecularGlossinessToMetallicRoughness(Ke);
              ze.r = Math.max(ze.r, oe.baseColor.r), ze.g = Math.max(ze.g, oe.baseColor.g), ze.b = Math.max(ze.b, oe.baseColor.b), Be = Math.max(Be, oe.metallic), Ee = Math.max(Ee, oe.roughness), Te[ye] = 255 * oe.baseColor.r, Te[ye + 1] = 255 * oe.baseColor.g, Te[ye + 2] = 255 * oe.baseColor.b, Te[ye + 3] = Me.texture1.hasAlpha ? 255 * Ue[ye + 3] : 255, fe[ye] = 0, fe[ye + 1] = 255 * oe.roughness, fe[ye + 2] = 255 * oe.metallic, fe[ye + 3] = 255
            }
          const ge = {
            baseColor: ze,
            metallic: Be,
            roughness: Ee
          };
          let Oe = !1,
            de = !1;
          for (let ee = 0; ee < oe; ++ee)
            for (let ie = 0; ie < Je; ++ie) {
              const He = (Je * ee + ie) * Xe;
              Te[He] /= ge.baseColor.r > EH ? ge.baseColor.r : 1, Te[He + 1] /= ge.baseColor.g > EH ? ge.baseColor.g : 1, Te[He + 2] /= ge.baseColor.b > EH ? ge.baseColor.b : 1;
              const ye = pe.Color3.FromInts(Te[He], Te[He + 1], Te[He + 2]).toGammaSpace(be.Nf().useExactSrgbConversions);
              Te[He] = 255 * ye.r, Te[He + 1] = 255 * ye.g, Te[He + 2] = 255 * ye.b, ye.equalsWithEpsilon(dH, EH) || (de = !0), fe[He + 1] /= ge.roughness > EH ? ge.roughness : 1, fe[He + 2] /= ge.metallic > EH ? ge.metallic : 1;
              pe.Color3.FromInts(255, fe[He + 1], fe[He + 2]).equalsWithEpsilon(dH, EH) || (Oe = !0)
            }
          return Oe && ye.push((0, We.EncodeImageAsync)(fe, Je, oe).then((ee => {
            ge.metallicRoughnessTextureData = ee
          }))), de && ye.push((0, We.EncodeImageAsync)(Te, Je, oe).then((ee => {
            ge.baseColorTextureData = ee
          }))), await Promise.all(ye).then((() => ge))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(ee) {
        const ie = this._getPerceivedBrightness(ee.diffuseColor),
          He = this._getPerceivedBrightness(ee.specularColor),
          ye = 1 - this._getMaxComponent(ee.specularColor),
          be = ZH(ie, He, ye),
          Me = ee.diffuseColor.scale(ye / (1 - gH.r) / Math.max(1 - be, EH)),
          Ke = ee.specularColor.subtract(gH.scale(1 - be)).scale(1 / Math.max(be, EH));
        let Ue = pe.Color3.Lerp(Me, Ke, be * be);
        Ue = Ue.clampToRef(0, 1, Ue);
        return {
          baseColor: Ue,
          metallic: be,
          roughness: 1 - ee.glossiness
        }
      }
      _getPerceivedBrightness(ee) {
        return Math.sqrt(.299 * ee.r * ee.r + .587 * ee.g * ee.g + .114 * ee.b * ee.b)
      }
      _getMaxComponent(ee) {
        return Math.max(ee.r, Math.max(ee.g, ee.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        const Je = [],
          oe = {
            baseColor: ee,
            metallic: ie,
            roughness: He
          };
        if (Fe)
          if (Ke instanceof eH) {
            if (Ke.geometryOpacityTexture) {
              const ee = ye && ye.getInternalTexture() ? ye.getInternalTexture().uniqueId : 0,
                ie = Ke.geometryOpacityTexture && Ke.geometryOpacityTexture.getInternalTexture() ? Ke.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                He = Number(`${ee}${ie}`),
                be = this._textureMap.get(He);
              be ? Ue.baseColorTexture = be : Je.push(FH("baseColorOpacityTexture", RH(ye ? JH(ye, 0) : oH(1), ye ? JH(ye, 1) : oH(1), ye ? JH(ye, 2) : oH(1), JH(Ke.geometryOpacityTexture, 0)), Ke.Xx()).then((async ee => {
                const ie = await this.exportTextureAsync(ee, He);
                ie && (Ue.baseColorTexture = ie)
              })))
            } else ye && Je.push(this.exportTextureAsync(ye).then((ee => {
              ee && (Ue.baseColorTexture = ee)
            })));
            if (Ke._useMetallicFromMetallicTextureBlue && be) Je.push(this.exportTextureAsync(be).then((ee => {
              ee && (Ue.metallicRoughnessTexture = ee)
            })));
            else if (Me || be) {
              const ee = be && be.getInternalTexture() ? be.getInternalTexture().uniqueId : 0,
                ie = Me && Me.getInternalTexture() ? Me.getInternalTexture().uniqueId : 0,
                He = Number(`${ee}${ie}`),
                ye = this._textureMap.get(He);
              ye ? Ue.metallicRoughnessTexture = ye : Je.push(FH("MetalRoughTexture", RH(Ke.ambientOcclusionTexture ? JH(Ke.ambientOcclusionTexture, 0) : oH(1), Me ? JH(Me, 0) : oH(1), be ? JH(be, 0) : oH(1)), Ke.Xx()).then((async ee => {
                const ie = await this.exportTextureAsync(ee, He);
                ie && (Ue.metallicRoughnessTexture = ie)
              })))
            }
          } else ye && Je.push(this.exportTextureAsync(ye).then((ee => {
            ee && (Ue.baseColorTexture = ee)
          }))), be && Je.push(this.exportTextureAsync(be).then((ee => {
            ee && (Ue.metallicRoughnessTexture = ee)
          })));
        return Je.length > 0 && (this._exporter._materialNeedsUVsSet.add(Ke), await Promise.all(Je)), oe
      }
      _getTextureSampler(ee) {
        const ie = {};
        if (!ee || !(ee instanceof ge.d)) return ie;
        const He = this._getGLTFTextureWrapMode(ee.wrapU);
        10497 !== He && (ie.wrapS = He);
        const ye = this._getGLTFTextureWrapMode(ee.wrapV);
        switch (10497 !== ye && (ie.wrapT = ye), ee.samplingMode) {
          case ge.d.LINEAR_LINEAR:
            ie.magFilter = 9729, ie.minFilter = 9729;
            break;
          case ge.d.LINEAR_NEAREST:
            ie.magFilter = 9729, ie.minFilter = 9728;
            break;
          case ge.d.NEAREST_LINEAR:
            ie.magFilter = 9728, ie.minFilter = 9729;
            break;
          case ge.d.NEAREST_LINEAR_MIPLINEAR:
            ie.magFilter = 9728, ie.minFilter = 9987;
            break;
          case ge.d.NEAREST_NEAREST:
            ie.magFilter = 9728, ie.minFilter = 9728;
            break;
          case ge.d.NEAREST_LINEAR_MIPNEAREST:
            ie.magFilter = 9728, ie.minFilter = 9985;
            break;
          case ge.d.LINEAR_NEAREST_MIPNEAREST:
            ie.magFilter = 9729, ie.minFilter = 9984;
            break;
          case ge.d.LINEAR_NEAREST_MIPLINEAR:
            ie.magFilter = 9729, ie.minFilter = 9986;
            break;
          case ge.d.NEAREST_NEAREST_MIPLINEAR:
            ie.magFilter = 9728, ie.minFilter = 9986;
            break;
          case ge.d.LINEAR_LINEAR_MIPLINEAR:
            ie.magFilter = 9729, ie.minFilter = 9987;
            break;
          case ge.d.LINEAR_LINEAR_MIPNEAREST:
            ie.magFilter = 9729, ie.minFilter = 9985;
            break;
          case ge.d.NEAREST_NEAREST_MIPNEAREST:
            ie.magFilter = 9728, ie.minFilter = 9984
        }
        return ie
      }
      _getGLTFTextureWrapMode(ee) {
        switch (ee) {
          case ge.d.WRAP_ADDRESSMODE:
            return 10497;
          case ge.d.CLAMP_ADDRESSMODE:
            return 33071;
          case ge.d.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return be.Tools.Error(`Unsupported Texture Wrap Mode ${ee}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(ee, ie, He) {
        const ye = {
            diffuseColor: ee._albedoColor,
            specularColor: ee._reflectivityColor,
            glossiness: ee._microSurface
          },
          be = ee._albedoTexture,
          Me = ee._reflectivityTexture,
          Ke = ee._useMicroSurfaceFromReflectivityMapAlpha;
        if (Me && !Ke) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((be || Me) && He) {
          this._exporter._materialNeedsUVsSet.add(ee);
          const He = this._exportTextureSampler(be || Me),
            Ke = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(be, Me, ye),
            Ue = this._exporter._textures;
          if (Ke.baseColorTextureData) {
            const ee = await this._exportImageAsync(`baseColor${Ue.length}`, Ke.baseColorTextureData);
            ie.baseColorTexture = this._exportTextureInfo(ee, He, be?.coordinatesIndex)
          }
          if (Ke.metallicRoughnessTextureData) {
            const ee = await this._exportImageAsync(`metallicRoughness${Ue.length}`, Ke.metallicRoughnessTextureData);
            ie.metallicRoughnessTexture = this._exportTextureInfo(ee, He, Me?.coordinatesIndex)
          }
          return Ke
        }
        return this._convertSpecularGlossinessToMetallicRoughness(ye)
      }
      async exportPBRMaterialAsync(ee, ie) {
        const He = {},
          ye = {
            name: ee.name
          },
          be = ee.isMetallicWorkflow();
        if (be) {
          const ie = ee._albedoColor,
            ye = ee.alpha;
          ie && (He.baseColorFactor = [ie.r, ie.g, ie.b, ye])
        }
        const Me = be ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(ee._albedoColor, ee._metallic, ee._roughness, ee._albedoTexture, ee._metallicTexture, ee._metallicTexture, ee, He, ie) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(ee, He, ie);
        await this._setMetallicRoughnessPbrMaterialAsync(Me, ee, ye, He, ie), await this._finishMaterialAsync(ye, ee);
        const Ke = this._exporter._materials;
        return Ke.push(ye), Ke.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(ee, ie, He, ye, Me) {
        if (DH(He, ie), ee.baseColor.equalsWithEpsilon(dH, EH) && Be.WithinEpsilon(ie.alpha, 1, EH) || (ye.baseColorFactor = [ee.baseColor.r, ee.baseColor.g, ee.baseColor.b, ie.alpha]), null != ee.metallic && 1 !== ee.metallic && (ye.metallicFactor = ee.metallic), null != ee.roughness && 1 !== ee.roughness && (ye.roughnessFactor = ee.roughness), null == ie.backFaceCulling || ie.backFaceCulling || (ie._twoSidedLighting || be.Tools.Warn(ie.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), He.doubleSided = !0), Me) {
          const ee = [],
            be = ie instanceof di ? ie._bumpTexture : ie.geometryNormalTexture;
          be && ee.push(this.exportTextureAsync(be).then((ee => {
            ee && (He.normalTexture = ee, 1 !== be.level && (He.normalTexture.scale = be.level))
          })));
          const Me = ie instanceof di ? ie._ambientTexture : ie.ambientOcclusionTexture;
          Me && ee.push(new Promise((async ee => {
            if (ie instanceof eH && ye.metallicRoughnessTexture) {
              const ie = this._exportTextureSampler(Me),
                He = this._exporter._textures[ye.metallicRoughnessTexture.index].source,
                be = this._exportTextureInfo(He, ie, Me.coordinatesIndex);
              return this._textureMap.set(Me.uniqueId, be), this._exporter._extensionsPostExportTextures("exporter", be, Me), ee(be)
            }
            return ee(await this.exportTextureAsync(Me))
          })).then((async ee => {
            if (ee) {
              const ye = {
                index: ee.index,
                texCoord: ee.texCoord,
                extensions: ee.extensions
              };
              He.occlusionTexture = ye, ye.strength = ie instanceof di ? ie._ambientTextureStrength : ie.ambientOcclusionTexture.level
            }
          })));
          const Ke = ie instanceof di ? ie._emissiveTexture : ie.emissionColorTexture;
          Ke && ee.push(this.exportTextureAsync(Ke).then((ee => {
            ee && (He.emissiveTexture = ee)
          }))), ee.length > 0 && (this._exporter._materialNeedsUVsSet.add(ie), await Promise.all(ee))
        }
        const Ke = ie instanceof di ? ie._emissiveColor : ie.emissionColor;
        Ke.equalsWithEpsilon(WH, EH) || (He.emissiveFactor = Ke.Qbe()), He.pbrMetallicRoughness = ye
      }
      async exportOpenPBRMaterialAsync(ee, ie) {
        const He = {},
          ye = {
            name: ee.name
          },
          be = ee.baseColor,
          Me = ee.geometryOpacity;
        be && (He.baseColorFactor = [be.r, be.g, be.b, Me]);
        const Ke = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(ee.baseColor, ee.baseMetalness, ee.specularRoughness, ee.baseColorTexture, ee.baseMetalnessTexture, ee.specularRoughnessTexture, ee, He, ie);
        await this._setMetallicRoughnessPbrMaterialAsync(Ke, ee, ye, He, ie), await this._finishMaterialAsync(ye, ee);
        const Ue = this._exporter._materials;
        return Ue.push(ye), Ue.length - 1
      }
      async exportTextureAsync(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = this._textureMap.get(ie ?? ee.uniqueId);
        if (He) return He;
        const ye = this._exportTextureSampler(ee),
          be = await this._exportTextureImageAsync(ee);
        return He = this._exportTextureInfo(be, ye, ee.coordinatesIndex), this._textureMap.set(ie ?? ee.uniqueId, He), this._exporter._extensionsPostExportTextures("exporter", He, ee), He
      }
      async _exportTextureImageAsync(ee) {
        const ie = ee.mimeType ?? "none",
          He = this._internalTextureToImage,
          ye = ee.getInternalTexture().uniqueId;
        He[ye] = He[ye] || {};
        let Me = He[ye][ie];
        return void 0 === Me && (Me = (async () => {
          const He = await BH(ee);
          if (He && tH(He.mimeType) && ("none" === ie || He.mimeType === ie)) return await this._exportImageAsync(ee.name, new Blob([He.data], {
            type: He.mimeType
          }));
          let ye = "image/png";
          "none" !== ie && (tH(ie) ? ye = ie : (ye = "image/png", be.Tools.Warn(`Unsupported media type: ${ie}. Exporting texture as PNG.`)));
          const Me = ee.getSize(),
            Ke = await (0, Ee.e)(ee),
            Ue = await (0, We.EncodeImageAsync)(Ke, Me.width, Me.height, ye);
          return await this._exportImageAsync(ee.name, Ue)
        })(), He[ye][ie] = Me), await Me
      }
      async _exportImageAsync(ee, ie) {
        const He = this._exporter._images;
        let ye;
        if (this._exporter._shouldUseGlb) {
          ye = {
            name: ee,
            mimeType: ie.type,
            bufferView: void 0
          };
          const He = await ie.arrayBuffer(),
            be = this._exporter._bufferManager.createBufferView(new Uint8Array(He));
          this._exporter._bufferManager.setBufferView(ye, be)
        } else {
          const Me = ee.replace(/\.\/|\/|\.\\|\\/g, "_"),
            Ke = function(ee) {
              switch (ee) {
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
            }(ie.type);
          let Ue = Me + Ke;
          He.some((ee => ee.uri === Ue)) && (Ue = `${Me}_${be.Tools.RandomId()}${Ke}`), ye = {
            name: ee,
            uri: Ue
          }, this._exporter._imageData[Ue] = ie
        }
        return He.push(ye), He.length - 1
      }
      _exportTextureInfo(ee, ie, He) {
        const ye = this._exporter._textures;
        let be = ye.findIndex((He => He.sampler == ie && He.source === ee)); - 1 === be && (be = ye.length, ye.push({
          source: ee,
          sampler: ie
        }));
        const Me = {
          index: be
        };
        return He && (Me.texCoord = He), Me
      }
      _exportTextureSampler(ee) {
        const ie = this._getTextureSampler(ee),
          He = this._exporter._samplers,
          ye = He.findIndex((ee => ee.minFilter === ie.minFilter && ee.magFilter === ie.magFilter && ee.wrapS === ie.wrapS && ee.wrapT === ie.wrapT));
        return -1 !== ye ? ye : (He.push(ie), He.length - 1)
      }
    }
    var VH = He(41175),
      aH = He(41311);
    (0, aH.b)();
    var cH = He(37920);
    const xH = ye.Matrix.Compose(new ye.rf(-1, 1, 1), ye.Quaternion.Identity(), ye.rf.Zero());

    function LH(ee, ie) {
      if (!(ee instanceof Re.b)) return !1;
      if (ie) {
        if (!ee.getWorldMatrix().equalsWithEpsilon(ye.Matrix.IdentityReadOnly, cH.b)) return !1
      } else {
        if (!ee.getWorldMatrix().multiplyToRef(xH, ye.TmpVectors.Matrix[0]).equalsWithEpsilon(ye.Matrix.IdentityReadOnly, cH.b)) return !1
      }
      return !(ee instanceof ke.c && ee.geometry)
    }
    const CH = ye.rf.ZeroReadOnly,
      vH = ye.Quaternion.Identity(),
      uH = ye.rf.OneReadOnly,
      mH = new ye.rf(-1, 1, 1);

    function lH(ee, ie) {
      const {
        byteOffset: He,
        byteStride: ye,
        type: be,
        normalized: Me
      } = ee, Ke = ee.getSize(), Ue = ie.reduce(((ee, ie) => ie.getTotalVertices() > ee ? ie.getTotalVertices() : ee), -Number.MAX_VALUE);
      return {
        byteOffset: He,
        byteStride: ye,
        componentCount: Ke,
        type: be,
        count: Ue * Ke,
        normalized: Me,
        totalVertices: Ue,
        kind: ee.getKind()
      }
    }

    function SH(ee) {
      switch (ee) {
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

    function nH(ee) {
      switch (ee) {
        case oe.f.PositionKind:
        case oe.f.NormalKind:
        case oe.f.TangentKind:
        case oe.f.ColorKind:
        case oe.f.MatricesIndicesKind:
        case oe.f.MatricesIndicesExtraKind:
        case oe.f.MatricesWeightsKind:
        case oe.f.MatricesWeightsExtraKind:
        case oe.f.UVKind:
        case oe.f.UV2Kind:
        case oe.f.UV3Kind:
        case oe.f.UV4Kind:
        case oe.f.UV5Kind:
        case oe.f.UV6Kind:
          return !0
      }
      return !1
    }

    function jH(ee) {
      const ie = Math.sqrt(ee.x * ee.x + ee.y * ee.y + ee.z * ee.z);
      ie > 0 && (ee.x /= ie, ee.y /= ie, ee.z /= ie)
    }

    function sH(ee) {
      return ee.x *= -1, ee
    }

    function IH(ee) {
      if (ee.x * ee.x + ee.y * ee.y > .5) {
        const ie = Math.abs(ee.x),
          He = Math.abs(ee.y);
        if (ie > He) {
          const He = Math.sign(ee.x);
          ee.x = ie, ee.y *= -He, ee.z *= -He, ee.w *= He
        } else {
          const ie = Math.sign(ee.y);
          ee.x *= -ie, ee.y = He, ee.z *= ie, ee.w *= -ie
        }
      } else {
        const ie = Math.abs(ee.z),
          He = Math.abs(ee.w);
        if (ie > He) {
          const He = Math.sign(ee.z);
          ee.x *= -He, ee.y *= He, ee.z = ie, ee.w *= -He
        } else {
          const ie = Math.sign(ee.w);
          ee.x *= ie, ee.y *= -ie, ee.z *= -ie, ee.w = He
        }
      }
      return ee
    }

    function hH(ee) {
      ee.wie(-ee.z, ee.w, ee.x, -ee.y)
    }

    function NH(ee, ie) {
      const He = ye.rf.FromArrayToRef(ie.translation || [0, 0, 0], 0, ye.TmpVectors.rf[0]),
        be = ye.Quaternion.FromArrayToRef(ie.rotation || [0, 0, 0, 1], 0, ye.TmpVectors.Quaternion[0]),
        Me = ye.Matrix.ComposeToRef(uH, be, He, ye.TmpVectors.Matrix[0]),
        Ke = ye.rf.FromArrayToRef(ee.translation || [0, 0, 0], 0, ye.TmpVectors.rf[2]),
        Ue = ye.Quaternion.FromArrayToRef(ee.rotation || [0, 0, 0, 1], 0, ye.TmpVectors.Quaternion[1]),
        Fe = ye.Matrix.ComposeToRef(uH, Ue, Ke, ye.TmpVectors.Matrix[1]);
      Me.multiplyToRef(Fe, Fe), Fe.decompose(void 0, be, He), He.equalsWithEpsilon(CH, cH.b) ? delete ie.translation : ie.translation = He.Qbe(), be.equalsWithEpsilon(vH, cH.b) ? delete ie.rotation : ie.rotation = be.Qbe(), ie.scale && delete ie.scale
    }

    function GH(ee, ie) {
      if (!(ie instanceof Re.b)) return !1;
      if (!(1 === ie.getChildren().length && 0 === ee.getChildren().length && ee.parent === ie)) return !1;
      const He = ee.Xx(),
        ye = ee instanceof aH.c && !He.useRightHandedSystem ? mH : uH;
      return !!ie.wR.equalsWithEpsilon(ye, cH.b) || (we.e.Warn(`Cannot collapse node ${ee.name} into parent node ${ie.name} with modified scaling.`), !1)
    }

    function rH(ee) {
      if (ee instanceof Array) {
        const ie = new Float32Array(ee);
        return new Uint8Array(ie.buffer, ie.byteOffset, ie.byteLength)
      }
      return ArrayBuffer.isView(ee) ? new Uint8Array(ee.buffer, ee.byteOffset, ee.byteLength) : new Uint8Array(ee)
    }

    function QH(ee, ie) {
      for (const [He, ye] of Object.entries(ee)) {
        const be = ie[He];
        (Array.isArray(ye) && Array.isArray(be) && ey(ye, be) || ye === be) && delete ee[He]
      }
      return ee
    }

    function ey(ee, ie) {
      return ee.length === ie.length && ee.every(((ee, He) => ee === ie[He]))
    }
    const iy = new Map([
      [Int8Array, (ee, ie, He) => ee.setInt8(ie, He)],
      [Uint8Array, (ee, ie, He) => ee.setUint8(ie, He)],
      [Uint8ClampedArray, (ee, ie, He) => ee.setUint8(ie, He)],
      [Int16Array, (ee, ie, He) => ee.setInt16(ie, He, !0)],
      [Uint16Array, (ee, ie, He) => ee.setUint16(ie, He, !0)],
      [Int32Array, (ee, ie, He) => ee.setInt32(ie, He, !0)],
      [Uint32Array, (ee, ie, He) => ee.setUint32(ie, He, !0)],
      [Float32Array, (ee, ie, He) => ee.setFloat32(ie, He, !0)],
      [Float64Array, (ee, ie, He) => ee.setFloat64(ie, He, !0)]
    ]);
    class Hy {
      writeTypedArray(ee) {
        this._checkGrowBuffer(ee.byteLength);
        const ie = iy.get(ee.constructor);
        for (let He = 0; He < ee.length; He++) ie(this._dataView, this._byteOffset, ee[He]), this._byteOffset += ee.BYTES_PER_ELEMENT
      }
      constructor(ee) {
        this._data = new Uint8Array(ee), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(ee) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, ee), this._byteOffset++
      }
      writeInt8(ee) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, ee), this._byteOffset++
      }
      writeInt16(ee) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, ee, !0), this._byteOffset += 2
      }
      writeUInt16(ee) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, ee, !0), this._byteOffset += 2
      }
      writeInt32(ee) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, ee, !0), this._byteOffset += 4
      }
      writeUInt32(ee) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, ee, !0), this._byteOffset += 4
      }
      writeFloat32(ee) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, ee, !0), this._byteOffset += 4
      }
      writeFloat64(ee) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, ee, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(ee) {
        const ie = this.byteOffset + ee;
        if (ie > this._data.byteLength) {
          const ee = new Uint8Array(2 * ie);
          ee.set(this._data), this._data = ee, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function yy(ee) {
      return ee % 4 === 0 ? 4 : ee % 2 === 0 ? 2 : 1
    }
    class by {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(ee) {
        let ie = 0;
        this._bufferViewToData.forEach((ee => {
          ie += ee.byteLength
        }));
        const He = new Hy(ie),
          ye = Array.from(this._bufferViewToData.keys()).sort(((ee, ie) => yy(ie.byteLength) - yy(ee.byteLength)));
        for (const be of ye) {
          be.byteOffset = He.byteOffset, ee.push(be);
          const ie = ee.length - 1,
            ye = this.getPropertiesWithBufferView(be);
          for (const ee of ye) ee.bufferView = ie;
          He.writeTypedArray(this._bufferViewToData.get(be)), this._bufferViewToData.delete(be)
        }
        return He.getOutputData()
      }
      createBufferView(ee, ie) {
        const He = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: ee.byteLength,
          byteStride: ie
        };
        return this._bufferViewToData.set(He, ee), He
      }
      createAccessor(ee, ie, He, ye, be, Me, Ke) {
        this._verifyBufferView(ee);
        const Ue = {
          bufferView: void 0,
          componentType: He,
          count: ye,
          type: ie,
          min: Me?.min,
          max: Me?.max,
          normalized: Ke,
          byteOffset: be
        };
        return this.setBufferView(Ue, ee), this._accessorToBufferView.set(Ue, ee), Ue
      }
      setBufferView(ee, ie) {
        this._verifyBufferView(ie);
        this.getPropertiesWithBufferView(ie).push(ee)
      }
      removeBufferView(ee) {
        const ie = this.getPropertiesWithBufferView(ee);
        for (const He of ie) void 0 !== He.bufferView && delete He.bufferView;
        this._bufferViewToData.delete(ee), this._bufferViewToProperties.delete(ee), this._accessorToBufferView.forEach(((ie, He) => {
          ie === ee && (void 0 !== He.byteOffset && delete He.byteOffset, this._accessorToBufferView.delete(He))
        }))
      }
      getBufferView(ee) {
        const ie = this._accessorToBufferView.get(ee);
        return this._verifyBufferView(ie), ie
      }
      getPropertiesWithBufferView(ee) {
        return this._verifyBufferView(ee), this._bufferViewToProperties.set(ee, this._bufferViewToProperties.get(ee) ?? []), this._bufferViewToProperties.get(ee)
      }
      getData(ee) {
        return this._verifyBufferView(ee), this._bufferViewToData.get(ee)
      }
      _verifyBufferView(ee) {
        if (void 0 === ee || !this._bufferViewToData.has(ee)) throw new Error(`BufferView ${ee} not found in BufferManager.`)
      }
    }
    var My = He(41320);
    (0, My.f)();
    var Ky = He(41568);
    (0, Ky.i)();
    var Uy = He(41380),
      Fy = He(42172);
    (0, Fy.d)();
    let Jy = (() => {
      var ee;
      let ie, He, ye = [],
        be = [],
        Me = [],
        Ke = [];
      return ee = class {
        get influence() {
          return this._influence
        }
        set influence(ee) {
          if (this._influence === ee) return;
          const ie = this._influence;
          this._influence = ee, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === ie || 0 === ee)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(ee) {
          this._animationPropertiesOverride = ee
        }
        constructor(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Ue = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = ee, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new HH.d, this._onDataLayoutChanged = new HH.d, this.id = (0, te.l)(this, ye, void 0), this.morphTargetManager = ((0, te.l)(this, be), (0, te.l)(this, Me, null)), this._animationPropertiesOverride = ((0, te.l)(this, Ke), null), this.id = ee, this.morphTargetManager = Ue, this._scene = He || Te.b.LastCreatedScene, this.influence = ie, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        ZFe(ee) {
          const ie = this.hasPositions;
          this._positions = ee, ie !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(ee) {
          const ie = this.hasNormals;
          this._normals = ee, ie !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(ee) {
          const ie = this.hasTangents;
          this._tangents = ee, ie !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(ee) {
          const ie = this.hasUVs;
          this._uvs = ee, ie !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(ee) {
          const ie = this.hasUV2s;
          this._uv2s = ee, ie !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(ee) {
          const ie = this.hasColors;
          this._colors = ee, ie !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const ie = Wi.c.Clone((() => new ee(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return ie._positions = this._positions, ie._normals = this._normals, ie._tangents = this._tangents, ie._uvs = this._uvs, ie._uv2s = this._uv2s, ie._colors = this._colors, ie
        }
        serialize() {
          const ee = {};
          return ee.name = this.name, ee.influence = this.influence, null != this.id && (ee.id = this.id), ee.uniqueId = this.uniqueId, ee.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (ee.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (ee.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (ee.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (ee.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (ee.colors = Array.prototype.slice.call(this.getColors())), Wi.c.AppendSerializedAnimations(this, ee), ee
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(ie, He) {
          let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const be = new ee(ie.name, ie.influence, He, ye);
          if (be.ZFe(ie.positions), null != ie.id && (be.id = ie.id), ie.normals && be.setNormals(ie.normals), ie.tangents && be.setTangents(ie.tangents), ie.uvs && be.setUVs(ie.uvs), ie.uv2s && be.setUV2s(ie.uv2s), ie.colors && be.setColors(ie.colors), ie.animations) {
            for (let ee = 0; ee < ie.animations.length; ee++) {
              const He = ie.animations[ee],
                ye = (0, li.c)("BABYLON.Animation");
              ye && be.animations.push(ye.Parse(He))
            }
            ie.autoAnimate && He && He.beginAnimation(be, ie.autoAnimateFrom, ie.autoAnimateTo, ie.autoAnimateLoop, ie.autoAnimateSpeed || 1)
          }
          return be
        }
        static FromMesh(ie, He, ye) {
          He || (He = ie.name);
          const be = new ee(He, ye, ie.Xx(), ie.morphTargetManager);
          return be.ZFe(ie.getVerticesData(ve.h.PositionKind)), ie.isVerticesDataPresent(ve.h.NormalKind) && be.setNormals(ie.getVerticesData(ve.h.NormalKind)), ie.isVerticesDataPresent(ve.h.TangentKind) && be.setTangents(ie.getVerticesData(ve.h.TangentKind)), ie.isVerticesDataPresent(ve.h.UVKind) && be.setUVs(ie.getVerticesData(ve.h.UVKind)), ie.isVerticesDataPresent(ve.h.UV2Kind) && be.setUV2s(ie.getVerticesData(ve.h.UV2Kind)), ie.isVerticesDataPresent(ve.h.ColorKind) && be.setColors(ie.getVerticesData(ve.h.ColorKind)), be
        }
      }, (() => {
        const Ue = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ie = [(0, Ze.R)()], He = [(0, Ze.R)()], (0, te.i)(null, null, ie, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: ee => "id" in ee,
            get: ee => ee.id,
            set: (ee, ie) => {
              ee.id = ie
            }
          },
          metadata: Ue
        }, ye, be), (0, te.i)(null, null, He, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: ee => "morphTargetManager" in ee,
            get: ee => ee.morphTargetManager,
            set: (ee, ie) => {
              ee.morphTargetManager = ie
            }
          },
          metadata: Ue
        }, Me, Ke), Ue && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ue
        })
      })(), ee
    })();
    var oy, Ry = He(42240),
      ky = He(41374);
    ! function(ee) {
      ee[ee.INTANGENT = 0] = "INTANGENT", ee[ee.OUTTANGENT = 1] = "OUTTANGENT"
    }(oy || (oy = {}));
    class qy {
      static _IsTransformable(ee) {
        return ee && (ee instanceof Re.b || ee instanceof My.d || ee instanceof ky.e)
      }
      static _CreateNodeAnimation(ee, ie, He, ye, Me) {
        if (this._IsTransformable(ee)) {
          const Ke = [],
            Ue = [],
            Fe = ie.getKeys(),
            Je = qy._CalculateMinMaxKeyFrames(Fe),
            oe = qy._DeduceInterpolation(Fe, He, ye),
            Re = oe.interpolationType,
            ke = oe.shouldBakeAnimation;
          if (ke ? qy._CreateBakedAnimation(ee, ie, He, Je.min, Je.max, ie.framePerSecond, Me, Ke, Ue, Je, ye) : "LINEAR" === Re || "STEP" === Re ? qy._CreateLinearOrStepAnimation(ee, ie, He, Ke, Ue, ye) : "CUBICSPLINE" === Re ? qy._CreateCubicSplineAnimation(ee, ie, He, Ke, Ue, ye) : qy._CreateBakedAnimation(ee, ie, He, Je.min, Je.max, ie.framePerSecond, Me, Ke, Ue, Je, ye), Ke.length && Ue.length) {
            return {
              inputs: Ke,
              outputs: Ue,
              samplerInterpolation: Re,
              inputsMin: ke ? Je.min : be.Tools.FloatRound(Je.min / ie.framePerSecond),
              inputsMax: ke ? Je.max : be.Tools.FloatRound(Je.max / ie.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(ee) {
        let ie = null,
          He = "VEC3",
          ye = !1;
        const Me = ee.targetProperty.split(".");
        switch (Me[0]) {
          case "wR":
            ie = "scale";
            break;
          case "position":
            ie = "translation";
            break;
          case "rotation":
            He = "VEC4", ie = "rotation";
            break;
          case "rotationQuaternion":
            He = "VEC4", ye = !0, ie = "rotation";
            break;
          case "influence":
            He = "SCALAR", ie = "weights";
            break;
          default:
            be.Tools.Error(`Unsupported animatable property ${Me[0]}`)
        }
        return ie ? {
          animationChannelTargetPath: ie,
          dataAccessorType: He,
          useQuaternion: ye
        } : (be.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
        let Re;
        if (qy._IsTransformable(ee) && ee.animations)
          for (const ke of ee.animations) {
            if (oe && !oe(ke)) continue;
            const be = qy._DeduceAnimationInfo(ke);
            be && (Re = {
              name: ke.name,
              samplers: [],
              channels: []
            }, qy._AddAnimation(`${ke.name}`, ke.hasRunningRuntimeAnimations ? ie : Re, ee, ke, be.dataAccessorType, be.animationChannelTargetPath, ye, Me, Ke, Ue, be.useQuaternion, Fe, Je), Re.samplers.length && Re.channels.length && He.push(Re))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
        let Re;
        if (ee instanceof Ry.e) {
          const be = ee.morphTargetManager;
          if (be)
            for (let ke = 0; ke < be.numTargets; ++ke) {
              const qe = be.getTarget(ke);
              for (const fe of qe.animations) {
                if (oe && !oe(fe)) continue;
                const qe = new Fy.b(`${fe.name}`, "influence", fe.framePerSecond, fe.dataType, fe.tH, fe.enableBlending),
                  Te = [],
                  pe = fe.getKeys();
                for (let ee = 0; ee < pe.length; ++ee) {
                  const ie = pe[ee];
                  for (let ee = 0; ee < be.numTargets; ++ee) ee == ke ? Te.push(ie) : Te.push({
                    frame: ie.frame,
                    value: 0
                  })
                }
                qe.setKeys(Te, !0);
                const Xe = qy._DeduceAnimationInfo(qe);
                Xe && (Re = {
                  name: qe.name,
                  samplers: [],
                  channels: []
                }, qy._AddAnimation(fe.name, fe.hasRunningRuntimeAnimations ? ie : Re, ee, qe, Xe.dataAccessorType, Xe.animationChannelTargetPath, ye, Me, Ke, Ue, Xe.useQuaternion, Fe, Je, be.numTargets), Re.samplers.length && Re.channels.length && He.push(Re))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) {
        let oe;
        if (ee.animationGroups) {
          const Re = ee.animationGroups;
          for (const ke of Re) {
            const Re = new Map,
              qe = new Map,
              fe = new Set,
              Te = ke.to - ke.from;
            oe = {
              name: ke.name,
              channels: [],
              samplers: []
            };
            for (let ie = 0; ie < ke.targetedAnimations.length; ++ie) {
              const Je = ke.targetedAnimations[ie],
                Te = Je.target,
                pe = Je.animation;
              if (Fe && !Fe(pe)) continue;
              const Xe = Ue.has(Te);
              if (this._IsTransformable(Te) || 1 === Te.length && this._IsTransformable(Te[0])) {
                const ee = qy._DeduceAnimationInfo(Je.animation);
                if (ee) {
                  const ie = this._IsTransformable(Te) ? Te : this._IsTransformable(Te[0]) ? Te[0] : null;
                  ie && qy._AddAnimation(`${pe.name}`, oe, ie, pe, ee.dataAccessorType, ee.animationChannelTargetPath, He, ye, be, Me, ee.useQuaternion, Ke, Xe)
                }
              } else if (Te instanceof Jy || 1 === Te.length && Te[0] instanceof Jy) {
                if (qy._DeduceAnimationInfo(Je.animation)) {
                  const ie = Te instanceof Jy ? Te : Te[0];
                  if (ie) {
                    const He = ee.morphTargetManagers.find((ee => {
                      for (let He = 0; He < ee.numTargets; ++He)
                        if (ee.getTarget(He) === ie) return !0;
                      return !1
                    }));
                    if (He) {
                      const ye = ee.meshes.find((ee => ee.morphTargetManager === He));
                      ye && (Re.has(ye) || Re.set(ye, new Map), Re.get(ye)?.set(ie, pe), fe.add(ye), qe.set(ye, pe))
                    }
                  }
                }
              }
            }
            fe.forEach((ee => {
              const ie = ee.morphTargetManager;
              let Ue = null;
              const Fe = [],
                Je = qe.get(ee).getKeys(),
                fe = Je.length;
              for (let He = 0; He < fe; ++He)
                for (let ye = 0; ye < ie.numTargets; ++ye) {
                  const be = ie.getTarget(ye),
                    Me = Re.get(ee);
                  if (Me) {
                    const ie = Me.get(be);
                    ie ? (Ue || (Ue = new Fy.b(`${ke.name}_${ee.name}_MorphWeightAnimation`, "influence", ie.framePerSecond, Fy.b.ANIMATIONTYPE_FLOAT, ie.tH, ie.enableBlending)), Fe.push(ie.getKeys()[He])) : Fe.push({
                      frame: ke.from + Te / fe * He,
                      value: be.influence,
                      inTangent: Je[0].inTangent ? 0 : void 0,
                      outTangent: Je[0].outTangent ? 0 : void 0
                    })
                  }
                }
              Ue.setKeys(Fe, !0);
              const pe = qy._DeduceAnimationInfo(Ue);
              pe && qy._AddAnimation(`${ke.name}_${ee.name}_MorphWeightAnimation`, oe, ee, Ue, pe.dataAccessorType, pe.animationChannelTargetPath, He, ye, be, Me, pe.useQuaternion, Ke, !1, ie?.numTargets)
            })), oe.channels.length && oe.samplers.length && (Je?.set(ke, ie.length), ie.push(oe))
          }
        }
      }
      static _AddAnimation(ee, ie, He, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe) {
        const Te = qy._CreateNodeAnimation(He, be, Ke, Re, ke);
        let pe, Xe, ze, Be, Ee, ge;
        if (Te) {
          if (fe) {
            let ee, ie = 0;
            const He = [];
            for (; Te.inputs.length > 0;) ee = Te.inputs.shift(), ie % fe == 0 && He.push(ee), ie++;
            Te.inputs = He
          }
          const ee = Ue.get(He),
            be = new Float32Array(Te.inputs);
          pe = Fe.createBufferView(be), Xe = Fe.createAccessor(pe, "SCALAR", 5126, Te.inputs.length, void 0, {
            min: [Te.inputsMin],
            max: [Te.inputsMax]
          }), oe.push(Xe), ze = oe.length - 1;
          const Je = new ye.Quaternion,
            Re = new ye.rf,
            ke = new ye.rf,
            Oe = He instanceof My.d,
            de = SH(Me),
            We = new Float32Array(Te.outputs.length * de);
          Te.outputs.forEach((function(ee, ie) {
            let He = ee;
            switch (Ke) {
              case "translation":
                qe && (ye.rf.FromArrayToRef(ee, 0, ke), sH(ke), ke.toArray(He));
                break;
              case "rotation":
                4 === ee.length ? ye.Quaternion.FromArrayToRef(ee, 0, Je) : (He = new Array(4), ye.rf.FromArrayToRef(ee, 0, Re), ye.Quaternion.FromEulerVectorToRef(Re, Je)), qe && (IH(Je), Oe && hH(Je)), Je.toArray(He)
            }
            We.set(He, ie * de)
          })), pe = Fe.createBufferView(We), Xe = Fe.createAccessor(pe, Me, 5126, Te.outputs.length), oe.push(Xe), Be = oe.length - 1, Ee = {
            interpolation: Te.samplerInterpolation,
            input: ze,
            output: Be
          }, ie.samplers.push(Ee), ge = {
            sampler: ie.samplers.length - 1,
            target: {
              node: ee,
              path: Ke
            }
          }, ie.channels.push(ge)
        }
      }
      static _CreateBakedAnimation(ee, ie, He, Me, Ke, Ue, Fe, Je, oe, Re, ke) {
        let qe;
        const fe = ye.Quaternion.Identity();
        let Te, pe, Xe, ze, Be, Ee = null,
          ge = null;
        Re.min = be.Tools.FloatRound(Me / Ue);
        const Oe = ie.getKeys();
        for (let ye = 0, de = Oe.length; ye < de; ++ye) {
          if (pe = Oe[ye], ye + 1 < de)
            if (Xe = Oe[ye + 1], pe.value.equals && pe.value.equals(Xe.value) || pe.value === Xe.value) {
              if (0 !== ye) continue;
              Be = pe.frame
            } else Be = Xe.frame;
          else {
            if (ze = Oe[ye - 1], pe.value.equals && pe.value.equals(ze.value) || pe.value === ze.value) continue;
            Be = Ke
          }
          if (Be)
            for (let ye = pe.frame; ye <= Be; ye += Fe) {
              if (Te = be.Tools.FloatRound(ye / Ue), Te === Ee) continue;
              Ee = Te, ge = Te;
              const Me = {
                key: 0,
                repeatCount: 0,
                tH: ie.tH
              };
              qe = ie._interpolate(ye, Me), qy._SetInterpolatedValue(ee, qe, Te, ie, He, fe, Je, oe, ke)
            }
        }
        ge && (Re.max = ge)
      }
      static _ConvertFactorToVector3OrQuaternion(ee, ie, He, Me, Ke) {
        const Ue = qy._GetBasePositionRotationOrScale(ie, Me, Ke),
          Fe = He.targetProperty.split("."),
          Je = Fe ? Fe[1] : "",
          oe = Ke ? ye.Quaternion.FromArray(Ue).normalize() : ye.rf.FromArray(Ue);
        switch (Je) {
          case "x":
          case "y":
          case "z":
            oe[Je] = ee;
            break;
          case "w":
            oe.w = ee;
            break;
          default:
            be.Tools.Error(`glTFAnimation: Unsupported component name "${Je}"!`)
        }
        return oe
      }
      static _SetInterpolatedValue(ee, ie, He, be, Me, Ke, Ue, Fe, Je) {
        let oe;
        Ue.push(He), "weights" !== Me ? (be.dataType === Fy.b.ANIMATIONTYPE_FLOAT && (ie = this._ConvertFactorToVector3OrQuaternion(ie, ee, be, Me, Je)), "rotation" === Me ? (Je ? Ke = ie : (oe = ie, ye.Quaternion.RotationYawPitchRollToRef(oe.y, oe.x, oe.z, Ke)), Fe.push(Ke.Qbe())) : (oe = ie, Fe.push(oe.Qbe()))) : Fe.push([ie])
      }
      static _CreateLinearOrStepAnimation(ee, ie, He, ye, be, Me) {
        for (const Ke of ie.getKeys()) ye.push(Ke.frame / ie.framePerSecond), qy._AddKeyframeValue(Ke, ie, be, He, ee, Me)
      }
      static _CreateCubicSplineAnimation(ee, ie, He, ye, be, Me) {
        ie.getKeys().forEach((function(Ke) {
          ye.push(Ke.frame / ie.framePerSecond), qy._AddSplineTangent(oy.INTANGENT, be, He, "CUBICSPLINE", Ke, Me), qy._AddKeyframeValue(Ke, ie, be, He, ee, Me), qy._AddSplineTangent(oy.OUTTANGENT, be, He, "CUBICSPLINE", Ke, Me)
        }))
      }
      static _GetBasePositionRotationOrScale(ee, ie, He) {
        let be;
        if ("rotation" === ie)
          if (He) {
            be = (ee.rotationQuaternion ?? ye.Quaternion.Identity()).Qbe()
          } else {
            be = (ee.rotation ?? ye.rf.Zero()).Qbe()
          }
        else if ("translation" === ie) {
          be = (ee.position ?? ye.rf.Zero()).Qbe()
        } else {
          be = (ee.wR ?? ye.rf.One()).Qbe()
        }
        return be
      }
      static _AddKeyframeValue(ee, ie, He, Me, Ke, Ue) {
        let Fe;
        const Je = ie.dataType;
        if (Je === Fy.b.ANIMATIONTYPE_VECTOR3) {
          let ie = ee.value.Qbe();
          if ("rotation" === Me) {
            const ee = ye.rf.FromArray(ie);
            ie = ye.Quaternion.RotationYawPitchRoll(ee.y, ee.x, ee.z).Qbe()
          }
          He.push(ie)
        } else if (Je === Fy.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === Me) He.push([ee.value]);
          else if (Fe = this._ConvertFactorToVector3OrQuaternion(ee.value, Ke, ie, Me, Ue), Fe) {
            if ("rotation" === Me) {
              const ee = Ue ? Fe : ye.Quaternion.RotationYawPitchRoll(Fe.y, Fe.x, Fe.z).normalize();
              He.push(ee.Qbe())
            }
            He.push(Fe.Qbe())
          }
        } else Je === Fy.b.ANIMATIONTYPE_QUATERNION ? He.push(ee.value.normalize().Qbe()) : be.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(ee, ie, He) {
        let ye, be, Me = !1;
        if ("rotation" === ie && !He) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let Ke = 0, Ue = ee.length; Ke < Ue; ++Ke)
          if (be = ee[Ke], be.inTangent || be.outTangent)
            if (ye) {
              if ("CUBICSPLINE" !== ye) {
                ye = "LINEAR", Me = !0;
                break
              }
            } else ye = "CUBICSPLINE";
        else if (ye) {
          if ("CUBICSPLINE" === ye || be.interpolation && 1 === be.interpolation && "STEP" !== ye) {
            ye = "LINEAR", Me = !0;
            break
          }
        } else ye = be.interpolation && 1 === be.interpolation ? "STEP" : "LINEAR";
        return ye || (ye = "LINEAR"), {
          interpolationType: ye,
          shouldBakeAnimation: Me
        }
      }
      static _AddSplineTangent(ee, ie, He, be, Me, Ke) {
        let Ue;
        const Fe = ee === oy.INTANGENT ? Me.inTangent : Me.outTangent;
        if ("CUBICSPLINE" === be) {
          if ("rotation" === He)
            if (Fe)
              if (Ke) Ue = Fe.Qbe();
              else {
                const ee = Fe;
                Ue = ye.Quaternion.RotationYawPitchRoll(ee.y, ee.x, ee.z).Qbe()
              }
          else Ue = [0, 0, 0, 0];
          else Ue = "weights" === He ? Fe ? [Fe] : [0] : Fe ? Fe.Qbe() : [0, 0, 0];
          ie.push(Ue)
        }
      }
      static _CalculateMinMaxKeyFrames(ee) {
        let ie = 1 / 0,
          He = -1 / 0;
        return ee.forEach((function(ee) {
          ie = Math.min(ie, ee.frame), He = Math.max(He, ee.frame)
        })), {
          min: ie,
          max: He
        }
      }
    }

    function fy(ee, ie, He, Me, Ke, Ue) {
      const Fe = {
          attributes: {},
          influence: ee.influence,
          name: ee.name
        },
        Je = ie.geometry;
      if (!Je) return be.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), Fe;
      const Re = Ue ? -1 : 1,
        ke = ye.rf.Zero();
      let qe, fe;
      if (ee.hasPositions) {
        const Me = ee.getPositions(),
          Ue = Je.getVerticesData(oe.f.PositionKind);
        if (Ue) {
          const ee = new Float32Array(Ue.length),
            ie = [1 / 0, 1 / 0, 1 / 0],
            be = [-1 / 0, -1 / 0, -1 / 0];
          fe = Ue.length / 3, qe = 0;
          for (let He = qe; He < fe; ++He) {
            const Ke = ye.rf.FromArray(Ue, 3 * He);
            ye.rf.FromArray(Me, 3 * He).subtractToRef(Ke, ke), ke.x *= Re, ie[0] = Math.min(ie[0], ke.x), be[0] = Math.max(be[0], ke.x), ie[1] = Math.min(ie[1], ke.y), be[1] = Math.max(be[1], ke.y), ie[2] = Math.min(ie[2], ke.z), be[2] = Math.max(be[2], ke.z), ee[3 * He] = ke.x, ee[3 * He + 1] = ke.y, ee[3 * He + 2] = ke.z
          }
          const Je = He.createBufferView(ee, 12),
            oe = He.createAccessor(Je, "VEC3", 5126, Me.length / 3, 0, {
              min: ie,
              max: be
            });
          Ke.push(oe), Fe.attributes.POSITION = Ke.length - 1
        } else be.Tools.Warn(`Morph target positions for mesh ${ie.name} were not exported. Mesh does not have position vertex data`)
      }
      if (ee.hasNormals) {
        const Me = ee.getNormals(),
          Ue = Je.getVerticesData(oe.f.NormalKind);
        if (Ue) {
          const ee = new Float32Array(Ue.length);
          fe = Ue.length / 3, qe = 0;
          for (let He = qe; He < fe; ++He) {
            const ie = ye.rf.FromArray(Ue, 3 * He).normalize();
            ye.rf.FromArray(Me, 3 * He).normalize().subtractToRef(ie, ke), ee[3 * He] = ke.x * Re, ee[3 * He + 1] = ke.y, ee[3 * He + 2] = ke.z
          }
          const ie = He.createBufferView(ee, 12),
            be = He.createAccessor(ie, "VEC3", 5126, Me.length / 3, 0);
          Ke.push(be), Fe.attributes.NORMAL = Ke.length - 1
        } else be.Tools.Warn(`Morph target normals for mesh ${ie.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (ee.hasTangents) {
        const Me = ee.getTangents(),
          Ue = Je.getVerticesData(oe.f.TangentKind);
        if (Ue) {
          fe = Ue.length / 4;
          const ee = new Float32Array(3 * fe);
          qe = 0;
          for (let He = qe; He < fe; ++He) {
            const ie = ye.rf.FromArray(Ue, 4 * He);
            jH(ie);
            const be = ye.rf.FromArray(Me, 3 * He);
            jH(be), be.subtractToRef(ie, ke), ee[3 * He] = ke.x * Re, ee[3 * He + 1] = ke.y, ee[3 * He + 2] = ke.z
          }
          const ie = He.createBufferView(ee, 12),
            be = He.createAccessor(ie, "VEC3", 5126, fe, 0);
          Ke.push(be), Fe.attributes.TANGENT = Ke.length - 1
        } else be.Tools.Warn(`Morph target tangents for mesh ${ie.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (ee.hasColors) {
        const Me = ee.getColors(),
          Ue = Je.getVerticesData(oe.f.ColorKind),
          Re = Je.getVertexBuffer(oe.f.ColorKind);
        if (Ue && Re) {
          const ee = Re.getSize();
          fe = Ue.length / ee;
          const ie = new Float32Array(fe * ee);
          qe = 0;
          for (let He = qe; He < fe; ++He)
            if (3 === ee) {
              const be = ye.rf.FromArray(Ue, He * ee);
              ye.rf.FromArray(Me, He * ee).subtractToRef(be, ke), ie[3 * He] = ke.x, ie[3 * He + 1] = ke.y, ie[3 * He + 2] = ke.z
            } else if (4 === ee) {
            const be = new ye.Vector4,
              Ke = ye.Vector4.FromArray(Ue, He * ee);
            ye.Vector4.FromArray(Me, He * ee).subtractToRef(Ke, be), ie[4 * He] = be.x, ie[4 * He + 1] = be.y, ie[4 * He + 2] = be.z, ie[4 * He + 3] = be.w
          } else be.Tools.Warn(`Unsupported number of components for color attribute: ${ee}`);
          const Je = He.createBufferView(ie, 4 * ee),
            oe = He.createAccessor(Je, 3 === ee ? "VEC3" : "VEC4", 5126, fe, 0);
          Ke.push(oe), Fe.attributes.COLOR_0 = Ke.length - 1
        } else be.Tools.Warn(`Morph target colors for mesh ${ie.name} were not exported. Mesh does not have colors vertex data`)
      }
      return Fe
    }
    var Ty = He(44769);
    class py {}
    py.DEFAULT_COLOR = je.c.White(), py.DEFAULT_WIDTH_ATTENUATED = 1, py.DEFAULT_WIDTH = .1;
    var Xy = He(42166);
    class zy {
      constructor(ee) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = ee
      }
      moveTo(ee, ie) {
        this._currentPath = new Xy.j(ee, ie), this._tempPaths.push(this._currentPath)
      }
      lineTo(ee, ie) {
        this._currentPath.addLineTo(ee, ie)
      }
      quadraticCurveTo(ee, ie, He, ye) {
        this._currentPath.addQuadraticCurveTo(ee, ie, He, ye, this._resolution)
      }
      bezierCurveTo(ee, ie, He, ye, be, Me) {
        this._currentPath.addBezierCurveTo(ee, ie, He, ye, be, Me, this._resolution)
      }
      extractHoles() {
        for (const ee of this._tempPaths) ee.area() > 0 ? this._holes.push(ee) : this._paths.push(ee);
        if (!this._paths.length && this._holes.length) {
          const ee = this._holes;
          this._holes = this._paths, this._paths = ee
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

    function By(ee, ie, He, ye, be, Me) {
      const Ke = Me.glyphs[ee] || Me.glyphs["?"];
      if (!Ke) return null;
      const Ue = new zy(be);
      if (Ke.o) {
        const ee = Ke.o.split(" ");
        for (let be = 0, Me = ee.length; be < Me;) {
          switch (ee[be++]) {
            case "m": {
              const Me = parseInt(ee[be++]) * ie + He,
                Ke = parseInt(ee[be++]) * ie + ye;
              Ue.moveTo(Me, Ke);
              break
            }
            case "l": {
              const Me = parseInt(ee[be++]) * ie + He,
                Ke = parseInt(ee[be++]) * ie + ye;
              Ue.lineTo(Me, Ke);
              break
            }
            case "q": {
              const Me = parseInt(ee[be++]) * ie + He,
                Ke = parseInt(ee[be++]) * ie + ye,
                Fe = parseInt(ee[be++]) * ie + He,
                Je = parseInt(ee[be++]) * ie + ye;
              Ue.quadraticCurveTo(Fe, Je, Me, Ke);
              break
            }
            case "b": {
              const Me = parseInt(ee[be++]) * ie + He,
                Ke = parseInt(ee[be++]) * ie + ye,
                Fe = parseInt(ee[be++]) * ie + He,
                Je = parseInt(ee[be++]) * ie + ye,
                oe = parseInt(ee[be++]) * ie + He,
                Re = parseInt(ee[be++]) * ie + ye;
              Ue.bezierCurveTo(Fe, Je, oe, Re, Me, Ke);
              break
            }
          }
        }
      }
      return Ue.extractHoles(), {
        offsetX: Ke.ha * ie,
        shapePath: Ue
      }
    }

    function Ey(ee, ie, He, ye) {
      const be = Array.from(ee),
        Me = ie / ye.resolution,
        Ke = (ye.boundingBox.yMax - ye.boundingBox.yMin + ye.underlineThickness) * Me,
        Ue = [];
      let Fe = 0,
        Je = 0;
      for (let oe = 0; oe < be.length; oe++) {
        const ee = be[oe];
        if ("\n" === ee) Fe = 0, Je -= Ke;
        else {
          const ie = By(ee, Me, Fe, Je, He, ye);
          ie && (Fe += ie.offsetX, Ue.push(ie.shapePath))
        }
      }
      return Ue
    }
    class gy {
      static ConvertPoints(ee, ie) {
        if (ee.length && Array.isArray(ee) && "number" === typeof ee[0]) return [ee];
        if (ee.length && Array.isArray(ee[0]) && "number" === typeof ee[0][0]) return ee;
        if (ee.length && !Array.isArray(ee[0]) && ee[0] instanceof Ce.p) {
          const ie = [];
          for (let He = 0; He < ee.length; He++) {
            const ye = ee[He];
            ie.push(ye.x, ye.y, ye.z)
          }
          return [ie]
        }
        if (ee.length > 0 && Array.isArray(ee[0]) && ee[0].length > 0 && ee[0][0] instanceof Ce.p) {
          const ie = [],
            He = ee;
          for (const ee of He) ie.push(ee.flatMap((ee => [ee.x, ee.y, ee.z])));
          return ie
        }
        if (ee instanceof Float32Array) {
          if (ie?.floatArrayStride) {
            const He = [],
              ye = 3 * ie.floatArrayStride;
            for (let ie = 0; ie < ee.length; ie += ye) {
              const be = new Array(ye);
              for (let He = 0; He < ye; He++) be[He] = ee[ie + He];
              He.push(be)
            }
            return He
          }
          return [Array.from(ee)]
        }
        if (ee.length && ee[0] instanceof Float32Array) {
          const ie = [];
          for (const He of ee) ie.push(Array.from(He));
          return ie
        }
        return []
      }
      static OmitZeroLengthPredicate(ee, ie, He) {
        const ye = [];
        return ie.subtract(ee).lengthSquared() > 0 && ye.push([ee, ie]), He.subtract(ie).lengthSquared() > 0 && ye.push([ie, He]), ee.subtract(He).lengthSquared() > 0 && ye.push([He, ee]), 0 === ye.length ? null : ye
      }
      static OmitDuplicatesPredicate(ee, ie, He, ye) {
        const be = [];
        return gy._SearchInPoints(ee, ie, ye) || be.push([ee, ie]), gy._SearchInPoints(ie, He, ye) || be.push([ie, He]), gy._SearchInPoints(He, ee, ye) || be.push([He, ee]), 0 === be.length ? null : be
      }
      static _SearchInPoints(ee, ie, He) {
        for (const ye of He)
          for (let He = 0; He < ye.length; He++)
            if (ye[He]?.equals(ee) && (ye[He + 1]?.equals(ie) || ye[He - 1]?.equals(ie))) return !0;
        return !1
      }
      static MeshesToLines(ee, ie) {
        const He = [];
        for (let ye = 0; ye < ee.length; ye++) {
          const be = ee[ye],
            Me = be.getVerticesData(ve.h.PositionKind),
            Ke = be.eMe();
          if (Me && Ke)
            for (let ee = 0, Ue = 0; ee < Ke.length; ee++) {
              const Fe = 3 * Ke[Ue++],
                Je = 3 * Ke[Ue++],
                oe = 3 * Ke[Ue++],
                Re = new Ce.p(Me[Fe], Me[Fe + 1], Me[Fe + 2]),
                ke = new Ce.p(Me[Je], Me[Je + 1], Me[Je + 2]),
                qe = new Ce.p(Me[oe], Me[oe + 1], Me[oe + 2]);
              if (ie) {
                const Ue = ie(Re, ke, qe, He, ee, Fe, be, ye, Me, Ke);
                if (Ue)
                  for (const ee of Ue) He.push(ee)
              } else He.push([Re, ke], [ke, qe], [qe, Re])
            }
        }
        return He
      }
      static ToVector3Array(ee) {
        if (Array.isArray(ee[0])) {
          const ie = [],
            He = ee;
          for (const ee of He) {
            const He = [];
            for (let ie = 0; ie < ee.length; ie += 3) He.push(new Ce.p(ee[ie], ee[ie + 1], ee[ie + 2]));
            ie.push(He)
          }
          return ie
        }
        const ie = ee,
          He = [];
        for (let ye = 0; ye < ie.length; ye += 3) He.push(new Ce.p(ie[ye], ie[ye + 1], ie[ye + 2]));
        return He
      }
      static ToNumberArray(ee) {
        return ee.flatMap((ee => [ee.x, ee.y, ee.z]))
      }
      static GetPointsCountInfo(ee) {
        const ie = new Array(ee.length);
        let He = 0;
        for (let ye = ee.length; ye--;) ie[ye] = ee[ye].length / 3, He += ie[ye];
        return {
          total: He,
          counts: ie
        }
      }
      static GetLineLength(ee) {
        if (0 === ee.length) return 0;
        let ie;
        ie = "number" === typeof ee[0] ? gy.ToVector3Array(ee) : ee;
        const He = Ce.j.rf[0];
        let ye = 0;
        for (let be = 0; be < ie.length - 1; be++) {
          const ee = ie[be];
          ye += ie[be + 1].subtractToRef(ee, He).length()
        }
        return ye
      }
      static GetLineLengthArray(ee, ie) {
        const He = ie ? new Float32Array(ie, 0, ee.length / 3) : new Float32Array(ee.length / 3);
        let ye = 0;
        for (let be = 0, Me = ee.length / 3 - 1; be < Me; be++) {
          let ie = ee[3 * be + 0],
            Me = ee[3 * be + 1],
            Ke = ee[3 * be + 2];
          ie -= ee[3 * be + 3], Me -= ee[3 * be + 4], Ke -= ee[3 * be + 5];
          ye += Math.sqrt(ie * ie + Me * Me + Ke * Ke), He[be + 1] = ye
        }
        return He
      }
      static SegmentizeSegmentByCount(ee, ie, He) {
        const ye = [],
          be = ie.subtract(ee),
          Me = Ce.j.rf[0];
        Me.Iee(He);
        const Ke = Ce.j.rf[1];
        be.divideToRef(Me, Ke);
        let Ue = ee.clone();
        ye.push(Ue);
        for (let Fe = 0; Fe < He; Fe++) Ue = Ue.clone(), ye.push(Ue.addInPlace(Ke));
        return ye
      }
      static SegmentizeLineBySegmentLength(ee, ie) {
        const He = ee[0] instanceof Ce.p ? gy.GetLineSegments(ee) : "number" === typeof ee[0] ? gy.GetLineSegments(gy.ToVector3Array(ee)) : ee,
          ye = [];
        for (const be of He)
          if (be.length > ie) {
            const ee = gy.SegmentizeSegmentByCount(be.point1, be.point2, Math.ceil(be.length / ie));
            for (const ie of ee) ye.push(ie)
          } else ye.push(be.point1), ye.push(be.point2);
        return ye
      }
      static SegmentizeLineBySegmentCount(ee, ie) {
        const He = "number" === typeof ee[0] ? gy.ToVector3Array(ee) : ee,
          ye = gy.GetLineLength(He) / ie;
        return gy.SegmentizeLineBySegmentLength(He, ye)
      }
      static GetLineSegments(ee) {
        const ie = [];
        for (let He = 0; He < ee.length - 1; He++) {
          const ye = ee[He],
            be = ee[He + 1],
            Me = be.subtract(ye).length();
          ie.push({
            point1: ye,
            point2: be,
            length: Me
          })
        }
        return ie
      }
      static GetMinMaxSegmentLength(ee) {
        const ie = gy.GetLineSegments(ee).sort((ee => ee.length));
        return {
          min: ie[0].length,
          max: ie[ie.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const be = ie * He;
        let Me = 0,
          Ke = 0;
        const Ue = ee.length;
        for (let Je = 0; Je < Ue; Je++) {
          if (be <= Me + ee[Je].length) {
            Ke = Je;
            break
          }
          Me += ee[Je].length
        }
        const Fe = (be - Me) / ee[Ke].length;
        return ee[Ke].point2.subtractToRef(ee[Ke].point1, Ce.j.rf[0]), Ce.j.rf[0].scaleToRef(Fe, Ce.j.rf[1]), ye || Ce.j.rf[1].addInPlace(ee[Ke].point1), Ce.j.rf[1].clone()
      }
      static GetCircleLinePoints(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ee,
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / ie;
        const Me = [];
        for (let Ke = 0; Ke <= ie; Ke++) Me.push(new Ce.p(Math.cos(Ke * be) * ee, Math.sin(Ke * be) * ye, He));
        return Me
      }
      static GetBezierLinePoints(ee, ie, He, ye) {
        return Xy.f.CreateQuadraticBezier(ee, ie, He, ye).getPoints().flatMap((ee => [ee.x, ee.y, ee.z]))
      }
      static GetArrowCap(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [ee.clone(), ee.add(ie.multiplyByFloats(He, He, He))],
          widths: [ye, be, Me, Ke]
        }
      }
      static GetPointsFromText(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Me = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const Ke = [],
          Ue = Ey(ee, ie, He, ye);
        for (const Fe of Ue) {
          for (const ee of Fe.paths) {
            const ie = [],
              He = ee.getPoints();
            for (const ee of He) ie.push(ee.x, ee.y, be);
            Ke.push(ie)
          }
          if (Me)
            for (const ee of Fe.holes) {
              const ie = [],
                He = ee.getPoints();
              for (const ee of He) ie.push(ee.x, ee.y, be);
              Ke.push(ie)
            }
        }
        return Ke
      }
      static Color3toRGBAUint8(ee) {
        const ie = new Uint8Array(4 * ee.length);
        for (let He = 0, ye = 0; He < ee.length; He++) ie[ye++] = 255 * ee[He].r, ie[ye++] = 255 * ee[He].g, ie[ye++] = 255 * ee[He].b, ie[ye++] = 255;
        return ie
      }
      static CreateColorsTexture(ee, ie, He, ye) {
        const be = ye.Nf().getCaps().maxTextureSize ?? 1,
          Me = ie.length > be ? be : ie.length,
          Ke = Math.ceil(ie.length / be);
        Ke > 1 && (ie = [...ie, ...Array(Me * Ke - ie.length).fill(ie[0])]);
        const Ue = gy.Color3toRGBAUint8(ie),
          Fe = new Oe.c(Ue, Me, Ke, kH.b.TEXTUREFORMAT_RGBA, ye, !1, !0, He);
        return Fe.name = ee, Fe
      }
      static PrepareEmptyColorsTexture(ee) {
        if (!py.EmptyColorsTexture) {
          const ie = new Uint8Array(4);
          py.EmptyColorsTexture = new Oe.c(ie, 1, 1, kH.b.TEXTUREFORMAT_RGBA, ee, !1, !1, Oe.c.NEAREST_NEAREST), py.EmptyColorsTexture.name = "grlEmptyColorsTexture", py.EmptyColorsTexture.Bx.addOnce((() => {
            py.EmptyColorsTexture = null
          }))
        }
        return py.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        py.EmptyColorsTexture?.dispose(), py.EmptyColorsTexture = null
      }
      static BooleanToNumber(ee) {
        return ee ? 1 : 0
      }
    }
    class Oy extends ue.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class dy extends me.b {
      isCompatible(ee) {
        return !0
      }
      constructor(ee, ie, He) {
        He = He || {
          color: py.DEFAULT_COLOR
        };
        const ye = new Oy;
        ye.GREASED_LINE_HAS_COLOR = !!He.color && !He.useColors, ye.GREASED_LINE_SIZE_ATTENUATION = He.sizeAttenuation ?? !1, ye.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === He.colorDistributionType, ye.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (ie ?? ee.Xx()).useRightHandedSystem, ye.GREASED_LINE_CAMERA_FACING = He.cameraFacing ?? !0, super(ee, dy.GREASED_LINE_MATERIAL_NAME, 200, ye, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = He?.forceGLSL || dy.ForceGLSL, this._scene = ie ?? ee.Xx(), this._engine = this._scene.Nf(), this._cameraFacing = He.cameraFacing ?? !0, this.visibility = He.visibility ?? 1, this.useDash = He.useDash ?? !1, this.dashRatio = He.dashRatio ?? .5, this.dashOffset = He.dashOffset ?? 0, this.width = He.width ? He.width : He.sizeAttenuation ? py.DEFAULT_WIDTH_ATTENUATED : py.DEFAULT_WIDTH, this._sizeAttenuation = He.sizeAttenuation ?? !1, this.colorMode = He.colorMode ?? 0, this._color = He.color ?? null, this.useColors = He.useColors ?? !1, this._colorsDistributionType = He.colorDistributionType ?? 0, this.colorsSampling = He.colorsSampling ?? Oe.c.NEAREST_NEAREST, this._colors = He.colors ?? null, this.dashCount = He.dashCount ?? 1, this.resolution = He.resolution ?? new Ce.n(this._engine.getRenderWidth(), this._engine.getRenderHeight()), He.colorsTexture ? this.colorsTexture = He.colorsTexture : this._colors ? this.colorsTexture = gy.CreateColorsTexture(`${ee.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? py.DEFAULT_COLOR, gy.PrepareEmptyColorsTexture(this._scene)), this._engine.Bx.add((() => {
          gy.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(ee) {
        ee.push("grl_offsets"), ee.push("grl_widths"), ee.push("grl_colorPointers"), ee.push("grl_counters"), this._cameraFacing ? (ee.push("grl_previousAndSide"), ee.push("grl_nextAndCounters")) : ee.push("grl_slopes")
      }
      getSamplers(ee) {
        ee.push("grl_colors")
      }
      getActiveTextures(ee) {
        this.colorsTexture && ee.push(this.colorsTexture)
      }
      getUniforms() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const ie = [{
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
        return this._cameraFacing && ie.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === ee && ie.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: ie,
          vertex: this._cameraFacing && this._isGLSL(ee) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(ee) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(ee) {
        if (this._cameraFacing) {
          ee.oie("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || ee.oie("viewProjection", this._scene.getTransformMatrix());
          const ie = Ce.j.Vector4[0];
          ie.x = this._aspect, ie.y = this._resolution.x, ie.z = this._resolution.y, ie.w = this.width, ee.updateVector4("grl_aspect_resolution_lineWidth", ie)
        }
        const ie = Ce.j.Vector4[0];
        ie.x = gy.BooleanToNumber(this.useDash), ie.y = this._dashArray, ie.z = this.dashOffset, ie.w = this.dashRatio, ee.updateVector4("grl_dashOptions", ie);
        const He = Ce.j.Vector4[1];
        He.x = this.colorMode, He.y = this.visibility, He.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, He.w = gy.BooleanToNumber(this.useColors), ee.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", He), this._color && ee.updateColor3("grl_singleColor", this._color);
        const ye = this.colorsTexture ?? py.EmptyColorsTexture;
        ee.setTexture("grl_colors", ye), ee.updateFloat2("grl_textureSize", ye?.getSize().width ?? 1, ye?.getSize().height ?? 1)
      }
      prepareDefines(ee, ie, He) {
        ee.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, ee.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, ee.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, ee.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = ie.useRightHandedSystem, ee.GREASED_LINE_CAMERA_FACING = this._cameraFacing, ee.GREASED_LINE_USE_OFFSETS = !!He.offsets
      }
      getClassName() {
        return dy.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(ie) ? function(ee, ie) {
          if ("vertex" === ee) {
            const ee = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return ie && (ee["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), ee
          }
          return "fragment" === ee ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(ee, this._cameraFacing) : function(ee, ie) {
          if ("vertex" === ee) {
            const ee = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return ie && (ee["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), ee
          }
          return "fragment" === ee ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(ee, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(ee) {
        this.setColors(ee)
      }
      setColors(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ye = this._colors?.length ?? 0;
        if (this._colors = ee, null !== ee && 0 !== ee.length) {
          if (!ie || He)
            if (this.colorsTexture && ye === ee.length && !He) {
              const ie = gy.Color3toRGBAUint8(ee);
              this.colorsTexture.update(ie)
            } else this.colorsTexture?.dispose(), this.colorsTexture = gy.CreateColorsTexture(`${this._material.name}-colors-texture`, ee, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(ee) {
        this._dashCount = ee, this._dashArray = 1 / ee
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(ee) {
        this._sizeAttenuation = ee, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(ee) {
        this.setColor(ee)
      }
      setColor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== ee || null !== this._color && null === ee ? (this._color = ee, ie || this.markAllDefinesAsDirty()) : this._color = ee
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(ee) {
        this._colorsDistributionType = ee, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(ee) {
        this._aspect = ee.x / ee.y, this._resolution = ee
      }
      serialize() {
        const ee = super.serialize(),
          ie = {
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
        return this._colors && (ie.colors = this._colors), this._color && (ie.color = this._color), ee.greasedLineMaterialOptions = ie, ee
      }
      parse(ee, ie, He) {
        super.parse(ee, ie, He);
        const ye = ee.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), ye.color && this.setColor(ye.color, !0), ye.colorDistributionType && (this.colorsDistributionType = ye.colorDistributionType), ye.colors && (this.colors = ye.colors), ye.colorsSampling && (this.colorsSampling = ye.colorsSampling), ye.colorMode && (this.colorMode = ye.colorMode), ye.useColors && (this.useColors = ye.useColors), ye.visibility && (this.visibility = ye.visibility), ye.useDash && (this.useDash = ye.useDash), ye.dashCount && (this.dashCount = ye.dashCount), ye.dashRatio && (this.dashRatio = ye.dashRatio), ye.dashOffset && (this.dashOffset = ye.dashOffset), ye.width && (this.width = ye.width), ye.sizeAttenuation && (this.sizeAttenuation = ye.sizeAttenuation), ye.resolution && (this.resolution = ye.resolution), this.colors ? this.colorsTexture = gy.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, ie) : gy.PrepareEmptyColorsTexture(ie), this.markAllDefinesAsDirty()
      }
      copyTo(ee) {
        const ie = ee;
        ie.colorsTexture?.dispose(), this._colors && (ie.colorsTexture = gy.CreateColorsTexture(`${ie._material.name}-colors-texture`, this._colors, ie.colorsSampling, this._scene)), ie.setColor(this.color, !0), ie.colorsDistributionType = this.colorsDistributionType, ie.colorsSampling = this.colorsSampling, ie.colorMode = this.colorMode, ie.useColors = this.useColors, ie.visibility = this.visibility, ie.useDash = this.useDash, ie.dashCount = this.dashCount, ie.dashRatio = this.dashRatio, ie.dashOffset = this.dashOffset, ie.width = this.width, ie.sizeAttenuation = this.sizeAttenuation, ie.resolution = this.resolution, ie.markAllDefinesAsDirty()
      }
      _isGLSL(ee) {
        return 0 === ee || this._forceGLSL
      }
    }
    dy.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", dy.ForceGLSL = !1;
    var Wy = He(41524),
      ty = He(41535),
      Zy = He(39463),
      wy = He(41585),
      Dy = He(40929);
    class Py extends wy.o {
      constructor(ee, ie, ye) {
        const be = ie.Nf(),
          Me = be.isWebGPU && !(ye.forceGLSL || Py.ForceGLSL),
          Ke = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        ie.useRightHandedSystem && Ke.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const Ue = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        ye.cameraFacing ? (Ke.push("GREASED_LINE_CAMERA_FACING"), Ue.push("grl_previousAndSide", "grl_nextAndCounters")) : (Ue.push("grl_slopes"), Ue.push("grl_counters"));
        const Fe = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (Me || Fe.push("world", "viewProjection", "view", "projection"), super(ee, ie, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: Me ? ["Scene", "Mesh"] : void 0,
            attributes: Ue,
            uniforms: Fe,
            samplers: Me ? [] : ["grlColors"],
            defines: Ke,
            extraInitializationsAsync: async () => {
              Me ? await Promise.all([He.e(643).then((() => He(64438))), He.e(699).then((() => He(64447)))]) : await Promise.all([He.e(636).then((() => He(64456))), He.e(700).then((() => He(64461)))])
            },
            shaderLanguage: Me ? 1 : 0
          }), this._color = je.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, ye = ye || {
            color: py.DEFAULT_COLOR
          }, this.visibility = ye.visibility ?? 1, this.useDash = ye.useDash ?? !1, this.dashRatio = ye.dashRatio ?? .5, this.dashOffset = ye.dashOffset ?? 0, this.dashCount = ye.dashCount ?? 1, this.width = ye.width ? ye.width : ye.sizeAttenuation && ye.cameraFacing ? py.DEFAULT_WIDTH_ATTENUATED : py.DEFAULT_WIDTH, this.sizeAttenuation = ye.sizeAttenuation ?? !1, this.color = ye.color ?? je.c.White(), this.useColors = ye.useColors ?? !1, this.colorsDistributionType = ye.colorDistributionType ?? 0, this.colorsSampling = ye.colorsSampling ?? Oe.c.NEAREST_NEAREST, this.colorMode = ye.colorMode ?? 0, this._colors = ye.colors ?? null, this._cameraFacing = ye.cameraFacing ?? !0, this.resolution = ye.resolution ?? new Ce.n(be.getRenderWidth(), be.getRenderHeight()), ye.colorsTexture ? this.colorsTexture = ye.colorsTexture : this._colors ? this.colorsTexture = gy.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, ie) : (this._color = this._color ?? py.DEFAULT_COLOR, this.colorsTexture = gy.PrepareEmptyColorsTexture(ie)), Me) {
          const ee = new Dy.e;
          ee.setParameters(), ee.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", ee)
        }
        be.Bx.add((() => {
          gy.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== py.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Ce.n(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(ee) {
        this.setColors(ee)
      }
      setColors(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ye = this._colors?.length ?? 0;
        if (this._colors = ee, null !== ee && 0 !== ee.length) {
          if (!ie || He)
            if (this._colorsTexture && ye === ee.length && !He) {
              const ie = gy.Color3toRGBAUint8(ee);
              this._colorsTexture.update(ie)
            } else this._colorsTexture && this._colorsTexture !== py.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = gy.CreateColorsTexture(`${this.name}-colors-texture`, ee, this.colorsSampling, this.Xx())
        } else {
          this._colorsTexture && this._colorsTexture !== py.EmptyColorsTexture && this._colorsTexture.dispose();
          const ee = this.Xx();
          ee && (this.colorsTexture = gy.PrepareEmptyColorsTexture(ee))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(ee) {
        this._colorsTexture = ee, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(ee) {
        this._width = ee, this.setFloat("grlWidth", ee)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(ee) {
        this._useColors = ee, this.setFloat("grlUseColors", gy.BooleanToNumber(ee))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(ee) {
        this._colorsSampling = ee
      }
      get visibility() {
        return this._visibility
      }
      set visibility(ee) {
        this._visibility = ee, this.setFloat("grlVisibility", ee)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(ee) {
        this._useDash = ee, this.setFloat("grlUseDash", gy.BooleanToNumber(ee))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(ee) {
        this._dashOffset = ee, this.setFloat("grlDashOffset", ee)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(ee) {
        this._dashRatio = ee, this.setFloat("grlDashRatio", ee)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(ee) {
        this._dashCount = ee, this._dashArray = 1 / ee, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(ee) {
        this._sizeAttenuation = ee, this.setFloat("grlSizeAttenuation", gy.BooleanToNumber(ee))
      }
      get color() {
        return this._color
      }
      set color(ee) {
        this.setColor(ee)
      }
      setColor(ee) {
        ee = ee ?? py.DEFAULT_COLOR, this._color = ee, this.setColor3("grlColor", ee)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(ee) {
        this._colorsDistributionType = ee, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(ee) {
        this._colorMode = ee, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(ee) {
        this._resolution = ee, this.setVector2("grlResolution", ee), this.setFloat("grlAspect", ee.x / ee.y)
      }
      serialize() {
        const ee = super.serialize(),
          ie = {
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
        return this._colors && (ie.colors = this._colors), ee.greasedLineMaterialOptions = ie, ee
      }
      parse(ee, ie, He) {
        const ye = ee.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), ye.color && (this.color = ye.color), ye.colorDistributionType && (this.colorsDistributionType = ye.colorDistributionType), ye.colorsSampling && (this.colorsSampling = ye.colorsSampling), ye.colorMode && (this.colorMode = ye.colorMode), ye.useColors && (this.useColors = ye.useColors), ye.visibility && (this.visibility = ye.visibility), ye.useDash && (this.useDash = ye.useDash), ye.dashCount && (this.dashCount = ye.dashCount), ye.dashRatio && (this.dashRatio = ye.dashRatio), ye.dashOffset && (this.dashOffset = ye.dashOffset), ye.width && (this.width = ye.width), ye.sizeAttenuation && (this.sizeAttenuation = ye.sizeAttenuation), ye.resolution && (this.resolution = ye.resolution), ye.colors ? this.colorsTexture = gy.CreateColorsTexture(`${this.name}-colors-texture`, ye.colors, this.colorsSampling, this.Xx()) : this.colorsTexture = gy.PrepareEmptyColorsTexture(ie), this._cameraFacing = ye.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var Ay, Yy, Vy;
    Py.ForceGLSL = !1,
      function(ee) {
        ee[ee.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", ee[ee.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(Ay || (Ay = {})),
      function(ee) {
        ee[ee.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", ee[ee.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", ee[ee.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(Yy || (Yy = {})),
      function(ee) {
        ee[ee.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", ee[ee.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", ee[ee.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", ee[ee.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", ee[ee.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(Vy || (Vy = {}));
    class ay extends Wy.b {
      constructor(ee, ie, He) {
        super(ee, ie, null, null, !1, !1), this.name = ee, this._options = He, this._lazy = !1, this._updatable = !1, this._engine = ie.Nf(), this._lazy = He.lazy ?? !1, this._updatable = He.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = He.colorPointers ?? [], this._widths = He.widths ?? new Array(He.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(ee) {
        let ie = 0;
        for (const ye of this._points) ie += ye.length;
        const He = ie / 3 * 2 - this._widths.length;
        for (let ye = 0; ye < He; ye++) this._widths.push(ee)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.eT && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(ee, ie) {
        for (const He of ee) this._points.push(He);
        this._lazy || this.setPoints(this._points, ie)
      }
      dispose(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(ee, ie)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(ee) {
        this._uvs = ee instanceof Float32Array ? ee : new Float32Array(ee), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(ee) {
        this.material instanceof Py && this.material.setDefine("GREASED_LINE_USE_OFFSETS", ee?.length > 0), this._offsets = ee, this._offsetsBuffer ? this._offsetsBuffer.update(ee) : this._createOffsetsBuffer(ee)
      }
      get widths() {
        return this._widths
      }
      set widths(ee) {
        this._widths = ee, this._lazy || this._widthsBuffer && this._widthsBuffer.update(ee)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(ee) {
        this._colorPointers = ee, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(ee)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof Py) return this.material;
        const ee = this.material?.pluginManager?.getPlugin(dy.GREASED_LINE_MATERIAL_NAME);
        return ee || void 0
      }
      get points() {
        const ee = [];
        return Zy.b.DeepCopy(this._points, ee), ee
      }
      setPoints(ee, ie) {
        this._points = gy.ConvertPoints(ee, ie?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), ie?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, ie)
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
      serialize(ee) {
        super.serialize(ee), ee.type = this.getClassName(), ee.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = new ty.e;
        return ie.positions = this._vertexPositions, ie.indices = this._indices, ie.uvs = this._uvs, ee && (ie.normals = [], ty.e.ComputeNormals(this._vertexPositions, this._indices, ie.normals)), ie.applyToMesh(this, this._options.updatable), ie
      }
      _createOffsetsBuffer(ee) {
        const ie = this._scene.Nf(),
          He = new ve.b(ie, ee, this._updatable, 3);
        this.setVerticesBuffer(He.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = He
      }
    }
    class cy {
      constructor(ee, ie) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = ee, this.wasAddedByNoopNode = ie
      }
      getIndicesAccessor(ee, ie, He, ye, be) {
        return this._indicesAccessorMap.get(ee)?.get(ie)?.get(He)?.get(ye)?.get(be)
      }
      setIndicesAccessor(ee, ie, He, ye, be, Me) {
        let Ke = this._indicesAccessorMap.get(ee);
        Ke || (Ke = new Map, this._indicesAccessorMap.set(ee, Ke));
        let Ue = Ke.get(ie);
        Ue || (Ue = new Map, Ke.set(ie, Ue));
        let Fe = Ue.get(He);
        Fe || (Fe = new Map, Ue.set(He, Fe));
        let Je = Fe.get(ye);
        Je || (Je = new Map, Fe.set(ye, Je)), Je.set(be, Me)
      }
      pushExportedNode(ee) {
        this._exportedNodes.has(ee) || this._exportedNodes.add(ee)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(ee) {
        return this._vertexBufferViewMap.get(ee)
      }
      setVertexBufferView(ee, ie) {
        this._vertexBufferViewMap.set(ee, ie)
      }
      setRemappedBufferView(ee, ie, He) {
        this._remappedBufferView.set(ee, new Map), this._remappedBufferView.get(ee).set(ie, He)
      }
      getRemappedBufferView(ee, ie) {
        return this._remappedBufferView.get(ee)?.get(ie)
      }
      getVertexAccessor(ee, ie, He) {
        return this._vertexAccessorMap.get(ee)?.get(ie)?.get(He)
      }
      setVertexAccessor(ee, ie, He, ye) {
        let be = this._vertexAccessorMap.get(ee);
        be || (be = new Map, this._vertexAccessorMap.set(ee, be));
        let Me = be.get(ie);
        Me || (Me = new Map, be.set(ie, Me)), Me.set(He, ye)
      }
      hasVertexColorAlpha(ee) {
        return this._vertexMapColorAlpha.get(ee) || !1
      }
      setHasVertexColorAlpha(ee, ie) {
        return this._vertexMapColorAlpha.set(ee, ie)
      }
      getMesh(ee) {
        return this._meshMap.get(ee)
      }
      setMesh(ee, ie) {
        this._meshMap.set(ee, ie)
      }
      bindMorphDataToMesh(ee, ie) {
        const He = this._meshMorphTargetMap.get(ee) || [];
        this._meshMorphTargetMap.set(ee, He), -1 === He.indexOf(ie) && He.push(ie)
      }
      getMorphTargetsFromMesh(ee) {
        return this._meshMorphTargetMap.get(ee)
      }
    }
    class xy {
      _ApplyExtension(ee, ie, He, ye) {
        if (He >= ie.length) return Promise.resolve(ee);
        const be = ye(ie[He], ee);
        return be ? be.then((async ee => ee ? await this._ApplyExtension(ee, ie, He + 1, ye) : null)) : this._ApplyExtension(ee, ie, He + 1, ye)
      }
      _ApplyExtensions(ee, ie) {
        const He = [];
        for (const ye of xy._ExtensionNames) He.push(this._extensions[ye]);
        return this._ApplyExtension(ee, He, 0, ie)
      }
      _extensionsPostExportNodeAsync(ee, ie, He, ye, be) {
        return this._ApplyExtensions(ie, ((ie, Me) => ie.postExportNodeAsync && ie.postExportNodeAsync(ee, Me, He, ye, be, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(ee, ie, He) {
        return this._ApplyExtensions(ie, ((ie, ye) => ie.postExportMaterialAsync && ie.postExportMaterialAsync(ee, ye, He)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(ee, ie, He) {
        const ye = [];
        return await Promise.all(xy._ExtensionNames.map((async be => {
          const Me = this._extensions[be];
          if (Me.postExportMaterialAdditionalTexturesAsync) {
            const be = await Me.postExportMaterialAdditionalTexturesAsync(ee, ie, He);
            ye.push(...be)
          }
        }))), ye
      }
      _extensionsPostExportTextures(ee, ie, He) {
        for (const ye of xy._ExtensionNames) {
          const be = this._extensions[ye];
          be.postExportTexture && be.postExportTexture(ee, ie, He)
        }
      }
      _extensionsPostExportMeshPrimitive(ee) {
        for (const ie of xy._ExtensionNames) {
          const He = this._extensions[ie];
          He.postExportMeshPrimitive && He.postExportMeshPrimitive(ee, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const ee of xy._ExtensionNames) {
          const ie = this._extensions[ee];
          ie.preGenerateBinaryAsync && await ie.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(ee) {
        for (const ie of xy._ExtensionNames) {
          const He = this._extensions[ie];
          He.enabled && ee(He)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((ee => {
          var ie, He, ye;
          ee.wasUsed && ((ie = this._glTF).extensionsUsed || (ie.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(ee.name) && this._glTF.extensionsUsed.push(ee.name), ee.required && ((He = this._glTF).extensionsRequired || (He.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(ee.name) && this._glTF.extensionsRequired.push(ee.name)), (ye = this._glTF).extensions || (ye.extensions = {}), ee.onExporting && ee.onExporting())
        }))
      }
      _loadExtensions() {
        for (const ee of xy._ExtensionNames) {
          const ie = xy._ExtensionFactories[ee](this);
          this._extensions[ee] = ie
        }
      }
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te.b.LastCreatedScene,
          ie = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${fe.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new YH(this), this._extensions = {}, this._bufferManager = new by, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !ee) throw new Error("No scene available to export");
        this._babylonScene = ee, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: ee => ee?.YV?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...ie
        }, this._loadExtensions()
      }
      dispose() {
        for (const ee in this._extensions) {
          this._extensions[ee].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        xy.UnregisterExtension(ee) && be.Tools.Warn(`Extension with the name ${ee} already exists`), xy._ExtensionFactories[ee] = ie;
        const ye = He ?? 0;
        xy._ExtensionOrders[ee] = ye;
        let Me = xy._ExtensionNames.length;
        for (let be = 0; be < xy._ExtensionNames.length; be++) {
          const ee = xy._ExtensionNames[be];
          if (ye < xy._ExtensionOrders[ee]) {
            Me = be;
            break
          }
        }
        xy._ExtensionNames.splice(Me, 0, ee)
      }
      static UnregisterExtension(ee) {
        if (!xy._ExtensionFactories[ee]) return !1;
        delete xy._ExtensionFactories[ee], delete xy._ExtensionOrders[ee];
        const ie = xy._ExtensionNames.indexOf(ee);
        return -1 !== ie && xy._ExtensionNames.splice(ie, 1), !0
      }
      _generateJSON(ee, ie, He) {
        const ye = {
          byteLength: ee
        };
        return ye.byteLength && (this._glTF.buffers = [ye]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.yp = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (ye.uri = ie + ".bin"), He ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(ee) {
        const ie = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const He = this._generateJSON(ie.byteLength, ee, !0),
          ye = new Blob([ie], {
            type: "application/octet-stream"
          }),
          be = ee + ".gltf",
          Me = ee + ".bin",
          Ke = new Je;
        if (Ke.files[be] = He, Ke.files[Me] = ye, this._imageData)
          for (const Ue in this._imageData) Ke.files[Ue] = this._imageData[Ue];
        return Ke
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(ee) {
        const ie = ee % 4;
        return 0 === ie ? ie : 4 - ie
      }
      async generateGLBAsync(ee) {
        this._shouldUseGlb = !0;
        const ie = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const He = this._generateJSON(ie.byteLength),
          ye = ee + ".glb";
        let be, Me = He.length;
        if ("undefined" !== typeof TextEncoder) {
          be = (new TextEncoder).encode(He), Me = be.length
        }
        const Ke = this._getPadding(Me),
          Ue = this._getPadding(ie.byteLength),
          Fe = 28 + Me + Ke + ie.byteLength + Ue,
          oe = new Hy(Fe);
        if (oe.writeUInt32(1179937895), oe.writeUInt32(2), oe.writeUInt32(Fe), oe.writeUInt32(Me + Ke), oe.writeUInt32(1313821514), be) oe.writeTypedArray(be);
        else {
          const ee = "_".charCodeAt(0);
          for (let ie = 0; ie < Me; ++ie) {
            const ye = He.charCodeAt(ie);
            ye != He.codePointAt(ie) ? oe.writeUInt8(ee) : oe.writeUInt8(ye)
          }
        }
        for (let Je = 0; Je < Ke; ++Je) oe.writeUInt8(32);
        oe.writeUInt32(ie.byteLength + Ue), oe.writeUInt32(5130562), oe.writeTypedArray(ie);
        for (let Je = 0; Je < Ue; ++Je) oe.writeUInt8(0);
        const Re = new Je;
        return Re.files[ye] = new Blob([oe.getOutputData()], {
          type: "application/octet-stream"
        }), Re
      }
      _setNodeTransformation(ee, ie, He) {
        if (ie.getPivotPoint().equalsWithEpsilon(CH, cH.b) || be.Tools.Warn("Pivot points are not supported in the glTF serializer"), !ie.position.equalsWithEpsilon(CH, cH.b)) {
          const be = ye.TmpVectors.rf[0].jD(ie.position);
          He && sH(be), ee.translation = be.Qbe()
        }
        ie.wR.equalsWithEpsilon(uH, cH.b) || (ee.scale = ie.wR.Qbe());
        const Me = ie.rotationQuaternion?.clone() || ye.Quaternion.FromEulerAngles(ie.rotation.x, ie.rotation.y, ie.rotation.z);
        Me.equalsWithEpsilon(vH, cH.b) || (He && IH(Me), ee.rotation = Me.normalize().Qbe())
      }
      _setCameraTransformation(ee, ie, He) {
        const be = ye.TmpVectors.rf[0],
          Me = ye.TmpVectors.Quaternion[0],
          Ke = ie.getWorldMatrix();
        if (ie.parent) {
          const ee = ie.parent.getWorldMatrix().invertToRef(ye.TmpVectors.Matrix[0]);
          Ke.multiplyToRef(ee, ye.TmpVectors.Matrix[1]).decompose(void 0, Me, be)
        } else Ke.decompose(void 0, Me, be);
        be.equalsWithEpsilon(CH, cH.b) || (He && sH(be), ee.translation = be.Qbe()), He && IH(Me), this._babylonScene.useRightHandedSystem || hH(Me), Me.equalsWithEpsilon(vH, cH.b) || (ee.rotation = Me.Qbe())
      }
      _listAvailableCameras() {
        for (const ee of this._babylonScene.cameras) {
          const ie = {
            type: ee.mode === My.d.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (ee.name && (ie.name = ee.name), "perspective" === ie.type) ie.perspective = {
            aspectRatio: ee.Nf().getAspectRatio(ee),
            yfov: ee.fovMode === My.d.FOVMODE_VERTICAL_FIXED ? ee.fov : ee.fov * ee.Nf().getAspectRatio(ee),
            znear: ee.minZ,
            zfar: ee.maxZ
          };
          else if ("orthographic" === ie.type) {
            const He = ee.orthoLeft && ee.orthoRight ? .5 * (ee.orthoRight - ee.orthoLeft) : .5 * ee.Nf().getRenderWidth(),
              ye = ee.orthoBottom && ee.orthoTop ? .5 * (ee.orthoTop - ee.orthoBottom) : .5 * ee.Nf().getRenderHeight();
            ie.orthographic = {
              xmag: He,
              ymag: ye,
              znear: ee.minZ,
              zfar: ee.maxZ
            }
          }
          this._camerasMap.set(ee, ie)
        }
      }
      _exportAndAssignCameras() {
        const ee = Array.from(this._camerasMap.values());
        for (const ie of ee) {
          const ee = this._nodesCameraMap.get(ie);
          if (void 0 !== ee) {
            this._cameras.push(ie);
            for (const ie of ee) ie.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const ee of this._babylonScene.skeletons) {
          if (ee.bones.length <= 0) continue;
          const ie = {
            joints: []
          };
          this._skinMap.set(ee, ie)
        }
      }
      _exportAndAssignSkeletons(ee) {
        for (const He of this._babylonScene.skeletons) {
          if (He.bones.length <= 0) continue;
          const Me = this._skinMap.get(He);
          if (void 0 == Me) continue;
          const Ke = {};
          let Ue = -1;
          for (let ee = 0; ee < He.bones.length; ++ee) {
            const ie = He.bones[ee],
              ye = ie.getIndex() ?? ee; - 1 !== ye && (Ke[ye] = ie, ye > Ue && (Ue = ye))
          }
          const Fe = [];
          for (let He = 0; He <= Ue; ++He) {
            const Ue = Ke[He],
              Je = Ue.getTransformNode(),
              oe = Je ? this._nodeMap.get(Je) : void 0;
            if (void 0 === oe) {
              be.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            Me.joints.push(oe);
            const Re = Ue.getAbsoluteInverseBindMatrix().clone();
            ee.has(Je) && (ie = Re, xH.invertToRef(ye.TmpVectors.Matrix[0]).multiplyToRef(ie, ie).multiplyToRef(xH, ie)), Fe.push(Re)
          }
          const Je = this._nodesSkinMap.get(Me);
          if (Me.joints.length > 0 && void 0 !== Je) {
            const ee = new Float32Array(16 * Fe.length);
            Fe.forEach(((ie, He) => {
              ee.set(ie.m, 16 * He)
            }));
            const ie = this._bufferManager.createBufferView(ee);
            this._accessors.push(this._bufferManager.createAccessor(ie, "MAT4", 5126, Fe.length)), Me.inverseBindMatrices = this._accessors.length - 1, this._skins.push(Me);
            const He = this._skins.length - 1;
            for (const ye of Je) ye.skin = He
          }
        }
        var ie
      }
      async _exportSceneAsync() {
        const ee = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const ie = this._options.metadataSelector(this._babylonScene.metadata);
          ie && (ee.extras = ie)
        }
        const ie = new Array,
          He = new Array,
          ye = new Array,
          be = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let Me;
        if (be && !this._options.includeCoordinateSystemConversionNodes)
          for (const Je of this._babylonScene.animationGroups)
            for (const ee of Je.targetedAnimations) {
              const ie = ee.target;
              ie instanceof Re.b && !ie.parent && (Me ?? (Me = new Set)).add(ie)
            }
        for (const Je of this._babylonScene.rootNodes) {
          const ee = Je.animations,
            Ke = !!ee && ee.length > 0 || Me?.has(Je);
          be && !this._options.includeCoordinateSystemConversionNodes && LH(Je, this._babylonScene.useRightHandedSystem) && !Ke ? ye.push(...Je.getChildren()) : this._babylonScene.useRightHandedSystem ? ie.push(Je) : He.push(Je)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const Ke = new cy(!0, !1);
        ee.nodes.push(...await this._exportNodesAsync(He, Ke));
        const Ue = new cy(!1, !1);
        ee.nodes.push(...await this._exportNodesAsync(ie, Ue));
        const Fe = new cy(!1, !0);
        ee.nodes.push(...await this._exportNodesAsync(ye, Fe)), ee.nodes.length && this._scenes.push(ee), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(Ke.getNodesSet()), this._babylonScene.animationGroups.length && qy._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Ke.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(ee) {
        return this._nodeMap.get(ee)
      }
      _getAnimationIndex(ee) {
        return this._animationGroupMap.get(ee)
      }
      _getCameraIndex(ee) {
        const ie = this._camerasMap.get(ee);
        if (!ie) return;
        const He = this._cameras.indexOf(ie);
        return He >= 0 ? He : void 0
      }
      _getMaterialIndex(ee) {
        return this._materialMap.get(ee)
      }
      _getRootIndex(ee, ie) {
        switch (ee) {
          case "nodes":
            return this._getNodeIndex(ie);
          case "animations":
            return this._getAnimationIndex(ie);
          case "cameras":
            return this._getCameraIndex(ie);
          case "materials":
            return this._getMaterialIndex(ie);
          case "meshes": {
            const ee = this._getNodeIndex(ie);
            return void 0 === ee ? void 0 : this._nodes[ee]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(ie)?.index;
          case "images": {
            const ee = this._materialExporter.getTextureInfo(ie)?.index;
            if (void 0 === ee) return;
            const He = this._textures[ee];
            for (const ie of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const ee = He?.extensions?.[ie]?.source;
              if ("number" === typeof ee) return ee
            }
            return He?.source
          }
          case "samplers": {
            const ee = this._materialExporter.getTextureInfo(ie)?.index;
            return void 0 === ee ? void 0 : this._textures[ee]?.sampler
          }
          case "skins": {
            const ee = this._skinMap.get(ie),
              He = ee ? this._skins.indexOf(ee) : -1;
            return He >= 0 ? He : void 0
          }
          case "scenes":
            return ie === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(ee, ie, He) {
        const ye = this._nodes[ee];
        if (!ye) throw new Error(`Cannot write ${ie}: glTF node ${ee} does not exist.`);
        ye.extensions || (ye.extensions = {}), ye.extensions[ie] = He
      }
      _shouldExportNode(ee) {
        let ie = this._shouldExportNodeMap.get(ee);
        return void 0 === ie && (ie = this._options.shouldExportNode(ee), this._shouldExportNodeMap.set(ee, ie)), ie
      }
      async _exportNodesAsync(ee, ie) {
        const He = new Array;
        this._exportBuffers(ee, ie);
        for (const ye of ee) await this._exportNodeAsync(ye, He, ie);
        return He
      }
      _collectBuffers(ee, ie, He, ye, be) {
        if (this._shouldExportNode(ee) && ee instanceof ke.c && ee.geometry) {
          const Me = ee.geometry.getVertexBuffers();
          if (Me)
            for (const ye in Me) {
              if (!nH(ye)) continue;
              const Ke = Me[ye];
              be.setHasVertexColorAlpha(Ke, ee.hasVertexAlpha);
              const Ue = Ke._buffer,
                Fe = ie.get(Ue) || [];
              ie.set(Ue, Fe), -1 === Fe.indexOf(Ke) && Fe.push(Ke);
              const Je = He.get(Ke) || [];
              He.set(Ke, Je), -1 === Je.indexOf(ee) && Je.push(ee)
            }
          const Ke = ee.morphTargetManager;
          if (Ke)
            for (let ie = 0; ie < Ke.numTargets; ie++) {
              const He = Ke.getTarget(ie),
                be = ye.get(He) || [];
              ye.set(He, be), -1 === be.indexOf(ee) && be.push(ee)
            }
        }
        for (const Me of ee.getChildren()) this._collectBuffers(Me, ie, He, ye, be)
      }
      _exportBuffers(ee, ie) {
        const He = new Map,
          ye = new Map,
          be = new Map;
        for (const Ue of ee) this._collectBuffers(Ue, He, ye, be, ie);
        const Me = Array.from(He.keys());
        for (const Ue of Me) {
          const ee = Ue.getData();
          if (!ee) throw new Error("Buffer data is not available");
          const be = He.get(Ue);
          if (!be) continue;
          const Me = be[0].byteStride;
          if (be.some((ee => ee.byteStride !== Me))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const Ke = rH(ee).slice();
          for (const ie of be) {
            const ee = ye.get(ie),
              {
                byteOffset: He,
                byteStride: be,
                componentCount: Me,
                type: Ue,
                count: Fe,
                normalized: Je,
                kind: Re
              } = lH(ie, ee);
            switch (Re) {
              case oe.f.NormalKind:
              case oe.f.TangentKind:
                (0, VH.f)(Ke, He, be, Me, Ue, Fe, Je, (ee => {
                  const ie = Math.sqrt(ee[0] * ee[0] + ee[1] * ee[1] + ee[2] * ee[2]);
                  if (ie > 0) {
                    const He = 1 / ie;
                    ee[0] *= He, ee[1] *= He, ee[2] *= He
                  }
                }));
                break;
              case oe.f.ColorKind: {
                const ie = ee.filter((ee => ee.material instanceof Uy.StandardMaterial || null == ee.material)).length;
                if (0 == ie) break;
                if (ie != ee.length) {
                  we.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                Ue == oe.f.UNSIGNED_BYTE && we.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const ye = new pe.Color3,
                  Re = new pe.e,
                  ke = this._babylonScene.Nf().useExactSrgbConversions;
                (0, VH.f)(Ke, He, be, Me, Ue, Fe, Je, (ee => {
                  3 === ee.length ? (ye.MR(ee, 0), ye.toLinearSpaceToRef(ye, ke), ye.toArray(ee, 0)) : (Re.MR(ee, 0), Re.toLinearSpaceToRef(Re, ke), Re.toArray(ee, 0))
                }))
              }
            }
          }
          if (ie.convertToRightHanded) {
            for (const ee of be) {
              const ie = ye.get(ee),
                {
                  byteOffset: He,
                  byteStride: be,
                  componentCount: Me,
                  type: Ue,
                  count: Fe,
                  normalized: Je,
                  kind: Re
                } = lH(ee, ie);
              switch (Re) {
                case oe.f.PositionKind:
                case oe.f.NormalKind:
                case oe.f.TangentKind:
                  (0, VH.f)(Ke, He, be, Me, Ue, Fe, Je, (ee => {
                    ee[0] = -ee[0]
                  }))
              }
            }
            ie.convertedToRightHandedBuffers.set(Ue, Ke)
          }
          const Fe = this._bufferManager.createBufferView(Ke, Me);
          ie.setVertexBufferView(Ue, Fe);
          const Je = new Map;
          for (const ie of be) {
            const ee = ye.get(ie),
              {
                kind: He,
                totalVertices: be
              } = lH(ie, ee);
            switch (He) {
              case oe.f.MatricesIndicesKind:
              case oe.f.MatricesIndicesExtraKind:
                if (ie.type == oe.f.FLOAT) {
                  const ee = ie.getFloatData(be);
                  null !== ee && Je.set(ie, ee)
                }
            }
          }
          0 !== Je.size && we.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const Re = Array.from(Je.keys());
          for (const He of Re) {
            const ee = Je.get(He);
            if (!ee) continue;
            const ye = ee.some((ee => ee >= 256)),
              be = new(ye ? Uint16Array : Uint8Array)(ee.length);
            for (let ie = 0; ie < ee.length; ie++) be[ie] = ee[ie];
            const Me = this._bufferManager.createBufferView(be, 4 * (ye ? 2 : 1));
            ie.setRemappedBufferView(Ue, He, Me)
          }
        }
        const Ke = Array.from(be.keys());
        for (const Ue of Ke) {
          const ee = be.get(Ue);
          if (!ee) continue;
          const He = fy(Ue, ee[0], this._bufferManager, this._bufferViews, this._accessors, ie.convertToRightHanded);
          for (const ye of ee) ie.bindMorphDataToMesh(ye, He)
        }
      }
      async _exportNodeAsync(ee, ie, He) {
        let ye = this._nodeMap.get(ee);
        if (void 0 !== ye) return void(ie.includes(ye) || ie.push(ye));
        const be = await this._createNodeAsync(ee, He);
        if (be) {
          ye = this._nodes.length, this._nodes.push(be), this._nodeMap.set(ee, ye), He.pushExportedNode(ee), ie.push(ye);
          const Me = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            Ke = [];
          this._babylonScene.animationGroups.length || (qy._CreateMorphTargetAnimationFromMorphTargetAnimations(ee, Me, Ke, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, He.convertToRightHanded, this._options.shouldExportAnimation), ee.animations.length && qy._CreateNodeAnimationFromNodeAnimations(ee, Me, Ke, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, He.convertToRightHanded, this._options.shouldExportAnimation)), Me.channels.length && Me.samplers.length && this._animations.push(Me), Ke.forEach((ee => {
            ee.channels.length && ee.samplers.length && this._animations.push(ee)
          }))
        }
        const Me = be ? [] : ie;
        for (const Ke of ee.getChildren()) await this._exportNodeAsync(Ke, Me, He);
        be && Me.length && (be.children = Me)
      }
      async _createNodeAsync(ee, ie) {
        if (!this._shouldExportNode(ee)) return null;
        const He = {};
        if (ee.name && (He.name = ee.name), ee.metadata) {
          const ie = this._options.metadataSelector(ee.metadata);
          ie && (He.extras = ie)
        }
        if (ee instanceof Re.b && (this._setNodeTransformation(He, ee, ie.convertToRightHanded), ee instanceof ke.c)) {
          const ye = ee instanceof qe.d ? ee.jMe : ee;
          if (ye.pW && ye.pW.length > 0 && (He.mesh = await this._exportMeshAsync(ye, ie)), ee.skeleton) {
            const ie = this._skinMap.get(ee.skeleton);
            void 0 !== ie && (void 0 === this._nodesSkinMap.get(ie) && this._nodesSkinMap.set(ie, []), this._nodesSkinMap.get(ie)?.push(He))
          }
        }
        if (ee instanceof aH.c) {
          const ye = this._camerasMap.get(ee);
          if (ye) {
            void 0 === this._nodesCameraMap.get(ye) && this._nodesCameraMap.set(ye, []), this._setCameraTransformation(He, ee, ie.convertToRightHanded);
            const be = ee.parent;
            if (null !== be && GH(ee, be)) {
              const ee = this._nodeMap.get(be);
              if (void 0 !== ee) {
                const ie = this._nodes[ee];
                return NH(He, ie), this._nodesCameraMap.get(ye)?.push(ie), null
              }
            }
            this._nodesCameraMap.get(ye)?.push(He)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", He, ee, this._nodeMap, ie.convertToRightHanded) ? He : (we.e.Warn(`Not exporting node ${ee.name}`), null)
      }
      _exportIndices(ee, ie, He, ye, be, Ke, Ue, Fe, Je) {
        let oe = null;
        Je.mode = function(ee) {
          switch (ee) {
            case Me.e.TriangleFillMode:
              return 4;
            case Me.e.TriangleStripDrawMode:
              return 5;
            case Me.e.TriangleFanDrawMode:
              return 6;
            case Me.e.PointListDrawMode:
            case Me.e.PointFillMode:
              return 0;
            case Me.e.LineLoopDrawMode:
              return 2;
            case Me.e.LineListDrawMode:
              return 1;
            case Me.e.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${ee}`)
        }(Ke);
        const Re = Ue !== Me.e.CounterClockWiseSideOrientation && function(ee) {
          switch (ee) {
            case Me.e.TriangleFillMode:
            case Me.e.TriangleStripDrawMode:
            case Me.e.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(Ke);
        if (Re) {
          if (Ke === Me.e.TriangleStripDrawMode || Ke === Me.e.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const Ue = ie ? new Uint32Array(ye) : new Uint16Array(ye);
          if (ee)
            for (let ie = 0; ie + 2 < ye; ie += 3) Ue[ie] = ee[He + ie] + be, Ue[ie + 1] = ee[He + ie + 2] + be, Ue[ie + 2] = ee[He + ie + 1] + be;
          else
            for (let ee = 0; ee + 2 < ye; ee += 3) Ue[ee] = ee, Ue[ee + 1] = ee + 2, Ue[ee + 2] = ee + 1;
          oe = Ue
        } else if (ee && 0 !== be) {
          const Me = ie ? new Uint32Array(ye) : new Uint16Array(ye);
          for (let ie = 0; ie < ye; ie++) Me[ie] = ee[He + ie] + be;
          oe = Me
        } else ee && (oe = function(ee, ie, He, ye) {
          let be = ee;
          return 0 === ie && He === ee.length || (be = Array.isArray(ee) ? ee.slice(ie, ie + He) : ee.subarray(ie, ie + He)), be instanceof Int32Array ? new Uint32Array(be.buffer, be.byteOffset, be.length) : Array.isArray(be) ? ye ? new Uint32Array(be) : new Uint16Array(be) : be
        }(ee, He, ye, ie));
        if (oe) {
          let Me = Fe.getIndicesAccessor(ee, He, ye, be, Re);
          if (void 0 === Me) {
            const Ke = this._bufferManager.createBufferView(oe),
              Ue = ie ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(Ke, "SCALAR", Ue, ye, 0)), Me = this._accessors.length - 1, Fe.setIndicesAccessor(ee, He, ye, be, Re, Me)
          }
          Je.indices = Me
        }
      }
      _exportVertexBuffer(ee, ie, He, ye, be, Me) {
        const Ke = ee.getKind();
        if (!nH(Ke)) return;
        if (Ke.startsWith("uv") && !this._options.exportUnusedUVs && (!ie || !this._materialNeedsUVsSet.has(ie))) return;
        let Ue = be.getVertexAccessor(ee, He, ye);
        if (void 0 === Ue) {
          const ie = be.convertedToRightHandedBuffers.get(ee._buffer) || ee._buffer.getData(),
            Me = Ke === oe.f.PositionKind ? function(ee, ie, He, ye) {
              const {
                byteOffset: be,
                byteStride: Me,
                type: Ke,
                normalized: Ue
              } = ie, Fe = ie.getSize(), Je = new Array(Fe).fill(1 / 0), oe = new Array(Fe).fill(-1 / 0);
              return (0, VH.f)(ee, be + He * Me, Me, Fe, Ke, ye * Fe, Ue, (ee => {
                for (let ie = 0; ie < Fe; ie++) Je[ie] = Math.min(Je[ie], ee[ie]), oe[ie] = Math.max(oe[ie], ee[ie])
              })), {
                min: Je,
                max: oe
              }
            }(ie, ee, He, ye) : void 0,
            Fe = (Ke === oe.f.MatricesIndicesKind || Ke === oe.f.MatricesIndicesExtraKind) && ee.type === oe.f.FLOAT,
            Je = Fe ? oe.f.UNSIGNED_BYTE : ee.type,
            Re = Fe ? void 0 : ee.normalized,
            ke = Fe ? be.getRemappedBufferView(ee._buffer, ee) : be.getVertexBufferView(ee._buffer),
            qe = ee.byteOffset + He * ee.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(ke, function(ee, ie) {
            if (ee == oe.f.ColorKind) return ie ? "VEC4" : "VEC3";
            switch (ee) {
              case oe.f.PositionKind:
              case oe.f.NormalKind:
                return "VEC3";
              case oe.f.TangentKind:
              case oe.f.MatricesIndicesKind:
              case oe.f.MatricesIndicesExtraKind:
              case oe.f.MatricesWeightsKind:
              case oe.f.MatricesWeightsExtraKind:
                return "VEC4";
              case oe.f.UVKind:
              case oe.f.UV2Kind:
              case oe.f.UV3Kind:
              case oe.f.UV4Kind:
              case oe.f.UV5Kind:
              case oe.f.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${ee}`)
          }(Ke, be.hasVertexColorAlpha(ee)), Je, ye, qe, Me, Re)), Ue = this._accessors.length - 1, be.setVertexAccessor(ee, He, ye, Ue)
        }
        Me.attributes[function(ee) {
          switch (ee) {
            case oe.f.PositionKind:
              return "POSITION";
            case oe.f.NormalKind:
              return "NORMAL";
            case oe.f.TangentKind:
              return "TANGENT";
            case oe.f.ColorKind:
              return "COLOR_0";
            case oe.f.UVKind:
              return "TEXCOORD_0";
            case oe.f.UV2Kind:
              return "TEXCOORD_1";
            case oe.f.UV3Kind:
              return "TEXCOORD_2";
            case oe.f.UV4Kind:
              return "TEXCOORD_3";
            case oe.f.UV5Kind:
              return "TEXCOORD_4";
            case oe.f.UV6Kind:
              return "TEXCOORD_5";
            case oe.f.MatricesIndicesKind:
              return "JOINTS_0";
            case oe.f.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case oe.f.MatricesWeightsKind:
              return "WEIGHTS_0";
            case oe.f.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${ee}`)
        }(Ke)] = Ue
      }
      async _exportMaterialAsync(ee, ie, He, ye) {
        let be = this._materialMap.get(ee);
        if (void 0 === be) {
          const ye = ie && Object.keys(ie).some((ee => ee.startsWith("uv")));
          if ((ee = ee instanceof Ky.e ? ee.gie[He.materialIndex] : ee) instanceof di) be = await this._materialExporter.exportPBRMaterialAsync(ee, ye);
          else if (ee instanceof Uy.StandardMaterial) be = await this._materialExporter.exportStandardMaterialAsync(ee, ye);
          else {
            if (!(ee instanceof eH)) return void we.e.Warn(`Unsupported material '${ee.name}' with type ${ee.getClassName()}`);
            be = await this._materialExporter.exportOpenPBRMaterialAsync(ee, ye)
          }
          this._materialMap.set(ee, be)
        }
        ye.material = be
      }
      async _exportMeshAsync(ee, ie) {
        let He = ie.getMesh(ee);
        if (void 0 !== He) return He;
        const ye = {
          primitives: []
        };
        He = this._meshes.length, this._meshes.push(ye), ie.setMesh(ee, He);
        const be = ee.isUnIndexed ? null : ee.eMe(),
          Ke = ee.geometry?.getVertexBuffers(),
          Ue = ie.getMorphTargetsFromMesh(ee),
          Fe = ee instanceof Ty.d,
          Je = ee instanceof ay,
          oe = ee.pW;
        if (Ke && oe && oe.length > 0)
          for (const Re of oe) {
            const He = {
                attributes: {}
              },
              oe = Re.iT() || this._babylonScene.defaultMaterial;
            if (Je) {
              const ie = {
                  name: oe.name
                },
                ye = ee,
                be = pe.Color3.White(),
                Me = ye.material?.alpha ?? 1,
                Ke = ye.greasedLineMaterial?.color ?? be;
              (!Ke.equalsWithEpsilon(be, cH.b) || Me < 1) && (ie.pbrMetallicRoughness = {
                baseColorFactor: [...Ke.Qbe(), Me]
              }), this._materials.push(ie), He.material = this._materials.length - 1
            } else if (Fe) {
              const ie = {
                  name: oe.name
                },
                ye = ee;
              (!ye.color.equalsWithEpsilon(pe.Color3.White(), cH.b) || ye.alpha < 1) && (ie.pbrMetallicRoughness = {
                baseColorFactor: [...ye.color.Qbe(), ye.alpha]
              }), this._materials.push(ie), He.material = this._materials.length - 1
            } else await this._exportMaterialAsync(oe, Ke, Re, He);
            const ke = Fe || Je ? Me.e.LineListDrawMode : ee.overrideRenderingFillMode ?? oe.fillMode;
            let qe = oe._getEffectiveOrientation(ee);
            ie.wasAddedByNoopNode && !ee.Xx().useRightHandedSystem && (qe = qe === Me.e.ClockWiseSideOrientation ? Me.e.CounterClockWiseSideOrientation : Me.e.ClockWiseSideOrientation), this._exportIndices(be, be ? (0, VH.b)(be, Re.indexCount, Re.indexStart, Re.verticesStart) : Re.verticesCount > 65535, be ? Re.indexStart : Re.verticesStart, be ? Re.indexCount : Re.verticesCount, -Re.verticesStart, ke, qe, ie, He);
            for (const ee of Object.values(Ke)) this._exportVertexBuffer(ee, oe, Re.verticesStart, Re.verticesCount, ie, He);
            if (Ue) {
              He.targets = [];
              for (const ee of Ue) He.targets.push(ee.attributes)
            }
            ye.primitives.push(He), this._extensionsPostExportMeshPrimitive(He)
          }
        if (Ue) {
          ye.weights = [], ye.extras || (ye.extras = {}), ye.extras.targetNames = [];
          for (const ee of Ue) ye.weights.push(ee.influence), ye.extras.targetNames.push(ee.name)
        }
        return He
      }
    }
    xy._ExtensionNames = new Array, xy._ExtensionFactories = {}, xy._ExtensionOrders = {};
    class Ly {
      static async GLTFAsync(ee, ie, He) {
        He && He.exportWithoutWaitingForScene || await ee.whenReadyAsync();
        const ye = new xy(ee, He),
          be = await ye.generateGLTFAsync(ie.replace(/\.[^/.]+$/, ""));
        return ye.dispose(), be
      }
      static async GLBAsync(ee, ie, He) {
        He && He.exportWithoutWaitingForScene || await ee.whenReadyAsync();
        const ye = new xy(ee, He),
          be = await ye.generateGLBAsync(ie.replace(/\.[^/.]+$/, ""));
        return ye.dispose(), be
      }
    }
    const Cy = "EXT_mesh_gpu_instancing";

    function vy(ee, ie) {
      const He = new Float32Array(3 * ie);
      for (let ye = 0; ye < ie; ye++) He[3 * ye + 0] = ee[4 * ye + 0], He[3 * ye + 1] = ee[4 * ye + 1], He[3 * ye + 2] = ee[4 * ye + 2];
      return He
    }
    class uy {
      constructor(ee) {
        this.name = Cy, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = ee
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(ee, ie, He, ye, be, Me) {
        return await new Promise((ee => {
          if (ie && He instanceof Wy.b && He.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const ee = Ce.p.Zero(),
              ye = Ce.f.Identity(),
              Ke = Ce.p.One(),
              Ue = He.thinInstanceGetWorldMatrices(),
              Fe = Ce.j.rf[2],
              Je = Ce.j.Quaternion[1],
              oe = Ce.j.rf[3];
            let Re = !1,
              ke = !1,
              qe = !1;
            const fe = new Float32Array(3 * He.Hie),
              Te = new Float32Array(4 * He.Hie),
              pe = new Float32Array(3 * He.Hie);
            let Xe = 0;
            for (const ie of Ue) ie.decompose(oe, Je, Fe), be && (sH(Fe), IH(Je)), fe.set(Fe.Qbe(), 3 * Xe), Te.set(Je.normalize().Qbe(), 4 * Xe), pe.set(oe.Qbe(), 3 * Xe), Re = Re || !Fe.equalsWithEpsilon(ee), ke = ke || !Je.equalsWithEpsilon(ye), qe = qe || !oe.equalsWithEpsilon(Ke), Xe++;
            const ze = {
              attributes: {}
            };
            Re && (ze.attributes.TRANSLATION = this._buildAccessor(fe, "VEC3", He.Hie, Me)), ke && (ze.attributes.ROTATION = this._buildAccessor(Te, "VEC4", He.Hie, Me)), qe && (ze.attributes.SCALE = this._buildAccessor(pe, "VEC3", He.Hie, Me));
            let Be = He._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (Be) {
              const ee = He.Hie,
                ie = "VEC3";
              He.hasVertexAlpha && Be.length === 4 * ee ? (this._instanceColorWarned || (we.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Be = vy(Be, ee)) : Be.length === 4 * ee && (Be = vy(Be, ee)), Be.length === 3 * ee && (ze.attributes._COLOR_0 = this._buildAccessor(Be, ie, ee, Me))
            }
            ie.extensions = ie.extensions || {}, ie.extensions[Cy] = ze
          }
          ee(ie)
        }))
      }
      _buildAccessor(ee, ie, He, ye) {
        const be = ye.createBufferView(ee),
          Me = ye.createAccessor(be, ie, 5126, He);
        return this._exporter._accessors.push(Me), this._exporter._accessors.length - 1
      }
    }
    let my = !1;

    function ly() {
      my || (my = !0, xy.RegisterExtension(Cy, (ee => new uy(ee))))
    }
    He(41601);
    ly();
    var Sy = He(45055);

    function ny(ee, ie, He, ye) {
      const be = ee;
      let Me = null,
        Ke = null,
        Ue = null,
        Fe = null;
      const Je = {},
        oe = ie.find((ee => "POSITION" === ee.dracoName));
      if (!oe) throw new Error("Draco: Missing position attribute for encoding.");
      if (!He) {
        const ee = oe.data.length / oe.size;
        He = new(ee > 65535 ? Uint32Array : Uint16Array)(ee);
        for (let ie = 0; ie < ee; ie++) He[ie] = ie
      }
      try {
        Me = new be.Encoder, Ke = new be.MeshBuilder, Ue = new be.Mesh, Ke.AddFacesToMesh(Ue, He.length / 3, He);
        const ee = new Map([
          [Float32Array, (ee, ie, He, ye, be, Me) => ee.AddFloatAttribute(ie, He, ye, be, Me)],
          [Uint32Array, (ee, ie, He, ye, be, Me) => ee.AddUInt32Attribute(ie, He, ye, be, Me)],
          [Uint16Array, (ee, ie, He, ye, be, Me) => ee.AddUInt16Attribute(ie, He, ye, be, Me)],
          [Uint8Array, (ee, ie, He, ye, be, Me) => ee.AddUInt8Attribute(ie, He, ye, be, Me)],
          [Int32Array, (ee, ie, He, ye, be, Me) => ee.AddInt32Attribute(ie, He, ye, be, Me)],
          [Int16Array, (ee, ie, He, ye, be, Me) => ee.AddInt16Attribute(ie, He, ye, be, Me)],
          [Int8Array, (ee, ie, He, ye, be, Me) => ee.AddInt8Attribute(ie, He, ye, be, Me)]
        ]);
        for (const He of ie) {
          He.data instanceof Uint8ClampedArray && (He.data = new Uint8Array(He.data));
          const ie = ee.get(He.data.constructor),
            Fe = He.data.length / He.size;
          Je[He.kind] = ie(Ke, Ue, be[He.dracoName], Fe, He.size, He.data), ye.quantizationBits && ye.quantizationBits[He.dracoName] && Me.SetAttributeQuantization(be[He.dracoName], ye.quantizationBits[He.dracoName])
        }
        ye.method && Me.SetEncodingMethod(be[ye.method]), void 0 !== ye.encodeSpeed && void 0 !== ye.decodeSpeed && Me.SetSpeedOptions(ye.encodeSpeed, ye.decodeSpeed), Fe = new be.DracoInt8Array;
        const oe = Me.EncodeMeshToDracoBuffer(Ue, Fe);
        if (oe <= 0) throw new Error("Draco: Failed to encode.");
        const Re = new Int8Array(oe);
        for (let ie = 0; ie < oe; ie++) Re[ie] = Fe.GetValue(ie);
        return {
          data: Re,
          attributeIds: Je
        }
      } finally {
        Ue && be.destroy(Ue), Ke && be.destroy(Ke), Me && be.destroy(Me), Fe && be.destroy(Fe)
      }
    }

    function jy() {
      let ee;
      onmessage = ie => {
        const He = ie.data;
        switch (He.id) {
          case "init": {
            He.url && importScripts(He.url);
            const ie = He.wasmBinary ? {
              wasmBinary: He.wasmBinary
            } : {};
            ee = DracoEncoderModule(ie), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!ee) throw new Error("Draco: Encoder module is not available.");
            ee.then((ee => {
              const ie = ny(ee, He.attributes, He.indices, He.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: ie
              }, ie ? [ie.data.buffer] : void 0)
            })).catch((ee => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: ee.message
              })
            }))
        }
      }
    }
    class sy {
      constructor(ee) {
        if (ee.workerPool) return void(this._workerPoolPromise = Promise.resolve(ee.workerPool));
        const ie = ee.wasmBinary,
          He = ee.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          ye = He && "function" === typeof Worker && "function" === typeof URL,
          be = ye || !ee.jsModule,
          Me = ee.wasmUrl && ee.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: be ? ti.h.GetBabylonScriptURL(ee.wasmUrl, !0) : "",
            wasmBinaryPromise: ie ? Promise.resolve(ie) : ti.h.LoadFileAsync(ti.h.GetBabylonScriptURL(ee.wasmBinaryUrl, !0))
          } : {
            url: be ? ti.h.GetBabylonScriptURL(ee.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        ye ? this._workerPoolPromise = Me.wasmBinaryPromise.then((ee => {
          const ie = this._getWorkerContent(),
            ye = URL.createObjectURL(new Blob([ie], {
              type: "application/javascript"
            }));
          return new Sy.c(He, (() => async function(ee, ie, He) {
            return await new Promise(((ye, be) => {
              const Me = ie => {
                  ee.removeEventListener("error", Me), ee.removeEventListener("message", Ke), be(ie)
                },
                Ke = ie => {
                  "initDone" === ie.data.id && (ee.removeEventListener("error", Me), ee.removeEventListener("message", Ke), ye(ee))
                };
              if (ee.addEventListener("error", Me), ee.addEventListener("message", Ke), ie) {
                const ye = ie.slice(0);
                ee.postMessage({
                  id: "init",
                  url: He,
                  wasmBinary: ye
                }, [ye])
              } else ee.postMessage({
                id: "init",
                url: He
              })
            }))
          }(new Worker(ye), ee, Me.url)))
        })) : this._modulePromise = Me.wasmBinaryPromise.then((async ie => {
          if (!this._isModuleAvailable() && !ee.jsModule) {
            if (!Me.url) throw new Error("Draco codec module is not available");
            await ti.h.LoadBabylonScriptAsync(Me.url)
          }
          return await this._createModuleAsync(ie, ee.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((ee => {
          ee.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function Iy() {
      const ee = ee => !!ee && "object" === typeof ee;
      for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
      return He.reduce(((ie, He) => {
        const ye = Object.keys(He);
        for (const be of ye) {
          const ye = ie[be],
            Me = He[be];
          Array.isArray(ye) && Array.isArray(Me) ? ie[be] = ye.concat(Me) : ee(ye) && ee(Me) ? ie[be] = Iy(ye, Me) : ie[be] = Me
        }
        return ie
      }), {})
    }

    function hy(ee) {
      return ee === ve.h.PositionKind ? "POSITION" : ee === ve.h.NormalKind ? "NORMAL" : ee === ve.h.ColorKind ? "COLOR" : ee.startsWith(ve.h.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const Ny = {
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
    class Gy extends sy {
      static get DefaultAvailable() {
        return !!((ee = Gy.DefaultConfiguration).wasmUrl && (ee.wasmBinary || ee.wasmBinaryUrl) && "object" === typeof WebAssembly || ee.fallbackUrl);
        var ee
      }
      static get Default() {
        return Gy._Default ?? (Gy._Default = new Gy), Gy._Default
      }
      static ResetDefault(ee) {
        Gy._Default && (ee || Gy._Default.dispose(), Gy._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(ee, ie) {
        return {
          module: await (ie || DracoEncoderModule)({
            wasmBinary: ee
          })
        }
      }
      _getWorkerContent() {
        return `${ny}(${jy})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gy.DefaultConfiguration)
      }
      async _encodeAsync(ee, ie, He) {
        const ye = He ? Iy(Ny, He) : Ny;
        if (this._workerPoolPromise) {
          const He = await this._workerPoolPromise;
          return await new Promise(((be, Me) => {
            He.push(((He, Ke) => {
              const Ue = ee => {
                  He.removeEventListener("error", Ue), He.removeEventListener("message", Fe), Me(ee), Ke()
                },
                Fe = ee => {
                  "encodeMeshSuccess" === ee.data.id ? (He.removeEventListener("error", Ue), He.removeEventListener("message", Fe), be(ee.data.encodedMeshData), Ke()) : "encodeMeshError" === ee.data.id && (He.removeEventListener("error", Ue), He.removeEventListener("message", Fe), Me(new Error(ee.data.errorMessage)), Ke())
                };
              He.addEventListener("error", Ue), He.addEventListener("message", Fe);
              const Je = [];
              for (const ie of ee) Je.push(ie.data.buffer);
              ie && Je.push(ie.buffer), He.postMessage({
                id: "encodeMesh",
                attributes: ee,
                indices: ie,
                options: ye
              }, Je)
            }))
          }))
        }
        if (this._modulePromise) {
          return ny((await this._modulePromise).module, ee, ie, ye)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(ee, ie) {
        if (0 == ee.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        ee instanceof Wy.b && ee.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === ie?.method && (we.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), ie.method = "MESH_SEQUENTIAL_ENCODING");
        const He = function(ee) {
            let ie = ee.eMe(void 0, !0);
            return !ie || ie instanceof Uint32Array || ie instanceof Uint16Array || (ie = ((0, VH.b)(ie, ie.length) ? Uint32Array : Uint16Array).from(ie)), ie
          }(ee),
          ye = function(ee, ie) {
            const He = [];
            for (const ye of ee.getVerticesDataKinds()) {
              if (ie?.includes(ye)) {
                if (ye === ve.h.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const be = ee.getVertexBuffer(ye),
                Me = be.getSize(),
                Ke = (0, VH.s)(be.getData(), Me, be.type, be.byteOffset, be.byteStride, ee.getTotalVertices(), !0);
              He.push({
                kind: ye,
                dracoName: hy(ye),
                size: Me,
                data: Ke
              })
            }
            return He
          }(ee, ie?.excludedAttributes);
        return await this._encodeAsync(ye, He, ie)
      }
    }
    Gy.DefaultConfiguration = {
      wasmUrl: `${ti.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${ti.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${ti.h._DefaultCdnUrl}/draco_encoder.js`
    }, Gy._Default = null;
    const ry = "KHR_draco_mesh_compression";
    class Qy {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(ee) {
        this.name = ry, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === ee.options.meshCompressionMethod && Gy.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(ee, ie, He) {
        if (!this.enabled) return;
        if (4 !== ee.mode && 5 !== ee.mode) return void we.e.Warn("Cannot compress primitive with mode " + ee.mode + ".");
        const ye = [],
          be = [];
        let Me = null;
        if (void 0 !== ee.indices) {
          const Ke = He[ee.indices],
            Ue = ie.getBufferView(Ke);
          Me = ie.getData(Ue).slice(), ye.push(Ue), be.push(Ke)
        }
        const Ke = [];
        for (const [oe, Re] of Object.entries(ee.attributes)) {
          const ee = He[Re],
            Me = ie.getBufferView(ee),
            Fe = SH(ee.type),
            Je = (0, VH.s)(ie.getData(Me), Fe, ee.componentType, ee.byteOffset || 0, Me.byteStride || (0, VH.o)(ee.componentType) * Fe, ee.count, !0);
          Ke.push({
            kind: oe,
            dracoName: (Ue = oe, "POSITION" === Ue ? "POSITION" : "NORMAL" === Ue ? "NORMAL" : Ue.startsWith("COLOR") ? "COLOR" : Ue.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: SH(ee.type),
            data: Je
          }), ye.push(Me), be.push(ee)
        }
        var Ue;
        const Fe = {
            method: ee.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          Je = Gy.Default._encodeAsync(Ke, Me, Fe).then((He => {
            const Me = {
                bufferView: -1,
                attributes: He.attributeIds
              },
              Ke = ie.createBufferView(He.data);
            ie.setBufferView(Me, Ke);
            for (const ee of ye) this._bufferViewsUsed.add(ee);
            for (const ee of be) this._accessorsUsed.add(ee);
            ee.extensions || (ee.extensions = {}), ee.extensions[ry] = Me
          })).catch((ee => {
            we.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + ee.message)
          }));
        this._encodePromises.push(Je), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(ee) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((ie => {
          ee.getPropertiesWithBufferView(ie).every((ee => this._accessorsUsed.has(ee))) && ee.removeBufferView(ie)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let eb = !1;

    function ib() {
      eb || (eb = !0, xy.RegisterExtension(ry, (ee => new Qy(ee))))
    }
    ib();
    var Hb = He(44762);
    const yb = "KHR_lights_punctual",
      bb = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      Mb = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      Kb = Ce.p.Backward();
    class Ub {
      constructor(ee) {
        this.name = yb, this.enabled = !0, this.required = !1, this._exporter = ee
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[yb] = this._lights
      }
      async postExportNodeAsync(ee, ie, He, ye, be) {
        return await new Promise((Me => {
          if (!(He instanceof ky.e)) return void Me(ie);
          const Ke = He.getTypeID() == ky.e.LIGHTTYPEID_POINTLIGHT ? "point" : He.getTypeID() == ky.e.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : He.getTypeID() == ky.e.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!Ke || !(He instanceof Hb.c)) return we.e.Warn(`${ee}: Light ${He.name} is not supported in ${yb}`), void Me(ie);
          if (He.falloffType !== ky.e.FALLOFF_GLTF && we.e.Warn(`${ee}: Light falloff for ${He.name} does not match the ${yb} specification!`), !He.position.wFe(0, 0, 0)) {
            const ee = Ce.j.rf[0].jD(He.position);
            be && sH(ee), ie.translation = ee.Qbe()
          }
          if ("point" !== Ke) {
            const ee = He.direction.normalizeToRef(Ce.j.rf[0]);
            be && sH(ee);
            const ye = Ce.f.FromUnitVectorsToRef(Kb, ee, Ce.j.Quaternion[0]);
            Ce.f.IsIdentity(ye) || (ie.rotation = ye.Qbe())
          }
          const Ue = {
            type: Ke,
            name: He.name,
            color: He.diffuse.Qbe(),
            intensity: He.intensity,
            range: He.range
          };
          if (QH(Ue, bb), "spot" === Ke) {
            const ee = He;
            Ue.spot = {
              innerConeAngle: ee.innerAngle / 2,
              outerConeAngle: ee.angle / 2
            }, QH(Ue.spot, Mb)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Ue);
          const Fe = {
              light: this._lights.lights.length - 1
            },
            Je = He.parent;
          if (Je && GH(He, Je)) {
            const ee = ye.get(Je);
            if (ee) {
              const He = this._exporter._nodes[ee];
              return NH(ie, He), He.extensions || (He.extensions = {}), He.extensions[yb] = Fe, void Me(null)
            }
          }
          ie.extensions || (ie.extensions = {}), ie.extensions[yb] = Fe, Me(ie)
        }))
      }
    }
    let Fb = !1;

    function Jb() {
      Fb || (Fb = !0, xy.RegisterExtension(yb, (ee => new Ub(ee))))
    }
    Jb();
    const ob = "KHR_interactivity";
    class Rb {
      constructor(ee) {
        this._exporter = ee, this.name = ob, this.enabled = !!ee.options.khrInteractivity, this.required = ee.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var ee, ie, He;
        const ye = this._exporter.options.khrInteractivity;
        if (!ye) return;
        const be = ye.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: ee => this._exporter._getNodeIndex(ee),
          getAnimationIndex: ee => this._exporter._getAnimationIndex(ee),
          getCameraIndex: ee => this._exporter._getCameraIndex(ee),
          getMaterialIndex: ee => this._exporter._getMaterialIndex(ee),
          getRootIndex: (ee, ie) => this._exporter._getRootIndex(ee, ie),
          setNodeExtension: (ee, ie, He) => this._exporter._setNodeExtension(ee, ie, He)
        });
        this._exporter._glTF.extensions[ob] = be;
        for (const Me of ye.additionalExtensionsUsed)(ee = this._exporter._glTF).extensionsUsed || (ee.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Me) && this._exporter._glTF.extensionsUsed.push(Me);
        for (const Me of ye.additionalExtensionsRequired)(ie = this._exporter._glTF).extensionsUsed || (ie.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Me) && this._exporter._glTF.extensionsUsed.push(Me), (He = this._exporter._glTF).extensionsRequired || (He.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(Me) && this._exporter._glTF.extensionsRequired.push(Me)
      }
    }
    let kb = !1;

    function qb() {
      kb || (kb = !0, xy.RegisterExtension(ob, (ee => new Rb(ee)), 200))
    }
    qb();
    const fb = "EXT_lights_area",
      Tb = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      pb = {
        aspect: 1
      },
      Xb = Ce.p.Backward();
    class zb {
      constructor(ee) {
        this.name = fb, this.enabled = !0, this.required = !1, this._exporter = ee
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[fb] = this._lights
      }
      async postExportNodeAsync(ee, ie, He, ye, be) {
        return await new Promise((Me => {
          if (!(He instanceof ky.e)) return void Me(ie);
          const Ke = He.getTypeID() == ky.e.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!Ke) return we.e.Warn(`${ee}: Light ${He.name} is not supported in ${fb}`), void Me(ie);
          const Ue = He;
          if (Ue.falloffType !== ky.e.FALLOFF_GLTF && we.e.Warn(`${ee}: Light falloff for ${He.name} does not match the ${fb} specification!`), !Ue.position.wFe(0, 0, 0)) {
            const ee = Ce.j.rf[0].jD(Ue.position);
            be && sH(ee), ie.translation = ee.Qbe()
          }
          const Fe = Ce.p.Forward();
          be && sH(Fe);
          const Je = Ce.f.FromUnitVectorsToRef(Xb, Fe, Ce.j.Quaternion[0]);
          Ce.f.IsIdentity(Je) || (ie.rotation = Je.Qbe());
          const oe = {
            type: Ke,
            name: Ue.name,
            color: Ue.diffuse.Qbe(),
            intensity: Ue.intensity,
            size: Ue.height,
            rect: {
              aspect: Ue.width / Ue.height
            }
          };
          QH(oe, Tb), oe.rect && QH(oe.rect, pb), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(oe);
          const Re = {
              light: this._lights.lights.length - 1
            },
            ke = He.parent;
          if (ke && GH(Ue, ke)) {
            const ee = ye.get(ke);
            if (ee) {
              const He = this._exporter._nodes[ee];
              return NH(ie, He), He.extensions || (He.extensions = {}), He.extensions[fb] = Re, void Me(null)
            }
          }
          ie.extensions || (ie.extensions = {}), ie.extensions[fb] = Re, Me(ie)
        }))
      }
    }
    let Bb = !1;

    function Eb() {
      Bb || (Bb = !0, xy.RegisterExtension(fb, (ee => new zb(ee))))
    }
    Eb();
    const gb = "KHR_materials_anisotropy";
    class Ob {
      constructor(ee) {
        this.name = gb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = ee
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(ee, ie, He) {
        const ye = [];
        if (He instanceof di) {
          if (He.anisotropy.isEnabled && !He.anisotropy.legacy) return He.anisotropy.texture && ye.push(He.anisotropy.texture), ye
        } else if (He instanceof eH && He.specularRoughnessAnisotropy > 0) {
          const ee = function(ee) {
            const ie = ee.specularRoughnessAnisotropyTexture,
              He = ee.geometryTangentTexture;
            return `${ie&&ie.getInternalTexture()?ie.getInternalTexture().uniqueId:"NoStrength"}_${He&&He.getInternalTexture()?He.getInternalTexture().uniqueId:"NoTangent"}`
          }(He);
          if (this._anisoTexturesMap[ee]) ye.push(this._anisoTexturesMap[ee]);
          else {
            const ie = await async function(ee) {
              const ie = ee.Xx(),
                He = ee.specularRoughnessAnisotropyTexture,
                ye = ee.geometryTangentTexture;
              return He || ye ? await FH("AnisotropyTexture", RH(ye ? JH(ye, 0) : oH(1), ye ? JH(ye, 1) : oH(0), He ? JH(He, 0) : oH(1)), ie) : null
            }(He);
            ie && (ye.push(ie), this._anisoTexturesMap[ee] = ie)
          }
          return ye
        }
        return []
      }
      postExportMaterialAsync(ee, ie, He) {
        return new Promise((ee => {
          var ye;
          if (He instanceof di) {
            if (!He.anisotropy.isEnabled || He.anisotropy.legacy) return void ee(ie);
            this._wasUsed = !0, ie.extensions = ie.extensions || {};
            const ye = this._exporter._materialExporter.getTextureInfo(He.anisotropy.texture),
              be = {
                anisotropyStrength: He.anisotropy.intensity,
                anisotropyRotation: He.anisotropy.angle,
                anisotropyTexture: ye ?? void 0
              };
            null !== be.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(He), ie.extensions[gb] = be
          } else if (He instanceof eH && He.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, ie.extensions = ie.extensions || {};
            let be = He.specularRoughnessTexture;
            He._useRoughnessFromMetallicTextureGreen && (be = He.baseMetalnessTexture);
            const Me = this._anisoTexturesMap[He.id];
            if (!be && !Me) {
              let ye = He.specularRoughness,
                be = He.specularRoughnessAnisotropy;
              if (!He._useGltfStyleAnisotropy) {
                const ee = function(ee, ie) {
                  const He = ee * ee,
                    ye = He * Math.sqrt(2 / (1 + (1 - ie) * (1 - ie))),
                    be = (1 - ie) * ye;
                  return {
                    newBaseRoughness: Math.sqrt(be),
                    newAnisotropyStrength: Math.min(Math.sqrt((ye - He) / Math.max(1 - He, 1e-4)), 1)
                  }
                }(He.specularRoughness, He.specularRoughnessAnisotropy);
                ye = ee.newBaseRoughness, be = ee.newAnisotropyStrength
              }
              ie.pbrMetallicRoughness && (ie.pbrMetallicRoughness.roughnessFactor = ye);
              const Me = {
                anisotropyStrength: be,
                anisotropyRotation: He.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return ie.extensions[gb] = Me, ee(ie)
            }
            const Ke = Me ? this._exporter._materialExporter.getTextureInfo(Me) : null,
              Ue = {
                anisotropyStrength: He.specularRoughnessAnisotropy,
                anisotropyRotation: He.geometryTangentAngle,
                anisotropyTexture: Ke || void 0,
                extensions: {}
              };
            He._useGltfStyleAnisotropy || (ie.extensions.KHR_materials_openpbr = {}, (ye = this._exporter._glTF).extensionsUsed || (ye.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(He), ie.extensions[gb] = Ue
          }
          ee(ie)
        }))
      }
    }
    let db = !1;

    function Wb() {
      db || (db = !0, xy.RegisterExtension(gb, (ee => new Ob(ee))))
    }
    Wb();
    const tb = "KHR_materials_clearcoat";

    function Zb(ee, ie) {
      const He = new Pe.e(ie.name, ie.Xx());
      return He._texture = ee, He.coordinatesIndex = ie.coordinatesIndex, ie instanceof Pe.e && (He.uOffset = ie.uOffset, He.vOffset = ie.vOffset, He.uScale = ie.uScale, He.vScale = ie.vScale, He.wAng = ie.wAng), He.wrapU = ie.wrapU, He.wrapV = ie.wrapV, He
    }
    class wb {
      constructor(ee) {
        this.name = tb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = ee
      }
      dispose() {
        for (const ee of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[ee].dispose()
        }
        this._mergedTexturesMap = {};
        for (const ee of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[ee].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(ee, ie, He) {
        const ye = [];
        if (He instanceof di) {
          if (He.clearCoat.isEnabled) return He.clearCoat.texture && ye.push(He.clearCoat.texture), !He.clearCoat.useRoughnessFromMainTexture && He.clearCoat.textureRoughness && ye.push(He.clearCoat.textureRoughness), He.clearCoat.bumpTexture && ye.push(He.clearCoat.bumpTexture), ye
        } else if (He instanceof eH && He.coatWeight > 0) {
          let ee = !1;
          if (He.coatWeightTexture ? He.coatRoughnessTexture ? He._useCoatRoughnessFromGreenChannel && He.coatWeightTexture.getInternalTexture() === He.coatRoughnessTexture.getInternalTexture() ? (ye.push(He.coatWeightTexture), ye.push(He.coatRoughnessTexture)) : ee = !0 : ye.push(He.coatWeightTexture) : He.coatRoughnessTexture && (He._useCoatRoughnessFromGreenChannel ? ye.push(He.coatRoughnessTexture) : ee = !0), ee) {
            const ee = function(ee) {
              const ie = ee.coatWeightTexture,
                He = ie && ie.getInternalTexture() ? ie.getInternalTexture().uniqueId : "NoCoat",
                ye = ee.coatRoughnessTexture;
              return `${He}_${ye&&ye.getInternalTexture()?ye.getInternalTexture().uniqueId:"NoRoughness"}`
            }(He);
            if (!this._cachedInternalTexturesMap[ee]) {
              const ie = await async function(ee) {
                const ie = ee.Xx(),
                  He = ee.coatWeightTexture,
                  ye = ee.coatRoughnessTexture;
                return He || ye ? (await FH("CoatTexture", RH(He ? JH(He, 0) : oH(1), ye ? JH(ye, ee._useCoatRoughnessFromGreenChannel ? 1 : 0) : oH(1)), ie)).getInternalTexture() : null
              }(He);
              ie && (this._cachedInternalTexturesMap[ee] = ie)
            }
            this._cachedInternalTexturesMap[ee] && (He.coatWeightTexture && (this._mergedTexturesMap[He.coatWeightTexture.uniqueId] = Zb(this._cachedInternalTexturesMap[ee], He.coatWeightTexture), ye.push(this._mergedTexturesMap[He.coatWeightTexture.uniqueId])), He.coatRoughnessTexture && (this._mergedTexturesMap[He.coatRoughnessTexture.uniqueId] = Zb(this._cachedInternalTexturesMap[ee], He.coatRoughnessTexture), ye.push(this._mergedTexturesMap[He.coatRoughnessTexture.uniqueId])))
          }
          return He.geometryCoatNormalTexture && ye.push(He.geometryCoatNormalTexture), ye
        }
        return []
      }
      postExportMaterialAsync(ee, ie, He) {
        return new Promise((ee => {
          if (He instanceof di) {
            if (!He.clearCoat.isEnabled) return void ee(ie);
            this._wasUsed = !0, ie.extensions = ie.extensions || {};
            const ye = this._exporter._materialExporter.getTextureInfo(He.clearCoat.texture);
            let be;
            be = He.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(He.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(He.clearCoat.textureRoughness), He.clearCoat.isTintEnabled && ti.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${He.name}`), He.clearCoat.remapF0OnInterfaceChange && ti.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${He.name}`);
            const Me = this._exporter._materialExporter.getTextureInfo(He.clearCoat.bumpTexture),
              Ke = {
                clearcoatFactor: He.clearCoat.intensity,
                clearcoatTexture: ye ?? void 0,
                clearcoatRoughnessFactor: He.clearCoat.roughness,
                clearcoatRoughnessTexture: be ?? void 0,
                clearcoatNormalTexture: Me ?? void 0
              };
            null === Ke.clearcoatTexture && null === Ke.clearcoatRoughnessTexture && null === Ke.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(He), ie.extensions[tb] = Ke
          } else if (He instanceof eH) {
            if (0 == He.coatWeight) return void ee(ie);
            let ye, be, Me, Ke;
            this._wasUsed = !0, ie.extensions = ie.extensions || {}, He.coatWeightTexture && (ye = this._mergedTexturesMap[He.coatWeightTexture.uniqueId], be = this._exporter._materialExporter.getTextureInfo(ye)), He.coatRoughnessTexture && (Me = this._mergedTexturesMap[He.coatRoughnessTexture.uniqueId], Ke = this._exporter._materialExporter.getTextureInfo(Me)), He.coatColorTexture && ti.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${He.name}`);
            const Ue = this._exporter._materialExporter.getTextureInfo(He.geometryCoatNormalTexture),
              Fe = {
                clearcoatFactor: He.coatWeight,
                clearcoatTexture: be ?? void 0,
                clearcoatRoughnessFactor: He.coatRoughness,
                clearcoatRoughnessTexture: Ke ?? void 0,
                clearcoatNormalTexture: Ue ?? void 0
              };
            null === Fe.clearcoatTexture && null === Fe.clearcoatRoughnessTexture && null === Fe.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(He), ie.extensions[tb] = Fe
          }
          ee(ie)
        }))
      }
    }
    let Db = !1;

    function Pb() {
      Db || (Db = !0, xy.RegisterExtension(tb, (ee => new wb(ee))))
    }
    Pb();
    const Ab = "KHR_materials_coat";

    function Yb(ee) {
      const ie = ee.coatRoughnessAnisotropyTexture,
        He = ee.geometryCoatTangentTexture;
      return `${ie&&ie.getInternalTexture()?ie.getInternalTexture().uniqueId:"NoStrength"}_${He&&He.getInternalTexture()?He.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Vb(ee, ie) {
      const He = new Pe.e(ie.name, ie.Xx());
      return He._texture = ee, He.coordinatesIndex = ie.coordinatesIndex, ie instanceof Pe.e && (He.uOffset = ie.uOffset, He.vOffset = ie.vOffset, He.uScale = ie.uScale, He.vScale = ie.vScale, He.wAng = ie.wAng), He.wrapU = ie.wrapU, He.wrapV = ie.wrapV, He
    }
    class ab {
      constructor(ee) {
        this.name = Ab, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = ee
      }
      dispose() {
        for (const ee of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[ee].dispose()
        }
        this._mergedTexturesMap = {};
        for (const ee of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[ee].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(ee, ie, He) {
        const ye = [];
        if (He instanceof di) {
          if (He.clearCoat.isEnabled) return He.clearCoat.texture && ye.push(He.clearCoat.texture), !He.clearCoat.useRoughnessFromMainTexture && He.clearCoat.textureRoughness && ye.push(He.clearCoat.textureRoughness), He.clearCoat.bumpTexture && ye.push(He.clearCoat.bumpTexture), He.clearCoat.tintTexture && ye.push(He.clearCoat.tintTexture), ye
        } else if (He instanceof eH && He.coatWeight > 0) {
          let ee = !1;
          if (He.coatWeightTexture ? He.coatRoughnessTexture ? He._useCoatRoughnessFromGreenChannel && He.coatWeightTexture.getInternalTexture() === He.coatRoughnessTexture.getInternalTexture() ? (ye.push(He.coatWeightTexture), ye.push(He.coatRoughnessTexture)) : ee = !0 : ye.push(He.coatWeightTexture) : He.coatRoughnessTexture && (He._useCoatRoughnessFromGreenChannel ? ye.push(He.coatRoughnessTexture) : ee = !0), ee) {
            const ee = function(ee) {
              const ie = ee.coatWeightTexture,
                He = ie && ie.getInternalTexture() ? ie.getInternalTexture().uniqueId : "NoCoat",
                ye = ee.coatRoughnessTexture;
              return `${He}_${ye&&ye.getInternalTexture()?ye.getInternalTexture().uniqueId:"NoRoughness"}`
            }(He);
            if (!this._cachedInternalTexturesMap[ee]) {
              const ie = await async function(ee) {
                const ie = ee.Xx(),
                  He = ee.coatWeightTexture,
                  ye = ee.coatRoughnessTexture;
                return He || ye ? (await FH("CoatTexture", RH(He ? JH(He, 0) : oH(1), ye ? JH(ye, ee._useCoatRoughnessFromGreenChannel ? 1 : 0) : oH(1)), ie)).getInternalTexture() : null
              }(He);
              ie && (this._cachedInternalTexturesMap[ee] = ie)
            }
            this._cachedInternalTexturesMap[ee] && (He.coatWeightTexture && (this._mergedTexturesMap[He.coatWeightTexture.uniqueId] = Vb(this._cachedInternalTexturesMap[ee], He.coatWeightTexture), ye.push(this._mergedTexturesMap[He.coatWeightTexture.uniqueId])), He.coatRoughnessTexture && (this._mergedTexturesMap[He.coatRoughnessTexture.uniqueId] = Vb(this._cachedInternalTexturesMap[ee], He.coatRoughnessTexture), ye.push(this._mergedTexturesMap[He.coatRoughnessTexture.uniqueId])))
          }
          if (He.geometryCoatNormalTexture && ye.push(He.geometryCoatNormalTexture), He.coatColorTexture && ye.push(He.coatColorTexture), He.coatRoughnessAnisotropy > 0) {
            const ee = Yb(He);
            if (this._mergedTexturesMap[ee]) ye.push(this._mergedTexturesMap[ee]);
            else {
              const ie = await async function(ee) {
                const ie = ee.Xx(),
                  He = ee.coatRoughnessAnisotropyTexture,
                  ye = ee.geometryCoatTangentTexture;
                return He || ye ? await FH("AnisotropyTexture", RH(ye ? JH(ye, 0) : oH(1), ye ? JH(ye, 1) : oH(0), He ? JH(He, 0) : oH(1)), ie) : null
              }(He);
              ie && (ye.push(ie), this._mergedTexturesMap[ee] = ie)
            }
            return ye
          }
          return ye
        }
        return []
      }
      postExportMaterialAsync(ee, ie, He) {
        return new Promise((ee => {
          var ye;
          if (He instanceof di) {
            if (!He.clearCoat.isEnabled) return void ee(ie);
            this._wasUsed = !0, ie.extensions = ie.extensions || {};
            const ye = this._exporter._materialExporter.getTextureInfo(He.clearCoat.texture);
            let be, Me;
            be = He.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(He.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(He.clearCoat.textureRoughness), He.clearCoat.isTintEnabled && (Me = this._exporter._materialExporter.getTextureInfo(He.clearCoat.tintTexture));
            const Ke = this._exporter._materialExporter.getTextureInfo(He.clearCoat.bumpTexture),
              Ue = He.clearCoat.indexOfRefraction,
              Fe = {
                coatFactor: He.clearCoat.intensity,
                coatTexture: ye ?? void 0,
                coatRoughnessFactor: He.clearCoat.roughness,
                coatRoughnessTexture: be ?? void 0,
                coatNormalTexture: Ke ?? void 0,
                coatColorFactor: He.clearCoat.tintColor.Qbe(),
                coatColorTexture: Me ?? void 0,
                coatIor: 1.5 !== Ue ? Ue : void 0
              };
            null === Fe.coatTexture && null === Fe.coatRoughnessTexture && null === Fe.coatRoughnessTexture && null === Fe.coatColorTexture || this._exporter._materialNeedsUVsSet.add(He), ie.extensions[Ab] = Fe
          } else if (He instanceof eH) {
            if (0 == He.coatWeight) return void ee(ie);
            let be, Me, Ke, Ue;
            this._wasUsed = !0, ie.extensions = ie.extensions || {}, He.coatWeightTexture && (be = this._mergedTexturesMap[He.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[He.coatWeightTexture.uniqueId] : He.coatWeightTexture, Me = this._exporter._materialExporter.getTextureInfo(be)), He.coatRoughnessTexture && (Ke = this._mergedTexturesMap[He.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[He.coatRoughnessTexture.uniqueId] : He.coatRoughnessTexture, Ue = this._exporter._materialExporter.getTextureInfo(Ke));
            const Fe = this._exporter._materialExporter.getTextureInfo(He.geometryCoatNormalTexture),
              Je = this._exporter._materialExporter.getTextureInfo(He.coatColorTexture),
              oe = He.coatIor,
              Re = He.coatDarkening,
              ke = He.coatRoughnessTexture,
              qe = Yb(He),
              fe = this._mergedTexturesMap[qe];
            let Te, pe = 0,
              Xe = 0;
            if (He.coatRoughnessAnisotropy > 0) {
              if (ke || fe) {
                const ee = fe ? this._exporter._materialExporter.getTextureInfo(fe) : null;
                pe = He.coatRoughnessAnisotropy, Xe = He.geometryCoatTangentAngle, Te = ee || void 0
              } else {
                let ee = He.coatRoughness,
                  ye = He.coatRoughnessAnisotropy;
                if (!He._useGltfStyleAnisotropy) {
                  const ie = function(ee, ie) {
                    const He = ee * ee,
                      ye = He * Math.sqrt(2 / (1 + (1 - ie) * (1 - ie))),
                      be = (1 - ie) * ye;
                    return {
                      newBaseRoughness: Math.sqrt(be),
                      newAnisotropyStrength: Math.min(Math.sqrt((ye - He) / Math.max(1 - He, 1e-4)), 1)
                    }
                  }(He.coatRoughness, He.coatRoughnessAnisotropy);
                  ee = ie.newBaseRoughness, ye = ie.newAnisotropyStrength
                }
                ie.pbrMetallicRoughness && (ie.pbrMetallicRoughness.roughnessFactor = ee), pe = ye, Xe = He.geometryCoatTangentAngle + .5 * Math.PI, Te = void 0
              }
              He._useGltfStyleAnisotropy || (ie.extensions.KHR_materials_openpbr = {}, (ye = this._exporter._glTF).extensionsUsed || (ye.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const ze = {
              coatFactor: He.coatWeight,
              coatTexture: Me ?? void 0,
              coatRoughnessFactor: He.coatRoughness,
              coatRoughnessTexture: Ue ?? void 0,
              coatNormalTexture: Fe ?? void 0,
              coatColorFactor: He.coatColor.Qbe(),
              coatColorTexture: Je ?? void 0,
              coatIor: 1.5 !== oe ? oe : void 0,
              coatDarkeningFactor: 1 !== Re ? Re : void 0,
              coatAnisotropyRotation: Xe,
              coatAnisotropyStrength: pe,
              coatAnisotropyTexture: Te
            };
            null === ze.coatTexture && null === ze.coatRoughnessTexture && null === ze.coatRoughnessTexture && null === ze.coatAnisotropyTexture && null === ze.coatColorTexture || this._exporter._materialNeedsUVsSet.add(He), ie.extensions[Ab] = ze
          }
          ee(ie)
        }))
      }
    }
    let cb = !1;

    function xb() {
      cb || (cb = !0, xy.RegisterExtension(Ab, (ee => new ab(ee))))
    }
    xb();
    let Lb = (() => {
      var ee, ie, He, ye, be, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be, Ee, ge, Oe, de, We, we, De, Pe, Ae, Ye, Ve, ce, xe, Le, Ce, ve, ue, me, le, Se, ne, se, Ie, he, Ne, Ge, re, Qe, ei, ii, Hi, yi, bi, Mi, Ki, Ui, Fi, Ji, oi, Ri, ki, qi, fi, Ti, Xi, zi, Bi, Ei;
      let gi, Oi, ti, Zi, wi, Di, Pi, Ai, Yi, Vi, ai, ci, xi, Li, Ci, vi, ui, mi, li, Si, ni, ji, si, Ii, Ni, Gi, ri, Qi, eH, iH, HH, yH, bH, MH, KH, UH, FH, JH, oH, RH, kH, qH, fH, TH, pH, XH, zH, BH, EH, gH, OH, dH, WH, tH, ZH, wH, DH, PH, AH, YH, VH, aH, cH, xH, LH, CH, vH, uH, mH = di,
        lH = [],
        SH = [],
        nH = [],
        jH = [],
        sH = [],
        IH = [],
        hH = [],
        NH = [],
        GH = [],
        rH = [],
        QH = [],
        ey = [],
        iy = [],
        Hy = [],
        yy = [],
        by = [],
        My = [],
        Ky = [],
        Uy = [],
        Fy = [],
        Jy = [],
        oy = [],
        Ry = [],
        ky = [],
        qy = [],
        fy = [],
        Ty = [],
        py = [],
        Xy = [],
        zy = [],
        By = [],
        Ey = [],
        gy = [],
        Oy = [],
        dy = [],
        Wy = [],
        ty = [],
        Zy = [],
        wy = [],
        Dy = [],
        Py = [],
        Ay = [],
        Yy = [],
        Vy = [],
        ay = [],
        cy = [],
        xy = [],
        Ly = [],
        Cy = [],
        vy = [],
        uy = [],
        my = [],
        ly = [],
        Sy = [],
        ny = [],
        jy = [],
        sy = [],
        Iy = [],
        hy = [],
        Ny = [],
        Gy = [],
        ry = [],
        Qy = [],
        eb = [],
        ib = [],
        Hb = [],
        yb = [],
        bb = [],
        Mb = [],
        Kb = [],
        Ub = [],
        Fb = [],
        Jb = [],
        ob = [],
        Rb = [],
        kb = [],
        qb = [],
        fb = [],
        Tb = [],
        pb = [],
        Xb = [],
        zb = [],
        Bb = [],
        Eb = [],
        gb = [],
        Ob = [],
        db = [],
        Wb = [],
        tb = [],
        Zb = [],
        wb = [],
        Db = [],
        Pb = [],
        Ab = [],
        Yb = [],
        Vb = [],
        ab = [],
        cb = [],
        xb = [],
        Lb = [],
        Cb = [],
        vb = [],
        ub = [],
        mb = [],
        lb = [],
        Sb = [],
        nb = [],
        jb = [],
        sb = [],
        Ib = [],
        hb = [],
        Nb = [],
        Gb = [],
        rb = [],
        Qb = [],
        eM = [],
        iM = [],
        HM = [],
        yM = [],
        bM = [],
        MM = [],
        KM = [],
        UM = [],
        FM = [],
        JM = [],
        oM = [],
        RM = [],
        kM = [],
        qM = [],
        fM = [],
        TM = [],
        pM = [],
        XM = [];
      return ee = class extends mH {
        get directIntensity() {
          return (0, te.c)(this, ie, "f")
        }
        set directIntensity(ee) {
          (0, te.f)(this, ie, ee, "f")
        }
        get emissiveIntensity() {
          return (0, te.c)(this, He, "f")
        }
        set emissiveIntensity(ee) {
          (0, te.f)(this, He, ee, "f")
        }
        get environmentIntensity() {
          return (0, te.c)(this, ye, "f")
        }
        set environmentIntensity(ee) {
          (0, te.f)(this, ye, ee, "f")
        }
        get specularIntensity() {
          return (0, te.c)(this, be, "f")
        }
        set specularIntensity(ee) {
          (0, te.f)(this, be, ee, "f")
        }
        get disableBumpMap() {
          return (0, te.c)(this, Ke, "f")
        }
        set disableBumpMap(ee) {
          (0, te.f)(this, Ke, ee, "f")
        }
        get albedoTexture() {
          return (0, te.c)(this, Ue, "f")
        }
        set albedoTexture(ee) {
          (0, te.f)(this, Ue, ee, "f")
        }
        get baseWeightTexture() {
          return (0, te.c)(this, Fe, "f")
        }
        set baseWeightTexture(ee) {
          (0, te.f)(this, Fe, ee, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, te.c)(this, Je, "f")
        }
        set baseDiffuseRoughnessTexture(ee) {
          (0, te.f)(this, Je, ee, "f")
        }
        get ambientTexture() {
          return (0, te.c)(this, oe, "f")
        }
        set ambientTexture(ee) {
          (0, te.f)(this, oe, ee, "f")
        }
        get ambientTextureStrength() {
          return (0, te.c)(this, Re, "f")
        }
        set ambientTextureStrength(ee) {
          (0, te.f)(this, Re, ee, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, te.c)(this, ke, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(ee) {
          (0, te.f)(this, ke, ee, "f")
        }
        get opacityTexture() {
          return (0, te.c)(this, qe, "f")
        }
        set opacityTexture(ee) {
          (0, te.f)(this, qe, ee, "f")
        }
        get reflectionTexture() {
          return (0, te.c)(this, fe, "f")
        }
        set reflectionTexture(ee) {
          (0, te.f)(this, fe, ee, "f")
        }
        get emissiveTexture() {
          return (0, te.c)(this, Te, "f")
        }
        set emissiveTexture(ee) {
          (0, te.f)(this, Te, ee, "f")
        }
        get reflectivityTexture() {
          return (0, te.c)(this, pe, "f")
        }
        set reflectivityTexture(ee) {
          (0, te.f)(this, pe, ee, "f")
        }
        get metallicTexture() {
          return (0, te.c)(this, Xe, "f")
        }
        set metallicTexture(ee) {
          (0, te.f)(this, Xe, ee, "f")
        }
        get metallic() {
          return (0, te.c)(this, ze, "f")
        }
        set metallic(ee) {
          (0, te.f)(this, ze, ee, "f")
        }
        get roughness() {
          return (0, te.c)(this, Be, "f")
        }
        set roughness(ee) {
          (0, te.f)(this, Be, ee, "f")
        }
        get metallicF0Factor() {
          return (0, te.c)(this, Ee, "f")
        }
        set metallicF0Factor(ee) {
          (0, te.f)(this, Ee, ee, "f")
        }
        get metallicReflectanceColor() {
          return (0, te.c)(this, ge, "f")
        }
        set metallicReflectanceColor(ee) {
          (0, te.f)(this, ge, ee, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, te.c)(this, Oe, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(ee) {
          (0, te.f)(this, Oe, ee, "f")
        }
        get metallicReflectanceTexture() {
          return (0, te.c)(this, de, "f")
        }
        set metallicReflectanceTexture(ee) {
          (0, te.f)(this, de, ee, "f")
        }
        get reflectanceTexture() {
          return (0, te.c)(this, We, "f")
        }
        set reflectanceTexture(ee) {
          (0, te.f)(this, We, ee, "f")
        }
        get microSurfaceTexture() {
          return (0, te.c)(this, we, "f")
        }
        set microSurfaceTexture(ee) {
          (0, te.f)(this, we, ee, "f")
        }
        get bumpTexture() {
          return (0, te.c)(this, De, "f")
        }
        set bumpTexture(ee) {
          (0, te.f)(this, De, ee, "f")
        }
        get lightmapTexture() {
          return (0, te.c)(this, Pe, "f")
        }
        set lightmapTexture(ee) {
          (0, te.f)(this, Pe, ee, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(ee) {
          this.subSurface.refractionTexture = ee, ee ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, te.c)(this, Ae, "f")
        }
        set ambientColor(ee) {
          (0, te.f)(this, Ae, ee, "f")
        }
        get albedoColor() {
          return (0, te.c)(this, Ye, "f")
        }
        set albedoColor(ee) {
          (0, te.f)(this, Ye, ee, "f")
        }
        get baseWeight() {
          return (0, te.c)(this, Ve, "f")
        }
        set baseWeight(ee) {
          (0, te.f)(this, Ve, ee, "f")
        }
        get baseDiffuseRoughness() {
          return (0, te.c)(this, ce, "f")
        }
        set baseDiffuseRoughness(ee) {
          (0, te.f)(this, ce, ee, "f")
        }
        get reflectivityColor() {
          return (0, te.c)(this, xe, "f")
        }
        set reflectivityColor(ee) {
          (0, te.f)(this, xe, ee, "f")
        }
        get reflectionColor() {
          return (0, te.c)(this, Le, "f")
        }
        set reflectionColor(ee) {
          (0, te.f)(this, Le, ee, "f")
        }
        get emissiveColor() {
          return (0, te.c)(this, Ce, "f")
        }
        set emissiveColor(ee) {
          (0, te.f)(this, Ce, ee, "f")
        }
        get microSurface() {
          return (0, te.c)(this, ve, "f")
        }
        set microSurface(ee) {
          (0, te.f)(this, ve, ee, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(ee) {
          this.subSurface.indexOfRefraction = ee
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(ee) {
          this.subSurface.invertRefractionY = ee
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(ee) {
          this.subSurface.linkRefractionWithTransparency = ee, ee && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, te.c)(this, ue, "f")
        }
        set useLightmapAsShadowmap(ee) {
          (0, te.f)(this, ue, ee, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, te.c)(this, me, "f")
        }
        set useAlphaFromAlbedoTexture(ee) {
          (0, te.f)(this, me, ee, "f")
        }
        get forceAlphaTest() {
          return (0, te.c)(this, le, "f")
        }
        set forceAlphaTest(ee) {
          (0, te.f)(this, le, ee, "f")
        }
        get alphaCutOff() {
          return (0, te.c)(this, Se, "f")
        }
        set alphaCutOff(ee) {
          (0, te.f)(this, Se, ee, "f")
        }
        get useSpecularOverAlpha() {
          return (0, te.c)(this, ne, "f")
        }
        set useSpecularOverAlpha(ee) {
          (0, te.f)(this, ne, ee, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, te.c)(this, se, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(ee) {
          (0, te.f)(this, se, ee, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, te.c)(this, Ie, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(ee) {
          (0, te.f)(this, Ie, ee, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, te.c)(this, he, "f")
        }
        set useRoughnessFromMetallicTextureGreen(ee) {
          (0, te.f)(this, he, ee, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, te.c)(this, Ne, "f")
        }
        set useMetallnessFromMetallicTextureBlue(ee) {
          (0, te.f)(this, Ne, ee, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, te.c)(this, Ge, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(ee) {
          (0, te.f)(this, Ge, ee, "f")
        }
        get useAmbientInGrayScale() {
          return (0, te.c)(this, re, "f")
        }
        set useAmbientInGrayScale(ee) {
          (0, te.f)(this, re, ee, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, te.c)(this, Qe, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(ee) {
          (0, te.f)(this, Qe, ee, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === di.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(ee) {
          ee !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = ee ? di.LIGHTFALLOFF_PHYSICAL : di.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === di.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(ee) {
          ee !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = ee ? di.LIGHTFALLOFF_GLTF : di.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, te.c)(this, ei, "f")
        }
        set useRadianceOverAlpha(ee) {
          (0, te.f)(this, ei, ee, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, te.c)(this, ii, "f")
        }
        set useObjectSpaceNormalMap(ee) {
          (0, te.f)(this, ii, ee, "f")
        }
        get useParallax() {
          return (0, te.c)(this, Hi, "f")
        }
        set useParallax(ee) {
          (0, te.f)(this, Hi, ee, "f")
        }
        get useParallaxOcclusion() {
          return (0, te.c)(this, yi, "f")
        }
        set useParallaxOcclusion(ee) {
          (0, te.f)(this, yi, ee, "f")
        }
        get parallaxScaleBias() {
          return (0, te.c)(this, bi, "f")
        }
        set parallaxScaleBias(ee) {
          (0, te.f)(this, bi, ee, "f")
        }
        get disableLighting() {
          return (0, te.c)(this, Mi, "f")
        }
        set disableLighting(ee) {
          (0, te.f)(this, Mi, ee, "f")
        }
        get forceIrradianceInFragment() {
          return (0, te.c)(this, Ki, "f")
        }
        set forceIrradianceInFragment(ee) {
          (0, te.f)(this, Ki, ee, "f")
        }
        get maxSimultaneousLights() {
          return (0, te.c)(this, Ui, "f")
        }
        set maxSimultaneousLights(ee) {
          (0, te.f)(this, Ui, ee, "f")
        }
        get invertNormalMapX() {
          return (0, te.c)(this, Fi, "f")
        }
        set invertNormalMapX(ee) {
          (0, te.f)(this, Fi, ee, "f")
        }
        get invertNormalMapY() {
          return (0, te.c)(this, Ji, "f")
        }
        set invertNormalMapY(ee) {
          (0, te.f)(this, Ji, ee, "f")
        }
        get twoSidedLighting() {
          return (0, te.c)(this, oi, "f")
        }
        set twoSidedLighting(ee) {
          (0, te.f)(this, oi, ee, "f")
        }
        get useAlphaFresnel() {
          return (0, te.c)(this, Ri, "f")
        }
        set useAlphaFresnel(ee) {
          (0, te.f)(this, Ri, ee, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, te.c)(this, ki, "f")
        }
        set useLinearAlphaFresnel(ee) {
          (0, te.f)(this, ki, ee, "f")
        }
        get environmentBRDFTexture() {
          return (0, te.c)(this, qi, "f")
        }
        set environmentBRDFTexture(ee) {
          (0, te.f)(this, qi, ee, "f")
        }
        get forceNormalForward() {
          return (0, te.c)(this, fi, "f")
        }
        set forceNormalForward(ee) {
          (0, te.f)(this, fi, ee, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, te.c)(this, Ti, "f")
        }
        set enableSpecularAntiAliasing(ee) {
          (0, te.f)(this, Ti, ee, "f")
        }
        get useHorizonOcclusion() {
          return (0, te.c)(this, Xi, "f")
        }
        set useHorizonOcclusion(ee) {
          (0, te.f)(this, Xi, ee, "f")
        }
        get useRadianceOcclusion() {
          return (0, te.c)(this, zi, "f")
        }
        set useRadianceOcclusion(ee) {
          (0, te.f)(this, zi, ee, "f")
        }
        get unlit() {
          return (0, te.c)(this, Bi, "f")
        }
        set unlit(ee) {
          (0, te.f)(this, Bi, ee, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, te.c)(this, Ei, "f")
        }
        set applyDecalMapAfterDetailMap(ee) {
          (0, te.f)(this, Ei, ee, "f")
        }
        constructor(Me, Ze) {
          super(Me, Ze, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), ie.set(this, ((0, te.l)(this, lH), (0, te.l)(this, SH, 1))), He.set(this, ((0, te.l)(this, nH), (0, te.l)(this, jH, 1))), ye.set(this, ((0, te.l)(this, sH), (0, te.l)(this, IH, 1))), be.set(this, ((0, te.l)(this, hH), (0, te.l)(this, NH, 1))), Ke.set(this, ((0, te.l)(this, GH), (0, te.l)(this, rH, !1))), Ue.set(this, ((0, te.l)(this, QH), (0, te.l)(this, ey, void 0))), Fe.set(this, ((0, te.l)(this, iy), (0, te.l)(this, Hy, void 0))), Je.set(this, ((0, te.l)(this, yy), (0, te.l)(this, by, void 0))), oe.set(this, ((0, te.l)(this, My), (0, te.l)(this, Ky, void 0))), Re.set(this, ((0, te.l)(this, Uy), (0, te.l)(this, Fy, 1))), ke.set(this, ((0, te.l)(this, Jy), (0, te.l)(this, oy, ee.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), qe.set(this, ((0, te.l)(this, Ry), (0, te.l)(this, ky, void 0))), fe.set(this, ((0, te.l)(this, qy), (0, te.l)(this, fy, void 0))), Te.set(this, ((0, te.l)(this, Ty), (0, te.l)(this, py, void 0))), pe.set(this, ((0, te.l)(this, Xy), (0, te.l)(this, zy, void 0))), Xe.set(this, ((0, te.l)(this, By), (0, te.l)(this, Ey, void 0))), ze.set(this, ((0, te.l)(this, gy), (0, te.l)(this, Oy, void 0))), Be.set(this, ((0, te.l)(this, dy), (0, te.l)(this, Wy, void 0))), Ee.set(this, ((0, te.l)(this, ty), (0, te.l)(this, Zy, 1))), ge.set(this, ((0, te.l)(this, wy), (0, te.l)(this, Dy, je.c.White()))), Oe.set(this, ((0, te.l)(this, Py), (0, te.l)(this, Ay, !1))), de.set(this, ((0, te.l)(this, Yy), (0, te.l)(this, Vy, void 0))), We.set(this, ((0, te.l)(this, ay), (0, te.l)(this, cy, void 0))), we.set(this, ((0, te.l)(this, xy), (0, te.l)(this, Ly, void 0))), De.set(this, ((0, te.l)(this, Cy), (0, te.l)(this, vy, void 0))), Pe.set(this, ((0, te.l)(this, uy), (0, te.l)(this, my, void 0))), Ae.set(this, ((0, te.l)(this, ly), (0, te.l)(this, Sy, new je.c(0, 0, 0)))), Ye.set(this, ((0, te.l)(this, ny), (0, te.l)(this, jy, new je.c(1, 1, 1)))), Ve.set(this, ((0, te.l)(this, sy), (0, te.l)(this, Iy, 1))), ce.set(this, ((0, te.l)(this, hy), (0, te.l)(this, Ny, void 0))), xe.set(this, ((0, te.l)(this, Gy), (0, te.l)(this, ry, new je.c(1, 1, 1)))), Le.set(this, ((0, te.l)(this, Qy), (0, te.l)(this, eb, new je.c(1, 1, 1)))), Ce.set(this, ((0, te.l)(this, ib), (0, te.l)(this, Hb, new je.c(0, 0, 0)))), ve.set(this, ((0, te.l)(this, yb), (0, te.l)(this, bb, 1))), ue.set(this, ((0, te.l)(this, Mb), (0, te.l)(this, Kb, !1))), me.set(this, ((0, te.l)(this, Ub), (0, te.l)(this, Fb, !1))), le.set(this, ((0, te.l)(this, Jb), (0, te.l)(this, ob, !1))), Se.set(this, ((0, te.l)(this, Rb), (0, te.l)(this, kb, .4))), ne.set(this, ((0, te.l)(this, qb), (0, te.l)(this, fb, !0))), se.set(this, ((0, te.l)(this, Tb), (0, te.l)(this, pb, !1))), Ie.set(this, ((0, te.l)(this, Xb), (0, te.l)(this, zb, !0))), he.set(this, ((0, te.l)(this, Bb), (0, te.l)(this, Eb, !1))), Ne.set(this, ((0, te.l)(this, gb), (0, te.l)(this, Ob, !1))), Ge.set(this, ((0, te.l)(this, db), (0, te.l)(this, Wb, !1))), re.set(this, ((0, te.l)(this, tb), (0, te.l)(this, Zb, !1))), Qe.set(this, ((0, te.l)(this, wb), (0, te.l)(this, Db, !1))), ei.set(this, ((0, te.l)(this, Pb), (0, te.l)(this, Ab, !0))), ii.set(this, ((0, te.l)(this, Yb), (0, te.l)(this, Vb, !1))), Hi.set(this, ((0, te.l)(this, ab), (0, te.l)(this, cb, !1))), yi.set(this, ((0, te.l)(this, xb), (0, te.l)(this, Lb, !1))), bi.set(this, ((0, te.l)(this, Cb), (0, te.l)(this, vb, .05))), Mi.set(this, ((0, te.l)(this, ub), (0, te.l)(this, mb, !1))), Ki.set(this, ((0, te.l)(this, lb), (0, te.l)(this, Sb, !1))), Ui.set(this, ((0, te.l)(this, nb), (0, te.l)(this, jb, 4))), Fi.set(this, ((0, te.l)(this, sb), (0, te.l)(this, Ib, !1))), Ji.set(this, ((0, te.l)(this, hb), (0, te.l)(this, Nb, !1))), oi.set(this, ((0, te.l)(this, Gb), (0, te.l)(this, rb, !1))), Ri.set(this, ((0, te.l)(this, Qb), (0, te.l)(this, eM, !1))), ki.set(this, ((0, te.l)(this, iM), (0, te.l)(this, HM, !1))), qi.set(this, ((0, te.l)(this, yM), (0, te.l)(this, bM, null))), fi.set(this, ((0, te.l)(this, MM), (0, te.l)(this, KM, !1))), Ti.set(this, ((0, te.l)(this, UM), (0, te.l)(this, FM, !1))), Xi.set(this, ((0, te.l)(this, JM), (0, te.l)(this, oM, !0))), zi.set(this, ((0, te.l)(this, RM), (0, te.l)(this, kM, !0))), Bi.set(this, ((0, te.l)(this, qM), (0, te.l)(this, fM, !1))), Ei.set(this, ((0, te.l)(this, TM), (0, te.l)(this, pM, !1))), (0, te.l)(this, XM), this._environmentBRDFTexture = ae(this.Xx())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(ie) {
          let He = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const be = Wi.c.Clone((() => new ee(ie, this.Xx())), this, {
            cloneTexturesOnlyOnce: He
          });
          return be.id = ie, be.name = ie, this.stencil.copyTo(be.stencil), this._clonePlugins(be, ye), be
        }
        serialize() {
          const ee = super.serialize();
          return ee.customType = "BABYLON.PBRMaterial", ee
        }
        static Parse(ie, He, ye) {
          const be = Wi.c.Parse((() => new ee(ie.name, He)), ie, He, ye);
          return ie.stencil && be.stencil.parse(ie.stencil, He, ye), Me.e._ParsePlugins(ie, be, He, ye), ie.clearCoat && be.clearCoat.parse(ie.clearCoat, He, ye), ie.anisotropy && be.anisotropy.parse(ie.anisotropy, He, ye), ie.brdf && be.brdf.parse(ie.brdf, He, ye), ie.sheen && be.sheen.parse(ie.sheen, He, ye), ie.subSurface && be.subSurface.parse(ie.subSurface, He, ye), ie.iridescence && be.iridescence.parse(ie.iridescence, He, ye), be
        }
      }, ie = new WeakMap, He = new WeakMap, ye = new WeakMap, be = new WeakMap, Ke = new WeakMap, Ue = new WeakMap, Fe = new WeakMap, Je = new WeakMap, oe = new WeakMap, Re = new WeakMap, ke = new WeakMap, qe = new WeakMap, fe = new WeakMap, Te = new WeakMap, pe = new WeakMap, Xe = new WeakMap, ze = new WeakMap, Be = new WeakMap, Ee = new WeakMap, ge = new WeakMap, Oe = new WeakMap, de = new WeakMap, We = new WeakMap, we = new WeakMap, De = new WeakMap, Pe = new WeakMap, Ae = new WeakMap, Ye = new WeakMap, Ve = new WeakMap, ce = new WeakMap, xe = new WeakMap, Le = new WeakMap, Ce = new WeakMap, ve = new WeakMap, ue = new WeakMap, me = new WeakMap, le = new WeakMap, Se = new WeakMap, ne = new WeakMap, se = new WeakMap, Ie = new WeakMap, he = new WeakMap, Ne = new WeakMap, Ge = new WeakMap, re = new WeakMap, Qe = new WeakMap, ei = new WeakMap, ii = new WeakMap, Hi = new WeakMap, yi = new WeakMap, bi = new WeakMap, Mi = new WeakMap, Ki = new WeakMap, Ui = new WeakMap, Fi = new WeakMap, Ji = new WeakMap, oi = new WeakMap, Ri = new WeakMap, ki = new WeakMap, qi = new WeakMap, fi = new WeakMap, Ti = new WeakMap, Xi = new WeakMap, zi = new WeakMap, Bi = new WeakMap, Ei = new WeakMap, (() => {
        const ie = "function" === typeof Symbol && Symbol.metadata ? Object.create(mH[Symbol.metadata] ?? null) : void 0;
        gi = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Oi = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], ti = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Zi = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], wi = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Di = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Pi = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Ai = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Yi = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Vi = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], ai = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], ci = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], xi = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Li = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Ci = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], vi = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], ui = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], mi = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], li = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Si = [(0, Ze.p)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], ni = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], ji = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], si = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Ii = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Ni = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Gi = [(0, Ze.H)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty", null)], ri = [(0, Ze.p)("ambient"), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], Qi = [(0, Ze.p)("albedo"), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], eH = [(0, Ze.R)("baseWeight"), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], iH = [(0, Ze.R)("baseDiffuseRoughness"), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], HH = [(0, Ze.p)("reflectivity"), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], yH = [(0, Ze.p)("reflection"), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], bH = [(0, Ze.p)("emissive"), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], MH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], KH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], UH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], FH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], JH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], oH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], RH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], kH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], qH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], fH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], TH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], pH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], XH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], zH = [(0, Ze.R)()], BH = [(0, Ze.R)()], EH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], gH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], OH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], dH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], WH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], tH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsLightsDirty")], ZH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], wH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsLightsDirty")], DH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], PH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], AH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], YH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], VH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], aH = [(0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], cH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], xH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], LH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], CH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsTexturesDirty")], vH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], uH = [(0, Ze.R)(), (0, Ze.d)("_markAllSubMeshesAsMiscDirty")], (0, te.i)(ee, null, gi, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "directIntensity" in ee,
            get: ee => ee.directIntensity,
            set: (ee, ie) => {
              ee.directIntensity = ie
            }
          },
          metadata: ie
        }, SH, nH), (0, te.i)(ee, null, Oi, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "emissiveIntensity" in ee,
            get: ee => ee.emissiveIntensity,
            set: (ee, ie) => {
              ee.emissiveIntensity = ie
            }
          },
          metadata: ie
        }, jH, sH), (0, te.i)(ee, null, ti, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "environmentIntensity" in ee,
            get: ee => ee.environmentIntensity,
            set: (ee, ie) => {
              ee.environmentIntensity = ie
            }
          },
          metadata: ie
        }, IH, hH), (0, te.i)(ee, null, Zi, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: ee => "specularIntensity" in ee,
            get: ee => ee.specularIntensity,
            set: (ee, ie) => {
              ee.specularIntensity = ie
            }
          },
          metadata: ie
        }, NH, GH), (0, te.i)(ee, null, wi, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: ee => "disableBumpMap" in ee,
            get: ee => ee.disableBumpMap,
            set: (ee, ie) => {
              ee.disableBumpMap = ie
            }
          },
          metadata: ie
        }, rH, QH), (0, te.i)(ee, null, Di, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "albedoTexture" in ee,
            get: ee => ee.albedoTexture,
            set: (ee, ie) => {
              ee.albedoTexture = ie
            }
          },
          metadata: ie
        }, ey, iy), (0, te.i)(ee, null, Pi, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "baseWeightTexture" in ee,
            get: ee => ee.baseWeightTexture,
            set: (ee, ie) => {
              ee.baseWeightTexture = ie
            }
          },
          metadata: ie
        }, Hy, yy), (0, te.i)(ee, null, Ai, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "baseDiffuseRoughnessTexture" in ee,
            get: ee => ee.baseDiffuseRoughnessTexture,
            set: (ee, ie) => {
              ee.baseDiffuseRoughnessTexture = ie
            }
          },
          metadata: ie
        }, by, My), (0, te.i)(ee, null, Yi, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "ambientTexture" in ee,
            get: ee => ee.ambientTexture,
            set: (ee, ie) => {
              ee.ambientTexture = ie
            }
          },
          metadata: ie
        }, Ky, Uy), (0, te.i)(ee, null, Vi, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: ee => "ambientTextureStrength" in ee,
            get: ee => ee.ambientTextureStrength,
            set: (ee, ie) => {
              ee.ambientTextureStrength = ie
            }
          },
          metadata: ie
        }, Fy, Jy), (0, te.i)(ee, null, ai, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: ee => "ambientTextureImpactOnAnalyticalLights" in ee,
            get: ee => ee.ambientTextureImpactOnAnalyticalLights,
            set: (ee, ie) => {
              ee.ambientTextureImpactOnAnalyticalLights = ie
            }
          },
          metadata: ie
        }, oy, Ry), (0, te.i)(ee, null, ci, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "opacityTexture" in ee,
            get: ee => ee.opacityTexture,
            set: (ee, ie) => {
              ee.opacityTexture = ie
            }
          },
          metadata: ie
        }, ky, qy), (0, te.i)(ee, null, xi, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "reflectionTexture" in ee,
            get: ee => ee.reflectionTexture,
            set: (ee, ie) => {
              ee.reflectionTexture = ie
            }
          },
          metadata: ie
        }, fy, Ty), (0, te.i)(ee, null, Li, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "emissiveTexture" in ee,
            get: ee => ee.emissiveTexture,
            set: (ee, ie) => {
              ee.emissiveTexture = ie
            }
          },
          metadata: ie
        }, py, Xy), (0, te.i)(ee, null, Ci, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "reflectivityTexture" in ee,
            get: ee => ee.reflectivityTexture,
            set: (ee, ie) => {
              ee.reflectivityTexture = ie
            }
          },
          metadata: ie
        }, zy, By), (0, te.i)(ee, null, vi, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "metallicTexture" in ee,
            get: ee => ee.metallicTexture,
            set: (ee, ie) => {
              ee.metallicTexture = ie
            }
          },
          metadata: ie
        }, Ey, gy), (0, te.i)(ee, null, ui, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: ee => "metallic" in ee,
            get: ee => ee.metallic,
            set: (ee, ie) => {
              ee.metallic = ie
            }
          },
          metadata: ie
        }, Oy, dy), (0, te.i)(ee, null, mi, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: ee => "roughness" in ee,
            get: ee => ee.roughness,
            set: (ee, ie) => {
              ee.roughness = ie
            }
          },
          metadata: ie
        }, Wy, ty), (0, te.i)(ee, null, li, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: ee => "metallicF0Factor" in ee,
            get: ee => ee.metallicF0Factor,
            set: (ee, ie) => {
              ee.metallicF0Factor = ie
            }
          },
          metadata: ie
        }, Zy, wy), (0, te.i)(ee, null, Si, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: ee => "metallicReflectanceColor" in ee,
            get: ee => ee.metallicReflectanceColor,
            set: (ee, ie) => {
              ee.metallicReflectanceColor = ie
            }
          },
          metadata: ie
        }, Dy, Py), (0, te.i)(ee, null, ni, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "useOnlyMetallicFromMetallicReflectanceTexture" in ee,
            get: ee => ee.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (ee, ie) => {
              ee.useOnlyMetallicFromMetallicReflectanceTexture = ie
            }
          },
          metadata: ie
        }, Ay, Yy), (0, te.i)(ee, null, ji, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "metallicReflectanceTexture" in ee,
            get: ee => ee.metallicReflectanceTexture,
            set: (ee, ie) => {
              ee.metallicReflectanceTexture = ie
            }
          },
          metadata: ie
        }, Vy, ay), (0, te.i)(ee, null, si, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "reflectanceTexture" in ee,
            get: ee => ee.reflectanceTexture,
            set: (ee, ie) => {
              ee.reflectanceTexture = ie
            }
          },
          metadata: ie
        }, cy, xy), (0, te.i)(ee, null, Ii, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "microSurfaceTexture" in ee,
            get: ee => ee.microSurfaceTexture,
            set: (ee, ie) => {
              ee.microSurfaceTexture = ie
            }
          },
          metadata: ie
        }, Ly, Cy), (0, te.i)(ee, null, Ni, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "bumpTexture" in ee,
            get: ee => ee.bumpTexture,
            set: (ee, ie) => {
              ee.bumpTexture = ie
            }
          },
          metadata: ie
        }, vy, uy), (0, te.i)(ee, null, Gi, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "lightmapTexture" in ee,
            get: ee => ee.lightmapTexture,
            set: (ee, ie) => {
              ee.lightmapTexture = ie
            }
          },
          metadata: ie
        }, my, ly), (0, te.i)(ee, null, ri, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: ee => "ambientColor" in ee,
            get: ee => ee.ambientColor,
            set: (ee, ie) => {
              ee.ambientColor = ie
            }
          },
          metadata: ie
        }, Sy, ny), (0, te.i)(ee, null, Qi, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: ee => "albedoColor" in ee,
            get: ee => ee.albedoColor,
            set: (ee, ie) => {
              ee.albedoColor = ie
            }
          },
          metadata: ie
        }, jy, sy), (0, te.i)(ee, null, eH, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: ee => "baseWeight" in ee,
            get: ee => ee.baseWeight,
            set: (ee, ie) => {
              ee.baseWeight = ie
            }
          },
          metadata: ie
        }, Iy, hy), (0, te.i)(ee, null, iH, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: ee => "baseDiffuseRoughness" in ee,
            get: ee => ee.baseDiffuseRoughness,
            set: (ee, ie) => {
              ee.baseDiffuseRoughness = ie
            }
          },
          metadata: ie
        }, Ny, Gy), (0, te.i)(ee, null, HH, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: ee => "reflectivityColor" in ee,
            get: ee => ee.reflectivityColor,
            set: (ee, ie) => {
              ee.reflectivityColor = ie
            }
          },
          metadata: ie
        }, ry, Qy), (0, te.i)(ee, null, yH, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: ee => "reflectionColor" in ee,
            get: ee => ee.reflectionColor,
            set: (ee, ie) => {
              ee.reflectionColor = ie
            }
          },
          metadata: ie
        }, eb, ib), (0, te.i)(ee, null, bH, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: ee => "emissiveColor" in ee,
            get: ee => ee.emissiveColor,
            set: (ee, ie) => {
              ee.emissiveColor = ie
            }
          },
          metadata: ie
        }, Hb, yb), (0, te.i)(ee, null, MH, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: ee => "microSurface" in ee,
            get: ee => ee.microSurface,
            set: (ee, ie) => {
              ee.microSurface = ie
            }
          },
          metadata: ie
        }, bb, Mb), (0, te.i)(ee, null, KH, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: ee => "useLightmapAsShadowmap" in ee,
            get: ee => ee.useLightmapAsShadowmap,
            set: (ee, ie) => {
              ee.useLightmapAsShadowmap = ie
            }
          },
          metadata: ie
        }, Kb, Ub), (0, te.i)(ee, null, UH, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "useAlphaFromAlbedoTexture" in ee,
            get: ee => ee.useAlphaFromAlbedoTexture,
            set: (ee, ie) => {
              ee.useAlphaFromAlbedoTexture = ie
            }
          },
          metadata: ie
        }, Fb, Jb), (0, te.i)(ee, null, FH, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: ee => "forceAlphaTest" in ee,
            get: ee => ee.forceAlphaTest,
            set: (ee, ie) => {
              ee.forceAlphaTest = ie
            }
          },
          metadata: ie
        }, ob, Rb), (0, te.i)(ee, null, JH, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: ee => "alphaCutOff" in ee,
            get: ee => ee.alphaCutOff,
            set: (ee, ie) => {
              ee.alphaCutOff = ie
            }
          },
          metadata: ie
        }, kb, qb), (0, te.i)(ee, null, oH, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: ee => "useSpecularOverAlpha" in ee,
            get: ee => ee.useSpecularOverAlpha,
            set: (ee, ie) => {
              ee.useSpecularOverAlpha = ie
            }
          },
          metadata: ie
        }, fb, Tb), (0, te.i)(ee, null, RH, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: ee => "useMicroSurfaceFromReflectivityMapAlpha" in ee,
            get: ee => ee.useMicroSurfaceFromReflectivityMapAlpha,
            set: (ee, ie) => {
              ee.useMicroSurfaceFromReflectivityMapAlpha = ie
            }
          },
          metadata: ie
        }, pb, Xb), (0, te.i)(ee, null, kH, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: ee => "useRoughnessFromMetallicTextureAlpha" in ee,
            get: ee => ee.useRoughnessFromMetallicTextureAlpha,
            set: (ee, ie) => {
              ee.useRoughnessFromMetallicTextureAlpha = ie
            }
          },
          metadata: ie
        }, zb, Bb), (0, te.i)(ee, null, qH, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: ee => "useRoughnessFromMetallicTextureGreen" in ee,
            get: ee => ee.useRoughnessFromMetallicTextureGreen,
            set: (ee, ie) => {
              ee.useRoughnessFromMetallicTextureGreen = ie
            }
          },
          metadata: ie
        }, Eb, gb), (0, te.i)(ee, null, fH, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: ee => "useMetallnessFromMetallicTextureBlue" in ee,
            get: ee => ee.useMetallnessFromMetallicTextureBlue,
            set: (ee, ie) => {
              ee.useMetallnessFromMetallicTextureBlue = ie
            }
          },
          metadata: ie
        }, Ob, db), (0, te.i)(ee, null, TH, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: ee => "useAmbientOcclusionFromMetallicTextureRed" in ee,
            get: ee => ee.useAmbientOcclusionFromMetallicTextureRed,
            set: (ee, ie) => {
              ee.useAmbientOcclusionFromMetallicTextureRed = ie
            }
          },
          metadata: ie
        }, Wb, tb), (0, te.i)(ee, null, pH, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: ee => "useAmbientInGrayScale" in ee,
            get: ee => ee.useAmbientInGrayScale,
            set: (ee, ie) => {
              ee.useAmbientInGrayScale = ie
            }
          },
          metadata: ie
        }, Zb, wb), (0, te.i)(ee, null, XH, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: ee => "useAutoMicroSurfaceFromReflectivityMap" in ee,
            get: ee => ee.useAutoMicroSurfaceFromReflectivityMap,
            set: (ee, ie) => {
              ee.useAutoMicroSurfaceFromReflectivityMap = ie
            }
          },
          metadata: ie
        }, Db, Pb), (0, te.i)(ee, null, zH, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: ee => "usePhysicalLightFalloff" in ee,
            get: ee => ee.usePhysicalLightFalloff
          },
          metadata: ie
        }, null, lH), (0, te.i)(ee, null, BH, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: ee => "useGLTFLightFalloff" in ee,
            get: ee => ee.useGLTFLightFalloff
          },
          metadata: ie
        }, null, lH), (0, te.i)(ee, null, EH, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: ee => "useRadianceOverAlpha" in ee,
            get: ee => ee.useRadianceOverAlpha,
            set: (ee, ie) => {
              ee.useRadianceOverAlpha = ie
            }
          },
          metadata: ie
        }, Ab, Yb), (0, te.i)(ee, null, gH, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: ee => "useObjectSpaceNormalMap" in ee,
            get: ee => ee.useObjectSpaceNormalMap,
            set: (ee, ie) => {
              ee.useObjectSpaceNormalMap = ie
            }
          },
          metadata: ie
        }, Vb, ab), (0, te.i)(ee, null, OH, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: ee => "useParallax" in ee,
            get: ee => ee.useParallax,
            set: (ee, ie) => {
              ee.useParallax = ie
            }
          },
          metadata: ie
        }, cb, xb), (0, te.i)(ee, null, dH, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: ee => "useParallaxOcclusion" in ee,
            get: ee => ee.useParallaxOcclusion,
            set: (ee, ie) => {
              ee.useParallaxOcclusion = ie
            }
          },
          metadata: ie
        }, Lb, Cb), (0, te.i)(ee, null, WH, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: ee => "parallaxScaleBias" in ee,
            get: ee => ee.parallaxScaleBias,
            set: (ee, ie) => {
              ee.parallaxScaleBias = ie
            }
          },
          metadata: ie
        }, vb, ub), (0, te.i)(ee, null, tH, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: ee => "disableLighting" in ee,
            get: ee => ee.disableLighting,
            set: (ee, ie) => {
              ee.disableLighting = ie
            }
          },
          metadata: ie
        }, mb, lb), (0, te.i)(ee, null, ZH, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: ee => "forceIrradianceInFragment" in ee,
            get: ee => ee.forceIrradianceInFragment,
            set: (ee, ie) => {
              ee.forceIrradianceInFragment = ie
            }
          },
          metadata: ie
        }, Sb, nb), (0, te.i)(ee, null, wH, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: ee => "maxSimultaneousLights" in ee,
            get: ee => ee.maxSimultaneousLights,
            set: (ee, ie) => {
              ee.maxSimultaneousLights = ie
            }
          },
          metadata: ie
        }, jb, sb), (0, te.i)(ee, null, DH, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: ee => "invertNormalMapX" in ee,
            get: ee => ee.invertNormalMapX,
            set: (ee, ie) => {
              ee.invertNormalMapX = ie
            }
          },
          metadata: ie
        }, Ib, hb), (0, te.i)(ee, null, PH, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: ee => "invertNormalMapY" in ee,
            get: ee => ee.invertNormalMapY,
            set: (ee, ie) => {
              ee.invertNormalMapY = ie
            }
          },
          metadata: ie
        }, Nb, Gb), (0, te.i)(ee, null, AH, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: ee => "twoSidedLighting" in ee,
            get: ee => ee.twoSidedLighting,
            set: (ee, ie) => {
              ee.twoSidedLighting = ie
            }
          },
          metadata: ie
        }, rb, Qb), (0, te.i)(ee, null, YH, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: ee => "useAlphaFresnel" in ee,
            get: ee => ee.useAlphaFresnel,
            set: (ee, ie) => {
              ee.useAlphaFresnel = ie
            }
          },
          metadata: ie
        }, eM, iM), (0, te.i)(ee, null, VH, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: ee => "useLinearAlphaFresnel" in ee,
            get: ee => ee.useLinearAlphaFresnel,
            set: (ee, ie) => {
              ee.useLinearAlphaFresnel = ie
            }
          },
          metadata: ie
        }, HM, yM), (0, te.i)(ee, null, aH, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: ee => "environmentBRDFTexture" in ee,
            get: ee => ee.environmentBRDFTexture,
            set: (ee, ie) => {
              ee.environmentBRDFTexture = ie
            }
          },
          metadata: ie
        }, bM, MM), (0, te.i)(ee, null, cH, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: ee => "forceNormalForward" in ee,
            get: ee => ee.forceNormalForward,
            set: (ee, ie) => {
              ee.forceNormalForward = ie
            }
          },
          metadata: ie
        }, KM, UM), (0, te.i)(ee, null, xH, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: ee => "enableSpecularAntiAliasing" in ee,
            get: ee => ee.enableSpecularAntiAliasing,
            set: (ee, ie) => {
              ee.enableSpecularAntiAliasing = ie
            }
          },
          metadata: ie
        }, FM, JM), (0, te.i)(ee, null, LH, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: ee => "useHorizonOcclusion" in ee,
            get: ee => ee.useHorizonOcclusion,
            set: (ee, ie) => {
              ee.useHorizonOcclusion = ie
            }
          },
          metadata: ie
        }, oM, RM), (0, te.i)(ee, null, CH, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: ee => "useRadianceOcclusion" in ee,
            get: ee => ee.useRadianceOcclusion,
            set: (ee, ie) => {
              ee.useRadianceOcclusion = ie
            }
          },
          metadata: ie
        }, kM, qM), (0, te.i)(ee, null, vH, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: ee => "unlit" in ee,
            get: ee => ee.unlit,
            set: (ee, ie) => {
              ee.unlit = ie
            }
          },
          metadata: ie
        }, fM, TM), (0, te.i)(ee, null, uH, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: ee => "applyDecalMapAfterDetailMap" in ee,
            get: ee => ee.applyDecalMapAfterDetailMap,
            set: (ee, ie) => {
              ee.applyDecalMapAfterDetailMap = ie
            }
          },
          metadata: ie
        }, pM, XM), ie && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie
        })
      })(), ee.PBRMATERIAL_OPAQUE = di.PBRMATERIAL_OPAQUE, ee.PBRMATERIAL_ALPHATEST = di.PBRMATERIAL_ALPHATEST, ee.PBRMATERIAL_ALPHABLEND = di.PBRMATERIAL_ALPHABLEND, ee.PBRMATERIAL_ALPHATESTANDBLEND = di.PBRMATERIAL_ALPHATESTANDBLEND, ee.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = di.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, ee
    })();
    const Cb = "KHR_materials_diffuse_transmission";

    function vb(ee, ie) {
      const He = ie.subSurface;
      let ye = null;
      return He.translucencyIntensityTexture ? ye = He.translucencyIntensityTexture : He.thicknessTexture && He.useMaskFromThicknessTexture && (ye = He.thicknessTexture), ye && !He.useGltfStyleTextures ? (we.e.Warn(`${ee}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${ie.name}`, 1), null) : ye
    }
    class ub {
      constructor(ee) {
        this.name = Cb, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = ee
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(ee, ie, He) {
        const ye = [];
        if (He instanceof Lb && this._isExtensionEnabled(He)) {
          const ie = vb(ee, He);
          return ie && ye.push(ie), He.subSurface.translucencyColorTexture && ye.push(He.subSurface.translucencyColorTexture), ye
        }
        return ye
      }
      _isExtensionEnabled(ee) {
        if (ee.unlit) return !1;
        const ie = ee.subSurface;
        return !!ie.isTranslucencyEnabled && (!ee.unlit && !ie.useAlbedoToTintTranslucency && ie.useGltfStyleTextures && 1 === ie.volumeIndexOfRefraction && 0 === ie.minimumThickness && 0 === ie.maximumThickness)
      }
      postExportMaterialAsync(ee, ie, He) {
        return new Promise((ye => {
          if (He instanceof Lb && this._isExtensionEnabled(He)) {
            this._wasUsed = !0;
            const ye = He.subSurface,
              be = vb(ee, He),
              Me = 0 == ye.translucencyIntensity ? void 0 : ye.translucencyIntensity,
              Ke = this._exporter._materialExporter.getTextureInfo(be) ?? void 0,
              Ue = !ye.translucencyColor || ye.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : ye.translucencyColor.Qbe(),
              Fe = this._exporter._materialExporter.getTextureInfo(ye.translucencyColorTexture) ?? void 0,
              Je = {
                diffuseTransmissionFactor: Me,
                diffuseTransmissionTexture: Ke,
                diffuseTransmissionColorFactor: Ue,
                diffuseTransmissionColorTexture: Fe
              };
            (Ke || Fe) && this._exporter._materialNeedsUVsSet.add(He), ie.extensions = ie.extensions || {}, ie.extensions[Cb] = Je
          }
          ye(ie)
        }))
      }
    }
    let mb = !1;

    function lb() {
      mb || (mb = !0, xy.RegisterExtension(Cb, (ee => new ub(ee))))
    }
    lb();
    const Sb = "KHR_materials_dispersion";
    class nb {
      constructor() {
        this.name = Sb, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(ee) {
        if (ee.unlit) return !1;
        const ie = ee.subSurface;
        return !(!ie.isRefractionEnabled && !ie.isDispersionEnabled)
      }
      postExportMaterialAsync(ee, ie, He) {
        return new Promise((ee => {
          if (He instanceof Lb && this._isExtensionEnabled(He)) {
            this._wasUsed = !0;
            const ee = {
              dispersion: He.subSurface.dispersion
            };
            ie.extensions = ie.extensions || {}, ie.extensions[Sb] = ee
          }
          ee(ie)
        }))
      }
    }
    let jb = !1;

    function sb() {
      jb || (jb = !0, xy.RegisterExtension(Sb, (() => new nb)))
    }
    sb();
    const Ib = "KHR_materials_emissive_strength";
    class hb {
      constructor() {
        this.name = Ib, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(ee, ie, He) {
        return await new Promise((ee => {
          if (!(He instanceof Lb)) return ee(ie);
          const ye = He.emissiveColor.scale(He.emissiveIntensity),
            be = Math.max(...ye.Qbe());
          if (be > 1) {
            ie.emissiveFactor = ye.scale(1 / be).Qbe(), this._wasUsed = !0;
            const ee = {
              emissiveStrength: be
            };
            ie.extensions || (ie.extensions = {}), ie.extensions[Ib] = ee
          } else ie.emissiveFactor = ye.Qbe();
          return ee(ie)
        }))
      }
    }
    let Nb = !1;

    function Gb() {
      Nb || (Nb = !0, xy.RegisterExtension(Ib, (() => new hb)))
    }
    Gb();
    const rb = "KHR_materials_ior";
    class Qb {
      constructor() {
        this.name = rb, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(ee) {
        return !ee.unlit && (ee instanceof eH ? 1.5 != ee.specularIor : ee instanceof Lb && (void 0 != ee.indexOfRefraction && 1.5 != ee.indexOfRefraction))
      }
      postExportMaterialAsync(ee, ie, He) {
        return new Promise((ee => {
          if (He instanceof Lb && this._isExtensionEnabled(He)) {
            this._wasUsed = !0;
            const ee = {
              ior: He.indexOfRefraction
            };
            ie.extensions = ie.extensions || {}, ie.extensions[rb] = ee
          } else if (He instanceof eH && this._isExtensionEnabled(He)) {
            this._wasUsed = !0;
            const ee = {
              ior: He.specularIor
            };
            ie.extensions = ie.extensions || {}, ie.extensions[rb] = ee
          }
          ee(ie)
        }))
      }
    }
    let eM = !1;

    function iM() {
      eM || (eM = !0, xy.RegisterExtension(rb, (() => new Qb)))
    }
    iM();
    const HM = "KHR_materials_iridescence";
    class yM {
      constructor(ee) {
        this.name = HM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = ee
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(ee, ie, He) {
        const ye = [];
        if (He instanceof di) {
          if (He.iridescence.isEnabled) return He.iridescence.texture && ye.push(He.iridescence.texture), He.iridescence.thicknessTexture && He.iridescence.thicknessTexture !== He.iridescence.texture && ye.push(He.iridescence.thicknessTexture), ye
        } else if (He instanceof eH && He.thinFilmWeight > 0) return He.thinFilmWeightTexture && ye.push(He.thinFilmWeightTexture), He.thinFilmThicknessTexture && He.thinFilmThicknessTexture !== He.thinFilmWeightTexture && ye.push(He.thinFilmThicknessTexture), ye;
        return []
      }
      postExportMaterialAsync(ee, ie, He) {
        return new Promise((ee => {
          if (He instanceof di) {
            if (!He.iridescence.isEnabled) return void ee(ie);
            this._wasUsed = !0, ie.extensions = ie.extensions || {};
            const ye = this._exporter._materialExporter.getTextureInfo(He.iridescence.texture),
              be = this._exporter._materialExporter.getTextureInfo(He.iridescence.thicknessTexture),
              Me = {
                iridescenceFactor: He.iridescence.intensity,
                iridescenceIor: He.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: He.iridescence.minimumThickness,
                iridescenceThicknessMaximum: He.iridescence.maximumThickness,
                iridescenceTexture: ye ?? void 0,
                iridescenceThicknessTexture: be ?? void 0
              };
            null === Me.iridescenceTexture && null === Me.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(He), ie.extensions[HM] = Me
          } else if (He instanceof eH) {
            if (He.thinFilmWeight <= 0) return void ee(ie);
            this._wasUsed = !0, ie.extensions = ie.extensions || {};
            const ye = this._exporter._materialExporter.getTextureInfo(He.thinFilmWeightTexture),
              be = this._exporter._materialExporter.getTextureInfo(He.thinFilmThicknessTexture),
              Me = {
                iridescenceFactor: He.thinFilmWeight,
                iridescenceIor: He.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * He.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * He.thinFilmThickness,
                iridescenceTexture: ye ?? void 0,
                iridescenceThicknessTexture: be ?? void 0
              };
            null === Me.iridescenceTexture && null === Me.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(He), ie.extensions[HM] = Me
          }
          ee(ie)
        }))
      }
    }
    let bM = !1;

    function MM() {
      bM || (bM = !0, xy.RegisterExtension(HM, (ee => new yM(ee))))
    }
    MM();
    const KM = "KHR_materials_sheen";
    class UM {
      constructor(ee) {
        this.name = KM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = ee
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(ee, ie, He) {
        return He instanceof Lb && He.sheen.isEnabled && He.sheen.texture ? [He.sheen.texture] : []
      }
      async postExportMaterialAsync(ee, ie, He) {
        return await new Promise((ee => {
          if (He instanceof Lb) {
            if (!He.sheen.isEnabled) return void ee(ie);
            this._wasUsed = !0, null == ie.extensions && (ie.extensions = {});
            const ye = {
              sheenColorFactor: He.sheen.color.Qbe(),
              sheenRoughnessFactor: He.sheen.roughness ?? 0
            };
            null === ye.sheenColorTexture && null === ye.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(He), He.sheen.texture && (ye.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(He.sheen.texture) ?? void 0), He.sheen.textureRoughness && !He.sheen.useRoughnessFromMainTexture ? ye.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(He.sheen.textureRoughness) ?? void 0 : He.sheen.texture && He.sheen.useRoughnessFromMainTexture && (ye.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(He.sheen.texture) ?? void 0), ie.extensions[KM] = ye
          }
          ee(ie)
        }))
      }
    }
    let FM = !1;

    function JM() {
      FM || (FM = !0, xy.RegisterExtension(KM, (ee => new UM(ee))))
    }
    JM();
    const oM = "KHR_materials_fuzz";

    function RM(ee, ie) {
      const He = new Pe.e(ie.name, ie.Xx());
      return He._texture = ee, He.coordinatesIndex = ie.coordinatesIndex, ie instanceof Pe.e && (He.uOffset = ie.uOffset, He.vOffset = ie.vOffset, He.uScale = ie.uScale, He.vScale = ie.vScale, He.wAng = ie.wAng), He.wrapU = ie.wrapU, He.wrapV = ie.wrapV, He
    }
    class kM {
      constructor(ee) {
        this.name = oM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = ee
      }
      dispose() {
        for (const ee of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[ee].dispose()
        }
        this._mergedTexturesMap = {};
        for (const ee of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[ee].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(ee, ie, He) {
        if (He instanceof eH) {
          const ee = [];
          if (He.fuzzWeight > 0) {
            He.fuzzWeightTexture && ee.push(He.fuzzWeightTexture);
            let ie = !1;
            if (He.fuzzRoughnessTexture && (He._useFuzzRoughnessFromTextureAlpha ? ee.push(He.fuzzRoughnessTexture) : ie = !0), He.fuzzColorTexture && !ie && ee.push(He.fuzzColorTexture), ie) {
              const ie = function(ee) {
                const ie = ee.fuzzColorTexture,
                  He = ie && ie.getInternalTexture() ? ie.getInternalTexture().uniqueId : "NoFuzzColor",
                  ye = ee.fuzzRoughnessTexture;
                return `FuzzColor_${He}_FuzzRoughness_${ye&&ye.getInternalTexture()?ye.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(He);
              if (!this._cachedInternalTexturesMap[ie]) {
                const ee = await async function(ee) {
                  const ie = ee.Xx(),
                    He = ee.fuzzColorTexture,
                    ye = ee.fuzzRoughnessTexture;
                  return He || ye ? (await FH("FuzzTexture", RH(He ? JH(He, 0) : oH(1), He ? JH(He, 1) : oH(1), He ? JH(He, 2) : oH(1), ye ? JH(ye, ee._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : oH(1)), ie)).getInternalTexture() : null
                }(He);
                ee && (this._cachedInternalTexturesMap[ie] = ee)
              }
              this._cachedInternalTexturesMap[ie] && (He.fuzzColorTexture && (this._mergedTexturesMap[He.fuzzColorTexture.uniqueId] = RM(this._cachedInternalTexturesMap[ie], He.fuzzColorTexture), ee.push(this._mergedTexturesMap[He.fuzzColorTexture.uniqueId])), He.fuzzRoughnessTexture && (this._mergedTexturesMap[He.fuzzRoughnessTexture.uniqueId] = RM(this._cachedInternalTexturesMap[ie], He.fuzzRoughnessTexture), ee.push(this._mergedTexturesMap[He.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return ee
        }
        return []
      }
      async postExportMaterialAsync(ee, ie, He) {
        return await new Promise((ee => {
          if (He instanceof eH) {
            if (0 == He.fuzzWeight) return void ee(ie);
            this._wasUsed = !0, null == ie.extensions && (ie.extensions = {});
            const ye = {
              fuzzFactor: He.fuzzWeight,
              fuzzColorFactor: He.fuzzColor.Qbe(),
              fuzzRoughnessFactor: He.fuzzRoughness
            };
            let be, Me;
            He.fuzzWeightTexture && (ye.fuzzTexture = this._exporter._materialExporter.getTextureInfo(He.fuzzWeightTexture) ?? void 0), He.fuzzColorTexture && (be = this._mergedTexturesMap[He.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[He.fuzzColorTexture.uniqueId] : He.fuzzColorTexture, ye.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(be) ?? void 0), He.fuzzRoughnessTexture && (Me = this._mergedTexturesMap[He.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[He.fuzzRoughnessTexture.uniqueId] : He.fuzzRoughnessTexture, ye.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Me) ?? void 0), null === ye.fuzzColorTexture && null === ye.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(He), ie.extensions[oM] = ye
          }
          ee(ie)
        }))
      }
    }
    let qM = !1;

    function fM() {
      qM || (qM = !0, xy.RegisterExtension(oM, (ee => new kM(ee))))
    }
    fM();
    const TM = "KHR_materials_specular";
    class pM {
      constructor(ee) {
        this.name = TM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = ee
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(ee, ie, He) {
        const ye = [];
        return He instanceof Lb && this._isExtensionEnabled(He) ? (He.metallicReflectanceTexture && ye.push(He.metallicReflectanceTexture), He.reflectanceTexture && ye.push(He.reflectanceTexture), ye) : ye
      }
      _isExtensionEnabled(ee) {
        return !ee.unlit && (void 0 != ee.metallicF0Factor && 1 != ee.metallicF0Factor || void 0 != ee.metallicReflectanceColor && !ee.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(ee))
      }
      _hasTexturesExtension(ee) {
        return null != ee.metallicReflectanceTexture || null != ee.reflectanceTexture
      }
      postExportMaterialAsync(ee, ie, He) {
        return new Promise((ee => {
          var ye;
          if (He instanceof Lb && this._isExtensionEnabled(He)) {
            this._wasUsed = !0, ie.extensions = ie.extensions || {};
            const ee = this._exporter._materialExporter.getTextureInfo(He.metallicReflectanceTexture) ?? void 0,
              ye = this._exporter._materialExporter.getTextureInfo(He.reflectanceTexture) ?? void 0,
              be = {
                specularFactor: 1 == He.metallicF0Factor ? void 0 : He.metallicF0Factor,
                specularTexture: ee,
                specularColorFactor: He.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : He.metallicReflectanceColor.Qbe(),
                specularColorTexture: ye
              };
            this._hasTexturesExtension(He) && this._exporter._materialNeedsUVsSet.add(He), ie.extensions[TM] = be
          } else if (He instanceof eH) {
            ie.extensions = ie.extensions || {};
            const be = this._exporter._materialExporter.getTextureInfo(He.specularWeightTexture) ?? void 0,
              Me = this._exporter._materialExporter.getTextureInfo(He.specularColorTexture) ?? void 0,
              Ke = 1 == He.specularWeight ? void 0 : He.specularWeight,
              Ue = He.specularColor.equalsFloats(1, 1, 1) ? void 0 : He.specularColor.Qbe();
            if (!Me && !be && void 0 === Ke && void 0 === Ue) return ee(ie);
            this._wasUsed = !0;
            const Fe = {
                specularEdgeColorEnabled: !0
              },
              Je = {
                specularFactor: Ke,
                specularTexture: be,
                specularColorFactor: Ue,
                specularColorTexture: Me,
                extensions: {}
              };
            Je.extensions.EXT_materials_specular_edge_color = Fe, (ye = this._exporter._glTF).extensionsUsed || (ye.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (be || Me) && this._exporter._materialNeedsUVsSet.add(He), ie.extensions[TM] = Je
          }
          ee(ie)
        }))
      }
    }
    let XM = !1;

    function zM() {
      XM || (XM = !0, xy.RegisterExtension(TM, (ee => new pM(ee))))
    }
    zM();
    const BM = "KHR_materials_transmission";
    class EM {
      constructor(ee) {
        this.name = BM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = ee
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(ee, ie, He) {
        const ye = [];
        if (He instanceof Lb) {
          if (this._isExtensionEnabled(He)) return He.subSurface.refractionIntensityTexture && He.subSurface.useGltfStyleTextures && ye.push(He.subSurface.refractionIntensityTexture), ye
        } else He instanceof eH && (He.transmissionWeight > 0 && He.transmissionWeightTexture && (ye.push(He.transmissionWeightTexture), He.transmissionColorTexture && ye.push(He.transmissionColorTexture)), He.subsurfaceWeight > 0 && He.subsurfaceWeightTexture && ye.push(He.subsurfaceWeightTexture));
        return ye
      }
      _isExtensionEnabled(ee) {
        if (ee instanceof eH && !ee.unlit) return ee.transmissionWeight > 0 || ee.subsurfaceWeight > 0;
        if (ee instanceof Lb && !ee.unlit) {
          const ie = ee.subSurface;
          return ie.isRefractionEnabled && void 0 != ie.refractionIntensity && 0 != ie.refractionIntensity || null != ie.refractionIntensityTexture && ie.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(ee, ie, He) {
        if (!this._isExtensionEnabled(He)) return ie;
        if (He instanceof Lb) {
          this._wasUsed = !0;
          const ye = He.subSurface,
            be = {
              transmissionFactor: 0 === ye.refractionIntensity ? void 0 : ye.refractionIntensity
            };
          if (ye.refractionIntensityTexture)
            if (ye.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(He);
              const ee = this._exporter._materialExporter.getTextureInfo(ye.refractionIntensityTexture);
              ee && (be.transmissionTexture = ee)
            } else we.e.Warn(`${ee}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          ie.extensions || (ie.extensions = {}), ie.extensions[BM] = be
        } else if (He instanceof eH) {
          this._wasUsed = !0;
          const ee = {
            transmissionFactor: (1 - He.transmissionWeight) * He.subsurfaceWeight + He.transmissionWeight
          };
          if (He.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(He);
            const ie = this._exporter._materialExporter.getTextureInfo(He.transmissionWeightTexture);
            ie && (ee.transmissionTexture = ie)
          } else if (He.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(He);
            const ie = this._exporter._materialExporter.getTextureInfo(He.subsurfaceWeightTexture);
            ie && (ee.transmissionTexture = ie)
          }
          if (0 == He.transmissionDepth && (!He.transmissionColor.equals(je.c.White()) || He.transmissionColorTexture) && ie.pbrMetallicRoughness && (ie.pbrMetallicRoughness.baseColorFactor || (ie.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), ie.pbrMetallicRoughness.baseColorFactor[0] *= He.transmissionColor.r, ie.pbrMetallicRoughness.baseColorFactor[1] *= He.transmissionColor.g, ie.pbrMetallicRoughness.baseColorFactor[2] *= He.transmissionColor.b, He.transmissionColorTexture && !ie.pbrMetallicRoughness.baseColorTexture)) {
            const ee = this._exporter._materialExporter.getTextureInfo(He.transmissionColorTexture);
            ee && (ie.pbrMetallicRoughness.baseColorTexture = ee, this._exporter._materialNeedsUVsSet.add(He))
          }
          ie.extensions || (ie.extensions = {}), ie.extensions[BM] = ee
        }
        return ie
      }
    }
    let gM = !1;

    function OM() {
      gM || (gM = !0, xy.RegisterExtension(BM, (ee => new EM(ee))))
    }
    OM();
    var dM = He(41382);
    const WM = "KHR_materials_unlit";
    class tM {
      constructor() {
        this.name = WM, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(ee, ie, He) {
        return new Promise((ee => {
          let ye = !1;
          He instanceof Lb ? ye = He.unlit : He instanceof dM.h && (ye = He.disableLighting), ye && (this._wasUsed = !0, null == ie.extensions && (ie.extensions = {}), ie.extensions[WM] = {}), ee(ie)
        }))
      }
    }
    let ZM = !1;

    function wM() {
      ZM || (ZM = !0, xy.RegisterExtension(WM, (() => new tM)))
    }
    wM();
    const DM = "KHR_materials_volume";
    class PM {
      constructor(ee) {
        this.name = DM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = ee
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(ee, ie, He) {
        const ye = [];
        if (He instanceof Lb) {
          if (this._isExtensionEnabled(He)) return He.subSurface.thicknessTexture && ye.push(He.subSurface.thicknessTexture), ye
        } else He instanceof eH && (He.transmissionWeight > 0 || He.subsurfaceWeight > 0) && He.geometryThicknessTexture && ye.push(He.geometryThicknessTexture);
        return ye
      }
      _isExtensionEnabled(ee) {
        if (ee.unlit) return !1;
        const ie = ee.subSurface;
        return !(!ie.isRefractionEnabled && !ie.isTranslucencyEnabled) && (void 0 != ie.maximumThickness && 0 != ie.maximumThickness || void 0 != ie.tintColorAtDistance && ie.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != ie.tintColor && ie.tintColor != je.c.White() || this._hasTexturesExtension(ee))
      }
      _hasTexturesExtension(ee) {
        return null != ee.subSurface.thicknessTexture
      }
      postExportMaterialAsync(ee, ie, He) {
        return new Promise((ee => {
          if (He instanceof Lb && this._isExtensionEnabled(He)) {
            this._wasUsed = !0;
            const ee = He.subSurface,
              ye = {
                thicknessFactor: 0 == ee.maximumThickness ? void 0 : ee.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(ee.thicknessTexture) ?? void 0,
                attenuationDistance: ee.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : ee.tintColorAtDistance,
                attenuationColor: ee.tintColor.equalsFloats(1, 1, 1) ? void 0 : ee.tintColor.Qbe()
              };
            this._hasTexturesExtension(He) && this._exporter._materialNeedsUVsSet.add(He), ie.extensions = ie.extensions || {}, ie.extensions[DM] = ye
          } else if (He instanceof eH) {
            const ee = He.transmissionWeight > 0 && !He.geometryThinWalled,
              ye = He.subsurfaceWeight > 0 && !He.geometryThinWalled;
            if (ee || ye) {
              this._wasUsed = !0;
              const be = He.geometryThickness,
                Me = this._exporter._materialExporter.getTextureInfo(He.geometryThicknessTexture) ?? void 0;
              let Ke;
              Me && this._exporter._materialNeedsUVsSet.add(He);
              const Ue = je.c.White().Qbe();
              if (ee && He.transmissionDepth > 0) {
                const ee = 1 / He.transmissionDepth;
                let ie = new Ce.p(-Math.log(He.transmissionColor.r) * ee, -Math.log(He.transmissionColor.g) * ee, -Math.log(He.transmissionColor.b) * ee);
                const ye = new Ce.p(He.transmissionScatter.r * ee, He.transmissionScatter.g * ee, He.transmissionScatter.b * ee),
                  be = ie.subtract(ye),
                  Me = Math.min(be.x, be.y, be.z);
                Me < 0 && (be.x = be.x - Me, be.y = be.y - Me, be.z = be.z - Me), ie = be.add(ye);
                Ke = 1 / Math.max(ie.x, ie.y, ie.z), Ue[0] = Math.exp(-ie.x * Ke), Ue[1] = Math.exp(-ie.y * Ke), Ue[2] = Math.exp(-ie.z * Ke)
              } else Ke = Number.MAX_VALUE, Ue[0] = 1, Ue[1] = 1, Ue[2] = 1;
              let Fe = 1;
              const Je = je.c.White().Qbe();
              if (ye) {
                const ee = He.subsurfaceRadius,
                  ie = He.subsurfaceRadiusScale,
                  ye = new Ce.p(ie.r, ie.g, ie.b).multiplyByFloats(ee, ee, ee),
                  be = new Ce.p(1 / Math.max(ye.x, 1e-6), 1 / Math.max(ye.y, 1e-6), 1 / Math.max(ye.z, 1e-6));
                Fe = 1 / Math.max(be.x, be.y, be.z), Je[0] = Math.exp(-be.x * Fe), Je[1] = Math.exp(-be.y * Fe), Je[2] = Math.exp(-be.z * Fe)
              }
              const oe = (1 - He.transmissionWeight) * He.subsurfaceWeight,
                Re = oe + He.transmissionWeight,
                ke = 1 / Math.max(Re, 1e-6),
                qe = He.transmissionWeight * ke,
                fe = oe * ke,
                Te = Ue.map(((ee, ie) => ee * qe + Je[ie] * fe)),
                pe = {
                  thicknessFactor: be,
                  thicknessTexture: Me,
                  attenuationDistance: Ke * qe + Fe * fe,
                  attenuationColor: Te
                };
              ie.extensions = ie.extensions || {}, ie.extensions[DM] = pe
            }
          }
          ee(ie)
        }))
      }
    }
    let AM = !1;

    function YM() {
      AM || (AM = !0, xy.RegisterExtension(DM, (ee => new PM(ee))))
    }
    YM();
    const VM = "KHR_materials_volume_scatter";
    class aM {
      constructor(ee) {
        this.name = VM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = ee
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(ee, ie, He) {
        const ye = [];
        return He instanceof eH && (He.transmissionWeight > 0 && He.transmissionScatterTexture && ye.push(He.transmissionScatterTexture), He.subsurfaceWeight > 0 && He.subsurfaceColorTexture && ye.push(He.subsurfaceColorTexture)), ye
      }
      _isExtensionEnabled(ee) {
        if (ee.unlit) return !1;
        const ie = ee.transmissionWeight > 0 && !ee.geometryThinWalled && ee.transmissionDepth > 0 && !ee.transmissionScatter.equals(je.c.Black()),
          He = ee.subsurfaceWeight > 0 && !ee.geometryThinWalled;
        return !(!ie && !He)
      }
      postExportMaterialAsync(ee, ie, He) {
        return new Promise((ee => {
          if (He instanceof eH && this._isExtensionEnabled(He)) {
            this._wasUsed = !0;
            let ee = Ce.p.Zero(),
              ye = 0;
            if (He.transmissionWeight > 0) {
              ee = function(ee) {
                const ie = new Ce.p(Math.sqrt(1 - ee.x), Math.sqrt(1 - ee.y), Math.sqrt(1 - ee.z)),
                  He = new Ce.p(1, 1, 1),
                  ye = He.subtract(ie),
                  be = He.subtract(new Ce.p(.139, .139, .139).multiplyInPlace(ie)),
                  Me = He.add(new Ce.p(1.17, 1.17, 1.17).multiplyInPlace(ie));
                return ye.multiplyInPlace(be).divideInPlace(Me)
              }(new Ce.p(He.transmissionScatter.r, He.transmissionScatter.g, He.transmissionScatter.b)), ye = He.transmissionScatterAnisotropy
            }
            const be = Ce.p.Zero();
            let Me = 0;
            He.subsurfaceWeight > 0 && (be.set(He.subsurfaceColor.r, He.subsurfaceColor.g, He.subsurfaceColor.b), Me = He.subsurfaceScatterAnisotropy);
            const Ke = (1 - He.transmissionWeight) * He.subsurfaceWeight,
              Ue = Ke + He.transmissionWeight,
              Fe = 1 / Math.max(Ue, 1e-6),
              Je = He.transmissionWeight * Fe,
              oe = Ke * Fe,
              Re = {
                multiscatterColorFactor: ee.multiplyByFloats(Je, Je, Je).addInPlace(be.multiplyByFloats(oe, oe, oe)).Qbe(),
                scatterAnisotropy: ye * Je + Me * oe
              };
            if (He.subsurfaceWeight > 0 && He.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(He);
              const ee = this._exporter._materialExporter.getTextureInfo(He.subsurfaceColorTexture);
              ee && (Re.multiscatterColorTexture = ee)
            } else if (He.transmissionWeight > 0 && He.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(He);
              const ee = this._exporter._materialExporter.getTextureInfo(He.transmissionScatterTexture);
              ee && (Re.multiscatterColorTexture = ee)
            }
            ie.extensions = ie.extensions || {}, ie.extensions[VM] = Re
          }
          ee(ie)
        }))
      }
    }
    let cM = !1;

    function xM() {
      cM || (cM = !0, xy.RegisterExtension(VM, (ee => new aM(ee)), 101))
    }
    xM();
    const LM = "KHR_materials_diffuse_roughness";
    class CM {
      constructor(ee) {
        this.name = LM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = ee
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(ee, ie, He) {
        const ye = [];
        if (He instanceof di) {
          if (He._baseDiffuseRoughness) return He._baseDiffuseRoughnessTexture && ye.push(He._baseDiffuseRoughnessTexture), ye
        } else if (He instanceof eH && He.baseDiffuseRoughness) return He.baseDiffuseRoughnessTexture && ye.push(He.baseDiffuseRoughnessTexture), ye;
        return []
      }
      postExportMaterialAsync(ee, ie, He) {
        return new Promise((ee => {
          let ye = null,
            be = null;
          if (He instanceof di ? (ye = He._baseDiffuseRoughness, be = He._baseDiffuseRoughnessTexture) : He instanceof eH && (ye = He.baseDiffuseRoughness, be = He.baseDiffuseRoughnessTexture), !ye) return void ee(ie);
          this._wasUsed = !0, ie.extensions = ie.extensions || {};
          const Me = {
            diffuseRoughnessFactor: ye,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(be) ?? void 0
          };
          null !== Me.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(He), ie.extensions[LM] = Me, ee(ie)
        }))
      }
    }
    let vM = !1;

    function uM() {
      vM || (vM = !0, xy.RegisterExtension(LM, (ee => new CM(ee))))
    }
    uM();
    const mM = "KHR_materials_openpbr";
    class lM {
      constructor() {
        this.name = mM, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(ee, ie, He) {
        return new Promise((ee => {
          He instanceof eH && (this._wasUsed = !0, ie.extensions = ie.extensions || {}, ie.extensions[mM] = {}), ee(ie)
        }))
      }
    }
    let SM = !1;

    function nM() {
      SM || (SM = !0, xy.RegisterExtension(mM, (() => new lM)))
    }
    nM();
    const jM = "KHR_texture_transform";
    class sM {
      constructor() {
        this.name = jM, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(ee, ie, He) {
        if (He.Xx() || ti.h.Warn(`${ee}: "scene" is not defined for Babylon texture ${He.name}!`), (0 !== He.uAng || 0 !== He.vAng) && (ti.h.Warn(`${ee}: Texture ${He.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== He.uRotationCenter || 0 !== He.vRotationCenter)) return;
        const ye = {};
        let be = !1;
        if (0 === He.uOffset && 0 === He.vOffset || (ye.offset = [He.uOffset, He.vOffset], be = !0), 1 === He.uScale && 1 === He.vScale || (ye.scale = [He.uScale, He.vScale], be = !0), 0 !== He.wAng) {
          if (0 !== He.uRotationCenter || 0 !== He.vRotationCenter) {
            if (He.homogeneousRotationInUVTransform && He.uScale !== He.vScale) return void ti.h.Warn(`${ee}: Texture ${He.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${jM}.`);
            ti.h.Warn(`${ee}: Texture ${He.name} with non-origin rotation center will be exported using an adjusted offset with ${jM}.`), ye.offset = function(ee) {
              const {
                uOffset: ie,
                vOffset: He,
                uRotationCenter: ye,
                vRotationCenter: be,
                uScale: Me,
                vScale: Ke,
                wAng: Ue
              } = ee, Fe = Math.cos(Ue), Je = Math.sin(Ue), oe = ye * Me, Re = be * Ke;
              return [ie + (oe * (1 - Fe) + Re * Je), He + (Re * (1 - Fe) - oe * Je)]
            }(He)
          }
          ye.rotation = -He.wAng, be = !0
        }
        0 !== He.coordinatesIndex && (ye.texCoord = He.coordinatesIndex, be = !0), be && (this._wasUsed = !0, ie.extensions || (ie.extensions = {}), ie.extensions[jM] = ye)
      }
    }
    let IM = !1;

    function hM() {
      IM || (IM = !0, xy.RegisterExtension(jM, (() => new sM)))
    }
    hM();
    var NM = He(41159);
    const GM = "KHR_texture_basisu";
    class rM {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(ee) {
        this.name = GM, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = ee
      }
      dispose() {}
      postExportTexture(ee, ie) {
        const He = this._exporter._textures[ie.index],
          ye = He.source;
        if (void 0 === ye) return;
        const be = this._exporter._images[ye];
        "image/ktx2" === (be.mimeType || (0, NM.i)(be.uri)) && (He.source = void 0, He.extensions || (He.extensions = {}), He.extensions[GM] = {
          source: ye
        }, this._wasUsed = !0)
      }
    }
    let QM = !1;

    function eK() {
      QM || (QM = !0, xy.RegisterExtension(GM, (ee => new rM(ee))))
    }
    eK();
    const iK = "EXT_texture_webp";
    class HK {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(ee) {
        this.name = iK, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = ee
      }
      dispose() {}
      postExportTexture(ee, ie) {
        const He = this._exporter._textures[ie.index],
          ye = He.source;
        if (void 0 === ye) return;
        const be = this._exporter._images[ye];
        "image/webp" === (be.mimeType || (0, NM.i)(be.uri)) && (He.source = void 0, He.extensions || (He.extensions = {}), He.extensions[iK] = {
          source: ye
        }, this._wasUsed = !0)
      }
    }
    let yK = !1;

    function bK() {
      yK || (yK = !0, xy.RegisterExtension(iK, (ee => new HK(ee))))
    }
    bK();
    const MK = "EXT_texture_avif";
    class KK {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(ee) {
        this.name = MK, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = ee
      }
      dispose() {}
      postExportTexture(ee, ie) {
        const He = this._exporter._textures[ie.index],
          ye = He.source;
        if (void 0 === ye) return;
        const be = this._exporter._images[ye];
        "image/avif" === (be.mimeType || (0, NM.i)(be.uri)) && (He.source = void 0, He.extensions || (He.extensions = {}), He.extensions[MK] = {
          source: ye
        }, this._wasUsed = !0)
      }
    }
    let UK = !1;

    function FK() {
      UK || (UK = !0, xy.RegisterExtension(MK, (ee => new KK(ee))))
    }
    FK();
    class JK {
      static CreateSTL(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          be = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Me = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ke = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Ue = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Fe = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const Je = function(ee, ie, He) {
            const be = [3 * ee[He], 3 * ee[He + 1], 3 * ee[He + 2]],
              Me = [new ye.rf(ie[be[0]], ie[be[0] + 2], ie[be[0] + 1]), new ye.rf(ie[be[1]], ie[be[1] + 2], ie[be[1] + 1]), new ye.rf(ie[be[2]], ie[be[2] + 2], ie[be[2] + 1])],
              Ke = Me[0].subtract(Me[1]),
              Ue = Me[2].subtract(Me[1]);
            return {
              v: Me,
              n: ye.rf.Cross(Ue, Ke).normalize()
            }
          },
          Re = function(ee, ie, He, ye) {
            return ie = ke(ee, ie, He.x, ye), ie = ke(ee, ie, He.y, ye), ke(ee, ie, He.z, ye)
          },
          ke = function(ee, ie, He, ye) {
            return ee.setFloat32(ie, He, ye), ie + 4
          },
          fe = function(ee) {
            if (Ue) {
              let ie = ee;
              ee instanceof qe.d && (ie = ee.jMe);
              const He = ie.getVerticesData(oe.f.PositionKind, !0, !0);
              if (!He) return [];
              const be = ye.rf.Zero();
              let Me;
              for (Me = 0; Me < He.length; Me += 3) ye.rf.TransformCoordinatesFromFloatsToRef(He[Me], He[Me + 1], He[Me + 2], ee.computeWorldMatrix(!0), be).toArray(He, Me);
              return He
            }
            return ee.getVerticesData(oe.f.PositionKind) || []
          };
        Ue && (Ke = !0);
        let Te = "",
          pe = 0,
          Xe = 0;
        if (be) {
          for (let He = 0; He < ee.length; He++) {
            const ie = ee[He].eMe();
            pe += ie ? ie.length / 3 : 0
          }
          const ie = new ArrayBuffer(84 + 50 * pe);
          Te = new DataView(ie), Xe += 80, Te.setUint32(Xe, pe, Me), Xe += 4
        } else Fe || (Te = "solid stlmesh\r\n");
        for (let ye = 0; ye < ee.length; ye++) {
          const ie = ee[ye];
          !be && Fe && (Te += "solid " + ie.name + "\r\n"), !Ke && ie instanceof Ry.e && ie.bakeCurrentTransformIntoVertices();
          const He = fe(ie),
            Ue = ie.eMe() || [];
          for (let ee = 0; ee < Ue.length; ee += 3) {
            const ie = Je(Ue, He, ee);
            be ? (Xe = Re(Te, Xe, ie.n, Me), Xe = Re(Te, Xe, ie.v[0], Me), Xe = Re(Te, Xe, ie.v[1], Me), Xe = Re(Te, Xe, ie.v[2], Me), Xe += 2) : (Te += "\tfacet normal " + ie.n.x + " " + ie.n.y + " " + ie.n.z + "\r\n", Te += "\t\touter loop\r\n", Te += "\t\t\tvertex " + ie.v[0].x + " " + ie.v[0].y + " " + ie.v[0].z + "\r\n", Te += "\t\t\tvertex " + ie.v[1].x + " " + ie.v[1].y + " " + ie.v[1].z + "\r\n", Te += "\t\t\tvertex " + ie.v[2].x + " " + ie.v[2].y + " " + ie.v[2].z + "\r\n", Te += "\t\tendloop\r\n", Te += "\tendfacet\r\n")
          }!be && Fe && (Te += "endsolid " + name + "\r\n")
        }
        if (be || Fe || (Te += "endsolid stlmesh"), ie) {
          const ee = document.createElement("a"),
            ie = new Blob([Te], {
              type: "application/octet-stream"
            });
          ee.href = window.URL.createObjectURL(ie), ee.download = He + ".stl", ee.click()
        }
        return Te
      }
    }

    function oK(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const be = [];
      for (let Me = 0; Me < ee.length / He; Me++) {
        const Ke = ee[Me * He] * (ye ? -1 : 1),
          Ue = ee[Me * He + 1],
          Fe = ee[Me * He + 2];
        be.push(`(${Ke.toPrecision(ie.precision)}, ${Ue.toPrecision(ie.precision)}, ${Fe.toPrecision(ie.precision)})`)
      }
      return be.join(", ")
    }

    function RK(ee, ie) {
      const He = [];
      for (let ye = 0; ye < ee.length / 2; ye++) {
        const be = ee[2 * ye],
          Me = ee[2 * ye + 1];
        He.push(`(${be.toPrecision(ie.precision)}, ${(1-Me).toPrecision(ie.precision)})`)
      }
      return He.join(", ")
    }

    function kK(ee, ie, He, ye) {
      const be = ee.getVerticesData(oe.f.PositionKind),
        Me = ee.getVerticesData(oe.f.NormalKind);
      if (be && Me) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${He}"\n\t\tint[] faceVertexCounts = [${function(ee){const ie=ee.eMe()?.length?ee.getTotalIndices():ee.getTotalVertices();return Array(ie/3).fill(3).join(", ")}(ee)}]\n\t\tint[] faceVertexIndices = [${function(ee){const ie=ee.eMe(),He=ie?.length??ee.getTotalVertices(),ye=[];if(null!==ie)for(let be=0;be<He;be++)ye.push(ie[be]);else for(let be=0;be<He;be++)ye.push(be);return ye.join(", ")}(ee)}]\n\t\tnormal3f[] normals = [${oK(Me,ie,void 0,ye)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${oK(be,ie,void 0,ye)}]\n        ${function(ee,ie){let He="";for(let be=0;be<4;be++){const ye=be>0?be:"",Me=ee.getVerticesData(oe.f.UVKind+(ye?ye+1:""));Me&&(He+=`\n\t\ttexCoord2f[] primvars:st${ye} = [${RK(Me,ie)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const ye=ee.getVerticesData(oe.f.ColorKind);return ye&&(He+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        oK(ye, ie, ye.length / ee.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),He}(ee,ie)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function qK(ee, ie, He, ye) {
      return `\n        def "Geometry"\n        {\n        ${kK(ee,ie,He,ye)}\n        }\n        `
    }

    function fK(ee) {
      let ie = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return ie += ee, fflate.strToU8(ie)
    }

    function TK(ee) {
      const ie = ee.m;
      return `( ${pK(ie,0)}, ${pK(ie,4)}, ${pK(ie,8)}, ${pK(ie,12)} )`
    }

    function pK(ee, ie) {
      return `(${ee[ie+0]}, ${ee[ie+1]}, ${ee[ie+2]}, ${ee[ie+3]})`
    }

    function XK(ee, ie) {
      const He = "Object_" + ee.uniqueId,
        ye = TK(ie);
      return `def Xform "${He}" (\n\tprepend references = @./geometries/Geometry_${ee.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${ye}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${ee.material.uniqueId}>\n}\n\n`
    }

    function zK(ee) {
      switch (ee) {
        case de.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case de.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case de.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function BK(ee) {
      return `(${ee.x}, ${ee.y})`
    }

    function EK(ee) {
      return `(${ee.r}, ${ee.g}, ${ee.b})`
    }

    function gK(ee) {
      return "image/jpeg" === ee || "image/png" === ee
    }

    function OK(ee, ie, He, be, Me, Ke) {
      const Ue = ee.getInternalTexture().uniqueId + "_" + ee.invertY,
        Je = ee.mimeType || (0, Fe.e)(ee.getInternalTexture()?.url ?? ""),
        oe = gK(Je) ? Je : "image/png",
        Re = "image/jpeg" === oe ? "jpg" : "png";
      Me[Ue] = {
        texture: ee,
        mimeType: oe,
        ext: Re
      };
      const ke = ee.coordinatesIndex > 0 ? "st" + ee.coordinatesIndex : "st",
        qe = new ye.Vector2(ee.uScale, ee.vScale),
        fe = new ye.Vector2(ee.uOffset, ee.vOffset),
        Te = ee.wAng,
        pe = Math.sin(Te),
        Xe = Math.cos(Te);
      return fe.y = 1 - fe.y - qe.y, fe.x += pe * qe.x, fe.y += (1 - Xe) * qe.y, `\n    def Shader "PrimvarReader_${He}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${ke}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${He}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${ie.uniqueId}/PrimvarReader_${He}.outputs:result>\n        float inputs:rotation = ${(Te*(180/Math.PI)).toFixed(Ke.precision)}\n        float2 inputs:scale = ${BK(qe)}\n        float2 inputs:translation = ${BK(fe)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${ee.uniqueId}_${He}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${Ue}.${Re}@\n        float2 inputs:st.connect = </Root/Materials/Material_${ie.uniqueId}/Transform2d_${He}.outputs:result>\n        ${be?"float4 inputs:scale = "+function(ee){return`(${ee.r}, ${ee.g}, ${ee.b}, 1.0)`}(be):""}\n        token inputs:sourceColorSpace = "${ee.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${zK(ee.wrapU)}"\n        token inputs:wrapT = "${zK(ee.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${ie.needAlphaBlending()||ie.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function dK(ee, ie, He) {
      const ye = "\t\t\t",
        be = [],
        Me = [],
        {
          diffuseMap: Ke,
          diffuse: Ue,
          alphaCutOff: Fe,
          emissiveMap: Je,
          emissive: oe,
          normalMap: Re,
          roughnessMap: ke,
          roughnessChannel: qe,
          roughness: fe,
          metalnessMap: Te,
          metalnessChannel: Xe,
          metalness: ze,
          aoMap: Be,
          aoMapChannel: Ee,
          aoMapIntensity: ge,
          alphaMap: Oe,
          ior: de,
          clearCoatEnabled: We,
          clearCoat: te,
          clearCoatMap: Ze,
          clearCoatRoughness: we,
          clearCoatRoughnessMap: De
        } = function(ee) {
          const ie = {
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
          return ee instanceof Uy.StandardMaterial ? {
            ...ie,
            diffuseMap: ee.diffuseTexture,
            diffuse: ee.diffuseColor,
            alphaCutOff: ee.alphaCutOff,
            emissiveMap: ee.emissiveTexture,
            emissive: ee.emissiveColor,
            roughness: 1,
            alphaMap: ee.opacityTexture
          } : ee instanceof di ? {
            ...ie,
            diffuseMap: ee._albedoTexture,
            diffuse: ee._albedoColor,
            alphaCutOff: ee._alphaCutOff,
            emissiveMap: ee._emissiveTexture,
            emissive: ee._emissiveColor,
            normalMap: ee._bumpTexture,
            roughnessMap: ee._metallicTexture,
            roughnessChannel: ee._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: ee._roughness ?? 1,
            metalnessMap: ee._metallicTexture,
            metalnessChannel: ee._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: ee._metallic ?? 0,
            aoMap: ee._ambientTexture,
            aoMapChannel: ee._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: ee._ambientTextureStrength,
            alphaMap: ee._opacityTexture,
            ior: ee.subSurface.indexOfRefraction,
            clearCoatEnabled: ee.clearCoat.isEnabled,
            clearCoat: ee.clearCoat.intensity,
            clearCoatMap: ee.clearCoat.texture,
            clearCoatRoughness: ee.clearCoat.roughness,
            clearCoatRoughnessMap: ee.clearCoat.useRoughnessFromMainTexture ? ee.clearCoat.texture : ee.clearCoat.textureRoughness
          } : ie
        }(ee);
      return null !== Ke ? (be.push(`${ye}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${ee.uniqueId}/Texture_${Ke.uniqueId}_diffuse.outputs:rgb>`), ee.needAlphaBlending() ? be.push(`${ye}float inputs:opacity.connect = </Root/Materials/Material_${ee.uniqueId}/Texture_${Ke.uniqueId}_diffuse.outputs:a>`) : ee.needAlphaTesting() && (be.push(`${ye}float inputs:opacity.connect = </Root/Materials/Material_${ee.uniqueId}/Texture_${Ke.uniqueId}_diffuse.outputs:a>`), be.push(`${ye}float inputs:opacityThreshold = ${Fe}`)), Me.push(OK(Ke, ee, "diffuse", Ue, ie, He))) : be.push(`${ye}color3f inputs:diffuseColor = ${EK(Ue||pe.Color3.White())}`), null !== Je ? (be.push(`${ye}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${ee.uniqueId}/Texture_${Je.uniqueId}_emissive.outputs:rgb>`), Me.push(OK(Je, ee, "emissive", oe, ie, He))) : oe && oe.toLuminance() > 0 && be.push(`${ye}color3f inputs:emissiveColor = ${EK(oe)}`), null !== Re && (be.push(`${ye}normal3f inputs:normal.connect = </Root/Materials/Material_${ee.uniqueId}/Texture_${Re.uniqueId}_normal.outputs:rgb>`), Me.push(OK(Re, ee, "normal", null, ie, He))), null !== Be && (be.push(`${ye}float inputs:occlusion.connect = </Root/Materials/Material_${ee.uniqueId}/Texture_${Be.uniqueId}_occlusion.outputs:${Ee}>`), Me.push(OK(Be, ee, "occlusion", new pe.Color3(ge, ge, ge), ie, He))), null !== ke ? (be.push(`${ye}float inputs:roughness.connect = </Root/Materials/Material_${ee.uniqueId}/Texture_${ke.uniqueId}_roughness.outputs:${qe}>`), Me.push(OK(ke, ee, "roughness", new pe.Color3(fe, fe, fe), ie, He))) : be.push(`${ye}float inputs:roughness = ${fe}`), null !== Te ? (be.push(`${ye}float inputs:metallic.connect = </Root/Materials/Material_${ee.uniqueId}/Texture_${Te.uniqueId}_metallic.outputs:${Xe}>`), Me.push(OK(Te, ee, "metallic", new pe.Color3(ze, ze, ze), ie, He))) : be.push(`${ye}float inputs:metallic = ${ze}`), null !== Oe ? (be.push(`${ye}float inputs:opacity.connect = </Root/Materials/Material_${ee.uniqueId}/Texture_${Oe.uniqueId}_opacity.outputs:r>`), be.push(`${ye}float inputs:opacityThreshold = 0.0001`), Me.push(OK(Oe, ee, "opacity", null, ie, He))) : be.push(`${ye}float inputs:opacity = ${ee.alpha}`), We && (null !== Ze ? (be.push(`${ye}float inputs:clearcoat.connect = </Root/Materials/Material_${ee.uniqueId}/Texture_${Ze.uniqueId}_clearcoat.outputs:r>`), Me.push(OK(Ze, ee, "clearcoat", new pe.Color3(te, te, te), ie, He))) : be.push(`${ye}float inputs:clearcoat = ${te}`), null !== De ? (be.push(`${ye}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${ee.uniqueId}/Texture_${De.uniqueId}_clearcoatRoughness.outputs:g>`), Me.push(OK(De, ee, "clearcoatRoughness", new pe.Color3(we, we, we), ie, He))) : be.push(`${ye}float inputs:clearcoatRoughness = ${we}`)), be.push(`${ye}float inputs:ior = ${de}`), `\n\tdef Material "Material_${ee.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${be.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${ee.uniqueId}/PreviewSurface.outputs:surface>\n\n${Me.join("\n")}\n\n\t}\n`
    }

    function WK(ee) {
      ee.computeWorldMatrix(!0);
      const ie = ee.getWorldMatrix().clone(),
        He = ee.Xx().useRightHandedSystem;
      let ye = ee.material?._getEffectiveOrientation(ee) ?? ee.sideOrientation,
        Ke = !He,
        Ue = ee.parent;
      for (; Ue;) {
        if (LH(Ue, He) && null === Ue.parent) {
          He || (ie.multiplyToRef(Ue.getWorldMatrix().invert(), ie), ye = ye === Me.e.ClockWiseSideOrientation ? Me.e.CounterClockWiseSideOrientation : Me.e.ClockWiseSideOrientation), Ke = !1;
          break
        }
        Ue = Ue.parent
      }
      return ie.determinant() < 0 && be.Tools.Warn(`Mesh ${ee.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: ie,
        windingOrder: ye === Me.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: Ke
      }
    }
    async function tK(ee, ie, He) {
      const Me = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...ie
      };
      "undefined" === typeof fflate && await be.Tools.LoadScriptAsync(Me.fflateUrl);
      const Ke = {};
      Ke[Me.modelFileName] = null;
      let Ue = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      Ue += function(ee) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===ee.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${ee.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${ee.planeAnchoringAlignment}"`:""}\n            `
      }(Me);
      const Fe = {};
      for (const ye of ee.meshes) {
        if (0 === ye.getTotalVertices()) continue;
        const ee = ye,
          ie = ee.geometry,
          Je = ee.material;
        if (!Je || !ie || He && !He(ee)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(Je.getClassName())) {
          const He = "geometries/Geometry_" + ie.uniqueId + ".usda",
            {
              matrix: ye,
              windingOrder: be,
              convertToRightHanded: oe
            } = WK(ee);
          if (!(He in Ke)) {
            const ee = qK(ie, Me, be, oe);
            Ke[He] = fK(ee)
          }
          Je.uniqueId in Fe || (Fe[Je.uniqueId] = Je), Ue += XK(ee, ye)
        } else be.Tools.Warn("USDZExportAsync does not support this material type: " + Je.getClassName())
      }
      ee.activeCamera && Me.exportCamera && (Ue += function(ee, ie) {
        const He = "Camera_" + ee.uniqueId,
          be = TK(ye.Matrix.RotationY(Math.PI).multiply(ee.getWorldMatrix()));
        if (ee.mode === de.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${He}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${be}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${ee.minZ.toPrecision(ie.precision)}, ${ee.maxZ.toPrecision(ie.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(ee.orthoLeft||1)+Math.abs(ee.orthoRight||1))).toPrecision(ie.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(ee.orthoTop||1)+Math.abs(ee.orthoBottom||1))).toPrecision(ie.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const ye = ee.Nf().getAspectRatio(ee),
            Me = ie.cameraSensorWidth || 35;
          return `def Camera "${He}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${be}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${ee.minZ.toPrecision(ie.precision)}, ${ee.maxZ.toPrecision(ie.precision)})\n\t\t\tfloat focalLength = ${(Me/(2*Math.tan(.5*ee.fov))).toPrecision(ie.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(Me*ye).toPrecision(ie.precision)}\n\t\t\tfloat verticalAperture = ${(Me/ye).toPrecision(ie.precision)}            \n\t\t}\n\t\n\t`
        }
      }(ee.activeCamera, Me)), Ue += "\n            }\n        }";
      const Je = {};
      Ue += function(ee, ie, He) {
        const ye = [];
        for (const be in ee) {
          const Me = ee[be];
          ye.push(dK(Me, ie, He))
        }
        return `\n    def "Materials"\n{\n${ye.join("")}\n}\n\n`
      }(Fe, Je, Me), Ue += "\n    }", Ke[Me.modelFileName] = fflate.strToU8(Ue);
      for (const ye in Je) {
        const {
          texture: ee,
          ext: ie,
          mimeType: He
        } = Je[ye], be = await BH(ee);
        if (be && gK(be.mimeType) && be.mimeType === He) Ke[`textures/Texture_${ye}.${ie}`] = new Uint8Array(be.data);
        else {
          const be = ee.getSize(),
            Me = await (0, Ee.e)(ee),
            Ue = await We.DumpTools.DumpDataAsync(be.width, be.height, Me, He, void 0, !1, !0);
          Ke[`textures/Texture_${ye}.${ie}`] = new Uint8Array(Ue).slice()
        }
      }
      let oe = 0;
      for (const ye in Ke) {
        const ee = Ke[ye];
        if (!ee) continue;
        oe += 34 + ye.length;
        const ie = 63 & oe;
        if (4 !== ie) {
          const He = new Uint8Array(64 - ie);
          Ke[ye] = [ee, {
            extra: {
              12345: He
            }
          }]
        }
        oe = ee.length
      }
      return fflate.zipSync(Ke, {
        level: 0
      })
    }
    var ZK = He(42174);
    class wK {
      static Export(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          He = arguments.length > 2 ? arguments[2] : void 0;
        if (!ee || 0 === ee.bones.length) throw new Error("Invalid or empty skeleton provided");
        let ye = ie;
        ie && 0 !== ie.length || (ye = ee.animations.map((ee => ee.name)));
        let be = null;
        for (const Je of ye) {
          const ie = ee.getAnimationRange(Je);
          ie && (be = be ? new ZK.e("animation-range", Math.min(be.from, ie.from), Math.max(be.to, ie.to)) : ie)
        }
        if (!be && (ee.animations.length > 0 && (be = ee.getAnimationRange(ee.animations[0].name)), !be)) throw new Error("No animation range found in skeleton");
        const Me = He || 1 / (ee.animations[0]?.framePerSecond || 30),
          Ke = this._BuildBoneHierarchy(ee, ye);
        let Ue = 0;
        for (const Je of Ke) Je.positionKeys.length > 0 && (Ue = Math.max(Ue, Je.positionKeys.length)), Je.rotationKeys.length > 0 && (Ue = Math.max(Ue, Je.rotationKeys.length));
        0 === Ue && (Ue = Math.floor((be.to - be.from) / Me) + 1);
        let Fe = "";
        return Fe += "HIERARCHY\n", Fe += this._ExportHierarchy(Ke, 0), Fe += "MOTION\n", Fe += `Frames: ${Ue}\n`, Fe += `Frame Time: ${Me.toFixed(6)}\n`, Fe += this._ExportMotionData(Ke, Ue, 0, ye), Fe
      }
      static _BuildBoneHierarchy(ee, ie) {
        const He = new Map,
          ye = [];
        for (const be of ee.bones) {
          const ee = {
            bone: be,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          He.set(be, ee)
        }
        for (const be of ee.bones) {
          const ee = He.get(be);
          if (be.animations.length > 0)
            for (const He of be.animations) ie.includes(He.name) && ("position" === He.targetProperty ? (ee.hasPositionChannels = !0, ee.positionKeys.push(...He.getKeys())) : "rotationQuaternion" === He.targetProperty && (ee.hasRotationChannels = !0, ee.rotationKeys.push(...He.getKeys())));
          if (be.getParent()) {
            const ie = He.get(be.getParent());
            ie && ie.children.push(ee)
          } else ye.push(ee)
        }
        return ye
      }
      static _ExportHierarchy(ee, ie) {
        let He = "";
        const ye = "    ".repeat(ie);
        for (const be of ee) {
          const ee = be.bone;
          if (this._IsEndSite(be)) {
            He += `${ye}End Site\n`, He += `${ye}{\n`;
            const ie = this._GetBoneOffset(ee);
            He += `${ye}    OFFSET ${ie.x.toFixed(6)} ${ie.y.toFixed(6)} ${ie.z.toFixed(6)}\n`, He += `${ye}}\n`
          } else {
            He += `${0===ie?"ROOT":`${ye}JOINT`} ${ee.name}\n`, He += `${ye}{\n`;
            const Me = this._GetBoneOffset(ee);
            He += `${ye}    OFFSET ${Me.x.toFixed(6)} ${Me.y.toFixed(6)} ${Me.z.toFixed(6)}\n`;
            const Ke = [];
            be.hasPositionChannels && Ke.push("Xposition", "Yposition", "Zposition"), be.hasRotationChannels && Ke.push("Zrotation", "Xrotation", "Yrotation"), Ke.length > 0 && (He += `${ye}    CHANNELS ${Ke.length} ${Ke.join(" ")}\n`), be.children.length > 0 && (He += this._ExportHierarchy(be.children, ie + 1)), He += `${ye}}\n`
          }
        }
        return He
      }
      static _IsEndSite(ee) {
        return 0 === ee.children.length
      }
      static _GetBoneOffset(ee) {
        try {
          if (!ee.getParent()) return ee.getRestMatrix().getTranslation();
          return ee.getLocalMatrix().getTranslation()
        } catch (ie) {
          return ye.rf.Zero()
        }
      }
      static _ExportMotionData(ee, ie, He, ye) {
        let be = "";
        for (let Me = 0; Me < ie; Me++) {
          const ie = [];
          this._CollectFrameValues(ee, Me + He, ie, ye), be += ie.map((ee => ee.toFixed(6))).join(" ") + "\n"
        }
        return be
      }
      static _CollectFrameValues(ee, ie, He, ye) {
        for (const be of ee)
          if (!this._IsEndSite(be)) {
            if (be.hasPositionChannels) {
              const ee = this._GetPositionAtFrameIndex(be.positionKeys, ie);
              He.push(ee.x, ee.y, ee.z)
            }
            if (be.hasRotationChannels) {
              const ee = this._GetRotationAtFrameIndex(be.rotationKeys, ie),
                ye = this._QuaternionToEuler(ee);
              He.push(ye.z, ye.x, ye.y)
            }
            be.children.length > 0 && this._CollectFrameValues(be.children, ie, He, ye)
          }
      }
      static _GetPositionAtFrameIndex(ee, ie) {
        if (0 === ee.length) return ye.rf.Zero();
        return ee[Math.max(0, Math.min(ie, ee.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(ee, ie) {
        if (0 === ee.length) return ye.Quaternion.Identity();
        return ee[Math.max(0, Math.min(ie, ee.length - 1))].value.clone()
      }
      static _QuaternionToEuler(ee) {
        const ie = new ye.Matrix;
        ee.toRotationMatrix(ie);
        const He = ie.m;
        let Me, Ke, Ue;
        const Fe = Math.sqrt(He[0] * He[0] + He[1] * He[1]);
        return Fe > cH.b ? (Me = Math.atan2(He[6], He[10]), Ke = Math.atan2(-He[2], Fe), Ue = Math.atan2(He[1], He[0])) : (Me = Math.atan2(-He[9], He[5]), Ke = Math.atan2(-He[2], Fe), Ue = 0), new ye.rf(be.Tools.ToDegrees(Me), be.Tools.ToDegrees(Ke), be.Tools.ToDegrees(Ue))
      }
    }

    function DK(ee) {
      return "string" === typeof ee?.name
    }
    const PK = Symbol("__xml:meta$__"),
      AK = Symbol("__xml:name$__");

    function YK(ee, ie) {
      Object.prototype.hasOwnProperty.call(ee.metadata, PK) || (ee.metadata[PK] = []), ee.metadata[PK].push(ie)
    }

    function VK(ee) {
      return (ie, He) => {
        ie[AK] = ee
      }
    }

    function aK() {
      return (ee, ie) => YK(ie, {
        kind: "none",
        prop: String(ie.name),
        ignore: !0
      })
    }

    function cK(ee) {
      return (ie, He) => YK(He, {
        kind: "attr",
        prop: String(He.name),
        ...ee
      })
    }

    function xK(ee) {
      return (ie, He) => YK(He, {
        kind: "elem",
        prop: String(He.name),
        ...ee
      })
    }

    function LK(ee) {
      const ie = "function" === typeof ee ? ee : ee?.constructor,
        He = ie?.[Symbol.metadata];
      if (!He) return [];
      const ye = [];
      let be = He;
      for (; be;) Object.prototype.hasOwnProperty.call(be, PK) && ye.push(...be[PK]), be = Object.getPrototypeOf(be);
      return ye
    }

    function CK(ee) {
      const ie = ee?.constructor?.[AK];
      return ie || void 0
    }

    function vK(ee) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(ee)
    }

    function uK(ee) {
      if (DK(ee)) return ee;
      const ie = (ee ?? "").trim();
      if (!ie) return {
        name: ""
      };
      const He = ie.indexOf(":");
      if (-1 === He) return {
        name: ie
      };
      if (-1 !== ie.indexOf(":", He + 1)) return {
        name: ie
      };
      const ye = ie.slice(0, He),
        be = ie.slice(He + 1);
      return vK(ye) && vK(be) ? {
        ns: ye,
        name: be
      } : {
        name: ie
      }
    }

    function mK(ee, ie) {
      return ie ? `${ie}:${ee}` : ee
    }
    const lK = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      SK = Object.freeze({
        number: lK
      });

    function nK(ee) {
      const ie = ee?.eps ?? lK.eps;
      return {
        eps: ie,
        maxDecimalsCap: ee?.maxDecimalsCap ?? lK.maxDecimalsCap,
        trimTrailingZeros: ee?.trimTrailingZeros ?? lK.trimTrailingZeros,
        fixedDecimals: ee?.fixedDecimals,
        allowScientific: ee?.allowScientific ?? lK.allowScientific,
        snapNearZero: ee?.snapNearZero ?? lK.snapNearZero,
        zeroThreshold: ee?.zeroThreshold ?? ie,
        perAttributeEps: ee?.perAttributeEps
      }
    }

    function jK(ee) {
      return {
        number: nK(ee?.number)
      }
    }
    class sK {
      constructor(ee) {
        if (this.o = ee, this._o = ee.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(ee) {
        if (!Number.isFinite(ee)) throw new Error(`Cannot format non-finite number: ${ee}`);
        const ie = this._o,
          He = this._clampInt(ie.maxDecimalsCap ?? 15, 0, 20),
          ye = ie.trimTrailingZeros ?? !0,
          be = ie.snapNearZero ?? !0,
          Me = ie.zeroThreshold ?? ie.eps,
          Ke = 1 / ie.eps;
        let Ue, Fe = Math.round(ee * Ke) / Ke;
        if (Object.is(Fe, -0) && (Fe = 0), be && Math.abs(Fe) <= Me && (Fe = 0), Ue = void 0 !== ie.fixedDecimals ? this._clampInt(ie.fixedDecimals, 0, He) : this._clampInt(Math.ceil(-Math.log10(ie.eps)), 0, He), ie.allowScientific, 0 === Ue) return String(Math.trunc(Fe));
        let Je = Fe.toFixed(Ue);
        if (ye && void 0 === ie.fixedDecimals && (Je = Je.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Je)) throw new Error(`Scientific notation not allowed in XML output: ${Je}`);
        return Je
      }
      _clampInt(ee, ie, He) {
        return Number.isFinite(ee) ? (ee = Math.trunc(ee), Math.max(ie, Math.min(He, ee))) : ie
      }
    }

    function IK(ee) {
      return ee instanceof Date
    }

    function hK(ee) {
      return "string" === typeof ee
    }

    function NK(ee) {
      return "string" === typeof ee || "number" === typeof ee || "boolean" === typeof ee || "bigint" === typeof ee || IK(ee)
    }

    function GK(ee) {
      return "number" === typeof ee || "boolean" === typeof ee || "bigint" === typeof ee || IK(ee)
    }
    class rK {
      constructor(ee, ie) {
        this._ns = new Map, this._prefixCount = 0, this._builder = ee, this._format = jK(ie), this._nFmt = new sK(this._format)
      }
      withNamespace() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        for (const ye of ie) this._assignNamespace(ye);
        return this
      }
      serialize(ee, ie) {
        if (!(ie = ie ?? CK(ee))) throw new Error("can not find name for given object");
        const He = uK(ie);
        He.ns && this._assignNamespace(He.ns, "xmlns"), this._gatherNamespaces(ee, new WeakSet);
        const ye = this._builder.ele(null, He.name);
        for (const [be, Me] of Array.from(this._ns.entries())) ye.att("xmlns", Me, be);
        this._writeObjectContent(ye, ee, (new WeakSet).add(ee)), this._builder.end()
      }
      _writeObject(ee, ie, He) {
        if (He.has(ie)) return;
        if (He.add(ie), Array.isArray(ie)) {
          for (const ye of ie) GK(ye) || (hK(ye) ? this._builder.text(ye) : this._writeObject(ee, ye, He));
          return
        }
        const ye = CK(ie);
        if (!ye) return;
        const be = uK(ye),
          Me = this._getPrefix(be),
          Ke = mK(be.name, Me);
        ee.ele(null, Ke), this._writeObjectContent(ee, ie, He), this._builder.end()
      }
      _getPrefix(ee) {
        if (ee.ns) {
          const ie = this._ns.get(ee.ns.toLowerCase());
          if ("xmlns" !== ie) return ie
        }
      }
      _writeObjectContent(ee, ie, He) {
        const ye = LK(ie) ?? [],
          be = new Map;
        for (const Ke of ye) {
          const ee = be.get(Ke.prop) ?? [];
          ee.push(Ke), be.set(Ke.prop, ee)
        }
        const Me = Object.keys(ie).sort(((ee, ie) => {
          const He = (be.get(ee) ?? []).some((ee => "attr" === ee.kind));
          return He === (be.get(ie) ?? []).some((ee => "attr" === ee.kind)) ? 0 : He ? -1 : 1
        }));
        for (const Ke of Me) {
          const ye = ie[Ke];
          if (null === ye || void 0 === ye) continue;
          const Me = be.get(Ke);
          if (Me) {
            if (Me.some((ee => !0 === ee.ignore || "none" === ee.kind))) continue;
            for (const ie of Me) {
              const He = ie.name ?? ie.prop.toLowerCase();
              if (He) switch (ie.kind) {
                case "attr": {
                  let be = null;
                  if ("number" === typeof ye && this._nFmt && (be = this._nFmt.toString(ye)), ie.formatter) {
                    be = new ie.formatter(this._format).toString(ye)
                  }
                  if (be = be ?? ye.toString(), be) {
                    const ie = uK(He),
                      ye = this._getPrefix(ie),
                      Me = mK(ie.name, ye);
                    ee.att(null, Me, be)
                  }
                  break
                }
              }
            }
          } else GK(ye) || (hK(ye) ? this._builder.text(ye) : this._writeObject(ee, ye, He))
        }
      }
      _gatherNamespaces(ee, ie) {
        if (ie.has(ee)) return;
        if (ie.add(ee), Array.isArray(ee)) {
          for (const He of ee) NK(He) || this._gatherNamespaces(He, ie);
          return
        }
        const He = CK(ee);
        He && this._assignNamespace(He);
        const ye = LK(ee) ?? [],
          be = new Map;
        for (const Ke of ye) {
          const ee = be.get(Ke.prop) ?? [];
          ee.push(Ke), be.set(Ke.prop, ee)
        }
        const Me = [];
        for (const Ke of Object.keys(ee)) {
          const ie = ee[Ke];
          if (null === ie || void 0 === ie) continue;
          const He = be.get(Ke);
          if (He) {
            if (He.some((ee => !0 === ee.ignore || "none" === ee.kind))) continue;
            for (const ee of He) ee.name && this._assignNamespace(ee.name)
          }
          Me.push(ie)
        }
        for (const Ke of Me) NK(Ke) || this._gatherNamespaces(Ke, ie)
      }
      _assignNamespace(ee, ie) {
        const He = uK(ee);
        if (He?.ns) {
          const ee = He.ns.toLowerCase();
          this._ns.get(ee) || this._ns.set(ee, ie ?? this._buildNsPrefix(ee))
        } else if ("xmlns" === ie) {
          const ee = He.name.toLowerCase();
          this._ns.get(ee) || this._ns.set(ee, ie ?? this._buildNsPrefix(ee))
        }
      }
      _buildNsPrefix(ee) {
        let ie, He = !1;
        do {
          ie = "ns" + this._prefixCount++;
          for (const ee of Array.from(this._ns.values()))
            if (ee === ie) {
              He = !0;
              break
            }
        } while (He);
        return ie
      }
    }
    class QK {}
    var eU;
    QK.OpenTag = "<", QK.CloseTag = ">", QK.Slash = "/", QK.Question = "?", QK.Quote = '"', QK.Equal = "=", QK.Space = " ", QK.Semicolon = ":", QK.Dec = "<?xml", QK.Xml = "xml", QK.Xmlns = "xmlns", QK.Xsi = "xsi", QK.VersionKeyword = "version", QK.EncodingKeyword = "encoding", QK.StandaloneKeyword = "standalone",
      function(ee) {
        ee[ee.Declaration = 0] = "Declaration", ee[ee.Tag = 1] = "Tag", ee[ee.Attribute = 2] = "Attribute", ee[ee.Text = 3] = "Text"
      }(eU || (eU = {}));
    class iU {
      constructor(ee) {
        this._ctxStack = [], this._d = 0, this._w = ee
      }
      dec(ee, ie, He) {
        return this._w.write(QK.Dec), this._writeAttStr(QK.VersionKeyword, ee), ie && this._writeAttStr(QK.EncodingKeyword, ie), void 0 !== He && this._writeAttStr(QK.StandaloneKeyword, He ? "yes" : "no"), this._w.write(QK.Question, QK.CloseTag), this
      }
      att(ee, ie, He) {
        const ye = this._peekContext();
        if (!ye) throw new Error("att() without open element");
        if (ye.closed) throw new Error(`att() after start tag closed for <${ye.name}>`);
        if (this._isXmlnsDecl(ee, ie)) {
          if (ie === QK.Xmlns) ye.defaultNs = He, this._registerNamespace(ye, "", He), this._writeAttStr(QK.Xmlns, He);
          else if (ee) this._registerNamespace(ye, ie, He), this._writeAttStr(`${ee}:${ie}`, He);
          else {
            const ee = ie.slice(6);
            this._registerNamespace(ye, ee, He), this._writeAttStr(ie, He)
          }
          return ye.lastToken = eU.Attribute, this
        }
        let be = ie;
        if (ee) {
          be = `${this._ensurePrefixDeclared(ye,ee)}:${ie}`
        }
        return ye.lastToken = eU.Attribute, this._writeAttStr(be, He), this
      }
      ele(ee, ie) {
        const He = this._peekContext();
        He && this._closeOpenTagIfNeeded(He);
        let ye = ie;
        if (ee) {
          ye = `${this._lookupPrefix(ee)??ee}:${ie}`
        }
        return this._pushContext(ye, ++this._d), this._w.write(QK.OpenTag, ye), this
      }
      text(ee) {
        const ie = this._peekContext();
        if (!ie) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(ie), ie.lastToken = eU.Text, this._w.write(this._escText(ee)), this
      }
      end() {
        const ee = this._popContext();
        return ee && (this._d--, ee.closed ? this._w.write(QK.OpenTag, QK.Slash, ee.name, QK.CloseTag) : this._w.write(QK.Slash, QK.CloseTag)), this
      }
      _pushContext(ee, ie) {
        const He = new iU.Context(ee, ie);
        return this._ctxStack.push(He), He
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
      _writeAttStr(ee, ie) {
        this._w.write(QK.Space, ee, QK.Equal, QK.Quote, this._escAttr(ie), QK.Quote)
      }
      _lookupPrefix(ee) {
        let ie = this._ctxStack.length - 1;
        if (ie >= 0)
          do {
            const He = this._ctxStack[ie--],
              ye = He.ns2prefix?.get(ee);
            if (ye) return ye
          } while (ie >= 0)
      }
      _escText(ee) {
        return ee.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(ee) {
        return this._escText(ee).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(ee, ie) {
        if (ee) return ee === QK.Xmlns;
        const He = ie.length,
          ye = QK.Xmlns.length;
        return He >= ye && (ie.startsWith(QK.Xmlns) && (ie.length == ye || ie[ye] == QK.Semicolon))
      }
      _registerNamespace(ee, ie, He) {
        if (ie === QK.Xml || ie === QK.Xmlns) throw new Error(`reserved prefix '${ie}'`);
        const ye = ee.prefix2ns.get(ie);
        if (ye && ye !== He) throw new Error(`prefix '${ie}' already bound to a different namespace`);
        ee.ns2prefix.get(He) || ee.ns2prefix.set(He, ie), ee.prefix2ns.set(ie, He)
      }
      _allocPrefix(ee) {
        let ie = 1;
        for (;;) {
          const He = "ns" + ie++;
          if (!ee.prefix2ns.has(He)) return He
        }
      }
      _ensurePrefixDeclared(ee, ie) {
        const He = this._lookupPrefix(ie);
        if (He) return He;
        if (ee.closed) throw new Error(`can not declare namespace after start tag closed for <${ee.name}>`);
        const ye = this._allocPrefix(ee);
        return this._writeAttStr(`${QK.Xmlns}:${ye}`, ie), this._registerNamespace(ee, ye, ie), ye
      }
      _closeOpenTagIfNeeded(ee) {
        ee.closed || (this._w.write(QK.CloseTag), ee.closed = !0)
      }
    }
    iU.Context = class {
      constructor(ee, ie) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = ee, this.depth = ie
      }
    };
    class HU {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        if (0 === ie.length) return this;
        const ye = ie.join("");
        return this._chunks.push(ye), this.count += ye.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class yU {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = ee, this._opts = ie, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        if (0 === ie.length) return this;
        const ye = ie.join("");
        if (0 === ye.length) return this;
        this._pending += ye, this._pendingChars += ye.length;
        const be = this._opts.flushChars ?? 65536;
        return this._pendingChars >= be && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const ee = this._encoder.encode(this._pending);
        return this._sink.push(ee), this.count += ee.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const bU = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      MU = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var KU, UU;
    ! function(ee) {
      ee.micron = "micron", ee.millimeter = "millimeter", ee.centimeter = "centimeter", ee.inch = "inch", ee.foot = "foot", ee.meter = "meter"
    }(KU || (KU = {})),
    function(ee) {
      ee.model = "model", ee.solidsupport = "solidsupport", ee.support = "support", ee.surface = "surface", ee.other = "other"
    }(UU || (UU = {}));
    const FU = "http://schemas.openxmlformats.org/package/2006/content-types",
      JU = "http://schemas.openxmlformats.org/package/2006/relationships";
    var oU;
    ! function(ee) {
      ee.Relationships = "application/vnd.openxmlformats-package.relationships+xml", ee.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", ee.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", ee.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", ee.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", ee.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", ee.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", ee.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", ee.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", ee.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", ee.Png = "image/png", ee.Jpeg = "image/jpeg", ee.Tiff = "image/tiff", ee.Xml = "application/xml"
    }(oU || (oU = {}));
    const RU = "_rels/",
      kU = "3D/",
      qU = "3dmodel.model",
      fU = ".rels",
      TU = "[Content_Types].xml";
    class pU {
      static IsKnown(ee) {
        return pU.Known.has(ee)
      }
      static IsThreeDimModel(ee) {
        return ee === pU.ThreeDimModel
      }
    }
    pU.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", pU.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", pU.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", pU.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", pU.Known = new Set([pU.ThreeDimModel, pU.Thumbnail, pU.PrintTicket, pU.MustPreserve]);
    let XU = (() => {
        let ee, ie, He = [VK({
            ns: FU,
            name: "Types"
          })],
          ye = [];
        ie = class {
          constructor() {
            this.items = []
          }
        };
        return (0, te.m)(ie, "ThreeMfContentTypes"), (() => {
          const be = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, te.i)(null, ee = {
            value: ie
          }, He, {
            kind: "class",
            name: ie.name,
            metadata: be
          }, null, ye), ie = ee.value, be && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: be
          }), (0, te.l)(ie, ye)
        })(), ie
      })(),
      zU = (() => {
        let ee, ie, He, ye, be = [VK({
            ns: FU,
            name: "Default"
          })],
          Me = [],
          Ke = [],
          Ue = [],
          Fe = [],
          Je = [];
        ie = class {
          constructor(ee, ie) {
            this.ext = (0, te.l)(this, Ke, void 0), this.ct = ((0, te.l)(this, Ue), (0, te.l)(this, Fe, void 0)), (0, te.l)(this, Je), this.ext = ee, this.ct = ie
          }
        };
        return (0, te.m)(ie, "ThreeMfContentType"), (() => {
          const oe = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          He = [cK({
            name: {
              ns: FU,
              name: "Extension"
            }
          })], ye = [cK({
            name: {
              ns: FU,
              name: "ContentType"
            }
          })], (0, te.i)(null, null, He, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: ee => "ext" in ee,
              get: ee => ee.ext,
              set: (ee, ie) => {
                ee.ext = ie
              }
            },
            metadata: oe
          }, Ke, Ue), (0, te.i)(null, null, ye, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: ee => "ct" in ee,
              get: ee => ee.ct,
              set: (ee, ie) => {
                ee.ct = ie
              }
            },
            metadata: oe
          }, Fe, Je), (0, te.i)(null, ee = {
            value: ie
          }, be, {
            kind: "class",
            name: ie.name,
            metadata: oe
          }, null, Me), ie = ee.value, oe && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oe
          }), (0, te.l)(ie, Me)
        })(), ie
      })(),
      BU = (() => {
        let ee, ie, He = [VK({
            ns: JU,
            name: "Relationships"
          })],
          ye = [];
        ie = class {
          constructor() {
            this.items = []
          }
        };
        return (0, te.m)(ie, "ThreeMfRelationships"), (() => {
          const be = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, te.i)(null, ee = {
            value: ie
          }, He, {
            kind: "class",
            name: ie.name,
            metadata: be
          }, null, ye), ie = ee.value, be && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: be
          }), (0, te.l)(ie, ye)
        })(), ie
      })(),
      EU = (() => {
        let ee, ie, He, ye, be, Me = [VK({
            ns: JU,
            name: "Relationship"
          })],
          Ke = [],
          Ue = [],
          Fe = [],
          Je = [],
          oe = [],
          Re = [],
          ke = [];
        ie = class {
          constructor(ee, ie, He) {
            this.id = (0, te.l)(this, Ue, void 0), this.type = ((0, te.l)(this, Fe), (0, te.l)(this, Je, void 0)), this.target = ((0, te.l)(this, oe), (0, te.l)(this, Re, void 0)), (0, te.l)(this, ke), this.id = ee, this.type = ie, this.target = He
          }
        };
        return (0, te.m)(ie, "ThreeMfRelationship"), (() => {
          const qe = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          He = [cK({
            name: "Id"
          })], ye = [cK({
            name: "Type"
          })], be = [cK({
            name: "Target"
          })], (0, te.i)(null, null, He, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: ee => "id" in ee,
              get: ee => ee.id,
              set: (ee, ie) => {
                ee.id = ie
              }
            },
            metadata: qe
          }, Ue, Fe), (0, te.i)(null, null, ye, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: ee => "type" in ee,
              get: ee => ee.type,
              set: (ee, ie) => {
                ee.type = ie
              }
            },
            metadata: qe
          }, Je, oe), (0, te.i)(null, null, be, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: ee => "target" in ee,
              get: ee => ee.target,
              set: (ee, ie) => {
                ee.target = ie
              }
            },
            metadata: qe
          }, Re, ke), (0, te.i)(null, ee = {
            value: ie
          }, Me, {
            kind: "class",
            name: ie.name,
            metadata: qe
          }, null, Ke), ie = ee.value, qe && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qe
          }), (0, te.l)(ie, Ke)
        })(), ie
      })();
    class gU {
      constructor(ee, ie, He) {
        this.contentTypes = ee, this.relationships = ie, this.model = He
      }
    }
    class OU {
      static Zero() {
        return new OU([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(ee) {
        this.values = ee
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class dU {
      constructor(ee) {
        this.o = ee, this._f = new sK(ee)
      }
      toString(ee) {
        return ee.values.map((ee => this._f.toString(ee))).join(" ")
      }
    }
    let WU = (() => {
        let ee, ie, He, ye, be, Me = [VK({
            ns: bU,
            name: "model"
          })],
          Ke = [],
          Ue = [],
          Fe = [],
          Je = [],
          oe = [],
          Re = [],
          ke = [];
        ie = class {
          constructor() {
            this.unit = (0, te.l)(this, Ue, KU.millimeter), this.requiredextensions = ((0, te.l)(this, Fe), (0, te.l)(this, Je, void 0)), this.recommendedextensions = ((0, te.l)(this, oe), (0, te.l)(this, Re, void 0)), this.metadata = (0, te.l)(this, ke)
          }
        };
        return (0, te.m)(ie, "ThreeMfModel"), (() => {
          const qe = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          He = [cK({
            name: "unit"
          })], ye = [cK({
            name: "requiredextensions"
          })], be = [cK({
            name: "recommendedextensions"
          })], (0, te.i)(null, null, He, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: ee => "unit" in ee,
              get: ee => ee.unit,
              set: (ee, ie) => {
                ee.unit = ie
              }
            },
            metadata: qe
          }, Ue, Fe), (0, te.i)(null, null, ye, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: ee => "requiredextensions" in ee,
              get: ee => ee.requiredextensions,
              set: (ee, ie) => {
                ee.requiredextensions = ie
              }
            },
            metadata: qe
          }, Je, oe), (0, te.i)(null, null, be, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: ee => "recommendedextensions" in ee,
              get: ee => ee.recommendedextensions,
              set: (ee, ie) => {
                ee.recommendedextensions = ie
              }
            },
            metadata: qe
          }, Re, ke), (0, te.i)(null, ee = {
            value: ie
          }, Me, {
            kind: "class",
            name: ie.name,
            metadata: qe
          }, null, Ke), ie = ee.value, qe && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qe
          })
        })(), ie.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, te.l)(ie, Ke), ie
      })(),
      tU = (() => {
        let ee, ie, He, ye, be, Me = [VK({
            ns: bU,
            name: "meta"
          })],
          Ke = [],
          Ue = [],
          Fe = [],
          Je = [],
          oe = [],
          Re = [],
          ke = [];
        ie = class {
          constructor(ee, ie, He, ye) {
            this.name = (0, te.l)(this, Ue, void 0), this.preserve = ((0, te.l)(this, Fe), (0, te.l)(this, Je, void 0)), this.type = ((0, te.l)(this, oe), (0, te.l)(this, Re, void 0)), this.value = (0, te.l)(this, ke), this.name = ee, this.value = ie, this.preserve = He, this.type = ye
          }
        };
        return (0, te.m)(ie, "ThreeMfMeta"), (() => {
          const qe = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          He = [cK({
            name: "name"
          })], ye = [cK({
            name: "preserve"
          })], be = [cK({
            name: "type"
          })], (0, te.i)(null, null, He, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: ee => "name" in ee,
              get: ee => ee.name,
              set: (ee, ie) => {
                ee.name = ie
              }
            },
            metadata: qe
          }, Ue, Fe), (0, te.i)(null, null, ye, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: ee => "preserve" in ee,
              get: ee => ee.preserve,
              set: (ee, ie) => {
                ee.preserve = ie
              }
            },
            metadata: qe
          }, Je, oe), (0, te.i)(null, null, be, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: ee => "type" in ee,
              get: ee => ee.type,
              set: (ee, ie) => {
                ee.type = ie
              }
            },
            metadata: qe
          }, Re, ke), (0, te.i)(null, ee = {
            value: ie
          }, Me, {
            kind: "class",
            name: ie.name,
            metadata: qe
          }, null, Ke), ie = ee.value, qe && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qe
          }), (0, te.l)(ie, Ke)
        })(), ie
      })(),
      ZU = (() => {
        let ee, ie, He = [VK({
            ns: bU,
            name: "metadatagroup"
          })],
          ye = [];
        ie = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, te.m)(ie, "ThreeMfMetadataGroup"), (() => {
          const be = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, te.i)(null, ee = {
            value: ie
          }, He, {
            kind: "class",
            name: ie.name,
            metadata: be
          }, null, ye), ie = ee.value, be && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: be
          }), (0, te.l)(ie, ye)
        })(), ie
      })(),
      wU = (() => {
        let ee, ie, He = [VK({
            ns: bU,
            name: "resources"
          })],
          ye = [];
        ie = class {
          constructor() {
            this.object = []
          }
        };
        return (0, te.m)(ie, "ThreeMfResources"), (() => {
          const be = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, te.i)(null, ee = {
            value: ie
          }, He, {
            kind: "class",
            name: ie.name,
            metadata: be
          }, null, ye), ie = ee.value, be && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: be
          }), (0, te.l)(ie, ye)
        })(), ie
      })(),
      DU = (() => {
        let ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je = [VK({
            ns: bU,
            name: "object"
          })],
          oe = [],
          Re = [],
          ke = [],
          qe = [],
          fe = [],
          Te = [],
          pe = [],
          Xe = [],
          ze = [],
          Be = [],
          Ee = [],
          ge = [],
          Oe = [],
          de = [],
          We = [];
        ie = class {
          constructor(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.model;
            this.id = (0, te.l)(this, Re, void 0), this.type = ((0, te.l)(this, ke), (0, te.l)(this, qe, void 0)), this.thumbnail = ((0, te.l)(this, fe), (0, te.l)(this, Te, void 0)), this.partnumber = ((0, te.l)(this, pe), (0, te.l)(this, Xe, void 0)), this.name = ((0, te.l)(this, ze), (0, te.l)(this, Be, void 0)), this.pid = ((0, te.l)(this, Ee), (0, te.l)(this, ge, void 0)), this.pindex = ((0, te.l)(this, Oe), (0, te.l)(this, de, void 0)), this.metadatagroup = (0, te.l)(this, We), this.id = ee, this.type = ie
          }
        };
        return (0, te.m)(ie, "ThreeMfObject"), (() => {
          const Ze = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          He = [cK({
            name: "id"
          })], ye = [cK({
            name: "type"
          })], be = [cK({
            name: "thumbnail"
          })], Me = [cK({
            name: "partnumber"
          })], Ke = [cK({
            name: "name"
          })], Ue = [cK({
            name: "pid"
          })], Fe = [cK({
            name: "pindex"
          })], (0, te.i)(null, null, He, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: ee => "id" in ee,
              get: ee => ee.id,
              set: (ee, ie) => {
                ee.id = ie
              }
            },
            metadata: Ze
          }, Re, ke), (0, te.i)(null, null, ye, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: ee => "type" in ee,
              get: ee => ee.type,
              set: (ee, ie) => {
                ee.type = ie
              }
            },
            metadata: Ze
          }, qe, fe), (0, te.i)(null, null, be, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: ee => "thumbnail" in ee,
              get: ee => ee.thumbnail,
              set: (ee, ie) => {
                ee.thumbnail = ie
              }
            },
            metadata: Ze
          }, Te, pe), (0, te.i)(null, null, Me, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: ee => "partnumber" in ee,
              get: ee => ee.partnumber,
              set: (ee, ie) => {
                ee.partnumber = ie
              }
            },
            metadata: Ze
          }, Xe, ze), (0, te.i)(null, null, Ke, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: ee => "name" in ee,
              get: ee => ee.name,
              set: (ee, ie) => {
                ee.name = ie
              }
            },
            metadata: Ze
          }, Be, Ee), (0, te.i)(null, null, Ue, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: ee => "pid" in ee,
              get: ee => ee.pid,
              set: (ee, ie) => {
                ee.pid = ie
              }
            },
            metadata: Ze
          }, ge, Oe), (0, te.i)(null, null, Fe, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: ee => "pindex" in ee,
              get: ee => ee.pindex,
              set: (ee, ie) => {
                ee.pindex = ie
              }
            },
            metadata: Ze
          }, de, We), (0, te.i)(null, ee = {
            value: ie
          }, Je, {
            kind: "class",
            name: ie.name,
            metadata: Ze
          }, null, oe), ie = ee.value, Ze && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ze
          }), (0, te.l)(ie, oe)
        })(), ie
      })(),
      PU = (() => {
        let ee, ie, He = [VK({
            ns: bU,
            name: "mesh"
          })],
          ye = [];
        ie = class {
          constructor(ee, ie) {
            this.vertices = ee ?? new AU, this.triangles = ie ?? new VU
          }
        };
        return (0, te.m)(ie, "ThreeMfMesh"), (() => {
          const be = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, te.i)(null, ee = {
            value: ie
          }, He, {
            kind: "class",
            name: ie.name,
            metadata: be
          }, null, ye), ie = ee.value, be && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: be
          }), (0, te.l)(ie, ye)
        })(), ie
      })(),
      AU = (() => {
        let ee, ie, He = [VK({
            ns: bU,
            name: "vertices"
          })],
          ye = [];
        ie = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, te.m)(ie, "ThreeMfVertices"), (() => {
          const be = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, te.i)(null, ee = {
            value: ie
          }, He, {
            kind: "class",
            name: ie.name,
            metadata: be
          }, null, ye), ie = ee.value, be && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: be
          }), (0, te.l)(ie, ye)
        })(), ie
      })(),
      YU = (() => {
        let ee, ie, He, ye, be, Me = [VK({
            ns: bU,
            name: "vertex"
          })],
          Ke = [],
          Ue = [],
          Fe = [],
          Je = [],
          oe = [],
          Re = [],
          ke = [];
        ie = class {
          constructor() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, te.l)(this, Ue, void 0), this.y = ((0, te.l)(this, Fe), (0, te.l)(this, Je, void 0)), this.z = ((0, te.l)(this, oe), (0, te.l)(this, Re, void 0)), (0, te.l)(this, ke), this.x = ee, this.y = ie, this.z = He
          }
        };
        return (0, te.m)(ie, "ThreeMfVertex"), (() => {
          const qe = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          He = [cK({
            name: "x"
          })], ye = [cK({
            name: "y"
          })], be = [cK({
            name: "z"
          })], (0, te.i)(null, null, He, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: ee => "x" in ee,
              get: ee => ee.x,
              set: (ee, ie) => {
                ee.x = ie
              }
            },
            metadata: qe
          }, Ue, Fe), (0, te.i)(null, null, ye, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: ee => "y" in ee,
              get: ee => ee.y,
              set: (ee, ie) => {
                ee.y = ie
              }
            },
            metadata: qe
          }, Je, oe), (0, te.i)(null, null, be, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: ee => "z" in ee,
              get: ee => ee.z,
              set: (ee, ie) => {
                ee.z = ie
              }
            },
            metadata: qe
          }, Re, ke), (0, te.i)(null, ee = {
            value: ie
          }, Me, {
            kind: "class",
            name: ie.name,
            metadata: qe
          }, null, Ke), ie = ee.value, qe && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qe
          }), (0, te.l)(ie, Ke)
        })(), ie
      })(),
      VU = (() => {
        let ee, ie, He = [VK({
            ns: bU,
            name: "triangles"
          })],
          ye = [];
        ie = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, te.m)(ie, "ThreeMfTriangles"), (() => {
          const be = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, te.i)(null, ee = {
            value: ie
          }, He, {
            kind: "class",
            name: ie.name,
            metadata: be
          }, null, ye), ie = ee.value, be && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: be
          }), (0, te.l)(ie, ye)
        })(), ie
      })(),
      aU = (() => {
        let ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je = [VK({
            ns: bU,
            name: "triangle"
          })],
          oe = [],
          Re = [],
          ke = [],
          qe = [],
          fe = [],
          Te = [],
          pe = [],
          Xe = [],
          ze = [],
          Be = [],
          Ee = [],
          ge = [],
          Oe = [],
          de = [],
          We = [];
        ie = class {
          constructor(ee, ie, He) {
            this.v1 = (0, te.l)(this, Re, void 0), this.v2 = ((0, te.l)(this, ke), (0, te.l)(this, qe, void 0)), this.v3 = ((0, te.l)(this, fe), (0, te.l)(this, Te, void 0)), this.p1 = ((0, te.l)(this, pe), (0, te.l)(this, Xe, void 0)), this.p2 = ((0, te.l)(this, ze), (0, te.l)(this, Be, void 0)), this.p3 = ((0, te.l)(this, Ee), (0, te.l)(this, ge, void 0)), this.pid = ((0, te.l)(this, Oe), (0, te.l)(this, de, void 0)), (0, te.l)(this, We), this.v1 = ee, this.v2 = ie, this.v3 = He
          }
        };
        return (0, te.m)(ie, "ThreeMfTriangle"), (() => {
          const Ze = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          He = [cK({
            name: "v1"
          })], ye = [cK({
            name: "v2"
          })], be = [cK({
            name: "v3"
          })], Me = [cK({
            name: "p1"
          })], Ke = [cK({
            name: "p2"
          })], Ue = [cK({
            name: "p3"
          })], Fe = [cK({
            name: "pid"
          })], (0, te.i)(null, null, He, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: ee => "v1" in ee,
              get: ee => ee.v1,
              set: (ee, ie) => {
                ee.v1 = ie
              }
            },
            metadata: Ze
          }, Re, ke), (0, te.i)(null, null, ye, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: ee => "v2" in ee,
              get: ee => ee.v2,
              set: (ee, ie) => {
                ee.v2 = ie
              }
            },
            metadata: Ze
          }, qe, fe), (0, te.i)(null, null, be, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: ee => "v3" in ee,
              get: ee => ee.v3,
              set: (ee, ie) => {
                ee.v3 = ie
              }
            },
            metadata: Ze
          }, Te, pe), (0, te.i)(null, null, Me, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: ee => "p1" in ee,
              get: ee => ee.p1,
              set: (ee, ie) => {
                ee.p1 = ie
              }
            },
            metadata: Ze
          }, Xe, ze), (0, te.i)(null, null, Ke, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: ee => "p2" in ee,
              get: ee => ee.p2,
              set: (ee, ie) => {
                ee.p2 = ie
              }
            },
            metadata: Ze
          }, Be, Ee), (0, te.i)(null, null, Ue, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: ee => "p3" in ee,
              get: ee => ee.p3,
              set: (ee, ie) => {
                ee.p3 = ie
              }
            },
            metadata: Ze
          }, ge, Oe), (0, te.i)(null, null, Fe, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: ee => "pid" in ee,
              get: ee => ee.pid,
              set: (ee, ie) => {
                ee.pid = ie
              }
            },
            metadata: Ze
          }, de, We), (0, te.i)(null, ee = {
            value: ie
          }, Je, {
            kind: "class",
            name: ie.name,
            metadata: Ze
          }, null, oe), ie = ee.value, Ze && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ze
          }), (0, te.l)(ie, oe)
        })(), ie
      })(),
      cU = (() => {
        let ee, ie, He = [VK({
            ns: bU,
            name: "components"
          })],
          ye = [];
        ie = class {
          constructor() {
            this.component = []
          }
        };
        return (0, te.m)(ie, "ThreeMfComponents"), (() => {
          const be = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, te.i)(null, ee = {
            value: ie
          }, He, {
            kind: "class",
            name: ie.name,
            metadata: be
          }, null, ye), ie = ee.value, be && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: be
          }), (0, te.l)(ie, ye)
        })(), ie
      })(),
      xU = (() => {
        let ee, ie, He, ye, be = [VK({
            ns: bU,
            name: "component"
          })],
          Me = [],
          Ke = [],
          Ue = [],
          Fe = [],
          Je = [];
        ie = class {
          constructor(ee, ie) {
            this.objectid = (0, te.l)(this, Ke, void 0), this.transform = ((0, te.l)(this, Ue), (0, te.l)(this, Fe, void 0)), (0, te.l)(this, Je), this.objectid = ee, this.transform = ie
          }
        };
        return (0, te.m)(ie, "ThreeMfComponent"), (() => {
          const oe = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          He = [cK({
            name: "objectid"
          })], ye = [cK({
            name: "transform",
            formatter: dU
          })], (0, te.i)(null, null, He, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: ee => "objectid" in ee,
              get: ee => ee.objectid,
              set: (ee, ie) => {
                ee.objectid = ie
              }
            },
            metadata: oe
          }, Ke, Ue), (0, te.i)(null, null, ye, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: ee => "transform" in ee,
              get: ee => ee.transform,
              set: (ee, ie) => {
                ee.transform = ie
              }
            },
            metadata: oe
          }, Fe, Je), (0, te.i)(null, ee = {
            value: ie
          }, be, {
            kind: "class",
            name: ie.name,
            metadata: oe
          }, null, Me), ie = ee.value, oe && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oe
          }), (0, te.l)(ie, Me)
        })(), ie
      })(),
      LU = (() => {
        let ee, ie, He, ye = [VK({
            ns: bU,
            name: "basematerials"
          })],
          be = [],
          Me = [],
          Ke = [];
        ie = class {
          constructor(ee) {
            this.id = (0, te.l)(this, Me, void 0), this.base = ((0, te.l)(this, Ke), []), this.id = ee
          }
        };
        return (0, te.m)(ie, "ThreeMfBaseMaterials"), (() => {
          const Ue = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          He = [cK({
            name: "id"
          })], (0, te.i)(null, null, He, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: ee => "id" in ee,
              get: ee => ee.id,
              set: (ee, ie) => {
                ee.id = ie
              }
            },
            metadata: Ue
          }, Me, Ke), (0, te.i)(null, ee = {
            value: ie
          }, ye, {
            kind: "class",
            name: ie.name,
            metadata: Ue
          }, null, be), ie = ee.value, Ue && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ue
          }), (0, te.l)(ie, be)
        })(), ie
      })(),
      CU = (() => {
        let ee, ie, He, ye, be = [VK({
            ns: bU,
            name: "base"
          })],
          Me = [],
          Ke = [],
          Ue = [],
          Fe = [],
          Je = [];
        ie = class {
          constructor(ee, ie) {
            this.name = (0, te.l)(this, Ke, void 0), this.displaycolor = ((0, te.l)(this, Ue), (0, te.l)(this, Fe, void 0)), (0, te.l)(this, Je), this.name = ee, this.displaycolor = ie
          }
        };
        return (0, te.m)(ie, "ThreeMfBase"), (() => {
          const oe = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          He = [cK({
            name: "name"
          })], ye = [cK({
            name: "displaycolor"
          })], (0, te.i)(null, null, He, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: ee => "name" in ee,
              get: ee => ee.name,
              set: (ee, ie) => {
                ee.name = ie
              }
            },
            metadata: oe
          }, Ke, Ue), (0, te.i)(null, null, ye, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: ee => "displaycolor" in ee,
              get: ee => ee.displaycolor,
              set: (ee, ie) => {
                ee.displaycolor = ie
              }
            },
            metadata: oe
          }, Fe, Je), (0, te.i)(null, ee = {
            value: ie
          }, be, {
            kind: "class",
            name: ie.name,
            metadata: oe
          }, null, Me), ie = ee.value, oe && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oe
          }), (0, te.l)(ie, Me)
        })(), ie
      })(),
      vU = (() => {
        let ee, ie, He = [VK({
            ns: bU,
            name: "build"
          })],
          ye = [];
        ie = class {
          constructor() {
            this.item = []
          }
        };
        return (0, te.m)(ie, "ThreeMfBuild"), (() => {
          const be = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, te.i)(null, ee = {
            value: ie
          }, He, {
            kind: "class",
            name: ie.name,
            metadata: be
          }, null, ye), ie = ee.value, be && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: be
          }), (0, te.l)(ie, ye)
        })(), ie
      })(),
      uU = (() => {
        let ee, ie, He, ye, be, Me = [VK({
            ns: bU,
            name: "item"
          })],
          Ke = [],
          Ue = [],
          Fe = [],
          Je = [],
          oe = [],
          Re = [],
          ke = [];
        ie = class {
          constructor(ee, ie, He) {
            this.objectid = (0, te.l)(this, Ue, void 0), this.transform = ((0, te.l)(this, Fe), (0, te.l)(this, Je, void 0)), this.partnumber = ((0, te.l)(this, oe), (0, te.l)(this, Re, void 0)), this.metadatagroup = (0, te.l)(this, ke), this.objectid = ee, this.transform = ie, this.partnumber = He
          }
        };
        return (0, te.m)(ie, "ThreeMfItem"), (() => {
          const qe = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          He = [cK({
            name: "objectid"
          })], ye = [cK({
            name: "transform",
            formatter: dU
          })], be = [cK({
            name: "partnumber"
          })], (0, te.i)(null, null, He, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: ee => "objectid" in ee,
              get: ee => ee.objectid,
              set: (ee, ie) => {
                ee.objectid = ie
              }
            },
            metadata: qe
          }, Ue, Fe), (0, te.i)(null, null, ye, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: ee => "transform" in ee,
              get: ee => ee.transform,
              set: (ee, ie) => {
                ee.transform = ie
              }
            },
            metadata: qe
          }, Je, oe), (0, te.i)(null, null, be, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: ee => "partnumber" in ee,
              get: ee => ee.partnumber,
              set: (ee, ie) => {
                ee.partnumber = ie
              }
            },
            metadata: qe
          }, Re, ke), (0, te.i)(null, ee = {
            value: ie
          }, Me, {
            kind: "class",
            name: ie.name,
            metadata: qe
          }, null, Ke), ie = ee.value, qe && Object.defineProperty(ie, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qe
          }), (0, te.l)(ie, Ke)
        })(), ie
      })();
    class mU {
      constructor(ee, ie) {
        this._object = new DU(ee, ie)
      }
      withName(ee) {
        return this._object.name = ee, this
      }
      withThumbnail(ee) {
        return this._object.thumbnail = ee, this
      }
      withProperty(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = ee, this._object.id = ie, this
      }
      build() {
        return this._object
      }
      reset(ee, ie) {
        this._object = new DU(ee, ie)
      }
    }
    class lU extends mU {
      constructor(ee) {
        super(ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.model), this._object.content = new cU
      }
      withComponent(ee, ie) {
        return this._object.content.component.push(new xU(ee, ie)), this
      }
    }
    class SU extends mU {
      constructor(ee) {
        super(ee, UU.model)
      }
      withPostProcessHandlers(ee, ie) {
        return this._vh = ee, this._th = ie, this
      }
      withData(ee) {
        return this._object.content = this._buildMesh(ee), this
      }
      withMaterial(ee, ie) {
        return this._object.pid = ee, this._object.pindex = ie, this
      }
      _buildMesh(ee) {
        const ie = this._buildVertices(ee.positions),
          He = this._buildTriangle(ee.indices);
        return new PU(ie, He)
      }
      _buildVertices(ee) {
        const ie = new AU;
        if (ee)
          for (let He = 0; He < ee.length;) {
            const ye = ee[He++],
              be = ee[He++],
              Me = ee[He++];
            let Ke = new YU(ye, be, Me);
            this._vh && (Ke = this._vh(Ke)), ie.vertex.push(Ke)
          }
        return ie
      }
      _buildTriangle(ee) {
        const ie = new VU;
        if (ee)
          for (let He = 0; He < ee.length;) {
            const ye = ee[He++],
              be = ee[He++],
              Me = ee[He++];
            let Ke = new aU(ye, be, Me);
            this._th && (Ke = this._th(Ke)), ie.triangle.push(Ke)
          }
        return ie
      }
    }
    class nU {
      constructor(ee) {
        this._m = new LU(ee)
      }
      withColor(ee, ie) {
        this._m.base = this._m.base ?? [];
        let He = this._m.base.find((ie => ie.name.toLowerCase() === ee.toLowerCase()));
        return He ? (He.displaycolor = this._rgbaToHex(ie), this) : (He = new CU(ee, this._rgbaToHex(ie)), this._m.base.push(He), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(ee) {
        const ie = ee => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(ee, 1 / 2.2)))),
          He = ie(ee.r).toString(16).padStart(2, "0").toUpperCase(),
          ye = ie(ee.g).toString(16).padStart(2, "0").toUpperCase(),
          be = ie(ee.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof ee.a) {
          return `#${He}${ye}${be}${Math.round(Math.min(255,Math.max(0,255*ee.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${He}${ye}${be}`
      }
    }
    class jU {
      constructor() {
        this._model = new WU, this._objects = new Map
      }
      withMetaData(ee, ie, He, ye) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new tU(ee, ie, He, ye)), this
      }
      withMaterial(ee) {
        return ee instanceof nU && (ee = ee.build()), ee && (this._model.resources = this._model.resources ?? new wU, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(ee)), this
      }
      withMesh(ee) {
        return ee instanceof SU && (ee = ee.build()), this._model.resources = this._model.resources ?? new wU, this._model.resources.object.push(ee), this
      }
      withComponents(ee) {
        return ee instanceof lU && (ee = ee.build()), this._model.resources = this._model.resources ?? new wU, this._model.resources.object.push(ee), this
      }
      withBuild(ee, ie, He) {
        return this._model.build = this._model.build ?? new vU, this._model.build.item?.push(new uU(ee, ie, He)), this
      }
      withUnit(ee) {
        return this._model.unit = ee, this
      }
      reset() {
        return this._model = new WU, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    jU.KnownMetaSet = new Set(WU.KnownMeta.map((ee => ee.toLowerCase())));
    class sU {
      withContentType(ee) {
        this._cts || (this._cts = new XU);
        const ie = this._cts.items;
        return ie.some((ie => ie.ext === ee.ext && ie.ct === ee.ct)) || ie.push(ee), this
      }
      withRelationship(ee) {
        this._rs || (this._rs = new BU);
        const ie = this._rs.items;
        return ie.some((ie => ie.id === ee.id)) || ie.push(ee), this.withContentType(new zU("rels", oU.Relationships)), this
      }
      withModel(ee) {
        return ee instanceof jU && (ee = ee.build()), this._m = ee, this.withContentType(new zU("model", oU.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const ee = `${kU}${qU}`;
        if (!this._rs) {
          const ie = `/${ee}`;
          this.withRelationship(new EU("rel0", pU.ThreeDimModel, ie))
        }
        return new gU(this._cts, this._rs, this._m)
      }
    }
    class IU {
      constructor(ee) {
        this._o = ee
      }
      get options() {
        return this._o
      }
      async serializeAsync(ee) {
        const ie = await this.ensureZipLibReadyAsync();
        if (!ie) return;
        const He = ie.Zip,
          ye = ie.ZipDeflate;
        if (!He || !ye) throw new Error("fflate Zip / ZipDeflate not available");
        const be = function(ee, ie, He) {
          const be = new ye(ie, {
            level: 6
          });
          ee.add(be);
          const Me = function(ee) {
              return {
                push: (ie, He) => ee.push(ie, He)
              }
            }(be),
            Ke = new yU(Me),
            Ue = new iU(Ke).dec("1.0", "UTF-8");
          new rK(Ue).serialize(He), Ke.finish()
        };
        for (var Me = arguments.length, Ke = new Array(Me > 1 ? Me - 1 : 0), Ue = 1; Ue < Me; Ue++) Ke[Ue - 1] = arguments[Ue];
        const Fe = this.toDocument(...Ke);
        if (!Fe) return;
        const Je = new He(ee);
        be(Je, TU, Fe.contentTypes), be(Je, `${RU}${fU}`, Fe.relationships), be(Je, `${kU}${qU}`, Fe.model), Je.end()
      }
      toDocument() {
        const ee = (new jU).withUnit(this._o?.unit ?? KU.millimeter);
        if (this.options.metadata)
          for (const be in this.options.metadata) ee.withMetaData(be, this.options.metadata[be]);
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        return (new sU).withModel(this.toModel(ee, ...He)).build()
      }
    }
    class hU {
      static async SerializeToMemoryAsync(ee) {
        const ie = new Array;
        let He = 0;
        for (var ye = arguments.length, be = new Array(ye > 1 ? ye - 1 : 0), Me = 1; Me < ye; Me++) be[Me - 1] = arguments[Me];
        if (await ee.serializeAsync((function(ee, ye, be) {
            ie.push(ye), He += ye.length
          }), ...be), !He) return;
        const Ke = new Uint8Array(He);
        let Ue = 0;
        for (const Fe of ie) Ke.set(Fe, Ue), Ue += Fe.length;
        return Ke
      }
    }
    class NU {}
    NU.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class GU {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = ee, this._to = ie, this._step = He, this._i = ee
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const ee = this._i;
        return this._i += this._step, ee
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class rU extends IU {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...rU.DefaultOptions,
          ...ee
        })
      }
      toModel(ee) {
        for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
        He = He.filter((ee => ee instanceof Ry.e || ee instanceof qe.d));
        const be = new GU,
          Me = ee,
          Ke = new Map,
          Ue = this.options.exportInstances ? [] : null;
        for (let Fe = 0; Fe < He.length; Fe++) {
          const ee = He[Fe];
          if (ee instanceof qe.d) {
            Ue?.push(ee);
            continue
          }
          const ie = ee.name || `mesh${Fe}`,
            ye = ee.getWorldMatrix(),
            Je = this._handleBabylonTo3mfMatrixTransformToRef(ye, OU.Zero()),
            oe = ee.pW;
          if (void 0 === oe) continue;
          const Re = 1 == oe.length;
          for (let He = 0; He < oe.length; He++) {
            const ye = oe[He],
              Ue = this._extractSubMesh(ee, ye);
            if (Ue) {
              const ee = Re ? `${ie}` : `${ie}_${He}`,
                Fe = new SU(be.next()).withData(Ue).withName(ee).build();
              Me.withMesh(Fe), Me.withBuild(Fe.id, Je), Ke.set(ye, Fe)
            }
          }
        }
        if (Ue && Ue.length) {
          const ee = this._groupBy(Ue, (ee => ee.jMe));
          for (const [ie, He] of Array.from(ee.entries()))
            if (He && He.length)
              for (let ee = 0; ee < He.length; ee++) {
                const ye = He[ee].getWorldMatrix(),
                  be = ie.pW;
                for (let ee = 0; ee < be.length; ee++) {
                  const ie = be[ee],
                    He = Ke.get(ie);
                  He && Me.withBuild(He.id, this._handleBabylonTo3mfMatrixTransformToRef(ye, OU.Zero()))
                }
              }
        }
        return Me.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const ee = globalThis;
          return ee.fflate || await be.Tools.LoadScriptAsync(NU.FFLATEUrl), ee.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(ee, ie) {
        const He = ee.eMe();
        if (!He) return;
        const ye = ee.getVerticesData(rU._PositionKind);
        if (!ye) return;
        if (0 == ie.indexStart && ie.indexCount == He.length) return {
          positions: ye,
          indices: He
        };
        const be = ie.indexStart,
          Me = new Map,
          Ke = [],
          Ue = new Uint32Array(ie.indexCount);
        for (let Fe = 0; Fe < ie.indexCount; Fe++) {
          const ee = He[be + Fe];
          let ie = Me.get(ee);
          if (void 0 === ie) {
            ie = Me.size, Me.set(ee, ie);
            const He = 3 * ee;
            Ke.push(ye[He], ye[He + 1], ye[He + 2])
          }
          Ue[Fe] = ie
        }
        return {
          positions: new Float32Array(Ke),
          indices: Ue
        }
      }
      _groupBy(ee, ie) {
        const He = new Map;
        for (const ye of ee) {
          const ee = ie(ye),
            be = He.get(ee);
          be ? be.push(ye) : He.set(ee, [ye])
        }
        return He
      }
      _handleBabylonTo3mfMatrixTransformToRef(ee, ie) {
        const He = ee.multiplyToRef(rU._R_BJS_TO_3MF, Ce.b.Zero()).m;
        return ie.values = [He[0], He[1], He[2], He[4], He[5], He[6], He[8], He[9], He[10], He[12], He[13], He[14]], ie
      }
    }
    rU.DefaultOptions = {
      unit: KU.meter,
      exportInstances: !1
    }, rU._PositionKind = "position", rU._R_BJS_TO_3MF = Ce.b.RotationX(Math.PI / 2).multiply(Ce.b.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);