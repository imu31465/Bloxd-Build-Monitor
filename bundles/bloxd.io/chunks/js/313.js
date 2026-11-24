export const id = 313;
export const ids = [313];
export const modules = {
  42054: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      _ENVTextureLoader: () => Rp
    });
    var Op = cp(40143),
      op = cp(37320),
      Ip = cp(37356),
      Sp = cp(40190),
      xp = cp(40033),
      Lp = cp(40195),
      Yp = (cp(40296), cp(42060)),
      Dp = cp(38905),
      Ap = (cp(42071), cp(42102), cp(40273));
    const Pp = "image/png",
      Wp = [134, 22, 135, 150, 246, 214, 150, 54];

    function yp(pp) {
      const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
      let cp = 0;
      for (let Sp = 0; Sp < Wp.length; Sp++)
        if (ip.getUint8(cp++) !== Wp[Sp]) return Dp.e.Error("Not a babylon environment map"), null;
      let Op, op = "";
      for (; Op = ip.getUint8(cp++);) op += String.fromCharCode(Op);
      let Ip = JSON.parse(op);
      return Ip = Up(Ip), Ip.binaryDataPosition = cp, Ip.specular && (Ip.specular.lodGenerationScale = Ip.specular.lodGenerationScale || .8), Ip
    }

    function Up(pp) {
      if (pp.version > 2) throw new Error(`Unsupported babylon environment map version "${pp.version}". Latest supported version is "2".`);
      return 2 === pp.version ? pp : pp = {
        ...pp,
        version: 2,
        imageType: Pp
      }
    }

    function wp(pp, ip) {
      const cp = (ip = Up(ip)).specular;
      let Op = Math.log2(ip.width);
      if (Op = Math.round(Op) + 1, cp.mipmaps.length !== 6 * Op) throw new Error(`Unsupported specular mipmaps number "${cp.mipmaps.length}"`);
      const op = new Array(Op);
      for (let Ip = 0; Ip < Op; Ip++) {
        op[Ip] = new Array(6);
        for (let Op = 0; Op < 6; Op++) {
          const Sp = cp.mipmaps[6 * Ip + Op];
          op[Ip][Op] = new Uint8Array(pp.buffer, pp.byteOffset + ip.binaryDataPosition + Sp.position, Sp.length)
        }
      }
      return op
    }

    function vp(pp, ip) {
      ip = Up(ip);
      const cp = new Array(6),
        Op = ip.irradiance?.irradianceTexture;
      if (Op) {
        if (6 !== Op.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Op.faces.length}"`);
        for (let op = 0; op < 6; op++) {
          const Ip = Op.faces[op];
          cp[op] = new Uint8Array(pp.buffer, pp.byteOffset + ip.binaryDataPosition + Ip.position, Ip.length)
        }
      }
      return cp
    }

    function tp(pp, ip, cp) {
      const Op = (cp = Up(cp)).specular;
      if (!Op) return Promise.resolve([]);
      pp._lodGenerationScale = Op.lodGenerationScale;
      const Ip = [],
        Sp = wp(ip, cp);
      Ip.push(dp(pp, Sp, cp.imageType));
      const xp = cp.irradiance?.irradianceTexture;
      if (xp) {
        const Op = vp(ip, cp);
        let Sp = null;
        cp.irradiance?.irradianceTexture?.dominantDirection && (Sp = op.o.FromArray(cp.irradiance.irradianceTexture.dominantDirection)), Ip.push(ep(pp, Op, xp.size, cp.imageType, Sp))
      }
      return Promise.all(Ip)
    }
    async function Hp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
      return await new Promise(((Ap, Pp) => {
        if (cp) {
          const cp = ip.createTexture(null, !0, !0, null, 1, null, (pp => {
            Pp(pp)
          }), pp);
          Op?.onEffectCreatedObservable.addOnce((xp => {
            xp.executeWhenCompiled((() => {
              Op.externalTextureSamplerBinding = !0, Op.onApply = Op => {
                Op._bindTexture("textureSampler", cp), Op.setFloat2("scale", 1, ip._features.needsInvertingBitmap && pp instanceof ImageBitmap ? -1 : 1)
              }, ip.scenes.length && (ip.scenes[0].postProcessManager.directRender([Op], Yp, !0, Ip, Sp), ip.restoreDefaultFramebuffer(), cp.dispose(), URL.revokeObjectURL(op), Ap())
            }))
          }))
        } else {
          if (ip._uploadImageToTexture(Dp, pp, Ip, Sp), xp) {
            const cp = Lp[Sp];
            cp && ip._uploadImageToTexture(cp._texture, pp, Ip, 0)
          }
          Ap()
        }
      }))
    }
    async function dp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pp;
      const Op = pp.gy();
      pp.format = 5, pp.type = 0, pp.generateMipMaps = !0, pp._cachedAnisotropicFilteringLevel = null, Op.updateTextureSamplingMode(3, pp), await jp(pp, ip, !0, cp), pp.isReady = !0
    }
    async function ep(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Pp,
        op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Ip = pp.gy(),
        Sp = new xp.b(Ip, 5),
        Yp = new Lp.d(Ip, Sp);
      pp._irradianceTexture = Yp, Yp._dominantDirection = op, Sp.isCube = !0, Sp.format = 5, Sp.type = 0, Sp.generateMipMaps = !0, Sp._cachedAnisotropicFilteringLevel = null, Sp.generateMipMaps = !0, Sp.width = cp, Sp.height = cp, Ip.updateTextureSamplingMode(3, Sp), await jp(Sp, [ip], !1, Op), Ip.generateMipMapsForCubemap(Sp), Sp.isReady = !0
    }
    async function jp(pp, ip, op) {
      let Sp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Pp;
      if (!(0, Op.h)(pp.width)) throw new Error("Texture size must be a power of two");
      const Dp = (0, Ip.ILog2)(pp.width) + 1,
        Wp = pp.gy();
      let yp = !1,
        Up = !1,
        wp = null,
        vp = null,
        tp = null;
      const dp = Wp.getCaps();
      dp.textureLOD ? Wp._features.supportRenderAndCopyToLodForFloatTextures ? dp.textureHalfFloatRender && dp.textureHalfFloatLinearFiltering ? (yp = !0, pp.type = 2) : dp.textureFloatRender && dp.textureFloatLinearFiltering && (yp = !0, pp.type = 1) : yp = !1 : (yp = !1, Up = op);
      let ep = 0;
      if (yp) Wp.isWebGPU ? (ep = 1, await cp.e(347).then((() => cp(61482)))) : await cp.e(329).then((() => cp(61491))), wp = new Yp.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Wp, !1, void 0, pp.type, void 0, null, !1, void 0, ep), pp._isRGBD = !1, pp.invertY = !1, vp = Wp.createRenderTargetCubeTexture(pp.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: pp.type,
        format: 5
      });
      else if (pp._isRGBD = !0, pp.invertY = !0, Up) {
        const ip = 3;
        tp = {};
        const cp = pp._lodGenerationScale,
          Op = pp._lodGenerationOffset;
        for (let op = 0; op < ip; op++) {
          const Ip = (Dp - 1) * cp + Op,
            Sp = Op + (Ip - Op) * (1 - op / (ip - 1)),
            Yp = Math.round(Math.min(Math.max(Sp, 0), Ip)),
            Ap = new xp.b(Wp, 2);
          Ap.isCube = !0, Ap.invertY = !0, Ap.generateMipMaps = !1, Wp.updateTextureSamplingMode(2, Ap);
          const Pp = new Lp.d(null);
          switch (Pp._isCube = !0, Pp._texture = Ap, tp[Yp] = Pp, op) {
            case 0:
              pp._lodTextureLow = Pp;
              break;
            case 1:
              pp._lodTextureMid = Pp;
              break;
            case 2:
              pp._lodTextureHigh = Pp
          }
        }
      }
      const jp = [];
      for (let cp = 0; cp < ip.length; cp++)
        for (let Op = 0; Op < 6; Op++) {
          const op = ip[cp][Op],
            Ip = (0, Ap.i)(op),
            xp = new Blob([Ip], {
              type: Sp
            }),
            Lp = URL.createObjectURL(xp);
          let Yp;
          if (Wp._features.forceBitmapOverHTMLImageElement) Yp = Wp.createImageBitmap(xp, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async ip => await Hp(ip, Wp, yp, wp, Lp, Op, cp, Up, tp, vp, pp)));
          else {
            const ip = new Image;
            ip.src = Lp, Yp = new Promise(((op, Ip) => {
              ip.onload = () => {
                Hp(ip, Wp, yp, wp, Lp, Op, cp, Up, tp, vp, pp).then((() => op())).catch((pp => {
                  Ip(pp)
                }))
              }, ip.onerror = pp => {
                Ip(pp)
              }
            }))
          }
          jp.push(Yp)
        }
      if (await Promise.all(jp), ip.length < Dp) {
        let cp;
        const Op = Math.pow(2, Dp - 1 - ip.length),
          op = Op * Op * 4;
        switch (pp.type) {
          case 0:
            cp = new Uint8Array(op);
            break;
          case 2:
            cp = new Uint16Array(op);
            break;
          case 1:
            cp = new Float32Array(op)
        }
        for (let Ip = ip.length; Ip < Dp; Ip++)
          for (let ip = 0; ip < 6; ip++) Wp._uploadArrayBufferViewToTexture(vp?.texture || pp, cp, ip, Ip)
      }
      if (vp) {
        const ip = pp._irradianceTexture;
        pp._irradianceTexture = null, Wp._releaseTexture(pp), vp._swapAndDie(pp), pp._irradianceTexture = ip
      }
      wp && wp.dispose(), Up && (pp._lodTextureHigh && pp._lodTextureHigh._texture && (pp._lodTextureHigh._texture.isReady = !0), pp._lodTextureMid && pp._lodTextureMid._texture && (pp._lodTextureMid._texture.isReady = !0), pp._lodTextureLow && pp._lodTextureLow._texture && (pp._lodTextureLow._texture.isReady = !0))
    }

    function kp(pp, ip) {
      const cp = (ip = Up(ip)).irradiance;
      if (!cp) return;
      const Op = new Sp.e;
      op.o.FromArrayToRef(cp.x, 0, Op.x), op.o.FromArrayToRef(cp.y, 0, Op.y), op.o.FromArrayToRef(cp.z, 0, Op.z), op.o.FromArrayToRef(cp.xx, 0, Op.xx), op.o.FromArrayToRef(cp.yy, 0, Op.yy), op.o.FromArrayToRef(cp.zz, 0, Op.zz), op.o.FromArrayToRef(cp.yz, 0, Op.yz), op.o.FromArrayToRef(cp.zx, 0, Op.zx), op.o.FromArrayToRef(cp.xy, 0, Op.xy), pp._sphericalPolynomial = Op
    }
    var mp = cp(42109);
    class Rp {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(pp, ip, cp, Op, op) {
        if (Array.isArray(pp)) return;
        const Ip = yp(pp);
        if (Ip) {
          ip.width = Ip.width, ip.height = Ip.width;
          try {
            (0, mp.d)(), kp(ip, Ip), tp(ip, pp, Ip).then((() => {
              ip.isReady = !0, ip.onLoadedObservable.notifyObservers(ip), ip.onLoadedObservable.clear(), Op && Op()
            }), (pp => {
              op?.("Can not upload environment levels", pp)
            }))
          } catch (Sp) {
            op?.("Can not upload environment file", Sp)
          }
        } else op && op("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  42109: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp
    });
    var Op = cp(42025),
      op = cp(40195);
    let Ip = !1;

    function Sp() {
      Ip || (Ip = !0, op.d.prototype._sphericalPolynomialTargetSize = 0, op.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(op.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Op.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((pp => {
              this._texture._sphericalPolynomial = pp, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(pp) {
          this._texture && (this._texture._sphericalPolynomial = pp)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  42025: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Yp
    });
    var Op = cp(37320),
      op = cp(37356),
      Ip = cp(40190),
      Sp = cp(37324),
      xp = cp(37487);
    class Lp {
      constructor(pp, ip, cp, Op) {
        this.name = pp, this.worldAxisForNormal = ip, this.worldAxisForFileX = cp, this.worldAxisForFileY = Op
      }
    }
    class Yp {
      static _NearestPow2Floor(pp) {
        return pp <= 1 ? 1 : 1 << Math.floor(Math.log2(pp))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(pp) {
        if (!pp.isCube) return null;
        pp.Gl()?.gy().flushFramebuffer();
        const ip = pp.getSize().width,
          cp = pp._sphericalPolynomialTargetSize,
          Op = cp > 0 ? this._NearestPow2Floor(cp) : 0,
          op = !pp.noMipmap && !0 === pp._texture?.generateMipMaps,
          Ip = Op > 0 && Op < ip && op,
          Sp = Ip ? Math.max(0, Math.round(Math.log2(ip / Op))) : 0,
          xp = Ip ? Math.max(1, Math.floor(ip / Math.pow(2, Sp))) : ip,
          Lp = pp.readPixels(0, Sp, void 0, !1),
          Yp = pp.readPixels(1, Sp, void 0, !1);
        let Dp, Ap;
        pp.isRenderTarget ? (Dp = pp.readPixels(3, Sp, void 0, !1), Ap = pp.readPixels(2, Sp, void 0, !1)) : (Dp = pp.readPixels(2, Sp, void 0, !1), Ap = pp.readPixels(3, Sp, void 0, !1));
        const Pp = pp.readPixels(4, Sp, void 0, !1),
          Wp = pp.readPixels(5, Sp, void 0, !1),
          yp = pp.gammaSpace,
          Up = Op > 0 && Op < ip && !Ip;
        return new Promise((pp => {
          Promise.all([Yp, Lp, Dp, Ap, Pp, Wp]).then((cp => {
            let [op, Ip, Sp, Lp, Yp, Dp] = cp, Ap = xp;
            if (Up) {
              const pp = 4;
              op = this._DownsampleFace(op, ip, Op, pp), Ip = this._DownsampleFace(Ip, ip, Op, pp), Sp = this._DownsampleFace(Sp, ip, Op, pp), Lp = this._DownsampleFace(Lp, ip, Op, pp), Yp = this._DownsampleFace(Yp, ip, Op, pp), Dp = this._DownsampleFace(Dp, ip, Op, pp), Ap = Op
            }
            const Pp = {
              size: Ap,
              right: Ip,
              left: op,
              up: Sp,
              down: Lp,
              front: Yp,
              back: Dp,
              format: 5,
              type: op instanceof Float32Array ? 1 : 0,
              gammaSpace: yp
            };
            pp(this.ConvertCubeMapToSphericalPolynomial(Pp))
          }))
        }))
      }
      static _AreaElement(pp, ip) {
        return Math.atan2(pp * ip, Math.sqrt(pp * pp + ip * ip + 1))
      }
      static _DownsampleFace(pp, ip, cp, Op) {
        const op = pp instanceof Float32Array ? pp : Float32Array.from(pp),
          Ip = cp * cp * Op,
          Sp = new Float32Array(Ip),
          xp = ip / cp,
          Lp = 1 / (xp * xp);
        for (let Dp = 0; Dp < cp; Dp++) {
          const pp = Math.floor(Dp * xp),
            Ip = Math.floor((Dp + 1) * xp);
          for (let Yp = 0; Yp < cp; Yp++) {
            const Ap = Math.floor(Yp * xp),
              Pp = Math.floor((Yp + 1) * xp),
              Wp = (Dp * cp + Yp) * Op;
            for (let cp = 0; cp < Op; cp++) {
              let xp = 0;
              for (let Sp = pp; Sp < Ip; Sp++)
                for (let pp = Ap; pp < Pp; pp++) xp += op[(Sp * ip + pp) * Op + cp];
              Sp[Wp + cp] = xp * Lp
            }
          }
        }
        if (pp instanceof Float32Array) return Sp;
        const Yp = new(0, pp.constructor)(Ip);
        for (let Dp = 0; Dp < Ip; Dp++) Yp[Dp] = Sp[Dp] + .5 | 0;
        return Yp
      }
      static ConvertCubeMapToSphericalPolynomial(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cp = ip > 0 ? this._NearestPow2Floor(ip) : 0;
        if (cp > 0 && pp.size > cp) {
          const ip = 5 === pp.format ? 4 : 3,
            Op = ["right", "left", "up", "down", "front", "back"],
            op = {};
          for (const Ip of Op) op[Ip] = this._DownsampleFace(pp[Ip], pp.size, cp, ip);
          pp = {
            ...pp,
            ...op,
            size: cp
          }
        }
        const Op = new Ip.c;
        let Lp = 0;
        const Yp = 2 / pp.size,
          Dp = Yp,
          Ap = .5 * Yp,
          Pp = Ap - 1;
        for (let Ip = 0; Ip < 6; Ip++) {
          const ip = this._FileFaces[Ip],
            cp = pp[ip.name];
          let Wp = Pp;
          const yp = 5 === pp.format ? 4 : 3;
          for (let Ip = 0; Ip < pp.size; Ip++) {
            let Up = Pp;
            for (let Dp = 0; Dp < pp.size; Dp++) {
              const Pp = ip.worldAxisForFileX.scale(Up).add(ip.worldAxisForFileY.scale(Wp)).add(ip.worldAxisForNormal);
              Pp.normalize();
              const wp = this._AreaElement(Up - Ap, Wp - Ap) - this._AreaElement(Up - Ap, Wp + Ap) - this._AreaElement(Up + Ap, Wp - Ap) + this._AreaElement(Up + Ap, Wp + Ap);
              let vp = cp[Ip * pp.size * yp + Dp * yp + 0],
                tp = cp[Ip * pp.size * yp + Dp * yp + 1],
                Hp = cp[Ip * pp.size * yp + Dp * yp + 2];
              isNaN(vp) && (vp = 0), isNaN(tp) && (tp = 0), isNaN(Hp) && (Hp = 0), 0 === pp.type && (vp /= 255, tp /= 255, Hp /= 255), pp.gammaSpace && (vp = Math.pow((0, op.Clamp)(vp), Sp.g), tp = Math.pow((0, op.Clamp)(tp), Sp.g), Hp = Math.pow((0, op.Clamp)(Hp), Sp.g));
              const dp = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const pp = Math.max(vp, tp, Hp);
                if (pp > dp) {
                  const ip = dp / pp;
                  vp *= ip, tp *= ip, Hp *= ip
                }
              } else vp = (0, op.Clamp)(vp, 0, dp), tp = (0, op.Clamp)(tp, 0, dp), Hp = (0, op.Clamp)(Hp, 0, dp);
              const ep = new xp.d(vp, tp, Hp);
              Op.addLight(Pp, ep, wp), Lp += wp, Up += Yp
            }
            Wp += Dp
          }
        }
        const Wp = 6 * (4 * Math.PI) / 6 / Lp;
        return Op.scaleInPlace(Wp), Op.convertIncidentRadianceToIrradiance(), Op.convertIrradianceToLambertianRadiance(), Ip.e.FromHarmonics(Op)
      }
    }
    Yp._FileFaces = [new Lp("right", new Op.o(1, 0, 0), new Op.o(0, 0, -1), new Op.o(0, -1, 0)), new Lp("left", new Op.o(-1, 0, 0), new Op.o(0, 0, 1), new Op.o(0, -1, 0)), new Lp("up", new Op.o(0, 1, 0), new Op.o(1, 0, 0), new Op.o(0, 0, 1)), new Lp("down", new Op.o(0, -1, 0), new Op.o(1, 0, 0), new Op.o(0, 0, -1)), new Lp("front", new Op.o(0, 0, 1), new Op.o(1, 0, 0), new Op.o(0, -1, 0)), new Lp("back", new Op.o(0, 0, -1), new Op.o(-1, 0, 0), new Op.o(0, -1, 0))], Yp.MAX_HDRI_VALUE = 4096, Yp.PRESERVE_CLAMPED_COLORS = !1
  },
  42071: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(42060),
      op = cp(42080);
    class Ip {
      static ExpandRGBDTexture(pp) {
        const ip = pp._texture;
        if (!ip || !pp.isRGBD) return;
        const op = ip.gy(),
          Ip = op.getCaps(),
          Sp = ip.isReady;
        let xp = !1;
        Ip.textureHalfFloatRender && Ip.textureHalfFloatLinearFiltering ? (xp = !0, ip.type = 2) : Ip.textureFloatRender && Ip.textureFloatLinearFiltering && (xp = !0, ip.type = 1), xp && (ip.isReady = !1, ip._isRGBD = !1, ip.invertY = !1);
        const Lp = async () => {
          const Ip = op.isWebGPU,
            Sp = Ip ? 1 : 0;
          ip.isReady = !1, Ip ? await cp.e(347).then((() => cp(61482))) : await cp.e(329).then((() => cp(61491)));
          const xp = new Op.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, op, !1, void 0, ip.type, void 0, null, !1, void 0, Sp);
          xp.externalTextureSamplerBinding = !0;
          const Lp = op.createRenderTargetTexture(ip.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: ip.samplingMode,
            type: ip.type,
            format: 5
          });
          xp.onEffectCreatedObservable.addOnce((cp => {
            cp.executeWhenCompiled((() => {
              xp.onApply = pp => {
                pp._bindTexture("textureSampler", ip), pp.setFloat2("scale", 1, 1)
              }, pp.Gl()?.postProcessManager.directRender([xp], Lp, !0), op.restoreDefaultFramebuffer(), op._releaseTexture(ip), xp && xp.dispose(), Lp._swapAndDie(ip), ip.isReady = !0
            }))
          }))
        };
        xp && (Sp ? Lp() : pp.onLoadObservable.addOnce(Lp))
      }
      static async EncodeTextureToRGBD(pp, ip) {
        let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return ip.gy().isWebGPU ? await cp.e(348).then((() => cp(61509))) : await cp.e(330).then((() => cp(61507))), await (0, op.c)("rgbdEncode", pp, ip, Op, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);