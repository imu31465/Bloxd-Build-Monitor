export const id = 153;
export const ids = [153];
export const modules = {
  40173: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      openMobLineupPreview: () => kz,
      openMobPreview: () => Qz,
      openPetPreview: () => iz
    });
    var Fz = sz(39010),
      Wz = sz(39252),
      Xz = sz(40177),
      Oz = sz(36652),
      oz = sz(36473),
      vz = sz(39408),
      Uz = sz(40192),
      Kz = sz(37894),
      uz = sz(36552),
      Nz = sz(36531),
      bz = sz(36464),
      wz = sz(37809),
      Dz = sz(37806),
      gz = sz(37543),
      Hz = sz(37600),
      Bz = sz(37569),
      Pz = sz(37207),
      rz = sz(2555),
      Yz = sz(37001);
    sz(40201), sz(39623), sz(40204);
    const xz = 22,
      mz = 13,
      Jz = Math.PI - Math.PI / 16,
      Iz = 6,
      Cz = Math.PI / 4;
    let ez = null;
    const Zz = {},
      Gz = new Map;

    function Tz() {
      if (null !== ez) return ez;
      const zz = document.createElement("canvas");
      zz.classList.add("MobPreviewCanvas");
      const tz = new Fz.b(zz, !0, {
        preserveDrawingBuffer: !0
      });
      tz.ysz = (0, rz.e)().mD.engine.ysz;
      const sz = new Wz.b(tz);
      sz.clearColor = new Oz.c(0, 0, 0, 0), sz.ambientColor = new Oz.Color3(1, 1, 1);
      const Uz = new Xz.e("Tg", Math.PI / 2, Math.PI / 2, xz, oz.XD.Zero(), sz),
        Kz = new vz.b("light", new oz.XD(-.1, 1, -.3), sz);
      return Kz.diffuse = new Oz.Color3(1, 1, 1), Kz.specular = new Oz.Color3(1, 1, 1), Kz.groundColor = new Oz.Color3(.5, .5, .5), ez = {
        engine: tz,
        Kg: sz,
        canvas: zz,
        camera: Uz
      }, ez
    }

    function cz(zz) {
      return Zz[zz] ??= (0, gz.t)(zz, Tz().Kg, !0).catch((tz => {
        throw delete Zz[zz], tz
      })), Zz[zz]
    }

    function jz(zz) {
      let tz = Gz.get(zz);
      return tz || (tz = Pz.D[zz].loadModel(Tz().Kg, !1).then((zz => (zz.Xx(!1), zz)), (tz => {
        throw Gz.delete(zz), tz
      })), Gz.set(zz, tz)), tz
    }

    function Az(zz) {
      var tz, sz, Fz;
      let {
        mobType: Wz,
        variation: Xz,
        animation: Oz
      } = zz, vz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, xz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Iz = null !== (tz = null === vz || void 0 === vz ? void 0 : vz.size) && void 0 !== tz ? tz : 1,
        Cz = null !== (sz = null === vz || void 0 === vz ? void 0 : vz.cosmetics) && void 0 !== sz ? sz : [],
        ez = null !== (Fz = null === vz || void 0 === vz ? void 0 : vz.qY) && void 0 !== Fz ? Fz : null;
      let Zz = !1,
        Gz = null,
        Az = null;
      const {
        engine: yz,
        Kg: Mz
      } = Tz(), dz = Mz.onBeforeRenderObservable.add((() => {
        var zz;
        null === (zz = Az) || void 0 === zz || zz.render(yz.getDeltaTime())
      })), hz = null === ez ? null : jz(ez).catch((zz => (console.error(`Mob preview: could not load ${ez}`, zz), null)));
      return Promise.all([cz(Wz), hz]).then((zz => {
        var tz, sz, Fz;
        let [vz, cz] = zz;
        if (Zz) return;
        const jz = (0, rz.e)().mD.vI,
          {
            hitBoxDimensions: yz
          } = (0, Kz.e)(Wz),
          Mz = mz / Math.max(yz.height, yz.width);
        if (Gz = (0, gz.i)(Wz, Mz * Iz, !0, !0), jz.setPosition(Gz, xz, -yz.height * Mz / 2, 0), jz.setRotationEulerY(Gz, Jz), vz.meshApi instanceof Bz.d && Cz.length > 0)
          for (const [Wz, Xz] of Cz) vz.meshApi.updatePlayerCosmetic(null, Gz, Wz, Xz, !0);
        else vz.meshApi.updateVariation(Gz, Wz, null !== Xz && void 0 !== Xz ? Xz : "default");
        null !== ez && null !== cz && function(zz, tz, sz, Fz) {
          var Wz;
          const Xz = Pz.D[zz],
            Oz = (0, wz.m)();
          (0, wz.f)(Xz, null === (Wz = (0, Hz.b)(sz).meshMetadata.heldItemPositionParams) || void 0 === Wz ? void 0 : Wz.itemOffset, Oz);
          const vz = Yz.d * Oz.nX.y,
            Kz = Oz.usesQuaternion ? Oz.quaternion : oz.Quaternion.FromEulerVector(Oz.rotation),
            uz = new Uz.c(`${tz.name}Hand`, Tz().Kg);
          uz.position.vsz((0, Dz.d)(Oz.position, Kz, vz, Xz.heldModelOffsetY())), uz.rotationQuaternion = Kz, uz.nX.set(Oz.nX.x, vz, Oz.nX.z), tz.clone(`${tz.name}Held`, uz).Xx(!0);
          const Nz = (0, rz.e)().mD.vI;
          Nz.attachTransformNode(uz, Fz, Nz.getNamedNode(Fz, "ArmRightMesh"))
        }(ez, cz, Wz, Gz), jz.set(Gz, "aOpacity", 1);
        const dz = null !== (tz = (0, Hz.b)(Wz).meshMetadata.lifeformTypeForModelOverride) && void 0 !== tz ? tz : Wz;
        Az = new bz.AnimatorState, Az.thinInstMgr = jz, Az.bI = Gz, Az.Osz = jz.Msz(Gz, 0), Az.modelLifeformType = dz, Az.nodeNameAliases = null !== (sz = null === (Fz = (0, uz.e)(dz)) || void 0 === Fz ? void 0 : Fz.nodeNameAliases) && void 0 !== sz ? sz : null, Az.startAnimation(Oz, Nz.c.Movement)
      })).catch((zz => {
        console.error(`Mob preview: could not load ${Wz}`, zz)
      })), () => {
        Zz = !0, Mz.onBeforeRenderObservable.remove(dz), null !== Gz && (0, rz.e)().mD.vI.delete(Gz)
      }
    }

    function yz(zz, tz) {
      return Az({
        mobType: "NPC",
        variation: null,
        animation: zz.animation
      }, zz, tz)
    }

    function Mz(zz) {
      let {
        mobType: tz,
        variation: sz,
        metaInfo: Fz,
        tamed: Wz
      } = zz, Xz = !1, Oz = null, oz = 0;
      const vz = (0, rz.e)(),
        Uz = vz.mD.vI,
        Kz = zz => {
          oz += Cz * (zz / 1e3) % (2 * Math.PI), Uz.setRotationEulerY(Oz, oz)
        };
      return cz(tz).then((zz => {
        if (Xz) return;
        Oz = (0, gz.i)(tz, Iz, !0, !0), Uz.setPosition(Oz, 0, -Iz, 0), zz.meshApi.updateVariation(Oz, tz, sz);
        const oz = {
          wool: "Sheared" !== Fz,
          saddle: "Saddled" === Fz,
          antlers: "Antlers" === Fz,
          collar: Wz
        };
        for (const [tz, sz] of Object.entries(oz)) Uz.hasGroup(Oz, tz) && zz.meshApi.setMeshGroupVisibility(Oz, tz, sz);
        Uz.set(Oz, "aOpacity", 1), vz.on("renderTickBegin", Kz)
      })).catch((zz => {
        console.error(`Pet preview: could not load ${tz}`, zz)
      })), () => {
        Xz = !0, vz.off("renderTickBegin", Kz), null !== Oz && Uz.delete(Oz)
      }
    }
    class dz {
      constructor(zz, tz) {
        this.place = tz, this.remove = null;
        const {
          engine: sz,
          Kg: Fz,
          canvas: Wz
        } = Tz();
        zz.appendChild(Wz), sz.resize(), sz.runRenderLoop((() => {
          Fz.render()
        }))
      }
      show(zz) {
        var tz;
        null === (tz = this.remove) || void 0 === tz || tz.call(this), this.remove = this.place(zz)
      }
      resize(zz, tz) {
        const {
          engine: sz,
          canvas: Fz
        } = Tz();
        Fz.width = zz, Fz.height = tz, sz.resize()
      }
      close() {
        var zz;
        Tz().engine.stopRenderLoop(), null === (zz = this.remove) || void 0 === zz || zz.call(this), this.remove = null
      }
    }
    class hz {
      constructor(zz) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new dz(zz, (() => () => {}))
      }
      show(zz) {
        zz.figures !== this.view.figures && this.preload(zz.figures), this.view = zz, this.place()
      }
      resize(zz, tz) {
        this.preview.resize(zz, tz), this.aspect = zz / tz, this.place()
      }
      close() {
        this.preview.close();
        for (const zz of this.placed) null === zz || void 0 === zz || zz.remove();
        this.placed = []
      }
      preload(zz) {
        const tz = () => {};
        cz("NPC").catch(tz);
        for (const {
            qY: sz
          }
          of zz) null !== sz && jz(sz).catch(tz)
      }
      place() {
        const {
          figures: zz,
          shown: tz
        } = this.view, sz = zz.map(((sz, Fz) => {
          var Wz;
          const Xz = null !== (Wz = this.placed[Fz]) && void 0 !== Wz ? Wz : null;
          if (!tz[Fz]) return null === Xz || void 0 === Xz || Xz.remove(), null;
          const Oz = (oz = (Fz + .5) / zz.length, vz = this.aspect, (.5 - oz) * (2 * xz * Math.tan(Tz().camera.fov / 2)) * vz);
          var oz, vz;
          return null !== Xz && Xz.figure === sz && Xz.x === Oz ? Xz : (null === Xz || void 0 === Xz || Xz.remove(), {
            figure: sz,
            x: Oz,
            remove: yz(sz, Oz)
          })
        }));
        for (const Fz of this.placed.slice(zz.length)) null === Fz || void 0 === Fz || Fz.remove();
        this.placed = sz
      }
    }

    function Qz(zz) {
      return new dz(zz, Az)
    }

    function kz(zz) {
      return new hz(zz)
    }

    function iz(zz) {
      return new dz(zz, Mz)
    }
  },
  38210: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Nz
    });
    var Fz = sz(36567),
      Wz = sz(36576),
      Xz = sz(36818),
      Oz = sz(36581),
      oz = sz(36569);

    function vz(zz) {
      return `\n\t\t\t\t${(0,oz.w)(zz,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, oz.C)(zz, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, oz.C)(zz, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, oz.p)(zz, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Uz(zz, tz) {
      let sz = (0, oz.Ab)(zz, "skele" + (tz - 1));
      for (let Wz = tz - 2; Wz >= 0; Wz--) sz = (0, oz.sb)(zz, `boneIdx == ${Wz}`, (0, oz.Ab)(zz, `skele${Wz}`), sz);
      const Fz = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,oz.C)(zz,"int","boneIdx",(0,oz.wb)(zz,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,oz.C)(zz,"vec3","bone",sz)}\n\t\t\t\t${(0,oz.C)(zz,"vec2","pivot",(0,oz.p)(zz,"vec2","0.0",`${(0,oz.Gb)(zz,"position")}.z`))}\n\t\t\t\t${(0,oz.$)(zz)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Fz}));`:`positionUpdated.yz += ${Fz};`}\n\t\t`
    }

    function Kz(zz) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,oz.p)(zz,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const uz = {
        x: 0,
        y: 0,
        z: 0,
        Ztz(zz, tz) {
          return this.x = zz[tz], this.y = zz[tz + 1], this.z = zz[tz + 2], this
        }
      },
      Nz = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (zz, tz) => ({
          ...(0, Fz.e)("CAPE"),
          BLOXD_CAPE_BONES: `${zz}`,
          BLOXD_CAPE_MAX_Y: (0, Wz.ob)(tz)
        }),
        getUniforms(zz) {
          return (0, Xz.e)(function(zz) {
            const tz = [];
            for (let sz = 0; sz < zz; sz++) tz.push({
              name: `skele${sz}`,
              type: "highp vec3"
            });
            return tz
          }(this.skeleLen), "vertex", zz)
        },
        bind(zz) {
          for (let tz = 0; tz < this.skeleLen; tz++) zz.updateVector3(`skele${tz}`, uz.Ztz(this.skele, 3 * tz))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(zz, tz) {
          return "vertex" !== zz ? null : {
            CUSTOM_VERTEX_DEFINITIONS: vz(tz),
            CUSTOM_VERTEX_UPDATE_POSITION: Uz(tz, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Kz(tz)
          }
        }
      };
    (0, Oz.i)(Nz)
  },
  38108: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Kz,
      e: () => uz
    });
    var Fz = sz(36567),
      Wz = sz(36818),
      Xz = sz(36569),
      Oz = sz(36581);
    const oz = "bloxdTextLodBias",
      vz = [{
        name: oz,
        type: "float"
      }],
      Uz = "bloxdTextSample",
      Kz = {
        planes: -.5,
        boards: -.5
      },
      uz = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Fz.e)("TEXT_SAMPLER"),
        getUniforms: zz => (0, Wz.e)(vz, "fragment", zz),
        bind(zz) {
          zz.updateFloat(oz, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(zz, tz) {
          if ("fragment" !== zz) return null;
          const sz = (0, Xz.K)(tz, `vec4 ${Uz}(sampler2D s, vec2 uv, float bias)`, `fn ${Uz}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Fz = (0, Xz.K)(tz, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Wz = `${(0,Xz.T)(tz,"vDiffuseUV")} + uvOffset`,
            Oz = (0, Xz.K)(tz, `${Uz}(diffuseSampler, ${Wz}, ${(0,Xz.Ab)(tz,oz)})`, `${Uz}(diffuseSampler, diffuseSamplerSampler, ${Wz}, ${(0,Xz.Ab)(tz,oz)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${sz} {\n\t\t\t\t\t${(0,Xz.C)(tz,"vec4","texel",Fz)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Xz.p)(tz,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Xz.p)(tz,"vec3","0.0")}, ${(0,Xz.p)(tz,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Xz.E)(tz)]: `baseColor = ${Oz};`
          }
        }
      };
    (0, Oz.i)(uz)
  },
  40204: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      CapeMaterialPlugin: () => rz,
      HueTintMaterialPlugin: () => Yz,
      LifeformMaterialPlugin: () => xz,
      OverlayMaterialPlugin: () => mz
    });
    var Fz = sz(40211),
      Wz = sz(37437);
    class Xz extends((0, Fz.f)(Wz.b)) {}(0, Fz.h)(Wz.b, Xz);
    var Oz = sz(36560);
    class oz extends((0, Fz.f)(Oz.i)) {}(0, Fz.h)(Oz.i, oz);
    var vz = sz(37277);
    class Uz extends((0, Fz.f)(vz.g)) {}(0, Fz.h)(vz.g, Uz);
    var Kz = sz(36800),
      uz = sz(39427),
      Nz = sz(36794);
    class bz extends((0, Fz.f)(Nz.f)) {
      constructor(zz, tz, sz) {
        super(zz, tz, sz), (0, Kz.i)(zz)
      }
      dispose(zz) {
        (0, Kz.k)(this._material), super.dispose(zz)
      }
    }(0, Fz.h)(Nz.f, bz), (0, Nz.g)({
      disableUnusedSpecularTerm: Fz.c,
      isLightingDisabled: zz => zz instanceof uz.StandardMaterial && zz.disableLighting
    });
    var wz = sz(38108);
    class Dz extends((0, Fz.f)(wz.e)) {}(0, Fz.h)(wz.e, Dz);
    var gz = sz(38210),
      Hz = sz(36662),
      Bz = sz(37583),
      Pz = sz(36608);
    class rz extends((0, Fz.f)(gz.e)) {}(0, Fz.h)(gz.e, rz);
    class Yz extends((0, Fz.f)(Hz.b)) {}(0, Fz.h)(Hz.b, Yz);
    class xz extends((0, Fz.f)(Bz.l)) {}(0, Fz.h)(Bz.l, xz);
    class mz extends((0, Fz.f)(Pz.b)) {}(0, Fz.h)(Pz.b, mz)
  },
  40211: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => kz,
      f: () => Bz,
      h: () => qz
    });
    var Fz = sz(39427),
      Wz = sz(40216),
      Xz = sz(40253),
      Oz = sz(40220),
      oz = sz(37250),
      vz = sz(37257),
      Uz = sz(37259),
      Kz = sz(37268),
      uz = sz(36600),
      Nz = sz(36605),
      bz = sz(40225),
      wz = sz(36581),
      Dz = sz(36590),
      gz = sz(36569);

    function Hz(zz, tz) {
      return Object.assign((function(zz, sz, Fz, Wz) {
        return tz(this.featureState, zz, sz, Fz, Wz)
      }), {
        Zw: zz
      })
    }

    function Bz(zz) {
      const tz = class extends bz.d {
          constructor(tz, sz) {
            const Fz = (0, Dz.$)(tz),
              Wz = Fz && (0, Dz.z)(Fz, zz.name);
            for (var Xz = arguments.length, Oz = new Array(Xz > 2 ? Xz - 2 : 0), oz = 2; oz < Xz; oz++) Oz[oz - 2] = arguments[oz];
            super(tz, zz.name, zz.priority, Wz ? Wz.defines : zz.defines(...Oz), !1), this.featureState = void 0, this.featureState = sz, this._pluginManager._addPlugin(this), this._enable(!0), (0, Dz.B)(this._material, zz, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return zz.className
          }
          isCompatible(zz) {
            return zz === gz.e.GLSL || zz === gz.e.WGSL
          }
        },
        sz = (0, wz.g)(zz);
      for (const [Fz, Wz] of Object.entries(wz.b)) {
        const Xz = zz[Fz];
        if (Xz) {
          const zz = sz[Fz];
          Object.defineProperty(tz.prototype, Wz, {
            value: Hz(Xz, zz),
            writable: !0,
            configurable: !0
          })
        }
      }
      return tz
    }
    class Pz extends(Bz(oz.e)) {}
    var rz = sz(39010),
      Yz = sz(40234);
    const xz = new WeakMap;

    function mz(zz, tz, sz) {
      let Fz = xz.get(sz);
      Fz || (Fz = new Map, xz.set(sz, Fz));
      const {
        url: Wz
      } = zz;
      let Xz = Fz.get(Wz);
      return Xz || (Xz = async function(zz, tz, sz) {
        const {
          width: Fz,
          height: Wz
        } = zz.getSize(), Xz = Math.round(Wz / Fz), oz = tz && tz.byteLength === Fz * Fz * Xz * 4 ? tz : zz._readPixelsSync();
        return new Yz.e(oz, Fz, Fz, Xz, rz.b.TEXTUREFORMAT_RGBA, sz, !0, !1, Oz.c.NEAREST_NEAREST_MIPLINEAR)
      }(zz, tz, sz), Fz.set(Wz, Xz), Xz.catch((() => {
        Fz.delete(Wz)
      }))), Xz
    }
    var Jz = sz(37271);
    class Iz extends(Bz(vz.i)) {
      constructor(zz, tz) {
        super(zz, tz), tz.textures.forEach(((zz, tz) => {
          zz.mirror.onLoadObservable.add((zz => {
            this.setTextureArrayData(zz, tz).catch((zz => {
              console.error(`Failed to build texture array for atlas ${tz}`, zz)
            }))
          }))
        })), (0, Jz.h)(tz, zz.shaderLanguage)
      }
      async setTextureArrayData(zz, tz) {
        var sz, Fz;
        const Wz = this.featureState,
          {
            width: Xz,
            height: Oz
          } = zz.getSize(),
          oz = Wz.useWebGL2 ? await mz(zz, null !== (sz = null === (Fz = Wz.sources.pixels) || void 0 === Fz ? void 0 : Fz[tz]) && void 0 !== sz ? sz : null, this._material.aJ()) : null;
        (0, Jz.d)(this._material, Wz, tz, oz, Xz, Math.round(Oz / Xz), this._material.shaderLanguage)
      }
    }
    var Cz = sz(40238),
      ez = sz(39472),
      Zz = sz(36473),
      Gz = sz(40240),
      Tz = sz(39562),
      cz = sz(39458),
      jz = sz(40192),
      Az = sz(36969),
      yz = sz(40249);
    class Mz extends Cz.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const dz = {
      Mesh: Gz.b,
      TransformNode: jz.c,
      Lw: Cz.b,
      VertexBuffer: Cz.c,
      BoundingInfo: ez.d,
      XD: Zz.XD,
      ArenaBuffer: Mz,
      SubMesh: cz.c,
      VertexData: Tz.b,
      MirroredGeometry: yz.c,
      meshFromArrays: yz.f,
      plainMeshFromArrays: yz.j
    };
    (0, Az.f)(dz);
    var hz = sz(36800);
    class Qz extends(Bz(Kz.h)) {
      constructor(zz, tz) {
        if (super(zz, tz), zz instanceof Fz.StandardMaterial && tz.dirLightCount > 0) {
          const tz = zz,
            sz = tz._blockDirtyMechanism;
          tz._blockDirtyMechanism = !0, zz.disableLighting = !0, tz._blockDirtyMechanism = sz;
          const Fz = (0, Dz.$)(zz);
          Fz && (Fz.disableLighting = !0, (0, Dz.Z)(Fz))
        }(0, hz.i)(zz)
      }
      dispose(zz) {
        (0, hz.k)(this._material), super.dispose(zz)
      }
    }

    function kz(zz, tz) {
      if (!(tz instanceof Fz.StandardMaterial) || tz.specularTexture) return;
      const {
        r: sz,
        g: Wz,
        b: Xz
      } = tz.specularColor;
      0 === sz && 0 === Wz && 0 === Xz && (zz.SPECULARTERM = !1)
    }(0, Kz.f)({
      disableUnusedSpecularTerm: kz
    });
    var iz = sz(36682),
      Lz = sz(36976);
    const lz = new RegExp(`^#define ${Uz.c}\\s*$`, "m");
    class nz extends(Bz(Uz.k)) {
      constructor(zz, tz) {
        super(zz, tz), this.lw = !1, tz.ditherOnlyWhileFading && (Lz.e.add(zz), this.prewarmDitherTwins(zz))
      }
      prewarmDitherTwins(zz) {
        const tz = new WeakSet;
        zz.onEffectCreatedObservable.add((sz => {
          let {
            effect: Fz,
            subMesh: Wz
          } = sz;
          if (this.featureState.prewarmingDither || tz.has(Fz)) return;
          tz.add(Fz);
          const Xz = null === Wz || void 0 === Wz ? void 0 : Wz.getMesh();
          Xz && !lz.test(Fz.defines) && zz.aJ().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Xz) || tz.delete(Fz)
          }))
        }))
      }
      prewarmDither(zz) {
        if (this.lw || zz.zsz()) return !1;
        const tz = new cz.c(0, 0, 0, 0, 0, zz, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(zz, tz)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== tz.effect
      }
      dispose(zz) {
        this.lw = !0, super.dispose(zz)
      }
    }
    const az = new Map;

    function qz(zz, tz) {
      az.set(zz, tz)
    }
    qz(oz.e, Pz), qz(vz.i, Iz), qz(Uz.k, nz), qz(Kz.h, Qz), (0, uz.b)({
      create: (zz, tz) => {
        const sz = new Fz.StandardMaterial(zz.name, tz);
        return (0, iz.m)(zz, sz), sz.detailMap._pluginDefineNames
      },
      write: (zz, tz, sz) => {
        (0, iz.Q)(zz.mirror, tz, sz)
      },
      addFeature: (zz, tz, sz) => {
        const Fz = az.get(tz.feature);
        if (!Fz) throw new Error(`${tz.feature.name} has no plugin class (registerPluginClass)`);
        new Fz(zz.mirror, tz.state, ...sz)
      },
      texture: (zz, tz, sz) => {
        let {
          url: Fz,
          noMipmap: Wz,
          invertY: Xz,
          samplingMode: oz,
          data: vz,
          sets: Uz
        } = sz;
        if (!vz) {
          const sz = new Oz.c(Fz, tz, Wz, Xz, oz);
          return Object.assign(sz, Uz), void(0, Nz.T)(zz, sz)
        }
        const Kz = {},
          uz = new Promise(((zz, tz) => {
            Kz.onLoad = zz, Kz.onError = (zz, sz) => {
              tz(new Error(`${vz.context}: ${(null===sz||void 0===sz?void 0:sz.message)||zz||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: bz,
            bytes: wz,
            label: Dz
          } = vz,
          gz = {
            noMipmap: Wz,
            invertY: !1,
            samplingMode: oz,
            ...Kz,
            mimeType: bz,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Hz = new Oz.c(null, tz, gz);
        iz.p.set(Hz, uz), Object.assign(Hz, Uz), Hz.updateURL(Fz, wz);
        const Bz = Hz.getInternalTexture();
        Bz && (Bz.label = Dz), zz.uvSet = Hz.coordinatesIndex, zz.matrix.set((0, iz.K)(Hz)), (0, Nz.T)(zz, Hz)
      },
      cube: (zz, tz, sz) => {
        let {
          rootUrl: Fz,
          files: Xz,
          noMipmap: oz,
          luminance: vz
        } = sz;
        const {
          samplingMode: Uz
        } = zz.sampler, Kz = Uz === (0, Nz.I)(oz) ? null : () => {
          (0, iz.I)(uz, Uz)
        }, uz = new Wz.b(Fz, tz, null, oz, Xz, Kz, null, (0, Nz.E)(vz));
        uz.coordinatesMode = Oz.c.SKYBOX_MODE, (0, Nz.T)(zz, uz)
      },
      canvas: (zz, tz, sz) => {
        let {
          width: Fz,
          height: Wz,
          mipmaps: oz,
          samplingMode: vz,
          hasAlpha: Uz = !1,
          wrap: Kz = Oz.c.CLAMP_ADDRESSMODE
        } = sz;
        const uz = new Xz.d(tz, {
          width: Fz,
          height: Wz
        }, zz, oz, vz);
        uz.hasAlpha = Uz, uz.wrapU = Kz, uz.wrapV = Kz;
        const Nz = (0, iz.x)(uz);
        return (0, iz.A)(Nz, uz), Nz
      }
    })
  },
  40249: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      f: () => uz,
      j: () => Nz
    });
    var Fz = sz(40238),
      Wz = sz(39231),
      Xz = sz(39472),
      Oz = sz(39566),
      oz = sz(40240),
      vz = sz(39562),
      Uz = sz(36860);
    class Kz extends Oz.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (zz, tz) => {
          this.releaseUnlessInstanced(tz)
        }, this.onLinked = null
      }
      link(zz) {
        var tz;
        (0, Uz.p)(zz), this.model = zz, null === (tz = this.onLinked) || void 0 === tz || tz.call(this, zz)
      }
      relink() {
        this.release();
        const zz = [];
        for (const Wz of Object.values(this._vertexBuffers))
          if (!Wz.getIsInstanced()) {
            const {
              byteOffset: tz,
              byteStride: sz,
              type: Fz,
              normalized: Xz
            } = Wz;
            zz.push({
              kind: Wz.getKind(),
              data: Wz.getData(),
              offset: tz,
              stride: sz,
              components: Wz.getSize(),
              glType: Fz,
              isNormalized: Xz
            })
          } const tz = this._indices.length ? this._indices : null,
          {
            minimum: sz,
            maximum: Fz
          } = this.extend;
        this.link(new Uz.g(zz, tz, this.getTotalVertices(), new Float64Array(sz.hsz()), new Float64Array(Fz.hsz())))
      }
      copy(zz) {
        if (!this.model) return super.copy(zz);
        const tz = new Kz(zz, this.aJ()),
          sz = this.Qsz(void 0, !0);
        sz && tz.setIndices(sz);
        let Oz = !1;
        for (const Xz in this._vertexBuffers) {
          const zz = this._vertexBuffers[Xz],
            sz = zz.getData();
          if (!sz) continue;
          const oz = zz.getSize(),
            {
              type: vz,
              byteOffset: Uz,
              byteStride: Kz,
              normalized: uz
            } = zz;
          Oz ||= zz.isUpdatable();
          const Nz = zz.getIsInstanced() ? (sz instanceof Array ? 4 * sz.length : sz.byteLength) / Kz : this.getTotalVertices(),
            bz = (0, Wz.s)(sz, oz, vz, Uz, Kz, Nz, !0),
            wz = {
              updatable: zz.isUpdatable(),
              stride: oz,
              type: vz,
              normalized: uz,
              takeBufferOwnership: !0,
              instanced: zz.getIsInstanced()
            };
          tz.setVerticesBuffer(new Fz.c(this.FD(), bz, Xz, wz), Nz)
        }
        return tz._updatable = Oz, tz._boundingInfo = new Xz.d(this.extend.minimum, this.extend.maximum), tz.relink(), tz
      }
      static mergeMeshes(zz, tz, sz, Fz, Wz, Xz) {
        const vz = zz[0].aJ(),
          Uz = new oz.b(zz[0].name + "_merged", vz),
          uz = new Kz(Oz.b.RandomId(), vz, void 0, !1, Uz);
        try {
          if (!oz.b.MergeMeshes(zz, tz, sz, Uz, Wz, Xz)) return Uz.dispose(), null
        } catch (Nz) {
          throw Uz.dispose(), Nz
        }
        return uz.relink(), Uz
      }
      removeVerticesData(zz) {
        this.releaseUnlessInstanced(zz), super.removeVerticesData(zz)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(zz) {
        var tz;
        zz && null !== (tz = this.getVertexBuffer(zz)) && void 0 !== tz && tz.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Uz.v)(this.model), this.model = null)
      }
    }

    function uz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oz.b(zz, sz);
      const Wz = (0, Uz.m)(tz),
        {
          positions: Xz,
          normals: uz,
          uvs: Nz,
          indices: bz,
          named: wz = {}
        } = tz,
        Dz = new vz.b;
      Dz.positions = Xz, Dz.normals = null !== uz && void 0 !== uz ? uz : null, Dz.uvs = null !== Nz && void 0 !== Nz ? Nz : null, Dz.indices = bz;
      const gz = new Kz(Oz.b.RandomId(), sz, Dz, !1, Fz);
      for (const {
          kind: Oz,
          components: oz
        }
        of Wz.vertexAttributes) Oz in wz && Fz.setVerticesData(Oz, wz[Oz], !1, oz);
      return gz.link(Wz), Fz
    }

    function Nz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Wz = new oz.b(zz, sz),
        {
          positions: Xz,
          normals: Oz,
          uvs: Uz,
          indices: Kz
        } = tz;
      return Object.assign(new vz.b, {
        positions: Xz,
        normals: Oz,
        uvs: Uz,
        indices: Kz
      }).applyToMesh(Wz, Fz), Wz
    }
  },
  8318: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      f: () => oz,
      j: () => vz
    });
    var Fz = sz(2140),
      Wz = sz(1223),
      Xz = sz(2145);
    const Oz = ",";

    function oz(zz) {
      if (!zz) return [];
      const tz = new Set,
        sz = [];
      for (const Fz of zz.split(Oz)) {
        const zz = Fz.trim();
        if ((0, Xz.g)(zz) && !tz.has(zz) && (tz.add(zz), sz.push(zz), sz.length >= Wz.n)) break
      }
      return sz
    }

    function vz(zz) {
      const tz = new Set,
        sz = [];
      for (const Fz of zz)
        if ((0, Xz.g)(Fz) && !tz.has(Fz) && (tz.add(Fz), sz.push(Fz), sz.length >= Wz.n)) break;
      return sz.join(Oz)
    }

    function Uz() {
      return vz(Xz.c)
    }

    function Kz(zz) {
      var tz;
      return "emote" === zz ? Uz() : null !== (tz = uz[zz][0]) && void 0 !== tz ? tz : Nz[zz]
    }
    const uz = Wz.u.reduce(((zz, tz) => {
        const sz = [];
        for (const Xz in Fz.h[tz]) {
          var Wz;
          "default" === (null === (Wz = (0, Fz.n)(tz, Xz)) || void 0 === Wz ? void 0 : Wz.cosmeticPack) && sz.push(Xz)
        }
        return zz[tz] = sz, zz
      }), {}),
      Nz = Wz.u.reduce(((zz, tz) => (zz[tz] = Object.keys(Fz.h[tz])[0], zz)), {})
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);