export const id = 246;
export const ids = [246];
export const modules = {
  40998: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      openMobLineupPreview: () => yD,
      openMobPreview: () => ZD,
      openPetPreview: () => kD
    });
    var pD = wD(39744),
      sD = wD(40015),
      KD = wD(41006),
      rD = wD(37267),
      LD = wD(37070),
      cD = wD(40183),
      gD = wD(41027),
      RD = wD(38448),
      AD = wD(37169),
      UD = wD(37151),
      fD = wD(37061),
      ID = wD(38353),
      BD = wD(38344),
      GD = wD(38082),
      hD = wD(38123),
      nD = wD(38101),
      MD = wD(37762),
      OD = wD(2769),
      JD = wD(37602);
    wD(41035), wD(40408), wD(41038);
    const ED = 22,
      QD = 13,
      XD = Math.PI - Math.PI / 16,
      VD = 6,
      PD = Math.PI / 4;
    let CD = null;
    const xD = {},
      TD = new Map;

    function bD() {
      if (null !== CD) return CD;
      const DD = document.createElement("canvas");
      DD.classList.add("MobPreviewCanvas");
      const zD = new pD.b(DD, !0, {
        preserveDrawingBuffer: !0
      });
      zD.OpD = (0, OD.e)().wB.engine.OpD;
      const wD = new sD.b(zD);
      wD.clearColor = new rD.e(0, 0, 0, 0), wD.ambientColor = new rD.Color3(1, 1, 1);
      const gD = new KD.c("WG", Math.PI / 2, Math.PI / 2, ED, LD.WI.Zero(), wD),
        RD = new cD.e("light", new LD.WI(-.1, 1, -.3), wD);
      return RD.diffuse = new rD.Color3(1, 1, 1), RD.specular = new rD.Color3(1, 1, 1), RD.groundColor = new rD.Color3(.5, .5, .5), CD = {
        engine: zD,
        oB: wD,
        canvas: DD,
        camera: gD
      }, CD
    }

    function jD(DD) {
      return xD[DD] ??= (0, GD.D)(DD, bD().oB, !0).catch((zD => {
        throw delete xD[DD], zD
      })), xD[DD]
    }

    function dD(DD) {
      let zD = TD.get(DD);
      return zD || (zD = MD.u[DD].loadModel(bD().oB, !1).then((DD => (DD.nC(!1), DD)), (zD => {
        throw TD.delete(DD), zD
      })), TD.set(DD, zD)), zD
    }

    function SD(DD) {
      var zD, wD, pD;
      let {
        mobType: sD,
        variation: KD,
        animation: rD
      } = DD, cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, ED = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const VD = null !== (zD = null === cD || void 0 === cD ? void 0 : cD.size) && void 0 !== zD ? zD : 1,
        PD = null !== (wD = null === cD || void 0 === cD ? void 0 : cD.cosmetics) && void 0 !== wD ? wD : [],
        CD = null !== (pD = null === cD || void 0 === cD ? void 0 : cD.lE) && void 0 !== pD ? pD : null;
      let xD = !1,
        TD = null,
        SD = null;
      const {
        engine: iD,
        oB: lD
      } = bD(), WD = lD.onBeforeRenderObservable.add((() => {
        var DD;
        null === (DD = SD) || void 0 === DD || DD.render(iD.getDeltaTime())
      })), ND = null === CD ? null : dD(CD).catch((DD => (console.error(`Mob preview: could not load ${CD}`, DD), null)));
      return Promise.all([jD(sD), ND]).then((DD => {
        var zD, wD, pD;
        let [cD, jD] = DD;
        if (xD) return;
        const dD = (0, OD.e)().wB.Ql,
          {
            hitBoxDimensions: iD
          } = (0, RD.b)(sD),
          lD = QD / Math.max(iD.height, iD.width);
        if (TD = (0, GD.o)(sD, lD * VD, !0, !0), dD.setPosition(TD, ED, -iD.height * lD / 2, 0), dD.setRotationEulerY(TD, XD), cD.meshApi instanceof nD.d && PD.length > 0)
          for (const [sD, KD] of PD) cD.meshApi.updatePlayerCosmetic(null, TD, sD, KD, !0);
        else cD.meshApi.updateVariation(TD, sD, null !== KD && void 0 !== KD ? KD : "default");
        null !== CD && null !== jD && function(DD, zD, wD, pD) {
          var sD;
          const KD = MD.u[DD],
            rD = (0, ID.o)();
          (0, ID.h)(KD, null === (sD = (0, hD.e)(wD).meshMetadata.heldItemPositionParams) || void 0 === sD ? void 0 : sD.itemOffset, rD);
          const cD = JD.e * rD.rc.y,
            RD = rD.usesQuaternion ? rD.quaternion : LD.Quaternion.FromEulerVector(rD.rotation),
            AD = new gD.e(`${zD.name}Hand`, bD().oB);
          AD.position.pC((0, BD.c)(rD.position, RD, cD, KD.heldModelOffsetY())), AD.rotationQuaternion = RD, AD.rc.set(rD.rc.x, cD, rD.rc.z), zD.clone(`${zD.name}Held`, AD).nC(!0);
          const UD = (0, OD.e)().wB.Ql;
          UD.attachTransformNode(AD, pD, UD.getNamedNode(pD, "ArmRightMesh"))
        }(CD, jD, sD, TD), dD.set(TD, "aOpacity", 1);
        const WD = null !== (zD = (0, hD.e)(sD).meshMetadata.lifeformTypeForModelOverride) && void 0 !== zD ? zD : sD;
        SD = new fD.AnimatorState, SD.thinInstMgr = dD, SD.Vl = TD, SD.uwD = dD.JpD(TD, 0), SD.modelLifeformType = WD, SD.nodeNameAliases = null !== (wD = null === (pD = (0, AD.b)(WD)) || void 0 === pD ? void 0 : pD.nodeNameAliases) && void 0 !== wD ? wD : null, SD.startAnimation(rD, UD.c.Movement)
      })).catch((DD => {
        console.error(`Mob preview: could not load ${sD}`, DD)
      })), () => {
        xD = !0, lD.onBeforeRenderObservable.remove(WD), null !== TD && (0, OD.e)().wB.Ql.delete(TD)
      }
    }

    function iD(DD, zD) {
      return SD({
        mobType: "NPC",
        variation: null,
        animation: DD.animation
      }, DD, zD)
    }

    function lD(DD) {
      let {
        mobType: zD,
        variation: wD,
        metaInfo: pD,
        tamed: sD
      } = DD, KD = !1, rD = null, LD = 0;
      const cD = (0, OD.e)(),
        gD = cD.wB.Ql,
        RD = DD => {
          LD += PD * (DD / 1e3) % (2 * Math.PI), gD.setRotationEulerY(rD, LD)
        };
      return jD(zD).then((DD => {
        if (KD) return;
        rD = (0, GD.o)(zD, VD, !0, !0), gD.setPosition(rD, 0, -VD, 0), DD.meshApi.updateVariation(rD, zD, wD);
        const LD = {
          wool: "Sheared" !== pD,
          saddle: "Saddled" === pD,
          antlers: "Antlers" === pD,
          collar: sD
        };
        for (const [zD, wD] of Object.entries(LD)) gD.hasGroup(rD, zD) && DD.meshApi.setMeshGroupVisibility(rD, zD, wD);
        gD.set(rD, "aOpacity", 1), cD.on("renderTickBegin", RD)
      })).catch((DD => {
        console.error(`Pet preview: could not load ${zD}`, DD)
      })), () => {
        KD = !0, cD.off("renderTickBegin", RD), null !== rD && gD.delete(rD)
      }
    }
    class WD {
      constructor(DD, zD) {
        this.place = zD, this.remove = null;
        const {
          engine: wD,
          oB: pD,
          canvas: sD
        } = bD();
        DD.appendChild(sD), wD.resize(), wD.runRenderLoop((() => {
          pD.render()
        }))
      }
      show(DD) {
        var zD;
        null === (zD = this.remove) || void 0 === zD || zD.call(this), this.remove = this.place(DD)
      }
      resize(DD, zD) {
        const {
          engine: wD,
          canvas: pD
        } = bD();
        pD.width = DD, pD.height = zD, wD.resize()
      }
      close() {
        var DD;
        bD().engine.stopRenderLoop(), null === (DD = this.remove) || void 0 === DD || DD.call(this), this.remove = null
      }
    }
    class ND {
      constructor(DD) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new WD(DD, (() => () => {}))
      }
      show(DD) {
        DD.figures !== this.view.figures && this.preload(DD.figures), this.view = DD, this.place()
      }
      resize(DD, zD) {
        this.preview.resize(DD, zD), this.aspect = DD / zD, this.place()
      }
      close() {
        this.preview.close();
        for (const DD of this.placed) null === DD || void 0 === DD || DD.remove();
        this.placed = []
      }
      preload(DD) {
        const zD = () => {};
        jD("NPC").catch(zD);
        for (const {
            lE: wD
          }
          of DD) null !== wD && dD(wD).catch(zD)
      }
      place() {
        const {
          figures: DD,
          shown: zD
        } = this.view, wD = DD.map(((wD, pD) => {
          var sD;
          const KD = null !== (sD = this.placed[pD]) && void 0 !== sD ? sD : null;
          if (!zD[pD]) return null === KD || void 0 === KD || KD.remove(), null;
          const rD = (LD = (pD + .5) / DD.length, cD = this.aspect, (.5 - LD) * (2 * ED * Math.tan(bD().camera.fov / 2)) * cD);
          var LD, cD;
          return null !== KD && KD.figure === wD && KD.x === rD ? KD : (null === KD || void 0 === KD || KD.remove(), {
            figure: wD,
            x: rD,
            remove: iD(wD, rD)
          })
        }));
        for (const pD of this.placed.slice(DD.length)) null === pD || void 0 === pD || pD.remove();
        this.placed = wD
      }
    }

    function ZD(DD) {
      return new WD(DD, SD)
    }

    function yD(DD) {
      return new ND(DD)
    }

    function kD(DD) {
      return new WD(DD, lD)
    }
  },
  38763: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => UD
    });
    var pD = wD(37181),
      sD = wD(37194),
      KD = wD(37435),
      rD = wD(37201),
      LD = wD(37186);

    function cD(DD) {
      return `\n\t\t\t\t${(0,LD.C)(DD,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, LD.E)(DD, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, LD.E)(DD, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, LD.q)(DD, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function gD(DD, zD) {
      let wD = (0, LD.Fb)(DD, "skele" + (zD - 1));
      for (let sD = zD - 2; sD >= 0; sD--) wD = (0, LD.ub)(DD, `boneIdx == ${sD}`, (0, LD.Fb)(DD, `skele${sD}`), wD);
      const pD = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,LD.E)(DD,"int","boneIdx",(0,LD.Ab)(DD,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,LD.E)(DD,"vec3","bone",wD)}\n\t\t\t\t${(0,LD.E)(DD,"vec2","pivot",(0,LD.q)(DD,"vec2","0.0",`${(0,LD.Nb)(DD,"position")}.z`))}\n\t\t\t\t${(0,LD._)(DD)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${pD}));`:`positionUpdated.yz += ${pD};`}\n\t\t`
    }

    function RD(DD) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,LD.q)(DD,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const AD = {
        x: 0,
        y: 0,
        z: 0,
        cwD(DD, zD) {
          return this.x = DD[zD], this.y = DD[zD + 1], this.z = DD[zD + 2], this
        }
      },
      UD = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (DD, zD) => ({
          ...(0, pD.d)("CAPE"),
          BLOXD_CAPE_BONES: `${DD}`,
          BLOXD_CAPE_MAX_Y: (0, sD.yb)(zD)
        }),
        getUniforms(DD) {
          return (0, KD.c)(function(DD) {
            const zD = [];
            for (let wD = 0; wD < DD; wD++) zD.push({
              name: `skele${wD}`,
              type: "highp vec3"
            });
            return zD
          }(this.skeleLen), "vertex", DD)
        },
        bind(DD) {
          for (let zD = 0; zD < this.skeleLen; zD++) DD.updateVector3(`skele${zD}`, AD.cwD(this.skele, 3 * zD))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(DD, zD) {
          return "vertex" !== DD ? null : {
            CUSTOM_VERTEX_DEFINITIONS: cD(zD),
            CUSTOM_VERTEX_UPDATE_POSITION: gD(zD, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: RD(zD)
          }
        }
      };
    (0, rD.o)(UD)
  },
  38667: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => RD,
      f: () => AD
    });
    var pD = wD(37181),
      sD = wD(37435),
      KD = wD(37186),
      rD = wD(37201);
    const LD = "bloxdTextLodBias",
      cD = [{
        name: LD,
        type: "float"
      }],
      gD = "bloxdTextSample",
      RD = {
        planes: -.5,
        boards: -.5
      },
      AD = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, pD.d)("TEXT_SAMPLER"),
        getUniforms: DD => (0, sD.c)(cD, "fragment", DD),
        bind(DD) {
          DD.updateFloat(LD, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(DD, zD) {
          if ("fragment" !== DD) return null;
          const wD = (0, KD.H)(zD, `vec4 ${gD}(sampler2D s, vec2 uv, float bias)`, `fn ${gD}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            pD = (0, KD.H)(zD, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            sD = `${(0,KD.R)(zD,"vDiffuseUV")} + uvOffset`,
            rD = (0, KD.H)(zD, `${gD}(diffuseSampler, ${sD}, ${(0,KD.Fb)(zD,LD)})`, `${gD}(diffuseSampler, diffuseSamplerSampler, ${sD}, ${(0,KD.Fb)(zD,LD)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${wD} {\n\t\t\t\t\t${(0,KD.E)(zD,"vec4","texel",pD)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,KD.q)(zD,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,KD.q)(zD,"vec3","0.0")}, ${(0,KD.q)(zD,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, KD.F)(zD)]: `baseColor = ${rD};`
          }
        }
      };
    (0, rD.o)(AD)
  },
  41038: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      CapeMaterialPlugin: () => OD,
      HueTintMaterialPlugin: () => JD,
      LifeformMaterialPlugin: () => ED,
      OverlayMaterialPlugin: () => QD
    });
    var pD = wD(41042),
      sD = wD(37984);
    class KD extends((0, pD.h)(sD.e)) {}(0, pD.j)(sD.e, KD);
    var rD = wD(37178);
    class LD extends((0, pD.h)(rD.f)) {}(0, pD.j)(rD.f, LD);
    var cD = wD(37832);
    class gD extends((0, pD.h)(cD.i)) {}(0, pD.j)(cD.i, gD);
    var RD = wD(37422),
      AD = wD(40192),
      UD = wD(37414);
    class fD extends((0, pD.h)(UD.f)) {
      constructor(DD, zD, wD) {
        super(DD, zD, wD), (0, RD.l)(DD)
      }
      dispose(DD) {
        (0, RD.o)(this._material), super.dispose(DD)
      }
    }(0, pD.j)(UD.f, fD), (0, UD.i)({
      disableUnusedSpecularTerm: pD.d,
      isLightingDisabled: DD => DD instanceof AD.StandardMaterial && DD.disableLighting
    });
    var ID = wD(38667);
    class BD extends((0, pD.h)(ID.f)) {}(0, pD.j)(ID.f, BD);
    var GD = wD(38763),
      hD = wD(37280),
      nD = wD(38111),
      MD = wD(37223);
    class OD extends((0, pD.h)(GD.e)) {}(0, pD.j)(GD.e, OD);
    class JD extends((0, pD.h)(hD.d)) {}(0, pD.j)(hD.d, JD);
    class ED extends((0, pD.h)(nD.n)) {}(0, pD.j)(nD.n, ED);
    class QD extends((0, pD.h)(MD.e)) {}(0, pD.j)(MD.e, QD)
  },
  41042: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => kD,
      h: () => nD,
      j: () => vD
    });
    var pD = wD(40192),
      sD = wD(41044),
      KD = wD(41084),
      rD = wD(41049),
      LD = wD(37805),
      cD = wD(37816),
      gD = wD(37820),
      RD = wD(37824),
      AD = wD(37210),
      UD = wD(37217),
      fD = wD(41055),
      ID = wD(37201),
      BD = wD(37206),
      GD = wD(37186);

    function hD(DD, zD) {
      return Object.assign((function(DD, wD, pD, sD) {
        return zD(this.featureState, DD, wD, pD, sD)
      }), {
        LI: DD
      })
    }

    function nD(DD) {
      const zD = class extends fD.e {
          constructor(zD, wD) {
            const pD = (0, BD.db)(zD),
              sD = pD && (0, BD.y)(pD, DD.name);
            for (var KD = arguments.length, rD = new Array(KD > 2 ? KD - 2 : 0), LD = 2; LD < KD; LD++) rD[LD - 2] = arguments[LD];
            super(zD, DD.name, DD.priority, sD ? sD.defines : DD.defines(...rD), !1), this.featureState = void 0, this.featureState = wD, this._pluginManager._addPlugin(this), this._enable(!0), (0, BD.B)(this._material, DD, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return DD.className
          }
          isCompatible(DD) {
            return DD === GD.c.GLSL || DD === GD.c.WGSL
          }
        },
        wD = (0, ID.j)(DD);
      for (const [pD, sD] of Object.entries(ID.b)) {
        const KD = DD[pD];
        if (KD) {
          const DD = wD[pD];
          Object.defineProperty(zD.prototype, sD, {
            value: hD(KD, DD),
            writable: !0,
            configurable: !0
          })
        }
      }
      return zD
    }
    class MD extends(nD(LD.d)) {}
    var OD = wD(39744),
      JD = wD(41064);
    const ED = new WeakMap;

    function QD(DD, zD, wD) {
      let pD = ED.get(wD);
      pD || (pD = new Map, ED.set(wD, pD));
      const {
        url: sD
      } = DD;
      let KD = pD.get(sD);
      return KD || (KD = async function(DD, zD, wD) {
        var pD;
        const {
          width: sD,
          height: KD
        } = DD.getSize(), LD = Math.round(KD / sD), cD = DD.getInternalTexture(), gD = zD && zD.byteLength === sD * sD * LD * 4 ? zD : null !== (pD = XD.get(cD)) && void 0 !== pD ? pD : DD._readPixelsSync(), RD = new JD.b(gD, sD, sD, LD, OD.b.TEXTUREFORMAT_RGBA, wD, !0, !1, rD.b.NEAREST_NEAREST_MIPLINEAR);
        XD.has(cD) || (! function(DD, zD) {
          const wD = zD.createRawTexture(new Uint8Array(4), 1, 1, OD.b.TEXTUREFORMAT_RGBA, !1, !1, rD.b.NEAREST_SAMPLINGMODE);
          DD._hardwareTexture.release(), zD.unbindAllTextures(), wD._swapAndDie(DD, !1)
        }(cD, wD.iI()), XD.set(cD, gD));
        return RD
      }(DD, zD, wD), pD.set(sD, KD), KD.catch((() => {
        pD.delete(sD)
      }))), KD
    }
    const XD = new WeakMap;
    var VD = wD(37827);
    class PD extends(nD(cD.j)) {
      constructor(DD, zD) {
        super(DD, zD), zD.textures.forEach(((DD, zD) => {
          DD.mirror.onLoadObservable.add((DD => {
            this.setTextureArrayData(DD, zD).catch((DD => {
              console.error(`Failed to build texture array for atlas ${zD}`, DD)
            }))
          }))
        })), (0, VD.g)(zD, DD.shaderLanguage)
      }
      async setTextureArrayData(DD, zD) {
        var wD, pD;
        const sD = this.featureState,
          {
            width: KD,
            height: rD
          } = DD.getSize(),
          LD = sD.useWebGL2 ? await QD(DD, null !== (wD = null === (pD = sD.sources.pixels) || void 0 === pD ? void 0 : pD[zD]) && void 0 !== wD ? wD : null, this._material.Ul()) : null;
        (0, VD.b)(this._material, sD, zD, LD, KD, Math.round(rD / KD), this._material.shaderLanguage)
      }
    }
    var CD = wD(41066),
      xD = wD(40234),
      TD = wD(37070),
      bD = wD(41069),
      jD = wD(40348),
      dD = wD(40224),
      SD = wD(41027),
      iD = wD(37577),
      lD = wD(41075);
    class WD extends CD.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const ND = {
      Mesh: bD.e,
      TransformNode: SD.e,
      nI: CD.b,
      VertexBuffer: CD.f,
      BoundingInfo: xD.b,
      WI: TD.WI,
      ArenaBuffer: WD,
      SubMesh: dD.b,
      VertexData: jD.b,
      MirroredGeometry: lD.d,
      meshFromArrays: lD.e,
      plainMeshFromArrays: lD.h
    };
    (0, iD.f)(ND);
    var ZD = wD(37422);
    class yD extends(nD(RD.g)) {
      constructor(DD, zD) {
        if (super(DD, zD), DD instanceof pD.StandardMaterial && zD.dirLightCount > 0) {
          const zD = DD,
            wD = zD._blockDirtyMechanism;
          zD._blockDirtyMechanism = !0, DD.disableLighting = !0, zD._blockDirtyMechanism = wD;
          const pD = (0, BD.db)(DD);
          pD && (pD.disableLighting = !0, (0, BD.ab)(pD))
        }(0, ZD.l)(DD)
      }
      dispose(DD) {
        (0, ZD.o)(this._material), super.dispose(DD)
      }
    }

    function kD(DD, zD) {
      if (!(zD instanceof pD.StandardMaterial) || zD.specularTexture) return;
      const {
        r: wD,
        g: sD,
        b: KD
      } = zD.specularColor;
      0 === wD && 0 === sD && 0 === KD && (DD.SPECULARTERM = !1)
    }(0, RD.e)({
      disableUnusedSpecularTerm: kD
    });
    var mD = wD(37304),
      eD = wD(37584);
    const oD = new RegExp(`^#define ${gD.c}\\s*$`, "m");
    class aD extends(nD(gD.i)) {
      constructor(DD, zD) {
        super(DD, zD), this.MI = !1, zD.ditherOnlyWhileFading && (eD.c.add(DD), this.prewarmDitherTwins(DD))
      }
      prewarmDitherTwins(DD) {
        const zD = new WeakSet;
        DD.onEffectCreatedObservable.add((wD => {
          let {
            effect: pD,
            subMesh: sD
          } = wD;
          if (this.featureState.prewarmingDither || zD.has(pD)) return;
          zD.add(pD);
          const KD = null === sD || void 0 === sD ? void 0 : sD.getMesh();
          KD && !oD.test(pD.defines) && DD.Ul().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(KD) || zD.delete(pD)
          }))
        }))
      }
      prewarmDither(DD) {
        if (this.MI || DD.EX()) return !1;
        const zD = new dD.b(0, 0, 0, 0, 0, DD, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(DD, zD)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== zD.effect
      }
      dispose(DD) {
        this.MI = !0, super.dispose(DD)
      }
    }
    const uD = new Map;

    function vD(DD, zD) {
      uD.set(DD, zD)
    }
    vD(LD.d, MD), vD(cD.j, PD), vD(gD.i, aD), vD(RD.g, yD), (0, AD.d)({
      create: (DD, zD) => {
        const wD = new pD.StandardMaterial(DD.name, zD);
        return (0, mD.r)(DD, wD), wD.detailMap._pluginDefineNames
      },
      write: (DD, zD, wD) => {
        (0, mD.V)(DD.mirror, zD, wD)
      },
      addFeature: (DD, zD, wD) => {
        const pD = uD.get(zD.feature);
        if (!pD) throw new Error(`${zD.feature.name} has no plugin class (registerPluginClass)`);
        new pD(DD.mirror, zD.state, ...wD)
      },
      texture: (DD, zD, wD) => {
        let {
          url: pD,
          noMipmap: sD,
          invertY: KD,
          samplingMode: LD,
          data: cD,
          sets: gD
        } = wD;
        if (!cD) {
          const wD = new rD.b(pD, zD, sD, KD, LD);
          return Object.assign(wD, gD), void(0, UD.U)(DD, wD)
        }
        const RD = {},
          AD = new Promise(((DD, zD) => {
            RD.onLoad = DD, RD.onError = (DD, wD) => {
              zD(new Error(`${cD.context}: ${(null===wD||void 0===wD?void 0:wD.message)||DD||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: fD,
            bytes: ID,
            label: BD
          } = cD,
          GD = {
            noMipmap: sD,
            invertY: !1,
            samplingMode: LD,
            ...RD,
            mimeType: fD,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          hD = new rD.b(null, zD, GD);
        mD.t.set(hD, AD), Object.assign(hD, gD), hD.updateURL(pD, ID);
        const nD = hD.getInternalTexture();
        nD && (nD.label = BD), DD.uvSet = hD.coordinatesIndex, DD.matrix.set((0, mD.N)(hD)), (0, UD.U)(DD, hD)
      },
      cube: (DD, zD, wD) => {
        let {
          rootUrl: pD,
          files: KD,
          noMipmap: LD,
          luminance: cD
        } = wD;
        const {
          samplingMode: gD
        } = DD.sampler, RD = gD === (0, UD.H)(LD) ? null : () => {
          (0, mD.L)(AD, gD)
        }, AD = new sD.e(pD, zD, null, LD, KD, RD, null, (0, UD.D)(cD));
        AD.coordinatesMode = rD.b.SKYBOX_MODE, (0, UD.U)(DD, AD)
      },
      canvas: (DD, zD, wD) => {
        let {
          width: pD,
          height: sD,
          mipmaps: LD,
          samplingMode: cD,
          hasAlpha: gD = !1,
          wrap: RD = rD.b.CLAMP_ADDRESSMODE
        } = wD;
        const AD = new KD.e(zD, {
          width: pD,
          height: sD
        }, DD, LD, cD);
        AD.hasAlpha = gD, AD.wrapU = RD, AD.wrapV = RD;
        const UD = (0, mD.A)(AD);
        return (0, mD.E)(UD, AD), UD
      }
    })
  },
  41075: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD,
      e: () => AD,
      h: () => UD
    });
    var pD = wD(41066),
      sD = wD(39984),
      KD = wD(40234),
      rD = wD(40354),
      LD = wD(41069),
      cD = wD(40348),
      gD = wD(37471);
    class RD extends rD.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (DD, zD) => {
          this.releaseUnlessInstanced(zD)
        }, this.onLinked = null
      }
      link(DD) {
        var zD;
        (0, gD.l)(DD), this.model = DD, null === (zD = this.onLinked) || void 0 === zD || zD.call(this, DD)
      }
      relink() {
        this.release();
        const DD = [];
        for (const sD of Object.values(this._vertexBuffers))
          if (!sD.getIsInstanced()) {
            const {
              byteOffset: zD,
              byteStride: wD,
              type: pD,
              normalized: KD
            } = sD;
            DD.push({
              kind: sD.getKind(),
              data: sD.getData(),
              offset: zD,
              stride: wD,
              components: sD.getSize(),
              glType: pD,
              isNormalized: KD
            })
          } const zD = this._indices.length ? this._indices : null,
          {
            minimum: wD,
            maximum: pD
          } = this.extend;
        this.link(new gD.g(DD, zD, this.getTotalVertices(), new Float64Array(wD.QpD()), new Float64Array(pD.QpD())))
      }
      copy(DD) {
        if (!this.model) return super.copy(DD);
        const zD = new RD(DD, this.Ul()),
          wD = this.XpD(void 0, !0);
        wD && zD.setIndices(wD);
        let rD = !1;
        for (const KD in this._vertexBuffers) {
          const DD = this._vertexBuffers[KD],
            wD = DD.getData();
          if (!wD) continue;
          const LD = DD.getSize(),
            {
              type: cD,
              byteOffset: gD,
              byteStride: RD,
              normalized: AD
            } = DD;
          rD ||= DD.isUpdatable();
          const UD = DD.getIsInstanced() ? (wD instanceof Array ? 4 * wD.length : wD.byteLength) / RD : this.getTotalVertices(),
            fD = (0, sD.r)(wD, LD, cD, gD, RD, UD, !0),
            ID = {
              updatable: DD.isUpdatable(),
              stride: LD,
              type: cD,
              normalized: AD,
              takeBufferOwnership: !0,
              instanced: DD.getIsInstanced()
            };
          zD.setVerticesBuffer(new pD.f(this.iI(), fD, KD, ID), UD)
        }
        return zD._updatable = rD, zD._boundingInfo = new KD.b(this.extend.minimum, this.extend.maximum), zD.relink(), zD
      }
      static mergeMeshes(DD, zD, wD, pD, sD, KD) {
        const cD = DD[0].Ul(),
          gD = new LD.e(DD[0].name + "_merged", cD),
          AD = new RD(rD.e.RandomId(), cD, void 0, !1, gD);
        try {
          if (!LD.e.MergeMeshes(DD, zD, wD, gD, sD, KD)) return gD.dispose(), null
        } catch (UD) {
          throw gD.dispose(), UD
        }
        return AD.relink(), gD
      }
      removeVerticesData(DD) {
        this.releaseUnlessInstanced(DD), super.removeVerticesData(DD)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(DD) {
        var zD;
        DD && null !== (zD = this.getVertexBuffer(DD)) && void 0 !== zD && zD.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, gD.t)(this.model), this.model = null)
      }
    }

    function AD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LD.e(DD, wD);
      const sD = (0, gD.k)(zD),
        {
          positions: KD,
          normals: AD,
          uvs: UD,
          indices: fD,
          named: ID = {}
        } = zD,
        BD = new cD.b;
      BD.positions = KD, BD.normals = null !== AD && void 0 !== AD ? AD : null, BD.uvs = null !== UD && void 0 !== UD ? UD : null, BD.indices = fD;
      const GD = new RD(rD.e.RandomId(), wD, BD, !1, pD);
      for (const {
          kind: rD,
          components: LD
        }
        of sD.vertexAttributes) rD in ID && pD.setVerticesData(rD, ID[rD], !1, LD);
      return GD.link(sD), pD
    }

    function UD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const sD = new LD.e(DD, wD),
        {
          positions: KD,
          normals: rD,
          uvs: gD,
          indices: RD
        } = zD;
      return Object.assign(new cD.b, {
        positions: KD,
        normals: rD,
        uvs: gD,
        indices: RD
      }).applyToMesh(sD, pD), sD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);