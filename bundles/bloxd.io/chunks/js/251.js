export const id = 251;
export const ids = [251];
export const modules = {
  41173: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      openMobLineupPreview: () => PB,
      openMobPreview: () => TB,
      openPetPreview: () => WB
    });
    var QB = zB(39895),
      nB = zB(40154),
      dB = zB(41176),
      IB = zB(37372),
      NB = zB(37166),
      uB = zB(40335),
      UB = zB(41200),
      aB = zB(38554),
      pB = zB(37263),
      rB = zB(37239),
      sB = zB(37158),
      JB = zB(38463),
      mB = zB(38455),
      yB = zB(38177),
      kB = zB(38227),
      GB = zB(38197),
      LB = zB(37879),
      gB = zB(2863),
      tB = zB(37725);
    zB(41208), zB(40584), zB(41215);
    const SB = 22,
      MB = 13,
      EB = Math.PI - Math.PI / 16,
      iB = 6,
      qB = Math.PI / 4;
    let fB = null;
    const oB = {},
      HB = new Map;

    function DB() {
      if (null !== fB) return fB;
      const BB = document.createElement("canvas");
      BB.classList.add("MobPreviewCanvas");
      const jB = new QB.b(BB, !0, {
        preserveDrawingBuffer: !0
      });
      jB.jQB = (0, gB.g)().pm.engine.jQB;
      const zB = new nB.d(jB);
      zB.clearColor = new IB.c(0, 0, 0, 0), zB.ambientColor = new IB.Color3(1, 1, 1);
      const UB = new dB.c("xy", Math.PI / 2, Math.PI / 2, SB, NB.KJ.Zero(), zB),
        aB = new uB.e("light", new NB.KJ(-.1, 1, -.3), zB);
      return aB.diffuse = new IB.Color3(1, 1, 1), aB.specular = new IB.Color3(1, 1, 1), aB.groundColor = new IB.Color3(.5, .5, .5), fB = {
        engine: jB,
        ny: zB,
        canvas: BB,
        camera: UB
      }, fB
    }

    function FB(BB) {
      return oB[BB] ??= (0, yB.y)(BB, DB().ny, !0).catch((jB => {
        throw delete oB[BB], jB
      })), oB[BB]
    }

    function YB(BB) {
      let jB = HB.get(BB);
      return jB || (jB = LB.t[BB].loadModel(DB().ny, !1).then((BB => (BB.mH(!1), BB)), (jB => {
        throw HB.delete(BB), jB
      })), HB.set(BB, jB)), jB
    }

    function VB(BB) {
      var jB, zB, QB;
      let {
        mobType: nB,
        variation: dB,
        animation: IB
      } = BB, uB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, SB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const iB = null !== (jB = null === uB || void 0 === uB ? void 0 : uB.size) && void 0 !== jB ? jB : 1,
        qB = null !== (zB = null === uB || void 0 === uB ? void 0 : uB.cosmetics) && void 0 !== zB ? zB : [],
        fB = null !== (QB = null === uB || void 0 === uB ? void 0 : uB.kS) && void 0 !== QB ? QB : null;
      let oB = !1,
        HB = null,
        VB = null;
      const {
        engine: hB,
        ny: XB
      } = DB(), ZB = XB.onBeforeRenderObservable.add((() => {
        var BB;
        null === (BB = VB) || void 0 === BB || BB.render(hB.getDeltaTime())
      })), AB = null === fB ? null : YB(fB).catch((BB => (console.error(`Mob preview: could not load ${fB}`, BB), null)));
      return Promise.all([FB(nB), AB]).then((BB => {
        var jB, zB, QB;
        let [uB, FB] = BB;
        if (oB) return;
        const YB = (0, gB.g)().pm.JY,
          {
            hitBoxDimensions: hB
          } = (0, aB.c)(nB),
          XB = MB / Math.max(hB.height, hB.width);
        if (HB = (0, yB.l)(nB, XB * iB, !0, !0), YB.setPosition(HB, SB, -hB.height * XB / 2, 0), YB.setRotationEulerY(HB, EB), uB.meshApi instanceof GB.d && qB.length > 0)
          for (const [nB, dB] of qB) uB.meshApi.updatePlayerCosmetic(null, HB, nB, dB, !0);
        else uB.meshApi.updateVariation(HB, nB, null !== dB && void 0 !== dB ? dB : "default");
        null !== fB && null !== FB && function(BB, jB, zB, QB) {
          var nB;
          const dB = LB.t[BB],
            IB = (0, JB.k)();
          (0, JB.f)(dB, null === (nB = (0, kB.b)(zB).meshMetadata.heldItemPositionParams) || void 0 === nB ? void 0 : nB.itemOffset, IB);
          const uB = tB.c * IB.pp.y,
            aB = IB.usesQuaternion ? IB.quaternion : NB.Quaternion.FromEulerVector(IB.rotation),
            pB = new UB.e(`${jB.name}Hand`, DB().ny);
          pB.position.jH((0, mB.c)(IB.position, aB, uB, dB.heldModelOffsetY())), pB.rotationQuaternion = aB, pB.pp.set(IB.pp.x, uB, IB.pp.z), jB.clone(`${jB.name}Held`, pB).mH(!0);
          const rB = (0, gB.g)().pm.JY;
          rB.attachTransformNode(pB, QB, rB.getNamedNode(QB, "ArmRightMesh"))
        }(fB, FB, nB, HB), YB.set(HB, "aOpacity", 1);
        const ZB = null !== (jB = (0, kB.b)(nB).meshMetadata.lifeformTypeForModelOverride) && void 0 !== jB ? jB : nB;
        VB = new sB.AnimatorState, VB.thinInstMgr = YB, VB.mY = HB, VB.EzB = YB.zQB(HB, 0), VB.modelLifeformType = ZB, VB.nodeNameAliases = null !== (zB = null === (QB = (0, pB.c)(ZB)) || void 0 === QB ? void 0 : QB.nodeNameAliases) && void 0 !== zB ? zB : null, VB.startAnimation(IB, rB.f.Movement)
      })).catch((BB => {
        console.error(`Mob preview: could not load ${nB}`, BB)
      })), () => {
        oB = !0, XB.onBeforeRenderObservable.remove(ZB), null !== HB && (0, gB.g)().pm.JY.delete(HB)
      }
    }

    function hB(BB, jB) {
      return VB({
        mobType: "NPC",
        variation: null,
        animation: BB.animation
      }, BB, jB)
    }

    function XB(BB) {
      let {
        mobType: jB,
        variation: zB,
        metaInfo: QB,
        tamed: nB
      } = BB, dB = !1, IB = null, NB = 0;
      const uB = (0, gB.g)(),
        UB = uB.pm.JY,
        aB = BB => {
          NB += qB * (BB / 1e3) % (2 * Math.PI), UB.setRotationEulerY(IB, NB)
        };
      return FB(jB).then((BB => {
        if (dB) return;
        IB = (0, yB.l)(jB, iB, !0, !0), UB.setPosition(IB, 0, -iB, 0), BB.meshApi.updateVariation(IB, jB, zB);
        const NB = {
          wool: "Sheared" !== QB,
          saddle: "Saddled" === QB,
          antlers: "Antlers" === QB,
          collar: nB
        };
        for (const [jB, zB] of Object.entries(NB)) UB.hasGroup(IB, jB) && BB.meshApi.setMeshGroupVisibility(IB, jB, zB);
        UB.set(IB, "aOpacity", 1), uB.on("renderTickBegin", aB)
      })).catch((BB => {
        console.error(`Pet preview: could not load ${jB}`, BB)
      })), () => {
        dB = !0, uB.off("renderTickBegin", aB), null !== IB && UB.delete(IB)
      }
    }
    class ZB {
      constructor(BB, jB) {
        this.place = jB, this.remove = null;
        const {
          engine: zB,
          ny: QB,
          canvas: nB
        } = DB();
        BB.appendChild(nB), zB.resize(), zB.runRenderLoop((() => {
          QB.render()
        }))
      }
      show(BB) {
        var jB;
        null === (jB = this.remove) || void 0 === jB || jB.call(this), this.remove = this.place(BB)
      }
      resize(BB, jB) {
        const {
          engine: zB,
          canvas: QB
        } = DB();
        QB.width = BB, QB.height = jB, zB.resize()
      }
      close() {
        var BB;
        DB().engine.stopRenderLoop(), null === (BB = this.remove) || void 0 === BB || BB.call(this), this.remove = null
      }
    }
    class AB {
      constructor(BB) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new ZB(BB, (() => () => {}))
      }
      show(BB) {
        BB.figures !== this.view.figures && this.preload(BB.figures), this.view = BB, this.place()
      }
      resize(BB, jB) {
        this.preview.resize(BB, jB), this.aspect = BB / jB, this.place()
      }
      close() {
        this.preview.close();
        for (const BB of this.placed) null === BB || void 0 === BB || BB.remove();
        this.placed = []
      }
      preload(BB) {
        const jB = () => {};
        FB("NPC").catch(jB);
        for (const {
            kS: zB
          }
          of BB) null !== zB && YB(zB).catch(jB)
      }
      place() {
        const {
          figures: BB,
          shown: jB
        } = this.view, zB = BB.map(((zB, QB) => {
          var nB;
          const dB = null !== (nB = this.placed[QB]) && void 0 !== nB ? nB : null;
          if (!jB[QB]) return null === dB || void 0 === dB || dB.remove(), null;
          const IB = (NB = (QB + .5) / BB.length, uB = this.aspect, (.5 - NB) * (2 * SB * Math.tan(DB().camera.fov / 2)) * uB);
          var NB, uB;
          return null !== dB && dB.figure === zB && dB.x === IB ? dB : (null === dB || void 0 === dB || dB.remove(), {
            figure: zB,
            x: IB,
            remove: hB(zB, IB)
          })
        }));
        for (const QB of this.placed.slice(BB.length)) null === QB || void 0 === QB || QB.remove();
        this.placed = zB
      }
    }

    function TB(BB) {
      return new ZB(BB, VB)
    }

    function PB(BB) {
      return new AB(BB)
    }

    function WB(BB) {
      return new ZB(BB, XB)
    }
  },
  38906: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => rB
    });
    var QB = zB(37279),
      nB = zB(37286),
      dB = zB(37547),
      IB = zB(37291),
      NB = zB(37283);

    function uB(BB) {
      return `\n\t\t\t\t${(0,NB.w)(BB,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, NB.A)(BB, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, NB.A)(BB, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, NB.m)(BB, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function UB(BB, jB) {
      let zB = (0, NB.Ab)(BB, "skele" + (jB - 1));
      for (let nB = jB - 2; nB >= 0; nB--) zB = (0, NB.sb)(BB, `boneIdx == ${nB}`, (0, NB.Ab)(BB, `skele${nB}`), zB);
      const QB = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,NB.A)(BB,"int","boneIdx",(0,NB.wb)(BB,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,NB.A)(BB,"vec3","bone",zB)}\n\t\t\t\t${(0,NB.A)(BB,"vec2","pivot",(0,NB.m)(BB,"vec2","0.0",`${(0,NB.Gb)(BB,"position")}.z`))}\n\t\t\t\t${(0,NB.ab)(BB)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${QB}));`:`positionUpdated.yz += ${QB};`}\n\t\t`
    }

    function aB(BB) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,NB.m)(BB,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const pB = {
        x: 0,
        y: 0,
        z: 0,
        ljB(BB, jB) {
          return this.x = BB[jB], this.y = BB[jB + 1], this.z = BB[jB + 2], this
        }
      },
      rB = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (BB, jB) => ({
          ...(0, QB.b)("CAPE"),
          BLOXD_CAPE_BONES: `${BB}`,
          BLOXD_CAPE_MAX_Y: (0, nB.jb)(jB)
        }),
        getUniforms(BB) {
          return (0, dB.b)(function(BB) {
            const jB = [];
            for (let zB = 0; zB < BB; zB++) jB.push({
              name: `skele${zB}`,
              type: "highp vec3"
            });
            return jB
          }(this.skeleLen), "vertex", BB)
        },
        bind(BB) {
          for (let jB = 0; jB < this.skeleLen; jB++) BB.updateVector3(`skele${jB}`, pB.ljB(this.skele, 3 * jB))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(BB, jB) {
          return "vertex" !== BB ? null : {
            CUSTOM_VERTEX_DEFINITIONS: uB(jB),
            CUSTOM_VERTEX_UPDATE_POSITION: UB(jB, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: aB(jB)
          }
        }
      };
    (0, IB.l)(rB)
  },
  38794: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => aB,
      h: () => pB
    });
    var QB = zB(37279),
      nB = zB(37547),
      dB = zB(37283),
      IB = zB(37291);
    const NB = "bloxdTextLodBias",
      uB = [{
        name: NB,
        type: "float"
      }],
      UB = "bloxdTextSample",
      aB = {
        planes: -.5,
        boards: -.5
      },
      pB = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, QB.b)("TEXT_SAMPLER"),
        getUniforms: BB => (0, nB.b)(uB, "fragment", BB),
        bind(BB) {
          BB.updateFloat(NB, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(BB, jB) {
          if ("fragment" !== BB) return null;
          const zB = (0, dB.K)(jB, `vec4 ${UB}(sampler2D s, vec2 uv, float bias)`, `fn ${UB}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            QB = (0, dB.K)(jB, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            nB = `${(0,dB.T)(jB,"vDiffuseUV")} + uvOffset`,
            IB = (0, dB.K)(jB, `${UB}(diffuseSampler, ${nB}, ${(0,dB.Ab)(jB,NB)})`, `${UB}(diffuseSampler, diffuseSamplerSampler, ${nB}, ${(0,dB.Ab)(jB,NB)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${zB} {\n\t\t\t\t\t${(0,dB.A)(jB,"vec4","texel",QB)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,dB.m)(jB,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,dB.m)(jB,"vec3","0.0")}, ${(0,dB.m)(jB,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, dB.E)(jB)]: `baseColor = ${IB};`
          }
        }
      };
    (0, IB.l)(pB)
  },
  41215: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      CapeMaterialPlugin: () => gB,
      HueTintMaterialPlugin: () => tB,
      LifeformMaterialPlugin: () => SB,
      OverlayMaterialPlugin: () => MB
    });
    var QB = zB(41218),
      nB = zB(38096);
    class dB extends((0, QB.i)(nB.e)) {}(0, QB.j)(nB.e, dB);
    var IB = zB(37271);
    class NB extends((0, QB.i)(IB.f)) {}(0, QB.j)(IB.f, NB);
    var uB = zB(37936);
    class UB extends((0, QB.i)(uB.d)) {}(0, QB.j)(uB.d, UB);
    var aB = zB(37534),
      pB = zB(40350),
      rB = zB(37528);
    class sB extends((0, QB.i)(rB.d)) {
      constructor(BB, jB, zB) {
        super(BB, jB, zB), (0, aB.e)(BB)
      }
      dispose(BB) {
        (0, aB.f)(this._material), super.dispose(BB)
      }
    }(0, QB.j)(rB.d, sB), (0, rB.h)({
      disableUnusedSpecularTerm: QB.e,
      isLightingDisabled: BB => BB instanceof pB.StandardMaterial && BB.disableLighting
    });
    var JB = zB(38794);
    class mB extends((0, QB.i)(JB.h)) {}(0, QB.j)(JB.h, mB);
    var yB = zB(38906),
      kB = zB(37386),
      GB = zB(38204),
      LB = zB(37324);
    class gB extends((0, QB.i)(yB.d)) {}(0, QB.j)(yB.d, gB);
    class tB extends((0, QB.i)(kB.b)) {}(0, QB.j)(kB.b, tB);
    class SB extends((0, QB.i)(GB.k)) {}(0, QB.j)(GB.k, SB);
    class MB extends((0, QB.i)(LB.d)) {}(0, QB.j)(LB.d, MB)
  },
  41218: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => WB,
      i: () => GB,
      j: () => CB
    });
    var QB = zB(40350),
      nB = zB(41220),
      dB = zB(41266),
      IB = zB(41227),
      NB = zB(37908),
      uB = zB(37915),
      UB = zB(37924),
      aB = zB(37926),
      pB = zB(37315),
      rB = zB(37321),
      sB = zB(41231),
      JB = zB(37291),
      mB = zB(37300),
      yB = zB(37283);

    function kB(BB, jB) {
      return Object.assign((function(BB, zB, QB, nB) {
        return jB(this.featureState, BB, zB, QB, nB)
      }), {
        kJ: BB
      })
    }

    function GB(BB) {
      const jB = class extends sB.b {
          constructor(jB, zB) {
            const QB = (0, mB.eb)(jB),
              nB = QB && (0, mB.w)(QB, BB.name);
            for (var dB = arguments.length, IB = new Array(dB > 2 ? dB - 2 : 0), NB = 2; NB < dB; NB++) IB[NB - 2] = arguments[NB];
            super(jB, BB.name, BB.priority, nB ? nB.defines : BB.defines(...IB), !1), this.featureState = void 0, this.featureState = zB, this._pluginManager._addPlugin(this), this._enable(!0), (0, mB.z)(this._material, BB, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return BB.className
          }
          isCompatible(BB) {
            return BB === yB.c.GLSL || BB === yB.c.WGSL
          }
        },
        zB = (0, JB.g)(BB);
      for (const [QB, nB] of Object.entries(JB.d)) {
        const dB = BB[QB];
        if (dB) {
          const BB = zB[QB];
          Object.defineProperty(jB.prototype, nB, {
            value: kB(dB, BB),
            writable: !0,
            configurable: !0
          })
        }
      }
      return jB
    }
    class LB extends(GB(NB.d)) {}
    var gB = zB(39895),
      tB = zB(41240),
      SB = zB(41248);

    function MB(BB, jB, zB) {
      return (0, SB.h)(zB, jB.urls, (() => async function(BB, jB, zB) {
        const {
          width: QB
        } = BB[0].getSize(), nB = BB.map(((BB, zB) => {
          var nB;
          const dB = Math.round(BB.getSize().height / QB),
            IB = null === jB || void 0 === jB ? void 0 : jB[zB];
          return {
            pixels: IB && IB.byteLength === QB * QB * dB * 4 ? IB : null !== (nB = EB.get(BB.getInternalTexture())) && void 0 !== nB ? nB : BB._readPixelsSync(),
            layers: dB
          }
        })), dB = zB.wJ().getCaps().texture2DArrayMaxLayerCount, NB = (0, SB.d)(nB, QB, dB).map((BB => {
          let {
            pixels: jB,
            layers: nB
          } = BB;
          return {
            atlas: new tB.e(jB, QB, QB, nB, gB.b.TEXTUREFORMAT_RGBA, zB, !0, !1, IB.d.NEAREST_NEAREST_MIPLINEAR),
            layers: nB
          }
        }));
        return BB.forEach(((BB, jB) => {
          const QB = BB.getInternalTexture();
          EB.has(QB) || (! function(BB, jB) {
            const zB = jB.createRawTexture(new Uint8Array(4), 1, 1, gB.b.TEXTUREFORMAT_RGBA, !1, !1, IB.d.NEAREST_SAMPLINGMODE);
            BB._hardwareTexture.release(), jB.unbindAllTextures(), zB._swapAndDie(BB, !1)
          }(QB, zB.wJ()), EB.set(QB, nB[jB].pixels))
        })), NB
      }(BB, jB.pixels, zB)))
    }
    const EB = new WeakMap;
    var iB = zB(37934);
    class qB extends(GB(uB.h)) {
      constructor(BB, jB) {
        super(BB, jB), this.loaded = new Set, this.mirrors = void 0, this.mirrors = jB.textures.map((BB => BB.mirror)), this.mirrors.forEach(((BB, jB) => {
          BB.onLoadObservable.add((BB => {
            this.setTextureArrayData(BB, jB).catch((BB => {
              console.error(`Failed to build the texture arrays, at atlas ${jB}`, BB)
            }))
          }))
        })), (0, iB.i)(jB, BB.shaderLanguage)
      }
      async setTextureArrayData(BB, jB) {
        const zB = this.featureState,
          {
            width: QB,
            height: nB
          } = BB.getSize(),
          dB = this._material.shaderLanguage;
        if (!zB.useWebGL2) return void(0, iB.f)(this._material, zB, jB, QB, Math.round(nB / QB), dB);
        if (this.loaded.add(jB), this.loaded.size < this.mirrors.length) return;
        const IB = await MB(this.mirrors, zB.sources, this._material.aY());
        (0, iB.e)(this._material, zB, IB, QB, dB)
      }
    }
    var fB = zB(41251),
      oB = zB(40404),
      HB = zB(37166),
      DB = zB(41254),
      FB = zB(40519),
      YB = zB(40388),
      VB = zB(41200),
      hB = zB(37687),
      XB = zB(41260);
    class ZB extends fB.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const AB = {
      Mesh: DB.e,
      TransformNode: VB.e,
      oJ: fB.b,
      VertexBuffer: fB.d,
      BoundingInfo: oB.c,
      KJ: HB.KJ,
      ArenaBuffer: ZB,
      SubMesh: YB.d,
      VertexData: FB.e,
      MirroredGeometry: XB.d,
      meshFromArrays: XB.g,
      plainMeshFromArrays: XB.i
    };
    (0, hB.f)(AB);
    var TB = zB(37534);
    class PB extends(GB(aB.j)) {
      constructor(BB, jB) {
        if (super(BB, jB), BB instanceof QB.StandardMaterial && jB.dirLightCount > 0) {
          const jB = BB,
            zB = jB._blockDirtyMechanism;
          jB._blockDirtyMechanism = !0, BB.disableLighting = !0, jB._blockDirtyMechanism = zB;
          const QB = (0, mB.eb)(BB);
          QB && (QB.disableLighting = !0, (0, mB.ab)(QB))
        }(0, TB.e)(BB)
      }
      dispose(BB) {
        (0, TB.f)(this._material), super.dispose(BB)
      }
    }

    function WB(BB, jB) {
      if (!(jB instanceof QB.StandardMaterial) || jB.specularTexture) return;
      const {
        r: zB,
        g: nB,
        b: dB
      } = jB.specularColor;
      0 === zB && 0 === nB && 0 === dB && (BB.SPECULARTERM = !1)
    }(0, aB.h)({
      disableUnusedSpecularTerm: WB
    });
    var eB = zB(37408),
      lB = zB(37696);
    const wB = new RegExp(`^#define ${UB.e}\\s*$`, "m");
    class xB extends(GB(UB.i)) {
      constructor(BB, jB) {
        super(BB, jB), this.HJ = !1, jB.ditherOnlyWhileFading && (lB.g.add(BB), this.prewarmDitherTwins(BB))
      }
      prewarmDitherTwins(BB) {
        const jB = new WeakSet;
        BB.onEffectCreatedObservable.add((zB => {
          let {
            effect: QB,
            subMesh: nB
          } = zB;
          if (this.featureState.prewarmingDither || jB.has(QB)) return;
          jB.add(QB);
          const dB = null === nB || void 0 === nB ? void 0 : nB.getMesh();
          dB && !wB.test(QB.defines) && BB.aY().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(dB) || jB.delete(QB)
          }))
        }))
      }
      prewarmDither(BB) {
        if (this.HJ || BB.aE()) return !1;
        const jB = new YB.d(0, 0, 0, 0, 0, BB, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(BB, jB)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== jB.effect
      }
      dispose(BB) {
        this.HJ = !0, super.dispose(BB)
      }
    }
    const KB = new Map;

    function CB(BB, jB) {
      KB.set(BB, jB)
    }
    CB(NB.d, LB), CB(uB.h, qB), CB(UB.i, xB), CB(aB.j, PB), (0, pB.d)({
      create: (BB, jB) => {
        const zB = new QB.StandardMaterial(BB.name, jB);
        return (0, eB.k)(BB, zB), zB.detailMap._pluginDefineNames
      },
      write: (BB, jB, zB) => {
        (0, eB.J)(BB.mirror, jB, zB)
      },
      addFeature: (BB, jB, zB) => {
        const QB = KB.get(jB.feature);
        if (!QB) throw new Error(`${jB.feature.name} has no plugin class (registerPluginClass)`);
        new QB(BB.mirror, jB.state, ...zB)
      },
      texture: (BB, jB, zB) => {
        let {
          url: QB,
          noMipmap: nB,
          invertY: dB,
          samplingMode: NB,
          data: uB,
          sets: UB
        } = zB;
        if (!uB) {
          const zB = new IB.d(QB, jB, nB, dB, NB);
          return Object.assign(zB, UB), void(0, rB.M)(BB, zB)
        }
        const aB = {},
          pB = new Promise(((BB, jB) => {
            aB.onLoad = BB, aB.onError = (BB, zB) => {
              jB(new Error(`${uB.context}: ${(null===zB||void 0===zB?void 0:zB.message)||BB||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: sB,
            bytes: JB,
            label: mB
          } = uB,
          yB = {
            noMipmap: nB,
            invertY: !1,
            samplingMode: NB,
            ...aB,
            mimeType: sB,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          kB = new IB.d(null, jB, yB);
        eB.l.set(kB, pB), Object.assign(kB, UB), kB.updateURL(QB, JB);
        const GB = kB.getInternalTexture();
        GB && (GB.label = mB), BB.uvSet = kB.coordinatesIndex, BB.matrix.set((0, eB.C)(kB)), (0, rB.M)(BB, kB)
      },
      cube: (BB, jB, zB) => {
        let {
          rootUrl: QB,
          files: dB,
          noMipmap: NB,
          luminance: uB
        } = zB;
        const {
          samplingMode: UB
        } = BB.sampler, aB = UB === (0, rB.D)(NB) ? null : () => {
          (0, eB.y)(pB, UB)
        }, pB = new nB.c(QB, jB, null, NB, dB, aB, null, (0, rB.C)(uB));
        pB.coordinatesMode = IB.d.SKYBOX_MODE, (0, rB.M)(BB, pB)
      },
      canvas: (BB, jB, zB) => {
        let {
          width: QB,
          height: nB,
          mipmaps: NB,
          samplingMode: uB,
          hasAlpha: UB = !1,
          wrap: aB = IB.d.CLAMP_ADDRESSMODE
        } = zB;
        const pB = new dB.d(jB, {
          width: QB,
          height: nB
        }, BB, NB, uB);
        pB.hasAlpha = UB, pB.wrapU = aB, pB.wrapV = aB;
        const rB = (0, eB.t)(pB);
        return (0, eB.u)(rB, pB), rB
      }
    })
  },
  41260: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => aB,
      g: () => pB,
      i: () => rB
    });
    var QB = zB(41251),
      nB = zB(40125),
      dB = zB(40404),
      IB = zB(40525),
      NB = zB(41254),
      uB = zB(40519),
      UB = zB(37578);
    class aB extends IB.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (BB, jB) => {
          this.releaseUnlessInstanced(jB)
        }, this.onLinked = null
      }
      link(BB) {
        var jB;
        (0, UB.o)(BB), this.model = BB, null === (jB = this.onLinked) || void 0 === jB || jB.call(this, BB)
      }
      relink() {
        this.release();
        const BB = [];
        for (const nB of Object.values(this._vertexBuffers))
          if (!nB.getIsInstanced()) {
            const {
              byteOffset: jB,
              byteStride: zB,
              type: QB,
              normalized: dB
            } = nB;
            BB.push({
              kind: nB.getKind(),
              data: nB.getData(),
              offset: jB,
              stride: zB,
              components: nB.getSize(),
              glType: QB,
              isNormalized: dB
            })
          } const jB = this._indices.length ? this._indices : null,
          {
            minimum: zB,
            maximum: QB
          } = this.extend;
        this.link(new UB.h(BB, jB, this.getTotalVertices(), new Float64Array(zB.nQB()), new Float64Array(QB.nQB())))
      }
      copy(BB) {
        if (!this.model) return super.copy(BB);
        const jB = new aB(BB, this.aY()),
          zB = this.dQB(void 0, !0);
        zB && jB.setIndices(zB);
        let IB = !1;
        for (const dB in this._vertexBuffers) {
          const BB = this._vertexBuffers[dB],
            zB = BB.getData();
          if (!zB) continue;
          const NB = BB.getSize(),
            {
              type: uB,
              byteOffset: UB,
              byteStride: aB,
              normalized: pB
            } = BB;
          IB ||= BB.isUpdatable();
          const rB = BB.getIsInstanced() ? (zB instanceof Array ? 4 * zB.length : zB.byteLength) / aB : this.getTotalVertices(),
            sB = (0, nB.t)(zB, NB, uB, UB, aB, rB, !0),
            JB = {
              updatable: BB.isUpdatable(),
              stride: NB,
              type: uB,
              normalized: pB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            };
          jB.setVerticesBuffer(new QB.d(this.wJ(), sB, dB, JB), rB)
        }
        return jB._updatable = IB, jB._boundingInfo = new dB.c(this.extend.minimum, this.extend.maximum), jB.relink(), jB
      }
      static mergeMeshes(BB, jB, zB, QB, nB, dB) {
        const uB = BB[0].aY(),
          UB = new NB.e(BB[0].name + "_merged", uB),
          pB = new aB(IB.c.RandomId(), uB, void 0, !1, UB);
        try {
          if (!NB.e.MergeMeshes(BB, jB, zB, UB, nB, dB)) return UB.dispose(), null
        } catch (rB) {
          throw UB.dispose(), rB
        }
        return pB.relink(), UB
      }
      removeVerticesData(BB) {
        this.releaseUnlessInstanced(BB), super.removeVerticesData(BB)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(BB) {
        var jB;
        BB && null !== (jB = this.getVertexBuffer(BB)) && void 0 !== jB && jB.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, UB.z)(this.model), this.model = null)
      }
    }

    function pB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NB.e(BB, zB);
      const nB = (0, UB.m)(jB),
        {
          positions: dB,
          normals: pB,
          uvs: rB,
          indices: sB,
          named: JB = {}
        } = jB,
        mB = new uB.e;
      mB.positions = dB, mB.normals = null !== pB && void 0 !== pB ? pB : null, mB.uvs = null !== rB && void 0 !== rB ? rB : null, mB.indices = sB;
      const yB = new aB(IB.c.RandomId(), zB, mB, !1, QB);
      for (const {
          kind: IB,
          components: NB
        }
        of nB.vertexAttributes) IB in JB && QB.setVerticesData(IB, JB[IB], !1, NB);
      return yB.link(nB), QB
    }

    function rB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const nB = new NB.e(BB, zB),
        {
          positions: dB,
          normals: IB,
          uvs: UB,
          indices: aB
        } = jB;
      return Object.assign(new uB.e, {
        positions: dB,
        normals: IB,
        uvs: UB,
        indices: aB
      }).applyToMesh(nB, QB), nB
    }
  },
  41248: (BB, jB, zB) => {
    function QB(BB, jB, zB) {
      const QB = jB * jB * 4,
        nB = BB[0].layers,
        dB = nB * (BB.length - 1) + BB[BB.length - 1].layers,
        IB = new Uint8Array(dB * QB);
      BB.forEach(((jB, zB) => {
        const dB = zB + 1 < BB.length ? Math.min(jB.layers, nB) : jB.layers;
        IB.set(new Uint8Array(jB.pixels.buffer, jB.pixels.byteOffset, dB * QB), zB * nB * QB)
      }));
      const NB = Math.max(1, Math.min(dB, zB || dB));
      if (NB === dB) return [{
        pixels: IB,
        layers: dB
      }];
      const uB = [];
      for (let UB = 0; UB < dB; UB += NB) {
        const BB = Math.min(dB, UB + NB);
        uB.push({
          pixels: IB.slice(UB * QB, BB * QB),
          layers: BB - UB
        })
      }
      return uB
    }
    zB.d(jB, {
      d: () => QB,
      h: () => dB
    });
    const nB = new WeakMap;

    function dB(BB, jB, zB) {
      var QB, dB;
      const IB = null !== (QB = nB.get(BB)) && void 0 !== QB ? QB : new Map;
      nB.set(BB, IB);
      const NB = null !== (dB = IB.get(jB[0])) && void 0 !== dB ? dB : [];
      IB.set(jB[0], NB);
      const uB = NB.find((BB => BB.urls.length === jB.length && BB.urls.every(((BB, zB) => BB === jB[zB]))));
      if (uB) return uB.built;
      const UB = {
        urls: [...jB],
        built: zB()
      };
      return NB.push(UB), UB.built.catch((() => {
        NB.splice(NB.indexOf(UB), 1)
      })), UB.built
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);