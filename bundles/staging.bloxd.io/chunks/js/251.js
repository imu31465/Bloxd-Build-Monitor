export const id = 251;
export const ids = [251];
export const modules = {
  41108: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      openMobLineupPreview: () => eB,
      openMobPreview: () => LB,
      openPetPreview: () => uB
    });
    var TB = ZB(39872),
      JB = ZB(40143),
      oB = ZB(41111),
      GB = ZB(37304),
      vB = ZB(37113),
      kB = ZB(40297),
      cB = ZB(41140),
      nB = ZB(38504),
      hB = ZB(37209),
      zB = ZB(37188),
      FB = ZB(37108),
      NB = ZB(38429),
      gB = ZB(38425),
      qB = ZB(38159),
      yB = ZB(38220),
      UB = ZB(38187),
      WB = ZB(37840),
      dB = ZB(2912),
      CB = ZB(37680);
    ZB(41144), ZB(40528), ZB(41147);
    const QB = 22,
      sB = 13,
      wB = Math.PI - Math.PI / 16,
      OB = 6,
      YB = Math.PI / 4;
    let iB = null;
    const pB = {},
      aB = new Map;

    function HB() {
      if (null !== iB) return iB;
      const BB = document.createElement("canvas");
      BB.classList.add("MobPreviewCanvas");
      const IB = new TB.e(BB, !0, {
        preserveDrawingBuffer: !0
      });
      IB.iTB = (0, dB.h)().Ig.engine.iTB;
      const ZB = new JB.b(IB);
      ZB.clearColor = new GB.e(0, 0, 0, 0), ZB.ambientColor = new GB.Color3(1, 1, 1);
      const cB = new oB.c("rq", Math.PI / 2, Math.PI / 2, QB, vB.rN.Zero(), ZB),
        nB = new kB.d("light", new vB.rN(-.1, 1, -.3), ZB);
      return nB.diffuse = new GB.Color3(1, 1, 1), nB.specular = new GB.Color3(1, 1, 1), nB.groundColor = new GB.Color3(.5, .5, .5), iB = {
        engine: IB,
        lg: ZB,
        canvas: BB,
        camera: cB
      }, iB
    }

    function MB(BB) {
      return pB[BB] ??= (0, qB.s)(BB, HB().lg, !0).catch((IB => {
        throw delete pB[BB], IB
      })), pB[BB]
    }

    function jB(BB) {
      let IB = aB.get(BB);
      return IB || (IB = WB.A[BB].loadModel(HB().lg, !1).then((BB => (BB.qY(!1), BB)), (IB => {
        throw aB.delete(BB), IB
      })), aB.set(BB, IB)), IB
    }

    function PB(BB) {
      var IB, ZB, TB;
      let {
        mobType: JB,
        variation: oB,
        animation: GB
      } = BB, kB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const OB = null !== (IB = null === kB || void 0 === kB ? void 0 : kB.size) && void 0 !== IB ? IB : 1,
        YB = null !== (ZB = null === kB || void 0 === kB ? void 0 : kB.cosmetics) && void 0 !== ZB ? ZB : [],
        iB = null !== (TB = null === kB || void 0 === kB ? void 0 : kB.JC) && void 0 !== TB ? TB : null;
      let pB = !1,
        aB = null,
        PB = null;
      const {
        engine: RB,
        lg: rB
      } = HB(), mB = rB.onBeforeRenderObservable.add((() => {
        var BB;
        null === (BB = PB) || void 0 === BB || BB.render(RB.getDeltaTime())
      })), XB = null === iB ? null : jB(iB).catch((BB => (console.error(`Mob preview: could not load ${iB}`, BB), null)));
      return Promise.all([MB(JB), XB]).then((BB => {
        var IB, ZB, TB;
        let [kB, MB] = BB;
        if (pB) return;
        const jB = (0, dB.h)().Ig.kR,
          {
            hitBoxDimensions: RB
          } = (0, nB.c)(JB),
          rB = sB / Math.max(RB.height, RB.width);
        if (aB = (0, qB.j)(JB, rB * OB, !0, !0), jB.setPosition(aB, QB, -RB.height * rB / 2, 0), jB.setRotationEulerY(aB, wB), kB.meshApi instanceof UB.c && YB.length > 0)
          for (const [JB, oB] of YB) kB.meshApi.updatePlayerCosmetic(null, aB, JB, oB, !0);
        else kB.meshApi.updateVariation(aB, JB, null !== oB && void 0 !== oB ? oB : "default");
        null !== iB && null !== MB && function(BB, IB, ZB, TB) {
          var JB;
          const oB = WB.A[BB],
            GB = (0, NB.k)();
          (0, NB.d)(oB, null === (JB = (0, yB.b)(ZB).meshMetadata.heldItemPositionParams) || void 0 === JB ? void 0 : JB.itemOffset, GB);
          const kB = CB.c * GB.ek.y,
            nB = GB.usesQuaternion ? GB.quaternion : vB.Quaternion.FromEulerVector(GB.rotation),
            hB = new cB.c(`${IB.name}Hand`, HB().lg);
          hB.position.TY((0, gB.c)(GB.position, nB, kB, oB.heldModelOffsetY())), hB.rotationQuaternion = nB, hB.ek.set(GB.ek.x, kB, GB.ek.z), IB.clone(`${IB.name}Held`, hB).qY(!0);
          const zB = (0, dB.h)().Ig.kR;
          zB.attachTransformNode(hB, TB, zB.getNamedNode(TB, "ArmRightMesh"))
        }(iB, MB, JB, aB), jB.set(aB, "aOpacity", 1);
        const mB = null !== (IB = (0, yB.b)(JB).meshMetadata.lifeformTypeForModelOverride) && void 0 !== IB ? IB : JB;
        PB = new FB.AnimatorState, PB.thinInstMgr = jB, PB.gR = aB, PB.SZB = jB.pTB(aB, 0), PB.modelLifeformType = mB, PB.nodeNameAliases = null !== (ZB = null === (TB = (0, hB.c)(mB)) || void 0 === TB ? void 0 : TB.nodeNameAliases) && void 0 !== ZB ? ZB : null, PB.startAnimation(GB, zB.h.Movement)
      })).catch((BB => {
        console.error(`Mob preview: could not load ${JB}`, BB)
      })), () => {
        pB = !0, rB.onBeforeRenderObservable.remove(mB), null !== aB && (0, dB.h)().Ig.kR.delete(aB)
      }
    }

    function RB(BB, IB) {
      return PB({
        mobType: "NPC",
        variation: null,
        animation: BB.animation
      }, BB, IB)
    }

    function rB(BB) {
      let {
        mobType: IB,
        variation: ZB,
        metaInfo: TB,
        tamed: JB
      } = BB, oB = !1, GB = null, vB = 0;
      const kB = (0, dB.h)(),
        cB = kB.Ig.kR,
        nB = BB => {
          vB += YB * (BB / 1e3) % (2 * Math.PI), cB.setRotationEulerY(GB, vB)
        };
      return MB(IB).then((BB => {
        if (oB) return;
        GB = (0, qB.j)(IB, OB, !0, !0), cB.setPosition(GB, 0, -OB, 0), BB.meshApi.updateVariation(GB, IB, ZB);
        const vB = {
          wool: "Sheared" !== TB,
          saddle: "Saddled" === TB,
          antlers: "Antlers" === TB,
          collar: JB
        };
        for (const [IB, ZB] of Object.entries(vB)) cB.hasGroup(GB, IB) && BB.meshApi.setMeshGroupVisibility(GB, IB, ZB);
        cB.set(GB, "aOpacity", 1), kB.on("renderTickBegin", nB)
      })).catch((BB => {
        console.error(`Pet preview: could not load ${IB}`, BB)
      })), () => {
        oB = !0, kB.off("renderTickBegin", nB), null !== GB && cB.delete(GB)
      }
    }
    class mB {
      constructor(BB, IB) {
        this.place = IB, this.remove = null;
        const {
          engine: ZB,
          lg: TB,
          canvas: JB
        } = HB();
        BB.appendChild(JB), ZB.resize(), ZB.runRenderLoop((() => {
          TB.render()
        }))
      }
      show(BB) {
        var IB;
        null === (IB = this.remove) || void 0 === IB || IB.call(this), this.remove = this.place(BB)
      }
      resize(BB, IB) {
        const {
          engine: ZB,
          canvas: TB
        } = HB();
        TB.width = BB, TB.height = IB, ZB.resize()
      }
      close() {
        var BB;
        HB().engine.stopRenderLoop(), null === (BB = this.remove) || void 0 === BB || BB.call(this), this.remove = null
      }
    }
    class XB {
      constructor(BB) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new mB(BB, (() => () => {}))
      }
      show(BB) {
        BB.figures !== this.view.figures && this.preload(BB.figures), this.view = BB, this.place()
      }
      resize(BB, IB) {
        this.preview.resize(BB, IB), this.aspect = BB / IB, this.place()
      }
      close() {
        this.preview.close();
        for (const BB of this.placed) null === BB || void 0 === BB || BB.remove();
        this.placed = []
      }
      preload(BB) {
        const IB = () => {};
        MB("NPC").catch(IB);
        for (const {
            JC: ZB
          }
          of BB) null !== ZB && jB(ZB).catch(IB)
      }
      place() {
        const {
          figures: BB,
          shown: IB
        } = this.view, ZB = BB.map(((ZB, TB) => {
          var JB;
          const oB = null !== (JB = this.placed[TB]) && void 0 !== JB ? JB : null;
          if (!IB[TB]) return null === oB || void 0 === oB || oB.remove(), null;
          const GB = (vB = (TB + .5) / BB.length, kB = this.aspect, (.5 - vB) * (2 * QB * Math.tan(HB().camera.fov / 2)) * kB);
          var vB, kB;
          return null !== oB && oB.figure === ZB && oB.x === GB ? oB : (null === oB || void 0 === oB || oB.remove(), {
            figure: ZB,
            x: GB,
            remove: RB(ZB, GB)
          })
        }));
        for (const TB of this.placed.slice(BB.length)) null === TB || void 0 === TB || TB.remove();
        this.placed = ZB
      }
    }

    function LB(BB) {
      return new mB(BB, PB)
    }

    function eB(BB) {
      return new XB(BB)
    }

    function uB(BB) {
      return new mB(BB, rB)
    }
  },
  38851: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => zB
    });
    var TB = ZB(37218),
      JB = ZB(37231),
      oB = ZB(37490),
      GB = ZB(37239),
      vB = ZB(37223);

    function kB(BB) {
      return `\n\t\t\t\t${(0,vB.y)(BB,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, vB.C)(BB, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, vB.C)(BB, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, vB.p)(BB, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function cB(BB, IB) {
      let ZB = (0, vB.Hb)(BB, "skele" + (IB - 1));
      for (let JB = IB - 2; JB >= 0; JB--) ZB = (0, vB.ub)(BB, `boneIdx == ${JB}`, (0, vB.Hb)(BB, `skele${JB}`), ZB);
      const TB = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,vB.C)(BB,"int","boneIdx",(0,vB.Cb)(BB,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,vB.C)(BB,"vec3","bone",ZB)}\n\t\t\t\t${(0,vB.C)(BB,"vec2","pivot",(0,vB.p)(BB,"vec2","0.0",`${(0,vB.Pb)(BB,"position")}.z`))}\n\t\t\t\t${(0,vB.ab)(BB)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${TB}));`:`positionUpdated.yz += ${TB};`}\n\t\t`
    }

    function nB(BB) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,vB.p)(BB,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const hB = {
        x: 0,
        y: 0,
        z: 0,
        WZB(BB, IB) {
          return this.x = BB[IB], this.y = BB[IB + 1], this.z = BB[IB + 2], this
        }
      },
      zB = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (BB, IB) => ({
          ...(0, TB.c)("CAPE"),
          BLOXD_CAPE_BONES: `${BB}`,
          BLOXD_CAPE_MAX_Y: (0, JB.nb)(IB)
        }),
        getUniforms(BB) {
          return (0, oB.b)(function(BB) {
            const IB = [];
            for (let ZB = 0; ZB < BB; ZB++) IB.push({
              name: `skele${ZB}`,
              type: "highp vec3"
            });
            return IB
          }(this.skeleLen), "vertex", BB)
        },
        bind(BB) {
          for (let IB = 0; IB < this.skeleLen; IB++) BB.updateVector3(`skele${IB}`, hB.WZB(this.skele, 3 * IB))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(BB, IB) {
          return "vertex" !== BB ? null : {
            CUSTOM_VERTEX_DEFINITIONS: kB(IB),
            CUSTOM_VERTEX_UPDATE_POSITION: cB(IB, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: nB(IB)
          }
        }
      };
    (0, GB.p)(zB)
  },
  38726: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB,
      h: () => hB
    });
    var TB = ZB(37218),
      JB = ZB(37490),
      oB = ZB(37223),
      GB = ZB(37239);
    const vB = "bloxdTextLodBias",
      kB = [{
        name: vB,
        type: "float"
      }],
      cB = "bloxdTextSample",
      nB = {
        planes: -.5,
        boards: -.5
      },
      hB = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, TB.c)("TEXT_SAMPLER"),
        getUniforms: BB => (0, JB.b)(kB, "fragment", BB),
        bind(BB) {
          BB.updateFloat(vB, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(BB, IB) {
          if ("fragment" !== BB) return null;
          const ZB = (0, oB.J)(IB, `vec4 ${cB}(sampler2D s, vec2 uv, float bias)`, `fn ${cB}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            TB = (0, oB.J)(IB, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            JB = `${(0,oB.W)(IB,"vDiffuseUV")} + uvOffset`,
            GB = (0, oB.J)(IB, `${cB}(diffuseSampler, ${JB}, ${(0,oB.Hb)(IB,vB)})`, `${cB}(diffuseSampler, diffuseSamplerSampler, ${JB}, ${(0,oB.Hb)(IB,vB)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${ZB} {\n\t\t\t\t\t${(0,oB.C)(IB,"vec4","texel",TB)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,oB.p)(IB,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,oB.p)(IB,"vec3","0.0")}, ${(0,oB.p)(IB,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, oB.E)(IB)]: `baseColor = ${GB};`
          }
        }
      };
    (0, GB.p)(hB)
  },
  41147: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      CapeMaterialPlugin: () => dB,
      HueTintMaterialPlugin: () => CB,
      LifeformMaterialPlugin: () => QB,
      OverlayMaterialPlugin: () => sB
    });
    var TB = ZB(41154),
      JB = ZB(38070);
    class oB extends((0, TB.h)(JB.d)) {}(0, TB.j)(JB.d, oB);
    var GB = ZB(37212);
    class vB extends((0, TB.h)(GB.f)) {}(0, TB.j)(GB.f, vB);
    var kB = ZB(37901);
    class cB extends((0, TB.h)(kB.f)) {}(0, TB.j)(kB.f, cB);
    var nB = ZB(37477),
      hB = ZB(40318),
      zB = ZB(37469);
    class FB extends((0, TB.h)(zB.d)) {
      constructor(BB, IB, ZB) {
        super(BB, IB, ZB), (0, nB.f)(BB)
      }
      dispose(BB) {
        (0, nB.h)(this._material), super.dispose(BB)
      }
    }(0, TB.j)(zB.d, FB), (0, zB.f)({
      disableUnusedSpecularTerm: TB.d,
      isLightingDisabled: BB => BB instanceof hB.StandardMaterial && BB.disableLighting
    });
    var NB = ZB(38726);
    class gB extends((0, TB.h)(NB.h)) {}(0, TB.j)(NB.h, gB);
    var qB = ZB(38851),
      yB = ZB(37317),
      UB = ZB(38199),
      WB = ZB(37255);
    class dB extends((0, TB.h)(qB.b)) {}(0, TB.j)(qB.b, dB);
    class CB extends((0, TB.h)(yB.d)) {}(0, TB.j)(yB.d, CB);
    class QB extends((0, TB.h)(UB.n)) {}(0, TB.j)(UB.n, QB);
    class sB extends((0, TB.h)(WB.c)) {}(0, TB.j)(WB.c, sB)
  },
  41154: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => uB,
      h: () => UB,
      j: () => xB
    });
    var TB = ZB(40318),
      JB = ZB(41162),
      oB = ZB(41203),
      GB = ZB(41170),
      vB = ZB(37869),
      kB = ZB(37878),
      cB = ZB(37884),
      nB = ZB(37890),
      hB = ZB(37248),
      zB = ZB(37253),
      FB = ZB(41176),
      NB = ZB(37239),
      gB = ZB(37243),
      qB = ZB(37223);

    function yB(BB, IB) {
      return Object.assign((function(BB, ZB, TB, JB) {
        return IB(this.featureState, BB, ZB, TB, JB)
      }), {
        vN: BB
      })
    }

    function UB(BB) {
      const IB = class extends FB.b {
          constructor(IB, ZB) {
            const TB = (0, gB._)(IB),
              JB = TB && (0, gB.v)(TB, BB.name);
            for (var oB = arguments.length, GB = new Array(oB > 2 ? oB - 2 : 0), vB = 2; vB < oB; vB++) GB[vB - 2] = arguments[vB];
            super(IB, BB.name, BB.priority, JB ? JB.defines : BB.defines(...GB), !1), this.featureState = void 0, this.featureState = ZB, this._pluginManager._addPlugin(this), this._enable(!0), (0, gB.y)(this._material, BB, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return BB.className
          }
          isCompatible(BB) {
            return BB === qB.c.GLSL || BB === qB.c.WGSL
          }
        },
        ZB = (0, NB.h)(BB);
      for (const [TB, JB] of Object.entries(NB.c)) {
        const oB = BB[TB];
        if (oB) {
          const BB = ZB[TB];
          Object.defineProperty(IB.prototype, JB, {
            value: yB(oB, BB),
            writable: !0,
            configurable: !0
          })
        }
      }
      return IB
    }
    class WB extends(UB(vB.e)) {}
    var dB = ZB(39872),
      CB = ZB(41179),
      QB = ZB(41184);

    function sB(BB, IB, ZB) {
      return (0, QB.d)(ZB, IB.urls, (() => async function(BB, IB, ZB) {
        const {
          width: TB
        } = BB[0].getSize(), JB = BB.map(((BB, ZB) => {
          var JB;
          const oB = Math.round(BB.getSize().height / TB),
            GB = null === IB || void 0 === IB ? void 0 : IB[ZB];
          return {
            pixels: GB && GB.byteLength === TB * TB * oB * 4 ? GB : null !== (JB = wB.get(BB.getInternalTexture())) && void 0 !== JB ? JB : BB._readPixelsSync(),
            layers: oB
          }
        })), oB = ZB.PN().getCaps().texture2DArrayMaxLayerCount, vB = (0, QB.c)(JB, TB, oB).map((BB => {
          let {
            pixels: IB,
            layers: JB
          } = BB;
          return {
            atlas: new CB.b(IB, TB, TB, JB, dB.e.TEXTUREFORMAT_RGBA, ZB, !0, !1, GB.e.NEAREST_NEAREST_MIPLINEAR),
            layers: JB
          }
        }));
        return BB.forEach(((BB, IB) => {
          const TB = BB.getInternalTexture();
          wB.has(TB) || (! function(BB, IB) {
            const ZB = IB.createRawTexture(new Uint8Array(4), 1, 1, dB.e.TEXTUREFORMAT_RGBA, !1, !1, GB.e.NEAREST_SAMPLINGMODE);
            BB._hardwareTexture.release(), IB.unbindAllTextures(), ZB._swapAndDie(BB, !1)
          }(TB, ZB.PN()), wB.set(TB, JB[IB].pixels))
        })), vB
      }(BB, IB.pixels, ZB)))
    }
    const wB = new WeakMap;
    var OB = ZB(37897);
    class YB extends(UB(kB.g)) {
      constructor(BB, IB) {
        super(BB, IB), this.loaded = new Set, this.mirrors = void 0, this.mirrors = IB.textures.map((BB => BB.mirror)), this.mirrors.forEach(((BB, IB) => {
          BB.onLoadObservable.add((BB => {
            this.setTextureArrayData(BB, IB).catch((BB => {
              console.error(`Failed to build the texture arrays, at atlas ${IB}`, BB)
            }))
          }))
        })), (0, OB.i)(IB, BB.shaderLanguage)
      }
      async setTextureArrayData(BB, IB) {
        const ZB = this.featureState,
          {
            width: TB,
            height: JB
          } = BB.getSize(),
          oB = this._material.shaderLanguage;
        if (!ZB.useWebGL2) return void(0, OB.e)(this._material, ZB, IB, TB, Math.round(JB / TB), oB);
        if (this.loaded.add(IB), this.loaded.size < this.mirrors.length) return;
        const GB = await sB(this.mirrors, ZB.sources, this._material.JR());
        (0, OB.d)(this._material, ZB, GB, TB, oB)
      }
    }
    var iB = ZB(41192),
      pB = ZB(40351),
      aB = ZB(37113),
      HB = ZB(41197),
      MB = ZB(40463),
      jB = ZB(40341),
      PB = ZB(41140),
      RB = ZB(37650),
      rB = ZB(41199);
    class mB extends iB.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const XB = {
      Mesh: HB.c,
      TransformNode: PB.c,
      UN: iB.d,
      VertexBuffer: iB.e,
      BoundingInfo: pB.d,
      rN: aB.rN,
      ArenaBuffer: mB,
      SubMesh: jB.e,
      VertexData: MB.c,
      MirroredGeometry: rB.e,
      meshFromArrays: rB.i,
      plainMeshFromArrays: rB.m
    };
    (0, RB.g)(XB);
    var LB = ZB(37477);
    class eB extends(UB(nB.f)) {
      constructor(BB, IB) {
        if (super(BB, IB), BB instanceof TB.StandardMaterial && IB.dirLightCount > 0) {
          const IB = BB,
            ZB = IB._blockDirtyMechanism;
          IB._blockDirtyMechanism = !0, BB.disableLighting = !0, IB._blockDirtyMechanism = ZB;
          const TB = (0, gB._)(BB);
          TB && (TB.disableLighting = !0, (0, gB.Y)(TB))
        }(0, LB.f)(BB)
      }
      dispose(BB) {
        (0, LB.h)(this._material), super.dispose(BB)
      }
    }

    function uB(BB, IB) {
      if (!(IB instanceof TB.StandardMaterial) || IB.specularTexture) return;
      const {
        r: ZB,
        g: JB,
        b: oB
      } = IB.specularColor;
      0 === ZB && 0 === JB && 0 === oB && (BB.SPECULARTERM = !1)
    }(0, nB.c)({
      disableUnusedSpecularTerm: uB
    });
    var fB = ZB(37336),
      lB = ZB(37662);
    const AB = new RegExp(`^#define ${cB.c}\\s*$`, "m");
    class tB extends(UB(cB.k)) {
      constructor(BB, IB) {
        super(BB, IB), this.WN = !1, IB.ditherOnlyWhileFading && (lB.f.add(BB), this.prewarmDitherTwins(BB))
      }
      prewarmDitherTwins(BB) {
        const IB = new WeakSet;
        BB.onEffectCreatedObservable.add((ZB => {
          let {
            effect: TB,
            subMesh: JB
          } = ZB;
          if (this.featureState.prewarmingDither || IB.has(TB)) return;
          IB.add(TB);
          const oB = null === JB || void 0 === JB ? void 0 : JB.getMesh();
          oB && !AB.test(TB.defines) && BB.JR().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(oB) || IB.delete(TB)
          }))
        }))
      }
      prewarmDither(BB) {
        if (this.WN || BB.mC()) return !1;
        const IB = new jB.e(0, 0, 0, 0, 0, BB, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(BB, IB)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== IB.effect
      }
      dispose(BB) {
        this.WN = !0, super.dispose(BB)
      }
    }
    const bB = new Map;

    function xB(BB, IB) {
      bB.set(BB, IB)
    }
    xB(vB.e, WB), xB(kB.g, YB), xB(cB.k, tB), xB(nB.f, eB), (0, hB.e)({
      create: (BB, IB) => {
        const ZB = new TB.StandardMaterial(BB.name, IB);
        return (0, fB.q)(BB, ZB), ZB.detailMap._pluginDefineNames
      },
      write: (BB, IB, ZB) => {
        (0, fB.X)(BB.mirror, IB, ZB)
      },
      addFeature: (BB, IB, ZB) => {
        const TB = bB.get(IB.feature);
        if (!TB) throw new Error(`${IB.feature.name} has no plugin class (registerPluginClass)`);
        new TB(BB.mirror, IB.state, ...ZB)
      },
      texture: (BB, IB, ZB) => {
        let {
          url: TB,
          noMipmap: JB,
          invertY: oB,
          samplingMode: vB,
          data: kB,
          sets: cB
        } = ZB;
        if (!kB) {
          const ZB = new GB.e(TB, IB, JB, oB, vB);
          return Object.assign(ZB, cB), void(0, zB.G)(BB, ZB)
        }
        const nB = {},
          hB = new Promise(((BB, IB) => {
            nB.onLoad = BB, nB.onError = (BB, ZB) => {
              IB(new Error(`${kB.context}: ${(null===ZB||void 0===ZB?void 0:ZB.message)||BB||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: FB,
            bytes: NB,
            label: gB
          } = kB,
          qB = {
            noMipmap: JB,
            invertY: !1,
            samplingMode: vB,
            ...nB,
            mimeType: FB,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          yB = new GB.e(null, IB, qB);
        fB.r.set(yB, hB), Object.assign(yB, cB), yB.updateURL(TB, NB);
        const UB = yB.getInternalTexture();
        UB && (UB.label = gB), BB.uvSet = yB.coordinatesIndex, BB.matrix.set((0, fB.L)(yB)), (0, zB.G)(BB, yB)
      },
      cube: (BB, IB, ZB) => {
        let {
          rootUrl: TB,
          files: oB,
          noMipmap: vB,
          luminance: kB
        } = ZB;
        const {
          samplingMode: cB
        } = BB.sampler, nB = cB === (0, zB.z)(vB) ? null : () => {
          (0, fB.J)(hB, cB)
        }, hB = new JB.b(TB, IB, null, vB, oB, nB, null, (0, zB.x)(kB));
        hB.coordinatesMode = GB.e.SKYBOX_MODE, (0, zB.G)(BB, hB)
      },
      canvas: (BB, IB, ZB) => {
        let {
          width: TB,
          height: JB,
          mipmaps: vB,
          samplingMode: kB,
          hasAlpha: cB = !1,
          wrap: nB = GB.e.CLAMP_ADDRESSMODE
        } = ZB;
        const hB = new oB.c(IB, {
          width: TB,
          height: JB
        }, BB, vB, kB);
        hB.hasAlpha = cB, hB.wrapU = nB, hB.wrapV = nB;
        const zB = (0, fB.A)(hB);
        return (0, fB.B)(zB, hB), zB
      }
    })
  },
  41199: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB,
      i: () => hB,
      m: () => zB
    });
    var TB = ZB(41192),
      JB = ZB(40129),
      oB = ZB(40351),
      GB = ZB(40469),
      vB = ZB(41197),
      kB = ZB(40463),
      cB = ZB(37525);
    class nB extends GB.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (BB, IB) => {
          this.releaseUnlessInstanced(IB)
        }, this.onLinked = null
      }
      link(BB) {
        var IB;
        (0, cB.i)(BB), this.model = BB, null === (IB = this.onLinked) || void 0 === IB || IB.call(this, BB)
      }
      relink() {
        this.release();
        const BB = [];
        for (const JB of Object.values(this._vertexBuffers))
          if (!JB.getIsInstanced()) {
            const {
              byteOffset: IB,
              byteStride: ZB,
              type: TB,
              normalized: oB
            } = JB;
            BB.push({
              kind: JB.getKind(),
              data: JB.getData(),
              offset: IB,
              stride: ZB,
              components: JB.getSize(),
              glType: TB,
              isNormalized: oB
            })
          } const IB = this._indices.length ? this._indices : null,
          {
            minimum: ZB,
            maximum: TB
          } = this.extend;
        this.link(new cB.e(BB, IB, this.getTotalVertices(), new Float64Array(ZB.HTB()), new Float64Array(TB.HTB())))
      }
      copy(BB) {
        if (!this.model) return super.copy(BB);
        const IB = new nB(BB, this.JR()),
          ZB = this.MTB(void 0, !0);
        ZB && IB.setIndices(ZB);
        let GB = !1;
        for (const oB in this._vertexBuffers) {
          const BB = this._vertexBuffers[oB],
            ZB = BB.getData();
          if (!ZB) continue;
          const vB = BB.getSize(),
            {
              type: kB,
              byteOffset: cB,
              byteStride: nB,
              normalized: hB
            } = BB;
          GB ||= BB.isUpdatable();
          const zB = BB.getIsInstanced() ? (ZB instanceof Array ? 4 * ZB.length : ZB.byteLength) / nB : this.getTotalVertices(),
            FB = (0, JB.s)(ZB, vB, kB, cB, nB, zB, !0),
            NB = {
              updatable: BB.isUpdatable(),
              stride: vB,
              type: kB,
              normalized: hB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            };
          IB.setVerticesBuffer(new TB.e(this.PN(), FB, oB, NB), zB)
        }
        return IB._updatable = GB, IB._boundingInfo = new oB.d(this.extend.minimum, this.extend.maximum), IB.relink(), IB
      }
      static mergeMeshes(BB, IB, ZB, TB, JB, oB) {
        const kB = BB[0].JR(),
          cB = new vB.c(BB[0].name + "_merged", kB),
          hB = new nB(GB.e.RandomId(), kB, void 0, !1, cB);
        try {
          if (!vB.c.MergeMeshes(BB, IB, ZB, cB, JB, oB)) return cB.dispose(), null
        } catch (zB) {
          throw cB.dispose(), zB
        }
        return hB.relink(), cB
      }
      removeVerticesData(BB) {
        this.releaseUnlessInstanced(BB), super.removeVerticesData(BB)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(BB) {
        var IB;
        BB && null !== (IB = this.getVertexBuffer(BB)) && void 0 !== IB && IB.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, cB.r)(this.model), this.model = null)
      }
    }

    function hB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new vB.c(BB, ZB);
      const JB = (0, cB.g)(IB),
        {
          positions: oB,
          normals: hB,
          uvs: zB,
          indices: FB,
          named: NB = {}
        } = IB,
        gB = new kB.c;
      gB.positions = oB, gB.normals = null !== hB && void 0 !== hB ? hB : null, gB.uvs = null !== zB && void 0 !== zB ? zB : null, gB.indices = FB;
      const qB = new nB(GB.e.RandomId(), ZB, gB, !1, TB);
      for (const {
          kind: GB,
          components: vB
        }
        of JB.vertexAttributes) GB in NB && TB.setVerticesData(GB, NB[GB], !1, vB);
      return qB.link(JB), TB
    }

    function zB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const JB = new vB.c(BB, ZB),
        {
          positions: oB,
          normals: GB,
          uvs: cB,
          indices: nB
        } = IB;
      return Object.assign(new kB.c, {
        positions: oB,
        normals: GB,
        uvs: cB,
        indices: nB
      }).applyToMesh(JB, TB), JB
    }
  },
  41184: (BB, IB, ZB) => {
    function TB(BB, IB, ZB) {
      const TB = IB * IB * 4,
        JB = BB[0].layers,
        oB = JB * (BB.length - 1) + BB[BB.length - 1].layers,
        GB = new Uint8Array(oB * TB);
      BB.forEach(((IB, ZB) => {
        const oB = ZB + 1 < BB.length ? Math.min(IB.layers, JB) : IB.layers;
        GB.set(new Uint8Array(IB.pixels.buffer, IB.pixels.byteOffset, oB * TB), ZB * JB * TB)
      }));
      const vB = Math.max(1, Math.min(oB, ZB || oB));
      if (vB === oB) return [{
        pixels: GB,
        layers: oB
      }];
      const kB = [];
      for (let cB = 0; cB < oB; cB += vB) {
        const BB = Math.min(oB, cB + vB);
        kB.push({
          pixels: GB.slice(cB * TB, BB * TB),
          layers: BB - cB
        })
      }
      return kB
    }
    ZB.d(IB, {
      c: () => TB,
      d: () => oB
    });
    const JB = new WeakMap;

    function oB(BB, IB, ZB) {
      var TB, oB;
      const GB = null !== (TB = JB.get(BB)) && void 0 !== TB ? TB : new Map;
      JB.set(BB, GB);
      const vB = null !== (oB = GB.get(IB[0])) && void 0 !== oB ? oB : [];
      GB.set(IB[0], vB);
      const kB = vB.find((BB => BB.urls.length === IB.length && BB.urls.every(((BB, ZB) => BB === IB[ZB]))));
      if (kB) return kB.built;
      const cB = {
        urls: [...IB],
        built: ZB()
      };
      return vB.push(cB), cB.built.catch((() => {
        vB.splice(vB.indexOf(cB), 1)
      })), cB.built
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);