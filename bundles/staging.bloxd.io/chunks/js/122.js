export const id = 122;
export const ids = [122];
export const modules = {
  42593: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => lW,
      g: () => wW,
      i: () => ZW,
      l: () => tW,
      m: () => xW
    });
    var mW = OW(1217),
      EW = OW(3083),
      NW = OW(38333),
      PW = OW(38702);
    class LW {
      constructor(WW, iW) {
        this.pose = WW, this.nodes = void 0, this.nodes = WW.boneNames.map((WW => iW.get(WW)))
      }
      write(WW) {
        this.pose.pose(WW), (0, PW.s)(this.pose, this.nodes)
      }
    }

    function cW(WW) {
      WW.unfreezeWorldMatrix();
      for (const iW of WW.getChildren()) cW(iW)
    }
    async function wW(WW, iW, OW, mW) {
      let {
        keepTransforms: EW,
        backFaceCulling: PW
      } = mW;
      const LW = await (0, NW.j)(iW, WW),
        wW = (0, NW.e)(null !== OW && void 0 !== OW ? OW : iW, WW, void 0, PW);
      (0, NW.l)(LW, wW, {
        keepTransforms: EW,
        backFaceCulling: PW,
        onProcessedMesh: iW => {
          WW.xEW(iW, !1), iW.isVisible = !1
        }
      });
      for (const NW of LW.rootNodes) cW(NW);
      return LW
    }

    function tW(WW, iW) {
      WW.isVisible = iW;
      for (const OW of WW.getChildMeshes()) OW.isVisible = iW
    }

    function ZW(WW) {
      const iW = new Map;
      for (const OW of WW.getNodes()) iW.set(OW.name, OW);
      return iW
    }

    function xW(WW, iW, OW, mW) {
      tW(WW, !0), (0, NW.t)(WW, iW.overlayColour), OW.attachTransformNode(WW, mW, OW.getNamedNode(mW, iW.destNode))
    }
    class lW {
      constructor(WW, iW, OW) {
        this.rb = WW, this.thinInstMgr = iW, this.uD = OW, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(WW, iW, OW) {
        const mW = (0, NW.h)(WW, iW);
        return mW in this.modelCache || (this.modelCache[mW] = (async () => {
          try {
            const mW = ZW(await wW(this.rb, WW, iW, {
                keepTransforms: void 0 !== OW,
                backFaceCulling: !1
              })),
              EW = void 0 === OW ? null : (0, PW.m)(OW, (WW => {
                const iW = mW.get(WW);
                return iW ? (0, PW.i)(iW) : null
              }));
            return {
              nodesByName: mW,
              bones: null === EW ? null : new LW(EW, mW)
            }
          } catch (EW) {
            throw delete this.modelCache[mW], console.error(`Failed to load preview attachment ${mW}:`, EW), EW
          }
        })()), this.modelCache[mW]
      }
      async update(WW, iW) {
        var OW;
        const {
          thinInstMgr: NW,
          uD: PW
        } = this;
        this.cosmeticNames[WW] = iW;
        const LW = this.attachmentsByType[WW];
        if (LW)
          for (const {
              mesh: EW,
              destNode: wW,
              bones: ZW
            }
            of LW) {
            null !== ZW && (0, mW.tb)(this.shownBones, ZW), tW(EW, !1);
            const WW = NW.getNamedNode(PW, wW);
            NW.detachTransformNodeIfFound(EW, PW, WW)
          }
        this.attachmentsByType[WW] = [];
        const cW = (0, EW.l)(WW, iW);
        if (null !== cW && void 0 !== cW && null !== (OW = cW.attachments) && void 0 !== OW && OW.length)
          for (const mW of cW.attachments) {
            let OW;
            try {
              OW = await this.loadModel(mW.modelGlb, mW.texture, mW.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[WW] !== iW) return;
            const EW = OW.nodesByName.get(mW.modelNode);
            EW ? (xW(EW, mW, NW, PW), this.attachmentsByType[WW].push({
              mesh: EW,
              destNode: mW.destNode,
              bones: OW.bones
            }), null !== OW.bones && this.shownBones.push(OW.bones)) : console.error(`Preview attachment node ${mW.modelNode} not found in ${mW.modelGlb}`)
          }
      }
      writePoses(WW) {
        for (const iW of this.shownBones) iW.write(WW)
      }
    }
  },
  40011: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => xW
    });
    var mW = OW(38379),
      EW = OW(38493),
      NW = OW(38472),
      PW = OW(38405),
      LW = OW(38388);

    function cW(WW) {
      return `\n\t\t\t\t${(0,LW.v)(WW,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, LW.B)(WW, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, LW.B)(WW, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, LW.m)(WW, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function wW(WW, iW) {
      let OW = (0, LW.Ib)(WW, "skele" + (iW - 1));
      for (let EW = iW - 2; EW >= 0; EW--) OW = (0, LW.yb)(WW, `boneIdx == ${EW}`, (0, LW.Ib)(WW, `skele${EW}`), OW);
      const mW = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,LW.B)(WW,"int","boneIdx",(0,LW.Db)(WW,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,LW.B)(WW,"vec3","bone",OW)}\n\t\t\t\t${(0,LW.B)(WW,"vec2","pivot",(0,LW.m)(WW,"vec2","0.0",`${(0,LW.Pb)(WW,"position")}.z`))}\n\t\t\t\t${(0,LW.ab)(WW)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${mW}));`:`positionUpdated.yz += ${mW};`}\n\t\t`
    }

    function tW(WW) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,LW.m)(WW,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const ZW = {
        x: 0,
        y: 0,
        z: 0,
        mZ(WW, iW) {
          return this.x = WW[iW], this.y = WW[iW + 1], this.z = WW[iW + 2], this
        }
      },
      xW = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (WW, iW) => ({
          ...(0, mW.c)("CAPE"),
          BLOXD_CAPE_BONES: `${WW}`,
          BLOXD_CAPE_MAX_Y: (0, EW.ob)(iW)
        }),
        getUniforms(WW) {
          return (0, NW.e)(function(WW) {
            const iW = [];
            for (let OW = 0; OW < WW; OW++) iW.push({
              name: `skele${OW}`,
              type: "highp vec3"
            });
            return iW
          }(this.skeleLen), "vertex", WW)
        },
        bind(WW) {
          for (let iW = 0; iW < this.skeleLen; iW++) WW.updateVector3(`skele${iW}`, ZW.mZ(this.skele, 3 * iW))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(WW, iW) {
          return "vertex" !== WW ? null : {
            CUSTOM_VERTEX_DEFINITIONS: cW(iW),
            CUSTOM_VERTEX_UPDATE_POSITION: wW(iW, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: tW(iW)
          }
        }
      };
    (0, PW.m)(xW)
  },
  39915: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => tW,
      d: () => ZW
    });
    var mW = OW(38379),
      EW = OW(38472),
      NW = OW(38388),
      PW = OW(38405);
    const LW = "bloxdTextLodBias",
      cW = [{
        name: LW,
        type: "float"
      }],
      wW = "bloxdTextSample",
      tW = {
        planes: -.5,
        boards: -.5
      },
      ZW = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, mW.c)("TEXT_SAMPLER"),
        getUniforms: WW => (0, EW.e)(cW, "fragment", WW),
        bind(WW) {
          WW.updateFloat(LW, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(WW, iW) {
          if ("fragment" !== WW) return null;
          const OW = (0, NW.K)(iW, `vec4 ${wW}(sampler2D s, vec2 uv, float bias)`, `fn ${wW}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            mW = (0, NW.K)(iW, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            EW = `${(0,NW.W)(iW,"vDiffuseUV")} + uvOffset`,
            PW = (0, NW.K)(iW, `${wW}(diffuseSampler, ${EW}, ${(0,NW.Ib)(iW,LW)})`, `${wW}(diffuseSampler, diffuseSamplerSampler, ${EW}, ${(0,NW.Ib)(iW,LW)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${OW} {\n\t\t\t\t\t${(0,NW.B)(iW,"vec4","texel",mW)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,NW.m)(iW,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,NW.m)(iW,"vec3","0.0")}, ${(0,NW.m)(iW,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, NW.F)(iW)]: `baseColor = ${PW};`
          }
        }
      };
    (0, PW.m)(ZW)
  },
  42601: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      CapeMaterialPlugin: () => MW,
      HueTintMaterialPlugin: () => KW,
      LifeformMaterialPlugin: () => SW,
      OverlayMaterialPlugin: () => YW
    });
    var mW = OW(42603),
      EW = OW(39198);
    class NW extends((0, mW.d)(EW.b)) {}(0, mW.g)(EW.b, NW);
    var PW = OW(38485);
    class LW extends((0, mW.d)(PW.e)) {}(0, mW.g)(PW.e, LW);
    var cW = OW(39025);
    class wW extends((0, mW.d)(cW.f)) {}(0, mW.g)(cW.f, wW);
    var tW = OW(38511),
      ZW = OW(41782),
      xW = OW(38502);
    class lW extends((0, mW.d)(xW.h)) {
      constructor(WW, iW, OW) {
        super(WW, iW, OW), (0, tW.i)(WW)
      }
      dispose(WW) {
        (0, tW.k)(this._material), super.dispose(WW)
      }
    }(0, mW.g)(xW.h, lW), (0, xW.j)({
      disableUnusedSpecularTerm: mW.c,
      isLightingDisabled: WW => WW instanceof ZW.StandardMaterial && WW.disableLighting
    });
    var AW = OW(39915);
    class bW extends((0, mW.d)(AW.d)) {}(0, mW.g)(AW.d, bW);
    var jW = OW(40011),
      UW = OW(38376),
      kW = OW(39308),
      sW = OW(38500);
    class MW extends((0, mW.d)(jW.b)) {}(0, mW.g)(jW.b, MW);
    class KW extends((0, mW.d)(UW.b)) {}(0, mW.g)(UW.b, KW);
    class SW extends((0, mW.d)(kW.m)) {}(0, mW.g)(kW.m, SW);
    class YW extends((0, mW.d)(sW.c)) {}(0, mW.g)(sW.c, YW)
  },
  10106: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW,
      e: () => PW,
      h: () => LW,
      j: () => cW
    });
    var mW = OW(27);
    const EW = "touchSprintChanged";
    let NW = !0;

    function PW() {
      return NW
    }

    function LW(WW) {
      WW !== NW && (NW = WW, mW.l.iZ(EW, WW))
    }

    function cW(WW, iW) {
      return null !== WW && null !== iW && WW > iW
    }
  },
  42603: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => XW,
      d: () => sW,
      g: () => rW
    });
    var mW = OW(41782),
      EW = OW(42612),
      NW = OW(42652),
      PW = OW(42616),
      LW = OW(38995),
      cW = OW(39004),
      wW = OW(39009),
      tW = OW(39011),
      ZW = OW(38464),
      xW = OW(38427),
      lW = OW(38431),
      AW = OW(42623),
      bW = OW(38405),
      jW = OW(38419),
      UW = OW(38388);

    function kW(WW, iW) {
      return Object.assign((function(WW, OW, mW, EW) {
        return iW(this.featureState, WW, OW, mW, EW)
      }), {
        cZ: WW
      })
    }

    function sW(WW) {
      const iW = class extends AW.e {
          constructor(iW, OW) {
            const mW = (0, jW.bb)(iW),
              EW = mW && (0, jW.v)(mW, WW.name);
            for (var NW = arguments.length, PW = new Array(NW > 2 ? NW - 2 : 0), LW = 2; LW < NW; LW++) PW[LW - 2] = arguments[LW];
            super(iW, WW.name, WW.priority, EW ? EW.defines : WW.defines(...PW), !1), this.featureState = void 0, this.featureState = OW, this._pluginManager._addPlugin(this), this._enable(!0), (0, jW.x)(this._material, WW, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return WW.className
          }
          isCompatible(WW) {
            return WW === UW.e.GLSL || WW === UW.e.WGSL
          }
        },
        OW = (0, bW.i)(WW);
      for (const [mW, EW] of Object.entries(bW.d)) {
        const NW = WW[mW];
        if (NW) {
          const WW = OW[mW];
          Object.defineProperty(iW.prototype, EW, {
            value: kW(NW, WW),
            writable: !0,
            configurable: !0
          })
        }
      }
      return iW
    }
    class MW extends(sW(LW.e)) {}
    var KW = OW(41359),
      SW = OW(42630),
      YW = OW(42633);

    function yW(WW, iW, OW) {
      return (0, YW.i)(OW, iW.urls, (() => async function(WW, iW, OW) {
        const {
          width: mW
        } = WW[0].getSize(), EW = WW.map(((WW, OW) => {
          var EW;
          const NW = Math.round(WW.getSize().height / mW),
            PW = null === iW || void 0 === iW ? void 0 : iW[OW];
          return {
            pixels: PW && PW.byteLength === mW * mW * NW * 4 ? PW : null !== (EW = TW.get(WW.getInternalTexture())) && void 0 !== EW ? EW : WW._readPixelsSync(),
            layers: NW
          }
        })), NW = Math.min(OW.VA().getCaps().texture2DArrayMaxLayerCount, 256), LW = (0, YW.e)(EW, mW, NW).map((WW => {
          let {
            pixels: iW,
            layers: EW
          } = WW;
          return {
            atlas: new SW.b(iW, mW, mW, EW, KW.c.TEXTUREFORMAT_RGBA, OW, !0, !1, PW.d.NEAREST_NEAREST_MIPLINEAR),
            layers: EW
          }
        }));
        return WW.forEach(((WW, iW) => {
          const mW = WW.getInternalTexture();
          TW.has(mW) || (! function(WW, iW) {
            const OW = iW.createRawTexture(new Uint8Array(4), 1, 1, KW.c.TEXTUREFORMAT_RGBA, !1, !1, PW.d.NEAREST_SAMPLINGMODE);
            WW._hardwareTexture.release(), iW.unbindAllTextures(), OW._swapAndDie(WW, !1)
          }(mW, OW.VA()), TW.set(mW, EW[iW].pixels))
        })), LW
      }(WW, iW.pixels, OW)))
    }
    const TW = new WeakMap;
    var JW = OW(39017);
    class hW extends(sW(cW.e)) {
      constructor(WW, iW) {
        super(WW, iW), this.loaded = new Set, this.mirrors = void 0, this.mirrors = iW.textures.map((WW => WW.mirror)), iW.useWebGL2 && !iW.imagesPerAtlas.length && iW.textureAtlases.splice(0, iW.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((WW, iW) => {
          WW.onLoadObservable.add((WW => {
            this.setTextureArrayData(WW, iW).catch((WW => {
              console.error(`Failed to build the texture arrays, at atlas ${iW}`, WW)
            }))
          }))
        })), (0, JW.h)(iW, WW.shaderLanguage)
      }
      async setTextureArrayData(WW, iW) {
        const OW = this.featureState,
          {
            width: mW,
            height: EW
          } = WW.getSize(),
          NW = this._material.shaderLanguage;
        if (!OW.useWebGL2) return void(0, JW.f)(this._material, OW, iW, mW, Math.round(EW / mW), NW);
        if (this.loaded.add(iW), this.loaded.size < this.mirrors.length) return;
        const PW = await yW(this.mirrors, OW.sources, this._material.bD());
        (0, JW.d)(this._material, OW, PW, mW, NW)
      }
    }
    var HW = OW(42635),
      nW = OW(41818),
      uW = OW(38235),
      oW = OW(42641),
      dW = OW(41927),
      eW = OW(41808),
      vW = OW(42588),
      gW = OW(38669),
      DW = OW(42650);
    class VW extends HW.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const pW = {
      Mesh: oW.e,
      TransformNode: vW.e,
      OZ: HW.e,
      VertexBuffer: HW.g,
      BoundingInfo: nW.b,
      fA: uW.fA,
      ArenaBuffer: VW,
      SubMesh: eW.d,
      VertexData: dW.c,
      MirroredGeometry: DW.c,
      meshFromArrays: DW.d,
      plainMeshFromArrays: DW.e
    };
    (0, gW.f)(pW);
    var fW = OW(38511);
    class CW extends(sW(tW.l)) {
      constructor(WW, iW) {
        if (super(WW, iW), WW instanceof mW.StandardMaterial && iW.dirLightCount > 0) {
          const iW = WW,
            OW = iW._blockDirtyMechanism;
          iW._blockDirtyMechanism = !0, WW.disableLighting = !0, iW._blockDirtyMechanism = OW;
          const mW = (0, jW.bb)(WW);
          mW && (mW.disableLighting = !0, (0, jW._)(mW))
        }(0, fW.i)(WW)
      }
      dispose(WW) {
        (0, fW.k)(this._material), super.dispose(WW)
      }
    }

    function XW(WW, iW) {
      if (!(iW instanceof mW.StandardMaterial) || iW.specularTexture) return;
      const {
        r: OW,
        g: EW,
        b: NW
      } = iW.specularColor;
      0 === OW && 0 === EW && 0 === NW && (WW.SPECULARTERM = !1)
    }(0, tW.h)({
      disableUnusedSpecularTerm: XW
    });
    var BW = OW(38437),
      qW = OW(38683);
    const RW = new RegExp(`^#define ${wW.c}\\s*$`, "m");
    class GW extends(sW(wW.i)) {
      constructor(WW, iW) {
        super(WW, iW), this.JA = !1, iW.ditherOnlyWhileFading && (qW.h.add(WW), this.prewarmDitherTwins(WW))
      }
      prewarmDitherTwins(WW) {
        const iW = new WeakSet;
        WW.onEffectCreatedObservable.add((OW => {
          let {
            effect: mW,
            subMesh: EW
          } = OW;
          if (this.featureState.prewarmingDither || iW.has(mW)) return;
          iW.add(mW);
          const NW = null === EW || void 0 === EW ? void 0 : EW.getMesh();
          NW && !RW.test(mW.defines) && WW.bD().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(NW) || iW.delete(mW)
          }))
        }))
      }
      prewarmDither(WW) {
        if (this.JA || WW.Ay()) return !1;
        const iW = new eW.d(0, 0, 0, 0, 0, WW, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(WW, iW)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== iW.effect
      }
      dispose(WW) {
        this.JA = !0, super.dispose(WW)
      }
    }
    class IW extends(sW(ZW.d)) {}
    const aW = new Map;

    function rW(WW, iW) {
      aW.set(WW, iW)
    }
    rW(LW.e, MW), rW(cW.e, hW), rW(wW.i, GW), rW(tW.l, CW), rW(ZW.d, IW), (0, xW.c)({
      create: (WW, iW) => {
        const OW = new mW.StandardMaterial(WW.name, iW);
        return (0, BW.w)(WW, OW), OW.detailMap._pluginDefineNames
      },
      write: (WW, iW, OW) => {
        (0, BW.Z)(WW.mirror, iW, OW)
      },
      addFeature: (WW, iW, OW) => {
        const mW = aW.get(iW.feature);
        if (!mW) throw new Error(`${iW.feature.name} has no plugin class (registerPluginClass)`);
        new mW(WW.mirror, iW.state, ...OW)
      },
      texture: (WW, iW, OW) => {
        let {
          url: mW,
          noMipmap: EW,
          invertY: NW,
          samplingMode: LW,
          data: cW,
          sets: wW
        } = OW;
        if (!cW) {
          const OW = new PW.d(mW, iW, EW, NW, LW);
          return Object.assign(OW, wW), void(0, lW.O)(WW, OW)
        }
        const tW = {},
          ZW = new Promise(((WW, iW) => {
            tW.onLoad = WW, tW.onError = (WW, OW) => {
              iW(new Error(`${cW.context}: ${(null===OW||void 0===OW?void 0:OW.message)||WW||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: xW,
            bytes: AW,
            label: bW
          } = cW,
          jW = {
            noMipmap: EW,
            invertY: !1,
            samplingMode: LW,
            ...tW,
            mimeType: xW,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          UW = new PW.d(null, iW, jW);
        BW.z.set(UW, ZW), Object.assign(UW, wW), UW.updateURL(mW, AW);
        const kW = UW.getInternalTexture();
        kW && (kW.label = bW), WW.uvSet = UW.coordinatesIndex, WW.matrix.set((0, BW.U)(UW)), (0, lW.O)(WW, UW)
      },
      cube: (WW, iW, OW) => {
        let {
          rootUrl: mW,
          files: NW,
          noMipmap: LW,
          luminance: cW
        } = OW;
        const {
          samplingMode: wW
        } = WW.sampler, tW = wW === (0, lW.A)(LW) ? null : () => {
          (0, BW.R)(ZW, wW)
        }, ZW = new EW.b(mW, iW, null, LW, NW, tW, null, (0, lW.z)(cW));
        ZW.coordinatesMode = PW.d.SKYBOX_MODE, (0, lW.O)(WW, ZW)
      },
      canvas: (WW, iW, OW) => {
        let {
          width: mW,
          height: EW,
          mipmaps: LW,
          samplingMode: cW,
          hasAlpha: wW = !1,
          wrap: tW = PW.d.CLAMP_ADDRESSMODE
        } = OW;
        const ZW = new NW.d(iW, {
          width: mW,
          height: EW
        }, WW, LW, cW);
        ZW.hasAlpha = wW, ZW.wrapU = tW, ZW.wrapV = tW;
        const xW = (0, BW.H)(ZW);
        return (0, BW.K)(xW, ZW), xW
      }
    })
  },
  42650: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      d: () => ZW,
      e: () => xW
    });
    var mW = OW(42635),
      EW = OW(41582),
      NW = OW(41818),
      PW = OW(41929),
      LW = OW(42641),
      cW = OW(41927),
      wW = OW(38562);
    class tW extends PW.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (WW, iW) => {
          this.releaseUnlessInstanced(iW)
        }, this.onLinked = null
      }
      link(WW) {
        var iW;
        (0, wW.k)(WW), this.model = WW, null === (iW = this.onLinked) || void 0 === iW || iW.call(this, WW)
      }
      relink() {
        this.release();
        const WW = [];
        for (const EW of Object.values(this._vertexBuffers))
          if (!EW.getIsInstanced()) {
            const {
              byteOffset: iW,
              byteStride: OW,
              type: mW,
              normalized: NW
            } = EW;
            WW.push({
              kind: EW.getKind(),
              data: EW.getData(),
              offset: iW,
              stride: OW,
              components: EW.getSize(),
              glType: mW,
              isNormalized: NW
            })
          } const iW = this._indices.length ? this._indices : null,
          {
            minimum: OW,
            maximum: mW
          } = this.extend;
        this.link(new wW.d(WW, iW, this.getTotalVertices(), new Float64Array(OW.wEW()), new Float64Array(mW.wEW())))
      }
      copy(WW) {
        if (!this.model) return super.copy(WW);
        const iW = new tW(WW, this.bD()),
          OW = this.IEW(void 0, !0);
        OW && iW.setIndices(OW);
        let PW = !1;
        for (const NW in this._vertexBuffers) {
          const WW = this._vertexBuffers[NW],
            OW = WW.getData();
          if (!OW) continue;
          const LW = WW.getSize(),
            {
              type: cW,
              byteOffset: wW,
              byteStride: tW,
              normalized: ZW
            } = WW;
          PW ||= WW.isUpdatable();
          const xW = WW.getIsInstanced() ? (OW instanceof Array ? 4 * OW.length : OW.byteLength) / tW : this.getTotalVertices(),
            lW = (0, EW.l)(OW, LW, cW, wW, tW, xW, !0),
            AW = {
              updatable: WW.isUpdatable(),
              stride: LW,
              type: cW,
              normalized: ZW,
              takeBufferOwnership: !0,
              instanced: WW.getIsInstanced()
            };
          iW.setVerticesBuffer(new mW.g(this.VA(), lW, NW, AW), xW)
        }
        return iW._updatable = PW, iW._boundingInfo = new NW.b(this.extend.minimum, this.extend.maximum), iW.relink(), iW
      }
      static mergeMeshes(WW, iW, OW, mW, EW, NW) {
        const cW = WW[0].bD(),
          wW = new LW.e(WW[0].name + "_merged", cW),
          ZW = new tW(PW.b.RandomId(), cW, void 0, !1, wW);
        try {
          if (!LW.e.MergeMeshes(WW, iW, OW, wW, EW, NW)) return wW.dispose(), null
        } catch (xW) {
          throw wW.dispose(), xW
        }
        return ZW.relink(), wW
      }
      removeVerticesData(WW) {
        this.releaseUnlessInstanced(WW), super.removeVerticesData(WW)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(WW) {
        var iW;
        WW && null !== (iW = this.getVertexBuffer(WW)) && void 0 !== iW && iW.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, wW.q)(this.model), this.model = null)
      }
    }

    function ZW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LW.e(WW, OW);
      const EW = (0, wW.i)(iW),
        {
          positions: NW,
          normals: ZW,
          uvs: xW,
          indices: lW,
          named: AW = {}
        } = iW,
        bW = new cW.c;
      bW.positions = NW, bW.normals = null !== ZW && void 0 !== ZW ? ZW : null, bW.uvs = null !== xW && void 0 !== xW ? xW : null, bW.indices = lW;
      const jW = new tW(PW.b.RandomId(), OW, bW, !1, mW);
      for (const {
          kind: PW,
          components: LW
        }
        of EW.vertexAttributes) PW in AW && mW.setVerticesData(PW, AW[PW], !1, LW);
      return jW.link(EW), mW
    }

    function xW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const EW = new LW.e(WW, OW),
        {
          positions: NW,
          normals: PW,
          uvs: wW,
          indices: tW
        } = iW;
      return Object.assign(new cW.c, {
        positions: NW,
        normals: PW,
        uvs: wW,
        indices: tW
      }).applyToMesh(EW, mW), EW
    }
  },
  42633: (WW, iW, OW) => {
    function mW(WW, iW, OW) {
      const mW = iW * iW * 4,
        EW = WW[0].layers,
        NW = EW * (WW.length - 1) + WW[WW.length - 1].layers,
        PW = new Uint8Array(NW * mW);
      WW.forEach(((iW, OW) => {
        const NW = OW + 1 < WW.length ? Math.min(iW.layers, EW) : iW.layers;
        PW.set(new Uint8Array(iW.pixels.buffer, iW.pixels.byteOffset, NW * mW), OW * EW * mW)
      }));
      const LW = Math.max(1, Math.min(NW, OW || NW));
      if (LW === NW) return [{
        pixels: PW,
        layers: NW
      }];
      const cW = [];
      for (let wW = 0; wW < NW; wW += LW) {
        const WW = Math.min(NW, wW + LW);
        cW.push({
          pixels: PW.slice(wW * mW, WW * mW),
          layers: WW - wW
        })
      }
      return cW
    }
    OW.d(iW, {
      e: () => mW,
      i: () => NW
    });
    const EW = new WeakMap;

    function NW(WW, iW, OW) {
      var mW, NW;
      const PW = null !== (mW = EW.get(WW)) && void 0 !== mW ? mW : new Map;
      EW.set(WW, PW);
      const LW = null !== (NW = PW.get(iW[0])) && void 0 !== NW ? NW : [];
      PW.set(iW[0], LW);
      const cW = LW.find((WW => WW.urls.length === iW.length && WW.urls.every(((WW, OW) => WW === iW[OW]))));
      if (cW) return cW.built;
      const wW = {
        urls: [...iW],
        built: OW()
      };
      return LW.push(wW), wW.built.catch((() => {
        LW.splice(LW.indexOf(wW), 1)
      })), wW.built
    }
  },
  5713: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => xW,
      i: () => cW,
      m: () => AW,
      o: () => wW,
      p: () => lW
    });
    var mW = OW(5721),
      EW = OW(5725);
    const NW = !1,
      PW = mW.h.map((WW => {
        const iW = [];
        for (let NW = 1; NW <= WW.reach; NW++) iW.push(EW.j[(0, mW.d)(WW.source, NW)].id);
        const OW = "water" === WW.family;
        return Object.freeze({
          name: WW.kind,
          family: WW.family,
          reach: WW.reach,
          stepTicks: OW ? 5 : 10,
          slopeDistance: OW ? 4 : 2,
          sourceId: EW.j[WW.source].id,
          fallingId: EW.j[(0, mW.b)(WW.source)].id,
          flowingIds: Object.freeze(iW),
          makesSources: OW,
          stillId: EW.j[WW.still].id
        })
      })),
      LW = new Map;
    for (const bW of PW) LW.set(bW.sourceId, Object.freeze({
      kind: bW,
      state: "source",
      distance: 0
    })), LW.set(bW.fallingId, Object.freeze({
      kind: bW,
      state: "falling",
      distance: 0
    })), bW.flowingIds.forEach(((WW, iW) => {
      LW.set(WW, Object.freeze({
        kind: bW,
        state: "flowing",
        distance: iW + 1
      }))
    }));

    function cW(WW) {
      return PW.find((iW => iW.name === WW))
    }

    function wW(WW) {
      return null === WW ? void 0 : LW.get(WW)
    }
    const tW = new Uint8Array(65536);
    for (const [bW, jW] of LW) tW[bW] = "source" === jW.state ? 1 : 2;
    const ZW = new Map;
    for (const bW of PW) ZW.set(bW.stillId, bW.family);

    function xW(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = wW(WW)) || void 0 === OW ? void 0 : OW.kind.family) && void 0 !== iW ? iW : lW(WW)
    }

    function lW(WW) {
      var iW;
      return null === WW ? null : null !== (iW = ZW.get(WW)) && void 0 !== iW ? iW : null
    }
    EW.j.Obsidian.id, EW.j["Messy Stone"].id;

    function AW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let WW = 0;
        for (const iW of PW) WW = Math.max(WW, iW.stillId, iW.sourceId, iW.fallingId, ...iW.flowingIds);
        return WW
      }() + 1;
      const iW = new Uint8Array(WW);
      for (const OW of PW) {
        const mW = ("water" === OW.family ? 1 : 2) << 4;
        for (const EW of [OW.stillId, OW.sourceId, OW.fallingId, ...OW.flowingIds]) EW < WW && (iW[EW] = mW)
      }
      return iW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);