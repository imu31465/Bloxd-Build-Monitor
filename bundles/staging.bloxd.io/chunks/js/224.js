export const id = 224;
export const ids = [224, 229];
export const modules = {
  40932: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    var Ab = Ub(40879),
      Mb = Ub(39099);
    let Tb = !1;

    function Eb() {
      Tb || (Tb = !0, Mb.b.prototype._sphericalPolynomialTargetSize = 0, Mb.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Mb.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Ab.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((bb => {
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
  36587: (bb, ab, Ub) => {
    Ub.d(ab, {
      Color3: () => Ab.c,
      b: () => Ab.g
    });
    var Ab = Ub(36593);
    (0, Ab.k)()
  },
  37113: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    var Ab = Ub(37122);
    class Mb {
      static GetPlanes(bb) {
        const ab = [];
        for (let Ub = 0; Ub < 6; Ub++) ab.push(new Ab.b(0, 0, 0, 0));
        return Mb.GetPlanesToRef(bb, ab), ab
      }
      static GetNearPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[2], ab.normal.y = Ub[7] + Ub[6], ab.normal.z = Ub[11] + Ub[10], ab.d = Ub[15] + Ub[14], ab.normalize()
      }
      static GetFarPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[2], ab.normal.y = Ub[7] - Ub[6], ab.normal.z = Ub[11] - Ub[10], ab.d = Ub[15] - Ub[14], ab.normalize()
      }
      static GetLeftPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[0], ab.normal.y = Ub[7] + Ub[4], ab.normal.z = Ub[11] + Ub[8], ab.d = Ub[15] + Ub[12], ab.normalize()
      }
      static GetRightPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[0], ab.normal.y = Ub[7] - Ub[4], ab.normal.z = Ub[11] - Ub[8], ab.d = Ub[15] - Ub[12], ab.normalize()
      }
      static GetTopPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[1], ab.normal.y = Ub[7] - Ub[5], ab.normal.z = Ub[11] - Ub[9], ab.d = Ub[15] - Ub[13], ab.normalize()
      }
      static GetBottomPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[1], ab.normal.y = Ub[7] + Ub[5], ab.normal.z = Ub[11] + Ub[9], ab.d = Ub[15] + Ub[13], ab.normalize()
      }
      static GetPlanesToRef(bb, ab) {
        Mb.GetNearPlaneToRef(bb, ab[0]), Mb.GetFarPlaneToRef(bb, ab[1]), Mb.GetLeftPlaneToRef(bb, ab[2]), Mb.GetRightPlaneToRef(bb, ab[3]), Mb.GetTopPlaneToRef(bb, ab[4]), Mb.GetBottomPlaneToRef(bb, ab[5])
      }
      static IsPointInFrustum(bb, ab) {
        for (let Ub = 0; Ub < 6; Ub++)
          if (ab[Ub].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37122: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb
    });
    var Ab = Ub(36401);
    class Mb {
      constructor(bb, ab, Ub, Mb) {
        this.normal = new Ab.m(bb, ab, Ub), this.d = Mb
      }
      qUb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Mb(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let ab = 0;
        return 0 !== bb && (ab = 1 / bb), this.normal.x *= ab, this.normal.y *= ab, this.normal.z *= ab, this.d *= ab, this
      }
      transform(bb) {
        const ab = Mb._TmpMatrix;
        bb.invertToRef(ab);
        const Ub = ab.m,
          Ab = this.normal.x,
          Tb = this.normal.y,
          Eb = this.normal.z,
          Yb = this.d,
          Bb = Ab * Ub[0] + Tb * Ub[1] + Eb * Ub[2] + Yb * Ub[3],
          eb = Ab * Ub[4] + Tb * Ub[5] + Eb * Ub[6] + Yb * Ub[7],
          vb = Ab * Ub[8] + Tb * Ub[9] + Eb * Ub[10] + Yb * Ub[11],
          Lb = Ab * Ub[12] + Tb * Ub[13] + Eb * Ub[14] + Yb * Ub[15];
        return new Mb(Bb, eb, vb, Lb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, ab, Ub) {
        const Ab = ab.x - bb.x,
          Mb = ab.y - bb.y,
          Tb = ab.z - bb.z,
          Eb = Ub.x - bb.x,
          Yb = Ub.y - bb.y,
          Bb = Ub.z - bb.z,
          eb = Mb * Bb - Tb * Yb,
          vb = Tb * Eb - Ab * Bb,
          Lb = Ab * Yb - Mb * Eb,
          Pb = Math.sqrt(eb * eb + vb * vb + Lb * Lb);
        let Xb;
        return Xb = 0 !== Pb ? 1 / Pb : 0, this.normal.x = eb * Xb, this.normal.y = vb * Xb, this.normal.z = Lb * Xb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, ab) {
        return Ab.m.Dot(this.normal, bb) <= ab
      }
      signedDistanceTo(bb) {
        return Ab.m.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Mb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, ab, Ub) {
        const Ab = new Mb(0, 0, 0, 0);
        return Ab.copyFromPoints(bb, ab, Ub), Ab
      }
      static FromPositionAndNormal(bb, ab) {
        const Ub = new Mb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, ab, Ub)
      }
      static FromPositionAndNormalToRef(bb, ab, Ub) {
        return Ub.normal.EUb(ab), Ub.normal.normalize(), Ub.d = -bb.dot(Ub.normal), Ub
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, ab, Ub) {
        const Mb = -(ab.x * bb.x + ab.y * bb.y + ab.z * bb.z);
        return Ab.m.Dot(Ub, ab) + Mb
      }
    }
    Mb._TmpMatrix = Ab.b.Identity()
  },
  36392: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      Matrix: () => Ab.b,
      Quaternion: () => Ab.e,
      RegisterMathVector: () => Ab.i,
      TmpVectors: () => Ab.j,
      Vector2: () => Ab.l,
      Pj: () => Ab.m,
      Vector4: () => Ab.o
    });
    var Ab = Ub(36401);
    (0, Ab.i)()
  },
  37429: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    class Ab {
      constructor(bb, ab, Ub, Ab) {
        this.x = bb, this.y = ab, this.width = Ub, this.height = Ab
      }
      toGlobal(bb, ab) {
        return new Ab(this.x * bb, this.y * ab, this.width * bb, this.height * ab)
      }
      toGlobalToRef(bb, ab, Ub) {
        return Ub.x = this.x * bb, Ub.y = this.y * ab, Ub.width = this.width * bb, Ub.height = this.height * ab, this
      }
      clone() {
        return new Ab(this.x, this.y, this.width, this.height)
      }
    }
  },
  40879: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => eb
    });
    var Ab = Ub(36401),
      Mb = Ub(36436),
      Tb = Ub(39090),
      Eb = Ub(36405),
      Yb = Ub(36593);
    class Bb {
      constructor(bb, ab, Ub, Ab) {
        this.name = bb, this.worldAxisForNormal = ab, this.worldAxisForFileX = Ub, this.worldAxisForFileY = Ab
      }
    }
    class eb {
      static _NearestPow2Floor(bb) {
        return bb <= 1 ? 1 : 1 << Math.floor(Math.log2(bb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(bb) {
        if (!bb.isCube) return null;
        bb.oN()?.vj().flushFramebuffer();
        const ab = bb.getSize().width,
          Ub = bb._sphericalPolynomialTargetSize,
          Ab = Ub > 0 ? this._NearestPow2Floor(Ub) : 0,
          Mb = !bb.noMipmap && !0 === bb._texture?.generateMipMaps,
          Tb = Ab > 0 && Ab < ab && Mb,
          Eb = Tb ? Math.max(0, Math.round(Math.log2(ab / Ab))) : 0,
          Yb = Tb ? Math.max(1, Math.floor(ab / Math.pow(2, Eb))) : ab,
          Bb = bb.readPixels(0, Eb, void 0, !1),
          eb = bb.readPixels(1, Eb, void 0, !1);
        let vb, Lb;
        bb.isRenderTarget ? (vb = bb.readPixels(3, Eb, void 0, !1), Lb = bb.readPixels(2, Eb, void 0, !1)) : (vb = bb.readPixels(2, Eb, void 0, !1), Lb = bb.readPixels(3, Eb, void 0, !1));
        const Pb = bb.readPixels(4, Eb, void 0, !1),
          Xb = bb.readPixels(5, Eb, void 0, !1),
          jb = bb.gammaSpace,
          Rb = Ab > 0 && Ab < ab && !Tb;
        return new Promise((bb => {
          Promise.all([eb, Bb, vb, Lb, Pb, Xb]).then((Ub => {
            let [Mb, Tb, Eb, Bb, eb, vb] = Ub, Lb = Yb;
            if (Rb) {
              const bb = 4;
              Mb = this._DownsampleFace(Mb, ab, Ab, bb), Tb = this._DownsampleFace(Tb, ab, Ab, bb), Eb = this._DownsampleFace(Eb, ab, Ab, bb), Bb = this._DownsampleFace(Bb, ab, Ab, bb), eb = this._DownsampleFace(eb, ab, Ab, bb), vb = this._DownsampleFace(vb, ab, Ab, bb), Lb = Ab
            }
            const Pb = {
              size: Lb,
              right: Tb,
              left: Mb,
              up: Eb,
              down: Bb,
              front: eb,
              back: vb,
              format: 5,
              type: Mb instanceof Float32Array ? 1 : 0,
              gammaSpace: jb
            };
            bb(this.ConvertCubeMapToSphericalPolynomial(Pb))
          }))
        }))
      }
      static _AreaElement(bb, ab) {
        return Math.atan2(bb * ab, Math.sqrt(bb * bb + ab * ab + 1))
      }
      static _DownsampleFace(bb, ab, Ub, Ab) {
        const Mb = bb instanceof Float32Array ? bb : Float32Array.from(bb),
          Tb = Ub * Ub * Ab,
          Eb = new Float32Array(Tb),
          Yb = ab / Ub,
          Bb = 1 / (Yb * Yb);
        for (let vb = 0; vb < Ub; vb++) {
          const bb = Math.floor(vb * Yb),
            Tb = Math.floor((vb + 1) * Yb);
          for (let eb = 0; eb < Ub; eb++) {
            const Lb = Math.floor(eb * Yb),
              Pb = Math.floor((eb + 1) * Yb),
              Xb = (vb * Ub + eb) * Ab;
            for (let Ub = 0; Ub < Ab; Ub++) {
              let Yb = 0;
              for (let Eb = bb; Eb < Tb; Eb++)
                for (let bb = Lb; bb < Pb; bb++) Yb += Mb[(Eb * ab + bb) * Ab + Ub];
              Eb[Xb + Ub] = Yb * Bb
            }
          }
        }
        if (bb instanceof Float32Array) return Eb;
        const eb = new(0, bb.constructor)(Tb);
        for (let vb = 0; vb < Tb; vb++) eb[vb] = Eb[vb] + .5 | 0;
        return eb
      }
      static ConvertCubeMapToSphericalPolynomial(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ub = ab > 0 ? this._NearestPow2Floor(ab) : 0;
        if (Ub > 0 && bb.size > Ub) {
          const ab = 5 === bb.format ? 4 : 3,
            Ab = ["right", "left", "up", "down", "front", "back"],
            Mb = {};
          for (const Tb of Ab) Mb[Tb] = this._DownsampleFace(bb[Tb], bb.size, Ub, ab);
          bb = {
            ...bb,
            ...Mb,
            size: Ub
          }
        }
        const Ab = new Tb.d;
        let Bb = 0;
        const eb = 2 / bb.size,
          vb = eb,
          Lb = .5 * eb,
          Pb = Lb - 1;
        for (let Tb = 0; Tb < 6; Tb++) {
          const ab = this._FileFaces[Tb],
            Ub = bb[ab.name];
          let Xb = Pb;
          const jb = 5 === bb.format ? 4 : 3;
          for (let Tb = 0; Tb < bb.size; Tb++) {
            let Rb = Pb;
            for (let vb = 0; vb < bb.size; vb++) {
              const Pb = ab.worldAxisForFileX.scale(Rb).add(ab.worldAxisForFileY.scale(Xb)).add(ab.worldAxisForNormal);
              Pb.normalize();
              const kb = this._AreaElement(Rb - Lb, Xb - Lb) - this._AreaElement(Rb - Lb, Xb + Lb) - this._AreaElement(Rb + Lb, Xb - Lb) + this._AreaElement(Rb + Lb, Xb + Lb);
              let yb = Ub[Tb * bb.size * jb + vb * jb + 0],
                Zb = Ub[Tb * bb.size * jb + vb * jb + 1],
                Db = Ub[Tb * bb.size * jb + vb * jb + 2];
              isNaN(yb) && (yb = 0), isNaN(Zb) && (Zb = 0), isNaN(Db) && (Db = 0), 0 === bb.type && (yb /= 255, Zb /= 255, Db /= 255), bb.gammaSpace && (yb = Math.pow((0, Mb.Clamp)(yb), Eb.j), Zb = Math.pow((0, Mb.Clamp)(Zb), Eb.j), Db = Math.pow((0, Mb.Clamp)(Db), Eb.j));
              const zb = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const bb = Math.max(yb, Zb, Db);
                if (bb > zb) {
                  const ab = zb / bb;
                  yb *= ab, Zb *= ab, Db *= ab
                }
              } else yb = (0, Mb.Clamp)(yb, 0, zb), Zb = (0, Mb.Clamp)(Zb, 0, zb), Db = (0, Mb.Clamp)(Db, 0, zb);
              const xb = new Yb.c(yb, Zb, Db);
              Ab.addLight(Pb, xb, kb), Bb += kb, Rb += eb
            }
            Xb += vb
          }
        }
        const Xb = 6 * (4 * Math.PI) / 6 / Bb;
        return Ab.scaleInPlace(Xb), Ab.convertIncidentRadianceToIrradiance(), Ab.convertIrradianceToLambertianRadiance(), Tb.e.FromHarmonics(Ab)
      }
    }
    eb._FileFaces = [new Bb("right", new Ab.m(1, 0, 0), new Ab.m(0, 0, -1), new Ab.m(0, -1, 0)), new Bb("left", new Ab.m(-1, 0, 0), new Ab.m(0, 0, 1), new Ab.m(0, -1, 0)), new Bb("up", new Ab.m(0, 1, 0), new Ab.m(1, 0, 0), new Ab.m(0, 0, 1)), new Bb("down", new Ab.m(0, -1, 0), new Ab.m(1, 0, 0), new Ab.m(0, 0, -1)), new Bb("front", new Ab.m(0, 0, 1), new Ab.m(1, 0, 0), new Ab.m(0, -1, 0)), new Bb("back", new Ab.m(0, 0, -1), new Ab.m(-1, 0, 0), new Ab.m(0, -1, 0))], eb.MAX_HDRI_VALUE = 4096, eb.PRESERVE_CLAMPED_COLORS = !1
  },
  40684: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab.h,
      e: () => Ab.m
    });
    var Ab = Ub(39146);
    (0, Ab.q)()
  },
  37251: (bb, ab, Ub) => {
    function Ab() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const ab = 16 * Math.random() | 0;
        return ("x" === bb ? ab : 3 & ab | 8).toString(16)
      }))
    }
    Ub.d(ab, {
      b: () => Ab
    })
  },
  40912: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb
    });
    var Ab = Ub(40901),
      Mb = Ub(40914);
    class Tb {
      static ExpandRGBDTexture(bb) {
        const ab = bb._texture;
        if (!ab || !bb.isRGBD) return;
        const Mb = ab.vj(),
          Tb = Mb.getCaps(),
          Eb = ab.isReady;
        let Yb = !1;
        Tb.textureHalfFloatRender && Tb.textureHalfFloatLinearFiltering ? (Yb = !0, ab.type = 2) : Tb.textureFloatRender && Tb.textureFloatLinearFiltering && (Yb = !0, ab.type = 1), Yb && (ab.isReady = !1, ab._isRGBD = !1, ab.invertY = !1);
        const Bb = async () => {
          const Tb = Mb.isWebGPU,
            Eb = Tb ? 1 : 0;
          ab.isReady = !1, Tb ? await Ub.e(332).then((() => Ub(60503))) : await Ub.e(314).then((() => Ub(60512)));
          const Yb = new Ab.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Mb, !1, void 0, ab.type, void 0, null, !1, void 0, Eb);
          Yb.externalTextureSamplerBinding = !0;
          const Bb = Mb.createRenderTargetTexture(ab.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: ab.samplingMode,
            type: ab.type,
            format: 5
          });
          Yb.onEffectCreatedObservable.addOnce((Ub => {
            Ub.executeWhenCompiled((() => {
              Yb.onApply = bb => {
                bb._bindTexture("textureSampler", ab), bb.setFloat2("scale", 1, 1)
              }, bb.oN()?.postProcessManager.directRender([Yb], Bb, !0), Mb.restoreDefaultFramebuffer(), Mb._releaseTexture(ab), Yb && Yb.dispose(), Bb._swapAndDie(ab), ab.isReady = !0
            }))
          }))
        };
        Yb && (Eb ? Bb() : bb.onLoadObservable.addOnce(Bb))
      }
      static async EncodeTextureToRGBD(bb, ab) {
        let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return ab.vj().isWebGPU ? await Ub.e(333).then((() => Ub(60531))) : await Ub.e(315).then((() => Ub(60523))), await (0, Mb.b)("rgbdEncode", bb, ab, Ab, 1, 5)
      }
    }
  },
  60240: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      AsyncLoop: () => Ab.c,
      RegisterTools: () => Ab.d,
      Tools: () => Ab.h,
      className: () => Ab.l
    });
    var Ab = Ub(39195);
    (0, Ab.d)()
  },
  40948: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb
    });
    class Ab {
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
        for (const ab of this._workerInfos)
          if (ab.idle) return this._execute(ab, bb), !0;
        return !1
      }
      _execute(bb, ab) {
        bb.idle = !1, bb.workerPromise.then((Ub => {
          ab(Ub, (() => {
            const ab = this._pendingActions.shift();
            ab ? this._execute(bb, ab) : bb.idle = !0
          }))
        }))
      }
    }
    class Mb extends Ab {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mb.DefaultOptions;
        super([]), this._maxWorkers = bb, this._createWorkerAsync = ab, this._options = Ub
      }
      push(bb) {
        if (!this._executeOnIdleWorker(bb))
          if (this._workerInfos.length < this._maxWorkers) {
            const ab = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(ab), this._execute(ab, bb)
          } else this._pendingActions.push(bb)
      }
      _execute(bb, ab) {
        bb.timeoutId && (clearTimeout(bb.timeoutId), delete bb.timeoutId), super._execute(bb, ((Ub, Ab) => {
          ab(Ub, (() => {
            Ab(), bb.idle && (bb.timeoutId = setTimeout((() => {
              bb.workerPromise.then((bb => {
                bb.terminate()
              }));
              const ab = this._workerInfos.indexOf(bb); - 1 !== ab && this._workerInfos.splice(ab, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Mb.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60263: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      AbstractThreeMfSerializer: () => gY,
      BVHExporter: () => pE,
      ContentTypeFileName: () => XY,
      DefaultXmlSerializerFormatOptions: () => lE,
      DefaultXmlSerializerNumberOptions: () => oE,
      EXT_lights_area: () => kM,
      EXT_mesh_gpu_instancing: () => rA,
      EXT_texture_avif: () => ME,
      EXT_texture_webp: () => bE,
      GLTF2Export: () => QA,
      GLTFData: () => eb,
      GetXmlFieldMeta: () => QE,
      GetXmlName: () => qE,
      IsQualifiedName: () => NE,
      KHR_draco_mesh_compression: () => JA,
      KHR_interactivity: () => eM,
      KHR_lights_punctual: () => TM,
      KHR_materials_anisotropy: () => zM,
      KHR_materials_clearcoat: () => pM,
      KHR_materials_coat: () => FM,
      KHR_materials_diffuse_roughness: () => qT,
      KHR_materials_diffuse_transmission: () => rM,
      KHR_materials_dispersion: () => tM,
      KHR_materials_emissive_strength: () => CM,
      KHR_materials_fuzz: () => vT,
      KHR_materials_ior: () => JM,
      KHR_materials_iridescence: () => aT,
      KHR_materials_openpbr: () => oT,
      KHR_materials_sheen: () => TT,
      KHR_materials_specular: () => jT,
      KHR_materials_transmission: () => ZT,
      KHR_materials_unlit: () => fT,
      KHR_materials_volume: () => WT,
      KHR_materials_volume_scatter: () => FT,
      KHR_texture_basisu: () => cT,
      KHR_texture_transform: () => sT,
      Known3mfRelationshipTypes: () => jY,
      KnownI3mfContentType: () => BY,
      Matrix3d: () => zY,
      MatrixFormatter: () => xY,
      ModelFileName: () => LY,
      NumberFormatter: () => sE,
      OBJExport: () => Eb,
      Object3dDirName: () => vY,
      OpenXmlContentTypesNamespace: () => EY,
      OpenXmlRelationshipsNamespace: () => YY,
      RegisterEXT_lights_area: () => ZM,
      RegisterEXT_mesh_gpu_instancing: () => oA,
      RegisterEXT_texture_avif: () => EE,
      RegisterEXT_texture_webp: () => UE,
      RegisterKHR_draco_mesh_compression: () => SA,
      RegisterKHR_interactivity: () => LM,
      RegisterKHR_lights_punctual: () => YM,
      RegisterKHR_materials_anisotropy: () => iM,
      RegisterKHR_materials_clearcoat: () => WM,
      RegisterKHR_materials_coat: () => GM,
      RegisterKHR_materials_diffuse_roughness: () => rT,
      RegisterKHR_materials_diffuse_transmission: () => oM,
      RegisterKHR_materials_dispersion: () => sM,
      RegisterKHR_materials_emissive_strength: () => OM,
      RegisterKHR_materials_fuzz: () => PT,
      RegisterKHR_materials_ior: () => SM,
      RegisterKHR_materials_iridescence: () => AT,
      RegisterKHR_materials_openpbr: () => tT,
      RegisterKHR_materials_sheen: () => YT,
      RegisterKHR_materials_specular: () => kT,
      RegisterKHR_materials_transmission: () => zT,
      RegisterKHR_materials_unlit: () => pT,
      RegisterKHR_materials_volume: () => IT,
      RegisterKHR_materials_volume_scatter: () => GT,
      RegisterKHR_texture_basisu: () => nT,
      RegisterKHR_texture_transform: () => CT,
      RelationshipDirName: () => eY,
      RelationshipFileName: () => PY,
      ResolveFormatOptions: () => wE,
      ResolveNumberOptions: () => tE,
      STLExport: () => YE,
      ST_ObjectType: () => TY,
      ST_Unit: () => MY,
      StringXmlWriter: () => bY,
      ThreeDimModelNamespace: () => UY,
      ThreeMf: () => CY,
      ThreeMfBase: () => qY,
      ThreeMfBaseMaterials: () => QY,
      ThreeMfBuild: () => uY,
      ThreeMfComponent: () => GY,
      ThreeMfComponents: () => hY,
      ThreeMfComponentsBuilder: () => oY,
      ThreeMfContentType: () => kY,
      ThreeMfContentTypes: () => RY,
      ThreeMfDocument: () => DY,
      ThreeMfDocumentBuilder: () => sY,
      ThreeMfItem: () => rY,
      ThreeMfMaterialBuilder: () => tY,
      ThreeMfMesh: () => WY,
      ThreeMfMeshBuilder: () => lY,
      ThreeMfMeta: () => fY,
      ThreeMfMetadataGroup: () => mY,
      ThreeMfModel: () => iY,
      ThreeMfModelBuilder: () => wY,
      ThreeMfObject: () => NY,
      ThreeMfObjectBuilder: () => KY,
      ThreeMfRelationship: () => ZY,
      ThreeMfRelationships: () => yY,
      ThreeMfResources: () => pY,
      ThreeMfSerializer: () => cY,
      ThreeMfSerializerGlobalConfiguration: () => VY,
      ThreeMfTriangle: () => FY,
      ThreeMfTriangles: () => dY,
      ThreeMfVertex: () => IY,
      ThreeMfVertices: () => HY,
      ToQualifiedString: () => KE,
      TokenType: () => nE,
      TriangleSetsNamespace: () => AY,
      USDZExportAsync: () => fE,
      Utf8XmlWriterToBytes: () => aY,
      XmlAttr: () => hE,
      XmlBuilder: () => SE,
      XmlElem: () => GE,
      XmlIgnore: () => FE,
      XmlName: () => dE,
      XmlNameToParts: () => rE,
      XmlSerializer: () => cE,
      _ConvertToGLTFPBRMetallicRoughness: () => pU,
      _SolveMetallic: () => mU,
      __IGLTFExporterExtension: () => Yb
    });
    var Ab = Ub(36392),
      Mb = Ub(60240),
      Tb = Ub(39394);
    class Eb {
      static OBJ(bb, ab, Ub, Eb) {
        const Yb = [];
        let Bb = 1,
          eb = 1;
        ab && (Ub || (Ub = "mat"), Yb.push("mtllib " + Ub + ".mtl"));
        for (let vb = 0; vb < bb.length; vb++) {
          const Ub = bb[vb],
            Lb = Ub.name || `mesh${vb}}`;
          Yb.push(`o ${Lb}`);
          let Pb = null;
          if (Eb) {
            const bb = Ub.computeWorldMatrix(!0);
            Pb = new Ab.Matrix, bb.invertToRef(Pb), Ub.bakeTransformIntoVertices(bb)
          }
          if (ab) {
            const bb = Ub.material;
            bb && Yb.push("usemtl " + bb.id)
          }
          const Xb = Ub.geometry;
          if (!Xb) {
            Mb.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const jb = Xb.getVerticesData("position"),
            Rb = Xb.getVerticesData("normal"),
            kb = Xb.getVerticesData("uv"),
            yb = Xb.uUb();
          let Zb = 0,
            Db = 0;
          if (!jb || !yb) {
            Mb.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const zb = bb[0].oN().useRightHandedSystem ? 1 : -1;
          for (let bb = 0; bb < jb.length; bb += 3) Yb.push("v " + jb[bb] * zb + " " + jb[bb + 1] + " " + jb[bb + 2]), Zb++;
          if (null != Rb)
            for (let bb = 0; bb < Rb.length; bb += 3) Yb.push("vn " + Rb[bb] * zb + " " + Rb[bb + 1] + " " + Rb[bb + 2]);
          if (null != kb)
            for (let bb = 0; bb < kb.length; bb += 2) Yb.push("vt " + kb[bb] + " " + kb[bb + 1]), Db++;
          const xb = ["", "", ""],
            ib = (Ub.material || Ub.oN().defaultMaterial)._getEffectiveOrientation(Ub),
            [fb, mb] = ib === Tb.d.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let bb = 0; bb < yb.length; bb += 3) {
            const ab = [String(yb[bb] + Bb), String(yb[bb + fb] + Bb), String(yb[bb + mb] + Bb)],
              Ub = [String(yb[bb] + eb), String(yb[bb + fb] + eb), String(yb[bb + mb] + eb)],
              Ab = ab,
              Mb = null != kb ? Ub : xb,
              Tb = null != Rb ? ab : xb;
            Yb.push("f " + Ab[0] + "/" + Mb[0] + "/" + Tb[0] + " " + Ab[1] + "/" + Mb[1] + "/" + Tb[1] + " " + Ab[2] + "/" + Mb[2] + "/" + Tb[2])
          }
          Eb && Pb && Ub.bakeTransformIntoVertices(Pb), Bb += Zb, eb += Db
        }
        return Yb.join("\n")
      }
      static MTL(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const Ub = [],
          Ab = bb.material;
        Ub.push("newmtl " + ab), Ub.push("  Ns " + Ab.specularPower.toFixed(4)), Ub.push("  Ni 1.5000"), Ub.push("  d " + Ab.alpha.toFixed(4)), Ub.push("  Tr 0.0000"), Ub.push("  Tf 1.0000 1.0000 1.0000"), Ub.push("  illum 2"), Ub.push("  Ka " + Ab.ambientColor.r.toFixed(4) + " " + Ab.ambientColor.g.toFixed(4) + " " + Ab.ambientColor.b.toFixed(4)), Ub.push("  Kd " + Ab.diffuseColor.r.toFixed(4) + " " + Ab.diffuseColor.g.toFixed(4) + " " + Ab.diffuseColor.b.toFixed(4)), Ub.push("  Ks " + Ab.specularColor.r.toFixed(4) + " " + Ab.specularColor.g.toFixed(4) + " " + Ab.specularColor.b.toFixed(4)), Ub.push("  Ke " + Ab.emissiveColor.r.toFixed(4) + " " + Ab.emissiveColor.g.toFixed(4) + " " + Ab.emissiveColor.b.toFixed(4));
        Ab.ambientTexture && Ub.push("  map_Ka " + Ab.ambientTexture.name), Ab.diffuseTexture && Ub.push("  map_Kd " + Ab.diffuseTexture.name), Ab.specularTexture && Ub.push("  map_Ks " + Ab.specularTexture.name), Ab.bumpTexture && Ub.push("  map_bump -imfchan z " + Ab.bumpTexture.name), Ab.opacityTexture && Ub.push("  map_d " + Ab.opacityTexture.name);
        return Ub.join("\n")
      }
    }
    var Yb = 0,
      Bb = Ub(40684);
    class eb {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const bb in this.files) {
          const ab = this.files[bb],
            Ub = new Blob([ab], {
              type: (0, Bb.d)(bb)
            });
          Mb.Tools.Download(Ub, bb)
        }
      }
    }
    var vb = Ub(40248),
      Lb = Ub(40205),
      Pb = Ub(40767),
      Xb = Ub(40207),
      jb = Ub(38898),
      Rb = Ub(36425),
      kb = Ub(36587),
      yb = Ub(36436);
    const Zb = yb.HighestCommonFactor,
      Db = {
        ...yb,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: Zb
      };
    var zb = Ub(40914),
      xb = Ub(40230),
      ib = Ub(40727),
      fb = Ub(40732),
      mb = Ub(40930);
    (0, mb.RegisterDumpTools)();
    var pb = Ub(39104),
      Nb = Ub(39110),
      Wb = Ub(37989),
      Hb = Ub(39205),
      Ib = Ub(39605),
      db = Ub(40912);
    let Fb = 0;
    const hb = (bb, ab, Ub, Ab) => {
        if (!bb[Ub]) {
          const Mb = bb.useDelayedTextureLoading;
          bb.useDelayedTextureLoading = !1;
          const Tb = bb._blockEntityCollection;
          bb._blockEntityCollection = !1;
          const Eb = Ib.e.CreateFromBase64String(ab, Ab + Fb++, bb, !0, !1, Ib.e.BILINEAR_SAMPLINGMODE);
          bb._blockEntityCollection = Tb;
          const Yb = bb.vj().getLoadedTexturesCache(),
            Bb = Yb.indexOf(Eb.getInternalTexture()); - 1 !== Bb && Yb.splice(Bb, 1), Eb.isRGBD = !0, Eb.wrapU = Ib.e.CLAMP_ADDRESSMODE, Eb.wrapV = Ib.e.CLAMP_ADDRESSMODE, bb[Ub] = Eb, bb.useDelayedTextureLoading = Mb, db.e.ExpandRGBDTexture(Eb);
          const eb = bb.vj().onContextRestoredObservable.add((() => {
            Eb.isRGBD = !0;
            const ab = bb.onBeforeRenderObservable.add((() => {
              Eb.isReady() && (bb.onBeforeRenderObservable.remove(ab), db.e.ExpandRGBDTexture(Eb))
            }))
          }));
          bb.UW.add((() => {
            bb.vj().onContextRestoredObservable.remove(eb)
          }))
        }
        return bb[Ub]
      },
      Gb = bb => hb(bb, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      Qb = bb => hb(bb, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      qb = bb => hb(bb, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var ub = Ub(39188),
      rb = Ub(36401),
      Kb = Ub(39244),
      ob = Ub(39389),
      lb = Ub(39473);
    class tb extends ob.d {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let wb = (() => {
      var bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb;
      let vb, Lb, Pb, Xb, jb, Rb, kb, yb, Zb, Db = lb.d,
        zb = [],
        xb = [],
        ib = [],
        fb = [],
        mb = [],
        Wb = [],
        Hb = [],
        Ib = [],
        db = [],
        Fb = [],
        hb = [],
        Gb = [],
        Qb = [],
        qb = [],
        ub = [],
        rb = [],
        Kb = [],
        ob = [];
      return bb = class extends Db {
        get useEnergyConservation() {
          return (0, pb.c)(this, ab, "f")
        }
        set useEnergyConservation(bb) {
          (0, pb.e)(this, ab, bb, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, pb.c)(this, Ub, "f")
        }
        set useSmithVisibilityHeightCorrelated(bb) {
          (0, pb.e)(this, Ub, bb, "f")
        }
        get useSphericalHarmonics() {
          return (0, pb.c)(this, Ab, "f")
        }
        set useSphericalHarmonics(bb) {
          (0, pb.e)(this, Ab, bb, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, pb.c)(this, Mb, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(bb) {
          (0, pb.e)(this, Mb, bb, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, pb.c)(this, Tb, "f")
        }
        set mixIblRadianceWithIrradiance(bb) {
          (0, pb.e)(this, Tb, bb, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, pb.c)(this, Eb, "f")
        }
        set useLegacySpecularEnergyConservation(bb) {
          (0, pb.e)(this, Eb, bb, "f")
        }
        get baseDiffuseModel() {
          return (0, pb.c)(this, Yb, "f")
        }
        set baseDiffuseModel(bb) {
          (0, pb.e)(this, Yb, bb, "f")
        }
        get dielectricSpecularModel() {
          return (0, pb.c)(this, Bb, "f")
        }
        set dielectricSpecularModel(bb) {
          (0, pb.e)(this, Bb, bb, "f")
        }
        get conductorSpecularModel() {
          return (0, pb.c)(this, eb, "f")
        }
        set conductorSpecularModel(bb) {
          (0, pb.e)(this, eb, bb, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(vb) {
          let Lb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(vb, "PBRBRDF", 90, new tb, Lb), this._useEnergyConservation = bb.DEFAULT_USE_ENERGY_CONSERVATION, ab.set(this, (0, pb.k)(this, zb, bb.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, pb.k)(this, xb), bb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), Ub.set(this, (0, pb.k)(this, ib, bb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, pb.k)(this, fb), bb.DEFAULT_USE_SPHERICAL_HARMONICS), Ab.set(this, (0, pb.k)(this, mb, bb.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, pb.k)(this, Wb), bb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Mb.set(this, (0, pb.k)(this, Hb, bb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, pb.k)(this, Ib), bb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), Tb.set(this, (0, pb.k)(this, db, bb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, pb.k)(this, Fb), bb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), Eb.set(this, (0, pb.k)(this, hb, bb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, pb.k)(this, Gb), bb.DEFAULT_DIFFUSE_MODEL), Yb.set(this, (0, pb.k)(this, Qb, bb.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, pb.k)(this, qb), bb.DEFAULT_DIELECTRIC_SPECULAR_MODEL), Bb.set(this, (0, pb.k)(this, ub, bb.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, pb.k)(this, rb), bb.DEFAULT_CONDUCTOR_SPECULAR_MODEL), eb.set(this, (0, pb.k)(this, Kb, bb.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, pb.k)(this, ob), this._internalMarkAllSubMeshesAsMiscDirty = vb._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(bb) {
          bb.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, bb.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, bb.SPHERICAL_HARMONICS = this._useSphericalHarmonics, bb.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, bb.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, bb.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, bb.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, bb.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, bb.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, ab = new WeakMap, Ub = new WeakMap, Ab = new WeakMap, Mb = new WeakMap, Tb = new WeakMap, Eb = new WeakMap, Yb = new WeakMap, Bb = new WeakMap, eb = new WeakMap, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(Db[Symbol.metadata] ?? null) : void 0;
        vb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], Lb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], Pb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], Xb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], jb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], Rb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], kb = [(0, Nb.K)("baseDiffuseModel"), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], yb = [(0, Nb.K)("dielectricSpecularModel"), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], Zb = [(0, Nb.K)("conductorSpecularModel"), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], (0, pb.h)(bb, null, vb, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: bb => "useEnergyConservation" in bb,
            get: bb => bb.useEnergyConservation,
            set: (bb, ab) => {
              bb.useEnergyConservation = ab
            }
          },
          metadata: ab
        }, zb, xb), (0, pb.h)(bb, null, Lb, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSmithVisibilityHeightCorrelated" in bb,
            get: bb => bb.useSmithVisibilityHeightCorrelated,
            set: (bb, ab) => {
              bb.useSmithVisibilityHeightCorrelated = ab
            }
          },
          metadata: ab
        }, ib, fb), (0, pb.h)(bb, null, Pb, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSphericalHarmonics" in bb,
            get: bb => bb.useSphericalHarmonics,
            set: (bb, ab) => {
              bb.useSphericalHarmonics = ab
            }
          },
          metadata: ab
        }, mb, Wb), (0, pb.h)(bb, null, Xb, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSpecularGlossinessInputEnergyConservation" in bb,
            get: bb => bb.useSpecularGlossinessInputEnergyConservation,
            set: (bb, ab) => {
              bb.useSpecularGlossinessInputEnergyConservation = ab
            }
          },
          metadata: ab
        }, Hb, Ib), (0, pb.h)(bb, null, jb, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: bb => "mixIblRadianceWithIrradiance" in bb,
            get: bb => bb.mixIblRadianceWithIrradiance,
            set: (bb, ab) => {
              bb.mixIblRadianceWithIrradiance = ab
            }
          },
          metadata: ab
        }, db, Fb), (0, pb.h)(bb, null, Rb, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLegacySpecularEnergyConservation" in bb,
            get: bb => bb.useLegacySpecularEnergyConservation,
            set: (bb, ab) => {
              bb.useLegacySpecularEnergyConservation = ab
            }
          },
          metadata: ab
        }, hb, Gb), (0, pb.h)(bb, null, kb, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseDiffuseModel" in bb,
            get: bb => bb.baseDiffuseModel,
            set: (bb, ab) => {
              bb.baseDiffuseModel = ab
            }
          },
          metadata: ab
        }, Qb, qb), (0, pb.h)(bb, null, yb, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: bb => "dielectricSpecularModel" in bb,
            get: bb => bb.dielectricSpecularModel,
            set: (bb, ab) => {
              bb.dielectricSpecularModel = ab
            }
          },
          metadata: ab
        }, ub, rb), (0, pb.h)(bb, null, Zb, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: bb => "conductorSpecularModel" in bb,
            get: bb => bb.conductorSpecularModel,
            set: (bb, ab) => {
              bb.conductorSpecularModel = ab
            }
          },
          metadata: ab
        }, Kb, ob), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb.DEFAULT_USE_ENERGY_CONSERVATION = !0, bb.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, bb.DEFAULT_USE_SPHERICAL_HARMONICS = !0, bb.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, bb.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, bb.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, bb.DEFAULT_DIFFUSE_MODEL = 0, bb.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, bb.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, bb
    })();
    var sb = Ub(39372),
      gb = Ub(36593),
      Cb = Ub(39380),
      Vb = Ub(39209),
      Ob = Ub(39454),
      cb = Ub(39447),
      Jb = Ub(39460),
      nb = Ub(39432);
    class Sb extends ob.d {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let ba = (() => {
      var bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb;
      let vb, Lb, Pb, Xb, jb, Rb, kb, yb, Zb, Db, zb, xb, ib, fb, mb = lb.d,
        Wb = [],
        Hb = [],
        Ib = [],
        db = [],
        Fb = [],
        hb = [],
        Gb = [],
        Qb = [],
        qb = [],
        ub = [],
        rb = [],
        Kb = [],
        ob = [],
        tb = [],
        wb = [],
        sb = [],
        Cb = [],
        Vb = [],
        Ob = [],
        Jb = [],
        ba = [],
        aa = [],
        Ua = [],
        Aa = [],
        Ma = [],
        Ta = [],
        Ea = [],
        Ya = [];
      return bb = class extends mb {
        get isEnabled() {
          return (0, pb.c)(this, ab, "f")
        }
        set isEnabled(bb) {
          (0, pb.e)(this, ab, bb, "f")
        }
        get indexOfRefraction() {
          return (0, pb.c)(this, Ub, "f")
        }
        set indexOfRefraction(bb) {
          (0, pb.e)(this, Ub, bb, "f")
        }
        get texture() {
          return (0, pb.c)(this, Ab, "f")
        }
        set texture(bb) {
          (0, pb.e)(this, Ab, bb, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, pb.c)(this, Mb, "f")
        }
        set useRoughnessFromMainTexture(bb) {
          (0, pb.e)(this, Mb, bb, "f")
        }
        get textureRoughness() {
          return (0, pb.c)(this, Tb, "f")
        }
        set textureRoughness(bb) {
          (0, pb.e)(this, Tb, bb, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, pb.c)(this, Eb, "f")
        }
        set remapF0OnInterfaceChange(bb) {
          (0, pb.e)(this, Eb, bb, "f")
        }
        get bumpTexture() {
          return (0, pb.c)(this, Yb, "f")
        }
        set bumpTexture(bb) {
          (0, pb.e)(this, Yb, bb, "f")
        }
        get isTintEnabled() {
          return (0, pb.c)(this, Bb, "f")
        }
        set isTintEnabled(bb) {
          (0, pb.e)(this, Bb, bb, "f")
        }
        get tintTexture() {
          return (0, pb.c)(this, eb, "f")
        }
        set tintTexture(bb) {
          (0, pb.e)(this, eb, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(vb) {
          let Lb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(vb, "PBRClearCoat", 100, new Sb, Lb), this._isEnabled = !1, ab.set(this, (0, pb.k)(this, Wb, !1)), this.intensity = ((0, pb.k)(this, Hb), (0, pb.k)(this, Ib, 1)), this.roughness = ((0, pb.k)(this, db), (0, pb.k)(this, Fb, 0)), this._indexOfRefraction = ((0, pb.k)(this, hb), bb._DefaultIndexOfRefraction), Ub.set(this, (0, pb.k)(this, Gb, bb._DefaultIndexOfRefraction)), this._texture = ((0, pb.k)(this, Qb), null), Ab.set(this, (0, pb.k)(this, qb, null)), this._useRoughnessFromMainTexture = ((0, pb.k)(this, ub), !0), Mb.set(this, (0, pb.k)(this, rb, !0)), this._textureRoughness = ((0, pb.k)(this, Kb), null), Tb.set(this, (0, pb.k)(this, ob, null)), this._remapF0OnInterfaceChange = ((0, pb.k)(this, tb), !0), Eb.set(this, (0, pb.k)(this, wb, !0)), this._bumpTexture = ((0, pb.k)(this, sb), null), Yb.set(this, (0, pb.k)(this, Cb, null)), this._isTintEnabled = ((0, pb.k)(this, Vb), !1), Bb.set(this, (0, pb.k)(this, Ob, !1)), this.tintColor = ((0, pb.k)(this, Jb), (0, pb.k)(this, ba, gb.c.White())), this.tintColorAtDistance = ((0, pb.k)(this, aa), (0, pb.k)(this, Ua, 1)), this.tintThickness = ((0, pb.k)(this, Aa), (0, pb.k)(this, Ma, 1)), this._tintTexture = ((0, pb.k)(this, Ta), null), eb.set(this, (0, pb.k)(this, Ea, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, pb.k)(this, Ya), this._internalMarkAllSubMeshesAsTexturesDirty = vb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, ab, Ub) {
          if (!this._isEnabled) return !0;
          const Ab = this._material._disableBumpMap;
          if (bb._areTexturesDirty && ab.texturesEnabled) {
            if (this._texture && cb.c.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && cb.c.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (Ub.getCaps().standardDerivatives && this._bumpTexture && cb.c.ClearCoatBumpTextureEnabled && !Ab && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && cb.c.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(ab, Ub) {
          this._isEnabled ? (ab.CLEARCOAT = !0, ab.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, ab.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, ab._areTexturesDirty && Ub.texturesEnabled && (this._texture && cb.c.ClearCoatTextureEnabled ? (0, nb.$)(this._texture, ab, "CLEARCOAT_TEXTURE") : ab.CLEARCOAT_TEXTURE = !1, this._textureRoughness && cb.c.ClearCoatTextureEnabled ? (0, nb.$)(this._textureRoughness, ab, "CLEARCOAT_TEXTURE_ROUGHNESS") : ab.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && cb.c.ClearCoatBumpTextureEnabled ? (0, nb.$)(this._bumpTexture, ab, "CLEARCOAT_BUMP") : ab.CLEARCOAT_BUMP = !1, ab.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === bb._DefaultIndexOfRefraction, this._isTintEnabled ? (ab.CLEARCOAT_TINT = !0, this._tintTexture && cb.c.ClearCoatTintTextureEnabled ? ((0, nb.$)(this._tintTexture, ab, "CLEARCOAT_TINT_TEXTURE"), ab.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : ab.CLEARCOAT_TINT_TEXTURE = !1) : (ab.CLEARCOAT_TINT = !1, ab.CLEARCOAT_TINT_TEXTURE = !1))) : (ab.CLEARCOAT = !1, ab.CLEARCOAT_TEXTURE = !1, ab.CLEARCOAT_TEXTURE_ROUGHNESS = !1, ab.CLEARCOAT_BUMP = !1, ab.CLEARCOAT_TINT = !1, ab.CLEARCOAT_TINT_TEXTURE = !1, ab.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, ab.CLEARCOAT_DEFAULTIOR = !1, ab.CLEARCOAT_TEXTUREDIRECTUV = 0, ab.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, ab.CLEARCOAT_BUMPDIRECTUV = 0, ab.CLEARCOAT_REMAP_F0 = !1, ab.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, ab.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(bb, ab, Ub, Ab) {
          if (!this._isEnabled) return;
          const Mb = Ab.materialDefines,
            Tb = this._material.isFrozen,
            Eb = this._material._disableBumpMap,
            Yb = this._material._invertNormalMapX,
            Bb = this._material._invertNormalMapY;
          if (!bb.useUbo || !Tb || !bb.isSync) {
            (this._texture || this._textureRoughness) && cb.c.ClearCoatTextureEnabled && (bb.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, nb.x)(this._texture, bb, "clearCoat"), this._textureRoughness && !Mb.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, nb.x)(this._textureRoughness, bb, "clearCoatRoughness")), this._bumpTexture && Ub.getCaps().standardDerivatives && cb.c.ClearCoatTextureEnabled && !Eb && (bb.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, nb.x)(this._bumpTexture, bb, "clearCoatBump"), ab._mirroredCameraPosition ? bb.updateFloat2("vClearCoatTangentSpaceParams", Yb ? 1 : -1, Bb ? 1 : -1) : bb.updateFloat2("vClearCoatTangentSpaceParams", Yb ? -1 : 1, Bb ? -1 : 1)), this._tintTexture && cb.c.ClearCoatTintTextureEnabled && (bb.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, nb.x)(this._tintTexture, bb, "clearCoatTint")), bb.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Ab = 1 - this._indexOfRefraction,
              Tb = 1 + this._indexOfRefraction,
              eb = Math.pow(-Ab / Tb, 2),
              vb = 1 / this._indexOfRefraction;
            bb.updateFloat4("vClearCoatRefractionParams", eb, vb, Ab, Tb), this._isTintEnabled && (bb.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), bb.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          ab.texturesEnabled && (this._texture && cb.c.ClearCoatTextureEnabled && bb.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Mb.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && cb.c.ClearCoatTextureEnabled && bb.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && Ub.getCaps().standardDerivatives && cb.c.ClearCoatBumpTextureEnabled && !Eb && bb.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && cb.c.ClearCoatTintTextureEnabled && bb.setTexture("clearCoatTintSampler", this._tintTexture))
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
        addFallbacks(bb, ab, Ub) {
          return bb.CLEARCOAT_BUMP && ab.addFallback(Ub++, "CLEARCOAT_BUMP"), bb.CLEARCOAT_TINT && ab.addFallback(Ub++, "CLEARCOAT_TINT"), bb.CLEARCOAT && ab.addFallback(Ub++, "CLEARCOAT"), Ub
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
      }, ab = new WeakMap, Ub = new WeakMap, Ab = new WeakMap, Mb = new WeakMap, Tb = new WeakMap, Eb = new WeakMap, Yb = new WeakMap, Bb = new WeakMap, eb = new WeakMap, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(mb[Symbol.metadata] ?? null) : void 0;
        vb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Lb = [(0, Nb.K)()], Pb = [(0, Nb.K)()], Xb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], jb = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Rb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], kb = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], yb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Zb = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Db = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], zb = [(0, Nb.k)()], xb = [(0, Nb.K)()], ib = [(0, Nb.K)()], fb = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], (0, pb.h)(bb, null, vb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, ab) => {
              bb.isEnabled = ab
            }
          },
          metadata: ab
        }, Wb, Hb), (0, pb.h)(bb, null, Xb, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "indexOfRefraction" in bb,
            get: bb => bb.indexOfRefraction,
            set: (bb, ab) => {
              bb.indexOfRefraction = ab
            }
          },
          metadata: ab
        }, Gb, Qb), (0, pb.h)(bb, null, jb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, ab) => {
              bb.texture = ab
            }
          },
          metadata: ab
        }, qb, ub), (0, pb.h)(bb, null, Rb, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMainTexture" in bb,
            get: bb => bb.useRoughnessFromMainTexture,
            set: (bb, ab) => {
              bb.useRoughnessFromMainTexture = ab
            }
          },
          metadata: ab
        }, rb, Kb), (0, pb.h)(bb, null, kb, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "textureRoughness" in bb,
            get: bb => bb.textureRoughness,
            set: (bb, ab) => {
              bb.textureRoughness = ab
            }
          },
          metadata: ab
        }, ob, tb), (0, pb.h)(bb, null, yb, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: bb => "remapF0OnInterfaceChange" in bb,
            get: bb => bb.remapF0OnInterfaceChange,
            set: (bb, ab) => {
              bb.remapF0OnInterfaceChange = ab
            }
          },
          metadata: ab
        }, wb, sb), (0, pb.h)(bb, null, Zb, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "bumpTexture" in bb,
            get: bb => bb.bumpTexture,
            set: (bb, ab) => {
              bb.bumpTexture = ab
            }
          },
          metadata: ab
        }, Cb, Vb), (0, pb.h)(bb, null, Db, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isTintEnabled" in bb,
            get: bb => bb.isTintEnabled,
            set: (bb, ab) => {
              bb.isTintEnabled = ab
            }
          },
          metadata: ab
        }, Ob, Jb), (0, pb.h)(bb, null, fb, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintTexture" in bb,
            get: bb => bb.tintTexture,
            set: (bb, ab) => {
              bb.tintTexture = ab
            }
          },
          metadata: ab
        }, Ea, Ya), (0, pb.h)(null, null, Lb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, ab) => {
              bb.intensity = ab
            }
          },
          metadata: ab
        }, Ib, db), (0, pb.h)(null, null, Pb, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughness" in bb,
            get: bb => bb.roughness,
            set: (bb, ab) => {
              bb.roughness = ab
            }
          },
          metadata: ab
        }, Fb, hb), (0, pb.h)(null, null, zb, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColor" in bb,
            get: bb => bb.tintColor,
            set: (bb, ab) => {
              bb.tintColor = ab
            }
          },
          metadata: ab
        }, ba, aa), (0, pb.h)(null, null, xb, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColorAtDistance" in bb,
            get: bb => bb.tintColorAtDistance,
            set: (bb, ab) => {
              bb.tintColorAtDistance = ab
            }
          },
          metadata: ab
        }, Ua, Aa), (0, pb.h)(null, null, ib, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintThickness" in bb,
            get: bb => bb.tintThickness,
            set: (bb, ab) => {
              bb.tintThickness = ab
            }
          },
          metadata: ab
        }, Ma, Ta), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb._DefaultIndexOfRefraction = 1.5, bb
    })();
    class aa extends ob.d {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let Ua = (() => {
      var bb, ab, Ub, Ab;
      let Mb, Tb, Eb, Yb, Bb, eb, vb, Lb = lb.d,
        Pb = [],
        Xb = [],
        jb = [],
        Rb = [],
        kb = [],
        yb = [],
        Zb = [],
        Db = [],
        zb = [],
        xb = [],
        ib = [],
        fb = [],
        mb = [],
        Wb = [];
      return bb = class extends Lb {
        get isEnabled() {
          return (0, pb.c)(this, ab, "f")
        }
        set isEnabled(bb) {
          (0, pb.e)(this, ab, bb, "f")
        }
        get texture() {
          return (0, pb.c)(this, Ub, "f")
        }
        set texture(bb) {
          (0, pb.e)(this, Ub, bb, "f")
        }
        get thicknessTexture() {
          return (0, pb.c)(this, Ab, "f")
        }
        set thicknessTexture(bb) {
          (0, pb.e)(this, Ab, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Mb) {
          let Tb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Mb, "PBRIridescence", 110, new aa, Tb), this._isEnabled = !1, ab.set(this, (0, pb.k)(this, Pb, !1)), this.intensity = ((0, pb.k)(this, Xb), (0, pb.k)(this, jb, 1)), this.minimumThickness = ((0, pb.k)(this, Rb), (0, pb.k)(this, kb, bb._DefaultMinimumThickness)), this.maximumThickness = ((0, pb.k)(this, yb), (0, pb.k)(this, Zb, bb._DefaultMaximumThickness)), this.indexOfRefraction = ((0, pb.k)(this, Db), (0, pb.k)(this, zb, bb._DefaultIndexOfRefraction)), this._texture = ((0, pb.k)(this, xb), null), Ub.set(this, (0, pb.k)(this, ib, null)), this._thicknessTexture = ((0, pb.k)(this, fb), null), Ab.set(this, (0, pb.k)(this, mb, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, pb.k)(this, Wb), this._internalMarkAllSubMeshesAsTexturesDirty = Mb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, ab) {
          if (!this._isEnabled) return !0;
          if (bb._areTexturesDirty && ab.texturesEnabled) {
            if (this._texture && cb.c.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && cb.c.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bb, ab) {
          this._isEnabled ? (bb.IRIDESCENCE = !0, bb._areTexturesDirty && ab.texturesEnabled && (this._texture && cb.c.IridescenceTextureEnabled ? (0, nb.$)(this._texture, bb, "IRIDESCENCE_TEXTURE") : bb.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && cb.c.IridescenceTextureEnabled ? (0, nb.$)(this._thicknessTexture, bb, "IRIDESCENCE_THICKNESS_TEXTURE") : bb.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (bb.IRIDESCENCE = !1, bb.IRIDESCENCE_TEXTURE = !1, bb.IRIDESCENCE_THICKNESS_TEXTURE = !1, bb.IRIDESCENCE_TEXTUREDIRECTUV = 0, bb.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(bb, ab) {
          if (!this._isEnabled) return;
          const Ub = this._material.isFrozen;
          bb.useUbo && Ub && bb.isSync || ((this._texture || this._thicknessTexture) && cb.c.IridescenceTextureEnabled && (bb.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, nb.x)(this._texture, bb, "iridescence"), this._thicknessTexture && (0, nb.x)(this._thicknessTexture, bb, "iridescenceThickness")), bb.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), ab.texturesEnabled && (this._texture && cb.c.IridescenceTextureEnabled && bb.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && cb.c.IridescenceTextureEnabled && bb.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
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
        addFallbacks(bb, ab, Ub) {
          return bb.IRIDESCENCE && ab.addFallback(Ub++, "IRIDESCENCE"), Ub
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
      }, ab = new WeakMap, Ub = new WeakMap, Ab = new WeakMap, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(Lb[Symbol.metadata] ?? null) : void 0;
        Mb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Tb = [(0, Nb.K)()], Eb = [(0, Nb.K)()], Yb = [(0, Nb.K)()], Bb = [(0, Nb.K)()], eb = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], vb = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], (0, pb.h)(bb, null, Mb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, ab) => {
              bb.isEnabled = ab
            }
          },
          metadata: ab
        }, Pb, Xb), (0, pb.h)(bb, null, eb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, ab) => {
              bb.texture = ab
            }
          },
          metadata: ab
        }, ib, fb), (0, pb.h)(bb, null, vb, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "thicknessTexture" in bb,
            get: bb => bb.thicknessTexture,
            set: (bb, ab) => {
              bb.thicknessTexture = ab
            }
          },
          metadata: ab
        }, mb, Wb), (0, pb.h)(null, null, Tb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, ab) => {
              bb.intensity = ab
            }
          },
          metadata: ab
        }, jb, Rb), (0, pb.h)(null, null, Eb, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "minimumThickness" in bb,
            get: bb => bb.minimumThickness,
            set: (bb, ab) => {
              bb.minimumThickness = ab
            }
          },
          metadata: ab
        }, kb, yb), (0, pb.h)(null, null, Yb, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "maximumThickness" in bb,
            get: bb => bb.maximumThickness,
            set: (bb, ab) => {
              bb.maximumThickness = ab
            }
          },
          metadata: ab
        }, Zb, Db), (0, pb.h)(null, null, Bb, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "indexOfRefraction" in bb,
            get: bb => bb.indexOfRefraction,
            set: (bb, ab) => {
              bb.indexOfRefraction = ab
            }
          },
          metadata: ab
        }, zb, xb), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb._DefaultMinimumThickness = 100, bb._DefaultMaximumThickness = 400, bb._DefaultIndexOfRefraction = 1.3, bb
    })();
    class Aa extends ob.d {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Ma = (() => {
      var bb, ab, Ub, Ab;
      let Mb, Tb, Eb, Yb, Bb, eb = lb.d,
        vb = [],
        Lb = [],
        Pb = [],
        Xb = [],
        jb = [],
        Rb = [],
        kb = [],
        yb = [],
        Zb = [],
        Db = [];
      return bb = class extends eb {
        get isEnabled() {
          return (0, pb.c)(this, ab, "f")
        }
        set isEnabled(bb) {
          (0, pb.e)(this, ab, bb, "f")
        }
        set angle(bb) {
          this.direction.x = Math.cos(bb), this.direction.y = Math.sin(bb)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, pb.c)(this, Ub, "f")
        }
        set texture(bb) {
          (0, pb.e)(this, Ub, bb, "f")
        }
        get legacy() {
          return (0, pb.c)(this, Ab, "f")
        }
        set legacy(bb) {
          (0, pb.e)(this, Ab, bb, "f")
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
          let Mb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bb, "PBRAnisotropic", 110, new Aa, Mb), this._isEnabled = !1, ab.set(this, (0, pb.k)(this, vb, !1)), this.intensity = ((0, pb.k)(this, Lb), (0, pb.k)(this, Pb, 1)), this.direction = ((0, pb.k)(this, Xb), (0, pb.k)(this, jb, new rb.l(1, 0))), this._texture = ((0, pb.k)(this, Rb), null), Ub.set(this, (0, pb.k)(this, kb, null)), this._legacy = ((0, pb.k)(this, yb), !1), Ab.set(this, (0, pb.k)(this, Zb, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, pb.k)(this, Db), this._internalMarkAllSubMeshesAsTexturesDirty = bb._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = bb._dirtyCallbacks[16]
        }
        isReadyForSubMesh(bb, ab) {
          return !this._isEnabled || !(bb._areTexturesDirty && ab.texturesEnabled && this._texture && cb.c.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(bb, ab, Ub) {
          this._isEnabled ? (bb.ANISOTROPIC = this._isEnabled, this._isEnabled && !Ub.isVerticesDataPresent(Kb.m.TangentKind) && (bb._needUVs = !0, bb.MAINUV1 = !0), bb._areTexturesDirty && ab.texturesEnabled && (this._texture && cb.c.AnisotropicTextureEnabled ? (0, nb.$)(this._texture, bb, "ANISOTROPIC_TEXTURE") : bb.ANISOTROPIC_TEXTURE = !1), bb._areMiscDirty && (bb.ANISOTROPIC_LEGACY = this._legacy)) : (bb.ANISOTROPIC = !1, bb.ANISOTROPIC_TEXTURE = !1, bb.ANISOTROPIC_TEXTUREDIRECTUV = 0, bb.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(bb, ab) {
          if (!this._isEnabled) return;
          const Ub = this._material.isFrozen;
          bb.useUbo && Ub && bb.isSync || (this._texture && cb.c.AnisotropicTextureEnabled && (bb.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, nb.x)(this._texture, bb, "anisotropy")), bb.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), ab.texturesEnabled && this._texture && cb.c.AnisotropicTextureEnabled && bb.setTexture("anisotropySampler", this._texture)
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
        addFallbacks(bb, ab, Ub) {
          return bb.ANISOTROPIC && ab.addFallback(Ub++, "ANISOTROPIC"), Ub
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
        parse(bb, ab, Ub) {
          super.parse(bb, ab, Ub), void 0 === bb.legacy && (this.legacy = !0)
        }
      }, ab = new WeakMap, Ub = new WeakMap, Ab = new WeakMap, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(eb[Symbol.metadata] ?? null) : void 0;
        Mb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Tb = [(0, Nb.K)()], Eb = [(0, Nb.F)()], Yb = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Bb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], (0, pb.h)(bb, null, Mb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, ab) => {
              bb.isEnabled = ab
            }
          },
          metadata: ab
        }, vb, Lb), (0, pb.h)(bb, null, Yb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, ab) => {
              bb.texture = ab
            }
          },
          metadata: ab
        }, kb, yb), (0, pb.h)(bb, null, Bb, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: bb => "legacy" in bb,
            get: bb => bb.legacy,
            set: (bb, ab) => {
              bb.legacy = ab
            }
          },
          metadata: ab
        }, Zb, Db), (0, pb.h)(null, null, Tb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, ab) => {
              bb.intensity = ab
            }
          },
          metadata: ab
        }, Pb, Xb), (0, pb.h)(null, null, Eb, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: bb => "direction" in bb,
            get: bb => bb.direction,
            set: (bb, ab) => {
              bb.direction = ab
            }
          },
          metadata: ab
        }, jb, Rb), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb
    })();
    class Ta extends ob.d {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Ea = (() => {
      var bb, ab, Ub, Ab, Mb, Tb, Eb, Yb;
      let Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb, yb = lb.d,
        Zb = [],
        Db = [],
        zb = [],
        xb = [],
        ib = [],
        fb = [],
        mb = [],
        Wb = [],
        Hb = [],
        Ib = [],
        db = [],
        Fb = [],
        hb = [],
        Gb = [],
        Qb = [],
        qb = [],
        ub = [],
        rb = [];
      return bb = class extends yb {
        get isEnabled() {
          return (0, pb.c)(this, ab, "f")
        }
        set isEnabled(bb) {
          (0, pb.e)(this, ab, bb, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, pb.c)(this, Ub, "f")
        }
        set linkSheenWithAlbedo(bb) {
          (0, pb.e)(this, Ub, bb, "f")
        }
        get texture() {
          return (0, pb.c)(this, Ab, "f")
        }
        set texture(bb) {
          (0, pb.e)(this, Ab, bb, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, pb.c)(this, Mb, "f")
        }
        set useRoughnessFromMainTexture(bb) {
          (0, pb.e)(this, Mb, bb, "f")
        }
        get roughness() {
          return (0, pb.c)(this, Tb, "f")
        }
        set roughness(bb) {
          (0, pb.e)(this, Tb, bb, "f")
        }
        get textureRoughness() {
          return (0, pb.c)(this, Eb, "f")
        }
        set textureRoughness(bb) {
          (0, pb.e)(this, Eb, bb, "f")
        }
        get albedoScaling() {
          return (0, pb.c)(this, Yb, "f")
        }
        set albedoScaling(bb) {
          (0, pb.e)(this, Yb, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(bb) {
          let Bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bb, "Sheen", 120, new Ta, Bb), this._isEnabled = !1, ab.set(this, (0, pb.k)(this, Zb, !1)), this._linkSheenWithAlbedo = ((0, pb.k)(this, Db), !1), Ub.set(this, (0, pb.k)(this, zb, !1)), this.intensity = ((0, pb.k)(this, xb), (0, pb.k)(this, ib, 1)), this.color = ((0, pb.k)(this, fb), (0, pb.k)(this, mb, gb.c.White())), this._texture = ((0, pb.k)(this, Wb), null), Ab.set(this, (0, pb.k)(this, Hb, null)), this._useRoughnessFromMainTexture = ((0, pb.k)(this, Ib), !0), Mb.set(this, (0, pb.k)(this, db, !0)), this._roughness = ((0, pb.k)(this, Fb), null), Tb.set(this, (0, pb.k)(this, hb, null)), this._textureRoughness = ((0, pb.k)(this, Gb), null), Eb.set(this, (0, pb.k)(this, Qb, null)), this._albedoScaling = ((0, pb.k)(this, qb), !1), Yb.set(this, (0, pb.k)(this, ub, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, pb.k)(this, rb), this._internalMarkAllSubMeshesAsTexturesDirty = bb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, ab) {
          if (!this._isEnabled) return !0;
          if (bb._areTexturesDirty && ab.texturesEnabled) {
            if (this._texture && cb.c.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && cb.c.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bb, ab) {
          this._isEnabled ? (bb.SHEEN = !0, bb.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, bb.SHEEN_ROUGHNESS = null !== this._roughness, bb.SHEEN_ALBEDOSCALING = this._albedoScaling, bb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, bb._areTexturesDirty && ab.texturesEnabled && (this._texture && cb.c.SheenTextureEnabled ? ((0, nb.$)(this._texture, bb, "SHEEN_TEXTURE"), bb.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : bb.SHEEN_TEXTURE = !1, this._textureRoughness && cb.c.SheenTextureEnabled ? (0, nb.$)(this._textureRoughness, bb, "SHEEN_TEXTURE_ROUGHNESS") : bb.SHEEN_TEXTURE_ROUGHNESS = !1)) : (bb.SHEEN = !1, bb.SHEEN_TEXTURE = !1, bb.SHEEN_TEXTURE_ROUGHNESS = !1, bb.SHEEN_LINKWITHALBEDO = !1, bb.SHEEN_ROUGHNESS = !1, bb.SHEEN_ALBEDOSCALING = !1, bb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, bb.SHEEN_GAMMATEXTURE = !1, bb.SHEEN_TEXTUREDIRECTUV = 0, bb.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(bb, ab, Ub, Ab) {
          if (!this._isEnabled) return;
          const Mb = Ab.materialDefines,
            Tb = this._material.isFrozen;
          bb.useUbo && Tb && bb.isSync || ((this._texture || this._textureRoughness) && cb.c.SheenTextureEnabled && (bb.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, nb.x)(this._texture, bb, "sheen"), this._textureRoughness && !Mb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, nb.x)(this._textureRoughness, bb, "sheenRoughness")), bb.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && bb.updateFloat("vSheenRoughness", this._roughness)), ab.texturesEnabled && (this._texture && cb.c.SheenTextureEnabled && bb.setTexture("sheenSampler", this._texture), this._textureRoughness && !Mb.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && cb.c.SheenTextureEnabled && bb.setTexture("sheenRoughnessSampler", this._textureRoughness))
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
        addFallbacks(bb, ab, Ub) {
          return bb.SHEEN && ab.addFallback(Ub++, "SHEEN"), Ub
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
      }, ab = new WeakMap, Ub = new WeakMap, Ab = new WeakMap, Mb = new WeakMap, Tb = new WeakMap, Eb = new WeakMap, Yb = new WeakMap, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(yb[Symbol.metadata] ?? null) : void 0;
        Bb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], eb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], vb = [(0, Nb.K)()], Lb = [(0, Nb.k)()], Pb = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Xb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], jb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Rb = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], kb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], (0, pb.h)(bb, null, Bb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, ab) => {
              bb.isEnabled = ab
            }
          },
          metadata: ab
        }, Zb, Db), (0, pb.h)(bb, null, eb, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: bb => "linkSheenWithAlbedo" in bb,
            get: bb => bb.linkSheenWithAlbedo,
            set: (bb, ab) => {
              bb.linkSheenWithAlbedo = ab
            }
          },
          metadata: ab
        }, zb, xb), (0, pb.h)(bb, null, Pb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, ab) => {
              bb.texture = ab
            }
          },
          metadata: ab
        }, Hb, Ib), (0, pb.h)(bb, null, Xb, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMainTexture" in bb,
            get: bb => bb.useRoughnessFromMainTexture,
            set: (bb, ab) => {
              bb.useRoughnessFromMainTexture = ab
            }
          },
          metadata: ab
        }, db, Fb), (0, pb.h)(bb, null, jb, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughness" in bb,
            get: bb => bb.roughness,
            set: (bb, ab) => {
              bb.roughness = ab
            }
          },
          metadata: ab
        }, hb, Gb), (0, pb.h)(bb, null, Rb, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "textureRoughness" in bb,
            get: bb => bb.textureRoughness,
            set: (bb, ab) => {
              bb.textureRoughness = ab
            }
          },
          metadata: ab
        }, Qb, qb), (0, pb.h)(bb, null, kb, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: bb => "albedoScaling" in bb,
            get: bb => bb.albedoScaling,
            set: (bb, ab) => {
              bb.albedoScaling = ab
            }
          },
          metadata: ab
        }, ub, rb), (0, pb.h)(null, null, vb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, ab) => {
              bb.intensity = ab
            }
          },
          metadata: ab
        }, ib, fb), (0, pb.h)(null, null, Lb, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: bb => "color" in bb,
            get: bb => bb.color,
            set: (bb, ab) => {
              bb.color = ab
            }
          },
          metadata: ab
        }, mb, Wb), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb
    })();
    class Ya extends ob.d {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let Ba = (() => {
      var bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb;
      let yb, Zb, Db, zb, xb, ib, fb, mb, Wb, Hb, Ib, db, Fb, hb, Gb, Qb, qb, ub, Kb, ob, tb, wb, sb, Cb, Vb, Ob, Jb, Sb, ba, aa, Ua = lb.d,
        Aa = [],
        Ma = [],
        Ta = [],
        Ea = [],
        Ba = [],
        ea = [],
        va = [],
        La = [],
        Pa = [],
        Xa = [],
        ja = [],
        Ra = [],
        ka = [],
        ya = [],
        Za = [],
        Da = [],
        za = [],
        xa = [],
        ia = [],
        fa = [],
        ma = [],
        pa = [],
        Na = [],
        Wa = [],
        Ha = [],
        Ia = [],
        da = [],
        Fa = [],
        ha = [],
        Ga = [],
        Qa = [],
        qa = [],
        ua = [],
        ra = [],
        Ka = [],
        oa = [],
        la = [],
        ta = [],
        wa = [],
        sa = [],
        ga = [],
        Ca = [],
        Va = [],
        Oa = [],
        ca = [],
        Ja = [],
        na = [],
        Sa = [],
        bU = [],
        aU = [],
        UU = [],
        AU = [],
        MU = [],
        TU = [],
        EU = [],
        YU = [],
        BU = [],
        eU = [],
        vU = [],
        LU = [];
      return bb = class extends Ua {
        get isRefractionEnabled() {
          return (0, pb.c)(this, ab, "f")
        }
        set isRefractionEnabled(bb) {
          (0, pb.e)(this, ab, bb, "f")
        }
        get isTranslucencyEnabled() {
          return (0, pb.c)(this, Ub, "f")
        }
        set isTranslucencyEnabled(bb) {
          (0, pb.e)(this, Ub, bb, "f")
        }
        get isDispersionEnabled() {
          return (0, pb.c)(this, Ab, "f")
        }
        set isDispersionEnabled(bb) {
          (0, pb.e)(this, Ab, bb, "f")
        }
        get isScatteringEnabled() {
          return (0, pb.c)(this, Mb, "f")
        }
        set isScatteringEnabled(bb) {
          (0, pb.e)(this, Mb, bb, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(bb) {
          this._scene.enableSubSurfaceForPrePass() && bb && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(bb))
        }
        get useAlbedoToTintRefraction() {
          return (0, pb.c)(this, Tb, "f")
        }
        set useAlbedoToTintRefraction(bb) {
          (0, pb.e)(this, Tb, bb, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, pb.c)(this, Eb, "f")
        }
        set useAlbedoToTintTranslucency(bb) {
          (0, pb.e)(this, Eb, bb, "f")
        }
        get thicknessTexture() {
          return (0, pb.c)(this, Yb, "f")
        }
        set thicknessTexture(bb) {
          (0, pb.e)(this, Yb, bb, "f")
        }
        get refractionTexture() {
          return (0, pb.c)(this, Bb, "f")
        }
        set refractionTexture(bb) {
          (0, pb.e)(this, Bb, bb, "f")
        }
        get indexOfRefraction() {
          return (0, pb.c)(this, eb, "f")
        }
        set indexOfRefraction(bb) {
          (0, pb.e)(this, eb, bb, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(bb) {
          const ab = bb >= 1 ? bb : -1;
          this._volumeIndexOfRefraction !== ab && (this._volumeIndexOfRefraction = ab, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, pb.c)(this, vb, "f")
        }
        set invertRefractionY(bb) {
          (0, pb.e)(this, vb, bb, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, pb.c)(this, Lb, "f")
        }
        set linkRefractionWithTransparency(bb) {
          (0, pb.e)(this, Lb, bb, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, pb.c)(this, Pb, "f")
        }
        set useMaskFromThicknessTexture(bb) {
          (0, pb.e)(this, Pb, bb, "f")
        }
        get refractionIntensityTexture() {
          return (0, pb.c)(this, Xb, "f")
        }
        set refractionIntensityTexture(bb) {
          (0, pb.e)(this, Xb, bb, "f")
        }
        get translucencyIntensityTexture() {
          return (0, pb.c)(this, jb, "f")
        }
        set translucencyIntensityTexture(bb) {
          (0, pb.e)(this, jb, bb, "f")
        }
        get translucencyColorTexture() {
          return (0, pb.c)(this, Rb, "f")
        }
        set translucencyColorTexture(bb) {
          (0, pb.e)(this, Rb, bb, "f")
        }
        get useGltfStyleTextures() {
          return (0, pb.c)(this, kb, "f")
        }
        set useGltfStyleTextures(bb) {
          (0, pb.e)(this, kb, bb, "f")
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
        constructor(yb) {
          let Zb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(yb, "PBRSubSurface", 130, new Ya, Zb), this._isRefractionEnabled = !1, ab.set(this, (0, pb.k)(this, Aa, !1)), this._isTranslucencyEnabled = ((0, pb.k)(this, Ma), !1), Ub.set(this, (0, pb.k)(this, Ta, !1)), this._isDispersionEnabled = ((0, pb.k)(this, Ea), !1), Ab.set(this, (0, pb.k)(this, Ba, !1)), this._isScatteringEnabled = ((0, pb.k)(this, ea), !1), Mb.set(this, (0, pb.k)(this, va, !1)), this._scatteringDiffusionProfileIndex = ((0, pb.k)(this, La), (0, pb.k)(this, Pa, 0)), this.refractionIntensity = ((0, pb.k)(this, Xa), (0, pb.k)(this, ja, 1)), this.translucencyIntensity = ((0, pb.k)(this, Ra), (0, pb.k)(this, ka, 1)), this._useAlbedoToTintRefraction = ((0, pb.k)(this, ya), !1), Tb.set(this, (0, pb.k)(this, Za, !1)), this._useAlbedoToTintTranslucency = ((0, pb.k)(this, Da), !1), Eb.set(this, (0, pb.k)(this, za, !1)), this._thicknessTexture = ((0, pb.k)(this, xa), null), Yb.set(this, (0, pb.k)(this, ia, null)), this._refractionTexture = ((0, pb.k)(this, fa), null), Bb.set(this, (0, pb.k)(this, ma, null)), this._indexOfRefraction = ((0, pb.k)(this, pa), 1.5), eb.set(this, (0, pb.k)(this, Na, 1.5)), this._volumeIndexOfRefraction = ((0, pb.k)(this, Wa), (0, pb.k)(this, Ha, -1)), this._invertRefractionY = ((0, pb.k)(this, Ia), !1), vb.set(this, (0, pb.k)(this, da, !1)), this._linkRefractionWithTransparency = ((0, pb.k)(this, Fa), !1), Lb.set(this, (0, pb.k)(this, ha, !1)), this.minimumThickness = ((0, pb.k)(this, Ga), (0, pb.k)(this, Qa, 0)), this.maximumThickness = ((0, pb.k)(this, qa), (0, pb.k)(this, ua, 1)), this.useThicknessAsDepth = ((0, pb.k)(this, ra), (0, pb.k)(this, Ka, !1)), this.tintColor = ((0, pb.k)(this, oa), (0, pb.k)(this, la, gb.c.White())), this.tintColorAtDistance = ((0, pb.k)(this, ta), (0, pb.k)(this, wa, 1)), this.dispersion = ((0, pb.k)(this, sa), (0, pb.k)(this, ga, 0)), this.diffusionDistance = ((0, pb.k)(this, Ca), (0, pb.k)(this, Va, gb.c.White())), this._useMaskFromThicknessTexture = ((0, pb.k)(this, Oa), !1), Pb.set(this, (0, pb.k)(this, ca, !1)), this._refractionIntensityTexture = ((0, pb.k)(this, Ja), null), Xb.set(this, (0, pb.k)(this, na, null)), this._translucencyIntensityTexture = ((0, pb.k)(this, Sa), null), jb.set(this, (0, pb.k)(this, bU, null)), this.translucencyColor = ((0, pb.k)(this, aU), (0, pb.k)(this, UU, null)), this._translucencyColorTexture = ((0, pb.k)(this, AU), null), Rb.set(this, (0, pb.k)(this, MU, null)), this._useGltfStyleTextures = ((0, pb.k)(this, TU), !0), kb.set(this, (0, pb.k)(this, EU, !0)), this.applyAlbedoAfterSubSurface = ((0, pb.k)(this, YU), (0, pb.k)(this, BU, bb.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, pb.k)(this, eU), (0, pb.k)(this, vU, bb.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, pb.k)(this, LU), this._scene = yb.oN(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = yb._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = yb._dirtyCallbacks[32]
        }
        isReadyForSubMesh(bb, ab) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (bb._areTexturesDirty && ab.texturesEnabled) {
            if (this._thicknessTexture && cb.c.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && cb.c.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && cb.c.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && cb.c.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const bb = this._getRefractionTexture(ab);
            if (bb && cb.c.RefractionTextureEnabled && !bb.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bb, ab) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return bb.SUBSURFACE = !1, bb.SS_DISPERSION = !1, bb.SS_TRANSLUCENCY = !1, bb.SS_SCATTERING = !1, bb.SS_REFRACTION = !1, bb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_THICKNESSANDMASK_TEXTURE = !1, bb.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, bb.SS_HAS_THICKNESS = !1, bb.SS_REFRACTIONINTENSITY_TEXTURE = !1, bb.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, bb.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, bb.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, bb.SS_REFRACTIONMAP_3D = !1, bb.SS_REFRACTIONMAP_OPPOSITEZ = !1, bb.SS_LODINREFRACTIONALPHA = !1, bb.SS_GAMMAREFRACTION = !1, bb.SS_RGBDREFRACTION = !1, bb.SS_LINEARSPECULARREFRACTION = !1, bb.SS_LINKREFRACTIONTOTRANSPARENCY = !1, bb.SS_ALBEDOFORREFRACTIONTINT = !1, bb.SS_ALBEDOFORTRANSLUCENCYTINT = !1, bb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, bb.SS_USE_THICKNESS_AS_DEPTH = !1, bb.SS_USE_GLTF_TEXTURES = !1, bb.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, bb.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, bb.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(bb.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (bb._areTexturesDirty) {
            if (bb.SUBSURFACE = !0, bb.SS_DISPERSION = this._isDispersionEnabled, bb.SS_TRANSLUCENCY = this._isTranslucencyEnabled, bb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, bb.SS_SCATTERING = this._isScatteringEnabled, bb.SS_THICKNESSANDMASK_TEXTURE = !1, bb.SS_REFRACTIONINTENSITY_TEXTURE = !1, bb.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, bb.SS_HAS_THICKNESS = !1, bb.SS_USE_GLTF_TEXTURES = !1, bb.SS_REFRACTION = !1, bb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, bb.SS_REFRACTIONMAP_3D = !1, bb.SS_GAMMAREFRACTION = !1, bb.SS_RGBDREFRACTION = !1, bb.SS_LINEARSPECULARREFRACTION = !1, bb.SS_REFRACTIONMAP_OPPOSITEZ = !1, bb.SS_LODINREFRACTIONALPHA = !1, bb.SS_LINKREFRACTIONTOTRANSPARENCY = !1, bb.SS_ALBEDOFORREFRACTIONTINT = !1, bb.SS_ALBEDOFORTRANSLUCENCYTINT = !1, bb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, bb.SS_USE_THICKNESS_AS_DEPTH = !1, bb.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, bb.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, bb._areTexturesDirty && ab.texturesEnabled && (this._thicknessTexture && cb.c.ThicknessTextureEnabled && (0, nb.$)(this._thicknessTexture, bb, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && cb.c.RefractionIntensityTextureEnabled && (0, nb.$)(this._refractionIntensityTexture, bb, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && cb.c.TranslucencyIntensityTextureEnabled && (0, nb.$)(this._translucencyIntensityTexture, bb, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && cb.c.TranslucencyColorTextureEnabled && ((0, nb.$)(this._translucencyColorTexture, bb, "SS_TRANSLUCENCYCOLOR_TEXTURE"), bb.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), bb.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, bb.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, bb.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, bb.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && ab.texturesEnabled) {
              const Ub = this._getRefractionTexture(ab);
              Ub && cb.c.RefractionTextureEnabled && (bb.SS_REFRACTION = !0, bb.SS_REFRACTIONMAP_3D = Ub.isCube, bb.SS_GAMMAREFRACTION = Ub.gammaSpace, bb.SS_RGBDREFRACTION = Ub.isRGBD, bb.SS_LINEARSPECULARREFRACTION = Ub.linearSpecularLOD, bb.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && Ub.isCube ? !Ub.invertZ : Ub.invertZ, bb.SS_LODINREFRACTIONALPHA = Ub.lodLevelInAlpha, bb.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, bb.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, bb.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = Ub.isCube && Ub.boundingBoxSize, bb.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (bb.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(bb, ab, Ub, Ab) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) bb.updateFloat2("vThicknessParam", 0, 0);
            else {
              Ab.getRenderingMesh().getWorldMatrix().decompose(rb.j.Pj[0]);
              const ab = Math.max(Math.abs(rb.j.Pj[0].x), Math.abs(rb.j.Pj[0].y), Math.abs(rb.j.Pj[0].z));
              bb.updateFloat2("vThicknessParam", this.minimumThickness * ab, (this.maximumThickness - this.minimumThickness) * ab)
            }
        }
        bindForSubMesh(bb, ab, Ub, Ab) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Mb = Ab.materialDefines,
            Tb = this._material.isFrozen,
            Eb = this._material.realTimeFiltering,
            Yb = Mb.LODBASEDMICROSFURACE,
            Bb = this._getRefractionTexture(ab);
          if (!bb.useUbo || !Tb || !bb.isSync) {
            if (this._thicknessTexture && cb.c.ThicknessTextureEnabled && (bb.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, nb.x)(this._thicknessTexture, bb, "thickness")), this._refractionIntensityTexture && cb.c.RefractionIntensityTextureEnabled && Mb.SS_REFRACTIONINTENSITY_TEXTURE && (bb.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, nb.x)(this._refractionIntensityTexture, bb, "refractionIntensity")), this._translucencyColorTexture && cb.c.TranslucencyColorTextureEnabled && Mb.SS_TRANSLUCENCYCOLOR_TEXTURE && (bb.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, nb.x)(this._translucencyColorTexture, bb, "translucencyColor")), this._translucencyIntensityTexture && cb.c.TranslucencyIntensityTextureEnabled && Mb.SS_TRANSLUCENCYINTENSITY_TEXTURE && (bb.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, nb.x)(this._translucencyIntensityTexture, bb, "translucencyIntensity")), Bb && cb.c.RefractionTextureEnabled) {
              bb.i5("refractionMatrix", Bb.getRefractionTextureMatrix());
              let ab = 1;
              Bb.isCube || Bb.depth && (ab = Bb.depth);
              const Ub = Bb.getSize().width,
                Ab = this.volumeIndexOfRefraction;
              if (bb.updateFloat4("vRefractionInfos", Bb.level, 1 / Ab, ab, this._invertRefractionY ? -1 : 1), bb.updateFloat4("vRefractionMicrosurfaceInfos", Ub, Bb.lodGenerationScale, Bb.lodGenerationOffset, 1 / this.indexOfRefraction), Eb && bb.updateFloat2("vRefractionFilteringInfo", Ub, Math.log2(Ub)), Bb.boundingBoxSize) {
                const ab = Bb;
                bb.updateVector3("vRefractionPosition", ab.boundingBoxPosition), bb.updateVector3("vRefractionSize", ab.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && bb.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), bb.updateColor3("vDiffusionDistance", this.diffusionDistance), bb.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), bb.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), bb.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), bb.updateFloat("dispersion", this.dispersion)
          }
          ab.texturesEnabled && (this._thicknessTexture && cb.c.ThicknessTextureEnabled && bb.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && cb.c.RefractionIntensityTextureEnabled && Mb.SS_REFRACTIONINTENSITY_TEXTURE && bb.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && cb.c.TranslucencyIntensityTextureEnabled && Mb.SS_TRANSLUCENCYINTENSITY_TEXTURE && bb.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && cb.c.TranslucencyColorTextureEnabled && Mb.SS_TRANSLUCENCYCOLOR_TEXTURE && bb.setTexture("translucencyColorSampler", this._translucencyColorTexture), Bb && cb.c.RefractionTextureEnabled && (Yb ? bb.setTexture("refractionSampler", Bb) : (bb.setTexture("refractionSampler", Bb._lodTextureMid || Bb), bb.setTexture("refractionSamplerLow", Bb._lodTextureLow || Bb), bb.setTexture("refractionSamplerHigh", Bb._lodTextureHigh || Bb))))
        }
        _getRefractionTexture(bb) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? bb.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(bb) {
          cb.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && bb.push(this._refractionTexture)
        }
        hasTexture(bb) {
          return this._thicknessTexture === bb || (this._refractionTexture === bb || (this._refractionIntensityTexture === bb || (this._translucencyIntensityTexture === bb || this._translucencyColorTexture === bb)))
        }
        hasRenderTargetTextures() {
          return !!(cb.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
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
        addFallbacks(bb, ab, Ub) {
          return bb.SS_SCATTERING && ab.addFallback(Ub++, "SS_SCATTERING"), bb.SS_TRANSLUCENCY && ab.addFallback(Ub++, "SS_TRANSLUCENCY"), Ub
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
      }, ab = new WeakMap, Ub = new WeakMap, Ab = new WeakMap, Mb = new WeakMap, Tb = new WeakMap, Eb = new WeakMap, Yb = new WeakMap, Bb = new WeakMap, eb = new WeakMap, vb = new WeakMap, Lb = new WeakMap, Pb = new WeakMap, Xb = new WeakMap, jb = new WeakMap, Rb = new WeakMap, kb = new WeakMap, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ua[Symbol.metadata] ?? null) : void 0;
        yb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Zb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Db = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], zb = [(0, Nb.K)(), (0, Nb.e)("_markScenePrePassDirty")], xb = [(0, Nb.K)()], ib = [(0, Nb.K)()], fb = [(0, Nb.K)()], mb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Wb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Hb = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Ib = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], db = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Fb = [(0, Nb.K)()], hb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Gb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Qb = [(0, Nb.K)()], qb = [(0, Nb.K)()], ub = [(0, Nb.K)()], Kb = [(0, Nb.k)()], ob = [(0, Nb.K)()], tb = [(0, Nb.K)()], wb = [(0, Nb.k)()], sb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Cb = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Vb = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Ob = [(0, Nb.k)()], Jb = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Sb = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], ba = [(0, Nb.K)()], aa = [(0, Nb.K)()], (0, pb.h)(bb, null, yb, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isRefractionEnabled" in bb,
            get: bb => bb.isRefractionEnabled,
            set: (bb, ab) => {
              bb.isRefractionEnabled = ab
            }
          },
          metadata: ab
        }, Aa, Ma), (0, pb.h)(bb, null, Zb, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isTranslucencyEnabled" in bb,
            get: bb => bb.isTranslucencyEnabled,
            set: (bb, ab) => {
              bb.isTranslucencyEnabled = ab
            }
          },
          metadata: ab
        }, Ta, Ea), (0, pb.h)(bb, null, Db, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isDispersionEnabled" in bb,
            get: bb => bb.isDispersionEnabled,
            set: (bb, ab) => {
              bb.isDispersionEnabled = ab
            }
          },
          metadata: ab
        }, Ba, ea), (0, pb.h)(bb, null, zb, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isScatteringEnabled" in bb,
            get: bb => bb.isScatteringEnabled,
            set: (bb, ab) => {
              bb.isScatteringEnabled = ab
            }
          },
          metadata: ab
        }, va, La), (0, pb.h)(bb, null, mb, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlbedoToTintRefraction" in bb,
            get: bb => bb.useAlbedoToTintRefraction,
            set: (bb, ab) => {
              bb.useAlbedoToTintRefraction = ab
            }
          },
          metadata: ab
        }, Za, Da), (0, pb.h)(bb, null, Wb, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlbedoToTintTranslucency" in bb,
            get: bb => bb.useAlbedoToTintTranslucency,
            set: (bb, ab) => {
              bb.useAlbedoToTintTranslucency = ab
            }
          },
          metadata: ab
        }, za, xa), (0, pb.h)(bb, null, Hb, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "thicknessTexture" in bb,
            get: bb => bb.thicknessTexture,
            set: (bb, ab) => {
              bb.thicknessTexture = ab
            }
          },
          metadata: ab
        }, ia, fa), (0, pb.h)(bb, null, Ib, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "refractionTexture" in bb,
            get: bb => bb.refractionTexture,
            set: (bb, ab) => {
              bb.refractionTexture = ab
            }
          },
          metadata: ab
        }, ma, pa), (0, pb.h)(bb, null, db, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "indexOfRefraction" in bb,
            get: bb => bb.indexOfRefraction,
            set: (bb, ab) => {
              bb.indexOfRefraction = ab
            }
          },
          metadata: ab
        }, Na, Wa), (0, pb.h)(bb, null, hb, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertRefractionY" in bb,
            get: bb => bb.invertRefractionY,
            set: (bb, ab) => {
              bb.invertRefractionY = ab
            }
          },
          metadata: ab
        }, da, Fa), (0, pb.h)(bb, null, Gb, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: bb => "linkRefractionWithTransparency" in bb,
            get: bb => bb.linkRefractionWithTransparency,
            set: (bb, ab) => {
              bb.linkRefractionWithTransparency = ab
            }
          },
          metadata: ab
        }, ha, Ga), (0, pb.h)(bb, null, sb, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useMaskFromThicknessTexture" in bb,
            get: bb => bb.useMaskFromThicknessTexture,
            set: (bb, ab) => {
              bb.useMaskFromThicknessTexture = ab
            }
          },
          metadata: ab
        }, ca, Ja), (0, pb.h)(bb, null, Cb, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "refractionIntensityTexture" in bb,
            get: bb => bb.refractionIntensityTexture,
            set: (bb, ab) => {
              bb.refractionIntensityTexture = ab
            }
          },
          metadata: ab
        }, na, Sa), (0, pb.h)(bb, null, Vb, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyIntensityTexture" in bb,
            get: bb => bb.translucencyIntensityTexture,
            set: (bb, ab) => {
              bb.translucencyIntensityTexture = ab
            }
          },
          metadata: ab
        }, bU, aU), (0, pb.h)(bb, null, Jb, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyColorTexture" in bb,
            get: bb => bb.translucencyColorTexture,
            set: (bb, ab) => {
              bb.translucencyColorTexture = ab
            }
          },
          metadata: ab
        }, MU, TU), (0, pb.h)(bb, null, Sb, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: bb => "useGltfStyleTextures" in bb,
            get: bb => bb.useGltfStyleTextures,
            set: (bb, ab) => {
              bb.useGltfStyleTextures = ab
            }
          },
          metadata: ab
        }, EU, YU), (0, pb.h)(null, null, xb, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: bb => "_scatteringDiffusionProfileIndex" in bb,
            get: bb => bb._scatteringDiffusionProfileIndex,
            set: (bb, ab) => {
              bb._scatteringDiffusionProfileIndex = ab
            }
          },
          metadata: ab
        }, Pa, Xa), (0, pb.h)(null, null, ib, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "refractionIntensity" in bb,
            get: bb => bb.refractionIntensity,
            set: (bb, ab) => {
              bb.refractionIntensity = ab
            }
          },
          metadata: ab
        }, ja, Ra), (0, pb.h)(null, null, fb, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyIntensity" in bb,
            get: bb => bb.translucencyIntensity,
            set: (bb, ab) => {
              bb.translucencyIntensity = ab
            }
          },
          metadata: ab
        }, ka, ya), (0, pb.h)(null, null, Fb, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: bb => "_volumeIndexOfRefraction" in bb,
            get: bb => bb._volumeIndexOfRefraction,
            set: (bb, ab) => {
              bb._volumeIndexOfRefraction = ab
            }
          },
          metadata: ab
        }, Ha, Ia), (0, pb.h)(null, null, Qb, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "minimumThickness" in bb,
            get: bb => bb.minimumThickness,
            set: (bb, ab) => {
              bb.minimumThickness = ab
            }
          },
          metadata: ab
        }, Qa, qa), (0, pb.h)(null, null, qb, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: bb => "maximumThickness" in bb,
            get: bb => bb.maximumThickness,
            set: (bb, ab) => {
              bb.maximumThickness = ab
            }
          },
          metadata: ab
        }, ua, ra), (0, pb.h)(null, null, ub, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: bb => "useThicknessAsDepth" in bb,
            get: bb => bb.useThicknessAsDepth,
            set: (bb, ab) => {
              bb.useThicknessAsDepth = ab
            }
          },
          metadata: ab
        }, Ka, oa), (0, pb.h)(null, null, Kb, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColor" in bb,
            get: bb => bb.tintColor,
            set: (bb, ab) => {
              bb.tintColor = ab
            }
          },
          metadata: ab
        }, la, ta), (0, pb.h)(null, null, ob, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "tintColorAtDistance" in bb,
            get: bb => bb.tintColorAtDistance,
            set: (bb, ab) => {
              bb.tintColorAtDistance = ab
            }
          },
          metadata: ab
        }, wa, sa), (0, pb.h)(null, null, tb, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: bb => "dispersion" in bb,
            get: bb => bb.dispersion,
            set: (bb, ab) => {
              bb.dispersion = ab
            }
          },
          metadata: ab
        }, ga, Ca), (0, pb.h)(null, null, wb, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: bb => "diffusionDistance" in bb,
            get: bb => bb.diffusionDistance,
            set: (bb, ab) => {
              bb.diffusionDistance = ab
            }
          },
          metadata: ab
        }, Va, Oa), (0, pb.h)(null, null, Ob, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "translucencyColor" in bb,
            get: bb => bb.translucencyColor,
            set: (bb, ab) => {
              bb.translucencyColor = ab
            }
          },
          metadata: ab
        }, UU, AU), (0, pb.h)(null, null, ba, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: bb => "applyAlbedoAfterSubSurface" in bb,
            get: bb => bb.applyAlbedoAfterSubSurface,
            set: (bb, ab) => {
              bb.applyAlbedoAfterSubSurface = ab
            }
          },
          metadata: ab
        }, BU, eU), (0, pb.h)(null, null, aa, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: bb => "legacyTranslucency" in bb,
            get: bb => bb.legacyTranslucency,
            set: (bb, ab) => {
              bb.legacyTranslucency = ab
            }
          },
          metadata: ab
        }, vU, LU), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, bb.DEFAULT_LEGACY_TRANSLUCENCY = !1, bb
    })();
    var ea = Ub(39465),
      va = Ub(39440),
      La = Ub(39478),
      Pa = Ub(39485),
      Xa = Ub(39493),
      ja = Ub(39502),
      Ra = Ub(39508),
      ka = Ub(39516),
      ya = Ub(38982);
    const Za = {
      effect: null,
      subMesh: null
    };
    class Da extends((0, Ra.c)((0, ja.b)(ob.d))) {}
    class za extends((0, Cb.i)(Da)) {
      constructor(bb) {
        super(bb), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class xa extends((0, ka.d)(Ob.d)) {}
    let ia = (() => {
      var bb, ab;
      let Ab, Mb = xa,
        Eb = [],
        Yb = [];
      return bb = class extends Mb {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(bb) {
          this._realTimeFiltering = bb, this.Aab(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(bb) {
          this._realTimeFilteringQuality = bb, this.Aab(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, pb.c)(this, ab, "f")
        }
        set debugMode(bb) {
          (0, pb.e)(this, ab, bb, "f")
        }
        constructor(Ub, Ab) {
          super(Ub, Ab, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || bb.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new rb.o(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = gb.c.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new gb.c(0, 0, 0), this._albedoColor = new gb.c(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new gb.c(1, 1, 1), this._reflectionColor = new gb.c(1, 1, 1), this._emissiveColor = new gb.c(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = bb.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Hb.h(16), this._globalAmbientColor = new gb.c(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, ab.set(this, (0, pb.k)(this, Eb, 0)), this.debugLimit = ((0, pb.k)(this, Yb), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new wb(this), this.clearCoat = new ba(this), this.iridescence = new Ua(this), this.anisotropy = new Ma(this), this.sheen = new Ea(this), this.subSurface = new Ba(this), this.detailMap = new ea.c(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), cb.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Gb(this.oN()), this.prePassConfiguration = new sb.d
        }
        get hasRenderTargetTextures() {
          return !!(cb.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
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
        isReadyForSubMesh(bb, ab, Ub) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Ab = ab._drawWrapper;
          if (Ab.effect && this.isFrozen && Ab._wasPreviouslyReady && Ab._wasPreviouslyUsingInstances === Ub) return !0;
          ab.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ab.materialDefines = new za(this._eventInfo.defineNames));
          const Mb = ab.materialDefines;
          if (this._isReadyForSubMesh(ab)) return !0;
          const Tb = this.oN(),
            Eb = Tb.vj();
          if (Mb._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Tb.texturesEnabled)) {
            if (this._albedoTexture && cb.c.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && cb.c.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && cb.c.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && cb.c.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && cb.c.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const bb = this._getReflectionTexture();
            if (bb && cb.c.ReflectionTextureEnabled) {
              if (!bb.isReadyOrNotBlocking()) return !1;
              if (bb.irradianceTexture) {
                if (!bb.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!bb.sphericalPolynomial && bb.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && cb.c.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && cb.c.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (cb.c.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (Eb.getCaps().standardDerivatives && this._bumpTexture && cb.c.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && cb.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Mb, this._eventInfo.subMesh = ab, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Mb._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Mb.AREALIGHTUSED || Mb.CLUSTLIGHT_BATCH)
            for (let Lb = 0; Lb < bb.lightSources.length; Lb++)
              if (!bb.lightSources[Lb]._isReady()) return !1;
          if (Eb.getCaps().standardDerivatives || bb.isVerticesDataPresent(Kb.m.NormalKind) || (bb.createNormals(!0), Wb.e.Warn("PBRMaterial: Normals have been created for the mesh: " + bb.name)), !(0, nb.d)(Tb, bb, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const Yb = ab.effect,
            Bb = Mb._areLightsDisposed,
            eb = this._prepareEffect(bb, ab.getRenderingMesh(), Mb, this.onCompiled, this.onError, Ub, null);
          let vb = !1;
          if (eb)
            if (this._onEffectCreatedObservable && (Za.effect = eb, Za.subMesh = ab, this._onEffectCreatedObservable.notifyObservers(Za)), this.allowShaderHotSwapping && Yb && !eb.isReady()) {
              if (Mb.markAsUnprocessed(), vb = this.isFrozen, Bb) return Mb._areLightsDisposed = !0, !1
            } else Tb.resetCachedMaterial(), ab.setEffect(eb, Mb, this._materialContext);
          return !(!ab.effect || !ab.effect.isReady()) && (Mb._renderId = Tb.getRenderId(), Ab._wasPreviouslyReady = !vb, Ab._wasPreviouslyUsingInstances = !!Ub, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(ab, Ub, Ab) {
          let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(ab, Ub, Ab, Eb, Yb), !Ab.isDirty) return null;
          Ab.markAsProcessed();
          const Bb = this.oN().vj(),
            eb = new Jb.d;
          let vb = 0;
          Ab.USESPHERICALINVERTEX && eb.addFallback(vb++, "USESPHERICALINVERTEX"), Ab.FOG && eb.addFallback(vb, "FOG"), Ab.SPECULARAA && eb.addFallback(vb, "SPECULARAA"), Ab.POINTSIZE && eb.addFallback(vb, "POINTSIZE"), Ab.LOGARITHMICDEPTH && eb.addFallback(vb, "LOGARITHMICDEPTH"), Ab.PARALLAX && eb.addFallback(vb, "PARALLAX"), Ab.PARALLAX_RHS && eb.addFallback(vb, "PARALLAX_RHS"), Ab.PARALLAXOCCLUSION && eb.addFallback(vb++, "PARALLAXOCCLUSION"), Ab.ENVIRONMENTBRDF && eb.addFallback(vb++, "ENVIRONMENTBRDF"), Ab.TANGENT && eb.addFallback(vb++, "TANGENT"), Ab.BUMP && eb.addFallback(vb++, "BUMP"), vb = (0, nb.y)(Ab, eb, this._maxSimultaneousLights, vb), Ab.SPECULARTERM && eb.addFallback(vb++, "SPECULARTERM"), Ab.USESPHERICALFROMREFLECTIONMAP && eb.addFallback(vb++, "USESPHERICALFROMREFLECTIONMAP"), Ab.USEIRRADIANCEMAP && eb.addFallback(vb++, "USEIRRADIANCEMAP"), Ab.LIGHTMAP && eb.addFallback(vb++, "LIGHTMAP"), Ab.NORMAL && eb.addFallback(vb++, "NORMAL"), Ab.AMBIENT && eb.addFallback(vb++, "AMBIENT"), Ab.EMISSIVE && eb.addFallback(vb++, "EMISSIVE"), Ab.VERTEXCOLOR && eb.addFallback(vb++, "VERTEXCOLOR"), Ab.MORPHTARGETS && eb.addFallback(vb++, "MORPHTARGETS"), Ab.MULTIVIEW && eb.addFallback(0, "MULTIVIEW");
          const Lb = [Kb.m.PositionKind];
          Ab.NORMAL && Lb.push(Kb.m.NormalKind), Ab.TANGENT && Lb.push(Kb.m.TangentKind);
          for (let bb = 1; bb <= 6; ++bb) Ab["UV" + bb] && Lb.push(`uv${1===bb?"":bb}`);
          Ab.VERTEXCOLOR && Lb.push(Kb.m.ColorKind), (0, nb.F)(Lb, ab, Ab, eb), (0, nb.H)(Lb, Ab), (0, nb.J)(Lb, ab, Ab), (0, nb.B)(Lb, ab, Ab);
          let Pb = "pbr";
          const Xb = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            jb = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, nb.ob)(Xb, jb, !0);
          const Rb = ["Material", "Scene", "Mesh"],
            kb = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Ab.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = eb, this._eventInfo.fallbackRank = vb, this._eventInfo.defines = Ab, this._eventInfo.uniforms = Xb, this._eventInfo.attributes = Lb, this._eventInfo.samplers = jb, this._eventInfo.uniformBuffersNames = Rb, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ab, this._eventInfo.indexParameters = kb, this._callbackPluginEventGeneric(128, this._eventInfo), Xa.d.AddUniformsAndSamplers(Xb, jb), sb.d.AddUniforms(Xb), sb.d.AddSamplers(jb), (0, va.e)(Xb), this._useVertexPulling) {
            const bb = Ub?.geometry;
            bb && (this._vertexPullingMetadata = (0, La.g)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, ab) => {
              Xb.push(`vp_${ab}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          Vb.d && (Vb.d.PrepareUniforms(Xb, Ab), Vb.d.PrepareSamplers(jb, Ab)), (0, nb.rb)({
            uniformsNames: Xb,
            uniformBuffersNames: Rb,
            samplers: jb,
            defines: Ab,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const yb = {};
          this.customShaderNameResolve && (Pb = this.customShaderNameResolve(Pb, Xb, Rb, jb, Ab, Lb, yb));
          const Zb = Ab.toString(),
            Db = Bb.createEffect(Pb, {
              attributes: Lb,
              uniformsNames: Xb,
              uniformBuffersNames: Rb,
              samplers: jb,
              defines: Zb,
              fallbacks: eb,
              onCompiled: Mb,
              onError: Tb,
              indexParameters: kb,
              processFinalCode: yb.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Ab.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Bb);
          return this._eventInfo.customCode = void 0, Db
        }
        _prepareDefines(ab, Ub, Ab) {
          let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const Eb = Ub.hasThinInstances,
            Yb = this.oN(),
            Bb = Yb.vj();
          (0, nb._)(Yb, ab, Ab, !0, this._maxSimultaneousLights, this._disableLighting), Ab._needNormals = !0, (0, nb.db)(Yb, Ab);
          const eb = this.needAlphaBlendingForMesh(ab) && this.oN().useOrderIndependentTransparency;
          if ((0, nb.gb)(Yb, Ab, this.canRenderToMRT && !eb), (0, nb.fb)(Yb, Ab, eb), Xa.d.PrepareDefines(Bb.currentRenderPassId, ab, Ab), Ab.METALLICWORKFLOW = this.isMetallicWorkflow(), Ab._areTexturesDirty) {
            Ab._needUVs = !1;
            for (let bb = 1; bb <= 6; ++bb) Ab["MAINUV" + bb] = !1;
            if (Yb.texturesEnabled) {
              Ab.ALBEDODIRECTUV = 0, Ab.BASE_WEIGHTDIRECTUV = 0, Ab.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Ab.AMBIENTDIRECTUV = 0, Ab.OPACITYDIRECTUV = 0, Ab.EMISSIVEDIRECTUV = 0, Ab.REFLECTIVITYDIRECTUV = 0, Ab.MICROSURFACEMAPDIRECTUV = 0, Ab.METALLIC_REFLECTANCEDIRECTUV = 0, Ab.REFLECTANCEDIRECTUV = 0, Ab.BUMPDIRECTUV = 0, Ab.LIGHTMAPDIRECTUV = 0, Bb.getCaps().textureLOD && (Ab.LODBASEDMICROSFURACE = !0), this._albedoTexture && cb.c.DiffuseTextureEnabled ? ((0, nb.$)(this._albedoTexture, Ab, "ALBEDO"), Ab.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Ab.ALBEDO = !1, this._baseWeightTexture && cb.c.BaseWeightTextureEnabled ? (0, nb.$)(this._baseWeightTexture, Ab, "BASE_WEIGHT") : Ab.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && cb.c.BaseDiffuseRoughnessTextureEnabled ? (0, nb.$)(this._baseDiffuseRoughnessTexture, Ab, "BASE_DIFFUSE_ROUGHNESS") : Ab.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && cb.c.AmbientTextureEnabled ? ((0, nb.$)(this._ambientTexture, Ab, "AMBIENT"), Ab.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Ab.AMBIENT = !1, this._opacityTexture && cb.c.OpacityTextureEnabled ? ((0, nb.$)(this._opacityTexture, Ab, "OPACITY"), Ab.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Ab.OPACITY = !1;
              const bb = this._getReflectionTexture(),
                ab = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Bb.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, nb.W)(Yb, bb, Ab, this.realTimeFiltering, this.realTimeFilteringQuality, !ab), this._lightmapTexture && cb.c.LightmapTextureEnabled ? ((0, nb.$)(this._lightmapTexture, Ab, "LIGHTMAP"), Ab.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Ab.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Ab.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Ab.LIGHTMAP = !1, this._emissiveTexture && cb.c.EmissiveTextureEnabled ? ((0, nb.$)(this._emissiveTexture, Ab, "EMISSIVE"), Ab.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Ab.EMISSIVE = !1, cb.c.SpecularTextureEnabled ? (this._metallicTexture ? ((0, nb.$)(this._metallicTexture, Ab, "REFLECTIVITY"), Ab.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Ab.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Ab.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Ab.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Ab.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, nb.$)(this._reflectivityTexture, Ab, "REFLECTIVITY"), Ab.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Ab.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Ab.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Ab.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Ab.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, nb.$)(this._metallicReflectanceTexture, Ab, "METALLIC_REFLECTANCE"), Ab.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Ab.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, nb.$)(this._reflectanceTexture, Ab, "REFLECTANCE"), Ab.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Ab.REFLECTANCE = !1) : (Ab.METALLIC_REFLECTANCE = !1, Ab.REFLECTANCE = !1), this._microSurfaceTexture ? (0, nb.$)(this._microSurfaceTexture, Ab, "MICROSURFACEMAP") : Ab.MICROSURFACEMAP = !1) : (Ab.REFLECTIVITY = !1, Ab.MICROSURFACEMAP = !1), Bb.getCaps().standardDerivatives && this._bumpTexture && cb.c.BumpTextureEnabled && !this._disableBumpMap ? ((0, nb.$)(this._bumpTexture, Ab, "BUMP"), this._useParallax && this._albedoTexture && cb.c.DiffuseTextureEnabled ? (Ab.PARALLAX = !0, Ab.PARALLAX_RHS = Yb.useRightHandedSystem, Ab.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Ab.PARALLAX = !1, Ab.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Ab.BUMP = !1, Ab.PARALLAX = !1, Ab.PARALLAX_RHS = !1, Ab.PARALLAXOCCLUSION = !1, Ab.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && cb.c.ReflectionTextureEnabled ? (Ab.ENVIRONMENTBRDF = !0, Ab.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Ab.ENVIRONMENTBRDF = !1, Ab.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Ab.ALPHAFROMALBEDO = !0 : Ab.ALPHAFROMALBEDO = !1
            }
            Ab.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === bb.LIGHTFALLOFF_STANDARD ? (Ab.USEPHYSICALLIGHTFALLOFF = !1, Ab.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === bb.LIGHTFALLOFF_GLTF ? (Ab.USEPHYSICALLIGHTFALLOFF = !1, Ab.USEGLTFLIGHTFALLOFF = !0) : (Ab.USEPHYSICALLIGHTFALLOFF = !0, Ab.USEGLTFLIGHTFALLOFF = !1), Ab.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Ab.TWOSIDEDLIGHTING = !0 : Ab.TWOSIDEDLIGHTING = !1, Ab.MIRRORED = !!Yb._mirroredCameraPosition, Ab.SPECULARAA = Bb.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Ab._areTexturesDirty || Ab._areMiscDirty) && (Ab.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Ab.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Ab.ALPHABLEND = this.needAlphaBlendingForMesh(ab), Ab.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Ab.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Ab._areTexturesDirty && (Ab.TEXTURE_REPETITION_MODE = Bb.version > 1 || Bb.isWebGPU ? this.textureRepetitionMode : 0), Ab._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Ab), Ab.FORCENORMALFORWARD = this._forceNormalForward, Ab.RADIANCEOCCLUSION = this._useRadianceOcclusion, Ab.HORIZONOCCLUSION = this._useHorizonOcclusion, Ab._areMiscDirty && ((0, nb.bb)(ab, Yb, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ab), Ab, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Ub, this._isVertexOutputInvariant), Ab.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !ab.isVerticesDataPresent(Kb.m.NormalKind), Ab.DEBUGMODE = this._debugMode), (0, nb.S)(Yb, Bb, this, Ab, !!Mb, Tb, Eb), this._eventInfo.defines = Ab, this._eventInfo.mesh = ab, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, nb.R)(ab, Ab, !0, !0, !0, this._transparencyMode !== bb.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(bb, ab, Ub) {
          const Ab = {
            clipPlane: !1,
            useInstances: !1,
            ...Ub
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const Ub = new za(this._eventInfo.defineNames),
              Mb = this._prepareEffect(bb, bb, Ub, void 0, void 0, Ab.useInstances, Ab.clipPlane);
            this._onEffectCreatedObservable && (Za.effect = Mb, Za.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Za)), Mb.isReady() ? ab && ab(this) : Mb.onCompileObservable.add((() => {
              ab && ab(this)
            }))
          })()
        }
        buildUniformLayout() {
          const bb = this._uniformBuffer;
          bb.addUniform("vAlbedoInfos", 2), bb.addUniform("vBaseWeightInfos", 2), bb.addUniform("vBaseDiffuseRoughnessInfos", 2), bb.addUniform("vAmbientInfos", 4), bb.addUniform("vOpacityInfos", 2), bb.addUniform("vEmissiveInfos", 2), bb.addUniform("vLightmapInfos", 2), bb.addUniform("vReflectivityInfos", 3), bb.addUniform("vMicroSurfaceSamplerInfos", 2), bb.addUniform("vBumpInfos", 3), bb.addUniform("albedoMatrix", 16), bb.addUniform("baseWeightMatrix", 16), bb.addUniform("baseDiffuseRoughnessMatrix", 16), bb.addUniform("ambientMatrix", 16), bb.addUniform("opacityMatrix", 16), bb.addUniform("emissiveMatrix", 16), bb.addUniform("lightmapMatrix", 16), bb.addUniform("reflectivityMatrix", 16), bb.addUniform("microSurfaceSamplerMatrix", 16), bb.addUniform("bumpMatrix", 16), bb.addUniform("vTangentSpaceParams", 2), bb.addUniform("vAlbedoColor", 4), bb.addUniform("baseWeight", 1), bb.addUniform("baseDiffuseRoughness", 1), bb.addUniform("vLightingIntensity", 4), bb.addUniform("pointSize", 1), bb.addUniform("vReflectivityColor", 4), bb.addUniform("vEmissiveColor", 3), bb.addUniform("vAmbientColor", 3), bb.addUniform("vDebugMode", 2), bb.addUniform("vMetallicReflectanceFactors", 4), bb.addUniform("vMetallicReflectanceInfos", 2), bb.addUniform("metallicReflectanceMatrix", 16), bb.addUniform("vReflectanceInfos", 2), bb.addUniform("reflectanceMatrix", 16), bb.addUniform("cameraInfo", 4), bb.addUniform("vTextureRepetitionHexTilingParams", 4), (0, nb.kb)(bb, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(bb, ab, Ub) {
          const Ab = this.oN(),
            Mb = Ub.materialDefines;
          if (!Mb) return;
          const Tb = Ub.effect;
          if (!Tb) return;
          this._activeEffect = Tb, ab.getMeshUniformBuffer().bindToEffect(Tb, "Mesh"), ab.transferToEffect(bb);
          const Eb = Ab.vj();
          this._uniformBuffer.bindToEffect(Tb, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Ab, ab, bb, this.isFrozen), Xa.d.Bind(Eb.currentRenderPassId, this._activeEffect, ab, bb, this);
          const Yb = Ab.activeCamera;
          Yb ? this._uniformBuffer.updateFloat4("cameraInfo", Yb.minZ, Yb.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const Bb = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Bb[0], Bb[1], Bb[2], Bb[3]), this._eventInfo.subMesh = Ub, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Mb.OBJECTSPACE_NORMALMAP && (bb.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const eb = this._mustRebind(Ab, Tb, Ub, ab.visibility),
            vb = Eb._features.needToAlwaysBindUniformBuffers;
          (0, nb.h)(ab, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, La.e)(this._activeEffect, this._vertexPullingMetadata);
          let Lb = null;
          const Pb = this._uniformBuffer;
          if (eb) {
            if (this.bindViewProjection(Tb), Lb = this._getReflectionTexture(), !Pb.useUbo || !this.isFrozen || !Pb.isSync || Ub._drawWrapper._forceRebindOnNextCall) {
              if (Ab.texturesEnabled && (this._albedoTexture && cb.c.DiffuseTextureEnabled && (Pb.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, nb.x)(this._albedoTexture, Pb, "albedo")), this._baseWeightTexture && cb.c.BaseWeightTextureEnabled && (Pb.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, nb.x)(this._baseWeightTexture, Pb, "baseWeight")), this._baseDiffuseRoughnessTexture && cb.c.BaseDiffuseRoughnessTextureEnabled && (Pb.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, nb.x)(this._baseDiffuseRoughnessTexture, Pb, "baseDiffuseRoughness")), this._ambientTexture && cb.c.AmbientTextureEnabled && (Pb.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, nb.x)(this._ambientTexture, Pb, "ambient")), this._opacityTexture && cb.c.OpacityTextureEnabled && (Pb.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, nb.x)(this._opacityTexture, Pb, "opacity")), this._emissiveTexture && cb.c.EmissiveTextureEnabled && (Pb.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, nb.x)(this._emissiveTexture, Pb, "emissive")), this._lightmapTexture && cb.c.LightmapTextureEnabled && (Pb.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, nb.x)(this._lightmapTexture, Pb, "lightmap")), cb.c.SpecularTextureEnabled && (this._metallicTexture ? (Pb.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, nb.x)(this._metallicTexture, Pb, "reflectivity")) : this._reflectivityTexture && (Pb.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, nb.x)(this._reflectivityTexture, Pb, "reflectivity")), this._metallicReflectanceTexture && (Pb.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, nb.x)(this._metallicReflectanceTexture, Pb, "metallicReflectance")), this._reflectanceTexture && Mb.REFLECTANCE && (Pb.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, nb.x)(this._reflectanceTexture, Pb, "reflectance")), this._microSurfaceTexture && (Pb.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, nb.x)(this._microSurfaceTexture, Pb, "microSurfaceSampler"))), this._bumpTexture && Eb.getCaps().standardDerivatives && cb.c.BumpTextureEnabled && !this._disableBumpMap && (Pb.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, nb.x)(this._bumpTexture, Pb, "bump"), Ab._mirroredCameraPosition ? Pb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Pb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, nb.m)(Ab, Mb, Pb, this._reflectionColor, Lb, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && Pb.updateFloat("pointSize", this.pointSize), Mb.METALLICWORKFLOW) {
                gb.m.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, gb.m.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const bb = this.subSurface?._indexOfRefraction ?? 1.5,
                  ab = 1;
                gb.m.Color4[0].b = bb;
                const Ub = Math.pow((bb - ab) / (bb + ab), 2);
                gb.m.Color4[0].a = Ub, Pb.updateDirectColor4("vReflectivityColor", gb.m.Color4[0]), Pb.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else Pb.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              Pb.updateColor3("vEmissiveColor", cb.c.EmissiveTextureEnabled ? this._emissiveColor : gb.c.BlackReadOnly), !Mb.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? Pb.updateColor4("vAlbedoColor", this._albedoColor, 1) : Pb.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), Pb.updateFloat("baseWeight", this._baseWeight), Pb.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Ab.environmentIntensity, this._lightingInfos.w = this._specularIntensity, Pb.updateVector4("vLightingIntensity", this._lightingInfos), Ab.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), Pb.updateColor3("vAmbientColor", this._globalAmbientColor), Pb.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Ab.texturesEnabled && (this._albedoTexture && cb.c.DiffuseTextureEnabled && Pb.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && cb.c.BaseWeightTextureEnabled && Pb.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && cb.c.BaseDiffuseRoughnessTextureEnabled && Pb.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && cb.c.AmbientTextureEnabled && Pb.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && cb.c.OpacityTextureEnabled && Pb.setTexture("opacitySampler", this._opacityTexture), (0, nb.o)(Ab, Mb, Pb, Lb, this.realTimeFiltering), Mb.ENVIRONMENTBRDF && Pb.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && cb.c.EmissiveTextureEnabled && Pb.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && cb.c.LightmapTextureEnabled && Pb.setTexture("lightmapSampler", this._lightmapTexture), cb.c.SpecularTextureEnabled && (this._metallicTexture ? Pb.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && Pb.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && Pb.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Mb.REFLECTANCE && Pb.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && Pb.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && Eb.getCaps().standardDerivatives && cb.c.BumpTextureEnabled && !this._disableBumpMap && Pb.setTexture("bumpSampler", this._bumpTexture)), this.oN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ab) && this.oN().depthPeelingRenderer.bind(Tb), this._eventInfo.subMesh = Ub, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, va.f)(this._activeEffect, this, Ab), this.bindEyePosition(Tb)
          } else vb && (this._needToBindSceneUbo = !0);
          !eb && this.isFrozen && !vb || !Ab.lightsEnabled || this._disableLighting || (0, nb.s)(Ab, ab, this._activeEffect, Mb, this._maxSimultaneousLights), !eb && this.isFrozen || ((Ab.fogEnabled && ab.applyFog && Ab.fogMode !== ub.e.FOGMODE_NONE || Lb || this.subSurface.refractionTexture || ab.receiveShadows || Mb.PREPASS || Mb.CLUSTLIGHT_BATCH) && this.bindView(Tb), (0, nb.l)(Ab, ab, this._activeEffect, !0), Mb.NUM_MORPH_INFLUENCERS && (0, nb.v)(ab, this._activeEffect), Mb.BAKED_VERTEX_ANIMATION_TEXTURE && ab.bakedVertexAnimationManager?.bind(Tb, Mb.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, nb.u)(Mb, this._activeEffect, Ab)), this._afterBind(ab, this._activeEffect, Ub), Pb.update()
        }
        getAnimatables() {
          const bb = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && bb.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && bb.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && bb.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && bb.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && bb.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && bb.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && bb.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? bb.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && bb.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && bb.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && bb.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && bb.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && bb.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && bb.push(this._microSurfaceTexture), bb
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.oN().environmentTexture
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
          const bb = this.oN().enableSubSurfaceForPrePass();
          return bb && (bb.enabled = !0), !0
        }
        dispose(bb, ab) {
          this._breakShaderLoadedCheck = !0, ab && (this._environmentBRDFTexture && this.oN().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(bb, ab)
        }
      }, ab = new WeakMap, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mb[Symbol.metadata] ?? null) : void 0;
        Ab = [(0, Nb.e)("_markAllSubMeshesAsMiscDirty")], (0, pb.h)(bb, null, Ab, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "debugMode" in bb,
            get: bb => bb.debugMode,
            set: (bb, ab) => {
              bb.debugMode = ab
            }
          },
          metadata: ab
        }, Eb, Yb), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb.PBRMATERIAL_OPAQUE = Tb.d.MATERIAL_OPAQUE, bb.PBRMATERIAL_ALPHATEST = Tb.d.MATERIAL_ALPHATEST, bb.PBRMATERIAL_ALPHABLEND = Tb.d.MATERIAL_ALPHABLEND, bb.PBRMATERIAL_ALPHATESTANDBLEND = Tb.d.MATERIAL_ALPHATESTANDBLEND, bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, bb.LIGHTFALLOFF_PHYSICAL = 0, bb.LIGHTFALLOFF_GLTF = 1, bb.LIGHTFALLOFF_STANDARD = 2, bb.ForceGLSL = !1, bb._ShaderLoader = new Pa.e((() => [Promise.all([Ub.e(307), Ub.e(318)]).then((() => Ub(60661))), Promise.all([Ub.e(312), Ub.e(308), Ub.e(372), Ub.e(321), Ub.e(371)]).then((() => Ub(60682)))]), (() => [Promise.all([Ub.e(326), Ub.e(328), Ub.e(335)]).then((() => Ub(60759))), Promise.all([Ub.e(326), Ub.e(329), Ub.e(375), Ub.e(339), Ub.e(374)]).then((() => Ub(60775)))])), bb
    })();
    Object.getOwnPropertyDescriptor(ia.prototype, "decalMap") || Object.defineProperty(ia.prototype, "decalMap", (0, ya.g)("PBRBaseMaterial", "decalMap")), (0, Ub(40932).b)();
    var fa = Ub(39124);
    var ma = Ub(39195),
      pa = Ub(40920),
      Na = Ub(38915),
      Wa = Ub(38933),
      Ha = Ub(39044);
    let Ia = !1;
    const da = new gb.g,
      Fa = new gb.g;
    class ha extends pa.b {
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
          for (let ab = 0; ab < this._textures.length; ab++) this._textures[ab].wrapU = bb
      }
      set wrapV(bb) {
        if (this._textures)
          for (let ab = 0; ab < this._textures.length; ab++) this._textures[ab].wrapV = bb
      }
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = !(!Mb || !Mb.generateMipMaps) && Mb.generateMipMaps,
          Yb = !(!Mb || !Mb.generateDepthTexture) && Mb.generateDepthTexture,
          Bb = Mb && Mb.depthTextureFormat ? Mb.depthTextureFormat : 15,
          eb = !Mb || void 0 === Mb.doNotChangeAspectRatio || Mb.doNotChangeAspectRatio,
          vb = !(!Mb || !Mb.drawOnlyOnFirstAttachmentByDefault) && Mb.drawOnlyOnFirstAttachmentByDefault;
        if (super(bb, ab, Ab, Eb, eb, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Ia || (Ia = !0, Wa.ThinEngine.prototype.restoreSingleAttachment = function() {
            const bb = this._gl;
            this.bindAttachments([bb.BACK])
          }, Wa.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const bb = this._gl;
            this.bindAttachments([bb.COLOR_ATTACHMENT0])
          }, Wa.ThinEngine.prototype.buildTextureLayout = function(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Ub = this._gl,
              Ab = [];
            if (ab) Ab.push(Ub.BACK);
            else
              for (let Mb = 0; Mb < bb.length; Mb++) bb[Mb] ? Ab.push(Ub["COLOR_ATTACHMENT" + Mb]) : Ab.push(Ub.NONE);
            return Ab
          }, Wa.ThinEngine.prototype.bindAttachments = function(bb) {
            const ab = this._gl,
              Ub = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, Ub)
              for (let Ab = 0; Ab < bb.length; Ab++) bb[Ab] !== ab.NONE && Ub[Ab] && (0, Ha.h)(Ub[Ab].format) && (this._integerMRTAttachmentsMask |= 1 << Ab);
            ab.drawBuffers(bb)
          }, Wa.ThinEngine.prototype.clearAttachments = function(bb, ab, Ub, Ab) {
            let Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const Eb = this._currentRenderTarget?.textures;
            let Yb = !1;
            if (Ub && bb && Eb)
              for (let Bb = 0; Bb < ab.length; Bb++) {
                const bb = Eb[Bb];
                if (ab[Bb] !== this._gl.NONE && bb && (0, Ha.h)(bb.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  Yb = !0;
                  break
                }
              }
            if (!Yb || !bb || !Eb) return this.bindAttachments(ab), void this.clear(bb, Ub, Ab, Mb, Tb);
            this.bindAttachments(ab), this._applyColorWriteState();
            for (let Bb = 0; Bb < ab.length; Bb++) {
              const Ub = Eb[Bb];
              if (ab[Bb] !== this._gl.NONE && Ub) {
                let ab = bb;
                if ((0, Ha.h)(Ub.format)) {
                  const Ab = (0, Ha.j)(Ub.type);
                  ab = Ab ? da : Fa;
                  const Mb = Ab ? 255 : 1;
                  ab.r = Math.round(bb.r * Mb), ab.g = Math.round(bb.g * Mb), ab.b = Math.round(bb.b * Mb), ab.a = Math.round(bb.a * Mb)
                }
                this._clearColorAttachment(Bb, ab, Ub.format, Ub.type)
              }
            }
            if (Ab || Mb) {
              const bb = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Ab, Mb, Tb)
              } finally {
                this._integerMRTAttachmentsMask = bb
              }
            }
          }, Wa.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Ub = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, bb.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(bb), ab || this.generateMipMapsMultiFramebuffer(bb), Ub && (bb._MSAAFramebuffer && this._bindUnboundFramebuffer(bb._framebuffer), Ub()), this._bindUnboundFramebuffer(null)
          }, Wa.ThinEngine.prototype.createMultipleRenderTarget = function(bb, ab) {
            let Ub, Ab = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Mb = !1,
              Tb = !0,
              Eb = !1,
              Yb = !1,
              Bb = 1,
              eb = 1,
              vb = [],
              Lb = [],
              Pb = [],
              Xb = [],
              jb = [],
              Rb = [],
              kb = [],
              yb = [],
              Zb = [],
              Db = !1;
            const zb = this._createHardwareRenderTargetWrapper(!0, !1, bb);
            void 0 !== ab && (Mb = void 0 !== ab.generateMipMaps && ab.generateMipMaps, Tb = void 0 === ab.generateDepthBuffer || ab.generateDepthBuffer, Eb = void 0 !== ab.generateStencilBuffer && ab.generateStencilBuffer, Yb = void 0 !== ab.generateDepthTexture && ab.generateDepthTexture, Bb = ab.YEb ?? 1, eb = ab.samples ?? eb, vb = ab.types || vb, Lb = ab.samplingModes || Lb, Pb = ab.useSRGBBuffers || Pb, Xb = ab.formats || Xb, jb = ab.targetTypes || jb, Rb = ab.faceIndex || Rb, kb = ab.layerIndex || kb, yb = ab.layerCounts || yb, Zb = ab.labels || Zb, Db = ab.dontCreateTextures ?? !1, this.oj > 1 && (13 === ab.depthTextureFormat || 17 === ab.depthTextureFormat || 16 === ab.depthTextureFormat || 14 === ab.depthTextureFormat || 18 === ab.depthTextureFormat) && (Ub = ab.depthTextureFormat)), void 0 === Ub && (Ub = Eb ? 13 : 14);
            const xb = this._gl,
              ib = this._currentFramebuffer,
              fb = xb.createFramebuffer();
            this._bindUnboundFramebuffer(fb);
            const mb = bb.width ?? bb,
              pb = bb.height ?? bb,
              Nb = [],
              Hb = [],
              Ib = this.oj > 1 && (13 === Ub || 17 === Ub || 18 === Ub);
            zb.label = ab?.label ?? "MultiRenderTargetWrapper", zb._framebuffer = fb, zb._generateDepthBuffer = Yb || Tb, zb._generateStencilBuffer = Yb ? Ib : Eb, zb._depthStencilBuffer = this._setupFramebufferDepthAttachments(zb._generateStencilBuffer, zb._generateDepthBuffer, mb, pb, 1, Ub), zb._attachments = Hb;
            for (let db = 0; db < Bb; db++) {
              let bb = Lb[db] || 3,
                ab = vb[db] || 0,
                Ub = Pb[db] || !1;
              const Ab = Xb[db] || 5,
                Tb = jb[db] || 3553,
                Eb = yb[db] ?? 1;
              (1 !== ab || this._caps.textureFloatLinearFiltering) && (2 !== ab || this._caps.textureHalfFloatLinearFiltering) || (bb = 1);
              const Yb = this._getSamplingParameters(bb, Mb);
              1 !== ab || this._caps.textureFloat || (ab = 0, Wb.e.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), Ub = Ub && this._caps.supportSRGBBuffers && (this.oj > 1 || this.isWebGPU);
              const Bb = this.oj > 1,
                eb = xb[Bb ? "COLOR_ATTACHMENT" + db : "COLOR_ATTACHMENT" + db + "_WEBGL"];
              if (Hb.push(eb), -1 === Tb || Db) continue;
              const Rb = new Na.b(this, 6);
              Nb[db] = Rb, xb.activeTexture(xb["TEXTURE" + db]), xb.bindTexture(Tb, Rb._hardwareTexture.underlyingResource), xb.texParameteri(Tb, xb.TEXTURE_MAG_FILTER, Yb.mag), xb.texParameteri(Tb, xb.TEXTURE_MIN_FILTER, Yb.min), xb.texParameteri(Tb, xb.TEXTURE_WRAP_S, xb.CLAMP_TO_EDGE), xb.texParameteri(Tb, xb.TEXTURE_WRAP_T, xb.CLAMP_TO_EDGE);
              const kb = this._getRGBABufferInternalSizedFormat(ab, Ab, Ub),
                ib = this._getInternalFormat(Ab),
                fb = this._getWebGLTextureType(ab);
              if (!Bb || 35866 !== Tb && 32879 !== Tb)
                if (34067 === Tb) {
                  for (let bb = 0; bb < 6; bb++) xb.texImage2D(xb.TEXTURE_CUBE_MAP_POSITIVE_X + bb, 0, kb, mb, pb, 0, ib, fb, null);
                  Rb.isCube = !0
                } else xb.texImage2D(xb.TEXTURE_2D, 0, kb, mb, pb, 0, ib, fb, null);
              else 35866 === Tb ? Rb.is2DArray = !0 : Rb.is3D = !0, Rb.baseDepth = Rb.depth = Eb, xb.texImage3D(Tb, 0, kb, mb, pb, Eb, 0, ib, fb, null);
              Mb && xb.generateMipmap(Tb), this._bindTextureDirectly(Tb, null), Rb.baseWidth = mb, Rb.baseHeight = pb, Rb.width = mb, Rb.height = pb, Rb.isReady = !0, Rb.samples = 1, Rb.generateMipMaps = Mb, Rb.samplingMode = bb, Rb.type = ab, Rb._useSRGBBuffer = Ub, Rb.format = Ab, Rb.label = Zb[db] ?? zb.label + "-Texture" + db, this._internalTexturesCache.push(Rb)
            }
            if (Yb && this._caps.depthTextureExtension && !Db) {
              const bb = new Na.b(this, 14);
              let ab = 5,
                Ab = xb.DEPTH_COMPONENT16,
                Tb = xb.DEPTH_COMPONENT,
                Eb = xb.UNSIGNED_SHORT,
                Yb = xb.DEPTH_ATTACHMENT;
              this.oj < 2 ? Ab = xb.DEPTH_COMPONENT : 14 === Ub ? (ab = 1, Eb = xb.FLOAT, Ab = xb.DEPTH_COMPONENT32F) : 18 === Ub ? (ab = 0, Eb = xb.FLOAT_32_UNSIGNED_INT_24_8_REV, Ab = xb.DEPTH32F_STENCIL8, Tb = xb.DEPTH_STENCIL, Yb = xb.DEPTH_STENCIL_ATTACHMENT) : 16 === Ub ? (ab = 0, Eb = xb.UNSIGNED_INT, Ab = xb.DEPTH_COMPONENT24, Yb = xb.DEPTH_ATTACHMENT) : 13 !== Ub && 17 !== Ub || (ab = 12, Eb = xb.UNSIGNED_INT_24_8, Ab = xb.DEPTH24_STENCIL8, Tb = xb.DEPTH_STENCIL, Yb = xb.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(xb.TEXTURE_2D, bb, !0), xb.texParameteri(xb.TEXTURE_2D, xb.TEXTURE_MAG_FILTER, xb.NEAREST), xb.texParameteri(xb.TEXTURE_2D, xb.TEXTURE_MIN_FILTER, xb.NEAREST), xb.texParameteri(xb.TEXTURE_2D, xb.TEXTURE_WRAP_S, xb.CLAMP_TO_EDGE), xb.texParameteri(xb.TEXTURE_2D, xb.TEXTURE_WRAP_T, xb.CLAMP_TO_EDGE), xb.texImage2D(xb.TEXTURE_2D, 0, Ab, mb, pb, 0, Tb, Eb, null), xb.framebufferTexture2D(xb.FRAMEBUFFER, Yb, xb.TEXTURE_2D, bb._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(xb.TEXTURE_2D, null), zb._depthStencilTexture = bb, zb._depthStencilTextureWithStencil = Ib, bb.baseWidth = mb, bb.baseHeight = pb, bb.width = mb, bb.height = pb, bb.isReady = !0, bb.samples = 1, bb.generateMipMaps = Mb, bb.samplingMode = 1, bb.format = Ub, bb.type = ab, bb.label = zb.label + "-DepthStencil", Nb[Bb] = bb, this._internalTexturesCache.push(bb)
            }
            if (zb.setTextures(Nb), Ab && xb.drawBuffers(Hb), this._bindUnboundFramebuffer(ib), zb.setLayerAndFaceIndices(kb, Rb), this.resetTextureCache(), Db) {
              if (eb > 1) {
                const bb = xb.createFramebuffer();
                if (!bb) throw new Error("Unable to create multi sampled framebuffer");
                zb._samples = eb, zb._MSAAFramebuffer = bb, Bb > 0 && Ab && (this._bindUnboundFramebuffer(bb), xb.drawBuffers(Hb), this._bindUnboundFramebuffer(ib))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(zb, eb, Ab);
            return zb
          }, Wa.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(bb, ab) {
            let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.oj < 2 || !bb) return 1;
            if (bb.samples === ab) return ab;
            const Ab = this._gl;
            ab = Math.min(ab, this.getCaps().maxMSAASamples), bb._depthStencilBuffer && (Ab.deleteRenderbuffer(bb._depthStencilBuffer), bb._depthStencilBuffer = null), bb._MSAAFramebuffer && (Ab.deleteFramebuffer(bb._MSAAFramebuffer), bb._MSAAFramebuffer = null);
            const Mb = bb._attachments.length;
            for (let Eb = 0; Eb < Mb; Eb++) {
              const ab = bb.textures[Eb]._hardwareTexture;
              ab?.releaseMSAARenderBuffers()
            }
            if (ab > 1 && "function" === typeof Ab.renderbufferStorageMultisample) {
              const Tb = Ab.createFramebuffer();
              if (!Tb) throw new Error("Unable to create multi sampled framebuffer");
              bb._MSAAFramebuffer = Tb, this._bindUnboundFramebuffer(Tb);
              const Eb = [];
              for (let Ub = 0; Ub < Mb; Ub++) {
                const Mb = bb.textures[Ub],
                  Tb = Mb._hardwareTexture,
                  Yb = Ab[this.oj > 1 ? "COLOR_ATTACHMENT" + Ub : "COLOR_ATTACHMENT" + Ub + "_WEBGL"],
                  Bb = this._createRenderBuffer(Mb.width, Mb.height, ab, -1, this._getRGBABufferInternalSizedFormat(Mb.type, Mb.format, Mb._useSRGBBuffer), Yb);
                if (!Bb) throw new Error("Unable to create multi sampled framebuffer");
                Tb.addMSAARenderBuffer(Bb), Mb.samples = ab, Eb.push(Yb)
              }
              Ub && Ab.drawBuffers(Eb)
            } else this._bindUnboundFramebuffer(bb._framebuffer);
            const Tb = bb._depthStencilTexture ? bb._depthStencilTexture.format : void 0;
            return bb._depthStencilBuffer = this._setupFramebufferDepthAttachments(bb._generateStencilBuffer, bb._generateDepthBuffer, bb.width, bb.height, ab, Tb), this._bindUnboundFramebuffer(null), bb._samples = ab, ab
          }, Wa.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(bb) {
            const ab = bb,
              Ub = this._gl;
            if (ab.isMulti)
              for (let Ab = 0; Ab < ab._attachments.length; Ab++) {
                const bb = ab.textures[Ab];
                !bb?.generateMipMaps || bb?.isCube || bb?.is3D || (this._bindTextureDirectly(Ub.TEXTURE_2D, bb, !0), Ub.generateMipmap(Ub.TEXTURE_2D), this._bindTextureDirectly(Ub.TEXTURE_2D, null))
              }
          }, Wa.ThinEngine.prototype.resolveMultiFramebuffer = function(bb) {
            const ab = bb,
              Ub = this._gl;
            if (!ab._MSAAFramebuffer || !ab.isMulti) return;
            let Ab = ab.resolveMSAAColors ? Ub.COLOR_BUFFER_BIT : 0;
            Ab |= ab._generateDepthBuffer && ab.resolveMSAADepth ? Ub.DEPTH_BUFFER_BIT : 0, Ab |= ab._generateStencilBuffer && ab.resolveMSAAStencil ? Ub.STENCIL_BUFFER_BIT : 0;
            const Mb = ab._attachments,
              Tb = Mb.length;
            Ub.bindFramebuffer(Ub.READ_FRAMEBUFFER, ab._MSAAFramebuffer), Ub.bindFramebuffer(Ub.DRAW_FRAMEBUFFER, ab._framebuffer);
            for (let Eb = 0; Eb < Tb; Eb++) {
              const bb = ab.textures[Eb];
              for (let ab = 0; ab < Tb; ab++) Mb[ab] = Ub.NONE;
              Mb[Eb] = Ub[this.oj > 1 ? "COLOR_ATTACHMENT" + Eb : "COLOR_ATTACHMENT" + Eb + "_WEBGL"], Ub.readBuffer(Mb[Eb]), Ub.drawBuffers(Mb), Ub.blitFramebuffer(0, 0, bb.width, bb.height, 0, 0, bb.width, bb.height, Ab, Ub.NEAREST)
            }
            for (let Eb = 0; Eb < Tb; Eb++) Mb[Eb] = Ub[this.oj > 1 ? "COLOR_ATTACHMENT" + Eb : "COLOR_ATTACHMENT" + Eb + "_WEBGL"];
            Ub.drawBuffers(Mb), Ub.bindFramebuffer(this._gl.FRAMEBUFFER, ab._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = Tb;
        const Lb = [],
          Pb = [],
          Xb = [],
          jb = [],
          Rb = [],
          kb = [],
          yb = [],
          Zb = [];
        this._initTypes(Ub, Lb, Pb, Xb, jb, Rb, kb, yb, Zb, Mb);
        const Db = !Mb || void 0 === Mb.generateDepthBuffer || Mb.generateDepthBuffer,
          zb = !(!Mb || void 0 === Mb.generateStencilBuffer) && Mb.generateStencilBuffer,
          xb = Mb && Mb.samples ? Mb.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: Pb,
          generateMipMaps: Eb,
          generateDepthBuffer: Db,
          generateStencilBuffer: zb,
          generateDepthTexture: Yb,
          depthTextureFormat: Bb,
          types: Lb,
          YEb: Ub,
          useSRGBBuffers: Xb,
          samples: xb,
          formats: jb,
          targetTypes: Rb,
          faceIndex: kb,
          layerIndex: yb,
          layerCounts: Zb,
          labels: Tb,
          label: bb
        }, this._count = Ub, this._drawOnlyOnFirstAttachmentByDefault = vb, Ub > 0 && (this._createInternalTextures(), this._createTextures(Tb))
      }
      _initTypes(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
        for (let vb = 0; vb < bb; vb++) eb && eb.types && void 0 !== eb.types[vb] ? ab.push(eb.types[vb]) : ab.push(eb && eb.defaultType ? eb.defaultType : 0), eb && eb.samplingModes && void 0 !== eb.samplingModes[vb] ? Ub.push(eb.samplingModes[vb]) : Ub.push(Ib.e.BILINEAR_SAMPLINGMODE), eb && eb.useSRGBBuffers && void 0 !== eb.useSRGBBuffers[vb] ? Ab.push(eb.useSRGBBuffers[vb]) : Ab.push(!1), eb && eb.formats && void 0 !== eb.formats[vb] ? Mb.push(eb.formats[vb]) : Mb.push(5), eb && eb.targetTypes && void 0 !== eb.targetTypes[vb] ? Tb.push(eb.targetTypes[vb]) : Tb.push(3553), eb && eb.faceIndex && void 0 !== eb.faceIndex[vb] ? Eb.push(eb.faceIndex[vb]) : Eb.push(0), eb && eb.layerIndex && void 0 !== eb.layerIndex[vb] ? Yb.push(eb.layerIndex[vb]) : Yb.push(0), eb && eb.layerCounts && void 0 !== eb.layerCounts[vb] ? Bb.push(eb.layerCounts[vb]) : Bb.push(1)
      }
      _createInternaTextureIndexMapping() {
        const bb = {},
          ab = [];
        if (!this._renderTarget) return ab;
        const Ub = this._renderTarget.textures;
        for (let Ab = 0; Ab < Ub.length; Ab++) {
          const Mb = Ub[Ab];
          if (!Mb) continue;
          const Tb = bb[Mb.uniqueId];
          void 0 !== Tb ? ab[Ab] = Tb : bb[Mb.uniqueId] = Ab
        }
        return ab
      }
      _rebuild() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || bb) return;
        const Ab = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), ab && (this._releaseTextures(), this._createTextures(Ub));
        const Mb = this._renderTarget.textures;
        for (let Tb = 0; Tb < Mb.length; Tb++) {
          const bb = this._textures[Tb];
          void 0 !== Ab[Tb] && this._renderTarget.setTexture(Mb[Ab[Tb]], Tb), bb._texture = Mb[Tb], bb._texture && (bb._noMipmap = !bb._texture.useMipMaps, bb._useSRGBBuffer = bb._texture._useSRGBBuffer)
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
        const ab = this._renderTarget.textures;
        this._textures = [];
        for (let Ub = 0; Ub < ab.length; Ub++) {
          const Ab = new Ib.e(null, this.oN());
          bb?.[Ub] && (Ab.name = bb[Ub]), Ab._texture = ab[Ub], Ab._texture && (Ab._noMipmap = !Ab._texture.useMipMaps, Ab._useSRGBBuffer = Ab._texture._useSRGBBuffer), this._textures.push(Ab)
        }
      }
      setInternalTexture(bb, ab) {
        let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === ab && (this._texture = bb), this.renderTarget.setTexture(bb, ab, Ub), this.textures[ab] || (this.textures[ab] = new Ib.e(null, this.oN()), this.textures[ab].name = this._textureNames?.[ab] ?? this.textures[ab].name), this.textures[ab]._texture = bb, this.textures[ab]._noMipmap = !bb.useMipMaps, this.textures[ab]._useSRGBBuffer = bb._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[ab] = bb.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[ab] = bb.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[ab] = bb._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[ab])) {
          let Ub;
          Ub = bb.is2DArray ? 35866 : bb.isCube ? 34067 : bb.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[ab] = Ub
        }
      }
      setLayerAndFaceIndex(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[bb] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[bb] = ab), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[bb] = Ub), this.renderTarget.setLayerAndFaceIndex(bb, ab, Ub))
      }
      setLayerAndFaceIndices(bb, ab) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = bb, this._multiRenderTargetOptions.faceIndex = ab, this.renderTarget.setLayerAndFaceIndices(bb, ab))
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
      updateCount(bb, ab, Ub) {
        this._multiRenderTargetOptions.YEb = bb, this._count = bb;
        const Ab = [],
          Mb = [],
          Tb = [],
          Eb = [],
          Yb = [],
          Bb = [],
          eb = [],
          vb = [];
        this._textureNames = Ub, this._initTypes(bb, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, ab), this._multiRenderTargetOptions.types = Ab, this._multiRenderTargetOptions.samplingModes = Mb, this._multiRenderTargetOptions.useSRGBBuffers = Tb, this._multiRenderTargetOptions.formats = Eb, this._multiRenderTargetOptions.targetTypes = Yb, this._multiRenderTargetOptions.faceIndex = Bb, this._multiRenderTargetOptions.layerIndex = eb, this._multiRenderTargetOptions.layerCounts = vb, this._multiRenderTargetOptions.labels = Ub, this._rebuild(!1, !0, Ub)
      }
      _unbindFrameBuffer(bb, ab) {
        this._renderTarget && bb.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(ab)
        }))
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), bb ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const bb = this._renderTarget?.textures;
        if (bb) {
          for (let ab = bb.length - 1; ab >= 0; ab--) this._textures[ab]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var Ga = Ub(39263);
    class Qa {
      constructor(bb) {
        this.name = Ga.b.NAME_GEOMETRYBUFFERRENDERER, this.ZR = bb
      }
      register() {
        this.ZR._gatherRenderTargetsStage.registerStep(Ga.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(bb) {
        this.ZR._geometryBufferRenderer && bb.push(this.ZR._geometryBufferRenderer.getGBuffer())
      }
    }
    let qa = !1;
    var ua;
    ! function(bb) {
      bb[bb.Small = 0] = "Small", bb[bb.Medium = 1] = "Medium", bb[bb.Large = 2] = "Large", bb[bb.ExtraLarge = 3] = "ExtraLarge"
    }(ua || (ua = {}));
    const ra = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      Ka = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class oa {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(bb) {
        if (bb && this._enableMeshBlendTag && !this._scene.vj().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
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
      _forceTextureType(bb, ab) {
        bb === oa.POSITION_TEXTURE_TYPE ? (this._positionIndex = ab, this._enablePosition = !0) : bb === oa.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = ab, this._enableVelocity = !0) : bb === oa.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = ab, this._enableVelocityLinear = !0) : bb === oa.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = ab, this._enableReflectivity = !0) : bb === oa.DEPTH_TEXTURE_TYPE ? (this._depthIndex = ab, this._enableDepth = !0) : bb === oa.NORMAL_TEXTURE_TYPE ? (this._normalIndex = ab, this._enableNormal = !0) : bb === oa.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = ab, this._enableScreenspaceDepth = !0) : bb === oa.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = ab, this._enableIrradiance = !0) : bb === oa.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = ab, this._enableObjectId = !0) : bb === oa.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = ab, this._enableMeshBlendTag = !0)
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
          case oa.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case oa.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case oa.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case oa.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case oa.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case oa.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case oa.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case oa.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case oa.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case oa.MESH_BLEND_TAG_TEXTURE_TYPE:
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
          const bb = this._scene.vj(),
            ab = Math.min(bb.getCaps().maxDrawBuffers ?? 1, 8),
            Ub = this._assignRenderTargetIndices()[0] + 1;
          if (bb.getCaps().drawBuffersExtension && Ub > ab) throw new Error(`GeometryBufferRenderer: ${Ub} color attachments were requested, but this engine supports at most ${ab}`)
        }
        this._enableObjectId = bb, bb || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(bb) {
        if (this._enableMeshBlendTag !== bb) {
          if (bb) {
            const bb = this._scene.vj();
            if (! function(bb) {
                return "NATIVE" !== bb.shaderPlatformName && (bb.isWebGPU || 2 === bb.oj)
              }(bb)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !bb.isWebGPU && !bb.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const ab = Math.min(bb.getCaps().maxDrawBuffers ?? 1, 8),
                Ub = this._assignRenderTargetIndices()[0] + 1;
              if (bb.getCaps().drawBuffersExtension && Ub > ab) throw new Error(`GeometryBufferRenderer: ${Ub} color attachments were requested, but this engine supports at most ${ab}`)
            }
          }
          this._enableMeshBlendTag = bb, bb || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get ZR() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        var Mb;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new gb.g(0, 0, 0, 0), this._clearDepthColor = new gb.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = bb, this._ratioOrDimensions = ab, this._useUbo = bb.vj().supportsUniformBuffers, this._depthFormat = Ub, this._textureTypesAndFormats = Ab || {}, this._initShaderSourceAsync(), Mb = oa, qa || (qa = !0, Object.defineProperty(ub.e.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(bb) {
            bb && bb.isSupported && (this._geometryBufferRenderer = bb)
          },
          enumerable: !0,
          configurable: !0
        }), ub.e.prototype.enableGeometryBufferRenderer = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            Ub = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Mb(this, bb, ab, Ub), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, ub.e.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Mb._SceneComponentInitialization = bb => {
          let ab = bb._getComponent(Ga.b.NAME_GEOMETRYBUFFERRENDERER);
          ab || (ab = new Qa(bb), bb.iUb(ab))
        }), oa._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.vj().isWebGPU && !oa.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Ub.e(327).then((() => Ub(60978))), Promise.all([Ub.e(326), Ub.e(338)]).then((() => Ub(60980)))])) : await Promise.all([Ub.e(310).then((() => Ub(60982))), Ub.e(309).then((() => Ub(60991)))]), this._shadersLoaded = !0
      }
      isReady(bb, ab) {
        if (!this._shadersLoaded) return !1;
        const Ub = bb.Rj();
        if (Ub && Ub.disableDepthWrite) return !1;
        if (function(bb) {
            return bb._isGaussianSplatting || "GaussianSplattingMesh" === (ab = bb.getClassName()) || "GaussianSplattingStream" === ab;
            var ab
          }(bb.getMesh())) return !1;
        const Ab = [],
          Mb = [Kb.m.PositionKind],
          Tb = bb.getMesh();
        Tb.isVerticesDataPresent(Kb.m.NormalKind) && (Ab.push("#define HAS_NORMAL_ATTRIBUTE"), Mb.push(Kb.m.NormalKind));
        let Eb = !1,
          Yb = !1;
        if (Ub) {
          let bb = !1;
          if (Ub.needAlphaTestingForMesh(Tb) && Ub.getAlphaTestTexture() && (Ab.push("#define ALPHATEST"), Ab.push(`#define ALPHATEST_UV${Ub.getAlphaTestTexture().coordinatesIndex+1}`), bb = !0), (Ub.bumpTexture || Ub.normalTexture || Ub.geometryNormalTexture) && cb.c.BumpTextureEnabled) {
            const ab = Ub.bumpTexture || Ub.normalTexture || Ub.geometryNormalTexture;
            Ab.push("#define BUMP"), Ab.push(`#define BUMP_UV${ab.coordinatesIndex+1}`), bb = !0
          }
          if (this._enableReflectivity) {
            let ab = !1;
            if ("PBRMetallicRoughnessMaterial" === Ub.getClassName()) Ub.metallicRoughnessTexture && (Ab.push("#define ORMTEXTURE"), Ab.push(`#define REFLECTIVITY_UV${Ub.metallicRoughnessTexture.coordinatesIndex+1}`), Ab.push("#define METALLICWORKFLOW"), bb = !0, ab = !0), null != Ub.metallic && (Ab.push("#define METALLIC"), Ab.push("#define METALLICWORKFLOW"), ab = !0), null != Ub.roughness && (Ab.push("#define ROUGHNESS"), Ab.push("#define METALLICWORKFLOW"), ab = !0), ab && (Ub.baseTexture && (Ab.push("#define ALBEDOTEXTURE"), Ab.push(`#define ALBEDO_UV${Ub.baseTexture.coordinatesIndex+1}`), Ub.baseTexture.gammaSpace && Ab.push("#define GAMMAALBEDO"), bb = !0), Ub.baseColor && Ab.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === Ub.getClassName()) Ub.specularGlossinessTexture ? (Ab.push("#define SPECULARGLOSSINESSTEXTURE"), Ab.push(`#define REFLECTIVITY_UV${Ub.specularGlossinessTexture.coordinatesIndex+1}`), bb = !0, Ub.specularGlossinessTexture.gammaSpace && Ab.push("#define GAMMAREFLECTIVITYTEXTURE")) : Ub.specularColor && Ab.push("#define REFLECTIVITYCOLOR"), null != Ub.glossiness && Ab.push("#define GLOSSINESS");
            else if ("PBRMaterial" === Ub.getClassName()) Ub.metallicTexture && (Ab.push("#define ORMTEXTURE"), Ab.push(`#define REFLECTIVITY_UV${Ub.metallicTexture.coordinatesIndex+1}`), Ab.push("#define METALLICWORKFLOW"), bb = !0, ab = !0), null != Ub.metallic && (Ab.push("#define METALLIC"), Ab.push("#define METALLICWORKFLOW"), ab = !0), null != Ub.roughness && (Ab.push("#define ROUGHNESS"), Ab.push("#define METALLICWORKFLOW"), ab = !0), ab ? (Ub.albedoTexture && (Ab.push("#define ALBEDOTEXTURE"), Ab.push(`#define ALBEDO_UV${Ub.albedoTexture.coordinatesIndex+1}`), Ub.albedoTexture.gammaSpace && Ab.push("#define GAMMAALBEDO"), bb = !0), Ub.albedoColor && Ab.push("#define ALBEDOCOLOR")) : (Ub.reflectivityTexture ? (Ab.push("#define SPECULARGLOSSINESSTEXTURE"), Ab.push(`#define REFLECTIVITY_UV${Ub.reflectivityTexture.coordinatesIndex+1}`), Ub.reflectivityTexture.gammaSpace && Ab.push("#define GAMMAREFLECTIVITYTEXTURE"), bb = !0) : Ub.reflectivityColor && Ab.push("#define REFLECTIVITYCOLOR"), null != Ub.microSurface && Ab.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === Ub.getClassName()) Ub.specularTexture && (Ab.push("#define REFLECTIVITYTEXTURE"), Ab.push(`#define REFLECTIVITY_UV${Ub.specularTexture.coordinatesIndex+1}`), Ub.specularTexture.gammaSpace && Ab.push("#define GAMMAREFLECTIVITYTEXTURE"), bb = !0), Ub.specularColor && Ab.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === Ub.getClassName()) {
              const ab = Ub;
              Ab.push("#define METALLIC"), Ab.push("#define ROUGHNESS"), ab._useRoughnessFromMetallicTextureGreen && ab.baseMetalnessTexture ? (Ab.push("#define ORMTEXTURE"), Ab.push(`#define REFLECTIVITY_UV${ab.baseMetalnessTexture.coordinatesIndex+1}`), bb = !0) : ab.baseMetalnessTexture ? (Ab.push("#define METALLIC_TEXTURE"), Ab.push(`#define METALLIC_UV${ab.baseMetalnessTexture.coordinatesIndex+1}`), bb = !0) : ab.specularRoughnessTexture && (Ab.push("#define ROUGHNESS_TEXTURE"), Ab.push(`#define ROUGHNESS_UV${ab.specularRoughnessTexture.coordinatesIndex+1}`), bb = !0), ab.baseColorTexture && (Ab.push("#define ALBEDOTEXTURE"), Ab.push(`#define ALBEDO_UV${ab.baseColorTexture.coordinatesIndex+1}`), ab.baseColorTexture.gammaSpace && Ab.push("#define GAMMAALBEDO"), bb = !0), ab.baseColor && Ab.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Ab.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === Ub.getClassName())) {
            const ab = Ub;
            ab.subsurfaceWeight > 0 && ab.subsurfaceWeightTexture && (Ab.push("#define SUBSURFACE_WEIGHT"), Ab.push(`#define SUBSURFACEWEIGHT_UV${ab.subsurfaceWeightTexture.coordinatesIndex+1}`), bb = !0), ab.transmissionWeight > 0 && ab.transmissionWeightTexture && (Ab.push("#define TRANSMISSION_WEIGHT"), Ab.push(`#define TRANSMISSIONWEIGHT_UV${ab.transmissionWeightTexture.coordinatesIndex+1}`), bb = !0)
          }
          bb && (Ab.push("#define NEED_UV"), Tb.isVerticesDataPresent(Kb.m.UVKind) && (Mb.push(Kb.m.UVKind), Ab.push("#define UV1"), Eb = !0), Tb.isVerticesDataPresent(Kb.m.UV2Kind) && (Mb.push(Kb.m.UV2Kind), Ab.push("#define UV2"), Yb = !0))
        }
        if (this._enableDepth && (Ab.push("#define DEPTH"), Ab.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Ab.push("#define NORMAL"), Ab.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Ab.push("#define POSITION"), Ab.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Ab.push("#define VELOCITY"), Ab.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Tb) && Ab.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Ab.push("#define VELOCITY_LINEAR"), Ab.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Tb) && Ab.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Ab.push("#define REFLECTIVITY"), Ab.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Ab.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Ab.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Ab.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Ab.push("#define IRRADIANCE");
          const bb = this._scene;
          if (bb.environmentTexture) {
            const ab = {};
            let Mb = !1,
              Tb = 0;
            "OpenPBRMaterial" !== Ub.getClassName() && "StandardMaterial" !== Ub.getClassName() && "PBRMetallicRoughnessMaterial" !== Ub.getClassName() && "PBRSpecularGlossinessMaterial" !== Ub.getClassName() && "PBRMaterial" !== Ub.getClassName() || (Mb = !!Ub.realtimeFiltering, Tb = Ub.realtimeFilteringQuality || 0), (0, nb.W)(bb, bb.environmentTexture, ab, Mb, Tb, !0);
            for (const bb in ab) ab[bb] && Ab.push("#define " + bb);
            ab.USEIRRADIANCEMAP || Ab.push("#define SPHERICAL_HARMONICS");
            const Eb = bb.postProcessRenderPipelineManager.supportedPipelines.find((bb => "IBLShadowsRenderPipeline" === bb.getClassName()));
            if (Eb) {
              const bb = Eb;
              bb._getAccumulatedTexture() && (Ab.push("#define IBL_SHADOW_TEXTURE"), bb.coloredShadows && Ab.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Ab.push("#define OBJECT_ID"), Ab.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Ab.push("#define MESH_BLEND_TAG"), Ab.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Ab.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Ab.push("#define ENCODE_NORMAL"), Tb.useBones && Tb.computeBonesUsingShaders && Tb.skeleton ? (Mb.push(Kb.m.MatricesIndicesKind), Mb.push(Kb.m.MatricesWeightsKind), Tb.numBoneInfluencers > 4 && (Mb.push(Kb.m.MatricesIndicesExtraKind), Mb.push(Kb.m.MatricesWeightsExtraKind)), Ab.push("#define NUM_BONE_INFLUENCERS " + Tb.numBoneInfluencers), Ab.push("#define BONETEXTURE " + Tb.skeleton.isUsingTextureForMatrices), Ab.push("#define BonesPerMesh " + (Tb.skeleton.bones.length + 1))) : (Ab.push("#define NUM_BONE_INFLUENCERS 0"), Ab.push("#define BONETEXTURE false"), Ab.push("#define BonesPerMesh 0"));
        const Bb = Tb.morphTargetManager ? (0, nb.N)(Tb.morphTargetManager, Ab, Mb, Tb, !0, !0, !1, Eb, Yb, !1) : 0;
        ab && (Ab.push("#define INSTANCES"), (0, nb.sb)(Mb, this._enableVelocity || this._enableVelocityLinear), bb.getRenderingMesh().hasThinInstances && Ab.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Ab.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Ab.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, va.k)(Ub, this._scene, Ab);
        const eb = this._scene.vj(),
          vb = bb._getDrawWrapper(void 0, !0),
          Lb = vb.defines,
          Pb = Ab.join("\n");
        return Lb !== Pb && vb.setEffect(eb.createEffect("geometry", {
          attributes: Mb,
          uniformsNames: Ka,
          samplers: ra,
          defines: Pb,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: Bb
          },
          shaderLanguage: this.shaderLanguage
        }, eb), Pb), vb.effect.isReady()
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
          this._scene.vj().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.ZR.vj()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.ZR.vj().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const bb = [],
          ab = [];
        let Ub = 0;
        return this._enableDepth && (this._depthIndex = Ub, Ub++, bb.push("gBuffer_Depth"), ab.push(this._textureTypesAndFormats[oa.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = Ub, Ub++, bb.push("gBuffer_Normal"), ab.push(this._textureTypesAndFormats[oa.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = Ub, Ub++, bb.push("gBuffer_Position"), ab.push(this._textureTypesAndFormats[oa.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = Ub, Ub++, bb.push("gBuffer_Velocity"), ab.push(this._textureTypesAndFormats[oa.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = Ub, Ub++, bb.push("gBuffer_VelocityLinear"), ab.push(this._textureTypesAndFormats[oa.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = Ub, Ub++, bb.push("gBuffer_Reflectivity"), ab.push(this._textureTypesAndFormats[oa.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = Ub, Ub++, bb.push("gBuffer_ScreenspaceDepth"), ab.push(this._textureTypesAndFormats[oa.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = Ub, Ub++, bb.push("gBuffer_Irradiance"), ab.push(this._textureTypesAndFormats[oa.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = Ub, Ub++, bb.push("gBuffer_ObjectId"), ab.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = Ub, Ub++, bb.push("gBuffer_MeshBlendTag"), ab.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [Ub, bb, ab]
      }
      _createRenderTargets() {
        const bb = this._scene.vj(),
          [ab, Ub, Ab] = this._assignRenderTargetIndices(),
          Mb = Math.min(bb.getCaps().maxDrawBuffers ?? 1, 8);
        if (bb.getCaps().drawBuffersExtension && ab > Mb) throw new Error(`GeometryBufferRenderer: ${ab} color attachments were requested, but this engine supports at most ${Mb}`);
        let Eb = 0;
        bb._caps.textureFloat && bb._caps.textureFloatLinearFiltering ? Eb = 1 : bb._caps.textureHalfFloat && bb._caps.textureHalfFloatLinearFiltering && (Eb = 2);
        const Yb = this._getRenderTargetDimensions(),
          Bb = [],
          eb = [],
          vb = [];
        for (const Tb of Ab) Tb ? (Bb.push(Tb.textureType), eb.push(Tb.textureFormat), vb.push(Tb.samplingMode ?? 2)) : (Bb.push(Eb), eb.push(5), vb.push(2));
        if (this._normalsAreUnsigned = 11 === Bb[oa.NORMAL_TEXTURE_TYPE] || 13 === Bb[oa.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new ha("gBuffer", Yb, ab, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: Bb,
            formats: eb,
            samplingModes: vb,
            depthTextureFormat: this._depthFormat
          }, Ub.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = Ib.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = Ib.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const Lb = [!0],
          Pb = [!1],
          Xb = [!0];
        for (let Tb = 1; Tb < ab; ++Tb) Lb.push(!0), Xb.push(!1), Pb.push(!0);
        const jb = bb.buildTextureLayout(Lb),
          Rb = bb.buildTextureLayout(Pb),
          kb = bb.buildTextureLayout(Xb);
        this._multiRenderTarget.onClearObservable.add((bb => {
          const ab = this.useSpecificClearForDepthTexture ? Rb : jb;
          bb.clearAttachments(this._clearColor, ab, !0, !0, !0), this.useSpecificClearForDepthTexture && bb.clearAttachments(this._clearDepthColor, kb, !0, !1, !1), bb.bindAttachments(jb)
        })), this._resizeObserver = bb.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const yb = bb => {
          const ab = bb.getRenderingMesh(),
            Ub = bb.getEffectiveMesh(),
            Ab = this._scene,
            Mb = Ab.vj(),
            Eb = bb.Rj();
          if (!Eb) return;
          if (Ub._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[Ub.uniqueId] && (this._previousTransformationMatrices[Ub.uniqueId] = {
              lL: rb.b.Identity(),
              viewProjection: Ab.getTransformMatrix()
            }, ab.skeleton)) {
            const bb = ab.skeleton.getTransformMatrices(ab);
            this._previousBonesTransformationMatrices[ab.uniqueId] = this._copyBonesTransformationMatrices(bb, new Float32Array(bb.length))
          }
          const Yb = ab._getInstancesRenderList(bb._id, !!bb.getReplacementMesh());
          if (Yb.mustReturn) return;
          const Bb = Mb.getCaps().instancedArrays && (null !== Yb.visibleInstances[bb._id] || ab.hasThinInstances),
            eb = Ub.getWorldMatrix();
          if (this.isReady(bb, Bb)) {
            const vb = bb._getDrawWrapper();
            if (!vb) return;
            const Lb = vb.effect;
            let Pb;
            Mb.enableEffect(vb), Bb || ab._bind(bb, Lb, Eb.fillMode), this._useUbo ? ((0, nb.w)(Lb, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (Lb.setMatrix("viewProjection", Ab.getTransformMatrix()), Lb.setMatrix("view", Ab.getViewMatrix()), this._scene.bindEyePosition(Lb, "vEyePosition"));
            if (ab._instanceDataStorage.isFrozen || !Eb.backFaceCulling && null === Eb.sideOrientation) Pb = ab._effectiveSideOrientation;
            else {
              const bb = Ub._getWorldMatrixDeterminant();
              Pb = Eb._getEffectiveOrientation(ab), bb < 0 && (Pb = Pb === Tb.d.ClockWiseSideOrientation ? Tb.d.CounterClockWiseSideOrientation : Tb.d.ClockWiseSideOrientation)
            }
            if (Eb._preBind(vb, Pb), Eb.needAlphaTestingForMesh(Ub)) {
              const bb = Eb.getAlphaTestTexture();
              bb && (Lb.setTexture("diffuseSampler", bb), Lb.setMatrix("diffuseMatrix", bb.getTextureMatrix()), Lb.setFloat("alphaCutOff", Eb.alphaCutOff ?? .4))
            }
            if ((Eb.bumpTexture || Eb.normalTexture || Eb.geometryNormalTexture) && Ab.vj().getCaps().standardDerivatives && cb.c.BumpTextureEnabled) {
              const bb = Eb.bumpTexture || Eb.normalTexture || Eb.geometryNormalTexture;
              Lb.setFloat3("vBumpInfos", bb.coordinatesIndex, 1 / bb.level, Eb.parallaxScaleBias), Lb.setMatrix("bumpMatrix", bb.getTextureMatrix()), Lb.setTexture("bumpSampler", bb), Lb.setFloat2("vTangentSpaceParams", Eb.invertNormalMapX ? -1 : 1, Eb.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === Eb.getClassName()) null !== Eb.metallicRoughnessTexture && (Lb.setTexture("reflectivitySampler", Eb.metallicRoughnessTexture), Lb.setMatrix("reflectivityMatrix", Eb.metallicRoughnessTexture.getTextureMatrix())), null !== Eb.metallic && Lb.setFloat("metallic", Eb.metallic), null !== Eb.roughness && Lb.setFloat("glossiness", 1 - Eb.roughness), null !== Eb.baseTexture && (Lb.setTexture("albedoSampler", Eb.baseTexture), Lb.setMatrix("albedoMatrix", Eb.baseTexture.getTextureMatrix())), null !== Eb.baseColor && Lb.setColor3("albedoColor", Eb.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === Eb.getClassName()) null !== Eb.specularGlossinessTexture ? (Lb.setTexture("reflectivitySampler", Eb.specularGlossinessTexture), Lb.setMatrix("reflectivityMatrix", Eb.specularGlossinessTexture.getTextureMatrix())) : null !== Eb.specularColor && Lb.setColor3("reflectivityColor", Eb.specularColor), null !== Eb.glossiness && Lb.setFloat("glossiness", Eb.glossiness);
            else if ("PBRMaterial" === Eb.getClassName()) null !== Eb.metallicTexture && (Lb.setTexture("reflectivitySampler", Eb.metallicTexture), Lb.setMatrix("reflectivityMatrix", Eb.metallicTexture.getTextureMatrix())), null !== Eb.metallic && Lb.setFloat("metallic", Eb.metallic), null !== Eb.roughness && Lb.setFloat("glossiness", 1 - Eb.roughness), null !== Eb.roughness || null !== Eb.metallic || null !== Eb.metallicTexture ? (null !== Eb.albedoTexture && (Lb.setTexture("albedoSampler", Eb.albedoTexture), Lb.setMatrix("albedoMatrix", Eb.albedoTexture.getTextureMatrix())), null !== Eb.albedoColor && Lb.setColor3("albedoColor", Eb.albedoColor)) : (null !== Eb.reflectivityTexture ? (Lb.setTexture("reflectivitySampler", Eb.reflectivityTexture), Lb.setMatrix("reflectivityMatrix", Eb.reflectivityTexture.getTextureMatrix())) : null !== Eb.reflectivityColor && Lb.setColor3("reflectivityColor", Eb.reflectivityColor), null !== Eb.microSurface && Lb.setFloat("glossiness", Eb.microSurface));
            else if ("StandardMaterial" === Eb.getClassName()) null !== Eb.specularTexture && (Lb.setTexture("reflectivitySampler", Eb.specularTexture), Lb.setMatrix("reflectivityMatrix", Eb.specularTexture.getTextureMatrix())), null !== Eb.specularColor && Lb.setColor3("reflectivityColor", Eb.specularColor);
            else if ("OpenPBRMaterial" === Eb.getClassName()) {
              const bb = Eb;
              bb._useRoughnessFromMetallicTextureGreen && bb.baseMetalnessTexture ? (Lb.setTexture("reflectivitySampler", bb.baseMetalnessTexture), Lb.setMatrix("reflectivityMatrix", bb.baseMetalnessTexture.getTextureMatrix())) : bb.baseMetalnessTexture ? (Lb.setTexture("metallicSampler", bb.baseMetalnessTexture), Lb.setMatrix("metallicMatrix", bb.baseMetalnessTexture.getTextureMatrix())) : bb.specularRoughnessTexture && (Lb.setTexture("roughnessSampler", bb.specularRoughnessTexture), Lb.setMatrix("roughnessMatrix", bb.specularRoughnessTexture.getTextureMatrix())), Lb.setFloat("metallic", bb.baseMetalness), Lb.setFloat("glossiness", 1 - bb.specularRoughness), null !== bb.baseColorTexture && (Lb.setTexture("albedoSampler", bb.baseColorTexture), Lb.setMatrix("albedoMatrix", bb.baseColorTexture.getTextureMatrix())), null !== bb.baseColor && Lb.setColor3("albedoColor", bb.baseColor)
            }
            if (this._enableIrradiance && Ab.environmentTexture) {
              const bb = Ab.environmentTexture,
                ab = Ab.postProcessRenderPipelineManager.supportedPipelines.find((bb => "IBLShadowsRenderPipeline" === bb.getClassName()));
              if (ab) {
                const bb = ab._getAccumulatedTexture();
                bb && (Lb.setTexture("iblShadowSampler", bb), Lb.setFloat2("shadowTextureSize", bb.getSize().width, bb.getSize().height))
              }
              if (Lb.setMatrix("reflectionMatrix", bb.getReflectionTextureMatrix()), Lb.setFloat2("vReflectionInfos", bb.level * Ab.iblIntensity, 0), Lb.setTexture("reflectionSampler", bb), bb.irradianceTexture && (Lb.setTexture("irradianceSampler", bb.irradianceTexture), bb.irradianceTexture._dominantDirection && Lb.setVector3("vReflectionDominantDirection", bb.irradianceTexture._dominantDirection)), bb.sphericalPolynomial) {
                const ab = bb.sphericalPolynomial;
                if (ab.preScaledHarmonics) {
                  const bb = ab.preScaledHarmonics;
                  Lb.setVector3("vSphericalL00", bb.l00), Lb.setVector3("vSphericalL1_1", bb.l1_1), Lb.setVector3("vSphericalL10", bb.l10), Lb.setVector3("vSphericalL11", bb.l11), Lb.setVector3("vSphericalL2_2", bb.l2_2), Lb.setVector3("vSphericalL2_1", bb.l2_1), Lb.setVector3("vSphericalL20", bb.l20), Lb.setVector3("vSphericalL21", bb.l21), Lb.setVector3("vSphericalL22", bb.l22)
                } else Lb.setFloat3("vSphericalX", ab.x.x, ab.x.y, ab.x.z), Lb.setFloat3("vSphericalY", ab.y.x, ab.y.y, ab.y.z), Lb.setFloat3("vSphericalZ", ab.z.x, ab.z.y, ab.z.z), Lb.setFloat3("vSphericalXX_ZZ", ab.xx.x - ab.zz.x, ab.xx.y - ab.zz.y, ab.xx.z - ab.zz.z), Lb.setFloat3("vSphericalYY_ZZ", ab.yy.x - ab.zz.x, ab.yy.y - ab.zz.y, ab.yy.z - ab.zz.z), Lb.setFloat3("vSphericalZZ", ab.zz.x, ab.zz.y, ab.zz.z), Lb.setFloat3("vSphericalXY", ab.xy.x, ab.xy.y, ab.xy.z), Lb.setFloat3("vSphericalYZ", ab.yz.x, ab.yz.y, ab.yz.z), Lb.setFloat3("vSphericalZX", ab.zx.x, ab.zx.y, ab.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === Eb.getClassName()) {
                const bb = Eb;
                Lb.setFloat("vSubsurfaceWeight", bb.subsurfaceWeight), bb.subsurfaceWeightTexture && (Lb.setTexture("subsurfaceWeightSampler", bb.subsurfaceWeightTexture), Lb.setMatrix("subsurfaceWeightMatrix", bb.subsurfaceWeightTexture.getTextureMatrix())), Lb.setFloat("vTransmissionWeight", bb.transmissionWeight), bb.transmissionWeightTexture && (Lb.setTexture("transmissionWeightSampler", bb.transmissionWeightTexture), Lb.setMatrix("transmissionWeightMatrix", bb.transmissionWeightTexture.getTextureMatrix())), Lb.setFloat("vTransmissionScatterAnisotropy", bb.transmissionScatterAnisotropy), Lb.setFloat("vSubsurfaceScatterAnisotropy", bb.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, va.f)(Lb, Eb, this._scene), ab.useBones && ab.computeBonesUsingShaders && ab.skeleton) {
              const bb = ab.skeleton;
              if (bb.isUsingTextureForMatrices && Lb.getUniformIndex("boneTextureInfo") > -1) {
                const Ub = bb.getTransformMatrixTexture(ab);
                Lb.setTexture("boneSampler", Ub), Lb.setFloat2("boneTextureInfo", bb._textureWidth, bb._textureHeight)
              } else Lb.setMatrices("mBones", ab.skeleton.getTransformMatrices(ab));
              (this._enableVelocity || this._enableVelocityLinear) && Lb.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[ab.uniqueId])
            }
            if ((0, nb.v)(ab, Lb), ab.morphTargetManager && ab.morphTargetManager.isUsingTextureForTargets && ab.morphTargetManager._bind(Lb), (this._enableVelocity || this._enableVelocityLinear) && (Lb.setMatrix("previousWorld", this._previousTransformationMatrices[Ub.uniqueId].lL), Lb.setMatrix("previousViewProjection", this._previousTransformationMatrices[Ub.uniqueId].viewProjection)), this._enableObjectId) {
              let bb = ab.uniqueId;
              if (this.objectIdProvider) bb = (0, Xa.k)(ab, this.objectIdProvider);
              else if (bb > 16777215) throw new Error(`Invalid geometry object ID ${bb} for mesh "${ab.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              Lb.setFloat("objectId", bb)
            }
            if (this._enableMeshBlendTag) {
              const bb = this.meshBlendTagProvider ? (0, Xa.g)(ab, this.meshBlendTagProvider) : ab.meshBlendingTag;
              Lb.setInt("meshBlendTag", bb)
            }
            Bb && ab.hasThinInstances && Lb.setMatrix("world", eb), ab._processRendering(Ub, bb, Lb, Eb.fillMode, Yb, Bb, ((bb, ab) => {
              bb || Lb.setMatrix("world", ab)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[Ub.uniqueId].lL = eb.clone(), this._previousTransformationMatrices[Ub.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), ab.skeleton && this._copyBonesTransformationMatrices(ab.skeleton.getTransformMatrices(ab), this._previousBonesTransformationMatrices[Ub.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (ab, Ub, Ab) => {
          if ((Ab || 0 === Ub) && ab.mD)
            for (let Mb = 0; Mb < ab.mD.length; ++Mb) {
              const Ub = ab.mD[Mb],
                Ab = Ub.Rj(),
                Tb = Ub.getRenderingMesh();
              if (!Ab) continue;
              const Eb = Tb._getInstancesRenderList(Ub._id, !!Ub.getReplacementMesh()),
                Yb = bb.getCaps().instancedArrays && (null !== Eb.visibleInstances[Ub._id] || Tb.hasThinInstances);
              if (!this.isReady(Ub, Yb)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (ab, Ub, Ab, Mb) => {
          let Tb;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.vj().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Mb.length) {
            for (bb.setColorWrite(!1), Tb = 0; Tb < Mb.length; Tb++) yb(Mb.data[Tb]);
            bb.setColorWrite(!0)
          }
          for (Tb = 0; Tb < ab.length; Tb++) yb(ab.data[Tb]);
          for (bb.setDepthWrite(!1), Tb = 0; Tb < Ub.length; Tb++) yb(Ub.data[Tb]);
          if (this.renderTransparentMeshes)
            for (Tb = 0; Tb < Ab.length; Tb++) yb(Ab.data[Tb]);
          bb.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const bb = this._scene.vj();
        return {
          width: Math.max(1, Math.floor(bb.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(bb.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(bb, ab) {
        for (let Ub = 0; Ub < bb.length; Ub++) ab[Ub] = bb[Ub];
        return ab
      }
    }
    oa.ForceGLSL = !1, oa.DEPTH_TEXTURE_TYPE = 0, oa.NORMAL_TEXTURE_TYPE = 1, oa.POSITION_TEXTURE_TYPE = 2, oa.VELOCITY_TEXTURE_TYPE = 3, oa.REFLECTIVITY_TEXTURE_TYPE = 4, oa.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, oa.VELOCITY_LINEAR_TEXTURE_TYPE = 6, oa.IRRADIANCE_TEXTURE_TYPE = 7, oa.OBJECT_ID_TEXTURE_TYPE = 8, oa.MESH_BLEND_TAG_TEXTURE_TYPE = 9, oa._SceneComponentInitialization = bb => {
      throw (0, ya.l)("GeometryBufferRendererSceneComponent")
    };
    var la = Ub(36447);
    const ta = {
      effect: null,
      subMesh: null
    };

    function wa(bb) {
      if ("number" === typeof bb) return 1;
      if (bb instanceof rb.l) return 2;
      if (bb instanceof rb.m || bb instanceof gb.c) return 3;
      if (bb instanceof rb.o || bb instanceof gb.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class sa {
      populateVectorFromLinkedProperties(bb) {
        const ab = wa(bb);
        for (const Ub in this.linkedProperties) {
          const bb = this.linkedProperties[Ub],
            Ab = bb.numComponents;
          if (ab < Ab || bb.targetUniformComponentOffset > ab - Ab) return void(1 == Ab ? Wb.e.Error(`Float property ${bb.name} has an offset that is too large.`) : Wb.e.Error(`Vector${Ab} property ${bb.name} won't fit in Vector${ab} or has an offset that is too large.`));
          "number" === typeof bb.value ? sa._tmpArray[bb.targetUniformComponentOffset] = bb.value : bb.value.toArray(sa._tmpArray, bb.targetUniformComponentOffset)
        }
        bb.Zab(sa._tmpArray)
      }
      constructor(bb, ab) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = bb, this.numComponents = ab
      }
    }
    sa._tmpArray = [0, 0, 0, 0];
    class ga {
      constructor(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Tb = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = bb, this.targetUniformName = Ub, this.defaultValue = ab, this.value = ab, this.targetUniformComponentNum = Ab, this.targetUniformComponentOffset = Mb, this.requiredDefine = Tb
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : wa(this.defaultValue)
      }
    }
    class Ca {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(bb, ab, Ub) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = bb, this.samplerPrefix = ab, this.textureDefine = Ub
      }
    }
    class Va extends((0, Ra.c)((0, ja.b)(ob.d))) {}
    class Oa extends(function(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(Va)) {}
    class ca extends((0, Cb.i)(Oa)) {
      constructor(bb) {
        super(bb), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class Ja extends((0, ka.d)(Ob.d)) {}
    let na = (() => {
        var bb, ab, Ab, Mb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb, yb, Zb, Db, zb, xb, ib, fb, mb, db, Fb, hb, Gb, ub, ob, lb, tb, wb, Cb, Ob, Sb, ba, aa, Ua, Aa, Ma, Ta, Ea, Ya, Ba, ea, ja, Ra, ka, ya, Za, Da, za, xa, ia, pa, Na, Wa, Ha, Ia, da, Fa, ha, Ga, Qa, qa, ua, ra, Ka, la, wa, Va, Oa, na, Sa, bU, aU, UU, AU, MU, TU, EU, YU, BU, eU, vU, LU, PU, XU, jU, RU, kU, yU, ZU, DU, zU, xU, iU, fU, mU, pU, NU, WU, HU;
        let IU, dU, FU, hU, GU, QU, qU, uU, rU, KU, oU, lU, tU, wU, sU, gU, CU, VU, OU, cU, JU, nU, SU, bA, aA, UA, AA, MA, TA, EA, YA, BA, eA, vA, LA, PA, XA, jA, RA, kA, yA, ZA, DA, zA, xA, iA, fA, mA, pA, NA, WA, HA, IA, dA, FA, hA, GA, QA, qA, uA, rA, KA, oA, lA, tA, wA, sA, gA, CA, VA, OA, cA, JA, nA, SA, bM, aM, UM, AM, MM, TM, EM, YM, BM, eM, vM, LM, PM, XM, jM, RM, kM, yM, ZM, DM, zM, xM, iM, fM, mM, pM, NM, WM, HM, IM, dM = Ja,
          FM = [],
          hM = [],
          GM = [],
          QM = [],
          qM = [],
          uM = [],
          rM = [],
          KM = [],
          oM = [],
          lM = [],
          tM = [],
          wM = [],
          sM = [],
          gM = [],
          CM = [],
          VM = [],
          OM = [],
          cM = [],
          JM = [],
          nM = [],
          SM = [],
          bT = [],
          aT = [],
          UT = [],
          AT = [],
          MT = [],
          TT = [],
          ET = [],
          YT = [],
          BT = [],
          eT = [],
          vT = [],
          LT = [],
          PT = [],
          XT = [],
          jT = [],
          RT = [],
          kT = [],
          yT = [],
          ZT = [],
          DT = [],
          zT = [],
          xT = [],
          iT = [],
          fT = [],
          mT = [],
          pT = [],
          NT = [],
          WT = [],
          HT = [],
          IT = [],
          dT = [],
          FT = [],
          hT = [],
          GT = [],
          QT = [],
          qT = [],
          uT = [],
          rT = [],
          KT = [],
          oT = [],
          lT = [],
          tT = [],
          wT = [],
          sT = [],
          gT = [],
          CT = [],
          VT = [],
          OT = [],
          cT = [],
          JT = [],
          nT = [],
          ST = [],
          bE = [],
          aE = [],
          UE = [],
          AE = [],
          ME = [],
          TE = [],
          EE = [],
          YE = [],
          BE = [],
          eE = [],
          vE = [],
          LE = [],
          PE = [],
          XE = [],
          jE = [],
          RE = [],
          kE = [],
          yE = [],
          ZE = [],
          DE = [],
          zE = [],
          xE = [],
          iE = [],
          fE = [],
          mE = [],
          pE = [],
          NE = [],
          WE = [],
          HE = [],
          IE = [],
          dE = [],
          FE = [],
          hE = [],
          GE = [],
          QE = [],
          qE = [],
          uE = [],
          rE = [],
          KE = [],
          oE = [],
          lE = [],
          tE = [],
          wE = [],
          sE = [],
          gE = [],
          CE = [],
          VE = [],
          OE = [],
          cE = [],
          JE = [],
          nE = [],
          SE = [],
          bY = [],
          aY = [],
          UY = [],
          AY = [],
          MY = [],
          TY = [],
          EY = [],
          YY = [],
          BY = [],
          eY = [],
          vY = [],
          LY = [],
          PY = [],
          XY = [],
          jY = [],
          RY = [],
          kY = [],
          yY = [],
          ZY = [],
          DY = [],
          zY = [],
          xY = [],
          iY = [],
          fY = [],
          mY = [],
          pY = [],
          NY = [],
          WY = [],
          HY = [],
          IY = [],
          dY = [],
          FY = [],
          hY = [],
          GY = [],
          QY = [],
          qY = [],
          uY = [],
          rY = [],
          KY = [],
          oY = [],
          lY = [],
          tY = [],
          wY = [],
          sY = [],
          gY = [],
          CY = [],
          VY = [],
          OY = [],
          cY = [],
          JY = [],
          nY = [],
          SY = [],
          bB = [],
          aB = [],
          UB = [],
          AB = [],
          MB = [],
          TB = [],
          EB = [],
          YB = [],
          BB = [],
          eB = [],
          vB = [],
          LB = [],
          PB = [],
          XB = [],
          jB = [],
          RB = [],
          kB = [],
          yB = [],
          ZB = [],
          DB = [],
          zB = [],
          xB = [],
          iB = [],
          fB = [],
          mB = [],
          pB = [],
          NB = [],
          WB = [];
        return bb = class extends dM {
          get baseWeight() {
            return (0, pb.c)(this, ab, "f")
          }
          set baseWeight(bb) {
            (0, pb.e)(this, ab, bb, "f")
          }
          get baseWeightTexture() {
            return (0, pb.c)(this, Ab, "f")
          }
          set baseWeightTexture(bb) {
            (0, pb.e)(this, Ab, bb, "f")
          }
          get baseColor() {
            return (0, pb.c)(this, Mb, "f")
          }
          set baseColor(bb) {
            (0, pb.e)(this, Mb, bb, "f")
          }
          get baseColorTexture() {
            return (0, pb.c)(this, Eb, "f")
          }
          set baseColorTexture(bb) {
            (0, pb.e)(this, Eb, bb, "f")
          }
          get baseDiffuseRoughness() {
            return (0, pb.c)(this, Yb, "f")
          }
          set baseDiffuseRoughness(bb) {
            (0, pb.e)(this, Yb, bb, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, pb.c)(this, Bb, "f")
          }
          set baseDiffuseRoughnessTexture(bb) {
            (0, pb.e)(this, Bb, bb, "f")
          }
          get baseMetalness() {
            return (0, pb.c)(this, eb, "f")
          }
          set baseMetalness(bb) {
            (0, pb.e)(this, eb, bb, "f")
          }
          get baseMetalnessTexture() {
            return (0, pb.c)(this, vb, "f")
          }
          set baseMetalnessTexture(bb) {
            (0, pb.e)(this, vb, bb, "f")
          }
          get specularWeight() {
            return (0, pb.c)(this, Lb, "f")
          }
          set specularWeight(bb) {
            (0, pb.e)(this, Lb, bb, "f")
          }
          get specularWeightTexture() {
            return (0, pb.c)(this, Pb, "f")
          }
          set specularWeightTexture(bb) {
            (0, pb.e)(this, Pb, bb, "f")
          }
          get specularColor() {
            return (0, pb.c)(this, Xb, "f")
          }
          set specularColor(bb) {
            (0, pb.e)(this, Xb, bb, "f")
          }
          get specularColorTexture() {
            return (0, pb.c)(this, jb, "f")
          }
          set specularColorTexture(bb) {
            (0, pb.e)(this, jb, bb, "f")
          }
          get specularRoughness() {
            return (0, pb.c)(this, Rb, "f")
          }
          set specularRoughness(bb) {
            (0, pb.e)(this, Rb, bb, "f")
          }
          get specularRoughnessTexture() {
            return (0, pb.c)(this, kb, "f")
          }
          set specularRoughnessTexture(bb) {
            (0, pb.e)(this, kb, bb, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, pb.c)(this, yb, "f")
          }
          set specularRoughnessAnisotropy(bb) {
            (0, pb.e)(this, yb, bb, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, pb.c)(this, Zb, "f")
          }
          set specularRoughnessAnisotropyTexture(bb) {
            (0, pb.e)(this, Zb, bb, "f")
          }
          get specularIor() {
            return (0, pb.c)(this, Db, "f")
          }
          set specularIor(bb) {
            (0, pb.e)(this, Db, bb, "f")
          }
          get transmissionWeight() {
            return (0, pb.c)(this, zb, "f")
          }
          set transmissionWeight(bb) {
            (0, pb.e)(this, zb, bb, "f")
          }
          get transmissionWeightTexture() {
            return (0, pb.c)(this, xb, "f")
          }
          set transmissionWeightTexture(bb) {
            (0, pb.e)(this, xb, bb, "f")
          }
          get transmissionColor() {
            return (0, pb.c)(this, ib, "f")
          }
          set transmissionColor(bb) {
            (0, pb.e)(this, ib, bb, "f")
          }
          get transmissionColorTexture() {
            return (0, pb.c)(this, fb, "f")
          }
          set transmissionColorTexture(bb) {
            (0, pb.e)(this, fb, bb, "f")
          }
          get transmissionDepth() {
            return (0, pb.c)(this, mb, "f")
          }
          set transmissionDepth(bb) {
            (0, pb.e)(this, mb, bb, "f")
          }
          get transmissionDepthTexture() {
            return (0, pb.c)(this, db, "f")
          }
          set transmissionDepthTexture(bb) {
            (0, pb.e)(this, db, bb, "f")
          }
          get transmissionScatter() {
            return (0, pb.c)(this, Fb, "f")
          }
          set transmissionScatter(bb) {
            (0, pb.e)(this, Fb, bb, "f")
          }
          get transmissionScatterTexture() {
            return (0, pb.c)(this, hb, "f")
          }
          set transmissionScatterTexture(bb) {
            (0, pb.e)(this, hb, bb, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, pb.c)(this, Gb, "f")
          }
          set transmissionScatterAnisotropy(bb) {
            (0, pb.e)(this, Gb, bb, "f")
          }
          get transmissionDispersionScale() {
            return (0, pb.c)(this, ub, "f")
          }
          set transmissionDispersionScale(bb) {
            (0, pb.e)(this, ub, bb, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, pb.c)(this, ob, "f")
          }
          set transmissionDispersionScaleTexture(bb) {
            (0, pb.e)(this, ob, bb, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, pb.c)(this, lb, "f")
          }
          set transmissionDispersionAbbeNumber(bb) {
            (0, pb.e)(this, lb, bb, "f")
          }
          get subsurfaceWeight() {
            return (0, pb.c)(this, tb, "f")
          }
          set subsurfaceWeight(bb) {
            (0, pb.e)(this, tb, bb, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, pb.c)(this, wb, "f")
          }
          set subsurfaceWeightTexture(bb) {
            (0, pb.e)(this, wb, bb, "f")
          }
          get subsurfaceColor() {
            return (0, pb.c)(this, Cb, "f")
          }
          set subsurfaceColor(bb) {
            (0, pb.e)(this, Cb, bb, "f")
          }
          get subsurfaceColorTexture() {
            return (0, pb.c)(this, Ob, "f")
          }
          set subsurfaceColorTexture(bb) {
            (0, pb.e)(this, Ob, bb, "f")
          }
          get subsurfaceRadius() {
            return (0, pb.c)(this, Sb, "f")
          }
          set subsurfaceRadius(bb) {
            (0, pb.e)(this, Sb, bb, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, pb.c)(this, ba, "f")
          }
          set subsurfaceRadiusScale(bb) {
            (0, pb.e)(this, ba, bb, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, pb.c)(this, aa, "f")
          }
          set subsurfaceRadiusScaleTexture(bb) {
            (0, pb.e)(this, aa, bb, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, pb.c)(this, Ua, "f")
          }
          set subsurfaceScatterAnisotropy(bb) {
            (0, pb.e)(this, Ua, bb, "f")
          }
          get coatWeight() {
            return (0, pb.c)(this, Aa, "f")
          }
          set coatWeight(bb) {
            (0, pb.e)(this, Aa, bb, "f")
          }
          get coatWeightTexture() {
            return (0, pb.c)(this, Ma, "f")
          }
          set coatWeightTexture(bb) {
            (0, pb.e)(this, Ma, bb, "f")
          }
          get coatColor() {
            return (0, pb.c)(this, Ta, "f")
          }
          set coatColor(bb) {
            (0, pb.e)(this, Ta, bb, "f")
          }
          get coatColorTexture() {
            return (0, pb.c)(this, Ea, "f")
          }
          set coatColorTexture(bb) {
            (0, pb.e)(this, Ea, bb, "f")
          }
          get coatRoughness() {
            return (0, pb.c)(this, Ya, "f")
          }
          set coatRoughness(bb) {
            (0, pb.e)(this, Ya, bb, "f")
          }
          get coatRoughnessTexture() {
            return (0, pb.c)(this, Ba, "f")
          }
          set coatRoughnessTexture(bb) {
            (0, pb.e)(this, Ba, bb, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, pb.c)(this, ea, "f")
          }
          set coatRoughnessAnisotropy(bb) {
            (0, pb.e)(this, ea, bb, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, pb.c)(this, ja, "f")
          }
          set coatRoughnessAnisotropyTexture(bb) {
            (0, pb.e)(this, ja, bb, "f")
          }
          get coatIor() {
            return (0, pb.c)(this, Ra, "f")
          }
          set coatIor(bb) {
            (0, pb.e)(this, Ra, bb, "f")
          }
          get coatDarkening() {
            return (0, pb.c)(this, ka, "f")
          }
          set coatDarkening(bb) {
            (0, pb.e)(this, ka, bb, "f")
          }
          get coatDarkeningTexture() {
            return (0, pb.c)(this, ya, "f")
          }
          set coatDarkeningTexture(bb) {
            (0, pb.e)(this, ya, bb, "f")
          }
          get fuzzWeight() {
            return (0, pb.c)(this, Za, "f")
          }
          set fuzzWeight(bb) {
            (0, pb.e)(this, Za, bb, "f")
          }
          get fuzzWeightTexture() {
            return (0, pb.c)(this, Da, "f")
          }
          set fuzzWeightTexture(bb) {
            (0, pb.e)(this, Da, bb, "f")
          }
          get fuzzColor() {
            return (0, pb.c)(this, za, "f")
          }
          set fuzzColor(bb) {
            (0, pb.e)(this, za, bb, "f")
          }
          get fuzzColorTexture() {
            return (0, pb.c)(this, xa, "f")
          }
          set fuzzColorTexture(bb) {
            (0, pb.e)(this, xa, bb, "f")
          }
          get fuzzRoughness() {
            return (0, pb.c)(this, ia, "f")
          }
          set fuzzRoughness(bb) {
            (0, pb.e)(this, ia, bb, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, pb.c)(this, pa, "f")
          }
          set fuzzRoughnessTexture(bb) {
            (0, pb.e)(this, pa, bb, "f")
          }
          get geometryThinWalled() {
            return (0, pb.c)(this, Na, "f")
          }
          set geometryThinWalled(bb) {
            (0, pb.e)(this, Na, bb, "f")
          }
          get geometryNormalTexture() {
            return (0, pb.c)(this, Wa, "f")
          }
          set geometryNormalTexture(bb) {
            (0, pb.e)(this, Wa, bb, "f")
          }
          get geometryTangent() {
            return (0, pb.c)(this, Ha, "f")
          }
          set geometryTangent(bb) {
            (0, pb.e)(this, Ha, bb, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(bb) {
            this.geometryTangent = new rb.l(Math.cos(bb), Math.sin(bb))
          }
          get geometryTangentTexture() {
            return (0, pb.c)(this, Ia, "f")
          }
          set geometryTangentTexture(bb) {
            (0, pb.e)(this, Ia, bb, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, pb.c)(this, da, "f")
          }
          set geometryCoatNormalTexture(bb) {
            (0, pb.e)(this, da, bb, "f")
          }
          get geometryCoatTangent() {
            return (0, pb.c)(this, Fa, "f")
          }
          set geometryCoatTangent(bb) {
            (0, pb.e)(this, Fa, bb, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(bb) {
            this.geometryCoatTangent = new rb.l(Math.cos(bb), Math.sin(bb))
          }
          get geometryCoatTangentTexture() {
            return (0, pb.c)(this, ha, "f")
          }
          set geometryCoatTangentTexture(bb) {
            (0, pb.e)(this, ha, bb, "f")
          }
          get geometryOpacity() {
            return (0, pb.c)(this, Ga, "f")
          }
          set geometryOpacity(bb) {
            (0, pb.e)(this, Ga, bb, "f")
          }
          get geometryOpacityTexture() {
            return (0, pb.c)(this, Qa, "f")
          }
          set geometryOpacityTexture(bb) {
            (0, pb.e)(this, Qa, bb, "f")
          }
          get geometryThickness() {
            return (0, pb.c)(this, qa, "f")
          }
          set geometryThickness(bb) {
            (0, pb.e)(this, qa, bb, "f")
          }
          get geometryThicknessTexture() {
            return (0, pb.c)(this, ua, "f")
          }
          set geometryThicknessTexture(bb) {
            (0, pb.e)(this, ua, bb, "f")
          }
          get emissionLuminance() {
            return (0, pb.c)(this, ra, "f")
          }
          set emissionLuminance(bb) {
            (0, pb.e)(this, ra, bb, "f")
          }
          get emissionColor() {
            return (0, pb.c)(this, Ka, "f")
          }
          set emissionColor(bb) {
            (0, pb.e)(this, Ka, bb, "f")
          }
          get emissionColorTexture() {
            return (0, pb.c)(this, la, "f")
          }
          set emissionColorTexture(bb) {
            (0, pb.e)(this, la, bb, "f")
          }
          get thinFilmWeight() {
            return (0, pb.c)(this, wa, "f")
          }
          set thinFilmWeight(bb) {
            (0, pb.e)(this, wa, bb, "f")
          }
          get thinFilmWeightTexture() {
            return (0, pb.c)(this, Va, "f")
          }
          set thinFilmWeightTexture(bb) {
            (0, pb.e)(this, Va, bb, "f")
          }
          get thinFilmThickness() {
            return (0, pb.c)(this, Oa, "f")
          }
          set thinFilmThickness(bb) {
            (0, pb.e)(this, Oa, bb, "f")
          }
          get thinFilmThicknessMin() {
            return (0, pb.c)(this, na, "f")
          }
          set thinFilmThicknessMin(bb) {
            (0, pb.e)(this, na, bb, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, pb.c)(this, Sa, "f")
          }
          set thinFilmThicknessTexture(bb) {
            (0, pb.e)(this, Sa, bb, "f")
          }
          get thinFilmIor() {
            return (0, pb.c)(this, bU, "f")
          }
          set thinFilmIor(bb) {
            (0, pb.e)(this, bU, bb, "f")
          }
          get ambientOcclusionTexture() {
            return (0, pb.c)(this, aU, "f")
          }
          set ambientOcclusionTexture(bb) {
            (0, pb.e)(this, aU, bb, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(bb) {
            this._sssQuality !== bb && (this._sssQuality = bb, this.Aab(1))
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
            return (0, pb.c)(this, UU, "f")
          }
          set directIntensity(bb) {
            (0, pb.e)(this, UU, bb, "f")
          }
          get environmentIntensity() {
            return (0, pb.c)(this, AU, "f")
          }
          set environmentIntensity(bb) {
            (0, pb.e)(this, AU, bb, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, pb.c)(this, MU, "f")
          }
          set useSpecularWeightFromTextureAlpha(bb) {
            (0, pb.e)(this, MU, bb, "f")
          }
          get forceAlphaTest() {
            return (0, pb.c)(this, TU, "f")
          }
          set forceAlphaTest(bb) {
            (0, pb.e)(this, TU, bb, "f")
          }
          get alphaCutOff() {
            return (0, pb.c)(this, EU, "f")
          }
          set alphaCutOff(bb) {
            (0, pb.e)(this, EU, bb, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, pb.c)(this, YU, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(bb) {
            (0, pb.e)(this, YU, bb, "f")
          }
          get useAmbientInGrayScale() {
            return (0, pb.c)(this, BU, "f")
          }
          set useAmbientInGrayScale(bb) {
            (0, pb.e)(this, BU, bb, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(gb.c.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === Tb.d.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(bb) {
            bb !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? Tb.d.LIGHTFALLOFF_PHYSICAL : Tb.d.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === Tb.d.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(bb) {
            bb !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? Tb.d.LIGHTFALLOFF_GLTF : Tb.d.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, pb.c)(this, eU, "f")
          }
          set useObjectSpaceNormalMap(bb) {
            (0, pb.e)(this, eU, bb, "f")
          }
          get useParallax() {
            return (0, pb.c)(this, vU, "f")
          }
          set useParallax(bb) {
            (0, pb.e)(this, vU, bb, "f")
          }
          get useParallaxOcclusion() {
            return (0, pb.c)(this, LU, "f")
          }
          set useParallaxOcclusion(bb) {
            (0, pb.e)(this, LU, bb, "f")
          }
          get parallaxScaleBias() {
            return (0, pb.c)(this, PU, "f")
          }
          set parallaxScaleBias(bb) {
            (0, pb.e)(this, PU, bb, "f")
          }
          get disableLighting() {
            return (0, pb.c)(this, XU, "f")
          }
          set disableLighting(bb) {
            (0, pb.e)(this, XU, bb, "f")
          }
          get forceIrradianceInFragment() {
            return (0, pb.c)(this, jU, "f")
          }
          set forceIrradianceInFragment(bb) {
            (0, pb.e)(this, jU, bb, "f")
          }
          get maxSimultaneousLights() {
            return (0, pb.c)(this, RU, "f")
          }
          set maxSimultaneousLights(bb) {
            (0, pb.e)(this, RU, bb, "f")
          }
          get invertNormalMapX() {
            return (0, pb.c)(this, kU, "f")
          }
          set invertNormalMapX(bb) {
            (0, pb.e)(this, kU, bb, "f")
          }
          get invertNormalMapY() {
            return (0, pb.c)(this, yU, "f")
          }
          set invertNormalMapY(bb) {
            (0, pb.e)(this, yU, bb, "f")
          }
          get twoSidedLighting() {
            return (0, pb.c)(this, ZU, "f")
          }
          set twoSidedLighting(bb) {
            (0, pb.e)(this, ZU, bb, "f")
          }
          get useAlphaFresnel() {
            return (0, pb.c)(this, DU, "f")
          }
          set useAlphaFresnel(bb) {
            (0, pb.e)(this, DU, bb, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, pb.c)(this, zU, "f")
          }
          set useLinearAlphaFresnel(bb) {
            (0, pb.e)(this, zU, bb, "f")
          }
          get environmentBRDFTexture() {
            return (0, pb.c)(this, xU, "f")
          }
          set environmentBRDFTexture(bb) {
            (0, pb.e)(this, xU, bb, "f")
          }
          get forceNormalForward() {
            return (0, pb.c)(this, iU, "f")
          }
          set forceNormalForward(bb) {
            (0, pb.e)(this, iU, bb, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, pb.c)(this, fU, "f")
          }
          set enableSpecularAntiAliasing(bb) {
            (0, pb.e)(this, fU, bb, "f")
          }
          get useHorizonOcclusion() {
            return (0, pb.c)(this, mU, "f")
          }
          set useHorizonOcclusion(bb) {
            (0, pb.e)(this, mU, bb, "f")
          }
          get useRadianceOcclusion() {
            return (0, pb.c)(this, pU, "f")
          }
          set useRadianceOcclusion(bb) {
            (0, pb.e)(this, pU, bb, "f")
          }
          get unlit() {
            return (0, pb.c)(this, NU, "f")
          }
          set unlit(bb) {
            (0, pb.e)(this, NU, bb, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, pb.c)(this, WU, "f")
          }
          set applyDecalMapAfterDetailMap(bb) {
            (0, pb.e)(this, WU, bb, "f")
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
            this._refractionHighQualityBlur !== bb && (this._refractionHighQualityBlur = bb, this.Aab(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(bb) {
            this._realTimeFiltering = bb, this.Aab(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(bb) {
            this._realTimeFilteringQuality = bb, this.Aab(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(bb) {
            this._fuzzSampleNumber = bb, this.Aab(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, pb.c)(this, HU, "f")
          }
          set debugMode(bb) {
            (0, pb.e)(this, HU, bb, "f")
          }
          constructor(Ub, Nb) {
            super(Ub, Nb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || bb.ForceGLSL), ab.set(this, ((0, pb.k)(this, FM), (0, pb.k)(this, hM, void 0))), this._baseWeight = ((0, pb.k)(this, GM), new ga("base_weight", 1, "vBaseWeight", 1)), Ab.set(this, (0, pb.k)(this, QM, void 0)), this._baseWeightTexture = ((0, pb.k)(this, qM), new Ca("base_weight", "baseWeight", "BASE_WEIGHT")), Mb.set(this, (0, pb.k)(this, uM, void 0)), this._baseColor = ((0, pb.k)(this, rM), new ga("base_color", gb.c.White(), "vBaseColor", 4)), Eb.set(this, (0, pb.k)(this, KM, void 0)), this._baseColorTexture = ((0, pb.k)(this, oM), new Ca("base_color", "baseColor", "BASE_COLOR")), Yb.set(this, (0, pb.k)(this, lM, void 0)), this._baseDiffuseRoughness = ((0, pb.k)(this, tM), new ga("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), Bb.set(this, (0, pb.k)(this, wM, void 0)), this._baseDiffuseRoughnessTexture = ((0, pb.k)(this, sM), new Ca("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), eb.set(this, (0, pb.k)(this, gM, void 0)), this._baseMetalness = ((0, pb.k)(this, CM), new ga("base_metalness", 0, "vReflectanceInfo", 4, 0)), vb.set(this, (0, pb.k)(this, VM, void 0)), this._baseMetalnessTexture = ((0, pb.k)(this, OM), new Ca("base_metalness", "baseMetalness", "BASE_METALNESS")), Lb.set(this, (0, pb.k)(this, cM, void 0)), this._specularWeight = ((0, pb.k)(this, JM), new ga("specular_weight", 1, "vReflectanceInfo", 4, 3)), Pb.set(this, (0, pb.k)(this, nM, void 0)), this._specularWeightTexture = ((0, pb.k)(this, SM), new Ca("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), Xb.set(this, (0, pb.k)(this, bT, void 0)), this._specularColor = ((0, pb.k)(this, aT), new ga("specular_color", gb.c.White(), "vSpecularColor", 4)), jb.set(this, (0, pb.k)(this, UT, void 0)), this._specularColorTexture = ((0, pb.k)(this, AT), new Ca("specular_color", "specularColor", "SPECULAR_COLOR")), Rb.set(this, (0, pb.k)(this, MT, void 0)), this._specularRoughness = ((0, pb.k)(this, TT), new ga("specular_roughness", .3, "vReflectanceInfo", 4, 1)), kb.set(this, (0, pb.k)(this, ET, void 0)), this._specularRoughnessTexture = ((0, pb.k)(this, YT), new Ca("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), yb.set(this, (0, pb.k)(this, BT, void 0)), this._specularRoughnessAnisotropy = ((0, pb.k)(this, eT), new ga("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), Zb.set(this, (0, pb.k)(this, vT, void 0)), this._specularRoughnessAnisotropyTexture = ((0, pb.k)(this, LT), new Ca("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), Db.set(this, (0, pb.k)(this, PT, void 0)), this._specularIor = ((0, pb.k)(this, XT), new ga("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), zb.set(this, (0, pb.k)(this, jT, void 0)), this._transmissionWeight = ((0, pb.k)(this, RT), new ga("transmission_weight", 0, "vTransmissionWeight", 1)), xb.set(this, (0, pb.k)(this, kT, void 0)), this._transmissionWeightTexture = ((0, pb.k)(this, yT), new Ca("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), ib.set(this, (0, pb.k)(this, ZT, void 0)), this._transmissionColor = ((0, pb.k)(this, DT), new ga("transmission_color", gb.c.White(), "vTransmissionColor", 3, 0)), fb.set(this, (0, pb.k)(this, zT, void 0)), this._transmissionColorTexture = ((0, pb.k)(this, xT), new Ca("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), mb.set(this, (0, pb.k)(this, iT, void 0)), this._transmissionDepth = ((0, pb.k)(this, fT), new ga("transmission_depth", 0, "vTransmissionDepth", 1, 0)), db.set(this, (0, pb.k)(this, mT, void 0)), this._transmissionDepthTexture = ((0, pb.k)(this, pT), new Ca("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Fb.set(this, (0, pb.k)(this, NT, void 0)), this._transmissionScatter = ((0, pb.k)(this, WT), new ga("transmission_scatter", gb.c.Black(), "vTransmissionScatter", 3, 0)), hb.set(this, (0, pb.k)(this, HT, void 0)), this._transmissionScatterTexture = ((0, pb.k)(this, IT), new Ca("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Gb.set(this, (0, pb.k)(this, dT, void 0)), this._transmissionScatterAnisotropy = ((0, pb.k)(this, FT), new ga("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), ub.set(this, (0, pb.k)(this, hT, void 0)), this._transmissionDispersionScale = ((0, pb.k)(this, GT), new ga("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), ob.set(this, (0, pb.k)(this, QT, void 0)), this._transmissionDispersionScaleTexture = ((0, pb.k)(this, qT), new Ca("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), lb.set(this, (0, pb.k)(this, uT, void 0)), this._transmissionDispersionAbbeNumber = ((0, pb.k)(this, rT), new ga("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), tb.set(this, (0, pb.k)(this, KT, void 0)), this._subsurfaceWeight = ((0, pb.k)(this, oT), new ga("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), wb.set(this, (0, pb.k)(this, lT, void 0)), this._subsurfaceWeightTexture = ((0, pb.k)(this, tT), new Ca("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), Cb.set(this, (0, pb.k)(this, wT, void 0)), this._subsurfaceColor = ((0, pb.k)(this, sT), new ga("subsurface_color", new gb.c(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), Ob.set(this, (0, pb.k)(this, gT, void 0)), this._subsurfaceColorTexture = ((0, pb.k)(this, CT), new Ca("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), Sb.set(this, (0, pb.k)(this, VT, void 0)), this._subsurfaceRadius = ((0, pb.k)(this, OT), new ga("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), ba.set(this, (0, pb.k)(this, cT, void 0)), this._subsurfaceRadiusScale = ((0, pb.k)(this, JT), new ga("subsurface_radius_scale", new gb.c(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), aa.set(this, (0, pb.k)(this, nT, void 0)), this._subsurfaceRadiusScaleTexture = ((0, pb.k)(this, ST), new Ca("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), Ua.set(this, (0, pb.k)(this, bE, void 0)), this._subsurfaceScatterAnisotropy = ((0, pb.k)(this, aE), new ga("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), Aa.set(this, (0, pb.k)(this, UE, void 0)), this._coatWeight = ((0, pb.k)(this, AE), new ga("coat_weight", 0, "vCoatWeight", 1, 0)), Ma.set(this, (0, pb.k)(this, ME, void 0)), this._coatWeightTexture = ((0, pb.k)(this, TE), new Ca("coat_weight", "coatWeight", "COAT_WEIGHT")), Ta.set(this, (0, pb.k)(this, EE, void 0)), this._coatColor = ((0, pb.k)(this, YE), new ga("coat_color", gb.c.White(), "vCoatColor", 3, 0)), Ea.set(this, (0, pb.k)(this, BE, void 0)), this._coatColorTexture = ((0, pb.k)(this, eE), new Ca("coat_color", "coatColor", "COAT_COLOR")), Ya.set(this, (0, pb.k)(this, vE, void 0)), this._coatRoughness = ((0, pb.k)(this, LE), new ga("coat_roughness", 0, "vCoatRoughness", 1, 0)), Ba.set(this, (0, pb.k)(this, PE, void 0)), this._coatRoughnessTexture = ((0, pb.k)(this, XE), new Ca("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), ea.set(this, (0, pb.k)(this, jE, void 0)), this._coatRoughnessAnisotropy = ((0, pb.k)(this, RE), new ga("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), ja.set(this, (0, pb.k)(this, kE, void 0)), this._coatRoughnessAnisotropyTexture = ((0, pb.k)(this, yE), new Ca("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), Ra.set(this, (0, pb.k)(this, ZE, void 0)), this._coatIor = ((0, pb.k)(this, DE), new ga("coat_ior", 1.5, "vCoatIor", 1, 0)), ka.set(this, (0, pb.k)(this, zE, void 0)), this._coatDarkening = ((0, pb.k)(this, xE), new ga("coat_darkening", 1, "vCoatDarkening", 1, 0)), ya.set(this, (0, pb.k)(this, iE, void 0)), this._coatDarkeningTexture = ((0, pb.k)(this, fE), new Ca("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, Za.set(this, (0, pb.k)(this, mE, void 0)), this._fuzzWeight = ((0, pb.k)(this, pE), new ga("fuzz_weight", 0, "vFuzzWeight", 1, 0)), Da.set(this, (0, pb.k)(this, NE, void 0)), this._fuzzWeightTexture = ((0, pb.k)(this, WE), new Ca("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), za.set(this, (0, pb.k)(this, HE, void 0)), this._fuzzColor = ((0, pb.k)(this, IE), new ga("fuzz_color", gb.c.White(), "vFuzzColor", 3, 0)), xa.set(this, (0, pb.k)(this, dE, void 0)), this._fuzzColorTexture = ((0, pb.k)(this, FE), new Ca("fuzz_color", "fuzzColor", "FUZZ_COLOR")), ia.set(this, (0, pb.k)(this, hE, void 0)), this._fuzzRoughness = ((0, pb.k)(this, GE), new ga("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), pa.set(this, (0, pb.k)(this, QE, void 0)), this._fuzzRoughnessTexture = ((0, pb.k)(this, qE), new Ca("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Na.set(this, (0, pb.k)(this, uE, void 0)), this._geometryThinWalled = ((0, pb.k)(this, rE), new ga("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Wa.set(this, (0, pb.k)(this, KE, void 0)), this._geometryNormalTexture = ((0, pb.k)(this, oE), new Ca("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), Ha.set(this, (0, pb.k)(this, lE, void 0)), this._geometryTangent = ((0, pb.k)(this, tE), new ga("geometry_tangent", new rb.l(1, 0), "vSpecularAnisotropy", 3, 0)), Ia.set(this, (0, pb.k)(this, wE, void 0)), this._geometryTangentTexture = ((0, pb.k)(this, sE), new Ca("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), da.set(this, (0, pb.k)(this, gE, void 0)), this._geometryCoatNormalTexture = ((0, pb.k)(this, CE), new Ca("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Fa.set(this, (0, pb.k)(this, VE, void 0)), this._geometryCoatTangent = ((0, pb.k)(this, OE), new ga("geometry_coat_tangent", new rb.l(1, 0), "vGeometryCoatTangent", 2, 0)), ha.set(this, (0, pb.k)(this, cE, void 0)), this._geometryCoatTangentTexture = ((0, pb.k)(this, JE), new Ca("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), Ga.set(this, (0, pb.k)(this, nE, void 0)), this._geometryOpacity = ((0, pb.k)(this, SE), new ga("geometry_opacity", 1, "vBaseColor", 4, 3)), Qa.set(this, (0, pb.k)(this, bY, void 0)), this._geometryOpacityTexture = ((0, pb.k)(this, aY), new Ca("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), qa.set(this, (0, pb.k)(this, UY, void 0)), this._geometryThickness = ((0, pb.k)(this, AY), new ga("geometry_thickness", 0, "vGeometryThickness", 1, 0)), ua.set(this, (0, pb.k)(this, MY, void 0)), this._geometryThicknessTexture = ((0, pb.k)(this, TY), new Ca("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), ra.set(this, (0, pb.k)(this, EY, void 0)), this._emissionLuminance = ((0, pb.k)(this, YY), new ga("emission_luminance", 1, "vLightingIntensity", 4, 1)), Ka.set(this, (0, pb.k)(this, BY, void 0)), this._emissionColor = ((0, pb.k)(this, eY), new ga("emission_color", gb.c.Black(), "vEmissionColor", 3)), la.set(this, (0, pb.k)(this, vY, void 0)), this._emissionColorTexture = ((0, pb.k)(this, LY), new Ca("emission_color", "emissionColor", "EMISSION_COLOR")), wa.set(this, (0, pb.k)(this, PY, void 0)), this._thinFilmWeight = ((0, pb.k)(this, XY), new ga("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), Va.set(this, (0, pb.k)(this, jY, void 0)), this._thinFilmWeightTexture = ((0, pb.k)(this, RY), new Ca("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), Oa.set(this, (0, pb.k)(this, kY, void 0)), this._thinFilmThickness = ((0, pb.k)(this, yY), new ga("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), na.set(this, (0, pb.k)(this, ZY, void 0)), this._thinFilmThicknessMin = ((0, pb.k)(this, DY), new ga("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), Sa.set(this, (0, pb.k)(this, zY, void 0)), this._thinFilmThicknessTexture = ((0, pb.k)(this, xY), new Ca("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), bU.set(this, (0, pb.k)(this, iY, void 0)), this._thinFilmIor = ((0, pb.k)(this, fY), new ga("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), aU.set(this, (0, pb.k)(this, mY, void 0)), this._ambientOcclusionTexture = ((0, pb.k)(this, pY), new Ca("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = bb.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, UU.set(this, (0, pb.k)(this, NY, 1)), AU.set(this, ((0, pb.k)(this, WY), (0, pb.k)(this, HY, 1))), MU.set(this, ((0, pb.k)(this, IY), (0, pb.k)(this, dY, !1))), TU.set(this, ((0, pb.k)(this, FY), (0, pb.k)(this, hY, !1))), EU.set(this, ((0, pb.k)(this, GY), (0, pb.k)(this, QY, .4))), YU.set(this, ((0, pb.k)(this, qY), (0, pb.k)(this, uY, !1))), BU.set(this, ((0, pb.k)(this, rY), (0, pb.k)(this, KY, !1))), eU.set(this, ((0, pb.k)(this, oY), (0, pb.k)(this, lY, !1))), vU.set(this, ((0, pb.k)(this, tY), (0, pb.k)(this, wY, !1))), LU.set(this, ((0, pb.k)(this, sY), (0, pb.k)(this, gY, !1))), PU.set(this, ((0, pb.k)(this, CY), (0, pb.k)(this, VY, .05))), XU.set(this, ((0, pb.k)(this, OY), (0, pb.k)(this, cY, !1))), jU.set(this, ((0, pb.k)(this, JY), (0, pb.k)(this, nY, !1))), RU.set(this, ((0, pb.k)(this, SY), (0, pb.k)(this, bB, 4))), kU.set(this, ((0, pb.k)(this, aB), (0, pb.k)(this, UB, !1))), yU.set(this, ((0, pb.k)(this, AB), (0, pb.k)(this, MB, !1))), ZU.set(this, ((0, pb.k)(this, TB), (0, pb.k)(this, EB, !1))), DU.set(this, ((0, pb.k)(this, YB), (0, pb.k)(this, BB, !1))), zU.set(this, ((0, pb.k)(this, eB), (0, pb.k)(this, vB, !1))), xU.set(this, ((0, pb.k)(this, LB), (0, pb.k)(this, PB, null))), iU.set(this, ((0, pb.k)(this, XB), (0, pb.k)(this, jB, !1))), fU.set(this, ((0, pb.k)(this, RB), (0, pb.k)(this, kB, !1))), mU.set(this, ((0, pb.k)(this, yB), (0, pb.k)(this, ZB, !0))), pU.set(this, ((0, pb.k)(this, DB), (0, pb.k)(this, zB, !0))), NU.set(this, ((0, pb.k)(this, xB), (0, pb.k)(this, iB, !1))), WU.set(this, ((0, pb.k)(this, fB), (0, pb.k)(this, mB, !1))), this._lightingInfos = ((0, pb.k)(this, pB), new rb.o(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = Tb.d.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Hb.h(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, HU.set(this, (0, pb.k)(this, NB, 0)), this.debugLimit = ((0, pb.k)(this, WB), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = Tb.d.MATERIAL_OPAQUE, this.oN() && !this.oN()?.vj().isWebGPU && this.oN().vj().oj < 2 && Wb.e.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), bb._noiseTextures[this.oN().uniqueId] || (bb._noiseTextures[this.oN().uniqueId] = new Ib.e(ma.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.oN(), !1, !0, 1), this.oN().UW.addOnce((() => {
              bb._noiseTextures[this.oN().uniqueId]?.dispose(), delete bb._noiseTextures[this.oN().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), cb.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), cb.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = qb(this.oN()), this._environmentFuzzBRDFTexture = Qb(this.oN()), this.prePassConfiguration = new sb.d, this._propertyList = {};
            for (const bb of Object.getOwnPropertyNames(this)) {
              const ab = this[bb];
              ab instanceof ga && (this._propertyList[bb] = ab)
            }
            Object.keys(this._propertyList).forEach((bb => {
              const ab = this._propertyList[bb];
              let Ub = this._uniformsList[ab.targetUniformName];
              Ub ? Ub.numComponents !== ab.targetUniformComponentNum ? Wb.e.Error(`Uniform ${ab.targetUniformName} already exists of size ${Ub.numComponents}, but trying to set it to ${ab.targetUniformComponentNum}.`) : Ub.requiredDefine !== ab.requiredDefine && (Ub.requiredDefine = void 0) : (Ub = new sa(ab.targetUniformName, ab.targetUniformComponentNum), Ub.requiredDefine = ab.requiredDefine, this._uniformsList[ab.targetUniformName] = Ub), "" === Ub.firstLinkedKey && (Ub.firstLinkedKey = ab.name), Ub.linkedProperties[ab.name] = ab
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const bb of Object.getOwnPropertyNames(this)) {
              const ab = this[bb];
              ab instanceof Ca && (this._samplersList[bb] = ab)
            }
            for (const bb in this._samplersList) {
              const ab = this._samplersList[bb].textureDefine;
              this._samplerDefines[ab] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[ab + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[ab + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(cb.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(cb.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
            return this._hasAlphaChannel() && this._transparencyMode !== Tb.d.MATERIAL_OPAQUE && !this.geometryOpacityTexture
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
          clone(ab) {
            let Ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Mb = fa.b.Clone((() => new bb(ab, this.oN())), this, {
              cloneTexturesOnlyOnce: Ub
            });
            return Mb.id = ab, Mb.name = ab, this.stencil.copyTo(Mb.stencil), this._clonePlugins(Mb, Ab), Mb
          }
          serialize() {
            const bb = super.serialize();
            return bb.customType = "BABYLON.OpenPBRMaterial", bb
          }
          static Parse(ab, Ub, Ab) {
            const Mb = fa.b.Parse((() => new bb(ab.name, Ub)), ab, Ub, Ab);
            return ab.stencil && Mb.stencil.parse(ab.stencil, Ub, Ab), Tb.d._ParsePlugins(ab, Mb, Ub, Ab), Mb
          }
          forceCompilation(bb, ab, Ub) {
            const Ab = {
              clipPlane: !1,
              useInstances: !1,
              ...Ub
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const Ub = new ca({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Mb = this._prepareEffect(bb, bb, Ub, void 0, void 0, Ab.useInstances, Ab.clipPlane);
              this._onEffectCreatedObservable && (ta.effect = Mb, ta.subMesh = null, this._onEffectCreatedObservable.notifyObservers(ta)), Mb.isReady() ? ab && ab(this) : Mb.onCompileObservable.add((() => {
                ab && ab(this)
              }))
            })()
          }
          isReadyForSubMesh(ab, Ub, Ab) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Mb = Ub._drawWrapper;
            if (Mb.effect && this.isFrozen && Mb._wasPreviouslyReady && Mb._wasPreviouslyUsingInstances === Ab) return !0;
            Ub.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Ub.materialDefines = new ca({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const Tb = Ub.materialDefines;
            if (this._isReadyForSubMesh(Ub)) return !0;
            const Eb = this.oN(),
              Yb = Eb.vj();
            if (Tb._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Eb.texturesEnabled)) {
              for (const bb in this._samplersList) {
                const ab = this._samplersList[bb];
                if (ab.value && !ab.value.isReadyOrNotBlocking()) return !1
              }
              const ab = this._getRadianceTexture();
              if (ab && cb.c.ReflectionTextureEnabled) {
                if (!ab.isReadyOrNotBlocking()) return !1;
                if (ab.irradianceTexture) {
                  if (!ab.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!ab.sphericalPolynomial && ab.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && cb.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && cb.c.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && cb.c.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (bb._noiseTextures[Eb.uniqueId] && !bb._noiseTextures[Eb.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Tb, this._eventInfo.subMesh = Ub, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Tb._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (Tb.AREALIGHTUSED)
              for (let bb = 0; bb < ab.lightSources.length; bb++)
                if (!ab.lightSources[bb]._isReady()) return !1;
            if (Yb.getCaps().standardDerivatives || ab.isVerticesDataPresent(Kb.m.NormalKind) || (ab.createNormals(!0), Wb.e.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + ab.name)), !(0, nb.d)(Eb, ab, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const Bb = Ub.effect,
              eb = Tb._areLightsDisposed,
              vb = this._prepareEffect(ab, Ub.getRenderingMesh(), Tb, this.onCompiled, this.onError, Ab, null);
            let Lb = !1;
            if (vb)
              if (this._onEffectCreatedObservable && (ta.effect = vb, ta.subMesh = Ub, this._onEffectCreatedObservable.notifyObservers(ta)), this.allowShaderHotSwapping && Bb && !vb.isReady()) {
                if (Tb.markAsUnprocessed(), Lb = this.isFrozen, eb) return Tb._areLightsDisposed = !0, !1
              } else Eb.resetCachedMaterial(), Ub.setEffect(vb, Tb, this._materialContext);
            return !(!Ub.effect || !Ub.effect.isReady()) && (Tb._renderId = Eb.getRenderId(), Mb._wasPreviouslyReady = !Lb, Mb._wasPreviouslyUsingInstances = !!Ab, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const bb = this._uniformBuffer;
            bb.addUniform("vTangentSpaceParams", 2), bb.addUniform("vLightingIntensity", 4), bb.addUniform("pointSize", 1), bb.addUniform("vDebugMode", 2), bb.addUniform("renderTargetSize", 2), bb.addUniform("cameraInfo", 4), bb.addUniform("vTextureRepetitionHexTilingParams", 4), bb.addUniform("backgroundRefractionMatrix", 16), bb.addUniform("vBackgroundRefractionInfos", 3), (0, nb.kb)(bb, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((ab => {
              bb.addUniform(ab.name, ab.numComponents)
            })), Object.values(this._samplersList).forEach((ab => {
              bb.addUniform(ab.samplerInfoName, 2), bb.addUniform(ab.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(bb, ab, Ub, Ab) {
            if (0 === this.geometryThickness) bb.updateFloat("vGeometryThickness", 0);
            else {
              Ab.getRenderingMesh().getWorldMatrix().decompose(rb.j.Pj[0]);
              const ab = Math.max(Math.abs(rb.j.Pj[0].x), Math.abs(rb.j.Pj[0].y), Math.abs(rb.j.Pj[0].z));
              bb.updateFloat("vGeometryThickness", this.geometryThickness * ab)
            }
          }
          bindForSubMesh(ab, Ub, Ab) {
            const Mb = this.oN(),
              Tb = Ab.materialDefines;
            if (!Tb) return;
            const Eb = Ab.effect;
            if (!Eb) return;
            this._activeEffect = Eb, Ub.getMeshUniformBuffer().bindToEffect(Eb, "Mesh"), Ub.transferToEffect(ab);
            const Yb = Mb.vj();
            this._uniformBuffer.bindToEffect(Eb, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Mb, Ub, ab, this.isFrozen), Xa.d.Bind(Yb.currentRenderPassId, this._activeEffect, Ub, ab, this);
            const Bb = Mb.activeCamera;
            Bb ? this._uniformBuffer.updateFloat4("cameraInfo", Bb.minZ, Bb.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const eb = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", eb[0], eb[1], eb[2], eb[3]), this._eventInfo.subMesh = Ab, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Tb.OBJECTSPACE_NORMALMAP && (ab.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const vb = this._mustRebind(Mb, Eb, Ab, Ub.visibility),
              Lb = Yb._features.needToAlwaysBindUniformBuffers;
            (0, nb.h)(Ub, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, La.e)(this._activeEffect, this._vertexPullingMetadata);
            const Pb = this._uniformBuffer;
            if (vb) {
              this.bindViewProjection(Eb);
              const ab = this._getRadianceTexture();
              if (!Pb.useUbo || !this.isFrozen || !Pb.isSync || Ab._drawWrapper._forceRebindOnNextCall) {
                if (Mb.texturesEnabled) {
                  for (const bb in this._samplersList) {
                    const ab = this._samplersList[bb];
                    ab.value && (Pb.updateFloat2(ab.samplerInfoName, ab.value.coordinatesIndex, ab.value.level), (0, nb.x)(ab.value, Pb, ab.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Mb._mirroredCameraPosition ? Pb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Pb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, nb.m)(Mb, Tb, Pb, gb.c.White(), ab, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && Pb.updateFloat("pointSize", this.pointSize);
                const bb = this._uniformsArray;
                for (let ab = 0, Ub = bb.length; ab < Ub; ab++) {
                  const Ub = bb[ab];
                  (void 0 === Ub.requiredDefine || Tb[Ub.requiredDefine]) && (4 === Ub.numComponents ? (Ub.populateVectorFromLinkedProperties(rb.j.Vector4[0]), Pb.updateVector4(Ub.name, rb.j.Vector4[0])) : 3 === Ub.numComponents ? (Ub.populateVectorFromLinkedProperties(rb.j.Pj[0]), Pb.updateVector3(Ub.name, rb.j.Pj[0])) : 2 === Ub.numComponents ? (Ub.populateVectorFromLinkedProperties(rb.j.Vector2[0]), Pb.updateFloat2(Ub.name, rb.j.Vector2[0].x, rb.j.Vector2[0].y)) : 1 === Ub.numComponents && Pb.updateFloat(Ub.name, Ub.linkedProperties[Ub.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Mb.environmentIntensity, this._lightingInfos.w = 1, Pb.updateVector4("vLightingIntensity", this._lightingInfos), Pb.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Mb.texturesEnabled) {
                for (const bb in this._samplersList) {
                  const ab = this._samplersList[bb];
                  ab.value && Pb.setTexture(ab.samplerName, ab.value)
                }
                if ((0, nb.o)(Mb, Tb, Pb, ab, this.realTimeFiltering), Tb.ENVIRONMENTBRDF && Pb.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), Tb.FUZZENVIRONMENTBRDF && Pb.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), Tb.REFRACTED_BACKGROUND && (Pb.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), Pb.i5("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), rb.j.Pj[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), Pb.updateVector3("vBackgroundRefractionInfos", rb.j.Pj[1])), (Tb.ANISOTROPIC || Tb.FUZZ || Tb.REFRACTED_BACKGROUND || Tb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Pb.setTexture("blueNoiseSampler", bb._noiseTextures[this.oN().uniqueId]), Tb.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const bb = this.sssIrradianceTexture.getSize().width,
                    ab = this.sssIrradianceTexture.getSize().height;
                  Pb.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), Pb.setTexture("sceneDepthSampler", this.sssDepthTexture), Pb.updateFloat2("renderTargetSize", bb, ab)
                }
              }
              this.oN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Ub) && this.oN().depthPeelingRenderer.bind(Eb), this._eventInfo.subMesh = Ab, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, va.f)(this._activeEffect, this, Mb), this.bindEyePosition(Eb)
            } else Lb && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Mb, Mb.vj(), Ab), !vb && this.isFrozen && !Lb || !Mb.lightsEnabled || this._disableLighting || (0, nb.s)(Mb, Ub, this._activeEffect, Tb, this._maxSimultaneousLights), !vb && this.isFrozen || (this.bindView(Eb), (0, nb.l)(Mb, Ub, this._activeEffect, !0), Tb.NUM_MORPH_INFLUENCERS && (0, nb.v)(Ub, this._activeEffect), Tb.BAKED_VERTEX_ANIMATION_TEXTURE && Ub.bakedVertexAnimationManager?.bind(Eb, Tb.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, nb.u)(Tb, this._activeEffect, Mb)), this._afterBind(Ub, this._activeEffect, Ab), Pb.update()
          }
          getAnimatables() {
            const bb = super.getAnimatables();
            for (const ab in this._samplersList) {
              const Ub = this._samplersList[ab];
              Ub.value && Ub.value.animations && Ub.value.animations.length > 0 && bb.push(Ub.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && bb.push(this._radianceTexture), bb
          }
          getActiveTextures() {
            const bb = super.getActiveTextures();
            for (const ab in this._samplersList) {
              const Ub = this._samplersList[ab];
              Ub.value && bb.push(Ub.value)
            }
            return this._radianceTexture && bb.push(this._radianceTexture), bb
          }
          hasTexture(bb) {
            if (super.hasTexture(bb)) return !0;
            for (const ab in this._samplersList) {
              if (this._samplersList[ab].value === bb) return !0
            }
            return this._radianceTexture === bb
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(bb, ab) {
            if (this._breakShaderLoadedCheck = !0, ab) {
              this._environmentBRDFTexture && this.oN().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.oN().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const bb in this._samplersList) {
                const ab = this._samplersList[bb];
                ab.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(bb, ab)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.oN().environmentTexture
          }
          _prepareEffect(ab, Ub, Ab) {
            let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Eb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(ab, Ub, Ab, Eb, Yb), !Ab.isDirty) return null;
            Ab.markAsProcessed();
            const Bb = this.oN().vj(),
              eb = new Jb.d;
            let vb = 0;
            Ab.USESPHERICALINVERTEX && eb.addFallback(vb++, "USESPHERICALINVERTEX"), Ab.FOG && eb.addFallback(vb, "FOG"), Ab.SPECULARAA && eb.addFallback(vb, "SPECULARAA"), Ab.POINTSIZE && eb.addFallback(vb, "POINTSIZE"), Ab.LOGARITHMICDEPTH && eb.addFallback(vb, "LOGARITHMICDEPTH"), Ab.PARALLAX && eb.addFallback(vb, "PARALLAX"), Ab.PARALLAX_RHS && eb.addFallback(vb, "PARALLAX_RHS"), Ab.PARALLAXOCCLUSION && eb.addFallback(vb++, "PARALLAXOCCLUSION"), Ab.ENVIRONMENTBRDF && eb.addFallback(vb++, "ENVIRONMENTBRDF"), Ab.TANGENT && eb.addFallback(vb++, "TANGENT"), vb = (0, nb.y)(Ab, eb, this._maxSimultaneousLights, vb), Ab.SPECULARTERM && eb.addFallback(vb++, "SPECULARTERM"), Ab.USESPHERICALFROMREFLECTIONMAP && eb.addFallback(vb++, "USESPHERICALFROMREFLECTIONMAP"), Ab.USEIRRADIANCEMAP && eb.addFallback(vb++, "USEIRRADIANCEMAP"), Ab.NORMAL && eb.addFallback(vb++, "NORMAL"), Ab.VERTEXCOLOR && eb.addFallback(vb++, "VERTEXCOLOR"), Ab.MORPHTARGETS && eb.addFallback(vb++, "MORPHTARGETS"), Ab.MULTIVIEW && eb.addFallback(0, "MULTIVIEW");
            const Lb = [Kb.m.PositionKind];
            Ab.NORMAL && Lb.push(Kb.m.NormalKind), Ab.TANGENT && Lb.push(Kb.m.TangentKind);
            for (let bb = 1; bb <= 6; ++bb) Ab["UV" + bb] && Lb.push(`uv${1===bb?"":bb}`);
            Ab.VERTEXCOLOR && Lb.push(Kb.m.ColorKind), (0, nb.F)(Lb, ab, Ab, eb), (0, nb.H)(Lb, Ab), (0, nb.J)(Lb, ab, Ab), (0, nb.B)(Lb, ab, Ab);
            let Pb = "openpbr";
            const Xb = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const bb in this._uniformsList) Xb.push(bb);
            const jb = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Ab.FUZZENVIRONMENTBRDF && jb.push("environmentFuzzBrdfSampler"), Ab.REFRACTED_BACKGROUND && jb.push("backgroundRefractionSampler"), (Ab.ANISOTROPIC || Ab.FUZZ || Ab.REFRACTED_BACKGROUND || Ab.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && jb.push("blueNoiseSampler"), Ab.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (jb.push("sceneIrradianceSampler"), jb.push("sceneDepthSampler"));
            for (const bb in this._samplersList) {
              const ab = this._samplersList[bb];
              jb.push(ab.samplerName), Xb.push(ab.samplerInfoName), Xb.push(ab.samplerMatrixName)
            }(0, nb.ob)(Xb, jb, !0);
            const Rb = ["Material", "Scene", "Mesh"],
              kb = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Ab.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = eb, this._eventInfo.fallbackRank = vb, this._eventInfo.defines = Ab, this._eventInfo.uniforms = Xb, this._eventInfo.attributes = Lb, this._eventInfo.samplers = jb, this._eventInfo.uniformBuffersNames = Rb, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ab, this._eventInfo.indexParameters = kb, this._callbackPluginEventGeneric(128, this._eventInfo), Xa.d.AddUniformsAndSamplers(Xb, jb), sb.d.AddUniforms(Xb), sb.d.AddSamplers(jb), (0, va.e)(Xb), this._useVertexPulling) {
              const bb = Ub?.geometry;
              bb && (this._vertexPullingMetadata = (0, La.g)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, ab) => {
                Xb.push(`vp_${ab}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            Vb.d && (Vb.d.PrepareUniforms(Xb, Ab), Vb.d.PrepareSamplers(jb, Ab)), (0, nb.rb)({
              uniformsNames: Xb,
              uniformBuffersNames: Rb,
              samplers: jb,
              defines: Ab,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const yb = {};
            this.customShaderNameResolve && (Pb = this.customShaderNameResolve(Pb, Xb, Rb, jb, Ab, Lb, yb));
            const Zb = Ab.toString(),
              Db = Bb.createEffect(Pb, {
                attributes: Lb,
                uniformsNames: Xb,
                uniformBuffersNames: Rb,
                samplers: jb,
                defines: Zb,
                fallbacks: eb,
                onCompiled: Mb,
                onError: Tb,
                indexParameters: kb,
                processFinalCode: yb.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Ab.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, Bb);
            return this._eventInfo.customCode = void 0, Db
          }
          _prepareDefines(ab, Ub, Ab) {
            let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Eb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Yb = Ub.hasThinInstances,
              Bb = this.oN(),
              eb = Bb.vj();
            (0, nb._)(Bb, ab, Ab, !0, this._maxSimultaneousLights, this._disableLighting), Ab._needNormals = !0, (0, nb.db)(Bb, Ab);
            const vb = this.needAlphaBlendingForMesh(ab) && this.oN().useOrderIndependentTransparency;
            if ((0, nb.gb)(Bb, Ab, this.canRenderToMRT && !vb), (0, nb.fb)(Bb, Ab, vb), Xa.d.PrepareDefines(eb.currentRenderPassId, ab, Ab), Ab._areTexturesDirty) {
              Ab._needUVs = !1;
              for (let bb = 1; bb <= 6; ++bb) Ab["MAINUV" + bb] = !1;
              if (Bb.texturesEnabled) {
                for (const Ub in this._samplersList) {
                  const bb = this._samplersList[Ub];
                  bb.value ? ((0, nb.$)(bb.value, Ab, bb.textureDefine), Ab[bb.textureDefine + "_GAMMA"] = bb.value.gammaSpace) : Ab[bb.textureDefine] = !1
                }
                const bb = this._getRadianceTexture(),
                  ab = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || eb.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, nb.W)(Bb, bb, Ab, this.realTimeFiltering, this.realTimeFilteringQuality, !ab), this._baseMetalnessTexture && (Ab.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Ab.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Ab.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Ab.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Ab.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Ab.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Ab.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Ab.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Ab.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Ab.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Ab.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Ab.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && cb.c.DiffuseTextureEnabled ? (Ab.PARALLAX = !0, Ab.PARALLAX_RHS = Bb.useRightHandedSystem, Ab.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Ab.PARALLAX = !1, Ab.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Ab.PARALLAX = !1, Ab.PARALLAX_RHS = !1, Ab.PARALLAXOCCLUSION = !1, Ab.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && cb.c.ReflectionTextureEnabled ? (Ab.ENVIRONMENTBRDF = !0, Ab.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Ab.ENVIRONMENTBRDF = !1, Ab.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Ab.FUZZENVIRONMENTBRDF = !0 : Ab.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Ab.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && cb.c.RefractionTextureEnabled, Ab.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Ab.REFRACTED_LIGHTS = !0;
                  const bb = this._getRadianceTexture();
                  bb ? (Ab.REFRACTED_ENVIRONMENT = cb.c.RefractionTextureEnabled, Ab.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.oN().useRightHandedSystem ? !bb.invertZ : bb.invertZ, Ab.REFRACTED_ENVIRONMENT_LOCAL_CUBE = bb.isCube && bb.boundingBoxSize) : Ab.REFRACTED_ENVIRONMENT = !1
                } else Ab.REFRACTED_BACKGROUND = !1, Ab.REFRACTED_LIGHTS = !1, Ab.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Ab.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Ab.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === Tb.d.LIGHTFALLOFF_STANDARD ? (Ab.USEPHYSICALLIGHTFALLOFF = !1, Ab.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === Tb.d.LIGHTFALLOFF_GLTF ? (Ab.USEPHYSICALLIGHTFALLOFF = !1, Ab.USEGLTFLIGHTFALLOFF = !0) : (Ab.USEPHYSICALLIGHTFALLOFF = !0, Ab.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Ab.TWOSIDEDLIGHTING = !0 : Ab.TWOSIDEDLIGHTING = !1, Ab.MIRRORED = !!Bb._mirroredCameraPosition, Ab.SPECULARAA = eb.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Ab._areTexturesDirty || Ab._areMiscDirty) && (Ab.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Ab.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Ab.ALPHABLEND = this.needAlphaBlendingForMesh(ab)), Ab._areTexturesDirty && (Ab.TEXTURE_REPETITION_MODE = eb.version > 1 || eb.isWebGPU ? this.textureRepetitionMode : 0), Ab._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Ab), Ab.FORCENORMALFORWARD = this._forceNormalForward, Ab.RADIANCEOCCLUSION = this._useRadianceOcclusion, Ab.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && bb._noiseTextures[Bb.uniqueId] && cb.c.ReflectionTextureEnabled ? (Ab.ANISOTROPIC = !0, ab.isVerticesDataPresent(Kb.m.TangentKind) || (Ab._needUVs = !0, Ab.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Ab.USE_GLTF_STYLE_ANISOTROPY = !0), Ab.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Ab.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Ab.ANISOTROPIC = !1, Ab.USE_GLTF_STYLE_ANISOTROPY = !1, Ab.ANISOTROPIC_BASE = !1, Ab.ANISOTROPIC_COAT = !1), Ab.THIN_FILM = this.thinFilmWeight > 0, Ab.IRIDESCENCE = this.thinFilmWeight > 0, Ab.DISPERSION = this.transmissionDispersionScale > 0, Ab.SCATTERING = this.hasScattering;
            if (Ab.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Ab.TRANSMISSION_SLAB = this.transmissionWeight > 0, Ab.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Ab.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Ab.PREPASS && (Ab.SUBSURFACE_SLAB || Ab.TRANSMISSION_SLAB_VOLUME)) {
              let bb = !1;
              if (!this.sssIrradianceTexture && Bb.geometryBufferRenderer) {
                const ab = Bb.geometryBufferRenderer.getTextureIndex(oa.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = Bb.geometryBufferRenderer.getGBuffer().textures[ab], bb = !0
              }
              if (!this.sssDepthTexture && Bb.geometryBufferRenderer) {
                const ab = Bb.geometryBufferRenderer.getTextureIndex(oa.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = Bb.geometryBufferRenderer.getGBuffer().textures[ab], bb = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Ab.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, bb && (Ab.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Ab.FUZZ = this.fuzzWeight > 0 && cb.c.ReflectionTextureEnabled, Ab.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Ab.FUZZ ? (ab.isVerticesDataPresent(Kb.m.TangentKind) || (Ab._needUVs = !0, Ab.MAINUV1 = !0), this._environmentFuzzBRDFTexture = Qb(this.oN()), Ab.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Ab.FUZZENVIRONMENTBRDF = !1, Ab.FUZZ_IBL_SAMPLES = 0), Ab._areMiscDirty && ((0, nb.bb)(ab, Bb, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ab), Ab, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Ub, this._isVertexOutputInvariant), Ab.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !ab.isVerticesDataPresent(Kb.m.NormalKind), Ab.DEBUGMODE = this._debugMode), (0, nb.S)(Bb, eb, this, Ab, !!Mb, Eb, Yb), this._eventInfo.defines = Ab, this._eventInfo.mesh = ab, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, nb.R)(ab, Ab, !0, !0, !0, this._transparencyMode !== Tb.d.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, ab = new WeakMap, Ab = new WeakMap, Mb = new WeakMap, Eb = new WeakMap, Yb = new WeakMap, Bb = new WeakMap, eb = new WeakMap, vb = new WeakMap, Lb = new WeakMap, Pb = new WeakMap, Xb = new WeakMap, jb = new WeakMap, Rb = new WeakMap, kb = new WeakMap, yb = new WeakMap, Zb = new WeakMap, Db = new WeakMap, zb = new WeakMap, xb = new WeakMap, ib = new WeakMap, fb = new WeakMap, mb = new WeakMap, db = new WeakMap, Fb = new WeakMap, hb = new WeakMap, Gb = new WeakMap, ub = new WeakMap, ob = new WeakMap, lb = new WeakMap, tb = new WeakMap, wb = new WeakMap, Cb = new WeakMap, Ob = new WeakMap, Sb = new WeakMap, ba = new WeakMap, aa = new WeakMap, Ua = new WeakMap, Aa = new WeakMap, Ma = new WeakMap, Ta = new WeakMap, Ea = new WeakMap, Ya = new WeakMap, Ba = new WeakMap, ea = new WeakMap, ja = new WeakMap, Ra = new WeakMap, ka = new WeakMap, ya = new WeakMap, Za = new WeakMap, Da = new WeakMap, za = new WeakMap, xa = new WeakMap, ia = new WeakMap, pa = new WeakMap, Na = new WeakMap, Wa = new WeakMap, Ha = new WeakMap, Ia = new WeakMap, da = new WeakMap, Fa = new WeakMap, ha = new WeakMap, Ga = new WeakMap, Qa = new WeakMap, qa = new WeakMap, ua = new WeakMap, ra = new WeakMap, Ka = new WeakMap, la = new WeakMap, wa = new WeakMap, Va = new WeakMap, Oa = new WeakMap, na = new WeakMap, Sa = new WeakMap, bU = new WeakMap, aU = new WeakMap, UU = new WeakMap, AU = new WeakMap, MU = new WeakMap, TU = new WeakMap, EU = new WeakMap, YU = new WeakMap, BU = new WeakMap, eU = new WeakMap, vU = new WeakMap, LU = new WeakMap, PU = new WeakMap, XU = new WeakMap, jU = new WeakMap, RU = new WeakMap, kU = new WeakMap, yU = new WeakMap, ZU = new WeakMap, DU = new WeakMap, zU = new WeakMap, xU = new WeakMap, iU = new WeakMap, fU = new WeakMap, mU = new WeakMap, pU = new WeakMap, NU = new WeakMap, WU = new WeakMap, HU = new WeakMap, (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(dM[Symbol.metadata] ?? null) : void 0;
          IU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], dU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], FU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], hU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], GU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], QU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], qU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], uU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], rU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], KU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], oU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], lU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], tU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], wU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], sU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], gU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], CU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], VU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], OU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], cU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], JU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], nU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], SU = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], bA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], aA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], UA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], AA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], MA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], TA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], EA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], YA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], BA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], eA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], vA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], LA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], PA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], XA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], jA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], RA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], kA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], yA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], ZA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], DA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], zA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], xA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], iA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], fA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], mA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], pA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], NA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], WA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], HA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], IA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], dA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], FA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], hA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], GA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], QA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], qA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], uA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], rA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], KA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], oA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], lA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], tA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], wA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], sA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], gA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], CA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], VA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], OA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], cA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], JA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], nA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], SA = [(0, Nb.d)("_markAllSubMeshesAsTexturesDirty")], bM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], aM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], UM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], AM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], MM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], TM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], EM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], YM = [(0, Nb.K)()], BM = [(0, Nb.K)()], eM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], vM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], LM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], PM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], XM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsLightsDirty")], jM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], RM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsLightsDirty")], kM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], yM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], ZM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], DM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], zM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], xM = [(0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], iM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], fM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], mM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], pM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], NM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], WM = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], HM = [(0, Nb.e)("_markAllSubMeshesAsMiscDirty")], IM = [(0, Nb.K)()], (0, pb.h)(bb, null, IU, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseWeight" in bb,
              get: bb => bb.baseWeight,
              set: (bb, ab) => {
                bb.baseWeight = ab
              }
            },
            metadata: ab
          }, hM, GM), (0, pb.h)(bb, null, dU, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseWeightTexture" in bb,
              get: bb => bb.baseWeightTexture,
              set: (bb, ab) => {
                bb.baseWeightTexture = ab
              }
            },
            metadata: ab
          }, QM, qM), (0, pb.h)(bb, null, FU, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseColor" in bb,
              get: bb => bb.baseColor,
              set: (bb, ab) => {
                bb.baseColor = ab
              }
            },
            metadata: ab
          }, uM, rM), (0, pb.h)(bb, null, hU, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseColorTexture" in bb,
              get: bb => bb.baseColorTexture,
              set: (bb, ab) => {
                bb.baseColorTexture = ab
              }
            },
            metadata: ab
          }, KM, oM), (0, pb.h)(bb, null, GU, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseDiffuseRoughness" in bb,
              get: bb => bb.baseDiffuseRoughness,
              set: (bb, ab) => {
                bb.baseDiffuseRoughness = ab
              }
            },
            metadata: ab
          }, lM, tM), (0, pb.h)(bb, null, QU, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseDiffuseRoughnessTexture" in bb,
              get: bb => bb.baseDiffuseRoughnessTexture,
              set: (bb, ab) => {
                bb.baseDiffuseRoughnessTexture = ab
              }
            },
            metadata: ab
          }, wM, sM), (0, pb.h)(bb, null, qU, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseMetalness" in bb,
              get: bb => bb.baseMetalness,
              set: (bb, ab) => {
                bb.baseMetalness = ab
              }
            },
            metadata: ab
          }, gM, CM), (0, pb.h)(bb, null, uU, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "baseMetalnessTexture" in bb,
              get: bb => bb.baseMetalnessTexture,
              set: (bb, ab) => {
                bb.baseMetalnessTexture = ab
              }
            },
            metadata: ab
          }, VM, OM), (0, pb.h)(bb, null, rU, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularWeight" in bb,
              get: bb => bb.specularWeight,
              set: (bb, ab) => {
                bb.specularWeight = ab
              }
            },
            metadata: ab
          }, cM, JM), (0, pb.h)(bb, null, KU, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularWeightTexture" in bb,
              get: bb => bb.specularWeightTexture,
              set: (bb, ab) => {
                bb.specularWeightTexture = ab
              }
            },
            metadata: ab
          }, nM, SM), (0, pb.h)(bb, null, oU, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularColor" in bb,
              get: bb => bb.specularColor,
              set: (bb, ab) => {
                bb.specularColor = ab
              }
            },
            metadata: ab
          }, bT, aT), (0, pb.h)(bb, null, lU, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularColorTexture" in bb,
              get: bb => bb.specularColorTexture,
              set: (bb, ab) => {
                bb.specularColorTexture = ab
              }
            },
            metadata: ab
          }, UT, AT), (0, pb.h)(bb, null, tU, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughness" in bb,
              get: bb => bb.specularRoughness,
              set: (bb, ab) => {
                bb.specularRoughness = ab
              }
            },
            metadata: ab
          }, MT, TT), (0, pb.h)(bb, null, wU, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughnessTexture" in bb,
              get: bb => bb.specularRoughnessTexture,
              set: (bb, ab) => {
                bb.specularRoughnessTexture = ab
              }
            },
            metadata: ab
          }, ET, YT), (0, pb.h)(bb, null, sU, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughnessAnisotropy" in bb,
              get: bb => bb.specularRoughnessAnisotropy,
              set: (bb, ab) => {
                bb.specularRoughnessAnisotropy = ab
              }
            },
            metadata: ab
          }, BT, eT), (0, pb.h)(bb, null, gU, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularRoughnessAnisotropyTexture" in bb,
              get: bb => bb.specularRoughnessAnisotropyTexture,
              set: (bb, ab) => {
                bb.specularRoughnessAnisotropyTexture = ab
              }
            },
            metadata: ab
          }, vT, LT), (0, pb.h)(bb, null, CU, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularIor" in bb,
              get: bb => bb.specularIor,
              set: (bb, ab) => {
                bb.specularIor = ab
              }
            },
            metadata: ab
          }, PT, XT), (0, pb.h)(bb, null, VU, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionWeight" in bb,
              get: bb => bb.transmissionWeight,
              set: (bb, ab) => {
                bb.transmissionWeight = ab
              }
            },
            metadata: ab
          }, jT, RT), (0, pb.h)(bb, null, OU, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionWeightTexture" in bb,
              get: bb => bb.transmissionWeightTexture,
              set: (bb, ab) => {
                bb.transmissionWeightTexture = ab
              }
            },
            metadata: ab
          }, kT, yT), (0, pb.h)(bb, null, cU, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionColor" in bb,
              get: bb => bb.transmissionColor,
              set: (bb, ab) => {
                bb.transmissionColor = ab
              }
            },
            metadata: ab
          }, ZT, DT), (0, pb.h)(bb, null, JU, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionColorTexture" in bb,
              get: bb => bb.transmissionColorTexture,
              set: (bb, ab) => {
                bb.transmissionColorTexture = ab
              }
            },
            metadata: ab
          }, zT, xT), (0, pb.h)(bb, null, nU, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDepth" in bb,
              get: bb => bb.transmissionDepth,
              set: (bb, ab) => {
                bb.transmissionDepth = ab
              }
            },
            metadata: ab
          }, iT, fT), (0, pb.h)(bb, null, SU, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDepthTexture" in bb,
              get: bb => bb.transmissionDepthTexture,
              set: (bb, ab) => {
                bb.transmissionDepthTexture = ab
              }
            },
            metadata: ab
          }, mT, pT), (0, pb.h)(bb, null, bA, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionScatter" in bb,
              get: bb => bb.transmissionScatter,
              set: (bb, ab) => {
                bb.transmissionScatter = ab
              }
            },
            metadata: ab
          }, NT, WT), (0, pb.h)(bb, null, aA, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionScatterTexture" in bb,
              get: bb => bb.transmissionScatterTexture,
              set: (bb, ab) => {
                bb.transmissionScatterTexture = ab
              }
            },
            metadata: ab
          }, HT, IT), (0, pb.h)(bb, null, UA, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionScatterAnisotropy" in bb,
              get: bb => bb.transmissionScatterAnisotropy,
              set: (bb, ab) => {
                bb.transmissionScatterAnisotropy = ab
              }
            },
            metadata: ab
          }, dT, FT), (0, pb.h)(bb, null, AA, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDispersionScale" in bb,
              get: bb => bb.transmissionDispersionScale,
              set: (bb, ab) => {
                bb.transmissionDispersionScale = ab
              }
            },
            metadata: ab
          }, hT, GT), (0, pb.h)(bb, null, MA, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDispersionScaleTexture" in bb,
              get: bb => bb.transmissionDispersionScaleTexture,
              set: (bb, ab) => {
                bb.transmissionDispersionScaleTexture = ab
              }
            },
            metadata: ab
          }, QT, qT), (0, pb.h)(bb, null, TA, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: bb => "transmissionDispersionAbbeNumber" in bb,
              get: bb => bb.transmissionDispersionAbbeNumber,
              set: (bb, ab) => {
                bb.transmissionDispersionAbbeNumber = ab
              }
            },
            metadata: ab
          }, uT, rT), (0, pb.h)(bb, null, EA, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceWeight" in bb,
              get: bb => bb.subsurfaceWeight,
              set: (bb, ab) => {
                bb.subsurfaceWeight = ab
              }
            },
            metadata: ab
          }, KT, oT), (0, pb.h)(bb, null, YA, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceWeightTexture" in bb,
              get: bb => bb.subsurfaceWeightTexture,
              set: (bb, ab) => {
                bb.subsurfaceWeightTexture = ab
              }
            },
            metadata: ab
          }, lT, tT), (0, pb.h)(bb, null, BA, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceColor" in bb,
              get: bb => bb.subsurfaceColor,
              set: (bb, ab) => {
                bb.subsurfaceColor = ab
              }
            },
            metadata: ab
          }, wT, sT), (0, pb.h)(bb, null, eA, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceColorTexture" in bb,
              get: bb => bb.subsurfaceColorTexture,
              set: (bb, ab) => {
                bb.subsurfaceColorTexture = ab
              }
            },
            metadata: ab
          }, gT, CT), (0, pb.h)(bb, null, vA, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceRadius" in bb,
              get: bb => bb.subsurfaceRadius,
              set: (bb, ab) => {
                bb.subsurfaceRadius = ab
              }
            },
            metadata: ab
          }, VT, OT), (0, pb.h)(bb, null, LA, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceRadiusScale" in bb,
              get: bb => bb.subsurfaceRadiusScale,
              set: (bb, ab) => {
                bb.subsurfaceRadiusScale = ab
              }
            },
            metadata: ab
          }, cT, JT), (0, pb.h)(bb, null, PA, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceRadiusScaleTexture" in bb,
              get: bb => bb.subsurfaceRadiusScaleTexture,
              set: (bb, ab) => {
                bb.subsurfaceRadiusScaleTexture = ab
              }
            },
            metadata: ab
          }, nT, ST), (0, pb.h)(bb, null, XA, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "subsurfaceScatterAnisotropy" in bb,
              get: bb => bb.subsurfaceScatterAnisotropy,
              set: (bb, ab) => {
                bb.subsurfaceScatterAnisotropy = ab
              }
            },
            metadata: ab
          }, bE, aE), (0, pb.h)(bb, null, jA, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatWeight" in bb,
              get: bb => bb.coatWeight,
              set: (bb, ab) => {
                bb.coatWeight = ab
              }
            },
            metadata: ab
          }, UE, AE), (0, pb.h)(bb, null, RA, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatWeightTexture" in bb,
              get: bb => bb.coatWeightTexture,
              set: (bb, ab) => {
                bb.coatWeightTexture = ab
              }
            },
            metadata: ab
          }, ME, TE), (0, pb.h)(bb, null, kA, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatColor" in bb,
              get: bb => bb.coatColor,
              set: (bb, ab) => {
                bb.coatColor = ab
              }
            },
            metadata: ab
          }, EE, YE), (0, pb.h)(bb, null, yA, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatColorTexture" in bb,
              get: bb => bb.coatColorTexture,
              set: (bb, ab) => {
                bb.coatColorTexture = ab
              }
            },
            metadata: ab
          }, BE, eE), (0, pb.h)(bb, null, ZA, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughness" in bb,
              get: bb => bb.coatRoughness,
              set: (bb, ab) => {
                bb.coatRoughness = ab
              }
            },
            metadata: ab
          }, vE, LE), (0, pb.h)(bb, null, DA, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughnessTexture" in bb,
              get: bb => bb.coatRoughnessTexture,
              set: (bb, ab) => {
                bb.coatRoughnessTexture = ab
              }
            },
            metadata: ab
          }, PE, XE), (0, pb.h)(bb, null, zA, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughnessAnisotropy" in bb,
              get: bb => bb.coatRoughnessAnisotropy,
              set: (bb, ab) => {
                bb.coatRoughnessAnisotropy = ab
              }
            },
            metadata: ab
          }, jE, RE), (0, pb.h)(bb, null, xA, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatRoughnessAnisotropyTexture" in bb,
              get: bb => bb.coatRoughnessAnisotropyTexture,
              set: (bb, ab) => {
                bb.coatRoughnessAnisotropyTexture = ab
              }
            },
            metadata: ab
          }, kE, yE), (0, pb.h)(bb, null, iA, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatIor" in bb,
              get: bb => bb.coatIor,
              set: (bb, ab) => {
                bb.coatIor = ab
              }
            },
            metadata: ab
          }, ZE, DE), (0, pb.h)(bb, null, fA, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatDarkening" in bb,
              get: bb => bb.coatDarkening,
              set: (bb, ab) => {
                bb.coatDarkening = ab
              }
            },
            metadata: ab
          }, zE, xE), (0, pb.h)(bb, null, mA, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "coatDarkeningTexture" in bb,
              get: bb => bb.coatDarkeningTexture,
              set: (bb, ab) => {
                bb.coatDarkeningTexture = ab
              }
            },
            metadata: ab
          }, iE, fE), (0, pb.h)(bb, null, pA, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzWeight" in bb,
              get: bb => bb.fuzzWeight,
              set: (bb, ab) => {
                bb.fuzzWeight = ab
              }
            },
            metadata: ab
          }, mE, pE), (0, pb.h)(bb, null, NA, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzWeightTexture" in bb,
              get: bb => bb.fuzzWeightTexture,
              set: (bb, ab) => {
                bb.fuzzWeightTexture = ab
              }
            },
            metadata: ab
          }, NE, WE), (0, pb.h)(bb, null, WA, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzColor" in bb,
              get: bb => bb.fuzzColor,
              set: (bb, ab) => {
                bb.fuzzColor = ab
              }
            },
            metadata: ab
          }, HE, IE), (0, pb.h)(bb, null, HA, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzColorTexture" in bb,
              get: bb => bb.fuzzColorTexture,
              set: (bb, ab) => {
                bb.fuzzColorTexture = ab
              }
            },
            metadata: ab
          }, dE, FE), (0, pb.h)(bb, null, IA, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzRoughness" in bb,
              get: bb => bb.fuzzRoughness,
              set: (bb, ab) => {
                bb.fuzzRoughness = ab
              }
            },
            metadata: ab
          }, hE, GE), (0, pb.h)(bb, null, dA, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "fuzzRoughnessTexture" in bb,
              get: bb => bb.fuzzRoughnessTexture,
              set: (bb, ab) => {
                bb.fuzzRoughnessTexture = ab
              }
            },
            metadata: ab
          }, QE, qE), (0, pb.h)(bb, null, FA, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryThinWalled" in bb,
              get: bb => bb.geometryThinWalled,
              set: (bb, ab) => {
                bb.geometryThinWalled = ab
              }
            },
            metadata: ab
          }, uE, rE), (0, pb.h)(bb, null, hA, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryNormalTexture" in bb,
              get: bb => bb.geometryNormalTexture,
              set: (bb, ab) => {
                bb.geometryNormalTexture = ab
              }
            },
            metadata: ab
          }, KE, oE), (0, pb.h)(bb, null, GA, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryTangent" in bb,
              get: bb => bb.geometryTangent,
              set: (bb, ab) => {
                bb.geometryTangent = ab
              }
            },
            metadata: ab
          }, lE, tE), (0, pb.h)(bb, null, QA, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryTangentTexture" in bb,
              get: bb => bb.geometryTangentTexture,
              set: (bb, ab) => {
                bb.geometryTangentTexture = ab
              }
            },
            metadata: ab
          }, wE, sE), (0, pb.h)(bb, null, qA, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryCoatNormalTexture" in bb,
              get: bb => bb.geometryCoatNormalTexture,
              set: (bb, ab) => {
                bb.geometryCoatNormalTexture = ab
              }
            },
            metadata: ab
          }, gE, CE), (0, pb.h)(bb, null, uA, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryCoatTangent" in bb,
              get: bb => bb.geometryCoatTangent,
              set: (bb, ab) => {
                bb.geometryCoatTangent = ab
              }
            },
            metadata: ab
          }, VE, OE), (0, pb.h)(bb, null, rA, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryCoatTangentTexture" in bb,
              get: bb => bb.geometryCoatTangentTexture,
              set: (bb, ab) => {
                bb.geometryCoatTangentTexture = ab
              }
            },
            metadata: ab
          }, cE, JE), (0, pb.h)(bb, null, KA, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryOpacity" in bb,
              get: bb => bb.geometryOpacity,
              set: (bb, ab) => {
                bb.geometryOpacity = ab
              }
            },
            metadata: ab
          }, nE, SE), (0, pb.h)(bb, null, oA, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryOpacityTexture" in bb,
              get: bb => bb.geometryOpacityTexture,
              set: (bb, ab) => {
                bb.geometryOpacityTexture = ab
              }
            },
            metadata: ab
          }, bY, aY), (0, pb.h)(bb, null, lA, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryThickness" in bb,
              get: bb => bb.geometryThickness,
              set: (bb, ab) => {
                bb.geometryThickness = ab
              }
            },
            metadata: ab
          }, UY, AY), (0, pb.h)(bb, null, tA, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "geometryThicknessTexture" in bb,
              get: bb => bb.geometryThicknessTexture,
              set: (bb, ab) => {
                bb.geometryThicknessTexture = ab
              }
            },
            metadata: ab
          }, MY, TY), (0, pb.h)(bb, null, wA, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissionLuminance" in bb,
              get: bb => bb.emissionLuminance,
              set: (bb, ab) => {
                bb.emissionLuminance = ab
              }
            },
            metadata: ab
          }, EY, YY), (0, pb.h)(bb, null, sA, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissionColor" in bb,
              get: bb => bb.emissionColor,
              set: (bb, ab) => {
                bb.emissionColor = ab
              }
            },
            metadata: ab
          }, BY, eY), (0, pb.h)(bb, null, gA, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissionColorTexture" in bb,
              get: bb => bb.emissionColorTexture,
              set: (bb, ab) => {
                bb.emissionColorTexture = ab
              }
            },
            metadata: ab
          }, vY, LY), (0, pb.h)(bb, null, CA, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmWeight" in bb,
              get: bb => bb.thinFilmWeight,
              set: (bb, ab) => {
                bb.thinFilmWeight = ab
              }
            },
            metadata: ab
          }, PY, XY), (0, pb.h)(bb, null, VA, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmWeightTexture" in bb,
              get: bb => bb.thinFilmWeightTexture,
              set: (bb, ab) => {
                bb.thinFilmWeightTexture = ab
              }
            },
            metadata: ab
          }, jY, RY), (0, pb.h)(bb, null, OA, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmThickness" in bb,
              get: bb => bb.thinFilmThickness,
              set: (bb, ab) => {
                bb.thinFilmThickness = ab
              }
            },
            metadata: ab
          }, kY, yY), (0, pb.h)(bb, null, cA, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmThicknessMin" in bb,
              get: bb => bb.thinFilmThicknessMin,
              set: (bb, ab) => {
                bb.thinFilmThicknessMin = ab
              }
            },
            metadata: ab
          }, ZY, DY), (0, pb.h)(bb, null, JA, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmThicknessTexture" in bb,
              get: bb => bb.thinFilmThicknessTexture,
              set: (bb, ab) => {
                bb.thinFilmThicknessTexture = ab
              }
            },
            metadata: ab
          }, zY, xY), (0, pb.h)(bb, null, nA, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: bb => "thinFilmIor" in bb,
              get: bb => bb.thinFilmIor,
              set: (bb, ab) => {
                bb.thinFilmIor = ab
              }
            },
            metadata: ab
          }, iY, fY), (0, pb.h)(bb, null, SA, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "ambientOcclusionTexture" in bb,
              get: bb => bb.ambientOcclusionTexture,
              set: (bb, ab) => {
                bb.ambientOcclusionTexture = ab
              }
            },
            metadata: ab
          }, mY, pY), (0, pb.h)(bb, null, bM, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: bb => "directIntensity" in bb,
              get: bb => bb.directIntensity,
              set: (bb, ab) => {
                bb.directIntensity = ab
              }
            },
            metadata: ab
          }, NY, WY), (0, pb.h)(bb, null, aM, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: bb => "environmentIntensity" in bb,
              get: bb => bb.environmentIntensity,
              set: (bb, ab) => {
                bb.environmentIntensity = ab
              }
            },
            metadata: ab
          }, HY, IY), (0, pb.h)(bb, null, UM, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useSpecularWeightFromTextureAlpha" in bb,
              get: bb => bb.useSpecularWeightFromTextureAlpha,
              set: (bb, ab) => {
                bb.useSpecularWeightFromTextureAlpha = ab
              }
            },
            metadata: ab
          }, dY, FY), (0, pb.h)(bb, null, AM, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceAlphaTest" in bb,
              get: bb => bb.forceAlphaTest,
              set: (bb, ab) => {
                bb.forceAlphaTest = ab
              }
            },
            metadata: ab
          }, hY, GY), (0, pb.h)(bb, null, MM, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaCutOff" in bb,
              get: bb => bb.alphaCutOff,
              set: (bb, ab) => {
                bb.alphaCutOff = ab
              }
            },
            metadata: ab
          }, QY, qY), (0, pb.h)(bb, null, TM, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAmbientOcclusionFromMetallicTextureRed" in bb,
              get: bb => bb.useAmbientOcclusionFromMetallicTextureRed,
              set: (bb, ab) => {
                bb.useAmbientOcclusionFromMetallicTextureRed = ab
              }
            },
            metadata: ab
          }, uY, rY), (0, pb.h)(bb, null, EM, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAmbientInGrayScale" in bb,
              get: bb => bb.useAmbientInGrayScale,
              set: (bb, ab) => {
                bb.useAmbientInGrayScale = ab
              }
            },
            metadata: ab
          }, KY, oY), (0, pb.h)(bb, null, YM, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: bb => "usePhysicalLightFalloff" in bb,
              get: bb => bb.usePhysicalLightFalloff
            },
            metadata: ab
          }, null, FM), (0, pb.h)(bb, null, BM, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: bb => "useGLTFLightFalloff" in bb,
              get: bb => bb.useGLTFLightFalloff
            },
            metadata: ab
          }, null, FM), (0, pb.h)(bb, null, eM, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "useObjectSpaceNormalMap" in bb,
              get: bb => bb.useObjectSpaceNormalMap,
              set: (bb, ab) => {
                bb.useObjectSpaceNormalMap = ab
              }
            },
            metadata: ab
          }, lY, tY), (0, pb.h)(bb, null, vM, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallax" in bb,
              get: bb => bb.useParallax,
              set: (bb, ab) => {
                bb.useParallax = ab
              }
            },
            metadata: ab
          }, wY, sY), (0, pb.h)(bb, null, LM, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallaxOcclusion" in bb,
              get: bb => bb.useParallaxOcclusion,
              set: (bb, ab) => {
                bb.useParallaxOcclusion = ab
              }
            },
            metadata: ab
          }, gY, CY), (0, pb.h)(bb, null, PM, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: bb => "parallaxScaleBias" in bb,
              get: bb => bb.parallaxScaleBias,
              set: (bb, ab) => {
                bb.parallaxScaleBias = ab
              }
            },
            metadata: ab
          }, VY, OY), (0, pb.h)(bb, null, XM, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "disableLighting" in bb,
              get: bb => bb.disableLighting,
              set: (bb, ab) => {
                bb.disableLighting = ab
              }
            },
            metadata: ab
          }, cY, JY), (0, pb.h)(bb, null, jM, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceIrradianceInFragment" in bb,
              get: bb => bb.forceIrradianceInFragment,
              set: (bb, ab) => {
                bb.forceIrradianceInFragment = ab
              }
            },
            metadata: ab
          }, nY, SY), (0, pb.h)(bb, null, RM, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: bb => "maxSimultaneousLights" in bb,
              get: bb => bb.maxSimultaneousLights,
              set: (bb, ab) => {
                bb.maxSimultaneousLights = ab
              }
            },
            metadata: ab
          }, bB, aB), (0, pb.h)(bb, null, kM, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapX" in bb,
              get: bb => bb.invertNormalMapX,
              set: (bb, ab) => {
                bb.invertNormalMapX = ab
              }
            },
            metadata: ab
          }, UB, AB), (0, pb.h)(bb, null, yM, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapY" in bb,
              get: bb => bb.invertNormalMapY,
              set: (bb, ab) => {
                bb.invertNormalMapY = ab
              }
            },
            metadata: ab
          }, MB, TB), (0, pb.h)(bb, null, ZM, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "twoSidedLighting" in bb,
              get: bb => bb.twoSidedLighting,
              set: (bb, ab) => {
                bb.twoSidedLighting = ab
              }
            },
            metadata: ab
          }, EB, YB), (0, pb.h)(bb, null, DM, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAlphaFresnel" in bb,
              get: bb => bb.useAlphaFresnel,
              set: (bb, ab) => {
                bb.useAlphaFresnel = ab
              }
            },
            metadata: ab
          }, BB, eB), (0, pb.h)(bb, null, zM, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: bb => "useLinearAlphaFresnel" in bb,
              get: bb => bb.useLinearAlphaFresnel,
              set: (bb, ab) => {
                bb.useLinearAlphaFresnel = ab
              }
            },
            metadata: ab
          }, vB, LB), (0, pb.h)(bb, null, xM, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "environmentBRDFTexture" in bb,
              get: bb => bb.environmentBRDFTexture,
              set: (bb, ab) => {
                bb.environmentBRDFTexture = ab
              }
            },
            metadata: ab
          }, PB, XB), (0, pb.h)(bb, null, iM, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: bb => "forceNormalForward" in bb,
              get: bb => bb.forceNormalForward,
              set: (bb, ab) => {
                bb.forceNormalForward = ab
              }
            },
            metadata: ab
          }, jB, RB), (0, pb.h)(bb, null, fM, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: bb => "enableSpecularAntiAliasing" in bb,
              get: bb => bb.enableSpecularAntiAliasing,
              set: (bb, ab) => {
                bb.enableSpecularAntiAliasing = ab
              }
            },
            metadata: ab
          }, kB, yB), (0, pb.h)(bb, null, mM, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useHorizonOcclusion" in bb,
              get: bb => bb.useHorizonOcclusion,
              set: (bb, ab) => {
                bb.useHorizonOcclusion = ab
              }
            },
            metadata: ab
          }, ZB, DB), (0, pb.h)(bb, null, pM, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useRadianceOcclusion" in bb,
              get: bb => bb.useRadianceOcclusion,
              set: (bb, ab) => {
                bb.useRadianceOcclusion = ab
              }
            },
            metadata: ab
          }, zB, xB), (0, pb.h)(bb, null, NM, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: bb => "unlit" in bb,
              get: bb => bb.unlit,
              set: (bb, ab) => {
                bb.unlit = ab
              }
            },
            metadata: ab
          }, iB, fB), (0, pb.h)(bb, null, WM, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "applyDecalMapAfterDetailMap" in bb,
              get: bb => bb.applyDecalMapAfterDetailMap,
              set: (bb, ab) => {
                bb.applyDecalMapAfterDetailMap = ab
              }
            },
            metadata: ab
          }, mB, pB), (0, pb.h)(bb, null, HM, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "debugMode" in bb,
              get: bb => bb.debugMode,
              set: (bb, ab) => {
                bb.debugMode = ab
              }
            },
            metadata: ab
          }, NB, WB), (0, pb.h)(bb, null, IM, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "transparencyMode" in bb,
              get: bb => bb.transparencyMode
            },
            metadata: ab
          }, null, FM), ab && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          })
        })(), bb.SSS_QUALITY_LOW = 0, bb.SSS_QUALITY_MEDIUM = 1, bb.SSS_QUALITY_HIGH = 2, bb._noiseTextures = {}, bb.ForceGLSL = !1, bb._ShaderLoader = new Pa.e((() => [Promise.all([Ub.e(307), Ub.e(373)]).then((() => Ub(60882))), Promise.all([Ub.e(312), Ub.e(308), Ub.e(372), Ub.e(377)]).then((() => Ub(60897)))]), (() => [Promise.all([Ub.e(326), Ub.e(328), Ub.e(376)]).then((() => Ub(60931))), Promise.all([Ub.e(326), Ub.e(329), Ub.e(375), Ub.e(378)]).then((() => Ub(60941)))])), bb
      })(),
      Sa = !1;
    Sa || (Sa = !0, (0, Vb.h)(), (0, la.f)("BABYLON.OpenPBRMaterial", na));
    var bU = Ub(36431);
    class aU {
      constructor(bb) {
        this.name = Ga.b.NAME_PROCEDURALTEXTURE, this.ZR = bb
      }
      register() {
        this.ZR._beforeClearStage.registerStep(Ga.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.ZR.proceduralTexturesEnabled) {
          ma.h.StartPerformanceCounter("Procedural textures", this.ZR.proceduralTextures.length > 0);
          for (let bb = 0; bb < this.ZR.proceduralTextures.length; bb++) {
            const ab = this.ZR.proceduralTextures[bb];
            ab._shouldRender() && ab.render()
          }
          ma.h.EndPerformanceCounter("Procedural textures", this.ZR.proceduralTextures.length > 0)
        }
      }
    }
    var UU = Ub(39425);
    let AU = (() => {
      var bb;
      let ab, Ab, Mb, Eb, Yb, Bb = Ib.e,
        eb = [],
        vb = [],
        Lb = [],
        Pb = [],
        Xb = [],
        jb = [],
        kb = [],
        yb = [],
        Zb = [];
      return bb = class extends Bb {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(bb, ab, Ub, Ab) {
          let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            Eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Ab, !Tb), this.isEnabled = ((0, pb.k)(this, eb), (0, pb.k)(this, vb, !0)), this.autoClear = ((0, pb.k)(this, Lb), (0, pb.k)(this, Pb, !0)), this.onGenerated = (0, pb.k)(this, Xb), this.onGeneratedObservable = new bU.b, this.onBeforeGenerationObservable = new bU.b, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, pb.k)(this, jb, void 0), this._drawWrapper = (0, pb.k)(this, kb), this._textures = {}, this._size = (0, pb.k)(this, yb, void 0), this._textureType = (0, pb.k)(this, Zb), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Mb || Mb instanceof Ib.e ? (this._options = {}, this._fallbackTexture = Mb) : (this._options = Mb, this._fallbackTexture = Mb.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let Bb = (Ab = this.oN() || Rb.d.LastCreatedScene)._getComponent(Ga.b.NAME_PROCEDURALTEXTURE);
          Bb || (Bb = new aU(Ab), Ab.iUb(Bb)), this._options.skipSceneRegistration || Ab.proceduralTextures.push(this), this._fullEngine = Ab.vj(), this.name = bb, this.isRenderTarget = !0, this._size = ab, this._textureType = Yb, this._generateMipMaps = Tb, this._drawWrapper = new UU.b(this._fullEngine), this.setFragment(Ub);
          const Db = this._createRtWrapper(Eb, ab, Tb, Yb);
          this._texture = Db.texture;
          const zb = [];
          zb.push(1, 1), zb.push(-1, 1), zb.push(-1, -1), zb.push(1, -1), this._vertexBuffers[Kb.m.PositionKind] = new Kb.m(this._fullEngine, zb, Kb.m.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(bb, ab, Ub, Ab) {
          return bb ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(ab, {
            generateMipMaps: Ub,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Ab,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(ab, {
            generateMipMaps: Ub,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Ab,
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
            ab = [];
          ab.push(0), ab.push(1), ab.push(2), ab.push(0), ab.push(2), ab.push(3), this._indexBuffer = bb.createIndexBuffer(ab)
        }
        _rebuild() {
          const bb = this._vertexBuffers[Kb.m.PositionKind];
          bb && bb._rebuild(), this._createIndexBuffer(), this.refreshRate === pa.b.REFRESHRATE_RENDER_ONCE && (this.refreshRate = pa.b.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(bb) {
          if (this.isReady()) return void bb(this);
          const ab = this.getEffect();
          ab && ab.executeWhenCompiled((() => {
            bb(this)
          }))
        }
        isReady() {
          const bb = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const ab = this._getDefines();
          if (this._drawWrapper.effect && ab === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Ab = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== ab && (this._cachedDefines = ab, this._drawWrapper.effect = bb.createEffect(Ab, [Kb.m.PositionKind], this._uniforms, this._samplers, ab, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([Ub.e(381).then((() => Ub(61008))), this._options.extraInitializationsAsync()]) : await Promise.all([Ub.e(382).then((() => Ub(61014))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await Ub.e(381).then((() => Ub(61008))) : await Ub.e(382).then((() => Ub(61014)))
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
        resize(bb, ab) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const Ub = this._texture.isCube;
          this._rtWrapper.dispose();
          const Ab = this._createRtWrapper(Ub, bb, ab, this._textureType);
          this._texture = Ab.texture, this._size = bb, this._generateMipMaps = ab
        }
        _checkUniform(bb) {
          -1 === this._uniforms.indexOf(bb) && this._uniforms.push(bb)
        }
        setTexture(bb, ab) {
          return -1 === this._samplers.indexOf(bb) && this._samplers.push(bb), this._textures[bb] = ab, this
        }
        setFloat(bb, ab) {
          return this._checkUniform(bb), this._floats[bb] = ab, this
        }
        setInt(bb, ab) {
          return this._checkUniform(bb), this._ints[bb] = ab, this
        }
        setFloats(bb, ab) {
          return this._checkUniform(bb), this._floatsArrays[bb] = ab, this
        }
        setColor3(bb, ab) {
          return this._checkUniform(bb), this._colors3[bb] = ab, this
        }
        setColor4(bb, ab) {
          return this._checkUniform(bb), this._colors4[bb] = ab, this
        }
        setVector2(bb, ab) {
          return this._checkUniform(bb), this._vectors2[bb] = ab, this
        }
        setVector3(bb, ab) {
          return this._checkUniform(bb), this._vectors3[bb] = ab, this
        }
        setVector4(bb, ab) {
          return this._checkUniform(bb), this._vectors4[bb] = ab, this
        }
        setMatrix(bb, ab) {
          return this._checkUniform(bb), this._matrices[bb] = ab, this
        }
        render(bb) {
          const ab = this.oN();
          if (!ab) return;
          const Ub = this._fullEngine;
          if (Ub.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), Ub.setState(!1), !this.nodeMaterialSource) {
            for (const bb in this._textures) this._drawWrapper.effect.setTexture(bb, this._textures[bb]);
            for (const bb in this._ints) this._drawWrapper.effect.setInt(bb, this._ints[bb]);
            for (const bb in this._floats) this._drawWrapper.effect.setFloat(bb, this._floats[bb]);
            for (const bb in this._floatsArrays) this._drawWrapper.effect.setArray(bb, this._floatsArrays[bb]);
            for (const bb in this._colors3) this._drawWrapper.effect.setColor3(bb, this._colors3[bb]);
            for (const bb in this._colors4) {
              const ab = this._colors4[bb];
              this._drawWrapper.effect.setFloat4(bb, ab.r, ab.g, ab.b, ab.a)
            }
            for (const bb in this._vectors2) this._drawWrapper.effect.setVector2(bb, this._vectors2[bb]);
            for (const bb in this._vectors3) this._drawWrapper.effect.setVector3(bb, this._vectors3[bb]);
            for (const bb in this._vectors4) this._drawWrapper.effect.setVector4(bb, this._vectors4[bb]);
            for (const bb in this._matrices) this._drawWrapper.effect.setMatrix(bb, this._matrices[bb])
          }
          if (!this._texture || !this._rtWrapper) return;
          Ub._enableGPUDebugMarkers && Ub._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Ab = Ub.currentViewport;
          if (this.isCube)
            for (let Mb = 0; Mb < 6; Mb++) Ub.bindFramebuffer(this._rtWrapper, Mb, void 0, void 0, !0), Ub.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Mb), this.autoClear && Ub.clear(ab.clearColor, !0, !1, !1), Ub.drawElementsType(Tb.d.TriangleFillMode, 0, 6), Ub.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let bb = 1;
            this._rtWrapper.is3D ? bb = this._rtWrapper.depth : this._rtWrapper.is2DArray && (bb = this._rtWrapper.layers);
            for (let Ab = 0; Ab < bb; Ab++) {
              if (Ub.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Ab), Ub.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== bb ? Ab / (bb - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Ab);
                for (const bb in this._textures) this._drawWrapper.effect.setTexture(bb, this._textures[bb])
              }
              this.autoClear && Ub.clear(ab.clearColor, !0, !1, !1), Ub.drawElementsType(Tb.d.TriangleFillMode, 0, 6), Ub.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Ab && Ub.setViewport(Ab), this.isCube && Ub.generateMipMapsForCubemap(this._texture, !0), Ub._enableGPUDebugMarkers && Ub._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const ab = this.getSize(),
            Ub = new bb(this.name, ab.width, this._fragment, this.oN(), this._fallbackTexture, this._generateMipMaps);
          return Ub.hasAlpha = this.hasAlpha, Ub.level = this.level, Ub.coordinatesMode = this.coordinatesMode, Ub
        }
        dispose() {
          const bb = this.oN();
          if (!bb) return;
          const ab = bb.proceduralTextures.indexOf(this);
          ab >= 0 && bb.proceduralTextures.splice(ab, 1);
          const Ub = this._vertexBuffers[Kb.m.PositionKind];
          Ub && (Ub.dispose(), this._vertexBuffers[Kb.m.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const Ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bb[Symbol.metadata] ?? null) : void 0;
        ab = [(0, Nb.K)()], Ab = [(0, Nb.K)()], Mb = [(0, Nb.K)()], Eb = [(0, Nb.K)()], Yb = [(0, Nb.K)()], (0, pb.h)(bb, null, Yb, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: bb => "refreshRate" in bb,
            get: bb => bb.refreshRate
          },
          metadata: Ub
        }, null, eb), (0, pb.h)(null, null, ab, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, ab) => {
              bb.isEnabled = ab
            }
          },
          metadata: Ub
        }, vb, Lb), (0, pb.h)(null, null, Ab, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: bb => "autoClear" in bb,
            get: bb => bb.autoClear,
            set: (bb, ab) => {
              bb.autoClear = ab
            }
          },
          metadata: Ub
        }, Pb, Xb), (0, pb.h)(null, null, Mb, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: bb => "_generateMipMaps" in bb,
            get: bb => bb._generateMipMaps,
            set: (bb, ab) => {
              bb._generateMipMaps = ab
            }
          },
          metadata: Ub
        }, jb, kb), (0, pb.h)(null, null, Eb, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: bb => "_size" in bb,
            get: bb => bb._size,
            set: (bb, ab) => {
              bb._size = ab
            }
          },
          metadata: Ub
        }, yb, Zb), Ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ub
        })
      })(), bb
    })();

    function MU(bb) {
      return "texture" in bb
    }

    function TU(bb) {
      return "value" in bb
    }
    async function EU(bb, ab, Ab) {
      const Mb = [ab.red, ab.green, ab.blue, ab.alpha],
        Tb = [],
        Eb = [];
      for (let Ub = 0; Ub < 4; Ub++) {
        const bb = Mb[Ub];
        if (bb)
          if (MU(bb)) {
            if (bb.sourceChannel < 0 || bb.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let ab = Tb.indexOf(bb.texture); - 1 === ab && (ab = Tb.length, Tb.push(bb.texture)), Eb[Ub] = ab
          } else {
            if (!TU(bb)) throw new Error("Invalid channel input configuration");
            if (bb.value < 0 || bb.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            Eb[Ub] = -1
          }
        else Eb[Ub] = -1
      }
      let Yb = ab.outputSize;
      if (!Yb && Tb.length > 0) {
        let bb = 0;
        for (const ab of Tb) {
          const Ub = ab.getSize(),
            Ab = Math.max(Ub.width, Ub.height);
          Ab > bb && (bb = Ab, Yb = Ub.width === Ub.height ? bb : Ub)
        }
      }
      Yb = Yb || 512;
      const Bb = [],
        eb = new Set;
      for (let Ub = 0; Ub < 4; Ub++) {
        const bb = Mb[Ub],
          ab = ["RED", "GREEN", "BLUE", "ALPHA"][Ub];
        if (bb && MU(bb)) {
          Bb.push(`${ab}_FROM_TEXTURE`);
          const bb = Eb[Ub];
          eb.add(bb)
        }
      }
      eb.forEach((bb => {
        Bb.push(`USE_TEXTURE${bb}`)
      }));
      const vb = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Ab.vj().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Ab.vj().isWebGPU ? await Promise.all([Ub.e(379).then((() => Ub(60993)))]) : await Promise.all([Ub.e(380).then((() => Ub(61e3)))])
          },
          skipSceneRegistration: !0
        },
        Lb = new AU(bb, Yb, "textureMerger", Ab, vb);
      Lb.refreshRate = -1, Lb.defines = Bb.length > 0 ? "#define " + Bb.join("\n#define ") + "\n" : "";
      for (let Ub = 0; Ub < Tb.length; Ub++) Pb = Tb[Ub], (Xb = Lb).uOffset = Pb.uOffset, Xb.vOffset = Pb.vOffset, Xb.uScale = Pb.uScale, Xb.vScale = Pb.vScale, Xb.uAng = Pb.uAng, Xb.vAng = Pb.vAng, Xb.wAng = Pb.wAng, Xb.uRotationCenter = Pb.uRotationCenter, Xb.vRotationCenter = Pb.vRotationCenter, Lb.setTexture(`inputTexture${Ub}`, Tb[Ub]);
      var Pb, Xb;
      for (let Ub = 0; Ub < 4; Ub++) {
        const bb = Mb[Ub],
          ab = ["red", "green", "blue", "alpha"][Ub];
        if (bb && MU(bb)) {
          const Ab = Eb[Ub];
          Lb.setInt(`${ab}TextureIndex`, Ab), Lb.setInt(`${ab}SourceChannel`, bb.sourceChannel)
        } else {
          let Ab;
          Ab = bb && TU(bb) ? bb.value : 3 === Ub ? 1 : 0, Lb.setFloat(`${ab}ConstantValue`, Ab)
        }
      }
      return await new Promise(((bb, ab) => {
        Lb.executeWhenReady((() => {
          try {
            Lb.render(), bb(Lb)
          } catch (Ub) {
            ab(Ub instanceof Error ? Ub : new Error(String(Ub)))
          }
        }))
      }))
    }

    function YU(bb, ab) {
      return {
        texture: bb,
        sourceChannel: ab
      }
    }

    function BU(bb) {
      return {
        value: bb
      }
    }

    function eU(bb, ab, Ub, Ab) {
      return {
        red: bb,
        green: ab,
        blue: Ub,
        alpha: Ab
      }
    }
    var vU = Ub(38906),
      LU = Ub(39030),
      PU = Ub(36418),
      XU = Ub(39084),
      jU = Ub(39021);
    class RU {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class kU extends vU.c {
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
        return !!this._options?.enableMultiview || this.oj > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new RU;
        super(null), void 0 === bb.deterministicLockstep && (bb.deterministicLockstep = !1), void 0 !== bb.timeStep && (this._timeStep = bb.timeStep), void 0 === bb.lockstepMaxSteps && (bb.lockstepMaxSteps = 4), this._options = bb, PU.b.SetMatrixPrecision(!!bb.useHighPrecisionMatrix), this._caps = {
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
        }, bb.renderingCanvas && (this._renderingCanvas = bb.renderingCanvas), Wb.e.Log(`Babylon.js v${vU.c.Version} - Null engine`);
        const ab = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (ab.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (ab.Blob = function() {})
      }
      createVertexBuffer(bb) {
        const ab = new LU.b;
        return ab.references = 1, ab
      }
      createIndexBuffer(bb) {
        const ab = new LU.b;
        return ab.references = 1, ab
      }
      clear(bb, ab, Ub) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(bb, ab, Ub) {
        this._cachedViewport = bb
      }
      createUniformBuffer(bb) {
        const ab = new LU.b;
        return ab.references = 1, ab.PL = bb instanceof Array ? bb.length * Float32Array.BYTES_PER_ELEMENT : bb.byteLength, ab
      }
      createDynamicUniformBuffer(bb) {
        return this.createUniformBuffer(bb)
      }
      updateUniformBuffer(bb, ab, Ub, Ab) {}
      bindUniformBufferBase(bb, ab, Ub) {}
      bindUniformBlock(bb, ab, Ub) {}
      createShaderProgram(bb, ab, Ub, Ab, Mb) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(bb, ab) {
        return []
      }
      getAttributes(bb, ab) {
        return []
      }
      bindSamplers(bb) {
        this._currentEffect = null
      }
      enableEffect(bb) {
        bb = null !== bb && (0, jU.c)(bb) ? bb.effect : bb, this._currentEffect = bb, bb && (bb.onBind && bb.onBind(bb), bb._onBindObservable && bb._onBindObservable.notifyObservers(bb))
      }
      setStateCullFaceType(bb, ab) {}
      setState(bb) {}
      setIntArray(bb, ab) {
        return !0
      }
      setIntArray2(bb, ab) {
        return !0
      }
      setIntArray3(bb, ab) {
        return !0
      }
      setIntArray4(bb, ab) {
        return !0
      }
      setFloatArray(bb, ab) {
        return !0
      }
      setFloatArray2(bb, ab) {
        return !0
      }
      setFloatArray3(bb, ab) {
        return !0
      }
      setFloatArray4(bb, ab) {
        return !0
      }
      setArray(bb, ab) {
        return !0
      }
      setArray2(bb, ab) {
        return !0
      }
      setArray3(bb, ab) {
        return !0
      }
      setArray4(bb, ab) {
        return !0
      }
      setMatrices(bb, ab) {
        return !0
      }
      setMatrix3x3(bb, ab) {
        return !0
      }
      setMatrix2x2(bb, ab) {
        return !0
      }
      setFloat(bb, ab) {
        return !0
      }
      setFloat2(bb, ab, Ub) {
        return !0
      }
      setFloat3(bb, ab, Ub, Ab) {
        return !0
      }
      setBool(bb, ab) {
        return !0
      }
      setFloat4(bb, ab, Ub, Ab, Mb) {
        return !0
      }
      setAlphaMode(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[Ub] !== bb && (this.alphaState.setAlphaBlend(0 !== bb, 0), ab || this.setDepthWrite(0 === bb), this._alphaMode[Ub] = bb)
      }
      bindBuffers(bb, ab, Ub) {}
      wipeCaches(bb) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, bb && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(bb, ab, Ub, Ab) {}
      drawElementsType(bb, ab, Ub, Ab) {}
      drawArraysType(bb, ab, Ub, Ab) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(bb) {}
      createTexture(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Eb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Yb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const Bb = new Na.b(this, 1),
          eb = String(bb);
        return Bb.url = eb, Bb.generateMipMaps = !ab, Bb.samplingMode = Mb, Bb.invertY = Ub, Bb.baseWidth = this._options.textureSize, Bb.baseHeight = this._options.textureSize, Bb.width = this._options.textureSize, Bb.height = this._options.textureSize, Yb && (Bb.format = Yb), Eb && (Bb._buffer = Eb), Bb.isReady = !0, Tb && setTimeout((() => {
          Tb(Bb)
        })), this._internalTexturesCache.push(Bb), Bb
      }
      _createHardwareRenderTargetWrapper(bb, ab, Ub) {
        const Ab = new XU.e(bb, ab, Ub, this);
        return this._renderTargetWrapperCache.push(Ab), Ab
      }
      createRenderTargetTexture(bb, ab) {
        const Ub = this._createHardwareRenderTargetWrapper(!1, !1, bb),
          Ab = {};
        void 0 !== ab && "object" === typeof ab ? (Ab.generateMipMaps = ab.generateMipMaps, Ab.generateDepthBuffer = void 0 === ab.generateDepthBuffer || ab.generateDepthBuffer, Ab.generateStencilBuffer = Ab.generateDepthBuffer && ab.generateStencilBuffer, Ab.type = void 0 === ab.type ? 0 : ab.type, Ab.samplingMode = void 0 === ab.samplingMode ? 3 : ab.samplingMode) : (Ab.generateMipMaps = ab, Ab.generateDepthBuffer = !0, Ab.generateStencilBuffer = !1, Ab.type = 0, Ab.samplingMode = 3);
        const Mb = new Na.b(this, 5);
        Ub.setTexture(Mb);
        const Tb = bb.width || bb,
          Eb = bb.height || bb;
        return Ub._generateDepthBuffer = Ab.generateDepthBuffer, Ub._generateStencilBuffer = !!Ab.generateStencilBuffer, Mb.baseWidth = Tb, Mb.baseHeight = Eb, Mb.width = Tb, Mb.height = Eb, Mb.isReady = !0, Mb.samples = 1, Mb.generateMipMaps = !!Ab.generateMipMaps, Mb.samplingMode = Ab.samplingMode, Mb.type = Ab.type, this._internalTexturesCache.push(Mb), Ub
      }
      createMultiviewRenderTargetTexture(bb, ab) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const Ub = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: bb,
            height: ab
          }),
          Ab = new Na.b(this, 5, !0);
        return Ab.baseWidth = bb, Ab.baseHeight = ab, Ab.width = bb, Ab.height = ab, Ab.isMultiview = !0, Ab.isReady = !0, Ab.format = 5, Ab.samples = 1, Ub.setTextures(Ab), Ub
      }
      bindMultiviewFramebuffer(bb) {
        this.bindFramebuffer(bb, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(bb, ab) {
        const Ub = this._createHardwareRenderTargetWrapper(!1, !0, bb),
          Ab = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...ab
          };
        Ab.generateStencilBuffer = Ab.generateDepthBuffer && Ab.generateStencilBuffer, (1 !== Ab.type || this._caps.textureFloatLinearFiltering) && (2 !== Ab.type || this._caps.textureHalfFloatLinearFiltering) || (Ab.samplingMode = 1), Ub._generateDepthBuffer = Ab.generateDepthBuffer, Ub._generateStencilBuffer = !!Ab.generateStencilBuffer;
        const Mb = new Na.b(this, 5);
        return Mb.baseWidth = bb, Mb.baseHeight = bb, Mb.width = bb, Mb.height = bb, Mb.isReady = !0, Mb.isCube = !0, Mb.samples = 1, Mb.generateMipMaps = !!Ab.generateMipMaps, Mb.samplingMode = Ab.samplingMode, Mb.type = Ab.type, this._internalTexturesCache.push(Mb), Ub
      }
      updateTextureSamplingMode(bb, ab) {
        ab.samplingMode = bb
      }
      createRawTexture(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        let Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Bb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          eb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const vb = new Na.b(this, 3);
        return vb.baseWidth = ab, vb.baseHeight = Ub, vb.width = ab, vb.height = Ub, vb.format = Ab, vb.generateMipMaps = Mb, vb.samplingMode = Eb, vb.invertY = Tb, vb._compression = Yb, vb.type = Bb, vb._useSRGBBuffer = eb, this._doNotHandleContextLost || (vb._bufferView = bb), vb
      }
      updateRawTexture(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        bb && (bb._bufferView = ab, bb.format = Ub, bb.invertY = Ab, bb._compression = Mb, bb.type = Tb, bb._useSRGBBuffer = Eb)
      }
      bindFramebuffer(bb, ab, Ub, Ab, Mb) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = bb, this._currentFramebuffer = null, this._cachedViewport && !Mb && this.setViewport(this._cachedViewport, Ub, Ab)
      }
      unBindFramebuffer(bb) {
        let ab = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, ab && ab(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(bb) {
        const ab = new LU.b;
        return ab.references = 1, ab.PL = 1, ab
      }
      updateDynamicTexture(bb, ab, Ub) {}
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
      updateDynamicIndexBuffer(bb, ab) {}
      updateDynamicVertexBuffer(bb, ab, Ub, Ab) {}
      _bindTextureDirectly(bb, ab) {
        return this._boundTexturesCache[this._activeChannel] !== ab && (this._boundTexturesCache[this._activeChannel] = ab, !0)
      }
      _bindTexture(bb, ab) {
        bb < 0 || this._bindTextureDirectly(0, ab)
      }
      _deleteBuffer(bb) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(bb) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(bb, ab, Ub, Ab, Mb) {}
      _uploadDataToTextureDirectly(bb, ab) {}
      _uploadArrayBufferViewToTexture(bb, ab) {}
      _uploadImageToTexture(bb, ab) {}
    }
    Ub(39143), Ub(39175), Ub(39136);
    async function yU(bb) {
      const ab = bb.getInternalTexture();
      if (!ab || 1 !== ab.source) return null;
      if (ab.invertY) {
        const ab = bb.oN()?.vj();
        if (!(ab instanceof kU)) return null
      }
      const Ub = ab._buffer;
      let Ab, Tb = bb.mimeType;
      try {
        Ub ? ArrayBuffer.isView(Ub) ? Ab = Ub.buffer.slice(Ub.byteOffset, Ub.byteOffset + Ub.byteLength) : Ub instanceof ArrayBuffer ? Ab = Ub : Ub instanceof Blob ? (Ab = await Ub.arrayBuffer(), Tb = Ub.type || Tb) : "string" === typeof Ub ? (Ab = await Mb.Tools.LoadFileAsync(Ub), Tb = (0, Bb.d)(Ub) || Tb) : "undefined" !== typeof HTMLImageElement && Ub instanceof HTMLImageElement && (Ab = await Mb.Tools.LoadFileAsync(Ub.src), Tb = (0, Bb.d)(Ub.src) || Tb) : (Ab = await Mb.Tools.LoadFileAsync(ab.url), Tb = (0, Bb.d)(ab.url) || Tb)
      } catch {
        return null
      }
      if (Ab && !Tb && ab.url) {
        const bb = ab.url.match(/^data:([^;,]+)/);
        Tb = bb ? bb[1] : (0, Bb.d)(ab.url)
      }
      return Ab && Tb ? {
        data: Ab,
        mimeType: Tb
      } : null
    }
    const ZU = 1e-6,
      DU = new kb.Color3(.04, .04, .04),
      zU = 1024,
      xU = kb.Color3.White(),
      iU = kb.Color3.BlackReadOnly;

    function fU(bb) {
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

    function mU(bb, ab, Ub) {
      if (ab < DU.r) return 0;
      const Ab = DU.r,
        Mb = bb * Ub / (1 - DU.r) + ab - 2 * DU.r,
        Tb = Mb * Mb - 4 * Ab * (DU.r - ab);
      return Db.Clamp((-Mb + Math.sqrt(Tb)) / (2 * Ab), 0, 1)
    }

    function pU(bb) {
      const ab = bb.diffuseColor.toLinearSpace(bb.oN().vj().useExactSrgbConversions).scale(.5),
        Ub = bb.alpha,
        Ab = function(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new rb.l(0, 1),
            Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new rb.l(0, .1),
            Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new rb.l(0, .1),
            Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new rb.l(1300, .1);
          return function(bb, ab, Ub, Ab, Mb) {
            return (1 - bb) * (1 - bb) * (1 - bb) * ab + 3 * (1 - bb) * (1 - bb) * bb * Ub + 3 * (1 - bb) * bb * bb * Ab + bb * bb * bb * Mb
          }(Math.pow(bb / Mb.x, .333333), ab.y, Ub.y, Ab.y, Mb.y)
        }(Db.Clamp(bb.specularPower, 0, zU));
      return {
        baseColorFactor: [ab.r, ab.g, ab.b, Ub],
        metallicFactor: 0,
        roughnessFactor: Ab
      }
    }

    function NU(bb, ab) {
      ab.needAlphaBlending() ? bb.alphaMode = "BLEND" : ab.needAlphaTesting() && (bb.alphaMode = "MASK", bb.alphaCutoff = ab.alphaCutOff)
    }

    function WU(bb, ab, Ub) {
      const Ab = new Uint8Array(bb * ab * 4);
      for (let Mb = 0; Mb < Ab.length; Mb += 4) Ab[Mb] = Ab[Mb + 1] = Ab[Mb + 2] = Ab[Mb + 3] = 255;
      return ib.e.CreateRGBATexture(Ab, bb, ab, Ub)
    }

    function HU(bb) {
      if (bb instanceof Uint8Array) {
        const ab = bb.length,
          Ub = new Float32Array(bb.length);
        for (let Ab = 0; Ab < ab; ++Ab) Ub[Ab] = bb[Ab] / 255;
        return Ub
      }
      if (bb instanceof Float32Array) return bb;
      throw new Error("Unsupported pixel format!")
    }
    class IU {
      constructor(bb) {
        this._exporter = bb, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(bb) {
        return bb ? this._textureMap.get(bb.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(bb, ab) {
        const Ub = pU(bb),
          Ab = {
            name: bb.name
          };
        if (null == bb.backFaceCulling || bb.backFaceCulling || (bb.twoSidedLighting || Mb.Tools.Warn(bb.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Ab.doubleSided = !0), ab) {
          const ab = [],
            Mb = bb.diffuseTexture;
          Mb && ab.push(this.exportTextureAsync(Mb).then((bb => {
            bb && (Ub.baseColorTexture = bb)
          })));
          const Tb = bb.bumpTexture;
          Tb && ab.push(this.exportTextureAsync(Tb).then((bb => {
            bb && (Ab.normalTexture = bb, 1 !== Tb.level && (Ab.normalTexture.scale = Tb.level))
          })));
          const Eb = bb.emissiveTexture;
          Eb && (Ab.emissiveFactor = [1, 1, 1], ab.push(this.exportTextureAsync(Eb).then((bb => {
            bb && (Ab.emissiveTexture = bb)
          }))));
          const Yb = bb.ambientTexture;
          Yb && ab.push(this.exportTextureAsync(Yb).then((bb => {
            if (bb) {
              const ab = {
                index: bb.index
              };
              Ab.occlusionTexture = ab
            }
          }))), ab.length > 0 && (this._exporter._materialNeedsUVsSet.add(bb), await Promise.all(ab))
        }(bb.alpha < 1 || bb.opacityTexture) && (bb.alphaMode === fb.c.ALPHA_COMBINE ? Ab.alphaMode = "BLEND" : Mb.Tools.Warn(bb.name + ": glTF 2.0 does not support alpha mode: " + bb.alphaMode.toString())), bb.emissiveColor && !bb.emissiveColor.equalsWithEpsilon(iU, ZU) && (Ab.emissiveFactor = bb.emissiveColor.qUb()), Ab.pbrMetallicRoughness = Ub, NU(Ab, bb), await this._finishMaterialAsync(Ab, bb);
        const Tb = this._exporter._materials;
        return Tb.push(Ab), Tb.length - 1
      }
      async _finishMaterialAsync(bb, ab) {
        const Ub = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", bb, ab),
          Ab = [];
        for (const Mb of Ub) Ab.push(this.exportTextureAsync(Mb));
        await Promise.all(Ab), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", bb, ab)
      }
      _resizeTexturesToSameDimensions(bb, ab, Ub) {
        const Ab = bb ? bb.getSize() : {
            width: 0,
            height: 0
          },
          Mb = ab ? ab.getSize() : {
            width: 0,
            height: 0
          };
        let Tb, Eb;
        return Ab.width < Mb.width ? (Tb = bb && bb instanceof xb.b ? zb.h.CreateResizedCopy(bb, Mb.width, Mb.height, !0) : WU(Mb.width, Mb.height, Ub), Eb = ab) : Ab.width > Mb.width ? (Eb = ab && ab instanceof xb.b ? zb.h.CreateResizedCopy(ab, Ab.width, Ab.height, !0) : WU(Ab.width, Ab.height, Ub), Tb = bb) : (Tb = bb, Eb = ab), {
          texture1: Tb,
          texture2: Eb
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(bb, ab, Ub) {
        const Ab = new Array;
        if (!bb && !ab) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Mb = bb ? bb.oN() : ab ? ab.oN() : null;
        if (Mb) {
          const Tb = this._resizeTexturesToSameDimensions(bb, ab, Mb),
            Eb = Tb.texture1?.getSize();
          let Yb, Bb;
          const eb = Eb.width,
            vb = Eb.height,
            Lb = await Tb.texture1.readPixels(),
            Pb = await Tb.texture2.readPixels();
          if (!Lb) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (Yb = HU(Lb), !Pb) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          Bb = HU(Pb);
          const Xb = Bb.byteLength,
            jb = new Uint8Array(Xb),
            Rb = new Uint8Array(Xb),
            yb = 4,
            Zb = new kb.Color3(0, 0, 0);
          let Db = 0,
            zb = 0;
          for (let bb = 0; bb < vb; ++bb)
            for (let ab = 0; ab < eb; ++ab) {
              const Ab = (eb * bb + ab) * yb,
                Eb = {
                  diffuseColor: new kb.Color3(Yb[Ab], Yb[Ab + 1], Yb[Ab + 2]).toLinearSpace(Mb.vj().useExactSrgbConversions).multiply(Ub.diffuseColor),
                  specularColor: new kb.Color3(Bb[Ab], Bb[Ab + 1], Bb[Ab + 2]).toLinearSpace(Mb.vj().useExactSrgbConversions).multiply(Ub.specularColor),
                  glossiness: Bb[Ab + 3] * Ub.glossiness
                },
                vb = this._convertSpecularGlossinessToMetallicRoughness(Eb);
              Zb.r = Math.max(Zb.r, vb.baseColor.r), Zb.g = Math.max(Zb.g, vb.baseColor.g), Zb.b = Math.max(Zb.b, vb.baseColor.b), Db = Math.max(Db, vb.metallic), zb = Math.max(zb, vb.roughness), Rb[Ab] = 255 * vb.baseColor.r, Rb[Ab + 1] = 255 * vb.baseColor.g, Rb[Ab + 2] = 255 * vb.baseColor.b, Rb[Ab + 3] = Tb.texture1.hasAlpha ? 255 * Yb[Ab + 3] : 255, jb[Ab] = 0, jb[Ab + 1] = 255 * vb.roughness, jb[Ab + 2] = 255 * vb.metallic, jb[Ab + 3] = 255
            }
          const xb = {
            baseColor: Zb,
            metallic: Db,
            roughness: zb
          };
          let ib = !1,
            fb = !1;
          for (let bb = 0; bb < vb; ++bb)
            for (let ab = 0; ab < eb; ++ab) {
              const Ub = (eb * bb + ab) * yb;
              Rb[Ub] /= xb.baseColor.r > ZU ? xb.baseColor.r : 1, Rb[Ub + 1] /= xb.baseColor.g > ZU ? xb.baseColor.g : 1, Rb[Ub + 2] /= xb.baseColor.b > ZU ? xb.baseColor.b : 1;
              const Ab = kb.Color3.FromInts(Rb[Ub], Rb[Ub + 1], Rb[Ub + 2]).toGammaSpace(Mb.vj().useExactSrgbConversions);
              Rb[Ub] = 255 * Ab.r, Rb[Ub + 1] = 255 * Ab.g, Rb[Ub + 2] = 255 * Ab.b, Ab.equalsWithEpsilon(xU, ZU) || (fb = !0), jb[Ub + 1] /= xb.roughness > ZU ? xb.roughness : 1, jb[Ub + 2] /= xb.metallic > ZU ? xb.metallic : 1;
              kb.Color3.FromInts(255, jb[Ub + 1], jb[Ub + 2]).equalsWithEpsilon(xU, ZU) || (ib = !0)
            }
          return ib && Ab.push((0, mb.EncodeImageAsync)(jb, eb, vb).then((bb => {
            xb.metallicRoughnessTextureData = bb
          }))), fb && Ab.push((0, mb.EncodeImageAsync)(Rb, eb, vb).then((bb => {
            xb.baseColorTextureData = bb
          }))), await Promise.all(Ab).then((() => xb))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(bb) {
        const ab = this._getPerceivedBrightness(bb.diffuseColor),
          Ub = this._getPerceivedBrightness(bb.specularColor),
          Ab = 1 - this._getMaxComponent(bb.specularColor),
          Mb = mU(ab, Ub, Ab),
          Tb = bb.diffuseColor.scale(Ab / (1 - DU.r) / Math.max(1 - Mb, ZU)),
          Eb = bb.specularColor.subtract(DU.scale(1 - Mb)).scale(1 / Math.max(Mb, ZU));
        let Yb = kb.Color3.Lerp(Tb, Eb, Mb * Mb);
        Yb = Yb.clampToRef(0, 1, Yb);
        return {
          baseColor: Yb,
          metallic: Mb,
          roughness: 1 - bb.glossiness
        }
      }
      _getPerceivedBrightness(bb) {
        return Math.sqrt(.299 * bb.r * bb.r + .587 * bb.g * bb.g + .114 * bb.b * bb.b)
      }
      _getMaxComponent(bb) {
        return Math.max(bb.r, Math.max(bb.g, bb.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        const eb = [],
          vb = {
            baseColor: bb,
            metallic: ab,
            roughness: Ub
          };
        if (Bb)
          if (Eb instanceof na) {
            if (Eb.geometryOpacityTexture) {
              const bb = Ab && Ab.getInternalTexture() ? Ab.getInternalTexture().uniqueId : 0,
                ab = Eb.geometryOpacityTexture && Eb.geometryOpacityTexture.getInternalTexture() ? Eb.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                Ub = Number(`${bb}${ab}`),
                Mb = this._textureMap.get(Ub);
              Mb ? Yb.baseColorTexture = Mb : eb.push(EU("baseColorOpacityTexture", eU(Ab ? YU(Ab, 0) : BU(1), Ab ? YU(Ab, 1) : BU(1), Ab ? YU(Ab, 2) : BU(1), YU(Eb.geometryOpacityTexture, 0)), Eb.oN()).then((async bb => {
                const ab = await this.exportTextureAsync(bb, Ub);
                ab && (Yb.baseColorTexture = ab)
              })))
            } else Ab && eb.push(this.exportTextureAsync(Ab).then((bb => {
              bb && (Yb.baseColorTexture = bb)
            })));
            if (Eb._useMetallicFromMetallicTextureBlue && Mb) eb.push(this.exportTextureAsync(Mb).then((bb => {
              bb && (Yb.metallicRoughnessTexture = bb)
            })));
            else if (Tb || Mb) {
              const bb = Mb && Mb.getInternalTexture() ? Mb.getInternalTexture().uniqueId : 0,
                ab = Tb && Tb.getInternalTexture() ? Tb.getInternalTexture().uniqueId : 0,
                Ub = Number(`${bb}${ab}`),
                Ab = this._textureMap.get(Ub);
              Ab ? Yb.metallicRoughnessTexture = Ab : eb.push(EU("MetalRoughTexture", eU(Eb.ambientOcclusionTexture ? YU(Eb.ambientOcclusionTexture, 0) : BU(1), Tb ? YU(Tb, 0) : BU(1), Mb ? YU(Mb, 0) : BU(1)), Eb.oN()).then((async bb => {
                const ab = await this.exportTextureAsync(bb, Ub);
                ab && (Yb.metallicRoughnessTexture = ab)
              })))
            }
          } else Ab && eb.push(this.exportTextureAsync(Ab).then((bb => {
            bb && (Yb.baseColorTexture = bb)
          }))), Mb && eb.push(this.exportTextureAsync(Mb).then((bb => {
            bb && (Yb.metallicRoughnessTexture = bb)
          })));
        return eb.length > 0 && (this._exporter._materialNeedsUVsSet.add(Eb), await Promise.all(eb)), vb
      }
      _getTextureSampler(bb) {
        const ab = {};
        if (!bb || !(bb instanceof xb.b)) return ab;
        const Ub = this._getGLTFTextureWrapMode(bb.wrapU);
        10497 !== Ub && (ab.wrapS = Ub);
        const Ab = this._getGLTFTextureWrapMode(bb.wrapV);
        switch (10497 !== Ab && (ab.wrapT = Ab), bb.samplingMode) {
          case xb.b.LINEAR_LINEAR:
            ab.magFilter = 9729, ab.minFilter = 9729;
            break;
          case xb.b.LINEAR_NEAREST:
            ab.magFilter = 9729, ab.minFilter = 9728;
            break;
          case xb.b.NEAREST_LINEAR:
            ab.magFilter = 9728, ab.minFilter = 9729;
            break;
          case xb.b.NEAREST_LINEAR_MIPLINEAR:
            ab.magFilter = 9728, ab.minFilter = 9987;
            break;
          case xb.b.NEAREST_NEAREST:
            ab.magFilter = 9728, ab.minFilter = 9728;
            break;
          case xb.b.NEAREST_LINEAR_MIPNEAREST:
            ab.magFilter = 9728, ab.minFilter = 9985;
            break;
          case xb.b.LINEAR_NEAREST_MIPNEAREST:
            ab.magFilter = 9729, ab.minFilter = 9984;
            break;
          case xb.b.LINEAR_NEAREST_MIPLINEAR:
            ab.magFilter = 9729, ab.minFilter = 9986;
            break;
          case xb.b.NEAREST_NEAREST_MIPLINEAR:
            ab.magFilter = 9728, ab.minFilter = 9986;
            break;
          case xb.b.LINEAR_LINEAR_MIPLINEAR:
            ab.magFilter = 9729, ab.minFilter = 9987;
            break;
          case xb.b.LINEAR_LINEAR_MIPNEAREST:
            ab.magFilter = 9729, ab.minFilter = 9985;
            break;
          case xb.b.NEAREST_NEAREST_MIPNEAREST:
            ab.magFilter = 9728, ab.minFilter = 9984
        }
        return ab
      }
      _getGLTFTextureWrapMode(bb) {
        switch (bb) {
          case xb.b.WRAP_ADDRESSMODE:
            return 10497;
          case xb.b.CLAMP_ADDRESSMODE:
            return 33071;
          case xb.b.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Mb.Tools.Error(`Unsupported Texture Wrap Mode ${bb}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(bb, ab, Ub) {
        const Ab = {
            diffuseColor: bb._albedoColor,
            specularColor: bb._reflectivityColor,
            glossiness: bb._microSurface
          },
          Mb = bb._albedoTexture,
          Tb = bb._reflectivityTexture,
          Eb = bb._useMicroSurfaceFromReflectivityMapAlpha;
        if (Tb && !Eb) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Mb || Tb) && Ub) {
          this._exporter._materialNeedsUVsSet.add(bb);
          const Ub = this._exportTextureSampler(Mb || Tb),
            Eb = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Mb, Tb, Ab),
            Yb = this._exporter._textures;
          if (Eb.baseColorTextureData) {
            const bb = await this._exportImageAsync(`baseColor${Yb.length}`, Eb.baseColorTextureData);
            ab.baseColorTexture = this._exportTextureInfo(bb, Ub, Mb?.coordinatesIndex)
          }
          if (Eb.metallicRoughnessTextureData) {
            const bb = await this._exportImageAsync(`metallicRoughness${Yb.length}`, Eb.metallicRoughnessTextureData);
            ab.metallicRoughnessTexture = this._exportTextureInfo(bb, Ub, Tb?.coordinatesIndex)
          }
          return Eb
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Ab)
      }
      async exportPBRMaterialAsync(bb, ab) {
        const Ub = {},
          Ab = {
            name: bb.name
          },
          Mb = bb.isMetallicWorkflow();
        if (Mb) {
          const ab = bb._albedoColor,
            Ab = bb.alpha;
          ab && (Ub.baseColorFactor = [ab.r, ab.g, ab.b, Ab])
        }
        const Tb = Mb ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(bb._albedoColor, bb._metallic, bb._roughness, bb._albedoTexture, bb._metallicTexture, bb._metallicTexture, bb, Ub, ab) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(bb, Ub, ab);
        await this._setMetallicRoughnessPbrMaterialAsync(Tb, bb, Ab, Ub, ab), await this._finishMaterialAsync(Ab, bb);
        const Eb = this._exporter._materials;
        return Eb.push(Ab), Eb.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(bb, ab, Ub, Ab, Tb) {
        if (NU(Ub, ab), bb.baseColor.equalsWithEpsilon(xU, ZU) && Db.WithinEpsilon(ab.alpha, 1, ZU) || (Ab.baseColorFactor = [bb.baseColor.r, bb.baseColor.g, bb.baseColor.b, ab.alpha]), null != bb.metallic && 1 !== bb.metallic && (Ab.metallicFactor = bb.metallic), null != bb.roughness && 1 !== bb.roughness && (Ab.roughnessFactor = bb.roughness), null == ab.backFaceCulling || ab.backFaceCulling || (ab._twoSidedLighting || Mb.Tools.Warn(ab.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Ub.doubleSided = !0), Tb) {
          const bb = [],
            Mb = ab instanceof ia ? ab._bumpTexture : ab.geometryNormalTexture;
          Mb && bb.push(this.exportTextureAsync(Mb).then((bb => {
            bb && (Ub.normalTexture = bb, 1 !== Mb.level && (Ub.normalTexture.scale = Mb.level))
          })));
          const Tb = ab instanceof ia ? ab._ambientTexture : ab.ambientOcclusionTexture;
          Tb && bb.push(new Promise((async bb => {
            if (ab instanceof na && Ab.metallicRoughnessTexture) {
              const ab = this._exportTextureSampler(Tb),
                Ub = this._exporter._textures[Ab.metallicRoughnessTexture.index].source,
                Mb = this._exportTextureInfo(Ub, ab, Tb.coordinatesIndex);
              return this._textureMap.set(Tb.uniqueId, Mb), this._exporter._extensionsPostExportTextures("exporter", Mb, Tb), bb(Mb)
            }
            return bb(await this.exportTextureAsync(Tb))
          })).then((async bb => {
            if (bb) {
              const Ab = {
                index: bb.index,
                texCoord: bb.texCoord,
                extensions: bb.extensions
              };
              Ub.occlusionTexture = Ab, Ab.strength = ab instanceof ia ? ab._ambientTextureStrength : ab.ambientOcclusionTexture.level
            }
          })));
          const Eb = ab instanceof ia ? ab._emissiveTexture : ab.emissionColorTexture;
          Eb && bb.push(this.exportTextureAsync(Eb).then((bb => {
            bb && (Ub.emissiveTexture = bb)
          }))), bb.length > 0 && (this._exporter._materialNeedsUVsSet.add(ab), await Promise.all(bb))
        }
        const Eb = ab instanceof ia ? ab._emissiveColor : ab.emissionColor;
        Eb.equalsWithEpsilon(iU, ZU) || (Ub.emissiveFactor = Eb.qUb()), Ub.pbrMetallicRoughness = Ab
      }
      async exportOpenPBRMaterialAsync(bb, ab) {
        const Ub = {},
          Ab = {
            name: bb.name
          },
          Mb = bb.baseColor,
          Tb = bb.geometryOpacity;
        Mb && (Ub.baseColorFactor = [Mb.r, Mb.g, Mb.b, Tb]);
        const Eb = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(bb.baseColor, bb.baseMetalness, bb.specularRoughness, bb.baseColorTexture, bb.baseMetalnessTexture, bb.specularRoughnessTexture, bb, Ub, ab);
        await this._setMetallicRoughnessPbrMaterialAsync(Eb, bb, Ab, Ub, ab), await this._finishMaterialAsync(Ab, bb);
        const Yb = this._exporter._materials;
        return Yb.push(Ab), Yb.length - 1
      }
      async exportTextureAsync(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = this._textureMap.get(ab ?? bb.uniqueId);
        if (Ub) return Ub;
        const Ab = this._exportTextureSampler(bb),
          Mb = await this._exportTextureImageAsync(bb);
        return Ub = this._exportTextureInfo(Mb, Ab, bb.coordinatesIndex), this._textureMap.set(ab ?? bb.uniqueId, Ub), this._exporter._extensionsPostExportTextures("exporter", Ub, bb), Ub
      }
      async _exportTextureImageAsync(bb) {
        const ab = bb.mimeType ?? "none",
          Ub = this._internalTextureToImage,
          Ab = bb.getInternalTexture().uniqueId;
        Ub[Ab] = Ub[Ab] || {};
        let Tb = Ub[Ab][ab];
        return void 0 === Tb && (Tb = (async () => {
          const Ub = await yU(bb);
          if (Ub && fU(Ub.mimeType) && ("none" === ab || Ub.mimeType === ab)) return await this._exportImageAsync(bb.name, new Blob([Ub.data], {
            type: Ub.mimeType
          }));
          let Ab = "image/png";
          "none" !== ab && (fU(ab) ? Ab = ab : (Ab = "image/png", Mb.Tools.Warn(`Unsupported media type: ${ab}. Exporting texture as PNG.`)));
          const Tb = bb.getSize(),
            Eb = await (0, zb.f)(bb),
            Yb = await (0, mb.EncodeImageAsync)(Eb, Tb.width, Tb.height, Ab);
          return await this._exportImageAsync(bb.name, Yb)
        })(), Ub[Ab][ab] = Tb), await Tb
      }
      async _exportImageAsync(bb, ab) {
        const Ub = this._exporter._images;
        let Ab;
        if (this._exporter._shouldUseGlb) {
          Ab = {
            name: bb,
            mimeType: ab.type,
            bufferView: void 0
          };
          const Ub = await ab.arrayBuffer(),
            Mb = this._exporter._bufferManager.createBufferView(new Uint8Array(Ub));
          this._exporter._bufferManager.setBufferView(Ab, Mb)
        } else {
          const Tb = bb.replace(/\.\/|\/|\.\\|\\/g, "_"),
            Eb = function(bb) {
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
            }(ab.type);
          let Yb = Tb + Eb;
          Ub.some((bb => bb.uri === Yb)) && (Yb = `${Tb}_${Mb.Tools.RandomId()}${Eb}`), Ab = {
            name: bb,
            uri: Yb
          }, this._exporter._imageData[Yb] = ab
        }
        return Ub.push(Ab), Ub.length - 1
      }
      _exportTextureInfo(bb, ab, Ub) {
        const Ab = this._exporter._textures;
        let Mb = Ab.findIndex((Ub => Ub.sampler == ab && Ub.source === bb)); - 1 === Mb && (Mb = Ab.length, Ab.push({
          source: bb,
          sampler: ab
        }));
        const Tb = {
          index: Mb
        };
        return Ub && (Tb.texCoord = Ub), Tb
      }
      _exportTextureSampler(bb) {
        const ab = this._getTextureSampler(bb),
          Ub = this._exporter._samplers,
          Ab = Ub.findIndex((bb => bb.minFilter === ab.minFilter && bb.magFilter === ab.magFilter && bb.wrapS === ab.wrapS && bb.wrapT === ab.wrapT));
        return -1 !== Ab ? Ab : (Ub.push(ab), Ub.length - 1)
      }
    }
    var dU = Ub(39167),
      FU = Ub(39307);
    (0, FU.e)();
    var hU = Ub(36405);
    const GU = Ab.Matrix.Compose(new Ab.Pj(-1, 1, 1), Ab.Quaternion.Identity(), Ab.Pj.Zero());

    function QU(bb, ab) {
      if (!(bb instanceof Lb.b)) return !1;
      if (ab) {
        if (!bb.getWorldMatrix().equalsWithEpsilon(Ab.Matrix.IdentityReadOnly, hU.e)) return !1
      } else {
        if (!bb.getWorldMatrix().multiplyToRef(GU, Ab.TmpVectors.Matrix[0]).equalsWithEpsilon(Ab.Matrix.IdentityReadOnly, hU.e)) return !1
      }
      return !(bb instanceof Pb.d && bb.geometry)
    }
    const qU = Ab.Pj.ZeroReadOnly,
      uU = Ab.Quaternion.Identity(),
      rU = Ab.Pj.OneReadOnly,
      KU = new Ab.Pj(-1, 1, 1);

    function oU(bb, ab) {
      const {
        byteOffset: Ub,
        byteStride: Ab,
        type: Mb,
        normalized: Tb
      } = bb, Eb = bb.getSize(), Yb = ab.reduce(((bb, ab) => ab.getTotalVertices() > bb ? ab.getTotalVertices() : bb), -Number.MAX_VALUE);
      return {
        byteOffset: Ub,
        byteStride: Ab,
        componentCount: Eb,
        type: Mb,
        count: Yb * Eb,
        normalized: Tb,
        totalVertices: Yb,
        kind: bb.getKind()
      }
    }

    function lU(bb) {
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

    function tU(bb) {
      switch (bb) {
        case vb.g.PositionKind:
        case vb.g.NormalKind:
        case vb.g.TangentKind:
        case vb.g.ColorKind:
        case vb.g.MatricesIndicesKind:
        case vb.g.MatricesIndicesExtraKind:
        case vb.g.MatricesWeightsKind:
        case vb.g.MatricesWeightsExtraKind:
        case vb.g.UVKind:
        case vb.g.UV2Kind:
        case vb.g.UV3Kind:
        case vb.g.UV4Kind:
        case vb.g.UV5Kind:
        case vb.g.UV6Kind:
          return !0
      }
      return !1
    }

    function wU(bb) {
      const ab = Math.sqrt(bb.x * bb.x + bb.y * bb.y + bb.z * bb.z);
      ab > 0 && (bb.x /= ab, bb.y /= ab, bb.z /= ab)
    }

    function sU(bb) {
      return bb.x *= -1, bb
    }

    function gU(bb) {
      if (bb.x * bb.x + bb.y * bb.y > .5) {
        const ab = Math.abs(bb.x),
          Ub = Math.abs(bb.y);
        if (ab > Ub) {
          const Ub = Math.sign(bb.x);
          bb.x = ab, bb.y *= -Ub, bb.z *= -Ub, bb.w *= Ub
        } else {
          const ab = Math.sign(bb.y);
          bb.x *= -ab, bb.y = Ub, bb.z *= ab, bb.w *= -ab
        }
      } else {
        const ab = Math.abs(bb.z),
          Ub = Math.abs(bb.w);
        if (ab > Ub) {
          const Ub = Math.sign(bb.z);
          bb.x *= -Ub, bb.y *= Ub, bb.z = ab, bb.w *= -Ub
        } else {
          const ab = Math.sign(bb.w);
          bb.x *= ab, bb.y *= -ab, bb.z *= -ab, bb.w = Ub
        }
      }
      return bb
    }

    function CU(bb) {
      bb.K9(-bb.z, bb.w, bb.x, -bb.y)
    }

    function VU(bb, ab) {
      const Ub = Ab.Pj.FromArrayToRef(ab.translation || [0, 0, 0], 0, Ab.TmpVectors.Pj[0]),
        Mb = Ab.Quaternion.FromArrayToRef(ab.rotation || [0, 0, 0, 1], 0, Ab.TmpVectors.Quaternion[0]),
        Tb = Ab.Matrix.ComposeToRef(rU, Mb, Ub, Ab.TmpVectors.Matrix[0]),
        Eb = Ab.Pj.FromArrayToRef(bb.translation || [0, 0, 0], 0, Ab.TmpVectors.Pj[2]),
        Yb = Ab.Quaternion.FromArrayToRef(bb.rotation || [0, 0, 0, 1], 0, Ab.TmpVectors.Quaternion[1]),
        Bb = Ab.Matrix.ComposeToRef(rU, Yb, Eb, Ab.TmpVectors.Matrix[1]);
      Tb.multiplyToRef(Bb, Bb), Bb.decompose(void 0, Mb, Ub), Ub.equalsWithEpsilon(qU, hU.e) ? delete ab.translation : ab.translation = Ub.qUb(), Mb.equalsWithEpsilon(uU, hU.e) ? delete ab.rotation : ab.rotation = Mb.qUb(), ab.scale && delete ab.scale
    }

    function OU(bb, ab) {
      if (!(ab instanceof Lb.b)) return !1;
      if (!(1 === ab.getChildren().length && 0 === bb.getChildren().length && bb.parent === ab)) return !1;
      const Ub = bb.oN(),
        Ab = bb instanceof FU.h && !Ub.useRightHandedSystem ? KU : rU;
      return !!ab.nY.equalsWithEpsilon(Ab, hU.e) || (Wb.e.Warn(`Cannot collapse node ${bb.name} into parent node ${ab.name} with modified scaling.`), !1)
    }

    function cU(bb) {
      if (bb instanceof Array) {
        const ab = new Float32Array(bb);
        return new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength)
      }
      return ArrayBuffer.isView(bb) ? new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength) : new Uint8Array(bb)
    }

    function JU(bb, ab) {
      for (const [Ub, Ab] of Object.entries(bb)) {
        const Mb = ab[Ub];
        (Array.isArray(Ab) && Array.isArray(Mb) && nU(Ab, Mb) || Ab === Mb) && delete bb[Ub]
      }
      return bb
    }

    function nU(bb, ab) {
      return bb.length === ab.length && bb.every(((bb, Ub) => bb === ab[Ub]))
    }
    const SU = new Map([
      [Int8Array, (bb, ab, Ub) => bb.setInt8(ab, Ub)],
      [Uint8Array, (bb, ab, Ub) => bb.setUint8(ab, Ub)],
      [Uint8ClampedArray, (bb, ab, Ub) => bb.setUint8(ab, Ub)],
      [Int16Array, (bb, ab, Ub) => bb.setInt16(ab, Ub, !0)],
      [Uint16Array, (bb, ab, Ub) => bb.setUint16(ab, Ub, !0)],
      [Int32Array, (bb, ab, Ub) => bb.setInt32(ab, Ub, !0)],
      [Uint32Array, (bb, ab, Ub) => bb.setUint32(ab, Ub, !0)],
      [Float32Array, (bb, ab, Ub) => bb.setFloat32(ab, Ub, !0)],
      [Float64Array, (bb, ab, Ub) => bb.setFloat64(ab, Ub, !0)]
    ]);
    class bA {
      writeTypedArray(bb) {
        this._checkGrowBuffer(bb.byteLength);
        const ab = SU.get(bb.constructor);
        for (let Ub = 0; Ub < bb.length; Ub++) ab(this._dataView, this._byteOffset, bb[Ub]), this._byteOffset += bb.BYTES_PER_ELEMENT
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
        const ab = this.byteOffset + bb;
        if (ab > this._data.byteLength) {
          const bb = new Uint8Array(2 * ab);
          bb.set(this._data), this._data = bb, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function aA(bb) {
      return bb % 4 === 0 ? 4 : bb % 2 === 0 ? 2 : 1
    }
    class UA {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(bb) {
        let ab = 0;
        this._bufferViewToData.forEach((bb => {
          ab += bb.byteLength
        }));
        const Ub = new bA(ab),
          Ab = Array.from(this._bufferViewToData.keys()).sort(((bb, ab) => aA(ab.byteLength) - aA(bb.byteLength)));
        for (const Mb of Ab) {
          Mb.byteOffset = Ub.byteOffset, bb.push(Mb);
          const ab = bb.length - 1,
            Ab = this.getPropertiesWithBufferView(Mb);
          for (const bb of Ab) bb.bufferView = ab;
          Ub.writeTypedArray(this._bufferViewToData.get(Mb)), this._bufferViewToData.delete(Mb)
        }
        return Ub.getOutputData()
      }
      createBufferView(bb, ab) {
        const Ub = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: bb.byteLength,
          byteStride: ab
        };
        return this._bufferViewToData.set(Ub, bb), Ub
      }
      createAccessor(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        this._verifyBufferView(bb);
        const Yb = {
          bufferView: void 0,
          componentType: Ub,
          count: Ab,
          type: ab,
          min: Tb?.min,
          max: Tb?.max,
          normalized: Eb,
          byteOffset: Mb
        };
        return this.setBufferView(Yb, bb), this._accessorToBufferView.set(Yb, bb), Yb
      }
      setBufferView(bb, ab) {
        this._verifyBufferView(ab);
        this.getPropertiesWithBufferView(ab).push(bb)
      }
      removeBufferView(bb) {
        const ab = this.getPropertiesWithBufferView(bb);
        for (const Ub of ab) void 0 !== Ub.bufferView && delete Ub.bufferView;
        this._bufferViewToData.delete(bb), this._bufferViewToProperties.delete(bb), this._accessorToBufferView.forEach(((ab, Ub) => {
          ab === bb && (void 0 !== Ub.byteOffset && delete Ub.byteOffset, this._accessorToBufferView.delete(Ub))
        }))
      }
      getBufferView(bb) {
        const ab = this._accessorToBufferView.get(bb);
        return this._verifyBufferView(ab), ab
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
    var AA = Ub(39310);
    (0, AA.e)();
    var MA = Ub(39570);
    (0, MA.e)();
    var TA = Ub(39361),
      EA = Ub(40196);
    (0, EA.i)();
    let YA = (() => {
      var bb;
      let ab, Ub, Ab = [],
        Mb = [],
        Tb = [],
        Eb = [];
      return bb = class {
        get influence() {
          return this._influence
        }
        set influence(bb) {
          if (this._influence === bb) return;
          const ab = this._influence;
          this._influence = bb, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === ab || 0 === bb)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(bb) {
          this._animationPropertiesOverride = bb
        }
        constructor(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Yb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = bb, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new bU.b, this._onDataLayoutChanged = new bU.b, this.id = (0, pb.k)(this, Ab, void 0), this.morphTargetManager = ((0, pb.k)(this, Mb), (0, pb.k)(this, Tb, null)), this._animationPropertiesOverride = ((0, pb.k)(this, Eb), null), this.id = bb, this.morphTargetManager = Yb, this._scene = Ub || Rb.d.LastCreatedScene, this.influence = ab, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        BEb(bb) {
          const ab = this.hasPositions;
          this._positions = bb, ab !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(bb) {
          const ab = this.hasNormals;
          this._normals = bb, ab !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(bb) {
          const ab = this.hasTangents;
          this._tangents = bb, ab !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(bb) {
          const ab = this.hasUVs;
          this._uvs = bb, ab !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(bb) {
          const ab = this.hasUV2s;
          this._uv2s = bb, ab !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(bb) {
          const ab = this.hasColors;
          this._colors = bb, ab !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const ab = fa.b.Clone((() => new bb(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return ab._positions = this._positions, ab._normals = this._normals, ab._tangents = this._tangents, ab._uvs = this._uvs, ab._uv2s = this._uv2s, ab._colors = this._colors, ab
        }
        serialize() {
          const bb = {};
          return bb.name = this.name, bb.influence = this.influence, null != this.id && (bb.id = this.id), bb.uniqueId = this.uniqueId, bb.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (bb.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (bb.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (bb.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (bb.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (bb.colors = Array.prototype.slice.call(this.getColors())), fa.b.AppendSerializedAnimations(this, bb), bb
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(ab, Ub) {
          let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Mb = new bb(ab.name, ab.influence, Ub, Ab);
          if (Mb.BEb(ab.positions), null != ab.id && (Mb.id = ab.id), ab.normals && Mb.setNormals(ab.normals), ab.tangents && Mb.setTangents(ab.tangents), ab.uvs && Mb.setUVs(ab.uvs), ab.uv2s && Mb.setUV2s(ab.uv2s), ab.colors && Mb.setColors(ab.colors), ab.animations) {
            for (let bb = 0; bb < ab.animations.length; bb++) {
              const Ub = ab.animations[bb],
                Ab = (0, la.b)("BABYLON.Animation");
              Ab && Mb.animations.push(Ab.Parse(Ub))
            }
            ab.autoAnimate && Ub && Ub.beginAnimation(Mb, ab.autoAnimateFrom, ab.autoAnimateTo, ab.autoAnimateLoop, ab.autoAnimateSpeed || 1)
          }
          return Mb
        }
        static FromMesh(ab, Ub, Ab) {
          Ub || (Ub = ab.name);
          const Mb = new bb(Ub, Ab, ab.oN(), ab.morphTargetManager);
          return Mb.BEb(ab.getVerticesData(Kb.m.PositionKind)), ab.isVerticesDataPresent(Kb.m.NormalKind) && Mb.setNormals(ab.getVerticesData(Kb.m.NormalKind)), ab.isVerticesDataPresent(Kb.m.TangentKind) && Mb.setTangents(ab.getVerticesData(Kb.m.TangentKind)), ab.isVerticesDataPresent(Kb.m.UVKind) && Mb.setUVs(ab.getVerticesData(Kb.m.UVKind)), ab.isVerticesDataPresent(Kb.m.UV2Kind) && Mb.setUV2s(ab.getVerticesData(Kb.m.UV2Kind)), ab.isVerticesDataPresent(Kb.m.ColorKind) && Mb.setColors(ab.getVerticesData(Kb.m.ColorKind)), Mb
        }
      }, (() => {
        const Yb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [(0, Nb.K)()], Ub = [(0, Nb.K)()], (0, pb.h)(null, null, ab, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: bb => "id" in bb,
            get: bb => bb.id,
            set: (bb, ab) => {
              bb.id = ab
            }
          },
          metadata: Yb
        }, Ab, Mb), (0, pb.h)(null, null, Ub, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: bb => "morphTargetManager" in bb,
            get: bb => bb.morphTargetManager,
            set: (bb, ab) => {
              bb.morphTargetManager = ab
            }
          },
          metadata: Yb
        }, Tb, Eb), Yb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Yb
        })
      })(), bb
    })();
    var BA, eA = Ub(40251),
      vA = Ub(39359);
    ! function(bb) {
      bb[bb.INTANGENT = 0] = "INTANGENT", bb[bb.OUTTANGENT = 1] = "OUTTANGENT"
    }(BA || (BA = {}));
    class LA {
      static _IsTransformable(bb) {
        return bb && (bb instanceof Lb.b || bb instanceof AA.b || bb instanceof vA.e)
      }
      static _CreateNodeAnimation(bb, ab, Ub, Ab, Tb) {
        if (this._IsTransformable(bb)) {
          const Eb = [],
            Yb = [],
            Bb = ab.getKeys(),
            eb = LA._CalculateMinMaxKeyFrames(Bb),
            vb = LA._DeduceInterpolation(Bb, Ub, Ab),
            Lb = vb.interpolationType,
            Pb = vb.shouldBakeAnimation;
          if (Pb ? LA._CreateBakedAnimation(bb, ab, Ub, eb.min, eb.max, ab.framePerSecond, Tb, Eb, Yb, eb, Ab) : "LINEAR" === Lb || "STEP" === Lb ? LA._CreateLinearOrStepAnimation(bb, ab, Ub, Eb, Yb, Ab) : "CUBICSPLINE" === Lb ? LA._CreateCubicSplineAnimation(bb, ab, Ub, Eb, Yb, Ab) : LA._CreateBakedAnimation(bb, ab, Ub, eb.min, eb.max, ab.framePerSecond, Tb, Eb, Yb, eb, Ab), Eb.length && Yb.length) {
            return {
              inputs: Eb,
              outputs: Yb,
              samplerInterpolation: Lb,
              inputsMin: Pb ? eb.min : Mb.Tools.FloatRound(eb.min / ab.framePerSecond),
              inputsMax: Pb ? eb.max : Mb.Tools.FloatRound(eb.max / ab.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(bb) {
        let ab = null,
          Ub = "VEC3",
          Ab = !1;
        const Tb = bb.targetProperty.split(".");
        switch (Tb[0]) {
          case "nY":
            ab = "scale";
            break;
          case "position":
            ab = "translation";
            break;
          case "rotation":
            Ub = "VEC4", ab = "rotation";
            break;
          case "rotationQuaternion":
            Ub = "VEC4", Ab = !0, ab = "rotation";
            break;
          case "influence":
            Ub = "SCALAR", ab = "weights";
            break;
          default:
            Mb.Tools.Error(`Unsupported animatable property ${Tb[0]}`)
        }
        return ab ? {
          animationChannelTargetPath: ab,
          dataAccessorType: Ub,
          useQuaternion: Ab
        } : (Mb.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb) {
        let Lb;
        if (LA._IsTransformable(bb) && bb.animations)
          for (const Pb of bb.animations) {
            if (vb && !vb(Pb)) continue;
            const Mb = LA._DeduceAnimationInfo(Pb);
            Mb && (Lb = {
              name: Pb.name,
              samplers: [],
              channels: []
            }, LA._AddAnimation(`${Pb.name}`, Pb.hasRunningRuntimeAnimations ? ab : Lb, bb, Pb, Mb.dataAccessorType, Mb.animationChannelTargetPath, Ab, Tb, Eb, Yb, Mb.useQuaternion, Bb, eb), Lb.samplers.length && Lb.channels.length && Ub.push(Lb))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb) {
        let Lb;
        if (bb instanceof eA.b) {
          const Mb = bb.morphTargetManager;
          if (Mb)
            for (let Pb = 0; Pb < Mb.numTargets; ++Pb) {
              const Xb = Mb.getTarget(Pb);
              for (const jb of Xb.animations) {
                if (vb && !vb(jb)) continue;
                const Xb = new EA.e(`${jb.name}`, "influence", jb.framePerSecond, jb.dataType, jb.RT, jb.enableBlending),
                  Rb = [],
                  kb = jb.getKeys();
                for (let bb = 0; bb < kb.length; ++bb) {
                  const ab = kb[bb];
                  for (let bb = 0; bb < Mb.numTargets; ++bb) bb == Pb ? Rb.push(ab) : Rb.push({
                    frame: ab.frame,
                    value: 0
                  })
                }
                Xb.setKeys(Rb, !0);
                const yb = LA._DeduceAnimationInfo(Xb);
                yb && (Lb = {
                  name: Xb.name,
                  samplers: [],
                  channels: []
                }, LA._AddAnimation(jb.name, jb.hasRunningRuntimeAnimations ? ab : Lb, bb, Xb, yb.dataAccessorType, yb.animationChannelTargetPath, Ab, Tb, Eb, Yb, yb.useQuaternion, Bb, eb, Mb.numTargets), Lb.samplers.length && Lb.channels.length && Ub.push(Lb))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
        let vb;
        if (bb.animationGroups) {
          const Lb = bb.animationGroups;
          for (const Pb of Lb) {
            const Lb = new Map,
              Xb = new Map,
              jb = new Set,
              Rb = Pb.to - Pb.from;
            vb = {
              name: Pb.name,
              channels: [],
              samplers: []
            };
            for (let ab = 0; ab < Pb.targetedAnimations.length; ++ab) {
              const eb = Pb.targetedAnimations[ab],
                Rb = eb.target,
                kb = eb.animation;
              if (Bb && !Bb(kb)) continue;
              const yb = Yb.has(Rb);
              if (this._IsTransformable(Rb) || 1 === Rb.length && this._IsTransformable(Rb[0])) {
                const bb = LA._DeduceAnimationInfo(eb.animation);
                if (bb) {
                  const ab = this._IsTransformable(Rb) ? Rb : this._IsTransformable(Rb[0]) ? Rb[0] : null;
                  ab && LA._AddAnimation(`${kb.name}`, vb, ab, kb, bb.dataAccessorType, bb.animationChannelTargetPath, Ub, Ab, Mb, Tb, bb.useQuaternion, Eb, yb)
                }
              } else if (Rb instanceof YA || 1 === Rb.length && Rb[0] instanceof YA) {
                if (LA._DeduceAnimationInfo(eb.animation)) {
                  const ab = Rb instanceof YA ? Rb : Rb[0];
                  if (ab) {
                    const Ub = bb.morphTargetManagers.find((bb => {
                      for (let Ub = 0; Ub < bb.numTargets; ++Ub)
                        if (bb.getTarget(Ub) === ab) return !0;
                      return !1
                    }));
                    if (Ub) {
                      const Ab = bb.meshes.find((bb => bb.morphTargetManager === Ub));
                      Ab && (Lb.has(Ab) || Lb.set(Ab, new Map), Lb.get(Ab)?.set(ab, kb), jb.add(Ab), Xb.set(Ab, kb))
                    }
                  }
                }
              }
            }
            jb.forEach((bb => {
              const ab = bb.morphTargetManager;
              let Yb = null;
              const Bb = [],
                eb = Xb.get(bb).getKeys(),
                jb = eb.length;
              for (let Ub = 0; Ub < jb; ++Ub)
                for (let Ab = 0; Ab < ab.numTargets; ++Ab) {
                  const Mb = ab.getTarget(Ab),
                    Tb = Lb.get(bb);
                  if (Tb) {
                    const ab = Tb.get(Mb);
                    ab ? (Yb || (Yb = new EA.e(`${Pb.name}_${bb.name}_MorphWeightAnimation`, "influence", ab.framePerSecond, EA.e.ANIMATIONTYPE_FLOAT, ab.RT, ab.enableBlending)), Bb.push(ab.getKeys()[Ub])) : Bb.push({
                      frame: Pb.from + Rb / jb * Ub,
                      value: Mb.influence,
                      inTangent: eb[0].inTangent ? 0 : void 0,
                      outTangent: eb[0].outTangent ? 0 : void 0
                    })
                  }
                }
              Yb.setKeys(Bb, !0);
              const kb = LA._DeduceAnimationInfo(Yb);
              kb && LA._AddAnimation(`${Pb.name}_${bb.name}_MorphWeightAnimation`, vb, bb, Yb, kb.dataAccessorType, kb.animationChannelTargetPath, Ub, Ab, Mb, Tb, kb.useQuaternion, Eb, !1, ab?.numTargets)
            })), vb.channels.length && vb.samplers.length && (eb?.set(Pb, ab.length), ab.push(vb))
          }
        }
      }
      static _AddAnimation(bb, ab, Ub, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb) {
        const Rb = LA._CreateNodeAnimation(Ub, Mb, Eb, Lb, Pb);
        let kb, yb, Zb, Db, zb, xb;
        if (Rb) {
          if (jb) {
            let bb, ab = 0;
            const Ub = [];
            for (; Rb.inputs.length > 0;) bb = Rb.inputs.shift(), ab % jb == 0 && Ub.push(bb), ab++;
            Rb.inputs = Ub
          }
          const bb = Yb.get(Ub),
            Mb = new Float32Array(Rb.inputs);
          kb = Bb.createBufferView(Mb), yb = Bb.createAccessor(kb, "SCALAR", 5126, Rb.inputs.length, void 0, {
            min: [Rb.inputsMin],
            max: [Rb.inputsMax]
          }), vb.push(yb), Zb = vb.length - 1;
          const eb = new Ab.Quaternion,
            Lb = new Ab.Pj,
            Pb = new Ab.Pj,
            ib = Ub instanceof AA.b,
            fb = lU(Tb),
            mb = new Float32Array(Rb.outputs.length * fb);
          Rb.outputs.forEach((function(bb, ab) {
            let Ub = bb;
            switch (Eb) {
              case "translation":
                Xb && (Ab.Pj.FromArrayToRef(bb, 0, Pb), sU(Pb), Pb.toArray(Ub));
                break;
              case "rotation":
                4 === bb.length ? Ab.Quaternion.FromArrayToRef(bb, 0, eb) : (Ub = new Array(4), Ab.Pj.FromArrayToRef(bb, 0, Lb), Ab.Quaternion.FromEulerVectorToRef(Lb, eb)), Xb && (gU(eb), ib && CU(eb)), eb.toArray(Ub)
            }
            mb.set(Ub, ab * fb)
          })), kb = Bb.createBufferView(mb), yb = Bb.createAccessor(kb, Tb, 5126, Rb.outputs.length), vb.push(yb), Db = vb.length - 1, zb = {
            interpolation: Rb.samplerInterpolation,
            input: Zb,
            output: Db
          }, ab.samplers.push(zb), xb = {
            sampler: ab.samplers.length - 1,
            target: {
              node: bb,
              path: Eb
            }
          }, ab.channels.push(xb)
        }
      }
      static _CreateBakedAnimation(bb, ab, Ub, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb) {
        let Xb;
        const jb = Ab.Quaternion.Identity();
        let Rb, kb, yb, Zb, Db, zb = null,
          xb = null;
        Lb.min = Mb.Tools.FloatRound(Tb / Yb);
        const ib = ab.getKeys();
        for (let Ab = 0, fb = ib.length; Ab < fb; ++Ab) {
          if (kb = ib[Ab], Ab + 1 < fb)
            if (yb = ib[Ab + 1], kb.value.equals && kb.value.equals(yb.value) || kb.value === yb.value) {
              if (0 !== Ab) continue;
              Db = kb.frame
            } else Db = yb.frame;
          else {
            if (Zb = ib[Ab - 1], kb.value.equals && kb.value.equals(Zb.value) || kb.value === Zb.value) continue;
            Db = Eb
          }
          if (Db)
            for (let Ab = kb.frame; Ab <= Db; Ab += Bb) {
              if (Rb = Mb.Tools.FloatRound(Ab / Yb), Rb === zb) continue;
              zb = Rb, xb = Rb;
              const Tb = {
                key: 0,
                repeatCount: 0,
                RT: ab.RT
              };
              Xb = ab._interpolate(Ab, Tb), LA._SetInterpolatedValue(bb, Xb, Rb, ab, Ub, jb, eb, vb, Pb)
            }
        }
        xb && (Lb.max = xb)
      }
      static _ConvertFactorToVector3OrQuaternion(bb, ab, Ub, Tb, Eb) {
        const Yb = LA._GetBasePositionRotationOrScale(ab, Tb, Eb),
          Bb = Ub.targetProperty.split("."),
          eb = Bb ? Bb[1] : "",
          vb = Eb ? Ab.Quaternion.FromArray(Yb).normalize() : Ab.Pj.FromArray(Yb);
        switch (eb) {
          case "x":
          case "y":
          case "z":
            vb[eb] = bb;
            break;
          case "w":
            vb.w = bb;
            break;
          default:
            Mb.Tools.Error(`glTFAnimation: Unsupported component name "${eb}"!`)
        }
        return vb
      }
      static _SetInterpolatedValue(bb, ab, Ub, Mb, Tb, Eb, Yb, Bb, eb) {
        let vb;
        Yb.push(Ub), "weights" !== Tb ? (Mb.dataType === EA.e.ANIMATIONTYPE_FLOAT && (ab = this._ConvertFactorToVector3OrQuaternion(ab, bb, Mb, Tb, eb)), "rotation" === Tb ? (eb ? Eb = ab : (vb = ab, Ab.Quaternion.RotationYawPitchRollToRef(vb.y, vb.x, vb.z, Eb)), Bb.push(Eb.qUb())) : (vb = ab, Bb.push(vb.qUb()))) : Bb.push([ab])
      }
      static _CreateLinearOrStepAnimation(bb, ab, Ub, Ab, Mb, Tb) {
        for (const Eb of ab.getKeys()) Ab.push(Eb.frame / ab.framePerSecond), LA._AddKeyframeValue(Eb, ab, Mb, Ub, bb, Tb)
      }
      static _CreateCubicSplineAnimation(bb, ab, Ub, Ab, Mb, Tb) {
        ab.getKeys().forEach((function(Eb) {
          Ab.push(Eb.frame / ab.framePerSecond), LA._AddSplineTangent(BA.INTANGENT, Mb, Ub, "CUBICSPLINE", Eb, Tb), LA._AddKeyframeValue(Eb, ab, Mb, Ub, bb, Tb), LA._AddSplineTangent(BA.OUTTANGENT, Mb, Ub, "CUBICSPLINE", Eb, Tb)
        }))
      }
      static _GetBasePositionRotationOrScale(bb, ab, Ub) {
        let Mb;
        if ("rotation" === ab)
          if (Ub) {
            Mb = (bb.rotationQuaternion ?? Ab.Quaternion.Identity()).qUb()
          } else {
            Mb = (bb.rotation ?? Ab.Pj.Zero()).qUb()
          }
        else if ("translation" === ab) {
          Mb = (bb.position ?? Ab.Pj.Zero()).qUb()
        } else {
          Mb = (bb.nY ?? Ab.Pj.One()).qUb()
        }
        return Mb
      }
      static _AddKeyframeValue(bb, ab, Ub, Tb, Eb, Yb) {
        let Bb;
        const eb = ab.dataType;
        if (eb === EA.e.ANIMATIONTYPE_VECTOR3) {
          let ab = bb.value.qUb();
          if ("rotation" === Tb) {
            const bb = Ab.Pj.FromArray(ab);
            ab = Ab.Quaternion.RotationYawPitchRoll(bb.y, bb.x, bb.z).qUb()
          }
          Ub.push(ab)
        } else if (eb === EA.e.ANIMATIONTYPE_FLOAT) {
          if ("weights" === Tb) Ub.push([bb.value]);
          else if (Bb = this._ConvertFactorToVector3OrQuaternion(bb.value, Eb, ab, Tb, Yb), Bb) {
            if ("rotation" === Tb) {
              const bb = Yb ? Bb : Ab.Quaternion.RotationYawPitchRoll(Bb.y, Bb.x, Bb.z).normalize();
              Ub.push(bb.qUb())
            }
            Ub.push(Bb.qUb())
          }
        } else eb === EA.e.ANIMATIONTYPE_QUATERNION ? Ub.push(bb.value.normalize().qUb()) : Mb.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(bb, ab, Ub) {
        let Ab, Mb, Tb = !1;
        if ("rotation" === ab && !Ub) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let Eb = 0, Yb = bb.length; Eb < Yb; ++Eb)
          if (Mb = bb[Eb], Mb.inTangent || Mb.outTangent)
            if (Ab) {
              if ("CUBICSPLINE" !== Ab) {
                Ab = "LINEAR", Tb = !0;
                break
              }
            } else Ab = "CUBICSPLINE";
        else if (Ab) {
          if ("CUBICSPLINE" === Ab || Mb.interpolation && 1 === Mb.interpolation && "STEP" !== Ab) {
            Ab = "LINEAR", Tb = !0;
            break
          }
        } else Ab = Mb.interpolation && 1 === Mb.interpolation ? "STEP" : "LINEAR";
        return Ab || (Ab = "LINEAR"), {
          interpolationType: Ab,
          shouldBakeAnimation: Tb
        }
      }
      static _AddSplineTangent(bb, ab, Ub, Mb, Tb, Eb) {
        let Yb;
        const Bb = bb === BA.INTANGENT ? Tb.inTangent : Tb.outTangent;
        if ("CUBICSPLINE" === Mb) {
          if ("rotation" === Ub)
            if (Bb)
              if (Eb) Yb = Bb.qUb();
              else {
                const bb = Bb;
                Yb = Ab.Quaternion.RotationYawPitchRoll(bb.y, bb.x, bb.z).qUb()
              }
          else Yb = [0, 0, 0, 0];
          else Yb = "weights" === Ub ? Bb ? [Bb] : [0] : Bb ? Bb.qUb() : [0, 0, 0];
          ab.push(Yb)
        }
      }
      static _CalculateMinMaxKeyFrames(bb) {
        let ab = 1 / 0,
          Ub = -1 / 0;
        return bb.forEach((function(bb) {
          ab = Math.min(ab, bb.frame), Ub = Math.max(Ub, bb.frame)
        })), {
          min: ab,
          max: Ub
        }
      }
    }

    function PA(bb, ab, Ub, Tb, Eb, Yb) {
      const Bb = {
          attributes: {},
          influence: bb.influence,
          name: bb.name
        },
        eb = ab.geometry;
      if (!eb) return Mb.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), Bb;
      const Lb = Yb ? -1 : 1,
        Pb = Ab.Pj.Zero();
      let Xb, jb;
      if (bb.hasPositions) {
        const Tb = bb.getPositions(),
          Yb = eb.getVerticesData(vb.g.PositionKind);
        if (Yb) {
          const bb = new Float32Array(Yb.length),
            ab = [1 / 0, 1 / 0, 1 / 0],
            Mb = [-1 / 0, -1 / 0, -1 / 0];
          jb = Yb.length / 3, Xb = 0;
          for (let Ub = Xb; Ub < jb; ++Ub) {
            const Eb = Ab.Pj.FromArray(Yb, 3 * Ub);
            Ab.Pj.FromArray(Tb, 3 * Ub).subtractToRef(Eb, Pb), Pb.x *= Lb, ab[0] = Math.min(ab[0], Pb.x), Mb[0] = Math.max(Mb[0], Pb.x), ab[1] = Math.min(ab[1], Pb.y), Mb[1] = Math.max(Mb[1], Pb.y), ab[2] = Math.min(ab[2], Pb.z), Mb[2] = Math.max(Mb[2], Pb.z), bb[3 * Ub] = Pb.x, bb[3 * Ub + 1] = Pb.y, bb[3 * Ub + 2] = Pb.z
          }
          const eb = Ub.createBufferView(bb, 12),
            vb = Ub.createAccessor(eb, "VEC3", 5126, Tb.length / 3, 0, {
              min: ab,
              max: Mb
            });
          Eb.push(vb), Bb.attributes.POSITION = Eb.length - 1
        } else Mb.Tools.Warn(`Morph target positions for mesh ${ab.name} were not exported. Mesh does not have position vertex data`)
      }
      if (bb.hasNormals) {
        const Tb = bb.getNormals(),
          Yb = eb.getVerticesData(vb.g.NormalKind);
        if (Yb) {
          const bb = new Float32Array(Yb.length);
          jb = Yb.length / 3, Xb = 0;
          for (let Ub = Xb; Ub < jb; ++Ub) {
            const ab = Ab.Pj.FromArray(Yb, 3 * Ub).normalize();
            Ab.Pj.FromArray(Tb, 3 * Ub).normalize().subtractToRef(ab, Pb), bb[3 * Ub] = Pb.x * Lb, bb[3 * Ub + 1] = Pb.y, bb[3 * Ub + 2] = Pb.z
          }
          const ab = Ub.createBufferView(bb, 12),
            Mb = Ub.createAccessor(ab, "VEC3", 5126, Tb.length / 3, 0);
          Eb.push(Mb), Bb.attributes.NORMAL = Eb.length - 1
        } else Mb.Tools.Warn(`Morph target normals for mesh ${ab.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (bb.hasTangents) {
        const Tb = bb.getTangents(),
          Yb = eb.getVerticesData(vb.g.TangentKind);
        if (Yb) {
          jb = Yb.length / 4;
          const bb = new Float32Array(3 * jb);
          Xb = 0;
          for (let Ub = Xb; Ub < jb; ++Ub) {
            const ab = Ab.Pj.FromArray(Yb, 4 * Ub);
            wU(ab);
            const Mb = Ab.Pj.FromArray(Tb, 3 * Ub);
            wU(Mb), Mb.subtractToRef(ab, Pb), bb[3 * Ub] = Pb.x * Lb, bb[3 * Ub + 1] = Pb.y, bb[3 * Ub + 2] = Pb.z
          }
          const ab = Ub.createBufferView(bb, 12),
            Mb = Ub.createAccessor(ab, "VEC3", 5126, jb, 0);
          Eb.push(Mb), Bb.attributes.TANGENT = Eb.length - 1
        } else Mb.Tools.Warn(`Morph target tangents for mesh ${ab.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (bb.hasColors) {
        const Tb = bb.getColors(),
          Yb = eb.getVerticesData(vb.g.ColorKind),
          Lb = eb.getVertexBuffer(vb.g.ColorKind);
        if (Yb && Lb) {
          const bb = Lb.getSize();
          jb = Yb.length / bb;
          const ab = new Float32Array(jb * bb);
          Xb = 0;
          for (let Ub = Xb; Ub < jb; ++Ub)
            if (3 === bb) {
              const Mb = Ab.Pj.FromArray(Yb, Ub * bb);
              Ab.Pj.FromArray(Tb, Ub * bb).subtractToRef(Mb, Pb), ab[3 * Ub] = Pb.x, ab[3 * Ub + 1] = Pb.y, ab[3 * Ub + 2] = Pb.z
            } else if (4 === bb) {
            const Mb = new Ab.Vector4,
              Eb = Ab.Vector4.FromArray(Yb, Ub * bb);
            Ab.Vector4.FromArray(Tb, Ub * bb).subtractToRef(Eb, Mb), ab[4 * Ub] = Mb.x, ab[4 * Ub + 1] = Mb.y, ab[4 * Ub + 2] = Mb.z, ab[4 * Ub + 3] = Mb.w
          } else Mb.Tools.Warn(`Unsupported number of components for color attribute: ${bb}`);
          const eb = Ub.createBufferView(ab, 4 * bb),
            vb = Ub.createAccessor(eb, 3 === bb ? "VEC3" : "VEC4", 5126, jb, 0);
          Eb.push(vb), Bb.attributes.COLOR_0 = Eb.length - 1
        } else Mb.Tools.Warn(`Morph target colors for mesh ${ab.name} were not exported. Mesh does not have colors vertex data`)
      }
      return Bb
    }
    var XA = Ub(40716);
    class jA {}
    jA.DEFAULT_COLOR = gb.c.White(), jA.DEFAULT_WIDTH_ATTENUATED = 1, jA.DEFAULT_WIDTH = .1;
    var RA = Ub(40192);
    class kA {
      constructor(bb) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = bb
      }
      moveTo(bb, ab) {
        this._currentPath = new RA.j(bb, ab), this._tempPaths.push(this._currentPath)
      }
      lineTo(bb, ab) {
        this._currentPath.addLineTo(bb, ab)
      }
      quadraticCurveTo(bb, ab, Ub, Ab) {
        this._currentPath.addQuadraticCurveTo(bb, ab, Ub, Ab, this._resolution)
      }
      bezierCurveTo(bb, ab, Ub, Ab, Mb, Tb) {
        this._currentPath.addBezierCurveTo(bb, ab, Ub, Ab, Mb, Tb, this._resolution)
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

    function yA(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = Tb.glyphs[bb] || Tb.glyphs["?"];
      if (!Eb) return null;
      const Yb = new kA(Mb);
      if (Eb.o) {
        const bb = Eb.o.split(" ");
        for (let Mb = 0, Tb = bb.length; Mb < Tb;) {
          switch (bb[Mb++]) {
            case "m": {
              const Tb = parseInt(bb[Mb++]) * ab + Ub,
                Eb = parseInt(bb[Mb++]) * ab + Ab;
              Yb.moveTo(Tb, Eb);
              break
            }
            case "l": {
              const Tb = parseInt(bb[Mb++]) * ab + Ub,
                Eb = parseInt(bb[Mb++]) * ab + Ab;
              Yb.lineTo(Tb, Eb);
              break
            }
            case "q": {
              const Tb = parseInt(bb[Mb++]) * ab + Ub,
                Eb = parseInt(bb[Mb++]) * ab + Ab,
                Bb = parseInt(bb[Mb++]) * ab + Ub,
                eb = parseInt(bb[Mb++]) * ab + Ab;
              Yb.quadraticCurveTo(Bb, eb, Tb, Eb);
              break
            }
            case "b": {
              const Tb = parseInt(bb[Mb++]) * ab + Ub,
                Eb = parseInt(bb[Mb++]) * ab + Ab,
                Bb = parseInt(bb[Mb++]) * ab + Ub,
                eb = parseInt(bb[Mb++]) * ab + Ab,
                vb = parseInt(bb[Mb++]) * ab + Ub,
                Lb = parseInt(bb[Mb++]) * ab + Ab;
              Yb.bezierCurveTo(Bb, eb, vb, Lb, Tb, Eb);
              break
            }
          }
        }
      }
      return Yb.extractHoles(), {
        offsetX: Eb.ha * ab,
        shapePath: Yb
      }
    }

    function ZA(bb, ab, Ub, Ab) {
      const Mb = Array.from(bb),
        Tb = ab / Ab.resolution,
        Eb = (Ab.boundingBox.yMax - Ab.boundingBox.yMin + Ab.underlineThickness) * Tb,
        Yb = [];
      let Bb = 0,
        eb = 0;
      for (let vb = 0; vb < Mb.length; vb++) {
        const bb = Mb[vb];
        if ("\n" === bb) Bb = 0, eb -= Eb;
        else {
          const ab = yA(bb, Tb, Bb, eb, Ub, Ab);
          ab && (Bb += ab.offsetX, Yb.push(ab.shapePath))
        }
      }
      return Yb
    }
    class DA {
      static ConvertPoints(bb, ab) {
        if (bb.length && Array.isArray(bb) && "number" === typeof bb[0]) return [bb];
        if (bb.length && Array.isArray(bb[0]) && "number" === typeof bb[0][0]) return bb;
        if (bb.length && !Array.isArray(bb[0]) && bb[0] instanceof rb.m) {
          const ab = [];
          for (let Ub = 0; Ub < bb.length; Ub++) {
            const Ab = bb[Ub];
            ab.push(Ab.x, Ab.y, Ab.z)
          }
          return [ab]
        }
        if (bb.length > 0 && Array.isArray(bb[0]) && bb[0].length > 0 && bb[0][0] instanceof rb.m) {
          const ab = [],
            Ub = bb;
          for (const bb of Ub) ab.push(bb.flatMap((bb => [bb.x, bb.y, bb.z])));
          return ab
        }
        if (bb instanceof Float32Array) {
          if (ab?.floatArrayStride) {
            const Ub = [],
              Ab = 3 * ab.floatArrayStride;
            for (let ab = 0; ab < bb.length; ab += Ab) {
              const Mb = new Array(Ab);
              for (let Ub = 0; Ub < Ab; Ub++) Mb[Ub] = bb[ab + Ub];
              Ub.push(Mb)
            }
            return Ub
          }
          return [Array.from(bb)]
        }
        if (bb.length && bb[0] instanceof Float32Array) {
          const ab = [];
          for (const Ub of bb) ab.push(Array.from(Ub));
          return ab
        }
        return []
      }
      static OmitZeroLengthPredicate(bb, ab, Ub) {
        const Ab = [];
        return ab.subtract(bb).lengthSquared() > 0 && Ab.push([bb, ab]), Ub.subtract(ab).lengthSquared() > 0 && Ab.push([ab, Ub]), bb.subtract(Ub).lengthSquared() > 0 && Ab.push([Ub, bb]), 0 === Ab.length ? null : Ab
      }
      static OmitDuplicatesPredicate(bb, ab, Ub, Ab) {
        const Mb = [];
        return DA._SearchInPoints(bb, ab, Ab) || Mb.push([bb, ab]), DA._SearchInPoints(ab, Ub, Ab) || Mb.push([ab, Ub]), DA._SearchInPoints(Ub, bb, Ab) || Mb.push([Ub, bb]), 0 === Mb.length ? null : Mb
      }
      static _SearchInPoints(bb, ab, Ub) {
        for (const Ab of Ub)
          for (let Ub = 0; Ub < Ab.length; Ub++)
            if (Ab[Ub]?.equals(bb) && (Ab[Ub + 1]?.equals(ab) || Ab[Ub - 1]?.equals(ab))) return !0;
        return !1
      }
      static MeshesToLines(bb, ab) {
        const Ub = [];
        for (let Ab = 0; Ab < bb.length; Ab++) {
          const Mb = bb[Ab],
            Tb = Mb.getVerticesData(Kb.m.PositionKind),
            Eb = Mb.uUb();
          if (Tb && Eb)
            for (let bb = 0, Yb = 0; bb < Eb.length; bb++) {
              const Bb = 3 * Eb[Yb++],
                eb = 3 * Eb[Yb++],
                vb = 3 * Eb[Yb++],
                Lb = new rb.m(Tb[Bb], Tb[Bb + 1], Tb[Bb + 2]),
                Pb = new rb.m(Tb[eb], Tb[eb + 1], Tb[eb + 2]),
                Xb = new rb.m(Tb[vb], Tb[vb + 1], Tb[vb + 2]);
              if (ab) {
                const Yb = ab(Lb, Pb, Xb, Ub, bb, Bb, Mb, Ab, Tb, Eb);
                if (Yb)
                  for (const bb of Yb) Ub.push(bb)
              } else Ub.push([Lb, Pb], [Pb, Xb], [Xb, Lb])
            }
        }
        return Ub
      }
      static ToVector3Array(bb) {
        if (Array.isArray(bb[0])) {
          const ab = [],
            Ub = bb;
          for (const bb of Ub) {
            const Ub = [];
            for (let ab = 0; ab < bb.length; ab += 3) Ub.push(new rb.m(bb[ab], bb[ab + 1], bb[ab + 2]));
            ab.push(Ub)
          }
          return ab
        }
        const ab = bb,
          Ub = [];
        for (let Ab = 0; Ab < ab.length; Ab += 3) Ub.push(new rb.m(ab[Ab], ab[Ab + 1], ab[Ab + 2]));
        return Ub
      }
      static ToNumberArray(bb) {
        return bb.flatMap((bb => [bb.x, bb.y, bb.z]))
      }
      static GetPointsCountInfo(bb) {
        const ab = new Array(bb.length);
        let Ub = 0;
        for (let Ab = bb.length; Ab--;) ab[Ab] = bb[Ab].length / 3, Ub += ab[Ab];
        return {
          total: Ub,
          counts: ab
        }
      }
      static GetLineLength(bb) {
        if (0 === bb.length) return 0;
        let ab;
        ab = "number" === typeof bb[0] ? DA.ToVector3Array(bb) : bb;
        const Ub = rb.j.Pj[0];
        let Ab = 0;
        for (let Mb = 0; Mb < ab.length - 1; Mb++) {
          const bb = ab[Mb];
          Ab += ab[Mb + 1].subtractToRef(bb, Ub).length()
        }
        return Ab
      }
      static GetLineLengthArray(bb, ab) {
        const Ub = ab ? new Float32Array(ab, 0, bb.length / 3) : new Float32Array(bb.length / 3);
        let Ab = 0;
        for (let Mb = 0, Tb = bb.length / 3 - 1; Mb < Tb; Mb++) {
          let ab = bb[3 * Mb + 0],
            Tb = bb[3 * Mb + 1],
            Eb = bb[3 * Mb + 2];
          ab -= bb[3 * Mb + 3], Tb -= bb[3 * Mb + 4], Eb -= bb[3 * Mb + 5];
          Ab += Math.sqrt(ab * ab + Tb * Tb + Eb * Eb), Ub[Mb + 1] = Ab
        }
        return Ub
      }
      static SegmentizeSegmentByCount(bb, ab, Ub) {
        const Ab = [],
          Mb = ab.subtract(bb),
          Tb = rb.j.Pj[0];
        Tb.B3(Ub);
        const Eb = rb.j.Pj[1];
        Mb.divideToRef(Tb, Eb);
        let Yb = bb.clone();
        Ab.push(Yb);
        for (let Bb = 0; Bb < Ub; Bb++) Yb = Yb.clone(), Ab.push(Yb.addInPlace(Eb));
        return Ab
      }
      static SegmentizeLineBySegmentLength(bb, ab) {
        const Ub = bb[0] instanceof rb.m ? DA.GetLineSegments(bb) : "number" === typeof bb[0] ? DA.GetLineSegments(DA.ToVector3Array(bb)) : bb,
          Ab = [];
        for (const Mb of Ub)
          if (Mb.length > ab) {
            const bb = DA.SegmentizeSegmentByCount(Mb.point1, Mb.point2, Math.ceil(Mb.length / ab));
            for (const ab of bb) Ab.push(ab)
          } else Ab.push(Mb.point1), Ab.push(Mb.point2);
        return Ab
      }
      static SegmentizeLineBySegmentCount(bb, ab) {
        const Ub = "number" === typeof bb[0] ? DA.ToVector3Array(bb) : bb,
          Ab = DA.GetLineLength(Ub) / ab;
        return DA.SegmentizeLineBySegmentLength(Ub, Ab)
      }
      static GetLineSegments(bb) {
        const ab = [];
        for (let Ub = 0; Ub < bb.length - 1; Ub++) {
          const Ab = bb[Ub],
            Mb = bb[Ub + 1],
            Tb = Mb.subtract(Ab).length();
          ab.push({
            point1: Ab,
            point2: Mb,
            length: Tb
          })
        }
        return ab
      }
      static GetMinMaxSegmentLength(bb) {
        const ab = DA.GetLineSegments(bb).sort((bb => bb.length));
        return {
          min: ab[0].length,
          max: ab[ab.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Mb = ab * Ub;
        let Tb = 0,
          Eb = 0;
        const Yb = bb.length;
        for (let eb = 0; eb < Yb; eb++) {
          if (Mb <= Tb + bb[eb].length) {
            Eb = eb;
            break
          }
          Tb += bb[eb].length
        }
        const Bb = (Mb - Tb) / bb[Eb].length;
        return bb[Eb].point2.subtractToRef(bb[Eb].point1, rb.j.Pj[0]), rb.j.Pj[0].scaleToRef(Bb, rb.j.Pj[1]), Ab || rb.j.Pj[1].addInPlace(bb[Eb].point1), rb.j.Pj[1].clone()
      }
      static GetCircleLinePoints(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb,
          Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / ab;
        const Tb = [];
        for (let Eb = 0; Eb <= ab; Eb++) Tb.push(new rb.m(Math.cos(Eb * Mb) * bb, Math.sin(Eb * Mb) * Ab, Ub));
        return Tb
      }
      static GetBezierLinePoints(bb, ab, Ub, Ab) {
        return RA.h.CreateQuadraticBezier(bb, ab, Ub, Ab).getPoints().flatMap((bb => [bb.x, bb.y, bb.z]))
      }
      static GetArrowCap(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [bb.clone(), bb.add(ab.multiplyByFloats(Ub, Ub, Ub))],
          widths: [Ab, Mb, Tb, Eb]
        }
      }
      static GetPointsFromText(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const Eb = [],
          Yb = ZA(bb, ab, Ub, Ab);
        for (const Bb of Yb) {
          for (const bb of Bb.paths) {
            const ab = [],
              Ub = bb.getPoints();
            for (const bb of Ub) ab.push(bb.x, bb.y, Mb);
            Eb.push(ab)
          }
          if (Tb)
            for (const bb of Bb.holes) {
              const ab = [],
                Ub = bb.getPoints();
              for (const bb of Ub) ab.push(bb.x, bb.y, Mb);
              Eb.push(ab)
            }
        }
        return Eb
      }
      static Color3toRGBAUint8(bb) {
        const ab = new Uint8Array(4 * bb.length);
        for (let Ub = 0, Ab = 0; Ub < bb.length; Ub++) ab[Ab++] = 255 * bb[Ub].r, ab[Ab++] = 255 * bb[Ub].g, ab[Ab++] = 255 * bb[Ub].b, ab[Ab++] = 255;
        return ab
      }
      static CreateColorsTexture(bb, ab, Ub, Ab) {
        const Mb = Ab.vj().getCaps().maxTextureSize ?? 1,
          Tb = ab.length > Mb ? Mb : ab.length,
          Eb = Math.ceil(ab.length / Mb);
        Eb > 1 && (ab = [...ab, ...Array(Tb * Eb - ab.length).fill(ab[0])]);
        const Yb = DA.Color3toRGBAUint8(ab),
          Bb = new ib.e(Yb, Tb, Eb, vU.c.TEXTUREFORMAT_RGBA, Ab, !1, !0, Ub);
        return Bb.name = bb, Bb
      }
      static PrepareEmptyColorsTexture(bb) {
        if (!jA.EmptyColorsTexture) {
          const ab = new Uint8Array(4);
          jA.EmptyColorsTexture = new ib.e(ab, 1, 1, vU.c.TEXTUREFORMAT_RGBA, bb, !1, !1, ib.e.NEAREST_NEAREST), jA.EmptyColorsTexture.name = "grlEmptyColorsTexture", jA.EmptyColorsTexture.UW.addOnce((() => {
            jA.EmptyColorsTexture = null
          }))
        }
        return jA.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        jA.EmptyColorsTexture?.dispose(), jA.EmptyColorsTexture = null
      }
      static BooleanToNumber(bb) {
        return bb ? 1 : 0
      }
    }
    class zA extends ob.d {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class xA extends lb.d {
      isCompatible(bb) {
        return !0
      }
      constructor(bb, ab, Ub) {
        Ub = Ub || {
          color: jA.DEFAULT_COLOR
        };
        const Ab = new zA;
        Ab.GREASED_LINE_HAS_COLOR = !!Ub.color && !Ub.useColors, Ab.GREASED_LINE_SIZE_ATTENUATION = Ub.sizeAttenuation ?? !1, Ab.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === Ub.colorDistributionType, Ab.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (ab ?? bb.oN()).useRightHandedSystem, Ab.GREASED_LINE_CAMERA_FACING = Ub.cameraFacing ?? !0, super(bb, xA.GREASED_LINE_MATERIAL_NAME, 200, Ab, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = Ub?.forceGLSL || xA.ForceGLSL, this._scene = ab ?? bb.oN(), this._engine = this._scene.vj(), this._cameraFacing = Ub.cameraFacing ?? !0, this.visibility = Ub.visibility ?? 1, this.useDash = Ub.useDash ?? !1, this.dashRatio = Ub.dashRatio ?? .5, this.dashOffset = Ub.dashOffset ?? 0, this.width = Ub.width ? Ub.width : Ub.sizeAttenuation ? jA.DEFAULT_WIDTH_ATTENUATED : jA.DEFAULT_WIDTH, this._sizeAttenuation = Ub.sizeAttenuation ?? !1, this.colorMode = Ub.colorMode ?? 0, this._color = Ub.color ?? null, this.useColors = Ub.useColors ?? !1, this._colorsDistributionType = Ub.colorDistributionType ?? 0, this.colorsSampling = Ub.colorsSampling ?? ib.e.NEAREST_NEAREST, this._colors = Ub.colors ?? null, this.dashCount = Ub.dashCount ?? 1, this.resolution = Ub.resolution ?? new rb.l(this._engine.getRenderWidth(), this._engine.getRenderHeight()), Ub.colorsTexture ? this.colorsTexture = Ub.colorsTexture : this._colors ? this.colorsTexture = DA.CreateColorsTexture(`${bb.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? jA.DEFAULT_COLOR, DA.PrepareEmptyColorsTexture(this._scene)), this._engine.UW.add((() => {
          DA.DisposeEmptyColorsTexture()
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
        const ab = [{
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
        return this._cameraFacing && ab.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === bb && ab.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: ab,
          vertex: this._cameraFacing && this._isGLSL(bb) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(bb) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(bb) {
        if (this._cameraFacing) {
          bb.i5("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || bb.i5("viewProjection", this._scene.getTransformMatrix());
          const ab = rb.j.Vector4[0];
          ab.x = this._aspect, ab.y = this._resolution.x, ab.z = this._resolution.y, ab.w = this.width, bb.updateVector4("grl_aspect_resolution_lineWidth", ab)
        }
        const ab = rb.j.Vector4[0];
        ab.x = DA.BooleanToNumber(this.useDash), ab.y = this._dashArray, ab.z = this.dashOffset, ab.w = this.dashRatio, bb.updateVector4("grl_dashOptions", ab);
        const Ub = rb.j.Vector4[1];
        Ub.x = this.colorMode, Ub.y = this.visibility, Ub.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, Ub.w = DA.BooleanToNumber(this.useColors), bb.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", Ub), this._color && bb.updateColor3("grl_singleColor", this._color);
        const Ab = this.colorsTexture ?? jA.EmptyColorsTexture;
        bb.setTexture("grl_colors", Ab), bb.updateFloat2("grl_textureSize", Ab?.getSize().width ?? 1, Ab?.getSize().height ?? 1)
      }
      prepareDefines(bb, ab, Ub) {
        bb.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, bb.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, bb.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, bb.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = ab.useRightHandedSystem, bb.GREASED_LINE_CAMERA_FACING = this._cameraFacing, bb.GREASED_LINE_USE_OFFSETS = !!Ub.offsets
      }
      getClassName() {
        return xA.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(ab) ? function(bb, ab) {
          if ("vertex" === bb) {
            const bb = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return ab && (bb["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), bb
          }
          return "fragment" === bb ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(bb, this._cameraFacing) : function(bb, ab) {
          if ("vertex" === bb) {
            const bb = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return ab && (bb["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), bb
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
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ab = this._colors?.length ?? 0;
        if (this._colors = bb, null !== bb && 0 !== bb.length) {
          if (!ab || Ub)
            if (this.colorsTexture && Ab === bb.length && !Ub) {
              const ab = DA.Color3toRGBAUint8(bb);
              this.colorsTexture.update(ab)
            } else this.colorsTexture?.dispose(), this.colorsTexture = DA.CreateColorsTexture(`${this._material.name}-colors-texture`, bb, this.colorsSampling, this._scene)
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
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== bb || null !== this._color && null === bb ? (this._color = bb, ab || this.markAllDefinesAsDirty()) : this._color = bb
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
          ab = {
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
        return this._colors && (ab.colors = this._colors), this._color && (ab.color = this._color), bb.greasedLineMaterialOptions = ab, bb
      }
      parse(bb, ab, Ub) {
        super.parse(bb, ab, Ub);
        const Ab = bb.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Ab.color && this.setColor(Ab.color, !0), Ab.colorDistributionType && (this.colorsDistributionType = Ab.colorDistributionType), Ab.colors && (this.colors = Ab.colors), Ab.colorsSampling && (this.colorsSampling = Ab.colorsSampling), Ab.colorMode && (this.colorMode = Ab.colorMode), Ab.useColors && (this.useColors = Ab.useColors), Ab.visibility && (this.visibility = Ab.visibility), Ab.useDash && (this.useDash = Ab.useDash), Ab.dashCount && (this.dashCount = Ab.dashCount), Ab.dashRatio && (this.dashRatio = Ab.dashRatio), Ab.dashOffset && (this.dashOffset = Ab.dashOffset), Ab.width && (this.width = Ab.width), Ab.sizeAttenuation && (this.sizeAttenuation = Ab.sizeAttenuation), Ab.resolution && (this.resolution = Ab.resolution), this.colors ? this.colorsTexture = DA.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, ab) : DA.PrepareEmptyColorsTexture(ab), this.markAllDefinesAsDirty()
      }
      copyTo(bb) {
        const ab = bb;
        ab.colorsTexture?.dispose(), this._colors && (ab.colorsTexture = DA.CreateColorsTexture(`${ab._material.name}-colors-texture`, this._colors, ab.colorsSampling, this._scene)), ab.setColor(this.color, !0), ab.colorsDistributionType = this.colorsDistributionType, ab.colorsSampling = this.colorsSampling, ab.colorMode = this.colorMode, ab.useColors = this.useColors, ab.visibility = this.visibility, ab.useDash = this.useDash, ab.dashCount = this.dashCount, ab.dashRatio = this.dashRatio, ab.dashOffset = this.dashOffset, ab.width = this.width, ab.sizeAttenuation = this.sizeAttenuation, ab.resolution = this.resolution, ab.markAllDefinesAsDirty()
      }
      _isGLSL(bb) {
        return 0 === bb || this._forceGLSL
      }
    }
    xA.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", xA.ForceGLSL = !1;
    var iA = Ub(39522),
      fA = Ub(39534),
      mA = Ub(37982),
      pA = Ub(39598),
      NA = Ub(38924);
    class WA extends pA.o {
      constructor(bb, ab, Ab) {
        const Mb = ab.vj(),
          Tb = Mb.isWebGPU && !(Ab.forceGLSL || WA.ForceGLSL),
          Eb = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        ab.useRightHandedSystem && Eb.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const Yb = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Ab.cameraFacing ? (Eb.push("GREASED_LINE_CAMERA_FACING"), Yb.push("grl_previousAndSide", "grl_nextAndCounters")) : (Yb.push("grl_slopes"), Yb.push("grl_counters"));
        const Bb = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (Tb || Bb.push("world", "viewProjection", "view", "projection"), super(bb, ab, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: Tb ? ["Scene", "Mesh"] : void 0,
            attributes: Yb,
            uniforms: Bb,
            samplers: Tb ? [] : ["grlColors"],
            defines: Eb,
            extraInitializationsAsync: async () => {
              Tb ? await Promise.all([Ub.e(324).then((() => Ub(61020))), Ub.e(383).then((() => Ub(61027)))]) : await Promise.all([Ub.e(317).then((() => Ub(61030))), Ub.e(384).then((() => Ub(61037)))])
            },
            shaderLanguage: Tb ? 1 : 0
          }), this._color = gb.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Ab = Ab || {
            color: jA.DEFAULT_COLOR
          }, this.visibility = Ab.visibility ?? 1, this.useDash = Ab.useDash ?? !1, this.dashRatio = Ab.dashRatio ?? .5, this.dashOffset = Ab.dashOffset ?? 0, this.dashCount = Ab.dashCount ?? 1, this.width = Ab.width ? Ab.width : Ab.sizeAttenuation && Ab.cameraFacing ? jA.DEFAULT_WIDTH_ATTENUATED : jA.DEFAULT_WIDTH, this.sizeAttenuation = Ab.sizeAttenuation ?? !1, this.color = Ab.color ?? gb.c.White(), this.useColors = Ab.useColors ?? !1, this.colorsDistributionType = Ab.colorDistributionType ?? 0, this.colorsSampling = Ab.colorsSampling ?? ib.e.NEAREST_NEAREST, this.colorMode = Ab.colorMode ?? 0, this._colors = Ab.colors ?? null, this._cameraFacing = Ab.cameraFacing ?? !0, this.resolution = Ab.resolution ?? new rb.l(Mb.getRenderWidth(), Mb.getRenderHeight()), Ab.colorsTexture ? this.colorsTexture = Ab.colorsTexture : this._colors ? this.colorsTexture = DA.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, ab) : (this._color = this._color ?? jA.DEFAULT_COLOR, this.colorsTexture = DA.PrepareEmptyColorsTexture(ab)), Tb) {
          const bb = new NA.b;
          bb.setParameters(), bb.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", bb)
        }
        Mb.UW.add((() => {
          DA.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== jA.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new rb.l(this._colorMode, this._colorsDistributionType))
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
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Ab = this._colors?.length ?? 0;
        if (this._colors = bb, null !== bb && 0 !== bb.length) {
          if (!ab || Ub)
            if (this._colorsTexture && Ab === bb.length && !Ub) {
              const ab = DA.Color3toRGBAUint8(bb);
              this._colorsTexture.update(ab)
            } else this._colorsTexture && this._colorsTexture !== jA.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = DA.CreateColorsTexture(`${this.name}-colors-texture`, bb, this.colorsSampling, this.oN())
        } else {
          this._colorsTexture && this._colorsTexture !== jA.EmptyColorsTexture && this._colorsTexture.dispose();
          const bb = this.oN();
          bb && (this.colorsTexture = DA.PrepareEmptyColorsTexture(bb))
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
        this._useColors = bb, this.setFloat("grlUseColors", DA.BooleanToNumber(bb))
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
        this._useDash = bb, this.setFloat("grlUseDash", DA.BooleanToNumber(bb))
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
        this._sizeAttenuation = bb, this.setFloat("grlSizeAttenuation", DA.BooleanToNumber(bb))
      }
      get color() {
        return this._color
      }
      set color(bb) {
        this.setColor(bb)
      }
      setColor(bb) {
        bb = bb ?? jA.DEFAULT_COLOR, this._color = bb, this.setColor3("grlColor", bb)
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
          ab = {
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
        return this._colors && (ab.colors = this._colors), bb.greasedLineMaterialOptions = ab, bb
      }
      parse(bb, ab, Ub) {
        const Ab = bb.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Ab.color && (this.color = Ab.color), Ab.colorDistributionType && (this.colorsDistributionType = Ab.colorDistributionType), Ab.colorsSampling && (this.colorsSampling = Ab.colorsSampling), Ab.colorMode && (this.colorMode = Ab.colorMode), Ab.useColors && (this.useColors = Ab.useColors), Ab.visibility && (this.visibility = Ab.visibility), Ab.useDash && (this.useDash = Ab.useDash), Ab.dashCount && (this.dashCount = Ab.dashCount), Ab.dashRatio && (this.dashRatio = Ab.dashRatio), Ab.dashOffset && (this.dashOffset = Ab.dashOffset), Ab.width && (this.width = Ab.width), Ab.sizeAttenuation && (this.sizeAttenuation = Ab.sizeAttenuation), Ab.resolution && (this.resolution = Ab.resolution), Ab.colors ? this.colorsTexture = DA.CreateColorsTexture(`${this.name}-colors-texture`, Ab.colors, this.colorsSampling, this.oN()) : this.colorsTexture = DA.PrepareEmptyColorsTexture(ab), this._cameraFacing = Ab.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var HA, IA, dA;
    WA.ForceGLSL = !1,
      function(bb) {
        bb[bb.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", bb[bb.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(HA || (HA = {})),
      function(bb) {
        bb[bb.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", bb[bb.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", bb[bb.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(IA || (IA = {})),
      function(bb) {
        bb[bb.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", bb[bb.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", bb[bb.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", bb[bb.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", bb[bb.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(dA || (dA = {}));
    class FA extends iA.d {
      constructor(bb, ab, Ub) {
        super(bb, ab, null, null, !1, !1), this.name = bb, this._options = Ub, this._lazy = !1, this._updatable = !1, this._engine = ab.vj(), this._lazy = Ub.lazy ?? !1, this._updatable = Ub.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = Ub.colorPointers ?? [], this._widths = Ub.widths ?? new Array(Ub.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(bb) {
        let ab = 0;
        for (const Ab of this._points) ab += Ab.length;
        const Ub = ab / 3 * 2 - this._widths.length;
        for (let Ab = 0; Ab < Ub; Ab++) this._widths.push(bb)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.jj && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(bb, ab) {
        for (const Ub of bb) this._points.push(Ub);
        this._lazy || this.setPoints(this._points, ab)
      }
      dispose(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(bb, ab)
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
        this.material instanceof WA && this.material.setDefine("GREASED_LINE_USE_OFFSETS", bb?.length > 0), this._offsets = bb, this._offsetsBuffer ? this._offsetsBuffer.update(bb) : this._createOffsetsBuffer(bb)
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
        if (this.material && this.material instanceof WA) return this.material;
        const bb = this.material?.pluginManager?.getPlugin(xA.GREASED_LINE_MATERIAL_NAME);
        return bb || void 0
      }
      get points() {
        const bb = [];
        return mA.e.DeepCopy(this._points, bb), bb
      }
      setPoints(bb, ab) {
        this._points = DA.ConvertPoints(bb, ab?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), ab?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, ab)
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
        const ab = new fA.c;
        return ab.positions = this._vertexPositions, ab.indices = this._indices, ab.uvs = this._uvs, bb && (ab.normals = [], fA.c.ComputeNormals(this._vertexPositions, this._indices, ab.normals)), ab.applyToMesh(this, this._options.updatable), ab
      }
      _createOffsetsBuffer(bb) {
        const ab = this._scene.vj(),
          Ub = new Kb.c(ab, bb, this._updatable, 3);
        this.setVerticesBuffer(Ub.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = Ub
      }
    }
    class hA {
      constructor(bb, ab) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = bb, this.wasAddedByNoopNode = ab
      }
      getIndicesAccessor(bb, ab, Ub, Ab, Mb) {
        return this._indicesAccessorMap.get(bb)?.get(ab)?.get(Ub)?.get(Ab)?.get(Mb)
      }
      setIndicesAccessor(bb, ab, Ub, Ab, Mb, Tb) {
        let Eb = this._indicesAccessorMap.get(bb);
        Eb || (Eb = new Map, this._indicesAccessorMap.set(bb, Eb));
        let Yb = Eb.get(ab);
        Yb || (Yb = new Map, Eb.set(ab, Yb));
        let Bb = Yb.get(Ub);
        Bb || (Bb = new Map, Yb.set(Ub, Bb));
        let eb = Bb.get(Ab);
        eb || (eb = new Map, Bb.set(Ab, eb)), eb.set(Mb, Tb)
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
      setVertexBufferView(bb, ab) {
        this._vertexBufferViewMap.set(bb, ab)
      }
      setRemappedBufferView(bb, ab, Ub) {
        this._remappedBufferView.set(bb, new Map), this._remappedBufferView.get(bb).set(ab, Ub)
      }
      getRemappedBufferView(bb, ab) {
        return this._remappedBufferView.get(bb)?.get(ab)
      }
      getVertexAccessor(bb, ab, Ub) {
        return this._vertexAccessorMap.get(bb)?.get(ab)?.get(Ub)
      }
      setVertexAccessor(bb, ab, Ub, Ab) {
        let Mb = this._vertexAccessorMap.get(bb);
        Mb || (Mb = new Map, this._vertexAccessorMap.set(bb, Mb));
        let Tb = Mb.get(ab);
        Tb || (Tb = new Map, Mb.set(ab, Tb)), Tb.set(Ub, Ab)
      }
      hasVertexColorAlpha(bb) {
        return this._vertexMapColorAlpha.get(bb) || !1
      }
      setHasVertexColorAlpha(bb, ab) {
        return this._vertexMapColorAlpha.set(bb, ab)
      }
      getMesh(bb) {
        return this._meshMap.get(bb)
      }
      setMesh(bb, ab) {
        this._meshMap.set(bb, ab)
      }
      bindMorphDataToMesh(bb, ab) {
        const Ub = this._meshMorphTargetMap.get(bb) || [];
        this._meshMorphTargetMap.set(bb, Ub), -1 === Ub.indexOf(ab) && Ub.push(ab)
      }
      getMorphTargetsFromMesh(bb) {
        return this._meshMorphTargetMap.get(bb)
      }
    }
    class GA {
      _ApplyExtension(bb, ab, Ub, Ab) {
        if (Ub >= ab.length) return Promise.resolve(bb);
        const Mb = Ab(ab[Ub], bb);
        return Mb ? Mb.then((async bb => bb ? await this._ApplyExtension(bb, ab, Ub + 1, Ab) : null)) : this._ApplyExtension(bb, ab, Ub + 1, Ab)
      }
      _ApplyExtensions(bb, ab) {
        const Ub = [];
        for (const Ab of GA._ExtensionNames) Ub.push(this._extensions[Ab]);
        return this._ApplyExtension(bb, Ub, 0, ab)
      }
      _extensionsPostExportNodeAsync(bb, ab, Ub, Ab, Mb) {
        return this._ApplyExtensions(ab, ((ab, Tb) => ab.postExportNodeAsync && ab.postExportNodeAsync(bb, Tb, Ub, Ab, Mb, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(bb, ab, Ub) {
        return this._ApplyExtensions(ab, ((ab, Ab) => ab.postExportMaterialAsync && ab.postExportMaterialAsync(bb, Ab, Ub)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(bb, ab, Ub) {
        const Ab = [];
        return await Promise.all(GA._ExtensionNames.map((async Mb => {
          const Tb = this._extensions[Mb];
          if (Tb.postExportMaterialAdditionalTexturesAsync) {
            const Mb = await Tb.postExportMaterialAdditionalTexturesAsync(bb, ab, Ub);
            Ab.push(...Mb)
          }
        }))), Ab
      }
      _extensionsPostExportTextures(bb, ab, Ub) {
        for (const Ab of GA._ExtensionNames) {
          const Mb = this._extensions[Ab];
          Mb.postExportTexture && Mb.postExportTexture(bb, ab, Ub)
        }
      }
      _extensionsPostExportMeshPrimitive(bb) {
        for (const ab of GA._ExtensionNames) {
          const Ub = this._extensions[ab];
          Ub.postExportMeshPrimitive && Ub.postExportMeshPrimitive(bb, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const bb of GA._ExtensionNames) {
          const ab = this._extensions[bb];
          ab.preGenerateBinaryAsync && await ab.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(bb) {
        for (const ab of GA._ExtensionNames) {
          const Ub = this._extensions[ab];
          Ub.enabled && bb(Ub)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((bb => {
          var ab, Ub, Ab;
          bb.wasUsed && ((ab = this._glTF).extensionsUsed || (ab.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(bb.name) && this._glTF.extensionsUsed.push(bb.name), bb.required && ((Ub = this._glTF).extensionsRequired || (Ub.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(bb.name) && this._glTF.extensionsRequired.push(bb.name)), (Ab = this._glTF).extensions || (Ab.extensions = {}), bb.onExporting && bb.onExporting())
        }))
      }
      _loadExtensions() {
        for (const bb of GA._ExtensionNames) {
          const ab = GA._ExtensionFactories[bb](this);
          this._extensions[bb] = ab
        }
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rb.d.LastCreatedScene,
          ab = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${jb.d.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new IU(this), this._extensions = {}, this._bufferManager = new UA, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !bb) throw new Error("No scene available to export");
        this._babylonScene = bb, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: bb => bb?.iN?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...ab
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
      static RegisterExtension(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        GA.UnregisterExtension(bb) && Mb.Tools.Warn(`Extension with the name ${bb} already exists`), GA._ExtensionFactories[bb] = ab;
        const Ab = Ub ?? 0;
        GA._ExtensionOrders[bb] = Ab;
        let Tb = GA._ExtensionNames.length;
        for (let Mb = 0; Mb < GA._ExtensionNames.length; Mb++) {
          const bb = GA._ExtensionNames[Mb];
          if (Ab < GA._ExtensionOrders[bb]) {
            Tb = Mb;
            break
          }
        }
        GA._ExtensionNames.splice(Tb, 0, bb)
      }
      static UnregisterExtension(bb) {
        if (!GA._ExtensionFactories[bb]) return !1;
        delete GA._ExtensionFactories[bb], delete GA._ExtensionOrders[bb];
        const ab = GA._ExtensionNames.indexOf(bb);
        return -1 !== ab && GA._ExtensionNames.splice(ab, 1), !0
      }
      _generateJSON(bb, ab, Ub) {
        const Ab = {
          byteLength: bb
        };
        return Ab.byteLength && (this._glTF.buffers = [Ab]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.ZR = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Ab.uri = ab + ".bin"), Ub ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(bb) {
        const ab = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Ub = this._generateJSON(ab.byteLength, bb, !0),
          Ab = new Blob([ab], {
            type: "application/octet-stream"
          }),
          Mb = bb + ".gltf",
          Tb = bb + ".bin",
          Eb = new eb;
        if (Eb.files[Mb] = Ub, Eb.files[Tb] = Ab, this._imageData)
          for (const Yb in this._imageData) Eb.files[Yb] = this._imageData[Yb];
        return Eb
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(bb) {
        const ab = bb % 4;
        return 0 === ab ? ab : 4 - ab
      }
      async generateGLBAsync(bb) {
        this._shouldUseGlb = !0;
        const ab = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Ub = this._generateJSON(ab.byteLength),
          Ab = bb + ".glb";
        let Mb, Tb = Ub.length;
        if ("undefined" !== typeof TextEncoder) {
          Mb = (new TextEncoder).encode(Ub), Tb = Mb.length
        }
        const Eb = this._getPadding(Tb),
          Yb = this._getPadding(ab.byteLength),
          Bb = 28 + Tb + Eb + ab.byteLength + Yb,
          vb = new bA(Bb);
        if (vb.writeUInt32(1179937895), vb.writeUInt32(2), vb.writeUInt32(Bb), vb.writeUInt32(Tb + Eb), vb.writeUInt32(1313821514), Mb) vb.writeTypedArray(Mb);
        else {
          const bb = "_".charCodeAt(0);
          for (let ab = 0; ab < Tb; ++ab) {
            const Ab = Ub.charCodeAt(ab);
            Ab != Ub.codePointAt(ab) ? vb.writeUInt8(bb) : vb.writeUInt8(Ab)
          }
        }
        for (let eb = 0; eb < Eb; ++eb) vb.writeUInt8(32);
        vb.writeUInt32(ab.byteLength + Yb), vb.writeUInt32(5130562), vb.writeTypedArray(ab);
        for (let eb = 0; eb < Yb; ++eb) vb.writeUInt8(0);
        const Lb = new eb;
        return Lb.files[Ab] = new Blob([vb.getOutputData()], {
          type: "application/octet-stream"
        }), Lb
      }
      _setNodeTransformation(bb, ab, Ub) {
        if (ab.getPivotPoint().equalsWithEpsilon(qU, hU.e) || Mb.Tools.Warn("Pivot points are not supported in the glTF serializer"), !ab.position.equalsWithEpsilon(qU, hU.e)) {
          const Mb = Ab.TmpVectors.Pj[0].EUb(ab.position);
          Ub && sU(Mb), bb.translation = Mb.qUb()
        }
        ab.nY.equalsWithEpsilon(rU, hU.e) || (bb.scale = ab.nY.qUb());
        const Tb = ab.rotationQuaternion?.clone() || Ab.Quaternion.FromEulerAngles(ab.rotation.x, ab.rotation.y, ab.rotation.z);
        Tb.equalsWithEpsilon(uU, hU.e) || (Ub && gU(Tb), bb.rotation = Tb.normalize().qUb())
      }
      _setCameraTransformation(bb, ab, Ub) {
        const Mb = Ab.TmpVectors.Pj[0],
          Tb = Ab.TmpVectors.Quaternion[0],
          Eb = ab.getWorldMatrix();
        if (ab.parent) {
          const bb = ab.parent.getWorldMatrix().invertToRef(Ab.TmpVectors.Matrix[0]);
          Eb.multiplyToRef(bb, Ab.TmpVectors.Matrix[1]).decompose(void 0, Tb, Mb)
        } else Eb.decompose(void 0, Tb, Mb);
        Mb.equalsWithEpsilon(qU, hU.e) || (Ub && sU(Mb), bb.translation = Mb.qUb()), Ub && gU(Tb), this._babylonScene.useRightHandedSystem || CU(Tb), Tb.equalsWithEpsilon(uU, hU.e) || (bb.rotation = Tb.qUb())
      }
      _listAvailableCameras() {
        for (const bb of this._babylonScene.cameras) {
          const ab = {
            type: bb.mode === AA.b.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (bb.name && (ab.name = bb.name), "perspective" === ab.type) ab.perspective = {
            aspectRatio: bb.vj().getAspectRatio(bb),
            yfov: bb.fovMode === AA.b.FOVMODE_VERTICAL_FIXED ? bb.fov : bb.fov * bb.vj().getAspectRatio(bb),
            znear: bb.minZ,
            zfar: bb.maxZ
          };
          else if ("orthographic" === ab.type) {
            const Ub = bb.orthoLeft && bb.orthoRight ? .5 * (bb.orthoRight - bb.orthoLeft) : .5 * bb.vj().getRenderWidth(),
              Ab = bb.orthoBottom && bb.orthoTop ? .5 * (bb.orthoTop - bb.orthoBottom) : .5 * bb.vj().getRenderHeight();
            ab.orthographic = {
              xmag: Ub,
              ymag: Ab,
              znear: bb.minZ,
              zfar: bb.maxZ
            }
          }
          this._camerasMap.set(bb, ab)
        }
      }
      _exportAndAssignCameras() {
        const bb = Array.from(this._camerasMap.values());
        for (const ab of bb) {
          const bb = this._nodesCameraMap.get(ab);
          if (void 0 !== bb) {
            this._cameras.push(ab);
            for (const ab of bb) ab.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const bb of this._babylonScene.skeletons) {
          if (bb.bones.length <= 0) continue;
          const ab = {
            joints: []
          };
          this._skinMap.set(bb, ab)
        }
      }
      _exportAndAssignSkeletons(bb) {
        for (const Ub of this._babylonScene.skeletons) {
          if (Ub.bones.length <= 0) continue;
          const Tb = this._skinMap.get(Ub);
          if (void 0 == Tb) continue;
          const Eb = {};
          let Yb = -1;
          for (let bb = 0; bb < Ub.bones.length; ++bb) {
            const ab = Ub.bones[bb],
              Ab = ab.getIndex() ?? bb; - 1 !== Ab && (Eb[Ab] = ab, Ab > Yb && (Yb = Ab))
          }
          const Bb = [];
          for (let Ub = 0; Ub <= Yb; ++Ub) {
            const Yb = Eb[Ub],
              eb = Yb.getTransformNode(),
              vb = eb ? this._nodeMap.get(eb) : void 0;
            if (void 0 === vb) {
              Mb.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            Tb.joints.push(vb);
            const Lb = Yb.getAbsoluteInverseBindMatrix().clone();
            bb.has(eb) && (ab = Lb, GU.invertToRef(Ab.TmpVectors.Matrix[0]).multiplyToRef(ab, ab).multiplyToRef(GU, ab)), Bb.push(Lb)
          }
          const eb = this._nodesSkinMap.get(Tb);
          if (Tb.joints.length > 0 && void 0 !== eb) {
            const bb = new Float32Array(16 * Bb.length);
            Bb.forEach(((ab, Ub) => {
              bb.set(ab.m, 16 * Ub)
            }));
            const ab = this._bufferManager.createBufferView(bb);
            this._accessors.push(this._bufferManager.createAccessor(ab, "MAT4", 5126, Bb.length)), Tb.inverseBindMatrices = this._accessors.length - 1, this._skins.push(Tb);
            const Ub = this._skins.length - 1;
            for (const Ab of eb) Ab.skin = Ub
          }
        }
        var ab
      }
      async _exportSceneAsync() {
        const bb = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const ab = this._options.metadataSelector(this._babylonScene.metadata);
          ab && (bb.extras = ab)
        }
        const ab = new Array,
          Ub = new Array,
          Ab = new Array,
          Mb = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let Tb;
        if (Mb && !this._options.includeCoordinateSystemConversionNodes)
          for (const eb of this._babylonScene.animationGroups)
            for (const bb of eb.targetedAnimations) {
              const ab = bb.target;
              ab instanceof Lb.b && !ab.parent && (Tb ?? (Tb = new Set)).add(ab)
            }
        for (const eb of this._babylonScene.rootNodes) {
          const bb = eb.animations,
            Eb = !!bb && bb.length > 0 || Tb?.has(eb);
          Mb && !this._options.includeCoordinateSystemConversionNodes && QU(eb, this._babylonScene.useRightHandedSystem) && !Eb ? Ab.push(...eb.getChildren()) : this._babylonScene.useRightHandedSystem ? ab.push(eb) : Ub.push(eb)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const Eb = new hA(!0, !1);
        bb.nodes.push(...await this._exportNodesAsync(Ub, Eb));
        const Yb = new hA(!1, !1);
        bb.nodes.push(...await this._exportNodesAsync(ab, Yb));
        const Bb = new hA(!1, !0);
        bb.nodes.push(...await this._exportNodesAsync(Ab, Bb)), bb.nodes.length && this._scenes.push(bb), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(Eb.getNodesSet()), this._babylonScene.animationGroups.length && LA._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Eb.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(bb) {
        return this._nodeMap.get(bb)
      }
      _getAnimationIndex(bb) {
        return this._animationGroupMap.get(bb)
      }
      _getCameraIndex(bb) {
        const ab = this._camerasMap.get(bb);
        if (!ab) return;
        const Ub = this._cameras.indexOf(ab);
        return Ub >= 0 ? Ub : void 0
      }
      _getMaterialIndex(bb) {
        return this._materialMap.get(bb)
      }
      _getRootIndex(bb, ab) {
        switch (bb) {
          case "nodes":
            return this._getNodeIndex(ab);
          case "animations":
            return this._getAnimationIndex(ab);
          case "cameras":
            return this._getCameraIndex(ab);
          case "materials":
            return this._getMaterialIndex(ab);
          case "meshes": {
            const bb = this._getNodeIndex(ab);
            return void 0 === bb ? void 0 : this._nodes[bb]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(ab)?.index;
          case "images": {
            const bb = this._materialExporter.getTextureInfo(ab)?.index;
            if (void 0 === bb) return;
            const Ub = this._textures[bb];
            for (const ab of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const bb = Ub?.extensions?.[ab]?.source;
              if ("number" === typeof bb) return bb
            }
            return Ub?.source
          }
          case "samplers": {
            const bb = this._materialExporter.getTextureInfo(ab)?.index;
            return void 0 === bb ? void 0 : this._textures[bb]?.sampler
          }
          case "skins": {
            const bb = this._skinMap.get(ab),
              Ub = bb ? this._skins.indexOf(bb) : -1;
            return Ub >= 0 ? Ub : void 0
          }
          case "scenes":
            return ab === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(bb, ab, Ub) {
        const Ab = this._nodes[bb];
        if (!Ab) throw new Error(`Cannot write ${ab}: glTF node ${bb} does not exist.`);
        Ab.extensions || (Ab.extensions = {}), Ab.extensions[ab] = Ub
      }
      _shouldExportNode(bb) {
        let ab = this._shouldExportNodeMap.get(bb);
        return void 0 === ab && (ab = this._options.shouldExportNode(bb), this._shouldExportNodeMap.set(bb, ab)), ab
      }
      async _exportNodesAsync(bb, ab) {
        const Ub = new Array;
        this._exportBuffers(bb, ab);
        for (const Ab of bb) await this._exportNodeAsync(Ab, Ub, ab);
        return Ub
      }
      _collectBuffers(bb, ab, Ub, Ab, Mb) {
        if (this._shouldExportNode(bb) && bb instanceof Pb.d && bb.geometry) {
          const Tb = bb.geometry.getVertexBuffers();
          if (Tb)
            for (const Ab in Tb) {
              if (!tU(Ab)) continue;
              const Eb = Tb[Ab];
              Mb.setHasVertexColorAlpha(Eb, bb.hasVertexAlpha);
              const Yb = Eb._buffer,
                Bb = ab.get(Yb) || [];
              ab.set(Yb, Bb), -1 === Bb.indexOf(Eb) && Bb.push(Eb);
              const eb = Ub.get(Eb) || [];
              Ub.set(Eb, eb), -1 === eb.indexOf(bb) && eb.push(bb)
            }
          const Eb = bb.morphTargetManager;
          if (Eb)
            for (let ab = 0; ab < Eb.numTargets; ab++) {
              const Ub = Eb.getTarget(ab),
                Mb = Ab.get(Ub) || [];
              Ab.set(Ub, Mb), -1 === Mb.indexOf(bb) && Mb.push(bb)
            }
        }
        for (const Tb of bb.getChildren()) this._collectBuffers(Tb, ab, Ub, Ab, Mb)
      }
      _exportBuffers(bb, ab) {
        const Ub = new Map,
          Ab = new Map,
          Mb = new Map;
        for (const Yb of bb) this._collectBuffers(Yb, Ub, Ab, Mb, ab);
        const Tb = Array.from(Ub.keys());
        for (const Yb of Tb) {
          const bb = Yb.getData();
          if (!bb) throw new Error("Buffer data is not available");
          const Mb = Ub.get(Yb);
          if (!Mb) continue;
          const Tb = Mb[0].byteStride;
          if (Mb.some((bb => bb.byteStride !== Tb))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const Eb = cU(bb).slice();
          for (const ab of Mb) {
            const bb = Ab.get(ab),
              {
                byteOffset: Ub,
                byteStride: Mb,
                componentCount: Tb,
                type: Yb,
                count: Bb,
                normalized: eb,
                kind: Lb
              } = oU(ab, bb);
            switch (Lb) {
              case vb.g.NormalKind:
              case vb.g.TangentKind:
                (0, dU.h)(Eb, Ub, Mb, Tb, Yb, Bb, eb, (bb => {
                  const ab = Math.sqrt(bb[0] * bb[0] + bb[1] * bb[1] + bb[2] * bb[2]);
                  if (ab > 0) {
                    const Ub = 1 / ab;
                    bb[0] *= Ub, bb[1] *= Ub, bb[2] *= Ub
                  }
                }));
                break;
              case vb.g.ColorKind: {
                const ab = bb.filter((bb => bb.material instanceof TA.StandardMaterial || null == bb.material)).length;
                if (0 == ab) break;
                if (ab != bb.length) {
                  Wb.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                Yb == vb.g.UNSIGNED_BYTE && Wb.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Ab = new kb.Color3,
                  Lb = new kb.b,
                  Pb = this._babylonScene.vj().useExactSrgbConversions;
                (0, dU.h)(Eb, Ub, Mb, Tb, Yb, Bb, eb, (bb => {
                  3 === bb.length ? (Ab.Zab(bb, 0), Ab.toLinearSpaceToRef(Ab, Pb), Ab.toArray(bb, 0)) : (Lb.Zab(bb, 0), Lb.toLinearSpaceToRef(Lb, Pb), Lb.toArray(bb, 0))
                }))
              }
            }
          }
          if (ab.convertToRightHanded) {
            for (const bb of Mb) {
              const ab = Ab.get(bb),
                {
                  byteOffset: Ub,
                  byteStride: Mb,
                  componentCount: Tb,
                  type: Yb,
                  count: Bb,
                  normalized: eb,
                  kind: Lb
                } = oU(bb, ab);
              switch (Lb) {
                case vb.g.PositionKind:
                case vb.g.NormalKind:
                case vb.g.TangentKind:
                  (0, dU.h)(Eb, Ub, Mb, Tb, Yb, Bb, eb, (bb => {
                    bb[0] = -bb[0]
                  }))
              }
            }
            ab.convertedToRightHandedBuffers.set(Yb, Eb)
          }
          const Bb = this._bufferManager.createBufferView(Eb, Tb);
          ab.setVertexBufferView(Yb, Bb);
          const eb = new Map;
          for (const ab of Mb) {
            const bb = Ab.get(ab),
              {
                kind: Ub,
                totalVertices: Mb
              } = oU(ab, bb);
            switch (Ub) {
              case vb.g.MatricesIndicesKind:
              case vb.g.MatricesIndicesExtraKind:
                if (ab.type == vb.g.FLOAT) {
                  const bb = ab.getFloatData(Mb);
                  null !== bb && eb.set(ab, bb)
                }
            }
          }
          0 !== eb.size && Wb.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const Lb = Array.from(eb.keys());
          for (const Ub of Lb) {
            const bb = eb.get(Ub);
            if (!bb) continue;
            const Ab = bb.some((bb => bb >= 256)),
              Mb = new(Ab ? Uint16Array : Uint8Array)(bb.length);
            for (let ab = 0; ab < bb.length; ab++) Mb[ab] = bb[ab];
            const Tb = this._bufferManager.createBufferView(Mb, 4 * (Ab ? 2 : 1));
            ab.setRemappedBufferView(Yb, Ub, Tb)
          }
        }
        const Eb = Array.from(Mb.keys());
        for (const Yb of Eb) {
          const bb = Mb.get(Yb);
          if (!bb) continue;
          const Ub = PA(Yb, bb[0], this._bufferManager, this._bufferViews, this._accessors, ab.convertToRightHanded);
          for (const Ab of bb) ab.bindMorphDataToMesh(Ab, Ub)
        }
      }
      async _exportNodeAsync(bb, ab, Ub) {
        let Ab = this._nodeMap.get(bb);
        if (void 0 !== Ab) return void(ab.includes(Ab) || ab.push(Ab));
        const Mb = await this._createNodeAsync(bb, Ub);
        if (Mb) {
          Ab = this._nodes.length, this._nodes.push(Mb), this._nodeMap.set(bb, Ab), Ub.pushExportedNode(bb), ab.push(Ab);
          const Tb = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            Eb = [];
          this._babylonScene.animationGroups.length || (LA._CreateMorphTargetAnimationFromMorphTargetAnimations(bb, Tb, Eb, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Ub.convertToRightHanded, this._options.shouldExportAnimation), bb.animations.length && LA._CreateNodeAnimationFromNodeAnimations(bb, Tb, Eb, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Ub.convertToRightHanded, this._options.shouldExportAnimation)), Tb.channels.length && Tb.samplers.length && this._animations.push(Tb), Eb.forEach((bb => {
            bb.channels.length && bb.samplers.length && this._animations.push(bb)
          }))
        }
        const Tb = Mb ? [] : ab;
        for (const Eb of bb.getChildren()) await this._exportNodeAsync(Eb, Tb, Ub);
        Mb && Tb.length && (Mb.children = Tb)
      }
      async _createNodeAsync(bb, ab) {
        if (!this._shouldExportNode(bb)) return null;
        const Ub = {};
        if (bb.name && (Ub.name = bb.name), bb.metadata) {
          const ab = this._options.metadataSelector(bb.metadata);
          ab && (Ub.extras = ab)
        }
        if (bb instanceof Lb.b && (this._setNodeTransformation(Ub, bb, ab.convertToRightHanded), bb instanceof Pb.d)) {
          const Ab = bb instanceof Xb.e ? bb.dAb : bb;
          if (Ab.mD && Ab.mD.length > 0 && (Ub.mesh = await this._exportMeshAsync(Ab, ab)), bb.skeleton) {
            const ab = this._skinMap.get(bb.skeleton);
            void 0 !== ab && (void 0 === this._nodesSkinMap.get(ab) && this._nodesSkinMap.set(ab, []), this._nodesSkinMap.get(ab)?.push(Ub))
          }
        }
        if (bb instanceof FU.h) {
          const Ab = this._camerasMap.get(bb);
          if (Ab) {
            void 0 === this._nodesCameraMap.get(Ab) && this._nodesCameraMap.set(Ab, []), this._setCameraTransformation(Ub, bb, ab.convertToRightHanded);
            const Mb = bb.parent;
            if (null !== Mb && OU(bb, Mb)) {
              const bb = this._nodeMap.get(Mb);
              if (void 0 !== bb) {
                const ab = this._nodes[bb];
                return VU(Ub, ab), this._nodesCameraMap.get(Ab)?.push(ab), null
              }
            }
            this._nodesCameraMap.get(Ab)?.push(Ub)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", Ub, bb, this._nodeMap, ab.convertToRightHanded) ? Ub : (Wb.e.Warn(`Not exporting node ${bb.name}`), null)
      }
      _exportIndices(bb, ab, Ub, Ab, Mb, Eb, Yb, Bb, eb) {
        let vb = null;
        eb.mode = function(bb) {
          switch (bb) {
            case Tb.d.TriangleFillMode:
              return 4;
            case Tb.d.TriangleStripDrawMode:
              return 5;
            case Tb.d.TriangleFanDrawMode:
              return 6;
            case Tb.d.PointListDrawMode:
            case Tb.d.PointFillMode:
              return 0;
            case Tb.d.LineLoopDrawMode:
              return 2;
            case Tb.d.LineListDrawMode:
              return 1;
            case Tb.d.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${bb}`)
        }(Eb);
        const Lb = Yb !== Tb.d.CounterClockWiseSideOrientation && function(bb) {
          switch (bb) {
            case Tb.d.TriangleFillMode:
            case Tb.d.TriangleStripDrawMode:
            case Tb.d.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(Eb);
        if (Lb) {
          if (Eb === Tb.d.TriangleStripDrawMode || Eb === Tb.d.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const Yb = ab ? new Uint32Array(Ab) : new Uint16Array(Ab);
          if (bb)
            for (let ab = 0; ab + 2 < Ab; ab += 3) Yb[ab] = bb[Ub + ab] + Mb, Yb[ab + 1] = bb[Ub + ab + 2] + Mb, Yb[ab + 2] = bb[Ub + ab + 1] + Mb;
          else
            for (let bb = 0; bb + 2 < Ab; bb += 3) Yb[bb] = bb, Yb[bb + 1] = bb + 2, Yb[bb + 2] = bb + 1;
          vb = Yb
        } else if (bb && 0 !== Mb) {
          const Tb = ab ? new Uint32Array(Ab) : new Uint16Array(Ab);
          for (let ab = 0; ab < Ab; ab++) Tb[ab] = bb[Ub + ab] + Mb;
          vb = Tb
        } else bb && (vb = function(bb, ab, Ub, Ab) {
          let Mb = bb;
          return 0 === ab && Ub === bb.length || (Mb = Array.isArray(bb) ? bb.slice(ab, ab + Ub) : bb.subarray(ab, ab + Ub)), Mb instanceof Int32Array ? new Uint32Array(Mb.buffer, Mb.byteOffset, Mb.length) : Array.isArray(Mb) ? Ab ? new Uint32Array(Mb) : new Uint16Array(Mb) : Mb
        }(bb, Ub, Ab, ab));
        if (vb) {
          let Tb = Bb.getIndicesAccessor(bb, Ub, Ab, Mb, Lb);
          if (void 0 === Tb) {
            const Eb = this._bufferManager.createBufferView(vb),
              Yb = ab ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(Eb, "SCALAR", Yb, Ab, 0)), Tb = this._accessors.length - 1, Bb.setIndicesAccessor(bb, Ub, Ab, Mb, Lb, Tb)
          }
          eb.indices = Tb
        }
      }
      _exportVertexBuffer(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = bb.getKind();
        if (!tU(Eb)) return;
        if (Eb.startsWith("uv") && !this._options.exportUnusedUVs && (!ab || !this._materialNeedsUVsSet.has(ab))) return;
        let Yb = Mb.getVertexAccessor(bb, Ub, Ab);
        if (void 0 === Yb) {
          const ab = Mb.convertedToRightHandedBuffers.get(bb._buffer) || bb._buffer.getData(),
            Tb = Eb === vb.g.PositionKind ? function(bb, ab, Ub, Ab) {
              const {
                byteOffset: Mb,
                byteStride: Tb,
                type: Eb,
                normalized: Yb
              } = ab, Bb = ab.getSize(), eb = new Array(Bb).fill(1 / 0), vb = new Array(Bb).fill(-1 / 0);
              return (0, dU.h)(bb, Mb + Ub * Tb, Tb, Bb, Eb, Ab * Bb, Yb, (bb => {
                for (let ab = 0; ab < Bb; ab++) eb[ab] = Math.min(eb[ab], bb[ab]), vb[ab] = Math.max(vb[ab], bb[ab])
              })), {
                min: eb,
                max: vb
              }
            }(ab, bb, Ub, Ab) : void 0,
            Bb = (Eb === vb.g.MatricesIndicesKind || Eb === vb.g.MatricesIndicesExtraKind) && bb.type === vb.g.FLOAT,
            eb = Bb ? vb.g.UNSIGNED_BYTE : bb.type,
            Lb = Bb ? void 0 : bb.normalized,
            Pb = Bb ? Mb.getRemappedBufferView(bb._buffer, bb) : Mb.getVertexBufferView(bb._buffer),
            Xb = bb.byteOffset + Ub * bb.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(Pb, function(bb, ab) {
            if (bb == vb.g.ColorKind) return ab ? "VEC4" : "VEC3";
            switch (bb) {
              case vb.g.PositionKind:
              case vb.g.NormalKind:
                return "VEC3";
              case vb.g.TangentKind:
              case vb.g.MatricesIndicesKind:
              case vb.g.MatricesIndicesExtraKind:
              case vb.g.MatricesWeightsKind:
              case vb.g.MatricesWeightsExtraKind:
                return "VEC4";
              case vb.g.UVKind:
              case vb.g.UV2Kind:
              case vb.g.UV3Kind:
              case vb.g.UV4Kind:
              case vb.g.UV5Kind:
              case vb.g.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${bb}`)
          }(Eb, Mb.hasVertexColorAlpha(bb)), eb, Ab, Xb, Tb, Lb)), Yb = this._accessors.length - 1, Mb.setVertexAccessor(bb, Ub, Ab, Yb)
        }
        Tb.attributes[function(bb) {
          switch (bb) {
            case vb.g.PositionKind:
              return "POSITION";
            case vb.g.NormalKind:
              return "NORMAL";
            case vb.g.TangentKind:
              return "TANGENT";
            case vb.g.ColorKind:
              return "COLOR_0";
            case vb.g.UVKind:
              return "TEXCOORD_0";
            case vb.g.UV2Kind:
              return "TEXCOORD_1";
            case vb.g.UV3Kind:
              return "TEXCOORD_2";
            case vb.g.UV4Kind:
              return "TEXCOORD_3";
            case vb.g.UV5Kind:
              return "TEXCOORD_4";
            case vb.g.UV6Kind:
              return "TEXCOORD_5";
            case vb.g.MatricesIndicesKind:
              return "JOINTS_0";
            case vb.g.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case vb.g.MatricesWeightsKind:
              return "WEIGHTS_0";
            case vb.g.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${bb}`)
        }(Eb)] = Yb
      }
      async _exportMaterialAsync(bb, ab, Ub, Ab) {
        let Mb = this._materialMap.get(bb);
        if (void 0 === Mb) {
          const Ab = ab && Object.keys(ab).some((bb => bb.startsWith("uv")));
          if ((bb = bb instanceof MA.d ? bb.N9[Ub.materialIndex] : bb) instanceof ia) Mb = await this._materialExporter.exportPBRMaterialAsync(bb, Ab);
          else if (bb instanceof TA.StandardMaterial) Mb = await this._materialExporter.exportStandardMaterialAsync(bb, Ab);
          else {
            if (!(bb instanceof na)) return void Wb.e.Warn(`Unsupported material '${bb.name}' with type ${bb.getClassName()}`);
            Mb = await this._materialExporter.exportOpenPBRMaterialAsync(bb, Ab)
          }
          this._materialMap.set(bb, Mb)
        }
        Ab.material = Mb
      }
      async _exportMeshAsync(bb, ab) {
        let Ub = ab.getMesh(bb);
        if (void 0 !== Ub) return Ub;
        const Ab = {
          primitives: []
        };
        Ub = this._meshes.length, this._meshes.push(Ab), ab.setMesh(bb, Ub);
        const Mb = bb.isUnIndexed ? null : bb.uUb(),
          Eb = bb.geometry?.getVertexBuffers(),
          Yb = ab.getMorphTargetsFromMesh(bb),
          Bb = bb instanceof XA.b,
          eb = bb instanceof FA,
          vb = bb.mD;
        if (Eb && vb && vb.length > 0)
          for (const Lb of vb) {
            const Ub = {
                attributes: {}
              },
              vb = Lb.Rj() || this._babylonScene.defaultMaterial;
            if (eb) {
              const ab = {
                  name: vb.name
                },
                Ab = bb,
                Mb = kb.Color3.White(),
                Tb = Ab.material?.alpha ?? 1,
                Eb = Ab.greasedLineMaterial?.color ?? Mb;
              (!Eb.equalsWithEpsilon(Mb, hU.e) || Tb < 1) && (ab.pbrMetallicRoughness = {
                baseColorFactor: [...Eb.qUb(), Tb]
              }), this._materials.push(ab), Ub.material = this._materials.length - 1
            } else if (Bb) {
              const ab = {
                  name: vb.name
                },
                Ab = bb;
              (!Ab.color.equalsWithEpsilon(kb.Color3.White(), hU.e) || Ab.alpha < 1) && (ab.pbrMetallicRoughness = {
                baseColorFactor: [...Ab.color.qUb(), Ab.alpha]
              }), this._materials.push(ab), Ub.material = this._materials.length - 1
            } else await this._exportMaterialAsync(vb, Eb, Lb, Ub);
            const Pb = Bb || eb ? Tb.d.LineListDrawMode : bb.overrideRenderingFillMode ?? vb.fillMode;
            let Xb = vb._getEffectiveOrientation(bb);
            ab.wasAddedByNoopNode && !bb.oN().useRightHandedSystem && (Xb = Xb === Tb.d.ClockWiseSideOrientation ? Tb.d.CounterClockWiseSideOrientation : Tb.d.ClockWiseSideOrientation), this._exportIndices(Mb, Mb ? (0, dU.c)(Mb, Lb.indexCount, Lb.indexStart, Lb.verticesStart) : Lb.verticesCount > 65535, Mb ? Lb.indexStart : Lb.verticesStart, Mb ? Lb.indexCount : Lb.verticesCount, -Lb.verticesStart, Pb, Xb, ab, Ub);
            for (const bb of Object.values(Eb)) this._exportVertexBuffer(bb, vb, Lb.verticesStart, Lb.verticesCount, ab, Ub);
            if (Yb) {
              Ub.targets = [];
              for (const bb of Yb) Ub.targets.push(bb.attributes)
            }
            Ab.primitives.push(Ub), this._extensionsPostExportMeshPrimitive(Ub)
          }
        if (Yb) {
          Ab.weights = [], Ab.extras || (Ab.extras = {}), Ab.extras.targetNames = [];
          for (const bb of Yb) Ab.weights.push(bb.influence), Ab.extras.targetNames.push(bb.name)
        }
        return Ub
      }
    }
    GA._ExtensionNames = new Array, GA._ExtensionFactories = {}, GA._ExtensionOrders = {};
    class QA {
      static async GLTFAsync(bb, ab, Ub) {
        Ub && Ub.exportWithoutWaitingForScene || await bb.whenReadyAsync();
        const Ab = new GA(bb, Ub),
          Mb = await Ab.generateGLTFAsync(ab.replace(/\.[^/.]+$/, ""));
        return Ab.dispose(), Mb
      }
      static async GLBAsync(bb, ab, Ub) {
        Ub && Ub.exportWithoutWaitingForScene || await bb.whenReadyAsync();
        const Ab = new GA(bb, Ub),
          Mb = await Ab.generateGLBAsync(ab.replace(/\.[^/.]+$/, ""));
        return Ab.dispose(), Mb
      }
    }
    const qA = "EXT_mesh_gpu_instancing";

    function uA(bb, ab) {
      const Ub = new Float32Array(3 * ab);
      for (let Ab = 0; Ab < ab; Ab++) Ub[3 * Ab + 0] = bb[4 * Ab + 0], Ub[3 * Ab + 1] = bb[4 * Ab + 1], Ub[3 * Ab + 2] = bb[4 * Ab + 2];
      return Ub
    }
    class rA {
      constructor(bb) {
        this.name = qA, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(bb, ab, Ub, Ab, Mb, Tb) {
        return await new Promise((bb => {
          if (ab && Ub instanceof iA.d && Ub.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const bb = rb.m.Zero(),
              Ab = rb.e.Identity(),
              Eb = rb.m.One(),
              Yb = Ub.thinInstanceGetWorldMatrices(),
              Bb = rb.j.Pj[2],
              eb = rb.j.Quaternion[1],
              vb = rb.j.Pj[3];
            let Lb = !1,
              Pb = !1,
              Xb = !1;
            const jb = new Float32Array(3 * Ub.W8),
              Rb = new Float32Array(4 * Ub.W8),
              kb = new Float32Array(3 * Ub.W8);
            let yb = 0;
            for (const ab of Yb) ab.decompose(vb, eb, Bb), Mb && (sU(Bb), gU(eb)), jb.set(Bb.qUb(), 3 * yb), Rb.set(eb.normalize().qUb(), 4 * yb), kb.set(vb.qUb(), 3 * yb), Lb = Lb || !Bb.equalsWithEpsilon(bb), Pb = Pb || !eb.equalsWithEpsilon(Ab), Xb = Xb || !vb.equalsWithEpsilon(Eb), yb++;
            const Zb = {
              attributes: {}
            };
            Lb && (Zb.attributes.TRANSLATION = this._buildAccessor(jb, "VEC3", Ub.W8, Tb)), Pb && (Zb.attributes.ROTATION = this._buildAccessor(Rb, "VEC4", Ub.W8, Tb)), Xb && (Zb.attributes.SCALE = this._buildAccessor(kb, "VEC3", Ub.W8, Tb));
            let Db = Ub._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (Db) {
              const bb = Ub.W8,
                ab = "VEC3";
              Ub.hasVertexAlpha && Db.length === 4 * bb ? (this._instanceColorWarned || (Wb.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Db = uA(Db, bb)) : Db.length === 4 * bb && (Db = uA(Db, bb)), Db.length === 3 * bb && (Zb.attributes._COLOR_0 = this._buildAccessor(Db, ab, bb, Tb))
            }
            ab.extensions = ab.extensions || {}, ab.extensions[qA] = Zb
          }
          bb(ab)
        }))
      }
      _buildAccessor(bb, ab, Ub, Ab) {
        const Mb = Ab.createBufferView(bb),
          Tb = Ab.createAccessor(Mb, ab, 5126, Ub);
        return this._exporter._accessors.push(Tb), this._exporter._accessors.length - 1
      }
    }
    let KA = !1;

    function oA() {
      KA || (KA = !0, GA.RegisterExtension(qA, (bb => new rA(bb))))
    }
    Ub(39611);
    oA();
    var lA = Ub(40948);

    function tA(bb, ab, Ub, Ab) {
      const Mb = bb;
      let Tb = null,
        Eb = null,
        Yb = null,
        Bb = null;
      const eb = {},
        vb = ab.find((bb => "POSITION" === bb.dracoName));
      if (!vb) throw new Error("Draco: Missing position attribute for encoding.");
      if (!Ub) {
        const bb = vb.data.length / vb.size;
        Ub = new(bb > 65535 ? Uint32Array : Uint16Array)(bb);
        for (let ab = 0; ab < bb; ab++) Ub[ab] = ab
      }
      try {
        Tb = new Mb.Encoder, Eb = new Mb.MeshBuilder, Yb = new Mb.Mesh, Eb.AddFacesToMesh(Yb, Ub.length / 3, Ub);
        const bb = new Map([
          [Float32Array, (bb, ab, Ub, Ab, Mb, Tb) => bb.AddFloatAttribute(ab, Ub, Ab, Mb, Tb)],
          [Uint32Array, (bb, ab, Ub, Ab, Mb, Tb) => bb.AddUInt32Attribute(ab, Ub, Ab, Mb, Tb)],
          [Uint16Array, (bb, ab, Ub, Ab, Mb, Tb) => bb.AddUInt16Attribute(ab, Ub, Ab, Mb, Tb)],
          [Uint8Array, (bb, ab, Ub, Ab, Mb, Tb) => bb.AddUInt8Attribute(ab, Ub, Ab, Mb, Tb)],
          [Int32Array, (bb, ab, Ub, Ab, Mb, Tb) => bb.AddInt32Attribute(ab, Ub, Ab, Mb, Tb)],
          [Int16Array, (bb, ab, Ub, Ab, Mb, Tb) => bb.AddInt16Attribute(ab, Ub, Ab, Mb, Tb)],
          [Int8Array, (bb, ab, Ub, Ab, Mb, Tb) => bb.AddInt8Attribute(ab, Ub, Ab, Mb, Tb)]
        ]);
        for (const Ub of ab) {
          Ub.data instanceof Uint8ClampedArray && (Ub.data = new Uint8Array(Ub.data));
          const ab = bb.get(Ub.data.constructor),
            Bb = Ub.data.length / Ub.size;
          eb[Ub.kind] = ab(Eb, Yb, Mb[Ub.dracoName], Bb, Ub.size, Ub.data), Ab.quantizationBits && Ab.quantizationBits[Ub.dracoName] && Tb.SetAttributeQuantization(Mb[Ub.dracoName], Ab.quantizationBits[Ub.dracoName])
        }
        Ab.method && Tb.SetEncodingMethod(Mb[Ab.method]), void 0 !== Ab.encodeSpeed && void 0 !== Ab.decodeSpeed && Tb.SetSpeedOptions(Ab.encodeSpeed, Ab.decodeSpeed), Bb = new Mb.DracoInt8Array;
        const vb = Tb.EncodeMeshToDracoBuffer(Yb, Bb);
        if (vb <= 0) throw new Error("Draco: Failed to encode.");
        const Lb = new Int8Array(vb);
        for (let ab = 0; ab < vb; ab++) Lb[ab] = Bb.GetValue(ab);
        return {
          data: Lb,
          attributeIds: eb
        }
      } finally {
        Yb && Mb.destroy(Yb), Eb && Mb.destroy(Eb), Tb && Mb.destroy(Tb), Bb && Mb.destroy(Bb)
      }
    }

    function wA() {
      let bb;
      onmessage = ab => {
        const Ub = ab.data;
        switch (Ub.id) {
          case "init": {
            Ub.url && importScripts(Ub.url);
            const ab = Ub.wasmBinary ? {
              wasmBinary: Ub.wasmBinary
            } : {};
            bb = DracoEncoderModule(ab), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!bb) throw new Error("Draco: Encoder module is not available.");
            bb.then((bb => {
              const ab = tA(bb, Ub.attributes, Ub.indices, Ub.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: ab
              }, ab ? [ab.data.buffer] : void 0)
            })).catch((bb => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: bb.message
              })
            }))
        }
      }
    }
    class sA {
      constructor(bb) {
        if (bb.workerPool) return void(this._workerPoolPromise = Promise.resolve(bb.workerPool));
        const ab = bb.wasmBinary,
          Ub = bb.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Ab = Ub && "function" === typeof Worker && "function" === typeof URL,
          Mb = Ab || !bb.jsModule,
          Tb = bb.wasmUrl && bb.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Mb ? ma.h.GetBabylonScriptURL(bb.wasmUrl, !0) : "",
            wasmBinaryPromise: ab ? Promise.resolve(ab) : ma.h.LoadFileAsync(ma.h.GetBabylonScriptURL(bb.wasmBinaryUrl, !0))
          } : {
            url: Mb ? ma.h.GetBabylonScriptURL(bb.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Ab ? this._workerPoolPromise = Tb.wasmBinaryPromise.then((bb => {
          const ab = this._getWorkerContent(),
            Ab = URL.createObjectURL(new Blob([ab], {
              type: "application/javascript"
            }));
          return new lA.c(Ub, (() => async function(bb, ab, Ub) {
            return await new Promise(((Ab, Mb) => {
              const Tb = ab => {
                  bb.removeEventListener("error", Tb), bb.removeEventListener("message", Eb), Mb(ab)
                },
                Eb = ab => {
                  "initDone" === ab.data.id && (bb.removeEventListener("error", Tb), bb.removeEventListener("message", Eb), Ab(bb))
                };
              if (bb.addEventListener("error", Tb), bb.addEventListener("message", Eb), ab) {
                const Ab = ab.slice(0);
                bb.postMessage({
                  id: "init",
                  url: Ub,
                  wasmBinary: Ab
                }, [Ab])
              } else bb.postMessage({
                id: "init",
                url: Ub
              })
            }))
          }(new Worker(Ab), bb, Tb.url)))
        })) : this._modulePromise = Tb.wasmBinaryPromise.then((async ab => {
          if (!this._isModuleAvailable() && !bb.jsModule) {
            if (!Tb.url) throw new Error("Draco codec module is not available");
            await ma.h.LoadBabylonScriptAsync(Tb.url)
          }
          return await this._createModuleAsync(ab, bb.jsModule)
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

    function gA() {
      const bb = bb => !!bb && "object" === typeof bb;
      for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
      return Ub.reduce(((ab, Ub) => {
        const Ab = Object.keys(Ub);
        for (const Mb of Ab) {
          const Ab = ab[Mb],
            Tb = Ub[Mb];
          Array.isArray(Ab) && Array.isArray(Tb) ? ab[Mb] = Ab.concat(Tb) : bb(Ab) && bb(Tb) ? ab[Mb] = gA(Ab, Tb) : ab[Mb] = Tb
        }
        return ab
      }), {})
    }

    function CA(bb) {
      return bb === Kb.m.PositionKind ? "POSITION" : bb === Kb.m.NormalKind ? "NORMAL" : bb === Kb.m.ColorKind ? "COLOR" : bb.startsWith(Kb.m.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const VA = {
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
    class OA extends sA {
      static get DefaultAvailable() {
        return !!((bb = OA.DefaultConfiguration).wasmUrl && (bb.wasmBinary || bb.wasmBinaryUrl) && "object" === typeof WebAssembly || bb.fallbackUrl);
        var bb
      }
      static get Default() {
        return OA._Default ?? (OA._Default = new OA), OA._Default
      }
      static ResetDefault(bb) {
        OA._Default && (bb || OA._Default.dispose(), OA._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(bb, ab) {
        return {
          module: await (ab || DracoEncoderModule)({
            wasmBinary: bb
          })
        }
      }
      _getWorkerContent() {
        return `${tA}(${wA})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OA.DefaultConfiguration)
      }
      async _encodeAsync(bb, ab, Ub) {
        const Ab = Ub ? gA(VA, Ub) : VA;
        if (this._workerPoolPromise) {
          const Ub = await this._workerPoolPromise;
          return await new Promise(((Mb, Tb) => {
            Ub.push(((Ub, Eb) => {
              const Yb = bb => {
                  Ub.removeEventListener("error", Yb), Ub.removeEventListener("message", Bb), Tb(bb), Eb()
                },
                Bb = bb => {
                  "encodeMeshSuccess" === bb.data.id ? (Ub.removeEventListener("error", Yb), Ub.removeEventListener("message", Bb), Mb(bb.data.encodedMeshData), Eb()) : "encodeMeshError" === bb.data.id && (Ub.removeEventListener("error", Yb), Ub.removeEventListener("message", Bb), Tb(new Error(bb.data.errorMessage)), Eb())
                };
              Ub.addEventListener("error", Yb), Ub.addEventListener("message", Bb);
              const eb = [];
              for (const ab of bb) eb.push(ab.data.buffer);
              ab && eb.push(ab.buffer), Ub.postMessage({
                id: "encodeMesh",
                attributes: bb,
                indices: ab,
                options: Ab
              }, eb)
            }))
          }))
        }
        if (this._modulePromise) {
          return tA((await this._modulePromise).module, bb, ab, Ab)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(bb, ab) {
        if (0 == bb.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        bb instanceof iA.d && bb.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === ab?.method && (Wb.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), ab.method = "MESH_SEQUENTIAL_ENCODING");
        const Ub = function(bb) {
            let ab = bb.uUb(void 0, !0);
            return !ab || ab instanceof Uint32Array || ab instanceof Uint16Array || (ab = ((0, dU.c)(ab, ab.length) ? Uint32Array : Uint16Array).from(ab)), ab
          }(bb),
          Ab = function(bb, ab) {
            const Ub = [];
            for (const Ab of bb.getVerticesDataKinds()) {
              if (ab?.includes(Ab)) {
                if (Ab === Kb.m.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Mb = bb.getVertexBuffer(Ab),
                Tb = Mb.getSize(),
                Eb = (0, dU.p)(Mb.getData(), Tb, Mb.type, Mb.byteOffset, Mb.byteStride, bb.getTotalVertices(), !0);
              Ub.push({
                kind: Ab,
                dracoName: CA(Ab),
                size: Tb,
                data: Eb
              })
            }
            return Ub
          }(bb, ab?.excludedAttributes);
        return await this._encodeAsync(Ab, Ub, ab)
      }
    }
    OA.DefaultConfiguration = {
      wasmUrl: `${ma.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${ma.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${ma.h._DefaultCdnUrl}/draco_encoder.js`
    }, OA._Default = null;
    const cA = "KHR_draco_mesh_compression";
    class JA {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = cA, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === bb.options.meshCompressionMethod && OA.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(bb, ab, Ub) {
        if (!this.enabled) return;
        if (4 !== bb.mode && 5 !== bb.mode) return void Wb.e.Warn("Cannot compress primitive with mode " + bb.mode + ".");
        const Ab = [],
          Mb = [];
        let Tb = null;
        if (void 0 !== bb.indices) {
          const Eb = Ub[bb.indices],
            Yb = ab.getBufferView(Eb);
          Tb = ab.getData(Yb).slice(), Ab.push(Yb), Mb.push(Eb)
        }
        const Eb = [];
        for (const [vb, Lb] of Object.entries(bb.attributes)) {
          const bb = Ub[Lb],
            Tb = ab.getBufferView(bb),
            Bb = lU(bb.type),
            eb = (0, dU.p)(ab.getData(Tb), Bb, bb.componentType, bb.byteOffset || 0, Tb.byteStride || (0, dU.n)(bb.componentType) * Bb, bb.count, !0);
          Eb.push({
            kind: vb,
            dracoName: (Yb = vb, "POSITION" === Yb ? "POSITION" : "NORMAL" === Yb ? "NORMAL" : Yb.startsWith("COLOR") ? "COLOR" : Yb.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: lU(bb.type),
            data: eb
          }), Ab.push(Tb), Mb.push(bb)
        }
        var Yb;
        const Bb = {
            method: bb.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          eb = OA.Default._encodeAsync(Eb, Tb, Bb).then((Ub => {
            const Tb = {
                bufferView: -1,
                attributes: Ub.attributeIds
              },
              Eb = ab.createBufferView(Ub.data);
            ab.setBufferView(Tb, Eb);
            for (const bb of Ab) this._bufferViewsUsed.add(bb);
            for (const bb of Mb) this._accessorsUsed.add(bb);
            bb.extensions || (bb.extensions = {}), bb.extensions[cA] = Tb
          })).catch((bb => {
            Wb.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + bb.message)
          }));
        this._encodePromises.push(eb), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(bb) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((ab => {
          bb.getPropertiesWithBufferView(ab).every((bb => this._accessorsUsed.has(bb))) && bb.removeBufferView(ab)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let nA = !1;

    function SA() {
      nA || (nA = !0, GA.RegisterExtension(cA, (bb => new JA(bb))))
    }
    SA();
    var bM = Ub(40712);
    const aM = "KHR_lights_punctual",
      UM = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      AM = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      MM = rb.m.Backward();
    class TM {
      constructor(bb) {
        this.name = aM, this.enabled = !0, this.required = !1, this._exporter = bb
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[aM] = this._lights
      }
      async postExportNodeAsync(bb, ab, Ub, Ab, Mb) {
        return await new Promise((Tb => {
          if (!(Ub instanceof vA.e)) return void Tb(ab);
          const Eb = Ub.getTypeID() == vA.e.LIGHTTYPEID_POINTLIGHT ? "point" : Ub.getTypeID() == vA.e.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : Ub.getTypeID() == vA.e.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!Eb || !(Ub instanceof bM.b)) return Wb.e.Warn(`${bb}: Light ${Ub.name} is not supported in ${aM}`), void Tb(ab);
          if (Ub.falloffType !== vA.e.FALLOFF_GLTF && Wb.e.Warn(`${bb}: Light falloff for ${Ub.name} does not match the ${aM} specification!`), !Ub.position.eEb(0, 0, 0)) {
            const bb = rb.j.Pj[0].EUb(Ub.position);
            Mb && sU(bb), ab.translation = bb.qUb()
          }
          if ("point" !== Eb) {
            const bb = Ub.direction.normalizeToRef(rb.j.Pj[0]);
            Mb && sU(bb);
            const Ab = rb.e.FromUnitVectorsToRef(MM, bb, rb.j.Quaternion[0]);
            rb.e.IsIdentity(Ab) || (ab.rotation = Ab.qUb())
          }
          const Yb = {
            type: Eb,
            name: Ub.name,
            color: Ub.diffuse.qUb(),
            intensity: Ub.intensity,
            range: Ub.range
          };
          if (JU(Yb, UM), "spot" === Eb) {
            const bb = Ub;
            Yb.spot = {
              innerConeAngle: bb.innerAngle / 2,
              outerConeAngle: bb.angle / 2
            }, JU(Yb.spot, AM)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Yb);
          const Bb = {
              light: this._lights.lights.length - 1
            },
            eb = Ub.parent;
          if (eb && OU(Ub, eb)) {
            const bb = Ab.get(eb);
            if (bb) {
              const Ub = this._exporter._nodes[bb];
              return VU(ab, Ub), Ub.extensions || (Ub.extensions = {}), Ub.extensions[aM] = Bb, void Tb(null)
            }
          }
          ab.extensions || (ab.extensions = {}), ab.extensions[aM] = Bb, Tb(ab)
        }))
      }
    }
    let EM = !1;

    function YM() {
      EM || (EM = !0, GA.RegisterExtension(aM, (bb => new TM(bb))))
    }
    YM();
    const BM = "KHR_interactivity";
    class eM {
      constructor(bb) {
        this._exporter = bb, this.name = BM, this.enabled = !!bb.options.khrInteractivity, this.required = bb.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var bb, ab, Ub;
        const Ab = this._exporter.options.khrInteractivity;
        if (!Ab) return;
        const Mb = Ab.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: bb => this._exporter._getNodeIndex(bb),
          getAnimationIndex: bb => this._exporter._getAnimationIndex(bb),
          getCameraIndex: bb => this._exporter._getCameraIndex(bb),
          getMaterialIndex: bb => this._exporter._getMaterialIndex(bb),
          getRootIndex: (bb, ab) => this._exporter._getRootIndex(bb, ab),
          setNodeExtension: (bb, ab, Ub) => this._exporter._setNodeExtension(bb, ab, Ub)
        });
        this._exporter._glTF.extensions[BM] = Mb;
        for (const Tb of Ab.additionalExtensionsUsed)(bb = this._exporter._glTF).extensionsUsed || (bb.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Tb) && this._exporter._glTF.extensionsUsed.push(Tb);
        for (const Tb of Ab.additionalExtensionsRequired)(ab = this._exporter._glTF).extensionsUsed || (ab.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Tb) && this._exporter._glTF.extensionsUsed.push(Tb), (Ub = this._exporter._glTF).extensionsRequired || (Ub.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(Tb) && this._exporter._glTF.extensionsRequired.push(Tb)
      }
    }
    let vM = !1;

    function LM() {
      vM || (vM = !0, GA.RegisterExtension(BM, (bb => new eM(bb)), 200))
    }
    LM();
    const PM = "EXT_lights_area",
      XM = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      jM = {
        aspect: 1
      },
      RM = rb.m.Backward();
    class kM {
      constructor(bb) {
        this.name = PM, this.enabled = !0, this.required = !1, this._exporter = bb
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[PM] = this._lights
      }
      async postExportNodeAsync(bb, ab, Ub, Ab, Mb) {
        return await new Promise((Tb => {
          if (!(Ub instanceof vA.e)) return void Tb(ab);
          const Eb = Ub.getTypeID() == vA.e.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!Eb) return Wb.e.Warn(`${bb}: Light ${Ub.name} is not supported in ${PM}`), void Tb(ab);
          const Yb = Ub;
          if (Yb.falloffType !== vA.e.FALLOFF_GLTF && Wb.e.Warn(`${bb}: Light falloff for ${Ub.name} does not match the ${PM} specification!`), !Yb.position.eEb(0, 0, 0)) {
            const bb = rb.j.Pj[0].EUb(Yb.position);
            Mb && sU(bb), ab.translation = bb.qUb()
          }
          const Bb = rb.m.Forward();
          Mb && sU(Bb);
          const eb = rb.e.FromUnitVectorsToRef(RM, Bb, rb.j.Quaternion[0]);
          rb.e.IsIdentity(eb) || (ab.rotation = eb.qUb());
          const vb = {
            type: Eb,
            name: Yb.name,
            color: Yb.diffuse.qUb(),
            intensity: Yb.intensity,
            size: Yb.height,
            rect: {
              aspect: Yb.width / Yb.height
            }
          };
          JU(vb, XM), vb.rect && JU(vb.rect, jM), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(vb);
          const Lb = {
              light: this._lights.lights.length - 1
            },
            Pb = Ub.parent;
          if (Pb && OU(Yb, Pb)) {
            const bb = Ab.get(Pb);
            if (bb) {
              const Ub = this._exporter._nodes[bb];
              return VU(ab, Ub), Ub.extensions || (Ub.extensions = {}), Ub.extensions[PM] = Lb, void Tb(null)
            }
          }
          ab.extensions || (ab.extensions = {}), ab.extensions[PM] = Lb, Tb(ab)
        }))
      }
    }
    let yM = !1;

    function ZM() {
      yM || (yM = !0, GA.RegisterExtension(PM, (bb => new kM(bb))))
    }
    ZM();
    const DM = "KHR_materials_anisotropy";
    class zM {
      constructor(bb) {
        this.name = DM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ab, Ub) {
        const Ab = [];
        if (Ub instanceof ia) {
          if (Ub.anisotropy.isEnabled && !Ub.anisotropy.legacy) return Ub.anisotropy.texture && Ab.push(Ub.anisotropy.texture), Ab
        } else if (Ub instanceof na && Ub.specularRoughnessAnisotropy > 0) {
          const bb = function(bb) {
            const ab = bb.specularRoughnessAnisotropyTexture,
              Ub = bb.geometryTangentTexture;
            return `${ab&&ab.getInternalTexture()?ab.getInternalTexture().uniqueId:"NoStrength"}_${Ub&&Ub.getInternalTexture()?Ub.getInternalTexture().uniqueId:"NoTangent"}`
          }(Ub);
          if (this._anisoTexturesMap[bb]) Ab.push(this._anisoTexturesMap[bb]);
          else {
            const ab = await async function(bb) {
              const ab = bb.oN(),
                Ub = bb.specularRoughnessAnisotropyTexture,
                Ab = bb.geometryTangentTexture;
              return Ub || Ab ? await EU("AnisotropyTexture", eU(Ab ? YU(Ab, 0) : BU(1), Ab ? YU(Ab, 1) : BU(0), Ub ? YU(Ub, 0) : BU(1)), ab) : null
            }(Ub);
            ab && (Ab.push(ab), this._anisoTexturesMap[bb] = ab)
          }
          return Ab
        }
        return []
      }
      postExportMaterialAsync(bb, ab, Ub) {
        return new Promise((bb => {
          var Ab;
          if (Ub instanceof ia) {
            if (!Ub.anisotropy.isEnabled || Ub.anisotropy.legacy) return void bb(ab);
            this._wasUsed = !0, ab.extensions = ab.extensions || {};
            const Ab = this._exporter._materialExporter.getTextureInfo(Ub.anisotropy.texture),
              Mb = {
                anisotropyStrength: Ub.anisotropy.intensity,
                anisotropyRotation: Ub.anisotropy.angle,
                anisotropyTexture: Ab ?? void 0
              };
            null !== Mb.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions[DM] = Mb
          } else if (Ub instanceof na && Ub.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, ab.extensions = ab.extensions || {};
            let Mb = Ub.specularRoughnessTexture;
            Ub._useRoughnessFromMetallicTextureGreen && (Mb = Ub.baseMetalnessTexture);
            const Tb = this._anisoTexturesMap[Ub.id];
            if (!Mb && !Tb) {
              let Ab = Ub.specularRoughness,
                Mb = Ub.specularRoughnessAnisotropy;
              if (!Ub._useGltfStyleAnisotropy) {
                const bb = function(bb, ab) {
                  const Ub = bb * bb,
                    Ab = Ub * Math.sqrt(2 / (1 + (1 - ab) * (1 - ab))),
                    Mb = (1 - ab) * Ab;
                  return {
                    newBaseRoughness: Math.sqrt(Mb),
                    newAnisotropyStrength: Math.min(Math.sqrt((Ab - Ub) / Math.max(1 - Ub, 1e-4)), 1)
                  }
                }(Ub.specularRoughness, Ub.specularRoughnessAnisotropy);
                Ab = bb.newBaseRoughness, Mb = bb.newAnisotropyStrength
              }
              ab.pbrMetallicRoughness && (ab.pbrMetallicRoughness.roughnessFactor = Ab);
              const Tb = {
                anisotropyStrength: Mb,
                anisotropyRotation: Ub.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return ab.extensions[DM] = Tb, bb(ab)
            }
            const Eb = Tb ? this._exporter._materialExporter.getTextureInfo(Tb) : null,
              Yb = {
                anisotropyStrength: Ub.specularRoughnessAnisotropy,
                anisotropyRotation: Ub.geometryTangentAngle,
                anisotropyTexture: Eb || void 0,
                extensions: {}
              };
            Ub._useGltfStyleAnisotropy || (ab.extensions.KHR_materials_openpbr = {}, (Ab = this._exporter._glTF).extensionsUsed || (Ab.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions[DM] = Yb
          }
          bb(ab)
        }))
      }
    }
    let xM = !1;

    function iM() {
      xM || (xM = !0, GA.RegisterExtension(DM, (bb => new zM(bb))))
    }
    iM();
    const fM = "KHR_materials_clearcoat";

    function mM(bb, ab) {
      const Ub = new Ib.e(ab.name, ab.oN());
      return Ub._texture = bb, Ub.coordinatesIndex = ab.coordinatesIndex, ab instanceof Ib.e && (Ub.uOffset = ab.uOffset, Ub.vOffset = ab.vOffset, Ub.uScale = ab.uScale, Ub.vScale = ab.vScale, Ub.wAng = ab.wAng), Ub.wrapU = ab.wrapU, Ub.wrapV = ab.wrapV, Ub
    }
    class pM {
      constructor(bb) {
        this.name = fM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = bb
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
      async postExportMaterialAdditionalTexturesAsync(bb, ab, Ub) {
        const Ab = [];
        if (Ub instanceof ia) {
          if (Ub.clearCoat.isEnabled) return Ub.clearCoat.texture && Ab.push(Ub.clearCoat.texture), !Ub.clearCoat.useRoughnessFromMainTexture && Ub.clearCoat.textureRoughness && Ab.push(Ub.clearCoat.textureRoughness), Ub.clearCoat.bumpTexture && Ab.push(Ub.clearCoat.bumpTexture), Ab
        } else if (Ub instanceof na && Ub.coatWeight > 0) {
          let bb = !1;
          if (Ub.coatWeightTexture ? Ub.coatRoughnessTexture ? Ub._useCoatRoughnessFromGreenChannel && Ub.coatWeightTexture.getInternalTexture() === Ub.coatRoughnessTexture.getInternalTexture() ? (Ab.push(Ub.coatWeightTexture), Ab.push(Ub.coatRoughnessTexture)) : bb = !0 : Ab.push(Ub.coatWeightTexture) : Ub.coatRoughnessTexture && (Ub._useCoatRoughnessFromGreenChannel ? Ab.push(Ub.coatRoughnessTexture) : bb = !0), bb) {
            const bb = function(bb) {
              const ab = bb.coatWeightTexture,
                Ub = ab && ab.getInternalTexture() ? ab.getInternalTexture().uniqueId : "NoCoat",
                Ab = bb.coatRoughnessTexture;
              return `${Ub}_${Ab&&Ab.getInternalTexture()?Ab.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Ub);
            if (!this._cachedInternalTexturesMap[bb]) {
              const ab = await async function(bb) {
                const ab = bb.oN(),
                  Ub = bb.coatWeightTexture,
                  Ab = bb.coatRoughnessTexture;
                return Ub || Ab ? (await EU("CoatTexture", eU(Ub ? YU(Ub, 0) : BU(1), Ab ? YU(Ab, bb._useCoatRoughnessFromGreenChannel ? 1 : 0) : BU(1)), ab)).getInternalTexture() : null
              }(Ub);
              ab && (this._cachedInternalTexturesMap[bb] = ab)
            }
            this._cachedInternalTexturesMap[bb] && (Ub.coatWeightTexture && (this._mergedTexturesMap[Ub.coatWeightTexture.uniqueId] = mM(this._cachedInternalTexturesMap[bb], Ub.coatWeightTexture), Ab.push(this._mergedTexturesMap[Ub.coatWeightTexture.uniqueId])), Ub.coatRoughnessTexture && (this._mergedTexturesMap[Ub.coatRoughnessTexture.uniqueId] = mM(this._cachedInternalTexturesMap[bb], Ub.coatRoughnessTexture), Ab.push(this._mergedTexturesMap[Ub.coatRoughnessTexture.uniqueId])))
          }
          return Ub.geometryCoatNormalTexture && Ab.push(Ub.geometryCoatNormalTexture), Ab
        }
        return []
      }
      postExportMaterialAsync(bb, ab, Ub) {
        return new Promise((bb => {
          if (Ub instanceof ia) {
            if (!Ub.clearCoat.isEnabled) return void bb(ab);
            this._wasUsed = !0, ab.extensions = ab.extensions || {};
            const Ab = this._exporter._materialExporter.getTextureInfo(Ub.clearCoat.texture);
            let Mb;
            Mb = Ub.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Ub.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Ub.clearCoat.textureRoughness), Ub.clearCoat.isTintEnabled && ma.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Ub.name}`), Ub.clearCoat.remapF0OnInterfaceChange && ma.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${Ub.name}`);
            const Tb = this._exporter._materialExporter.getTextureInfo(Ub.clearCoat.bumpTexture),
              Eb = {
                clearcoatFactor: Ub.clearCoat.intensity,
                clearcoatTexture: Ab ?? void 0,
                clearcoatRoughnessFactor: Ub.clearCoat.roughness,
                clearcoatRoughnessTexture: Mb ?? void 0,
                clearcoatNormalTexture: Tb ?? void 0
              };
            null === Eb.clearcoatTexture && null === Eb.clearcoatRoughnessTexture && null === Eb.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions[fM] = Eb
          } else if (Ub instanceof na) {
            if (0 == Ub.coatWeight) return void bb(ab);
            let Ab, Mb, Tb, Eb;
            this._wasUsed = !0, ab.extensions = ab.extensions || {}, Ub.coatWeightTexture && (Ab = this._mergedTexturesMap[Ub.coatWeightTexture.uniqueId], Mb = this._exporter._materialExporter.getTextureInfo(Ab)), Ub.coatRoughnessTexture && (Tb = this._mergedTexturesMap[Ub.coatRoughnessTexture.uniqueId], Eb = this._exporter._materialExporter.getTextureInfo(Tb)), Ub.coatColorTexture && ma.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Ub.name}`);
            const Yb = this._exporter._materialExporter.getTextureInfo(Ub.geometryCoatNormalTexture),
              Bb = {
                clearcoatFactor: Ub.coatWeight,
                clearcoatTexture: Mb ?? void 0,
                clearcoatRoughnessFactor: Ub.coatRoughness,
                clearcoatRoughnessTexture: Eb ?? void 0,
                clearcoatNormalTexture: Yb ?? void 0
              };
            null === Bb.clearcoatTexture && null === Bb.clearcoatRoughnessTexture && null === Bb.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions[fM] = Bb
          }
          bb(ab)
        }))
      }
    }
    let NM = !1;

    function WM() {
      NM || (NM = !0, GA.RegisterExtension(fM, (bb => new pM(bb))))
    }
    WM();
    const HM = "KHR_materials_coat";

    function IM(bb) {
      const ab = bb.coatRoughnessAnisotropyTexture,
        Ub = bb.geometryCoatTangentTexture;
      return `${ab&&ab.getInternalTexture()?ab.getInternalTexture().uniqueId:"NoStrength"}_${Ub&&Ub.getInternalTexture()?Ub.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function dM(bb, ab) {
      const Ub = new Ib.e(ab.name, ab.oN());
      return Ub._texture = bb, Ub.coordinatesIndex = ab.coordinatesIndex, ab instanceof Ib.e && (Ub.uOffset = ab.uOffset, Ub.vOffset = ab.vOffset, Ub.uScale = ab.uScale, Ub.vScale = ab.vScale, Ub.wAng = ab.wAng), Ub.wrapU = ab.wrapU, Ub.wrapV = ab.wrapV, Ub
    }
    class FM {
      constructor(bb) {
        this.name = HM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = bb
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
      async postExportMaterialAdditionalTexturesAsync(bb, ab, Ub) {
        const Ab = [];
        if (Ub instanceof ia) {
          if (Ub.clearCoat.isEnabled) return Ub.clearCoat.texture && Ab.push(Ub.clearCoat.texture), !Ub.clearCoat.useRoughnessFromMainTexture && Ub.clearCoat.textureRoughness && Ab.push(Ub.clearCoat.textureRoughness), Ub.clearCoat.bumpTexture && Ab.push(Ub.clearCoat.bumpTexture), Ub.clearCoat.tintTexture && Ab.push(Ub.clearCoat.tintTexture), Ab
        } else if (Ub instanceof na && Ub.coatWeight > 0) {
          let bb = !1;
          if (Ub.coatWeightTexture ? Ub.coatRoughnessTexture ? Ub._useCoatRoughnessFromGreenChannel && Ub.coatWeightTexture.getInternalTexture() === Ub.coatRoughnessTexture.getInternalTexture() ? (Ab.push(Ub.coatWeightTexture), Ab.push(Ub.coatRoughnessTexture)) : bb = !0 : Ab.push(Ub.coatWeightTexture) : Ub.coatRoughnessTexture && (Ub._useCoatRoughnessFromGreenChannel ? Ab.push(Ub.coatRoughnessTexture) : bb = !0), bb) {
            const bb = function(bb) {
              const ab = bb.coatWeightTexture,
                Ub = ab && ab.getInternalTexture() ? ab.getInternalTexture().uniqueId : "NoCoat",
                Ab = bb.coatRoughnessTexture;
              return `${Ub}_${Ab&&Ab.getInternalTexture()?Ab.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Ub);
            if (!this._cachedInternalTexturesMap[bb]) {
              const ab = await async function(bb) {
                const ab = bb.oN(),
                  Ub = bb.coatWeightTexture,
                  Ab = bb.coatRoughnessTexture;
                return Ub || Ab ? (await EU("CoatTexture", eU(Ub ? YU(Ub, 0) : BU(1), Ab ? YU(Ab, bb._useCoatRoughnessFromGreenChannel ? 1 : 0) : BU(1)), ab)).getInternalTexture() : null
              }(Ub);
              ab && (this._cachedInternalTexturesMap[bb] = ab)
            }
            this._cachedInternalTexturesMap[bb] && (Ub.coatWeightTexture && (this._mergedTexturesMap[Ub.coatWeightTexture.uniqueId] = dM(this._cachedInternalTexturesMap[bb], Ub.coatWeightTexture), Ab.push(this._mergedTexturesMap[Ub.coatWeightTexture.uniqueId])), Ub.coatRoughnessTexture && (this._mergedTexturesMap[Ub.coatRoughnessTexture.uniqueId] = dM(this._cachedInternalTexturesMap[bb], Ub.coatRoughnessTexture), Ab.push(this._mergedTexturesMap[Ub.coatRoughnessTexture.uniqueId])))
          }
          if (Ub.geometryCoatNormalTexture && Ab.push(Ub.geometryCoatNormalTexture), Ub.coatColorTexture && Ab.push(Ub.coatColorTexture), Ub.coatRoughnessAnisotropy > 0) {
            const bb = IM(Ub);
            if (this._mergedTexturesMap[bb]) Ab.push(this._mergedTexturesMap[bb]);
            else {
              const ab = await async function(bb) {
                const ab = bb.oN(),
                  Ub = bb.coatRoughnessAnisotropyTexture,
                  Ab = bb.geometryCoatTangentTexture;
                return Ub || Ab ? await EU("AnisotropyTexture", eU(Ab ? YU(Ab, 0) : BU(1), Ab ? YU(Ab, 1) : BU(0), Ub ? YU(Ub, 0) : BU(1)), ab) : null
              }(Ub);
              ab && (Ab.push(ab), this._mergedTexturesMap[bb] = ab)
            }
            return Ab
          }
          return Ab
        }
        return []
      }
      postExportMaterialAsync(bb, ab, Ub) {
        return new Promise((bb => {
          var Ab;
          if (Ub instanceof ia) {
            if (!Ub.clearCoat.isEnabled) return void bb(ab);
            this._wasUsed = !0, ab.extensions = ab.extensions || {};
            const Ab = this._exporter._materialExporter.getTextureInfo(Ub.clearCoat.texture);
            let Mb, Tb;
            Mb = Ub.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Ub.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Ub.clearCoat.textureRoughness), Ub.clearCoat.isTintEnabled && (Tb = this._exporter._materialExporter.getTextureInfo(Ub.clearCoat.tintTexture));
            const Eb = this._exporter._materialExporter.getTextureInfo(Ub.clearCoat.bumpTexture),
              Yb = Ub.clearCoat.indexOfRefraction,
              Bb = {
                coatFactor: Ub.clearCoat.intensity,
                coatTexture: Ab ?? void 0,
                coatRoughnessFactor: Ub.clearCoat.roughness,
                coatRoughnessTexture: Mb ?? void 0,
                coatNormalTexture: Eb ?? void 0,
                coatColorFactor: Ub.clearCoat.tintColor.qUb(),
                coatColorTexture: Tb ?? void 0,
                coatIor: 1.5 !== Yb ? Yb : void 0
              };
            null === Bb.coatTexture && null === Bb.coatRoughnessTexture && null === Bb.coatRoughnessTexture && null === Bb.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions[HM] = Bb
          } else if (Ub instanceof na) {
            if (0 == Ub.coatWeight) return void bb(ab);
            let Mb, Tb, Eb, Yb;
            this._wasUsed = !0, ab.extensions = ab.extensions || {}, Ub.coatWeightTexture && (Mb = this._mergedTexturesMap[Ub.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[Ub.coatWeightTexture.uniqueId] : Ub.coatWeightTexture, Tb = this._exporter._materialExporter.getTextureInfo(Mb)), Ub.coatRoughnessTexture && (Eb = this._mergedTexturesMap[Ub.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Ub.coatRoughnessTexture.uniqueId] : Ub.coatRoughnessTexture, Yb = this._exporter._materialExporter.getTextureInfo(Eb));
            const Bb = this._exporter._materialExporter.getTextureInfo(Ub.geometryCoatNormalTexture),
              eb = this._exporter._materialExporter.getTextureInfo(Ub.coatColorTexture),
              vb = Ub.coatIor,
              Lb = Ub.coatDarkening,
              Pb = Ub.coatRoughnessTexture,
              Xb = IM(Ub),
              jb = this._mergedTexturesMap[Xb];
            let Rb, kb = 0,
              yb = 0;
            if (Ub.coatRoughnessAnisotropy > 0) {
              if (Pb || jb) {
                const bb = jb ? this._exporter._materialExporter.getTextureInfo(jb) : null;
                kb = Ub.coatRoughnessAnisotropy, yb = Ub.geometryCoatTangentAngle, Rb = bb || void 0
              } else {
                let bb = Ub.coatRoughness,
                  Ab = Ub.coatRoughnessAnisotropy;
                if (!Ub._useGltfStyleAnisotropy) {
                  const ab = function(bb, ab) {
                    const Ub = bb * bb,
                      Ab = Ub * Math.sqrt(2 / (1 + (1 - ab) * (1 - ab))),
                      Mb = (1 - ab) * Ab;
                    return {
                      newBaseRoughness: Math.sqrt(Mb),
                      newAnisotropyStrength: Math.min(Math.sqrt((Ab - Ub) / Math.max(1 - Ub, 1e-4)), 1)
                    }
                  }(Ub.coatRoughness, Ub.coatRoughnessAnisotropy);
                  bb = ab.newBaseRoughness, Ab = ab.newAnisotropyStrength
                }
                ab.pbrMetallicRoughness && (ab.pbrMetallicRoughness.roughnessFactor = bb), kb = Ab, yb = Ub.geometryCoatTangentAngle + .5 * Math.PI, Rb = void 0
              }
              Ub._useGltfStyleAnisotropy || (ab.extensions.KHR_materials_openpbr = {}, (Ab = this._exporter._glTF).extensionsUsed || (Ab.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const Zb = {
              coatFactor: Ub.coatWeight,
              coatTexture: Tb ?? void 0,
              coatRoughnessFactor: Ub.coatRoughness,
              coatRoughnessTexture: Yb ?? void 0,
              coatNormalTexture: Bb ?? void 0,
              coatColorFactor: Ub.coatColor.qUb(),
              coatColorTexture: eb ?? void 0,
              coatIor: 1.5 !== vb ? vb : void 0,
              coatDarkeningFactor: 1 !== Lb ? Lb : void 0,
              coatAnisotropyRotation: yb,
              coatAnisotropyStrength: kb,
              coatAnisotropyTexture: Rb
            };
            null === Zb.coatTexture && null === Zb.coatRoughnessTexture && null === Zb.coatRoughnessTexture && null === Zb.coatAnisotropyTexture && null === Zb.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions[HM] = Zb
          }
          bb(ab)
        }))
      }
    }
    let hM = !1;

    function GM() {
      hM || (hM = !0, GA.RegisterExtension(HM, (bb => new FM(bb))))
    }
    GM();
    let QM = (() => {
      var bb, ab, Ub, Ab, Mb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb, yb, Zb, Db, zb, xb, ib, fb, mb, Wb, Hb, Ib, db, Fb, hb, Qb, qb, ub, rb, Kb, ob, lb, tb, wb, sb, Cb, Vb, Ob, cb, Jb, nb, Sb, ba, aa, Ua, Aa, Ma, Ta, Ea, Ya, Ba, ea, va, La, Pa, Xa, ja, Ra, ka, ya, Za, Da;
      let za, xa, ma, pa, Na, Wa, Ha, Ia, da, Fa, ha, Ga, Qa, qa, ua, ra, Ka, oa, la, ta, wa, sa, ga, Ca, Va, Oa, ca, Ja, na, Sa, bU, aU, UU, AU, MU, TU, EU, YU, BU, eU, vU, LU, PU, XU, jU, RU, kU, yU, ZU, DU, zU, xU, iU, fU, mU, pU, NU, WU, HU, IU, dU, FU, hU, GU, QU, qU, uU, rU, KU = ia,
        oU = [],
        lU = [],
        tU = [],
        wU = [],
        sU = [],
        gU = [],
        CU = [],
        VU = [],
        OU = [],
        cU = [],
        JU = [],
        nU = [],
        SU = [],
        bA = [],
        aA = [],
        UA = [],
        AA = [],
        MA = [],
        TA = [],
        EA = [],
        YA = [],
        BA = [],
        eA = [],
        vA = [],
        LA = [],
        PA = [],
        XA = [],
        jA = [],
        RA = [],
        kA = [],
        yA = [],
        ZA = [],
        DA = [],
        zA = [],
        xA = [],
        iA = [],
        fA = [],
        mA = [],
        pA = [],
        NA = [],
        WA = [],
        HA = [],
        IA = [],
        dA = [],
        FA = [],
        hA = [],
        GA = [],
        QA = [],
        qA = [],
        uA = [],
        rA = [],
        KA = [],
        oA = [],
        lA = [],
        tA = [],
        wA = [],
        sA = [],
        gA = [],
        CA = [],
        VA = [],
        OA = [],
        cA = [],
        JA = [],
        nA = [],
        SA = [],
        bM = [],
        aM = [],
        UM = [],
        AM = [],
        MM = [],
        TM = [],
        EM = [],
        YM = [],
        BM = [],
        eM = [],
        vM = [],
        LM = [],
        PM = [],
        XM = [],
        jM = [],
        RM = [],
        kM = [],
        yM = [],
        ZM = [],
        DM = [],
        zM = [],
        xM = [],
        iM = [],
        fM = [],
        mM = [],
        pM = [],
        NM = [],
        WM = [],
        HM = [],
        IM = [],
        dM = [],
        FM = [],
        hM = [],
        GM = [],
        QM = [],
        qM = [],
        uM = [],
        rM = [],
        KM = [],
        oM = [],
        lM = [],
        tM = [],
        wM = [],
        sM = [],
        gM = [],
        CM = [],
        VM = [],
        OM = [],
        cM = [],
        JM = [],
        nM = [],
        SM = [],
        bT = [],
        aT = [],
        UT = [],
        AT = [],
        MT = [],
        TT = [],
        ET = [],
        YT = [],
        BT = [],
        eT = [],
        vT = [],
        LT = [],
        PT = [],
        XT = [],
        jT = [],
        RT = [];
      return bb = class extends KU {
        get directIntensity() {
          return (0, pb.c)(this, ab, "f")
        }
        set directIntensity(bb) {
          (0, pb.e)(this, ab, bb, "f")
        }
        get emissiveIntensity() {
          return (0, pb.c)(this, Ub, "f")
        }
        set emissiveIntensity(bb) {
          (0, pb.e)(this, Ub, bb, "f")
        }
        get environmentIntensity() {
          return (0, pb.c)(this, Ab, "f")
        }
        set environmentIntensity(bb) {
          (0, pb.e)(this, Ab, bb, "f")
        }
        get specularIntensity() {
          return (0, pb.c)(this, Mb, "f")
        }
        set specularIntensity(bb) {
          (0, pb.e)(this, Mb, bb, "f")
        }
        get disableBumpMap() {
          return (0, pb.c)(this, Eb, "f")
        }
        set disableBumpMap(bb) {
          (0, pb.e)(this, Eb, bb, "f")
        }
        get albedoTexture() {
          return (0, pb.c)(this, Yb, "f")
        }
        set albedoTexture(bb) {
          (0, pb.e)(this, Yb, bb, "f")
        }
        get baseWeightTexture() {
          return (0, pb.c)(this, Bb, "f")
        }
        set baseWeightTexture(bb) {
          (0, pb.e)(this, Bb, bb, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, pb.c)(this, eb, "f")
        }
        set baseDiffuseRoughnessTexture(bb) {
          (0, pb.e)(this, eb, bb, "f")
        }
        get ambientTexture() {
          return (0, pb.c)(this, vb, "f")
        }
        set ambientTexture(bb) {
          (0, pb.e)(this, vb, bb, "f")
        }
        get ambientTextureStrength() {
          return (0, pb.c)(this, Lb, "f")
        }
        set ambientTextureStrength(bb) {
          (0, pb.e)(this, Lb, bb, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, pb.c)(this, Pb, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(bb) {
          (0, pb.e)(this, Pb, bb, "f")
        }
        get opacityTexture() {
          return (0, pb.c)(this, Xb, "f")
        }
        set opacityTexture(bb) {
          (0, pb.e)(this, Xb, bb, "f")
        }
        get reflectionTexture() {
          return (0, pb.c)(this, jb, "f")
        }
        set reflectionTexture(bb) {
          (0, pb.e)(this, jb, bb, "f")
        }
        get emissiveTexture() {
          return (0, pb.c)(this, Rb, "f")
        }
        set emissiveTexture(bb) {
          (0, pb.e)(this, Rb, bb, "f")
        }
        get reflectivityTexture() {
          return (0, pb.c)(this, kb, "f")
        }
        set reflectivityTexture(bb) {
          (0, pb.e)(this, kb, bb, "f")
        }
        get metallicTexture() {
          return (0, pb.c)(this, yb, "f")
        }
        set metallicTexture(bb) {
          (0, pb.e)(this, yb, bb, "f")
        }
        get metallic() {
          return (0, pb.c)(this, Zb, "f")
        }
        set metallic(bb) {
          (0, pb.e)(this, Zb, bb, "f")
        }
        get roughness() {
          return (0, pb.c)(this, Db, "f")
        }
        set roughness(bb) {
          (0, pb.e)(this, Db, bb, "f")
        }
        get metallicF0Factor() {
          return (0, pb.c)(this, zb, "f")
        }
        set metallicF0Factor(bb) {
          (0, pb.e)(this, zb, bb, "f")
        }
        get metallicReflectanceColor() {
          return (0, pb.c)(this, xb, "f")
        }
        set metallicReflectanceColor(bb) {
          (0, pb.e)(this, xb, bb, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, pb.c)(this, ib, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(bb) {
          (0, pb.e)(this, ib, bb, "f")
        }
        get metallicReflectanceTexture() {
          return (0, pb.c)(this, fb, "f")
        }
        set metallicReflectanceTexture(bb) {
          (0, pb.e)(this, fb, bb, "f")
        }
        get reflectanceTexture() {
          return (0, pb.c)(this, mb, "f")
        }
        set reflectanceTexture(bb) {
          (0, pb.e)(this, mb, bb, "f")
        }
        get microSurfaceTexture() {
          return (0, pb.c)(this, Wb, "f")
        }
        set microSurfaceTexture(bb) {
          (0, pb.e)(this, Wb, bb, "f")
        }
        get bumpTexture() {
          return (0, pb.c)(this, Hb, "f")
        }
        set bumpTexture(bb) {
          (0, pb.e)(this, Hb, bb, "f")
        }
        get lightmapTexture() {
          return (0, pb.c)(this, Ib, "f")
        }
        set lightmapTexture(bb) {
          (0, pb.e)(this, Ib, bb, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(bb) {
          this.subSurface.refractionTexture = bb, bb ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, pb.c)(this, db, "f")
        }
        set ambientColor(bb) {
          (0, pb.e)(this, db, bb, "f")
        }
        get albedoColor() {
          return (0, pb.c)(this, Fb, "f")
        }
        set albedoColor(bb) {
          (0, pb.e)(this, Fb, bb, "f")
        }
        get baseWeight() {
          return (0, pb.c)(this, hb, "f")
        }
        set baseWeight(bb) {
          (0, pb.e)(this, hb, bb, "f")
        }
        get baseDiffuseRoughness() {
          return (0, pb.c)(this, Qb, "f")
        }
        set baseDiffuseRoughness(bb) {
          (0, pb.e)(this, Qb, bb, "f")
        }
        get reflectivityColor() {
          return (0, pb.c)(this, qb, "f")
        }
        set reflectivityColor(bb) {
          (0, pb.e)(this, qb, bb, "f")
        }
        get reflectionColor() {
          return (0, pb.c)(this, ub, "f")
        }
        set reflectionColor(bb) {
          (0, pb.e)(this, ub, bb, "f")
        }
        get emissiveColor() {
          return (0, pb.c)(this, rb, "f")
        }
        set emissiveColor(bb) {
          (0, pb.e)(this, rb, bb, "f")
        }
        get microSurface() {
          return (0, pb.c)(this, Kb, "f")
        }
        set microSurface(bb) {
          (0, pb.e)(this, Kb, bb, "f")
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
          return (0, pb.c)(this, ob, "f")
        }
        set useLightmapAsShadowmap(bb) {
          (0, pb.e)(this, ob, bb, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, pb.c)(this, lb, "f")
        }
        set useAlphaFromAlbedoTexture(bb) {
          (0, pb.e)(this, lb, bb, "f")
        }
        get forceAlphaTest() {
          return (0, pb.c)(this, tb, "f")
        }
        set forceAlphaTest(bb) {
          (0, pb.e)(this, tb, bb, "f")
        }
        get alphaCutOff() {
          return (0, pb.c)(this, wb, "f")
        }
        set alphaCutOff(bb) {
          (0, pb.e)(this, wb, bb, "f")
        }
        get useSpecularOverAlpha() {
          return (0, pb.c)(this, sb, "f")
        }
        set useSpecularOverAlpha(bb) {
          (0, pb.e)(this, sb, bb, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, pb.c)(this, Cb, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(bb) {
          (0, pb.e)(this, Cb, bb, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, pb.c)(this, Vb, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(bb) {
          (0, pb.e)(this, Vb, bb, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, pb.c)(this, Ob, "f")
        }
        set useRoughnessFromMetallicTextureGreen(bb) {
          (0, pb.e)(this, Ob, bb, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, pb.c)(this, cb, "f")
        }
        set useMetallnessFromMetallicTextureBlue(bb) {
          (0, pb.e)(this, cb, bb, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, pb.c)(this, Jb, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(bb) {
          (0, pb.e)(this, Jb, bb, "f")
        }
        get useAmbientInGrayScale() {
          return (0, pb.c)(this, nb, "f")
        }
        set useAmbientInGrayScale(bb) {
          (0, pb.e)(this, nb, bb, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, pb.c)(this, Sb, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(bb) {
          (0, pb.e)(this, Sb, bb, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === ia.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(bb) {
          bb !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? ia.LIGHTFALLOFF_PHYSICAL : ia.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === ia.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(bb) {
          bb !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = bb ? ia.LIGHTFALLOFF_GLTF : ia.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, pb.c)(this, ba, "f")
        }
        set useRadianceOverAlpha(bb) {
          (0, pb.e)(this, ba, bb, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, pb.c)(this, aa, "f")
        }
        set useObjectSpaceNormalMap(bb) {
          (0, pb.e)(this, aa, bb, "f")
        }
        get useParallax() {
          return (0, pb.c)(this, Ua, "f")
        }
        set useParallax(bb) {
          (0, pb.e)(this, Ua, bb, "f")
        }
        get useParallaxOcclusion() {
          return (0, pb.c)(this, Aa, "f")
        }
        set useParallaxOcclusion(bb) {
          (0, pb.e)(this, Aa, bb, "f")
        }
        get parallaxScaleBias() {
          return (0, pb.c)(this, Ma, "f")
        }
        set parallaxScaleBias(bb) {
          (0, pb.e)(this, Ma, bb, "f")
        }
        get disableLighting() {
          return (0, pb.c)(this, Ta, "f")
        }
        set disableLighting(bb) {
          (0, pb.e)(this, Ta, bb, "f")
        }
        get forceIrradianceInFragment() {
          return (0, pb.c)(this, Ea, "f")
        }
        set forceIrradianceInFragment(bb) {
          (0, pb.e)(this, Ea, bb, "f")
        }
        get maxSimultaneousLights() {
          return (0, pb.c)(this, Ya, "f")
        }
        set maxSimultaneousLights(bb) {
          (0, pb.e)(this, Ya, bb, "f")
        }
        get invertNormalMapX() {
          return (0, pb.c)(this, Ba, "f")
        }
        set invertNormalMapX(bb) {
          (0, pb.e)(this, Ba, bb, "f")
        }
        get invertNormalMapY() {
          return (0, pb.c)(this, ea, "f")
        }
        set invertNormalMapY(bb) {
          (0, pb.e)(this, ea, bb, "f")
        }
        get twoSidedLighting() {
          return (0, pb.c)(this, va, "f")
        }
        set twoSidedLighting(bb) {
          (0, pb.e)(this, va, bb, "f")
        }
        get useAlphaFresnel() {
          return (0, pb.c)(this, La, "f")
        }
        set useAlphaFresnel(bb) {
          (0, pb.e)(this, La, bb, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, pb.c)(this, Pa, "f")
        }
        set useLinearAlphaFresnel(bb) {
          (0, pb.e)(this, Pa, bb, "f")
        }
        get environmentBRDFTexture() {
          return (0, pb.c)(this, Xa, "f")
        }
        set environmentBRDFTexture(bb) {
          (0, pb.e)(this, Xa, bb, "f")
        }
        get forceNormalForward() {
          return (0, pb.c)(this, ja, "f")
        }
        set forceNormalForward(bb) {
          (0, pb.e)(this, ja, bb, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, pb.c)(this, Ra, "f")
        }
        set enableSpecularAntiAliasing(bb) {
          (0, pb.e)(this, Ra, bb, "f")
        }
        get useHorizonOcclusion() {
          return (0, pb.c)(this, ka, "f")
        }
        set useHorizonOcclusion(bb) {
          (0, pb.e)(this, ka, bb, "f")
        }
        get useRadianceOcclusion() {
          return (0, pb.c)(this, ya, "f")
        }
        set useRadianceOcclusion(bb) {
          (0, pb.e)(this, ya, bb, "f")
        }
        get unlit() {
          return (0, pb.c)(this, Za, "f")
        }
        set unlit(bb) {
          (0, pb.e)(this, Za, bb, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, pb.c)(this, Da, "f")
        }
        set applyDecalMapAfterDetailMap(bb) {
          (0, pb.e)(this, Da, bb, "f")
        }
        constructor(Tb, Nb) {
          super(Tb, Nb, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), ab.set(this, ((0, pb.k)(this, oU), (0, pb.k)(this, lU, 1))), Ub.set(this, ((0, pb.k)(this, tU), (0, pb.k)(this, wU, 1))), Ab.set(this, ((0, pb.k)(this, sU), (0, pb.k)(this, gU, 1))), Mb.set(this, ((0, pb.k)(this, CU), (0, pb.k)(this, VU, 1))), Eb.set(this, ((0, pb.k)(this, OU), (0, pb.k)(this, cU, !1))), Yb.set(this, ((0, pb.k)(this, JU), (0, pb.k)(this, nU, void 0))), Bb.set(this, ((0, pb.k)(this, SU), (0, pb.k)(this, bA, void 0))), eb.set(this, ((0, pb.k)(this, aA), (0, pb.k)(this, UA, void 0))), vb.set(this, ((0, pb.k)(this, AA), (0, pb.k)(this, MA, void 0))), Lb.set(this, ((0, pb.k)(this, TA), (0, pb.k)(this, EA, 1))), Pb.set(this, ((0, pb.k)(this, YA), (0, pb.k)(this, BA, bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), Xb.set(this, ((0, pb.k)(this, eA), (0, pb.k)(this, vA, void 0))), jb.set(this, ((0, pb.k)(this, LA), (0, pb.k)(this, PA, void 0))), Rb.set(this, ((0, pb.k)(this, XA), (0, pb.k)(this, jA, void 0))), kb.set(this, ((0, pb.k)(this, RA), (0, pb.k)(this, kA, void 0))), yb.set(this, ((0, pb.k)(this, yA), (0, pb.k)(this, ZA, void 0))), Zb.set(this, ((0, pb.k)(this, DA), (0, pb.k)(this, zA, void 0))), Db.set(this, ((0, pb.k)(this, xA), (0, pb.k)(this, iA, void 0))), zb.set(this, ((0, pb.k)(this, fA), (0, pb.k)(this, mA, 1))), xb.set(this, ((0, pb.k)(this, pA), (0, pb.k)(this, NA, gb.c.White()))), ib.set(this, ((0, pb.k)(this, WA), (0, pb.k)(this, HA, !1))), fb.set(this, ((0, pb.k)(this, IA), (0, pb.k)(this, dA, void 0))), mb.set(this, ((0, pb.k)(this, FA), (0, pb.k)(this, hA, void 0))), Wb.set(this, ((0, pb.k)(this, GA), (0, pb.k)(this, QA, void 0))), Hb.set(this, ((0, pb.k)(this, qA), (0, pb.k)(this, uA, void 0))), Ib.set(this, ((0, pb.k)(this, rA), (0, pb.k)(this, KA, void 0))), db.set(this, ((0, pb.k)(this, oA), (0, pb.k)(this, lA, new gb.c(0, 0, 0)))), Fb.set(this, ((0, pb.k)(this, tA), (0, pb.k)(this, wA, new gb.c(1, 1, 1)))), hb.set(this, ((0, pb.k)(this, sA), (0, pb.k)(this, gA, 1))), Qb.set(this, ((0, pb.k)(this, CA), (0, pb.k)(this, VA, void 0))), qb.set(this, ((0, pb.k)(this, OA), (0, pb.k)(this, cA, new gb.c(1, 1, 1)))), ub.set(this, ((0, pb.k)(this, JA), (0, pb.k)(this, nA, new gb.c(1, 1, 1)))), rb.set(this, ((0, pb.k)(this, SA), (0, pb.k)(this, bM, new gb.c(0, 0, 0)))), Kb.set(this, ((0, pb.k)(this, aM), (0, pb.k)(this, UM, 1))), ob.set(this, ((0, pb.k)(this, AM), (0, pb.k)(this, MM, !1))), lb.set(this, ((0, pb.k)(this, TM), (0, pb.k)(this, EM, !1))), tb.set(this, ((0, pb.k)(this, YM), (0, pb.k)(this, BM, !1))), wb.set(this, ((0, pb.k)(this, eM), (0, pb.k)(this, vM, .4))), sb.set(this, ((0, pb.k)(this, LM), (0, pb.k)(this, PM, !0))), Cb.set(this, ((0, pb.k)(this, XM), (0, pb.k)(this, jM, !1))), Vb.set(this, ((0, pb.k)(this, RM), (0, pb.k)(this, kM, !0))), Ob.set(this, ((0, pb.k)(this, yM), (0, pb.k)(this, ZM, !1))), cb.set(this, ((0, pb.k)(this, DM), (0, pb.k)(this, zM, !1))), Jb.set(this, ((0, pb.k)(this, xM), (0, pb.k)(this, iM, !1))), nb.set(this, ((0, pb.k)(this, fM), (0, pb.k)(this, mM, !1))), Sb.set(this, ((0, pb.k)(this, pM), (0, pb.k)(this, NM, !1))), ba.set(this, ((0, pb.k)(this, WM), (0, pb.k)(this, HM, !0))), aa.set(this, ((0, pb.k)(this, IM), (0, pb.k)(this, dM, !1))), Ua.set(this, ((0, pb.k)(this, FM), (0, pb.k)(this, hM, !1))), Aa.set(this, ((0, pb.k)(this, GM), (0, pb.k)(this, QM, !1))), Ma.set(this, ((0, pb.k)(this, qM), (0, pb.k)(this, uM, .05))), Ta.set(this, ((0, pb.k)(this, rM), (0, pb.k)(this, KM, !1))), Ea.set(this, ((0, pb.k)(this, oM), (0, pb.k)(this, lM, !1))), Ya.set(this, ((0, pb.k)(this, tM), (0, pb.k)(this, wM, 4))), Ba.set(this, ((0, pb.k)(this, sM), (0, pb.k)(this, gM, !1))), ea.set(this, ((0, pb.k)(this, CM), (0, pb.k)(this, VM, !1))), va.set(this, ((0, pb.k)(this, OM), (0, pb.k)(this, cM, !1))), La.set(this, ((0, pb.k)(this, JM), (0, pb.k)(this, nM, !1))), Pa.set(this, ((0, pb.k)(this, SM), (0, pb.k)(this, bT, !1))), Xa.set(this, ((0, pb.k)(this, aT), (0, pb.k)(this, UT, null))), ja.set(this, ((0, pb.k)(this, AT), (0, pb.k)(this, MT, !1))), Ra.set(this, ((0, pb.k)(this, TT), (0, pb.k)(this, ET, !1))), ka.set(this, ((0, pb.k)(this, YT), (0, pb.k)(this, BT, !0))), ya.set(this, ((0, pb.k)(this, eT), (0, pb.k)(this, vT, !0))), Za.set(this, ((0, pb.k)(this, LT), (0, pb.k)(this, PT, !1))), Da.set(this, ((0, pb.k)(this, XT), (0, pb.k)(this, jT, !1))), (0, pb.k)(this, RT), this._environmentBRDFTexture = Gb(this.oN())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(ab) {
          let Ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Mb = fa.b.Clone((() => new bb(ab, this.oN())), this, {
            cloneTexturesOnlyOnce: Ub
          });
          return Mb.id = ab, Mb.name = ab, this.stencil.copyTo(Mb.stencil), this._clonePlugins(Mb, Ab), Mb
        }
        serialize() {
          const bb = super.serialize();
          return bb.customType = "BABYLON.PBRMaterial", bb
        }
        static Parse(ab, Ub, Ab) {
          const Mb = fa.b.Parse((() => new bb(ab.name, Ub)), ab, Ub, Ab);
          return ab.stencil && Mb.stencil.parse(ab.stencil, Ub, Ab), Tb.d._ParsePlugins(ab, Mb, Ub, Ab), ab.clearCoat && Mb.clearCoat.parse(ab.clearCoat, Ub, Ab), ab.anisotropy && Mb.anisotropy.parse(ab.anisotropy, Ub, Ab), ab.brdf && Mb.brdf.parse(ab.brdf, Ub, Ab), ab.sheen && Mb.sheen.parse(ab.sheen, Ub, Ab), ab.subSurface && Mb.subSurface.parse(ab.subSurface, Ub, Ab), ab.iridescence && Mb.iridescence.parse(ab.iridescence, Ub, Ab), Mb
        }
      }, ab = new WeakMap, Ub = new WeakMap, Ab = new WeakMap, Mb = new WeakMap, Eb = new WeakMap, Yb = new WeakMap, Bb = new WeakMap, eb = new WeakMap, vb = new WeakMap, Lb = new WeakMap, Pb = new WeakMap, Xb = new WeakMap, jb = new WeakMap, Rb = new WeakMap, kb = new WeakMap, yb = new WeakMap, Zb = new WeakMap, Db = new WeakMap, zb = new WeakMap, xb = new WeakMap, ib = new WeakMap, fb = new WeakMap, mb = new WeakMap, Wb = new WeakMap, Hb = new WeakMap, Ib = new WeakMap, db = new WeakMap, Fb = new WeakMap, hb = new WeakMap, Qb = new WeakMap, qb = new WeakMap, ub = new WeakMap, rb = new WeakMap, Kb = new WeakMap, ob = new WeakMap, lb = new WeakMap, tb = new WeakMap, wb = new WeakMap, sb = new WeakMap, Cb = new WeakMap, Vb = new WeakMap, Ob = new WeakMap, cb = new WeakMap, Jb = new WeakMap, nb = new WeakMap, Sb = new WeakMap, ba = new WeakMap, aa = new WeakMap, Ua = new WeakMap, Aa = new WeakMap, Ma = new WeakMap, Ta = new WeakMap, Ea = new WeakMap, Ya = new WeakMap, Ba = new WeakMap, ea = new WeakMap, va = new WeakMap, La = new WeakMap, Pa = new WeakMap, Xa = new WeakMap, ja = new WeakMap, Ra = new WeakMap, ka = new WeakMap, ya = new WeakMap, Za = new WeakMap, Da = new WeakMap, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(KU[Symbol.metadata] ?? null) : void 0;
        za = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], xa = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], ma = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], pa = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Na = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Wa = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Ha = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Ia = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], da = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Fa = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], ha = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Ga = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Qa = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], qa = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], ua = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], ra = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Ka = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], oa = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], la = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], ta = [(0, Nb.k)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], wa = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], sa = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], ga = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Ca = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Va = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Oa = [(0, Nb.D)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty", null)], ca = [(0, Nb.k)("ambient"), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Ja = [(0, Nb.k)("albedo"), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], na = [(0, Nb.K)("baseWeight"), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], Sa = [(0, Nb.K)("baseDiffuseRoughness"), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], bU = [(0, Nb.k)("reflectivity"), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], aU = [(0, Nb.k)("reflection"), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], UU = [(0, Nb.k)("emissive"), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], AU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], MU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], TU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], EU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], YU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], BU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], eU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], vU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], LU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], PU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], XU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], jU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], RU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], kU = [(0, Nb.K)()], yU = [(0, Nb.K)()], ZU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], DU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], zU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], xU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], iU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], fU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsLightsDirty")], mU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], pU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsLightsDirty")], NU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], WU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], HU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], IU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], dU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], FU = [(0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], hU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], GU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], QU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], qU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsTexturesDirty")], uU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], rU = [(0, Nb.K)(), (0, Nb.e)("_markAllSubMeshesAsMiscDirty")], (0, pb.h)(bb, null, za, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "directIntensity" in bb,
            get: bb => bb.directIntensity,
            set: (bb, ab) => {
              bb.directIntensity = ab
            }
          },
          metadata: ab
        }, lU, tU), (0, pb.h)(bb, null, xa, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "emissiveIntensity" in bb,
            get: bb => bb.emissiveIntensity,
            set: (bb, ab) => {
              bb.emissiveIntensity = ab
            }
          },
          metadata: ab
        }, wU, sU), (0, pb.h)(bb, null, ma, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "environmentIntensity" in bb,
            get: bb => bb.environmentIntensity,
            set: (bb, ab) => {
              bb.environmentIntensity = ab
            }
          },
          metadata: ab
        }, gU, CU), (0, pb.h)(bb, null, pa, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "specularIntensity" in bb,
            get: bb => bb.specularIntensity,
            set: (bb, ab) => {
              bb.specularIntensity = ab
            }
          },
          metadata: ab
        }, VU, OU), (0, pb.h)(bb, null, Na, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableBumpMap" in bb,
            get: bb => bb.disableBumpMap,
            set: (bb, ab) => {
              bb.disableBumpMap = ab
            }
          },
          metadata: ab
        }, cU, JU), (0, pb.h)(bb, null, Wa, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "albedoTexture" in bb,
            get: bb => bb.albedoTexture,
            set: (bb, ab) => {
              bb.albedoTexture = ab
            }
          },
          metadata: ab
        }, nU, SU), (0, pb.h)(bb, null, Ha, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseWeightTexture" in bb,
            get: bb => bb.baseWeightTexture,
            set: (bb, ab) => {
              bb.baseWeightTexture = ab
            }
          },
          metadata: ab
        }, bA, aA), (0, pb.h)(bb, null, Ia, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseDiffuseRoughnessTexture" in bb,
            get: bb => bb.baseDiffuseRoughnessTexture,
            set: (bb, ab) => {
              bb.baseDiffuseRoughnessTexture = ab
            }
          },
          metadata: ab
        }, UA, AA), (0, pb.h)(bb, null, da, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientTexture" in bb,
            get: bb => bb.ambientTexture,
            set: (bb, ab) => {
              bb.ambientTexture = ab
            }
          },
          metadata: ab
        }, MA, TA), (0, pb.h)(bb, null, Fa, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientTextureStrength" in bb,
            get: bb => bb.ambientTextureStrength,
            set: (bb, ab) => {
              bb.ambientTextureStrength = ab
            }
          },
          metadata: ab
        }, EA, YA), (0, pb.h)(bb, null, ha, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientTextureImpactOnAnalyticalLights" in bb,
            get: bb => bb.ambientTextureImpactOnAnalyticalLights,
            set: (bb, ab) => {
              bb.ambientTextureImpactOnAnalyticalLights = ab
            }
          },
          metadata: ab
        }, BA, eA), (0, pb.h)(bb, null, Ga, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "opacityTexture" in bb,
            get: bb => bb.opacityTexture,
            set: (bb, ab) => {
              bb.opacityTexture = ab
            }
          },
          metadata: ab
        }, vA, LA), (0, pb.h)(bb, null, Qa, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectionTexture" in bb,
            get: bb => bb.reflectionTexture,
            set: (bb, ab) => {
              bb.reflectionTexture = ab
            }
          },
          metadata: ab
        }, PA, XA), (0, pb.h)(bb, null, qa, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "emissiveTexture" in bb,
            get: bb => bb.emissiveTexture,
            set: (bb, ab) => {
              bb.emissiveTexture = ab
            }
          },
          metadata: ab
        }, jA, RA), (0, pb.h)(bb, null, ua, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectivityTexture" in bb,
            get: bb => bb.reflectivityTexture,
            set: (bb, ab) => {
              bb.reflectivityTexture = ab
            }
          },
          metadata: ab
        }, kA, yA), (0, pb.h)(bb, null, ra, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicTexture" in bb,
            get: bb => bb.metallicTexture,
            set: (bb, ab) => {
              bb.metallicTexture = ab
            }
          },
          metadata: ab
        }, ZA, DA), (0, pb.h)(bb, null, Ka, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallic" in bb,
            get: bb => bb.metallic,
            set: (bb, ab) => {
              bb.metallic = ab
            }
          },
          metadata: ab
        }, zA, xA), (0, pb.h)(bb, null, oa, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughness" in bb,
            get: bb => bb.roughness,
            set: (bb, ab) => {
              bb.roughness = ab
            }
          },
          metadata: ab
        }, iA, fA), (0, pb.h)(bb, null, la, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicF0Factor" in bb,
            get: bb => bb.metallicF0Factor,
            set: (bb, ab) => {
              bb.metallicF0Factor = ab
            }
          },
          metadata: ab
        }, mA, pA), (0, pb.h)(bb, null, ta, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicReflectanceColor" in bb,
            get: bb => bb.metallicReflectanceColor,
            set: (bb, ab) => {
              bb.metallicReflectanceColor = ab
            }
          },
          metadata: ab
        }, NA, WA), (0, pb.h)(bb, null, wa, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useOnlyMetallicFromMetallicReflectanceTexture" in bb,
            get: bb => bb.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (bb, ab) => {
              bb.useOnlyMetallicFromMetallicReflectanceTexture = ab
            }
          },
          metadata: ab
        }, HA, IA), (0, pb.h)(bb, null, sa, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "metallicReflectanceTexture" in bb,
            get: bb => bb.metallicReflectanceTexture,
            set: (bb, ab) => {
              bb.metallicReflectanceTexture = ab
            }
          },
          metadata: ab
        }, dA, FA), (0, pb.h)(bb, null, ga, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectanceTexture" in bb,
            get: bb => bb.reflectanceTexture,
            set: (bb, ab) => {
              bb.reflectanceTexture = ab
            }
          },
          metadata: ab
        }, hA, GA), (0, pb.h)(bb, null, Ca, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "microSurfaceTexture" in bb,
            get: bb => bb.microSurfaceTexture,
            set: (bb, ab) => {
              bb.microSurfaceTexture = ab
            }
          },
          metadata: ab
        }, QA, qA), (0, pb.h)(bb, null, Va, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "bumpTexture" in bb,
            get: bb => bb.bumpTexture,
            set: (bb, ab) => {
              bb.bumpTexture = ab
            }
          },
          metadata: ab
        }, uA, rA), (0, pb.h)(bb, null, Oa, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "lightmapTexture" in bb,
            get: bb => bb.lightmapTexture,
            set: (bb, ab) => {
              bb.lightmapTexture = ab
            }
          },
          metadata: ab
        }, KA, oA), (0, pb.h)(bb, null, ca, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "ambientColor" in bb,
            get: bb => bb.ambientColor,
            set: (bb, ab) => {
              bb.ambientColor = ab
            }
          },
          metadata: ab
        }, lA, tA), (0, pb.h)(bb, null, Ja, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "albedoColor" in bb,
            get: bb => bb.albedoColor,
            set: (bb, ab) => {
              bb.albedoColor = ab
            }
          },
          metadata: ab
        }, wA, sA), (0, pb.h)(bb, null, na, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseWeight" in bb,
            get: bb => bb.baseWeight,
            set: (bb, ab) => {
              bb.baseWeight = ab
            }
          },
          metadata: ab
        }, gA, CA), (0, pb.h)(bb, null, Sa, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: bb => "baseDiffuseRoughness" in bb,
            get: bb => bb.baseDiffuseRoughness,
            set: (bb, ab) => {
              bb.baseDiffuseRoughness = ab
            }
          },
          metadata: ab
        }, VA, OA), (0, pb.h)(bb, null, bU, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectivityColor" in bb,
            get: bb => bb.reflectivityColor,
            set: (bb, ab) => {
              bb.reflectivityColor = ab
            }
          },
          metadata: ab
        }, cA, JA), (0, pb.h)(bb, null, aU, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "reflectionColor" in bb,
            get: bb => bb.reflectionColor,
            set: (bb, ab) => {
              bb.reflectionColor = ab
            }
          },
          metadata: ab
        }, nA, SA), (0, pb.h)(bb, null, UU, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: bb => "emissiveColor" in bb,
            get: bb => bb.emissiveColor,
            set: (bb, ab) => {
              bb.emissiveColor = ab
            }
          },
          metadata: ab
        }, bM, aM), (0, pb.h)(bb, null, AU, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: bb => "microSurface" in bb,
            get: bb => bb.microSurface,
            set: (bb, ab) => {
              bb.microSurface = ab
            }
          },
          metadata: ab
        }, UM, AM), (0, pb.h)(bb, null, MU, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLightmapAsShadowmap" in bb,
            get: bb => bb.useLightmapAsShadowmap,
            set: (bb, ab) => {
              bb.useLightmapAsShadowmap = ab
            }
          },
          metadata: ab
        }, MM, TM), (0, pb.h)(bb, null, TU, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlphaFromAlbedoTexture" in bb,
            get: bb => bb.useAlphaFromAlbedoTexture,
            set: (bb, ab) => {
              bb.useAlphaFromAlbedoTexture = ab
            }
          },
          metadata: ab
        }, EM, YM), (0, pb.h)(bb, null, EU, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceAlphaTest" in bb,
            get: bb => bb.forceAlphaTest,
            set: (bb, ab) => {
              bb.forceAlphaTest = ab
            }
          },
          metadata: ab
        }, BM, eM), (0, pb.h)(bb, null, YU, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: bb => "alphaCutOff" in bb,
            get: bb => bb.alphaCutOff,
            set: (bb, ab) => {
              bb.alphaCutOff = ab
            }
          },
          metadata: ab
        }, vM, LM), (0, pb.h)(bb, null, BU, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useSpecularOverAlpha" in bb,
            get: bb => bb.useSpecularOverAlpha,
            set: (bb, ab) => {
              bb.useSpecularOverAlpha = ab
            }
          },
          metadata: ab
        }, PM, XM), (0, pb.h)(bb, null, eU, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useMicroSurfaceFromReflectivityMapAlpha" in bb,
            get: bb => bb.useMicroSurfaceFromReflectivityMapAlpha,
            set: (bb, ab) => {
              bb.useMicroSurfaceFromReflectivityMapAlpha = ab
            }
          },
          metadata: ab
        }, jM, RM), (0, pb.h)(bb, null, vU, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMetallicTextureAlpha" in bb,
            get: bb => bb.useRoughnessFromMetallicTextureAlpha,
            set: (bb, ab) => {
              bb.useRoughnessFromMetallicTextureAlpha = ab
            }
          },
          metadata: ab
        }, kM, yM), (0, pb.h)(bb, null, LU, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRoughnessFromMetallicTextureGreen" in bb,
            get: bb => bb.useRoughnessFromMetallicTextureGreen,
            set: (bb, ab) => {
              bb.useRoughnessFromMetallicTextureGreen = ab
            }
          },
          metadata: ab
        }, ZM, DM), (0, pb.h)(bb, null, PU, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: bb => "useMetallnessFromMetallicTextureBlue" in bb,
            get: bb => bb.useMetallnessFromMetallicTextureBlue,
            set: (bb, ab) => {
              bb.useMetallnessFromMetallicTextureBlue = ab
            }
          },
          metadata: ab
        }, zM, xM), (0, pb.h)(bb, null, XU, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAmbientOcclusionFromMetallicTextureRed" in bb,
            get: bb => bb.useAmbientOcclusionFromMetallicTextureRed,
            set: (bb, ab) => {
              bb.useAmbientOcclusionFromMetallicTextureRed = ab
            }
          },
          metadata: ab
        }, iM, fM), (0, pb.h)(bb, null, jU, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAmbientInGrayScale" in bb,
            get: bb => bb.useAmbientInGrayScale,
            set: (bb, ab) => {
              bb.useAmbientInGrayScale = ab
            }
          },
          metadata: ab
        }, mM, pM), (0, pb.h)(bb, null, RU, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAutoMicroSurfaceFromReflectivityMap" in bb,
            get: bb => bb.useAutoMicroSurfaceFromReflectivityMap,
            set: (bb, ab) => {
              bb.useAutoMicroSurfaceFromReflectivityMap = ab
            }
          },
          metadata: ab
        }, NM, WM), (0, pb.h)(bb, null, kU, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: bb => "usePhysicalLightFalloff" in bb,
            get: bb => bb.usePhysicalLightFalloff
          },
          metadata: ab
        }, null, oU), (0, pb.h)(bb, null, yU, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: bb => "useGLTFLightFalloff" in bb,
            get: bb => bb.useGLTFLightFalloff
          },
          metadata: ab
        }, null, oU), (0, pb.h)(bb, null, ZU, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRadianceOverAlpha" in bb,
            get: bb => bb.useRadianceOverAlpha,
            set: (bb, ab) => {
              bb.useRadianceOverAlpha = ab
            }
          },
          metadata: ab
        }, HM, IM), (0, pb.h)(bb, null, DU, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "useObjectSpaceNormalMap" in bb,
            get: bb => bb.useObjectSpaceNormalMap,
            set: (bb, ab) => {
              bb.useObjectSpaceNormalMap = ab
            }
          },
          metadata: ab
        }, dM, FM), (0, pb.h)(bb, null, zU, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: bb => "useParallax" in bb,
            get: bb => bb.useParallax,
            set: (bb, ab) => {
              bb.useParallax = ab
            }
          },
          metadata: ab
        }, hM, GM), (0, pb.h)(bb, null, xU, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: bb => "useParallaxOcclusion" in bb,
            get: bb => bb.useParallaxOcclusion,
            set: (bb, ab) => {
              bb.useParallaxOcclusion = ab
            }
          },
          metadata: ab
        }, QM, qM), (0, pb.h)(bb, null, iU, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: bb => "parallaxScaleBias" in bb,
            get: bb => bb.parallaxScaleBias,
            set: (bb, ab) => {
              bb.parallaxScaleBias = ab
            }
          },
          metadata: ab
        }, uM, rM), (0, pb.h)(bb, null, fU, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: bb => "disableLighting" in bb,
            get: bb => bb.disableLighting,
            set: (bb, ab) => {
              bb.disableLighting = ab
            }
          },
          metadata: ab
        }, KM, oM), (0, pb.h)(bb, null, mU, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceIrradianceInFragment" in bb,
            get: bb => bb.forceIrradianceInFragment,
            set: (bb, ab) => {
              bb.forceIrradianceInFragment = ab
            }
          },
          metadata: ab
        }, lM, tM), (0, pb.h)(bb, null, pU, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: bb => "maxSimultaneousLights" in bb,
            get: bb => bb.maxSimultaneousLights,
            set: (bb, ab) => {
              bb.maxSimultaneousLights = ab
            }
          },
          metadata: ab
        }, wM, sM), (0, pb.h)(bb, null, NU, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertNormalMapX" in bb,
            get: bb => bb.invertNormalMapX,
            set: (bb, ab) => {
              bb.invertNormalMapX = ab
            }
          },
          metadata: ab
        }, gM, CM), (0, pb.h)(bb, null, WU, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: bb => "invertNormalMapY" in bb,
            get: bb => bb.invertNormalMapY,
            set: (bb, ab) => {
              bb.invertNormalMapY = ab
            }
          },
          metadata: ab
        }, VM, OM), (0, pb.h)(bb, null, HU, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: bb => "twoSidedLighting" in bb,
            get: bb => bb.twoSidedLighting,
            set: (bb, ab) => {
              bb.twoSidedLighting = ab
            }
          },
          metadata: ab
        }, cM, JM), (0, pb.h)(bb, null, IU, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: bb => "useAlphaFresnel" in bb,
            get: bb => bb.useAlphaFresnel,
            set: (bb, ab) => {
              bb.useAlphaFresnel = ab
            }
          },
          metadata: ab
        }, nM, SM), (0, pb.h)(bb, null, dU, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: bb => "useLinearAlphaFresnel" in bb,
            get: bb => bb.useLinearAlphaFresnel,
            set: (bb, ab) => {
              bb.useLinearAlphaFresnel = ab
            }
          },
          metadata: ab
        }, bT, aT), (0, pb.h)(bb, null, FU, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: bb => "environmentBRDFTexture" in bb,
            get: bb => bb.environmentBRDFTexture,
            set: (bb, ab) => {
              bb.environmentBRDFTexture = ab
            }
          },
          metadata: ab
        }, UT, AT), (0, pb.h)(bb, null, hU, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: bb => "forceNormalForward" in bb,
            get: bb => bb.forceNormalForward,
            set: (bb, ab) => {
              bb.forceNormalForward = ab
            }
          },
          metadata: ab
        }, MT, TT), (0, pb.h)(bb, null, GU, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: bb => "enableSpecularAntiAliasing" in bb,
            get: bb => bb.enableSpecularAntiAliasing,
            set: (bb, ab) => {
              bb.enableSpecularAntiAliasing = ab
            }
          },
          metadata: ab
        }, ET, YT), (0, pb.h)(bb, null, QU, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: bb => "useHorizonOcclusion" in bb,
            get: bb => bb.useHorizonOcclusion,
            set: (bb, ab) => {
              bb.useHorizonOcclusion = ab
            }
          },
          metadata: ab
        }, BT, eT), (0, pb.h)(bb, null, qU, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: bb => "useRadianceOcclusion" in bb,
            get: bb => bb.useRadianceOcclusion,
            set: (bb, ab) => {
              bb.useRadianceOcclusion = ab
            }
          },
          metadata: ab
        }, vT, LT), (0, pb.h)(bb, null, uU, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: bb => "unlit" in bb,
            get: bb => bb.unlit,
            set: (bb, ab) => {
              bb.unlit = ab
            }
          },
          metadata: ab
        }, PT, XT), (0, pb.h)(bb, null, rU, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: bb => "applyDecalMapAfterDetailMap" in bb,
            get: bb => bb.applyDecalMapAfterDetailMap,
            set: (bb, ab) => {
              bb.applyDecalMapAfterDetailMap = ab
            }
          },
          metadata: ab
        }, jT, RT), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb.PBRMATERIAL_OPAQUE = ia.PBRMATERIAL_OPAQUE, bb.PBRMATERIAL_ALPHATEST = ia.PBRMATERIAL_ALPHATEST, bb.PBRMATERIAL_ALPHABLEND = ia.PBRMATERIAL_ALPHABLEND, bb.PBRMATERIAL_ALPHATESTANDBLEND = ia.PBRMATERIAL_ALPHATESTANDBLEND, bb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = ia.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, bb
    })();
    const qM = "KHR_materials_diffuse_transmission";

    function uM(bb, ab) {
      const Ub = ab.subSurface;
      let Ab = null;
      return Ub.translucencyIntensityTexture ? Ab = Ub.translucencyIntensityTexture : Ub.thicknessTexture && Ub.useMaskFromThicknessTexture && (Ab = Ub.thicknessTexture), Ab && !Ub.useGltfStyleTextures ? (Wb.e.Warn(`${bb}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${ab.name}`, 1), null) : Ab
    }
    class rM {
      constructor(bb) {
        this.name = qM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ab, Ub) {
        const Ab = [];
        if (Ub instanceof QM && this._isExtensionEnabled(Ub)) {
          const ab = uM(bb, Ub);
          return ab && Ab.push(ab), Ub.subSurface.translucencyColorTexture && Ab.push(Ub.subSurface.translucencyColorTexture), Ab
        }
        return Ab
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const ab = bb.subSurface;
        return !!ab.isTranslucencyEnabled && (!bb.unlit && !ab.useAlbedoToTintTranslucency && ab.useGltfStyleTextures && 1 === ab.volumeIndexOfRefraction && 0 === ab.minimumThickness && 0 === ab.maximumThickness)
      }
      postExportMaterialAsync(bb, ab, Ub) {
        return new Promise((Ab => {
          if (Ub instanceof QM && this._isExtensionEnabled(Ub)) {
            this._wasUsed = !0;
            const Ab = Ub.subSurface,
              Mb = uM(bb, Ub),
              Tb = 0 == Ab.translucencyIntensity ? void 0 : Ab.translucencyIntensity,
              Eb = this._exporter._materialExporter.getTextureInfo(Mb) ?? void 0,
              Yb = !Ab.translucencyColor || Ab.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Ab.translucencyColor.qUb(),
              Bb = this._exporter._materialExporter.getTextureInfo(Ab.translucencyColorTexture) ?? void 0,
              eb = {
                diffuseTransmissionFactor: Tb,
                diffuseTransmissionTexture: Eb,
                diffuseTransmissionColorFactor: Yb,
                diffuseTransmissionColorTexture: Bb
              };
            (Eb || Bb) && this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions = ab.extensions || {}, ab.extensions[qM] = eb
          }
          Ab(ab)
        }))
      }
    }
    let KM = !1;

    function oM() {
      KM || (KM = !0, GA.RegisterExtension(qM, (bb => new rM(bb))))
    }
    oM();
    const lM = "KHR_materials_dispersion";
    class tM {
      constructor() {
        this.name = lM, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const ab = bb.subSurface;
        return !(!ab.isRefractionEnabled && !ab.isDispersionEnabled)
      }
      postExportMaterialAsync(bb, ab, Ub) {
        return new Promise((bb => {
          if (Ub instanceof QM && this._isExtensionEnabled(Ub)) {
            this._wasUsed = !0;
            const bb = {
              dispersion: Ub.subSurface.dispersion
            };
            ab.extensions = ab.extensions || {}, ab.extensions[lM] = bb
          }
          bb(ab)
        }))
      }
    }
    let wM = !1;

    function sM() {
      wM || (wM = !0, GA.RegisterExtension(lM, (() => new tM)))
    }
    sM();
    const gM = "KHR_materials_emissive_strength";
    class CM {
      constructor() {
        this.name = gM, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(bb, ab, Ub) {
        return await new Promise((bb => {
          if (!(Ub instanceof QM)) return bb(ab);
          const Ab = Ub.emissiveColor.scale(Ub.emissiveIntensity),
            Mb = Math.max(...Ab.qUb());
          if (Mb > 1) {
            ab.emissiveFactor = Ab.scale(1 / Mb).qUb(), this._wasUsed = !0;
            const bb = {
              emissiveStrength: Mb
            };
            ab.extensions || (ab.extensions = {}), ab.extensions[gM] = bb
          } else ab.emissiveFactor = Ab.qUb();
          return bb(ab)
        }))
      }
    }
    let VM = !1;

    function OM() {
      VM || (VM = !0, GA.RegisterExtension(gM, (() => new CM)))
    }
    OM();
    const cM = "KHR_materials_ior";
    class JM {
      constructor() {
        this.name = cM, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(bb) {
        return !bb.unlit && (bb instanceof na ? 1.5 != bb.specularIor : bb instanceof QM && (void 0 != bb.indexOfRefraction && 1.5 != bb.indexOfRefraction))
      }
      postExportMaterialAsync(bb, ab, Ub) {
        return new Promise((bb => {
          if (Ub instanceof QM && this._isExtensionEnabled(Ub)) {
            this._wasUsed = !0;
            const bb = {
              ior: Ub.indexOfRefraction
            };
            ab.extensions = ab.extensions || {}, ab.extensions[cM] = bb
          } else if (Ub instanceof na && this._isExtensionEnabled(Ub)) {
            this._wasUsed = !0;
            const bb = {
              ior: Ub.specularIor
            };
            ab.extensions = ab.extensions || {}, ab.extensions[cM] = bb
          }
          bb(ab)
        }))
      }
    }
    let nM = !1;

    function SM() {
      nM || (nM = !0, GA.RegisterExtension(cM, (() => new JM)))
    }
    SM();
    const bT = "KHR_materials_iridescence";
    class aT {
      constructor(bb) {
        this.name = bT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ab, Ub) {
        const Ab = [];
        if (Ub instanceof ia) {
          if (Ub.iridescence.isEnabled) return Ub.iridescence.texture && Ab.push(Ub.iridescence.texture), Ub.iridescence.thicknessTexture && Ub.iridescence.thicknessTexture !== Ub.iridescence.texture && Ab.push(Ub.iridescence.thicknessTexture), Ab
        } else if (Ub instanceof na && Ub.thinFilmWeight > 0) return Ub.thinFilmWeightTexture && Ab.push(Ub.thinFilmWeightTexture), Ub.thinFilmThicknessTexture && Ub.thinFilmThicknessTexture !== Ub.thinFilmWeightTexture && Ab.push(Ub.thinFilmThicknessTexture), Ab;
        return []
      }
      postExportMaterialAsync(bb, ab, Ub) {
        return new Promise((bb => {
          if (Ub instanceof ia) {
            if (!Ub.iridescence.isEnabled) return void bb(ab);
            this._wasUsed = !0, ab.extensions = ab.extensions || {};
            const Ab = this._exporter._materialExporter.getTextureInfo(Ub.iridescence.texture),
              Mb = this._exporter._materialExporter.getTextureInfo(Ub.iridescence.thicknessTexture),
              Tb = {
                iridescenceFactor: Ub.iridescence.intensity,
                iridescenceIor: Ub.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: Ub.iridescence.minimumThickness,
                iridescenceThicknessMaximum: Ub.iridescence.maximumThickness,
                iridescenceTexture: Ab ?? void 0,
                iridescenceThicknessTexture: Mb ?? void 0
              };
            null === Tb.iridescenceTexture && null === Tb.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions[bT] = Tb
          } else if (Ub instanceof na) {
            if (Ub.thinFilmWeight <= 0) return void bb(ab);
            this._wasUsed = !0, ab.extensions = ab.extensions || {};
            const Ab = this._exporter._materialExporter.getTextureInfo(Ub.thinFilmWeightTexture),
              Mb = this._exporter._materialExporter.getTextureInfo(Ub.thinFilmThicknessTexture),
              Tb = {
                iridescenceFactor: Ub.thinFilmWeight,
                iridescenceIor: Ub.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * Ub.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * Ub.thinFilmThickness,
                iridescenceTexture: Ab ?? void 0,
                iridescenceThicknessTexture: Mb ?? void 0
              };
            null === Tb.iridescenceTexture && null === Tb.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions[bT] = Tb
          }
          bb(ab)
        }))
      }
    }
    let UT = !1;

    function AT() {
      UT || (UT = !0, GA.RegisterExtension(bT, (bb => new aT(bb))))
    }
    AT();
    const MT = "KHR_materials_sheen";
    class TT {
      constructor(bb) {
        this.name = MT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ab, Ub) {
        return Ub instanceof QM && Ub.sheen.isEnabled && Ub.sheen.texture ? [Ub.sheen.texture] : []
      }
      async postExportMaterialAsync(bb, ab, Ub) {
        return await new Promise((bb => {
          if (Ub instanceof QM) {
            if (!Ub.sheen.isEnabled) return void bb(ab);
            this._wasUsed = !0, null == ab.extensions && (ab.extensions = {});
            const Ab = {
              sheenColorFactor: Ub.sheen.color.qUb(),
              sheenRoughnessFactor: Ub.sheen.roughness ?? 0
            };
            null === Ab.sheenColorTexture && null === Ab.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Ub), Ub.sheen.texture && (Ab.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(Ub.sheen.texture) ?? void 0), Ub.sheen.textureRoughness && !Ub.sheen.useRoughnessFromMainTexture ? Ab.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Ub.sheen.textureRoughness) ?? void 0 : Ub.sheen.texture && Ub.sheen.useRoughnessFromMainTexture && (Ab.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Ub.sheen.texture) ?? void 0), ab.extensions[MT] = Ab
          }
          bb(ab)
        }))
      }
    }
    let ET = !1;

    function YT() {
      ET || (ET = !0, GA.RegisterExtension(MT, (bb => new TT(bb))))
    }
    YT();
    const BT = "KHR_materials_fuzz";

    function eT(bb, ab) {
      const Ub = new Ib.e(ab.name, ab.oN());
      return Ub._texture = bb, Ub.coordinatesIndex = ab.coordinatesIndex, ab instanceof Ib.e && (Ub.uOffset = ab.uOffset, Ub.vOffset = ab.vOffset, Ub.uScale = ab.uScale, Ub.vScale = ab.vScale, Ub.wAng = ab.wAng), Ub.wrapU = ab.wrapU, Ub.wrapV = ab.wrapV, Ub
    }
    class vT {
      constructor(bb) {
        this.name = BT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = bb
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
      async postExportMaterialAdditionalTexturesAsync(bb, ab, Ub) {
        if (Ub instanceof na) {
          const bb = [];
          if (Ub.fuzzWeight > 0) {
            Ub.fuzzWeightTexture && bb.push(Ub.fuzzWeightTexture);
            let ab = !1;
            if (Ub.fuzzRoughnessTexture && (Ub._useFuzzRoughnessFromTextureAlpha ? bb.push(Ub.fuzzRoughnessTexture) : ab = !0), Ub.fuzzColorTexture && !ab && bb.push(Ub.fuzzColorTexture), ab) {
              const ab = function(bb) {
                const ab = bb.fuzzColorTexture,
                  Ub = ab && ab.getInternalTexture() ? ab.getInternalTexture().uniqueId : "NoFuzzColor",
                  Ab = bb.fuzzRoughnessTexture;
                return `FuzzColor_${Ub}_FuzzRoughness_${Ab&&Ab.getInternalTexture()?Ab.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(Ub);
              if (!this._cachedInternalTexturesMap[ab]) {
                const bb = await async function(bb) {
                  const ab = bb.oN(),
                    Ub = bb.fuzzColorTexture,
                    Ab = bb.fuzzRoughnessTexture;
                  return Ub || Ab ? (await EU("FuzzTexture", eU(Ub ? YU(Ub, 0) : BU(1), Ub ? YU(Ub, 1) : BU(1), Ub ? YU(Ub, 2) : BU(1), Ab ? YU(Ab, bb._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : BU(1)), ab)).getInternalTexture() : null
                }(Ub);
                bb && (this._cachedInternalTexturesMap[ab] = bb)
              }
              this._cachedInternalTexturesMap[ab] && (Ub.fuzzColorTexture && (this._mergedTexturesMap[Ub.fuzzColorTexture.uniqueId] = eT(this._cachedInternalTexturesMap[ab], Ub.fuzzColorTexture), bb.push(this._mergedTexturesMap[Ub.fuzzColorTexture.uniqueId])), Ub.fuzzRoughnessTexture && (this._mergedTexturesMap[Ub.fuzzRoughnessTexture.uniqueId] = eT(this._cachedInternalTexturesMap[ab], Ub.fuzzRoughnessTexture), bb.push(this._mergedTexturesMap[Ub.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return bb
        }
        return []
      }
      async postExportMaterialAsync(bb, ab, Ub) {
        return await new Promise((bb => {
          if (Ub instanceof na) {
            if (0 == Ub.fuzzWeight) return void bb(ab);
            this._wasUsed = !0, null == ab.extensions && (ab.extensions = {});
            const Ab = {
              fuzzFactor: Ub.fuzzWeight,
              fuzzColorFactor: Ub.fuzzColor.qUb(),
              fuzzRoughnessFactor: Ub.fuzzRoughness
            };
            let Mb, Tb;
            Ub.fuzzWeightTexture && (Ab.fuzzTexture = this._exporter._materialExporter.getTextureInfo(Ub.fuzzWeightTexture) ?? void 0), Ub.fuzzColorTexture && (Mb = this._mergedTexturesMap[Ub.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[Ub.fuzzColorTexture.uniqueId] : Ub.fuzzColorTexture, Ab.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Mb) ?? void 0), Ub.fuzzRoughnessTexture && (Tb = this._mergedTexturesMap[Ub.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Ub.fuzzRoughnessTexture.uniqueId] : Ub.fuzzRoughnessTexture, Ab.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Tb) ?? void 0), null === Ab.fuzzColorTexture && null === Ab.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions[BT] = Ab
          }
          bb(ab)
        }))
      }
    }
    let LT = !1;

    function PT() {
      LT || (LT = !0, GA.RegisterExtension(BT, (bb => new vT(bb))))
    }
    PT();
    const XT = "KHR_materials_specular";
    class jT {
      constructor(bb) {
        this.name = XT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ab, Ub) {
        const Ab = [];
        return Ub instanceof QM && this._isExtensionEnabled(Ub) ? (Ub.metallicReflectanceTexture && Ab.push(Ub.metallicReflectanceTexture), Ub.reflectanceTexture && Ab.push(Ub.reflectanceTexture), Ab) : Ab
      }
      _isExtensionEnabled(bb) {
        return !bb.unlit && (void 0 != bb.metallicF0Factor && 1 != bb.metallicF0Factor || void 0 != bb.metallicReflectanceColor && !bb.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(bb))
      }
      _hasTexturesExtension(bb) {
        return null != bb.metallicReflectanceTexture || null != bb.reflectanceTexture
      }
      postExportMaterialAsync(bb, ab, Ub) {
        return new Promise((bb => {
          var Ab;
          if (Ub instanceof QM && this._isExtensionEnabled(Ub)) {
            this._wasUsed = !0, ab.extensions = ab.extensions || {};
            const bb = this._exporter._materialExporter.getTextureInfo(Ub.metallicReflectanceTexture) ?? void 0,
              Ab = this._exporter._materialExporter.getTextureInfo(Ub.reflectanceTexture) ?? void 0,
              Mb = {
                specularFactor: 1 == Ub.metallicF0Factor ? void 0 : Ub.metallicF0Factor,
                specularTexture: bb,
                specularColorFactor: Ub.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : Ub.metallicReflectanceColor.qUb(),
                specularColorTexture: Ab
              };
            this._hasTexturesExtension(Ub) && this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions[XT] = Mb
          } else if (Ub instanceof na) {
            ab.extensions = ab.extensions || {};
            const Mb = this._exporter._materialExporter.getTextureInfo(Ub.specularWeightTexture) ?? void 0,
              Tb = this._exporter._materialExporter.getTextureInfo(Ub.specularColorTexture) ?? void 0,
              Eb = 1 == Ub.specularWeight ? void 0 : Ub.specularWeight,
              Yb = Ub.specularColor.equalsFloats(1, 1, 1) ? void 0 : Ub.specularColor.qUb();
            if (!Tb && !Mb && void 0 === Eb && void 0 === Yb) return bb(ab);
            this._wasUsed = !0;
            const Bb = {
                specularEdgeColorEnabled: !0
              },
              eb = {
                specularFactor: Eb,
                specularTexture: Mb,
                specularColorFactor: Yb,
                specularColorTexture: Tb,
                extensions: {}
              };
            eb.extensions.EXT_materials_specular_edge_color = Bb, (Ab = this._exporter._glTF).extensionsUsed || (Ab.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Mb || Tb) && this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions[XT] = eb
          }
          bb(ab)
        }))
      }
    }
    let RT = !1;

    function kT() {
      RT || (RT = !0, GA.RegisterExtension(XT, (bb => new jT(bb))))
    }
    kT();
    const yT = "KHR_materials_transmission";
    class ZT {
      constructor(bb) {
        this.name = yT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ab, Ub) {
        const Ab = [];
        if (Ub instanceof QM) {
          if (this._isExtensionEnabled(Ub)) return Ub.subSurface.refractionIntensityTexture && Ub.subSurface.useGltfStyleTextures && Ab.push(Ub.subSurface.refractionIntensityTexture), Ab
        } else Ub instanceof na && (Ub.transmissionWeight > 0 && Ub.transmissionWeightTexture && (Ab.push(Ub.transmissionWeightTexture), Ub.transmissionColorTexture && Ab.push(Ub.transmissionColorTexture)), Ub.subsurfaceWeight > 0 && Ub.subsurfaceWeightTexture && Ab.push(Ub.subsurfaceWeightTexture));
        return Ab
      }
      _isExtensionEnabled(bb) {
        if (bb instanceof na && !bb.unlit) return bb.transmissionWeight > 0 || bb.subsurfaceWeight > 0;
        if (bb instanceof QM && !bb.unlit) {
          const ab = bb.subSurface;
          return ab.isRefractionEnabled && void 0 != ab.refractionIntensity && 0 != ab.refractionIntensity || null != ab.refractionIntensityTexture && ab.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(bb, ab, Ub) {
        if (!this._isExtensionEnabled(Ub)) return ab;
        if (Ub instanceof QM) {
          this._wasUsed = !0;
          const Ab = Ub.subSurface,
            Mb = {
              transmissionFactor: 0 === Ab.refractionIntensity ? void 0 : Ab.refractionIntensity
            };
          if (Ab.refractionIntensityTexture)
            if (Ab.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(Ub);
              const bb = this._exporter._materialExporter.getTextureInfo(Ab.refractionIntensityTexture);
              bb && (Mb.transmissionTexture = bb)
            } else Wb.e.Warn(`${bb}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          ab.extensions || (ab.extensions = {}), ab.extensions[yT] = Mb
        } else if (Ub instanceof na) {
          this._wasUsed = !0;
          const bb = {
            transmissionFactor: (1 - Ub.transmissionWeight) * Ub.subsurfaceWeight + Ub.transmissionWeight
          };
          if (Ub.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Ub);
            const ab = this._exporter._materialExporter.getTextureInfo(Ub.transmissionWeightTexture);
            ab && (bb.transmissionTexture = ab)
          } else if (Ub.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Ub);
            const ab = this._exporter._materialExporter.getTextureInfo(Ub.subsurfaceWeightTexture);
            ab && (bb.transmissionTexture = ab)
          }
          if (0 == Ub.transmissionDepth && (!Ub.transmissionColor.equals(gb.c.White()) || Ub.transmissionColorTexture) && ab.pbrMetallicRoughness && (ab.pbrMetallicRoughness.baseColorFactor || (ab.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), ab.pbrMetallicRoughness.baseColorFactor[0] *= Ub.transmissionColor.r, ab.pbrMetallicRoughness.baseColorFactor[1] *= Ub.transmissionColor.g, ab.pbrMetallicRoughness.baseColorFactor[2] *= Ub.transmissionColor.b, Ub.transmissionColorTexture && !ab.pbrMetallicRoughness.baseColorTexture)) {
            const bb = this._exporter._materialExporter.getTextureInfo(Ub.transmissionColorTexture);
            bb && (ab.pbrMetallicRoughness.baseColorTexture = bb, this._exporter._materialNeedsUVsSet.add(Ub))
          }
          ab.extensions || (ab.extensions = {}), ab.extensions[yT] = bb
        }
        return ab
      }
    }
    let DT = !1;

    function zT() {
      DT || (DT = !0, GA.RegisterExtension(yT, (bb => new ZT(bb))))
    }
    zT();
    var xT = Ub(39367);
    const iT = "KHR_materials_unlit";
    class fT {
      constructor() {
        this.name = iT, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(bb, ab, Ub) {
        return new Promise((bb => {
          let Ab = !1;
          Ub instanceof QM ? Ab = Ub.unlit : Ub instanceof xT.g && (Ab = Ub.disableLighting), Ab && (this._wasUsed = !0, null == ab.extensions && (ab.extensions = {}), ab.extensions[iT] = {}), bb(ab)
        }))
      }
    }
    let mT = !1;

    function pT() {
      mT || (mT = !0, GA.RegisterExtension(iT, (() => new fT)))
    }
    pT();
    const NT = "KHR_materials_volume";
    class WT {
      constructor(bb) {
        this.name = NT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ab, Ub) {
        const Ab = [];
        if (Ub instanceof QM) {
          if (this._isExtensionEnabled(Ub)) return Ub.subSurface.thicknessTexture && Ab.push(Ub.subSurface.thicknessTexture), Ab
        } else Ub instanceof na && (Ub.transmissionWeight > 0 || Ub.subsurfaceWeight > 0) && Ub.geometryThicknessTexture && Ab.push(Ub.geometryThicknessTexture);
        return Ab
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const ab = bb.subSurface;
        return !(!ab.isRefractionEnabled && !ab.isTranslucencyEnabled) && (void 0 != ab.maximumThickness && 0 != ab.maximumThickness || void 0 != ab.tintColorAtDistance && ab.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != ab.tintColor && ab.tintColor != gb.c.White() || this._hasTexturesExtension(bb))
      }
      _hasTexturesExtension(bb) {
        return null != bb.subSurface.thicknessTexture
      }
      postExportMaterialAsync(bb, ab, Ub) {
        return new Promise((bb => {
          if (Ub instanceof QM && this._isExtensionEnabled(Ub)) {
            this._wasUsed = !0;
            const bb = Ub.subSurface,
              Ab = {
                thicknessFactor: 0 == bb.maximumThickness ? void 0 : bb.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(bb.thicknessTexture) ?? void 0,
                attenuationDistance: bb.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : bb.tintColorAtDistance,
                attenuationColor: bb.tintColor.equalsFloats(1, 1, 1) ? void 0 : bb.tintColor.qUb()
              };
            this._hasTexturesExtension(Ub) && this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions = ab.extensions || {}, ab.extensions[NT] = Ab
          } else if (Ub instanceof na) {
            const bb = Ub.transmissionWeight > 0 && !Ub.geometryThinWalled,
              Ab = Ub.subsurfaceWeight > 0 && !Ub.geometryThinWalled;
            if (bb || Ab) {
              this._wasUsed = !0;
              const Mb = Ub.geometryThickness,
                Tb = this._exporter._materialExporter.getTextureInfo(Ub.geometryThicknessTexture) ?? void 0;
              let Eb;
              Tb && this._exporter._materialNeedsUVsSet.add(Ub);
              const Yb = gb.c.White().qUb();
              if (bb && Ub.transmissionDepth > 0) {
                const bb = 1 / Ub.transmissionDepth;
                let ab = new rb.m(-Math.log(Ub.transmissionColor.r) * bb, -Math.log(Ub.transmissionColor.g) * bb, -Math.log(Ub.transmissionColor.b) * bb);
                const Ab = new rb.m(Ub.transmissionScatter.r * bb, Ub.transmissionScatter.g * bb, Ub.transmissionScatter.b * bb),
                  Mb = ab.subtract(Ab),
                  Tb = Math.min(Mb.x, Mb.y, Mb.z);
                Tb < 0 && (Mb.x = Mb.x - Tb, Mb.y = Mb.y - Tb, Mb.z = Mb.z - Tb), ab = Mb.add(Ab);
                Eb = 1 / Math.max(ab.x, ab.y, ab.z), Yb[0] = Math.exp(-ab.x * Eb), Yb[1] = Math.exp(-ab.y * Eb), Yb[2] = Math.exp(-ab.z * Eb)
              } else Eb = Number.MAX_VALUE, Yb[0] = 1, Yb[1] = 1, Yb[2] = 1;
              let Bb = 1;
              const eb = gb.c.White().qUb();
              if (Ab) {
                const bb = Ub.subsurfaceRadius,
                  ab = Ub.subsurfaceRadiusScale,
                  Ab = new rb.m(ab.r, ab.g, ab.b).multiplyByFloats(bb, bb, bb),
                  Mb = new rb.m(1 / Math.max(Ab.x, 1e-6), 1 / Math.max(Ab.y, 1e-6), 1 / Math.max(Ab.z, 1e-6));
                Bb = 1 / Math.max(Mb.x, Mb.y, Mb.z), eb[0] = Math.exp(-Mb.x * Bb), eb[1] = Math.exp(-Mb.y * Bb), eb[2] = Math.exp(-Mb.z * Bb)
              }
              const vb = (1 - Ub.transmissionWeight) * Ub.subsurfaceWeight,
                Lb = vb + Ub.transmissionWeight,
                Pb = 1 / Math.max(Lb, 1e-6),
                Xb = Ub.transmissionWeight * Pb,
                jb = vb * Pb,
                Rb = Yb.map(((bb, ab) => bb * Xb + eb[ab] * jb)),
                kb = {
                  thicknessFactor: Mb,
                  thicknessTexture: Tb,
                  attenuationDistance: Eb * Xb + Bb * jb,
                  attenuationColor: Rb
                };
              ab.extensions = ab.extensions || {}, ab.extensions[NT] = kb
            }
          }
          bb(ab)
        }))
      }
    }
    let HT = !1;

    function IT() {
      HT || (HT = !0, GA.RegisterExtension(NT, (bb => new WT(bb))))
    }
    IT();
    const dT = "KHR_materials_volume_scatter";
    class FT {
      constructor(bb) {
        this.name = dT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ab, Ub) {
        const Ab = [];
        return Ub instanceof na && (Ub.transmissionWeight > 0 && Ub.transmissionScatterTexture && Ab.push(Ub.transmissionScatterTexture), Ub.subsurfaceWeight > 0 && Ub.subsurfaceColorTexture && Ab.push(Ub.subsurfaceColorTexture)), Ab
      }
      _isExtensionEnabled(bb) {
        if (bb.unlit) return !1;
        const ab = bb.transmissionWeight > 0 && !bb.geometryThinWalled && bb.transmissionDepth > 0 && !bb.transmissionScatter.equals(gb.c.Black()),
          Ub = bb.subsurfaceWeight > 0 && !bb.geometryThinWalled;
        return !(!ab && !Ub)
      }
      postExportMaterialAsync(bb, ab, Ub) {
        return new Promise((bb => {
          if (Ub instanceof na && this._isExtensionEnabled(Ub)) {
            this._wasUsed = !0;
            let bb = rb.m.Zero(),
              Ab = 0;
            if (Ub.transmissionWeight > 0) {
              bb = function(bb) {
                const ab = new rb.m(Math.sqrt(1 - bb.x), Math.sqrt(1 - bb.y), Math.sqrt(1 - bb.z)),
                  Ub = new rb.m(1, 1, 1),
                  Ab = Ub.subtract(ab),
                  Mb = Ub.subtract(new rb.m(.139, .139, .139).multiplyInPlace(ab)),
                  Tb = Ub.add(new rb.m(1.17, 1.17, 1.17).multiplyInPlace(ab));
                return Ab.multiplyInPlace(Mb).divideInPlace(Tb)
              }(new rb.m(Ub.transmissionScatter.r, Ub.transmissionScatter.g, Ub.transmissionScatter.b)), Ab = Ub.transmissionScatterAnisotropy
            }
            const Mb = rb.m.Zero();
            let Tb = 0;
            Ub.subsurfaceWeight > 0 && (Mb.set(Ub.subsurfaceColor.r, Ub.subsurfaceColor.g, Ub.subsurfaceColor.b), Tb = Ub.subsurfaceScatterAnisotropy);
            const Eb = (1 - Ub.transmissionWeight) * Ub.subsurfaceWeight,
              Yb = Eb + Ub.transmissionWeight,
              Bb = 1 / Math.max(Yb, 1e-6),
              eb = Ub.transmissionWeight * Bb,
              vb = Eb * Bb,
              Lb = {
                multiscatterColorFactor: bb.multiplyByFloats(eb, eb, eb).addInPlace(Mb.multiplyByFloats(vb, vb, vb)).qUb(),
                scatterAnisotropy: Ab * eb + Tb * vb
              };
            if (Ub.subsurfaceWeight > 0 && Ub.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(Ub);
              const bb = this._exporter._materialExporter.getTextureInfo(Ub.subsurfaceColorTexture);
              bb && (Lb.multiscatterColorTexture = bb)
            } else if (Ub.transmissionWeight > 0 && Ub.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(Ub);
              const bb = this._exporter._materialExporter.getTextureInfo(Ub.transmissionScatterTexture);
              bb && (Lb.multiscatterColorTexture = bb)
            }
            ab.extensions = ab.extensions || {}, ab.extensions[dT] = Lb
          }
          bb(ab)
        }))
      }
    }
    let hT = !1;

    function GT() {
      hT || (hT = !0, GA.RegisterExtension(dT, (bb => new FT(bb)), 101))
    }
    GT();
    const QT = "KHR_materials_diffuse_roughness";
    class qT {
      constructor(bb) {
        this.name = QT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(bb, ab, Ub) {
        const Ab = [];
        if (Ub instanceof ia) {
          if (Ub._baseDiffuseRoughness) return Ub._baseDiffuseRoughnessTexture && Ab.push(Ub._baseDiffuseRoughnessTexture), Ab
        } else if (Ub instanceof na && Ub.baseDiffuseRoughness) return Ub.baseDiffuseRoughnessTexture && Ab.push(Ub.baseDiffuseRoughnessTexture), Ab;
        return []
      }
      postExportMaterialAsync(bb, ab, Ub) {
        return new Promise((bb => {
          let Ab = null,
            Mb = null;
          if (Ub instanceof ia ? (Ab = Ub._baseDiffuseRoughness, Mb = Ub._baseDiffuseRoughnessTexture) : Ub instanceof na && (Ab = Ub.baseDiffuseRoughness, Mb = Ub.baseDiffuseRoughnessTexture), !Ab) return void bb(ab);
          this._wasUsed = !0, ab.extensions = ab.extensions || {};
          const Tb = {
            diffuseRoughnessFactor: Ab,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Mb) ?? void 0
          };
          null !== Tb.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(Ub), ab.extensions[QT] = Tb, bb(ab)
        }))
      }
    }
    let uT = !1;

    function rT() {
      uT || (uT = !0, GA.RegisterExtension(QT, (bb => new qT(bb))))
    }
    rT();
    const KT = "KHR_materials_openpbr";
    class oT {
      constructor() {
        this.name = KT, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(bb, ab, Ub) {
        return new Promise((bb => {
          Ub instanceof na && (this._wasUsed = !0, ab.extensions = ab.extensions || {}, ab.extensions[KT] = {}), bb(ab)
        }))
      }
    }
    let lT = !1;

    function tT() {
      lT || (lT = !0, GA.RegisterExtension(KT, (() => new oT)))
    }
    tT();
    const wT = "KHR_texture_transform";
    class sT {
      constructor() {
        this.name = wT, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(bb, ab, Ub) {
        if (Ub.oN() || ma.h.Warn(`${bb}: "scene" is not defined for Babylon texture ${Ub.name}!`), (0 !== Ub.uAng || 0 !== Ub.vAng) && (ma.h.Warn(`${bb}: Texture ${Ub.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== Ub.uRotationCenter || 0 !== Ub.vRotationCenter)) return;
        const Ab = {};
        let Mb = !1;
        if (0 === Ub.uOffset && 0 === Ub.vOffset || (Ab.offset = [Ub.uOffset, Ub.vOffset], Mb = !0), 1 === Ub.uScale && 1 === Ub.vScale || (Ab.scale = [Ub.uScale, Ub.vScale], Mb = !0), 0 !== Ub.wAng) {
          if (0 !== Ub.uRotationCenter || 0 !== Ub.vRotationCenter) {
            if (Ub.homogeneousRotationInUVTransform && Ub.uScale !== Ub.vScale) return void ma.h.Warn(`${bb}: Texture ${Ub.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${wT}.`);
            ma.h.Warn(`${bb}: Texture ${Ub.name} with non-origin rotation center will be exported using an adjusted offset with ${wT}.`), Ab.offset = function(bb) {
              const {
                uOffset: ab,
                vOffset: Ub,
                uRotationCenter: Ab,
                vRotationCenter: Mb,
                uScale: Tb,
                vScale: Eb,
                wAng: Yb
              } = bb, Bb = Math.cos(Yb), eb = Math.sin(Yb), vb = Ab * Tb, Lb = Mb * Eb;
              return [ab + (vb * (1 - Bb) + Lb * eb), Ub + (Lb * (1 - Bb) - vb * eb)]
            }(Ub)
          }
          Ab.rotation = -Ub.wAng, Mb = !0
        }
        0 !== Ub.coordinatesIndex && (Ab.texCoord = Ub.coordinatesIndex, Mb = !0), Mb && (this._wasUsed = !0, ab.extensions || (ab.extensions = {}), ab.extensions[wT] = Ab)
      }
    }
    let gT = !1;

    function CT() {
      gT || (gT = !0, GA.RegisterExtension(wT, (() => new sT)))
    }
    CT();
    var VT = Ub(39146);
    const OT = "KHR_texture_basisu";
    class cT {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = OT, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      postExportTexture(bb, ab) {
        const Ub = this._exporter._textures[ab.index],
          Ab = Ub.source;
        if (void 0 === Ab) return;
        const Mb = this._exporter._images[Ab];
        "image/ktx2" === (Mb.mimeType || (0, VT.h)(Mb.uri)) && (Ub.source = void 0, Ub.extensions || (Ub.extensions = {}), Ub.extensions[OT] = {
          source: Ab
        }, this._wasUsed = !0)
      }
    }
    let JT = !1;

    function nT() {
      JT || (JT = !0, GA.RegisterExtension(OT, (bb => new cT(bb))))
    }
    nT();
    const ST = "EXT_texture_webp";
    class bE {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = ST, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      postExportTexture(bb, ab) {
        const Ub = this._exporter._textures[ab.index],
          Ab = Ub.source;
        if (void 0 === Ab) return;
        const Mb = this._exporter._images[Ab];
        "image/webp" === (Mb.mimeType || (0, VT.h)(Mb.uri)) && (Ub.source = void 0, Ub.extensions || (Ub.extensions = {}), Ub.extensions[ST] = {
          source: Ab
        }, this._wasUsed = !0)
      }
    }
    let aE = !1;

    function UE() {
      aE || (aE = !0, GA.RegisterExtension(ST, (bb => new bE(bb))))
    }
    UE();
    const AE = "EXT_texture_avif";
    class ME {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(bb) {
        this.name = AE, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = bb
      }
      dispose() {}
      postExportTexture(bb, ab) {
        const Ub = this._exporter._textures[ab.index],
          Ab = Ub.source;
        if (void 0 === Ab) return;
        const Mb = this._exporter._images[Ab];
        "image/avif" === (Mb.mimeType || (0, VT.h)(Mb.uri)) && (Ub.source = void 0, Ub.extensions || (Ub.extensions = {}), Ub.extensions[AE] = {
          source: Ab
        }, this._wasUsed = !0)
      }
    }
    let TE = !1;

    function EE() {
      TE || (TE = !0, GA.RegisterExtension(AE, (bb => new ME(bb))))
    }
    EE();
    class YE {
      static CreateSTL(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Mb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Tb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Eb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Yb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Bb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const eb = function(bb, ab, Ub) {
            const Mb = [3 * bb[Ub], 3 * bb[Ub + 1], 3 * bb[Ub + 2]],
              Tb = [new Ab.Pj(ab[Mb[0]], ab[Mb[0] + 2], ab[Mb[0] + 1]), new Ab.Pj(ab[Mb[1]], ab[Mb[1] + 2], ab[Mb[1] + 1]), new Ab.Pj(ab[Mb[2]], ab[Mb[2] + 2], ab[Mb[2] + 1])],
              Eb = Tb[0].subtract(Tb[1]),
              Yb = Tb[2].subtract(Tb[1]);
            return {
              v: Tb,
              n: Ab.Pj.Cross(Yb, Eb).normalize()
            }
          },
          Lb = function(bb, ab, Ub, Ab) {
            return ab = Pb(bb, ab, Ub.x, Ab), ab = Pb(bb, ab, Ub.y, Ab), Pb(bb, ab, Ub.z, Ab)
          },
          Pb = function(bb, ab, Ub, Ab) {
            return bb.setFloat32(ab, Ub, Ab), ab + 4
          },
          jb = function(bb) {
            if (Yb) {
              let ab = bb;
              bb instanceof Xb.e && (ab = bb.dAb);
              const Ub = ab.getVerticesData(vb.g.PositionKind, !0, !0);
              if (!Ub) return [];
              const Mb = Ab.Pj.Zero();
              let Tb;
              for (Tb = 0; Tb < Ub.length; Tb += 3) Ab.Pj.TransformCoordinatesFromFloatsToRef(Ub[Tb], Ub[Tb + 1], Ub[Tb + 2], bb.computeWorldMatrix(!0), Mb).toArray(Ub, Tb);
              return Ub
            }
            return bb.getVerticesData(vb.g.PositionKind) || []
          };
        Yb && (Eb = !0);
        let Rb = "",
          kb = 0,
          yb = 0;
        if (Mb) {
          for (let Ub = 0; Ub < bb.length; Ub++) {
            const ab = bb[Ub].uUb();
            kb += ab ? ab.length / 3 : 0
          }
          const ab = new ArrayBuffer(84 + 50 * kb);
          Rb = new DataView(ab), yb += 80, Rb.setUint32(yb, kb, Tb), yb += 4
        } else Bb || (Rb = "solid stlmesh\r\n");
        for (let Ab = 0; Ab < bb.length; Ab++) {
          const ab = bb[Ab];
          !Mb && Bb && (Rb += "solid " + ab.name + "\r\n"), !Eb && ab instanceof eA.b && ab.bakeCurrentTransformIntoVertices();
          const Ub = jb(ab),
            Yb = ab.uUb() || [];
          for (let bb = 0; bb < Yb.length; bb += 3) {
            const ab = eb(Yb, Ub, bb);
            Mb ? (yb = Lb(Rb, yb, ab.n, Tb), yb = Lb(Rb, yb, ab.v[0], Tb), yb = Lb(Rb, yb, ab.v[1], Tb), yb = Lb(Rb, yb, ab.v[2], Tb), yb += 2) : (Rb += "\tfacet normal " + ab.n.x + " " + ab.n.y + " " + ab.n.z + "\r\n", Rb += "\t\touter loop\r\n", Rb += "\t\t\tvertex " + ab.v[0].x + " " + ab.v[0].y + " " + ab.v[0].z + "\r\n", Rb += "\t\t\tvertex " + ab.v[1].x + " " + ab.v[1].y + " " + ab.v[1].z + "\r\n", Rb += "\t\t\tvertex " + ab.v[2].x + " " + ab.v[2].y + " " + ab.v[2].z + "\r\n", Rb += "\t\tendloop\r\n", Rb += "\tendfacet\r\n")
          }!Mb && Bb && (Rb += "endsolid " + name + "\r\n")
        }
        if (Mb || Bb || (Rb += "endsolid stlmesh"), ab) {
          const bb = document.createElement("a"),
            ab = new Blob([Rb], {
              type: "application/octet-stream"
            });
          bb.href = window.URL.createObjectURL(ab), bb.download = Ub + ".stl", bb.click()
        }
        return Rb
      }
    }

    function BE(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Mb = [];
      for (let Tb = 0; Tb < bb.length / Ub; Tb++) {
        const Eb = bb[Tb * Ub] * (Ab ? -1 : 1),
          Yb = bb[Tb * Ub + 1],
          Bb = bb[Tb * Ub + 2];
        Mb.push(`(${Eb.toPrecision(ab.precision)}, ${Yb.toPrecision(ab.precision)}, ${Bb.toPrecision(ab.precision)})`)
      }
      return Mb.join(", ")
    }

    function eE(bb, ab) {
      const Ub = [];
      for (let Ab = 0; Ab < bb.length / 2; Ab++) {
        const Mb = bb[2 * Ab],
          Tb = bb[2 * Ab + 1];
        Ub.push(`(${Mb.toPrecision(ab.precision)}, ${(1-Tb).toPrecision(ab.precision)})`)
      }
      return Ub.join(", ")
    }

    function vE(bb, ab, Ub, Ab) {
      const Mb = bb.getVerticesData(vb.g.PositionKind),
        Tb = bb.getVerticesData(vb.g.NormalKind);
      if (Mb && Tb) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${Ub}"\n\t\tint[] faceVertexCounts = [${function(bb){const ab=bb.uUb()?.length?bb.getTotalIndices():bb.getTotalVertices();return Array(ab/3).fill(3).join(", ")}(bb)}]\n\t\tint[] faceVertexIndices = [${function(bb){const ab=bb.uUb(),Ub=ab?.length??bb.getTotalVertices(),Ab=[];if(null!==ab)for(let Mb=0;Mb<Ub;Mb++)Ab.push(ab[Mb]);else for(let Mb=0;Mb<Ub;Mb++)Ab.push(Mb);return Ab.join(", ")}(bb)}]\n\t\tnormal3f[] normals = [${BE(Tb,ab,void 0,Ab)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${BE(Mb,ab,void 0,Ab)}]\n        ${function(bb,ab){let Ub="";for(let Mb=0;Mb<4;Mb++){const Ab=Mb>0?Mb:"",Tb=bb.getVerticesData(vb.g.UVKind+(Ab?Ab+1:""));Tb&&(Ub+=`\n\t\ttexCoord2f[] primvars:st${Ab} = [${eE(Tb,ab)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Ab=bb.getVerticesData(vb.g.ColorKind);return Ab&&(Ub+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        BE(Ab, ab, Ab.length / bb.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),Ub}(bb,ab)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function LE(bb, ab, Ub, Ab) {
      return `\n        def "Geometry"\n        {\n        ${vE(bb,ab,Ub,Ab)}\n        }\n        `
    }

    function PE(bb) {
      let ab = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return ab += bb, fflate.strToU8(ab)
    }

    function XE(bb) {
      const ab = bb.m;
      return `( ${jE(ab,0)}, ${jE(ab,4)}, ${jE(ab,8)}, ${jE(ab,12)} )`
    }

    function jE(bb, ab) {
      return `(${bb[ab+0]}, ${bb[ab+1]}, ${bb[ab+2]}, ${bb[ab+3]})`
    }

    function RE(bb, ab) {
      const Ub = "Object_" + bb.uniqueId,
        Ab = XE(ab);
      return `def Xform "${Ub}" (\n\tprepend references = @./geometries/Geometry_${bb.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Ab}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${bb.material.uniqueId}>\n}\n\n`
    }

    function kE(bb) {
      switch (bb) {
        case fb.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case fb.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case fb.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function yE(bb) {
      return `(${bb.x}, ${bb.y})`
    }

    function ZE(bb) {
      return `(${bb.r}, ${bb.g}, ${bb.b})`
    }

    function DE(bb) {
      return "image/jpeg" === bb || "image/png" === bb
    }

    function zE(bb, ab, Ub, Mb, Tb, Eb) {
      const Yb = bb.getInternalTexture().uniqueId + "_" + bb.invertY,
        eb = bb.mimeType || (0, Bb.d)(bb.getInternalTexture()?.url ?? ""),
        vb = DE(eb) ? eb : "image/png",
        Lb = "image/jpeg" === vb ? "jpg" : "png";
      Tb[Yb] = {
        texture: bb,
        mimeType: vb,
        ext: Lb
      };
      const Pb = bb.coordinatesIndex > 0 ? "st" + bb.coordinatesIndex : "st",
        Xb = new Ab.Vector2(bb.uScale, bb.vScale),
        jb = new Ab.Vector2(bb.uOffset, bb.vOffset),
        Rb = bb.wAng,
        kb = Math.sin(Rb),
        yb = Math.cos(Rb);
      return jb.y = 1 - jb.y - Xb.y, jb.x += kb * Xb.x, jb.y += (1 - yb) * Xb.y, `\n    def Shader "PrimvarReader_${Ub}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${Pb}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${Ub}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${ab.uniqueId}/PrimvarReader_${Ub}.outputs:result>\n        float inputs:rotation = ${(Rb*(180/Math.PI)).toFixed(Eb.precision)}\n        float2 inputs:scale = ${yE(Xb)}\n        float2 inputs:translation = ${yE(jb)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${bb.uniqueId}_${Ub}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${Yb}.${Lb}@\n        float2 inputs:st.connect = </Root/Materials/Material_${ab.uniqueId}/Transform2d_${Ub}.outputs:result>\n        ${Mb?"float4 inputs:scale = "+function(bb){return`(${bb.r}, ${bb.g}, ${bb.b}, 1.0)`}(Mb):""}\n        token inputs:sourceColorSpace = "${bb.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${kE(bb.wrapU)}"\n        token inputs:wrapT = "${kE(bb.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${ab.needAlphaBlending()||ab.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function xE(bb, ab, Ub) {
      const Ab = "\t\t\t",
        Mb = [],
        Tb = [],
        {
          diffuseMap: Eb,
          diffuse: Yb,
          alphaCutOff: Bb,
          emissiveMap: eb,
          emissive: vb,
          normalMap: Lb,
          roughnessMap: Pb,
          roughnessChannel: Xb,
          roughness: jb,
          metalnessMap: Rb,
          metalnessChannel: yb,
          metalness: Zb,
          aoMap: Db,
          aoMapChannel: zb,
          aoMapIntensity: xb,
          alphaMap: ib,
          ior: fb,
          clearCoatEnabled: mb,
          clearCoat: pb,
          clearCoatMap: Nb,
          clearCoatRoughness: Wb,
          clearCoatRoughnessMap: Hb
        } = function(bb) {
          const ab = {
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
          return bb instanceof TA.StandardMaterial ? {
            ...ab,
            diffuseMap: bb.diffuseTexture,
            diffuse: bb.diffuseColor,
            alphaCutOff: bb.alphaCutOff,
            emissiveMap: bb.emissiveTexture,
            emissive: bb.emissiveColor,
            roughness: 1,
            alphaMap: bb.opacityTexture
          } : bb instanceof ia ? {
            ...ab,
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
          } : ab
        }(bb);
      return null !== Eb ? (Mb.push(`${Ab}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Eb.uniqueId}_diffuse.outputs:rgb>`), bb.needAlphaBlending() ? Mb.push(`${Ab}float inputs:opacity.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Eb.uniqueId}_diffuse.outputs:a>`) : bb.needAlphaTesting() && (Mb.push(`${Ab}float inputs:opacity.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Eb.uniqueId}_diffuse.outputs:a>`), Mb.push(`${Ab}float inputs:opacityThreshold = ${Bb}`)), Tb.push(zE(Eb, bb, "diffuse", Yb, ab, Ub))) : Mb.push(`${Ab}color3f inputs:diffuseColor = ${ZE(Yb||kb.Color3.White())}`), null !== eb ? (Mb.push(`${Ab}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${eb.uniqueId}_emissive.outputs:rgb>`), Tb.push(zE(eb, bb, "emissive", vb, ab, Ub))) : vb && vb.toLuminance() > 0 && Mb.push(`${Ab}color3f inputs:emissiveColor = ${ZE(vb)}`), null !== Lb && (Mb.push(`${Ab}normal3f inputs:normal.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Lb.uniqueId}_normal.outputs:rgb>`), Tb.push(zE(Lb, bb, "normal", null, ab, Ub))), null !== Db && (Mb.push(`${Ab}float inputs:occlusion.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Db.uniqueId}_occlusion.outputs:${zb}>`), Tb.push(zE(Db, bb, "occlusion", new kb.Color3(xb, xb, xb), ab, Ub))), null !== Pb ? (Mb.push(`${Ab}float inputs:roughness.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Pb.uniqueId}_roughness.outputs:${Xb}>`), Tb.push(zE(Pb, bb, "roughness", new kb.Color3(jb, jb, jb), ab, Ub))) : Mb.push(`${Ab}float inputs:roughness = ${jb}`), null !== Rb ? (Mb.push(`${Ab}float inputs:metallic.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Rb.uniqueId}_metallic.outputs:${yb}>`), Tb.push(zE(Rb, bb, "metallic", new kb.Color3(Zb, Zb, Zb), ab, Ub))) : Mb.push(`${Ab}float inputs:metallic = ${Zb}`), null !== ib ? (Mb.push(`${Ab}float inputs:opacity.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${ib.uniqueId}_opacity.outputs:r>`), Mb.push(`${Ab}float inputs:opacityThreshold = 0.0001`), Tb.push(zE(ib, bb, "opacity", null, ab, Ub))) : Mb.push(`${Ab}float inputs:opacity = ${bb.alpha}`), mb && (null !== Nb ? (Mb.push(`${Ab}float inputs:clearcoat.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Nb.uniqueId}_clearcoat.outputs:r>`), Tb.push(zE(Nb, bb, "clearcoat", new kb.Color3(pb, pb, pb), ab, Ub))) : Mb.push(`${Ab}float inputs:clearcoat = ${pb}`), null !== Hb ? (Mb.push(`${Ab}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${bb.uniqueId}/Texture_${Hb.uniqueId}_clearcoatRoughness.outputs:g>`), Tb.push(zE(Hb, bb, "clearcoatRoughness", new kb.Color3(Wb, Wb, Wb), ab, Ub))) : Mb.push(`${Ab}float inputs:clearcoatRoughness = ${Wb}`)), Mb.push(`${Ab}float inputs:ior = ${fb}`), `\n\tdef Material "Material_${bb.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Mb.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${bb.uniqueId}/PreviewSurface.outputs:surface>\n\n${Tb.join("\n")}\n\n\t}\n`
    }

    function iE(bb) {
      bb.computeWorldMatrix(!0);
      const ab = bb.getWorldMatrix().clone(),
        Ub = bb.oN().useRightHandedSystem;
      let Ab = bb.material?._getEffectiveOrientation(bb) ?? bb.sideOrientation,
        Eb = !Ub,
        Yb = bb.parent;
      for (; Yb;) {
        if (QU(Yb, Ub) && null === Yb.parent) {
          Ub || (ab.multiplyToRef(Yb.getWorldMatrix().invert(), ab), Ab = Ab === Tb.d.ClockWiseSideOrientation ? Tb.d.CounterClockWiseSideOrientation : Tb.d.ClockWiseSideOrientation), Eb = !1;
          break
        }
        Yb = Yb.parent
      }
      return ab.determinant() < 0 && Mb.Tools.Warn(`Mesh ${bb.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: ab,
        windingOrder: Ab === Tb.d.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: Eb
      }
    }
    async function fE(bb, ab, Ub) {
      const Tb = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...ab
      };
      "undefined" === typeof fflate && await Mb.Tools.LoadScriptAsync(Tb.fflateUrl);
      const Eb = {};
      Eb[Tb.modelFileName] = null;
      let Yb = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      Yb += function(bb) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===bb.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${bb.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${bb.planeAnchoringAlignment}"`:""}\n            `
      }(Tb);
      const Bb = {};
      for (const Ab of bb.meshes) {
        if (0 === Ab.getTotalVertices()) continue;
        const bb = Ab,
          ab = bb.geometry,
          eb = bb.material;
        if (!eb || !ab || Ub && !Ub(bb)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(eb.getClassName())) {
          const Ub = "geometries/Geometry_" + ab.uniqueId + ".usda",
            {
              matrix: Ab,
              windingOrder: Mb,
              convertToRightHanded: vb
            } = iE(bb);
          if (!(Ub in Eb)) {
            const bb = LE(ab, Tb, Mb, vb);
            Eb[Ub] = PE(bb)
          }
          eb.uniqueId in Bb || (Bb[eb.uniqueId] = eb), Yb += RE(bb, Ab)
        } else Mb.Tools.Warn("USDZExportAsync does not support this material type: " + eb.getClassName())
      }
      bb.activeCamera && Tb.exportCamera && (Yb += function(bb, ab) {
        const Ub = "Camera_" + bb.uniqueId,
          Mb = XE(Ab.Matrix.RotationY(Math.PI).multiply(bb.getWorldMatrix()));
        if (bb.mode === fb.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${Ub}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Mb}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${bb.minZ.toPrecision(ab.precision)}, ${bb.maxZ.toPrecision(ab.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(bb.orthoLeft||1)+Math.abs(bb.orthoRight||1))).toPrecision(ab.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(bb.orthoTop||1)+Math.abs(bb.orthoBottom||1))).toPrecision(ab.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Ab = bb.vj().getAspectRatio(bb),
            Tb = ab.cameraSensorWidth || 35;
          return `def Camera "${Ub}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Mb}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${bb.minZ.toPrecision(ab.precision)}, ${bb.maxZ.toPrecision(ab.precision)})\n\t\t\tfloat focalLength = ${(Tb/(2*Math.tan(.5*bb.fov))).toPrecision(ab.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(Tb*Ab).toPrecision(ab.precision)}\n\t\t\tfloat verticalAperture = ${(Tb/Ab).toPrecision(ab.precision)}            \n\t\t}\n\t\n\t`
        }
      }(bb.activeCamera, Tb)), Yb += "\n            }\n        }";
      const eb = {};
      Yb += function(bb, ab, Ub) {
        const Ab = [];
        for (const Mb in bb) {
          const Tb = bb[Mb];
          Ab.push(xE(Tb, ab, Ub))
        }
        return `\n    def "Materials"\n{\n${Ab.join("")}\n}\n\n`
      }(Bb, eb, Tb), Yb += "\n    }", Eb[Tb.modelFileName] = fflate.strToU8(Yb);
      for (const Ab in eb) {
        const {
          texture: bb,
          ext: ab,
          mimeType: Ub
        } = eb[Ab], Mb = await yU(bb);
        if (Mb && DE(Mb.mimeType) && Mb.mimeType === Ub) Eb[`textures/Texture_${Ab}.${ab}`] = new Uint8Array(Mb.data);
        else {
          const Mb = bb.getSize(),
            Tb = await (0, zb.f)(bb),
            Yb = await mb.DumpTools.DumpDataAsync(Mb.width, Mb.height, Tb, Ub, void 0, !1, !0);
          Eb[`textures/Texture_${Ab}.${ab}`] = new Uint8Array(Yb).slice()
        }
      }
      let vb = 0;
      for (const Ab in Eb) {
        const bb = Eb[Ab];
        if (!bb) continue;
        vb += 34 + Ab.length;
        const ab = 63 & vb;
        if (4 !== ab) {
          const Ub = new Uint8Array(64 - ab);
          Eb[Ab] = [bb, {
            extra: {
              12345: Ub
            }
          }]
        }
        vb = bb.length
      }
      return fflate.zipSync(Eb, {
        level: 0
      })
    }
    var mE = Ub(40202);
    class pE {
      static Export(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        if (!bb || 0 === bb.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Ab = ab;
        ab && 0 !== ab.length || (Ab = bb.animations.map((bb => bb.name)));
        let Mb = null;
        for (const eb of Ab) {
          const ab = bb.getAnimationRange(eb);
          ab && (Mb = Mb ? new mE.d("animation-range", Math.min(Mb.from, ab.from), Math.max(Mb.to, ab.to)) : ab)
        }
        if (!Mb && (bb.animations.length > 0 && (Mb = bb.getAnimationRange(bb.animations[0].name)), !Mb)) throw new Error("No animation range found in skeleton");
        const Tb = Ub || 1 / (bb.animations[0]?.framePerSecond || 30),
          Eb = this._BuildBoneHierarchy(bb, Ab);
        let Yb = 0;
        for (const eb of Eb) eb.positionKeys.length > 0 && (Yb = Math.max(Yb, eb.positionKeys.length)), eb.rotationKeys.length > 0 && (Yb = Math.max(Yb, eb.rotationKeys.length));
        0 === Yb && (Yb = Math.floor((Mb.to - Mb.from) / Tb) + 1);
        let Bb = "";
        return Bb += "HIERARCHY\n", Bb += this._ExportHierarchy(Eb, 0), Bb += "MOTION\n", Bb += `Frames: ${Yb}\n`, Bb += `Frame Time: ${Tb.toFixed(6)}\n`, Bb += this._ExportMotionData(Eb, Yb, 0, Ab), Bb
      }
      static _BuildBoneHierarchy(bb, ab) {
        const Ub = new Map,
          Ab = [];
        for (const Mb of bb.bones) {
          const bb = {
            bone: Mb,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          Ub.set(Mb, bb)
        }
        for (const Mb of bb.bones) {
          const bb = Ub.get(Mb);
          if (Mb.animations.length > 0)
            for (const Ub of Mb.animations) ab.includes(Ub.name) && ("position" === Ub.targetProperty ? (bb.hasPositionChannels = !0, bb.positionKeys.push(...Ub.getKeys())) : "rotationQuaternion" === Ub.targetProperty && (bb.hasRotationChannels = !0, bb.rotationKeys.push(...Ub.getKeys())));
          if (Mb.getParent()) {
            const ab = Ub.get(Mb.getParent());
            ab && ab.children.push(bb)
          } else Ab.push(bb)
        }
        return Ab
      }
      static _ExportHierarchy(bb, ab) {
        let Ub = "";
        const Ab = "    ".repeat(ab);
        for (const Mb of bb) {
          const bb = Mb.bone;
          if (this._IsEndSite(Mb)) {
            Ub += `${Ab}End Site\n`, Ub += `${Ab}{\n`;
            const ab = this._GetBoneOffset(bb);
            Ub += `${Ab}    OFFSET ${ab.x.toFixed(6)} ${ab.y.toFixed(6)} ${ab.z.toFixed(6)}\n`, Ub += `${Ab}}\n`
          } else {
            Ub += `${0===ab?"ROOT":`${Ab}JOINT`} ${bb.name}\n`, Ub += `${Ab}{\n`;
            const Tb = this._GetBoneOffset(bb);
            Ub += `${Ab}    OFFSET ${Tb.x.toFixed(6)} ${Tb.y.toFixed(6)} ${Tb.z.toFixed(6)}\n`;
            const Eb = [];
            Mb.hasPositionChannels && Eb.push("Xposition", "Yposition", "Zposition"), Mb.hasRotationChannels && Eb.push("Zrotation", "Xrotation", "Yrotation"), Eb.length > 0 && (Ub += `${Ab}    CHANNELS ${Eb.length} ${Eb.join(" ")}\n`), Mb.children.length > 0 && (Ub += this._ExportHierarchy(Mb.children, ab + 1)), Ub += `${Ab}}\n`
          }
        }
        return Ub
      }
      static _IsEndSite(bb) {
        return 0 === bb.children.length
      }
      static _GetBoneOffset(bb) {
        try {
          if (!bb.getParent()) return bb.getRestMatrix().getTranslation();
          return bb.getLocalMatrix().getTranslation()
        } catch (ab) {
          return Ab.Pj.Zero()
        }
      }
      static _ExportMotionData(bb, ab, Ub, Ab) {
        let Mb = "";
        for (let Tb = 0; Tb < ab; Tb++) {
          const ab = [];
          this._CollectFrameValues(bb, Tb + Ub, ab, Ab), Mb += ab.map((bb => bb.toFixed(6))).join(" ") + "\n"
        }
        return Mb
      }
      static _CollectFrameValues(bb, ab, Ub, Ab) {
        for (const Mb of bb)
          if (!this._IsEndSite(Mb)) {
            if (Mb.hasPositionChannels) {
              const bb = this._GetPositionAtFrameIndex(Mb.positionKeys, ab);
              Ub.push(bb.x, bb.y, bb.z)
            }
            if (Mb.hasRotationChannels) {
              const bb = this._GetRotationAtFrameIndex(Mb.rotationKeys, ab),
                Ab = this._QuaternionToEuler(bb);
              Ub.push(Ab.z, Ab.x, Ab.y)
            }
            Mb.children.length > 0 && this._CollectFrameValues(Mb.children, ab, Ub, Ab)
          }
      }
      static _GetPositionAtFrameIndex(bb, ab) {
        if (0 === bb.length) return Ab.Pj.Zero();
        return bb[Math.max(0, Math.min(ab, bb.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(bb, ab) {
        if (0 === bb.length) return Ab.Quaternion.Identity();
        return bb[Math.max(0, Math.min(ab, bb.length - 1))].value.clone()
      }
      static _QuaternionToEuler(bb) {
        const ab = new Ab.Matrix;
        bb.toRotationMatrix(ab);
        const Ub = ab.m;
        let Tb, Eb, Yb;
        const Bb = Math.sqrt(Ub[0] * Ub[0] + Ub[1] * Ub[1]);
        return Bb > hU.e ? (Tb = Math.atan2(Ub[6], Ub[10]), Eb = Math.atan2(-Ub[2], Bb), Yb = Math.atan2(Ub[1], Ub[0])) : (Tb = Math.atan2(-Ub[9], Ub[5]), Eb = Math.atan2(-Ub[2], Bb), Yb = 0), new Ab.Pj(Mb.Tools.ToDegrees(Tb), Mb.Tools.ToDegrees(Eb), Mb.Tools.ToDegrees(Yb))
      }
    }

    function NE(bb) {
      return "string" === typeof bb?.name
    }
    const WE = Symbol("__xml:meta$__"),
      HE = Symbol("__xml:name$__");

    function IE(bb, ab) {
      Object.prototype.hasOwnProperty.call(bb.metadata, WE) || (bb.metadata[WE] = []), bb.metadata[WE].push(ab)
    }

    function dE(bb) {
      return (ab, Ub) => {
        ab[HE] = bb
      }
    }

    function FE() {
      return (bb, ab) => IE(ab, {
        kind: "none",
        prop: String(ab.name),
        ignore: !0
      })
    }

    function hE(bb) {
      return (ab, Ub) => IE(Ub, {
        kind: "attr",
        prop: String(Ub.name),
        ...bb
      })
    }

    function GE(bb) {
      return (ab, Ub) => IE(Ub, {
        kind: "elem",
        prop: String(Ub.name),
        ...bb
      })
    }

    function QE(bb) {
      const ab = "function" === typeof bb ? bb : bb?.constructor,
        Ub = ab?.[Symbol.metadata];
      if (!Ub) return [];
      const Ab = [];
      let Mb = Ub;
      for (; Mb;) Object.prototype.hasOwnProperty.call(Mb, WE) && Ab.push(...Mb[WE]), Mb = Object.getPrototypeOf(Mb);
      return Ab
    }

    function qE(bb) {
      const ab = bb?.constructor?.[HE];
      return ab || void 0
    }

    function uE(bb) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(bb)
    }

    function rE(bb) {
      if (NE(bb)) return bb;
      const ab = (bb ?? "").trim();
      if (!ab) return {
        name: ""
      };
      const Ub = ab.indexOf(":");
      if (-1 === Ub) return {
        name: ab
      };
      if (-1 !== ab.indexOf(":", Ub + 1)) return {
        name: ab
      };
      const Ab = ab.slice(0, Ub),
        Mb = ab.slice(Ub + 1);
      return uE(Ab) && uE(Mb) ? {
        ns: Ab,
        name: Mb
      } : {
        name: ab
      }
    }

    function KE(bb, ab) {
      return ab ? `${ab}:${bb}` : bb
    }
    const oE = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      lE = Object.freeze({
        number: oE
      });

    function tE(bb) {
      const ab = bb?.eps ?? oE.eps;
      return {
        eps: ab,
        maxDecimalsCap: bb?.maxDecimalsCap ?? oE.maxDecimalsCap,
        trimTrailingZeros: bb?.trimTrailingZeros ?? oE.trimTrailingZeros,
        fixedDecimals: bb?.fixedDecimals,
        allowScientific: bb?.allowScientific ?? oE.allowScientific,
        snapNearZero: bb?.snapNearZero ?? oE.snapNearZero,
        zeroThreshold: bb?.zeroThreshold ?? ab,
        perAttributeEps: bb?.perAttributeEps
      }
    }

    function wE(bb) {
      return {
        number: tE(bb?.number)
      }
    }
    class sE {
      constructor(bb) {
        if (this.o = bb, this._o = bb.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(bb) {
        if (!Number.isFinite(bb)) throw new Error(`Cannot format non-finite number: ${bb}`);
        const ab = this._o,
          Ub = this._clampInt(ab.maxDecimalsCap ?? 15, 0, 20),
          Ab = ab.trimTrailingZeros ?? !0,
          Mb = ab.snapNearZero ?? !0,
          Tb = ab.zeroThreshold ?? ab.eps,
          Eb = 1 / ab.eps;
        let Yb, Bb = Math.round(bb * Eb) / Eb;
        if (Object.is(Bb, -0) && (Bb = 0), Mb && Math.abs(Bb) <= Tb && (Bb = 0), Yb = void 0 !== ab.fixedDecimals ? this._clampInt(ab.fixedDecimals, 0, Ub) : this._clampInt(Math.ceil(-Math.log10(ab.eps)), 0, Ub), ab.allowScientific, 0 === Yb) return String(Math.trunc(Bb));
        let eb = Bb.toFixed(Yb);
        if (Ab && void 0 === ab.fixedDecimals && (eb = eb.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(eb)) throw new Error(`Scientific notation not allowed in XML output: ${eb}`);
        return eb
      }
      _clampInt(bb, ab, Ub) {
        return Number.isFinite(bb) ? (bb = Math.trunc(bb), Math.max(ab, Math.min(Ub, bb))) : ab
      }
    }

    function gE(bb) {
      return bb instanceof Date
    }

    function CE(bb) {
      return "string" === typeof bb
    }

    function VE(bb) {
      return "string" === typeof bb || "number" === typeof bb || "boolean" === typeof bb || "bigint" === typeof bb || gE(bb)
    }

    function OE(bb) {
      return "number" === typeof bb || "boolean" === typeof bb || "bigint" === typeof bb || gE(bb)
    }
    class cE {
      constructor(bb, ab) {
        this._ns = new Map, this._prefixCount = 0, this._builder = bb, this._format = wE(ab), this._nFmt = new sE(this._format)
      }
      withNamespace() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        for (const Ab of ab) this._assignNamespace(Ab);
        return this
      }
      serialize(bb, ab) {
        if (!(ab = ab ?? qE(bb))) throw new Error("can not find name for given object");
        const Ub = rE(ab);
        Ub.ns && this._assignNamespace(Ub.ns, "xmlns"), this._gatherNamespaces(bb, new WeakSet);
        const Ab = this._builder.ele(null, Ub.name);
        for (const [Mb, Tb] of Array.from(this._ns.entries())) Ab.att("xmlns", Tb, Mb);
        this._writeObjectContent(Ab, bb, (new WeakSet).add(bb)), this._builder.end()
      }
      _writeObject(bb, ab, Ub) {
        if (Ub.has(ab)) return;
        if (Ub.add(ab), Array.isArray(ab)) {
          for (const Ab of ab) OE(Ab) || (CE(Ab) ? this._builder.text(Ab) : this._writeObject(bb, Ab, Ub));
          return
        }
        const Ab = qE(ab);
        if (!Ab) return;
        const Mb = rE(Ab),
          Tb = this._getPrefix(Mb),
          Eb = KE(Mb.name, Tb);
        bb.ele(null, Eb), this._writeObjectContent(bb, ab, Ub), this._builder.end()
      }
      _getPrefix(bb) {
        if (bb.ns) {
          const ab = this._ns.get(bb.ns.toLowerCase());
          if ("xmlns" !== ab) return ab
        }
      }
      _writeObjectContent(bb, ab, Ub) {
        const Ab = QE(ab) ?? [],
          Mb = new Map;
        for (const Eb of Ab) {
          const bb = Mb.get(Eb.prop) ?? [];
          bb.push(Eb), Mb.set(Eb.prop, bb)
        }
        const Tb = Object.keys(ab).sort(((bb, ab) => {
          const Ub = (Mb.get(bb) ?? []).some((bb => "attr" === bb.kind));
          return Ub === (Mb.get(ab) ?? []).some((bb => "attr" === bb.kind)) ? 0 : Ub ? -1 : 1
        }));
        for (const Eb of Tb) {
          const Ab = ab[Eb];
          if (null === Ab || void 0 === Ab) continue;
          const Tb = Mb.get(Eb);
          if (Tb) {
            if (Tb.some((bb => !0 === bb.ignore || "none" === bb.kind))) continue;
            for (const ab of Tb) {
              const Ub = ab.name ?? ab.prop.toLowerCase();
              if (Ub) switch (ab.kind) {
                case "attr": {
                  let Mb = null;
                  if ("number" === typeof Ab && this._nFmt && (Mb = this._nFmt.toString(Ab)), ab.formatter) {
                    Mb = new ab.formatter(this._format).toString(Ab)
                  }
                  if (Mb = Mb ?? Ab.toString(), Mb) {
                    const ab = rE(Ub),
                      Ab = this._getPrefix(ab),
                      Tb = KE(ab.name, Ab);
                    bb.att(null, Tb, Mb)
                  }
                  break
                }
              }
            }
          } else OE(Ab) || (CE(Ab) ? this._builder.text(Ab) : this._writeObject(bb, Ab, Ub))
        }
      }
      _gatherNamespaces(bb, ab) {
        if (ab.has(bb)) return;
        if (ab.add(bb), Array.isArray(bb)) {
          for (const Ub of bb) VE(Ub) || this._gatherNamespaces(Ub, ab);
          return
        }
        const Ub = qE(bb);
        Ub && this._assignNamespace(Ub);
        const Ab = QE(bb) ?? [],
          Mb = new Map;
        for (const Eb of Ab) {
          const bb = Mb.get(Eb.prop) ?? [];
          bb.push(Eb), Mb.set(Eb.prop, bb)
        }
        const Tb = [];
        for (const Eb of Object.keys(bb)) {
          const ab = bb[Eb];
          if (null === ab || void 0 === ab) continue;
          const Ub = Mb.get(Eb);
          if (Ub) {
            if (Ub.some((bb => !0 === bb.ignore || "none" === bb.kind))) continue;
            for (const bb of Ub) bb.name && this._assignNamespace(bb.name)
          }
          Tb.push(ab)
        }
        for (const Eb of Tb) VE(Eb) || this._gatherNamespaces(Eb, ab)
      }
      _assignNamespace(bb, ab) {
        const Ub = rE(bb);
        if (Ub?.ns) {
          const bb = Ub.ns.toLowerCase();
          this._ns.get(bb) || this._ns.set(bb, ab ?? this._buildNsPrefix(bb))
        } else if ("xmlns" === ab) {
          const bb = Ub.name.toLowerCase();
          this._ns.get(bb) || this._ns.set(bb, ab ?? this._buildNsPrefix(bb))
        }
      }
      _buildNsPrefix(bb) {
        let ab, Ub = !1;
        do {
          ab = "ns" + this._prefixCount++;
          for (const bb of Array.from(this._ns.values()))
            if (bb === ab) {
              Ub = !0;
              break
            }
        } while (Ub);
        return ab
      }
    }
    class JE {}
    var nE;
    JE.OpenTag = "<", JE.CloseTag = ">", JE.Slash = "/", JE.Question = "?", JE.Quote = '"', JE.Equal = "=", JE.Space = " ", JE.Semicolon = ":", JE.Dec = "<?xml", JE.Xml = "xml", JE.Xmlns = "xmlns", JE.Xsi = "xsi", JE.VersionKeyword = "version", JE.EncodingKeyword = "encoding", JE.StandaloneKeyword = "standalone",
      function(bb) {
        bb[bb.Declaration = 0] = "Declaration", bb[bb.Tag = 1] = "Tag", bb[bb.Attribute = 2] = "Attribute", bb[bb.Text = 3] = "Text"
      }(nE || (nE = {}));
    class SE {
      constructor(bb) {
        this._ctxStack = [], this._d = 0, this._w = bb
      }
      dec(bb, ab, Ub) {
        return this._w.write(JE.Dec), this._writeAttStr(JE.VersionKeyword, bb), ab && this._writeAttStr(JE.EncodingKeyword, ab), void 0 !== Ub && this._writeAttStr(JE.StandaloneKeyword, Ub ? "yes" : "no"), this._w.write(JE.Question, JE.CloseTag), this
      }
      att(bb, ab, Ub) {
        const Ab = this._peekContext();
        if (!Ab) throw new Error("att() without open element");
        if (Ab.closed) throw new Error(`att() after start tag closed for <${Ab.name}>`);
        if (this._isXmlnsDecl(bb, ab)) {
          if (ab === JE.Xmlns) Ab.defaultNs = Ub, this._registerNamespace(Ab, "", Ub), this._writeAttStr(JE.Xmlns, Ub);
          else if (bb) this._registerNamespace(Ab, ab, Ub), this._writeAttStr(`${bb}:${ab}`, Ub);
          else {
            const bb = ab.slice(6);
            this._registerNamespace(Ab, bb, Ub), this._writeAttStr(ab, Ub)
          }
          return Ab.lastToken = nE.Attribute, this
        }
        let Mb = ab;
        if (bb) {
          Mb = `${this._ensurePrefixDeclared(Ab,bb)}:${ab}`
        }
        return Ab.lastToken = nE.Attribute, this._writeAttStr(Mb, Ub), this
      }
      ele(bb, ab) {
        const Ub = this._peekContext();
        Ub && this._closeOpenTagIfNeeded(Ub);
        let Ab = ab;
        if (bb) {
          Ab = `${this._lookupPrefix(bb)??bb}:${ab}`
        }
        return this._pushContext(Ab, ++this._d), this._w.write(JE.OpenTag, Ab), this
      }
      text(bb) {
        const ab = this._peekContext();
        if (!ab) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(ab), ab.lastToken = nE.Text, this._w.write(this._escText(bb)), this
      }
      end() {
        const bb = this._popContext();
        return bb && (this._d--, bb.closed ? this._w.write(JE.OpenTag, JE.Slash, bb.name, JE.CloseTag) : this._w.write(JE.Slash, JE.CloseTag)), this
      }
      _pushContext(bb, ab) {
        const Ub = new SE.Context(bb, ab);
        return this._ctxStack.push(Ub), Ub
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
      _writeAttStr(bb, ab) {
        this._w.write(JE.Space, bb, JE.Equal, JE.Quote, this._escAttr(ab), JE.Quote)
      }
      _lookupPrefix(bb) {
        let ab = this._ctxStack.length - 1;
        if (ab >= 0)
          do {
            const Ub = this._ctxStack[ab--],
              Ab = Ub.ns2prefix?.get(bb);
            if (Ab) return Ab
          } while (ab >= 0)
      }
      _escText(bb) {
        return bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(bb) {
        return this._escText(bb).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(bb, ab) {
        if (bb) return bb === JE.Xmlns;
        const Ub = ab.length,
          Ab = JE.Xmlns.length;
        return Ub >= Ab && (ab.startsWith(JE.Xmlns) && (ab.length == Ab || ab[Ab] == JE.Semicolon))
      }
      _registerNamespace(bb, ab, Ub) {
        if (ab === JE.Xml || ab === JE.Xmlns) throw new Error(`reserved prefix '${ab}'`);
        const Ab = bb.prefix2ns.get(ab);
        if (Ab && Ab !== Ub) throw new Error(`prefix '${ab}' already bound to a different namespace`);
        bb.ns2prefix.get(Ub) || bb.ns2prefix.set(Ub, ab), bb.prefix2ns.set(ab, Ub)
      }
      _allocPrefix(bb) {
        let ab = 1;
        for (;;) {
          const Ub = "ns" + ab++;
          if (!bb.prefix2ns.has(Ub)) return Ub
        }
      }
      _ensurePrefixDeclared(bb, ab) {
        const Ub = this._lookupPrefix(ab);
        if (Ub) return Ub;
        if (bb.closed) throw new Error(`can not declare namespace after start tag closed for <${bb.name}>`);
        const Ab = this._allocPrefix(bb);
        return this._writeAttStr(`${JE.Xmlns}:${Ab}`, ab), this._registerNamespace(bb, Ab, ab), Ab
      }
      _closeOpenTagIfNeeded(bb) {
        bb.closed || (this._w.write(JE.CloseTag), bb.closed = !0)
      }
    }
    SE.Context = class {
      constructor(bb, ab) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = bb, this.depth = ab
      }
    };
    class bY {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        if (0 === ab.length) return this;
        const Ab = ab.join("");
        return this._chunks.push(Ab), this.count += Ab.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class aY {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = bb, this._opts = ab, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        if (0 === ab.length) return this;
        const Ab = ab.join("");
        if (0 === Ab.length) return this;
        this._pending += Ab, this._pendingChars += Ab.length;
        const Mb = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Mb && this.flush(), this
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
    const UY = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      AY = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var MY, TY;
    ! function(bb) {
      bb.micron = "micron", bb.millimeter = "millimeter", bb.centimeter = "centimeter", bb.inch = "inch", bb.foot = "foot", bb.meter = "meter"
    }(MY || (MY = {})),
    function(bb) {
      bb.model = "model", bb.solidsupport = "solidsupport", bb.support = "support", bb.surface = "surface", bb.other = "other"
    }(TY || (TY = {}));
    const EY = "http://schemas.openxmlformats.org/package/2006/content-types",
      YY = "http://schemas.openxmlformats.org/package/2006/relationships";
    var BY;
    ! function(bb) {
      bb.Relationships = "application/vnd.openxmlformats-package.relationships+xml", bb.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", bb.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", bb.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", bb.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", bb.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", bb.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", bb.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", bb.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", bb.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", bb.Png = "image/png", bb.Jpeg = "image/jpeg", bb.Tiff = "image/tiff", bb.Xml = "application/xml"
    }(BY || (BY = {}));
    const eY = "_rels/",
      vY = "3D/",
      LY = "3dmodel.model",
      PY = ".rels",
      XY = "[Content_Types].xml";
    class jY {
      static IsKnown(bb) {
        return jY.Known.has(bb)
      }
      static IsThreeDimModel(bb) {
        return bb === jY.ThreeDimModel
      }
    }
    jY.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", jY.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", jY.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", jY.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", jY.Known = new Set([jY.ThreeDimModel, jY.Thumbnail, jY.PrintTicket, jY.MustPreserve]);
    let RY = (() => {
        let bb, ab, Ub = [dE({
            ns: EY,
            name: "Types"
          })],
          Ab = [];
        ab = class {
          constructor() {
            this.items = []
          }
        };
        return (0, pb.o)(ab, "ThreeMfContentTypes"), (() => {
          const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, pb.h)(null, bb = {
            value: ab
          }, Ub, {
            kind: "class",
            name: ab.name,
            metadata: Mb
          }, null, Ab), ab = bb.value, Mb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mb
          }), (0, pb.k)(ab, Ab)
        })(), ab
      })(),
      kY = (() => {
        let bb, ab, Ub, Ab, Mb = [dE({
            ns: EY,
            name: "Default"
          })],
          Tb = [],
          Eb = [],
          Yb = [],
          Bb = [],
          eb = [];
        ab = class {
          constructor(bb, ab) {
            this.ext = (0, pb.k)(this, Eb, void 0), this.ct = ((0, pb.k)(this, Yb), (0, pb.k)(this, Bb, void 0)), (0, pb.k)(this, eb), this.ext = bb, this.ct = ab
          }
        };
        return (0, pb.o)(ab, "ThreeMfContentType"), (() => {
          const vb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ub = [hE({
            name: {
              ns: EY,
              name: "Extension"
            }
          })], Ab = [hE({
            name: {
              ns: EY,
              name: "ContentType"
            }
          })], (0, pb.h)(null, null, Ub, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: bb => "ext" in bb,
              get: bb => bb.ext,
              set: (bb, ab) => {
                bb.ext = ab
              }
            },
            metadata: vb
          }, Eb, Yb), (0, pb.h)(null, null, Ab, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: bb => "ct" in bb,
              get: bb => bb.ct,
              set: (bb, ab) => {
                bb.ct = ab
              }
            },
            metadata: vb
          }, Bb, eb), (0, pb.h)(null, bb = {
            value: ab
          }, Mb, {
            kind: "class",
            name: ab.name,
            metadata: vb
          }, null, Tb), ab = bb.value, vb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vb
          }), (0, pb.k)(ab, Tb)
        })(), ab
      })(),
      yY = (() => {
        let bb, ab, Ub = [dE({
            ns: YY,
            name: "Relationships"
          })],
          Ab = [];
        ab = class {
          constructor() {
            this.items = []
          }
        };
        return (0, pb.o)(ab, "ThreeMfRelationships"), (() => {
          const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, pb.h)(null, bb = {
            value: ab
          }, Ub, {
            kind: "class",
            name: ab.name,
            metadata: Mb
          }, null, Ab), ab = bb.value, Mb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mb
          }), (0, pb.k)(ab, Ab)
        })(), ab
      })(),
      ZY = (() => {
        let bb, ab, Ub, Ab, Mb, Tb = [dE({
            ns: YY,
            name: "Relationship"
          })],
          Eb = [],
          Yb = [],
          Bb = [],
          eb = [],
          vb = [],
          Lb = [],
          Pb = [];
        ab = class {
          constructor(bb, ab, Ub) {
            this.id = (0, pb.k)(this, Yb, void 0), this.type = ((0, pb.k)(this, Bb), (0, pb.k)(this, eb, void 0)), this.target = ((0, pb.k)(this, vb), (0, pb.k)(this, Lb, void 0)), (0, pb.k)(this, Pb), this.id = bb, this.type = ab, this.target = Ub
          }
        };
        return (0, pb.o)(ab, "ThreeMfRelationship"), (() => {
          const Xb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ub = [hE({
            name: "Id"
          })], Ab = [hE({
            name: "Type"
          })], Mb = [hE({
            name: "Target"
          })], (0, pb.h)(null, null, Ub, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: bb => "id" in bb,
              get: bb => bb.id,
              set: (bb, ab) => {
                bb.id = ab
              }
            },
            metadata: Xb
          }, Yb, Bb), (0, pb.h)(null, null, Ab, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: bb => "type" in bb,
              get: bb => bb.type,
              set: (bb, ab) => {
                bb.type = ab
              }
            },
            metadata: Xb
          }, eb, vb), (0, pb.h)(null, null, Mb, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: bb => "target" in bb,
              get: bb => bb.target,
              set: (bb, ab) => {
                bb.target = ab
              }
            },
            metadata: Xb
          }, Lb, Pb), (0, pb.h)(null, bb = {
            value: ab
          }, Tb, {
            kind: "class",
            name: ab.name,
            metadata: Xb
          }, null, Eb), ab = bb.value, Xb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xb
          }), (0, pb.k)(ab, Eb)
        })(), ab
      })();
    class DY {
      constructor(bb, ab, Ub) {
        this.contentTypes = bb, this.relationships = ab, this.model = Ub
      }
    }
    class zY {
      static Zero() {
        return new zY([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(bb) {
        this.values = bb
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class xY {
      constructor(bb) {
        this.o = bb, this._f = new sE(bb)
      }
      toString(bb) {
        return bb.values.map((bb => this._f.toString(bb))).join(" ")
      }
    }
    let iY = (() => {
        let bb, ab, Ub, Ab, Mb, Tb = [dE({
            ns: UY,
            name: "model"
          })],
          Eb = [],
          Yb = [],
          Bb = [],
          eb = [],
          vb = [],
          Lb = [],
          Pb = [];
        ab = class {
          constructor() {
            this.unit = (0, pb.k)(this, Yb, MY.millimeter), this.requiredextensions = ((0, pb.k)(this, Bb), (0, pb.k)(this, eb, void 0)), this.recommendedextensions = ((0, pb.k)(this, vb), (0, pb.k)(this, Lb, void 0)), this.metadata = (0, pb.k)(this, Pb)
          }
        };
        return (0, pb.o)(ab, "ThreeMfModel"), (() => {
          const Xb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ub = [hE({
            name: "unit"
          })], Ab = [hE({
            name: "requiredextensions"
          })], Mb = [hE({
            name: "recommendedextensions"
          })], (0, pb.h)(null, null, Ub, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: bb => "unit" in bb,
              get: bb => bb.unit,
              set: (bb, ab) => {
                bb.unit = ab
              }
            },
            metadata: Xb
          }, Yb, Bb), (0, pb.h)(null, null, Ab, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: bb => "requiredextensions" in bb,
              get: bb => bb.requiredextensions,
              set: (bb, ab) => {
                bb.requiredextensions = ab
              }
            },
            metadata: Xb
          }, eb, vb), (0, pb.h)(null, null, Mb, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: bb => "recommendedextensions" in bb,
              get: bb => bb.recommendedextensions,
              set: (bb, ab) => {
                bb.recommendedextensions = ab
              }
            },
            metadata: Xb
          }, Lb, Pb), (0, pb.h)(null, bb = {
            value: ab
          }, Tb, {
            kind: "class",
            name: ab.name,
            metadata: Xb
          }, null, Eb), ab = bb.value, Xb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xb
          })
        })(), ab.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, pb.k)(ab, Eb), ab
      })(),
      fY = (() => {
        let bb, ab, Ub, Ab, Mb, Tb = [dE({
            ns: UY,
            name: "meta"
          })],
          Eb = [],
          Yb = [],
          Bb = [],
          eb = [],
          vb = [],
          Lb = [],
          Pb = [];
        ab = class {
          constructor(bb, ab, Ub, Ab) {
            this.name = (0, pb.k)(this, Yb, void 0), this.preserve = ((0, pb.k)(this, Bb), (0, pb.k)(this, eb, void 0)), this.type = ((0, pb.k)(this, vb), (0, pb.k)(this, Lb, void 0)), this.value = (0, pb.k)(this, Pb), this.name = bb, this.value = ab, this.preserve = Ub, this.type = Ab
          }
        };
        return (0, pb.o)(ab, "ThreeMfMeta"), (() => {
          const Xb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ub = [hE({
            name: "name"
          })], Ab = [hE({
            name: "preserve"
          })], Mb = [hE({
            name: "type"
          })], (0, pb.h)(null, null, Ub, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, ab) => {
                bb.name = ab
              }
            },
            metadata: Xb
          }, Yb, Bb), (0, pb.h)(null, null, Ab, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: bb => "preserve" in bb,
              get: bb => bb.preserve,
              set: (bb, ab) => {
                bb.preserve = ab
              }
            },
            metadata: Xb
          }, eb, vb), (0, pb.h)(null, null, Mb, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: bb => "type" in bb,
              get: bb => bb.type,
              set: (bb, ab) => {
                bb.type = ab
              }
            },
            metadata: Xb
          }, Lb, Pb), (0, pb.h)(null, bb = {
            value: ab
          }, Tb, {
            kind: "class",
            name: ab.name,
            metadata: Xb
          }, null, Eb), ab = bb.value, Xb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xb
          }), (0, pb.k)(ab, Eb)
        })(), ab
      })(),
      mY = (() => {
        let bb, ab, Ub = [dE({
            ns: UY,
            name: "metadatagroup"
          })],
          Ab = [];
        ab = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, pb.o)(ab, "ThreeMfMetadataGroup"), (() => {
          const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, pb.h)(null, bb = {
            value: ab
          }, Ub, {
            kind: "class",
            name: ab.name,
            metadata: Mb
          }, null, Ab), ab = bb.value, Mb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mb
          }), (0, pb.k)(ab, Ab)
        })(), ab
      })(),
      pY = (() => {
        let bb, ab, Ub = [dE({
            ns: UY,
            name: "resources"
          })],
          Ab = [];
        ab = class {
          constructor() {
            this.object = []
          }
        };
        return (0, pb.o)(ab, "ThreeMfResources"), (() => {
          const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, pb.h)(null, bb = {
            value: ab
          }, Ub, {
            kind: "class",
            name: ab.name,
            metadata: Mb
          }, null, Ab), ab = bb.value, Mb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mb
          }), (0, pb.k)(ab, Ab)
        })(), ab
      })(),
      NY = (() => {
        let bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb = [dE({
            ns: UY,
            name: "object"
          })],
          vb = [],
          Lb = [],
          Pb = [],
          Xb = [],
          jb = [],
          Rb = [],
          kb = [],
          yb = [],
          Zb = [],
          Db = [],
          zb = [],
          xb = [],
          ib = [],
          fb = [],
          mb = [];
        ab = class {
          constructor(bb) {
            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TY.model;
            this.id = (0, pb.k)(this, Lb, void 0), this.type = ((0, pb.k)(this, Pb), (0, pb.k)(this, Xb, void 0)), this.thumbnail = ((0, pb.k)(this, jb), (0, pb.k)(this, Rb, void 0)), this.partnumber = ((0, pb.k)(this, kb), (0, pb.k)(this, yb, void 0)), this.name = ((0, pb.k)(this, Zb), (0, pb.k)(this, Db, void 0)), this.pid = ((0, pb.k)(this, zb), (0, pb.k)(this, xb, void 0)), this.pindex = ((0, pb.k)(this, ib), (0, pb.k)(this, fb, void 0)), this.metadatagroup = (0, pb.k)(this, mb), this.id = bb, this.type = ab
          }
        };
        return (0, pb.o)(ab, "ThreeMfObject"), (() => {
          const Nb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ub = [hE({
            name: "id"
          })], Ab = [hE({
            name: "type"
          })], Mb = [hE({
            name: "thumbnail"
          })], Tb = [hE({
            name: "partnumber"
          })], Eb = [hE({
            name: "name"
          })], Yb = [hE({
            name: "pid"
          })], Bb = [hE({
            name: "pindex"
          })], (0, pb.h)(null, null, Ub, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: bb => "id" in bb,
              get: bb => bb.id,
              set: (bb, ab) => {
                bb.id = ab
              }
            },
            metadata: Nb
          }, Lb, Pb), (0, pb.h)(null, null, Ab, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: bb => "type" in bb,
              get: bb => bb.type,
              set: (bb, ab) => {
                bb.type = ab
              }
            },
            metadata: Nb
          }, Xb, jb), (0, pb.h)(null, null, Mb, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: bb => "thumbnail" in bb,
              get: bb => bb.thumbnail,
              set: (bb, ab) => {
                bb.thumbnail = ab
              }
            },
            metadata: Nb
          }, Rb, kb), (0, pb.h)(null, null, Tb, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: bb => "partnumber" in bb,
              get: bb => bb.partnumber,
              set: (bb, ab) => {
                bb.partnumber = ab
              }
            },
            metadata: Nb
          }, yb, Zb), (0, pb.h)(null, null, Eb, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, ab) => {
                bb.name = ab
              }
            },
            metadata: Nb
          }, Db, zb), (0, pb.h)(null, null, Yb, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: bb => "pid" in bb,
              get: bb => bb.pid,
              set: (bb, ab) => {
                bb.pid = ab
              }
            },
            metadata: Nb
          }, xb, ib), (0, pb.h)(null, null, Bb, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: bb => "pindex" in bb,
              get: bb => bb.pindex,
              set: (bb, ab) => {
                bb.pindex = ab
              }
            },
            metadata: Nb
          }, fb, mb), (0, pb.h)(null, bb = {
            value: ab
          }, eb, {
            kind: "class",
            name: ab.name,
            metadata: Nb
          }, null, vb), ab = bb.value, Nb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nb
          }), (0, pb.k)(ab, vb)
        })(), ab
      })(),
      WY = (() => {
        let bb, ab, Ub = [dE({
            ns: UY,
            name: "mesh"
          })],
          Ab = [];
        ab = class {
          constructor(bb, ab) {
            this.vertices = bb ?? new HY, this.triangles = ab ?? new dY
          }
        };
        return (0, pb.o)(ab, "ThreeMfMesh"), (() => {
          const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, pb.h)(null, bb = {
            value: ab
          }, Ub, {
            kind: "class",
            name: ab.name,
            metadata: Mb
          }, null, Ab), ab = bb.value, Mb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mb
          }), (0, pb.k)(ab, Ab)
        })(), ab
      })(),
      HY = (() => {
        let bb, ab, Ub = [dE({
            ns: UY,
            name: "vertices"
          })],
          Ab = [];
        ab = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, pb.o)(ab, "ThreeMfVertices"), (() => {
          const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, pb.h)(null, bb = {
            value: ab
          }, Ub, {
            kind: "class",
            name: ab.name,
            metadata: Mb
          }, null, Ab), ab = bb.value, Mb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mb
          }), (0, pb.k)(ab, Ab)
        })(), ab
      })(),
      IY = (() => {
        let bb, ab, Ub, Ab, Mb, Tb = [dE({
            ns: UY,
            name: "vertex"
          })],
          Eb = [],
          Yb = [],
          Bb = [],
          eb = [],
          vb = [],
          Lb = [],
          Pb = [];
        ab = class {
          constructor() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, pb.k)(this, Yb, void 0), this.y = ((0, pb.k)(this, Bb), (0, pb.k)(this, eb, void 0)), this.z = ((0, pb.k)(this, vb), (0, pb.k)(this, Lb, void 0)), (0, pb.k)(this, Pb), this.x = bb, this.y = ab, this.z = Ub
          }
        };
        return (0, pb.o)(ab, "ThreeMfVertex"), (() => {
          const Xb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ub = [hE({
            name: "x"
          })], Ab = [hE({
            name: "y"
          })], Mb = [hE({
            name: "z"
          })], (0, pb.h)(null, null, Ub, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: bb => "x" in bb,
              get: bb => bb.x,
              set: (bb, ab) => {
                bb.x = ab
              }
            },
            metadata: Xb
          }, Yb, Bb), (0, pb.h)(null, null, Ab, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: bb => "y" in bb,
              get: bb => bb.y,
              set: (bb, ab) => {
                bb.y = ab
              }
            },
            metadata: Xb
          }, eb, vb), (0, pb.h)(null, null, Mb, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: bb => "z" in bb,
              get: bb => bb.z,
              set: (bb, ab) => {
                bb.z = ab
              }
            },
            metadata: Xb
          }, Lb, Pb), (0, pb.h)(null, bb = {
            value: ab
          }, Tb, {
            kind: "class",
            name: ab.name,
            metadata: Xb
          }, null, Eb), ab = bb.value, Xb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xb
          }), (0, pb.k)(ab, Eb)
        })(), ab
      })(),
      dY = (() => {
        let bb, ab, Ub = [dE({
            ns: UY,
            name: "triangles"
          })],
          Ab = [];
        ab = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, pb.o)(ab, "ThreeMfTriangles"), (() => {
          const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, pb.h)(null, bb = {
            value: ab
          }, Ub, {
            kind: "class",
            name: ab.name,
            metadata: Mb
          }, null, Ab), ab = bb.value, Mb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mb
          }), (0, pb.k)(ab, Ab)
        })(), ab
      })(),
      FY = (() => {
        let bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb = [dE({
            ns: UY,
            name: "triangle"
          })],
          vb = [],
          Lb = [],
          Pb = [],
          Xb = [],
          jb = [],
          Rb = [],
          kb = [],
          yb = [],
          Zb = [],
          Db = [],
          zb = [],
          xb = [],
          ib = [],
          fb = [],
          mb = [];
        ab = class {
          constructor(bb, ab, Ub) {
            this.v1 = (0, pb.k)(this, Lb, void 0), this.v2 = ((0, pb.k)(this, Pb), (0, pb.k)(this, Xb, void 0)), this.v3 = ((0, pb.k)(this, jb), (0, pb.k)(this, Rb, void 0)), this.p1 = ((0, pb.k)(this, kb), (0, pb.k)(this, yb, void 0)), this.p2 = ((0, pb.k)(this, Zb), (0, pb.k)(this, Db, void 0)), this.p3 = ((0, pb.k)(this, zb), (0, pb.k)(this, xb, void 0)), this.pid = ((0, pb.k)(this, ib), (0, pb.k)(this, fb, void 0)), (0, pb.k)(this, mb), this.v1 = bb, this.v2 = ab, this.v3 = Ub
          }
        };
        return (0, pb.o)(ab, "ThreeMfTriangle"), (() => {
          const Nb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ub = [hE({
            name: "v1"
          })], Ab = [hE({
            name: "v2"
          })], Mb = [hE({
            name: "v3"
          })], Tb = [hE({
            name: "p1"
          })], Eb = [hE({
            name: "p2"
          })], Yb = [hE({
            name: "p3"
          })], Bb = [hE({
            name: "pid"
          })], (0, pb.h)(null, null, Ub, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: bb => "v1" in bb,
              get: bb => bb.v1,
              set: (bb, ab) => {
                bb.v1 = ab
              }
            },
            metadata: Nb
          }, Lb, Pb), (0, pb.h)(null, null, Ab, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: bb => "v2" in bb,
              get: bb => bb.v2,
              set: (bb, ab) => {
                bb.v2 = ab
              }
            },
            metadata: Nb
          }, Xb, jb), (0, pb.h)(null, null, Mb, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: bb => "v3" in bb,
              get: bb => bb.v3,
              set: (bb, ab) => {
                bb.v3 = ab
              }
            },
            metadata: Nb
          }, Rb, kb), (0, pb.h)(null, null, Tb, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: bb => "p1" in bb,
              get: bb => bb.p1,
              set: (bb, ab) => {
                bb.p1 = ab
              }
            },
            metadata: Nb
          }, yb, Zb), (0, pb.h)(null, null, Eb, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: bb => "p2" in bb,
              get: bb => bb.p2,
              set: (bb, ab) => {
                bb.p2 = ab
              }
            },
            metadata: Nb
          }, Db, zb), (0, pb.h)(null, null, Yb, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: bb => "p3" in bb,
              get: bb => bb.p3,
              set: (bb, ab) => {
                bb.p3 = ab
              }
            },
            metadata: Nb
          }, xb, ib), (0, pb.h)(null, null, Bb, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: bb => "pid" in bb,
              get: bb => bb.pid,
              set: (bb, ab) => {
                bb.pid = ab
              }
            },
            metadata: Nb
          }, fb, mb), (0, pb.h)(null, bb = {
            value: ab
          }, eb, {
            kind: "class",
            name: ab.name,
            metadata: Nb
          }, null, vb), ab = bb.value, Nb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nb
          }), (0, pb.k)(ab, vb)
        })(), ab
      })(),
      hY = (() => {
        let bb, ab, Ub = [dE({
            ns: UY,
            name: "components"
          })],
          Ab = [];
        ab = class {
          constructor() {
            this.component = []
          }
        };
        return (0, pb.o)(ab, "ThreeMfComponents"), (() => {
          const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, pb.h)(null, bb = {
            value: ab
          }, Ub, {
            kind: "class",
            name: ab.name,
            metadata: Mb
          }, null, Ab), ab = bb.value, Mb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mb
          }), (0, pb.k)(ab, Ab)
        })(), ab
      })(),
      GY = (() => {
        let bb, ab, Ub, Ab, Mb = [dE({
            ns: UY,
            name: "component"
          })],
          Tb = [],
          Eb = [],
          Yb = [],
          Bb = [],
          eb = [];
        ab = class {
          constructor(bb, ab) {
            this.objectid = (0, pb.k)(this, Eb, void 0), this.transform = ((0, pb.k)(this, Yb), (0, pb.k)(this, Bb, void 0)), (0, pb.k)(this, eb), this.objectid = bb, this.transform = ab
          }
        };
        return (0, pb.o)(ab, "ThreeMfComponent"), (() => {
          const vb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ub = [hE({
            name: "objectid"
          })], Ab = [hE({
            name: "transform",
            formatter: xY
          })], (0, pb.h)(null, null, Ub, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: bb => "objectid" in bb,
              get: bb => bb.objectid,
              set: (bb, ab) => {
                bb.objectid = ab
              }
            },
            metadata: vb
          }, Eb, Yb), (0, pb.h)(null, null, Ab, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: bb => "transform" in bb,
              get: bb => bb.transform,
              set: (bb, ab) => {
                bb.transform = ab
              }
            },
            metadata: vb
          }, Bb, eb), (0, pb.h)(null, bb = {
            value: ab
          }, Mb, {
            kind: "class",
            name: ab.name,
            metadata: vb
          }, null, Tb), ab = bb.value, vb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vb
          }), (0, pb.k)(ab, Tb)
        })(), ab
      })(),
      QY = (() => {
        let bb, ab, Ub, Ab = [dE({
            ns: UY,
            name: "basematerials"
          })],
          Mb = [],
          Tb = [],
          Eb = [];
        ab = class {
          constructor(bb) {
            this.id = (0, pb.k)(this, Tb, void 0), this.base = ((0, pb.k)(this, Eb), []), this.id = bb
          }
        };
        return (0, pb.o)(ab, "ThreeMfBaseMaterials"), (() => {
          const Yb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ub = [hE({
            name: "id"
          })], (0, pb.h)(null, null, Ub, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: bb => "id" in bb,
              get: bb => bb.id,
              set: (bb, ab) => {
                bb.id = ab
              }
            },
            metadata: Yb
          }, Tb, Eb), (0, pb.h)(null, bb = {
            value: ab
          }, Ab, {
            kind: "class",
            name: ab.name,
            metadata: Yb
          }, null, Mb), ab = bb.value, Yb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yb
          }), (0, pb.k)(ab, Mb)
        })(), ab
      })(),
      qY = (() => {
        let bb, ab, Ub, Ab, Mb = [dE({
            ns: UY,
            name: "base"
          })],
          Tb = [],
          Eb = [],
          Yb = [],
          Bb = [],
          eb = [];
        ab = class {
          constructor(bb, ab) {
            this.name = (0, pb.k)(this, Eb, void 0), this.displaycolor = ((0, pb.k)(this, Yb), (0, pb.k)(this, Bb, void 0)), (0, pb.k)(this, eb), this.name = bb, this.displaycolor = ab
          }
        };
        return (0, pb.o)(ab, "ThreeMfBase"), (() => {
          const vb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ub = [hE({
            name: "name"
          })], Ab = [hE({
            name: "displaycolor"
          })], (0, pb.h)(null, null, Ub, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, ab) => {
                bb.name = ab
              }
            },
            metadata: vb
          }, Eb, Yb), (0, pb.h)(null, null, Ab, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: bb => "displaycolor" in bb,
              get: bb => bb.displaycolor,
              set: (bb, ab) => {
                bb.displaycolor = ab
              }
            },
            metadata: vb
          }, Bb, eb), (0, pb.h)(null, bb = {
            value: ab
          }, Mb, {
            kind: "class",
            name: ab.name,
            metadata: vb
          }, null, Tb), ab = bb.value, vb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vb
          }), (0, pb.k)(ab, Tb)
        })(), ab
      })(),
      uY = (() => {
        let bb, ab, Ub = [dE({
            ns: UY,
            name: "build"
          })],
          Ab = [];
        ab = class {
          constructor() {
            this.item = []
          }
        };
        return (0, pb.o)(ab, "ThreeMfBuild"), (() => {
          const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, pb.h)(null, bb = {
            value: ab
          }, Ub, {
            kind: "class",
            name: ab.name,
            metadata: Mb
          }, null, Ab), ab = bb.value, Mb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mb
          }), (0, pb.k)(ab, Ab)
        })(), ab
      })(),
      rY = (() => {
        let bb, ab, Ub, Ab, Mb, Tb = [dE({
            ns: UY,
            name: "item"
          })],
          Eb = [],
          Yb = [],
          Bb = [],
          eb = [],
          vb = [],
          Lb = [],
          Pb = [];
        ab = class {
          constructor(bb, ab, Ub) {
            this.objectid = (0, pb.k)(this, Yb, void 0), this.transform = ((0, pb.k)(this, Bb), (0, pb.k)(this, eb, void 0)), this.partnumber = ((0, pb.k)(this, vb), (0, pb.k)(this, Lb, void 0)), this.metadatagroup = (0, pb.k)(this, Pb), this.objectid = bb, this.transform = ab, this.partnumber = Ub
          }
        };
        return (0, pb.o)(ab, "ThreeMfItem"), (() => {
          const Xb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ub = [hE({
            name: "objectid"
          })], Ab = [hE({
            name: "transform",
            formatter: xY
          })], Mb = [hE({
            name: "partnumber"
          })], (0, pb.h)(null, null, Ub, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: bb => "objectid" in bb,
              get: bb => bb.objectid,
              set: (bb, ab) => {
                bb.objectid = ab
              }
            },
            metadata: Xb
          }, Yb, Bb), (0, pb.h)(null, null, Ab, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: bb => "transform" in bb,
              get: bb => bb.transform,
              set: (bb, ab) => {
                bb.transform = ab
              }
            },
            metadata: Xb
          }, eb, vb), (0, pb.h)(null, null, Mb, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: bb => "partnumber" in bb,
              get: bb => bb.partnumber,
              set: (bb, ab) => {
                bb.partnumber = ab
              }
            },
            metadata: Xb
          }, Lb, Pb), (0, pb.h)(null, bb = {
            value: ab
          }, Tb, {
            kind: "class",
            name: ab.name,
            metadata: Xb
          }, null, Eb), ab = bb.value, Xb && Object.defineProperty(ab, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xb
          }), (0, pb.k)(ab, Eb)
        })(), ab
      })();
    class KY {
      constructor(bb, ab) {
        this._object = new NY(bb, ab)
      }
      withName(bb) {
        return this._object.name = bb, this
      }
      withThumbnail(bb) {
        return this._object.thumbnail = bb, this
      }
      withProperty(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = bb, this._object.id = ab, this
      }
      build() {
        return this._object
      }
      reset(bb, ab) {
        this._object = new NY(bb, ab)
      }
    }
    class oY extends KY {
      constructor(bb) {
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TY.model), this._object.content = new hY
      }
      withComponent(bb, ab) {
        return this._object.content.component.push(new GY(bb, ab)), this
      }
    }
    class lY extends KY {
      constructor(bb) {
        super(bb, TY.model)
      }
      withPostProcessHandlers(bb, ab) {
        return this._vh = bb, this._th = ab, this
      }
      withData(bb) {
        return this._object.content = this._buildMesh(bb), this
      }
      withMaterial(bb, ab) {
        return this._object.pid = bb, this._object.pindex = ab, this
      }
      _buildMesh(bb) {
        const ab = this._buildVertices(bb.positions),
          Ub = this._buildTriangle(bb.indices);
        return new WY(ab, Ub)
      }
      _buildVertices(bb) {
        const ab = new HY;
        if (bb)
          for (let Ub = 0; Ub < bb.length;) {
            const Ab = bb[Ub++],
              Mb = bb[Ub++],
              Tb = bb[Ub++];
            let Eb = new IY(Ab, Mb, Tb);
            this._vh && (Eb = this._vh(Eb)), ab.vertex.push(Eb)
          }
        return ab
      }
      _buildTriangle(bb) {
        const ab = new dY;
        if (bb)
          for (let Ub = 0; Ub < bb.length;) {
            const Ab = bb[Ub++],
              Mb = bb[Ub++],
              Tb = bb[Ub++];
            let Eb = new FY(Ab, Mb, Tb);
            this._th && (Eb = this._th(Eb)), ab.triangle.push(Eb)
          }
        return ab
      }
    }
    class tY {
      constructor(bb) {
        this._m = new QY(bb)
      }
      withColor(bb, ab) {
        this._m.base = this._m.base ?? [];
        let Ub = this._m.base.find((ab => ab.name.toLowerCase() === bb.toLowerCase()));
        return Ub ? (Ub.displaycolor = this._rgbaToHex(ab), this) : (Ub = new qY(bb, this._rgbaToHex(ab)), this._m.base.push(Ub), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(bb) {
        const ab = bb => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(bb, 1 / 2.2)))),
          Ub = ab(bb.r).toString(16).padStart(2, "0").toUpperCase(),
          Ab = ab(bb.g).toString(16).padStart(2, "0").toUpperCase(),
          Mb = ab(bb.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof bb.a) {
          return `#${Ub}${Ab}${Mb}${Math.round(Math.min(255,Math.max(0,255*bb.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${Ub}${Ab}${Mb}`
      }
    }
    class wY {
      constructor() {
        this._model = new iY, this._objects = new Map
      }
      withMetaData(bb, ab, Ub, Ab) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new fY(bb, ab, Ub, Ab)), this
      }
      withMaterial(bb) {
        return bb instanceof tY && (bb = bb.build()), bb && (this._model.resources = this._model.resources ?? new pY, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(bb)), this
      }
      withMesh(bb) {
        return bb instanceof lY && (bb = bb.build()), this._model.resources = this._model.resources ?? new pY, this._model.resources.object.push(bb), this
      }
      withComponents(bb) {
        return bb instanceof oY && (bb = bb.build()), this._model.resources = this._model.resources ?? new pY, this._model.resources.object.push(bb), this
      }
      withBuild(bb, ab, Ub) {
        return this._model.build = this._model.build ?? new uY, this._model.build.item?.push(new rY(bb, ab, Ub)), this
      }
      withUnit(bb) {
        return this._model.unit = bb, this
      }
      reset() {
        return this._model = new iY, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    wY.KnownMetaSet = new Set(iY.KnownMeta.map((bb => bb.toLowerCase())));
    class sY {
      withContentType(bb) {
        this._cts || (this._cts = new RY);
        const ab = this._cts.items;
        return ab.some((ab => ab.ext === bb.ext && ab.ct === bb.ct)) || ab.push(bb), this
      }
      withRelationship(bb) {
        this._rs || (this._rs = new yY);
        const ab = this._rs.items;
        return ab.some((ab => ab.id === bb.id)) || ab.push(bb), this.withContentType(new kY("rels", BY.Relationships)), this
      }
      withModel(bb) {
        return bb instanceof wY && (bb = bb.build()), this._m = bb, this.withContentType(new kY("model", BY.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const bb = `${vY}${LY}`;
        if (!this._rs) {
          const ab = `/${bb}`;
          this.withRelationship(new ZY("rel0", jY.ThreeDimModel, ab))
        }
        return new DY(this._cts, this._rs, this._m)
      }
    }
    class gY {
      constructor(bb) {
        this._o = bb
      }
      get options() {
        return this._o
      }
      async serializeAsync(bb) {
        const ab = await this.ensureZipLibReadyAsync();
        if (!ab) return;
        const Ub = ab.Zip,
          Ab = ab.ZipDeflate;
        if (!Ub || !Ab) throw new Error("fflate Zip / ZipDeflate not available");
        const Mb = function(bb, ab, Ub) {
          const Mb = new Ab(ab, {
            level: 6
          });
          bb.add(Mb);
          const Tb = function(bb) {
              return {
                push: (ab, Ub) => bb.push(ab, Ub)
              }
            }(Mb),
            Eb = new aY(Tb),
            Yb = new SE(Eb).dec("1.0", "UTF-8");
          new cE(Yb).serialize(Ub), Eb.finish()
        };
        for (var Tb = arguments.length, Eb = new Array(Tb > 1 ? Tb - 1 : 0), Yb = 1; Yb < Tb; Yb++) Eb[Yb - 1] = arguments[Yb];
        const Bb = this.toDocument(...Eb);
        if (!Bb) return;
        const eb = new Ub(bb);
        Mb(eb, XY, Bb.contentTypes), Mb(eb, `${eY}${PY}`, Bb.relationships), Mb(eb, `${vY}${LY}`, Bb.model), eb.end()
      }
      toDocument() {
        const bb = (new wY).withUnit(this._o?.unit ?? MY.millimeter);
        if (this.options.metadata)
          for (const Mb in this.options.metadata) bb.withMetaData(Mb, this.options.metadata[Mb]);
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        return (new sY).withModel(this.toModel(bb, ...Ub)).build()
      }
    }
    class CY {
      static async SerializeToMemoryAsync(bb) {
        const ab = new Array;
        let Ub = 0;
        for (var Ab = arguments.length, Mb = new Array(Ab > 1 ? Ab - 1 : 0), Tb = 1; Tb < Ab; Tb++) Mb[Tb - 1] = arguments[Tb];
        if (await bb.serializeAsync((function(bb, Ab, Mb) {
            ab.push(Ab), Ub += Ab.length
          }), ...Mb), !Ub) return;
        const Eb = new Uint8Array(Ub);
        let Yb = 0;
        for (const Bb of ab) Eb.set(Bb, Yb), Yb += Bb.length;
        return Eb
      }
    }
    class VY {}
    VY.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class OY {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = bb, this._to = ab, this._step = Ub, this._i = bb
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
    class cY extends gY {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...cY.DefaultOptions,
          ...bb
        })
      }
      toModel(bb) {
        for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Ab = 1; Ab < ab; Ab++) Ub[Ab - 1] = arguments[Ab];
        Ub = Ub.filter((bb => bb instanceof eA.b || bb instanceof Xb.e));
        const Mb = new OY,
          Tb = bb,
          Eb = new Map,
          Yb = this.options.exportInstances ? [] : null;
        for (let Bb = 0; Bb < Ub.length; Bb++) {
          const bb = Ub[Bb];
          if (bb instanceof Xb.e) {
            Yb?.push(bb);
            continue
          }
          const ab = bb.name || `mesh${Bb}`,
            Ab = bb.getWorldMatrix(),
            eb = this._handleBabylonTo3mfMatrixTransformToRef(Ab, zY.Zero()),
            vb = bb.mD;
          if (void 0 === vb) continue;
          const Lb = 1 == vb.length;
          for (let Ub = 0; Ub < vb.length; Ub++) {
            const Ab = vb[Ub],
              Yb = this._extractSubMesh(bb, Ab);
            if (Yb) {
              const bb = Lb ? `${ab}` : `${ab}_${Ub}`,
                Bb = new lY(Mb.next()).withData(Yb).withName(bb).build();
              Tb.withMesh(Bb), Tb.withBuild(Bb.id, eb), Eb.set(Ab, Bb)
            }
          }
        }
        if (Yb && Yb.length) {
          const bb = this._groupBy(Yb, (bb => bb.dAb));
          for (const [ab, Ub] of Array.from(bb.entries()))
            if (Ub && Ub.length)
              for (let bb = 0; bb < Ub.length; bb++) {
                const Ab = Ub[bb].getWorldMatrix(),
                  Mb = ab.mD;
                for (let bb = 0; bb < Mb.length; bb++) {
                  const ab = Mb[bb],
                    Ub = Eb.get(ab);
                  Ub && Tb.withBuild(Ub.id, this._handleBabylonTo3mfMatrixTransformToRef(Ab, zY.Zero()))
                }
              }
        }
        return Tb.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const bb = globalThis;
          return bb.fflate || await Mb.Tools.LoadScriptAsync(VY.FFLATEUrl), bb.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(bb, ab) {
        const Ub = bb.uUb();
        if (!Ub) return;
        const Ab = bb.getVerticesData(cY._PositionKind);
        if (!Ab) return;
        if (0 == ab.indexStart && ab.indexCount == Ub.length) return {
          positions: Ab,
          indices: Ub
        };
        const Mb = ab.indexStart,
          Tb = new Map,
          Eb = [],
          Yb = new Uint32Array(ab.indexCount);
        for (let Bb = 0; Bb < ab.indexCount; Bb++) {
          const bb = Ub[Mb + Bb];
          let ab = Tb.get(bb);
          if (void 0 === ab) {
            ab = Tb.size, Tb.set(bb, ab);
            const Ub = 3 * bb;
            Eb.push(Ab[Ub], Ab[Ub + 1], Ab[Ub + 2])
          }
          Yb[Bb] = ab
        }
        return {
          positions: new Float32Array(Eb),
          indices: Yb
        }
      }
      _groupBy(bb, ab) {
        const Ub = new Map;
        for (const Ab of bb) {
          const bb = ab(Ab),
            Mb = Ub.get(bb);
          Mb ? Mb.push(Ab) : Ub.set(bb, [Ab])
        }
        return Ub
      }
      _handleBabylonTo3mfMatrixTransformToRef(bb, ab) {
        const Ub = bb.multiplyToRef(cY._R_BJS_TO_3MF, rb.b.Zero()).m;
        return ab.values = [Ub[0], Ub[1], Ub[2], Ub[4], Ub[5], Ub[6], Ub[8], Ub[9], Ub[10], Ub[12], Ub[13], Ub[14]], ab
      }
    }
    cY.DefaultOptions = {
      unit: MY.meter,
      exportInstances: !1
    }, cY._PositionKind = "position", cY._R_BJS_TO_3MF = rb.b.RotationX(Math.PI / 2).multiply(rb.b.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);