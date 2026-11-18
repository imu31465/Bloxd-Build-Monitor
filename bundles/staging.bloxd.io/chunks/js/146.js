export const id = 146;
export const ids = [146];
export const modules = {
  39925: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      openMobLineupPreview: () => ZB,
      openMobPreview: () => aB,
      openPetPreview: () => XB
    });
    var VB = dB(38562),
      yB = dB(38840),
      pB = dB(39929),
      lB = dB(36180),
      JB = dB(36119),
      YB = dB(39001),
      gB = dB(39949),
      oB = dB(37420),
      kB = dB(36529),
      LB = dB(36491),
      OB = dB(36515),
      DB = dB(37320),
      uB = dB(37311),
      HB = dB(37038),
      EB = dB(37090),
      vB = dB(37059),
      mB = dB(36702),
      iB = dB(2385),
      NB = dB(36479);
    dB(39955), dB(39222), dB(39959);
    const tB = 22,
      fB = 13,
      sB = Math.PI - Math.PI / 16,
      MB = 6,
      zB = Math.PI / 4;
    let wB = null;
    const UB = {},
      FB = new Map;

    function KB() {
      if (null !== wB) return wB;
      const BB = document.createElement("canvas");
      BB.classList.add("MobPreviewCanvas");
      const TB = new VB.d(BB, !0, {
        preserveDrawingBuffer: !0
      });
      TB.fVB = (0, iB.d)().yu.engine.fVB;
      const dB = new yB.c(TB);
      dB.clearColor = new lB.d(0, 0, 0, 0), dB.ambientColor = new lB.Color3(1, 1, 1);
      const gB = new pB.b("tH", Math.PI / 2, Math.PI / 2, tB, JB.RD.Zero(), dB),
        oB = new YB.c("light", new JB.RD(-.1, 1, -.3), dB);
      return oB.diffuse = new lB.Color3(1, 1, 1), oB.specular = new lB.Color3(1, 1, 1), oB.groundColor = new lB.Color3(.5, .5, .5), wB = {
        engine: TB,
        Gu: dB,
        canvas: BB,
        camera: gB
      }, wB
    }

    function rB(BB) {
      return UB[BB] ??= (0, HB.z)(BB, KB().Gu, !0).catch((TB => {
        throw delete UB[BB], TB
      })), UB[BB]
    }

    function IB(BB) {
      let TB = FB.get(BB);
      return TB || (TB = mB.A[BB].loadModel(KB().Gu, !1).then((BB => (BB.hN(!1), BB)), (TB => {
        throw FB.delete(BB), TB
      })), FB.set(BB, TB)), TB
    }

    function cB(BB) {
      var TB, dB, VB;
      let {
        mobType: yB,
        variation: pB,
        animation: lB
      } = BB, YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, tB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const MB = null !== (TB = null === YB || void 0 === YB ? void 0 : YB.size) && void 0 !== TB ? TB : 1,
        zB = null !== (dB = null === YB || void 0 === YB ? void 0 : YB.cosmetics) && void 0 !== dB ? dB : [],
        wB = null !== (VB = null === YB || void 0 === YB ? void 0 : YB.mN) && void 0 !== VB ? VB : null;
      let UB = !1,
        FB = null,
        cB = null;
      const {
        engine: SB,
        Gu: PB
      } = KB(), QB = PB.onBeforeRenderObservable.add((() => {
        var BB;
        null === (BB = cB) || void 0 === BB || BB.render(SB.getDeltaTime())
      })), RB = null === wB ? null : IB(wB).catch((BB => (console.error(`Mob preview: could not load ${wB}`, BB), null)));
      return Promise.all([rB(yB), RB]).then((BB => {
        var TB, dB, VB;
        let [YB, rB] = BB;
        if (UB) return;
        const IB = (0, iB.d)().yu.YF,
          {
            hitBoxDimensions: SB
          } = (0, oB.d)(yB),
          PB = fB / Math.max(SB.height, SB.width);
        if (FB = (0, HB.m)(yB, PB * MB, !0, !0), IB.setPosition(FB, tB, -SB.height * PB / 2, 0), IB.setRotationEulerY(FB, sB), YB.meshApi instanceof vB.e && zB.length > 0)
          for (const [yB, pB] of zB) YB.meshApi.updatePlayerCosmetic(null, FB, yB, pB, !0);
        else YB.meshApi.updateVariation(FB, yB, null !== pB && void 0 !== pB ? pB : "default");
        null !== wB && null !== rB && function(BB, TB, dB, VB) {
          var yB;
          const pB = mB.A[BB],
            lB = (0, DB.o)();
          (0, DB.i)(pB, null === (yB = (0, EB.c)(dB).meshMetadata.heldItemPositionParams) || void 0 === yB ? void 0 : yB.itemOffset, lB);
          const YB = NB.b * lB.al.y,
            oB = lB.usesQuaternion ? lB.quaternion : JB.Quaternion.FromEulerVector(lB.rotation),
            kB = new gB.c(`${TB.name}Hand`, KB().Gu);
          kB.position.bdB((0, uB.d)(lB.position, oB, YB, pB.heldModelOffsetY())), kB.rotationQuaternion = oB, kB.al.set(lB.al.x, YB, lB.al.z), TB.clone(`${TB.name}Held`, kB).hN(!0);
          const LB = (0, iB.d)().yu.YF;
          LB.attachTransformNode(kB, VB, LB.getNamedNode(VB, "ArmRightMesh"))
        }(wB, rB, yB, FB), IB.set(FB, "aOpacity", 1);
        const QB = null !== (TB = (0, EB.c)(yB).meshMetadata.lifeformTypeForModelOverride) && void 0 !== TB ? TB : yB;
        cB = new OB.AnimatorState, cB.thinInstMgr = IB, cB.kF = FB, cB.jdB = IB.sVB(FB, 0), cB.modelLifeformType = QB, cB.nodeNameAliases = null !== (dB = null === (VB = (0, kB.c)(QB)) || void 0 === VB ? void 0 : VB.nodeNameAliases) && void 0 !== dB ? dB : null, cB.startAnimation(lB, LB.f.Movement)
      })).catch((BB => {
        console.error(`Mob preview: could not load ${yB}`, BB)
      })), () => {
        UB = !0, PB.onBeforeRenderObservable.remove(QB), null !== FB && (0, iB.d)().yu.YF.delete(FB)
      }
    }

    function SB(BB, TB) {
      return cB({
        mobType: "NPC",
        variation: null,
        animation: BB.animation
      }, BB, TB)
    }

    function PB(BB) {
      let {
        mobType: TB,
        variation: dB,
        metaInfo: VB,
        tamed: yB
      } = BB, pB = !1, lB = null, JB = 0;
      const YB = (0, iB.d)(),
        gB = YB.yu.YF,
        oB = BB => {
          JB += zB * (BB / 1e3) % (2 * Math.PI), gB.setRotationEulerY(lB, JB)
        };
      return rB(TB).then((BB => {
        if (pB) return;
        lB = (0, HB.m)(TB, MB, !0, !0), gB.setPosition(lB, 0, -MB, 0), BB.meshApi.updateVariation(lB, TB, dB);
        const JB = {
          wool: "Sheared" !== VB,
          saddle: "Saddled" === VB,
          antlers: "Antlers" === VB,
          collar: yB
        };
        for (const [TB, dB] of Object.entries(JB)) gB.hasGroup(lB, TB) && BB.meshApi.setMeshGroupVisibility(lB, TB, dB);
        gB.set(lB, "aOpacity", 1), YB.on("renderTickBegin", oB)
      })).catch((BB => {
        console.error(`Pet preview: could not load ${TB}`, BB)
      })), () => {
        pB = !0, YB.off("renderTickBegin", oB), null !== lB && gB.delete(lB)
      }
    }
    class QB {
      constructor(BB, TB) {
        this.place = TB, this.remove = null;
        const {
          engine: dB,
          Gu: VB,
          canvas: yB
        } = KB();
        BB.appendChild(yB), dB.resize(), dB.runRenderLoop((() => {
          VB.render()
        }))
      }
      show(BB) {
        var TB;
        null === (TB = this.remove) || void 0 === TB || TB.call(this), this.remove = this.place(BB)
      }
      resize(BB, TB) {
        const {
          engine: dB,
          canvas: VB
        } = KB();
        VB.width = BB, VB.height = TB, dB.resize()
      }
      close() {
        var BB;
        KB().engine.stopRenderLoop(), null === (BB = this.remove) || void 0 === BB || BB.call(this), this.remove = null
      }
    }
    class RB {
      constructor(BB) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new QB(BB, (() => () => {}))
      }
      show(BB) {
        BB.figures !== this.view.figures && this.preload(BB.figures), this.view = BB, this.place()
      }
      resize(BB, TB) {
        this.preview.resize(BB, TB), this.aspect = BB / TB, this.place()
      }
      close() {
        this.preview.close();
        for (const BB of this.placed) null === BB || void 0 === BB || BB.remove();
        this.placed = []
      }
      preload(BB) {
        const TB = () => {};
        rB("NPC").catch(TB);
        for (const {
            mN: dB
          }
          of BB) null !== dB && IB(dB).catch(TB)
      }
      place() {
        const {
          figures: BB,
          shown: TB
        } = this.view, dB = BB.map(((dB, VB) => {
          var yB;
          const pB = null !== (yB = this.placed[VB]) && void 0 !== yB ? yB : null;
          if (!TB[VB]) return null === pB || void 0 === pB || pB.remove(), null;
          const lB = (JB = (VB + .5) / BB.length, YB = this.aspect, (.5 - JB) * (2 * tB * Math.tan(KB().camera.fov / 2)) * YB);
          var JB, YB;
          return null !== pB && pB.figure === dB && pB.x === lB ? pB : (null === pB || void 0 === pB || pB.remove(), {
            figure: dB,
            x: lB,
            remove: SB(dB, lB)
          })
        }));
        for (const VB of this.placed.slice(BB.length)) null === VB || void 0 === VB || VB.remove();
        this.placed = dB
      }
    }

    function aB(BB) {
      return new QB(BB, cB)
    }

    function ZB(BB) {
      return new RB(BB)
    }

    function XB(BB) {
      return new QB(BB, PB)
    }
  },
  37767: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => LB
    });
    var VB = dB(36024),
      yB = dB(36041),
      pB = dB(36292),
      lB = dB(36050),
      JB = dB(36033);

    function YB(BB) {
      return `\n\t\t\t\t${(0,JB.z)(BB,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, JB.F)(BB, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, JB.F)(BB, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, JB.o)(BB, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function gB(BB, TB) {
      let dB = (0, JB.Fb)(BB, "skele" + (TB - 1));
      for (let yB = TB - 2; yB >= 0; yB--) dB = (0, JB.xb)(BB, `boneIdx == ${yB}`, (0, JB.Fb)(BB, `skele${yB}`), dB);
      const VB = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,JB.F)(BB,"int","boneIdx",(0,JB.Cb)(BB,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,JB.F)(BB,"vec3","bone",dB)}\n\t\t\t\t${(0,JB.F)(BB,"vec2","pivot",(0,JB.o)(BB,"vec2","0.0",`${(0,JB.Qb)(BB,"position")}.z`))}\n\t\t\t\t${(0,JB.fb)(BB)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${VB}));`:`positionUpdated.yz += ${VB};`}\n\t\t`
    }

    function oB(BB) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,JB.o)(BB,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const kB = {
        x: 0,
        y: 0,
        z: 0,
        HdB(BB, TB) {
          return this.x = BB[TB], this.y = BB[TB + 1], this.z = BB[TB + 2], this
        }
      },
      LB = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (BB, TB) => ({
          ...(0, VB.c)("CAPE"),
          BLOXD_CAPE_BONES: `${BB}`,
          BLOXD_CAPE_MAX_Y: (0, yB.kb)(TB)
        }),
        getUniforms(BB) {
          return (0, pB.e)(function(BB) {
            const TB = [];
            for (let dB = 0; dB < BB; dB++) TB.push({
              name: `skele${dB}`,
              type: "highp vec3"
            });
            return TB
          }(this.skeleLen), "vertex", BB)
        },
        bind(BB) {
          for (let TB = 0; TB < this.skeleLen; TB++) BB.updateVector3(`skele${TB}`, kB.HdB(this.skele, 3 * TB))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(BB, TB) {
          return "vertex" !== BB ? null : {
            CUSTOM_VERTEX_DEFINITIONS: YB(TB),
            CUSTOM_VERTEX_UPDATE_POSITION: gB(TB, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: oB(TB)
          }
        }
      };
    (0, lB.i)(LB)
  },
  37661: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => oB,
      i: () => kB
    });
    var VB = dB(36024),
      yB = dB(36292),
      pB = dB(36033),
      lB = dB(36050);
    const JB = "bloxdTextLodBias",
      YB = [{
        name: JB,
        type: "float"
      }],
      gB = "bloxdTextSample",
      oB = {
        planes: -.5,
        boards: -.5
      },
      kB = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, VB.c)("TEXT_SAMPLER"),
        getUniforms: BB => (0, yB.e)(YB, "fragment", BB),
        bind(BB) {
          BB.updateFloat(JB, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(BB, TB) {
          if ("fragment" !== BB) return null;
          const dB = (0, pB.N)(TB, `vec4 ${gB}(sampler2D s, vec2 uv, float bias)`, `fn ${gB}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            VB = (0, pB.N)(TB, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            yB = `${(0,pB.Y)(TB,"vDiffuseUV")} + uvOffset`,
            lB = (0, pB.N)(TB, `${gB}(diffuseSampler, ${yB}, ${(0,pB.Fb)(TB,JB)})`, `${gB}(diffuseSampler, diffuseSamplerSampler, ${yB}, ${(0,pB.Fb)(TB,JB)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${dB} {\n\t\t\t\t\t${(0,pB.F)(TB,"vec4","texel",VB)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,pB.o)(TB,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,pB.o)(TB,"vec3","0.0")}, ${(0,pB.o)(TB,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, pB.H)(TB)]: `baseColor = ${lB};`
          }
        }
      };
    (0, lB.i)(kB)
  },
  8155: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => oB,
      h: () => JB,
      i: () => YB
    });
    var VB = dB(1978),
      yB = dB(1117),
      pB = dB(1985);
    const lB = ",";

    function JB(BB) {
      if (!BB) return [];
      const TB = new Set,
        dB = [];
      for (const VB of BB.split(lB)) {
        const BB = VB.trim();
        if ((0, pB.k)(BB) && !TB.has(BB) && (TB.add(BB), dB.push(BB), dB.length >= yB.k)) break
      }
      return dB
    }

    function YB(BB) {
      const TB = new Set,
        dB = [];
      for (const VB of BB)
        if ((0, pB.k)(VB) && !TB.has(VB) && (TB.add(VB), dB.push(VB), dB.length >= yB.k)) break;
      return dB.join(lB)
    }

    function gB() {
      return YB(pB.e)
    }

    function oB(BB) {
      var TB;
      return "emote" === BB ? gB() : null !== (TB = kB[BB][0]) && void 0 !== TB ? TB : LB[BB]
    }
    const kB = yB.q.reduce(((BB, TB) => {
        const dB = [];
        for (const pB in VB.d[TB]) {
          var yB;
          "default" === (null === (yB = (0, VB.h)(TB, pB)) || void 0 === yB ? void 0 : yB.cosmeticPack) && dB.push(pB)
        }
        return BB[TB] = dB, BB
      }), {}),
      LB = yB.q.reduce(((BB, TB) => (BB[TB] = Object.keys(VB.d[TB])[0], BB)), {})
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);