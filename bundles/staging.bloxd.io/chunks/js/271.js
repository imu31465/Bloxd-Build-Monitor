export const id = 271;
export const ids = [271];
export const modules = {
  42188: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      openMobLineupPreview: () => NM,
      openMobPreview: () => YM,
      openPetPreview: () => AM
    });
    var OM = iM(40931),
      SM = iM(41190),
      jM = iM(42190),
      aM = iM(38167),
      PM = iM(38034),
      nM = iM(41358),
      QM = iM(42212),
      zM = iM(39471),
      LM = iM(38122),
      mM = iM(38097),
      HM = iM(38025),
      hM = iM(39363),
      JM = iM(39354),
      dM = iM(39083),
      yM = iM(39139),
      lM = iM(39109),
      EM = iM(38764),
      UM = iM(3063),
      GM = iM(38585);
    iM(42220), iM(41564), iM(42227);
    const CM = 22,
      eM = 13,
      bM = Math.PI - Math.PI / 16,
      wM = 6,
      tM = Math.PI / 4;
    let gM = null;
    const uM = {},
      RM = new Map;

    function pM() {
      if (null !== gM) return gM;
      const MM = document.createElement("canvas");
      MM.classList.add("MobPreviewCanvas");
      const rM = new OM.e(MM, !0, {
        preserveDrawingBuffer: !0
      });
      rM.LOM = (0, UM.f)().CL.engine.LOM;
      const iM = new SM.b(rM);
      iM.clearColor = new aM.d(0, 0, 0, 0), iM.ambientColor = new aM.Color3(1, 1, 1);
      const QM = new jM.c("Td", Math.PI / 2, Math.PI / 2, CM, PM.sh.Zero(), iM),
        zM = new nM.e("light", new PM.sh(-.1, 1, -.3), iM);
      return zM.diffuse = new aM.Color3(1, 1, 1), zM.specular = new aM.Color3(1, 1, 1), zM.groundColor = new aM.Color3(.5, .5, .5), gM = {
        engine: rM,
        YJ: iM,
        canvas: MM,
        camera: QM
      }, gM
    }

    function WM(MM) {
      return uM[MM] ??= (0, dM.u)(MM, pM().YJ, !0).catch((rM => {
        throw delete uM[MM], rM
      })), uM[MM]
    }

    function sM(MM) {
      let rM = RM.get(MM);
      return rM || (rM = EM.A[MM].loadModel(pM().YJ, !1).then((MM => (MM.kR(!1), MM)), (rM => {
        throw RM.delete(MM), rM
      })), RM.set(MM, rM)), rM
    }

    function DM(MM) {
      var rM, iM, OM;
      let {
        mobType: SM,
        variation: jM,
        animation: aM
      } = MM, nM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, CM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const wM = null !== (rM = null === nM || void 0 === nM ? void 0 : nM.size) && void 0 !== rM ? rM : 1,
        tM = null !== (iM = null === nM || void 0 === nM ? void 0 : nM.cosmetics) && void 0 !== iM ? iM : [],
        gM = null !== (OM = null === nM || void 0 === nM ? void 0 : nM.QG) && void 0 !== OM ? OM : null;
      let uM = !1,
        RM = null,
        DM = null;
      const {
        engine: kM,
        YJ: ZM
      } = pM(), oM = ZM.onBeforeRenderObservable.add((() => {
        var MM;
        null === (MM = DM) || void 0 === MM || MM.render(kM.getDeltaTime())
      })), fM = null === gM ? null : sM(gM).catch((MM => (console.error(`Mob preview: could not load ${gM}`, MM), null)));
      return Promise.all([WM(SM), fM]).then((MM => {
        var rM, iM, OM;
        let [nM, WM] = MM;
        if (uM) return;
        const sM = (0, UM.f)().CL.Dk,
          {
            hitBoxDimensions: kM
          } = (0, zM.d)(SM),
          ZM = eM / Math.max(kM.height, kM.width);
        if (RM = (0, dM.i)(SM, ZM * wM, !0, !0), sM.setPosition(RM, CM, -kM.height * ZM / 2, 0), sM.setRotationEulerY(RM, bM), nM.meshApi instanceof lM.e && tM.length > 0)
          for (const [SM, jM] of tM) nM.meshApi.updatePlayerCosmetic(null, RM, SM, jM, !0);
        else nM.meshApi.updateVariation(RM, SM, null !== jM && void 0 !== jM ? jM : "default");
        null !== gM && null !== WM && function(MM, rM, iM, OM) {
          var SM;
          const jM = EM.A[MM],
            aM = (0, hM.i)();
          (0, hM.f)(jM, null === (SM = (0, yM.b)(iM).meshMetadata.heldItemPositionParams) || void 0 === SM ? void 0 : SM.itemOffset, aM);
          const nM = GM.e * aM.UL.y,
            zM = aM.usesQuaternion ? aM.quaternion : PM.Quaternion.FromEulerVector(aM.rotation),
            LM = new QM.e(`${rM.name}Hand`, pM().YJ);
          LM.position.jR((0, JM.c)(aM.position, zM, nM, jM.heldModelOffsetY())), LM.rotationQuaternion = zM, LM.UL.set(aM.UL.x, nM, aM.UL.z), rM.clone(`${rM.name}Held`, LM).kR(!0);
          const mM = (0, UM.f)().CL.Dk;
          mM.attachTransformNode(LM, OM, mM.getNamedNode(OM, "ArmRightMesh"))
        }(gM, WM, SM, RM), sM.set(RM, "aOpacity", 1);
        const oM = null !== (rM = (0, yM.b)(SM).meshMetadata.lifeformTypeForModelOverride) && void 0 !== rM ? rM : SM;
        DM = new HM.AnimatorState, DM.thinInstMgr = sM, DM.Zk = RM, DM.kiM = sM.lD(RM, 0), DM.modelLifeformType = oM, DM.nodeNameAliases = null !== (iM = null === (OM = (0, LM.e)(oM)) || void 0 === OM ? void 0 : OM.nodeNameAliases) && void 0 !== iM ? iM : null, DM.startAnimation(aM, mM.e.Movement)
      })).catch((MM => {
        console.error(`Mob preview: could not load ${SM}`, MM)
      })), () => {
        uM = !0, ZM.onBeforeRenderObservable.remove(oM), null !== RM && (0, UM.f)().CL.Dk.delete(RM)
      }
    }

    function kM(MM, rM) {
      return DM({
        mobType: "NPC",
        variation: null,
        animation: MM.animation
      }, MM, rM)
    }

    function ZM(MM) {
      let {
        mobType: rM,
        variation: iM,
        metaInfo: OM,
        tamed: SM
      } = MM, jM = !1, aM = null, PM = 0;
      const nM = (0, UM.f)(),
        QM = nM.CL.Dk,
        zM = MM => {
          PM += tM * (MM / 1e3) % (2 * Math.PI), QM.setRotationEulerY(aM, PM)
        };
      return WM(rM).then((MM => {
        if (jM) return;
        aM = (0, dM.i)(rM, wM, !0, !0), QM.setPosition(aM, 0, -wM, 0), MM.meshApi.updateVariation(aM, rM, iM);
        const PM = {
          wool: "Sheared" !== OM,
          saddle: "Saddled" === OM,
          antlers: "Antlers" === OM,
          collar: SM
        };
        for (const [rM, iM] of Object.entries(PM)) QM.hasGroup(aM, rM) && MM.meshApi.setMeshGroupVisibility(aM, rM, iM);
        QM.set(aM, "aOpacity", 1), nM.on("renderTickBegin", zM)
      })).catch((MM => {
        console.error(`Pet preview: could not load ${rM}`, MM)
      })), () => {
        jM = !0, nM.off("renderTickBegin", zM), null !== aM && QM.delete(aM)
      }
    }
    class oM {
      constructor(MM, rM) {
        this.place = rM, this.remove = null;
        const {
          engine: iM,
          YJ: OM,
          canvas: SM
        } = pM();
        MM.appendChild(SM), iM.resize(), iM.runRenderLoop((() => {
          OM.render()
        }))
      }
      show(MM) {
        var rM;
        null === (rM = this.remove) || void 0 === rM || rM.call(this), this.remove = this.place(MM)
      }
      resize(MM, rM) {
        const {
          engine: iM,
          canvas: OM
        } = pM();
        OM.width = MM, OM.height = rM, iM.resize()
      }
      close() {
        var MM;
        pM().engine.stopRenderLoop(), null === (MM = this.remove) || void 0 === MM || MM.call(this), this.remove = null
      }
    }
    class fM {
      constructor(MM) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new oM(MM, (() => () => {}))
      }
      show(MM) {
        MM.figures !== this.view.figures && this.preload(MM.figures), this.view = MM, this.place()
      }
      resize(MM, rM) {
        this.preview.resize(MM, rM), this.aspect = MM / rM, this.place()
      }
      close() {
        this.preview.close();
        for (const MM of this.placed) null === MM || void 0 === MM || MM.remove();
        this.placed = []
      }
      preload(MM) {
        const rM = () => {};
        WM("NPC").catch(rM);
        for (const {
            QG: iM
          }
          of MM) null !== iM && sM(iM).catch(rM)
      }
      place() {
        const {
          figures: MM,
          shown: rM
        } = this.view, iM = MM.map(((iM, OM) => {
          var SM;
          const jM = null !== (SM = this.placed[OM]) && void 0 !== SM ? SM : null;
          if (!rM[OM]) return null === jM || void 0 === jM || jM.remove(), null;
          const aM = (PM = (OM + .5) / MM.length, nM = this.aspect, (.5 - PM) * (2 * CM * Math.tan(pM().camera.fov / 2)) * nM);
          var PM, nM;
          return null !== jM && jM.figure === iM && jM.x === aM ? jM : (null === jM || void 0 === jM || jM.remove(), {
            figure: iM,
            x: aM,
            remove: kM(iM, aM)
          })
        }));
        for (const OM of this.placed.slice(MM.length)) null === OM || void 0 === OM || OM.remove();
        this.placed = iM
      }
    }

    function YM(MM) {
      return new oM(MM, DM)
    }

    function NM(MM) {
      return new fM(MM)
    }

    function AM(MM) {
      return new oM(MM, ZM)
    }
  },
  39852: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => mM
    });
    var OM = iM(38181),
      SM = iM(38278),
      jM = iM(38310),
      aM = iM(38198),
      PM = iM(38188);

    function nM(MM) {
      return `\n\t\t\t\t${(0,PM.w)(MM,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, PM.B)(MM, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, PM.B)(MM, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, PM.n)(MM, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function QM(MM, rM) {
      let iM = (0, PM.Db)(MM, "skele" + (rM - 1));
      for (let SM = rM - 2; SM >= 0; SM--) iM = (0, PM.sb)(MM, `boneIdx == ${SM}`, (0, PM.Db)(MM, `skele${SM}`), iM);
      const OM = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,PM.B)(MM,"int","boneIdx",(0,PM.wb)(MM,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,PM.B)(MM,"vec3","bone",iM)}\n\t\t\t\t${(0,PM.B)(MM,"vec2","pivot",(0,PM.n)(MM,"vec2","0.0",`${(0,PM.Hb)(MM,"position")}.z`))}\n\t\t\t\t${(0,PM.Y)(MM)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${OM}));`:`positionUpdated.yz += ${OM};`}\n\t\t`
    }

    function zM(MM) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,PM.n)(MM,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const LM = {
        x: 0,
        y: 0,
        z: 0,
        cz(MM, rM) {
          return this.x = MM[rM], this.y = MM[rM + 1], this.z = MM[rM + 2], this
        }
      },
      mM = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (MM, rM) => ({
          ...(0, OM.b)("CAPE"),
          BLOXD_CAPE_BONES: `${MM}`,
          BLOXD_CAPE_MAX_Y: (0, SM.xb)(rM)
        }),
        getUniforms(MM) {
          return (0, jM.d)(function(MM) {
            const rM = [];
            for (let iM = 0; iM < MM; iM++) rM.push({
              name: `skele${iM}`,
              type: "highp vec3"
            });
            return rM
          }(this.skeleLen), "vertex", MM)
        },
        bind(MM) {
          for (let rM = 0; rM < this.skeleLen; rM++) MM.updateVector3(`skele${rM}`, LM.cz(this.skele, 3 * rM))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(MM, rM) {
          return "vertex" !== MM ? null : {
            CUSTOM_VERTEX_DEFINITIONS: nM(rM),
            CUSTOM_VERTEX_UPDATE_POSITION: QM(rM, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: zM(rM)
          }
        }
      };
    (0, aM.l)(mM)
  },
  39720: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => zM,
      d: () => LM
    });
    var OM = iM(38181),
      SM = iM(38310),
      jM = iM(38188),
      aM = iM(38198);
    const PM = "bloxdTextLodBias",
      nM = [{
        name: PM,
        type: "float"
      }],
      QM = "bloxdTextSample",
      zM = {
        planes: -.5,
        boards: -.5
      },
      LM = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, OM.b)("TEXT_SAMPLER"),
        getUniforms: MM => (0, SM.d)(nM, "fragment", MM),
        bind(MM) {
          MM.updateFloat(PM, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(MM, rM) {
          if ("fragment" !== MM) return null;
          const iM = (0, jM.K)(rM, `vec4 ${QM}(sampler2D s, vec2 uv, float bias)`, `fn ${QM}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            OM = (0, jM.K)(rM, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            SM = `${(0,jM.U)(rM,"vDiffuseUV")} + uvOffset`,
            aM = (0, jM.K)(rM, `${QM}(diffuseSampler, ${SM}, ${(0,jM.Db)(rM,PM)})`, `${QM}(diffuseSampler, diffuseSamplerSampler, ${SM}, ${(0,jM.Db)(rM,PM)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${iM} {\n\t\t\t\t\t${(0,jM.B)(rM,"vec4","texel",OM)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,jM.n)(rM,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,jM.n)(rM,"vec3","0.0")}, ${(0,jM.n)(rM,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, jM.E)(rM)]: `baseColor = ${aM};`
          }
        }
      };
    (0, aM.l)(LM)
  },
  42227: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      CapeMaterialPlugin: () => UM,
      HueTintMaterialPlugin: () => GM,
      LifeformMaterialPlugin: () => CM,
      OverlayMaterialPlugin: () => eM
    });
    var OM = iM(42233),
      SM = iM(38984);
    class jM extends((0, OM.i)(SM.d)) {}(0, OM.m)(SM.d, jM);
    var aM = iM(38275);
    class PM extends((0, OM.i)(aM.c)) {}(0, OM.m)(aM.c, PM);
    var nM = iM(38832);
    class QM extends((0, OM.i)(nM.e)) {}(0, OM.m)(nM.e, QM);
    var zM = iM(38298),
      LM = iM(41374),
      mM = iM(38294);
    class HM extends((0, OM.i)(mM.e)) {
      constructor(MM, rM, iM) {
        super(MM, rM, iM), (0, zM.k)(MM)
      }
      dispose(MM) {
        (0, zM.m)(this._material), super.dispose(MM)
      }
    }(0, OM.m)(mM.e, HM), (0, mM.f)({
      disableUnusedSpecularTerm: OM.e,
      isLightingDisabled: MM => MM instanceof LM.StandardMaterial && MM.disableLighting
    });
    var hM = iM(39720);
    class JM extends((0, OM.i)(hM.d)) {}(0, OM.m)(hM.d, JM);
    var dM = iM(39852),
      yM = iM(38178),
      lM = iM(39126),
      EM = iM(38287);
    class UM extends((0, OM.i)(dM.c)) {}(0, OM.m)(dM.c, UM);
    class GM extends((0, OM.i)(yM.b)) {}(0, OM.m)(yM.b, GM);
    class CM extends((0, OM.i)(lM.i)) {}(0, OM.m)(lM.i, CM);
    class eM extends((0, OM.i)(EM.c)) {}(0, OM.m)(EM.c, eM)
  },
  42233: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => AM,
      i: () => lM,
      m: () => IM
    });
    var OM = iM(41374),
      SM = iM(42241),
      jM = iM(42283),
      aM = iM(42248),
      PM = iM(38797),
      nM = iM(38809),
      QM = iM(38815),
      zM = iM(38822),
      LM = iM(38227),
      mM = iM(38233),
      HM = iM(42256),
      hM = iM(38198),
      JM = iM(38217),
      dM = iM(38188);

    function yM(MM, rM) {
      return Object.assign((function(MM, iM, OM, SM) {
        return rM(this.featureState, MM, iM, OM, SM)
      }), {
        jL: MM
      })
    }

    function lM(MM) {
      const rM = class extends HM.d {
          constructor(rM, iM) {
            const OM = (0, JM.Y)(rM),
              SM = OM && (0, JM.v)(OM, MM.name);
            for (var jM = arguments.length, aM = new Array(jM > 2 ? jM - 2 : 0), PM = 2; PM < jM; PM++) aM[PM - 2] = arguments[PM];
            super(rM, MM.name, MM.priority, SM ? SM.defines : MM.defines(...aM), !1), this.featureState = void 0, this.featureState = iM, this._pluginManager._addPlugin(this), this._enable(!0), (0, JM.x)(this._material, MM, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return MM.className
          }
          isCompatible(MM) {
            return MM === dM.b.GLSL || MM === dM.b.WGSL
          }
        },
        iM = (0, hM.i)(MM);
      for (const [OM, SM] of Object.entries(hM.d)) {
        const jM = MM[OM];
        if (jM) {
          const MM = iM[OM];
          Object.defineProperty(rM.prototype, SM, {
            value: yM(jM, MM),
            writable: !0,
            configurable: !0
          })
        }
      }
      return rM
    }
    class EM extends(lM(PM.b)) {}
    var UM = iM(40931),
      GM = iM(42260),
      CM = iM(42265);

    function eM(MM, rM, iM) {
      return (0, CM.f)(iM, rM.urls, (() => async function(MM, rM, iM) {
        const {
          width: OM
        } = MM[0].getSize(), SM = MM.map(((MM, iM) => {
          var SM;
          const jM = Math.round(MM.getSize().height / OM),
            aM = null === rM || void 0 === rM ? void 0 : rM[iM];
          return {
            pixels: aM && aM.byteLength === OM * OM * jM * 4 ? aM : null !== (SM = bM.get(MM.getInternalTexture())) && void 0 !== SM ? SM : MM._readPixelsSync(),
            layers: jM
          }
        })), jM = iM.ph().getCaps().texture2DArrayMaxLayerCount, PM = (0, CM.c)(SM, OM, jM).map((MM => {
          let {
            pixels: rM,
            layers: SM
          } = MM;
          return {
            atlas: new GM.e(rM, OM, OM, SM, UM.e.TEXTUREFORMAT_RGBA, iM, !0, !1, aM.c.NEAREST_NEAREST_MIPLINEAR),
            layers: SM
          }
        }));
        return MM.forEach(((MM, rM) => {
          const OM = MM.getInternalTexture();
          bM.has(OM) || (! function(MM, rM) {
            const iM = rM.createRawTexture(new Uint8Array(4), 1, 1, UM.e.TEXTUREFORMAT_RGBA, !1, !1, aM.c.NEAREST_SAMPLINGMODE);
            MM._hardwareTexture.release(), rM.unbindAllTextures(), iM._swapAndDie(MM, !1)
          }(OM, iM.ph()), bM.set(OM, SM[rM].pixels))
        })), PM
      }(MM, rM.pixels, iM)))
    }
    const bM = new WeakMap;
    var wM = iM(38829);
    class tM extends(lM(nM.g)) {
      constructor(MM, rM) {
        super(MM, rM), this.loaded = new Set, this.mirrors = void 0, this.mirrors = rM.textures.map((MM => MM.mirror)), this.mirrors.forEach(((MM, rM) => {
          MM.onLoadObservable.add((MM => {
            this.setTextureArrayData(MM, rM).catch((MM => {
              console.error(`Failed to build the texture arrays, at atlas ${rM}`, MM)
            }))
          }))
        })), (0, wM.j)(rM, MM.shaderLanguage)
      }
      async setTextureArrayData(MM, rM) {
        const iM = this.featureState,
          {
            width: OM,
            height: SM
          } = MM.getSize(),
          jM = this._material.shaderLanguage;
        if (!iM.useWebGL2) return void(0, wM.e)(this._material, iM, rM, OM, Math.round(SM / OM), jM);
        if (this.loaded.add(rM), this.loaded.size < this.mirrors.length) return;
        const aM = await eM(this.mirrors, iM.sources, this._material.Hk());
        (0, wM.c)(this._material, iM, aM, OM, jM)
      }
    }
    var gM = iM(42269),
      uM = iM(41410),
      RM = iM(38034),
      pM = iM(42278),
      WM = iM(41508),
      sM = iM(41400),
      DM = iM(42212),
      kM = iM(38457),
      ZM = iM(42280);
    class oM extends gM.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const fM = {
      Mesh: pM.d,
      TransformNode: DM.e,
      Vz: gM.b,
      VertexBuffer: gM.e,
      BoundingInfo: uM.d,
      sh: RM.sh,
      ArenaBuffer: oM,
      SubMesh: sM.e,
      VertexData: WM.d,
      MirroredGeometry: ZM.d,
      meshFromArrays: ZM.h,
      plainMeshFromArrays: ZM.k
    };
    (0, kM.g)(fM);
    var YM = iM(38298);
    class NM extends(lM(zM.j)) {
      constructor(MM, rM) {
        if (super(MM, rM), MM instanceof OM.StandardMaterial && rM.dirLightCount > 0) {
          const rM = MM,
            iM = rM._blockDirtyMechanism;
          rM._blockDirtyMechanism = !0, MM.disableLighting = !0, rM._blockDirtyMechanism = iM;
          const OM = (0, JM.Y)(MM);
          OM && (OM.disableLighting = !0, (0, JM.W)(OM))
        }(0, YM.k)(MM)
      }
      dispose(MM) {
        (0, YM.m)(this._material), super.dispose(MM)
      }
    }

    function AM(MM, rM) {
      if (!(rM instanceof OM.StandardMaterial) || rM.specularTexture) return;
      const {
        r: iM,
        g: SM,
        b: jM
      } = rM.specularColor;
      0 === iM && 0 === SM && 0 === jM && (MM.SPECULARTERM = !1)
    }(0, zM.f)({
      disableUnusedSpecularTerm: AM
    });
    var xM = iM(38235),
      vM = iM(38467);
    const FM = new RegExp(`^#define ${QM.b}\\s*$`, "m");
    class BM extends(lM(QM.g)) {
      constructor(MM, rM) {
        super(MM, rM), this.dh = !1, rM.ditherOnlyWhileFading && (vM.f.add(MM), this.prewarmDitherTwins(MM))
      }
      prewarmDitherTwins(MM) {
        const rM = new WeakSet;
        MM.onEffectCreatedObservable.add((iM => {
          let {
            effect: OM,
            subMesh: SM
          } = iM;
          if (this.featureState.prewarmingDither || rM.has(OM)) return;
          rM.add(OM);
          const jM = null === SM || void 0 === SM ? void 0 : SM.getMesh();
          jM && !FM.test(OM.defines) && MM.Hk().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(jM) || rM.delete(OM)
          }))
        }))
      }
      prewarmDither(MM) {
        if (this.dh || MM.xG()) return !1;
        const rM = new sM.e(0, 0, 0, 0, 0, MM, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(MM, rM)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== rM.effect
      }
      dispose(MM) {
        this.dh = !0, super.dispose(MM)
      }
    }
    const XM = new Map;

    function IM(MM, rM) {
      XM.set(MM, rM)
    }
    IM(PM.b, EM), IM(nM.g, tM), IM(QM.g, BM), IM(zM.j, NM), (0, LM.e)({
      create: (MM, rM) => {
        const iM = new OM.StandardMaterial(MM.name, rM);
        return (0, xM.s)(MM, iM), iM.detailMap._pluginDefineNames
      },
      write: (MM, rM, iM) => {
        (0, xM.U)(MM.mirror, rM, iM)
      },
      addFeature: (MM, rM, iM) => {
        const OM = XM.get(rM.feature);
        if (!OM) throw new Error(`${rM.feature.name} has no plugin class (registerPluginClass)`);
        new OM(MM.mirror, rM.state, ...iM)
      },
      texture: (MM, rM, iM) => {
        let {
          url: OM,
          noMipmap: SM,
          invertY: jM,
          samplingMode: PM,
          data: nM,
          sets: QM
        } = iM;
        if (!nM) {
          const iM = new aM.c(OM, rM, SM, jM, PM);
          return Object.assign(iM, QM), void(0, mM.F)(MM, iM)
        }
        const zM = {},
          LM = new Promise(((MM, rM) => {
            zM.onLoad = MM, zM.onError = (MM, iM) => {
              rM(new Error(`${nM.context}: ${(null===iM||void 0===iM?void 0:iM.message)||MM||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: HM,
            bytes: hM,
            label: JM
          } = nM,
          dM = {
            noMipmap: SM,
            invertY: !1,
            samplingMode: PM,
            ...zM,
            mimeType: HM,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          yM = new aM.c(null, rM, dM);
        xM.w.set(yM, LM), Object.assign(yM, QM), yM.updateURL(OM, hM);
        const lM = yM.getInternalTexture();
        lM && (lM.label = JM), MM.uvSet = yM.coordinatesIndex, MM.matrix.set((0, xM.O)(yM)), (0, mM.F)(MM, yM)
      },
      cube: (MM, rM, iM) => {
        let {
          rootUrl: OM,
          files: jM,
          noMipmap: PM,
          luminance: nM
        } = iM;
        const {
          samplingMode: QM
        } = MM.sampler, zM = QM === (0, mM.y)(PM) ? null : () => {
          (0, xM.M)(LM, QM)
        }, LM = new SM.d(OM, rM, null, PM, jM, zM, null, (0, mM.v)(nM));
        LM.coordinatesMode = aM.c.SKYBOX_MODE, (0, mM.F)(MM, LM)
      },
      canvas: (MM, rM, iM) => {
        let {
          width: OM,
          height: SM,
          mipmaps: PM,
          samplingMode: nM,
          hasAlpha: QM = !1,
          wrap: zM = aM.c.CLAMP_ADDRESSMODE
        } = iM;
        const LM = new jM.b(rM, {
          width: OM,
          height: SM
        }, MM, PM, nM);
        LM.hasAlpha = QM, LM.wrapU = zM, LM.wrapV = zM;
        const mM = (0, xM.C)(LM);
        return (0, xM.F)(mM, LM), mM
      }
    })
  },
  42280: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      h: () => LM,
      k: () => mM
    });
    var OM = iM(42269),
      SM = iM(41167),
      jM = iM(41410),
      aM = iM(41512),
      PM = iM(42278),
      nM = iM(41508),
      QM = iM(38347);
    class zM extends aM.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (MM, rM) => {
          this.releaseUnlessInstanced(rM)
        }, this.onLinked = null
      }
      link(MM) {
        var rM;
        (0, QM.j)(MM), this.model = MM, null === (rM = this.onLinked) || void 0 === rM || rM.call(this, MM)
      }
      relink() {
        this.release();
        const MM = [];
        for (const SM of Object.values(this._vertexBuffers))
          if (!SM.getIsInstanced()) {
            const {
              byteOffset: rM,
              byteStride: iM,
              type: OM,
              normalized: jM
            } = SM;
            MM.push({
              kind: SM.getKind(),
              data: SM.getData(),
              offset: rM,
              stride: iM,
              components: SM.getSize(),
              glType: OM,
              isNormalized: jM
            })
          } const rM = this._indices.length ? this._indices : null,
          {
            minimum: iM,
            maximum: OM
          } = this.extend;
        this.link(new QM.e(MM, rM, this.getTotalVertices(), new Float64Array(iM.HOM()), new Float64Array(OM.HOM())))
      }
      copy(MM) {
        if (!this.model) return super.copy(MM);
        const rM = new zM(MM, this.Hk()),
          iM = this.hOM(void 0, !0);
        iM && rM.setIndices(iM);
        let aM = !1;
        for (const jM in this._vertexBuffers) {
          const MM = this._vertexBuffers[jM],
            iM = MM.getData();
          if (!iM) continue;
          const PM = MM.getSize(),
            {
              type: nM,
              byteOffset: QM,
              byteStride: zM,
              normalized: LM
            } = MM;
          aM ||= MM.isUpdatable();
          const mM = MM.getIsInstanced() ? (iM instanceof Array ? 4 * iM.length : iM.byteLength) / zM : this.getTotalVertices(),
            HM = (0, SM.r)(iM, PM, nM, QM, zM, mM, !0),
            hM = {
              updatable: MM.isUpdatable(),
              stride: PM,
              type: nM,
              normalized: LM,
              takeBufferOwnership: !0,
              instanced: MM.getIsInstanced()
            };
          rM.setVerticesBuffer(new OM.e(this.ph(), HM, jM, hM), mM)
        }
        return rM._updatable = aM, rM._boundingInfo = new jM.d(this.extend.minimum, this.extend.maximum), rM.relink(), rM
      }
      static mergeMeshes(MM, rM, iM, OM, SM, jM) {
        const nM = MM[0].Hk(),
          QM = new PM.d(MM[0].name + "_merged", nM),
          LM = new zM(aM.e.RandomId(), nM, void 0, !1, QM);
        try {
          if (!PM.d.MergeMeshes(MM, rM, iM, QM, SM, jM)) return QM.dispose(), null
        } catch (mM) {
          throw QM.dispose(), mM
        }
        return LM.relink(), QM
      }
      removeVerticesData(MM) {
        this.releaseUnlessInstanced(MM), super.removeVerticesData(MM)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(MM) {
        var rM;
        MM && null !== (rM = this.getVertexBuffer(MM)) && void 0 !== rM && rM.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, QM.p)(this.model), this.model = null)
      }
    }

    function LM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new PM.d(MM, iM);
      const SM = (0, QM.i)(rM),
        {
          positions: jM,
          normals: LM,
          uvs: mM,
          indices: HM,
          named: hM = {}
        } = rM,
        JM = new nM.d;
      JM.positions = jM, JM.normals = null !== LM && void 0 !== LM ? LM : null, JM.uvs = null !== mM && void 0 !== mM ? mM : null, JM.indices = HM;
      const dM = new zM(aM.e.RandomId(), iM, JM, !1, OM);
      for (const {
          kind: aM,
          components: PM
        }
        of SM.vertexAttributes) aM in hM && OM.setVerticesData(aM, hM[aM], !1, PM);
      return dM.link(SM), OM
    }

    function mM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const SM = new PM.d(MM, iM),
        {
          positions: jM,
          normals: aM,
          uvs: QM,
          indices: zM
        } = rM;
      return Object.assign(new nM.d, {
        positions: jM,
        normals: aM,
        uvs: QM,
        indices: zM
      }).applyToMesh(SM, OM), SM
    }
  },
  42265: (MM, rM, iM) => {
    function OM(MM, rM, iM) {
      const OM = rM * rM * 4,
        SM = MM[0].layers,
        jM = SM * (MM.length - 1) + MM[MM.length - 1].layers,
        aM = new Uint8Array(jM * OM);
      MM.forEach(((rM, iM) => {
        const jM = iM + 1 < MM.length ? Math.min(rM.layers, SM) : rM.layers;
        aM.set(new Uint8Array(rM.pixels.buffer, rM.pixels.byteOffset, jM * OM), iM * SM * OM)
      }));
      const PM = Math.max(1, Math.min(jM, iM || jM));
      if (PM === jM) return [{
        pixels: aM,
        layers: jM
      }];
      const nM = [];
      for (let QM = 0; QM < jM; QM += PM) {
        const MM = Math.min(jM, QM + PM);
        nM.push({
          pixels: aM.slice(QM * OM, MM * OM),
          layers: MM - QM
        })
      }
      return nM
    }
    iM.d(rM, {
      c: () => OM,
      f: () => jM
    });
    const SM = new WeakMap;

    function jM(MM, rM, iM) {
      var OM, jM;
      const aM = null !== (OM = SM.get(MM)) && void 0 !== OM ? OM : new Map;
      SM.set(MM, aM);
      const PM = null !== (jM = aM.get(rM[0])) && void 0 !== jM ? jM : [];
      aM.set(rM[0], PM);
      const nM = PM.find((MM => MM.urls.length === rM.length && MM.urls.every(((MM, iM) => MM === rM[iM]))));
      if (nM) return nM.built;
      const QM = {
        urls: [...rM],
        built: iM()
      };
      return PM.push(QM), QM.built.catch((() => {
        PM.splice(PM.indexOf(QM), 1)
      })), QM.built
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);