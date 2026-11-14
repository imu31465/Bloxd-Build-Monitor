export const id = 142;
export const ids = [142];
export const modules = {
  39045: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      openMobLineupPreview: () => sF,
      openMobPreview: () => yW,
      openPetPreview: () => nF
    });
    var CF = SF(37783),
      AF = SF(38053),
      uF = SF(39053),
      hF = SF(35671),
      bW = SF(35617),
      dF = SF(38214),
      PF = SF(39075),
      RF = SF(36909),
      iW = SF(36011),
      eF = SF(35977),
      EF = SF(36003),
      QF = SF(36823),
      rW = SF(36817),
      gW = SF(36549),
      tW = SF(36597),
      TF = SF(36572),
      aW = SF(36191),
      kW = SF(2180),
      qW = SF(35967);
    SF(39079), SF(38456), SF(39084);
    const VF = 22,
      NF = 13,
      DF = Math.PI - Math.PI / 16,
      LF = 6,
      mW = Math.PI / 4;
    let OF = null;
    const xW = {},
      ZF = new Map;

    function oF() {
      if (null !== OF) return OF;
      const FF = document.createElement("canvas");
      FF.classList.add("MobPreviewCanvas");
      const WF = new CF.d(FF, !0, {
        preserveDrawingBuffer: !0
      });
      WF.QPF = (0, kW.h)().dA.engine.QPF;
      const SF = new AF.e(WF);
      SF.clearColor = new hF.d(0, 0, 0, 0), SF.ambientColor = new hF.Color3(1, 1, 1);
      const PF = new uF.e("Kh", Math.PI / 2, Math.PI / 2, VF, bW.HC.Zero(), SF),
        RF = new dF.d("light", new bW.HC(-.1, 1, -.3), SF);
      return RF.diffuse = new hF.Color3(1, 1, 1), RF.specular = new hF.Color3(1, 1, 1), RF.groundColor = new hF.Color3(.5, .5, .5), OF = {
        engine: WF,
        ju: SF,
        canvas: FF,
        camera: PF
      }, OF
    }

    function YF(FF) {
      return xW[FF] ??= (0, gW.w)(FF, oF().ju, !0).catch((WF => {
        throw delete xW[FF], WF
      })), xW[FF]
    }

    function MF(FF) {
      let WF = ZF.get(FF);
      return WF || (WF = aW.G[FF].loadModel(oF().ju, !1).then((FF => (FF.MWF(!1), FF)), (WF => {
        throw ZF.delete(FF), WF
      })), ZF.set(FF, WF)), WF
    }

    function cW(FF) {
      var WF, SF, CF;
      let {
        mobType: AF,
        variation: uF,
        animation: hF
      } = FF, dF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, VF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const LF = null !== (WF = null === dF || void 0 === dF ? void 0 : dF.size) && void 0 !== WF ? WF : 1,
        mW = null !== (SF = null === dF || void 0 === dF ? void 0 : dF.cosmetics) && void 0 !== SF ? SF : [],
        OF = null !== (CF = null === dF || void 0 === dF ? void 0 : dF.qV) && void 0 !== CF ? CF : null;
      let xW = !1,
        ZF = null,
        cW = null;
      const {
        engine: GF,
        ju: zW
      } = oF(), IF = zW.onBeforeRenderObservable.add((() => {
        var FF;
        null === (FF = cW) || void 0 === FF || FF.render(GF.getDeltaTime())
      })), fF = null === OF ? null : MF(OF).catch((FF => (console.error(`Mob preview: could not load ${OF}`, FF), null)));
      return Promise.all([YF(AF), fF]).then((FF => {
        var WF, SF, CF;
        let [dF, YF] = FF;
        if (xW) return;
        const MF = (0, kW.h)().dA.oWF,
          {
            hitBoxDimensions: GF
          } = (0, RF.d)(AF),
          zW = NF / Math.max(GF.height, GF.width);
        if (ZF = (0, gW.h)(AF, zW * LF, !0, !0), MF.setPosition(ZF, VF, -GF.height * zW / 2, 0), MF.setRotationEulerY(ZF, DF), dF.meshApi instanceof TF.e && mW.length > 0)
          for (const [AF, uF] of mW) dF.meshApi.updatePlayerCosmetic(null, ZF, AF, uF, !0);
        else dF.meshApi.updateVariation(ZF, AF, null !== uF && void 0 !== uF ? uF : "default");
        null !== OF && null !== YF && function(FF, WF, SF, CF) {
          var AF;
          const uF = aW.G[FF],
            hF = (0, QF.l)();
          (0, QF.g)(uF, null === (AF = (0, tW.e)(SF).meshMetadata.heldItemPositionParams) || void 0 === AF ? void 0 : AF.itemOffset, hF);
          const dF = qW.e * hF.Ah.y,
            RF = hF.usesQuaternion ? hF.quaternion : bW.Quaternion.FromEulerVector(hF.rotation),
            iW = new PF.c(`${WF.name}Hand`, oF().ju);
          iW.position.fdF((0, rW.d)(hF.position, RF, dF, uF.heldModelOffsetY())), iW.rotationQuaternion = RF, iW.Ah.set(hF.Ah.x, dF, hF.Ah.z), WF.clone(`${WF.name}Held`, iW).MWF(!0);
          const eF = (0, kW.h)().dA.oWF;
          eF.attachTransformNode(iW, CF, eF.getNamedNode(CF, "ArmRightMesh"))
        }(OF, YF, AF, ZF), MF.set(ZF, "aOpacity", 1);
        const IF = null !== (WF = (0, tW.e)(AF).meshMetadata.lifeformTypeForModelOverride) && void 0 !== WF ? WF : AF;
        cW = new EF.AnimatorState, cW.thinInstMgr = MF, cW.YWF = ZF, cW.zPF = MF.rRF(ZF, 0), cW.modelLifeformType = IF, cW.nodeNameAliases = null !== (SF = null === (CF = (0, iW.e)(IF)) || void 0 === CF ? void 0 : CF.nodeNameAliases) && void 0 !== SF ? SF : null, cW.startAnimation(hF, eF.d.Movement)
      })).catch((FF => {
        console.error(`Mob preview: could not load ${AF}`, FF)
      })), () => {
        xW = !0, zW.onBeforeRenderObservable.remove(IF), null !== ZF && (0, kW.h)().dA.oWF.delete(ZF)
      }
    }

    function GF(FF, WF) {
      return cW({
        mobType: "NPC",
        variation: null,
        animation: FF.animation
      }, FF, WF)
    }

    function zW(FF) {
      let {
        mobType: WF,
        variation: SF,
        shownGroups: CF
      } = FF, AF = !1, uF = null, hF = 0;
      const bW = (0, kW.h)(),
        dF = bW.dA.oWF,
        PF = FF => {
          hF += mW * (FF / 1e3) % (2 * Math.PI), dF.setRotationEulerY(uF, hF)
        };
      return YF(WF).then((FF => {
        if (!AF) {
          uF = (0, gW.h)(WF, LF, !0, !0), dF.setPosition(uF, 0, -LF, 0), FF.meshApi.updateVariation(uF, WF, SF);
          for (const WF of Object.keys(CF)) dF.hasGroup(uF, WF) && FF.meshApi.setMeshGroupVisibility(uF, WF, CF[WF]);
          dF.set(uF, "aOpacity", 1), bW.on("renderTickBegin", PF)
        }
      })).catch((FF => {
        console.error(`Pet preview: could not load ${WF}`, FF)
      })), () => {
        AF = !0, bW.off("renderTickBegin", PF), null !== uF && dF.delete(uF)
      }
    }
    class IF {
      constructor(FF, WF) {
        this.place = WF, this.remove = null;
        const {
          engine: SF,
          ju: CF,
          canvas: AF
        } = oF();
        FF.appendChild(AF), SF.resize(), SF.runRenderLoop((() => {
          CF.render()
        }))
      }
      show(FF) {
        var WF;
        null === (WF = this.remove) || void 0 === WF || WF.call(this), this.remove = this.place(FF)
      }
      resize(FF, WF) {
        const {
          engine: SF,
          canvas: CF
        } = oF();
        CF.width = FF, CF.height = WF, SF.resize()
      }
      close() {
        var FF;
        oF().engine.stopRenderLoop(), null === (FF = this.remove) || void 0 === FF || FF.call(this), this.remove = null
      }
    }
    class fF {
      constructor(FF) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new IF(FF, (() => () => {}))
      }
      show(FF) {
        FF.figures !== this.view.figures && this.preload(FF.figures), this.view = FF, this.place()
      }
      resize(FF, WF) {
        this.preview.resize(FF, WF), this.aspect = FF / WF, this.place()
      }
      close() {
        this.preview.close();
        for (const FF of this.placed) null === FF || void 0 === FF || FF.remove();
        this.placed = []
      }
      preload(FF) {
        const WF = () => {};
        YF("NPC").catch(WF);
        for (const {
            qV: SF
          }
          of FF) null !== SF && MF(SF).catch(WF)
      }
      place() {
        const {
          figures: FF,
          shown: WF
        } = this.view, SF = FF.map(((SF, CF) => {
          var AF;
          const uF = null !== (AF = this.placed[CF]) && void 0 !== AF ? AF : null;
          if (!WF[CF]) return null === uF || void 0 === uF || uF.remove(), null;
          const hF = (bW = (CF + .5) / FF.length, dF = this.aspect, (.5 - bW) * (2 * VF * Math.tan(oF().camera.fov / 2)) * dF);
          var bW, dF;
          return null !== uF && uF.figure === SF && uF.x === hF ? uF : (null === uF || void 0 === uF || uF.remove(), {
            figure: SF,
            x: hF,
            remove: GF(SF, hF)
          })
        }));
        for (const CF of this.placed.slice(FF.length)) null === CF || void 0 === CF || CF.remove();
        this.placed = SF
      }
    }

    function yW(FF) {
      return new IF(FF, cW)
    }

    function sF(FF) {
      return new fF(FF)
    }

    function nF(FF) {
      return new IF(FF, zW)
    }
  },
  37185: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => eF
    });
    var CF = SF(35543),
      AF = SF(35555),
      uF = SF(35795),
      hF = SF(35559),
      bW = SF(35551);

    function dF(FF) {
      return `\n\t\t\t\t${(0,bW.u)(FF,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, bW.y)(FF, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, bW.y)(FF, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, bW.p)(FF, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function PF(FF, WF) {
      let SF = (0, bW.pb)(FF, "skele" + (WF - 1));
      for (let AF = WF - 2; AF >= 0; AF--) SF = (0, bW.fb)(FF, `boneIdx == ${AF}`, (0, bW.pb)(FF, `skele${AF}`), SF);
      const CF = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,bW.y)(FF,"int","boneIdx",(0,bW.kb)(FF,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,bW.y)(FF,"vec3","bone",SF)}\n\t\t\t\t${(0,bW.y)(FF,"vec2","pivot",(0,bW.p)(FF,"vec2","0.0",`${(0,bW.zb)(FF,"position")}.z`))}\n\t\t\t\t${(0,bW.N)(FF)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${CF}));`:`positionUpdated.yz += ${CF};`}\n\t\t`
    }

    function RF(FF) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,bW.p)(FF,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const iW = {
        x: 0,
        y: 0,
        z: 0,
        udF(FF, WF) {
          return this.x = FF[WF], this.y = FF[WF + 1], this.z = FF[WF + 2], this
        }
      },
      eF = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (FF, WF) => ({
          ...(0, CF.c)("CAPE"),
          BLOXD_CAPE_BONES: `${FF}`,
          BLOXD_CAPE_MAX_Y: (0, AF.rb)(WF)
        }),
        getUniforms(FF) {
          return (0, uF.e)(function(FF) {
            const WF = [];
            for (let SF = 0; SF < FF; SF++) WF.push({
              name: `skele${SF}`,
              type: "highp vec3"
            });
            return WF
          }(this.skeleLen), "vertex", FF)
        },
        bind(FF) {
          for (let WF = 0; WF < this.skeleLen; WF++) FF.updateVector3(`skele${WF}`, iW.udF(this.skele, 3 * WF))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(FF, WF) {
          return "vertex" !== FF ? null : {
            CUSTOM_VERTEX_DEFINITIONS: dF(WF),
            CUSTOM_VERTEX_UPDATE_POSITION: PF(WF, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: RF(WF)
          }
        }
      };
    (0, hF.q)(eF)
  },
  37087: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => RF,
      g: () => iW
    });
    var CF = SF(35543),
      AF = SF(35795),
      uF = SF(35551),
      hF = SF(35559);
    const bW = "bloxdTextLodBias",
      dF = [{
        name: bW,
        type: "float"
      }],
      PF = "bloxdTextSample",
      RF = {
        planes: -.5,
        boards: -.5
      },
      iW = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, CF.c)("TEXT_SAMPLER"),
        getUniforms: FF => (0, AF.e)(dF, "fragment", FF),
        bind(FF) {
          FF.updateFloat(bW, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(FF, WF) {
          if ("fragment" !== FF) return null;
          const SF = (0, uF.C)(WF, `vec4 ${PF}(sampler2D s, vec2 uv, float bias)`, `fn ${PF}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            CF = (0, uF.C)(WF, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            AF = `${(0,uF.I)(WF,"vDiffuseUV")} + uvOffset`,
            hF = (0, uF.C)(WF, `${PF}(diffuseSampler, ${AF}, ${(0,uF.pb)(WF,bW)})`, `${PF}(diffuseSampler, diffuseSamplerSampler, ${AF}, ${(0,uF.pb)(WF,bW)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${SF} {\n\t\t\t\t\t${(0,uF.y)(WF,"vec4","texel",CF)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,uF.p)(WF,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,uF.p)(WF,"vec3","0.0")}, ${(0,uF.p)(WF,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, uF.z)(WF)]: `baseColor = ${hF};`
          }
        }
      };
    (0, hF.q)(iW)
  },
  7744: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => RF,
      g: () => bW,
      h: () => dF
    });
    var CF = SF(1834),
      AF = SF(1101),
      uF = SF(1841);
    const hF = ",";

    function bW(FF) {
      if (!FF) return [];
      const WF = new Set,
        SF = [];
      for (const CF of FF.split(hF)) {
        const FF = CF.trim();
        if ((0, uF.k)(FF) && !WF.has(FF) && (WF.add(FF), SF.push(FF), SF.length >= AF.m)) break
      }
      return SF
    }

    function dF(FF) {
      const WF = new Set,
        SF = [];
      for (const CF of FF)
        if ((0, uF.k)(CF) && !WF.has(CF) && (WF.add(CF), SF.push(CF), SF.length >= AF.m)) break;
      return SF.join(hF)
    }

    function PF() {
      return dF(uF.f)
    }

    function RF(FF) {
      var WF;
      return "emote" === FF ? PF() : null !== (WF = iW[FF][0]) && void 0 !== WF ? WF : eF[FF]
    }
    const iW = AF.v.reduce(((FF, WF) => {
        const SF = [];
        for (const uF in CF.i[WF]) {
          var AF;
          "default" === (null === (AF = (0, CF.n)(WF, uF)) || void 0 === AF ? void 0 : AF.cosmeticPack) && SF.push(uF)
        }
        return FF[WF] = SF, FF
      }), {}),
      eF = AF.v.reduce(((FF, WF) => (FF[WF] = Object.keys(CF.i[WF])[0], FF)), {})
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);