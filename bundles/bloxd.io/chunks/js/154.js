export const id = 154;
export const ids = [154];
export const modules = {
  39992: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      openMobLineupPreview: () => qT,
      openMobPreview: () => nT,
      openPetPreview: () => ZT
    });
    var iT = IT(38589),
      zT = IT(38874),
      kT = IT(4e4),
      WT = IT(36175),
      XT = IT(36114),
      BT = IT(39021),
      FT = IT(40023),
      ST = IT(37453),
      DT = IT(36539),
      LT = IT(36501),
      xT = IT(36522),
      cT = IT(37356),
      KT = IT(37348),
      MT = IT(37111),
      rT = IT(37151),
      AT = IT(37129),
      gT = IT(36729),
      hT = IT(2465),
      wT = IT(36488);
    IT(40029), IT(39273), IT(40038);
    const mT = 22,
      eT = 13,
      RT = Math.PI - Math.PI / 16,
      uT = 6,
      vT = Math.PI / 4;
    let ET = null;
    const fT = {},
      CT = new Map;

    function jT() {
      if (null !== ET) return ET;
      const TT = document.createElement("canvas");
      TT.classList.add("MobPreviewCanvas");
      const oT = new iT.c(TT, !0, {
        preserveDrawingBuffer: !0
      });
      oT.lIT = (0, hT.i)().FK.engine.lIT;
      const IT = new zT.d(oT);
      IT.clearColor = new WT.b(0, 0, 0, 0), IT.ambientColor = new WT.Color3(1, 1, 1);
      const FT = new kT.c("jM", Math.PI / 2, Math.PI / 2, mT, XT.sc.Zero(), IT),
        ST = new BT.d("light", new XT.sc(-.1, 1, -.3), IT);
      return ST.diffuse = new WT.Color3(1, 1, 1), ST.specular = new WT.Color3(1, 1, 1), ST.groundColor = new WT.Color3(.5, .5, .5), ET = {
        engine: oT,
        NK: IT,
        canvas: TT,
        camera: FT
      }, ET
    }

    function JT(TT) {
      return fT[TT] ??= (0, MT.u)(TT, jT().NK, !0).catch((oT => {
        throw delete fT[TT], oT
      })), fT[TT]
    }

    function UT(TT) {
      let oT = CT.get(TT);
      return oT || (oT = gT.B[TT].loadModel(jT().NK, !1).then((TT => (TT.Fv(!1), TT)), (oT => {
        throw CT.delete(TT), oT
      })), CT.set(TT, oT)), oT
    }

    function aT(TT) {
      var oT, IT, iT;
      let {
        mobType: zT,
        variation: kT,
        animation: WT
      } = TT, BT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const uT = null !== (oT = null === BT || void 0 === BT ? void 0 : BT.size) && void 0 !== oT ? oT : 1,
        vT = null !== (IT = null === BT || void 0 === BT ? void 0 : BT.cosmetics) && void 0 !== IT ? IT : [],
        ET = null !== (iT = null === BT || void 0 === BT ? void 0 : BT.Tu) && void 0 !== iT ? iT : null;
      let fT = !1,
        CT = null,
        aT = null;
      const {
        engine: YT,
        NK: QT
      } = jT(), OT = QT.onBeforeRenderObservable.add((() => {
        var TT;
        null === (TT = aT) || void 0 === TT || TT.render(YT.getDeltaTime())
      })), HT = null === ET ? null : UT(ET).catch((TT => (console.error(`Mob preview: could not load ${ET}`, TT), null)));
      return Promise.all([JT(zT), HT]).then((TT => {
        var oT, IT, iT;
        let [BT, JT] = TT;
        if (fT) return;
        const UT = (0, hT.i)().FK.iJ,
          {
            hitBoxDimensions: YT
          } = (0, ST.c)(zT),
          QT = eT / Math.max(YT.height, YT.width);
        if (CT = (0, MT.l)(zT, QT * uT, !0, !0), UT.setPosition(CT, mT, -YT.height * QT / 2, 0), UT.setRotationEulerY(CT, RT), BT.meshApi instanceof AT.b && vT.length > 0)
          for (const [zT, kT] of vT) BT.meshApi.updatePlayerCosmetic(null, CT, zT, kT, !0);
        else BT.meshApi.updateVariation(CT, zT, null !== kT && void 0 !== kT ? kT : "default");
        null !== ET && null !== JT && function(TT, oT, IT, iT) {
          var zT;
          const kT = gT.B[TT],
            WT = (0, cT.k)();
          (0, cT.h)(kT, null === (zT = (0, rT.c)(IT).meshMetadata.heldItemPositionParams) || void 0 === zT ? void 0 : zT.itemOffset, WT);
          const BT = wT.e * WT.ti.y,
            ST = WT.usesQuaternion ? WT.quaternion : XT.Quaternion.FromEulerVector(WT.rotation),
            DT = new FT.c(`${oT.name}Hand`, jT().NK);
          DT.position.SIT((0, KT.c)(WT.position, ST, BT, kT.heldModelOffsetY())), DT.rotationQuaternion = ST, DT.ti.set(WT.ti.x, BT, WT.ti.z), oT.clone(`${oT.name}Held`, DT).Fv(!0);
          const LT = (0, hT.i)().FK.iJ;
          LT.attachTransformNode(DT, iT, LT.getNamedNode(iT, "ArmRightMesh"))
        }(ET, JT, zT, CT), UT.set(CT, "aOpacity", 1);
        const OT = null !== (oT = (0, rT.c)(zT).meshMetadata.lifeformTypeForModelOverride) && void 0 !== oT ? oT : zT;
        aT = new xT.AnimatorState, aT.thinInstMgr = UT, aT.WJ = CT, aT.BIT = UT.sIT(CT, 0), aT.modelLifeformType = OT, aT.nodeNameAliases = null !== (IT = null === (iT = (0, DT.e)(OT)) || void 0 === iT ? void 0 : iT.nodeNameAliases) && void 0 !== IT ? IT : null, aT.startAnimation(WT, LT.e.Movement)
      })).catch((TT => {
        console.error(`Mob preview: could not load ${zT}`, TT)
      })), () => {
        fT = !0, QT.onBeforeRenderObservable.remove(OT), null !== CT && (0, hT.i)().FK.iJ.delete(CT)
      }
    }

    function YT(TT, oT) {
      return aT({
        mobType: "NPC",
        variation: null,
        animation: TT.animation
      }, TT, oT)
    }

    function QT(TT) {
      let {
        mobType: oT,
        variation: IT,
        metaInfo: iT,
        tamed: zT
      } = TT, kT = !1, WT = null, XT = 0;
      const BT = (0, hT.i)(),
        FT = BT.FK.iJ,
        ST = TT => {
          XT += vT * (TT / 1e3) % (2 * Math.PI), FT.setRotationEulerY(WT, XT)
        };
      return JT(oT).then((TT => {
        if (kT) return;
        WT = (0, MT.l)(oT, uT, !0, !0), FT.setPosition(WT, 0, -uT, 0), TT.meshApi.updateVariation(WT, oT, IT);
        const XT = {
          wool: "Sheared" !== iT,
          saddle: "Saddled" === iT,
          antlers: "Antlers" === iT,
          collar: zT
        };
        for (const [oT, IT] of Object.entries(XT)) FT.hasGroup(WT, oT) && TT.meshApi.setMeshGroupVisibility(WT, oT, IT);
        FT.set(WT, "aOpacity", 1), BT.on("renderTickBegin", ST)
      })).catch((TT => {
        console.error(`Pet preview: could not load ${oT}`, TT)
      })), () => {
        kT = !0, BT.off("renderTickBegin", ST), null !== WT && FT.delete(WT)
      }
    }
    class OT {
      constructor(TT, oT) {
        this.place = oT, this.remove = null;
        const {
          engine: IT,
          NK: iT,
          canvas: zT
        } = jT();
        TT.appendChild(zT), IT.resize(), IT.runRenderLoop((() => {
          iT.render()
        }))
      }
      show(TT) {
        var oT;
        null === (oT = this.remove) || void 0 === oT || oT.call(this), this.remove = this.place(TT)
      }
      resize(TT, oT) {
        const {
          engine: IT,
          canvas: iT
        } = jT();
        iT.width = TT, iT.height = oT, IT.resize()
      }
      close() {
        var TT;
        jT().engine.stopRenderLoop(), null === (TT = this.remove) || void 0 === TT || TT.call(this), this.remove = null
      }
    }
    class HT {
      constructor(TT) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new OT(TT, (() => () => {}))
      }
      show(TT) {
        TT.figures !== this.view.figures && this.preload(TT.figures), this.view = TT, this.place()
      }
      resize(TT, oT) {
        this.preview.resize(TT, oT), this.aspect = TT / oT, this.place()
      }
      close() {
        this.preview.close();
        for (const TT of this.placed) null === TT || void 0 === TT || TT.remove();
        this.placed = []
      }
      preload(TT) {
        const oT = () => {};
        JT("NPC").catch(oT);
        for (const {
            Tu: IT
          }
          of TT) null !== IT && UT(IT).catch(oT)
      }
      place() {
        const {
          figures: TT,
          shown: oT
        } = this.view, IT = TT.map(((IT, iT) => {
          var zT;
          const kT = null !== (zT = this.placed[iT]) && void 0 !== zT ? zT : null;
          if (!oT[iT]) return null === kT || void 0 === kT || kT.remove(), null;
          const WT = (XT = (iT + .5) / TT.length, BT = this.aspect, (.5 - XT) * (2 * mT * Math.tan(jT().camera.fov / 2)) * BT);
          var XT, BT;
          return null !== kT && kT.figure === IT && kT.x === WT ? kT : (null === kT || void 0 === kT || kT.remove(), {
            figure: IT,
            x: WT,
            remove: YT(IT, WT)
          })
        }));
        for (const iT of this.placed.slice(TT.length)) null === iT || void 0 === iT || iT.remove();
        this.placed = IT
      }
    }

    function nT(TT) {
      return new OT(TT, aT)
    }

    function qT(TT) {
      return new HT(TT)
    }

    function ZT(TT) {
      return new OT(TT, QT)
    }
  },
  37777: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT
    });
    var iT = IT(36040),
      zT = IT(36051),
      kT = IT(36280),
      WT = IT(36056),
      XT = IT(36047);

    function BT(TT) {
      return `\n\t\t\t\t${(0,XT.w)(TT,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, XT.D)(TT, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, XT.D)(TT, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, XT.l)(TT, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function FT(TT, oT) {
      let IT = (0, XT.wb)(TT, "skele" + (oT - 1));
      for (let zT = oT - 2; zT >= 0; zT--) IT = (0, XT.ob)(TT, `boneIdx == ${zT}`, (0, XT.wb)(TT, `skele${zT}`), IT);
      const iT = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,XT.D)(TT,"int","boneIdx",(0,XT.sb)(TT,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,XT.D)(TT,"vec3","bone",IT)}\n\t\t\t\t${(0,XT.D)(TT,"vec2","pivot",(0,XT.l)(TT,"vec2","0.0",`${(0,XT.Fb)(TT,"position")}.z`))}\n\t\t\t\t${(0,XT.Y)(TT)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${iT}));`:`positionUpdated.yz += ${iT};`}\n\t\t`
    }

    function ST(TT) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,XT.l)(TT,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const DT = {
        x: 0,
        y: 0,
        z: 0,
        joT(TT, oT) {
          return this.x = TT[oT], this.y = TT[oT + 1], this.z = TT[oT + 2], this
        }
      },
      LT = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (TT, oT) => ({
          ...(0, iT.d)("CAPE"),
          BLOXD_CAPE_BONES: `${TT}`,
          BLOXD_CAPE_MAX_Y: (0, zT.nb)(oT)
        }),
        getUniforms(TT) {
          return (0, kT.d)(function(TT) {
            const oT = [];
            for (let IT = 0; IT < TT; IT++) oT.push({
              name: `skele${IT}`,
              type: "highp vec3"
            });
            return oT
          }(this.skeleLen), "vertex", TT)
        },
        bind(TT) {
          for (let oT = 0; oT < this.skeleLen; oT++) TT.updateVector3(`skele${oT}`, DT.joT(this.skele, 3 * oT))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(TT, oT) {
          return "vertex" !== TT ? null : {
            CUSTOM_VERTEX_DEFINITIONS: BT(oT),
            CUSTOM_VERTEX_UPDATE_POSITION: FT(oT, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: ST(oT)
          }
        }
      };
    (0, WT.n)(LT)
  },
  37671: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => ST,
      h: () => DT
    });
    var iT = IT(36040),
      zT = IT(36280),
      kT = IT(36047),
      WT = IT(36056);
    const XT = "bloxdTextLodBias",
      BT = [{
        name: XT,
        type: "float"
      }],
      FT = "bloxdTextSample",
      ST = {
        planes: -.5,
        boards: -.5
      },
      DT = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, iT.d)("TEXT_SAMPLER"),
        getUniforms: TT => (0, zT.d)(BT, "fragment", TT),
        bind(TT) {
          TT.updateFloat(XT, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(TT, oT) {
          if ("fragment" !== TT) return null;
          const IT = (0, kT.I)(oT, `vec4 ${FT}(sampler2D s, vec2 uv, float bias)`, `fn ${FT}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            iT = (0, kT.I)(oT, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            zT = `${(0,kT.R)(oT,"vDiffuseUV")} + uvOffset`,
            WT = (0, kT.I)(oT, `${FT}(diffuseSampler, ${zT}, ${(0,kT.wb)(oT,XT)})`, `${FT}(diffuseSampler, diffuseSamplerSampler, ${zT}, ${(0,kT.wb)(oT,XT)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${IT} {\n\t\t\t\t\t${(0,kT.D)(oT,"vec4","texel",iT)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,kT.l)(oT,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,kT.l)(oT,"vec3","0.0")}, ${(0,kT.l)(oT,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, kT.F)(oT)]: `baseColor = ${WT};`
          }
        }
      };
    (0, WT.n)(DT)
  },
  8248: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => ST,
      h: () => XT,
      j: () => BT
    });
    var iT = IT(2026),
      zT = IT(1214),
      kT = IT(2029);
    const WT = ",";

    function XT(TT) {
      if (!TT) return [];
      const oT = new Set,
        IT = [];
      for (const iT of TT.split(WT)) {
        const TT = iT.trim();
        if ((0, kT.h)(TT) && !oT.has(TT) && (oT.add(TT), IT.push(TT), IT.length >= zT.k)) break
      }
      return IT
    }

    function BT(TT) {
      const oT = new Set,
        IT = [];
      for (const iT of TT)
        if ((0, kT.h)(iT) && !oT.has(iT) && (oT.add(iT), IT.push(iT), IT.length >= zT.k)) break;
      return IT.join(WT)
    }

    function FT() {
      return BT(kT.d)
    }

    function ST(TT) {
      var oT;
      return "emote" === TT ? FT() : null !== (oT = DT[TT][0]) && void 0 !== oT ? oT : LT[TT]
    }
    const DT = zT.v.reduce(((TT, oT) => {
        const IT = [];
        for (const kT in iT.c[oT]) {
          var zT;
          "default" === (null === (zT = (0, iT.g)(oT, kT)) || void 0 === zT ? void 0 : zT.cosmeticPack) && IT.push(kT)
        }
        return TT[oT] = IT, TT
      }), {}),
      LT = zT.v.reduce(((TT, oT) => (TT[oT] = Object.keys(iT.c[oT])[0], TT)), {})
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);