export const id = 273;
export const ids = [273];
export const modules = {
  42113: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => lB,
      e: () => JB,
      i: () => PB,
      j: () => MB,
      m: () => zB
    });
    var YB = GB(1217),
      DB = GB(2392),
      QB = GB(37849),
      oB = GB(38201);
    class jB {
      constructor(BB, OB) {
        this.pose = BB, this.nodes = void 0, this.nodes = BB.boneNames.map((BB => OB.get(BB)))
      }
      write(BB) {
        this.pose.pose(BB), (0, oB.q)(this.pose, this.nodes)
      }
    }

    function yB(BB) {
      BB.unfreezeWorldMatrix();
      for (const OB of BB.getChildren()) yB(OB)
    }
    async function JB(BB, OB, GB, YB) {
      let {
        keepTransforms: DB,
        backFaceCulling: oB
      } = YB;
      const jB = await (0, QB.n)(OB, BB),
        JB = (0, QB.g)(null !== GB && void 0 !== GB ? GB : OB, BB, void 0, oB);
      (0, QB.r)(jB, JB, {
        keepTransforms: DB,
        backFaceCulling: oB,
        onProcessedMesh: OB => {
          BB.UDB(OB, !1), OB.isVisible = !1
        }
      });
      for (const QB of jB.rootNodes) yB(QB);
      return jB
    }

    function MB(BB, OB) {
      BB.isVisible = OB;
      for (const GB of BB.getChildMeshes()) GB.isVisible = OB
    }

    function PB(BB) {
      const OB = new Map;
      for (const GB of BB.getNodes()) OB.set(GB.name, GB);
      return OB
    }

    function zB(BB, OB, GB, YB) {
      MB(BB, !0), (0, QB.x)(BB, OB.overlayColour), GB.attachTransformNode(BB, YB, GB.getNamedNode(YB, OB.destNode))
    }
    class lB {
      constructor(BB, OB, GB) {
        this.eq = BB, this.thinInstMgr = OB, this.uF = GB, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(BB, OB, GB) {
        const YB = (0, QB.k)(BB, OB);
        return YB in this.modelCache || (this.modelCache[YB] = (async () => {
          try {
            const YB = PB(await JB(this.eq, BB, OB, {
                keepTransforms: void 0 !== GB,
                backFaceCulling: !1
              })),
              DB = void 0 === GB ? null : (0, oB.m)(GB, (BB => {
                const OB = YB.get(BB);
                return OB ? (0, oB.j)(OB) : null
              }));
            return {
              nodesByName: YB,
              bones: null === DB ? null : new jB(DB, YB)
            }
          } catch (DB) {
            throw delete this.modelCache[YB], console.error(`Failed to load preview attachment ${YB}:`, DB), DB
          }
        })()), this.modelCache[YB]
      }
      async update(BB, OB) {
        var GB;
        const {
          thinInstMgr: QB,
          uF: oB
        } = this;
        this.cosmeticNames[BB] = OB;
        const jB = this.attachmentsByType[BB];
        if (jB)
          for (const {
              mesh: DB,
              destNode: JB,
              bones: PB
            }
            of jB) {
            null !== PB && (0, YB.ob)(this.shownBones, PB), MB(DB, !1);
            const BB = QB.getNamedNode(oB, JB);
            QB.detachTransformNodeIfFound(DB, oB, BB)
          }
        this.attachmentsByType[BB] = [];
        const yB = (0, DB.n)(BB, OB);
        if (null !== yB && void 0 !== yB && null !== (GB = yB.attachments) && void 0 !== GB && GB.length)
          for (const YB of yB.attachments) {
            let GB;
            try {
              GB = await this.loadModel(YB.modelGlb, YB.texture, YB.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[BB] !== OB) return;
            const DB = GB.nodesByName.get(YB.modelNode);
            DB ? (zB(DB, YB, QB, oB), this.attachmentsByType[BB].push({
              mesh: DB,
              destNode: YB.destNode,
              bones: GB.bones
            }), null !== GB.bones && this.shownBones.push(GB.bones)) : console.error(`Preview attachment node ${YB.modelNode} not found in ${YB.modelGlb}`)
          }
      }
      writePoses(BB) {
        for (const OB of this.shownBones) OB.write(BB)
      }
    }
  },
  42079: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      openMobLineupPreview: () => TB,
      openMobPreview: () => eB,
      openPetPreview: () => bB
    });
    var YB = GB(40825),
      DB = GB(41089),
      QB = GB(42087),
      oB = GB(37885),
      jB = GB(37771),
      yB = GB(41246),
      JB = GB(42111),
      MB = GB(39127),
      PB = GB(37845),
      zB = GB(37836),
      lB = GB(37769),
      pB = GB(39039),
      qB = GB(39035),
      ZB = GB(38771),
      NB = GB(37849),
      RB = GB(3088),
      WB = GB(42113),
      AB = GB(2392);
    const VB = new Map;

    function SB(BB, OB) {
      const GB = function(BB) {
        return BB.flatMap((BB => {
          var OB;
          let [GB, YB] = BB;
          const DB = void 0 === YB || null === (OB = (0, AB.n)(GB, YB)) || void 0 === OB ? void 0 : OB.attachments;
          return null !== DB && void 0 !== DB ? DB : []
        }))
      }(OB).map((OB => function(BB, OB) {
        let {
          modelGlb: GB,
          texture: YB,
          animation: DB
        } = OB;
        const QB = void 0 !== DB,
          oB = `${(0,NB.k)(GB,YB)}|${QB}`;
        let jB = VB.get(oB);
        return jB || (jB = (0, WB.e)(BB, GB, YB, {
          keepTransforms: QB,
          backFaceCulling: !1
        }).then(WB.i, (BB => {
          throw VB.delete(oB), BB
        })), VB.set(oB, jB)), jB
      }(BB, OB).then((BB => ({
        attachment: OB,
        nodes: BB
      })), (BB => (console.error(`Mob preview: could not load ${OB.modelGlb}`, BB), null)))));
      return Promise.all(GB).then((BB => BB.filter((BB => null !== BB))))
    }
    var nB = GB(38812),
      UB = GB(38796),
      fB = GB(38466),
      kB = GB(38289);
    GB(42118), GB(41472), GB(42124);
    const dB = 22,
      KB = 13,
      uB = Math.PI - Math.PI / 16,
      mB = 6,
      IB = Math.PI / 4;
    let FB = null;
    const iB = {},
      LB = new Map;

    function gB() {
      if (null !== FB) return FB;
      const BB = document.createElement("canvas");
      BB.classList.add("MobPreviewCanvas");
      const OB = new YB.c(BB, !0, {
        preserveDrawingBuffer: !0
      });
      OB.fDB = (0, RB.g)().UP.engine.fDB;
      const GB = new DB.b(OB);
      GB.clearColor = new oB.e(0, 0, 0, 0), GB.ambientColor = new oB.Color3(1, 1, 1);
      const JB = new QB.e("TZ", Math.PI / 2, Math.PI / 2, dB, jB.Xp.Zero(), GB),
        MB = new yB.d("light", new jB.Xp(-.1, 1, -.3), GB);
      return MB.diffuse = new oB.Color3(1, 1, 1), MB.specular = new oB.Color3(1, 1, 1), MB.groundColor = new oB.Color3(.5, .5, .5), FB = {
        engine: OB,
        eq: GB,
        canvas: BB,
        camera: JB
      }, FB
    }

    function rB(BB) {
      return iB[BB] ??= (0, ZB.z)(BB, gB().eq, !0).catch((OB => {
        throw delete iB[BB], OB
      })), iB[BB]
    }

    function XB(BB) {
      let OB = LB.get(BB);
      return OB || (OB = fB.z[BB].loadModel(gB().eq, !1).then((BB => (BB.Zk(!1), BB)), (OB => {
        throw LB.delete(BB), OB
      })), LB.set(BB, OB)), OB
    }

    function wB(BB) {
      var OB, GB, YB;
      let {
        mobType: DB,
        variation: QB,
        animation: oB
      } = BB, yB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, AB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const VB = null !== (OB = null === yB || void 0 === yB ? void 0 : yB.size) && void 0 !== OB ? OB : 1,
        dB = null !== (GB = null === yB || void 0 === yB ? void 0 : yB.cosmetics) && void 0 !== GB ? GB : [],
        mB = null !== (YB = null === yB || void 0 === yB ? void 0 : yB.cW) && void 0 !== YB ? YB : null;
      let IB = !1,
        FB = null,
        iB = null;
      const {
        engine: LB,
        eq: wB
      } = gB(), EB = wB.onBeforeRenderObservable.add((() => {
        var BB;
        null === (BB = iB) || void 0 === BB || BB.render(LB.getDeltaTime())
      })), cB = null === mB ? null : XB(mB).catch((BB => (console.error(`Mob preview: could not load ${mB}`, BB), null)));
      return Promise.all([rB(DB), cB, SB(gB().eq, dB)]).then((BB => {
        var OB, GB, YB;
        let [yB, SB, LB] = BB;
        if (IB) return;
        const rB = (0, RB.g)().UP.kF,
          {
            hitBoxDimensions: XB
          } = (0, MB.b)(DB),
          wB = KB / Math.max(XB.height, XB.width);
        if (FB = (0, ZB.n)(DB, wB * VB, !0, !0), rB.setPosition(FB, AB, -XB.height * wB / 2, 0), rB.setRotationEulerY(FB, uB), yB.meshApi instanceof UB.d && dB.length > 0) {
          for (const [BB, OB] of dB) yB.meshApi.updatePlayerCosmetic(null, FB, BB, OB, !0);
          ! function(BB, OB) {
            const GB = (0, RB.g)().UP.kF;
            for (const {
                attachment: YB,
                nodes: DB
              }
              of BB) {
              const BB = DB.get(YB.modelNode);
              BB ? (0, WB.m)((0, NB.c)(BB, `${BB.name}Worn`), YB, GB, OB) : console.error(`Mob preview: attachment node ${YB.modelNode} not found in ${YB.modelGlb}`)
            }
          }(LB, FB)
        } else yB.meshApi.updateVariation(FB, DB, null !== QB && void 0 !== QB ? QB : "default");
        null !== mB && null !== SB && function(BB, OB, GB, YB) {
          var DB;
          const QB = fB.z[BB],
            oB = (0, pB.n)();
          (0, pB.g)(QB, null === (DB = (0, nB.b)(GB).meshMetadata.heldItemPositionParams) || void 0 === DB ? void 0 : DB.itemOffset, oB);
          const yB = kB.b * oB.SP.y,
            MB = oB.usesQuaternion ? oB.quaternion : jB.Quaternion.FromEulerVector(oB.rotation),
            PB = new JB.e(`${OB.name}Hand`, gB().eq);
          PB.position.IU((0, qB.b)(oB.position, MB, yB, QB.heldModelOffsetY())), PB.rotationQuaternion = MB, PB.SP.set(oB.SP.x, yB, oB.SP.z), OB.clone(`${OB.name}Held`, PB).Zk(!0);
          const zB = (0, RB.g)().UP.kF;
          zB.attachTransformNode(PB, YB, zB.getNamedNode(YB, "ArmRightMesh"))
        }(mB, SB, DB, FB), rB.set(FB, "aOpacity", 1);
        const EB = null !== (OB = (0, nB.b)(DB).meshMetadata.lifeformTypeForModelOverride) && void 0 !== OB ? OB : DB;
        iB = new lB.AnimatorState, iB.thinInstMgr = rB, iB.uF = FB, iB.HYB = rB.yDB(FB, 0), iB.modelLifeformType = EB, iB.nodeNameAliases = null !== (GB = null === (YB = (0, PB.e)(EB)) || void 0 === YB ? void 0 : YB.nodeNameAliases) && void 0 !== GB ? GB : null, iB.startAnimation(oB, zB.f.Movement)
      })).catch((BB => {
        console.error(`Mob preview: could not load ${DB}`, BB)
      })), () => {
        IB = !0, wB.onBeforeRenderObservable.remove(EB), null !== FB && (0, RB.g)().UP.kF.delete(FB)
      }
    }

    function EB(BB, OB) {
      return wB({
        mobType: "NPC",
        variation: null,
        animation: BB.animation
      }, BB, OB)
    }

    function cB(BB) {
      let {
        mobType: OB,
        variation: GB,
        metaInfo: YB,
        tamed: DB
      } = BB, QB = !1, oB = null, jB = 0;
      const yB = (0, RB.g)(),
        JB = yB.UP.kF,
        MB = BB => {
          jB += IB * (BB / 1e3) % (2 * Math.PI), JB.setRotationEulerY(oB, jB)
        };
      return rB(OB).then((BB => {
        if (QB) return;
        oB = (0, ZB.n)(OB, mB, !0, !0), JB.setPosition(oB, 0, -mB, 0), BB.meshApi.updateVariation(oB, OB, GB);
        const jB = {
          wool: "Sheared" !== YB,
          saddle: "Saddled" === YB,
          antlers: "Antlers" === YB,
          collar: DB
        };
        for (const [OB, GB] of Object.entries(jB)) JB.hasGroup(oB, OB) && BB.meshApi.setMeshGroupVisibility(oB, OB, GB);
        JB.set(oB, "aOpacity", 1), yB.on("renderTickBegin", MB)
      })).catch((BB => {
        console.error(`Pet preview: could not load ${OB}`, BB)
      })), () => {
        QB = !0, yB.off("renderTickBegin", MB), null !== oB && JB.delete(oB)
      }
    }
    class hB {
      constructor(BB, OB) {
        this.place = OB, this.remove = null;
        const {
          engine: GB,
          eq: YB,
          canvas: DB
        } = gB();
        BB.appendChild(DB), GB.resize(), GB.runRenderLoop((() => {
          YB.render()
        }))
      }
      show(BB) {
        var OB;
        null === (OB = this.remove) || void 0 === OB || OB.call(this), this.remove = this.place(BB)
      }
      resize(BB, OB) {
        const {
          engine: GB,
          canvas: YB
        } = gB();
        YB.width = BB, YB.height = OB, GB.resize()
      }
      close() {
        var BB;
        gB().engine.stopRenderLoop(), null === (BB = this.remove) || void 0 === BB || BB.call(this), this.remove = null
      }
    }
    class aB {
      constructor(BB) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new hB(BB, (() => () => {}))
      }
      show(BB) {
        BB.figures !== this.view.figures && this.preload(BB.figures), this.view = BB, this.place()
      }
      resize(BB, OB) {
        this.preview.resize(BB, OB), this.aspect = BB / OB, this.place()
      }
      close() {
        this.preview.close();
        for (const BB of this.placed) null === BB || void 0 === BB || BB.remove();
        this.placed = []
      }
      preload(BB) {
        const OB = () => {};
        rB("NPC").catch(OB);
        for (const {
            cW: GB,
            cosmetics: YB
          }
          of BB) null !== GB && XB(GB).catch(OB), SB(gB().eq, YB).catch(OB)
      }
      place() {
        const {
          figures: BB,
          shown: OB
        } = this.view, GB = BB.map(((GB, YB) => {
          var DB;
          const QB = null !== (DB = this.placed[YB]) && void 0 !== DB ? DB : null;
          if (!OB[YB]) return null === QB || void 0 === QB || QB.remove(), null;
          const oB = (jB = (YB + .5) / BB.length, yB = this.aspect, (.5 - jB) * (2 * dB * Math.tan(gB().camera.fov / 2)) * yB);
          var jB, yB;
          return null !== QB && QB.figure === GB && QB.x === oB ? QB : (null === QB || void 0 === QB || QB.remove(), {
            figure: GB,
            x: oB,
            remove: EB(GB, oB)
          })
        }));
        for (const YB of this.placed.slice(BB.length)) null === YB || void 0 === YB || YB.remove();
        this.placed = GB
      }
    }

    function eB(BB) {
      return new hB(BB, wB)
    }

    function TB(BB) {
      return new aB(BB)
    }

    function bB(BB) {
      return new hB(BB, cB)
    }
  },
  39497: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => zB
    });
    var YB = GB(37903),
      DB = GB(38008),
      QB = GB(38042),
      oB = GB(37919),
      jB = GB(37910);

    function yB(BB) {
      return `\n\t\t\t\t${(0,jB.q)(BB,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, jB.t)(BB, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, jB.t)(BB, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, jB.h)(BB, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function JB(BB, OB) {
      let GB = (0, jB.Ab)(BB, "skele" + (OB - 1));
      for (let DB = OB - 2; DB >= 0; DB--) GB = (0, jB.nb)(BB, `boneIdx == ${DB}`, (0, jB.Ab)(BB, `skele${DB}`), GB);
      const YB = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,jB.t)(BB,"int","boneIdx",(0,jB.tb)(BB,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,jB.t)(BB,"vec3","bone",GB)}\n\t\t\t\t${(0,jB.t)(BB,"vec2","pivot",(0,jB.h)(BB,"vec2","0.0",`${(0,jB.Lb)(BB,"position")}.z`))}\n\t\t\t\t${(0,jB.S)(BB)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${YB}));`:`positionUpdated.yz += ${YB};`}\n\t\t`
    }

    function MB(BB) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,jB.h)(BB,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const PB = {
        x: 0,
        y: 0,
        z: 0,
        OP(BB, OB) {
          return this.x = BB[OB], this.y = BB[OB + 1], this.z = BB[OB + 2], this
        }
      },
      zB = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (BB, OB) => ({
          ...(0, YB.b)("CAPE"),
          BLOXD_CAPE_BONES: `${BB}`,
          BLOXD_CAPE_MAX_Y: (0, DB.pb)(OB)
        }),
        getUniforms(BB) {
          return (0, QB.c)(function(BB) {
            const OB = [];
            for (let GB = 0; GB < BB; GB++) OB.push({
              name: `skele${GB}`,
              type: "highp vec3"
            });
            return OB
          }(this.skeleLen), "vertex", BB)
        },
        bind(BB) {
          for (let OB = 0; OB < this.skeleLen; OB++) BB.updateVector3(`skele${OB}`, PB.OP(this.skele, 3 * OB))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(BB, OB) {
          return "vertex" !== BB ? null : {
            CUSTOM_VERTEX_DEFINITIONS: yB(OB),
            CUSTOM_VERTEX_UPDATE_POSITION: JB(OB, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: MB(OB)
          }
        }
      };
    (0, oB.n)(zB)
  },
  39376: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB,
      d: () => PB
    });
    var YB = GB(37903),
      DB = GB(38042),
      QB = GB(37910),
      oB = GB(37919);
    const jB = "bloxdTextLodBias",
      yB = [{
        name: jB,
        type: "float"
      }],
      JB = "bloxdTextSample",
      MB = {
        planes: -.5,
        boards: -.5
      },
      PB = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, YB.b)("TEXT_SAMPLER"),
        getUniforms: BB => (0, DB.c)(yB, "fragment", BB),
        bind(BB) {
          BB.updateFloat(jB, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(BB, OB) {
          if ("fragment" !== BB) return null;
          const GB = (0, QB.C)(OB, `vec4 ${JB}(sampler2D s, vec2 uv, float bias)`, `fn ${JB}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            YB = (0, QB.C)(OB, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            DB = `${(0,QB.I)(OB,"vDiffuseUV")} + uvOffset`,
            oB = (0, QB.C)(OB, `${JB}(diffuseSampler, ${DB}, ${(0,QB.Ab)(OB,jB)})`, `${JB}(diffuseSampler, diffuseSamplerSampler, ${DB}, ${(0,QB.Ab)(OB,jB)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${GB} {\n\t\t\t\t\t${(0,QB.t)(OB,"vec4","texel",YB)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,QB.h)(OB,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,QB.h)(OB,"vec3","0.0")}, ${(0,QB.h)(OB,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, QB.w)(OB)]: `baseColor = ${oB};`
          }
        }
      };
    (0, oB.n)(PB)
  },
  42124: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      CapeMaterialPlugin: () => AB,
      HueTintMaterialPlugin: () => VB,
      LifeformMaterialPlugin: () => SB,
      OverlayMaterialPlugin: () => nB
    });
    var YB = GB(42129),
      DB = GB(38682);
    class QB extends((0, YB.e)(DB.e)) {}(0, YB.h)(DB.e, QB);
    var oB = GB(38005);
    class jB extends((0, YB.e)(oB.f)) {}(0, YB.h)(oB.f, jB);
    var yB = GB(38531);
    class JB extends((0, YB.e)(yB.f)) {}(0, YB.h)(yB.f, JB);
    var MB = GB(38025),
      PB = GB(41258),
      zB = GB(38019);
    class lB extends((0, YB.e)(zB.f)) {
      constructor(BB, OB, GB) {
        super(BB, OB, GB), (0, MB.j)(BB)
      }
      dispose(BB) {
        (0, MB.m)(this._material), super.dispose(BB)
      }
    }(0, YB.h)(zB.f, lB), (0, zB.g)({
      disableUnusedSpecularTerm: YB.b,
      isLightingDisabled: BB => BB instanceof PB.StandardMaterial && BB.disableLighting
    });
    var pB = GB(39376);
    class qB extends((0, YB.e)(pB.d)) {}(0, YB.h)(pB.d, qB);
    var ZB = GB(39497),
      NB = GB(37899),
      RB = GB(38801),
      WB = GB(38011);
    class AB extends((0, YB.e)(ZB.d)) {}(0, YB.h)(ZB.d, AB);
    class VB extends((0, YB.e)(NB.d)) {}(0, YB.h)(NB.d, VB);
    class SB extends((0, YB.e)(RB.l)) {}(0, YB.h)(RB.l, SB);
    class nB extends((0, YB.e)(WB.c)) {}(0, YB.h)(WB.c, nB)
  },
  42129: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => cB,
      e: () => RB,
      h: () => CB
    });
    var YB = GB(41258),
      DB = GB(42131),
      QB = GB(42177),
      oB = GB(42133),
      jB = GB(38494),
      yB = GB(38504),
      JB = GB(38513),
      MB = GB(38515),
      PB = GB(37958),
      zB = GB(37962),
      lB = GB(42140),
      pB = GB(37919),
      qB = GB(37946),
      ZB = GB(37910);

    function NB(BB, OB) {
      return Object.assign((function(BB, GB, YB, DB) {
        return OB(this.featureState, BB, GB, YB, DB)
      }), {
        oP: BB
      })
    }

    function RB(BB) {
      const OB = class extends lB.c {
          constructor(OB, GB) {
            const YB = (0, qB.U)(OB),
              DB = YB && (0, qB.A)(YB, BB.name);
            for (var QB = arguments.length, oB = new Array(QB > 2 ? QB - 2 : 0), jB = 2; jB < QB; jB++) oB[jB - 2] = arguments[jB];
            super(OB, BB.name, BB.priority, DB ? DB.defines : BB.defines(...oB), !1), this.featureState = void 0, this.featureState = GB, this._pluginManager._addPlugin(this), this._enable(!0), (0, qB.B)(this._material, BB, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return BB.className
          }
          isCompatible(BB) {
            return BB === ZB.c.GLSL || BB === ZB.c.WGSL
          }
        },
        GB = (0, pB.i)(BB);
      for (const [YB, DB] of Object.entries(pB.d)) {
        const QB = BB[YB];
        if (QB) {
          const BB = GB[YB];
          Object.defineProperty(OB.prototype, DB, {
            value: NB(QB, BB),
            writable: !0,
            configurable: !0
          })
        }
      }
      return OB
    }
    class WB extends(RB(jB.e)) {}
    var AB = GB(40825),
      VB = GB(42148),
      SB = GB(42154);

    function nB(BB, OB, GB) {
      return (0, SB.i)(GB, OB.urls, (() => async function(BB, OB, GB) {
        const {
          width: YB
        } = BB[0].getSize(), DB = BB.map(((BB, GB) => {
          var DB;
          const QB = Math.round(BB.getSize().height / YB),
            oB = null === OB || void 0 === OB ? void 0 : OB[GB];
          return {
            pixels: oB && oB.byteLength === YB * YB * QB * 4 ? oB : null !== (DB = UB.get(BB.getInternalTexture())) && void 0 !== DB ? DB : BB._readPixelsSync(),
            layers: QB
          }
        })), QB = Math.min(GB.Lp().getCaps().texture2DArrayMaxLayerCount, 256), jB = (0, SB.e)(DB, YB, QB).map((BB => {
          let {
            pixels: OB,
            layers: DB
          } = BB;
          return {
            atlas: new VB.e(OB, YB, YB, DB, AB.c.TEXTUREFORMAT_RGBA, GB, !0, !1, oB.e.NEAREST_NEAREST_MIPLINEAR),
            layers: DB
          }
        }));
        return BB.forEach(((BB, OB) => {
          const YB = BB.getInternalTexture();
          UB.has(YB) || (! function(BB, OB) {
            const GB = OB.createRawTexture(new Uint8Array(4), 1, 1, AB.c.TEXTUREFORMAT_RGBA, !1, !1, oB.e.NEAREST_SAMPLINGMODE);
            BB._hardwareTexture.release(), OB.unbindAllTextures(), GB._swapAndDie(BB, !1)
          }(YB, GB.Lp()), UB.set(YB, DB[OB].pixels))
        })), jB
      }(BB, OB.pixels, GB)))
    }
    const UB = new WeakMap;
    var fB = GB(38522);
    class kB extends(RB(yB.f)) {
      constructor(BB, OB) {
        super(BB, OB), this.loaded = new Set, this.mirrors = void 0, this.mirrors = OB.textures.map((BB => BB.mirror)), OB.useWebGL2 && !OB.imagesPerAtlas.length && OB.textureAtlases.splice(0, OB.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((BB, OB) => {
          BB.onLoadObservable.add((BB => {
            this.setTextureArrayData(BB, OB).catch((BB => {
              console.error(`Failed to build the texture arrays, at atlas ${OB}`, BB)
            }))
          }))
        })), (0, fB.k)(OB, BB.shaderLanguage)
      }
      async setTextureArrayData(BB, OB) {
        const GB = this.featureState,
          {
            width: YB,
            height: DB
          } = BB.getSize(),
          QB = this._material.shaderLanguage;
        if (!GB.useWebGL2) return void(0, fB.g)(this._material, GB, OB, YB, Math.round(DB / YB), QB);
        if (this.loaded.add(OB), this.loaded.size < this.mirrors.length) return;
        const oB = await nB(this.mirrors, GB.sources, this._material.JF());
        (0, fB.d)(this._material, GB, oB, YB, QB)
      }
    }
    var dB = GB(42160),
      KB = GB(41300),
      uB = GB(37771),
      mB = GB(42167),
      IB = GB(41423),
      FB = GB(41287),
      iB = GB(42111),
      LB = GB(38169),
      gB = GB(42169);
    class rB extends dB.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const XB = {
      Mesh: mB.b,
      TransformNode: iB.e,
      BP: dB.d,
      VertexBuffer: dB.g,
      BoundingInfo: KB.e,
      Xp: uB.Xp,
      ArenaBuffer: rB,
      SubMesh: FB.c,
      VertexData: IB.e,
      MirroredGeometry: gB.d,
      meshFromArrays: gB.g,
      plainMeshFromArrays: gB.h
    };
    (0, LB.d)(XB);
    var wB = GB(38025);
    class EB extends(RB(MB.f)) {
      constructor(BB, OB) {
        if (super(BB, OB), BB instanceof YB.StandardMaterial && OB.dirLightCount > 0) {
          const OB = BB,
            GB = OB._blockDirtyMechanism;
          OB._blockDirtyMechanism = !0, BB.disableLighting = !0, OB._blockDirtyMechanism = GB;
          const YB = (0, qB.U)(BB);
          YB && (YB.disableLighting = !0, (0, qB.S)(YB))
        }(0, wB.j)(BB)
      }
      dispose(BB) {
        (0, wB.m)(this._material), super.dispose(BB)
      }
    }

    function cB(BB, OB) {
      if (!(OB instanceof YB.StandardMaterial) || OB.specularTexture) return;
      const {
        r: GB,
        g: DB,
        b: QB
      } = OB.specularColor;
      0 === GB && 0 === DB && 0 === QB && (BB.SPECULARTERM = !1)
    }(0, MB.e)({
      disableUnusedSpecularTerm: cB
    });
    var hB = GB(37966),
      aB = GB(38183);
    const eB = new RegExp(`^#define ${JB.d}\\s*$`, "m");
    class TB extends(RB(JB.i)) {
      constructor(BB, OB) {
        super(BB, OB), this.Vp = !1, OB.ditherOnlyWhileFading && (aB.e.add(BB), this.prewarmDitherTwins(BB))
      }
      prewarmDitherTwins(BB) {
        const OB = new WeakSet;
        BB.onEffectCreatedObservable.add((GB => {
          let {
            effect: YB,
            subMesh: DB
          } = GB;
          if (this.featureState.prewarmingDither || OB.has(YB)) return;
          OB.add(YB);
          const QB = null === DB || void 0 === DB ? void 0 : DB.getMesh();
          QB && !eB.test(YB.defines) && BB.JF().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(QB) || OB.delete(YB)
          }))
        }))
      }
      prewarmDither(BB) {
        if (this.Vp || BB.lV()) return !1;
        const OB = new FB.c(0, 0, 0, 0, 0, BB, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(BB, OB)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== OB.effect
      }
      dispose(BB) {
        this.Vp = !0, super.dispose(BB)
      }
    }
    const bB = new Map;

    function CB(BB, OB) {
      bB.set(BB, OB)
    }
    CB(jB.e, WB), CB(yB.f, kB), CB(JB.i, TB), CB(MB.f, EB), (0, PB.c)({
      create: (BB, OB) => {
        const GB = new YB.StandardMaterial(BB.name, OB);
        return (0, hB.n)(BB, GB), GB.detailMap._pluginDefineNames
      },
      write: (BB, OB, GB) => {
        (0, hB.M)(BB.mirror, OB, GB)
      },
      addFeature: (BB, OB, GB) => {
        const YB = bB.get(OB.feature);
        if (!YB) throw new Error(`${OB.feature.name} has no plugin class (registerPluginClass)`);
        new YB(BB.mirror, OB.state, ...GB)
      },
      texture: (BB, OB, GB) => {
        let {
          url: YB,
          noMipmap: DB,
          invertY: QB,
          samplingMode: jB,
          data: yB,
          sets: JB
        } = GB;
        if (!yB) {
          const GB = new oB.e(YB, OB, DB, QB, jB);
          return Object.assign(GB, JB), void(0, zB.D)(BB, GB)
        }
        const MB = {},
          PB = new Promise(((BB, OB) => {
            MB.onLoad = BB, MB.onError = (BB, GB) => {
              OB(new Error(`${yB.context}: ${(null===GB||void 0===GB?void 0:GB.message)||BB||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: lB,
            bytes: pB,
            label: qB
          } = yB,
          ZB = {
            noMipmap: DB,
            invertY: !1,
            samplingMode: jB,
            ...MB,
            mimeType: lB,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          NB = new oB.e(null, OB, ZB);
        hB.o.set(NB, PB), Object.assign(NB, JB), NB.updateURL(YB, pB);
        const RB = NB.getInternalTexture();
        RB && (RB.label = qB), BB.uvSet = NB.coordinatesIndex, BB.matrix.set((0, hB.E)(NB)), (0, zB.D)(BB, NB)
      },
      cube: (BB, OB, GB) => {
        let {
          rootUrl: YB,
          files: QB,
          noMipmap: jB,
          luminance: yB
        } = GB;
        const {
          samplingMode: JB
        } = BB.sampler, MB = JB === (0, zB.v)(jB) ? null : () => {
          (0, hB.D)(PB, JB)
        }, PB = new DB.e(YB, OB, null, jB, QB, MB, null, (0, zB.u)(yB));
        PB.coordinatesMode = oB.e.SKYBOX_MODE, (0, zB.D)(BB, PB)
      },
      canvas: (BB, OB, GB) => {
        let {
          width: YB,
          height: DB,
          mipmaps: jB,
          samplingMode: yB,
          hasAlpha: JB = !1,
          wrap: MB = oB.e.CLAMP_ADDRESSMODE
        } = GB;
        const PB = new QB.c(OB, {
          width: YB,
          height: DB
        }, BB, jB, yB);
        PB.hasAlpha = JB, PB.wrapU = MB, PB.wrapV = MB;
        const zB = (0, hB.u)(PB);
        return (0, hB.x)(zB, PB), zB
      }
    })
  },
  42169: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB,
      g: () => PB,
      h: () => zB
    });
    var YB = GB(42160),
      DB = GB(41067),
      QB = GB(41300),
      oB = GB(41426),
      jB = GB(42167),
      yB = GB(41423),
      JB = GB(38087);
    class MB extends oB.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (BB, OB) => {
          this.releaseUnlessInstanced(OB)
        }, this.onLinked = null
      }
      link(BB) {
        var OB;
        (0, JB.k)(BB), this.model = BB, null === (OB = this.onLinked) || void 0 === OB || OB.call(this, BB)
      }
      relink() {
        this.release();
        const BB = [];
        for (const DB of Object.values(this._vertexBuffers))
          if (!DB.getIsInstanced()) {
            const {
              byteOffset: OB,
              byteStride: GB,
              type: YB,
              normalized: QB
            } = DB;
            BB.push({
              kind: DB.getKind(),
              data: DB.getData(),
              offset: OB,
              stride: GB,
              components: DB.getSize(),
              glType: YB,
              isNormalized: QB
            })
          } const OB = this._indices.length ? this._indices : null,
          {
            minimum: GB,
            maximum: YB
          } = this.extend;
        this.link(new JB.e(BB, OB, this.getTotalVertices(), new Float64Array(GB.dDB()), new Float64Array(YB.dDB())))
      }
      copy(BB) {
        if (!this.model) return super.copy(BB);
        const OB = new MB(BB, this.JF()),
          GB = this.KDB(void 0, !0);
        GB && OB.setIndices(GB);
        let oB = !1;
        for (const QB in this._vertexBuffers) {
          const BB = this._vertexBuffers[QB],
            GB = BB.getData();
          if (!GB) continue;
          const jB = BB.getSize(),
            {
              type: yB,
              byteOffset: JB,
              byteStride: MB,
              normalized: PB
            } = BB;
          oB ||= BB.isUpdatable();
          const zB = BB.getIsInstanced() ? (GB instanceof Array ? 4 * GB.length : GB.byteLength) / MB : this.getTotalVertices(),
            lB = (0, DB.v)(GB, jB, yB, JB, MB, zB, !0),
            pB = {
              updatable: BB.isUpdatable(),
              stride: jB,
              type: yB,
              normalized: PB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            };
          OB.setVerticesBuffer(new YB.g(this.Lp(), lB, QB, pB), zB)
        }
        return OB._updatable = oB, OB._boundingInfo = new QB.e(this.extend.minimum, this.extend.maximum), OB.relink(), OB
      }
      static mergeMeshes(BB, OB, GB, YB, DB, QB) {
        const yB = BB[0].JF(),
          JB = new jB.b(BB[0].name + "_merged", yB),
          PB = new MB(oB.d.RandomId(), yB, void 0, !1, JB);
        try {
          if (!jB.b.MergeMeshes(BB, OB, GB, JB, DB, QB)) return JB.dispose(), null
        } catch (zB) {
          throw JB.dispose(), zB
        }
        return PB.relink(), JB
      }
      removeVerticesData(BB) {
        this.releaseUnlessInstanced(BB), super.removeVerticesData(BB)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(BB) {
        var OB;
        BB && null !== (OB = this.getVertexBuffer(BB)) && void 0 !== OB && OB.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, JB.q)(this.model), this.model = null)
      }
    }

    function PB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new jB.b(BB, GB);
      const DB = (0, JB.j)(OB),
        {
          positions: QB,
          normals: PB,
          uvs: zB,
          indices: lB,
          named: pB = {}
        } = OB,
        qB = new yB.e;
      qB.positions = QB, qB.normals = null !== PB && void 0 !== PB ? PB : null, qB.uvs = null !== zB && void 0 !== zB ? zB : null, qB.indices = lB;
      const ZB = new MB(oB.d.RandomId(), GB, qB, !1, YB);
      for (const {
          kind: oB,
          components: jB
        }
        of DB.vertexAttributes) oB in pB && YB.setVerticesData(oB, pB[oB], !1, jB);
      return ZB.link(DB), YB
    }

    function zB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const DB = new jB.b(BB, GB),
        {
          positions: QB,
          normals: oB,
          uvs: JB,
          indices: MB
        } = OB;
      return Object.assign(new yB.e, {
        positions: QB,
        normals: oB,
        uvs: JB,
        indices: MB
      }).applyToMesh(DB, YB), DB
    }
  },
  42154: (BB, OB, GB) => {
    function YB(BB, OB, GB) {
      const YB = OB * OB * 4,
        DB = BB[0].layers,
        QB = DB * (BB.length - 1) + BB[BB.length - 1].layers,
        oB = new Uint8Array(QB * YB);
      BB.forEach(((OB, GB) => {
        const QB = GB + 1 < BB.length ? Math.min(OB.layers, DB) : OB.layers;
        oB.set(new Uint8Array(OB.pixels.buffer, OB.pixels.byteOffset, QB * YB), GB * DB * YB)
      }));
      const jB = Math.max(1, Math.min(QB, GB || QB));
      if (jB === QB) return [{
        pixels: oB,
        layers: QB
      }];
      const yB = [];
      for (let JB = 0; JB < QB; JB += jB) {
        const BB = Math.min(QB, JB + jB);
        yB.push({
          pixels: oB.slice(JB * YB, BB * YB),
          layers: BB - JB
        })
      }
      return yB
    }
    GB.d(OB, {
      e: () => YB,
      i: () => QB
    });
    const DB = new WeakMap;

    function QB(BB, OB, GB) {
      var YB, QB;
      const oB = null !== (YB = DB.get(BB)) && void 0 !== YB ? YB : new Map;
      DB.set(BB, oB);
      const jB = null !== (QB = oB.get(OB[0])) && void 0 !== QB ? QB : [];
      oB.set(OB[0], jB);
      const yB = jB.find((BB => BB.urls.length === OB.length && BB.urls.every(((BB, GB) => BB === OB[GB]))));
      if (yB) return yB.built;
      const JB = {
        urls: [...OB],
        built: GB()
      };
      return jB.push(JB), JB.built.catch((() => {
        jB.splice(jB.indexOf(JB), 1)
      })), JB.built
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);